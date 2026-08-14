/* Runs the authored a2.04 rows through the REAL dicteeMode and the REAL
 * hasPlainNasalFor before a line of the lesson is written, and re-checks every
 * repair's three values.
 *
 *     pnpm tsx scripts/_a204_check.ts
 */
import { dicteeMode, letterCount } from '../../ealch-v2/src/content/dictee.logic.ts';
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import {
  ARTICLE_CELL_MAX, ARTICLE_TABLE, KIND_CELL_MAX, KIND_EXAMPLE, KIND_LABEL,
  KIND_ORDER, KIND_WORD, PREPOSITIONS_LIEU, REPAIRS, TIME_MUST_FIRE,
  TIME_MUST_NOT_FIRE, TIME_SHAPE,
} from './data/prepositions-lieu-corpus.ts';

let bad = 0;
const die = (m: string) => { console.log(`  FAIL ${m}`); bad += 1; };

console.log('## dictée mode, through the real function');
for (const r of PREPOSITIONS_LIEU) {
  const n = letterCount(r.fr);
  const mode = dicteeMode(r.fr);
  const has = r.drills.includes('dictation');
  const flag = has === (mode === 'letters') ? '   ' : ' ! ';
  if (flag === ' ! ') die(`${r.id} ${mode} ${n} letters, dictation=${has}`);
  console.log(`  ${flag}${r.id}  ${String(n).padStart(2)}  ${mode.padEnd(7)} dictation=${has ? 'yes' : 'no '}  ${r.fr}`);
}

console.log();
console.log('## nasal check, through the real hasPlainNasalFor');
for (const r of PREPOSITIONS_LIEU) {
  if (hasPlainNasalFor(r.fr, r.respell!)) die(`${r.id} FLAGGED: ${r.fr} [${r.respell}]`);
}
console.log(`  ${PREPOSITIONS_LIEU.filter((r) => hasPlainNasalFor(r.fr, r.respell!)).length} authored rows flagged (want 0)`);

console.log();
console.log('## the repairs, all three values');
for (const p of REPAIRS) {
  const fFrom = hasPlainNasalFor(p.fr, p.from);
  const fHalf = hasPlainNasalFor(p.fr, p.half);
  const fTo = hasPlainNasalFor(p.fr, p.to);
  console.log(`  ${p.id.padEnd(32)} from=${fFrom ? 'FLAG' : 'ok  '} half=${fHalf ? 'FLAG' : 'ok  '} to=${fTo ? 'FLAG' : 'ok  '}  blind=${p.blind} house=${p.house}`);
  if (fTo) die(`${p.id} repaired value is still flagged`);
  if (fHalf) die(`${p.id} half value is still flagged`);
  if (p.blind && fFrom) die(`${p.id} claims blind and the checker sees it`);
  if (!p.blind && !p.house && !fFrom) die(`${p.id} claims visible and the checker does not see it`);
  if ((p.half !== p.to) !== (p.blind || p.house)) die(`${p.id} half!==to is ${p.half !== p.to} and blind||house is ${p.blind || p.house}`);
  if (p.to.includes('‿') || p.from.includes('‿')) die(`${p.id} carries U+203F`);
}

console.log();
console.log('## cell widths');
for (const k of KIND_ORDER) {
  for (const cell of [KIND_LABEL[k], KIND_WORD[k], KIND_EXAMPLE[k]]) {
    if (cell.length > KIND_CELL_MAX) die(`kind cell "${cell}" is ${cell.length} and the budget is ${KIND_CELL_MAX}`);
  }
}
for (const r of ARTICLE_TABLE) {
  for (const cell of [r.word, r.withLe, r.withLa]) {
    if (cell.length > ARTICLE_CELL_MAX) die(`article cell "${cell}" is ${cell.length} and the budget is ${ARTICLE_CELL_MAX}`);
  }
}
console.log('  widths checked');

console.log();
console.log('## the time-sense guard, both directions');
for (const s of TIME_MUST_FIRE) if (!TIME_SHAPE.test(s)) die(`TIME_SHAPE did not fire on "${s}"`);
for (const s of TIME_MUST_NOT_FIRE) if (TIME_SHAPE.test(s)) die(`TIME_SHAPE fired on "${s}"`);
console.log('  time shape checked');

console.log();
console.log('## U+203F anywhere in the authored rows');
for (const r of PREPOSITIONS_LIEU) {
  for (const v of [r.fr, r.respell ?? '', r.ipa ?? '', r.en, r.notes ?? '']) {
    if (v.includes('‿')) die(`${r.id} carries U+203F in "${v}"`);
  }
  for (const v of [r.fr, r.en, r.notes ?? '']) {
    if (v.includes('—') || v.includes('–')) die(`${r.id} carries an em or en dash`);
  }
}
console.log('  glyphs checked');

console.log();
console.log(bad === 0 ? 'ALL GREEN' : `${bad} PROBLEMS`);
process.exit(bad === 0 ? 0 : 1);
