'use client';
import { useState, useTransition } from 'react';
import { useToast } from '@/components/toast';
import { createTag } from './actions';
import styles from '../items/items.module.css';

export default function NewTagButton() {
  const [open, setOpen] = useState(false);
  const [slug, setSlug] = useState('');
  const [label, setLabel] = useState('');
  const [weakSkill, setWeakSkill] = useState('');
  const [pending, startTransition] = useTransition();
  const toast = useToast();

  const create = () =>
    startTransition(async () => {
      const res = await createTag({ slug, label, weakSkill });
      if (res.ok) { toast('Tag created'); setOpen(false); setSlug(''); setLabel(''); setWeakSkill(''); }
      else toast(res.error);
    });

  if (!open) return <button type="button" className={styles.newBtn} onClick={() => setOpen(true)}>+ New tag</button>;

  return (
    <div className={styles.newPanel}>
      <div className={styles.newPanelRow}>
        <input className={styles.newInput} placeholder="slug (liaison)" value={slug} onChange={(e) => setSlug(e.target.value)} spellCheck={false} />
        <input className={styles.newInput} placeholder="label" value={label} onChange={(e) => setLabel(e.target.value)} />
        <input className={styles.newInput} placeholder="weak-skill key (optional)" value={weakSkill} onChange={(e) => setWeakSkill(e.target.value)} spellCheck={false} />
      </div>
      <div className={styles.newPanelRow}>
        <button type="button" className={styles.newBtn} onClick={create} disabled={pending || !slug || !label}>{pending ? 'Creating…' : 'Create'}</button>
        <button type="button" className={styles.cancelBtn} onClick={() => setOpen(false)} disabled={pending}>Cancel</button>
      </div>
    </div>
  );
}
