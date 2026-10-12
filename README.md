# Valerie Grant Interiors — site

Astro + Tailwind CSS v4 + daisyUI 5, static output for GitHub Pages.

## Run locally

```sh
npm install
npm run dev        # http://localhost:4321/valerie-grant-interiors/
npm run build      # outputs to dist/
```

## Deploy (GitHub Pages)

1. Push to a repo named `valerie-grant-interiors` on the `main` branch.
2. Repo **Settings → Pages → Source: GitHub Actions**.
3. `.github/workflows/deploy.yml` builds and publishes on every push.

The workflow sets the base path from the repo name, so a different repo name works too.
**Custom domain:** add `public/CNAME` with the domain, and in the workflow set `BASE_PATH: /` and `SITE_URL: https://<domain>`.

## Where things live

| What | File |
| --- | --- |
| Projects (titles, copy, photos, quotes) | `src/data/projects.ts` |
| Contact info, social, press list, nav | `src/data/site.ts` |
| Theme colors, fonts | `src/styles/global.css` (daisyUI theme `vgi`) |
| Homepage | `src/pages/index.astro` |
| Project pages (generated per project) | `src/pages/projects/[slug].astro` |

**Photos:** drop files in `public/images/<slug>/`, then set `src: '/images/<slug>/file.jpg'` and a one-sentence `alt` on that photo in `projects.ts`. Photos without `src` render as labelled placeholders.

Anything in `[square brackets]` is placeholder copy waiting on the client.

## Accessibility

Built to WCAG 2.2 AA: no text over photos, every color pair ≥ 4.5:1, alt text on every image, skip link, visible keyboard focus, real headings and landmarks, a no-JS keyboard-friendly mobile menu, and reduced-motion support. Every page passes an axe-core scan at desktop and phone width.

## TODO before launch

- Real photography + alt text
- Studio email/phone, project years, photographers, write-ups
- Inquiry: the button is a `mailto:`; swap for a form service (e.g. Formspree) if she wants a form
- Studio, Press and Reviews pages (homepage sections link to anchors for now)
- Privacy policy text
- Redirects from old WordPress URLs (`/profile/`, `/featured/`, `/reviews/`, `/contact/`)
