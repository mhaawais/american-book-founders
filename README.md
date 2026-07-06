# American Book Founders Landing Page

Static HTML landing page for Vercel deployment.

## Structure

- `index.html` - main page
- `components/` - HTML sections loaded by `assets/js/component-loader.js`
- `assets/` - CSS, JavaScript, images, flags, and form scripts
- `vercel.json` - static hosting/cache config

## Run Locally

Use any static server from the project root:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

Do not open `index.html` directly from the filesystem, because the page fetches component files.

## Deploy To Vercel

Push this folder to GitHub and import the repository in Vercel.

Recommended Vercel settings:

- Framework Preset: `Other`
- Build Command: leave empty
- Output Directory: leave empty
- Install Command: leave empty

Vercel will serve `index.html` as a static site.
