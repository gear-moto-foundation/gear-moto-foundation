import type { APIRoute } from 'astro';
export const GET: APIRoute = () => {
  const base = 'https://gearmotofoundation.org';
  const paths = ['/', '/about/', '/programs/', '/get-help/', '/contact/', '/donate/'];
  const xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + paths.map(p=>'<url><loc>'+base+p+'</loc></url>').join('') + '</urlset>';
  return new Response(xml,{headers:{'Content-Type':'application/xml; charset=utf-8'}});
};
