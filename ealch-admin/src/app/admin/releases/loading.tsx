// Route-level skeleton — mirrors the 1.4fr/1fr grid of the final layout.
import styles from './releases.module.css';

export default function ReleasesLoading() {
  return (
    <div className={styles.grid}>
      <div className={styles.colLeft}>
        <div className={`skeleton ${styles.skRollout}`} />
        <div className={`skeleton ${styles.skHistory}`} />
      </div>
      <div className={`skeleton ${styles.skFlags}`} />
    </div>
  );
}
