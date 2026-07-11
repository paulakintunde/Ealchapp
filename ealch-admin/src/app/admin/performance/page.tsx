// Performance — RSC. KPI cards, 24h p95 multi-line chart (server-downsampled),
// 90-day uptime heat strip, endpoint table and the incidents table.
//
// NOTE: anomaly DETECTION is not implemented here — the background worker in
// src/lib/workers.ts (shell slice, started from instrumentation.ts) already
// watches the p95 series every 60 s, opens/resolves `anomaly` incidents and
// publishes bus events. This screen only reads its output.
import { and, asc, desc, gte, inArray, sql } from 'drizzle-orm';
import { auth } from '@/auth';
import { db, schema } from '@/db';
import { can } from '@/lib/rbac';
import { relTime } from '@/lib/format';
import LatencyChart, { type LatencyPoint, type SeriesKey } from './LatencyChart';
import IncidentsTable, { type IncidentRow } from './IncidentsTable';
import styles from './performance.module.css';

const MIN = 60_000;
const DAY = 24 * 60 * MIN;
const BUCKET_MS = 5 * MIN; // 24h of 1-min rows → ~288 chart points

function fmtMs(v: number): string {
  return v >= 1000 ? `${(v / 1000).toFixed(2)} s` : `${Math.round(v)} ms`;
}

function avg(xs: number[]): number | null {
  return xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : null;
}

type MetricRow = { name: string; region: string; value: string; ts: Date };

function seriesKeyFor(name: string, region: string): SeriesKey | null {
  if (name === 'api_p95_ms') {
    return region === 'eu-west' ? 'apiEu' : region === 'us-east' ? 'apiUs' : null;
  }
  if (name === 'tts_p95_ms') {
    return region === 'eu-west' ? 'ttsEu' : region === 'us-east' ? 'ttsUs' : null;
  }
  return null;
}

// ── API endpoints — last hour ────────────────────────────────────────────
// Mock constants as fallback; /v2/tts/stream p95 is overridden from the live
// tts_p95_ms eu-west series. Colors/health derive from each route's latency
// budget (warn when p95 exceeds it — 1 s for the TTS stream) + error rate.
const ENDPOINTS = [
  { route: '/v2/session/next', p50: 88, p95: 310, err: 0.02, budget: 500 },
  { route: '/v2/tts/stream', p50: 410, p95: 1420, err: 0.4, budget: 1000 },
  { route: '/v2/chat/tutor', p50: 620, p95: 1900, err: 0.08, budget: 2500 },
  { route: '/v2/billing/checkout', p50: 140, p95: 480, err: 0.01, budget: 800 },
  { route: '/v2/content/bundle', p50: 95, p95: 350, err: 0.0, budget: 600 },
  { route: '/v2/speech/grade', p50: 780, p95: 2300, err: 0.11, budget: 3000 },
];
const ERR_BUDGET_PCT = 0.3;

function uptimeShade(v: number): string {
  if (v < 99.9) return 'color-mix(in srgb, var(--warn) 55%, #FFFFFF)';
  const p = Math.max(0.25, Math.min(1, (v - 99.95) / 0.05));
  return `color-mix(in srgb, var(--ok) ${Math.round(p * 100)}%, #DFEDE6)`;
}

// All metric reads + aggregation live outside the component so the RSC render
// itself stays pure (react-hooks/purity flags Date.now in component bodies).
async function loadPerformanceData() {
  const d = await db();
  // Anchor the analysis window to the freshest metric row rather than wall
  // clock, so the dashboard reads correctly however stale the ingest is
  // (seeded data, paused collectors) instead of showing empty KPIs.
  const [latestMetric] = await d
    .select({ ts: sql<string | null>`max(${schema.metrics.ts})` })
    .from(schema.metrics);
  const now = latestMetric?.ts ? new Date(latestMetric.ts).getTime() : Date.now();
  const since24h = new Date(now - DAY);
  const since30d = new Date(now - 30 * DAY);
  const since90d = new Date(now - 90 * DAY);

  const [latencyRows, uptimeRows, crashRows, incidentRows] = await Promise.all([
    d
      .select({
        name: schema.metrics.name,
        region: schema.metrics.region,
        value: schema.metrics.value,
        ts: schema.metrics.ts,
      })
      .from(schema.metrics)
      .where(
        and(
          inArray(schema.metrics.name, ['api_p95_ms', 'tts_p95_ms']),
          gte(schema.metrics.ts, since24h),
        ),
      )
      .orderBy(asc(schema.metrics.ts)) as Promise<MetricRow[]>,
    d
      .select({
        region: schema.metrics.region,
        value: schema.metrics.value,
        ts: schema.metrics.ts,
      })
      .from(schema.metrics)
      .where(and(inArray(schema.metrics.name, ['uptime']), gte(schema.metrics.ts, since90d)))
      .orderBy(asc(schema.metrics.ts)),
    d
      .select({ value: schema.metrics.value, ts: schema.metrics.ts })
      .from(schema.metrics)
      .where(and(inArray(schema.metrics.name, ['crash_free']), gte(schema.metrics.ts, since24h))),
    d.select().from(schema.incidents).orderBy(desc(schema.incidents.openedAt)),
  ]);

  // ── Chart: bucket the 1-min rows to ~288 points, per (metric, region) ────
  const buckets = new Map<number, Partial<Record<SeriesKey, { sum: number; n: number }>>>();
  for (const row of latencyRows) {
    const key = seriesKeyFor(row.name, row.region);
    const v = Number(row.value);
    if (!key || !Number.isFinite(v)) continue;
    const t = Math.floor(row.ts.getTime() / BUCKET_MS) * BUCKET_MS;
    let b = buckets.get(t);
    if (!b) {
      b = {};
      buckets.set(t, b);
    }
    const acc = (b[key] ??= { sum: 0, n: 0 });
    acc.sum += v;
    acc.n += 1;
  }
  const chartData: LatencyPoint[] = [...buckets.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([t, b]) => ({
      t,
      apiEu: b.apiEu ? b.apiEu.sum / b.apiEu.n : null,
      apiUs: b.apiUs ? b.apiUs.sum / b.apiUs.n : null,
      ttsEu: b.ttsEu ? b.ttsEu.sum / b.ttsEu.n : null,
      ttsUs: b.ttsUs ? b.ttsUs.sum / b.ttsUs.n : null,
    }));

  // ── KPI computations (latest values, diffs vs 24 h ago) ─────────────────
  const pickVals = (
    name: string,
    region: string | null,
    fromMs: number,
    toMs: number,
  ): number[] =>
    latencyRows
      .filter(
        (r) =>
          r.name === name &&
          (region === null || r.region === region) &&
          r.ts.getTime() >= fromMs &&
          r.ts.getTime() < toMs,
      )
      .map((r) => Number(r.value))
      .filter(Number.isFinite);

  const apiNow = avg(pickVals('api_p95_ms', null, now - 10 * MIN, now + MIN));
  const apiYesterday = avg(
    pickVals('api_p95_ms', null, since24h.getTime(), since24h.getTime() + 15 * MIN),
  );
  const apiDelta = apiNow !== null && apiYesterday !== null ? Math.round(apiNow - apiYesterday) : null;

  const ttsNow = avg(pickVals('tts_p95_ms', 'eu-west', now - 10 * MIN, now + MIN));
  const ttsBaseline = avg(pickVals('tts_p95_ms', 'eu-west', since24h.getTime(), now - 60 * MIN));
  const ttsPctUp =
    ttsNow !== null && ttsBaseline ? Math.round((ttsNow / ttsBaseline - 1) * 100) : null;
  const ttsAnomalyOpen = incidentRows.some(
    (i) => i.severity === 'anomaly' && i.metricRef === 'tts_p95_ms' && i.status !== 'resolved',
  );

  const uptime30 = avg(
    uptimeRows.filter((r) => r.ts.getTime() >= since30d.getTime()).map((r) => Number(r.value)),
  );
  const uptimeMet = uptime30 !== null && uptime30 >= 99.9;

  const crashFree = avg(crashRows.map((r) => Number(r.value)));

  const kpis = [
    {
      label: 'Uptime 30d',
      value: uptime30 !== null ? `${uptime30.toFixed(2)}%` : '—',
      sub: uptimeMet ? 'SLO 99.9% — met' : 'SLO 99.9% — missed',
      subClass: uptimeMet ? styles.subOk : styles.subBad,
      dot: uptimeMet ? 'var(--ok)' : 'var(--bad)',
    },
    {
      label: 'API p95',
      value: apiNow !== null ? fmtMs(apiNow) : '—',
      sub:
        apiDelta !== null
          ? `${apiDelta >= 0 ? '+' : '−'}${Math.abs(apiDelta)} ms vs yesterday`
          : 'no baseline yet',
      subClass: styles.subMut,
      dot: 'var(--ok)',
    },
    {
      label: 'TTS p95',
      value: ttsNow !== null ? fmtMs(ttsNow) : '—',
      sub: ttsAnomalyOpen
        ? `${ttsPctUp !== null && ttsPctUp > 0 ? `+${ttsPctUp}%` : 'elevated'} last hour — investigating`
        : 'eu-west — nominal',
      subClass: ttsAnomalyOpen ? styles.subWarn : styles.subMut,
      dot: ttsAnomalyOpen ? 'var(--warn)' : 'var(--ok)',
    },
    {
      label: 'Crash-free sessions',
      value: crashFree !== null ? `${crashFree.toFixed(2)}%` : '—',
      sub: 'v2.4.0 cohort',
      subClass: styles.subMut,
      dot: 'var(--ok)',
    },
  ];

  // ── Uptime heat strip: 90 days, aggregated per day ───────────────────────
  const byDay = new Map<string, { sum: number; n: number }>();
  for (const r of uptimeRows) {
    const key = r.ts.toISOString().slice(0, 10);
    const acc = byDay.get(key) ?? { sum: 0, n: 0 };
    acc.sum += Number(r.value);
    acc.n += 1;
    byDay.set(key, acc);
  }
  const heatDays = Array.from({ length: 90 }, (_, i) => {
    const date = new Date(now - (89 - i) * DAY);
    const key = date.toISOString().slice(0, 10);
    const acc = byDay.get(key);
    const value = acc ? acc.sum / acc.n : null;
    const label = date.toLocaleDateString('en-IE', { day: 'numeric', month: 'short' });
    return { key, value, title: value !== null ? `${label} — ${value.toFixed(3)}% uptime` : `${label} — no data` };
  });

  // ── Endpoints (live TTS override) ────────────────────────────────────────
  const endpoints = ENDPOINTS.map((ep) => {
    const p95 = ep.route === '/v2/tts/stream' && ttsNow !== null ? ttsNow : ep.p95;
    const degraded = p95 > ep.budget || ep.err > ERR_BUDGET_PCT;
    return {
      ...ep,
      p95,
      p95Warn: p95 > ep.budget,
      health: degraded ? 'Degraded' : 'Healthy',
      dot: degraded ? 'var(--warn)' : 'var(--ok)',
    };
  });

  const incidents: IncidentRow[] = incidentRows.map((i) => ({
    id: i.id,
    severity: i.severity,
    title: i.title,
    region: i.region,
    metricRef: i.metricRef,
    status: i.status,
    openedRel: relTime(i.openedAt),
  }));

  return { chartData, kpis, uptime30, heatDays, endpoints, incidents };
}

export default async function PerformancePage() {
  const session = await auth();
  const canAct = can(session?.user.role, 'incidents.act');
  const { chartData, kpis, uptime30, heatDays, endpoints, incidents } =
    await loadPerformanceData();

  return (
    <div className={styles.wrap}>
      {/* KPI cards */}
      <div className={styles.kpiGrid}>
        {kpis.map((k) => (
          <div key={k.label} className={styles.kpiCard}>
            <div className={styles.kpiHead}>
              <div className={styles.kpiDot} style={{ background: k.dot }} />
              <div className={styles.kpiLabel}>{k.label}</div>
            </div>
            <div className={styles.kpiValue}>{k.value}</div>
            <div className={`${styles.kpiSub} ${k.subClass}`}>{k.sub}</div>
          </div>
        ))}
      </div>

      {/* p95 latency chart */}
      <div className={styles.card}>
        <div className={styles.cardHead}>
          <div className={styles.cardTitle}>p95 latency — last 24 h, by region</div>
        </div>
        <div className={styles.chartBody}>
          {chartData.length === 0 ? (
            <div className={styles.emptyInline}>No latency samples in the last 24 h.</div>
          ) : (
            <LatencyChart data={chartData} />
          )}
        </div>
      </div>

      {/* Uptime 90-day heat strip */}
      <div className={styles.card}>
        <div className={styles.cardHead}>
          <div className={styles.cardTitle}>Uptime — last 90 days</div>
          <div className={styles.cardHeadNote}>
            {uptime30 !== null ? `${uptime30.toFixed(2)}% over 30 d` : ''}
          </div>
        </div>
        <div className={styles.heatBody}>
          <div className={styles.heatGrid}>
            {heatDays.map((day) => (
              <div
                key={day.key}
                className={styles.heatCell}
                title={day.title}
                style={{
                  background: day.value !== null ? uptimeShade(day.value) : '#E3E6E1',
                }}
              />
            ))}
          </div>
          <div className={styles.heatLegend}>
            <span>90 days · grey = no data</span>
            <span className={styles.heatLegendScale}>
              Lower
              {[0.25, 0.5, 0.75, 1].map((p) => (
                <span
                  key={p}
                  className={styles.heatCell}
                  style={{ background: `color-mix(in srgb, var(--ok) ${p * 100}%, #DFEDE6)` }}
                />
              ))}
              Higher
            </span>
          </div>
        </div>
      </div>

      {/* API endpoints */}
      <div className={styles.card}>
        <div className={styles.cardHead}>
          <div className={styles.cardTitle}>API endpoints — last hour</div>
        </div>
        <div className={styles.epHeadRow}>
          <div>Route</div>
          <div>p50</div>
          <div>p95</div>
          <div>Errors</div>
          <div>Health</div>
        </div>
        {endpoints.map((ep) => (
          <div key={ep.route} className={styles.epRow}>
            <div className={styles.epRoute}>{ep.route}</div>
            <div>{fmtMs(ep.p50)}</div>
            <div className={ep.p95Warn ? styles.epP95Warn : styles.epP95}>{fmtMs(ep.p95)}</div>
            <div>{ep.err.toFixed(2)}%</div>
            <div className={styles.epHealth}>
              <div className={styles.epDot} style={{ background: ep.dot }} />
              {ep.health}
            </div>
          </div>
        ))}
      </div>

      {/* Incidents */}
      <IncidentsTable incidents={incidents} canAct={canAct} />
    </div>
  );
}
