(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{141:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},142:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},146:function(e,t,n){"use strict";var r=n(0),a=n(147);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},147:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},148:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(146),o=n(142),c=n(56),s=n.n(c);var l=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,p=e.values,b=e.groupId,d=e.className,m=Object(i.a)(),f=m.tabGroupChoices,v=m.setTabGroupChoices,O=Object(r.useState)(c),h=O[0],g=O[1],j=r.Children.toArray(e.children),y=[];if(null!=b){var N=f[b];null!=N&&N!==h&&p.some((function(e){return e.value===N}))&&g(N)}var w=function(e){var t=e.currentTarget,n=y.indexOf(t),r=p[n].value;g(r),null!=b&&(v(b,r),setTimeout((function(){var e,n,r,a,i,o,c,l;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,o=window,c=o.innerHeight,l=o.innerWidth,n>=0&&i<=l&&a<=c&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s.a.tabItemActive),setTimeout((function(){return t.classList.remove(s.a.tabItemActive)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case u:var r=y.indexOf(e.target)+1;n=y[r]||y[0];break;case l:var a=y.indexOf(e.target)-1;n=y[a]||y[y.length-1]}null===(t=n)||void 0===t||t.focus()};return a.a.createElement("div",{className:"tabs-container"},a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:x,onFocus:w,onClick:w},n)}))),t?Object(r.cloneElement)(j.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},149:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(141)),o=n(148),c=n(149),s={title:"Part"},l={unversionedId:"dev-doctor/backend/api/part",id:"dev-doctor/backend/api/part",isDocsHomePage:!1,title:"Part",description:"Example",source:"@site/docs/dev-doctor/backend/api/part.md",sourceDirName:"dev-doctor/backend/api",slug:"/dev-doctor/backend/api/part",permalink:"/docs/dev-doctor/backend/api/part",editUrl:"https://github.com/LinwoodCloud/website/edit/main/docs/dev-doctor/backend/api/part.md",version:"current",frontMatter:{title:"Part"},sidebar:"dev-doctor",previous:{title:"Course",permalink:"/docs/dev-doctor/backend/api/course"},next:{title:"Item",permalink:"/docs/dev-doctor/backend/api/item/overview"}},u=[{value:"Example",id:"example",children:[]},{value:"Options",id:"options",children:[]}],p={toc:u};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)(o.a,{defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"YAML",value:"yaml"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"json",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json",metastring:'title="<course>/<part>/config.json"',title:'"<course>/<part>/config.json"'},'{\n  "name": "Part 1",\n  "description": "This is a description",\n  "assets": [],\n  "items": [\n    {\n      "name": "Welcome",\n      "description": "Welcome to the course",\n      "type": "video",\n      "source": "youtube",\n      "url": "ScMzIvxBSi4"\n    },\n    {\n      "name": "Text",\n      "type": "text",\n      "text": "Here you can write something. Markdown is supported!\\n"\n    },\n    {\n      "name": "Quiz",\n      "time": 600,\n      "type": "quiz",\n      "questions": [\n        {\n          "title": "Question 1 title",\n          "description": "Question 1 description",\n          "evaluation": "An evaluation",\n          "answers": [\n            {\n              "name": "A"\n            },\n            {\n              "name": "B"\n            },\n            {\n              "name": "C",\n              "points": 5,\n              "correct": true\n            },\n            {\n              "name": "D",\n              "points": 2,\n              "correct": true\n            }\n          ]\n        },\n        {\n          "title": "Question 2 title",\n          "description": "Question 2 description",\n          "evaluation": "An evaluation for question 2",\n          "answers": [\n            {\n              "name": "A",\n              "correct": true\n            },\n            {\n              "name": "B",\n              "correct": true\n            },\n            {\n              "name": "C"\n            },\n            {\n              "name": "D"\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n'))),Object(i.b)(c.a,{value:"yaml",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="<course>/<part>/config.yml"',title:'"<course>/<part>/config.yml"'},"# The name of the current part. The name will stand on the sidebar\nname: Part 1\n\n# Optional: The description of the part\ndescription: This is a description\n\n# Assets which will be cached if the user is offline. The assets need to be in the asset directory\nassets: []\n\n# The content of the part.\nitems:\n- name: Welcome\n  description: Welcome to the course\n  type: video\n  source: youtube\n  url: ScMzIvxBSi4\n- name: Text\n  type: text\n  text: >\n    Here you can write something. Markdown is supported!\n- name: Quiz\n  # Optional: Max time in seconds (here: 10 minutes)\n  time: 600\n  type: quiz\n  questions:\n  - title: Question 1 title\n    description: Question 1 description\n    evaluation: An evaluation\n    answers:\n    - name: A\n    - name: B\n    - name: C\n      points: 5\n      correct: true\n    - name: D\n      points: 2\n      correct: true\n  - title: Question 2 title\n    description: Question 2 description\n    evaluation: An evaluation for question 2\n    answers:\n    - name: A\n      correct: true\n    - name: B\n      correct: true\n    - name: C\n    - name: D\n")))),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"center"},"Type"),Object(i.b)("th",{parentName:"tr",align:"center"},"Required"),Object(i.b)("th",{parentName:"tr",align:"center"},"Since"),Object(i.b)("th",{parentName:"tr",align:"right"},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"name"),Object(i.b)("td",{parentName:"tr",align:"center"},"String"),Object(i.b)("td",{parentName:"tr",align:"center"},"true"),Object(i.b)("td",{parentName:"tr",align:"center"},"0.1"),Object(i.b)("td",{parentName:"tr",align:"right"},"The name of the current part. It will show up in the app bar and in the drawer.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"description"),Object(i.b)("td",{parentName:"tr",align:"center"},"String"),Object(i.b)("td",{parentName:"tr",align:"center"},"false"),Object(i.b)("td",{parentName:"tr",align:"center"},"1.1"),Object(i.b)("td",{parentName:"tr",align:"right"},"This will be shown in the drawer.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"assets"),Object(i.b)("td",{parentName:"tr",align:"center"},"Array<String",">"),Object(i.b)("td",{parentName:"tr",align:"center"},"true"),Object(i.b)("td",{parentName:"tr",align:"center"},"0.1"),Object(i.b)("td",{parentName:"tr",align:"right"},"The assets (like images, videos, ...) filee names in the assets folder in the current directory")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"items"),Object(i.b)("td",{parentName:"tr",align:"center"},"Array<",Object(i.b)("a",{parentName:"td",href:"item/overview"},"Item"),">"),Object(i.b)("td",{parentName:"tr",align:"center"},"true"),Object(i.b)("td",{parentName:"tr",align:"center"},"0.1"),Object(i.b)("td",{parentName:"tr",align:"right"},"A list of items in the current part.")))))}b.isMDXComponent=!0}}]);