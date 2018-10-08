// [AIV_SHORT]  Build version: 2.0.0-alpha.16 - Sunday, October 7th, 2018, 10:03:11 PM  
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return Component; });\n/* harmony import */ var _utils_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/is */ \"./src/utils/is/index.js\");\n/* harmony import */ var _utils_objects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/objects */ \"./src/utils/objects/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ \"./src/core/constants.js\");\n/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./observer */ \"./src/core/component/observer.js\");\n/* harmony import */ var _createElement_createElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../createElement/createElement */ \"./src/core/createElement/createElement.js\");\n/* harmony import */ var _vdom_diff__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../vdom/diff */ \"./src/core/vdom/diff.js\");\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\n\n\n\n\n\n\n/**\n * Power Component\n * @public\n * @class Component\n */\n\nvar Component =\n/*#__PURE__*/\nfunction () {\n  /**\n   * constructor of class Component\n   * @public\n   * @param {Object} data\n   */\n  function Component(componentData) {\n    _classCallCheck(this, Component); // Getting called before constructor\n\n\n    if (this.beforeComponentConstruct) {\n      this.beforeComponentConstruct(this);\n    } // block update\n\n\n    this.noUpdate = true; // the component gets the name of the class name\n\n    this.name = this.constructor.name; // check if there is any data\n\n    if (componentData) {\n      // clone the object to store the original data\n      this.data = Object(_utils_objects__WEBPACK_IMPORTED_MODULE_1__[\"cloneObject\"])(componentData); // start observing with defineProperty\n\n      Object(_observer__WEBPACK_IMPORTED_MODULE_3__[\"observerComponentData\"])(this, this.data); // merge the original data to the new observer object\n\n      Object(_observer__WEBPACK_IMPORTED_MODULE_3__[\"mergeComponentData\"])(this, this.data, componentData); // deactive the update block\n\n      this.noUpdate = false;\n    } // init node counter\n\n\n    this.nodeCounter = 0; // mark this class as a Power Component\n\n    this.IS_POWER_COMPONENT = true; // Getting called after constructor\n\n    if (this.afterComponentConstruct) {\n      this.afterComponentConstruct(this);\n    }\n  }\n  /**\n   * creates the elements of a component\n   * @public\n   * @return {Node}\n   */\n\n\n  _createClass(Component, [{\n    key: \"create\",\n    value: function create() {\n      if (this.beforeComponentCreate) {\n        this.beforeComponentCreate(this);\n      } // creating the component root element\n\n\n      this.node = document.createElement(this.name); // setting this element display to block by default\n\n      this.node.style.display = 'block';\n      this.node.setAttribute(_constants__WEBPACK_IMPORTED_MODULE_2__[\"DATA_COMPONENT_ATTRIBUTE\"], true); // get the vnode construct\n\n      this.componentVDom = this.render(); // get the template by call the render\n\n      this.template = Object(_createElement_createElement__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"])(this.componentVDom, this);\n      this.node.appendChild(this.template);\n\n      if (this.afterComponentCreate) {\n        this.afterComponentCreate(this);\n      }\n\n      return this.node;\n    }\n    /**\n     * changes the component state\n     * trigger the update methods\n     * @public\n     * @param {Function} stateHandler\n     */\n\n  }, {\n    key: \"setState\",\n    value: function setState(stateHandler) {\n      if (Object(_utils_is__WEBPACK_IMPORTED_MODULE_0__[\"isFunction\"])(stateHandler)) {\n        stateHandler();\n      } // update the component\n\n\n      this.update();\n    }\n    /**\n     * updates the component\n     */\n\n  }, {\n    key: \"update\",\n    value: function update() {\n      if (this.beforeComponentUpdate) {\n        this.beforeComponentUpdate(this);\n      }\n\n      var updatedComponentVDom = this.render();\n      this.patch(this.componentVDom, updatedComponentVDom);\n\n      if (this.afterComponentUpdate) {\n        this.afterComponentUpdate(this);\n      }\n    }\n    /**\n     * patch\n     */\n\n  }, {\n    key: \"patch\",\n    value: function patch(oldVnode, newVnode) {\n      Object(_vdom_diff__WEBPACK_IMPORTED_MODULE_5__[\"diff\"])(oldVnode, newVnode, this);\n    }\n    /**\n     * remove component and its childs\n     */\n\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      if (this.beforeComponentUnload) {\n        this.beforeComponentUnload(this);\n      }\n\n      var parent = this.node.parentElement;\n      parent.removeChild(this.node);\n\n      if (this.beforeComponentUnload) {\n        this.beforeComponentUnload(this);\n      }\n    }\n  }]);\n\n  return Component;\n}();\n\n//# sourceURL=webpack://Power/./src/core/component/component.js?");

/***/ }),

/***/ "./src/core/component/observer.js":
/*!****************************************!*\
  !*** ./src/core/component/observer.js ***!
  \****************************************/
/*! exports provided: observerComponentData, mergeComponentData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"observerComponentData\", function() { return observerComponentData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mergeComponentData\", function() { return mergeComponentData; });\n/* harmony import */ var _utils_objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/objects */ \"./src/utils/objects/index.js\");\n\n/**\n * observer component data\n * @private\n * @param {Class} component\n * @param {Object} componentData\n */\n\nvar observerComponentData = function observerComponentData(component, componentData) {\n  Object(_utils_objects__WEBPACK_IMPORTED_MODULE_0__[\"iterate\"])(componentData, function (prop, value) {\n    Object.defineProperty(componentData, prop, {\n      set: function set(newValue) {\n        this[\"_\".concat(prop)] = newValue;\n\n        if (!component.noUpdate) {\n          component.update();\n        }\n      },\n      get: function get() {\n        return this[\"_\".concat(prop)];\n      }\n    });\n  });\n};\n/**\n * merge Component data\n * @private\n * @param {Class} component\n * @param {Object} componentData\n * @param {Object} originalData\n */\n\nvar mergeComponentData = function mergeComponentData(component, componentData, originalData) {\n  Object(_utils_objects__WEBPACK_IMPORTED_MODULE_0__[\"iterate\"])(originalData, function (prop) {\n    return componentData[prop] = originalData[prop];\n  });\n};\n\n//# sourceURL=webpack://Power/./src/core/component/observer.js?");

/***/ }),

/***/ "./src/core/component/register.js":
/*!****************************************!*\
  !*** ./src/core/component/register.js ***!
  \****************************************/
/*! exports provided: registerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"registerComponent\", function() { return registerComponent; });\n/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/logger */ \"./src/utils/logger.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./src/core/constants.js\");\n/* harmony import */ var _utils_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/component */ \"./src/utils/component.js\");\n\n\n\n/**\n * create a component in the dom\n * @private\n * @param {DOM} component\n * @param {Class} _class\n */\n\nvar createDomComponent = function createDomComponent(component, _class) {\n  // get the attributes from the dom element\n  var componentAttributes = component.attributes; // create an empty data object\n\n  var dataObject = {}; // loop over the componentAttributes\n\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = componentAttributes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var prop = _step.value;\n      dataObject[prop.name] = Object(_utils_component__WEBPACK_IMPORTED_MODULE_2__[\"convertComponentValue\"])(prop.value);\n    } // create a class instance\n\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator.return != null) {\n        _iterator.return();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n\n  var PowerClass = new _class(dataObject); // check for hook // afterComponentMount\n\n  if (PowerClass.afterComponentMount) {\n    PowerClass.afterComponentMount(PowerClass);\n  } // replace node\n\n\n  component.parentNode.replaceChild(PowerClass.create(), component);\n};\n/**\n * register a Component\n * @public\n * @param {Class}\n */\n\n\nvar registerComponent = function registerComponent(_class) {\n  // if there is no _class\n  if (!_class) {\n    // TODO: Better class validation\n    _utils_logger__WEBPACK_IMPORTED_MODULE_0__[\"default\"].error('Cannot register Component');\n    return;\n  }\n\n  var componentName = _class.name; // get every component in dom\n\n  var componentsContainer = [].slice.call(document.querySelectorAll(componentName));\n\n  if (!componentsContainer.length) {\n    return;\n  }\n\n  componentsContainer.forEach(function (component) {\n    if (!component.getAttribute(_constants__WEBPACK_IMPORTED_MODULE_1__[\"DATA_COMPONENT_ATTRIBUTE\"])) {\n      createDomComponent(component, _class);\n    }\n  });\n};\n\n//# sourceURL=webpack://Power/./src/core/component/register.js?");

/***/ }),

/***/ "./src/core/constants.js":
/*!*******************************!*\
  !*** ./src/core/constants.js ***!
  \*******************************/
/*! exports provided: DATA_COMPONENT_ATTRIBUTE, DATA_NODE_ATTRIBUTE, IS_COMPONENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DATA_COMPONENT_ATTRIBUTE\", function() { return DATA_COMPONENT_ATTRIBUTE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DATA_NODE_ATTRIBUTE\", function() { return DATA_NODE_ATTRIBUTE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IS_COMPONENT\", function() { return IS_COMPONENT; });\n/**\n * Data power attribute\n * @private\n * @type {String}\n */\nvar DATA_COMPONENT_ATTRIBUTE = 'power-component';\n/**\n * data node id\n * @private\n * @type {String}\n */\n\nvar DATA_NODE_ATTRIBUTE = 'power-id';\n/**\n * Is Component\n * @private\n * @type {Boolean}\n */\n\nvar IS_COMPONENT = 'IS_COMPONENT';\n\n//# sourceURL=webpack://Power/./src/core/constants.js?");

/***/ }),

/***/ "./src/core/createElement/createElement.js":
/*!*************************************************!*\
  !*** ./src/core/createElement/createElement.js ***!
  \*************************************************/
/*! exports provided: createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/core/constants.js\");\n/* harmony import */ var _utils_objects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/objects */ \"./src/utils/objects/index.js\");\n/* harmony import */ var _utils_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/strings */ \"./src/utils/strings/index.js\");\n/* harmony import */ var _utils_is__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/is */ \"./src/utils/is/index.js\");\n\n\n\n\n/**\n * append Element string\n * @private\n * @param {HTMLElement} element\n * @param {String} text\n */\n\nvar appendElementText = function appendElementText(element, text) {\n  element.appendChild(document.createTextNode(text));\n};\n/**\n * Sets the style value on the specified element\n * @private\n * @param {HTMLElement} element\n * @param {String} styles\n */\n\n\nvar setElementStyles = function setElementStyles(element, styles) {\n  element.setAttribute('style', styles);\n};\n/**\n * Assigns a callback function to the event type on the specificed element that\n * will be called whenever the event is triggered\n * @private\n * @param {HTMLElement} element\n * @param {Event} event\n * @param {Function} handler\n */\n\n\nvar addEventListener = function addEventListener(element, event, handler) {\n  var eventType = Object(_utils_strings__WEBPACK_IMPORTED_MODULE_2__[\"startsWith\"])(event, 'on') ? event.substring(2, event.length) : event; // invoke the callback function in the context of the DOM element\n\n  element.addEventListener(eventType, function (e) {\n    return handler.call(element, e, element);\n  });\n};\n/**\n * Iterates over the passed props and assigns any attributes and/or binds\n * events to the specified element\n * @private\n * @param {HTMLElement} element\n * @param {Object} elementProps\n */\n\n\nvar decorateElement = function decorateElement(element, elementProps) {\n  // iterate over element props\n  Object(_utils_objects__WEBPACK_IMPORTED_MODULE_1__[\"iterate\"])(elementProps, function (prop) {\n    if (prop === 'style' || prop === 'styles') {\n      return setElementStyles(element, elementProps[prop]);\n    }\n\n    if (Object(_utils_is__WEBPACK_IMPORTED_MODULE_3__[\"isEvent\"])(prop)) {\n      return addEventListener(element, prop, elementProps[prop]);\n    }\n\n    if (Object(_utils_is__WEBPACK_IMPORTED_MODULE_3__[\"isElementAttribute\"])(element, prop)) {\n      var name = prop === 'className' ? 'class' : prop;\n      return element.setAttribute(name, elementProps[prop]);\n    }\n  });\n};\n/**\n * appends a vnode\n * @param {HTMLElement}\n * @param {Object}\n * @param {Class} Component\n */\n\n\nvar appendElementVnode = function appendElementVnode(element, vnode, Component) {\n  element.appendChild(createElement(vnode, Component));\n};\n/**\n * converts a vnode into an html element\n * @public\n * @param {Object} vnode\n * @returns {HTMLElement}\n */\n\n\nvar createElement = function createElement() {\n  var vnode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var Component = arguments.length > 1 ? arguments[1] : undefined; // create the element\n\n  var element = document.createElement(vnode.tagName); // if a component gets passed asign and increment node id\n\n  if (Component) {\n    Component.nodeCounter += 1; // add node id to the vnode\n    // if props is null create an empty object\n\n    if (vnode.props === null) {\n      vnode.props = {};\n    } // assign the id to the vnode\n\n\n    vnode.props[_constants__WEBPACK_IMPORTED_MODULE_0__[\"DATA_NODE_ATTRIBUTE\"]] = Component.nodeCounter; // add node id to the element\n\n    element.setAttribute(_constants__WEBPACK_IMPORTED_MODULE_0__[\"DATA_NODE_ATTRIBUTE\"], Component.nodeCounter);\n  }\n\n  if (Object(_utils_is__WEBPACK_IMPORTED_MODULE_3__[\"isObject\"])(vnode.props)) {\n    decorateElement(element, vnode.props);\n  }\n\n  vnode.children.forEach(function (child) {\n    if (Object(_utils_is__WEBPACK_IMPORTED_MODULE_3__[\"isString\"])(child)) {\n      appendElementText(element, child);\n    } else if (Object(_utils_is__WEBPACK_IMPORTED_MODULE_3__[\"isVNode\"])(child)) {\n      if (Component) {\n        appendElementVnode(element, child, Component);\n      } else {\n        appendElementVnode(element, child);\n      }\n    }\n  });\n  return element;\n};\n\n//# sourceURL=webpack://Power/./src/core/createElement/createElement.js?");

/***/ }),

/***/ "./src/core/render/render.js":
/*!***********************************!*\
  !*** ./src/core/render/render.js ***!
  \***********************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/logger */ \"./src/utils/logger.js\");\n/* harmony import */ var _utils_is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/is */ \"./src/utils/is/index.js\");\n/* harmony import */ var _createElement_createElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../createElement/createElement */ \"./src/core/createElement/createElement.js\");\n\n\n\n/**\n * renders a component or vnodes in the given root\n * @public\n * @param {Object|Function} model\n * @param {DOM Element} root\n */\n\nvar render = function render(model, root) {\n  // check if a root is given\n  if (!Object(_utils_is__WEBPACK_IMPORTED_MODULE_1__[\"isHtml\"])(root)) {\n    _utils_logger__WEBPACK_IMPORTED_MODULE_0__[\"default\"].error('No valid root given.');\n  } // check if model is neither a vdom or component\n\n\n  if (!Object(_utils_is__WEBPACK_IMPORTED_MODULE_1__[\"isVNode\"])(model) && !model.IS_POWER_COMPONENT) {\n    return render(new model(), root);\n  } // check if model is a component\n\n\n  if (model.IS_POWER_COMPONENT && model.beforeComponentLoad) {\n    model.beforeComponentLoad(model);\n  } // convert the vnodes / component into real dom elements\n\n\n  var domTree = model.IS_POWER_COMPONENT ? model.create() : Object(_createElement_createElement__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"])(model);\n\n  if (Object(_utils_is__WEBPACK_IMPORTED_MODULE_1__[\"isHtml\"])(domTree)) {\n    root.appendChild(domTree);\n  }\n\n  if (model.IS_POWER_COMPONENT && model.afterComponentLoad) {\n    model.afterComponentLoad(model);\n  }\n};\n\n//# sourceURL=webpack://Power/./src/core/render/render.js?");

/***/ }),

/***/ "./src/core/vdom/create.js":
/*!*********************************!*\
  !*** ./src/core/vdom/create.js ***!
  \*********************************/
/*! exports provided: createVnode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createVnode\", function() { return createVnode; });\n/**\n * create a VNODE\n * @public\n * @param {String} tag\n * @param {Object|Null} props\n * @param {Array|HTMLElement} childs\n * @returns {Object}\n */\nvar createVnode = function createVnode() {\n  var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';\n  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n\n  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    args[_key - 2] = arguments[_key];\n  }\n\n  return {\n    tagName: tag,\n    props: props,\n    children: args\n  };\n};\n\n//# sourceURL=webpack://Power/./src/core/vdom/create.js?");

/***/ }),

/***/ "./src/core/vdom/diff.js":
/*!*******************************!*\
  !*** ./src/core/vdom/diff.js ***!
  \*******************************/
/*! exports provided: diff, propsDiff, childrenDiff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"diff\", function() { return diff; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"propsDiff\", function() { return propsDiff; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"childrenDiff\", function() { return childrenDiff; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/core/constants.js\");\n/* harmony import */ var _utils_is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/is */ \"./src/utils/is/index.js\");\n/* harmony import */ var _utils_objects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/objects */ \"./src/utils/objects/index.js\");\n\n\n\n/**\n * working on difference between 2 vnodes\n * @private\n * @param {Object}  oldVNode\n * @param {Object}  newVNode\n * @param {Class}   Component\n */\n\nvar diff = function diff(oldVNode, newVNode, Component) {\n  // get the element id\n  var powerId = oldVNode.props[_constants__WEBPACK_IMPORTED_MODULE_0__[\"DATA_NODE_ATTRIBUTE\"]]; // check if newVNode props is null\n\n  if (newVNode.props === null) {\n    newVNode.props = {};\n  } // merge the node id\n\n\n  newVNode.props[_constants__WEBPACK_IMPORTED_MODULE_0__[\"DATA_NODE_ATTRIBUTE\"]] = oldVNode.props[_constants__WEBPACK_IMPORTED_MODULE_0__[\"DATA_NODE_ATTRIBUTE\"]]; // get the dom element to the vnode\n\n  var element = Component.node.querySelector(\"[\".concat(_constants__WEBPACK_IMPORTED_MODULE_0__[\"DATA_NODE_ATTRIBUTE\"], \"=\\\"\").concat(powerId, \"\\\"]\")); // compare the tag\n\n  if (oldVNode.tagName !== newVNode.tagName) {\n    console.log('tagName changed');\n  } // compare props\n\n\n  propsDiff(oldVNode.props, newVNode.props, element); // compare children\n\n  childrenDiff(oldVNode.children, newVNode.children, element, Component);\n};\n/**\n * checks out the difference between 2 objects\n * and merges it into the component element\n * @private\n * @param {Object}      oldObj\n * @param {Object}      newObj\n * @param {HTMLElement} element\n */\n\nvar propsDiff = function propsDiff(oldObj, newObj, element) {\n  // iterate through the old vnode\n  Object(_utils_objects__WEBPACK_IMPORTED_MODULE_2__[\"iterate\"])(oldObj, function (key) {\n    // check if the key still excist in the new props\n    if (!newObj[key]) {\n      // removing attribute from element\n      element.removeAttribute(key);\n    }\n  }); // iterate through the new vnode\n\n  Object(_utils_objects__WEBPACK_IMPORTED_MODULE_2__[\"iterate\"])(newObj, function (key, value) {\n    // check if there a new key\n    if (!oldObj[key] || newObj[key] !== oldObj[key]) {\n      // add attribute to element\n      element.setAttribute(key, value);\n    }\n  });\n};\n/**\n * checks out the difference between 2 Arrays\n * and merges it into the component element\n * @private\n * @param {Array}       oldChildren\n * @param {Array}       newChildren\n * @param {HTMLElement} element\n * @param {Class}       Component\n */\n\nvar childrenDiff = function childrenDiff(oldChildren, newChildren, element, Component) {\n  newChildren.forEach(function (child, index) {\n    if (Object(_utils_is__WEBPACK_IMPORTED_MODULE_1__[\"isString\"])(child) && child !== oldChildren[index]) {\n      var childText = document.createTextNode(child);\n      element.replaceChild(childText, element.childNodes[index]);\n    } else if (Object(_utils_is__WEBPACK_IMPORTED_MODULE_1__[\"isVNode\"])(child)) {\n      diff(oldChildren[index], child, Component);\n    }\n  });\n};\n\n//# sourceURL=webpack://Power/./src/core/vdom/diff.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: version, h, render, Component, registerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"version\", function() { return version; });\n/* harmony import */ var _core_vdom_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/vdom/create */ \"./src/core/vdom/create.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"h\", function() { return _core_vdom_create__WEBPACK_IMPORTED_MODULE_0__[\"createVnode\"]; });\n\n/* harmony import */ var _core_render_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/render/render */ \"./src/core/render/render.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _core_render_render__WEBPACK_IMPORTED_MODULE_1__[\"render\"]; });\n\n/* harmony import */ var _core_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/component/component */ \"./src/core/component/component.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return _core_component_component__WEBPACK_IMPORTED_MODULE_2__[\"Component\"]; });\n\n/* harmony import */ var _core_component_register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/component/register */ \"./src/core/component/register.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"registerComponent\", function() { return _core_component_register__WEBPACK_IMPORTED_MODULE_3__[\"registerComponent\"]; });\n\n\n\n\n\n/**\n * Power version\n * @public\n * @type {String}\n */\n\nvar version = '2.0.0-alpha.16';\n\n\n//# sourceURL=webpack://Power/./src/index.js?");

/***/ }),

/***/ "./src/utils/component.js":
/*!********************************!*\
  !*** ./src/utils/component.js ***!
  \********************************/
/*! exports provided: convertComponentValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"convertComponentValue\", function() { return convertComponentValue; });\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ \"./src/utils/is/index.js\");\n/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./strings */ \"./src/utils/strings/index.js\");\n\n\n/**\n * get string param\n * @private\n * @param {String} value\n * @return {String|Number}\n */\n\nvar getStringParam = function getStringParam(value) {\n  var val = value.trim();\n\n  if (Object(_is__WEBPACK_IMPORTED_MODULE_0__[\"isNumeric\"])(val)) {\n    return parseFloat(val);\n  }\n\n  return val;\n};\n/**\n * Convert components data\n * @private\n * @param {String}\n * @return {String|Number|Array|Object}\n */\n\n\nvar convertComponentValue = function convertComponentValue(value) {\n  var isArray = value[0] === '[' && value[value.length - 1] === ']';\n  var isJSON = value[0] === '{' && value[value.length - 1] === '}';\n\n  if (isArray || isJSON) {\n    if (isJSON) {\n      value = value.replace(/'/g, '\"');\n    }\n\n    return Object(_strings__WEBPACK_IMPORTED_MODULE_1__[\"convertStringValue\"])(value, isArray);\n  }\n\n  return getStringParam(value);\n};\n\n//# sourceURL=webpack://Power/./src/utils/component.js?");

/***/ }),

/***/ "./src/utils/is/common.js":
/*!********************************!*\
  !*** ./src/utils/is/common.js ***!
  \********************************/
/*! exports provided: isArray, isBoolean, isError, isFunction, isNull, isNumber, isObject, isRegExp, isString, isUndefined */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isArray\", function() { return isArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isBoolean\", function() { return isBoolean; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isError\", function() { return isError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isFunction\", function() { return isFunction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isNull\", function() { return isNull; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isNumber\", function() { return isNumber; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isObject\", function() { return isObject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isRegExp\", function() { return isRegExp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isString\", function() { return isString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isUndefined\", function() { return isUndefined; });\n/**\n * class2type dictionary\n * @private\n * @type {Object}\n */\nvar class2type = {};\n/**\n * Returns the internal JavaScript [Class]] of an object\n * @private\n * @param {Object} obj Object to check the class property of\n * @return {String} Only the class property of the object\n */\n\nvar typeOf = function typeOf(obj) {\n  return obj === null ? String(obj) : class2type[{}.toString.call(obj)] || 'object';\n};\n/**\n * Object containing our \"is\" methods\n * @private\n * @type {Object}\n */\n\n\nvar methods = {};\n/**\n * Creates type checks methods: isArray(), isBoolean(), isFunction(), and more.\n * @private\n * @param {Object} obj Object to check the class property of\n * @return {Boolean} Returns true if the passed object passes the type check, else false\n */\n\n['Array', 'Boolean', 'Date', 'Error', 'Function', 'Null', 'Number', 'Object', 'RegExp', 'String', 'Undefined'].forEach(function (type) {\n  var lcase = type.toLowerCase(); // populate class2type object with type\n\n  class2type[\"[object \".concat(type, \"]\")] = lcase; // create isType method\n\n  methods[\"is\".concat(type)] = function (obj) {\n    return typeOf(obj) === lcase;\n  };\n});\nvar isArray = methods.isArray,\n    isBoolean = methods.isBoolean,\n    isError = methods.isError,\n    isFunction = methods.isFunction,\n    isNull = methods.isNull,\n    isNumber = methods.isNumber,\n    isObject = methods.isObject,\n    isRegExp = methods.isRegExp,\n    isString = methods.isString,\n    isUndefined = methods.isUndefined;\n\n\n//# sourceURL=webpack://Power/./src/utils/is/common.js?");

/***/ }),

/***/ "./src/utils/is/index.js":
/*!*******************************!*\
  !*** ./src/utils/is/index.js ***!
  \*******************************/
/*! exports provided: isArray, isBoolean, isError, isEqual, isFunction, isNull, isNumber, isObject, isRegExp, isString, isUndefined, isElementAttribute, isEvent, isHtml, isNumeric, isVNode, isWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _isElementAttribute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isElementAttribute */ \"./src/utils/is/isElementAttribute.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isElementAttribute\", function() { return _isElementAttribute__WEBPACK_IMPORTED_MODULE_0__[\"isElementAttribute\"]; });\n\n/* harmony import */ var _isEqual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isEqual */ \"./src/utils/is/isEqual.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isEqual\", function() { return _isEqual__WEBPACK_IMPORTED_MODULE_1__[\"isEqual\"]; });\n\n/* harmony import */ var _isEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isEvent */ \"./src/utils/is/isEvent.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isEvent\", function() { return _isEvent__WEBPACK_IMPORTED_MODULE_2__[\"isEvent\"]; });\n\n/* harmony import */ var _isHtml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isHtml */ \"./src/utils/is/isHtml.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isHtml\", function() { return _isHtml__WEBPACK_IMPORTED_MODULE_3__[\"isHtml\"]; });\n\n/* harmony import */ var _isNumeric__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isNumeric */ \"./src/utils/is/isNumeric.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isNumeric\", function() { return _isNumeric__WEBPACK_IMPORTED_MODULE_4__[\"isNumeric\"]; });\n\n/* harmony import */ var _isVnode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isVnode */ \"./src/utils/is/isVnode.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isVNode\", function() { return _isVnode__WEBPACK_IMPORTED_MODULE_5__[\"isVNode\"]; });\n\n/* harmony import */ var _isWindow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isWindow */ \"./src/utils/is/isWindow.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isWindow\", function() { return _isWindow__WEBPACK_IMPORTED_MODULE_6__[\"isWindow\"]; });\n\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common */ \"./src/utils/is/common.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isArray\", function() { return _common__WEBPACK_IMPORTED_MODULE_7__[\"isArray\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isBoolean\", function() { return _common__WEBPACK_IMPORTED_MODULE_7__[\"isBoolean\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isError\", function() { return _common__WEBPACK_IMPORTED_MODULE_7__[\"isError\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isFunction\", function() { return _common__WEBPACK_IMPORTED_MODULE_7__[\"isFunction\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isNull\", function() { return _common__WEBPACK_IMPORTED_MODULE_7__[\"isNull\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isNumber\", function() { return _common__WEBPACK_IMPORTED_MODULE_7__[\"isNumber\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isObject\", function() { return _common__WEBPACK_IMPORTED_MODULE_7__[\"isObject\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isRegExp\", function() { return _common__WEBPACK_IMPORTED_MODULE_7__[\"isRegExp\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isString\", function() { return _common__WEBPACK_IMPORTED_MODULE_7__[\"isString\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isUndefined\", function() { return _common__WEBPACK_IMPORTED_MODULE_7__[\"isUndefined\"]; });\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://Power/./src/utils/is/index.js?");

/***/ }),

/***/ "./src/utils/is/isElementAttribute.js":
/*!********************************************!*\
  !*** ./src/utils/is/isElementAttribute.js ***!
  \********************************************/
/*! exports provided: isElementAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isElementAttribute\", function() { return isElementAttribute; });\n/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../strings */ \"./src/utils/strings/index.js\");\n\n/**\n * Determines whether the passed object is a valid element attribute\n * @private\n * @param {HTMLElement} element DOM Element to check the property against\n * @param {String} attribute String containing the property name to lookup\n * @return {Boolean} Returns true if the passed attribute exists inside the element\n */\n\nvar isElementAttribute = function isElementAttribute(element, attribute) {\n  return attribute in element || attribute === 'class' || Object(_strings__WEBPACK_IMPORTED_MODULE_0__[\"startsWith\"])(attribute, 'data-') || Object(_strings__WEBPACK_IMPORTED_MODULE_0__[\"startsWith\"])(attribute, 'power-');\n};\n\n//# sourceURL=webpack://Power/./src/utils/is/isElementAttribute.js?");

/***/ }),

/***/ "./src/utils/is/isEqual.js":
/*!*********************************!*\
  !*** ./src/utils/is/isEqual.js ***!
  \*********************************/
/*! exports provided: isEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isEqual\", function() { return isEqual; });\n/**\n * Performs a deep comparison between two values to determine if they are equivalent.\n * @param  {*} x     The value to compare\n * @param  {*} y     The other value to compare\n * @return {Boolean} Returns true if the values are equivalent, else false.\n */\nvar isEqual = function isEqual(x, y) {\n  if (x === null || x === undefined || y === null || y === undefined) {\n    return x === y;\n  }\n\n  if (x.constructor !== y.constructor) {\n    return false;\n  } // functions and regexp should strictly equal each other\n\n\n  if (x instanceof Function || x instanceof RegExp) {\n    return x === y;\n  } // strict equality check or matching valueOf\n\n\n  if (x === y || x.valueOf() === y.valueOf()) {\n    return true;\n  }\n\n  if (Array.isArray(x) && x.length !== y.length) {\n    return false;\n  } // if dates, valueOf would've have matched\n\n\n  if (x instanceof Date) {\n    return false;\n  }\n\n  if (!(x instanceof Object) || !(y instanceof Object)) {\n    return false;\n  } // recursive object equality check\n\n\n  var keys = Object.keys(x);\n  return Object.keys(y).every(function (key) {\n    return keys.indexOf(key) !== -1;\n  }) && keys.every(function (key) {\n    return isEqual(x[key], y[key]);\n  });\n};\n\n//# sourceURL=webpack://Power/./src/utils/is/isEqual.js?");

/***/ }),

/***/ "./src/utils/is/isEvent.js":
/*!*********************************!*\
  !*** ./src/utils/is/isEvent.js ***!
  \*********************************/
/*! exports provided: isEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isEvent\", function() { return isEvent; });\n/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../strings */ \"./src/utils/strings/index.js\");\n\n/**\n * Determines whether the passed string is a valid event\n * @private\n * @param {String} event String containing the event\n * @return {Boolean} Returns true if the passed string is an event, else false\n */\n\nvar isEvent = function isEvent(event) {\n  return (Object(_strings__WEBPACK_IMPORTED_MODULE_0__[\"startsWith\"])(event, 'on') ? event : \"on\".concat(event)) in window;\n};\n\n//# sourceURL=webpack://Power/./src/utils/is/isEvent.js?");

/***/ }),

/***/ "./src/utils/is/isHtml.js":
/*!********************************!*\
  !*** ./src/utils/is/isHtml.js ***!
  \********************************/
/*! exports provided: isHtml */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isHtml\", function() { return isHtml; });\n/**\n * Determines whether the passed object is a valid HTML Element\n * @private\n * @param {Object} obj Object to check\n * @return {Boolean} Returns true if the passed object is an element, else false\n */\nvar isHtml = function isHtml(obj) {\n  return obj instanceof Element;\n};\n\n//# sourceURL=webpack://Power/./src/utils/is/isHtml.js?");

/***/ }),

/***/ "./src/utils/is/isNumeric.js":
/*!***********************************!*\
  !*** ./src/utils/is/isNumeric.js ***!
  \***********************************/
/*! exports provided: isNumeric */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isNumeric\", function() { return isNumeric; });\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ \"./src/utils/is/common.js\");\n\n/**\n * Determines whether the passed object is numerical\n * @private\n * @param {Object} obj Object to check\n * @return {Boolean} Returns true if the passed object is a numerical, else false\n */\n\nvar isNumeric = function isNumeric(obj) {\n  return !Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"isArray\"])(obj) && obj - parseFloat(obj) >= 0;\n};\n\n//# sourceURL=webpack://Power/./src/utils/is/isNumeric.js?");

/***/ }),

/***/ "./src/utils/is/isVnode.js":
/*!*********************************!*\
  !*** ./src/utils/is/isVnode.js ***!
  \*********************************/
/*! exports provided: isVNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isVNode\", function() { return isVNode; });\n/**\n * Determines wheter the passed object is a vnode\n * @private\n * @param {Object} vnode\n * @return {Boolean}\n */\nvar isVNode = function isVNode(vnode) {\n  return vnode.tagName !== undefined && vnode.props !== undefined && vnode.children !== undefined;\n};\n\n//# sourceURL=webpack://Power/./src/utils/is/isVnode.js?");

/***/ }),

/***/ "./src/utils/is/isWindow.js":
/*!**********************************!*\
  !*** ./src/utils/is/isWindow.js ***!
  \**********************************/
/*! exports provided: isWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isWindow\", function() { return isWindow; });\n/**\n * Determines whether the passed object is the window object\n * @private\n * @param {Object} obj Object to check\n * @return {Boolean} Returns true if the passed object is window, else false\n */\nvar isWindow = function isWindow(obj) {\n  return obj != null && obj === obj.window;\n};\n\n//# sourceURL=webpack://Power/./src/utils/is/isWindow.js?");

/***/ }),

/***/ "./src/utils/logger.js":
/*!*****************************!*\
  !*** ./src/utils/logger.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * wrapper object\n * @private\n * @type {Object}\n */\nvar Logger = {};\n/**\n * no operation function\n * @private\n * @param {Function}\n */\n\nvar noop = function noop() {};\n\n['log', 'debug', 'info', 'warn', 'error'].forEach(function (level) {\n  Logger[level] = window.console ? window.console[level] : noop;\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (Logger);\n\n//# sourceURL=webpack://Power/./src/utils/logger.js?");

/***/ }),

/***/ "./src/utils/objects/clone.js":
/*!************************************!*\
  !*** ./src/utils/objects/clone.js ***!
  \************************************/
/*! exports provided: cloneObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cloneObject\", function() { return cloneObject; });\n/**\n * shallow copies an object\n * @private\n * @param {Object} obj\n * @return {Object}\n */\nvar cloneObject = function cloneObject(obj) {\n  return Object.assign({}, obj);\n};\n\n//# sourceURL=webpack://Power/./src/utils/objects/clone.js?");

/***/ }),

/***/ "./src/utils/objects/deepClone.js":
/*!****************************************!*\
  !*** ./src/utils/objects/deepClone.js ***!
  \****************************************/
/*! exports provided: deepCloneObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deepCloneObject\", function() { return deepCloneObject; });\n/**\n * deep copies an object\n * @private\n * @param {Object} originalObject\n * @return {Object}\n */\nvar deepCloneObject = function deepCloneObject(obj) {\n  return JSON.parse(JSON.stringify(obj));\n};\n\n//# sourceURL=webpack://Power/./src/utils/objects/deepClone.js?");

/***/ }),

/***/ "./src/utils/objects/index.js":
/*!************************************!*\
  !*** ./src/utils/objects/index.js ***!
  \************************************/
/*! exports provided: cloneObject, deepCloneObject, iterate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clone */ \"./src/utils/objects/clone.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"cloneObject\", function() { return _clone__WEBPACK_IMPORTED_MODULE_0__[\"cloneObject\"]; });\n\n/* harmony import */ var _deepClone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deepClone */ \"./src/utils/objects/deepClone.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deepCloneObject\", function() { return _deepClone__WEBPACK_IMPORTED_MODULE_1__[\"deepCloneObject\"]; });\n\n/* harmony import */ var _iterate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iterate */ \"./src/utils/objects/iterate.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"iterate\", function() { return _iterate__WEBPACK_IMPORTED_MODULE_2__[\"iterate\"]; });\n\n\n\n\n\n\n//# sourceURL=webpack://Power/./src/utils/objects/index.js?");

/***/ }),

/***/ "./src/utils/objects/iterate.js":
/*!**************************************!*\
  !*** ./src/utils/objects/iterate.js ***!
  \**************************************/
/*! exports provided: iterate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"iterate\", function() { return iterate; });\n/**\n * Iterates over an Object executing a callback function on each property. This allows\n * for iterative breaking at anytime by returning false\n * @param  {Object}   obj The Object to iterate over\n * @param  {Function} fn  The callback function to execute on each property\n *\n * iterate({ hello: 'world', name: 'kieran' }, (key, value, index) => console.log(key, value, index));\n *\n */\nvar iterate = function iterate(obj, fn) {\n  var count = 0;\n\n  for (var key in obj) {\n    var result = fn.call(obj[key], key, obj[key], count++);\n\n    if (result === false) {\n      break;\n    }\n  }\n};\n\n//# sourceURL=webpack://Power/./src/utils/objects/iterate.js?");

/***/ }),

/***/ "./src/utils/strings/convertStringValue.js":
/*!*************************************************!*\
  !*** ./src/utils/strings/convertStringValue.js ***!
  \*************************************************/
/*! exports provided: convertStringValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"convertStringValue\", function() { return convertStringValue; });\n/**\n * Converts a string value to an array or object\n * @private\n * @param {String} value\n * @returns {*} Array, Object or the original value if parse fails\n */\nvar convertStringValue = function convertStringValue(value, isArray) {\n  // remove first and last letter\n  var contents = value.substring(1, value.length - 1); // check an empty object or array was set\n\n  var isEmpty = contents.trim() === '';\n\n  if (!isArray) {\n    var result = value;\n\n    if (isEmpty) {\n      return {};\n    }\n\n    try {\n      result = JSON.parse(value);\n    } catch (error) {\n      result = value;\n    }\n\n    return result;\n  } // split into chunks\n\n\n  return isEmpty ? [] : contents.split(',');\n};\n\n//# sourceURL=webpack://Power/./src/utils/strings/convertStringValue.js?");

/***/ }),

/***/ "./src/utils/strings/index.js":
/*!************************************!*\
  !*** ./src/utils/strings/index.js ***!
  \************************************/
/*! exports provided: convertStringValue, startsWith */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _convertStringValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./convertStringValue */ \"./src/utils/strings/convertStringValue.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"convertStringValue\", function() { return _convertStringValue__WEBPACK_IMPORTED_MODULE_0__[\"convertStringValue\"]; });\n\n/* harmony import */ var _startsWith__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startsWith */ \"./src/utils/strings/startsWith.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"startsWith\", function() { return _startsWith__WEBPACK_IMPORTED_MODULE_1__[\"startsWith\"]; });\n\n\n\n\n\n//# sourceURL=webpack://Power/./src/utils/strings/index.js?");

/***/ }),

/***/ "./src/utils/strings/startsWith.js":
/*!*****************************************!*\
  !*** ./src/utils/strings/startsWith.js ***!
  \*****************************************/
/*! exports provided: startsWith, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startsWith\", function() { return startsWith; });\n/**\n * Determines whether a string begins with the characters of a specified string, returning true or false.\n * @param  {String} text     The text string that will be searched\n * @param  {String} search   The characters to be searched for at the start of this string\n * @param  {Number} position The position in the text to begin searching - defaults to 0 (optional)\n * @return {Boolean}         True if the given characters are found at the beginning of the string; otherwise, false\n */\nvar startsWith = function startsWith(text, search, position) {\n  return text.substr(!position || position < 0 ? 0 : +position, search.length) === search;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (startsWith);\n\n//# sourceURL=webpack://Power/./src/utils/strings/startsWith.js?");

/***/ })

/******/ });
}); 