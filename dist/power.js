!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Power=t():e.Power=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.isElementAttribute=t.isEvent=t.isFunction=t.isHtml=t.isObject=t.isString=t.isBoolean=t.isNumber=t.isArray=void 0;t.isArray=function(e){return Array.isArray(e)};t.isNumber=function(e){return Number.isNumber(e)};t.isBoolean=function(e){return"boolean"==typeof e};t.isString=function(e){return"string"==typeof e};t.isObject=function(e){return"object"===r(e)};t.isHtml=function(e){return e instanceof Element};t.isFunction=function(e){return"function"==typeof e};t.isEvent=function(e){return(e.startsWith("on")?e:"on".concat(e))in window};t.isElementAttribute=function(e,t){return t in e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createElement=void 0;var r=n(0),o=function(e,t){e.appendChild(document.createTextNode(t))},i=function(e,t){Object.keys(t).forEach(function(n){"style"===n||"styles"===n?function(e,t){e.setAttribute("style",t)}(e,t[n]):(0,r.isEvent)(n)?function(e,t,n){var r=t.startsWith("on")?t.substring(2,t.length):t;e.addEventListener(r,function(t){n(t,e)})}(e,n,t[n]):(0,r.isElementAttribute)(e,n)&&e.setAttribute(n,t[n])})};t.createElement=function(e){for(var t=document.createElement(e),n=arguments.length,u=new Array(n>1?n-1:0),c=1;c<n;c++)u[c-1]=arguments[c];return u.forEach(function(e){(0,r.isArray)(e)?function e(t,n){n.forEach(function(n){(0,r.isArray)(n)?e(t,n):(0,r.isHtml)(n)?t.appendChild(n):(0,r.isString)(n)?o(t,n):(0,r.isObject)(n)&&i(t,n)})}(t,e):(0,r.isHtml)(e)?t.appendChild(e):(0,r.isString)(e)?o(t,e):(0,r.isObject)(e)&&i(t,e)}),t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.removeChilds=void 0;t.removeChilds=function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;var r=n(0),o=n(2);function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=this.constructor.name,this.beforeComponentMount&&this.beforeComponentMount(this),t&&(this.data=t),this.create()}var t,n,u;return t=e,(n=[{key:"create",value:function(){var e=this;this.node=document.createElement(this.name),this.node.style.display="block";var t=this.render();return(0,r.isArray)(t)?t.forEach(function(t){null!==t&&e.node.appendChild(t)}):this.node.appendChild(t),this.afterComponentMount&&this.afterComponentMount(this),this.node}},{key:"setState",value:function(e){var t=this;(0,r.isFunction)(e)&&e();var n=this.render();(0,o.removeChilds)(this.node),(0,r.isArray)(n)?n.forEach(function(e){null!==e&&t.node.appendChild(e)}):this.node.appendChild()}}])&&i(t.prototype,n),u&&i(t,u),e}();t.Component=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.render=void 0;var r=n(0);n(1);t.render=function(e,t){((0,r.isHtml)(t)||null!==e)&&((0,r.isArray)(e)?e.forEach(function(e){null!==e&&t.appendChild(e)}):t.appendChild(e))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"createElement",{enumerable:!0,get:function(){return r.createElement}}),Object.defineProperty(t,"h",{enumerable:!0,get:function(){return r.createElement}}),Object.defineProperty(t,"render",{enumerable:!0,get:function(){return o.render}}),Object.defineProperty(t,"Component",{enumerable:!0,get:function(){return i.Component}}),t.version=void 0;var r=n(1),o=n(4),i=n(3);t.version="1.0.0-alpha"}])});