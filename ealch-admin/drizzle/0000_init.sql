CREATE TYPE "public"."admin_role" AS ENUM('super_admin', 'ops', 'support', 'content_editor');--> statement-breakpoint
CREATE TYPE "public"."campaign_status" AS ENUM('draft', 'scheduled', 'sending', 'sent', 'paused');--> statement-breakpoint
CREATE TYPE "public"."capability_key" AS ENUM('general', 'content', 'audio', 'video');--> statement-breakpoint
CREATE TYPE "public"."content_kind" AS ENUM('scenario', 'drill', 'dictation', 'curriculum_unit');--> statement-breakpoint
CREATE TYPE "public"."content_status" AS ENUM('draft', 'in_review', 'published', 'archived');--> statement-breakpoint
CREATE TYPE "public"."feature_flag_kind" AS ENUM('boolean', 'percentage');--> statement-breakpoint
CREATE TYPE "public"."flag_status" AS ENUM('open', 'resolved');--> statement-breakpoint
CREATE TYPE "public"."incident_severity" AS ENUM('anomaly', 'degraded', 'outage');--> statement-breakpoint
CREATE TYPE "public"."incident_status" AS ENUM('open', 'ack', 'resolved');--> statement-breakpoint
CREATE TYPE "public"."link_channel" AS ENUM('email', 'social', 'ads', 'podcast', 'qr');--> statement-breakpoint
CREATE TYPE "public"."payment_kind" AS ENUM('charge', 'refund');--> statement-breakpoint
CREATE TYPE "public"."release_platform" AS ENUM('ios', 'android');--> statement-breakpoint
CREATE TYPE "public"."release_status" AS ENUM('draft', 'staged', 'rolling', 'complete', 'halted');--> statement-breakpoint
CREATE TYPE "public"."send_status" AS ENUM('queued', 'delivered', 'opened', 'failed');--> statement-breakpoint
CREATE TYPE "public"."sub_plan" AS ENUM('free', 'monthly', 'annual');--> statement-breakpoint
CREATE TYPE "public"."sub_status" AS ENUM('active', 'trialing', 'past_due', 'canceled', 'refunded');--> statement-breakpoint
CREATE TYPE "public"."sub_store" AS ENUM('app_store', 'play', 'stripe');--> statement-breakpoint
CREATE TYPE "public"."user_level" AS ENUM('a1', 'a2', 'b1', 'b2', 'c1', 'c2');--> statement-breakpoint
CREATE TYPE "public"."user_locale" AS ENUM('en', 'fr');--> statement-breakpoint
CREATE TYPE "public"."user_platform" AS ENUM('ios', 'android');--> statement-breakpoint
CREATE TYPE "public"."user_status" AS ENUM('active', 'trial', 'churn_risk', 'banned', 'deleted');--> statement-breakpoint
CREATE TABLE "admin_users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" text NOT NULL,
	"name" text NOT NULL,
	"password_hash" text NOT NULL,
	"role" "admin_role" DEFAULT 'support' NOT NULL,
	"totp_secret" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"last_login_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE "ai_capabilities" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"key" "capability_key" NOT NULL,
	"label" text NOT NULL,
	"description" text NOT NULL,
	"monthly_volume" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "ai_models" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"capability_id" uuid NOT NULL,
	"name" text NOT NULL,
	"provider" text NOT NULL,
	"meta" text,
	"cost_label" text,
	"latency_label" text,
	"monthly_cost_cents" integer DEFAULT 0 NOT NULL,
	"enabled" boolean DEFAULT true NOT NULL
);
--> statement-breakpoint
CREATE TABLE "ai_routing" (
	"capability_id" uuid PRIMARY KEY NOT NULL,
	"active_model_id" uuid NOT NULL,
	"updated_by" uuid,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "audit_log" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"admin_id" uuid,
	"action" text NOT NULL,
	"entity_type" text NOT NULL,
	"entity_id" text,
	"before" jsonb,
	"after" jsonb,
	"ip" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "content_flags" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"unit_id" uuid NOT NULL,
	"user_id" uuid,
	"reason" text NOT NULL,
	"status" "flag_status" DEFAULT 'open' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "content_revisions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"unit_id" uuid NOT NULL,
	"version" integer NOT NULL,
	"body" jsonb NOT NULL,
	"editor_id" uuid,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "content_units" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"slug" text NOT NULL,
	"title" text NOT NULL,
	"kind" "content_kind" NOT NULL,
	"level" "user_level" NOT NULL,
	"locale" "user_locale" DEFAULT 'fr' NOT NULL,
	"status" "content_status" DEFAULT 'draft' NOT NULL,
	"body" jsonb NOT NULL,
	"version" integer DEFAULT 1 NOT NULL,
	"author_id" uuid,
	"published_at" timestamp with time zone,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "events" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid,
	"name" text NOT NULL,
	"props" jsonb,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "feature_flags" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"key" text NOT NULL,
	"description" text,
	"kind" "feature_flag_kind" DEFAULT 'boolean' NOT NULL,
	"value" jsonb NOT NULL,
	"environments" jsonb NOT NULL,
	"updated_by" uuid,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "incidents" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"severity" "incident_severity" NOT NULL,
	"title" text NOT NULL,
	"metric_ref" text,
	"region" text,
	"status" "incident_status" DEFAULT 'open' NOT NULL,
	"opened_at" timestamp with time zone DEFAULT now() NOT NULL,
	"resolved_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE "learning_sessions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"scenario" text NOT NULL,
	"duration_s" integer DEFAULT 0 NOT NULL,
	"confidence" integer DEFAULT 0 NOT NULL,
	"mistakes" jsonb,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "link_clicks" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"link_id" uuid NOT NULL,
	"ts" timestamp with time zone DEFAULT now() NOT NULL,
	"country" text,
	"platform" text,
	"referrer" text
);
--> statement-breakpoint
CREATE TABLE "metrics" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"region" text DEFAULT 'global' NOT NULL,
	"value" numeric(12, 4) NOT NULL,
	"ts" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "notif_campaigns" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"template_id" uuid,
	"name" text NOT NULL,
	"segment" jsonb NOT NULL,
	"schedule_at" timestamp with time zone,
	"status" "campaign_status" DEFAULT 'draft' NOT NULL,
	"sent_count" integer DEFAULT 0 NOT NULL,
	"open_rate" real,
	"created_by" uuid
);
--> statement-breakpoint
CREATE TABLE "notif_sends" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"campaign_id" uuid NOT NULL,
	"user_id" uuid NOT NULL,
	"status" "send_status" DEFAULT 'queued' NOT NULL,
	"ts" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "notif_templates" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"locale" "user_locale" DEFAULT 'en' NOT NULL,
	"title" text NOT NULL,
	"body" text NOT NULL,
	"deeplink" text,
	"created_by" uuid,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "payments" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"subscription_id" uuid NOT NULL,
	"amount_cents" integer NOT NULL,
	"currency" text DEFAULT 'EUR' NOT NULL,
	"kind" "payment_kind" DEFAULT 'charge' NOT NULL,
	"status" text DEFAULT 'paid' NOT NULL,
	"occurred_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "releases" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"version" text NOT NULL,
	"platform" "release_platform" NOT NULL,
	"notes" text,
	"rollout_pct" integer DEFAULT 0 NOT NULL,
	"status" "release_status" DEFAULT 'draft' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "settings" (
	"key" text PRIMARY KEY NOT NULL,
	"value" jsonb NOT NULL,
	"updated_by" uuid,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "subscriptions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"plan" "sub_plan" DEFAULT 'free' NOT NULL,
	"store" "sub_store" DEFAULT 'app_store' NOT NULL,
	"status" "sub_status" DEFAULT 'active' NOT NULL,
	"mrr_cents" integer DEFAULT 0 NOT NULL,
	"started_at" timestamp with time zone DEFAULT now() NOT NULL,
	"renews_at" timestamp with time zone,
	"canceled_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE "tracked_links" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"slug" text NOT NULL,
	"destination_url" text NOT NULL,
	"campaign" text,
	"channel" "link_channel" DEFAULT 'social' NOT NULL,
	"created_by" uuid,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"archived" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user_stats" (
	"user_id" uuid PRIMARY KEY NOT NULL,
	"streak_days" integer DEFAULT 0 NOT NULL,
	"confidence_score" integer DEFAULT 0 NOT NULL,
	"sessions_total" integer DEFAULT 0 NOT NULL,
	"minutes_total" integer DEFAULT 0 NOT NULL,
	"last_session_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" text NOT NULL,
	"display_name" text NOT NULL,
	"locale" "user_locale" DEFAULT 'en' NOT NULL,
	"level" "user_level" DEFAULT 'a1' NOT NULL,
	"platform" "user_platform" DEFAULT 'ios' NOT NULL,
	"country" text,
	"status" "user_status" DEFAULT 'active' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"last_seen_at" timestamp with time zone
);
--> statement-breakpoint
ALTER TABLE "ai_models" ADD CONSTRAINT "ai_models_capability_id_ai_capabilities_id_fk" FOREIGN KEY ("capability_id") REFERENCES "public"."ai_capabilities"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ai_routing" ADD CONSTRAINT "ai_routing_capability_id_ai_capabilities_id_fk" FOREIGN KEY ("capability_id") REFERENCES "public"."ai_capabilities"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ai_routing" ADD CONSTRAINT "ai_routing_active_model_id_ai_models_id_fk" FOREIGN KEY ("active_model_id") REFERENCES "public"."ai_models"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ai_routing" ADD CONSTRAINT "ai_routing_updated_by_admin_users_id_fk" FOREIGN KEY ("updated_by") REFERENCES "public"."admin_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "audit_log" ADD CONSTRAINT "audit_log_admin_id_admin_users_id_fk" FOREIGN KEY ("admin_id") REFERENCES "public"."admin_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "content_flags" ADD CONSTRAINT "content_flags_unit_id_content_units_id_fk" FOREIGN KEY ("unit_id") REFERENCES "public"."content_units"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "content_flags" ADD CONSTRAINT "content_flags_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "content_revisions" ADD CONSTRAINT "content_revisions_unit_id_content_units_id_fk" FOREIGN KEY ("unit_id") REFERENCES "public"."content_units"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "content_revisions" ADD CONSTRAINT "content_revisions_editor_id_admin_users_id_fk" FOREIGN KEY ("editor_id") REFERENCES "public"."admin_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "content_units" ADD CONSTRAINT "content_units_author_id_admin_users_id_fk" FOREIGN KEY ("author_id") REFERENCES "public"."admin_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events" ADD CONSTRAINT "events_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "feature_flags" ADD CONSTRAINT "feature_flags_updated_by_admin_users_id_fk" FOREIGN KEY ("updated_by") REFERENCES "public"."admin_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "learning_sessions" ADD CONSTRAINT "learning_sessions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "link_clicks" ADD CONSTRAINT "link_clicks_link_id_tracked_links_id_fk" FOREIGN KEY ("link_id") REFERENCES "public"."tracked_links"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "notif_campaigns" ADD CONSTRAINT "notif_campaigns_template_id_notif_templates_id_fk" FOREIGN KEY ("template_id") REFERENCES "public"."notif_templates"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "notif_campaigns" ADD CONSTRAINT "notif_campaigns_created_by_admin_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."admin_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "notif_sends" ADD CONSTRAINT "notif_sends_campaign_id_notif_campaigns_id_fk" FOREIGN KEY ("campaign_id") REFERENCES "public"."notif_campaigns"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "notif_sends" ADD CONSTRAINT "notif_sends_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "notif_templates" ADD CONSTRAINT "notif_templates_created_by_admin_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."admin_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "payments" ADD CONSTRAINT "payments_subscription_id_subscriptions_id_fk" FOREIGN KEY ("subscription_id") REFERENCES "public"."subscriptions"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "settings" ADD CONSTRAINT "settings_updated_by_admin_users_id_fk" FOREIGN KEY ("updated_by") REFERENCES "public"."admin_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tracked_links" ADD CONSTRAINT "tracked_links_created_by_admin_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."admin_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_stats" ADD CONSTRAINT "user_stats_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "admin_users_email_uq" ON "admin_users" USING btree ("email");--> statement-breakpoint
CREATE UNIQUE INDEX "capabilities_key_uq" ON "ai_capabilities" USING btree ("key");--> statement-breakpoint
CREATE INDEX "models_capability_idx" ON "ai_models" USING btree ("capability_id");--> statement-breakpoint
CREATE INDEX "audit_admin_idx" ON "audit_log" USING btree ("admin_id");--> statement-breakpoint
CREATE INDEX "audit_entity_idx" ON "audit_log" USING btree ("entity_type","entity_id");--> statement-breakpoint
CREATE INDEX "audit_created_idx" ON "audit_log" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "flags_status_idx" ON "content_flags" USING btree ("status");--> statement-breakpoint
CREATE INDEX "revisions_unit_idx" ON "content_revisions" USING btree ("unit_id");--> statement-breakpoint
CREATE UNIQUE INDEX "content_slug_uq" ON "content_units" USING btree ("slug");--> statement-breakpoint
CREATE INDEX "content_status_idx" ON "content_units" USING btree ("status");--> statement-breakpoint
CREATE INDEX "events_name_idx" ON "events" USING btree ("name");--> statement-breakpoint
CREATE INDEX "events_created_idx" ON "events" USING btree ("created_at");--> statement-breakpoint
CREATE UNIQUE INDEX "flags_key_uq" ON "feature_flags" USING btree ("key");--> statement-breakpoint
CREATE INDEX "incidents_status_idx" ON "incidents" USING btree ("status");--> statement-breakpoint
CREATE INDEX "sessions_user_idx" ON "learning_sessions" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "sessions_created_idx" ON "learning_sessions" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "clicks_link_ts_idx" ON "link_clicks" USING btree ("link_id","ts");--> statement-breakpoint
CREATE INDEX "metrics_series_idx" ON "metrics" USING btree ("name","region","ts");--> statement-breakpoint
CREATE INDEX "campaigns_status_idx" ON "notif_campaigns" USING btree ("status");--> statement-breakpoint
CREATE INDEX "sends_campaign_idx" ON "notif_sends" USING btree ("campaign_id");--> statement-breakpoint
CREATE INDEX "payments_sub_idx" ON "payments" USING btree ("subscription_id");--> statement-breakpoint
CREATE INDEX "payments_occurred_idx" ON "payments" USING btree ("occurred_at");--> statement-breakpoint
CREATE INDEX "releases_platform_idx" ON "releases" USING btree ("platform");--> statement-breakpoint
CREATE INDEX "subs_user_idx" ON "subscriptions" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "subs_status_idx" ON "subscriptions" USING btree ("status");--> statement-breakpoint
CREATE UNIQUE INDEX "links_slug_uq" ON "tracked_links" USING btree ("slug");--> statement-breakpoint
CREATE UNIQUE INDEX "users_email_uq" ON "users" USING btree ("email");--> statement-breakpoint
CREATE INDEX "users_status_idx" ON "users" USING btree ("status");--> statement-breakpoint
CREATE INDEX "users_last_seen_idx" ON "users" USING btree ("last_seen_at");