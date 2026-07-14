'use client';
// Shell banners — red maintenance banner, amber anomaly banner with a
// performance link and a dismiss (ack) control.
import { useState, useTransition } from 'react';
import Link from 'next/link';
import { dismissAnomaly } from '@/app/admin/actions';
import { useToast } from '@/components/toast';
import styles from './Banners.module.css';

export default function Banners({
  maintenanceOn,
  anomaly,
  canDismiss,
}: {
  maintenanceOn: boolean;
  anomaly: { id: string; title: string } | null;
  canDismiss: boolean;
}) {
  const [hiddenId, setHiddenId] = useState<string | null>(null);
  const [, startTransition] = useTransition();
  const toast = useToast();

  const dismiss = (id: string) => {
    setHiddenId(id); // optimistic
    startTransition(async () => {
      const res = await dismissAnomaly(id);
      if (res.ok) {
        toast('Anomaly dismissed');
      } else {
        setHiddenId(null);
        toast(res.error);
      }
    });
  };

  const showAnomaly = anomaly !== null && anomaly.id !== hiddenId;

  return (
    <>
      {maintenanceOn ? (
        <div className={styles.maintenance}>
          Maintenance mode is ON — all clients see the downtime screen. Toggle
          off in the sidebar to restore service.
        </div>
      ) : null}
      {showAnomaly ? (
        <div className={styles.anomaly}>
          <span className={styles.anomalyTag}>Anomaly</span>
          <span className={styles.anomalyText}>{anomaly.title}.</span>
          <Link href="/admin/performance" className={styles.anomalyLink}>
            View performance →
          </Link>
          <div className={styles.spacer} />
          {canDismiss ? (
            <button
              type="button"
              className={styles.dismiss}
              onClick={() => dismiss(anomaly.id)}
              aria-label="Dismiss anomaly"
            >
              ✕
            </button>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
