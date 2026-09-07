/* a2.04 pre-flight, part 4: the respelling decisions, measured rather than
 * picked. Which superscript form the house uses for /ɛ̃/, which of the rows this
 * lesson wants to import are flagged by the real `hasPlainNasalFor`, and which
 * carry the banned U+203F tie.
 *
 *     pnpm tsx scripts/_a204_probe4.ts
 */
import './env';
import { Pool } from 'pg';
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

/** Every row a2.04 is currently minded to import or display. */
const CANDIDATES = [
  // the preposition itself
  'fr.sons.muettes.009', 'fr.sons.mots-essentiels.019',
  // people
  'fr.a2.systeme-de-sante.001', 'fr.sons.faux-amis.027', 'fr.b1.soins.032',
  'fr.a2.systeme-de-sante.042', 'fr.b1.soins.051',
  'fr.sons.muettes.038', 'fr.a1.marche.021',
  'fr.a1.animaux-domestiques.108', 'fr.a1.animaux-domestiques.130',
  'fr.a1.famille.025', 'fr.a1.amis.011', 'fr.a1.amis.012',
  'fr.a1.metiers.102', 'fr.a1.amis.070',
  // chez phrases already card-ready
  'fr.a1.amis.030', 'fr.a1.amis.059', 'fr.a1.pronoms-essentiels.075',
  'fr.a2.pronoms-essentiels.055', 'fr.a1.salutations-de-base.023',
  'fr.a1.famille.124', 'fr.a1.famille.125', 'fr.a1.famille.126',
  'fr.a1.verbes-essentiels.026', 'fr.sons.liaisons.177',
  'fr.sons.nasales.032', 'fr.sons.nasales.109', 'fr.sons.nasales.157',
  'fr.sons.liaisons.157', 'fr.sons.voyelles.449', 'fr.b2.rp-maison.016',
  // places
  'fr.a2.communaute.043', 'fr.a2.courses.024',
  'fr.a1.au-restaurant.001', 'fr.a2.verbes-essentiels.016',
  'fr.a1.la-ville.103', 'fr.sons.consonnes.156', 'fr.a1.la-ville.089',
  'fr.a1.deplacements.003', 'fr.a1.la-ville.105', 'fr.a1.ecole.013',
  'fr.a1.la-ville.012', 'fr.a1.cinema.001',
  // à + place, card-ready
  'fr.a1.routines.064', 'fr.a1.routines.063', 'fr.a1.routines.067',
  'fr.a2.verbes.261', 'fr.sons.alphabet.455', 'fr.sons.questions.134',
  // cities
  'fr.sons.muettes.004', 'fr.sons.elision.029', 'fr.sons.elision.062',
  'fr.a2.verbes.285', 'fr.sons.nasales.075',
  // countries, from a1.22
  'fr.a1.pays-et-nationalites.001', 'fr.a1.pays-et-nationalites.003',
  'fr.a1.pays-et-nationalites.011', 'fr.a1.pays-et-nationalites.051',
  'fr.a1.pays-et-nationalites.043', 'fr.sons.nasales.029',
  'fr.sons.liaisons.059',
];

async function main() {
  const c = await pool.connect();
  const L: string[] = [];
  const say = (s = '') => L.push(s);

  say('## A. Every candidate row through the REAL hasPlainNasalFor');
  say();
  const r = await c.query(
    `select id, theme, kind, fr, en, respell, ipa, gender, level, status, drills, tags, example, register, notes
       from content_items where id = any($1) order by id`,
    [CANDIDATES],
  );
  const found = new Set<string>();
  let flagged = 0;
  for (const x of r.rows as Record<string, string | null>[]) {
    found.add(x.id!);
    const tie = (x.respell ?? '').includes('‿') || (x.ipa ?? '').includes('‿');
    const f = x.respell ? hasPlainNasalFor(x.fr!, x.respell) : false;
    if (f) flagged += 1;
    say(`  ${x.id!.padEnd(34)} ${f ? 'FLAGGED ' : '        '}${tie ? 'U+203F ' : '       '}${x.fr}   [${x.respell ?? '-'}]`);
  }
  for (const id of CANDIDATES) if (!found.has(id)) say(`  ${id.padEnd(34)} MISSING`);
  say();
  say(`  ${flagged} of ${found.size} flagged by the shared checker`);
  say();

  say('## B. How the house respells /ɛ̃/, counted across every published row');
  const forms = await c.query(
    `select
       count(*) filter (where respell ~ 'Aⁿ')::int   as a_sup,
       count(*) filter (where respell ~ 'AHⁿ')::int  as ah_sup,
       count(*) filter (where respell ~ 'EHⁿ')::int  as eh_sup,
       count(*) filter (where respell ~ 'AⁿN')::int  as junk
     from content_items where status = 'published' and respell is not null`,
  );
  say(`  ${JSON.stringify(forms.rows[0])}`);
  for (const w of ['médecin', 'dentiste', 'copain', 'demain', 'bien', 'voisin', 'pain', 'main']) {
    const q = await c.query(
      `select respell, count(*)::int as n from content_items
        where status = 'published' and respell is not null and fr ~* ('\\y' || $1 || '\\y')
        group by 1 order by n desc limit 4`,
      [w],
    );
    say(`  ${w.padEnd(10)} ${(q.rows as Record<string, unknown>[]).map((x) => `${x.respell}(${x.n})`).join('  ')}`);
  }
  say();

  say('## C. The exact respelling of `médecin` and `dentiste` in every row');
  const two = await c.query(
    `select id, fr, respell from content_items
      where status = 'published' and respell is not null
        and (fr ~* '\\ymédecin\\y' or fr ~* '\\ydentiste\\y')
      order by id limit 25`,
  );
  for (const x of two.rows as Record<string, string>[]) {
    say(`    ${x.id.padEnd(36)} ${hasPlainNasalFor(x.fr, x.respell) ? 'FLAGGED' : '   ok  '} ${x.fr}   [${x.respell}]`);
  }
  say();

  say('## D. Duplicate-fr guard: does prepositions-essentielles already hold any of these?');
  const wanted = [
    'chez le médecin', 'chez le dentiste', 'chez le boulanger', 'chez Marie',
    'chez moi', 'chez nous', 'à la boulangerie', 'à Paris', 'en France',
    'au Japon', 'aux États-Unis', 'chez le coiffeur', 'chez le voisin',
  ];
  for (const w of wanted) {
    const q = await c.query(
      `select id, status from content_items where theme = 'prepositions-essentielles' and lower(fr) = lower($1)`,
      [w],
    );
    say(`  ${w.padEnd(20)} ${q.rowCount ? (q.rows as Record<string, string>[]).map((x) => `${x.id}[${x.status}]`).join(' ') : 'free'}`);
  }
  say();

  say('## E. Existing fr values in prepositions-essentielles that start with chez or à');
  const th = await c.query(
    `select id, fr from content_items where theme = 'prepositions-essentielles'
       and (fr ~* '^chez' or fr ~* '^à ' or fr ~* '^au ' or fr ~* '^en ')
     order by id`,
  );
  say(`  ${th.rowCount} rows`);
  for (const x of th.rows as Record<string, string>[]) say(`    ${x.id.padEnd(38)} ${x.fr}`);

  console.log(L.join('\n'));
  c.release();
  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
