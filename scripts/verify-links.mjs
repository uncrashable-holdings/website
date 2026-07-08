import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

// This script does, mechanically and correctly every time, what the
// Page Registry spreadsheet used to do by hand: it computes Editorial
// Gravity from the actual content, and it fails loudly if a declared
// reference points at a page that doesn't exist. No transcription error
// is possible, because nothing is transcribed. It's read straight from
// the source of truth.

const CONTENT_ROOT = path.join(process.cwd(), 'src/content');

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
let brokenCount = 0;

console.log('\n--- Reference Integrity Check ---\n');
for (const [slug, page] of Object.entries(pages)) {
  for (const ref of page.references || []) {
    if (!validSlugs.has(ref)) {
      console.error(`BROKEN REFERENCE: "${slug}" references "${ref}", which does not exist as a page.`);
      brokenCount += 1;
    }
  }
}

if (brokenCount === 0) {
  console.log('All declared references resolve to real pages.\n');
}

// Compute real inbound counts from the actual reference graph, not from
// a hand-typed list anywhere.
const inbound = {};
for (const slug of validSlugs) inbound[slug] = [];
for (const [slug, page] of Object.entries(pages)) {
  for (const ref of page.references || []) {
    if (inbound[ref]) inbound[ref].push(slug);
  }
}

console.log('--- Live Editorial Gravity Report ---\n');
for (const slug of validSlugs) {
  const inCount = inbound[slug].length;
  const outCount = pages[slug].outboundCount;
  console.log(
    `${slug.padEnd(24)} status=${(pages[slug].status || '').padEnd(10)} ` +
    `inbound=${inCount} outbound=${outCount} gravity=${inCount + outCount}` +
    (inCount ? `  <- referenced by: ${inbound[slug].join(', ')}` : '')
  );
}
console.log('');

if (brokenCount > 0) {
  console.error(`FAILED: ${brokenCount} broken reference(s) found. Fix before publishing.\n`);
  process.exit(1);
} else {
  console.log('PASSED.\n');
}
