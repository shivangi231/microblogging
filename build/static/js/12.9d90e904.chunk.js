webpackJsonp([12],{198:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(891);t.default=o.a},411:function(e,t,n){"use strict";var o=n(412);t.a=o.a},412:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),c=n.n(i),s=n(1),l=n.n(s),p=n(11),u=n(17),f=n(413),h=n.n(f),d=n(414),g=(n.n(d),function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}()),m=function(e){function t(){var e,n,r,i;o(this,t);for(var c=arguments.length,s=Array(c),l=0;l<c;l++)s[l]=arguments[l];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.handlerBckBtnNavigation=function(){r.props.location.pathname&&"/track"===r.props.location.pathname?r.props.history.push("/home"):r.props.history.goBack()},i=n,a(r,i)}return r(t,e),g(t,[{key:"render",value:function(){var e=this.props.headerContent.showBckBtn,t=this.props.headerContent.showHeaderIcon;return c.a.createElement("div",{className:"heading-component col-xs-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xs-2 text-left"},e?c.a.createElement("div",{className:"bck-btn",onClick:this.handlerBckBtnNavigation},c.a.createElement("img",{src:h.a,alt:"bckbtn"})):""),this.props.headerContent.headerTitle?c.a.createElement("div",{className:"col-xs-8 header-txt boldFontStyle"},c.a.createElement("span",{dangerouslySetInnerHTML:{__html:this.props.headerContent.headerTitle}})):"",c.a.createElement("div",{className:"col-xs-2 side-bar-icon"},t?c.a.createElement("img",{src:t,alt:"icon",onClick:this.props.headerContent.iconActionHandler}):"")))}}]),t}(i.Component);m.propTypes={headerContent:l.a.object,history:l.a.object.isRequired,iconActionHandler:l.a.func},t.a=Object(u.e)(Object(p.connect)(null,null)(m))},413:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAARCAYAAAAPFIbmAAAAAXNSR0IArs4c6QAAAMxJREFUKBVjYMAB/v//3wTEmTikGRiAksFADAMFzOgqgTImQLGtQMwClbuBogaoQAaIX8OMANLrgZgRrgjI4Qbia0AMA8eBDDZkBUxAgV0wWSB9B4gF4QpADKDARCQFL4BseXQFdUgKvgDZuigKgBwmIJZBE/yDxgdbxQrUfQTJtMdAtgg2hYJAiXtICk8D2ezYFKoBJT4iKVyDoQgkAFTgCMR/kBS24FKYgqQIxIzCpXASksJ1uBSBYmAHEG8AYlhEY6oFSoLiEhSODAC5SgdymyBxcgAAAABJRU5ErkJggg=="},414:function(e,t,n){var o=n(415);"string"===typeof o&&(o=[[e.i,o,""]]);var a={hmr:!0};a.transform=void 0;n(32)(o,a);o.locals&&(e.exports=o.locals)},415:function(e,t,n){t=e.exports=n(31)(void 0),t.push([e.i,".heading-component {\n  position: fixed;\n  width: 100%;\n  height: 55px;\n  padding: 10px;\n  z-index: 1000;\n  background: #004aa3;\n  z-index: 99; }\n  .heading-component .side-bar-icon {\n    text-align: right;\n    max-height: 35px; }\n    .heading-component .side-bar-icon img {\n      height: 100%;\n      width: auto;\n      padding: 5px; }\n  .heading-component div {\n    height: 100%;\n    vertical-align: middle; }\n  .heading-component .header-txt {\n    text-align: center;\n    padding: 5px 0;\n    color: white;\n    font-size: 16px; }\n    .heading-component .header-txt .smallFont {\n      font-size: 12px !important; }\n  .heading-component .bck-btn {\n    cursor: pointer;\n    height: 15px;\n    margin: 5px 0; }\n    .heading-component .bck-btn img {\n      height: 100%;\n      width: auto; }\n  .heading-component .fa-bell, .heading-component .fa-arrow-left {\n    padding: 10px 0; }\n",""])},891:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),c=n.n(i),s=n(411),l=n(892),p=(n.n(l),function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}()),u=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={headerContent:{showBckBtn:!0,headerTitle:"Page not found"}},n}return r(t,e),p(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"row fullHeight"},c.a.createElement("div",{className:"col-xs-12 fullHeight page-not-found"},c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"title"},"Oops!"),c.a.createElement("div",null,"Please try again"))),c.a.createElement(s.a,Object.assign({},this.props,{headerContent:this.state.headerContent})))}}]),t}(c.a.Component);t.a=u},892:function(e,t,n){var o=n(893);"string"===typeof o&&(o=[[e.i,o,""]]);var a={hmr:!0};a.transform=void 0;n(32)(o,a);o.locals&&(e.exports=o.locals)},893:function(e,t,n){t=e.exports=n(31)(void 0),t.push([e.i,".page-not-found {\n  position: relative; }\n  .page-not-found .content {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n    -ms-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n    color: gray;\n    font-size: 30px;\n    text-align: center;\n    text-transform: capitalize; }\n    .page-not-found .content .title {\n      font-size: 50px !important; }\n",""])}});