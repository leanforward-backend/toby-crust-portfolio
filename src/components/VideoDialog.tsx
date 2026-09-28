import { useEffect, useRef } from 'react'

type VideoDialogProps = {
  open: boolean
  onClose: () => void
}

export function VideoDialog({ open, onClose }: VideoDialogProps) {
  const dialog = useRef<HTMLDialogElement>(null)
  const video = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const d = dialog.current
    if (!d) return
    if (open && !d.open) {
      d.showModal()
      video.current?.play().catch(() => {})
    } else if (!open && d.open) {
      d.close()
    }
  }, [open])

  return (
    <dialog
      ref={dialog}
      className="video-dialog"
      aria-label="SLIK Holobox clip"
      onClose={() => {
        video.current?.pause()
        onClose()
      }}
      // A click on the backdrop lands on the dialog element itself.
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <video
        ref={video}
        className="video-dialog__video"
        src="/video/slik-holobox.mp4"
        poster="/video/slik-holobox-poster.jpg"
        controls
        playsInline
        preload="none"
      />
      <button type="button" className="video-dialog__close" onClick={onClose} aria-label="Close video">
        <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
          <path d="M3 3l10 10M13 3 3 13" />
        </svg>
      </button>
    </dialog>
  )
}
