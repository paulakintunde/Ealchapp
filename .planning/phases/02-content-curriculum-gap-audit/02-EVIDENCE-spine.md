---
phase: 02-content-curriculum-gap-audit
plan: 02
evidence_for: CONTENT-01
surface: curriculum spine (SONS/A1/A2, 75 units)
read_at: 2026-09-20T03:23:18Z
declared_units: 75
live_units: 75
---

# Evidence — Curriculum Spine Audit (D-01, D-02)

Severity taxonomy and finding-id scheme per `GAPS.md`. Local ids `SPINE-nn` are
mapped to `GAP-nn` by Plan 05.

## Method

Direct SELECT against `ogbothupjcivwruesgsu`, plus a direct read of
`ealch-admin/scripts/author-full-curriculum-spine.ts` and
`ealch-admin/scripts/update-spine.ts`. No `corpus:probe`, no `content:parity`,
no spine-drift test output is cited as evidence (D-03). All queries were run
via a throwaway, SELECT-only Node script in the session scratchpad directory
(never committed, never placed under `ealch-admin/scripts/`), connecting via
`DATABASE_URL` from `ealch-admin/.env`, per T-02-01. No `insert`/`update`/
`delete`/`begin` statement was ever issued.

## 1. Per-id structural verification

### 1.1 Declared id set (source of truth)

Extracted from `ealch-admin/scripts/author-full-curriculum-spine.ts`:
```bash
grep -oE "^ +id: '[^']+'" ealch-admin/scripts/author-full-curriculum-spine.ts \
  | sed -E "s/^ +id: '//; s/'$//" | sort > "$TMPDIR/spine-declared.txt"
wc -l < "$TMPDIR/spine-declared.txt"   # 75
```
75 ids: 10 sons, 30 a1, 35 a2 — `sons.01`..`sons.10`, `a1.01`..`a1.30`,
`a2.01`..`a2.35` (a full alpha sort of the id column; the underlying SONS/A1/A2
arrays interleave old and new ids at non-sequential array positions, e.g. A1's
array order is `a1.01, a1.02, a1.27, a1.28, a1.03, …`, but the sorted id set is
exactly the 75 above).

### 1.2 Live id set

```sql
select body->>'id'                                                  as unit_id,
       slug,
       status,
       level,
       (body->>'seq')::int                                          as seq,
       body->>'title'                                               as title,
       body->>'sub'                                                 as sub,
       coalesce(jsonb_array_length(body->'lessonIds'), 0)           as lesson_count,
       body->'lessonIds'                                            as lesson_ids
from content_units
where kind = 'curriculum_unit'
order by split_part(body->>'id', '.', 1), (body->>'seq')::int;
```
75 rows returned, all `status = 'published'`. Full id / seq / lesson_count
columns (compact table — this IS the evidence, not a summary):

| unit_id | seq | track | lesson_count | lesson_ids |
|---|---|---|---|---|
| a1.01 | 1 | a1 | 1 | a1.01.l1 |
| a1.02 | 2 | a1 | 1 | a1.02.l1 |
| a1.27 | 3 | a1 | 1 | a1.27.l1 |
| a1.28 | 4 | a1 | 1 | a1.28.l1 |
| a1.03 | 5 | a1 | 1 | a1.03.l1 |
| a1.04 | 6 | a1 | 1 | a1.04.l1 |
| a1.11 | 7 | a1 | 1 | a1.11.l1 |
| a1.29 | 8 | a1 | 1 | a1.29.l1 |
| a1.05 | 9 | a1 | 1 | a1.05.l1 |
| a1.06 | 10 | a1 | 1 | a1.06.l1 |
| a1.07 | 11 | a1 | 1 | a1.07.l1 |
| a1.08 | 12 | a1 | 1 | a1.08.l1 |
| a1.09 | 13 | a1 | 1 | a1.09.l1 |
| a1.10 | 14 | a1 | 1 | a1.10.l1 |
| a1.12 | 15 | a1 | 1 | a1.12.l1 |
| a1.13 | 16 | a1 | 1 | a1.13.l1 |
| a1.14 | 17 | a1 | 1 | a1.14.l1 |
| a1.16 | 18 | a1 | 1 | a1.16.l1 |
| a1.15 | 19 | a1 | 1 | a1.15.l1 |
| a1.17 | 20 | a1 | 1 | a1.17.l1 |
| a1.18 | 21 | a1 | 1 | a1.18.l1 |
| a1.19 | 22 | a1 | 1 | a1.19.l1 |
| a1.20 | 23 | a1 | 1 | a1.20.l1 |
| a1.21 | 24 | a1 | 1 | a1.21.l1 |
| a1.22 | 25 | a1 | 1 | a1.22.l1 |
| a1.23 | 26 | a1 | 1 | a1.23.l1 |
| a1.24 | 27 | a1 | 1 | a1.24.l1 |
| a1.25 | 28 | a1 | 1 | a1.25.l1 |
| a1.26 | 29 | a1 | 1 | a1.26.l1 |
| a1.30 | 30 | a1 | 2 | a1.30.l1, a1.30.l2 |
| a2.01 | 1 | a2 | 1 | a2.01.l1 |
| a2.09 | 2 | a2 | 1 | a2.09.l1 |
| a2.10 | 3 | a2 | 2 | a2.10.l1, a2.10.l2 |
| a2.11 | 4 | a2 | 1 | a2.11.l1 |
| a2.02 | 5 | a2 | 1 | a2.02.l1 |
| a2.12 | 6 | a2 | 1 | a2.12.l1 |
| a2.13 | 7 | a2 | 1 | a2.13.l1 |
| a2.14 | 8 | a2 | 1 | a2.14.l1 |
| a2.15 | 9 | a2 | 1 | a2.15.l1 |
| a2.03 | 10 | a2 | 1 | a2.03.l1 |
| a2.16 | 11 | a2 | 1 | a2.16.l1 |
| a2.17 | 12 | a2 | 1 | a2.17.l1 |
| a2.04 | 13 | a2 | 1 | a2.04.l1 |
| a2.18 | 14 | a2 | 1 | a2.18.l1 |
| a2.19 | 15 | a2 | 1 | a2.19.l1 |
| a2.05 | 16 | a2 | 1 | a2.05.l1 |
| a2.20 | 17 | a2 | 1 | a2.20.l1 |
| a2.21 | 18 | a2 | 1 | a2.21.l1 |
| a2.22 | 19 | a2 | 1 | a2.22.l1 |
| a2.23 | 20 | a2 | 1 | a2.23.l1 |
| a2.06 | 21 | a2 | 1 | a2.06.l1 |
| a2.24 | 22 | a2 | 1 | a2.24.l1 |
| a2.25 | 23 | a2 | 1 | a2.25.l1 |
| a2.07 | 24 | a2 | 1 | a2.07.l1 |
| a2.26 | 25 | a2 | 1 | a2.26.l1 |
| a2.27 | 26 | a2 | 1 | a2.27.l1 |
| a2.28 | 27 | a2 | 1 | a2.28.l1 |
| a2.29 | 28 | a2 | 1 | a2.29.l1 |
| a2.30 | 29 | a2 | 1 | a2.30.l1 |
| a2.31 | 30 | a2 | 1 | a2.31.l1 |
| a2.32 | 31 | a2 | 1 | a2.32.l1 |
| a2.08 | 32 | a2 | 1 | a2.08.l1 |
| a2.33 | 33 | a2 | 1 | a2.33.l1 |
| a2.34 | 34 | a2 | 1 | a2.34.l1 |
| a2.35 | 35 | a2 | 2 | a2.35.l1, a2.35.l2 |
| sons.01 | 1 | sons | 1 | sons.01.l1 |
| sons.02 | 2 | sons | 1 | sons.02.l1 |
| sons.03 | 3 | sons | 1 | sons.03.l1 |
| sons.04 | 4 | sons | 1 | sons.04.l1 |
| sons.05 | 5 | sons | 1 | sons.05.l1 |
| sons.06 | 6 | sons | 1 | sons.06.l1 |
| sons.10 | 7 | sons | 1 | sons.10.l1 |
| sons.07 | 8 | sons | 1 | sons.07.l1 |
| sons.08 | 9 | sons | 1 | sons.08.l1 |
| sons.09 | 10 | sons | 1 | sons.09.l1 |

Per-track row counts: sons = 10, a1 = 30, a2 = 35. Total = 75.

### 1.3 Diff: declared but missing

Computed by diffing the sorted 75-id set from 1.1 against the 75 `unit_id`
values in 1.2 (`declared.filter(id => !liveSet.has(id))`).

None — all 75 declared ids resolve to a live row.

### 1.4 Diff: live but undeclared

Same diff, inverse direction (`live.filter(id => !declaredSet.has(id))`).

None.

### 1.5 Diff: seq disagreement and per-track contiguity

Each declared id's `seq` (parsed directly from the `SONS`/`A1`/`A2` array
literals in `author-full-curriculum-spine.ts`) was compared against the live
`seq` from 1.2's query, id by id.

None — all 75 ids' DB `seq` equals the source-declared `seq`.

Per-track contiguity, computed from the same 75 live rows:
- `sons`: seqs sorted = `1,2,3,4,5,6,7,8,9,10` — matches `1..10` exactly.
- `a1`: seqs sorted = `1..30` — matches `1..30` exactly.
- `a2`: seqs sorted = `1..35` — matches `1..35` exactly.

None — sons 1..10, a1 1..30, a2 1..35 all contiguous with no duplicates.

### 1.6 lessonIds: empty and dangling

Empty check: every row in 1.2's `lesson_count` column is >= 1 (two units,
`a1.30` and `a2.35`, carry 2; every other unit carries exactly 1). No unit has
`lesson_count = 0`.

Dangling check:
```sql
with claimed as (
  select u.body->>'id' as unit_id,
         jsonb_array_elements_text(u.body->'lessonIds') as lesson_id
  from content_units u
  where u.kind = 'curriculum_unit'
)
select c.unit_id, c.lesson_id, l.status
from claimed c
left join content_units l
  on l.kind = 'lesson' and l.body->>'id' = c.lesson_id
where l.body is null
order by 1, 2;
```
0 rows returned.

None — every unit carries >=1 lessonId and every claimed lessonId resolves to
a lesson row.

## Findings from section 1

No findings. All 75 declared unit ids resolve, seq is contiguous per track,
and no lessonId dangles.

## 2. Pedagogical-field coherence (D-01)

### 2.0 The two-owner split (not a gap)

`update-spine.ts` owns `canDo`/`themes`/`prereqUnitIds` for exactly 43 of the
75 units — the pre-2026-08-24 curriculum, listed in its `SPINE` map
(`ealch-admin/scripts/update-spine.ts:55-214`). The other 32 units (`sons.10`,
`a1.27`/`a1.28`/`a1.29`/`a1.30`, and the 27 `a2.09`+ units) had those same
fields authored inline in `author-full-curriculum-spine.ts`'s `SONS`/`A1`/`A2`
arrays at unit-creation time (`ealch-admin/scripts/author-full-curriculum-spine.ts:112-878`).
`update-spine.ts`'s own `unpatched` handling
(`ealch-admin/scripts/update-spine.ts:248-263`) explicitly REPORTS units
outside its 43-unit map rather than failing, and its comment states this is
"permanent, intended state," not an incomplete migration — the two scripts'
outputs are merged into one DB row per unit, and the live row (queried below)
is the thing this section judges, not either script's map in isolation.

### 2.1 canDo presence and quality

```sql
select body->>'id'                                              as unit_id,
       body->>'canDo'                                           as can_do,
       length(coalesce(body->>'canDo', ''))                     as can_do_len,
       body->'themes'                                           as themes,
       coalesce(jsonb_array_length(body->'themes'), 0)          as n_themes,
       body->'prereqUnitIds'                                    as prereqs,
       coalesce(jsonb_array_length(body->'prereqUnitIds'), 0)   as n_prereqs
from content_units
where kind = 'curriculum_unit'
order by split_part(body->>'id', '.', 1), (body->>'seq')::int;
```
75 rows returned. Full `unit_id` / `can_do_len` columns (every one of the 75
ids, per the acceptance gate):

| unit_id | can_do_len | unit_id | can_do_len | unit_id | can_do_len |
|---|---|---|---|---|---|
| a1.01 | 75 | a1.19 | 74 | a2.11 | 75 |
| a1.02 | 80 | a1.20 | 58 | a2.02 | 85 |
| a1.27 | 82 | a1.21 | 66 | a2.12 | 70 |
| a1.28 | 71 | a1.22 | 83 | a2.13 | 71 |
| a1.03 | 57 | a1.23 | 53 | a2.14 | 77 |
| a1.04 | 49 | a1.24 | 78 | a2.15 | 70 |
| a1.11 | 90 | a1.25 | 54 | a2.03 | 70 |
| a1.29 | 74 | a1.26 | 69 | a2.16 | 78 |
| a1.05 | 86 | a1.30 | 160 | a2.17 | 73 |
| a1.06 | 68 | a2.01 | 79 | a2.04 | 67 |
| a1.07 | 47 | a2.09 | 86 | a2.18 | 111 |
| a1.08 | 53 | a2.10 | 127 | a2.19 | 55 |
| a1.09 | 35 | a2.05 | 78 | sons.01 | 74 |
| a1.10 | 49 | a2.20 | 83 | sons.02 | 72 |
| a1.12 | 55 | a2.21 | 80 | sons.03 | 54 |
| a1.13 | 81 | a2.22 | 62 | sons.04 | 74 |
| a1.14 | 72 | a2.23 | 72 | sons.05 | 56 |
| a1.16 | 83 | a2.06 | 75 | sons.06 | 71 |
| a1.15 | 45 | a2.24 | 76 | sons.10 | 120 |
| a1.17 | 62 | a2.25 | 65 | sons.07 | 82 |
| a1.18 | 53 | a2.07 | 73 | sons.08 | 85 |
|  |  | a2.26 | 59 | sons.09 | 114 |
|  |  | a2.27 | 58 |  |  |
|  |  | a2.28 | 75 |  |  |
|  |  | a2.29 | 57 |  |  |
|  |  | a2.30 | 58 |  |  |
|  |  | a2.31 | 64 |  |  |
|  |  | a2.32 | 67 |  |  |
|  |  | a2.08 | 61 |  |  |
|  |  | a2.33 | 77 |  |  |
|  |  | a2.34 | 63 |  |  |
|  |  | a2.35 | 143 |  |  |

Shortest is `a1.09` at 35 chars ("Can name the months and give a date");
longest is `a1.30` at 160 chars (the A1 bilan capstone). Every one is >= 35
chars, well over the 20-char floor.

Rubric (b) check, applied programmatically to all 75 `can_do` values: none is
under 20 characters; all 75 begin with `Can ` (no `Peut `/equivalent needed);
none is byte-identical to its own `title`/`sub`; none contains a placeholder
marker (`TODO`, `TBD`, `FIXME`, `SOON`, `draft`, `placeholder`, `lorem`,
case-insensitive).

Duplicate-canDo check:
```sql
select body->>'canDo' as can_do, count(*)::int as n,
       string_agg(body->>'id', ', ' order by body->>'id') as unit_ids
from content_units
where kind = 'curriculum_unit'
group by 1
having count(*) > 1
order by 2 desc;
```
0 rows returned — no two units share a canDo string.

**Verdict:** all 75 units carry a non-empty, non-placeholder, non-duplicate
canDo that reads as a genuine learner-facing capability statement.

### 2.2 themes resolution

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
2 rows returned:

| unit_id | theme_slug |
|---|---|
| a1.01 | politesse |
| a2.22 | routine |

A direct spot-check against `content_themes` confirms both are phantom slugs,
each with a near-miss real slug sitting right next to it:
```sql
select slug, title, domain from content_themes
where slug in ('salutations','politesse','routine','routines') order by slug;
```
Result: `routines` (title "Les routines", domain "vie-quotidienne") and
`salutations` (title "Les salutations", domain "relations") exist;
`politesse` and `routine` do not — `routine` is the singular of the real
plural slug `routines` (already correctly used by `a1.25`'s `themes:
['routines']`), and `politesse` has no plural/singular sibling at all in
`content_themes`.

See `SPINE-01` below.

### 2.3 prereqUnitIds resolution and direction

```sql
with claimed as (
  select u.body->>'id' as unit_id,
         jsonb_array_elements_text(u.body->'prereqUnitIds') as prereq_id
  from content_units u
  where u.kind = 'curriculum_unit'
)
select c.unit_id, c.prereq_id
from claimed c
left join content_units p
  on p.kind = 'curriculum_unit' and p.body->>'id' = c.prereq_id
where p.body is null
order by 1, 2;
```
0 rows returned — every `prereqUnitIds` entry across all 75 units resolves to
one of the 75 live unit ids.

Forward/self-prereq direction check, computed from section 1's `seq` data
(join every unit's `prereqUnitIds` against its own and the prereq's
`(track, seq)`): 0 violations. No prereq points at itself, and no
same-track prereq has a `seq` greater than or equal to its dependent unit's
`seq`. (Cross-track prereqs, e.g. an `a2` unit citing an `a1` prereq, are
legitimate by design — A2 grammar assumes A1 grammar — and are not seq-checked
against each other since the two tracks' `seq` numbering is independent.)

Absence check (per the "legitimately absent, not a gap" rule): 5 non-first
units carry NO `prereqUnitIds` at all: `a1.02` (seq 2), `a1.03` (seq 5),
`a1.05` (seq 9), `a1.10` (seq 14), `a1.21` (seq 24). All 5 are either
foundational grammar units that no earlier unit genuinely gates (noun gender,
subject pronouns, prepositions of place) or lexical-field units that already
carry a `themes` entry and stand alone pedagogically (numbers 1-20, seasons
and weather). None of them is a lexical-field unit missing its `themes` entry
— `a1.02` and `a1.10` both carry `themes`, and `a1.03`/`a1.05`/`a1.21` are
grammar, not vocabulary. See `SPINE-02` below (recorded as `info` per the
plan's own disposition for this shape).

## Findings from section 2

### SPINE-01: Two phantom theme slugs on live units

**Checked:** Every `themes` slug on all 75 curriculum units, resolved against
`content_themes.slug` (query in §2.2).
**Finding:** `a1.01` declares `themes: ['salutations', 'politesse']` and
`a2.22` declares `themes: ['routine']`. Neither `politesse` nor `routine`
exists as a row in `content_themes`. `routine` is almost certainly a
singular/plural slip against the real slug `routines` (already used correctly
by `a1.25`). `politesse` has no real slug at all to fall back to. This is the
same phantom-theme-slug shape already fixed once for the A2 situations band
(`ealch-admin/scripts/author-full-curriculum-spine.ts:754-762`'s own comment
documents that 2026-08-15 incident), recurring here on two different units.
**Severity:** warning — a phantom theme slug does not corrupt teaching, but it
silently breaks any feature that resolves `themes` against `content_themes`
for practice-set generation, theme browsing, or content-item counts for these
two units, exactly as the A2 situations band incident did.
**Evidence:** query + result pasted in §2.2 above.
**Scope estimate:** a one-line data fix per unit — change `a2.22`'s
`'routine'` to `'routines'`, and either add a `politesse` row to
`content_themes` or drop/replace it on `a1.01`. Not a re-authoring effort; a
follow-up content-data patch, not a new lesson build.

### SPINE-02: Five non-first units carry no prerequisite at all

**Checked:** Every unit's `prereqUnitIds` for emptiness, cross-referenced
against its track position (`seq`) and whether it teaches a lexical field
(query + reasoning in §2.3).
**Finding:** `a1.02`, `a1.03`, `a1.05`, `a1.10`, `a1.21` are non-first units in
the `a1` track with zero prerequisites. Per this plan's own rubric this is
only a finding (not silently legitimate) when a non-first unit has no prereq
at all — recorded here for completeness, with the reasoning that none of the
five is a lexical-field unit missing a `themes` entry, and each teaches
foundational, non-gated material (noun gender, subject pronouns, prepositions
of place) or a self-contained lexical field already carrying its own `themes`
(numbers, weather).
**Severity:** info — this reflects intentional curriculum design (multiple
independent entry points into A1 grammar), not a defect; recorded per D-06/D-01
so it is not silently dropped, not because it needs a follow-up fix.
**Evidence:** derived from §1.2's seq data plus §2.1's `n_prereqs`/`themes`
columns.
**Scope estimate / Deferral:** No follow-up needed — this is documented,
intentional structure, not a build item.

## 3. Targeted check: PE@b2 remediation slot (D-02)

Project memory (`ealch-b2-01-stub-removed`, dated 2026-09-07) records that
after the `b2.01` stub was removed (bringing spine parity to 78/78 clean), the
remaining gap is an empty PE@b2 remediation slot: a candidate who misses a
`pe_*` exam task at b2 has no prep lesson for `dueExamSkills()` to route them
to. Per D-03 that memory is a lead, not evidence — re-measured below.

Supply query (lessons at level b2, by skill):
```sql
select body->>'id'      as lesson_id,
       body->>'skill'   as skill,
       level,
       status,
       title
from content_units
where kind = 'lesson'
  and (level = 'b2' or body->>'level' = 'b2')
order by body->>'skill' nulls last, body->>'id';
```
0 rows returned. There is no lesson at level `b2` anywhere in `content_units`
— not just no `skill = 'PE'` lesson, no b2 lesson of any kind.

Whole-corpus context query:
```sql
select coalesce(body->>'skill', '(none)') as skill,
       level,
       count(*)::int as lessons
from content_units
where kind = 'lesson'
group by 1, 2
order by 2, 1;
```
Result:

| skill | level | lessons |
|---|---|---|
| (none) | sons | 10 |
| (none) | a1 | 31 |
| (none) | a2 | 30 |
| CO | a2 | 1 |
| PE | a2 | 3 |
| PO | a2 | 3 |

All 78 lessons in the corpus are at level `sons`/`a1`/`a2`. Zero lessons exist
at `b1`, `b2`, `c1` or `c2` — the entire lesson corpus stops at A2, which is
exactly the milestone's own frozen content scope (per `PROJECT.md`: "no new
curriculum levels this milestone"). The b2 exam pack was authored and
published without any matching b2 teaching content ever being in scope.

Demand query (published exam tasks, all skills/levels):
```sql
select skill, level, task_type, status, count(*)::int as tasks
from content_exam_tasks
where status = 'published'
group by 1, 2, 3, 4
order by 1, 2, 3;
```
Result (20 rows; b2 rows only, shown in full since that is what this check is
about):

| skill | level | task_type | tasks |
|---|---|---|---|
| CO | b2 | co_mcq | 39 |
| CE | b2 | ce_mcq | 30 |
| PO | b2 | po_monologue | 15 |
| PO | b2 | po_debate | 5 |
| PE | b2 | pe_short | 10 |
| PE | b2 | pe_essay | 5 |

Published `PE` tasks at b2 = 10 + 5 = **15** — matches the 2026-09-07 memory's
figure exactly.

Routing code, `dueExamSkills()`, `ealch-v2/src/store/progress.logic.ts:1387-1397`:
```typescript
export function dueExamSkills(results: ExamResult[], lessons: Lesson[]): DueExamSkill[] {
  const seen = new Map<string, DueExamSkill>();
  for (const r of results) {
    if (!OPEN_EXAM_TASK_TYPES.has(r.taskType) || r.passed) continue;
    const key = `${r.format}::${r.skill}::${r.band}`;
    if (seen.has(key)) continue;
    const lesson = lessons.find((l) => l.skill === r.skill && l.level === r.band);
    seen.set(key, { format: r.format, skill: r.skill, band: r.band, prepLessonId: lesson?.id ?? null });
  }
  return [...seen.values()];
}
```
Line `ealch-v2/src/store/progress.logic.ts:1393` is the join: for any missed
OPEN-type result (`po_*`/`pe_*`, per `OPEN_EXAM_TASK_TYPES` at line 1336) at
band `b2`, it searches `lessons` for one with `skill === 'PE'` (or `'PO'`) AND
`level === 'b2'`. Since §3's supply query returns zero rows for level `b2`,
`lesson` is always `undefined` and `prepLessonId` is always `null` for any b2
PE or PO miss. The function's own doc comment (lines 1370-1377) states
callers "MUST treat null as a real problem, not a value to silently drop."

### SPINE-03: PE@b2 remediation slot is empty

**Confirmed-still-open** — re-measured 2026-09-20 against current data, not a
re-discovery. Cites both the 2026-09-07 memory (`ealch-b2-01-stub-removed`)
and the fresh queries above.
**Severity:** warning (it degrades exam remediation for a candidate who fails
a b2 PE task; it does not teach anything incorrect, and no b2 content is in
this milestone's scope per PROJECT.md).
**Demand:** 15 published PE tasks at b2 (10 `pe_short` + 5 `pe_essay`).
**Supply:** 0 lessons at level b2 carrying `skill: 'PE'` (in fact 0 lessons at
level b2 at all).
**Scope estimate:** one prep lesson at b2 carrying `skill: 'PE'` — out of
scope for this milestone's content freeze (A1/A2/exams only, per PROJECT.md),
so this is recorded as a named, deferred gap rather than a build item to
schedule now.

### 3.1 Other b2-level supply gaps

The same Step A/B comparison surfaces one other published, OPEN-type exam
skill at b2 with zero prep-lesson supply: `PO`.

| skill | b2 published tasks | b2 lessons w/ that skill | `dueExamSkills()` reachable? |
|---|---|---|---|
| PE | 15 (10 `pe_short` + 5 `pe_essay`) | 0 | yes — routes via `Lesson.skill`/`level` join, `prepLessonId` always null |
| PO | 20 (15 `po_monologue` + 5 `po_debate`) | 0 | yes — same join, same null result |
| CO | 39 (`co_mcq`) | 0 | **no** — `co_mcq` is a `CLOSED_TASK_TYPE` (`ealch-v2/src/content/schema.ts:2156`); a missed CO task decomposes into item-level SRS review attempts (`decomposeExamMiss`), it never reaches `dueExamSkills()`, so a missing b2 CO lesson is not a remediation-routing gap in this sense |
| CE | 30 (`ce_mcq`) | 0 | **no** — same reasoning, `ce_mcq` is also `CLOSED_TASK_TYPE` |

### SPINE-04: PO@b2 remediation slot is also empty

**Checked:** Same supply/demand comparison as SPINE-03, applied to skill `PO`
instead of `PE`.
**Finding:** 20 published PO tasks exist at b2 (15 `po_monologue` + 5
`po_debate`, both `OPEN_TASK_TYPES` per `ealch-v2/src/content/schema.ts:2157`),
and 0 lessons at level b2 carry `skill: 'PO'`. By the same `dueExamSkills()`
join quoted above, any missed b2 PO task also resolves `prepLessonId: null`
unconditionally. This exact pairing (PO@b2, not just PE@b2) is not named in
the 2026-09-07 memory, which only flagged PE — this is new-to-tracking, found
by this fresh measurement rather than by the pre-existing lead.
**Severity:** warning — same reasoning as SPINE-03 (degrades remediation, does
not teach incorrectly, out of this milestone's content-freeze scope).
**Scope estimate:** one prep lesson at b2 carrying `skill: 'PO'` — same
deferred-by-milestone-scope treatment as SPINE-03; the two could reasonably
be built together as a single b2-remediation follow-up phase rather than two
separate ones.

CO@b2 and CE@b2 are explicitly NOT findings under this section: both task
types are `CLOSED_TASK_TYPES`, whose misses decompose into item-level SRS
review (`decomposeExamMiss`, `ealch-v2/src/content/schema.ts` near
`CLOSED_TASK_TYPES`/`OPEN_TASK_TYPES` at lines 2154-2158) rather than being
routed through `dueExamSkills()`'s `Lesson.skill` join — a missing b2 lesson
for CO/CE is therefore not a broken remediation path the way PE/PO are.
