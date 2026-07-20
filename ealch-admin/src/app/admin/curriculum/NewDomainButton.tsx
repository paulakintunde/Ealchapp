'use client';
import { useState, useTransition } from 'react';
import { useToast } from '@/components/toast';
import { createDomain } from './actions';
import styles from './curriculum.module.css';

export default function NewDomainButton({ nextOrder }: { nextOrder: number }) {
  const [open, setOpen] = useState(false);
  const [slug, setSlug] = useState('');
  const [title, setTitle] = useState('');
  const [pending, startTransition] = useTransition();
  const toast = useToast();

  const create = () =>
    startTransition(async () => {
      const res = await createDomain({ slug, title, order: nextOrder });
      if (res.ok) { toast('Domain created'); setOpen(false); setSlug(''); setTitle(''); }
      else toast(res.error);
    });

  if (!open) return <button type="button" className={styles.newBtn} onClick={() => setOpen(true)}>+ New domain</button>;

  return (
    <div className={styles.inlinePanel}>
      <input className={styles.input} placeholder="slug" value={slug} onChange={(e) => setSlug(e.target.value)} spellCheck={false} />
      <input className={styles.input} placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button type="button" className={styles.newBtn} onClick={create} disabled={pending || !slug || !title}>{pending ? '…' : 'Create'}</button>
      <button type="button" className={styles.cancelBtn} onClick={() => setOpen(false)}>Cancel</button>
    </div>
  );
}
