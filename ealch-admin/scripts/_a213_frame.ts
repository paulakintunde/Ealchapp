/* a2.13 frame and respelling checks, through the real app functions.
 *
 *   1. dicteeMode on all 18 paradigm rows. ONE frame across three verbs and six
 *      persons is the design; if a cell falls into WORD mode it cannot test a
 *      spelling and the frame has to shrink.
 *   2. THE HOUSE RESPELLING FOR /ø/. `veux` and `peux` carry it and invariants §3
 *      says /ø œ/ is `EU`, while a2.12 imported `fair la KUH` for `queue`. The
 *      shipped corpus is measured rather than guessed: inventing a fourth
 *      spelling for one sound is exactly what invariants §9 records for the ɥ
 *      glide.
 *   3. hasPlainNasalFor on every respelling this lesson would display, in both
 *      directions.
 *   4. endingPopulation on every row it would import.
 *
 *     pnpm tsx scripts/_a213_frame.ts
 */
import './env';
import { Pool } from 'pg';
import type { Item } from '../../ealch-v2/src/content/schema.ts';
import { endingPopulation } from '../../ealch-v2/src/content/gender.logic.ts';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { pgEnumArray } from './manifest-item.ts';

/** The design: ONE frame, `payer`, across three verbs and six persons. */
const ROWS: [string, string][] = [
  ['Je veux payer.', 'zhuh VUH pay-YAY'],
  ['Tu veux payer.', 'tü VUH pay-YAY'],
  ['Il veut payer.', 'eel VUH pay-YAY'],
  ['Nous voulons payer.', 'noo voo-LOHⁿ pay-YAY'],
  ['Vous voulez payer.', 'voo voo-LAY pay-YAY'],
  ['Ils veulent payer.', 'eel VUHL pay-YAY'],
  ['Je peux payer.', 'zhuh PUH pay-YAY'],
  ['Tu peux payer.', 'tü PUH pay-YAY'],
  ['Il peut payer.', 'eel PUH pay-YAY'],
  ['Nous pouvons payer.', 'noo poo-VOHⁿ pay-YAY'],
  ['Vous pouvez payer.', 'voo poo-VAY pay-YAY'],
  ['Ils peuvent payer.', 'eel PUHV pay-YAY'],
  ['Je dois payer.', 'zhuh DWAH pay-YAY'],
  ['Tu dois payer.', 'tü DWAH pay-YAY'],
  ['Il doit payer.', 'eel DWAH pay-YAY'],
  ['Nous devons payer.', 'noo duh-VOHⁿ pay-YAY'],
  ['Vous devez payer.', 'voo duh-VAY pay-YAY'],
  ['Ils doivent payer.', 'eel DWAHV pay-YAY'],
];

/** Every row this build would import. */
const IMPORTS = [
  'fr.sons.verbes-essentiels.007', // vouloir
  'fr.sons.verbes-essentiels.006', // pouvoir
  'fr.sons.verbes-essentiels.008', // devoir
  'fr.a1.verbes-du-quotidien.035', // Je veux un café, s'il vous plaît.
  'fr.a1.cafe.051', //                Je voudrais un café, s'il vous plaît.
  'fr.a1.verbes-essentiels.079', //   Nous voulons réserver une table pour deux.
  'fr.a2.verbes-du-quotidien.073', // Nous voudrions réserver une table pour deux.
  'fr.sons.verbes-essentiels.059', // payer, the frame verb
  'fr.sons.verbes-essentiels.088', // nager, a candidate unseen verb
  'fr.a2.rp-repas.012', //            réserver
  'fr.a1.au-restaurant.012', //       commander
];

async function main() {
  console.log('## 1. dicteeMode on the single `payer` frame\n');
  let worst = 0;
  for (const [fr] of ROWS) {
    const letters = fr.replace(/[^\p{L}]/gu, '').length;
    worst = Math.max(worst, letters);
    console.log(`  ${dicteeMode(fr) === 'letters' ? 'LETTERS' : 'words  '} ${String(letters).padStart(2)}  ${fr}`);
  }
  console.log(`  longest row: ${worst} letters (the limit is 16)`);

  console.log('\n## 2. hasPlainNasalFor on every authored respelling, both directions\n');
  for (const [fr, respell] of ROWS) {
    const clean = !hasPlainNasalFor(fr, respell);
    if (!respell.includes('ⁿ')) { console.log(`  no nasal  clean=${clean ? 'ok' : 'NO'}  ${respell}`); continue; }
    const broken = respell.replace(/ⁿ/g, 'n');
    const seen = hasPlainNasalFor(fr, broken);
    console.log(`  ${seen ? 'VISIBLE ' : 'BLIND   '} clean=${clean ? 'ok' : 'NO'}  ${respell.padEnd(22)} broken "${broken}" flagged=${seen}`);
  }

  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();

  /* ── 3. THE HOUSE RESPELLING FOR /ø/ AND /œ/ ───────────────────────────── */
  console.log('\n## 3. How the shipped corpus already respells /ø œ/\n');
  const oe = await c.query<{ fr: string; respell: string; n: string }>(
    `select fr, respell, count(*) n from content_items
      where status = 'published' and respell is not null
        and lower(fr) = any($1::text[])
      group by fr, respell order by fr, 3 desc`,
    [['deux', 'bleu', 'un peu', 'le feu', 'les yeux', 'la queue', 'heureux', 'jeune', 'la fleur', 'la sœur', 'le beurre', 'neuf', "l'heure"]],
  );
  for (const r of oe.rows) console.log(`  ${r.fr.padEnd(12)} ${r.respell.padEnd(18)} ×${r.n}`);
  const veuPeu = await c.query<{ fr: string; respell: string }>(
    `select fr, respell from content_items where status='published' and respell is not null
       and (respell ~* '(^|[ -])(VEU|PEU|VUH|PUH|EU)([ -]|$)' or fr ~* '\\m(veux|peux|veulent|peuvent)\\M') limit 14`,
  );
  console.log('\n  rows already respelling a veux/peux-shaped sound:');
  for (const r of veuPeu.rows) console.log(`    ${JSON.stringify(r.fr).padEnd(34)} ${r.respell}`);

  /* ── 4. endingPopulation on every imported row ─────────────────────────── */
  console.log('\n## 4. endingPopulation over the rows this build would import\n');
  const r = await c.query<Record<string, unknown>>('select * from content_items where id = any($1)', [IMPORTS]);
  const rows = r.rows.map((x) => ({
    id: String(x.id), kind: String(x.kind), level: String(x.level), theme: String(x.theme),
    fr: String(x.fr), en: String(x.en), respell: (x.respell as string | null) ?? undefined,
    gender: (x.gender as string | null) ?? undefined, drills: pgEnumArray(x.drills), version: 1,
  })) as unknown as Item[];
  const joiners = endingPopulation(rows);
  console.log(`  ${rows.length} rows read, ${joiners.length} JOIN a1.03's ending population`);
  for (const row of rows) {
    const solo = endingPopulation([row]);
    console.log(`    ${solo.length ? 'JOINS ' : 'safe  '} ${row.id.padEnd(34)} ${JSON.stringify(row.fr).slice(0, 46).padEnd(48)} kind=${row.kind} g=${(row as { gender?: string }).gender ?? '-'} respell=${row.respell ?? '-'}`);
  }
  const missing = IMPORTS.filter((id) => !rows.find((x) => x.id === id));
  if (missing.length) console.log(`  MISSING FROM POSTGRES: ${missing.join(', ')}`);

  c.release();
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
