---
phase: 02-content-curriculum-gap-audit
audited: 2026-09-19
status: in-progress
units_checked: 0/75
exam_papers_checked: 0/15
new_findings: 0
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

_(populated by Plan 05)_

## Findings

_(populated by Plan 05)_

## Already Tracked Elsewhere (D-09)

_(populated by Plan 05)_

## Gaps Summary

_(populated by Plan 06)_
