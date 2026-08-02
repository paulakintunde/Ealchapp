// Content Batch — the s0-l02 flashcard deck (500 cards) for sons.02.l1.
//
// Companion to author-voyelles-l2-batch.ts (the lesson body). This batch
// lands the lesson's SRS bank: 337 of the 500 source deck cards converted to
// content items in theme 'voyelles' (ids fr.sons.voyelles.467+, assigned in
// data-array order, APPEND-ONLY). The conversion map, and the reasons the
// other 163 cards are intentionally not imported, are documented at the top
// of scripts/data/voyelles-l2-deck.ts.
//
// Card model: rows with a cardType (gapfill / error / grammar / register)
// become prompt-front cards, exactly the shape app/flashcards.tsx promptMode
// renders (front = prompt, back = fr + en + notes). Rows without a cardType
// are plain vocab. Drills:
//   prompt-front cards → ['flashcard', 'review']   (no voiceflash: the front
//                        is not French audio, per the flashcards.tsx contract)
//   plain vocab        → ['flashcard', 'voiceflash', 'review']
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/author-voyelles-deck-batch.ts --dry-run    validate + report only
//   pnpm tsx scripts/author-voyelles-deck-batch.ts              apply, one transaction

// './env' MUST be imported first — see the incident note in migrate.ts.
import './env';
import { describeTarget } from './env';
import { validateItem, type Item } from '../../ealch-v2/src/content/schema.ts';
import { DECK_ROWS, type DeckRow } from './data/voyelles-l2-deck.ts';

const FIRST_SEQ = 467;

function toItem(row: DeckRow, i: number): Item {
  const seq = String(FIRST_SEQ + i).padStart(3, '0');
  const promptCard = row.ct !== undefined;
  const item: Item = {
    id: `fr.sons.voyelles.${seq}`,
    kind: row.fr.includes(' ') ? 'phrase' : 'word',
    level: 'sons',
    theme: 'voyelles',
    fr: row.fr,
    en: row.en,
    tags: ['deck', row.dk],
    drills: promptCard ? ['flashcard', 'review'] : ['flashcard', 'voiceflash', 'review'],
    audioRef: null,
    version: 1,
  };
  if (row.ipa) item.ipa = row.ipa;
  if (row.g) item.gender = row.g;
  if (row.n) item.notes = row.n;
  if (promptCard) {
    item.cardType = row.ct;
    item.prompt = row.p;
  }
  return item;
}

const NEW_ITEMS: Item[] = DECK_ROWS.map(toItem);

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

  // Structural sanity on the data module before anything else.
  const dks = DECK_ROWS.map((r) => r.dk);
  const dkDupes = dks.filter((d, i) => dks.indexOf(d) !== i);
  if (dkDupes.length) die(`duplicate deck-card ids in data: ${[...new Set(dkDupes)].join(', ')}`);
  const badPrompt = DECK_ROWS.filter((r) => (r.ct !== undefined) !== (r.p !== undefined));
  if (badPrompt.length) die(`rows where ct and prompt do not pair: ${badPrompt.map((r) => r.dk).join(', ')}`);

  const itemIssues = NEW_ITEMS.flatMap((it) => validateItem(it, it.id));
  if (itemIssues.length) die(`items invalid:\n${itemIssues.map((i) => `  ${i.path}: ${i.message}`).join('\n')}`);

  // House-style guards (same rules the seed tests enforce).
  const authored = JSON.stringify(NEW_ITEMS);
  if (authored.includes('—')) die('em dash found in authored copy — the house style bans it');
  if (/honest/i.test(authored)) die('the word "honest" is banned from authored content');

  const byCt: Record<string, number> = {};
  for (const it of NEW_ITEMS) byCt[it.cardType ?? 'vocab'] = (byCt[it.cardType ?? 'vocab'] ?? 0) + 1;

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();

  try {
    // The id block must be genuinely free (or already ours from a re-run):
    // colliding with foreign rows would silently rewrite unrelated content.
    const existing = await client.query<{ id: string; tags: string[] }>(
      `select id, tags from content_items where id = any($1)`,
      [NEW_ITEMS.map((i) => i.id)]
    );
    const foreign = existing.rows.filter((r) => !(r.tags ?? []).includes('deck'));
    if (foreign.length) {
      die(`id collision with non-deck rows (would overwrite foreign content):\n  ${foreign.map((r) => r.id).join('\n  ')}`);
    }

    console.log(`\n  deck cards converted: ${NEW_ITEMS.length} (source deck: 500, skipped by design: ${500 - 163 === NEW_ITEMS.length ? 163 : 'CHECK'})`);
    console.log(`  id range: fr.sons.voyelles.${FIRST_SEQ} .. fr.sons.voyelles.${FIRST_SEQ + NEW_ITEMS.length - 1}`);
    console.log(`  by cardType: ${JSON.stringify(byCt)}`);
    console.log(`  already present from a prior run: ${existing.rows.length}`);

    if (DRY_RUN) {
      console.log('\n✓ dry run — all valid, nothing written.\n');
      return;
    }

    await client.query('begin');
    for (const it of NEW_ITEMS) {
      await client.query(
        `insert into content_items
           (id, kind, level, theme, fr, en, ipa, gender, example, notes, tags, drills, card_type, prompt, audio_ref, version, status, generated_by)
         values ($1,$2,$3,$4,$5,$6,$7,$8,null,$9,$10,$11,$12,$13,null,$14,'published','human')
         on conflict (id) do update set
           kind=excluded.kind, level=excluded.level, theme=excluded.theme, fr=excluded.fr, en=excluded.en,
           ipa=excluded.ipa, gender=excluded.gender, notes=excluded.notes, tags=excluded.tags,
           drills=excluded.drills, card_type=excluded.card_type, prompt=excluded.prompt, version=excluded.version`,
        [
          it.id, it.kind, it.level, it.theme, it.fr, it.en, it.ipa ?? null, it.gender ?? null,
          it.notes ?? null, it.tags, it.drills, it.cardType ?? null, it.prompt ?? null, it.version,
        ]
      );
    }
    await client.query('commit');
    console.log(
      `\n✓ deck batch applied: ${NEW_ITEMS.length} items published in the management plane. ` +
      `Run pnpm content:publish to ship OTA (check git diff on seed.json first).\n`
    );
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
