import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// This schema IS the Page Registry now. Every field that used to live in a
// spreadsheet cell, hand-typed and hand-trusted, lives here as a validated
// type instead. If a frontmatter value doesn't match, the build fails.
// That's the whole point: a corrupted field can no longer ship silently.

const pageSchema = z.object({
  title: z.string(),
  exclusiveResponsibility: z.string(),
  status: z.enum(['Draft', 'Published', 'Canonical', 'Revise', 'Retire']),
  canonicalSince: z.string().date().optional(),
  evidenceLevel: z.enum(['A', 'B', 'C', 'D']).optional(),
  gravityRating: z.enum(['Emerging', 'Stable', 'Dense', 'Foundational']).optional(),
  // References are declared here, in the file that makes the claim.
  // The verify-links script below checks this against reality instead
  // of trusting it.
  references: z.array(z.string()).default([]),
  lastUpdated: z.string().date().optional(),
  lastReviewed: z.string().date().optional(),
  // Only set on pages that genuinely answer direct questions in their own
  // body content. Presence of this field is what drives FAQPage schema,
  // not a slug check in a route file, so a page has to actually declare
  // its own questions rather than inherit them from a sibling.
  faq: z.array(z.object({ question: z.string(), answer: z.string() })).optional(),
});

const framework = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/framework' }),
  schema: pageSchema,
});

const diagnostics = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/diagnostics' }),
  schema: pageSchema,
});

const continuityArchitecture = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/continuity-architecture' }),
  schema: pageSchema,
});

const about = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/about' }),
  schema: pageSchema,
});

const verticals = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/verticals' }),
  schema: pageSchema,
});

export const collections = {
  framework,
  diagnostics,
  'continuity-architecture': continuityArchitecture,
  about,
  verticals,
};
