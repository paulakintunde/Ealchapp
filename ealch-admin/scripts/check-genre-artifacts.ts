// Does a1.03 still teach French, or has it started teaching the seed cut?
//
// Asks the two questions in genre-drift.logic.ts against the real corpora:
//
//   ARTIFACT      a taught ending that predicts one gender in the cut and the
//                 other in the database, or that only clears the 90% floor in
//                 the cut. Also a dismissed ending that has started clearing
//                 the floor. This is a content problem and re-measuring hides
//                 it. Exit 1.
//
//   FIGURE MOVE   a printed population or accuracy that no longer matches the
//                 seed. Routine — the cut moved. Exit 0, with the commands.
//
// `author-noun-gender-batch.ts` has asked the artifact question since a1.03 was
// written, and it is why -eur and -oire were cut before the lesson shipped. But
// it only ran while AUTHORING a1.03. Publish nouns from any other lesson and
// nothing asked again. This script is that question, standing.
//
//   pnpm tsx scripts/check-genre-artifacts.ts
//
// `publish-content.ts` runs the same logic on every publish, so this is for
// asking on demand rather than the only place it is asked.

import './env';
import { readFileSync } from 'node:fs';
import pg from 'pg';
import { measureEnding, type GenderRow } from '../../ealch-v2/src/content/gender.logic.ts';
import { ENDING_RULES, WORTHLESS_ENDINGS, MORE_ENDINGS, RULE_FLOOR } from './data/genre-endings.ts';
import { findArtifacts, findFigureMoves, formatGenreDrift, type EndingClaim, type Measurement } from './genre-drift.logic.ts';

const ALL: EndingClaim[] = [...ENDING_RULES, ...WORTHLESS_ENDINGS, ...MORE_ENDINGS] as EndingClaim[];

/** measureEnding over one corpus, memoised, shaped as the logic module wants. */
function lookup(items: GenderRow[]) {
  const cache = new Map<string, Measurement>();
  return (ending: string): Measurement => {
    if (!cache.has(ending)) {
      const m = measureEnding(items, ending);
      cache.set(ending, m ? { n: m.n, accuracy: m.accuracy, predicts: m.predicts } : null);
    }
    return cache.get(ending) ?? null;
  };
}

async function main() {
  const seedItems = (
    JSON.parse(readFileSync(new URL('../../ealch-v2/src/content/seed.json', import.meta.url), 'utf8')) as { items: GenderRow[] }
  ).items;

  const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
  const { rows } = await pool.query<GenderRow>(
    `select id, fr, gender::text as gender, kind::text as kind, theme
       from content_items where status = 'published'`,
  );
  await pool.end();

  const seed = lookup(seedItems);
  const corpus = lookup(rows);

  console.log(`  seed ${seedItems.length} items · corpus ${rows.length} items · floor ${RULE_FLOOR}%`);
  console.log(`  ${ENDING_RULES.length} taught · ${WORTHLESS_ENDINGS.length} dismissed · ${MORE_ENDINGS.length} on the sheet`);
  console.log('');

  const artifacts = findArtifacts(ENDING_RULES as EndingClaim[], WORTHLESS_ENDINGS as EndingClaim[], seed, corpus, RULE_FLOOR);
  const moves = findFigureMoves(ALL, seed);
  const report = formatGenreDrift(moves, artifacts);

  if (!report.length) {
    console.log('  ✓ every printed figure matches the seed, and every rule holds across the corpus.');
    return;
  }
  for (const line of report) console.log(line);

  if (artifacts.length) {
    console.log('');
    console.log('✖ a1.03 is teaching at least one property of the cut rather than of French.');
    process.exitCode = 1;
  }
}

main().catch((e) => { console.error(e); process.exit(2); });
