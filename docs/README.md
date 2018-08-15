# API

Coming soon.

## Functions / Class

- [createElement](#createelement)
- [render](#render)
- [Component](#component)
- [version](#version)

## createElement as h


This function returns a VDOM Element with given arguments. You can use the function as `createElement` or `h`.

`Power.h(tagName, ...arguments)`

| param | type |
|-------|------|
| tagName | String |
| ...arguments | Array/String/VDOM/Object|

***Example***
``` javascript
Power.h('h1', 'Hello World', {class: 'myClass'},
  Power.h('h2', 'I am a child of Hello World')
)
```

### createElement | Events

You can pass the event into a object with  (on)event `onclick || click`.
The function gets two paramters.
1. Event
2. Element

***Example***

``` javascript
Power.h('h1', 'Click me', { click: (event, element) => {
  console.log(event)
  console.log(element)
}})
```

### createElement | Styles
Comming soon.

## render
Comming soon.

## Component

| Prop | Type | Description |
| -----|------|-------------|
| this.node | Node | Is the root Component Element |
| this.data | Object | Stores the Components State |

This is the base class of the Components. This should get extended by your own Component.

``` javascript

  class myComponent extends Power.Component {

  }

```

### Component.create()

This function should return a VDOM Model.

``` javascript

  class myComponent extends Power.Component {

    render() {
      return (
        Power.h('div', {class: 'myTest'},
          Power.h('h1', this.data.message)
        )
      )
    }

  }

```

To render a Component in the DOM you just need to pass it to the Power.render() function.

``` javascript
  const componentObject = new myComponent({message: 'Hello World'});
  Power.render(componentObject.create(), document.body)
```

### Component Hooks

#### Component Hooks - beforeComponentMount(Component)
Comming soon

#### Component Hooks - afterComponentMount(Component)
Comming soon

## version

Returns the current version of Power as a string

`Power.version()`
