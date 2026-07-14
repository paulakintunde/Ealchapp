'use client';
// Metadata form — title/slug/kind/level/locale, saved via updateMeta
// (server-side slug uniqueness check). Read-only for roles without
// content.write (support).
import { useState, useTransition } from 'react';
import { useToast } from '@/components/toast';
import { KINDS, LEVELS, LOCALES, KIND_META } from '../meta';
import { updateMeta } from '../actions';
import styles from './editor.module.css';

interface Meta {
  title: string;
  slug: string;
  kind: string;
  level: string;
  locale: string;
}

export default function MetaForm({
  unitId,
  initial,
  canWrite,
}: {
  unitId: string;
  initial: Meta;
  canWrite: boolean;
}) {
  const [form, setForm] = useState<Meta>(initial);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const toast = useToast();

  const set = (patch: Partial<Meta>) => setForm((f) => ({ ...f, ...patch }));
  const dirty =
    form.title !== initial.title || form.slug !== initial.slug ||
    form.kind !== initial.kind || form.level !== initial.level ||
    form.locale !== initial.locale;

  const save = () =>
    startTransition(async () => {
      setError(null);
      const res = await updateMeta(unitId, form);
      if (res.ok) {
        toast('Metadata saved');
      } else {
        setError(res.error);
      }
    });

  return (
    <>
      <div className={styles.formGrid}>
        <div className={`${styles.field} ${styles.fieldWide}`}>
          <label className={styles.label} htmlFor="meta-title">Title</label>
          <input
            id="meta-title"
            className={styles.input}
            value={form.title}
            onChange={(e) => set({ title: e.target.value })}
            disabled={!canWrite}
          />
        </div>
        <div className={`${styles.field} ${styles.fieldWide}`}>
          <label className={styles.label} htmlFor="meta-slug">Slug</label>
          <input
            id="meta-slug"
            className={styles.input}
            value={form.slug}
            onChange={(e) => set({ slug: e.target.value })}
            disabled={!canWrite}
            spellCheck={false}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="meta-kind">Kind</label>
          <select
            id="meta-kind"
            className={styles.select}
            value={form.kind}
            onChange={(e) => set({ kind: e.target.value })}
            disabled={!canWrite}
          >
            {KINDS.map((k) => (
              <option key={k} value={k}>{KIND_META[k].label}</option>
            ))}
          </select>
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="meta-level">Level</label>
          <select
            id="meta-level"
            className={styles.select}
            value={form.level}
            onChange={(e) => set({ level: e.target.value })}
            disabled={!canWrite}
          >
            {LEVELS.map((l) => (
              <option key={l} value={l}>{l.toUpperCase()}</option>
            ))}
          </select>
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="meta-locale">Locale</label>
          <select
            id="meta-locale"
            className={styles.select}
            value={form.locale}
            onChange={(e) => set({ locale: e.target.value })}
            disabled={!canWrite}
          >
            {LOCALES.map((l) => (
              <option key={l} value={l}>{l.toUpperCase()}</option>
            ))}
          </select>
        </div>
      </div>

      {canWrite && (
        <div className={styles.btnRow}>
          <button
            type="button"
            className={styles.darkBtn}
            onClick={save}
            disabled={pending || !dirty || !form.title.trim() || !form.slug.trim()}
          >
            {pending ? 'Saving…' : 'Save metadata'}
          </button>
          {error && <span className={styles.fieldError}>{error}</span>}
        </div>
      )}
    </>
  );
}
