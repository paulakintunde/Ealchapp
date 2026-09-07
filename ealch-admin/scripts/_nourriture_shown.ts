import { NOURRITURE_LESSON as L, NOURRITURE_ITEM_IDS, NOURRITURE_TRANCHES } from './data/nourriture-lesson.ts';
import { readFileSync } from 'node:fs';
const seed = JSON.parse(readFileSync(new URL('../../ealch-v2/src/content/seed.json', import.meta.url), 'utf8'));
const item = (id: string) => seed.items.find((i: any) => i.id === id);
const strings = (v: unknown, out: string[] = []): string[] => {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, out));
  return out;
};
const sec = (id: string) => L.sections.find((s: any) => s.id === id);
// earliest act that shows each id
const firstAct = new Map<string, number>();
for (const [i, a] of (L.acts ?? []).entries()) {
  const shown = new Set(strings(a.sections.map(sec)));
  for (const id of NOURRITURE_ITEM_IDS) {
    if (firstAct.has(id)) continue;
    const row = item(id);
    if (row && (shown.has(row.fr) || shown.has(id))) firstAct.set(id, i + 1);
  }
}
const releasedIn = new Map<string, number>();
for (const [i, t] of NOURRITURE_TRANCHES.entries()) for (const id of t) releasedIn.set(id, i + 1);

console.log('MISMATCHES (released before first shown, or never shown):');
let bad = 0;
for (const id of NOURRITURE_ITEM_IDS) {
  const shownAt = firstAct.get(id);
  const rel = releasedIn.get(id);
  if (shownAt === undefined) { console.log(`  NEVER SHOWN  ${id.padEnd(30)} "${item(id)?.fr}"  released act ${rel ?? '-'}`); bad++; continue; }
  if (rel !== undefined && rel < shownAt) { console.log(`  EARLY        ${id.padEnd(30)} "${item(id)?.fr}"  shown act ${shownAt}, released act ${rel}`); bad++; }
}
console.log(bad ? `\n${bad} problem(s)` : '\nevery released item is shown by its act');
console.log('\nfirst-shown act for the like/eat sentences:');
for (const id of NOURRITURE_ITEM_IDS.filter((i) => !i.includes('cuisine.2') || Number(i.split('.').pop()) < 272)) {
  const row = item(id);
  if (!row || row.kind !== 'sentence') continue;
  console.log(`  act ${firstAct.get(id) ?? '-'}  released ${releasedIn.get(id) ?? '-'}  ${id.padEnd(28)} "${row.fr}"`);
}
