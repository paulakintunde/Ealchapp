// Releases & flags — current rollout card (staged rollout lifecycle),
// release history, and per-environment feature flags with optimistic toggles.
import { desc, eq } from 'drizzle-orm';
import { auth } from '@/auth';
import { db, schema } from '@/db';
import { can } from '@/lib/rbac';
import { relTime } from '@/lib/format';
import RolloutCard, { type RolloutRow } from './RolloutCard';
import FlagsCard, { type FlagRow } from './FlagsCard';
import type { FlagEnvironments } from './actions';
import styles from './releases.module.css';

export const dynamic = 'force-dynamic';

const TOTAL_USERS = 61_408;
const FORCE_UPDATE_KEY = 'force_update_below_v22';
const FLAG_ORDER = [
  'weekly_leaderboards',
  'ai_tutor_v2',
  'offline_packs',
  'referral_rewards',
  'winback_discount',
];

const PRETTY_WORD: Record<string, string> = { ai: 'AI', v2: 'v2', v22: 'v2.2', qr: 'QR' };

function prettify(key: string): string {
  return key
    .split('_')
    .map((w, i) => PRETTY_WORD[w] ?? (i === 0 ? w[0].toUpperCase() + w.slice(1) : w))
    .join(' ');
}

function shortDate(d: Date): string {
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

type HistoryStatus = 'complete' | 'rolling' | 'halted' | 'staged' | 'draft';

const HISTORY_CHIP: Record<HistoryStatus, { label: string; cls: string }> = {
  complete: { label: 'Live', cls: styles.chipOk },
  rolling: { label: 'Rolling', cls: styles.chipWarn },
  halted: { label: 'Halted', cls: styles.chipBad },
  staged: { label: 'Staged', cls: styles.chipStaged },
  draft: { label: 'Draft', cls: styles.chipGrey },
};

export default async function ReleasesPage() {
  const session = await auth();
  const canRelease = can(session?.user.role, 'releases.write');
  const canFlags = can(session?.user.role, 'flags.write');

  const d = await db();
  const [releases, flags, flagAudits, [crashRow]] = await Promise.all([
    d.select().from(schema.releases).orderBy(desc(schema.releases.createdAt)),
    d.select().from(schema.featureFlags),
    d
      .select({
        entityId: schema.auditLog.entityId,
        createdAt: schema.auditLog.createdAt,
        adminName: schema.adminUsers.name,
      })
      .from(schema.auditLog)
      .leftJoin(schema.adminUsers, eq(schema.auditLog.adminId, schema.adminUsers.id))
      .where(eq(schema.auditLog.entityType, 'feature_flag'))
      .orderBy(desc(schema.auditLog.createdAt)),
    d
      .select({ value: schema.metrics.value })
      .from(schema.metrics)
      .where(eq(schema.metrics.name, 'crash_free'))
      .orderBy(desc(schema.metrics.ts))
      .limit(1),
  ]);

  // ── Current rollout: latest version still staged/rolling/halted, else the
  //    most recent release overall. ─────────────────────────────────────────
  const inFlight = releases.find((r) =>
    r.status === 'rolling' || r.status === 'staged' || r.status === 'halted',
  );
  const currentVersion = inFlight?.version ?? releases[0]?.version ?? null;
  const currentRows: RolloutRow[] = releases
    .filter((r) => r.version === currentVersion)
    .map((r) => ({ id: r.id, platform: r.platform, rolloutPct: r.rolloutPct, status: r.status }))
    .sort((a, b) => b.platform.localeCompare(a.platform)); // iOS first, like the mock

  const releasedAt = releases
    .filter((r) => r.version === currentVersion)
    .reduce<Date | null>((min, r) => (!min || r.createdAt < min ? r.createdAt : min), null);
  const crashFree = crashRow ? `${Number(crashRow.value).toFixed(2)}%` : '99.61%';

  const forceFlag = flags.find((f) => f.key === FORCE_UPDATE_KEY) ?? null;
  const forceEnvs = (forceFlag?.environments ?? null) as FlagEnvironments | null;

  // ── Release history: one row per version ─────────────────────────────────
  const byVersion = new Map<string, typeof releases>();
  for (const r of releases) {
    const list = byVersion.get(r.version) ?? [];
    list.push(r);
    byVersion.set(r.version, list);
  }
  const history = [...byVersion.entries()].map(([version, rows]) => {
    const statuses = new Set(rows.map((r) => r.status));
    const status: HistoryStatus = statuses.has('halted')
      ? 'halted'
      : statuses.has('rolling')
        ? 'rolling'
        : statuses.has('staged')
          ? 'staged'
          : statuses.has('draft')
            ? 'draft'
            : 'complete';
    const date = rows.reduce((min, r) => (r.createdAt < min ? r.createdAt : min), rows[0].createdAt);
    return { version, notes: rows[0].notes, status, date };
  });
  history.sort((a, b) => b.date.getTime() - a.date.getTime());

  // ── Flags for the right column (force-update lives in the rollout card) ──
  const lastChangeByFlag = new Map<string, { name: string | null; at: Date }>();
  for (const a of flagAudits) {
    if (a.entityId && !lastChangeByFlag.has(a.entityId)) {
      lastChangeByFlag.set(a.entityId, { name: a.adminName, at: a.createdAt });
    }
  }
  const orderOf = (key: string) => {
    const i = FLAG_ORDER.indexOf(key);
    return i === -1 ? FLAG_ORDER.length : i;
  };
  const flagRows: FlagRow[] = flags
    .filter((f) => f.key !== FORCE_UPDATE_KEY)
    .sort((a, b) => orderOf(a.key) - orderOf(b.key) || a.key.localeCompare(b.key))
    .map((f) => {
      const change = lastChangeByFlag.get(f.key) ?? lastChangeByFlag.get(f.id) ?? null;
      const lastChanged = change
        ? `Last changed by ${change.name ?? 'system'}, ${relTime(change.at)}`
        : `Last changed ${relTime(f.updatedAt)}`;
      return {
        id: f.id,
        key: f.key,
        name: prettify(f.key),
        description: f.description,
        kind: f.kind,
        environments: (f.environments ?? { prod: false, staging: false }) as FlagEnvironments,
        lastChanged,
      };
    });

  return (
    <div className={styles.grid}>
      <div className={styles.colLeft}>
        {currentVersion && currentRows.length > 0 ? (
          <RolloutCard
            version={currentVersion}
            rows={currentRows}
            releasedLabel={releasedAt ? shortDate(releasedAt) : '—'}
            crashFree={crashFree}
            totalUsers={TOTAL_USERS}
            forceFlag={
              forceFlag
                ? { id: forceFlag.id, on: (forceEnvs?.prod ?? forceFlag.value) === true }
                : null
            }
            canRelease={canRelease}
            canFlags={canFlags}
          />
        ) : (
          <div className={styles.card}>
            <div className={styles.empty}>
              <div className={styles.emptyIcon} aria-hidden="true">⟳</div>
              <div className={styles.emptyText}>No releases yet</div>
            </div>
          </div>
        )}

        <div className={styles.historyCard}>
          <div className={styles.historyTitle}>Release history</div>
          {history.length === 0 ? (
            <div className={styles.empty}>
              <div className={styles.emptyText}>No releases yet</div>
            </div>
          ) : (
            history.map((h) => {
              const chip = HISTORY_CHIP[h.status];
              return (
                <div key={h.version} className={styles.histRow}>
                  <div className={styles.histVer}>{h.version}</div>
                  <div className={styles.histNotes}>{h.notes ?? '—'}</div>
                  <div className={`${styles.chip} ${chip.cls}`}>{chip.label}</div>
                  <div className={styles.histDate}>{shortDate(h.date)}</div>
                </div>
              );
            })
          )}
        </div>
      </div>

      <FlagsCard flags={flagRows} canFlags={canFlags} />
    </div>
  );
}
