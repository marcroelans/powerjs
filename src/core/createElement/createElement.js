import { DATA_NODE_ATTRIBUTE } from '../constants';
import { iterate } from '../../utils/objects';
import { startsWith } from '../../utils/strings';
import { isEvent, isString, isObject, isElementAttribute, isVNode } from '../../utils/is';
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
 * Sets the style value on the specified element
 * @private
 * @param {HTMLElement} element
 * @param {String} styles
 */
const setElementStyles = (element, styles) => {
  element.setAttribute('style', styles);
};

/**
 * Assigns a callback function to the event type on the specificed element that
 * will be called whenever the event is triggered
 * @private
 * @param {HTMLElement} element
 * @param {Event} event
 * @param {Function} handler
 */
const addEventListener = (element, event, handler) => {
  const eventType = startsWith(event, 'on') ? event.substring(2, event.length) : event;
  // invoke the callback function in the context of the DOM element
  element.addEventListener(eventType, (e) => handler.call(element, e, element));
};

/**
 * Iterates over the passed props and assigns any attributes and/or binds
 * events to the specified element
 * @private
 * @param {HTMLElement} element
 * @param {Object} elementProps
 */
const decorateElement = (element, elementProps) => {
  // iterate over element props
  iterate(elementProps, (prop) => {
    if (prop === 'style' || prop === 'styles') {
      return setElementStyles(element, elementProps[prop]);
    }

    if (isEvent(prop)) {
      return addEventListener(element, prop, elementProps[prop]);
    }

    if (isElementAttribute(element, prop)) {
      const name = prop === 'className' ? 'class' : prop;

      return element.setAttribute(name, elementProps[prop]);
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

    // if props is null create an empty object
    if (vnode.props === null) {
      vnode.props = {};
    }

    // assign the id to the vnode
    vnode.props[DATA_NODE_ATTRIBUTE] = Component.nodeCounter;

    // add node id to the element
    element.setAttribute(DATA_NODE_ATTRIBUTE, Component.nodeCounter);
  }

  if (isObject(vnode.props)) {
    decorateElement(element, vnode.props);
  }
  vnode.children.forEach((child) => {
    if (isString(child)) {
      appendElementText(element, child);
    } else if (isVNode(child)) {
      if (Component) {
        appendElementVnode(element, child, Component);
      } else {
        appendElementVnode(element, child);
      }
    }
  });

  return element;
};
