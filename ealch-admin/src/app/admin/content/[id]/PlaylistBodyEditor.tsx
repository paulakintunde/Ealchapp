'use client';
// Structured playlist editor — replaces the raw-JSON textarea for
// kind='playlist' content_units. Builds the exact Playlist shape from
// ealch-v2/src/content/schema.ts and saves it through the existing
// saveBody action, so no new mutation path is needed: this is a nicer VIEW
// over the same body jsonb column, matching the "WYSIWYG is a view, the
// source of truth is structured data" principle.
import { useState, useTransition } from 'react';
import { useToast } from '@/components/toast';
import { saveBody } from '../actions';
import styles from './editor.module.css';

type Track = { id: string; title: string; lines: { fr: string; en: string }[] };
type PlaylistBody = {
  id: string;
  minLevel: string;
  word: string;
  tag: string;
  glow: string;
  labelFr: string;
  labelEn: string;
  topicFr: string;
  topicEn: string;
  tracks: Track[];
  version: number;
  status: string;
  provenance?: unknown;
};

const LEVELS = ['sons', 'a1', 'a2', 'b1', 'b2', 'c1'];

function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'track';
}

export default function PlaylistBodyEditor({
  unitId,
  initialBody,
  canWrite,
}: {
  unitId: string;
  initialBody: unknown;
  canWrite: boolean;
}) {
  const initial = (initialBody ?? {}) as Partial<PlaylistBody>;
  const [p, setP] = useState<PlaylistBody>({
    id: initial.id ?? '',
    minLevel: initial.minLevel ?? 'a1',
    word: initial.word ?? '',
    tag: initial.tag ?? '',
    glow: initial.glow ?? 'rgba(150,150,150,0.28)',
    labelFr: initial.labelFr ?? '',
    labelEn: initial.labelEn ?? '',
    topicFr: initial.topicFr ?? '',
    topicEn: initial.topicEn ?? '',
    tracks: initial.tracks ?? [],
    version: initial.version ?? 1,
    status: initial.status ?? 'draft',
    ...(initial.provenance ? { provenance: initial.provenance } : {}),
  });
  const [pending, startTransition] = useTransition();
  const toast = useToast();

  const set = <K extends keyof PlaylistBody>(k: K, v: PlaylistBody[K]) => setP((cur) => ({ ...cur, [k]: v }));

  const addTrack = () =>
    setP((cur) => ({
      ...cur,
      tracks: [...cur.tracks, { id: `${slugify(cur.word || 'track')}-t${cur.tracks.length + 1}`, title: '', lines: [{ fr: '', en: '' }] }],
    }));
  const removeTrack = (i: number) => setP((cur) => ({ ...cur, tracks: cur.tracks.filter((_, j) => j !== i) }));
  const setTrack = (i: number, patch: Partial<Track>) =>
    setP((cur) => ({ ...cur, tracks: cur.tracks.map((t, j) => (j === i ? { ...t, ...patch } : t)) }));
  const addLine = (i: number) =>
    setP((cur) => ({ ...cur, tracks: cur.tracks.map((t, j) => (j === i ? { ...t, lines: [...t.lines, { fr: '', en: '' }] } : t)) }));
  const setLine = (i: number, j: number, patch: Partial<{ fr: string; en: string }>) =>
    setP((cur) => ({
      ...cur,
      tracks: cur.tracks.map((t, ti) =>
        ti === i ? { ...t, lines: t.lines.map((ln, li) => (li === j ? { ...ln, ...patch } : ln)) } : t
      ),
    }));
  const removeLine = (i: number, j: number) =>
    setP((cur) => ({
      ...cur,
      tracks: cur.tracks.map((t, ti) => (ti === i ? { ...t, lines: t.lines.filter((_, li) => li !== j) } : t)),
    }));

  const save = () =>
    startTransition(async () => {
      const res = await saveBody(unitId, JSON.stringify(p));
      toast(res.ok ? 'Draft saved' : res.error);
    });

  return (
    <>
      <div className={styles.formGrid}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="pl-word">Card word</label>
          <input id="pl-word" className={styles.input} value={p.word} onChange={(e) => set('word', e.target.value)} disabled={!canWrite} placeholder="La Voix" />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="pl-tag">Eyebrow tag</label>
          <input id="pl-tag" className={styles.input} value={p.tag} onChange={(e) => set('tag', e.target.value)} disabled={!canWrite} placeholder="DEEP-DIVE" />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="pl-minlevel">Min level</label>
          <select id="pl-minlevel" className={styles.select} value={p.minLevel} onChange={(e) => set('minLevel', e.target.value)} disabled={!canWrite}>
            {LEVELS.map((l) => <option key={l} value={l}>{l.toUpperCase()}</option>)}
          </select>
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="pl-glow">Card glow (rgba)</label>
          <input id="pl-glow" className={styles.input} value={p.glow} onChange={(e) => set('glow', e.target.value)} disabled={!canWrite} spellCheck={false} />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="pl-labelfr">Label (fr)</label>
          <input id="pl-labelfr" className={styles.input} value={p.labelFr} onChange={(e) => set('labelFr', e.target.value)} disabled={!canWrite} />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="pl-labelen">Label (en)</label>
          <input id="pl-labelen" className={styles.input} value={p.labelEn} onChange={(e) => set('labelEn', e.target.value)} disabled={!canWrite} />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="pl-topicfr">Topic (fr)</label>
          <input id="pl-topicfr" className={styles.input} value={p.topicFr} onChange={(e) => set('topicFr', e.target.value)} disabled={!canWrite} placeholder="voyelles nasales" />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="pl-topicen">Topic (en)</label>
          <input id="pl-topicen" className={styles.input} value={p.topicEn} onChange={(e) => set('topicEn', e.target.value)} disabled={!canWrite} placeholder="nasal vowels" />
        </div>
      </div>

      <div style={{ marginTop: 18 }}>
        <div className={styles.cardTitle} style={{ fontSize: 12.5 }}>Tracks ({p.tracks.length})</div>
        {p.tracks.map((t, i) => (
          <div key={i} style={{ border: '1px solid var(--line)', borderRadius: 10, padding: 12, marginTop: 10 }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <input
                className={styles.input}
                value={t.title}
                onChange={(e) => setTrack(i, { title: e.target.value })}
                disabled={!canWrite}
                placeholder="Track title"
                style={{ flex: 1 }}
              />
              <input
                className={styles.input}
                value={t.id}
                onChange={(e) => setTrack(i, { id: e.target.value })}
                disabled={!canWrite}
                placeholder="track-id"
                style={{ width: 140 }}
                spellCheck={false}
              />
              {canWrite && (
                <button type="button" className={styles.dangerBtn} onClick={() => removeTrack(i)}>Remove track</button>
              )}
            </div>
            {t.lines.map((ln, j) => (
              <div key={j} style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                <input className={styles.input} value={ln.fr} onChange={(e) => setLine(i, j, { fr: e.target.value })} disabled={!canWrite} placeholder="fr" style={{ flex: 1 }} />
                <input className={styles.input} value={ln.en} onChange={(e) => setLine(i, j, { en: e.target.value })} disabled={!canWrite} placeholder="en" style={{ flex: 1 }} />
                {canWrite && (
                  <button type="button" className={styles.ghostBtn} onClick={() => removeLine(i, j)}>✕</button>
                )}
              </div>
            ))}
            {canWrite && (
              <button type="button" className={styles.ghostBtn} onClick={() => addLine(i)} style={{ marginTop: 8 }}>+ Line</button>
            )}
          </div>
        ))}
        {canWrite && (
          <button type="button" className={styles.darkBtn} onClick={addTrack} style={{ marginTop: 10 }}>+ Track</button>
        )}
      </div>

      {canWrite && (
        <div className={styles.btnRow}>
          <button type="button" className={styles.primaryBtn} onClick={save} disabled={pending}>
            {pending ? 'Saving…' : 'Save draft'}
          </button>
          <span className={styles.hint}>Saving moves the playlist back to draft.</span>
        </div>
      )}
    </>
  );
}
