/* a2.19 pre-flight, round 3. Every syllable this build is about to write,
 * read off a published row, plus the dictée matrix and the seed baselines.
 *
 *     pnpm tsx scripts/_a219_probe3.ts
 */
import './env';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Pool } from 'pg';
import { dicteeMode, letterCount } from '../../ealch-v2/src/content/dictee.logic.ts';
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { endingPopulation } from '../../ealch-v2/src/content/gender.logic.ts';
import type { Item } from '../../ealch-v2/src/content/schema.ts';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const q = async (label: string, sql: string, params: unknown[] = []) => {
  const { rows } = await pool.query(sql, params as never[]);
  console.log(`\n### ${label}`);
  return rows;
};

async function main() {
  // ── 1. EVERY WORD THIS BUILD RESPELLS, AS THE CORPUS ALREADY SPELLS IT ────
  let rows = await q(
    '1. PUBLISHED RESPELLINGS FOR EVERY WORD THIS BUILD WILL PRINT',
    `select fr, id, theme, respell from content_items
      where status='published' and respell is not null and respell <> ''
        and fr in ('venir','sortir','partir','manger','travailler','payer','rester','finir',
                   'la fête','le rapport','la viande','le train','conduire','aujourd''hui',
                   'ce soir','demain','tôt','ici','le week-end','des amis','à Paris','le parc')
      order by fr, id`,
  );
  for (const r of rows) console.log(`  ${String(r.fr).padEnd(14)} ${r.id.padEnd(38)} ${r.respell}`);

  rows = await q(
    '1b. THE SAME WORDS INSIDE PUBLISHED SENTENCES (the syllable, in context)',
    `select id, fr, respell from content_items
      where status='published' and respell is not null and respell <> ''
        and (fr ~* '\\y(fête|rapport|viande|week-end)\\y')
      order by id limit 25`,
  );
  for (const r of rows) console.log(`  ${r.id.padEnd(38)} ${String(r.fr).padEnd(44)} ${r.respell}`);

  rows = await q(
    '1c. THE FIVE ROWS THIS BUILD WOULD SUPPLY A RESPELLING FOR',
    `select id, fr, en, ipa, respell, drills, status, gender from content_items
      where id in ('fr.a2.negation-et-restriction.107','fr.a2.negation-et-restriction.152',
                   'fr.a2.negation-et-restriction.158','fr.a2.negation-et-restriction.164',
                   'fr.a2.negation-et-restriction.166')
      order by id`,
  );
  for (const r of rows) console.log(`  ${r.id.padEnd(40)} respell=${r.respell === null ? 'NULL' : JSON.stringify(r.respell)} gender=${r.gender ?? '-'} drills=${JSON.stringify(r.drills)}\n      ${r.fr}\n      ipa=${r.ipa ?? 'NULL'}`);

  rows = await q(
    '1d. THE ROWS THIS BUILD WOULD IMPORT WHOLE',
    `select id, fr, en, ipa, respell, drills, theme, kind, gender, status from content_items
      where id in ('fr.sons.verbes-essentiels.003','fr.a2.verbes.261','fr.a2.verbes.266',
                   'fr.a2.prepositions-essentielles.130','fr.a2.verbes.347',
                   'fr.a2.prepositions-essentielles.184','fr.a2.prepositions-essentielles.172',
                   'fr.sons.muettes.037','fr.sons.consonnes.098','fr.a2.verbes.031',
                   'fr.sons.verbes-essentiels.041','fr.sons.verbes-essentiels.059',
                   'fr.sons.verbes-essentiels.010')
      order by id`,
  );
  for (const r of rows) {
    console.log(`  ${r.id}`);
    console.log(`      ${String(r.kind).padEnd(9)} ${String(r.theme).padEnd(24)} ${r.status} gender=${r.gender ?? '-'}`);
    console.log(`      fr=${JSON.stringify(r.fr)}  en=${JSON.stringify(r.en)}`);
    console.log(`      respell=${JSON.stringify(r.respell)}  ipa=${JSON.stringify(r.ipa)}  drills=${JSON.stringify(r.drills)}`);
  }

  // ── 2. THE DICTÉE MATRIX ─────────────────────────────────────────────────
  console.log('\n### 2. dicteeMode ACROSS THE WHOLE PARADIGM, BOTH POLARITIES');
  const persons: [string, string, string][] = [
    ['Je', 'vais', 'ne vais pas'], ['Tu', 'vas', 'ne vas pas'], ['Il', 'va', 'ne va pas'],
    ['On', 'va', 'ne va pas'], ['Elle', 'va', 'ne va pas'],
    ['Nous', 'allons', "n'allons pas"], ['Vous', 'allez', "n'allez pas"], ['Ils', 'vont', 'ne vont pas'],
  ];
  for (const inf of ['partir', 'manger', 'sortir', 'payer', 'lire', 'venir']) {
    const line: string[] = [];
    for (const [p, aff, neg] of persons) {
      const a = `${p} ${aff} ${inf}.`;
      const n = `${p} ${neg} ${inf}.`;
      line.push(`${p}:${letterCount(a)}${dicteeMode(a) === 'letters' ? 'L' : 'W'}/${letterCount(n)}${dicteeMode(n) === 'letters' ? 'L' : 'W'}`);
    }
    console.log(`  ${inf.padEnd(11)} ${line.join('  ')}`);
  }
  console.log('\n  and the longer ones:');
  for (const t of [
    'Je vais partir dans dix minutes.', 'On va manger dans une heure.',
    'Il va pleuvoir ce soir.', 'Tu vas travailler demain.', 'Je vais payer.',
    'Elle va sortir ce soir.', 'Je vais pas sortir.', 'Nous allons manger tôt.',
    'Tu vas travailler ce soir ?', 'Non, je ne vais pas travailler.',
  ]) console.log(`  ${t.padEnd(36)} letters=${String(letterCount(t)).padStart(2)}  ${dicteeMode(t)}`);

  // ── 3. THE NASALS, EVERY RESPELLING THIS BUILD WILL WRITE ────────────────
  console.log('\n### 3. hasPlainNasalFor OVER THE AUTHORED RESPELLINGS');
  const cands: [string, string][] = [
    ['Je vais partir.', 'zhuh veh par-TEER'],
    ['Tu vas partir.', 'tü vah par-TEER'],
    ['Il va partir.', 'eel vah par-TEER'],
    ['Nous allons partir.', 'noo za-lohⁿ par-TEER'],
    ['Vous allez partir.', 'voo za-lay par-TEER'],
    ['Ils vont partir.', 'eel vohⁿ par-TEER'],
    ['Je ne vais pas partir.', 'zhuh nuh veh pah par-TEER'],
    ['Tu ne vas pas partir.', 'tü nuh vah pah par-TEER'],
    ['Il ne va pas partir.', 'eel nuh vah pah par-TEER'],
    ["Nous n'allons pas partir.", 'noo na-lohⁿ pah par-TEER'],
    ["Vous n'allez pas partir.", 'voo na-lay pah par-TEER'],
    ['Ils ne vont pas partir.', 'eel nuh vohⁿ pah par-TEER'],
    ['Je vais partir dans dix minutes.', 'zhuh veh par-TEER dAHⁿ dee mee-NÜT'],
    ['On va manger dans une heure.', 'ohⁿ va mahⁿ-ZHAY dAHⁿ zün UHR'],
    ['Il va pleuvoir ce soir.', 'eel va pluh-VWAR suh SWAR'],
    ['Tu vas travailler demain.', 'tü vah trah-vah-YAY duh-MAⁿ'],
    ['Je vais payer.', 'zhuh veh pay-YAY'],
    ['Elle va sortir ce soir.', 'ehl va sor-TEER suh SWAR'],
    ['Je vais pas sortir.', 'zhuh veh pah sor-TEER'],
    ['Nous allons manger tôt.', 'noo za-lohⁿ mahⁿ-ZHAY TOH'],
    ['Tu vas travailler ce soir ?', 'tü vah trah-vah-YAY suh SWAR'],
    ['Non, je ne vais pas travailler.', 'nohⁿ zhuh nuh veh pah trah-vah-YAY'],
    ['Je ne vais pas sortir ce soir.', 'zhuh nuh veh pah sor-TEER suh SWAR'],
    ['Ils ne vont pas venir à la fête.', 'eel nuh vohⁿ pah vuh-NEER a la FEHT'],
    ['Je ne vais pas manger de viande ce soir.', 'zhuh nuh veh pah mahⁿ-ZHAY duh VYAHⁿD suh SWAR'],
    ['Elle ne va pas finir le rapport ce soir.', 'ehl nuh va pah fee-NEER luh ra-POR suh SWAR'],
    ['Tu vas faire quoi ce week-end ?', 'tü vah FEHR kwah suh week-EHND'],
    ['Je vais rester ici.', 'zhuh veh res-TAY ee-SEE'],
  ];
  for (const [fr, re] of cands) {
    const flagged = hasPlainNasalFor(fr, re);
    const supers = re.split('ⁿ').length - 1;
    let seen = 0; let missed = 0;
    if (supers) {
      for (let i = 0; i < supers; i += 1) {
        // break the i-th superscript back to a plain n
        let n = -1; let idx = -1;
        for (let k = 0; k < re.length; k += 1) if (re[k] === 'ⁿ') { n += 1; if (n === i) { idx = k; break; } }
        const broken = `${re.slice(0, idx)}n${re.slice(idx + 1)}`;
        if (hasPlainNasalFor(fr, broken)) seen += 1; else missed += 1;
      }
    }
    console.log(`  ${flagged ? 'FLAGGED' : 'clean  '}  ${supers} nasal(s), ${seen} seen ${missed} missed  ${re.padEnd(46)} ${fr}`);
  }

  // ── 4. THE FUTUR SIMPLE SHAPE ────────────────────────────────────────────
  console.log('\n### 4. THE FUTUR SIMPLE SHAPE, BOTH DIRECTIONS');
  const FS = /(?<![\p{L}\p{N}'’-])(?:je|tu|il|elle|on|nous|vous|ils|elles)\s+(?!camera|cameras|opéra|extra|ultra)[\p{L}]{3,}(?:rai|ras|ra|rons|rez|ront)(?![\p{L}\p{N}'’-])/iu;
  const must = ['je partirai', 'tu partiras', 'il partira demain', 'nous partirons ce soir',
    'vous partirez', 'ils partiront', 'Je mangerai plus tard.', 'Elle sera là.'];
  const mustNot = ['Je vais partir.', 'Il va rester ici.', 'Nous allons partir.',
    'Vous allez payer.', 'il y a', 'on camera', 'Elle va sortir ce soir.',
    'There is a second future in French, one word instead of two, and it comes later.',
    'You are going to hear the other one later on.', 'Tu vas travailler demain.',
    'Wrap the verb that changed, not the one carrying the meaning.',
    'Ils ne vont pas venir à la fête.', 'On va manger dans une heure.'];
  for (const s of must) console.log(`  ${FS.test(s) ? 'FIRES ' : 'MISS  '} ${s}`);
  console.log('  ---');
  for (const s of mustNot) console.log(`  ${FS.test(s) ? 'FIRES!' : 'clean '} ${s}`);

  // ── 5. THE SEED BASELINES ────────────────────────────────────────────────
  const here = dirname(fileURLToPath(import.meta.url));
  const seed = JSON.parse(readFileSync(join(here, '../../ealch-v2/src/content/seed.json'), 'utf8')) as {
    version: number; items: Item[]; lessons: { id: string }[]; units: { id: string }[];
  };
  console.log('\n### 5. THE SEED');
  console.log(`  version ${seed.version}, ${seed.items.length} items, ${seed.lessons.length} lessons, ${seed.units.length} units`);
  console.log(`  a1.03 ending population off the seed: ${endingPopulation(seed.items as never).length}`);
  console.log(`  verbes rows in the seed: ${seed.items.filter((i) => i.theme === 'verbes').length}`);
  const wanted = ['fr.sons.verbes-essentiels.003', 'fr.a2.verbes.261', 'fr.a2.verbes.266',
    'fr.a2.prepositions-essentielles.130', 'fr.a2.verbes.347', 'fr.a2.prepositions-essentielles.184',
    'fr.a2.prepositions-essentielles.172', 'fr.sons.muettes.037', 'fr.sons.consonnes.098',
    'fr.a2.verbes.031', 'fr.sons.verbes-essentiels.041',
    'fr.a2.negation-et-restriction.107', 'fr.a2.negation-et-restriction.152',
    'fr.a2.negation-et-restriction.158', 'fr.a2.negation-et-restriction.164'];
  const inSeed = new Set(seed.items.map((i) => i.id));
  for (const id of wanted) console.log(`  ${inSeed.has(id) ? 'in seed ' : 'ABSENT  '} ${id}`);

  // ── 6. THEME TOTALS AND DUPLICATE fr ─────────────────────────────────────
  rows = await q(
    '6. WOULD ANY AUTHORED fr COLLIDE INSIDE `verbes`?',
    `select id, fr from content_items where theme='verbes' and fr = any($1) order by id`,
    [['Je vais partir.', 'Tu vas partir.', 'Il va partir.', 'Nous allons partir.',
      'Vous allez partir.', 'Ils vont partir.', 'Je ne vais pas partir.', 'Tu ne vas pas partir.',
      'Il ne va pas partir.', "Nous n'allons pas partir.", "Vous n'allez pas partir.",
      'Ils ne vont pas partir.', 'Je vais partir dans dix minutes.', 'On va manger dans une heure.',
      'Il va pleuvoir ce soir.', 'Tu vas travailler demain.', 'Je vais payer.',
      'Elle va sortir ce soir.', 'Je vais pas sortir.', 'Je vais rester ici.',
      'Tu vas travailler ce soir ?', 'Non, je ne vais pas travailler.']],
  );
  console.log(rows.length ? rows.map((r) => `  COLLISION ${r.id} ${r.fr}`).join('\n') : '  none');

  rows = await q('6b. THEME TOTAL for verbes (all levels, all statuses)',
    `select count(*)::int as n from content_items where theme='verbes'`);
  console.log(`  ${rows[0].n}`);

  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
