# B1 to C2 build sequence

Status 2026-09-22. B1 Unit 1 (b1.01 to b1.04) is drafted, and b1.01 has been seen on a Pixel 6 through the dev preview. The other 107 lessons follow the order below. Each lesson becomes its own app unit (`b1-l05` becomes `b1.05` / `b1.05.l1`).

## Rules every wave follows

- **English is always authored, never shown by default.** Every learner-facing French string carries English: an `en` field where the type has one, otherwise a final `EN: …` sentence. The lesson header's EN pill shows it (`ealch-v2/src/content/english.logic.ts`). This replaces the earlier "B2 drops the gloss, C1+ French only": the level decides how simple the French is, not whether English exists.
- **tu, fr-FR narration, French titles.** `Lesson.title` is French (`UNIT.sub`), and `UNIT.title` and `overview.titleEn` are English.
- **Three lesson shapes.** *Grammar*: the mission journey, as in b1.01 to b1.04. *Vocab*: the mission journey built around word families, collocations and a `reading`. *Workshop*: a text-and-task shape, not yet designed (see Phase 2).
- **One graded `task` per lesson,** at the end of the production act.
- **No text-only version bumps.** `Lesson.version` moves only when the section list changes. A bump for a text edit wipes every learner's mission checkmarks and XP for that lesson.
- **Every wave runs the same pipeline.** Author drafts, then a cross-lesson check, then Paul's review (first lesson of each new shape only), then import (batch, merge, publish dry-run), then a device check.

## Phase 0: enablers (before anything is imported)

1. **The `task` section in the schema.** Add the type to the `LessonSection` union and to act validation, since validators currently reject an act that names a task. Build the renderer (brief, response, feedback) and a lesson-grading path through the Examiner grader, with the offline fallback to self-check.
2. **A fr-FR coach voice.** The drafts point at `coach-fr-FR`, which does not exist. Either create it or map it to a real voice, and check whether narration needs a per-line language field.
3. **The bubble punctuation fix,** so French can use a spaced « ? » in scene bubbles.
4. **A B1 import pipeline.** One generic author-batch and merge script for B1+ lessons, not one per lesson as in A2. It must cover item upsert under `recits-au-passe` and the other themes, unit creation, the seed merge, and version guards that follow the no-text-bump rule.
5. **The a2.20 database row back to v3.** This is already fixed in the source file and the seed; the database still holds v4.
6. **Import and publish b1.01 to b1.04,** then remove the `DEV-PREVIEW-B101` scaffolding.

## Phase 1: B1 grammar, the proven shape (20 lessons, 5 waves of 4)

| Wave | Lessons | Topic |
|---|---|---|
| 1 | b1.05-08 | Futur simple (regular, irregular, after quand/dès que), conditionnel présent |
| 2 | b1.09-10, b1.11-12 | Polite requests, si clauses, qui/que, dont/où |
| 3 | b1.13, b1.14-16 | Lequel and ce qui/ce que, subjunctive formation, triggers, subjunctive vs infinitive |
| 4 | b1.17-20 | Pronoun order, passive, reported speech, advanced negation |
| 5 | b1.21-24 | Inversion, c'est vs il est, tout, même |

## Phase 2: the workshop shape (pilot 2 lessons, then Paul reviews)

- **b1.37 Reading strategy** and **b1.25 Register and formality.** One skills lesson and one register lesson, to settle the workshop shape before 40+ lessons depend on it.

## Phase 3: rest of B1 (15 lessons)

| Wave | Lessons | Shape |
|---|---|---|
| 6 | b1.30-32, b1.26 | Grammar (coordination, subordination, concession); workshop (tu vs vous) |
| 7 | b1.27-29, b1.33 | Vocab (body, animal/food, colour idioms; environment and society) |
| 8 | b1.34-36, b1.38 | Vocab (media, emotions, business); workshop (listening strategy) |
| 9 | b1.39 | Workshop (emails and letters): the **B1 capstone**, and the B1 PE remediation target |

## Phase 4: B2, exam gaps first (34 lessons)

Published B2 exam tasks currently route a failed skill to no lesson (the PE@b2, PO@b2 and CO@b2 gap). These three lessons close that gap, so they come first:

| Wave | Lessons | Why first |
|---|---|---|
| 10 | b2.23 Argumentation (PE), b2.25 Native-speed listening (CO), b2.26 Meetings and negotiation (PO), b2.22 Academic style | Closes the TEF/TCF/DELF B2 remediation routing gap |
| 11-12 | b2.01-08 | Timeline and moods (grammar) |
| 13-14 | b2.09-14, b2.15-16 | Compression, then logical relations begin |
| 15 | b2.17-21 | Logical relations (grammar) |
| 16 | b2.24, b2.27-29 | Critical reading, legal, medical, science (workshop) |
| 17 | b2.30-34 | Culture and variation (workshop and vocab) |

## Phase 5: enable c2 (before any C2 lesson)

Add `c2` to `LEVELS`, the DB level enum, the content tests and the Den tabs. This reverses the earlier "C2 = scoring band only" decision, as Paul decided.

## Phase 6: C1 (24 lessons)

| Wave | Lessons | Shape |
|---|---|---|
| 18 | c1.01-05 | c1.01 diagnostic (workshop); c1.02-05 recognition grammar |
| 19 | c1.06-09 | Discourse and rhetoric (workshop) |
| 20 | c1.10-11, c1.19-20 | Essays, reports, stylistic devices, reading between the lines |
| 21 | c1.12-15 | Abstract vocabulary 1 |
| 22 | c1.16-18, c1.21 | Abstract vocabulary 2, false friends, debates |
| 23 | c1.22-24 | Translation, professional communication, newspaper analysis |

## Phase 7: C2 (14 lessons)

| Wave | Lessons |
|---|---|
| 24 | c2.01-04 |
| 25 | c2.05-08 (c2.07 poetry is optional enrichment) |
| 26 | c2.09-12 |
| 27 | c2.13-14, the mastery portfolio capstone |

## Scale and cost

- 107 lessons in 27 waves. Each lesson takes one author agent plus one alignment pass, about 215 agent dispatches in all. That is past the workflow threshold, so Phases 1, 3, 4, 6 and 7 should run as workflows (author, then cross-check, then align), with the Phase 0 pipeline doing the imports.
- The account's usage limit stopped the pilot once. Four lessons per wave fits inside one session window; running more at once risks stopped agents.
- Paul reviews: Phase 2 (workshop shape) is a hard stop. Each later phase gets a sampled review of one lesson per wave.
