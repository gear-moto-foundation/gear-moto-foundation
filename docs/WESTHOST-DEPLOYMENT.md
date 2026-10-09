# WestHost / WordPress — Astra deployment

**Important:** Astra replaces the prior Blocksy **theme**, not WordPress. Continue using WestHost WordPress hosting.

1. Back up WordPress database and wp-content files.
2. Install the free **Astra** parent theme from WordPress Appearance → Themes → Add New, if needed.
3. Upload **GEAR_Moto_Foundation_Astra_Child_Theme.zip** via Appearance → Themes → Add New → Upload Theme.
4. Activate the **GEAR Moto Foundation Child** theme. Its `style.css` includes `Template: astra`.
5. Edit the Home page: add a **Shortcode** block with `[gear_homepage]`, save, and assign it at Settings → Reading.
6. In Astra **Appearance → Customize → Header Builder**, configure navigation and the GEAR logo. Use the white wordmark on dark backgrounds and main wordmark on light backgrounds.
7. Choose full-width content/no sidebar for the homepage if needed. Check mobile, typography, contrast, buttons, links, logos and hero photograph.
8. Retain the old theme as a rollback until the new design passes checks. Remove it later only if no longer needed.

## Assets
Original user-supplied PNG logos and optimized rider sunset JPG (each under 2 MB) are included in the installable ZIP, but they have not been added as binaries to GitHub. GitHub code files alone will not reproduce the full WordPress visual assets.

## DNS and hosting
No DNS changes are needed for switching themes. Earlier WestHost login-token, www and VPN troubleshooting is separate. Do not paste WestHost credentials or login tokens into GitHub.

The GitHub source **does not automatically deploy** to WestHost.
