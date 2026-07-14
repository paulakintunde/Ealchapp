// Route-level skeleton — mirrors the final two-column layout with blocks
// sized to the real controls so there is no layout shift on load.
import styles from './notifications.module.css';

function Skel({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return <span className={`skeleton ${styles.skelLine} ${className ?? ''}`} style={style} />;
}

export default function NotificationsLoading() {
  return (
    <div className={styles.grid}>
      <div className={styles.leftCol}>
        {/* Composer card */}
        <div className={styles.card}>
          <Skel style={{ width: 190, height: 15, marginBottom: 16 }} />
          <div className={styles.form}>
            <div>
              <Skel style={{ width: 62, height: 11, marginBottom: 6 }} />
              <Skel className={styles.skelSelect} />
            </div>
            <div>
              <Skel style={{ width: 34, height: 11, marginBottom: 6 }} />
              <Skel className={styles.skelInput} />
            </div>
            <div>
              <Skel style={{ width: 56, height: 11, marginBottom: 6 }} />
              <Skel className={styles.skelTextarea} />
            </div>
            <div>
              <Skel style={{ width: 60, height: 11, marginBottom: 6 }} />
              <Skel className={styles.skelInput} />
            </div>
            <div>
              <Skel style={{ width: 62, height: 11, marginBottom: 6 }} />
              <div className={styles.segGrid}>
                <Skel className={styles.skelSelect} />
                <Skel className={styles.skelSelect} />
                <Skel className={styles.skelSelect} />
                <Skel className={styles.skelSelect} />
              </div>
              <Skel style={{ width: 200, height: 12, marginTop: 9 }} />
            </div>
            <div className={styles.pillRow}>
              <Skel className={styles.skelPill} />
              <Skel className={styles.skelPill} />
              <Skel className={styles.skelPill} style={{ width: 128 }} />
            </div>
            <div className={styles.composerActions}>
              <Skel className={styles.skelBtn} />
              <Skel className={styles.skelBtn} style={{ width: 170 }} />
            </div>
          </div>
        </div>

        {/* Recent sends card */}
        <div className={styles.listCard}>
          <div className={styles.listHead}>
            <Skel style={{ width: 100, height: 15 }} />
          </div>
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className={styles.row}>
              <div className={styles.rowMain}>
                <Skel style={{ width: `${52 - i * 6}%`, height: 13 }} />
                <Skel style={{ width: `${68 - i * 4}%`, height: 11, marginTop: 5 }} />
              </div>
              <Skel className={styles.skelRowRight} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.rightCol}>
        {/* Phone preview card */}
        <div className={styles.card}>
          <Skel style={{ width: 88, height: 15, marginBottom: 16 }} />
          <Skel className={styles.skelPhone} />
          <Skel style={{ width: 210, height: 12, margin: '14px auto 0', display: 'block' }} />
        </div>

        {/* Template library card */}
        <div className={styles.card}>
          <div className={styles.tplHead}>
            <Skel style={{ width: 120, height: 15 }} />
            <Skel style={{ width: 98, height: 26, borderRadius: 8 }} />
          </div>
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className={styles.tplRow} style={{ cursor: 'default' }}>
              <div className={styles.tplMain}>
                <Skel style={{ width: `${46 - i * 4}%`, height: 12 }} />
                <Skel style={{ width: `${74 - i * 6}%`, height: 11, marginTop: 4 }} />
              </div>
              <Skel style={{ width: 28, height: 16, borderRadius: 8 }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
