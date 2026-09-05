# BLUEPRINT — DELF B2 tout public

**Version:** `delf-b2-2026.09`
**Exam body:** France Éducation international
**Compiled:** 2026-09-05 (phase E0)
**Contains:** structural facts only. No examples, no stems, no options, no passage or script text. See [README.md](README.md).

Store this version string in `ExamTask.formatVersion` on every task authored against it.

---

## 1. Format lineage — THERE ARE TWO FORMATS, AND WE BUILD THE NEW ONE

This is the most important fact in this file and the one that will be got wrong
by anyone who reads the wrong sample paper.

France Éducation international publishes three B2 tout public samples. They are
not three examples of one format. They are two of the old format and one of the
new, and the new one is a genuine break rather than a refresh:

| | Old format (samples 1 and 2) | **New format (sample 3)** |
|---|---|---|
| CO exercises | 2 | **3**, worth 9 / 9 / 7 |
| CO documents | 2 (one at 2 listenings, one at 1) | **5** (2 at two listenings, 3 at one) |
| CO audio ceiling | 8 minutes total | **15 minutes total** |
| CE exercises | 2 | **3**, worth 9 / 9 / 7 |
| Answer mode | MCQ **and** written answers, true/false with justification, "explain in your own words" | **multiple choice only** |
| PE | 1 task, argued position | unchanged |
| PO | 30 min prep, 20 min, monologue then debate | unchanged |

**The answer-mode change is the one that matters to us.** In the old format the
comprehension épreuves contained written production — completing tables, giving
information in the candidate's own words, justifying a true/false choice. Those
cannot be machine-marked, and an engine that only offers MCQ could not have
delivered that paper honestly.

The new format's comprehension is 100% multiple choice, verified by reading
every answer in sample 3's corrigé: all 40 are a letter. It therefore maps onto
the existing `co_mcq` / `ce_mcq` task types with no engine work at all.

**Author against the new format only.** The old samples are recorded here so the
difference is legible and so nobody calibrates against them by accident.

Re-check on any France Éducation international announcement, then bump the
version and run the staleness report.

---

## 2. Paper shape

Four épreuves. Three are collective and consecutive (2 h 30 total); Production
orale is individual and scheduled separately.

| Order | Épreuve | Skill | Questions / tasks | Duration | Marks | Marking |
|---|---|---|---|---|---|---|
| 1 | Compréhension de l'oral | CO | 20 questions / 3 exercises | ~30 min | /25 | machine |
| 2 | Compréhension des écrits | CE | 20 questions / 3 exercises | 60 min | /25 | machine |
| 3 | Production écrite | PE | 1 task | 60 min | /25 | human |
| 4 | Production orale | PO | 1 task, two phases | 20 min + 30 min prep | /25 | human |

`ExamPaper.sections` must carry all four in this order.

**Pass mark: 50/100 overall, with a floor of 5/25 on each épreuve.** The floor is
a real property of the diploma, not a formality: a candidate who scores 60/100
with 4/25 on one épreuve has failed. Any score display we build has to show the
per-épreuve floor, or it will tell a candidate they passed when they did not.

---

## 3. The defining property: a fixed exercise shape, not a ramp

TCF is a slope and TEF is a set of blocks. **DELF B2 is neither.** It is a fixed
three-exercise shape repeated across both comprehension épreuves, and every item
sits at B2. There is no band ladder inside the paper.

Consequences for authoring:

- `QcmItem.band` is uniform. Unlike TCF, band is not the instrument here, so
  nothing is lost by it being constant — but it must still be present and it must
  be `b2` on every comprehension item.
- **The 9 / 9 / 7 weighting is the instrument.** Exercises 1 and 2 are the long
  documents and carry 9 points each; exercise 3 is the short-document exercise
  and carries 7. A paper that splits 8/8/9 is not this format.
- Item order within an exercise is not content, but exercise order is: exercise 3
  is the one-listening exercise, and moving it changes the difficulty of the
  paper.

### 3.1 Points per question are NOT uniform

Observed in sample 3: individual questions are worth 0.5, 1, 1.5, 2 or 2.5
points, summing to 9, 9 and 7. This is a published property of the paper and it
is visible to the candidate — each question prints its own value.

Our engine currently scores an item as right or wrong with equal weight. **This
is the one schema gap this format opens**, and it is listed in §9.

---

## 4. Compréhension de l'oral — 20 questions / ~30 min / 15 min of audio

| Exercise | Documents | Listenings | Questions | Marks |
|---|---|---|---|---|
| 1 | 1 long | 2 | 7 | 9 |
| 2 | 1 long | 2 | 7 | 9 |
| 3 | 3 short | 1 each | 6 (2 per document) | 7 |

Document types named on the paper: radio programme for exercises 1 and 2. The
old format named its types explicitly (exposé, conférence, discours,
documentaire, émission; then interview, bulletin d'informations); the new one is
looser on the page and the observed sample uses broadcast speech throughout.

**Total recorded duration must not exceed 15 minutes**, consignes excluded.

### 4.1 Timing model, taken from the supervisor's transcript

The recording carries its own instructions and pauses; the invigilator starts it
once and does not intervene. That makes the timings exact rather than advisory,
and they map onto `ExamPart` directly:

| | Exercises 1 and 2 | Exercise 3, per document |
|---|---|---|
| Read the questions | before first play | 15 s |
| Play | 1st | once |
| Pause | **60 s** | **20 s** |
| Play | 2nd | — |
| Pause | **30 s** | — |

`playCount` is therefore **2** for exercises 1 and 2 and **1** for exercise 3.
Note this is the first format in the pack to use `playCount: 2`; the TCF rule
"CO plays once, everywhere" is TCF's, and must not be generalised.

---

## 5. Compréhension des écrits — 20 questions / 60 min

| Exercise | Task named on the paper | Questions | Marks |
|---|---|---|---|
| 1 | Comprendre un texte informatif ou argumentatif | 7 | 9 |
| 2 | Comprendre un texte informatif ou argumentatif | 7 | 9 |
| 3 | Comprendre le point de vue d'un locuteur francophone | 6 | 7 |

**Exercise 3 is a different exercise wearing MCQ clothing.** The candidate reads
several short opinion pieces by named people and, for each statement, chooses
*which person said it*. The options are the speakers' names, not propositions.
It tests attribution across texts rather than comprehension within one.

This is representable today: it is an MCQ whose options happen to be names. It
needs the multi-stimulus `parts` shape, with the several opinion texts as the
stimulus and the attribution questions as the items.

---

## 6. Production écrite — 1 task / 60 min / 25 points

One task. The paper describes it as a personal argued position: a contribution
to a debate, a formal letter, or a critical article. The observed sample is a
formal letter to a public official contesting a decision, written from a stated
role.

**250 words minimum.** The length rule is enforced by the marking grid rather
than by rejection, and the grid is precise about it:

| Length | Length criterion |
|---|---|
| 225 words or more | full |
| 176 – 224 | 0.5 of 1 |
| 175 or fewer | 0 of 1 |

So the length element is worth **1 point inside the 5-point "Respect de la
consigne" criterion**, not a separate criterion and not a gate.

### 6.1 The published grid

Ten criteria, each scored 0 to 5 in half-point steps, raw total 50, reported out
of 25. Cited as a published descriptor set (see §10); our own rubric wording is
written fresh and must not reproduce it.

| Criterion | What it assesses |
|---|---|
| Respect de la consigne | situation, production type, minimum length |
| Correction sociolinguistique | register for the situation and addressee |
| Capacité à présenter des faits | clarity and precision about facts and events |
| Capacité à argumenter une prise de position | developing an argument, weighting points |
| Cohérence et cohésion | linking, fluency, layout conventions, punctuation |
| Étendue du vocabulaire | range, tolerating gaps filled by circumlocution |
| Maîtrise du vocabulaire | appropriacy; confusions allowed if communication holds |
| Maîtrise de l'orthographe | intelligible sustained writing; L1 influence tolerated |
| Choix des formes | good grammatical control, non-systematic errors |
| Degré d'élaboration des phrases | varied constructions used appropriately |

Two markers sign the grid. Double marking is the published expectation.

---

## 7. Production orale — 1 task, two phases / 20 min + 30 min prep

The candidate **draws two trigger documents at random and chooses one**. Thirty
minutes of preparation, then twenty minutes with the examiner, in two phases:

| Phase | Task | Duration | Criteria |
|---|---|---|---|
| 1 | Monologue suivi — défense d'un point de vue argumenté | **5 – 7 min** | 3 |
| 2 | Exercice en interaction — débat | **10 – 13 min** | 2 |
| — | Assessed across the whole épreuve | | 3 |

**The debate is the larger half, at roughly twice the monologue.** That is worth
saying plainly because the candidate-facing instruction buries it: it gives the
monologue an explicit "5 à 7 minutes" and describes the debate only as "si
nécessaire, vous défendrez votre point de vue". A candidate reading only that
page would prepare for the wrong épreuve, and so would we.

The trigger document is short and journalistic in the observed sample.

Both phases are ours to model: phase 1 is `po_monologue`, phase 2 is
`po_interaction` with an interlocutor bank — and the bank has to sustain 10 to 13
minutes of genuine pushback, which is far more than the TEF and TCF interaction
banks were built for. **The draw-two-choose-one step has no representation in our
schema** and is listed in §9.

### 7.1 The published grid

Eight criteria, each 0 to 5 in half-point steps, raw total 40, reported out of
25. Cited as a published descriptor set (see §10); our own rubric wording is
written fresh and must not reproduce it.

| Phase | Criterion |
|---|---|
| Monologue | Peut dégager le thème de réflexion et introduire le débat |
| Monologue | Peut présenter un point de vue en mettant en évidence des éléments significatifs et/ou des exemples pertinents |
| Monologue | Peut marquer clairement les relations entre les idées |
| Débat | Peut confirmer et nuancer ses idées et ses opinions, apporter des précisions |
| Débat | Peut réagir aux arguments et déclarations d'autrui pour défendre sa position |
| Whole | Lexique — étendue et maîtrise |
| Whole | Morphosyntaxe |
| Whole | Maîtrise du système phonologique |

Two examiners sign the grid, as with the written one.

---

## 8. Scoring

Each épreuve is out of 25, total out of 100. Pass is 50/100 **and** at least 5/25
on every épreuve.

There is no scaled-score conversion to model: unlike TCF's NCLC grid and TEF's
levels, DELF B2 is pass or fail against a fixed threshold, and the diploma is
lifelong. This makes the reporting simpler than either Canadian format — a mark
per épreuve, a total, and the floor.

---

## 9. Unresolved

1. **Per-question point values.** The format weights questions 0.5 to 2.5 and
   prints the value on the paper. Our `QcmItem` has no weight, and section
   scoring assumes equal items. Either add an optional weight to the item and
   teach the scorer to use it, or author every DELF paper with equal weights and
   accept that our mark is an approximation of a real one. **This is a decision,
   not an oversight, and it should be made before authoring rather than after.**
2. **Draw two, choose one** in Production orale. No schema representation. The
   simplest honest option is to author both trigger documents and let the
   candidate pick, which is also the more useful practice.
3. **Document type labels for CO.** The new format's cover page stops naming the
   document types the old one listed. Whether to hold to the old taxonomy is a
   calibration choice for `STANDARD-delf-b2.md`.

5. **The interaction bank must sustain 10 to 13 minutes.** Our TEF and TCF
   interlocutor banks answer a candidate's questions across roughly 3 minutes.
   The DELF debate is three to four times that and is adversarial rather than
   informational: the examiner pushes back on the candidate's position rather
   than supplying facts. A bank of seven answers will run dry. This is the
   largest piece of engine-adjacent work the format implies, and it is not a
   schema change.
4. **Exercise 3 of CE** needs its attribution shape confirmed against a second
   new-format sample before it is treated as fixed. Only one new-format sample
   is published.

---

## 10. Sources

All retrieved 2026-09-05 from `delfdalf.fr`, the France Éducation international
sample-paper site. Read for **format facts only**, per the firewall in
`EXAM-PACK-REDESIGN.md` §8.1–8.2. No item, passage, advert, script or image from
any of these reaches an authored paper.

**New format (authoritative):**
- `exemple-3-sujet-delf-b2-tp-document-candidat-comprehension-ecrite-orale-production-ecrite.pdf`
- `exemple-3-sujet-delf-b2-tp-document-correcteur-corrige.pdf`
- `exemple-3-sujet-delf-b2-tp-document-surveillant-transcription-documents-audio.pdf`
- `exemple-3-sujet-delf-b2-tp-audio-integrale-comprehension-orale.mp3`

**Old format (lineage only, do not calibrate against):**
- `exemple-1-sujet-complet-delf-b2-tous-publics-3.pdf` and its two audio files
- `exemple-2-…-candidat-comprehension-ecrite-orale-production-ecrite.pdf`
- `exemple-2-…-correcteur-corrige.pdf`
- `exemple-2-…-surveillant-transcription-documents-audio.pdf`
- `exemple-2-…-candidat-production-orale.pdf`
- `exemple-2-…-examinateur-production-orale.pdf`
- `exemple-2-…-audio-integrale-comprehension-orale.mp3`

**Grids:**
- `grille-evaluation-production-ecrite-delf-b2-tp.pdf`
- `grille-evaluation-production-orale-delf-b2-tp.pdf`

DELF is a registered trademark of France Éducation international. Named here
descriptively. No endorsement, affiliation or equivalence is claimed or implied.
