/**
 * create a VNODE
 * @public
 * @param {String} tag
 * @param {Object|Null} props
 * @param {Array|HTMLElement} childs
 * @returns {Object}
 */
export const createVnode = (tag = 'div', props = null, ...args) => {
  return {
    tagName: tag,
    props: props,
    children: args
  };
};
