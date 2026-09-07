// a2.33 « Les démonstratifs » — the SELF-AUDIT.
//
// Cited by `A2-33-BUILD-REPORT.md` §13, which is the audit of the shipped v2.
// It walks every FRENCH-bearing field on a learner surface and checks two
// things nothing else in the build was watching: the band's tense ceiling
// (A2 teaches no imparfait, futur simple or conditionnel at any seq) and the
// pronominal `en`/`y`, which belong to a2.25.
//
// It found « Et vous VOULIEZ autre chose ? » and « J'EN ai deux comme ça » on
// the scenario, both of which had passed thirty guards, 111 assertions and 19
// mutations — because every one of those was pointed at this lesson's own
// material and none at the band it sits in. Both are now guarded by
// OUT_OF_BAND_TENSES and PRONOMINAL_EN_Y in the corpus and the batch.
//
// AND THIS SCRIPT MADE THE MISTAKE IT EXISTS TO FIND, TWICE, which is why it
// is worth keeping rather than deleting:
//
//   1. Its first tense shape was `/\b\w+(ais|ait|iez)\b/` — an ending with no
//      stem — and it matched « Parfait ». An ending alone reads half the
//      French lexicon as a verb. It is anchored on verb STEMS below.
//   2. Its first pronoun shape used bare substrings and matched `te` inside
//      `cette`, `me` inside `homme` and `lui` inside `celui` — on a lesson
//      whose entire vocabulary is `celui`, `celle`, `ceux`, `celles`. It uses
//      the house word boundary below.
//
// A2-TAIL-AUDIT §4 — guard the THING, not the letters — in the audit tool
// itself. The next author will write the same two shapes.
//
// TRACKED so the §13 findings can be re-derived rather than taken on trust.
import { LESSON } from './data/demonstratifs-lesson.ts';
import { ALL_ROWS } from './data/demonstratifs-corpus.ts';

/** Fields that hold FRENCH on a learner surface. */
const FR_KEYS = new Set(['fr', 'ai', 'user', 'text', 'promptSound', 'promptLabel', 'answer', 'prompt', 'say', 'wrong', 'right', 'back', 'word']);
const out: { path: string; s: string }[] = [];
const walk = (v: unknown, path: string) => {
  if (Array.isArray(v)) return v.forEach((x, i) => walk(x, `${path}[${i}]`));
  if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) {
      if (typeof x === 'string' && FR_KEYS.has(k)) out.push({ path: `${path}.${k}`, s: x });
      else walk(x, `${path}.${k}`);
    }
  }
};
walk(LESSON.sections, 'sections');
walk(LESSON.drills ?? [], 'drills');
walk(LESSON.terms ?? {}, 'terms');
walk(LESSON.sheets ?? [], 'sheets');
console.log(`walked ${out.length} French-bearing strings\n`);

const B = (body: string) => new RegExp(`(?<![\\p{L}\\p{N}-])(?:${body})(?![\\p{L}\\p{N}'’-])`, 'iu');

/** A2 covers présent, passé composé, futur proche and the imperative. It does
 *  NOT cover the imparfait, the futur simple, the conditionnel or the
 *  subjonctif. Anchored on real verb STEMS rather than on endings, because an
 *  ending alone reads `Parfait` and `mais` as verbs. */
const OUT_OF_BAND: [string, RegExp][] = [
  ['imparfait', B('(?:voul|pouv|dev|sav|fais|dis|ét|av|all|prena|vena|croy|voy|regard|prenn)(?:ais|ait|aient|iez|ions)')],
  ['futur simple', B('(?:ser|aur|ir|viendr|prendr|voudr|pourr|devr|saur|fer)(?:ai|as|a|ons|ez|ont)')],
  ['conditionnel', B('(?:ser|aur|ir|viendr|prendr|voudr|pourr|devr|saur|fer)(?:ais|ait|aient|ions|iez)')],
];
console.log('--- possible out-of-band verb forms ---');
let oob = 0;
for (const { path, s } of out) {
  for (const [name, rx] of OUT_OF_BAND) {
    const m = s.match(rx);
    if (!m) continue;
    oob++;
    console.log(`  ${name.padEnd(14)} "${m[0]}"  ${path}\n      ${s.slice(0, 92)}`);
  }
}
if (!oob) console.log('  (none)');

/** `nous` and `vous` are excluded: they are SUBJECTS on almost every card in
 *  the product, and this lesson's scene and reading both use them that way. */
const PRON: [string, RegExp][] = [
  ['en (pronoun)', B("j'en|en ai|en as|en avons|en avez|en ont|en voit|en prends|en veux|en reste")],
  ['y (pronoun)', B('y vais|y va|y suis|y est|y ai|y pense')],
  ['object pronoun', B("me|te|se|lui|leur|leurs")],
  ['elided object', /(?<![\p{L}])(?:m['’]|t['’]|s['’]|l['’])(?=[aeiouéèêàâîôû])/iu],
];
console.log('\n--- pronominal en / y, and object pronouns, WHOLE WORD ---');
let hits = 0;
for (const { path, s } of out) {
  for (const [name, rx] of PRON) {
    const m = s.match(rx);
    if (!m) continue;
    hits++;
    console.log(`  ${name.padEnd(16)} "${m[0]}"  ${path}\n      ${s.slice(0, 95)}`);
  }
}
if (!hits) console.log('  (none)');

/** THE RESPELLING STRESS RULE. RESPELL-CONVENTION: caps the group-final
 *  syllable, everything else lower case, and a one-syllable GROUP is entirely
 *  caps. A capitalised syllable that is NOT group-final is the defect this
 *  looks for: a token in all caps followed by another token in the same group. */
console.log('\n--- authored rows: fr | en | respell ---');
for (const r of ALL_ROWS) {
  console.log(`  ${r.id.slice(-3)}  ${r.fr.padEnd(58)} | ${(r.en ?? '').padEnd(40)} | ${r.respell}`);
}
