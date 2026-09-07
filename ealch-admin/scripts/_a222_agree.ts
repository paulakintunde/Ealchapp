/* Do the seed and the source hold the same body? The mutation harness restores
 * from a backup and a restore that silently dropped a byte would look exactly
 * like a clean run. */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { canonicalJson } from '../../ealch-v2/src/content/schema.ts';
import { LESSON } from './data/pronominaux-lesson.ts';
const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(join(here, '../../ealch-v2/src/content/seed.json'), 'utf8'));
const inSeed = seed.lessons.find((l: { id: string }) => l.id === 'a2.22.l1');
console.log('seed items', seed.items.length, 'lessons', seed.lessons.length, 'version', seed.version);
console.log('a2.22 rows in seed:', seed.items.filter((i: { id: string }) => /^fr\.a2\.verbes\.7(2[1-9]|3\d|4\d|5[01])$/.test(i.id)).length);
console.log(canonicalJson(inSeed) === canonicalJson(LESSON)
  ? 'the seed body and the source body are IDENTICAL'
  : 'DIVERGED: the seed body is not the source body');
process.exit(canonicalJson(inSeed) === canonicalJson(LESSON) ? 0 : 1);
