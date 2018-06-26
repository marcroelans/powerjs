
class NavigationBar extends Power.Component {

  render() {
    return(
      Power.h('div', {class: 'inside'},
        Power.h('a', {href: '/', class: 'logo'},
          Power.h('span', 'Power.js')
        ),
        Power.h('div', {class: 'navigation'},
          Power.h('a', {class: 'item', href: '#'}, 'API'),
          Power.h('a', {class: 'item', href: '#'}, 'Demos'),
          Power.h('a', {class: 'item', href: '#'}, 'Github')
        )
      )
    )
  }

}

Power.registerComponent(NavigationBar);
