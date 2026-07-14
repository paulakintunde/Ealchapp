'use client';
// Routing board — client. Radio rows stage picks per capability; the spend
// strip recomputes live; Apply opens the confirm modal listing old→new, then
// calls applyRouting with optimistic commit + rollback on {ok:false}.
import { useMemo, useState, useTransition } from 'react';
import { eurWhole } from '@/lib/format';
import { useToast } from '@/components/toast';
import { NavIcon } from '@/components/shell/icons';
import { applyRouting } from './actions';
import styles from './ai.module.css';

export interface ModelOption {
  id: string;
  name: string;
  provider: string;
  meta: string | null;
  costLabel: string | null;
  latencyLabel: string | null;
  monthlyCostCents: number;
  enabled: boolean;
}

export interface CapabilityCard {
  id: string;
  key: string;
  label: string;
  description: string;
  monthlyVolume: string;
  icon: string;
  activeModelId: string | null;
  models: ModelOption[];
}

type Selection = Record<string, string>; // capabilityId → modelId

function initialSelection(caps: CapabilityCard[]): Selection {
  const sel: Selection = {};
  for (const c of caps) {
    const active = c.activeModelId ?? c.models[0]?.id;
    if (active) sel[c.id] = active;
  }
  return sel;
}

export default function RoutingBoard({
  capabilities,
  canRoute,
}: {
  capabilities: CapabilityCard[];
  canRoute: boolean;
}) {
  // `committed` mirrors what the server has (optimistically advanced on
  // apply); `staged` is the user's current picks.
  const [committed, setCommitted] = useState<Selection>(() => initialSelection(capabilities));
  const [staged, setStaged] = useState<Selection>(committed);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const toast = useToast();

  const modelById = useMemo(() => {
    const map = new Map<string, ModelOption>();
    for (const c of capabilities) for (const m of c.models) map.set(m.id, m);
    return map;
  }, [capabilities]);

  const changes = useMemo(
    () =>
      capabilities
        .filter((c) => staged[c.id] && staged[c.id] !== committed[c.id])
        .map((c) => ({
          capabilityId: c.id,
          capLabel: c.label,
          from: modelById.get(committed[c.id] ?? '')?.name ?? '—',
          to: modelById.get(staged[c.id])?.name ?? '—',
          modelId: staged[c.id],
        })),
    [capabilities, staged, committed, modelById],
  );

  const totalCents = useMemo(
    () =>
      capabilities.reduce(
        (sum, c) => sum + (modelById.get(staged[c.id] ?? '')?.monthlyCostCents ?? 0),
        0,
      ),
    [capabilities, staged, modelById],
  );

  const pick = (capId: string, model: ModelOption) => {
    if (!canRoute || !model.enabled || isPending) return;
    setStaged((s) => ({ ...s, [capId]: model.id }));
  };

  const confirmApply = () => {
    const payload = changes.map((c) => ({ capabilityId: c.capabilityId, modelId: c.modelId }));
    const prev = committed;
    const next = staged;
    setCommitted(next); // optimistic
    setConfirmOpen(false);
    startTransition(async () => {
      const res = await applyRouting(payload);
      if (res.ok) {
        toast('Model routing saved — live in ~60 s');
      } else {
        setCommitted(prev); // rollback
        setStaged(prev);
        toast(res.error);
      }
    });
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.headRow}>
        <div className={styles.headNote}>
          Model routing per capability. Changes apply to new sessions within ~60 s.
        </div>
        {canRoute ? (
          <button
            type="button"
            className={styles.applyBtn}
            disabled={changes.length === 0 || isPending}
            onClick={() => setConfirmOpen(true)}
          >
            {isPending ? 'Applying…' : 'Apply changes'}
          </button>
        ) : (
          <div className={styles.readOnlyChip}>Read-only</div>
        )}
      </div>

      <div className={styles.grid}>
        {capabilities.map((cap) => (
          <div key={cap.id} className={styles.card}>
            <div className={styles.capHead}>
              <div className={styles.capIcon}>
                <NavIcon d={cap.icon} />
              </div>
              <div className={styles.capLabel}>{cap.label}</div>
              <div className={styles.capVol}>{cap.monthlyVolume}</div>
            </div>
            <div className={styles.capDesc}>{cap.description}</div>
            <div className={styles.options} role="radiogroup" aria-label={`${cap.label} model`}>
              {cap.models.map((m) => {
                const selected = staged[cap.id] === m.id;
                return (
                  <button
                    key={m.id}
                    type="button"
                    role="radio"
                    aria-checked={selected}
                    disabled={!canRoute || !m.enabled}
                    onClick={() => pick(cap.id, m)}
                    className={[
                      styles.opt,
                      selected ? styles.optSelected : '',
                      !m.enabled ? styles.optDisabled : '',
                    ].join(' ')}
                  >
                    <span className={styles.radio}>
                      <span className={styles.radioDot} />
                    </span>
                    <span className={styles.optMain}>
                      <span className={styles.optName}>{m.name}</span>
                      <span className={styles.optMeta}>
                        {m.provider}
                        {m.meta ? ` · ${m.meta}` : ''}
                      </span>
                    </span>
                    <span className={styles.optRight}>
                      <span className={styles.optCost}>{m.costLabel ?? '—'}</span>
                      <span className={styles.optLat}>{m.latencyLabel ?? ''}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.strip}>
        <div className={styles.stripLabel}>Est. monthly inference cost</div>
        <div className={styles.stripTotal}>{eurWhole(totalCents)}/mo</div>
        <div className={styles.stripNote}>
          based on last 30 days of traffic at current routing
        </div>
        <div className={styles.stripSpacer} />
        <div className={styles.stripNote}>
          Fallback chain: <span className={styles.stripStrong}>auto (cheapest healthy)</span>
        </div>
      </div>

      {confirmOpen && changes.length > 0 ? (
        <div
          className={styles.overlay}
          role="dialog"
          aria-modal="true"
          aria-label="Confirm routing changes"
          onClick={() => setConfirmOpen(false)}
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalTitle}>Apply routing changes?</div>
            <div className={styles.modalNote}>
              {changes.length} {changes.length === 1 ? 'capability' : 'capabilities'} re-routed —
              applies to new sessions within ~60 s.
            </div>
            <div className={styles.changeList}>
              {changes.map((c) => (
                <div key={c.capabilityId} className={styles.changeRow}>
                  <span className={styles.changeCap}>{c.capLabel}</span>
                  <span className={styles.changeFrom}>{c.from}</span>
                  <span className={styles.changeArrow}>→</span>
                  <span className={styles.changeTo}>{c.to}</span>
                </div>
              ))}
            </div>
            <div className={styles.modalBtns}>
              <button
                type="button"
                className={styles.btnGhost}
                onClick={() => setConfirmOpen(false)}
              >
                Cancel
              </button>
              <button type="button" className={styles.btnAcc} onClick={confirmApply}>
                Apply changes
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
