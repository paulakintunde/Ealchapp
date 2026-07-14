// Overview — KPI row with sparklines, active-learners chart + live feed,
// quick actions. All numbers are computed from the DB where feasible and
// scaled to app level (see APP_SCALE).
import Link from 'next/link';
import { and, desc, eq, gte, inArray, sql } from 'drizzle-orm';
import { db, schema } from '@/db';
import { recent, type LiveEvent, type LiveEventType } from '@/lib/bus';
import { compact } from '@/lib/format';
import { IC, NavIcon } from '@/components/shell/icons';
import ActivityChart, { type ActivityPoint } from './ActivityChart';
import LiveFeed, { type FeedItem } from './LiveFeed';
import styles from './overview.module.css';

/**
 * App-scale factor: the DB holds a 2,000-user representative sample of the
 * app's 61,408 users (see scripts/seed.ts). Sample counts/sums are multiplied
 * by this to display app-scale numbers, mirroring the seed's inverse SCALE.
 */
const APP_SCALE = 61408 / 2000; // ≈ 30.7

const DAY_MS = 86_400_000;

// Static reference deltas (period-over-period comparisons live outside the
// seeded window). All are "good" — churn is down-is-good — so all render --ok.
const DELTAS = { mau: '+6.1%', dau: '+3.2%', mrr: '+4.8%', crash: '+0.1', churn: '−0.4' };

// Churn has no backing series in the seed; static per spec (mock: 2.3% −0.4).
const CHURN_PCT = '2.3%';
const CHURN_SPARK = '0,5 10,7 20,6 30,9 40,10 50,12 60,13 64,15'; // mock shape (rising = shrinking churn delta story)

const SPARK_X = [0, 10, 20, 30, 40, 50, 60, 64];

/** Map up to 8 values onto the mock's 64×20 sparkline coordinate space. */
function sparkPoints(values: number[]): string {
  const vs = values.slice(-8);
  if (vs.length < 2) return '0,10 64,10';
  const xs =
    vs.length === 8
      ? SPARK_X
      : vs.map((_, i) => Math.round((i * 64) / (vs.length - 1)));
  const min = Math.min(...vs);
  const max = Math.max(...vs);
  const span = max - min;
  return vs
    .map((v, i) => {
      const y = span === 0 ? 10 : 17 - ((v - min) / span) * 14; // y ∈ [3, 17]
      return `${xs[i]},${Math.round(y * 10) / 10}`;
    })
    .join(' ');
}

function Sparkline({ points, color }: { points: string; color: string }) {
  return (
    <svg width="64" height="20" viewBox="0 0 64 20" style={{ overflow: 'visible' }} aria-hidden>
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ── Live-feed synthesis from the events table (used when bus is empty) ─────
const FEED_EVENT_NAMES = [
  'signup',
  'subscription_started',
  'refund',
  'content_flagged',
  'lesson_complete',
  'level_up',
  'streak_repair',
  'notification_open',
];

function eventToFeed(name: string, who: string | null): { type: LiveEventType; text: string } {
  const w = who ?? 'A learner';
  switch (name) {
    case 'signup':
      return { type: 'signup', text: `${w} just signed up` };
    case 'subscription_started':
      return { type: 'subscription', text: `${w} upgraded to a paid plan` };
    case 'refund':
      return { type: 'refund', text: `Refund issued for ${w}` };
    case 'content_flagged':
      return { type: 'flagged_content', text: `${w} flagged content for review` };
    case 'lesson_complete':
      return { type: 'system', text: `${w} completed a lesson` };
    case 'level_up':
      return { type: 'system', text: `${w} leveled up` };
    case 'streak_repair':
      return { type: 'system', text: `${w} repaired their streak` };
    case 'notification_open':
      return { type: 'system', text: `${w} opened a push notification` };
    default:
      return { type: 'system', text: name.replace(/_/g, ' ') };
  }
}

const QUICK_ACTIONS = [
  {
    href: '/admin/notifications',
    icon: IC.bell,
    title: 'Send a push',
    sub: 'Compose + preview in-app notification',
  },
  {
    href: '/admin/content',
    icon: IC.doc,
    title: 'Push content update',
    sub: 'v2.4.1 bundle staged, 3 packs changed',
  },
  {
    href: '/admin/releases',
    icon: IC.rocket,
    title: 'Manage rollout',
    sub: 'v2.4.0 at 25% — expand or halt',
  },
] as const;

// Data loading lives outside the component (Date.now + IO are impure and the
// react-hooks/purity rule bans them inside render, even for RSCs).
async function loadOverview() {
  const d = await db();
  const now = Date.now();
  const since30d = new Date(now - 30 * DAY_MS);
  const since8d = new Date(now - 8 * DAY_MS);
  const since1d = new Date(now - DAY_MS);
  const since30min = new Date(now - 30 * 60_000);

  const [
    [mauRow],
    [dauRow],
    [mrrRow],
    [crashRow],
    dailyActivity,
    dailyRevenue,
    dailyCrash,
    [liveRow],
  ] = await Promise.all([
    // MAU: users seen in the last 30 days
    d
      .select({ n: sql<number>`count(*)::int` })
      .from(schema.users)
      .where(gte(schema.users.lastSeenAt, since30d)),
    // DAU: users seen in the last 24 hours
    d
      .select({ n: sql<number>`count(*)::int` })
      .from(schema.users)
      .where(gte(schema.users.lastSeenAt, since1d)),
    // MRR: current month's charge aggregate — same method as /admin/billing's
    // last chart bar, so both screens report the same figure (the seed
    // over-samples paying users, which makes sum(mrr_cents) overshoot).
    d
      .select({ cents: sql<number>`coalesce(sum(${schema.payments.amountCents}), 0)::int` })
      .from(schema.payments)
      .where(sql`${schema.payments.kind} = 'charge' and date_trunc('month', ${schema.payments.occurredAt}) = date_trunc('month', now())`),
    // Crash-free: latest metrics row
    d
      .select({ v: sql<number>`${schema.metrics.value}::float` })
      .from(schema.metrics)
      .where(eq(schema.metrics.name, 'crash_free'))
      .orderBy(desc(schema.metrics.ts))
      .limit(1),
    // Daily sessions + distinct learners, last 30 days (chart + MAU/DAU sparks)
    d
      .select({
        day: sql<string>`to_char(date_trunc('day', ${schema.learningSessions.createdAt}), 'YYYY-MM-DD')`,
        sessions: sql<number>`count(*)::int`,
        dau: sql<number>`count(distinct ${schema.learningSessions.userId})::int`,
      })
      .from(schema.learningSessions)
      .where(gte(schema.learningSessions.createdAt, since30d))
      .groupBy(sql`1`)
      .orderBy(sql`1`),
    // Daily charge revenue, last 8 days (MRR spark)
    d
      .select({
        day: sql<string>`to_char(date_trunc('day', ${schema.payments.occurredAt}), 'YYYY-MM-DD')`,
        cents: sql<number>`coalesce(sum(${schema.payments.amountCents}), 0)::int`,
      })
      .from(schema.payments)
      .where(and(eq(schema.payments.kind, 'charge'), gte(schema.payments.occurredAt, since8d)))
      .groupBy(sql`1`)
      .orderBy(sql`1`),
    // Daily average crash-free rate, last 8 days (spark)
    d
      .select({
        day: sql<string>`to_char(date_trunc('day', ${schema.metrics.ts}), 'YYYY-MM-DD')`,
        v: sql<number>`avg(${schema.metrics.value})::float`,
      })
      .from(schema.metrics)
      .where(and(eq(schema.metrics.name, 'crash_free'), gte(schema.metrics.ts, since8d)))
      .groupBy(sql`1`)
      .orderBy(sql`1`),
    // Learners in session in the last 30 minutes
    d
      .select({ n: sql<number>`count(*)::int` })
      .from(schema.learningSessions)
      .where(gte(schema.learningSessions.createdAt, since30min)),
  ]);

  // ── KPIs (friendly zeroes when tables are empty) ──────────────────────────
  const mau = (mauRow?.n ?? 0) * APP_SCALE;
  const dau = (dauRow?.n ?? 0) * APP_SCALE;
  const mrrCents = (mrrRow?.cents ?? 0) * APP_SCALE;
  const crashFree = crashRow?.v;

  const kpis = [
    {
      label: 'MAU',
      value: compact(Math.round(mau)),
      delta: DELTAS.mau,
      spark: sparkPoints(dailyActivity.map((r) => r.sessions)),
      sparkC: 'var(--acc)',
    },
    {
      label: 'DAU',
      value: compact(Math.round(dau)),
      delta: DELTAS.dau,
      spark: sparkPoints(dailyActivity.map((r) => r.dau)),
      sparkC: 'var(--acc)',
    },
    {
      label: 'MRR',
      value: `€${compact(Math.round(mrrCents / 100))}`,
      delta: DELTAS.mrr,
      spark: sparkPoints(dailyRevenue.map((r) => r.cents)),
      sparkC: 'var(--acc)',
    },
    {
      label: 'Crash-free',
      value: crashFree != null ? `${crashFree.toFixed(1)}%` : '—',
      delta: DELTAS.crash,
      spark: sparkPoints(dailyCrash.map((r) => r.v)),
      sparkC: '#C9D2CC',
    },
    {
      label: 'Churn',
      value: CHURN_PCT,
      delta: DELTAS.churn,
      spark: CHURN_SPARK,
      sparkC: '#C9D2CC',
    },
  ];

  // ── Chart data (app-scaled) ────────────────────────────────────────────────
  const chartData: ActivityPoint[] = dailyActivity.map((r) => ({
    d: new Date(`${r.day}T00:00:00`).toLocaleDateString('en', {
      month: 'short',
      day: 'numeric',
    }),
    dau: Math.round(r.dau * APP_SCALE),
    sessions: Math.round(r.sessions * APP_SCALE),
  }));

  // ── Live now + feed seed ───────────────────────────────────────────────────
  const liveNow = liveRow && liveRow.n > 0 ? Math.round(liveRow.n * APP_SCALE) : 342;

  let feed: LiveEvent[] = recent();
  if (feed.length === 0) {
    const rows = await d
      .select({
        id: schema.events.id,
        name: schema.events.name,
        at: schema.events.createdAt,
        who: schema.users.displayName,
      })
      .from(schema.events)
      .leftJoin(schema.users, eq(schema.events.userId, schema.users.id))
      .where(inArray(schema.events.name, FEED_EVENT_NAMES))
      .orderBy(desc(schema.events.createdAt))
      .limit(5);
    feed = rows.map((r) => {
      const { type, text } = eventToFeed(r.name, r.who);
      return { id: r.id, type, text, at: r.at.toISOString() };
    });
  }
  const initialFeed: FeedItem[] = feed.map(({ id, type, text, at }) => ({ id, type, text, at }));

  return { kpis, chartData, liveNow, initialFeed };
}

export default async function OverviewPage() {
  const { kpis, chartData, liveNow, initialFeed } = await loadOverview();

  return (
    <div className={styles.wrap}>
      {/* KPI row */}
      <div className={styles.kpiGrid}>
        {kpis.map((k) => (
          <div key={k.label} className={styles.kpi}>
            <div className={styles.kpiLabel}>{k.label}</div>
            <div className={styles.kpiValue}>{k.value}</div>
            <div className={styles.kpiFoot}>
              <div className={styles.kpiDelta}>{k.delta}</div>
              <Sparkline points={k.spark} color={k.sparkC} />
            </div>
          </div>
        ))}
      </div>

      {/* Chart | live feed */}
      <div className={styles.mainGrid}>
        <div className={styles.card}>
          <div className={styles.chartHead}>
            <div className={styles.chartTitle}>Active learners — last 30 days</div>
            <div className={styles.legend}>
              <div className={styles.legendItem}>
                <div className={styles.legendChip} style={{ background: 'var(--acc)' }} />
                DAU
              </div>
              <div className={styles.legendItem}>
                <div className={styles.legendChip} style={{ background: '#C9D2CC' }} />
                Sessions
              </div>
            </div>
          </div>
          {chartData.length > 0 ? (
            <ActivityChart data={chartData} />
          ) : (
            <div className={styles.emptyChart}>No data yet — seed the database</div>
          )}
        </div>

        <div className={`${styles.card} ${styles.feedCard}`}>
          <div className={styles.liveHead}>
            <div className={styles.liveDot} />
            <div className={styles.liveTitle}>Live now</div>
            <div className={styles.liveCount}>{liveNow.toLocaleString('en-IE')}</div>
          </div>
          <div className={styles.liveSub}>learners in session</div>
          <LiveFeed initial={initialFeed} />
        </div>
      </div>

      {/* Quick actions */}
      <div className={styles.qaGrid}>
        {QUICK_ACTIONS.map((qa) => (
          <Link key={qa.href} href={qa.href} className={styles.qa}>
            <div className={styles.qaIcon}>
              <NavIcon d={qa.icon} size={17} />
            </div>
            <div className={styles.qaBody}>
              <div className={styles.qaTitle}>{qa.title}</div>
              <div className={styles.qaSub}>{qa.sub}</div>
            </div>
            <div className={styles.qaArrow}>→</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
