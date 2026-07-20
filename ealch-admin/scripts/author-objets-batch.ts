// Content batch — objets theme breadth. objets sits at 5 published items
// (all missing ipa, all single-drill voiceflash-only), well under the ≥20
// breadth floor and flagged by publish-content.ts's advisory machine gates
// every run. This pass corrects the 5 existing items (real IPA, kind
// corrected word→phrase mislabel, multi-drill) and adds 17 new everyday-
// object nouns to reach 22, all multi-drill, IPA-complete, gender+article
// correct. Every gender below was cross-checked against the vendored
// Lexique383 extract (gates/data/lexique-gender.csv) before writing this
// file — not just recalled from memory.
//
// Same contract as author-cafe-batch.ts: every item passes validateItem,
// then the whole set upserts into content_items as `published` in ONE
// transaction. Idempotent — items upsert by id, so re-running is a
// no-op-equivalent.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/author-objets-batch.ts --dry-run    validate + report only
//   pnpm tsx scripts/author-objets-batch.ts              apply, one transaction
//   then: pnpm content:publish

// './env' MUST be imported first — see the incident note in migrate.ts.
import './env';
import { describeTarget } from './env';
import { validateItem, type Item } from '../../ealch-v2/src/content/schema.ts';

const DRILLS: Item['drills'] = ['flashcard', 'voiceflash', 'review'];

const ITEMS: Item[] = [
  // ── The 5 existing items, corrected: kind phrase→word (single articled
  // nouns, matching how e.g. cafe's "un café" is classified), real IPA
  // added, drills widened from voiceflash-only to the standard noun set. ──
  { id: 'fr.a1.objets.001', kind: 'word', level: 'a1', theme: 'objets', fr: 'un café', en: 'a coffee', ipa: '/œ̃ ka.fe/', gender: 'm', example: { fr: 'Le café est sur la table.', en: 'The coffee is on the table.' }, tags: [], drills: DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.objets.002', kind: 'word', level: 'a1', theme: 'objets', fr: 'une maison', en: 'a house', ipa: '/yn mɛ.zɔ̃/', gender: 'f', example: { fr: 'Nous avons une petite maison.', en: 'We have a small house.' }, tags: ['nasal'], drills: DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.objets.003', kind: 'word', level: 'a1', theme: 'objets', fr: 'un livre', en: 'a book', ipa: '/œ̃ livʁ/', gender: 'm', example: { fr: 'Je lis un livre intéressant.', en: 'I am reading an interesting book.' }, tags: [], drills: DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.objets.004', kind: 'word', level: 'a1', theme: 'objets', fr: 'le soleil', en: 'the sun', ipa: '/lə sɔ.lɛj/', gender: 'm', example: { fr: 'Le soleil brille aujourd’hui.', en: 'The sun is shining today.' }, tags: [], drills: DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.objets.005', kind: 'word', level: 'a1', theme: 'objets', fr: 'une voiture', en: 'a car', ipa: '/yn vwa.tyʁ/', gender: 'f', example: { fr: 'Sa voiture est rouge.', en: 'Her car is red.' }, tags: [], drills: DRILLS, audioRef: null, version: 1 },

  // ── 17 new everyday-object nouns ──
  { id: 'fr.a1.objets.006', kind: 'word', level: 'a1', theme: 'objets', fr: 'une table', en: 'a table', ipa: '/yn tabl/', gender: 'f', example: { fr: 'La table est dans la cuisine.', en: 'The table is in the kitchen.' }, tags: [], drills: DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.objets.007', kind: 'word', level: 'a1', theme: 'objets', fr: 'une chaise', en: 'a chair', ipa: '/yn ʃɛz/', gender: 'f', example: { fr: 'Assieds-toi sur la chaise.', en: 'Sit on the chair.' }, tags: [], drills: DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.objets.008', kind: 'word', level: 'a1', theme: 'objets', fr: 'un stylo', en: 'a pen', ipa: '/œ̃ sti.lo/', gender: 'm', example: { fr: 'J’écris avec un stylo.', en: 'I write with a pen.' }, tags: [], drills: DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.objets.009', kind: 'word', level: 'a1', theme: 'objets', fr: 'un téléphone', en: 'a phone', ipa: '/œ̃ te.le.fɔn/', gender: 'm', example: { fr: 'Mon téléphone est sur la table.', en: 'My phone is on the table.' }, tags: [], drills: DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.objets.010', kind: 'word', level: 'a1', theme: 'objets', fr: 'une clé', en: 'a key', ipa: '/yn kle/', gender: 'f', example: { fr: 'J’ai perdu ma clé.', en: 'I lost my key.' }, tags: [], drills: DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.objets.011', kind: 'word', level: 'a1', theme: 'objets', fr: 'un sac', en: 'a bag', ipa: '/œ̃ sak/', gender: 'm', example: { fr: 'Elle porte un sac noir.', en: 'She carries a black bag.' }, tags: [], drills: DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.objets.012', kind: 'word', level: 'a1', theme: 'objets', fr: 'une montre', en: 'a watch', ipa: '/yn mɔ̃tʁ/', gender: 'f', example: { fr: 'Il regarde sa montre.', en: 'He looks at his watch.' }, tags: ['nasal'], drills: DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.objets.013', kind: 'word', level: 'a1', theme: 'objets', fr: 'un ordinateur', en: 'a computer', ipa: '/œ̃ ɔʁ.di.na.tœʁ/', gender: 'm', example: { fr: 'L’ordinateur est neuf.', en: 'The computer is new.' }, tags: [], drills: DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.objets.014', kind: 'word', level: 'a1', theme: 'objets', fr: 'une lampe', en: 'a lamp', ipa: '/yn lɑ̃p/', gender: 'f', example: { fr: 'Allume la lampe, s’il te plaît.', en: 'Turn on the lamp, please.' }, tags: ['nasal'], drills: DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.objets.015', kind: 'word', level: 'a1', theme: 'objets', fr: 'un lit', en: 'a bed', ipa: '/œ̃ li/', gender: 'm', example: { fr: 'Le chat dort sur le lit.', en: 'The cat sleeps on the bed.' }, tags: [], drills: DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.objets.016', kind: 'word', level: 'a1', theme: 'objets', fr: 'une porte', en: 'a door', ipa: '/yn pɔʁt/', gender: 'f', example: { fr: 'Ferme la porte, s’il te plaît.', en: 'Close the door, please.' }, tags: [], drills: DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.objets.017', kind: 'word', level: 'a1', theme: 'objets', fr: 'une fenêtre', en: 'a window', ipa: '/yn fə.nɛtʁ/', gender: 'f', example: { fr: 'Ouvre la fenêtre.', en: 'Open the window.' }, tags: [], drills: DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.objets.018', kind: 'word', level: 'a1', theme: 'objets', fr: 'un miroir', en: 'a mirror', ipa: '/œ̃ mi.ʁwaʁ/', gender: 'm', example: { fr: 'Elle se regarde dans le miroir.', en: 'She looks at herself in the mirror.' }, tags: [], drills: DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.objets.019', kind: 'word', level: 'a1', theme: 'objets', fr: 'un parapluie', en: 'an umbrella', ipa: '/œ̃ pa.ʁa.plɥi/', gender: 'm', example: { fr: 'Prends ton parapluie, il pleut.', en: 'Take your umbrella, it’s raining.' }, tags: [], drills: DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.objets.020', kind: 'word', level: 'a1', theme: 'objets', fr: 'une horloge', en: 'a clock', ipa: '/yn ɔʁ.lɔʒ/', gender: 'f', example: { fr: 'L’horloge est au mur.', en: 'The clock is on the wall.' }, tags: [], drills: DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.objets.021', kind: 'word', level: 'a1', theme: 'objets', fr: 'un crayon', en: 'a pencil', ipa: '/œ̃ kʁɛ.jɔ̃/', gender: 'm', example: { fr: 'Le crayon est cassé.', en: 'The pencil is broken.' }, tags: ['nasal'], drills: DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.objets.022', kind: 'word', level: 'a1', theme: 'objets', fr: 'une valise', en: 'a suitcase', ipa: '/yn va.liz/', gender: 'f', example: { fr: 'Elle fait sa valise.', en: 'She is packing her suitcase.' }, tags: [], drills: DRILLS, audioRef: null, version: 1 },
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
      `select count(*)::text as n from content_items where theme = 'objets' and status = 'published'`
    );
    const beforeN = Number(before.rows[0]?.n ?? '0');
    const overlap = await client.query<{ id: string }>(`select id from content_items where id = any($1)`, [ids]);
    const updating = overlap.rows.map((r) => r.id);

    console.log(`\n  objets published today: ${beforeN}`);
    console.log(`  this batch: ${ITEMS.length} items (${ITEMS.length - updating.length} new, ${updating.length} re-authored)`);
    console.log(`  objets after: ${beforeN + (ITEMS.length - updating.length)} (breadth gate wants ≥ 20)`);
    console.log(`  all ${ITEMS.length} items carry ipa + gender + multi-drill (flashcard, voiceflash, review)`);

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
    console.log(`\n✓ objets batch applied: ${ITEMS.length} items published. Run pnpm content:publish to ship it OTA.\n`);
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
