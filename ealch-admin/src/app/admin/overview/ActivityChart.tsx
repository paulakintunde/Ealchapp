'use client';
// "Active learners — last 30 days" — DAU teal area + Sessions grey context
// line, per the mock. Data is computed server-side (page.tsx) and passed in.
import {
  ComposedChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceDot,
  ResponsiveContainer,
} from 'recharts';
import { compact } from '@/lib/format';
import styles from './overview.module.css';

export interface ActivityPoint {
  /** Short date label, e.g. "Jun 10". */
  d: string;
  dau: number;
  sessions: number;
}

interface TipPayloadEntry {
  dataKey?: string | number;
  value?: number | string;
}

function ChartTip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: ReadonlyArray<TipPayloadEntry>;
  label?: string | number;
}) {
  if (!active || !payload?.length) return null;
  const get = (key: string) => {
    const v = payload.find((p) => p.dataKey === key)?.value;
    return typeof v === 'number' ? compact(v) : '—';
  };
  return (
    <div className={styles.chartTip}>
      <div className={styles.chartTipLabel}>{label}</div>
      <div className={styles.chartTipRow}>
        <span
          className={styles.legendChip}
          style={{ background: 'var(--acc)' }}
        />
        DAU <strong>{get('dau')}</strong>
      </div>
      <div className={styles.chartTipRow}>
        <span className={styles.legendChip} style={{ background: '#C9D2CC' }} />
        Sessions <strong>{get('sessions')}</strong>
      </div>
    </div>
  );
}

export default function ActivityChart({ data }: { data: ActivityPoint[] }) {
  const last = data[data.length - 1];
  // Sparse x labels like the mock: first, two interior thirds, last.
  const ticks =
    data.length >= 4
      ? [
          data[0].d,
          data[Math.floor(data.length / 3)].d,
          data[Math.floor((2 * data.length) / 3)].d,
          last.d,
        ]
      : data.map((p) => p.d);

  return (
    // 190px plot + 24px x-axis strip = mock's 190 chart + label row below.
    <ResponsiveContainer width="100%" height={214}>
      <ComposedChart
        data={data}
        margin={{ top: 6, right: 8, left: 4, bottom: 0 }}
      >
        <CartesianGrid
          horizontal
          vertical={false}
          stroke="#E3E6E1"
          strokeWidth={1}
        />
        <XAxis
          dataKey="d"
          ticks={ticks}
          tickLine={false}
          axisLine={false}
          height={24}
          tick={{ fontSize: 10.5, fill: 'var(--mut)' }}
          dy={6}
          interval="preserveStartEnd"
        />
        <YAxis hide domain={[0, 'auto']} />
        <Tooltip
          content={<ChartTip />}
          cursor={{ stroke: 'var(--line)', strokeWidth: 1 }}
        />
        <Line
          type="linear"
          dataKey="sessions"
          stroke="#C9D2CC"
          strokeWidth={1.6}
          dot={false}
          isAnimationActive
          animationDuration={200}
          animationEasing="ease-out"
        />
        <Area
          type="linear"
          dataKey="dau"
          stroke="var(--acc)"
          strokeWidth={2.2}
          strokeLinecap="round"
          fill="var(--acc)"
          fillOpacity={0.09}
          dot={false}
          activeDot={{ r: 4, fill: 'var(--acc)', stroke: 'none' }}
          isAnimationActive
          animationDuration={200}
          animationEasing="ease-out"
        />
        {last ? (
          <ReferenceDot
            x={last.d}
            y={last.dau}
            r={4}
            fill="var(--acc)"
            stroke="none"
          />
        ) : null}
      </ComposedChart>
    </ResponsiveContainer>
  );
}
