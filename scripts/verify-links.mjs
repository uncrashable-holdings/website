import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

// This script does, mechanically and correctly every time, what the
// Page Registry spreadsheet used to do by hand: it computes Editorial
// Gravity from the actual content, and it fails loudly if a declared
// reference points at a page that doesn't exist. No transcription error
// is possible, because nothing is transcribed. It's read straight from
// the source of truth.
//
// Editorial edges come from two distinct sources now, not one:
//
//   content-reference  a content-collection page's own `references[]`
//                       array, exactly as before.
//
//   standalone-astro    a hand-written page file that carries real prose
//                       links of its own, but is not part of any content
//                       collection.
//
// The second source is defined by an explicit allowlist below, never by
// scanning every .astro file under src/pages/. Most .astro files in this
// project (framework/[slug].astro, diagnostics/[slug].astro,
// verticals/[slug].astro, about/index.astro,
// continuity-architecture/index.astro) exist only to render a
// content-collection entry through FrameworkLayout, they render an
// editorial relationship, they don't own one. Every file under
// src/layouts/ and src/components/ is shared presentation for the same
// reason. Scanning those would misattribute a content page's own link to
// the template that happens to render it. Only Home and Start Here are
// genuinely hand-written editorial pages with their own prose links, so
// only they are allowlisted.

const ROOT = process.cwd();
const CONTENT_ROOT = path.join(ROOT, 'src/content');

// Scan every collection directory under src/content/, not just framework.
// A new collection folder is picked up automatically, no code change here
// required each time one is added.
const collections = fs
  .readdirSync(CONTENT_ROOT, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name);

const pages = {};

for (const collection of collections) {
  const collectionDir = path.join(CONTENT_ROOT, collection);
  const files = fs.readdirSync(collectionDir).filter((f) => f.endsWith('.md'));
  for (const file of files) {
    const slug = file.replace(/\.md$/, '');
    const raw = fs.readFileSync(path.join(collectionDir, file), 'utf-8');
    const { data } = matter(raw);
    pages[slug] = { ...data, slug, collection, outboundCount: (data.references || []).length };
  }
}

const validSlugs = new Set(Object.keys(pages));

// The fixed allowlist. Adding a page here is a deliberate editorial
// decision, not a side effect of adding a file under src/pages/.
const standaloneEditorialPages = [
  { file: 'src/pages/index.astro', sourceId: 'home' },
  { file: 'src/pages/start-here.astro', sourceId: 'start-here' },
];

const HREF_ATTR_RE = /href=["']([^"']+)["']/g;
const MARKDOWN_LINK_RE = /\]\(([^)]+)\)/g;
const ASSET_EXT_RE = /\.(png|jpe?g|gif|svg|webp|ico|pdf|css|js|mjs|json|xml|txt|woff2?|ttf)$/i;

// Resolve an href to the same bare-slug convention every collection entry
// already uses: strip query/fragment, take the final path segment.
// "/verticals" -> "verticals", "/framework/aoidr" -> "aoidr", never a
// hyphenated concatenation of the path. Anything that isn't a static,
// resolvable internal route returns null and is skipped: relative paths,
// external URLs (they never start with "/"), protocol-relative URLs,
// mailto:/tel: (also never start with "/"), fragment-only links, the
// bare root, API routes, and asset files.
function resolveSlug(href) {
  if (!href.startsWith('/')) return null;
  if (href.startsWith('//')) return null;
  const pathOnly = href.split(/[?#]/)[0];
  if (pathOnly === '' || pathOnly === '/') return null;
  if (/^\/api\//.test(pathOnly)) return null;
  if (ASSET_EXT_RE.test(pathOnly)) return null;
  const segments = pathOnly.split('/').filter(Boolean);
  if (segments.length === 0) return null;
  return segments[segments.length - 1];
}

// Every editorial edge, from either source, tagged with its type. This is
// the full graph: broken-reference checking and the gravity report both
// read from this one list instead of two parallel, easy-to-desync ones.
const edges = [];

for (const [slug, page] of Object.entries(pages)) {
  for (const ref of page.references || []) {
    edges.push({ source: slug, target: ref, type: 'content-reference' });
  }
}

for (const { file, sourceId } of standaloneEditorialPages) {
  const raw = fs.readFileSync(path.join(ROOT, file), 'utf-8');
  const seenTargets = new Set();

  const candidateHrefs = [
    ...[...raw.matchAll(HREF_ATTR_RE)].map((m) => m[1].trim()),
    ...[...raw.matchAll(MARKDOWN_LINK_RE)].map((m) => m[1].trim()),
  ];

  for (const href of candidateHrefs) {
    const slug = resolveSlug(href);
    if (slug === null) continue;
    if (seenTargets.has(slug)) continue;
    seenTargets.add(slug);
    edges.push({ source: sourceId, target: slug, type: 'standalone-astro' });
  }
}

let brokenCount = 0;

console.log('\n--- Reference Integrity Check ---\n');
for (const edge of edges) {
  if (!validSlugs.has(edge.target)) {
    if (edge.type === 'content-reference') {
      console.error(`BROKEN REFERENCE: "${edge.source}" references "${edge.target}", which does not exist as a page.`);
    } else {
      console.error(
        `BROKEN REFERENCE: "${edge.source}" (standalone-astro) links to a route resolving to "${edge.target}", which does not exist as a page.`
      );
    }
    brokenCount += 1;
  }
}

if (brokenCount === 0) {
  console.log('All declared references resolve to real pages.\n');
}

// Compute real inbound edges, grouped by target and by type, from the
// actual graph, not from a hand-typed list anywhere. Only edges pointing
// at a real page are counted here, broken edges are already reported
// above and excluded from gravity.
const inboundByTarget = {};
for (const slug of validSlugs) inboundByTarget[slug] = [];
for (const edge of edges) {
  if (inboundByTarget[edge.target]) inboundByTarget[edge.target].push(edge);
}

const EDGE_TYPE_ORDER = ['content-reference', 'standalone-astro'];

console.log('--- Live Editorial Gravity Report ---\n');
for (const slug of validSlugs) {
  const inboundEdges = inboundByTarget[slug];
  const inCount = inboundEdges.length;
  const outCount = pages[slug].outboundCount;

  let provenance = '';
  if (inCount > 0) {
    const byType = { 'content-reference': [], 'standalone-astro': [] };
    for (const edge of inboundEdges) byType[edge.type].push(edge.source);

    const segments = EDGE_TYPE_ORDER.filter((type) => byType[type].length > 0).map((type) => {
      const sources = byType[type];
      return sources.length === 1 ? `${sources.length} ${type}: ${sources[0]}` : `${sources.length} ${type}`;
    });
    provenance = ` (${segments.join(', ')})`;
  }

  console.log(
    `${slug.padEnd(24)} status=${(pages[slug].status || '').padEnd(10)} ` +
      `inbound=${inCount}${provenance} outbound=${outCount} gravity=${inCount + outCount}`
  );
}
console.log('');

if (brokenCount > 0) {
  console.error(`FAILED: ${brokenCount} broken reference(s) found. Fix before publishing.\n`);
  process.exit(1);
} else {
  console.log('PASSED.\n');
}
