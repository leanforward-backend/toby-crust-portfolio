import { useRef, type PointerEvent } from 'react'
import { contact } from '../content'
import { useInView } from '../useInView'
import { Painting } from './Painting'

const canTilt = () =>
  window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)').matches

export function Hero() {
  const [ref, inView] = useInView<HTMLElement>()
  const frame = useRef(0)

  // Leans the painting a few pixels away from the cursor.
  const onPointerMove = (e: PointerEvent<HTMLElement>) => {
    if (!canTilt()) return
    const el = e.currentTarget
    const { clientX, clientY } = e
    cancelAnimationFrame(frame.current)
    frame.current = requestAnimationFrame(() => {
      const box = el.getBoundingClientRect()
      el.style.setProperty('--px', ((clientX - box.left) / box.width - 0.5).toFixed(3))
      el.style.setProperty('--py', ((clientY - box.top) / box.height - 0.5).toFixed(3))
    })
  }

  return (
    <section
      id="top"
      ref={ref}
      className={`hero${inView ? '' : ' is-paused'}`}
      onPointerMove={onPointerMove}
    >
      <Painting water />
      <div className="hero__fade" />

      <header className="nav">
        <a href="#top" className="nav__name">Toby Crust</a>
        <nav aria-label="Main" className="nav__links">
          <a href="#work" className="nav__link">Work</a>
          <a href="#experience" className="nav__link">Experience</a>
          <a href="#contact" className="nav__link">Contact</a>
          <a href={contact.cv} className="pill pill--glass" download>Download CV</a>
        </nav>
      </header>

      <div className="hero__content">
        <p className="eyebrow rise">Software engineer · Sydney</p>
        <h1 className="hero__title rise" style={{ animationDelay: '0.12s' }}>
          I build software that works <em>out in the world</em>.
        </h1>
        <p className="hero__lede rise" style={{ animationDelay: '0.24s' }}>
          AI workflows, web products and real-time experiences, from a fundraising site that took $2.5M
          to AR on a government heritage trail.
        </p>
        <div className="hero__actions rise" style={{ animationDelay: '0.36s' }}>
          <a href="#work" className="pill pill--solid">See my work</a>
          <a href={`mailto:${contact.email}`} className="pill pill--glass">{contact.email}</a>
        </div>
      </div>

      <div className="hero__meta">
        <ul className="hero__facts">
          <li><strong>Now</strong> · Software Engineer at Slik</li>
          <li><strong>Before</strong> · Fabra, Bardon Design</li>
          <li><strong>Open to</strong> · Engineering roles in Sydney</li>
        </ul>
        <a href="#work" className="scroll-cue">
          Scroll
          <span className="scroll-cue__track"><span className="scroll-cue__bar" /></span>
        </a>
      </div>
    </section>
  )
}
