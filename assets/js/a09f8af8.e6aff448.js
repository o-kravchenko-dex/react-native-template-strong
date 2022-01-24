"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1357],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:1,title:"Project"},s=void 0,c={unversionedId:"structure/project",id:"structure/project",title:"Project",description:"Content",source:"@site/docs/structure/project.md",sourceDirName:"structure",slug:"/structure/project",permalink:"/react-native-template-strong/docs/structure/project",editUrl:"https://github.com/svbutko/react-native-template-strong/master/website/docs/structure/project.md",tags:[],version:"current",lastUpdatedAt:1634026274,formattedLastUpdatedAt:"10/12/2021",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Project"},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/react-native-template-strong/docs/getting-started"},next:{title:"Module",permalink:"/react-native-template-strong/docs/structure/module"}},p=[{value:"Content",id:"content",children:[],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"content"},"Content"),(0,o.kt)("p",null,"Here you will see a brief description of each folder, to learn more about what a specific folder does continue reading documentation."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"mocks - module mocks for tests"),(0,o.kt)("li",{parentName:"ul"},"tests - jest tests"),(0,o.kt)("li",{parentName:"ul"},"e2e - detox tests"),(0,o.kt)("li",{parentName:"ul"},"patches - patches made with ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ds300/patch-package"},"patch-package")),(0,o.kt)("li",{parentName:"ul"},"resources",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"images - images and icons"),(0,o.kt)("li",{parentName:"ul"},"fonts - fonts ",(0,o.kt)("inlineCode",{parentName:"li"},".ttf")," files"),(0,o.kt)("li",{parentName:"ul"},"symbols - SF symbols which can be used on iOS"))),(0,o.kt)("li",{parentName:"ul"},"src",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"common",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"components - common components (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"PrimaryButton.tsx"),")"),(0,o.kt)("li",{parentName:"ul"},"helpers - different common helpers (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"platformNativeColor"),")"),(0,o.kt)("li",{parentName:"ul"},"hooks - different common hooks (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"useDebounce"),")"),(0,o.kt)("li",{parentName:"ul"},"localization - project localization"),(0,o.kt)("li",{parentName:"ul"},"urls - URL openers/handlers"),(0,o.kt)("li",{parentName:"ul"},"utils - different utilities (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"newState"),")"),(0,o.kt)("li",{parentName:"ul"},"validations - validations, max and min length constants (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"phoneValidations"),")"))),(0,o.kt)("li",{parentName:"ul"},"core",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"api - API related requests, DTOs"),(0,o.kt)("li",{parentName:"ul"},"store - ",(0,o.kt)("inlineCode",{parentName:"li"},"redux")," store, ",(0,o.kt)("inlineCode",{parentName:"li"},"rootReducer"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"systemSlice")),(0,o.kt)("li",{parentName:"ul"},"theme - colors, common styles, sizes, font constants "))),(0,o.kt)("li",{parentName:"ul"},"modules"),(0,o.kt)("li",{parentName:"ul"},"navigation - pages, roots, tabs, default navigation options",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"helpers - navigation actions, different overlay and modals helpers (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"showDatePicker"),")"))),(0,o.kt)("li",{parentName:"ul"},"types - common types and types of dependencies which are not present"))),(0,o.kt)("li",{parentName:"ul"},"storybook - contains storybook stories")))}m.isMDXComponent=!0}}]);