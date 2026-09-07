/* a2.05 pre-flight, part 2. The things part 1 raised.
 *
 *     pnpm tsx scripts/_a205_probe2.ts
 */
import './env';
import { Pool } from 'pg';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const q = async (label: string, sql: string, params: unknown[] = []) => {
  const { rows } = await pool.query(sql, params as never[]);
  console.log(`\n### ${label}`);
  return rows;
};

async function main() {
  // 1. WHAT ARE THE 81 "AGREEMENT WITH AVOIR" ROWS?
  let rows = await q(
    '1. THE 81 AGREED-PARTICIPLE-AFTER-AVOIR ROWS, first 40',
    `select id, fr from content_items where status='published'
      and fr ~* '(^|[ ''’])(ai|as|a|avons|avez|ont) +[a-zà-ÿ]{3,}(ée|és|ées)($|[ .,!?])' order by id limit 40`,
  );
  for (const r of rows) console.log(`  ${r.id.padEnd(42)} ${r.fr}`);

  // 2. WHO OWNS negation-et-restriction / recits-au-passe?
  rows = await q(
    '2. EVERY A2 UNIT, id / seq / title, so ownership is read off the spine not guessed',
    `select body->>'id' as id, (body->>'seq')::int as seq, body->>'title' as t, body->>'canDo' as cando
       from content_units where kind='curriculum_unit' and body->>'level'='a2' order by 2`,
  );
  for (const r of rows) console.log(`  ${String(r.id).padEnd(8)} ${String(r.seq).padStart(2)}  ${String(r.t).padEnd(42)} ${r.cando}`);

  // 3. a2.02's PAST-REFERRING ROWS
  rows = await q(
    '3. a2.02 BLOCK (fr.a2.verbes.261..300) AND a2.19 BLOCK (.501..540)',
    `select id, fr, respell from content_items
      where id like 'fr.a2.verbes.%'
        and (split_part(id,'.',4)::int between 261 and 300 or split_part(id,'.',4)::int between 501 and 540)
      order by id`,
  );
  for (const r of rows) console.log(`  ${r.id.padEnd(24)} ${String(r.fr).padEnd(46)} ${r.respell ?? ''}`);

  // 4. THE DICTEE FRAME, THROUGH THE REAL dicteeMode
  console.log('\n### 4. dicteeMode ON EVERY CANDIDATE FRAME');
  const frames = [
    "J'ai mangé.", "Tu as mangé.", "Il a mangé.", "On a mangé.", "Nous avons mangé.", "Vous avez mangé.", "Ils ont mangé.",
    "J'ai fini.", "Il a fini.", "Il a fini tôt.", "On a fini tôt.", "Tu as fini tôt.",
    "Il a vendu.", "Il a vendu ici.", "Ils ont vendu ici.", "On a vendu ici.",
    "Il a parlé.", "Il a parlé fort.", "Tu as parlé fort.",
    "Il n'a pas mangé.", "Tu n'as pas mangé.", "Je n'ai pas mangé.", "On n'a pas mangé.",
    "Il n'a pas fini.", "Il a bien mangé.", "Tu as bien mangé.", "J'ai bien mangé.",
    "Il a fini hier.", "Il a mangé hier.", "On a mangé hier.", "Tu as mangé hier.",
    "Il a choisi.", "Il a attendu.", "Il a répondu.", "Il a joué.", "Il a joué ici.",
  ];
  for (const f of frames) {
    const letters = f.replace(/[^A-Za-zÀ-ÿ]/g, '').length;
    console.log(`  ${f.padEnd(24)} letters=${String(letters).padStart(2)}  mode=${dicteeMode(f)}`);
  }

  // 5. THE FUTUR PROCHE / PASSE COMPOSE MINIMAL PAIRS ALREADY PUBLISHED
  rows = await q(
    '5. IS THERE ANY PUBLISHED PAIR "je vais X" / "j\'ai X-é" IN ONE THEME?',
    `select id, theme, fr, respell from content_items
      where status='published' and respell is not null and respell <> ''
        and fr ~* '(^|[ ''’])(je vais|j''ai) +[a-zà-ÿ]{3,}(er|é)($|[ .,!?])' order by theme, id`,
  );
  for (const r of rows) console.log(`  ${r.id.padEnd(42)} ${String(r.fr).padEnd(40)} ${r.respell}`);

  // 6. THE MASTERCLASS ROW AND ITS NEIGHBOURS (the one respelled negative)
  rows = await q(
    '6. fr.sons.masterclass.015..030, the neighbourhood of the one respelled negative',
    `select id, fr, respell, en from content_items
      where id like 'fr.sons.masterclass.%' and split_part(id,'.',4)::int between 12 and 30 order by id`,
  );
  for (const r of rows) console.log(`  ${r.id.padEnd(30)} ${String(r.fr).padEnd(30)} ${String(r.respell ?? '').padEnd(26)} ${r.en ?? ''}`);

  // 7. THE TIME-EXPRESSION ROWS WORTH IMPORTING, WITH DRILLS
  rows = await q(
    '7. TIME EXPRESSIONS, full rows',
    `select id, theme, fr, respell, en, drills, kind from content_items
      where fr in ('hier','avant-hier','la semaine dernière','le mois dernier','déjà','ce matin','hier soir')
      order by fr, id`,
  );
  for (const r of rows) console.log(`  ${String(r.fr).padEnd(22)} ${r.id.padEnd(42)} ${String(r.kind).padEnd(8)} [${r.respell ?? ''}] ${r.en ?? ''} d=${JSON.stringify(r.drills)}`);

  // 8. hier soir / hier matin as rows at all
  rows = await q(
    '8. ANY ROW WHOSE fr STARTS "hier"',
    `select id, theme, fr, respell, en from content_items where fr ~* '^hier' order by id`,
  );
  for (const r of rows) console.log(`  ${r.id.padEnd(42)} ${String(r.fr).padEnd(24)} [${r.respell ?? ''}] ${r.en ?? ''}`);

  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
