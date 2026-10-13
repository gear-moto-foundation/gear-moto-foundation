# GEAR Moto Foundation — website release status (October 13, 2026)

## Code and build
Astro source now defines fourteen public site pages and is built into dist/. GitHub Actions builds on pushes to main and PRs, validates every public route, locally linked assets and sitemap, and publishes a downloadable dist artifact. Consult current Actions status for whether any new build has passed.

## Deployment status
Cloudflare DNS was shown configured to use Cloudflare Pages, but DNS configuration and GitHub source commits alone do not prove the latest build is publicly deployed. Verify the actual Cloudflare Pages deployment and custom domain at production after merges.

## Incomplete live integrations
- Contact form uses Cloudflare Pages Functions POST /api/contact and a Resend email-delivery API. Verify sender-domain setup, RESEND_API_KEY, CONTACT_FROM_EMAIL, deployed Pages Function and real routing for each department.
- Advertised mailboxes must be tested independently: reported MX points to Stackmail while outgoing cPanel server is vps.beehivelaw.com.
- Confirm Google community calendar is publicly readable and events are real.
- Donations, checkout and sensitive medical/grant applications remain inactive; no page copy may claim otherwise.

## Governance and documents
The aligned master blueprint, integrated bylaws and Rider Relief policy were reviewed as planning drafts. Filed Articles were not located in the accessible source files. Governance page intentionally describes structure as proposed and offers no links to unverified legal documents. Publish only independently verified Articles, board-adopted bylaws, actual IRS determination and public reporting when available.

## Images
Two deleted filenames still used by Donate were replaced with already-existing approved Impact images. All five approved Our Impact images remain in their existing folder. No reupload was required for those fixes.

## Verification remaining
Check actual live pages on mobile and desktop, validate contact submissions, review privacy and accessibility with the team/counsel, verify all inbox aliases, and establish nonprofit filing / registration status before solicitation.

## Volunteer interest and homepage milestone tracker (October 13, 2026)
- Volunteer page at /volunteer/ now has six categories of prospective volunteer participation and a consent-based interest form. The form uses the existing /api/contact function with topic Volunteering (routed to info@gearmotofoundation.org) and includes a user-initiated mailto fallback.
- A successful build does not prove the form delivers. Before promoting volunteer signups, test the production Pages Function and Resend sender credentials, verify mailbox receiving, and provide a responsible data-retention workflow.
- Homepage displays a manually maintained, nonpercentage launch milestone tracker: Mission Blueprint (drafted), Website & Community (in progress), Legal & Governance (official status to verify), Programs & Funding (not open), Launch & Reporting (planned). Never mark incorporation, IRS recognition, a board or active services completed without documentation.
- Volunteer page uses existing illustrative images; dedicated volunteer photography is pending. Any concept mockups depicting completed incorporation or operations are not factual and must not be used as actual status reports.
