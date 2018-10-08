import { DATA_NODE_ATTRIBUTE } from '../constants';
import { isString, isVNode } from '../../utils/is';
import { iterate } from '../../utils/objects';

/**
 * working on difference between 2 vnodes
 * @private
 * @param {Object}  oldVNode
 * @param {Object}  newVNode
 * @param {Class}   Component
 */
export const diff = (oldVNode, newVNode, Component) => {
  // get the element id
  const powerId = oldVNode.props[DATA_NODE_ATTRIBUTE];

  // check if newVNode props is null
  if (newVNode.props === null) {
    newVNode.props = {};
  }

  // merge the node id
  newVNode.props[DATA_NODE_ATTRIBUTE] = oldVNode.props[DATA_NODE_ATTRIBUTE];

  // get the dom element to the vnode
  const element = Component.node.querySelector(`[${DATA_NODE_ATTRIBUTE}="${powerId}"]`);

  // compare the tag
  if (oldVNode.tagName !== newVNode.tagName) {
    console.log('tagName changed');
  }

  // compare props
  propsDiff(oldVNode.props, newVNode.props, element);

  // compare children
  childrenDiff(oldVNode.children, newVNode.children, element, Component);
};

/**
 * checks out the difference between 2 objects
 * and merges it into the component element
 * @private
 * @param {Object}      oldObj
 * @param {Object}      newObj
 * @param {HTMLElement} element
 */
export const propsDiff = (oldObj, newObj, element) => {
  // iterate through the old vnode
  iterate(oldObj, (key) => {
    // check if the key still excist in the new props
    if (!newObj[key]) {
      // removing attribute from element
      element.removeAttribute(key);
    }
  });

  // iterate through the new vnode
  iterate(newObj, (key, value) => {
    // check if there a new key
    if (!oldObj[key] || newObj[key] !== oldObj[key]) {
      // add attribute to element
      element.setAttribute(key, value);
    }
  });
};

/**
 * checks out the difference between 2 Arrays
 * and merges it into the component element
 * @private
 * @param {Array}       oldChildren
 * @param {Array}       newChildren
 * @param {HTMLElement} element
 * @param {Class}       Component
 */
export const childrenDiff = (oldChildren, newChildren, element, Component) => {
  newChildren.forEach((child, index) => {
    if (isString(child) && child !== oldChildren[index]) {
      const childText = document.createTextNode(child);
      element.replaceChild(childText, element.childNodes[index]);
    } else if (isVNode(child)) {
      diff(oldChildren[index], child, Component);
    }
  });
};
