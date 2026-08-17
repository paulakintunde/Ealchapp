# Build a2.35 "A2 Review"

Trail seq **35** of 35. The A2 capstone, and the last thing in the band.

**Build it last.** It quotes the other thirty-four units and cannot be built against
briefs. Every one of seq 1 to 34 must be shipped first.

**Read in order, then this file:** `A2-BUILD-DOCTRINE.md` · `A1-BUILD-INVARIANTS.md` ·
`A2-BRIEF-CORRECTIONS.md` · `A2-TAIL-AUDIT.md` (**§3 is your template**). Then read
**`scripts/data/bilan-lesson.ts`, `bilan-rounds.ts`, `bilan-exam.ts` and `bilan-spread.ts`**
— the A1 capstone as shipped. You are building its A2 equivalent, and its header explains
every decision you are about to repeat.

---

## Identity — measured 2026-08-17, use as it stands

```
a2.35   seq 35   level a2   track a2
  title:  A2 Review
  sub:    Bilan A2
  canDo:  Can hold a conversation about their life past and present using the whole A2
          band: verbs in three tenses, pronouns, and the everyday situations
  themes: null
  prereqUnitIds: ['a2.21', 'a2.25', 'a2.27', 'a2.32']
  lessonIds:     []          first build, version starts at 1
```

---

## This is two lessons, not one, and that is the design

`contentSections()` strips every `quiz` section from the flow and appends **one** quiz
page, found with `sections.find()`. A second quiz section is not an error; it is silently
never rendered. a1.30 hit this and split.

The split is also what makes the two halves useful, because they behave differently:

```
a2.35.l1   "Leçon par leçon"   34 rounds · 170 questions · remediation ON
             scene · goals · progressCheck · quiz · roundup          5 sections
a2.35.l2   "L'examen A2"       12 rounds ·  60 questions · exam conditions
             goals · progressCheck · quiz · roundup                  4 sections
```

- **l1 explains every answer as it happens and drills a failed round before the next one
  starts.** It is a diagnostic.
- **l2 does neither**, and can be sat again without re-answering the review.
- **`exam: true` goes on l2** (`schema.ts:1186`). a1.30.l2 sets it.

Match a1.30's shape exactly. Where you depart from it, say so in your report.

---

## The arithmetic

**34 rounds, one per unit, in `seq` order — not id order.** A2 ids and seq disagree, and
the teaching order is `seq`. a1.30's header makes the same point about a1.27 and a1.28.

Five questions per round, as a1.30 used, gives **170 questions** for l1. `a2.10` carries
two lessons; give the unit one round, not two, and cover `a2.10.l2` inside it.

**The exam stays at 12 rounds and 60 questions.** It is a fixed instrument, not a function
of unit count, and a 34-round exam is not an exam. Group its rounds by skill, not by unit.

**A named round is a diagnostic and an unnamed round is a test.** That is a1.30's central
finding and the reason for having both. Miss three of five in "The Passé Composé with
Être" and the report names the half hour to sit again. The cost is that a named round
stops testing retrieval: told the round is about `être`, nobody reaches for `avoir`. The
exam exists to recover that, so **its rounds must not name their units.**

---

## It owns no corpus

`itemIds` empty on both lessons, no `deckTranche`, no sheets. a1.30 ships exactly this.

A lesson that quotes thirty-four others owns none of their rows, and every one is already
released by the lesson that taught it. **Author no corpus items. Create no theme.**
`bilan` and `revision` both hold 0 rows and neither should be created.

If a question needs an item, reference the existing id. Your merge must carry every row
you reference or the cards render empty.

---

## What the exam covers, and it follows the canDo

The `canDo` names three things, and the exam's twelve rounds should divide along them
rather than by unit:

```
verbs in three tenses     present · passé composé · futur proche       seq 1-20
pronouns                  direct · indirect · y/en · demonstrative · possessive
                                                                       seq 21-23, 33-34
the everyday situations   restaurant · shopping · transport · doctor ·
                          hotel · work · school · technology           seq 24-31
```

Adjectives, adverbs, prepositions and comparatives (seq 10-14, 32) belong in the verb and
situation rounds as the material they modify, not as rounds of their own.

**Weight the tenses.** Five of the thirty-four units are the passé composé arc and it is
what an A2 learner is judged on.

---

## The format mix is measured, not a matter of taste

A2's shipped quizzes run **mcq 379 · typeIn 317 · errorSpot 166 · listenChoose 96 ·
tapSilent 17 · speak 17** (audit §2). A 230-question capstone that drifts mcq-heavy is
out of band and easier than the lessons it reviews. Hold roughly that ratio across both
lessons.

Hard limits that decide what you can ask (Corrections §5):

- **No typed, spotted or assembled surface can test an accent, a cedilla, a capital or a
  space.** `fold()` and `normalizeFr()` strip them. Only `mcq` and `listenChoose` can.
  Across thirty-four units you will want several of these; use mcq.
- **`fold()` keeps a final `-e` and `-s`**, so agreement, a doubled consonant and an
  inserted letter are testable by `typeIn`. Most of A2's hard content is exactly that.
- **No ear question may offer two members of one homophone group.** A2 is full of them:
  `parle/parles/parlent`, `allé/allée/allés/allées`, `cet/cette`, `les miens/les miennes`,
  `manger/mangé`. **Build the `HOMOPHONE_FORMS` list from all thirty-four lessons' own
  lists** and assert no option pair differs only by a member of it. This is the single
  most likely defect in a capstone and a sentence in a report cannot fail.
- **Every question needs a `why`.**

---

## Scene, and it belongs to l1 only

a1.30.l1 opens on a scene and l2 does not. Keep that.

The A2 register is a sentence that dies mid-way (doctrine §B.2), but a capstone scene has
a different job: it is the moment the learner realises how much they can now say. Prefer
someone holding a real exchange — past and present, a pronoun, a situation — and noticing
mid-conversation that they did not stop.

a1.30's reframes, as shipped:

```
l1   "A wrong answer names the half hour to sit again."
l2   "Nothing here tells you which lesson it came from."
```

Those are the two lessons' whole design in one sentence each. Write yours to do the same
work. Do not copy the strings.

---

## Boundaries

- **Teach nothing.** a1.30's previous version was a 19-section teaching lesson with 101
  new corpus items, and all of it was deleted on instruction: an assessment that also
  teaches is not an assessment. If a round exposes a gap, the report names the unit; it
  does not fill it.
- **Introduce no new vocabulary, no new grammar, no repair phrases.**
- **B1 content is not yours**, including the imperfect and any past-tense contrast.
- **Exam-band `ExamTask` content is a separate system** and is deliberately not in the
  seed cut. This is a lesson, not an exam task.

---

## Test

Assert, and mutation-test each:

- l1 has exactly one `quiz` section; l2 has exactly one. Neither has two.
- l1 has 34 rounds and every A2 unit `seq` 1 to 34 is named by exactly one round.
  **Assert unit by unit, not by count** — a count passes after somebody drops one.
- **No round in l2 names a unit.** That is the exam's whole property.
- `exam: true` on l2, absent on l1.
- `itemIds` is empty and no `deckTranche` exists on either lesson.
- Every question carries a `why`.
- The format mix is within a stated tolerance of the measured A2 ratio. Assert the
  tolerance, so a future edit that turns it into a multiple-choice test goes red.
- The `HOMOPHONE_FORMS` list is assembled from every A2 lesson's own list, and no option
  pair differs only by a member of it.
- No question turns on an accent, a cedilla, a capital or a space in a typed format.
- No new corpus item is authored.
- Widen the jargon walk to `intro` and `overview` on **both** lessons, run it over a
  `display()` walk, check the `-s` plural of every entry.
- **The house word boundary excludes `'`.** A capstone quoting thirty-four lessons is
  dense with `j'ai`, `c'est`, `qu'il`, `celui-ci`. Drop the apostrophe from the left
  boundary of every guard.

---

## Wiring

```
scripts/author-bilan-a2-batch.ts            content:bilan-a2
scripts/merge-bilan-a2-into-seed.ts
scripts/data/bilan-a2-{lesson,rounds,exam,spread}.ts
ealch-v2/src/content/a2-35-bilan.test.ts
```

Mirror a1.30's four-file split: the lesson bodies, the review rounds, the exam rounds, and
the spread check that proves coverage. **Check for a collision with the existing
`author-bilan-batch.ts`** (a1.30). It exists and it is not yours.

`den.tsx` opens `lessonIds[0]`, so **l1 must be first in `lessonIds`.** a1.30 and a2.10
both carry two lessons and the seq sort and hand-off work.

Do not hand-bump `seed.version`.

---

## Not measured, and worth one command each

- Whether `a2.10.l2` should get its own round or be folded into `a2.10`'s. This brief says
  fold it; confirm the round count you ship.
- Whether 170 questions renders acceptably on a Pixel 6 in one run. a1.30.l1 ships 145 and
  is the closest evidence. **If 170 is too long, cut to four questions per round (136)
  rather than dropping units** — coverage is the point.
- The baseline test count.

## Report

Doctrine §F and Corrections §12, plus:

- **the round count and question count you actually shipped**, and any unit you could not
  give a round
- **where the format mix landed** against the measured A2 ratio
- **anything you found stale in the thirty-four lessons while quoting them.** You are the
  first thing to read the whole band at once, and that is worth more than the lesson.
- whether 170 questions held up on a device
