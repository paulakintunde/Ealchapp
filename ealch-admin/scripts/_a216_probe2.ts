/* a2.16 pre-flight, part 2. The contrast frames, the notation decision, the
 * homophone measurement, and the dictée modes.
 *
 *   pnpm tsx scripts/_a216_probe2.ts
 */
import './env';
import { Pool } from 'pg';
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';

const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const shape = (w: string) =>
  new RegExp(`(?<![\\p{L}\\p{N}'’-])${esc(w)}(?![\\p{L}\\p{N}'’-])`, 'iu');

/** Every candidate frame the lesson might use, with its dictée mode. */
const FRAMES = [
  "C'est un beau livre.", "C'est un bel arbre.", "C'est un bel homme.",
  "C'est un nouveau sac.", "C'est un nouvel hôtel.", "C'est un nouvel ami.",
  "C'est un vieux sac.", "C'est un vieil immeuble.", "C'est un vieil ami.",
  'Un beau livre.', 'Un bel arbre.', 'Un vieux sac.', 'Un vieil ami.',
  'Un nouveau sac.', 'Un nouvel ami.',
  'Il est beau.', 'Elle est belle.', 'Ils sont beaux.', 'Elles sont belles.',
  'Ils sont vieux.', 'Elles sont vieilles.', 'Elle est vieille.',
  'Il est nouveau.', 'Elle est nouvelle.', 'Ils sont nouveaux.', 'Elles sont nouvelles.',
  'de beaux amis', 'de vieux amis',
  'Le vieil homme.', 'Le bel arbre.', 'Le nouvel ami.',
];

/** Respellings the lesson would have to author. Run them all through the real
 *  checker before believing anything a brief says (ledger a2.14 §2). */
const CANDIDATE_RESPELLS: [string, string][] = [
  ['beau', 'BOH'], ['bel', 'BEL'], ['belle', 'BEL'], ['beaux', 'BOH'], ['belles', 'BEL'],
  ['nouveau', 'noo-VOH'], ['nouvel', 'noo-VEL'], ['nouvelle', 'noo-VEL'],
  ['nouveaux', 'noo-VOH'], ['nouvelles', 'noo-VEL'],
  ['vieux', 'VYUH'], ['vieil', 'VYEY'], ['vieille', 'VYEY'], ['vieilles', 'VYEY'],
  ["C'est un beau livre.", 'seh-t uhⁿ boh LEEVR'],
  ["C'est un bel arbre.", 'seh-t uhⁿ beh-LAHRBR'],
  ["C'est un vieux sac.", 'seh-t uhⁿ vyuh SAK'],
  ["C'est un vieil ami.", 'seh-t uhⁿ vyeh-ya-MEE'],
  ["C'est un nouveau sac.", 'seh-t uhⁿ noo-voh SAK'],
  ["C'est un nouvel ami.", 'seh-t uhⁿ noo-veh-la-MEE'],
  ['Il est vieux.', 'eel eh VYUH'],
  ['Elle est vieille.', 'el eh VYEY'],
  ['un appartement', 'uh-nah-par-tuh-MAHⁿ'],
  ['un immeuble', 'uh-nee-MUHBL'],
  ['un homme', 'uh-NOM'],
];

async function main() {
  const pg = new Pool({ connectionString: process.env.SUPABASE_DB_URL ?? process.env.DATABASE_URL });

  console.log('══ A. THE "C\'est un ___" FRAME, EVERY MEMBER ══');
  const { rows: sents } = await pg.query(
    `select id, fr, respell, theme, drills, status from content_items
      where kind = 'sentence' and status = 'published' and fr ilike '%c''est un%'`);
  for (const w of ['beau', 'bel', 'belle', 'nouveau', 'nouvel', 'nouvelle', 'vieux', 'vieil', 'vieille']) {
    const hit = sents.filter((r: any) => shape(w).test(r.fr ?? ''));
    console.log(`  ${w.padEnd(9)} ${hit.length}`);
    for (const r of hit) console.log(`      ${r.id.padEnd(40)} ${String(r.fr).padEnd(34)} [${r.respell ?? '-'}]  ${[...(r.drills ?? [])].join('/')}`);
  }

  console.log('\n══ B. ARE THE THIRD FORM AND THE FEMININE ONE SOUND? (stored rows) ══');
  const { rows: ws } = await pg.query(
    `select id, fr, respell, ipa from content_items where id = any($1) order by id`,
    [['fr.sons.adjectifs-essentiels.314', 'fr.sons.consonnes.138',
      'fr.sons.adjectifs-essentiels.315', 'fr.sons.adjectifs-essentiels.312',
      'fr.a1.rencontres.095', 'fr.sons.adjectifs-essentiels.005',
      'fr.sons.adjectifs-essentiels.007', 'fr.sons.adjectifs-essentiels.008',
      'fr.a1.rencontres.094']]);
  for (const r of ws) console.log(`  ${r.id.padEnd(40)} ${String(r.fr).padEnd(10)} respell=${String(r.respell).padEnd(9)} ipa=${r.ipa}`);
  const by = (id: string) => ws.find((r: any) => r.id === id);
  const pairs: [string, string, string][] = [
    ['bel / belle', 'fr.sons.adjectifs-essentiels.314', 'fr.sons.consonnes.138'],
    ['vieil / vieille', 'fr.sons.adjectifs-essentiels.315', 'fr.sons.adjectifs-essentiels.312'],
  ];
  for (const [name, a, b] of pairs) {
    const x = by(a), y = by(b);
    console.log(`  ${name.padEnd(16)} respell same=${x?.respell === y?.respell}   ipa same=${x?.ipa === y?.ipa}`);
  }

  console.log('\n══ C. dicteeMode OVER EVERY CANDIDATE FRAME ══');
  for (const f of FRAMES) {
    const m = dicteeMode(f);
    const letters = f.replace(/[^A-Za-zÀ-ÿ]/g, '').length;
    console.log(`  ${String(letters).padStart(2)}  ${m === 'letters' ? 'LETTERS' : 'words  '}  ${f}`);
  }

  console.log('\n══ D. hasPlainNasalFor OVER EVERY CANDIDATE RESPELLING ══');
  for (const [fr, rs] of CANDIDATE_RESPELLS) {
    console.log(`  ${hasPlainNasalFor(fr, rs) ? 'FLAGGED' : '   ok  '}  ${fr.padEnd(26)} ${rs}`);
  }

  console.log('\n══ E. ROWS CARRYING U+203F OR U+0153 THAT THIS LESSON MIGHT WANT ══');
  const { rows: bad } = await pg.query(
    `select id, fr, respell from content_items
      where (respell like '%' || chr(8255) || '%' or fr like '%' || chr(339) || '%')
        and (fr ilike '%bel %' or fr ilike '%vieil %' or fr ilike '%nouvel %'
          or fr ilike '%beau%' or fr ilike '%vieux%' or fr ilike '%nouveau%') order by id`);
  for (const r of bad) console.log(`  ${r.id.padEnd(40)} ${String(r.fr).padEnd(40)} [${r.respell ?? '-'}]`);

  console.log('\n══ F. THE ENCHAINEMENT PRECEDENT: hyphen across a word boundary ══');
  const { rows: ench } = await pg.query(
    `select id, fr, respell from content_items
      where respell is not null and id = any($1) order by id`,
    [['fr.a1.rencontres.073', 'fr.a1.amis.002', 'fr.sons.elision.012', 'fr.sons.elision.020',
      'fr.sons.alphabet.207', 'fr.a1.dictee.049', 'fr.a2.bureau.002']]);
  for (const r of ench) console.log(`  ${r.id.padEnd(40)} ${String(r.fr).padEnd(18)} [${r.respell}]  tie=${String(r.respell).includes('‿') ? 'YES' : 'no'}`);

  await pg.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
