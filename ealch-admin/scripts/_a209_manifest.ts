/* Regenerates data/verbes-er-exceptions-rows.gen.ts, the recorded read behind a2.09.
 *
 * a2.09 authors NO infinitive. Twelve of the thirteen verbs its brief names
 * already exist in Postgres, and so does every other verb this lesson wanted, so
 * the lesson IMPORTS them by id. Two things need the whole row rather than the id:
 *
 *   1. author-verbes-er-exceptions-batch.ts verifies the manifest field by field
 *      before it opens a transaction, because a stale manifest puts the lesson
 *      ahead of rows nobody has looked at.
 *   2. merge-verbes-er-exceptions-into-seed.ts has to CARRY these rows into
 *      seed.json. The seed is a CUT: `verbes` shows 35 rows in the seed and holds
 *      393 in Postgres, and a lesson whose itemIds resolve to nothing renders
 *      empty cards on a device. a2.01 hit the same wall with 30 rows.
 *
 *     pnpm tsx scripts/_a209_manifest.ts
 */
import './env';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Pool } from 'pg';

const here = dirname(fileURLToPath(import.meta.url));
const OUT = join(here, 'data/verbes-er-exceptions-rows.gen.ts');

/** verb -> the row this lesson imports, grouped by pattern and in the order the
 *  learner meets them.
 *
 *  Chosen the way a2.01 chose: a home in `verbes` or `verbes-essentiels` where
 *  one exists, a respelling present, and NO `gender` — a gendered single-word row
 *  joins a1.03's measured ending population and moves twenty printed figures in
 *  a1-03-genre.test.ts.
 *
 *  Three of these carry a respelling that closes a nasal with a plain n, and this
 *  build repairs all three. See RESPELL_REPAIRS in the corpus. */
const VERBS: [string, string][] = [
  // -ger: the e that keeps the g soft before o
  ['manger', 'fr.a1.routines.185'],
  ['nager', 'fr.sons.verbes-essentiels.088'],
  ['voyager', 'fr.sons.verbes-essentiels.130'],
  ['ranger', 'fr.a1.routines.033'],
  ['partager', 'fr.a2.communaute.052'],
  // -cer: the cedilla that keeps the c soft before o
  ['commencer', 'fr.sons.verbes-essentiels.036'],
  ['lancer', 'fr.sons.verbes-essentiels.132'],
  ['effacer', 'fr.a1.dictee.099'],
  // -eler / -eter, the ones that DOUBLE
  ['appeler', 'fr.a2.verbes.050'],
  ['rappeler', 'fr.a2.verbes.051'],
  ['jeter', 'fr.sons.verbes-essentiels.069'],
  // -eler / -eter, the ones that take the ACCENT
  ['acheter', 'fr.a2.verbes.026'],
  ['geler', 'fr.a1.meteo.167'],
  // é_er: the é that opens to è
  ['préférer', 'fr.sons.verbes-essentiels.108'],
  ['espérer', 'fr.sons.verbes-essentiels.107'],
  ['répéter', 'fr.sons.verbes-essentiels.209'],
  ['protéger', 'fr.a2.verbes.055'],
];

/** Sentences this lesson teaches FROM rather than teaching.
 *
 *  None. a2.01 reused `fr.a2.verbes.001` because its paradigm frame already had a
 *  `je` row published. Nothing in this corpus is a minimal pair in one frame — the
 *  30 existing `nous mangeons` sentences and the 40 `je préfère` ones were each
 *  written for their own theme, so comparing two of them compares their subject
 *  matter as well as their person. That is the whole authoring case; see the
 *  corpus header. */
const REUSED_SENTENCES: string[] = [];

type Row = {
  id: string; kind: string; level: string; theme: string; fr: string; en: string;
  ipa: string | null; respell: string | null; gender: string | null; notes: string | null;
  tags: string[] | null; drills: string[]; version: number; card_type: string | null;
  audio_ref: string | null; status: string;
};

function pgArray(v: unknown): string[] {
  if (Array.isArray(v)) return v as string[];
  if (typeof v !== 'string') return [];
  return v.replace(/^\{|\}$/g, '').split(',').map((s) => s.trim().replace(/^"|"$/g, '')).filter(Boolean);
}

/** An Item literal with the fields the schema carries and nothing else.
 *  Undefined-valued keys are dropped rather than emitted as `undefined`, which is
 *  not valid in a `.ts` data file the seed merge round-trips. */
function itemLiteral(r: Row): string {
  const parts = [
    `id: ${JSON.stringify(r.id)}`,
    `kind: ${JSON.stringify(r.kind)}`,
    `level: ${JSON.stringify(r.level)}`,
    `theme: ${JSON.stringify(r.theme)}`,
    `fr: ${JSON.stringify(r.fr)}`,
    `en: ${JSON.stringify(r.en)}`,
  ];
  if (r.ipa) parts.push(`ipa: ${JSON.stringify(r.ipa)}`);
  if (r.respell) parts.push(`respell: ${JSON.stringify(r.respell)}`);
  if (r.gender) parts.push(`gender: ${JSON.stringify(r.gender)}`);
  if (r.notes) parts.push(`notes: ${JSON.stringify(r.notes)}`);
  parts.push(`tags: ${JSON.stringify(r.tags ?? [])}`);
  parts.push(`drills: ${JSON.stringify(pgArray(r.drills))}`);
  parts.push(`audioRef: ${r.audio_ref ? JSON.stringify(r.audio_ref) : 'null'}`);
  parts.push(`version: ${r.version ?? 1}`);
  if (r.card_type) parts.push(`cardType: ${JSON.stringify(r.card_type)}`);
  return `  { ${parts.join(', ')} },`;
}

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  const ids = [...VERBS.map((t) => t[1]), ...REUSED_SENTENCES];
  const r = await c.query<Row>(
    `select id, kind, level, theme, fr, en, ipa, respell, gender, notes, tags, drills,
            version, card_type, audio_ref, status
       from content_items where id = any($1)`,
    [ids],
  );
  const by = new Map(r.rows.map((x) => [x.id, x]));

  const missing = ids.filter((i) => !by.has(i));
  if (missing.length) { console.error('MISSING FROM POSTGRES:', missing.join(', ')); process.exit(1); }
  const unpublished = r.rows.filter((x) => x.status !== 'published');
  if (unpublished.length) { console.error('NOT PUBLISHED:', unpublished.map((x) => `${x.id} (${x.status})`).join(', ')); process.exit(1); }
  for (const [verb, id] of VERBS) {
    const x = by.get(id)!;
    if (x.fr !== verb) { console.error(`!! ${id} fr is ${JSON.stringify(x.fr)}, expected ${JSON.stringify(verb)}`); process.exit(1); }
    if (x.gender) { console.error(`!! ${id} "${verb}" carries gender ${JSON.stringify(x.gender)}. An infinitive is not a noun.`); process.exit(1); }
  }

  const stamp = new Date().toISOString().slice(0, 10);
  const body = `// GENERATED by scripts/_a209_manifest.ts on ${stamp}. Do not edit by hand.
//
// A recorded read of the ${ids.length} rows a2.09 imports rather than authors. Two
// consumers need the whole row and not just the id:
//
//   author-verbes-er-exceptions-batch.ts verifies every field against Postgres
//   before it opens a transaction, so a stale manifest cannot put the lesson
//   ahead of rows nobody has looked at.
//
//   merge-verbes-er-exceptions-into-seed.ts CARRIES these into seed.json. The
//   seed is a CUT, so without the carry the verb cards would draw empty.
//
// Regenerate with: pnpm tsx scripts/_a209_manifest.ts

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

/** The ${VERBS.length} infinitives, grouped by pattern, in learner order. */
export const IMPORTED_VERB_ROWS: Item[] = [
${VERBS.map(([, id]) => itemLiteral(by.get(id)!)).join('\n')}
];

/** The published sentences this lesson teaches from rather than teaching. */
export const IMPORTED_SENTENCE_ROWS: Item[] = [
${REUSED_SENTENCES.map((id) => itemLiteral(by.get(id)!)).join('\n')}
];

/** verb -> id, in learner order. The only place this pairing is written down. */
export const VERB_ROW_IDS: [string, string][] = [
${VERBS.map(([v, id]) => `  [${JSON.stringify(v)}, ${JSON.stringify(id)}],`).join('\n')}
];
`;
  writeFileSync(OUT, body, 'utf8');
  console.log(`  wrote ${OUT}`);
  console.log(`  ${VERBS.length} verbs, ${REUSED_SENTENCES.length} sentences, all published, none carrying a gender`);
  for (const [verb, id] of VERBS) {
    const x = by.get(id)!;
    console.log(`    ${verb.padEnd(12)} ${id.padEnd(36)} respell=${x.respell ?? '-'}`);
  }

  c.release();
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
