# Build a2.17 "Les adverbes"

Trail seq **12** of 32. The lesson that turns `a2.03`'s agreement work into something the
learner gets paid for.

**Read first:** `ealch-admin/A2-BUILD-DOCTRINE.md`, `A1-BUILD-INVARIANTS.md`, then
**`a2.03` as shipped** (your prerequisite, and the source of every feminine form you
need), and **`a1.18` (negation)**, because adverb placement and negation placement
interact and must not contradict each other.

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
a2.17   seq 12
  title:  Adverbs
  sub:    Les adverbes
  canDo:  Can build -ment adverbs, use the irregular ones, and place them correctly
  prereqUnitIds: ['a2.03']
  lessonIds:     []          <- first build, version starts at 1
```

Use it as it stands. Re-run `scripts/_a2_preflight.ts` if you are reading this
more than a few days after the date above.

---

## Pre-flight

```bash
cd ealch-admin
pnpm corpus:probe --unit a2.17 --theme adjectifs,adverbes
pnpm corpus:probe --words "lentement,rapidement,heureusement,vraiment,bien,mal,vite,souvent,toujours,évidemment,constamment"
pnpm corpus:probe --tokens "je mange souvent,il parle lentement,elle chante bien"
```

### What the probe already returned, measured 2026-08-12

**All eleven exist, and there is a whole `adverbes-essentiels` theme you can
import from.**

```
lentement      2 rows   fr.sons.adverbes-essentiels.001 [lahnt-MAHN]     ⚠ nasal
rapidement     2 rows   fr.sons.adverbes-essentiels.002 [ra-peed-MAHN]   ⚠ nasal
heureusement   2 rows   fr.sons.adverbes-essentiels.006 [uh-ruhz-MAHN]   ⚠ nasal
vraiment       2 rows   fr.sons.mots-essentiels.069 [vreh-MAHN]          ⚠ nasal
évidemment     1 row    fr.sons.adverbes-essentiels.018 [ay-vee-da-MAHN] ⚠ nasal
constamment    1 row    fr.sons.adverbes-essentiels.045 [kohns-ta-MAHN]  ⚠ TWO nasals
bien           4 rows   fr.sons.mots-essentiels.045 [BYAN]               ⚠ nasal
souvent        2 rows   fr.sons.mots-essentiels.056 [soo-VAHN]           ⚠ nasal
mal · vite · toujours   exist, no nasal
```

**EIGHT OF ELEVEN CARRY A BROKEN NASAL, and `-ment` guarantees it**: every
`-ment` adverb ends in the same nasal vowel. This is the largest single repair set
in the level. **Corrections §6 applies to all of them** — `lahnt-MAHN` is
token-final so the checker CAN see it, but `kohns-ta-MAHN` has a first nasal
followed by `s` inside the token and it cannot. **Split your repair table.**

The theme is `adverbes-essentiels`, which exists and holds rows. **`adverbes`
(no suffix) has 0 rows and does not exist** — do not create it.

`adverbes` may not exist as a theme. If it holds 0 rows in **both** Postgres and the
seed, it is dead and the answer is to place your items in an existing theme, not to
create it. Do not offer "create the theme" until the probe has said it is empty in
Postgres. This is a ledger decision.

---

## The teaching problem

### Owns: the derivation, and it is the payoff of the previous lesson but one

```
lent → lente → lentement
heureux → heureuse → heureusement
doux → douce → doucement
```

**The adverb is built from the feminine adjective, not the masculine.** A learner who did
`a2.03` has the feminine forms already and did not know what they were for. This lesson
tells them, and that is the single most satisfying connection available in batch 2.

Open on it. Name `a2.03` by unit id. The learner does not need new vocabulary to build
fifty adverbs; they need one derivation applied to a set they already own.

That is also the generalisation test from doctrine §B.1: **make them build an adverb from
an adjective the lesson never lists.**

### The reframe candidate

> **Take the feminine, add -ment.**

Six words, runs mid-sentence, and it is a procedure rather than a description. Record
what you rejected: "-ment is the French equivalent of -ly" is a translation that gives
the learner no way to produce the form.

---

## The traps, and there are three

**One: the irregulars are the frequent ones.** `bien`, `mal`, `vite` are the three
highest-frequency adverbs in the language and none of them is derived. A rule that
covers fifty adverbs and misses the three most used needs to say so out loud.
`bon → bien` and `mauvais → mal` also break the adjective/adverb pairing that English
speakers rely on, and `il chante bon` is a classic error.

**Two: `-ent` and `-ant` adjectives take `-emment` and `-amment`, and both are
pronounced /amɑ̃/.**

```
évident → évidemment      spelled with e, said with a
constant → constamment    spelled with a, said with a
```

Two spellings, one sound. That is the doctrine's recurring silent-distinction shape
(§B.7) and it connects straight back to `a2.01`. Point at it. This is your `listening`
item and your dictée item, and it is the only genuinely phonetic thing in the lesson.

**Three: placement.** French puts the adverb **after** the conjugated verb, where English
puts it before.

```
Je mange souvent au restaurant.        not: Je souvent mange...
```

The learner's instinct is wrong and it is wrong consistently, so drill it as a habit.

---

## The placement problem you must defer, and it is awkward

In compound tenses the short adverb goes **between the auxiliary and the participle**
(`j'ai bien mangé`). The passé composé is `a2.05`, seq 16, four lessons after you.

**You cannot teach that rule and you should not pretend it does not exist.** Options:

- teach placement for simple tenses only, and state plainly that compound tenses have
  their own rule which comes later
- teach it and accept that a learner meets it before they have the tense

**Take the first.** Name the deferral in one line so a learner who meets `j'ai bien
mangé` in the wild is not confused, and **flag in your report that `a2.05` inherits it**,
so `a2.05` knows to close the loop. Do not conjugate a compound tense anywhere.

---

## What is left to neighbours

- **Adjective agreement is `a2.03`**, shipped. You consume its feminine forms; you do not
  re-teach agreement.
- **Negation placement is `a1.18`**, shipped. `ne...pas` wraps the verb and an adverb sits
  outside it (`je ne mange pas souvent`). Show it if you need it; do not re-teach
  negation, and **do not contradict `a1.18`'s wording**.
- **Compound-tense placement is `a2.05`** (seq 16). Deferred, as above.
- **Comparative adverbs** (`plus vite`, `mieux`) are `a2.08` (seq 32). `mieux` is the
  comparative of `bien` and it is tempting because `bien` is here. Leave it.

---

## Layout and scene

- **The derivation belongs on one screen as a three-step chain**: masculine → feminine →
  adverb, for at least three adjectives, in one section. **This is the layout the test
  must assert.** Split across sections, the chain is invisible and the lesson becomes a
  vocabulary list of adverbs.
- **`évidemment` and `constamment` belong side by side, audible**, since two spellings and
  one sound is only teachable as a pair.
- `tapTable` fits placement well: a row per sentence, tap to hear where the adverb lands.
- `trapDrill` for the `bien`/`bon` confusion.

**The scene:** the A2 register. Someone who has the verb and the adverb and puts them in
English order, producing something that is understood but visibly foreign, and then
loses confidence mid-sentence. Prefer a stall over a correction, per the doctrine.

---

## Quiz notes

- **`typeIn` for the derivation** is the core format: give an adjective, require the
  adverb. Include at least two adjectives the lesson never lists.
- **`errorSpot` for placement**, because the wrong order is a whole-sentence error and
  free-text is the only format that catches it.
- **`listenChoose` for `-emment`/`-amment`**, where the ear proves the two spellings
  merge. This is also where a dictée earns its place: the learner must choose a spelling
  the sound cannot give them.
- `bien`/`bon` as an mcq with the situation in the stem.
- Every derivation question needs the adjective's gender available, or the learner cannot
  form the feminine.

---

## Wiring

```
scripts/author-adverbes-batch.ts        content:adverbes
scripts/merge-adverbes-into-seed.ts
scripts/data/adverbes-{corpus,lesson,terms}.ts
ealch-v2/src/content/a2-17-adverbes.test.ts
```

Ids from your batch-2 ledger block. **Your theme is a ledger decision** (see pre-flight).
Row count after the apply.

Adverbs are invariable and are not nouns, so they do not join a1.03's ending population.
Any example noun you author does.

---

## Your test

- **The three-step derivation chain appears in one section for at least three
  adjectives**, asserted as a chain, not as three separate strings.
- **`bien`, `mal` and `vite` are each taught as irregular**, asserted by name.
- **The `bien`/`bon` contrast is present**, with both sides in one section.
- **`évidemment` and `constamment` appear together**, and at least one `listening` item
  requires distinguishing them by spelling rather than by sound.
- **At least one production item derives an adverb from an adjective not otherwise in the
  lesson**, asserted by naming it and asserting its absence from the lesson's vocabulary.
- **No compound tense is conjugated anywhere**, and the deferral line exists.
- **Negation is not re-taught**, scoped to production surfaces.
- **`mieux` appears nowhere**, reserving `a2.08`.
- Import `hasPlainNasalFor`. `-ment` is a word-final nasal on every derived adverb in the
  lesson: check §3 of the invariants, settle one respelling convention for the suffix,
  and assert it, so a hundred items do not drift.

**Mutation-test**: break the derivation chain, regularise `bien`, conjugate a compound
tense, drop the unseen-adjective item.

---

## Settled before you start

- The identity block, above.
- `lessonIds: []`. First build, version 1.
- All eleven exist. `adverbes-essentiels` is a real theme with rows in it;
  `adverbes` is not and must not be created.
- Eight of the eleven carry a nasal that needs repairing, and `-ment` means every
  adverb you add will too.

## Still unverified

- Which theme this lesson WRITES into. `adverbes-essentiels` exists and holds rows;
  `adverbes` has 0 and must not be created. `a2.03` decides the adjective side.
- Whether any adverbs already exist scattered across other themes. `souvent`, `toujours`,
  `vite` and `bien` are frequent enough that A1 lessons may already carry them, in which
  case you import.
- Whether `a2.03` shipped the feminine forms this lesson consumes, and in what shape.
- Whether `a1.18`'s negation wording is compatible with what you say about placement.
- Baseline test count and mission range.

---

## What to report

Doctrine §F, plus:

- **the theme decision** and what it means for later adverb work
- **the `-ment` respelling convention you settled**, verbatim, since it applies to every
  derived adverb in the level
- **the compound-tense deferral**, flagged for `a2.05`
- whether the `a2.03` connection landed as a payoff or read as a prerequisite check
- which unseen adjective you used for the derivation test
