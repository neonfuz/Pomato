import { Component } from 'react'

class Favicon extends Component {
  constructor(props) {
    super(props)
    this.canvas = document.createElement('canvas')
    this.canvas.width = this.canvas.height = 16
    this.ctx = this.canvas.getContext("2d")
    this.favicon = document.querySelector("link[rel$='icon']")
  }
  componentDidMount() { this.renderFavicon() }
  componentDidUpdate() { this.renderFavicon() }
  renderFavicon() {
    const {
      number,
      color = 'black', bg = 'white',
      weight = 'normal',
      off1 = 7, off2 = 0,
    } = this.props
    this.ctx.fillStyle = bg
    this.ctx.fillRect(0, 0, 16, 16)
    this.ctx.fillStyle = color
    const offset = number < 10 ? off1 : off2
    this.ctx.font = `${weight} 12px Arial`
    this.ctx.fillText(number, 1 + offset, 12)
    this.favicon.href = this.canvas.toDataURL('image/png')
  }
  render() { return null } // Render nothing to the dom
}

export default Favicon
