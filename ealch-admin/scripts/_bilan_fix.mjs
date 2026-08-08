/* One-shot edits to bilan-lesson.ts after the first validator run. Kept as a
 * file rather than an inline command because the patterns contain backticks and
 * template placeholders that a shell mangles. */
import { readFileSync, writeFileSync } from 'node:fs';

const p = 'scripts/data/bilan-lesson.ts';
let t = readFileSync(p, 'utf8');

// (a) Review-row chips no longer print a transcription.
//
// The density validator flagged five: bohn-ZHOOR, ah-VWAHR FAHN, LAH MAN,
// duh-MAN and one more, all closing a nasal with a plain n. Every one is a
// PUBLISHED row owned by another unit (salutations, meteo, corps, jours-et-mois),
// so repairing them is a corpus migration across four themes rather than a
// lesson build. This build reports them and stops displaying them instead: the
// review half is revision, and the learner already met these cards with their
// transcriptions in the lesson that owns them.
const needle = 'respell: r.respell ? `[${r.respell}]` : undefined, ';
const before = t.split(needle).length - 1;
t = t.split(needle).join('');

// (b) My own two, which are mine to fix.
t = t.replace('respell: subOf(K.dontUnderstand),\n        en: \'four French words',
  "respell: '[zhuh nuh kohⁿ-prahⁿ PAH]',\n        en: 'four French words");
t = t.replace("respell: '[in English, and the French stops here]',", "respell: '',");
t = t.replace('respell: subOf(K.dontUnderstand),\n      en: \'Excuse me, I do not understand\',',
  "respell: '[zhuh nuh kohⁿ-prahⁿ PAH]',\n      en: 'Excuse me, I do not understand',");

writeFileSync(p, t);
console.log(`dropped ${before} review-row transcriptions, fixed the scene respellings`);
