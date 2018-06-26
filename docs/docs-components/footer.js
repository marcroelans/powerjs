class CustomFooter extends Power.Component {

  render(){
    return(
      Power.h('div', {class: 'inside'},
        Power.h('p', 'Released under the MIT License'),
        Power.h('p', `Copyright © ${new Date().getFullYear()} Jan-Markus Langer`)
      )
    )
  }

}

Power.registerComponent(CustomFooter)
