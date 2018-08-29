/**
  * observer component data
  *
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
        /* eslint-disable */
        component.noUpdate = false;
        /* eslint-enable */
      },
      get() {
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
    /* eslint-disable */
    componentData[keys] = originalData[keys];
    /* eslint-enable */
  });
};
