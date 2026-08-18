// APPLY ONE LESSON TO POSTGRES AND THEN TO THE SEED, bumping its version
// counter if the batch says the stored body differs under the same number.
//
// Driven by the UNIT rather than by a script stem, because a stem is not
// derivable from either: a1.03's data files are `genre-*.ts` and its batch is
// `author-noun-gender-batch.ts`. `_a2_label_plan.mjs` resolves all three.
//
// The order is Postgres first, seed second, always. A seed written from source
// while Postgres still holds the old body is the drift this project has lost
// work to twice, and the batch's own same-version-different-content guard is
// what catches it — so the bump is done here rather than by hand.
//
//   node scripts/_a2_label_apply.mjs a1.04 [a1.06 ...]

import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';

const run = (cmd, args) => {
  try { return { ok: true, out: execFileSync(cmd, args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], shell: true }) }; }
  catch (e) { return { ok: false, out: (e.stdout ?? '') + (e.stderr ?? '') }; }
};
const lastLine = (s) => s.split('\n').filter((l) => l.trim()).pop() ?? '';

for (const unit of process.argv.slice(2)) {
  const plan = JSON.parse(execFileSync('node', ['scripts/_a2_label_plan.mjs', unit], { encoding: 'utf8' }));
  const lessonFile = plan.data.find((f) => /-lesson\.ts$/.test(f)) ?? plan.data[0];
  const path = `scripts/data/${lessonFile}`;

  let a = run('npx', ['tsx', `scripts/${plan.batch}`, '--reapply']);
  let bumped = '';
  if (/DIFFERENT content|and this batch is v/.test(a.out)) {
    const src = readFileSync(path, 'utf8');
    const m = src.match(/^(\s*)version: (\d+),/m);
    if (m) {
      const next = Number(m[2]) + 1;
      writeFileSync(path, src.replace(/^(\s*)version: (\d+),/m, `$1version: ${next},`), 'utf8');
      bumped = ` v${m[2]}->v${next}`;
      a = run('npx', ['tsx', `scripts/${plan.batch}`, '--reapply']);
    }
  }
  if (!a.ok) { console.log(`${unit.padEnd(9)} APPLY  ${lastLine(a.out).slice(0, 78)}`); continue; }

  const g = run('npx', ['tsx', `scripts/${plan.merge}`]);
  if (!g.ok) { console.log(`${unit.padEnd(9)} MERGE  ${lastLine(g.out).slice(0, 78)}`); continue; }
  console.log(`${unit.padEnd(9)} ok${bumped}`);
}
