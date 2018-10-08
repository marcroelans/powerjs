import { isArray } from './common';
/**
 * Determines whether the passed object is numerical
 * @private
 * @param {Object} obj Object to check
 * @return {Boolean} Returns true if the passed object is a numerical, else false
 */
export const isNumeric = (obj) => !isArray(obj) && obj - parseFloat(obj) >= 0;
