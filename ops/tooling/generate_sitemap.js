import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://raw-hair-ghana.vercel.app';
const DIST_DIR = 'dist';
const SITEMAP_PATH = path.join(DIST_DIR, 'sitemap.xml');

function generateSitemap() {
    if (!fs.existsSync(DIST_DIR)) {
        console.error('❌ dist directory not found. Run npm run build first.');
        return;
    }

    const files = [];
    function getFiles(dir) {
        const list = fs.readdirSync(dir);
        for (const file of list) {
            const name = path.join(dir, file);
            if (fs.statSync(name).isDirectory()) {
                getFiles(name);
            } else if (name.endsWith('.html')) {
                files.push(name);
            }
        }
    }

    getFiles(DIST_DIR);

    const urls = files.map(file => {
        let urlPath = file
            .replace(DIST_DIR, '')
            .replace(/index\.html$/, '')
            .replace(/\.html$/, '')
            .replace(/\\/g, '/');
        
        if (!urlPath.startsWith('/')) urlPath = '/' + urlPath;
        return `${SITE_URL}${urlPath}`;
    });

    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url><loc>${url}</loc></url>`).join('\n')}
</urlset>`;

    fs.writeFileSync(SITEMAP_PATH, sitemapContent);
    console.log(`✅ Sitemap generated at ${SITEMAP_PATH} with ${urls.length} URLs`);
}

generateSitemap();
