/* a2.04 pre-flight, part 3: which of the phrases this lesson wants can reach a
 * CARD. a2.13 §1: a corpus figure counts evidence, and a row without a respell
 * reaches a card the learner cannot say.
 *
 *     pnpm tsx scripts/_a204_probe3.ts
 */
import './env';
import { Pool } from 'pg';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const B = (t: string) => `\\y${t}\\y`;

async function main() {
  const c = await pool.connect();
  const L: string[] = [];
  const say = (s = '') => L.push(s);

  say('## A. chez rows that are CARD-READY (respell not null)');
  const chez = await c.query(
    `select id, theme, fr, respell, kind, drills, gender, level from content_items
      where status = 'published' and respell is not null and fr ~* '\\ychez\\y' order by id`,
  );
  say(`  ${chez.rowCount} rows`);
  for (const x of chez.rows as Record<string, unknown>[]) {
    say(`    ${String(x.id).padEnd(42)} ${String(x.kind).padEnd(9)} lvl=${x.level}  ${x.fr}   [${x.respell}]  drills=${JSON.stringify(x.drills)}`);
  }
  say();

  say('## B. Card-ready rows for each phrase the lesson wants');
  for (const t of [
    'à Paris', 'de Paris', 'à Lyon', 'à Montréal',
    'au restaurant', 'au cinéma', 'à la maison', 'au marché', 'au parc',
    'à la gare', "à l'école", 'au bureau', 'à la banque', "à l'hôpital",
    'en France', 'au Japon', 'aux États-Unis', 'du Japon', 'de France',
    'en Europe', 'chez moi', 'chez nous', 'chez le médecin',
  ]) {
    const r = await c.query(
      `select id, fr, respell from content_items
        where status = 'published' and respell is not null and fr ~* ('\\y' || $1 || '\\y')
        order by id limit 5`,
      [t],
    );
    say(`  ${t.padEnd(16)} ${r.rowCount} card-ready`);
    for (const x of r.rows as Record<string, unknown>[]) say(`      ${String(x.id).padEnd(40)} ${x.fr}   [${x.respell}]`);
  }
  say();

  say('## C. `en` as a preposition: how many respelled rows, and in which form');
  const en = await c.query(
    `select
       count(*) filter (where respell ~ 'ahⁿ')::int as sup_lower,
       count(*) filter (where respell ~ 'AHⁿ')::int as sup_upper,
       count(*) filter (where respell ~ 'ahn')::int as plain_lower,
       count(*) filter (where respell ~ 'AHN')::int as plain_upper
     from content_items
     where status = 'published' and respell is not null and fr ~* '\\yen\\y'`,
  );
  say(`  ${JSON.stringify(en.rows[0])}`);
  const enPhrase = await c.query(
    `select id, fr, respell from content_items
      where status = 'published' and respell is not null
        and fr ~* '\\yen (France|Belgique|Espagne|Italie|Allemagne|Europe|Iran)\\y'
      order by id`,
  );
  say(`  en + country/continent, card-ready: ${enPhrase.rowCount}`);
  for (const x of enPhrase.rows as Record<string, unknown>[]) say(`      ${String(x.id).padEnd(40)} ${x.fr}   [${x.respell}]`);
  say();

  say('## D. Does the corpus put `chez` in front of a place, at ANY status?');
  const bad = await c.query(
    `select id, status, fr from content_items
      where fr ~* $q$\ychez\s+(le|la|les|un|une|l['’])\s*(boulangerie|banque|poste|restaurant|cinema|cinéma|gare|ecole|école|magasin|hopital|hôpital|pharmacie|maison|bureau|parc|musee|musée|hotel|hôtel)\y$q$
      order by id`,
  );
  say(`  ${bad.rowCount} rows`);
  for (const x of bad.rows as Record<string, unknown>[]) say(`    ${x.id} [${x.status}] ${x.fr}`);
  say();

  say('## E. The person nouns behind `chez le`, counted');
  const people = await c.query(
    `select lower(substring(fr from $q$(?i)\ychez\s+l['’]?[ea]?s?\s*([\p{L}-]+)$q$)) as who, count(*)::int as n
       from content_items where status = 'published' and fr ~* '\\ychez\\y'
      group by 1 order by n desc limit 30`,
  );
  say(`  ${(people.rows as Record<string, unknown>[]).map((x) => `${x.who}(${x.n})`).join(' ')}`);
  say();

  say('## F. a1.03 ending population impact: any single-word gendered row this lesson might author');
  const pop = await c.query(
    `select count(*)::int as n from content_items
      where gender is not null and kind = 'word' and fr !~ ' ' and status = 'published'`,
  );
  say(`  gendered single-word published rows: ${pop.rows[0].n}`);
  say();

  say('## G. Row counts, for the block discipline');
  for (const p of ['fr.a2.prepositions-essentielles.', 'fr.a1.prepositions-essentielles.', 'fr.a2.pays-et-nationalites.']) {
    const r = await c.query(`select count(*)::int as n, max(id) as mx from content_items where id like $1 || '%'`, [p]);
    say(`  ${p.padEnd(38)} count=${r.rows[0].n}  max=${r.rows[0].mx}`);
  }

  console.log(L.join('\n'));
  c.release();
  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
