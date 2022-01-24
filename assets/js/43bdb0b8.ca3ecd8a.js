"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6394],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return g}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(a),g=r,u=c["".concat(s,".").concat(g)]||c[g]||m[g]||l;return a?n.createElement(u,i(i({ref:t},d),{},{components:a})):n.createElement(u,i({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8051:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={sidebar_position:4,title:"dialogsHelpers"},s=void 0,p={unversionedId:"helpers/dialogs-helpers",id:"helpers/dialogs-helpers",title:"dialogsHelpers",description:"Content",source:"@site/docs/helpers/dialogs-helpers.md",sourceDirName:"helpers",slug:"/helpers/dialogs-helpers",permalink:"/react-native-template-strong/docs/helpers/dialogs-helpers",editUrl:"https://github.com/svbutko/react-native-template-strong/master/website/docs/helpers/dialogs-helpers.md",tags:[],version:"current",lastUpdatedAt:1633852672,formattedLastUpdatedAt:"10/10/2021",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"dialogsHelpers"},sidebar:"tutorialSidebar",previous:{title:"defaultKeyIdExtractor",permalink:"/react-native-template-strong/docs/helpers/default-key-id-extractor"},next:{title:"imageHelpers",permalink:"/react-native-template-strong/docs/helpers/image-helpers"}},d=[{value:"Content",id:"content",children:[{value:"showActionSheet",id:"showactionsheet",children:[{value:"Params",id:"params",children:[],level:4},{value:"Usage example",id:"usage-example",children:[],level:4}],level:3},{value:"showAlert",id:"showalert",children:[{value:"Params",id:"params-1",children:[],level:4},{value:"Usage example",id:"usage-example-1",children:[],level:4}],level:3},{value:"showCommonDialog",id:"showcommondialog",children:[{value:"Params",id:"params-2",children:[],level:4},{value:"Usage example",id:"usage-example-2",children:[],level:4}],level:3}],level:2}],m={toc:d};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"content"},"Content"),(0,l.kt)("p",null,"Used to show dialogs, alerts and action sheets"),(0,l.kt)("h3",{id:"showactionsheet"},"showActionSheet"),(0,l.kt)("p",null,"Shows action sheet on iOS with defined options, on Android it shows React Native's ",(0,l.kt)("inlineCode",{parentName:"p"},"Alert")," with title, message and buttons."),(0,l.kt)("h4",{id:"params"},"Params"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"options"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"ActionSheetIOSOptions")),(0,l.kt)("td",{parentName:"tr",align:"left"},"True"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Options which will be used to show ",(0,l.kt)("inlineCode",{parentName:"td"},"ActionSheetIOS")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"Alert.alert"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"onOptionSelected"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"(optionIndex: number) => void")),(0,l.kt)("td",{parentName:"tr",align:"left"},"True"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Handler which receives selected index of button")))),(0,l.kt)("h4",{id:"usage-example"},"Usage example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},'  const onShowActionSheetPress = useCallback(() => {\n    showActionSheet(\n        {\n            title: "Action Sheet Title",\n            options: ["Cancel", "Action 1", "Action 2"],\n            cancelButtonIndex: 0,\n            destructiveButtonIndex: 3,\n            message: "Action Sheet Message",\n        },\n        (optionIndex) => {\n            console.warn(`Option ${optionIndex} was pressed`);\n        },\n    );\n}, []);\n')),(0,l.kt)("h3",{id:"showalert"},"showAlert"),(0,l.kt)("p",null,"Shows React Native's ",(0,l.kt)("inlineCode",{parentName:"p"},"Alert")," with provided parameters."),(0,l.kt)("h4",{id:"params-1"},"Params"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"title"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"True"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The dialog's title. Passing empty string will hide the title")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:"left"},"An optional message that appears below the dialog's title")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"buttons"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"AlertButton[]")),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:"left"},"An optional array containing buttons configuration")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"options"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"AlertOptions")),(0,l.kt)("td",{parentName:"tr",align:"left"},"False"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"{cancelable: true}")),(0,l.kt)("td",{parentName:"tr",align:"left"},"An optional Alert configuration for the Android")))),(0,l.kt)("h4",{id:"usage-example-1"},"Usage example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},'  const onShowAlertPress = useCallback(() => {\n    showAlert("Title", "Message", [\n        {\n            text: "Action 1",\n            onPress: () => {\n                console.warn("Action 1 was pressed");\n            },\n            style: "default",\n        },\n        {\n            text: "Action 2",\n            onPress: () => {\n                console.warn("Action 2 was pressed");\n            },\n            style: "destructive",\n        },\n    ]);\n}, []);\n')),(0,l.kt)("h3",{id:"showcommondialog"},"showCommonDialog"),(0,l.kt)("p",null,"Shows common yes-no dialog with title and message and on yes press callback."),(0,l.kt)("h4",{id:"params-2"},"Params"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"title"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"True"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The dialog's title. Passing empty string will hide the title")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"True"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The message that appears below the dialog's title")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"onAcceptPress"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"() => void")),(0,l.kt)("td",{parentName:"tr",align:"left"},"True"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The callback from ",(0,l.kt)("inlineCode",{parentName:"td"},"Yes")," pressed button")))),(0,l.kt)("h4",{id:"usage-example-2"},"Usage example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},'  const onShowCommonDialogPress = useCallback(() => {\n    showCommonDialog("Title", "Message", () => {\n        console.warn("You pressed Yes");\n    });\n}, []);\n')))}c.isMDXComponent=!0}}]);