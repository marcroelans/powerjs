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

/***/ "./src/core/component/component.js":
/*!*****************************************!*\
  !*** ./src/core/component/component.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Component = void 0;\n\nvar _is = __webpack_require__(/*! ../../utils/is */ \"./src/utils/is.js\");\n\nvar _dom = __webpack_require__(/*! ../../utils/dom */ \"./src/utils/dom.js\");\n\nvar _constants = __webpack_require__(/*! ../constants */ \"./src/core/constants.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\r\n  * Power Component\r\n  *\r\n  * @class Component\r\n  */\nvar Component =\n/*#__PURE__*/\nfunction () {\n  function Component(data) {\n    _classCallCheck(this, Component);\n\n    // the component gets the name of the class name\n    this.name = this.constructor.name; // Getting called before constructor\n\n    if (this.beforeComponentMount) {\n      this.beforeComponentMount(this);\n    } // check if there is any data\n\n\n    if (data) {\n      this.data = data;\n    }\n  }\n\n  _createClass(Component, [{\n    key: \"create\",\n    value: function create() {\n      var _this = this;\n\n      // creating the component root element\n      this.node = document.createElement(this.name); // setting this element display to block by default\n\n      this.node.style.display = 'block';\n      this.node.setAttribute(_constants.DATA_COMPONENT_ATTRIBUTE, true); // get the template by call the render\n\n      var template = this.render();\n\n      if ((0, _is.isArray)(template)) {\n        template.forEach(function (item) {\n          if (item !== null) {\n            _this.node.appendChild(item);\n          }\n        });\n      } else {\n        this.node.appendChild(template);\n      } // Getting called after constructed\n\n\n      if (this.afterComponentMount) {\n        this.afterComponentMount(this);\n      }\n\n      return this.node;\n    }\n  }, {\n    key: \"setState\",\n    value: function setState(stateHandler) {\n      if ((0, _is.isFunction)(stateHandler)) {\n        stateHandler();\n      } // update the component\n\n\n      this.update();\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      var _this2 = this;\n\n      var template = this.render(); // clear the view\n\n      (0, _dom.removeChilds)(this.node); // rerender\n\n      if ((0, _is.isArray)(template)) {\n        template.forEach(function (item) {\n          if (item !== null) {\n            _this2.node.appendChild(item);\n          }\n        });\n      } else {\n        this.node.appendChild();\n      }\n    }\n  }]);\n\n  return Component;\n}();\n\nexports.Component = Component;\n\n//# sourceURL=webpack://Power/./src/core/component/component.js?");

/***/ }),

/***/ "./src/core/component/registerComponent.js":
/*!*************************************************!*\
  !*** ./src/core/component/registerComponent.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.registerComponent = void 0;\n\nvar _log = __webpack_require__(/*! ../../utils/log */ \"./src/utils/log.js\");\n\nvar _constants = __webpack_require__(/*! ../constants */ \"./src/core/constants.js\");\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./src/core/component/utils.js\");\n\n/**\r\n  * This file provides the service to register Components in DOM\r\n  */\n\n/**\r\n  * create a component in the dom\r\n  *\r\n  * @param {DOM} component\r\n  * @param {CLass} _class\r\n  */\nvar createDomComponent = function createDomComponent(component, _class) {\n  // get the attributes from the dom element\n  var componentAttributes = component.attributes; // create an empty data object\n\n  var dataObject = {}; // loop over the componentAttributes\n\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = componentAttributes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var prop = _step.value;\n      dataObject[prop.name] = (0, _utils.isStringArray)(prop.value) ? (0, _utils.convertStringArray)(prop.value) : prop.value;\n    } // create a class instance\n\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator.return != null) {\n        _iterator.return();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n\n  var PowerClass = new _class(dataObject); // replace node\n\n  component.parentNode.replaceChild(PowerClass.create(), component);\n};\n\nvar registerComponent = function registerComponent(_class) {\n  // if there is no _class\n  if (!_class) {\n    // TODO: Better class validation\n    (0, _log.log)('Cannot register Component', 'error');\n    return;\n  }\n\n  var componentName = _class.name; // get every component in dom\n\n  var componentsContainer = [].slice.call(document.querySelectorAll(componentName));\n\n  if (componentsContainer.length === 0) {\n    return;\n  }\n\n  componentsContainer.forEach(function (component) {\n    if (!component.getAttribute(_constants.DATA_COMPONENT_ATTRIBUTE)) {\n      createDomComponent(component, _class);\n    }\n  });\n};\n\nexports.registerComponent = registerComponent;\n\n//# sourceURL=webpack://Power/./src/core/component/registerComponent.js?");

/***/ }),

/***/ "./src/core/component/utils.js":
/*!*************************************!*\
  !*** ./src/core/component/utils.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.convertStringArray = exports.isStringArray = void 0;\n\n/**\r\n  * This file provides component utils\r\n  */\n\n/**\r\n  * function that detects an array in a string\r\n  *\r\n  * @param {String} chars\r\n  * @returns {Boolean}\r\n  */\nvar isStringArray = function isStringArray(chars) {\n  return chars[0] === '[' && chars[chars.length - 1] === ']';\n};\n/**\r\n  * Converts a string to an array\r\n  *\r\n  * @param {String} chars\r\n  * @returns {Array}\r\n  */\n\n\nexports.isStringArray = isStringArray;\n\nvar convertStringArray = function convertStringArray(chars) {\n  // remove first and last letter\n  var stringArray = chars.substring(1, chars.length - 1); // split into chunks\n\n  return stringArray.trim() === '' ? [] : stringArray.split(',');\n};\n\nexports.convertStringArray = convertStringArray;\n\n//# sourceURL=webpack://Power/./src/core/component/utils.js?");

/***/ }),

/***/ "./src/core/constants.js":
/*!*******************************!*\
  !*** ./src/core/constants.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.DATA_COMPONENT_ATTRIBUTE = void 0;\n\n/**\r\n  * This file provides the constants of power\r\n  */\n\n/**\r\n  * Data power attribute\r\n  *\r\n  * @type {String}\r\n  */\nvar DATA_COMPONENT_ATTRIBUTE = 'data-power-component';\nexports.DATA_COMPONENT_ATTRIBUTE = DATA_COMPONENT_ATTRIBUTE;\n\n//# sourceURL=webpack://Power/./src/core/constants.js?");

/***/ }),

/***/ "./src/core/createElement/createElement.js":
/*!*************************************************!*\
  !*** ./src/core/createElement/createElement.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.createElement = void 0;\n\nvar _is = __webpack_require__(/*! ../../utils/is */ \"./src/utils/is.js\");\n\n/**\r\n  * append Element string\r\n  *\r\n  * @param {HTMLElement} element\r\n  * @param {String} text\r\n  */\nvar appendElementText = function appendElementText(element, text) {\n  element.appendChild(document.createTextNode(text));\n};\n/**\r\n  * append Element Styles\r\n  *\r\n  * @param {HTMLElement} element\r\n  * @param {String} styles\r\n  */\n\n\nvar appendElementStyles = function appendElementStyles(element, styles) {\n  element.setAttribute('style', styles);\n};\n/**\r\n  * append Element Event\r\n  *\r\n  * @param {HTMLElement} element\r\n  * @param {Event} event\r\n  * @param {*} handler\r\n  */\n\n\nvar appendElementEvent = function appendElementEvent(element, event, handler) {\n  var eventListener = event.startsWith('on') ? event.substring(2, event.length) : event;\n  element.addEventListener(eventListener, function (e) {\n    // pass the event and element into the funtion\n    handler(e, element);\n  });\n};\n/**\r\n  * append Element Object\r\n  *\r\n  * @param {HTMLElement} element\r\n  * @param {Object} elementProps\r\n  */\n\n\nvar appendElementObject = function appendElementObject(element, elementProps) {\n  // Loop throught the element props\n  Object.keys(elementProps).forEach(function (prop) {\n    if (prop === 'style' || prop === 'styles') {\n      appendElementStyles(element, elementProps[prop]);\n    } else if ((0, _is.isEvent)(prop)) {\n      appendElementEvent(element, prop, elementProps[prop]);\n    } else if ((0, _is.isElementAttribute)(element, prop)) {\n      element.setAttribute(prop, elementProps[prop]);\n    }\n  });\n};\n/**\r\n  * append Element Array\r\n  *\r\n  * @param {HTMLElement} element\r\n  * @param {*} childrens\r\n  */\n\n\nvar appendElementArray = function appendElementArray(element, childrens) {\n  // loop thought the elemnt childs\n  childrens.forEach(function (child) {\n    if ((0, _is.isArray)(child)) {\n      appendElementArray(element, child);\n    } else if ((0, _is.isHtml)(child)) {\n      element.appendChild(child);\n    } else if ((0, _is.isString)(child)) {\n      appendElementText(element, child);\n    } else if ((0, _is.isObject)(child)) {\n      appendElementObject(element, child);\n    }\n  });\n};\n/**\r\n  * create Element\r\n  *\r\n  * @param {String} tag\r\n  * @param {*} args\r\n  * @returns {HTMLElement}\r\n  */\n\n\nvar createElement = function createElement(tag) {\n  // create the element\n  var element = document.createElement(tag);\n\n  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    args[_key - 1] = arguments[_key];\n  }\n\n  args.forEach(function (arg) {\n    if ((0, _is.isArray)(arg)) {\n      appendElementArray(element, arg);\n    } else if ((0, _is.isHtml)(arg)) {\n      element.appendChild(arg);\n    } else if ((0, _is.isString)(arg)) {\n      appendElementText(element, arg);\n    } else if ((0, _is.isObject)(arg)) {\n      appendElementObject(element, arg);\n    }\n  });\n  return element;\n};\n\nexports.createElement = createElement;\n\n//# sourceURL=webpack://Power/./src/core/createElement/createElement.js?");

/***/ }),

/***/ "./src/core/render/render.js":
/*!***********************************!*\
  !*** ./src/core/render/render.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.render = void 0;\n\nvar _is = __webpack_require__(/*! ../../utils/is */ \"./src/utils/is.js\");\n\nvar _log = __webpack_require__(/*! ../../utils/log */ \"./src/utils/log.js\");\n\n/**\r\n  * render vdom elements or component\r\n  *\r\n  * @param {Object|Function} model // TODO: Better name?\r\n  * @param {DOM Element} root\r\n  */\nvar render = function render(model, root) {\n  // return if there is no valid model given\n  if (!model) {\n    (0, _log.log)('There is no valid model given', 'error');\n    return;\n  } // return if there is no valid root given\n\n\n  if (!(0, _is.isHtml)(root)) {\n    (0, _log.log)('There is no valid root given', 'error');\n    return;\n  }\n\n  if ((0, _is.isArray)(model)) {\n    // get all the elements\n    model.forEach(function (item) {\n      if ((0, _is.isHtml)(item)) {\n        root.appendChild(item);\n      }\n    });\n  } else {\n    // there is just one item in the root\n    root.appendChild(model);\n  }\n};\n\nexports.render = render;\n\n//# sourceURL=webpack://Power/./src/core/render/render.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nObject.defineProperty(exports, \"createElement\", {\n  enumerable: true,\n  get: function get() {\n    return _createElement.createElement;\n  }\n});\nObject.defineProperty(exports, \"h\", {\n  enumerable: true,\n  get: function get() {\n    return _createElement.createElement;\n  }\n});\nObject.defineProperty(exports, \"render\", {\n  enumerable: true,\n  get: function get() {\n    return _render.render;\n  }\n});\nObject.defineProperty(exports, \"Component\", {\n  enumerable: true,\n  get: function get() {\n    return _component.Component;\n  }\n});\nObject.defineProperty(exports, \"registerComponent\", {\n  enumerable: true,\n  get: function get() {\n    return _registerComponent.registerComponent;\n  }\n});\nexports.version = void 0;\n\nvar _createElement = __webpack_require__(/*! ./core/createElement/createElement */ \"./src/core/createElement/createElement.js\");\n\nvar _render = __webpack_require__(/*! ./core/render/render */ \"./src/core/render/render.js\");\n\nvar _component = __webpack_require__(/*! ./core/component/component */ \"./src/core/component/component.js\");\n\nvar _registerComponent = __webpack_require__(/*! ./core/component/registerComponent */ \"./src/core/component/registerComponent.js\");\n\n/**\r\n  * Power version\r\n  *\r\n  * @type {String}\r\n  */\nvar version = '1.2.2';\nexports.version = version;\n\n//# sourceURL=webpack://Power/./src/index.js?");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.isElementAttribute = exports.isEvent = exports.isFunction = exports.isHtml = exports.isObject = exports.isString = exports.isBoolean = exports.isArray = void 0;\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/**\r\n  * validate an Array\r\n  *\r\n  * @param {*} expectedArray\r\n  * @returns {Boolean}\r\n  */\nvar isArray = function isArray(expectedArray) {\n  return Array.isArray(expectedArray);\n};\n/**\r\n  * validate a Boolean\r\n  *\r\n  * @param {*} expectedBoolean\r\n  * @returns {Boolean}\r\n  */\n\n\nexports.isArray = isArray;\n\nvar isBoolean = function isBoolean(expectedBoolean) {\n  return typeof expectedBoolean === 'boolean';\n};\n/**\r\n  * validate a String\r\n  *\r\n  * @param {*} expectedString\r\n  * @returns {Boolean}\r\n  */\n\n\nexports.isBoolean = isBoolean;\n\nvar isString = function isString(expectedString) {\n  return typeof expectedString === 'string';\n};\n/**\r\n  * validate an object\r\n  *\r\n  * @param {*} expectedObject\r\n  * @returns {Boolean}\r\n  */\n\n\nexports.isString = isString;\n\nvar isObject = function isObject(expectedObject) {\n  return _typeof(expectedObject) === 'object';\n};\n/**\r\n  * validate HTML Element\r\n  *\r\n  * @param {*} expectedHtml\r\n  * @returns {Boolean}\r\n  */\n\n\nexports.isObject = isObject;\n\nvar isHtml = function isHtml(expectedHtml) {\n  return expectedHtml instanceof Element;\n};\n/**\r\n  * validate function\r\n  *\r\n  * @param {*} expectedFunction\r\n  * @returns {Boolean}\r\n  */\n\n\nexports.isHtml = isHtml;\n\nvar isFunction = function isFunction(expectedFunction) {\n  return typeof expectedFunction === 'function';\n};\n/**\r\n  * validate event\r\n  *\r\n  * @param {*} expectedEvent\r\n  * @returns {Boolean}\r\n  */\n\n\nexports.isFunction = isFunction;\n\nvar isEvent = function isEvent(expectedEvent) {\n  return (expectedEvent.startsWith('on') ? expectedEvent : \"on\".concat(expectedEvent)) in window;\n};\n/**\r\n  * validate Element Attribte\r\n  *\r\n  * @param {HTMLElement} element\r\n  * @param {String} attribute\r\n  */\n\n\nexports.isEvent = isEvent;\n\nvar isElementAttribute = function isElementAttribute(element, attribute) {\n  return attribute in element || attribute === 'class';\n};\n\nexports.isElementAttribute = isElementAttribute;\n\n//# sourceURL=webpack://Power/./src/utils/is.js?");

/***/ }),

/***/ "./src/utils/log.js":
/*!**************************!*\
  !*** ./src/utils/log.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.log = void 0;\n\nvar log = function log(message, type) {\n  if (!window.console) {\n    return;\n  }\n\n  switch (type) {\n    case 'log':\n      console.log(message);\n      break;\n\n    case 'warn':\n      console.warn(message);\n      break;\n\n    case 'error':\n      console.error(message);\n      break;\n\n    default:\n      console.log(message);\n      break;\n  }\n};\n\nexports.log = log;\n\n//# sourceURL=webpack://Power/./src/utils/log.js?");

/***/ })

/******/ });
});