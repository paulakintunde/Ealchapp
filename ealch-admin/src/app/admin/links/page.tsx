// Link tracking — stat cards + tracked-links table with click aggregates,
// 14-day sparklines (server-computed), archive toggle and ?q= slug filter.
import Link from 'next/link';
import { and, count, desc, eq, gte, lt, sql } from 'drizzle-orm';
import { auth } from '@/auth';
import { db, schema } from '@/db';
import { can } from '@/lib/rbac';
import { compact, pct, relTime } from '@/lib/format';
import NewLink from './NewLink';
import RowActions from './RowActions';
import ArchivedToggle from './ArchivedToggle';
import styles from './links.module.css';

export const dynamic = 'force-dynamic';

const DAY_MS = 86_400_000;

/** 7d/14d cut-offs + the 14 daily bucket keys (UTC dates, oldest first). */
function clickWindows() {
  const now = Date.now();
  return {
    since7: new Date(now - 7 * DAY_MS),
    since14: new Date(now - 14 * DAY_MS),
    dayKeys: Array.from({ length: 14 }, (_, i) =>
      new Date(now - (13 - i) * DAY_MS).toISOString().slice(0, 10),
    ),
  };
}

const CHANNEL_CHIP: Record<string, string> = {
  email: styles.chipEmail,
  social: styles.chipSocial,
  ads: styles.chipAds,
  podcast: styles.chipPodcast,
  qr: styles.chipQr,
};

/** 64×20 inline sparkline from last-14-day daily click counts. */
function Sparkline({ counts }: { counts: number[] }) {
  const w = 64;
  const h = 20;
  const max = Math.max(...counts, 1);
  const points = counts
    .map((v, i) => {
      const x = 1 + (i * (w - 2)) / (counts.length - 1);
      const y = h - 2 - (v / max) * (h - 4);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} aria-hidden="true">
      <polyline
        points={points}
        fill="none"
        stroke="var(--acc)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default async function LinksPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;
  const q = (typeof sp.q === 'string' ? sp.q : '').trim().toLowerCase();
  const showArchived = sp.archived === '1';

  const session = await auth();
  const canWrite = can(session?.user.role, 'links.write');

  const d = await db();
  const { since7, since14, dayKeys } = clickWindows();
  const dayExpr = sql<string>`to_char(date_trunc('day', ${schema.linkClicks.ts}), 'YYYY-MM-DD')`;

  const [links, totals, daily, [clicks7Row], [clicksPrev7Row], channel7] =
    await Promise.all([
      d.select().from(schema.trackedLinks).orderBy(desc(schema.trackedLinks.createdAt)),
      d
        .select({ linkId: schema.linkClicks.linkId, n: count() })
        .from(schema.linkClicks)
        .groupBy(schema.linkClicks.linkId),
      d
        .select({ linkId: schema.linkClicks.linkId, day: dayExpr, n: count() })
        .from(schema.linkClicks)
        .where(gte(schema.linkClicks.ts, since14))
        .groupBy(schema.linkClicks.linkId, dayExpr),
      d
        .select({ n: count() })
        .from(schema.linkClicks)
        .where(gte(schema.linkClicks.ts, since7)),
      d
        .select({ n: count() })
        .from(schema.linkClicks)
        .where(and(gte(schema.linkClicks.ts, since14), lt(schema.linkClicks.ts, since7))),
      d
        .select({ channel: schema.trackedLinks.channel, n: count() })
        .from(schema.linkClicks)
        .innerJoin(schema.trackedLinks, eq(schema.linkClicks.linkId, schema.trackedLinks.id))
        .where(gte(schema.linkClicks.ts, since7))
        .groupBy(schema.trackedLinks.channel),
    ]);

  // ── Aggregates ────────────────────────────────────────────────────────────
  const totalByLink = new Map(totals.map((t) => [t.linkId, t.n]));

  const dailyByLink = new Map<string, Map<string, number>>();
  for (const row of daily) {
    let m = dailyByLink.get(row.linkId);
    if (!m) {
      m = new Map();
      dailyByLink.set(row.linkId, m);
    }
    m.set(row.day, row.n);
  }
  const seriesFor = (linkId: string): number[] => {
    const m = dailyByLink.get(linkId);
    return dayKeys.map((k) => m?.get(k) ?? 0);
  };

  const activeCount = links.filter((l) => !l.archived).length;
  const clicks7 = clicks7Row?.n ?? 0;
  const clicksPrev7 = clicksPrev7Row?.n ?? 0;
  const delta7 =
    clicksPrev7 > 0 ? (clicks7 - clicksPrev7) / clicksPrev7 : null;

  const topChannel = [...channel7].sort((a, b) => b.n - a.n)[0] ?? null;
  const channelTotal7 = channel7.reduce((s, c) => s + c.n, 0);

  // ── Filter + sort (clicks desc, like the mock) ────────────────────────────
  const visible = links
    .filter((l) => (showArchived ? true : !l.archived))
    .filter((l) => (q ? l.slug.toLowerCase().includes(q) : true))
    .sort((a, b) => (totalByLink.get(b.id) ?? 0) - (totalByLink.get(a.id) ?? 0));

  const clearHref = showArchived ? '/admin/links?archived=1' : '/admin/links';

  return (
    <div className={styles.page}>
      <div className={styles.statGrid}>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>Active links</div>
          <div className={styles.statValue}>{activeCount}</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>Clicks 7d</div>
          <div className={styles.statValue}>
            {compact(clicks7)}{' '}
            {delta7 !== null ? (
              <span className={delta7 >= 0 ? styles.deltaOk : styles.deltaBad}>
                {delta7 >= 0 ? '+' : ''}
                {pct(delta7, 0)}
              </span>
            ) : null}
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>Top channel</div>
          <div className={styles.statValue}>
            {topChannel ? (
              <>
                {topChannel.channel[0].toUpperCase() + topChannel.channel.slice(1)}{' '}
                <span className={styles.deltaMut}>
                  {pct(channelTotal7 > 0 ? topChannel.n / channelTotal7 : 0, 0)} of clicks
                </span>
              </>
            ) : (
              '—'
            )}
          </div>
        </div>
      </div>

      <div className={styles.tableCard}>
        <div className={styles.tableHead}>
          <div className={styles.tableTitle}>Tracked links</div>
          {q ? (
            <Link className={styles.filterChip} href={clearHref}>
              “{q}” <span aria-hidden="true">×</span>
            </Link>
          ) : null}
          <div className={styles.spacer} />
          <ArchivedToggle showArchived={showArchived} q={q} />
          {canWrite ? <NewLink /> : null}
        </div>

        <div className={styles.gridHead}>
          <div>Short link</div>
          <div>Destination</div>
          <div>Campaign</div>
          <div>Channel</div>
          <div>Clicks</div>
          <div>14d</div>
          <div>Created</div>
          <div />
        </div>

        {visible.length === 0 ? (
          <div className={styles.empty}>
            <div className={styles.emptyIcon} aria-hidden="true">
              ⌁
            </div>
            <div className={styles.emptyText}>
              {q
                ? `No links match “${q}”`
                : links.length === 0
                  ? 'No tracked links yet'
                  : 'No active links — archived links are hidden'}
            </div>
            {q ? (
              <Link className={styles.emptyCta} href={clearHref}>
                Clear filter
              </Link>
            ) : links.length === 0 && canWrite ? (
              <div className={styles.emptyHint}>
                Create your first link with “+ New link”
              </div>
            ) : null}
          </div>
        ) : (
          visible.map((l) => (
            <div
              key={l.id}
              className={`${styles.row} ${l.archived ? styles.rowArchived : ''}`}
            >
              <div className={styles.slug}>ealch.app/{l.slug}</div>
              <div className={styles.dest} title={l.destinationUrl}>
                {l.destinationUrl}
              </div>
              <div className={styles.campaign}>{l.campaign ?? '—'}</div>
              <div>
                <span className={`${styles.chip} ${CHANNEL_CHIP[l.channel] ?? styles.chipQr}`}>
                  {l.channel}
                </span>
              </div>
              <div className={styles.clicks}>{compact(totalByLink.get(l.id) ?? 0)}</div>
              <div className={styles.spark}>
                <Sparkline counts={seriesFor(l.id)} />
              </div>
              <div className={styles.created}>{relTime(l.createdAt)}</div>
              <RowActions
                id={l.id}
                slug={l.slug}
                archived={l.archived}
                canWrite={canWrite}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
