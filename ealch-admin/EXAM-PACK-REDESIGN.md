# Exam Pack Redesign — Research & Build Plan

**Status:** approved 2026-08-24. Decisions locked in §11. Build prompts in [EXAM-PACK-PHASE-PROMPTS.md](EXAM-PACK-PHASE-PROMPTS.md).
**Date:** 2026-08-24
**Scope:** the Examiner surface end to end — information architecture, content model, runner, grading, reporting, sourcing doctrine, and the production pipeline for 20 full mock papers per exam format.

---

## 1. What is being asked for

> The exam pack should look like a simulated exam, with the same structure for Speaking, Listening, Writing and Reading, for each exam type. Each exam type can have Exam 1 to 20, each exam having the 4 sections with full question structure. Sources will come from various places online and from the exam body and its affiliates. Questions will be rewritten, not verbatim, to have their own feel. The home structure currently narrows the exam by type (TEF Canada focused on Speaking, TCF Canada focused on Listening) and needs to be redesigned differently.

Restated as a target:

| Axis | Today | Target |
|---|---|---|
| Home entry | 3 chips, each captioned as if the format tested one skill | 3 formats, each a full paper with 4 épreuves |
| Papers per format | 1 (DELF B2 only, unpublished) | 20 |
| Sections per paper | 2 tasks, ad hoc | 4, always: CO, CE, EE, EO |
| Question structure | flat MCQ list, or a text box | the real paper's exercise blocks, counts and timings |
| Clock | none | per-section, matching the published format |
| Listening | none (no audio anywhere in the exam path) | real audio, single play, no rewind |
| Speaking | a text box | recorded speech |
| Result | a CEFR band guess per task | per-section score resolved to an NCLC estimate |

---

## 2. Current state — measured, not assumed

### 2.1 Content

Live database (project `ogbothupjcivwruesgsu`, tables `content_exam_tasks` / `content_exam_series`):

```
exam.delf_b2.blanc-01.ce_mcq.001    ce_mcq    CE  b2  600s   3 items   in_review
exam.delf_b2.blanc-01.pe_essay.001  pe_essay  PE  b2  2700s  0 items   in_review
series.delf_b2.blanc-01.1           delf_b2   blanc-01  seriesNo 1     in_review
```

That is the entire exam corpus. **Zero TEF Canada tasks. Zero TCF Canada tasks. Zero listening tasks. Zero speaking tasks.** Both rows are `in_review`, so no published snapshot carries any of it.

`ealch-v2/src/content/seed.json` (version 56) has no `examTasks` or `examSeries` keys at all — exam content is deliberately excluded from the seed cut and ships only via the network snapshot ([publish-content.ts:170-177](ealch-admin/scripts/publish-content.ts#L170-L177)).

Net: the Examiner is a working engine pointed at an empty shelf. Nothing below is a migration of existing content; it is a build.

### 2.2 Code

| File | What it does today |
|---|---|
| [app/home.tsx:517-538](ealch-v2/app/home.tsx#L517-L538) | Renders 3 chips from `EXAMS` + `EXAM_CHIP_FORMATS`, captioned by `T.examMeta[i]` |
| [src/i18n/strings.ts:723](ealch-v2/src/i18n/strings.ts#L723) | `examMeta: ['Speaking · 15 min · timed', 'Listening · single play', 'The examiner interrupts you']` |
| [app/exam.tsx](ealch-v2/app/exam.tsx) | Lists every `ExamSeries` for one format, labelled `FORMAT · seriesNo`, with a summed minute count |
| [app/exam-task.tsx](ealch-v2/app/exam-task.tsx) | Walks tasks linearly. Closed → MCQ list. Open → `TextInput` + LLM grade. Then a summary |
| [src/services/examGrader.ts](ealch-v2/src/services/examGrader.ts) | Proxy to the `grade-exam` Edge Function; never fabricates a band |
| [supabase/functions/grade-exam/index.ts](ealch-v2/supabase/functions/grade-exam/index.ts) | Rubric-grounded LLM grading, structured-output validated, own daily quota |
| [src/store/progress.logic.ts:1240-1285](ealch-v2/src/store/progress.logic.ts#L1240-L1285) | `decomposeExamMiss` (closed → SRS atoms), `dueExamSkills` (open → prep lesson) |

**The `examMeta` line is the exact thing the brief calls out.** It is index-aligned to the chip array and reads as a claim about what each exam *is*: TEF equals speaking, TCF equals listening, DELF equals an examiner interrupting you. Each caption is true of one épreuve of that exam and false of the exam as a whole.

### 2.3 The eight defects that block a credible simulation

1. **No clock.** `ExamTask.timingS` is required by the validator ("a task without a clock is a worksheet") and is read in exactly one place: `exam.tsx` sums it to print a minute count. No timer component exists anywhere in `src/components/`. Every mock is untimed.
2. **No audio.** `ExamTask` has no `audioRef` field. The B2 batch script says so outright: CO was skipped because "a listening task that is secretly text would be exactly the kind of dishonest surface this codebase's own rules forbid elsewhere."
3. **Speaking is typed.** `OPEN_TASK_TYPES` includes `po_monologue` and `po_interaction`, and the runner renders a `TextInput` for all of them. A PO score today measures typing.
4. **No sections.** `ExamSeries.taskIds` is a flat ordered list. Nothing groups tasks into CO/CE/EE/EO, and nothing enforces that all four exist.
5. **Series numbers cap at 5.** `EXAM_SERIES_ID_RE` is `series.<format>.<variant>.[1-5]`. Twenty papers per format cannot be expressed. Hard blocker.
6. **One band per task.** `ExamTask.level` is a single `ScoreBand`. TCF Canada CO/CE run A1 through C2 inside one 39-question épreuve; a whole-paper band cannot represent that, and NCLC estimation needs per-item difficulty.
7. **No score report.** `scoringMap` (`ScoringBandRule[]`) exists on the type, is stored in a column, and is never read by any screen. The runner reports pass/fail per task and an LLM band per open task. There is no per-section score and no NCLC number, which is the only number a Canada-immigration candidate cares about.
8. **The paid feature is not enforced.** `entitlement.logic.ts` defines `examiner` as a distinct product (`ACCESS_LEVEL_EXAM`), explicitly *not* granted by Première. Neither `exam.tsx` nor `exam-task.tsx` imports entitlement or calls `hasFeature`. The Examiner is currently free.

---

## 3. Format research — the blueprints

Everything in this section is **format metadata**: counts, durations, exercise types, score scales. It comes from the exam bodies' own public preparation pages and the IRCC equivalency grid. See §8 for why this, and only this, is what we take.

### 3.1 TEF Canada (CCI Paris Île-de-France / Le français des affaires)

Total ≈ 2h55, four compulsory épreuves, normally the same day for immigration.

**Compréhension orale — 40 questions, 40 minutes.** Official exercise breakdown:

| Block | Questions | Document type |
|---|---|---|
| A | 4 | conversations matched to drawings |
| B | 4 | public announcements |
| C | 6 | micro-trottoirs (street interviews) |
| D | 2 | radio chronicles |
| E | 6 | interviews |
| F | 1 | report |
| G | 10 | assorted documents |

Note: the published breakdown sums to 33 of 40. The remaining 7 are not itemised on the public page. Treat the table as the *shape* to reproduce, not a checksum, and fill to 40 by extending the largest blocks (G first, then C and E).

Mechanics: audio starts automatically, one play, no going back, a short reading window before each recording. **Changed 1 Sept 2025:** micro-trottoir items now offer 3 options instead of 4, and interview segments may be played twice. Everything else is unchanged for 2026.

**Compréhension écrite — 40 questions, 60 minutes.** Official breakdown, which does sum to 40:

| Block | Questions | Document type |
|---|---|---|
| A | 7 | everyday-life documents (1 question each) |
| B | 10 | gapped sentences and texts |
| C | 5 | rapid reading of texts and graphics |
| D | 10 | administrative and professional documents |
| E | 8 | press articles |

Four options per question, one correct, one point each, no penalty for a wrong or blank answer.

**Expression écrite — 2 tasks, 60 minutes.**
- Section A (~25 min): complete a *fait divers* from a given opening. 80–120 words. Journalistic register: impersonal, factual, past tenses (passé composé for events, imparfait for circumstances), no opinion, no first person.
- Section B (~35 min): argued letter or opinion piece. 200+ words. A stated position, at least three developed arguments, logical connectors, a conclusion that introduces nothing new.

**Expression orale — 2 sections, 15 minutes, face to face, recorded for double marking.**
- Section A (5 min): obtain information. The candidate questions the examiner about an advert or activity to extract maximum detail.
- Section B (10 min): convince. The candidate presents an activity and persuades the examiner to take part.

**Score scale and NCLC** (IRCC grid, tests from 10 Dec 2023; read the *Équivalence ancien score* column of the results sheet, not the `/699` column):

| NCLC | Listening /360 | Reading /300 | Writing /450 | Speaking /450 |
|---|---|---|---|---|
| 10 | 316–360 | 263–300 | 393–450 | 393–450 |
| 9 | 298–315 | 248–262 | 371–392 | 371–392 |
| 8 | 280–297 | 233–247 | 349–370 | 349–370 |
| 7 | 249–279 | 207–232 | 310–348 | 310–348 |
| 6 | 217–248 | 181–206 | 271–309 | 271–309 |
| 5 | 181–216 | 151–180 | 226–270 | 226–270 |
| 4 | 145–180 | 121–150 | 181–225 | 181–225 |

### 3.2 TCF Canada (France Éducation international)

Total ≈ 2h47, four compulsory épreuves.

**Compréhension orale — 39 MCQ, 35 minutes.** Four options, one correct. Difficulty is *progressive*, A1 through C2, across the épreuve. Single play, no replay, no going back. Document mix: short dialogues, public announcements, interviews, longer discussions.

**Compréhension écrite — 39 MCQ, 60 minutes.** Four options, one correct, progressive A1 → C2. Document mix runs from familiar names and simple messages (A1) through classifieds, menus, timetables, personal letters and workplace texts, on to opinion articles and long literary or specialist texts (C1/C2).

**Expression écrite — 3 tasks, 60 minutes total.**
- Tâche 1: a message describing, recounting or explaining, to named recipients. 60–120 words.
- Tâche 2: an article, letter or note for several readers: a report or account *plus* comment, opinion or argument tied to the purpose. 120–150 words.
- Tâche 3: compare two documents presenting two viewpoints on a social issue. Identify each position and its reasons, then compare, take a position, conclude. No line-by-line paraphrase. 120–180 words.

**Expression orale — 3 tasks, 12 minutes total, face to face.**
- Tâche 1 (2 min, no prep): guided interview. Can the candidate converse with a stranger.
- Tâche 2 (≈5 min 30 including 2 min prep): interaction. The candidate reads a document (advert, offer) and questions the examiner to obtain concrete information — price, hours, availability, conditions.
- Tâche 3 (≈4 min 30, no prep): express and defend a point of view on a given question.

**Score scale and NCLC.** Comprehension is scored /699; expression is scored /20. Nothing below NCLC 4 or above NCLC 10 is reportable.

| NCLC | CO /699 | CE /699 | EE /20 | EO /20 |
|---|---|---|---|---|
| 10+ | 549–699 | 549–699 | 16–20 | 16–20 |
| 9 | 523–548 | 524–548 | 14–15 | 14–15 |
| 8 | 503–522 | 499–523 | 12–13 | 12–13 |
| 7 | 458–502 | 453–498 | 10–11 | 10–11 |
| 6 | 398–457 | 406–452 | 7–9 | 7–9 |
| 5 | 369–397 | 375–405 | 6 | 6 |
| 4 | 331–368 | 342–374 | 4–5 | 4–5 |

### 3.3 DELF B2 (France Éducation international)

Four épreuves, 25 points each, 100 total. Pass is 50/100 with a floor of 5/25 per épreuve. Collective session ≈ 2h30; the individual PO is 30 min preparation + ~20 min.

- CO: 30 min. Since 2020, and general by 2026, fully MCQ.
- CE: 60 min, two texts, fully MCQ.
- PE: 60 min. One argued personal position: a contribution to a debate, a formal letter, or a critical article. ~250 words.
- PO: exposé argumenté built from a short trigger text, followed by a debate with the jury.

Per-exercise question counts for CO and CE are not published on the pages consulted. **Confirm against an official sample paper before authoring**; do not invent counts.

### 3.4 The one structural fact that governs the redesign

The brief asks for "the same structure for Speaking, Listening, Writing and Reading, for each exam type." The four *skills* are shared. The four *structures* are not:

| | TEF Canada | TCF Canada | DELF B2 |
|---|---|---|---|
| CO | 40 q / 40 min / 7 blocks | 39 q / 35 min / progressive | MCQ / 30 min |
| CE | 40 q / 60 min / 5 blocks | 39 q / 60 min / progressive | MCQ / 60 min / 2 texts |
| EE | 2 tasks / 60 min | 3 tasks / 60 min | 1 task / 60 min |
| EO | 2 sections / 15 min | 3 tasks / 12 min | exposé + débat / 20 min |

So the invariant to build is: **every paper has exactly four sections, in the order CO → CE → EE → EO, and each section's internal shape is defined by a per-format blueprint.** Uniform frame, format-specific interior. A single hardcoded "20 listening then 20 reading questions" would be wrong for all three formats.

---

## 4. The redesigned information architecture

### 4.1 What replaces the skill-narrowed chips

Delete `T.examMeta` as a skill claim. Replace each chip's caption with the paper's own vital statistics, which are identical in *kind* across the three formats and different only in value:

```
  L'EXAMINATEUR                                        20 examens blancs

  ┌───────────────────────────┐  ┌───────────────────────────┐
  │ EXAMEN BLANC              │  │ EXAMEN BLANC              │
  │                           │  │                           │
  │ TEF Canada                │  │ TCF Canada                │
  │ 4 épreuves · 2 h 55       │  │ 4 épreuves · 2 h 47       │
  │ CO 40 · CE 40 · EE 2 · EO 2│  │ CO 39 · CE 39 · EE 3 · EO 3│
  │                           │  │                           │
  │ Examen 3 en cours    ▸    │  │ Non commencé         ▸    │
  └───────────────────────────┘  └───────────────────────────┘
```

Every card says the same four things: it is a mock paper, it has four épreuves, here is the total time, here is the question count per épreuve. No format is presented as "the speaking one."

The section header right-slot changes from `TEF · TCF · DELF` to the paper count, because that is now the interesting number.

### 4.2 Four screens, not two

```
home
 └─ /exam?format=tef_canada          FORMAT HUB          (rewrite of exam.tsx)
     ├─ disclaimer + format summary card
     ├─ mode switch:  [ Examen complet ]  [ Par épreuve ]
     ├─ Examen 1 …20  grid, each showing state + best NCLC estimate
     │
     └─ /exam-paper?paperId=…        PAPER               (new)
         ├─ the four sections as a checklist, in order, each with
         │  its own clock, question count, and status
         │  (locked / available / in progress / done + score)
         ├─ "Sitting mode" toggle: run all four back to back under
         │  one continuous clock, or one section at a time
         │
         ├─ /exam-section?sectionId=…   SECTION RUNNER   (rewrite of exam-task.tsx)
         │   one section, one clock, part-by-part
         │
         └─ /exam-report?paperId=…      REPORT           (new)
             per-section score → NCLC estimate → weakest skill → prep links
```

**Why a separate paper screen rather than one long flow.** A real TEF Canada sitting is 2h55. Nobody completes that on a phone in one go on their first attempt, and forcing it would make the feature unusable. The paper screen is the resume point: it holds per-section state so a candidate can do CO on the bus and EE that evening, while "Sitting mode" still offers the unbroken run for people two weeks out from the real thing.

**Why "Par épreuve" stays.** The current chips implicitly offered skill-focused practice, and that is genuinely useful — it just should not be presented as *what the exam is*. Moving it to a mode switch inside the format hub keeps the practice affordance and removes the false claim.

### 4.3 The section runner

One screen per section. Its behaviour is driven by the section's skill:

| Skill | Runner behaviour |
|---|---|
| CO | Countdown for the whole épreuve. Parts play in order. Per-part reading window, then autoplay, then the questions unlock. Play count from the blueprint (1, or 2 for TEF interviews post-Sept-2025). No scrub bar, no replay button, no back navigation. |
| CE | Countdown for the whole épreuve. All parts scrollable and revisitable within the section, as on the real paper. Documents rendered with their own layout (advert, form, article). |
| EE | Countdown per task, matching the published split (TEF 25 + 35; TCF one 60-min budget across 3 tasks). Live word counter against `minWords`/`maxWords`. Submit locks the task. |
| EO | Countdown per task. Prep timer where the format has one (TCF tâche 2 = 2 min). Record via the existing STT path, keep the WAV, transcribe, grade the transcript. Playback of your own answer afterwards. |

Answers are **not revealed during the section.** Today the runner reveals correctness immediately on submit, which is a study behaviour, not an exam behaviour. Reveal moves to the report.

### 4.4 The report

The screen that makes the whole thing worth paying for.

```
  TEF CANADA · EXAMEN 3                       terminé le 24 août

  ESTIMATION NCLC              7
  Votre niveau est fixé par votre épreuve la plus faible.

  Compréhension orale     31/40   →  ~264/360   NCLC 7
  Compréhension écrite    34/40   →  ~255/300   NCLC 9
  Expression écrite       —       →  ~330/450   NCLC 7
  Expression orale        —       →  ~300/450   NCLC 6   ← plus faible

  Estimation d'entraînement, pas un score officiel.

  ▸ Revoir vos 9 erreurs de CO
  ▸ Réviser : Expression orale B1  →  leçon
```

Three rules this screen must hold:
1. **The lowest skill governs**, exactly as IRCC treats it. Reporting an average would flatter the candidate and mislead them about their eligibility.
2. **Every number is labelled a practice estimate.** The existing `T.examPracticeEstimate` and `T.examDisclaimer` strings already say this; the report must carry both, prominently, not in a footnote.
3. **No band is ever fabricated.** If open-task grading was unavailable, the section shows "not graded" and offers a retry. `examGrader` already refuses to invent a grade; the report must not paper over that with a blank or a zero.

---

## 5. Content model changes

### 5.1 The naming problem

`ExamSeries` currently means "one mock paper" but is named as if it means "a series of papers", and `seriesNo` is capped at 5. The brief wants 20 papers. Rename in the app-facing vocabulary:

- **`ExamPaper`** — one complete mock sitting, numbered 1..20. (What `ExamSeries` is today.)
- **`ExamSection`** — one épreuve of a paper: CO, CE, EE or EO. New.
- **`ExamTask`** — one exercise block inside a section. (Roughly what it is today.)
- **`ExamPart`** — one stimulus plus its questions inside a task. New, and the thing that makes per-document audio possible.

### 5.2 Schema deltas

**A. Widen the paper id.**

```ts
// was: series.<format>.<variant>.[1-5]
export const EXAM_PAPER_ID_RE =
  new RegExp(`^paper\\.(${EXAM_FORMATS.join('|')})\\.[a-z0-9-]+\\.(?:[1-9]|1\\d|20)$`);
```

Keep `EXAM_SERIES_ID_RE` as a deprecated alias that still accepts the two live `series.*` rows, or migrate them. With only one row in the table, migrating is cheaper than carrying an alias.

**B. Sections become explicit on the paper.**

```ts
export type ExamSection = {
  skill: ExamSkill;                 // CO | CE | EE | EO
  /** Ordered. Every id must resolve, and every task's skill must equal this. */
  taskIds: string[];
  /** The published clock for the whole épreuve, in seconds. */
  timingS: number;
  /** Blueprint this section was authored against, e.g. 'tef-canada-2025.09'. */
  blueprintId: string;
};

export type ExamPaper = {
  id: string;
  format: ExamFormat;
  variant: string;
  paperNo: number;                  // 1..20
  /** Exactly four, in the order CO, CE, EE, EO. Validated. */
  sections: [ExamSection, ExamSection, ExamSection, ExamSection];
};
```

`validateExamPaper` must reject a paper that does not carry all four skills exactly once, in that order. That single check is what turns "a bag of tasks" into "an exam."

**C. Parts, so a task can hold several stimuli.**

```ts
export type ExamPart = {
  /** Shown to the candidate: 'Document 3', 'Question 12'. */
  label: string;
  /** CE: the passage / advert / form. CO: the transcript, never shown. */
  text?: string;
  /** CO only. Resolves through the same Storage + cache path as item audio. */
  audioRef?: string | null;
  /** CO only. 1 normally; 2 for TEF interview blocks from Sept 2025. */
  playCount?: number;
  /** Seconds of silence before autoplay, so the candidate can read ahead. */
  readWindowS?: number;
  /** TEF CO block A matches a conversation to a drawing. */
  imageRef?: string | null;
  imageAlt?: string;
  items: QcmItem[];
};
```

`ExamTask.items` stays for the simple single-stimulus case and for backward compatibility with the two live rows; `ExamTask.parts` is the new field, and a validator rejects a task carrying both.

**D. Per-item difficulty.**

```ts
// on QcmItem
band?: ScoreBand;   // required for tcf_canada, optional elsewhere
```

TCF Canada's progressive A1 → C2 ramp cannot be modelled without it, and NCLC estimation from a raw MCQ count is a fiction without it.

**E. Scoring that reaches NCLC.**

`ScoringBandRule` maps points to a CEFR band. That is the wrong target. Add, per section:

```ts
export type NclcRule = { nclc: number; minRaw: number; maxRaw: number };
export type SectionScoring = {
  /** The official scale for this section: 360, 300, 450, 699 or 20. */
  scale: number;
  /** raw correct → scaled score. Piecewise linear or a lookup table. */
  map: { raw: number; scaled: number }[];
  nclc: NclcRule[];
};
```

Stored on the section, not the task, because the published conversion is per épreuve.

**F. Task-type enum.** The existing six (`co_mcq`, `ce_mcq`, `po_monologue`, `po_interaction`, `pe_short`, `pe_essay`) cover the shapes adequately. Map:

| Format | Section | Tasks | taskType |
|---|---|---|---|
| TEF | EE | A fait divers / B lettre argumentée | `pe_short` / `pe_essay` |
| TEF | EO | A obtenir / B convaincre | `po_interaction` / `po_monologue` |
| TCF | EE | T1 / T2 / T3 | `pe_short` / `pe_short` / `pe_essay` |
| TCF | EO | T1 entretien / T2 interaction / T3 point de vue | `po_interaction` / `po_interaction` / `po_monologue` |
| DELF | PE / PO | 1 each | `pe_essay` / `po_monologue` |

No enum change needed. Do **not** add format-specific task types; the label the candidate sees ("Tâche 2", "Section A") belongs on the task, not in the enum, because enum values ship inside cached snapshots and cannot be changed later.

Add instead: `ExamTask.label?: string` for the on-screen name.

### 5.3 Migrations

| # | Change |
|---|---|
| `00NN_exam_paper_sections` | `content_exam_series` → add `sections jsonb not null default '[]'`, `paper_no int`; widen the id check; backfill the one live row |
| `00NN_exam_task_parts` | `content_exam_tasks` → add `parts jsonb`, `label text`, `section_scoring jsonb` |
| `00NN_exam_audio` | reuse `audio_assets`; add exam parts as a render target (no new table) |

The two live `delf_b2` rows are `in_review` and unpublished, so a value-preserving migration is optional. Recreating them from a rewritten batch script is cleaner than backfilling, and this is the last moment that will be true.

### 5.4 Seed cut

Exam content is currently excluded from `seed.json` on the grounds that it is b1/b2-banded while the seed bundles a1/a2/sons. That reasoning still holds for TEF/DELF but **breaks for TCF Canada**, whose CO/CE start at A1. It also breaks for offline use: a candidate on a plane cannot download a 2h55 exam mid-flight.

Decision needed (§11): keep exams network-only, or add a *paper-level* download to the existing `downloads.tsx` surface. Recommendation: network-only for the corpus, but make each paper explicitly downloadable, since audio dominates the payload and must be fetched anyway.

---

## 6. Content volume — the real number

> **Scope note:** the tables below size the full 20-papers-per-format ceiling. The **shipped first release is 11 papers** (§11.2), which is roughly a quarter of these figures. Keep this section as the ceiling the model must support; read §11 for what actually gets authored.

Per paper, scored units:

| Format | CO | CE | EE | EO | Total |
|---|---|---|---|---|---|
| TEF Canada | 40 | 40 | 2 | 2 | 84 |
| TCF Canada | 39 | 39 | 3 | 3 | 84 |
| DELF B2 | ~12 | ~12 | 1 | 1 | ~26 |

Across 20 papers per format:

| | MCQ items | Open tasks | Audio documents |
|---|---|---|---|
| TEF Canada | 1,600 | 80 | ~660 |
| TCF Canada | 1,560 | 120 | ~600 |
| DELF B2 | ~480 | 40 | ~40 |
| **Total** | **~3,640** | **240** | **~1,300** |

Plus, for every MCQ item: 3 or 4 options, one key, and a `why` rationale for the report. Plus, for every open task: a rubric, a model answer, and examiner notes. Plus, for every CO part: a full transcript.

For scale reference, the whole existing corpus is 10,417 items across 78 lessons, built over months. **This exam pack is roughly a third of that corpus again, in a content type nothing in the pipeline currently produces.** Treat 20×3 as the destination, not the first milestone.

### 6.1 Audio production

~1,300 documents at an average of 45 seconds is roughly 16 hours of French audio, ~800k characters of TTS.

[render-audio.ts](ealch-admin/scripts/render-audio.ts) already does most of the work: ElevenLabs synthesis, `sha256(text|voiceId|provider|renderVersion)` idempotency so a re-run costs only the delta, per-unit commits so a dead run leaves durable progress, and R2 or Supabase upload with the `audio_assets` ledger.

Three extensions are needed:

1. **Exam parts as a render unit.** Today's units are dictation items, lesson audio sections, narration segments and section `say` scripts. Add: every `ExamPart.audioRef` with a transcript.
2. **Multi-speaker stitching.** A TEF conversation or a TCF interview has two or three voices. Today one unit renders in one voice. Needs a turn list (`{ voice, text }[]`), rendered per turn and concatenated with a natural gap. This is the single largest piece of new pipeline work.
3. **Register and pace variety.** A micro-trottoir is not a radio chronicle. Voice casting and prosody settings belong in the blueprint, not in the render script.

Do not attempt ambient noise or overlapping speech. It multiplies cost and QA time for a realism gain candidates do not score on.

---

## 7. Grading

### 7.1 Closed sections (CO, CE)

Machine-marked. Raw correct → the section's scaled score via `SectionScoring.map` → NCLC via `SectionScoring.nclc`.

The scaled maps are the honest weak point: the exam bodies publish the NCLC *bands* but not the raw-to-scaled conversion, which is equated from live sitting data we do not have. So the map is an expert-judged approximation and must be labelled as one. `ExamSeries`'s existing comment already sets the right tone — "parallel, never equated" — and that language should carry onto the report screen.

`decomposeExamMiss` already turns a closed miss into SRS review atoms via `targetItemIds`. That must be populated per item, not per task, for the report's "revoir vos 9 erreurs" link to resolve to the right atoms.

### 7.2 Open written sections (EE)

The existing `grade-exam` Edge Function already does this correctly and needs no redesign: rubric-grounded, structured-output validated, refuses to grade without a rubric and a model answer, never fabricates a band, has its own daily quota separate from coach.

Two changes:
- Return a **rubric-criterion breakdown**, not just a band and a paragraph, so the report can show where the points went.
- Accept a **target scale** (`/20` for TCF, `/450` for TEF, `/25` for DELF) rather than only a CEFR band, so it speaks the candidate's language.

### 7.3 Open spoken sections (EO) — the largest new build

Today: a `TextInput`. Required: record, transcribe, grade.

The pieces already exist. [stt.ts](ealch-v2/src/services/stt.ts) records via `expo-speech-recognition`, streams interim transcripts, persists a WAV, and falls back to a Whisper Edge Function. It also refuses to invent a transcript, reporting `available: false` instead — the same doctrine `examGrader` follows.

The build:
1. **Long-form capture.** STT today is tuned for a drill utterance. A TEF Section B answer is up to 10 minutes. Needs chunked recognition, or WAV-then-Whisper as the primary path rather than the backstop.
2. **The interlocutor.** TEF EO Section A requires the candidate to *ask* and the examiner to *answer*. TCF EO tâche 2 is the same shape. The `Scenario.exam?: { format, taskId }` hook already exists in the schema for exactly this — a role-play standing in for a PO task, validated to point at a real `po_*` task. Wire the coach/role-play engine into it and the interaction task becomes achievable rather than a monologue pretending to be a dialogue.
3. **Grading a transcript is not grading speech.** Pronunciation, fluency and hesitation are a large share of a real EO mark and a transcript loses all three. Options: (a) grade the transcript and state plainly that delivery is not assessed; (b) add the STT confidence and pace as rubric inputs; (c) send audio to a multimodal model. (a) is the honest shipping position; (c) is the eventual answer. **Do not** score delivery from a transcript and present it as if speech were assessed.

---

## 8. Sourcing doctrine — read this before authoring anything

The brief says questions will be sourced from online sources, the exam body and its affiliates, then rewritten so they are not verbatim. **"Rewritten, not verbatim" is not the legal standard, and building on that assumption puts the product at risk.**

The controlling precedent is *Educational Testing Service v. Katzman* (1986): a test-prep publisher that based questions on released ETS items with details changed was found to infringe. *ETS v. New Oriental School* reached the same result in China under the Berne Convention. Paraphrase of a protected item is a derivative work. Changing nouns and verbs does not create a new work; it creates an infringing one, and it is detectable by exactly the n-gram and structure comparisons a rights-holder would run.

Separately, **TEF, TCF, DELF and DALF are registered trademarks** of CCI Paris Île-de-France and France Éducation international. Naming them descriptively is nominative fair use. Implying endorsement, affiliation or equivalence is not.

### 8.1 What we take and what we never take

| Take | Never take |
|---|---|
| Format facts: section counts, question counts, timings, options per question, play counts | Any actual exam item, released or leaked |
| Exercise taxonomy: "block C is 6 micro-trottoir questions" | Any item paraphrased, translated, or with details swapped |
| Question-stem grammar: the *kinds* of question asked of a given document type | Passages, adverts, audio scripts, or images from a paper or a publisher's book |
| Published rubrics and descriptors, cited as such | Publisher answer keys and explanations |
| The official NCLC conversion grid (a government table) | Anything behind a login, paywall, or a terms-of-use that forbids reuse |

Format facts are functional and factual; they are what every legitimate prep publisher works from. Everything in the right column is somebody's copyrighted work.

### 8.2 The clean-room process

**Amended 2026-08-24 per Paul's direction:** *review content from everywhere for learning purposes, with the goal of creating something custom that aligns with the standard. No rewriting. Build our own data and content by writing more, to meet the standard.*

That splits the work into two activities with a hard firewall between them. Studying material to *learn what the standard is* is fine and is what every legitimate prep publisher does. Transforming a source item into an output item is not. The firewall makes the second structurally impossible rather than a rule someone has to remember.

**CALIBRATION** (phase E0 only) may read anything publicly reachable. Its output is three derived artefacts per format and nothing else.

**AUTHORING** (E7 onward) receives only those artefacts plus our own corpus. It never sees a source item, so it cannot paraphrase one.

The three artefacts:

1. **`BLUEPRINT-<format>.md`** — structural facts only, plus source URLs, retrieval dates and a version stamp (`tef-canada-2025.09`). This is the *only* artefact that touches external sources.
2. **`STANDARD-<format>.md`** — what "meets the standard" looks like, as authorable rules: register per document type, lexical range and sentence-length envelope per CEFR band, the taxonomy of question stems each document type attracts, distractor-design principles, difficulty calibration markers. Derived generalisations. Every illustrative example in it is written fresh.
3. **`TOPICS-<format>.md`** — our own topic bank: the situations, themes and registers a paper draws on (housing, healthcare, workplace, transit, municipal services, current-affairs debate). Built from the CEFR descriptors and our existing corpus themes, not from any paper.

Then:

4. **Provenance is recorded accurately.** `content_exam_tasks.source_refs` already exists as a jsonb column. It records the blueprint id and version, never an item source, because there is no item source.
5. **Originality guard, in CI.** An n-gram overlap check of every authored stimulus against (a) every other stimulus in our corpus, to catch our own duplication across 20 papers, and (b) any external reference text a human happens to have pasted into the repo. Flag ≥7-gram matches.
6. **Trademark hygiene.** Keep the existing `examDisclaimer` string, which already names France Éducation international and CCI Paris Île-de-France and states non-endorsement. Show it before any exam content renders (it already does). Never use exam-body logos, wordmark styling, or colour schemes. Prefer "Simulation type TEF Canada" over "TEF Canada" as the paper title where it does not hurt clarity.

### 8.3 The affiliate question — SETTLED

**No licence is available** (confirmed 2026-08-24). There is no agreement with CCI Paris Île-de-France, France Éducation international, or any accredited centre. §8.1–8.2 is therefore the operating doctrine without exception, the existing non-endorsement disclaimer stands as written, and no "official partner" claim may appear anywhere in the product or its marketing.

---

## 9. Authoring pipeline

### 9.1 Why the existing pattern does not scale here

The corpus was built lesson by lesson: a brief, a build, a merge script, a publish. ~3,900 exam units across 60 papers at that cadence is not a plan.

But the pieces to industrialise it exist:
- `content_exam_tasks` is a relational table with a real validator (`validateExamTask`), unlike lessons which ship as opaque `body` jsonb.
- `reviewTier.ts` already classifies open exam task types as `full` review — 100% human sign-off, no sampling.
- The gates (`check_french.py`, `check_gender.py`, `check_ipa.py`, `lexique-gender.csv`) already exist for French correctness.
- Content lands `in_review` by default; publish is a separate, gated act.

### 9.2 The proposed shape

```
blueprint (1 per format)  +  topic bank (1 per format)
        │
        ▼
  PAPER PLAN  ── deterministic, generated, human-approved ──────────┐
   for paper N: every block, its topic, its CEFR target,            │
   its document type, its question count, its target items          │
        │                                                           │
        ▼                                                           │
  STIMULUS AUTHORING       one agent per block, in parallel         │
   writes the passage / advert / dialogue script, original          │
        │                                                           │
        ▼                                                           │
  ITEM AUTHORING           questions + options + key + why          │
        │                                                           │
        ▼                                                           │
  ADVERSARIAL VERIFY       a second pass that must try to break it: │
   · is the key defensible and unique?                              │
   · is a distractor accidentally also correct?                     │
   · is the answer findable without the stimulus?                   │
   · does the French pass the gates?                                │
   · does it collide with any other paper? (n-gram)                 │
        │                                                           │
        ▼                                                           │
  HUMAN REVIEW  ────────────────────────────────────────────────────┘
   full tier for open tasks; sampled for MCQ, full for paper 1
        │
        ▼
  AUDIO RENDER (CO only)  →  PUBLISH  →  OTA snapshot
```

The verify pass is the part that cannot be skipped. A mock exam with an ambiguous key is worse than no mock, because the candidate learns the wrong thing and loses trust in the score.

Given ~3,900 units, this is squarely past the threshold where manual agent waves stop being sensible and orchestration is the right tool — but only *after* paper 1 of one format exists as a hand-built, hand-reviewed gold standard to generate against.

### 9.3 Volume gate

Do not author paper 2 until paper 1 has been sat end to end on a device, timed, with real audio, and reported. Every structural defect found in paper 1 costs 1× to fix; found in paper 20 it costs 20×.

---

## 10. Phased plan

Full build prompts for every phase live in [EXAM-PACK-PHASE-PROMPTS.md](EXAM-PACK-PHASE-PROMPTS.md). Summary:

| Phase | Deliverable | Gate to pass before the next |
|---|---|---|
| **E0 · Calibration** | Blueprint, Standard and Topics files for TEF Canada and TCF Canada. The only phase that reads external material | Seven files exist; every structural fact carries a source and date; no text traceable to a source item |
| **E1 · Model** | Schema deltas (§5.2), migrations (§5.3), validators, paper ids widened to 20, four-section rule enforced | Suite green; the one live DELF row migrated |
| **E2 · Runner core** | `ExamClock`; mode toggle; paper screen; section runner for CE and EE; reveal removed from the section | A fixture paper runs timed on the Pixel 6 |
| **E3 · CO audio** | Autoplay, `playCount`, read window, no rewind, device-TTS fallback with no visible seam | A CO section cannot be replayed in mode examen |
| **E4 · EO capture** | Long-form capture, prep timers, role-play interlocutor via `Scenario.exam`, delivery signals labelled as proxies | An EO task records, transcribes and grades on device |
| **E5 · Report** | NCLC ranges, lowest-skill-governs, per-error SRS links, rubric breakdown, unscored badge | Headline NCLC equals the weakest section; no fabricated bands |
| **E6 · IA** | Home cards rewritten (§4.1); format hub; `examMeta` deleted; entitlement wired with the gate off | The skill-narrowing captions are gone from the build |
| **E7 · Gold paper** | TEF Canada Examen 1, hand-built, 84 units, full human review | Sat end to end on device, timed. Every defect fixed in the model, not the content |
| **E8 · Audio** | Voice casting file; multi-speaker stitching in `render-audio.ts`; Examen 1's clips marked and uploaded | A re-run renders zero clips; measured cost reported |
| **E9 · Scale** | TEF 2–5 and TCF 1–5 via Workflow, with an adversarial verify stage | Band ramp correct on all TCF papers; no n-gram collisions |
| **E10 · Close** | DELF B2 Examen 1 (counts confirmed first), publish, gate documented, staleness report | 11 papers fetchable on a fresh install; seed carries no exam content |

E1 through E6 are engine work and can run alongside E0's blueprint authoring. **E7 blocks E9 absolutely.**

---

## 11. Decisions — LOCKED 2026-08-24

| # | Decision | Resolution |
|---|---|---|
| 11.1 | Licence or affiliate agreement | **None available.** §8 doctrine applies without exception. No partner claim anywhere. |
| 11.2 | How many papers | **5 TEF Canada, 5 TCF Canada, 1 DELF B2 = 11.** Model supports 20; we ship 11. |
| 11.3 | Does DELF B2 stay | **One paper, then parked** after E6 as recommended. The two existing `in_review` rows are kept, not deleted. |
| 11.4 | Exam conditions | **Toggle.** *Mode examen* (hard clock, single play, no rewind, scored) and *Mode entraînement* (replay, pausable clock, attempt marked unscored). Unscored marking visible on the report. |
| 11.5 | Pricing and gating | **Plumbing ships, gate stays off.** `hasFeature('examiner')` is wired behind a remote flag defaulting to open. Paul locks it at a future date without needing a build. |
| 11.6 | Offline | **None.** Exam content is network-snapshot only and not downloadable. Do not add exam arrays to the seed cut. |
| 11.7 | Scaled-score honesty | **NCLC range plus raw count.** Never a bare point estimate. `NclcRule` carries `nclcLow`/`nclcHigh`, default span 2. |
| 11.8 | Sourcing method | **Calibrate widely, author originally.** Study anything public to learn the standard; the E0 artefacts are the firewall; authoring never sees a source item. See the §8.2 amendment. |
| 11.9 | Voice | **ElevenLabs, two-stage.** Cast in the browser UI, render via `render-audio.ts`. Device TTS speaks CO parts in-app until each clip is marked approved. |
| 11.10 | Speaking assessment | **Transcript plus delivery signals** (STT confidence, speech rate, pause count) as labelled rough indicators. Not multimodal audio grading in this release. |
| 11.11 | Scale method | **Gold paper by hand, then Workflow.** TEF Examen 1 is hand-built and fully human-reviewed; papers 2 to 11 are orchestrated against it. |

### Revised scope arithmetic

| | MCQ items | Open tasks | Audio documents |
|---|---|---|---|
| TEF Canada ×5 | 400 | 20 | ~170 |
| TCF Canada ×5 | 390 | 30 | ~150 |
| DELF B2 ×1 | ~24 | 2 | ~3 |
| **Total** | **~814** | **52** | **~320** |

~320 documents at ~800 characters each is roughly 256k characters of ElevenLabs synthesis, about four hours of audio. That is a quarter of the 60-paper figure in §6 and brings the first release inside one build cycle.

---

## 12. Risks

| Risk | Severity | Mitigation |
|---|---|---|
| Sourcing from actual exam items, even rewritten | **High** — legal, and product-ending | §8 clean-room; blueprint-only ingestion; CI originality guard |
| Trademark: implying endorsement | Medium | Existing disclaimer, shown pre-content; no logos; "Simulation type X" naming |
| Scaled scores read as official | Medium | NCLC range not point estimate; disclaimer on every score surface; "parallel, never equated" language |
| Audio cost and QA overrun | Medium | Idempotent renders already built; cap document length; no ambient layers; render only after content review |
| Speaking graded from a transcript | Medium | State plainly that delivery is not assessed until multimodal grading exists |
| Ambiguous MCQ keys at scale | Medium | Adversarial verify stage is non-optional; full human review on paper 1 |
| 60 papers never finishes | Medium | Ship 5 per format first (§11.2) |
| Format drift (TEF changed Sept 2025) | Low | `formatVersion` already required on every task — the field exists for exactly this; add a staleness report to the admin |

---

## 13. What is already right and should not be touched

Worth stating, because the redesign is large and these parts already hold the line:

- **`examGrader` never fabricates a band.** `live: false` is a real outcome the UI must render. Keep it.
- **`grade-exam` refuses to grade without a rubric and a model answer**, demands structured output, and validates it before returning. Keep it.
- **`validateExamTask` requires a rubric and a model answer for open task types**, and requires `timingS >= 1`. Keep both.
- **`formatVersion` is required on every task.** It is the only thing that will distinguish "wrong" from "stale" when an exam body next changes its format, and one already did in Sept 2025.
- **`reviewTier` puts open exam tasks at 100% human review.** Keep it, and extend it to MCQ keys.
- **The disclaimer renders before any exam content.** Keep it, and add it to the report.
- **`decomposeExamMiss` / `dueExamSkills`** already route a miss back to SRS atoms and prep lessons. They are the reason the Examiner is part of the app rather than a bolt-on quiz, and the report should lean on them harder, not replace them.

---

## Sources

Format and structure:
- [Le français des affaires — se préparer à l'épreuve de compréhension écrite du TEF](https://www.lefrancaisdesaffaires.fr/se-preparer-a-lepreuve-de-comprehension-ecrite-du-tef/)
- [Le français des affaires — prepare for the TEF oral comprehension test](https://www.lefrancaisdesaffaires.fr/en/prepare-yourself-for-the-oral-comprehension-test-of-the-tef/)
- [Le français des affaires — prepare for the TEF oral expression test](https://www.lefrancaisdesaffaires.fr/en/prepare-yourself-for-the-oral-expression-test-of-the-tef/)
- [TEF Canada format guide (Penvo)](https://getpenvo.com/blog/tef-canada-format-guide)
- [TEF Canada format changes 2026: the listening update](https://www.tcftefprep.com/blog/tef-canada-exam-format-changes-2026)
- [TEF Canada expression écrite sections A & B](https://rossielts.com/tef-canada-exam/expression-ecrite/)
- [TCF Canada 2026 — présentation complète](https://www.tcfca.com/tcf-canada/)
- [TCF Canada — épreuves, structure, durée et format](https://tcfcanadaformation.com/tcf-canada/epreuves)
- [TCF Canada — compréhension orale](https://tcf-canada.ca/comprehension-orale/)
- [TCF Canada — expression écrite, les 3 tâches](https://primo-tcf.cloud/blog/expression-ecrite-tcf-canada-3-taches)
- [TCF Canada — tâche 2 de l'expression orale](https://tcfcad.com/blog/preparer-tache-2-expression-orale-tcf.html)
- [TCF Canada — manuel du candidat (PDF)](https://www.afsf.com/exams/tcf/Manuel_du_candidat_TCF_Canada.pdf)
- [DELF B2 — guide complet 2026 (Polyglottes)](https://polyglottes.org/delf-b2-guide-complet-gratuit-2026/)
- [DELF B2 — production écrite (delfdalf.fr)](http://www.delfdalf.fr/production-ecrite-delf-b2.html)

Scoring and NCLC:
- [TEF Canada score chart & NCLC/CLB conversion](https://www.languagenext.com/blog/tef-canada-score-chart/)
- [Niveaux NCLC TCF Canada — tableau de correspondance](https://tcfcad.com/niveaux-nclc-tcf-canada.html)
- [Correspondance TCF Canada / NCLC (PDF, France Éducation international)](https://www.afsf.com/exams/tcf/tcf-canada_nclc.pdf)
- [NCLC vs TEF/TCF equivalency 2026](https://visaryo.com/nclc-vs-tef-tcf-equivalency-2026-table/)

Sourcing and IP:
- [ETS v. New Oriental School](https://en.wikipedia.org/wiki/ETS_v._New_Oriental_School)
- [Nominative use (trademark)](https://en.wikipedia.org/wiki/Nominative_use)
- [Avoiding infringement when re-creating standardized test questions](https://www.avvo.com/legal-answers/want-to-avoid-copyright-infringement-in-re-creatin-1011064.html)

*Format details on third-party prep sites were cross-checked against the exam bodies' own pages wherever those pages were reachable. TEF CO's published block breakdown sums to 33 of 40, and DELF B2's per-exercise counts are not published; both are flagged inline rather than filled in with a guess.*
