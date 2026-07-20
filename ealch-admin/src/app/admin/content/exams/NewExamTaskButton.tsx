'use client';
import { useState, useTransition } from 'react';
import { useToast } from '@/components/toast';
import { createExamTask } from './actions';
import { EXAM_FORMATS, EXAM_SCORE_BANDS, EXAM_TASK_TYPES } from './meta';
import styles from '../items/items.module.css';

export default function NewExamTaskButton() {
  const [open, setOpen] = useState(false);
  const [format, setFormat] = useState('tcf_canada');
  const [variant, setVariant] = useState('2026a');
  const [taskType, setTaskType] = useState('co_mcq');
  const [level, setLevel] = useState('a1');
  const [pending, startTransition] = useTransition();
  const toast = useToast();

  const create = () =>
    startTransition(async () => {
      const res = await createExamTask({ format, variant, taskType, level });
      if (res && !res.ok) toast(res.error);
    });

  if (!open) return <button type="button" className={styles.newBtn} onClick={() => setOpen(true)}>+ New exam task</button>;

  return (
    <div className={styles.newPanel}>
      <div className={styles.newPanelRow}>
        <select className={styles.newSelect} value={format} onChange={(e) => setFormat(e.target.value)}>
          {EXAM_FORMATS.map((f) => <option key={f} value={f}>{f.toUpperCase()}</option>)}
        </select>
        <input className={styles.newInput} placeholder="variant (2026a)" value={variant} onChange={(e) => setVariant(e.target.value)} spellCheck={false} />
        <select className={styles.newSelect} value={taskType} onChange={(e) => setTaskType(e.target.value)}>
          {EXAM_TASK_TYPES.map((t) => <option key={t} value={t}>{t.toUpperCase()}</option>)}
        </select>
        <select className={styles.newSelect} value={level} onChange={(e) => setLevel(e.target.value)}>
          {EXAM_SCORE_BANDS.map((l) => <option key={l} value={l}>{l.toUpperCase()}</option>)}
        </select>
      </div>
      <div className={styles.newPanelRow}>
        <button type="button" className={styles.newBtn} onClick={create} disabled={pending || !variant}>{pending ? 'Creating…' : 'Create'}</button>
        <button type="button" className={styles.cancelBtn} onClick={() => setOpen(false)} disabled={pending}>Cancel</button>
      </div>
    </div>
  );
}
