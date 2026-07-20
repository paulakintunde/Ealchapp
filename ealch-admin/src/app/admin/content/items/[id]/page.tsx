// Item editor — the first-ever structured editor for a content_items row.
// Classic (structured form) and Block (BlockNote canvas) modes read/write
// the same ItemInput state; EditorShell owns the toggle.
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { eq } from 'drizzle-orm';
import { auth } from '@/auth';
import { db, schema } from '@/db';
import { can } from '@/lib/rbac';
import { ITEM_KIND_LABEL, ITEM_STATUS_META, chipStyle, isValidItemId } from '../meta';
import { themeBreadth } from '../actions';
import EditorShell from './EditorShell';
import WorkflowCard from './WorkflowCard';
import styles from './editor.module.css';

export default async function ItemEditorPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [{ id }, session] = await Promise.all([params, auth()]);
  if (!isValidItemId(id)) notFound();

  const role = session?.user.role;
  const canWrite = can(role, 'content.write');
  const canPublish = can(role, 'content.publish');

  const d = await db();
  const [item] = await d.select().from(schema.contentItems).where(eq(schema.contentItems.id, id)).limit(1);
  if (!item) notFound();

  const breadth = await themeBreadth(item.level, item.theme);

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <Link href="/admin/content/items" className={styles.back}>← Items</Link>
        <div className={styles.title}>{item.fr || item.id}</div>
        <span className={styles.chip} style={chipStyle('var(--acc)')}>{ITEM_KIND_LABEL[item.kind]}</span>
        <span
          className={`${styles.chip} ${item.status === 'archived' ? styles.chipStrike : ''}`}
          style={chipStyle(ITEM_STATUS_META[item.status].color)}
        >
          {ITEM_STATUS_META[item.status].label}
        </span>
        <span className={styles.mono}>v{item.version}</span>
      </div>

      {breadth < 20 && (
        <div className={styles.breadthWarning}>
          Theme &ldquo;{item.theme}&rdquo; at {item.level.toUpperCase()} has {breadth} item{breadth === 1 ? '' : 's'} —
          under the 20-per-theme breadth floor (Phase 6b). Not a blocker, just a gap to close.
        </div>
      )}

      <div className={styles.grid}>
        <div className={styles.col}>
          <EditorShell item={item} canWrite={canWrite} />
        </div>
        <div className={styles.col}>
          <WorkflowCard
            itemId={item.id}
            status={item.status}
            canWrite={canWrite}
            canPublish={canPublish}
            scheduledPublishAt={item.scheduledPublishAt?.toISOString() ?? null}
          />
          <section className={styles.card}>
            <div className={styles.cardTitle}>Identity</div>
            <div className={styles.cardSub}>Immutable once created — see the note on the id</div>
            <div className={styles.identityGrid}>
              <div className={styles.identityLabel}>id</div>
              <div className={styles.identityValue}>{item.id}</div>
              <div className={styles.identityLabel}>level</div>
              <div className={styles.identityValue}>{item.level.toUpperCase()}</div>
              <div className={styles.identityLabel}>theme</div>
              <div className={styles.identityValue}>{item.theme}</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
