/* How many groupDrill items in a2.13 pass `respell` and `en` to a renderer that
 * draws neither. schema.ts:899 says those two are XL-only lines; every
 * groupDrill in this lesson is `lg`, where MissionRich.tsx:439 draws fr, ipa
 * and note and nothing else. Found on a Pixel 6. */
import './env';
import { MODAUX_LESSON } from './data/modaux-lesson.ts';
const L = MODAUX_LESSON;
let sections = 0, items = 0, withRespell = 0, withEn = 0, withNote = 0, withIpa = 0;
for (const s of L.sections) {
  if (s.type !== 'groupDrill') continue;
  sections++;
  const size = (s as { size?: string }).size ?? '(none)';
  const gs = (s as { groups?: { items?: Record<string, unknown>[] }[] }).groups ?? [];
  const n = gs.reduce((a, g) => a + (g.items?.length ?? 0), 0);
  console.log(`  ${String((s as { id?: string }).id).padEnd(16)} size=${size.padEnd(6)} ${gs.length} group(s), ${n} item(s)`);
  for (const g of gs) for (const it of g.items ?? []) {
    items++;
    if (it.respell) withRespell++;
    if (it.en) withEn++;
    if (it.note) withNote++;
    if (it.ipa) withIpa++;
  }
}
console.log(`\n  ${sections} groupDrill sections, ${items} item cards`);
console.log(`  carry respell : ${withRespell}  <- DROPPED at lg`);
console.log(`  carry en      : ${withEn}  <- DROPPED at lg`);
console.log(`  carry ipa     : ${withIpa}  <- would render`);
console.log(`  carry note    : ${withNote}  <- would render`);
