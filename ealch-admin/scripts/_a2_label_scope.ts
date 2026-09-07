// WHICH A2 LESSONS STILL PRINT A RAW UNIT ID ON A LEARNER SURFACE, and does
// each one have the source + batch + merge pair the a2.34 pilot used?
import seed from '../../ealch-v2/src/content/seed.json' with { type: 'json' };
import { readdirSync, readFileSync } from 'node:fs';

const CURRICULUM_KEYS = new Set(['grammarAssumed','grammarIntroduced','prereqUnitIds','id','lessonIds','unitId','itemId','itemIds','examples','slug']);
const learner = (v: unknown, out: string[] = []): string[] => {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => learner(x, out));
  else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) { if (!CURRICULUM_KEYS.has(k)) learner(x, out); }
  return out;
};
// SAME SHAPE AS THE SHIPPED GUARD. A trailing dot followed by a letter or a
// digit is part of a longer id — a lesson id like `a1.30.l2`, or an item id —
// and a trailing dot on its own is a full stop.
const idRx = /(?<![\p{L}\p{N}.])((?:a1|a2|b1|b2|c1|sons)\.\d{2})(?![\p{L}\p{N}])(?!\.[\p{L}\p{N}])/giu;
const seqRx = /(?<![\p{L}])seq\s+\d/iu;

const files = readdirSync('scripts');
const units = seed.units as { id: string; seq: number; lessonIds?: string[] }[];
const lessons = seed.lessons as { id: string; version: number }[];

let totalIds = 0, totalSeq = 0, dirty = 0;
const rows: string[] = [];
for (const u of units.filter((x) => x.id.startsWith('a2.')).sort((a,b)=>Number(a.seq)-Number(b.seq))) {
  for (const lid of u.lessonIds ?? []) {
    const L = lessons.find((l) => l.id === lid);
    if (!L) continue;
    const S = learner(L);
    const ids = S.flatMap((s) => [...s.matchAll(idRx)].map((m) => m[1]));
    const seqs = S.filter((s) => seqRx.test(s));
    if (!ids.length && !seqs.length) continue;
    dirty++; totalIds += ids.length; totalSeq += seqs.length;
    const stem = lid.replace(/^a2\.\d\d\./, '');
    const batch = files.filter((f) => /^author-.*-batch\.ts$/.test(f) && new RegExp(`\b${u.id.replace('.','\.')}\b`).test(readFileSync(`scripts/${f}`,'utf8').slice(0, 4000)));
    rows.push(`${String(u.seq).padStart(2)}  ${u.id}  v${L.version}  ids=${String(ids.length).padStart(3)}  seq=${String(seqs.length).padStart(2)}  batch=${batch[0] ?? 'NONE'}  cites=${[...new Set(ids)].join(',')}`);
  }
}
console.log(rows.join('\n'));
console.log(`\n${dirty} A2 lessons carry ${totalIds} raw ids and ${totalSeq} "seq N" strings on learner surfaces`);
