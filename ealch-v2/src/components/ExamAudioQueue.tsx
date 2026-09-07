// One playback owner for a whole listening paper.
//
// ── Why this exists ─────────────────────────────────────────────────────────
//
// Every ExamAudioPart used to schedule its own autoplay from mount:
// `later(play, readWindowS * 1000)`. All parts of a paper mount in the same
// tick, so every part sharing a readWindowS fired in the same tick too, into
// the ONE shared clip player in services/audio. The last writer won and the
// earlier documents were consumed unheard — while still being marked played,
// so with `playCount: 1` under exam conditions their questions became
// unanswerable.
//
// Measured on TCF blanc-01's compréhension orale: 24 documents, 8 distinct
// readWindowS values, so 8 collision groups (the largest firing six documents
// at once) and all 19 minutes of audio starting inside the first 30 seconds.
//
// The fix is a running order. Parts join in render order — which is document
// order, because React mounts children in order — and exactly one holds the
// floor at a time. A part's reading window does not start on mount; it starts
// when the floor reaches it, which is also what the content assumes: TCF
// blanc-01's read windows plus its audio total ~26.6 min inside a 35 min paper,
// and that only fits if the documents run one after another.
//
// The provider is optional. `useExamAudioQueue()` returns null when there is
// none, and ExamAudioPart then behaves exactly as it did before, so a part
// rendered outside a paper (a preview, a test) needs no queue.
import { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';

export type ExamAudioQueueApi = {
  /** Take a place in the running order. Idempotent. */
  join: (id: string) => void;
  /** Leave it — unmounted, or never going to play. */
  leave: (id: string) => void;
  /** Done with the shared player; hand the floor to the next part. */
  release: (id: string) => void;
  /** Whose turn it is, or null before anyone has joined. */
  activeId: string | null;
};

const Ctx = createContext<ExamAudioQueueApi | null>(null);

export function ExamAudioQueue({ children }: { children: React.ReactNode }) {
  // Refs, not state: joining must not re-render every sibling, and the order is
  // read inside the setState updater where a stale closure would reorder the
  // paper.
  const order = useRef<string[]>([]);
  const released = useRef<Set<string>>(new Set());
  const [activeId, setActiveId] = useState<string | null>(null);

  const pump = useCallback(() => {
    setActiveId((current) => {
      // Someone still holds the floor and has not released it: leave them be.
      if (current !== null && !released.current.has(current)) return current;
      return order.current.find((id) => !released.current.has(id)) ?? null;
    });
  }, []);

  const join = useCallback(
    (id: string) => {
      if (!order.current.includes(id)) order.current.push(id);
      pump();
    },
    [pump]
  );

  const leave = useCallback(
    (id: string) => {
      order.current = order.current.filter((x) => x !== id);
      // Not released — removed. Keeping it in the released set would let a
      // remount silently skip its turn.
      released.current.delete(id);
      pump();
    },
    [pump]
  );

  const release = useCallback(
    (id: string) => {
      released.current.add(id);
      pump();
    },
    [pump]
  );

  const api = useMemo<ExamAudioQueueApi>(
    () => ({ join, leave, release, activeId }),
    [join, leave, release, activeId]
  );

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

/** Null when there is no queue above this part. */
export function useExamAudioQueue(): ExamAudioQueueApi | null {
  return useContext(Ctx);
}
