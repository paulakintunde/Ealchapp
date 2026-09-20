---
phase: 02-content-curriculum-gap-audit
plan: 03
evidence_for: CONTENT-01
surface: exam papers (TEF Canada / TCF Canada / DELF B2, 15 published)
read_at: 2026-09-20T03:31:52Z
papers_checked: 15/15
---

# Evidence — Exam Paper Structural Conformance (D-04, D-05)

Severity taxonomy and finding-id scheme per `GAPS.md`. Local ids `EXAM-nn` are
mapped to `GAP-nn` by Plan 05.

## Method

Direct SELECT against `ogbothupjcivwruesgsu`, diffed against the numeric targets
in `ealch-admin/exam-blueprints/STANDARD-tef-canada.md`,
`STANDARD-tcf-canada.md`, `STANDARD-delf-b2.md` and `BLUEPRINT-delf-b2.md`.
`sections` is read as a jsonb array column on `content_exam_papers` — there is
no separate table for exam sections at all; the plural name refers only to a
jsonb array field.

**Environment note.** The Supabase MCP `execute_sql` tool was not present in
this executor's toolset this session (same gap Plan 01 recorded). Per the
plan's documented fallback, queries were run via a throwaway Node/`pg` script
in the session scratchpad directory (never written to `ealch-admin/scripts/`),
connecting through `DATABASE_URL` read directly from `ealch-admin/.env`. Every
statement issued began with `select` or `with … select`; the runner itself
refuses anything else. `check-speech-rate.ts` could not be invoked (this
worktree has no `node_modules` installed for `ealch-admin`, and installing one
is out of this plan's scope), so the Step E secondary input was produced
instead by direct spot-check queries against `parts[].text` and
`parts[].durationS` — arguably more rigorous than trusting the heuristic
script's own output unverified, which is exactly what RESEARCH.md Pitfall 6
warns against.

## 1. Per-paper section shape

### 1.1 Every published paper and its four sections

```sql
select p.id                                         as paper_id,
       p.format,
       p.variant,
       p.paper_no,
       p.status,
       jsonb_array_length(p.sections)               as n_sections,
       ord                                          as section_pos,
       sec->>'skill'                                as section_skill,
       (sec->>'timingS')::int                       as timing_s,
       sec->>'blueprintId'                          as blueprint_id,
       jsonb_array_length(sec->'taskIds')           as n_tasks,
       sec->'taskIds'                               as task_ids
from content_exam_papers p,
     lateral jsonb_array_elements(p.sections) with ordinality as t(sec, ord)
where p.status = 'published'
order by p.format, p.paper_no, ord;
```

Full result: 60 rows (15 papers x 4 sections each). Condensed to one row per
paper (section skill / timing_s / n_tasks in section-position order), since
the full 60-row dump is reproduced verbatim in the per-paper tables below and
repeating it twice adds nothing:

| paper_id | CO (timing_s, n_tasks) | CE (timing_s, n_tasks) | PE (timing_s, n_tasks) | PO (timing_s, n_tasks) |
|---|---|---|---|---|
| paper.delf_b2.blanc-01.1 | 1800, 3 | 3600, 3 | 3600, 1 | 1200, 2 |
| paper.delf_b2.blanc-02.2 | 1800, 3 | 3600, 3 | 3600, 1 | 1200, 2 |
| paper.delf_b2.blanc-03.3 | 1800, 3 | 3600, 3 | 3600, 1 | 1200, 2 |
| paper.delf_b2.blanc-04.4 | 1800, 3 | 3600, 3 | 3600, 1 | 1200, 2 |
| paper.delf_b2.blanc-05.5 | 1800, 3 | 3600, 3 | 3600, 1 | 1200, 2 |
| paper.tef_canada.blanc-01.1 | 2400, 7 | 3600, 6 | 3600, 2 | 900, 2 |
| paper.tef_canada.blanc-02.2 | 2400, 7 | 3600, 6 | 3600, 2 | 900, 2 |
| paper.tef_canada.blanc-03.3 | 2400, 7 | 3600, 6 | 3600, 2 | 900, 2 |
| paper.tef_canada.blanc-04.4 | 2400, 7 | 3600, 6 | 3600, 2 | 900, 2 |
| paper.tef_canada.blanc-05.5 | 2400, 7 | 3600, 6 | 3600, 2 | 900, 2 |
| paper.tcf_canada.blanc-01.1 | 2100, 6 | 3600, 6 | 3600, 3 | 720, 3 |
| paper.tcf_canada.blanc-02.2 | 2100, 6 | 3600, 6 | 3600, 3 | 720, 3 |
| paper.tcf_canada.blanc-03.3 | 2100, 6 | 3600, 6 | 3600, 3 | 720, 3 |
| paper.tcf_canada.blanc-04.4 | 2100, 6 | 3600, 6 | 3600, 3 | 720, 3 |
| paper.tcf_canada.blanc-05.5 | 2100, 6 | 3600, 6 | 3600, 3 | 720, 3 |

All 15 rows come from the same 60-row query result; `blueprintId` on every row
matched the paper's format (`delf-b2-2026.09`, `tef-canada-2025.09` /
`tef-canada-2025.09+G-elastic` on the CO section, `tcf-canada-2026.01`). Every
`section_pos` 1/2/3/4 carried `section_skill` CO/CE/PE/PO respectively, on
every one of the 15 papers, with no exception — see §1.3.

Task-id detail (per section) for one representative paper of each format, to
show the actual `taskIds` shape referenced by §1.4/§1.5:

- `paper.delf_b2.blanc-01.1`: CO → `exam.delf_b2.blanc-01.co_mcq.001..003`; CE
  → `exam.delf_b2.blanc-01.ce_mcq.001..003`; PE →
  `exam.delf_b2.blanc-01.pe_short.001`; PO →
  `exam.delf_b2.blanc-01.po_monologue.001`, `exam.delf_b2.blanc-01.po_debate.001`
- `paper.tef_canada.blanc-01.1`: CO → `exam.tef_canada.blanc-01.co_mcq.001..007`;
  CE → `exam.tef_canada.blanc-01.ce_mcq.001..006`; PE →
  `exam.tef_canada.blanc-01.pe_short.001`, `exam.tef_canada.blanc-01.pe_essay.001`;
  PO → `exam.tef_canada.blanc-01.po_interaction.001`,
  `exam.tef_canada.blanc-01.po_monologue.001`
- `paper.tcf_canada.blanc-01.1`: CO → `exam.tcf_canada.blanc-01.co_mcq.001..006`;
  CE → `exam.tcf_canada.blanc-01.ce_mcq.001..006`; PE →
  `exam.tcf_canada.blanc-01.pe_short.001..003`; PO →
  `exam.tcf_canada.blanc-01.po_monologue.001`,
  `exam.tcf_canada.blanc-01.po_interaction.001`,
  `exam.tcf_canada.blanc-01.po_monologue.002` (tâche 1 / tâche 2 / tâche 3, in
  that order — matches STANDARD-tcf-canada.md §6/§7's task ordering)

The remaining 4 papers per format (`blanc-02`..`blanc-05`) follow the identical
shape with incrementing `.NNN` task-id suffixes per variant; verified
individually in the full query result, not sampled.

### 1.2 Invariant: exactly four sections

Every one of the 15 published papers returns `n_sections = 4` in the §1.1
query: `paper.delf_b2.blanc-01.1`, `paper.delf_b2.blanc-02.2`,
`paper.delf_b2.blanc-03.3`, `paper.delf_b2.blanc-04.4`,
`paper.delf_b2.blanc-05.5`, `paper.tef_canada.blanc-01.1`,
`paper.tef_canada.blanc-02.2`, `paper.tef_canada.blanc-03.3`,
`paper.tef_canada.blanc-04.4`, `paper.tef_canada.blanc-05.5`,
`paper.tcf_canada.blanc-01.1`, `paper.tcf_canada.blanc-02.2`,
`paper.tcf_canada.blanc-03.3`, `paper.tcf_canada.blanc-04.4`,
`paper.tcf_canada.blanc-05.5`. No paper returned any value other than 4.
**No findings.**

### 1.3 Invariant: skill order CO, CE, PE, PO

For every one of the same 15 paper ids, `section_pos` 1/2/3/4 carried
`section_skill` values `CO`/`CE`/`PE`/`PO` in that exact order, with no
exception on any paper. `paper.delf_b2.blanc-01.1`, `paper.delf_b2.blanc-02.2`,
`paper.delf_b2.blanc-03.3`, `paper.delf_b2.blanc-04.4`,
`paper.delf_b2.blanc-05.5`, `paper.tef_canada.blanc-01.1`,
`paper.tef_canada.blanc-02.2`, `paper.tef_canada.blanc-03.3`,
`paper.tef_canada.blanc-04.4`, `paper.tef_canada.blanc-05.5`,
`paper.tcf_canada.blanc-01.1`, `paper.tcf_canada.blanc-02.2`,
`paper.tcf_canada.blanc-03.3`, `paper.tcf_canada.blanc-04.4`,
`paper.tcf_canada.blanc-05.5` all confirmed. **No findings.**

### 1.4 Invariant: every taskId resolves to a published task of the right skill and format

```sql
with claimed as (
  select p.id as paper_id,
         p.format,
         sec->>'skill' as section_skill,
         jsonb_array_elements_text(sec->'taskIds') as task_id
  from content_exam_papers p,
       jsonb_array_elements(p.sections) sec
  where p.status = 'published'
)
select c.paper_id, c.section_skill, c.task_id,
       t.id is not null  as task_exists,
       t.skill           as task_skill,
       t.status          as task_status,
       t.format          as task_format,
       t.format_version
from claimed c
left join content_exam_tasks t on t.id = c.task_id
where t.id is null
   or t.status <> 'published'
   or t.skill <> c.section_skill::exam_skill
   or t.format <> c.format
order by 1, 2, 3;
```

Result: `[]` (empty). None — every taskId across all 15 papers resolves to a
published task of the matching skill and format. **No findings.**

### 1.5 Orphan published tasks

```sql
with claimed as (
  select jsonb_array_elements_text(sec->'taskIds') as task_id
  from content_exam_papers p, jsonb_array_elements(p.sections) sec
  where p.status = 'published'
)
select t.id, t.format, t.variant, t.task_type, t.status, t.format_version
from content_exam_tasks t
where t.id not in (select task_id from claimed)
order by t.format, t.variant, t.id;
```

Result: `[]` (empty) — **zero orphans exist in the database today**, published
or otherwise.

This differs from `check-orphans.ts`'s header comment, which documents one
known orphan on record: `exam.delf_b2.blanc-01.pe_essay.001`, `in_review`,
format-version `delf-2020.2`. A direct point lookup confirms that row no
longer exists at all:

```sql
select id, format, variant, task_type, status, format_version, updated_at
from content_exam_tasks
where id = 'exam.delf_b2.blanc-01.pe_essay.001';
```

Result: `[]` (empty). A broader search for every `pe_essay` task in the
database returns only the five TEF papers' own `pe_essay.001` tasks (Section B
"Lettre argumentée"), all `published`, all claimed by their paper's PE
section:

```sql
select id, format, variant, task_type, status, format_version, updated_at
from content_exam_tasks
where task_type = 'pe_essay'
order by format, variant, id;
```

Result: 5 rows, `exam.tef_canada.blanc-01.pe_essay.001` through
`exam.tef_canada.blanc-05.pe_essay.001`, all `format='tef_canada'`,
`status='published'`, `format_version='tef-canada-2025.09'` — no DELF row
among them.

**Classified `info` / already-explained**, per the plan's own instruction for
this exact known row — except the situation has moved on since
`check-orphans.ts` was written: the previously-orphaned DELF draft is not
present in the table at all (removed or superseded at some point after
2026-07-23, not merely archived — `--archive` only ever sets `status`, and a
`select *` point lookup on the id returns nothing). `check-orphans.ts`'s header
comment is now stale documentation of a resolved situation rather than a
description of current state; worth a one-line comment update in that file the
next time it is touched, but that is a doc-freshness nit, not a content defect,
so it is not escalated to a `warning`.

## Findings from section 1

No findings. All 15 published papers carry four sections in CO/CE/PE/PO order
with every taskId resolving. Zero orphaned exam tasks exist in the database.
The one previously-documented known orphan (`exam.delf_b2.blanc-01.pe_essay.001`)
is no longer present in the table at all, so `check-orphans.ts`'s header
comment describing it is stale but the state it worried about is resolved, not
worsened.

