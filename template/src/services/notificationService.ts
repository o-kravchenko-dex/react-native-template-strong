/* eslint-disable react-hooks/rules-of-hooks */
import {Linking} from "react-native";
import {firebase} from "@react-native-firebase/messaging";
import PushNotification, {Importance} from "react-native-push-notification";
import {i18next} from "~/common/localization/localization";
import {isIos} from "~/core/theme/commonConsts";
import {useEffect} from "react";
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import {getOrCreateLogger} from "~/startup/configureLogger";
import {LogCategories} from "~/infrastructure/logger";
import {MultiLogger} from "~/infrastructure/logger/multiLogger";
// import {profileApi} from "~/common/api/profile";
// import {store, useAppSelector} from "~/core/store/store";
import {dynamicLink} from "~/services/dynamicLinkService";

class NotificationService {
  private static get logger(): MultiLogger {
    return getOrCreateLogger(LogCategories.Notification);
  }

  constructor() {
    NotificationService.logger.verb("creating notification service");
    this.requestPushPermissions = this.requestPushPermissions.bind(this);
    this.useConfigurePushNotifications = this.useConfigurePushNotifications.bind(this);
    this.sendPushToken = this.sendPushToken.bind(this);
  }

  requestPushPermissions() {
    const registerDevice = async () => {
      if (isIos) {
        firebase.messaging()
          .getToken()
          .then(this.sendPushToken)
          .catch((e) => NotificationService.logger.error("firebase.messaging.getToken error", e));
      } else {
        firebase.messaging().registerDeviceForRemoteMessages()
          .then(() => {
            firebase.messaging()
              .getToken()
              .then(this.sendPushToken)
              .catch((e) => NotificationService.logger.error("firebase.messaging.getToken error", e));
          })
          .catch((e) => NotificationService.logger.error("firebase.registerDeviceForRemoteMessages error", e));
      }
    };
    firebase.messaging().hasPermission().then(async (status) => {
      NotificationService.logger.verb("requesting status");
      if (status >= 1) {
        NotificationService.logger.verb("allowed, registration");
        await registerDevice();
      } else {
        NotificationService.logger.verb("not allowed, requesting");
        firebase.messaging().requestPermission({alert: true, badge: true, sound: true}).then(async newStatus => {
          if (newStatus >= 1) {
            NotificationService.logger.verb("allowed by request, registration");
            await registerDevice();
          } else {
            NotificationService.logger.verb("denied by request, registration");
          }
        });
      }
    });
  }

  useConfigurePushNotifications() {
    // const token = useAppSelector(state => state.auth.accessToken);
    //todo add profileApi

    useEffect(() => {
      const tokenUnsubscribe = firebase.messaging().onTokenRefresh(this.sendPushToken);

      // noinspection JSUnusedGlobalSymbols
      PushNotification.configure({
        onNotification: async (notification) => {
          if (notification.userInteraction) {
            //handle notification here
            if (notification.data.deepLinkUrl) {
              try {
                const isTransitionFound = await dynamicLink.handleLink(notification.data.deepLinkUrl);
                if (!isTransitionFound) {
                  Linking.openURL(notification.data.deepLinkUrl);
                }
              } catch (error) {
                NotificationService.logger.error("Handling notification link error: ", {error, notification});
              }
            }
            NotificationService.logger.info("PUSH pressed data: ", notification);
          }
          notification.finish?.(PushNotificationIOS.FetchResult.NoData);
        },
      });
      this.requestPushPermissions();

      PushNotification.createChannel(
        {
          channelId: "fcm_fallback_notification_channel",
          channelName: i18next.t("common.all"),
          playSound: true,
          vibrate: true,
          importance: Importance.HIGH,
          soundName: "default",
        },
        (created) => NotificationService.logger.verb(`createChannel returned '${created}`),
      );

      const messageUnsubscribe = firebase.messaging().onMessage((message) => {
        NotificationService.logger.verb("message from firebase", {message});

        if (isIos) {
          PushNotificationIOS.addNotificationRequest({
            id: message.messageId || "",
            title: message.notification?.title,
            body: message.notification?.body || "",
            userInfo: message.data,
          });
        }
      });

      return () => {
        tokenUnsubscribe();
        messageUnsubscribe();
      };
    }, [/*token*/]);
  }

  sendPushToken = async (token: string) => {
    NotificationService.logger.debug("fcmToken: " + token);

    // store.dispatch(profileApi.endpoints.registerPushToken.initiate(token));
  };
}

export const notificationService = new NotificationService();
