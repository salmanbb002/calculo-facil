# calculo-facil

A free online calculator site (pt-BR) — clone of the design/theme of calculadora-online.xyz, rebuilt from scratch as plain static HTML/CSS/JS (no framework, no build step needed to serve it).

**Placeholder name/domain** — swap `calculo-facil` for the real domain everywhere it appears (see below) once you have it.

## Structure

- `index.html` — homepage with the main keypad calculator (history + CSV/PDF export)
- `*.html` at the root — one page per tool (73 tools across Matemática, Tempo, Finanças, Informática, Conversão, Geometria, Diversos)
- `assets/css/style.css` — shared theme (header/nav/footer/layout), ported 1:1 color-for-color from the source site's CSS
- `assets/css/calculator.css` — calculator widget + generic tool-card styling
- `assets/js/engines.js` — pure calculation functions used by every tool page (math, units, time, finance, IT, geometry, misc)
- `assets/js/app.js` — shared header/nav toggle behaviour + small helpers (`CF`)
- `assets/js/calculator.js` — homepage keypad calculator logic
- `scripts/shell.mjs` — page shell (head/header/footer) + small HTML-building helpers, as a Node module
- `scripts/tools-data.mjs` — the source of truth for every tool page (title, form, wiring script)
- `scripts/build.mjs` — generates every `*.html` file, `vercel.json`, `robots.txt`, `sitemap.xml`

## Editing a tool / adding a new one

1. Edit `scripts/tools-data.mjs` (or add a new entry to the `TOOLS` array).
2. `node scripts/build.mjs`
3. Commit the regenerated `.html` files along with the script changes.

## Local preview

```
npx serve .
```

## Deploy

Pushed to GitHub and deployed on Vercel as a static site (`vercel.json` sets `cleanUrls: true` so `/calculo-imc` serves `calculo-imc.html`).

## Before going live on your real domain

- Swap `SITE_URL` in `scripts/tools-data.mjs`'s import (`scripts/shell.mjs`) for your real domain, then rebuild.
- Ad slots are placeholders (`.ad-box` divs) — swap in your own AdSense/ad network snippet.
- No analytics is wired up — add your own (GA4, Plausible, etc).
- Legal pages (`termos-legais`, `politica-de-privacidade`, `cookie`, `termos-de-uso`, `contato`, `faq`) have placeholder copy — write real content before launch.
