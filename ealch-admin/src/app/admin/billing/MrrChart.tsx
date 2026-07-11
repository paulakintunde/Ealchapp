'use client';
// MRR 12-month bar chart (Recharts). Data arrives fully computed via props:
// monthly charge aggregates scaled to app level in page.tsx (RSC).
import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import type { TooltipContentProps } from 'recharts';
import { eurWhole } from '@/lib/format';
import styles from './billing.module.css';

export interface MrrPoint {
  label: string; // short month name, e.g. "Aug"
  mrrCents: number; // app-level (scaled) cents
}

const LAST_FILL = 'var(--acc)';
const REST_FILL = 'color-mix(in srgb, var(--acc) 22%, #E9EDEA)';

function ChartTip({ active, payload }: TooltipContentProps) {
  if (!active || !payload?.length) return null;
  const p = payload[0].payload as MrrPoint;
  return (
    <div className={styles.chartTip}>
      <span className={styles.chartTipLabel}>{p.label} · </span>
      <span className={styles.chartTipValue}>{eurWhole(p.mrrCents)}</span>
    </div>
  );
}

export default function MrrChart({ data }: { data: MrrPoint[] }) {
  return (
    <div>
      <ResponsiveContainer width="100%" height={170}>
        <BarChart data={data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }} barCategoryGap="24%">
          <Tooltip
            content={ChartTip}
            cursor={{ fill: 'color-mix(in srgb, var(--acc) 6%, transparent)' }}
          />
          <Bar
            dataKey="mrrCents"
            radius={5}
            animationDuration={200}
            animationEasing="ease-out"
          >
            {data.map((point, i) => (
              <Cell key={point.label} fill={i === data.length - 1 ? LAST_FILL : REST_FILL} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      {/* Sparse month labels, mock-style: every other month (Aug … Jun). */}
      <div className={styles.monthLabels}>
        {data.filter((_, i) => i % 2 === 0).map((point) => (
          <div key={point.label}>{point.label}</div>
        ))}
      </div>
    </div>
  );
}
