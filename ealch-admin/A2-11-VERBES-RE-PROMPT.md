# Build a2.11 "Les verbes en -RE"

Trail seq **4** of 32. Last of the three regular groups, and the one where the learner
has to stop adding letters.

**Read first:** `ealch-admin/A2-BUILD-DOCTRINE.md`, `A1-BUILD-INVARIANTS.md`, then
**`a2.01` and `a2.10` as shipped**. You are the third paradigm in four lessons and the
one most at risk of reading as a repeat.

---

## Identity

```
a2.11   Les verbes en -RE                                  seq 4
  sub:    the vendre model — and the bare il form
  canDo:  Can conjugate regular -re verbs, including the il form that takes no ending
  prereqUnitIds: ['a2.01']
```

Copy `title`, `sub` and `canDo` byte-for-byte from the probe's unit dump.

---

## Pre-flight

```bash
cd ealch-admin
pnpm corpus:probe --unit a2.11 --theme verbes,verbes-essentiels
pnpm corpus:probe --words "vendre,attendre,répondre,entendre,perdre,descendre,rendre,prendre,mettre"
pnpm corpus:probe --tokens "il vend,je vends,ils vendent,elle attend"
```

`author-verbes-batch.ts` claims `vendre`, `attendre` and `répondre` were already placed.
Confirm and import rather than authoring.

---

## The teaching problem

### Owns: the absence

`il vend` takes **no written ending at all.**

```
je vends       -s
tu vends       -s
il vend        nothing
nous vendons   -ons
vous vendez    -ez
ils vendent    -ent
```

After two lessons of adding letters to a stem, the learner has to remove one. They will
write `il vende`, or `il vends`, and both are wrong for the same reason: they are
applying a habit rather than a rule. The bare third-person singular is the one fact this
lesson exists to install, and the `sub` and the canDo both say so.

Everything else in the paradigm the learner can derive from `a2.01` and `a2.10`. Do not
give the derivable parts the weight.

### The reframe candidate

> **The il form takes nothing, and that is the ending.**

Record what you rejected. "-re verbs drop the ending in the third person" describes the
same fact but tells the learner to perform a deletion, which invites them to delete
elsewhere. The version above frames the absence as a positive form.

---

## The trap

**`je vends`, `tu vends`, `il vend` sound identical.** Three forms, one sound, and the
only thing separating them is spelling — so `a2.01`'s reframe returns here in its
sharpest form, and this is the strongest **dictée** candidate in batch 1.

Use it. A learner who can write the triple correctly from dictation has demonstrated the
Owns better than any quiz question can.

Second trap: **`prendre` and `mettre` look like regular `-re` verbs and are not.**
`prendre` on the `vendre` model produces `ils prendent`, which is wrong, and nothing in
a lesson that ignores them would have stopped it. They are `a2.15` (seq 9).

**Name them as exceptions in one mission. Conjugate neither.** Naming an exception is
allowed; teaching it is not. This is the pattern `a2.10` used for `partir` and it should
read the same way, deliberately.

---

## What is left to neighbours

- **`prendre`, `mettre`, `battre` and their compounds** are `a2.15`, seq 9. Named, not
  taught.
- **The endings** are `a2.01`. One recap mission.
- **`répondre à`** takes an indirect object, which is `a2.24` (seq 22). Use the verb
  freely; do not teach what `à` is doing there.
- **`descendre`** has a transitive/intransitive split that decides its auxiliary in the
  passé composé. That is `a2.21` (seq 18). Present tense only here.

---

## Layout and scene

- **The bare `il` form belongs on one screen beside a regular `-er` and `-ir` third
  person.** `il parle` / `il finit` / `il vend`, adjacent, is the entire lesson in three
  cells. **This is the layout the test must assert.**
- One `table`, one `tapTable`, then stop. You are the third paradigm in four lessons;
  restraint here is what stops the band reading as a reference document.
- **`dictation` should be the heaviest production section**, for the reason above. Check
  that every item you name carries the `dictation` drill, against Postgres and not the
  seed.
- A reference sheet is probably unnecessary: `a2.01`'s sheet should cover the ending set
  for all three groups. **Check whether it does, and extend it rather than making a
  second one.** Two competing sheets is worse than one incomplete sheet.

**The scene:** the A2 register. A written moment works well here again, but `a2.09`
already took the written scene, so prefer spoken: somebody waiting for an answer that
never lands because the speaker stalled on a form they thought they knew.

---

## Quiz notes

- **`typeIn` is your strongest format**, because the lesson is a written distinction the
  ear cannot make.
- `errorSpot` works unusually well here: show `il vende`, have the learner find it. It
  is the most likely real-world error and free-text is the only format that can catch a
  spurious letter.
- **Do not write an ear question about the singular triple.** All three are identical
  and the question would certify a bug. Say so in your report.
- Every question needs a subject pronoun in the stem.

---

## Wiring

```
scripts/author-verbes-re-batch.ts       content:verbes-re
scripts/merge-verbes-re-into-seed.ts
scripts/data/verbes-re-{corpus,lesson,terms}.ts
ealch-v2/src/content/a2-11-verbes-re.test.ts
```

Ids from your ledger block. Row count after the apply.

---

## Your test

- **`il vend` is taught as a bare form, with a regular `-er` and `-ir` third person
  visible beside it** in the same section.
- **`prendre` and `mettre` are named as exceptions and conjugated nowhere** in any
  production surface.
- **The dictée covers the `vends`/`vends`/`vend` triple**, asserted by item, not by
  count.
- Every dictée item carries the `dictation` drill.
- The regular verb set is asserted individually by name.
- Whichever way the reference-sheet decision went, assert it, so a future author does
  not create a second sheet.
- Import `hasPlainNasalFor`. `vendent`, `attendent`, `entendent` all carry a word-internal
  nasal the validator cannot see — check §3 of the invariants and assert the verified
  forms by name.

**Mutation-test**: give `il vend` an ending, conjugate `prendre`, drop the three-way
third-person comparison.

---

## UNVERIFIED

- Whether `vendre`, `attendre` and `répondre` already exist. The batch header says yes.
  Probe.
- Whether `a2.01` shipped a reference sheet covering all three ending sets. If it did
  not, decide and report.
- Whether any unit owns `descendre`'s auxiliary split. `a2.21` is the likely home, not
  confirmed.
- Baseline test count and mission range.

---

## What to report

Doctrine §F, plus:

- **the reference-sheet decision**: extended `a2.01`'s or made your own, and why
- how you kept the third paradigm in four lessons from reading as a repeat, in section
  terms, not adjectives
- confirmation that `prendre` and `mettre` are named and nowhere conjugated
