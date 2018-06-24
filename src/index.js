import {
  createElement,
  createElement as h } from './core/createElement/createElement.js';
import { render } from './core/render/render.js';
import { Component } from './core/component/component.js';
import { awakeComponentDom } from './core/component/awakeComponent';


/**
  * Power version
  *
  * @type {String}
  */
const version = '1.1.1';

awakeComponentDom();

export {version, createElement, h, render, Component };
