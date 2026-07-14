'use client';
// Route error boundary — card with the failure message and a retry button.
import styles from './releases.module.css';

export default function ReleasesError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className={styles.grid}>
      <div className={styles.errorCard}>
        <div className={styles.errorTitle}>Couldn’t load releases &amp; flags</div>
        <div className={styles.errorSub}>
          {error.message || 'An unexpected error occurred.'}
        </div>
        <button type="button" className={styles.retryBtn} onClick={() => reset()}>
          Retry
        </button>
      </div>
    </div>
  );
}
