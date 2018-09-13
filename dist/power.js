// [AIV_SHORT]  Build version: 2.0.0-alpha.5 - Thursday, September 13th, 2018, 8:39:00 AM  
 !function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.Power=n():t.Power=n()}(window,function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e.r(n);var o=function(t){return Array.isArray(t)},i=function(t){return"string"==typeof t},u=function(t){return"object"===r(t)&&!function(t){return null===t}(t)&&!o(t)},a=function(t){return t instanceof Element},c=function(t,n){t.appendChild(document.createTextNode(n))},f=function(t,n){Object.keys(n).forEach(function(e){"style"===e||"styles"===e?function(t,n){t.setAttribute("style",n)}(t,n[e]):function(t){return(t.startsWith("on")?t:"on".concat(t))in window}(e)?function(t,n,e){var r=n.startsWith("on")?n.substring(2,n.length):n;t.addEventListener(r,function(n){e(n,t)})}(t,e,n[e]):function(t,n){return n in t||"class"===n||n.startsWith("data-",0)}(t,e)&&t.setAttribute(e,n[e])})},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,e=document.createElement(t);u(n)&&null!==n&&f(e,n);for(var r=arguments.length,o=new Array(r>2?r-2:0),l=2;l<r;l++)o[l-2]=arguments[l];return o.forEach(function(t){i(t)?c(e,t):a(t)&&e.appendChild(t)}),e},s=function(t,n){if(window.console)switch(n){case"log":console.log(t);break;case"warn":console.warn(t);break;case"error":console.error(t);break;default:console.log(t)}},d=function(t,n){var e=t.IS_POWER_COMPONENT?t.create():t;e?a(e)?(o(e)?e.forEach(function(t){a(t)&&n.appendChild(t)}):n.appendChild(e),t.IS_POWER_COMPONENT&&t.afterComponentMount&&t.afterComponentMount(t)):s("There is no valid root given","error"):s("There is no valid model given","error")},p=function(t){return Object.assign({},t)},h=function(t,n){Object.keys(n).forEach(function(e){Object.defineProperty(n,e,{set:function(n){this["_".concat(e)]=n,t.noUpdate||t.update()},get:function(){return this["_".concat(e)]}})})},y=function(t,n,e){Object.keys(e).forEach(function(t){n[t]=e[t]})};function b(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var m=function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.noUpdate=!0,this.name=this.constructor.name,this.beforeComponentMount&&this.beforeComponentMount(this),n&&(this.data=p(n),h(this,this.data),y(this,this.data,n),this.noUpdate=!1),this.IS_POWER_COMPONENT=!0}return function(t,n,e){n&&b(t.prototype,n),e&&b(t,e)}(t,[{key:"create",value:function(){var t=this;this.node=document.createElement(this.name),this.node.style.display="block",this.node.setAttribute("data-power-component",!0);var n=this.render();return o(n)?n.forEach(function(n){null!==n&&t.node.appendChild(n)}):this.node.appendChild(n),this.node}},{key:"setState",value:function(t){(function(t){return"function"==typeof t})(t)&&t(),this.update()}},{key:"update",value:function(){var t=this,n=this.render();!function(t){for(;t.firstChild;)t.removeChild(t.firstChild)}(this.node),o(n)?n.forEach(function(n){null!==n&&t.node.appendChild(n)}):this.node.appendChild(n)}},{key:"destroy",value:function(){this.node.parentElement.removeChild(this.node)}}]),t}(),v=function(t){return function(t){return"["===t[0]&&"]"===t[t.length-1]}(t)?function(t){var n=t.substring(1,t.length-1);return""===n.trim()?[]:n.split(",")}(t):function(t){var n=t.length.length,e=t.indexOf("|"),r="";if(e>-1){var o=t.substring(e+1,n);return r=t.substring(0,e),"number"===o.trim()?parseFloat(r):r}return t}(t)},g=function(t){if(t){var n=t.name,e=[].slice.call(document.querySelectorAll(n));0!==e.length&&e.forEach(function(n){n.getAttribute("data-power-component")||function(t,n){var e=t.attributes,r={},o=!0,i=!1,u=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done);o=!0){var f=a.value;r[f.name]=v(f.value)}}catch(t){i=!0,u=t}finally{try{o||null==c.return||c.return()}finally{if(i)throw u}}var l=new n(r);l.afterComponentMount&&l.afterComponentMount(l),t.parentNode.replaceChild(l.create(),t)}(n,t)})}else s("Cannot register Component","error")};e.d(n,"version",function(){return C}),e.d(n,"createElement",function(){return l}),e.d(n,"h",function(){return l}),e.d(n,"render",function(){return d}),e.d(n,"Component",function(){return m}),e.d(n,"registerComponent",function(){return g});var C="2.0.0-alpha.5"}])}); 