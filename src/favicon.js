import { useMemo, useEffect } from 'react'

class FaviconRenderer {
  constructor() {
    this.canvas = document.createElement('canvas')
    this.canvas.width = this.canvas.height = 16
    this.ctx = this.canvas.getContext("2d")
    this.ctx.font = "12px Arial"
    this.favicon = document.querySelector("link[href='/favicon.ico']")
  }
  render(number, color='black', bg='white') {
    this.ctx.fillStyle = bg
    this.ctx.fillRect(0, 0, 16, 16)
    this.ctx.fillStyle = color
    this.ctx.fillText(number, 1, 12)
    this.favicon.href = this.canvas.toDataURL('image/png')
  }
}

const ONCE = []

const Favicon = ({ number, color='black', bg='white' }) => {
  const renderer = useMemo(() => new FaviconRenderer(), ONCE)
  useEffect(() => {
    renderer.render(number, color, bg)
  }, [number, color, bg])

  // Render nothing to the dom
  return null
}

export default Favicon
