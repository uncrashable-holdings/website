# Uncrashable Holdings — Editorial Standards
### Governance for the knowledge system, not a style guide

This document answers the questions the Site Architecture doesn't: not *where* something lives, but *whether it should exist at all*. The architecture is the shelf. This is who decides what earns a place on it.

Relationship to existing work: this sits above your GS-001 through GS-007 governance standards in the Methodology OS, not in competition with them. Those govern the internal system. This governs what becomes public.

---

## 1. When do we create a new framework term?

A new term earns a place in `/framework/` only if it passes all three:

- **It names something existing vocabulary can't.** If "risk" or "vulnerability" already says it, you don't need a new word, you need better use of an old one. Invisible Fragility earned its name because "risk" doesn't capture the specific quality of a failure mode nobody can see until it's too late.
- **It will be used more than once.** A term coined for a single blog post is a phrase, not a framework term. If you can't picture citing it across at least two other pages within six months, it's not ready.
- **It survives being defined in one paragraph.** If a term needs three paragraphs of throat-clearing before it means anything, the concept isn't finished forming yet. Let it live as a working note internally until it can be said plainly.

If it passes all three, it gets a `/framework/` page or a glossary entry (see §3 for which).

---

## 2. What qualifies as a UHS standard?

This is your highest bar, and it should be. A UHS number is not a publishing schedule, it's a claim of institutional permanence. Before something becomes UHS-00N:

- It must already exist as a working internal standard (a GS-numbered document or equivalent) that's been used in real client engagements, not written fresh for publication.
- It must be a **classification, method, or terminology standard** — something that answers "how do we consistently categorize or measure X," not "what do we believe about X" (that's doctrine, see the Framework vs. Doctrine note in the architecture) and not "here's an interesting idea" (that's a blog post or white paper).
- It must be stable enough that you'd be uncomfortable renumbering it later. Standards get amended, not replaced — UHS-001 gets a revision history, not a UHS-001b.

Rule of thumb: if you're not confident this will still be true in five years, it's not a standard yet, it's a draft.

---

## 3. What deserves a glossary entry?

Lower bar than a `/framework/` page, higher bar than "I used this word once." A term gets a glossary entry if:

- It's used in more than one place across the site (framework pages, verticals, diagnostics), and
- Someone encountering it cold would plausibly ask "what does that mean"

If a term is central enough to carry its own argument, symptoms, and turn (the way Invisible Fragility does), it graduates from a glossary entry to a full `/framework/` page. The glossary entry then becomes the short-form pointer to the long-form page, not a competing definition. One concept, one canonical depth-appropriate home.

---

## 4. What evidence is required before publishing a benchmark?

Nothing goes into `/research/benchmarks` on a hunch. Minimum bar:

- **Sample size stated plainly.** "Based on 14 IFI cohort responses" is honest and still useful. A benchmark with no stated sample size is a guess wearing a lab coat, and a sophisticated reader (or a skeptical AI system evaluating source trustworthiness) will discount it accordingly.
- **Methodology visible or linked.** If the number came from the IFI, link to how the IFI scores. Unsourced numbers don't get published, full stop.
- **Framed as directional, not definitive, until the sample is large enough to say otherwise.** "Early data suggests" is not weakness, it's honesty, and honesty is a citation signal AI systems and humans both reward over false confidence.

A wrong benchmark published once does more damage to the "canonical reference" positioning than ten benchmarks never published at all.

---

## 5. What makes a concept "canonical"?

A concept is canonical once it has exactly one page that defines it (the Canonical Source Principle from the architecture) **and** that page has survived contact with real use — it's been linked to, referenced in a vertical or diagnostic, and hasn't needed a contradicting redefinition elsewhere. Canonical isn't a status you declare on publish day. It's a status a concept earns by holding up.

Practical test: if you find yourself writing a slightly different definition of the same term on a second page, that's not two canonical sources, that's a sign the first definition wasn't finished. Fix the original. Don't let the second one stand.

---

## 6. When is a page updated versus replaced?

- **Update** when the core definition still holds and you're adding precision, a new example, a refreshed stat, or a "Last Updated" refresh with genuinely new material. This is the normal, healthy state — most pages should be updated periodically, especially glossary entries and framework pages, because AI systems weight recency and a page that's visibly alive reads as more trustworthy than one frozen in amber.
- **Replace** only when the underlying concept itself has changed, the way Pillar 5 was renamed from Continuity to Resilience. That's rare, deliberate, and should leave a visible trace (an "updated from" note on the page, not a silent edit) because silently rewriting a definition that's already been cited elsewhere breaks the very citations you built the site to earn.

If you're unsure which one you're doing, it's almost always an update. Replacement is for when the meaning changed, not when the wording improved.

---

## 7. Evidence Taxonomy (internal discipline, not a visible badge)

Every claim on the site carries an evidence level, even if the reader never sees the letter. The taxonomy governs *how confidently a sentence gets written*, not a citation stamped on the page:

- **Level A** — Peer-reviewed or externally validated research. Rare on this site by nature of the work, but if you cite it, cite it plainly and link the source.
- **Level B** — Aggregated Uncrashable Holdings data. IFI cohort findings, Continuity Scan trends. Written with confidence, framed as "across our cohort" or "our data shows," always with sample size stated per §4.
- **Level C** — Individual case studies. Written as what happened in one real, anonymized engagement, not generalized. "One nonprofit we worked with" not "nonprofits typically."
- **Level D** — Practitioner observation or hypothesis. Most of the framework starts here and that's not a weakness, it's how methodologies get built. Written as "we've observed" or "early pattern suggests," never dressed up as more certain than it is.

The point isn't to grade content publicly. It's to make sure a Level D hunch never gets written in Level B's voice. Overstating confidence is the fastest way to lose the "canonical reference" positioning the whole site is built to earn — one debunked claim written too confidently does more damage than ten honestly-hedged ones.

## 8. When do we retire a concept?

A live knowledge system has to be willing to take things down, or it's not a discipline, it's an archive. A concept gets retired when:

- **It's superseded by a broader, clearer one.** The way Pillar 5 moved from "Continuity" to "Resilience" to resolve a naming collision. Supersession is the healthiest reason to retire something.
- **It created unnecessary overlap** with a term that already existed and does the job better.
- **It proved unhelpful in practice.** Client work is the real test of a framework term. If nobody ever needed it in an actual engagement after a reasonable window, it wasn't load-bearing.

Retirement is not deletion:

- The original page stays reachable, marked clearly as retired, with a one-line note on why and a link to what replaced it.
- The URL **301 redirects** to the superseding concept's canonical page. A dead link is a small, avoidable tax on domain trust, and a 301 is how you honor anyone who bookmarked or cited the old term without breaking their path.
- The glossary entry's "Last Updated" field reflects the retirement date, and "Related Concepts" on the superseding page notes what it replaced. History stays visible; it just stops being the front door.

## 9. Blog and Field Notes: the Knowledge Graph Participation Rule

**No article is published unless it participates in the knowledge graph.** The rest of the site is architectural. The blog, left ungoverned, is chronological. Those are incompatible models, and chronological always wins by default unless a rule stops it. This is that rule.

Every article must satisfy both:

- **At least one editorial link to a canonical page, at time of publication.** Non-negotiable, immediate, no exceptions. An article with nothing to teach it belongs somewhere in the graph isn't ready to publish.
- **At least one canonical page linking back to it, where contextually appropriate.** This may happen after publication. It must happen intentionally, not accidentally, and not never.

The second requirement needs a mechanism or it quietly becomes optional. Maintain a simple standing list of published articles still waiting on their backlink. Review it on a regular cadence, not once and forgotten. If an article sits on that list well past a reasonable window with no canonical page ever finding a reason to link back to it, that's not an oversight to keep deferring. That's the Retirement question from §8 arriving early: the piece likely never earned real gravity in the graph, and either the canonical page it should support needs to be written, or the article shouldn't have been published as framed.

---

## 10. Editorial Gravity

**Editorial Gravity: the degree to which a concept naturally requires references to other canonical concepts within the body of its explanation.**

This is the real version of the relationship metric, the one that survives scrutiny. Navigation proves discoverability. Editorial Gravity proves a concept actually depends on others to be fully explained, which is a different and much rarer thing. It's also diagnostic, not just descriptive: a concept that chronically shows low editorial gravity, one nobody's writing ever naturally reaches toward, is quietly failing the §1 test for framework status even if it already has a page. Low gravity over time isn't a formatting problem. It's a sign the concept may not have been ready, or may not be load-bearing enough to justify the canonical status it was given. Treat a persistently gravity-less page as a candidate for Revise or Retire (§6, §8), not as a page that just needs better internal linking someday.

Every concept on this site moves through the same five stages, and knowing which stage something is in tells you which rules from this document apply:

**Draft → Publish → Canonical → Revise → Retire**

A term in Draft hasn't earned a public page yet (§1). Publish is the act of giving it one. Canonical is earned, not declared, once it survives contact with real use (§5). Revise is the normal, healthy state most pages live in most of the time (§6). Retire is the honest ending, not a failure, when something's done its job and something clearer has taken its place (§8). A system that can move a concept through all five stages, including the last one, is the difference between a website and an institution.

---

## A note on voice, since it governs every answer above

No em dashes. No time durations attached to deliverables. Direct-answer block first, poetry after. Optimize for clarity, not for AI — this document exists so that rule has teeth instead of being a nice sentiment nobody enforces at 11pm before a deadline.

When these standards conflict with publishing faster, the standards win.
