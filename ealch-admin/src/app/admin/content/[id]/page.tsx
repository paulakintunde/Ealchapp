// Content editor — metadata form, JSON body editor, review workflow and
// revision history for a single content unit.
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { desc, eq } from 'drizzle-orm';
import { auth } from '@/auth';
import { db, schema } from '@/db';
import { can } from '@/lib/rbac';
import { relTime } from '@/lib/format';
import { KIND_META, STATUS_META, chipStyle } from '../meta';
import MetaForm from './MetaForm';
import BodyEditor from './BodyEditor';
import WorkflowCard from './WorkflowCard';
import RestoreButton from './RestoreButton';
import styles from './editor.module.css';

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export default async function ContentEditorPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [{ id }, session] = await Promise.all([params, auth()]);
  if (!UUID_RE.test(id)) notFound();

  const role = session?.user.role;
  const canWrite = can(role, 'content.write');
  const canPublish = can(role, 'content.publish');

  const d = await db();
  const [[unit], revisions] = await Promise.all([
    d.select().from(schema.contentUnits).where(eq(schema.contentUnits.id, id)).limit(1),
    d
      .select({
        id: schema.contentRevisions.id,
        version: schema.contentRevisions.version,
        createdAt: schema.contentRevisions.createdAt,
        editor: schema.adminUsers.name,
      })
      .from(schema.contentRevisions)
      .leftJoin(schema.adminUsers, eq(schema.contentRevisions.editorId, schema.adminUsers.id))
      .where(eq(schema.contentRevisions.unitId, id))
      .orderBy(desc(schema.contentRevisions.version)),
  ]);
  if (!unit) notFound();

  const bodyJson = JSON.stringify(unit.body, null, 2);

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <Link href="/admin/content" className={styles.back}>← Content library</Link>
        <div className={styles.title}>{unit.title}</div>
        <span className={styles.chip} style={chipStyle(KIND_META[unit.kind].color)}>
          {KIND_META[unit.kind].label}
        </span>
        <span
          className={`${styles.chip} ${unit.status === 'archived' ? styles.chipStrike : ''}`}
          style={chipStyle(STATUS_META[unit.status].color)}
        >
          {STATUS_META[unit.status].label}
        </span>
        <span className={styles.mono}>v{unit.version}</span>
      </div>

      <div className={styles.grid}>
        <div className={styles.col}>
          <section className={styles.card}>
            <div className={styles.cardTitle}>Metadata</div>
            <div className={styles.cardSub}>Title, slug and targeting for this pack</div>
            <MetaForm
              unitId={unit.id}
              initial={{
                title: unit.title,
                slug: unit.slug,
                kind: unit.kind,
                level: unit.level,
                locale: unit.locale,
              }}
              canWrite={canWrite}
            />
          </section>

          <section className={styles.card}>
            <div className={styles.cardTitle}>Body</div>
            <div className={styles.cardSub}>
              Raw pack JSON — intro + sections. Saving keeps the pack in draft.
            </div>
            <BodyEditor unitId={unit.id} initialJson={bodyJson} canWrite={canWrite} />
          </section>
        </div>

        <div className={styles.col}>
          <WorkflowCard
            unitId={unit.id}
            status={unit.status}
            canWrite={canWrite}
            canPublish={canPublish}
          />

          <section className={styles.card}>
            <div className={styles.cardTitle}>Revision history</div>
            <div className={styles.cardSub}>Snapshots taken on every publish</div>
            {revisions.length === 0 ? (
              <div className={styles.emptyRevs}>No revisions yet — publish to create one.</div>
            ) : (
              <div className={styles.revList}>
                {revisions.map((r) => (
                  <div key={r.id} className={styles.revRow}>
                    <div className={styles.revVer}>v{r.version}</div>
                    <div className={styles.revMeta}>
                      {(r.editor ?? 'Unknown editor')} · {relTime(r.createdAt)}
                    </div>
                    {canWrite && <RestoreButton revisionId={r.id} className={styles.restoreBtn} />}
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
