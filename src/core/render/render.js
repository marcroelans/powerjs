import {
  isArray,
  isHtml } from '../../utils/is.js';

import { log } from '../../utils/log.js';

import { createElement } from '../createElement/createElement.js';


/**
  * render vdom elements or component
  *
  * @param {Object|Function} model // TODO: Better name?
  * @param {DOM Element} root
  */
export const render = (model, root) => {

  if(!model) {
    log('There is no valid model given', 'error');
    return;
  }

  if(!isHtml(root)) {
    log('There is no valid root given', 'error');
    return;
  }

  if(isArray(model)) {

    model.forEach(item => {
      if(isHtml(item)){
        root.appendChild(item);
      }
    })

  } else {
    root.appendChild(model);
  }

};
