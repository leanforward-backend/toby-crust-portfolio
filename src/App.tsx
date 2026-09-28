import { useState } from 'react'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { VideoDialog } from './components/VideoDialog'
import { Work } from './components/Work'

export default function App() {
  const [clipOpen, setClipOpen] = useState(false)

  return (
    <>
      <a href="#work" className="skip-link">Skip to work</a>
      <Hero />
      <main>
        <Work onPlayClip={() => setClipOpen(true)} />
        <Experience />
        <Contact />
      </main>
      <footer className="footer">
        <span>Toby Crust · Sydney</span>
        <span>{new Date().getFullYear()}</span>
      </footer>
      <VideoDialog open={clipOpen} onClose={() => setClipOpen(false)} />
    </>
  )
}
