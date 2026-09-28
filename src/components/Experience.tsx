import { experience } from '../content'

export function Experience() {
  return (
    <section id="experience" className="experience section">
      <div>
        <p className="kicker" data-reveal>Experience</p>
        <h2 className="display-2" data-split>Three years of shipping.</h2>
      </div>
      <ol className="timeline">
        {experience.map((job) => (
          <li key={job.where} className="timeline__row">
            <span className="timeline__line" aria-hidden="true" />
            <span className="timeline__when">{job.when}</span>
            <div className="timeline__body">
              <h3 className="timeline__where">{job.where}</h3>
              <p className="timeline__what">{job.what}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
