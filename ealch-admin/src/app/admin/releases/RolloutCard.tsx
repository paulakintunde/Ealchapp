'use client';
// Current-rollout card — step buttons (10/25/50/100%), per-platform mini
// sliders, halt, and the force-update flag toggle. All mutations are
// optimistic with rollback on {ok:false}.
import { useState, useTransition } from 'react';
import { useToast } from '@/components/toast';
import { haltRollout, setRollout, updateFlag } from './actions';
import styles from './releases.module.css';

export interface RolloutRow {
  id: string;
  platform: 'ios' | 'android';
  rolloutPct: number;
  status: 'draft' | 'staged' | 'rolling' | 'complete' | 'halted';
}

const STEPS = [10, 25, 50, 100];
const PLATFORM_LABEL: Record<RolloutRow['platform'], string> = {
  ios: 'iOS',
  android: 'Android',
};

const nf = new Intl.NumberFormat('en-IE');

function statusFor(pct: number): RolloutRow['status'] {
  return pct === 100 ? 'complete' : pct > 0 ? 'rolling' : 'staged';
}

export default function RolloutCard({
  version,
  rows: serverRows,
  releasedLabel,
  crashFree,
  totalUsers,
  forceFlag,
  canRelease,
  canFlags,
}: {
  version: string;
  rows: RolloutRow[];
  releasedLabel: string;
  crashFree: string;
  totalUsers: number;
  forceFlag: { id: string; on: boolean } | null;
  canRelease: boolean;
  canFlags: boolean;
}) {
  const toast = useToast();
  const [, startTransition] = useTransition();

  // Optimistic copy of the release rows, re-adopted whenever the server
  // sends fresh data (revalidatePath after each action).
  const serverKey = JSON.stringify(serverRows);
  const [prevKey, setPrevKey] = useState(serverKey);
  const [rows, setRows] = useState(serverRows);
  if (prevKey !== serverKey) {
    setPrevKey(serverKey);
    setRows(serverRows);
  }

  const [forceOn, setForceOn] = useState(forceFlag?.on ?? false);
  const [prevForce, setPrevForce] = useState(forceFlag?.on ?? false);
  if (prevForce !== (forceFlag?.on ?? false)) {
    setPrevForce(forceFlag?.on ?? false);
    setForceOn(forceFlag?.on ?? false);
  }

  const combined = Math.round(rows.reduce((s, r) => s + r.rolloutPct, 0) / rows.length);
  const halted = rows.some((r) => r.status === 'halted');
  const complete = rows.every((r) => r.status === 'complete');
  const chip = halted
    ? { label: 'HALTED', cls: styles.chipBad }
    : complete
      ? { label: 'COMPLETE', cls: styles.chipOk }
      : { label: 'ROLLING OUT', cls: styles.chipWarn };
  const usersOn = Math.round((combined * totalUsers) / 100);

  const applyStep = (pctValue: number) => {
    if (!canRelease) return;
    const before = rows;
    setRows(rows.map((r) => ({ ...r, rolloutPct: pctValue, status: statusFor(pctValue) })));
    startTransition(async () => {
      const res = await setRollout(rows[0].id, pctValue, true);
      if (res.ok) {
        toast(`Rollout set to ${pctValue}%`);
      } else {
        setRows(before);
        toast(`Change reverted — ${res.error}`);
      }
    });
  };

  // Sliders update local state on drag (onChange); commitRow persists the
  // value on release. Rollback restores the last server-confirmed rows.
  const commitRow = (rowId: string, platform: RolloutRow['platform'], pctValue: number) => {
    if (!canRelease) return;
    if (pctValue === serverRows.find((x) => x.id === rowId)?.rolloutPct) return;
    startTransition(async () => {
      const res = await setRollout(rowId, pctValue);
      if (res.ok) {
        toast(`${version} ${PLATFORM_LABEL[platform]} rollout → ${pctValue}%`);
      } else {
        setRows(serverRows);
        toast(`Change reverted — ${res.error}`);
      }
    });
  };

  const halt = () => {
    if (!canRelease) return;
    const before = rows;
    setRows(rows.map((r) => (r.status === 'complete' ? r : { ...r, status: 'halted' })));
    startTransition(async () => {
      const res = await haltRollout(rows[0].id);
      if (res.ok) {
        toast('Rollout halted');
      } else {
        setRows(before);
        toast(`Change reverted — ${res.error}`);
      }
    });
  };

  const toggleForce = () => {
    if (!canFlags || !forceFlag) return;
    const next = !forceOn;
    setForceOn(next);
    startTransition(async () => {
      const res = await updateFlag(forceFlag.id, { environment: 'prod', value: next });
      if (res.ok) {
        toast(next ? 'Force update enabled' : 'Force update disabled');
      } else {
        setForceOn(!next);
        toast(`Change reverted — ${res.error}`);
      }
    });
  };

  return (
    <div className={styles.card}>
      <div className={styles.rolloutHead}>
        <div className={styles.rolloutTitle}>{version} — staged rollout</div>
        <div className={`${styles.chip} ${chip.cls}`}>{chip.label}</div>
      </div>
      <div className={styles.rolloutSub}>
        iOS + Android · released {releasedLabel} · crash-free {crashFree}
      </div>

      <div className={styles.barRow}>
        <div className={styles.bar}>
          <div className={styles.barFill} style={{ width: `${combined}%` }} />
        </div>
        <div className={styles.bigPct}>{combined}%</div>
      </div>
      <div className={styles.usersLine}>
        {nf.format(usersOn)} of your users are on {version}
      </div>

      {canRelease ? (
        <div className={styles.stepsRow}>
          {STEPS.map((s) => (
            <button
              key={s}
              type="button"
              className={`${styles.stepBtn} ${combined === s ? styles.stepActive : ''}`}
              onClick={() => applyStep(s)}
            >
              {s}%
            </button>
          ))}
          <div className={styles.spacer} />
          <button
            type="button"
            className={styles.haltBtn}
            onClick={halt}
            disabled={halted || complete}
          >
            Halt
          </button>
        </div>
      ) : null}

      <div className={styles.platList}>
        {rows.map((r) => (
          <div key={r.id} className={styles.platRow}>
            <div className={styles.platName}>{PLATFORM_LABEL[r.platform]}</div>
            <input
              type="range"
              min={0}
              max={100}
              step={1}
              className={styles.range}
              value={r.rolloutPct}
              disabled={!canRelease}
              aria-label={`${PLATFORM_LABEL[r.platform]} rollout percentage`}
              onChange={(e) => {
                const v = Number(e.target.value);
                setRows(
                  rows.map((x) =>
                    x.id === r.id ? { ...x, rolloutPct: v, status: statusFor(v) } : x,
                  ),
                );
              }}
              onPointerUp={(e) =>
                commitRow(r.id, r.platform, Number((e.target as HTMLInputElement).value))
              }
              onKeyUp={(e) => {
                if (e.key.startsWith('Arrow') || e.key === 'Home' || e.key === 'End') {
                  commitRow(r.id, r.platform, Number((e.target as HTMLInputElement).value));
                }
              }}
            />
            <div className={styles.platPct}>{r.rolloutPct}%</div>
          </div>
        ))}
      </div>

      {forceFlag ? (
        <div className={styles.forceRow}>
          <div className={styles.forceText}>
            <div className={styles.forceTitle}>Force update below v2.2</div>
            <div className={styles.forceSub}>Blocks old clients until they update</div>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={forceOn}
            aria-label="Force update below v2.2"
            className={`${styles.toggle} ${forceOn ? styles.toggleOn : ''}`}
            onClick={toggleForce}
            disabled={!canFlags}
          >
            <div className={styles.knob} />
          </button>
        </div>
      ) : null}
    </div>
  );
}
