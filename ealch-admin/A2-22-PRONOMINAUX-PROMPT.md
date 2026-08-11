# Build a2.22 "Les verbes pronominaux"

Trail seq **19** of 32. The only unit in batch 2 that declares a `themes` array in the
spine, and the one whose vocabulary is most likely already built.

**Read first:** `ealch-admin/A2-BUILD-DOCTRINE.md`, `A1-BUILD-INVARIANTS.md`, then
**`a1.25` (daily routine) as shipped** — it owns the `routine` theme you declare, and
**you must read it before authoring a single item** — plus **`a2.01`** (your prerequisite)
and **`a1.18` (negation)**, whose rule you extend.

---

## Identity

```
a2.22   Les verbes pronominaux                             seq 19
  sub:    present tense — se lever, se coucher, se laver
  canDo:  Can describe their routine with reflexive verbs in the present
  themes: ['routine']
  prereqUnitIds: ['a2.01']
```

Copy `title`, `sub` and `canDo` byte-for-byte from the probe's unit dump. **`themes` is
declared in the spine**, which is unusual: most A2 units declare none. Check what the
probe says the `routine` theme actually holds before assuming it is yours to fill.

---

## Pre-flight, and this decides how much you author

```bash
cd ealch-admin
pnpm corpus:probe --unit a2.22 --theme routine
pnpm corpus:probe --words "se lever,se coucher,se laver,s'habiller,se réveiller,se brosser,se dépêcher,s'appeler"
pnpm corpus:probe --tokens "je me lève,il se couche,nous nous levons,je ne me lève pas"
```

**`a1.25` shipped the daily routine lesson and it owns this theme.** The realistic outcome
is that the routine vocabulary exists and **you author grammar, not words.** That is the
correct outcome. Do not invent authoring work to make the build feel substantial.

Probe with the reflexive pronoun and without it: the corpus may hold `lever` bare, or
`se lever` framed, and which one decides your headword shape. That is a ledger decision
(doctrine §E) if it is not already settled.

---

## The teaching problem

### Owns: the extra pronoun, and the fact that it moves

```
je me lève          nous nous levons
tu te lèves         vous vous levez
il se lève          ils se lèvent
```

Two things at once, and learners get the first and miss the second:

1. **There is an extra pronoun**, and it sits between the subject and the verb.
2. **It changes with the subject.** It is not a fixed particle. `nous nous levons` has the
   same word twice doing two different jobs, which looks like a typo and is not.

The meaning underneath: **the action comes back to the subject.** `je lave la voiture` is
washing something; `je me lave` is washing myself. English marks this rarely and
inconsistently, so the learner has no instinct for when French requires it.

### The reframe candidate

> **The pronoun changes with the subject, because it is the subject.**

Record what you rejected. "Reflexive verbs take an extra pronoun" gives the learner a
fixed particle, which is exactly the error.

Note that `se lever` is also a stem-changing `-er` verb (`je me lève`), which is
**`a2.09`'s pattern** from seq 2. Name it. The learner is doing two rules at once here and
saying so is kinder than letting them think the stem change is part of being reflexive.

---

## The trap

**Negation wraps both the pronoun and the verb.**

```
Je me lève.          →  Je ne me lève pas.
```

Not `je me ne lève pas`. The `ne` goes before the whole cluster.

This is the third extension of `a1.18`'s rule in A2: `a2.19` extended it to two verbs,
`a2.05` and `a2.21` to the auxiliary, and you extend it to the pronoun cluster. **Quote
whichever wording those lessons settled on** and name them. By seq 19 the learner should
have one negation rule, not four.

Second trap: **`se` is not always reflexive.** `s'appeler` (to be called), `se souvenir`
(to remember), `se dépêcher` (to hurry) have no reflexive meaning at all: the pronoun is
just part of the verb. `je m'appelle` is the very first French sentence most learners
learn, and they have been saying a pronominal verb since a1.01 without knowing it.

**Open on that if you can.** It is a genuinely good moment: a structure the learner has
used for thirty lessons turns out to have been this all along.

---

## What is left to neighbours

- **Routine vocabulary is `a1.25`, shipped.** You use its nouns and time expressions; you
  do not build a routine vocabulary section. Import and assert the ids.
- **The passé composé of reflexives is `a2.23`** (seq 20, immediately after) and it is that
  lesson's entire subject. **Present tense only. Not one compound form.**
- **Object pronouns** (`me`, `te`, `se` as direct and indirect objects proper) are `a2.06`
  and `a2.24` (seq 21, 22). The forms overlap almost completely and the temptation to
  explain the system is real. **Do not.** Teach the reflexive use only, and flag the
  overlap in your report so `a2.06` knows.
- **Reciprocal uses** (`ils se parlent`, they talk to each other) are a real second sense
  and are in nobody's canDo. Decide, and report: one line as context is defensible,
  a mission is not.
- **Stem changes are `a2.09`, shipped.** Named, not re-taught.

---

## Layout and scene

- **The six forms belong on one screen**, with the pronoun column visually separate from
  the verb column, so the learner sees that two things are changing. **This is the layout
  the test must assert.**
- **`je lave la voiture` and `je me lave` belong side by side.** The meaning contrast is
  the second required layout, and without it the pronoun is a rule with no reason.
- **`je me lève` and `je ne me lève pas` adjacent**, with the `ne` visibly before the
  cluster.
- One `table`, one `tapTable`, then stop.
- **`nous nous levons` deserves its own moment.** The doubled word is the single most
  disbelieved form in the lesson.

**The scene:** the A2 register. Someone describing their morning who drops the pronoun
and says `je lève` — which means lifting something, not getting up — and the sentence
lands as a fragment about an object that was never named. Nobody corrects them; the
listener just waits for the rest.

---

## Quiz notes

- **`typeIn` is the format**, because both the pronoun and the verb ending must be
  produced and no recognition format tests that.
- **`errorSpot` for the negation position** (`je me ne lève pas`) and for the dropped
  pronoun.
- mcq for the reflexive-versus-not meaning choice, with the situation in the stem.
- `listenChoose` has a narrow job: `je me lève` against `je lève` is audible, and it is the
  error's own contrast. One or two items.
- **No question may use a compound tense.** That is `a2.23`.
- Every question needs a subject, because the pronoun depends on it.

---

## Wiring

```
scripts/author-pronominaux-batch.ts         content:pronominaux
scripts/merge-pronominaux-into-seed.ts
scripts/data/pronominaux-{corpus,lesson,terms}.ts
ealch-v2/src/content/a2-22-pronominaux.test.ts
```

**Check for a collision with the existing `author-routine-batch.ts` and
`author-routines-pathway-batch.ts`** (a1.25). Both exist and neither is yours.

Ids from your batch-2 ledger block. **`routine` is a populated theme**, so the `fr`
collision risk is high: no two non-sentence items in one theme may share an `fr`. Check
what `a1.25` placed before adding anything, and record every imported id in the corpus
header.

---

## Your test

- **The six forms appear in one section with the pronoun visibly separate**, asserted
  form by form.
- **`je lave` and `je me lave` appear as a meaning contrast in one section.**
- **The negation wording quoted from `a2.19` / `a2.05` / `a2.21` is verbatim.** Assert the
  string.
- **No compound tense appears anywhere**, reserving `a2.23`. Assert against every surface,
  not only production: a compound form in an example is still a leak here.
- **The non-reflexive `se` verbs are taught as a group** (`s'appeler` at minimum), asserted
  by name.
- **The `a2.09` stem-change reference is present.**
- **No routine vocabulary section exists**, and every routine noun referenced is an
  imported id, asserted by id.
- **Object pronouns are not explained**, scoped to production surfaces.
- Whichever way the reciprocal decision went, assert it.
- Import `hasPlainNasalFor` and assert respellings by name.

**Mutation-test**: put `ne` after the pronoun, drop a pronoun form, add a compound tense,
re-author a routine noun, explain the object pronoun system.

---

## UNVERIFIED

- **What `a1.25` actually placed in `routine`.** This brief assumes most of the vocabulary
  exists and that assumption is unmeasured. It is the first thing to probe.
- Whether the corpus stores reflexives bare or framed with `se`. Ledger decision if
  unsettled.
- **The settled negation wording.** Read `a2.19`, `a2.05` and `a2.21` as shipped; if they
  disagree with each other, report that rather than picking one silently.
- Whether the reciprocal sense belongs anywhere in the curriculum.
- Whether `a2.09` shipped its stem principle quotably.
- Baseline test count and mission range.

---

## What to report

Doctrine §F, plus:

- **how much you imported versus authored.** If the answer is "grammar only, no
  vocabulary", say it plainly; that is the expected outcome.
- **the reciprocal decision**
- **the agreement-free present-tense framing you shipped**, because `a2.23` builds
  directly on your wording
- whether the three earlier negation statements agreed with each other, or which differs
- confirmation that no compound form leaked, so `a2.23` still has a lesson
