"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8608],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1187:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:5,title:"SectionListWrapper"},p=void 0,c={unversionedId:"components/section-list-wrapper",id:"components/section-list-wrapper",title:"SectionListWrapper",description:"Content",source:"@site/docs/components/section-list-wrapper.md",sourceDirName:"components",slug:"/components/section-list-wrapper",permalink:"/react-native-template-strong/docs/components/section-list-wrapper",editUrl:"https://github.com/svbutko/react-native-template-strong/master/website/docs/components/section-list-wrapper.md",tags:[],version:"current",lastUpdatedAt:1634026274,formattedLastUpdatedAt:"10/12/2021",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"SectionListWrapper"},sidebar:"tutorialSidebar",previous:{title:"FlatListWrapper",permalink:"/react-native-template-strong/docs/components/flat-list-wrapper"},next:{title:"IconPlatform",permalink:"/react-native-template-strong/docs/components/icon-platform"}},s=[{value:"Content",id:"content",children:[],level:2},{value:"Params",id:"params",children:[],level:2},{value:"Usage example",id:"usage-example",children:[],level:2}],d={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"content"},"Content"),(0,o.kt)("p",null,"Wrapper around ",(0,o.kt)("inlineCode",{parentName:"p"},"SectionList")," which operates based on provided ",(0,o.kt)("inlineCode",{parentName:"p"},"LoadState")," and shows appropriate data."),(0,o.kt)("h2",{id:"params"},"Params"),(0,o.kt)("p",null,"Extends ",(0,o.kt)("inlineCode",{parentName:"p"},"SectionListProps")," and additionally adds next properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"loadState"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"LoadState")),(0,o.kt)("td",{parentName:"tr",align:"left"},"True"),(0,o.kt)("td",{parentName:"tr",align:"left"},"-"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Load state")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"tryAgain"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"() => void")),(0,o.kt)("td",{parentName:"tr",align:"left"},"False"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Action callback which occurs when pressing on Try Again")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"error"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string or null")),(0,o.kt)("td",{parentName:"tr",align:"left"},"False"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"localization.errors.listErrorTitle")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Error text which will be shown to user in case if ",(0,o.kt)("inlineCode",{parentName:"td"},"loadState == LoadState.error"))))),(0,o.kt)("h2",{id:"usage-example"},"Usage example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"  return (\n    <SectionListWrapper\n        stickySectionHeadersEnabled={true}\n        sections={sections}\n        ListHeaderComponent={<BalanceListHeader balance={balance} />}\n        loadState={loadState}\n        renderItem={renderItem}\n        renderSectionHeader={renderSectionHeader}\n        error={error}\n        tryAgain={tryAgain}\n        onRefresh={pullToRefresh}\n        onEndReached={loadMore}\n        ListEmptyComponent={<EmptyView title={localization.empty.payment} description={localization.empty.paymentDescription} />}\n    />\n);\n")))}m.isMDXComponent=!0}}]);