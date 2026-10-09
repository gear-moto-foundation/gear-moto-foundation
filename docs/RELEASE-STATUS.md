# Release status

The Astro source, six pages and SVG brand marks are committed to the repository.

## Automatic build
GitHub Actions runs `.github/workflows/build.yml` on every push to `main`, validates six static pages and uploads the `dist/` folder as a downloadable workflow artifact.

## Manual action still required
The original GEAR image uploads have been added to `public/brand/` and `public/images/gear-rider-sunset.png`. The Astro hero now references the uploaded PNG. Verify build success in GitHub Actions before deployment.

Deploy the built `dist/` files to the selected static hosting service once hosting access is configured. No live-domain deployment has been performed by the GitHub code change.

Avoid turning on financial transactions or collecting assistance applications until policies, privacy and legal prerequisites are verified.
