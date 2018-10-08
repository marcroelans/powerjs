import { iterate } from '../../utils/objects';

/**
 * observer component data
 * @private
 * @param {Class} component
 * @param {Object} componentData
 */
export const observerComponentData = (component, componentData) => {
  iterate(componentData, (prop, value) => {
    Object.defineProperty(componentData, prop, {
      set(newValue) {
        this[`_${prop}`] = newValue;

        if (!component.noUpdate) {
          component.update();
        }
      },
      get() {
        return this[`_${prop}`];
      }
    });
  });
};

/**
 * merge Component data
 * @private
 * @param {Class} component
 * @param {Object} componentData
 * @param {Object} originalData
 */
export const mergeComponentData = (component, componentData, originalData) => {
  iterate(originalData, (prop) => (componentData[prop] = originalData[prop]));
};
