// In-process live-event bus — global singleton shared by route handlers,
// server actions and the background workers (all run in the same Node
// process). Server-side only BY CONVENTION: no 'server-only' import because
// src/lib/workers.ts (started from instrumentation) imports it too.
// Do NOT import this from client components.

export type LiveEventType =
  | 'signup'
  | 'subscription'
  | 'refund'
  | 'incident'
  | 'flagged_content'
  | 'system';

export interface LiveEvent {
  id: string;
  type: LiveEventType;
  text: string;
  at: string; // ISO timestamp
}

type Listener = (ev: LiveEvent) => void;

interface Bus {
  buffer: LiveEvent[]; // newest first, max 50
  listeners: Set<Listener>;
}

const RING_SIZE = 50;

const g = globalThis as typeof globalThis & { __ealchBus?: Bus };

function bus(): Bus {
  if (!g.__ealchBus) g.__ealchBus = { buffer: [], listeners: new Set() };
  return g.__ealchBus;
}

/** Publish an event to all live subscribers and the replay ring buffer. */
export function publish(ev: {
  type: LiveEventType;
  text: string;
  id?: string;
  at?: string;
}): LiveEvent {
  const full: LiveEvent = {
    id: ev.id ?? crypto.randomUUID(),
    type: ev.type,
    text: ev.text,
    at: ev.at ?? new Date().toISOString(),
  };
  const b = bus();
  b.buffer.unshift(full);
  if (b.buffer.length > RING_SIZE) b.buffer.length = RING_SIZE;
  for (const fn of [...b.listeners]) {
    try {
      fn(full);
    } catch {
      // a broken subscriber must never take down publishers
    }
  }
  return full;
}

/** Subscribe to future events. Returns an unsubscribe function. */
export function subscribe(fn: Listener): () => void {
  const b = bus();
  b.listeners.add(fn);
  return () => {
    b.listeners.delete(fn);
  };
}

/** Last 50 events, newest first. */
export function recent(): LiveEvent[] {
  return [...bus().buffer];
}
