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

    // the component gets the name of the class name
    this.name = this.constructor.name;

    // Getting called before constructor
    if(this.beforeComponentMount) {
      this.beforeComponentMount(this);
    }

    // check if there is any data
    if(data) {
      this.data = data;
    }

    return this.create();
  }

  create() {

    // creating the component root element
    this.node = document.createElement(this.name);

    // setting this element display to block by default
    this.node.style.display = 'block';

    // get the template by call the render
    const template = this.render();

    if(isArray(template)) {

      template.forEach(item => {
        if(item !== null) {
          this.node.appendChild(item)
        }
      })

    } else {
      this.node.appendChild(template)
    }

    // Getting called after constructed
    if(this.afterComponentMount) {
      this.afterComponentMount(this);
    }

    return this.node;
  }

  setState(stateHandler) {

    if (isFunction(stateHandler)) {
      stateHandler()
    }

    const template = this.render();

    // clearing the component
    removeChilds(this.node);

    // rerender
    if(isArray(template)) {
      template.forEach(item => {
        if(item !== null) {
          this.node.appendChild(item);
        }
      })
    } else {
      this.node.appendChild();
    }

  }

};
