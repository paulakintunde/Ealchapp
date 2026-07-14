// Overview loading state — skeletons sized exactly to the final layout
// (5 KPI cards, chart + feed, 3 quick actions) so there is no layout shift.
import styles from './overview.module.css';

export default function Loading() {
  return (
    <div className={styles.wrap}>
      <div className={styles.kpiGrid}>
        {Array.from({ length: 5 }, (_, i) => (
          <div key={i} className={`skeleton ${styles.skKpi}`} />
        ))}
      </div>
      <div className={styles.mainGrid}>
        <div className={`skeleton ${styles.skChart}`} />
        <div className={`skeleton ${styles.skFeed}`} />
      </div>
      <div className={styles.qaGrid}>
        {Array.from({ length: 3 }, (_, i) => (
          <div key={i} className={`skeleton ${styles.skAction}`} />
        ))}
      </div>
    </div>
  );
}
