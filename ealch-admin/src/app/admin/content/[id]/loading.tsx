// Content editor — route skeleton sized to the editor layout.
import styles from './editor.module.css';

export default function EditorLoading() {
  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <div className="skeleton" style={{ height: 13, width: 110 }} />
        <div className="skeleton" style={{ height: 26, width: 260 }} />
        <div className="skeleton" style={{ height: 20, width: 70, borderRadius: 9 }} />
        <div className="skeleton" style={{ height: 20, width: 74, borderRadius: 9 }} />
        <div className="skeleton" style={{ height: 13, width: 24 }} />
      </div>

      <div className={styles.grid}>
        <div className={styles.col}>
          <section className={styles.card}>
            <div className="skeleton" style={{ height: 17, width: 88 }} />
            <div className="skeleton" style={{ height: 12, width: 240, marginTop: 8 }} />
            <div className={styles.formGrid}>
              <div className={`${styles.field} ${styles.fieldWide}`}>
                <div className="skeleton" style={{ height: 10, width: 40 }} />
                <div className="skeleton" style={{ height: 32, width: '100%', borderRadius: 9 }} />
              </div>
              <div className={`${styles.field} ${styles.fieldWide}`}>
                <div className="skeleton" style={{ height: 10, width: 36 }} />
                <div className="skeleton" style={{ height: 32, width: '100%', borderRadius: 9 }} />
              </div>
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className={styles.field}>
                  <div className="skeleton" style={{ height: 10, width: 42 }} />
                  <div className="skeleton" style={{ height: 32, width: '100%', borderRadius: 9 }} />
                </div>
              ))}
            </div>
            <div className={styles.btnRow}>
              <div className="skeleton" style={{ height: 32, width: 122, borderRadius: 9 }} />
            </div>
          </section>

          <section className={styles.card}>
            <div className="skeleton" style={{ height: 17, width: 50 }} />
            <div className="skeleton" style={{ height: 12, width: 300, marginTop: 8 }} />
            <div className="skeleton" style={{ height: 320, width: '100%', marginTop: 14, borderRadius: 10 }} />
            <div className={styles.btnRow}>
              <div className="skeleton" style={{ height: 32, width: 96, borderRadius: 9 }} />
            </div>
          </section>
        </div>

        <div className={styles.col}>
          <section className={styles.card}>
            <div className="skeleton" style={{ height: 17, width: 80 }} />
            <div className="skeleton" style={{ height: 12, width: 220, marginTop: 8 }} />
            <div className="skeleton" style={{ height: 22, width: '100%', marginTop: 12, borderRadius: 9 }} />
            <div className={styles.btnRow}>
              <div className="skeleton" style={{ height: 32, width: 140, borderRadius: 9 }} />
            </div>
          </section>

          <section className={styles.card}>
            <div className="skeleton" style={{ height: 17, width: 130 }} />
            <div className="skeleton" style={{ height: 12, width: 200, marginTop: 8 }} />
            <div className={styles.revList}>
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className={styles.revRow}>
                  <div className="skeleton" style={{ height: 12, width: 24 }} />
                  <div className="skeleton" style={{ height: 12, flex: 1 }} />
                  <div className="skeleton" style={{ height: 26, width: 64, borderRadius: 8 }} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
