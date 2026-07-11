'use client';
// Overview error boundary — card with the message and a retry button.
import styles from './overview.module.css';

export default function OverviewError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className={styles.errorCard}>
      <div className={styles.errorTitle}>Couldn&rsquo;t load the overview</div>
      <div className={styles.errorMsg}>
        {error.message || 'Something went wrong while fetching dashboard data.'}
      </div>
      <button type="button" className={styles.retryBtn} onClick={() => reset()}>
        Retry
      </button>
    </div>
  );
}
