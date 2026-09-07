-- Exam pack: the recorded interlocutor, and the preparation clock.
--
-- Two columns on content_exam_tasks, both nullable, both used by exactly one
-- task type each.
--
--   1. `prep_s` — the silent preparation window a speaking task gives the
--      candidate before the clock on their answer starts. TEF EO Section A
--      allows two minutes with the advert; TCF tâche 2 allows its own. It is a
--      real part of the exam, and a task that skips it is not the same task.
--      PO only, checked app-side by validateExamTask.
--
--   2. `interlocutor` — the answer bank an interaction task questions.
--      REQUIRED for po_interaction, and forbidden on everything else. An
--      interaction with nothing to interact with is a monologue.
--
-- Why nullable columns rather than a NOT NULL with a check: the same reason
-- `rubric` and `model_answer` are nullable. The rule is about the PAIR (this
-- task type, therefore this column), and a DB constraint can only see one
-- column at a time. validateExamTask holds the pair, and it holds it for the
-- app and the publisher alike.
--
-- Nothing is backfilled because nothing needs it: no po_interaction task has
-- ever been published, so there is no existing row this leaves half-formed.

ALTER TABLE "content_exam_tasks" ADD COLUMN IF NOT EXISTS "prep_s" integer;
ALTER TABLE "content_exam_tasks" ADD COLUMN IF NOT EXISTS "interlocutor" jsonb;

-- A guard that can actually fail: it names the one row shape the app rejects,
-- so a bank lost between the authoring script and the publisher shows up here
-- rather than as a silently unplayable task on a candidate's device.
DO $$
DECLARE orphans int;
BEGIN
  SELECT count(*) INTO orphans
  FROM content_exam_tasks
  WHERE task_type = 'po_interaction' AND interlocutor IS NULL;
  IF orphans > 0 THEN
    RAISE EXCEPTION 'ealch: % po_interaction task(s) carry no interlocutor; an interaction with nothing to interact with is a monologue', orphans;
  END IF;
END $$;
