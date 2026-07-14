CREATE TYPE "public"."content_level" AS ENUM('sons', 'a1', 'a2', 'b1', 'b2', 'c1', 'c2');--> statement-breakpoint
CREATE TYPE "public"."drill_kind" AS ENUM('flashcard', 'voiceflash', 'dictation', 'sentence', 'roleplay', 'review');--> statement-breakpoint
CREATE TYPE "public"."generated_by" AS ENUM('human', 'llm');--> statement-breakpoint
CREATE TYPE "public"."item_gender" AS ENUM('m', 'f');--> statement-breakpoint
CREATE TYPE "public"."item_kind" AS ENUM('word', 'phrase', 'sentence');--> statement-breakpoint
ALTER TYPE "public"."content_kind" ADD VALUE 'lesson';--> statement-breakpoint
ALTER TYPE "public"."content_kind" ADD VALUE 'vocabulary';--> statement-breakpoint
CREATE TABLE "content_items" (
	"id" text PRIMARY KEY NOT NULL,
	"kind" "item_kind" NOT NULL,
	"level" "content_level" NOT NULL,
	"theme" text NOT NULL,
	"fr" text NOT NULL,
	"en" text NOT NULL,
	"ipa" text,
	"gender" "item_gender",
	"example" jsonb,
	"notes" text,
	"tags" text[] DEFAULT '{}' NOT NULL,
	"drills" "drill_kind"[] NOT NULL,
	"audio_ref" text,
	"version" integer DEFAULT 1 NOT NULL,
	"status" "content_status" DEFAULT 'draft' NOT NULL,
	"published_at" timestamp with time zone,
	"pack_id" uuid,
	"generated_by" "generated_by" DEFAULT 'llm' NOT NULL,
	"model" text,
	"prompt_version" text,
	"source_refs" jsonb,
	"reviewed_by" uuid,
	"reviewed_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "content_units" ALTER COLUMN "level" SET DATA TYPE "public"."content_level" USING "level"::text::"public"."content_level";--> statement-breakpoint
ALTER TABLE "content_units" ADD COLUMN "generated_by" "generated_by" DEFAULT 'human' NOT NULL;--> statement-breakpoint
ALTER TABLE "content_units" ADD COLUMN "model" text;--> statement-breakpoint
ALTER TABLE "content_units" ADD COLUMN "prompt_version" text;--> statement-breakpoint
ALTER TABLE "content_units" ADD COLUMN "source_refs" jsonb;--> statement-breakpoint
ALTER TABLE "content_units" ADD COLUMN "reviewed_by" uuid;--> statement-breakpoint
ALTER TABLE "content_units" ADD COLUMN "reviewed_at" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "content_items" ADD CONSTRAINT "content_items_pack_id_content_units_id_fk" FOREIGN KEY ("pack_id") REFERENCES "public"."content_units"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "content_items" ADD CONSTRAINT "content_items_reviewed_by_admin_users_id_fk" FOREIGN KEY ("reviewed_by") REFERENCES "public"."admin_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "items_status_idx" ON "content_items" USING btree ("status");--> statement-breakpoint
CREATE INDEX "items_theme_idx" ON "content_items" USING btree ("theme");--> statement-breakpoint
CREATE INDEX "items_status_level_theme_idx" ON "content_items" USING btree ("status","level","theme");--> statement-breakpoint
CREATE INDEX "items_pack_idx" ON "content_items" USING btree ("pack_id");--> statement-breakpoint
ALTER TABLE "content_units" ADD CONSTRAINT "content_units_reviewed_by_admin_users_id_fk" FOREIGN KEY ("reviewed_by") REFERENCES "public"."admin_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint

-- ─── Hand-added below this line (drizzle-kit cannot express any of it) ───────

-- RLS. The mobile app NEVER reads this table: it loads a published snapshot
-- artifact from Storage (see PHASE-1-FOUNDATION-PROMPT.md, Task 3/4). So RLS is
-- enabled with ZERO policies, which denies anon and authenticated outright. The
-- Ops Console connects as a raw Postgres role over the pooler and bypasses RLS,
-- which is how it still works. Matches content_units, which is already in this
-- state. Do NOT add a "published readable" policy here — that would expose 8000
-- rows to the public anon key for no reason.
ALTER TABLE "content_items" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint

-- The id encodes level and theme. TypeScript enforces this in validateItem();
-- enforce it in the database too, so a generator or a script writing rows
-- directly cannot bypass it. An item whose id disagrees with its columns is a
-- lie we cannot resolve — we do not know which half is true.
ALTER TABLE "content_items" ADD CONSTRAINT "items_id_format"
  CHECK (id ~ '^fr\.(sons|a1|a2|b1|b2|c1|c2)\.[a-z0-9-]+\.[0-9]{3,}$');--> statement-breakpoint
ALTER TABLE "content_items" ADD CONSTRAINT "items_theme_format"
  CHECK (theme ~ '^[a-z0-9-]+$');--> statement-breakpoint
ALTER TABLE "content_items" ADD CONSTRAINT "items_id_matches_level"
  CHECK (split_part(id, '.', 2) = level::text);--> statement-breakpoint
ALTER TABLE "content_items" ADD CONSTRAINT "items_id_matches_theme"
  CHECK (split_part(id, '.', 3) = theme);--> statement-breakpoint

-- An item no drill can select is dead weight in the corpus and a silent
-- authoring bug: it is generated, reviewed, published, and unreachable.
ALTER TABLE "content_items" ADD CONSTRAINT "items_drills_not_empty"
  CHECK (array_length(drills, 1) >= 1);