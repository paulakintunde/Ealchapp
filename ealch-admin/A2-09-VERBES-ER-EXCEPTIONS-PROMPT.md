# Build a2.09 "Les verbes en -ER : exceptions"

Trail seq **2** of 32. Immediately after `a2.01`, and it exists because `a2.01` was made
to give up every stem-changing verb it wanted.

**Read first:** `ealch-admin/A2-BUILD-DOCTRINE.md`, then `A1-BUILD-INVARIANTS.md`, then
**`a2.01` as shipped** (`scripts/data/verbes-er-*.ts`). Read its `-corpus.ts` header
before anything else: it documents how its brief failed. Your paradigm is its paradigm
and you must not restate it differently.

---

## Identity

```
a2.09   Les verbes en -ER : exceptions                     seq 2
  sub:    -ger, -cer, -eler, -eter and the é_er patterns
  canDo:  Can spell the stem changes in manger, commencer, appeler and préférer without guessing
  prereqUnitIds: ['a2.01']
```

Copy `title`, `sub` and `canDo` byte-for-byte from the probe's unit dump.

---

## Pre-flight

```bash
cd ealch-admin
pnpm corpus:probe --unit a2.09 --theme verbes,verbes-essentiels
pnpm corpus:probe --words "manger,nager,voyager,commencer,placer,appeler,jeter,acheter,préférer,espérer,répéter,payer,essayer"
pnpm corpus:probe --tokens "nous mangeons,nous commençons,j'appelle,je préfère"
```

Accents matter to the probe. `préférer`, `espérer` and `répéter` will report absent if
you strip them.

---

## The teaching problem

Four patterns, presented as four lists, is the most forgettable lesson in the batch. The
learner memorises them for a day and then guesses forever.

### Owns: the spelling, and the reason underneath it

Every change in this lesson exists to keep a **sound** constant across the paradigm.

```
nous mangeons     the e keeps g soft before o        without it: /g/
nous commençons   the ç keeps c soft before o        without it: /k/
j'appelle         the ll marks the stressed è        the ending went silent
je préfère        é becomes è                        the ending went silent
```

Two mechanisms, not four. The `-ger`/`-cer` pair protects a consonant before a back
vowel. The `-eler`/`-eter`/`é_er` group responds to the stress landing on the stem,
which happens exactly when the ending goes silent — the fact `a2.01` just taught. Point
at `a2.01` by unit id. This is the second lesson in the level and the learner should
already be seeing that the pieces connect.

Taught as one principle with four outputs, this is the lesson that makes a learner trust
French spelling. Taught as four lists, it is a page of a grammar book.

### The reframe candidate

> **The spelling changes so the sound does not.**

Record what you rejected. "Some -er verbs are irregular" is false and worth naming as
false: none of these verbs is irregular. Every one of them is doing exactly what the
regular system requires.

---

## The trap

**`-eler` against `-eter`.** `appeler` → `j'appelle` (double the consonant) but
`acheter` → `j'achète` (accent, no doubling). Same-shaped infinitives, two outputs, and
learners merge them. Worse, `jeter` → `je jette` doubles while `acheter` does not, so
the split is not predictable from the ending alone and has to be learnt per verb.

**Say that plainly.** A rule with a memorised exception list is honest teaching; a rule
that pretends to be complete and is not is how a learner decides the language is
arbitrary. This is your `trapDrill` and it should be the strongest one in the lesson.

Second trap: `-ger` and `-cer` change in the `nous` form only. That is exactly one cell
in six, and it is the cell spoken French rarely uses (`on` takes the `il` form). Which
means the learner meets this change mostly in **writing**. Say so, and connect it to the
`nous`/`on` statement `a2.01` shipped. Do not contradict that wording.

---

## What is left to neighbours

- **The base paradigm is `a2.01`.** One recap mission, no more. The endings are not
  your subject.
- **`payer`/`essayer` (the `-yer` y/i alternation)** is a fifth pattern the `sub` does
  not name. The `sub` is fixed and lists four. Decide whether `-yer` is taught as a
  fifth pattern anyway, mentioned as context, or left out entirely, and **report the
  decision**, because the `sub` will read as incomplete if you teach five.
- **`aller`** is not here. `a2.02`, seq 5.

---

## Layout and scene

- **`-eler` and `-eter` are a PAIR: two columns on one screen.** Separating them
  destroys the teaching, because the whole point is that identical-looking infinitives
  diverge. **This is the layout the test must assert.**
- One `table` showing all four patterns in one grid, with the `nous` cell highlighted
  for `-ger`/`-cer` and the singular cells for the others. The grid is where the "two
  mechanisms, not four" claim becomes visible.
- `trapDrill` for the `-eler`/`-eter` split.
- A reference sheet listing which verbs double and which take the accent. This is a
  lookup a learner genuinely returns to.

**The scene:** somebody writing, not speaking. This is the one lesson in batch 1 where
the failure is on the page: a message sent, a form filled, a word that came out looking
wrong and the reader paused over it. Keep the A2 register (nobody is corrected; the
moment just goes slightly wrong) and keep the beat structure from the doctrine.

---

## Quiz notes

- **`typeIn` is the format.** The entire lesson is a spelling distinction, and no ear
  question can test it.
- `listenChoose` has almost no job here, because the changes are largely inaudible in
  the `-ger`/`-cer` case and audible but unremarkable in the others. Use it once, for
  `je préfère` against `nous préférons`, where the vowel genuinely changes, or not at
  all. **Do not pad it.**
- Every stem-change question needs the infinitive in the stem and a subject pronoun.
  "`Nous ___` (commencer)" has one answer; "how do you spell commencer?" has none.
- Say which questions you wanted and could not write.

---

## Wiring

```
scripts/author-verbes-er-exceptions-batch.ts     content:verbes-er-exceptions
scripts/merge-verbes-er-exceptions-into-seed.ts
scripts/data/verbes-er-exceptions-{corpus,lesson,terms}.ts
ealch-v2/src/content/a2-09-er-exceptions.test.ts
```

Ids from your ledger block. Check the row count after the apply, not just the highest id.

---

## Your test

- **Each of the four patterns is taught with its sound-preservation reason present**,
  not just its form. Assert the reason strings, or the next author strips them as filler.
- **`-eler` and `-eter` appear as a contrast in one section**, both sides present.
- **`nous mangeons` and `nous commençons` are both present**, since the `nous` cell is
  the entire `-ger`/`-cer` teaching.
- **The `a2.01` back-reference exists**, so a future edit that cuts it goes red.
- The `-yer` decision is asserted whichever way it went.
- Import `hasPlainNasalFor` and assert respellings by name.

**Mutation-test**: break the `-eler`/`-eter` pairing, drop a pattern's reason string,
remove the back-reference. Each must go red.

---

## UNVERIFIED

- Whether any of these verbs already exist as corpus items. `a2.01` was told eight
  infinitives were pre-placed; yours may be among them. Probe.
- Whether `a2.01` shipped with the `nous`/`on` wording this brief assumes. Read the
  shipped lesson, not this file.
- Whether the `-yer` pattern is wanted at all. Nobody has decided.
- Baseline test count and current mission range.

---

## What to report

Doctrine §F, plus:

- **the `-yer` decision** and its effect on how the `sub` reads
- whether "two mechanisms, not four" survived contact with the real verb lists
- which verbs you had to name as memorised exceptions rather than derived
- confirmation that you did not restate `a2.01`'s paradigm differently from `a2.01`
