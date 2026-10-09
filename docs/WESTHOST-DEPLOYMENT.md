# WestHost / WordPress deployment

GitHub stores website code and vector logo references. The **original PNG logos and rider-at-sunset JPEG** are supplied in the separately downloadable **GEAR_Moto_Foundation_WordPress_Theme.zip**; they have not yet been uploaded as binary assets into the GitHub repo.

## Install the branded homepage
1. Back up WordPress files and database.
2. Confirm Blocksy parent theme is installed.
3. Go to WordPress **Appearance → Themes → Add New → Upload Theme**.
4. Upload the provided `GEAR_Moto_Foundation_WordPress_Theme.zip` and activate **GEAR Moto Foundation Child**.
5. Open your WordPress **Home** page, add a **Shortcode** block containing `[gear_homepage]`, then save or preview it.
6. Set that page as your static homepage at **Settings → Reading**.
7. Use Blocksy's header builder to configure navigation and upload `Gear_Logo_White.png` for a dark header; use `Gear_Logo_Main.png` for light sections.
8. Verify phone/mobile layout, logo legibility, buttons, link targets, contrast, and image loading.
9. Keep assistance applications and donation processing disabled until the organization has approved them.

## Images included with the package
- Main, black and white wordmarks plus G/E/A/R individual marks (SEO-oriented PNG filenames).
- Optimized rider sunset JPG (`gear-hero-rider-sunset-1600.jpg`).
- A small site icon; upload via WordPress Site Identity if desired.
- Every single asset is smaller than 2 MB.

## Cautions
GitHub does not deploy code to WestHost automatically. No FTP credentials, cPanel access, secret login tokens, or DNS changes are required to install this design package through WordPress.

Older site setup involved cPanel login-token failures, A-record / www troubleshooting, and a Bitdefender VPN. Do not change DNS solely to upload logos or the theme.
