import { DATA_NODE_ATTRIBUTE } from '../constants';
import { iterate } from '../../utils/helpers';

/**
 * checks out the difference between 2 objects
 * and merges it into the component element
 * @param {Object}      oldObj
 * @param {Object}      newObj
 * @param {HTMLElement} componentRoot
 */
export const propsDiff = (oldObj, newObj, componentRoot) => {
  // get the element id
  const powerId = oldObj[DATA_NODE_ATTRIBUTE];
  // get the dom element to the vnode
  const element = componentRoot.querySelector(`[${DATA_NODE_ATTRIBUTE}="${powerId}"]`);

  // iterate through the old vnode
  iterate(oldObj, (key, value, index) => {
    // check if the key still excist in the new props
    if (!newObj[key]) {
      // removing attribute from element
      element.removeAttribute(key);
    }
  });

  // iterate through the new vnode
  iterate(newObj, (key, value, index) => {
    // check if there a new key
    if (!oldObj[key] || newObj[key] !== oldObj[key]) {
      // add attribute to element
      element.setAttribute(key, value);
    }
  });
};
