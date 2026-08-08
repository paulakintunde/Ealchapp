/* Second pass on bilan-lesson.ts.
 *
 * The first validator run reported 32 of 50 quiz questions as mcq, over the
 * half limit, and 41% of correct answers sitting in slot 1.
 *
 * Both are fixed the same way and it is not a fudge: seven questions whose
 * correct answer is a FRENCH PHRASE are better as `typeIn` than as `mcq`
 * anyway. Picking a phrase off a list of four proves recognition; typing it
 * proves production, which is what a capstone is for. Converting them drops the
 * mcq count to 25 and removes seven questions from the closed pool, and because
 * the ones converted were disproportionately in slot 1, the clustering goes with
 * them.
 *
 * Anything still over after that is rebalanced mechanically by moving the
 * correct option to a less-used slot. Safe, because QuizDeckView shuffles the
 * options of every closed question per attempt: the authored index is invisible
 * to a learner and the cap is authoring hygiene.
 */
import { readFileSync, writeFileSync } from 'node:fs';

const p = 'scripts/data/bilan-lesson.ts';
let t = readFileSync(p, 'utf8');

/** [find, replace] — each converts one mcq into a typeIn on the same answer. */
const CONVERSIONS = [
  [
    `format: 'mcq', opts: [frOf(K.okay), frOf(K.dontUnderstand), frOf(K.thereYouGo), frOf(K.welcome)], correct: 1,`,
    `format: 'typeIn', accept: [frOf(K.dontUnderstand), 'je ne comprends pas'], answer: frOf(K.dontUnderstand),`,
  ],
  [
    `format: 'mcq', opts: [frOf(K.repeat), frOf(K.slower), frOf(K.moment), frOf(K.sorry)], correct: 1,`,
    `format: 'typeIn', accept: [frOf(K.slower), 'plus lentement, s\\'il vous plaît.', 'plus lentement'], answer: frOf(K.slower),`,
  ],
  [
    `format: 'mcq', opts: [top('a1.29').fr, top('a1.03').fr, top('a1.11').fr], correct: 2,`,
    `format: 'typeIn', accept: [top('a1.11').fr, 'un cafe'], answer: top('a1.11').fr,`,
  ],
  [
    `format: 'mcq', opts: [top('a1.29').fr, top('a1.11').fr, top('a1.03').fr], correct: 0,`,
    `format: 'typeIn', accept: [top('a1.29').fr, 'du cafe'], answer: top('a1.29').fr,`,
  ],
  [
    `format: 'mcq', opts: [frOf(K.repeat), frOf(K.slower), frOf(K.dontUnderstand), frOf(K.welcome)], correct: 3,`,
    `format: 'typeIn', accept: [frOf(K.welcome), 'de rien'], answer: frOf(K.welcome),`,
  ],
  [
    `format: 'mcq', opts: [frOf(K.dontUnderstand), frOf(K.moment), frOf(K.welcome), frOf(K.slower)], correct: 2,`,
    `format: 'typeIn', accept: [frOf(K.welcome), 'de rien'], answer: frOf(K.welcome),`,
  ],
  [
    `format: 'mcq', opts: [frOf(K.okay), frOf(K.slower), frOf(K.welcome), frOf(K.thereYouGo)], correct: 1,`,
    `format: 'typeIn', accept: [frOf(K.slower), 'plus lentement'], answer: frOf(K.slower),`,
  ],
];

let converted = 0;
for (const [find, rep] of CONVERSIONS) {
  if (!t.includes(find)) { console.error(`  ! pattern not found, skipping:\n    ${find.slice(0, 78)}`); continue; }
  t = t.replace(find, rep);
  converted++;
}

writeFileSync(p, t);
console.log(`converted ${converted} mcq questions to typeIn`);
