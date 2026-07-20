// Role Play — content_units filtered to kind='scenario'. Detail editing
// happens at /admin/content/[id], which renders a structured
// ScenarioBodyEditor for this kind instead of the raw-JSON textarea.
import Link from 'next/link';
import { desc, eq } from 'drizzle-orm';
import { db, schema } from '@/db';
import { STATUS_META, chipStyle } from '../meta';
import { relTime } from '@/lib/format';
import NewRoleplayButton from './NewRoleplayButton';
import styles from '../items/phase2.module.css';

export default async function RoleplayPage() {
  const d = await db();
  const u = schema.contentUnits;

  const rows = await d
    .select({ id: u.id, title: u.title, slug: u.slug, level: u.level, status: u.status, version: u.version, updatedAt: u.updatedAt })
    .from(u)
    .where(eq(u.kind, 'scenario'))
    .orderBy(desc(u.updatedAt));

  return (
    <div className={styles.wrap}>
      <section className={styles.card}>
        <div className={styles.cardHead} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div>
            <div className={styles.cardTitle}>Role Play</div>
            <div className={styles.cardSub}>Turn-by-turn dialogues the learner works through, one line at a time</div>
          </div>
          <div style={{ flex: 1 }} />
          <NewRoleplayButton />
        </div>
        <div className={styles.thead} style={{ gridTemplateColumns: '2.2fr 0.7fr 0.9fr 0.6fr 0.9fr' }}>
          <div>Scenario</div>
          <div>Level</div>
          <div>Status</div>
          <div>Version</div>
          <div>Updated</div>
        </div>
        {rows.length === 0 ? (
          <div className={styles.empty}>No roleplay scenarios yet — create one to get started.</div>
        ) : (
          rows.map((r) => (
            <Link key={r.id} href={`/admin/content/${r.id}`} className={styles.row} style={{ gridTemplateColumns: '2.2fr 0.7fr 0.9fr 0.6fr 0.9fr' }}>
              <div>
                <div className={styles.itemFr}>{r.title}</div>
                <div className={styles.itemSub}>{r.slug}</div>
              </div>
              <div>{r.level.toUpperCase()}</div>
              <div>
                <span className={styles.chip} style={chipStyle(STATUS_META[r.status].color)}>{STATUS_META[r.status].label}</span>
              </div>
              <div>v{r.version}</div>
              <div>{relTime(r.updatedAt)}</div>
            </Link>
          ))
        )}
      </section>
    </div>
  );
}
