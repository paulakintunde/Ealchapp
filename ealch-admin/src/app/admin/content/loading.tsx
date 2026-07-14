// Content — route skeleton, sized to match the final layout (no shift).
import styles from './content.module.css';

const ROWS = 7;

export default function ContentLoading() {
  return (
    <div className={styles.wrap}>
      <div className={styles.grid}>
        <section className={`${styles.card} ${styles.tableCard}`}>
          <div className={styles.cardHead}>
            <div className="skeleton" style={{ height: 17, width: 128 }} />
            <div className={styles.spacer} />
            <div className="skeleton" style={{ height: 30, width: 104, borderRadius: 9 }} />
          </div>
          <div className={styles.filters}>
            {[64, 82, 60, 78, 92, 70, 88].map((w, i) => (
              <div key={i} className="skeleton" style={{ height: 28, width: w, borderRadius: 14 }} />
            ))}
          </div>
          <div className={styles.thead}>
            <div>Pack</div>
            <div>Kind</div>
            <div>Level</div>
            <div>Locale</div>
            <div>Status</div>
            <div>Version</div>
            <div>Updated</div>
          </div>
          {Array.from({ length: ROWS }).map((_, i) => (
            <div key={i} className={styles.row}>
              <div>
                <div className="skeleton" style={{ height: 13, width: '70%' }} />
                <div className="skeleton" style={{ height: 10, width: '45%', marginTop: 5 }} />
              </div>
              <div><div className="skeleton" style={{ height: 20, width: 66, borderRadius: 9 }} /></div>
              <div><div className="skeleton" style={{ height: 12, width: 22 }} /></div>
              <div><div className="skeleton" style={{ height: 20, width: 34, borderRadius: 9 }} /></div>
              <div><div className="skeleton" style={{ height: 20, width: 74, borderRadius: 9 }} /></div>
              <div><div className="skeleton" style={{ height: 12, width: 24 }} /></div>
              <div><div className="skeleton" style={{ height: 12, width: 52 }} /></div>
            </div>
          ))}
        </section>

        <div className={styles.side}>
          <section className={`${styles.card} ${styles.sideCard}`}>
            <div className="skeleton" style={{ height: 17, width: 110 }} />
            <div className="skeleton" style={{ height: 12, width: 200, marginTop: 8 }} />
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className={styles.flagRow}>
                <div className={styles.flagBody}>
                  <div className="skeleton" style={{ height: 13, width: '85%' }} />
                  <div className="skeleton" style={{ height: 10, width: '60%', marginTop: 5 }} />
                </div>
                <div className="skeleton" style={{ height: 26, width: 62, borderRadius: 8 }} />
              </div>
            ))}
          </section>

          <section className={`${styles.card} ${styles.sideCard}`}>
            <div className="skeleton" style={{ height: 17, width: 220 }} />
            <div className="skeleton" style={{ height: 12, width: 180, marginTop: 8 }} />
            <div className="skeleton" style={{ height: 6, width: '100%', marginTop: 14, borderRadius: 3 }} />
            <div className="skeleton" style={{ height: 12, width: 120, marginTop: 8 }} />
          </section>

          <section className={`${styles.card} ${styles.sideCard}`}>
            <div className="skeleton" style={{ height: 17, width: 96 }} />
            <div className={styles.editList}>
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="skeleton" style={{ height: 14, width: '100%' }} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
