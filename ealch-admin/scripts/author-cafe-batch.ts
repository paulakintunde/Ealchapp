// Content Batch 1 — café theme breadth (reconciliation/CONTENT-BATCH-1-CAFE.md).
//
// The café theme ships 9 items, all flashcard+review, none with IPA — so Voice
// Flash and Sentence Builder are starved of café content and the Phase 6b
// breadth gates warn. This pass authors 19 honest a1 café items (14 nouns, 2
// short phrases, 3 sentences), all multi-drill, IPA-complete, nouns carrying
// gender and their article, so café reaches 28 and clears the ≥20 breadth gate.
//
// Same contract as author-practice.ts: every item passes validateItem, then the
// whole set upserts into content_items as `published` in ONE transaction.
// Idempotent — items upsert by id, so re-running is a no-op-equivalent.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/author-cafe-batch.ts --dry-run    validate + report only
//   pnpm tsx scripts/author-cafe-batch.ts              apply, one transaction
//   then: pnpm content:publish

// './env' MUST be imported first — see the incident note in migrate.ts.
import './env';
import { describeTarget } from './env';
import { validateItem, type Item } from '../../ealch-v2/src/content/schema.ts';

// ── The batch: 19 new café items ────────────────────────────────────────────
// Nouns carry `gender` and the article in `fr` (gender travels with the noun —
// the Voice Flash principle), `ipa` (required for a pronunciation drill), and a
// natural café `example`. Ids fill fr.a1.cafe.009–.023, skipping the taken .020.

const NOUN_DRILLS: Item['drills'] = ['flashcard', 'voiceflash', 'review'];
const PHRASE_DRILLS: Item['drills'] = ['flashcard', 'voiceflash', 'review'];
const SENTENCE_DRILLS: Item['drills'] = ['sentence', 'review'];

const NEW_ITEMS: Item[] = [
  // ── 14 nouns ──
  { id: 'fr.a1.cafe.009', kind: 'word', level: 'a1', theme: 'cafe', fr: 'un café', en: 'a coffee', ipa: '/œ̃ ka.fe/', gender: 'm', example: { fr: 'Je prends un café le matin.', en: 'I have a coffee in the morning.' }, tags: [], drills: NOUN_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.cafe.010', kind: 'word', level: 'a1', theme: 'cafe', fr: 'un thé', en: 'a tea', ipa: '/œ̃ te/', gender: 'm', example: { fr: 'Elle boit un thé au citron.', en: 'She drinks a tea with lemon.' }, tags: [], drills: NOUN_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.cafe.011', kind: 'word', level: 'a1', theme: 'cafe', fr: 'un croissant', en: 'a croissant', ipa: '/œ̃ kʁwa.sɑ̃/', gender: 'm', example: { fr: 'Un croissant, s’il vous plaît.', en: 'A croissant, please.' }, tags: ['nasal'], drills: NOUN_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.cafe.012', kind: 'word', level: 'a1', theme: 'cafe', fr: 'une baguette', en: 'a baguette', ipa: '/yn ba.ɡɛt/', gender: 'f', example: { fr: 'Je voudrais une baguette.', en: 'I would like a baguette.' }, tags: [], drills: NOUN_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.cafe.013', kind: 'word', level: 'a1', theme: 'cafe', fr: 'un jus d’orange', en: 'an orange juice', ipa: '/œ̃ ʒy dɔ.ʁɑ̃ʒ/', gender: 'm', example: { fr: 'Un jus d’orange, sur place.', en: 'An orange juice, for here.' }, tags: ['nasal'], drills: NOUN_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.cafe.014', kind: 'word', level: 'a1', theme: 'cafe', fr: 'un chocolat chaud', en: 'a hot chocolate', ipa: '/œ̃ ʃɔ.kɔ.la ʃo/', gender: 'm', example: { fr: 'Les enfants aiment le chocolat chaud.', en: 'The children love hot chocolate.' }, tags: [], drills: NOUN_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.cafe.015', kind: 'word', level: 'a1', theme: 'cafe', fr: 'le sucre', en: 'the sugar', ipa: '/lə sykʁ/', gender: 'm', example: { fr: 'Tu prends du sucre ?', en: 'Do you take sugar?' }, tags: [], drills: NOUN_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.cafe.016', kind: 'word', level: 'a1', theme: 'cafe', fr: 'le lait', en: 'the milk', ipa: '/lə lɛ/', gender: 'm', example: { fr: 'Un café au lait, s’il vous plaît.', en: 'A coffee with milk, please.' }, tags: [], drills: NOUN_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.cafe.017', kind: 'word', level: 'a1', theme: 'cafe', fr: 'une tasse', en: 'a cup', ipa: '/yn tas/', gender: 'f', example: { fr: 'Une tasse de café, c’est parfait.', en: 'A cup of coffee is perfect.' }, tags: [], drills: NOUN_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.cafe.018', kind: 'word', level: 'a1', theme: 'cafe', fr: 'le menu', en: 'the menu', ipa: '/lə mə.ny/', gender: 'm', example: { fr: 'Le menu, s’il vous plaît.', en: 'The menu, please.' }, tags: [], drills: NOUN_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.cafe.019', kind: 'word', level: 'a1', theme: 'cafe', fr: 'la terrasse', en: 'the terrace', ipa: '/la tɛ.ʁas/', gender: 'f', example: { fr: 'On s’assoit en terrasse ?', en: 'Shall we sit on the terrace?' }, tags: [], drills: NOUN_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.cafe.021', kind: 'word', level: 'a1', theme: 'cafe', fr: 'le serveur', en: 'the waiter', ipa: '/lə sɛʁ.vœʁ/', gender: 'm', example: { fr: 'Le serveur apporte l’addition.', en: 'The waiter brings the bill.' }, tags: [], drills: NOUN_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.cafe.022', kind: 'word', level: 'a1', theme: 'cafe', fr: 'la monnaie', en: 'the change', ipa: '/la mɔ.nɛ/', gender: 'f', example: { fr: 'Gardez la monnaie.', en: 'Keep the change.' }, tags: [], drills: NOUN_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.cafe.023', kind: 'word', level: 'a1', theme: 'cafe', fr: 'un verre', en: 'a glass', ipa: '/œ̃ vɛʁ/', gender: 'm', example: { fr: 'Un verre d’eau, s’il vous plaît.', en: 'A glass of water, please.' }, tags: [], drills: NOUN_DRILLS, audioRef: null, version: 1 },

  // ── 2 short phrases (voiceflash-eligible, so IPA carried) ──
  { id: 'fr.a1.cafe.024', kind: 'phrase', level: 'a1', theme: 'cafe', fr: 'Un café, s’il vous plaît', en: 'A coffee, please', ipa: '/œ̃ ka.fe sil vu plɛ/', tags: [], drills: PHRASE_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.cafe.025', kind: 'phrase', level: 'a1', theme: 'cafe', fr: 'C’est combien ?', en: 'How much is it?', ipa: '/sɛ kɔ̃.bjɛ̃/', tags: ['nasal'], drills: PHRASE_DRILLS, audioRef: null, version: 1 },

  // ── 3 sentences (Sentence Builder breadth) ──
  { id: 'fr.a1.cafe.026', kind: 'sentence', level: 'a1', theme: 'cafe', fr: 'Je prends un café et un croissant.', en: 'I’ll have a coffee and a croissant.', tags: [], drills: SENTENCE_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.cafe.027', kind: 'sentence', level: 'a1', theme: 'cafe', fr: 'Je voudrais un thé, s’il vous plaît.', en: 'I would like a tea, please.', tags: [], drills: SENTENCE_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.cafe.028', kind: 'sentence', level: 'a1', theme: 'cafe', fr: 'Vous avez une terrasse ?', en: 'Do you have a terrace?', tags: [], drills: SENTENCE_DRILLS, audioRef: null, version: 1 },
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

  // Validate every item against the shared schema BEFORE touching the DB.
  const issues = NEW_ITEMS.flatMap((it) => validateItem(it, it.id));
  if (issues.length) die(`items invalid:\n${issues.map((i) => `  ${i.path}: ${i.message}`).join('\n')}`);

  // Ids must be unique within the batch and must not be one of the reserved
  // taken ids the batch deliberately skips.
  const ids = NEW_ITEMS.map((i) => i.id);
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dupes.length) die(`duplicate ids in batch: ${[...new Set(dupes)].join(', ')}`);

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();

  try {
    // Report the before/after café count so the breadth win is visible.
    const before = await client.query<{ n: string }>(
      `select count(*)::text as n from content_items where theme = 'cafe' and status = 'published'`
    );
    const beforeN = Number(before.rows[0]?.n ?? '0');
    const newIds = new Set(ids);
    const overlap = await client.query<{ id: string }>(
      `select id from content_items where id = any($1)`,
      [ids]
    );
    const updating = overlap.rows.map((r) => r.id);

    console.log(`\n  café published today: ${beforeN}`);
    console.log(`  this batch: ${NEW_ITEMS.length} items (${NEW_ITEMS.length - updating.length} new, ${updating.length} re-authored)`);
    console.log(`  café after: ${beforeN + (NEW_ITEMS.length - updating.length)} (breadth gate wants ≥ 20)`);
    console.log(`  drills: ${NEW_ITEMS.filter((i) => i.drills.includes('voiceflash')).length} voiceflash · ${NEW_ITEMS.filter((i) => i.drills.includes('sentence')).length} sentence · all with IPA where voiceflash`);

    if (DRY_RUN) {
      console.log('\n✓ dry run — all items valid, nothing written.\n');
      return;
    }

    await client.query('begin');
    for (const it of NEW_ITEMS) {
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
    console.log(`\n✓ café batch applied: ${NEW_ITEMS.length} items published. Run pnpm content:publish to ship it OTA.\n`);
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
