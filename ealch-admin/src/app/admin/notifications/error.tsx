'use client';
// Route error boundary — friendly card with a retry that re-renders the segment.
import styles from './notifications.module.css';

export default function NotificationsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className={styles.errorCard}>
      <div className={styles.errorTitle}>Couldn&apos;t load notifications</div>
      <div className={styles.errorText}>
        {error.digest
          ? `Something went wrong on our side (ref ${error.digest}).`
          : 'Something went wrong while loading campaigns and templates.'}{' '}
        Your drafts are safe — try again.
      </div>
      <button type="button" className={styles.btnPrimary} onClick={reset}>
        Retry
      </button>
    </div>
  );
}
