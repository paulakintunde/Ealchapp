// Tags — the managed taxonomy (Workstream 3 Phase 5). Item.tags stays
// text[] storage-side; this table is what turns the tag INPUT from free
// text into pick-from-list once populated.
import { asc } from 'drizzle-orm';
import { db, schema } from '@/db';
import NewTagButton from './NewTagButton';
import styles from '../items/phase2.module.css';

export default async function TagsPage() {
  const d = await db();
  const [tags, items] = await Promise.all([
    d.select().from(schema.contentTags).orderBy(asc(schema.contentTags.slug)),
    d.select({ tags: schema.contentItems.tags }).from(schema.contentItems),
  ]);
  const usage = new Map<string, number>();
  for (const row of items) for (const t of row.tags ?? []) usage.set(t, (usage.get(t) ?? 0) + 1);

  return (
    <div className={styles.wrap}>
      <section className={styles.card}>
        <div className={styles.cardHead} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div>
            <div className={styles.cardTitle}>Tags</div>
            <div className={styles.cardSub}>{tags.length} managed tag{tags.length === 1 ? '' : 's'} — usage counted from live items.tags</div>
          </div>
          <div style={{ flex: 1 }} />
          <NewTagButton />
        </div>
        <div className={styles.thead} style={{ gridTemplateColumns: '1.4fr 1.4fr 1fr 0.7fr' }}>
          <div>Slug</div>
          <div>Label</div>
          <div>Weak-skill key</div>
          <div>Used by</div>
        </div>
        {tags.length === 0 ? (
          <div className={styles.empty}>No managed tags yet — item tags are still free text until some exist.</div>
        ) : (
          tags.map((t) => (
            <div key={t.slug} className={styles.row} style={{ gridTemplateColumns: '1.4fr 1.4fr 1fr 0.7fr', cursor: 'default' }}>
              <div className={styles.itemSub}>{t.slug}</div>
              <div className={styles.itemFr}>{t.label}</div>
              <div className={styles.itemSub}>{t.weakSkill ?? '—'}</div>
              <div>{usage.get(t.slug) ?? 0} item{(usage.get(t.slug) ?? 0) === 1 ? '' : 's'}</div>
            </div>
          ))
        )}
      </section>
    </div>
  );
}
