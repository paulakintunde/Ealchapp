// ONE LESSON THROUGH THE UNIT-LABEL MIGRATION, SOURCE FIRST.
//
//   node scripts/_a2_label_run.mjs a2.13 --step=codemod   edit the source
//   node scripts/_a2_label_run.mjs a2.13 --step=dry       run its own guards
//   node scripts/_a2_label_run.mjs a2.13 --step=apply     Postgres, then seed
//   node scripts/_a2_label_run.mjs a2.13 --step=test      its guard test
//
// The steps are separate on purpose. `dry` is where a lesson's own guards fire,
// and every one of those is a judgement call: a card that now runs over the
// 45-word cap because a label is longer than an id has to be TRIMMED, not
// exempted, and a guard that asserted `hasWord(text, 'a2.16')` has to be
// pointed at the label rather than deleted.

import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';

const [unit, ...rest] = process.argv.slice(2);
const step = (rest.find((a) => a.startsWith('--step=')) ?? '--step=dry').split('=')[1];

const plan = JSON.parse(execFileSync('node', ['scripts/_a2_label_plan.mjs', unit], { encoding: 'utf8' }));
const run = (cmd, args) => {
  try { return { ok: true, out: execFileSync(cmd, args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }) }; }
  catch (e) { return { ok: false, out: (e.stdout ?? '') + (e.stderr ?? '') }; }
};

if (step === 'codemod') {
  const files = plan.data.map((f) => `scripts/data/${f}`);
  // TWO PASSES, because they see different shapes. The codemod rewrites
  // `${X_UNIT}` and whole quoted strings; the second finds ids typed straight
  // into the literal text of a template, which the first must skip because
  // pairing apostrophes across a template corrupts it.
  console.log(run('node', ['scripts/_a2_label_codemod.mjs', ...files, '--write']).out);
  console.log(run('node', ['scripts/_a2_label_intpl.mjs', ...files, '--write']).out);
} else if (step === 'dry') {
  const r = run('npx', ['tsx', `scripts/${plan.batch}`, '--dry']);
  console.log(r.out.split('\n').slice(-14).join('\n'));
} else if (step === 'apply') {
  // THE VERSION BUMP IS PART OF APPLYING, not of editing. A lesson whose body
  // changed and whose version did not is a lesson the device will not refetch.
  const lessonFile = plan.data.find((f) => /-lesson\.ts$/.test(f)) ?? plan.data[0];
  const p = `scripts/data/${lessonFile}`;
  const s = readFileSync(p, 'utf8');
  const m = s.match(/^(\s*)version: (\d+),/m);
  if (!m) { console.error(`no version field in ${lessonFile}`); process.exit(2); }
  const next = Number(m[2]) + 1;
  writeFileSync(p, s.replace(/^(\s*)version: (\d+),/m, `$1version: ${next},`), 'utf8');
  console.log(`  ${unit}: v${m[2]} -> v${next}`);

  const a = run('npx', ['tsx', `scripts/${plan.batch}`, '--reapply']);
  if (!a.ok) { console.log(a.out.split('\n').slice(-12).join('\n')); process.exit(3); }
  console.log(a.out.split('\n').filter((l) => /applied|lessonIds|rows written/.test(l)).join('\n'));

  const g = run('npx', ['tsx', `scripts/${plan.merge}`]);
  if (!g.ok) { console.log(g.out.split('\n').slice(-12).join('\n')); process.exit(4); }
  console.log(g.out.split('\n').filter((l) => /items:|lessons:/.test(l)).join('\n'));
  console.log(`  NEXT: node scripts/_a2_label_run.mjs ${unit} --step=test --version=${next}`);
} else if (step === 'test') {
  const v = rest.find((a) => a.startsWith('--version='));
  const files = plan.tests.map((f) => `../ealch-v2/src/content/${f}`);
  console.log(run('node', ['scripts/_a2_label_testfix.mjs', ...files, ...(v ? [v] : []), '--write']).out);
  process.chdir('../ealch-v2');
  const t2 = run('node', ['--test', ...plan.tests.map((f) => `src/content/${f}`)]);
  console.log(t2.out.split('\n').filter((l) => /^✖|ℹ (tests|pass|fail)/.test(l)).slice(0, 12).join('\n'));
} else {
  console.error(`unknown step ${step}`);
  process.exit(1);
}
