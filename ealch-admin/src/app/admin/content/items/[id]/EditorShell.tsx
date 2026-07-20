'use client';
// The dual-mode editor: Classic (structured form) and Block (BlockNote
// canvas) toggle between views over the SAME ItemInput state, both writing
// through the one saveItem action. WYSIWYG is a view; the source of truth is
// this typed state, never the block document — matching the "authoring is
// not prose" principle the OPR studio spec locks for every content type.
import { useState, useTransition } from 'react';
import { useToast } from '@/components/toast';
import { saveItem, type ItemInput } from '../actions';
import type { contentItems } from '@/db/schema';
import ClassicItemForm from './ClassicItemForm';
import BlockItemView from './BlockItemView';
import styles from './editor.module.css';

type ItemRow = typeof contentItems.$inferSelect;

function toInput(item: ItemRow): ItemInput {
  const example = (item.example ?? null) as { fr?: string; en?: string } | null;
  const verbCheck = (item.verbCheck ?? null) as
    | { infinitive?: string; tense?: string; mood?: string; person?: string; number?: string }
    | null;
  return {
    kind: item.kind,
    level: item.level,
    theme: item.theme,
    fr: item.fr,
    en: item.en,
    ipa: item.ipa ?? '',
    gender: item.gender ?? '',
    exampleFr: example?.fr ?? '',
    exampleEn: example?.en ?? '',
    notes: item.notes ?? '',
    tags: item.tags ?? [],
    drills: item.drills ?? [],
    imageRef: item.imageRef ?? '',
    skill: item.skill ?? '',
    register: item.register ?? '',
    canDo: item.canDo ?? '',
    grammarPoints: item.grammarPoints ?? [],
    modality: item.modality ?? '',
    verbCheckInfinitive: verbCheck?.infinitive ?? '',
    verbCheckTense: verbCheck?.tense ?? '',
    verbCheckMood: verbCheck?.mood ?? '',
    verbCheckPerson: verbCheck?.person ?? '',
    verbCheckNumber: verbCheck?.number ?? '',
  };
}

type Mode = 'classic' | 'block';

export default function EditorShell({
  item,
  canWrite,
}: {
  item: ItemRow;
  canWrite: boolean;
}) {
  const initial = toInput(item);
  const [form, setForm] = useState<ItemInput>(initial);
  const [mode, setMode] = useState<Mode>('classic');
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const toast = useToast();

  const dirty = JSON.stringify(form) !== JSON.stringify(initial);

  const save = () =>
    startTransition(async () => {
      setError(null);
      const res = await saveItem(item.id, form);
      if (res.ok) toast('Item saved'); else setError(res.error);
    });

  return (
    <section className={styles.card}>
      <div className={styles.cardHeadRow}>
        <div>
          <div className={styles.cardTitle}>Content</div>
          <div className={styles.cardSub}>Every field validated against the same rules the publish gate uses</div>
        </div>
        <div className={styles.modeToggle}>
          <button
            type="button"
            className={`${styles.modeBtn} ${mode === 'classic' ? styles.modeBtnActive : ''}`}
            onClick={() => setMode('classic')}
          >
            Classic
          </button>
          <button
            type="button"
            className={`${styles.modeBtn} ${mode === 'block' ? styles.modeBtnActive : ''}`}
            onClick={() => setMode('block')}
          >
            Block
          </button>
        </div>
      </div>

      {mode === 'classic' ? (
        <ClassicItemForm form={form} setForm={setForm} canWrite={canWrite} />
      ) : (
        <BlockItemView form={form} setForm={setForm} canWrite={canWrite} />
      )}

      {canWrite && (
        <div className={styles.btnRow}>
          <button type="button" className={styles.primaryBtn} onClick={save} disabled={pending || !dirty}>
            {pending ? 'Saving…' : 'Save'}
          </button>
          {error && <span className={styles.fieldError}>{error}</span>}
          {!error && dirty && <span className={styles.hint}>Unsaved changes</span>}
        </div>
      )}
    </section>
  );
}
