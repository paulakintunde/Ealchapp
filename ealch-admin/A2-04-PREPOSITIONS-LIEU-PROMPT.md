# Build a2.04 "Prépositions de lieu"

Trail seq **13** of 32.

**This is the most import-heavy lesson in batch 2.** `a1.21` (prepositions of place) and
`a1.22` (countries and nationalities) both shipped, and `a1.22`'s build imported country
nouns in bulk and forced `a1.03` to v3. **Assume the vocabulary exists until the probe
says otherwise.**

**Read first:** `ealch-admin/A2-BUILD-DOCTRINE.md`, `A1-BUILD-INVARIANTS.md`, then
**`a1.21` and `a1.22` as shipped**, both of which are yours to build on and neither of
which you may repeat. Read `a1.21`'s build report: five of its brief's claims measured
false, including one that would have shipped blank cards.

---

## Identity

```
a2.04   Prépositions de lieu                               seq 13
  sub:    the full set — with countries & cities
  canDo:  Can pick à, de, en, au, aux and chez, and dodge their classic traps
  prereqUnitIds: ['a1.21']
```

Copy `title`, `sub` and `canDo` byte-for-byte from the probe's unit dump.

---

## Pre-flight, and run it before writing anything

```bash
cd ealch-admin
pnpm corpus:probe --unit a2.04 --theme pays,lieux,prepositions,deplacements
pnpm corpus:probe --words "la France,le Japon,les États-Unis,le Canada,l'Espagne,Paris,Londres"
pnpm corpus:probe --tokens "en France,au Japon,aux États-Unis,à Paris,chez moi,chez le médecin"
```

Probe with real orthography including accents: `États-Unis` and `l'Espagne` will report
absent if you strip them. The probe adds articles for you, so give bare forms where the
noun is not inherently articled.

**If `a1.22` imported the country nouns, you import them too. Do not re-author a single
country.** Re-authoring them would collide on `fr` within the theme, and the flashcard
hub treats two rows sharing an `fr` in one theme as one card served twice.

---

## The teaching problem

`a1.21` taught prepositions of place. This lesson has to be more than "the rest of them",
or it is a vocabulary top-up wearing a grammar title.

### Owns: the choice mechanism

The preposition is not chosen by meaning. **It is chosen by what kind of place it is, and
by the place's gender.**

```
en France          feminine country              en
au Japon           masculine country             au
aux États-Unis     plural country                aux
à Paris            city                          à
chez le médecin    a person                      chez
```

An English speaker has one word, "in" or "to", and no reason to look at the noun at all.
The move this lesson installs is: **look at the place before you pick the preposition.**
That is a procedure, and it is what makes this A2 rather than more A1 vocabulary.

It also gives `a1.03` and `a1.22` a payoff: the gender of a country, which looked like
arbitrary memorisation, turns out to determine a word the learner uses constantly.
Name both units.

### The reframe candidate

> **The place decides the preposition, so look at the place first.**

Record what you rejected. Any formulation that lists the prepositions and their meanings
is the thing that does not work, because they do not have distinct meanings.

---

## The traps

**One: `chez` takes only people.** `chez Marie`, `chez le médecin`, `chez moi` — never a
place. `chez la boulangerie` is wrong and `chez le boulanger` is right, which is a
distinction between the shop and the person that English does not make at all. This is
your strongest `trapDrill`.

**Two: cities against countries.** `à Paris` but `en France`. Learners generalise one to
the other. The rule is clean and worth stating as a rule.

**Three: `de` for origin, and its contractions.** `je viens de France`, `du Japon`,
`des États-Unis`. This mirrors `à`/`au`/`aux` exactly, which is a symmetry worth showing:
one table with both columns is better than two lessons' worth of lists.

**Four, and check before you teach it:** `des = de + les` was a claim in `a1.16`'s brief.
Read what `a1.16` and `a1.29` (partitives) actually shipped before restating any
contraction rule, so the level does not say two different things.

---

## What is left to neighbours

- **`a1.21` owns basic prepositions of place** (`sur`, `sous`, `dans`, `devant`,
  `derrière`, `à côté de`). **Not yours.** If your lesson teaches `sur` and `sous`, it has
  repeated a shipped lesson. One recap line at most.
- **`a1.22` owns countries and nationalities as vocabulary.** You use the nouns; you do
  not teach them, and you do not build a country vocabulary section.
- **Time prepositions are `a2.18`** (seq 14, immediately after). `en` also means a
  duration (`en deux heures`) and `dans` also means a future point. **Do not touch either
  temporal sense**, and flag in your report that you left them, so `a2.18` can point back.
- **Transport and directions are `a2.27`** (seq 26). `aller à la gare` is an example
  sentence, not a directions lesson.
- **`a1.29` owns the partitive.** `de` appears in both and they are different jobs. Do not
  teach quantity.

---

## Layout and scene

- **The five place types belong in one grid** — feminine country, masculine country,
  plural country, city, person — one row each, with an example and the preposition.
  **This is the layout the test must assert.** Presented as five separate rules, the
  learner has five things to remember; presented as one grid, they have one question to
  ask.
- **The `à`/`de` symmetry belongs in one table with two columns**, going and coming from,
  so `au`/`du` and `aux`/`des` line up.
- `trapDrill` for `chez`.
- `tapTable` for the place-type rows.
- A reference sheet with the grid. This is a genuine lookup and the learner will return to
  it during `a2.27` and `a2.29`. Verify on device that its contents render, not just its
  title.

**The scene:** the A2 register. Someone asked where they are from or where they are
going, who has the country and stalls on the word before it, and answers with the bare
noun. It is understood, and it is the single most audible marker of a beginner. Keep the
doctrine's beat structure.

---

## Quiz notes

- **mcq with the place in the stem** is the core format: the answer is determined by the
  noun, so the noun must be visible.
- **`errorSpot` for `chez` + place**, the error learners actually produce.
- `typeIn` for the contractions, where `à le` → `au` must be produced rather than
  recognised.
- **No ear question can distinguish `en` from `and`-like nasal neighbours reliably at
  speed**, and `à` is often unstressed to the point of near-inaudibility. Do not build a
  `listenChoose` round on preposition identification. Say so in your report.
- Every question needs a place whose gender and type are determinable from the stem.

---

## Wiring

```
scripts/author-prepositions-lieu-batch.ts       content:prepositions-lieu
scripts/merge-prepositions-lieu-into-seed.ts
scripts/data/prepositions-lieu-{corpus,lesson,terms}.ts
ealch-v2/src/content/a2-04-prepositions-lieu.test.ts
```

**Check for a collision with the existing `author-prepositions-batch.ts`** (a1.21) and
`author-pays-batch.ts` (a1.22). Both exist and neither is yours.

Ids from your batch-2 ledger block. If most of your vocabulary is imported, your block may
go almost unused, and that is the expected outcome. Record every imported id with its
source theme in the corpus header.

**Any country noun you author joins a1.03's measured ending population.** `a1.22`'s build
already forced `a1.03` to v3 that way. Run `a1-03-genre.test.ts` before and after, and
withdraw rather than argue.

---

## Your test

- **The five place types appear in one section**, each with an example, asserted row by
  row.
- **The `à`/`de` symmetry is present**, both directions, in one section.
- **`chez` is taught as people-only**, and no authored correct sentence puts `chez` before
  a place. Permit it inside an `errorSpot` item as the error and scope the assertion so it
  allows that one location.
- **`a1.21`'s prepositions are not re-taught**, scoped to production surfaces (decks,
  vocab, drills, quiz), not to every string.
- **No country vocabulary section exists**, and every country referenced is an imported
  id, asserted by id.
- **No temporal sense of `en` or `dans` appears anywhere**, reserving `a2.18`.
- **a1.03's printed ending figures still pass**, reported before and after.
- Import `hasPlainNasalFor`. `en` is a bare nasal and appears in hundreds of items: settle
  one respelling and assert it.

**Mutation-test**: put `chez` before a place, re-author a country, teach `sur`/`sous`,
split the five-type grid, use `dans` temporally.

---

## UNVERIFIED

- **How much of this lesson's vocabulary already exists.** `a1.22` imported country nouns
  in bulk. This brief assumes nearly all of it exists and that assumption is unmeasured.
- Whether a `prepositions` or `lieux` theme exists, and which is the right home. Ledger
  decision.
- **What `a1.16` and `a1.29` actually shipped about `des = de + les`.** A brief claimed it
  once; the shipped lessons are the authority.
- Whether `a1.21` already covers `chez`. If it does, this lesson is narrower than
  described and that goes in your report.
- Baseline test count, a1.03's printed figures, mission range.

---

## What to report

Doctrine §F, plus:

- **how much you imported versus authored**, with ids and source themes. If the answer is
  "almost everything imported", say it plainly; that is the expected outcome.
- **a1.03's printed ending figures before and after**, and any country you withdrew
- **what `a1.21` actually covers**, measured, and how you avoided repeating it
- confirmation that the temporal senses of `en` and `dans` are untouched, flagged for
  `a2.18`
- the contraction wording you shipped, checked against `a1.16` and `a1.29`
