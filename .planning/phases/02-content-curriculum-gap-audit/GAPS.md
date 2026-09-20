---
phase: 02-content-curriculum-gap-audit
audited: 2026-09-19
status: gaps-found
units_checked: 75/75
exam_papers_checked: 15/15
new_findings: 9
already_tracked_findings: 0
db_status_at_audit: ACTIVE_HEALTHY
---

# Phase 2 — Content & Curriculum Gap Audit: Findings

Closes CONTENT-01. This is a discovery audit: no content is authored or fixed
here. Every finding is either scoped as a follow-up content-build item or
explicitly deferred with a reason (D-06).

## Evidence Discipline (D-03)

Every finding below cites a direct read: a SQL result pasted from a SELECT run
against the live database, or a `path/to/file.ts:LINE` source read. No finding
cites `corpus:probe`, `content:parity`, a CEFR/nasal heuristic, a spine-drift
test, or any other guard's report as its sole evidence. Where such a tool
informed an investigation, a second independent direct read confirms the claim
before it is recorded here.

## Severity Taxonomy

| Severity | Means |
|----------|-------|
| `critical` | Learner-facing incorrect teaching, or an exam paper that cannot be sat correctly as shipped |
| `warning` | A real gap or defect that degrades quality; the surface still functions |
| `info` | Cosmetic, process-level, or already owned by an existing requirement/phase (D-09) |

## Finding IDs

Findings are numbered `GAP-01`, `GAP-02`, … in this document. Evidence files use
local ids (`SPINE-nn`, `EXAM-nn`, `DEF-nn`) which the mapping table in
`## Finding Index` resolves to `GAP-nn`.

## Baseline Census

Read live on 2026-09-19 from project `ogbothupjcivwruesgsu` (status
`ACTIVE_HEALTHY` at read time, confirmed via a `select 1` fallback smoke query
run through `ealch-admin/.env`'s `DATABASE_URL` — the Supabase MCP `get_project`
tool was unavailable in the executing session's toolset). These are the
denominators every finding below is measured against.

### Surface totals

```sql
select 'curriculum_unit' as surface, count(*)::int as n from content_units where kind = 'curriculum_unit'
union all select 'lesson',                count(*)::int from content_units where kind = 'lesson'
union all select 'playlist',              count(*)::int from content_units where kind = 'playlist'
union all select 'scenario',              count(*)::int from content_units where kind = 'scenario'
union all select 'speak_stage',           count(*)::int from content_units where kind = 'speak_stage'
union all select 'exam_paper_all',        count(*)::int from content_exam_papers
union all select 'exam_paper_published',  count(*)::int from content_exam_papers where status = 'published'
union all select 'exam_task_all',         count(*)::int from content_exam_tasks
union all select 'exam_task_published',   count(*)::int from content_exam_tasks where status = 'published'
union all select 'content_item',          count(*)::int from content_items
union all select 'content_theme',         count(*)::int from content_themes
order by 1;
```

| surface | n |
|---|---|
| content_item | 48980 |
| content_theme | 130 |
| curriculum_unit | 75 |
| exam_paper_all | 15 |
| exam_paper_published | 15 |
| exam_task_all | 220 |
| exam_task_published | 220 |
| lesson | 78 |
| playlist | 20 |
| scenario | 109 |
| speak_stage | 31 |

### Curriculum units per track

```sql
select split_part(body->>'id', '.', 1) as track,
       count(*)::int as units,
       count(*) filter (where coalesce(jsonb_array_length(body->'lessonIds'), 0) = 0)::int as units_with_no_lessons
from content_units
where kind = 'curriculum_unit'
group by 1
order by 1;
```

| track | units | units_with_no_lessons |
|---|---|---|
| a1 | 30 | 0 |
| a2 | 35 | 0 |
| sons | 10 | 0 |

Expected per CONTEXT.md: sons 10 / a1 30 / a2 35 = 75, zero units with empty
`lessonIds`. Actual: agrees exactly — 75 total units, 0 with empty `lessonIds`
on every track.

### Exam papers per format and status

```sql
select format, status, count(*)::int as papers
from content_exam_papers
group by 1, 2
order by 1, 2;
```

| format | status | papers |
|---|---|---|
| delf_b2 | published | 5 |
| tcf_canada | published | 5 |
| tef_canada | published | 5 |

Expected: 5 published papers each for `tef_canada`, `tcf_canada`, `delf_b2` = 15.
Actual: agrees exactly — 15 published papers, 3 formats x 5 each, and
`exam_paper_all` = `exam_paper_published` = 15 (no draft/in_review/archived
papers exist).

### Live content snapshot

`content_snapshots` has no `id` or `created_at` column under those exact names
(schema: `version` int PK, `path`, `checksum`, `counts` jsonb, `seed_counts`
jsonb, `published_by`, `published_at`). Per the plan's fallback instruction,
ran `select * from content_snapshots order by 1 desc limit 3;` instead.

```sql
select * from content_snapshots order by 1 desc limit 3;
```

| version | path | checksum | counts | seed_counts | published_by | published_at |
|---|---|---|---|---|---|---|
| 70 | snapshots/v70.json | 2e49e9ac315d78083e85acc9c13377d2a4bf4ede2324de4af69eaeb27703f6be | {"items":48978,"units":75,"themes":130,"domains":14,"lessons":78,"examTasks":220,"playlists":20,"scenarios":107,"examPapers":15} | {"items":10417,"units":75,"themes":130,"domains":14,"lessons":78,"playlists":15,"scenarios":60} | null | 2026-09-10T16:46:53.105Z |
| 69 | snapshots/v69.json | c6bc3f0536d21f0f192ce2753aac6d53bbef56e029a647efbf102f6860a4a250 | {"items":48978,"units":75,"themes":130,"domains":14,"lessons":78,"examTasks":220,"playlists":20,"scenarios":107,"examPapers":15} | {"items":10417,"units":75,"themes":130,"domains":14,"lessons":78,"playlists":15,"scenarios":60} | null | 2026-09-10T16:32:53.572Z |
| 68 | snapshots/v68.json | 89f8e6d4366aac5535a90ce6e76c23012bf0ca2d87a5a05dd180fa0aa3d23536 | {"items":48978,"units":75,"themes":130,"domains":14,"lessons":78,"examTasks":220,"playlists":20,"scenarios":107,"examPapers":15} | {"items":10417,"units":75,"themes":130,"domains":14,"lessons":78,"playlists":15,"scenarios":60} | null | 2026-09-10T15:55:13.676Z |

Live snapshot is v70, published 2026-09-10. Its `counts.items` (48978) and
`counts.scenarios` (107) trail the current live table totals (`content_item`
48980, `scenario` 109) by 2 each — i.e. 2 content items and 2 scenarios have
been authored directly against Postgres since v70 was cut and have not yet
been published into a snapshot. Recorded here as a fact for later plans to
weigh, not classified as a finding in this plan.

## Finding Index

Local ids are enumerated from the three evidence files: `02-EVIDENCE-spine.md`
(SPINE-01..04), `02-EVIDENCE-exams.md` (EXAM-01..04), `02-EVIDENCE-defects.md`
(DEF-01). All 9 are classified `new` below — none is owned by an existing
requirement (see `## Already Tracked Elsewhere (D-09)`). `GAP-nn` is numbered
sequentially: spine findings, then exam findings, then defect findings.

| GAP id | Local id | Source plan | Surface | Severity | Disposition |
|--------|----------|-------------|---------|----------|-------------|
| GAP-01 | SPINE-01 | 02 | curriculum spine | warning | new — follow-up scoped below |
| GAP-02 | SPINE-02 | 02 | curriculum spine | info | new — documented, no follow-up (intentional design) |
| GAP-03 | SPINE-03 | 02 | curriculum spine | warning | new — deferred (out of milestone scope) |
| GAP-04 | SPINE-04 | 02 | curriculum spine | warning | new — deferred (out of milestone scope) |
| GAP-05 | EXAM-01 | 03 | exam paper | info | new — documented, not a defect |
| GAP-06 | EXAM-02 | 03 | exam paper | warning | new — follow-up scoped below |
| GAP-07 | EXAM-03 | 03 | exam paper | warning | new — follow-up scoped below |
| GAP-08 | EXAM-04 | 03 | pipeline | warning | new — follow-up scoped below |
| GAP-09 | DEF-01 | 04 | content quality | info | new — follow-up scoped below |

## Findings

### GAP-01: a1.01 and a2.22 declare phantom theme slugs (`politesse`, `routine`)

**Checked:** Every `themes` slug on all 75 curriculum units, resolved against `content_themes.slug` via a LEFT JOIN (`02-EVIDENCE-spine.md` §2.2).
**Finding:** `a1.01` declares `themes: ['salutations', 'politesse']` and `a2.22` declares `themes: ['routine']`. Neither `politesse` nor `routine` exists as a row in `content_themes`. The real sibling slugs are `salutations` (used correctly by `a1.01` itself) and `routines` (plural; already used correctly by `a1.25`) — `routine` is almost certainly a singular/plural slip; `politesse` has no real slug counterpart at all. This is the same phantom-theme-slug shape already fixed once for the A2 situations band (documented 2026-08-15 incident, `ealch-admin/scripts/author-full-curriculum-spine.ts:754-762`), recurring here on two different units.
**Severity:** warning
**Surface:** curriculum spine
**Evidence:**
```sql
with claimed as (
  select u.body->>'id' as unit_id,
         jsonb_array_elements_text(u.body->'themes') as theme_slug
  from content_units u
  where u.kind = 'curriculum_unit'
)
select c.unit_id, c.theme_slug
from claimed c
left join content_themes t on t.slug = c.theme_slug
where t.slug is null
order by 1, 2;
```
Result:
| unit_id | theme_slug |
|---|---|
| a1.01 | politesse |
| a2.22 | routine |

Spot-check: `select slug, title, domain from content_themes where slug in ('salutations','politesse','routine','routines') order by slug;` returns only `routines` ("Les routines") and `salutations` ("Les salutations") as real rows — `politesse` and `routine` return nothing.
**Scope estimate:** A one-line data fix per unit — change `a2.22`'s `themes` entry from `'routine'` to `'routines'`, and either add a `politesse` row to `content_themes` or replace it on `a1.01` with an existing slug. A content-data patch, not a lesson re-authoring effort.
**Cross-reference (D-09):** new finding — no existing requirement (checked against BUG-01, BUG-02, BUG-03, QA-01, QA-02 and the full REQUIREMENTS.md traceability table) covers theme-slug data integrity on curriculum units.
**Phase-worthy (D-07):** no — a two-row data patch, not comparable to a lesson/unit build.

### GAP-02: Five non-first A1 units carry no `prereqUnitIds` (documented, intentional)

**Checked:** Every unit's `prereqUnitIds` for emptiness, cross-referenced against track position (`seq`) and whether it teaches a self-contained lexical field (`02-EVIDENCE-spine.md` §2.3).
**Finding:** `a1.02`, `a1.03`, `a1.05`, `a1.10`, `a1.21` are non-first units in the `a1` track with zero prerequisites. None is a lexical-field unit missing a `themes` entry — `a1.02` and `a1.10` both carry `themes`; `a1.03`, `a1.05`, `a1.21` are foundational grammar (noun gender, subject pronouns, prepositions of place) that no earlier unit genuinely gates. Recorded per this audit's own rubric, which treats a non-first unit with zero prereqs as a finding to record even when it reflects intentional design, so it is not silently dropped from the audit trail.
**Severity:** info
**Surface:** curriculum spine
**Evidence:** Derived from `02-EVIDENCE-spine.md` §1.2's `seq` data joined with §2.1's `n_prereqs`/`themes` columns — all 5 ids show `n_prereqs = 0`, and each carries either a populated `themes` array or is grammar-only content.
**Deferral:** No follow-up needed. This reflects intentional curriculum design (multiple independent entry points into A1 grammar/vocabulary), not a defect — recorded here only so the audit trail is complete per D-01/D-06.
**Cross-reference (D-09):** new finding — not owned by any existing requirement (checked against BUG-01, BUG-02, BUG-03, QA-01, QA-02 and the full traceability table).
**Phase-worthy (D-07):** no — no follow-up work exists to size.

### GAP-03: PE@b2 exam-remediation routing has no prep lesson to route to (15 published PE tasks, 0 lesson supply)

**Checked:** Supply query (lessons at level b2 by skill) vs. demand query (published exam tasks by skill/level), plus a direct read of `dueExamSkills()` (`02-EVIDENCE-spine.md` §3).
**Finding:** 15 published PE exam tasks exist at level b2 (10 `pe_short` + 5 `pe_essay`), and 0 lessons exist at level b2 with `skill: 'PE'` — in fact 0 lessons exist at level b2 of any skill (the entire lesson corpus stops at sons/a1/a2, matching this milestone's frozen content scope). `dueExamSkills()` (`ealch-v2/src/store/progress.logic.ts:1387-1397`) joins a missed OPEN-type exam result to `lessons.find(l => l.skill === r.skill && l.level === r.band)`; since no such lesson exists, `prepLessonId` resolves to `null` unconditionally for any missed b2 PE task, even though the function's own doc comment states callers "MUST treat null as a real problem, not a value to silently drop."
**Severity:** warning
**Surface:** curriculum spine / exam remediation routing
**Evidence:**
```sql
select coalesce(body->>'skill', '(none)') as skill, level, count(*)::int as lessons
from content_units where kind = 'lesson' group by 1, 2 order by 2, 1;
```
Result: 0 rows at level b1/b2/c1/c2 — all 78 lessons are at sons/a1/a2.
```sql
select skill, level, task_type, status, count(*)::int as tasks
from content_exam_tasks where status = 'published' group by 1,2,3,4 order by 1,2,3;
```
Result (b2 PE rows): `PE | b2 | pe_short | 10`, `PE | b2 | pe_essay | 5`.
`ealch-v2/src/store/progress.logic.ts:1393` — `const lesson = lessons.find((l) => l.skill === r.skill && l.level === r.band);` — always `undefined` for band `b2`, so `prepLessonId` is `null` unconditionally for a missed b2 PE task.
**Deferral:** Building a b2 PE prep lesson would introduce b2 as a taught curriculum level, which conflicts with PROJECT.md's explicit Out-of-Scope decision ("New curriculum levels beyond A1/A2/exams... user decision 2026-09-19"). Not scoped as a build item this milestone. A full fix would be one prep lesson at b2 carrying `skill: 'PE'` — comparable in size to a single a1/a2 lesson build — if the out-of-scope decision is ever revisited.
**Cross-reference (D-09):** new finding — not owned by any existing requirement (checked against BUG-01, BUG-02, BUG-03, QA-01, QA-02 and the full traceability table); adjacent to but distinct from BUG-02, which owns exam-response persistence, not remediation-routing content supply.
**Phase-worthy (D-07):** no — deferred by the project's own Out-of-Scope decision on new curriculum levels, not sized for a roadmap stub this milestone.

### GAP-04: PO@b2 exam-remediation routing also has no prep lesson to route to (20 published PO tasks, 0 lesson supply)

**Checked:** Same supply/demand comparison as GAP-03, applied to skill `PO` (`02-EVIDENCE-spine.md` §3.1).
**Finding:** 20 published PO tasks exist at b2 (15 `po_monologue` + 5 `po_debate`, both `OPEN_TASK_TYPES`), and 0 lessons exist at level b2 carrying `skill: 'PO'` (in fact 0 b2 lessons of any skill, per GAP-03's supply query). By the identical `dueExamSkills()` join, any missed b2 PO task also resolves `prepLessonId: null` unconditionally. This exact pairing (PO@b2, not just PE@b2) was not named in prior project memory — new to tracking, found by this fresh measurement.
**Severity:** warning
**Surface:** curriculum spine / exam remediation routing
**Evidence:**
```sql
select skill, level, task_type, status, count(*)::int as tasks
from content_exam_tasks where status = 'published' group by 1,2,3,4 order by 1,2,3;
```
Result (b2 PO rows): `PO | b2 | po_monologue | 15`, `PO | b2 | po_debate | 5`. Cross-referenced against the same zero-row b2-lesson supply query as GAP-03 and the same `ealch-v2/src/store/progress.logic.ts:1393` join.
**Deferral:** Same reasoning as GAP-03 — a b2 PO prep lesson would introduce a new taught curriculum level, out of this milestone's scope per PROJECT.md. A full fix would be one prep lesson at b2 carrying `skill: 'PO'`; PE@b2 and PO@b2 could reasonably be built together as a single b2-remediation follow-up if the scope decision is ever revisited.
**Cross-reference (D-09):** new finding — not owned by any existing requirement (checked against BUG-01, BUG-02, BUG-03, QA-01, QA-02 and the full traceability table).
**Phase-worthy (D-07):** no — deferred by the project's Out-of-Scope decision on new curriculum levels, not sized for a roadmap stub this milestone.

### GAP-05: DELF PO models "1 task, two phases" as two task rows (documented, not a defect)

**Checked:** DELF PO section task count against `BLUEPRINT-delf-b2.md` §7's "1 task, two phases" language (`02-EVIDENCE-exams.md` §2.3, §EXAM-01).
**Finding:** Not a defect. The schema represents the DELF PO monologue and débat phases as two separate `content_exam_tasks` rows (`po_monologue` + `po_debate`) rather than one task with an internal phase split — a legitimate modeling choice; the phase-2 type name `po_debate` matches the blueprint's own "Exercice en interaction — débat" language more precisely than a generic name would. Recorded here only so the "2 tasks" figure in the per-paper question rollup is not later mistaken for a miscount against a "1 task" target.
**Severity:** info
**Surface:** exam paper
**Evidence:** `02-EVIDENCE-exams.md` §2.3 diff table — DELF PO: target "2 tasks", actual "2 tasks", delta +0, verdict "conforms", on all 5 DELF papers; `BLUEPRINT-delf-b2.md` §7 ("1 task, two phases").
**Deferral:** No follow-up needed; this is documented structure, not a build item.
**Cross-reference (D-09):** new finding — not owned by any existing requirement (checked against BUG-01, BUG-02, BUG-03, QA-01, QA-02 and the full traceability table); recorded for audit completeness only.
**Phase-worthy (D-07):** no — no follow-up work exists to size.

### GAP-06: TEF blanc-01's Section D/E/F audio spot-checks run hot against the speech-rate envelope

**Checked:** Measured words-per-minute on 4 spot-checked CO documents (TEF Sections D/E/F on `blanc-01`, plus one TCF C2 document and one DELF exercise as comparison points) against `STANDARD-common.md` §2's per-band wpm targets. `check-speech-rate.ts` could not be run in this environment (`ealch-admin` has no installed `node_modules` in this worktree), so the spot-check pulled `parts[].text`/`parts[].durationS` directly and computed wpm by hand (`02-EVIDENCE-exams.md` §2.5).
**Finding:** TEF Section D (`exam.tef_canada.blanc-01.co_mcq.004`, B2 target ~160 wpm) measured ~169 wpm; TEF Section E (`co_mcq.005`, interview, C1 ceiling ~175 wpm) measured ~192 wpm; TEF Section F (`co_mcq.006`, reportage, B2–C1, same ~175 wpm ceiling) measured ~192 wpm. All three TEF documents ran faster than their band's stated ceiling — a 3-of-3 pattern on the one TEF paper spot-checked. The DELF and TCF-C2 comparison points did not show the same pattern (DELF landed almost exactly on target; TCF C2 has no stated ceiling to exceed).
**Severity:** warning
**Surface:** exam paper
**Evidence:**
| Document | Band target | Duration | Words (approx.) | Measured wpm |
|---|---|---|---|---|
| `exam.tef_canada.blanc-01.co_mcq.004` (Section D) | B2, ~160 wpm | 55s | 155 | ~169 |
| `exam.tef_canada.blanc-01.co_mcq.005` (Section E) | B1→C1 rising, ceiling ~175 wpm | 85s | 272 | ~192 |
| `exam.tef_canada.blanc-01.co_mcq.006` (Section F) | B2–C1, ceiling ~175 wpm | 123s | 394 | ~192 |

Raw `durationS`/`text` pulled directly from `content_exam_tasks.parts` (queries in `02-EVIDENCE-exams.md` §2.5); word counts computed by whitespace split, not by the unreviewed `check-speech-rate.ts` heuristic.
**Scope estimate:** Run `check-speech-rate.ts` properly (from a checkout with `ealch-admin` dependencies installed) across all 5 TEF papers' CO blocks D/E/F to confirm the pattern holds beyond `blanc-01`, then decide whether to re-render the confirmed-hot documents at a slower TTS rate — comparable in scope to a multi-paper audio re-render if confirmed.
**Cross-reference (D-09):** new finding — not owned by any existing requirement (checked against BUG-01, BUG-02, BUG-03, QA-01, QA-02, SEC-01 and PERF-01/PERF-02, none of which cover exam-audio speech-rate calibration).
**Phase-worthy (D-07):** yes — comparable to a multi-paper audio re-render (verification across 5 papers, TTS re-render of any confirmed-hot documents), contingent on the verification step confirming the pattern beyond `blanc-01`.

### GAP-07: DELF blanc-02 through blanc-05 audio never went through an E8 listening pass (~36.8 minutes across 4 papers)

**Checked:** `content_exam_papers` status for all 5 DELF papers; summed real per-clip `durationS` across the 4 named papers' CO exercises; cross-referenced against CONTEXT.md's D-05 statement (`02-EVIDENCE-exams.md` §3.0).
**Finding:** All 4 papers (`blanc-02` through `blanc-05`) remain `status='published'` today, live in production. Per CONTEXT.md D-05, their audio was promoted to production without going through the E8 marking/listening pass. This audit's own duration sum revises the volume estimate: ~36.8 minutes of unverified audio across the 4 papers (564+554+544+546 seconds, summed from real `durationS` values), not the "roughly two hours" CONTEXT.md's D-05 text states — the finding itself is unconditionally real per D-05's own instruction; only the scope number is corrected here.
**Severity:** warning
**Surface:** exam paper
**Evidence:**
```sql
select id, format, variant, paper_no, status, created_at, updated_at
from content_exam_papers where format = 'delf_b2' order by paper_no;
```
Result: all 5 DELF papers `status = 'published'`.

| paper | ex.1 (s) | ex.2 (s) | ex.3 (s) | total (s) |
|---|---|---|---|---|
| blanc-02 | 176 | 160 | 228 | 564 |
| blanc-03 | 184 | 155 | 215 | 554 |
| blanc-04 | 191 | 154 | 199 | 544 |
| blanc-05 | 166 | 180 | 200 | 546 |

Summed from `sum(coalesce((part->>'durationS')::int,0))` per paper (query in `02-EVIDENCE-exams.md` §3.0).
**Scope estimate:** An audio QA pass over the 12 CO tasks (3 per paper x 4 papers), ~36.8 minutes of audio across `blanc-02`–`blanc-05` — comparable to a multi-paper audio re-render/listening-QA effort.
**Cross-reference (D-09):** new finding — not owned by any existing requirement (checked against BUG-01, BUG-02, BUG-03, QA-01, QA-02 and the full traceability table).
**Phase-worthy (D-07):** yes — comparable to a multi-paper audio QA pass across 4 published exam papers (~37 minutes of audio, 12 tasks).

### GAP-08: No schema field records an audio-listening attestation for any exam task, in any format

**Checked:** `content_exam_tasks.reviewed_by`/`reviewed_at` across all 220 exam tasks; `examiner_notes` content on a sample; `audio_assets` table contents and its foreign-key target (`02-EVIDENCE-exams.md` §3.1).
**Finding:** `reviewed_by` and `reviewed_at` are `NULL` on all 220 rows, in every format (not just DELF, not just CO). `examiner_notes` is populated but is boilerplate candidate-facing disclaimer text, not an internal review record. `audio_assets` is empty (0 rows) and, even if populated, is keyed to `content_items.id`, not `content_exam_tasks` — it structurally cannot record an exam-audio review either way. This is why GAP-07's DELF-specific gap cannot be confirmed-absent for TEF papers 2-5 or TCF papers 2-5 either: the database carries no signal either way, for any paper, in any format.
**Severity:** warning
**Surface:** pipeline
**Evidence:**
```sql
select count(*) filter (where reviewed_by is not null) as n_reviewed_by,
       count(*) filter (where reviewed_at is not null) as n_reviewed_at,
       count(*)::int as total
from content_exam_tasks;
```
Result: `{"n_reviewed_by": 0, "n_reviewed_at": 0, "total": 220}`.
```sql
select * from audio_assets order by 1 limit 5;
```
Result: `[]` (0 rows). `ealch-admin/src/db/schema.ts:489` (`audioAssets`, keyed to `item_id`) and `:590-591` (`reviewedBy`/`reviewedAt` on `contentExamTasks`, present in schema, never populated).
**Scope estimate:** Add a per-paper (or per-CO-task) audio-attestation field, or a lightweight marking-sheet record outside the content DB, the next time exam-audio QA tooling is built — a schema/tooling change, not a lesson-build-scale effort.
**Cross-reference (D-09):** new finding — not owned by any existing requirement (checked against BUG-01, BUG-02, BUG-03, QA-01, QA-02 and the full traceability table).
**Phase-worthy (D-07):** no — a targeted schema-field addition, not comparable in scope to a lesson/unit build or a multi-paper audio re-render on its own, though it is a prerequisite for durably recording GAP-06/GAP-07's audio-QA work.

### GAP-09: `fr.a2.au-restaurant.187` still carries a build-note contamination fragment in shipped content

**Checked:** Regex count of `content_items.notes` for authoring-commentary markers, plus a full-row hand read of every hit, plus an identical check against the shipped `seed.json` (`02-EVIDENCE-defects.md` §2, Steps A–C).
**Finding:** `fr.a2.au-restaurant.187` ("Do you need anything else?", a2, au-restaurant theme) carries a `notes` field whose opening clause ("OFF SCRIPT, and it looks like stage 6 without being it") is internal authoring/script-structure commentary, not learner-facing teaching content. It is live in both Postgres and the currently shipped `seed.json` (line 5058), so every fresh install already ships it. A second regex hit, `fr.a1.ecole.056`, was hand-read and confirmed a false positive — its note is legitimate vocabulary-defining prose ("le brouillon" = "the rough draft"), not build commentary.
**Severity:** info
**Surface:** content quality
**Evidence:**
```sql
select id, kind, level, theme, fr, en, notes
from content_items
where id in ('fr.a2.au-restaurant.187', 'fr.a1.ecole.056');
```
Result: `fr.a2.au-restaurant.187` → `fr: "Il vous faut autre chose ?"`, `en: "Do you need anything else?"`, `notes: "OFF SCRIPT, and it looks like stage 6 without being it: this is asked mid-meal about bread or water, not about a dessert you might buy."`
```bash
grep -oE '"notes" *: *"[^"]{0,200}"' ealch-v2/src/content/seed.json | grep -niE 'FIRST DRAFT|STAGE [0-9]|TODO|TBD|FIXME|placeholder|lorem'
```
Result includes `5058:"notes": "OFF SCRIPT, and it looks like stage 6 without being it: this is asked mid-meal about bread or water, not about a dessert you might buy."` — confirms it ships in the bundled seed, not merely sitting unpublished in Postgres.
**Scope estimate:** A single-row content edit — rewrite or trim the note to keep only its learner-useful second clause ("this is asked mid-meal about bread or water, not about a dessert you might buy"); no re-authoring, no re-publish-pipeline change needed.
**Cross-reference (D-09):** new finding — not previously named in project memory (memory's 2026-09-10 claim was "0 left," which this evidence corrects to "1 left"); checked against BUG-01, BUG-02, BUG-03, QA-01, QA-02 and the full traceability table, none of which cover content-notes contamination.
**Phase-worthy (D-07):** no — a single-row content edit, not comparable to a lesson/unit build.

## Already Tracked Elsewhere (D-09)

Findings surfaced by this audit that an existing requirement already owns.
These are deliberately NOT logged as new gaps (D-09). Listed so the audit is
complete and so nobody re-discovers them.

Cross-reference performed against every requirement in `REQUIREMENTS.md`'s
Traceability table, applying this plan's own rule: a finding is "already
tracked" only if an existing phase's success criteria, as written in
`ROADMAP.md`, would actually close it — "adjacent" does not count. The
candidates closest in surface to this audit's 9 findings (curriculum-spine
data integrity, exam-paper audio, content-item notes) were checked
individually; the rest of the traceability table was checked for
completeness.

| Candidate requirement | Phase | Checked against | Match? |
|---|---|---|---|
| BUG-01 | 7 | Audio/TTS backgrounding pause/resume — no finding here involves audio backgrounding behavior | No match |
| BUG-02 | 7 | Exam response persisted before grading, survives crash/force-stop/process death — no finding here involves exam-response persistence (GAP-07/GAP-08 are about audio-listening QA attestation, not response durability) | No match |
| BUG-03 | 7 | STT `continuous: false` regression test — no finding here involves STT | No match |
| QA-01 | 9 | Onboarding/placement flow audit (`app/onboarding.tsx`, `app/placement.tsx`) — no finding here touches onboarding or placement | No match |
| QA-02 | 9 | Analytics event coverage/correctness (`services/analytics.ts`) — no finding here touches analytics | No match |
| A11Y-01/02/03/04 | 8 | Press-component roles, icon labels, OS-sync dark mode, flashcard font-scale clipping — none of this audit's findings involve an accessibility surface | No match |
| UX-01 | 13 | General UI/UX polish audit — this audit's findings are curriculum/exam-content-data findings, not UI/UX polish | No match |
| PERF-01 / PERF-02 | 16 / 15 | Cold-start load, content-snapshot split by curriculum level — no finding here involves app load performance or snapshot delivery | No match |
| SEC-01 | 3 | TTS edge function auth + rate limit — no finding here involves the TTS edge function | No match |
| PAY-01/02/03/05, NOTIFY-01/02/03, TEST-01/02/03, ANIM-01, FEEDBACK-01/02, PUBLISH-01/02 | various | Reviewed against the full traceability table; none names curriculum-spine data integrity, exam-paper structure/audio, or content-item-notes surfaces | No match |

None. Every finding this audit surfaced is new to tracking — the D-09
cross-reference against BUG-01, BUG-02, BUG-03, QA-01, QA-02 and the full
`REQUIREMENTS.md` traceability table returned no owner for any of them.

## Gaps Summary

**CONTENT-01 outcome:** audited, 9 gap(s) found and scoped

### What was checked

| Surface | Checked | Method | Evidence |
|---------|---------|--------|----------|
| Curriculum spine — unit existence | 75/75 units, by id | direct SELECT on `content_units` diffed against the id set declared in `author-full-curriculum-spine.ts` | `02-EVIDENCE-spine.md` §1 |
| Curriculum spine — pedagogical fields | 75/75 units | `canDo` / `themes` / `prereqUnitIds` read per row; themes joined to `content_themes`, prereqs joined to the live unit set | `02-EVIDENCE-spine.md` §2 |
| PE@b2 / PO@b2 exam-remediation slots | 2 targeted checks (skills PE and PO) | lesson supply vs published PE/PO exam-task demand, plus `dueExamSkills()` routing read at `ealch-v2/src/store/progress.logic.ts:1387-1397` | `02-EVIDENCE-spine.md` §3 |
| Exam papers — section shape | 15/15 published papers, by id | `jsonb_array_elements(p.sections)` with every taskId resolved against `content_exam_tasks` | `02-EVIDENCE-exams.md` §1 |
| Exam papers — blueprint conformance | 60 paper × skill pairs (15 papers × 4 skills: CO/CE/PE/PO) | item/task counts diffed against STANDARD-tef-canada.md, STANDARD-tcf-canada.md, STANDARD-delf-b2.md, BLUEPRINT-delf-b2.md (DELF calibrated to sample 3) | `02-EVIDENCE-exams.md` §2 |
| Exam audio verification | 15 papers (all published) | E8-attestation question answered from the schema (no field exists, any format); DELF blanc-02..05's ~36.8 minutes of never-reviewed CO audio logged as GAP-07; TEF blanc-01's Sections D/E/F spot-checked by hand for speech rate as GAP-06 | `02-EVIDENCE-exams.md` §3 |
| Known quality defects | 3 defect checks (2 pinned-test re-verifications, 1 build-note-contamination scan) | pinned tests re-run with recorded exit status (9/9 numbers-scoring, 21/21 playlist-voice-deck, both still green), source re-read, fresh DB counts for the notes scan | `02-EVIDENCE-defects.md` §1-2 |
| Shipped seed cut | 75 units | `seed.json` id set diffed both ways against the declared 75-unit set | `02-EVIDENCE-defects.md` §3 |

### What was NOT checked, and why

- Pedagogical QUALITY of lesson prose beyond field presence (does the explanation teach well) — out of scope. This phase audits the spine's structural/data integrity (ids, themes, prereqs, canDo presence), not the teaching quality of any individual lesson's authored content.
- B1/C1 content and any curriculum level beyond A1/A2/exams — out of milestone scope per PROJECT.md's Out-of-Scope decision (2026-09-19); this is why GAP-03 and GAP-04 (PE@b2/PO@b2 remediation-lesson gaps) are deferred rather than scoped as build items.
- Whether TEF blanc-01's or any other paper's exam audio is *correct and pleasant* to listen to end-to-end (voice quality, naturalness, comprehensibility) — unanswerable from database queries alone; GAP-06 and GAP-07 exist precisely because this requires a human listening pass, which is why they are promoted to their own roadmap phases rather than closed inside this audit.
- `check-speech-rate.ts` could not be executed in this environment (`ealch-admin` had no installed `node_modules` in this worktree) — GAP-06's finding rests on a hand-computed wpm spot-check of 3 documents on `blanc-01` only, not a full run of the tool across all 5 TEF papers; that full run is Phase 20's first success criterion, not something this audit closed.
- Everything else in scope (curriculum spine structure, exam paper structure/blueprint conformance, the three previously-known content-quality defects, and the seed-vs-Postgres shipping cut) was checked directly against live Postgres, per the table above.

### Outcome

9 gap(s) found: GAP-01 through GAP-09. 2 promoted to ROADMAP stub Phase(s) 20 (GAP-06 — TEF speech-rate verification & re-render) and 21 (GAP-07 — DELF blanc-02..05 audio listening QA). 5 scoped as follow-up items directly in this document without a dedicated phase: GAP-01 (phantom theme-slug data patch), GAP-08 (audio-attestation schema field, a prerequisite for durably recording Phase 20/21's work), and GAP-09 (single-row notes edit) are small enough to fold into ordinary content maintenance; GAP-03 and GAP-04 (PE@b2/PO@b2 remediation-lesson gaps) are deferred with reason — building either would introduce a new taught curriculum level, which conflicts with PROJECT.md's explicit Out-of-Scope decision on new curriculum levels this milestone. 2 further findings (GAP-02, GAP-05) are documented as intentional design / non-defects with no follow-up action needed. 0 findings were already owned by an existing requirement — see `## Already Tracked Elsewhere (D-09)` above, which cross-referenced the full REQUIREMENTS.md traceability table and found no match for any of this audit's 9 findings.

### Evidence discipline confirmation (D-03)

Every finding above cites a pasted SELECT result, a test exit status, or a
`path/to/file:LINE` source excerpt. No finding rests on `corpus:probe`,
`content:parity`, a CEFR or nasal heuristic, a spine-drift test, or any guard's
exit code.
