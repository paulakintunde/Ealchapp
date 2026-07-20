'use client';
// '+ New item' — unlike a pack, an item's id is meaningful
// (fr.<level>.<theme>.<seq>) and its drills can't be empty (DB CHECK), so
// creation needs a few inputs upfront rather than createUnit's zero-input
// blank draft. A small inline panel collects them; the action computes the
// next free seq for (level, theme) and redirects to the new item's editor.
import { useState, useTransition } from 'react';
import { useToast } from '@/components/toast';
import { createItem } from './actions';
import { ITEM_DRILL_KINDS, ITEM_DRILL_LABEL, ITEM_KINDS, ITEM_KIND_LABEL, ITEM_LEVELS, isValidTheme } from './meta';
import styles from './items.module.css';

export default function NewItemButton({ className }: { className: string }) {
  const [open, setOpen] = useState(false);
  const [level, setLevel] = useState('a1');
  const [theme, setTheme] = useState('');
  const [kind, setKind] = useState('word');
  const [drills, setDrills] = useState<string[]>(['flashcard']);
  const [pending, startTransition] = useTransition();
  const toast = useToast();

  const toggleDrill = (d: string) =>
    setDrills((cur) => (cur.includes(d) ? cur.filter((x) => x !== d) : [...cur, d]));

  const create = () =>
    startTransition(async () => {
      const res = await createItem({ level, theme: theme.trim().toLowerCase(), kind, drills });
      // On success the action redirects; we only land here on failure.
      if (res && !res.ok) toast(res.error);
    });

  if (!open) {
    return (
      <button type="button" className={className} onClick={() => setOpen(true)}>
        + New item
      </button>
    );
  }

  const themeValid = isValidTheme(theme.trim().toLowerCase());

  return (
    <div className={styles.newPanel}>
      <div className={styles.newPanelRow}>
        <select className={styles.newSelect} value={level} onChange={(e) => setLevel(e.target.value)}>
          {ITEM_LEVELS.filter((l) => l !== 'c2').map((l) => (
            <option key={l} value={l}>{l.toUpperCase()}</option>
          ))}
        </select>
        <input
          className={styles.newInput}
          placeholder="theme (e.g. cafe)"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          spellCheck={false}
        />
        <select className={styles.newSelect} value={kind} onChange={(e) => setKind(e.target.value)}>
          {ITEM_KINDS.map((k) => (
            <option key={k} value={k}>{ITEM_KIND_LABEL[k]}</option>
          ))}
        </select>
      </div>
      <div className={styles.newPanelRow}>
        {ITEM_DRILL_KINDS.map((d) => (
          <label key={d} className={styles.drillCheck}>
            <input type="checkbox" checked={drills.includes(d)} onChange={() => toggleDrill(d)} />
            {ITEM_DRILL_LABEL[d]}
          </label>
        ))}
      </div>
      <div className={styles.newPanelRow}>
        <button
          type="button"
          className={className}
          onClick={create}
          disabled={pending || !themeValid || drills.length === 0}
        >
          {pending ? 'Creating…' : 'Create'}
        </button>
        <button type="button" className={styles.cancelBtn} onClick={() => setOpen(false)} disabled={pending}>
          Cancel
        </button>
        {!themeValid && theme.length > 0 && <span className={styles.newHint}>lowercase, digits, hyphens only</span>}
      </div>
    </div>
  );
}
