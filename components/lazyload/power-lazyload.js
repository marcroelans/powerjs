class LazyImage extends Power.Component {

  render() {
    return (
      Power.h('img', {style: 'opacity: 0', 'src': this.data.src, load: function(e, el)  {
        el.style.opacity = '1';
      }})
    )
  }

}
