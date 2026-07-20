// Content Batch 2 — Salutations breadth + the a1.01 Den lesson.
//
// Café (CONTENT-BATCH-1-CAFE.md) proved the ITEM half of the authoring loop
// (9 → 28 items, no lesson attached). This batch proves the LESSON half:
// a1.01 ("Les salutations") is the very first unit a learner ever opens, and
// it ships today with zero items and zero lessons — a brand-new user's first
// Den entry is "coming soon". This pass authors 20 honest a1 salutations
// items (formal + informal greetings, politeness, farewells, an
// introduction), all multi-drill and IPA-complete, AND a real Den lesson
// (a1.01.l1) with a practice section over all 20 — closing both gaps in one
// themed batch, using the practice-section Lesson pattern already proven by
// author-practice.ts (not the Phase-7 narrated Camille lesson, which needs
// audio infrastructure that does not exist yet).
//
// Same contract as author-cafe-batch.ts / author-practice.ts: every item and
// the lesson pass validateItem/validateLesson/validateUnit before anything is
// written, then the whole set upserts inside ONE transaction. Idempotent —
// items and the lesson upsert by id; the unit patch merges lessonIds rather
// than overwriting other fields.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/author-salutations-batch.ts --dry-run    validate + report only
//   pnpm tsx scripts/author-salutations-batch.ts              apply, one transaction
//   then: pnpm content:publish

// './env' MUST be imported first — see the incident note in migrate.ts.
import './env';
import { describeTarget } from './env';
import {
  validateItem,
  validateLesson,
  validateUnit,
  type Item,
  type Lesson,
  type Unit,
} from '../../ealch-v2/src/content/schema.ts';

// ── The batch: 20 new salutations items ─────────────────────────────────────
// None are nouns, so none carry `gender` — greetings and politeness formulas
// are interjections/phrases, per Item.gender's own "nouns only" contract.
// `nasal` tags only the words/phrases that genuinely carry a nasal vowel,
// checked against the IPA rather than assumed from spelling: "bonne nuit" is
// NOT nasal (the doubled n denasalizes the vowel), unlike "bon" alone.

const WORD_DRILLS: Item['drills'] = ['flashcard', 'voiceflash', 'review'];
const PHRASE_DRILLS: Item['drills'] = ['flashcard', 'voiceflash', 'review'];
const SENTENCE_DRILLS: Item['drills'] = ['sentence', 'review'];

const NEW_ITEMS: Item[] = [
  // ── 5 words ──
  { id: 'fr.a1.salutations.001', kind: 'word', level: 'a1', theme: 'salutations', fr: 'Bonjour', en: 'Hello / Good morning', ipa: '/bɔ̃.ʒuʁ/', example: { fr: 'Bonjour, madame.', en: 'Hello, madam.' }, tags: ['nasal'], drills: WORD_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.salutations.002', kind: 'word', level: 'a1', theme: 'salutations', fr: 'Bonsoir', en: 'Good evening', ipa: '/bɔ̃.swaʁ/', example: { fr: 'Bonsoir, tout le monde.', en: 'Good evening, everyone.' }, tags: ['nasal'], drills: WORD_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.salutations.003', kind: 'word', level: 'a1', theme: 'salutations', fr: 'Salut', en: 'Hi / Bye', ipa: '/sa.ly/', example: { fr: 'Salut, ça va ?', en: 'Hi, how’s it going?' }, tags: [], drills: WORD_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.salutations.004', kind: 'word', level: 'a1', theme: 'salutations', fr: 'Merci', en: 'Thank you', ipa: '/mɛʁ.si/', example: { fr: 'Merci pour votre aide.', en: 'Thank you for your help.' }, tags: [], drills: WORD_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.salutations.005', kind: 'word', level: 'a1', theme: 'salutations', fr: 'Pardon', en: 'Sorry / Excuse me', ipa: '/paʁ.dɔ̃/', example: { fr: 'Pardon, je suis en retard.', en: 'Sorry, I’m late.' }, tags: ['nasal'], drills: WORD_DRILLS, audioRef: null, version: 1 },

  // ── 9 farewell / politeness phrases ──
  { id: 'fr.a1.salutations.006', kind: 'phrase', level: 'a1', theme: 'salutations', fr: 'Au revoir', en: 'Goodbye', ipa: '/o ʁə.vwaʁ/', example: { fr: 'Au revoir, à bientôt !', en: 'Goodbye, see you soon!' }, tags: [], drills: PHRASE_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.salutations.007', kind: 'phrase', level: 'a1', theme: 'salutations', fr: 'Bonne nuit', en: 'Good night', ipa: '/bɔn nɥi/', example: { fr: 'Bonne nuit, dors bien.', en: 'Good night, sleep well.' }, tags: [], drills: PHRASE_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.salutations.008', kind: 'phrase', level: 'a1', theme: 'salutations', fr: 'À bientôt', en: 'See you soon', ipa: '/a bjɛ̃.to/', example: { fr: 'À bientôt, j’espère !', en: 'See you soon, I hope!' }, tags: ['nasal'], drills: PHRASE_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.salutations.009', kind: 'phrase', level: 'a1', theme: 'salutations', fr: 'À demain', en: 'See you tomorrow', ipa: '/a də.mɛ̃/', example: { fr: 'À demain, au bureau.', en: 'See you tomorrow, at the office.' }, tags: ['nasal'], drills: PHRASE_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.salutations.010', kind: 'phrase', level: 'a1', theme: 'salutations', fr: 'S’il vous plaît', en: 'Please (formal)', ipa: '/sil vu plɛ/', example: { fr: 'Un café, s’il vous plaît.', en: 'A coffee, please.' }, tags: [], drills: PHRASE_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.salutations.011', kind: 'phrase', level: 'a1', theme: 'salutations', fr: 'S’il te plaît', en: 'Please (informal)', ipa: '/sil tə plɛ/', example: { fr: 'Passe-moi le sel, s’il te plaît.', en: 'Pass me the salt, please.' }, tags: [], drills: PHRASE_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.salutations.012', kind: 'phrase', level: 'a1', theme: 'salutations', fr: 'Merci beaucoup', en: 'Thank you very much', ipa: '/mɛʁ.si bo.ku/', example: { fr: 'Merci beaucoup pour le cadeau.', en: 'Thank you very much for the gift.' }, tags: [], drills: PHRASE_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.salutations.013', kind: 'phrase', level: 'a1', theme: 'salutations', fr: 'De rien', en: 'You’re welcome', ipa: '/də ʁjɛ̃/', example: { fr: '« Merci ! » « De rien. »', en: '“Thank you!” “You’re welcome.”' }, tags: ['nasal'], drills: PHRASE_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.salutations.014', kind: 'phrase', level: 'a1', theme: 'salutations', fr: 'Excusez-moi', en: 'Excuse me', ipa: '/ɛk.sky.ze mwa/', example: { fr: 'Excusez-moi, où sont les toilettes ?', en: 'Excuse me, where is the restroom?' }, tags: [], drills: PHRASE_DRILLS, audioRef: null, version: 1 },

  // ── 4 wellbeing / introduction phrases ──
  { id: 'fr.a1.salutations.015', kind: 'phrase', level: 'a1', theme: 'salutations', fr: 'Comment allez-vous ?', en: 'How are you? (formal)', ipa: '/kɔ.mɑ̃ ta.le vu/', example: { fr: 'Bonjour ! Comment allez-vous ?', en: 'Hello! How are you?' }, tags: ['nasal'], drills: PHRASE_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.salutations.016', kind: 'phrase', level: 'a1', theme: 'salutations', fr: 'Comment ça va ?', en: 'How’s it going? (informal)', ipa: '/kɔ.mɑ̃ sa va/', example: { fr: 'Salut ! Comment ça va ?', en: 'Hi! How’s it going?' }, tags: ['nasal'], drills: PHRASE_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.salutations.017', kind: 'phrase', level: 'a1', theme: 'salutations', fr: 'Enchanté', en: 'Nice to meet you', ipa: '/ɑ̃.ʃɑ̃.te/', notes: 'Agrees with the speaker’s gender: enchanté (m), enchantée (f) — same pronunciation.', example: { fr: 'Enchanté, je m’appelle Paul.', en: 'Nice to meet you, my name is Paul.' }, tags: ['nasal'], drills: PHRASE_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.salutations.018', kind: 'phrase', level: 'a1', theme: 'salutations', fr: 'Comment vous appelez-vous ?', en: 'What is your name? (formal)', ipa: '/kɔ.mɑ̃ vu.za.pə.le.vu/', example: { fr: 'Bonjour, comment vous appelez-vous ?', en: 'Hello, what is your name?' }, tags: ['nasal'], drills: PHRASE_DRILLS, audioRef: null, version: 1 },

  // ── 2 sentences (Sentence Builder breadth) ──
  { id: 'fr.a1.salutations.019', kind: 'sentence', level: 'a1', theme: 'salutations', fr: 'Je m’appelle Claire, et vous ?', en: 'My name is Claire, and you?', tags: [], drills: SENTENCE_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.a1.salutations.020', kind: 'sentence', level: 'a1', theme: 'salutations', fr: 'Ça va bien, merci, et toi ?', en: 'I’m doing well, thank you, and you?', tags: [], drills: SENTENCE_DRILLS, audioRef: null, version: 1 },
];

// ── The lesson: a1.01.l1, "Les salutations" ─────────────────────────────────
// a1.01 is the FIRST unit in the app and ships today with lessonIds: [] — a
// brand-new learner's very first Den tap reads "coming soon". This gives it a
// real lesson, practicing all 20 items above.

const ALL_IDS = NEW_ITEMS.map((i) => i.id);

const LESSON: Lesson = {
  id: 'a1.01.l1',
  unitId: 'a1.01',
  seq: 1,
  title: 'Les salutations',
  level: 'a1',
  tag: 'A1 · LEÇON 01',
  intro:
    'French greetings split along one line: tu or vous. Get that right, and « bonjour », « merci » and « au revoir » carry you through almost any first exchange.',
  itemIds: ALL_IDS,
  version: 1,
  sections: [
    {
      type: 'table',
      title: 'When to say what',
      cols: ['Moment', 'What the French say'],
      rows: [
        ['Morning to early evening, anyone', 'Bonjour'],
        ['Evening, on arriving', 'Bonsoir'],
        ['Casual, with friends', 'Salut'],
        ['Leaving, any register', 'Au revoir'],
        ['Casual goodbye', 'Salut / À bientôt'],
        ['Right before bed', 'Bonne nuit'],
      ],
    },
    {
      type: 'examples',
      title: 'Examples',
      examples: [
        { fr: 'Bonjour madame, comment allez-vous ?', en: 'Hello madam, how are you?', note: 'Formal — a stranger, a shopkeeper, anyone you address as vous.' },
        { fr: 'Salut ! Comment ça va ?', en: 'Hi! How’s it going?', note: 'Informal — friends, family, anyone you’d address as tu.' },
        { fr: 'Merci beaucoup. — Je vous en prie.', en: 'Thank you very much. — You’re very welcome.', note: 'The formal reply to merci; de rien is the everyday one.' },
      ],
    },
    {
      type: 'useCases',
      title: 'Where you’ll use this',
      cases: [
        { situation: 'Walking into a boulangerie', fr: 'Bonjour, une baguette, s’il vous plaît.', en: 'Hello, a baguette, please.' },
        { situation: 'Meeting a friend’s friend', fr: 'Salut, enchanté !', en: 'Hi, nice to meet you!' },
        { situation: 'Leaving a work meeting', fr: 'Merci à tous, au revoir.', en: 'Thank you all, goodbye.' },
        { situation: 'Ending a call with family', fr: 'À demain, bonne nuit !', en: 'See you tomorrow, good night!' },
      ],
    },
    {
      type: 'commonErrors',
      title: 'Common errors',
      errors: [
        { wrong: '« Salut » to your boss', right: '« Bonjour »', why: 'Salut is strictly informal — using it with someone you’d address as vous reads as overly familiar.' },
        { wrong: '« De rien » to a client', right: '« Je vous en prie »', why: 'De rien is casual; the formal reply to merci in a professional context is je vous en prie.' },
        { wrong: '« Bonjour » after dark', right: '« Bonsoir »', why: 'French switches to bonsoir once evening starts — bonjour then sounds like you didn’t notice the time.' },
      ],
    },
    {
      type: 'practice',
      title: 'Practice',
      skill: 'speak',
      itemIds: ALL_IDS,
    },
    {
      type: 'quiz',
      title: 'Quiz',
      questions: [
        { q: 'You’re greeting your boss at 9am. You say…', opts: ['Salut', 'Bonjour', 'Bonsoir'], correct: 1 },
        { q: 'Which is the informal way to say goodbye?', opts: ['Au revoir', 'Salut', 'Bonne nuit'], correct: 1 },
        { q: 'A colleague says « Merci beaucoup » at work. The formal reply is…', opts: ['De rien', 'Je vous en prie', 'Pardon'], correct: 1 },
        { q: '« Comment allez-vous ? » is asked…', opts: ['To a close friend', 'To someone you address as vous', 'Only in the morning'], correct: 1 },
      ],
    },
  ],
};

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

  // Validate every item BEFORE touching the DB.
  const itemIssues = NEW_ITEMS.flatMap((it) => validateItem(it, it.id));
  if (itemIssues.length) die(`items invalid:\n${itemIssues.map((i) => `  ${i.path}: ${i.message}`).join('\n')}`);

  const ids = NEW_ITEMS.map((i) => i.id);
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dupes.length) die(`duplicate ids in batch: ${[...new Set(dupes)].join(', ')}`);

  const lessonIssues = validateLesson(LESSON, LESSON.id);
  if (lessonIssues.length) die(`lesson invalid:\n${lessonIssues.map((i) => `  ${i.path}: ${i.message}`).join('\n')}`);

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();

  try {
    const before = await client.query<{ n: string }>(
      `select count(*)::text as n from content_items where theme = 'salutations' and status = 'published'`
    );
    const beforeN = Number(before.rows[0]?.n ?? '0');

    const unitRow = await client.query<{ body: Unit }>(
      `select body from content_units where kind = 'curriculum_unit' and body->>'id' = 'a1.01'`
    );
    if (unitRow.rowCount !== 1) die(`unit "a1.01" not found in content_units — cannot attach its lesson`);
    const unitBody = unitRow.rows[0].body;
    const nextUnit: Unit = {
      ...unitBody,
      lessonIds: [...new Set([...(unitBody.lessonIds ?? []), LESSON.id])],
    };
    const unitIssues = validateUnit(nextUnit, nextUnit.id);
    if (unitIssues.length) die(`post-state fails validateUnit:\n${unitIssues.map((i) => `  ${i.path}: ${i.message}`).join('\n')}`);

    const existingLesson = await client.query(
      `select 1 from content_units where kind = 'lesson' and slug = $1`,
      [LESSON.id]
    );

    console.log(`\n  salutations published today: ${beforeN}`);
    console.log(`  this batch: ${NEW_ITEMS.length} items (theme after: ${beforeN + NEW_ITEMS.length})`);
    console.log(
      `  lesson: ${LESSON.id} "${LESSON.title}" — ${existingLesson.rowCount ? 'updating' : 'NEW'}, practice[speak] × ${ALL_IDS.length} items`
    );
    console.log(`  unit a1.01 lessonIds: ${JSON.stringify(unitBody.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);

    if (DRY_RUN) {
      console.log('\n✓ dry run — all valid, nothing written.\n');
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

    await client.query(
      `insert into content_units (slug, title, kind, level, locale, status, body, version, generated_by)
       values ($1,$2,'lesson',$3,'fr','published',$4::jsonb,1,'human')
       on conflict (slug) do update set
         title=excluded.title, level=excluded.level, body=excluded.body, status='published', updated_at=now()`,
      [LESSON.id, LESSON.title, LESSON.level, JSON.stringify(LESSON)]
    );

    const res = await client.query(
      `update content_units set body = $1::jsonb, updated_at = now()
        where kind = 'curriculum_unit' and body->>'id' = 'a1.01'`,
      [JSON.stringify(nextUnit)]
    );
    if (res.rowCount !== 1) {
      await client.query('rollback');
      die(`unit update touched ${res.rowCount} rows — rolled back, nothing changed`);
    }

    await client.query('commit');
    console.log(
      `\n✓ salutations batch applied: ${NEW_ITEMS.length} items + lesson ${LESSON.id} published, unit a1.01 linked. Run pnpm content:publish to ship it OTA.\n`
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
