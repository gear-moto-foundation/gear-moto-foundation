# GEAR Moto Foundation — Volunteer Visual & Launch Brief

Updated October 13, 2026. The website code uses existing /images/impact/ imagery; the following dedicated photo assets are still proposed and **not yet uploaded**.

## New photography to create
Use believable Utah-area motorcycle-community scenes, adults in their early-to-mid twenties alongside varied ages and motorcycle styles. Brand palette: charcoal, white and red accents, without inventing sponsors or presenting a real event as completed. Never depict riders in unsafe conditions.

1. **Hero:** 3–5 adults helping at an outdoor rider-community equipment/information table, parked sportbikes and a cruiser nearby, golden-hour mountain setting, red/black apparel without fabricated official staff credentials. Landscape 16:9; proposed file: `gear-moto-foundation-volunteer-community-outreach-hero.jpg`.
2. **Events:** volunteers checking a route sheet / greeting riders at a safe stationary event check-in, helmets visible, no active riding. Proposed file: `gear-moto-foundation-volunteer-motorcycle-event-support.jpg`.
3. **Protective equipment:** volunteer discussing helmet sizing and protective jackets at a table, no invented distribution or grant-award results. Proposed file: `gear-moto-foundation-volunteer-motorcycle-safety-gear.jpg`.
4. **Community help:** riders and non-riders reviewing resource information together, respectful and dignified; avoid visible patient or private information. Proposed file: `gear-moto-foundation-volunteer-rider-community-support.jpg`.

## Asset requirements
- JPEG (.jpg), each **less than 2 MB** for website workflow.
- Hero around 1600–2000 px wide, supporting images at least 1200 px wide.
- SEO filenames exactly as indicated, descriptive truthful alt text.
- Use alt text and visible captions identifying AI-generated work as **illustrative**, not as photos of actual GEAR volunteers.
- Upload to `public/images/volunteer/`, then change `src/pages/volunteer.astro` to reference approved images.
- Avoid printing inaccurate incorporation/IRS milestones in generated artwork. Use HTML tracker so status stays editable.
- Prefer real event photography with consent once activities are actually organized.

## Email and operational readiness
- Volunteer form submits to the existing Cloudflare Pages Function `/api/contact`, with topic `Volunteering` and a summarized interest message routed to `info@gearmotofoundation.org`.
- User-initiated email fallback is offered if the provider is not configured or delivery fails.
- Form delivery **not independently verified** on production. Test end-to-end before promising signups.
- Interest forms are not applications, guarantee of volunteer placement, or agreement to serve. Do not request background checks, medical information, accident records, SSNs or financial materials through this site.
- Later: establish approved volunteer coordinator, consent handling, secure records, training, insurance and protocols.
- Facebook page and group launch will follow the website launch; no social account creation has been performed.
