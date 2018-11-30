import { useMemo, useEffect } from 'react'

const makeCtx = () => {
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = 16
  const ctx = canvas.getContext("2d")
  ctx.font = "12px Arial"
  return ctx
}

const Favicon = ({ number, color='black', bg='white' }) => {
  const ctx = useMemo(makeCtx)
  useEffect(() => {
    ctx.fillStyle = bg
    ctx.fillRect(0, 0, 16, 16)
    ctx.fillStyle = color
    ctx.fillText(number, 1, 12)
    const favicon = document.querySelector("link[href='/favicon.ico']")
    favicon.href = ctx.canvas.toDataURL('image/png')
  }, [number, color, bg])

  // Render nothing to the dom
  return null
}

export default Favicon
