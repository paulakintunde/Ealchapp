'use client';
// Users — route error boundary with retry.
import styles from './error.module.css';

export default function UsersError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className={styles.wrap}>
      <div className={styles.icon} aria-hidden>
        !
      </div>
      <div className={styles.title}>Something went wrong loading Users</div>
      <div className={styles.detail}>{error.message || 'Unexpected error.'}</div>
      <button type="button" className={styles.retry} onClick={() => reset()}>
        Retry
      </button>
    </div>
  );
}
