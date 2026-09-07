// a2.01.l1 "Les verbes en -ER": the assertions that keep this lesson true.
//
// Modelled on a1-22-pays.test.ts and a1-26-maison.test.ts. Everything here runs
// the REAL app function rather than a copy: an earlier a1.01 test inlined its
// own glossary lookup, copied the version that was already broken, and passed
// while the feature was dead.
//
// ── What this file is actually guarding ────────────────────────────────────
//
// This lesson authors 25 sentences and imports all thirty of its verbs, so the
// failure mode is not "the word is missing". It is:
//
//   THE CONTRAST BEING SPLIT. The four silent forms and the two audible ones sit
//   in ONE tapTable, s05-six, with a "What you hear" column. Spread across four
//   missions the whole Owns evaporates and the lesson becomes a table with every
//   string still present, so the assertion is on the SECTION and not the strings.
//   `Il parle français.` and `Ils parlent français.` carrying DIFFERENT
//   respellings, which would teach a difference that is not there. They are
//   asserted equal, character for character.
//   one of the thirty being quietly swapped out, which a count would not see.
//   a stem-changing verb reaching a deck, a drill or a quiz answer, which takes
//   a2.09's only subject; or the guard against that being written so wide it
//   fires on s16-notmine, which NAMES manger in order to hand it over.
//   aller being conjugated, which is a2.02's lesson.
//   the nous/on statement being scattered, after nineteen later A2 lessons have
//   been told to inherit it from one place.
//   the dictée drifting over sixteen letters, which switches dicteeMode() to
//   WORD tiles and hands the learner every ending pre-spelled. That would leave
//   the lesson's one production surface testing nothing it teaches.
//   any of the eight repaired respellings being reverted, including the two the
//   shared checker cannot see.
//
// Every one of those is asserted below, and every one was mutation-tested: the
// assertion was broken on purpose and confirmed to go red before it was kept.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';

import type { Item, Lesson } from './schema.ts';
import { quizQuestions, validateLesson, formatIssues } from './schema.ts';
import { validateDensity, formatDensity, hasPlainNasalFor } from './density.logic.ts';
import { endingPopulation } from './gender.logic.ts';
import { dicteeMode } from './dictee.logic.ts';
import { MAX_GLOSS_WORDS, glossKeys, segmentSentence } from './gloss.logic.ts';
import { matchesAccept } from './answer.logic.ts';
import { namesUnitLabel } from './unit-label.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  version: number; items: Item[]; lessons: Lesson[];
  units: { id: string; title?: string; sub?: string; canDo?: string; seq?: string | number; lessonIds?: string[]; prereqUnitIds?: string[] }[];
};

const L = seed.lessons.find((l) => l.id === 'a2.01.l1');
const noLesson = !L;
const byId = new Map(seed.items.map((i) => [i.id, i] as const));

/* ─── The shape of the lesson ──────────────────────────────────────────── */

const SPINE = [
  's01-scene', 's02-goals', 's03-derived',
  's04-machine', 's05-six', 's06-nous-on', 's07-thirty',
  's08-onesound', 's09-pronoun', 's10-ear', 's11-spell', 's12-errors', 's13-flash',
  's14-stress', 's15-slips', 's16-notmine',
  's17-speak', 's18-dictation', 's19-scenario', 's20-reading',
  's21-review', 's22-progress', 's23-quiz', 's24-roundup',
];

const ACTS = [
  { id: 'act1', n: 3 },
  { id: 'act2', n: 4 },
  { id: 'act3', n: 6 },
  { id: 'act4', n: 3 },
  { id: 'act5', n: 4 },
  { id: 'act6', n: 4 },
];

const REFRAME = 'Four of the six forms sound the same, so the pronoun carries the person.';
/** NINE sections, plus the `reframe` field itself when the whole object is
 *  walked. Asserted against an explicit constant, never a figure derived from
 *  the lesson: a derived count compares the content to itself and survives any
 *  rewording. */
const REFRAME_SECTIONS = 9;
const REFRAME_APPEARANCES = 10;

const NOUS_ON = 'nous parlons is what you write. on parle is what you say.';
const CONTRAST_SECTION = 's05-six';
const NOUS_ON_SECTION = 's06-nous-on';

/** THE CONTRAST. Four spellings that are one sound, and the two that are not.
 *  These are the SHAPE of the lesson, which is the documented exception to
 *  "a hardcoded count fails on itself": a quiet drop here is exactly what this
 *  file exists to catch. */
const FOUR_SILENT = ['je parle', 'tu parles', 'il parle', 'ils parlent'];
const TWO_AUDIBLE = ['nous parlons', 'vous parlez'];
const SILENT_ENDINGS = ['-e', '-es', '-ent'];
const AUDIBLE_ENDINGS = ['-ons', '-ez'];

/** All thirty, BY NAME. A count passes after somebody quietly swaps one out. */
const THIRTY = [
  'parler', 'regarder', 'écouter', 'aimer', 'habiter', 'travailler',
  'chercher', 'trouver', 'demander', 'arriver', 'rester', 'rentrer',
  'gagner', 'donner', 'aider', 'porter', 'entrer', 'montrer',
  'jouer', 'chanter', 'danser', 'visiter', 'inviter', 'étudier',
  'adorer', 'détester', 'fermer', 'marcher', 'téléphoner', 'oublier',
];

/** a2.09 owns every stem change and it is the very next lesson on the trail.
 *  These may appear as CONTEXT (s16-notmine names three of them in order to hand
 *  them over) and on NO production surface. */
const A209_STEM_CHANGERS = [
  'manger', 'commencer', 'appeler', 'préférer', 'acheter', 'payer', 'essayer',
  'jeter', 'envoyer', 'voyager', 'répéter', 'espérer', 'lever', 'nettoyer',
  'ranger', 'lancer', 'placer', 'déménager', 'protéger', 'renouveler', 'rappeler',
];
/** THE FORMS THAT ACTUALLY MATTER. a2.09's subject is the CHANGED stem, so
 *  `nous mangeons` and `il appelle` are the strings that take its lesson, and a
 *  guard written only over infinitives sees neither: `mangeons` does not contain
 *  `manger`. Added because the mutation test found the hole — leaking
 *  `nous mangeons` into a drill option went GREEN against the first version of
 *  this file, which is precisely the assertion-that-cannot-fail the invariants
 *  warn about. */
const A209_CHANGED_STEMS = [
  'mangeons', 'commençons', 'voyageons', 'rangeons', 'lançons', 'plaçons',
  'déménageons', 'protégeons', 'nageons',
  'appelle', 'appelles', 'appellent', 'rappelle', 'rappelles', 'rappellent',
  'jette', 'jettes', 'jettent', 'renouvelle', 'renouvelles', 'renouvellent',
  'préfère', 'préfères', 'préfèrent', 'répète', 'répètes', 'répètent',
  'espère', 'espères', 'espèrent', 'protège', 'protèges', 'protègent',
  'achète', 'achètes', 'achètent', 'lève', 'lèves', 'lèvent',
  'paie', 'paies', 'paient', 'essaie', 'essaies', 'essaient',
  'envoie', 'envoies', 'envoient', 'nettoie', 'nettoies', 'nettoient',
];
/** aller is a2.02. It may be NAMED once as a trap and conjugated nowhere. */
const ALLER_FORMS = ['vais', 'vas', 'va', 'allons', 'allez', 'vont'];

/** The pairs that are ONE SOUND. Their respellings must be identical strings. */
const HOMOPHONE_PAIRS: [string, string][] = [
  ['fr.a2.verbes.102', 'fr.a2.verbes.105'],
  ['fr.a2.verbes.108', 'fr.a2.verbes.109'],
];

/** The eight respellings this build repaired, with the value it wrote. Reverting
 *  any of them puts a plain n back on a nasal vowel. */
const REPAIRED: Record<string, string> = {
  'fr.a2.verbes.001': 'zhuh parl frahⁿ-SEH',
  'fr.a2.verbes.019': 'duh-mahⁿ-DAY',
  'fr.a2.verbes.016': 'rahⁿ-TRAY',
  'fr.sons.verbes-essentiels.043': 'ahⁿ-TRAY',
  'fr.sons.verbes-essentiels.054': 'mohⁿ-TRAY',
  'fr.a1.evenements-familiaux.059': 'shahⁿ-TAY',
  'fr.a1.evenements-familiaux.060': 'dahⁿ-SAY',
  'fr.a1.amis.019': 'aⁿ-vee-TAY',
};

/** The two WORD-INTERNAL nasals in this lesson's own rows. hasPlainNasalFor
 *  needs the n or m to END a token, so MOHNTR and DAHNS would both sail through
 *  it while being wrong. Invariants §3, and it bites exactly here. */
const MUST_CARRY_SUPERSCRIPT: Record<string, string> = {
  'fr.a2.verbes.123': 'mohⁿtr',
  'fr.a2.verbes.113': 'dahⁿs',
};

/** Rows whose respelling correctly carries NO superscript, because the consonant
 *  is REAL. Asserted so a later author who trusts the shared checker does not
 *  "repair" a correct row into teaching a sound that is not there. */
const MUST_NOT_CARRY_SUPERSCRIPT = [
  'fr.a2.verbes.122', // On donne — /dɔn/, a real n
  'fr.a2.verbes.116', // J'aime — /ɛm/, a real m
];

const OWNED = { from: 'fr.a2.verbes.101', to: 'fr.a2.verbes.140' };
const THEME = 'verbes';

function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, out));
  return out;
}

/** The same walk with TRANSCRIPTION fields left out.
 *
 *  A word-level guard must not read IPA. The scene's break card carries
 *  `/ʒə tʁa.va.je lœ̃.di/`, and IPA separates syllables with a full stop, so
 *  `.va.` reads as a standalone `va` and the aller check fired on it while the
 *  lesson was correct. A guard that fires on legitimate content is a guard the
 *  next author deletes. */
const NOTATION_KEYS = new Set(['ipa', 'respell', 'promptSound', 'scoreSegment']);
function prose(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => prose(x, out));
  else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) if (!NOTATION_KEYS.has(k)) prose(x, out);
  }
  return out;
}

/** Accent-aware word-boundary search. Never build a regex out of a search term:
 *  `\b` is ASCII-only in JavaScript and returns zero on a trailing accent, which
 *  looks exactly like an absence. */
function hasPhrase(hay: string, needle: string): boolean {
  const isWord = (c: string) => /[\p{L}\p{N}'’-]/u.test(c);
  const h = hay.toLowerCase();
  const n = needle.toLowerCase();
  let i = 0;
  while ((i = h.indexOf(n, i)) !== -1) {
    const before = i === 0 ? '' : h[i - 1];
    const after = h[i + n.length] ?? '';
    if (!isWord(before) && !isWord(after)) return true;
    i += 1;
  }
  return false;
}

function section(id: string): Record<string, unknown> | undefined {
  return (L?.sections ?? []).find((s) => (s as { id?: string }).id === id) as Record<string, unknown> | undefined;
}

const learnerText = noLesson ? '' : [
  ...strings(L!.sections),
  ...strings(L!.sheets ?? []),
  ...strings(L!.terms ?? {}),
].join('\n');

const learnerProse = noLesson ? [] : [
  ...prose(L!.sections),
  ...prose(L!.sheets ?? []),
  ...prose(L!.terms ?? {}),
];

/** What the learner is asked to PRODUCE or CHOOSE, plus the vocabulary decks.
 *  Narrower than "every string", and it is the only scope on which the
 *  stem-change guard is honest. */
function productionSurfaces(): string[] {
  if (noLesson) return [];
  const out: string[] = [];
  const quiz = L!.sections.find((s) => s.type === 'quiz');
  if (quiz) {
    for (const q of quizQuestions(quiz as never)) {
      if (q.answer) out.push(q.answer);
      if (q.target) out.push(q.target);
      for (const a of q.accept ?? []) out.push(a);
      // EVERY option, not only the correct one. A learner reads all four and has
      // to consider each, so a neighbour's material in a distractor is still a
      // neighbour's material put in front of them. Reading only opts[correct] is
      // what let `nous mangeons` through the first version of this guard.
      for (const o of q.opts ?? []) out.push(o);
    }
  }
  for (const s of L!.sections) {
    if (s.type === 'scenario') for (const t of s.turns) out.push(t.user, ...(t.alts ?? []).map((a) => a.fr));
    if (s.type === 'groupDrill') {
      for (const g of s.groups) {
        if (g.check) out.push(...g.check.opts);
        out.push(...strings(g.items ?? []));
      }
    }
    if (s.type === 'listening') for (const q of s.questions) out.push(...q.opts);
    if (s.type === 'trapDrill') for (const d of s.drill) out.push(...d.opts);
    if (['vocabThemes', 'flashcards', 'reviewDeck', 'dictation', 'practice'].includes(s.type)) out.push(...strings(s));
  }
  for (const d of L!.drills ?? []) {
    for (const p of (d as { pairs?: [string, string][] }).pairs ?? []) out.push(p[1]);
    const o = d as { opts?: string[]; correct?: number };
    if (typeof o.correct === 'number' && o.opts) out.push(o.opts[o.correct]);
  }
  return out;
}

/* ─── The authored source, imported so the seed is compared to it ─────────
 *
 * Every figure below is DERIVED from the source rather than restated. If the
 * source is unavailable the source-derived tests no-op, and the seed-only ones
 * still run.                                                                  */

let SRC: Lesson | null = null;
let SRC_REFRAME = '';
let SRC_NOUS_ON = '';
let SRC_AUTHORED: Item[] = [];
let SRC_IMPORTED: Item[] = [];
let SRC_THIRTY: readonly string[] = [];
let SRC_REPAIRS: { id: string; fr: string; from: string; to: string }[] = [];
let SRC_DRILL_ADDITIONS: { id: string; add: string }[] = [];
let SRC_SPEAK: string[] = [];
let SRC_DICTATION: string[] = [];
let SRC_ITEM_IDS: string[] = [];
let SRC_READING_ONLY: string[] = [];
let SRC_ENDINGS: { person: string; ending: string; heard: string; audible: boolean }[] = [];
let SRC_HOMOPHONES: [string, string][] = [];
let SRC_STEM_CHANGERS: readonly string[] = [];
let SRC_ALLER: readonly string[] = [];
let SRC_RANGE = { from: '', to: '' };

try {
  const corpus = await import('../../../ealch-admin/scripts/data/verbes-er-corpus.ts');
  const lesson = await import('../../../ealch-admin/scripts/data/verbes-er-lesson.ts');
  const imported = await import('../../../ealch-admin/scripts/data/verbes-er-imported.ts');
  const terms = await import('../../../ealch-admin/scripts/data/verbes-er-terms.ts');
  SRC = lesson.VERBES_ER_LESSON as Lesson;
  SRC_REFRAME = terms.REFRAME as string;
  SRC_NOUS_ON = terms.NOUS_ON as string;
  SRC_AUTHORED = (corpus.VERBES_ER as unknown[]).map((s) => corpus.toItem(s as never)) as Item[];
  SRC_IMPORTED = imported.IMPORTED_ROWS as unknown as Item[];
  SRC_THIRTY = corpus.THE_THIRTY as readonly string[];
  SRC_REPAIRS = corpus.RESPELL_REPAIRS as unknown as typeof SRC_REPAIRS;
  SRC_DRILL_ADDITIONS = corpus.DRILL_ADDITIONS as unknown as typeof SRC_DRILL_ADDITIONS;
  SRC_SPEAK = lesson.VERBES_ER_SPEAK_IDS as string[];
  SRC_DICTATION = lesson.VERBES_ER_DICTATION_IDS as string[];
  SRC_ITEM_IDS = lesson.VERBES_ER_ITEM_IDS as string[];
  SRC_READING_ONLY = imported.READING_ONLY_IDS as string[];
  SRC_ENDINGS = corpus.ENDINGS as unknown as typeof SRC_ENDINGS;
  SRC_HOMOPHONES = corpus.HOMOPHONE_PAIRS as unknown as [string, string][];
  SRC_STEM_CHANGERS = corpus.A209_STEM_CHANGERS as readonly string[];
  SRC_ALLER = corpus.ALLER_FORMS as readonly string[];
  SRC_RANGE = corpus.OWNED_ID_RANGE as typeof SRC_RANGE;
} catch {
  // Not available; the source-derived tests below no-op.
}
const noSrc = !SRC;

/* ═══ 1. The lesson exists, in the shape it claims ═══════════════════════ */

test('a2.01.l1 is in the seed', () => {
  ok(L, 'a2.01.l1 is not in seed.json');
});

test('it is a rebuild of the pre-v2 stub, not a new lesson', { skip: noLesson }, () => {
  strictEqual(L!.unitId, 'a2.01');
  strictEqual(L!.level, 'a2');
  ok(L!.version >= 4, `version is ${L!.version}; the stub shipped at v2 and the rebuild moves the counter forward`);
  ok(L!.acts?.length, 'no acts: this would still be a v1-architecture lesson');
  ok(L!.reframe, 'no reframe');
  ok(L!.deckTranche?.length, 'no deckTranche');
});

test('the spine is these missions, in this order', { skip: noLesson }, () => {
  deepStrictEqual(L!.sections.map((s) => (s as { id?: string }).id), SPINE);
});

test('the act structure holds, and every section belongs to exactly one act', { skip: noLesson }, () => {
  deepStrictEqual((L!.acts ?? []).map((a) => ({ id: a.id, n: a.sections.length })), ACTS);
  const claimed = (L!.acts ?? []).flatMap((a) => a.sections);
  deepStrictEqual(claimed.slice().sort(), SPINE.slice().sort(), 'the acts and the spine name different sections');
  strictEqual(new Set(claimed).size, claimed.length, 'a section is claimed by two acts');
});

test('THE OWNS ACT IS HEAVIER THAN THE PARADIGM ACT', { skip: noLesson }, () => {
  const acts = new Map((L!.acts ?? []).map((a) => [a.id, a] as const));
  const paradigm = acts.get('act2')!;
  const owns = acts.get('act3')!;
  ok(
    owns.sections.length > paradigm.sections.length,
    `the Owns act has ${owns.sections.length} missions and the paradigm act has ${paradigm.sections.length}. `
    + 'If the paradigm gets more weight than the Owns, this is the wrong lesson: thirty verbs is a word list.',
  );
  ok(owns.estScreens > paradigm.estScreens, 'the Owns act is not the longer of the two by screens either');
});

test('the mission count is inside the house range', { skip: noLesson }, () => {
  ok(L!.sections.length >= 19 && L!.sections.length <= 24, `${L!.sections.length} missions, outside 19 to 24`);
});

test('it validates, and it passes the density validator', { skip: noLesson }, () => {
  const issues = validateLesson(L!, L!.id);
  strictEqual(issues.length, 0, formatIssues(issues));
  const d = validateDensity(L!, new Set(seed.items.map((i) => i.id)));
  strictEqual(d.length, 0, formatDensity(d));
});

test('exactly one quiz section, because the pager renders exactly one', { skip: noLesson }, () => {
  strictEqual(L!.sections.filter((s) => s.type === 'quiz').length, 1);
});

test('one table and one tapTable, and the table is in a sheet', { skip: noLesson }, () => {
  strictEqual(L!.sections.filter((s) => s.type === 'tapTable').length, 1, 'more than one tapTable: the paradigm gets one screen and then stops');
  strictEqual(
    L!.sections.filter((s) => s.type === 'table').length, 0,
    'a table in the flow. The density validator refuses `table` at layer core; the paradigm table belongs in sheet.a2.01.endings.',
  );
  const sheetTables = (L!.sheets ?? []).flatMap((sh) => (sh.sections ?? []).filter((s) => s.type === 'table'));
  ok(sheetTables.length >= 1, 'no table anywhere, so the paradigm has no reference form');
});

/* ═══ 2. THE CONTRAST, WHICH IS THE LESSON ═══════════════════════════════ */

test('all four silent forms and both audible ones are in ONE section', { skip: noLesson }, () => {
  const s = section(CONTRAST_SECTION);
  ok(s, `${CONTRAST_SECTION} does not exist`);
  const text = strings(s).join('\n').toLowerCase();
  const missingSilent = FOUR_SILENT.filter((f) => !text.includes(f));
  const missingAudible = TWO_AUDIBLE.filter((f) => !text.includes(f));
  deepStrictEqual(
    [...missingSilent, ...missingAudible], [],
    `${CONTRAST_SECTION} is missing forms. THE CONTRAST IS THE LESSON: four spellings that are one sound, `
    + 'set against the two that are not. Split across four missions it is invisible and this becomes a table.',
  );
});

test('exactly one section puts all six forms on ONE screen', { skip: noLesson }, () => {
  // Scoped to sections that render their content SIMULTANEOUSLY. s08-onesound
  // holds the same six forms and is a deck, so the learner meets one per screen
  // and no contrast is made; the quiz holds them across thirty questions. Both
  // are legitimate and a guard that fired on them would be deleted by the next
  // author. What must stay unique is the SIMULTANEOUS presentation, because a
  // second one would be a second paradigm table.
  const simultaneous = L!.sections.filter((sec) => {
    const v = sec as { render?: string; swipe?: boolean; type: string };
    if (v.render === 'deck' || v.swipe || v.type === 'quiz') return false;
    const text = strings(sec).join('\n').toLowerCase();
    return [...FOUR_SILENT, ...TWO_AUDIBLE].every((f) => text.includes(f));
  }).map((sec) => (sec as { id?: string }).id);
  deepStrictEqual(simultaneous, [CONTRAST_SECTION]);
});

test('the contrast section is a tapTable of six rows with a "what you hear" column', { skip: noLesson }, () => {
  const s = section(CONTRAST_SECTION) as unknown as { type: string; cols: string[]; rows: { cells: string[] }[] };
  strictEqual(s.type, 'tapTable', 'tapTable is not in ownsLayout(), which is why this is six rows and not nine');
  strictEqual(s.rows.length, 6);
  ok(
    s.cols.some((c) => /hear/i.test(c)),
    'no column names what the ear receives. Without it this is a paradigm table and the Owns is not on the screen.',
  );
  // FOUR rows say the ending is silent and TWO do not. That ratio IS the reframe.
  const silentRows = s.rows.filter((r) => /nothing/i.test(r.cells[2] ?? '')).length;
  strictEqual(silentRows, 4, `${silentRows} of six rows report nothing at the end; the reframe says four`);
});

test('the two pairs that are one sound carry IDENTICAL respellings', { skip: noLesson }, () => {
  for (const [a, b] of HOMOPHONE_PAIRS) {
    const x = byId.get(a);
    const y = byId.get(b);
    ok(x && y, `${a} or ${b} is not in the seed`);
    ok(x!.fr !== y!.fr, `${a} and ${b} are the same sentence, so the pair proves nothing`);
    strictEqual(
      x!.respell, y!.respell,
      `${a} "${x!.fr}" and ${b} "${y!.fr}" are ONE SOUND and their respellings differ `
      + `(${JSON.stringify(x!.respell)} vs ${JSON.stringify(y!.respell)}). A difference here teaches one that is not there.`,
    );
    strictEqual(x!.ipa, y!.ipa, `${a} and ${b} carry different IPA and they are the same sound`);
  }
});

test('the source and the seed agree about which pairs are homophones', { skip: noLesson || noSrc }, () => {
  deepStrictEqual(SRC_HOMOPHONES, HOMOPHONE_PAIRS);
});

test('every ending in the set reaches a screen, silent and audible', { skip: noLesson }, () => {
  for (const e of [...SILENT_ENDINGS, ...AUDIBLE_ENDINGS]) {
    ok(learnerText.includes(e), `the ending "${e}" appears on no screen`);
  }
});

test('the source ending table splits four silent against two audible', { skip: noSrc }, () => {
  strictEqual(SRC_ENDINGS.length, 6);
  strictEqual(SRC_ENDINGS.filter((e) => !e.audible).length, 4);
  strictEqual(SRC_ENDINGS.filter((e) => e.audible).length, 2);
  deepStrictEqual([...new Set(SRC_ENDINGS.filter((e) => e.audible).map((e) => e.ending))].sort(), AUDIBLE_ENDINGS.slice().sort());
});

/* ═══ 3. The reframe ════════════════════════════════════════════════════ */

test('the reframe is this line, verbatim', { skip: noLesson }, () => {
  strictEqual(L!.reframe, REFRAME);
});

test('the source and the seed carry the same reframe', { skip: noSrc }, () => {
  strictEqual(SRC_REFRAME, REFRAME);
});

test('the reframe appears verbatim in exactly nine sections', { skip: noLesson }, () => {
  const carrying = L!.sections.filter((s) => strings(s).some((x) => x.includes(REFRAME)));
  strictEqual(carrying.length, REFRAME_SECTIONS, `reframe in ${carrying.length} sections: ${carrying.map((s) => (s as { id?: string }).id).join(', ')}`);
  strictEqual(strings(L!).filter((s) => s.includes(REFRAME)).length, REFRAME_APPEARANCES);
});

test('the reframe is not about the paradigm', { skip: noLesson }, () => {
  // A reframe an author could apply between subject and verb. If it ever becomes
  // a statement about how many endings there are, the Owns has been swapped for
  // the cheap half and nothing else in this file would notice.
  ok(/pronoun/i.test(L!.reframe!), 'the reframe no longer names the pronoun, which is the thing the learner has to lean on');
  ok(/sound/i.test(L!.reframe!), 'the reframe no longer says anything about the sound');
});

/* ═══ 4. THE nous / on STATEMENT, WHICH NINETEEN LESSONS INHERIT ═════════ */

test('the nous/on statement exists and lives in exactly one section', { skip: noLesson }, () => {
  const holders = L!.sections
    .filter((s) => strings(s).some((x) => x.includes(NOUS_ON)))
    .map((s) => (s as { id?: string }).id);
  deepStrictEqual(
    holders, [NOUS_ON_SECTION],
    'nineteen later A2 lessons are told to inherit this wording from one place. '
    + 'Scattered across three cards, "where is this said?" has no answer.',
  );
});

test('the statement is stated plainly, not buried in an example', { skip: noLesson }, () => {
  const s = section(NOUS_ON_SECTION) as unknown as { type: string; body: string };
  strictEqual(s.type, 'teach');
  ok(s.body.startsWith(NOUS_ON), 'the statement is not the first thing on the screen that carries it');
});

test('the source constant and the seed agree', { skip: noSrc }, () => {
  strictEqual(SRC_NOUS_ON, NOUS_ON);
});

test('the lesson says which form on takes, because that is the half a1.05 did not give', { skip: noLesson }, () => {
  const s = section(NOUS_ON_SECTION) as unknown as { body: string };
  ok(/on takes the same form as il/i.test(s.body), 'the section no longer says which form on takes');
  ok(learnerText.includes('On regarde la télé.'), 'the on form is stated and never shown');
  ok(learnerText.includes('Nous regardons la télé.'), 'the nous form is stated and never shown');
});

/* ═══ 5. The thirty verbs ═══════════════════════════════════════════════ */

for (const verb of THIRTY) {
  test(`the lesson teaches ${verb}`, { skip: noLesson }, () => {
    ok(hasPhrase(learnerText, verb), `${verb} is named by no screen`);
    const row = seed.items.find((i) => i.fr === verb && i.kind === 'word' && L!.itemIds.includes(i.id));
    ok(row, `${verb} is on a screen but no itemId releases it, so it never reaches the flashcard hub`);
  });
}

test('there are exactly thirty, and the source names the same thirty', { skip: noSrc }, () => {
  strictEqual(SRC_THIRTY.length, 30);
  deepStrictEqual([...SRC_THIRTY], THIRTY);
});

test('not one of the thirty was authored: every one is imported', { skip: noSrc }, () => {
  const authoredFr = new Set(SRC_AUTHORED.map((i) => i.fr));
  const reauthored = THIRTY.filter((v) => authoredFr.has(v));
  deepStrictEqual(reauthored, [], 'a verb was authored that already exists in Postgres; flashhub keys on fr per theme');
  strictEqual(SRC_AUTHORED.filter((i) => i.kind !== 'sentence').length, 0, 'this lesson authors sentences only');
});

test('no imported verb row carries a gender', { skip: noLesson }, () => {
  const gendered = THIRTY
    .map((v) => seed.items.find((i) => i.fr === v && i.kind === 'word' && L!.itemIds.includes(i.id)))
    .filter((r): r is Item => Boolean(r) && Boolean(r!.gender));
  deepStrictEqual(
    gendered.map((r) => `${r.id} "${r.fr}"`), [],
    'an infinitive is not a noun, and a gendered single-word row joins a1.03\'s measured ending population',
  );
});

test('the thirty are reachable as cards, not merely as ids', { skip: noLesson }, () => {
  const drill = section('s07-thirty') as unknown as { type: string; groups: { items?: { itemId?: string }[] }[] };
  strictEqual(drill.type, 'groupDrill', 'vocabThemes cards carry no itemId, which is why the thirty are a groupDrill');
  const named = new Set(drill.groups.flatMap((g) => (g.items ?? []).map((i) => i.itemId)).filter(Boolean));
  const absent = THIRTY.filter((v) => {
    const row = seed.items.find((i) => i.fr === v && i.kind === 'word' && L!.itemIds.includes(i.id));
    return !row || !named.has(row.id);
  });
  deepStrictEqual(absent, [], 'verb(s) whose id is declared and drawn by nothing. a1.08 shipped 43 of those.');
});

/* ═══ 6. What belongs to the neighbours ═════════════════════════════════ */

test('no stem-changing verb reaches a production surface', { skip: noLesson }, () => {
  const surfaces = productionSurfaces();
  const leaked = A209_STEM_CHANGERS.filter((v) => surfaces.some((s) => hasPhrase(s, v)));
  deepStrictEqual(leaked, [], 'a2.09 owns every stem change and it is the very next lesson on the trail');
});

test('no CHANGED stem reaches a production surface either', { skip: noLesson }, () => {
  // The half that matters, and the half a guard on infinitives cannot see.
  const surfaces = productionSurfaces();
  const leaked = A209_CHANGED_STEMS.filter((v) => surfaces.some((s) => hasPhrase(s, v)));
  deepStrictEqual(leaked, [], 'a changed stem IS a2.09\'s lesson, and `mangeons` does not contain `manger`');
});

test('the changed-stem list covers every verb the brief names', { skip: noLesson }, () => {
  // Written as an explicit pairing rather than derived from a prefix. A prefix
  // heuristic looked right and was wrong on the first verb it met: `payer` gives
  // `paie`, which shares only two letters with it. The two lists have to stay in
  // step, or adding a verb to one leaves the other blind to exactly the form
  // that matters.
  const COVERS: Record<string, string> = {
    manger: 'mangeons',
    commencer: 'commençons',
    appeler: 'appelle',
    préférer: 'préfère',
    acheter: 'achète',
    payer: 'paie',
    essayer: 'essaie',
    jeter: 'jette',
  };
  const uncovered = Object.entries(COVERS)
    .filter(([inf, changed]) => !A209_STEM_CHANGERS.includes(inf) || !A209_CHANGED_STEMS.includes(changed))
    .map(([inf]) => inf);
  deepStrictEqual(uncovered, [], 'infinitive(s) whose changed form nothing guards');
});

test('none of the thirty is a stem-changer', { skip: noLesson }, () => {
  deepStrictEqual(THIRTY.filter((v) => A209_STEM_CHANGERS.includes(v)), []);
});

test('the hand-off to a2.09 is made, and manger is named as the cost', { skip: noLesson }, () => {
  // Asserted PRESENT. The lesson gives up the most frequent -er verb there is and
  // has to SAY so, or a learner who meets manger in the wild concludes the
  // pattern is unreliable. This is also what stops the guard above being widened
  // to every string, which would fire here and then be deleted.
  ok(hasPhrase(learnerText, 'manger'), 'manger appears nowhere; the hand-off to a2.09 has been removed');
  const s = section('s16-notmine');
  ok(s && strings(s).some((x) => hasPhrase(x, 'manger')), 'manger is named somewhere other than the hand-off card');
});

test('the source stem-changer list still covers the ones the brief names', { skip: noSrc }, () => {
  for (const v of ['manger', 'commencer', 'appeler', 'préférer', 'acheter', 'payer', 'essayer', 'jeter']) {
    ok(SRC_STEM_CHANGERS.includes(v), `${v} is not in the guarded list, so it could reach a drill unnoticed`);
  }
});

test('aller is never conjugated', { skip: noLesson }, () => {
  const conjugated = ALLER_FORMS.filter((f) => learnerProse.some((s) => hasPhrase(s, f)));
  deepStrictEqual(conjugated, [], 'aller is a2.02. One line naming it as a trap is the ceiling.');
});

test('aller IS named once, as the trap', { skip: noLesson }, () => {
  ok(hasPhrase(learnerText, 'aller'), 'aller is named nowhere, so a learner will try the pattern on it');
});

test('the source and this file guard the same forms of aller', { skip: noSrc }, () => {
  deepStrictEqual([...SRC_ALLER], ALLER_FORMS);
});

test('no past tense: parler and parlé are a2.05', { skip: noLesson }, () => {
  const past = ['parlé', 'travaillé', 'regardé', 'cherché', 'habité', 'passé composé'];
  const hits = past.filter((p) => learnerProse.some((s) => hasPhrase(s, p)));
  deepStrictEqual(hits, [], 'a past participle reached a screen. That collision is a2.05 and it imports from this theme.');
});

/* ═══ 7. The Owns is tested by ear, and produced in writing ═════════════ */

test('a listening question requires naming the person where the verb cannot say', { skip: noLesson }, () => {
  const s = section('s10-ear') as unknown as {
    type: string; lines: { fr: string }[]; questions: { q: string; opts: string[]; correct: number; why?: string }[];
  };
  strictEqual(s.type, 'listening');
  ok(s.questions.length >= 3, 'the listening mission carries the Owns and needs real weight');
  const asksThePerson = s.questions.some((q) => {
    const t = `${q.q} ${q.opts.join(' ')} ${q.why ?? ''}`.toLowerCase();
    return (t.includes('how many people') || t.includes('who is speaking') || t.includes('what told you'))
      && (t.includes('pronoun') || t.includes('the sound does not say'));
  });
  ok(asksThePerson, 'no listening question makes the learner name the person from the pronoun. That question IS the Owns.');
  for (const q of s.questions) ok(q.why, `listening question has no why: ${q.q}`);
});

test('the listening mission includes a line whose ending is audible, so the claim is bounded', { skip: noLesson }, () => {
  const s = section('s10-ear') as unknown as { lines: { fr: string }[] };
  const audible = s.lines.filter((l) => /\b(nous|vous)\b/i.test(l.fr));
  ok(audible.length >= 2, 'every line has a silent ending, which would teach that no ending ever sounds');
});

test('the dictée spells from LETTERS, which is the only mode that can test this', { skip: noLesson }, () => {
  const s = section('s18-dictation') as unknown as { itemIds: string[] };
  ok(s.itemIds.length >= 5, `${s.itemIds.length} dictée targets is thin for the lesson's one production surface`);
  for (const id of s.itemIds) {
    const it = byId.get(id);
    ok(it, `dictée names ${id}, which is not in the seed`);
    ok((it!.drills ?? []).includes('dictation'), `${id} carries no dictation drill`);
    strictEqual(
      dicteeMode(it!.fr), 'letters',
      `${id} "${it!.fr}" is in word mode. Word mode hands every real word over as a pre-spelled tile, `
      + 'so it CANNOT test a silent ending, which is this lesson\'s whole subject.',
    );
  }
});

test('every dictée target ends in a silent ending', { skip: noLesson }, () => {
  const s = section('s18-dictation') as unknown as { itemIds: string[] };
  const notSilent = s.itemIds
    .map((id) => byId.get(id)!)
    .filter((it) => /\b(nous|vous)\s+\w+(ons|ez)\b/i.test(it.fr));
  deepStrictEqual(notSilent.map((i) => i.fr), [], 'a dictée target whose ending is audible; the ear would do the work');
});

test('the speak mission only names rows the mic can score', { skip: noLesson }, () => {
  const s = section('s17-speak') as unknown as { skill: string; itemIds: string[] };
  strictEqual(s.skill, 'speak');
  for (const id of s.itemIds) {
    const it = byId.get(id);
    ok(it, `speak names ${id}, which is not in the seed`);
    ok((it!.drills ?? []).includes('voiceflash'), `${id} carries no voiceflash, so the mic-scored deck cannot score it`);
  }
});

test('no `practice` at skill write, which draws no writing surface', { skip: noLesson }, () => {
  const write = L!.sections.filter((s) => s.type === 'practice' && (s as { skill?: string }).skill === 'write');
  deepStrictEqual(write.map((s) => (s as { id?: string }).id), [], 'the pre-v2 stub shipped one of these and it rendered nothing');
});

test('the reading-only row never reaches a surface the learner produces into', { skip: noLesson || noSrc }, () => {
  const produce = [...SRC_SPEAK, ...SRC_DICTATION];
  deepStrictEqual(SRC_READING_ONLY.filter((id) => produce.includes(id)), []);
  for (const id of SRC_READING_ONLY) {
    const it = byId.get(id);
    ok(it, `${id} is reading-only and not in the seed`);
    ok(learnerText.includes(it!.fr), `${id} is reading-only and appears in no passage`);
  }
});

/* ═══ 8. Respellings, through the real checker and by name ══════════════ */

test('no respelling this lesson displays closes a nasal with a plain n or m', { skip: noLesson }, () => {
  const bad: string[] = [];
  for (const id of L!.itemIds) {
    const it = byId.get(id);
    if (!it?.respell) continue;
    if (hasPlainNasalFor(it.fr, it.respell)) bad.push(`${id} "${it.fr}" ${it.respell}`);
  }
  deepStrictEqual(bad, [], 'the REAL hasPlainNasalFor, imported rather than copied');
});

for (const [id, fragment] of Object.entries(MUST_CARRY_SUPERSCRIPT)) {
  test(`${id} carries the superscript the shared checker cannot see`, { skip: noLesson }, () => {
    const it = byId.get(id);
    ok(it, `${id} is not in the seed`);
    ok(
      it!.respell?.includes(fragment),
      `${id} "${it!.fr}" is respelled ${JSON.stringify(it!.respell)} and must contain "${fragment}". `
      + 'hasPlainNasalFor needs the n or m to END a token, so a word-internal nasal sails through it.',
    );
  });
}

test('the word-internal blind spot is still a blind spot', { skip: noLesson }, () => {
  // If this ever goes red the checker has learned to see word-internal nasals,
  // invariants §3 needs updating, and the by-name assertions above can go.
  ok(
    !hasPlainNasalFor('Tu montres tes papiers.', 'tü mohntr tay pa-PYAY'),
    'hasPlainNasalFor now catches a word-internal nasal — update invariants §3',
  );
});

for (const id of MUST_NOT_CARRY_SUPERSCRIPT) {
  test(`${id} correctly carries NO superscript`, { skip: noLesson }, () => {
    const it = byId.get(id);
    ok(it, `${id} is not in the seed`);
    // /dɔn/ and /ɛm/ are real consonants. "Fixing" them with a superscript would
    // teach a nasal vowel that is not there, which is the false-positive side of
    // the shared checker (invariants §3).
    ok(!hasPlainNasalFor(it!.fr, it!.respell ?? ''), `${id} is flagged and it should not be`);
  });
}

for (const [id, to] of Object.entries(REPAIRED)) {
  test(`${id} keeps its repaired respelling`, { skip: noLesson }, () => {
    const it = byId.get(id);
    ok(it, `${id} is not in the seed`);
    strictEqual(it!.respell, to, `${id} "${it!.fr}" has been reverted to a plain-n respelling`);
  });
}

test('every repair replaced something that really was a violation', { skip: noSrc }, () => {
  strictEqual(SRC_REPAIRS.length, Object.keys(REPAIRED).length);
  for (const r of SRC_REPAIRS) {
    ok(hasPlainNasalFor(r.fr, r.from), `${r.id} "${r.fr}": the stored value ${JSON.stringify(r.from)} was not a violation. A variant that merely differs is not one (invariants §9).`);
    ok(!hasPlainNasalFor(r.fr, r.to), `${r.id} "${r.fr}": the replacement is still a violation`);
    strictEqual(REPAIRED[r.id], r.to, `${r.id}: the source writes ${JSON.stringify(r.to)} and this file expects ${JSON.stringify(REPAIRED[r.id])}`);
  }
});

/* ═══ 9. Items, tranches and reachability ═══════════════════════════════ */

test('every itemId resolves in the seed', { skip: noLesson }, () => {
  const missing = L!.itemIds.filter((id) => !byId.has(id));
  deepStrictEqual(missing, [], 'a lesson whose itemIds resolve to nothing renders empty cards on a device');
});

test('every itemId is on a screen, not merely resolvable', { skip: noLesson }, () => {
  const named = new Set<string>();
  for (const s of L!.sections) for (const str of strings(s)) if (/^fr\.[a-z0-9]+\.[a-z0-9-]+\.\d{3,}$/.test(str)) named.add(str);
  const shown = new Set<string>();
  for (const id of L!.itemIds) {
    const it = byId.get(id)!;
    if (named.has(id) || learnerText.includes(it.fr)) shown.add(id);
  }
  const invisible = L!.itemIds.filter((id) => !shown.has(id));
  deepStrictEqual(invisible, [], 'itemId(s) that resolve and are drawn by nothing. a1.08 shipped 43 of those.');
});

test('the tranches release every taught item exactly once and nothing untaught', { skip: noLesson }, () => {
  const tranche = L!.deckTranche ?? [];
  strictEqual(tranche.length, (L!.acts ?? []).length, 'tranches are index-aligned with acts');
  const seen = new Set<string>();
  for (const slice of tranche) {
    for (const id of slice) {
      ok(!seen.has(id), `${id} is released twice`);
      seen.add(id);
      ok(L!.itemIds.includes(id), `${id} is released and is not in itemIds`);
    }
  }
  deepStrictEqual(L!.itemIds.filter((id) => !seen.has(id)), [], 'item(s) no tranche ever releases');
});

test('no tranche releases an item the acts before it have not shown', { skip: noLesson }, () => {
  const acts = L!.acts ?? [];
  const tranche = L!.deckTranche ?? [];
  const early: string[] = [];
  for (const [i, slice] of tranche.entries()) {
    const soFar = acts.slice(0, i + 1).flatMap((a) => a.sections)
      .map((sid) => section(sid))
      .flatMap((s) => strings(s));
    const text = soFar.join('\n');
    for (const id of slice) {
      const it = byId.get(id)!;
      if (!text.includes(it.fr) && !text.includes(id)) early.push(`${id} "${it.fr}" in tranche ${i}`);
    }
  }
  deepStrictEqual(early, [], 'a card arriving in the flashcard hub before the lesson has shown it');
});

test('no duplicate fr within a theme, computed the way flashhub-coverage computes it', { skip: noLesson }, () => {
  const themes = new Set(L!.itemIds.map((id) => byId.get(id)!.theme));
  const seen = new Map<string, string>();
  const clashes: string[] = [];
  for (const i of seed.items) {
    if (i.kind === 'sentence') continue;
    if (!themes.has(i.theme)) continue;
    const key = JSON.stringify([i.theme, i.fr]);
    const prev = seen.get(key);
    if (prev) clashes.push(`${i.theme} "${i.fr}": ${prev} and ${i.id}`);
    else seen.set(key, i.id);
  }
  deepStrictEqual(clashes, [], 'flashhub-coverage treats two rows sharing an fr in one theme as one card served twice');
});

test('nothing this lesson writes joins a1.03\'s measured ending population', { skip: noSrc }, () => {
  const joiners = endingPopulation([...SRC_AUTHORED, ...SRC_IMPORTED]);
  deepStrictEqual(
    joiners.map((j) => `${j.id} "${j.fr}"`), [],
    'a1-03-genre.test.ts re-measures twenty printed figures from the SEED on every run, so a carried row counts too',
  );
});

test('every authored id is inside the ledger block', { skip: noSrc }, () => {
  deepStrictEqual(SRC_RANGE, OWNED);
  const outside = SRC_AUTHORED.filter((i) => i.id < OWNED.from || i.id > OWNED.to);
  deepStrictEqual(outside.map((i) => i.id), []);
  const wrongTheme = SRC_AUTHORED.filter((i) => i.theme !== THEME);
  deepStrictEqual(wrongTheme.map((i) => i.id), []);
  const wrongLevel = SRC_AUTHORED.filter((i) => i.level !== 'a2');
  deepStrictEqual(wrongLevel.map((i) => i.id), [], 'everything authored here is a2 (doctrine §C)');
});

test('no authored sentence runs over the A2 word budget', { skip: noSrc }, () => {
  const over = SRC_AUTHORED
    .map((i) => ({ id: i.id, fr: i.fr, n: i.fr.trim().split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length }))
    .filter((x) => x.n > 14);
  deepStrictEqual(over, [], 'doctrine §C caps an A2 sentence at 14 words');
});

/* ═══ 10. Seed parity, every figure DERIVED from the source ═════════════ */

test('the seed lesson is the authored lesson', { skip: noLesson || noSrc }, () => {
  strictEqual(L!.version, SRC!.version);
  strictEqual(L!.sections.length, SRC!.sections.length);
  strictEqual(L!.title, SRC!.title);
  strictEqual(L!.tag, SRC!.tag);
  deepStrictEqual(L!.itemIds.slice().sort(), SRC_ITEM_IDS.slice().sort());
  deepStrictEqual(
    L!.sections.map((s) => (s as { id?: string }).id),
    SRC!.sections.map((s) => (s as { id?: string }).id),
  );
});

test('every authored row is in the seed and says what the source says', { skip: noLesson || noSrc }, () => {
  const drift: string[] = [];
  for (const src of SRC_AUTHORED) {
    const row = byId.get(src.id);
    if (!row) { drift.push(`${src.id} is not in the seed`); continue; }
    if (row.fr !== src.fr) drift.push(`${src.id} fr: source ${JSON.stringify(src.fr)} vs seed ${JSON.stringify(row.fr)}`);
    if (row.en !== src.en) drift.push(`${src.id} en drift`);
    if ((row.respell ?? null) !== (src.respell ?? null)) drift.push(`${src.id} respell: source ${JSON.stringify(src.respell)} vs seed ${JSON.stringify(row.respell)}`);
    if ((row.ipa ?? null) !== (src.ipa ?? null)) drift.push(`${src.id} ipa drift`);
  }
  deepStrictEqual(drift, [], 'the authored source and the seed have drifted');
});

test('every imported row was CARRIED through the seed cut', { skip: noLesson || noSrc }, () => {
  // `verbes` is outside SEED_CUT.themes: 368 rows in Postgres and 5 in the seed
  // before this build. Without the carry, thirty verb cards draw blank.
  const missing = SRC_IMPORTED.filter((i) => !byId.has(i.id));
  deepStrictEqual(missing.map((i) => `${i.id} "${i.fr}"`), [], 'imported row(s) the merge failed to carry');
});

test('the voiceflash addition landed', { skip: noLesson || noSrc }, () => {
  for (const d of SRC_DRILL_ADDITIONS) {
    const row = byId.get(d.id);
    ok(row, `${d.id} is not in the seed`);
    ok((row!.drills ?? []).includes(d.add), `${d.id} did not get its ${d.add} drill, so the speak mission cannot score it`);
  }
});

test('the unit advertises this lesson and its own copy is unchanged', { skip: noLesson }, () => {
  const unit = seed.units.find((u) => u.id === 'a2.01');
  ok(unit, 'unit a2.01 is not in the seed');
  ok((unit!.lessonIds ?? []).includes('a2.01.l1'), 'the unit does not name its lesson');
  // Byte-for-byte from the probe's unit dump. The brief has title and sub
  // SWAPPED and its `sub` is not in the database at all.
  strictEqual(unit!.title, 'Regular -ER Verbs');
  strictEqual(unit!.sub, 'Les verbes en -ER');
  strictEqual(unit!.canDo, 'Can conjugate any regular -er verb in the present and use it in a real sentence');
  deepStrictEqual(unit!.prereqUnitIds, ['a1.05']);
  strictEqual(L!.tag, `A2 · LEÇON ${String(unit!.seq).padStart(2, '0')}`, 'the stored tag and the one missions.ts computes disagree');
});

/* ═══ 11. The quiz ══════════════════════════════════════════════════════ */

test('the quiz is five rounds, and every question has a why and a live ref', { skip: noLesson }, () => {
  const quiz = L!.sections.find((s) => s.type === 'quiz')!;
  const rounds = (quiz as { rounds?: { id: string }[] }).rounds ?? [];
  strictEqual(rounds.length, 5);
  const ids = new Set(SPINE);
  for (const q of quizQuestions(quiz as never)) {
    ok(q.why, `no why: ${q.q}`);
    ok(q.ref && ids.has(q.ref), `ref "${q.ref}" names no section: ${q.q}`);
  }
});

test('at most half the questions are mcq', { skip: noLesson }, () => {
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz')! as never);
  const mcq = qs.filter((q) => q.format === 'mcq').length;
  ok(mcq * 2 <= qs.length, `${mcq}/${qs.length} are mcq`);
});

test('typeIn carries the weight, because the Owns is a spelling distinction', { skip: noLesson }, () => {
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz')! as never);
  const typed = qs.filter((q) => q.format === 'typeIn' || q.format === 'errorSpot').length;
  ok(typed >= 12, `${typed}/${qs.length} questions make the learner type. This lesson is a spelling distinction the ear cannot make.`);
});

test('every free-text question accepts the answer it displays', { skip: noLesson }, () => {
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz')! as never);
  for (const q of qs) {
    if (!['typeIn', 'errorSpot'].includes(q.format ?? '')) continue;
    ok(matchesAccept(q.answer ?? '', q.accept ?? []), `does not accept its own answer: ${q.answer}`);
  }
});

test('listenChoose is only used where the point IS that the ear cannot decide', { skip: noLesson }, () => {
  // The one job the brief gives this format here. A listenChoose asking WHICH
  // silent form is correct would certify a bug, because the correct form is
  // inaudible and any recording would have to cheat to make it answerable.
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz')! as never);
  const lc = qs.filter((q) => q.format === 'listenChoose');
  ok(lc.length >= 1 && lc.length <= 3, `${lc.length} listenChoose questions`);
  for (const q of lc) {
    ok(q.say, `listenChoose without a say: ${q.q}. ListenChooseCard falls back to speaking opts[correct], which is the answer.`);
    const answer = (q.opts ?? [])[q.correct as number] ?? '';
    const settles = /both/i.test(answer) || /cannot tell/i.test(answer) || /nous|vous/i.test(answer);
    ok(settles, `listenChoose "${q.q}" answers "${answer}", which is a silent form the audio cannot distinguish`);
  }
});

test('every question has a subject in its stem', { skip: noLesson }, () => {
  // "Which ending?" has no answer. Every question that asks for a FORM names the
  // person it belongs to, in the stem or in the prompt.
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz')! as never);
  const PERSONS = /\b(je|j'|tu|il|elle|on|nous|vous|ils|elles|somebody|a group|one person|a whole|you|she|he|they|a friend|a woman)\b/i;
  const formQuestions = qs.filter((q) => /___/.test(q.q));
  ok(formQuestions.length >= 4, `${formQuestions.length} gap-fill questions; below four this check is close to vacuous`);
  for (const q of formQuestions) {
    ok(PERSONS.test(q.q), `gap-fill with no subject in the stem: "${q.q}". "Which ending?" has no answer.`);
  }
});

test('the quiz answer slots do not cluster', { skip: noLesson }, () => {
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz')! as never);
  const closed = qs.filter((q): q is (typeof qs)[number] & { correct: number } => typeof q.correct === 'number');
  const slots = new Map<number, number>();
  for (const q of closed) slots.set(q.correct, (slots.get(q.correct) ?? 0) + 1);
  for (const [s, c] of slots) ok((c / closed.length) * 100 <= 40, `slot ${s} holds ${Math.round((c / closed.length) * 100)}%`);
  ok(slots.size === 4, `correct answers use ${slots.size} of the four option slots`);
});

test('the in-mission questions do not cluster either, and nothing shuffles them', { skip: noLesson }, () => {
  const inMission: { section: string; correct: number; opts: string[] }[] = [];
  for (const s of L!.sections) {
    const sid = (s as { id?: string }).id ?? '?';
    if (s.type === 'groupDrill') for (const g of s.groups) if (g.check) inMission.push({ section: sid, correct: g.check.correct, opts: g.check.opts });
    if (s.type === 'listening') for (const q of s.questions) inMission.push({ section: sid, correct: q.correct, opts: q.opts });
    if (s.type === 'trapDrill') for (const d of s.drill) inMission.push({ section: sid, correct: d.correct, opts: d.opts });
  }
  ok(inMission.length > 0, 'no in-mission closed questions; this check would pass vacuously');
  const slots = new Map<number, number>();
  for (const q of inMission) slots.set(q.correct, (slots.get(q.correct) ?? 0) + 1);
  for (const [s, c] of slots) ok((c / inMission.length) * 100 <= 40, `in-mission slot ${s} holds ${Math.round((c / inMission.length) * 100)}%`);
  let prev: { section: string; correct: number } | null = null;
  for (const q of inMission) {
    ok(!(prev && prev.section === q.section && prev.correct === q.correct), `${q.section}: consecutive questions share slot ${q.correct}`);
    ok(q.correct < q.opts.length, `${q.section}: correct index out of range`);
    prev = q;
  }
});

test('every remediation drill can actually fire', { skip: noLesson }, () => {
  // drillForRound returns the FIRST target that has a drill and then stops, so a
  // drill named only in second place is dead content. a1.05 ships two of those.
  const quiz = L!.sections.find((s) => s.type === 'quiz')!;
  const rounds = (quiz as { rounds?: { targets?: string[] }[] }).rounds ?? [];
  const triggers = L!.errorTriggers ?? [];
  const fired = new Set<string>();
  for (const r of rounds) {
    const t = (r.targets ?? []).find((x) => triggers.some((e) => e.id === x && e.drill));
    if (t) fired.add(t);
  }
  const orphans = triggers.filter((e) => e.drill && !fired.has(e.id)).map((e) => e.id);
  deepStrictEqual(orphans, [], 'trigger(s) whose drill no round can fire');
  strictEqual(fired.size, rounds.length, 'two rounds lead on the same trigger, so one drill is unreachable');
});

test('every drill named by a trigger exists, and every drill item resolves', { skip: noLesson }, () => {
  const drills = new Map((L!.drills ?? []).map((d) => [d.id, d] as const));
  for (const t of L!.errorTriggers ?? []) {
    ok(drills.has(t.drill), `trigger ${t.id} names drill ${t.drill}, which does not exist`);
    if (t.retest) ok(drills.has(t.retest), `trigger ${t.id} names retest ${t.retest}, which does not exist`);
  }
  for (const d of L!.drills ?? []) {
    for (const id of (d as { items?: string[] }).items ?? []) {
      ok(byId.has(id), `drill ${d.id} names ${id}, which is not in the seed`);
    }
  }
});

/* ═══ 12. Sheets, the glossary, and the things that render nothing ══════ */

test('every sheetId names a sheet, and every sheet is reachable', { skip: noLesson }, () => {
  const sheetIds = new Set((L!.sheets ?? []).map((s) => s.id));
  const linked = new Set(L!.sections.map((s) => (s as { sheetId?: string }).sheetId).filter(Boolean) as string[]);
  deepStrictEqual([...linked].filter((id) => !sheetIds.has(id)), [], 'sheetId(s) naming nothing');
  deepStrictEqual([...sheetIds].filter((id) => !linked.has(id)), [], 'sheet(s) no section links to');
});

test('a sheet only holds section types the sheet renderer draws', { skip: noLesson }, () => {
  // ReferenceSheet.tsx draws teach, letterGrid and table and NOTHING else. A
  // cheatSheet in here draws its title and no rows, which a1.13 ships today.
  const DRAWN = new Set(['teach', 'letterGrid', 'table']);
  const dead = (L!.sheets ?? []).flatMap((sh) => (sh.sections ?? [])
    .filter((sec) => !DRAWN.has(sec.type))
    .map((sec) => `${sh.id}: ${sec.type}`));
  deepStrictEqual(dead, []);
});

test('the endings sheet holds the ending set and points at the lessons that need it', { skip: noLesson }, () => {
  const sheet = (L!.sheets ?? []).find((s) => s.id === 'sheet.a2.01.endings');
  ok(sheet, 'the endings sheet is gone; it is what a learner returns to during the next four units');
  const text = strings(sheet).join('\n');
  for (const e of [...SILENT_ENDINGS, ...AUDIBLE_ENDINGS]) ok(text.includes(e), `the sheet does not list ${e}`);
  ok(/nine pronouns|all nine/i.test(text), 'the sheet does not carry the full nine-pronoun form the flow could not fit');
});

test('the thirty sheet lists all thirty with their stem', { skip: noLesson }, () => {
  const sheet = (L!.sheets ?? []).find((s) => s.id === 'sheet.a2.01.thirty');
  ok(sheet, 'the thirty sheet is gone');
  const text = strings(sheet).join('\n');
  const absent = THIRTY.filter((v) => !text.includes(v));
  deepStrictEqual(absent, []);
});

test('the reading glossary keys can actually match, through the real segmenter', { skip: noLesson }, () => {
  const r = section('s20-reading') as unknown as {
    text: string; questionsInModal?: boolean; questions?: unknown[];
    glossary?: { word: string; en: string }[];
  };
  ok(r.questionsInModal && (r.questions ?? []).length, 'reading without questionsInModal AND questions reaches no glossary renderer');
  ok(!r.text.includes('\n'), 'PassagePage splits on sentence boundaries, so an authored newline is silently discarded');
  const g = r.glossary ?? [];
  ok(g.length > 0, 'no glossary');
  for (const e of g) {
    ok(e.word.split(/\s+/).length <= MAX_GLOSS_WORDS, `glossary key "${e.word}" is longer than MAX_GLOSS_WORDS`);
  }
  // The REAL matcher, comparing matched KEYS rather than matched text. An
  // earlier a1.01 test inlined its own lookup, copied the version that was
  // already broken, and passed while the feature was dead.
  const keySet = new Set(g.flatMap((e) => glossKeys(e.word)));
  const matched = new Set<string>();
  for (const seg of segmentSentence(r.text, keySet)) if (seg.key) matched.add(seg.key);
  const never = g.filter((e) => !glossKeys(e.word).some((k) => matched.has(k))).map((e) => e.word);
  deepStrictEqual(never, [], 'glossary key(s) that underline nothing in the passage');
});

test('the scenario never mixes straight and typographic apostrophes', { skip: noLesson }, () => {
  const s = section('s19-scenario') as unknown as { turns: { ai: string; user: string; alts?: { fr: string }[] }[] };
  const all = s.turns.flatMap((t) => [t.ai, t.user, ...(t.alts ?? []).map((a) => a.fr)]).join('');
  ok(!(/’/.test(all) && /'/.test(all)), 'the suite fails a conversation that mixes both in one bubble stack');
  for (const t of s.turns) {
    ok(t.userEn, 'a turn with no userEn shows a French line the learner is told they should have said and cannot read');
    ok((t.alts ?? []).length >= 2, 'a conversation is not a cloze test: every turn needs alternatives');
  }
});

test('commonErrors sections set swipe, or they render a blank screen', { skip: noLesson }, () => {
  for (const s of L!.sections) {
    if (s.type !== 'commonErrors') continue;
    ok((s as { swipe?: boolean }).swipe, `${(s as { id?: string }).id} has no swipe. a1.01 mission 5 drew nothing for exactly this reason.`);
  }
});

test('no section declares more than three term chips', { skip: noLesson }, () => {
  for (const s of L!.sections) {
    const t = (s as { terms?: string[] }).terms ?? [];
    ok(t.length <= 3, `${(s as { id?: string }).id} declares ${t.length} chips; the renderer shows three`);
    for (const id of t) ok(L!.terms?.[id], `${(s as { id?: string }).id} names term "${id}", which the lesson does not define`);
  }
});

test('no autoplay and no imageRef, both of which are read by nothing', { skip: noLesson }, () => {
  const json = JSON.stringify(L);
  ok(!json.includes('"autoplay"'), 'autoplay is declared in schema.ts and implemented in no component');
  ok(!json.includes('"imageRef"'), 'lesson-contract.test.ts does not check imageRef and an unregistered ref draws a blank box');
});

/* ═══ 13. Audio: the constraints that cannot be recovered later ═════════ */

test('the four silent forms are recorded as ONE take and must be indistinguishable', { skip: noLesson }, () => {
  // A constraint on how something is recorded becomes invisible the moment the
  // clip is delivered, so it is pinned here as well as written in `desc`. This
  // one is the opposite of the usual note: the recording must NOT help.
  const rec = (L!.audio?.recorded ?? []).find((r) => r.id === 'rec-a2-01-silent-four');
  ok(rec, 'the silent-four recording brief is gone');
  ok(/ONE CONTINUOUS TAKE/i.test(rec!.desc), 'the one-take instruction has been softened');
  ok(/INDISTINGUISHABLE/i.test(rec!.desc), 'the brief no longer says the four must be indistinguishable, which is the whole point');
  ok(/do not differentiate|do not help/i.test(rec!.desc), 'the instruction not to help has gone');
  for (const clip of ['je parle', 'tu parles', 'il parle', 'ils parlent']) {
    ok((rec!.clipIds ?? []).includes(clip), `the take no longer covers "${clip}"`);
  }
});

test('every recordingId a section names is declared', { skip: noLesson }, () => {
  const declared = new Set((L!.audio?.recorded ?? []).map((r) => r.id));
  const used = new Set<string>();
  const walk = (v: unknown): void => {
    if (Array.isArray(v)) v.forEach(walk);
    else if (v && typeof v === 'object') {
      for (const [k, x] of Object.entries(v)) {
        if (k === 'recordingId' && typeof x === 'string') used.add(x);
        else walk(x);
      }
    }
  };
  walk(L!.sections);
  deepStrictEqual([...used].filter((r) => !declared.has(r)), [], 'a section names a recording the lesson does not owe the studio');
});

/* ═══ 14. House rules ═══════════════════════════════════════════════════ */

test('every section type this lesson uses is read by a renderer', { skip: noLesson }, () => {
  // "After authoring any field, grep for a component that reads it." A field
  // with no reader is worse than an absent one, because it looks like the job is
  // done: a1.01's five reading-glossary entries, sons.06's fourth term chip and
  // six seed sections' `autoplay` all validated and drew nothing.
  //
  // The renderer source is read here rather than the behaviour asserted, because
  // the node test runner cannot import a .tsx module. It is still the real file.
  const mission = readFileSync(resolve(here, '../components/MissionSection.tsx'), 'utf8');
  const lessonSec = readFileSync(resolve(here, '../components/LessonSection.tsx'), 'utf8');
  const used = [...new Set(L!.sections.map((s) => s.type))];
  const unread = used.filter((t) => !mission.includes(`case '${t}':`) && !lessonSec.includes(`case '${t}':`));
  deepStrictEqual(unread, [], 'section type(s) this lesson authors that no component switches on');
  ok(used.length >= 15, `${used.length} distinct section types; a journey this short is not a journey`);
});

test('the sheet renderer draws every section type the sheets use', { skip: noLesson }, () => {
  const sheetSrc = readFileSync(resolve(here, '../components/ReferenceSheet.tsx'), 'utf8');
  const used = [...new Set((L!.sheets ?? []).flatMap((sh) => (sh.sections ?? []).map((s) => s.type)))];
  const unread = used.filter((t) => !sheetSrc.includes(`case '${t}':`));
  deepStrictEqual(unread, [], 'a sheet section the sheet renderer does not draw; a1.13 ships a cheatSheet like that');
});

test('no em dash anywhere in the lesson', { skip: noLesson }, () => {
  const bad = strings(L!).filter((s) => s.includes('—'));
  deepStrictEqual(bad.slice(0, 3), []);
});

test('no grammar jargon on a learner surface', { skip: noLesson }, () => {
  const JARGON = ['conjugation', 'conjugate', 'conjugated', 'indicative', 'morpheme', 'inflection', 'paradigm', 'orthography', 'phoneme'];
  const hits = JARGON.filter((j) => hasPhrase(learnerText, j));
  deepStrictEqual(hits, [], 'grammarIntroduced may use the precise words; a card may not');
});

test('the lesson declares what it assumes and what it introduces', { skip: noLesson }, () => {
  // grammarAssumed is CURRICULUM metadata, resolved against content_units, so it
  // holds the raw id and not the learner-facing label.
  ok((L!.grammarAssumed ?? []).some((g) => g.includes('a1.05')), 'a1.05 is the declared prerequisite and is not named in grammarAssumed');
  ok((L!.grammarIntroduced ?? []).some((g) => /silent/i.test(g)), 'the Owns is not in grammarIntroduced');
  ok((L!.grammarIntroduced ?? []).some((g) => /\bon\b/.test(g)), 'nous against on is not in grammarIntroduced');
});
