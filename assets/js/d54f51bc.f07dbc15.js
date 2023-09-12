"use strict";(self.webpackChunkcs421_f23_source=self.webpackChunkcs421_f23_source||[]).push([[3918],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(a),k=r,m=c["".concat(p,".").concat(k)]||c[k]||d[k]||o;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4423:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={id:"cd",title:"Continuous delivery with Heroku",sidebar_label:"Continuous Delivery with Heroku"},i=void 0,l={unversionedId:"readings/wk7/cd",id:"readings/wk7/cd",title:"Continuous delivery with Heroku",description:"Continuous Delivery (or Continuous Deployment, or CD) is a software engineering approach in which software functionalities are delivered frequently through automated deployments.",source:"@site/docs/readings/wk7/cd.md",sourceDirName:"readings/wk7",slug:"/readings/wk7/cd",permalink:"/se-readings/docs/readings/wk7/cd",draft:!1,editUrl:"https://jhu-oose-f23.github.io/cs421/docs/readings/wk7/cd.md",tags:[],version:"current",frontMatter:{id:"cd",title:"Continuous delivery with Heroku",sidebar_label:"Continuous Delivery with Heroku"},sidebar:"tutorialSidebar",previous:{title:"Accomplishing more with JS",permalink:"/se-readings/docs/readings/wk6/js2"},next:{title:"Database in the Cloud",permalink:"/se-readings/docs/readings/wk7/db"}},p={},s=[{value:"Deploying SparkJava on Heroku",id:"deploying-sparkjava-on-heroku",level:2},{value:"Build a simple SparkJava App",id:"build-a-simple-sparkjava-app",level:3},{value:"Prepare to deploy",id:"prepare-to-deploy",level:3},{value:"Heroku Gradle Plugin",id:"heroku-gradle-plugin",level:3},{value:"Making SparkJava Listen on the Correct Port",id:"making-sparkjava-listen-on-the-correct-port",level:3},{value:"Heroku &amp; Git",id:"heroku--git",level:3},{value:"Deploy",id:"deploy",level:3}],u={toc:s};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Continuous Delivery (or Continuous Deployment, or CD) is a software engineering approach in which software functionalities are delivered frequently through automated deployments. ")),(0,r.kt)("p",null,"We will be using ",(0,r.kt)("a",{parentName:"p",href:"https://www.heroku.com/"},"Heroku"),", a platform as a service (",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Platform_as_a_service"},"PaaS"),") based on a managed container system, with integrated data services, for deploying and running software applications. Heroku is primed for continuous delivery.",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," It is, in a nutshell, a cloud application platform that lets you deploy your server online. By taking care of most things related to deployment, it makes it easy to get your application up and running."),(0,r.kt)("h2",{id:"deploying-sparkjava-on-heroku"},"Deploying SparkJava on Heroku"),(0,r.kt)("p",null,"Before we get started, you must:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a free Heroku account (",(0,r.kt)("a",{parentName:"li",href:"https://signup.heroku.com/dc"},"sign up"),")"),(0,r.kt)("li",{parentName:"ul"},"Install the ",(0,r.kt)("a",{parentName:"li",href:"https://toolbelt.heroku.com/"},"Heroku CLI"))),(0,r.kt)("h3",{id:"build-a-simple-sparkjava-app"},"Build a simple SparkJava App"),(0,r.kt)("p",null,"Create a new Gradle Java project ",(0,r.kt)("inlineCode",{parentName:"p"},"Heroku-Demo")," in IntelliJ and add the following dependencies to it"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"implementation 'com.sparkjava:spark-core:2.9.3'\nimplementation 'org.slf4j:slf4j-simple:2.0.0-alpha4'\n")),(0,r.kt)("p",null,"Create the following Java class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import static spark.Spark.get;\nimport static spark.Spark.port;\n\npublic class Server {\n  final static int PORT = 7000;\n    \n  public static void main(String[] args) {\n      port(PORT);\n      get("/", (req, res) -> "Hi Heroku!");\n  }\n}\n')),(0,r.kt)("p",null,"You can run this application and point your browser to ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:7000/"},(0,r.kt)("inlineCode",{parentName:"a"},"http://localhost:7000/"))," to see the ",(0,r.kt)("inlineCode",{parentName:"p"},"Hi Heroku!")," message!"),(0,r.kt)("h3",{id:"prepare-to-deploy"},"Prepare to deploy"),(0,r.kt)("p",null,"We want to package our SparkJava application as a single executable file that can be run on Heroku. We are going to make a ",(0,r.kt)("em",{parentName:"p"},"fat")," ",(0,r.kt)("inlineCode",{parentName:"p"},"JAR")," file",(0,r.kt)("sup",{parentName:"p",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," for this purpose. A fat JAR contains your application and all the dependencies needed to run your application. "),(0,r.kt)("p",null,"Gradle is able to package your Java application into a JAR file but, by default, it does so without including the project dependencies.\nWe can overwrite the default behavior by adding a few lines to the project's ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"jar {\n    duplicatesStrategy = DuplicatesStrategy.EXCLUDE\n    manifest {\n        attributes 'Main-Class' : 'Server'\n    }\n    from {\n        configurations.runtimeClasspath.collect { it.isDirectory() ? it : zipTree(it) }\n    }\n}\n")),(0,r.kt)("p",null,"Now you can run Gradle's ",(0,r.kt)("inlineCode",{parentName:"p"},"jar")," task: open the terminal at the root directory of your Java project and type the following command:",(0,r.kt)("sup",{parentName:"p",id:"fnref-3"},(0,r.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ ./gradlew build jar\n")),(0,r.kt)("p",null,"Once the process is finished, you can find your newly packaged JAR file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"build/libs")," directory. Verify that the archive is valid by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ java -jar build/libs/Heroku-Demo-1.0-SNAPSHOT.jar\n")),(0,r.kt)("h3",{id:"heroku-gradle-plugin"},"Heroku Gradle Plugin"),(0,r.kt)("p",null,"To deploy Gradle based JVM applications directly to Heroku, we will use a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/heroku/heroku-gradle"},"heroku-gradle plugin"),". Add the plugin to your ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'plugins {\n  id \'java\'\n  id "com.heroku.sdk.heroku-gradle" version "2.0.0"\n}\n')),(0,r.kt)("p",null,"Moreover, you need to add a configuration for the heroku-gradle plugin; add the following to your ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'heroku {\n    jdkVersion = 8\n    processTypes(\n        web: "java -jar build/libs/Heroku-Demo-1.0-SNAPSHOT.jar"\n    )\n}\n')),(0,r.kt)("h3",{id:"making-sparkjava-listen-on-the-correct-port"},"Making SparkJava Listen on the Correct Port"),(0,r.kt)("p",null,"When we deployed SparkJava locally, we used the ",(0,r.kt)("inlineCode",{parentName:"p"},"7000")," port on ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost"),". Heroku assigns your application a new port every time you deploy it, so we have to get this port and tell SparkJava to use it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import static spark.Spark.get;\nimport static spark.Spark.port;\n\npublic class Server {\n  static int PORT = 7000;\n\n  private static int getPort() {\n      String herokuPort = System.getenv("PORT");\n      if (herokuPort != null) {\n          PORT = Integer.parseInt(herokuPort);\n      }\n      return PORT;\n  }\n\n  public static void main(String[] args) {\n    port(getPort());\n    get("/", (req, res) -> "Hi Heroku!");\n  }\n}\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"A single app runs in different environments, for example on your development machine when developing the app and on the cloud (e.g. Heroku) in production. Although you run the same exact code, but the environments usually (almost always!) have their own environment-specific configurations. An app\u2019s environment-specific configuration can be stored in environment variables (and not in the app\u2019s source code). In the above code, we get the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"PORT")," env variable since Heroku automatically sets that env variable value when running an app. Thus, we can use that to decide if the app is currently running on Heroku or not.")),(0,r.kt)("h3",{id:"heroku--git"},"Heroku & Git"),(0,r.kt)("p",null,"Heroku is deeply integrated with the Git workflow. However, ",(0,r.kt)("inlineCode",{parentName:"p"},"heroku-gradle")," plugin that we listed under ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins")," is used to deploy Gradle-based JVM applications directly to Heroku without pushing to a Git repository."),(0,r.kt)("h3",{id:"deploy"},"Deploy"),(0,r.kt)("p",null,"Before deployment, you must create a Heroku app. You acn login to your Heroku account on ",(0,r.kt)("a",{parentName:"p",href:"https://www.heroku.com/"},"www.heroku.com")," and create a new app:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(3865).Z,width:"1607",height:"542"})),(0,r.kt)("p",null,"Then, do the following on the terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ git init\n$ heroku git:remote -a your-heroku-app-name-goes-here\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You must have Heroku CLI installed in order for this command to work!")),(0,r.kt)("p",null,"Next, open your ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle")," file and add the following under ",(0,r.kt)("inlineCode",{parentName:"p"},"heroku"),":"),(0,r.kt)("p",null,"Then, run the following command:",(0,r.kt)("sup",{parentName:"p",id:"fnref-4"},(0,r.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ ./gradlew build deployHeroku\n")),(0,r.kt)("p",null,"If all goes well, you will get a message that looks similar to the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"> Task :deployHeroku\n-----\x3e Packaging application...\n       - including: build\\classes\\java\\main\\Server.class\n       - including: build\\libs\\heroku-demo-1.0-SNAPSHOT.jar\n       - including: build\\tmp\\compileJava\\previous-compilation-data.bin\n       - including: build\\tmp\\jar\\MANIFEST.MF\n-----\x3e Creating build...\n       - file: C:\\Users\\Ali\\AppData\\Local\\Temp\\heroku-deploy3926677424279110861source-blob.tgz\n       - size: 2MB\n\nlocking FileBasedConfig[C:\\Users\\Ali\\.config\\jgit\\config] failed after 5 retries\n\n> Task :deployHeroku\n-----\x3e Uploading build...\n       - success\n-----\x3e Deploying...\nremote: \nremote: -----\x3e Building on the Heroku-20 stack\nremote: -----\x3e Using buildpack: heroku/jvm\nremote: -----\x3e heroku-gradle app detected\nremote: -----\x3e Installing JDK 1.8... done\nremote: -----\x3e Discovering process types\nremote:        Procfile declares types -> web\nremote: \nremote: -----\x3e Compressing...\nremote:        Done: 54.5M\nremote: -----\x3e Launching...\nremote:        Released v3\nremote:        https://jhu-heroku-demo.herokuapp.com/ deployed to Heroku\nremote: \n-----\x3e Done\n")),(0,r.kt)("p",null,"You can point your browser to the URL of your Heroku application. For example, the example above is deployed at ",(0,r.kt)("a",{parentName:"p",href:"https://jhu-heroku-demo.herokuapp.com/"},"https://jhu-heroku-demo.herokuapp.com/"),"."),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Read more about Continuous Delivery on Heroku at ",(0,r.kt)("a",{parentName:"li",href:"https://www.heroku.com/continuous-delivery"},"https://www.heroku.com/continuous-delivery"),".",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2"},"JAR stands for Java ARchive. It is used for aggregating many Java files into one. It is the preferred way to bundle a Java application. Read more on ",(0,r.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/technotes/guides/jar/jarGuide.html"},"Oracle's website"),".",(0,r.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-3"},"You can also run this ",(0,r.kt)("em",{parentName:"li"},"task")," in IntelliJ from the ",(0,r.kt)("a",{parentName:"li",href:"https://www.jetbrains.com/help/idea/jetgradle-tool-window.html"},"Gradle Tool Window"),(0,r.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-4"},"You can configure IntelliJ to run this ",(0,r.kt)("em",{parentName:"li"},"task")," by following the instructions ",(0,r.kt)("a",{parentName:"li",href:"https://devcenter.heroku.com/articles/deploying-java-applications-to-heroku-from-eclipse-or-intellij-idea#deploying-from-intellij-idea"},"here"),".",(0,r.kt)("a",{parentName:"li",href:"#fnref-4",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0},3865:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cd1-232b5ecc86cb271c990ac4077ac06260.png"}}]);