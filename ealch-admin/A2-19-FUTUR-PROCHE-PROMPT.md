# Build a2.19 "Le futur proche"

Trail seq **15** of 32. The payoff `a2.02` was told to refuse, and the last lesson before
the past-tense arc.

**Read first:** `ealch-admin/A2-BUILD-DOCTRINE.md`, `A1-BUILD-INVARIANTS.md`, then
**`a2.02` as shipped** (your prerequisite, which conjugated `aller` and was forbidden
from using it futurally), **`a1.18` (negation) as shipped**, whose rule you are about to
extend and must not contradict, and **`a2.13` (modaux)**, whose two-verb structure is the
same shape as yours.

**And read `A2-BRIEF-CORRECTIONS.md` before you read the rest of this file.** It
holds the twenty-one claims the five shipped A2 briefs got wrong, the measurements
that replace them, and the two holes in the guards you are about to copy. The
sections below have been corrected against it; the ones that were measured are
marked.

---

## Identity

**Measured against Postgres 2026-08-12. This block replaces the one this brief
originally carried, which had `title` and `sub` swapped and a `sub` that exists
nowhere in the database — the same error all four shipped A2 briefs made.**

```
a2.19   seq 15
  title:  The Near Future
  sub:    Le futur proche
  canDo:  Can say what they are going to do, and make it negative
  prereqUnitIds: ['a2.02']
  lessonIds:     []          <- first build, version starts at 1
```

Use it as it stands. Re-run `scripts/_a2_preflight.ts` if you are reading this
more than a few days after the date above.

---

## Pre-flight

```bash
cd ealch-admin
pnpm corpus:probe --unit a2.19 --theme verbes,verbes-essentiels
pnpm corpus:probe --tokens "je vais manger,je ne vais pas manger,il va pleuvoir,nous allons partir,je vais à Paris"
```

### What the probe already returned, measured 2026-08-12

**`aller` exists (2 rows) and `a2.02` conjugates it. You author no headword
for it.**

```
aller   2 rows   fr.sons.verbes-essentiels.003 [ah-LAY] · fr.sons.consonnes.143 [a-LAY]
```

**`a2.02` (seq 5) is your prerequisite and its brief forbids it from teaching the
futur proche** — one line acknowledging it exists is that lesson's ceiling. So the
construction arrives here untouched, and `aller`'s paradigm arrives already
taught. **Do not re-teach the paradigm.** One recap mission is the ceiling, the
same way `a2.11` gave the shared endings one card.

**This is the third instance of doctrine §B.7's recurring shape**: `aller` +
infinitive against `aller` + place. Name the earlier instances by unit id
(`a2.02`, and `a2.18` at seq 14 if it has shipped).

---

## The teaching problem

The construction itself is easy: the learner already conjugates `aller` (`a2.02`) and
already knows that a modal takes an infinitive (`a2.13`). If this lesson is only "aller
plus infinitive", it is one mission wearing a unit's clothes.

**The canDo tells you where the weight goes: "and make it negative."**

### Owns: where the negation lands

```
Je mange.                  →  Je ne mange pas.            a1.18, one verb
Je vais manger.            →  Je ne vais pas manger.      the pas lands after aller
```

`a1.18` taught `ne...pas` wrapping the verb. With two verbs, the learner has to decide
**which** verb it wraps, and the answer is the conjugated one, not the one carrying the
meaning. Their instinct says otherwise, because the meaning is in `manger`. They produce
`je ne vais manger pas`.

That rule — **negation wraps the conjugated verb, not the infinitive** — is the payload,
and it generalises: it is the same rule that governs `a2.13`'s modals (`je ne peux pas
venir`) and it prepares the passé composé at seq 16, where `pas` wraps the auxiliary and
not the participle. **Name `a2.13` backwards and flag it forwards for `a2.05`.**

This is the lesson's real position in the level: it is the rehearsal for the passé
composé's negation, one lesson early, on a structure the learner finds easier.

### The reframe candidate

> **Negation wraps the conjugated verb, not the one carrying the meaning.**

Record what you rejected. "ne...pas goes around aller" is correct for this lesson and
teaches nothing transferable, which is the whole difference between an A1 statement and
an A2 one.

---

## The trap

**`aller` + infinitive against `aller` + place.**

```
Je vais à Paris.       going somewhere
Je vais partir.        going to do something
```

Same verb, two jobs, distinguished only by what follows. **This is the third of four
instances of that shape in A2** (doctrine §B.7): `a2.02` had `venir de`, `a2.18` had
`il y a`, you have this, and `a2.15` has `prendre`.

**Quote the term `a2.02` placed in `terms` and name both `a2.02` and `a2.18` by unit id.**
By the third instance the learner should be predicting the shape before you show it, and
a mission that asks them to predict it is stronger than one that explains it.

Second trap: **`aller` + infinitive is not the only future**, and learners who meet
`je partirai` later will think they were taught wrong. One line: there is a second future
that comes later, and this one is what people actually say. That is true and it prevents
a specific loss of trust.

---

## What is left to neighbours

- **`aller`'s paradigm is `a2.02`, shipped.** One recap, no more. You are not re-teaching
  the conjugation.
- **`ne...pas` is `a1.18`, shipped.** You extend its rule; you do not re-teach it, and you
  **must not contradict its wording**. Read what it actually says before you write.
- **The futur simple** (`je partirai`) is beyond A2 entirely. Named, never taught.
- **Place prepositions after `aller`** are `a2.04` (seq 13, shipped). You need `aller` +
  place for the trap. Use it as the contrast; do not teach which preposition.
- **The passé composé** is `a2.05`, seq 16, immediately after. **Do not conjugate it**,
  and flag the negation parallel for `a2.05` in your report.
- **`dans` for a future point** is `a2.18` (seq 14, shipped), which was told to teach it
  with the present-with-future-meaning because you did not exist yet. **Check what it
  shipped and pair `dans` with your construction properly**, closing that loop.

---

## Layout and scene

- **The affirmative and the negative belong on one screen**, adjacent, with the `pas`
  position visibly between `vais` and `manger`. **This is the layout the test must
  assert.** Anything that shows the negative in a separate section has hidden the only
  thing the learner needs to see.
- **`je vais à Paris` and `je vais partir` belong side by side.** Second required
  contrast.
- One `table` for the full construction across all six persons. It is a small table,
  because only `aller` changes, and that smallness is itself the teaching: one verb
  conjugates, one does not.
- `trapDrill` for the negation position.
- `scenario` should put the learner in a conversation about plans, which is what this
  construction is actually for and the most immediately usable thing in batch 2.

**The scene:** the A2 register. Someone asked what they are doing later, who gets the
first half out and then puts the negation in the English place, and the answer lands as
the opposite of what they meant. That is a sharper failure than a stall, and it is
recoverable within the doctrine's rule that nobody corrects them.

---

## Quiz notes

- **`errorSpot` is your strongest format**, because `je ne vais manger pas` is a
  whole-sentence word-order error and free-text is the only format that catches it.
- **`typeIn` for producing the negative** from an affirmative prompt.
- mcq for the `aller` + place versus `aller` + infinitive choice, with enough context to
  fix which is meant.
- `listenChoose` has a job worth one or two items: the negative in fast speech drops `ne`
  entirely (`je vais pas manger`), which is a register fact and a listening fact at once.
  **If you include it, mark it as spoken register** and stay consistent with whatever
  `a1.18` said about dropping `ne`. If `a1.18` did not address it, say so in your report.
- Every question needs a subject and a time frame that makes the future reading natural.

---

## Wiring

```
scripts/author-futur-proche-batch.ts        content:futur-proche
scripts/merge-futur-proche-into-seed.ts
scripts/data/futur-proche-{corpus,lesson,terms}.ts
ealch-v2/src/content/a2-19-futur-proche.test.ts
```

Ids from your batch-2 ledger block. Row count after the apply.

Your infinitives should be **imported**, not authored. The whole argument of the lesson is
that any infinitive slots in, and the corpus should demonstrate that by reaching across
themes rather than authoring a private verb list.

---

## Your test

- **The affirmative and negative appear in one section**, adjacent, asserted as a pair.
- **`aller` + place and `aller` + infinitive appear as a contrast in one section**, and
  the `a2.02` term is quoted verbatim.
- **No authored correct sentence places `pas` after the infinitive.** Permit it inside an
  `errorSpot` item as the error, and scope the assertion to allow that one location.
- **The `a2.13` back-reference is present.**
- **The futur simple is named and never conjugated.**
- **The passé composé is not conjugated anywhere.**
- **At least one infinitive used in production is an imported id from another theme**,
  asserted by id.
- If you shipped the dropped-`ne` register item, assert it is marked as spoken register.
- Import `hasPlainNasalFor` and assert respellings by name.

**Mutation-test**: move `pas` after the infinitive, separate the affirmative from the
negative, conjugate the futur simple, paraphrase the `a2.02` term.

---

## Settled before you start

- The identity block, above.
- `lessonIds: []`. First build, version 1.
- `aller` exists and `a2.02` conjugates it; you inherit the paradigm.
- You are the third instance of the one-form-two-jobs shape and the doctrine
  requires you to point backwards by unit id.

## Still unverified

- Whether `a2.02` shipped the "one form, two jobs" term. If not, `a2.18` may have named
  the pattern instead; check both and quote whichever exists.
- **What `a1.18` says about dropping `ne` in speech.** Unchecked, and you must not
  contradict it.
- **What `a2.18` shipped for `dans`.** It was written before this lesson existed.
- Whether `a2.13` shipped its modal + infinitive structure in a form quotable here.
- Baseline test count and mission range.

---

## What to report

Doctrine §F, plus:

- **the negation rule as you worded it**, verbatim, because `a2.05` is told to extend it
  one lesson later and the two must match
- whether the third instance of the "one form, two jobs" shape landed as recognition or
  as a fresh explanation
- **what `a1.18` says about dropping `ne`**, and whether your register item agrees
- confirmation that `dans` from `a2.18` was closed properly
