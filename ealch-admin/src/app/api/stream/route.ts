// SSE endpoint — streams live bus events to the client. Replays the ring
// buffer on connect (oldest → newest so clients can prepend as they arrive),
// then forwards every published event. Heartbeat comment every 25s keeps
// proxies from closing the idle connection.
import type { NextRequest } from 'next/server';
import { recent, subscribe, type LiveEvent } from '@/lib/bus';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const HEARTBEAT_MS = 25_000;

export async function GET(req: NextRequest) {
  const encoder = new TextEncoder();
  let cleanup: (() => void) | undefined;

  const stream = new ReadableStream<Uint8Array>({
    start(controller) {
      let closed = false;
      const write = (chunk: string) => {
        if (closed) return;
        try {
          controller.enqueue(encoder.encode(chunk));
        } catch {
          closed = true;
        }
      };
      const send = (ev: LiveEvent) => write(`data: ${JSON.stringify(ev)}\n\n`);

      // Initial comment — flushes headers so clients connect immediately
      // even when the ring buffer is empty.
      write(`: connected\n\n`);

      // Replay buffered events, oldest first.
      for (const ev of [...recent()].reverse()) send(ev);

      const unsubscribe = subscribe(send);
      const heartbeat = setInterval(() => write(`: hb\n\n`), HEARTBEAT_MS);

      cleanup = () => {
        if (closed) return;
        closed = true;
        unsubscribe();
        clearInterval(heartbeat);
        try {
          controller.close();
        } catch {
          // already closed
        }
      };
      req.signal.addEventListener('abort', () => cleanup?.());
    },
    cancel() {
      cleanup?.();
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      Connection: 'keep-alive',
      'X-Accel-Buffering': 'no',
    },
  });
}
