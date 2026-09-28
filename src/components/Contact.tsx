import { contact } from '../content'
import { useInView } from '../useInView'
import { Painting } from './Painting'

export function Contact() {
  const [ref, inView] = useInView<HTMLElement>()

  return (
    <section id="contact" ref={ref} className={`contact${inView ? '' : ' is-paused'}`}>
      <div className="contact__bg">
        <Painting position="50% 35%" />
      </div>
      <div className="contact__scrim" />
      <div className="contact__content">
        <h2 className="contact__title" data-split>Let's talk.</h2>
        <a className="contact__email" href={`mailto:${contact.email}`} data-reveal>{contact.email}</a>
        <div className="contact__links" data-reveal>
          <a className="pill pill--ghost" href={contact.linkedin} target="_blank" rel="noreferrer" data-magnetic>LinkedIn</a>
          <a className="pill pill--ghost" href={contact.github} target="_blank" rel="noreferrer" data-magnetic>GitHub</a>
          <a className="pill pill--light" href={contact.cv} download data-magnetic>Download CV</a>
        </div>
      </div>
    </section>
  )
}
