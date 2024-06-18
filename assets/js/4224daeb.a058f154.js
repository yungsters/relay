"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[97854],{3905:(e,r,n)=>{n.r(r),n.d(r,{MDXContext:()=>d,MDXProvider:()=>u,mdx:()=>v,useMDXComponents:()=>p,withMDXComponents:()=>c});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(){return l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},l.apply(this,arguments)}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=t.createContext({}),c=function(e){return function(r){var n=p(r.components);return t.createElement(e,l({},r,{components:n}))}},p=function(e){var r=t.useContext(d),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},u=function(e){var r=p(e.components);return t.createElement(d.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},h=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),u=o,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||l;return n?t.createElement(h,a(a({ref:r},d),{},{components:n})):t.createElement(h,a({ref:r},d))}));function v(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var l=n.length,s=new Array(l);s[0]=h;var a={};for(var i in r)hasOwnProperty.call(r,i)&&(a[i]=r[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var d=2;d<l;d++)s[d]=n[d];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}h.displayName="MDXCreateElement"},61501:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var t=n(83117),o=n(80102),l=(n(67294),n(3905)),s=["components"],a={id:"errors",title:"Error Handling",slug:"/guides/relay-resolvers/errors/",description:"How Relay handles errors throw by resolvers"},i=void 0,d={unversionedId:"guides/relay-resolvers/errors",id:"guides/relay-resolvers/errors",title:"Error Handling",description:"How Relay handles errors throw by resolvers",source:"@site/docs/guides/relay-resolvers/errors.md",sourceDirName:"guides/relay-resolvers",slug:"/guides/relay-resolvers/errors/",permalink:"/docs/next/guides/relay-resolvers/errors/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/docs/guides/relay-resolvers/errors.md",tags:[],version:"current",frontMatter:{id:"errors",title:"Error Handling",slug:"/guides/relay-resolvers/errors/",description:"How Relay handles errors throw by resolvers"},sidebar:"docs",previous:{title:"Suspense",permalink:"/docs/next/guides/relay-resolvers/suspense/"},next:{title:"Descriptions",permalink:"/docs/next/guides/relay-resolvers/descriptions/"}},c={},p=[],u={toc:p};function m(e){var r=e.components,n=(0,o.Z)(e,s);return(0,l.mdx)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,"Just like GraphQL servers, Relay Resolvers support field-level error handling. If an individual resolver throws an error, when that field is read, Relay will log that error to the environment's user-provided ",(0,l.mdx)("inlineCode",{parentName:"p"},"relayFieldLogger")," logger, and the field will become null."),(0,l.mdx)("p",null,"This provides important symmetry with GraphQL servers. Resolvers are designed to enable a smooth migration path to allow teams to start with fields defined client-side using Resolvers and then eventually migrate them to a server."),(0,l.mdx)("p",null,"If a resolver throws an error, Relay will log the error to the user-provided error logger, and will return null for the field which the resolver defines. To enable this behavior at runtime, the Relay compiler will not allow resolver fields to be typed as non-nullable."),(0,l.mdx)("p",null,"The object passed to the ",(0,l.mdx)("inlineCode",{parentName:"p"},"relayFieldLogger")," will have the following shape:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-ts"},"type ResolverErrorEvent = {\n  kind: 'relay_resolver.error',\n  // The name of the fragment/query in which the field was read\n  owner: string,\n  // The path from the owner root to the field which threw the error\n  fieldPath: string,\n  // The error thrown by the resolver\n  error: Error,\n}\n")),(0,l.mdx)("p",null,"An example logger might look like:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-ts"},'function fieldLogger(event) {\n  if(event.kind === "relay_resolver.error") {\n    // Log this somewhere!\n    console.warn(`Resolver error encountered in ${event.owner}.${event.fieldPath}`)\n    console.warn(event.error)\n  }\n}\n\nconst environment = new Environment({\n  network: Network.create(/* your fetch function here */),\n  store: new LiveResolverStore(new RecordSource()),\n  relayFieldLogger: fieldLogger\n});\n')),(0,l.mdx)("admonition",{type:"note"},(0,l.mdx)("p",{parentName:"admonition"},(0,l.mdx)("a",{parentName:"p",href:"/docs/next/guides/relay-resolvers/live-fields/"},"Live Resolvers")," can potentially throw errors when they are first evaluated or when their ",(0,l.mdx)("inlineCode",{parentName:"p"},".read()")," method is called. Both types of errors will be handled identically by Relay.")))}m.isMDXComponent=!0}}]);