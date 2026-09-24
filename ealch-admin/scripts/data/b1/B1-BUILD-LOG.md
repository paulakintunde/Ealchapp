# B1 build log and id ledger

The resume point. A session that has been cleared reads THIS file, then `B1-BUILD-PLAYBOOK.md`, and can carry on without asking anything.

Standards: `B1-BUILD-PLAYBOOK.md` (how to build one), `RICH-LESSON-STANDARD.md` (the size and shape decisions), `B1-C2-BUILD-SEQUENCE.md` (the order of the whole B1-C2 programme).

## Status

Legend: DONE = built to the rich standard, validated, committed. Drafts only: nothing is in seed.json or Postgres.

| Lesson | Slug | Missions | Acts | Quiz | Drills | Sheets | Links | Items | Art | State |
|---|---|---|---|---|---|---|---|---|---|---|
| b1.01 | imparfait-formation | 91 | 12 | 11x8 | 11 | 4 | 0 | 261 | 12 images, registered | DONE (sheet links missing) |
| b1.02 | imparfait-usage | 76 | 10 | 10x8 | 10 | 5 | 10 | 233 | 10 prompts, art not made | DONE |
| b1.03 | pc-imparfait | 76 | 10 | 10x8 | 10 | 5 | 7 | 161 | 10 prompts, art not made | DONE |
| b1.04 | pc-imparfait-paires | 86 | 12 | 11x8 | 11 | 5 | 19 | 224 | 12 prompts, art not made | DONE |
| b1.05 | futur-simple | 80 | 10 | 10x8 | 10 | 5 | 14 | 196 | 10 prompts, art not made | DONE |
| b1.06 | futur-irregulier | 83 | 11 | 10x8 | 10 | 5 | 15 | 222 | 11 prompts, art not made | DONE |
| b1.07 | futur-usage | 82 | 11 | 11x8 | 11 | 5 | 9 | 201 | 11 prompts, art not made | DONE |
| b1.08 | conditionnel-present | 82 | 11 | 11x8 | 11 | 5 | 12 | 221 | 11 prompts, art not made | DONE |
| b1.09 to b1.39 | see the sequence doc | | | | | | | | | NOT STARTED |

Commits: `ff4fdf8` (b1.01 + standards), `39baeec` (act chapter cards + dev preview), `b1e47c9` (b1.02 to b1.04 rebuilt), then the playbook and log, then wave 1 (b1.05 to b1.08).

**Next: wave 2, b1.09 to b1.11.** Six more lessons to review gate 1 (after b1.14).

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
| 1200-1399 | b1.10 si clauses | not started |
| 1400+ | FREE | |

### Theme `conseils-et-suggestions` (fondations, a2-b2)

DB holds 115 `fr.b1.*` rows (001-115) that the seed does not show.

| Block | Owner | Authored |
|---|---|---|
| 001-115 | **DB** | do not use |
| 1000-1199 | b1.09 polite requests | not started |

### Theme `pronoms-essentiels` (fondations, a1-b2)

DB holds 138 `fr.b1.*` rows (001-138), and 693 rows across all levels.

| Block | Owner | Authored |
|---|---|---|
| 001-138 | **DB** | do not use |
| 1000-1199 | b1.11 qui and que | not started |
| 1200-1399 | b1.12 dont and où | not started |
| 1400-1599 | b1.13 lequel, ce qui, ce que | not started |

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

- **b1.01 has no sheet links.** Four sheets, nothing points at them. Fix on the next touch of that lesson.
- **75 images outstanding**: b1.02 to b1.04 (10 + 10 + 12) and b1.05 to b1.08 (10 + 11 + 11 + 11). Every prompt carries its full save path; the folders are `ealch-v2/assets/lessons/<slug>/`.
- **The graded `task` section still has no renderer.** Every lesson authors one; the preview turns it into a teach card. It needs the schema, the act validator, a screen and a grading path before any of this reaches a learner.
- **No B1 import pipeline.** Nothing can reach Postgres or the seed until one exists.
- **`coach-fr-FR` is an invented voice id** carried by every lesson.
- **Two repo typecheck errors** in `check-genre-artifacts.ts` and `publish-content.ts` (WorthlessEnding/EndingClaim), from the genre-drift commits. Not from this work; do not "fix" them blind.
