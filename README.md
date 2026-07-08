# Uncrashable Holdings — Astro Starter

This is a working, tested proof of concept, not a mockup. It builds, it renders real pages, and its verification script catches a real broken reference, demonstrated live during the build of this starter (see the commit history of this conversation if you want the receipts).

## What's actually in here

- `src/content/config.ts` — the schema. This IS your Page Registry now, as validated types instead of spreadsheet cells. A malformed Status or Evidence Level fails the build instead of silently existing.
- `src/content/framework/*.md` — two real pages, Invisible Fragility and AOIDR, using the actual approved copy from this session, cross-referencing each other for real.
- `src/layouts/FrameworkLayout.astro` — the shared shell. Matte black, gold status badge, the direct-answer content rendered from markdown.
- `src/pages/framework/[slug].astro` — one dynamic route that renders every framework page from its content collection entry. You do not write a new template per page. You write a new markdown file.
- `scripts/verify-links.mjs` — run this before every publish. It reads every page's declared `references`, checks each one resolves to a real file, fails loudly (exit code 1) if not, and prints a live Editorial Gravity report computed from the actual content graph. This replaces the spreadsheet's most failure-prone job with something that cannot silently drift, because there's nothing left to hand-type.

## How to run it

```
npm install
npm run verify-links   # checks references, prints the live gravity report
npm run dev             # local dev server
npm run build            # static build to dist/
```

## How to extend it, one new page

1. Write a new `.md` file in `src/content/framework/`, or a new collection (`diagnostics`, `verticals`, `glossary`) following the same pattern in `config.ts`.
2. Fill in the frontmatter honestly. If Status is `Canonical` before the content earns it, that's now a lie the schema will happily validate, the schema checks *type*, not *truth*. The Editorial Standards discipline still has to come from you.
3. Add real markdown links to other pages in the body. Reference them in the `references` frontmatter array too, using the file's slug.
4. Run `npm run verify-links`. If it fails, either the reference is wrong or the page you're linking to doesn't exist yet. Fix the actual problem, don't silence the check.

## What this deliberately does not do yet

No schema.org JSON-LD, no llms.txt, no CSS beyond inline placeholder styling, no diagnostics or glossary collections. This is the skeleton proving the joints move correctly. Layer 3 infrastructure from Site Architecture §10 comes next, once the full Website Canonical v1.0 set exists and this skeleton has been tested against harder cases than two friendly, cooperative pages, a glossary entry's extra metadata fields, a vertical page, a pillar page with its deferral paragraph component factored out separately.

## The one rule this whole starter exists to enforce

If a page claims a relationship to another page, in either direction, the build should be able to prove it or refuse to ship. That's not a nice-to-have. That's the fix for a bug that broke this project's spreadsheet twice in one afternoon.
