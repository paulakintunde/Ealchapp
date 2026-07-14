'use client';
// Workflow — Save draft → Submit for review → Publish → Archive.
// Publish needs content.publish (ops+): content editors see a disabled
// button with the 'Ops approval required' hint.
import { useTransition } from 'react';
import { useToast } from '@/components/toast';
import { STATUSES, STATUS_META, type ContentStatus } from '../meta';
import { archiveUnit, publishUnit, submitForReview } from '../actions';
import styles from './editor.module.css';

export default function WorkflowCard({
  unitId,
  status,
  canWrite,
  canPublish,
}: {
  unitId: string;
  status: ContentStatus;
  canWrite: boolean;
  canPublish: boolean;
}) {
  const [pending, startTransition] = useTransition();
  const toast = useToast();

  const submit = () =>
    startTransition(async () => {
      const res = await submitForReview(unitId);
      toast(res.ok ? 'Submitted for review' : res.error);
    });

  const publish = () =>
    startTransition(async () => {
      const res = await publishUnit(unitId);
      toast(res.ok ? `"${res.title}" v${res.version} published` : res.error);
    });

  const archive = () =>
    startTransition(async () => {
      const res = await archiveUnit(unitId);
      toast(res.ok ? 'Pack archived' : res.error);
    });

  return (
    <section className={styles.card}>
      <div className={styles.cardTitle}>Workflow</div>
      <div className={styles.cardSub}>Draft → in review → published → archived</div>

      <div className={styles.flow}>
        {STATUSES.map((s, i) => (
          <span key={s} style={{ display: 'contents' }}>
            {i > 0 && <span className={styles.flowArrow}>→</span>}
            <span className={`${styles.flowStep} ${s === status ? styles.flowStepActive : ''}`}>
              {STATUS_META[s].label}
            </span>
          </span>
        ))}
      </div>

      <div className={styles.btnRow}>
        {status === 'draft' && canWrite && (
          <button type="button" className={styles.darkBtn} onClick={submit} disabled={pending}>
            {pending ? 'Submitting…' : 'Submit for review'}
          </button>
        )}

        {status === 'in_review' && (canPublish ? (
          <button type="button" className={styles.primaryBtn} onClick={publish} disabled={pending}>
            {pending ? 'Publishing…' : 'Publish'}
          </button>
        ) : canWrite ? (
          <>
            <button type="button" className={styles.primaryBtn} disabled>
              Publish
            </button>
            <span className={styles.hint}>Ops approval required</span>
          </>
        ) : null)}

        {status === 'published' && canWrite && (
          <button type="button" className={styles.dangerBtn} onClick={archive} disabled={pending}>
            {pending ? 'Archiving…' : 'Archive'}
          </button>
        )}

        {status === 'archived' && (
          <span className={styles.hint}>
            Archived — save the body to start a new draft.
          </span>
        )}

        {!canWrite && status !== 'archived' && (
          <span className={styles.hint}>Read-only — your role can’t edit content.</span>
        )}
      </div>
    </section>
  );
}
