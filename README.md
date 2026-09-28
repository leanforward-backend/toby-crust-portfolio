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

## The hero's movement

All CSS, in `src/styles.css` under "painting":

- **Drift:** the painting slowly zooms and pans over 40 seconds, then reverses.
- **Water shimmer:** a striped copy of the bottom quarter of the painting slides sideways over the water.
- **Horizon glow:** a warm light near the horizon slowly brightens and fades.
- **Grain:** a tiled noise texture jumps position several times a second.
- **Mouse tilt:** on desktop the painting leans a few pixels away from the cursor (`Hero.tsx`).

The animations pause when their section is off screen, and all of it switches off for visitors with reduced motion turned on.
