import { useEffect, useRef } from 'react'

/**
 * The Holobox clip, muted and looping, playing only while it's on screen.
 * With reduced motion turned on it stays on its poster frame. Clicking it opens the version with sound.
 */
export function HoloboxVideo({ onOpen }: { onOpen: () => void }) {
  const video = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const el = video.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    el.muted = true
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {})
        else el.pause()
      },
      { threshold: 0.25 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <button type="button" className="holobox-video" onClick={onOpen} data-cursor="Watch" aria-label="Watch the SLIK Holobox clip with sound">
      <video
        ref={video}
        className="holobox-video__media"
        src="/video/slik-holobox.mp4"
        poster="/video/slik-holobox-poster.jpg"
        muted
        loop
        playsInline
        preload="none"
      />
    </button>
  )
}
