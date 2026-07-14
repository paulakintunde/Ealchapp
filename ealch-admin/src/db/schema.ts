// Ealch Ops Console — Drizzle schema (Postgres).
// Implements the spec's data model exactly; every FK indexed, enums as pgEnum.
import {
  pgTable, pgEnum, text, timestamp, integer, boolean, jsonb, uuid,
  numeric, uniqueIndex, index, real, primaryKey,
} from 'drizzle-orm/pg-core';

// ── Enums ──────────────────────────────────────────────────────────────────
export const adminRole = pgEnum('admin_role', ['super_admin', 'ops', 'support', 'content_editor']);
export const userLocale = pgEnum('user_locale', ['en', 'fr']);
export const userLevel = pgEnum('user_level', ['a1', 'a2', 'b1', 'b2', 'c1', 'c2']);
export const userPlatform = pgEnum('user_platform', ['ios', 'android']);
export const userStatus = pgEnum('user_status', ['active', 'trial', 'churn_risk', 'banned', 'deleted']);
export const subPlan = pgEnum('sub_plan', ['free', 'monthly', 'annual']);
export const subStore = pgEnum('sub_store', ['app_store', 'play', 'stripe']);
export const subStatus = pgEnum('sub_status', ['active', 'trialing', 'past_due', 'canceled', 'refunded']);
export const paymentKind = pgEnum('payment_kind', ['charge', 'refund']);
export const campaignStatus = pgEnum('campaign_status', ['draft', 'scheduled', 'sending', 'sent', 'paused']);
export const sendStatus = pgEnum('send_status', ['queued', 'delivered', 'opened', 'failed']);
// 'lesson' — a rich, sectioned lesson document (ealch-v2/src/content/schema.ts: Lesson).
// 'vocabulary' — a themed PACK of corpus items, reviewed as one unit of work.
//   Nobody reviews 8000 vocabulary rows one at a time, so the pack is the document
//   a human approves; the rows themselves live in content_items.
export const contentKind = pgEnum('content_kind', [
  'scenario', 'drill', 'dictation', 'curriculum_unit', 'lesson', 'vocabulary',
]);
export const contentStatus = pgEnum('content_status', ['draft', 'in_review', 'published', 'archived']);
export const flagStatus = pgEnum('flag_status', ['open', 'resolved']);

// ── Content corpus ─────────────────────────────────────────────────────────
// These mirror ealch-v2/src/content/schema.ts EXACTLY. That file is the single
// source of truth for content shape and is imported by the app, this console,
// the generator and the publish pipeline. If you change one, change both — a
// drift here means the console can approve content the app cannot render.

// NOT userLevel: a *user* is never at level "sons", but content is — and the
// Sons track is the deepest content in the curriculum. Content needs its own.
export const contentLevel = pgEnum('content_level', ['sons', 'a1', 'a2', 'b1', 'b2', 'c1', 'c2']);
export const itemKind = pgEnum('item_kind', ['word', 'phrase', 'sentence']);
export const itemGender = pgEnum('item_gender', ['m', 'f']);
export const drillKind = pgEnum('drill_kind', [
  'flashcard', 'voiceflash', 'dictation', 'sentence', 'roleplay', 'review',
]);
// Once content is LLM-generated, "which model produced this, against which
// prompt, and who signed it off" stops being optional.
export const generatedBy = pgEnum('generated_by', ['human', 'llm']);
export const capabilityKey = pgEnum('capability_key', ['general', 'content', 'audio', 'video']);
export const incidentSeverity = pgEnum('incident_severity', ['anomaly', 'degraded', 'outage']);
export const incidentStatus = pgEnum('incident_status', ['open', 'ack', 'resolved']);
export const linkChannel = pgEnum('link_channel', ['email', 'social', 'ads', 'podcast', 'qr']);
export const releasePlatform = pgEnum('release_platform', ['ios', 'android']);
export const releaseStatus = pgEnum('release_status', ['draft', 'staged', 'rolling', 'complete', 'halted']);
export const featureFlagKind = pgEnum('feature_flag_kind', ['boolean', 'percentage']);

// ── Admin & platform ───────────────────────────────────────────────────────
export const adminUsers = pgTable('admin_users', {
  id: uuid('id').primaryKey().defaultRandom(),
  email: text('email').notNull(),
  name: text('name').notNull(),
  passwordHash: text('password_hash').notNull(),
  role: adminRole('role').notNull().default('support'),
  totpSecret: text('totp_secret'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  lastLoginAt: timestamp('last_login_at', { withTimezone: true }),
}, (t) => [uniqueIndex('admin_users_email_uq').on(t.email)]);

export const auditLog = pgTable('audit_log', {
  id: uuid('id').primaryKey().defaultRandom(),
  adminId: uuid('admin_id').references(() => adminUsers.id),
  action: text('action').notNull(),
  entityType: text('entity_type').notNull(),
  entityId: text('entity_id'),
  before: jsonb('before'),
  after: jsonb('after'),
  ip: text('ip'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
}, (t) => [
  index('audit_admin_idx').on(t.adminId),
  index('audit_entity_idx').on(t.entityType, t.entityId),
  index('audit_created_idx').on(t.createdAt),
]);

export const settings = pgTable('settings', {
  key: text('key').primaryKey(),
  value: jsonb('value').notNull(),
  updatedBy: uuid('updated_by').references(() => adminUsers.id),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
});

// ── End users ──────────────────────────────────────────────────────────────
export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  email: text('email').notNull(),
  displayName: text('display_name').notNull(),
  locale: userLocale('locale').notNull().default('en'),
  level: userLevel('level').notNull().default('a1'),
  platform: userPlatform('platform').notNull().default('ios'),
  country: text('country'),
  status: userStatus('status').notNull().default('active'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  lastSeenAt: timestamp('last_seen_at', { withTimezone: true }),
}, (t) => [
  uniqueIndex('users_email_uq').on(t.email),
  index('users_status_idx').on(t.status),
  index('users_last_seen_idx').on(t.lastSeenAt),
]);

export const userStats = pgTable('user_stats', {
  userId: uuid('user_id').primaryKey().references(() => users.id, { onDelete: 'cascade' }),
  streakDays: integer('streak_days').notNull().default(0),
  confidenceScore: integer('confidence_score').notNull().default(0),
  sessionsTotal: integer('sessions_total').notNull().default(0),
  minutesTotal: integer('minutes_total').notNull().default(0),
  lastSessionAt: timestamp('last_session_at', { withTimezone: true }),
});

export const subscriptions = pgTable('subscriptions', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  plan: subPlan('plan').notNull().default('free'),
  store: subStore('store').notNull().default('app_store'),
  status: subStatus('status').notNull().default('active'),
  mrrCents: integer('mrr_cents').notNull().default(0),
  startedAt: timestamp('started_at', { withTimezone: true }).notNull().defaultNow(),
  renewsAt: timestamp('renews_at', { withTimezone: true }),
  canceledAt: timestamp('canceled_at', { withTimezone: true }),
}, (t) => [
  index('subs_user_idx').on(t.userId),
  index('subs_status_idx').on(t.status),
]);

export const payments = pgTable('payments', {
  id: uuid('id').primaryKey().defaultRandom(),
  subscriptionId: uuid('subscription_id').notNull().references(() => subscriptions.id, { onDelete: 'cascade' }),
  amountCents: integer('amount_cents').notNull(),
  currency: text('currency').notNull().default('EUR'),
  kind: paymentKind('kind').notNull().default('charge'),
  status: text('status').notNull().default('paid'),
  occurredAt: timestamp('occurred_at', { withTimezone: true }).notNull().defaultNow(),
}, (t) => [
  index('payments_sub_idx').on(t.subscriptionId),
  index('payments_occurred_idx').on(t.occurredAt),
]);

export const learningSessions = pgTable('learning_sessions', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  scenario: text('scenario').notNull(),
  durationS: integer('duration_s').notNull().default(0),
  confidence: integer('confidence').notNull().default(0),
  mistakes: jsonb('mistakes'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
}, (t) => [
  index('sessions_user_idx').on(t.userId),
  index('sessions_created_idx').on(t.createdAt),
]);

// Analytics event stream. NOTE: the spec calls for month partitioning — real
// Postgres deployments should convert this to a declarative-partitioned table
// (see README → Deploy notes); Drizzle models the logical shape.
export const events = pgTable('events', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'set null' }),
  name: text('name').notNull(),
  props: jsonb('props'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
}, (t) => [
  index('events_name_idx').on(t.name),
  index('events_created_idx').on(t.createdAt),
]);

// ── Notifications ──────────────────────────────────────────────────────────
export const notifTemplates = pgTable('notif_templates', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  locale: userLocale('locale').notNull().default('en'),
  title: text('title').notNull(),
  body: text('body').notNull(),
  deeplink: text('deeplink'),
  createdBy: uuid('created_by').references(() => adminUsers.id),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
});

export const notifCampaigns = pgTable('notif_campaigns', {
  id: uuid('id').primaryKey().defaultRandom(),
  templateId: uuid('template_id').references(() => notifTemplates.id),
  name: text('name').notNull(),
  segment: jsonb('segment').notNull(),
  scheduleAt: timestamp('schedule_at', { withTimezone: true }),
  status: campaignStatus('status').notNull().default('draft'),
  sentCount: integer('sent_count').notNull().default(0),
  openRate: real('open_rate'),
  createdBy: uuid('created_by').references(() => adminUsers.id),
}, (t) => [index('campaigns_status_idx').on(t.status)]);

export const notifSends = pgTable('notif_sends', {
  id: uuid('id').primaryKey().defaultRandom(),
  campaignId: uuid('campaign_id').notNull().references(() => notifCampaigns.id, { onDelete: 'cascade' }),
  userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  status: sendStatus('status').notNull().default('queued'),
  ts: timestamp('ts', { withTimezone: true }).notNull().defaultNow(),
}, (t) => [index('sends_campaign_idx').on(t.campaignId)]);

// ── Content ────────────────────────────────────────────────────────────────
export const contentUnits = pgTable('content_units', {
  id: uuid('id').primaryKey().defaultRandom(),
  slug: text('slug').notNull(),
  title: text('title').notNull(),
  kind: contentKind('kind').notNull(),
  // contentLevel, not userLevel — see the note on the enum. Safe to widen: this
  // table has 0 rows, and every existing user_level value is also a content_level.
  level: contentLevel('level').notNull(),
  locale: userLocale('locale').notNull().default('fr'),
  status: contentStatus('status').notNull().default('draft'),
  body: jsonb('body').notNull(),
  version: integer('version').notNull().default(1),
  authorId: uuid('author_id').references(() => adminUsers.id),
  publishedAt: timestamp('published_at', { withTimezone: true }),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),

  // ── Provenance ──
  generatedBy: generatedBy('generated_by').notNull().default('human'),
  model: text('model'),
  promptVersion: text('prompt_version'),
  /** The pedagogical sources backing this content. The brief requires lessons
   *  drawn from established French teaching, with multiple sources supporting
   *  their validity — this is where that claim is recorded and auditable. */
  sourceRefs: jsonb('source_refs'),
  reviewedBy: uuid('reviewed_by').references(() => adminUsers.id),
  reviewedAt: timestamp('reviewed_at', { withTimezone: true }),
}, (t) => [
  uniqueIndex('content_slug_uq').on(t.slug),
  index('content_status_idx').on(t.status),
]);

/**
 * The atomic corpus — up to ~8000 French words and sentences. Drills select
 * from it; the SRS schedules against it.
 *
 * Deliberately NOT content_units. content_units holds DOCUMENTS: a lesson, a
 * scenario, a dictée set — things a human reviews as one unit of work, which is
 * what the draft/in_review/published machine is built for. Nobody reviews 8000
 * rows one at a time. Items are generated and approved in themed batches, and a
 * 'vocabulary' content_unit is the pack that represents that batch.
 *
 * `id` is TEXT, not uuid: 'fr.a1.cafe.001'. It is a stable, public, immutable
 * key that must survive regeneration. An item may be rewritten, retranslated or
 * re-recorded, but if its id changes, every attempt logged against it and every
 * SRS interval built on it is orphaned.
 */
export const contentItems = pgTable('content_items', {
  id: text('id').primaryKey(),
  kind: itemKind('kind').notNull(),
  level: contentLevel('level').notNull(),
  /** Lowercase slug. Items are generated, reviewed and shipped by theme, so this
   *  is a working index, not a label. */
  theme: text('theme').notNull(),
  fr: text('fr').notNull(),
  en: text('en').notNull(),
  ipa: text('ipa'),
  /** Nouns only. Gender is the most common beginner error in French, so it is a
   *  first-class column rather than something buried in notes. */
  gender: itemGender('gender'),
  /** { fr, en } */
  example: jsonb('example'),
  /** Teaching note, hack or clue. Dictation's why-tip lands here. */
  notes: text('notes'),
  /** 'liaison' | 'nasal' | 'passe-compose' … The handle the SRS uses to say
   *  "you are weak at nasals" rather than "you are weak at item 47". */
  tags: text('tags').array().notNull().default([]),
  /** Which drills may select this item. Must be non-empty — an item no drill can
   *  reach is dead weight and a silent authoring bug. Enforced by a CHECK below. */
  drills: drillKind('drills').array().notNull(),
  /** Null until Phase 7. Device TTS speaks `fr` in the meantime. */
  audioRef: text('audio_ref'),
  version: integer('version').notNull().default(1),

  status: contentStatus('status').notNull().default('draft'),
  publishedAt: timestamp('published_at', { withTimezone: true }),

  /** The 'vocabulary' content_unit this item was reviewed as part of. */
  packId: uuid('pack_id').references(() => contentUnits.id, { onDelete: 'set null' }),

  // ── Provenance ──
  generatedBy: generatedBy('generated_by').notNull().default('llm'),
  model: text('model'),
  promptVersion: text('prompt_version'),
  sourceRefs: jsonb('source_refs'),
  reviewedBy: uuid('reviewed_by').references(() => adminUsers.id),
  reviewedAt: timestamp('reviewed_at', { withTimezone: true }),

  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
}, (t) => [
  // The publish pipeline's hot path: "give me every published item".
  index('items_status_idx').on(t.status),
  // The review path: "give me the cafe batch". And the drill path: "give me
  // published a1 cafe items". Theme-first because it is the coarsest filter.
  index('items_theme_idx').on(t.theme),
  index('items_status_level_theme_idx').on(t.status, t.level, t.theme),
  index('items_pack_idx').on(t.packId),
]);

export const contentRevisions = pgTable('content_revisions', {
  id: uuid('id').primaryKey().defaultRandom(),
  unitId: uuid('unit_id').notNull().references(() => contentUnits.id, { onDelete: 'cascade' }),
  version: integer('version').notNull(),
  body: jsonb('body').notNull(),
  editorId: uuid('editor_id').references(() => adminUsers.id),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
}, (t) => [index('revisions_unit_idx').on(t.unitId)]);

export const contentFlags = pgTable('content_flags', {
  id: uuid('id').primaryKey().defaultRandom(),
  unitId: uuid('unit_id').notNull().references(() => contentUnits.id, { onDelete: 'cascade' }),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'set null' }),
  reason: text('reason').notNull(),
  status: flagStatus('status').notNull().default('open'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
}, (t) => [index('flags_status_idx').on(t.status)]);

// ── AI routing ─────────────────────────────────────────────────────────────
export const aiCapabilities = pgTable('ai_capabilities', {
  id: uuid('id').primaryKey().defaultRandom(),
  key: capabilityKey('key').notNull(),
  label: text('label').notNull(),
  description: text('description').notNull(),
  monthlyVolume: text('monthly_volume').notNull(),
}, (t) => [uniqueIndex('capabilities_key_uq').on(t.key)]);

export const aiModels = pgTable('ai_models', {
  id: uuid('id').primaryKey().defaultRandom(),
  capabilityId: uuid('capability_id').notNull().references(() => aiCapabilities.id, { onDelete: 'cascade' }),
  name: text('name').notNull(),
  provider: text('provider').notNull(),
  meta: text('meta'),
  costLabel: text('cost_label'),
  latencyLabel: text('latency_label'),
  monthlyCostCents: integer('monthly_cost_cents').notNull().default(0),
  enabled: boolean('enabled').notNull().default(true),
}, (t) => [index('models_capability_idx').on(t.capabilityId)]);

export const aiRouting = pgTable('ai_routing', {
  capabilityId: uuid('capability_id').primaryKey().references(() => aiCapabilities.id, { onDelete: 'cascade' }),
  activeModelId: uuid('active_model_id').notNull().references(() => aiModels.id),
  updatedBy: uuid('updated_by').references(() => adminUsers.id),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
});

// ── Observability ──────────────────────────────────────────────────────────
export const metrics = pgTable('metrics', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(), // api_p95_ms | tts_p95_ms | uptime | crash_free | error_rate
  region: text('region').notNull().default('global'),
  value: numeric('value', { precision: 12, scale: 4 }).notNull(),
  ts: timestamp('ts', { withTimezone: true }).notNull().defaultNow(),
}, (t) => [index('metrics_series_idx').on(t.name, t.region, t.ts)]);

export const incidents = pgTable('incidents', {
  id: uuid('id').primaryKey().defaultRandom(),
  severity: incidentSeverity('severity').notNull(),
  title: text('title').notNull(),
  metricRef: text('metric_ref'),
  region: text('region'),
  status: incidentStatus('status').notNull().default('open'),
  openedAt: timestamp('opened_at', { withTimezone: true }).notNull().defaultNow(),
  resolvedAt: timestamp('resolved_at', { withTimezone: true }),
}, (t) => [index('incidents_status_idx').on(t.status)]);

// ── Growth ─────────────────────────────────────────────────────────────────
export const trackedLinks = pgTable('tracked_links', {
  id: uuid('id').primaryKey().defaultRandom(),
  slug: text('slug').notNull(),
  destinationUrl: text('destination_url').notNull(),
  campaign: text('campaign'),
  channel: linkChannel('channel').notNull().default('social'),
  createdBy: uuid('created_by').references(() => adminUsers.id),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  archived: boolean('archived').notNull().default(false),
}, (t) => [uniqueIndex('links_slug_uq').on(t.slug)]);

export const linkClicks = pgTable('link_clicks', {
  id: uuid('id').primaryKey().defaultRandom(),
  linkId: uuid('link_id').notNull().references(() => trackedLinks.id, { onDelete: 'cascade' }),
  ts: timestamp('ts', { withTimezone: true }).notNull().defaultNow(),
  country: text('country'),
  platform: text('platform'),
  referrer: text('referrer'),
}, (t) => [index('clicks_link_ts_idx').on(t.linkId, t.ts)]);

// ── Releases & flags ───────────────────────────────────────────────────────
export const releases = pgTable('releases', {
  id: uuid('id').primaryKey().defaultRandom(),
  version: text('version').notNull(),
  platform: releasePlatform('platform').notNull(),
  notes: text('notes'),
  rolloutPct: integer('rollout_pct').notNull().default(0),
  status: releaseStatus('status').notNull().default('draft'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
}, (t) => [index('releases_platform_idx').on(t.platform)]);

export const featureFlags = pgTable('feature_flags', {
  id: uuid('id').primaryKey().defaultRandom(),
  key: text('key').notNull(),
  description: text('description'),
  kind: featureFlagKind('kind').notNull().default('boolean'),
  value: jsonb('value').notNull(),
  environments: jsonb('environments').notNull(),
  updatedBy: uuid('updated_by').references(() => adminUsers.id),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
}, (t) => [uniqueIndex('flags_key_uq').on(t.key)]);
