import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { BILAN_A2_LESSONS } from './data/bilan-a2-lesson.ts';

const seed = JSON.parse(readFileSync('../ealch-v2/src/content/seed.json', 'utf8'));
const h = (o: unknown) => createHash('md5').update(JSON.stringify(o)).digest('hex').slice(0, 12);

for (const src of BILAN_A2_LESSONS) {
  const inSeed = seed.lessons.find((l: { id: string }) => l.id === src.id);
  const same = h(src) === h(inSeed);
  console.log(`  ${src.id}  source v${src.version} / seed v${inSeed?.version}  bodies identical: ${same}`);
  if (!same) {
    // Name the first differing why, which is where the citation refactor lands.
    const sQ = (src.sections.find((s) => s.type === 'quiz') as { rounds?: { questions?: { why?: string }[] }[] })?.rounds ?? [];
    const dQ = (inSeed.sections.find((s: { type: string }) => s.type === 'quiz') as { rounds?: { questions?: { why?: string }[] }[] })?.rounds ?? [];
    outer: for (let i = 0; i < sQ.length; i++) {
      const a = sQ[i].questions ?? []; const b = dQ[i]?.questions ?? [];
      for (let j = 0; j < a.length; j++) {
        if (a[j].why !== b[j]?.why) {
          console.log(`    first difference, round ${i + 1} question ${j + 1}:`);
          console.log(`      source: ${a[j].why}`);
          console.log(`      seed  : ${b[j]?.why}`);
          break outer;
        }
      }
    }
  }
}
