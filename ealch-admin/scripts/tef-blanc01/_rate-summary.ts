// Per-block measured rate, and the speed multiplier each block would need.
// Scratch reporting tool; the durable check is check-speech-rate.ts.
import './../env';
import { spokenTranscript } from '../../../ealch-v2/src/utils/coPlayback.logic.ts';

const TARGET: Record<string, number> = { A: 120, B: 140, C: 160, D: 160, E: 160, F: 175, G: 140 };

async function main() {
  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();
  try {
    const rows = await client.query<{ label: string | null; parts: { text?: string; durationS?: number }[] }>(
      `select label, parts from content_exam_tasks
        where variant='blanc-01' and format='tef_canada' and skill='CO' order by id`
    );
    const agg: Record<string, { w: number; s: number; n: number }> = {};
    for (const r of rows.rows) {
      const b = (r.label ?? '').replace(/^Section\s+/i, '').trim()[0] ?? '?';
      for (const p of r.parts ?? []) {
        if (!p.text || !p.durationS) continue;
        const w = spokenTranscript(p.text).split(/\s+/).filter(Boolean).length;
        agg[b] ??= { w: 0, s: 0, n: 0 };
        agg[b]!.w += w;
        agg[b]!.s += p.durationS;
        agg[b]!.n += 1;
      }
    }
    for (const b of Object.keys(agg).sort()) {
      const { w, s, n } = agg[b]!;
      const wpm = Math.round((w / s) * 60);
      const target = TARGET[b] ?? 140;
      const speed = +(target / wpm).toFixed(2);
      const need = Math.abs(wpm - target) / target > 0.12;
      console.log(
        `  ${b}  ${String(n).padStart(2)} docs   measured ${String(wpm).padStart(3)} wpm   ` +
        `target ${String(target).padStart(3)}   → speed ${speed.toFixed(2)}${need ? '  ←' : ''}`
      );
    }
  } finally {
    client.release();
    await pool.end();
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
