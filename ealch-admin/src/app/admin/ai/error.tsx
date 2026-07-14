'use client';
// Route error boundary — friendly card with retry.
import styles from './ai.module.css';

export default function AiError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className={styles.errorCard}>
      <div className={styles.emptyIcon}>✦</div>
      <div className={styles.errorTitle}>AI routing failed to load</div>
      <div className={styles.errorMsg}>{error.message || 'Something went wrong.'}</div>
      <button type="button" className={styles.retryBtn} onClick={reset}>
        Try again
      </button>
    </div>
  );
}
