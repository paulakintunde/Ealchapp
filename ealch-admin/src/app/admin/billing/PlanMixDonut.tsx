'use client';
// Plan mix donut (Recharts PieChart). Slices + center label via props; the
// labeled progress rows underneath are rendered by the RSC page (identity is
// never color-alone).
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import type { TooltipContentProps } from 'recharts';
import styles from './billing.module.css';

export interface PlanSlice {
  name: string;
  value: number; // share in % points
  color: string;
}

function DonutTip({ active, payload }: TooltipContentProps) {
  if (!active || !payload?.length) return null;
  const p = payload[0].payload as PlanSlice;
  return (
    <div className={styles.chartTip}>
      <span className={styles.chartTipLabel}>{p.name} · </span>
      <span className={styles.chartTipValue}>{p.value}%</span>
    </div>
  );
}

export default function PlanMixDonut({
  slices,
  centerValue,
  centerLabel,
}: {
  slices: PlanSlice[];
  centerValue: string;
  centerLabel: string;
}) {
  return (
    <div className={styles.donutWrap}>
      <ResponsiveContainer width="100%" height={150}>
        <PieChart>
          <Tooltip content={DonutTip} />
          <Pie
            data={slices}
            dataKey="value"
            nameKey="name"
            innerRadius={45}
            outerRadius={64}
            startAngle={90}
            endAngle={-270}
            paddingAngle={2}
            stroke="var(--card)"
            strokeWidth={2}
            animationDuration={200}
            animationEasing="ease-out"
          >
            {slices.map((s) => (
              <Cell key={s.name} fill={s.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className={styles.donutCenter}>
        <div className={styles.donutValue}>{centerValue}</div>
        <div className={styles.donutLabel}>{centerLabel}</div>
      </div>
    </div>
  );
}
