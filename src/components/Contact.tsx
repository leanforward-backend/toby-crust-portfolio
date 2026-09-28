import { contact } from '../content'
import { useInView } from '../useInView'
import { Painting } from './Painting'

export function Contact() {
  const [ref, inView] = useInView<HTMLElement>()

  return (
    <section id="contact" ref={ref} className={`contact${inView ? '' : ' is-paused'}`}>
      <Painting position="50% 80%" />
      <div className="contact__fade" />
      <div className="contact__content">
        <h2 className="contact__title">Let's talk.</h2>
        <a className="contact__email" href={`mailto:${contact.email}`}>{contact.email}</a>
        <div className="contact__links">
          <a className="pill pill--glass" href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="pill pill--glass" href={contact.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="pill pill--solid" href={contact.cv} download>Download CV</a>
        </div>
      </div>
    </section>
  )
}
