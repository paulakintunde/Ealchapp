'use client';
// p95 latency multi-line chart — Recharts, client-side, fed pre-downsampled
// points (~288 over 24 h) from the RSC via props. One series per
// (metric, region). Palette: teal / blue / warn per CONTRACT; the fourth
// series is the muted grey with a dash pattern as secondary (non-color)
// encoding, and legend chips + tooltip name every series.
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  type TooltipContentProps,
} from 'recharts';
import type { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import styles from './performance.module.css';

export type SeriesKey = 'apiEu' | 'apiUs' | 'ttsEu' | 'ttsUs';

export interface LatencyPoint {
  t: number; // epoch ms (bucket start)
  apiEu: number | null;
  apiUs: number | null;
  ttsEu: number | null;
  ttsUs: number | null;
}

const SERIES: { key: SeriesKey; label: string; color: string; dash?: string }[] = [
  { key: 'apiEu', label: 'API p95 — eu-west', color: 'var(--acc)' },
  { key: 'apiUs', label: 'API p95 — us-east', color: '#4A6CF7' },
  { key: 'ttsEu', label: 'TTS p95 — eu-west', color: 'var(--warn)' },
  { key: 'ttsUs', label: 'TTS p95 — us-east', color: '#66716C', dash: '4 3' },
];

const SERIES_BY_KEY = new Map(SERIES.map((s) => [s.key as string, s]));

function fmtTime(t: number): string {
  return new Date(t).toLocaleTimeString('en-IE', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
}

function fmtMs(v: number): string {
  return v >= 1000 ? `${(v / 1000).toFixed(2)} s` : `${Math.round(v)} ms`;
}

function ChartTip({ active, payload, label }: TooltipContentProps<ValueType, NameType>) {
  if (!active || !payload || payload.length === 0) return null;
  return (
    <div className={styles.tip}>
      <div className={styles.tipLabel}>{typeof label === 'number' ? fmtTime(label) : label}</div>
      {payload.map((entry) => {
        const def = SERIES_BY_KEY.get(String(entry.dataKey));
        if (!def || typeof entry.value !== 'number') return null;
        return (
          <div key={String(entry.dataKey)} className={styles.tipRow}>
            <span className={styles.tipDot} style={{ background: def.color }} />
            <span className={styles.tipName}>{def.label}</span>
            <span className={styles.tipVal}>{fmtMs(entry.value)}</span>
          </div>
        );
      })}
    </div>
  );
}

export default function LatencyChart({ data }: { data: LatencyPoint[] }) {
  const t0 = data[0]?.t ?? 0;
  const t1 = data[data.length - 1]?.t ?? 0;
  const ticks: number[] = [];
  // A tick every 4 h, aligned to whole hours.
  const HOUR = 3_600_000;
  for (let t = Math.ceil(t0 / (4 * HOUR)) * 4 * HOUR; t <= t1; t += 4 * HOUR) ticks.push(t);

  return (
    <div>
      <div className={styles.legendRow}>
        {SERIES.map((s) => (
          <span key={s.key} className={styles.legendChip}>
            <span
              className={s.dash ? styles.legendDash : styles.legendDot}
              style={s.dash ? { borderColor: s.color } : { background: s.color }}
            />
            {s.label}
          </span>
        ))}
      </div>
      <div className={styles.chartFrame}>
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={data} margin={{ top: 8, right: 12, bottom: 0, left: 0 }}>
            <CartesianGrid stroke="#E3E6E1" strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="t"
              type="number"
              domain={['dataMin', 'dataMax']}
              ticks={ticks}
              tickFormatter={fmtTime}
              tick={{ fontSize: 10.5, fill: 'var(--mut)' }}
              tickLine={false}
              axisLine={{ stroke: '#E3E6E1' }}
            />
            <YAxis
              width={46}
              tickFormatter={(v: number) => (v >= 1000 ? `${(v / 1000).toFixed(1)} s` : `${v} ms`)}
              tick={{ fontSize: 10.5, fill: 'var(--mut)' }}
              tickLine={false}
              axisLine={false}
              domain={[0, 'auto']}
            />
            <Tooltip content={ChartTip} cursor={{ stroke: '#C4CBC6', strokeDasharray: '3 3' }} />
            {SERIES.map((s) => (
              <Line
                key={s.key}
                type="monotone"
                dataKey={s.key}
                stroke={s.color}
                strokeWidth={1.6}
                strokeDasharray={s.dash}
                dot={false}
                activeDot={{ r: 3.5, strokeWidth: 0 }}
                connectNulls
                isAnimationActive
                animationDuration={200}
                animationEasing="ease-out"
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
