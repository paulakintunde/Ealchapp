// Items — route skeleton, sized to match the final layout (no shift).
import styles from './items.module.css';

const ROWS = 8;

export default function ItemsLoading() {
  return (
    <div className={styles.wrap}>
      <section className={`${styles.card} ${styles.tableCard}`}>
        <div className={styles.cardHead}>
          <div className="skeleton" style={{ height: 17, width: 60 }} />
          <div className={styles.spacer} />
          <div className="skeleton" style={{ height: 30, width: 96, borderRadius: 9 }} />
        </div>
        <div className={styles.filters}>
          {[64, 40, 44, 48, 40, 46, 40, 64, 80].map((w, i) => (
            <div key={i} className="skeleton" style={{ height: 28, width: w, borderRadius: 14 }} />
          ))}
        </div>
        <div className={styles.thead}>
          <div>Item</div>
          <div>Kind</div>
          <div>Level</div>
          <div>Theme</div>
          <div>Drills</div>
          <div>Status</div>
          <div>Updated</div>
        </div>
        {Array.from({ length: ROWS }).map((_, i) => (
          <div key={i} className={styles.row}>
            <div>
              <div className="skeleton" style={{ height: 13, width: '60%' }} />
              <div className="skeleton" style={{ height: 10, width: '50%', marginTop: 5 }} />
            </div>
            <div><div className="skeleton" style={{ height: 12, width: 48 }} /></div>
            <div><div className="skeleton" style={{ height: 12, width: 22 }} /></div>
            <div><div className="skeleton" style={{ height: 12, width: 44 }} /></div>
            <div><div className="skeleton" style={{ height: 12, width: 14 }} /></div>
            <div><div className="skeleton" style={{ height: 20, width: 66, borderRadius: 9 }} /></div>
            <div><div className="skeleton" style={{ height: 12, width: 52 }} /></div>
          </div>
        ))}
      </section>
    </div>
  );
}
