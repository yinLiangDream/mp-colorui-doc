(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{431:function(e,t,n){"use strict";n.r(t);n(44),n(16),n(66);var r=n(38);var o={name:"UpdateLog",mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new Headers).append("Content-Type","application/json;charset=utf-8"),n.append("Access-Control-Allow-Origin","*"),n.append("Access-Control-Allow-Methods","*"),t.next=6,fetch("https://mp-colorui-1255362963.cos.ap-chengdu.myqcloud.com/update/update.json",{method:"GET",mode:"cors",headers:n});case 6:return r=t.sent,t.next=9,r.json();case 9:o=t.sent,e.updateList=o.map((function(e){return t=e.title,n=e.time,r=e.content,{version:t,time:n,desc:r};var t,n,r}));case 11:case"end":return t.stop()}}),t)})))()},data:function(){return{updateList:[]}}},s=n(17),a=Object(s.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.updateList,(function(t){return n("div",{key:t.version},[n("h2",[e._v("Version: "+e._s(t.version))]),e._v(" "),n("p",{staticStyle:{color:"cadetblue"}},[e._v("发布时间: "+e._s(t.time))]),e._v(" "),n("div",{staticStyle:{color:"grey"}},e._l(t.desc,(function(t){return n("ul",[n("li",[e._v(e._s(t))])])})),0)])})),0)}),[],!1,null,null,null);t.default=a.exports}}]);