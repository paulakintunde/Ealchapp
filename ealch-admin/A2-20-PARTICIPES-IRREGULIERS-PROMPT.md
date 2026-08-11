# Build a2.20 "Participes passés irréguliers"

Trail seq **17** of 32.

**This is the most boring possible lesson and the brief's main job is to stop it being
one.** Forty items that must be memorised is a list. A list is not a lesson, and the
project has a 20-mission standard that a list cannot honestly fill.

**Read first:** `ealch-admin/A2-BUILD-DOCTRINE.md`, `A1-BUILD-INVARIANTS.md`, then
**`a2.05` as shipped** (your prerequisite, and your negotiating partner on the corpus
split), and **`a2.15` as shipped** (seq 9, which reserved `pris` and `mis` for you and
whose family principle is the shape you should borrow).

---

## Identity

```
a2.20   Participes passés irréguliers                      seq 17
  sub:    the full list — the 40 that must be learnt
  canDo:  Can produce the irregular past participles rather than guessing from the infinitive
  prereqUnitIds: ['a2.05']
```

Copy `title`, `sub` and `canDo` byte-for-byte from the probe's unit dump.

---

## Settle the corpus split with `a2.05` before anything else

`a2.05` claims sixty participles, you claim forty. **A hundred participle rows in one
theme will collide on `fr`, and the flashcard hub treats two rows sharing an `fr` in one
theme as one card served twice.**

Whether a participle is a corpus item at all is a level-wide ledger decision (doctrine
§E). Settle it, settle the split, and settle it **before either of you applies anything**.
Report what was agreed.

---

## Pre-flight

```bash
cd ealch-admin
pnpm corpus:probe --unit a2.20 --theme verbes,verbes-essentiels
pnpm corpus:probe --tokens "j'ai fait,j'ai dit,j'ai pris,j'ai vu,j'ai lu,j'ai bu,j'ai ouvert,j'ai eu,j'ai été"
```

Several of your forty are the participles of verbs `a2.02`, `a2.12`, `a2.13`, `a2.14` and
`a2.15` already taught in the present. **Those infinitives exist as items. Import them and
attach the participle**, rather than authoring a second row for the same verb.

---

## The teaching problem

### Owns: the organisation

Forty irregular participles is not forty facts. It is **four ending families**, and a
learner who sorts them is doing something quite different from a learner who memorises
them.

```
-is     pris · mis · appris · compris · assis
-it     dit · écrit · conduit · construit
-u      vu · lu · bu · su · pu · voulu · dû · connu · venu · tenu
-ert    ouvert · offert · couvert · souffert
odd     fait · été · eu · né · mort
```

**That is the same move `a2.15` made with verb families**, eight lessons earlier: learn
the pattern, get the members. Name `a2.15` by unit id and use the same framing
deliberately, so the learner recognises the strategy rather than meeting it fresh.

The `-u` family alone covers a quarter of the list and includes the participles of
`venir`, `tenir`, `vouloir`, `pouvoir`, `savoir`, `connaître` — every irregular verb from
batch 1. **That is the connection that makes this lesson worth building**: the learner
already owns those verbs, and the participle is one predictable step from a verb they
know.

### The reframe candidate

> **They are not forty. They are four groups and a handful of oddities.**

Record what you rejected. "These must be memorised" is what the `sub` says and it is the
approach that makes the lesson unbuildable at twenty missions.

---

## Design constraint: this must be a sorting lesson, not a list lesson

**Section types that make this work:**

- **`tapTable`** with a row per participle, grouped by family, tap to hear it. This is the
  A1 workhorse and it is exactly right for forty items.
- **`groupDrill`** where the learner assigns an unseen participle to a family.
- **`trapDrill`** for the ones that look regular and are not.
- **`cardDeck` / `deckTranche`** to release the forty in groups rather than at once.

**Section types that make it fail:** a `table` with forty rows, or `vocabThemes` with
forty entries. Both are the list wearing a section type.

If the honest answer is that forty items cannot fill twenty missions without padding,
**say so and propose the alternative** (fewer participles taught actively, the rest as a
reference sheet and deck) rather than inflating.

---

## The trap

**The ones that look derivable and are not.**

```
prendre → pris        not prendu
mettre  → mis         not mettu
faire   → fait        not faisu
être    → été         from nowhere
avoir   → eu          from nowhere, and pronounced /y/
naître  → né          shorter than the infinitive
mourir  → mort        a different word entirely
```

`eu` deserves its own mission: two letters, one sound, and it looks nothing like it
sounds. A learner reading `eu` will not produce it correctly without being told.

Second trap: **`dû` carries a circumflex to distinguish it from `du`.** It is the only
participle in the set where an accent does semantic work, and it disappears in the
feminine (`due`). Worth one mission, and worth an assertion so nobody strips it.

---

## What is left to neighbours

- **The passé composé's formation and negation are `a2.05`, shipped.** One recap. You
  supply participles for a construction the learner already has.
- **`être` as auxiliary is `a2.21`** (seq 18, immediately after). Several of your `-u`
  participles (`venu`, `allé`, `mort`, `né`) take `être`. **Teach the participle form; do
  not teach which auxiliary it takes**, and flag them for `a2.21` in your corpus header.
  This is a genuinely awkward boundary and naming it in one line is better than pretending
  it is not there.
- **Reflexive verbs are `a2.22` and `a2.23`** (seq 19, 20). Not here.
- **Participle agreement** is `a2.21`. Not here: with `avoir` there is none, per `a2.05`.

---

## Layout and scene

- **Each family belongs in its own section with all its members visible together.** Four
  sections, four families. **This is the layout the test must assert**, and it is the
  entire difference between this lesson and a list.
- **The look-derivable traps belong beside their wrong forms**, so the learner sees what
  they would have produced. `pris` next to a struck-through `prendu` is more memorable
  than `pris` alone.
- A reference sheet with all forty, grouped. This is the highest-value sheet in A2 and the
  learner will return to it for months. Verify on device that its contents render, not
  just its title, and check it does not need horizontal scroll.

**The scene:** the A2 register. Someone telling a story about yesterday who reaches a verb
they know perfectly well in the present, guesses the participle, and produces something
that is not a word, so the sentence stops. It is the most common real A2 breakdown there
is.

---

## Quiz notes

- **`typeIn` is the format**, because production is the canDo: give the infinitive,
  require the participle. Recognition formats test something easier than what the lesson
  claims.
- **mcq for family assignment**, with an unseen verb.
- **`listenChoose` for `eu`**, where the sound and the spelling are furthest apart.
- **No ear question can test `dû` against `du`.** They are identical. Say so in your
  report.
- Avoid mcq for participle production wherever possible: seeing the right answer among
  four is not what the canDo asks for.
- **One quiz per lesson.** Forty items will tempt you toward a second.

---

## Wiring

```
scripts/author-participes-batch.ts          content:participes
scripts/merge-participes-into-seed.ts
scripts/data/participes-{corpus,lesson,terms}.ts
ealch-v2/src/content/a2-20-participes.test.ts
```

Ids from your batch-2 ledger block, **sized against `a2.05`'s** per the split above. Row
count after the apply, not just the highest id: `a2.05` may be building concurrently and
can land below your top. This is the highest collision risk in batch 2.

---

## Your test

- **Each of the four families appears in its own section with its members together**,
  asserted family by family.
- **All forty participles are asserted individually by name**, not as a count. If the
  honest number after the split with `a2.05` is not forty, assert the real number and
  report the `sub` mismatch.
- **`dû` carries its circumflex**, asserted by name with a comment saying it is
  deliberate, so a future author stripping it goes red.
- **`eu` has its own teaching moment**, asserted by section.
- **No auxiliary choice is taught**, scoped to production surfaces: the `être` participles
  appear as forms only. `a2.21` owns the choice.
- **No participle agreement appears** in any authored sentence.
- **The `a2.15` back-reference is present.**
- **The look-derivable traps are shown against their wrong forms**, asserted as pairs.
- Import `hasPlainNasalFor` and assert respellings by name.

**Mutation-test**: strip the circumflex from `dû`, merge two families into one section,
teach an auxiliary choice, drop a participle, replace a `typeIn` with an mcq.

---

## UNVERIFIED

- **The corpus split with `a2.05`.** Unmade, and it is the first thing to settle.
- **Whether participles are corpus items at all.** Ledger decision, unmade.
- Whether forty items can honestly fill 19 to 24 missions without padding. **This brief
  suspects it is tight**, and the sorting design above is what makes it possible.
- Whether the four-family grouping holds for all forty. Build the list first, then check
  the grouping, then decide the sections. Not the other way round.
- Whether `a2.15` shipped its family principle in a form quotable here.
- Baseline test count and mission range.

---

## What to report

Doctrine §F, plus:

- **the split with `a2.05`**, with row counts on each side, and confirmation neither
  re-authored the other's rows
- **the real participle count**, and whether the `sub`'s "forty" holds
- **whether the four-family grouping covered the list**, or how many oddities were left
- **whether the lesson filled 19 to 24 missions honestly.** If it needed padding, say so;
  that is a finding, not a failure.
- which participles you flagged as `être`-taking, for `a2.21`
