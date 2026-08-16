# Build a2.25 "The Pronouns Y and EN"

Trail seq **23** of 35. Last lesson of the pronoun block and the hardest of the three.
**`a2.06` (seq 21) and `a2.24` (seq 22) are both hard prerequisites and must be shipped
before you start.** You inherit `a2.06`'s position rule and `a2.24`'s `à` framing.

**Read first:** `ealch-admin/A2-BUILD-DOCTRINE.md`, `A1-BUILD-INVARIANTS.md`, and
**`A2-BRIEF-CORRECTIONS.md` in full**. Then **`a2.06` and `a2.24` as shipped** (build
reports, not briefs), **`a2.04` (prepositions of place)** and **`a2.18` (prepositions of
time)**, because both shipped an `en` you are about to collide with, and **`a1.29`
(partitive articles)**, because `en` replaces `de` + a quantity and `a1.29` owns `du`,
`de la` and `des`.

**This brief was written against a probe run 2026-08-15**
(`scripts/_a2_preflight_pronouns.ts`). Re-run it if you are reading this later.

---

## Identity

**Measured against Postgres 2026-08-15. Corrections §1 holds: the spine's `sub`
(`'the two neutral pronouns — à + thing, de + thing'`) exists nowhere in the database,
and it carries an em dash.**

```
a2.25   seq 23   level a2   track a2
  title:  The Pronouns Y and EN
  sub:    Y et EN
  canDo:  Can replace a place or a quantity with y and en in the right slot
  themes: null
  prereqUnitIds: ['a2.24']
  lessonIds:     []          <- first build, version starts at 1
```

`canDo` matched the spine byte for byte. Use the block as it stands. Note the `sub` is
three characters and carries no descriptive tail, unlike every other unit in the band.

---

## Pre-flight

```bash
cd ealch-admin
pnpm tsx scripts/_a2_preflight_pronouns.ts
pnpm corpus:probe --unit a2.25 --theme pronoms-essentiels
```

### What the probe already returned, measured 2026-08-15

**Your theme is `pronoms-essentiels`** — `pronoms` bare holds 0 rows (Corrections §14.2).
486 published, `fr.a2.*` 188 rows at max `.188` before `a2.06` and `a2.24` claimed blocks.
**Take yours above whatever they actually applied, and check the row COUNT, not the
maximum** (Corrections §10).

**Every verb you need already exists. You author no infinitives:**

```
aller 2 · penser 2 · jouer 4 · vouloir 1 · avoir 2 · boire 4 · prendre 3
```

**Sentence evidence, and one number in it changes the shape of your lesson:**

```
j'y vais     1     fr.a2.pronoms-essentiels.029
j'en veux    2     fr.a2.pronoms-essentiels.032 · fr.a1.pronoms-essentiels.100
j'en ai      4     fr.a2.conflits-reconciliation.052 · fr.a2.rp-recits-temps.051
tu en as     1     fr.a2.entraide.008
n'y va pas   0
il y a     195     across the whole corpus
```

**`il y a` occurs in 195 published sentences and the productive uses occur once or
twice.** The learner has been reading `y` since A1 without knowing what it was. That is
your opening and your trap in the same fact.

Otherwise Corrections §3 holds for the eighth build running: the forms are scattered, no
two sentences differ by one thing, and the cells you need are the empty ones. **Author
your paradigm in one frame**, chosen through the real `dicteeMode` — WORD tiles above 16
letters, and a lesson about a slot can only be tested in LETTERS mode. `J'y vais.` is 7
letters. **Reusing `a2.06`'s or `a2.24`'s frame word is a feature.**

### Respelling

`prendre` imports as `PRAHⁿDR` from `fr.sons.verbes-essentiels.012` and
`fr.sons.consonnes.107`, which is already the house form — bring any competing copy into
line rather than inventing one. Read Corrections §6 **as amended by §14.1** before
building the repair table: a row with a nasal stem and a nasal ending holds one visible
and one invisible nasal in one string.

---

## The teaching problem

### Owns: what these two replace, which is not a noun

`a2.06` and `a2.24` both replaced a **noun phrase**. `y` and `en` replace a
**preposition and its object together**, which is why they are called neutral and why
they behave unlike anything the learner has met.

```
y     replaces  à + a thing or a place        Tu vas à Paris ?  →  J'y vais.
en    replaces  de + a thing or a quantity    Tu as des pommes ?  →  J'en ai.
```

The learner's instinct is to replace the noun and keep the preposition, producing
`j'y vais à` or `j'en ai des`. The preposition is **inside** the pronoun and does not
survive. Say that plainly and build the missions on it.

`a2.24` was told to teach that `à Marie` becomes `lui` and the `à` disappears. **Quote its
framing and name the unit**: this is the same disappearance one lesson later, extended
from people to things. If `a2.24` shipped that framing, you are completing a pattern
rather than starting one.

### The reframe candidate

> **The preposition goes inside the pronoun, so it does not get said twice.**

Runs mid-sentence, explains both words, and predicts the error. Record what you rejected:
"y replaces à + thing and en replaces de + thing" is the table, not a rule the learner can
act on while speaking.

### The obligatory `en`, which is the half of the canDo that is genuinely hard

```
Tu as des pommes ?   —  Oui, j'en ai.
Do you have apples?  —  Yes, I do.
```

English drops the object entirely. French **cannot**: `Oui, j'ai.` is not a sentence. A
learner answering a quantity question will produce it, and it fails in a way that stops
the conversation rather than merely sounding foreign.

That obligatoriness is the "quantity" half of the canDo and it deserves more weight than
the `y` half, because `y` has an English analogue in "there" and `en` has none.

---

## The traps

**One, and it is the largest in the lesson: `en` already means two other things, both
taught, both in A2.**

```
en France          preposition of place       a2.04, seq 13, shipped
en deux heures     preposition of time        a2.18, seq 14, shipped
j'en ai            pronoun                    yours
```

Three jobs for one word, across three lessons in the same level. **Name both units by
id.** This is doctrine §B.7's recurring shape at its most extreme instance, and the
distinguisher is the one `a2.06` introduced: **position.** Before a noun it is a
preposition; before a verb it is a pronoun.

This is also your biggest guard problem. `en` as a preposition appears in a very large
number of corpus sentences, so **a guard built on the two letters will fire constantly.
Guard the THING and not the letters** (Corrections §14.4): require a real pronoun context.
`a2.17` shipped a guard that matched the English sentence "You did not stall **on a**
word **you** had not learned", because `on` is a French pronoun and `a` a French
auxiliary. Put an English sentence in your MUST_NOT_FIRE list.

**Two: `il y a` is frozen and does not decompose.** 195 sentences carry it, `a2.18` taught
it as both "there is" and "ago", and the `y` inside it is your `y`. A learner shown the
decomposition will try to say `il en a` for "he has some" and produce something correct
that means something else.

**Show that `il y a` contains your `y`, and say that the phrase does not come apart.** One
mission. It is a genuinely good moment — a phrase the learner has used since a1 turns out
to have been this all along — and it goes wrong if you invite them to take it to pieces.

**Three: `y` is not the English "there" of `il y a`.** `J'y vais` is "I'm going", not
"I'm going there" — English usually drops it, French requires it. Same obligatoriness as
`en`, and worth pairing with it rather than teaching twice.

---

## The decision this brief cannot make, and it may be a hole in the curriculum

The canDo says **"in the right slot"**. With three sets of pronouns now taught, the slot
question is no longer trivial: `il y en a`, `je le lui donne`, `je lui en parle` all
require an **order**, and `y` before `en` is a fixed fact.

**Measured 2026-08-15: no A2 unit's title, sub or canDo names pronoun order.** Corrections
§7 warns that a unit-body search is a weak instrument, so this was cross-checked against
the brief files, which is the first of §7's three tests: `a2.26` to `a2.35` are the
situational block, the comparatives, the demonstratives, the possessive pronouns and the
A2 review. **None of them is a pronoun-order lesson**, and no brief file exists for any of
them yet.

Three options:

1. **Teach `y` before `en` only** — the one order your own two pronouns can produce, which
   `il y en a` makes worth having — and name multiple-pronoun order as coming later.
2. **Teach the full order table** for all five sets, which is a lesson's worth of content
   inside a lesson that already has two hard halves.
3. Say nothing, and leave "in the right slot" unmet.

**Take option 1 and report the gap.** Option 3 fails the canDo. Option 2 will not fit
alongside the obligatory `en`, and it would be the third act of a lesson whose first two
are already the hard ones.

**Report the gap plainly**, because it is a genuine curriculum finding: either a later A2
unit needs to own pronoun order, or `a2.35` (Bilan A2) inherits it, and nobody has
decided. Do not resolve it by quietly teaching it.

---

## What is left to neighbours

- **Direct object pronouns are `a2.06`, shipped.** **Quote its position rule verbatim.**
  Your two sit in the same slot.
- **Indirect object pronouns are `a2.24`, shipped.** **Quote its `à` framing.** `à` + a
  person is `lui`; `à` + a thing is `y`, and that split is the cleanest sentence in your
  lesson.
- **`en` as a preposition of place is `a2.04`, shipped; of time is `a2.18`, shipped.**
  Named as the contrast, taught by neither you nor them.
- **`il y a` is `a2.18`, shipped**, in both its senses. You show the `y` inside it. **Do
  not re-teach either sense**, and read what `a2.18` actually shipped rather than what its
  brief planned, because it had a tense-availability problem and may have moved.
- **`du`, `de la`, `des` are `a1.29`, shipped.** `en` replaces them and the learner needs
  them live. Lean on it; do not re-teach the partitive.
- **Numbers and quantity expressions** are `a1.02`, `a1.27`, `a1.28`. Used, not taught.
- **Multiple-pronoun order** — see the decision above.

---

## Layout and scene

Corrections §8 holds the layout facts that have already cost a build each.

- **`y` and `en` belong on one screen with what each replaces**, the preposition visible
  inside the pronoun. **This is the layout the test must assert.** It is the Owns and
  separating the two makes it two small lessons.
- **`à Marie → lui` and `à Paris → y` belong side by side.** Second required layout, and
  it is the `a2.24` handshake: person against thing, one preposition.
- **The three `en`s belong in one section**, `en France` / `en deux heures` / `j'en ai`,
  with the position marked. Third required layout, and it is the largest trap.
- **`Oui, j'en ai.` beside the impossible `Oui, j'ai.`** The obligatory case only teaches
  if the learner sees what French refuses.
- **A `table` at layer `core` is a density failure.** In-flow it is a `tapTable`, capped
  at six rows on a Pixel 6; the full table lives in a reference sheet. **A `sheetId`
  resolves only inside its own lesson** — you cannot extend `a2.06`'s or `a2.24`'s. If
  yours would only restate them, ask what it holds that theirs could not: the two
  prepositions and the slot order are the answer.
- **`commonErrors` needs `swipe: true`.** **Three term chips per section.**
- Any `trapDrill` must walk `rule > cards > audio > drill` with `swipe`, an `audio` spec, a
  `say` and a GATED drill step (`lesson-contract.test.ts`, since 2026-08-13). `size` comes
  OFF a stepped trapDrill, and the audio step plays each card's `fr`, so its `recordingId`
  must name a take containing those lines. **Read the ledger's "The trapDrill shape, swept
  across seq 1..11" first.**

**The scene:** the A2 register (doctrine §B.2). The strongest candidate is the obligatory
`en`: someone answering "do you have any" with the English shape, saying two words, and
stopping because the sentence has nowhere to go. Nobody corrects them; the other person
just waits. Beats in a named `SCENE_BEATS` const, prose at `md`, choice and break at `lg`,
each with its own `audio`, break body 24 to 40 words.

---

## Quiz notes

Corrections §5 decides your format mix.

- **`typeIn` for the replacement**, given a full sentence with the prepositional phrase in
  it. That is the Owns and no recognition format tests it.
- **`errorSpot` for the surviving preposition** (`j'y vais à Paris`, `j'en ai des`), which
  is a whole-sentence error and the one learners actually produce.
- **mcq for the three `en`s**, with enough context that the job is determinable. "Which
  `en`?" has no answer; a full sentence has one.
- **`listenChoose` is weak here.** `y` and `en` are both short and unstressed, and
  `j'y vais` against `je vais` is a real audible contrast worth one or two items. **Do not
  build a round on distinguishing `en` the preposition from `en` the pronoun by ear** —
  they are the same sound and the question would have no correct answer. Enforce it with a
  `HOMOPHONE_FORMS` list rather than a sentence in your report.
- **No typed surface can test an accent.** `à` versus `a` and `où` versus `ou` are both
  live in this lesson's material and **neither can be tested by `typeIn` or `errorSpot`** —
  `fold()` strips combining marks and `errorSpot` runs the same path. Use mcq.
- **Say which questions you wanted and could not write.**
- **One quiz per lesson.**

---

## Wiring

```
scripts/author-y-en-batch.ts                content:y-en
scripts/merge-y-en-into-seed.ts
scripts/data/y-en-{corpus,lesson,terms}.ts
ealch-v2/src/content/a2-25-y-en.test.ts
```

Ids from `pronoms-essentiels`, above whatever `a2.06` and `a2.24` applied. **The seed is a
CUT** and must carry every imported row your lesson references, or the cards render empty.
Postgres first, seed second. Never `git checkout seed.json`. Do not run
`pnpm content:verbes`.

**If you import from the 195 `il y a` sentences, pick rows with a home in your theme, a
respelling and no `gender`** — a gendered single-word row joins a1.03's measured ending
population and moves twenty printed figures in `a1-03-genre.test.ts`.

---

## Your test

Invariants §6, plus all four holes in the guards you will copy: Corrections §9 (the
jargon walk misses `intro` and `overview`; a throwing source silently disables ~30
assertions), §13 (`prose()` drops `sub`, so run the checks over a `display()` walk, and
check the `-s` plural of every JARGON entry) and §14.3 (the house boundary excludes `'`,
so it cannot see `j'y`, `j'en`, `n'y` — **which is most of your lesson**). Drop the
apostrophe from the left boundary and keep it on the right. This matters more here than
in any other lesson in the band.

Specific to this lesson:

- **`y` and `en` appear in one section with what each replaces**, the preposition visible.
- **`a2.06`'s position rule and `a2.24`'s `à` framing are quoted verbatim.** Assert both
  strings; a paraphrase must go red.
- **The three `en`s appear in one section**, and both `a2.04` and `a2.18` are named by id.
- **No authored correct sentence keeps the preposition after the pronoun.** Permit it
  inside an `errorSpot` item as the error; scope the assertion to allow that one location.
- **`il y a` is shown containing `y` and is stated not to decompose**, asserted by section.
- **The obligatory `en` is taught with the impossible English-shaped answer visible.**
- **Whichever slot-order option you took is asserted**, and if you took option 1, no
  multiple-pronoun sentence beyond `y en` appears anywhere.
- **`en` guards match a pronoun context, not the two letters**, with an English sentence in
  MUST_NOT_FIRE and a French one in MUST_FIRE.
- **The negation string matches `a2.24`'s, which matches `a2.06`'s.**
- **`adjective` and `adverb` are house vocabulary, not jargon** (§14.5): guard the ratio.
- Import `hasPlainNasalFor` and assert your repairs by name in one table, with stored /
  half / final all through the real function and `half !== to` asserted on mixed rows.

**Mutation-test everything, and expect two of your mutations to find a weakness rather
than confirm a strength.** A mutation caught by the batch and not the test is a hole in
the test.

---

## UNVERIFIED

- **Whether `a2.06` and `a2.24` are shipped.** Both are hard prerequisites. If either is
  not, stop and say so.
- **Their exact position and `à` wordings.** Read the build reports, not the briefs.
- **What `a2.18` actually shipped for `il y a`.** Its brief had a tense-availability
  problem and recommended escalating a resequence, so it may not have shipped what the
  brief planned.
- **Whether any unit should own multiple-pronoun order.** Nobody has decided; see the
  decision section. Checked against unit bodies and the twenty brief files, not against
  shipped `grammarIntroduced`, which is Corrections §7's second test and the one this
  brief could not run.
- Whether `pronoms-essentiels` is the right home for all three of seq 21 to 23, or whether
  `verbes` (870 published, `fr.a2.*` max .833) is. **Ledger decision**, and it should be
  one answer for the block.
- Whether the 195 `il y a` rows are usable as imports or are all owned by other themes'
  teaching.
- Baseline test count and current mission range. The 24-section shape is a convention that
  was never measured (ledger, a2.13 §0).

---

## What to report

Doctrine §F and Corrections §12, plus:

- **the slot-order decision, and the curriculum gap**, stated plainly. This is the report
  item that matters most: either a later A2 unit owns pronoun order or nobody does.
- **how you handled `il y a`** — shown as containing `y`, or left alone — and whether
  `a2.18`'s shipped treatment made that harder than this brief expects
- **the `en` guard shape that worked**, with the sentences in MUST_FIRE and MUST_NOT_FIRE,
  because it is the hardest guard in the pronoun block and the next author will copy it
- how much weight the obligatory `en` got against `y`, in missions
- whether the three quoted strings (`a2.06` position, `a2.24` `à`, the negation rule) were
  actually available and consistent, or which had drifted
