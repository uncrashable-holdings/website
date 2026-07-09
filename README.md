# Uncrashable Holdings — Website

This is the live source for Uncrashable Holdings' public site, the canonical reference for the Continuity Architecture methodology. It is not a proof of concept anymore. It builds, it renders 16 real pages across four content collections, and its two verification scripts both pass clean against the actual content graph and the actual generated routes.

## What's actually in here

- `src/content/config.ts` — the schema. This IS the Page Registry, as validated types instead of spreadsheet cells. A malformed Status or Evidence Level fails the build instead of silently existing.
- Four content collections, 14 pages total:
  - `src/content/framework/` (8) — Invisible Fragility, AOIDR, the five pillars (Authority, Ownership, Income, Documentation, Resilience), and Methodology.
  - `src/content/diagnostics/` (4) — the Diagnostics hub, Continuity Scan, Invisible Fragility Index, Continuity Stress Test.
  - `src/content/continuity-architecture/` (1) — the engagement the framework and diagnostics lead into.
  - `src/content/about/` (1) — the practitioner's identity and credentials.
- Two standalone pages outside the collection model, `src/pages/index.astro` (Home) and `src/pages/start-here.astro` (Start Here, deliberately unlinked from navigation), bringing the real total to 16 pages.
- `src/layouts/FrameworkLayout.astro` — the shared shell for every collection-backed page. Matte black, gold status badge, the direct-answer content rendered from markdown.
- `src/components/OrganizationSchema.astro`, `PersonSchema.astro`, `BreadcrumbSchema.astro` — schema.org JSON-LD included on every page: Organization and Person always, BreadcrumbList reflecting each page's real position in the routing (not its conceptual namespace), DefinedTerm on the eight framework pages, FAQPage on Continuity Scan and IFI where the content genuinely answers direct questions. All of it validated, not just written.
- `public/llms.txt` — generated, not hand-authored, by `scripts/generate-llms-txt.mjs`. It reads every collection, includes only Published/Canonical pages, and runs automatically as part of `npm run build`, so it cannot drift the way a hand-maintained index would.
- `public/robots.txt` — confirms GPTBot, ClaudeBot, and PerplexityBot are not blocked, and points to the sitemap.
- `@astrojs/sitemap` — wired into `astro.config.mjs`, generates `sitemap-index.xml` on every build.
- `scripts/verify-links.mjs` — reads every page's declared `references` across all four collections, checks each one resolves to a real file, fails loudly (exit code 1) if not, and prints a live Editorial Gravity report computed from the actual content graph.
- `scripts/verify-routes.mjs` — a different check: does an inline link's href, wherever it lives (content markdown, hand-written pages, layouts, components), resolve to a URL the built site actually generates. Catches the class of error `verify-links` structurally cannot see, a reference can be valid while the link pointing at it is still wrong.

Both scripts pass clean against the current site.

## How to run it

```
npm install
npm run verify-links    # checks references, prints the live gravity report
npm run verify-routes   # checks every href against the real built routes
npm run dev             # local dev server
npm run build            # generates llms.txt, then static build to dist/
```

## How to extend it, one new page

1. Write a new `.md` file in an existing collection, or a new collection following the same pattern in `config.ts`.
2. Fill in the frontmatter honestly. If Status is `Canonical` before the content earns it, that's now a lie the schema will happily validate, the schema checks *type*, not *truth*. The Editorial Standards discipline still has to come from you.
3. Add real markdown links to other pages in the body. Reference them in the `references` frontmatter array too, using the file's slug.
4. Run `npm run verify-links` and `npm run verify-routes`. If either fails, either the reference is wrong, the link is wrong, or the page you're linking to doesn't exist yet. Fix the actual problem, don't silence the check.

## What this deliberately does not do yet

No verticals, no glossary, no research section, no blog. No CSS beyond inline placeholder styling, presentation is intentionally the last layer, not the first. These are real gaps, not oversights, they get built when there's real content to put in them, not before.

## The one rule this whole site exists to enforce

If a page claims a relationship to another page, in either direction, the build should be able to prove it or refuse to ship. That's not a nice-to-have. That's the fix for a bug that broke this project's spreadsheet twice in one afternoon.
