# Phase 2: Content & Curriculum Gap Audit - Research

**Researched:** 2026-09-19
**Domain:** Postgres content-audit against a curriculum spine + exam blueprints (no code changes)
**Confidence:** HIGH (schema/scripts/blueprints read directly) / MEDIUM (exact current row-level state, since it changes daily and the DB was found paused this session)

## Summary

This phase is a read-only audit, not a build. There is exactly one blocking environmental fact the planner must open with: **the Supabase project (`ogbothupjcivwruesgsu`) auto-pauses from inactivity** `[VERIFIED: project memory ealch-supabase-project-paused, 2026-09-19]`, and every direct-DB audit query this phase needs (content_units, content_exam_tasks, content_exam_papers) requires it to be `ACTIVE_HEALTHY` first. Plan Wave 1 must include an explicit "check/restore Supabase project status" step before any SQL runs, with a ~3-minute poll-and-wait, or the audit will misdiagnose "can't connect" as "no data."

The audit has two independently-checkable domains: (1) the 75-unit SONS/A1/A2 curriculum spine — its existence is already verified (75/75, CONTEXT.md), so this phase's real job is checking the **pedagogical fields** (`canDo`/`themes`/`prereqUnitIds`) are coherent, which are populated by **two different scripts covering different subsets** (43 of 75 units via `update-spine.ts`, the other 32 inline via `author-full-curriculum-spine.ts`) — and (2) the 15 published exam papers (5 TEF, 5 TCF, 5 DELF B2), where `content_exam_papers.sections` is a **jsonb array embedded in the paper row**, not a separate `content_exam_sections` table (the CONTEXT.md canonical-refs description of a fourth table is inaccurate against the real schema — see Standard Stack). Structural conformance targets (item counts, block/exercise weights, timing) are fully enumerated in three blueprint files with exact numbers, so this is a countable check, not a subjective one.

Six already-known, specific defects are pre-identified in project memory and should be spot-verified rather than re-discovered from scratch: the b2.01 PE@b2 remediation gap (real, confirmed 2026-09-07), DELF blanc-02..05 unlistened audio (D-05, real and current), the numbers-scored-wrong fix (already shipped, commit `09f04f2` — verify it stayed shipped), the 19-playlists-one-voice-deck bug (already shipped, commit `a63a11a`/`bb6a813`/`8692ca6` — verify it stayed shipped), and the 81-flashcards-build-notes defect (claimed **fixed to 0** as of v70, 2026-09-10, but a companion finding in the same memory says a related guard **gave a false green** afterward — this one needs a fresh direct count, not a trust of the "0 left" claim). Every one of these must be checked against **current** state, not assumed from memory, per D-03.

**Primary recommendation:** Run the audit as direct SQL against Postgres (after confirming the project is awake) plus direct reads of `seed.json`/`author-full-curriculum-spine.ts`, cross-checked against the exact numeric targets in `STANDARD-tef-canada.md` §6, `STANDARD-tcf-canada.md` §7, and `BLUEPRINT-delf-b2.md` §2/§4/§5 — never trust `corpus:probe`, `content:parity`, or any existing guard's "green" output as the finding itself.

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| Curriculum spine existence/order check | Database / Storage (Postgres `content_units`) | — | `content_units.body` jsonb is the sole source of truth the Den renders from |
| Curriculum pedagogical-field coherence (canDo/themes/prereqs) | Database / Storage | Authoring scripts (`ealch-admin/scripts/*spine*.ts`) as read-only reference | Fields live in the DB row; the scripts are how they got there and must be read to know WHICH script owns which unit |
| Exam paper structural conformance | Database / Storage (`content_exam_papers`, `content_exam_tasks`) | Exam blueprint docs (`ealch-admin/exam-blueprints/*.md`) as the target spec | DB holds the actual shipped shape; blueprints hold the numeric target it must match |
| Speech-rate / audio-envelope check | Database / Storage (rendered `durationS` on `content_exam_tasks.parts`) | Script (`check-speech-rate.ts`) as one input, spot-verified | Per D-03, script output is an input, not the finding |
| Known-defect spot-checks (numbers scoring, playlist voice, flashcard notes) | App/source tier (`ealch-v2/src/...`) for code-fix verification | Database (`content_items`) for the flashcard-notes count | These were code+content fixes; verifying "stayed fixed" needs both a source-code read and a live count |
| Findings output (GAPS.md) | N/A — planning artifact | — | Not a runtime tier; lives in `.planning/phases/02-.../` |

## Standard Stack

### Core (read-only tools this audit uses)

| Tool | Version/Location | Purpose | Why Standard |
|------|---------|---------|--------------|
| Direct `pg` query via `psql`/Supabase MCP/`Pool` | `ealch-admin/.env` `DATABASE_URL` | Ground truth for content_units, content_exam_tasks, content_exam_papers | This is what every existing audit script in the repo already does (`author-full-curriculum-spine.ts`, `update-spine.ts`, `check-speech-rate.ts`) |
| Direct file read of `ealch-v2/src/content/seed.json` | 459,420 lines, `units` key at line 1637 `[VERIFIED: wc -l / grep]` | Cross-check what a fresh install actually ships (seed is a CUT of the DB — see Common Pitfalls) | Per `[[ealch-seed-is-a-cut-of-the-db]]`, a DB-only finding may not be what learners see; both must be checked |
| Direct file read of `ealch-admin/exam-blueprints/STANDARD-*.md`, `BLUEPRINT-delf-b2.md` | Compiled 2026-08-24 (E0)/2026-09-05 | Numeric conformance targets | These ARE the spec; no other source of truth for "is this paper correctly shaped" exists |
| `ealch-admin/scripts/exam/check-speech-rate.ts` | current | One INPUT for audio envelope/rate checks | Reads measured `durationS` off rendered clips, not authored estimates — genuinely useful, but per D-03 its "0 failures" output must still be spot-verified against 2-3 real rows, not accepted as the finding |

### Supporting

| Tool | Purpose | When to Use |
|------|---------|-------------|
| `mcp__claude_ai_Supabase__get_project` / `restore_project` | Check/unpause the Supabase project | FIRST, before any DB query — see Environment Availability |
| `ealch-admin/scripts/exam/check-orphans.ts`, `check-authored-length.ts` | Secondary structural checks already in the repo | Optional extra input, same D-03 spot-verify caveat |
| `ealch-admin/scripts/find-french-notes.ts` | Detects untranslated French text in `content_items.notes` | Useful if re-checking the flashcard-notes defect's current count |
| `pnpm content:parity` (`check-seed-db-parity.ts`) | Compares seed.json vs Postgres row SET | **Known to false-green on field CONTENT** (see Common Pitfalls) — usable only to confirm row-set agreement, never field-level correctness |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Direct SQL queries | `pnpm corpus:probe` / `pnpm content:parity` as primary evidence | Rejected per D-03 — both tools have documented false-negative/false-positive histories in this exact codebase (see Common Pitfalls); acceptable only as a secondary cross-check, never the citation for a GAPS.md finding |
| Querying `content_exam_sections` as CONTEXT.md's canonical_refs describes | Query `content_exam_papers.sections` (jsonb column) | **No such table exists in the current schema** — see Common Pitfalls #1. This is a factual correction to CONTEXT.md that the planner must carry forward. |

**Installation:** None — all tools already exist in the repo (`ealch-admin/scripts/`, `ealch-admin/exam-blueprints/`). No new packages needed.

**Version verification:** Not applicable — this phase touches no npm dependencies. `ealch-admin/src/db/schema.ts` was read directly (44,428 bytes, last modified 2026-09-06) as the authoritative current shape; do not trust CONTEXT.md's table-name description over this file.

## Architecture Patterns

### System Architecture Diagram

```
                         ┌─────────────────────────────┐
                         │  1. Environment check         │
                         │  Supabase project ACTIVE?     │
                         │  (get_project / restore +     │
                         │   poll until ACTIVE_HEALTHY)  │
                         └───────────────┬───────────────┘
                                         │
                 ┌───────────────────────┼────────────────────────┐
                 ▼                                                 ▼
   ┌───────────────────────────┐                    ┌───────────────────────────────┐
   │ 2a. CURRICULUM SPINE AUDIT │                    │ 2b. EXAM PAPER AUDIT            │
   │                             │                    │                                │
   │ SELECT body FROM            │                    │ SELECT id, format, variant,     │
   │ content_units WHERE          │                    │  sections FROM                 │
   │ kind='curriculum_unit'       │                    │  content_exam_papers            │
   │  → 75 rows expected          │                    │  → 15 rows expected             │
   │                             │                    │        │                        │
   │ For each unit:                │                    │        ▼                        │
   │  - id/seq/track/level match    │                    │ For each paper's sections[]:   │
   │    author-full-curriculum-      │                    │  - resolve taskIds against     │
   │    spine.ts's CURRICULUM export │                    │    content_exam_tasks           │
   │  - canDo present & non-generic  │                    │  - count items/parts per task  │
   │  - themes present where the     │                    │  - compare counts against       │
   │    unit has a lexical field     │                    │    STANDARD-<format>.md §N      │
   │  - prereqUnitIds resolve to      │                    │    (exact numbers, see          │
   │    real ids                     │                    │    Code Examples below)         │
   │  - lessonIds non-empty          │                    │  - for CO tasks: cross-check    │
   │    (SOON vs authored)            │                    │    check-speech-rate.ts output  │
   └───────────────┬─────────────┘                    │    against 2-3 raw rows          │
                   │                                    └───────────────┬────────────────┘
                   ▼                                                    ▼
        ┌───────────────────────────────────────────────────────────────────┐
        │ 3. TARGETED KNOWN-DEFECT SPOT-CHECKS (D-02, D-08)                    │
        │  - b2.01 PE remediation gap (dueExamSkills routing)                  │
        │  - DELF blanc-02..05 audio unlistened (D-05)                         │
        │  - numbers-scored-wrong / playlist-voice-deck / flashcard-notes:     │
        │    re-verify "already fixed" claims against CURRENT code+DB, not     │
        │    memory                                                            │
        └───────────────────────────────┬───────────────────────────────────┘
                                         ▼
                         ┌───────────────────────────────┐
                         │ 4. D-09 CROSS-REFERENCE          │
                         │ Every quality-defect finding      │
                         │ checked against REQUIREMENTS.md   │
                         │ BUG-01/02/03, QA-01/02 and their   │
                         │ phases (7, 9) before it becomes    │
                         │ a NEW GAPS.md entry                │
                         └───────────────┬───────────────┘
                                         ▼
                         ┌───────────────────────────────┐
                         │ 5. WRITE GAPS.md                  │
                         │ + insert stub phase(s) into        │
                         │ ROADMAP.md per D-07 for any         │
                         │ full-lesson/multi-paper-scope finding│
                         └─────────────────────────────────┘
```

### Recommended Project Structure (audit artifacts, not code)

```
.planning/phases/02-content-curriculum-gap-audit/
├── 02-CONTEXT.md          # already exists — locked decisions
├── 02-RESEARCH.md         # this file
├── 02-PLAN.md / waves     # planner's output
└── GAPS.md                # THIS PHASE'S PRIMARY DELIVERABLE (D-06)
```

No source code directories are touched. If any one-off read-only query script is written for convenience (Claude's Discretion per CONTEXT.md), it belongs in a scratch location, not `ealch-admin/scripts/` (that directory is for reusable authoring tooling, not one-shot audit queries) — or, if committed for reproducibility, should be prefixed `_audit-` and be clearly read-only (no `client.query('begin')`/inserts/updates).

### Pattern 1: Two-owner pedagogical field coverage (spine audit)

**What:** `update-spine.ts`'s `SPINE` map owns canDo/themes/prereqUnitIds for exactly 43 of the 75 units (the pre-2026-08-24 curriculum). The other 32 units (`sons.10`, `a1.27/28/29/30`, and 27 new `a2.09`+ units) get these fields authored **inline** inside `author-full-curriculum-spine.ts`'s `SONS`/`A1`/`A2` arrays at the same time the unit itself is created. `update-spine.ts` was patched (see its own comment on `unpatched`) to report — not fail — units outside its 43-unit map, specifically because this two-owner split is now permanent, intended state, not an incomplete migration.

**When to use:** When auditing D-01 (pedagogical field coherence), do not treat "not in `update-spine.ts`'s SPINE map" as a gap. Cross-reference BOTH files (or, more directly, just read the live DB row — it is the merged result of whichever script last touched it) `[VERIFIED: ealch-admin/scripts/update-spine.ts:248-263, author-full-curriculum-spine.ts:1063]`.

**Example (the query the audit actually needs):**
```sql
-- Source: derived from author-full-curriculum-spine.ts's own SELECT pattern
SELECT body->>'id' AS id,
       body->>'track' AS track,
       body->>'seq' AS seq,
       body->>'canDo' AS can_do,
       body->'themes' AS themes,
       body->'prereqUnitIds' AS prereqs,
       jsonb_array_length(COALESCE(body->'lessonIds', '[]'::jsonb)) AS lesson_count
FROM content_units
WHERE kind = 'curriculum_unit'
  AND body->>'track' IN ('sons', 'a1', 'a2')
ORDER BY body->>'track', (body->>'seq')::int;
```
Flag: `can_do` null/empty (a unit that should have one per the spine files but doesn't in the DB — a genuine drift finding), and any `prereqs` entry whose id is not present in the full 75-id set.

### Pattern 2: Exam paper structural conformance (per-format exact targets)

**What:** Each format has a hard numeric spec, fully enumerated in its `STANDARD-*.md` §6/§7 "Paper-level checks" section. These are not guidelines — they are exact counts the audit checks against, extracted below so the planner does not have to re-derive them:

| Format | CO items | CE items | EE tasks | EO tasks/phases | Extra structural rule |
|---|---|---|---|---|---|
| TEF Canada | 40 (blocks A4/B4/C6/D2/E6/F1/G17; block C = 3 options, rest = 4) | 40 (blocks A7/B6/C4/D+E5/F10/G8) | 2 sections (25min/80-120w; 35min/200w+) | 2 sections (5min; 10min) | `playCount` 1 everywhere except block E (2 allowed) |
| TCF Canada | 39, band distribution 3/6/10/10/7/3 in strict position order (no shuffle) | 39, same 3/6/10/10/7/3 distribution | 3 tasks under ONE 60-min clock (60-120w / 120-150w / 120-180w) | 3 tasks (~2min / ~5.5min incl. 2min prep / ~4.5min) | `playCount` always 1; speech rate must RISE across the épreuve |
| DELF B2 | 20 items / 3 exercises, weighted 9/9/7, `playCount` 2 for ex.1-2 and 1 for ex.3, ≤15 min total audio | 20 items / 3 exercises, weighted 9/9/7 | 1 task, 60 min, 250-word floor (scored not gated: 225+=full, 176-224=half, ≤175=zero) | 1 task, 2 phases: monologue 5-7min + débat 10-13min, 30min prep | `QcmItem.band` constant `b2`; per-question `points` 0.5-2.5 must reconcile to 9/9/7 |

`[VERIFIED: STANDARD-tef-canada.md §6, STANDARD-tcf-canada.md §7, STANDARD-delf-b2.md §7, BLUEPRINT-delf-b2.md §2/§4/§5]`

**When to use:** For D-04. Query `content_exam_papers.sections` (jsonb array of `{skill, taskIds, timingS, blueprintId}`), resolve each `taskIds` entry against `content_exam_tasks` (which carries `items`/`parts` jsonb with the actual question/document count), and diff the counts against the table above per format. A paper failing any row is a named, specific GAPS.md finding (paper id + which count is short).

**Example query:**
```sql
-- Source: derived from schema.ts contentExamPapers/contentExamTasks + ExamSection type
SELECT p.id AS paper_id, p.format, p.variant,
       sec->>'skill' AS section_skill,
       sec->>'timingS' AS timing_s,
       jsonb_array_length(sec->'taskIds') AS task_count
FROM content_exam_papers p,
     jsonb_array_elements(p.sections) AS sec
WHERE p.status = 'published'
ORDER BY p.format, p.variant, p.id;

-- Then per task, count items/parts:
SELECT id, format, variant, task_type, label,
       jsonb_array_length(COALESCE(items, '[]'::jsonb)) AS n_items,
       jsonb_array_length(COALESCE(parts, '[]'::jsonb)) AS n_parts
FROM content_exam_tasks
WHERE id = ANY($1::text[]);  -- taskIds resolved above
```

### Anti-Patterns to Avoid

- **Treating `content:parity` green as "content is correct":** it compares the row SET between seed.json and Postgres, not field content. It gave a **false green** on 2026-09-10 while the seed still held 2,090 stale underties and 5 leftover `STAGE 8` build-note strings the DB no longer had `[VERIFIED: ealch-flashcard-audit-2026-09-09.md]`.
- **Treating `corpus:probe` ABSENT as "safe to author"/"genuinely missing":** it does not normalize accents or the `œ` ligature; `biere`→ABSENT while `bière` has rows. Always probe (or query) with real French orthography.
- **Trusting a CEFR/nasal/guard heuristic's "0 findings" as ground truth:** this codebase has a specific, repeated history (4+ documented incidents) of such heuristics both under- and over-reporting on legitimate content — see Common Pitfalls.
- **Assuming CONTEXT.md's `content_exam_sections` table exists:** it does not. `sections` is a jsonb column on `content_exam_papers`.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Speech-rate/envelope measurement | A new script that estimates wpm from authored text | `check-speech-rate.ts` (as one input, per D-03) | It already reads rendered clip durations, which authored-time estimates cannot give you; re-deriving it from scratch would just reproduce the estimate-based error it was built to fix |
| Row-set diffing between seed.json and Postgres | A new diff script | `content:parity`, scoped correctly (row-set only, not field content) | Already exists; just don't over-trust its output past what it actually checks |
| Curriculum id/seq/prereq structural validation | Ad-hoc eyeballing of 75 units | `validateUnit` (imported by both spine scripts from `ealch-v2/src/content/schema.ts`) | Already encodes the seq-must-be-1..N, prereq-must-resolve, id-must-match-track rules; run it against the live DB rows rather than re-writing those checks |

**Key insight:** Every "don't hand-roll" item here is "an existing script/validator already does the mechanical part — the audit's real job is judging COHERENCE (is this canDo actually descriptive? is this exam paper actually complete?) which no script in the repo currently does, and which is exactly why this phase exists as a human/LLM judgment pass rather than a CI check."

## Common Pitfalls

### Pitfall 1: CONTEXT.md's `content_exam_sections` table does not exist
**What goes wrong:** A plan task instructed to "query content_exam_sections" will fail immediately (relation does not exist) or, worse, an LLM executor might silently substitute a wrong table.
**Why it happens:** CONTEXT.md's canonical_refs describes four tables (`content_units`, `content_exam_papers`, `content_exam_tasks`, `content_exam_sections`) but the actual `ealch-admin/src/db/schema.ts` (read directly, 2026-09-19) only defines three: `contentUnits`, `contentExamTasks`, `contentExamPapers`. `ExamSection` is a **type**, not a table — it lives as a jsonb array under `content_exam_papers.sections`.
**How to avoid:** Use the corrected queries in Pattern 2 above (`jsonb_array_elements(p.sections)`).
**Warning signs:** Any generated SQL referencing `content_exam_sections` as a `FROM`/`JOIN` target.

### Pitfall 2: The Supabase project is paused by default
**What goes wrong:** Every direct-DB audit query fails with a connection/tenant error that looks like a credentials problem.
**Why it happens:** Free-tier Supabase auto-pauses from inactivity; this project was found `INACTIVE` on 2026-09-19, the same day this research was written `[VERIFIED: ealch-supabase-project-paused.md]`.
**How to avoid:** First action of Wave 1: check status via `mcp__claude_ai_Supabase__get_project` (or attempt a trivial `select 1`), and if `INACTIVE`, call `restore_project` and poll every ~10s until `ACTIVE_HEALTHY` (took <3 min last time) before running any audit query. This needs explicit user go-ahead per the memory note — do not attempt it silently.
**Warning signs:** `tenant/user ... not found` errors from any `pg` script; MCP `execute_sql` timing out.

### Pitfall 3: `corpus:probe` reports false absences on accented words
**What goes wrong:** A theme/word that genuinely exists gets logged as a gap.
**Why it happens:** The probe matches the stored `fr` literally with no accent/ligature normalization (`biere`→ABSENT despite `bière` existing; same for `café`, `thé`, `gâteau`, `crème`, `légume`, `bœuf`/`œuf`, `pâtes`) `[VERIFIED: ealch-probe-does-not-strip-accents.md]`.
**How to avoid:** Always query/probe with real French orthography including `œ`/`ç`/accents. Treat any bare-ASCII ABSENT as unmeasured.
**Warning signs:** A "missing vocabulary" finding for a common, everyday French word.

### Pitfall 4: Content guards fire on legitimate content (four documented shapes)
**What goes wrong:** A regex-based guard flags real, correct content as a defect (or the inverse: misses a real defect because of the same fragility).
**Why it happens:** Documented shapes in this codebase: (a) a hyphen is a JS word boundary, so `/\bpeut\b/` matches inside `peut-être`; (b) a French error string can also be valid English ("est-ce que on" inside a quiz option); (c) `grep -i` corrupts multibyte matching, silently reporting 0 for strings present multiple times; (d) a combining-mark assertion can fire on the wrong syllable `[VERIFIED: ealch-guard-false-positives.md]`.
**How to avoid:** For any audit finding produced by grep/regex over content, read the actual surrounding content by hand before logging it as a gap.
**Warning signs:** A guard/grep result that seems too clean (0 hits) or too dirty (hits inside content that looks obviously correct on a quick read).

### Pitfall 5: A "highest id" check misses collisions inside your own range
**What goes wrong:** Not directly this phase's concern (that pitfall is about concurrent authoring), but the general shape — "the obvious check asks the wrong question" — applies to auditing lesson/unit counts too: counting `SELECT count(*)` is a weak signal; check what's actually IN the expected id range, not just whether the count matches expectations `[VERIFIED: ealch-id-range-collision-inside.md]`.
**How to avoid:** When auditing "does A1 have exactly 30 units," don't just count rows with `track='a1'` — verify each of the 30 specific ids from `author-full-curriculum-spine.ts`'s `A1` array actually exists, in case an id was silently renamed or duplicated elsewhere.

### Pitfall 6: A memory claiming "fixed" or "0 left" can be stale or itself wrong
**What goes wrong:** Trusting `[[ealch-flashcard-audit-2026-09-09]]`'s "0 build-commentary notes left (was 81+)" claim without re-measuring.
**Why it happens:** The SAME memory that reports the fix also reports `content:parity` gave a **false green** immediately afterward on a related but different field (underties/nasals), meaning the codebase's own verification tooling has already once failed to catch a real regression in this exact content area, in this exact week.
**How to avoid:** Per D-03 and D-08, re-run a direct count (e.g. `SELECT count(*) FROM content_items WHERE notes ~* 'FIRST DRAFT|STAGE \d|hasPlainNasalFor|§\d'`) rather than citing the memory's "0 left" as the GAPS.md evidence.

## Code Examples

### Checking b2.01 PE@b2 remediation gap is still open (D-02)
```sql
-- Source: derived from dueExamSkills() routing logic description in
-- ealch-b2-01-stub-removed.md; confirms no lesson at level b2 carries skill 'PE'
SELECT body->>'id' AS lesson_id, body->>'skill' AS skill, body->>'level' AS level
FROM content_units
WHERE kind = 'lesson' AND body->>'level' = 'b2';
-- Expected (per memory, as of 2026-09-07): zero rows with skill='PE'.
-- If still zero, this is a CONFIRMED, currently-open gap for GAPS.md, not
-- a re-discovery — cite the existing memory AND this fresh query result.
```

### Checking DELF audio-unheard status (D-05) — count, don't just trust the memory
```sql
SELECT id, variant, status, publishedAt
FROM content_exam_papers
WHERE format = 'delf_b2' AND status = 'published'
ORDER BY variant;
-- Cross-reference against whichever internal record (if any) tracks the E8
-- marking/listening pass per paper. If no such record exists in the DB,
-- that absence itself is worth noting in GAPS.md (no way to verify E8 ran
-- from data alone — this may need to stay a manual-attestation finding).
```

### Re-verifying numbers-scored-wrong stayed fixed
```bash
# Source: ealch-numbers-scored-wrong.md — the fix lives in frNumbers.logic.ts
grep -n "answerMatches" ealch-v2/src/utils/frNumbers.logic.ts ealch-v2/src/**/*.test.ts
# Confirm the pinned test `answerMatches('50', 'cinquante') === false` still
# exists and still passes: cd ealch-v2 && npx tsx --test src/utils/frNumbers.logic.test.ts (adjust path to actual test file)
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|---------------|--------|
| `update-spine.ts` owned display order (`seq`) for all units | `author-full-curriculum-spine.ts` owns `seq`/existence for all 75; `update-spine.ts` owns canDo/themes/prereqs for 43 legacy units only, others carried through untouched | 2026-08-24 (75-unit pass) | Auditing "does this unit have a coherent canDo" must check the live DB row, not assume either script alone is authoritative |
| DELF B2 sample papers 1/2 (old format: 2 exercises, written answers, 8-min audio ceiling) | New format (sample 3): 3 exercises weighted 9/9/7, 100% MCQ, 15-min ceiling | Authored against as of 2026-09-05/06 | If any audit accidentally calibrates against samples 1/2, every published DELF finding will be wrong |
| 11-paper exam pack scope (EXAM-PACK-REDESIGN.md's original locked figure) | 15 papers (5 TEF/5 TCF/5 DELF) | DELF expanded 1→5 sometime before 2026-09-19 | Use 15 as the target count, not 11 |

**Deprecated/outdated:** The "2 in_review DELF rows, 0 published exam content" state described in `ealch-exam-blocked-on-status.md` is fully superseded — 15 papers are published and shipped as of the last known snapshot version referenced in memory (v63 for DELF B2 blanc-01; TCF pack at v62; a later v70 exists from an unrelated flashcard fix). The audit should read the CURRENT `content_snapshots` table for the actual live version number rather than citing any of these historical version numbers.

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | TEF papers 2-5 and TCF papers 2-5's audio went through the same E8 listening pass as blanc-01 (only DELF blanc-02..05 is flagged as unlistened in CONTEXT.md D-05) | Common Pitfalls / Code Examples (DELF audio check) | If TEF/TCF papers 2-5 audio was ALSO never manually listened to, D-05's scope in CONTEXT.md undersells the finding — the audit should explicitly check for an E8-pass record (if one exists) across all three formats' papers 2-5, not just assume TEF/TCF are clear because CONTEXT.md didn't name them |
| A2 | The "81 flashcards / build-notes" and "19 playlists / one voice deck" defects are fully fixed and stayed fixed (based on memory dated 2026-09-07/09-10) | Summary, Pitfall 6 | If either regressed (e.g. via a later seed-direct edit not caught by `content:parity`'s known false-green), CONTENT-01 would incorrectly close as clean; D-08 explicitly requires re-verifying these, not trusting the memory |
| A3 | No new `content_exam_sections`-shaped table or view was added between schema.ts's last edit (2026-09-06) and phase execution | Common Pitfalls #1 | Low risk (only ~2 weeks), but if the schema changed again very recently, re-read `ealch-admin/src/db/schema.ts` fresh before writing final audit queries |

**If this table is empty:** N/A — see above.

## Open Questions

1. **Is there any DB-recorded evidence of which exam papers actually went through an E8 audio-listening pass?**
   - What we know: DELF blanc-02..05 explicitly did NOT (D-05). TCF pack-wide `check-speech-rate.ts tcf` was reported green pack-wide before Paul's manual mark-off (`ealch-tcf-pack-complete.md`), which is a rate/envelope check, not a "someone listened" attestation.
   - What's unclear: whether "someone listened to this audio end-to-end" is tracked anywhere queryable, or is purely tribal/memory-based.
   - Recommendation: If no queryable record exists, GAPS.md should note this as a process gap in its own right (no way to verify E8 completion from data alone) rather than trying to force a SQL answer to a question the schema cannot answer.

2. **What counts as "coherent" for a canDo/themes field, beyond "present"?**
   - What we know: D-01 asks to verify these are "actually filled in and coherent," not just non-null.
   - What's unclear: CONTEXT.md gives no rubric for "coherent" (e.g., is a one-word canDo incoherent? Is a themes array with a phantom slug like the five zeroed-out ones from `[[ealch-a2-situations-band-design]]`'s `nourriture`/`sante`/`voyage`/`technologie`/`transport` re-map a defect?).
   - Recommendation: The planner should treat "coherent" as: (a) non-empty, (b) `canDo` is a specific, learner-facing capability statement (not a placeholder/generic string), (c) every `themes` entry resolves to a real `content_themes.slug` row (queryable — the phantom-theme trap already happened once and was fixed for the A2 situations band, but nothing prevents it recurring for a newer unit).

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| Supabase Postgres project `ogbothupjcivwruesgsu` | All SQL-based audit steps | ✗ as of 2026-09-19 (status: INACTIVE, auto-pauses from inactivity) | — | `restore_project` + poll to `ACTIVE_HEALTHY` (~3 min last observed); requires explicit user go-ahead, not silent auto-mode action |
| `ealch-v2/src/content/seed.json` (direct file read) | Cross-checking what a fresh install actually ships | ✓ | current, 459,420 lines | — |
| `ealch-admin/.env` `DATABASE_URL` | Any `pg` `Pool` connection from a script | ✓ (assuming project restored) | — | — |
| Node/tsx (for running `check-speech-rate.ts` etc. as a secondary input) | Optional script-assisted checks | ✓ (repo already runs these) | project-pinned | Direct SQL if scripts fail |

**Missing dependencies with no fallback:**
- None — the Supabase pause has a documented, known fallback (restore + poll), it is not a hard blocker, just a required first step.

**Missing dependencies with fallback:**
- Supabase project paused → restore via MCP `restore_project`, poll until healthy (see Pitfall 2).

## Validation Architecture

> This phase produces no shippable code, so "tests" in the usual sense do not apply. The equivalent validation surface is: does GAPS.md's every claim trace to a query result or direct file read, and does CONTENT-01's closing statement name exactly what was checked (per Success Criterion 3)?

### Test Framework
| Property | Value |
|----------|-------|
| Framework | N/A for this phase's own output (no new code) — existing `node --test` (ealch-admin) / whatever ealch-v2 uses remain the app's test suites, unaffected by this phase |
| Config file | none — see Wave 0 |
| Quick run command | N/A |
| Full suite command | N/A |

### Phase Requirements → Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| CONTENT-01 | Every A1/A2 unit and exam paper checked against the spine/blueprint; gaps named | manual-only (this is a discovery audit; "test" = every GAPS.md line cites a query result or file read) | N/A — verification is: does `GAPS.md` exist, does every row cite evidence, does the closing statement in CONTENT-01's own success-criterion-3 language exist if no gaps found | ❌ Wave 0 (GAPS.md itself is the artifact to create) |

### Sampling Rate
- **Per task commit:** N/A (no code)
- **Per wave merge:** Re-read GAPS.md for citation completeness (every finding has a query/file-read source, not a trusted-tool-output source per D-03)
- **Phase gate:** `/gsd-verify-work` should confirm (a) GAPS.md exists and every entry cites direct evidence, (b) any phase-worthy finding (per D-07) has a corresponding ROADMAP.md stub phase, (c) CONTENT-01's traceability row in REQUIREMENTS.md is updated to reflect the audit's actual outcome.

### Wave 0 Gaps
- [ ] `GAPS.md` — does not exist yet, this phase's primary deliverable
- [ ] Confirm Supabase project is `ACTIVE_HEALTHY` before Wave 1's SQL tasks can run at all

*(No test-framework gaps in the usual sense — this phase is audit output, not code.)*

## Security Domain

> `security_enforcement` is enabled in `.planning/config.json`, but this phase introduces no new code, no new endpoint, and no new attack surface — it is a read-only SQL/file audit performed by the same authenticated admin-tooling path (`ealch-admin/.env` `DATABASE_URL`) every existing script in this repo already uses.

### Applicable ASVS Categories

| ASVS Category | Applies | Standard Control |
|---------------|---------|-----------------|
| V2 Authentication | No | No new auth surface; uses existing `DATABASE_URL` credential already scoped to this repo's admin tooling |
| V3 Session Management | No | N/A |
| V4 Access Control | No | N/A — read-only queries only, no writes, no new roles |
| V5 Input Validation | N/A | No user input processed by this phase |
| V6 Cryptography | No | N/A |

### Known Threat Patterns for this phase's stack

| Pattern | STRIDE | Standard Mitigation |
|---------|--------|---------------------|
| Accidental write during "audit" (e.g. a script meant to be read-only accidentally calls `.query('update ...')` or `apply-*`/`author-*` batch scripts) | Tampering | Every audit query/script must be visibly `SELECT`-only; do not reuse `author-*-batch.ts` or `promote-paper.ts` files as audit tools even for "just checking" — they write. Treat any script that opens a `client.query('begin')` transaction as out of scope for this phase entirely. |

## Sources

### Primary (HIGH confidence — direct file reads this session)
- `ealch-admin/src/db/schema.ts` — full current Postgres schema, read in full (778 lines)
- `ealch-admin/scripts/author-full-curriculum-spine.ts` — 75-unit spine, structural pass, full read
- `ealch-admin/scripts/update-spine.ts` — 43-unit pedagogical pass, full read
- `ealch-admin/scripts/_spine_reconcile.ts` — reconciliation codemod, full read
- `ealch-admin/scripts/exam/check-speech-rate.ts` — full read
- `ealch-admin/exam-blueprints/STANDARD-common.md`, `STANDARD-tef-canada.md`, `STANDARD-tcf-canada.md`, `STANDARD-delf-b2.md`, `BLUEPRINT-delf-b2.md` — full reads
- `ealch-v2/src/content/schema.ts` (ExamSection/ExamPaper/validateExamPaper excerpts) — targeted reads
- `.planning/phases/01-content-publish-drift-guard-extension/01-VERIFICATION.md`, `01-REVIEW.md` — findings-format precedent, full reads
- `.planning/REQUIREMENTS.md`, `.planning/STATE.md`, `.planning/ROADMAP.md` — full reads
- `ealch-admin/package.json` — scripts section (corpus:probe, content:publish, content:parity, content:spine locations)

### Secondary (MEDIUM confidence — project memory, dated and self-flagged as point-in-time)
- `ealch-supabase-project-paused` (2026-09-19) — Supabase pause/restore procedure
- `ealch-b2-01-stub-removed` (2026-09-07) — PE@b2 gap
- `ealch-delf-b2-shipped` (2026-09-06) — DELF format facts, 11→15 paper count context
- `ealch-flashcard-audit-2026-09-09` / fixes (2026-09-10) — flashcard defects and fix status
- `ealch-numbers-scored-wrong` (2026-09-07) — numbers-scoring fix
- `ealch-playlist-voice-deck` (2026-09-07) — playlist voice-deck fix
- `ealch-tcf-pack-complete` (2026-09-04/05) — TCF pack status
- `ealch-exam-blocked-on-status` / `ealch-tef-blanc01-published` (2026-08-20/09-01) — historical exam-publish state, since superseded
- `ealch-guard-false-positives`, `ealch-id-range-collision-inside`, `ealch-probe-does-not-strip-accents` — known tooling failure modes

### Tertiary (LOW confidence)
- None used as a citation basis; all findings above trace to a primary file read or a dated, named memory entry.

## Metadata

**Confidence breakdown:**
- Standard stack / schema: HIGH — read the actual `schema.ts` and scripts directly, corrected a factual error in CONTEXT.md's canonical_refs
- Architecture (audit flow, numeric targets): HIGH — blueprint files give exact, citable numbers
- Pitfalls: HIGH — every pitfall traces to a specific, dated project-memory incident in this exact codebase
- Current row-level state (is b2.01 gap still open, are the 81 flashcards still 0, is Supabase currently paused right now): MEDIUM — these are point-in-time facts that will drift; the planner must re-verify at execution time, not cite this document's numbers as current

**Research date:** 2026-09-19
**Valid until:** ~7 days for row-level/status claims (content changes daily per CONTEXT.md's own warning); ~30 days for schema/blueprint/script-structure claims (stable unless a migration or blueprint revision lands)
