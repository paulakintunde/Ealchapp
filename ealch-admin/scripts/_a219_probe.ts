/* a2.19 pre-flight. Le futur proche, seq 15.
 *
 * Measures the identity block, the id block, the two things the brief lists as
 * unverified that a database can answer, and the evidence for the construction
 * and its negative. The three that only a FILE can answer (what a1.18 says
 * about dropping ne, what a2.18 shipped for dans, whether a2.13's structure is
 * quotable) are read off the shipped source and recorded in the corpus header.
 *
 *     pnpm tsx scripts/_a219_probe.ts
 */
import './env';
import { Pool } from 'pg';
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const q = async (label: string, sql: string, params: unknown[] = []) => {
  const { rows } = await pool.query(sql, params as never[]);
  console.log(`\n### ${label}`);
  return rows;
};

async function main() {
  // ── 1. IDENTITY, byte for byte ────────────────────────────────────────────
  let rows = await q(
    '1. THE UNIT, from content_units',
    `select body from content_units where kind='curriculum_unit' and body->>'id'='a2.19'`,
  );
  console.log(JSON.stringify(rows[0]?.body, null, 2));

  rows = await q(
    '1b. UNITS DECLARING a2.19 AS A PREREQUISITE',
    `select body->>'id' as id, body->>'seq' as seq, body->>'title' as title
       from content_units where kind='curriculum_unit'
        and body->'prereqUnitIds' ? 'a2.19'`,
  );
  console.log(rows.length ? rows.map((r) => `  ${r.id} seq=${r.seq} ${r.title}`).join('\n') : '  NONE. a2.19 is a leaf.');

  rows = await q(
    '1c. THE NEIGHBOURS, seq 13..17',
    `select body->>'id' as id, body->>'seq' as seq, body->>'title' as t, body->>'sub' as sub,
            body->'lessonIds' as lessons
       from content_units where kind='curriculum_unit' and body->>'level'='A2'
        and (body->>'seq')::int between 13 and 17 order by 2`,
  );
  for (const r of rows) console.log(`  ${r.id} seq=${r.seq} ${String(r.t).padEnd(30)} ${r.sub}  lessons=${JSON.stringify(r.lessons)}`);

  // ── 2. THE ID BLOCK ───────────────────────────────────────────────────────
  rows = await q(
    '2. fr.a2.verbes ROW COUNT AND MAX (ledger: 374 after a2.15, max .486)',
    `select count(*) as n, max(split_part(id,'.',4)::int) as maxid
       from content_items where id like 'fr.a2.verbes.%'`,
  );
  console.log(`  n=${rows[0].n}  max=${rows[0].maxid}`);

  rows = await q(
    '2b. ANY ROW AT OR ABOVE fr.a2.verbes.487',
    `select id, fr from content_items
      where id like 'fr.a2.verbes.%' and split_part(id,'.',4)::int >= 487 order by id`,
  );
  console.log(rows.length ? rows.map((r) => `  ${r.id} ${r.fr}`).join('\n') : '  NONE. .487 upward is clear.');

  rows = await q(
    '2c. THEME TOTALS',
    `select theme, count(*) filter (where status='published') as published, count(*) as all_rows
       from content_items where theme in ('verbes','verbes-essentiels') group by 1 order by 1`,
  );
  for (const r of rows) console.log(`  ${r.theme.padEnd(20)} published=${r.published} all=${r.all_rows}`);

  // ── 3. aller: THE HEADWORD AND ITS PARADIGM ───────────────────────────────
  rows = await q(
    "3. `aller` AS A HEADWORD, every status",
    `select id, theme, status, respell, ipa, en, gender from content_items where fr='aller' order by id`,
  );
  for (const r of rows) console.log(`  ${r.id.padEnd(36)} ${r.theme.padEnd(22)} ${r.status.padEnd(10)} [${r.respell}] ${r.en} gender=${r.gender ?? '-'}`);

  rows = await q(
    '3b. a2.02 ROWS (fr.a2.verbes.261..289), which conjugate aller',
    `select id, fr, respell from content_items
      where id like 'fr.a2.verbes.%' and split_part(id,'.',4)::int between 261 and 289 order by id`,
  );
  for (const r of rows) console.log(`  ${r.id.padEnd(24)} ${String(r.fr).padEnd(46)} ${r.respell ?? ''}`);

  // ── 4. THE CONSTRUCTION, COUNTED ──────────────────────────────────────────
  rows = await q(
    '4. PUBLISHED SENTENCES HOLDING aller + INFINITIVE',
    `select count(*) as total,
            count(*) filter (where respell is not null and respell <> '') as respelled
       from content_items
      where status='published'
        and fr ~* '(\\y)(vais|vas|va|allons|allez|vont) +(pas +)?[a-zà-ÿ]{3,}(er|ir|re|oir)(\\y|$)'`,
  );
  console.log(`  total=${rows[0].total}   with a respelling=${rows[0].respelled}`);

  rows = await q(
    '4b. THE RESPELLED ONES, in full',
    `select id, theme, fr, respell from content_items
      where status='published' and respell is not null and respell <> ''
        and fr ~* '(\\y)(vais|vas|va|allons|allez|vont) +(pas +)?[a-zà-ÿ]{3,}(er|ir|re|oir)(\\y|$)'
      order by id`,
  );
  console.log(`  ${rows.length} rows`);
  for (const r of rows) console.log(`  ${r.id.padEnd(38)} ${String(r.fr).padEnd(50)} ${r.respell}`);

  rows = await q(
    '4c. NEGATED futur proche: ne + aller + pas + infinitive',
    `select id, theme, fr, respell from content_items
      where status='published'
        and fr ~* '(\\y|'')(ne|n'') +(vais|vas|va|allons|allez|vont) +pas +[a-zà-ÿ]{3,}(er|ir|re|oir)(\\y|$)'
      order by id`,
  );
  console.log(`  ${rows.length} rows`);
  for (const r of rows) console.log(`  ${r.id.padEnd(38)} ${String(r.fr).padEnd(50)} ${r.respell ?? ''}`);

  rows = await q(
    '4d. THE WRONG ORDER, which must exist nowhere: aller + infinitive + pas',
    `select id, fr from content_items
      where fr ~* '(\\y)(vais|vas|va|allons|allez|vont) +[a-zà-ÿ]{3,}(er|ir|re|oir) +pas(\\y|$)' order by id`,
  );
  console.log(rows.length ? rows.map((r) => `  ${r.id} ${r.fr}`).join('\n') : '  NONE, as it should be.');

  rows = await q(
    '4e. aller + A PLACE (the other job)',
    `select count(*) as n from content_items
      where status='published' and fr ~* '(\\y)(vais|vas|va|allons|allez|vont) +(à|au|aux|en|chez|dans|sur)\\y'`,
  );
  console.log(`  ${rows[0].n} rows`);

  rows = await q(
    '4f. aller + A PLACE, respelled, the importable ones',
    `select id, theme, fr, respell from content_items
      where status='published' and respell is not null and respell <> ''
        and fr ~* '(\\y)(vais|vas|va|allons|allez|vont) +(à|au|aux|en|chez)\\y'
      order by id limit 40`,
  );
  console.log(`  ${rows.length} rows shown`);
  for (const r of rows) console.log(`  ${r.id.padEnd(38)} ${String(r.fr).padEnd(46)} ${r.respell}`);

  // ── 5. THE FUTUR SIMPLE, which must be named and never conjugated ─────────
  rows = await q(
    '5. FUTUR SIMPLE FORMS ALREADY PUBLISHED (partirai, mangerai, ...)',
    `select count(*) as n from content_items
      where status='published' and fr ~* '\\y[a-zà-ÿ]{3,}(erai|erez|eras|erons|eront|irai|iras|irez|irons|iront)\\y'`,
  );
  console.log(`  ${rows[0].n} rows`);

  // ── 6. INFINITIVES TO IMPORT, ACROSS THEMES ───────────────────────────────
  rows = await q(
    '6. CANDIDATE INFINITIVES: single-word, ungendered, respelled, one row per fr',
    `select fr, count(*) as n, min(id) as an_id, min(theme) as a_theme
       from content_items
      where status='published' and kind='word' and gender is null
        and respell is not null and respell <> '' and fr !~ ' '
        and fr in ('manger','partir','sortir','dormir','travailler','regarder','écouter','danser',
                   'rentrer','arriver','attendre','vendre','choisir','finir','payer','étudier',
                   'voyager','rester','appeler','téléphoner','acheter','répondre','prendre','faire',
                   'dire','lire','venir','pouvoir','vouloir','devoir','savoir','commencer','pleuvoir',
                   'chanter','visiter','marcher','oublier','fermer','trouver','demander','jouer')
      group by 1 order by 1`,
  );
  for (const r of rows) console.log(`  ${String(r.fr).padEnd(14)} n=${String(r.n).padStart(2)}  ${r.an_id.padEnd(38)} ${r.a_theme}`);

  rows = await q(
    '6b. EVERY ROW FOR THE SHORTLIST, so an import picks the right one',
    `select fr, id, theme, respell, ipa, en, status, gender, drills from content_items
      where fr in ('manger','partir','travailler','regarder','sortir','danser','pleuvoir','payer','dormir')
      order by fr, id`,
  );
  for (const r of rows) console.log(`  ${String(r.fr).padEnd(12)} ${r.id.padEnd(36)} ${String(r.theme).padEnd(24)} ${String(r.status).padEnd(10)} [${r.respell ?? ''}] ${r.en} g=${r.gender ?? '-'} d=${JSON.stringify(r.drills)}`);

  // ── 7. dans, WHICH a2.18 HANDED FORWARD ───────────────────────────────────
  rows = await q(
    "7. a2.18's `dans` ROWS (fr.a2.prepositions-essentielles.169+)",
    `select id, fr, respell, en from content_items
      where id like 'fr.a2.prepositions-essentielles.%'
        and split_part(id,'.',4)::int >= 169 and fr ~* '\\ydans\\y' order by id`,
  );
  for (const r of rows) console.log(`  ${r.id.padEnd(42)} ${String(r.fr).padEnd(40)} ${r.respell ?? ''}`);

  rows = await q(
    '7b. dans + A DURATION, published, respelled',
    `select id, theme, fr, respell from content_items
      where status='published' and respell is not null and respell <> ''
        and fr ~* '\\ydans +(un|une|deux|trois|quatre|cinq|six|dix|quinze|vingt|quelques|\\d+) +(seconde|minute|heure|jour|semaine|mois|an)'
      order by id`,
  );
  console.log(`  ${rows.length} rows`);
  for (const r of rows) console.log(`  ${r.id.padEnd(42)} ${String(r.fr).padEnd(44)} ${r.respell}`);

  // ── 8. THE NASALS, THROUGH THE REAL CHECKER ───────────────────────────────
  console.log('\n### 8. CANDIDATE RESPELLINGS UNDER hasPlainNasalFor');
  const cands: Array<[string, string]> = [
    ['aller', 'ah-LAY'], ['je vais', 'zhuh VEH'], ['tu vas', 'tü VAH'], ['il va', 'eel VAH'],
    ['nous allons', 'noo za-LOHN'], ['nous allons', 'noo za-LOHⁿ'],
    ['vous allez', 'voo za-LAY'], ['ils vont', 'eel VOHN'], ['ils vont', 'eel VOHⁿ'],
    ['manger', 'mahn-ZHAY'], ['manger', 'mahⁿ-ZHAY'],
    ['partir', 'par-TEER'], ['demain', 'duh-MAN'], ['demain', 'duh-MEHⁿ'], ['demain', 'duh-MAⁿ'],
    ['dans', 'DAHⁿ'], ['dans', 'DAHN'],
    ['maintenant', 'mant-NAHⁿ'], ['maintenant', 'mahⁿt-NAHⁿ'],
    ['bientôt', 'byan-TOH'], ['bientôt', 'byehⁿ-TOH'],
    ['pas', 'PAH'], ['ne', 'nuh'], ['pleuvoir', 'pluh-VWAR'],
    ['Je ne vais pas manger.', 'zhuh nuh veh pah mahⁿ-ZHAY'],
    ['Je vais manger.', 'zhuh veh mahⁿ-ZHAY'],
    ['On va partir.', 'ohⁿ va par-TEER'],
    ['On va partir.', 'ohn va par-TEER'],
  ];
  for (const [fr, re] of cands) {
    console.log(`  ${fr.padEnd(24)} ${re.padEnd(30)} flagged=${hasPlainNasalFor(fr, re) ? 'YES' : 'no '}`);
  }

  rows = await q(
    '8b. HOW THE CORPUS ALREADY RESPELLS THE aller FORMS',
    `select id, fr, respell from content_items
      where status='published' and respell is not null and respell <> ''
        and fr in ('je vais','tu vas','il va','elle va','on va','nous allons','vous allez','ils vont','elles vont','aller','demain','bientôt','maintenant','dans')
      order by fr, id`,
  );
  for (const r of rows) console.log(`  ${r.id.padEnd(40)} ${String(r.fr).padEnd(14)} ${r.respell}`);

  rows = await q(
    '8c. WHAT vont / allons LOOK LIKE INSIDE PUBLISHED RESPELLINGS',
    `select id, fr, respell from content_items
      where status='published' and respell is not null
        and (fr ~* '\\yvont\\y' or fr ~* '\\yallons\\y') order by id limit 25`,
  );
  for (const r of rows) console.log(`  ${r.id.padEnd(40)} ${String(r.fr).padEnd(44)} ${r.respell}`);

  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
