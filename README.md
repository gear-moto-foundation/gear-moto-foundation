# GEAR Moto Foundation — Astro Static Website

**Protect the Ride. Support the Rider.**

This repository is the **standalone Astro static website** for [gearmotofoundation.org](https://gearmotofoundation.org). The design uses the approved GEAR identity: red/charcoal/white palette, condensed headlines, GEAR logo marks, and an optional sunset motorcycle photo.

## Run locally

Requires Node.js 20.3+ (recommended 22+).

```bash
npm install
npm run dev
npm run build
```

The production-ready static output is generated in `dist/`. It can be deployed to standard static hosting by uploading the **contents** of `dist/` to the hosting document root. Set the hosting site URL to the domain and configure HTTPS.

## Pages

`src/pages/index.astro`, `about.astro`, `programs.astro`, `get-help.astro`, `contact.astro`, and `donate.astro`. Shared layout at `src/layouts/Base.astro`; responsive styling at `src/styles/global.css`.

## Assets

Site-ready SVG marks are in `public/brand/`. The approved photos and logos are stored in `public/images/` (including `GEAR_Cover.png`, `GEAR_Moto_Foundation_BannerLogo.png`, and `Gear_Logo_White.png`). Current layouts directly reference these files. Keep originals in place. Original PNG logos remain in the separately supplied asset package.

## Deployment

See [docs/STATIC-DEPLOYMENT.md](docs/STATIC-DEPLOYMENT.md). No server-side runtime, database, or CMS is required.

**Status:** Draft. Do not claim open grants, active donation processing, or established tax-exempt status without verification. Never commit account credentials or beneficiary records.
