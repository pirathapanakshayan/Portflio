import { useEffect, useRef, useState } from 'react'
import { profile, projects, skills, services } from '../data'

const HELP = [
  'help       → list commands',
  'whoami     → who am I',
  'skills     → my tech stack',
  'services   → what I can build for you',
  'projects   → my work',
  'contact    → how to reach me',
  'hire       → 😎',
  'clear      → clear screen',
  'exit       → close terminal',
]

function run(cmd) {
  switch (cmd) {
    case 'help': return HELP
    case 'whoami': return ['Pirathapan Akshayan — freelance software developer, learning AI & Cybersecurity.']
    case 'skills': return [skills.core.map((s) => s.name).join(' · '), 'learning: ' + skills.learning.map((l) => l.name).join(' · ')]
    case 'services': return services.map((s) => '• ' + s.title + (s.soon ? ' (soon)' : ''))
    case 'projects': return projects.map((p) => `• ${p.title} — ${p.tags.join(', ')}`)
    case 'contact': return [profile.email, profile.linkedin, profile.github]
    case 'hire':
    case 'sudo hire': return ['ACCESS GRANTED. Let\'s build something. → scrolling to contact...']
    case '': return []
    default: return [`command not found: ${cmd} — type "help"`]
  }
}

export default function Terminal() {
  const [open, setOpen] = useState(false)
  const [lines, setLines] = useState(['AKSHAYAN.SYS terminal v1.0 — type "help"'])
  const [value, setValue] = useState('')
  const inputRef = useRef(null)
  const endRef = useRef(null)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === '`' || e.key === '~') {
        const tag = document.activeElement?.tagName
        if (!open && (tag === 'INPUT' || tag === 'TEXTAREA')) return
        e.preventDefault()
        setOpen((o) => !o)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => { if (open) inputRef.current?.focus() }, [open])
  useEffect(() => { endRef.current?.scrollIntoView({ block: 'end' }) }, [lines])

  const submit = (e) => {
    e.preventDefault()
    const cmd = value.trim().toLowerCase()
    setValue('')
    if (cmd === 'clear') return setLines([])
    if (cmd === 'exit') return setOpen(false)
    setLines((l) => [...l, `> ${value}`, ...run(cmd)])
    if (cmd === 'hire' || cmd === 'sudo hire') {
      setTimeout(() => { setOpen(false); document.getElementById('contact')?.scrollIntoView() }, 900)
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-50 w-12 h-12 grid place-items-center glass cut text-hud hover:bg-hud hover:text-void transition"
        aria-label="Open terminal"
        title="Terminal (~)"
      >
        <span className="font-mono text-lg">&gt;_</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[80] bg-void/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-4" onClick={() => setOpen(false)}>
          <div className="w-full max-w-2xl glass cut border-hud/40" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-4 py-2 border-b border-line text-xs">
              <span className="text-hud">AKSHAYAN.SYS // TERMINAL</span>
              <button onClick={() => setOpen(false)} className="text-dim hover:text-hud">[ ESC ]</button>
            </div>
            <div className="h-72 overflow-y-auto p-4 text-sm space-y-1" onClick={() => inputRef.current?.focus()}>
              {lines.map((l, i) => (
                <p key={i} className={l.startsWith('>') ? 'text-hud' : 'text-silver'}>{l}</p>
              ))}
              <form onSubmit={submit} className="flex gap-2">
                <span className="text-hud">&gt;</span>
                <input
                  ref={inputRef}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-chrome caret-hud"
                  spellCheck="false"
                  autoComplete="off"
                  aria-label="Terminal command"
                />
              </form>
              <div ref={endRef} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
