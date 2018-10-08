/**
 * Performs a deep comparison between two values to determine if they are equivalent.
 * @param  {*} x     The value to compare
 * @param  {*} y     The other value to compare
 * @return {Boolean} Returns true if the values are equivalent, else false.
 */
export const isEqual = (x, y) => {
  if (x === null || x === undefined || y === null || y === undefined) {
    return x === y;
  }

  if (x.constructor !== y.constructor) {
    return false;
  }

  // functions and regexp should strictly equal each other
  if (x instanceof Function || x instanceof RegExp) {
    return x === y;
  }

  // strict equality check or matching valueOf
  if (x === y || x.valueOf() === y.valueOf()) {
    return true;
  }

  if (Array.isArray(x) && x.length !== y.length) {
    return false;
  }

  // if dates, valueOf would've have matched
  if (x instanceof Date) {
    return false;
  }

  if (!(x instanceof Object) || !(y instanceof Object)) {
    return false;
  }

  // recursive object equality check
  const keys = Object.keys(x);

  return Object.keys(y).every((key) => keys.indexOf(key) !== -1) && keys.every((key) => isEqual(x[key], y[key]));
};
