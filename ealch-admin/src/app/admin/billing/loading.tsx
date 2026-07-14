// Billing loading skeleton — mirrors the final layout exactly (no shift).
import styles from './billing.module.css';

export default function BillingLoading() {
  return (
    <div className={styles.wrap}>
      <div className={styles.kpis}>
        {Array.from({ length: 4 }, (_, i) => (
          <div key={i} className={`skeleton ${styles.skKpi}`} />
        ))}
      </div>
      <div className={styles.grid}>
        <div className={`skeleton ${styles.skChart}`} />
        <div className={styles.rightCol}>
          <div className={`skeleton ${styles.skPlan}`} />
          <div className={`skeleton ${styles.skFailed}`} />
        </div>
      </div>
      <div className={styles.tableCard}>
        <div className={styles.tableTitle}>
          <div className={`skeleton ${styles.skTableTitle}`} />
        </div>
        <div className={styles.thead}>
          {Array.from({ length: 8 }, (_, i) => (
            <div key={i} className={`skeleton ${styles.skRow}`} />
          ))}
        </div>
        {Array.from({ length: 12 }, (_, r) => (
          <div key={r} className={styles.row}>
            {Array.from({ length: 8 }, (_, c) => (
              <div key={c} className={`skeleton ${styles.skRow}`} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
