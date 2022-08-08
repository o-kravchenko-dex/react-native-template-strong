import "react-native-gesture-handler";
import {initializeApp} from "./src/app";
import {isDev} from "./src/core/theme/commonConsts";
//
// if (isDev) {
//   const DevMenu = require("react-native-dev-menu");
// }
//
// // noinspection JSUnresolvedVariable
// if (global.HermesInternal) {
//   if (typeof Intl === "undefined") {
//     require("intl")
//     require("intl/locale-data/jsonp/ru")
//     require("intl/locale-data/jsonp/en")
//   }
//   require('@formatjs/intl-locale').default;
//   require('@formatjs/intl-locale/polyfill').default;
//
//   require("@formatjs/intl-pluralrules/polyfill").default;
//   require("@formatjs/intl-pluralrules/locale-data/ru").default;
//   require("@formatjs/intl-pluralrules/locale-data/en").default;
// }

initializeApp();
