# B2 build log and plan

The resume point for B2, started 2026-09-27 the day B1 finished (v76). A cleared
session reads THIS file, then `../b1/B1-BUILD-PLAYBOOK.md` and
`../b1/B1-WORKSHOP-AND-VOCAB-SHAPES.md`, and can carry on. B2 reuses the B1
factory whole: same files per lesson, same act/quiz/drill/sheet/task shape, same
validators, same house rules. This file records only what is DIFFERENT at B2.

## The 34 lessons (Paul's plan, 2026-09-22)

| # | Lesson | Shape |
|---|---|---|
| **Unit 1** | **Timeline control and advanced moods** | |
| b2.01 | Conditionnel passé: regret, reproach, unreal results, reported uncertainty | grammar |
| b2.02 | Past-unreal si clauses: si + plus-que-parfait → conditionnel passé | grammar |
| b2.03 | Mixed si clauses: causes and consequences across past and present | grammar |
| b2.04 | Subjonctif passé: prior completion after subjunctive triggers | grammar |
| b2.05 | Subjunctive vs indicative: assertion vs doubt, search, purpose, subjectivity | grammar |
| b2.06 | Plus-que-parfait: the past before a past, in narrative and reported speech | grammar |
| b2.07 | Futur antérieur: prior completion in the future, inference about the past | grammar |
| b2.08 | Passé simple recognition: literary forms to infinitives and narrative function | grammar (recognition) |
| **Unit 2** | **Compression and syntactic flexibility** | |
| b2.09 | Literary subjunctive recognition | grammar (recognition) |
| b2.10 | Nominalization: clauses to compact formal noun phrases | grammar |
| b2.11 | Emphatic pronouns: contrast, reinforce, disambiguate | grammar |
| b2.12 | Gérondif: manner, simultaneity, condition, cause, subject control | grammar |
| b2.13 | Present participle vs adjective | grammar |
| b2.14 | Advanced infinitive constructions | grammar |
| **Unit 3** | **Logical relations** | |
| b2.15 | Cause and consequence: grade certainty, avoid parce que/donc | grammar |
| b2.16 | Concession: indicative, subjunctive, noun or infinitive patterns | grammar |
| b2.17 | Purpose: pour, afin de, pour que, by subject and register | grammar |
| b2.18 | Time clauses: anteriority, simultaneity, posteriority, moods | grammar |
| b2.19 | Restriction: ne…que, seulement, à moins que, sauf si | grammar |
| b2.20 | Impersonal expressions: necessity, probability, evaluation, distance | grammar |
| b2.21 | Negation combinations: scope, no contradictory stacking | grammar |
| **Unit 4** | **Academic and critical performance** | |
| b2.22 | French academic style: unity, progression, cautious claims, cohesion | workshop |
| b2.23 | Argumentation and opinion: thesis, evidence, counterargument, rebuttal | workshop, **PE@b2 target** |
| b2.24 | Critical reading: claim, evidence, assumption, tone, stance | workshop, **CE@b2 target** |
| b2.25 | Native-speed listening: structure and stance, not transcription | workshop, **CO@b2 target** |
| **Unit 5** | **Professional and specialist domains** | |
| b2.26 | Business meetings and negotiation | workshop, **PO@b2 target** |
| b2.27 | Legal and administrative language | vocab / workshop |
| b2.28 | Medical French (care situations, no clinical expertise) | vocab / workshop |
| b2.29 | Science and technology for a non-specialist | vocab / workshop |
| **Unit 6** | **Culture, variation and nuance** | |
| b2.30 | Literature introduction: narrator, point of view, tone, effect | workshop |
| b2.31 | Regional French and accents (receptive, no caricature) | workshop |
| b2.32 | Verlan and modern slang: recognise, judge when not to use | vocab |
| b2.33 | Translation nuance: paraphrase, avoid calques | workshop |
| b2.34 | Proverbs and fixed expressions | vocab |

## Wave plan

Four or five lessons per wave (five agents at once is the most the session
limit has carried). Paul reviews at each gate on the Pixel, and **each gate is
followed by an import and publish**, as B1 did (v74, v75, v76), so learners get
B2 in slices and a bad batch is small.

| Wave | Lessons | Why this order |
|---|---|---|
| **0** | enablers (below) | nothing imports until the pipeline speaks B2 |
| 1 | b2.22 b2.23 b2.24 b2.25 b2.26 | **104 published B2 exam tasks route to no lesson** (CE 30, CO 39, PO 20, PE 15). These five close every skill. Also sets the B2 voice. |
| **GATE B2-1** | after 5 | Paul sets the B2 voice on these five, then import + publish |
| 2 | b2.01 b2.02 b2.03 b2.04 | Unit 1, conditional and subjunctive past |
| 3 | b2.05 b2.06 b2.07 b2.08 | Unit 1, moods and tenses |
| **GATE B2-2** | after 13 | review, import + publish |
| 4 | b2.09 b2.10 b2.11 b2.12 | Unit 2 (b2.11 waits on the a2.36 decision) |
| 5 | b2.13 b2.14 b2.15 b2.16 | Unit 2 end, Unit 3 start |
| 6 | b2.17 b2.18 b2.19 b2.20 b2.21 | Unit 3 |
| **GATE B2-3** | after 26 | review, import + publish |
| 7 | b2.27 b2.28 b2.29 b2.30 | specialist domains, literature |
| 8 | b2.31 b2.32 b2.33 b2.34 | variation and nuance |
| **GATE B2-4** | after 34 | B2 complete; import + publish |

## Wave 0: enablers, before the first B2 lesson

1. **Make the import pipeline band-aware.** It is B1-only today:
   `b1-import.logic.ts` writes every unit as `level: 'b1'` (`unitBody`), the
   floor checks look for `fr.b1` rows, `B1_SLUGS` is the only lesson list, and
   `_preview-b1.ts`, the three b1 house tests, `b1-import-readiness.ts` and
   `scratch/_app-checks-b1.mts` all read B1 only. Add a band (`--band b2`, a
   `B2_SLUGS` list in `data/b2/`), keep the B1 behaviour byte-identical, and
   prove it by re-running the B1 dry run (0 changes) before any B2 import.
2. **Route the exam skills.** Add `PE@b2 → b2.23`, `CE@b2 → b2.24`,
   `CO@b2 → b2.25`, `PO@b2 → b2.26` to `EXAM_PREP_TARGETS`
   (`ealch-v2/src/store/progress.logic.ts`) when those lessons publish.
3. **Ship the 80 MiB ceiling to phones.** Installs that predate the raise
   refuse any snapshot past 50 MiB (52.4 MB). v76 is 39.9 MB; B2 at B1 density
   adds ~0.3 MB per lesson, so the old ceiling is crossed around b2.30. The raise
   must reach users (OTA or binary) before then.
4. **Decide what B2 bundles in the app** (`SEED_CUT`). B1 is bundled (Paul,
   2026-09-27). Bundling B2 adds ~11 MB to the binary; not bundling it means B2
   arrives by download, which the paywall already implies (B2 is not a free
   band). A band must be all-in or all-out: a partial band draws a trail with
   holes.
5. **Settle a2.36 « Les pronoms toniques »** (drafted, never applied). b2.11
   emphatic pronouns assumes the stressed pronouns were taught.
6. **Art:** Paul makes the art himself in ChatGPT from each lesson's
   `-image-prompts.md` (about 370 images for B2). Give him the prompt links and
   save folders; do not use Fal.

## What is different at B2

- **The French stops being simplified.** B1 wrote "simple French instructions";
  B2 instructions and texts are natural French at B2 difficulty. English is
  STILL authored on every learner string (the EN pill hides it by default).
  The learner is still tu.
- **Build on B1, never re-teach it.** Many B2 lessons deepen a B1 one: b2.01-03
  (b1.08, b1.10), b2.05 (b1.15, b1.16), b2.15 (b1.31), b2.16 (b1.32), b2.21
  (b1.20), b2.24 (b1.37), b2.25 (b1.38), b2.22-23 (b1.39), b2.26 (b1.36), b2.34
  (b1.27-29). Act 1 or 2 names the B1 lesson in words (« la leçon 31 du B1 »),
  reuses its published rows by id, and then goes past it.
- **Recognition lessons** (b2.08 passé simple, b2.09 literary subjunctive):
  the learner recognises and maps, never produces. Quizzes test recognition; the
  task is a comprehension or rewrite task, not free production of the form.
- **Exam-target lessons** (b2.23-26) mirror the B2 exam grids (DELF B2, TEF/TCF
  NCLC 7-8) in their task rubric, as b1.39 mirrored B1 PE.
- **Ids:** `fr.b2.<theme>.1000` up, per theme, probed first; the level is part
  of the id, so compare full ids. Postgres holds 7,521 published b2 rows over 66
  themes and no b2 unit yet.
- **Cite by trail position** (« la leçon 23 du B2 »), never a raw id.

## How one wave runs (unchanged from B1)

1. Set up themes in Postgres (probe, pick the home, sub-themes, claim a 1000+
   block) and record them in the ledger below.
2. One fresh agent per lesson, background, touching only its own four files.
   Each validates act by act and runs the app checks to 0.
3. Verify each lesson, update the status table, commit the wave.
4. Paul makes the art from the prompt files; register it with alt text.
5. At a gate: preview on the Pixel, Paul reviews.
6. Import: trial merge (whole app suite on a trial seed) → `--apply` → merge
   into the seed → both test suites → publish dry run → publish with Paul's OK.

## Status

| Lesson | Slug | Missions | Acts | Quiz | Drills | Sheets | Links | Items | Art | State |
|---|---|---|---|---|---|---|---|---|---|---|
| b2.01 to b2.34 | | | | | | | | | | NOT STARTED |

## Id ledger

| Theme | Block | Owner | Authored |
|---|---|---|---|
| (none claimed yet) | | | |
