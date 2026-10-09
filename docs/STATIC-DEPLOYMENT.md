# Static site deployment

## Requirements
- Node.js 20.3+ or a compatible newer LTS release.
- Static hosting on WestHost or another platform capable of serving HTML/CSS/images.

## Build
```bash
npm install
npm run build
```
The `dist/` folder contains pre-rendered static files.

## Publishing
1. Keep the current live site intact until the replacement is tested.
2. Preview locally via `npm run dev`.
3. Upload the **contents** of `dist/` into the selected host's web document root (often `public_html` on cPanel).
4. Confirm the host serves `index.html` and nested directory routes, including `/about/` and `/programs/`.
5. Verify HTTPS, page links, and images. Update DNS only if changing hosting providers; do not change records just to upload files.
6. Once verified, retire the previous deployment files and preserve an offline backup.

## Media
The SVG GEAR marks are committed in `public/brand`. The approved images are stored in `public/images/`. The homepage uses `GEAR_Cover.png` as its background and `Gear_Logo_White.png` as its main wordmark. Optimize photographic assets to under 2 MB.

## Form / donation caveat
This is a static site. Donation processing and a contact form require third-party services or a separate backend. No payment or application collection is enabled in this build.
