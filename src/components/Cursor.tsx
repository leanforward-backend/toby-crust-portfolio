/** The custom cursor's elements. GSAP drives them on desktop only (see cursor in motion.ts). */
export function Cursor() {
  return (
    <div className="cursor" aria-hidden="true">
      <div className="cursor__ring">
        <span className="cursor__label" />
      </div>
      <div className="cursor__dot" />
    </div>
  )
}
