/**
 * Returns the first index at which a given element can be found in the array, or -1 if it is not present.
 * @private
 * @param  {Array}  array The Array to perform the lookup
 * @param  {*}      item  The item to lookup
 * @return {Number}       The first matched index or -1
 */
const indexOf = (array, item) => {
  const k = array.length;
  var i = 0;

  for (; i < k; i++) {
    if (array[i] === item) {
      return i;
    }
  }

  return -1;
};

/**
 * Iterates over an Array executing a callback function on each item. This allows
 * for iterative breaking at anytime by returning false
 * @private
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

/**
 * Iterates over an Array or Object executing a callback function on each item. This allows
 * for iterative breaking at anytime by returning false
 * @private
 * @param  {*}        Object The Array or Object to iterate over
 * @param  {Function} fn     The callback function to execute on each item in the array
 *
 * Allows for:
 *
 * Objects
 * iterate({ hello: 'world', name: 'kieran' }, (key, value, index) => console.log(key, value, index));
 *
 * Arrays
 * iterate([1,2,3,4,5], (item, index) => console.log(item, index));
 *
 */
const iterate = (obj, fn) => {
  if (typeof obj.length === 'number') {
    each(obj, (item, index) => fn.call(item, item, index));
  } else if (typeof obj === 'object') {
    let count = 0;

    for (const key in obj) {
      const result = fn.call(obj[key], key, obj[key], count++);

      if (result === false) {
        break;
      }
    }
  }
};

const addScript = (node) => {
  var src = node.src && node.src.length > 0;

  try {
    if (!src) {
      (1, eval)(node.innerHTML);
      return node;
    }

    const script = document.createElement('script');

    script.type = 'text/javascript';
    script.src = node.src;

    return script;
  } catch (error) {
    console.log('There was an error with the script:' + error);
  }
};

/**
 * Use document fragments for faster DOM manipulation
 * @private
 * @param {Array}   elements  The elements to append to the fragement
 * @param {Object}  container The container element to append the fragment to
 * @param {Boolean} insert    A flag to determine insertion
 */
const documentFragments = (elements, container, insert) => {
  var fragment = document.createDocumentFragment(),
    l = elements.length,
    i = l - 1,
    k = 0;

  if (insert) {
    for (; i >= 0; i--) {
      var element = elements[i];

      if (element.nodeName.toLowerCase() === 'script') {
        element = addScript(element);
      }

      fragment.insertBefore(element, fragment.firstChild);
    }

    container.insertBefore(fragment, container.firstChild);
  } else {
    for (; k < l; k++) {
      var element = elements[k];

      if (element.nodeName.toLowerCase() === 'script') {
        element = addScript(element);
      }

      fragment.appendChild(element);
    }

    container.appendChild(fragment);
  }

  fragment = null;
};

/**
 * Determines whether a string begins with the characters of a specified string, returning true or false.
 * @private
 * @param  {String} text     The text string that will be searched
 * @param  {String} search   The characters to be searched for at the start of this string
 * @param  {Number} position The position in the text to begin searching - defaults to 0 (optional)
 * @return {Boolean}         True if the given characters are found at the beginning of the string; otherwise, false
 */
const startsWith = (text, search, position) => {
  return text.substr(!position || position < 0 ? 0 : +position, search.length) === search;
};

export { documentFragments, each, indexOf, iterate, startsWith };
