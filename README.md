# Rhythm Dance Studio

This repository publishes the recovered Rhythm Dance Studio website at the Academy Dance Studio GitHub Pages address. The original Rhythm branding, page content, styling, interactions and locally stored dance photography are preserved.

## Live site and source

- Live site: <https://darmigan2011-ops.github.io/academy-dance-studio/>
- Repository: <https://github.com/darmigan2011-ops/academy-dance-studio>
- Recovered source snapshot: `dfa9df8`

## Run locally

Requires Node.js 20 or newer.

```bash
npm ci
npm run dev
```

Create and preview a production build:

```bash
npm run build
npm run preview
```

## Technology and deployment

- React 19, TypeScript, Vite and React Router
- Responsive CSS with the original serif typography, editorial sections and motion effects
- Vite's base path is `/academy-dance-studio/` for the GitHub Pages project URL
- `.github/workflows/deploy.yml` builds and publishes `dist/`, and provides a `404.html` fallback for direct React Router routes

## Photography

The site uses locally stored Pexels photography. Photo sources and the original image notes are recorded in `public/images/IMAGE-SOURCES.md`.
