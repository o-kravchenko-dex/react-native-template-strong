import {Linking} from "react-native";
import Config from "react-native-config";
import dynamicLinks, {FirebaseDynamicLinksTypes} from "@react-native-firebase/dynamic-links";
import {MultiLogger} from "~/infrastructure/logger/multiLogger";
import {getOrCreateLogger} from "~/startup/configureLogger";
import {LogCategories} from "~/infrastructure/logger";
import {Tabs} from "~/navigation/tabs";
import {Pages} from "~/navigation/pages";
import {navigation} from "~/services/navigationService";

class DynamicLinkService {
  private static get logger(): MultiLogger {
    return getOrCreateLogger(LogCategories.DynamicLink);
  }

  constructor() {
    this.init = this.init.bind(this);
    this.buildDynamicLink = this.buildDynamicLink.bind(this);
    this.handleLink = this.handleLink.bind(this);
  }

  async init(): Promise<boolean> {
    try {
      dynamicLinks().onLink(async (link) => this.handleDeepLinkTransition(link.url));
      Linking.addEventListener("url", async (event) => this.handleDeepLinkTransition(event.url));
      let initialLink: {url: string} | null = await dynamicLinks().getInitialLink();
      if (!initialLink) {
        const url = await Linking.getInitialURL() || "";
        initialLink = {url};
      }
      DynamicLinkService.logger.verb("Initial link", {initialLink});

      if (initialLink?.url) {
        return this.handleDeepLinkTransition(initialLink.url);
      }
    } catch (e) {
      DynamicLinkService.logger.error("Initial link handling error", e);
    }

    return false;
  }

  async handleLink(link: string) {
    return this.handleDeepLinkTransition(link);
  }

  async buildDynamicLink(url: string, campaign?: string, useFullLink?: boolean): Promise<string> {
    const dynamicLinkSettings: FirebaseDynamicLinksTypes.DynamicLinkParameters = {
      link: url,
      domainUriPrefix: Config.DYNAMIC_LINK_PREFIX,
    };

    if (campaign) {
      dynamicLinkSettings.analytics = {campaign};
    }

    return useFullLink
      ? dynamicLinks().buildLink(dynamicLinkSettings)
      : dynamicLinks().buildShortLink(dynamicLinkSettings, dynamicLinks.ShortLinkType.SHORT);
  }

  private queryToObject(query?: string): Record<string, string> {
    const paramMap: Record<string, string> = {};
    query?.split("&")?.map(paramItem => {
      const keyValuePair = paramItem.split("=");
      if (keyValuePair[1]) {
        paramMap[keyValuePair[0]] = decodeURIComponent(keyValuePair[1]);
      } else {
        paramMap["link"] = decodeURIComponent(keyValuePair[0]);
      }
    });

    return paramMap;
  }

  private async handlePageTransition(query: string): Promise<boolean> {
    return new Promise(async (resolve) => {
      try {
        const paramMap = this.queryToObject(query);
        DynamicLinkService.logger.verb("#handlePageTransition params", paramMap);
        const tab = paramMap["tab"] &&
          Object.entries(Tabs).find(([key]) => key.toLowerCase() == paramMap["tab"].toLowerCase())?.[1];
        const screen = paramMap["screen"] &&
          Object.entries(Pages).find(([key]) => key.toLowerCase() == paramMap["screen"].toLowerCase())?.[1];
        if (tab) {
          await navigation.popToRootAsync();
          navigation.updateOptions({bottomTabs: {currentTabId: tab.id}});
        }
        if (screen) {
          const screenParams = {
            params: {...paramMap, itemId: paramMap["id"], tab: undefined, screen: undefined},
            options: {bottomTabs: {visible: false}},
          };
          await navigation.navigateAsync(screen, screenParams);
        }
        resolve(true);
      } catch (e) {
        DynamicLinkService.logger.error("#handlePageTransition error", e);
        resolve(false);
      }
    });
  }

  private async handleDeepLinkTransition(url: string): Promise<boolean> {
    DynamicLinkService.logger.verb("#handleDeepLinkTransition start", {url});
    let result = false;
    if (!url) {
      return result;
    }
    const [_path, query] = url.split("?");
    const isSiteUrl = url.indexOf(Config.BASE_SITE_URL) >= 0;
    const isFirebaseUrl = url.indexOf(Config.DYNAMIC_LINK_PREFIX) >= 0;
    if (isFirebaseUrl) {
      const paramMap = this.queryToObject(query);

      return this.handleDeepLinkTransition(paramMap["link"]);
    }
    if (!isSiteUrl && !isFirebaseUrl) {
      return result;
    }
    if (query) {
      result = await this.handlePageTransition(query);
    } else {
      result = false;
    }

    DynamicLinkService.logger.verb("#handleDeepLinkTransition result", {
      url,
      result,
    });

    return result;
  }
}

export const dynamicLink = new DynamicLinkService();