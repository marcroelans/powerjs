# 👊 power.js

<p align="left">
  <img src="https://img.shields.io/github/license/janmarkuslanger/powerjs.svg?style=flat-square">
  <img src="https://img.shields.io/github/size/janmarkuslanger/powerjs/dist/power.js.svg?style=flat-square">
 <img src="https://img.shields.io/npm/v/powerjs-lib.svg?style=flat-square">
</p>

**Powerjs is a small but powerful library for building user interfaces with no dependencies.**

- [What is power.js?](#-what-is-powerjs)
- [Installation](#-installation)
- [Usage](#-usage)
- [Example](#-example)
- [Contributing](#%EF%B8%8F-contributing)
- <a href="https://github.com/janmarkuslanger/powerjs/tree/master/docs">Documentations</a>

## 💥 What is powerjs?

Power is a small but powerful library based on components.
This library is roughly reduces to the only necessary, which makes it easy to learn and use to extend or build websites or apps.
Powerjs uses ES6 Classes for Components and the VDOM for rendering. 

## 📁 Installation

``` npm
  npm i powerjs-lib
```

or download this repository.

## 💻 Usage

1. Just place the script
``` html
<script src="https://unpkg.com/powerjs-lib@latest/dist/power.js"></script>
<script>
  console.log(Power)
</script>
```

2. require

``` javascript

  const Power = require('powerjs-lib');

```


## 🌟 Example

<p align="center"><kbd><img src="https://cdn.rawgit.com/janmarkuslanger/powerjs/6d255831/assets/example.gif"></kbd></p>

``` javascript
 <body>

    <todo todos="[Wash the dishes, Code]"></todo>


    <script src="power.js"></script>
    <script>


      class Todo extends Power.Component {

        render() {
          return ([
            Power.h('input', {type: 'text', placeholder: 'Add task and press Enter', keyup: (event, element) => {
              if(event.keyCode === 13) {
                this.setState(() => this.data.todos.push(element.value))
              }
            }}),
            this.renderTodos()
          ])
        }

        renderTodos() {
          if(this.data.todos.length === 0) {
            return;
          }

          const todos = this.data.todos.map(todo => Power.h('li', todo, {click: (event, element) => {
            const position = this.data.todos.indexOf(element.textContent);
            this.setState( () => this.data.todos.splice(position, 1) )
          }}));

          return Power.h('ul', todos);
        }

      }

      Power.registerComponent(Todo)

    </script>

  </body>

```

## ❤️ Contributing
Contributing is always good in any case. Let me know what you think.
