exports.ids=[7],exports.modules={6:function(e,t){e.exports=require("react-bootstrap")},9:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Model=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(16),c="http://z.cn/api/cms/",f={url:"",data:{},type:"get",server:c},s=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),i(t,[{key:"ajaxData",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,n=arguments[1];return t=a({},f,t),new Promise(function(r){e.newAjax({url:t.server+t.url,data:t.data,type:t.type},n).then(function(e){r(e)})})}}]),t}(l.Utils);t.Model=s},128:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.init=void 0;var o=n(61),u=r(o),a=n(131),i=r(a),l=function(e){return{type:u.default.MEMBER_INIT,data:e}};t.init=function(){return function(e){i.default.getUserList().then(function(t){e(l(t))})}}},129:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),u=r(o),a=n(171),i=r(a),l=n(6),c=function(e){var t=e.list,n=void 0===t?[]:t;return u.default.createElement("section",{className:i.default.sectionMain},u.default.createElement(l.Table,{responsive:!0},u.default.createElement("thead",null,u.default.createElement("tr",null,u.default.createElement("th",null,"#"),u.default.createElement("th",null,"会员"),u.default.createElement("th",null,"头像"))),u.default.createElement("tbody",null,n.map(function(e){return u.default.createElement("tr",{key:"member_id"+e.id},u.default.createElement("td",null,e.id),u.default.createElement("td",null,e.nickname),u.default.createElement("td",null,u.default.createElement("img",{style:{width:"100px"},src:e.avatarUrl})))}))))};t.default=c,e.exports=t.default},130:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(2),f=o(c),s=n(129),p=o(s),d=n(170),y=o(d),b=n(15),v=n(128),_=r(v),m=function(e){function t(){return u(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return i(t,e),l(t,[{key:"componentWillMount",value:function(){var e=this.props.init;"undefined"!=typeof window&&e()}},{key:"render",value:function(){var e=this.props.list;return f.default.createElement("div",{className:y.default.app},f.default.createElement(p.default,{list:e}))}}]),t}(c.Component),h=function(e){return{list:e.member.list}},j=function(e){return{init:function(){e(_.init())}}};t.default=(0,b.connect)(h,j)(m),e.exports=t.default},131:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9),o=new r.Model;t.default={getUserList:function(){var e={url:"user/list"};return new Promise(function(t){o.ajaxData(e).then(function(e){t(e)})})}},e.exports=t.default},170:function(e,t){e.exports={app:"_3n8nji67"}},171:function(e,t){e.exports={"section-main":"_1KNCjEax",sectionMain:"_1KNCjEax",btn:"TPdQz_ui",info:"eSH4-dXt"}}};