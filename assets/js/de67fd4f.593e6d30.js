"use strict";(self.webpackChunkcs421_f23_source=self.webpackChunkcs421_f23_source||[]).push([[288],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var A=a.createContext({}),l=function(e){var t=a.useContext(A),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(A.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,A=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(n),u=r,m=c["".concat(A,".").concat(u)]||c[u]||p[u]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var A in t)hasOwnProperty.call(t,A)&&(s[A]=t[A]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8752:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>A,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={id:"dp",title:"Design patterns",sidebar_label:"Design Patterns"},o=void 0,s={unversionedId:"readings/wk3/dp",id:"readings/wk3/dp",title:"Design patterns",description:"Where is your spare tire?",source:"@site/docs/readings/wk3/dp.md",sourceDirName:"readings/wk3",slug:"/readings/wk3/dp",permalink:"/se-readings/docs/readings/wk3/dp",draft:!1,editUrl:"https://jhu-oose-f23.github.io/cs421/docs/readings/wk3/dp.md",tags:[],version:"current",frontMatter:{id:"dp",title:"Design patterns",sidebar_label:"Design Patterns"},sidebar:"tutorialSidebar",previous:{title:"Dependency Inversion Principle",permalink:"/se-readings/docs/readings/wk2/dip"},next:{title:"Composite",permalink:"/se-readings/docs/readings/wk3/composite"}},A={},l=[{value:"Where is your <em>spare</em> tire?",id:"where-is-your-spare-tire",level:2},{value:"Design Patterns we will see shortly in class",id:"design-patterns-we-will-see-shortly-in-class",level:2},{value:"DAO Design Pattern",id:"dao-design-pattern",level:3},{value:"Dependency Injection Pattern",id:"dependency-injection-pattern",level:3},{value:"MVC Pattern",id:"mvc-pattern",level:3},{value:"Gang of Four (GoF)",id:"gang-of-four-gof",level:2},{value:"Why should you learn about design patterns?",id:"why-should-you-learn-about-design-patterns",level:2}],d={toc:l};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"where-is-your-spare-tire"},"Where is your ",(0,r.kt)("em",{parentName:"h2"},"spare")," tire?"),(0,r.kt)("p",null,"What?! ... Well, that question would have made sense if we were going to take a road trip in a car. Notice, although the question may be surprising (when asked in this reading), you do know what I am talking about: ",(0,r.kt)("em",{parentName:"p"},"a spare tire is an extra tire you carry in your car in case you are driving and one of the tires goes flat.")," Let's take a moment and reflect on this: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Problem: when driving a car, a tire might go flat. "),(0,r.kt)("li",{parentName:"ul"},"Solution: change the tire (requires to have an extra tire)."),(0,r.kt)("li",{parentName:"ul"},"The problem happens often enough that manufactures, by ",(0,r.kt)("em",{parentName:"li"},"design"),", equip your car with an extra tire, just in case. "),(0,r.kt)("li",{parentName:"ul"},"The extra tire is called a ",(0,r.kt)("em",{parentName:"li"},"spare"),".")),(0,r.kt)("p",null,'This is an example of a design pattern! A problem that occurs so often, it is given a name and a known solution. So when I say "where is your spare tire?" (before a road trip) you immediately know what I mean and why I ask for it. '),(0,r.kt)("admonition",{title:"Design Pattern",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"A design pattern is a ",(0,r.kt)("strong",{parentName:"p"},"proven"),", ",(0,r.kt)("strong",{parentName:"p"},"reusable")," ",(0,r.kt)("em",{parentName:"p"},"solution")," to a ",(0,r.kt)("strong",{parentName:"p"},"commonly occurring")," ",(0,r.kt)("em",{parentName:"p"},"problem"),". ")),(0,r.kt)("p",null,"There are design patterns in software development, in particular for Object-Oriented design. We will investigate a handful of these patterns in this and the next few readings. "),(0,r.kt)("h2",{id:"design-patterns-we-will-see-shortly-in-class"},"Design Patterns we will see shortly in class"),(0,r.kt)("p",null,"In the next few sessions, we will be using some well-know design patterns:"),(0,r.kt)("h3",{id:"dao-design-pattern"},"DAO Design Pattern"),(0,r.kt)("p",null,"DAO design pattern is used to decouple the persistence mechanism and logic into a separate layer. Adding persistence to an application means storing data so that data persists beyond the lifetime of the application execution. It is a very popular pattern when we design systems to work with databases. The idea is to introduce an abstraction between the database (persistence) and the rest of your application."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9648).Z,width:"688",height:"344"})),(0,r.kt)("h3",{id:"dependency-injection-pattern"},"Dependency Injection Pattern"),(0,r.kt)("p",null,"A dependency is just another object which your class needs to function. "),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(392).Z,width:"636",height:"204"})),(0,r.kt)("p",null,"For example, a ",(0,r.kt)("inlineCode",{parentName:"p"},"Model")," class that ",(0,r.kt)("em",{parentName:"p"},"fetches data")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"Database")," class has a ",(0,r.kt)("em",{parentName:"p"},"dependency")," on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Database")," object."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(285).Z,width:"636",height:"164"})),(0,r.kt)("p",null,'Injecting dependency means the "dependency" is pushed to the class from outside; all that means is that you should not instantiate dependencies (e.g. using the ',(0,r.kt)("inlineCode",{parentName:"p"},"new")," operator) inside of a class. Instead, take it as a constructor parameter (or via a setter method):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class Model {\n    private Database aDatabase;\n\n    public Model(Database db) {\n        aDatabase = db;\n    }\n}\n")),(0,r.kt)("p",null,"Dependency Injection allows the entities in our application to be loosely coupled to one another. In this context, the object that is injected (i.e. gets passed in to the client code) is called ",(0,r.kt)("em",{parentName:"p"},"Service"),". The code that passes in (injects) the service (aka dependency) is called ",(0,r.kt)("em",{parentName:"p"},"Injector"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The intent behind dependency injection is to achieve separation of concerns of construction and use of objects. This can increase readability and code reuse.")),(0,r.kt)("h3",{id:"mvc-pattern"},"MVC Pattern"),(0,r.kt)("p",null,"MVC is an architectural pattern that is most commonly used for creating web applications. This pattern promotes separating application's concerns and results in a system design comprised of entities with clear responsibilities."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3805).Z,width:"506",height:"275"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We will see more on ",(0,r.kt)("inlineCode",{parentName:"p"},"MVC")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Dependency Injection")," later!")),(0,r.kt)("h2",{id:"gang-of-four-gof"},"Gang of Four (GoF)"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3700).Z,width:"458",height:"607"})),(0,r.kt)("p",null,"Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides (collectively known as ",(0,r.kt)("strong",{parentName:"p"},"Gang of Four"),") wrote the book ",(0,r.kt)("strong",{parentName:"p"},"Design Patterns: Elements of Reusable Object-Oriented Software")," in 1994. These authors looked at over 300 projects that other developers were working on:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"They recognized that many of the same problems kept appearing. "),(0,r.kt)("li",{parentName:"ul"},"They also noticed that solution to the problems were roughly the same. "),(0,r.kt)("li",{parentName:"ul"},"Their book discusses these problems and solutions, ",(0,r.kt)("strong",{parentName:"li"},"identifying each as a ",(0,r.kt)("em",{parentName:"strong"},"pattern")," and giving it a ",(0,r.kt)("em",{parentName:"strong"},"name")),".")),(0,r.kt)("p",null,"GoF categorized the patterns into three categories:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Creational patterns")," - patterns concerned with creating objects."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Structural patterns")," - aligning classes and objects."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Behavioral patterns")," - interactions between objects. ")),(0,r.kt)("p",null,"We will look at samples of all three types."),(0,r.kt)("h2",{id:"why-should-you-learn-about-design-patterns"},"Why should you learn about design patterns?"),(0,r.kt)("p",null,"First and foremost to write good software: recognizing patterns can help you write code that is easy to maintain in long-term; it helps you avoid writing ",(0,r.kt)("em",{parentName:"p"},"hacky")," code.",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The hardest part of applying patterns is being able to recognize it! That is, to identify the problem at hand as the underlying problem of a pattern. ")),(0,r.kt)("p",null,'Another reason is to be able to communicate with other software developers. In a software company, during design sessions and code reviews, developers communicate by using pattern names without giving a full explanation as to what the problem and its solution is. In the same way that I asked you "where is your ',(0,r.kt)("em",{parentName:"p"},"spare"),' tire?" instead of "Do you have one of those extra tires in case you get a flat? And if yes, where is it?"'),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},'I define a "hacky" code as one that accomplishes some goal by compromising on design principles that (good) programmers would much rather not compromise on.',(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0},3700:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gof-9a8d595bba6c406b7e4afe4683c2560c.jpg"},3805:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/mvc-b8e3c2cc9bbcacde3677031d29524b23.png"},9648:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/patterns00-66cb42e544f56ca255b3ca8ba4dfe6cb.png"},392:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnwAAADMCAYAAADpuH4KAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAATqdEVYdG14ZmlsZQAlM0NteGZpbGUlMjBob3N0JTNEJTIyYXBwLmRpYWdyYW1zLm5ldCUyMiUyMG1vZGlmaWVkJTNEJTIyMjAyMC0wMy0zMVQxMyUzQTI5JTNBMTQuNjA4WiUyMiUyMGFnZW50JTNEJTIyNS4wJTIwKFdpbmRvd3MlMjBOVCUyMDEwLjAlM0IlMjBXaW42NCUzQiUyMHg2NCklMjBBcHBsZVdlYktpdCUyRjUzNy4zNiUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBDaHJvbWUlMkY4MC4wLjM5ODcuMTQ5JTIwU2FmYXJpJTJGNTM3LjM2JTIyJTIwdmVyc2lvbiUzRCUyMjEyLjkuNSUyMiUyMGV0YWclM0QlMjJvV3o3alJ5VkJEdVl2b092aGZvciUyMiUyMHR5cGUlM0QlMjJnb29nbGUlMjIlM0UlM0NkaWFncmFtJTIwaWQlM0QlMjJpaE1ubVNHbElwU0pCajdpS05NSCUyMiUzRXhWWk5qOXNnRVAwMVByYXlUZUkweDkxa3R6MjBhcVZzMWUwUmhWbWJDb09GSjV1NHY3NDREUDdNcXFuNmRZbVlad1o0OHg1RElyWXBUMjh0cjRvUFJvQ0swbGljSXJhTjBqUmJyZHh2Q3pRZVlJdllBN21Wd2tOSkQlMkJ6a2R5QXdURHRJQWZWb0locWpVRlpqY0clMkIwaGoyT01HNnRPWTZuUFJrMTNyWGlPY3lBM1o2ck9mcEZDaXc4JTJCbVlaOSUyRmc3a0hrUmRrNWklMkJsTHlNSm1BdXVEQ0hBY1F1NHZZeGhxRGZsU2VOcURhMm9XNiUyQkx6N0Y3NTJCN09nOFpxRTFDYzhjM1VnYmh2RjY1b09oMDFnWEdDcDNDaUoyQzFsZ0VVNHZiaHIwbkZ4SGdCVEF0ckdUUWtKak9pVCUyRnN2MWlvQmpYODRrcUYwTVNobEt6RW5CdkZ1N0olMkJrR3hQTXlaemJqJTJGQkVMc1AlMkJDT0dPciUyRjBoOE1TUCUyQnVZWVpZOURpcHIwakxqSVZhRWZjSVhRSEU4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FR382A+AzIn3N5p0AeSMb775xt1yyy12AHvjjTeiuakNGzbM1uvXr180B7urSpUq7r777nNLliyhqRfwBIGvgqxatco99dRT7tJLL3WHH364FTynnXaau/HGG92rr77qNm/eHK25w/vvv+/q1avnLrnkEvf5559HcwFg3yD47Zn4+H/55Ze7o446yo7/NWvWdB06dHBjxoyxE5fS6PP+4x//WGK9bC4fKO9yA4GvnGkHffjhh933v/99161bNzdz5kx37rnnupYtW7pDDjnEPfPMM3a/Xbt27oMPPoi2AoDsRfDbPQo2jz/+ePHxf8qUKe4HP/iBHfOrVq3qXnjhBde6dWvXtGlTN3HixJRN2h9++KGVD/Pnz4/mZC/Ku9xC4CtHX331levdu7e7/fbb3SmnnOLGjx/vPvvsM9uxx40b5+bMmeM++ugj17FjRzd69Gh3xx132HIAyAUEv/S2bt1qfR5/8YtfuKOPPtoVFha6FStWuKlTp9rx/z//+Y9bvny5+9WvfuUWLlzo2rdv7/7xj3/sFPq2bdtmj5XtKO9yD4GvnGinfe6559wjjzzi2rRp40aOHOkuvvhit//++0drFHWcrFWrllXV64znX//6l50NagcHkBmrV692AwcOdGeffbbtk2pyu/rqq62QSlXQ/u9//3MPPPCANVFpfW2n/VwFXr4i+O1sxIgRrn///q5BgwZ2/P/JT37iDj300GhpkerVq7sHH3zQPfnkk27Lli3u/vvvd/PmzYuW5g7Ku9xE4CsnK1eutOr6ypUru5///Ofu+OOPj5bsTFX76niuq93U32FX/TlETQXqC9G5c2frC6KdSduqz4R2vFSFT7qCbezYsSn7VJR1fSDXqIbh5ptvdr///e/d+eefb9/3n/70p+7dd9+1vkQqkBJrXGbMmOGuuOIK97vf/c72C62v4NenTx933XXX5X2NBcGviGry/vKXv9h9hTg1caajY6uOq7feeqt77733bLv4+KoLjPT9euedd9yQIUOsWTRVHzet/+KLL7qLLrrIHk9lgppU9X9IR8t69epVfOKiW/2dapv4gqehQ4fagNxnnXWWlQfaVz755BPKuxymo1t4jMPeCM9e7HMMd84g/CJFc8tm4cKFQd26dYNWrVoFa9asieYGwcaNG4Nwp7LHD3ewoHHjxkHLli2D+vXr2zxNWq71YgsW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"},285:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/patterns02-f5137a6cb8b6e085474418c790fec221.png"}}]);