/* a2.05 pre-flight. Le passé composé avec avoir, seq 16.
 *
 * Answers, against Postgres:
 *   - the identity block and the dependents
 *   - the id block (fr.a2.verbes, ledger figure 403 after a2.19)
 *   - WHETHER A PAST PARTICIPLE IS ALREADY A CORPUS ITEM  <- the ledger decision
 *   - the evidence for avoir + participle, its negative, and the adverb-inside shape
 *   - whether a2.01 kept its corpus free of -er/-é ambiguity
 *   - what a2.18 and a2.02 authored that already refers to the past
 *   - the nasals, through the real checker
 *   - the dictée frame, through the real dicteeMode
 *
 *     pnpm tsx scripts/_a205_probe.ts
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

const REGULAR_PARTICIPLES = [
  'parlé', 'mangé', 'travaillé', 'regardé', 'écouté', 'aimé', 'joué', 'chanté', 'dansé',
  'visité', 'cherché', 'trouvé', 'demandé', 'donné', 'acheté', 'payé', 'oublié', 'fermé',
  'invité', 'étudié', 'téléphoné', 'préparé', 'gagné', 'rangé', 'commencé', 'quitté',
  'fini', 'choisi', 'réussi', 'grandi', 'rempli', 'obéi', 'réfléchi', 'grossi', 'maigri',
  'vendu', 'attendu', 'entendu', 'répondu', 'perdu', 'rendu', 'descendu',
];
const IRREGULAR_PARTICIPLES = ['fait', 'dit', 'pris', 'mis', 'vu', 'lu', 'bu', 'su', 'pu', 'voulu', 'dû', 'connu', 'venu', 'tenu', 'écrit', 'ouvert', 'offert', 'eu', 'été', 'appris', 'compris'];

async function main() {
  // ── 1. IDENTITY ───────────────────────────────────────────────────────────
  let rows = await q(
    '1. THE UNIT',
    `select body from content_units where kind='curriculum_unit' and body->>'id'='a2.05'`,
  );
  console.log(JSON.stringify(rows[0]?.body, null, 2));

  rows = await q(
    '1b. UNITS DECLARING a2.05 AS A PREREQUISITE',
    `select body->>'id' as id, body->>'seq' as seq, body->>'title' as title
       from content_units where kind='curriculum_unit' and body->'prereqUnitIds' ? 'a2.05'`,
  );
  console.log(rows.length ? rows.map((r) => `  ${r.id} seq=${r.seq} ${r.title}`).join('\n') : '  NONE.');

  rows = await q(
    '1c. NEIGHBOURS, seq 14..21',
    `select body->>'id' as id, body->>'seq' as seq, body->>'title' as t, body->>'canDo' as cando,
            body->'lessonIds' as lessons
       from content_units where kind='curriculum_unit' and body->>'level'='A2'
        and (body->>'seq')::int between 14 and 21 order by 2`,
  );
  for (const r of rows) console.log(`  ${r.id} seq=${String(r.seq).padStart(2)} ${String(r.t).padEnd(38)} lessons=${JSON.stringify(r.lessons)}\n        canDo: ${r.cando}`);

  // ── 2. THE ID BLOCK ───────────────────────────────────────────────────────
  rows = await q(
    '2. fr.a2.verbes ROW COUNT AND MAX (ledger: 403 after a2.19, max .529)',
    `select count(*) as n, max(split_part(id,'.',4)::int) as maxid from content_items where id like 'fr.a2.verbes.%'`,
  );
  console.log(`  n=${rows[0].n}  max=${rows[0].maxid}`);

  rows = await q(
    '2b. ANY ROW AT OR ABOVE fr.a2.verbes.541',
    `select id, fr from content_items where id like 'fr.a2.verbes.%' and split_part(id,'.',4)::int >= 541 order by id`,
  );
  console.log(rows.length ? rows.map((r) => `  ${r.id} ${r.fr}`).join('\n') : '  NONE. .541 upward is clear.');

  rows = await q(
    '2c. THEME TOTALS',
    `select theme, count(*) filter (where status='published') as published, count(*) as all_rows
       from content_items where theme in ('verbes','verbes-essentiels','temps-et-frequence','prepositions-essentielles') group by 1 order by 1`,
  );
  for (const r of rows) console.log(`  ${String(r.theme).padEnd(28)} published=${r.published} all=${r.all_rows}`);

  // ── 3. IS A PAST PARTICIPLE ALREADY A CORPUS ITEM? ────────────────────────
  rows = await q(
    '3. BARE PARTICIPLES AS ROWS (kind=word, single token)',
    `select fr, id, theme, status, respell, en, gender from content_items
      where fr = any($1) and fr !~ ' ' order by fr, id`,
    [[...REGULAR_PARTICIPLES, ...IRREGULAR_PARTICIPLES]],
  );
  console.log(`  ${rows.length} rows`);
  for (const r of rows) console.log(`  ${String(r.fr).padEnd(12)} ${r.id.padEnd(40)} ${String(r.theme).padEnd(24)} ${String(r.status).padEnd(10)} [${r.respell ?? ''}] ${r.en ?? ''} g=${r.gender ?? '-'}`);

  rows = await q(
    '3b. ANY SINGLE-WORD ROW ENDING -é/-i/-u THAT IS A PARTICIPLE-SHAPED WORD',
    `select count(*) as n from content_items where fr !~ ' ' and fr ~ '(é|i|u)$' and kind='word'`,
  );
  console.log(`  ${rows[0].n} single-word rows end in é/i/u (most are nouns and adjectives)`);

  // ── 4. THE CONSTRUCTION, COUNTED ──────────────────────────────────────────
  rows = await q(
    '4. PUBLISHED SENTENCES: avoir + PARTICIPLE (any)',
    `select count(*) as total, count(*) filter (where respell is not null and respell <> '') as respelled
       from content_items where status='published'
        and fr ~* '(^|[ ''’])(j''ai|tu as|il a|elle a|on a|nous avons|vous avez|ils ont|elles ont|ai|as|a|avons|avez|ont) +[a-zà-ÿ]{2,}(é|ée|és|ées|i|is|it|u|us|ue|ert)($|[ .,!?])'`,
  );
  console.log(`  total=${rows[0].total}   respelled=${rows[0].respelled}`);

  rows = await q(
    "4b. TIGHTER: subject pronoun + auxiliary + REGULAR participle, respelled",
    `select id, theme, fr, respell, en from content_items
      where status='published' and respell is not null and respell <> ''
        and fr ~* '(^|[ ''’])(j''ai|tu as|il a|elle a|on a|nous avons|vous avez|ils ont|elles ont) +[a-zà-ÿ]{3,}(é|i|u)($|[ .,!?])'
      order by id limit 60`,
  );
  console.log(`  ${rows.length} rows shown`);
  for (const r of rows) console.log(`  ${r.id.padEnd(42)} ${String(r.fr).padEnd(52)} ${r.respell}`);

  rows = await q(
    '4c. NEGATED: ne/n\' + avoir + pas + participle',
    `select id, theme, fr, respell from content_items
      where status='published'
        and fr ~* '(^|[ ''’])(ne|n'') *(ai|as|a|avons|avez|ont) +pas +[a-zà-ÿ]{3,}(é|i|u|is|it|ert)($|[ .,!?])'
      order by id`,
  );
  console.log(`  ${rows.length} rows`);
  for (const r of rows) console.log(`  ${r.id.padEnd(42)} ${String(r.fr).padEnd(52)} ${r.respell ?? '(no respell)'}`);

  rows = await q(
    '4d. THE WRONG ORDER, which must exist nowhere: avoir + participle + pas',
    `select id, fr from content_items
      where fr ~* '(^|[ ''’])(ai|as|a|avons|avez|ont) +[a-zà-ÿ]{3,}(é|i|u) +pas($|[ .,!?])' order by id`,
  );
  console.log(rows.length ? rows.map((r) => `  ${r.id} ${r.fr}`).join('\n') : '  NONE, as it should be.');

  rows = await q(
    '4e. ADVERB BETWEEN AUXILIARY AND PARTICIPLE (a2.17 measured 82)',
    `select count(*) as n, count(*) filter (where respell is not null and respell <> '') as respelled
       from content_items where status='published'
        and fr ~* '(^|[ ''’])(ai|as|a|avons|avez|ont) +(bien|mal|beaucoup|trop|déjà|encore|toujours|jamais|vite|assez|presque|enfin|souvent) +[a-zà-ÿ]{3,}(é|i|u|is|it|ert)($|[ .,!?])'`,
  );
  console.log(`  total=${rows[0].n}  respelled=${rows[0].respelled}`);

  rows = await q(
    '4f. THE RESPELLED ADVERB-INSIDE ONES',
    `select id, theme, fr, respell from content_items
      where status='published' and respell is not null and respell <> ''
        and fr ~* '(^|[ ''’])(ai|as|a|avons|avez|ont) +(bien|mal|beaucoup|trop|déjà|encore|toujours|jamais|vite|assez|presque|enfin|souvent) +[a-zà-ÿ]{3,}(é|i|u|is|it|ert)($|[ .,!?])'
      order by id limit 30`,
  );
  for (const r of rows) console.log(`  ${r.id.padEnd(42)} ${String(r.fr).padEnd(52)} ${r.respell}`);

  rows = await q(
    '4g. AGREEMENT WITH AVOIR, which must appear nowhere in this lesson',
    `select count(*) as n from content_items where status='published'
      and fr ~* '(^|[ ''’])(ai|as|a|avons|avez|ont) +[a-zà-ÿ]{3,}(ée|és|ées)($|[ .,!?])'`,
  );
  console.log(`  ${rows[0].n} published rows put an agreed participle straight after avoir`);

  // ── 5. TIME EXPRESSIONS THAT FIX A PAST READING ──────────────────────────
  rows = await q(
    '5. PAST TIME EXPRESSIONS AS ROWS',
    `select id, theme, fr, respell, en, status from content_items
      where fr in ('hier','avant-hier','hier soir','hier matin','la semaine dernière','le mois dernier',
                   'l''année dernière','le week-end dernier','ce matin','déjà','ne pas encore','récemment')
      order by fr, id`,
  );
  for (const r of rows) console.log(`  ${String(r.fr).padEnd(22)} ${r.id.padEnd(42)} ${String(r.theme).padEnd(24)} ${String(r.status).padEnd(10)} [${r.respell ?? ''}] ${r.en ?? ''}`);

  rows = await q(
    "5b. a2.18's BLOCK (fr.a2.prepositions-essentielles.169..208)",
    `select id, fr, respell, en from content_items
      where id like 'fr.a2.prepositions-essentielles.%' and split_part(id,'.',4)::int between 169 and 208 order by id`,
  );
  console.log(`  ${rows.length} rows`);
  for (const r of rows) console.log(`  ${r.id.padEnd(42)} ${String(r.fr).padEnd(48)} ${r.respell ?? ''}`);

  // ── 6. a2.01's CORPUS, AND THE -er/-é AMBIGUITY ──────────────────────────
  rows = await q(
    "6. a2.01's ROWS (fr.a2.verbes.101..140)",
    `select id, fr, respell from content_items
      where id like 'fr.a2.verbes.%' and split_part(id,'.',4)::int between 101 and 140 order by id`,
  );
  for (const r of rows) console.log(`  ${r.id.padEnd(24)} ${String(r.fr).padEnd(50)} ${r.respell ?? ''}`);

  rows = await q(
    '6b. ANY PUBLISHED ROW WHERE A BARE -er INFINITIVE COULD READ AS A PARTICIPLE (no subject+aux in front)',
    `select count(*) as n from content_items where status='published'
      and fr ~* '(^|[ ''’])(ai|as|a|avons|avez|ont) +[a-zà-ÿ]{3,}er($|[ .,!?])'`,
  );
  console.log(`  ${rows[0].n} published rows put an -ER INFINITIVE straight after avoir (a real error shape)`);

  // ── 7. INFINITIVES TO IMPORT ─────────────────────────────────────────────
  rows = await q(
    '7. THE REGULAR INFINITIVES, every row',
    `select fr, id, theme, status, respell, ipa, en, gender, drills from content_items
      where fr in ('parler','manger','travailler','regarder','écouter','jouer','chanter','danser',
                   'visiter','chercher','trouver','demander','donner','acheter','oublier','fermer',
                   'finir','choisir','réussir','grandir','remplir','réfléchir',
                   'vendre','attendre','entendre','répondre','perdre','rendre','descendre','avoir')
      order by fr, id`,
  );
  for (const r of rows) console.log(`  ${String(r.fr).padEnd(14)} ${r.id.padEnd(38)} ${String(r.theme).padEnd(24)} ${String(r.status).padEnd(10)} [${r.respell ?? ''}] ${r.en ?? ''} g=${r.gender ?? '-'} d=${JSON.stringify(r.drills)}`);

  // ── 8. THE NASALS ────────────────────────────────────────────────────────
  console.log('\n### 8. CANDIDATE RESPELLINGS UNDER hasPlainNasalFor');
  const cands: Array<[string, string]> = [
    ["j'ai mangé", 'zhay mahn-ZHAY'], ["j'ai mangé", 'zhay mahⁿ-ZHAY'],
    ["je n'ai pas mangé", 'zhuh nay pah mahⁿ-ZHAY'],
    ['manger', 'mahⁿ-ZHAY'], ['mangé', 'mahⁿ-ZHAY'],
    ['nous avons parlé', 'noo za-VOHⁿ par-LAY'], ['nous avons parlé', 'noo za-VOHN par-LAY'],
    ['ils ont fini', 'eel zohⁿ fee-NEE'], ['ils ont fini', 'eel zohn fee-NEE'],
    ['vendu', 'vahⁿ-DÜ'], ['vendu', 'vahn-DÜ'],
    ['attendu', 'ah-tahⁿ-DÜ'], ['entendu', 'ahⁿ-tahⁿ-DÜ'], ['entendu', 'ahn-tahn-DÜ'],
    ['hier', 'YEHR'], ['hier soir', 'yehr SWAR'],
    ['la semaine dernière', 'la suh-MEN dehr-NYEHR'],
    ['il y a trois jours', 'eel ee ah trwah ZHOOR'],
    ['bien', 'BYEHⁿ'], ['bien', 'BYAN'],
    ["j'ai bien mangé", 'zhay byehⁿ mahⁿ-ZHAY'],
    ['commencé', 'koh-mahⁿ-SAY'], ['commencé', 'koh-mahn-SAY'],
    ['répondu', 'ray-pohⁿ-DÜ'], ['répondu', 'ray-pohn-DÜ'],
    ['descendu', 'day-sahⁿ-DÜ'],
    ['on a fini', 'ohⁿ na fee-NEE'], ['on a fini', 'ohn na fee-NEE'],
    ['grandi', 'grahⁿ-DEE'],
    ['pendant', 'pahⁿ-DAHⁿ'],
  ];
  for (const [fr, re] of cands) {
    console.log(`  ${fr.padEnd(24)} ${re.padEnd(30)} flagged=${hasPlainNasalFor(fr, re) ? 'YES' : 'no '}`);
  }

  rows = await q(
    '8b. HOW THE CORPUS ALREADY RESPELLS THE avoir FORMS AND THE TIME WORDS',
    `select id, fr, respell from content_items
      where status='published' and respell is not null and respell <> ''
        and fr in ('avoir','j''ai','tu as','il a','elle a','on a','nous avons','vous avez','ils ont','elles ont',
                   'hier','bien','déjà','manger','finir','vendre','parler')
      order by fr, id`,
  );
  for (const r of rows) console.log(`  ${r.id.padEnd(42)} ${String(r.fr).padEnd(16)} ${r.respell}`);

  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
