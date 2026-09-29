import { contact } from '../content'

/** Fixed nav: light text over the hero, then a frosted bar once past it (see navState in motion.ts). */
export function Nav() {
  return (
    <header className="nav">
      <a href="#top" className="nav__name nav__item">Toby Crust</a>
      <nav aria-label="Main" className="nav__links">
        <a href="#work" className="nav__link nav__item">Work</a>
        <a href="#side-projects" className="nav__link nav__item">Side projects</a>
        <a href="#experience" className="nav__link nav__item">Experience</a>
        <a href="#contact" className="nav__link nav__item">Contact</a>
        <a href={contact.cv} className="pill pill--nav nav__item" download>Download CV</a>
      </nav>
    </header>
  )
}
