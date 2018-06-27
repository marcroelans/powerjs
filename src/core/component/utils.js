/**
  * This file provides component utils
  */

/**
  * function that detects an array in a string
  *
  * @param {String} chars
  * @returns {Boolean}
  */
export const isStringArray = function isStringArray (chars) {
  return (
    chars[0] === '[' &&
    chars[chars.length-1] === ']'
  );
}

/**
  * function that detects an objects in a string
  *
  * @param {String} chars
  * @returns {Boolean}
  */
export const isStringObject = function isStringObject (chars) {
  return (
    chars[0] === '{' &&
    chars[chars.length-1] === '}'
  );
}

/**
  * Converts a string to array
  *
  * @param {String} chars
  * @returns {Array}
  */
export const convertStringArray = function convertStringArray (chars) {

  // remove first and last letter
  let stringArray = chars.substring(1, chars.length-1);

  // split into chunks
  return stringArray.split(',');
}

/**
  * Converts a string to object
  *
  * @param {String} chars
  * @returns {Array}
  */
export const convertStringObject = function convertStringObject (chars) {

}
