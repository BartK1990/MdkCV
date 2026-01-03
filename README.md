# CV Website (Astro Resume)

This repository builds a CV website using the Astro theme **EmaSuriano/astro-resume** and deploys it to **GitHub Pages** via **GitHub Actions**.

## Where to edit

- Main content: `astro/src/pages/index.md`
- Layout/theme: `astro/src/layouts/Minimalist.astro`
- Static assets:
	- `astro/public/ProfilePicture.jpg`
	- `astro/public/MDK_CV.pdf`

## GitHub Pages deployment

1. Push this repo to GitHub.
2. In GitHub: **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Ensure the default branch is `main` (or update the workflow).

Note: For correct URLs on GitHub Pages project sites, check `astro/astro.config.mjs` (`base` and `site`).

## Local preview (optional)

You need Node.js + Yarn:

```bash
cd astro
yarn
yarn dev
```
