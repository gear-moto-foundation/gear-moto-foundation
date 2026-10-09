# WordPress deployment: WestHost

The public GitHub repository does **not** automatically publish to WestHost.

1. Back up existing WordPress files and database.
2. Confirm the Blocksy **parent** theme is installed and working.
3. Download the `wordpress/gear-moto-child` directory, compress that folder as ZIP, and upload it in WordPress via **Appearance → Themes → Add New → Upload Theme**.
4. Activate the child theme after confirming the parent theme is installed. Check site header, footer, typography and responsive styles.
5. Create or update the WordPress pages using the drafts in `content/`. The homepage block structure can follow `preview/index.html`. Gutenberg group blocks can be given CSS classes such as `gear-hero`, `gear-section`, and `gear-programs`.
6. Set the intended homepage at **Settings → Reading** and menus through Blocksy's header configuration.
7. Run accessibility, mobile-layout, link and form checks before a public announcement.

## DNS / login notes
Previous work involved WestHost cPanel WordPress one-click login token failures, DNS A-record and `www` hostname questions, and Bitdefender VPN. No current DNS IP, record values, or confirmed fault cause is recorded here. **Do not edit DNS** without checking authoritative records and current hosting IP. If cPanel token login fails, attempt the standard domain WordPress login path after verifying HTTPS resolves, and check whether a VPN, security rule, or cookie issue is involved.

Never paste login tokens, database credentials or `wp-config.php` into GitHub.
