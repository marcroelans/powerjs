import { isEvent, isString, isObject, isElementAttribute, isVnode } from '../../utils/is';
import { DATA_NODE_ATTRIBUTE } from '../constants';

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
 * @param {HTMLElement}
 * @param {Object}
 * @param {Class} Component
 */
const appendElementVnode = (element, vnode, Component) => {
  element.appendChild(createElement(vnode, Component));
};

/**
 * converts a vnode into an html element
 * @public
 * @param {Object} vnode
 * @returns {HTMLElement}
 */
export const createElement = (vnode = {}, Component) => {
  // create the element
  const element = document.createElement(vnode.tagName);

  // if a component gets passed asign and increment node id
  if (Component) {
    Component.nodeCounter += 1;
    // add node id to the vnode
    vnode.props[DATA_NODE_ATTRIBUTE] = Component.nodeCounter;
    // add node id to the element
    element.setAttribute(DATA_NODE_ATTRIBUTE, Component.nodeCounter);
  }

  if (isObject(vnode.props)) {
    appendElementObject(element, vnode.props);
  }

  vnode.children.forEach((child) => {
    if (isString(child)) {
      appendElementText(element, child);
    } else if (isVnode(child)) {
      if (Component) {
        appendElementVnode(element, child, Component);
      } else {
        appendElementVnode(element, child);
      }
    }
  });

  return element;
};
