/* The blind spot this build found, isolated so the mechanism is measured rather
 * than argued.
 *
 * `hasPlainNasalFor(fr, respell)` runs its doubled-nasal rescue on the WHOLE
 * FRENCH STRING rather than on the token being respelled:
 *
 *     if (/(?:nn|mm)/i.test(fr)) return false;
 *
 * For a WORD that is right: `connaître` has a real /n/ and its respelling may
 * legitimately end in one. For a SENTENCE it is not: one doubled nasal anywhere
 * in the line switches the check off for every other word in it.
 *
 * `connaître` is spelled with nn, so EVERY sentence in this lesson that uses it
 * is exempt from the rescue's second half. It only bites where the respelling
 * uses a bare vowel letter before the n rather than one of the two-letter house
 * spellings, because hasPlainNasal's own list (AH OH EH UH EU AI OU) catches
 * those first.
 *
 *     pnpm tsx scripts/_a214_blindspot.ts
 */
import { hasPlainNasal, hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';

const CASES: Array<[string, string, string]> = [
  // fr, respell with the superscript broken to a plain n, what it demonstrates
  ['Il connaît bien la ville.', 'eel koh-NEH byan la VEEL', 'bare A + N, and the French holds nn'],
  ['Il sait bien nager.', 'eel SEH byan nah-ZHAY', 'the SAME respell shape, and the French holds NO nn'],
  ['Nous connaissons ce restaurant.', 'noo koh-neh-SOHn suh rehs-toh-RAHⁿ', 'OH + N, caught by hasPlainNasal first'],
  ['Je connais le jardin.', 'zhuh koh-NEH luh zhar-DAn', 'bare A + N again, French holds nn'],
  ['Je dois acheter du pain.', 'zhuh DWAH ahsh-TAY dü PAn', "a2.13's row: bare A + N, no nn in the French"],
  ['La femme connaît Paris.', 'la FAM koh-NEH pa-REE', 'mm in the French, and FAM is a REAL /m/'],
];

console.log('\n  hasPlainNasal(respell) alone, then hasPlainNasalFor(fr, respell)\n');
for (const [fr, re, note] of CASES) {
  const bare = hasPlainNasal(re);
  const withFr = hasPlainNasalFor(fr, re);
  const dbl = /(?:nn|mm)/i.test(fr);
  console.log(
    `  ${withFr ? 'SEEN  ' : 'MISSED'}  hasPlainNasal=${String(bare).padEnd(5)} nn|mm in fr=${String(dbl).padEnd(5)}  ${JSON.stringify(re).padEnd(42)} ${fr}`,
  );
  console.log(`            ${note}`);
}

console.log(`
  THE RULE, stated: hasPlainNasalFor cannot see a plain-n nasal when
    (a) the respelling uses a BARE VOWEL LETTER before the n, so hasPlainNasal's
        own list (AH OH EH UH EU AI OU) does not catch it first, AND
    (b) the FRENCH STRING contains nn or mm ANYWHERE, which returns false on the
        doubled-nasal branch before the per-word check is ever reached.

  a2.13 is not exposed to this: it uses the same bare-vowel spellings (PAⁿ, MAⁿ,
  zhar-DAⁿ) and not one of its French strings contains a doubled nasal. a2.14 is
  exposed on every line that uses connaître, which is spelled with nn.

  This is WIDER than A2-BRIEF-CORRECTIONS §6, which records the blind spot as "a
  nasal followed by any consonant inside the token". That shape is about the
  RESPELLING. This one is about the FRENCH, it applies to whole sentences, and
  it is why a2.14 asserts its one exposed row by name.
`);
