// IS a1.03's PRINTED ENDING FIGURE TRUE FOR A LEARNER, OR ONLY FOR THE SEED CUT?
//
// a1.03 prints a population and an accuracy for ~35 noun endings. Those figures
// are measured against seed.json, because "the seed is what ships"
// (a1-03-derived-figures.test.ts). But the seed is a CUT: seed-cut.config.ts
// bundles sons/a1/a2 plus some themed vocabulary, and says of everything else
// that it "still publishes — it just arrives via the snapshot channel".
//
// So a learner has two different corpora over time:
//
//   first launch, offline   the seed cut            (~11k items)
//   after one OTA pull      seed merged with v71    (~49k items)
//
// If the two give different numbers, the printed figure is true only in the
// first state, and every remeasure is chasing a moving product decision rather
// than a fact about French.
//
// This script reports both, side by side. It reads and writes nothing.
//
//   npx tsx scripts/_a1_genre_cut_vs_full.ts

import './env';
import { readFileSync } from 'node:fs';
import { measureEnding } from '../../ealch-v2/src/content/gender.logic.ts';
import * as endings from './data/genre-endings.ts';

import pg from 'pg';

type Row = { ending: string; predicts: string; accuracy: number; items: number };
const E = endings as unknown as { ENDING_RULES: Row[]; WORTHLESS_ENDINGS: Row[]; MORE_ENDINGS: Row[] };
const ALL: Row[] = [...(E.ENDING_RULES ?? []), ...(E.WORTHLESS_ENDINGS ?? []), ...(E.MORE_ENDINGS ?? [])];

const seed = JSON.parse(
  readFileSync(new URL('../../ealch-v2/src/content/seed.json', import.meta.url), 'utf8'),
) as { items: Array<{ id: string; fr: string; gender?: string; kind?: string }> };

async function main() {
  const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
  const { rows: full } = await pool.query(
    `select id, fr, gender::text as gender, kind::text as kind, theme
       from content_items where status = 'published'`,
  );
  await pool.end();

  console.log(`seed items: ${seed.items.length}   published items: ${full.length}   seed is ${((seed.items.length / full.length) * 100).toFixed(1)}% of the corpus`);
  console.log('');
  console.log('ending      printed   seed-cut       full corpus      verdict');
  console.log('-'.repeat(74));

  let sameCount = 0;
  let drifted: string[] = [];
  for (const e of ALL) {
    const s = measureEnding(seed.items as never, e.ending) as { n: number; accuracy: number } | null;
    const f = measureEnding(full as never, e.ending) as { n: number; accuracy: number } | null;
    const sTxt = s ? `${s.n} @ ${s.accuracy}%` : 'none';
    const fTxt = f ? `${f.n} @ ${f.accuracy}%` : 'none';
    const same = s && f && s.n === f.n && s.accuracy === f.accuracy;
    if (same) sameCount += 1;
    else drifted.push(e.ending);
    console.log(
      `${e.ending.padEnd(11)} ${String(e.items).padEnd(9)} ${sTxt.padEnd(14)} ${fTxt.padEnd(16)} ${same ? 'same' : 'DIFFERS'}`,
    );
  }

  console.log('');
  console.log(`${sameCount} of ${ALL.length} endings read the same in the cut and the full corpus.`);
  if (drifted.length) {
    console.log(`${drifted.length} differ, so the printed figure is true only before the first OTA pull.`);
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
