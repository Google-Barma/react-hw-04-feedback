(this["webpackJsonpreact-hw-04-feedback"]=this["webpackJsonpreact-hw-04-feedback"]||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),i=n(4),s=n.n(i),u=n(2);function o(e){var t=e.title,n=e.children;return Object(c.jsxs)("section",{children:[Object(c.jsx)("h2",{children:t}),n]})}function b(e){var t=e.message;return Object(c.jsx)("p",{children:t})}function j(e){var t=Object.keys(e);return Object(c.jsx)(o,{title:"Statistics",children:e.total>0?Object(c.jsx)("ul",{children:t.map((function(t){return Object(c.jsxs)("li",{children:[t,": ",e[t]]},t)}))}):Object(c.jsx)(b,{message:"No feedback given"})})}var d=n(12);function l(e){var t=e.options,n=e.onLeaveFeedback;return Object(c.jsx)(o,{title:"Please leave feedback",children:Object.keys(t).map((function(e){return Object(c.jsx)("button",{type:"button",onClick:function(){return n(e)},children:e},Object(d.a)())}))})}function O(){var e=Object(r.useState)(0),t=Object(u.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)(0),s=Object(u.a)(i,2),o=s[0],b=s[1],d=Object(r.useState)(0),O=Object(u.a)(d,2),f=O[0],h=O[1],k=function(){return n+o+f},x=k();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(l,{options:{good:n,neutral:o,bad:f},onLeaveFeedback:function(e){switch(e){case"good":a((function(e){return e+1}));break;case"neutral":b((function(e){return e+1}));break;case"bad":h((function(e){return e+1}));break;default:return}}}),Object(c.jsx)(j,{good:n,neutral:o,bad:f,total:x,positivePercentage:function(){var e=k();return e>0?Math.round(n/e*100):0}()})]})}s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.7cf1d7d3.chunk.js.map