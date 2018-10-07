import { startsWith } from './helpers';

/**
 * class2type dictionary
 * @private
 * @type {Object}
 */
const class2type = {};

/**
 * Returns the internal JavaScript [Class]] of an object
 * @private
 * @param {Object} obj Object to check the class property of
 * @return {String} Only the class property of the object
 */
const typeOf = (obj) => (obj === null ? String(obj) : class2type[{}.toString.call(obj)] || 'object');

/**
 * Object containing our "is" methods
 * @private
 * @type {Object}
 */
const methods = {};

/**
 * Creates type checks methods: isArray(), isBoolean(), isFunction(), and more.
 * @private
 * @param {Object} obj Object to check the class property of
 * @return {Boolean} Returns true if the passed object passes the type check, else false
 */
['Array', 'Boolean', 'Date', 'Error', 'Function', 'Null', 'Number', 'Object', 'RegExp', 'String', 'Undefined'].forEach((type) => {
  const lcase = type.toLowerCase();
  // populate class2type object with type
  class2type[`[object ${type}]`] = lcase;
  // create isType method
  methods[`is${type}`] = (obj) => typeOf(obj) === lcase;
});

export const { isArray, isBoolean, isError, isFunction, isNull, isNumber, isObject, isRegExp, isString, isUndefined } = methods;

/**
 * Determines whether the passed object is numerical
 * @private
 * @param {Object} obj Object to check
 * @return {Boolean} Returns true if the passed object is a numerical, else false
 */
export const isNumeric = (obj) => !isArray(obj) && obj - parseFloat(obj) >= 0;

/**
 * Determines whether the passed object is the window object
 * @private
 * @param {Object} obj Object to check
 * @return {Boolean} Returns true if the passed object is window, else false
 */
export const isWindow = (obj) => obj != null && obj === obj.window;

/**
 * Determines whether the passed object is a valid HTML Element
 * @private
 * @param {Object} obj Object to check
 * @return {Boolean} Returns true if the passed object is an element, else false
 */
export const isHtml = (obj) => obj instanceof Element;

/**
 * Determines whether the passed string is a valid event
 * @private
 * @param {String} event String containing the event
 * @return {Boolean} Returns true if the passed string is an event, else false
 */
export const isEvent = (event) => (startsWith(event, 'on') ? event : `on${event}`) in window;

/**
 * Determines whether the passed object is a valid element attribute
 * @private
 * @param {HTMLElement} element DOM Element to check the property against
 * @param {String} attribute String containing the property name to lookup
 * @return {Boolean} Returns true if the passed attribute exists inside the element
 */
export const isElementAttribute = (element, attribute) => attribute in element || attribute === 'class' || startsWith(attribute, 'data-') || startsWith(attribute, 'power-');

/**
 * Determines wheter the passed object is a vnode
 * @private
 * @param {Object} vnode
 * @return {Boolean}
 */
export const isVNode = (vnode) => vnode.tagName !== undefined && vnode.props !== undefined && vnode.children !== undefined;
