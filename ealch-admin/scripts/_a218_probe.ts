/* a2.18 pre-flight. Prépositions de temps, seq 14.
 *
 * Measures the things the brief asserts and the things it lists as unverified:
 * the two jobs of `il y a` counted apart, whether `depuis` really takes the
 * present in this corpus, which theme this lesson belongs in, and what the
 * three nasal respellings do under the real checker.
 *
 *     pnpm tsx scripts/_a218_probe.ts
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
  // ── 1. THEMES ──────────────────────────────────────────────────────────────
  let rows = await q(
    '1. CANDIDATE THEMES, by level prefix',
    `select theme,
            split_part(id,'.',2) as lvl,
            count(*) as n,
            max(split_part(id,'.',4)::int) as maxid
       from content_items
      where theme in ('temps-et-frequence','prepositions-essentielles','heure-et-date')
      group by 1,2 order by 1,2`,
  );
  for (const r of rows) console.log(`  ${r.theme.padEnd(28)} ${r.lvl.padEnd(5)} n=${String(r.n).padStart(4)} max=${r.maxid}`);

  rows = await q(
    '1b. STATUS BREAKDOWN of the two candidates',
    `select theme, status, count(*) as n from content_items
      where theme in ('temps-et-frequence','prepositions-essentielles')
      group by 1,2 order by 1,2`,
  );
  for (const r of rows) console.log(`  ${r.theme.padEnd(28)} ${r.status.padEnd(12)} ${r.n}`);

  rows = await q(
    '1c. WHAT fr.a2.temps-et-frequence HOLDS (first 20)',
    `select id, kind, fr from content_items
      where id like 'fr.a2.temps-et-frequence.%' order by id limit 20`,
  );
  for (const r of rows) console.log(`  ${r.id.padEnd(36)} ${String(r.kind).padEnd(9)} ${r.fr}`);

  rows = await q(
    '1d. HOW MANY temps-et-frequence ROWS HOLD EACH PREPOSITION',
    `select p.w, count(*) filter (where i.fr ~* ('\\y'||p.w||'\\y')) as n
       from (values ('depuis'),('pendant'),('dans'),('en'),('pour'),('il y a')) p(w)
       cross join content_items i
      where i.theme='temps-et-frequence' and i.status='published'
      group by 1 order by 2 desc`,
  );
  for (const r of rows) console.log(`  ${String(r.w).padEnd(10)} ${r.n}`);

  rows = await q(
    '1e. AND HOW MANY prepositions-essentielles ROWS DO',
    `select p.w, count(*) filter (where i.fr ~* ('\\y'||p.w||'\\y')) as n
       from (values ('depuis'),('pendant'),('dans'),('en'),('pour'),('il y a')) p(w)
       cross join content_items i
      where i.theme='prepositions-essentielles' and i.status='published'
      group by 1 order by 2 desc`,
  );
  for (const r of rows) console.log(`  ${String(r.w).padEnd(10)} ${r.n}`);

  rows = await q(
    '1f. fr.a2.prepositions-essentielles ROW COUNT AND MAX (a2.04 left it at 153)',
    `select count(*) as n, max(split_part(id,'.',4)::int) as maxid
       from content_items where id like 'fr.a2.prepositions-essentielles.%'`,
  );
  console.log(`  n=${rows[0].n}  max=${rows[0].maxid}`);

  // ── 2. THE TRAP: il y a, COUNTED APART ─────────────────────────────────────
  rows = await q(
    '2. `il y a` FOLLOWED BY A TIME EXPRESSION = "ago"',
    `select id, theme, fr from content_items
      where status='published'
        and fr ~* '\\yil y a +(un|une|deux|trois|quatre|cinq|six|sept|huit|neuf|dix|quelques|plusieurs|\\d+) +(seconde|minute|heure|jour|semaine|mois|an|ann[ée]e|si[èe]cle|d[ée]cennie)'
      order by id`,
  );
  console.log(`  ${rows.length} rows`);
  for (const r of rows.slice(0, 30)) console.log(`  ${r.id.padEnd(38)} ${r.fr}`);

  rows = await q(
    '2b. `il y a` FOLLOWED BY AN ARTICLE = "there is"',
    `select count(*) as n from content_items
      where status='published' and fr ~* '\\yil y a +(un|une|des|du|de la|le|la|les|beaucoup|trop|plus|moins)\\y'
        and fr !~* '\\yil y a +(un|une|deux|trois|quatre|cinq|six|sept|huit|neuf|dix|quelques|plusieurs) +(seconde|minute|heure|jour|semaine|mois|an|ann[ée]e|si[èe]cle|d[ée]cennie)'`,
  );
  console.log(`  ${rows[0].n} rows`);

  rows = await q(
    '2c. EVERY `il y a` ROW, WHAT WORD FOLLOWS',
    `select lower((regexp_match(fr, 'il y a +([A-Za-zÀ-ÿ''’]+)', 'i'))[1]) as nxt, count(*) as n
       from content_items where status='published' and fr ~* '\\yil y a\\y'
       group by 1 order by 2 desc limit 25`,
  );
  for (const r of rows) console.log(`  ${String(r.nxt).padEnd(14)} ${r.n}`);

  // ── 3. depuis + WHICH TENSE ────────────────────────────────────────────────
  rows = await q(
    '3. depuis IN A SENTENCE ALSO HOLDING A PASSÉ COMPOSÉ AUXILIARY',
    `select id, theme, fr from content_items
      where status='published' and kind='sentence' and fr ~* '\\ydepuis\\y'
        and fr ~* '(\\y|'')(ai|as|a|avons|avez|ont|suis|es|est|sommes|êtes|sont) +[a-zà-ÿ]+(é|ée|és|ées|i|is|it|u|us|ue)\\y'
      order by id limit 20`,
  );
  console.log(`  ${rows.length} rows shown (limit 20)`);
  for (const r of rows) console.log(`  ${r.id.padEnd(36)} ${r.fr}`);

  rows = await q(
    '3b. depuis SENTENCES: total, and how many hold a compound auxiliary',
    `select count(*) as total,
            count(*) filter (where fr ~* '(\\y|'')(ai|as|a|avons|avez|ont|suis|es|est|sommes|êtes|sont) +[a-zà-ÿ]+(é|ée|és|ées|i|is|it|u|us|ue)\\y') as compound
       from content_items where status='published' and kind='sentence' and fr ~* '\\ydepuis\\y'`,
  );
  console.log(`  total=${rows[0].total}  with a compound=${rows[0].compound}`);

  rows = await q(
    '3c. pendant SENTENCES: total, and how many hold a compound auxiliary',
    `select count(*) as total,
            count(*) filter (where fr ~* '(\\y|'')(ai|as|a|avons|avez|ont|suis|es|est|sommes|êtes|sont) +[a-zà-ÿ]+(é|ée|és|ées|i|is|it|u|us|ue)\\y') as compound
       from content_items where status='published' and kind='sentence' and fr ~* '\\ypendant\\y'`,
  );
  console.log(`  total=${rows[0].total}  with a compound=${rows[0].compound}`);

  // ── 4. en / dans, TIME AGAINST PLACE ───────────────────────────────────────
  rows = await q(
    '4. `en` + A DURATION (time taken)',
    `select id, theme, fr from content_items
      where status='published'
        and fr ~* '\\yen +(un|une|deux|trois|quatre|cinq|six|dix|quinze|vingt|trente|\\d+) +(seconde|minute|heure|jour|semaine|mois|an)'
      order by id limit 25`,
  );
  console.log(`  ${rows.length} rows`);
  for (const r of rows) console.log(`  ${r.id.padEnd(36)} ${r.fr}`);

  rows = await q(
    '4b. `dans` + A DURATION (a point ahead)',
    `select count(*) as n from content_items
      where status='published'
        and fr ~* '\\ydans +(un|une|deux|trois|quatre|cinq|six|dix|quinze|vingt|trente|quelques|\\d+) +(seconde|minute|heure|jour|semaine|mois|an)'`,
  );
  console.log(`  ${rows[0].n} rows`);

  rows = await q(
    '4c. `pour` + A DURATION',
    `select id, theme, fr from content_items
      where status='published'
        and fr ~* '\\ypour +(un|une|deux|trois|quatre|cinq|six|dix|quinze|\\d+) +(seconde|minute|heure|jour|semaine|mois|an)'
      order by id limit 20`,
  );
  console.log(`  ${rows.length} rows`);
  for (const r of rows) console.log(`  ${r.id.padEnd(36)} ${r.fr}`);

  // ── 5. THE NASALS ──────────────────────────────────────────────────────────
  console.log('\n### 5. THE THREE NASAL RESPELLINGS UNDER THE REAL CHECKER');
  const cands: Array<[string, string]> = [
    ['pendant', 'pahn-DAHN'], ['pendant', 'pahⁿ-DAHN'], ['pendant', 'pahⁿ-DAHⁿ'],
    ['en', 'AHN'], ['en', 'AHⁿ'],
    ['dans', 'DAHⁿ'], ['dans', 'DAHN'],
    ['depuis', 'duh-PWEE'], ['pour', 'POOR'],
    ['il y a', 'eel-ee-AH'], ['maintenant', 'mant-NAHⁿ'], ['maintenant', 'mahⁿt-NAHⁿ'],
  ];
  for (const [fr, re] of cands) {
    console.log(`  ${fr.padEnd(12)} ${re.padEnd(14)} flagged=${hasPlainNasalFor(fr, re) ? 'YES' : 'no '}`);
  }

  rows = await q(
    '5b. HOW THE CORPUS ALREADY RESPELLS THESE WORDS',
    `select id, fr, respell from content_items
      where status='published' and respell is not null and respell <> ''
        and fr in ('pendant','en','dans','depuis','pour','maintenant','dedans','cependant')
      order by fr, id`,
  );
  for (const r of rows) console.log(`  ${r.id.padEnd(38)} ${String(r.fr).padEnd(12)} ${r.respell}`);

  rows = await q(
    '5c. EVERY PUBLISHED RESPELL CONTAINING AHⁿ / AHN, COUNTED',
    `select
       count(*) filter (where respell like '%AHⁿ%') as superscript,
       count(*) filter (where respell like '%AHN%') as plain
       from content_items where status='published' and respell is not null`,
  );
  console.log(`  AHⁿ=${rows[0].superscript}  AHN=${rows[0].plain}`);

  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
