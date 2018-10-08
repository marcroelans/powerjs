/**
 * removes a given element in dom
 * @param {HTMLElement}
 */
export const removeNode = (node) => {
  node.parentElement.removeChild(node);
};
