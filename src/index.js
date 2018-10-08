import { createVnode as h } from './core/vdom/create';
import { render } from './core/render/render';
import { Component } from './core/component/component';
import { registerComponent } from './core/component/register';

/**
 * Power version
 * @public
 * @type {String}
 */
const version = '[AIV]{version}[/AIV]';

export { version, h, render, Component, registerComponent };
