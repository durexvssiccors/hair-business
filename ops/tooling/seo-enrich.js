#!/usr/bin/env node
/**
 * SEO Enrichment Script
 * ---------------------
 * Run: node ops/tooling/seo-enrich.js [optional: path/to/file.md]
 *
 * - Scans all markdown in content/ and products/
 * - Adds missing SEO frontmatter (description, keywords, date)
 * - Generates reasonable defaults from file content
 * - Safe: never overwrites existing values
 *
 * Triggered automatically by Claude Code hook on .md file save.
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, relative, extname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const ROOT = join(__dirname, '../../');

// Keyword sets by content type
const KEYWORD_SETS = {
  products: 'raw hair Ghana, raw Vietnamese hair, factory direct hair Ghana, buy raw hair Accra',
  bundles: 'raw hair bundles Ghana, Vietnamese hair bundles, raw bundle set Ghana, hair bundles Accra',
  wigs: 'raw hair wigs Ghana, lace wig Ghana, Vietnamese hair wig, raw wig Accra',
  closures: 'lace closure Ghana, HD closure Ghana, raw hair closure, frontal Ghana',
  blog: 'raw hair Ghana, raw Vietnamese hair vendor Ghana, hair vendor Accra, raw hair reviews Ghana',
  guides: 'raw hair guide Ghana, how to buy raw hair, raw hair tips Ghana',
  policies: '',
};

function getKeywords(slug) {
  if (slug.includes('bundles')) return KEYWORD_SETS.bundles;
  if (slug.includes('wigs')) return KEYWORD_SETS.wigs;
  if (slug.includes('closures') || slug.includes('frontal')) return KEYWORD_SETS.closures;
  if (slug.startsWith('products/')) return KEYWORD_SETS.products;
  if (slug.startsWith('content/blog/')) return KEYWORD_SETS.blog;
  if (slug.startsWith('content/guides/')) return KEYWORD_SETS.guides;
  return KEYWORD_SETS.blog;
}

function generateDescription(title, body) {
  // Extract first non-heading paragraph from body
  const lines = body.split('\n').filter(l => l.trim() && !l.startsWith('#') && !l.startsWith('---') && !l.startsWith('!'));
  const firstPara = lines[0]?.replace(/\*\*/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').trim() || '';
  if (firstPara.length > 40) {
    return firstPara.length > 155 ? firstPara.slice(0, 152) + '...' : firstPara;
  }
  return `${title} — Raw Vietnamese hair from factory-direct source in Ghana. Order on WhatsApp.`;
}

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return { fm: {}, body: content, hasFm: false };

  const fmStr = match[1];
  const body = content.slice(match[0].length);
  const fm = {};

  for (const line of fmStr.split('\n')) {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    let val = line.slice(colonIdx + 1).trim();
    // Remove surrounding quotes
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    fm[key] = val;
  }

  return { fm, body, hasFm: true, fmStr };
}

function buildFrontmatter(fm) {
  const lines = ['---'];
  for (const [key, val] of Object.entries(fm)) {
    if (typeof val === 'string') {
      const needsQuotes = val.includes(':') || val.includes('"') || val.includes("'");
      lines.push(needsQuotes ? `${key}: "${val.replace(/"/g, '\\"')}"` : `${key}: ${val}`);
    } else if (Array.isArray(val)) {
      lines.push(`${key}: [${val.map(v => `"${v}"`).join(', ')}]`);
    } else {
      lines.push(`${key}: ${val}`);
    }
  }
  lines.push('---');
  return lines.join('\n');
}

function enrichFile(filePath) {
  const content = readFileSync(filePath, 'utf-8');
  const slug = relative(ROOT, filePath).replace(/\.md$/, '');
  const { fm, body, hasFm, fmStr } = parseFrontmatter(content);

  let changed = false;

  // Title — derive from filename if missing
  if (!fm.title) {
    fm.title = slug.split('/').pop().replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    changed = true;
  }

  // Description
  if (!fm.description) {
    fm.description = generateDescription(fm.title, body);
    changed = true;
  }

  // Keywords
  if (!fm.keywords) {
    fm.keywords = getKeywords(slug);
    changed = true;
  }

  // Date (blog posts and guides)
  if (!fm.date && (slug.startsWith('content/blog/') || slug.startsWith('content/guides/'))) {
    fm.date = new Date().toISOString().split('T')[0];
    changed = true;
  }

  // Author (blog posts)
  if (!fm.author && slug.startsWith('content/blog/')) {
    fm.author = 'Raw Hair Direct';
    changed = true;
  }

  if (!changed) {
    return { path: filePath, changed: false };
  }

  const newContent = hasFm
    ? content.replace(/^---\n[\s\S]*?\n---/, buildFrontmatter(fm))
    : `${buildFrontmatter(fm)}\n\n${content}`;

  writeFileSync(filePath, newContent, 'utf-8');
  return { path: filePath, changed: true, added: Object.keys(fm) };
}

function getAllMdFiles(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      results.push(...getAllMdFiles(full));
    } else if (extname(entry) === '.md') {
      results.push(full);
    }
  }
  return results;
}

// Main
const target = process.argv[2];
const files = target
  ? [join(ROOT, target.replace(/^\//, ''))]
  : [
      ...getAllMdFiles(join(ROOT, 'content')),
      ...getAllMdFiles(join(ROOT, 'products')),
    ];

let enriched = 0;
for (const f of files) {
  try {
    const result = enrichFile(f);
    if (result.changed) {
      console.log(`✓ Enriched: ${relative(ROOT, f)}`);
      enriched++;
    }
  } catch (e) {
    console.error(`✗ Error: ${relative(ROOT, f)} — ${e.message}`);
  }
}

console.log(`\nSEO enrich complete. ${enriched}/${files.length} files updated.`);
