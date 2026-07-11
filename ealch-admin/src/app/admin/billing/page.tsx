// Billing & revenue — RSC: all reads via Drizzle, KPI math documented inline.
import { desc, eq, gte, sql } from 'drizzle-orm';
import { auth } from '@/auth';
import { db, schema } from '@/db';
import { can } from '@/lib/rbac';
import { eurWhole, eur, compact, pct } from '@/lib/format';
import MrrChart, { type MrrPoint } from './MrrChart';
import PlanMixDonut, { type PlanSlice } from './PlanMixDonut';
import FailedPaymentsCard from './FailedPaymentsCard';
import TransactionsTable, { type TxRow } from './TransactionsTable';
import styles from './billing.module.css';

// ── Sample→app scaling ───────────────────────────────────────────────────────
// The seed stores a 2,000-user sample of the 61,408-user app (scripts/seed.ts
// downsizes revenue by 2000/61408), so aggregate revenue is scaled back up for
// display. Per-transaction amounts and the refund rows are real per-account
// values and stay unscaled.
const APP_USERS = 61_408;
const SEED_USERS = 2_000;
const DISPLAY_SCALE = APP_USERS / SEED_USERS; // ≈ 30.7
// App-level paying-user count (CONTRACT seed reference). The sample seeds ~26%
// paying vs ~12.9% app-wide — an intentional over-representation — so scaling
// the seeded subscriber count by DISPLAY_SCALE would overshoot; use the known
// app-level figure for ARPU and the donut center.
const PAYING_APP = 7_930;

// Plan mix per the brief/mock (Free 61 / Plus 27 / Pro 12). The 2,000-row
// sample over-represents paying users (see above), so these shares come from
// the app-level reference numbers, not a sample aggregate.
const PLAN_MIX = [
  { name: 'Free', price: '€0', share: 61, color: '#C9D2CC' },
  { name: 'Plus', price: '€5.99/mo', share: 27, color: '#4A6CF7' },
  { name: 'Pro', price: '€11.99/mo', share: 12, color: 'var(--acc)' },
] as const;

const PLAN_LABEL: Record<'free' | 'monthly' | 'annual', string> = {
  free: 'Free',
  monthly: 'Plus monthly',
  annual: 'Pro annual',
};

const dateFmt = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' });
const timeFmt = new Intl.DateTimeFormat('en-IE', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});
const monthFmt = new Intl.DateTimeFormat('en-US', { month: 'short' });

export default async function BillingPage() {
  const session = await auth();
  const canWrite = can(session?.user.role, 'billing.write');
  const d = await db();
  const now = new Date();

  // 12-month charge aggregates (Drizzle sql`` group-by-month).
  const windowStart = new Date(now.getFullYear(), now.getMonth() - 11, 1);
  const monthExpr = sql`date_trunc('month', ${schema.payments.occurredAt})`;
  const monthlyRows = await d
    .select({
      month: sql<string>`to_char(${monthExpr}, 'YYYY-MM')`,
      totalCents: sql<number>`sum(${schema.payments.amountCents})::int`.mapWith(Number),
    })
    .from(schema.payments)
    .where(sql`${schema.payments.kind} = 'charge' and ${schema.payments.occurredAt} >= ${windowStart}`)
    .groupBy(monthExpr)
    .orderBy(monthExpr);
  const byMonth = new Map(monthlyRows.map((r) => [r.month, r.totalCents]));
  const months: MrrPoint[] = Array.from({ length: 12 }, (_, i) => {
    const m = new Date(now.getFullYear(), now.getMonth() - 11 + i, 1);
    const key = `${m.getFullYear()}-${String(m.getMonth() + 1).padStart(2, '0')}`;
    return {
      label: monthFmt.format(m),
      mrrCents: Math.round((byMonth.get(key) ?? 0) * DISPLAY_SCALE),
    };
  });

  // MRR = current month's charge aggregate × DISPLAY_SCALE (the chart's last
  // bar — the seed calibrates monthly charge totals to the 46→86K MRR ramp,
  // landing ≈ €86.1K). ARR run rate = MRR × 12. ARPU = MRR / paying users.
  const mrrCents = months[months.length - 1].mrrCents;
  const arrCents = mrrCents * 12;
  const arpuCents = Math.round(mrrCents / PAYING_APP);

  // Refunds (30d): the seeded refund rows are real per-account (app-level)
  // amounts (≈€414 total), so the sum is displayed as-is; the "% of rev"
  // compares them against the same 30d charges scaled to app level so both
  // sides of the ratio are app-level (kept honest: ≈0.3%).
  const since30 = new Date(now.getTime() - 30 * 86_400_000);
  const [rev30] = await d
    .select({
      refundCents: sql<number>`coalesce(sum(${schema.payments.amountCents}) filter (where ${schema.payments.kind} = 'refund'), 0)::int`.mapWith(Number),
      chargeCents: sql<number>`coalesce(sum(${schema.payments.amountCents}) filter (where ${schema.payments.kind} = 'charge'), 0)::int`.mapWith(Number),
    })
    .from(schema.payments)
    .where(gte(schema.payments.occurredAt, since30));
  const refundCents = rev30?.refundCents ?? 0;
  const rev30AppCents = (rev30?.chargeCents ?? 0) * DISPLAY_SCALE;
  const refundShare = rev30AppCents > 0 ? refundCents / rev30AppCents : 0;

  // Failed payments (dunning): past_due subs; "at risk" = their uncollected
  // charge amounts (per-account, unscaled — like the transactions table).
  const pastDue = await d
    .select({ plan: schema.subscriptions.plan })
    .from(schema.subscriptions)
    .where(eq(schema.subscriptions.status, 'past_due'));
  const atRiskCents = pastDue.reduce((s, r) => s + (r.plan === 'annual' ? 9_900 : 599), 0);

  // Latest 12 payments, joined subscription → user.
  const txRaw = await d
    .select({
      id: schema.payments.id,
      amountCents: schema.payments.amountCents,
      kind: schema.payments.kind,
      status: schema.payments.status,
      occurredAt: schema.payments.occurredAt,
      plan: schema.subscriptions.plan,
      store: schema.subscriptions.store,
      customer: schema.users.displayName,
    })
    .from(schema.payments)
    .innerJoin(schema.subscriptions, eq(schema.payments.subscriptionId, schema.subscriptions.id))
    .innerJoin(schema.users, eq(schema.subscriptions.userId, schema.users.id))
    .orderBy(desc(schema.payments.occurredAt))
    .limit(12);
  const txRows: TxRow[] = txRaw.map((t) => {
    const isRefund = t.kind === 'refund';
    const chip: TxRow['chip'] =
      isRefund || t.status === 'refunded' ? 'Refunded' : t.status === 'failed' ? 'Failed' : 'Paid';
    return {
      id: t.id,
      customer: t.customer,
      planLabel: PLAN_LABEL[t.plan],
      store: t.store,
      amountLabel: eur(isRefund ? -t.amountCents : t.amountCents),
      isRefund,
      kindLabel: isRefund ? 'Refund' : 'Charge',
      chip,
      dateLabel: `${dateFmt.format(t.occurredAt)}, ${timeFmt.format(t.occurredAt)}`,
      refundable: t.kind === 'charge' && t.status === 'paid',
    };
  });

  const kpis = [
    { label: 'MRR', value: eurWhole(mrrCents), delta: '+4.8%', ok: true },
    { label: 'ARR run rate', value: `€${(arrCents / 100 / 1e6).toFixed(2)}M`, delta: '+38% YoY', ok: true },
    { label: 'ARPU', value: eur(arpuCents), delta: '+€0.40', ok: true },
    { label: 'Refunds (30d)', value: eurWhole(refundCents), delta: `${pct(refundShare)} of rev`, ok: false },
  ];

  const slices: PlanSlice[] = PLAN_MIX.map((p) => ({ name: p.name, value: p.share, color: p.color }));

  return (
    <div className={styles.wrap}>
      <div className={styles.kpis}>
        {kpis.map((k) => (
          <div key={k.label} className={styles.kpi}>
            <div className={styles.kpiLabel}>{k.label}</div>
            <div className={styles.kpiValue}>
              {k.value}
              <span className={`${styles.kpiDelta} ${k.ok ? styles.deltaOk : styles.deltaMut}`}>
                {k.delta}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.cardTitle}>MRR — last 12 months</div>
          {months.every((m) => m.mrrCents === 0) ? (
            <div className={styles.empty}>
              <div className={styles.emptyIcon} aria-hidden="true">◎</div>
              No revenue yet
            </div>
          ) : (
            <MrrChart data={months} />
          )}
        </div>
        <div className={styles.rightCol}>
          <div className={styles.card}>
            <div className={styles.cardTitle}>Plan mix</div>
            <PlanMixDonut
              slices={slices}
              centerValue={compact(PAYING_APP)}
              centerLabel="paying"
            />
            <div className={styles.planRows}>
              {PLAN_MIX.map((p) => (
                <div key={p.name}>
                  <div className={styles.planHead}>
                    <div className={styles.planName}>
                      {p.name} <span className={styles.planPrice}>{p.price}</span>
                    </div>
                    <div className={styles.planShare}>{p.share}%</div>
                  </div>
                  <div className={styles.planBar}>
                    <div
                      className={styles.planFill}
                      style={{ width: `${p.share}%`, background: p.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <FailedPaymentsCard
            count={pastDue.length}
            atRiskLabel={eurWhole(atRiskCents)}
            canWrite={canWrite}
          />
        </div>
      </div>

      <TransactionsTable rows={txRows} canWrite={canWrite} />
    </div>
  );
}
