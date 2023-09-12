"use strict";(self.webpackChunkcs421_f23_source=self.webpackChunkcs421_f23_source||[]).push([[2933],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=i,f=u["".concat(s,".").concat(g)]||u[g]||d[g]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5438:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={id:"gitignore",title:".gitignore",sidebar_label:".gitignore"},a=void 0,l={unversionedId:"readings/wk1/gitignore",id:"readings/wk1/gitignore",title:".gitignore",description:"A .gitignore file specifies intentionally untracked files that Git should ignore. You can manually create a .gitignore file (notice the leading dot) in the root of your Git repository and list the files and folders to be ignored in separate lines.",source:"@site/docs/readings/wk1/gitignore.md",sourceDirName:"readings/wk1",slug:"/readings/wk1/gitignore",permalink:"/se-readings/docs/readings/wk1/gitignore",draft:!1,editUrl:"https://jhu-oose-f23.github.io/cs421/docs/readings/wk1/gitignore.md",tags:[],version:"current",frontMatter:{id:"gitignore",title:".gitignore",sidebar_label:".gitignore"},sidebar:"tutorialSidebar",previous:{title:"Git for Version Control",permalink:"/se-readings/docs/readings/wk1/git"},next:{title:"GitHub for Project Management",permalink:"/se-readings/docs/readings/wk1/github"}},s={},p=[],c={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore")," file specifies intentionally untracked files that Git should ignore. You can manually create a ",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore")," file (notice the leading dot) in the root of your Git repository and list the files and folders to be ignored in separate lines."),(0,i.kt)("p",null,"Generally speaking, you should not add these four types of files into your Git repository:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Files that don't belong to the project like ",(0,i.kt)("inlineCode",{parentName:"li"},".DS_Store")," (for Mac OS), ",(0,i.kt)("inlineCode",{parentName:"li"},"Thumbs.db")," (for Windows)."),(0,i.kt)("li",{parentName:"ul"},"Files that are automatically generated like those in build folder."),(0,i.kt)("li",{parentName:"ul"},"Libraries (depends on the situation) like those in .gradle folder."),(0,i.kt)("li",{parentName:"ul"},"Credentials and secretes ")),(0,i.kt)("p",null,"For instance, a ",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore")," file may look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},".gradle\nbuild\n.DS_Store\n__MACOSX\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can use ",(0,i.kt)("a",{parentName:"p",href:"https://www.toptal.com/developers/gitignore"},"this")," online tool to generate ",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore")," for different operating systems, project environments, etc.")))}d.isMDXComponent=!0}}]);