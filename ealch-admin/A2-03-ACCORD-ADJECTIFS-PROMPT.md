# Build a2.03 "L'accord des adjectifs"

Trail seq **10** of 32. The only non-verb lesson in batch 1, arriving after nine
paradigms. **Build it to feel different**: the section mix should visibly change, and a
learner reaching it should notice the level has moved on.

**Read first:** `ealch-admin/A2-BUILD-DOCTRINE.md`, `A1-BUILD-INVARIANTS.md`, then
**`a1.14` (basic adjectives), `a1.16` (placement) and `a1.13` (colours) as shipped**, all
three of which are your prerequisites in practice. Read `a1.14`'s build report before
anything else: its brief claimed four adjectives needed authoring when forty-four had
already been imported.

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
a2.03   seq 10
  title:  Adjective Agreement
  sub:    L'accord des adjectifs
  canDo:  Can agree any adjective in all four forms and spot the invariable ones
  prereqUnitIds: ['a1.14', 'a1.16']
  lessonIds:     []          <- first build, version starts at 1
```

Use it as it stands. Re-run `scripts/_a2_preflight.ts` if you are reading this
more than a few days after the date above.

---

## Pre-flight, and this one decides the shape of the lesson

```bash
cd ealch-admin
pnpm corpus:probe --unit a2.03 --theme adjectifs,couleurs
pnpm corpus:probe --words "heureux,heureuse,sportif,sportive,sérieux,actif,marron,orange,bleu clair"
pnpm corpus:probe --tokens "elle est heureuse,ils sont sportifs,une veste marron"
```

### What the probe already returned, measured 2026-08-12

**Mostly exists, and TWO of the brief's examples do not.**

```
heureux    2 rows   fr.a1.emotions.001 [uh-RUH]
heureuse   2 rows   fr.sons.muettes.053 [eu-REUZ]
sérieux    3 rows   fr.sons.adjectifs-essentiels.037    ⚠ fr.b2.valeurs.070 gender=m
actif      4 rows   fr.a1.animaux-domestiques.119       ⚠ fr.b2.affaires.046 gender=m
marron     1 row    fr.sons.couleurs.011 [mah-ROHⁿ]
orange     5 rows   fr.sons.consonnes.055               ⚠ ALL carry gender=f

sportif    0 rows   ABSENT
sportive   0 rows   ABSENT
```

**`orange` and `marron` are the invariable colours this lesson turns on, and
every `orange` row carries `gender`.** Importing one puts a gendered single-word
row in your itemIds and moves a1.03's printed figures. Read invariants §5 before
you decide; withdrawing is cheaper than arguing.

**THE THEME DECISION IS STILL OPEN AND IT IS YOURS.** `adjectifs` has **0 rows in
Postgres — the theme does not exist**, and neither does `adverbes`. The probe line
above asks for `--theme adjectifs,couleurs`; `couleurs` is real, `adjectifs` is
not. Ledger §3 says whoever builds a2.03 probes what `a1.14` and `a1.16` actually
used and amends the ledger *before* authoring. Creating a theme is product-visible
in the flashcard hub and the Den. **`a2.16` and `a2.17` both inherit whatever you
decide.**

**This is the block most likely to be wrong.** Three A1 adjective lessons have shipped
and a1.14's build found forty-four adjectives already imported against a brief claiming
four. The realistic outcome here is that **this lesson authors very little corpus and
does almost all of its work in the lesson body.** That is the correct outcome, not a
shortfall, and you should not invent authoring work to make the build feel substantial.

---

## The teaching problem

### Owns: the system, where A1 owned the instances

`a1.14` taught adjectives that agree. This teaches the **rule set**: the four-form grid,
the named families, and the invariable class.

```
              m.sg      f.sg        m.pl       f.pl
default       grand     grande      grands     grandes
-eux          heureux   heureuse    heureux    heureuses
-if           sportif   sportive    sportifs   sportives
invariable    marron    marron      marron     marron
```

An A2 learner should leave able to agree an adjective **they have never seen**, by
identifying which of the patterns it belongs to. That is the generalisation test from
doctrine §B.1, and it is what separates this from a1.14.

Note what the `-eux` row does: the masculine plural is identical to the masculine
singular. That is a genuine oddity and learners add an `s`.

### The reframe candidate

> **Every adjective has four forms. Your job is to work out which pattern it follows.**

Record what you rejected. "Adjectives agree with the noun" is a1.14's lesson, already
taught, and restating it as your reframe means the lesson has nothing new.

---

## The traps, and there are two worth full weight

**One: the invariable class looks like the rule failing.** `marron`, `orange`, and every
colour compound (`bleu clair`, `vert foncé`) do not agree at all, and a learner who has
just internalised the four-form grid reads them as errors.

**Teach them as a named category, not as exceptions**, and put a regular adjective beside
them so the contrast is visible. "These are the ones that never change" is a rule; "these
are irregular" is an apology.

**Two: `-eux` → `-euse` changes the sound.** Almost no other agreement in French does.
`grand`/`grande` changes the sound too (the `d` becomes audible), but `heureux`/
`heureuse` changes it more, and the `-if`/`-ive` pair likewise.

That makes this the **listening** lesson, and it connects straight back to `a2.01`'s
reframe: most French agreement is silent, and here is a family where it is not. Point
back at `a2.01` by unit id. It is the same bookend `a2.10` used and it is worth using
again — nine lessons apart, the learner will feel the level cohere.

---

## What is left to neighbours

- **Placement before or after the noun is `a1.16`, fully shipped.** Not your subject. One
  recap line and a pointer.
- **`beau`, `nouveau`, `vieux` and their `bel`/`nouvel`/`vieil` forms are `a2.16`
  (seq 11), immediately after.** They are the most famous irregular adjectives in French
  and the temptation is total. **Naming them as coming next is allowed. Teaching any of
  their forms is not.**
- **Colour vocabulary is `a1.13`.** You need colour compounds for the invariable class.
  Use them as evidence; do not teach colours.
- **Comparatives and superlatives** are `a2.08` (seq 32). Not here.
- **Adverb formation from the feminine adjective** is `a2.17` (seq 12), the next lesson
  but one, and it depends on this one. **Do not teach `-ment`**, but do author the
  feminine forms cleanly, because `a2.17` imports them. Say so in your corpus header.

---

## The corpus warning that has broken three A1 builds

**Any gendered single-word noun you author joins a1.03's measured ending population**,
and `a1-03-genre.test.ts` re-measures twenty printed figures on every run. Three separate
A1 builds broke on this (a1.11, a1.22, a1.23, a1.26).

If you author example nouns to hang adjectives on, **check through the real
`endingPopulation` and withdraw rather than argue.** Better: hang your adjectives on
nouns that already exist, which is what the probe is for.

Adjectives themselves are not nouns and do not join that population, but check what
shape existing adjective items take before adding any.

---

## Layout and scene

- **The four-form grid is the hero and it must be one screen.** Four patterns × four
  cells is exactly what `table` is for, and splitting it destroys the only thing the
  lesson has that a1.14 did not.
- **The invariable class needs a regular adjective visible beside it** in the same
  section, or it reads as a bug. **This is the second layout the test must assert.**
- `listening` for the `-eux`/`-euse` and `-if`/`-ive` sound changes.
- **Change the section mix deliberately.** After nine verb lessons, leaning on
  `tapTable`, `vocabThemes`, `useCases` and `scenario` rather than `table` and
  `groupDrill` is what makes the level feel like it moved. Say in your report what you
  did to make it feel different.
- A reference sheet with the four patterns. It is what a learner returns to during
  `a2.16` and `a2.17`. Verify on device that its contents render, not just its title.

**The scene:** the A2 register, and a written one is available if `a2.09`'s written scene
is far enough behind. Otherwise: someone describing a person, reaching for the feminine
of an adjective they only know in the masculine, and stalling in the middle of the
description.

---

## Quiz notes

- **`typeIn` is your strongest format**, because three of the four patterns are spelling
  changes and one is a refusal to change.
- **mcq with an unseen adjective** tests the Owns: which pattern does this follow.
- `listenChoose` has a real job for `-eux`/`-euse`, where the ear can genuinely do the
  work. Do not use it for the default pattern, where the change is often inaudible in
  the plural.
- **No ear question can test the `-eux` masculine plural**, which is identical to the
  singular. Say so in your report.
- Every question needs a noun with a known gender in the stem, or the agreement has no
  determined answer.

---

## Wiring

```
scripts/author-accord-adjectifs-batch.ts        content:accord-adjectifs
scripts/merge-accord-adjectifs-into-seed.ts
scripts/data/accord-adjectifs-{corpus,lesson,terms}.ts
ealch-v2/src/content/a2-03-accord.test.ts
```

**Check for a collision with the existing `author-adjectifs-batch.ts`** (a1.14). It
exists and it is not yours.

Ids from your ledger block. Row count after the apply. If the probe says the adjectives
already exist, your id block may go almost unused, and that is a good outcome to report.

---

## Your test

- **All four forms are present for at least one adjective of each of the three named
  families**, asserted cell by cell.
- **The invariable class is taught as a class**, with a regular adjective visible in the
  same section.
- **The `-eux`/`-euse` sound change is covered by a `listening` item**, asserted by item.
- **`beau`, `nouveau` and `vieux` forms are taught nowhere** in any production surface.
  `a2.16` is the next lesson and this is the guard that keeps it alive.
- **`-ment` is not taught**, reserving `a2.17`.
- **a1.03's printed ending figures still pass.** Run `a1-03-genre.test.ts` before and
  after your apply and report both.
- **The `-eux` masculine plural is asserted as identical to the singular**, with a comment
  saying it is deliberate. This is the assertion that stops a future author adding an `s`.
- **Every adjective you imported is imported, not re-authored**: assert the ids.

**Mutation-test**: add an `s` to a `-eux` masculine plural, agree `marron`, teach `bel`,
separate the invariable class from its regular neighbour.

---

## Settled before you start

- The identity block, above.
- `lessonIds: []`. First build, version 1.
- `sportif`/`sportive` are genuinely absent; everything else exists.
- `adjectifs` and `adverbes` are empty themes. Still 0 rows as of 2026-08-12.

## Still unverified

- **Which theme this lesson writes into.** `adjectifs` has 0 rows and does not exist;
  `couleurs` does. Probe what `a1.14` and `a1.16` actually used, decide, and amend the
  ledger. `a2.16` and `a2.17` are both waiting on the answer.
- Whether an UNGENDERED `orange` or `marron` row exists anywhere. All five `orange`
  rows carry `gender=f`, and invariants §5 makes a gendered single-word row radioactive.
- **The true state of the `adjectifs` theme.** a1.14's build report is the place to start
  and it is one build old. Everything this brief says about what you will author is a
  guess.
- Whether `marron` and `orange` exist as items and, if so, whether they are already
  marked invariable.
- Whether `a1.16` already teaches any of the four-form grid. If it does, this lesson is
  narrower than described and that goes in your report.
- Whether the feminine forms `a2.17` will need already exist.
- Baseline test count, a1.03's current printed figures, and the mission range.

---

## What to report

Doctrine §F, plus:

- **how much you actually authored versus imported.** If the answer is "almost nothing",
  say it plainly: that is the expected outcome and it is not a shortfall.
- **a1.03's printed ending figures before and after**, and any noun you withdrew
- **what you did to make this lesson feel different from nine verb lessons**, in section
  types, not adjectives
- confirmation that the feminine forms `a2.17` needs are clean and available
- confirmation that `beau`/`nouveau`/`vieux` appear nowhere, so `a2.16` still has a lesson
