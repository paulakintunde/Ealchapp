/* Mission-row title lengths against the budget measured on a Pixel 6.
 *
 * The missions hub draws the title and a TYPE CHIP on the same row, and the
 * chip wins: a long title ellipsises. Measured 2026-08-12 on a Pixel 6 at
 * default font scale, eight of a2.13's thirty-two titles were cut.
 *
 *   FITS  "What You Will Be Able To Do"   27 chars, chip OBJECTIFS (9)
 *   CUT   "Ten Verbs From Other Lessons"  28 chars, chip GROUPES (7)
 *
 * So the boundary sits at 27-28 and moves with the chip. The target below is
 * 25, which leaves room for the widest chip (RÉVISION, EXEMPLES) rather than
 * sitting on the edge of the one that happened to be measured.
 */
import './env';
import { MODAUX_LESSON } from './data/modaux-lesson.ts';
const MAX = 25;
let over = 0;
for (const [i, s] of MODAUX_LESSON.sections.entries()) {
  const title = (s as { title?: string }).title ?? '';
  const n = title.length;
  if (n > MAX) over++;
  console.log(`  ${String(i + 1).padStart(2)}  ${n > MAX ? 'OVER' : '    '} ${String(n).padStart(2)}  ${title}`);
}
console.log(`\n  ${over} of ${MODAUX_LESSON.sections.length} over ${MAX} characters`);
