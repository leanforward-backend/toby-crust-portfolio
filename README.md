# Toby Crust — portfolio

One-page portfolio, live at <https://toby-crust-portfolio.vercel.app>. Vite, React and TypeScript with plain CSS, deployed on Vercel.

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
npm run lint
```

## Where things live

| Path | What |
|---|---|
| `src/content.ts` | Contact links, Big Freeze stats, the AI agent steps and the experience list |
| `src/components/` | One component per section: `Hero`, `Work`, `Experience`, `Contact`, plus `Painting` (the animated harbour background) and `VideoDialog` (the Holobox clip) |
| `src/styles.css` | All styles and animation. Colours and fonts are the custom properties at the top |
| `public/images/` | Harbour painting (1280 and 2048 wide, WebP and JPEG), project images, grain texture, social preview image |
| `public/video/` | Holobox clip and its poster frame |
| `public/toby-crust-cv.pdf` | The CV behind every "Download CV" link. Copy `profiles/pdf/general.pdf` from the CV repo here after updating it |

## Motion

**GSAP** (`src/motion.ts`, with ScrollTrigger and SplitText) handles everything tied to loading and scrolling. Markup opts in with data attributes, listed at the top of that file:

- **Intro:** the painting settles from a zoom, the headline rises in line by line, then the intro text and nav.
- **Hero scroll:** the painting sinks and the text lifts away as you scroll past.
- **Headings:** section headings reveal line by line when they come into view.
- **Panels:** the two big project panels open out from a smaller rounded frame, and their images settle from a slight zoom.
- **Numbers:** the Big Freeze stats count up.
- **Details:** the agent flow steps in one at a time, experience rows draw their divider lines, the skills band speeds up with scroll speed, and buttons lean towards the cursor on desktop.
- **Nav:** turns solid once past the hero, and tucks away while scrolling down.

**CSS** (`src/styles.css`, under "painting") runs the harbour image's continuous loops: a slow drift and zoom, a shimmer on the water, a pulsing horizon glow and film grain. On desktop the image also leans slightly away from the cursor (`Hero.tsx`). These loops pause when their section is off screen.

Visitors with reduced motion turned on get the finished page with none of the above.

The page declares itself light-only (`color-scheme: only light`), so browsers with forced dark mode don't invert its colours.
