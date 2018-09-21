/**
  * observer component data
  * @private
  * @param {Class} component
  * @param {Object} componentData
  */
export const observerComponentData = (component, componentData) => {
  Object.keys(componentData).forEach((keys) => {
    Object.defineProperty(componentData, keys, {
      set(newValue) {
        this[`_${keys}`] = newValue;
        if (!component.noUpdate) {
          component.update();
        }
      },
      get() {
        return this[`_${keys}`];
      },
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
  Object.keys(originalData).forEach((keys) => componentData[keys] = originalData[keys]);
};
