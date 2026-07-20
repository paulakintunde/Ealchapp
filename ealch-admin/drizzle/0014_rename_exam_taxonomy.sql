-- Rename the exam taxonomy: exam_family/exam_section (generic families
-- including the unlaunched DALF, and paper-label sections co/ce/eo/ee) become
-- exam_format/exam_task_type (the Canada-first launch set, at task-type
-- granularity — a skill can be tested by more than one task shape). Adds a
-- stored skill column (derived from task_type, validated app-side) and
-- target_item_ids for SRS-miss decomposition. Both content_exam_tasks and
-- content_exam_series are empty (0 rows) as of this migration, so this drops
-- and recreates the affected columns rather than attempting a
-- value-preserving rename — if that assumption is ever wrong this migration
-- fails loudly (NOT NULL ADD COLUMN with no default on a non-empty table),
-- which is the correct failure mode.
ALTER TABLE "content_exam_series" DROP COLUMN "family";--> statement-breakpoint
ALTER TABLE "content_exam_tasks" DROP COLUMN "family";--> statement-breakpoint
ALTER TABLE "content_exam_tasks" DROP COLUMN "section";--> statement-breakpoint
DROP TYPE "public"."exam_family";--> statement-breakpoint
DROP TYPE "public"."exam_section";--> statement-breakpoint
CREATE TYPE "public"."exam_format" AS ENUM('delf_b2', 'tef_canada', 'tcf_canada');--> statement-breakpoint
CREATE TYPE "public"."exam_task_type" AS ENUM('co_mcq', 'ce_mcq', 'po_monologue', 'po_interaction', 'pe_short', 'pe_essay');--> statement-breakpoint
ALTER TABLE "content_exam_series" ADD COLUMN "format" "exam_format" NOT NULL;--> statement-breakpoint
ALTER TABLE "content_exam_tasks" ADD COLUMN "format" "exam_format" NOT NULL;--> statement-breakpoint
ALTER TABLE "content_exam_tasks" ADD COLUMN "task_type" "exam_task_type" NOT NULL;--> statement-breakpoint
ALTER TABLE "content_exam_tasks" ADD COLUMN "skill" "exam_skill" NOT NULL;--> statement-breakpoint
ALTER TABLE "content_exam_tasks" ADD COLUMN "target_item_ids" text[] DEFAULT '{}' NOT NULL;--> statement-breakpoint
DROP INDEX "exam_series_family_variant_idx";--> statement-breakpoint
DROP INDEX "exam_tasks_family_variant_idx";--> statement-breakpoint
CREATE INDEX "exam_series_format_variant_idx" ON "content_exam_series" USING btree ("format","variant");--> statement-breakpoint
CREATE INDEX "exam_tasks_format_variant_idx" ON "content_exam_tasks" USING btree ("format","variant");
