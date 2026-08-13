/* a2.15 discovery, second pass: the frame, the ligature, and the leftovers. */
import './env';
import { Pool } from 'pg';
import { dicteeMode, letterCount, dicteeWords } from '../../ealch-v2/src/content/dictee.logic.ts';
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { fold, matchesAccept } from '../../ealch-v2/src/content/answer.logic.ts';

const B = (w: string) => `(^|[^a-zà-ÿ])${w}(?![a-zà-ÿ])`;

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();

  console.log('\n## A. The three published rows holding a bare `bat`\n');
  const bat = await c.query<{ id: string; theme: string; fr: string; en: string; respell: string | null }>(
    `select id, theme, fr, en, respell from content_items where status='published' and fr ~* $1`, [B('bat')]);
  for (const x of bat.rows) console.log(`  ${x.id.padEnd(38)} ${JSON.stringify(x.fr)}  [${x.respell ?? '-'}]  ${JSON.stringify(x.en)}`);

  console.log('\n## B. letterCount and the oe ligature (U+0153 is outside A-Za-zÀ-ÿ)\n');
  for (const s of ['Je bats les oeufs.', 'Je bats les œufs.', 'Nous battons les œufs.', 'le cœur']) {
    console.log(`  ${String(letterCount(s)).padStart(2)}  ${dicteeMode(s).padEnd(7)}  ${JSON.stringify(s)}  words=${JSON.stringify(dicteeWords(s))}`);
  }

  console.log('\n## C. The chosen frames, every cell, through the real dicteeMode\n');
  const CELLS = [
    'Je prends la clé.', 'Tu prends la clé.', 'Il prend la clé.',
    'Nous prenons la clé.', 'Vous prenez la clé.', 'Ils prennent la clé.',
    'Je mets la clé.', 'Tu mets la clé.', 'Il met la clé.',
    'Nous mettons la clé.', 'Vous mettez la clé.', 'Ils mettent la clé.',
    'Je bats Lyon.', 'Tu bats Lyon.', 'Il bat Lyon.',
    'Nous battons Lyon.', 'Vous battez Lyon.', 'Ils battent Lyon.',
    'Je remets la clé.', 'Tu remets la clé.', 'Il remet la clé.',
    'Nous reprenons la clé.', 'Ils reprennent la clé.',
  ];
  for (const s of CELLS) console.log(`  ${String(letterCount(s)).padStart(2)}  ${dicteeMode(s) === 'letters' ? 'LETTERS' : '  words'}  ${s}`);

  console.log('\n## D. Candidate objects for the compounds\n');
  for (const w of ['le français', 'la question', 'le feu', 'le bruit', 'une réponse', 'la réponse', 'un choix', 'le train', 'le bus', 'le métro', 'un café', 'une erreur', 'la porte', 'le sac']) {
    const r = await c.query<{ id: string; theme: string; respell: string | null; gender: string | null }>(
      `select id, theme, respell, gender from content_items where status='published' and fr = $1 order by id limit 4`, [w]);
    console.log(`  ${w.padEnd(14)} ${r.rowCount} row(s)  ${r.rows.map((x) => `${x.id}[${x.respell ?? '-'}]g=${x.gender ?? '-'}`).join('  ')}`);
  }

  console.log('\n## E. The evidence rows this build wants, in full\n');
  const EV = ['fr.sons.nasales.027', 'fr.sons.nasales.020', 'fr.sons.voyelles.448', 'fr.sons.voyelles.386',
    'fr.sons.verbes-essentiels.012', 'fr.sons.consonnes.107', 'fr.a2.disciplines.051',
    'fr.sons.verbes-essentiels.030', 'fr.sons.verbes-essentiels.225', 'fr.sons.verbes-essentiels.014',
    'fr.sons.verbes-essentiels.196', 'fr.sons.verbes-essentiels.191', 'fr.a2.verbes.027',
    'fr.a1.transports-quotidiens.041', 'fr.b1.verbes.086'];
  const ev = await c.query<Record<string, unknown>>(
    'select id, kind, level, theme, fr, en, ipa, respell, gender, notes, tags, drills::text[] drills, version, card_type, status from content_items where id = any($1)', [EV]);
  const by = new Map(ev.rows.map((r) => [String(r.id), r]));
  for (const id of EV) {
    const x = by.get(id);
    if (!x) { console.log(`  ${id}  NOT FOUND`); continue; }
    console.log(`  ${id}\n      fr=${JSON.stringify(x.fr)} en=${JSON.stringify(x.en)}\n      ipa=${JSON.stringify(x.ipa)} respell=${JSON.stringify(x.respell)} g=${x.gender ?? '-'} kind=${x.kind} level=${x.level} theme=${x.theme}\n      notes=${JSON.stringify(x.notes)} tags=${JSON.stringify(x.tags)} drills=${JSON.stringify(x.drills)} card_type=${JSON.stringify(x.card_type)} status=${x.status} version=${x.version} tie=${String(x.respell ?? '').includes('‿')}`);
  }

  console.log('\n## F. fold() on the forms the quiz will type\n');
  for (const [a, b] of [['reprenons', 'reprenon'], ['prennent', 'prenent'], ['prenons', 'prennons'], ['mettons', 'metons'], ['admettent', 'admetent'], ['battent', 'batent']]) {
    console.log(`  ${a.padEnd(12)} vs ${b.padEnd(12)} fold-equal=${fold(a) === fold(b)}  accepts=${matchesAccept(b, [a])}`);
  }

  console.log('\n## G. Does any published row already hold the sentences this build wants to author?\n');
  for (const s of CELLS) {
    const r = await c.query<{ id: string }>(`select id from content_items where fr = $1`, [s]);
    if (r.rowCount) console.log(`  COLLISION ${s} -> ${r.rows.map((x) => x.id).join(', ')}`);
  }
  console.log('  (nothing printed above means no collision)');

  console.log('\n## H. Duplicate-fr risk: does theme `verbes` already hold any of these?\n');
  const strip = (s: string) => s.toLowerCase().replace(/^(le |la |les |l'|un |une |des |du |de la )/u, '').trim();
  const verbes = await c.query<{ id: string; fr: string }>(
    "select id, fr from content_items where theme='verbes' and status='published'");
  const seen = new Map(verbes.rows.map((r) => [strip(r.fr), r.id]));
  for (const s of [...CELLS, 'battre', 'combattre', 'remettre']) {
    const hit = seen.get(strip(s));
    if (hit) console.log(`  COLLISION in verbes: ${JSON.stringify(s)} already at ${hit}`);
  }
  console.log(`  theme verbes holds ${verbes.rowCount} published rows; no collision printed above means clear`);

  console.log('\n## I. hasPlainNasalFor on every respelling this build will author\n');
  const RS: [string, string][] = [
    ['Je prends la clé.', 'zhuh PRAHⁿ la KLAY'],
    ['Tu prends la clé.', 'tü PRAHⁿ la KLAY'],
    ['Il prend la clé.', 'eel PRAHⁿ la KLAY'],
    ['Nous prenons la clé.', 'noo pruh-NOHⁿ la KLAY'],
    ['Vous prenez la clé.', 'voo pruh-NAY la KLAY'],
    ['Ils prennent la clé.', 'eel PREN la KLAY'],
    ['Je mets la clé.', 'zhuh MEH la KLAY'],
    ['Il met la clé.', 'eel MEH la KLAY'],
    ['Nous mettons la clé.', 'noo meh-TOHⁿ la KLAY'],
    ['Vous mettez la clé.', 'voo meh-TAY la KLAY'],
    ['Ils mettent la clé.', 'eel MET la KLAY'],
    ['Je bats Lyon.', 'zhuh BA lyOHⁿ'],
    ['Il bat Lyon.', 'eel BA lyOHⁿ'],
    ['Nous battons Lyon.', 'noo ba-TOHⁿ lyOHⁿ'],
    ['Ils battent Lyon.', 'eel BAT lyOHⁿ'],
    ['J\'apprends le français.', 'zha-PRAHⁿ luh frahⁿ-SEH'],
    ['Nous apprenons le français.', 'noo-za-pruh-NOHⁿ luh frahⁿ-SEH'],
    ['Ils apprennent le français.', 'eel-za-PREN luh frahⁿ-SEH'],
    ['Je comprends la question.', 'zhuh kohⁿ-PRAHⁿ la kes-TYOHⁿ'],
    ['Nous comprenons la question.', 'noo kohⁿ-pruh-NOHⁿ la kes-TYOHⁿ'],
    ['Ils comprennent la question.', 'eel kohⁿ-PREN la kes-TYOHⁿ'],
    ['Je remets la clé.', 'zhuh ruh-MEH la KLAY'],
    ['Ils remettent la clé.', 'eel ruh-MET la KLAY'],
    ['Je promets une réponse.', 'zhuh proh-MEH ün ray-POHⁿS'],
    ['Ils permettent ce choix.', 'eel pehr-MET suh SHWAH'],
    ['Ils combattent le feu.', 'eel kohⁿ-BAT luh FUH'],
    ['battre', 'BATR'], ['combattre', 'kohⁿ-BATR'], ['remettre', 'ruh-MEHTR'],
  ];
  let flagged = 0;
  for (const [fr, re] of RS) {
    const f = hasPlainNasalFor(fr, re);
    if (f) flagged += 1;
    console.log(`  ${f ? 'FLAGGED ' : '   ok   '} ${fr.padEnd(30)} [${re}]`);
  }
  console.log(`  ${flagged} flagged of ${RS.length}`);

  console.log('\n## J. The blind-spot sweep: break each superscript back to a plain n\n');
  for (const [fr, re] of RS) {
    for (let i = 0; i < re.length; i += 1) {
      if (re[i] !== 'ⁿ') continue;
      const broken = re.slice(0, i) + 'n' + re.slice(i + 1);
      if (!hasPlainNasalFor(fr, broken)) console.log(`  BLIND  ${fr.padEnd(30)} [${broken}]`);
    }
  }
  console.log('  (nothing printed means every superscript is visible to the checker)');

  c.release();
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
