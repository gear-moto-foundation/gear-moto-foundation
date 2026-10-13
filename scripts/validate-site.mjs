import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';
const root = resolve('dist');
const routes = ['/', '/about/', '/programs/', '/get-help/', '/contact/', '/donate/', '/events/', '/partners/', '/impact/', '/shop/', '/volunteer/', '/governance/', '/privacy/', '/accessibility/'];
const pages = new Map(), errors = [];
for (const route of routes) {
  const file = join(root, route === '/' ? 'index.html' : route.slice(1) + 'index.html');
  if (!existsSync(file)) { errors.push('Missing page: ' + route); continue; }
  pages.set(route, readFileSync(file, 'utf8'));
}
function check(raw, origin) {
  if (!raw || !raw.startsWith('/') || raw.startsWith('//')) return;
  const [withoutHash, fragment] = raw.split('#');
  const pathname = decodeURIComponent(withoutHash.split('?')[0] || origin);
  const target = pathname === '/' ? join(root, 'index.html') :
    pathname.endsWith('/') ? join(root, pathname.slice(1), 'index.html') :
    join(root, pathname.slice(1));
  if (!existsSync(target)) { errors.push('Missing file/page in ' + origin + ': ' + raw); return; }
  if (fragment && pages.has(pathname)) {
    const html = pages.get(pathname), id = decodeURIComponent(fragment);
    if (id && !html.includes('id="' + id + '"') && !html.includes("id='" + id + "'"))
      errors.push('Missing anchor in ' + origin + ': ' + raw);
  }
}
for (const [route, html] of pages) {
  for (const match of html.matchAll(/\b(?:src|href)=["']([^"']+)["']/g)) check(match[1], route);
  for (const match of html.matchAll(/\bsrcset=["']([^"']+)["']/g))
    for (const entry of match[1].split(',')) check(entry.trim().split(/\s+/)[0], route);
}
function scanCss(dir) {
  for (const item of readdirSync(dir)) {
    const absolute = join(dir,item);
    if (statSync(absolute).isDirectory()) {scanCss(absolute); continue;}
    if (!item.endsWith('.css')) continue;
    const css = readFileSync(absolute, 'utf8');
    for (const match of css.matchAll(/url\(\s*["']?(\/[^\s)"']+)["']?\s*\)/g))
      check(match[1], absolute.replace(root, ''));
  }
}
scanCss(root);
const sitemap = join(root, 'sitemap.xml');
if (!existsSync(sitemap)) errors.push('Missing sitemap.xml');
else {
  const xml = readFileSync(sitemap, 'utf8');
  for (const route of routes)
    if (!xml.includes('https://gearmotofoundation.org' + route + '</loc>'))
      errors.push('Sitemap missing ' + route);
}
for (const error of errors) console.error('ERROR: ' + error);
if (errors.length) process.exit(1);
console.log('Validated ' + routes.length + ' website pages, static asset paths, internal links/anchors and sitemap.');
