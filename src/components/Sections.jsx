import { useState } from 'react'
import { about, services, skills, projects, processSteps, whyMe, timeline, profile, asset } from '../data'
import { Brackets, Section, SectionTitle } from './ui'
import Icon from './Icon'

/* ============================ 01 ABOUT ============================ */
export function About() {
  return (
    <Section id="about">
      <SectionTitle num={1} title="ABOUT_ME" tag="IDENTITY" />
      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8">
        <div className="reveal glass cut p-7 md:p-9">
          <p className="text-sm text-dim mb-6">$ whoami <span className="text-hud">&gt;</span> <span className="font-display font-bold tracking-[0.3em] text-hud">PROFILE.DAT</span></p>
          <div className="border-l-2 border-hud pl-5 space-y-4 leading-relaxed">
            {about.paragraphs.map((p) => <p key={p}>{p}</p>)}
          </div>
        </div>

        <div className="reveal relative glass cut p-7">
          <Brackets />
          <ul className="space-y-4 text-sm">
            {about.info.map(([k, v]) => (
              <li key={k} className="flex gap-3">
                <span className="w-20 shrink-0 text-hud">{k}</span>
                <span className="text-dim">:</span>
                <span className="text-chrome">
                  {k === 'STATUS' && <span className="inline-block w-2 h-2 rounded-full bg-hud mr-2 animate-blink" />}
                  {v}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-7 h-px bg-line" />
          <div className="mt-5 flex items-center gap-4">
            <div className="relative w-16 h-16 overflow-hidden border border-line">
              <img src={asset('img/cyborg.webp')} alt="" className="w-full h-full object-cover object-[50%_28%] scale-[2.3]" />
              <span className="absolute inset-x-0 h-4 bg-gradient-to-b from-transparent to-hud/40" style={{ animation: 'face 2.4s ease-in-out infinite alternate' }} />
            </div>
            <div className="text-xs">
              <div className="text-silver">IDENTITY : <span className="text-hud">VERIFIED</span></div>
              <div className="text-dim mt-1">SCAN : COMPLETE</div>
            </div>
          </div>
          <style>{'@keyframes face{from{top:-16px}to{top:64px}}'}</style>
        </div>
      </div>
    </Section>
  )
}

/* ============================ 02 SERVICES ============================ */
export function Services() {
  return (
    <Section id="services">
      <SectionTitle num={2} title="SERVICES" tag="WHAT_I_BUILD" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div key={s.title} className="reveal glass glass-hover cut p-7 relative" style={{ transitionDelay: `${i * 70}ms` }}>
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 grid place-items-center border border-hud/40 text-hud bg-hud/5">
                <Icon name={s.icon} className="w-6 h-6" />
              </div>
              <span className="text-xs text-dim">SERVICE_{String(i + 1).padStart(2, '0')}</span>
            </div>
            <h3 className="mt-6 font-display font-bold text-xl text-chrome tracking-wide">
              {s.title}
              {s.soon && <span className="ml-2 align-middle text-[10px] px-2 py-0.5 bg-hud text-void tracking-widest">SOON</span>}
            </h3>
            <p className="mt-3 text-sm leading-relaxed">{s.text}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

/* ============================ 03 SKILLS ============================ */
export function Skills() {
  return (
    <Section id="skills">
      <SectionTitle num={3} title="TECH_STACK" tag="ARSENAL" />

      <p className="reveal text-sm text-silver mb-5"><span className="inline-block w-2.5 h-2.5 bg-hud mr-3" />&gt;CORE_ARSENAL // <span className="text-hud">ONLINE</span></p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {skills.core.map((s, i) => (
          <div key={s.name} className="reveal glass glass-hover cut flex items-center gap-3 px-4 py-4" style={{ transitionDelay: `${i * 40}ms` }}>
            <span className="text-hud"><Icon name={s.icon} className="w-7 h-7" /></span>
            <div>
              <div className="font-display font-bold text-chrome text-sm tracking-wide">{s.name}</div>
              <div className="text-[10px] text-dim">SKILL_{String(i + 1).padStart(2, '0')}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="reveal mt-6 flex flex-wrap gap-2">
        {skills.concepts.map((c) => (
          <span key={c} className="text-xs px-3 py-1.5 border border-line text-silver bg-white/[0.02] hover:border-hud hover:text-hud transition">{c}</span>
        ))}
      </div>

      <p className="reveal text-sm text-silver mt-14 mb-5"><span className="inline-block w-2.5 h-2.5 border border-hud mr-3" />&gt;LEARNING_QUEUE // <span className="text-hud">IN PROGRESS</span></p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {skills.learning.map((l, i) => (
          <div key={l.name} className="reveal glass cut p-5" style={{ transitionDelay: `${i * 60}ms` }}>
            <div className="font-display font-bold text-chrome">{l.name}</div>
            <div className="text-[11px] text-dim mt-1">{l.note}</div>
            <div className="text-[10px] text-hud mt-4">STATUS : LEARNING...</div>
            <div className="mt-2 h-1.5 hazard-move" />
          </div>
        ))}
      </div>
    </Section>
  )
}

/* ============================ 04 PROJECTS ============================ */
const FILTERS = ['All', 'Python', 'Java', 'C#', 'Web']

export function Projects() {
  const [filter, setFilter] = useState('All')
  const list = projects.filter((p) => filter === 'All' || p.filter === filter)

  return (
    <Section id="projects">
      <SectionTitle num={4} title="PROJECTS" tag="DEPLOYED_MISSIONS" />

      <div className="reveal flex flex-wrap gap-2 mb-10">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`cut px-5 py-2 text-xs tracking-[0.2em] transition ${filter === f ? 'bg-hud text-void' : 'border border-line text-silver hover:border-hud hover:text-hud'}`}
          >
            {f.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((p, i) => (
          <article key={p.title} className="glass glass-hover cut flex flex-col overflow-hidden" style={{ animation: `cardIn .5s ease ${i * 60}ms both` }}>
            {/* visual */}
            <div className="relative h-44 border-b border-line overflow-hidden bg-panel">
              {p.image ? (
                <img src={p.image} alt={p.title} className="w-full h-full object-cover object-top grayscale invert brightness-90 contrast-125 opacity-80 hover:opacity-100 transition duration-500" />
              ) : (
                <div className="w-full h-full grid place-items-center relative">
                  <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(#3a3a3a 1px, transparent 1px)', backgroundSize: '14px 14px' }} />
                  <div className="relative w-20 h-20 grid place-items-center border border-hud/40 bg-void/60 text-hud rotate-45">
                    <span className="-rotate-45"><Icon name={p.icon} className="w-9 h-9" /></span>
                  </div>
                </div>
              )}
              {p.featured && <span className="absolute top-3 left-3 text-[10px] px-2 py-1 bg-hud text-void tracking-widest font-bold">FEATURED</span>}
              <span className="absolute top-3 right-3 text-[10px] text-dim bg-void/70 px-2 py-1">MISSION_{String(projects.indexOf(p) + 1).padStart(2, '0')}</span>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <p className="text-[11px] text-hud tracking-[0.2em]">{p.kind.toUpperCase()}</p>
              <h3 className="mt-2 font-display font-bold text-xl text-chrome">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed flex-1">{p.text}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => <span key={t} className="text-[10px] px-2 py-1 border border-line text-silver">{t}</span>)}
              </div>
              <div className="mt-6">
                {p.repo ? (
                  <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-hud hover:text-chrome transition">
                    <Icon name="github" className="w-4 h-4" /> VIEW CODE <Icon name="arrow" className="w-4 h-4" />
                  </a>
                ) : (
                  <span className="text-sm text-dim">// PRIVATE · IN DEVELOPMENT</span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
      <style>{'@keyframes cardIn{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}'}</style>

      <div className="reveal mt-10 text-center">
        <a href={profile.github} target="_blank" rel="noreferrer" className="text-sm text-silver hover:text-hud transition">
          &gt;&gt; MORE ON GITHUB <span className="text-hud">→</span>
        </a>
      </div>
    </Section>
  )
}

/* ============================ 05 PROCESS + WHY ============================ */
export function Process() {
  return (
    <Section id="process">
      <SectionTitle num={5} title="HOW_I_WORK" tag="EXECUTION_PROTOCOL" />
      <div className="grid md:grid-cols-5 gap-4">
        {processSteps.map(([t, d], i) => (
          <div key={t} className="reveal relative glass cut p-5" style={{ transitionDelay: `${i * 80}ms` }}>
            <div className="font-display font-bold text-4xl text-hud/90">{String(i + 1).padStart(2, '0')}</div>
            <div className="mt-2 font-display font-bold text-chrome tracking-widest">{t}</div>
            <p className="mt-2 text-xs leading-relaxed">{d}</p>
            {i < processSteps.length - 1 && <span className="hidden md:block absolute top-1/2 -right-3 w-2 h-2 bg-hud rotate-45 z-10" />}
          </div>
        ))}
      </div>

      <div className="reveal relative glass cut mt-10 p-7 md:p-9">
        <Brackets />
        <p className="font-display font-bold text-xl text-chrome tracking-wider mb-6">WHY_HIRE_ME<span className="text-hud">?</span></p>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyMe.map(([t, d]) => (
            <li key={t} className="flex gap-3">
              <span className="mt-1 w-3 h-3 shrink-0 border-2 border-hud" />
              <span><span className="text-chrome">{t}</span> <span className="text-dim">— {d}</span></span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

/* ============================ 06 JOURNEY ============================ */
export function Journey() {
  const color = { COMPLETED: 'text-silver', ACTIVE: 'text-hud', UPCOMING: 'text-dim' }
  const mark = { COMPLETED: '✔', ACTIVE: '●', UPCOMING: '◌' }
  return (
    <Section id="journey">
      <SectionTitle num={6} title="JOURNEY" tag="MISSION_LOG" />
      <ol className="relative border-l border-line ml-3 space-y-10">
        {timeline.map((t, i) => (
          <li key={t.title} className="reveal relative pl-8 md:pl-12" style={{ transitionDelay: `${i * 100}ms` }}>
            <span className={`absolute -left-[9px] top-1 w-4 h-4 rotate-45 border-2 ${t.status === 'ACTIVE' ? 'border-hud bg-hud animate-pulse-glow' : t.status === 'COMPLETED' ? 'border-silver bg-silver' : 'border-dim bg-void'}`} />
            <div className="glass cut p-6 md:p-7">
              <div className="flex flex-wrap items-center gap-3 text-xs tracking-[0.2em]">
                <span className="text-silver">{t.period}</span>
                <span className={`${color[t.status]} border border-current px-2 py-0.5`}>{mark[t.status]} {t.status}</span>
              </div>
              <h3 className="mt-3 font-display font-bold text-xl md:text-2xl text-chrome">{t.title}</h3>
              <p className="text-hud text-sm mt-1">{t.place}</p>
              <p className="mt-3 text-sm">{t.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}

/* ============================ 07 GITHUB TELEMETRY ============================ */
export function Telemetry() {
  const base = `https://raw.githubusercontent.com/${profile.githubUser}/${profile.githubUser}/main/profile-stats`
  return (
    <Section id="telemetry">
      <SectionTitle num={7} title="GITHUB_LIVE" tag="TELEMETRY" />
      <p className="reveal text-sm mb-8">Every commit counts — these panels update automatically every day from my GitHub.</p>
      <div className="space-y-6">
        {['stats', 'calendar', 'activity'].map((n) => (
          <a key={n} href={profile.github} target="_blank" rel="noreferrer" className="reveal block">
            <img src={`${base}/${n}.svg`} alt={`GitHub ${n}`} loading="lazy" className="w-full" />
          </a>
        ))}
      </div>
    </Section>
  )
}
