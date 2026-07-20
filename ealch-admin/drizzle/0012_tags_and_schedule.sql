CREATE TABLE "content_tags" (
	"slug" text PRIMARY KEY NOT NULL,
	"label" text NOT NULL,
	"weak_skill" text
);
--> statement-breakpoint
ALTER TABLE "content_items" ADD COLUMN "scheduled_publish_at" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "content_units" ADD COLUMN "scheduled_publish_at" timestamp with time zone;