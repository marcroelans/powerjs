/**
 * removes a given element in dom
 * @param {HTMLElement}
 */
export const removeNode = (node) => {
  node.parentElement.removeChild(node);
};

/**
 * replace an old node with a new
 * @param {HTMLElement} oldNode
 * @param {HTMLElement} newNode
 */
export const replaceNode = (oldNode, newNode) => {
  oldNode.parentElement.replaceChild(newNode, oldNode);
};
