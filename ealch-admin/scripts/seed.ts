// Ealch Ops Console — seed script (`pnpm db:seed`, runs via tsx).
//
// Connects the same dual way scripts/migrate.ts does:
//   DATABASE_URL set  → node-postgres
//   otherwise         → embedded PGlite at PGLITE_DIR ?? '.data/pglite'
//
// IDEMPOTENT: wipes every table first (children before parents), then reseeds.
// DETERMINISTIC: all randomness comes from a mulberry32 PRNG with a fixed seed
// (no Math.random), so distributions/counts are stable across reruns. Times are
// anchored to `new Date()` at run time so "today"/"2 min ago" always renders.
//
// DESTRUCTIVE. It deletes before it writes — content_units, content_revisions,
// content_flags and admin_users among them. It is a DEMO seeder: it inserts four
// fictional admins (marc@ealch.app and friends), so running it against production
// would destroy the real admin account along with the real content.
//
// './env' MUST be imported first (see scripts/env.ts). Before that fix this
// script never saw DATABASE_URL and quietly wiped a throwaway PGlite database
// instead — which is the only reason it never destroyed production. Loading .env
// correctly arms it, so assertDestructiveAllowed() is the brake that ships with it.
import './env';
import { assertDestructiveAllowed, describeTarget } from './env';
import * as schema from '../src/db/schema';
import bcrypt from 'bcryptjs';

type DB = ReturnType<typeof import('drizzle-orm/node-postgres').drizzle<typeof schema>>;

// ── Deterministic PRNG ──────────────────────────────────────────────────────
function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rnd = mulberry32(0x0ea1c4ed);
const int = (a: number, b: number) => a + Math.floor(rnd() * (b - a + 1)); // inclusive
const pick = <T>(arr: readonly T[]): T => arr[Math.floor(rnd() * arr.length)];
const chance = (p: number) => rnd() < p;
function weighted<T>(pairs: readonly (readonly [T, number])[]): T {
  const total = pairs.reduce((s, [, w]) => s + w, 0);
  let r = rnd() * total;
  for (const [v, w] of pairs) {
    r -= w;
    if (r <= 0) return v;
  }
  return pairs[pairs.length - 1][0];
}
function shuffle<T>(arr: T[]): T[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
/** Deterministic v4-format UUID from the PRNG (stable across reruns). */
function uuid(): string {
  const b = new Uint8Array(16);
  for (let i = 0; i < 16; i++) b[i] = Math.floor(rnd() * 256);
  b[6] = (b[6] & 0x0f) | 0x40;
  b[8] = (b[8] & 0x3f) | 0x80;
  const h = Array.from(b, (x) => x.toString(16).padStart(2, '0')).join('');
  return `${h.slice(0, 8)}-${h.slice(8, 12)}-${h.slice(12, 16)}-${h.slice(16, 20)}-${h.slice(20)}`;
}

// ── Time helpers (anchored to run time) ─────────────────────────────────────
const NOW = new Date();
const MIN = 60_000;
const DAY = 86_400_000;
const minutesAgo = (m: number) => new Date(NOW.getTime() - m * MIN);
const daysAgo = (d: number) => new Date(NOW.getTime() - d * DAY);
const between = (a: Date, b: Date) => new Date(a.getTime() + rnd() * (b.getTime() - a.getTime()));
const todayMidnight = new Date(NOW.getFullYear(), NOW.getMonth(), NOW.getDate());

// ── Fixed TOTP secrets (generated ONCE at authoring time via otplib
//    generateSecret(); hardcoded so tests can compute valid codes) ───────────
const ADMINS = [
  { name: 'Marc Beaumont', email: 'marc@ealch.app', role: 'super_admin', totp: 'CT5H7H335HFZFMFB7NPEKH7RFP2PM3M7', lastLoginH: 2 },
  { name: 'Léa Fontaine', email: 'ops@ealch.app', role: 'ops', totp: '3HKLKJ2ZTWV5QWK4CK7Q6M5F4PVJZM7L', lastLoginH: 26 },
  { name: 'Sam Carter', email: 'support@ealch.app', role: 'support', totp: 'SWU3POH5RZGMQMQJXLKA2FO4LAVSLA3G', lastLoginH: 70 },
  { name: 'Lena Vogel', email: 'editor@ealch.app', role: 'content_editor', totp: '3BWQGNJGBCDFP5VNNQ4L65FHM46OAAKD', lastLoginH: 20 },
] as const;
const otpauthUri = (email: string, secret: string) =>
  `otpauth://totp/${encodeURIComponent('Ealch Ops')}:${encodeURIComponent(email)}?secret=${secret}&issuer=${encodeURIComponent('Ealch Ops')}`;

// ── Name pools (faker not installed; deterministic sampling instead) ────────
const FIRST = [
  'Emma', 'Liam', 'Olivia', 'Noah', 'Ava', 'Lucas', 'Mia', 'Ethan', 'Chloé', 'Hugo',
  'Léa', 'Louis', 'Manon', 'Jules', 'Camille', 'Arthur', 'Inès', 'Gabriel', 'Zoé', 'Raphaël',
  'Sophie', 'Felix', 'Hannah', 'Jonas', 'Marie', 'Ben', 'Lena', 'Paul', 'Anna', 'Max',
  'Grace', 'Oliver', 'Amelia', 'Harry', 'Isla', 'Jack', 'Poppy', 'George', 'Freya', 'Oscar',
  'Lucía', 'Mateo', 'Sofía', 'Diego', 'Valentina', 'Álvaro', 'Martina', 'Pablo', 'Carmen', 'Javier',
  'Nora', 'Ryan', 'Madison', 'Tyler', 'Avery', 'Jordan', 'Harper', 'Dylan', 'Quinn', 'Austin',
] as const;
const LAST = [
  'Martin', 'Bernard', 'Dubois', 'Thomas', 'Robert', 'Richard', 'Petit', 'Durand', 'Leroy', 'Moreau',
  'Müller', 'Schmidt', 'Schneider', 'Fischer', 'Weber', 'Meyer', 'Wagner', 'Becker', 'Hoffmann', 'Koch',
  'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis', 'Wilson', 'Taylor', 'Clark',
  'García', 'Rodríguez', 'Fernández', 'López', 'Martínez', 'Sánchez', 'Pérez', 'Gómez', 'Díaz', 'Ruiz',
  'Tremblay', 'Gagnon', 'Roy', 'Côté', 'Bouchard', "O'Brien", 'Murphy', 'Kelly', 'Walsh', 'Byrne',
  'Rossi', 'Ferrari', 'Esposito', 'Bianchi', 'Romano', 'De Jong', 'Jansen', 'Visser', 'Bakker', 'Dekker',
] as const;
const EMAIL_DOMAINS = ['gmail.com', 'yahoo.com', 'outlook.com', 'icloud.com', 'proton.me', 'web.de', 'orange.fr', 'hotmail.com'] as const;
const fold = (s: string) =>
  s.normalize('NFD').replace(/[^a-zA-Z]/g, '').toLowerCase(); // NFD then strip non-letters (drops accents)

const COUNTRIES = [
  ['FR', 27], ['DE', 14], ['US', 16], ['GB', 12], ['ES', 8], ['CA', 6],
  ['IT', 5], ['NL', 4], ['BE', 3], ['CH', 2], ['IE', 2], ['PT', 1],
] as const;
const LEVELS = [['a1', 26], ['a2', 24], ['b1', 20], ['b2', 15], ['c1', 10], ['c2', 5]] as const;
const SCENARIOS = [
  'Au Café', 'Le Marché', 'La Préfecture', 'Le DELF oral', 'Chez le Médecin',
  'La Boulangerie', 'Le Rendez-vous Banque', 'Les Voisins', 'Au Restaurant', 'La Gare',
] as const;
const MISTAKE_POOL = [
  { type: 'liaison', item: 'un⁀allongé' },
  { type: 'liaison', item: 'les⁀amis' },
  { type: 'gender', item: 'le boulangerie → la boulangerie' },
  { type: 'conjugation', item: 'je peux → je puisse (subjonctif)' },
  { type: 'vocab', item: 'monnaie vs argent' },
  { type: 'pronunciation', item: 'grenouille /ɡʁənuj/' },
  { type: 'pronunciation', item: 'préfecture — nasal /ɛ̃/' },
  { type: 'conjugation', item: 'passé composé — être vs avoir' },
] as const;

// ── Chunked insert helper ───────────────────────────────────────────────────
async function insertChunks<T>(label: string, rows: T[], fn: (batch: T[]) => Promise<unknown>) {
  for (let i = 0; i < rows.length; i += 500) await fn(rows.slice(i, i + 500));
  counts[label] = (counts[label] ?? 0) + rows.length;
}
const counts: Record<string, number> = {};

async function main() {
  const t0 = Date.now();

  // Say what we are about to destroy, and where. Then refuse, unless the
  // operator has said out loud that they mean it. This runs BEFORE we connect:
  // a destructive script must not even open a socket to a database it should
  // not be touching.
  console.log(`→ ${describeTarget()}`);
  assertDestructiveAllowed('db:seed (DESTRUCTIVE — deletes before it writes)');

  // Connect — mirrors scripts/migrate.ts
  let d: DB;
  let close: () => Promise<void>;
  if (process.env.DATABASE_URL) {
    const { drizzle } = await import('drizzle-orm/node-postgres');
    const { Pool } = await import('pg');
    const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
    d = drizzle(pool, { schema });
    close = () => pool.end();
  } else {
    const { drizzle } = await import('drizzle-orm/pglite');
    const { PGlite } = await import('@electric-sql/pglite');
    const { mkdirSync } = await import('node:fs');
    const dir = process.env.PGLITE_DIR ?? '.data/pglite';
    mkdirSync(dir, { recursive: true }); // PGlite's own mkdir is non-recursive
    const client = new PGlite(dir);
    d = drizzle(client, { schema }) as unknown as DB;
    close = () => client.close();
  }

  // ── Wipe (children before parents; idempotent reseed) ────────────────────
  console.log('Wiping existing rows…');
  await d.delete(schema.notifSends);
  await d.delete(schema.notifCampaigns);
  await d.delete(schema.notifTemplates);
  await d.delete(schema.linkClicks);
  await d.delete(schema.trackedLinks);
  await d.delete(schema.contentFlags);
  await d.delete(schema.contentRevisions);
  await d.delete(schema.contentUnits);
  await d.delete(schema.aiRouting);
  await d.delete(schema.aiModels);
  await d.delete(schema.aiCapabilities);
  await d.delete(schema.payments);
  await d.delete(schema.subscriptions);
  await d.delete(schema.learningSessions);
  await d.delete(schema.events);
  await d.delete(schema.userStats);
  await d.delete(schema.metrics);
  await d.delete(schema.incidents);
  await d.delete(schema.releases);
  await d.delete(schema.featureFlags);
  await d.delete(schema.auditLog);
  await d.delete(schema.settings);
  await d.delete(schema.users);
  await d.delete(schema.adminUsers);

  // ── Admin users ───────────────────────────────────────────────────────────
  const passwordHash = bcrypt.hashSync('admin1234', 10);
  const adminRows = ADMINS.map((a) => ({
    id: uuid(),
    email: a.email,
    name: a.name,
    passwordHash,
    role: a.role,
    totpSecret: a.totp,
    createdAt: daysAgo(400 + int(0, 60)),
    lastLoginAt: minutesAgo(a.lastLoginH * 60 + int(0, 40)),
  })) satisfies (typeof schema.adminUsers.$inferInsert)[];
  await insertChunks('admin_users', adminRows, (b) => d.insert(schema.adminUsers).values(b));
  const [marc, lea, sam, lena] = adminRows;

  // ── Settings ──────────────────────────────────────────────────────────────
  await insertChunks(
    'settings',
    [{
      key: 'maintenance_mode',
      value: { enabled: false, message: 'Scheduled maintenance — back shortly.' },
      updatedBy: marc.id,
      updatedAt: daysAgo(12),
    }] satisfies (typeof schema.settings.$inferInsert)[],
    (b) => d.insert(schema.settings).values(b),
  );

  // ── End users (2,000) ─────────────────────────────────────────────────────
  const N_USERS = 2000;
  const NEW_TODAY = 318; // "new today" KPI
  // Status pool for the non-new-today users
  const statusPool: (typeof schema.userStatus.enumValues)[number][] = [];
  statusPool.push('banned', 'banned', 'banned');
  for (let i = 0; i < 8; i++) statusPool.push('deleted');
  for (let i = 0; i < 412; i++) statusPool.push('churn_risk');
  for (let i = 0; i < 60; i++) statusPool.push('trial');
  while (statusPool.length < N_USERS - NEW_TODAY) statusPool.push('active');
  shuffle(statusPool);

  const usedEmails = new Set<string>();
  const userRows: (typeof schema.users.$inferInsert & { id: string })[] = [];
  for (let i = 0; i < N_USERS; i++) {
    const first = pick(FIRST);
    const last = pick(LAST);
    let email = `${fold(first)}.${fold(last)}@${pick(EMAIL_DOMAINS)}`;
    if (usedEmails.has(email)) email = `${fold(first)}.${fold(last)}${int(2, 9999)}@${pick(EMAIL_DOMAINS)}`;
    if (usedEmails.has(email)) email = `${fold(first)}.${fold(last)}.${i}@${pick(EMAIL_DOMAINS)}`;
    usedEmails.add(email);

    const isNewToday = i < NEW_TODAY;
    const status = isNewToday ? (chance(0.3) ? 'trial' : 'active') : statusPool[i - NEW_TODAY];
    const createdAt = isNewToday
      ? between(todayMidnight, NOW)
      : daysAgo(1 + Math.pow(rnd(), 1.15) * 729); // spread over 24 months, skewed recent
    let lastSeenAt: Date | null;
    switch (status) {
      case 'churn_risk': lastSeenAt = daysAgo(14 + rnd() * 31); break;
      case 'banned': lastSeenAt = daysAgo(10 + rnd() * 50); break;
      case 'deleted': lastSeenAt = chance(0.5) ? null : daysAgo(60 + rnd() * 200); break;
      case 'trial': lastSeenAt = minutesAgo(rnd() * 3 * 24 * 60); break;
      default: // active — long tail, many seen very recently
        lastSeenAt = minutesAgo(Math.pow(rnd(), 2.2) * 10 * 24 * 60);
    }
    if (isNewToday) lastSeenAt = between(createdAt, NOW);
    if (lastSeenAt && lastSeenAt < createdAt) lastSeenAt = between(createdAt, NOW);

    userRows.push({
      id: uuid(),
      email,
      displayName: `${first} ${last}`,
      locale: chance(0.85) ? 'en' : 'fr',
      level: weighted(LEVELS),
      platform: chance(0.55) ? 'ios' : 'android',
      country: weighted(COUNTRIES),
      status,
      createdAt,
      lastSeenAt,
    });
  }
  await insertChunks('users', userRows, (b) => d.insert(schema.users).values(b));

  // ── user_stats (every user) ───────────────────────────────────────────────
  const bigStreakIdx = new Set<number>();
  while (bigStreakIdx.size < 14) bigStreakIdx.add(int(0, N_USERS - 1)); // a few 100+ streaks
  const statRows = userRows.map((u, i) => {
    const ageDays = Math.max(1, (NOW.getTime() - u.createdAt!.getTime()) / DAY);
    const rate = 0.15 + rnd() * 1.05; // sessions per day of account age
    const sessionsTotal = Math.max(1, Math.round(ageDays * rate));
    const minutesTotal = Math.round(sessionsTotal * (6 + rnd() * 8));
    let streakDays = u.status === 'active' || u.status === 'trial'
      ? Math.floor(-Math.log(1 - rnd()) * 7) // geometric long tail
      : 0;
    if (bigStreakIdx.has(i) && u.status === 'active') streakDays = int(100, 340);
    streakDays = Math.min(streakDays, Math.floor(ageDays));
    return {
      userId: u.id,
      streakDays,
      confidenceScore: int(20, 95),
      sessionsTotal,
      minutesTotal,
      lastSessionAt: u.lastSeenAt,
    };
  }) satisfies (typeof schema.userStats.$inferInsert)[];
  await insertChunks('user_stats', statRows, (b) => d.insert(schema.userStats).values(b));

  // ── Subscriptions ─────────────────────────────────────────────────────────
  // App-wide there are ~7,930 paying of 61,408 users; we seed 2,000 rows and
  // make ~26% paying per the brief (monthly 69% / annual 31% among paying).
  const activeUsers = shuffle(userRows.filter((u) => u.status === 'active'));
  const N_PAYING = 520;
  const payingUsers = activeUsers.slice(0, N_PAYING);
  const subRows: (typeof schema.subscriptions.$inferInsert & { id: string; plan: 'monthly' | 'annual' })[] =
    payingUsers.map((u) => {
      const plan = chance(0.69) ? 'monthly' as const : 'annual' as const;
      const startedAt = between(u.createdAt!, daysAgo(3));
      return {
        id: uuid(),
        userId: u.id,
        plan,
        store: weighted([['app_store', 50], ['play', 32], ['stripe', 18]] as const),
        status: 'active' as (typeof schema.subStatus.enumValues)[number],
        mrrCents: plan === 'monthly' ? 599 : 999, // annual-effective per brief
        startedAt,
        renewsAt: new Date(NOW.getTime() + rnd() * (plan === 'monthly' ? 30 : 365) * DAY),
        canceledAt: null as Date | null,
      };
    });
  // ~14 recent past_due
  for (let i = 0; i < 14; i++) {
    subRows[i].status = 'past_due';
    subRows[i].renewsAt = daysAgo(1 + rnd() * 5);
  }
  // 4 refunded annual subs (full refunds land below in payments)
  const refundedSubs = subRows.slice(14, 18);
  for (const s of refundedSubs) {
    s.plan = 'annual';
    s.mrrCents = 999;
    s.status = 'refunded';
    s.canceledAt = daysAgo(2 + rnd() * 20);
  }
  await insertChunks('subscriptions', subRows, (b) => d.insert(schema.subscriptions).values(b));

  // ── Payments — 12 monthly buckets ramping ~€46K → €86K app-wide, scaled ───
  // SCALE maps app-level revenue to our 2,000-row sample (2000 / 61,408 users
  // ≈ 0.0326), so the Billing chart keeps the mock's 46→86 shape: seeded
  // month totals ramp ~€1,498 → €2,800. Current (partial) month gets its full
  // target so the newest bar reads ~86K-scaled.
  const SCALE = 2000 / 61408;
  const payRows: (typeof schema.payments.$inferInsert)[] = [];
  const monthStart = (offset: number) => new Date(NOW.getFullYear(), NOW.getMonth() - offset, 1);
  for (let m = 0; m < 12; m++) {
    const start = monthStart(11 - m);
    const end = m === 11 ? NOW : monthStart(10 - m);
    const targetCents = Math.round((46000 + (40000 * m) / 11) * 100 * SCALE);
    let sum = 0;
    while (sum < targetCents) {
      const sub = pick(subRows);
      const amount = sub.plan === 'monthly' ? 599 : 9900;
      payRows.push({
        id: uuid(),
        subscriptionId: sub.id,
        amountCents: amount,
        currency: 'EUR',
        kind: 'charge',
        status: 'paid',
        occurredAt: between(start, end),
      });
      sum += amount;
    }
  }
  // Refunds in last 30 days: 4 full annual refunds + 3 partial monthly ones
  // → 4×9900 + 3×599 = 41,397 cents ≈ €412 (mock "Refunds 30d €412").
  const partialRefundSubs = subRows.slice(18, 21);
  const refundTargets = [...refundedSubs, ...partialRefundSubs];
  refundTargets.forEach((s, i) => {
    payRows.push({
      id: uuid(),
      subscriptionId: s.id,
      amountCents: i < 4 ? 9900 : 599,
      currency: 'EUR',
      kind: 'refund',
      status: 'refunded',
      occurredAt: daysAgo(1 + rnd() * 27),
    });
  });
  await insertChunks('payments', payRows, (b) => d.insert(schema.payments).values(b));

  // ── Learning sessions: 3-8 per active user over last 30 days ─────────────
  const sessionRows: (typeof schema.learningSessions.$inferInsert)[] = [];
  for (const u of userRows) {
    if (u.status !== 'active' && u.status !== 'trial') continue;
    if (!u.lastSeenAt || u.lastSeenAt < daysAgo(30)) continue;
    const n = int(3, 8);
    const earliest = u.createdAt! > daysAgo(30) ? u.createdAt! : daysAgo(30);
    for (let i = 0; i < n; i++) {
      const nMistakes = weighted([[0, 30], [1, 38], [2, 22], [3, 10]] as const);
      const mistakes = Array.from({ length: nMistakes }, () => pick(MISTAKE_POOL));
      sessionRows.push({
        id: uuid(),
        userId: u.id,
        scenario: pick(SCENARIOS),
        durationS: int(120, 900),
        confidence: int(40, 95),
        mistakes,
        createdAt: between(earliest, NOW),
      });
    }
  }
  await insertChunks('learning_sessions', sessionRows, (b) => d.insert(schema.learningSessions).values(b));

  // ── Events (~5k over last 30 days) ────────────────────────────────────────
  const EVENT_NAMES = [
    ['session_start', 40], ['lesson_complete', 18], ['signup', 12], ['paywall_view', 8],
    ['notification_open', 6], ['subscription_started', 5], ['streak_repair', 3],
    ['link_click', 4], ['level_up', 2], ['refund', 1], ['content_flagged', 1],
  ] as const;
  const eventRows: (typeof schema.events.$inferInsert)[] = [];
  for (let i = 0; i < 5000; i++) {
    const name = weighted(EVENT_NAMES);
    eventRows.push({
      id: uuid(),
      userId: chance(0.85) ? pick(userRows).id : null,
      name,
      props: name === 'session_start' ? { scenario: pick(SCENARIOS) } : { source: pick(['app', 'push', 'web'] as const) },
      createdAt: daysAgo(rnd() * 30),
    });
  }
  await insertChunks('events', eventRows, (b) => d.insert(schema.events).values(b));

  // ── Notifications ─────────────────────────────────────────────────────────
  const templateRows = [
    {
      id: uuid(), name: 'weekend-challenge', locale: 'en' as const,
      title: 'Weekend challenge is live',
      body: 'Beat 3 scenarios before Sunday night and earn double streak points.',
      deeplink: 'ealch://challenges/weekend', createdBy: lena.id, updatedAt: daysAgo(6),
    },
    {
      id: uuid(), name: 'streak-saver', locale: 'en' as const,
      title: 'Your streak is on the line',
      body: 'One 5-minute session keeps your 12-day streak alive. On y va ?',
      deeplink: 'ealch://session/quick', createdBy: lena.id, updatedAt: daysAgo(14),
    },
    {
      id: uuid(), name: 'new-pack-coffee', locale: 'fr' as const,
      title: 'New pack: Ordering coffee like a local',
      body: 'Nouveau pack A2 : commander un café comme un vrai Parisien. 8 dialogues audio.',
      deeplink: 'ealch://content/ordering-coffee-like-a-local', createdBy: lena.id, updatedAt: daysAgo(3),
    },
    {
      id: uuid(), name: 'winback-7d', locale: 'en' as const,
      title: 'We miss you — 7-day streak repair inside',
      body: 'Come back today and we will restore your streak, no questions asked.',
      deeplink: 'ealch://offers/streak-repair', createdBy: sam.id, updatedAt: daysAgo(9),
    },
  ] satisfies (typeof schema.notifTemplates.$inferInsert)[];
  await insertChunks('notif_templates', templateRows, (b) => d.insert(schema.notifTemplates).values(b));

  const campaignRows = [
    {
      id: uuid(), templateId: templateRows[0].id, name: 'Weekend challenge blast',
      segment: { level: null, plan: 'all', lastSeenDays: null, locale: null },
      scheduleAt: daysAgo(4), status: 'sent' as const, sentCount: 47900, openRate: 0.41, createdBy: lea.id,
    },
    {
      id: uuid(), templateId: templateRows[3].id, name: 'Winback — lapsed 7 days',
      segment: { level: null, plan: 'free', lastSeenDays: 7, locale: 'en' },
      scheduleAt: daysAgo(11), status: 'sent' as const, sentCount: 11800, openRate: 0.19, createdBy: sam.id,
    },
    {
      id: uuid(), templateId: templateRows[2].id, name: 'New pack — coffee (FR beta)',
      segment: { level: 'a2', plan: 'all', lastSeenDays: 30, locale: 'fr' },
      scheduleAt: null, status: 'draft' as const, sentCount: 0, openRate: null, createdBy: lena.id,
    },
  ] satisfies (typeof schema.notifCampaigns.$inferInsert)[];
  await insertChunks('notif_campaigns', campaignRows, (b) => d.insert(schema.notifCampaigns).values(b));

  const sendRows: (typeof schema.notifSends.$inferInsert)[] = [];
  const sendSpec = [
    { campaign: campaignRows[0], n: 300, openRate: 0.41, at: daysAgo(4) },
    { campaign: campaignRows[1], n: 160, openRate: 0.19, at: daysAgo(11) },
  ];
  for (const { campaign, n, openRate, at } of sendSpec) {
    for (let i = 0; i < n; i++) {
      const r = rnd();
      const status = r < openRate ? 'opened' as const : r < openRate + 0.03 ? 'failed' as const : 'delivered' as const;
      sendRows.push({
        id: uuid(),
        campaignId: campaign.id,
        userId: pick(userRows).id,
        status,
        ts: new Date(at.getTime() + rnd() * 4 * 3600_000),
      });
    }
  }
  await insertChunks('notif_sends', sendRows, (b) => d.insert(schema.notifSends).values(b));

  // ── Content ───────────────────────────────────────────────────────────────
  const mkBody = (intro: string, sections: { title: string; lines: string[] }[]) => ({ intro, sections });
  const dialogueSection = (title: string) => ({
    title,
    lines: ['Bonjour, qu’est-ce que je vous sers ?', 'Un café allongé, s’il vous plaît.', 'Sur place ou à emporter ?'],
  });
  const unitSpecs = [
    {
      slug: 'ordering-coffee-like-a-local', title: 'Ordering coffee like a local', kind: 'scenario' as const,
      level: 'a2' as const, locale: 'fr' as const, status: 'published' as const, version: 3, publishedDaysAgo: 5,
      body: mkBody('Order like a regular at a Parisian counter — sizes, milk, and the magic of "s’il vous plaît".', [
        dialogueSection('Dialogue 1 — Le comptoir'), dialogueSection('Dialogue 2 — La terrasse'),
        { title: 'Drill — liaisons', lines: ['un⁀allongé', 'deux⁀expressos'] },
      ]),
    },
    {
      slug: 'market-haggling', title: 'Market Haggling', kind: 'scenario' as const,
      level: 'b1' as const, locale: 'fr' as const, status: 'published' as const, version: 2, publishedDaysAgo: 19,
      body: mkBody('Negotiate produce prices at a Sunday market without losing your charm.', [
        dialogueSection('Dialogue 1 — Les tomates'), { title: 'Vocab — quantities', lines: ['une livre de', 'une botte de', 'un panier'] },
      ]),
    },
    {
      slug: 'street-pronunciation-drills', title: 'Street pronunciation drills', kind: 'drill' as const,
      level: 'a1' as const, locale: 'fr' as const, status: 'published' as const, version: 5, publishedDaysAgo: 2,
      body: mkBody('Rapid-fire minimal pairs recorded on real streets — noise included on purpose.', [
        { title: 'L1-L6 — vowels', lines: ['u vs ou', 'é vs è'] },
        { title: 'L7 — nasals', lines: ['un bon vin blanc', 'en avant'] },
      ]),
    },
    {
      slug: 'milan-aperitivo-scenes', title: 'Milan aperitivo scenes', kind: 'scenario' as const,
      level: 'b1' as const, locale: 'en' as const, status: 'draft' as const, version: 1, publishedDaysAgo: null,
      body: mkBody('Cross-language pilot: Italian aperitivo culture for French learners abroad.', [
        dialogueSection('Scene 1 — Lo spritz'),
      ]),
    },
    {
      slug: 'small-talk-with-neighbours', title: 'Small talk with neighbours', kind: 'scenario' as const,
      level: 'a2' as const, locale: 'fr' as const, status: 'published' as const, version: 4, publishedDaysAgo: 33,
      body: mkBody('Hallway pleasantries, weather talk, and the fine art of "bonne journée".', [
        dialogueSection('Dialogue 1 — L’ascenseur'), dialogueSection('Dialogue 2 — La boîte aux lettres'),
      ]),
    },
    {
      slug: 'train-station-survival', title: 'Train station survival', kind: 'curriculum_unit' as const,
      level: 'a1' as const, locale: 'fr' as const, status: 'in_review' as const, version: 1, publishedDaysAgo: null,
      body: mkBody('Tickets, platforms, delays: everything Gare du Nord will throw at you.', [
        { title: 'Step 1 — Acheter un billet', lines: ['Un aller simple pour Lyon.'] },
        { title: 'Step 2 — Le quai', lines: ['Le train partira voie 12.'] },
      ]),
    },
    {
      slug: 'beginners-den-curriculum', title: "Beginners' Den curriculum", kind: 'curriculum_unit' as const,
      level: 'a1' as const, locale: 'fr' as const, status: 'published' as const, version: 2, publishedDaysAgo: 60,
      body: mkBody('The full 43-unit A1 track: from "bonjour" to your first real conversation.',
        Array.from({ length: 43 }, (_, i) => ({
          title: `Unit ${i + 1}: ${['Greetings', 'Numbers', 'Café basics', 'Directions', 'Family', 'Food', 'Time', 'Weather', 'Shopping', 'Travel'][i % 10]} ${Math.floor(i / 10) + 1}`,
          lines: [`Core phrases for unit ${i + 1}`, 'Audio drill', 'Checkpoint quiz'],
        }))),
    },
  ];
  const unitRows = unitSpecs.map((u) => ({
    id: uuid(),
    slug: u.slug,
    title: u.title,
    kind: u.kind,
    level: u.level,
    locale: u.locale,
    status: u.status,
    body: u.body,
    version: u.version,
    authorId: lena.id,
    publishedAt: u.publishedDaysAgo === null ? null : daysAgo(u.publishedDaysAgo),
    updatedAt: daysAgo(u.publishedDaysAgo ?? int(1, 8)),
  })) satisfies (typeof schema.contentUnits.$inferInsert)[];
  await insertChunks('content_units', unitRows, (b) => d.insert(schema.contentUnits).values(b));

  const revisionRows: (typeof schema.contentRevisions.$inferInsert)[] = [];
  for (const [i, u] of unitRows.entries()) {
    const nRevs = Math.min(u.version!, int(1, 3));
    for (let v = u.version! - nRevs + 1; v <= u.version!; v++) {
      revisionRows.push({
        id: uuid(),
        unitId: u.id,
        version: v,
        body: v === u.version ? u.body : { ...unitSpecs[i].body, intro: `${unitSpecs[i].body.intro} (v${v})` },
        editorId: chance(0.8) ? lena.id : marc.id,
        createdAt: daysAgo((u.version! - v) * int(4, 12) + int(1, 4)),
      });
    }
  }
  await insertChunks('content_revisions', revisionRows, (b) => d.insert(schema.contentRevisions).values(b));

  const flagRows = [
    { unit: 2, reason: 'Audio mismatch in L7', status: 'open' as const, days: 0.1 },
    { unit: 0, reason: 'Wrong article gender in dialogue 3', status: 'open' as const, days: 1.2 },
    { unit: 1, reason: 'Audio cuts off mid-sentence in Dialogue 1', status: 'open' as const, days: 2.6 },
    { unit: 4, reason: 'Level feels harder than A2 in step 4', status: 'resolved' as const, days: 9 },
    { unit: 6, reason: 'Typo in French caption ("boulangerie")', status: 'resolved' as const, days: 15 },
  ].map((f) => ({
    id: uuid(),
    unitId: unitRows[f.unit].id,
    userId: pick(userRows.filter((u) => u.status === 'active')).id,
    reason: f.reason,
    status: f.status,
    createdAt: daysAgo(f.days),
  })) satisfies (typeof schema.contentFlags.$inferInsert)[];
  await insertChunks('content_flags', flagRows, (b) => d.insert(schema.contentFlags).values(b));

  // ── AI capabilities / models / routing (mock-exact) ───────────────────────
  const capSpecs = [
    { key: 'general' as const, label: 'General assistant', description: 'In-app tutor chat, hints and grammar explanations', monthlyVolume: '1.2M req/mo' },
    { key: 'content' as const, label: 'Content generation', description: 'Scenario, drill and dictation generation pipeline', monthlyVolume: '86K req/mo' },
    { key: 'audio' as const, label: 'Audio — TTS & STT', description: 'Speech synthesis for dialogues and pronunciation scoring', monthlyVolume: '3.4M min/mo' },
    { key: 'video' as const, label: 'Video generation', description: 'Short scenario clips and marketing cutdowns', monthlyVolume: '2.1K clips/mo' },
  ];
  const capRows = capSpecs.map((c) => ({ id: uuid(), ...c })) satisfies (typeof schema.aiCapabilities.$inferInsert)[];
  await insertChunks('ai_capabilities', capRows, (b) => d.insert(schema.aiCapabilities).values(b));

  // costs from mock costMap (EUR → cents)
  const modelSpecs: Record<string, { name: string; provider: string; meta: string; cost: string; latency: string; monthly: number }[]> = {
    general: [
      { name: 'Claude Sonnet 4.5', provider: 'Anthropic', meta: '200K ctx · tool use', cost: '€0.9/1K', latency: 'p95 1.8s', monthly: 108000 },
      { name: 'GPT-5 mini', provider: 'OpenAI', meta: '128K ctx', cost: '€0.4/1K', latency: 'p95 1.4s', monthly: 48000 },
      { name: 'Gemini 2.5 Flash', provider: 'Google', meta: '1M ctx', cost: '€0.2/1K', latency: 'p95 1.1s', monthly: 24000 },
    ],
    content: [
      { name: 'Claude Opus 4.5', provider: 'Anthropic', meta: 'Best-in-class writing', cost: '€4.1/1K', latency: 'p95 6.2s', monthly: 35200 },
      { name: 'GPT-5', provider: 'OpenAI', meta: 'Strong structured output', cost: '€2.8/1K', latency: 'p95 5.1s', monthly: 24000 },
      { name: 'Claude Sonnet 4.5', provider: 'Anthropic', meta: 'Fast drafts', cost: '€0.9/1K', latency: 'p95 1.8s', monthly: 7700 },
    ],
    audio: [
      { name: 'ElevenLabs Turbo v3', provider: 'ElevenLabs', meta: '32 voices · FR native', cost: '€0.18/min', latency: 'p95 420ms', monthly: 612000 },
      { name: 'OpenAI TTS-1 HD', provider: 'OpenAI', meta: '6 voices', cost: '€0.11/min', latency: 'p95 640ms', monthly: 374000 },
      { name: 'PlayHT 3.0', provider: 'PlayHT', meta: 'Voice cloning', cost: '€0.06/min', latency: 'p95 780ms', monthly: 204000 },
    ],
    video: [
      { name: 'Veo 3.1 Fast', provider: 'Google', meta: '1080p · 8s clips', cost: '€1.4/clip', latency: 'p95 38s', monthly: 289000 },
      { name: 'Runway Gen-4', provider: 'Runway', meta: '4K upscale', cost: '€1.8/clip', latency: 'p95 52s', monthly: 372000 },
      { name: 'Luma Ray2', provider: 'Luma', meta: 'Cheap b-roll', cost: '€0.7/clip', latency: 'p95 44s', monthly: 144000 },
    ],
  };
  const modelRows: (typeof schema.aiModels.$inferInsert & { id: string })[] = [];
  const activeModelByCap: Record<string, string> = {};
  for (const cap of capRows) {
    for (const [i, m] of modelSpecs[cap.key].entries()) {
      const id = uuid();
      modelRows.push({
        id,
        capabilityId: cap.id,
        name: m.name,
        provider: m.provider,
        meta: m.meta,
        costLabel: m.cost,
        latencyLabel: m.latency,
        monthlyCostCents: m.monthly,
        enabled: true,
      });
      if (i === 0) activeModelByCap[cap.key] = id; // general→Sonnet 4.5, content→Opus 4.5, audio→ElevenLabs, video→Veo
    }
  }
  await insertChunks('ai_models', modelRows, (b) => d.insert(schema.aiModels).values(b));
  const routingRows = capRows.map((cap) => ({
    capabilityId: cap.id,
    activeModelId: activeModelByCap[cap.key],
    updatedBy: cap.key === 'audio' ? lea.id : marc.id,
    updatedAt: cap.key === 'general' ? minutesAgo(140) : daysAgo(int(2, 20)),
  })) satisfies (typeof schema.aiRouting.$inferInsert)[];
  await insertChunks('ai_routing', routingRows, (b) => d.insert(schema.aiRouting).values(b));

  // ── Metrics ───────────────────────────────────────────────────────────────
  // 30 days @ 1-min would be ~43K rows per series; instead:
  //  • error_rate / crash_free / uptime: full 30d @ 30-min grain
  //  • api_p95_ms / tts_p95_ms: days 30→1 @ 30-min grain + last 24h @ 1-min
  //    (spec's 24h 1-min chart), so series don't double-cover the last day.
  // ANOMALY: eu-west tts_p95 ramps to ~1.42s (+38%) over the last 60 minutes.
  const REGIONS = ['eu-west', 'us-east'] as const;
  const metricRows: (typeof schema.metrics.$inferInsert)[] = [];
  const push = (name: string, region: string, ts: Date, value: number) =>
    metricRows.push({ id: uuid(), name, region, value: value.toFixed(4), ts });
  const daily = (ts: Date, amp: number) => Math.sin((ts.getTime() / DAY) * Math.PI * 2) * amp;

  const apiVal = (ts: Date, region: string) =>
    410 + (region === 'us-east' ? 8 : 0) + daily(ts, 14) + (rnd() - 0.5) * 22;
  const ttsVal = (ts: Date, region: string) => {
    let v = 1020 + (region === 'us-east' ? 25 : 0) + daily(ts, 30) + (rnd() - 0.5) * 70;
    const minAgo = (NOW.getTime() - ts.getTime()) / MIN;
    if (region === 'eu-west' && minAgo <= 60) v = 1030 + (1 - minAgo / 60) * 390 + (rnd() - 0.5) * 30; // ramp → ~1420ms
    return v;
  };

  const start30d = daysAgo(30);
  const start24h = daysAgo(1);
  for (const region of REGIONS) {
    // 30-min grain
    for (let t = start30d.getTime(); t < NOW.getTime(); t += 30 * MIN) {
      const ts = new Date(t);
      const isCheckoutBurst = region === 'us-east' && Math.abs(t - daysAgo(5).getTime()) < 2 * 3600_000;
      push('error_rate', region, ts, Math.max(0.05, 0.3 + (rnd() - 0.5) * 0.25 + (isCheckoutBurst ? 1.1 : 0)));
      push('crash_free', region, ts, 99.6 + (rnd() - 0.5) * 0.14);
      push('uptime', region, ts, 99.98 + (rnd() - 0.5) * 0.02);
      if (t < start24h.getTime()) {
        push('api_p95_ms', region, ts, apiVal(ts, region));
        push('tts_p95_ms', region, ts, ttsVal(ts, region));
      }
    }
    // last 24h @ 1-min grain for the latency charts
    for (let t = start24h.getTime(); t <= NOW.getTime(); t += MIN) {
      const ts = new Date(t);
      push('api_p95_ms', region, ts, apiVal(ts, region));
      push('tts_p95_ms', region, ts, ttsVal(ts, region));
    }
  }
  await insertChunks('metrics', metricRows, (b) => d.insert(schema.metrics).values(b));

  // ── Incidents ─────────────────────────────────────────────────────────────
  const incidentRows = [
    {
      id: uuid(), severity: 'anomaly' as const, title: 'TTS latency spike (eu-west)',
      metricRef: 'tts_p95_ms', region: 'eu-west', status: 'open' as const,
      openedAt: minutesAgo(50), resolvedAt: null,
    },
    {
      id: uuid(), severity: 'degraded' as const, title: 'Checkout 5xx burst',
      metricRef: 'error_rate', region: 'us-east', status: 'resolved' as const,
      openedAt: daysAgo(5), resolvedAt: new Date(daysAgo(5).getTime() + 2 * 3600_000),
    },
    {
      id: uuid(), severity: 'anomaly' as const, title: 'CDN cache purge slowdown',
      metricRef: 'api_p95_ms', region: 'eu-west', status: 'resolved' as const,
      openedAt: daysAgo(13), resolvedAt: new Date(daysAgo(13).getTime() + 90 * MIN),
    },
  ] satisfies (typeof schema.incidents.$inferInsert)[];
  await insertChunks('incidents', incidentRows, (b) => d.insert(schema.incidents).values(b));

  // ── Tracked links + clicks ────────────────────────────────────────────────
  const linkSpecs = [
    { slug: 'tiktok', dest: 'https://ealch.app/download?utm_source=tiktok', campaign: 'TikTok bio', channel: 'social' as const, weight: 48600 },
    { slug: 'yt-summer', dest: 'https://ealch.app/download?utm_source=youtube&utm_campaign=summer', campaign: 'YouTube summer series', channel: 'social' as const, weight: 21300 },
    { slug: 'podcast', dest: 'https://ealch.app/offer/podcast20', campaign: 'Podcast reads Q3', channel: 'podcast' as const, weight: 9400 },
    { slug: 'amira', dest: 'https://ealch.app/r/amira', campaign: 'Creator — Amira', channel: 'social' as const, weight: 6800 },
    { slug: 'newsletter', dest: 'https://ealch.app/blog/streak-science', campaign: 'July newsletter', channel: 'email' as const, weight: 3900 },
  ];
  const linkRows = linkSpecs.map((l) => ({
    id: uuid(),
    slug: l.slug,
    destinationUrl: l.dest,
    campaign: l.campaign,
    channel: l.channel,
    createdBy: lea.id,
    createdAt: daysAgo(int(35, 120)),
    archived: false,
  })) satisfies (typeof schema.trackedLinks.$inferInsert)[];
  await insertChunks('tracked_links', linkRows, (b) => d.insert(schema.trackedLinks).values(b));

  // ~3,500 click rows over 30d, proportional to mock totals (tiktok 48.6K…).
  const clickRows: (typeof schema.linkClicks.$inferInsert)[] = [];
  const totalWeight = linkSpecs.reduce((s, l) => s + l.weight, 0);
  for (const [i, l] of linkSpecs.entries()) {
    const n = Math.round((l.weight / totalWeight) * 3500);
    for (let c = 0; c < n; c++) {
      clickRows.push({
        id: uuid(),
        linkId: linkRows[i].id,
        ts: daysAgo(Math.pow(rnd(), 1.3) * 30), // ramping toward now
        country: weighted(COUNTRIES),
        platform: weighted([['ios', 45], ['android', 35], ['web', 20]] as const),
        referrer: l.channel === 'social' ? `https://${l.slug === 'tiktok' ? 'tiktok.com' : 'youtube.com'}` : null,
      });
    }
  }
  await insertChunks('link_clicks', clickRows, (b) => d.insert(schema.linkClicks).values(b));

  // ── Releases ──────────────────────────────────────────────────────────────
  const releaseRows: (typeof schema.releases.$inferInsert)[] = [];
  const relSpec = [
    { version: 'v2.4.0', notes: 'AI tutor v2, offline packs beta, new streak repair flow', pct: 25, status: 'rolling' as const, days: 4 },
    { version: 'v2.3.2', notes: 'Crash fixes for audio session handling; smaller bundle', pct: 100, status: 'complete' as const, days: 22 },
    { version: 'v2.3.0', notes: 'Weekly leaderboards, referral rewards', pct: 100, status: 'complete' as const, days: 48 },
    { version: 'v2.2.1', notes: 'Stability patch', pct: 100, status: 'complete' as const, days: 85 },
  ];
  for (const r of relSpec) {
    for (const platform of ['ios', 'android'] as const) {
      releaseRows.push({
        id: uuid(), version: r.version, platform, notes: r.notes,
        rolloutPct: r.pct, status: r.status, createdAt: daysAgo(r.days + (platform === 'android' ? 0.1 : 0)),
      });
    }
  }
  await insertChunks('releases', releaseRows, (b) => d.insert(schema.releases).values(b));

  // ── Feature flags ─────────────────────────────────────────────────────────
  const flagRows2 = [
    { key: 'weekly_leaderboards', description: 'Weekly leaderboards in the Community tab', kind: 'boolean' as const, value: true, environments: { prod: true, staging: true }, by: lea.id, min: 3 * 24 * 60 },
    { key: 'ai_tutor_v2', description: 'New AI tutor conversation engine (v2)', kind: 'percentage' as const, value: { pct: 25 }, environments: { prod: { pct: 25 }, staging: { pct: 100 } }, by: marc.id, min: 120 },
    { key: 'offline_packs', description: 'Offline lesson packs (beta)', kind: 'boolean' as const, value: false, environments: { prod: false, staging: true }, by: lea.id, min: 26 * 60 },
    { key: 'referral_rewards', description: 'Referral rewards program', kind: 'boolean' as const, value: true, environments: { prod: true, staging: true }, by: marc.id, min: 20 * 24 * 60 },
    { key: 'winback_discount', description: '40% winback discount for lapsed subscribers', kind: 'boolean' as const, value: false, environments: { prod: false, staging: false }, by: sam.id, min: 9 * 24 * 60 },
    { key: 'force_update_below_v22', description: 'Force upgrade for clients below v2.2', kind: 'boolean' as const, value: false, environments: { prod: false, staging: false }, by: marc.id, min: 40 * 24 * 60 },
  ].map((f) => ({
    id: uuid(),
    key: f.key,
    description: f.description,
    kind: f.kind,
    value: f.value,
    environments: f.environments,
    updatedBy: f.by,
    updatedAt: minutesAgo(f.min),
  })) satisfies (typeof schema.featureFlags.$inferInsert)[];
  await insertChunks('feature_flags', flagRows2, (b) => d.insert(schema.featureFlags).values(b));

  // ── Audit log (~20 recent, plausible entries) ─────────────────────────────
  const bannedUser = userRows.find((u) => u.status === 'banned')!;
  const auditSpecs: { admin: string; action: string; entityType: string; entityId: string | null; before?: unknown; after?: unknown; min: number }[] = [
    { admin: marc.id, action: 'flag.update', entityType: 'feature_flag', entityId: 'ai_tutor_v2', before: { pct: 10 }, after: { pct: 25 }, min: 120 },
    { admin: lea.id, action: 'routing.update', entityType: 'ai_routing', entityId: 'audio', before: { model: 'OpenAI TTS-1 HD' }, after: { model: 'ElevenLabs Turbo v3' }, min: 8 * 60 },
    { admin: sam.id, action: 'payment.refund', entityType: 'subscription', entityId: refundedSubs[0].id, before: { status: 'active' }, after: { status: 'refunded', amountCents: 9900 }, min: 26 * 60 },
    { admin: sam.id, action: 'user.ban', entityType: 'user', entityId: bannedUser.id, before: { status: 'active' }, after: { status: 'banned', reason: 'abuse' }, min: 31 * 60 },
    { admin: lea.id, action: 'release.rollout_update', entityType: 'release', entityId: 'v2.4.0', before: { rolloutPct: 10 }, after: { rolloutPct: 25 }, min: 44 * 60 },
    { admin: lena.id, action: 'content.publish', entityType: 'content_unit', entityId: unitRows[2].id, before: { version: 4 }, after: { version: 5 }, min: 2 * 24 * 60 },
    { admin: lea.id, action: 'campaign.send', entityType: 'notif_campaign', entityId: campaignRows[0].id, after: { sentCount: 47900 }, min: 4 * 24 * 60 },
    { admin: marc.id, action: 'flag.update', entityType: 'feature_flag', entityId: 'winback_discount', before: { value: true }, after: { value: false }, min: 9 * 24 * 60 },
    { admin: lena.id, action: 'content.update', entityType: 'content_unit', entityId: unitRows[0].id, before: { version: 2 }, after: { version: 3 }, min: 5 * 24 * 60 },
    { admin: sam.id, action: 'flag.resolve', entityType: 'content_flag', entityId: flagRows[3].id, before: { status: 'open' }, after: { status: 'resolved' }, min: 6 * 24 * 60 },
    { admin: lea.id, action: 'link.create', entityType: 'tracked_link', entityId: 'newsletter', after: { slug: 'newsletter' }, min: 7 * 24 * 60 },
    { admin: marc.id, action: 'settings.update', entityType: 'settings', entityId: 'maintenance_mode', before: { enabled: true }, after: { enabled: false }, min: 12 * 24 * 60 },
    { admin: sam.id, action: 'payment.refund', entityType: 'subscription', entityId: refundedSubs[1].id, after: { amountCents: 9900 }, min: 10 * 24 * 60 },
    { admin: lea.id, action: 'campaign.send', entityType: 'notif_campaign', entityId: campaignRows[1].id, after: { sentCount: 11800 }, min: 11 * 24 * 60 },
    { admin: lena.id, action: 'template.update', entityType: 'notif_template', entityId: templateRows[2].id, min: 3 * 24 * 60 },
    { admin: marc.id, action: 'admin.login', entityType: 'admin_user', entityId: marc.id, min: 125 },
    { admin: lea.id, action: 'release.create', entityType: 'release', entityId: 'v2.4.0', after: { rolloutPct: 5, status: 'rolling' }, min: 4 * 24 * 60 + 30 },
    { admin: lena.id, action: 'content.review_request', entityType: 'content_unit', entityId: unitRows[5].id, after: { status: 'in_review' }, min: 30 * 60 },
    { admin: sam.id, action: 'user.export', entityType: 'user', entityId: pick(userRows).id, min: 50 * 60 },
    { admin: marc.id, action: 'flag.update', entityType: 'feature_flag', entityId: 'offline_packs', before: { environments: { staging: false } }, after: { environments: { staging: true } }, min: 26 * 60 },
  ];
  const auditRows = auditSpecs.map((a) => ({
    id: uuid(),
    adminId: a.admin,
    action: a.action,
    entityType: a.entityType,
    entityId: a.entityId,
    before: a.before ?? null,
    after: a.after ?? null,
    ip: `81.2.${int(10, 250)}.${int(2, 250)}`,
    createdAt: minutesAgo(a.min),
  })) satisfies (typeof schema.auditLog.$inferInsert)[];
  await insertChunks('audit_log', auditRows, (b) => d.insert(schema.auditLog).values(b));

  // ── Summary ───────────────────────────────────────────────────────────────
  const secs = ((Date.now() - t0) / 1000).toFixed(1);
  console.log('\n✓ seed complete in %ss\n', secs);
  console.log('Row counts:');
  for (const [table, n] of Object.entries(counts)) console.log(`  ${table.padEnd(20)} ${n}`);

  console.log('\n── Admin credentials (password for all: admin1234) ──');
  for (const a of ADMINS) {
    console.log(`\n  ${a.name} <${a.email}> (${a.role})`);
    console.log(`    TOTP secret: ${a.totp}`);
    console.log(`    ${otpauthUri(a.email, a.totp)}`);
  }

  await close();
  process.exit(0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
