# Synaptiq Website

A lightweight, fast, and responsive static website for Synaptiq.

## Quick start

- Open `index.html` directly in a browser, or
- Run a local server from the project directory:

```bash
python3 -m http.server 4000
```

Then visit `http://localhost:4000`.

## Structure

- `index.html`: Home page
- `about.html`: Company information
- `services.html`: What we offer
- `contact.html`: Contact form
- `styles/main.css`: Global styles
- `scripts/main.js`: Interactions (mobile nav, active link highlighting, form UX)
- `assets/logo.svg`: Vector logo
- `robots.txt` and `sitemap.xml`: Basic SEO files

## Customization

- Update copy in each `.html` file to reflect your exact services and messaging.
- Replace email in `contact.html` form `action` with your company email.
- If you deploy to a real domain, edit `sitemap.xml` to use that domain.
- Replace `assets/logo.svg` with your brand logo if you have one.

## Deploy

This site is static and can be hosted on any static host (GitHub Pages, Netlify, Vercel, S3, etc.). Just upload the folder contents.