'use client';
// Route error boundary — card with the failure message and a retry button.
import styles from './links.module.css';

export default function LinksError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className={styles.page}>
      <div className={styles.errorCard}>
        <div className={styles.errorTitle}>Couldn’t load link tracking</div>
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
