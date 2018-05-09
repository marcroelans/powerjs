import {
  isFunction,
  isArray
} from '../utils/is.js';
import {removeChilds} from '../utils/dom.js';

/**
  * Power Component
  *
  * @class Component
  */

export class Component {

  constructor(data) {

    console.log(data)
    this.name = this.constructor.name;
    this.node = document.createElement(this.name);

    // Gettings called before constructor
    if(this.beforeComponentMount) {
      this.beforeComponentMount();
    }

    // is a component
    this.IS_POWER_COMPONENT = true;

    if(data) {
      this.data = data;
    }

    // Gettings called after constructed
    if(this.afterComponentMount) {
      this.afterComponentMount();
    }

  }

  setState(stateHandler) {

    const template = this.render();

    if (isFunction(stateHandler)) {
      stateHandler()
    }

    // clearing the component
    removeChilds(this.node);

    // rerender
    if(isArray(template)) {
      template.forEach(item => {
        this.node.appendChild(item)
      })
    } else {
      this.node.appendChild()
    }

  }

};
