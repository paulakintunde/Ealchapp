# Build a2.02 "Irréguliers 1 : aller, venir, tenir"

Trail seq **5** of 32. The first irregular lesson and the hinge of batch 1: four later
lessons declare it as a prerequisite. Build it before seq 6, 7 and 9.

**Read first:** `ealch-admin/A2-BUILD-DOCTRINE.md`, `A1-BUILD-INVARIANTS.md`, then
**`a2.01`, `a2.10` and `a2.11` as shipped**. All three named `aller`, `venir` or `tenir`
as an exception and did not conjugate them. You are the payoff of three deferrals, and
the learner arrives expecting them.

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
a2.02   seq 5
  title:  Irregular Verbs 1: Aller, Venir, Tenir
  sub:    Irréguliers 1 : aller, venir, tenir
  canDo:  Can use aller, venir and tenir in the present, including venir de for the recent past
  prereqUnitIds: ['a2.01']
  lessonIds:     []          <- first build, version starts at 1
```

Use it as it stands. Re-run `scripts/_a2_preflight.ts` if you are reading this
more than a few days after the date above.

---

## Pre-flight

```bash
cd ealch-admin
pnpm corpus:probe --unit a2.02 --theme verbes,verbes-essentiels
pnpm corpus:probe --words "aller,venir,tenir,revenir,devenir,obtenir,appartenir"
pnpm corpus:probe --tokens "je viens de,je vais,nous allons,ils viennent"
```

### What the probe already returned, measured 2026-08-12

**All seven headwords exist. You author none of them.**

```
aller       2 rows   fr.sons.verbes-essentiels.003 [ah-LAY]
venir       1 row    fr.sons.verbes-essentiels.010 [vuh-NEER]
tenir       1 row    fr.sons.verbes-essentiels.052 [tuh-NEER]
revenir     3 rows   fr.sons.verbes-essentiels.084
devenir     2 rows   fr.sons.verbes-essentiels.083   ⚠ fr.b2.philosophie.136 carries gender=m; do not import that one
obtenir     2 rows   fr.a2.examens-et-diplomes.038
appartenir  1 row    fr.sons.verbes-essentiels.218
```

**`viennent` and `tiennent` are the nasal shape the checker cannot see** (nasal
followed by a consonant inside the token). Corrections §6: assert them by name and
split your repair table.

---

## The teaching problem

Three irregular paradigms is a memorisation task and the learner has just done three
lessons of derivation. If this lesson is only a table, it reads as the level giving up.

### Owns: the timeline

**`venir de` + infinitive is the first construction in the level that reaches off the
present moment.** "Je viens de manger" is a past tense the learner can use before they
have been taught one, and the passé composé is eleven lessons away (`a2.05`, seq 16).

That is the payload. `aller` and `tenir` are the paradigm around it. Structure the acts
so `venir de` is the heaviest, not the conjugation.

It also matters for the level's shape: a learner who can say what they just did has a
past-tense move eleven lessons early, which changes what they can do in a real
conversation this week. Say that to them.

### The reframe candidate

> **Coming from an action is how French says you just did it.**

Record what you rejected. "venir de means to have just done something" is a translation,
not a rule the learner can run: it does not tell them what goes after `de`.

---

## The trap

**`venir de` against `venir de`.** Same three words, two jobs:

```
Je viens de Paris.     de + place       origin
Je viens de manger.    de + infinitive  time
```

The only distinguisher is what follows. **This is your trapDrill, and it is a better one
than any conjugation in the lesson.**

It is also the first instance of a shape that recurs three more times across A2 (see
doctrine §B.7): one form, two jobs, distinguished only by what follows. You are the
first, so you do not point backwards. **Write the teaching so `a2.18`, `a2.19` and
`a2.15` can point back at you by unit id.** Give the pattern a name in `terms` and make
that name quotable.

Second trap: `nous allons` versus `nous venons` versus `nous tenons`. The `-ir` shape of
`venir`/`tenir` does not take `-iss-`, which `a2.10` named as an exception class and did
not conjugate. **You are conjugating it now.** Close that loop explicitly.

---

## What is left to neighbours

- **`aller` + infinitive is the futur proche, and it is `a2.19` (seq 15).** You are
  conjugating `aller` anyway, so the temptation is total and it will feel like an
  omission. It is not. **One line acknowledging it exists is the ceiling.** If you teach
  it, `a2.19` has no lesson.
- **`aller à` / `aller en` / `aller chez`** is `a2.04` (seq 13), prepositions of place.
  Use `aller` with a place in examples; do not teach which preposition and why.
- **`venir de` + place** you must show, because it is half the trap. Showing the contrast
  is not teaching the preposition system. Keep it to the contrast.
- **The compounds** (`revenir`, `devenir`, `obtenir`, `appartenir`) follow `venir` and
  `tenir` exactly. That is `a2.15`'s Owns (seq 9, the family principle). **Name two or
  three as evidence that `tenir` is worth learning; leave the principle to `a2.15`**,
  and say in your report that you did, so `a2.15` can point back.

---

## Layout and scene

- **The two `venir de` uses belong on one screen, two columns.** Separating them
  destroys the teaching. **This is the layout the test must assert.**
- Three paradigms is a lot of `table`. Use one table with all three side by side rather
  than three tables: the point is that `venir` and `tenir` are the same shape and
  `aller` is not. A single grid shows that; three grids hide it.
- `trapDrill` for `venir de`.
- `scenario` should put the learner in a conversation where "I just did X" is the
  natural move: arriving somewhere, explaining why they are not hungry, why they are
  late. That is a genuinely useful exchange and it is what the Owns buys them.

**The scene:** the A2 register, a sentence that dies mid-way. A good candidate: someone
trying to explain that they have already done the thing they are being offered, running
out of grammar, and accepting something they did not want. Nobody is corrected.

---

## Quiz notes

- **`errorSpot` and `typeIn` for the `venir de` trap**, because the learner must supply
  or reject what follows `de`. An mcq shows them the answer.
- `listenChoose` has a real job: `ils viennent` against `il vient` is audible, like
  `a2.10`'s `-iss-` pair. One or two items.
- Every `venir de` question needs enough context to fix which use is meant. "Je viens
  de ___" with no further context has two valid completions and no single answer.
- Say which questions you wanted and could not write.

---

## Wiring

```
scripts/author-aller-venir-batch.ts     content:aller-venir
scripts/merge-aller-venir-into-seed.ts
scripts/data/aller-venir-{corpus,lesson,terms}.ts
ealch-v2/src/content/a2-02-aller-venir.test.ts
```

Ids from your ledger block. Row count after the apply.

If you author sentences using `venir de` + infinitive, those are past-referring sentences
in a theme `a2.05` will later import from. That is permitted (doctrine §C: the corpus is
not bound by trail position) but **flag them in your corpus header** so `a2.05` knows
they exist.

---

## Your test

- **`venir de` + infinitive and `venir de` + place appear as a contrast in one section**,
  both sides present.
- **The futur proche is not taught**, asserted against production surfaces (decks, vocab,
  drills, quiz), not against every string.
- **All three paradigms are present in full**, asserted cell by cell for the irregular
  cells at minimum.
- **`tenir` is shown to follow `venir`**, which is the only reason to teach it here. If
  that link is missing, `tenir` is an arbitrary third verb.
- **The `a2.10` back-reference exists**, closing the non-`-iss-` exception.
- **At most three compounds appear, and the family principle is not taught** — that is
  `a2.15`.
- Import `hasPlainNasalFor`. `viennent` and `tiennent` carry a word-internal nasal the
  validator cannot see; check §3 of the invariants and assert the verified forms by name.

**Mutation-test**: separate the `venir de` contrast, teach the futur proche, drop the
`tenir`/`venir` link.

---

## Settled before you start

- The identity block, above. Measured, not guessed.
- `lessonIds: []`. This is a first build and your version counter starts at 1.
- All seven headwords exist and are imported, not authored.
- `a2.10` and `a2.11` both shipped and both name `venir`/`tenir` as an
  exception they do not conjugate. You are the payoff; read them.

## Still unverified

- Whether `a2.10` shipped the non-`-iss-` exception naming this brief assumes. Read the
  shipped lesson.
- Whether any corpus sentence already uses `venir de`. If some do, check which use.
- Baseline test count and mission range.

---

## What to report

Doctrine §F, plus:

- **the name you gave the "one form, two jobs" pattern in `terms`**, verbatim, because
  three later lessons are told to quote it
- how many missions went to `venir de` versus the three paradigms
- which compounds you named, and confirmation that you left the family principle to
  `a2.15`
- any `venir de` corpus sentences you authored, flagged for `a2.05`
