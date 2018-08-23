import {
  isFunction,
  isArray,
} from '../../utils/is';

import { removeChilds } from '../../utils/dom';
import { DATA_COMPONENT_ATTRIBUTE } from '../constants';

/**
  * Power Component
  *
  * @class Component
  */
export class Component {
  /**
    * constructor of class Component
    *
    * @param {Object} data
    */
  constructor(data) {
    // the component gets the name of the class name
    this.name = this.constructor.name;

    // Getting called before constructor
    if (this.beforeComponentMount) {
      this.beforeComponentMount(this);
    }

    // check if there is any data
    if (data) {
      this.data = data;
    }

    // mark this class as a Power Component
    this.IS_POWER_COMPONENT = true;
  }

  /**
    * creates the elements of a component
    *
    * @return {Node}
    */
  create() {
    // creating the component root element
    this.node = document.createElement(this.name);

    // setting this element display to block by default
    this.node.style.display = 'block';
    this.node.setAttribute(DATA_COMPONENT_ATTRIBUTE, true);

    // get the template by call the render
    const template = this.render();

    if (isArray(template)) {
      template.forEach((item) => {
        if (item !== null) {
          this.node.appendChild(item);
        }
      });
    } else {
      this.node.appendChild(template);
    }

    return this.node;
  }

  /**
    * changes the component state
    * trigger the update methods
    *
    * @param {Function} stateHandler
    */
  setState(stateHandler) {
    if (isFunction(stateHandler)) {
      stateHandler();
    }

    // update the component
    this.update();
  }

  /**
    * updates the component
    */
  update() {
    const template = this.render();

    // clear the view
    removeChilds(this.node);

    // rerender
    if (isArray(template)) {
      template.forEach((item) => {
        if (item !== null) {
          this.node.appendChild(item);
        }
      });
    } else {
      this.node.appendChild();
    }
  }

  /**
    * remove component and its childs
    */
  destroy() {
    const parent = this.node.parentElement;
    parent.removeChild(this.node);
  }
}
