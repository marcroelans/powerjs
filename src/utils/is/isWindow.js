/**
 * Determines whether the passed object is the window object
 * @private
 * @param {Object} obj Object to check
 * @return {Boolean} Returns true if the passed object is window, else false
 */
export const isWindow = (obj) => obj != null && obj === obj.window;
