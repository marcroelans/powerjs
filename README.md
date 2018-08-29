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

1. Just place the script before the closing `</body>` tag
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

``` javascript
 <body>

    <Counter counter="23|number"></Counter>

    <script src="power.js"></script>
    <script>


      class Counter extends Power.Component {
        render() {
          return Power.h('h1', this.data.counter.toString(), {click: () => {
            this.data.counter += 1;
          }})
        }
      }

      Power.registerComponent(Counter);

    </script>

  </body>

```

## ❤️ Contributing
Contributing is always good in any case. Let me know what you think.
