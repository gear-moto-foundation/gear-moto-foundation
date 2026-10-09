# GEAR Moto Foundation — Cloudflare Pages staging

The source is an Astro **static** site. This configuration does not change the existing live site or DNS.

## Connect to Cloudflare Pages (one-time account authorization)

1. Sign in at https://dash.cloudflare.com/ and navigate to **Workers & Pages**.
2. Choose **Create → Pages → Connect to Git** (labels may vary).
3. Authorize GitHub and select `gear-moto-foundation/gear-moto-foundation`.
4. Name the Cloudflare Pages project `gear-moto-foundation-preview` (subject to availability).
5. Use:
   - Production branch: `main`
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `/`
   - Node.js version: **22** (environment variable `NODE_VERSION=22` if necessary).
6. Save and deploy. Cloudflare will show the **actual** `*.pages.dev` URL on success; do not assume a specific address before confirmation.
7. Open every page and confirm the original images are loading from `public/images`.

## Preview behavior

Each commit to `main` automatically rebuilds the Cloudflare Pages production environment **for this staging project**, while pull requests can receive branch previews. The project does not automatically claim the foundation's domain; keep it on `pages.dev` until approved.

## Safety and assets

Do not add a custom domain or change WestHost/DNS records for staging. Do not modify or remove uploaded photos and logos in `public/images`. Do not collect donations or sensitive rider documents on staging.

## Deployment verification

The GitHub build workflow validates six pages and the required GEAR artwork. Cloudflare's first build and URL only exist after an authorized Cloudflare account connects the repository.
