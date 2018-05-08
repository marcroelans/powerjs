import {
  isArray,
  isEvent,
  isString,
  isObject,
  isHtml,
  isFunction,
  isElementAttribute } from '../utils/is.js';

import { createComponent } from '../component/createComponent.js'

import { createElement } from '../createElement/createElement.js';

/**
  * validates between class and element
  *
  * @param {Object|Function} model
  * @returns
  */
const validateModel = model => {

  // model needs to be an object
  if(!isObject(model)) {
    return;
  }

  // is Class or elements
  return (isFunction(model.component)
    ? createComponent(model)
    : model
  )

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
