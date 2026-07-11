'use client';
// Incidents table — severity + status chips, Ack / Resolve row actions with
// optimistic status override and rollback on {ok:false}.
import { useState, useTransition } from 'react';
import { useToast } from '@/components/toast';
import { ackIncident, resolveIncident } from './actions';
import styles from './performance.module.css';

export interface IncidentRow {
  id: string;
  severity: 'anomaly' | 'degraded' | 'outage';
  title: string;
  region: string | null;
  metricRef: string | null;
  status: 'open' | 'ack' | 'resolved';
  openedRel: string;
}

const SEVERITY_LABEL: Record<IncidentRow['severity'], string> = {
  anomaly: 'Anomaly',
  degraded: 'Degraded',
  outage: 'Outage',
};

const STATUS_LABEL: Record<IncidentRow['status'], string> = {
  open: 'Open',
  ack: 'Ack',
  resolved: 'Resolved',
};

export default function IncidentsTable({
  incidents,
  canAct,
}: {
  incidents: IncidentRow[];
  canAct: boolean;
}) {
  // Optimistic status overrides (id → status); cleared on rollback.
  const [overrides, setOverrides] = useState<Record<string, IncidentRow['status']>>({});
  const [, startTransition] = useTransition();
  const toast = useToast();

  const run = (
    id: string,
    nextStatus: IncidentRow['status'],
    action: (id: string) => Promise<{ ok: true } | { ok: false; error: string }>,
    successMsg: string,
  ) => {
    setOverrides((o) => ({ ...o, [id]: nextStatus })); // optimistic
    startTransition(async () => {
      const res = await action(id);
      if (res.ok) {
        toast(successMsg);
      } else {
        setOverrides((o) => {
          const rest = { ...o };
          delete rest[id];
          return rest;
        });
        toast(res.error);
      }
    });
  };

  if (incidents.length === 0) {
    return (
      <div className={styles.card}>
        <div className={styles.cardHead}>
          <div className={styles.cardTitle}>Incidents</div>
        </div>
        <div className={styles.emptyBlock}>
          <div className={styles.emptyIcon}>◎</div>
          <div className={styles.emptyLine}>No incidents on record — all clear.</div>
          <div className={styles.emptyCta}>
            The anomaly worker opens one automatically when a p95 series degrades.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardHead}>
        <div className={styles.cardTitle}>Incidents</div>
      </div>
      <div className={styles.incHeadRow}>
        <div>Severity</div>
        <div>Incident</div>
        <div>Region</div>
        <div>Metric</div>
        <div>Status</div>
        <div>Opened</div>
        <div className={styles.incActionsHead}>Actions</div>
      </div>
      {incidents.map((inc) => {
        const status = overrides[inc.id] ?? inc.status;
        const sevClass =
          inc.severity === 'outage' ? styles.chipBad : styles.chipWarn;
        const statusClass =
          status === 'open'
            ? styles.chipOpen
            : status === 'ack'
              ? styles.chipAck
              : styles.chipResolved;
        return (
          <div key={inc.id} className={styles.incRow}>
            <div>
              <span className={`${styles.chip} ${sevClass}`}>{SEVERITY_LABEL[inc.severity]}</span>
            </div>
            <div className={styles.incTitle}>{inc.title}</div>
            <div className={styles.incRegion}>{inc.region ?? '—'}</div>
            <div className={styles.incMetric}>{inc.metricRef ?? '—'}</div>
            <div>
              <span className={`${styles.chip} ${statusClass}`}>{STATUS_LABEL[status]}</span>
            </div>
            <div className={styles.incOpened}>{inc.openedRel}</div>
            <div className={styles.incActions}>
              {canAct && status === 'open' ? (
                <button
                  type="button"
                  className={styles.rowBtn}
                  onClick={() => run(inc.id, 'ack', ackIncident, 'Incident acknowledged')}
                >
                  Ack
                </button>
              ) : null}
              {canAct && status !== 'resolved' ? (
                <button
                  type="button"
                  className={styles.rowBtn}
                  onClick={() => run(inc.id, 'resolved', resolveIncident, 'Incident resolved')}
                >
                  Resolve
                </button>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
