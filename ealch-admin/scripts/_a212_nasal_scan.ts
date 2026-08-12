/* One-off measurement for the a2.12 build report: how many rows in seed.json the
 * shared nasal checker flags, and how many of them are this build's business. */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import type { Item } from '../../ealch-v2/src/content/schema.ts';

const here = dirname(fileURLToPath(import.meta.url));
const s = JSON.parse(readFileSync(join(here, '../../ealch-v2/src/content/seed.json'), 'utf8')) as { items: Item[] };
const flagged = s.items.filter((i) => i.respell && hasPlainNasalFor(i.fr, i.respell));
console.log('rows in seed.json the shared checker flags:', flagged.length, 'of', s.items.length);
const tion = flagged.filter((i) => /SYOHN(?![A-Za-z])/.test(i.respell!));
console.log('  of which the -tion shape (SYOHN):', tion.length);
console.log('  of which this lesson authored:', flagged.filter((i) => i.id >= 'fr.a2.verbes.301' && i.id <= 'fr.a2.verbes.340').length);
console.log('  of which this lesson carried:', flagged.filter((i) => ['fr.a1.sports-et-loisirs.073', 'fr.a1.animaux-domestiques.123'].includes(i.id)).length);
for (const id of ['fr.a1.sports-et-loisirs.073', 'fr.a1.animaux-domestiques.123', 'fr.a1.routines.050']) {
  const r = s.items.find((x) => x.id === id);
  console.log(`  ${id.padEnd(32)} ${r ? `${JSON.stringify(r.respell ?? null)} flagged=${hasPlainNasalFor(r.fr, r.respell ?? '')}` : 'not in the seed'}`);
}
console.log('  a sample of the rest:', tion.slice(0, 5).map((i) => `${i.id} ${i.respell}`).join(' | '));
