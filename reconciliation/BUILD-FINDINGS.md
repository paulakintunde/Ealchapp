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
