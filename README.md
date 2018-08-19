<p align="center"><img width="150" height="auto" src="https://cdn.rawgit.com/janmarkuslanger/powerjs/9a5c9cc4/assets/powerjs-logo.svg"></p>

<p align="center">
  <img src="https://img.shields.io/github/license/janmarkuslanger/powerjs.svg?style=flat-square">
  <img src="https://img.shields.io/github/size/janmarkuslanger/powerjs/dist/power.js.svg?style=flat-square">
 <img src="https://img.shields.io/npm/v/powerjs-lib.svg?style=flat-square">
</p>

---

**Build powerful UI Components with no dependencies.**

- [What is power.js?](#-what-is-powerjs)
- [Installation](#-installation)
- [Usage](#-usage)
- [Example](#-example)
- [Contributing](#%EF%B8%8F-contributing)
- <a href="https://github.com/janmarkuslanger/powerjs/tree/master/docs">Documentations</a>

## 💥 What is powerjs?

Powerjs is a small library to build UI Components with no dependencies.

## 📁 Installation

``` npm
  npm i powerjs-lib
```

or download this repository.

## 💻 Usage

1. Just place the script before the closing </body> tag
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
