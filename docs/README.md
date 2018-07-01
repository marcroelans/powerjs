# API

Coming soon.

## Functions / Class

- [createElement](#createelement)
- [render](#render)
- [Component](#component)
- [version](#version)

## createElement

This function returns a VDOM Element with given arguments.

`Power.component(tagName, ...arguments)`

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
Comming soon.

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

### Component.render() 

The Component needs at least this function. This function should return a VDOM Model.

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
  Power.render(new myComponent({message: 'Hello World'}), document.body)
```

### Component Hooks

#### Component Hooks - beforeComponentMount(Component)
Comming soon

#### Component Hooks - afterComponentMount(Component)
Comming soon

## version

Returns the current version of Power as a string 

`Power.version`
