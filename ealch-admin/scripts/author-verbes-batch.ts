// Content batch — verbes theme breadth. verbes sits at 5 published items, all
// a2 conjugation-drill sentences across the four regular verb groups (-er:
// parler/regarder, -ir: finir, -re: attendre/vendre) and different subject
// pronouns, with no supporting vocabulary behind them. Unlike cafe/objets
// (topic themes), verbes is a grammar-focused theme: this pass leaves the 5
// existing sentences untouched (re-listed here exactly as confirmed against
// the live DB — kind='sentence', no ipa/gender/example, tags: [],
// drills: ['sentence','review']) and adds 16 new word items in two groups:
//
//   (a) the verb infinitives themselves as vocabulary (parler, regarder,
//       finir, attendre, vendre — the five already drilled by the sentences
//       — plus three more regular verbs rounding out grammar coverage:
//       écouter (-er), choisir (-ir), répondre (-re)). No gender: infinitives
//       are not nouns. drills: ['flashcard','review'] — a bare infinitive is
//       not a natural voiceflash prompt the way an articled noun is.
//
//   (b) the everyday nouns the 5 existing sentences already reference (le
//       français, la télé, les devoirs, le bus), plus a few more nouns that
//       round out a coherent "everyday actions and things" a2 set paired
//       with the verb practice (le train, le vélo, le magasin, la question —
//       la question exists specifically so répondre has a natural object:
//       "il répond à la question"). Every noun carries real IPA + gender,
//       multi-drill like the objets precedent: ['flashcard','voiceflash','review'].
//
// Every gender below was cross-checked against the vendored Lexique383
// extract (gates/data/lexique-gender.csv) before writing this file — not
// recalled from memory. Infinitive verbs were NOT looked up there: they are
// not nouns and carry no gender field. See the report accompanying this
// script for the full word -> gender -> found-in-CSV table.
//
// Same contract as author-objets-batch.ts: every item passes validateItem,
// then the whole set upserts into content_items as `published` in ONE
// transaction. Idempotent — items upsert by id, so re-running is a
// no-op-equivalent.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/author-verbes-batch.ts --dry-run    validate + report only
//   pnpm tsx scripts/author-verbes-batch.ts              apply, one transaction
//   then: pnpm content:publish

// './env' MUST be imported first — see the incident note in migrate.ts.
import './env';
import { describeTarget } from './env';
import { validateItem, type Item } from '../../ealch-v2/src/content/schema.ts';

const VERB_DRILLS: Item['drills'] = ['flashcard', 'review'];
const NOUN_DRILLS: Item['drills'] = ['flashcard', 'voiceflash', 'review'];
const SENTENCE_DRILLS: Item['drills'] = ['sentence', 'review'];

const ITEMS: Item[] = [
  // ── The 5 existing sentences, kept exactly as-is (re-listed to match the
  // live DB row-for-row: no ipa/gender/example, tags: [], drills as shown). ──
  { id: 'fr.a2.verbes.001', kind: 'sentence', level: 'a2', theme: 'verbes', fr: 'Je parle français.', en: 'I speak French.', tags: [], drills: SENTENCE_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a2.verbes.002', kind: 'sentence', level: 'a2', theme: 'verbes', fr: 'Tu regardes la télé.', en: 'You watch TV.', tags: [], drills: SENTENCE_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a2.verbes.003', kind: 'sentence', level: 'a2', theme: 'verbes', fr: 'Nous finissons nos devoirs.', en: 'We finish our homework.', tags: [], drills: SENTENCE_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a2.verbes.004', kind: 'sentence', level: 'a2', theme: 'verbes', fr: 'Elle attend le bus.', en: 'She waits for the bus.', tags: [], drills: SENTENCE_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a2.verbes.005', kind: 'sentence', level: 'a2', theme: 'verbes', fr: 'Ils vendent des fruits au marché.', en: 'They sell fruit at the market.', tags: [], drills: SENTENCE_DRILLS, audioRef: null, version: 1 },

  // ── (a) 8 verb infinitives — the 5 already drilled above, plus 3 more
  // regular verbs (écouter -er, choisir -ir, répondre -re) rounding out the
  // four-group grammar coverage. No gender: verbs are not nouns. ──
  { id: 'fr.a2.verbes.006', kind: 'word', level: 'a2', theme: 'verbes', fr: 'parler', en: 'to speak', ipa: '/paʁ.le/', example: { fr: 'J’aime parler français.', en: 'I like speaking French.' }, tags: [], drills: VERB_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a2.verbes.007', kind: 'word', level: 'a2', theme: 'verbes', fr: 'regarder', en: 'to watch, to look at', ipa: '/ʁə.ɡaʁ.de/', example: { fr: 'Elle aime regarder la télé.', en: 'She likes watching TV.' }, tags: [], drills: VERB_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a2.verbes.008', kind: 'word', level: 'a2', theme: 'verbes', fr: 'finir', en: 'to finish', ipa: '/fi.niʁ/', example: { fr: 'Je dois finir mes devoirs.', en: 'I have to finish my homework.' }, tags: [], drills: VERB_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a2.verbes.009', kind: 'word', level: 'a2', theme: 'verbes', fr: 'attendre', en: 'to wait for', ipa: '/a.tɑ̃dʁ/', example: { fr: 'Nous attendons le bus.', en: 'We are waiting for the bus.' }, tags: ['nasal'], drills: VERB_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a2.verbes.010', kind: 'word', level: 'a2', theme: 'verbes', fr: 'vendre', en: 'to sell', ipa: '/vɑ̃dʁ/', example: { fr: 'Ils vendent des fruits au marché.', en: 'They sell fruit at the market.' }, tags: ['nasal'], drills: VERB_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a2.verbes.011', kind: 'word', level: 'a2', theme: 'verbes', fr: 'écouter', en: 'to listen to', ipa: '/e.ku.te/', example: { fr: 'J’écoute la radio le matin.', en: 'I listen to the radio in the morning.' }, tags: [], drills: VERB_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a2.verbes.012', kind: 'word', level: 'a2', theme: 'verbes', fr: 'choisir', en: 'to choose', ipa: '/ʃwa.ziʁ/', example: { fr: 'Tu choisis un livre à la bibliothèque.', en: 'You choose a book at the library.' }, tags: [], drills: VERB_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a2.verbes.013', kind: 'word', level: 'a2', theme: 'verbes', fr: 'répondre', en: 'to answer, to reply', ipa: '/ʁe.pɔ̃dʁ/', example: { fr: 'Il répond à la question.', en: 'He answers the question.' }, tags: ['nasal'], drills: VERB_DRILLS, audioRef: null, version: 1 },

  // ── (b) 8 nouns: the everyday things the sentences above already
  // reference (français, télé, devoirs, bus), plus train/vélo/magasin/
  // question rounding out a coherent everyday-actions-and-things set. ──
  { id: 'fr.a2.verbes.014', kind: 'word', level: 'a2', theme: 'verbes', fr: 'le français', en: 'the French language', ipa: '/lə fʁɑ̃.sɛ/', gender: 'm', example: { fr: 'Elle apprend le français à l’école.', en: 'She is learning French at school.' }, tags: ['nasal'], drills: NOUN_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a2.verbes.015', kind: 'word', level: 'a2', theme: 'verbes', fr: 'la télé', en: 'the TV', ipa: '/la te.le/', gender: 'f', example: { fr: 'Tu regardes la télé ce soir ?', en: 'Are you watching TV tonight?' }, tags: [], drills: NOUN_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a2.verbes.016', kind: 'word', level: 'a2', theme: 'verbes', fr: 'les devoirs', en: 'the homework', ipa: '/le də.vwaʁ/', gender: 'm', example: { fr: 'Nous finissons nos devoirs avant le dîner.', en: 'We finish our homework before dinner.' }, tags: [], drills: NOUN_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a2.verbes.017', kind: 'word', level: 'a2', theme: 'verbes', fr: 'le bus', en: 'the bus', ipa: '/lə bys/', gender: 'm', example: { fr: 'Elle attend le bus tous les matins.', en: 'She waits for the bus every morning.' }, tags: [], drills: NOUN_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a2.verbes.018', kind: 'word', level: 'a2', theme: 'verbes', fr: 'le train', en: 'the train', ipa: '/lə tʁɛ̃/', gender: 'm', example: { fr: 'Le train arrive à midi.', en: 'The train arrives at noon.' }, tags: ['nasal'], drills: NOUN_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a2.verbes.019', kind: 'word', level: 'a2', theme: 'verbes', fr: 'le vélo', en: 'the bike', ipa: '/lə ve.lo/', gender: 'm', example: { fr: 'Elle roule à vélo le week-end.', en: 'She rides her bike on weekends.' }, tags: [], drills: NOUN_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a2.verbes.020', kind: 'word', level: 'a2', theme: 'verbes', fr: 'le magasin', en: 'the store', ipa: '/lə ma.ɡa.zɛ̃/', gender: 'm', example: { fr: 'Le magasin ferme à dix-neuf heures.', en: 'The store closes at seven p.m.' }, tags: ['nasal'], drills: NOUN_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a2.verbes.021', kind: 'word', level: 'a2', theme: 'verbes', fr: 'la question', en: 'the question', ipa: '/la kɛs.tjɔ̃/', gender: 'f', example: { fr: 'Il répond à la question.', en: 'He answers the question.' }, tags: ['nasal'], drills: NOUN_DRILLS, audioRef: null, version: 1 },
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
      `select count(*)::text as n from content_items where theme = 'verbes' and status = 'published'`
    );
    const beforeN = Number(before.rows[0]?.n ?? '0');
    const overlap = await client.query<{ id: string }>(`select id from content_items where id = any($1)`, [ids]);
    const updating = overlap.rows.map((r) => r.id);

    console.log(`\n  verbes published today: ${beforeN}`);
    console.log(`  this batch: ${ITEMS.length} items (${ITEMS.length - updating.length} new, ${updating.length} re-authored)`);
    console.log(`  verbes after: ${beforeN + (ITEMS.length - updating.length)}`);
    console.log(`  8 verb infinitives (flashcard, review) + 8 nouns (flashcard, voiceflash, review), all ipa-complete, nouns gender-complete`);

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
    console.log(`\n✓ verbes batch applied: ${ITEMS.length} items published. Run pnpm content:publish to ship it OTA.\n`);
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
