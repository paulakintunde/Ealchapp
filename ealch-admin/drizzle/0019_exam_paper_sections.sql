-- Exam pack, phase E1: a paper becomes four épreuves, and a task may carry
-- several stimuli.
--
-- Three changes, in dependency order:
--
--   1. content_exam_tasks gains `label` (what the candidate is told the task is
--      called: 'Section A', 'Tâche 2') and `parts` (the several-stimuli shape).
--      A TEF listening épreuve is forty questions across roughly thirty
--      separate recordings, each with its own audio, play count and reading
--      window. Flattening those into the existing `items` array loses the only
--      structure that makes it a listening test: which audio you are allowed to
--      hear, and when. A task carries `items` or `parts`, never both, enforced
--      app-side by validateExamTask.
--
--   2. content_exam_series becomes content_exam_papers, series_no becomes
--      paper_no, and the flat task_ids column becomes a `sections` array.
--      Two separate blockers made the old shape unusable: the id space capped
--      the paper number at 5 and the Examiner is built for 20, and nothing
--      grouped a paper's tasks into the four épreuves a real sitting has. The
--      four-section rule is enforced app-side (validateExamPaper) rather than
--      by a column check, because it is a rule about the shape of the whole
--      array — exactly four entries, skills ordered CO, CE, PE, PO — which no
--      DB constraint can express.
--
--   3. The one live row is migrated, not recreated.
--
-- ON THE RENAME BEING SAFE. This drops a column and rewrites primary keys,
-- which would normally be reckless. It is safe here for a reason that will not
-- be true again: exam content reaches the app only at status 'published', and
-- the only two exam rows that have ever existed are 'in_review'. No published
-- snapshot, no cached install and no logged exam result anywhere carries a
-- `series.*` id. This is the last moment that is true.
--
-- ON 'PE' NOT 'EE'. The third épreuve is expression écrite, abbreviated EE on
-- every board's paper, and its exam_skill value is 'PE' (production écrite).
-- The two vocabularies cross over exactly here.

-- ── 1. Tasks: label + parts ──────────────────────────────────────────────
ALTER TABLE "content_exam_tasks" ADD COLUMN "label" text;--> statement-breakpoint
ALTER TABLE "content_exam_tasks" ADD COLUMN "parts" jsonb;--> statement-breakpoint

-- ── 2. Series → papers ───────────────────────────────────────────────────
ALTER TABLE "content_exam_series" RENAME TO "content_exam_papers";--> statement-breakpoint
ALTER TABLE "content_exam_papers" RENAME COLUMN "series_no" TO "paper_no";--> statement-breakpoint
ALTER INDEX "exam_series_format_variant_idx" RENAME TO "exam_papers_format_variant_idx";--> statement-breakpoint
ALTER TABLE "content_exam_papers" ADD COLUMN "sections" jsonb DEFAULT '[]'::jsonb NOT NULL;--> statement-breakpoint

-- ── 3. Backfill: group each paper's tasks into épreuves by their own skill ──
-- Generic rather than hardcoded for the single live row: a backfill that
-- silently does nothing when the data differs from what the author assumed is
-- how migrations lose content quietly. The timings are the published DELF B2
-- clocks (CO 30 min, CE 60 min, PE 60 min, PO 20 min).
UPDATE "content_exam_papers" p SET "sections" = COALESCE((
  SELECT jsonb_agg(
           jsonb_build_object(
             'skill', d.skill,
             'taskIds', d.task_ids,
             'timingS', d.timing_s,
             'blueprintId', 'delf-b2-2026.01-draft'
           ) ORDER BY d.ord)
  FROM (
    SELECT t.skill::text AS skill,
           CASE t.skill::text WHEN 'CO' THEN 1 WHEN 'CE' THEN 2 WHEN 'PE' THEN 3 ELSE 4 END AS ord,
           CASE t.skill::text WHEN 'CO' THEN 1800 WHEN 'CE' THEN 3600 WHEN 'PE' THEN 3600 ELSE 1200 END AS timing_s,
           jsonb_agg(to_jsonb(t.id) ORDER BY u.idx) AS task_ids
    FROM unnest(p.task_ids) WITH ORDINALITY AS u(tid, idx)
    JOIN "content_exam_tasks" t ON t.id = u.tid
    GROUP BY t.skill
  ) d
), '[]'::jsonb);--> statement-breakpoint

-- Fail loudly rather than losing a task. If a paper listed tasks and came out
-- of the backfill with no sections, its task_ids pointed at rows that are not
-- in content_exam_tasks, and dropping the column below would destroy the only
-- record of what the paper contained.
DO $$
DECLARE lost integer;
BEGIN
  SELECT count(*) INTO lost
    FROM "content_exam_papers"
   WHERE array_length(task_ids, 1) > 0
     AND jsonb_array_length(sections) = 0;
  IF lost > 0 THEN
    RAISE EXCEPTION 'backfill lost the tasks of % paper(s): task_ids reference rows absent from content_exam_tasks', lost;
  END IF;
END $$;--> statement-breakpoint

ALTER TABLE "content_exam_papers" DROP COLUMN "task_ids";--> statement-breakpoint

-- ── 4. Re-key: series.<...> → paper.<...> ────────────────────────────────
UPDATE "content_exam_papers" SET "id" = 'paper.' || substring("id" from 8) WHERE "id" LIKE 'series.%';--> statement-breakpoint

-- The one live paper (paper.delf_b2.blanc-01.1) comes out of this with TWO
-- sections, CE and PE, because those are the only two tasks that were ever
-- authored for it. That is deliberately not a valid paper: validateExamPaper
-- requires all four épreuves, so it cannot be published until phase E10
-- authors its listening and speaking sections. It stays 'in_review', which is
-- what it already was, and the publish pipeline never sees it.
