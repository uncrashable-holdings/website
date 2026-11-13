# Website Build Checklist
### One page. Every canonical page gets the same checklist. No exceptions, no shortcuts.

**Status: this is not a fifth constitutional document.** Publishing Governance already named four documents and was explicit that a fifth should be rare. This isn't one. This is a runbook, operational, not doctrinal, sitting underneath Writing Scaffolds the way a checklist sits underneath a recipe. It doesn't decide what's true, where something lives, whether it deserves to exist, or how it's written well. Those questions are already closed by the time a page reaches this document. This only governs the mechanical act of moving a finished, frozen page into the CMS without breaking anything already decided.

**Trigger condition: this checklist does not run until "Website Canonical v1.0" is tagged.** Every row in the Page Registry marked Canonical has a finished draft. Every internal link has been checked. Every glossary entry exists. Every Direct-Answer block has been validated. Only then does the transfer begin. Before that point, this document does nothing, and the CMS stays untouched.

---

## The Checklist

For every page, in order, no skipping ahead:

- [ ] Canonical copy pasted, verbatim, from the frozen v1.0 source, no live editing during transfer
- [ ] URL slug confirmed against the Page Registry's URL (Canonical) column — **machine-checkable:** script this diff, don't eyeball it
- [ ] Meta title set
- [ ] Meta description set
- [ ] Direct-Answer block present and correctly positioned at the top of the page
- [ ] Schema applied (Organization, Article, DefinedTerm, FAQ, or Breadcrumb, whichever this page's type requires per Site Architecture §9)
- [ ] Editorial links verified — **machine-checkable, and the one that matters most:** crawl the published page, extract the real in-content links, diff them against the Page Registry's Referenced By and References columns, flag any mismatch. Do not rely on a human re-reading the page and trusting their own memory. That exact failure mode has already broken this system twice.
- [ ] CTA verified, resolves to a real, live URL, not a placeholder
- [ ] Images added, alt text written, no insignia or restricted imagery per the Military vertical's language rules where applicable
- [ ] Page Registry updated: Status, Last Updated, Last Reviewed, Next Review
- [ ] Published

---

## Two rules governing how this list itself is used

**Do the same eleven steps for the thirtieth page as the third.** The moment a step gets skipped once "because this page is simple," this stops being a checklist and becomes a suggestion, and suggestions are exactly what let a corrupted field slip through unnoticed for weeks.

**Anything marked machine-checkable should eventually be scripted, not perpetually hand-verified.** A checkbox a tired person ticks at page forty-seven is weaker evidence than a script that fails loudly. The checklist is the right tool on day one. It should shrink over time as more of it gets automated, not stay the same size forever out of habit.
