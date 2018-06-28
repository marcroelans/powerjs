import {
  createElement,
  createElement as h,
} from './core/createElement/createElement';
import { render } from './core/render/render';
import { Component } from './core/component/component';
import { registerComponent } from './core/component/registerComponent';

/**
  * Power version
  *
  * @type {String}
  */
const version = '1.1.3';

export {
  version,
  createElement,
  h,
  render,
  Component,
  registerComponent,
};
