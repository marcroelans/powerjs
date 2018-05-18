(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Power"] = factory();
	else
		root["Power"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/component/component.js":
/*!************************************!*\
  !*** ./src/component/component.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Component = void 0;\n\nvar _is = __webpack_require__(/*! ../utils/is.js */ \"./src/utils/is.js\");\n\nvar _dom = __webpack_require__(/*! ../utils/dom.js */ \"./src/utils/dom.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\r\n  * Power Component\r\n  *\r\n  * @class Component\r\n  */\nvar Component =\n/*#__PURE__*/\nfunction () {\n  function Component(data) {\n    _classCallCheck(this, Component);\n\n    this.name = this.constructor.name; // Getting called before constructor\n\n    if (this.beforeComponentMount) {\n      this.beforeComponentMount(this);\n    } // data\n\n\n    if (data) {\n      this.data = data;\n    }\n\n    return this.create();\n  }\n\n  _createClass(Component, [{\n    key: \"create\",\n    value: function create() {\n      var _this = this;\n\n      // creating the component root element\n      this.node = document.createElement(this.name);\n      this.node.style.display = 'block'; // render\n\n      var template = this.render();\n\n      if ((0, _is.isArray)(template)) {\n        template.forEach(function (item) {\n          if (item !== null) {\n            _this.node.appendChild(item);\n          }\n        });\n      } else {\n        this.node.appendChild(template);\n      } // Getting called after constructed\n\n\n      if (this.afterComponentMount) {\n        this.afterComponentMount(this);\n      }\n\n      return this.node;\n    }\n  }, {\n    key: \"setState\",\n    value: function setState(stateHandler) {\n      var _this2 = this;\n\n      if ((0, _is.isFunction)(stateHandler)) {\n        stateHandler();\n      }\n\n      var template = this.render(); // clearing the component\n\n      (0, _dom.removeChilds)(this.node); // rerender\n\n      if ((0, _is.isArray)(template)) {\n        template.forEach(function (item) {\n          if (item !== null) {\n            _this2.node.appendChild(item);\n          }\n        });\n      } else {\n        this.node.appendChild();\n      }\n    }\n  }]);\n\n  return Component;\n}();\n\nexports.Component = Component;\n;\n\n//# sourceURL=webpack://Power/./src/component/component.js?");

/***/ }),

/***/ "./src/createElement/createElement.js":
/*!********************************************!*\
  !*** ./src/createElement/createElement.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.createElement = void 0;\n\nvar _is = __webpack_require__(/*! ../utils/is.js */ \"./src/utils/is.js\");\n\n/**\r\n  * append Element string\r\n  *\r\n  * @param {HTMLElement} element\r\n  * @param {String} text\r\n  */\nvar appendElementText = function appendElementText(element, text) {\n  element.appendChild(document.createTextNode(text));\n};\n/**\r\n  * append Element Styles\r\n  *\r\n  * @param {HTMLElement} element\r\n  * @param {String} styles\r\n  */\n\n\nvar appendElementStyles = function appendElementStyles(element, styles) {\n  element.setAttribute('style', styles);\n};\n/**\r\n  * append Element Event\r\n  *\r\n  * @param {HTMLElement} element\r\n  * @param {Event} event\r\n  * @param {*} handler\r\n  */\n\n\nvar appendElementEvent = function appendElementEvent(element, event, handler) {\n  var _event = event.startsWith('on') ? event.substring(2, event.length) : event;\n\n  element.addEventListener(_event, function (e) {\n    // pass the event and element into the funtion\n    handler(e, element);\n  });\n};\n/**\r\n  * append Element Object\r\n  *\r\n  * @param {HTMLElement} element\r\n  * @param {Object} elementProps\r\n  */\n\n\nvar appendElementObject = function appendElementObject(element, elementProps) {\n  Object.keys(elementProps).forEach(function (prop) {\n    if (prop === 'style' || prop === 'styles') {\n      appendElementStyles(element, elementProps[prop]);\n    } else if ((0, _is.isEvent)(prop)) {\n      appendElementEvent(element, prop, elementProps[prop]);\n    } else if ((0, _is.isElementAttribute)(element, prop)) {\n      element.setAttribute(prop, elementProps[prop]);\n    }\n  });\n};\n/**\r\n  * append Element Array\r\n  *\r\n  * @param {HTMLElement} element\r\n  * @param {*} childrens\r\n  */\n\n\nvar appendElementArray = function appendElementArray(element, childrens) {\n  childrens.forEach(function (child) {\n    if ((0, _is.isArray)(child)) {\n      appendElementArray(element, child);\n    } else if ((0, _is.isHtml)(child)) {\n      element.appendChild(child);\n    } else if ((0, _is.isString)(child)) {\n      appendElementText(element, child);\n    } else if ((0, _is.isObject)(child)) {\n      appendElementObject(element, child);\n    }\n  });\n};\n/**\r\n  * create Element\r\n  *\r\n  * @param {String} tag\r\n  * @param {*} args\r\n  * @returns {HTMLElement}\r\n  */\n\n\nvar createElement = function createElement(tag) {\n  var element = document.createElement(tag);\n\n  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    args[_key - 1] = arguments[_key];\n  }\n\n  args.forEach(function (arg) {\n    if ((0, _is.isArray)(arg)) {\n      appendElementArray(element, arg);\n    } else if ((0, _is.isHtml)(arg)) {\n      element.appendChild(arg);\n    } else if ((0, _is.isString)(arg)) {\n      appendElementText(element, arg);\n    } else if ((0, _is.isObject)(arg)) {\n      appendElementObject(element, arg);\n    }\n  });\n  return element;\n};\n\nexports.createElement = createElement;\n\n//# sourceURL=webpack://Power/./src/createElement/createElement.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nObject.defineProperty(exports, \"createElement\", {\n  enumerable: true,\n  get: function get() {\n    return _createElement.createElement;\n  }\n});\nObject.defineProperty(exports, \"h\", {\n  enumerable: true,\n  get: function get() {\n    return _createElement.createElement;\n  }\n});\nObject.defineProperty(exports, \"render\", {\n  enumerable: true,\n  get: function get() {\n    return _render.render;\n  }\n});\nObject.defineProperty(exports, \"Component\", {\n  enumerable: true,\n  get: function get() {\n    return _component.Component;\n  }\n});\nexports.version = void 0;\n\nvar _createElement = __webpack_require__(/*! ./createElement/createElement.js */ \"./src/createElement/createElement.js\");\n\nvar _render = __webpack_require__(/*! ./render/render.js */ \"./src/render/render.js\");\n\nvar _component = __webpack_require__(/*! ./component/component.js */ \"./src/component/component.js\");\n\nvar version = '1.0.0-alpha';\nexports.version = version;\n\n//# sourceURL=webpack://Power/./src/index.js?");

/***/ }),

/***/ "./src/render/render.js":
/*!******************************!*\
  !*** ./src/render/render.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.render = void 0;\n\nvar _is = __webpack_require__(/*! ../utils/is.js */ \"./src/utils/is.js\");\n\nvar _createElement = __webpack_require__(/*! ../createElement/createElement.js */ \"./src/createElement/createElement.js\");\n\n/**\r\n  * render  a an element or component\r\n  *\r\n  * @param {Object|Function} model // TODO: Better name?\r\n  * @param {DOM Element} root\r\n  */\nvar render = function render(model, root) {\n  // root is no element in window\n  if (!(0, _is.isHtml)(root) && model === null) {\n    return;\n  }\n\n  if ((0, _is.isArray)(model)) {\n    model.forEach(function (item) {\n      if (item !== null) {\n        root.appendChild(item);\n      }\n    });\n  } else {\n    root.appendChild(model);\n  }\n};\n\nexports.render = render;\n\n//# sourceURL=webpack://Power/./src/render/render.js?");

/***/ }),

/***/ "./src/utils/dom.js":
/*!**************************!*\
  !*** ./src/utils/dom.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.removeChilds = void 0;\n\n/**\r\n  * remove all child nodes\r\n  *\r\n  * @param {Node} node\r\n  */\nvar removeChilds = function removeChilds(node) {\n  while (node.firstChild) {\n    node.removeChild(node.firstChild);\n  }\n};\n\nexports.removeChilds = removeChilds;\n\n//# sourceURL=webpack://Power/./src/utils/dom.js?");

/***/ }),

/***/ "./src/utils/is.js":
/*!*************************!*\
  !*** ./src/utils/is.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.isElementAttribute = exports.isEvent = exports.isFunction = exports.isHtml = exports.isObject = exports.isString = exports.isBoolean = exports.isNumber = exports.isArray = void 0;\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/**\r\n  * validate an Array\r\n  *\r\n  * @param {*} expectedArray\r\n  * @returns {Boolean}\r\n  */\nvar isArray = function isArray(expectedArray) {\n  return Array.isArray(expectedArray);\n};\n/**\r\n  * validate a Number\r\n  *\r\n  * @param {*} expectedNumber\r\n  * @returns {Boolean}\r\n  */\n\n\nexports.isArray = isArray;\n\nvar isNumber = function isNumber(expectedNumber) {\n  return Number.isNumber(expectedNumber);\n};\n/**\r\n  * validate a Boolean\r\n  *\r\n  * @param {*} expectedBoolean\r\n  * @returns {Boolean}\r\n  */\n\n\nexports.isNumber = isNumber;\n\nvar isBoolean = function isBoolean(expectedBoolean) {\n  return typeof expectedBoolean === 'boolean';\n};\n/**\r\n  * validate a String\r\n  *\r\n  * @param {*} expectedString\r\n  * @returns {Boolean}\r\n  */\n\n\nexports.isBoolean = isBoolean;\n\nvar isString = function isString(expectedString) {\n  return typeof expectedString === 'string';\n};\n/**\r\n  * validate an object\r\n  *\r\n  * @param {*} expectedObject\r\n  * @returns {Boolean}\r\n  */\n\n\nexports.isString = isString;\n\nvar isObject = function isObject(expectedObject) {\n  return _typeof(expectedObject) === 'object';\n};\n/**\r\n  * validate HTML Element\r\n  *\r\n  * @param {*} expectedHtml\r\n  * @returns {Boolean}\r\n  */\n\n\nexports.isObject = isObject;\n\nvar isHtml = function isHtml(expectedHtml) {\n  return expectedHtml instanceof Element;\n};\n/**\r\n  * validate function\r\n  *\r\n  * @param {*} expectedFunction\r\n  * @returns {Boolean}\r\n  */\n\n\nexports.isHtml = isHtml;\n\nvar isFunction = function isFunction(expectedFunction) {\n  return typeof expectedFunction === 'function';\n};\n/**\r\n  * validate event\r\n  *\r\n  * @param {*} expectedEvent\r\n  * @returns {Boolean}\r\n  */\n\n\nexports.isFunction = isFunction;\n\nvar isEvent = function isEvent(expectedEvent) {\n  return (expectedEvent.startsWith('on') ? expectedEvent : \"on\".concat(expectedEvent)) in window;\n};\n/**\r\n  * validate Element Attribte\r\n  *\r\n  * @param {HTMLElement} element\r\n  * @param {String} attribute\r\n  */\n\n\nexports.isEvent = isEvent;\n\nvar isElementAttribute = function isElementAttribute(element, attribute) {\n  return attribute in element;\n};\n\nexports.isElementAttribute = isElementAttribute;\n\n//# sourceURL=webpack://Power/./src/utils/is.js?");

/***/ })

/******/ });
});