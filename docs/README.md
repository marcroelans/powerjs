# API

Power comes with yet three powerful parts.
**Power.createElement** or shorter Power.h
**Power.Component**
**Power.render**

---

## Power.createElement(tag, ...options);

You can also use Power.h
This function create a VNode and returns it. It is possible to create any element you want.

Basic Element
`` javascript

  Power.createElement('h1', 'Hello World');

  // <h1>Hello World</h1>

``

Element with an event listener
`` javascript

  Power.createElement('h1', {onclick: () => { console.log('Hi')} }, 'Hello World');

  // <h1>Hello World</h1>

``
