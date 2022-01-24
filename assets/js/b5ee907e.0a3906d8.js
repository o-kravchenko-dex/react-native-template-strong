"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3800],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4943:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:22,title:"App release"},p=void 0,c={unversionedId:"app-release",id:"app-release",title:"App release",description:"Preparations",source:"@site/docs/app-release.md",sourceDirName:".",slug:"/app-release",permalink:"/react-native-template-strong/docs/app-release",editUrl:"https://github.com/svbutko/react-native-template-strong/master/website/docs/app-release.md",tags:[],version:"current",lastUpdatedAt:1633614778,formattedLastUpdatedAt:"10/7/2021",sidebarPosition:22,frontMatter:{sidebar_position:22,title:"App release"},sidebar:"tutorialSidebar",previous:{title:"App icon",permalink:"/react-native-template-strong/docs/app-icon"},next:{title:"React Native config",permalink:"/react-native-template-strong/docs/configs/rn-config"}},s=[{value:"Preparations",id:"preparations",children:[],level:2},{value:"Common start",id:"common-start",children:[],level:2},{value:"Android",id:"android",children:[],level:2},{value:"iOS",id:"ios",children:[],level:2},{value:"After all",id:"after-all",children:[],level:2}],u={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"preparations"},"Preparations"),(0,i.kt)("p",null,"Make sure that"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ESLint and TypeScript have no errors and warnings"),(0,i.kt)("li",{parentName:"ul"},"All tests are running and not failing"),(0,i.kt)("li",{parentName:"ul"},"API is reachable and working"),(0,i.kt)("li",{parentName:"ul"},"Components and pages are rendering correctly on different devices (smartphones, tablets), different screen sizes (iPhone X, iPhone SE, iPad, Pixel 5, Android Tablet), both platforms (iOS, Android)"),(0,i.kt)("li",{parentName:"ul"},"App icons and splash screen are set up")),(0,i.kt)("h2",{id:"common-start"},"Common start"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Select production environment (",(0,i.kt)("inlineCode",{parentName:"li"},"npm run environment:production-nix")," on macOS/Linux or ",(0,i.kt)("inlineCode",{parentName:"li"},"npm run environment:production-win")," on Windows)"),(0,i.kt)("li",{parentName:"ul"},"Bump the update version (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"npm run version:major")," for major bump)")),(0,i.kt)("h2",{id:"android"},"Android"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Build the release bundle (",(0,i.kt)("inlineCode",{parentName:"li"},"npm android:build-release-bundle-nix")," on macOS/Linux or ",(0,i.kt)("inlineCode",{parentName:"li"},"npm run android:build-release-bundle-win")," on Windows)"),(0,i.kt)("li",{parentName:"ul"},"Test that it works on one of your devices"),(0,i.kt)("li",{parentName:"ul"},"If everything is fine, then create an update in ",(0,i.kt)("a",{parentName:"li",href:"https://play.google.com/console/"},"Google Play Market Developer Console"))),(0,i.kt)("h2",{id:"ios"},"iOS"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open ",(0,i.kt)("inlineCode",{parentName:"li"},".xcworkspace")," file in XCode"),(0,i.kt)("li",{parentName:"ul"},"Select ",(0,i.kt)("inlineCode",{parentName:"li"},"Any iOS device (arm64)")," in devices"),(0,i.kt)("li",{parentName:"ul"},"Select ",(0,i.kt)("inlineCode",{parentName:"li"},"Product")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"Archive")),(0,i.kt)("li",{parentName:"ul"},"Follow the instructions after the archive task will be completed")),(0,i.kt)("h2",{id:"after-all"},"After all"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Commit updated changes of iOS, Android and package.json versions"),(0,i.kt)("li",{parentName:"ul"},"Create a tag at this commit with version name, so it would be easier to rollback.")))}d.isMDXComponent=!0}}]);