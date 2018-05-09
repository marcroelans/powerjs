/**
  * create Component
  *
  * @param {Object} model
  * @returns {Node}
  */

export const createComponent = model  => {
  model.node.appendChild(model.render());
  return model.node;
};
