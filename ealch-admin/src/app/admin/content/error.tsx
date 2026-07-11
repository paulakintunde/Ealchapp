'use client';
// Content — route error boundary with retry.
import styles from './content.module.css';

export default function ContentError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className={`${styles.card} ${styles.errorBox}`}>
      <div className={styles.errorTitle}>Content failed to load</div>
      <div className={styles.errorHint}>
        {error.message || 'Something went wrong while fetching the library.'}
      </div>
      <button type="button" className={styles.retryBtn} onClick={() => reset()}>
        Retry
      </button>
    </div>
  );
}
