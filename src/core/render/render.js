import {
  isArray,
  isHtml,
} from '../../utils/is';
import { log } from '../../utils/log';

/**
  * render vdom elements or component
  *
  * @param {Object|Function} model // TODO: Better name?
  * @param {DOM Element} root
  */
export const render = (model, root) => {
  // return if there is no valid model given
  if (!model) {
    log('There is no valid model given', 'error');
    return;
  }

  // return if there is no valid root given
  if (!isHtml(root)) {
    log('There is no valid root given', 'error');
    return;
  }

  if (isArray(model)) {
    // get all the elements
    model.forEach((item) => {
      if (isHtml(item)) {
        root.appendChild(item);
      }
    });
  } else {
    // there is just one item in the root
    root.appendChild(model);
  }
};
