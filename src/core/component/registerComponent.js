/**
  * This file provides the service to brint component alive in dom
  */

import { log } from '../../utils/log';
import { render } from '../render/render';

const createDomComponent = function createDomComponent (component, _class, name) {

  // get the attributes from the dom element
  const componentAttributes = component.attributes;

  // create an empty data object
  let dataObject = {};

  // loop over the componentAttributes
  for(let prop of componentAttributes) {
    // TODO: no object or array support
    dataObject[prop.name] = prop.value;
  }

  // create a class instance
  const PowerClass = new _class(dataObject);

  // replace node
  component = component.parentNode.replaceChild(PowerClass, component);
}

export const registerComponent = function registerComponent ( _class ) {

  const componentName = _class.name;

  // get every component in dom
  const componentsContainer = []
    .slice
    .call(document.querySelectorAll(componentName))

  if(componentsContainer.length === 0) {
    return;
  }

  componentsContainer.forEach(component => {
    createDomComponent(component, _class, componentName);
  })

};
