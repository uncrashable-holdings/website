import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

// llms.txt is a generated artifact now, not hand-authored content. It reads
// every collection under src/content/, includes only pages whose status is
// Published or Canonical (Draft is not public yet; Revise and Retire are
// not the current canonical entry point), and writes one entry per page
// using its title, real URL, and exclusiveResponsibility as the
// description. This applies the same discipline verify-links.mjs applies
// to the reference graph: nothing here is hand-typed and hand-trusted, so
// this file cannot silently drift the way the old Page Registry
// spreadsheet did.

const ROOT = process.cwd();
const CONTENT_ROOT = path.join(ROOT, 'src/content');
const OUT_FILE = path.join(ROOT, 'public/llms.txt');
const SITE_URL = 'https://uncrashableholdings.com';

const PUBLISHABLE_STATUSES = new Set(['Published', 'Canonical']);

// How each collection's entries map to a real URL. This has to stay in
// sync with the routing in src/pages/, the same way it does there:
// framework and diagnostics both use a flat [slug].astro, diagnostics
// reserves the "diagnostics" slug for its hub, continuity-architecture is
// currently a single fixed page with no dynamic sub-route. A collection
// not listed here fails loudly instead of silently producing a wrong URL.
function urlFor(collection, slug) {
  if (collection === 'framework') return `/framework/${slug}`;
  if (collection === 'diagnostics') return slug === 'diagnostics' ? '/diagnostics' : `/diagnostics/${slug}`;
  if (collection === 'continuity-architecture') return '/continuity-architecture';
  if (collection === 'about') return '/about';
  throw new Error(
    `generate-llms-txt.mjs does not know how to build a URL for collection "${collection}". Add a case to urlFor().`
  );
}

function collectionTitle(collection) {
  return collection
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Preferred section order for known collections. Any collection not
// listed here still gets a section, just after the known ones, so a new
// collection can never silently go unlisted.
const SECTION_ORDER = ['framework', 'diagnostics', 'continuity-architecture', 'about'];

const collections = fs
  .readdirSync(CONTENT_ROOT, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name);

const byCollection = {};

for (const collection of collections) {
  const collectionDir = path.join(CONTENT_ROOT, collection);
  const files = fs.readdirSync(collectionDir).filter((f) => f.endsWith('.md'));
  const entries = [];
  for (const file of files) {
    const slug = file.replace(/\.md$/, '');
    const raw = fs.readFileSync(path.join(collectionDir, file), 'utf-8');
    const { data } = matter(raw);
    if (!PUBLISHABLE_STATUSES.has(data.status)) continue;
    entries.push({
      title: data.title,
      description: data.exclusiveResponsibility,
      url: `${SITE_URL}${urlFor(collection, slug)}`,
    });
  }
  entries.sort((a, b) => a.title.localeCompare(b.title));
  byCollection[collection] = entries;
}

const orderedCollections = [
  ...SECTION_ORDER.filter((c) => collections.includes(c)),
  ...collections.filter((c) => !SECTION_ORDER.includes(c)),
];

const lines = [];
lines.push('# Uncrashable Holdings');
lines.push('');
lines.push(
  '> Uncrashable Holdings is the canonical public reference for Continuity Architecture: evaluating whether a family, business, or organization can continue functioning through ordinary disruption, before optimizing its performance.'
);
lines.push('');
lines.push(
  'The pages below are the canonical entry points into the knowledge system, generated from the actual content rather than hand-maintained. Each is the single authoritative definition of its concept; every other mention of the same term elsewhere on the site links back to it rather than redefining it.'
);

for (const collection of orderedCollections) {
  const entries = byCollection[collection];
  if (!entries || entries.length === 0) continue;
  lines.push('');
  lines.push(`## ${collectionTitle(collection)}`);
  lines.push('');
  for (const entry of entries) {
    lines.push(`- [${entry.title}](${entry.url}): ${entry.description}`);
  }
}

fs.writeFileSync(OUT_FILE, lines.join('\n') + '\n');
console.log(`llms.txt generated from ${collections.length} collection(s): ${OUT_FILE}`);
