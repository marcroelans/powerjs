import { isArray, isEvent, isString, isObject, isHtml, isElementAttribute } from '../../utils/is';

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
 * append Element Array
 * @private
 * @param {HTMLElement} element
 * @param {*} childrens
 */
const appendElementArray = (element, childrens) => {
  // loop thought the elemnt childs
  childrens.forEach((child) => {
    if (isArray(child)) {
      appendElementArray(element, child);
    } else if (isHtml(child)) {
      element.appendChild(child);
    } else if (isString(child)) {
      appendElementText(element, child);
    } else if (isObject(child)) {
      appendElementObject(element, child);
    }
  });
};
