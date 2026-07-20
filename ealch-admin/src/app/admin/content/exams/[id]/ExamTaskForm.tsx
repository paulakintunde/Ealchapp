'use client';
// Exam task editor — prompt/timing/format as plain fields; items (QCM, closed
// task types) and rubric (open task types) as JSON text, the same "fails
// loudly on a malformed edit" choice BodyEditor.tsx already makes for deeply
// nested, variable shapes, rather than a bespoke row-builder for every rubric
// criterion shape.
import { useState, useTransition } from 'react';
import { useToast } from '@/components/toast';
import { saveExamTask } from '../actions';
import { OPEN_TASK_TYPES, type ExamTaskType } from '../meta';
import type { contentExamTasks } from '@/db/schema';
import styles from '../../items/[id]/editor.module.css';

type Task = typeof contentExamTasks.$inferSelect;

export default function ExamTaskForm({ task, canWrite }: { task: Task; canWrite: boolean }) {
  const [prompt, setPrompt] = useState(task.prompt);
  const [formatVersion, setFormatVersion] = useState(task.formatVersion);
  const [timingS, setTimingS] = useState(task.timingS);
  const [itemsJson, setItemsJson] = useState(task.items ? JSON.stringify(task.items, null, 2) : '');
  const [rubricJson, setRubricJson] = useState(task.rubric ? JSON.stringify(task.rubric, null, 2) : '');
  const [modelAnswer, setModelAnswer] = useState(task.modelAnswer ?? '');
  const [examinerNotes, setExaminerNotes] = useState((task.examinerNotes ?? []).join('\n'));
  const [targetItemIds, setTargetItemIds] = useState((task.targetItemIds ?? []).join('\n'));
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const toast = useToast();

  const isOpen = OPEN_TASK_TYPES.has(task.taskType as ExamTaskType);

  const save = () =>
    startTransition(async () => {
      setError(null);
      const res = await saveExamTask(task.id, {
        prompt, formatVersion, timingS, itemsJson, rubricJson, modelAnswer,
        examinerNotes: examinerNotes.split('\n').map((l) => l.trim()).filter(Boolean),
        targetItemIds: targetItemIds.split('\n').map((l) => l.trim()).filter(Boolean),
      });
      if (res.ok) toast('Draft saved'); else setError(res.error);
    });

  return (
    <section className={styles.card}>
      <div className={styles.cardTitle}>Task</div>
      <div className={styles.cardSub}>{isOpen ? 'Open task type — rubric and model answer are required before review.' : 'Closed task type — QCM items are machine-markable.'}</div>

      <div className={styles.formGrid}>
        <div className={`${styles.field} ${styles.fieldWide}`}>
          <label className={styles.label} htmlFor="et-prompt">Prompt</label>
          <textarea className={styles.textarea} style={{ minHeight: 80 }} id="et-prompt" value={prompt} onChange={(e) => setPrompt(e.target.value)} disabled={!canWrite} />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="et-fv">formatVersion</label>
          <input className={styles.input} id="et-fv" value={formatVersion} onChange={(e) => setFormatVersion(e.target.value)} disabled={!canWrite} placeholder="tcf-2024.1" />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="et-timing">Timing (seconds)</label>
          <input className={styles.input} id="et-timing" type="number" value={timingS} onChange={(e) => setTimingS(Number(e.target.value))} disabled={!canWrite} />
        </div>
      </div>

      {!isOpen && (
        <>
          <div style={{ marginTop: 16 }}>
            <label className={styles.label}>Items (QcmItem[] JSON) — {'{q, opts, correct, why?}'}</label>
            <textarea className={styles.textarea} style={{ minHeight: 140, fontFamily: 'ui-monospace, monospace' }} value={itemsJson} onChange={(e) => setItemsJson(e.target.value)} disabled={!canWrite} placeholder='[{"q": "Où sont-ils ?", "opts": ["À la gare", "Au café"], "correct": 1}]' />
          </div>
          <div style={{ marginTop: 16 }}>
            <label className={styles.label}>Target item ids (one per line) — which corpus items a miss reviews</label>
            <textarea className={styles.textarea} style={{ minHeight: 60, fontFamily: 'ui-monospace, monospace' }} value={targetItemIds} onChange={(e) => setTargetItemIds(e.target.value)} disabled={!canWrite} placeholder="fr.b2.theme.001" />
          </div>
        </>
      )}

      {isOpen && (
        <>
          <div style={{ marginTop: 16 }}>
            <label className={styles.label}>Rubric (JSON) — {'{criteria: [{key, label, maxPoints, descriptors?}]}'}</label>
            <textarea className={styles.textarea} style={{ minHeight: 120, fontFamily: 'ui-monospace, monospace' }} value={rubricJson} onChange={(e) => setRubricJson(e.target.value)} disabled={!canWrite} />
          </div>
          <div style={{ marginTop: 16 }}>
            <label className={styles.label}>Model answer</label>
            <textarea className={styles.textarea} style={{ minHeight: 100 }} value={modelAnswer} onChange={(e) => setModelAnswer(e.target.value)} disabled={!canWrite} />
          </div>
          <div style={{ marginTop: 16 }}>
            <label className={styles.label}>Examiner notes (one per line)</label>
            <textarea className={styles.textarea} style={{ minHeight: 60 }} value={examinerNotes} onChange={(e) => setExaminerNotes(e.target.value)} disabled={!canWrite} />
          </div>
        </>
      )}

      {canWrite && (
        <div className={styles.btnRow}>
          <button type="button" className={styles.primaryBtn} onClick={save} disabled={pending}>{pending ? 'Saving…' : 'Save draft'}</button>
          {error && <span className={styles.fieldError}>{error}</span>}
        </div>
      )}
    </section>
  );
}
