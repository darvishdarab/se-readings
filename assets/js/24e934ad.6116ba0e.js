"use strict";(self.webpackChunkcs421_f23_source=self.webpackChunkcs421_f23_source||[]).push([[4235],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),g=r,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4968:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={id:"sql",title:"Creating Content Using JDBC and SQL",sidebar_label:"Structured Query Language"},o=void 0,s={unversionedId:"readings/wk4/sql",id:"readings/wk4/sql",title:"Creating Content Using JDBC and SQL",description:'We will interact with relational databases using JDBC and the Structured Query Language (SQL). SQL is a domain specific language designed for updating and retrieving data in table-based databases. We will not cover it in class but you will likely need to use it. SQL is very easy and descriptive. In most cases, a simple Google search will be sufficient to find "how to" do something with SQL. My go-to place to lookup SQL syntax is https://www.w3schools.com/sql/.',source:"@site/docs/readings/wk4/sql.md",sourceDirName:"readings/wk4",slug:"/readings/wk4/sql",permalink:"/se-readings/docs/readings/wk4/sql",draft:!1,editUrl:"https://jhu-oose-f23.github.io/cs421/docs/readings/wk4/sql.md",tags:[],version:"current",frontMatter:{id:"sql",title:"Creating Content Using JDBC and SQL",sidebar_label:"Structured Query Language"},sidebar:"tutorialSidebar",previous:{title:"The Java Database Connectivity (JDBC) API",permalink:"/se-readings/docs/readings/wk4/jdbc"},next:{title:"Persist Objects in Databases",permalink:"/se-readings/docs/readings/wk4/persist_objects_in_db"}},l={},c=[{value:"Create a table",id:"create-a-table",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'We will interact with relational databases using JDBC and the Structured Query Language (SQL). SQL is a domain specific language designed for updating and retrieving data in table-based databases. We will not cover it in class but you will likely need to use it. SQL is very easy and descriptive. In most cases, a simple Google search will be sufficient to find "how to" do something with SQL. My go-to place to lookup SQL syntax is ',(0,r.kt)("a",{parentName:"p",href:"https://www.w3schools.com/sql/"},"https://www.w3schools.com/sql/"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you are interested in learning more, ",(0,r.kt)("a",{parentName:"p",href:"http://sqlzoo.net/"},"SQLZoo")," is one of the best and popular website for learning SQL online. For general knowledge, checkout ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/SQL"},"SQL on Wikipedia"),".")),(0,r.kt)("p",null,"Recall, from previous section, that we have created a connection to our SQLite database through JDBC:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'final String URI = "jdbc:sqlite:./JBApps.db"; \nConnection conn = DriverManager.getConnection(URI);\n')),(0,r.kt)("h2",{id:"create-a-table"},"Create a table"),(0,r.kt)("p",null,"To create a table, we can execute the following SQL statement:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS Employers (id INTEGER PRIMARY KEY, \n       name VARCHAR(100) NOT NULL UNIQUE, sector VARCHAR(100), summary VARCHAR(10000));\n")),(0,r.kt)("p",null,"Notice SQL reads like English! There is really no need to explain it; is there?!"),(0,r.kt)("p",null,"We can execute a SQL statement by (1) creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"Statement")," object and (2) invoking its ",(0,r.kt)("inlineCode",{parentName:"p"},"execute")," method, passing the SQL statement as an argument to it. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Statement st = conn.createStatement();\nString sql = "CREATE TABLE IF NOT EXISTS Employers (id INTEGER PRIMARY KEY, \n       name VARCHAR(100) NOT NULL UNIQUE, sector VARCHAR(100), summary VARCHAR(10000));";\nst.execute(sql);\n')))}d.isMDXComponent=!0}}]);