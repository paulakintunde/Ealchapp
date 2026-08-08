/* The batch's jargon guard fired on "partitive", correctly.
 *
 * It is the precise word and it is grammar vocabulary, which the house rule
 * keeps off learner surfaces. Everywhere else this lesson says "the little word
 * in front", which is the phrasing a1.03, a1.04 and a1.29 all use on their own
 * cards, so these six were an inconsistency rather than a considered choice.
 *
 * `grammarIntroduced` is addressed to the curriculum and may use the precise
 * words. It does not mention this one, so nothing there needs changing.
 */
import { readFileSync, writeFileSync } from 'node:fs';

const p = 'scripts/data/bilan-lesson.ts';
let t = readFileSync(p, 'utf8');

const EDITS = [
  ['the gender lesson, the indefinite lesson and the partitive lesson each handed you',
    'The three article lessons each handed you'],
  ["'The colours', 'The numbers', 'The greetings', 'The partitive articles'",
    "'The colours', 'The numbers', 'The greetings', 'The one for some of something'"],
  ['why: \'The partitive. Food is where that lesson finally pays:',
    "why: 'The one for some of something. Food is where that lesson finally pays:"],
  ["'The currency, and often a partitive before the thing'",
    "'The currency, and often a little word before the thing'"],
  ["why: 'The partitive. This is where that lesson finally pays:",
    "why: 'The one for some of something. This is where that lesson finally pays:"],
  ['most often the definite where the partitive was needed',
    'most often the one for a known thing where the one for some of it was needed'],
  ["why: 'The partitive. It is the article you will use most often",
    "why: 'The one for some of something. It is the little word you will use most often"],
];

let n = 0;
for (const [find, rep] of EDITS) {
  // The first edit is capitalised mid-sentence in the source, so match loosely.
  const target = t.includes(find) ? find : find.charAt(0).toUpperCase() + find.slice(1);
  if (!t.includes(target)) { console.error(`  ! not found: ${find.slice(0, 60)}`); continue; }
  t = t.replace(target, rep);
  n++;
}

writeFileSync(p, t);
const left = (t.match(/partitive/gi) || []).length;
console.log(`replaced ${n} occurrences, ${left} left in the file`);
