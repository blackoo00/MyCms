exports.ids=[9],exports.modules={101:function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function _inherits(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),_react=__webpack_require__(2),_react2=_interopRequireDefault(_react),ws=void 0,App=function(_Component){function App(){return _classCallCheck(this,App),_possibleConstructorReturn(this,(App.__proto__||Object.getPrototypeOf(App)).call(this))}return _inherits(App,_Component),_createClass(App,[{key:"componentDidMount",value:function(){var e=io("http://127.0.0.1:2120"),n=123;e.on("connect",function(){e.emit("login",n)}),e.on("new_msg",function(e){console.log("收到消息："+e)}),e.on("update_online_count",function(e){console.log(e)})}},{key:"connect",value:function(){ws=new WebSocket("ws://localhost:2346"),ws.onopen=this.onopen,ws.onmessage=this.onmessage,ws.onclose=function(){console.log("连接关闭，定时重连"),this.connect()},ws.onerror=function(){console.log("出现错误")}}},{key:"onopen",value:function(){name||(name=prompt("输入你的名字：",""),name&&"null"!=name||(name="游客"));var e='{"type":"login","client_name":"'+name.replace(/"/g,'\\"')+'","room_id":"房间1"}';console.log(e),ws.send(e)}},{key:"onmessage",value:function onmessage(e){var data=eval("("+e.data+")");switch(data.type){case"ping":ws.send('{"type":"pong"}');break;case"login":console.log(data),alert(data.data)}}},{key:"render",value:function(){return _react2.default.createElement("div",null,"123")}}]),App}(_react.Component);exports.default=App,module.exports=exports.default}};