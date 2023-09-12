"use strict";(self.webpackChunkcs421_f23_source=self.webpackChunkcs421_f23_source||[]).push([[4507],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||s;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3461:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const s={id:"persist_objects_in_db",title:"Persist Objects in Databases",sidebar_label:"Persist Objects in Databases"},o=void 0,i={unversionedId:"readings/wk4/persist_objects_in_db",id:"readings/wk4/persist_objects_in_db",title:"Persist Objects in Databases",description:"So far, we set up and connected to our SQLite database, and know we need to communicate with it via SQL statements from our Java application. How can we use this arrangement to persist our application's data?",source:"@site/docs/readings/wk4/persist_objects_in_db.md",sourceDirName:"readings/wk4",slug:"/readings/wk4/persist_objects_in_db",permalink:"/se-readings/docs/readings/wk4/persist_objects_in_db",draft:!1,editUrl:"https://jhu-oose-f23.github.io/cs421/docs/readings/wk4/persist_objects_in_db.md",tags:[],version:"current",frontMatter:{id:"persist_objects_in_db",title:"Persist Objects in Databases",sidebar_label:"Persist Objects in Databases"},sidebar:"tutorialSidebar",previous:{title:"Structured Query Language",permalink:"/se-readings/docs/readings/wk4/sql"},next:{title:"Connecting `Job` and `Employer` Classes",permalink:"/se-readings/docs/readings/wk4/jobs_employer_connect"}},l={},p=[{value:"Employers Table",id:"employers-table",level:2},{value:"Insert data into table",id:"insert-data-into-table",level:2},{value:"Search for records in a table",id:"search-for-records-in-a-table",level:2},{value:"Parameterized SQL with JDBC PreparedStatement",id:"parameterized-sql-with-jdbc-preparedstatement",level:2}],c={toc:p};function d(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"So far, we set up and connected to our SQLite database, and know we need to communicate with it via SQL statements from our Java application. How can we use this arrangement to persist our application's data?"),(0,r.kt)("p",null,"As noted, relational databases, like SQLite, are structured around tables (similar to those in a document or spreadsheet). Each class in your Java application maps to a different table. The class name maps to the table name. Each property of the class (fields) map to a column in that table. Each object instance corresponds to a row in that table; it holds the values that describe a particular entry."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"In relational databases, we expect each record (row in a table) to be unique. If there is an attribute (column) that can uniquely identify each record, then we are good! That attribute can be identified as the ",(0,r.kt)("strong",{parentName:"p"},"primary key")," for that table.",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," If a table does not have a primary key, you must make one for it by assigning a unique identifier to each row. Usually, this is as simple as having a column that contains a number that increments every time you create a new record.")),(0,r.kt)("p",null,"In SQLite, you get a primary key for free, called ",(0,r.kt)("inlineCode",{parentName:"p"},"ROWID"),". This is in every SQLite table whether you ask for it or not. ROWID is assigned a value whenever you ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," a row. If you include a column of type ",(0,r.kt)("inlineCode",{parentName:"p"},"INTEGER PRIMARY KEY"),", that column points at (is an alias for) the automatic ",(0,r.kt)("inlineCode",{parentName:"p"},"ROWID")," column."),(0,r.kt)("h2",{id:"employers-table"},"Employers Table"),(0,r.kt)("p",null,"When creating a table in SQLite, we can create a ",(0,r.kt)("em",{parentName:"p"},"primary key")," ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," field for it as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS Employers (id INTEGER PRIMARY KEY,\n                     name VARCHAR(100) NOT NULL UNIQUE, sector VARCHAR(100), summary VARCHAR(10000));\n")),(0,r.kt)("p",null,"Accordingly, we must update the ",(0,r.kt)("inlineCode",{parentName:"p"},"Employer")," class to include an ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," field."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(8666).Z,width:"275",height:"491"})),(0,r.kt)("p",null,"Note that we do not provide the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"Employer")," (when we construct it). Instead, we let the RDBMS generate it for us; we then use ",(0,r.kt)("em",{parentName:"p"},"setter")," and ",(0,r.kt)("em",{parentName:"p"},"getter")," methods to update/access the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," field."),(0,r.kt)("h2",{id:"insert-data-into-table"},"Insert data into table"),(0,r.kt)("p",null,"To insert data, we can execute a SQL statement such as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO Employers(id, name, sector, summary)\n            VALUES (NULL, 'Microsoft', 'Technology', 'Microsoft was founded in 1975. Our mission is to enable people and businesses throughout the world to realize their full potential by creating technology that transforms the way people work, play, and communicate. ... We do business worldwide and have offices in more than 100 countries.');\n")),(0,r.kt)("p",null,"We can reuse the ",(0,r.kt)("inlineCode",{parentName:"p"},"Statement")," object (",(0,r.kt)("inlineCode",{parentName:"p"},"st"),") to execute the aforementioned ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," statement."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"sql = \"INSERT INTO Employers(id, name, sector, summary)\n            VALUES (NULL, 'Microsoft', 'Technology', 'Microsoft was founded in 1975. Our mission is to enable people and businesses throughout the world to realize their full potential by creating technology that transforms the way people work, play, and communicate. ... We do business worldwide and have offices in more than 100 countries.');\";\nst.execute(sql);\n")),(0,r.kt)("p",null,"Let's insert two more!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sql = \"INSERT INTO Employers(id, name, sector, summary)\n            VALUES (NULL, 'Mitsubishi', 'Automative', 'Mitsubishi Corporation (MC) is a global integrated business enterprise that develops and operates businesses together with its offices and subsidiaries in approximately 90 countries and regions worldwide, as well as a global network of around 1,700 group companies.');\";\nst.execute(sql);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sql = \"INSERT INTO Employers(id, name, sector, summary)\n            VALUES (NULL, 'Boeing', 'Aerospace', 'Boeing is the world''s largest aerospace company and leading manufacturer of commercial jetliners, defense, space and security systems, and service provider of aftermarket support.');\";\nst.execute(sql);\n")),(0,r.kt)("h2",{id:"search-for-records-in-a-table"},"Search for records in a table"),(0,r.kt)("p",null,"SQL is particularly powerful when it comes to querying data. Here is a simple example to search for all employers where the employer name starts with ",(0,r.kt)("inlineCode",{parentName:"p"},"Mi")," characters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM Employers \nWHERE name LIKE 'Mi%';\n")),(0,r.kt)("p",null,"Let's run this query using JDBC:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'sql = "SELECT * FROM Employers WHERE name LIKE \'Mi%\';";\nResultSet rs = st.executeQuery(sql);\nwhile (rs.next()) {\n      System.out.println("Employer: " + rs.getString("name"));\n}\n')),(0,r.kt)("p",null,"Notice I've used a different method, ",(0,r.kt)("inlineCode",{parentName:"p"},"executeQuery")," to run the above SQL statement. The ",(0,r.kt)("inlineCode",{parentName:"p"},"executeQuery")," method returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"ResultSet")," object which you can iterate over to extract the retrieved data."),(0,r.kt)("h2",{id:"parameterized-sql-with-jdbc-preparedstatement"},"Parameterized SQL with JDBC PreparedStatement"),(0,r.kt)("p",null,"A JDBC ",(0,r.kt)("inlineCode",{parentName:"p"},"PreparedStatement")," is a special kind of JDBC ",(0,r.kt)("inlineCode",{parentName:"p"},"Statement")," object with some useful additional features. Namely, it makes it easy to insert ",(0,r.kt)("em",{parentName:"p"},"parameters")," into the SQL statement."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Employer em = new Employer ("Nestle", "Food/Drink", "");\nsql = "INSERT INTO Employers (id, name, sector, summary)" +\n      "VALUES (NULL, ?, ?, ?);";\nPreparedStatement pst = conn.prepareStatement(sql);\npst.setString(1, em.getName());\npst.setString(2, em.getSector());\npst.setString(3, em.getSummary());\npst.execute();\n')),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"A primary key for a table could be a combination of several columns. This is called ",(0,r.kt)("em",{parentName:"li"},"composite")," primary key.",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0},8666:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/employer_classdiagram_id-7be376ff6e1a91e4d3f3e19db68626c7.png"}}]);