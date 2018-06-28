import {
  createElement,
  createElement as h } from './core/createElement/createElement.js';
import { render } from './core/render/render.js';
import { Component } from './core/component/component.js';
import { registerComponent } from './core/component/registerComponent';


/**
  * Power version
  *
  * @type {String}
  */
const version = '1.1.2';

export {version, createElement, h, render, Component, registerComponent };
