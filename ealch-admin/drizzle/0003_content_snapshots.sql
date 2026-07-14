CREATE TABLE "content_snapshots" (
	"version" integer PRIMARY KEY NOT NULL,
	"path" text NOT NULL,
	"checksum" text NOT NULL,
	"counts" jsonb NOT NULL,
	"seed_counts" jsonb,
	"published_by" uuid,
	"published_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "content_snapshots" ADD CONSTRAINT "content_snapshots_published_by_admin_users_id_fk" FOREIGN KEY ("published_by") REFERENCES "public"."admin_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "snapshots_published_idx" ON "content_snapshots" USING btree ("published_at");--> statement-breakpoint

-- Hand-added: RLS, matching content_units and content_items. The app never reads
-- this table — it reads manifest.json from the public `content` Storage bucket.
-- Enabled with zero policies, so anon and authenticated get nothing; the Ops
-- Console bypasses RLS via its raw Postgres role.
ALTER TABLE "content_snapshots" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint

-- Versions only ever go forward. A snapshot is an immutable published artifact:
-- if v12 is wrong, you publish v13, you do not rewrite v12. Users may already
-- have v12 cached, and a mutated snapshot under an unchanged version number is
-- undetectable to them.
ALTER TABLE "content_snapshots" ADD CONSTRAINT "snapshots_version_positive"
  CHECK (version >= 1);