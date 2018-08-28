/**
  * This file provides component utils
  */

/**
  * function that detects an array in a string
  *
  * @param {String} chars
  * @returns {Boolean}
  */
const isStringArray = function isStringArray(chars) {
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
const convertStringArray = function convertStringArray(chars) {
  // remove first and last letter
  const stringArray = chars.substring(1, chars.length - 1);

  // split into chunks
  return (stringArray.trim() === '' ? [] : stringArray.split(','));
};

/**
  * get string param
  *
  * @param {String} value
  *
  * @return {String|Number}
  */
const getStringParam = (value) => {
  const trimed = value.trim();
  const length = trimed.length;
  const index = trimed.indexOf('|');
  const valueString = '';
  if (index > -1) {

    

  } else {
    return value;
  }
}

/**
  * Convert components data
  *
  * @param {String}
  *
  * @return {String|Number|Array}
  */
export const convertComponentValue = (value) => {

  if (isStringArray(value)) {
    return convertStringArray(value);
  } else {
    return getStringParam(value);
  }

}
