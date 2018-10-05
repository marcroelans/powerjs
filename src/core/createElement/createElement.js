import { isEvent, isString, isObject, isElementAttribute, isVnode } from '../../utils/is';

/**
 * append Element string
 * @private
 * @param {HTMLElement} element
 * @param {String} text
 */
const appendElementText = (element, text) => {
  element.appendChild(document.createTextNode(text));
};

/**
 * append Element Styles
 * @private
 * @param {HTMLElement} element
 * @param {String} styles
 */
const appendElementStyles = (element, styles) => {
  element.setAttribute('style', styles);
};

/**
 * append Element Event
 * @private
 * @param {HTMLElement} element
 * @param {Event} event
 * @param {*} handler
 */
const appendElementEvent = (element, event, handler) => {
  const eventListener = event.startsWith('on') ? event.substring(2, event.length) : event;

  element.addEventListener(eventListener, (e) => {
    // pass the event and element into the funtion
    handler(e, element);
  });
};

/**
 * append Element Object
 * @private
 * @param {HTMLElement} element
 * @param {Object} elementProps
 */
const appendElementObject = (element, elementProps) => {
  // Loop throught the element props
  Object.keys(elementProps).forEach((prop) => {
    if (prop === 'style' || prop === 'styles') {
      appendElementStyles(element, elementProps[prop]);
    } else if (isEvent(prop)) {
      appendElementEvent(element, prop, elementProps[prop]);
    } else if (isElementAttribute(element, prop)) {
      element.setAttribute(prop, elementProps[prop]);
    }
  });
};

/**
 * appends a vnode
 * @param {Object}
 */
const appendElementVnode = (element, vnode) => {
  element.appendChild(createElement(vnode));
};

/**
 * converts a vnode into an html element
 * @public
 * @param {Object} vnode
 * @returns {HTMLElement}
 */
export const createElement = (vnode = {}) => {
  // create the element
  const element = document.createElement(vnode.tagName);

  if (isObject(vnode.props)) {
    appendElementObject(element, vnode.props);
  }

  vnode.children.forEach((child) => {
    if (isString(child)) {
      appendElementText(element, child);
    } else if (isVnode(child)) {
      appendElementVnode(element, child);
    }
  });

  return element;
};
