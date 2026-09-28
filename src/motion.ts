import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import type { RefObject } from 'react'

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText)

const FULL_MOTION = '(prefers-reduced-motion: no-preference)'
const REDUCED_MOTION = '(prefers-reduced-motion: reduce)'
const FINE_POINTER = '(hover: hover) and (pointer: fine)'

type Query = (selector: string) => HTMLElement[]

/**
 * All of the page's GSAP work. Markup opts in with classes and data attributes:
 * - [data-split]   heading revealed line by line (hidden by CSS until split)
 * - [data-reveal]  fades and rises into place on scroll
 * - [data-clip]    panel that opens out from a smaller rounded frame
 * - [data-zoom]    image that settles from a slight zoom while scrolled past
 * - [data-count]   number that counts up (with data-prefix, data-suffix, data-decimals)
 * - [data-magnetic] button that leans towards the cursor
 */
export function useSiteMotion(root: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const q: Query = gsap.utils.selector(root)
      const mm = gsap.matchMedia()

      navState(q)

      mm.add(REDUCED_MOTION, () => {
        gsap.set(q('[data-split]'), { autoAlpha: 1 })
      })

      mm.add(FULL_MOTION, () => {
        heroIntro(q)
        heroScroll(q)
        splitHeadings(q)
        reveals(q)
        panels(q)
        flow(q)
        timeline(q)
        marquee(q)
        contactParallax(q)
        return counters(q)
      })

      mm.add(`${FULL_MOTION} and ${FINE_POINTER}`, () => magnetic(q))
    },
    { scope: root },
  )
}

/** Solid nav once past the hero; tucks away while scrolling down. */
function navState(q: Query) {
  const [nav] = q('.nav')
  const [hero] = q('.hero')
  if (!nav || !hero) return

  ScrollTrigger.create({
    trigger: hero,
    start: 'bottom top+=96',
    onEnter: () => nav.classList.add('is-solid'),
    onLeaveBack: () => nav.classList.remove('is-solid'),
  })
  ScrollTrigger.create({
    start: 0,
    end: 'max',
    onUpdate: (self) => nav.classList.toggle('is-tucked', self.direction === 1 && self.scroll() > window.innerHeight),
  })
}

function heroIntro(q: Query) {
  const [title] = q('.hero__title')

  gsap
    .timeline({ defaults: { ease: 'expo.out' } })
    .from(q('.hero__bg'), { scale: 1.2, duration: 2.8, ease: 'power3.out' }, 0)
    .from(q('.hero__scrim'), { opacity: 0, duration: 1.8, ease: 'power2.out' }, 0)
    .from(q('.nav__item'), { y: -18, autoAlpha: 0, duration: 1.1, stagger: 0.06 }, 0.5)
    .from(q('.hero__eyebrow'), { y: 16, autoAlpha: 0, duration: 1.2 }, 0.35)
    .from(q('.hero__reveal'), { y: 32, autoAlpha: 0, duration: 1.4, stagger: 0.12 }, 1)

  if (!title) return
  SplitText.create(title, {
    type: 'lines',
    mask: 'lines',
    autoSplit: true,
    onSplit(self) {
      gsap.set(title, { autoAlpha: 1 })
      return gsap.from(self.lines, { yPercent: 110, duration: 1.5, stagger: 0.12, ease: 'expo.out', delay: 0.45 })
    },
  })
}

/** The painting sinks and the text lifts away as the hero scrolls out. */
function heroScroll(q: Query) {
  const [hero] = q('.hero')
  if (!hero) return
  gsap.to(q('.hero__bg'), {
    yPercent: 16,
    ease: 'none',
    scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
  })
  // Gone before the nav turns solid, so the two never overlap.
  gsap.to(q('.hero__inner'), {
    yPercent: -8,
    autoAlpha: 0,
    ease: 'none',
    scrollTrigger: { trigger: hero, start: 'top top', end: '55% top', scrub: true },
  })
}

function splitHeadings(q: Query) {
  q('[data-split]')
    .filter((el) => !el.classList.contains('hero__title'))
    .forEach((el) => {
      SplitText.create(el, {
        type: 'lines',
        mask: 'lines',
        autoSplit: true,
        onSplit(self) {
          gsap.set(el, { autoAlpha: 1 })
          return gsap.from(self.lines, {
            yPercent: 110,
            duration: 1.3,
            stagger: 0.1,
            ease: 'expo.out',
            scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          })
        },
      })
    })
}

function reveals(q: Query) {
  const items = q('[data-reveal]')
  gsap.set(items, { y: 48, autoAlpha: 0 })
  ScrollTrigger.batch(items, {
    start: 'top 90%',
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, { y: 0, autoAlpha: 1, duration: 1.2, ease: 'power3.out', stagger: 0.12, overwrite: true }),
  })
}

function panels(q: Query) {
  q('[data-clip]').forEach((panel) => {
    gsap.fromTo(
      panel,
      { clipPath: 'inset(10% 7% 10% 7% round 40px)' },
      {
        clipPath: 'inset(0% 0% 0% 0% round 28px)',
        ease: 'none',
        scrollTrigger: { trigger: panel, start: 'top 98%', end: 'top 45%', scrub: 0.6 },
      },
    )
  })
  q('[data-zoom]').forEach((img) => {
    gsap.fromTo(
      img,
      { scale: 1.22 },
      { scale: 1.02, ease: 'none', scrollTrigger: { trigger: img, start: 'top bottom', end: 'bottom top', scrub: true } },
    )
  })
}

/** Returns a cleanup that puts the real numbers back if motion is switched off. */
function counters(q: Query) {
  const els = q('[data-count]')
  const originals = els.map((el) => el.textContent)

  els.forEach((el) => {
    const to = Number(el.dataset.count)
    const decimals = Number(el.dataset.decimals ?? 0)
    const format = (n: number) =>
      `${el.dataset.prefix ?? ''}${n.toLocaleString('en-AU', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}${el.dataset.suffix ?? ''}`
    const state = { n: 0 }
    el.textContent = format(0)
    gsap.to(state, {
      n: to,
      duration: 2.2,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 92%', once: true },
      onUpdate: () => {
        el.textContent = format(state.n)
      },
    })
  })

  return () => els.forEach((el, i) => (el.textContent = originals[i]))
}

function flow(q: Query) {
  const [list] = q('.flow')
  if (!list) return
  gsap
    .timeline({ scrollTrigger: { trigger: list, start: 'top 80%', once: true } })
    .from(q('.flow__step'), { x: -28, autoAlpha: 0, duration: 0.9, stagger: 0.14, ease: 'power3.out' })
    .from(q('.flow__step:last-child .flow__label'), { scale: 0.94, duration: 0.8, ease: 'back.out(3)' }, '-=0.3')
}

function timeline(q: Query) {
  q('.timeline__row').forEach((row) => {
    const [line] = gsap.utils.toArray<HTMLElement>('.timeline__line', row)
    gsap
      .timeline({ scrollTrigger: { trigger: row, start: 'top 90%', once: true } })
      .from(line, { scaleX: 0, transformOrigin: 'left center', duration: 1.2, ease: 'expo.out' })
      .from(row.querySelectorAll('.timeline__when, .timeline__body'), { y: 24, autoAlpha: 0, duration: 1, stagger: 0.08, ease: 'power3.out' }, 0.15)
  })
}

/** Endless skills band that speeds up with scroll velocity. */
function marquee(q: Query) {
  const [band] = q('.marquee')
  const [track] = q('.marquee__track')
  if (!band || !track) return

  const loop = gsap.to(track, { xPercent: -50, duration: 45, ease: 'none', repeat: -1 })
  ScrollTrigger.create({
    trigger: band,
    start: 'top bottom',
    end: 'bottom top',
    onUpdate: (self) => {
      const boost = 1 + Math.min(Math.abs(self.getVelocity()) / 250, 6)
      gsap.to(loop, {
        timeScale: boost,
        duration: 0.2,
        overwrite: true,
        onComplete: () => void gsap.to(loop, { timeScale: 1, duration: 1.4, ease: 'power2.out' }),
      })
    },
  })
}

function contactParallax(q: Query) {
  const [contact] = q('.contact')
  if (!contact) return
  gsap.fromTo(
    q('.contact__bg'),
    { yPercent: -10 },
    { yPercent: 10, ease: 'none', scrollTrigger: { trigger: contact, start: 'top bottom', end: 'bottom top', scrub: true } },
  )
}

function magnetic(q: Query) {
  const cleanups = q('[data-magnetic]').map((el) => {
    const x = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3.out' })
    const y = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3.out' })
    const move = (e: PointerEvent) => {
      const box = el.getBoundingClientRect()
      x((e.clientX - (box.left + box.width / 2)) * 0.25)
      y((e.clientY - (box.top + box.height / 2)) * 0.35)
    }
    const leave = () => {
      x(0)
      y(0)
    }
    el.addEventListener('pointermove', move)
    el.addEventListener('pointerleave', leave)
    return () => {
      el.removeEventListener('pointermove', move)
      el.removeEventListener('pointerleave', leave)
    }
  })
  return () => cleanups.forEach((fn) => fn())
}
