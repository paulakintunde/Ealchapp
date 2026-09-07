/* Where the reframe is authored, by path, so the count is chosen rather than
 * discovered. Doctrine §B.4: the density validator enforces three and the good
 * lessons use six to eight.
 *
 *     pnpm tsx scripts/_a222_reframe.ts
 */
import { LESSON } from './data/pronominaux-lesson.ts';
import { NEGATION_EXTENSION, NEGATION_RULE, REFRAME } from './data/pronominaux-corpus.ts';

const walk = (v: unknown, needle: string, path = '', out: string[] = []): string[] => {
  if (typeof v === 'string') { if (v.includes(needle)) out.push(path); return out; }
  if (Array.isArray(v)) { v.forEach((x, i) => walk(x, needle, `${path}[${i}]`, out)); return out; }
  if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) walk(x, needle, path ? `${path}.${k}` : k, out);
  }
  return out;
};

const tree = {
  sections: LESSON.sections,
  sheets: LESSON.sheets,
  terms: LESSON.terms,
  acts: LESSON.acts,
  drills: LESSON.drills,
  audio: LESSON.audio,
  overview: LESSON.overview,
  intro: LESSON.intro,
  reframe: LESSON.reframe,
};

for (const [name, needle] of [['REFRAME', REFRAME], ['NEGATION_RULE', NEGATION_RULE], ['NEGATION_EXTENSION', NEGATION_EXTENSION]] as const) {
  const hits = walk(tree, needle);
  console.log(`\n${name}: ${hits.length}`);
  for (const h of hits) console.log(`  ${h}`);
}
