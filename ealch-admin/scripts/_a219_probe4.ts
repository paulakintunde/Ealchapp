/* a2.19 pre-flight, round 4. The last words this build needs a house spelling
 * for, and the futur-simple shape re-tested with a two-letter stem.
 *
 *     pnpm tsx scripts/_a219_probe4.ts
 */
import './env';
import { Pool } from 'pg';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function main() {
  const words = ['pleuvoir', 'super', "d'accord", 'alors', 'bon', 'faire', 'quoi', 'avec',
    'oui', 'non', 'plus tard', 'ce matin', 'samedi', 'nous', 'moi', 'et toi', 'ce week-end',
    'la semaine prochaine', 'après', 'ensuite', 'tout de suite'];
  const { rows } = await pool.query(
    `select fr, id, theme, respell from content_items
      where status='published' and respell is not null and respell <> '' and fr = any($1)
      order by fr, id`, [words]);
  console.log('### HEADWORDS');
  for (const r of rows) console.log(`  ${String(r.fr).padEnd(22)} ${r.id.padEnd(38)} ${r.respell}`);

  const inSent = await pool.query(
    `select id, fr, respell from content_items
      where status='published' and respell is not null and respell <> ''
        and fr ~* '\\y(pleuvoir|pleut|d''accord|alors|super)\\y' order by id limit 30`);
  console.log('\n### INSIDE SENTENCES');
  for (const r of inSent.rows) console.log(`  ${r.id.padEnd(38)} ${String(r.fr).padEnd(46)} ${r.respell}`);

  // Two-letter stem, plus `ira`.
  const FS = /(?<![\p{L}\p{N}'’-])(?:je|j['’]|tu|il|elle|on|nous|vous|ils|elles)\s+(?!camera|cameras|opéra|extra|ultra)(?:[\p{L}]{2,}(?:rai|ras|ra|rons|rez|ront)|ira|iras|irai|irons|irez|iront)(?![\p{L}\p{N}'’-])/iu;
  console.log('\n### FUTUR SIMPLE SHAPE, two-letter stem');
  for (const s of ['je partirai', 'tu partiras', 'il partira demain', 'nous partirons',
    'vous partirez', 'ils partiront', 'Je mangerai plus tard.', 'Elle sera là.',
    'Il ira à Paris.', 'On verra demain.', 'Tu pourras venir ?']) {
    console.log(`  ${FS.test(s) ? 'FIRES ' : 'MISS  '} ${s}`);
  }
  console.log('  ---');
  for (const s of ['Je vais partir.', 'Il va rester ici.', 'Nous allons partir.',
    'Vous allez payer.', 'il y a', 'on camera', 'Elle va sortir ce soir.',
    'There is a second future in French, one word instead of two, and it comes later.',
    'Tu vas travailler demain.', 'Ils ne vont pas venir à la fête.',
    'On va manger dans une heure.', 'Wrap the verb that changed, not the one carrying the meaning.',
    'Je vais faire quoi ce week-end ?', 'Nous allons manger tôt.',
    'You are going to hear it, and you are not being asked to say it.',
    'On ne va pas rester.', 'Elle ne va pas finir le rapport ce soir.']) {
    console.log(`  ${FS.test(s) ? 'FIRES!' : 'clean '} ${s}`);
  }

  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
