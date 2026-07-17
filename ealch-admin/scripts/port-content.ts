// PORT — a one-time migration of the app's original hardcoded content into the
// canonical corpus (content_items + content_units), so every drill can select
// it by stable id instead of owning a private array.
//
// It IMPORTS the source arrays from ealch-v2/src/content rather than
// transcribing them, so the French and English text is exactly what shipped —
// "port, do not author". The only text authored here is three English
// translations for the dictation sentences, whose source carries a why-tip but
// no full gloss, and `en` is a required field.
//
// Idempotent: upserts by id (items) and slug (units), so re-running reconciles
// rather than duplicating. Everything lands as `published` and `generated_by
// = 'human'` (it is ported human-written content, not LLM output).
//
// Run:  pnpm content:port   then   pnpm content:publish
import './env';
import { assertDestructiveAllowed, describeTarget } from './env';
import {
  formatIssues,
  itemId,
  lessonId,
  scenarioId,
  unitBand,
  unitId,
  validateItem,
  validateLesson,
  validateScenario,
  validateUnit,
  type Item,
  type Lesson,
  type LessonSection,
  type Scenario,
  type Unit,
} from '../../ealch-v2/src/content/schema.ts';

// The original content, imported wholesale (these files are import-free).
import { deck, vfItems, sbWords, sbTarget, rpLines, type RpLevel } from '../../ealch-v2/src/content/index.ts';
import { lessons as srcLessons, type Lesson as SrcLesson } from '../../ealch-v2/src/content/lessons.ts';

// The prototype's curriculum arrays, FROZEN here as this script's port source.
// They lived in ealch-v2/src/content/curriculum.ts until the CF-17 spine
// cleanup: the app now renders units from the corpus, so the app copy was a
// second source of truth waiting to drift. This script is the one consumer
// left, and a port source should be immutable anyway — do not edit these to
// change the live curriculum; author against content_units in the DB.
// (The DB was ported from exactly these 43 rows; ids sons.01..a2.08 are
// canonical and immutable, display order lives in each unit's `seq`.)
type ProtoUnit = { title: string; sub: string };

const currSons: ProtoUnit[] = [
  { title: "L'alphabet", sub: 'the 26 letters & their French names' },
  { title: 'Les voyelles', sub: 'pure vowels — a, e, i, o, u, ou, eu' },
  { title: 'Les voyelles nasales', sub: 'on · en · in · un — through the nose' },
  { title: 'Les consonnes', sub: 'consonant sounds & the French r' },
  { title: 'Les accents', sub: 'é è ê ë ç — what each mark changes' },
  { title: 'Les lettres muettes', sub: 'silent letters — why « ils parlent » ends quietly' },
  { title: "L'élision", sub: "je → j', le → l' — dropping the vowel" },
  { title: 'Rythme & intonation', sub: 'the music of French — even syllables' },
  { title: 'Masterclass', sub: 'pronunciation masterclass — putting it all together' },
];

const currA1: ProtoUnit[] = [
  { title: 'Les salutations', sub: 'greetings & politeness — bonjour, merci' },
  { title: 'Les nombres', sub: 'numbers 0–100' },
  { title: 'Le genre des noms', sub: 'noun gender — masculin & féminin' },
  { title: 'Les articles définis', sub: 'le, la, les' },
  { title: 'Les pronoms sujets', sub: 'je, tu, il, elle, nous, vous, ils' },
  { title: 'Le verbe être', sub: 'to be — je suis, tu es…' },
  { title: 'Le verbe avoir', sub: "to have — j'ai, tu as…" },
  { title: "Calendrier & l'heure", sub: 'days, months, telling time' },
  { title: 'Les saisons', sub: 'seasons of the year' },
  { title: 'La météo', sub: 'weather — il pleut, il fait beau' },
  { title: 'Décrire les choses', sub: "describing things — c'est, il y a" },
  { title: 'Les couleurs', sub: 'colors & their agreement' },
  { title: 'Adjectifs de base', sub: 'basic adjectives — grand, petit, beau' },
  { title: 'La famille', sub: 'family vocabulary' },
  { title: 'Adjectifs possessifs', sub: 'mon, ma, mes, notre…' },
  { title: "La place de l'adjectif", sub: 'adjective placement — before or after?' },
  { title: 'Demander & localiser', sub: 'asking & locating — où est… ?' },
  { title: 'La négation', sub: 'ne… pas' },
  { title: 'Questions oui / non', sub: 'yes-no questions — est-ce que…' },
  { title: 'Les mots interrogatifs', sub: 'question words — qui, quoi, où, quand' },
  { title: 'Prépositions de lieu', sub: 'prepositions of place — sur, sous, dans' },
  { title: 'Pays & nationalités', sub: 'countries & nationalities' },
  { title: 'La nourriture', sub: 'everyday food vocabulary' },
  { title: 'Le corps', sub: 'body parts' },
  { title: 'La routine quotidienne', sub: 'daily routines — se lever, se coucher' },
  { title: 'La maison', sub: 'home & furniture' },
];

const currA2: ProtoUnit[] = [
  { title: 'Verbes réguliers', sub: 'deep dive — -er, -ir, -re families' },
  { title: 'Verbes irréguliers', sub: 'aller, faire, venir, pouvoir, vouloir' },
  { title: 'Adjectifs & adverbes', sub: 'agreement, formation, -ment adverbs' },
  { title: 'Les prépositions', sub: 'à, de, en, chez — and their traps' },
  { title: 'Le passé composé', sub: 'the past tense — avoir vs être' },
  { title: 'Pronoms objets', sub: 'object pronouns — le, la, lui, y, en' },
  { title: 'Situations quotidiennes', sub: 'everyday situations — shops, transport, pharmacy' },
  { title: 'Comparaisons & références', sub: 'plus… que, moins… que, celui-ci' },
];

// Dictation is NOT imported from drills.ts: that file alone carries type-only
// '@/…' imports that admin's tsc cannot resolve across projects. These three
// entries are copied verbatim from drills.ts dictationSentences('en') — exact
// bytes, curly quotes and all — so this is still a port, not an authoring.
const DICTATION: { fr: string; tip: string }[] = [
  { fr: 'Il a mangé ses croissants avec sa sœur.', tip: '“ses” — possessive, not “ces”' },
  { fr: 'Nous allons à la plage demain.', tip: '“à” takes a grave accent' },
  { fr: 'J’achète du pain à la boulangerie.', tip: '“achète” — è before a silent syllable' },
];

/* ─── helpers ────────────────────────────────────────────────────────────── */

const seq = (n: number) => n; // readability at call sites

/** Classify a French string as word | phrase | sentence for Item.kind. */
function classify(fr: string): Item['kind'] {
  const words = fr.trim().split(/\s+/).length;
  if (words === 1) return 'word';
  if (/[.?!]/.test(fr) && words >= 4) return 'sentence';
  return 'phrase';
}

const gaveGender = (fr: string): Item['gender'] | undefined =>
  /\b(un|le)\b/i.test(fr) ? 'm' : /\b(une|la)\b/i.test(fr) ? 'f' : undefined;

/* ─── items ──────────────────────────────────────────────────────────────── */

function buildItems(): Item[] {
  const items: Item[] = [];

  // Café / restaurant survival deck → flashcards + review. theme 'cafe'.
  deck.forEach((c, i) => {
    items.push({
      id: itemId('a1', 'cafe', seq(i + 1)),
      kind: classify(c.fr),
      level: 'a1',
      theme: 'cafe',
      fr: c.fr,
      en: c.en,
      ...(gaveGender(c.fr) ? { gender: gaveGender(c.fr) } : {}),
      notes: c.ex, // the source's usage note / example line
      tags: [],
      drills: ['flashcard', 'review'],
      audioRef: null,
      version: 1,
    });
  });

  // Voice-flash object vocabulary → voiceflash only. theme 'objets'.
  vfItems.forEach((v, i) => {
    items.push({
      id: itemId('a1', 'objets', seq(i + 1)),
      kind: classify(v.fr),
      level: 'a1',
      theme: 'objets',
      fr: v.fr,
      en: v.en,
      ...(gaveGender(v.fr) ? { gender: gaveGender(v.fr) } : {}),
      tags: [],
      drills: ['voiceflash'],
      audioRef: null,
      version: 1,
    });
  });

  // The one Sentence-Builder sentence. The per-word glosses (sbWords) drive the
  // builder's tiles, so they are preserved in notes as JSON for sentence.tsx.
  items.push({
    id: itemId('a1', 'cafe', 20),
    kind: 'sentence',
    level: 'a1',
    theme: 'cafe',
    fr: sbTarget,
    en: 'I would like a coffee, please.',
    notes: JSON.stringify({ tiles: sbWords }),
    tags: [],
    drills: ['sentence'],
    audioRef: null,
    version: 1,
  });

  // Dictation sentences → dictation. theme 'dictee'. The English side is authored
  // (source has only the why-tip); the tip goes to notes.
  const dictEn = [
    'He ate his croissants with his sister.',
    'We are going to the beach tomorrow.',
    'I buy bread at the bakery.',
  ];
  DICTATION.forEach((d, i) => {
    items.push({
      id: itemId('a1', 'dictee', seq(i + 1)),
      kind: 'sentence',
      level: 'a1',
      theme: 'dictee',
      fr: d.fr,
      en: dictEn[i] ?? d.fr,
      notes: d.tip,
      tags: [],
      drills: ['dictation'],
      audioRef: null,
      version: 1,
    });
  });

  return items;
}

/* ─── lessons ────────────────────────────────────────────────────────────── */

/** Split the source's flat table cells into cols + rows. */
function tableSection(src: SrcLesson): LessonSection {
  const cols = src.table.slice(0, src.tableCols).map((c) => c.v);
  const rows: string[][] = [];
  for (let i = src.tableCols; i < src.table.length; i += src.tableCols) {
    rows.push(src.table.slice(i, i + src.tableCols).map((c) => c.v));
  }
  return { type: 'table', title: 'Reference', cols, rows };
}

function buildLesson(src: SrcLesson, id: string, unit: string, level: Lesson['level']): Lesson {
  const sections: LessonSection[] = [tableSection(src)];
  if (src.examples.length) sections.push({ type: 'examples', title: 'Examples', examples: src.examples });
  if (src.audio.length) sections.push({ type: 'audio', title: 'Listen', lines: src.audio });
  if (src.errors.length) sections.push({ type: 'commonErrors', title: 'Common errors', errors: src.errors });
  // subs were sub-lesson TITLES with no content behind them; surface them as the
  // unit's scope (a focus list) rather than pretending they are openable lessons.
  if (src.subs?.length) sections.push({ type: 'focus', title: 'In this unit', points: src.subs });
  if (src.quiz.length) sections.push({ type: 'quiz', title: 'Quiz', questions: src.quiz });

  return {
    id,
    unitId: unit,
    seq: 1,
    title: src.title,
    level,
    tag: src.tag,
    intro: src.intro,
    sections,
    itemIds: [], // these lessons are self-contained (own table/examples/quiz)
    version: 1,
  };
}

function buildLessons(): Lesson[] {
  // extendedLesson (curriculum.ts) maps: sons unit #3 → sons3, a1 unit #4 → a1_4,
  // a2 unit #1 → a2_1. Reproduce those placements.
  return [
    buildLesson(srcLessons.sons3, lessonId(unitId('sons', 3), 1), unitId('sons', 3), 'sons'),
    buildLesson(srcLessons.a1_4, lessonId(unitId('a1', 4), 1), unitId('a1', 4), 'a1'),
    buildLesson(srcLessons.a2_1, lessonId(unitId('a2', 1), 1), unitId('a2', 1), 'a2'),
  ];
}

/* ─── units ──────────────────────────────────────────────────────────────── */

function buildUnits(): Unit[] {
  const withLesson: Record<string, string[]> = {
    [unitId('sons', 3)]: [lessonId(unitId('sons', 3), 1)],
    [unitId('a1', 4)]: [lessonId(unitId('a1', 4), 1)],
    [unitId('a2', 1)]: [lessonId(unitId('a2', 1), 1)],
  };
  const track = (t: 'sons' | 'a1' | 'a2', src: { title: string; sub: string }[]): Unit[] =>
    src.map((u, i) => {
      const id = unitId(t, i + 1);
      return { id, track: t, seq: i + 1, title: u.title, sub: u.sub, lessonIds: withLesson[id] ?? [] };
    });
  return [...track('sons', currSons), ...track('a1', currA1), ...track('a2', currA2)];
}

/* ─── scenarios ──────────────────────────────────────────────────────────── */

function buildScenarios(): Scenario[] {
  const levels: RpLevel[] = ['A1', 'A2', 'B1', 'B2'];
  return levels.map((lvl, i) => ({
    id: scenarioId(lvl.toLowerCase() as Scenario['level'], 'marche', 1),
    level: lvl.toLowerCase() as Scenario['level'],
    theme: 'marche',
    title: 'Au marché',
    turns: rpLines[lvl],
    version: 1,
  }));
}

/* ─── validate then write ────────────────────────────────────────────────── */

async function main() {
  console.log(`→ ${describeTarget()}`);
  // Upserts, but it touches production content — gate it like the seeder.
  assertDestructiveAllowed('content:port (upserts ported content into content_items/content_units)');

  const items = buildItems();
  const lessons = buildLessons();
  const units = buildUnits();
  const scenarios = buildScenarios();

  // Validate every row against the schema BEFORE touching the database. A bad
  // port must fail here, not leave half-written rows behind.
  const problems: string[] = [];
  items.forEach((it) => { const is = validateItem(it); if (is.length) problems.push(`item ${it.id}:\n${formatIssues(is)}`); });
  lessons.forEach((l) => { const is = validateLesson(l); if (is.length) problems.push(`lesson ${l.id}:\n${formatIssues(is)}`); });
  units.forEach((u) => { const is = validateUnit(u); if (is.length) problems.push(`unit ${u.id}:\n${formatIssues(is)}`); });
  scenarios.forEach((s) => { const is = validateScenario(s); if (is.length) problems.push(`scenario ${s.id}:\n${formatIssues(is)}`); });
  if (problems.length) {
    console.error(`\n✖ ${problems.length} row(s) failed validation. NOTHING written.\n`);
    console.error(problems.join('\n\n'));
    process.exit(1);
  }
  console.log(
    `\n  built & validated: ${items.length} items · ${lessons.length} lessons · ${units.length} units · ${scenarios.length} scenarios`
  );

  const { Pool } = await import('pg');
  if (!process.env.DATABASE_URL) die('No DATABASE_URL.');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });

  // Items: upsert by id.
  for (const it of items) {
    await pool.query(
      `insert into content_items
         (id, kind, level, theme, fr, en, ipa, gender, example, notes, tags, drills, audio_ref, version, status, generated_by)
       values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,'published','human')
       on conflict (id) do update set
         kind=excluded.kind, level=excluded.level, theme=excluded.theme, fr=excluded.fr, en=excluded.en,
         ipa=excluded.ipa, gender=excluded.gender, example=excluded.example, notes=excluded.notes,
         tags=excluded.tags, drills=excluded.drills, audio_ref=excluded.audio_ref, version=excluded.version,
         status='published', updated_at=now()`,
      [it.id, it.kind, it.level, it.theme, it.fr, it.en, it.ipa ?? null, it.gender ?? null,
       it.example ? JSON.stringify(it.example) : null, it.notes ?? null, it.tags,
       `{${it.drills.join(',')}}`, it.audioRef ?? null, it.version]
    );
  }

  // Units, lessons, scenarios: content_units documents, upsert by slug (= id).
  const upsertDoc = async (slug: string, title: string, kind: string, level: string, body: unknown) =>
    pool.query(
      `insert into content_units (slug, title, kind, level, locale, status, body, version, generated_by)
       values ($1,$2,$3,$4,'fr','published',$5,1,'human')
       on conflict (slug) do update set
         title=excluded.title, kind=excluded.kind, level=excluded.level, body=excluded.body,
         status='published', updated_at=now()`,
      [slug, title, kind, level, JSON.stringify(body)]
    );

  // The band comes off the id, not off u.track: `track` is a Den display
  // grouping and is undefined for anything past a2, while content_units.level is
  // NOT NULL. Passing u.track straight through would insert null and fail the
  // whole port on the first b1 unit. unitBand() reads the band that is always
  // there — and die() rather than defaulting, because a unit whose id we cannot
  // parse is a bug to fix, not a row to guess a level for.
  for (const u of units) {
    const band = unitBand(u.id);
    if (!band) die(`unit "${u.id}" has no parseable band in its id — cannot set content_units.level`);
    await upsertDoc(u.id, u.title, 'curriculum_unit', band, u);
  }
  for (const l of lessons) await upsertDoc(l.id, l.title, 'lesson', l.level, l);
  for (const s of scenarios) await upsertDoc(s.id, s.title, 'scenario', s.level, s);

  await pool.end();
  console.log(`\n✓ ported. Run  pnpm content:publish  to cut v1 and write seed.json.\n`);
}

function die(msg: string): never {
  console.error(`\n✖ ${msg}\n`);
  process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
