webpackJsonp([8,9],{615:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(63),a=u(o),l=n(2),r=u(l),f=n(53),d=u(f),c=n(4),i=u(c),s=n(3),p=u(s),_=n(1),m=u(_),v=function(e){function t(){return(0,r.default)(this,t),(0,i.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,d.default)(t,[{key:"componentDidMount",value:function(){var e=new WebSocket("ws://localhost:2346");e.onopen=function(){alert("连接成功"),e.send("tom"),alert("给服务端发送一个字符串：tom")},e.onmessage=function(e){alert("收到服务端的消息:"+e.data)}}},{key:"render",value:function(){return m.default.createElement("div",null,"123")}}]),t}(_.Component);t.default=v,e.exports=t.default}});