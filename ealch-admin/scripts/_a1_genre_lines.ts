// THE AUTHORED `line` PROSE IN genre-endings.ts, MEASURED.
//
// Nine ENDING_RULES rows state their population in words ("Forty-five nouns,
// no exception"), and genre-endings.ts keeps them as authored prose on purpose:
// the wording carries teaching a template would flatten, and a1-03's suite is
// supposed to catch the drift. It does — but it throws on the FIRST mismatch,
// so a remeasure that moves eight lines looks like it moved one.
//
// This prints what each line would have to say to be true: the population, the
// accuracy, the hit count, and the nouns that actually break the rule, so the
// prose can be rewritten from measurement rather than from arithmetic done in
// one's head.
//
//   npx tsx scripts/_a1_genre_lines.ts

import { readFileSync } from 'node:fs';
import { measureEnding } from '../../ealch-v2/src/content/gender.logic.ts';
import * as endings from './data/genre-endings.ts';

type Row = { ending: string; predicts: string; accuracy: number; items: number; line?: string };
const E = endings as unknown as { ENDING_RULES: Row[]; WORTHLESS_ENDINGS: Row[]; MORE_ENDINGS: Row[] };

const seed = JSON.parse(
  readFileSync(new URL('../../ealch-v2/src/content/seed.json', import.meta.url), 'utf8'),
) as { items: Array<{ id: string; fr: string; gender?: string }> };

for (const r of [...(E.ENDING_RULES ?? []), ...(E.WORTHLESS_ENDINGS ?? [])]) {
  if (!r.line) continue;
  const m = measureEnding(seed.items as never, r.ending) as
    | { n: number; accuracy: number; predicts: string; breaks: Array<{ fr: string }> }
    | null;
  if (!m) { console.log(`-${r.ending}: measures to nothing`); continue; }
  const hits = m.n - m.breaks.length;
  console.log(`\n-${r.ending}`);
  console.log(`  measured : ${m.n} nouns, ${hits} of ${m.n} take ${m.predicts === 'm' ? 'un' : 'une'} (${m.accuracy}%)`);
  console.log(`  breaks   : ${m.breaks.length ? m.breaks.map((b) => b.fr).join(', ') : 'none'}`);
  console.log(`  line now : ${r.line}`);
}
