import { useEffect, useState } from 'react'

const LINES = [
  '>> INITIALIZING PROFILE...',
  '>> LOADING MODULES: AI · CYBERSECURITY · SOFTWARE ENGINEERING',
  '>> IDENTITY VERIFIED: PIRATHAPAN AKSHAYAN',
  '>> ALL SYSTEMS OPERATIONAL',
]

// Boot screen shown once per visit
export default function Boot({ onDone }) {
  const [shown, setShown] = useState(0)
  const [progress, setProgress] = useState(0)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const t1 = setInterval(() => setShown((s) => Math.min(s + 1, LINES.length)), 330)
    const t2 = setInterval(() => setProgress((p) => Math.min(p + 4, 100)), 55)
    const t3 = setTimeout(() => setLeaving(true), 1650)
    const t4 = setTimeout(onDone, 2100)
    return () => { clearInterval(t1); clearInterval(t2); clearTimeout(t3); clearTimeout(t4) }
  }, [onDone])

  return (
    <div
      className={`fixed inset-0 z-[100] bg-void flex items-center justify-center px-6 transition-opacity duration-500 ${leaving ? 'opacity-0' : ''}`}
      onClick={onDone}
    >
      <div className="w-full max-w-xl">
        {LINES.slice(0, shown).map((l, i) => (
          <p key={i} className={`text-sm md:text-base mb-2 ${i === LINES.length - 1 ? 'text-hud' : 'text-silver'}`}>{l}</p>
        ))}
        <div className="mt-6 h-2 bg-line overflow-hidden">
          <div className="h-full bg-hud transition-[width] duration-75" style={{ width: `${progress}%` }} />
        </div>
        <div className="mt-2 flex justify-between text-xs text-dim">
          <span>BOOT_SEQUENCE</span>
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  )
}
