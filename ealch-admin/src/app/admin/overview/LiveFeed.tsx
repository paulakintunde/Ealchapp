'use client';
// Live feed — subscribes to /api/stream (SSE) and prepends events as they
// arrive. Server seeds `initial` from the bus ring buffer (or, when empty,
// entries synthesized from the events table). EventSource reconnects natively;
// on error we also close + re-create with exponential backoff so a dead
// connection (e.g. server restart) always comes back.
import { useEffect, useRef, useState } from 'react';
import { relTime } from '@/lib/format';
import styles from './overview.module.css';

// Mirrors LiveEvent from @/lib/bus — redeclared locally because the bus module
// is server-side by convention and must not be imported from the client.
export type FeedType =
  | 'signup'
  | 'subscription'
  | 'refund'
  | 'incident'
  | 'flagged_content'
  | 'system';

export interface FeedItem {
  id: string;
  type: FeedType;
  text: string;
  at: string; // ISO timestamp
}

const DOT: Record<FeedType, string> = {
  signup: 'var(--acc)',
  subscription: 'var(--acc)',
  refund: 'var(--warn)',
  incident: 'var(--warn)',
  flagged_content: 'var(--warn)',
  system: '#C9D2CC',
};

const BUFFER = 50;
const BACKOFF_BASE_MS = 1_000;
const BACKOFF_MAX_MS = 30_000;

export default function LiveFeed({ initial }: { initial: FeedItem[] }) {
  const [items, setItems] = useState<FeedItem[]>(() =>
    initial.slice(0, BUFFER),
  );
  const seen = useRef<Set<string>>(new Set(initial.map((i) => i.id)));

  // Re-render every 30s so relative timestamps stay fresh.
  const [, setTick] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTick((n) => n + 1), 30_000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    let es: EventSource | null = null;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let attempts = 0;
    let disposed = false;

    const connect = () => {
      if (disposed) return;
      es = new EventSource('/api/stream');
      es.onopen = () => {
        attempts = 0;
      };
      es.onmessage = (e) => {
        try {
          const ev = JSON.parse(e.data) as FeedItem;
          if (!ev?.id || !ev.type || seen.current.has(ev.id)) return;
          seen.current.add(ev.id);
          setItems((prev) => [ev, ...prev].slice(0, BUFFER));
        } catch {
          // malformed frame — ignore
        }
      };
      es.onerror = () => {
        es?.close();
        attempts += 1;
        const delay = Math.min(
          BACKOFF_MAX_MS,
          BACKOFF_BASE_MS * 2 ** Math.min(attempts - 1, 5),
        );
        timer = setTimeout(connect, delay);
      };
    };

    connect();
    return () => {
      disposed = true;
      es?.close();
      if (timer) clearTimeout(timer);
    };
  }, []);

  if (items.length === 0) {
    return (
      <div className={styles.feedEmpty}>
        Quiet right now — live events will appear here.
      </div>
    );
  }

  return (
    <div className={styles.feedList}>
      {items.map((ev) => (
        <div key={ev.id} className={styles.feedRow}>
          <div
            className={styles.feedDot}
            style={{ background: DOT[ev.type] ?? DOT.system }}
          />
          <div className={styles.feedText}>{ev.text}</div>
          <div className={styles.feedTime} suppressHydrationWarning>
            {relTime(new Date(ev.at))}
          </div>
        </div>
      ))}
    </div>
  );
}
