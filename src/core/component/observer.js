import { cloneObject } from '../../utils/object';

/**
  * observer component data
  *
  * @param {Class} component
  * @param {Object} componentData
  */
export const observerComponentData = (component, componentData) => {

  Object.keys(componentData).forEach((keys) => {
    Object.defineProperty(componentData, keys, {
      set: function(newValue) {
        this[`_${keys}`] = newValue;
        if (!component.noUpdate) {
          component.update();
        }
        component.noUpdate = false;
      },
      get: function() {
        return this[`_${keys}`];
      },
    });
  });
};

/**
  * merge Component data
  *
  * @param {Class} component
  * @param {Object} componentData
  * @param {Object} originalData
  */
export const mergeComponentData = (component, componentData, originalData) => {
  Object.keys(originalData).forEach((keys) => {
    componentData[keys] = originalData[keys];
  });
}
