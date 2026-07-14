-- Fix items_drills_not_empty, which shipped in 0001 as a no-op.
--
-- The bug: array_length(drills, 1) returns NULL for an empty array '{}', not 0.
-- A Postgres CHECK PASSES when its expression evaluates to NULL — it only fails
-- on an explicit false. So `array_length(drills,1) >= 1` evaluated to NULL for
-- exactly the case it was written to forbid, and empty-drills rows went straight
-- through. Found by inserting one and watching it succeed.
--
-- cardinality() returns 0 for '{}', so the comparison is false and the check
-- bites. Verified against the live table: array_length -> null, cardinality -> 0.
--
-- Why it matters: an item no drill can select is generated, reviewed, published
-- and unreachable. Nothing errors, nothing warns. It simply never reaches a
-- learner, while the corpus count insists it is there.

ALTER TABLE "content_items" DROP CONSTRAINT IF EXISTS "items_drills_not_empty";--> statement-breakpoint
ALTER TABLE "content_items" ADD CONSTRAINT "items_drills_not_empty"
  CHECK (cardinality(drills) >= 1);
