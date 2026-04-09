// Dynamic sitemap — generated at build time from all public content
// Updates automatically every deploy

import type { APIRoute } from 'astro';

const SITE = 'https://hair-business-ahad1qtic-durexvssiccors-projects.vercel.app';

const STATIC_ROUTES = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/products', priority: '0.9', changefreq: 'weekly' },
  { url: '/custom-builder', priority: '0.9', changefreq: 'monthly' },
];

const PUBLIC_PREFIXES = [
  'products/',
  'content/guides/',
  'content/faq/',
  'content/blog/',
  'policies/',
];
const PUBLIC_EXACT = new Set(['content/about']);

function isPublic(slug: string) {
  return PUBLIC_PREFIXES.some(p => slug.startsWith(p)) || PUBLIC_EXACT.has(slug);
}

function priority(slug: string): string {
  if (slug.startsWith('products/bundles') || slug.startsWith('products/wigs')) return '0.85';
  if (slug.startsWith('products/')) return '0.8';
  if (slug.startsWith('content/blog/')) return '0.75';
  if (slug.startsWith('content/guides/')) return '0.7';
  return '0.5';
}

function changefreq(slug: string): string {
  if (slug.startsWith('content/blog/')) return 'monthly';
  if (slug.startsWith('products/')) return 'weekly';
  return 'monthly';
}

export const GET: APIRoute = async () => {
  const allDocs = import.meta.glob('../**/*.md', { eager: true }) as Record<string, any>;

  const dynamicUrls = Object.keys(allDocs)
    .map(path => path.replace('../', '').replace(/\.md$/, ''))
    .filter(isPublic)
    .map(slug => ({
      url: `/${slug}`,
      priority: priority(slug),
      changefreq: changefreq(slug),
      lastmod: new Date().toISOString().split('T')[0],
    }));

  const allUrls = [
    ...STATIC_ROUTES.map(r => ({ ...r, lastmod: new Date().toISOString().split('T')[0] })),
    ...dynamicUrls,
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${allUrls.map(({ url, priority, changefreq, lastmod }) => `  <url>
    <loc>${SITE}${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
