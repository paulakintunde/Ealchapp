# a2.28 · At the Doctor's · Chez le médecin — build report

Trail seq 27. Unit 4 of the A2 situational band (seq 24 to 31). Built 2026-08-16
against seed v50 and Postgres `content_items`.

**Status: applied to Postgres and merged into `seed.json`. NOT published.**
Suite 4,319 of 4,319 green, both typechecks clean, `content:parity` green.

---

## §0. THE HEADLINE, which the prompt asked for by name

> "If the probe shows Postgres already holds a health corpus the seed does not
> show, your corpus plan collapses from ~75 authored rows to ~25 authored rows
> plus a long import list. That is a good outcome and you should report it as
> the headline."

**That is exactly what happened, and it is worse than the prompt guessed.**

```
theme               published in pg    in seed    a2 slice
symptomes                  334            0         193
systeme-de-sante           583            0         232
soins                      322            0           0
bien-etre                  319            1           0
corps                      319          319          20
```

**556 published a2 health rows, and the seed showed 20 of them.** The design
measured on the seed, concluded the health vocabulary did not exist, and planned
75 to 90 authored rows. The symptom lexicon was already finished:

- **nouns** la fièvre, la toux, un rhume, la douleur, la grippe, la fatigue, le
  vertige, la nausée, la blessure, l'allergie, le frisson, la migraine, la
  brûlure, la coupure, l'entorse, la piqûre, le médicament, le sirop, les
  gouttes, **le comprimé**, la pommade, le pansement
- **verbs** éternuer, vomir, saigner, tousser, transpirer, respirer, guérir,
  s'évanouir, se moucher, boiter, cracher
- **services** la pharmacie, l'infirmier, les urgences, le cabinet médical, le
  pharmacien, l'hôpital, la salle d'attente
- **roughly 110 symptom sentences**, `.038` to `.193`

**This unit authored 34 rows and imported 57.** That is the collapse, and it
changes three other units' assumptions about seed-scoped absence claims.

### The probe artifact that produced the false absence, for the third time

The prompt's own token probe returns `le comprimé  pg=0`. The row exists:
`fr.a2.symptomes.105`. `--tokens` searches **sentences**, and `.105` is a **word
headword**, so the probe cannot see it. That is the same probe-shape artifact
that produced a2.27's "0 rows use `y` for a place" and a2.26's `dépanneur` false
absence. **Three builds, three false absences, one cause.** A token probe proves
a phrase is not in a sentence; it proves nothing about a headword.

---

## §1. What shipped

```
a2.28.l1   « Chez le médecin »
  24 sections, 24 missions, 6 acts, ONE lesson, ONE quiz
  34 authored rows    30 in symptomes .194-.227,  4 in corps .021-.024
  57 imported ids, every one verified published before a row was written
  24 quiz questions, 6 rounds of 4
  symptomes: 334 -> 364 published;  corps a2: 20 -> 24
  seed.json: 9,812 -> 9,875 items, 68 -> 69 lessons
  acts: 3 / 3 / 8 / 3 / 3 / 4 missions   <- act 3 is the heaviest, as §B.5 requires
```

**Owns:** three French constructions where English has one cue, plus describing
around a missing symptom word.
**Reframe, carried verbatim in four sections and the roundup:** *English gives
you one shape for a symptom. French picks one of three, and the choice is made
before the word arrives.*

**The other party's voice is 70.6 percent** of authored rows (24 of 34) against a
band floor of 40. Here the floor was never a constraint: the doctor's voice at
`vous` **did not exist at this level in any published row**, so authoring it was
the entire job.

**The exam claim, carried verbatim as the collation requires:**

> This unit carries exam value by teaching what the exam tests (transactional
> reception at speed, a request in the right register, a structured 60-second
> turn), not by producing an ExamTask row and not by populating Scenario.exam.

Zero `ExamTask` rows and zero `Scenario.exam` values authored; the test asserts it.

---

## §2. What was genuinely missing, measured

**The doctor does not exist.** Of 193 published a2 `symptomes` rows, ten are
second-person or interrogative and **every one is `tu`** (`Tu as de la fièvre ?`,
`Tu as pris ton médicament ce matin ?`). That is a friend or a parent, not a
clinician. **Zero a2 rows are a doctor addressing a patient as `vous`.** Every
`vous` row in the health themes is b1 or b2 and carries a subjunctive or a
conditional this learner has not met.

**And the dosage does not exist at a2:**

| token | rows |
|---|---|
| `toutes les trois heures` | **0, at any level** |
| `ça vous lance` | 0 |
| `vous êtes allergique` | 0 |
| `trois fois par jour` | 3, all b1 or higher |
| `à jeun` | 2, both b1/b2 |
| `avant les repas` | 2, a1 `rp-sante` and b1 |

So the 34 authored rows are 14 doctor questions, 10 dosage and counter lines, 6
describe-around lines and 4 body reports. Nothing else was needed.

---

## §3. The device gate, and the fallback taken up front

**Band blocking step 4 requires a Pixel 6 check of two `scenario` sections
before this unit authors.** `scenario` repeats in **zero** shipped lessons: all
22 A2 lessons carry exactly one. The check could not be run in this build's
environment.

**Option A was chosen and the fallback was taken pre-emptively**, exactly as the
prompt specifies for the failed-check case:

- `s10-consult` is **one** scenario at **eleven turns**, ending on the
  prescription handed over and the dosage read back.
- `s20-pharma` is a **`listening`** carrying the pharmacist's five counter
  turns, and `s19-speak`'s practice covers the counter lines. That is the
  prompt's "a listening plus a practice on the counter lines", and it holds the
  lesson at 24 sections rather than 25.

Repeated `listening` needs no device check: it ships in six lessons already,
three of them at 3x. This lesson carries three.

**The cost, stated so it can be reversed cheaply.** The learner runs one
scripted encounter instead of two, and the pharmacy counter is met by ear and by
voice rather than by turn-taking. **If the device check later passes, promoting
`s20-pharma` back to a `scenario` is a section swap, not a redesign.** That is
what the fallback was designed to cost.

**Six other units are still waiting on that answer, and this build did not
provide it.** a2.29 and a2.32 are both exposed the same way.

---

## §4. Claims measured false

### 4.1 The design's whole absence premise

"No fever, cough, ordonnance, dosage or pharmacy vocabulary exists" is
comprehensively false. See §0.

### 4.2 Four of the prompt's own named imports

The prompt lists rows to "verify each against the probe first" and points at the
wrong themes for several. `le comprimé` is `fr.a2.symptomes.105`; `la pharmacie`
is `.072`; `le pharmacien` is `.108`; `l'infirmier` is `.073`. All were imported
from `symptomes` rather than authored or taken from where the prompt looked.

### 4.3 The theme re-map was already done

The prompt hands this unit a spine edit as its own work, with
`spine-drift.test.ts` behind it. `author-full-curriculum-spine.ts` already reads
`themes: ['symptomes', 'corps']`, and so do Postgres and the seed. **Nothing was
edited and the drift test needed no re-run** — the same finding a2.27 filed.
`sante` is still absent from `content_themes` and still at zero rows, which the
test asserts here as well as in a1.24's file so a failure points at the right unit.

### 4.4 `reading` questions are `{ q, a }`, not mcq

`validateLesson` rejected four `{ q, opts, correct, why }` questions on
`s16-ordonnance`. The `reading` type takes a free-form question and a written
answer, and its `glossary` entries are `{ word, en, note }`, not `{ fr, en }`.
Measured against `a1.10.l1`'s `s17-reading`.

### 4.5 A scene `break` cannot carry silence

`beats[5].wrong.ipa is required`. The scene's wrong move was authored as `...`
with an empty ipa, which the schema refuses. Silence is not an utterance it can
carry, so the wrong move became `Euh... je ne sais pas.`, which is what people
actually say and is a better contrast anyway.

---

## §5. Three findings the band should carry

### 5.1 THE PUBLISHED HEALTH CORPUS IS UNSPEAKABLE

The `practice` guard caught it: `fr.a2.symptomes.039`
(*J'ai de la fièvre et je tousse beaucoup*) is exactly the sentence the section
wants and **carries `dictation` and nothing else**. Measured wider: **of the 193
published a2 rows in `symptomes`, zero learner-voice sentences carry
`voiceflash`.**

The corpus was authored for reading and dictation and never for production. So a
`practice` section in this unit can only name rows **this build** authored. This
build does not widen another lesson's drill arrays, which is the line a2.26 drew
over three rows and a2.27 over two. **Pinned by a test**, so if the drill arrays
are ever widened the assertion fails and the import becomes available again.

### 5.2 Sixteen imported rows cannot be released as cards

A `deckTranche` release only produces a card if the row carries `flashcard`.
Sixteen of this unit's imports do not, including `le comprimé`, `la pommade`, `le
pharmacien`, `le pansement` and five learner reports. They are named in
`IMPORTED` as evidence and filtered out of every tranche by an explicit
`NOT_RELEASABLE` set rather than dropped silently.

**The published health corpus is complete and thinly drilled.** A unit that
imports heavily from it releases far fewer cards than its import list suggests,
and that is worth knowing before a2.29 and a2.31 plan theirs.

### 5.3 A pre-existing duplicate in `corps`, found and not created here

```
fr.a1.corps.007   J'ai mal à la tête.   sentence   flashcard
fr.a1.corps.011   J'ai mal à la tête.   sentence   flashcard
```

Identical `fr`, same theme, both carrying `flashcard`.
`flashhub-coverage.test.ts` treats two rows sharing an `fr` in one theme as one
card served twice, so **the hub serves this card twice today**. It is a1.24's
territory and this unit does not edit another lesson's rows. **Pinned at exactly
one duplicate group** so the count cannot grow quietly.

It surfaced because this build's first fold sweep walked the whole theme. That
was the wrong scope and it was corrected: the failing assertion is now scoped to
rows **this build** wrote, which is the "scope absence claims to the lesson,
never the bundle" rule arriving on schedule.

---

## §6. How `avoir mal à` stayed in the lesson without being taught

The prompt calls this the hardest judgement in the build and asks for the
wording, because the next situational unit with a strong prereq will copy it.

**a1.24 is this unit's own prereq** and owns `avoir mal à` **and** the article
contraction across five sections, with two of its own tests pinning them.

**`avoir mal à` appears in exactly one role: construction 1 of three, the one the
learner already has, used as the anchor that makes 2 and 3 visible.** The
sections where it appears, and the wording:

| section | how it appears |
|---|---|
| `s03-three` | Card 1 of three. Body: *"You already have this one. a1.24 built five sections on it and you are not going to walk them again. It is here because the other two only make sense against it."* Label: **`a1.24 owns this`** |
| `s04-slots` | The WHERE row's detail: *"a1.24 built this answer for you. What is new is only that somebody asked."* |
| `s05-sort` | Group 1's check asks why `J'ai mal partout` is still shape 1. The `why` says *"a1.24 taught what comes after it; here the point is only that the shape survives when the body part does not."* |
| `s06-pick` | One card of six, tipped *"a1.24 owns this shape and everything that follows it."* |
| `s15-errors` | `Ma tête fait mal` corrected, with *"a1.24 built five sections on this shape and this is the only place it is worth naming the error."* |
| `s23-quiz` r6 | One `errorSpot`, whose `why` says the question *"only asks you to reach for it, not to explain it."* |

**The contraction is explained nowhere**, and a regex list enforces it rather
than an intention: `à + le`, `au = à le`, `aux = à les`, the bare word
*contraction*, and the run `au, à la, aux`.

**A guard-scoping finding worth copying.** That guard first fired on
`grammarAssumed`, which reads *"the full article contraction au, à la, aux and à
l', which a1.24 owns"*. That is the field whose **entire job** is to declare what
a lesson leans on without teaching, and a guard that walks it pushes the next
author into deleting the honest declaration rather than the teaching. **Both the
apply script and the test now scope the ownership guards to learner-facing
surfaces** (sections, intro, overview) and leave `grammarAssumed` free, which is
also how the prompt words the assertion: *"no mission, no drill step, no quiz
why"*.

`depuis` got the same treatment. It is a2.18's, the doctor asks `depuis quand ?`
constantly, and `fr.a2.corps.024` (*Ça a commencé il y a trois jours*) exists
specifically so the slot can be filled without touching it. One quiz item tests
`pour` against `depuis`, which is a **lexical** choice and is one of the six
errors the prompt names for `s15-errors` by name.

---

## §7. The disclaimer card, as shipped

Quoted in full, because it is settled and it becomes the template the next
health-adjacent unit copies.

```
s14-notmedical   cardDeck   layer: 'more'   exactly one card
say: "One card, and then back to the French."

head:  Two different jobs
fr:    C'est combien de fois par jour ?
sub:   [seh kohⁿ-byehⁿ duh fwah par ZHOOR]
label: ask it at the counter

body:  This lesson teaches you the French for a dose, which is what lets you
       follow one. Deciding what dose to take is the pharmacist's job or the
       doctor's, and asking them is normal and expected. You have just proved
       you can hear the difference between three times a day and every three
       hours; that skill is what makes the question above worth asking, and
       asking it is what a French speaker does too.
```

**Where it landed and why exactly there.** Immediately after `s13-dosetrap` and
immediately before `s15-errors`, inside act 3 with `s12-dose` and `s13-dosetrap`.
The test asserts the neighbours **by id**, not by index, and separately asserts
that nothing sits between `s12-dose` and `s13-dosetrap`, which are one teaching
move in two parts.

**Did closing act 3 with it change how `s13-dosetrap` reads?** Yes, and for the
better. The gated drill ends on `Pas plus de six par jour` and
`C'est un traitement de sept jours`, so the learner arrives at the card having
just been made to notice they can mishear a ceiling. The card's first clause
lands as a consequence of the drill rather than as a preface to it. Putting it
before `s12-dose` would have been a warning about content not yet met.

**Whether `layer: 'more'` does what it should on a device is UNVERIFIED.** No
device check was run. The assertion the report can make is structural: it is
`layer: 'more'`, it names no `itemIds`, no quiz question refs it, none of its
strings is a scored option, and it is not in the dictée, `practice` or
`reviewDeck`. All five are pinned by tests.

**It is the only disclaimer.** No second one in the roundup, the intro or the
unit description, and a guard walks for the usual shapes outside the card.

**No drug is named anywhere in the lesson, at any dose.** A twelve-name word
list enforces it, and the label passage says `traitement` throughout.

---

## §8. What the missing `openPrompt` cost this unit

`s20-open` was dropped: `openPrompt` is not funded, and there is no timer
anywhere in the app for the countdown it wanted.

**The lesson therefore has no free-production surface.** `practice` renders the
speaking drill regardless of `skill` and reads back sentences the lesson already
supplied. `scenario` gives a model answer per turn and scores STT against `user`
plus `alts`. So the TEF Canada Expression orale section A payload rests entirely
on `s10-consult` and `s19-speak`, both scripted. **The learner is never asked to
produce an unscripted turn about a symptom the lesson did not name** — which is
precisely the thing the Owns claims to have taught them, since describing around
a missing word is by definition a move for words the lesson did not supply. That
is a real gap in this unit's exam value and it is the strongest single argument
for building `openPrompt` in the next band.

---

## §9. What was folded from the pharmacy, and what was dropped

**Folded in** (the pharmacy is three moves, not a second situation):

- `s11-counter`, the counter script as a deck
- `s12-dose` and `s13-dosetrap`, dosage reception and the gated trap
- `s16-ordonnance`, the label document
- `s20-pharma`, the counter by ear (which was to be the second scenario)

**Dropped:** a pharmacy-specific quiz round, pharmacy vocabulary beyond what
those five sections use, and everything about reimbursement mechanics. The
Quebec card names RAMQ, carte soleil, CLSC and Info-Santé as recognition only
and touches no reimbursement rule.

---

## §10. a1.03 went to v8, and this is the third consecutive build

The merge carried 41 imported rows and moved **five** printed ending counts:

```
-e  919 -> 928     -ment 21 -> 22     -ine 29 -> 30     -on 145 -> 146     -ent 30 -> 31
```

**Not one accuracy moved.** Of the 18 rows this build put into a1.03's
population, **zero were authored and all 18 were carried imports**.

**The shape is now the finding rather than the incident.** a2.26 moved five
counts, a2.27 moved eight, a2.28 moves five, and **in all three the authored
contribution was zero**. An authored-only guard cannot see this class of drift
and four builds have now proved it. Withdrawal did not fit here either:
`la fièvre`, `la toux`, `le médicament` and `un médecin` are the vocabulary a
doctor's-visit lesson exists to teach, and every one is named by a card.

---

## §11. Still open

- **The two-`scenario` device check.** Not run. The fallback is in place and the
  promotion back is a section swap. **a2.29 and a2.32 are blocked the same way.**
- **`layer: 'more'` on a device**, for the disclaimer card. Structural assertions
  only.
- **The `TrapAudioStep` hardcoded R line**, filed by a2.27: live in 41 shipped
  sections and now 43, since this lesson adds two stepped trapDrills with audio
  steps. Still not fixed, still needs its own commit.
- **`sante` is still in nobody's `SEED_CUT.themes`** and needs no action;
  `transport` still is, and that band-level diff is still unmade.
- Nothing published. `content:parity` is green.

---

## §12. Hand-off

**To a2.29 (Hôtel, seq 28).** You are exposed to the same two-`scenario` gate and
the same fallback is available. You own the register ladder; this unit used
`je voudrais` once as unanalysed lexis and named the conditional nowhere.

**To a2.31 and a2.35.** The reception bank: three `listening` sections, two of
them blind, every line authored to stand alone. `s20-pharma`'s five pharmacist
turns are a complete counter exchange liftable whole.

**To the whole band, three things worth copying:**

1. **A token probe cannot see a headword.** Three units have now filed a false
   absence with the same cause. Probe `--words` as well as `--tokens`, or read
   the theme.
2. **Scope an ownership guard to learner-facing surfaces.** `grammarAssumed`
   exists to declare what you lean on; a guard that walks it punishes honesty.
3. **The published corpus is drilled unevenly.** Check `voiceflash` and
   `flashcard` on every import BEFORE building a practice section or a tranche
   around it, not after the guard fires.

---

*This file is `.md` and therefore gitignored: `git add -f` to track it.*
