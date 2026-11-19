import { useCallback, useState } from 'react'
import Boot from './components/Boot'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Services, Skills, Projects, Process, Journey, Telemetry } from './components/Sections'
import { Contact, Footer } from './components/Contact'
import Terminal from './components/Terminal'
import { useReveal } from './components/ui'

function bootSeen() {
  try { return sessionStorage.getItem('booted') === '1' } catch { return false }
}

export default function App() {
  const [booted, setBooted] = useState(bootSeen)
  const done = useCallback(() => {
    try { sessionStorage.setItem('booted', '1') } catch { /* ignore */ }
    setBooted(true)
  }, [])

  useReveal(booted)

  return (
    <>
      {!booted && <Boot onDone={done} />}
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Process />
        <Journey />
        <Telemetry />
        <Contact />
      </main>
      <Footer />
      <Terminal />
    </>
  )
}
