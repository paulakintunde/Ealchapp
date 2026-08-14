/* Where is a string on the learner surface? A one-off for diagnosing a guard. */
import { PREPOSITIONS_LIEU_LESSON as L } from './data/prepositions-lieu-lesson.ts';

const NEEDLE = process.argv[2] ?? 'preposition';
const MACHINE = new Set(['id', 'ref', 'sheetId', 'itemId', 'itemIds', 'targets', 'detectOn', 'drill', 'retest', 'accept', 'recordingId', 'audioRef', 'unitId', 'scenarioId', 'clipIds', 'buckets']);

function walk(v: unknown, path: string, out: [string, string][] = []): [string, string][] {
  if (typeof v === 'string') { out.push([path, v]); return out; }
  if (Array.isArray(v)) { v.forEach((x, i) => walk(x, `${path}[${i}]`, out)); return out; }
  if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) if (!MACHINE.has(k)) walk(x, `${path}.${k}`, out);
  }
  return out;
}

const all = [
  ...walk(L.sections, 'sections'),
  ...walk(L.sheets ?? [], 'sheets'),
  ...walk(L.terms ?? {}, 'terms'),
  ...walk(L.intro ?? '', 'intro'),
  ...walk(L.overview ?? {}, 'overview'),
  ...walk(L.acts ?? [], 'acts'),
  ...walk(L.drills ?? [], 'drills'),
];
for (const [p, s] of all) {
  if (s.toLowerCase().includes(NEEDLE.toLowerCase())) console.log(`${p}\n   ${s.slice(0, 300)}\n`);
}
