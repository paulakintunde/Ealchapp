'use client';
// One item's row + its expandable segment-map editor. `blockId`/`startMs`/
// `endMs`/`text` mirror ealch-v2's AudioSegment exactly — this is authoring
// the same shape the app's schema validates, just from the admin side.
import { useState, useTransition, type ReactNode } from 'react';
import { useToast } from '@/components/toast';
import { saveSegments, type SegmentInput } from '../items/actions';
import styles from '../items/phase2.module.css';

type Item = {
  id: string;
  fr: string;
  level: string;
  theme: string;
  audioRef: string | null;
  segments: SegmentInput[];
};

export default function SegmentRow({ item, statusChip }: { item: Item; statusChip: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState<SegmentInput[]>(item.segments);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const toast = useToast();

  const set = (i: number, patch: Partial<SegmentInput>) =>
    setRows((cur) => cur.map((r, j) => (j === i ? { ...r, ...patch } : r)));
  const add = () =>
    setRows((cur) => [...cur, { blockId: `b${cur.length + 1}`, startMs: 0, endMs: 1000, text: '' }]);
  const remove = (i: number) => setRows((cur) => cur.filter((_, j) => j !== i));

  const save = () =>
    startTransition(async () => {
      setError(null);
      const res = await saveSegments(item.id, rows);
      if (res.ok) toast('Segment map saved'); else setError(res.error);
    });

  return (
    <>
      <div
        className={styles.row}
        style={{ gridTemplateColumns: '2fr 0.7fr 0.9fr 0.9fr 0.9fr 0.6fr', cursor: 'pointer' }}
        onClick={() => setOpen((o) => !o)}
      >
        <div>
          <div className={styles.itemFr}>{item.fr || <em>(empty)</em>}</div>
          <div className={styles.itemSub}>{item.id}</div>
        </div>
        <div>{item.level.toUpperCase()}</div>
        <div>{item.theme}</div>
        <div>
          {item.audioRef
            ? <span className={`${styles.badge} ${styles.badgeOk}`}>set</span>
            : <span className={`${styles.badge} ${styles.badgeWarn}`}>device TTS</span>}
        </div>
        <div>
          {item.segments.length > 0
            ? <span className={`${styles.badge} ${styles.badgeOk}`}>{item.segments.length} segment{item.segments.length === 1 ? '' : 's'}</span>
            : <span className={styles.badge}>none</span>}
        </div>
        <div>{statusChip}</div>
      </div>

      {open && (
        <div className={styles.segPanel}>
          {rows.length === 0 && <div className={styles.itemSub}>No segments yet — the drill plays {'"'}audioRef{'"'} from the top with no highlighting.</div>}
          {rows.map((r, i) => (
            <div key={i} className={styles.segRow}>
              <input
                className={styles.segInput}
                placeholder="blockId"
                value={r.blockId}
                onChange={(e) => set(i, { blockId: e.target.value })}
              />
              <input
                className={styles.segInput}
                type="number"
                placeholder="startMs"
                value={r.startMs}
                onChange={(e) => set(i, { startMs: Number(e.target.value) })}
              />
              <input
                className={styles.segInput}
                type="number"
                placeholder="endMs"
                value={r.endMs}
                onChange={(e) => set(i, { endMs: Number(e.target.value) })}
              />
              <input
                className={styles.segInput}
                placeholder="what's spoken here"
                value={r.text}
                onChange={(e) => set(i, { text: e.target.value })}
              />
              <button type="button" className={styles.segRemove} onClick={() => remove(i)} title="Remove segment">
                ✕
              </button>
            </div>
          ))}
          <div className={styles.segBtnRow}>
            <button type="button" className={styles.ghostBtn} onClick={add} disabled={pending}>
              + Segment
            </button>
            <button type="button" className={styles.primaryBtn} onClick={save} disabled={pending}>
              {pending ? 'Saving…' : 'Save segment map'}
            </button>
            {error && <span className={styles.fieldError}>{error}</span>}
          </div>
        </div>
      )}
    </>
  );
}
