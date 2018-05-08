import {
  isArray,
  isEvent,
  isString,
  isObject,
  isHtml,
  isFunction,
  isElementAttribute } from '../utils/is.js';

import { createElement } from '../createElement/createElement.js';

/**
  * validates between class and element
  *
  * @param {Object|Function} model
  * @returns
  */
const validateModel = model => {

  if(isFunction(model)) {
    const powerClass = new model;
    return createElement('h1', powerClass.render());
  }

  if(isObject(model)) {
    return model;
  }

}

/**
  * render  a an element or component
  *
  * @param {Object|Function} model // TODO: Better name?
  * @param {DOM Element} root
  */
export const render = (model, root) => {

  // Check if model is a class or element
  const _model = validateModel(model);

  if(isHtml(root)) {
    root.appendChild(_model);
  }

};
