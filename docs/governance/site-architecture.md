# Uncrashable Holdings — Site Architecture v1.0
### Quiet Moves. Loud Legacy.

**Purpose of this document:** strategic skeleton, not copy. You write the words. This decides where every word lives, why it lives there, and how a machine finds it.

---

## 0. The Purpose of the Website (the constitution)

**The Uncrashable Holdings website exists to become the canonical public reference for Continuity Architecture. Every page should teach before it persuades, define before it sells, and strengthen the integrity of the overall knowledge system.**

This is the test every future addition gets measured against. Not "does this help conversion" first — "does this teach, does this define, does this hold together with everything else already built." A page that sells before it teaches has already failed the test regardless of how well it converts.

**Confirmed, not just intended:** once Home, Start Here, and the full Framework-to-Diagnostics-to-Continuity Architecture chain existed as real linked pages, the full click path was traced end to end. Home leads to Invisible Fragility, to AOIDR, to the diagnostics, to Continuity Architecture, a complete narrative arriving naturally at the paid engagement without a single page asking for the sale along the way. This isn't aspirational anymore. It's the actual, walkable shape of the site.

---

## 1. The Core Bet

Google indexed pages. AI engines synthesize entities. The difference matters more than most site builders realize in 2026: an AI system breaks your site into passages, converts them into vectors, and retrieves the pieces that answer a question cleanly on their own, without needing the paragraph above or below for context. A sentence that leans on "as mentioned earlier" is dead on arrival for citation. A sentence that stands alone, defines a term, and states a fact plainly is the sentence that gets pulled into someone's answer six months from now when they ask an AI "what is continuity planning" or "what is the AOIDR framework."

So the site isn't built as a narrative you walk through. It's built as a library of self-contained, quotable units, organized so both humans and crawlers can find the right one fast. That single principle should govern every page template below.

**Practical implication for you:** every page needs a 60 to 120 word direct-answer block near the top, before the poetry starts. Lead with the definition. Then get lyrical. AI systems weight the first third of a page heaviest when deciding what to extract, so bury the thesis and you bury your citation odds.

---

## 2. Conceptual Hierarchy (fixed from v1, corrected again from v2, sharpened once more for v1.0)

Methodology isn't a step in the chain. It's what the whole chain stands on. And the chain itself divides into four distinct layers by function, not just by sequence — this distinction matters because it clarifies what each page is *for*:

```
                        Methodology
                     (the philosophy —
                  informs every step below)
                            │
   KNOWLEDGE           ASSESSMENT          APPLICATION        SPECIALIZATION
 (teaches)             (measures,          (applies —          (adapts to
                        the products)       what you sell)      each world)
                            │
Invisible Fragility  →  Continuity Scan  →  Continuity        →  Verticals
     AOIDR                  IFI               Architecture
                        Stress Test
```

- **Knowledge** teaches. Invisible Fragility, AOIDR, Methodology. Nothing here is for sale, everything here is for understanding.
- **Assessment** measures. The Continuity Scan, the IFI, the Stress Test — these are products, free or paid, and they exist to produce a score, not just an idea.
- **Application** applies. Continuity Architecture, the actual engagement (Core / Advanced / Sovereign), is where knowledge and assessment convert into work you get paid for.
- **Specialization** adapts. The five verticals take everything above and translate it into a specific world.

People don't search for methodologies. They search for the ache. "Why does everything fall apart when the founder leaves." "What happens to my family if I die without a plan." "Why did my business partner's death wreck the whole company." Invisible Fragility owns that ache in language. AOIDR is what you hand them once they're already nodding. Methodology is the "why continuity beats optimization" belief sitting underneath all of it, which is why it gets its own page but never its own step in the funnel.

## 3. Sitemap (Information Architecture)

```
uncrashableholdings.com
│
├── / (Home)
├── /about (Origin story, U's background, the heresy)
├── /start-here (Unlinked orientation page — see §4a)
│
├── /framework/ (Namespace for everything conceptual — grows over time)
│   ├── /framework/invisible-fragility (THE top-of-funnel authority page — see §2)
│   ├── /framework/aoidr (The model — see §2)
│   │   ├── /framework/aoidr/authority
│   │   ├── /framework/aoidr/ownership
│   │   ├── /framework/aoidr/income
│   │   ├── /framework/aoidr/documentation
│   │   └── /framework/aoidr/resilience
│   └── /framework/methodology (The philosophy underneath all of it — see §2)
│
├── /diagnostics (Hub page — explains the 3-stage stack)
│   ├── /diagnostics/continuity-scan
│   ├── /diagnostics/ifi (Invisible Fragility Index)
│   └── /diagnostics/continuity-stress-test
│
├── /continuity-architecture (Application layer — the actual engagement, Core / Advanced / Sovereign)
│
├── /verticals (Hub page)
│   ├── /verticals/military
│   ├── /verticals/homeowner
│   ├── /verticals/business-owner
│   ├── /verticals/nonprofit
│   └── /verticals/athlete
│   (Sovereign Legacy: no URL. See §9.)
│
├── /research (Hub page, split by content type — see §6)
│   ├── /research/annual-reports
│   ├── /research/benchmarks
│   ├── /research/ifi-findings
│   ├── /research/case-studies
│   ├── /research/white-papers
│   └── /research/standards (see §6a — likely your highest-authority content long term)
│
├── /blog (Architecture in §7)
│   └── /blog/[category]/[slug]
│
├── /glossary (Encyclopedia, not a dictionary — see §5)
│
└── /contact
```

**Why `/framework/` gets its own namespace now, even with only two concepts in it today:** three years from now this holds more than AOIDR. Organizational Topology, Recoverability, Continuity Cost, Continuity Debt, Institutional Memory — all of these are framework concepts waiting for a canonical home. Organizing by *what something is* rather than mixing type and hierarchy into flat top-level URLs gives you room to grow without ever having to move a URL later, which is the one thing you can't afford to do after launch.

**A transition worth naming precisely, once Framework and Diagnostics are both complete:** the site has stopped growing outward and started growing deeper. That's true and important, but it's a claim about *architecture*, not about *terminology*. No new pillar systems, no new AOIDR-level models are needed, that layer is genuinely closed. Verticals, glossary depth, research, blog, and Continuity Architecture's own page are all applications of what already exists, not expansions of it. But the namespace above still has real room in it, Organizational Topology and the rest aren't decorative reservations, they're concepts waiting on evidence, per Editorial Standards §1. The precise version: the site has stopped inventing structure and started applying it, but it hasn't promised to never name a new concept again, only to never manufacture one just because a namespace happens to have space for it.

**Why `/glossary` exists even though nobody asked for one:** named-entity density is a real citation signal. Every term you've invented needs one canonical page that defines it in isolation. When an AI is asked "what is the Invisible Fragility Index," you want a page whose entire job is answering exactly that, cleanly, in the first three sentences. Don't make the AI dig through a sales page to extract a definition. Hand it one.

## The Canonical Source Principle

State this on the wall above wherever you build this thing: **every proprietary concept has exactly one canonical page that defines it. Every other mention on the site links to that page instead of redefining the term independently.**

AOIDR is defined once, at `/framework/aoidr`. Invisible Fragility is defined once, at `/framework/invisible-fragility`. Organizational Topology, Recoverability, Continuity Cost, Unavailability — one page each, everywhere else a link. This does two things at once. It keeps your own writing from drifting into slightly-different-each-time definitions (the fastest way to blur a vocabulary you've spent months sharpening). And it gives crawlers a single, unambiguous, high-authority node to cite instead of five competing half-definitions scattered across pages. When you eventually add JSON-LD, this is also what lets you connect schema via consistent `@id` references into an actual knowledge graph instead of a pile of disconnected markup.

**One expansion worth holding onto, elevated to its own standing principle:**

**The website is the canonical definition, not the canonical container.**

This is what makes everything else in your world possible without contradiction. Books can exist. Workshops can exist. Podcasts can exist. Standards can exist. Keynotes can exist. None of them compete with the website for authority, because none of them are trying to be the definition, they're trying to be the concept traveling. Ten years out, a concept like Continuity Cost will exist as a glossary entry, a UHS standard, a workshop, a podcast episode, a keynote, a white paper, an annual report. Those aren't competing versions of the idea fighting for authority, they're one concept expressed across media, all pointing back to the one page that defines it. That's how a real discipline spreads instead of just accumulating content. The canonical page is the anchor. Everything else is the idea traveling.

---

## 4. Page Templates

### Start Here (unlinked, orientation only, §4a)
Not in the main nav. Exists at `/start-here` for anyone who arrived through a podcast episode, a workshop handout, a referral, or an AI answer that dropped them in mid-vocabulary without context. Its only job is a guided sequence, five steps, no sales language:
1. Understand the problem → link to Invisible Fragility
2. Learn the framework → link to AOIDR
3. Take the diagnostic → link to Continuity Scan / IFI
4. Explore your vertical → link to `/verticals`
5. Decide whether Continuity Architecture is appropriate → link to `/framework/methodology` or a contact path

This page isn't for SEO. It's for orientation. Skip the direct-answer-block convention here; this is the one page allowed to just be a map.

### Home
Job: state the entity, state the heresy, route everyone in three clicks or fewer. Not the place for the full origin story. Structure:
1. Hero — the creed, one sentence
2. The heresy statement (this is your single most citable paragraph — make it stand alone)
3. Invisible Fragility framed as the problem (one paragraph, links to `/invisible-fragility`)
4. AOIDR framework, one line each pillar, linking out
5. Diagnostic funnel entry point (Continuity Scan CTA — this is your top-of-funnel, it should be the most prominent action on the page)
6. Vertical selector (five cards, no Sovereign Legacy slot)
7. Recent blog / insight teaser

### Invisible Fragility (the new front door)
This page now outranks AOIDR in priority because it's the page that intercepts someone before they know your vocabulary exists. Treat it as the answer to "why does everything I built feel unstable even though nothing looks wrong."
- Direct-answer definition block (60-120 words) at the top: what invisible fragility is, in plain language, no jargon
- Real-world symptoms (founder dependence, undocumented decisions, single-point-of-failure income, etc.) — concrete, not abstract
- The turn: "this is what AOIDR was built to diagnose and fix" → link to `/aoidr`
- One proprietary stat if you have one from IFI cohort data

### AOIDR Pillar Page (the model, not the crown jewel anymore, that's fine)
Still your second most important page. Treat it like a mini-Wikipedia entry, not a landing page:
- Direct-answer definition block (60-120 words) at the very top
- **A deferral paragraph, immediately after the direct-answer block, before anything else.** Something structurally like: *"[Pillar] is one of the five pillars of the AOIDR framework. While this page examines [Pillar] in depth, the AOIDR page explains how [Pillar] interacts with the other four as part of the complete continuity model."* This is mandatory on all five pillar pages, not optional polish. It does four jobs at once: creates the in-content editorial link back to AOIDR that gravity requires, states plainly that this page is one component rather than the whole framework, and, most importantly, structurally prevents the pillar page from independently asserting inter-pillar relationships that only AOIDR is canonical for. A pillar page defers topology. It never re-derives it.
- How it answers the fragility named on the previous page in the hierarchy
- How it differs from conventional planning (this is where the heresy earns its keep)
- The five sub-pillar links
- One proprietary data point or stat if you have one (a benchmark, a percentage, something from your own client work, original data is one of the strongest citation signals that exists right now)
- **Any closing section on how this pillar relates to the others must defer, not assert.** If a sentence starts describing what happens to a *different* pillar as a direct consequence of this one, in specific causal terms, that claim belongs on AOIDR, not here. Point to it instead of restating it.
- **AOIDR's compressed definition of each pillar names a specific set of elements, and every one of those elements must show up somewhere appropriate on the pillar's own page, introducing nothing AOIDR hasn't already named.** Authority's page echoed AOIDR's "distributed, documented, understood" inside its strength section. Ownership echoed "access, responsibility, control, succession" the same way. Income echoed its five named dependencies, one person, one customer, one contract, one career, one event, inside its *fragility* section instead, since that's where a list of dependency patterns naturally belongs. Don't force the echo into one fixed section. Let it land wherever AOIDR's own framing of that element actually fits.
- **A recognized, not mandatory, recurring shape:** each pillar's "Within the Framework" section has opened with a two-beat antithesis, examined independently, then something else entirely, "never experienced independently," "established collectively," "sustained systemically." Three real instances now. Keep reaching for the shape on the remaining pillars. Don't reuse the wording.

### Methodology
This is the connective-tissue page your v1 document was missing. It's where the philosophy lives instead of being scattered across five other pages:
- Why continuity beats optimization, stated as a direct claim, not a vibe
- The full progression: Invisible Fragility → AOIDR → Diagnostics → Continuity Architecture → Vertical Applications, each step linked to its canonical page
- What "structural" means as opposed to "aspirational" planning
- This is your best long-form home for the heresy statement in full, not just the one-liner used on Home

### Diagnostics Hub
"One Framework. Three Levels of Examination." lives here, canonically, as its own heading. The three diagnostic summaries must be equal in substance before they're ever equal in CSS, same structural depth, same rhythm, same closing weight, not just the same box width. This page teaches depth of examination, not product tiers, and a summary that's visibly shorter or thinner than its siblings quietly tells the reader it's the lesser option regardless of how identically the panels are styled. Each summary needs, in parallel across all three: an opening frame naming what kind of act it is (a conversation, a measurement, an investigation), structural specifics stated as plainly as the instrument allows, an audience or readiness line, and a genuine closing payoff, not a filler sentence. Close the page with a reciprocal link back to Methodology, since Methodology already links down here.

### Diagnostic Pages (Scan / IFI / CST)
Proven across three real pages, not a guess: each answers exactly five questions and nothing more. What is it? What does it do? Who is it for? What comes next? How does it connect to the rest of the methodology? Shorter than the Framework pages is correct here, not a compromise, since these are instruments being described, not concepts being taught for the first time. The IFI page in particular should state its methodology in plain, extractable language: 25 questions, 5 pillars, 0-4 scoring, 8-band reveal. AI engines love a clearly stated methodology because it's inherently quotable and verifiable.

### Vertical Pages (Military, Homeowner, Business Owner, Nonprofit, Athlete)
Same skeleton across all five for consistency (consistency signals a real taxonomy to a crawler, not five disconnected marketing pages). But the question each one answers is not "why should you hire us," it's **"what does invisible fragility uniquely look like in this world."** If all five end in the same CTA with the nouns swapped, they're interchangeable, and interchangeable pages don't get cited individually because there's no reason for a crawler to prefer one over another:
- Who this is for, one paragraph, direct language
- What invisible fragility specifically looks like here, named concretely:
  - **Homeowner** — equity, title, debt, survivor planning
  - **Nonprofit** — founder dependence, board governance, restricted funding
  - **Athlete** — earning window, identity transition, endorsement concentration
  - **Military** — PCS cycles, deployments, survivor benefits, transition risk
  - **Business Owner** — key-person dependence, succession, operating continuity
- How AOIDR applies to this specific fragility pattern
- Relevant proof point or story if you have one
- CTA into the Continuity Scan, last, not first

For Military specifically: lead with the approved language pattern (veteran-founded practice pursuing SDVOSB certification), and do not use insignia, seals, or "endorsed/military-approved" language anywhere on the page or in its image alt text.

**The Canonical Link Rule, confirmed across two verticals, applies to every one:** the first natural mention of a canonical page must be a real editorial link. Every mention after that stays plain text unless a second link genuinely improves navigation. Every vertical, by the nature of what it's for, ends up with a minimum of three canonical links, AOIDR, Invisible Fragility, and Continuity Scan, not because a rule demands exactly three, but because a vertical's own job, applying the framework to a specific world's fragility pattern and pointing toward the diagnostic entry point, structurally requires naming all three. Additional links beyond those three are fine when they're editorially earned, not added to hit a number. When drafting the CTA at the close, if the Continuity Scan has already been linked once in the body, the CTA itself can stay as a plain button rather than a second competing text link, they're different UI roles, not a duplicate mention.

### About
This is where the origin story, the CWC-to-Uncrashable arc, and your personal authority signals live (Series 65, IMO relationship, board seat, veteran status). Authority pages matter more than people think for GEO because entity trust is part of what gets you cited. Name real credentials, real dates, real institutions. Specificity is what an AI trusts; vagueness is what it skips.

---

## 5. Glossary Architecture (a knowledge graph, not a dictionary)

Your instinct was right that this is unglamorous, and you're underselling how much leverage it has. Most firms skip definitions because they feel "too basic" to publish. That's precisely why AI retrieval rewards them — a clean, isolated definition is the single easiest thing for a model to extract and quote with confidence. But a flat glossary caps out fast. The upgrade is relationships between terms, not just definitions of them:

Per-term template. Two metadata fields need a precise distinction or they'll collapse into the same date every time — **Introduced** is when the concept was first defined internally (in your Methodology OS, governance docs, or working notes), **First Published** is when the public page went live. They'll often differ, and that gap is itself a small proof point: it shows the term wasn't invented for the website, it existed before the website did.

- Term as H1, phrased as the question people actually ask ("What is the Invisible Fragility Index?")
- **Definition** — 2-3 sentence direct-answer
- **Purpose** — why the term exists, what problem naming it solves (distinct from the definition itself)
- **Introduced** — when the concept was first defined internally
- **First Published** — when this page went live
- **Last Updated** — freshness signal, update honestly, don't fake a date
- **Used In** — which framework pages, diagnostics, or verticals reference this term
- **Related Concepts** — the two or three other terms this one connects to
- **Common Misunderstandings** — what people wrongly assume this term means
- **Opposite Concept** — the conventional-planning equivalent it's defined against (this is where the heresy does quiet work, term by term)

That relational layer is what turns twenty definition pages into an actual semantic network instead of a glossary nobody visits twice. Picture this five years out: someone asks an AI "what is Continuity Cost," and the answer traces back to one page that's existed for years and been refined a dozen times, with a visible history instead of a static blurb. That page reads as authoritative because it demonstrably is. It's also exactly the structure that makes DefinedTerm schema with `@id` cross-references worth doing (see §9).

Terms to seed at launch: Invisible Fragility, AOIDR, Authority (pillar), Ownership (pillar), Income (pillar), Documentation (pillar), Resilience (pillar), Invisible Fragility Index, Continuity Scan, Continuity Stress Test, Continuity Architect, Continuity Architecture, Organizational Topology, Recoverability, Continuity Cost, Unavailability, Uncrashable (the actual dictionary definition you've already locked).

This is unglamorous work and it's the highest-leverage set of pages on the entire site for AI retrieval. Don't skip it because it's boring. Boring is the whole point — it's maximally extractable.

---

## 6. Research Layer (bigger than a reserved slot)

You're not doing academic research today, but you will have the raw material for it faster than you think, and it's worth splitting `/research` by content type now rather than dumping everything into one undifferentiated hub later:

- **Annual Reports** — yearly synthesis once there's enough client and cohort data to synthesize
- **Benchmarks** — comparative data points from Continuity Scan and IFI results across your growing prospect pool
- **IFI Findings** — aggregate findings from the diagnostic itself, anonymized
- **Case Studies** — client-facing proof, real engagements, real outcomes
- **White Papers** — longer argumentative pieces, the kind that get cited in other people's writing
- **Standards** — see §6a immediately below, this one deserves its own weight

Original data is the single hardest thing for a competitor to copy. Anyone can rewrite your framework language eventually. Nobody can retroactively produce your IFI cohort's real numbers. This is your long-term moat, more than AOIDR itself.

### 6a. Standards (likely your highest-authority content, full stop)

You're already doing this work and don't fully realize its public value yet. Your governance standards (GS-001 through GS-007) already exist inside the Methodology OS. Publishing a numbered public series, something like UHS-001 through UHS-00N, changes how the content reads to both humans and machines. A blog post reads as opinion. A numbered standard reads as a spec, and specs get cited the way research papers and RFCs get cited, not the way marketing content does. Examples in your own vocabulary:

- **UHS-001** — Continuity Assessment Terminology
- **UHS-004** — Organizational Recoverability Classification

These aren't sales assets. They're institutional assets, and they're the piece of this whole architecture most competitors structurally cannot copy, because copying a standard requires either citing yours or inventing an equally coherent system from scratch. Most firms will do neither.

## 7. Blog Architecture

Five categories, mapped straight to your existing structure so nothing new has to be invented:

- **Framework** — deep dives on AOIDR pillars, methodology posts, the "why continuity beats optimization" heresy expanded into essays
- **Vertical Insights** — one thread per vertical (military families, business owner succession, athlete post-career risk, etc.)
- **Field Notes** — case studies, anonymized client patterns, IFI cohort findings (this is where original data lives, and original data is GEO gold)
- **Industry Watch** — your take on financial industry moves, regulatory shifts, why the optimization-under-ideal-conditions model keeps failing people
- **Origin** — Quiet Architect-adjacent, brand story, longer-form personal essays

Cadence matters less than freshness signaling. AI engines weight recency; a "last updated" date on cornerstone pages (especially the AOIDR pillar pages and glossary) does real work. Revisit and republish quarterly rather than only publishing net-new.

---

## 8. Framework vs. Doctrine (a fork worth planning for, not building yet)

There's a real distinction hiding inside your existing content that will eventually want its own home. Framework answers "how does it work" — AOIDR, IFI, Continuity Scan, all mechanism. Doctrine answers "what do we believe" — statements like "optimization is downstream from continuity," "fragility hides," "architecture before products." You already have both. Keep them together under `/framework/` for now; splitting into a separate `/doctrine/` namespace with only two or three statements in it produces two thin sections instead of one strong one. Split when doctrine statements reach somewhere around six to eight and framework concepts reach eight to ten — enough mass on each side that the fork clarifies rather than fragments.

**Doctrine Candidates Ledger** (statements that have proven themselves in real use and are waiting on the fork, not the other way around):

1. *"Optimize for clarity, not for AI."* — surfaced while discussing the technical infrastructure layer; not website guidance so much as editorial policy, and a natural test every article ends up measured against.
2. *"Risk will always exist. Fragility doesn't have to."* — surfaced in the Invisible Fragility page, doing real closing work.
3. *"The difference is not tone. It's architecture."* — surfaced discussing resource centers versus reference libraries, but true well beyond the website; applies to the methodology, the products, the business model itself.
4. *"The purpose of a methodology is not to produce answers. It is to produce better questions."* — surfaced on the Methodology page itself, describing the whole practice's orientation rather than one pillar's scope.
5. *"Future growth no longer depends on imagination. It depends on observation."* — surfaced marking the transition from architecture to application, but it's really the operating test for every future framework term: did this come from real practice, or from a namespace with room left in it.
6. *"The diagnostics explain reality. Continuity Architecture intentionally changes it."* — surfaced describing what Continuity Architecture's page occupies in the knowledge system; not reader-facing copy, a governing insight about the methodology's own shape, observation completing into design.
7. *"Authority is established once. Understanding is built continuously. Action is invited deliberately."* — surfaced governing the visual system's color sequence, but it's the Authority pillar's own thesis reflected back at the page that displays it, proof the underlying thinking holds consistent across every layer, not just the ones that were built first.

Add to this list only when a line proves it belongs by surviving contact with real writing, the same standard applied to canonical status elsewhere in this system. A line that sounds good in conversation but never gets used twice doesn't make the ledger.

## 9. Sovereign Legacy Handling

Kill the slot. Not "hide it," not "coming soon" — remove it entirely, no URL, no nav item, no placeholder card. The only mention lives inside About, one sentence that signals direction without making a promise:

*"Future work will include Sovereign Legacy, an initiative focused on continuity architecture for tribal governments, enterprises, and legacy institutions."*

That's the whole footprint. Here's why it matters more than it looks: when someone lands on Uncrashable Holdings, the reaction you want is "these people know exactly who they are." Navigation pointing at unfinished rooms erodes that instantly, and a thin page with no substance behind it is worse for a crawler's read on your domain quality than not having the page at all. The first version of this site should feel complete, not comprehensive. Ship five verticals, make them exceptional, earn the sixth.

---

## 10. Launch Infrastructure, Three Layers (all of it is Phase 1, none of it is "later")

Waiting on any of this until "after launch" is pouring the foundation after the house is framed. All three layers ship together:

**Layer 1 — Human**
Information architecture, copy, design, UX. Everything covered in §4.

**Layer 2 — Search**
Titles, meta descriptions, internal linking, canonical tags, XML sitemap segmented by content type once the blog has volume.

**Layer 3 — AI**
- **Server-side rendering.** AI crawlers cannot browse like humans and can only read the HTML your server returns, so if this gets built in something that renders content client-side via JavaScript, the AI never sees it. Whatever platform builds this (Claude Design → Vercel is a solid path) needs to output real HTML, not a JS shell.
- **robots.txt check.** Confirm GPTBot, ClaudeBot, and PerplexityBot aren't blocked. If you're on Cloudflare, double check — Cloudflare recently changed its default configuration to block AI bots and plenty of sites got silently cut off from AI visibility without anyone noticing.
- **llms.txt** at the root, a curated AI-friendly index of your most important content.
- **JSON-LD schema**, layered: Organization, Person (for you specifically), Article on blog posts, FAQ on the diagnostic pages, DefinedTerm on every glossary entry, Breadcrumb sitewide.
- **Consistent entity IDs** across all schema so the Canonical Source Principle from §3 actually manifests in code, not just in your content strategy.
- **Stable URLs**, locked before launch. No slug changes after the fact — that's how you break the citations you're trying to earn.

---

## 11. Off-Site Signal (the part most people forget)

The site is necessary but not sufficient. AI systems learn about your brand from across the entire web, not just your own site, and this is one area where GEO strategies go beyond traditional on-page SEO. Practical translation for you specifically:

- Your podcast (What Still Works?) transcripts should live as real text on the site, not just audio. Transcripts are extractable; audio isn't.
- LinkedIn posts under your name build entity recognition. Reddit and LinkedIn are currently the two most cited domains across ChatGPT, Perplexity, and Google AI Mode, so activity there compounds faster than most people assume.
- Any nonprofit board bio (YMM), any published article, any guest appearance, all of it is training signal for how confidently an AI attaches your name to "continuity planning."

---

## 12. Build Sequence (revised again)

1. Invisible Fragility page + AOIDR pillar page + five sub-pillars + glossary, all under `/framework/` — this is the authority core and the correct entry order, build it first, build it right
2. Methodology page — write this early even though it's low-traffic; it's the substrate that keeps every other page consistent
3. Home + About + `/start-here` (the last one unlinked, low effort, high orientation value)
4. Diagnostics hub + three diagnostic pages
5. Five vertical pages, each answering "what does fragility look like here," none of them a sales page
6. All three infrastructure layers from §10, built alongside step 1, not after it
7. Blog, seeded with 3-5 cornerstone posts before public launch, not zero
8. `/research`, structured by content type from day one even if most subfolders start empty, `/research/standards` built out first among them once you're ready to publish UHS-001

One closing principle worth holding onto: optimize for clarity, not for AI. A sentence that's genuinely clear to a nonprofit executive, a homeowner, or a nineteen-year-old athlete is usually also the sentence an AI can extract and quote cleanly. AI discoverability is mostly a consequence of disciplined writing, not a separate style you perform. The one place that's not fully true is the infrastructure in §10 — schema, llms.txt, stable URLs, entity IDs. That layer doesn't fall out of clear prose. It has to be built deliberately, in parallel with the writing, or the clearest paragraph on the internet still won't get found.

You write the copy. This is the shelf it goes on.
