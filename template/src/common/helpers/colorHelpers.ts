import {PlatformColor} from "react-native";
import {Colors, isIos, PlatformColorsAndroid, PlatformColorsIOS} from "../../core/theme";

export function platformNativeColor(iosColor: PlatformColorsIOS, androidColor: PlatformColorsAndroid) {
  return isIos ? PlatformColor(iosColor) : androidColor;
}

export function platformLocalColor(iosColor: Colors, androidColor: Colors) {
  return isIos ? iosColor : androidColor;
}
