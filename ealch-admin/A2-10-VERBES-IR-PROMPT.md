# Build a2.10 "Les verbes en -IR"

Trail seq **3** of 32.

**Read first:** `ealch-admin/A2-BUILD-DOCTRINE.md`, then `A1-BUILD-INVARIANTS.md`, then
**`a2.01` as shipped**, whose reframe you are about to invert. Read its `-corpus.ts`
header before anything else.

---

## Identity

```
a2.10   Les verbes en -IR                                  seq 3
  sub:    the finir model — and the -iss- in the plural
  canDo:  Can conjugate regular -ir verbs and hear where the -iss- belongs
  prereqUnitIds: ['a2.01']
```

Copy `title`, `sub` and `canDo` byte-for-byte from the probe's unit dump.

---

## Pre-flight

```bash
cd ealch-admin
pnpm corpus:probe --unit a2.10 --theme verbes,verbes-essentiels
pnpm corpus:probe --words "finir,choisir,réfléchir,grandir,réussir,remplir,obéir,partir,sortir,dormir,venir"
pnpm corpus:probe --tokens "il finit,ils finissent,je choisis"
```

---

## The teaching problem

The canDo says **hear**. That is unusual for a grammar unit and it is the whole design
brief: the listening missions are the lesson, not decoration around a table.

### Owns: the sound, inverted

`a2.01` taught that four of six forms are inaudible and the pronoun carries the person.
This lesson is the first place in the level where that stops being true.

```
il finit        one syllable ending
ils finissent   an extra syllable, clearly audible
```

`-iss-` **announces** the plural. It is the first singular/plural verb pair in the whole
product that a learner can hear apart without the pronoun. Open on that, name `a2.01` by
unit id, and let the learner notice that the two lessons say opposite things about the
same language. That contrast is worth more than the paradigm.

### The reframe candidate

> **The plural grows a syllable.**

Six words, runs mid-sentence, and it is exactly what the ear needs to catch. Record what
you rejected: "-ir verbs add -iss- in the plural" is the same fact stated as a spelling
rule, and it is weaker because the learner cannot act on it while listening.

---

## The trap

**Not every verb ending in `-ir` takes `-iss-`.** `partir`, `sortir`, `dormir`, `servir`,
`venir`, `tenir`, `ouvrir` do not, and several of them are more frequent than any verb
in your regular set. A learner who generalises produces `ils partissent`.

**Name the exception class. Do not conjugate it.** One mission, explicit about the
boundary: these look the same and follow a different model, and here is where you will
meet them. `venir` and `tenir` are `a2.02` (seq 5); the `partir`/`sortir`/`dormir` group
is not owned by any unit in batch 1 or 2, which is itself worth reporting.

Second trap: `je finis`, `tu finis`, `il finit` are three spellings and one sound, so
`a2.01`'s original reframe is still live in the singular. The lesson holds both facts:
**the singular hides the person, the plural announces itself.** That is a sharper
teaching than either half alone.

---

## What is left to neighbours

- **`venir`, `tenir`** and their family are `a2.02`, seq 5. Nameable, not conjugable.
- **The base endings** are `a2.01`. One recap mission.
- **`choisir` in a restaurant or shopping frame** belongs to `a2.07` and `a2.26`. Use it
  as an example sentence, never as a vocabulary or scenario section.

---

## Layout and scene

- **`il finit` and `ils finissent` belong on one screen**, adjacent, both audible with
  one tap each. **This is the layout the test must assert.** Split apart, the learner
  compares two recordings instead of two forms.
- One `table`, one `tapTable`, then stop.
- `listening` carries the Owns and should be the heaviest section type in the lesson.
  The learner hears a sentence with the pronoun masked or ambiguous and identifies
  singular or plural from the verb alone. That task is impossible in `a2.01` and
  possible here, which is the point.
- `dictation` works well: the singular triple (`finis`/`finis`/`finit`) is a spelling
  distinction the ear cannot make, the plural is one it can.

**The scene:** the doctrine's A2 register, a sentence that dies mid-way. Consider the
learner who says something in the singular and is understood to mean one person when
they meant several, and the plan quietly changes as a result. Nobody corrects them.

---

## Audio brief notes

`il finit` and `ils finissent` **must be one take, one voice**, recorded adjacently.
Recorded apart, the learner compares two performances instead of two forms and the
teaching is lost. Write that constraint into `desc`, because a recording constraint
becomes invisible the moment the clip is delivered.

---

## Quiz notes

- **`listenChoose` is your strongest format** and this is the only lesson in batch 1
  where that is true. The ear can do this job here.
- `typeIn` for the singular triple, where the ear cannot.
- Do not write an ear question about which singular form is correct: all three sound
  identical and the question would certify a bug. Say so in your report.
- Every question needs a subject or a context that fixes number.

---

## Wiring

```
scripts/author-verbes-ir-batch.ts       content:verbes-ir
scripts/merge-verbes-ir-into-seed.ts
scripts/data/verbes-ir-{corpus,lesson,terms}.ts
ealch-v2/src/content/a2-10-verbes-ir.test.ts
```

Ids from your ledger block. Row count after the apply, not just the highest id.

---

## Your test

- **`il finit` and `ils finissent` are presented as an audible contrast in one section.**
- **At least one `listening` item requires distinguishing them**, and the assertion
  names the item, not the count.
- **The non-`-iss-` class is named and no member is conjugated** in any production
  surface (decks, vocab, drills, quiz). Scope to production surfaces or the guard fires
  on legitimate context and gets deleted.
- **The singular triple is taught as a triple**, with the `a2.01` back-reference present.
- The regular verb set is asserted individually by name, not as a count.
- Import `hasPlainNasalFor`. `finissent` will meet the validator's false-positive path
  for a real /n/ after a vowel — check §3 of the invariants and assert the verified
  passing respelling by name, so a later "fix" goes red.

**Mutation-test**: separate the contrast, conjugate `partir`, drop the back-reference.

---

## UNVERIFIED

- Whether `finir` and `choisir` already exist as items. `author-verbes-batch.ts` claims
  `finir` and `choisir` were placed. Probe before authoring.
- Whether any unit in the curriculum owns `partir`/`sortir`/`dormir`. If none does, that
  is a curriculum gap and it goes in your report, not in your lesson.
- Whether `a2.01` shipped the reframe this brief assumes. Read the shipped lesson.
- Baseline test count and mission range.

---

## What to report

Doctrine §F, plus:

- **whether any unit owns the `partir`/`sortir`/`dormir` class.** If not, say so loudly:
  it is a hole in the level and this lesson is where it becomes visible.
- how you held both facts at once (singular hides, plural announces) without confusing
  the learner
- confirmation that the two contrast clips were briefed as one take
