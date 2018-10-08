/**
 * Iterates over an Array executing a callback function on each item. This allows
 * for iterative breaking at anytime by returning false
 * @param  {Array}    array The Array to iterate over
 * @param  {Function} fn    The callback function to execute on each item in the Array
 */
const each = (array, fn) => {
  const k = array.length;
  var i = 0;

  for (; i < k; i++) {
    const result = fn.call(array[i], array[i], i);

    if (result === false) {
      break;
    }
  }
};
