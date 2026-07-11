'use client';
// Live phone preview — dark iPhone-ish lock screen per the mock; mirrors the
// composer's title/body as you type. Date is dynamic (clock stays the mock's
// 21:47 for the lock-screen look).
import styles from './notifications.module.css';

const TITLE_FALLBACK = 'Ealch';
const BODY_FALLBACK = 'Your message preview will appear here as you type.';

function lockDate(): string {
  return new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
}

export default function PhonePreview({ title, body }: { title: string; body: string }) {
  return (
    <section className={styles.card}>
      <div className={styles.cardTitle}>Live preview</div>
      <div className={styles.phoneFrame}>
        <div className={styles.notchRow}>
          <div className={styles.notch} />
        </div>
        <div className={styles.clockWrap}>
          <div className={styles.clock}>21:47</div>
          <div className={styles.clockDate} suppressHydrationWarning>{lockDate()}</div>
        </div>
        <div className={styles.notifCard}>
          <div className={styles.logoTile}>E.</div>
          <div className={styles.notifMain}>
            <div className={styles.notifTop}>
              <div className={styles.notifTitle}>{title.trim() || TITLE_FALLBACK}</div>
              <div className={styles.notifNow}>now</div>
            </div>
            <div className={styles.notifMsg}>{body.trim() || BODY_FALLBACK}</div>
          </div>
        </div>
      </div>
      <div className={styles.previewCaption}>iOS lock screen · updates as you type</div>
    </section>
  );
}
