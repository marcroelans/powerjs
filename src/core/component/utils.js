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
  const { length } = value.length;
  const index = value.indexOf('|');
  let valueString = '';
  if (index > -1) {
    const type = value.substring((index + 1), length);
    valueString = value.substring(0, index);

    if (type.trim() === 'number') {
      return parseFloat(valueString);
    }
    return valueString;
  }

  return value;
};

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
  }

  return getStringParam(value);
};
