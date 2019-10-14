(window.webpackJsonppomodoro=window.webpackJsonppomodoro||[]).push([[0],{10:function(e,n,t){e.exports={root:"ClockContainer_root__2Ca8F",settings:"ClockContainer_settings__3U8DV"}},13:function(e,n,t){e.exports=t(24)},18:function(e,n,t){},24:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(12),c=t.n(r),s=(t(18),t(7)),l=t.n(s),i=t(8),u=t.n(i),m=t(2),f=t(3),d=function(e){return o.a.createElement("div",{className:u.a.root},o.a.createElement("h3",null,e.title),o.a.createElement("div",null,o.a.createElement(f.a,{className:"icon",icon:m.a,onClick:e.handleDecrement}),"\xa0",o.a.createElement("span",{className:u.a.setting},e.setting),"\xa0",o.a.createElement(f.a,{icon:m.b,className:"icon",onClick:e.handleIncrement})))},_=function(e){return o.a.createElement("div",null,o.a.createElement("span",{onClick:e.handlePlayPause},o.a.createElement(f.a,{icon:m.d,className:"icon"}),o.a.createElement(f.a,{icon:m.c,className:"icon"})),"\xa0\xa0\xa0\xa0",o.a.createElement(f.a,{icon:m.e,className:"icon",onClick:e.handleReset}))},E=t(4),h=t.n(E),p=function(){var e,n=!1;return{start:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;n=!0,e=setInterval(t,a)},pause:function(){n=!1,clearInterval(e)},isOn:function(){return n}}}();Object.freeze(p);var b=p,k=function(){function e(e){return e%10===e?"0"+e:e.toString()}return{formatSeconds:function(n){if("number"!==typeof n||n<=0)return"00:00";n=Math.floor(n);var t=Math.floor(n/60),a=n%60;return"".concat(e(t),":").concat(e(a))}}}();Object.freeze(k);var v=k,g=t(5),C=t(10),O=t.n(C),w={session:1,break:2},N=function(e){var n=5,t=20,r=Object(a.useState)(n),c=Object(g.a)(r,2),s=c[0],l=c[1],i=Object(a.useState)(t),u=Object(g.a)(i,2),m=u[0],f=u[1],E=Object(a.useState)(60*t),h=Object(g.a)(E,2),p=h[0],k=h[1],v=Object(a.useState)(!1),C=Object(g.a)(v,2),N=C[0],S=C[1],x=Object(a.useRef)(w.session);return o.a.createElement("div",{className:O.a.root},o.a.createElement("div",{className:O.a.settings},o.a.createElement(d,{title:"break length",setting:s,handleDecrement:function(){!b.isOn()&&s>1&&l((function(e){return 0!==e?e-1:0}))},handleIncrement:function(){!b.isOn()&&s<60&&l((function(e){return e+1}))}}),o.a.createElement(d,{title:"session length",setting:m,handleDecrement:function(){!b.isOn()&&m>1&&(f((function(e){return e-1})),k(60*(m-1)))},handleIncrement:function(){!b.isOn()&&m<60&&(f((function(e){return e+1})),k(60*(m+1)))}})),o.a.createElement(j,{time:p,status:x.current,power:N}),o.a.createElement(_,{handleReset:function(){b.pause(),S(!1),x.current=w.session,f(t),l(n),k(60*t)},handlePlayPause:function(){b.isOn()?(S(!1),b.pause()):(S(!0),b.start((function(){return k((function(e){return 0!==e?e-1:x.current===w.session?(new Audio("./sounds/success.mp3").play(),x.current=w.break,60*s):(new Audio("./sounds/doubleBeep.mp3").play(),x.current=w.session,60*m)}))})))}}))},j=function(e){var n=e.time,t=e.status,a=e.power;return o.a.createElement("div",{className:"".concat(h.a.root," ").concat(a?t===w.session?h.a.session:h.a.break:h.a.off)},t===w.session?o.a.createElement("h2",null,"Session"):o.a.createElement("h2",null,"Break"),o.a.createElement("p",{className:h.a.time},v.formatSeconds(n)))},S=function(e){return o.a.createElement("div",{className:l.a.root},o.a.createElement("section",{className:l.a.box},o.a.createElement("header",null,o.a.createElement("h1",null,"Pomodoro Clock")),o.a.createElement(N,null),o.a.createElement("footer",null,o.a.createElement("p",null,"Designed and Coded by",o.a.createElement("br",null),o.a.createElement("span",null,"David O'Riley")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},4:function(e,n,t){e.exports={root:"Clock_root__1Gj_5",off:"Clock_off__3_mZE",session:"Clock_session__245R2",break:"Clock_break__VouQh",time:"Clock_time__1Xi7P"}},7:function(e,n,t){e.exports={root:"Pomodoro_root__2mg8n",box:"Pomodoro_box__2N20B"}},8:function(e,n,t){e.exports={root:"ClockSetting_root__fnCIR",setting:"ClockSetting_setting__3xhF2"}}},[[13,1,2]]]);
//# sourceMappingURL=main.025c3893.chunk.js.map