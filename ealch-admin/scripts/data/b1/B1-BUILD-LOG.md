# B1 build log and id ledger

The resume point. A session that has been cleared reads THIS file, then `B1-BUILD-PLAYBOOK.md`, and can carry on without asking anything.

Standards: `B1-BUILD-PLAYBOOK.md` (how to build one), `RICH-LESSON-STANDARD.md` (the size and shape decisions), `B1-C2-BUILD-SEQUENCE.md` (the order of the whole B1-C2 programme).

## Status

Legend: DONE = built to the rich standard, validated, committed. Drafts only: nothing is in seed.json or Postgres.

| Lesson | Slug | Missions | Acts | Quiz | Drills | Sheets | Links | Items | Art | State |
|---|---|---|---|---|---|---|---|---|---|---|
| b1.01 | imparfait-formation | 91 | 12 | 11x8 | 11 | 4 | 22 | 261 | 12 images, registered + alt | DONE |
| b1.02 | imparfait-usage | 76 | 10 | 10x8 | 10 | 5 | 10 | 233 | 10 images, registered + alt | DONE |
| b1.03 | pc-imparfait | 76 | 10 | 10x8 | 10 | 5 | 7 | 161 | 10 images, registered + alt | DONE |
| b1.04 | pc-imparfait-paires | 86 | 12 | 11x8 | 11 | 5 | 19 | 224 | 12 images, registered + alt | DONE |
| b1.05 | futur-simple | 80 | 10 | 10x8 | 10 | 5 | 14 | 196 | 10 images, registered + alt | DONE |
| b1.06 | futur-irregulier | 83 | 11 | 10x8 | 10 | 5 | 15 | 222 | 11 images, registered + alt | DONE |
| b1.07 | futur-usage | 82 | 11 | 11x8 | 11 | 5 | 9 | 201 | 11 images, registered + alt | DONE |
| b1.08 | conditionnel-present | 82 | 11 | 11x8 | 11 | 5 | 12 | 221 | 11 images, registered + alt | DONE |
| b1.09 | politesse | 82 | 11 | 11x8 | 11 | 5 | 13 | 232 | 11 images, registered + alt | DONE |
| b1.10 | si-clauses | 89 | 12 | 12x8 | 12 | 5 | 10 | 215 | 12 images, registered + alt | DONE |
| b1.11 | qui-que | 83 | 11 | 11x8 | 11 | 5 | 18 | 246 | 11 images, registered + alt | DONE |
| b1.12 | dont-ou | 84 | 11 | 11x8 | 11 | 5 | 22 | 217 | 11 prompts, art not made | DONE |
| b1.13 | lequel-ce-qui | 84 | 11 | 11x8 | 11 | 5 | 17 | 215 | 11 prompts, art not made | DONE |
| b1.14 | subjonctif-formation | 82 | 11 | 11x8 | 11 | 5 | 15 | 234 | 11 prompts, art not made | DONE |
| b1.15 to b1.39 | see the sequence doc | | | | | | | | | NOT STARTED |

Commits: `ff4fdf8` (b1.01 + standards), `39baeec` (act chapter cards + dev preview), `b1e47c9` (b1.02 to b1.04 rebuilt), then the playbook and log, then wave 1 (b1.05 to b1.08), wave 2 (b1.09 to b1.11), wave 3 (b1.12 to b1.14).

**Wave 3 LANDED 2026-09-24: b1.12, b1.13 and b1.14, each verified independently by the
orchestrator (not just self-reported). That is ten lessons, so the next step is
REVIEW GATE 1: regenerate the previews, put them on the Pixel 6, and stop until Paul
has looked. Nothing in wave 4 starts before that.**

## THE ID RULE, learned the hard way (2026-09-24)

**Authored b1 ids start at 1000 in every theme, and you probe POSTGRES before claiming a block.** The seed is roughly a quarter of the database, so a theme that looks empty in `seed.json` is not empty: `recits-au-passe`, `projets-et-futur` and `conseils-et-suggestions` each hold 115 published `fr.b1.*` rows that the seed does not carry, and `pronoms-essentiels` holds 138. Blocks claimed from the seed alone put 200 authored rows straight on top of published ones (b1.01 70, b1.02 15, b1.05 115), which an import would have overwritten.

The probe, from `ealch-admin/`:

```
select split_part(id,'.',2) lvl, theme, count(*), max(nullif(regexp_replace(split_part(id,'.',4),'[^0-9]','','g'),'')::int)
from content_items where theme = 'your-theme' group by 1,2;
```

## Id ledger, theme `recits-au-passe`

Every B1 Unit 1 item lives in the existing `recits-au-passe` theme (fondations, a2-b2). Ids are `fr.b1.recits-au-passe.NNN`, built by each corpus's `E(n)`. **Before authoring, claim your block here in the same commit as the lesson.**

| Block | Owner | Authored |
|---|---|---|
| 001-099 | **DB HOLDS 001-115** | do not use |
| 1401-1499 | b1.01 (moved off the collision) | 1401-1471 |
| 101-199 | b1.02 (116-178 only) | 116-178 |
| 1501-1599 | b1.02 (moved off the collision) | 1501-1515 |
| 201-299 | b1.03 | 201-281 |
| 301-399 | b1.04 | 301-390 |
| 401-799 | b1.01 (overflow) | 401-550 |
| 800-999 | b1.02 (overflow) | 800-899 |
| 1000-1199 | b1.03 (overflow) | 1000-1161 |
| 1200-1399 | b1.04 (overflow) | 1200-1322 |
| **1400+** | **FREE** | a later past-narration lesson takes a 200-wide block from 1400 |

729 rows authored so far, zero id collisions.

### Theme `projets-et-futur` (fondations, a2-b2, EMPTY in the seed)

B1 Unit 2 is about the future and the conditional, which are not past narration, so its items go here. The theme already exists, so nothing is created at import.

| Block | Owner | Authored |
|---|---|---|
| 001-199 | **DB HOLDS 001-115** | do not use |
| 1001-1199 | b1.05 futur simple (moved off the collision) | 1001-1170 |
| 200-399 | b1.06 futur simple, irregular stems | 200-397 |
| 400-599 | b1.07 future usage and conditions | 400-577 |
| 600-799 | b1.08 conditionnel présent | 600-789 |
| 800-999 | FREE | |
| 1200-1399 | b1.10 si clauses | 1200-1378 |
| 1400+ | FREE | |

### Theme `conseils-et-suggestions` (fondations, a2-b2)

DB holds 115 `fr.b1.*` rows (001-115) that the seed does not show.

| Block | Owner | Authored |
|---|---|---|
| 001-115 | **DB** | do not use |
| 1000-1199 | b1.09 polite requests | 1000-1190 |

### Theme `pronoms-essentiels` (fondations, a1-b2)

DB holds 138 `fr.b1.*` rows (001-138), and 693 rows across all levels.

| Block | Owner | Authored |
|---|---|---|
| 001-138 | **DB** | do not use |
| 1000-1199 | b1.11 qui and que | 1000-1196 |
| 1200-1399 | b1.12 dont and où, prepositional relatives | 1200-1399 (182 rows) |
| 1400-1599 | b1.13 lequel, ce qui, ce que | 1400-1592 (193 rows) |
| 1600+ | FREE | |

### Theme `opinions-et-avis` (fondations, a2-b2)

B1 Unit 4 is the subjunctive, which lives in opinion, will and doubt, not in
pronouns. Probed 2026-09-24: 295 rows in all, 115 of them `fr.b1.*` at 001-115,
highest number in the theme 132, and NOTHING at or above 900. The theme already
exists, so nothing is created at import.

| Block | Owner | Authored |
|---|---|---|
| 001-132 | **DB** | do not use |
| 1000-1199 | b1.14 subjunctive formation | 1000-1195 (196 rows) |
| 1200-1399 | b1.15 subjunctive triggers (wave 4) | reserved |
| 1400-1599 | b1.16 subjunctive vs infinitive (wave 4) | reserved |

## Seeing the drafts on a phone (READY, 2026-09-24)

`pnpm tsx scripts/data/b1/_preview-b1.ts` from `ealch-admin/` rebuilds
`ealch-v2/src/content/dev-preview-b1.json`, the whole draft band in one file.
A dev build merges it over the seed, and because the seed carries NO b1 units,
the B1 band then appears in the Den trail on its own: 14 headings and 154 act
rows. Switch the level chip to B1, or deep-link `ealch://den?band=b1`.

- **Adding a lesson is ONE line** in the generator's `SLUGS` list.
- **Rebuild after ANY source change.** `scripts/b1-preview-fixture.test.ts`
  fails if the fixture and the sources disagree, and names what drifted. The
  old b1.01-only fixture went three commits stale and shipped 0 sheet links.
- **Release builds are unaffected**, measured by `expo export`: no string
  unique to the fixture survives into the bundle.
- The drafts open past the level gate in dev only, from `DRAFT_LESSON_IDS`.

## The wave plan from here

Lessons are built in waves. **Paul reviews after every 10 lessons**, and nothing in the next wave starts until he has.

| Wave | Lessons | Shape |
|---|---|---|
| 1 | b1.05 b1.06 b1.07 b1.08 | Futur simple (regular, irregular stems, usage after quand/dès que), conditionnel présent |
| 2 | b1.09 b1.10 b1.11 | Polite requests, si clauses, qui/que |
| 3 | b1.12 b1.13 b1.14 | Dont/où, lequel and ce qui/ce que, subjunctive formation |
| **REVIEW GATE 1** | after b1.14 (10 lessons) | Paul reviews on the Pixel 6 |
| 4 | b1.15 b1.16 b1.17 b1.18 | Subjunctive triggers, subjunctive vs infinitive, pronoun order, passive |
| 5 | b1.19 b1.20 b1.21 | Reported speech, advanced negation, inversion |
| 6 | b1.22 b1.23 b1.24 | C'est vs il est, tout, même |
| **REVIEW GATE 2** | after b1.24 (20 lessons) | Paul reviews |
| 7 | b1.25 b1.37 | The workshop shape pilot (register, reading strategy). NEW SHAPE: Paul reviews these two before the rest of the workshop lessons |
| 8 | b1.26 b1.27 b1.28 b1.29 | Tu vs vous, body idioms, animal and food idioms, colour expressions |
| 9 | b1.30 b1.31 b1.32 b1.33 | Coordination, subordination, concession, environment and society |
| **REVIEW GATE 3** | after b1.33 (30 lessons) | Paul reviews |
| 10 | b1.34 b1.35 b1.36 | Media, emotions, business |
| 11 | b1.38 b1.39 | Listening strategy, emails and letters (B1 capstone) |
| **REVIEW GATE 4** | after b1.39 (B1 complete) | Paul reviews, then B2 |

## How a wave runs

1. Each lesson gets its OWN fresh agent. The agent reads `B1-BUILD-PLAYBOOK.md` and this log, claims its id block, and builds one act at a time.
2. Agents in a wave touch only their own `<slug>-{corpus,terms,lesson}.ts` and `<slug>-image-prompts.md`. Nothing under `ealch-v2/` is edited by an authoring agent.
3. When a wave lands: verify each lesson independently (missions, acts, openers, quiz, drills, sheets, links, items, id collisions, banned characters), update this table and the ledger, then commit the wave.
4. At a review gate: regenerate the previews, put them on the Pixel 6, and stop until Paul has looked.

## Open items carried forward

- **FIXED 2026-09-24: b1.01's sheet links.** Four sheets, nothing pointed at them, so a learner could never open one; it was the only lesson of fourteen with none. 22 missions now carry a `sheetId`: sheet-recette from acts 2, 3, 5 and the recap, sheet-irreg from act 4, sheet-ortho from acts 6, 7, 8 and 11, sheet-il-me-ne from acts 9 and 10. `Lesson.version` was NOT bumped, because a bump wipes every learner's checkmarks and XP. Held by `ealch-admin/scripts/b1-lesson-integrity.test.ts`, which was checked against the pre-fix lesson and fails on it.
- **The 109 images are made, registered and COMMITTED** (`d63bb5c`, 2026-09-24). Counted on disk: b1.02 10, b1.03 10, b1.04 12, b1.05 10, b1.06 11, b1.07 11, b1.08 11, b1.09 11, b1.10 12, b1.11 11 = 109, plus b1.01 regenerated. `lessonImages.ts` carries the registrations and is also uncommitted. Every act opener in b1.01 to b1.11 resolves: 121 files on disk, 161 registered paths, none missing in either direction. None of it has been seen on a device, so REVIEW GATE 1 is the first look. Wave 3 (b1.12, b1.13, b1.14) has 33 prompts and no art yet.
- **FIXED 2026-09-24: the answer-slot skew.** Every lesson had piled its answers onto one slot. b1.09 sat at 75% on one slot across its binary checks with a run of NINETEEN identical answers in a row, b1.10 at 72% with a run of 13. Nothing caught it: the playbook asked for "no slot over 40% lesson-wide", but `validateDensity`'s only spread rule is `quiz-spread`, which inspects the quiz alone, so authors hit ~36% there and the missions drifted. The old rule was also unreachable, because a two-option check can only answer in slot 0 or 1. All fourteen lessons were rebalanced by permuting each item's options and its `correct` index together, which moves the answer without changing a word: the option sets and the correct answer strings are byte-identical before and after, and 52 items whose `why` names a position ("La troisième est le présent") were left alone. The quiz was excluded, because LessonRich re-shuffles its options every attempt. Result: every class is now 50/50 or a third each, and no lesson repeats a slot more than 3 times. Held by `ealch-admin/scripts/b1-answer-slots.test.ts`, which was checked against the pre-fix b1.09 and fails on it.
- **RESOLVED 2026-09-25: the `task` section is real.** `task` is in `SECTION_TYPES` and the `LessonSection` union, `validateSection` enforces its rubric/model/watchFor rules, and `TaskView.tsx` draws brief, criteria, response box, scaffold and a per-criterion self-check. All fourteen now validate WITH the task in place, and the preview ships it as a task. **The LLM grading path is NOT built**: the shipped behaviour is offline self-check against the model answer, and a test asserts the view makes no network call.
- **DB-only rows cannot be reused, so lessons author twins.** An author can only name an existing row that the SEED carries: `src()` resolves against seed.json and naming a DB-only id throws at module load. But Postgres holds ~115 published `fr.b1.*` rows per theme that the seed omits, and many are exactly on topic (b1.09 found ~40: « il faudrait », « à ta place », « et si on », « on pourrait »). Every lesson therefore authors near-duplicates of published content. b1.09 records seven of them in its corpus as `DB_ONLY_TWINS`. **This needs a decision at import time**: either dedupe against the DB and drop the twins, or keep both and accept the overlap. Until then, authors keep writing twins and the corpus grows redundant.
- **No B1 import pipeline.** Nothing can reach Postgres or the seed until one exists.
- **RESOLVED 2026-09-25: `coach-fr-FR` is inert, not broken.** Nothing reads `audio.coachVoice` at runtime (only the schema declaration, content files and one test fixture). Narration language comes from `services/tts.ts`, which defaults to fr-FR and picks a device French voice, so French `say` lines already speak French. No voice needs registering. What A2 and B1 need for a narrated way in is a `narration` SCRIPT plus the `'narrated'` feature flag, which is content.
- **Two repo typecheck errors** in `check-genre-artifacts.ts` and `publish-content.ts` (WorthlessEnding/EndingClaim), from the genre-drift commits. Not from this work; do not "fix" them blind.
