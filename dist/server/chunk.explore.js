exports.ids=[8],exports.modules={114:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(2),l=r(c),f=n(167),s=r(f),p=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return i(t,e),u(t,[{key:"handleFetch",value:function(){var e=this.props.actions;e.fetchUserInfo()}},{key:"handleClear",value:function(){var e=this.props.actions;e.clearUserInfo()}},{key:"render",value:function(){var e=this.props.userInfo;return l.default.createElement("section",{className:s.default.sectionMain},"Explore",l.default.createElement("a",{href:"javascript:void(0)",className:s.default.btn,onClick:this.handleFetch.bind(this)},"Fetch Data"),l.default.createElement("a",{href:"javascript:void(0)",className:s.default.btn,onClick:this.handleClear.bind(this)},"Clear"),l.default.createElement("br",null),l.default.createElement("span",{className:s.default.info},e&&JSON.stringify(e)))}}]),t}(c.Component);t.default=p,e.exports=t.default},115:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(2),l=r(c),f=n(114),s=r(f),p=n(166),d=r(p),b=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return i(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.userInfo,n=e.actions;return l.default.createElement("div",{className:d.default.app},l.default.createElement(s.default,{userInfo:t,actions:n}))}}]),t}(c.Component);t.default=b,e.exports=t.default},166:function(e,t){e.exports={app:"_2oZi_coS"}},167:function(e,t){e.exports={"section-main":"_1AW0Drnv",sectionMain:"_1AW0Drnv",btn:"_3zBsNBIJ",info:"_1737jvdx"}}};