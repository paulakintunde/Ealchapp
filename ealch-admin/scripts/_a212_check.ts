/* a2.12 design checks, run BEFORE authoring so the design is decided by the real
 * functions rather than by a table in a brief:
 *
 *   1. endingPopulation() over every row this build would IMPORT. The two
 *      `il fait <adj>` rows in meteo carry kind=word AND gender=m, and the
 *      invariants call that shape radioactive. Multi-word phrases are said to be
 *      safe; this measures it rather than trusting the sentence.
 *   2. dicteeMode() over every candidate paradigm sentence, because a target over
 *      16 letters spells from pre-filled WORD tiles and tests nothing.
 *   3. hasPlainNasalFor() over every respelling this build would display, in both
 *      directions, so the repair table is measured rather than guessed.
 *
 *     pnpm tsx scripts/_a212_check.ts
 */
import './env';
import { Pool } from 'pg';
import type { Item } from '../../ealch-v2/src/content/schema.ts';
import { endingPopulation } from '../../ealch-v2/src/content/gender.logic.ts';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { pgEnumArray } from './manifest-item.ts';

/** Every row a2.12 would import, in the order the lesson meets them. */
const CANDIDATES = [
  'fr.sons.verbes-essentiels.004', // faire
  'fr.sons.verbes-essentiels.005', // dire
  'fr.a1.dictee.091', // lire, ungendered
  'fr.a1.ecole.048', // lire, GENDERED — must NOT be imported
  'fr.a1.verbes-du-quotidien.112', // lire, ungendered, no respell
  'fr.a2.courses.018',
  'fr.a1.routines.030',
  'fr.a1.routines.031',
  'fr.a1.routines.032',
  'fr.a1.ecole.106',
  'fr.a1.maison.122',
  'fr.b1.voisinage.062',
  'fr.b1.bien-etre.035',
  'fr.a1.sports-et-loisirs.109',
  'fr.a1.sports-et-loisirs.074',
  'fr.a1.sports-et-loisirs.073',
  'fr.a1.animaux-domestiques.123',
  'fr.a1.meteo.027',
  'fr.a1.meteo.028',
  'fr.a1.meteo.029',
  'fr.a1.meteo.037', // kind=word gender=m
  'fr.a1.meteo.038', // kind=word gender=m
  'fr.a1.meteo.039', // kind=word gender=m
  'fr.a1.famille.136',
  'fr.b1.tourisme.039',
  'fr.b1.courses.023',
  'fr.a1.amis.026',
  'fr.a1.routines.043',
  'fr.a1.dictee.122',
  'fr.a1.routines.050', // faire son lit, respell FEHR sohn LEE
];

/** Candidate paradigm sentences, three frames. */
const FRAMES: Record<string, string[]> = {
  faire: ['Je fais le lit.', 'Tu fais le lit.', 'Il fait le lit.', 'Nous faisons le lit.', 'Vous faites le lit.', 'Ils font le lit.'],
  dire: ['Je dis bonjour.', 'Tu dis bonjour.', 'Il dit bonjour.', 'Nous disons bonjour.', 'Vous dites bonjour.', 'Ils disent bonjour.'],
  lire: ['Je lis le menu.', 'Tu lis le menu.', 'Il lit le menu.', 'Nous lisons le menu.', 'Vous lisez le menu.', 'Ils lisent le menu.'],
};

/** Respellings this build would display, French spelling beside them. */
const RESPELLS: [string, string][] = [
  ['Je fais le lit.', 'zhuh FEH luh LEE'],
  ['Tu fais le lit.', 'tü FEH luh LEE'],
  ['Il fait le lit.', 'eel FEH luh LEE'],
  ['Nous faisons le lit.', 'noo fuh-ZOHⁿ luh LEE'],
  ['Vous faites le lit.', 'voo FEHT luh LEE'],
  ['Ils font le lit.', 'eel FOHⁿ luh LEE'],
  ['Je dis bonjour.', 'zhuh DEE bohⁿ-ZHOOR'],
  ['Vous dites bonjour.', 'voo DEET bohⁿ-ZHOOR'],
  ['Ils disent bonjour.', 'eel DEEZ bohⁿ-ZHOOR'],
  ['Nous disons bonjour.', 'noo dee-ZOHⁿ bohⁿ-ZHOOR'],
  ['Je lis le menu.', 'zhuh LEE luh muh-NÜ'],
  ['Vous lisez le menu.', 'voo lee-ZAY luh muh-NÜ'],
  ['Ils lisent le menu.', 'eel LEEZ luh muh-NÜ'],
  ['Nous lisons le menu.', 'noo lee-ZOHⁿ luh muh-NÜ'],
  ['faire des progrès', 'FEHR day proh-GREH'],
  ['faire une erreur', 'FEHR ün eh-RUHR'],
  ['faire de la musique', 'FEHR duh lah mü-ZEEK'],
  ['faire un voyage', 'FEHR uhⁿ vwah-YAHZH'],
  ['faire les valises', 'FEHR lay vah-LEEZ'],
  ['faire semblant', 'FEHR sahⁿ-BLAHⁿ'],
  ['faire mal', 'FEHR MAL'],
  ['faire plaisir', 'FEHR pleh-ZEER'],
  ['faire de la natation', 'FEHR duh lah na-ta-SYOHⁿ'],
];

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  const r = await c.query<Record<string, unknown>>('select * from content_items where id = any($1)', [CANDIDATES]);
  const rows = r.rows.map((x) => ({
    id: String(x.id), kind: String(x.kind), level: String(x.level), theme: String(x.theme),
    fr: String(x.fr), en: String(x.en), respell: (x.respell as string | null) ?? undefined,
    gender: (x.gender as string | null) ?? undefined, drills: pgEnumArray(x.drills),
    version: Number(x.version ?? 1),
  })) as unknown as Item[];

  console.log('## 1. endingPopulation over the candidate imports\n');
  const joiners = endingPopulation(rows);
  console.log(`  ${rows.length} rows read, ${joiners.length} JOIN a1.03's measured ending population`);
  for (const j of joiners) console.log(`    JOINER  ${j.id}  ${JSON.stringify(j.fr)}  gender=${(j as { gender?: string }).gender ?? '-'} kind=${(j as { kind?: string }).kind}`);
  console.log('\n  per-row, so a single row can be swapped rather than the whole group dropped:');
  for (const row of rows) {
    const solo = endingPopulation([row]);
    console.log(`    ${solo.length ? 'JOINS ' : 'safe  '} ${row.id.padEnd(34)} ${JSON.stringify(row.fr).padEnd(28)} kind=${row.kind} g=${(row as { gender?: string }).gender ?? '-'} respell=${row.respell ?? '-'} drills=${(row.drills ?? []).join('/')}`);
  }

  console.log('\n## 2. dicteeMode over the candidate paradigm sentences\n');
  for (const [verb, sents] of Object.entries(FRAMES)) {
    console.log(`  ${verb}`);
    for (const s of sents) {
      const letters = s.replace(/[^\p{L}]/gu, '').length;
      console.log(`    ${dicteeMode(s) === 'letters' ? 'LETTERS' : 'words  '} ${String(letters).padStart(2)} letters  ${s}`);
    }
  }

  console.log('\n## 3. hasPlainNasalFor, both directions\n');
  for (const [fr, respell] of RESPELLS) {
    const clean = !hasPlainNasalFor(fr, respell);
    const broken = respell.replace(/ⁿ/g, 'n');
    const seen = hasPlainNasalFor(fr, broken);
    const tag = !respell.includes('ⁿ') ? 'no nasal ' : seen ? 'VISIBLE  ' : 'BLIND    ';
    console.log(`  ${tag} clean=${clean ? 'ok ' : 'NO '} ${fr.padEnd(24)} ${respell.padEnd(26)} broken="${broken}" flagged=${seen}`);
  }

  console.log('\n  stored respellings on the rows this build would import:\n');
  for (const row of rows) {
    if (!row.respell) { console.log(`    (none)   ${row.id.padEnd(34)} ${JSON.stringify(row.fr)}`); continue; }
    const flagged = hasPlainNasalFor(row.fr, row.respell);
    console.log(`    ${flagged ? 'FLAGGED' : 'clean  '} ${row.id.padEnd(34)} ${JSON.stringify(row.fr).padEnd(28)} ${row.respell}`);
  }

  console.log('\n## 4. Do the 8 authored expressions collide inside theme "verbes"?\n');
  const AUTHORED_FR = ['faire des progrès', 'faire une erreur', 'faire de la musique', 'faire un voyage', 'faire les valises', 'faire semblant', 'faire mal', 'faire plaisir'];
  const clash = await c.query<{ id: string; fr: string; kind: string }>(
    "select id, fr, kind from content_items where theme = 'verbes' and kind <> 'sentence' and lower(fr) = any($1::text[])",
    [AUTHORED_FR.map((s) => s.toLowerCase())],
  );
  console.log(`  ${clash.rowCount} collision(s) inside theme verbes`);
  for (const x of clash.rows) console.log(`    ${x.id} ${JSON.stringify(x.fr)} ${x.kind}`);
  const anywhere = await c.query<{ id: string; fr: string; theme: string }>(
    'select id, fr, theme from content_items where lower(fr) = any($1::text[])',
    [AUTHORED_FR.map((s) => s.toLowerCase())],
  );
  console.log(`  ${anywhere.rowCount} row(s) with these exact fr values anywhere:`);
  for (const x of anywhere.rows) console.log(`    ${x.id} ${JSON.stringify(x.fr)} [${x.theme}]`);

  console.log('\n## 5. Does theme "verbes" already hold any of the 18 paradigm sentences?\n');
  const sents = Object.values(FRAMES).flat();
  const dup = await c.query<{ id: string; fr: string; theme: string }>(
    'select id, fr, theme from content_items where fr = any($1::text[])', [sents],
  );
  console.log(`  ${dup.rowCount} exact match(es)`);
  for (const x of dup.rows) console.log(`    ${x.id} ${JSON.stringify(x.fr)} [${x.theme}]`);

  c.release();
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
