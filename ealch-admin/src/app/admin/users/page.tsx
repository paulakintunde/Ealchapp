// Users — RSC: reads searchParams (?q=&filter=&page=&sort=), computes the
// KPI cards and the first table page server-side, then hands off to the
// client table (TanStack Table + Query) which refetches via /api/admin/users.
import { auth } from '@/auth';
import { can } from '@/lib/rbac';
import { pct } from '@/lib/format';
import UsersTable from '@/components/users/UsersTable';
import { parseUsersParams } from '@/components/users/types';
import { fetchUserKpis, fetchUsersPage } from './query';
import styles from './users.module.css';

export const dynamic = 'force-dynamic';

// Display scaling: we seed 2,000 user rows standing in for the app's 61,408
// real users, so headline counts are scaled ×(61408/2000) = ×30.704.
const APP_SCALE = 61408 / 2000;
// The seed intentionally over-samples paying users (26% of rows vs the app's
// real 12.9% plan mix) so billing screens have enough data; the "Paying" card
// therefore uses its own factor calibrated to the app-scale figure (~7,930
// paying: 502 seeded active/trialing non-free subs).
const PAYING_SCALE = 7930 / 502;

const nf = new Intl.NumberFormat('en-IE');

export default async function UsersPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const session = await auth();
  const role = session?.user.role;

  if (!can(role, 'users.read')) {
    return (
      <div className={styles.page}>
        <h1 className={styles.title}>Users</h1>
        <div className={styles.noAccess}>
          Your role doesn’t have access to user records.
        </div>
      </div>
    );
  }

  const params = parseUsersParams(await searchParams);
  const [kpis, initialData] = await Promise.all([
    fetchUserKpis(),
    fetchUsersPage(params),
  ]);

  const totalScaled = Math.round(kpis.total * APP_SCALE);
  const payingScaled = Math.round(kpis.paying * PAYING_SCALE);
  const payingShare = totalScaled > 0 ? pct(payingScaled / totalScaled) : '—';

  const cards: { label: string; value: string; delta: string; deltaClass: 'ok' | 'mut' }[] = [
    { label: 'Total users', value: nf.format(totalScaled), delta: '+1,204 this wk', deltaClass: 'ok' },
    { label: 'New today', value: nf.format(kpis.newToday), delta: '+9%', deltaClass: 'ok' },
    { label: 'Paying', value: nf.format(payingScaled), delta: payingShare, deltaClass: 'mut' },
    { label: 'At churn risk', value: nf.format(kpis.churnRisk), delta: '−31', deltaClass: 'ok' },
  ];

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Users</h1>

      <div className={styles.cards}>
        {cards.map((c) => (
          <div key={c.label} className={styles.card}>
            <div className={styles.cardLabel}>{c.label}</div>
            <div className={styles.cardValue}>
              {c.value}{' '}
              <span className={c.deltaClass === 'ok' ? styles.deltaOk : styles.deltaMut}>
                {c.delta}
              </span>
            </div>
          </div>
        ))}
      </div>

      <UsersTable
        initialParams={params}
        initialData={initialData}
        canAct={can(role, 'users.act')}
      />
    </div>
  );
}
