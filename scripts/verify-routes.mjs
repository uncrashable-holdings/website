import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import matter from 'gray-matter';

// verify-links.mjs checks one thing: does a declared `references` slug in
// frontmatter match an existing content file? That is a slug-to-file check.
//
// This script checks a different thing: does an inline link's href, written
// anywhere in the site, resolve to a URL the built site actually serves?
// That is an href-to-route check. A reference can be perfectly valid (the
// file exists, verify-links passes) while the inline link pointing at it is
// still wrong, a typo'd path, a stale URL left over from a rename, a route
// that was never built the way the prose assumes. This script is the one
// built to catch that gap.
//
// It checks two different kinds of source, because links live in two
// different kinds of file in this project: markdown links in the body of
// every content-collection page under src/content/, and hardcoded hrefs
// (or, in principle, markdown-style links sitting in a template literal)
// in hand-written .astro template files under src/pages/, src/layouts/,
// and src/components/. A hand-written page like Home is not part of any
// collection, and a link living in a shared layout or component (like the
// site identity link in FrameworkLayout.astro) is not part of any page
// file either, so without this second pass those links would be invisible
// to every automated check in this project.
//
// It builds the site first so "real route" means what Astro actually
// generates, not what this script assumes Astro's routing rules produce.

const ROOT = process.cwd();
const DIST_DIR = path.join(ROOT, 'dist');
const CONTENT_ROOT = path.join(ROOT, 'src/content');
const TEMPLATE_ROOTS = ['src/pages', 'src/layouts', 'src/components'].map((dir) => path.join(ROOT, dir));

console.log('\n--- Building site to determine real routes ---\n');
execSync('npx astro build', { cwd: ROOT, stdio: 'inherit' });

// Walk dist/ and turn every generated HTML file into the route it serves.
function collectRoutes(dir, base = '') {
  const routes = new Set();
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      for (const r of collectRoutes(fullPath, `${base}/${entry.name}`)) routes.add(r);
    } else if (entry.name.endsWith('.html')) {
      const route =
        entry.name === 'index.html'
          ? base || '/'
          : `${base}/${entry.name.replace(/\.html$/, '')}`;
      routes.add(route === '' ? '/' : route);
    }
  }
  return routes;
}

const validRoutes = collectRoutes(DIST_DIR);

function findFiles(dir, extension) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...findFiles(fullPath, extension));
    else if (entry.name.endsWith(extension)) out.push(fullPath);
  }
  return out;
}

let brokenCount = 0;
let checkedCount = 0;

// Shared validation: given a source label (a slug or a file path) and an
// href pulled from that source, confirm it is either a well-formed
// external URL or a path this build actually generated.
function checkHref(source, href) {
  checkedCount += 1;

  // External or non-web-page links (http(s), mailto, tel, etc.) are not
  // routes this site generates. Confirm they are at least well-formed,
  // but do not attempt to verify they resolve out on the internet.
  if (/^[a-z][a-z0-9+.-]*:/i.test(href)) {
    try {
      new URL(href);
    } catch {
      console.error(`MALFORMED URL: "${source}" links to "${href}", which is not a valid URL.`);
      brokenCount += 1;
    }
    return;
  }

  // Fragment-only links (for example the skip link, "#main") point at an
  // element on the same page, not at a route.
  if (href.startsWith('#')) return;

  if (!href.startsWith('/')) {
    console.error(
      `UNSUPPORTED HREF: "${source}" links to "${href}", which is neither an absolute site path nor an external URL.`
    );
    brokenCount += 1;
    return;
  }

  const pathOnly = href.split(/[?#]/)[0];
  const normalized = pathOnly.length > 1 ? pathOnly.replace(/\/$/, '') : pathOnly;

  // Static files served from public/ (favicon, robots.txt, llms.txt) are
  // real URLs but not generated routes.
  if (fs.existsSync(path.join(ROOT, 'public', normalized)) && fs.statSync(path.join(ROOT, 'public', normalized)).isFile()) return;

  if (!validRoutes.has(normalized)) {
    console.error(`BROKEN HREF: "${source}" links to "${href}", which does not resolve to a real route.`);
    brokenCount += 1;
  }
}

// Pass 1: every link in the body of every content-collection page.
// Frontmatter is not prose, so it is not scanned here, verify-links.mjs
// already governs that field. Two link shapes are checked here too, not
// just markdown-style [text](url): a page's "one genuine action link"
// (Visual Doctrine's gold CTA treatment) is written as raw HTML with
// class="action", precisely because standard markdown link syntax can't
// carry a class. A body that mixes markdown links and raw <a> tags needs
// both patterns checked, or the raw ones silently go unchecked.
const MARKDOWN_LINK_RE = /\]\(([^)]+)\)/g;
const HREF_ATTR_RE = /href=["']([^"']+)["']/g;

console.log('\n--- Content Collection Link Check ---\n');

const collections = fs
  .readdirSync(CONTENT_ROOT, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name);

for (const collection of collections) {
  const collectionDir = path.join(CONTENT_ROOT, collection);
  const files = fs.readdirSync(collectionDir).filter((f) => f.endsWith('.md'));
  for (const file of files) {
    const slug = file.replace(/\.md$/, '');
    const raw = fs.readFileSync(path.join(collectionDir, file), 'utf-8');
    const { content } = matter(raw);
    for (const match of content.matchAll(MARKDOWN_LINK_RE)) {
      checkHref(slug, match[1].trim());
    }
    for (const match of content.matchAll(HREF_ATTR_RE)) {
      checkHref(slug, match[1].trim());
    }
  }
}

// Pass 2: hand-written .astro template files under src/pages/, src/layouts/,
// and src/components/. These are not content-collection entries, so
// nothing else in this project ever reads their links. Same two link
// shapes as Pass 1.

console.log('\n--- Page Template Link Check ---\n');

const templateFiles = TEMPLATE_ROOTS.filter((dir) => fs.existsSync(dir)).flatMap((dir) =>
  findFiles(dir, '.astro')
);

for (const file of templateFiles) {
  const source = path.relative(ROOT, file).replace(/\\/g, '/');
  const raw = fs.readFileSync(file, 'utf-8');

  const seen = new Set();

  for (const match of raw.matchAll(HREF_ATTR_RE)) {
    const href = match[1].trim();
    if (seen.has(href)) continue;
    seen.add(href);
    checkHref(source, href);
  }

  for (const match of raw.matchAll(MARKDOWN_LINK_RE)) {
    const href = match[1].trim();
    if (seen.has(href)) continue;
    seen.add(href);
    checkHref(source, href);
  }
}

if (brokenCount === 0) {
  console.log(`All ${checkedCount} inline link(s) resolve to real routes or valid external URLs.\n`);
}

if (brokenCount > 0) {
  console.error(`FAILED: ${brokenCount} broken href(s) found. Fix before publishing.\n`);
  process.exit(1);
} else {
  console.log('PASSED.\n');
}
