<p align="center" ><a href="https://github.com/janmarkuslanger/powerjs"><img alt="Powerjs - Logo" src="https://cdn.rawgit.com/janmarkuslanger/powerjs/fd582465/assets/logo.svg" width="300" height="auto"/></a></p>

<p align="center"><strong>Powerjs is a library to build Components for the web.</strong></p>

<p align="center">
  <img src="https://img.shields.io/github/license/janmarkuslanger/powerjs.svg?style=flat-square">
  <img src="https://img.shields.io/github/size/janmarkuslanger/powerjs/dist/power.js.svg?style=flat-square">
 <img src="https://img.shields.io/npm/v/powerjs-lib.svg?style=flat-square">
</p>

---

## Why Powerjs?

**⌚️ Fast Rendering**
<br>Using Virtual DOM makes rendering elements pretty fast.

**💾 Minimalistic**
<br>Powerjs makes use of just 3 functions.

**🐦 No Dependencies**
<br>Powerjs is a standalone library with no dependencies.

**📦 Components**
<br>Build Components with an encapsulated state.

## Links

- <a href="https://github.com/janmarkuslanger/powerjs/blob/master/CHANGELOG.md">Change log</a>
- <a href="https://github.com/janmarkuslanger/powerjs/tree/master/test">Testing</a>

## Before you start
You can use Powerjs with just place the script into your document, but if you prefer html Syntax you should take a look at JSX. There is a <a href="https://babeljs.io/docs/en/babel-plugin-transform-react-jsx/">Babel plugin</a> which transforms your JSX Syntax into a VDom.

## Installation

Powerjs comes as an UMD library, so you have a few options to start using it.

Attach the library as an object to the window `Power`:
`<script src="power.js"></script>`

Via import:
``` javascript
import { render, h, Component } from 'powerjs-lib';

// h(...)

```

Via require:
``` javascript
const Power = require('powerjs-lib');

// Power.h(...)

```

## Get started

There is a <a href="https://github.com/janmarkuslanger/powerjs-starter">repository</a> on github which helps you to get started.

Here is a typical example for a counter component.

JSX:

``` javascript

import { h, render, Component } from 'powerjs-lib';

class Counter extends Component {
  render(){
    return (
      <div className="counter">
        <p>Counter: {this.data.counter.toString()}</p>
        <button click={() => { this.data.counter += 1; }}>+</button>
        <button click={() => { this.data.counter -= 1; }}>-</button>
        <button click={() => { this.data.counter = 0; }}>Reset</button>
      </div>
    )
  }
}

const myCounter = new Counter({counter: 0});
render(myCounter, document.body);

```

Plain JS:

``` javascript

import { h, render, Component } from 'powerjs-lib';

class Counter extends Component {
  render() {
    return (
      h('div', {class: 'counter'},
        h('p', null, `Counter: ${this.data.counter.toString()}`),
        h('button', {click: () => { this.data.counter += 1; }}, '+'),
        h('button', {click: () => { this.data.counter -= 1; }}, '-'),
        h('button', {click: () => { this.data.counter = 0; }}, 'Reset')
      )
    )
  }
}

const myCounter = new Counter({counter: 0});
render(myCounter, document.body);

```

## Features wishes, Bugfixes or anything else?
Feel free to submit an issue in any case or fork this project to make this better.

## Thanks to
- <a href="https://github.com/dysfunc">Dysfunc</a>
