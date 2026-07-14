'use client';
// Feature flags card — env tabs (prod/staging), boolean toggles and
// percentage sliders. Optimistic updates with rollback on {ok:false}.
import { useState, useTransition } from 'react';
import { useToast } from '@/components/toast';
import {
  updateFlag,
  type FlagEnvName,
  type FlagEnvValue,
  type FlagEnvironments,
} from './actions';
import styles from './releases.module.css';

export interface FlagRow {
  id: string;
  key: string;
  name: string;
  description: string | null;
  kind: 'boolean' | 'percentage';
  environments: FlagEnvironments;
  lastChanged: string;
}

const ENVS: FlagEnvName[] = ['prod', 'staging'];

function boolOf(v: FlagEnvValue | undefined): boolean {
  return v === true;
}
function pctOf(v: FlagEnvValue | undefined): number {
  return typeof v === 'object' && v !== null ? v.pct : 0;
}

type Values = Record<string, FlagEnvironments>;

function initValues(flags: FlagRow[]): Values {
  const out: Values = {};
  for (const f of flags) out[f.id] = f.environments;
  return out;
}

export default function FlagsCard({
  flags,
  canFlags,
}: {
  flags: FlagRow[];
  canFlags: boolean;
}) {
  const toast = useToast();
  const [, startTransition] = useTransition();
  const [env, setEnv] = useState<FlagEnvName>('prod');

  // Optimistic per-flag values, re-adopted when the server revalidates.
  const serverKey = JSON.stringify(flags.map((f) => [f.id, f.environments]));
  const [prevKey, setPrevKey] = useState(serverKey);
  const [values, setValues] = useState<Values>(() => initValues(flags));
  if (prevKey !== serverKey) {
    setPrevKey(serverKey);
    setValues(initValues(flags));
  }

  const setLocal = (flagId: string, v: FlagEnvValue) => {
    setValues((prev) => ({ ...prev, [flagId]: { ...prev[flagId], [env]: v } }));
  };

  const commit = (flag: FlagRow, value: boolean | number, revertTo: FlagEnvValue) => {
    startTransition(async () => {
      const res = await updateFlag(flag.id, { environment: env, value });
      if (res.ok) {
        const label =
          typeof value === 'boolean'
            ? value
              ? 'enabled'
              : 'disabled'
            : `→ ${value}%`;
        toast(`${flag.name} ${label} (${env})`);
      } else {
        setValues((prev) => ({
          ...prev,
          [flag.id]: { ...prev[flag.id], [env]: revertTo },
        }));
        toast(`Change reverted — ${res.error}`);
      }
    });
  };

  const toggleBool = (flag: FlagRow) => {
    if (!canFlags) return;
    const current = boolOf(values[flag.id]?.[env]);
    setLocal(flag.id, !current);
    commit(flag, !current, current);
  };

  const commitPct = (flag: FlagRow, v: number) => {
    if (!canFlags) return;
    const serverVal = flag.environments[env];
    if (v === pctOf(serverVal)) return;
    commit(flag, v, serverVal);
  };

  return (
    <div className={styles.flagsCard}>
      <div className={styles.flagsHead}>
        <div>
          <div className={styles.flagsTitle}>Feature flags</div>
          <div className={styles.flagsSub}>Instant remote toggles, no release needed</div>
        </div>
        <div className={styles.envTabs} role="tablist" aria-label="Environment">
          {ENVS.map((e) => (
            <button
              key={e}
              type="button"
              role="tab"
              aria-selected={env === e}
              className={`${styles.envTab} ${env === e ? styles.envTabActive : ''}`}
              onClick={() => setEnv(e)}
            >
              {e}
            </button>
          ))}
        </div>
      </div>

      {flags.length === 0 ? (
        <div className={styles.empty}>
          <div className={styles.emptyIcon} aria-hidden="true">⚑</div>
          <div className={styles.emptyText}>No feature flags defined</div>
        </div>
      ) : (
        <div className={styles.flagList}>
          {flags.map((f) => {
            const v = values[f.id]?.[env];
            return (
              <div key={f.id} className={styles.flagRow}>
                <div className={styles.flagMain}>
                  <div className={styles.flagInfo}>
                    <div className={styles.flagName}>{f.name}</div>
                    {f.description ? (
                      <div className={styles.flagDesc}>{f.description}</div>
                    ) : null}
                  </div>
                  {f.kind === 'boolean' ? (
                    <button
                      type="button"
                      role="switch"
                      aria-checked={boolOf(v)}
                      aria-label={`${f.name} (${env})`}
                      className={`${styles.toggle} ${boolOf(v) ? styles.toggleOn : ''}`}
                      onClick={() => toggleBool(f)}
                      disabled={!canFlags}
                    >
                      <div className={styles.knob} />
                    </button>
                  ) : (
                    <div className={styles.sliderWrap}>
                      <input
                        type="range"
                        min={0}
                        max={100}
                        step={1}
                        className={styles.range}
                        value={pctOf(v)}
                        disabled={!canFlags}
                        aria-label={`${f.name} percentage (${env})`}
                        onChange={(e) => setLocal(f.id, { pct: Number(e.target.value) })}
                        onPointerUp={(e) =>
                          commitPct(f, Number((e.target as HTMLInputElement).value))
                        }
                        onKeyUp={(e) => {
                          if (
                            e.key.startsWith('Arrow') ||
                            e.key === 'Home' ||
                            e.key === 'End'
                          ) {
                            commitPct(f, Number((e.target as HTMLInputElement).value));
                          }
                        }}
                      />
                      <div className={styles.pctLabel}>{pctOf(v)}%</div>
                    </div>
                  )}
                </div>
                <div className={styles.lastChanged}>{f.lastChanged}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
