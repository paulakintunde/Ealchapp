import { readFileSync } from 'node:fs';
const p = new URL('../../ealch-v2/src/content/seed.json', import.meta.url);
const raw = readFileSync(p, 'utf8');
const s = JSON.parse(raw);
console.log('canonical formatting:', raw === JSON.stringify(s, null, 2) + '\n' ? 'YES' : 'NO');
console.log('version', s.version, '| items', s.items.length, '| lessons', s.lessons.length);
const L = s.lessons.find((l: any) => l.id === 'a1.23.l1');
console.log('a1.23.l1:', L ? `present, ${L.sections.length} sections, v${L.version}` : 'MISSING');
const u = s.units.find((x: any) => x.id === 'a1.23');
console.log('unit a1.23 themes', JSON.stringify(u.themes), 'lessonIds', JSON.stringify(u.lessonIds));
for (const id of ['fr.a1.cuisine.272','fr.a1.cuisine.273','fr.a1.cuisine.274','fr.a1.au-restaurant.081']) {
  const it = s.items.find((i: any) => i.id === id);
  console.log(' ', id.padEnd(28), it ? `"${it.fr}" ${it.respell}` : 'MISSING');
}
const pain = s.items.find((i: any) => i.id === 'fr.a1.cuisine.002');
const creme = s.items.find((i: any) => i.id === 'fr.a1.cuisine.055');
console.log('  le pain respell  ', pain.respell, '(repaired)');
console.log('  la crème respell ', creme.respell, '(deliberately NOT repaired)');
