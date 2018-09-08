// [AIV_SHORT]  Build version: 2.0.0-alpha.2 - Saturday, September 8th, 2018, 8:48:13 PM  
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return Component; });\n/* harmony import */ var _utils_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/is */ \"./src/utils/is.js\");\n/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/object */ \"./src/utils/object.js\");\n/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/dom */ \"./src/utils/dom.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ \"./src/core/constants.js\");\n/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./observer */ \"./src/core/component/observer.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n/**\r\n  * Power Component\r\n  *\r\n  * @class Component\r\n  */\n\nvar Component =\n/*#__PURE__*/\nfunction () {\n  /**\r\n    * constructor of class Component\r\n    *\r\n    * @param {Object} data\r\n    */\n  function Component(componentData) {\n    _classCallCheck(this, Component);\n\n    // block update\n    this.noUpdate = true; // the component gets the name of the class name\n\n    this.name = this.constructor.name; // Getting called before constructor\n\n    if (this.beforeComponentMount) {\n      this.beforeComponentMount(this);\n    } // check if there is any data\n\n\n    if (componentData) {\n      // clone the object to store the original data\n      this.data = Object(_utils_object__WEBPACK_IMPORTED_MODULE_1__[\"cloneObject\"])(componentData); // start observing with defineProperty\n\n      Object(_observer__WEBPACK_IMPORTED_MODULE_4__[\"observerComponentData\"])(this, this.data); // merge the original data to the new observer object\n\n      Object(_observer__WEBPACK_IMPORTED_MODULE_4__[\"mergeComponentData\"])(this, this.data, componentData);\n    } // mark this class as a Power Component\n\n\n    this.IS_POWER_COMPONENT = true;\n  }\n  /**\r\n    * creates the elements of a component\r\n    *\r\n    * @return {Node}\r\n    */\n\n\n  _createClass(Component, [{\n    key: \"create\",\n    value: function create() {\n      var _this = this;\n\n      // creating the component root element\n      this.node = document.createElement(this.name); // setting this element display to block by default\n\n      this.node.style.display = 'block';\n      this.node.setAttribute(_constants__WEBPACK_IMPORTED_MODULE_3__[\"DATA_COMPONENT_ATTRIBUTE\"], true); // get the template by call the render\n\n      var template = this.render();\n\n      if (Object(_utils_is__WEBPACK_IMPORTED_MODULE_0__[\"isArray\"])(template)) {\n        template.forEach(function (item) {\n          if (item !== null) {\n            _this.node.appendChild(item);\n          }\n        });\n      } else {\n        this.node.appendChild(template);\n      }\n\n      return this.node;\n    }\n    /**\r\n      * changes the component state\r\n      * trigger the update methods\r\n      *\r\n      * @param {Function} stateHandler\r\n      */\n\n  }, {\n    key: \"setState\",\n    value: function setState(stateHandler) {\n      if (Object(_utils_is__WEBPACK_IMPORTED_MODULE_0__[\"isFunction\"])(stateHandler)) {\n        stateHandler();\n      } // update the component\n\n\n      this.update();\n    }\n    /**\r\n      * updates the component\r\n      */\n\n  }, {\n    key: \"update\",\n    value: function update() {\n      var _this2 = this;\n\n      var template = this.render(); // clear the view\n\n      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__[\"removeChilds\"])(this.node); // rerender\n\n      if (Object(_utils_is__WEBPACK_IMPORTED_MODULE_0__[\"isArray\"])(template)) {\n        template.forEach(function (item) {\n          if (item !== null) {\n            _this2.node.appendChild(item);\n          }\n        });\n      } else {\n        this.node.appendChild(template);\n      }\n    }\n    /**\r\n      * remove component and its childs\r\n      */\n\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      var parent = this.node.parentElement;\n      parent.removeChild(this.node);\n    }\n  }]);\n\n  return Component;\n}();\n\n//# sourceURL=webpack://Power/./src/core/component/component.js?");

/***/ }),

/***/ "./src/core/component/observer.js":
/*!****************************************!*\
  !*** ./src/core/component/observer.js ***!
  \****************************************/
/*! exports provided: observerComponentData, mergeComponentData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"observerComponentData\", function() { return observerComponentData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mergeComponentData\", function() { return mergeComponentData; });\n/**\r\n  * observer component data\r\n  *\r\n  * @param {Class} component\r\n  * @param {Object} componentData\r\n  */\nvar observerComponentData = function observerComponentData(component, componentData) {\n  Object.keys(componentData).forEach(function (keys) {\n    Object.defineProperty(componentData, keys, {\n      set: function set(newValue) {\n        this[\"_\".concat(keys)] = newValue;\n\n        if (!component.noUpdate) {\n          component.update();\n        }\n        /* eslint-disable */\n\n\n        component.noUpdate = false;\n        /* eslint-enable */\n      },\n      get: function get() {\n        return this[\"_\".concat(keys)];\n      }\n    });\n  });\n};\n/**\r\n  * merge Component data\r\n  *\r\n  * @param {Class} component\r\n  * @param {Object} componentData\r\n  * @param {Object} originalData\r\n  */\n\nvar mergeComponentData = function mergeComponentData(component, componentData, originalData) {\n  Object.keys(originalData).forEach(function (keys) {\n    /* eslint-disable */\n    componentData[keys] = originalData[keys];\n    /* eslint-enable */\n  });\n};\n\n//# sourceURL=webpack://Power/./src/core/component/observer.js?");

/***/ }),

/***/ "./src/core/component/registerComponent.js":
/*!*************************************************!*\
  !*** ./src/core/component/registerComponent.js ***!
  \*************************************************/
/*! exports provided: registerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"registerComponent\", function() { return registerComponent; });\n/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/log */ \"./src/utils/log.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./src/core/constants.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/core/component/utils.js\");\n/**\r\n  * This file provides the service to register Components in DOM\r\n  */\n\n\n\n/**\r\n  * create a component in the dom\r\n  *\r\n  * @param {DOM} component\r\n  * @param {CLass} _class\r\n  */\n\nvar createDomComponent = function createDomComponent(component, _class) {\n  // get the attributes from the dom element\n  var componentAttributes = component.attributes; // create an empty data object\n\n  var dataObject = {}; // loop over the componentAttributes\n\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = componentAttributes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var prop = _step.value;\n      dataObject[prop.name] = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"convertComponentValue\"])(prop.value);\n    } // create a class instance\n\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator.return != null) {\n        _iterator.return();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n\n  var PowerClass = new _class(dataObject); // replace node\n\n  component.parentNode.replaceChild(PowerClass.create(), component);\n};\n\nvar registerComponent = function registerComponent(_class) {\n  // if there is no _class\n  if (!_class) {\n    // TODO: Better class validation\n    Object(_utils_log__WEBPACK_IMPORTED_MODULE_0__[\"log\"])('Cannot register Component', 'error');\n    return;\n  }\n\n  var componentName = _class.name; // get every component in dom\n\n  var componentsContainer = [].slice.call(document.querySelectorAll(componentName));\n\n  if (componentsContainer.length === 0) {\n    return;\n  }\n\n  componentsContainer.forEach(function (component) {\n    if (!component.getAttribute(_constants__WEBPACK_IMPORTED_MODULE_1__[\"DATA_COMPONENT_ATTRIBUTE\"])) {\n      createDomComponent(component, _class);\n    }\n  });\n};\n\n//# sourceURL=webpack://Power/./src/core/component/registerComponent.js?");

/***/ }),

/***/ "./src/core/component/utils.js":
/*!*************************************!*\
  !*** ./src/core/component/utils.js ***!
  \*************************************/
/*! exports provided: convertComponentValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"convertComponentValue\", function() { return convertComponentValue; });\n/**\r\n  * This file provides component utils\r\n  */\n\n/**\r\n  * function that detects an array in a string\r\n  *\r\n  * @param {String} chars\r\n  * @returns {Boolean}\r\n  */\nvar isStringArray = function isStringArray(chars) {\n  return chars[0] === '[' && chars[chars.length - 1] === ']';\n};\n/**\r\n  * Converts a string to an array\r\n  *\r\n  * @param {String} chars\r\n  * @returns {Array}\r\n  */\n\n\nvar convertStringArray = function convertStringArray(chars) {\n  // remove first and last letter\n  var stringArray = chars.substring(1, chars.length - 1); // split into chunks\n\n  return stringArray.trim() === '' ? [] : stringArray.split(',');\n};\n/**\r\n  * get string param\r\n  *\r\n  * @param {String} value\r\n  *\r\n  * @return {String|Number}\r\n  */\n\n\nvar getStringParam = function getStringParam(value) {\n  var length = value.length.length;\n  var index = value.indexOf('|');\n  var valueString = '';\n\n  if (index > -1) {\n    var type = value.substring(index + 1, length);\n    valueString = value.substring(0, index);\n\n    if (type.trim() === 'number') {\n      return parseFloat(valueString);\n    }\n\n    return valueString;\n  }\n\n  return value;\n};\n/**\r\n  * Convert components data\r\n  *\r\n  * @param {String}\r\n  *\r\n  * @return {String|Number|Array}\r\n  */\n\n\nvar convertComponentValue = function convertComponentValue(value) {\n  if (isStringArray(value)) {\n    return convertStringArray(value);\n  }\n\n  return getStringParam(value);\n};\n\n//# sourceURL=webpack://Power/./src/core/component/utils.js?");

/***/ }),

/***/ "./src/core/constants.js":
/*!*******************************!*\
  !*** ./src/core/constants.js ***!
  \*******************************/
/*! exports provided: DATA_COMPONENT_ATTRIBUTE, IS_COMPONENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DATA_COMPONENT_ATTRIBUTE\", function() { return DATA_COMPONENT_ATTRIBUTE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IS_COMPONENT\", function() { return IS_COMPONENT; });\n/**\r\n  * This file provides the constants of power\r\n  */\n\n/**\r\n  * Data power attribute\r\n  *\r\n  * @type {String}\r\n  */\nvar DATA_COMPONENT_ATTRIBUTE = 'data-power-component';\n/**\r\n  * Is Component\r\n  *\r\n  * @type {Boolean}\r\n  */\n\nvar IS_COMPONENT = 'IS_COMPONENT';\n\n//# sourceURL=webpack://Power/./src/core/constants.js?");

/***/ }),

/***/ "./src/core/createElement/createElement.js":
/*!*************************************************!*\
  !*** ./src/core/createElement/createElement.js ***!
  \*************************************************/
/*! exports provided: createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\n/* harmony import */ var _utils_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/is */ \"./src/utils/is.js\");\n\n/**\r\n  * append Element string\r\n  *\r\n  * @param {HTMLElement} element\r\n  * @param {String} text\r\n  */\n\nvar appendElementText = function appendElementText(element, text) {\n  element.appendChild(document.createTextNode(text));\n};\n/**\r\n  * append Element Styles\r\n  *\r\n  * @param {HTMLElement} element\r\n  * @param {String} styles\r\n  */\n\n\nvar appendElementStyles = function appendElementStyles(element, styles) {\n  element.setAttribute('style', styles);\n};\n/**\r\n  * append Element Event\r\n  *\r\n  * @param {HTMLElement} element\r\n  * @param {Event} event\r\n  * @param {*} handler\r\n  */\n\n\nvar appendElementEvent = function appendElementEvent(element, event, handler) {\n  var eventListener = event.startsWith('on') ? event.substring(2, event.length) : event;\n  element.addEventListener(eventListener, function (e) {\n    // pass the event and element into the funtion\n    handler(e, element);\n  });\n};\n/**\r\n  * append Element Object\r\n  *\r\n  * @param {HTMLElement} element\r\n  * @param {Object} elementProps\r\n  */\n\n\nvar appendElementObject = function appendElementObject(element, elementProps) {\n  // Loop throught the element props\n  Object.keys(elementProps).forEach(function (prop) {\n    if (prop === 'style' || prop === 'styles') {\n      appendElementStyles(element, elementProps[prop]);\n    } else if (Object(_utils_is__WEBPACK_IMPORTED_MODULE_0__[\"isEvent\"])(prop)) {\n      appendElementEvent(element, prop, elementProps[prop]);\n    } else if (Object(_utils_is__WEBPACK_IMPORTED_MODULE_0__[\"isElementAttribute\"])(element, prop)) {\n      element.setAttribute(prop, elementProps[prop]);\n    }\n  });\n};\n/**\r\n  * append Element Array\r\n  *\r\n  * @param {HTMLElement} element\r\n  * @param {*} childrens\r\n  */\n\n\nvar appendElementArray = function appendElementArray(element, childrens) {\n  // loop thought the elemnt childs\n  childrens.forEach(function (child) {\n    if (Object(_utils_is__WEBPACK_IMPORTED_MODULE_0__[\"isArray\"])(child)) {\n      appendElementArray(element, child);\n    } else if (Object(_utils_is__WEBPACK_IMPORTED_MODULE_0__[\"isHtml\"])(child)) {\n      element.appendChild(child);\n    } else if (Object(_utils_is__WEBPACK_IMPORTED_MODULE_0__[\"isString\"])(child)) {\n      appendElementText(element, child);\n    } else if (Object(_utils_is__WEBPACK_IMPORTED_MODULE_0__[\"isObject\"])(child)) {\n      appendElementObject(element, child);\n    }\n  });\n};\n/**\r\n  * create Element\r\n  *\r\n  * @param {String} tag\r\n  * @param {Object|Null} props\r\n  * @param {Array|HTMLElement} childs\r\n  * @returns {HTMLElement}\r\n  */\n\n\nvar createElement = function createElement() {\n  var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';\n  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n  // create the element\n  var element = document.createElement(tag);\n\n  if (Object(_utils_is__WEBPACK_IMPORTED_MODULE_0__[\"isObject\"])(props) && props !== null) {\n    appendElementObject(element, props);\n  }\n\n  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    args[_key - 2] = arguments[_key];\n  }\n\n  args.forEach(function (arg) {\n    if (Object(_utils_is__WEBPACK_IMPORTED_MODULE_0__[\"isString\"])(arg)) {\n      appendElementText(element, arg);\n    } else if (Object(_utils_is__WEBPACK_IMPORTED_MODULE_0__[\"isHtml\"])(arg)) {\n      element.appendChild(arg);\n    }\n  });\n  return element;\n};\n\n//# sourceURL=webpack://Power/./src/core/createElement/createElement.js?");

/***/ }),

/***/ "./src/core/render/render.js":
/*!***********************************!*\
  !*** ./src/core/render/render.js ***!
  \***********************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var _utils_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/is */ \"./src/utils/is.js\");\n/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/log */ \"./src/utils/log.js\");\n\n\n/**\r\n  * render vdom elements or component\r\n  *\r\n  * @param {Object|Function} model\r\n  * @param {DOM Element} root\r\n  */\n\nvar render = function render(model, root) {\n  // Check if model is a Power Component\n  var htmlModel = model.IS_POWER_COMPONENT ? model.create() : model; // return if there is no valid model given\n\n  if (!htmlModel) {\n    Object(_utils_log__WEBPACK_IMPORTED_MODULE_1__[\"log\"])('There is no valid model given', 'error');\n    return;\n  } // return if there is no valid root given\n\n\n  if (!Object(_utils_is__WEBPACK_IMPORTED_MODULE_0__[\"isHtml\"])(htmlModel)) {\n    Object(_utils_log__WEBPACK_IMPORTED_MODULE_1__[\"log\"])('There is no valid root given', 'error');\n    return;\n  }\n\n  if (Object(_utils_is__WEBPACK_IMPORTED_MODULE_0__[\"isArray\"])(htmlModel)) {\n    // get all the elements\n    htmlModel.forEach(function (item) {\n      if (Object(_utils_is__WEBPACK_IMPORTED_MODULE_0__[\"isHtml\"])(item)) {\n        root.appendChild(item);\n      }\n    });\n  } else {\n    // there is just one item in the root\n    root.appendChild(htmlModel);\n  }\n\n  if (model.IS_POWER_COMPONENT && model.afterComponentMount) {\n    model.afterComponentMount(model);\n  }\n};\n\n//# sourceURL=webpack://Power/./src/core/render/render.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: version, createElement, h, render, Component, registerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"version\", function() { return version; });\n/* harmony import */ var _core_createElement_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/createElement/createElement */ \"./src/core/createElement/createElement.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return _core_createElement_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"h\", function() { return _core_createElement_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"]; });\n\n/* harmony import */ var _core_render_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/render/render */ \"./src/core/render/render.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _core_render_render__WEBPACK_IMPORTED_MODULE_1__[\"render\"]; });\n\n/* harmony import */ var _core_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/component/component */ \"./src/core/component/component.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return _core_component_component__WEBPACK_IMPORTED_MODULE_2__[\"Component\"]; });\n\n/* harmony import */ var _core_component_registerComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/component/registerComponent */ \"./src/core/component/registerComponent.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"registerComponent\", function() { return _core_component_registerComponent__WEBPACK_IMPORTED_MODULE_3__[\"registerComponent\"]; });\n\n\n\n\n\n/**\r\n  * Power version\r\n  *\r\n  * @type {String}\r\n  */\n\nvar version = '2.0.0-alpha.2';\n\n\n//# sourceURL=webpack://Power/./src/index.js?");

/***/ }),

/***/ "./src/utils/dom.js":
/*!**************************!*\
  !*** ./src/utils/dom.js ***!
  \**************************/
/*! exports provided: removeChilds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeChilds\", function() { return removeChilds; });\n/**\r\n  * remove all child nodes\r\n  *\r\n  * @param {Node} node\r\n  */\nvar removeChilds = function removeChilds(node) {\n  while (node.firstChild) {\n    node.removeChild(node.firstChild);\n  }\n};\n\n//# sourceURL=webpack://Power/./src/utils/dom.js?");

/***/ }),

/***/ "./src/utils/is.js":
/*!*************************!*\
  !*** ./src/utils/is.js ***!
  \*************************/
/*! exports provided: isArray, isBoolean, isNull, isString, isObject, isHtml, isFunction, isEvent, isElementAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isArray\", function() { return isArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isBoolean\", function() { return isBoolean; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isNull\", function() { return isNull; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isString\", function() { return isString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isObject\", function() { return isObject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isHtml\", function() { return isHtml; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isFunction\", function() { return isFunction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isEvent\", function() { return isEvent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isElementAttribute\", function() { return isElementAttribute; });\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/**\r\n  * validate an Array\r\n  *\r\n  * @param {*} expectedArray\r\n  *\r\n  * @returns {Boolean}\r\n  */\nvar isArray = function isArray(expectedArray) {\n  return Array.isArray(expectedArray);\n};\n/**\r\n  * validate a Boolean\r\n  *\r\n  * @param {*} expectedBoolean\r\n  *\r\n  * @returns {Boolean}\r\n  */\n\nvar isBoolean = function isBoolean(expectedBoolean) {\n  return typeof expectedBoolean === 'boolean';\n};\n/**\r\n  * validate null\r\n  *\r\n  * @param {*} expectedNull\r\n  *\r\n  * @return {Boolean}\r\n  */\n\nvar isNull = function isNull(expectedNull) {\n  return expectedNull === null;\n};\n/**\r\n  * validate a String\r\n  *\r\n  * @param {*} expectedString\r\n  *\r\n  * @returns {Boolean}\r\n  */\n\nvar isString = function isString(expectedString) {\n  return typeof expectedString === 'string';\n};\n/**\r\n  * validate an object\r\n  *\r\n  * @param {*} expectedObject\r\n  *\r\n  * @returns {Boolean}\r\n  */\n\nvar isObject = function isObject(expectedObject) {\n  return _typeof(expectedObject) === 'object' && !isNull(expectedObject);\n};\n/**\r\n  * validate HTML Element\r\n  *\r\n  * @param {*} expectedHtml\r\n  *\r\n  * @returns {Boolean}\r\n  */\n\nvar isHtml = function isHtml(expectedHtml) {\n  return expectedHtml instanceof Element;\n};\n/**\r\n  * validate function\r\n  *\r\n  * @param {*} expectedFunction\r\n  *\r\n  * @returns {Boolean}\r\n  */\n\nvar isFunction = function isFunction(expectedFunction) {\n  return typeof expectedFunction === 'function';\n};\n/**\r\n  * validate event\r\n  *\r\n  * @param {*} expectedEvent\r\n  *\r\n  * @returns {Boolean}\r\n  */\n\nvar isEvent = function isEvent(expectedEvent) {\n  return (expectedEvent.startsWith('on') ? expectedEvent : \"on\".concat(expectedEvent)) in window;\n};\n/**\r\n  * validate Element Attribte\r\n  *\r\n  * @param {HTMLElement} element\r\n  * @param {String} attribute\r\n  */\n\nvar isElementAttribute = function isElementAttribute(element, attribute) {\n  return attribute in element || attribute === 'class' || attribute.startsWith('data-', 0);\n};\n\n//# sourceURL=webpack://Power/./src/utils/is.js?");

/***/ }),

/***/ "./src/utils/log.js":
/*!**************************!*\
  !*** ./src/utils/log.js ***!
  \**************************/
/*! exports provided: log */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"log\", function() { return log; });\nvar log = function log(message, type) {\n  if (!window.console) {\n    return;\n  }\n\n  switch (type) {\n    case 'log':\n      console.log(message);\n      break;\n\n    case 'warn':\n      console.warn(message);\n      break;\n\n    case 'error':\n      console.error(message);\n      break;\n\n    default:\n      console.log(message);\n      break;\n  }\n};\n\n//# sourceURL=webpack://Power/./src/utils/log.js?");

/***/ }),

/***/ "./src/utils/object.js":
/*!*****************************!*\
  !*** ./src/utils/object.js ***!
  \*****************************/
/*! exports provided: cloneObject, deepcloneObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cloneObject\", function() { return cloneObject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deepcloneObject\", function() { return deepcloneObject; });\n/**\r\n  * clones an object\r\n  *\r\n  * @param {Object} originalObject\r\n  *\r\n  * @return {Object}\r\n  */\nvar cloneObject = function cloneObject(originalObject) {\n  return Object.assign({}, originalObject);\n};\n/**\r\n  * deep clones an object\r\n  *\r\n  * @param {Object} originalObject\r\n  *\r\n  * @return {Object}\r\n  */\n\nvar deepcloneObject = function deepcloneObject(originalObject) {\n  return JSON.parse(JSON.stringify(originalObject));\n};\n\n//# sourceURL=webpack://Power/./src/utils/object.js?");

/***/ })

/******/ });
}); 