# GEAR Moto Foundation — Astro Website

**Protect the Ride. Support the Rider.**  
Public website: https://gearmotofoundation.org

## Status — 2026-10-13
This is a **prelaunch website**. The mission and website are in development. Utah incorporation, adopted bylaws, IRS recognition, online donations, public assistance applications, and funded programs must **not** be described as completed unless independently verified. GitHub source is not proof that the live deployment matches it.

## Core charitable program definitions
- **Gear:** Need-based access to protective helmets and other motorcycle safety equipment.
- **Education:** Rider safety education, courses, skills and endorsement-related support.
- **Assistance:** Practical guidance, referrals, resource navigation and connections to service providers. **Not** the medical grant program.
- **Recovery:** Potential need-based accident-related medical grants, financial hardship support, rehabilitation and rebuilding, subject to adopted policies, appropriated funds and confidential review.

No donor or sponsor may choose an individual beneficiary. A supporter, volunteer, or riding-club affiliation does not confer grant preference.

## Routes and content
Astro pages in `src/pages/` include Home, About, Programs, Get Help, Events, Partners, Donate, Volunteer, Governance, Impact, Contact and Privacy. Shared layout: `src/layouts/Base.astro`. Styles: `src/styles/global.css`. Assets: `public/images/` and `public/brand/`.

## Local development
Node.js 20.3+ (22 LTS preferred):
```bash
npm install
npm run dev
npm run build
npm run validate:site
```
Static site output is `dist/`.

## Volunteer interest and website forms
The volunteer page solicits **expressions of interest**, not approved volunteer service. Contact: **volunteer@gearmotofoundation.org**.

The front-end form posts to `/api/contact`. This repository also contains a **Cloudflare Pages-specific** function at `functions/api/contact.js`. That backend requires a Cloudflare Pages deployment plus a verified Resend sending domain, `RESEND_API_KEY`, and `CONTACT_FROM_EMAIL`; the production delivery chain must be tested. A generic static upload of `dist/` to WestHost or other static hosting **does not execute** the Cloudflare function. Do not describe form submissions as operational until verified; the volunteer page provides an email-app fallback.

## Deployment and reconciliation
See `docs/STATIC-DEPLOYMENT.md` and `docs/PUBLIC-CONTENT-RECONCILIATION.md`. Reconcile public claims with the board's current approved source of truth before each publication. Do not commit donor lists, applicant records, secrets, medical information, or private board deliberations.
