/* a2.18 pre-flight, second pass. The theme decision, the respellings to read
 * off, the `il y a` distinguisher refined, and what a1.12 and a2.04 shipped.
 *
 *     pnpm tsx scripts/_a218_probe2.ts
 */
import './env';
import { Pool } from 'pg';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const q = async (label: string, sql: string) => {
  const { rows } = await pool.query(sql);
  console.log(`\n### ${label}`);
  return rows;
};

async function main() {
  // ── THE THEME ──────────────────────────────────────────────────────────────
  let rows = await q(
    'A. fr.a2.prepositions-essentielles .001..030 — is this theme place-only?',
    `select id, kind, fr from content_items
      where id like 'fr.a2.prepositions-essentielles.0%'
        and split_part(id,'.',4)::int <= 30 order by id`,
  );
  for (const r of rows) console.log(`  ${r.id.padEnd(38)} ${String(r.kind).padEnd(9)} ${r.fr}`);

  rows = await q(
    'B. TIME PREPOSITIONS ALREADY LIVING IN prepositions-essentielles',
    `select id, kind, fr from content_items
      where theme='prepositions-essentielles' and status='published'
        and fr ~* '\\y(durant|depuis|pendant|avant|apr[èe]s|jusqu)'
      order by id limit 40`,
  );
  console.log(`  ${rows.length} shown`);
  for (const r of rows) console.log(`  ${r.id.padEnd(38)} ${String(r.kind).padEnd(9)} ${r.fr}`);

  rows = await q(
    'C. HEADWORD ROWS (kind<>sentence) IN EACH CANDIDATE THEME',
    `select theme, kind, count(*) as n from content_items
      where theme in ('prepositions-essentielles','temps-et-frequence') and status='published'
      group by 1,2 order by 1,2`,
  );
  for (const r of rows) console.log(`  ${r.theme.padEnd(28)} ${String(r.kind).padEnd(10)} ${r.n}`);

  // ── RESPELLINGS TO READ OFF ────────────────────────────────────────────────
  rows = await q(
    'D. PUBLISHED ROWS RESPELLING `en` AS AHⁿ (a value to read off)',
    `select id, fr, respell from content_items
      where status='published' and respell ~ 'AHⁿ' and length(fr) < 40
      order by id limit 30`,
  );
  for (const r of rows) console.log(`  ${r.id.padEnd(38)} ${String(r.fr).padEnd(24)} ${r.respell}`);

  rows = await q(
    'E. PUBLISHED ROWS RESPELLING pendant / dedans / -ant IN THE HOUSE FORM',
    `select id, fr, respell from content_items
      where status='published' and respell is not null
        and (respell ~ 'AHⁿ' ) and fr ~* '\\y(pendant|dedans|grand|temps|quand|comment)\\y'
      order by id limit 30`,
  );
  for (const r of rows) console.log(`  ${r.id.padEnd(38)} ${String(r.fr).padEnd(34)} ${r.respell}`);

  rows = await q(
    'F. ANY RESPELLING OF A PHRASE CONTAINING `il y a`',
    `select id, fr, respell from content_items
      where respell is not null and respell <> '' and fr ~* '\\yil y a\\y'
      order by id limit 20`,
  );
  console.log(`  ${rows.length} rows`);
  for (const r of rows) console.log(`  ${r.id.padEnd(38)} ${String(r.fr).padEnd(34)} ${r.respell}`);

  rows = await q(
    'F2. HOW THE CORPUS RESPELLS `il`, `y`, `a` SEPARATELY',
    `select id, fr, respell from content_items
      where status='published' and respell is not null and respell <> ''
        and fr in ('il','y','a','il y a','elle','ils')
      order by fr, id limit 20`,
  );
  for (const r of rows) console.log(`  ${r.id.padEnd(38)} ${String(r.fr).padEnd(12)} ${r.respell}`);

  // ── THE il y a DISTINGUISHER, REFINED ──────────────────────────────────────
  rows = await q(
    'G. `il y a` + DURATION WITH SOMETHING AFTER IT (the brief\'s rule breaks here)',
    `select id, fr from content_items
      where status='published'
        and fr ~* '\\yil y a +(un|une|deux|trois|quelques|plusieurs|dix|vingt) +(seconde|minute|heure|jour|semaine|mois|an|ann[ée]e)s? +[a-zà-ÿ]'
      order by id`,
  );
  console.log(`  ${rows.length} rows`);
  for (const r of rows) console.log(`  ${r.id.padEnd(38)} ${r.fr}`);

  rows = await q(
    'H. `il y a longtemps` (an ago with no number)',
    `select id, fr from content_items
      where status='published' and fr ~* '\\yil y a +longtemps' order by id`,
  );
  console.log(`  ${rows.length} rows`);
  for (const r of rows) console.log(`  ${r.id.padEnd(38)} ${r.fr}`);

  // ── depuis + TENSE, REFINED TO AVOIR ONLY ──────────────────────────────────
  rows = await q(
    'I. depuis SENTENCES HOLDING AN AVOIR PASSÉ COMPOSÉ (unambiguous)',
    `select count(*) as n from content_items
      where status='published' and kind='sentence' and fr ~* '\\ydepuis\\y'
        and fr ~* '(\\y|'')(ai|as|avons|avez|ont) +(pas +|jamais +|plus +|bien +|d[ée]j[àa] +)?[a-zà-ÿ]{2,}(é|és|ée|ées|i|is|it|u|us|ue)\\y'`,
  );
  console.log(`  ${rows[0].n} of 560`);

  rows = await q(
    'I2. pendant SENTENCES HOLDING AN AVOIR PASSÉ COMPOSÉ',
    `select count(*) as n from content_items
      where status='published' and kind='sentence' and fr ~* '\\ypendant\\y'
        and fr ~* '(\\y|'')(ai|as|avons|avez|ont) +(pas +|jamais +|plus +|bien +|d[ée]j[àa] +)?[a-zà-ÿ]{2,}(é|és|ée|ées|i|is|it|u|us|ue)\\y'`,
  );
  console.log(`  ${rows[0].n} of 447`);

  rows = await q(
    'J. depuis + A PRESENT-TENSE VERB, THE SHAPE THE LESSON TEACHES',
    `select id, theme, fr from content_items
      where status='published' and kind='sentence'
        and fr ~* '\\y(habite|habitons|travaille|travaillons|vis|vivons|apprends|attends|joue|étudie|tousse|suis)\\y'
        and fr ~* '\\ydepuis\\y'
      order by id limit 25`,
  );
  console.log(`  ${rows.length} shown`);
  for (const r of rows) console.log(`  ${r.id.padEnd(38)} ${r.fr}`);

  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
