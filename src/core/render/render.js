import { isArray, isHtml } from '../../utils/is';
import Logger from '../../utils/log';

/**
 * render vdom elements or component
 * @public
 * @param {Object|Function} model
 * @param {DOM Element} root
 */
export const render = (model, root) => {
  if (model.IS_POWER_COMPONENT && model.beforeComponentMount) {
    model.beforeComponentMount(model);
  }

  // Check if model is a Power Component
  const htmlModel = model.IS_POWER_COMPONENT ? model.create() : model;

  // return if there is no valid model given
  if (!htmlModel) {
    Logger.error('There is no valid model given');
    return;
  }

  // return if there is no valid root given
  if (!isHtml(htmlModel)) {
    Logger.error('There is no valid root given');
    return;
  }

  if (isArray(htmlModel)) {
    // get all the elements
    htmlModel.forEach((item) => {
      if (isHtml(item)) {
        root.appendChild(item);
      }
    });
  } else {
    // there is just one item in the root
    root.appendChild(htmlModel);
  }

  if (model.IS_POWER_COMPONENT && model.afterComponentMount) {
    model.afterComponentMount(model);
  }
};
