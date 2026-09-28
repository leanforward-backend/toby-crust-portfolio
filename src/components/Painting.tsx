type PaintingProps = {
  /** Adds the shimmer layer over the water. */
  water?: boolean
  /** CSS object-position for the crop, e.g. "50% 62%". */
  position?: string
}

const srcSet = (ext: string) =>
  `/images/harbour-1280.${ext} 1280w, /images/harbour-2048.${ext} 2048w`

function Harbour({ className, position }: { className: string; position?: string }) {
  return (
    <picture>
      <source type="image/webp" srcSet={srcSet('webp')} sizes="100vw" />
      <img
        className={className}
        src="/images/harbour-2048.jpg"
        srcSet={srcSet('jpg')}
        sizes="100vw"
        alt=""
        style={position ? { objectPosition: position } : undefined}
      />
    </picture>
  )
}

/** The harbour painting with its slow drift, water shimmer, horizon glow and film grain. */
export function Painting({ water = false, position }: PaintingProps) {
  return (
    <div className="painting" aria-hidden="true">
      <div className="painting__tilt">
        <div className="painting__drift">
          <Harbour className="painting__img" position={position} />
          {water && <Harbour className="painting__img painting__water" position={position} />}
        </div>
      </div>
      {water && <div className="painting__glow" />}
      <div className="painting__grain" />
    </div>
  )
}
