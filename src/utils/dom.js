/**
  * remove all child nodes
  *
  * @param {Node} node
  */
export const removeChilds = node => {
  while(node.firstChild) {
    node.removeChild(node.firstChild);
  }
};
