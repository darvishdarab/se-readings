"use strict";(self.webpackChunkcs421_f23_source=self.webpackChunkcs421_f23_source||[]).push([[6698],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,y=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return a?n.createElement(y,i(i({ref:t},c),{},{components:a})):n.createElement(y,i({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2533:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={id:"orm",title:"Object Relational Mapping (ORM)",sidebar_label:"Object Relational Mapping"},i=void 0,l={unversionedId:"readings/wk4/orm",id:"readings/wk4/orm",title:"Object Relational Mapping (ORM)",description:"Object-relational mapping (ORM) is an application (library) to map your objects to a relational database; typically, you describe which classes and properties in the code map to which tables and columns in the database, and then the library does all the copying and translating. In this scenario, ORM sits between JDBC and the rest of your Java application.",source:"@site/docs/readings/wk4/orm.md",sourceDirName:"readings/wk4",slug:"/readings/wk4/orm",permalink:"/se-readings/docs/readings/wk4/orm",draft:!1,editUrl:"https://jhu-oose-f23.github.io/cs421/docs/readings/wk4/orm.md",tags:[],version:"current",frontMatter:{id:"orm",title:"Object Relational Mapping (ORM)",sidebar_label:"Object Relational Mapping"},sidebar:"tutorialSidebar",previous:{title:"CRUD operations in data access Object (DAO)",permalink:"/se-readings/docs/readings/wk4/dao"},next:{title:"Separation of Client and Server",permalink:"/se-readings/docs/readings/wk4/api"}},s={},p=[{value:"ORMLite",id:"ormlite",level:2},{value:"ORMLite Annotations",id:"ormlite-annotations",level:2},{value:"Basic Database Operations",id:"basic-database-operations",level:2},{value:"Create &amp; READ",id:"create--read",level:3}],c={toc:p};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Object-relational mapping (ORM) is an application (library) to map your objects to a relational database; typically, you describe which classes and properties in the code map to which tables and columns in the database, and then the library does all the copying and translating. In this scenario, ORM sits between JDBC and the rest of your Java application."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(776).Z,width:"1920",height:"752"})),(0,r.kt)("h2",{id:"ormlite"},"ORMLite"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://ormlite.com/"},"ORMLite")," is a small java library, with the purpose of making database interaction easy. ORMLite provides lightweight functionality for persisting Java objects to SQL databases. To use it, you must add it as a dependency to your project. Open ",(0,r.kt)("inlineCode",{parentName:"p"},"gradle.build")," and add the following line to the ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies")," block."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"implementation 'com.j256.ormlite:ormlite-jdbc:5.6'\n")),(0,r.kt)("h2",{id:"ormlite-annotations"},"ORMLite Annotations"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Annotations are special code markers have have been available in Java since version 5 that provide meta information about classes, methods, or fields")),(0,r.kt)("p",null,"First step is to ",(0,r.kt)("em",{parentName:"p"},"annotate")," the POJO model classes that you want to be persisted in the database. Let's annotate the ",(0,r.kt)("inlineCode",{parentName:"p"},"Employer")," class with ORMLite annotations as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'package model;\n\nimport com.j256.ormlite.field.DatabaseField;\nimport com.j256.ormlite.table.DatabaseTable;\n\n@DatabaseTable(tableName = "employers")\npublic class Employer {\n    @DatabaseField(id = true)\n    private Integer id;\n    @DatabaseField(canBeNull = true, unique = true)\n    private String name;\n    @DatabaseField\n    private String sector;\n    @DatabaseField\n    private String summary;\n\n    public Employer() {\n    }\n\n    public Employer(String name, String sector, String summary) {\n        this.name = name;\n        this.sector = sector;\n        this.summary = summary;\n    }\n\n    public Integer getId() {\n        return id;\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    public String getSector() {\n        return sector;\n    }\n\n    public String getSummary() {\n        return summary;\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'@DatabaseTable(tableName = "employers")')," specifies that objects of ",(0,r.kt)("inlineCode",{parentName:"p"},"Employer")," class are going to be mapped/saved to a table named ",(0,r.kt)("inlineCode",{parentName:"p"},"employers"),". Each class field that we want corresponded/saved as a column in the target table needs to be annotated using ",(0,r.kt)("inlineCode",{parentName:"p"},"@DatabaseField"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," argument passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"DatabaseField")," annotation marks a particular class field as the id (i.e. primary key) of the table. In our case, class field named ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," is the primary key in the ",(0,r.kt)("inlineCode",{parentName:"p"},"employers")," table. ",(0,r.kt)("inlineCode",{parentName:"p"},"canBeNull")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"unique")," arguments are self-explanatory!"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"In order for ORMLite to return the results of your queries properly make sure to always include an explicit default constructor in your class.")),(0,r.kt)("h2",{id:"basic-database-operations"},"Basic Database Operations"),(0,r.kt)("p",null,"Once you have your model class(es) properly annotated, you can delegate many of the basic database tasks (i.e., CRUD tasks) to ORMLite without writing any SQLs really! That is pretty cool, isn't it? "),(0,r.kt)("h3",{id:"create--read"},"Create & READ"),(0,r.kt)("p",null,"Remember we did the following to create ",(0,r.kt)("inlineCode",{parentName:"p"},"employers")," table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'final String URI = "jdbc:sqlite:./JBApp.db";\nConnection conn = DriverManager.getConnection(URI);\nStatement st = conn.createStatement();\nStatement st = conn.createStatement();\nString sql = "CREATE TABLE IF NOT EXISTS employers (id INTEGER PRIMARY KEY, \n       name VARCHAR(100) NOT NULL UNIQUE, sector VARCHAR(100), summary VARCHAR(10000));";\nst.execute(sql);\nsql = "INSERT INTO employers(id, name, sector, summary)" +\n                "VALUES (NULL, \'Nestle\', \'Food/Drink\', \'\');";\nst.execute(sql);\n')),(0,r.kt)("p",null,"But, having ",(0,r.kt)("inlineCode",{parentName:"p"},"Employer")," class ORMLite-annotated, you can achieve the same by:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'final String URI = "jdbc:sqlite:./JBApp.db";\nConnectionSource connectionSource = new JdbcConnectionSource(URI);\nDao<Employer,Integer> employerDao = DaoManager.createDao(connectionSource, Employer.class);\nTableUtils.createTableIfNotExists(connectionSource, Employer.class);\nEmployer em = new Employer ("Nestle2", "Food/Drink", "");\nemployerDao.create(em);\n')),(0,r.kt)("p",null,"First we create a database connection by passing the connection URI into ",(0,r.kt)("inlineCode",{parentName:"p"},"JdbcConnectionSource"),". Next, we need to create a DAO object. For this, you need to provide the connection instance (i.e., ",(0,r.kt)("inlineCode",{parentName:"p"},"connectionSource"),") as well as the (model) class that corresponds to the DAO we are creating to the ",(0,r.kt)("inlineCode",{parentName:"p"},"createDao")," method of ",(0,r.kt)("inlineCode",{parentName:"p"},"DaoManager"),". This creates a ",(0,r.kt)("inlineCode",{parentName:"p"},"Dao<Employer, Integer>")," object for class ",(0,r.kt)("inlineCode",{parentName:"p"},"Employer")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"Integer")," must corresponds to the datatype of the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," field in the persisted class (i.e., ",(0,r.kt)("inlineCode",{parentName:"p"},"Employer")," class). Using ",(0,r.kt)("inlineCode",{parentName:"p"},"TableUtils.createTableIfNotExists")," we create the ",(0,r.kt)("inlineCode",{parentName:"p"},"employers")," table if it does not exist already! Next, ",(0,r.kt)("inlineCode",{parentName:"p"},"employerDao.create(em);")," results in execution of the following query on the ",(0,r.kt)("inlineCode",{parentName:"p"},"employers")," table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO employers (id, name, sector, summary) VALUES (NULL, 'Nestle', 'Food/Drink', '');\n")),(0,r.kt)("p",null,"Now, using the same ",(0,r.kt)("inlineCode",{parentName:"p"},"employerDao")," object we already created, we can read all the records in the ",(0,r.kt)("inlineCode",{parentName:"p"},"employers")," table (and print their names) as follows: i.e., ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT * FROM employer")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"employerDao.create(em);\nList<Employer> ls  = employerDao.queryForAll();\n\nfor (Employer e: ls) {\n    System.out.println(e.getName());\n}\n")),(0,r.kt)("p",null,"There are other methods such as ",(0,r.kt)("inlineCode",{parentName:"p"},"queryForEq()")," which you can call to read only select records. The following is equivalent of ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT * FROM employers WHERE name='Nestle'"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'employerDao.queryForEq("name", "Nestle");\n')),(0,r.kt)("admonition",{title:"More Operations",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"ORMLite provides various classes and functionalities to do all sorts of database operations with minimal effort. Consult ",(0,r.kt)("a",{parentName:"p",href:"https://ormlite.com/javadoc/ormlite-core/doc-files/ormlite.html"},"this page")," for further information.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"There are specific annotations to specify and work with foreign keys. These would be useful when setting up the ",(0,r.kt)("inlineCode",{parentName:"p"},"jobs")," table in the context of ",(0,r.kt)("inlineCode",{parentName:"p"},"JBApp"),". I trust you can find out those on your own by consulting the documentation page of ORMLite!")))}m.isMDXComponent=!0},776:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/orm-805241df4b0cc0db31f8cd5595f69e75.png"}}]);