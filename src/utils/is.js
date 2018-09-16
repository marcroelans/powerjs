
/**
 * class2type dictionary
 *
 * @type {Object}
 */
const class2type = {};

/**
 * Returns the internal JavaScript [Class]] of an object
 *
 * @param {Object} obj Object to check the class property of
 * @return {String} Only the class property of the object
 */
const typeOf = obj => (obj === null ? String(obj) : class2type[{}.toString.call(obj)] || 'object');

/**
 * Object containing our "is" methods
 *
 * @type {Object}
 */
const methods = {};

/**
 * Creates type checks methods: isArray(), isBoolean(), isFunction(), and more.
 *
 * @param {Object} obj Object to check the class property of
 * @return {Boolean} Returns true if the passed object passes the type check, else false
 */
['Array', 'Boolean', 'Date', 'Error', 'Function', 'Null', 'Number', 'Object', 'RegExp', 'String', 'Undefined'].forEach((type) => {
  const lcase = type.toLowerCase();
  // populate class2type object with type
  class2type[`[object ${type}]`] = lcase;
  // create isType method
  methods[`is${type}`] = obj => typeOf(obj) === lcase;
});

export const {
  isArray,
  isBoolean,
  isError,
  isFunction,
  isNull,
  isNumber,
  isObject,
  isRegExp,
  isString,
  isUndefined,
} = methods;

/**
 * Determines whether the passed object is the window object
 *
 * @param {Object} obj Object to check
 * @return {Boolean} Returns true if the passed object is window, else false
 */
export const isWindow = obj => obj != null && obj === obj.window;

/**
 * Determines whether the passed object is a valid HTML Element
 *
 * @param {Object} obj Object to check
 * @return {Boolean} Returns true if the passed object is an element, else false
 */
export const isHtml = obj => obj instanceof Element;

/**
 * Determines whether the passed string is a valid event
 *
 * @param {String} event String containing the event
 * @return {Boolean} Returns true if the passed string is an event, else false
 */
export const isEvent = event => (event.startsWith('on') ? event : `on${event}`) in window;

/**
 * Determines whether the passed object is a valid element attribte
 *
 * @param {HTMLElement} element DOM Element to check the property against
 * @param {String} attribute String containing the property name to lookup
 * @return {Boolean} Returns true if the passed attribute exists inside the element
 */
export const isElementAttribute = (element, attribute) => (
  attribute in element || attribute === 'class' || attribute.startsWith('data-', 0)
);
