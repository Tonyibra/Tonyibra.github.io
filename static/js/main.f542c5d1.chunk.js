(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{43:function(e,t,c){},44:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var s=c(0),i=c(1),n=c.n(i),a=c(16),r=c.n(a),j=(c(43),c(44),c(8)),l=function(){return Object(s.jsx)("header",{children:Object(s.jsxs)("nav",{id:"nav-bar",children:[Object(s.jsx)("div",{className:"logo",children:Object(s.jsx)(j.b,{to:"/",children:Object(s.jsx)("h2",{children:"Tony Ibrahim"})})}),Object(s.jsxs)("ul",{children:[Object(s.jsx)(j.b,{to:"/websites",children:Object(s.jsx)("li",{children:"Websites"})}),Object(s.jsx)(j.b,{to:"/gear",children:Object(s.jsx)("li",{children:"Gear"})}),Object(s.jsx)(j.b,{to:"/contact",children:Object(s.jsx)("li",{children:"Contact"})})]})]})})},b=function(){return Object(s.jsxs)("section",{id:"home",children:[Object(s.jsx)(l,{}),Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h1",{children:"TONY IBRAHIM"}),Object(s.jsxs)("h3",{children:["Computer Science Student at",Object(s.jsx)("span",{className:"text-primary",children:Object(s.jsxs)("a",{href:"https://www.ndu.edu.lb/home",target:"_blank",children:[" ","NDU."," "]})}),"Self-learning software engineer through research & development.Gaming on Youtube and Twitch on my free time"]})]}),Object(s.jsxs)("div",{className:"social-link mg-1",children:[Object(s.jsx)("div",{children:Object(s.jsx)("a",{href:"https://www.facebook.com/tonyibraa/",target:"_blank",children:Object(s.jsx)("i",{class:"fab fa-facebook-f "})})}),Object(s.jsx)("div",{children:Object(s.jsx)("a",{href:"https://twitter.com/tonyibra5",target:"_blank",children:Object(s.jsx)("i",{class:"fab fa-twitter"})})}),Object(s.jsx)("div",{children:Object(s.jsx)("a",{href:"https://www.instagram.com/tonyibrahim_8/",target:"_blank",children:Object(s.jsx)("i",{class:"fab fa-instagram"})})}),Object(s.jsx)("div",{children:Object(s.jsx)("a",{href:"https://github.com/Tonyibra",target:"_blank",children:Object(s.jsx)("i",{class:"fab fa-github"})})}),Object(s.jsx)("div",{children:Object(s.jsx)("a",{href:"https://www.twitch.tv/lb_zeyrox",target:"_blank",children:Object(s.jsx)("i",{class:"fab fa-twitch"})})}),Object(s.jsx)("div",{children:Object(s.jsx)("a",{href:"https://www.youtube.com/channel/UC_8m1odq0_SuFk6hPMAkmyg",target:"_blank",children:Object(s.jsx)("i",{class:"fab fa-youtube"})})})]}),Object(s.jsxs)("div",{className:"more",children:[Object(s.jsx)("a",{href:"#work",children:"Read More"}),Object(s.jsx)("i",{class:"fas fa-arrow-down fa-2x"})]})]})},d=(c(49),c(50),function(){return Object(s.jsxs)("section",{id:"work",children:[Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"work-info",children:[Object(s.jsx)("h3",{children:"MY WORK"}),Object(s.jsx)("p",{className:"work-desc",children:"I was never the best at school or academics, I'm just a super curious guy. I spend a lot of my time building software and full stack web apps. I love spending time staring at screen trying to understand weird coding lines, Willing to finish my computer science bachelor degree in 2022."})]})}),Object(s.jsxs)("div",{className:"skills",children:[Object(s.jsxs)("div",{className:"skills-info",children:[Object(s.jsx)("h5",{children:"Web Development"}),Object(s.jsx)("li",{children:"Front End :HTML5/CSS ReactJs"}),Object(s.jsx)("li",{children:"Back End :NodeJS Express"}),Object(s.jsx)("li",{children:"DataBase : MongoDb, SQL"})]}),Object(s.jsxs)("div",{className:"skills-info",children:[Object(s.jsx)("h5",{children:"API'S"}),Object(s.jsx)("li",{children:"Creating Restful API'S"}),Object(s.jsx)("li",{children:"Fetch data from API'S"})]}),Object(s.jsxs)("div",{className:"skills-info",children:[Object(s.jsx)("h5",{children:"Community"}),Object(s.jsxs)("li",{children:["Open source projects on",Object(s.jsxs)("a",{href:"https://github.com/Tonyibra",target:"_blank",children:[" ","Github"]})]}),Object(s.jsx)("li",{children:"Discord"})]})]})]})}),h=c(37),o=c(12),O=function(){var e=Object(o.c)((function(e){return e.githubReducer})),t=e.loading;return Object(s.jsxs)("table",{className:"table",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Title"}),Object(s.jsx)("th",{children:"Description"}),Object(s.jsx)("th",{children:"Language"}),Object(s.jsx)("th",{children:"Creation Date"})]})}),Object(s.jsx)("tbody",{children:t&&Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"Loading..."}),Object(s.jsx)("td",{children:"Loading..."}),Object(s.jsx)("td",{children:"Loading..."}),Object(s.jsx)("td",{children:"Loading..."})]})}),!t&&e.githubInfo.map((function(e,t){return Object(s.jsx)("tbody",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:e.name}),Object(s.jsx)("td",{children:e.description?e.description:"No Description"}),Object(s.jsx)("td",{children:"Loading..."}),Object(s.jsx)("td",{children:"Loading..."})]})})}))]})},x=c(13),u=c.n(x),f=c(18),m=c(21),p=c(25),g=c.n(p),v="GITHUB_PROJECT_INFO_REQ",w="GITHUB_PROJECT_INFO_SUCC",y="GITHUB_PROJECT_INFO_FAIL",N="GITHUB_PROJECT_LANG_REQ",k="GITHUB_PROJECT_LANG_SUCC",_="GITHUB_PROJECT_LANG_FAIL",S="https://api.github.com/users/Tonyibra/repos",T=function(e){return function(){var t=Object(f.a)(u.a.mark((function t(c){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c({type:w,payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},I=function(e){return function(){var t=Object(f.a)(u.a.mark((function t(c){var s,i,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s="https://api.github.com/repos/Tonyibra/".concat(e,"/languages"),t.next=3,g.a.get(s);case 3:i=t.sent,n=i.data,c({type:k,payload:n}),console.log("uri : ".concat(s));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},C=c(10),E={githubInfo:[]},M=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.githubReducer})).githubInfo,c=(Object(o.c)((function(e){return e.languageReducer})),Object(i.useState)([])),n=Object(h.a)(c,2),a=n[0],r=n[1];return Object(i.useEffect)((function(){e(function(){var e=Object(f.a)(u.a.mark((function e(t){var c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get(S);case 2:c=e.sent,s=c.data,t({type:v}),t(T(s));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e(I()),t.map((function(c,s){r(t[s].name),e(I(a)),console.log(a[s])}))}),[]),Object(s.jsxs)("section",{id:"project",className:"p-2",children:[Object(s.jsxs)("div",{className:"popular-projects",children:[Object(s.jsx)("h2",{children:"Popular Projects"}),Object(s.jsx)(O,{})]}),Object(s.jsxs)("div",{className:"future",children:[Object(s.jsx)("h2",{children:"Future Ventures(Teach myself in 2021)"}),Object(s.jsxs)("div",{className:"future-list",children:[Object(s.jsx)("li",{children:"Machine Learning/AI"}),Object(s.jsx)("li",{children:"Data Science"}),Object(s.jsx)("li",{children:"OAuth"}),Object(s.jsx)("li",{children:"Nextjs/ElectronJs"}),Object(s.jsx)("li",{children:"Making coffee instantly"})]}),Object(s.jsx)("h3",{children:"I have interests besides tech that i may share on my youtube channel and sometime live on twitch"})]}),Object(s.jsxs)("div",{className:"contact-btn",children:[Object(s.jsx)(j.b,{to:"/contact",children:Object(s.jsx)("button",{type:"button",children:"Contact Me"})}),Object(s.jsx)(j.b,{to:"/websites",children:Object(s.jsx)("button",{type:"button",children:"My Websites"})})]})]})},R=function(){return Object(s.jsxs)("secton",{children:[Object(s.jsx)("div",{className:"websites",children:Object(s.jsx)("h2",{children:"Websites I Made "})}),Object(s.jsxs)("div",{className:"cards-container",children:[Object(s.jsxs)("div",{className:"cards",children:[Object(s.jsx)("h2",{children:"FinicialBeast"}),Object(s.jsx)("p",{children:"Front-End design Website"}),Object(s.jsxs)("div",{className:"icons",children:[Object(s.jsx)("i",{class:"fab fa-html5 fa-2x"}),Object(s.jsx)("i",{class:"fab fa-css3 fa-2x"}),Object(s.jsx)("i",{class:"fab fa-js fa-2x"})]}),Object(s.jsxs)("div",{className:"btns",children:[Object(s.jsx)("button",{className:"github",children:Object(s.jsx)("a",{href:"https://github.com/Tonyibra/FinicialBeast",target:"_blank",children:"Github"})}),Object(s.jsx)("button",{className:"live",children:Object(s.jsx)("a",{href:"https://finicial-beast.netlify.app/",target:"_blank",children:"Live"})})]})]}),Object(s.jsxs)("div",{className:"cards",children:[Object(s.jsx)("h2",{children:"Travelly"}),Object(s.jsx)("p",{children:"Front-End design Website"}),Object(s.jsxs)("div",{className:"icons",children:[Object(s.jsx)("i",{class:"fab fa-html5 fa-2x"}),Object(s.jsx)("i",{class:"fab fa-css3 fa-2x"}),Object(s.jsx)("i",{class:"fab fa-js fa-2x"})]}),Object(s.jsxs)("div",{className:"btns",children:[Object(s.jsx)("button",{className:"github",children:Object(s.jsx)("a",{href:"https://github.com/Tonyibra/Travel-Front-end/tree/master",target:"_blank",children:"Github"})}),Object(s.jsx)("button",{className:"live",children:Object(s.jsx)("a",{href:"https://itravelly.netlify.app/",target:"_blank",children:"Live"})})]})]}),Object(s.jsx)("div",{className:"more_fromgh",children:Object(s.jsxs)("button",{className:"more_btn",children:[Object(s.jsx)("a",{href:"https://github.com/Tonyibra",target:"_blank",children:"More"}),Object(s.jsx)("i",{class:"fab fa-github"})]})})]})]})},F=function(){return Object(s.jsxs)("section",{id:"websites",children:[Object(s.jsx)(l,{}),Object(s.jsx)(R,{})]})},P=function(){return Object(s.jsxs)("div",{className:"gear-header",children:[Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("h2",{children:"My Gear"}),Object(s.jsx)("p",{children:"Here's a list of my computer parts and accessories used in my day to day work."})]}),Object(s.jsxs)("div",{className:"products-used",children:[Object(s.jsxs)("div",{className:"software",children:[Object(s.jsx)("h2",{children:"Software"}),Object(s.jsx)("li",{children:"IDE: VS-CODE"}),Object(s.jsx)("li",{children:"Design: Figma"}),Object(s.jsx)("li",{children:"Video Editing : Final Cut Pro"})]}),Object(s.jsxs)("div",{className:"software",children:[Object(s.jsx)("h2",{children:"Computer"}),Object(s.jsx)("li",{children:"CPU: Intel core i5 8400"}),Object(s.jsx)("li",{children:"RAM: hyperX 16gb (single slot)"}),Object(s.jsx)("li",{children:"GPU: Nvide RTX 3060"}),Object(s.jsx)("li",{children:"Monitor: MSI Optix 24"}),Object(s.jsx)("li",{children:"KeyBoard: Red Dragon K55"}),Object(s.jsx)("li",{children:"Mice: Logitech G402 SE"})]}),Object(s.jsxs)("div",{className:"software",children:[Object(s.jsx)("h2",{children:"accessories"}),Object(s.jsx)("li",{children:"Watch: Apple Watch series 3"}),Object(s.jsx)("li",{children:"Phone: Apple Iphone X"}),Object(s.jsx)("li",{children:"Headsets : Steelseries Arctis 3"}),Object(s.jsx)("li",{children:"Controller : PS4 Controller"})]})]})]})},L=function(){return Object(s.jsxs)("footer",{id:"footer",children:[Object(s.jsxs)("div",{className:"social-links",children:[Object(s.jsx)("h3",{children:"STAY CONNECTED"}),Object(s.jsxs)("div",{className:"social-icons mg-1 fa-2x",children:[Object(s.jsx)("div",{children:Object(s.jsx)("a",{href:"https://www.facebook.com/tonyibraa/",target:"_blank",children:Object(s.jsx)("i",{class:"fab fa-facebook-f "})})}),Object(s.jsx)("div",{children:Object(s.jsx)("a",{href:"https://twitter.com/tonyibra5",target:"_blank",children:Object(s.jsx)("i",{class:"fab fa-twitter"})})}),Object(s.jsx)("div",{children:Object(s.jsx)("a",{href:"https://www.instagram.com/tonyibrahim_8/",target:"_blank",children:Object(s.jsx)("i",{class:"fab fa-instagram"})})}),Object(s.jsx)("div",{children:Object(s.jsx)("a",{href:"https://github.com/Tonyibra",target:"_blank",children:Object(s.jsx)("i",{class:"fab fa-github"})})}),Object(s.jsx)("div",{children:Object(s.jsx)("a",{href:"https://www.twitch.tv/lb_zeyrox",target:"_blank",children:Object(s.jsx)("i",{class:"fab fa-twitch"})})}),Object(s.jsx)("div",{children:Object(s.jsx)("a",{href:"https://www.youtube.com/channel/UC_8m1odq0_SuFk6hPMAkmyg",target:"_blank",children:Object(s.jsx)("i",{class:"fab fa-youtube"})})})]}),Object(s.jsx)("h5",{children:"Copyrights \xa9 Tony ibrahim"})]}),Object(s.jsxs)("div",{className:"page-ending",children:[Object(s.jsx)("li",{children:"Home"}),Object(s.jsx)("p",{children:"|"}),Object(s.jsx)("li",{children:"Gear"}),Object(s.jsx)("p",{children:"|"}),Object(s.jsx)("li",{children:"Contact"})]})]})},A=function(){return Object(s.jsxs)("section",{id:"gear",children:[Object(s.jsx)(l,{}),Object(s.jsx)(P,{}),Object(s.jsx)(L,{})]})},G=function(){return Object(s.jsxs)("section",{id:"contact",children:[Object(s.jsx)(l,{}),Object(s.jsxs)("div",{className:"form",children:[Object(s.jsx)("h2",{children:"Send me an email"}),Object(s.jsx)("div",{className:"input",children:Object(s.jsxs)("form",{action:"https://formspree.io/f/xjvplwev",method:"POST",children:[Object(s.jsx)("label",{for:"name",required:!0,children:"Name"}),Object(s.jsx)("input",{type:"text",required:!0,name:"name",id:"name"}),Object(s.jsx)("label",{for:"email",children:"Email address"}),Object(s.jsx)("input",{type:"text",required:!0,id:"email",name:"_replyto"}),Object(s.jsx)("label",{for:"subject",children:"Subject"}),Object(s.jsx)("input",{type:"text",required:!0,name:"subject",id:"subject"}),Object(s.jsx)("label",{for:"reason",children:"Reason"}),Object(s.jsxs)("select",{required:!0,name:"reasons",id:"reason",children:[Object(s.jsx)("option",{value:"Just to Say hello",children:"Just to Say hello"}),Object(s.jsx)("option",{value:"Business",children:"Business"}),Object(s.jsx)("option",{value:"Software",children:"Software"}),Object(s.jsx)("option",{value:"Upwork",children:"Upwork"}),Object(s.jsx)("option",{value:"Social Media",children:"Social Media"}),Object(s.jsx)("option",{value:"Other",children:"Other"})]}),Object(s.jsx)("label",{required:!0,for:"message",children:"Message"}),Object(s.jsx)("textarea",{name:"message",id:"message",cols:"61",rows:"10"}),Object(s.jsx)("div",{className:"submit",children:Object(s.jsx)("button",{type:"submit",value:"Send",children:"Submit"})})]})})]})]})},B=c(3);var D=function(){return Object(s.jsx)(j.a,{children:Object(s.jsxs)("div",{className:"app",children:[Object(s.jsxs)(B.a,{path:"/",exact:!0,children:[Object(s.jsx)(b,{}),Object(s.jsx)(d,{}),Object(s.jsx)(M,{}),Object(s.jsx)(L,{})]}),Object(s.jsx)(B.a,{path:"/contact",component:G,exact:!0}),Object(s.jsx)(B.a,{path:"/websites",component:F}),Object(s.jsx)(B.a,{path:"/gear",component:A})]})})},U=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,72)).then((function(t){var c=t.getCLS,s=t.getFID,i=t.getFCP,n=t.getLCP,a=t.getTTFB;c(e),s(e),i(e),n(e),a(e)}))},J=c(11),H=c(36),W=Object(J.combineReducers)({githubReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(C.a)(Object(C.a)({},e),{},{loading:!0});case w:return{loading:!1,githubInfo:t.payload};case y:default:return Object(C.a)(Object(C.a)({},e),{},{loading:!0})}},languageReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{lang:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(C.a)({},e);case k:return{loading:!1,lang:t.payload};case _:default:return Object(C.a)({},e)}}}),q=Object(J.createStore)(W,Object(H.composeWithDevTools)(Object(J.applyMiddleware)(m.a)));r.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(o.a,{store:q,children:Object(s.jsx)(D,{})})}),document.getElementById("root")),U()}},[[71,1,2]]]);
//# sourceMappingURL=main.f542c5d1.chunk.js.map