/**
  * validate an Array
  *
  * @param {*} expectedArray
  * @returns {Boolean}
  */
export const isArray = expectedArray => Array.isArray(expectedArray);

/**
  * validate a Number
  *
  * @param {*} expectedNumber
  * @returns {Boolean}
  */
export const isNumber = expectedNumber => Number.isNumber(expectedNumber);

/**
  * validate a Boolean
  *
  * @param {*} expectedBoolean
  * @returns {Boolean}
  */
export const isBoolean = expectedBoolean => typeof expectedBoolean === 'boolean';

/**
  * validate a String
  *
  * @param {*} expectedString
  * @returns {Boolean}
  */
export const isString = expectedString => typeof expectedString === 'string';

/**
  * validate an object
  *
  * @param {*} expectedObject
  * @returns {Boolean}
  */
export const isObject = expectedObject => typeof expectedObject === 'object';

/**
  * validate HTML Element
  *
  * @param {*} expectedHtml
  * @returns {Boolean}
  */
export const isHtml = expectedHtml => expectedHtml instanceof Element;

/**
  * validate function
  *
  * @param {*} expectedFunction
  * @returns {Boolean}
  */
export const isFunction = expectedFunction => typeof value === 'function';


/**
  * validate event
  *
  * @param {*} expectedEvent
  * @returns {Boolean}
  */
export const isEvent = expectedEvent => (expectedEvent.startsWith('on')
  ? expectedEvent
  : `on${expectedEvent}`) in window;

/**
  * validate Element Attribte
  *
  * @param {HTMLElement} element
  * @param {String} attribute
  */
export const isElementAttribute = (element, attribute) => attribute in element;
