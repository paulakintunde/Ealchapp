'use client';
import { useState, useTransition } from 'react';
import { useToast } from '@/components/toast';
import { createTheme } from './actions';
import styles from './curriculum.module.css';

const LEVELS = ['sons', 'a1', 'a2', 'b1', 'b2', 'c1'];

export default function NewThemeButton({ domains }: { domains: string[] }) {
  const [open, setOpen] = useState(false);
  const [slug, setSlug] = useState('');
  const [title, setTitle] = useState('');
  const [domain, setDomain] = useState(domains[0] ?? '');
  const [lo, setLo] = useState('a1');
  const [hi, setHi] = useState('a1');
  const [examFlag, setExamFlag] = useState(false);
  const [immigFlag, setImmigFlag] = useState(false);
  const [pending, startTransition] = useTransition();
  const toast = useToast();

  const create = () =>
    startTransition(async () => {
      const res = await createTheme({ slug, title, domain, levelRangeLo: lo, levelRangeHi: hi, examFlag, immigFlag, subThemes: [] });
      if (res.ok) { toast('Theme created'); setOpen(false); setSlug(''); setTitle(''); }
      else toast(res.error);
    });

  if (!open) {
    return (
      <button type="button" className={styles.newBtn} onClick={() => setOpen(true)} disabled={domains.length === 0} title={domains.length === 0 ? 'Create a domain first' : ''}>
        + New theme
      </button>
    );
  }

  return (
    <div className={styles.inlinePanel}>
      <select className={styles.input} value={domain} onChange={(e) => setDomain(e.target.value)}>
        {domains.map((dm) => <option key={dm} value={dm}>{dm}</option>)}
      </select>
      <input className={styles.input} placeholder="slug" value={slug} onChange={(e) => setSlug(e.target.value)} spellCheck={false} />
      <input className={styles.input} placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <select className={styles.input} value={lo} onChange={(e) => setLo(e.target.value)}>
        {LEVELS.map((l) => <option key={l} value={l}>{l.toUpperCase()}</option>)}
      </select>
      <select className={styles.input} value={hi} onChange={(e) => setHi(e.target.value)}>
        {LEVELS.map((l) => <option key={l} value={l}>{l.toUpperCase()}</option>)}
      </select>
      <label className={styles.checkLabel}><input type="checkbox" checked={examFlag} onChange={(e) => setExamFlag(e.target.checked)} /> exam</label>
      <label className={styles.checkLabel}><input type="checkbox" checked={immigFlag} onChange={(e) => setImmigFlag(e.target.checked)} /> immig</label>
      <button type="button" className={styles.newBtn} onClick={create} disabled={pending || !slug || !title}>{pending ? '…' : 'Create'}</button>
      <button type="button" className={styles.cancelBtn} onClick={() => setOpen(false)}>Cancel</button>
    </div>
  );
}
