(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[85],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},1395:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(7294),a=n(944),i=n(6010),o="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,u=39;var c=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,p=e.values,m=e.groupId,d=e.className,f=(0,a.Z)(),g=f.tabGroupChoices,k=f.setTabGroupChoices,v=(0,r.useState)(c),h=v[0],b=v[1],N=r.Children.toArray(e.children),y=[];if(null!=m){var w=g[m];null!=w&&w!==h&&p.some((function(e){return e.value===w}))&&b(w)}var T=function(e){var t=e.currentTarget,n=y.indexOf(t),r=p[n].value;b(r),null!=m&&(k(m,r),setTimeout((function(){var e,n,r,a,i,o,s,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,o=window,s=o.innerHeight,u=o.innerWidth,n>=0&&i<=u&&a<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case u:var r=y.indexOf(e.target)+1;n=y[r]||y[0];break;case s:var a=y.indexOf(e.target)-1;n=y[a]||y[y.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":h===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:x,onFocus:T,onClick:T},n)}))),t?(0,r.cloneElement)(N.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},9443:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},944:function(e,t,n){"use strict";var r=n(7294),a=n(9443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},5645:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=n(1395),l=n(8215),s={title:"Quiz item",sidebar_label:"Quiz"},u={unversionedId:"dev-doctor/backend/api/item/quiz",id:"dev-doctor/backend/api/item/quiz",isDocsHomePage:!1,title:"Quiz item",description:"Extends Item",source:"@site/docs/dev-doctor/backend/api/item/quiz.md",sourceDirName:"dev-doctor/backend/api/item",slug:"/dev-doctor/backend/api/item/quiz",permalink:"/docs/dev-doctor/backend/api/item/quiz",editUrl:"https://github.com/LinwoodCloud/website/edit/main/docs/dev-doctor/backend/api/item/quiz.md",version:"current",sidebar_label:"Quiz",frontMatter:{title:"Quiz item",sidebar_label:"Quiz"},sidebar:"dev-doctor",previous:{title:"Video item",permalink:"/docs/dev-doctor/backend/api/item/video"},next:{title:"Privacy Policy",permalink:"/docs/dev-doctor/privacypolicy"}},c=[{value:"Example",id:"example",children:[]},{value:"Options",id:"options",children:[]},{value:"Inner classes",id:"inner-classes",children:[{value:"Quiz question",id:"quiz-question",children:[]},{value:"Quiz answer",id:"quiz-answer",children:[]}]}],p={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Extends ",(0,i.kt)("a",{parentName:"p",href:"overview"},"Item")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"In the items option in the ",(0,i.kt)("a",{parentName:"p",href:"../part"},"part")),(0,i.kt)(o.Z,{defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"YAML",value:"yaml"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"json",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="<course>/<part>/config.json"',title:'"<course>/<part>/config.json"'},'{\n  "name": "Quiz",\n  "time": 600,\n  "type": "quiz",\n  "questions": [\n    {\n      "title": "Question 1 title",\n      "description": "Question 1 description",\n      "evaluation": "An evaluation",\n      "answers": [\n        {\n          "name": "A"\n        },\n        {\n          "name": "B"\n        },\n        {\n          "name": "C",\n          "points": 5,\n          "correct": true\n        },\n        {\n          "name": "D",\n          "points": 2,\n          "correct": true\n        }\n      ]\n    },\n    {\n      "title": "Question 2 title",\n      "description": "Question 2 description",\n      "evaluation": "An evaluation for question 2",\n      "answers": [\n        {\n          "name": "A",\n          "correct": true\n        },\n        {\n          "name": "B",\n          "correct": true\n        },\n        {\n          "name": "C"\n        },\n        {\n          "name": "D"\n        }\n      ]\n    }\n  ]\n}\n'))),(0,i.kt)(l.Z,{value:"yaml",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="<course>/<part>/config.yml"',title:'"<course>/<part>/config.yml"'},"name: Quiz\n# Optional: Max time in seconds (here: 10 minutes)\ntime: 600\ntype: quiz\nquestions:\n- title: Question 1 title\n  description: Question 1 description\n  evaluation: An evaluation\n  answers:\n  - name: A\n  - name: B\n  - name: C\n    points: 5\n    correct: true\n  - name: D\n    points: 2\n    correct: true\n- title: Question 2 title\n  description: Question 2 description\n  evaluation: An evaluation for question 2\n  answers:\n  - name: A\n    correct: true\n  - name: B\n    correct: true\n  - name: C\n  - name: D\n")))),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"tune"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Integer"),(0,i.kt)("td",{parentName:"tr",align:"center"},"false"),(0,i.kt)("td",{parentName:"tr",align:"right"},"How long should the user have time to solve this quiz. If not set, there is no time limit")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"questions"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Array<",(0,i.kt)("a",{parentName:"td",href:"#quiz-question"},"Quiz question"),">"),(0,i.kt)("td",{parentName:"tr",align:"center"},"true"),(0,i.kt)("td",{parentName:"tr",align:"right"},"All questions from the part item")))),(0,i.kt)("h2",{id:"inner-classes"},"Inner classes"),(0,i.kt)("h3",{id:"quiz-question"},"Quiz question"),(0,i.kt)("h4",{id:"example-1"},"Example"),(0,i.kt)(o.Z,{defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"YAML",value:"yaml"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"json",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="<course>/<part>/config.json"',title:'"<course>/<part>/config.json"'},'{\n  "title": "Question 1 title",\n  "description": "Question 1 description",\n  "evaluation": "An evaluation",\n  "answers": [\n    {\n      "name": "A"\n    },\n    {\n      "name": "B"\n    },\n    {\n      "name": "C",\n      "points": 5,\n      "correct": true\n    },\n    {\n      "name": "D",\n      "points": 2,\n      "correct": true\n    }\n  ]\n}\n'))),(0,i.kt)(l.Z,{value:"yaml",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="<course>/<part>/config.yml"',title:'"<course>/<part>/config.yml"'},"title: Question 1 title\ndescription: Question 1 description\nevaluation: An evaluation\nanswers:\n- name: A\n- name: B\n- name: C\n  points: 5\n  correct: true\n- name: D\n  points: 2\n  correct: true\n")))),(0,i.kt)("h4",{id:"options-1"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"title"),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"center"},"true"),(0,i.kt)("td",{parentName:"tr",align:"right"},"This will be displayed above the answers")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"description"),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"center"},"false"),(0,i.kt)("td",{parentName:"tr",align:"right"},"This will be displayed as subtitle")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"evaluation"),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"center"},"false"),(0,i.kt)("td",{parentName:"tr",align:"right"},"This will be displayed if the user validate the form")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"answers"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Array<",(0,i.kt)("a",{parentName:"td",href:"#quiz-answer"},"Quiz answer"),">"),(0,i.kt)("td",{parentName:"tr",align:"center"},"true"),(0,i.kt)("td",{parentName:"tr",align:"right"},"All answers of the question")))),(0,i.kt)("h3",{id:"quiz-answer"},"Quiz answer"),(0,i.kt)("h4",{id:"example-2"},"Example"),(0,i.kt)(o.Z,{defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"YAML",value:"yaml"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"json",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="<course>/<part>/config.json"',title:'"<course>/<part>/config.json"'},'{\n  "name": "C",\n  "points": 5,\n  "correct": true\n}\n'))),(0,i.kt)(l.Z,{value:"yaml",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="<course>/<part>/config.yml"',title:'"<course>/<part>/config.yml"'},"name: C\npoints: 5\ncorrect: true\n")))),(0,i.kt)("h4",{id:"options-2"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"name"),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"center"},"true"),(0,i.kt)("td",{parentName:"tr",align:"right"},"The text which will be shown as answer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"points"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Integer"),(0,i.kt)("td",{parentName:"tr",align:"center"},"false"),(0,i.kt)("td",{parentName:"tr",align:"right"},"This are the points which will be given if the player give this answer. Default it is ",(0,i.kt)("inlineCode",{parentName:"td"},"1")," point.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"correct"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Boolean"),(0,i.kt)("td",{parentName:"tr",align:"center"},"true"),(0,i.kt)("td",{parentName:"tr",align:"right"},"This will be displayed if the user validate the form")))))}m.isMDXComponent=!0},6010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);