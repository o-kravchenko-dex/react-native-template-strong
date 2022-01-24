"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9908],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return g}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=a.createContext({}),s=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(t),g=i,m=c["".concat(d,".").concat(g)]||c[g]||u[g]||o;return t?a.createElement(m,r(r({ref:n},p),{},{components:t})):a.createElement(m,r({ref:n},p))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=c;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},4321:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var a=t(7462),i=t(3366),o=(t(7294),t(3905)),r=["components"],l={sidebar_position:2,title:"Add language"},d=void 0,s={unversionedId:"localisation/add-language",id:"localisation/add-language",title:"Add language",description:"Description",source:"@site/docs/localisation/add-language.md",sourceDirName:"localisation",slug:"/localisation/add-language",permalink:"/react-native-template-strong/docs/localisation/add-language",editUrl:"https://github.com/svbutko/react-native-template-strong/master/website/docs/localisation/add-language.md",tags:[],version:"current",lastUpdatedAt:1634101010,formattedLastUpdatedAt:"10/13/2021",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Add language"},sidebar:"tutorialSidebar",previous:{title:"Translations",permalink:"/react-native-template-strong/docs/localisation/translations"},next:{title:"Change language",permalink:"/react-native-template-strong/docs/localisation/change-language"}},p=[{value:"Description",id:"description",children:[],level:2},{value:"Add language in localization",id:"add-language-in-localization",children:[],level:2},{value:"Add imports for dayjs",id:"add-imports-for-dayjs",children:[],level:2},{value:"Add imports for intl",id:"add-imports-for-intl",children:[],level:2},{value:"Add language in iOS",id:"add-language-in-ios",children:[],level:2},{value:"Add language in Android",id:"add-language-in-android",children:[],level:2}],u={toc:p};function c(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"To add a new language you have to do some changes in native iOS and Android code in order to show available languages in stores and in application's settings."),(0,o.kt)("p",null,"And it goes without saying you have to add language in ",(0,o.kt)("inlineCode",{parentName:"p"},"localization")," itself and add translation for each string already defined in other languages."),(0,o.kt)("p",null,"There also should be added imports of translations for ",(0,o.kt)("inlineCode",{parentName:"p"},"intl")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"dayjs")," to show correct strings and formats."),(0,o.kt)("p",null,"As an example, I will add Russian language."),(0,o.kt)("h2",{id:"add-language-in-localization"},"Add language in localization"),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"localization.ts")," you can see ",(0,o.kt)("inlineCode",{parentName:"p"},"Languages")," enum."),(0,o.kt)("p",null,"Add your language (in our example ",(0,o.kt)("inlineCode",{parentName:"p"},"ru"),") there based on its locale identifier."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'export enum Languages {\n    en = "en",\n    ru = "ru",\n}\n')),(0,o.kt)("p",null,"Then you have to open every single translation file you have stored in ",(0,o.kt)("inlineCode",{parentName:"p"},"translations")," folder and add ",(0,o.kt)("inlineCode",{parentName:"p"},"ru")," with every single translation string."),(0,o.kt)("p",null,"For example, here's how ",(0,o.kt)("inlineCode",{parentName:"p"},"emptyLocalization")," will look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'export const emptyLocalization = {\n  en: {\n    noData: "No data",\n    checkThisPageLater: "Check this page later",\n  },\n  ru: {\n    noData: "\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445",\n    checkThisPageLater: "\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u044d\u0442\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u043f\u043e\u0437\u0436\u0435",\n  },\n};\n')),(0,o.kt)("p",null,"If you miss a string in some langauge, it will be seen as error in place where you are using this string."),(0,o.kt)("h2",{id:"add-imports-for-dayjs"},"Add imports for dayjs"),(0,o.kt)("p",null,"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"/src/common/localization/dateFormatter.ts")," and the top of this file you will see already an import of English language:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'// eslint-disable-next-line import/no-unassigned-import\nimport "dayjs/locale/en";\n')),(0,o.kt)("p",null,"It has ESLint disable rule because unassigned imports aren't welcome."),(0,o.kt)("p",null,"Add your language import here and add the disable rule comment too:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'// eslint-disable-next-line import/no-unassigned-import\nimport "dayjs/locale/en";\n// eslint-disable-next-line import/no-unassigned-import\nimport "dayjs/locale/ru";\n')),(0,o.kt)("h2",{id:"add-imports-for-intl"},"Add imports for intl"),(0,o.kt)("p",null,"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"/src/common/localization/intlFormatter.ts")," and the top of this file you will see already an import of English language:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'// eslint-disable-next-line import/no-unassigned-import\nimport "intl/locale-data/jsonp/en";\n')),(0,o.kt)("p",null,"Add your language the same way you did with ",(0,o.kt)("inlineCode",{parentName:"p"},"dayjs"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'// eslint-disable-next-line import/no-unassigned-import\nimport "intl/locale-data/jsonp/en";\n// eslint-disable-next-line import/no-unassigned-import\nimport "intl/locale-data/jsonp/ru";\n')),(0,o.kt)("h2",{id:"add-language-in-ios"},"Add language in iOS"),(0,o.kt)("p",null,"Open ",(0,o.kt)("inlineCode",{parentName:"p"},".xcworkspace")," file in XCode."),(0,o.kt)("p",null,"We will be adding stub files without actual translations so that App Store and the application settings would see that the app has support for languages."),(0,o.kt)("p",null,"To add a language follow this ",(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/xcode/adding-support-for-languages-and-regions"},"guide"),"."),(0,o.kt)("p",null,"When you added a language just add a comment there to mention that actual localization is stored within your TypeScript files."),(0,o.kt)("p",null,"More about localization for App Store and other things you can find ",(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/localization/"},"here"),"."),(0,o.kt)("h2",{id:"add-language-in-android"},"Add language in Android"),(0,o.kt)("p",null,"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"Android")," folder in Android Studio."),(0,o.kt)("p",null,"And follow this ",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/training/basics/supporting-devices/languages"},"guide"),"."),(0,o.kt)("p",null,"Just add ",(0,o.kt)("inlineCode",{parentName:"p"},".xml")," strings."))}c.isMDXComponent=!0}}]);