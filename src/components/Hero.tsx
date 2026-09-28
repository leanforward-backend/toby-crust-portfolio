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
      <div className="hero__bg">
        <Painting water />
      </div>
      <div className="hero__scrim" />

      <div className="hero__inner">
        <div className="hero__top">
          <p className="eyebrow hero__eyebrow">Software engineer · Sydney</p>
          <h1 className="hero__title" data-split>
            I build software that works <span className="nowrap"><em>out in the world</em>.</span>
          </h1>
        </div>

        <div className="hero__bottom">
          <div className="hero__intro">
            <p className="hero__lede hero__reveal">
              AI workflows, web products and real-time experiences, from a fundraising site that took $2.5M to AR on
              a government heritage trail.
            </p>
            <div className="hero__actions hero__reveal">
              <a href="#work" className="pill pill--solid" data-magnetic>See my work</a>
              <a href={`mailto:${contact.email}`} className="pill pill--glass" data-magnetic>{contact.email}</a>
            </div>
          </div>
          <ul className="hero__facts hero__reveal">
            <li><span>Now</span>Software Engineer at Slik</li>
            <li><span>Before</span>Fabra, Bardon Design</li>
            <li><span>Open to</span>Engineering roles in Sydney</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
