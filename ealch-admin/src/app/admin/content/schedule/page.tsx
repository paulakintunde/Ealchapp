// Schedule — the publish queue (Workstream 3 Phase 5). Every content_items
// and content_units row with a future (or past-due) scheduledPublishAt,
// merged into one sorted list. Extends, not replaces, the existing
// draft→in_review→published workflow — see the note on the column itself.
import Link from 'next/link';
import { asc, isNotNull } from 'drizzle-orm';
import { db, schema } from '@/db';
import styles from '../items/phase2.module.css';

export default async function SchedulePage() {
  const d = await db();
  const [items, units] = await Promise.all([
    d
      .select({ id: schema.contentItems.id, fr: schema.contentItems.fr, status: schema.contentItems.status, at: schema.contentItems.scheduledPublishAt })
      .from(schema.contentItems)
      .where(isNotNull(schema.contentItems.scheduledPublishAt))
      .orderBy(asc(schema.contentItems.scheduledPublishAt)),
    d
      .select({ id: schema.contentUnits.id, title: schema.contentUnits.title, kind: schema.contentUnits.kind, status: schema.contentUnits.status, at: schema.contentUnits.scheduledPublishAt })
      .from(schema.contentUnits)
      .where(isNotNull(schema.contentUnits.scheduledPublishAt))
      .orderBy(asc(schema.contentUnits.scheduledPublishAt)),
  ]);

  type Row = { key: string; href: string; label: string; sub: string; status: string; at: Date };
  const rows: Row[] = [
    ...items.map((i) => ({ key: `item-${i.id}`, href: `/admin/content/items/${i.id}`, label: i.fr || i.id, sub: `item · ${i.id}`, status: i.status, at: i.at! })),
    ...units.map((u) => ({ key: `unit-${u.id}`, href: `/admin/content/${u.id}`, label: u.title, sub: `${u.kind}`, status: u.status, at: u.at! })),
  ].sort((a, b) => a.at.getTime() - b.at.getTime());

  const now = Date.now();

  return (
    <div className={styles.wrap}>
      <section className={styles.card}>
        <div className={styles.cardHead}>
          <div className={styles.cardTitle}>Publish queue</div>
          <div className={styles.cardSub}>{rows.length} scheduled row{rows.length === 1 ? '' : 's'} — set from an item or pack&apos;s Workflow card</div>
        </div>
        <div className={styles.thead} style={{ gridTemplateColumns: '2.2fr 1fr 0.9fr 1fr' }}>
          <div>Content</div>
          <div>Kind</div>
          <div>Status</div>
          <div>Scheduled for</div>
        </div>
        {rows.length === 0 ? (
          <div className={styles.empty}>Nothing scheduled — set a time on an item or pack&apos;s Workflow card.</div>
        ) : (
          rows.map((r) => (
            <Link key={r.key} href={r.href} className={styles.row} style={{ gridTemplateColumns: '2.2fr 1fr 0.9fr 1fr' }}>
              <div>
                <div className={styles.itemFr}>{r.label}</div>
                <div className={styles.itemSub}>{r.sub}</div>
              </div>
              <div>{r.sub.split(' · ')[0]}</div>
              <div>{r.status}</div>
              <div className={r.at.getTime() < now ? styles.badgeBad : undefined}>
                {r.at.toLocaleString()}
                {r.at.getTime() < now && <span className={`${styles.badge} ${styles.badgeBad}`} style={{ marginLeft: 6 }}>past due</span>}
              </div>
            </Link>
          ))
        )}
      </section>
    </div>
  );
}
