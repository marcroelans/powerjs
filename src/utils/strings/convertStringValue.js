/**
 * Converts a string value to an array or object
 * @private
 * @param {String} value
 * @returns {*} Array, Object or the original value if parse fails
 */
export const convertStringValue = (value, isArray) => {
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
    } catch (error) {
      result = value;
    }

    return result;
  }

  // split into chunks
  return isEmpty ? [] : contents.split(',');
};
