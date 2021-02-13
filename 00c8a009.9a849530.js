(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{112:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),p=s(n),u=r,m=p["".concat(c,".").concat(u)]||p[u]||d[u]||o;return n?a.a.createElement(m,i(i({ref:t},l),{},{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(112)),c={title:"Course"},i={unversionedId:"dev-doctor/backend/api/course",id:"dev-doctor/backend/api/course",isDocsHomePage:!1,title:"Course",description:"Example",source:"@site/docs/dev-doctor/backend/api/course.md",slug:"/dev-doctor/backend/api/course",permalink:"/docs/dev-doctor/backend/api/course",editUrl:"https://github.com/LinwoodCloud/website/edit/master/docs/dev-doctor/backend/api/course.md",version:"current",sidebar:"dev-doctor",previous:{title:"Main",permalink:"/docs/dev-doctor/backend/api/main"},next:{title:"Part",permalink:"/docs/dev-doctor/backend/api/part"}},b=[{value:"Example",id:"example",children:[{value:"JSON",id:"json",children:[]},{value:"YAML",id:"yaml",children:[]}]},{value:"Options",id:"options",children:[]}],l={toc:b};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("h3",{id:"json"},"JSON"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"<course>/config.json")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "icon": "png",\n  "name": "Example course",\n  "author": "CodeDoctorDE",\n  "author_url": "https://github.com/CodeDoctorDE",\n  "author_avatar": "https://avatars1.githubusercontent.com/u/20452814?v=4",\n  "description": "This course is only an example which shows how this config works\\n",\n  "body": "Changes are automatically rendered as you type.\\n* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)\\n* Renders actual, \\"native\\" React DOM elements\\n* Allows you to escape or skip HTML (try toggling the checkboxes above)\\n* If you escape or skip the HTML, no `dangerouslySetInnerHTML` is used! Yay!\\n## Table of Contents\\n## HTML block below\\n<blockquote>\\n  This blockquote will change based on the HTML settings above.\\n</blockquote>\\n## How about some code?\\n```js\\nvar React = require(\'react\');\\nvar Markdown = require(\'react-markdown\');\\nReact.render(\\n  <Markdown source=\\"# Your markdown here\\" />,\\n  document.getElementById(\'content\')\\n);\\n```\\n\\nPretty neat, eh?\\n\\n## Tables?\\n\\n|  Feature  | Support |\\n| :-------: | ------- |\\n|  tables   | \u2714       |\\n| alignment | \u2714       |\\n|   wewt    | \u2714       |\\n\\n## More info?\\n\\nRead usage information and more on [GitHub](https://github.com/remarkjs/react-markdown)\\n---------------\\nA component by [Espen Hovlandsdal](https://espen.codes/)\\n",\n  "category": [],\n  "lang": "en",\n  "private": true,\n  "parts": [\n    "part-1",\n    "part-2"\n  ]\n}\n')),Object(o.b)("h3",{id:"yaml"},"YAML"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"<course>/config.yml")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"# The icon of the backend. Supported values are [png, jpg, svg, null]\nicon: png\n\n# The name of the course. You can see it in the title or in the list\nname: Example course\n\n# The author. It will appear on the front page and on the courses list\nauthor: CodeDoctorDE\nauthor_url: https://github.com/CodeDoctorDE\nauthor_avatar: https://avatars1.githubusercontent.com/u/20452814?v=4\n\n# The description of the course which can be seen in the list of the courses and the intro page.\ndescription: >\n  This course is only an example which\n  shows how this config works\n  \n# The body is posting on the home page of the course page. Source: https://remarkjs.github.io/react-markdown/\nbody: |\n  Changes are automatically rendered as you type.\n  * Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)\n  * Renders actual, \"native\" React DOM elements\n  * Allows you to escape or skip HTML (try toggling the checkboxes above)\n  * If you escape or skip the HTML, no `dangerouslySetInnerHTML` is used! Yay!\n  ## Table of Contents\n  ## HTML block below\n  <blockquote>\n    This blockquote will change based on the HTML settings above.\n  </blockquote>\n  ## How about some code?\n  ```js\n  var React = require('react');\n  var Markdown = require('react-markdown');\n  React.render(\n    <Markdown source=\"# Your markdown here\" />,\n    document.getElementById('content')\n  );\n  ```\n\n  Pretty neat, eh?\n \n  ## Tables?\n\n  |  Feature  | Support |\n  | :-------: | ------- |\n  |  tables   | \u2714       |\n  | alignment | \u2714       |\n  |   wewt    | \u2714       |\n  \n  ## More info?\n  \n  Read usage information and more on [GitHub](https://github.com/remarkjs/react-markdown)\n  ---------------\n  A component by [Espen Hovlandsdal](https://espen.codes/)\n\n# The current category of the course. You can see the categories in the list\ncategory: []\n\n# The language of the course. You can see a flag as a badge of the course.\nlang: en\n\n# Controls if the course is shown in the list\nprivate: true\n\n# The course. See the preview to understand all config entries\nparts:\n- part-1\n- part-2\n\n")),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Name"),Object(o.b)("th",{parentName:"tr",align:"center"},"Type"),Object(o.b)("th",{parentName:"tr",align:"center"},"Required"),Object(o.b)("th",{parentName:"tr",align:"center"},"Since"),Object(o.b)("th",{parentName:"tr",align:"right"},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"name"),Object(o.b)("td",{parentName:"tr",align:"center"},"String"),Object(o.b)("td",{parentName:"tr",align:"center"},"true"),Object(o.b)("td",{parentName:"tr",align:"center"},"0.1.0"),Object(o.b)("td",{parentName:"tr",align:"right"},"The name of the course. It will shown in the courses list and in the course details.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"description"),Object(o.b)("td",{parentName:"tr",align:"center"},"String"),Object(o.b)("td",{parentName:"tr",align:"center"},"false"),Object(o.b)("td",{parentName:"tr",align:"center"},"0.1.0"),Object(o.b)("td",{parentName:"tr",align:"right"},"The description of the course which can be seen in the list of the courses and the intro page.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"body"),Object(o.b)("td",{parentName:"tr",align:"center"},"String (Markdown)"),Object(o.b)("td",{parentName:"tr",align:"center"},"true"),Object(o.b)("td",{parentName:"tr",align:"center"},"0.1.0"),Object(o.b)("td",{parentName:"tr",align:"right"},"This will display on the course details page")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"icon"),Object(o.b)("td",{parentName:"tr",align:"center"},"String (png, jpg, svg) or null"),Object(o.b)("td",{parentName:"tr",align:"center"},"false"),Object(o.b)("td",{parentName:"tr",align:"center"},"0.1.0"),Object(o.b)("td",{parentName:"tr",align:"right"},"The icon will show up in the course list left to the title and on the details page of the course.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"lang"),Object(o.b)("td",{parentName:"tr",align:"center"},"String (Language tag)"),Object(o.b)("td",{parentName:"tr",align:"center"},"false"),Object(o.b)("td",{parentName:"tr",align:"center"},"1.1.0"),Object(o.b)("td",{parentName:"tr",align:"right"},"The language of the current course")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"author"),Object(o.b)("td",{parentName:"tr",align:"center"},"String"),Object(o.b)("td",{parentName:"tr",align:"center"},"true"),Object(o.b)("td",{parentName:"tr",align:"center"},"0.1.0"),Object(o.b)("td",{parentName:"tr",align:"right"},"The author. It will appear on the front page and on the courses list")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"author_url"),Object(o.b)("td",{parentName:"tr",align:"center"},"String"),Object(o.b)("td",{parentName:"tr",align:"center"},"false"),Object(o.b)("td",{parentName:"tr",align:"center"},"1.1.0"),Object(o.b)("td",{parentName:"tr",align:"right"},"The url which will be opened when the user clicks on the author")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"author_avatar"),Object(o.b)("td",{parentName:"tr",align:"center"},"String"),Object(o.b)("td",{parentName:"tr",align:"center"},"false"),Object(o.b)("td",{parentName:"tr",align:"center"},"1.1.0"),Object(o.b)("td",{parentName:"tr",align:"right"},"The author avatar which will be displayed left to the author name")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"category"),Object(o.b)("td",{parentName:"tr",align:"center"},"Array<String",">"),Object(o.b)("td",{parentName:"tr",align:"center"},"false"),Object(o.b)("td",{parentName:"tr",align:"center"},"1.2.0"),Object(o.b)("td",{parentName:"tr",align:"right"},"The current category of the course. You can see the categories in the list")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"private"),Object(o.b)("td",{parentName:"tr",align:"center"},"Boolean"),Object(o.b)("td",{parentName:"tr",align:"center"},"false"),Object(o.b)("td",{parentName:"tr",align:"center"},"1.2.0"),Object(o.b)("td",{parentName:"tr",align:"right"},"Controls if the course is shown in the list")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"parts"),Object(o.b)("td",{parentName:"tr",align:"center"},"Array<String",">"),Object(o.b)("td",{parentName:"tr",align:"center"},"true"),Object(o.b)("td",{parentName:"tr",align:"center"},"0.1.0"),Object(o.b)("td",{parentName:"tr",align:"right"},"The course contents. This are the folder names of the parts")))))}s.isMDXComponent=!0}}]);