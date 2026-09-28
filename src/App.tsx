import { useRef, useState } from 'react'
import { Contact } from './components/Contact'
import { Cursor } from './components/Cursor'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { VideoDialog } from './components/VideoDialog'
import { Work } from './components/Work'
import { useSiteMotion } from './motion'

export default function App() {
  const root = useRef<HTMLDivElement>(null)
  const [clipOpen, setClipOpen] = useState(false)
  useSiteMotion(root)

  return (
    <div ref={root}>
      <a href="#work" className="skip-link">Skip to work</a>
      <Nav />
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
      <Cursor />
    </div>
  )
}
