// Route-level skeleton — mirrors header row, 2×2 capability grid and the
// spend strip so the loaded screen causes no layout shift.
import styles from './ai.module.css';

export default function AiLoading() {
  return (
    <div className={styles.wrap}>
      <div className={styles.skelHead}>
        <div className={`skeleton ${styles.skelHeadNote}`} />
        <div className={`skeleton ${styles.skelHeadBtn}`} />
      </div>
      <div className={styles.grid}>
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className={`skeleton ${styles.skelCard}`} />
        ))}
      </div>
      <div className={`skeleton ${styles.skelStrip}`} />
    </div>
  );
}
