"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[69454],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>u,MDXProvider:()=>d,mdx:()=>v,useMDXComponents:()=>c,withMDXComponents:()=>p});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var u=r.createContext({}),p=function(e){return function(t){var n=c(t.components);return r.createElement(e,a({},t,{components:n}))}},c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=s,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function v(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},86744:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var r=n(83117),s=n(80102),a=(n(67294),n(3905)),i=["components"],o={id:"suspense",title:"Suspense",slug:"/guides/relay-resolvers/suspense/",description:"Handling loading states for live data"},l=void 0,u={unversionedId:"guides/relay-resolvers/suspense",id:"guides/relay-resolvers/suspense",title:"Suspense",description:"Handling loading states for live data",source:"@site/docs/guides/relay-resolvers/suspense.md",sourceDirName:"guides/relay-resolvers",slug:"/guides/relay-resolvers/suspense/",permalink:"/docs/next/guides/relay-resolvers/suspense/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/docs/guides/relay-resolvers/suspense.md",tags:[],version:"current",frontMatter:{id:"suspense",title:"Suspense",slug:"/guides/relay-resolvers/suspense/",description:"Handling loading states for live data"},sidebar:"docs",previous:{title:"Live Fields",permalink:"/docs/next/guides/relay-resolvers/live-fields/"},next:{title:"Error Handling",permalink:"/docs/next/guides/relay-resolvers/errors/"}},p={},c=[{value:"Suspense Sentinel",id:"suspense-sentinel",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,s.Z)(e,i);return(0,a.mdx)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"With ",(0,a.mdx)("a",{parentName:"p",href:"/docs/next/guides/relay-resolvers/live-fields/"},"Live Resolvers"),", it's possible that the data you are exposing in the graph may not be synchronously available. For example, if you are fetching data from a remote API, it may take some time for the data to be fetched. Relay Resolvers provide a mechanism for handling this loading state."),(0,a.mdx)("p",null,'If a Live Resolver returns the "suspense sentinel" value, all consumers of that field will suspend until that field updates with a non-suspense value.'),(0,a.mdx)("h2",{id:"suspense-sentinel"},"Suspense Sentinel"),(0,a.mdx)("p",null,"If a Live Resolver is in a loading state, it may return a special sentinel value to indicate that the data is not yet available."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-ts"},"import {suspenseSentinel} from 'relay-runtime';\n\n/**\n * @RelayResolver Query.myIp: String\n * @live\n */\nexport function myIp(): LiveState<string> {\n  return {\n    read: () => {\n      const state = store.getState();\n      const ipLoadObject = state.ip;\n      if (ipLoadObject.status === \"LOADING\") {\n        return suspenseSentinel();\n      }\n      return state.ip;\n    },\n    subscribe: (cb) => {\n      return store.subscribe(cb);\n    },\n  };\n}\n")),(0,a.mdx)("admonition",{type:"note"},(0,a.mdx)("p",{parentName:"admonition"},"If a query or fragment will suspend if it reads any resolver field that is in a suspended state, even if it reads that resolver field indirectly via another resolvers ",(0,a.mdx)("inlineCode",{parentName:"p"},"@rootFragment"),".")))}m.isMDXComponent=!0}}]);