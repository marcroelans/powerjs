import {
  isArray,
  isHtml } from '../utils/is.js';

import { createElement } from '../createElement/createElement.js';


/**
  * render  a an element or component
  *
  * @param {Object|Function} model // TODO: Better name?
  * @param {DOM Element} root
  */
export const render = (model, root) => {

  // root is no element in window
  if(!isHtml(root) && model === null) {
    return;
  }

  if(isArray(model)) {

    model.forEach(item => {
      if(item !== null){
        root.appendChild(item);
      }
    })

  } else {
    root.appendChild(model);
  }

};
