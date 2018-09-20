import {
  createElement,
  createElement as h,
} from './core/createElement/createElement';
import { render } from './core/render/render';
import { Component } from './core/component/component';
import { registerComponent } from './core/component/registerComponent';

/**
  * Power version
  * @public
  * @type {String}
  */
const version = '[AIV]{version}[/AIV]';

export {
  version,
  createElement,
  h,
  render,
  Component,
  registerComponent,
};
