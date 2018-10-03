import { isFunction, isArray } from '../../utils/is';
import { cloneObject } from '../../utils/object';
import { DATA_COMPONENT_ATTRIBUTE } from '../constants';
import { observerComponentData, mergeComponentData } from './observer';
import { createElement } from '../createElement/createElement';

/**
 * Power Component
 * @public
 * @class Component
 */
export class Component {
  /**
   * constructor of class Component
   * @public
   * @param {Object} data
   */
  constructor(componentData) {
    // Getting called before constructor
    if (this.beforeComponentConstruct) {
      this.beforeComponentConstruct(this);
    }

    // block update
    this.noUpdate = true;

    // the component gets the name of the class name
    this.name = this.constructor.name;

    // check if there is any data
    if (componentData) {
      // clone the object to store the original data
      this.data = cloneObject(componentData);
      // start observing with defineProperty
      observerComponentData(this, this.data);
      // merge the original data to the new observer object
      mergeComponentData(this, this.data, componentData);

      // deactive the update block
      this.noUpdate = false;
    }

    // mark this class as a Power Component
    this.IS_POWER_COMPONENT = true;

    // Getting called after constructor
    if (this.afterComponentConstruct) {
      this.afterComponentConstruct(this);
    }
  }

  /**
   * creates the elements of a component
   * @public
   * @return {Node}
   */
  create() {
    if (this.beforeComponentCreate) {
      this.beforeComponentCreate(this);
    }
    // creating the component root element
    this.node = document.createElement(this.name);

    // setting this element display to block by default
    this.node.style.display = 'block';
    this.node.setAttribute(DATA_COMPONENT_ATTRIBUTE, true);

    // get the vnode construct
    this.componentVdom = this.render();

    // get the template by call the render
    this.template = createElement(this.componentVdom);

    this.node.appendChild(this.template);

    if (this.afterComponentCreate) {
      this.afterComponentCreate(this);
    }

    return this.node;
  }

  /**
   * changes the component state
   * trigger the update methods
   * @public
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
    if (this.beforeComponentUpdate) {
      this.beforeComponentUpdate(this);
    }

    const newTemplate = this.render();

    this.patch(this.template, newTemplate);

    if (this.afterComponentUpdate) {
      this.afterComponentUpdate(this);
    }
  }

  /**
   * patch
   */
  patch(oldTemplate, newTemplate) {
    console.log(oldTemplate);
    console.log(newTemplate);
  }

  /**
   * remove component and its childs
   */
  destroy() {
    if (this.beforeComponentUnload) {
      this.beforeComponentUnload(this);
    }

    const parent = this.node.parentElement;
    parent.removeChild(this.node);

    if (this.beforeComponentUnload) {
      this.beforeComponentUnload(this);
    }
  }
}
