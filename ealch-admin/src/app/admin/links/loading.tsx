// Route-level skeleton — mirrors the stat grid + table layout exactly.
import styles from './links.module.css';

export default function LinksLoading() {
  return (
    <div className={styles.page}>
      <div className={styles.statGrid}>
        <div className={`skeleton ${styles.skStat}`} />
        <div className={`skeleton ${styles.skStat}`} />
        <div className={`skeleton ${styles.skStat}`} />
      </div>
      <div className={styles.tableCard}>
        <div className={`skeleton ${styles.skHead}`} />
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className={`skeleton ${styles.skRow}`} />
        ))}
      </div>
    </div>
  );
}
