import { isArray } from '../utils/is.js';

/**
  * create Component
  *
  * @param {Object} model
  * @returns {Node}
  */

export const createComponent = model  => {

  const template = model.render();

  if( isArray(template)) {
    template.forEach(item => {
      model.node.appendChild(item)
    })
  } else {
    model.node.appendChild(model.render());
  }

  return model.node;
};
