"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5389],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return b}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),b=r,d=u["".concat(l,".").concat(b)]||u[b]||m[b]||s;return n?o.createElement(d,a(a({ref:t},p),{},{components:n})):o.createElement(d,a({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2021:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var o=n(7462),r=n(3366),s=(n(7294),n(3905)),a=["components"],i={sidebar_position:3,title:"SF Symbols"},l=void 0,c={unversionedId:"resources/sf-symbols",id:"resources/sf-symbols",title:"SF Symbols",description:"Content",source:"@site/docs/resources/sf-symbols.md",sourceDirName:"resources",slug:"/resources/sf-symbols",permalink:"/react-native-template-strong/docs/resources/sf-symbols",editUrl:"https://github.com/svbutko/react-native-template-strong/master/website/docs/resources/sf-symbols.md",tags:[],version:"current",lastUpdatedAt:1633518181,formattedLastUpdatedAt:"10/6/2021",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"SF Symbols"},sidebar:"tutorialSidebar",previous:{title:"Images",permalink:"/react-native-template-strong/docs/resources/images"},next:{title:"Vector icons",permalink:"/react-native-template-strong/docs/resources/vector-icons"}},p=[{value:"Content",id:"content",children:[],level:2},{value:"Browsing icons",id:"browsing-icons",children:[],level:2},{value:"Using icons in navigation",id:"using-icons-in-navigation",children:[{value:"BottomTab",id:"bottomtab",children:[],level:3},{value:"BackButton",id:"backbutton",children:[],level:3}],level:2},{value:"Using icons as components",id:"using-icons-as-components",children:[],level:2}],m={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,a);return(0,s.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"content"},"Content"),(0,s.kt)("p",null,"The preferable way to show icons on iOS is to use ",(0,s.kt)("a",{parentName:"p",href:"https://developer.apple.com/sf-symbols/"},"SF Symbols"),"."),(0,s.kt)("h2",{id:"browsing-icons"},"Browsing icons"),(0,s.kt)("p",null,"All icons are stored as enum with names in ",(0,s.kt)("inlineCode",{parentName:"p"},"/resources/symbols/sfSymbols"),". It contains mostly all the 3 100 icons."),(0,s.kt)("p",null,"To take a look at them without using them you can open ",(0,s.kt)("a",{parentName:"p",href:"https://developer.apple.com/sf-symbols/"},"SF Symbols App")," on macOS."),(0,s.kt)("h2",{id:"using-icons-in-navigation"},"Using icons in navigation"),(0,s.kt)("h3",{id:"bottomtab"},"BottomTab"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"react-native-navigation")," currently supports SF Symbols as icon in ",(0,s.kt)("inlineCode",{parentName:"p"},"bottomTab"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},'Main.options = {\n  bottomTab: {\n    sfSymbol: SFSymbols["app.gift"],\n    sfSelectedSymbol: SFSymbols["app.gift.fill"],\n  },\n};\n')),(0,s.kt)("p",null,"It also applies same effect properties as ",(0,s.kt)("inlineCode",{parentName:"p"},"Icon")," ones, like ",(0,s.kt)("inlineCode",{parentName:"p"},"selectedIconColor")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"iconColor"),", see more properties ",(0,s.kt)("a",{parentName:"p",href:"https://wix.github.io/react-native-navigation/api/options-bottomTab#iconwidth"},"here"),"."),(0,s.kt)("h3",{id:"backbutton"},"BackButton"),(0,s.kt)("p",null,"SF Symbol can also be applied directly as ",(0,s.kt)("inlineCode",{parentName:"p"},"topBar"),"'s ",(0,s.kt)("inlineCode",{parentName:"p"},"backButton")," like so:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},'Main.options = {\n  topBar: {\n    backButton: {\n      sfSymbol: SFSymbols["arrow.backward.circle"],\n    },\n  },\n};\n')),(0,s.kt)("h2",{id:"using-icons-as-components"},"Using icons as components"),(0,s.kt)("p",null,"Usage of SF Symbols as components made possible by ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/birkir/react-native-sfsymbols"},"react-native-sfsymbols"),"."),(0,s.kt)("p",null,"You can use it directly like so:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},'<SFSymbol \n    name={SFSymbol["thermometer.sun.fill"]}\n    size={16} \n    multicolor={false}\n/>\n')),(0,s.kt)("p",null,"But it will be shown only on iOS, which is not desired."),(0,s.kt)("p",null,"To work with both iOS and Android, there's ",(0,s.kt)("a",{parentName:"p",href:"/react-native-template-strong/docs/components/icon-platform"},"IconPlatform")," component,\nwhich shows SF Symbols on iOS and Material Icons on Android, it works next way:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},'<IconPlatform \n    iosName={SFSymbols["thermometer.sun.fill"]}\n    androidName={"star-rate"}\n    size={32} \n    resizeMode={"contain"} \n    style={styles.clauseIcon}\n/>\n')))}u.isMDXComponent=!0}}]);