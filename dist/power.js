// [AIV_SHORT]  Build version: 2.0.0-alpha.11 - Saturday, September 22nd, 2018, 2:05:45 PM  
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/utils/is.js
/**
 * class2type dictionary
 * @private
 * @type {Object}
 */
var class2type = {};
/**
 * Returns the internal JavaScript [Class]] of an object
 * @private
 * @param {Object} obj Object to check the class property of
 * @return {String} Only the class property of the object
 */

var typeOf = function typeOf(obj) {
  return obj === null ? String(obj) : class2type[{}.toString.call(obj)] || 'object';
};
/**
 * Object containing our "is" methods
 * @private
 * @type {Object}
 */


var methods = {};
/**
 * Creates type checks methods: isArray(), isBoolean(), isFunction(), and more.
 * @private
 * @param {Object} obj Object to check the class property of
 * @return {Boolean} Returns true if the passed object passes the type check, else false
 */

['Array', 'Boolean', 'Date', 'Error', 'Function', 'Null', 'Number', 'Object', 'RegExp', 'String', 'Undefined'].forEach(function (type) {
  var lcase = type.toLowerCase(); // populate class2type object with type

  class2type["[object ".concat(type, "]")] = lcase; // create isType method

  methods["is".concat(type)] = function (obj) {
    return typeOf(obj) === lcase;
  };
});
var isArray = methods.isArray,
    isBoolean = methods.isBoolean,
    isError = methods.isError,
    isFunction = methods.isFunction,
    isNull = methods.isNull,
    isNumber = methods.isNumber,
    isObject = methods.isObject,
    isRegExp = methods.isRegExp,
    isString = methods.isString,
    isUndefined = methods.isUndefined;
/**
 * Determines whether the passed object is numerical
 * @private
 * @param {Object} obj Object to check
 * @return {Boolean} Returns true if the passed object is a numerical, else false
 */


var isNumeric = function isNumeric(obj) {
  return !isArray(obj) && obj - parseFloat(obj) >= 0;
};
/**
 * Determines whether the passed object is the window object
 * @private
 * @param {Object} obj Object to check
 * @return {Boolean} Returns true if the passed object is window, else false
 */

var isWindow = function isWindow(obj) {
  return obj != null && obj === obj.window;
};
/**
 * Determines whether the passed object is a valid HTML Element
 * @private
 * @param {Object} obj Object to check
 * @return {Boolean} Returns true if the passed object is an element, else false
 */

var isHtml = function isHtml(obj) {
  return obj instanceof Element;
};
/**
 * Determines whether the passed string is a valid event
 * @private
 * @param {String} event String containing the event
 * @return {Boolean} Returns true if the passed string is an event, else false
 */

var isEvent = function isEvent(event) {
  return (event.startsWith('on') ? event : "on".concat(event)) in window;
};
/**
 * Determines whether the passed object is a valid element attribte
 * @private
 * @param {HTMLElement} element DOM Element to check the property against
 * @param {String} attribute String containing the property name to lookup
 * @return {Boolean} Returns true if the passed attribute exists inside the element
 */

var isElementAttribute = function isElementAttribute(element, attribute) {
  return attribute in element || attribute === 'class' || attribute.startsWith('data-', 0);
};
// CONCATENATED MODULE: ./src/core/createElement/createElement.js

/**
  * append Element string
  * @private
  * @param {HTMLElement} element
  * @param {String} text
  */

var appendElementText = function appendElementText(element, text) {
  element.appendChild(document.createTextNode(text));
};
/**
  * append Element Styles
  * @private
  * @param {HTMLElement} element
  * @param {String} styles
  */


var appendElementStyles = function appendElementStyles(element, styles) {
  element.setAttribute('style', styles);
};
/**
  * append Element Event
  * @private
  * @param {HTMLElement} element
  * @param {Event} event
  * @param {*} handler
  */


var appendElementEvent = function appendElementEvent(element, event, handler) {
  var eventListener = event.startsWith('on') ? event.substring(2, event.length) : event;
  element.addEventListener(eventListener, function (e) {
    // pass the event and element into the funtion
    handler(e, element);
  });
};
/**
  * append Element Object
  * @private
  * @param {HTMLElement} element
  * @param {Object} elementProps
  */


var createElement_appendElementObject = function appendElementObject(element, elementProps) {
  // Loop throught the element props
  Object.keys(elementProps).forEach(function (prop) {
    if (prop === 'style' || prop === 'styles') {
      appendElementStyles(element, elementProps[prop]);
    } else if (isEvent(prop)) {
      appendElementEvent(element, prop, elementProps[prop]);
    } else if (isElementAttribute(element, prop)) {
      element.setAttribute(prop, elementProps[prop]);
    }
  });
};
/**
  * append Element Array
  * @private
  * @param {HTMLElement} element
  * @param {*} childrens
  */


var createElement_appendElementArray = function appendElementArray(element, childrens) {
  // loop thought the elemnt childs
  childrens.forEach(function (child) {
    if (isArray(child)) {
      appendElementArray(element, child);
    } else if (isHtml(child)) {
      element.appendChild(child);
    } else if (isString(child)) {
      appendElementText(element, child);
    } else if (isObject(child)) {
      createElement_appendElementObject(element, child);
    }
  });
};
/**
  * create Element
  * @public
  * @param {String} tag
  * @param {Object|Null} props
  * @param {Array|HTMLElement} childs
  * @returns {HTMLElement}
  */


var createElement_createElement = function createElement() {
  var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  // create the element
  var element = document.createElement(tag);

  if (isObject(props) && props !== null) {
    createElement_appendElementObject(element, props);
  }

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  args.forEach(function (arg) {
    if (isString(arg)) {
      appendElementText(element, arg);
    } else if (isHtml(arg)) {
      element.appendChild(arg);
    }
  });
  return element;
};
// CONCATENATED MODULE: ./src/utils/log.js
/**
  * wrapper object
  * @private
  * @type {Object}
  */
var Logger = {};
/**
  * no operation function
  * @private
  * @param {Function}
  */

var noop = function noop() {};

['log', 'debug', 'info', 'warn', 'error'].forEach(function (level) {
  Logger[level] = window.console ? window.console[level] : noop;
});
/* harmony default export */ var log = (Logger);
// CONCATENATED MODULE: ./src/core/render/render.js


/**
  * render vdom elements or component
  * @public
  * @param {Object|Function} model
  * @param {DOM Element} root
  */

var render_render = function render(model, root) {
  // Check if model is a Power Component
  var htmlModel = model.IS_POWER_COMPONENT ? model.create() : model; // return if there is no valid model given

  if (!htmlModel) {
    log.error('There is no valid model given');
    return;
  } // return if there is no valid root given


  if (!isHtml(htmlModel)) {
    log.error('There is no valid root given');
    return;
  }

  if (isArray(htmlModel)) {
    // get all the elements
    htmlModel.forEach(function (item) {
      if (isHtml(item)) {
        root.appendChild(item);
      }
    });
  } else {
    // there is just one item in the root
    root.appendChild(htmlModel);
  }

  if (model.IS_POWER_COMPONENT && model.afterComponentMount) {
    model.afterComponentMount(model);
  }
};
// CONCATENATED MODULE: ./src/utils/object.js
/**
  * clones an object
  * @private
  * @param {Object} originalObject
  * @return {Object}
  */
var cloneObject = function cloneObject(originalObject) {
  return Object.assign({}, originalObject);
};
/**
  * deep clones an object
  * @private
  * @param {Object} originalObject
  * @return {Object}
  */

var deepcloneObject = function deepcloneObject(originalObject) {
  return JSON.parse(JSON.stringify(originalObject));
};
// CONCATENATED MODULE: ./src/utils/dom.js
/**
  * remove all child nodes
  * @private
  * @param {Node} node
  */
var removeChilds = function removeChilds(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
};
// CONCATENATED MODULE: ./src/core/constants.js
/**
  * Data power attribute
  * @private
  * @type {String}
  */
var DATA_COMPONENT_ATTRIBUTE = 'data-power-component';
/**
  * Is Component
  * @private
  * @type {Boolean}
  */

var IS_COMPONENT = 'IS_COMPONENT';
// CONCATENATED MODULE: ./src/core/component/observer.js
/**
  * observer component data
  * @private
  * @param {Class} component
  * @param {Object} componentData
  */
var observerComponentData = function observerComponentData(component, componentData) {
  Object.keys(componentData).forEach(function (keys) {
    Object.defineProperty(componentData, keys, {
      set: function set(newValue) {
        this["_".concat(keys)] = newValue;

        if (!component.noUpdate) {
          component.update();
        }
      },
      get: function get() {
        return this["_".concat(keys)];
      }
    });
  });
};
/**
  * merge Component data
  * @private
  * @param {Class} component
  * @param {Object} componentData
  * @param {Object} originalData
  */

var mergeComponentData = function mergeComponentData(component, componentData, originalData) {
  Object.keys(originalData).forEach(function (keys) {
    componentData[keys] = originalData[keys];
  });
};
// CONCATENATED MODULE: ./src/core/component/component.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






/**
  * Power Component
  * @public
  * @class Component
  */

var component_Component =
/*#__PURE__*/
function () {
  /**
    * constructor of class Component
    * @public
    * @param {Object} data
    */
  function Component(componentData) {
    _classCallCheck(this, Component);

    // block update
    this.noUpdate = true; // the component gets the name of the class name

    this.name = this.constructor.name; // Getting called before constructor

    if (this.beforeComponentMount) {
      this.beforeComponentMount(this);
    } // check if there is any data


    if (componentData) {
      // clone the object to store the original data
      this.data = cloneObject(componentData); // start observing with defineProperty

      observerComponentData(this, this.data); // merge the original data to the new observer object

      mergeComponentData(this, this.data, componentData); // deactive the update block

      this.noUpdate = false;
    } // mark this class as a Power Component


    this.IS_POWER_COMPONENT = true;
  }
  /**
    * creates the elements of a component
    * @public
    * @return {Node}
    */


  _createClass(Component, [{
    key: "create",
    value: function create() {
      var _this = this;

      // creating the component root element
      this.node = document.createElement(this.name); // setting this element display to block by default

      this.node.style.display = 'block';
      this.node.setAttribute(DATA_COMPONENT_ATTRIBUTE, true); // get the template by call the render

      var template = this.render();

      if (isArray(template)) {
        template.forEach(function (item) {
          if (item !== null) {
            _this.node.appendChild(item);
          }
        });
      } else {
        this.node.appendChild(template);
      }

      return this.node;
    }
    /**
      * changes the component state
      * trigger the update methods
      * @public
      * @param {Function} stateHandler
      */

  }, {
    key: "setState",
    value: function setState(stateHandler) {
      if (isFunction(stateHandler)) {
        stateHandler();
      } // update the component


      this.update();
    }
    /**
      * updates the component
      */

  }, {
    key: "update",
    value: function update() {
      var _this2 = this;

      var template = this.render(); // clear the view

      removeChilds(this.node); // rerender

      if (isArray(template)) {
        template.forEach(function (item) {
          if (item !== null) {
            _this2.node.appendChild(item);
          }
        });
      } else {
        this.node.appendChild(template);
      }
    }
    /**
      * remove component and its childs
      */

  }, {
    key: "destroy",
    value: function destroy() {
      var parent = this.node.parentElement;
      parent.removeChild(this.node);
    }
  }]);

  return Component;
}();
// CONCATENATED MODULE: ./src/core/component/utils.js

/**
  * Converts a string value to an array or object
  * @private
  * @param {String} value
  * @returns {*} Array, Object or the original value if parse fails
  */

var convertStringValue = function convertStringValue(value, isArray) {
  // remove first and last letter
  var contents = value.substring(1, value.length - 1); // check an empty object or array was set

  var isEmpty = contents.trim() === '';

  if (!isArray) {
    var result = value;

    if (isEmpty) {
      return {};
    }

    try {
      result = JSON.parse(value);
    } catch (error) {
      result = value;
    }

    return result;
  } // split into chunks


  return isEmpty ? [] : contents.split(',');
};
/**
  * get string param
  * @private
  * @param {String} value
  * @return {String|Number}
  */


var utils_getStringParam = function getStringParam(value) {
  var val = value.trim();

  if (isNumeric(val)) {
    return parseFloat(val);
  }

  return val;
};
/**
  * Convert components data
  * @private
  * @param {String}
  * @return {String|Number|Array|Object}
  */


var convertComponentValue = function convertComponentValue(value) {
  var isArray = value[0] === '[' && value[value.length - 1] === ']';
  var isJSON = value[0] === '{' && value[value.length - 1] === '}';

  if (isArray || isJSON) {
    if (isJSON) {
      value = value.replace(/'/g, '"');
    }

    return convertStringValue(value, isArray);
  }

  return utils_getStringParam(value);
};
// CONCATENATED MODULE: ./src/core/component/registerComponent.js



/**
  * create a component in the dom
  * @private
  * @param {DOM} component
  * @param {Class} _class
  */

var registerComponent_createDomComponent = function createDomComponent(component, _class) {
  // get the attributes from the dom element
  var componentAttributes = component.attributes; // create an empty data object

  var dataObject = {}; // loop over the componentAttributes

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = componentAttributes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var prop = _step.value;
      dataObject[prop.name] = convertComponentValue(prop.value);
    } // create a class instance

  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var PowerClass = new _class(dataObject); // check for hook // afterComponentMount

  if (PowerClass.afterComponentMount) {
    PowerClass.afterComponentMount(PowerClass);
  } // replace node


  component.parentNode.replaceChild(PowerClass.create(), component);
};
/**
  * register a Component
  * @public
  * @param {Class}
  */


var registerComponent_registerComponent = function registerComponent(_class) {
  // if there is no _class
  if (!_class) {
    // TODO: Better class validation
    log.error('Cannot register Component');
    return;
  }

  var componentName = _class.name; // get every component in dom

  var componentsContainer = [].slice.call(document.querySelectorAll(componentName));

  if (componentsContainer.length === 0) {
    return;
  }

  componentsContainer.forEach(function (component) {
    if (!component.getAttribute(DATA_COMPONENT_ATTRIBUTE)) {
      registerComponent_createDomComponent(component, _class);
    }
  });
};
// CONCATENATED MODULE: ./src/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* concated harmony reexport createElement */__webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement_createElement; });
/* concated harmony reexport h */__webpack_require__.d(__webpack_exports__, "h", function() { return createElement_createElement; });
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "render", function() { return render_render; });
/* concated harmony reexport Component */__webpack_require__.d(__webpack_exports__, "Component", function() { return component_Component; });
/* concated harmony reexport registerComponent */__webpack_require__.d(__webpack_exports__, "registerComponent", function() { return registerComponent_registerComponent; });




/**
  * Power version
  * @public
  * @type {String}
  */

var version = '2.0.0-alpha.11';


/***/ })
/******/ ]);
}); 