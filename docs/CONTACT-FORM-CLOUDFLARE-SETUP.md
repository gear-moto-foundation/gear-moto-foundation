# Contact Form — Cloudflare Pages Setup

The contact page uses `POST /api/contact`, implemented as a **Cloudflare Pages Function** at `functions/api/contact.js`. It emails general inquiries to **info@gearmotofoundation.org** using Resend. This is not a third-party hosted form or an email link masquerading as a form.

## Required setup (before the form can deliver messages)

1. Verify an email sending domain/subdomain with Resend. For example, use `mail.gearmotofoundation.org` or an isolated sending subdomain and set up **only the DNS records Resend instructs** in Cloudflare. **Do not overwrite existing Stackmail MX/SPF records** for normal foundation email.
2. In the Cloudflare Pages project's **Settings → Variables and Secrets**, add:
   - `RESEND_API_KEY` — secret API key (encrypt/secret; **never commit to GitHub**).
   - `CONTACT_FROM_EMAIL` — sender address on the **verified sending domain**, e.g. `GEAR Moto Foundation <website@mail.gearmotofoundation.org>`.
3. Redeploy the Cloudflare Pages project so the Functions runtime reads those variables.
4. Submit a real test message via `/contact/`. Verify delivery to `info@gearmotofoundation.org`, reply-to, and spam folder. If the API key / sending address is missing or delivery fails, the page displays a clear fallback to direct email rather than a false success.
5. Configure Cloudflare bot protection and rate-limiting for `/api/contact` (the basic hidden honeypot alone is not sufficient protection from automated spam).
6. Verify actual production host, routing and deployments. If hosted on **Cloudflare Workers static assets** rather than Pages, Pages Functions won't execute as-is. That deployment needs a compatible Worker route/handler instead.
7. Consider a published privacy notice and retention policy before launching. Form intentionally does not accept file attachments, medical records, grant applications, financial documents or sensitive case information.

## Fields

Name, email, phone (optional), topic, message. Explicit topic allowlist; email provider Reply-To uses submitted address. Content is length-limited and HTML-escaped; no sensitive information is saved to GitHub.

## Current state

**Form UI and server-side source code are committed. Delivery is not operational until Resend and Cloudflare secrets are configured, the site is deployed, and a test succeeds.** No claim of successful email delivery should be made before that.

The existing site is configured for Astro **static output**. Cloudflare Pages Functions are separately deployed from the Astro static `dist` output by Pages. Do not just upload `dist` to another static host and expect `/api/contact` to work.
