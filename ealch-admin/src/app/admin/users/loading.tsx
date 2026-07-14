// Users — route loading skeleton, sized exactly to the cards + table so
// there is no layout shift when data arrives.
import styles from './loading.module.css';

export default function UsersLoading() {
  return (
    <div className={styles.page}>
      <div className={`skeleton ${styles.title}`} />
      <div className={styles.cards}>
        {Array.from({ length: 4 }, (_, i) => (
          <div key={i} className={styles.card}>
            <div className={`skeleton ${styles.cardLabel}`} />
            <div className={`skeleton ${styles.cardValue}`} />
          </div>
        ))}
      </div>
      <div className={styles.tableCard}>
        <div className={styles.toolbar}>
          <div className={`skeleton ${styles.pills}`} />
          <div className={`skeleton ${styles.search}`} />
          <div className={styles.spacer} />
          <div className={`skeleton ${styles.export}`} />
        </div>
        <div className={`skeleton ${styles.headRow}`} />
        {Array.from({ length: 10 }, (_, i) => (
          <div key={i} className={styles.row}>
            <div className={`skeleton ${styles.avatar}`} />
            <div className={styles.lines}>
              <div className={`skeleton ${styles.lineWide}`} />
              <div className={`skeleton ${styles.lineNarrow}`} />
            </div>
            <div className={`skeleton ${styles.cell}`} />
            <div className={`skeleton ${styles.cell}`} />
            <div className={`skeleton ${styles.cell}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
