import { isHtml, isVnode } from '../../utils/is';
import Logger from '../../utils/log';
import { createElement } from '../createElement/createElement';

/**
 * renders a component or vnodes in the given root
 * @public
 * @param {Object|Function} model
 * @param {DOM Element} root
 */
export const render = (model, root) => {
  if (!isHtml(model)) {
    Logger.error('No VNode or Component given');
  }

  // check if a root is given
  if (!isHtml(root)) {
    Logger.error('No valid root given.');
  }

  // check if model is neither a vdom or component
  if (!isVnode(model) && !model.IS_POWER_COMPONENT) {
    return render(new model(), root);
  }

  // check if model is a component
  if (model.IS_POWER_COMPONENT && model.beforeComponentLoad) {
    model.beforeComponentLoad(model);
  }

  // convert the vnodes / component into real dom elements
  const domTree = model.IS_POWER_COMPONENT ? model.create() : createElement(model);

  if (isHtml(domTree)) {
    root.appendChild(domTree);
  }

  if (model.IS_POWER_COMPONENT && model.afterComponentLoad) {
    model.afterComponentLoad(model);
  }
};
