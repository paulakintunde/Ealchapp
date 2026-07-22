# Build Findings — things the reconciliation did not anticipate

**HAND-WRITTEN. Not generated — do not regenerate over this file.**

`SSOT-DECISION-SHEET.md`, `TRACEABILITY-MAP.md` and `SSOT-CONFLICT-DATA.json` are produced by the
run pipeline and will be overwritten. This file is where findings that surface *while implementing*
an approved decision are recorded, so they survive the next run and are not lost in a commit message.

One entry per finding. A finding is not a decision: nothing here is approved, and nothing here is
blocking unless it says so.

---

## BF-01 — There is a third skill vocabulary, and CF-13 did not cover it

**Found:** 2026-07-16, while implementing the schema build (the Phase 1.B schema delta; its build prompt is retired — `reconciliation/EALCH-MASTER-BUILD.md` Phase 1 is the live spec).
**Relates to:** CF-13 (Item skill taxonomy: CO/CE/PO/PE vs read/write/speak/listen).
**Status:** Open. Not blocking. Needs a product/pedagogy decision before the corpus is authored.

### What CF-13 assumed

Two skill vocabularies existed and needed disambiguating:

| Vocabulary | Values | Lives in | Answers |
|---|---|---|---|
| `PRACTICE_SKILLS` (was `SKILLS`) | `read` `write` `speak` `listen` | `schema.ts:96` | what a lesson asks the learner to *do* |
| `EXAM_SKILLS` (new) | `CO` `CE` `PO` `PE` | `schema.ts:114` | the per-item exam taxonomy |

That rename is **done and verified**. `SKILLS`/`Skill` never left `schema.ts` (confirmed against
`e349faa`, the commit before the build): it had exactly two internal use sites and no importers, so
there was no consumer to miss. Zero live references remain.

### What it missed

A **third** vocabulary, in a different file, never in CF-13's scope:

| Vocabulary | Values | Lives in | Answers |
|---|---|---|---|
| `WeakSkill` | `liaison` `nasales` `subjonctif` `genre` `register` `passe-compose` | `ealch-v2/src/store/progress.logic.ts:436` | which *grammar* the learner just got wrong |

It is consumed by `app/home.tsx:136` (`weakDisplay`, which routes each weakness to a remediation) and
`home.tsx:438`. It is **persisted**: `useProgress` stores `errors: ErrorEvent[]` at persist
`version: 1`, so these strings are on real devices today. Changing a `WeakSkill` value is a data
migration — the same class of problem as the shipped drill-kind and practice-skill strings, and it
has no guard.

**`WeakSkill` is unaffected by the CF-13 rename.** Separate file, separate concept, no import of
`schema.ts`, untouched by the build. This is a design observation, not a regression.

### The actual problem: four places name grammar, and two already disagree

The schema extension added a fourth. Nothing joins any of them:

| Where | Names grammar as | Example |
|---|---|---|
| `progress.logic.ts:436` | `WeakSkill` union | `nasales`, `passe-compose` |
| `schema.ts:370` | `Item.tags` (free strings; the doc comment gives the intent) | `liaison`, **`nasal`**, `passe-compose` |
| `schema.ts:401` | `Item.grammarPoints` (free strings, **new**) | `passe-compose` |
| `schema.ts:480-482` | `Lesson.grammarAssumed` / `grammarIntroduced` (free strings, **new**) | `subjonctif-present` |

Note the collision already present, before any data exists: the `tags` comment says **`nasal`** where
`WeakSkill` says **`nasales`**. Two spellings of one concept, in two files, and nothing that would
ever report the mismatch.

There is also a near-collision worth not tripping over: `WeakSkill` has a `register` value meaning
*"you used the wrong register"*, while the new `REGISTERS` (`schema.ts:130`) is a property of an item
meaning *"this item's register is soutenu"*. Same word, different questions. They are not in conflict
and should not be merged — but they will be confused, so the distinction wants saying out loud
wherever both appear.

### Why it matters, concretely

The weak-spots feature is the join. `home.tsx` records *"you missed the passé composé"* and routes it
to a remediation; `Item.grammarPoints` is how an item declares *"I exercise the passé composé"*. The
moment the SRS routes a weakness to content — which is the whole point of both fields — those two
lists must agree on what the passé composé is called. Today nothing makes them, and the failure is
the quiet kind this codebase keeps finding: the weakness is recorded, no item matches the string, the
learner is routed nowhere, and no error is raised at any point.

`home.tsx:140-142` already shows the shape of the problem — `subjonctif`, `register` and
`passe-compose` all route to `/chat` because no lesson teaches them.

### Why now is the cheap moment

Nothing has data. Verified against the committed `seed.json`:

- **17 items, all 17 with empty `tags`** — zero distinct tag values in the entire shipped corpus
- **0 items** carry `skill`; **0** carry `modality`; **0** carry `grammarPoints`
- **0 practice sections** in any shipped lesson, so `practice.skill` carries nothing either

Every one of these vocabularies is currently aspirational. Deciding now costs a decision. Deciding
after the corpus is authored costs a re-tagging pass over thousands of rows plus a persist migration
for the error log.

### The decision needed

Does `WeakSkill` fold into a single grammar-point vocabulary shared with `Item.grammarPoints` /
`Lesson.grammarIntroduced`, or stay deliberately separate?

- **Fold** — one closed list of grammar points; `WeakSkill` becomes a subset of it (the ones we can
  remediate). Weakness→content routing then works by construction. Costs a persist migration for the
  error log, which is cheap today and not later.
- **Stay separate** — `WeakSkill` remains a small closed remediation taxonomy (its comment argues for
  this: *"a weakness we cannot route to a remediation is a weakness we cannot honestly show"*), and
  an explicit, tested mapping table joins it to `grammarPoints`. The mapping is the thing that must
  exist either way; this option makes it visible instead of implied.

**Recommendation: stay separate, with an explicit mapping.** The two lists genuinely answer different
questions and have different lifecycles — `grammarPoints` should grow freely as content is authored,
while `WeakSkill` must stay small because every value needs a remediation destination behind it.
Merging them would either bloat the weak-spots UI with unroutable entries or throttle content
tagging to the pace of building remediations. But the mapping must be real, tested, and a red test
when a `WeakSkill` has no matching grammar point — otherwise "separate" just means "unjoined", which
is what we have now.

Whichever is chosen, one thing is unconditional: **pick a single spelling** (`nasal` vs `nasales`,
`subjonctif` vs `subjonctif-present`) and make one list the source of it. Two spellings is the bug.

### Where this lands

Phase 1 (schema/SRS) or Phase 2 (content generation), before the corpus is authored — whichever
reaches grammar tagging first. It is not a schema-extension blocker: `grammarPoints` is typed
`string[]` and deliberately open, so nothing built so far constrains the choice.

---

## Corrections to the plan documents

Recorded here because the plan files are inputs to the next run and should not carry known-false
claims forward. Both were found by grep and git, not inference.

1. **`SCHEMA-EXTENSION-PLAN.md` §Risks** says the `SKILLS`→`PracticeSkill` rename *"does touch
   `lesson.tsx` render and `schema.test.ts`"*. It does not touch `lesson.tsx`. That file renders a
   practice section by mapping `itemIds` (`app/lesson.tsx:207`) and never reads `.skill`. Combined
   with zero practice sections in the seed, the rename's real blast radius was `schema.ts` and its
   test — nothing else.

2. **`Item.skill` was not retyped from `Skill` to `ExamSkill`.** The pre-build `Item` had no `skill`
   field at all (verified at `e349faa`). Commit 5 *added* `skill?: ExamSkill` as a new optional
   field. This matters: there is no legacy `skill` data anywhere needing migration, and CF-13's
   "reconstruct like a greenfield project" is literally accurate rather than approximately so.

---

## BF-02 — CF-15 vs unit-economics: the Phase 10 reconciliation, as built (2026-07-19)

The master plan required this contradiction settled "before locking this phase": CF-15 says
RevenueCat IAP-first, Stripe later, no Paystack; the unit-economics doc says web-checkout-first
(IAP take is ~30% vs ~2-6% web, ~34% more revenue per subscriber) and names PPP-Francophone-Africa
via Paystack as one of two defensible wedges.

### What Phase 10 built (the recommendation, implemented)

**RevenueCat IAP is the launch checkout, and the seam for everything else is real, not notional.**

- The ONLY producer of a paid entitlement is `entitlementFromCustomerInfo` (entitlement.logic.ts),
  and `Entitlement.source` is `iap | stripe | paystack`. A Stripe entitlement already flows through
  RevenueCat's Stripe integration unchanged (`store: 'STRIPE'` maps to `source: 'stripe'`).
- `sub_store` gained `'paystack'` (admin migration 0015) and the enum-parity test now documents the
  sub_store↔ENTITLEMENT_SOURCES mapping instead of asserting the old three-value truth.
- Paystack CANNOT ride RevenueCat, so its future path is: own checkout → own writer of the
  entitlement cache + `entitlements` mirror row. Nothing else in the gating layer changes — every
  gate reads features, not the checkout that granted them. That is the whole seam.

### The documented cost of IAP-first (so the decision is priced, not vibes)

At the pinned $79/yr annual: ~30% store take ≈ $23.70/yr/subscriber vs ~$3-5 via web checkout.
The unit-econ doc's "~$28/yr" figure is the same claim at its blended price points. This is the
recurring toll paid for launch velocity + store compliance. Revisit when (a) volume makes a web
funnel worth its support surface, or (b) the Apple/Google external-link rules (in flux through
2025-2026, US and EU diverging) settle enough to plan on. Re-verify those rules pre-launch (CC-B).

### OPEN DECISION for Paul — PPP/Africa wedge scope (the plan says "do not leave it ambiguous")

Phase 10 as built ships WITHOUT a Paystack PPP tier: the seam exists (source value, sub_store value,
pluggable entitlement writer), but no NGN pricing row, no Paystack checkout, no PPP product.
Two honest options; pick one and the docs get corrected to match:

1. **Africa wedge stays in the launch thesis** → a Paystack web-checkout PPP tier (local currency,
   ~$2-4/mo) becomes its own workstream (checkout page, webhook → entitlement writer, NGN row in
   pricing.ts, fraud/region checks). Real scope, weeks not days.
2. **Re-scope the wedge out of launch** → the unit-economics doc's Africa-PPP thesis moves to
   post-launch, and its revenue model is corrected so the economics stay honest.

Until Paul picks, the truthful state is "seam built, wedge unscheduled" — which is what the master
doc stamp says.

### Also pinned while in here

- **The $39 exam tier is a one-time product, not a plan** (Phase 11's "pin the SKU model" decision
  is half-answered by schema): `product_kind` enum + `product_purchases` table (migration 0015),
  `PLANS` stays `free|monthly|annual`, and the entitlement travels as the `examiner` feature.
  A test now enforces that 'exam' never becomes a sub_plan value. The remaining half — one-time
  vs $14.99/mo recurring as the COMMERCIAL model, and the re-sit/repurchase story — is still
  Paul's call before the SKU is created in the store consoles (product type is hard to change).
- **`payments.currency` default corrected EUR→USD** (USD is the canonical pricing row); the column
  stays free-text so NGN needs no migration.

### Incidental fix recorded

`drizzle/0014_rename_exam_taxonomy.sql` (authored by a parallel session, unapplied) failed against
the live DB: it dropped the `family` columns first, which cascade-drops their indexes, then ran
`DROP INDEX` on the already-gone indexes (42704). Fixed to `DROP INDEX IF EXISTS` (safe: the file
was never applied anywhere, so no migration-hash journal is violated) and applied 0014+0015
together; journal and live DB verified consistent (16 applied).

### RLS backfill

Seven live tables had RLS disabled (`product_purchases` from 0015, plus `audio_assets`,
`content_domains`, `content_exam_series`, `content_exam_tasks`, `content_tags`, `content_themes`
from earlier content migrations — the same class of exposure as the 2026-07-13 24-table P0).
All seven now have RLS enabled with no policies (service-role only), applied live
(`phase10_rls_backfill`). Drizzle does not manage RLS here; if a future migration recreates these
tables, re-check.

### BF-02 addendum — CF-15 vendor amended: Adapty adopted (2026-07-22)

Paul reviewed an Adapty-vs-RevenueCat comparison (current docs/pricing both sides) and chose
**Adapty** before any RevenueCat account existed. Deciding facts: free until $5K MTR/month then 1%
(RevenueCat: $2.5K then 1%); paywall A/B testing, builder and web paywalls included in the base
plan (RevenueCat gates Experiments behind Pro/Enterprise) — and this phase's own spec wants paywall
variants A/B tested; documented RevenueCat→Adapty and receipt-revalidation migration paths mean the
choice is reversible at the cost of analytics history, not subscriptions. Known costs accepted:
smaller vendor (~$2.5M seed, profitable) vs RevenueCat ($100M raised); iOS builds need
`useFrameworks: 'dynamic'` + iOS 15 target (Adapty v4 uses SPM) — a real EAS-config constraint
recorded for CC-B; webhook auth is header-only (no HMAC option), which matches what we had built
anyway. **Paystack still unsupported by both** — the PPP wedge decision above is unaffected and
still open.

Swap executed same day: pure mapping now reads Adapty access levels (`isActive` honored, expired
stale caches still denied locally, `store: 'adapty'` = their web/Stripe channel → `source:
'stripe'`); adapter public API unchanged so no screen changed; `adapty-webhook` fn v1 deployed
(merge-per-access-level, fails closed, verified 401 unauthenticated); `revenuecat-webhook` retired
in place (dormant — no secret, 401s everything; source removed from the repo). The enum-parity
mapping note now names adapty-webhook. Suite 431/431, tsc clean both repos, price/i18n gates clean.
