
class NavigationBar extends Power.Component {

  render() {
    return(
      Power.h('div', {class: 'inside'},
        Power.h('a', {href: '/', class: 'logo'},
          Power.h('span', 'Power.js')
        ),
        Power.h('div', {class: 'navigation'},
          Power.h('div', {class: 'inner'},
            Power.h('a', {class: 'item', href: '#'}, 'API (Comming soon)'),
            Power.h('a', {class: 'item', href: '#'}, 'Demos (Comming soon)'),
            Power.h('a', {class: 'item', href: 'https://github.com/janmarkuslanger/powerjs', target: '_blank'}, 'Github')
          )
        ),
        Power.h('div', {class: 'burger'},
          Power.h('div', {class: 'inner'},
            Power.h('div'),
            Power.h('div'),
            Power.h('div')
          )
        ),
      )
    )
  }

  afterComponentMount(component) {

    component.node.querySelector('.burger').addEventListener('click', function(){
      this.classList.toggle('is--active')
      component.node.querySelector('.navigation').classList.toggle('is--active');
    });

  }

}

Power.registerComponent(NavigationBar);
