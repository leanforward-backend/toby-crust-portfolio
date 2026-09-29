import { sideProjects } from '../content'

export function SideProjects() {
  return (
    <section id="side-projects" className="side section">
      <div className="section__head">
        <div>
          <p className="kicker" data-reveal>Side projects</p>
          <h2 className="display-2" data-split>Built after hours.</h2>
        </div>
        <p className="muted" data-reveal>Live and in use</p>
      </div>

      <div className="side__grid">
        {sideProjects.map((p) => (
          <article key={p.title} className="panel side-card" data-reveal>
            {/* Out of the tab order: the button below is the same link. */}
            <a className="side-card__shot" href={p.url} target="_blank" rel="noreferrer" tabIndex={-1} data-cursor="Visit">
              <picture>
                <source type="image/webp" srcSet={`/images/${p.image}.webp`} />
                <img src={`/images/${p.image}.jpg`} width={1200} height={750} loading="lazy" alt={p.alt} />
              </picture>
            </a>
            <div className="panel__body side-card__body">
              <h3 className="display-4">{p.title}</h3>
              <p className="panel__text">{p.text}</p>
              <p className="panel__meta">{p.tech}</p>
              <a className="pill pill--solid side-card__link" href={p.url} target="_blank" rel="noreferrer" data-magnetic>
                Visit {p.title}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                  <path d="M3.5 8.5l5-5M4.5 3.5h4v4" />
                </svg>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
