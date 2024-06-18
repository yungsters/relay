"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[11892],{3905:(e,r,n)=>{n.r(r),n.d(r,{MDXContext:()=>c,MDXProvider:()=>m,mdx:()=>y,useMDXComponents:()=>p,withMDXComponents:()=>u});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(){return l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},l.apply(this,arguments)}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),u=function(e){return function(r){var n=p(r.components);return t.createElement(e,l({},r,{components:n}))}},p=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},m=function(e){var r=p(e.components);return t.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},v=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,v=u["".concat(i,".").concat(m)]||u[m]||d[m]||l;return n?t.createElement(v,a(a({ref:r},c),{},{components:n})):t.createElement(v,a({ref:r},c))}));function y(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=v;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<l;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}v.displayName="MDXCreateElement"},38552:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var t=n(83117),o=n(80102),l=(n(67294),n(3905)),i=["components"],a={id:"enabling",title:"Enabling Relay Resolvers",slug:"/guides/relay-resolvers/enabling-resolvers",description:"Enabling experimental Relay Resolvers"},s=void 0,c={unversionedId:"guides/relay-resolvers/enabling",id:"version-v17.0.0/guides/relay-resolvers/enabling",title:"Enabling Relay Resolvers",description:"Enabling experimental Relay Resolvers",source:"@site/versioned_docs/version-v17.0.0/guides/relay-resolvers/enabling.md",sourceDirName:"guides/relay-resolvers",slug:"/guides/relay-resolvers/enabling-resolvers",permalink:"/docs/guides/relay-resolvers/enabling-resolvers",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v17.0.0/guides/relay-resolvers/enabling.md",tags:[],version:"v17.0.0",frontMatter:{id:"enabling",title:"Enabling Relay Resolvers",slug:"/guides/relay-resolvers/enabling-resolvers",description:"Enabling experimental Relay Resolvers"},sidebar:"docs",previous:{title:"Introduction to Relay Resolvers",permalink:"/docs/guides/relay-resolvers/introduction"},next:{title:"Defining Types",permalink:"/docs/guides/relay-resolvers/defining-types/"}},u={},p=[{value:"Runtime",id:"runtime",level:2},{value:"Compiler",id:"compiler",level:2}],m={toc:p};function d(e){var r=e.components,n=(0,o.Z)(e,i);return(0,l.mdx)("wrapper",(0,t.Z)({},m,n,{components:r,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,"Relay Resolvers are still an experimental feature in Relay. As such they require additional configuration to enable. You may also find that the APIs in the documentation are not yet reflected in our community maintained TypeScript types."),(0,l.mdx)("h2",{id:"runtime"},"Runtime"),(0,l.mdx)("p",null,"Relay Resolvers must be enabled in your runtime code by using our experimental ",(0,l.mdx)("inlineCode",{parentName:"p"},"LiveResolverStore")," as your Relay store and enabling the ",(0,l.mdx)("inlineCode",{parentName:"p"},"ENABLE_RELAY_RESOLVERS")," runtime feature flag:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-ts"},'import { Environment, RecordSource, RelayFeatureFlags } from "relay-runtime";\n// highlight-next-line\nimport LiveResolverStore from "relay-runtime/lib/store/experimental-live-resolvers/LiveResolverStore";\n\nRelayFeatureFlags.ENABLE_RELAY_RESOLVERS = true;\n\n// It is recommended to log errors thrown by Resolvers\nfunction fieldLogger(event) {\n  if(event.kind === "relay_resolver.error") {\n    // Log this somewhere!\n    console.warn(`Resolver error encountered in ${event.owner}.${event.fieldPath}`)\n    console.warn(event.error)\n  }\n}\n\nconst environment = new Environment({\n  network: Network.create(/* your fetch function here */),\n  store: new LiveResolverStore(new RecordSource()),\n  relayFieldLogger: fieldLogger\n});\n\n// ... create your Relay context with your environment\n')),(0,l.mdx)("h2",{id:"compiler"},"Compiler"),(0,l.mdx)("p",null,"You must enable the ",(0,l.mdx)("inlineCode",{parentName:"p"},'"enable_relay_resolver_transform"')," feature flag in your relay compiler config:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json",metastring:'title="relay.config.json"',title:'"relay.config.json"'},'{\n  "src": "./src",\n  "schema": "./schema.graphql",\n  "language": "typescript",\n  "featureFlags": {\n    // highlight-next-line\n    "enable_relay_resolver_transform": true\n  }\n}\n')))}d.isMDXComponent=!0}}]);