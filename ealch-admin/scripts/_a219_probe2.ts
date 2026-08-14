/* a2.19 pre-flight, round 2. The negated paradigm the corpus already published,
 * the time frames, and the dictée limit.
 *
 *     pnpm tsx scripts/_a219_probe2.ts
 */
import './env';
import { Pool } from 'pg';
import { dicteeMode, letterCount } from '../../ealch-v2/src/content/dictee.logic.ts';
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const q = async (label: string, sql: string) => {
  const { rows } = await pool.query(sql);
  console.log(`\n### ${label}`);
  return rows;
};

async function main() {
  let rows = await q(
    '1. THE THIRTEEN NEGATED futur proche ROWS, in full',
    `select id, theme, kind, status, fr, respell, ipa, en, gender, drills, level from content_items
      where fr ~* '(\\y|'')(ne|n'') +(vais|vas|va|allons|allez|vont) +pas +[a-zà-ÿ]{3,}(er|ir|re|oir)(\\y|$)'
      order by id`,
  );
  for (const r of rows) {
    console.log(`  ${r.id}`);
    console.log(`      theme=${r.theme} kind=${r.kind} status=${r.status} level=${r.level} gender=${r.gender ?? '-'}`);
    console.log(`      fr="${r.fr}"`);
    console.log(`      en="${r.en}"  respell=${r.respell === null ? 'NULL' : `"${r.respell}"`}  ipa=${r.ipa === null ? 'NULL' : `"${r.ipa}"`}`);
    console.log(`      drills=${JSON.stringify(r.drills)}`);
  }

  rows = await q(
    '2. THE negation-et-restriction THEME',
    `select split_part(id,'.',2) as lvl, count(*) as n, max(split_part(id,'.',4)::int) as maxid,
            count(*) filter (where respell is not null and respell <> '') as respelled
       from content_items where theme='negation-et-restriction' group by 1 order by 1`,
  );
  for (const r of rows) console.log(`  fr.${r.lvl}.* n=${r.n} max=${r.maxid} respelled=${r.respelled}`);

  rows = await q(
    '2b. AFFIRMATIVE futur proche IN THE SAME THEME, if any',
    `select id, fr, respell from content_items
      where theme='negation-et-restriction'
        and fr ~* '(\\y)(vais|vas|va|allons|allez|vont) +[a-zà-ÿ]{3,}(er|ir|re|oir)(\\y|$)'
        and fr !~* '(\\y|'')(ne|n'') +(vais|vas|va|allons|allez|vont)'
      order by id`,
  );
  console.log(`  ${rows.length} rows`);
  for (const r of rows) console.log(`  ${r.id.padEnd(40)} ${String(r.fr).padEnd(46)} ${r.respell ?? 'NULL'}`);

  rows = await q(
    '3. TIME FRAMES: how the corpus respells them',
    `select id, fr, respell, en, theme from content_items
      where status='published' and respell is not null and respell <> ''
        and fr in ('demain','ce soir','ce week-end','bientôt','tout à l''heure','samedi','la semaine prochaine','après-midi','ce matin','plus tard','dans une heure','dans dix minutes')
      order by fr, id`,
  );
  for (const r of rows) console.log(`  ${String(r.fr).padEnd(22)} ${r.id.padEnd(40)} ${String(r.respell).padEnd(24)} ${r.en}`);

  rows = await q(
    '3b. EVERY PUBLISHED RESPELLING OF demain / ce soir / bientôt INSIDE A SENTENCE',
    `select id, fr, respell from content_items
      where status='published' and respell is not null and respell <> ''
        and fr ~* '\\y(demain|ce soir|bientôt)\\y' order by id limit 30`,
  );
  for (const r of rows) console.log(`  ${r.id.padEnd(40)} ${String(r.fr).padEnd(50)} ${r.respell}`);

  console.log('\n### 4. dicteeMode ON CANDIDATE DICTÉE TARGETS');
  const targets = [
    'Je vais partir.',
    'Je ne vais pas partir.',
    'Il va manger.',
    'Il ne va pas manger.',
    'On va sortir.',
    'On ne va pas sortir.',
    'Tu vas payer.',
    'Tu ne vas pas payer.',
    'Je vais à Paris.',
    'Je vais partir dans dix minutes.',
    'Nous allons partir.',
    'Ils vont partir.',
    'Elle va rester.',
    'Elle ne va pas rester.',
  ];
  for (const t of targets) {
    console.log(`  ${t.padEnd(34)} letters=${String(letterCount(t)).padStart(2)}  ${dicteeMode(t)}`);
  }

  console.log('\n### 5. MORE NASAL CANDIDATES');
  const cands: Array<[string, string]> = [
    ['Je ne vais pas manger de viande ce soir.', 'zhuh nuh veh pah mahⁿ-ZHAY duh VYAHⁿD suh SWAR'],
    ['Ils ne vont pas venir à la fête.', 'eel nuh vohⁿ pah vuh-NEER a la FEHT'],
    ['Je vais partir dans dix minutes.', 'zhuh veh par-TEER dahⁿ dee mee-NÜT'],
    ['Nous allons partir.', 'noo za-lohⁿ par-TEER'],
    ['Vous allez rester.', 'voo za-lay res-TAY'],
    ['On va manger.', 'ohⁿ va mahⁿ-ZHAY'],
    ['Elle ne va pas rester.', 'ehl nuh va pah res-TAY'],
    ['Tu ne vas pas payer.', 'tü nuh vah pah peh-YAY'],
    ['Je vais chanter.', 'zhuh veh shahⁿ-TAY'],
    ['ce soir', 'suh SWAR'],
    ['demain', 'duh-MAⁿ'],
    ['demain', 'duh-MAHⁿ'],
    ['bientôt', 'byaⁿ-TOH'],
    ['Il va pleuvoir.', 'eel va pluh-VWAR'],
    ['Je vais épeler mon nom.', 'zhuh veh ay-puh-LAY mohⁿ NOHⁿ'],
  ];
  for (const [fr, re] of cands) {
    console.log(`  ${re.padEnd(48)} flagged=${hasPlainNasalFor(fr, re) ? 'YES' : 'no '}  ${fr}`);
  }

  rows = await q(
    '6. THE FALSE-POSITIVE CANDIDATES IN THIS LESSON (a real /n/ or /m/)',
    `select id, fr, respell from content_items
      where status='published' and respell is not null and respell <> ''
        and fr in ('la semaine prochaine','une semaine','le nom','la personne','comme','même')
      order by fr, id limit 20`,
  );
  for (const r of rows) console.log(`  ${String(r.fr).padEnd(24)} ${r.id.padEnd(40)} ${r.respell}`);

  rows = await q(
    '7. WHAT a2.13 AND a2.02 ALREADY SAY ON THEIR OWN ROWS ABOUT A SECOND VERB',
    `select id, fr, respell from content_items
      where id like 'fr.a2.verbes.%' and split_part(id,'.',4)::int between 341 and 380
        and fr ~* '(veux|veut|peux|peut|dois|doit|voulons|pouvons|devons|voulez|pouvez|devez|veulent|peuvent|doivent) +[a-zà-ÿ]{3,}(er|ir|re|oir)'
      order by id limit 20`,
  );
  for (const r of rows) console.log(`  ${r.id.padEnd(24)} ${String(r.fr).padEnd(46)} ${r.respell ?? ''}`);

  rows = await q(
    '8. NEIGHBOUR UNITS seq 13..17 (level is lowercase a2)',
    `select body->>'id' as id, body->>'seq' as seq, body->>'title' as t, body->>'sub' as sub,
            body->'lessonIds' as lessons, body->'prereqUnitIds' as prereq
       from content_units where kind='curriculum_unit' and lower(body->>'level')='a2'
        and (body->>'seq')::int between 13 and 17 order by (body->>'seq')::int`,
  );
  for (const r of rows) console.log(`  ${r.id} seq=${r.seq} ${String(r.t).padEnd(32)} ${String(r.sub).padEnd(34)} lessons=${JSON.stringify(r.lessons)} prereq=${JSON.stringify(r.prereq)}`);

  rows = await q(
    '9. IS THERE ANY PUBLISHED ROW WHOSE fr I AM ABOUT TO REUSE IN THE verbes THEME',
    `select id, fr from content_items where theme='verbes'
       and fr in ('Je vais partir.','Je ne vais pas partir.','Il va manger.','Il ne va pas manger.',
                  'On va sortir.','Tu vas payer.','Nous allons partir.','Ils vont partir.',
                  'Je vais à Paris.','Je vais partir dans dix minutes.','Elle va rester.')
      order by id`,
  );
  console.log(rows.length ? rows.map((r) => `  ${r.id} ${r.fr}`).join('\n') : '  NONE of the candidate frames is already in `verbes`.');

  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
