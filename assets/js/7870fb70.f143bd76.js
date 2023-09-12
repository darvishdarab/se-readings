"use strict";(self.webpackChunkcs421_f23_source=self.webpackChunkcs421_f23_source||[]).push([[5338],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=s(n),h=r,u=d["".concat(p,".").concat(h)]||d[h]||c[h]||o;return n?a.createElement(u,l(l({ref:t},m),{},{components:n})):a.createElement(u,l({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2147:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={id:"mvc",title:"Model-View-Controller Pattern",sidebar_label:"Model-View-Controller"},l=void 0,i={unversionedId:"readings/wk5/mvc",id:"readings/wk5/mvc",title:"Model-View-Controller Pattern",description:"MVC",source:"@site/docs/readings/wk5/mvc.md",sourceDirName:"readings/wk5",slug:"/readings/wk5/mvc",permalink:"/se-readings/docs/readings/wk5/mvc",draft:!1,editUrl:"https://jhu-oose-f23.github.io/cs421/docs/readings/wk5/mvc.md",tags:[],version:"current",frontMatter:{id:"mvc",title:"Model-View-Controller Pattern",sidebar_label:"Model-View-Controller"},sidebar:"tutorialSidebar",previous:{title:"Endpoint: HTTP Post",permalink:"/se-readings/docs/readings/wk4/post"},next:{title:"Template Reuse",permalink:"/se-readings/docs/readings/wk5/reuse"}},p={},s=[{value:"MVC",id:"mvc",level:2},{value:"Building Views using Apache Velocity Template",id:"building-views-using-apache-velocity-template",level:2},{value:"<code>/</code> View",id:"-view",level:2},{value:"<code>employers</code> view",id:"employers-view",level:2},{value:"Controller",id:"controller",level:2}],m={toc:s};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"mvc"},"MVC"),(0,r.kt)("p",null,"Model\u2013view\u2013controller (usually known as MVC) is a software design pattern that is commonly used for developing web applications. In fact, most web development frameworks (like SparkJava) support this design pattern by default (i.e. they expect you to follow it)."),(0,r.kt)("p",null,"This pattern is used to separate application's concerns:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Model")," represents an object or JAVA POJO carrying data. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"View")," represents the visualization of the data that model contains."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Controller")," is the bridge between the model and view. It controls the data flow into model object and updates the view whenever data changes. ")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3805).Z,width:"506",height:"275"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},'It is a common confusion which of M or C the application logic belongs to! Note MVC is a popular architectural design pattern to structure the "Presentation" layer of an application only. The businness logic of the application goes into the "Businnes" layer in the context of ',(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Multitier_architecture"},"three-tier architecture"),'. Finally, the way the data is accessed (e.g., using DAO pattern) belongs to the "Data" layer of the application.')),(0,r.kt)("h2",{id:"building-views-using-apache-velocity-template"},"Building Views using Apache Velocity Template"),(0,r.kt)("p",null,"In our application, we are building the ",(0,r.kt)("em",{parentName:"p"},"Views")," using ",(0,r.kt)("a",{parentName:"p",href:"http://velocity.apache.org/"},"Apache Velocity")," templates. Add the following to your gradle's dependencies:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-grrovy"},"implementation 'com.sparkjava:spark-template-velocity:2.7.1'\n")),(0,r.kt)("p",null,"So far, we have had three API endpoints, namely ",(0,r.kt)("inlineCode",{parentName:"p"},"/"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"employers")," (HTTP Get) and ",(0,r.kt)("inlineCode",{parentName:"p"},"employers")," (HTTP Post)."),(0,r.kt)("h2",{id:"-view"},(0,r.kt)("inlineCode",{parentName:"h2"},"/")," View"),(0,r.kt)("p",null,'We currently have a homepage which only shows a simple message "Welcome to JBApp!". Let\'s improve this by saving the view in a separate HTML file under ',(0,r.kt)("inlineCode",{parentName:"p"},"src/main/resources/public/index.html"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n    <title>Welcome to JBApp!</title>\n</head>\n<body>\n    <h1>Welcome to JBApp!</h1>\n    <div>\n        <p><a href="/employers">Show all employers</a></p>\n        <p><a href="/addemployer">Add an employer</a></p>\n    </div>\n</body>\n</html>\n')),(0,r.kt)("h2",{id:"employers-view"},(0,r.kt)("inlineCode",{parentName:"h2"},"employers")," view"),(0,r.kt)("p",null,"Next, we create a separate view for ",(0,r.kt)("inlineCode",{parentName:"p"},"/employers")," HTTP Get endpoint; write the following in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/main/resources/public/employers.vm"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!doctype html>\n<html lang="en">\n<head>\n    \x3c!-- Required meta tags --\x3e\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n    <title>List of employers</title>\n</head>\n<body>\n    #if ($employers)\n    <h1>List of all employers:</h1>\n    <div class="divContents">\n        <ol>\n            <p>\n                #foreach($em in $employers )\n                    <li>\n                        <i>$em.name</i> is a ($em.sector) company: $em.summary.\n                    </li>\n                #end\n            </p>\n        </ol>\n    </div>\n    #end\n</body>\n</html>\n')),(0,r.kt)("p",null,"Note:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"#if ($employers)\n.\n.\n.\n#end\n")),(0,r.kt)("p",null,"and the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"#foreach($em in $employers )\n    <li>\n        <i>$em.name</i> is a ($em.sector) company: $em.summary.\n    </li>\n#end\n")),(0,r.kt)("p",null,"These are Velocity Template Language (VTL) statements. VTL provides an easy way to incorporate dynamic content in a web page. HTML pages are static meaning that their content is fixed, but quite often the content we'd like to present is dynamic. For example, in the ",(0,r.kt)("inlineCode",{parentName:"p"},"employers")," view here, we'd like to list all the employers from the ",(0,r.kt)("inlineCode",{parentName:"p"},"employers")," table."),(0,r.kt)("p",null,"Using the above VTL statements, we show all the employers inside an ordered HTML list (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"<ol>"),"), where each employer is a list item (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"<li>"),"). You can see\nthat we iterate through ",(0,r.kt)("inlineCode",{parentName:"p"},"employers")," and for each ",(0,r.kt)("inlineCode",{parentName:"p"},"employer")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"employers"),", we show employer's name, sector and summary e.g. ",(0,r.kt)("em",{parentName:"p"},"Nestle is a Food company: The world's largest food comapny: ")," Now, comes the question where do we get ",(0,r.kt)("inlineCode",{parentName:"p"},"employers")," from? The answer is the ",(0,r.kt)("strong",{parentName:"p"},"Model"),". The dynamic data that we'd like to make a part of\nour ",(0,r.kt)("strong",{parentName:"p"},"view")," should be stored in the ",(0,r.kt)("strong",{parentName:"p"},"model")," objects: ",(0,r.kt)("strong",{parentName:"p"},"Controller")," does this for us!"),(0,r.kt)("h2",{id:"controller"},"Controller"),(0,r.kt)("p",null,"We must tell our web server to ",(0,r.kt)("strong",{parentName:"p"},"route")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"employers")," view (i.e. page) when browser is pointed at ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:7000/employers"},(0,r.kt)("inlineCode",{parentName:"a"},"http://localhost:7000/employers")),". Update the following routes in ",(0,r.kt)("inlineCode",{parentName:"p"},"Main.main"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Spark.get("/", (req, res) -> {\n    Map<String, Object> model = new HashMap<>();\n    return new ModelAndView(model, "public/index.html");\n}, new VelocityTemplateEngine());\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Spark.get("/employers", (req, res) -> {\n    List<Employer> ls = getEmployerORMLiteDao().queryForAll();\n    Map<String, Object> model = new HashMap<String, Object>();\n    model.put("employers", ls);\n    return new ModelAndView(model, "public/employers.vm");\n}, new VelocityTemplateEngine());\n')),(0,r.kt)("p",null,"After running the WebServer, point your browser to ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:7000/"},(0,r.kt)("inlineCode",{parentName:"a"},"http://localhost:7000/"))," on the homepage, click on the ",(0,r.kt)("em",{parentName:"p"},"Show all employers")," link and you must be redirected to ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:7000/employers"},(0,r.kt)("inlineCode",{parentName:"a"},"http://localhost:7000/employers"))," where all employers from ",(0,r.kt)("inlineCode",{parentName:"p"},"employers")," table are listed."))}c.isMDXComponent=!0},3805:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/mvc-b8e3c2cc9bbcacde3677031d29524b23.png"}}]);