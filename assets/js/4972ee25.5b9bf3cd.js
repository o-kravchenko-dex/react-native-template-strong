"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6638],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1530:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={sidebar_position:3,title:"Store"},l=void 0,p={unversionedId:"redux/store",id:"redux/store",title:"Store",description:"Content",source:"@site/docs/redux/store.md",sourceDirName:"redux",slug:"/redux/store",permalink:"/react-native-template-strong/docs/redux/store",editUrl:"https://github.com/svbutko/react-native-template-strong/master/website/docs/redux/store.md",tags:[],version:"current",lastUpdatedAt:1633614778,formattedLastUpdatedAt:"10/7/2021",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Store"},sidebar:"tutorialSidebar",previous:{title:"Core idea",permalink:"/react-native-template-strong/docs/redux/core-idea"},next:{title:"State",permalink:"/react-native-template-strong/docs/redux/state"}},c=[{value:"Content",id:"content",children:[],level:2},{value:"Middlewares",id:"middlewares",children:[{value:"Redux-persist",id:"redux-persist",children:[],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"content"},"Content"),(0,i.kt)("p",null,"The store is defined together with ",(0,i.kt)("inlineCode",{parentName:"p"},"redux-persist")," (read next about it) as ",(0,i.kt)("inlineCode",{parentName:"p"},"reducer")," and disables ",(0,i.kt)("inlineCode",{parentName:"p"},"serializableCheck")," of middlewares:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const store = configureStore({\n  reducer: persistedReducer,\n  middleware: (getDefaultMiddleware) =>\n    getDefaultMiddleware({\n      serializableCheck: false,\n    }),\n});\n")),(0,i.kt)("h2",{id:"middlewares"},"Middlewares"),(0,i.kt)("p",null,"This template utilizes middlewares what come together with the toolkit with addition of ",(0,i.kt)("inlineCode",{parentName:"p"},"redux-persist")," to have data stored for offline usage."),(0,i.kt)("h3",{id:"redux-persist"},"Redux-persist"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/rt2zz/redux-persist"},"Check it out")," how it works."),(0,i.kt)("p",null,"It's defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"src/core/store.ts")," near the store:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'const persistConfig: PersistConfig<RootState> = {\n  key: "root",\n  storage: AsyncStorage,\n  version: 1,\n  timeout: 1000,\n};\n')),(0,i.kt)("p",null,"It uses ",(0,i.kt)("inlineCode",{parentName:"p"},"AsyncStorage")," as storage, if you don't like it you can change it to your own likings."),(0,i.kt)("p",null,"It creates ",(0,i.kt)("inlineCode",{parentName:"p"},"persistor"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export const persistor = persistStore(store);\n")),(0,i.kt)("p",null,"Which is being used in ",(0,i.kt)("inlineCode",{parentName:"p"},"PersistGate")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"reduxProvider")," wrapper:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"export const reduxProvider = (Component: any) => (props: any) => {\n  return (\n    <Provider store={store}>\n      <PersistGate loading={null} persistor={persistor}>\n        <Component {...props} />\n      </PersistGate>\n    </Provider>\n  );\n};\n")))}d.isMDXComponent=!0}}]);