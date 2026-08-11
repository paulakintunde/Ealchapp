# Build a2.13 "Irréguliers 3 : vouloir, pouvoir, devoir"

Trail seq **7** of 32. The highest-value lesson in batch 1 for a learner who has to use
French this week: a modal plus an infinitive lets them say almost anything with one
conjugated verb.

**Read first:** `ealch-admin/A2-BUILD-DOCTRINE.md`, `A1-BUILD-INVARIANTS.md`, then
**`a2.02` as shipped** (your prerequisite), and **`a1.01` (salutations)**, because the
politeness half of this lesson is the only place in batch 1 where A1's social register
returns and it must not contradict what a1.01 taught.

---

## Identity

```
a2.13   Irréguliers 3 : vouloir, pouvoir, devoir           seq 7
  sub:    the modals — want, can, must + infinitive
  canDo:  Can say what they want, can and must do with a modal plus an infinitive
  prereqUnitIds: ['a2.02']
```

Copy `title`, `sub` and `canDo` byte-for-byte from the probe's unit dump.

---

## Pre-flight

```bash
cd ealch-admin
pnpm corpus:probe --unit a2.13 --theme verbes,verbes-essentiels
pnpm corpus:probe --words "vouloir,pouvoir,devoir,savoir"
pnpm corpus:probe --tokens "je veux,je voudrais,je peux,je dois,est-ce que je peux"
```

---

## The teaching problem

### Owns: the pattern that generalises

`[modal conjugated] + [any infinitive]` is the first structure in the level where the
learner plugs in a verb the lesson never taught them. Six lessons of conjugation have
been building toward a point where conjugation stops being necessary, and this is it.

**Build the missions so the learner does exactly that.** Hand them an infinitive from A1
vocabulary — a verb this lesson never lists — and make them produce the whole sentence.
That mission is the reason this lesson exists, and it should be the last one before the
quiz.

Doctrine §B.1: a mission that lists ten conjugated forms teaches nothing a table cannot.
This lesson is the clearest case of that in the batch.

### The reframe candidate

> **Conjugate one verb, and every other verb stays in its dictionary form.**

Record what you rejected. "Modals are followed by the infinitive" is the same fact as a
grammar statement, and the learner cannot act on it: it does not tell them that the
payoff is not having to conjugate.

---

## The trap

**Politeness.** `Je veux un café` is a demand. `Je voudrais un café` is a request. The
difference is not grammar, it is whether the interaction goes well, and it is the exact
register a1.01 established with *Bonjour is the price of entry*.

**`voudrais` is a conditional and you are not teaching the conditional.** Teach it as a
fixed polite form, say plainly that it is one and that its tense comes later, and do not
conjugate it beyond `je voudrais` and `nous voudrions` if you need a second person.
Naming a form as fixed is honest; letting the learner think it is a present tense is not.

Second trap: `pouvoir` covers permission, possibility and physical ability, and English
splits those across "can", "may" and "am able to". A learner asking permission with
`je peux` is correct; a learner who thinks `pouvoir` only means physical ability will
reach for something else. One mission on the three senses.

---

## What is left to neighbours

- **`savoir` also means "can", for a learned skill** (`je sais nager`, not `je peux
  nager`). That split is `a2.14` (seq 8), immediately after, and it is `a2.14`'s entire
  payload. **Do not pre-empt it.** `a2.14` declares this unit as its prerequisite
  precisely so it can bring `pouvoir` back as its contrast.
- **The conditional as a tense** is beyond A2 entirely.
- **`devoir` as "to owe"** (`je te dois dix euros`) is a real second sense and it is not
  in the canDo. One line as context at most.
- **`il faut`** is the impersonal obligation form and it is arguably the most frequent
  way French expresses "must". It is in no unit's canDo anywhere in A2. If you leave it
  out, say so; if you include it, it is one mission and it is context, not a fourth
  paradigm. **Report the decision either way** — this looks like a curriculum gap.

---

## Layout and scene

- **The three modals belong in one grid**, side by side, because their irregularity is
  the same shape (`veux/peux/dois`, `veut/peut/doit`, `veulent/peuvent/doivent`). Three
  separate tables hide the pattern; one grid shows it. **This is the layout the test
  must assert.**
- **`je veux` and `je voudrais` belong on one screen, two columns**, with the social
  consequence stated beside each. This is the second required contrast.
- `scenario` matters more here than in any other lesson in batch 1, because the whole
  claim is that the learner can now hold a real exchange. Put them in a shop, a station,
  a doorway: somewhere they must ask for something.
- `useCases` is a good fit for the `pouvoir` senses.

**The scene:** this is the one lesson in batch 1 where an A1-register scene is
defensible, because the failure genuinely is social. Prefer the A2 register anyway if
you can find it: someone who knows the word for the thing they want and cannot build the
sentence around it, so they point instead, and get the wrong item. Keep the doctrine's
beat structure.

---

## Quiz notes

- **`typeIn` with an unseen infinitive is the format that tests the Owns.** Include
  several: give a verb the lesson never taught and require the whole sentence.
- mcq for the `veux`/`voudrais` register choice, with the situation in the stem.
  "Which is polite?" has no answer; "You are ordering from a waiter you have never met"
  has one.
- `listenChoose` has a narrow job: `veux`/`veut` and `peux`/`peut` are homophone pairs
  that the ear cannot separate, so **do not use it to test them**. It would certify a
  bug. Say so in your report.
- Every modal question needs an infinitive in the frame.

---

## Wiring

```
scripts/author-modaux-batch.ts          content:modaux
scripts/merge-modaux-into-seed.ts
scripts/data/modaux-{corpus,lesson,terms}.ts
ealch-v2/src/content/a2-13-modaux.test.ts
```

Ids from your ledger block. Row count after the apply.

If you author sentences pairing a modal with an infinitive, those infinitives should be
**imported** from existing themes wherever possible, not re-authored. That is the whole
argument of the lesson and it should be true of the corpus too.

---

## Your test

- **Every modal is taught with an infinitive following it, never in isolation.** Assert
  this over the production surfaces: a bare conjugated modal in a deck teaches the wrong
  shape.
- **At least one production mission uses an infinitive not otherwise taught in the
  lesson**, asserted by naming the infinitive and asserting it appears nowhere in the
  lesson's own vocabulary.
- **`voudrais` is present and marked as a fixed form**, with `veux` visible beside it in
  the same section.
- **`savoir` is not taught anywhere** in any production surface. `a2.14` owns it.
- **The conditional is not conjugated.**
- The `il faut` decision is asserted whichever way it went.
- Import `hasPlainNasalFor`. `veulent`, `peuvent`, `doivent` need checking against §3.

**Mutation-test**: strip an infinitive from a modal frame, teach `savoir`, conjugate
`voudrais`, remove the unseen-infinitive mission.

---

## UNVERIFIED

- Whether `vouloir`, `pouvoir`, `devoir` already exist as items. Probe.
- **Whether any A2 unit owns `il faut`.** A scan of the spine suggests not. Unconfirmed,
  and it is the kind of gap that only shows up when somebody builds this lesson.
- Whether a1.01's politeness wording is compatible with what you write about
  `voudrais`. Read the shipped lesson, do not assume.
- Whether the A1 themes hold enough infinitives to import for the unseen-verb mission.
- Baseline test count and mission range.

---

## What to report

Doctrine §F, plus:

- **the `il faut` decision**, and whether it looks like a curriculum gap worth raising
- **which unseen infinitive you used** in the generalisation mission, and where it came
  from
- how you taught `voudrais` without teaching the conditional, in the words you shipped
- confirmation that `savoir` appears nowhere, so `a2.14` still has a lesson
