import { useEffect, useRef } from 'react'

// Yellow crosshair cursor (desktop / mouse only)
export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    document.body.classList.add('custom-cursor')
    let x = 0, y = 0, rx = 0, ry = 0, raf
    const root = dot.current?.parentElement
    const move = (e) => { x = e.clientX; y = e.clientY; root?.classList.remove('opacity-0') }
    const over = (e) => {
      const hot = e.target.closest('a, button, input, textarea, select, [data-hot]')
      ring.current?.firstElementChild?.classList.toggle('scale-150', !!hot)
    }
    const loop = () => {
      rx += (x - rx) * 0.18; ry += (y - ry) * 0.18
      if (dot.current) dot.current.style.transform = `translate(${x}px, ${y}px)`
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px)`
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    loop()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      document.body.classList.remove('custom-cursor')
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-[90] hidden [@media(pointer:fine)]:block opacity-0 transition-opacity">
      <div ref={dot} className="absolute -left-[3px] -top-[3px] w-1.5 h-1.5 bg-hud" />
      <div ref={ring} className="absolute -left-4 -top-4">
        <div className="w-8 h-8 transition-transform duration-200">
          <span className="absolute left-0 top-0 w-2 h-2 border-t border-l border-hud" />
          <span className="absolute right-0 top-0 w-2 h-2 border-t border-r border-hud" />
          <span className="absolute left-0 bottom-0 w-2 h-2 border-b border-l border-hud" />
          <span className="absolute right-0 bottom-0 w-2 h-2 border-b border-r border-hud" />
        </div>
      </div>
    </div>
  )
}
