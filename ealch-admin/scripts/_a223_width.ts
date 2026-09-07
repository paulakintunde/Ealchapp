/* Throwaway: calibrate the mission-title width model against the three cases
 * measured on the Pixel 6, and check every candidate replacement title. */
import {
  SLOTS, SLOT_CELL_MAX, TITLE_MUST_CLIP, TITLE_MUST_FIT, TITLE_WIDTH_MAX, titleWidth,
} from './data/pronominaux-passe-corpus.ts';

console.log(`\n  budget ${TITLE_WIDTH_MAX} em\n`);
let ok = true;
for (const s of TITLE_MUST_FIT) {
  const w = titleWidth(s);
  const good = w <= TITLE_WIDTH_MAX;
  ok &&= good;
  console.log(`  FIT   ${good ? 'ok   ' : 'WRONG'} ${String(w).padStart(6)}  ${s}`);
}
for (const s of TITLE_MUST_CLIP) {
  const w = titleWidth(s);
  const good = w > TITLE_WIDTH_MAX;
  ok &&= good;
  console.log(`  CLIP  ${good ? 'ok   ' : 'WRONG'} ${String(w).padStart(6)}  ${s}`);
}
console.log(`\n  model separates the measured cases: ${ok ? 'YES' : 'NO'}\n`);

console.log('  candidate replacements:');
for (const s of ['Four Are Already Yours', 'Verbs You Never Saw', 'You Already Have Four', 'New Verbs, Same Rule']) {
  const w = titleWidth(s);
  console.log(`    ${String(w).padStart(6)}  ${w <= TITLE_WIDTH_MAX ? 'fits ' : 'CLIPS'}  ${s}`);
}

console.log('\n  slot cells (budget ' + SLOT_CELL_MAX + '):');
for (const s of SLOTS) {
  console.log(`    ${String(s.job.length).padStart(3)}  ${s.job.length <= SLOT_CELL_MAX ? 'ok   ' : 'OVER '}  ${s.word.padEnd(6)} ${s.job}`);
}
