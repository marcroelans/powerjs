/**
 * clones an object
 * @private
 * @param {Object} originalObject
 * @return {Object}
 */
export const cloneObject = (originalObject) => Object.assign({}, originalObject);

/**
 * deep clones an object
 * @private
 * @param {Object} originalObject
 * @return {Object}
 */
export const deepcloneObject = (originalObject) => JSON.parse(JSON.stringify(originalObject));
