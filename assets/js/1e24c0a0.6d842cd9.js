"use strict";(self.webpackChunkcs421_f23_source=self.webpackChunkcs421_f23_source||[]).push([[1992],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),g=o,f=u["".concat(c,".").concat(g)]||u[g]||p[g]||i;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2246:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={id:"good_design",title:"Design is hard!",sidebar_label:"Good Enough Design"},a=void 0,s={unversionedId:"readings/wk2/good_design",id:"readings/wk2/good_design",title:"Design is hard!",description:"Perfect design is overrated! In my opinion, you can only do it if you time travel to future!",source:"@site/docs/readings/wk2/good_design.md",sourceDirName:"readings/wk2",slug:"/readings/wk2/good_design",permalink:"/se-readings/docs/readings/wk2/good_design",draft:!1,editUrl:"https://jhu-oose-f23.github.io/cs421/docs/readings/wk2/good_design.md",tags:[],version:"current",frontMatter:{id:"good_design",title:"Design is hard!",sidebar_label:"Good Enough Design"},sidebar:"tutorialSidebar",previous:{title:"Identify Classes",permalink:"/se-readings/docs/readings/wk2/identify_classes"},next:{title:"High Cohesion",permalink:"/se-readings/docs/readings/wk2/cohesion"}},c={},l=[],d={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Perfect design is overrated! In my opinion, you can only do it if you time travel to future!\nThere are, of course, some design decisions that are easier to make. However, in practice and in most cases, there are always a few ",(0,o.kt)("em",{parentName:"p"},"interesting")," and equally plausible alternative designs. Try not to spend a lot of time being torn over design options; pick one and start coding! You can always improve it later. "),(0,o.kt)("p",null,'That said, be wary of delegating too much to your future self! When you are faced with a design decision, ask yourself: "what is the future cost of doing nothing today?" Every choice has a price. This "improve it now" versus "improve it later" dilemma always exists. The process perhaps becomes a bit easier when you learn about ',(0,o.kt)("strong",{parentName:"p"},"Design principles"),"."),(0,o.kt)("p",null,"The Design principles are the Commandments of OO Programming. We will next explore two fundamental principles about ",(0,o.kt)("strong",{parentName:"p"},"cohesion")," and ",(0,o.kt)("strong",{parentName:"p"},"coupling"),". "),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The path to changeable and maintainable object-oriented software begins with classes that are highly cohesive and loosely coupled.")))}p.isMDXComponent=!0}}]);