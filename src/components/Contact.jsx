import { useState } from 'react'
import { profile } from '../data'
import { Brackets, Section, SectionTitle } from './ui'
import Icon from './Icon'

const TYPES = ['Desktop App', 'Website', 'Data / Automation', 'Database', 'Other']

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', type: TYPES[0], budget: '', message: '' })
  const [sent, setSent] = useState(false)
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  // No backend: opens the visitor's email app with everything pre-filled
  const submit = (e) => {
    e.preventDefault()
    const subject = `Project request: ${form.type} — ${form.name}`
    const body = `Name: ${form.name}\nEmail: ${form.email}\nProject type: ${form.type}\nBudget: ${form.budget || '-'}\n\n${form.message}`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const input = 'w-full bg-void/60 border border-line px-4 py-3 text-chrome placeholder:text-dim focus:outline-none focus:border-hud transition'
  const label = 'block text-[11px] tracking-[0.25em] text-hud mb-2'

  return (
    <Section id="contact">
      <SectionTitle num={8} title="CONTACT" tag="OPEN_CHANNEL" />
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
        <div className="reveal">
          <h3 className="font-display font-bold text-3xl md:text-4xl text-chrome leading-tight">
            Have a project in mind<span className="text-hud">?</span>
          </h3>
          <p className="mt-5 leading-relaxed">
            Tell me what you need, and I'll get back to you with a plan and a quote within 24 hours.
          </p>

          <div className="mt-8 space-y-3">
            {[
              ['mail', 'EMAIL', profile.email, `mailto:${profile.email}`],
              ['linkedin', 'LINKEDIN', 'in/pirathapanakshayan', profile.linkedin],
              ['github', 'GITHUB', 'pirathapanakshayan', profile.github],
            ].map(([icon, k, v, href]) => (
              <a key={k} href={href} target="_blank" rel="noreferrer" className="glass glass-hover cut flex items-center gap-4 px-5 py-4 group">
                <span className="text-hud"><Icon name={icon} className="w-5 h-5" /></span>
                <span className="text-[11px] w-20 tracking-[0.2em] text-dim">{k}</span>
                <span className="text-chrome text-sm break-all group-hover:text-hud transition">{v}</span>
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={submit} className="reveal relative glass cut p-7 md:p-9 space-y-5">
          <Brackets />
          {sent ? (
            <div className="py-16 text-center">
              <p className="text-hud text-lg">&gt;&gt; REQUEST READY.</p>
              <p className="mt-3 text-sm">Your email app should open with the message — just press send.<br />I'll reply with a plan within 24 hours.</p>
              <button type="button" onClick={() => setSent(false)} className="mt-8 text-xs text-dim hover:text-hud tracking-[0.2em]">[ NEW MESSAGE ]</button>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={label} htmlFor="name">NAME</label>
                  <input id="name" required value={form.name} onChange={set('name')} className={input} placeholder="Your name" />
                </div>
                <div>
                  <label className={label} htmlFor="email">EMAIL</label>
                  <input id="email" type="email" required value={form.email} onChange={set('email')} className={input} placeholder="you@email.com" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={label} htmlFor="type">PROJECT TYPE</label>
                  <select id="type" value={form.type} onChange={set('type')} className={input}>
                    {TYPES.map((t) => <option key={t} className="bg-panel">{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className={label} htmlFor="budget">BUDGET <span className="text-dim">(OPTIONAL)</span></label>
                  <input id="budget" value={form.budget} onChange={set('budget')} className={input} placeholder="e.g. LKR 25,000" />
                </div>
              </div>
              <div>
                <label className={label} htmlFor="message">MESSAGE</label>
                <textarea id="message" required rows="5" value={form.message} onChange={set('message')} className={input} placeholder="Tell me about your project..." />
              </div>
              <button type="submit" className="cut w-full bg-hud text-void font-display font-bold tracking-[0.3em] py-4 hover:bg-chrome transition">
                [ SEND REQUEST ]
              </button>
            </>
          )}
        </form>
      </div>
    </Section>
  )
}

export function Footer() {
  return (
    <footer className="mt-10">
      <div className="h-3 hazard opacity-80" />
      <div className="border-t border-line bg-panel/60 backdrop-blur py-10 px-5 text-center">
        <p className="font-display font-bold text-2xl md:text-3xl tracking-[0.35em] text-chrome">END_OF_TRANSMISSION</p>
        <p className="mt-3 text-xs tracking-[0.25em] text-hud">PIRATHAPAN AKSHAYAN // {new Date().getFullYear()} // BUILT WITH REACT</p>
        <p className="mt-4 text-[11px] text-dim">press <kbd className="px-1.5 py-0.5 border border-line text-silver">~</kbd> to open the terminal</p>
      </div>
    </footer>
  )
}
