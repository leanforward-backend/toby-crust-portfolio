import { useEffect, useRef } from 'react'

/**
 * Plays a muted video only while it's on screen.
 * With reduced motion turned on it stays on its poster frame.
 */
export function useAutoplay() {
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

  return video
}
