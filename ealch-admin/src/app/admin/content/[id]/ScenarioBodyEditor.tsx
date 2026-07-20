'use client';
// Structured roleplay editor — replaces the raw-JSON textarea for
// kind='scenario' content_units. Builds the exact Scenario shape from
// ealch-v2/src/content/schema.ts (id/level/theme/title/turns/version) and
// saves through the existing saveBody action.
import { useState, useTransition } from 'react';
import { useToast } from '@/components/toast';
import { saveBody } from '../actions';
import styles from './editor.module.css';

type Turn = { ai: string; en: string; user: string };
type ScenarioBody = {
  id: string;
  level: string;
  theme: string;
  title: string;
  turns: Turn[];
  version: number;
  provenance?: unknown;
};

const LEVELS = ['sons', 'a1', 'a2', 'b1', 'b2', 'c1'];

export default function ScenarioBodyEditor({
  unitId,
  initialBody,
  canWrite,
}: {
  unitId: string;
  initialBody: unknown;
  canWrite: boolean;
}) {
  const initial = (initialBody ?? {}) as Partial<ScenarioBody>;
  const [s, setS] = useState<ScenarioBody>({
    id: initial.id ?? '',
    level: initial.level ?? 'a1',
    theme: initial.theme ?? '',
    title: initial.title ?? '',
    turns: initial.turns?.length ? initial.turns : [{ ai: '', en: '', user: '' }],
    version: initial.version ?? 1,
    ...(initial.provenance ? { provenance: initial.provenance } : {}),
  });
  const [pending, startTransition] = useTransition();
  const toast = useToast();

  const set = <K extends keyof ScenarioBody>(k: K, v: ScenarioBody[K]) => setS((cur) => ({ ...cur, [k]: v }));
  const setTurn = (i: number, patch: Partial<Turn>) =>
    setS((cur) => ({ ...cur, turns: cur.turns.map((t, j) => (j === i ? { ...t, ...patch } : t)) }));
  const addTurn = () => setS((cur) => ({ ...cur, turns: [...cur.turns, { ai: '', en: '', user: '' }] }));
  const removeTurn = (i: number) => setS((cur) => ({ ...cur, turns: cur.turns.filter((_, j) => j !== i) }));
  const moveTurn = (i: number, dir: -1 | 1) =>
    setS((cur) => {
      const j = i + dir;
      if (j < 0 || j >= cur.turns.length) return cur;
      const turns = [...cur.turns];
      [turns[i], turns[j]] = [turns[j]!, turns[i]!];
      return { ...cur, turns };
    });

  const save = () =>
    startTransition(async () => {
      const res = await saveBody(unitId, JSON.stringify(s));
      toast(res.ok ? 'Draft saved' : res.error);
    });

  return (
    <>
      <div className={styles.formGrid}>
        <div className={`${styles.field} ${styles.fieldWide}`}>
          <label className={styles.label} htmlFor="sc-title">Title</label>
          <input id="sc-title" className={styles.input} value={s.title} onChange={(e) => set('title', e.target.value)} disabled={!canWrite} placeholder="Au café" />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="sc-level">Level</label>
          <select id="sc-level" className={styles.select} value={s.level} onChange={(e) => set('level', e.target.value)} disabled={!canWrite}>
            {LEVELS.map((l) => <option key={l} value={l}>{l.toUpperCase()}</option>)}
          </select>
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="sc-theme">Theme</label>
          <input id="sc-theme" className={styles.input} value={s.theme} onChange={(e) => set('theme', e.target.value)} disabled={!canWrite} placeholder="cafe" spellCheck={false} />
        </div>
      </div>

      <div style={{ marginTop: 18 }}>
        <div className={styles.cardTitle} style={{ fontSize: 12.5 }}>Turns ({s.turns.length})</div>
        <div className={styles.cardSub} style={{ marginBottom: 6 }}>
          &ldquo;ai&rdquo; is the other speaker&apos;s line; &ldquo;user&rdquo; is what the learner is meant to produce and the STT scores against.
        </div>
        {s.turns.map((t, i) => (
          <div key={i} style={{ border: '1px solid var(--line)', borderRadius: 10, padding: 12, marginTop: 10 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className={styles.hint}>Turn {i + 1}</span>
              {canWrite && (
                <div style={{ display: 'flex', gap: 6 }}>
                  <button type="button" className={styles.ghostBtn} onClick={() => moveTurn(i, -1)} disabled={i === 0}>↑</button>
                  <button type="button" className={styles.ghostBtn} onClick={() => moveTurn(i, 1)} disabled={i === s.turns.length - 1}>↓</button>
                  <button type="button" className={styles.dangerBtn} onClick={() => removeTurn(i)}>Remove</button>
                </div>
              )}
            </div>
            <div className={styles.formGrid} style={{ marginTop: 8 }}>
              <div className={`${styles.field} ${styles.fieldWide}`}>
                <label className={styles.label}>AI (fr)</label>
                <input className={styles.input} value={t.ai} onChange={(e) => setTurn(i, { ai: e.target.value })} disabled={!canWrite} placeholder="Bonjour ! Vous désirez ?" />
              </div>
              <div className={`${styles.field} ${styles.fieldWide}`}>
                <label className={styles.label}>AI gloss (en)</label>
                <input className={styles.input} value={t.en} onChange={(e) => setTurn(i, { en: e.target.value })} disabled={!canWrite} placeholder="Hello! What would you like?" />
              </div>
              <div className={`${styles.field} ${styles.fieldWide}`}>
                <label className={styles.label}>Learner produces (fr)</label>
                <input className={styles.input} value={t.user} onChange={(e) => setTurn(i, { user: e.target.value })} disabled={!canWrite} placeholder="Un café, s'il vous plaît." />
              </div>
            </div>
          </div>
        ))}
        {canWrite && (
          <button type="button" className={styles.darkBtn} onClick={addTurn} style={{ marginTop: 10 }}>+ Turn</button>
        )}
      </div>

      {canWrite && (
        <div className={styles.btnRow}>
          <button type="button" className={styles.primaryBtn} onClick={save} disabled={pending}>
            {pending ? 'Saving…' : 'Save draft'}
          </button>
          <span className={styles.hint}>Saving moves the scenario back to draft.</span>
        </div>
      )}
    </>
  );
}
