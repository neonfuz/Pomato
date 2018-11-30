import { Component } from 'react'

class Favicon extends Component {
  constructor(props) {
    super(props)
    this.canvas = document.createElement('canvas')
    this.canvas.width = this.canvas.height = 16
    this.ctx = this.canvas.getContext("2d")
    this.ctx.font = "12px Arial"
    this.favicon = document.querySelector("link[href='/favicon.ico']")
  }
  componentDidMount() { this.renderFavicon() }
  componentDidUpdate() { this.renderFavicon() }
  renderFavicon() {
    const {number, color = 'black', bg = 'white'} = this.props
    this.ctx.fillStyle = bg
    this.ctx.fillRect(0, 0, 16, 16)
    this.ctx.fillStyle = color
    this.ctx.fillText(number, 1, 12)
    this.favicon.href = this.canvas.toDataURL('image/png')
  }
  render() { return null } // Render nothing to the dom
}

export default Favicon
