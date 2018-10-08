/**
 * deep copies an object
 * @private
 * @param {Object} originalObject
 * @return {Object}
 */
export const deepCloneObject = (obj) => JSON.parse(JSON.stringify(obj));
