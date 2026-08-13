/* Figures the a2.15 test writes out by hand, measured off the SEED so the test
 * and the source cannot agree with each other by construction. */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(join(here, '../../ealch-v2/src/content/seed.json'), 'utf8')) as {
  version: number; items: { id: string; fr: string; respell?: string; drills?: string[] }[];
  lessons: Record<string, unknown>[]; units: Record<string, unknown>[];
};
const L = seed.lessons.find((l) => l.id === 'a2.15.l1') as Record<string, unknown>;

function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) strings(x, out);
  else if (v && typeof v === 'object') for (const x of Object.values(v)) strings(x, out);
  return out;
}
const MACHINE = new Set(['id', 'ref', 'sheetId', 'itemId', 'itemIds', 'targets', 'detectOn', 'drill', 'retest', 'accept', 'recordingId', 'audioRef', 'unitId', 'scenarioId']);
function display(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) display(x, out);
  else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) if (!MACHINE.has(k)) display(x, out);
  return out;
}
const count = (hay: string, q: string) => { let n = 0, i = 0; const h = hay.toLowerCase(); const s = q.toLowerCase(); while ((i = h.indexOf(s, i)) !== -1) { n++; i += s.length; } return n; };

const REFRAME = 'Cover the front of the verb. Build what is left.';
const secs = L.sections as Record<string, unknown>[];

console.log(`seed version ${seed.version}, ${seed.items.length} items, ${seed.lessons.length} lessons`);
console.log(`REFRAME_APPEARANCES (all strings) = ${count(strings(L).join('\n'), REFRAME)}`);
console.log(`REFRAME_SECTIONS = ${secs.filter((s) => strings(s).some((x) => x.includes(REFRAME))).length}`);
console.log(`ITEMS = ${(L.itemIds as string[]).length}`);

const mine = seed.items.filter((i) => i.id >= 'fr.a2.verbes.421' && i.id <= 'fr.a2.verbes.454');
console.log(`AUTHORED in range = ${mine.length}`);
let sup = 0; const blind: string[] = [];
for (const r of mine) {
  const re = r.respell ?? '';
  for (let i = 0; i < re.length; i += 1) {
    if (re[i] !== 'ⁿ') continue;
    sup += 1;
    if (!hasPlainNasalFor(r.fr, re.slice(0, i) + 'n' + re.slice(i + 1))) blind.push(`${r.id} [${re.slice(0, i)}n${re.slice(i + 1)}]`);
  }
}
console.log(`SUPERSCRIPTS = ${sup}, BLIND = ${blind.length}`);
for (const b of blind) console.log(`  ${b}`);
console.log(`WITH_SUPERSCRIPT rows = ${mine.filter((r) => (r.respell ?? '').includes('ⁿ')).length}`);

let gd = 0, gdItems = 0;
for (const s of secs) {
  if (s.type !== 'groupDrill') continue;
  gd += 1;
  for (const g of ((s.groups ?? []) as { items?: unknown[] }[])) gdItems += (g.items ?? []).length;
}
console.log(`GROUPDRILLS = ${gd}, GROUPDRILL_ITEMS = ${gdItems}`);
console.log(`TITLES longest = ${Math.max(...secs.map((s) => String(s.title ?? '').length))}`);
console.log(`display-walk honest hits = ${display(L).filter((s) => /honest/i.test(s)).length}`);
console.log(`repairs in seed:`);
for (const id of ['fr.sons.verbes-essentiels.012', 'fr.a2.disciplines.051', 'fr.sons.verbes-essentiels.030', 'fr.sons.verbes-essentiels.225', 'fr.a1.transports-quotidiens.041']) {
  const r = seed.items.find((x) => x.id === id);
  console.log(`  ${id.padEnd(34)} ${r ? JSON.stringify(r.respell) : 'ABSENT'}  drills=${JSON.stringify(r?.drills)}`);
}
