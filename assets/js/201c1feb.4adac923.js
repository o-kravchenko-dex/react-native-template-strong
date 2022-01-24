"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1186],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3202:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={sidebar_position:2,title:"Core idea"},p=void 0,l={unversionedId:"redux/core-idea",id:"redux/core-idea",title:"Core idea",description:"Content",source:"@site/docs/redux/core-idea.md",sourceDirName:"redux",slug:"/redux/core-idea",permalink:"/react-native-template-strong/docs/redux/core-idea",editUrl:"https://github.com/svbutko/react-native-template-strong/master/website/docs/redux/core-idea.md",tags:[],version:"current",lastUpdatedAt:1633614778,formattedLastUpdatedAt:"10/7/2021",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Core idea"},sidebar:"tutorialSidebar",previous:{title:"Before starting",permalink:"/react-native-template-strong/docs/redux/before-starting"},next:{title:"Store",permalink:"/react-native-template-strong/docs/redux/store"}},s=[{value:"Content",id:"content",children:[],level:2}],u={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"content"},"Content"),(0,i.kt)("p",null,'The core idea is to keep components as "stupid" as possible and connecting only pages to ',(0,i.kt)("inlineCode",{parentName:"p"},"redux"),"."),(0,i.kt)("p",null,"This approach makes components easier to test and reuse and not bounding them to redux logic."),(0,i.kt)("p",null,"Only in some rare cases it might be needed to connect to ",(0,i.kt)("inlineCode",{parentName:"p"},"redux")," directly from components but other times it's better to provide props."),(0,i.kt)("p",null,"So we're basically connecting pages where we would like to use ",(0,i.kt)("inlineCode",{parentName:"p"},"redux"),", like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"  Navigation.registerComponent(\n    Pages.splash.name,\n    () => gestureHandlerRootHOC(reduxProvider(Splash)),\n    () => Splash,\n  );\n")),(0,i.kt)("p",null,"And on the page we will be executing our logic with ",(0,i.kt)("inlineCode",{parentName:"p"},"redux")," what we need and getting data from it using ",(0,i.kt)("inlineCode",{parentName:"p"},"useAppSelector"),"."),(0,i.kt)("p",null,"And passing props down the tree if needed."))}d.isMDXComponent=!0}}]);