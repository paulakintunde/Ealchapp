// Content batch — marche theme breadth. marche was just recategorized out of a
// grab-bag "dictee" theme and sits at exactly 1 item: fr.a1.marche.001, the
// seed dictation sentence "J’achète du pain à la boulangerie." This pass
// keeps that item byte-for-byte as it exists in the DB today (re-listed here
// so the idempotent upsert simply re-affirms it) and adds 17 new real A1
// market/shopping vocabulary items — the places, goods, people and verbs a
// beginner needs to actually shop at a French market: le marché itself, la
// boulangerie, le pain, le fromage, un légume, un fruit, une pomme, une
// tomate, le prix, un kilo, un panier, un vendeur / une vendeuse, and the
// three market verbs acheter / vendre / coûter plus the adjective cher.
//
// Every gender below was cross-checked against the vendored Lexique383
// extract (gates/data/lexique-gender.csv) before writing this file — not
// just recalled from memory. All 13 nouns matched the CSV on first instinct;
// see the batch report for the full word → gender → found-in-CSV list.
//
// Same contract as author-objets-batch.ts: every item passes validateItem,
// then the whole set upserts into content_items as `published` in ONE
// transaction. Idempotent — items upsert by id, so re-running is a
// no-op-equivalent.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/author-marche-batch.ts --dry-run    validate + report only
//   pnpm tsx scripts/author-marche-batch.ts              apply, one transaction
//   then: pnpm content:publish

// './env' MUST be imported first — see the incident note in migrate.ts.
import './env';
import { describeTarget } from './env';
import { validateItem, type Item } from '../../ealch-v2/src/content/schema.ts';

// Nouns get the standard multi-drill set; a well-authored noun should carry
// flashcard + voiceflash + review at minimum (CONTENT-AUTHORING-GUIDE §3).
const NOUN_DRILLS: Item['drills'] = ['flashcard', 'voiceflash', 'review'];
// Verbs and the adjective don't take an article/gender the way nouns do, and
// a bare infinitive or adjective doesn't suit the picture-card voiceflash
// format the way an articled noun does — flashcard + review is the honest
// set for these.
const VERB_DRILLS: Item['drills'] = ['flashcard', 'review'];

const ITEMS: Item[] = [
  // ── The existing seed item, kept exactly as it is in the DB today. ──
  {
    id: 'fr.a1.marche.001',
    kind: 'sentence',
    level: 'a1',
    theme: 'marche',
    fr: 'J’achète du pain à la boulangerie.',
    en: 'I buy bread at the bakery.',
    notes: '“achète” — è before a silent syllable',
    tags: [],
    drills: ['dictation'],
    audioRef: null,
    version: 1,
  },

  // ── 17 new A1 market/shopping vocabulary items ──
  { id: 'fr.a1.marche.002', kind: 'word', level: 'a1', theme: 'marche', fr: 'le marché', en: 'the market', ipa: '/lə maʁ.ʃe/', gender: 'm', example: { fr: 'Je vais au marché le samedi.', en: 'I go to the market on Saturdays.' }, tags: [], drills: NOUN_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.marche.003', kind: 'word', level: 'a1', theme: 'marche', fr: 'la boulangerie', en: 'the bakery', ipa: '/bu.lɑ̃ʒ.ʁi/', gender: 'f', example: { fr: 'La boulangerie est à côté du marché.', en: 'The bakery is next to the market.' }, tags: ['nasal'], drills: NOUN_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.marche.004', kind: 'word', level: 'a1', theme: 'marche', fr: 'le pain', en: 'the bread', ipa: '/lə pɛ̃/', gender: 'm', example: { fr: 'Le pain est frais aujourd’hui.', en: 'The bread is fresh today.' }, tags: ['nasal'], drills: NOUN_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.marche.005', kind: 'word', level: 'a1', theme: 'marche', fr: 'le fromage', en: 'the cheese', ipa: '/lə fʁɔ.maʒ/', gender: 'm', example: { fr: 'Ce fromage vient de la ferme.', en: 'This cheese comes from the farm.' }, tags: [], drills: NOUN_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.marche.006', kind: 'word', level: 'a1', theme: 'marche', fr: 'un légume', en: 'a vegetable', ipa: '/œ̃ le.gym/', gender: 'm', example: { fr: 'Ce légume est très frais.', en: 'This vegetable is very fresh.' }, tags: [], drills: NOUN_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.marche.007', kind: 'word', level: 'a1', theme: 'marche', fr: 'un fruit', en: 'a fruit', ipa: '/œ̃ fʁɥi/', gender: 'm', example: { fr: 'J’achète un fruit au marché.', en: 'I buy a fruit at the market.' }, tags: [], drills: NOUN_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.marche.008', kind: 'word', level: 'a1', theme: 'marche', fr: 'une pomme', en: 'an apple', ipa: '/yn pɔm/', gender: 'f', example: { fr: 'Je voudrais une pomme rouge.', en: 'I would like a red apple.' }, tags: [], drills: NOUN_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.marche.009', kind: 'word', level: 'a1', theme: 'marche', fr: 'une tomate', en: 'a tomato', ipa: '/yn tɔ.mat/', gender: 'f', example: { fr: 'La tomate est mûre.', en: 'The tomato is ripe.' }, tags: [], drills: NOUN_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.marche.010', kind: 'word', level: 'a1', theme: 'marche', fr: 'le prix', en: 'the price', ipa: '/lə pʁi/', gender: 'm', example: { fr: 'Quel est le prix des pommes ?', en: 'What is the price of the apples?' }, tags: [], drills: NOUN_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.marche.011', kind: 'word', level: 'a1', theme: 'marche', fr: 'un kilo', en: 'a kilo', ipa: '/œ̃ ki.lo/', gender: 'm', example: { fr: 'Je voudrais un kilo de tomates.', en: 'I would like a kilo of tomatoes.' }, tags: [], drills: NOUN_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.marche.012', kind: 'word', level: 'a1', theme: 'marche', fr: 'un panier', en: 'a basket', ipa: '/œ̃ pa.nje/', gender: 'm', example: { fr: 'Elle porte un panier plein de légumes.', en: 'She carries a basket full of vegetables.' }, tags: [], drills: NOUN_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.marche.013', kind: 'word', level: 'a1', theme: 'marche', fr: 'un vendeur', en: 'a salesman', ipa: '/œ̃ vɑ̃.dœʁ/', gender: 'm', example: { fr: 'Le vendeur pèse les légumes.', en: 'The seller weighs the vegetables.' }, tags: ['nasal'], drills: NOUN_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.marche.014', kind: 'word', level: 'a1', theme: 'marche', fr: 'une vendeuse', en: 'a saleswoman', ipa: '/yn vɑ̃.døz/', gender: 'f', example: { fr: 'La vendeuse sourit aux clients.', en: 'The seller smiles at the customers.' }, tags: ['nasal'], drills: NOUN_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.marche.015', kind: 'word', level: 'a1', theme: 'marche', fr: 'acheter', en: 'to buy', ipa: '/aʃ.te/', example: { fr: 'J’achète des légumes au marché.', en: 'I buy vegetables at the market.' }, tags: [], drills: VERB_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.marche.016', kind: 'word', level: 'a1', theme: 'marche', fr: 'vendre', en: 'to sell', ipa: '/vɑ̃dʁ/', example: { fr: 'Le vendeur vend des fruits frais.', en: 'The seller sells fresh fruit.' }, tags: ['nasal'], drills: VERB_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.marche.017', kind: 'word', level: 'a1', theme: 'marche', fr: 'coûter', en: 'to cost', ipa: '/ku.te/', example: { fr: 'Combien coûte le fromage ?', en: 'How much does the cheese cost?' }, tags: [], drills: VERB_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.marche.018', kind: 'word', level: 'a1', theme: 'marche', fr: 'cher', en: 'expensive', ipa: '/ʃɛʁ/', example: { fr: 'Ce fromage est trop cher.', en: 'This cheese is too expensive.' }, tags: [], drills: VERB_DRILLS, audioRef: null, version: 1 },
];

// ── Apply ───────────────────────────────────────────────────────────────────

const DRY_RUN = process.argv.includes('--dry-run');

function die(msg: string): never {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

async function main() {
  console.log(`→ ${describeTarget()}`);
  if (!process.env.DATABASE_URL) {
    die('No DATABASE_URL. Content is authored against the canonical database, never PGlite.');
  }
  if (DRY_RUN) console.log('  (dry run — nothing will be written)');

  const issues = ITEMS.flatMap((it) => validateItem(it, it.id));
  if (issues.length) die(`items invalid:\n${issues.map((i) => `  ${i.path}: ${i.message}`).join('\n')}`);

  const ids = ITEMS.map((i) => i.id);
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dupes.length) die(`duplicate ids in batch: ${[...new Set(dupes)].join(', ')}`);

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();

  try {
    const before = await client.query<{ n: string }>(
      `select count(*)::text as n from content_items where theme = 'marche' and status = 'published'`
    );
    const beforeN = Number(before.rows[0]?.n ?? '0');
    const overlap = await client.query<{ id: string }>(`select id from content_items where id = any($1)`, [ids]);
    const updating = overlap.rows.map((r) => r.id);

    console.log(`\n  marche published today: ${beforeN}`);
    console.log(`  this batch: ${ITEMS.length} items (${ITEMS.length - updating.length} new, ${updating.length} re-affirmed)`);
    console.log(`  marche after: ${beforeN + (ITEMS.length - updating.length)}`);
    console.log(`  13 of 18 items are nouns carrying ipa + gender + multi-drill (flashcard, voiceflash, review); 3 verbs + 1 adjective carry ipa + flashcard/review (no gender); the seed sentence is dictation-only, unchanged`);

    if (DRY_RUN) {
      console.log('\n✓ dry run — all items valid, nothing written.\n');
      return;
    }

    await client.query('begin');
    for (const it of ITEMS) {
      await client.query(
        `insert into content_items
           (id, kind, level, theme, fr, en, ipa, gender, example, notes, tags, drills, audio_ref, version, status, generated_by)
         values ($1,$2,$3,$4,$5,$6,$7,$8,$9::jsonb,$10,$11,$12,null,$13,'published','human')
         on conflict (id) do update set
           kind=excluded.kind, level=excluded.level, theme=excluded.theme, fr=excluded.fr, en=excluded.en,
           ipa=excluded.ipa, gender=excluded.gender, example=excluded.example, notes=excluded.notes,
           tags=excluded.tags, drills=excluded.drills, version=excluded.version`,
        [
          it.id, it.kind, it.level, it.theme, it.fr, it.en, it.ipa ?? null,
          it.gender ?? null, it.example ? JSON.stringify(it.example) : null, it.notes ?? null,
          it.tags, it.drills, it.version,
        ]
      );
    }
    await client.query('commit');
    console.log(`\n✓ marche batch applied: ${ITEMS.length} items published. Run pnpm content:publish to ship it OTA.\n`);
  } catch (e) {
    await client.query('rollback').catch(() => {});
    throw e;
  } finally {
    client.release();
    await pool.end();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
