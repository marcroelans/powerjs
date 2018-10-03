// [AIV_SHORT]  Build version: 2.0.0-alpha.16 - Wednesday, October 3rd, 2018, 8:42:20 PM  
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return Component; });\n/* harmony import */ var _utils_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/is */ \"./src/utils/is.js\");\n/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/object */ \"./src/utils/object.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ \"./src/core/constants.js\");\n/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./observer */ \"./src/core/component/observer.js\");\n/* harmony import */ var _createElement_createElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../createElement/createElement */ \"./src/core/createElement/createElement.js\");\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\n\n\n\n\n\n/**\r\n * Power Component\r\n * @public\r\n * @class Component\r\n */\n\nvar Component =\n/*#__PURE__*/\nfunction () {\n  /**\r\n   * constructor of class Component\r\n   * @public\r\n   * @param {Object} data\r\n   */\n  function Component(componentData) {\n    _classCallCheck(this, Component); // Getting called before constructor\n\n\n    if (this.beforeComponentConstruct) {\n      this.beforeComponentConstruct(this);\n    } // block update\n\n\n    this.noUpdate = true; // the component gets the name of the class name\n\n    this.name = this.constructor.name; // check if there is any data\n\n    if (componentData) {\n      // clone the object to store the original data\n      this.data = Object(_utils_object__WEBPACK_IMPORTED_MODULE_1__[\"cloneObject\"])(componentData); // start observing with defineProperty\n\n      Object(_observer__WEBPACK_IMPORTED_MODULE_3__[\"observerComponentData\"])(this, this.data); // merge the original data to the new observer object\n\n      Object(_observer__WEBPACK_IMPORTED_MODULE_3__[\"mergeComponentData\"])(this, this.data, componentData); // deactive the update block\n\n      this.noUpdate = false;\n    } // mark this class as a Power Component\n\n\n    this.IS_POWER_COMPONENT = true; // Getting called after constructor\n\n    if (this.afterComponentConstruct) {\n      this.afterComponentConstruct(this);\n    }\n  }\n  /**\r\n   * creates the elements of a component\r\n   * @public\r\n   * @return {Node}\r\n   */\n\n\n  _createClass(Component, [{\n    key: \"create\",\n    value: function create() {\n      if (this.beforeComponentCreate) {\n        this.beforeComponentCreate(this);\n      } // creating the component root element\n\n\n      this.node = document.createElement(this.name); // setting this element display to block by default\n\n      this.node.style.display = 'block';\n      this.node.setAttribute(_constants__WEBPACK_IMPORTED_MODULE_2__[\"DATA_COMPONENT_ATTRIBUTE\"], true); // get the vnode construct\n\n      this.componentVdom = this.render(); // get the template by call the render\n\n      this.template = Object(_createElement_createElement__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"])(this.componentVdom);\n      this.node.appendChild(this.template);\n\n      if (this.afterComponentCreate) {\n        this.afterComponentCreate(this);\n      }\n\n      return this.node;\n    }\n    /**\r\n     * changes the component state\r\n     * trigger the update methods\r\n     * @public\r\n     * @param {Function} stateHandler\r\n     */\n\n  }, {\n    key: \"setState\",\n    value: function setState(stateHandler) {\n      if (Object(_utils_is__WEBPACK_IMPORTED_MODULE_0__[\"isFunction\"])(stateHandler)) {\n        stateHandler();\n      } // update the component\n\n\n      this.update();\n    }\n    /**\r\n     * updates the component\r\n     */\n\n  }, {\n    key: \"update\",\n    value: function update() {\n      if (this.beforeComponentUpdate) {\n        this.beforeComponentUpdate(this);\n      }\n\n      var newTemplate = this.render();\n      this.patch(this.template, newTemplate);\n\n      if (this.afterComponentUpdate) {\n        this.afterComponentUpdate(this);\n      }\n    }\n    /**\r\n     * patch\r\n     */\n\n  }, {\n    key: \"patch\",\n    value: function patch(oldTemplate, newTemplate) {\n      console.log(oldTemplate);\n      console.log(newTemplate);\n    }\n    /**\r\n     * remove component and its childs\r\n     */\n\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      if (this.beforeComponentUnload) {\n        this.beforeComponentUnload(this);\n      }\n\n      var parent = this.node.parentElement;\n      parent.removeChild(this.node);\n\n      if (this.beforeComponentUnload) {\n        this.beforeComponentUnload(this);\n      }\n    }\n  }]);\n\n  return Component;\n}();\n\n//# sourceURL=webpack://Power/./src/core/component/component.js?");

/***/ }),

/***/ "./src/core/component/observer.js":
/*!****************************************!*\
  !*** ./src/core/component/observer.js ***!
  \****************************************/
/*! exports provided: observerComponentData, mergeComponentData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"observerComponentData\", function() { return observerComponentData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mergeComponentData\", function() { return mergeComponentData; });\n/**\r\n * observer component data\r\n * @private\r\n * @param {Class} component\r\n * @param {Object} componentData\r\n */\nvar observerComponentData = function observerComponentData(component, componentData) {\n  Object.keys(componentData).forEach(function (keys) {\n    Object.defineProperty(componentData, keys, {\n      set: function set(newValue) {\n        this[\"_\".concat(keys)] = newValue;\n\n        if (!component.noUpdate) {\n          component.update();\n        }\n      },\n      get: function get() {\n        return this[\"_\".concat(keys)];\n      }\n    });\n  });\n};\n/**\r\n * merge Component data\r\n * @private\r\n * @param {Class} component\r\n * @param {Object} componentData\r\n * @param {Object} originalData\r\n */\n\nvar mergeComponentData = function mergeComponentData(component, componentData, originalData) {\n  Object.keys(originalData).forEach(function (keys) {\n    componentData[keys] = originalData[keys];\n  });\n};\n\n//# sourceURL=webpack://Power/./src/core/component/observer.js?");

/***/ }),

/***/ "./src/core/component/registerComponent.js":
/*!*************************************************!*\
  !*** ./src/core/component/registerComponent.js ***!
  \*************************************************/
/*! exports provided: registerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"registerComponent\", function() { return registerComponent; });\n/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/log */ \"./src/utils/log.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./src/core/constants.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/core/component/utils.js\");\n\n\n\n/**\r\n * create a component in the dom\r\n * @private\r\n * @param {DOM} component\r\n * @param {Class} _class\r\n */\n\nvar createDomComponent = function createDomComponent(component, _class) {\n  // get the attributes from the dom element\n  var componentAttributes = component.attributes; // create an empty data object\n\n  var dataObject = {}; // loop over the componentAttributes\n\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = componentAttributes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var prop = _step.value;\n      dataObject[prop.name] = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"convertComponentValue\"])(prop.value);\n    } // create a class instance\n\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator.return != null) {\n        _iterator.return();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n\n  var PowerClass = new _class(dataObject); // check for hook // afterComponentMount\n\n  if (PowerClass.afterComponentMount) {\n    PowerClass.afterComponentMount(PowerClass);\n  } // replace node\n\n\n  component.parentNode.replaceChild(PowerClass.create(), component);\n};\n/**\r\n * register a Component\r\n * @public\r\n * @param {Class}\r\n */\n\n\nvar registerComponent = function registerComponent(_class) {\n  // if there is no _class\n  if (!_class) {\n    // TODO: Better class validation\n    _utils_log__WEBPACK_IMPORTED_MODULE_0__[\"default\"].error('Cannot register Component');\n    return;\n  }\n\n  var componentName = _class.name; // get every component in dom\n\n  var componentsContainer = [].slice.call(document.querySelectorAll(componentName));\n\n  if (componentsContainer.length === 0) {\n    return;\n  }\n\n  componentsContainer.forEach(function (component) {\n    if (!component.getAttribute(_constants__WEBPACK_IMPORTED_MODULE_1__[\"DATA_COMPONENT_ATTRIBUTE\"])) {\n      createDomComponent(component, _class);\n    }\n  });\n};\n\n//# sourceURL=webpack://Power/./src/core/component/registerComponent.js?");

/***/ }),

/***/ "./src/core/component/utils.js":
/*!*************************************!*\
  !*** ./src/core/component/utils.js ***!
  \*************************************/
/*! exports provided: convertComponentValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"convertComponentValue\", function() { return convertComponentValue; });\n/* harmony import */ var _utils_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/is */ \"./src/utils/is.js\");\n\n/**\r\n * Converts a string value to an array or object\r\n * @private\r\n * @param {String} value\r\n * @returns {*} Array, Object or the original value if parse fails\r\n */\n\nvar convertStringValue = function convertStringValue(value, isArray) {\n  // remove first and last letter\n  var contents = value.substring(1, value.length - 1); // check an empty object or array was set\n\n  var isEmpty = contents.trim() === '';\n\n  if (!isArray) {\n    var result = value;\n\n    if (isEmpty) {\n      return {};\n    }\n\n    try {\n      result = JSON.parse(value);\n    } catch (error) {\n      result = value;\n    }\n\n    return result;\n  } // split into chunks\n\n\n  return isEmpty ? [] : contents.split(',');\n};\n/**\r\n * get string param\r\n * @private\r\n * @param {String} value\r\n * @return {String|Number}\r\n */\n\n\nvar getStringParam = function getStringParam(value) {\n  var val = value.trim();\n\n  if (Object(_utils_is__WEBPACK_IMPORTED_MODULE_0__[\"isNumeric\"])(val)) {\n    return parseFloat(val);\n  }\n\n  return val;\n};\n/**\r\n * Convert components data\r\n * @private\r\n * @param {String}\r\n * @return {String|Number|Array|Object}\r\n */\n\n\nvar convertComponentValue = function convertComponentValue(value) {\n  var isArray = value[0] === '[' && value[value.length - 1] === ']';\n  var isJSON = value[0] === '{' && value[value.length - 1] === '}';\n\n  if (isArray || isJSON) {\n    if (isJSON) {\n      value = value.replace(/'/g, '\"');\n    }\n\n    return convertStringValue(value, isArray);\n  }\n\n  return getStringParam(value);\n};\n\n//# sourceURL=webpack://Power/./src/core/component/utils.js?");

/***/ }),

/***/ "./src/core/constants.js":
/*!*******************************!*\
  !*** ./src/core/constants.js ***!
  \*******************************/
/*! exports provided: DATA_COMPONENT_ATTRIBUTE, IS_COMPONENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DATA_COMPONENT_ATTRIBUTE\", function() { return DATA_COMPONENT_ATTRIBUTE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IS_COMPONENT\", function() { return IS_COMPONENT; });\n/**\r\n * Data power attribute\r\n * @private\r\n * @type {String}\r\n */\nvar DATA_COMPONENT_ATTRIBUTE = 'data-power-component';\n/**\r\n * Is Component\r\n * @private\r\n * @type {Boolean}\r\n */\n\nvar IS_COMPONENT = 'IS_COMPONENT';\n\n//# sourceURL=webpack://Power/./src/core/constants.js?");

/***/ }),

/***/ "./src/core/createElement/createElement.js":
/*!*************************************************!*\
  !*** ./src/core/createElement/createElement.js ***!
  \*************************************************/
/*! exports provided: createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\n/* harmony import */ var _utils_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/is */ \"./src/utils/is.js\");\n\n/**\r\n * append Element string\r\n * @private\r\n * @param {HTMLElement} element\r\n * @param {String} text\r\n */\n\nvar appendElementText = function appendElementText(element, text) {\n  element.appendChild(document.createTextNode(text));\n};\n/**\r\n * append Element Styles\r\n * @private\r\n * @param {HTMLElement} element\r\n * @param {String} styles\r\n */\n\n\nvar appendElementStyles = function appendElementStyles(element, styles) {\n  element.setAttribute('style', styles);\n};\n/**\r\n * append Element Event\r\n * @private\r\n * @param {HTMLElement} element\r\n * @param {Event} event\r\n * @param {*} handler\r\n */\n\n\nvar appendElementEvent = function appendElementEvent(element, event, handler) {\n  var eventListener = event.startsWith('on') ? event.substring(2, event.length) : event;\n  element.addEventListener(eventListener, function (e) {\n    // pass the event and element into the funtion\n    handler(e, element);\n  });\n};\n/**\r\n * append Element Object\r\n * @private\r\n * @param {HTMLElement} element\r\n * @param {Object} elementProps\r\n */\n\n\nvar appendElementObject = function appendElementObject(element, elementProps) {\n  // Loop throught the element props\n  Object.keys(elementProps).forEach(function (prop) {\n    if (prop === 'style' || prop === 'styles') {\n      appendElementStyles(element, elementProps[prop]);\n    } else if (Object(_utils_is__WEBPACK_IMPORTED_MODULE_0__[\"isEvent\"])(prop)) {\n      appendElementEvent(element, prop, elementProps[prop]);\n    } else if (Object(_utils_is__WEBPACK_IMPORTED_MODULE_0__[\"isElementAttribute\"])(element, prop)) {\n      element.setAttribute(prop, elementProps[prop]);\n    }\n  });\n};\n/**\r\n * appends a vnode\r\n * @param {Object}\r\n */\n\n\nvar appendElementVnode = function appendElementVnode(element, vnode) {\n  element.appendChild(createElement(vnode));\n};\n/**\r\n * converts a vnode into an html element\r\n * @public\r\n * @param {Object} vnode\r\n * @returns {HTMLElement}\r\n */\n\n\nvar createElement = function createElement() {\n  var vnode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}; // create the element\n\n  var element = document.createElement(vnode.tagName);\n\n  if (Object(_utils_is__WEBPACK_IMPORTED_MODULE_0__[\"isObject\"])(vnode.props)) {\n    appendElementObject(element, vnode.props);\n  }\n\n  vnode.children.forEach(function (child) {\n    if (Object(_utils_is__WEBPACK_IMPORTED_MODULE_0__[\"isString\"])(child)) {\n      appendElementText(element, child);\n    } else if (Object(_utils_is__WEBPACK_IMPORTED_MODULE_0__[\"isVnode\"])(child)) {\n      appendElementVnode(element, child);\n    }\n  });\n  return element;\n};\n\n//# sourceURL=webpack://Power/./src/core/createElement/createElement.js?");

/***/ }),

/***/ "./src/core/render/render.js":
/*!***********************************!*\
  !*** ./src/core/render/render.js ***!
  \***********************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var _utils_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/is */ \"./src/utils/is.js\");\n/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/log */ \"./src/utils/log.js\");\n/* harmony import */ var _createElement_createElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../createElement/createElement */ \"./src/core/createElement/createElement.js\");\n\n\n\n/**\r\n * renders a component or vnodes in the given root\r\n * @public\r\n * @param {Object|Function} model\r\n * @param {DOM Element} root\r\n */\n\nvar render = function render(model, root) {\n  // check if model is neither a vdom or component\n  if (!Object(_utils_is__WEBPACK_IMPORTED_MODULE_0__[\"isVnode\"])(model) && !model.IS_POWER_COMPONENT) {\n    _utils_log__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error('No VNode or Component given');\n    return;\n  }\n\n  if (!Object(_utils_is__WEBPACK_IMPORTED_MODULE_0__[\"isHtml\"])(root)) {\n    _utils_log__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error('No valid root given.');\n  } // check if model is a component\n\n\n  if (model.IS_POWER_COMPONENT && model.beforeComponentLoad) {\n    model.beforeComponentLoad(model);\n  } // convert the vnodes / component into real dom elements\n\n\n  var domTree = model.IS_POWER_COMPONENT ? model.create() : Object(_createElement_createElement__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"])(model);\n\n  if (Object(_utils_is__WEBPACK_IMPORTED_MODULE_0__[\"isHtml\"])(domTree)) {\n    root.appendChild(domTree);\n  }\n\n  if (model.IS_POWER_COMPONENT && model.afterComponentLoad) {\n    model.afterComponentLoad(model);\n  }\n};\n\n//# sourceURL=webpack://Power/./src/core/render/render.js?");

/***/ }),

/***/ "./src/core/vdom/createVdom.js":
/*!*************************************!*\
  !*** ./src/core/vdom/createVdom.js ***!
  \*************************************/
/*! exports provided: createVnode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createVnode\", function() { return createVnode; });\n/**\r\n * create a VNODE\r\n * @public\r\n * @param {String} tag\r\n * @param {Object|Null} props\r\n * @param {Array|HTMLElement} childs\r\n * @returns {Object}\r\n */\nvar createVnode = function createVnode() {\n  var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';\n  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n\n  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    args[_key - 2] = arguments[_key];\n  } // create an empty vdom\n\n\n  return {\n    tagName: tag,\n    props: props,\n    children: args\n  };\n};\n\n//# sourceURL=webpack://Power/./src/core/vdom/createVdom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: version, h, render, Component, registerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"version\", function() { return version; });\n/* harmony import */ var _core_vdom_createVdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/vdom/createVdom */ \"./src/core/vdom/createVdom.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"h\", function() { return _core_vdom_createVdom__WEBPACK_IMPORTED_MODULE_0__[\"createVnode\"]; });\n\n/* harmony import */ var _core_render_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/render/render */ \"./src/core/render/render.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _core_render_render__WEBPACK_IMPORTED_MODULE_1__[\"render\"]; });\n\n/* harmony import */ var _core_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/component/component */ \"./src/core/component/component.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return _core_component_component__WEBPACK_IMPORTED_MODULE_2__[\"Component\"]; });\n\n/* harmony import */ var _core_component_registerComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/component/registerComponent */ \"./src/core/component/registerComponent.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"registerComponent\", function() { return _core_component_registerComponent__WEBPACK_IMPORTED_MODULE_3__[\"registerComponent\"]; });\n\n\n\n\n\n/**\r\n * Power version\r\n * @public\r\n * @type {String}\r\n */\n\nvar version = '2.0.0-alpha.16';\n\n\n//# sourceURL=webpack://Power/./src/index.js?");

/***/ }),

/***/ "./src/utils/is.js":
/*!*************************!*\
  !*** ./src/utils/is.js ***!
  \*************************/
/*! exports provided: isArray, isBoolean, isError, isFunction, isNull, isNumber, isObject, isRegExp, isString, isUndefined, isNumeric, isWindow, isHtml, isEvent, isElementAttribute, isVnode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isArray\", function() { return isArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isBoolean\", function() { return isBoolean; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isError\", function() { return isError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isFunction\", function() { return isFunction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isNull\", function() { return isNull; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isNumber\", function() { return isNumber; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isObject\", function() { return isObject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isRegExp\", function() { return isRegExp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isString\", function() { return isString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isUndefined\", function() { return isUndefined; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isNumeric\", function() { return isNumeric; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isWindow\", function() { return isWindow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isHtml\", function() { return isHtml; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isEvent\", function() { return isEvent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isElementAttribute\", function() { return isElementAttribute; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isVnode\", function() { return isVnode; });\n/**\r\n * class2type dictionary\r\n * @private\r\n * @type {Object}\r\n */\nvar class2type = {};\n/**\r\n * Returns the internal JavaScript [Class]] of an object\r\n * @private\r\n * @param {Object} obj Object to check the class property of\r\n * @return {String} Only the class property of the object\r\n */\n\nvar typeOf = function typeOf(obj) {\n  return obj === null ? String(obj) : class2type[{}.toString.call(obj)] || 'object';\n};\n/**\r\n * Object containing our \"is\" methods\r\n * @private\r\n * @type {Object}\r\n */\n\n\nvar methods = {};\n/**\r\n * Creates type checks methods: isArray(), isBoolean(), isFunction(), and more.\r\n * @private\r\n * @param {Object} obj Object to check the class property of\r\n * @return {Boolean} Returns true if the passed object passes the type check, else false\r\n */\n\n['Array', 'Boolean', 'Date', 'Error', 'Function', 'Null', 'Number', 'Object', 'RegExp', 'String', 'Undefined'].forEach(function (type) {\n  var lcase = type.toLowerCase(); // populate class2type object with type\n\n  class2type[\"[object \".concat(type, \"]\")] = lcase; // create isType method\n\n  methods[\"is\".concat(type)] = function (obj) {\n    return typeOf(obj) === lcase;\n  };\n});\nvar isArray = methods.isArray,\n    isBoolean = methods.isBoolean,\n    isError = methods.isError,\n    isFunction = methods.isFunction,\n    isNull = methods.isNull,\n    isNumber = methods.isNumber,\n    isObject = methods.isObject,\n    isRegExp = methods.isRegExp,\n    isString = methods.isString,\n    isUndefined = methods.isUndefined;\n/**\r\n * Determines whether the passed object is numerical\r\n * @private\r\n * @param {Object} obj Object to check\r\n * @return {Boolean} Returns true if the passed object is a numerical, else false\r\n */\n\n\nvar isNumeric = function isNumeric(obj) {\n  return !isArray(obj) && obj - parseFloat(obj) >= 0;\n};\n/**\r\n * Determines whether the passed object is the window object\r\n * @private\r\n * @param {Object} obj Object to check\r\n * @return {Boolean} Returns true if the passed object is window, else false\r\n */\n\nvar isWindow = function isWindow(obj) {\n  return obj != null && obj === obj.window;\n};\n/**\r\n * Determines whether the passed object is a valid HTML Element\r\n * @private\r\n * @param {Object} obj Object to check\r\n * @return {Boolean} Returns true if the passed object is an element, else false\r\n */\n\nvar isHtml = function isHtml(obj) {\n  return obj instanceof Element;\n};\n/**\r\n * Determines whether the passed string is a valid event\r\n * @private\r\n * @param {String} event String containing the event\r\n * @return {Boolean} Returns true if the passed string is an event, else false\r\n */\n\nvar isEvent = function isEvent(event) {\n  return (event.startsWith('on') ? event : \"on\".concat(event)) in window;\n};\n/**\r\n * Determines whether the passed object is a valid element attribute\r\n * @private\r\n * @param {HTMLElement} element DOM Element to check the property against\r\n * @param {String} attribute String containing the property name to lookup\r\n * @return {Boolean} Returns true if the passed attribute exists inside the element\r\n */\n\nvar isElementAttribute = function isElementAttribute(element, attribute) {\n  return attribute in element || attribute === 'class' || attribute.startsWith('data-', 0);\n};\n/**\r\n * Determines wheter the passed object is a vnode\r\n * @private\r\n * @param {Object} vnode\r\n * @return {Boolean}\r\n */\n\nvar isVnode = function isVnode(vnode) {\n  return vnode.tagName !== undefined && vnode.props !== undefined && vnode.children !== undefined;\n};\n\n//# sourceURL=webpack://Power/./src/utils/is.js?");

/***/ }),

/***/ "./src/utils/log.js":
/*!**************************!*\
  !*** ./src/utils/log.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * wrapper object\r\n * @private\r\n * @type {Object}\r\n */\nvar Logger = {};\n/**\r\n * no operation function\r\n * @private\r\n * @param {Function}\r\n */\n\nvar noop = function noop() {};\n\n['log', 'debug', 'info', 'warn', 'error'].forEach(function (level) {\n  Logger[level] = window.console ? window.console[level] : noop;\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (Logger);\n\n//# sourceURL=webpack://Power/./src/utils/log.js?");

/***/ }),

/***/ "./src/utils/object.js":
/*!*****************************!*\
  !*** ./src/utils/object.js ***!
  \*****************************/
/*! exports provided: cloneObject, deepcloneObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cloneObject\", function() { return cloneObject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deepcloneObject\", function() { return deepcloneObject; });\n/**\r\n * shallow copies an object\r\n * @private\r\n * @param {Object} originalObject\r\n * @return {Object}\r\n */\nvar cloneObject = function cloneObject(originalObject) {\n  return Object.assign({}, originalObject);\n};\n/**\r\n * deep copies an object\r\n * @private\r\n * @param {Object} originalObject\r\n * @return {Object}\r\n */\n\nvar deepcloneObject = function deepcloneObject(originalObject) {\n  return JSON.parse(JSON.stringify(originalObject));\n};\n\n//# sourceURL=webpack://Power/./src/utils/object.js?");

/***/ })

/******/ });
}); 