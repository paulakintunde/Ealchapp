// Templates — content_units filtered to kind='template'. The "not
// one-size-fits-all" mechanism (authoring guide §10): a named, versioned,
// reusable pattern a generation job references instead of reinventing.
import Link from 'next/link';
import { desc, eq } from 'drizzle-orm';
import { db, schema } from '@/db';
import { STATUS_META, chipStyle } from '../meta';
import { relTime } from '@/lib/format';
import NewTemplateButton from './NewTemplateButton';
import styles from '../items/phase2.module.css';

export default async function TemplatesPage() {
  const d = await db();
  const u = schema.contentUnits;

  const rows = await d
    .select({ id: u.id, title: u.title, slug: u.slug, status: u.status, version: u.version, updatedAt: u.updatedAt })
    .from(u)
    .where(eq(u.kind, 'template'))
    .orderBy(desc(u.updatedAt));

  return (
    <div className={styles.wrap}>
      <section className={styles.card}>
        <div className={styles.cardHead} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div>
            <div className={styles.cardTitle}>Templates</div>
            <div className={styles.cardSub}>Reusable authoring patterns a generation job references instead of reinventing</div>
          </div>
          <div style={{ flex: 1 }} />
          <NewTemplateButton />
        </div>
        <div className={styles.thead} style={{ gridTemplateColumns: '2.4fr 0.9fr 0.6fr 0.9fr' }}>
          <div>Template</div>
          <div>Status</div>
          <div>Version</div>
          <div>Updated</div>
        </div>
        {rows.length === 0 ? (
          <div className={styles.empty}>No templates yet — create one to get started.</div>
        ) : (
          rows.map((r) => (
            <Link key={r.id} href={`/admin/content/${r.id}`} className={styles.row} style={{ gridTemplateColumns: '2.4fr 0.9fr 0.6fr 0.9fr' }}>
              <div>
                <div className={styles.itemFr}>{r.title}</div>
                <div className={styles.itemSub}>{r.slug}</div>
              </div>
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
