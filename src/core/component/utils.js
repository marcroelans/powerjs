/**
  * This file provides component utils
  */

/**
  * function that detects an array in a string
  *
  * @param {String} chars
  * @returns {Boolean}
  */
export const isStringArray = function isStringArray(chars) {
  return (
    chars[0] === '['
    && chars[chars.length - 1] === ']'
  );
};

/**
  * Converts a string to an array
  *
  * @param {String} chars
  * @returns {Array}
  */
export const convertStringArray = function convertStringArray(chars) {
  // remove first and last letter
  const stringArray = chars.substring(1, chars.length - 1);

  // split into chunks
  return (stringArray.trim() === '' ? [] : stringArray.split(','));
};
