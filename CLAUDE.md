# Uncrashable Holdings — Writing Rules

This project is the public knowledge system for Uncrashable Holdings' Continuity Architecture methodology. Content lives as content-collection markdown in `src/content/framework/`, validated against `src/content/config.ts`. These are the rules that actually constrain how a page gets written, drawn from the governance docs, all six of which now live in `docs/governance/`: [Publishing Governance](docs/governance/publishing-governance.md) (names the four constitutional documents and the rules for amending them), [Editorial Standards](docs/governance/editorial-standards.md) (what becomes knowledge, prose voice), [Site Architecture v1.0](docs/governance/site-architecture.md) (where knowledge lives, page templates), the [Writing Scaffold](docs/governance/writing-scaffold.md) (how a specific page gets made well), the [Website Build Checklist](docs/governance/website-build-checklist.md) (the mechanical transfer runbook, not a fifth constitutional document), and [Visual Doctrine](docs/governance/visual-doctrine.md) (color and link-class rules specifically).

## Voice

- **No em dashes.** Ever, in any page or section.
- **No time durations attached to deliverables.** Don't promise or imply "in six weeks," "within a month," etc.
- Optimize for clarity, not for AI. Clear writing is what gets cited; performing "AI-friendliness" is not a separate style.

## The direct-answer block (every page)

Every page needs a **60-120 word direct-answer block** at the very top, before any other content. It must stand alone with zero outside context: no "as discussed above," no assuming the reader already knows the framework. Test: if an AI system retrieved only this paragraph as the answer to "what is X," would it be a complete, correct, self-sufficient answer? Lead with the definition, then get lyrical after.

**Carve-out for hub/index pages, diagnostic instrument pages, and biographical/identity pages:** the 60-120 word count applies to concept-defining Framework pages (Invisible Fragility, AOIDR, the five pillars, Methodology). Three kinds of pages are exempt from the word count as long as they still pass the standalone-completeness test:

- Hub or index pages whose job is primarily to route to other pages, like the Diagnostics hub and Home. Home's job per Site Architecture's own template is to route visitors in three clicks or fewer, which is exactly the hub/index rationale, even though it isn't a content-collection page. This is a narrower rationale than About's: a page qualifies here because it routes, not merely because it contains one strong quotable line. Home's heresy statement is doctrine, not a direct-answer block, and does not by itself justify treating Home as a concept-defining page.
- The individual diagnostic instrument pages (Continuity Scan, Invisible Fragility Index, Continuity Stress Test). Per Site Architecture's Diagnostic Pages template, these are deliberately shorter than Framework pages by design: what is it, what does it do, who is it for, what comes next, how does it connect, not teaching a concept from zero.
- Biographical or identity pages, such as About. These state who a person is and what they've done rather than defining a concept, so they are judged on whether the direct-answer block is a complete, correct, standalone statement of identity, not on hitting a word count written for concept definitions.

A page in any of these categories can be shorter than 60 words if it's still a complete, correct, self-sufficient answer on its own; it does not need padding just to hit a number that was never written with these page types in mind. Continuity Scan's 43-word direct-answer block is correct as written, and so is About's 41-word one.

**Start Here is a fourth, stronger case: full exemption, not a word-count carve-out.** Per Site Architecture §4a, Start Here skips the direct-answer-block convention entirely, "this is the one page allowed to just be a map." It does not need a standalone opening statement of any length and is not held to the completeness test the three carve-outs above still are. Start Here is also deliberately unlinked from navigation, matching that page's specific job of catching someone who already arrived from outside context, not attracting new readers on its own.

## Deferral paragraph (framework pillar pages only)

Every AOIDR pillar page (Authority, Ownership, Income, Documentation, Resilience) needs a **deferral paragraph immediately after the direct-answer block**, before anything else, linking to `/framework/aoidr`. It must defer inter-pillar topology, never assert it. Structural pattern:

> "[Pillar] is one of the five pillars of the AOIDR framework. While this page examines [Pillar] in depth, the AOIDR page explains how [Pillar] interacts with the other four as part of the complete continuity model."

This is mandatory, not optional polish. It does three things: creates the required in-content editorial link back to AOIDR, states plainly that the page is one component rather than the whole framework, and structurally blocks the page from independently asserting inter-pillar relationships that only AOIDR is canonical for. A pillar page defers topology. It never re-derives it. This also applies to any closing section on a pillar page: if a sentence starts describing what happens to a *different* pillar as a direct consequence of this one, that claim belongs on AOIDR, not here — point to it instead of restating it.

## Synthesis across canonical pages

Any section that synthesizes multiple canonical pages must **compress each source's own insight**, not quote that source's opening sentence. Restating a page's first line is not synthesis, it's copy-paste with extra steps. Pull out what the source page actually contributes to the point being made and state it in new words.

## Reference integrity

After touching anything in a page's `references` frontmatter field, run:

```
npm run verify-links
```

This checks every declared reference resolves to a real page and prints the Editorial Gravity report. It must pass before the change ships.

**When verify-links or any other check is expected to fail because a dependency doesn't exist yet, report the failure honestly. Don't edit content to make a check pass if the underlying gap is real.** A broken reference to a page that hasn't been built yet (`/diagnostics`, a not-yet-written pillar, etc.) is not a bug to route around by deleting the reference, stubbing a placeholder page, or rewording the sentence that triggered it. It is the check correctly doing its job. Restore the honest content, run the check, and report the real result, pass or fail.

## Supporting context (from the governance docs, not new rules)

- **Canonical Source Principle:** every proprietary concept has exactly one canonical page that defines it. Every other mention links to that page instead of redefining the term.
- **Canonical is earned, not declared:** a concept becomes canonical once it has one defining page that has survived contact with real use (linked to, referenced elsewhere, no contradicting redefinition). Status values in `config.ts` are `Draft → Published → Canonical → Revise → Retire`.
- **Editorial Gravity:** only in-content editorial links count toward it, not nav or footer links. A page that never naturally reaches toward other canonical pages is a candidate for Revise or Retire, not just better internal linking.

## exclusiveResponsibility field

The `exclusiveResponsibility` frontmatter field is one sentence stating the page's one job that no other page is allowed to do. It is not a summary or a tagline, it is a boundary claim.

If two live pages end up answering essentially the same question, that is not a coincidence to shrug off, it is a sign the architecture has been violated somewhere. Treat it as a bug: either one page's scope has drifted into the other's territory, or the two `exclusiveResponsibility` claims were never actually distinct and one of the pages should not exist as written. Fix the architecture, don't just leave both pages standing.

## canonicalSince field

`canonicalSince` is set once, on the day a page first becomes Canonical, and never updated again, even if the page later cycles through Revise. It records when the concept earned canonical status, not the last time the page changed. Use `lastUpdated` / `lastReviewed` for freshness, not `canonicalSince`.

## evidenceLevel field

`evidenceLevel` governs how confidently a sentence gets written. It must never be rendered as a visible badge or label on the page itself, it is an internal editorial discipline, not reader-facing UI.

Voice by level: A = peer-reviewed/external, cite plainly. B = aggregated Uncrashable Holdings data, written as "across our cohort" with sample size stated. C = individual case study, written as one anonymized instance, not generalized. D = practitioner observation, written as "we've observed" or "early pattern suggests," never dressed up as more certain than it is.

Leave `evidenceLevel` unset on pages that state plain fact rather than a hedged methodology claim. The taxonomy exists to calibrate confidence in a claim about continuity or fragility, biographical fact ("this person founded this practice") isn't a claim on that spectrum at all, so forcing it into A through D would misapply the field rather than honestly use it. About is the first page this applies to.

## gravityRating field

`gravityRating` is a human editorial judgment about how load-bearing this page's connections are, not a calculation. There is no formula that derives it from inbound/outbound counts. If you are not prepared to make that judgment call, leave it unset rather than guessing.
