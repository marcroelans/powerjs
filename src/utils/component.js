import { isNumeric } from './is';
import { convertStringValue } from './strings';

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
