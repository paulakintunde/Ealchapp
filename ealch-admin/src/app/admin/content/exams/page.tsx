// Exams — content_exam_tasks list. Atomic and relational (Phase 2.A), not a
// content_units document — see the note on the table in db/schema.ts.
import Link from 'next/link';
import { desc } from 'drizzle-orm';
import { db, schema } from '@/db';
import { EXAM_STATUS_META } from './meta';
import { chipStyle } from '../items/meta';
import { relTime } from '@/lib/format';
import NewExamTaskButton from './NewExamTaskButton';
import styles from '../items/phase2.module.css';

export default async function ExamsPage() {
  const d = await db();
  const rows = await d
    .select()
    .from(schema.contentExamTasks)
    .orderBy(desc(schema.contentExamTasks.updatedAt));

  return (
    <div className={styles.wrap}>
      <section className={styles.card}>
        <div className={styles.cardHead} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div>
            <div className={styles.cardTitle}>Exam tasks</div>
            <div className={styles.cardSub}>{rows.length} task{rows.length === 1 ? '' : 's'} — closed types (co_mcq/ce_mcq) are marked by machine, open types (po_*/pe_*) need a rubric and a model answer</div>
          </div>
          <div style={{ flex: 1 }} />
          <NewExamTaskButton />
        </div>
        <div className={styles.thead} style={{ gridTemplateColumns: '2.2fr 0.7fr 0.7fr 0.6fr 0.9fr 0.9fr' }}>
          <div>Task</div>
          <div>Format</div>
          <div>Task type</div>
          <div>Level</div>
          <div>Status</div>
          <div>Updated</div>
        </div>
        {rows.length === 0 ? (
          <div className={styles.empty}>No exam tasks yet.</div>
        ) : (
          rows.map((t) => (
            <Link key={t.id} href={`/admin/content/exams/${t.id}`} className={styles.row} style={{ gridTemplateColumns: '2.2fr 0.7fr 0.7fr 0.6fr 0.9fr 0.9fr' }}>
              <div>
                <div className={styles.itemFr}>{t.prompt || <em>(empty prompt)</em>}</div>
                <div className={styles.itemSub}>{t.id}</div>
              </div>
              <div>{t.format.toUpperCase()}</div>
              <div>{t.taskType.toUpperCase()}</div>
              <div>{t.level.toUpperCase()}</div>
              <div>
                <span className={styles.chip} style={chipStyle(EXAM_STATUS_META[t.status].color)}>{EXAM_STATUS_META[t.status].label}</span>
              </div>
              <div>{relTime(t.updatedAt)}</div>
            </Link>
          ))
        )}
      </section>
    </div>
  );
}
