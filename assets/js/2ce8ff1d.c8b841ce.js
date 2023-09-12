"use strict";(self.webpackChunkcs421_f23_source=self.webpackChunkcs421_f23_source||[]).push([[3975],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5824:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const i={id:"composite",title:"Composite",sidebar_label:"Composite"},r=void 0,s={unversionedId:"readings/wk3/composite",id:"readings/wk3/composite",title:"Composite",description:"Composite is a structural design pattern that lets you compose objects into tree structures to represent whole-part hierarchies. Composite lets clients to treat a group of objects the same way as a single instance of the same type of object.",source:"@site/docs/readings/wk3/composite.md",sourceDirName:"readings/wk3",slug:"/readings/wk3/composite",permalink:"/se-readings/docs/readings/wk3/composite",draft:!1,editUrl:"https://jhu-oose-f23.github.io/cs421/docs/readings/wk3/composite.md",tags:[],version:"current",frontMatter:{id:"composite",title:"Composite",sidebar_label:"Composite"},sidebar:"tutorialSidebar",previous:{title:"Design Patterns",permalink:"/se-readings/docs/readings/wk3/dp"},next:{title:"Adapter",permalink:"/se-readings/docs/readings/wk3/adapter"}},p={},l=[{value:"Problem",id:"problem",level:2},{value:"A possible solution",id:"a-possible-solution",level:3},{value:"An alternate solution using Composite pattern",id:"an-alternate-solution-using-composite-pattern",level:3},{value:"Composite pattern",id:"composite-pattern",level:3}],c={toc:l};function m(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Composite",type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Composite")," is a ",(0,o.kt)("em",{parentName:"p"},"structural")," design pattern that lets you compose objects into ",(0,o.kt)("em",{parentName:"p"},"tree structures")," to represent ",(0,o.kt)("em",{parentName:"p"},"whole-part hierarchies"),". Composite lets clients to treat a group of objects the same way as a single instance of the same type of object. ")),(0,o.kt)("h2",{id:"problem"},"Problem"),(0,o.kt)("p",null,"Graphics applications like drawing editors let users build complex diagrams out of simple components such as line, rectangle, triangle, circle, etc. Assume we intend to design and implement such an application and we like for our drawing editor to support ",(0,o.kt)("strong",{parentName:"p"},"grouping")," and ",(0,o.kt)("strong",{parentName:"p"},"ungrouping")," operations. In other words, the user can group components to form larger components, which in turn can be grouped to form still larger components. "),(0,o.kt)("h3",{id:"a-possible-solution"},"A possible solution"),(0,o.kt)("p",null,"A simple design defines classes for graphical primitives such as text and lines plus other classes that act as containers for these primitives:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6946).Z,width:"878",height:"262"})),(0,o.kt)("admonition",{title:"Downside of the design",type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"The code treats primitives (",(0,o.kt)("inlineCode",{parentName:"li"},"Circle"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Rectangle")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Triangle"),") and the container class (",(0,o.kt)("inlineCode",{parentName:"li"},"ShapeGroup"),") differently, but the user\ntreats them identically. For instance, the user may want to do some operation (e.g. coloring with ",(0,o.kt)("inlineCode",{parentName:"li"},"red"),") on the shape(s). To the user, coloring single shapes is the same selecting (i.e. grouping) a bunch of shapes and coloring them. Having to distinguish shapes (",(0,o.kt)("inlineCode",{parentName:"li"},"Shape"),") and group of shapes (",(0,o.kt)("inlineCode",{parentName:"li"},"ShapeGroup"),") makes the application more complex. The Composite pattern allows use to use recursive ",(0,o.kt)("em",{parentName:"li"},"compositio")," so that clients (users) don't have to make this distinction. "))),(0,o.kt)("h3",{id:"an-alternate-solution-using-composite-pattern"},"An alternate solution using Composite pattern"),(0,o.kt)("p",null,"The key to the Composite pattern is an abstract class (or an interface in Java) that represents both primitives and their containers. This means, in our example, to make ",(0,o.kt)("inlineCode",{parentName:"p"},"ShapeGroup")," ",(0,o.kt)("em",{parentName:"p"},"implement")," the ",(0,o.kt)("inlineCode",{parentName:"p"},"Shape")," interface. The ",(0,o.kt)("inlineCode",{parentName:"p"},"ShapeGroup")," class provides a means by which several shapes can be grouped together into a single entity which behaves in the same way as a single shape:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(2242).Z,width:"530",height:"230"})),(0,o.kt)("p",null,"But, comes the question how would ",(0,o.kt)("inlineCode",{parentName:"p"},"ShapeGroup")," implement the mandatory ",(0,o.kt)("inlineCode",{parentName:"p"},"draw")," method? The answer is it would call the ",(0,o.kt)("inlineCode",{parentName:"p"},"draw")," method on each shape (or shape group) that is part of the shape group."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Note that one of the beauties of composite pattern is that it enables nesting. In our example, a shape group can be comprised of single shapes as well as other ",(0,o.kt)("em",{parentName:"p"},"nested")," shape groups, which in turn can be comprised of other shapes and/or shape groups. This is possible because both primitive shapes (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"Circle")," etc.) and ",(0,o.kt)("inlineCode",{parentName:"p"},"ShapeGroup")," are inheritted from ",(0,o.kt)("inlineCode",{parentName:"p"},"Shape"),".")),(0,o.kt)("h3",{id:"composite-pattern"},"Composite pattern"),(0,o.kt)("p",null,"The composite design pattern provides a means of grouping together several objects of type ",(0,o.kt)("inlineCode",{parentName:"p"},"T")," such that the grouped object (i.e. composite object) is also of type ",(0,o.kt)("inlineCode",{parentName:"p"},"T"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9795).Z,width:"1236",height:"562"})),(0,o.kt)("p",null,"In the diagram above:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Component:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Declares the abstraction for objects in the composition."),(0,o.kt)("li",{parentName:"ul"},"Could optionally implement default behavior common to all subclasses."))),(0,o.kt)("li",{parentName:"ul"},"Composite:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Represents an aggregate object (collection of components)."),(0,o.kt)("li",{parentName:"ul"},"Usually has methods to add/remove component."),(0,o.kt)("li",{parentName:"ul"},"Typically implements operations of ",(0,o.kt)("inlineCode",{parentName:"li"},"Component")," simply by calling the same operation for each of its constituent components."))),(0,o.kt)("li",{parentName:"ul"},"Concrete Component (a.k.a Leaf)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Defines behavior for primitive objects in the composition.")))),(0,o.kt)("admonition",{title:"When to use this pattern?",type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},'Need to manipulate a hierarchical collection of "primitive" and "aggregate" objects.'),(0,o.kt)("li",{parentName:"ul"},"Need to process (treat) primitive objects the same way as aggregate objects."),(0,o.kt)("li",{parentName:"ul"},"Examples: file/folder hierarchies, organizational charts, tables of contents, parsing structured documents like XML/HTML, etc."))),(0,o.kt)("admonition",{title:"Advantage",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Clients typically only need to interact with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Component")," interface; they would be unaware if they're dealing with a composite or a leaf object. This hides the complexity of the data structure from the outside world.")))}m.isMDXComponent=!0},9795:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/composite04-59c2fcaa380f3c8d3011afa9fbf234a8.png"},6946:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/composite1-ec912b6764b3cb4520a9a6f6b167fa46.jpg"},2242:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/composite2-52122a898a278010452fa6de853779bf.png"}}]);