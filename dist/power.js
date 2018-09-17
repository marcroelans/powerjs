// [AIV_SHORT]  Build version: 2.0.0-alpha.8 - Monday, September 17th, 2018, 8:18:42 PM  
 !function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Power=t():n.Power=t()}(window,function(){return function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=0)}([function(n,t,e){"use strict";e.r(t);var r={},o={};["Array","Boolean","Date","Error","Function","Null","Number","Object","RegExp","String","Undefined"].forEach(function(n){var t=n.toLowerCase();r["[object ".concat(n,"]")]=t,o["is".concat(n)]=function(n){return function(n){return null===n?String(n):r[{}.toString.call(n)]||"object"}(n)===t}});var i=o.isArray,u=(o.isBoolean,o.isError,o.isFunction),a=(o.isNull,o.isNumber,o.isObject),c=(o.isRegExp,o.isString),f=(o.isUndefined,function(n){return n instanceof Element}),l=function(n,t){n.appendChild(document.createTextNode(t))},s=function(n,t){Object.keys(t).forEach(function(e){"style"===e||"styles"===e?function(n,t){n.setAttribute("style",t)}(n,t[e]):function(n){return(n.startsWith("on")?n:"on".concat(n))in window}(e)?function(n,t,e){var r=t.startsWith("on")?t.substring(2,t.length):t;n.addEventListener(r,function(t){e(t,n)})}(n,e,t[e]):function(n,t){return t in n||"class"===t||t.startsWith("data-",0)}(n,e)&&n.setAttribute(e,t[e])})},d=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,e=document.createElement(n);a(t)&&null!==t&&s(e,t);for(var r=arguments.length,o=new Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];return o.forEach(function(n){c(n)?l(e,n):f(n)&&e.appendChild(n)}),e},h={},p=function(){};["log","debug","info","warn","error"].forEach(function(n){h[n]=window.console?window.console[n]:p});var v=h,b=function(n,t){var e=n.IS_POWER_COMPONENT?n.create():n;e?f(e)?(i(e)?e.forEach(function(n){f(n)&&t.appendChild(n)}):t.appendChild(e),n.IS_POWER_COMPONENT&&n.afterComponentMount&&n.afterComponentMount(n)):v.error("There is no valid root given"):v.error("There is no valid model given")},m=function(n){return Object.assign({},n)},y=function(n,t){Object.keys(t).forEach(function(e){Object.defineProperty(t,e,{set:function(t){this["_".concat(e)]=t,n.noUpdate||n.update()},get:function(){return this["_".concat(e)]}})})},g=function(n,t,e){Object.keys(e).forEach(function(n){t[n]=e[n]})};function C(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var E=function(){function n(t){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.noUpdate=!0,this.name=this.constructor.name,this.beforeComponentMount&&this.beforeComponentMount(this),t&&(this.data=m(t),y(this,this.data),g(this,this.data,t),this.noUpdate=!1),this.IS_POWER_COMPONENT=!0}return function(n,t,e){t&&C(n.prototype,t),e&&C(n,e)}(n,[{key:"create",value:function(){var n=this;this.node=document.createElement(this.name),this.node.style.display="block",this.node.setAttribute("data-power-component",!0);var t=this.render();return i(t)?t.forEach(function(t){null!==t&&n.node.appendChild(t)}):this.node.appendChild(t),this.node}},{key:"setState",value:function(n){u(n)&&n(),this.update()}},{key:"update",value:function(){var n=this,t=this.render();!function(n){for(;n.firstChild;)n.removeChild(n.firstChild)}(this.node),i(t)?t.forEach(function(t){null!==t&&n.node.appendChild(t)}):this.node.appendChild(t)}},{key:"destroy",value:function(){this.node.parentElement.removeChild(this.node)}}]),n}(),O=function(n){return function(n){return"["===n[0]&&"]"===n[n.length-1]}(n)?function(n){var t=n.substring(1,n.length-1);return""===t.trim()?[]:t.split(",")}(n):function(n){var t=n.length.length,e=n.indexOf("|"),r="";if(e>-1){var o=n.substring(e+1,t);return r=n.substring(0,e),"number"===o.trim()?parseFloat(r):r}return n}(n)},w=function(n){if(n){var t=n.name,e=[].slice.call(document.querySelectorAll(t));0!==e.length&&e.forEach(function(t){t.getAttribute("data-power-component")||function(n,t){var e=n.attributes,r={},o=!0,i=!1,u=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done);o=!0){var f=a.value;r[f.name]=O(f.value)}}catch(n){i=!0,u=n}finally{try{o||null==c.return||c.return()}finally{if(i)throw u}}var l=new t(r);l.afterComponentMount&&l.afterComponentMount(l),n.parentNode.replaceChild(l.create(),n)}(t,n)})}else v.error("Cannot register Component")};e.d(t,"version",function(){return j}),e.d(t,"createElement",function(){return d}),e.d(t,"h",function(){return d}),e.d(t,"render",function(){return b}),e.d(t,"Component",function(){return E}),e.d(t,"registerComponent",function(){return w});var j="2.0.0-alpha.8"}])}); 