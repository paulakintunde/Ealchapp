CREATE TABLE "content_domains" (
	"slug" text PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"order" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "content_exam_series" (
	"id" text PRIMARY KEY NOT NULL,
	"family" "exam_family" NOT NULL,
	"variant" text NOT NULL,
	"series_no" integer NOT NULL,
	"task_ids" text[] DEFAULT '{}' NOT NULL,
	"status" "content_status" DEFAULT 'draft' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "content_exam_tasks" (
	"id" text PRIMARY KEY NOT NULL,
	"family" "exam_family" NOT NULL,
	"variant" text NOT NULL,
	"section" "exam_section" NOT NULL,
	"level" "user_level" NOT NULL,
	"format_version" text NOT NULL,
	"prompt" text NOT NULL,
	"items" jsonb,
	"response_spec" jsonb,
	"rubric" jsonb,
	"model_answer" text,
	"examiner_notes" text[] DEFAULT '{}' NOT NULL,
	"timing_s" integer NOT NULL,
	"scoring_map" jsonb,
	"status" "content_status" DEFAULT 'draft' NOT NULL,
	"published_at" timestamp with time zone,
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
CREATE TABLE "content_themes" (
	"slug" text PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"domain" text NOT NULL,
	"level_range_lo" "content_level" NOT NULL,
	"level_range_hi" "content_level" NOT NULL,
	"exam_flag" boolean DEFAULT false NOT NULL,
	"immig_flag" boolean DEFAULT false NOT NULL,
	"sub_themes" text[] DEFAULT '{}' NOT NULL
);
--> statement-breakpoint
ALTER TABLE "content_exam_tasks" ADD CONSTRAINT "content_exam_tasks_reviewed_by_admin_users_id_fk" FOREIGN KEY ("reviewed_by") REFERENCES "public"."admin_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "content_themes" ADD CONSTRAINT "content_themes_domain_content_domains_slug_fk" FOREIGN KEY ("domain") REFERENCES "public"."content_domains"("slug") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "exam_series_family_variant_idx" ON "content_exam_series" USING btree ("family","variant");--> statement-breakpoint
CREATE INDEX "exam_tasks_status_idx" ON "content_exam_tasks" USING btree ("status");--> statement-breakpoint
CREATE INDEX "exam_tasks_family_variant_idx" ON "content_exam_tasks" USING btree ("family","variant");--> statement-breakpoint
CREATE INDEX "themes_domain_idx" ON "content_themes" USING btree ("domain");