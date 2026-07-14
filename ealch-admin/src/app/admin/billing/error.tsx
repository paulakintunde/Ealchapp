'use client';
// Billing error boundary — retry re-fetches and re-renders the segment
// (Next 16: unstable_retry; reset only clears client state).
import { useEffect } from 'react';
import styles from './billing.module.css';

export default function BillingError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={styles.wrap}>
      <div className={styles.card}>
        <div className={styles.cardTitle}>Billing failed to load</div>
        <div className={styles.modalText}>
          {error.message || 'Something went wrong while loading revenue data.'}
        </div>
        <div style={{ marginTop: 14 }}>
          <button type="button" className={styles.btnGhost} onClick={() => unstable_retry()}>
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
