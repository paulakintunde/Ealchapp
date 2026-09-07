import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const CONTENT = 'ealch-v2/src/content';
const NOTE = ' The unit-label pass and other text-only edits do NOT move this: '
  + 'the runtime reads Lesson.version to decide whether to DISCARD a learner mission record and its XP, '
  + 'and that reset is only warranted when the SECTION LIST changes. Those bumps were withdrawn across 45 '
  + 'lessons and the edits they carried were kept. Corrections §16.7 supersedes §10 on this; check with '
  + '`pnpm content:versions`.';

const FIX = [
  ['a2-06-pronoms-direct.test.ts', 5, 3],
  ['a2-17-adverbes.test.ts', 5, 3],
  ['a2-19-futur-proche.test.ts', 5, 3],
  ['a2-20-participes.test.ts', 5, 3],
  ['a2-22-pronominaux.test.ts', 3, 2],
  ['a2-23-pronominaux-passe.test.ts', 3, 2],
  ['a2-25-y-en.test.ts', 4, 1],
];

for (const [f, from, to] of FIX) {
  const path = join(CONTENT, f);
  let s = readFileSync(path, 'utf8');
  const re = new RegExp(`(\\.version,\\s*)${from}(\\b)`);
  if (!re.test(s)) { console.log(`  MISS ${f}`); continue; }
  s = s.replace(re, `$1${to}$2`);
  // Append the reason to the assertion's message where there is one.
  const msgRe = new RegExp(`(\\.version,\\s*${to},\\s*\\n?\\s*'[^']*)'`);
  if (msgRe.test(s)) s = s.replace(msgRe, `$1.${NOTE}'`);
  writeFileSync(path, s, 'utf8');
  console.log(`  ${f}: v${from} -> v${to}`);
}
