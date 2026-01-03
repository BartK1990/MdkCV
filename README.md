# MkDocs CV Website (GitHub Pages)

This repository builds a simple CV website using **MkDocs** + **mkdocs-material**, and deploys it to **GitHub Pages** via **GitHub Actions**.

## Files

- `mkdocs.yml` — MkDocs configuration
- `docs/` — site content
- `docs/assets/MDK_CV.pdf` — PDF used by the Download button
- `.github/workflows/deploy.yml` — GitHub Pages build + deploy workflow

## Configure GitHub Pages

1. Push this repo to GitHub.
2. In GitHub: **Settings → Pages**
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Ensure your default branch is `main` (or adjust the workflow branch).

After the next push to `main`, the workflow will publish the site.

## Local preview (optional)

If you have Python installed:

```bash
python -m pip install -r requirements.txt
mkdocs serve
```

Then open the local URL printed in the terminal.
