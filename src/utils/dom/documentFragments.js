/**
 * adding a script
 * @private
 * @param {Object} node
 */
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
 * @param {Array}   elements  The elements to append to the fragement
 * @param {Object}  container The container element to append the fragment to
 * @param {Boolean} insert    A flag to determine insertion
 */
export const documentFragments = (elements, container, insert) => {
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
