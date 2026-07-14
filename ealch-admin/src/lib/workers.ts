// Background workers — started once per Node process from instrumentation.ts.
// (a) anomaly detection over p95 metric series every 60s
// (b) push-campaign send queue simulation every 5s
// DB and bus are imported dynamically inside each tick so merely importing
// this module has no build-time side effects.

const ANOMALY_INTERVAL_MS = 60_000;
const CAMPAIGN_INTERVAL_MS = 5_000;
const WINDOW_15M_MS = 15 * 60_000;
const WINDOW_24H_MS = 24 * 60 * 60_000;
const ANOMALY_RATIO = 1.3;
const RESOLVE_RATIO = 1.1;
const MIN_RECENT_POINTS = 3;
const MIN_BASELINE_POINTS = 4;

const P95_SERIES = ['api_p95_ms', 'tts_p95_ms'] as const;

const METRIC_LABEL: Record<string, string> = {
  api_p95_ms: 'API latency',
  tts_p95_ms: 'TTS latency',
};

type G = typeof globalThis & { __ealchWorkersStarted?: boolean };

export function startWorkers(): void {
  const g = globalThis as G;
  if (g.__ealchWorkersStarted) return;
  g.__ealchWorkersStarted = true;

  const safe = (fn: () => Promise<void>) => () => {
    fn().catch(() => {
      // never let a tick take the process down
    });
  };

  setInterval(safe(anomalyTick), ANOMALY_INTERVAL_MS).unref?.();
  setInterval(safe(campaignTick), CAMPAIGN_INTERVAL_MS).unref?.();
  // Run the anomaly rule once shortly after boot so the banner appears
  // without waiting a full minute.
  setTimeout(safe(anomalyTick), 5_000).unref?.();
}

/** Cheap deterministic hash for "deterministic-ish" pseudo-randomness. */
function hashStr(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

// ── (a) Anomaly rule ────────────────────────────────────────────────────────
async function anomalyTick(): Promise<void> {
  try {
    const [{ db, schema }, { and, eq, gte, inArray, ne }, { publish }] =
      await Promise.all([
        import('@/db'),
        import('drizzle-orm'),
        import('@/lib/bus'),
      ]);
    const d = await db();
    const now = Date.now();
    const since24h = new Date(now - WINDOW_24H_MS);
    const cutoff15m = now - WINDOW_15M_MS;

    const rows = await d
      .select()
      .from(schema.metrics)
      .where(
        and(
          inArray(schema.metrics.name, [...P95_SERIES]),
          gte(schema.metrics.ts, since24h),
        ),
      );

    // Group per series (name × region).
    const series = new Map<
      string,
      { name: string; region: string; recent: number[]; baseline: number[] }
    >();
    for (const row of rows) {
      const key = `${row.name}|${row.region}`;
      let s = series.get(key);
      if (!s) {
        s = { name: row.name, region: row.region, recent: [], baseline: [] };
        series.set(key, s);
      }
      const v = Number(row.value);
      if (!Number.isFinite(v)) continue;
      if (row.ts.getTime() >= cutoff15m) s.recent.push(v);
      else s.baseline.push(v);
    }

    for (const s of series.values()) {
      if (s.baseline.length < MIN_BASELINE_POINTS) continue;
      const baselineMean =
        s.baseline.reduce((a, b) => a + b, 0) / s.baseline.length;
      if (baselineMean <= 0) continue;

      const open = await d
        .select()
        .from(schema.incidents)
        .where(
          and(
            eq(schema.incidents.severity, 'anomaly'),
            eq(schema.incidents.metricRef, s.name),
            eq(schema.incidents.region, s.region),
            ne(schema.incidents.status, 'resolved'),
          ),
        );

      const hasEnoughRecent = s.recent.length >= MIN_RECENT_POINTS;
      const allAbove =
        hasEnoughRecent &&
        s.recent.every((v) => v > ANOMALY_RATIO * baselineMean);
      const allBelow =
        hasEnoughRecent &&
        s.recent.every((v) => v < RESOLVE_RATIO * baselineMean);

      if (allAbove && open.length === 0) {
        const recentAvg = s.recent.reduce((a, b) => a + b, 0) / s.recent.length;
        const pct = Math.round((recentAvg / baselineMean - 1) * 100);
        const label = METRIC_LABEL[s.name] ?? s.name;
        const title = `${label} p95 up ${pct}% in the last hour (${s.region})`;
        await d.insert(schema.incidents).values({
          severity: 'anomaly',
          title,
          metricRef: s.name,
          region: s.region,
          status: 'open',
        });
        publish({ type: 'incident', text: title });
      } else if (allBelow && open.length > 0) {
        for (const inc of open) {
          await d
            .update(schema.incidents)
            .set({ status: 'resolved', resolvedAt: new Date() })
            .where(eq(schema.incidents.id, inc.id));
          publish({ type: 'system', text: `Anomaly resolved: ${inc.title}` });
        }
      }
    }
  } catch {
    // swallow — next tick retries
  }
}

// ── (b) Campaign send queue ────────────────────────────────────────────────
function estimatedAudience(c: { id: string; segment: unknown }): number {
  const seg = (c.segment ?? {}) as Record<string, unknown>;
  for (const k of ['estimate', 'audience', 'size', 'count']) {
    const v = seg[k];
    if (typeof v === 'number' && v > 0) return Math.floor(v);
  }
  // Deterministic fallback so a campaign always converges on the same total.
  return 6_000 + (hashStr(c.id) % 18_000);
}

async function campaignTick(): Promise<void> {
  try {
    const [{ db, schema }, { and, eq, lte }, { publish }] = await Promise.all([
      import('@/db'),
      import('drizzle-orm'),
      import('@/lib/bus'),
    ]);
    const d = await db();
    const now = new Date();

    // Scheduled campaigns whose time has passed start sending.
    const due = await d
      .select()
      .from(schema.notifCampaigns)
      .where(
        and(
          eq(schema.notifCampaigns.status, 'scheduled'),
          lte(schema.notifCampaigns.scheduleAt, now),
        ),
      );
    for (const c of due) {
      await d
        .update(schema.notifCampaigns)
        .set({ status: 'sending' })
        .where(eq(schema.notifCampaigns.id, c.id));
      publish({ type: 'system', text: `Campaign “${c.name}” started sending` });
    }

    // Tick every sending campaign forward by ~500–1500 sends.
    const sending = await d
      .select()
      .from(schema.notifCampaigns)
      .where(eq(schema.notifCampaigns.status, 'sending'));
    for (const c of sending) {
      const audience = estimatedAudience(c);
      const increment = 500 + Math.floor(Math.random() * 1001);
      const next = Math.min(audience, c.sentCount + increment);
      if (next >= audience) {
        // Deterministic-ish open rate in [0.25, 0.45] derived from the id.
        const openRate = 0.25 + (hashStr(c.id) % 2001) / 10_000;
        await d
          .update(schema.notifCampaigns)
          .set({ status: 'sent', sentCount: audience, openRate })
          .where(eq(schema.notifCampaigns.id, c.id));
        publish({
          type: 'system',
          text: `Campaign “${c.name}” sent to ${audience.toLocaleString('en-IE')} users`,
        });
      } else {
        await d
          .update(schema.notifCampaigns)
          .set({ sentCount: next })
          .where(eq(schema.notifCampaigns.id, c.id));
      }
    }
  } catch {
    // swallow — next tick retries
  }
}
