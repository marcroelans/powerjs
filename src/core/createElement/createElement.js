import {
  isArray,
  isEvent,
  isString,
  isObject,
  isHtml,
  isElementAttribute,
} from '../../utils/is';

/**
  * append Element string
  *
  * @param {HTMLElement} element
  * @param {String} text
  */
const appendElementText = (element, text) => {
  element.appendChild(document.createTextNode(text));
};

/**
  * append Element Styles
  *
  * @param {HTMLElement} element
  * @param {String} styles
  */
const appendElementStyles = (element, styles) => {
  element.setAttribute('style', styles);
};

/**
  * append Element Event
  *
  * @param {HTMLElement} element
  * @param {Event} event
  * @param {*} handler
  */
const appendElementEvent = (element, event, handler) => {
  const eventListener = event.startsWith('on')
    ? event.substring(2, event.length)
    : event;

  element.addEventListener(eventListener, (e) => {
    // pass the event and element into the funtion
    handler(e, element);
  });
};

/**
  * append Element Object
  *
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
  *
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

/**
  * create Element
  *
  * @param {String} tag
  * @param {*} args
  * @returns {HTMLElement}
  */
export const createElement = (tag, ...args) => {
  // create the element
  const element = document.createElement(tag);

  args.forEach((arg) => {
    if (isArray(arg)) {
      appendElementArray(element, arg);
    } else if (isHtml(arg)) {
      element.appendChild(arg);
    } else if (isString(arg)) {
      appendElementText(element, arg);
    } else if (isObject(arg)) {
      appendElementObject(element, arg);
    }
  });

  return element;
};
