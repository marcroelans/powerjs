/**
 * Determines wheter the passed object is a vnode
 * @private
 * @param {Object} vnode
 * @return {Boolean}
 */
export const isVNode = (vnode) => vnode.tagName !== undefined && vnode.props !== undefined && vnode.children !== undefined;
