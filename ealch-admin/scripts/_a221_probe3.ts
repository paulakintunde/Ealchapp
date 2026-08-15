import './env';
import { Pool } from 'pg';
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const main = async () => {
  const show = async (label: string, sql: string, p: unknown[] = []) => {
    const { rows } = await pool.query(sql, p as never[]);
    console.log(`\n### ${label}  (${rows.length})`);
    for (const r of rows) console.log('  ' + Object.values(r).map((v) => String(v ?? '-')).join('  |  '));
  };
  await show('devenir / revenir / repartir / remonter as headwords',
    `select fr, id, theme, level, status, respell, ipa, en, gender from content_items
      where fr in ('devenir','revenir','repartir','remonter','redescendre','ressortir') order by fr, id`);
  await show('passer + respelling, every row that is just the infinitive or a short phrase',
    `select fr, id, theme, level, respell, en from content_items where fr='passer' or fr like 'passer %' order by id limit 20`);
  await show('un examen / la gare / la poubelle, for the transitive contrast',
    `select fr, id, theme, level, respell, en from content_items where fr in ('un examen','l''examen','la gare','sortir la poubelle','passer un examen') order by fr, id`);
  await show('rester / arriver / retourner / tomber, best respelled headword per verb',
    `select fr, id, theme, level, respell, en, gender from content_items
      where fr in ('rester','arriver','retourner','tomber','monter','sortir','entrer','partir','aller','venir','naître','mourir','descendre','rentrer','passer')
        and respell is not null and respell <> '' and gender is null order by fr, id`);
  await show('la nature morte and the adjective mort',
    `select fr, id, theme, level, respell, ipa, en, gender from content_items where id in ('fr.sons.adjectifs-essentiels.161','fr.b2.musees.048','fr.a2.objets.117')`);
  await show('rows using "ne ... pas" with etre + a participle',
    `select id, fr, theme, level from content_items where status='published'
      and fr ~* '(ne|n'')[ '']*(suis|es|est|sommes|êtes|sont) +pas +[a-zà-ÿ]+(é|és|ée|ées|i|is|ie|ies|u|us|ue|ues|t|te)([^[:alpha:]]|$)' limit 25`);
  await show('a2.03 lesson sections that own agreement, by id+title',
    `select jsonb_array_elements(body->'sections')->>'id' as sid, jsonb_array_elements(body->'sections')->>'title' as t
       from content_units where kind='lesson' and body->>'id'='a2.03.l1'`);
  await pool.end();
};
main().catch((e) => { console.error(e); process.exit(1); });
