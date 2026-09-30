# C1 build plan

Drafted 2026-09-30, while B2 wave 6 was being written, so C1 can start the day B2
completes (gate B2-4). NOTHING here is built yet. The factory is B1's and B2's
unchanged: read `../b2/B2-BUILD-LOG.md` (what B2 changed), then
`../b1/B1-BUILD-PLAYBOOK.md`. This file records only what is different at C1, the
id homes, the pack layout and the decisions Paul has to make first (end of file).

## The 24 lessons (Paul's plan, 2026-09-22)

Shape: **G** grammar (mission journey), **R** recognition (spot, map,
understand; never asks for production), **W** workshop (text and task), **V**
vocab (mission journey around word families). "Builds on" names the published
lessons a C1 act 1 or 2 must cite by trail position and go past, never re-teach.

| # | Lesson | Shape | Builds on | Exam target |
|---|---|---|---|---|
| **Unit 1** | **Expert grammar as interpretation** | | | |
| c1.01 | C1 grammar overview: diagnose gaps, productive priorities vs recognition-only forms | W (diagnostic) | all of B2 | |
| c1.02 | Passé antérieur: its sequence function in literary narrative | R | b2.08 (passé simple), b2.01 | |
| c1.03 | Literary subjunctive tenses: tense agreement and stylistic effect | R | **b2.09** (see decision 1) | |
| c1.04 | Advanced relative clauses: complex antecedents, prepositions, embedded reference | G | b1.11-13 (qui/que, dont/où, lequel) | |
| c1.05 | Ellipsis and anaphora: track omitted and substituted material | G | b2.11, b2.10 | |
| **Unit 2** | **Discourse and rhetoric** | | | |
| c1.06 | Hedging and modality: certainty, obligation, distance, politeness | W | **b2.20**, b2.22 (see decision 1) | |
| c1.07 | Expert discourse markers: progression, reframing, concession, consequence, closure | W | **b2.15, b2.16**, b1.30-32 | |
| c1.08 | Rhetoric and persuasion: ethos, logos, pathos, framing, analogy, anticipation | W | b2.23 | |
| c1.09 | Debate and formal oral expression: exposé, floor, objections, reformulation | W | b2.26, b2.23 | **PO@c1** (none published yet) |
| **Unit 3** | **Advanced writing** | | | |
| c1.10 | Academic essays: a real problem question, dialectical or thematic plan, transitions | W | **b2.22, b2.23** | **PE@c1** (none published yet) |
| c1.11 | Formal reports: report, minutes, case analysis, recommendation | W | b1.39, b2.22 | |
| **Unit 4** | **Culture and abstract vocabulary** | | | |
| c1.12 | Philosophy vocabulary: abstract concepts, precisely, without name-dropping | V | | |
| c1.13 | French history and culture: frequent references, literacy not agreement | W | | |
| c1.14 | Film, literature and arts: from reaction to analysis through form | W | b2.30 | |
| c1.15 | Abstract vocabulary 1: justice, freedom, identity, power | V | | |
| c1.16 | Abstract vocabulary 2: memory, truth, beauty, ethics | V | | |
| c1.17 | Advanced synonyms and antonyms: intensity, register, connotation, collocation | V | b1.25 (registers) | |
| c1.18 | False friends: frequent high-level calques | V | b2.33 | |
| **Unit 5** | **Interpretation and mediation** (name proposed: Paul's list gives none) | | | |
| c1.19 | Stylistic devices: explain the effect, not only the name | W | b2.30 | |
| c1.20 | Reading between the lines: stance, irony, presupposition, omission | W | b2.24 | **CE@c1** (6 tasks published) |
| c1.21 | Debates and interviews: turn-taking, interruption, fillers, allusion | W | b2.25 | **CO@c1** (6 tasks published) |
| c1.22 | Translating complex ideas: meaning, tone and structure by reformulation | W | b2.33 | |
| c1.23 | Professional communication: meetings, negotiation, presentations, tactful writing | W | **b2.26** (see decision 1) | |
| c1.24 | Newspaper analysis: report, editorial, column, framing, loaded wording | W | b2.24, b1.34 | |

C1 is **17 workshops, 5 vocab, 2 recognition and 2 grammar** lessons: the reverse
of B2's grammar-first balance. The workshop shape (b1.37, b2.22-26) is the one
that carries it; no new section type is needed.

## Wave plan (proposed)

As at B2: four or five lessons per wave, and each gate is followed by an import
and a publish, so learners get C1 in slices.

| Wave | Lessons | Why this order |
|---|---|---|
| **0** | enablers (below) | nothing imports until the pipeline speaks C1 |
| 1 | c1.20 c1.21 c1.01 c1.24 | **12 published C1 exam tasks route to no lesson** (CE 6, CO 6). c1.20 and c1.21 close them; c1.01 is the diagnostic every other lesson links back to; c1.24 shares c1.20's reading method. Sets the C1 voice. |
| **GATE C1-1** | after 4 | Paul sets the C1 voice, then import + publish |
| 2 | c1.02 c1.03 c1.04 c1.05 | Unit 1, grammar as interpretation |
| 3 | c1.06 c1.07 c1.08 c1.09 | Unit 2, discourse and rhetoric |
| **GATE C1-2** | after 12 | review, import + publish |
| 4 | c1.10 c1.11 c1.19 c1.22 | writing, style, mediation |
| 5 | c1.12 c1.13 c1.14 c1.15 | culture and abstract vocabulary 1 |
| 6 | c1.16 c1.17 c1.18 c1.23 | abstract vocabulary 2, false friends, professional |
| **GATE C1-3** | after 24 | C1 complete; import + publish |

About 55 agent dispatches for authors and pre-reviewers, and about 270 images
(11 to 12 per lesson) for Paul.

## Wave 0: enablers, before the first C1 lesson

1. **The pipeline takes `--band c1`.** `Band` in `b1-import.logic.ts` is
   `'b1' | 'b2'`: add `'c1'`, a `C1_SLUGS` list, lessons loading from `data/c1/`,
   and `--band c1` in `b1-import.ts`, `b1-merge-into-seed.ts`, `b1-trial-merge.ts`,
   `scratch/_app-checks-b1.mts` and the three house tests. Prove B1 and B2
   unchanged by a full dry run of each (0 changes), as B2 wave 0 did for B1.
2. **Theme rows for the C1 themes.** Postgres holds 913 C1 items; 816 of them
   sit in five themes that have NO `content_themes` row
   (`francais-professionnel-avance` 165, `nuances-et-registres` 165,
   `discours-dexamen` 165, `culture-profonde` 161, `rhetorique` 160). The
   importer and the sub-theme step both expect a row. Create the five (domain,
   title, range b2-c1 or c1-c2), with Paul's OK, before wave 1.
3. **Route the exam skills.** Add `CE@c1 → c1.20` and `CO@c1 → c1.21` to
   `EXAM_PREP_TARGETS` (`ealch-v2/src/store/progress.logic.ts`) when those
   lessons publish; `PE@c1 → c1.10` and `PO@c1 → c1.09` once C1 PE/PO tasks
   exist (none are published; DALF C1 papers would add them).
4. **The seed cut and the trail.** `seed-cut.config.ts` lists each published
   c1 unit, as it does b2; the core carries every c1 unit as a skeleton (the
   paywall outline) and the c1 pack carries the bodies. The Den's C1 tab shows
   its units once the first ones publish; check it on the Pixel at gate C1-1.
5. **Art:** Paul draws it in ChatGPT from each lesson's `-image-prompts.md`, as
   at B2. No Fal.

## Id homes (proposed; probe before claiming, as at B2)

Ids are `fr.c1.<theme>.<n>`. The existing C1 rows use 1 to 165 in every theme,
so C1 lessons claim **blocks of 200 from 1000**, one block per lesson, never a
number used at another level of the same theme (the B2 rule).

| Lesson(s) | Theme (existing C1 rows) | Block |
|---|---|---|
| c1.01 diagnostic | reuses published B2 rows by id; new rows in `discours-dexamen` | 1000-1199 |
| c1.02, c1.03 | `litterature` (b2.08/b2.09 use 1000-1399 at b2) | c1 1400-1599, 1600-1799 |
| c1.04, c1.05 | `langue-soignee` (b1/b2 use 1000-1799) | c1 1800-1999, 2000-2199 |
| c1.06, c1.17 | `nuances-et-registres` (165) | 1000-1199, 1200-1399 |
| c1.07 | `connecteurs-logiques` (b1/b2 use 1000-2599) | c1 2600-2799 |
| c1.08, c1.19 | `rhetorique` (160) | 1000-1199, 1200-1399 |
| c1.09, c1.21 | `discours-dexamen` (165) | 1200-1399, 1400-1599 |
| c1.10, c1.11 | `discours-dexamen` | 1600-1799, 1800-1999 |
| c1.12 | `philosophie` (10) | 1000-1199 |
| c1.13, c1.14 | `culture-profonde` (161) | 1000-1199, 1200-1399 |
| c1.15, c1.16 | `ethique` (6) / `philosophie` | 1000-1199 / 1200-1399 |
| c1.18, c1.22 | `faux-amis` (sons/a1 only today: widen to c1) | c1 1000-1199, 1200-1399 |
| c1.20, c1.24 | `strategies-de-comprehension` (b2.24/25 use 1400-1799) | c1 1800-1999, 2000-2199 |
| c1.23 | `francais-professionnel-avance` (165) | 1000-1199 |

## Pack layout

- **The c1 pack exists already** (`PACK_ORDER` a2, b1, b2, c1, c2, exam): today
  0 lessons and 913 items, 0.35 MiB, kept at v79. Nothing in the pack code
  changes for C1.
- **Size:** B2 at 21 lessons is 10.49 MiB, about 0.5 MiB a lesson; C1 at 24
  lessons comes to about 12.5 MiB, far under the 80 MiB ceiling. The legacy full
  snapshot is retired from v83, so its 50 MiB limit no longer applies.
- **Core growth:** 24 skeleton units, a few KB each; the free core stays about
  10 MiB.
- **Cross-band borrowing:** a C1 lesson that reuses a B2 row leaves that row in
  the b2 pack (a borrowed item goes DOWN to the lowest band that names it, never
  up). A device always fetches b2 before c1, so this is safe, and the publish
  check validates core + every band in fetch order. `pack-replay.ts` replays
  phones on older versions onto each publish, so a c1 pack that only validates
  beside a NEW b2 pack is caught before it ships.
- **Not bundled in the binary**, like B2: C1 arrives by download, which the
  paywall already implies (C1 is PREMIÈRE).

## What is different at C1

- **French at C1, English still authored.** Texts are authentic-length and
  unsimplified (300 to 500 words for reading, 2 to 4 minutes for listening), but
  every learner string still carries English behind the EN pill (the B1-C2
  sequence rule, which replaced "C1+ French only"). Learner is tu.
- **Workshops weigh the task.** Writing tasks run 250 to 400 words (DALF C1
  synthesis and essay length); the rubric adds nuance and precision of
  vocabulary and argument structure to the B2 criteria.
- **Recognition stays recognition** (c1.02, c1.03), as b2.08 and b2.09 did.
- **Cite by trail position** (« la leçon 20 du B2 »), never a raw id.

## Decisions for Paul before wave 1

1. **Overlap with B2.** Five C1 lessons sit on ground B2 now covers:
   - c1.03 (literary subjunctive) on b2.09;
   - c1.06 (hedging) on b2.20 and b2.22;
   - c1.07 (discourse markers) on b2.15 and b2.16;
   - c1.10 (essays) on b2.22 and b2.23;
   - c1.23 (professional communication) on b2.26.

   Proposed: keep all five, each refocused past its B2 lesson:
   - c1.03 on tense agreement in literary texts;
   - c1.06 on politeness and distance in speech;
   - c1.07 on reframing and closure;
   - c1.10 on the problem question and plan types;
   - c1.23 on tact in writing and presenting.

   Alternatively, fold c1.03 into c1.02 and take C1 to 23 lessons.
2. **Unit 5's name:** « Interprétation et médiation » is proposed.
3. **Wave 1 exam-first** (c1.20, c1.21 before Unit 1), as B2 did.
4. **The five missing theme rows** (wave 0, step 2): create them, and set their
   level ranges.
