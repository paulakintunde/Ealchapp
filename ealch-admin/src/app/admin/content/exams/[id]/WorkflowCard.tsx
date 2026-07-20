'use client';
import { useTransition } from 'react';
import { useToast } from '@/components/toast';
import { EXAM_STATUSES, EXAM_STATUS_META, type ExamStatus } from '../meta';
import { archiveExamTask, publishExamTask, submitExamForReview } from '../actions';
import styles from '../../items/[id]/editor.module.css';

export default function WorkflowCard({
  taskId, status, canWrite, canPublish,
}: {
  taskId: string; status: ExamStatus; canWrite: boolean; canPublish: boolean;
}) {
  const [pending, startTransition] = useTransition();
  const toast = useToast();

  const submit = () => startTransition(async () => { const res = await submitExamForReview(taskId); toast(res.ok ? 'Submitted for review' : res.error); });
  const publish = () => startTransition(async () => { const res = await publishExamTask(taskId); toast(res.ok ? 'Task published' : res.error); });
  const archive = () => startTransition(async () => { const res = await archiveExamTask(taskId); toast(res.ok ? 'Task archived' : res.error); });

  return (
    <section className={styles.card}>
      <div className={styles.cardTitle}>Workflow</div>
      <div className={styles.cardSub}>Draft → in review → published → archived</div>
      <div className={styles.flow}>
        {EXAM_STATUSES.map((s, i) => (
          <span key={s} style={{ display: 'contents' }}>
            {i > 0 && <span className={styles.flowArrow}>→</span>}
            <span className={`${styles.flowStep} ${s === status ? styles.flowStepActive : ''}`}>{EXAM_STATUS_META[s].label}</span>
          </span>
        ))}
      </div>
      <div className={styles.btnRow}>
        {status === 'draft' && canWrite && <button type="button" className={styles.darkBtn} onClick={submit} disabled={pending}>{pending ? 'Submitting…' : 'Submit for review'}</button>}
        {status === 'in_review' && (canPublish ? (
          <button type="button" className={styles.primaryBtn} onClick={publish} disabled={pending}>{pending ? 'Publishing…' : 'Publish'}</button>
        ) : canWrite ? (
          <>
            <button type="button" className={styles.primaryBtn} disabled>Publish</button>
            <span className={styles.hint}>Ops approval required</span>
          </>
        ) : null)}
        {status === 'published' && canWrite && <button type="button" className={styles.dangerBtn} onClick={archive} disabled={pending}>{pending ? 'Archiving…' : 'Archive'}</button>}
        {status === 'archived' && <span className={styles.hint}>Archived.</span>}
        {!canWrite && status !== 'archived' && <span className={styles.hint}>Read-only — your role can’t edit content.</span>}
      </div>
    </section>
  );
}
