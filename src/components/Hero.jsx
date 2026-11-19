import { profile, projects, asset } from '../data'
import { Brackets, Button, useTyping } from './ui'

export default function Hero() {
  const typed = useTyping(profile.typing)

  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-5 md:px-10 xl:px-16 w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        {/* ---------- Left: text ---------- */}
        <div className="reveal">
          <div className="flex flex-wrap items-center gap-3 text-[11px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] text-silver mb-6">
            <span className="w-2.5 h-2.5 bg-hud" />
            <span className="w-2.5 h-2.5 border border-hud" />
            <span className="hidden sm:inline">SYS_2026 //</span> STATUS: <span className="text-hud">AVAILABLE FOR HIRE</span>
          </div>

          <h1 className="font-display font-bold leading-none">
            <span className="shine block text-5xl sm:text-7xl md:text-8xl 2xl:text-9xl tracking-wide animate-glitch">{profile.name}</span>
            <span className="mt-3 flex items-center gap-4">
              <span className="hazard w-14 h-7 shrink-0" />
              <span className="text-hud text-2xl sm:text-4xl 2xl:text-5xl tracking-[0.35em]">{profile.surname}</span>
            </span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-chrome min-h-[1.75em]">
            <span className="text-hud">&gt; </span>{typed}<span className="inline-block w-2.5 h-5 align-middle bg-hud ml-1 animate-blink" />
          </p>

          <p className="mt-5 max-w-xl 2xl:max-w-2xl 2xl:text-lg text-silver leading-relaxed">{profile.tagline}</p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="#contact">[ HIRE ME ]</Button>
            <Button href="#projects" variant="ghost">[ VIEW WORK ]</Button>
            {profile.cv && <Button href={profile.cv} variant="ghost" download>[ DOWNLOAD CV ]</Button>}
          </div>

          {/* mini HUD stats */}
          <div className="mt-12 grid grid-cols-3 max-w-md gap-3">
            {[
              [String(projects.length).padStart(2, '0'), 'PROJECTS'],
              ['05+', 'LANGUAGES'],
              ['24H', 'REPLY TIME'],
            ].map(([n, l]) => (
              <div key={l} className="glass cut px-4 py-3">
                <div className="font-display font-bold text-2xl text-chrome">{n}</div>
                <div className="text-[10px] tracking-[0.2em] text-dim">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- Right: portrait ---------- */}
        <div className="reveal relative mx-auto w-full max-w-[560px] aspect-square">
          <div className="absolute inset-[6%] rounded-full bg-hud/20 blur-3xl animate-pulse-glow" />
          <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full">
            <g className="animate-spin-slow" style={{ transformOrigin: '200px 200px' }}>
              {Array.from({ length: 48 }).map((_, i) => (
                <line key={i} x1="200" y1={i % 6 ? 14 : 6} x2="200" y2="22"
                  stroke={i % 6 ? '#3a3a3a' : '#ffd600'} strokeWidth="2" transform={`rotate(${i * 7.5} 200 200)`} />
              ))}
            </g>
            <circle cx="200" cy="200" r="168" fill="none" stroke="#2a2a2a" strokeDasharray="2 8" />
            <g className="animate-spin-rev" style={{ transformOrigin: '200px 200px' }}>
              <path d="M200 40 A160 160 0 0 1 360 200" fill="none" stroke="#ffd600" strokeWidth="3" />
              <path d="M200 360 A160 160 0 0 1 40 200" fill="none" stroke="#ffd600" strokeWidth="3" />
              <path d="M360 200 A160 160 0 0 1 313 313" fill="none" stroke="#c0c0c0" strokeWidth="1.5" />
            </g>
          </svg>
          <img
            src={asset('img/cyborg.webp')}
            alt="Pirathapan Akshayan"
            className="absolute inset-0 w-full h-full object-contain animate-float drop-shadow-[0_0_30px_rgba(255,214,0,0.15)]"
          />

          {/* ID tag */}
          <div className="glass cut absolute -left-2 sm:-left-8 bottom-10 px-4 py-3 text-[11px] leading-5">
            <Brackets size="w-2 h-2" />
            <div className="text-dim">ID : A2026_X17</div>
            <div className="text-silver">CLASS : <span className="text-hud">FREELANCER</span></div>
            <div className="text-silver">CORE : C# · JAVA · PYTHON</div>
          </div>
          <div className="glass cut absolute -right-2 sm:-right-6 top-10 px-4 py-3 text-[11px]">
            <div className="flex items-center gap-2 text-silver">
              <span className="w-2 h-2 rounded-full bg-hud animate-blink" /> DATA STREAM
            </div>
            <div className="text-hud">&gt;&gt; CONNECTED</div>
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <a href="#about" className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] tracking-[0.3em] text-dim hover:text-hud">
        SCROLL
        <span className="w-px h-10 bg-gradient-to-b from-hud to-transparent" />
      </a>
    </section>
  )
}
