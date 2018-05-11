# 👊 powerjs

<p align="left">
  <img src="https://img.shields.io/github/license/janmarkuslanger/powerjs.svg?style=flat-square">
  <img src="https://img.shields.io/github/size/janmarkuslanger/dist/power.js.svg?style=flat-square">
</p>

**Powerjs is a small but powerful library for building user interfaces with no depenencies.**

## 💥 What can you do with powerjs?

* Building Stateful / Stateless Components
* Building Apps
* Render dynamic elements

## 🌟 Example

``` javascript
class TodoApp extends Power.Component {

  render () {

    return ([
      Power.h('input', {type: 'text', placeholder: 'Insert task', keyup: (e, element) => {
        if(e.keyCode === 13) {
          this.setState(() => this.data.todos.push(element.value))
        }
      }}),
      this.renderTodos()
    ])

  }

  renderTodos () {

    if(this.data.todos.length === 0) {
      return null;
    } else {
      const todos = this.data.todos.map(todo => Power.h('li', todo) )
      return Power.h('ul', todos)
    }

  }

}

Power.render(new TodoApp({todos: []}), mount)
```
