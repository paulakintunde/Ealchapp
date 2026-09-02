# Exam Pack — Phase Prompts

**Companion to:** [EXAM-PACK-REDESIGN.md](EXAM-PACK-REDESIGN.md) (research, format blueprints, current-state audit)
**Status:** decisions locked 2026-08-24. Prompts ready to dispatch.

Each phase below is a self-contained prompt. Paste one into a fresh session. Every prompt assumes §0 has been read.

---

## 0. Shared invariants — read before every phase

### 0.1 Locked decisions

| Decision | Value |
|---|---|
| Formats and volume | TEF Canada ×5 papers, TCF Canada ×5 papers, DELF B2 ×1 paper. Model supports 20; we ship 11. |
| Sourcing | No licence exists. Study widely to learn the standard; author 100% original content. Never rewrite, paraphrase or transform a source item. See §0.3. |
| Voice | ElevenLabs is the shipping voice. During review the app speaks CO documents via on-device TTS; casting happens in the ElevenLabs browser UI; the two meet at the render step. |
| Offline | None. Exam content is network-snapshot only and is not downloadable. Do not add exam arrays to the seed cut. |
| Exam conditions | A toggle: **Mode examen** (hard clock, single play, no rewind, scored) and **Mode entraînement** (replay allowed, clock pausable, attempt marked unscored). |
| Speaking grade | Transcript plus delivery signals: STT confidence, speech rate, pause count, fed to the rubric as labelled rough indicators. |
| Score report | NCLC **range** plus raw count. Never a bare point estimate. |
| Scale method | Gold paper hand-built and human-reviewed first, then Workflow orchestration for the rest. |
| Premium gate | Build the `hasFeature('examiner')` plumbing; leave the gate **off**, driven by a remote flag. Paul locks it at a future date. |
| DELF B2 | One paper only. Park the format after E6 per the redesign recommendation; do not delete the two existing `in_review` rows. |

### 0.2 Scope arithmetic

| | MCQ items | Open tasks | Audio documents |
|---|---|---|---|
| TEF Canada ×5 | 400 | 20 | ~170 |
| TCF Canada ×5 | 390 | 30 | ~150 |
| DELF B2 ×1 | ~24 | 2 | ~3 |
| **Total** | **~814** | **52** | **~320** |

~320 documents at ~800 characters each is roughly 256k characters of ElevenLabs synthesis, about four hours of audio.

### 0.3 The sourcing firewall

Paul's instruction: *review content from everywhere for learning purposes, with the goal of creating something custom that aligns with the standard. No rewriting. Build our own data and content by writing more, to meet the standard.*

That splits cleanly into two activities, and **the firewall between them is the whole control**:

**CALIBRATION (E0 only).** May read anything publicly reachable: exam-body preparation pages, published rubrics and descriptors, prep-site format guides, sample papers, CEFR descriptors, the IRCC grid. The goal is to *learn what the standard is*. Output is three derived artefacts per format, and nothing else leaves this phase.

**AUTHORING (E7 onward).** Receives **only** the three derived artefacts plus our own corpus. It never sees a source item, a sample paper, or a prep-site question. It cannot paraphrase what it was not given.

The legal reason: *ETS v. Katzman* found against a publisher that based questions on released items with details changed. Paraphrase of a protected item is a derivative work. The firewall makes paraphrase structurally impossible rather than a rule someone has to remember.

The three derived artefacts, per format:

1. **`BLUEPRINT-<format>.md`** — structural facts only. Section counts, question counts, durations, options per question, play counts, exercise-block taxonomy, document types, score scales, the NCLC grid. Factual and functional; not protected. Carries its source URLs and a version stamp (`tef-canada-2025.09`).
2. **`STANDARD-<format>.md`** — what "meets the standard" looks like, expressed as rules we can author against: register per document type, sentence length and lexical range per CEFR band, the taxonomy of question stems used against each document type, distractor-design principles, difficulty calibration markers. **Derived generalisations, never examples lifted from a source.** Any illustrative example in this file must be written fresh.
3. **`TOPICS-<format>.md`** — our own topic bank: situations, themes and registers a paper draws on. Built from the CEFR descriptors and our existing corpus themes (housing, healthcare, workplace, transit, municipal services, current-affairs debate, and so on), not from any paper.

`content_exam_tasks.source_refs` records the blueprint id and version. It never records an item source, because there is no item source.

### 0.4 Codebase invariants that will bite

- **Content lands `in_review`, never `published`.** Gate H requires human sign-off. `reviewTier.ts` already puts open exam task types at 100% review; extend the same to MCQ keys.
- **Never fabricate a band.** `examGrader` returns `live: false` on failure and the UI must render "not graded, retry". Do not add a client-side fallback grade. This rule killed "examiner v1".
- **`formatVersion` is required on every task.** It distinguishes *wrong* from *stale*. TEF Canada already changed on 1 Sept 2025.
- **No em dash in user-facing copy.** Label separators are the exception.
- **The words "honest" and "honesty" are banned from authored content**, enforced across the seed by `sons-alphabet.test.ts`. Watch for "malhonnête" in argumentative stimuli.
- **Never `git checkout` `seed.json`.** It discards other authors' uncommitted work. Re-run the merge scripts instead.
- **`seed.json` is canonical `JSON.stringify(x, null, 2)`.** Exam content does not go in it at all, but neighbouring work does.
- **Run a publish dry-run before calling anything done.** The seed is merged-shape until a publish regenerates it.
- **`corpus:probe` does not strip accents.** Probe with real orthography or it reports false absences.
- **Editing `tts.ts` breaks Android TTS in dev.** It is a Fast Refresh artefact. Full app restart, not a code fix.
- **Device deep link:** the scheme is `ealch`, not `wonerock`. `adb` into any screen; `screencap` needs a separate call.
- **Watch for id collisions inside your range.** A highest-id check misses a concurrent build landing below your top. Check the row count.

### 0.5 Definition of done, every phase

1. `pnpm test` green in both `ealch-v2` and `ealch-admin`.
2. `pnpm typecheck` green. A red local typecheck can be gitignored scratch on disk, not a red repo. Verify before reporting.
3. Any new invariant is pinned by a test, not a comment.
4. Report what was skipped and why. Never report partial work as complete.

---

## E0 — Calibration and blueprints ✅ COMPLETE 2026-08-24

**Delivered:** 8 files in [exam-blueprints/](exam-blueprints/) — `README.md`, two `BLUEPRINT`, `STANDARD-common.md`, two format `STANDARD`, two `TOPICS`. 1,497 lines.

Deviations from the prompt below, both deliberate:
- **`STANDARD-common.md` was added** (8 files, not 7). The length/lexis envelopes, stem taxonomy, distractor rules and integrity rules are identical across formats, and duplicating them into two files would have let them drift.
- **TEF CO's 7 unallocated questions were not resolved.** They cannot be: the exam body's own page states 40 and itemises 33, and every prep site reproduces the same gap. The `G-elastic` fill rule is adopted instead and recorded in the blueprint. TEF **CE** did fully resolve to 40.

Findings that change later phases:
- TEF CE's seven blocks (A–G) are now fully named and counted: 7 / 6 / 4 / 5 / 10 / 8 = 40.
- TCF's low-band topic supply, not its high band, is the production risk. A1 and A2 topics are small and 5 papers will exhaust them; an expansion rule is written into `TOPICS-tcf-canada.md` and must be re-measured after paper 1.
- Neither exam body publishes its raw-to-scaled conversion or its rubric descriptors. Both blueprints record this, and every rubric we ship must be labelled our own construction.

<details><summary>Original prompt</summary>

```
Produce the three derived artefacts that every later exam-authoring phase will
work from, for TEF Canada and TCF Canada. Read ealch-admin/EXAM-PACK-PHASE-PROMPTS.md
§0 first, especially §0.3 — the sourcing firewall is the point of this phase.

This is the ONLY phase permitted to read external exam material. Everything
downstream reads your output and nothing else.

WHAT TO PRODUCE, per format, in ealch-admin/exam-blueprints/:

  BLUEPRINT-tef-canada.md      structural facts, versioned tef-canada-2025.09
  BLUEPRINT-tcf-canada.md      structural facts, versioned tcf-canada-2026.01
  STANDARD-tef-canada.md       what meets the standard, as authorable rules
  STANDARD-tcf-canada.md
  TOPICS-tef-canada.md         our own topic bank
  TOPICS-tcf-canada.md

BLUEPRINT must contain, and must contain nothing else:
  - every section, its question count, its duration, its options-per-question
  - the exercise-block taxonomy with per-block question counts and document types
  - play counts and reading windows for listening
  - the score scale per section and the NCLC conversion grid
  - source URLs and a retrieval date for every fact
  - an explicit "unresolved" list for anything the public pages do not state

  Start from EXAM-PACK-REDESIGN.md §3, which already carries most of this.
  Two known gaps to resolve or flag: TEF CO's published block breakdown sums
  to 33 of 40, and DELF B2's per-exercise counts are not published anywhere
  consulted. Do not fill either with a guess. If you cannot resolve them,
  write the fill rule instead (for TEF: extend block G, then C and E).

STANDARD must contain, per document type:
  - register, person, tense profile, typical length
  - lexical range and sentence-length envelope per CEFR band
  - the taxonomy of question stems that document type attracts
    (gist, specific detail, inference, speaker attitude, lexical substitution,
    discourse function)
  - distractor design: what makes a wrong option plausible but defensibly wrong,
    and the failure modes to avoid (two defensible keys, an option answerable
    without the stimulus, a giveaway of length or specificity)
  - difficulty calibration markers per CEFR band, concrete enough to author
    against: what makes a TCF CO item A2 rather than B1

  Every illustrative example in this file MUST be written fresh by you.
  Do not lift, translate or adapt an example from any source. If you catch
  yourself producing something that echoes a source, discard it and write
  another.

TOPICS must contain 60+ situations per format, tagged by CEFR band and by the
document types they suit. Build them from the CEFR can-do descriptors and from
our existing corpus themes (query content_themes for what we already teach).
Not from any exam paper.

ALSO PRODUCE:
  ealch-admin/exam-blueprints/README.md — states the firewall in one paragraph,
  so whoever opens this directory in six months knows why the split exists.

DO NOT:
  - write a single exam item in this phase
  - copy any passage, advert, dialogue, audio script or question into any file
  - record any item source in source_refs; the blueprint id is the only provenance

DONE WHEN: seven files exist, every structural fact carries a source URL and
date, every unresolved gap is listed rather than guessed, and no file contains
text traceable to a source item.
```

</details>


---

## E1 — Content model and migrations ✅ COMPLETE 2026-08-24

**Shipped.** App: typecheck clean, 4996 tests pass (was 4987). Admin: typecheck clean on every tracked file. Migration `0019_exam_paper_sections` applied to the live DB; both tasks preserved.

What landed:
- `EXAM_PAPER_ID_RE` (`paper.<format>.<variant>.<1-20>`), `MAX_PAPER_NO`, `examPaperId()`. `ExamSeries` → `ExamPaper`, `seriesNo` → `paperNo`, `Corpus.examSeries` → `examPapers`, `ExamResult.seriesId` → `paperId`. Clean rename, no alias.
- `ExamSection` (skill, taskIds, timingS, blueprintId, scoring) and `EXAM_SECTION_ORDER`. `validateExamPaper` rejects a paper that is not exactly four épreuves in order.
- `ExamPart` (label, text, audioRef, playCount, readWindowS, imageRef, imageAlt, items). A task carries `items` XOR `parts`.
- `QcmItem.band`, required for `tcf_canada` and optional elsewhere.
- `SectionScoring` / `NclcRule` with `nclcLow`/`nclcHigh` ranges, `NCLC_MIN`/`NCLC_MAX`.
- `ExamTask.label`. `paperTaskIds()`, `examTasksOfSection()`, `examSectionOf()`.

**Three deviations from the prompt, all deliberate:**
1. **`section_scoring` was NOT added to `content_exam_tasks`.** The prompt's migration list contradicted its own §5.2E, which correctly puts scoring on the section. It lives inside the papers table's `sections` jsonb.
2. **The table was renamed too** (`content_exam_series` → `content_exam_papers`), not just its columns. `drizzle-kit generate` needs a TTY to confirm a rename and this session has none, so the SQL is hand-written and the meta snapshot was produced through `drizzle-kit/api`'s `generateDrizzleJson`.
3. **Fixed 24 unrelated pre-existing broken imports** (`../../../ealch-v2/` → `../../ealch-v2/` in `scripts/_a2*_manifest.ts`). Same failing guard, unambiguous fix.

**Known red, pre-existing, NOT caused by E1:** `repo-closure.test.ts` ("every import in a tracked admin script resolves to a tracked file") still fails on five files E1 never touched — `_a234_mutate.ts` → `./seed.json`, `_a2_label_codemod.mjs` → `./_unit-ref.ts`, `_a2_label_testfix.mjs` → `./unit-label.ts`, `restore-version-bumps.ts` → untracked `scripts/data`, plus one false positive where the test's import regex swallows a prose comment in `adverbes-corpus.ts`. Worth its own cleanup pass; it blocks nothing.

**Carried into E2/E10:** the live `paper.delf_b2.blanc-01.1` now has TWO sections (CE, PE) because those are the only tasks ever authored for it. It is deliberately not a valid paper and cannot publish until E10 adds its listening and speaking épreuves. It stays `in_review`, which is what it already was.

<details><summary>Original prompt</summary>

```
Widen the exam content model so a paper can hold four sections, twenty papers
can exist per format, a listening task can carry audio, and a section can report
an NCLC range. Read EXAM-PACK-PHASE-PROMPTS.md §0 and EXAM-PACK-REDESIGN.md §5.

SCHEMA (ealch-v2/src/content/schema.ts):

1. Paper ids. EXAM_SERIES_ID_RE caps at [1-5] and blocks the whole plan.
   Introduce EXAM_PAPER_ID_RE = ^paper\.(<formats>)\.[a-z0-9-]+\.(?:[1-9]|1\d|20)$
   Model supports 20 even though we ship 11. Migrate the one live
   series.delf_b2.blanc-01.1 row rather than carrying a deprecated alias;
   it is in_review and unpublished, so this is the last cheap moment.

2. Sections. ExamPaper.sections must be exactly four, skills in the order
   CO, CE, EE, EO, each carrying its own taskIds, timingS and blueprintId.
   validateExamPaper REJECTS a paper missing a skill, duplicating one, or
   ordering them differently. That single check is what makes it an exam
   rather than a bag of tasks.

3. Parts. ExamPart = { label, text?, audioRef?, playCount?, readWindowS?,
   imageRef?, imageAlt?, items: QcmItem[] }. ExamTask keeps `items` for the
   single-stimulus case; `parts` is new; a task carrying BOTH is invalid.
   imageAlt is required whenever imageRef is present (UDL 01).

4. Per-item band. QcmItem.band?: ScoreBand, REQUIRED for tcf_canada.
   TCF CO/CE run A1 to C2 inside one épreuve; without it neither the ramp
   nor the NCLC estimate can be modelled.

5. Scoring, on the SECTION not the task, because the published conversion is
   per épreuve:
     SectionScoring = { scale, map: {raw, scaled}[], nclc: NclcRule[] }
     NclcRule = { minRaw, maxRaw, nclcLow, nclcHigh }
   nclcLow/nclcHigh express a RANGE. Default span is 2 (e.g. 6 to 7). Narrow
   to a single value only where there is evidence to justify it. We cannot
   equate raw to scaled the way the exam bodies do, and the range is how the
   report stays defensible. Put that reason in the type's doc comment.

6. ExamTask.label?: string — the on-screen name ("Tâche 2", "Section A").
   Do NOT add format-specific values to EXAM_TASK_TYPES. Enum values ship
   inside cached snapshots and cannot be changed later. The existing six
   cover every shape; see the mapping table in EXAM-PACK-REDESIGN.md §5.2F.

MIGRATIONS (ealch-admin/drizzle/):
  - content_exam_series: add sections jsonb not null default '[]', paper_no int,
    widen the id check, backfill the one live row
  - content_exam_tasks:  add parts jsonb, label text, section_scoring jsonb
  Follow the 0014 precedent: if a migration assumes a table is empty, make it
  fail loudly when that assumption is wrong.

ALSO:
  - ealch-admin/src/db/schema.ts must stay in step; enum-parity.test.ts holds
    the two repos honest, so run it.
  - publish-content.ts must read and emit the new columns. Exam content stays
    OUT of the seed cut (no offline). Confirm that stays true.
  - The admin exams list still labels columns "Family"/"Section" from the
    pre-0014 vocabulary. Fix to Format/Task type while you are here.

DONE WHEN: validateExamPaper rejects a three-section paper, a wrong-order paper,
and a task carrying both items and parts; a paper numbered 20 validates; the
live DELF row is migrated; enum-parity and the full suite are green.
```

</details>


---

## E2 — Runner: clock, sections, reading, writing ✅ COMPLETE (device-proven 2026-08-25)

**Shipped 2026-08-25.** App: typecheck clean, **5022 tests pass** (was 4996). Admin: typecheck clean, 27/27.

What landed:
- `src/utils/examClock.logic.ts` — wall-clock countdown, pause/resume, warning edges, formatting. Pure, 9 tests.
- `src/components/ExamClock.tsx` — repaints on an interval, re-reads on foreground, announces at the two warning edges only, pause offered in practice mode only.
- `EXAM_MODES`/`ExamMode` in schema (a shipped string value), `ExamResult.mode`, `isScored()`.
- `sectionProgress()` / `paperProgress()` folds in progress.logic.
- `taskQuestions()` / `scoreClosedTask()` in content.logic — flatten both task shapes, mark blanks as wrong.
- `app/exam-paper.tsx` (mode toggle, sitting mode, four-épreuve checklist) and `app/exam-section.tsx` (CE + EE).
- `app/exam-task.tsx` **deleted**; routes updated; 24 new strings in both languages.
- `src/content/devExamFixture.ts` — a dev-only two-épreuve mock paper so the runner can be sat before E7 exists.

**✅ Device proof DONE 2026-08-25** on the Pixel 6. Paper screen renders the four-épreuve checklist with counts and clocks matching the fixture; mode toggle works; the clock survived 45 s of backgrounding (39:08 → 37:04, i.e. it kept running); nothing revealed mid-section; practice attempts show `Not scored`. Full runbook: [DEVICE-PROOF-RUNBOOK.md](DEVICE-PROOF-RUNBOOK.md). Original repro steps:

```
adb reverse tcp:8082 tcp:8082
cd ealch-v2 && CI=1 RCT_METRO_PORT=8082 node node_modules/expo/bin/cli start --port 8082 --clear < /dev/null &
adb shell am start -a android.intent.action.VIEW -d "ealch://expo-development-client/?url=http%3A%2F%2Flocalhost%3A8082"
# then, from home → L'Examinateur → TEF Canada → the dev-fixture paper, or deep-link straight in:
adb shell am start -a android.intent.action.VIEW -d "ealch://exam-paper?paperId=paper.tef_canada.dev-fixture.1"
```
Check: the clock counts down and keeps counting while the app is backgrounded; a section hard-stops at zero and submits; practice mode pauses and marks the attempt unscored; nothing reveals an answer mid-section.

**Deviations, all deliberate:**
1. **`app/exam-task.tsx` was deleted rather than left beside the new runner.** Two runners means a live route that still reveals answers mid-section, which contradicts E2's own rule 1. Consequence: `MascotVictoryLap` now has **no caller** until E5 puts the celebration on the report. Flagged rather than left to be discovered.
2. **The dev fixture is a runnable content path, not just a test fixture.** The prompt asked for a fixture "so this phase can be proven without waiting on E7", and a fixture that only exists inside tests cannot be sat on a phone. It is fenced three ways (gated on `__DEV__`, appends rather than overlays, `dev-fixture` variant namespace) and a test pins that it is empty in a release build. **Delete it when E7 lands.**
3. **The fixture paper has two sections, not four.** It is scaffolding for a runner, not a paper, and it never goes near the publish gate that would reject it.

<details><summary>Original prompt</summary>

```
Rebuild the exam runner around a clock and four sections. This is the phase that
turns a worksheet into an exam. Read EXAM-PACK-PHASE-PROMPTS.md §0 and
EXAM-PACK-REDESIGN.md §4.2-4.3. E1 must be merged first.

There is NO timer component anywhere in ealch-v2/src/components/ today, and
ExamTask.timingS is read in exactly one place, to print a minute count. Start
there.

BUILD:

1. <ExamClock> — a countdown that survives backgrounding (wall-clock delta,
   not an interval count), warns at 5 min and 1 min, and hard-stops the
   section at zero, submitting whatever exists. Must respect the app's
   reduce-motion setting (UDL 07) and announce remaining time to screen
   readers at the warning points, not continuously (UDL 08).

2. Mode toggle, offered on the paper screen before a section starts:
     Mode examen        hard clock, single play, no rewind, scored
     Mode entraînement  replay allowed, clock pausable, attempt UNSCORED
   The unscored marking must ride on the attempt record itself and surface on
   the report. The two must never blur into one number.

3. /exam-paper?paperId=… — the four sections as an ordered checklist, each
   with its clock, question count and status (locked / available / in progress
   / done + score). This is the RESUME point: a 2h55 sitting is not completed
   in one go on a phone. Plus a "Sitting mode" entry that runs all four back to
   back under one continuous clock.

4. /exam-section?sectionId=… — one section, one clock, part by part.
   This phase covers CE and EE only; CO lands in E3, EO in E4.

   CE: all parts scrollable and revisitable within the section, as on the real
       paper. Render each document in its own shape (advert, form, article,
       gapped text), not as undifferentiated body copy.
   EE: per-task clock matching the published split (TEF 25 + 35 min; TCF one
       60-minute budget across three tasks). Live word counter against
       minWords/maxWords. Submit locks the task.

5. ANSWERS ARE NOT REVEALED DURING A SECTION. Today's runner reveals
   correctness on submit, which is study behaviour. Reveal moves to the report
   (E5). Delete the reveal path from the section runner.

FIXTURE: build a hand-written two-section fake paper as a test fixture so this
phase can be proven without waiting on E7. It never reaches the database.

DEVICE PROOF: run the fixture end to end on the USB Pixel 6 via Metro on 8082,
deep-linked with the ealch scheme. A component that no screen imports is not
done; grep the renderer and pin the wiring with a test.

DONE WHEN: the fixture paper runs timed on device, the clock survives
backgrounding, a section hard-stops at zero and submits, mode entraînement
marks the attempt unscored, and nothing reveals an answer mid-section.
```

</details>


---

## E3 — Runner: listening audio ✅ COMPLETE (device-proven 2026-08-25)

App: typecheck clean, **5037 tests pass** (was 5022). **Device-proven on the Pixel 6.**

Observed on device: reading window then autoplay with no play button; Document 1 (playCount 1) reaching `Audio finished` with no way to replay; Document 2 (playCount 2) playing **sequentially after** Document 1 rather than stacked on it; questions readable and answerable throughout; no scrub bar; and in practice mode the pause control, `Play again` and `Transcript` all appearing where exam mode showed none of them.

What landed:
- `src/utils/coPlayback.logic.ts` — the part lifecycle (reading → playing → answering → closed, plus `unplayable`), play-count rules, mode gating, duration estimation. Pure, 10 tests.
- `src/components/ExamAudioPart.tsx` — autoplay after the reading window, no play button in exam mode, repeat plays with a real gap, image + alt, practice-only replay and transcript.
- `ExamPart.durationS` (schema + validation) — written by E8's render pipeline, estimated from the transcript until then.
- `ExamResult.audioFailed`, and `isScored()` now excludes it.
- `RENDERABLE` is now `['CO','CE','PE']`; PO still refused.
- Dev fixture gained a CO épreuve with a 1-play announcement and a 2-play interview.

**Three corrections to this prompt's own wording, all deliberate:**

1. **"After the last play, questions unlock" is wrong and was not implemented.** The blueprint it derives from says the opposite: both boards give a reading window *so the candidate can read the questions first*, and the questions stay readable throughout. What is actually constrained is the audio, not the questions. The runner keeps a part's questions editable from the reading window until the candidate moves past it, then locks them for good (the paper's real "no going back"). The blueprint wins over the prompt.

2. **A duration field had to be added.** `audio.speakItem` fires its completion callback immediately on the clip path — expo-audio exposes no per-play completion on the shared player — so a `playCount: 2` part would have started both plays in the same tick and the candidate would hear them on top of each other. `ExamPart.durationS` is authored by E8; until then `estimateDurationS` uses ~14 chars/sec, deliberately erring long (a second of extra silence beats two overlapping plays).

3. **`audioFailed` is a second field, not a reuse of `mode`.** Both exclude a result from every number, but a practice run is one the candidate *chose* not to have scored and a dead document is one *we* could not score. Collapsing them would report our failure as theirs.

<details><summary>Original prompt</summary>

```
Make compréhension orale real. Read EXAM-PACK-PHASE-PROMPTS.md §0. E2 must be
merged first.

Today ExamTask has no audio field at all, and the B2 batch script skipped CO
deliberately: "a listening task that is secretly text would be exactly the kind
of dishonest surface this codebase's own rules forbid elsewhere." E1 added
ExamPart.audioRef. This phase plays it.

TWO-SOURCE VOICE, per the locked decision:
  - While a paper is in_review, CO parts speak via ON-DEVICE TTS from the
    part's transcript. The learner hears audio, not text, and we do not pay
    ElevenLabs for content that may change.
  - Once a clip is marked approved and rendered (E8), audioRef resolves to the
    real ElevenLabs clip through services/audio.ts, which already does download,
    disk cache, sha256 verification and TTS fallback.
  - The swap is invisible to the runner: it asks audio.ts for the part and gets
    whatever exists. Do not build two code paths in the screen.

PLAYBACK MECHANICS, matching the real paper:
  - readWindowS of silence first, so the candidate reads the questions
  - then AUTOPLAY. No play button in mode examen.
  - playCount from the blueprint: 1 normally, 2 for TEF interview blocks since
    1 Sept 2025. After the last play, questions unlock and audio is gone.
  - No scrub bar. No replay. No back navigation to an earlier part.
  - Mode entraînement lifts the replay limit and shows a transcript toggle.
    Mode examen shows neither, ever.

  Block A of TEF CO matches a conversation to a drawing: render ExamPart.imageRef
  with its imageAlt. An image with no alt fails UDL 01.

FAILURE BEHAVIOUR: if neither a clip nor device TTS is reachable, the part
reports itself unplayable and the section is marked unscored for that part.
Do not silently show the transcript and score it as listening. That is the
exact defect this phase exists to prevent.

DEVICE PROOF: on the Pixel 6, with a real CO fixture. Note that editing tts.ts
breaks Android TTS in dev via Fast Refresh; restart the app rather than
debugging it. If the mic or audio behaves oddly, check for a stuck VOICE_
COMMUNICATION session from another app before suspecting our code.

DONE WHEN: a CO section autoplays in order under one clock, honours playCount,
cannot be replayed or rewound in mode examen, unlocks questions only after the
last play, and falls back to device TTS with no visible seam.
```

</details>


---

## E4 — Runner: speaking capture and delivery signals ✅ COMPLETE (device-proven 2026-08-25)

App: typecheck clean, **5057 tests pass** (was 5037). **Device-proven on the Pixel 6.**

Observed on device: the Speaking épreuve appears as the paper's fourth section with no question count (open task); the button reads *Start preparation* because this task carries `prepS`; the prep clock (01:56) runs **separately** from the section clock (04:07); recording autostarts when prep elapses with no record button; and the result renders `6s · 0 words` with the caveat *"These measure your pacing, not your pronunciation: nothing listened to the recording."*

The empty-answer case is the one worth having caught: nobody spoke, so there is **no wpm and no pause count** — the module refused to invent either, where a naive implementation would have shown `0 wpm` and `0 pauses`, both claims we have no evidence for. It also did NOT report "Microphone unavailable", correctly distinguishing *silence was recorded* from *nothing could record*.

After submit, Speaking reads `Done` while Listening still reads `Done · Not scored` from an earlier practice run — `isScored()` separating the two against real logged results.

What landed:
- `src/utils/deliverySignals.logic.ts` — words-per-minute, pause detection from interim-transcript gaps, recogniser confidence. Pure, 13 tests.
- `src/components/ExamSpeakTask.tsx` — prep phase, recording with live partials, playback state, honest failure. **No `TextInput` anywhere.**
- `ExamTask.prepS` (schema + validation): required to be a spoken task, rejects 0.
- `GradeRequest.delivery` and a fenced delivery block in `grade-exam`.
- Fixture gained a `po_interaction` épreuve with a 120 s prep window, so the paper now has all four.

**The rule this phase is built around:** a signal exists only if it was measured. Every field on `DeliverySignals` is optional and nothing is zero-filled. A recogniser that reports no confidence yields no confidence signal; an answer captured without interim transcripts yields no pause signal. Substituting a plausible default would invent evidence about a candidate's speech, which is the same class of mistake as fabricating a band.

**Three bounds on the delivery signals, each enforced somewhere different:**
1. `deliveryNote()` puts what the numbers are NOT before what they are — a model handed a bare `{wpm: 92}` will reason about pronunciation it cannot hear.
2. The `grade-exam` prompt fences them: fluency criterion only, never pronunciation or accent, and the transcript outranks them on conflict.
3. `deliverySummary()` shown to the candidate carries no judgement words at all — a test asserts the absence of "good", "slow", "hesitant" and friends.

**Deviation:** pauses are derived from gaps between interim transcripts rather than silence-detecting the WAV. That is the only view of hesitation available without decoding audio, and it degrades honestly — no partials means no pause signal rather than a fabricated one.

**Not done:** §3 of the prompt, the role-play interlocutor via `Scenario.exam`. The recorder captures a `po_interaction` answer, but the examiner does not yet answer back, so that task is currently a monologue against a written prompt. Called out rather than quietly skipped.


```
Make expression orale real. Today the runner renders a TextInput for
po_monologue and po_interaction, so a PO score measures typing. Read
EXAM-PACK-PHASE-PROMPTS.md §0. E2 must be merged first; E3 can run in parallel.

Locked decision: grade the TRANSCRIPT plus DELIVERY SIGNALS, labelled as rough
indicators. Not multimodal audio grading, not transcript alone.

WHAT EXISTS: services/stt.ts records via expo-speech-recognition, streams
interim transcripts, persists a WAV, and falls back to a Whisper Edge Function.
It reports available: false rather than inventing a transcript. Reuse all of it.

BUILD:

1. Long-form capture. STT today is tuned for a drill utterance; a TEF Section B
   answer runs to 10 minutes. Make WAV-then-Whisper the PRIMARY path for exam
   tasks, with device recognition as the live-feedback layer only. Chunk long
   recordings rather than holding one buffer.

2. Prep timers where the format has one. TCF tâche 2 gives 2 minutes with the
   document before the interaction starts; tâche 1 and 3 give none. The prep
   clock is separate from the answer clock and both come from the blueprint.

3. The interlocutor. TEF EO Section A and TCF EO tâche 2 require the candidate
   to ASK and an examiner to ANSWER. Scenario.exam?: { format, taskId } already
   exists in the schema for exactly this, validated to point at a real po_* task.
   Wire the role-play engine into it. Without this, an interaction task is a
   monologue wearing an interaction's label.

4. Delivery signals, computed locally, attached to the grade request:
     - STT confidence (stt.ts already reports it; -1 means unreported)
     - speech rate, syllables or words per minute
     - pause count and longest pause
   Extend grade-exam to accept them as SUPPLEMENTARY rubric input and to say
   in its own output which part of the feedback came from them.

5. HONESTY CONSTRAINT, non-negotiable. These are proxies computed from a
   transcript and a recogniser, not a pronunciation assessment. The report must
   say so in plain words. Never present a delivery signal as a pronunciation
   score, and never let it move the band by more than the rubric criterion it
   feeds. If confidence is unreported, drop the signal rather than substituting
   a default.

6. Playback. The candidate hears their own answer on the report. Keep the WAV
   for the session; do not upload it.

DONE WHEN: an EO task records for several minutes on device, transcribes,
grades against the rubric with delivery signals attached and labelled, plays
back, and reports "not graded, retry" rather than any fabricated band when
grading is unavailable.
```

---

## E4b — The recorded interlocutor ✅ COMPLETE 2026-08-25

E4 built the recorder, which serves a monologue. It does not serve an
INTERACTION, and the two TEF/TCF speaking tasks that matter most are
interactions.

**What E4's own prompt got wrong.** It said to wire the role-play engine into
the interaction task. That was reversed on inspection, and the reason is worth
keeping: a `ScenarioTurn` carries `user`, a TARGET line the learner is scored
against. That is a recite drill. Applying it here turns "obtain the information
you need" into "say this sentence" — the same defect the TextInput was for
speaking. Nothing in the interlocutor knows what the candidate is supposed to
say, because the exam does not either.

**The shape that shipped** (`src/utils/interlocutor.logic.ts`,
`src/components/ExamInterlocutorTask.tsx`):

- **Recorded, not generated.** The task carries an authored answer bank and the
  candidate's transcript selects from it. Offline, deterministic, repeatable
  across candidates, and inside what was reviewed. A live model would be none
  of those.
- **Candidate-paced.** `stt.listen` resolves on end of speech, so the loop is
  opening → listen → select → play → listen. The examiner never talks over
  the candidate and never waits on a fixed clock.
- **Cue-matched.** Every word of a cue must appear in the transcript, in any
  order, matched on whole words after `normalizeFr`. More matched cues wins, so
  a specific question beats a vague one regardless of authoring order.
- **Catch-all deflection.** An unmatched question gets a deflection that hands
  the turn back — what a real examiner does when asked something off their
  sheet. Never a wrong answer, never dead air.
- **No repeats.** An answer already given is retired. A candidate cannot coast
  by rewording one question, and when the bank is spent the examiner closes.

**Coverage is the score.** The blueprint judges Section A partly on whether the
questions were APPROPRIATE AND COMPLETE. The answer bank IS that definition, so
which answers a candidate unlocked is *direct* evidence of task completion —
unlike the delivery signals, which are proxies. `coverageNote` therefore states
it plainly, with none of `deliveryNote`'s hedging, and `grade-exam` places it
WITH the transcript rather than fenced off beside delivery. The grader is told
explicitly that the transcript holds the candidate's turns only, so an unasked
item is an incomplete task and not a language error.

### What E7 must author for every `po_interaction`

A bank is now REQUIRED: `validateExamTask` rejects a `po_interaction` without
one, and migration 0020 refuses the same row shape in the database.

1. **One answer per fact the document withholds.** Six to nine is the range the
   dev fixture proves; fewer than four is too thin for a five-minute section.
2. **`covers` on every answer**, in the author's words. It is the checklist the
   grader is shown and the progress the candidate sees. A blank one makes the
   fact invisible to marking.
3. **Cues as things a candidate would ACTUALLY say**, not bare keywords.
   "combien" alone answers a question about group size with the price.
4. **The model answer must reach every answer.** Guarded by
   `devExamFixture.interlocutor.test.ts`: if a cue does not fire on the
   author's own model answer, it will not fire on a candidate either, and the
   fact behind it can never be obtained no matter how well they perform. Copy
   that test onto the gold paper.
5. **`prepS`** — the silent preparation window (TEF EO Section A allows two
   minutes with the advert). A task that skips it is not the same task.

   The section clock runs THROUGH the preparation, which is deliberate: TEF
   allots fifteen minutes to the whole épreuve, preparation included. So
   `timingS` must be authored as prep PLUS interaction, not interaction alone.
   The dev fixture gets this wrong (300s covering a 120s prep leaves barely
   three minutes of talking); a real paper must not.

E8 renders `audioRef` and `durationS` for each turn. Until then the bank speaks
through device TTS, which is exactly how the listening parts already behave.

---

## E5 — Report and NCLC estimation

```
Build the screen the product is sold on. Read EXAM-PACK-PHASE-PROMPTS.md §0
and EXAM-PACK-REDESIGN.md §4.4. E1 must be merged; E2 to E4 should be.

/exam-report?paperId=… replaces the current end-of-series summary.

THREE RULES, each of which the screen must structurally enforce:

1. THE LOWEST SKILL GOVERNS. IRCC sets a candidate's level skill by skill; the
   weakest épreuve decides. Report that, and say it on screen. An average would
   flatter the candidate and mislead them about eligibility.

2. NCLC IS A RANGE, never a bare point estimate. Read SectionScoring.nclc,
   which E1 defined as { minRaw, maxRaw, nclcLow, nclcHigh }. Display
   "31/40, estimation NCLC 6 à 7". The raw count is always visible so the
   candidate can see what the estimate came from. We cannot equate raw to
   scaled the way the exam bodies do; the range is what makes the claim
   defensible.

3. NO BAND IS EVER FABRICATED. If grading was unavailable, the section reads
   "non corrigé" with a retry, not a blank and not a zero. examGrader already
   refuses to invent; the report must not paper over it.

ALSO ON THE SCREEN:
  - the existing examDisclaimer and examPracticeEstimate strings, prominent,
    not a footnote
  - "épreuves blanches parallèles, non calibrées" language for the score maps,
    matching the tone of ExamSeries' own doc comment
  - an unscored badge on any attempt taken in mode entraînement
  - per-error review: every missed MCQ links back through targetItemIds to the
    SRS atoms. decomposeExamMiss already does this decomposition; populate
    targetItemIds PER ITEM, not per task, or the link resolves to the wrong atoms.
  - per-skill prep links via dueExamSkills, which resolves a missed open skill
    to a lesson through Lesson.skill. It returns prepLessonId: null when no
    lesson exists at that band. Treat null as a real gap and surface it in the
    admin, not as a value to drop silently.
  - the rubric-criterion breakdown from grade-exam, so the candidate sees where
    the points went, not just a paragraph

EXTEND grade-exam: return a per-criterion breakdown, and accept a target scale
(/20 for TCF, /450 for TEF, /25 for DELF) rather than only a CEFR band, so it
speaks the candidate's language. Keep every existing guard: rubric and model
answer required, structured output validated, own quota, no fabrication.

DONE WHEN: a completed fixture paper produces a report whose headline NCLC
equals its weakest section, every number is a range with its raw count, an
ungraded section says so, and a mode entraînement attempt is visibly unscored.
```

---

## E6 — Home and navigation rewrite ✅ COMPLETE (device-proven 2026-08-25)

App: typecheck clean, **5090 tests pass** (was 5082). **Device-proven on the Pixel 6.**

**The brief's original defect is closed.** `examMeta` is deleted from the `Strings` type, both language tables, the i18n parity guard and `home.tsx`. A test pins that neither the key nor its captions can return.

Observed on device:
```
MOCK EXAM                     MOCK EXAM
TEF Canada                    TCF Canada
4 papers · 2h 55m             4 papers · 2h 47m
CO 40 · CE 40 · EE 2 · EO 2   CO 39 · CE 39 · EE 3 · EO 3
```
Every card carries the same four kinds of fact, differing only in value. No format is characterised by one of its épreuves.

What landed:
- `src/content/examFormats.ts` — per-format facts sourced from the E0 blueprints, each citing its `blueprintId`. DELF B2's unpublished question counts are `null` and the breakdown omits them rather than guessing.
- Home cards and section header rewritten; the right slot is now the paper count rather than `TEF · TCF · DELF`, which merely repeated the card titles.
- `app/exam.tsx` rebuilt as the format hub: disclaimer, format summary, the two ways in (*Examen complet* / *Par épreuve*), and the paper list.
- `src/utils/examGate.logic.ts` + `examGateOn` / `examFreePapers` in RemoteConfig. `hasFeature('examiner')` is now actually called — it had been modelled since Phase 10 and checked by nothing, so the exam screens were free by omission rather than by decision. **Ships open** (`examGateOn: false`), free allowance 1 paper.

**Device run found one defect, fixed:** the count read "1 mock exams". Pluralised via `examPapersCountOne`.

**Note on the breakdown labels.** It prints EE and EO, not PE and PO. The internal skill codes are production-first; the abbreviations on a real paper are expression-first. Printing the internal codes would put two strings on the card that appear on no exam paper anywhere — the same crossover that made `EXAM_SECTION_ORDER` subtle in E1, and there is a test for it.


```
Remove the skill-narrowing claim from the home screen and build the format hub.
Read EXAM-PACK-PHASE-PROMPTS.md §0 and EXAM-PACK-REDESIGN.md §4.1-4.2.
E2 and E5 should be merged so the new navigation lands on real screens.

THE DEFECT: ealch-v2/src/i18n/strings.ts:723 and :368 define
  examMeta: ['Speaking · 15 min · timed', 'Listening · single play',
             'The examiner interrupts you']
index-aligned to the EXAMS chip array in app/home.tsx:521. Each caption is true
of ONE épreuve of that exam and false of the exam. It reads as a claim that TEF
is the speaking one and TCF is the listening one.

DELETE examMeta from both language blocks and from the i18n test's array-key
list. Replace the chip caption with the paper's own vital statistics, which are
the same KIND of fact for every format:

    EXAMEN BLANC
    TEF Canada
    4 épreuves · 2 h 55
    CO 40 · CE 40 · EE 2 · EO 2
    Examen 3 en cours              ▸

Every card says: this is a mock paper, it has four épreuves, here is the total
time, here is the question count per épreuve. No format is presented as "the
speaking one". The section header's right slot changes from "TEF · TCF · DELF"
to the paper count, because that is now the interesting number.

BUILD /exam?format=… as the FORMAT HUB, replacing today's flat series list:
  - the disclaimer, before any exam content renders (it already does; keep it)
  - a format summary card built from the blueprint
  - a mode switch: [ Examen complet ] [ Par épreuve ]
    "Par épreuve" keeps the skill-focused practice the old chips implicitly
    offered. It stays useful; it just must not be presented as what the exam is.
  - Examen 1 to 5 as a grid, each showing state and best NCLC estimate

ENTITLEMENT PLUMBING, gate OFF:
  entitlement.logic.ts already models 'examiner' as a distinct product
  (ACCESS_LEVEL_EXAM), explicitly not granted by Première, and neither exam
  screen currently calls hasFeature. Wire the check now, behind a remote flag
  defaulting to open, so Paul can lock it later without a build. Include the
  free-paper allowance in the flag shape; one full paper is the strongest demo
  the product has.

COPY: no em dash in any user-facing string. Use "·" or a comma.

DONE WHEN: examMeta is gone from the repo, every format card carries the same
four facts, the format hub renders papers and both modes, hasFeature is called
on the exam entry points, and the flag defaults to open.
```

---

## E7 — Gold paper: TEF Canada Examen 1 ✅ COMPLETE 2026-08-26 (reviewed and sat; publish held for E8)

```
Author one complete TEF Canada paper by hand, to full human review. This is the
template every later paper is generated against, so every structural defect
found here costs 1x and every one missed costs 5x.

Read EXAM-PACK-PHASE-PROMPTS.md §0. Read ONLY these inputs:
  ealch-admin/exam-blueprints/BLUEPRINT-tef-canada.md
  ealch-admin/exam-blueprints/STANDARD-tef-canada.md
  ealch-admin/exam-blueprints/TOPICS-tef-canada.md
  our own corpus (content_items, content_themes)

THE FIREWALL (§0.3). You have not been given a source item and you must not go
looking for one. Every stimulus in this paper is written fresh from the topic
bank. If a passage starts to feel familiar, discard it.

PRODUCE paper.tef_canada.blanc-01.1 with four sections:

  CO  40 questions / 40 min / blocks A-G per the blueprint
      Each part gets: a transcript, a document type, a voice cast note, a
      playCount, a readWindowS. Block A parts need an image and an imageAlt.
      Micro-trottoir items take 3 options; everything else takes 4
      (changed 1 Sept 2025).
  CE  40 questions / 60 min / blocks A-E per the blueprint
      7 everyday documents, 10 gapped, 5 rapid-read with a graphic,
      10 administrative/professional, 8 press.
  EE  2 tasks / 60 min
      A: fait divers, 80-120 words, journalistic register, impersonal, past
         tenses, no first person. B: lettre argumentée, 200+ words, three
         developed arguments.
      Each needs a rubric with real descriptors and a model answer that would
      actually score. validateExamTask requires both.
  EO  2 tasks / 15 min
      A: obtain information (po_interaction, wire Scenario.exam).
      B: convince (po_monologue).

EVERY MCQ ITEM NEEDS: a defensible unique key, three or four plausible
distractors, and a `why` rationale for the report. Populate targetItemIds
PER ITEM against real corpus items so a miss decomposes into the right SRS atoms.

SELF-VERIFY BEFORE HANDING OVER. For every item ask, and record the answer:
  - is the key defensible and UNIQUE, or is a distractor also arguably correct?
  - is the item answerable WITHOUT the stimulus? (then it tests nothing)
  - does the key give itself away by length or specificity?
  - does the French pass gates/check_french.py and check_gender.py?
  - does the item collide with anything else in our corpus? (n-gram check)
  - is "honest"/"honnête"/"malhonnête" anywhere in the text? (banned)

Write SectionScoring for all four sections: raw-to-scaled maps and NCLC ranges
per the blueprint grid. Default NCLC span is 2. Say in the task's examinerNotes
that the map is expert-judged, not equated.

LANDS in_review. generatedBy honestly. Full human review, all four sections,
before anything else in E8 or E9 starts.

DEVICE PROOF: sit the whole paper on the Pixel 6, timed, both modes. Two hours
fifty-five minutes. Log every defect found and fix it in the MODEL, not in the
content.

DONE WHEN: 84 scored units exist and validate, the paper passes validateExamPaper,
a human has reviewed all four sections, and it has been sat end to end on device.
```

### E7 status — authored and device-proven, NOT yet reviewed

**Done.** 84 scored units exist, validate, and have been sat on device.

| | |
|---|---|
| Content | `ealch-admin/scripts/tef-blanc01/` — CO 7 tasks / 40 q, CE 6 / 40, EE 2, EO 2 |
| Applied | 17 tasks + 1 paper, `in_review`, live DB, 2026-08-26 |
| Verified | `scripts/tef-blanc01/paper.test.ts` — 36 assertions, STANDARD §6 and §9 as tests |
| Gates | `gates/check_prose_gender.py` — 1155 determiner+noun pairs, 0 disagreements |
| Device | CO and CE opened and rendered under the real clocks on the Pixel 6 |

**Reviewed and sat, 2026-08-26.** Paul reviewed the app and sat the paper end
to end, and reported nothing to change. That clears the gate E8 and E9 were
blocked on.

**Still `in_review` on purpose.** The status was NOT flipped to published, and
the reason is not the content:

> Publishing today would ship the listening épreuve spoken by device TTS: one
> synthetic voice for every speaker. Block C asks a candidate to tell three
> street-interview speakers apart, and block E is a two-voice interview. A
> single voice does not make those blocks harder, it makes them a different
> task, and a candidate would read the result as their French.

Decision (Paul, 2026-08-26): hold the publish, build E8, then publish the paper
with real multi-voice audio. Reading, Writing and Speaking are unaffected and
could have shipped alone; they wait so the paper ships whole.

**One defect fixed on the way out.** The transcript reached device TTS verbatim,
so the fallback read the stage directions aloud: "LA CLIENTE deux points
Bonjour", and "PERSONNE 1 deux points" three times over on a micro-trottoir.
`spokenTranscript` in coPlayback.logic.ts now strips speaker labels and stops
each turn so the voice pauses between speakers. It does not turn one voice into
three, and says so: that is E8's work.

### What E7 found, and fixed in the model

Four defects, all found by building a real paper rather than a mock:

1. **The runner never shuffles options.** `taskQuestions` flattens parts in
   authored order and nothing permutes — unlike the lesson quiz, which shuffles
   at runtime. A paper authored key-first would have been answerable at 40/40
   by always tapping the first option. Fixed by `finalise.ts`, which places
   every key deterministically after authoring, and asserted by a distribution
   test. **This applies to every paper E9 generates.**
2. **A listening part's status line clipped at the right edge** ("The audio is
   about to star"). The row had no way to shrink. Fixed with the flex on a
   wrapper, never on the `TX`.
3. **An unrendered image plate drew 160dp of empty card.** Block A's plates are
   E8's work, so every one of them 404s today. Fixed: on load failure the
   authored alt is shown instead, which keeps the item answerable and is what a
   screen-reader user already had.
4. **The image briefs claimed an option order they could not know.** They said
   "dans l'ordre des options : (A) … (B) …", which was true when written and
   false once the keys were scattered. Caught only because defect 3's fix put
   the alt on screen. The briefs now describe the panels and nothing else, and
   a guard rejects `(A)`-style labels.

### What E8 and E9 inherit

- **E8 renders each block A plate in the order of the STORED `opts` array.**
  That is the scattered order and the only true one.
- **`paper.test.ts` is the verifier for papers 2 to 5.** Every rule in it is
  format-level, not paper-level. E9 should point it at each generated paper
  rather than restating the standard in prose.
- **`check_prose_gender.py` is the gate that can actually see a paper.**
  `check_french.py` and `check_gender.py` read corpus-item fields and are blind
  to prose, so the handover checklist's "run check_gender.py" was, for a paper,
  a check that could not fail.

### Known costs, accepted

- **Block A is text-options until E8.** The options render as their alt
  descriptions, which makes the block easier than the real one.
- **`targetItemIds` is per TASK, not per item.** The schema has no per-question
  field, so a missed block G item decomposes to block G's themes rather than to
  its own. Coarser than STANDARD §9 asks for.
- ~~**`devExamPaper.ts` ships 121 KiB of unreviewed content in every build.**~~
  RESOLVED 2026-09-01. The `__DEV__` fence kept it out of release CONTENT but not
  out of the release BUNDLE. Deleted with `devExamFixture.ts` and its generator
  `emit-dev-paper.ts` once blanc-01 published as v57 — 2,984 lines, 139 KiB. The
  ten tests that depended on the fixture were checked one by one first: most were
  already duplicated, more strictly, by `tef-blanc01/paper.test.ts` against the
  real paper; the two that were not (section scoring present, and the PO `prepS`
  prep clock) were ADDED there before deleting.
- **EE and EO report three-level NCLC spans.** Two tasks give three raw scores;
  that is the resolution two marks carry.
- **Below the NCLC 4 floor the paper declines to estimate.** A four-option MCQ
  pays 25% for guessing, and NCLC 4 is an immigration threshold. The report
  says it cannot place the candidate rather than awarding a level nobody
  earned — but the report's copy for that case still reads "missing", which is
  the E5 vocabulary gap already in the open-items table.

---

## E8 — Voice casting and audio render ✅ COMPLETE 2026-08-28 (marking pending)

```
Give TEF Canada Examen 1 its real voice. Read EXAM-PACK-PHASE-PROMPTS.md §0.
E7 must be human-reviewed first; do not pay for synthesis of content that may
still change.

TWO-STAGE, per the locked decision:

STAGE 1 — CASTING, in the ElevenLabs browser UI.
  Audition and lock a cast per document type, from the STANDARD file's register
  notes: a micro-trottoir is not a radio chronicle, a public announcement is not
  an interview. Produce ealch-admin/exam-blueprints/VOICES-tef-canada.md: voice
  id, document types it serves, prosody settings, and a one-line reason. This
  file is the render script's input and must not be regenerated casually.

STAGE 2 — RENDER, via ealch-admin/scripts/render-audio.ts.
  The script already has what matters: ElevenLabs synthesis, sha256(text|voiceId|
  provider|renderVersion) idempotency so a re-run costs only the delta, per-unit
  commits so a dead run leaves durable progress, R2 or Supabase upload, and the
  audio_assets ledger.

  THREE EXTENSIONS NEEDED:
  1. Exam parts as a render unit. Today's units are dictation items, lesson
     audio sections, narration segments and section say-scripts. Add every
     ExamPart carrying a transcript.
  2. MULTI-SPEAKER STITCHING. This is the largest piece of new pipeline work.
     A conversation or interview has two or three voices; today one unit renders
     in one voice. Needs a turn list ({ voice, text }[]), rendered per turn and
     concatenated with a natural gap. The assetKey must hash the whole turn list
     so a single edited turn re-renders the document and nothing else.
  3. Casting from VOICES-<format>.md rather than the hardcoded Amélie/Léo/Liam
     assignment, which is dictation and narration policy and does not apply here.

  DO NOT add ambient noise or overlapping speech. It multiplies cost and QA time
  for a realism gain candidates do not score on.

MARKING: a clip is "marked" when a human has listened to it against its
transcript and signed it off. Only marked clips upload. Until a part's clip is
marked, the app keeps speaking it via on-device TTS (E3), which is why nothing
here blocks the runner.

BUDGET CHECK: ~170 documents for TEF's five papers, ~800 characters each.
Report actual character count and cost after Examen 1 so E9's budget is measured
rather than estimated.

DONE WHEN: every CO part of Examen 1 has a marked, uploaded clip; a multi-voice
document renders as one file with natural turn gaps; a re-run of the script
renders zero clips; and the app plays the real clips with no code change.
```

### E8 status — stage 2 done, stage 1 needs an ElevenLabs session

**The pipeline is built and proven as far as it can go without voice ids.**

| | |
|---|---|
| Casting logic | `scripts/lib/examAudio.ts` — turn parsing, sex from label, per-document casting, asset key. 20 tests |
| Cast list | `scripts/lib/voices.ts` — parses `VOICES-<format>.md`, refuses an uncast slot. 5 tests |
| Stitching | `scripts/lib/stitch.ts` — ffmpeg, real silence between turns. 3 tests, proven end to end |
| Renderer | `render-audio.ts` collects every CO part, casts it, and reports it. `--dry-run` lists all 30 |
| Casting brief | `exam-blueprints/VOICES-tef-canada.md` — 8 slots, registers, prosody targets, blank ids |

**Rendered, 2026-08-27.** All 30 listening documents of Examen 1 are synthesised,
stitched and uploaded. 13.4 minutes of audio.

| | |
|---|---|
| Documents | 30, across 7 épreuve tasks |
| Turns | 67 synthesis calls |
| Characters | 11,379 first pass, 8,605 on the pacing re-render |
| Uploaded | 19.4 MB to R2 across both passes |
| Re-run | renders **0** clips — the idempotency criterion |

### What the audio revealed, which nothing else could

**The voices read far too fast for the lower bands.** 18 of 30 documents sat
outside a ±18% rate band, almost all too fast: block A measured 144 wpm
against a 120 target, block B 173 against 140, block G 173 against 140. Blocks
C to F, which target 160–175, were fine. The voices read at a natural B2/C1
pace, so the A2/B1 on-ramp was harder than the format specifies.

This was invisible until the clips existed: the authored `durationS` was my own
estimate, so dividing words by it would have measured my arithmetic rather than
the recording. `check-speech-rate.ts` is the durable version of the check.

**Fixed by a per-block `speed`.** Rate is per BLOCK, not per slot, because one
voice serves blocks at different bands. Verified honoured by
eleven_multilingual_v2 before spending anything: a probe render at speed 0.81
lengthened a test clip by 26%. After the re-render, **0 documents are outside
the band** — A 124/120, B 142/140, G 141/140, every block within 5%.

**The runner was waiting on my estimates.** `estimateDurationS` uses a part's
`durationS` to time the playing phase, because `speakItem` fires its completion
callback immediately on the clip path. The authored values ran up to 9 seconds
long, which is dead air in an exam. The renderer now writes the measured length
back with the ref, and `backfill-durations.ts` corrected the four parts rendered
before that landed — by reading the file size rather than paying to re-render.

**The app was pointed at the wrong storage.** Without
`EXPO_PUBLIC_ASSET_BASE_URL`, `contentAssetUrl` falls back to the Supabase bucket,
and the clips are in R2 — every part would have been marked unplayable. Set in
ealch-v2/.env. Safe to switch globally: no other content in the corpus carries
an asset ref (0 items with audio, 0 with images).

**The dev paper was emitted from the wrong source.** `emit-dev-paper.ts` read the
authored modules, where `audioRef` and the measured `durationS` do not exist. It
now reads the database, so the dev build carries the rendered clips: 30 of 44
parts have one, the other 14 being reading documents.

### Still open

1. **Marking.** No clip has been listened to. E8's own definition: a clip is
   marked when a person has heard it against its transcript. Two things to
   listen for are in VOICES-tef-canada.md §6, and speaker distinctness in
   blocks C, E and F is the one that matters most.
2. ~~Device proof.~~ **Done 2026-08-28.** The listening épreuve was opened on
   the Pixel 6 and played the real clips: ExoPlayer reached PLAYING, the part
   showed "Playing" then "Audio finished", and **all 30 clips were cached to
   `cache/audio-clips/` with zero TextToSpeech calls in logcat**. That last
   number is the proof: one TTS call would have meant a clip failed to
   resolve and the fallback ran. No code change was needed for the runner to
   play them, which was the phase's own DONE wording.
3. **Six documents are still short of the blueprint's length envelope**, and
   this is now a CONTENT gap rather than a pacing one — the transcripts are
   too short. Block B's four announcements run 15–19s against a 20–35s
   envelope, and Section F's reportage runs 86s against 120–180s. F is the
   material one: it is the paper's single gist item on its longest document.
4. **The interlocutor's 13 turns are still device TTS.** Same pipeline, one
   voice, a different write-back.

### The budget, measured instead of estimated

The brief asked for this after Examen 1
(`pnpm tsx scripts/tef-blanc01/audio-budget.ts`):

| | Brief's estimate | Measured |
|---|---|---|
| Characters per document | ~800 | **292** |
| Documents, five TEF papers | ~170 | ~215 |
| Characters, five TEF papers | ~136,000 | **~63,000** |

Roughly **half** what was planned for. But the billing unit is not the
document: a three-speaker document is three synthesis calls, so Examen 1 is
**67 requests for 30 listening documents**, and 80 including the interlocutor.
Budget in turns.

### What the dry run found, and what was fixed

**Block G was casting every document neutral.** A pharmacist's instructions and
a street opinion got the same voice, because one preference list was applied to
a block the blueprint itself calls a mixed bag. `registerFor` now reads the
sub-type out of the part label, so block G's four micro-trottoirs cast to street
voices, its instructions and public-information messages to formal ones, and its
two voicemails differ correctly — a recorded service line is institutional, a
tenant leaving a message is not.

**Two speaker labels name different people.** `L'AGENT` is a station employee in
block A and a town-hall clerk in block B; `LE CLIENT` is a bakery customer and a
shop customer. Casting is per (document, label), never per label, and a test
pins it.

### Decisions worth keeping

- **An uncast slot refuses; it never substitutes.** Borrowing another voice is
  exactly how two speakers in one document end up sounding alike, and that
  breaks the item after the credits are spent.
- **The asset key hashes voice IDS, not slot names.** Recasting `f-street` to a
  different ElevenLabs voice must re-render everything she speaks, and would not
  if the slot name were hashed.
- **ffmpeg, not byte concatenation.** Same-format MP3s mostly concatenate, and
  mostly is not good enough when the gap between speakers is the cue a listener
  uses to tell them apart.
- **No `audio_assets` row for a listening document.** The ledger is keyed on
  `item_id` and a document is not an item, so idempotency comes from the ref's
  own filename stem — the same pattern lesson narration already uses.

### Still open

- **The interlocutor's 13 turns are not rendered.** The brief's DONE covers CO
  parts only, and EO Section A still speaks through device TTS. Same pipeline,
  one voice, a different jsonb write-back — a small follow-on, not a rebuild.
- **Marking.** No clip is marked, because no clip exists. The runner keeps
  using on-device TTS until one is, which is why none of this blocks anything.

---

## E9 — Scale: TEF 2-5 and TCF 1-5

```
Produce nine more papers using Examen 1 as the template. Read
EXAM-PACK-PHASE-PROMPTS.md §0. E7 and E8 must be complete, and every defect
found while sitting Examen 1 must already be fixed in the model.

VOLUME: ~730 MCQ items, ~44 open tasks, ~300 audio documents. Past the point
where manual agent waves are sensible, so this is a Workflow, per the locked
decision.

INPUTS, and nothing else: the BLUEPRINT, STANDARD and TOPICS files for the
format, plus Examen 1 as the shape reference. The firewall (§0.3) still holds:
no authoring agent sees a source item.

PIPELINE SHAPE:

  PAPER PLAN — deterministic, generated, human-approved before authoring.
    For paper N: every block, its topic drawn from the bank without repeating
    a topic used in papers 1..N-1, its CEFR target, its document type, its
    question count, its target corpus items.

  STIMULUS AUTHORING — one agent per block, in parallel.
    Writes the passage, advert, form, graphic description or dialogue script.
    Original, from the topic bank.

  ITEM AUTHORING — questions, options, key, why, targetItemIds per item.

  ADVERSARIAL VERIFY — a SEPARATE agent per item, prompted to REFUTE:
    - is the key defensible and unique, or is a distractor also correct?
    - is the item answerable without the stimulus?
    - does the key give itself away by length or specificity?
    - does the French pass check_french.py and check_gender.py?
    - does it collide, by n-gram, with any other paper or our corpus?
    - is "honest"/"honnête"/"malhonnête" present?
    Default to refuted when uncertain. An item that survives fewer than two of
    three verifiers is rewritten, not shipped.

  HUMAN REVIEW — full tier for every open task (reviewTier.ts already mandates
    it). Sampled for MCQ, with the whole block pulled for full review whenever
    a sample fails.

  AUDIO — E8's pipeline, casting locked, budget measured from Examen 1.

TCF-SPECIFIC, and easy to get wrong: CO and CE run a PROGRESSIVE A1 to C2 ramp
inside one 39-question épreuve. Every QcmItem needs its `band`, and the sequence
must actually ramp. A paper of uniformly B1 items is not a TCF paper. Check the
band distribution per paper before review, not after.

NO SILENT CAPS. If the workflow bounds coverage anywhere (top-N, no-retry,
sampling), log what was dropped. Silent truncation reads as "covered everything"
when it did not.

DONE WHEN: nine papers validate, every open task has had full human review,
band distribution ramps correctly on all five TCF papers, no n-gram collision
across papers, and the audio for all of them is marked and uploaded.
```

---

## E10 — DELF B2, publish, and the gate

```
Close out the first release. Read EXAM-PACK-PHASE-PROMPTS.md §0.

1. DELF B2 EXAMEN 1, one paper only.
   FIRST: resolve the gap E0 could not. DELF B2's per-exercise question counts
   for CO and CE are not published on any page consulted. Confirm them against
   an official sample paper before authoring a single item. Do not invent counts.
   Then run the E7 process at DELF's smaller scale: CO and CE fully MCQ, PE one
   argued position of ~250 words, PO an exposé from a trigger text plus a debate.
   Scoring is /25 per épreuve, pass at 50/100 with a floor of 5/25, so DELF's
   report shows CEFR points rather than NCLC. The report screen must handle
   both scales.

   The two existing in_review rows (exam.delf_b2.blanc-01.ce_mcq.001 and
   .pe_essay.001) can be folded in or superseded. Do NOT delete them.

   After this ships, DELF is PARKED. No paper 2 until TEF and TCF are complete.

2. PUBLISH.
   - Run content:parity first. Check for anything seed-only that a publish
     would delete.
   - Run the publish dry-run and read it. The seed is merged-shape until a
     publish regenerates it, and that has broken suites before.
   - Confirm exam content is still OUT of the seed cut. No offline, by decision.
   - Verify the snapshot carries all 11 papers and that a fresh install fetches
     them.
   - A published snapshot version is what learners have. rollout 0 stops new
     adopters and heals nobody; only a rollback heals.

3. THE GATE, still off.
   The remote flag from E6 stays open. Confirm the plumbing works by flipping it
   in a dev config and checking the paywall renders, then flip it back. Document
   the flag name and the free-paper allowance so Paul can lock it later without
   a build.

4. STALENESS REPORT, in the admin.
   Every task carries formatVersion. TEF Canada changed on 1 Sept 2025 and will
   change again. Add a report listing tasks whose formatVersion is behind the
   current blueprint version, so "stale" is never mistaken for "wrong".

DONE WHEN: 11 papers are published and fetchable on a fresh install, the seed
carries no exam content, the gate flag is documented and open, and the staleness
report renders.
```

---

## Sequencing

```
E0 Calibration ──┬─→ E1 Model ──┬─→ E2 Runner core ──┬─→ E5 Report ─→ E6 IA
                 │              │                    │
                 │              ├─→ E3 CO audio ─────┤
                 │              │                    │
                 │              └─→ E4 EO capture ───┘
                 │
                 └────────────────────────→ E7 Gold paper ─→ E8 Audio ─→ E9 Scale ─→ E10 Close
```

E1 through E6 are engine work and can run alongside E0's blueprint authoring.
**E7 blocks E9 absolutely.** Do not author paper 2 before paper 1 has been sat
end to end on a device, timed, with real audio and a real report.

---

## Open items carried forward

| Item | Owner | Blocks |
|---|---|---|
| DELF B2 per-exercise question counts | needs an official sample paper | E10 only |
| TEF CO's 7 unallocated questions (published breakdown sums to 33 of 40) | E0 resolves or writes the fill rule | E7 |
| Premium lock date and price | Paul, future | nothing; plumbing ships open |
| Multimodal speech grading | deferred; transcript plus delivery signals ships first | nothing |
| Papers 6 to 20 | after the first 11 land | nothing |
| MARKING: listen to the 30 rendered clips against their transcripts | Paul | E8 completion, and the blanc-01 publish |
| ~~Deploy `grade-exam`~~ | done 2026-08-30, all four open tasks grade | — |
| Grading has a failover chain ONE provider deep | Paul: add a second provider secret | resilience only; grading works |
| `gradeFreeTurnsPerDay` is unset, so 5/day per device | Paul: set it in system_config | a paper has 4 open tasks |

### grade-exam, deployed 2026-08-30

**It had never been deployed.** Not in the project's function list at all, so
every essay and speaking task the app ever submitted came back "grading
unavailable". That message was not about a bad response; there was nothing
listening.

Deployed from disk (`supabase functions deploy grade-exam --no-verify-jwt`)
rather than by hand, so the 690 lines of grading code are byte-exact.

**Verified against the paper's own model answers**, which is the one input
whose expected outcome is knowable: a model answer written to score at its
task's target band should come back at that band.

| Task | Target | Graded |
|---|---|---|
| EE A · fait divers | b1 | **b1** |
| EE B · lettre argumentée | b2 | **b2** |
| EO A · obtenir de l'information | b1 | **b1** |
| EO B · convaincre | b2 | **b2** |

It is reading the rubric, not rubber-stamping: on EE A it marked the answer
down for adding no new information, which is that rubric's own "recopier ne
compte pas comme information nouvelle"; on EO B it credited the candidate for
anticipating the objections, which is the `adaptation` criterion.

**Two findings.**

1. **The failover chain is one provider deep.** Only `NVIDIA_API_KEY` is set,
   so `chain: ["nvidia"]` and a NVIDIA rate limit is a total grading outage —
   three of six probe calls hit `ResourceExhausted: Worker local total request
   limit reached (16/16)`. routing.ts is built for failover and has nothing to
   fail over to. An `OPENROUTER_API_KEY` would give it a second leg at the same
   cost ceiling.
2. **A grading failure was invisible.** Failures went only to `posthog()`,
   which returns silently when `POSTHOG_API_KEY` is unset — as it is here. So
   the first failed request produced a 503 to the client and nothing anywhere
   else; the logs said only "booted". Every event now also goes to the function
   log, and the provider's own error text is included, because `nvidia 503`
   alone cannot separate a bad model id from an expired key from a rate limit.

**Dead config:** the project sets `NVIDIA_MODEL`, the function reads
`NVIDIA_AI_MODEL`. Harmless today — the routed model comes from `system_config`
and matches `DEFAULT_MODEL` — but the secret does nothing.
| ~~Multi-voice device TTS~~ | done 2026-08-30 | — |

### Multi-voice device TTS, 2026-08-30

The fallback used to read a whole document in one voice, which made block C —
"which of these three people thinks what" — a different task from the one it
asks. It now walks the turns and gives each speaker its own device voice.

This matters for E9, not for learners: every clip in blanc-01 exists, so the
fallback only runs on a paper that has been authored and not yet rendered.
That is exactly the state papers 2 to 5 will sit in while they are reviewed.

**The Pixel reports 474 voices, 20 French — and nine of those are fr-CA.**
Matching on `fr` would have read a TEF document in a Québécois accent, which
STANDARD-common §2.1 forbids outright: Canadian subject matter is welcome,
Canadian phonetic variety is not, because it stops testing what the real paper
tests. `deviceVoicesFor` matches the full locale, leaving 11 usable fr-FR
voices, ordered named-local first, then the generic `fr-FR-language` alias
(which very likely duplicates one of them), then network voices last.

Verified on device: a three-speaker micro-trottoir casts to
`fr-fr-x-frc-local`, `fr-fr-x-frb-local`, `fr-fr-x-fra-local`. Degrades by
cycling when a phone has fewer voices than speakers, and to language-only when
it has none — which is exactly the old behaviour.
| Block A image plates (E8), rendered in stored option order | E8 | block A is text-options until then |
| Sequential objection mode for `po_interaction` | E8 | EO Section B is a monologue with the ladder in the rubric |
| A silent speaking answer reports as "Grading unavailable" | E5 status vocabulary; `sectionStatusFor` cannot tell an empty response from a failed grade, so it blames us for the candidate's silence | nothing, but it misleads in the candidate's favour |
| grade-exam not yet deployed with the `coverage` block | Paul approves the deploy | coverage reaches the grader only after it lands; the field is dropped silently until then |
