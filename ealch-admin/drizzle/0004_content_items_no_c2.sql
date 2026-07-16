CREATE TYPE "public"."exam_family" AS ENUM('tef', 'tcf', 'delf', 'dalf');--> statement-breakpoint
CREATE TYPE "public"."exam_section" AS ENUM('co', 'ce', 'eo', 'ee');--> statement-breakpoint
CREATE TYPE "public"."exam_skill" AS ENUM('CO', 'CE', 'PO', 'PE');--> statement-breakpoint
CREATE TYPE "public"."modality" AS ENUM('recognise', 'produce', 'discriminate');--> statement-breakpoint
CREATE TYPE "public"."register" AS ENUM('familier', 'courant', 'soutenu');--> statement-breakpoint
ALTER TYPE "public"."drill_kind" ADD VALUE 'playlist';--> statement-breakpoint
ALTER TYPE "public"."drill_kind" ADD VALUE 'exam';--> statement-breakpoint

-- Hand-added below. Content stops at c1; enforce it at the write gate.
--
-- The app's content LEVELS list dropped 'c2': we author no c2 content, because a
-- c2 candidate is not learning French from an app, and an empty c2 band in every
-- level picker is a promise the corpus cannot keep. 'c2' survives as an exam
-- SCORE band (SCORE_BANDS / user_level) — a different question about a different
-- subject: what a learner got, not what we wrote.
--
-- Why "public"."content_level" still CONTAINS 'c2':
-- Postgres has no safe DROP VALUE. Removing an enum value means creating a new
-- type, rewriting every dependent column and swapping them under load — real
-- downtime risk, to delete a value no row uses. Not worth it. The value stays
-- reachable in the type and is forbidden here instead. That asymmetry is
-- deliberate, and ealch-v2/src/content/enum-parity.test.ts asserts it is exactly
-- c2 and nothing else, so it cannot quietly widen into general drift.
--
-- Two independent gates, not one:
--   1. this CHECK      — an author cannot write c2 into content_items at all
--   2. validateCorpus  — c2 cannot reach a phone even if this CHECK is dropped
--
-- NOT NULL matters here. `level` is NOT NULL, so `level <> 'c2'` can never
-- evaluate to NULL. A Postgres CHECK PASSES on NULL — that is precisely the bug
-- 0002 exists to fix. If level ever becomes nullable this must become
-- `level IS NULL OR level <> 'c2'` or it silently stops biting.
--
-- If this migration FAILS it is telling the truth: c2 rows already exist. Do not
-- weaken the constraint. Re-level or delete them — they cannot be published
-- either way, because validateCorpus rejects them.

ALTER TABLE "content_items" DROP CONSTRAINT IF EXISTS "items_level_not_c2";--> statement-breakpoint
ALTER TABLE "content_items" ADD CONSTRAINT "items_level_not_c2"
  CHECK (level <> 'c2');