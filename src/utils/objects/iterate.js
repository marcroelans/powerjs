/**
 * Iterates over an Object executing a callback function on each property. This allows
 * for iterative breaking at anytime by returning false
 * @param  {Object}   obj The Object to iterate over
 * @param  {Function} fn  The callback function to execute on each property
 *
 * iterate({ hello: 'world', name: 'kieran' }, (key, value, index) => console.log(key, value, index));
 *
 */
export const iterate = (obj, fn) => {
  let count = 0;

  for (const key in obj) {
    const result = fn.call(obj[key], key, obj[key], count++);

    if (result === false) {
      break;
    }
  }
};
