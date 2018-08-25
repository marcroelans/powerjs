import {
  isArray,
  isHtml,
} from '../../utils/is';
import { log } from '../../utils/log';

/**
  * render vdom elements or component
  *
  * @param {Object|Function} model
  * @param {DOM Element} root
  */
export const render = (model, root) => {
  // Check if model is a Power Component
  const htmlModel = (
    model.IS_POWER_COMPONENT
      ? model.create()
      : model
  );

  // return if there is no valid model given
  if (!htmlModel) {
    log('There is no valid model given', 'error');
    return;
  }

  // return if there is no valid root given
  if (!isHtml(htmlModel)) {
    log('There is no valid root given', 'error');
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
