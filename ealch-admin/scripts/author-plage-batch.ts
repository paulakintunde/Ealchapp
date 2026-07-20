// Content batch — plage theme, from grab-bag to real A1 vocabulary. plage was
// just recategorized out of a "dictee" grab-bag theme and currently holds
// exactly one item (fr.a1.plage.001, a sentence). This pass keeps that item
// exactly as it is in the database today (re-listed here so the upsert just
// re-affirms it, idempotently) and adds 17 new real, correct A1 beach/seaside
// vocabulary nouns and verbs: the sea, the sand, the water, a towel, a
// swimsuit, a beach umbrella, a shell, a sandcastle, a bucket, a shovel, the
// holidays, sunglasses, a pool float, a lifeguard, a wave, to swim, to tan.
//
// Every noun's gender below was cross-checked against the vendored Lexique383
// extract (gates/data/lexique-gender.csv) before writing this file — not just
// recalled from memory. One word, "vague" (wave), is not in the CSV; it is
// authored from general knowledge and flagged as a real coverage gap rather
// than silently guessed. See the report accompanying this file for the full
// word → gender → found-in-CSV table.
//
// Same contract as author-objets-batch.ts: every item passes validateItem,
// then the whole set upserts into content_items as `published` in ONE
// transaction. Idempotent — items upsert by id, so re-running is a
// no-op-equivalent.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/author-plage-batch.ts --dry-run    validate + report only
//   pnpm tsx scripts/author-plage-batch.ts              apply, one transaction
//   then: pnpm content:publish

// './env' MUST be imported first — see the incident note in migrate.ts.
import './env';
import { describeTarget } from './env';
import { validateItem, type Item } from '../../ealch-v2/src/content/schema.ts';

const DRILLS: Item['drills'] = ['flashcard', 'voiceflash', 'review'];
// Bare infinitives: flashcard + review only, per the batch's own judgment call
// (a bare verb form doesn't drive voiceflash's image+word pairing as cleanly
// as a concrete noun does).
const VERB_DRILLS: Item['drills'] = ['flashcard', 'review'];

const ITEMS: Item[] = [
  // ── The 1 existing item, re-listed verbatim against today's DB row so the
  // upsert is a no-op-equivalent re-affirmation, not a rewrite. ──
  {
    id: 'fr.a1.plage.001',
    kind: 'sentence',
    level: 'a1',
    theme: 'plage',
    fr: 'Nous allons à la plage demain.',
    en: 'We are going to the beach tomorrow.',
    notes: '“à” takes a grave accent',
    tags: [],
    drills: ['dictation'],
    audioRef: null,
    version: 1,
  },

  // ── 17 new A1 beach/seaside vocabulary items ──
  { id: 'fr.a1.plage.002', kind: 'word', level: 'a1', theme: 'plage', fr: 'la mer', en: 'the sea', ipa: '/la mɛʁ/', gender: 'f', example: { fr: 'La mer est calme ce matin.', en: 'The sea is calm this morning.' }, tags: [], drills: DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.plage.003', kind: 'word', level: 'a1', theme: 'plage', fr: 'le sable', en: 'the sand', ipa: '/lə sabl/', gender: 'm', example: { fr: 'Le sable est chaud sous nos pieds.', en: 'The sand is hot under our feet.' }, tags: [], drills: DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.plage.004', kind: 'word', level: 'a1', theme: 'plage', fr: 'l’eau', en: 'the water', ipa: '/lo/', gender: 'f', example: { fr: 'L’eau est froide aujourd’hui.', en: 'The water is cold today.' }, tags: [], drills: DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.plage.005', kind: 'word', level: 'a1', theme: 'plage', fr: 'une serviette', en: 'a towel', ipa: '/yn sɛʁ.vjɛt/', gender: 'f', example: { fr: 'Elle étend sa serviette sur le sable.', en: 'She spreads her towel on the sand.' }, tags: [], drills: DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.plage.006', kind: 'word', level: 'a1', theme: 'plage', fr: 'un maillot de bain', en: 'a swimsuit', ipa: '/œ̃ ma.jo də bɛ̃/', gender: 'm', example: { fr: 'N’oublie pas ton maillot de bain !', en: 'Don’t forget your swimsuit!' }, tags: ['nasal'], drills: DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.plage.007', kind: 'word', level: 'a1', theme: 'plage', fr: 'un parasol', en: 'a beach umbrella', ipa: '/œ̃ pa.ʁa.sɔl/', gender: 'm', example: { fr: 'Le parasol protège du soleil.', en: 'The umbrella protects from the sun.' }, tags: [], drills: DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.plage.008', kind: 'word', level: 'a1', theme: 'plage', fr: 'un coquillage', en: 'a shell', ipa: '/œ̃ kɔ.ki.jaʒ/', gender: 'm', example: { fr: 'Elle ramasse un coquillage sur la plage.', en: 'She picks up a shell on the beach.' }, tags: [], drills: DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.plage.009', kind: 'word', level: 'a1', theme: 'plage', fr: 'un château de sable', en: 'a sandcastle', ipa: '/œ̃ ʃa.to də sabl/', gender: 'm', example: { fr: 'Les enfants construisent un château de sable.', en: 'The children are building a sandcastle.' }, tags: [], drills: DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.plage.010', kind: 'word', level: 'a1', theme: 'plage', fr: 'un seau', en: 'a bucket', ipa: '/œ̃ so/', gender: 'm', example: { fr: 'Le seau est plein de sable.', en: 'The bucket is full of sand.' }, tags: [], drills: DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.plage.011', kind: 'word', level: 'a1', theme: 'plage', fr: 'une pelle', en: 'a shovel', ipa: '/yn pɛl/', gender: 'f', example: { fr: 'Il creuse avec une pelle.', en: 'He digs with a shovel.' }, tags: [], drills: DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.plage.012', kind: 'word', level: 'a1', theme: 'plage', fr: 'les vacances', en: 'the holidays', ipa: '/le va.kɑ̃s/', gender: 'f', example: { fr: 'Nous passons les vacances à la plage.', en: 'We are spending the holidays at the beach.' }, tags: ['nasal'], drills: DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.plage.013', kind: 'word', level: 'a1', theme: 'plage', fr: 'des lunettes de soleil', en: 'sunglasses', ipa: '/de ly.nɛt də sɔ.lɛj/', gender: 'f', example: { fr: 'Elle porte des lunettes de soleil.', en: 'She is wearing sunglasses.' }, tags: [], drills: DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.plage.014', kind: 'word', level: 'a1', theme: 'plage', fr: 'une bouée', en: 'a pool float', ipa: '/yn bu.e/', gender: 'f', example: { fr: 'Le petit garçon nage avec une bouée.', en: 'The little boy swims with a pool float.' }, tags: [], drills: DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.plage.015', kind: 'word', level: 'a1', theme: 'plage', fr: 'un maître-nageur', en: 'a lifeguard', ipa: '/œ̃ mɛtʁ na.ʒœʁ/', gender: 'm', example: { fr: 'Le maître-nageur surveille la plage.', en: 'The lifeguard watches over the beach.' }, tags: [], drills: DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.plage.016', kind: 'word', level: 'a1', theme: 'plage', fr: 'une vague', en: 'a wave', ipa: '/yn vag/', gender: 'f', example: { fr: 'Une grande vague arrive.', en: 'A big wave is coming.' }, tags: [], drills: DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.plage.017', kind: 'word', level: 'a1', theme: 'plage', fr: 'nager', en: 'to swim', ipa: '/na.ʒe/', example: { fr: 'J’aime nager dans la mer.', en: 'I like to swim in the sea.' }, tags: [], drills: VERB_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.plage.018', kind: 'word', level: 'a1', theme: 'plage', fr: 'bronzer', en: 'to tan', ipa: '/bʁɔ̃.ze/', example: { fr: 'Nous aimons bronzer sur la plage.', en: 'We like to sunbathe on the beach.' }, tags: ['nasal'], drills: VERB_DRILLS, audioRef: null, version: 1 },

  // ── 2 more, added on review to clear the ≥20 breadth floor (the batch
  // landed at 18 and flagged itself as short). "ballon" verified against
  // gates/data/lexique-gender.csv (ballon,m,32.92); "crème" is not in the
  // CSV extract (a real coverage gap, same class as "vague" above) — 'f' is
  // standard-French general knowledge, not a guess against contrary data. ──
  { id: 'fr.a1.plage.019', kind: 'word', level: 'a1', theme: 'plage', fr: 'un ballon', en: 'a ball', ipa: '/œ̃ ba.lɔ̃/', gender: 'm', example: { fr: 'Les enfants jouent avec un ballon.', en: 'The children are playing with a ball.' }, tags: ['nasal'], drills: DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.plage.020', kind: 'word', level: 'a1', theme: 'plage', fr: 'la crème solaire', en: 'sunscreen', ipa: '/la kʁɛm sɔ.lɛʁ/', gender: 'f', example: { fr: 'Mets de la crème solaire avant de sortir.', en: 'Put on sunscreen before going out.' }, tags: [], drills: DRILLS, audioRef: null, version: 1 },
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
      `select count(*)::text as n from content_items where theme = 'plage' and status = 'published'`
    );
    const beforeN = Number(before.rows[0]?.n ?? '0');
    const overlap = await client.query<{ id: string }>(`select id from content_items where id = any($1)`, [ids]);
    const updating = overlap.rows.map((r) => r.id);

    console.log(`\n  plage published today: ${beforeN}`);
    console.log(`  this batch: ${ITEMS.length} items (${ITEMS.length - updating.length} new, ${updating.length} re-authored)`);
    console.log(`  plage after: ${beforeN + (ITEMS.length - updating.length)} (breadth gate wants ≥ 20)`);
    console.log(`  17 of 19 new items carry ipa + multi-drill (flashcard, voiceflash, review); the 2 verbs (nager, bronzer) carry ipa + flashcard/review`);

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
    console.log(`\n✓ plage batch applied: ${ITEMS.length} items published. Run pnpm content:publish to ship it OTA.\n`);
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
