// Mutation harness for a2-35-bilan.test.ts.
//
// Each mutation is a surgical edit to a COPY of seed.json, applied in place,
// with the test run against it and the original restored byte for byte
// afterwards. An assertion that cannot fail is worse than no assertion, and the
// measured rate across this band is that two mutations in a dozen find a
// weakness rather than confirming a strength.
//
//   node scripts/_a235_mutate.mjs

import { readFileSync, writeFileSync, copyFileSync, statSync } from 'node:fs';
import { execSync } from 'node:child_process';

const SEED = '../ealch-v2/src/content/seed.json';
const BACKUP = '../ealch-v2/src/content/seed.json.mutation-backup';

copyFileSync(SEED, BACKUP);
const ORIGINAL = readFileSync(BACKUP, 'utf8');

const L1 = (s) => s.lessons.find((l) => l.id === 'a2.35.l1');
const L2 = (s) => s.lessons.find((l) => l.id === 'a2.35.l2');
const quiz = (l) => l.sections.find((x) => x.type === 'quiz');

const MUTATIONS = [
  ['drop the round for a2.20', (s) => {
    const q = quiz(L1(s));
    q.rounds = q.rounds.filter((r) => !r.id.startsWith('r17-a2-20'));
  }],
  ['give a2.05 two rounds and a2.20 none', (s) => {
    const q = quiz(L1(s));
    const r = q.rounds.find((x) => x.id.startsWith('r17-a2-20'));
    r.id = 'r17-a2-05-second';
  }],
  ['swap two rounds out of seq order', (s) => {
    const q = quiz(L1(s));
    [q.rounds[3], q.rounds[4]] = [q.rounds[4], q.rounds[3]];
  }],
  ['let an exam round name its unit', (s) => {
    quiz(L2(s)).rounds[3].label = 'Unit 16, what you did';
  }],
  ['let an exam round name a unit by id', (s) => {
    quiz(L2(s)).rounds[5].say = 'Everything here comes from a2.21.';
  }],
  ['offer parle against parlent in an ear question', (s) => {
    const q = quiz(L1(s)).rounds[0].questions[2];
    q.opts = ['Je parle français.', 'Je parlent français.', 'Nous parlons français.', 'Vous parlez français.'];
    q.correct = 2;
  }],
  ['turn thirty typeIn questions into mcq', (s) => {
    let n = 0;
    for (const r of quiz(L1(s)).rounds) {
      for (const q of r.questions) {
        if (q.format === 'typeIn' && n < 30) {
          q.format = 'mcq'; q.opts = ['a', 'b', 'c', 'd']; q.correct = 0;
          delete q.accept; delete q.answer; n++;
        }
      }
    }
  }],
  ['drop one why', (s) => { delete quiz(L1(s)).rounds[10].questions[2].why; }],
  ['add a second quiz section to the review', (s) => {
    const l = L1(s);
    l.sections.push({ ...JSON.parse(JSON.stringify(quiz(l))), id: 's06-quiz2' });
  }],
  ['put the review into exam mode', (s) => { quiz(L1(s)).exam = true; }],
  ['put a grammar word in the intro', (s) => {
    L1(s).intro = `${L1(s).intro} The past participle is the second word.`;
  }],
  ['give a round two targets', (s) => {
    quiz(L1(s)).rounds[6].targets = ['err-tense', 'err-conjugation'];
  }],
  ['let the capstone claim a corpus row', (s) => { L1(s).itemIds = ['fr.a2.verbes.001']; }],
  ['take the clip off an ear question', (s) => {
    delete quiz(L1(s)).rounds[2].questions[1].audio;
  }],
  ['make an errorSpot correction invisible to fold', (s) => {
    const r = quiz(L1(s)).rounds[1].questions[4];
    r.prompt = 'Nous mangeons a midi.';
    r.answer = 'Nous mangeons à midi.';
    r.accept = ['Nous mangeons à midi'];
  }],
  ['ask for a conditional form', (s) => {
    quiz(L2(s)).rounds[0].questions[1].answer = 'Je dormirais mieux ici.';
    quiz(L2(s)).rounds[0].questions[1].accept = ['Je dormirais mieux ici'];
  }],
  ['drop the assessment flag', (s) => { L2(s).features = []; }],
  ['let a review round stop naming its unit', (s) => {
    quiz(L1(s)).rounds[8].label = 'Prendre, mettre and battre';
  }],
];

const results = [];
for (const [name, mutate] of MUTATIONS) {
  const s = JSON.parse(ORIGINAL);
  mutate(s);
  writeFileSync(SEED, `${JSON.stringify(s, null, 2)}\n`, 'utf8');
  let red = false;
  let firstFailure = '';
  try {
    execSync('node --test "src/content/a2-35-bilan.test.ts"', {
      cwd: '../ealch-v2', stdio: 'pipe', encoding: 'utf8',
    });
  } catch (e) {
    red = true;
    const out = `${e.stdout ?? ''}`;
    firstFailure = (out.match(/not ok \d+ - (.+)/) ?? [])[1] ?? '';
  }
  results.push([name, red, firstFailure]);
  console.log(`${red ? 'RED  ' : 'GREEN'}  ${name}${red ? `   -> ${firstFailure}` : '   <-- ASSERTION GAP'}`);
}

writeFileSync(SEED, ORIGINAL, 'utf8');
const restored = readFileSync(SEED, 'utf8');
console.log(`\nrestored byte for byte: ${restored === ORIGINAL}  (${statSync(SEED).size} bytes)`);
const gaps = results.filter(([, red]) => !red);
console.log(`\n${results.length - gaps.length} of ${results.length} mutations went red.`);
if (gaps.length) console.log(`GAPS: ${gaps.map(([n]) => n).join(' | ')}`);
