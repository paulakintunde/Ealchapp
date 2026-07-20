import Link from 'next/link';
import { notFound } from 'next/navigation';
import { eq } from 'drizzle-orm';
import { auth } from '@/auth';
import { db, schema } from '@/db';
import { can } from '@/lib/rbac';
import { EXAM_STATUS_META } from '../meta';
import { chipStyle } from '../../items/meta';
import ExamTaskForm from './ExamTaskForm';
import WorkflowCard from './WorkflowCard';
import styles from '../../items/[id]/editor.module.css';

export default async function ExamTaskPage({ params }: { params: Promise<{ id: string }> }) {
  const [{ id }, session] = await Promise.all([params, auth()]);
  const role = session?.user.role;
  const canWrite = can(role, 'content.write');
  const canPublish = can(role, 'content.publish');

  const d = await db();
  const [task] = await d.select().from(schema.contentExamTasks).where(eq(schema.contentExamTasks.id, id)).limit(1);
  if (!task) notFound();

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <Link href="/admin/content/exams" className={styles.back}>← Exam tasks</Link>
        <div className={styles.title}>{task.id}</div>
        <span className={styles.chip} style={chipStyle(EXAM_STATUS_META[task.status].color)}>{EXAM_STATUS_META[task.status].label}</span>
      </div>

      <div className={styles.grid}>
        <div className={styles.col}>
          <ExamTaskForm task={task} canWrite={canWrite} />
        </div>
        <div className={styles.col}>
          <WorkflowCard taskId={task.id} status={task.status} canWrite={canWrite} canPublish={canPublish} />
          <section className={styles.card}>
            <div className={styles.cardTitle}>Identity</div>
            <div className={styles.identityGrid}>
              <div className={styles.identityLabel}>id</div><div className={styles.identityValue}>{task.id}</div>
              <div className={styles.identityLabel}>format</div><div className={styles.identityValue}>{task.format}</div>
              <div className={styles.identityLabel}>variant</div><div className={styles.identityValue}>{task.variant}</div>
              <div className={styles.identityLabel}>taskType</div><div className={styles.identityValue}>{task.taskType}</div>
              <div className={styles.identityLabel}>skill</div><div className={styles.identityValue}>{task.skill}</div>
              <div className={styles.identityLabel}>level</div><div className={styles.identityValue}>{task.level}</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
