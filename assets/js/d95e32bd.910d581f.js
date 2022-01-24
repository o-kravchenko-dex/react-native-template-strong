"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1390],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(n),m=o,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||i;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7415:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return f}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:11,title:"netInfoHelpers"},l=void 0,p={unversionedId:"helpers/net-info-helpers",id:"helpers/net-info-helpers",title:"netInfoHelpers",description:"Content",source:"@site/docs/helpers/net-info-helpers.md",sourceDirName:"helpers",slug:"/helpers/net-info-helpers",permalink:"/react-native-template-strong/docs/helpers/net-info-helpers",editUrl:"https://github.com/svbutko/react-native-template-strong/master/website/docs/helpers/net-info-helpers.md",tags:[],version:"current",lastUpdatedAt:1633852672,formattedLastUpdatedAt:"10/10/2021",sidebarPosition:11,frontMatter:{sidebar_position:11,title:"netInfoHelpers"},sidebar:"tutorialSidebar",previous:{title:"InputMask",permalink:"/react-native-template-strong/docs/helpers/input-mask"},next:{title:"shareHelpers",permalink:"/react-native-template-strong/docs/helpers/share-helpers"}},c=[{value:"Content",id:"content",children:[{value:"startListeningToNetInfo",id:"startlisteningtonetinfo",children:[{value:"Usage example",id:"usage-example",children:[],level:4}],level:3},{value:"unsubscribeFromNetInfo",id:"unsubscribefromnetinfo",children:[],level:3}],level:2}],u={toc:c};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"content"},"Content"),(0,i.kt)("p",null,"Checks Internet connection. Made possible by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-native-netinfo/react-native-netinfo"},"react-native-netinfo"),"."),(0,i.kt)("h3",{id:"startlisteningtonetinfo"},"startListeningToNetInfo"),(0,i.kt)("p",null,"Starts listening to net-info changes, and if ",(0,i.kt)("inlineCode",{parentName:"p"},"isInternetReachable")," is equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," then shows ",(0,i.kt)("inlineCode",{parentName:"p"},"alert")," that states that there are no Internet connection and gives user a choice to open settings."),(0,i.kt)("p",null,"Won't work if you provide ",(0,i.kt)("inlineCode",{parentName:"p"},"IGNORE_NET_INFO")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," in your environment variables."),(0,i.kt)("p",null,"Shows only once."),(0,i.kt)("p",null,"Don't forget to unsubscribe."),(0,i.kt)("h4",{id:"usage-example"},"Usage example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"export function setInitialRoot() {\n  Navigation.setRoot({\n    root: {\n      component: {\n        name: Pages.splash.name,\n        id: Pages.splash.id,\n        options: {\n          topBar: {\n            visible: false,\n          },\n        },\n      },\n    },\n  }).then(startListeningToNetInfo);\n}\n")),(0,i.kt)("h3",{id:"unsubscribefromnetinfo"},"unsubscribeFromNetInfo"),(0,i.kt)("p",null,"Unsubscribe from listening to net-info changes."))}f.isMDXComponent=!0}}]);