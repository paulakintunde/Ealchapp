import { SAVOIR_CONNAITRE_LESSON as L } from './data/savoir-connaitre-lesson.ts';

const q = L.sections.find((s) => s.type === 'quiz') as unknown as {
  rounds: { id: string; questions: { q: string; format?: string; correct?: number | string; opts?: string[] }[] }[];
};
const tally = new Map<number, number>();
let n = 0;
for (const r of q.rounds) {
  for (const x of r.questions) {
    if (x.format !== 'mcq' && x.format !== 'listenChoose') continue;
    n += 1;
    const c = Number(x.correct);
    tally.set(c, (tally.get(c) ?? 0) + 1);
    console.log(`  ${c}  ${(x.opts ?? []).length}opts  ${r.id.padEnd(20)} ${JSON.stringify(x.q.slice(0, 68))}`);
  }
}
console.log(`\n  ${n} closed questions`);
for (const [k, v] of [...tally.entries()].sort()) console.log(`    position ${k}: ${v}  (${Math.round((v / n) * 100)}%)`);
