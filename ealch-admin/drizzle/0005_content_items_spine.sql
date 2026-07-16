-- The exam/SRS spine on content_items. Purely additive.
--
-- Every column here is NULLABLE, and that is a decision rather than laziness.
-- The rows already published have none of these values, and there is nothing
-- honest to backfill them with: guessing that every existing item is 'recognise'
-- would be inventing data the SRS then schedules against. NOT NULL comes later,
-- with a real backfill, in its own migration.
--
-- The app's Item type keeps the matching fields optional for the same reason and
-- must stay in step: its validators check type-when-present, so a null here
-- becomes an ABSENT key in the snapshot (see the mapper in publish-content.ts),
-- never `skill: null` — which is *present* and would be refused.
--
-- grammar_points is text[] NOT NULL DEFAULT '{}' rather than nullable: it is a
-- list, and "no grammar points" is honestly the empty list. That keeps it from
-- becoming a third state (null vs {} vs values) that every reader has to handle.
-- It is text[] and not an enum because the grammar-point vocabulary is long,
-- open, and edited by content people — an enum would make adding one a migration.

ALTER TABLE "content_items" ADD COLUMN "skill" "exam_skill";--> statement-breakpoint
ALTER TABLE "content_items" ADD COLUMN "register" "register";--> statement-breakpoint
ALTER TABLE "content_items" ADD COLUMN "can_do" text;--> statement-breakpoint
ALTER TABLE "content_items" ADD COLUMN "grammar_points" text[] DEFAULT '{}' NOT NULL;--> statement-breakpoint
ALTER TABLE "content_items" ADD COLUMN "modality" "modality";