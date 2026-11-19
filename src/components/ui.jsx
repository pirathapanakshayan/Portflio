import { useEffect, useState } from 'react'

// Yellow corner brackets around any box
export function Brackets({ size = 'w-4 h-4' }) {
  const c = `absolute ${size} border-hud pointer-events-none`
  return (
    <>
      <span className={`${c} -top-px -left-px border-t-2 border-l-2`} />
      <span className={`${c} -top-px -right-px border-t-2 border-r-2`} />
      <span className={`${c} -bottom-px -left-px border-b-2 border-l-2`} />
      <span className={`${c} -bottom-px -right-px border-b-2 border-r-2`} />
    </>
  )
}

// "01  ABOUT_ME ———— MODULE_01 // IDENTITY"
export function SectionTitle({ num, title, tag }) {
  return (
    <div className="reveal flex items-center gap-4 mb-12">
      <span className="cut bg-hud text-void font-display font-bold text-lg px-3 py-1">{String(num).padStart(2, '0')}</span>
      <h2 className="font-display font-bold text-3xl md:text-4xl text-chrome tracking-wider">{title}</h2>
      <span className="relative flex-1 h-px bg-line overflow-hidden hidden sm:block">
        <span className="absolute inset-y-0 w-16 bg-hud" style={{ animation: 'sweep 3.5s ease-in-out infinite' }} />
      </span>
      <span className="hidden md:flex items-center gap-2 text-xs text-dim">
        <span className="w-2 h-2 rounded-full bg-hud animate-blink" />
        MODULE_{String(num).padStart(2, '0')} // <span className="text-hud">{tag}</span>
      </span>
      <style>{'@keyframes sweep{0%{left:-4rem}100%{left:100%}}'}</style>
    </div>
  )
}

export function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`relative max-w-[1600px] mx-auto px-5 md:px-10 xl:px-16 py-24 ${className}`}>
      {children}
    </section>
  )
}

export function Button({ href, children, variant = 'solid', ...rest }) {
  const base = 'cut inline-flex items-center gap-2 px-6 py-3 font-display font-bold tracking-widest text-sm transition'
  const styles = variant === 'solid'
    ? 'bg-hud text-void hover:bg-chrome'
    : 'border border-silver/40 text-chrome hover:border-hud hover:text-hud bg-white/5'
  return (
    <a href={href} className={`${base} ${styles}`} {...rest}>
      {children}
    </a>
  )
}

// Types the given lines one by one, deletes, loops
export function useTyping(lines, speed = 55, pause = 1400) {
  const [text, setText] = useState('')
  useEffect(() => {
    let i = 0, j = 0, deleting = false, timer
    const tick = () => {
      const line = lines[i]
      if (!deleting) {
        j++
        if (j === line.length) { deleting = true; timer = setTimeout(tick, pause); setText(line); return }
      } else {
        j--
        if (j === 0) { deleting = false; i = (i + 1) % lines.length }
      }
      setText(line.slice(0, j))
      timer = setTimeout(tick, deleting ? speed / 2 : speed)
    }
    timer = setTimeout(tick, 400)
    return () => clearTimeout(timer)
  }, [lines, speed, pause])
  return text
}

// Adds .in to every .reveal element when it scrolls into view
export function useReveal(ready) {
  useEffect(() => {
    if (!ready) return
    const els = document.querySelectorAll('.reveal:not(.in)')
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
      })
    }, { threshold: 0.12 })
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [ready])
}
