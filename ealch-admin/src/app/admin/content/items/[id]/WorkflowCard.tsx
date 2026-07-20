'use client';
// Workflow — Save (in EditorShell) → Submit for review → Publish → Archive.
// Same shape as ../[id]/WorkflowCard.tsx for content_units, driving
// content_items through the identical draft → in_review → published →
// archived states.
import { useState, useTransition } from 'react';
import { useToast } from '@/components/toast';
import { ITEM_STATUSES, ITEM_STATUS_META, type ItemStatus } from '../meta';
import { archiveItem, publishItem, setItemSchedule, submitItemForReview } from '../actions';
import styles from './editor.module.css';

export default function WorkflowCard({
  itemId,
  status,
  canWrite,
  canPublish,
  scheduledPublishAt,
}: {
  itemId: string;
  status: ItemStatus;
  canWrite: boolean;
  canPublish: boolean;
  scheduledPublishAt?: string | null;
}) {
  const [pending, startTransition] = useTransition();
  const [when, setWhen] = useState(scheduledPublishAt?.slice(0, 16) ?? '');
  const toast = useToast();

  const saveSchedule = () =>
    startTransition(async () => {
      const res = await setItemSchedule(itemId, when ? new Date(when).toISOString() : '');
      toast(res.ok ? (when ? 'Schedule set' : 'Schedule cleared') : res.error);
    });

  const submit = () =>
    startTransition(async () => {
      const res = await submitItemForReview(itemId);
      toast(res.ok ? 'Submitted for review' : res.error);
    });

  const publish = () =>
    startTransition(async () => {
      const res = await publishItem(itemId);
      toast(res.ok ? 'Item published' : res.error);
    });

  const archive = () =>
    startTransition(async () => {
      const res = await archiveItem(itemId);
      toast(res.ok ? 'Item archived' : res.error);
    });

  return (
    <section className={styles.card}>
      <div className={styles.cardTitle}>Workflow</div>
      <div className={styles.cardSub}>Draft → in review → published → archived</div>

      <div className={styles.flow}>
        {ITEM_STATUSES.map((s, i) => (
          <span key={s} style={{ display: 'contents' }}>
            {i > 0 && <span className={styles.flowArrow}>→</span>}
            <span className={`${styles.flowStep} ${s === status ? styles.flowStepActive : ''}`}>
              {ITEM_STATUS_META[s].label}
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
          <span className={styles.hint}>Archived.</span>
        )}

        {!canWrite && status !== 'archived' && (
          <span className={styles.hint}>Read-only — your role can’t edit content.</span>
        )}
      </div>

      {canWrite && status !== 'archived' && (
        <div className={styles.btnRow} style={{ marginTop: 4 }}>
          <input
            type="datetime-local"
            className={styles.input}
            style={{ width: 200 }}
            value={when}
            onChange={(e) => setWhen(e.target.value)}
            disabled={pending}
          />
          <button type="button" className={styles.ghostBtn} onClick={saveSchedule} disabled={pending}>
            {when ? 'Set schedule' : 'Clear schedule'}
          </button>
        </div>
      )}
    </section>
  );
}
