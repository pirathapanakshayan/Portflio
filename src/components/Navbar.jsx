import { useEffect, useState } from 'react'

const LINKS = [
  ['about', 'ABOUT'],
  ['services', 'SERVICES'],
  ['skills', 'SKILLS'],
  ['projects', 'WORK'],
  ['journey', 'JOURNEY'],
  ['contact', 'CONTACT'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
      let cur = ''
      for (const [id] of LINKS) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < 140) cur = id
      }
      setActive(cur)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-void/70 backdrop-blur-md border-b border-line' : ''}`}>
      <nav className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display font-bold text-chrome tracking-widest">
          <span className="flex gap-0.5">
            <span className="w-3 h-5 bg-hud -skew-x-12" />
            <span className="w-1.5 h-5 bg-silver -skew-x-12" />
          </span>
          AKSHAYAN<span className="text-hud">.SYS</span>
        </a>

        <ul className="hidden md:flex items-center gap-7 text-xs tracking-[0.2em]">
          {LINKS.map(([id, label], i) => (
            <li key={id}>
              <a href={`#${id}`} className={`transition hover:text-hud ${active === id ? 'text-hud' : 'text-silver'}`}>
                <span className="text-dim mr-1">0{i + 1}</span>{label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <span className="hidden lg:flex items-center gap-2 text-[11px] text-silver border border-line px-3 py-1.5">
            <span className="w-2 h-2 rounded-full bg-hud animate-blink" /> AVAILABLE FOR HIRE
          </span>
          <button
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 border border-line"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span className={`block w-5 h-0.5 bg-hud transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block w-5 h-0.5 bg-hud transition ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-hud transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 bg-void/95 backdrop-blur-md ${open ? 'max-h-96 border-b border-line' : 'max-h-0'}`}>
        <ul className="px-5 py-4 space-y-3 text-sm tracking-[0.2em]">
          {LINKS.map(([id, label], i) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => setOpen(false)} className="block py-1 hover:text-hud">
                <span className="text-hud mr-2">0{i + 1}</span>{label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
