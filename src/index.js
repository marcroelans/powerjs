import { createVnode as h } from './core/vdom/createVdom';
import { render } from './core/render/render';
import { Component } from './core/component/component';
import { registerComponent } from './core/component/registerComponent';

/**
 * Power version
 * @public
 * @type {String}
 */
const version = '[AIV]{version}[/AIV]';

export { version, h, render, Component, registerComponent };
