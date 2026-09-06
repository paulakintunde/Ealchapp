-- Exam pack: the DELF B2 débat.
--
-- A new task type and the bank it needs. DELF Production orale runs in two
-- phases: a 5 to 7 minute monologue, then a 10 to 13 minute debate in which the
-- examiner attacks the position the candidate just argued.
--
-- WHY NOT po_interaction
--
-- That type models an information exchange — the candidate asks, the examiner
-- supplies facts the document withheld, and coverage of those facts is the
-- evidence handed to the grader. The debate inverts it. The examiner
-- challenges rather than answers, the bank holds objections rather than facts,
-- and coverage would actively MISREPORT: a candidate who met every objection by
-- agreeing with it has argued badly, and would score full marks for having
-- heard them all.
--
-- So the success measure changes, not the bank size, and that is a different
-- task type rather than a wider one.
--
-- TWO STATEMENTS, TWO MIGRATIONS' WORTH OF CARE
--
-- `ALTER TYPE ... ADD VALUE` cannot be used in the same transaction that then
-- USES the new value, which is why nothing below references 'po_debate' in
-- data. The column is added unconditionally and the guard reads only rows that
-- already exist.
--
-- Nothing is backfilled because nothing needs it: no po_debate task has ever
-- been authored, let alone published, so there is no existing row this leaves
-- half-formed.

-- AFTER 'po_interaction' rather than a bare ADD VALUE, which appends. The
-- Drizzle declaration groups the PO types together, and an enum whose real
-- order differs from the declared one is a difference nothing would notice
-- until something ordered by it.
ALTER TYPE "public"."exam_task_type" ADD VALUE IF NOT EXISTS 'po_debate' AFTER 'po_interaction';--> statement-breakpoint

ALTER TABLE "content_exam_tasks" ADD COLUMN IF NOT EXISTS "debate" jsonb;--> statement-breakpoint

-- A guard that can actually fail, in the same shape as 0020's.
--
-- It names the one row the app rejects: a debate task with no bank. Written
-- against task_type::text rather than the enum literal because the value was
-- added in this same migration, and comparing to the literal would make this
-- statement depend on the ALTER above having been committed.
DO $$
DECLARE orphans int;
BEGIN
  SELECT count(*) INTO orphans
  FROM content_exam_tasks
  WHERE task_type::text = 'po_debate' AND debate IS NULL;
  IF orphans > 0 THEN
    RAISE EXCEPTION 'ealch: % po_debate task(s) carry no debate bank; an examiner with no objections cannot challenge a position', orphans;
  END IF;
END $$;
