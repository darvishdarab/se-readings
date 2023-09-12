"use strict";(self.webpackChunkcs421_f23_source=self.webpackChunkcs421_f23_source||[]).push([[7682],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||r;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3492:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const r={id:"coupling",title:"Low Coupling",sidebar_label:"Low Coupling"},i=void 0,s={unversionedId:"readings/wk2/coupling",id:"readings/wk2/coupling",title:"Low Coupling",description:"Ensure that classes are loosely coupled to one another.",source:"@site/docs/readings/wk2/coupling.md",sourceDirName:"readings/wk2",slug:"/readings/wk2/coupling",permalink:"/se-readings/docs/readings/wk2/coupling",draft:!1,editUrl:"https://jhu-oose-f23.github.io/cs421/docs/readings/wk2/coupling.md",tags:[],version:"current",frontMatter:{id:"coupling",title:"Low Coupling",sidebar_label:"Low Coupling"},sidebar:"tutorialSidebar",previous:{title:"High Cohesion",permalink:"/se-readings/docs/readings/wk2/cohesion"},next:{title:"Design Principles",permalink:"/se-readings/docs/readings/wk2/dp"}},l={},p=[{value:"Example Design",id:"example-design",level:2}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Principle",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Ensure that classes are loosely coupled to one another.")),(0,a.kt)("p",null,"Object-Oriented designers use the word ",(0,a.kt)("strong",{parentName:"p"},"coupling")," to describe the dependency between classes.\nWhen a class ",(0,a.kt)("em",{parentName:"p"},"collaborates")," with another class, there is some sort of ",(0,a.kt)("em",{parentName:"p"},"dependency")," between them and therefore they are ",(0,a.kt)("em",{parentName:"p"},"coupled")," to each other."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Classes should not interact (collaborate) with too many other classes. Moreover, if a class ",(0,a.kt)("inlineCode",{parentName:"p"},"A")," interacts with another class ",(0,a.kt)("inlineCode",{parentName:"p"},"B"),", this interaction should be ",(0,a.kt)("strong",{parentName:"p"},"loose"),", which means that ",(0,a.kt)("inlineCode",{parentName:"p"},"A")," should ",(0,a.kt)("strong",{parentName:"p"},"not")," ",(0,a.kt)("em",{parentName:"p"},"know too much")," (or ",(0,a.kt)("em",{parentName:"p"},"make too many assumptions"),") about ",(0,a.kt)("inlineCode",{parentName:"p"},"B"),".")),(0,a.kt)("p",null,"Why does this matter?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Applications that are easy to change consist of classes that are ",(0,a.kt)("strong",{parentName:"li"},"loosely coupled"),"."),(0,a.kt)("li",{parentName:"ul"},"A class that is ",(0,a.kt)("em",{parentName:"li"},"tightly coupled")," to other classes, may need to change if those classes change. "),(0,a.kt)("li",{parentName:"ul"},"In a system that is strongly coupled, when a class changes, there's a greater risk of breaking several other classes (that depend on the changed one).")),(0,a.kt)("admonition",{title:"How to figure out if coupling is high?",type:"info"},(0,a.kt)("p",{parentName:"admonition"},'When you look at the UML Class diagram of your design, every "relationship" is an indication of coupling. The more relationships you have (and the stronger the relationships are)',(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),", the higher is the coupling.")),(0,a.kt)("p",null,"Sometimes, coupling does not manifest itself in a UML diagram. This is when, for instance, a class depends on the inner working of another class. This is the strongest (and nastiest) form of coupling."),(0,a.kt)("p",null,"For example, consider the implementation of getScore inside the Student class:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class Student {\n    private String name;\n    private String email;\n    private GradeBook grades;\n\n\n    public double getScore() {\n        double quiz = grades.quiz();\n\n        double project = 0;\n        for (Double iteration: grades.project()) {\n            project += iteration;\n        }\n\n        double homework = 0;\n        for (Double grade: grades.homework()) {\n            homework += grade;\n        }\n\n        return 0.1 * quiz + 0.3 * homework + 0.6 * project;\n    }\n}\n")),(0,a.kt)("p",null,"The getScore method knows a lot about the GradeBook class! If we change anything in the GradeBook class, this method may break down. The Student and the GradeBook are tightly coupled. To reduce the coupling, you can let the GradeBook class to calculate the score:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class Student {\n    private String name;\n    private String email;\n    private GradeBook grades;\n\n    public double getScore() {\n        return grades.totalScore();\n    }\n}\n")),(0,a.kt)("p",null,"Now the Student class does not need to know anything about what is in the GradeBook class other than it has a totalScore method that it can call to get the student's score!"),(0,a.kt)("admonition",{title:"Take home message",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"It may be impossible to eliminate coupling but you should strive to minimize it.")),(0,a.kt)("h2",{id:"example-design"},"Example Design"),(0,a.kt)("p",null,"The examples are (partial) designs for the ",(0,a.kt)("a",{parentName:"p",href:"../wk1/mybooksapp"},"MyBooks App"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"bidirectional")," association between ",(0,a.kt)("inlineCode",{parentName:"p"},"Book")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Author")," below is an example of tight coupling; both the ",(0,a.kt)("inlineCode",{parentName:"p"},"Book")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"Author")," need to know about one another. If we change one, we may have to change the other one."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4100).Z,width:"502",height:"270"})),(0,a.kt)("p",null,"On the other hand, the example below represents less (tightly) coupled classes. Here, there is still a dependency between ",(0,a.kt)("inlineCode",{parentName:"p"},"Book")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Author")," but only ",(0,a.kt)("inlineCode",{parentName:"p"},"Book")," knows about ",(0,a.kt)("inlineCode",{parentName:"p"},"Author"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5352).Z,width:"480",height:"186"})),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Association, for instance, is a stronger indication of coupling than dependency relationship. Within association, composition is stronger compared to aggregation. ",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0},4100:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/couplingExample1-8a3adb8929c95a9a5173eaa961e68812.png"},5352:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/couplingExample2-4e0e8a9f32c662458a5c4ef8a9b561bd.png"}}]);