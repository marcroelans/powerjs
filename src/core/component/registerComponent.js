/**
  * This file provides the service to register Components in DOM
  */

import { log } from '../../utils/log';
import { DATA_COMPONENT_ATTRIBUTE } from '../constants';
import { convertComponentValue } from './utils';

/**
  * create a component in the dom
  *
  * @param {DOM} component
  * @param {CLass} _class
  */
const createDomComponent = function createDomComponent(component, _class) {
  // get the attributes from the dom element
  const componentAttributes = component.attributes;

  // create an empty data object
  const dataObject = {};

  // loop over the componentAttributes
  for (const prop of componentAttributes) {
    dataObject[prop.name] = convertComponentValue(prop.value);
  }

  // create a class instance
  const PowerClass = new _class(dataObject);

  // check for hook // afterComponentMount
  if (PowerClass.afterComponentMount) {
    PowerClass.afterComponentMount(PowerClass);
  }

  // replace node
  component.parentNode.replaceChild(PowerClass.create(), component);
};

export const registerComponent = function registerComponent(_class) {
  // if there is no _class
  if (!_class) {
    // TODO: Better class validation
    log('Cannot register Component', 'error');
    return;
  }

  const componentName = _class.name;

  // get every component in dom
  const componentsContainer = []
    .slice
    .call(document.querySelectorAll(componentName));

  if (componentsContainer.length === 0) {
    return;
  }

  componentsContainer.forEach((component) => {
    if (!component.getAttribute(DATA_COMPONENT_ATTRIBUTE)) {
      createDomComponent(component, _class);
    }
  });
};
