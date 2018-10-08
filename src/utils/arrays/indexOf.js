/**
 * Returns the first index at which a given element can be found in the array, or -1 if it is not present.
 * @param  {Array}  array The Array to perform the lookup
 * @param  {*}      item  The item to lookup
 * @return {Number}       The first matched index or -1
 */
export const indexOf = (array, item) => {
  const k = array.length;
  var i = 0;

  for (; i < k; i++) {
    if (array[i] === item) {
      return i;
    }
  }

  return -1;
};
