# Academy Dance Studio — preview website

An independent React, TypeScript and Vite website concept for Academy Dance Studio. The preview explores an editorial digital home for Indian classical dance, music and community, with dedicated sections for Bharatanatyam and Kuchipudi.

## Preview

- Live site: <https://darmigan2011-ops.github.io/academy-dance-studio/>
- Source: <https://github.com/darmigan2011-ops/academy-dance-studio>

The site uses hash-based routes so each page can be opened directly or refreshed on GitHub Pages. Example: `https://darmigan2011-ops.github.io/academy-dance-studio/#/forms`.

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Create and preview a production build:

```bash
npm run build
npm run preview
```

## Technology

- React 19
- TypeScript
- Vite
- React Router (`HashRouter`) for GitHub Pages-compatible direct routes and refreshes
- Plain CSS, responsive layouts, reduced-motion support, semantic landmarks and keyboard-visible focus states

## Content notes

The requested preview name is Academy Dance Studio. The reference notes available during implementation identify Sanāda Space, and do not establish a relationship to Academy Dance Studio. Accordingly, no Sanāda founders, event details, social accounts, poster or portraits are attributed to Academy. Academy-specific history, teachers, classes, event dates, venue and contact details were not supplied; the site states this clearly and does not invent them. Bharatanatyam and Kuchipudi descriptions are general art-form context, not confirmation of Academy offerings.

The dance photographs are independently sourced illustrative references, not Academy members and not endorsements. Individual photographer and license credits are displayed with the images and recorded in `public/images/ATTRIBUTION.md`.

## Deployment

The GitHub Actions workflow at `.github/workflows/deploy.yml` builds the Vite site with `/academy-dance-studio/` as its base and publishes the `dist/` directory to GitHub Pages. The app uses hash-based routing, so direct links and refreshes stay on the published `index.html` and do not depend on a server-side SPA fallback.
