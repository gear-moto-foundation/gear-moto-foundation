# GEAR Moto Foundation — deployment and form verification

## Site build
```bash
npm install
npm run build
npm run validate:site
```
The Astro static site is emitted in `dist/`. Check all routes and image references before publishing. Keep the previous live deployment intact until the replacement is tested.

## Hosting options (not interchangeable)
1. **Cloudflare Pages:** publish the Astro output `dist/` **and** enable Pages Functions in the source directory `functions/`. The contact form route `POST /api/contact` is implemented as `functions/api/contact.js`. Configure `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` in Cloudflare Pages securely; verify the sender domain with Resend; test delivery to each configured contact mailbox.
2. **WestHost / cPanel static site:** uploading `dist/` serves HTML/CSS/images, **not** the Cloudflare Pages function. Form submissions to `/api/contact` may fail or return a 404 unless a separate backend or proxy is installed. Do not assume a successful submission. Use the volunteer mailto fallback and provide direct department email links until there is a tested endpoint.
3. **Other hosts:** require an equivalent secure server-side contact handler and spam/privacy protections before enabling submit buttons.

## Pre-release acceptance checklist
- Confirm the live domain, DNS, TLS, hosting platform and last deployment commit.
- Confirm homepage, program pillars, navigation, mobile layout, governance and event/impact status.
- Test volunteer and contact submissions with a safe non-sensitive test message; confirm actual inbox delivery and opt-in handling. Confirm fallback on error.
- Never request accident reports, insurance records or medical data through general website forms.
- Check all image file sizes for WordPress/site rules where relevant, and visually test embedded illustrations.
- Verify legal formation and tax-recognition claims against real filed records; until verified, keep **planned / in development** language.
- Do not enable donation payment acceptance or grant applications before approved workflows and financial controls.
- Do not claim the GitHub code proves current production behavior.

## Program messaging contract
Gear = safety equipment. Education = training. Assistance = resource navigation and referrals. Recovery = accident-related medical and hardship aid under specific policies. Controlled motorsports eligibility is different from normal public-road eligibility in the proposed Rider Relief policy. Do not advertise theoretical grant maxima as available payments.

Source-of-truth date: 2026-10-13. Documents and site remain proposed until adoption/verification.
