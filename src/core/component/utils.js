import { isNumeric } from '../../utils/is';

/**
  * Converts a string value to an array or object
  * @private
  * @param {String} value
  * @returns {*} Array, Object or the original value if parse fails
  */
const convertStringValue = function convertStringValue(value, isArray) {
  // remove first and last letter
  const contents = value.substring(1, value.length - 1);
  // check an empty object or array was set
  const isEmpty = contents.trim() === '';

  if (!isArray) {
    let result = value;

    if (isEmpty) {
      return {};
    }

    try {
      result = JSON.parse(value);
    } catch(error) {
      result = value;
    }

    return result;
  }

  // split into chunks
  return isEmpty ? [] : contents.split(',');
};

/**
  * get string param
  * @private
  * @param {String} value
  * @return {String|Number}
  */
const getStringParam = (value) => {
  const val = value.trim();

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
export const convertComponentValue = (value) => {
  const isArray = value[0] === '[' && value[value.length - 1] === ']';
  const isJSON = value[0] === '{' && value[value.length - 1] === '}';

  if (isArray || isJSON) {
    if (isJSON) {
      value = value.replace(/'/g, '"');
    }

    return convertStringValue(value, isArray);
  }

  return getStringParam(value);
};
