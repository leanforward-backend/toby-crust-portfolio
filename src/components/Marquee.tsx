import { toolkit } from '../content'

/** The toolkit list twice over, so GSAP can loop the track by sliding it half its width. */
export function Marquee() {
  const items = [...toolkit, ...toolkit]
  return (
    <div className="marquee" aria-label={`Toolkit: ${toolkit.join(', ')}`}>
      <div className="marquee__track" aria-hidden="true">
        {items.map((item, i) => (
          <span key={i} className="marquee__item">
            {item}
            <svg className="marquee__dot" width="8" height="8" viewBox="0 0 8 8" aria-hidden="true">
              <circle cx="4" cy="4" r="3" fill="currentColor" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  )
}
