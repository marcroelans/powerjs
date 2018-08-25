/**
  * observer component data
  *
  * @param {Object} data
  * @param {Class} component
  */
export const observerComponentData = (data) => {

  let componentData = data;

  Object.keys(data).forEach((keys) => {
    Object.defineProperty(componentData, keys, {
      set(value) {
        this.value = value;
        console.log(value);
      },
      get() {
        return this.value;
      }
    });

  });

  Object.keys(data).forEach((keys) => {
    componentData[keys] = data[keys];
    console.log(keys);
  });

  return componentData;
};
