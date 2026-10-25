import { useAutoplay } from '../useAutoplay'

/** The Holobox clip, muted and looping. Clicking it opens the version with sound. */
export function HoloboxVideo({ onOpen }: { onOpen: () => void }) {
  const video = useAutoplay()

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
