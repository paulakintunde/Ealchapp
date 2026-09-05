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
// 'paystack' (Phase 10, CF-15 reconciliation): the Africa-PPP web-checkout
// seam. RevenueCat cannot route Paystack, so a paystack row is written by its
// own checkout path, never by the RevenueCat webhook.
export const subStore = pgEnum('sub_store', ['app_store', 'play', 'stripe', 'paystack']);
export const subStatus = pgEnum('sub_status', ['active', 'trialing', 'past_due', 'canceled', 'refunded']);
export const paymentKind = pgEnum('payment_kind', ['charge', 'refund']);
// One-time products (Phase 10/11). The $39 exam tier is deliberately NOT a
// sub_plan value: a one-off purchase has no renewal lifecycle, and modeling it
// as a plan would hand it dunning/churn semantics it does not have. The app's
// PLANS list (progress-schema.ts) therefore stays free|monthly|annual, and the
// exam grant travels as the 'examiner' feature on the entitlement.
export const productKind = pgEnum('product_kind', ['exam']);
export const campaignStatus = pgEnum('campaign_status', ['draft', 'scheduled', 'sending', 'sent', 'paused']);
export const sendStatus = pgEnum('send_status', ['queued', 'delivered', 'opened', 'failed']);
// 'lesson' — a rich, sectioned lesson document (ealch-v2/src/content/schema.ts: Lesson).
//   A lesson's spoken Den script (ealch-v2/src/content/schema.ts: LessonNarration)
//   lives inside this same row's jsonb `body`, as `body.narration` — it is a
//   property of the lesson document, not a document of its own, so it needs no
//   separate kind or table.
// 'vocabulary' — a themed PACK of corpus items, reviewed as one unit of work.
//   Nobody reviews 8000 vocabulary rows one at a time, so the pack is the document
//   a human approves; the rows themselves live in content_items.
// 'playlist' — a listening set (ealch-v2/src/content/schema.ts: Playlist).
// 'template' — a reusable authoring pattern (ealch-v2/src/content/schema.ts:
//   ContentTemplate) that a generation job references instead of reinventing.
// 'speak_stage' — one station on the Speak trail (ealch-v2/src/content/
//   schema.ts: SpeakStage), body = the stage JSON, slug = 'speak.<world>.<seq>'.
export const contentKind = pgEnum('content_kind', [
  'scenario', 'drill', 'dictation', 'curriculum_unit', 'lesson', 'vocabulary', 'playlist', 'template', 'speak_stage',
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
//
// 'c2' is here and is NOT in the app's LEVELS. That asymmetry is deliberate and
// permanent: we author no c2 content, but Postgres has no safe way to drop an
// enum value (it means recreating the type and rewriting every dependent column)
// and doing that for a value no row uses is pure downtime risk. So the value
// stays reachable in the type and is forbidden at two other gates instead — the
// items_level_not_c2 CHECK below (drizzle/0004) stops an author writing it, and
// the app's validateCorpus stops it shipping. Asserted by ealch-v2's
// enum-parity.test.ts, which requires the difference to be exactly c2.
export const contentLevel = pgEnum('content_level', ['sons', 'a1', 'a2', 'b1', 'b2', 'c1', 'c2']);
export const itemKind = pgEnum('item_kind', ['word', 'phrase', 'sentence']);
export const itemGender = pgEnum('item_gender', ['m', 'f']);
export const drillKind = pgEnum('drill_kind', [
  'flashcard', 'voiceflash', 'dictation', 'sentence', 'roleplay', 'review',
  // Append-only. These values ship inside cached OTA snapshots on real installs,
  // so a rename silently empties every deck built from an old cache.
  'playlist', 'exam',
]);

// How an item is exercised. Recognising 'la gare' and producing it from 'the
// station' are different memories with different decay curves, so the SRS keys
// on (item, modality) rather than item alone.
export const modality = pgEnum('modality', ['recognise', 'produce', 'discriminate']);
// Saying 'tu fous quoi ?' to a border officer is grammatically perfect and a
// social catastrophe. Register is content, not a note.
export const register = pgEnum('register', ['familier', 'courant', 'soutenu']);
/** Canada-first launch set only — no bare 'tef'/'tcf'/'delf' and no 'dalf':
 *  each value is a specific paper a candidate actually sits. */
export const examFormat = pgEnum('exam_format', ['delf_b2', 'tef_canada', 'tcf_canada']);
/** Task TYPES an exam paper is built from — finer than examSkill because one
 *  skill can be tested by more than one task shape (PO has a monologue and an
 *  interaction task; PE has a short and an essay task). Not examSkill — see
 *  the mapping note on EXAM_SKILLS in ealch-v2/src/content/schema.ts. */
export const examTaskType = pgEnum('exam_task_type', [
  'co_mcq', 'ce_mcq', 'po_monologue', 'po_interaction', 'pe_short', 'pe_essay',
]);
/** The per-ITEM exam taxonomy: compréhension/production × orale/écrite. */
export const examSkill = pgEnum('exam_skill', ['CO', 'CE', 'PO', 'PE']);
/** Themed-flashcard card types. 'vocab' is the plain fr/en flip pair; the rest
 *  are prompt-front cards (gapped sentence, conjugation cue, erroneous
 *  sentence, rule trigger, register cue). Mirrors CARD_TYPES in
 *  ealch-v2/src/content/schema.ts — parity-tested there. */
export const cardType = pgEnum('card_type', ['vocab', 'gapfill', 'conjugation', 'error', 'grammar', 'register']);
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
  // Free text, not an enum, on purpose: it must hold USD/EUR/GBP/CAD today and
  // NGN the day the Paystack PPP tier ships, without a migration. Default was
  // 'EUR' — corrected to 'USD' (Phase 10): USD is the canonical pricing row
  // (src/content/pricing.ts) every other currency derives from.
  currency: text('currency').notNull().default('USD'),
  kind: paymentKind('kind').notNull().default('charge'),
  status: text('status').notNull().default('paid'),
  occurredAt: timestamp('occurred_at', { withTimezone: true }).notNull().defaultNow(),
}, (t) => [
  index('payments_sub_idx').on(t.subscriptionId),
  index('payments_occurred_idx').on(t.occurredAt),
]);

// One-time product purchases (the Phase 11 exam tier). A row here is a grant
// of that product's entitlement feature; refund/revocation flips `status`
// rather than deleting the row, so the audit trail survives. Fed by the
// RevenueCat webhook (or the Paystack path) exactly like `subscriptions` — a
// mirror for BI, never read by the client to grant access.
export const productPurchases = pgTable('product_purchases', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  product: productKind('product').notNull(),
  store: subStore('store').notNull().default('app_store'),
  amountCents: integer('amount_cents').notNull().default(0),
  currency: text('currency').notNull().default('USD'),
  status: text('status').notNull().default('paid'),
  occurredAt: timestamp('occurred_at', { withTimezone: true }).notNull().defaultNow(),
}, (t) => [
  index('product_purchases_user_idx').on(t.userId),
  index('product_purchases_product_idx').on(t.product),
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
  /** Workstream 3 Phase 5 — a future publish time this pack is queued for.
   *  Distinct from `status`: a scheduled pack still reads 'in_review' until
   *  the scheduler actually flips it, so "approved, timed" and "approved,
   *  live" stay two different, honest states. Null means not scheduled. */
  scheduledPublishAt: timestamp('scheduled_publish_at', { withTimezone: true }),
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
  /** English-friendly pronunciation respelling shown on the card front under
   *  the IPA ("bonjour" -> "bohn-ZHOOR"). Mirrors the app's Item.respell. */
  respell: text('respell'),
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
  /** Storage-relative path (CF-24) — uncaps Voice Flash past the five built-in
   *  glyphs. Mirrors the app's `Item.imageRef`; was present on the app side
   *  since Phase 1 but missing here until now. */
  imageRef: text('image_ref'),
  /** `AudioSegment[]` — where the words are inside `audioRef` (La Dictée's
   *  segment map). Mirrors the app's `Item.segments`; same gap as imageRef,
   *  closed here for the listen-write authoring view (Phase 2). */
  segments: jsonb('segments'),
  /** hash(script+voice+provider+renderVersion) — see the app's `AssetKeyed`. */
  assetKey: text('asset_key'),
  version: integer('version').notNull().default(1),

  // ── The exam/SRS spine ──
  // All nullable, because the ~2k rows already published have none of them and a
  // NOT NULL would need a backfill this migration cannot invent. The app's
  // schema.ts keeps the matching fields optional for the same reason. They
  // become required on both sides together, once a real backfill has run.
  /** CO/CE/PO/PE — the exam taxonomy. Not the lesson-practice skill. */
  skill: examSkill('skill'),
  register: register('register'),
  /** The can-do this item serves, in the learner's words. */
  canDo: text('can_do'),
  /** 'passe-compose', 'subjonctif-present'. text[], not an enum: the grammar
   *  point list is long, open, and edited by content people rather than by a
   *  migration. */
  grammarPoints: text('grammar_points').array().notNull().default([]),
  /** How the item is exercised. The SRS keys on (item, modality). */
  modality: modality('modality'),
  /** Themed-flashcard deck type. Nullable like the rest of the spine — NULL
   *  means 'vocab', the pair every pre-cardType row already is. */
  cardType: cardType('card_type'),
  /** The card front for non-vocab card types; `fr` stays the answer. The app
   *  validator requires it whenever cardType is present and not 'vocab'. */
  prompt: text('prompt'),
  /** { infinitive, tense, mood?, person, number } — the deterministic French
   *  gate target (Phase 2.D). jsonb, not columns: it is checked by a Python
   *  conjugator in the publish path, never queried by SQL. Nullable/optional
   *  exactly like the rest of this spine. */
  verbCheck: jsonb('verb_check'),

  status: contentStatus('status').notNull().default('draft'),
  publishedAt: timestamp('published_at', { withTimezone: true }),
  /** Workstream 3 Phase 5 — see the note on content_units.scheduledPublishAt;
   *  same contract, item-level. */
  scheduledPublishAt: timestamp('scheduled_publish_at', { withTimezone: true }),

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

/**
 * Every content snapshot ever published. The canonical version counter.
 *
 * The DB is the source of truth, so the version lives here rather than being
 * inferred from whatever happens to be sitting in Storage. This table answers
 * the question an ops console must be able to answer: "what content is live
 * right now, who published it, and when."
 *
 * `checksum` is the sha256 of the exact bytes uploaded. It is what lets the app
 * (and a reviewer) prove the snapshot it downloaded is the snapshot that was
 * approved, and it is what makes the committed seed.json verifiable rather than
 * merely plausible.
 */
export const contentSnapshots = pgTable('content_snapshots', {
  version: integer('version').primaryKey(),
  /** Path within the public `content` Storage bucket. */
  path: text('path').notNull(),
  checksum: text('checksum').notNull(),
  /** { units, lessons, items } — what the snapshot contains. */
  counts: jsonb('counts').notNull(),
  /** { units, lessons, items } — what of it was cut into the bundled seed. */
  seedCounts: jsonb('seed_counts'),
  publishedBy: uuid('published_by').references(() => adminUsers.id),
  publishedAt: timestamp('published_at', { withTimezone: true }).notNull().defaultNow(),
}, (t) => [index('snapshots_published_idx').on(t.publishedAt)]);

/**
 * One rendered audio clip per (item, voice). The Storage-backed registry the
 * app's clip cache resolves against — same contract as content_snapshots: the
 * DB row is the truth about what audio is live, `path` locates the bytes in
 * the public `content` bucket, and `checksum` (sha256 of the exact uploaded
 * bytes) is what lets the app prove the clip it downloaded is the clip that
 * was published, not a truncated or tampered file.
 *
 * `itemId` is the TEXT corpus key ('fr.a1.cafe.001'), not a uuid — audio hangs
 * off the same stable public id the SRS and attempt log key on, and it dies
 * with the item. `voiceId` names the rendered voice (a device voice id today,
 * an Azure/Camille voice name in Phase 7); one item may carry clips in several
 * voices, hence the composite uniqueness rather than item-unique.
 */
export const audioAssets = pgTable('audio_assets', {
  id: uuid('id').primaryKey().defaultRandom(),
  itemId: text('item_id').notNull().references(() => contentItems.id, { onDelete: 'cascade' }),
  /** Path within the public `content` Storage bucket. */
  path: text('path').notNull(),
  /** sha256 of the exact bytes uploaded. */
  checksum: text('checksum').notNull(),
  voiceId: text('voice_id').notNull(),
  /** Clip length. Nullable: known only after a render pipeline measures it. */
  durationMs: integer('duration_ms'),
  publishedBy: uuid('published_by').references(() => adminUsers.id, { onDelete: 'set null' }),
  publishedAt: timestamp('published_at', { withTimezone: true }).notNull().defaultNow(),
}, (t) => [
  index('audio_assets_item_idx').on(t.itemId),
  uniqueIndex('audio_assets_item_voice_uq').on(t.itemId, t.voiceId),
]);

/**
 * One task off one exam paper — a TCF listening question, a DELF B1 speaking
 * prompt. Atomic and relational, deliberately NOT a content_units jsonb body:
 * the Phase 2.A architecture decision keeps "atomic entities (items, exam
 * tasks)" relational so the studio can query across them (e.g. "every open
 * B2 task missing a rubric") without loading a monolith document per row.
 * Mirrors ealch-v2/src/content/schema.ts's ExamTask exactly — see the note
 * atop content_items about the two-file invariant this table is also bound by.
 */
export const contentExamTasks = pgTable('content_exam_tasks', {
  /** 'exam.<format>.<variant>.<taskType>.<seq>' — exam.tcf_canada.2024a.co_mcq.001 */
  id: text('id').primaryKey(),
  format: examFormat('format').notNull(),
  variant: text('variant').notNull(),
  taskType: examTaskType('task_type').notNull(),
  /** Derived from taskType (examTaskSkill in ealch-v2 schema.ts) and
   *  validated to agree with it app-side; stored because SRS decomposition
   *  and due-skill grouping key off it directly. */
  skill: examSkill('skill').notNull(),
  /** A SCORE band (user_level), not a content level — c2 is a legitimate
   *  exam result even though no c2 CONTENT is ever authored. */
  level: userLevel('level').notNull(),
  /** Which published exam format this task was written against
   *  ('tcf-2024.1') — required, so a format change marks old tasks STALE
   *  rather than silently wrong. See the note on ExamTask.formatVersion. */
  formatVersion: text('format_version').notNull(),
  prompt: text('prompt').notNull(),
  /** What the candidate sees as this task's name: 'Section A', 'Tâche 2'.
   *  Deliberately free text and NOT an enum: the label belongs to the paper
   *  ("Tâche 2" means different things on TCF and DELF) while task_type
   *  belongs to the engine, and enum values ship inside cached snapshots
   *  where they can never be changed. */
  label: text('label'),
  /** QcmItem[] — closed task types (co_mcq/ce_mcq) only, for a task with ONE
   *  stimulus. A task with several uses `parts` instead; carrying both is
   *  rejected app-side by validateExamTask. */
  items: jsonb('items'),
  /** ExamPart[] — closed task types only, the several-stimuli shape. A TEF
   *  listening épreuve is forty questions across roughly thirty separate
   *  recordings, each with its own audio, play count and reading window;
   *  flattening those into `items` loses the only structure that makes it a
   *  listening test. Mutually exclusive with `items`. */
  parts: jsonb('parts'),
  /** Seconds of silent preparation before the answer clock starts. PO only:
   *  TEF EO Section A gives two minutes with the advert, and a task that
   *  skips that is not the same task. Checked app-side by validateExamTask. */
  prepS: integer('prep_s'),
  /** ExamInterlocutor — REQUIRED for po_interaction, forbidden elsewhere. The
   *  recorded examiner's answer bank: every entry is a fact the document
   *  withholds, and which ones the candidate obtained is the coverage the
   *  grader marks against. An interaction with nothing to interact with is a
   *  monologue. */
  interlocutor: jsonb('interlocutor'),
  responseSpec: jsonb('response_spec'),
  /** Rubric — REQUIRED for open task types, checked app-side by
   *  validateExamTask, not by a DB constraint (the same rule two other
   *  fields below share, for the same reason: the check is about the pair,
   *  not either column alone). */
  rubric: jsonb('rubric'),
  modelAnswer: text('model_answer'),
  examinerNotes: text('examiner_notes').array().notNull().default([]),
  /** Seconds allowed. An exam task without a clock is a worksheet. */
  timingS: integer('timing_s').notNull(),
  scoringMap: jsonb('scoring_map'),
  /** Closed task types only — which content_items rows a miss decomposes
   *  into. Resolved app-side by validateCorpus, same "id array, not a join
   *  table" pattern taskIds below already uses. */
  targetItemIds: text('target_item_ids').array().notNull().default([]),

  status: contentStatus('status').notNull().default('draft'),
  publishedAt: timestamp('published_at', { withTimezone: true }),

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
  index('exam_tasks_status_idx').on(t.status),
  index('exam_tasks_format_variant_idx').on(t.format, t.variant),
]);

/** A full mock sitting: four épreuves, in order. Mirrors ealch-v2's
 *  ExamPaper. Renamed from content_exam_series, which named one paper as
 *  though it were several. */
export const contentExamPapers = pgTable('content_exam_papers', {
  /** 'paper.<format>.<variant>.<n>' — paper.tcf_canada.2024a.1, n in 1..20. */
  id: text('id').primaryKey(),
  format: examFormat('format').notNull(),
  variant: text('variant').notNull(),
  /** 1..20 — PARALLEL mock papers per variant. "Parallel," never "equated":
   *  difficulty is expert-judged, not psychometrically balanced from sitting
   *  data. Was capped at 5, which could not express the twenty papers per
   *  format the Examiner is built for. */
  paperNo: integer('paper_no').notNull(),
  /** ExamSection[] — exactly four, skills ordered CO, CE, PE, PO, each with
   *  its own ordered task_ids, its own clock and its own blueprint id.
   *
   *  Replaces a flat `task_ids` column. The four-section rule is what makes a
   *  row an EXAM rather than a bag of tasks, and it is enforced app-side by
   *  validateExamPaper rather than by a DB constraint (it is a rule about the
   *  shape of the whole array, which no column check can express).
   *
   *  Note the third skill is 'PE', not 'EE': the épreuve a candidate calls
   *  expression écrite carries the skill production écrite. */
  sections: jsonb('sections').notNull().default([]),
  status: contentStatus('status').notNull().default('draft'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
}, (t) => [index('exam_papers_format_variant_idx').on(t.format, t.variant)]);

/**
 * The curriculum catalogue's top of the tree — mirrors ealch-v2's Domain.
 * Small, list-like reference data (15 rows at full scope per the locked
 * THEME-CATALOGUE-AND-ARCHITECTURE.md catalogue), so a dedicated table
 * rather than a content_units document: nothing about a domain is ever
 * drafted/reviewed/published, it just exists or doesn't.
 */
export const contentDomains = pgTable('content_domains', {
  /** Domain.slug IS the id — domains have no separate surrogate key,
   *  matching how the app reads them (Theme.domain references this slug
   *  directly, never a uuid). */
  slug: text('slug').primaryKey(),
  title: text('title').notNull(),
  /** Display order — reorderable without renaming anything that points at it. */
  order: integer('order').notNull(),
});

/** Mirrors ealch-v2's Theme. `domain` is a real FK to content_domains.slug,
 *  not just a string the app cross-checks — the console should not be able
 *  to save a theme pointing at a domain that does not exist, the exact
 *  dangling reference validateCorpus otherwise catches too late to fix
 *  cheaply. */
export const contentThemes = pgTable('content_themes', {
  slug: text('slug').primaryKey(),
  title: text('title').notNull(),
  domain: text('domain').notNull().references(() => contentDomains.slug),
  /** Inclusive band range this theme is teachable across — two columns, not
   *  a jsonb tuple, so "every b1 theme" is a plain WHERE clause. */
  levelRangeLo: contentLevel('level_range_lo').notNull(),
  levelRangeHi: contentLevel('level_range_hi').notNull(),
  examFlag: boolean('exam_flag').notNull().default(false),
  immigFlag: boolean('immig_flag').notNull().default(false),
  /** Finer cuts within the theme, for generation batching. May be empty. */
  subThemes: text('sub_themes').array().notNull().default([]),
}, (t) => [index('themes_domain_idx').on(t.domain)]);

/**
 * The managed tag taxonomy (Workstream 3 Phase 5). `Item.tags` stays
 * `text[]` storage-side — this table doesn't change that shape, it turns
 * the admin's tag INPUT from free text into pick-from-list, the same way
 * KIND_META/ITEM_STATUS_META make a value list exhaustive by construction
 * instead of typo-prone. `weakSkill` is the handle the SRS weak-spots
 * feature (home.tsx's topWeaknesses) keys on, when a tag names one.
 */
export const contentTags = pgTable('content_tags', {
  slug: text('slug').primaryKey(),
  label: text('label').notNull(),
  weakSkill: text('weak_skill'),
});

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
  /** Human display label ("Claude Sonnet 4.5") — NOT necessarily what a
   *  provider's API accepts as `model`. See apiModelId. */
  name: text('name').notNull(),
  provider: text('provider').notNull(),
  /** The literal string sent as `model` in the provider's request body
   *  ("claude-sonnet-5", "qwen/qwen3-235b-a22b"). Nullable and falls back to
   *  `name` when absent (Workstream 4's routing.ts) — every pre-existing
   *  row (general/audio, seeded as display-only mock data before any real
   *  call path read this table) has no apiModelId and keeps working exactly
   *  as before; only rows meant to be ACTUALLY CALLED need to set this. */
  apiModelId: text('api_model_id'),
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
