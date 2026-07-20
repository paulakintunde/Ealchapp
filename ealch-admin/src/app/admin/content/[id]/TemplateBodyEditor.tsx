'use client';
// Structured template editor — replaces the raw-JSON textarea for
// kind='template' content_units. Builds the exact ContentTemplate shape
// from ealch-v2/src/content/schema.ts and saves through saveBody.
import { useState, useTransition } from 'react';
import { useToast } from '@/components/toast';
import { saveBody } from '../actions';
import styles from './editor.module.css';

const TARGETS = ['item', 'lesson', 'scenario', 'examTask', 'playlist'];
const LEVELS = ['sons', 'a1', 'a2', 'b1', 'b2', 'c1'];

type TemplateBody = {
  id: string;
  target: string;
  name: string;
  description: string;
  levels: string[];
  promptSkeleton: string;
  example: string;
  drills?: string[];
  sections?: string[];
  version: number;
  status: string;
};

const csv = (s: string) => s.split(',').map((v) => v.trim()).filter(Boolean);

export default function TemplateBodyEditor({
  unitId,
  initialBody,
  canWrite,
}: {
  unitId: string;
  initialBody: unknown;
  canWrite: boolean;
}) {
  const initial = (initialBody ?? {}) as Partial<TemplateBody>;
  const [t, setT] = useState<TemplateBody>({
    id: initial.id ?? '',
    target: initial.target ?? 'item',
    name: initial.name ?? '',
    description: initial.description ?? '',
    levels: initial.levels ?? ['a1'],
    promptSkeleton: initial.promptSkeleton ?? '',
    example: initial.example ?? '',
    drills: initial.drills,
    sections: initial.sections,
    version: initial.version ?? 1,
    status: initial.status ?? 'draft',
  });
  const [pending, startTransition] = useTransition();
  const toast = useToast();

  const set = <K extends keyof TemplateBody>(k: K, v: TemplateBody[K]) => setT((cur) => ({ ...cur, [k]: v }));
  const toggleLevel = (l: string) =>
    setT((cur) => ({ ...cur, levels: cur.levels.includes(l) ? cur.levels.filter((x) => x !== l) : [...cur.levels, l] }));

  const save = () =>
    startTransition(async () => {
      const body: Record<string, unknown> = {
        id: t.id, target: t.target, name: t.name, description: t.description,
        levels: t.levels, promptSkeleton: t.promptSkeleton, example: t.example,
        version: t.version, status: t.status,
        ...(t.drills?.length ? { drills: t.drills } : {}),
        ...(t.sections?.length ? { sections: t.sections } : {}),
      };
      const res = await saveBody(unitId, JSON.stringify(body));
      toast(res.ok ? 'Draft saved' : res.error);
    });

  return (
    <>
      <div className={styles.formGrid}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="tpl-target">Target</label>
          <select id="tpl-target" className={styles.select} value={t.target} onChange={(e) => set('target', e.target.value)} disabled={!canWrite}>
            {TARGETS.map((x) => <option key={x} value={x}>{x}</option>)}
          </select>
        </div>
        <div className={`${styles.field} ${styles.fieldWide}`}>
          <label className={styles.label} htmlFor="tpl-name">Name</label>
          <input id="tpl-name" className={styles.input} value={t.name} onChange={(e) => set('name', e.target.value)} disabled={!canWrite} placeholder="Verb conjugation drill" />
        </div>
        <div className={`${styles.field} ${styles.fieldWide}`}>
          <label className={styles.label} htmlFor="tpl-id">Template id</label>
          <input id="tpl-id" className={styles.input} value={t.id} onChange={(e) => set('id', e.target.value)} disabled={!canWrite} placeholder="tpl.item.verb-conjugation-drill" spellCheck={false} />
        </div>
        <div className={`${styles.field} ${styles.fieldWide}`}>
          <label className={styles.label} htmlFor="tpl-desc">Description</label>
          <textarea id="tpl-desc" className={styles.textarea} style={{ minHeight: 60 }} value={t.description} onChange={(e) => set('description', e.target.value)} disabled={!canWrite} placeholder="What a human picking between sibling templates needs to know" />
        </div>
      </div>

      <div style={{ marginTop: 14 }}>
        <label className={styles.label}>Levels this template is fit for</label>
        <div style={{ display: 'flex', gap: 10, marginTop: 6, flexWrap: 'wrap' }}>
          {LEVELS.map((l) => (
            <label key={l} className={styles.drillCheck}>
              <input type="checkbox" checked={t.levels.includes(l)} onChange={() => toggleLevel(l)} disabled={!canWrite} />
              {l.toUpperCase()}
            </label>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 14 }}>
        <label className={styles.label}>Prompt skeleton — {'{{placeholder}}'} slots filled from the curriculum target</label>
        <textarea className={styles.textarea} style={{ minHeight: 100 }} value={t.promptSkeleton} onChange={(e) => set('promptSkeleton', e.target.value)} disabled={!canWrite} placeholder="Write a {{level}} sentence about {{theme}} that opens with the {{person}} {{tense}} of {{infinitive}}." />
      </div>

      <div style={{ marginTop: 14 }}>
        <label className={styles.label}>Worked example — what a reviewer checks output against</label>
        <textarea className={styles.textarea} style={{ minHeight: 60 }} value={t.example} onChange={(e) => set('example', e.target.value)} disabled={!canWrite} />
      </div>

      <div className={styles.formGrid} style={{ marginTop: 14 }}>
        <div className={`${styles.field} ${styles.fieldWide}`}>
          <label className={styles.label}>Drills this template is scoped to (optional, comma-separated)</label>
          <input className={styles.input} value={(t.drills ?? []).join(', ')} onChange={(e) => set('drills', csv(e.target.value))} disabled={!canWrite} placeholder="voiceflash" />
        </div>
        <div className={`${styles.field} ${styles.fieldWide}`}>
          <label className={styles.label}>Sections this template is scoped to (optional, comma-separated)</label>
          <input className={styles.input} value={(t.sections ?? []).join(', ')} onChange={(e) => set('sections', csv(e.target.value))} disabled={!canWrite} placeholder="teach" />
        </div>
      </div>

      {canWrite && (
        <div className={styles.btnRow}>
          <button type="button" className={styles.primaryBtn} onClick={save} disabled={pending}>{pending ? 'Saving…' : 'Save draft'}</button>
          <span className={styles.hint}>Saving keeps the template in draft.</span>
        </div>
      )}
    </>
  );
}
