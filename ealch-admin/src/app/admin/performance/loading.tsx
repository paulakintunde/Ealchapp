// Route-level skeleton — mirrors KPI grid, chart card, heat strip and the
// two tables so the loaded screen causes no layout shift.
import styles from './performance.module.css';

export default function PerformanceLoading() {
  return (
    <div className={styles.wrap}>
      <div className={styles.kpiGrid}>
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className={`skeleton ${styles.skelKpi}`} />
        ))}
      </div>
      <div className={`skeleton ${styles.skelChart}`} />
      <div className={`skeleton ${styles.skelHeat}`} />
      <div className={`skeleton ${styles.skelEndpoints}`} />
      <div className={`skeleton ${styles.skelIncidents}`} />
    </div>
  );
}
