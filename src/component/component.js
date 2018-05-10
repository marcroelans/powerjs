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

    this.name = this.constructor.name;


    // Getting called before constructor
    if(this.beforeComponentMount) {
      this.beforeComponentMount();
    }

    // data
    if(data) {
      this.data = data;
    }

    return this.create();

    // Getting called after constructed
    if(this.afterComponentMount) {
      this.afterComponentMount();
    }


  }

  create() {
    // creating the component root element
    this.node = document.createElement(this.name);

    // render
    const template = this.render();

    if(isArray(template)) {

      template.forEach(item => {
        this.node.appendChild(item)
      })

    } else {
      this.node.appendChild(template)
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
        this.node.appendChild(item);
      })
    } else {
      this.node.appendChild();
    }

  }

};
