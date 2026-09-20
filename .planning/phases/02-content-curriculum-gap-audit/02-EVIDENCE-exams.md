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

## 2. Per-format conformance

The target numbers below were re-read from the four blueprint files rather
than assumed from this plan's own frontmatter table, per the plan's
instruction to reconcile rather than re-derive blindly. All four numbers
agreed exactly with `STANDARD-tef-canada.md` §6, `STANDARD-tcf-canada.md` §7,
`STANDARD-delf-b2.md` §7 and `BLUEPRINT-delf-b2.md` §2/§4/§5 — no disagreement
found between this plan's stated targets and the blueprint files as currently
written.

### 2.1 Items and parts per task

```sql
select t.id                                                      as task_id,
       t.format, t.variant, t.task_type, t.skill, t.label,
       t.status,
       t.timing_s,
       t.prep_s,
       t.format_version,
       coalesce(jsonb_array_length(t.items), 0)                  as n_items,
       coalesce(jsonb_array_length(t.parts), 0)                  as n_parts,
       (t.items is not null and t.parts is not null)             as items_and_parts_both_set
from content_exam_tasks t
where t.status = 'published'
order by t.format, t.variant, t.skill, t.id;
```

220 rows returned (all published exam tasks). `items_and_parts_both_set` was
`false` on every single row — no task carries both `items` and `parts`
simultaneously. **No findings.** Task shape by format, confirmed from this
result: `tef_canada` CO/CE tasks use `parts` (block-per-task, several
documents); `tcf_canada` and `delf_b2` CO/CE tasks likewise use `parts` (one
part per document/exercise); PE/PO tasks across all three formats carry
neither `items` nor `parts` (open tasks scored via `rubric`/`responseSpec`
instead — outside this plan's closed-item counting scope).

### 2.2 Per-paper question rollup

```sql
with pub as (
  select p.id as paper_id, p.format, p.paper_no,
         sec->>'skill' as section_skill,
         jsonb_array_elements_text(sec->'taskIds') as task_id
  from content_exam_papers p, jsonb_array_elements(p.sections) sec
  where p.status = 'published'
),
counted as (
  select pub.paper_id, pub.format, pub.paper_no, pub.section_skill, t.id as task_id,
         coalesce(jsonb_array_length(t.items), 0) as direct_items,
         coalesce((
           select sum(coalesce(jsonb_array_length(part->'items'), 0))
           from jsonb_array_elements(coalesce(t.parts, '[]'::jsonb)) part
         ), 0) as part_items
  from pub join content_exam_tasks t on t.id = pub.task_id
)
select paper_id, format, paper_no, section_skill,
       count(*)::int                              as n_tasks,
       sum(direct_items + part_items)::int        as n_questions
from counted
group by 1,2,3,4
order by format, paper_no,
         array_position(array['CO','CE','PE','PO'], section_skill);
```

`part->'items'` is the correct key — confirmed against `ealch-v2/src/content/schema.ts`'s
`ExamPart` type (`items: QcmItem[]`, line 2252), not guessed.

### 2.3 Diff against blueprint targets, per paper, per skill

60 rows (15 papers x 4 skills). PE/PO rows report task counts (these formats'
open tasks carry no `items`/`parts` question structure); CO/CE rows report
question counts.

| paper_id | skill | target | actual | delta | verdict |
|---|---|---|---|---|---|
| paper.delf_b2.blanc-01.1 | CO | 20 q | 20 q | +0 | conforms |
| paper.delf_b2.blanc-01.1 | CE | 20 q | 20 q | +0 | conforms |
| paper.delf_b2.blanc-01.1 | PE | 1 tasks | 1 tasks | +0 | conforms |
| paper.delf_b2.blanc-01.1 | PO | 2 tasks | 2 tasks | +0 | conforms |
| paper.delf_b2.blanc-02.2 | CO | 20 q | 20 q | +0 | conforms |
| paper.delf_b2.blanc-02.2 | CE | 20 q | 20 q | +0 | conforms |
| paper.delf_b2.blanc-02.2 | PE | 1 tasks | 1 tasks | +0 | conforms |
| paper.delf_b2.blanc-02.2 | PO | 2 tasks | 2 tasks | +0 | conforms |
| paper.delf_b2.blanc-03.3 | CO | 20 q | 20 q | +0 | conforms |
| paper.delf_b2.blanc-03.3 | CE | 20 q | 20 q | +0 | conforms |
| paper.delf_b2.blanc-03.3 | PE | 1 tasks | 1 tasks | +0 | conforms |
| paper.delf_b2.blanc-03.3 | PO | 2 tasks | 2 tasks | +0 | conforms |
| paper.delf_b2.blanc-04.4 | CO | 20 q | 20 q | +0 | conforms |
| paper.delf_b2.blanc-04.4 | CE | 20 q | 20 q | +0 | conforms |
| paper.delf_b2.blanc-04.4 | PE | 1 tasks | 1 tasks | +0 | conforms |
| paper.delf_b2.blanc-04.4 | PO | 2 tasks | 2 tasks | +0 | conforms |
| paper.delf_b2.blanc-05.5 | CO | 20 q | 20 q | +0 | conforms |
| paper.delf_b2.blanc-05.5 | CE | 20 q | 20 q | +0 | conforms |
| paper.delf_b2.blanc-05.5 | PE | 1 tasks | 1 tasks | +0 | conforms |
| paper.delf_b2.blanc-05.5 | PO | 2 tasks | 2 tasks | +0 | conforms |
| paper.tcf_canada.blanc-01.1 | CO | 39 q | 39 q | +0 | conforms |
| paper.tcf_canada.blanc-01.1 | CE | 39 q | 39 q | +0 | conforms |
| paper.tcf_canada.blanc-01.1 | PE | 3 tasks | 3 tasks | +0 | conforms |
| paper.tcf_canada.blanc-01.1 | PO | 3 tasks | 3 tasks | +0 | conforms |
| paper.tcf_canada.blanc-02.2 | CO | 39 q | 39 q | +0 | conforms |
| paper.tcf_canada.blanc-02.2 | CE | 39 q | 39 q | +0 | conforms |
| paper.tcf_canada.blanc-02.2 | PE | 3 tasks | 3 tasks | +0 | conforms |
| paper.tcf_canada.blanc-02.2 | PO | 3 tasks | 3 tasks | +0 | conforms |
| paper.tcf_canada.blanc-03.3 | CO | 39 q | 39 q | +0 | conforms |
| paper.tcf_canada.blanc-03.3 | CE | 39 q | 39 q | +0 | conforms |
| paper.tcf_canada.blanc-03.3 | PE | 3 tasks | 3 tasks | +0 | conforms |
| paper.tcf_canada.blanc-03.3 | PO | 3 tasks | 3 tasks | +0 | conforms |
| paper.tcf_canada.blanc-04.4 | CO | 39 q | 39 q | +0 | conforms |
| paper.tcf_canada.blanc-04.4 | CE | 39 q | 39 q | +0 | conforms |
| paper.tcf_canada.blanc-04.4 | PE | 3 tasks | 3 tasks | +0 | conforms |
| paper.tcf_canada.blanc-04.4 | PO | 3 tasks | 3 tasks | +0 | conforms |
| paper.tcf_canada.blanc-05.5 | CO | 39 q | 39 q | +0 | conforms |
| paper.tcf_canada.blanc-05.5 | CE | 39 q | 39 q | +0 | conforms |
| paper.tcf_canada.blanc-05.5 | PE | 3 tasks | 3 tasks | +0 | conforms |
| paper.tcf_canada.blanc-05.5 | PO | 3 tasks | 3 tasks | +0 | conforms |
| paper.tef_canada.blanc-01.1 | CO | 40 q | 40 q | +0 | conforms |
| paper.tef_canada.blanc-01.1 | CE | 40 q | 40 q | +0 | conforms |
| paper.tef_canada.blanc-01.1 | PE | 2 tasks | 2 tasks | +0 | conforms |
| paper.tef_canada.blanc-01.1 | PO | 2 tasks | 2 tasks | +0 | conforms |
| paper.tef_canada.blanc-02.2 | CO | 40 q | 40 q | +0 | conforms |
| paper.tef_canada.blanc-02.2 | CE | 40 q | 40 q | +0 | conforms |
| paper.tef_canada.blanc-02.2 | PE | 2 tasks | 2 tasks | +0 | conforms |
| paper.tef_canada.blanc-02.2 | PO | 2 tasks | 2 tasks | +0 | conforms |
| paper.tef_canada.blanc-03.3 | CO | 40 q | 40 q | +0 | conforms |
| paper.tef_canada.blanc-03.3 | CE | 40 q | 40 q | +0 | conforms |
| paper.tef_canada.blanc-03.3 | PE | 2 tasks | 2 tasks | +0 | conforms |
| paper.tef_canada.blanc-03.3 | PO | 2 tasks | 2 tasks | +0 | conforms |
| paper.tef_canada.blanc-04.4 | CO | 40 q | 40 q | +0 | conforms |
| paper.tef_canada.blanc-04.4 | CE | 40 q | 40 q | +0 | conforms |
| paper.tef_canada.blanc-04.4 | PE | 2 tasks | 2 tasks | +0 | conforms |
| paper.tef_canada.blanc-04.4 | PO | 2 tasks | 2 tasks | +0 | conforms |
| paper.tef_canada.blanc-05.5 | CO | 40 q | 40 q | +0 | conforms |
| paper.tef_canada.blanc-05.5 | CE | 40 q | 40 q | +0 | conforms |
| paper.tef_canada.blanc-05.5 | PE | 2 tasks | 2 tasks | +0 | conforms |
| paper.tef_canada.blanc-05.5 | PO | 2 tasks | 2 tasks | +0 | conforms |

**Every one of the 60 rows has delta = 0.** No paper is short or over on any
skill's target count. Note on DELF PO: the blueprint describes "1 task, two
phases" but the schema models the two phases as two separate task rows
(`po_monologue` + `po_debate`), which is why the DELF PO "actual" is 2 tasks
against a target restated here as 2 — this is a modeling choice consistent
with `BLUEPRINT-delf-b2.md` §7's two-phase structure (monologue, then débat),
not a defect; the phase-2 task type is named `po_debate` rather than the more
generic `po_interaction`, which better matches the blueprint's own "Exercice
en interaction — débat" language.

### 2.4 Format-specific rules

**TEF — `playCount` and Section A prep.**

```sql
select t.id as task_id, t.variant, t.label as task_label,
       part->>'label' as part_label,
       coalesce((part->>'playCount')::int, 1) as play_count,
       (part->>'readWindowS')::int as read_window_s
from content_exam_tasks t,
     jsonb_array_elements(coalesce(t.parts, '[]'::jsonb)) part
where t.format = 'tef_canada' and t.skill = 'CO' and t.status = 'published'
order by t.variant, t.id, part_label;
```

Result (37 parts across the 5 papers, one row per document): `playCount = 1`
on every part in blocks A, B, C, D, F, G; `playCount = 2` on every block E
part (the interview) across all 5 papers — matches
`STANDARD-tef-canada.md` §2 "Block E... this is the only block permitted two
plays" exactly, with no exception.

**TEF — Section A prep (60s).**

```sql
select t.id as task_id, t.variant, t.task_type, t.timing_s, t.prep_s
from content_exam_tasks t
where t.format = 'tef_canada' and t.skill = 'PO' and t.status = 'published'
order by t.variant, t.id;
```

Result: `po_interaction` (EO Section A, "Obtenir de l'information") carries
`timing_s = 300` (5 min) and `prep_s = 60` on all 5 papers; `po_monologue` (EO
Section B, "Convaincre") carries `timing_s = 600` (10 min) and `prep_s = 120`
on all 5 papers. Section A's 60s prep matches `STANDARD-tef-canada.md` §6's
checklist exactly. **No findings.**

**TEF — Block C exactly 3 options, all other blocks exactly 4.**

```sql
select t.id as task_id, t.label as block_label,
       jsonb_array_length(item->'opts') as n_opts,
       count(*)::int as n_items_with_this_opt_count
from content_exam_tasks t,
     jsonb_array_elements(coalesce(t.parts,'[]'::jsonb)) part,
     jsonb_array_elements(coalesce(part->'items','[]'::jsonb)) item
where t.format = 'tef_canada' and t.skill = 'CO' and t.status = 'published'
group by t.id, t.label, jsonb_array_length(item->'opts')
order by t.id, n_opts;
```

Result: on all 5 papers, Section C (`co_mcq.003`) carries `n_opts = 3` on all 6
of its items and no other value; Sections A, B, D, E, F, G carry `n_opts = 4`
on every one of their items (4, 4, 2, 6, 1, 17 items respectively, matching
the A4/B4/C6/D2/E6/F1/G17 block-count checklist exactly) with zero exceptions
across all 5 papers x 7 blocks = 35 task rows checked. **No findings.**

**TEF — Section A carries four image briefs with `imageAlt`.**

```sql
select t.id as task_id,
       count(*) filter (where part->>'imageRef' is not null) as n_with_imageref,
       count(*) filter (where part->>'imageRef' is not null and (part->>'imageAlt' is null or part->>'imageAlt' = '')) as n_missing_imagealt
from content_exam_tasks t, jsonb_array_elements(coalesce(t.parts,'[]'::jsonb)) part
where t.format = 'tef_canada' and t.skill = 'CO' and t.status = 'published'
  and t.id like '%co_mcq.001%'
group by t.id
order by t.id;
```

Result: all 5 Section A tasks carry `n_with_imageref = 4` and
`n_missing_imagealt = 0` — every image-bearing part has a non-empty
`imageAlt`. Matches UDL-01 and `STANDARD-tef-canada.md`'s own handover
checklist. **No findings.**

**TCF — band distribution 3/6/10/10/7/3, strict position order, no shuffle.**

```sql
with pub as (
  select p.variant,
         sec->>'skill' as section_skill,
         task_ord,
         task_id
  from content_exam_papers p,
       jsonb_array_elements(p.sections) sec,
       lateral jsonb_array_elements_text(sec->'taskIds') with ordinality as tid(task_id, task_ord)
  where p.format = 'tcf_canada' and p.status = 'published' and sec->>'skill' in ('CO','CE')
)
select pub.variant, pub.section_skill, pub.task_ord, pub.task_id,
       part_ord, item_ord,
       item->>'band' as band
from pub
join content_exam_tasks t on t.id = pub.task_id
, lateral jsonb_array_elements(coalesce(t.parts,'[]'::jsonb)) with ordinality as pt(part, part_ord)
, lateral jsonb_array_elements(coalesce(part->'items','[]'::jsonb)) with ordinality as it(item, item_ord)
order by pub.variant, pub.section_skill, pub.task_ord, part_ord, item_ord;
```

390 rows (5 papers x 2 skills x 39 items). Aggregated per (variant, skill):
every one of the 10 (variant, skill) combinations produces the exact sequence
`a1,a1,a1,a2,a2,a2,a2,a2,a2,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,c1,c1,c1,c1,c1,c1,c1,c2,c2,c2`
— band counts `{a1:3, a2:6, b1:10, b2:10, c1:7, c2:3}` in strict position order
1..39, with **zero deviation** on any of the 10 combinations
(`blanc-01`..`blanc-05` x `CO`/`CE`). Matches `STANDARD-tcf-canada.md` §1's
target distribution table exactly. **No findings.**

**TCF — `playCount` always 1.**

```sql
select coalesce((part->>'playCount')::int,1) as play_count, count(*)::int as n
from content_exam_tasks t,
     jsonb_array_elements(coalesce(t.parts,'[]'::jsonb)) part
where t.format='tcf_canada' and t.skill='CO' and t.status='published'
group by 1;
```

Result: `{"play_count": 1, "n": 120}` — all 120 CO parts across the 5 papers
carry `playCount = 1`, no exceptions. **No findings.**

**TCF — PO tâche timings and prep.**

```sql
select t.id as task_id, t.variant, t.task_type, t.timing_s, t.prep_s
from content_exam_tasks t
where t.format = 'tcf_canada' and t.skill = 'PO' and t.status = 'published'
order by t.variant, t.id;
```

Result across all 5 papers: tâche 1 (`po_monologue.001`) `timing_s = 120`
(2 min), `prep_s = null`; tâche 2 (`po_interaction.001`) `timing_s = 330`
(5 min 30, i.e. the ~3.5 min interaction plus its own clock), `prep_s = 120`;
tâche 3 (`po_monologue.002`) `timing_s = 270` (4 min 30), `prep_s = null`.
Matches `STANDARD-tcf-canada.md` §6 exactly: only tâche 2 carries prep, at
120s; tâches 1 and 3 carry none. **No findings.**

**DELF — `band` constant `b2`; `points` reconcile to 9/9/7; `playCount` 2 for
exercises 1-2, 1 for exercise 3.**

```sql
with expanded as (
  select t.id as task_id, t.variant, t.skill,
         coalesce((part->>'playCount')::int,1) as part_playcount,
         item->>'band' as band,
         coalesce((item->>'points')::numeric,1) as points
  from content_exam_tasks t,
       jsonb_array_elements(coalesce(t.parts,'[]'::jsonb)) part,
       jsonb_array_elements(coalesce(part->'items','[]'::jsonb)) item
  where t.format = 'delf_b2' and t.status='published' and t.skill in ('CO','CE')
)
select task_id, variant, skill,
       count(*)::int as n_items,
       sum(points) as total_points,
       array_agg(distinct band) as bands,
       array_agg(distinct part_playcount) as playcounts
from expanded
group by task_id, variant, skill
order by variant, skill, task_id;
```

Result: 30 rows (5 papers x 2 skills x 3 exercises). On every one of the 30
rows: `bands = ["b2"]` (constant, never any other value); exercise 1
(`*.001`) and exercise 2 (`*.002`) each carry `n_items=7`, `total_points=9.0`,
`playcounts=[2]`; exercise 3 (`*.003`) carries `n_items=6`, `total_points=7.0`,
`playcounts=[1]`. **Every one of the 5 papers reconciles to exactly 9/9/7 on
both CO and CE, with `playCount` matching the exercise-1/2-vs-3 rule with zero
exceptions.** Matches `STANDARD-delf-b2.md` §3/§4 and
`BLUEPRINT-delf-b2.md` §4/§9's settled `points` decision exactly. **Verified
against the CURRENT format (sample 3) only** — the paper structure observed
here (3 exercises, 9/9/7, 100% MCQ, `playCount` 2/2/1) is precisely
`BLUEPRINT-delf-b2.md` §1's "new format" column, not the two-exercise,
mixed-answer-mode old format from samples 1 and 2. No paper in the database
matches the old-format shape.

### 2.5 Speech rate (secondary input, spot-verified)

`check-speech-rate.ts` could not be run in this environment — this worktree
(`.claude/worktrees/agent-a3ea5c455c1c9f780`) has no `node_modules` installed
under `ealch-admin`, and installing the full admin dependency tree is out of
this plan's scope (a Rule 4-adjacent judgment call: installing a large
dependency tree to run one optional secondary-input script is not a "fix a
blocker" action proportionate to a read-only audit plan). Per the plan's own
fallback for exactly this situation, the spot-check was done directly: pull
`parts[].text` and `parts[].durationS` for individual documents, count words
by whitespace split, and compute words-per-minute by hand.

```sql
select t.id as task_id, part->>'label' as part_label,
       (part->>'durationS')::int as duration_s,
       (part->>'playCount')::int as play_count,
       part->>'text' as full_text
from content_exam_tasks t, jsonb_array_elements(coalesce(t.parts,'[]'::jsonb)) part
where t.id = 'exam.tef_canada.blanc-01.co_mcq.005';
```

```sql
select t.id as task_id, part->>'label' as part_label,
       (part->>'durationS')::int as duration_s,
       part->>'text' as full_text
from content_exam_tasks t, jsonb_array_elements(coalesce(t.parts,'[]'::jsonb)) part
where t.id = 'exam.tef_canada.blanc-01.co_mcq.006';
```

```sql
select t.id as task_id, part->>'label' as part_label,
       (part->>'durationS')::int as duration_s,
       part->>'text' as full_text
from content_exam_tasks t, jsonb_array_elements(coalesce(t.parts,'[]'::jsonb)) part
where t.id = 'exam.tef_canada.blanc-01.co_mcq.004';
```

```sql
select t.id as task_id, part_ord, part->>'label' as part_label,
       (part->>'durationS')::int as duration_s,
       part->>'text' as full_text
from content_exam_tasks t,
     lateral jsonb_array_elements(coalesce(t.parts,'[]'::jsonb)) with ordinality as pt(part, part_ord)
where t.id = 'exam.tcf_canada.blanc-01.co_mcq.006'
order by part_ord;
```

```sql
select t.id as task_id, part_ord, part->>'label' as part_label,
       (part->>'durationS')::int as duration_s,
       (part->>'playCount')::int as play_count,
       part->>'text' as full_text
from content_exam_tasks t,
     lateral jsonb_array_elements(coalesce(t.parts,'[]'::jsonb)) with ordinality as pt(part, part_ord)
where t.id = 'exam.delf_b2.blanc-01.co_mcq.001'
order by part_ord;
```

Spot-check results (`blanc-01` only; word counts by whitespace split, which
includes 1-3 speaker-tag tokens like `LA NARRATRICE :` per document and so
mildly over-counts true spoken words — noted, not corrected, since it does not
change the qualitative direction of any result below):

| Document | Band target (STANDARD-common §2) | Duration | Words (approx.) | Measured wpm |
|---|---|---|---|---|
| TEF Section D (`co_mcq.004`), "le covoiturage domicile-travail" | B2, ~160 wpm | 55s | 155 | ~169 |
| TEF Section E (`co_mcq.005`), interview, "reprendre ses études" | B1→C1 rising, ceiling ~175 wpm at C1 | 85s | 272 | ~192 |
| TEF Section F (`co_mcq.006`), reportage, "une commune qui retient" | B2–C1, ceiling ~175 wpm at C1 | 123s | 394 | ~192 |
| TCF C2 document (position 37-39), "la notion de progrès" | C2, no ceiling ("natural, unmodified") | 127s | 432 | ~204 |
| DELF exercise 1 (`co_mcq.001`), "la semaine de quatre jours" | B2 broadcast, ~165 wpm | 192s | 532 | ~166 |

**Reading of this spot-check:** DELF hit its declared 165 wpm target almost
exactly (166 wpm measured). The TCF C2 document has no stated ceiling in
STANDARD-common's envelope table ("natural, unmodified rate"), so 204 wpm is
not itself a violation. **The two TEF spot-checks (Section E interview,
Section F reportage) both measured ~192 wpm, which is above
`STANDARD-common.md` §2's stated C1 ceiling of ~175 wpm** — the top band
either document's content is meant to reach — and TEF Section D (nominally
B2, ~160 wpm target) measured ~169 wpm, a smaller but same-direction overshoot.
This is a 3-of-3 pattern on the one TEF paper spot-checked, all running hot
versus the blueprint's own speech-rate table, and it is the opposite bias from
what would make an item easier than intended — a `warning`, not a scoring
defect, since the words-per-minute levers described in STANDARD-common §2 are
about difficulty calibration and candidate fairness (an audio document
rendered faster than its band implies is *harder* than its authored band, not
mis-scored). Recorded as EXAM-02 below. **This is a single-paper, 4-document
spot-check, not an exhaustive per-paper measurement** — scope estimate in the
finding reflects that.

## Findings from section 2

### EXAM-01: DELF PO models "1 task, two phases" as two task rows (`po_monologue` + `po_debate`)
- **Checked:** DELF PO section task count (§2.3) against `BLUEPRINT-delf-b2.md`
  §7's "1 task, two phases" language.
- **Finding:** Not a defect. The schema represents the monologue and débat
  phases as two separate `content_exam_tasks` rows rather than one task with
  an internal phase split. This is a legitimate, arguably clearer modeling
  choice (the phase-2 task type is named `po_debate`, matching the blueprint's
  own "Exercice en interaction — débat" language more precisely than a generic
  `po_interaction` would).
- **Severity:** `info` — documented here so Plan 05 does not mistake the "2
  tasks" figure in §2.3's diff table for a miscount against a "1 task" target.
- **Evidence:** §2.3 diff table; `BLUEPRINT-delf-b2.md` §7.
- **Scope estimate or deferral:** None needed; no follow-up work implied.

### EXAM-02: TEF blanc-01's Section D/E/F audio spot-checks run hot against STANDARD-common's speech-rate envelope
- **Checked:** Measured words-per-minute on 4 spot-checked CO documents
  (TEF Sections D/E/F on `blanc-01`, one TCF C2 document, one DELF exercise)
  against `STANDARD-common.md` §2's per-band wpm targets, because
  `check-speech-rate.ts` could not be run in this environment (§2.5).
- **Finding:** TEF Section D (B2 target ~160 wpm) measured ~169 wpm; TEF
  Section E interview (rising to a C1 ceiling of ~175 wpm) measured ~192 wpm;
  TEF Section F reportage (B2–C1, same ~175 wpm ceiling) measured ~192 wpm.
  All three TEF documents ran faster than their band's stated ceiling. The
  DELF and TCF-C2 spot-checks did not show the same pattern (DELF landed
  almost exactly on target; TCF C2 has no stated ceiling to exceed).
- **Severity:** `warning` — a candidate-fairness and difficulty-calibration
  issue (audio rendered faster than its authored band makes the item harder
  than intended), not a structural/countable defect, and based on a
  single-paper 3-of-7-CO-block spot-check rather than an exhaustive
  measurement across all 15 papers.
- **Evidence:** §2.5 table above (raw `durationS` and `text` pasted from live
  rows, word counts computed by hand, not by the unreviewed
  `check-speech-rate.ts` heuristic).
- **Scope estimate or deferral:** Before treating this as confirmed, run
  `check-speech-rate.ts` properly (from a checkout with `ealch-admin`'s
  dependencies installed) across all 5 TEF papers' CO blocks D/E/F, and decide
  whether "hot" documents should be re-rendered at a slower TTS rate or
  whether the current rate is an acceptable authoring choice given the blocks'
  already-generous `timing_s` budgets. Explicitly NOT built or corrected in
  this phase — this is a discovery-only audit.

