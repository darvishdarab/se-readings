"use strict";(self.webpackChunkcs421_f23_source=self.webpackChunkcs421_f23_source||[]).push([[2791],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},834:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={id:"onboarding",title:"Homework Onboarding"},a=void 0,u={unversionedId:"onboarding",id:"onboarding",title:"Homework Onboarding",description:"In order to provision you a repository to use for your homeworks from here on, we need this information.",source:"@site/docs/onboarding.md",sourceDirName:".",slug:"/onboarding",permalink:"/se-readings/docs/onboarding",draft:!1,editUrl:"https://jhu-oose-f23.github.io/cs421/docs/onboarding.md",tags:[],version:"current",frontMatter:{id:"onboarding",title:"Homework Onboarding"}},l={},s=[],p={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In order to provision you a repository to use for your homeworks from here on, we need this information."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you don\u2019t have a GitHub account, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/join"},"create one now"),". ")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Don\u2019t submit this form multiple times. Be patient when submitting the form!")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you run into problems, send a private message on Piazza. Include all the information from the form above.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"After you register, you are invited via email to a repository. This is your individual repository in which you\u2019ll submit the homework.")),(0,o.kt)("form",{method:"POST",action:"https://roboose.herokuapp.com/roboose/students"},(0,o.kt)("fieldset",{markdown:"1"},(0,o.kt)("label",null,(0,o.kt)("strong",null,"GitHub Identifier: "),(0,o.kt)("input",{type:"text",name:"github",required:!0,pattern:"[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]"})),(0,o.kt)("br",null),"For example, jhu-oose-example-student. Don\u2019t include an `@` sign at the beginning \u2014 this isn\u2019t a mention! GitHub identifiers ",(0,o.kt)("strong",null,"do not")," start with `2020-fall-student-`.",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("label",null,(0,o.kt)("strong",null,"Hopkins Identifier: "),(0,o.kt)("input",{type:"text",name:"hopkins",required:!0,pattern:"[0-9A-F]{6}"})),(0,o.kt)("br",null),"For example, `7B4EF0`. This is the 6-character \u201cHopkins ID\u201d in SIS, ",(0,o.kt)("strong",null,"not")," your email.",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("button",null,"Register"))),(0,o.kt)("br",null))}c.isMDXComponent=!0}}]);