/**
  * remove all child nodes
  * @private
  * @param {Node} node
  */
export const removeChilds = (node) => {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
};
