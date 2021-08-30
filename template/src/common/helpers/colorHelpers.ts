import {PlatformColor} from "react-native";
import {Colors, isIos, PlatformColorsAndroid, PlatformColorsIOS} from "../../core/theme";

export function platformNativeColor(iosColor: PlatformColorsIOS, androidColor: PlatformColorsAndroid) {
  return PlatformColor(isIos ? iosColor : androidColor);
}

export function platformLocalColor(iosColor: Colors, androidColor: Colors) {
  return isIos ? iosColor : androidColor;
}

export function platformMixedColor(iosColor: Colors | PlatformColorsIOS, androidColor: Colors | PlatformColorsAndroid) {
  if (isIos) {
    return iosColor in Colors ? (iosColor as Colors) : PlatformColor(iosColor);
  } else {
    return androidColor in Colors ? (androidColor as Colors) : PlatformColor(androidColor);
  }
}
