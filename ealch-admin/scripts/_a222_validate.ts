/* Validates data/pronominaux-corpus.ts through the REAL app functions, before
 * any of it reaches a lesson body or the database.
 *
 *     pnpm tsx scripts/_a222_validate.ts
 */
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { fold } from '../../ealch-v2/src/content/answer.logic.ts';
import {
  PRONOMINAUX, PARADIGM_IDS, STEM_IDS, DICTATION_IDS, HOMOPHONE_GROUPS,
  COMPOUND_CLUSTERS, PARTICIPLES, rowById, ID_BLOCK,
} from './data/pronominaux-corpus.ts';

let bad = 0;
const fail = (m: string) => { console.log(`  FAIL  ${m}`); bad += 1; };
const hr = (s: string) => console.log(`\n=== ${s} ===`);

hr(`rows: ${PRONOMINAUX.length}, block ${ID_BLOCK.from}..${ID_BLOCK.to}`);
const seenId = new Set<string>();
const seenFr = new Set<string>();
for (const r of PRONOMINAUX) {
  if (seenId.has(r.id)) fail(`duplicate id ${r.id}`);
  seenId.add(r.id);
  if (seenFr.has(r.fr)) fail(`duplicate fr « ${r.fr} »`);
  seenFr.add(r.fr);
  if (r.kind !== 'sentence') fail(`${r.id} is kind=${r.kind}; this build authors sentences only`);
  if (r.level !== 'a2') fail(`${r.id} is level=${r.level}`);
  if ((r as { gender?: string }).gender) fail(`${r.id} carries gender and would join a1.03's ending population`);
  if (!r.respell) fail(`${r.id} has no respelling`);
  if (!r.ipa) fail(`${r.id} has no ipa`);
  if (!r.drills.length) fail(`${r.id} is reachable by no drill`);
  if (/‿/u.test(r.respell ?? '')) fail(`${r.id} carries U+203F, which draws as an underscore on a Pixel 6`);
  if (/[—–]/u.test(`${r.fr} ${r.en} ${r.notes ?? ''}`)) fail(`${r.id} carries an em dash`);
  if (/\bhonest/i.test(`${r.en} ${r.notes ?? ''}`)) fail(`${r.id} carries a banned word`);
}
console.log(`  ${seenId.size} distinct ids, ${seenFr.size} distinct fr`);

hr('the nasal checker, over every authored respelling');
let flagged = 0;
for (const r of PRONOMINAUX) {
  if (hasPlainNasalFor(r.fr, r.respell!)) { flagged += 1; fail(`${r.id} « ${r.fr} » [${r.respell}] is FLAGGED`); }
}
console.log(`  ${PRONOMINAUX.length} respellings, ${flagged} flagged`);

hr('dicteeMode over every row, and the dictation drill must agree with it');
for (const r of PRONOMINAUX) {
  const mode = dicteeMode(r.fr);
  const letters = r.fr.replace(/[^A-Za-zÀ-ÿ]/gu, '').length;
  const carries = r.drills.includes('dictation');
  const mark = carries ? 'dictation' : '         ';
  console.log(`  ${mode === 'letters' ? 'LETTERS' : 'words  '} ${String(letters).padStart(2)} ${mark}  ${r.fr}`);
  if (carries && mode !== 'letters') {
    fail(`${r.id} carries a dictation drill and dicteeMode puts it in WORD mode, which hands every word over pre-spelled`);
  }
}
console.log(`  ${DICTATION_IDS.length} rows carry the dictation drill`);

hr('fold(): what a typed surface can and cannot tell apart');
const mustDiffer: [string, string][] = [
  ['Je me lave.', 'Je lave.'],
  ['Je me lave.', 'Tu te laves.'],
  ['Nous nous lavons.', 'Nous lavons.'],
  ['Je ne me lave pas.', 'Je me ne lave pas.'],
  ['Ils se lavent.', 'Ils se lave.'],
  ['Tu te laves.', 'Tu te lave.'],
];
for (const [a, b] of mustDiffer) {
  if (fold(a) === fold(b)) fail(`fold cannot separate « ${a} » from « ${b} », so no typed question may turn on it`);
}
const mustBeSame: [string, string][] = [['Je me lève tôt.', 'Je me leve tot.']];
for (const [a, b] of mustBeSame) {
  if (fold(a) !== fold(b)) {
    fail(`fold DOES separate « ${a} » from « ${b} ». The corpus header §1 claims it cannot; re-measure before trusting the header.`);
  }
}
console.log('  the pronoun, the ending and the ne position are all typeable; the accent on lève is not');

hr('no ear question may separate one sound');
for (const g of HOMOPHONE_GROUPS) {
  console.log(`  one sound: ${g.join('  ==  ')}`);
  if (g.length < 2) fail('a homophone group with fewer than two members guards nothing');
}

hr('no compound tense anywhere in the authored corpus');
for (const r of PRONOMINAUX) {
  const hay = ` ${r.fr.toLowerCase()} `;
  for (const c of COMPOUND_CLUSTERS) {
    if (hay.includes(c.toLowerCase())) fail(`${r.id} contains the compound cluster « ${c} », which is a2.23's`);
  }
  for (const p of PARTICIPLES) {
    if (new RegExp(`(?<![\\p{L}\\p{N}-])${p}(?![\\p{L}\\p{N}-])`, 'iu').test(r.fr)) {
      fail(`${r.id} contains the past participle « ${p} », which is a2.23's`);
    }
  }
}
console.log('  clean');

hr('the paradigm and the stem walk are complete and in order');
for (const [name, ids] of [['paradigm', PARADIGM_IDS], ['stem', STEM_IDS]] as const) {
  const persons = ids.map((i) => rowById(i).person).join(' ');
  console.log(`  ${name.padEnd(9)} ${persons}`);
  if (persons !== 'je tu il nous vous ils') fail(`${name} is not the six persons in learner order`);
}

console.log(bad === 0 ? '\n  ALL CLEAR\n' : `\n  ${bad} PROBLEM(S)\n`);
process.exit(bad === 0 ? 0 : 1);
