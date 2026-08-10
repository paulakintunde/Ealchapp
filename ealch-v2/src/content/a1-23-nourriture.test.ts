// a1.23.l1 "La nourriture" — the lesson's own test.
//
// Two halves, and both matter:
//
//   SEED assertions run always. They are what a device would actually load.
//   SOURCE assertions self-skip if ealch-admin is absent, which is the pattern
//   every other lesson test here uses.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE ASSERTIONS WORTH THE MOST ARE THE ONES THAT STOP A CORRECT FIX
// ══════════════════════════════════════════════════════════════════════════
//
// Four rows in this lesson look wrong at a glance and are right:
//
//   la crème    lah KREHM     hasPlainNasalFor FLAGS IT and is wrong. /kʁɛm/
//                             has a real m and no nasal vowel. Repairing it to
//                             KREHⁿ would teach a sound that is not in the word.
//   la banane   lah bah-NAN   the final n is a REAL /n/.
//   la farine   lah fah-REEN  same.
//   la pomme    lah POM       a real /m/.
//
// And four one-syllable elided words are ALL CAPS on purpose (LOH, LWEEL, LUF,
// LAHY): the article has fused into the single stressed syllable, so there is no
// article left to lowercase. They are NOT shouted articles.
//
// Every one is pinned BY NAME below so the next author's "fix" goes red instead
// of shipping. That is the bullet people skip and it is worth the most.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';

import type { Item, Lesson } from './schema.ts';
import { canonicalJson, quizQuestions, validateLesson, formatIssues } from './schema.ts';
import { validateDensity, formatDensity, hasPlainNasalFor } from './density.logic.ts';
import { endingPopulation } from './gender.logic.ts';
import { dicteeMode } from './dictee.logic.ts';
import { matchesAccept } from './answer.logic.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  version: number; items: Item[]; lessons: Lesson[];
  units: { id: string; lessonIds?: string[]; themes?: string[]; prereqUnitIds?: string[] }[];
};

const L = seed.lessons.find((l) => l.id === 'a1.23.l1');
const noLesson = !L;

/* ─── The authored source, self-skipping if ealch-admin is absent ────────── */

type Food = {
  id: string; bare: string; fr: string; en: string; gender: 'm' | 'f';
  respell: string; shelf: string; elided?: boolean; pluralOnly?: boolean; authored?: boolean;
};
type Repair = { id: string; fr: string; from: string; to: string; caughtByChecker: boolean; kind: string };
type NotRepaired = { id: string; fr: string; respell: string; why: string };

let SRC: Lesson | null = null;
let SRC_REFRAME = '';
let SRC_REFRAME_COUNT = 0;
let SRC_FOODS: Food[] = [];
let SRC_AUTHORED: Item[] = [];
let SRC_IMPORTED: Item[] = [];
let SRC_REUSED: { id: string; fr: string; en: string }[] = [];
let SRC_REPAIRS: Repair[] = [];
let SRC_TWINS: Repair[] = [];
let SRC_NOT_REPAIRED: NotRepaired[] = [];
let SRC_NASAL: string[] = [];
let SRC_NOT_NASAL: string[] = [];
let SRC_ELIDED: Food[] = [];
let SRC_PLURAL: Food[] = [];
let SRC_SHELVES: string[] = [];
let SRC_TRANCHES: string[][] = [];
let SRC_ITEM_IDS: string[] = [];
let SRC_SPEAK: string[] = [];
let SRC_DICTATION: string[] = [];
let SRC_BORROWED: string[] = [];
let SRC_THEMES: string[] = [];
let SRC_OUTSIDE_CUT: string[] = [];
let SRC_RANGE = { from: '', to: '' };
let onShelf: (s: string) => Food[] = () => [];

try {
  const corpus = await import('../../../ealch-admin/scripts/data/nourriture-corpus.ts');
  const lesson = await import('../../../ealch-admin/scripts/data/nourriture-lesson.ts');
  const terms = await import('../../../ealch-admin/scripts/data/nourriture-terms.ts');
  const imported = await import('../../../ealch-admin/scripts/data/nourriture-imported.ts');
  SRC = lesson.NOURRITURE_LESSON as Lesson;
  SRC_REFRAME = terms.REFRAME as string;
  SRC_REFRAME_COUNT = terms.REFRAME_COUNT as number;
  SRC_FOODS = corpus.FOODS as unknown as Food[];
  SRC_AUTHORED = corpus.AUTHORED_ITEMS as unknown as Item[];
  SRC_IMPORTED = imported.IMPORTED as unknown as Item[];
  SRC_REUSED = imported.REUSED as unknown as typeof SRC_REUSED;
  SRC_REPAIRS = corpus.RESPELL_REPAIRS as unknown as Repair[];
  SRC_TWINS = corpus.TWIN_REPAIRS as unknown as Repair[];
  SRC_NOT_REPAIRED = corpus.NOT_REPAIRED as unknown as NotRepaired[];
  SRC_NASAL = corpus.NASAL_FORMS as string[];
  SRC_NOT_NASAL = corpus.NOT_NASAL_FORMS as string[];
  SRC_ELIDED = corpus.ELIDED as unknown as Food[];
  SRC_PLURAL = corpus.PLURAL_ONLY as unknown as Food[];
  SRC_SHELVES = corpus.SHELVES as unknown as string[];
  SRC_THEMES = corpus.UNIT_THEMES as string[];
  SRC_OUTSIDE_CUT = corpus.OUTSIDE_THE_CUT as string[];
  SRC_RANGE = corpus.OWNED_ID_RANGE as typeof SRC_RANGE;
  SRC_TRANCHES = lesson.NOURRITURE_TRANCHES as string[][];
  SRC_ITEM_IDS = lesson.NOURRITURE_ITEM_IDS as string[];
  SRC_SPEAK = lesson.NOURRITURE_SPEAK_IDS as string[];
  SRC_DICTATION = lesson.NOURRITURE_DICTATION_IDS as string[];
  SRC_BORROWED = lesson.NOURRITURE_BORROWED_NOT_RELEASED as string[];
  onShelf = corpus.onShelf as unknown as typeof onShelf;
} catch {
  SRC = null;
}
const noSrc = !SRC;
const skipBoth = { skip: noLesson || noSrc };
const skipSeed = { skip: noLesson };

/* ─── Helpers, none of which reimplements app logic ───────────────────────── */

function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, out));
  return out;
}

const sectionById = (id: string) => (L?.sections ?? []).find((s) => (s as { id?: string }).id === id);
const itemById = (id: string) => seed.items.find((i) => i.id === id);

/** The surfaces a learner READS or is TESTED on, not every string in the file.
 *  A guard written against every string fires on the audio brief and the
 *  handover notes and gets deleted rather than fixed. */
/** Surfaces are joined with a NEWLINE, never a space, before a regex runs over
 *  them.
 *
 *  The neighbour guards below ask "is any one surface drilling a1.29's rule?"
 *  and they answer it with patterns like `du.{0,10}de la.{0,10}des.{0,40}which`.
 *  `.` does not match a newline without the /s flag, so a newline join confines
 *  every match to a single surface, which is the question being asked.
 *
 *  With a space join the match can straddle two unrelated surfaces. It did:
 *  publishing v21 reordered the seed's keys, `strings()` walks objects in key
 *  order, and two innocent strings — "...all three take du, de la or des." and
 *  "which verbs point at an amount?" — landed next to each other and read as
 *  one partitive drill. Same content, same 1418 surfaces, different order, and
 *  a guard that had passed for weeks went red on a lesson nobody had touched. */
const SURFACE_SEP = '\n';

function productionSurfaces(): string[] {
  if (!L) return [];
  const decks = L.sections.filter((s) => ['cardDeck', 'flashcards', 'reviewDeck'].includes(s.type));
  const drills = L.sections.filter((s) => ['groupDrill', 'tapTable'].includes(s.type));
  const quiz = L.sections.filter((s) => s.type === 'quiz');
  return strings([decks, drills, quiz, L.drills ?? []]);
}

/* ══════════════════════════════════════════════════════════════════════════
   1. It is there, it validates, and it is v2
   ══════════════════════════════════════════════════════════════════════════ */

test('the lesson is in the seed and attached to its unit', skipSeed, () => {
  ok(L, 'a1.23.l1 is not in seed.json');
  strictEqual(L!.unitId, 'a1.23');
  strictEqual(L!.seq, 1, 'seq is the index WITHIN the unit, not the place in the track');
  const unit = seed.units.find((u) => u.id === 'a1.23');
  ok(unit, 'unit a1.23 is missing');
  ok((unit!.lessonIds ?? []).includes('a1.23.l1'), 'the unit does not list its lesson');
});

test('the tag agrees with what the renderer will compute', skipSeed, () => {
  // missions.ts derives the eyebrow as `${level} · LEÇON ${unit.seq}` at render
  // time. The stored tag is a fallback and must agree, or the two disagree the
  // moment something reads the field instead. a1.03 shipped exactly that bug.
  const unit = seed.units.find((u) => u.id === 'a1.23') as { seq?: number } | undefined;
  strictEqual(L!.tag, `A1 · LEÇON ${String(unit?.seq).padStart(2, '0')}`);
});

test('the lesson validates and the density validator is clean', skipSeed, () => {
  const issues = validateLesson(L!);
  strictEqual(issues.length, 0, `schema:\n${formatIssues(issues)}`);
  ok(Array.isArray(L!.acts) && L!.acts!.length > 0, 'acts are what isV2Lesson gates density validation on');
  const d = validateDensity(L!);
  strictEqual(d.length, 0, `density:\n${formatDensity(d)}`);
});

test('exactly one quiz section, because the pager renders only the first', skipSeed, () => {
  // lessonPager.logic.ts appends one quiz page via sections.find(). a1.01
  // authored twelve final-exam questions in a second quiz section and they were
  // drawn by nothing.
  strictEqual(L!.sections.filter((s) => s.type === 'quiz').length, 1);
});

/* ══════════════════════════════════════════════════════════════════════════
   2. The spine, in order, and the act structure
   ══════════════════════════════════════════════════════════════════════════ */

const SPINE = [
  's01-scene', 's02-goals', 's03-article', 's04-elided',
  's05-bread', 's06-meat', 's07-fruit', 's08-veg', 's09-drink', 's10-cupboard', 's11-check',
  's12-like', 's13-like-table', 's14-like-drill',
  's15-eat', 's16-eat-table', 's17-negation',
  's18-pair', 's19-ear', 's20-reading', 's21-traps',
  's22-flash', 's23-dictation', 's24-speak', 's25-scenario',
  's26-review', 's27-progress', 's28-quiz', 's29-roundup',
];

test('the spine is exactly these 29 sections, in this order', skipSeed, () => {
  strictEqual(L!.sections.length, 29);
  const ids = L!.sections.map((s) => (s as { id?: string }).id);
  for (const [i, want] of SPINE.entries()) strictEqual(ids[i], want, `section ${i} is ${ids[i]}, expected ${want}`);
});

test('six acts, every section claimed exactly once', skipSeed, () => {
  strictEqual(L!.acts!.length, 6);
  const claimed = new Map<string, string>();
  for (const a of L!.acts!) {
    for (const sid of a.sections) {
      ok(sectionById(sid), `act ${a.id} names a missing section: ${sid}`);
      ok(!claimed.has(sid), `${sid} is claimed by both ${claimed.get(sid)} and ${a.id}`);
      claimed.set(sid, a.id);
    }
  }
  for (const sid of SPINE) ok(claimed.has(sid), `${sid} belongs to no act`);
});

test('the weight is on the choice, not on the word list', skipSeed, () => {
  // SIX sections name the sixty words. The acts that make the learner choose
  // between the two columns carry more than that. If a later edit inflates the
  // shelves or thins the contrast, this is what says so.
  const shelfSections = ['s05-bread', 's06-meat', 's07-fruit', 's08-veg', 's09-drink', 's10-cupboard'];
  const choiceSections = ['s12-like', 's13-like-table', 's14-like-drill', 's15-eat', 's16-eat-table', 's17-negation', 's18-pair'];
  ok(choiceSections.length > shelfSections.length,
    'the word list has grown past the teaching; this lesson is not a vocabulary list');
});

/* ══════════════════════════════════════════════════════════════════════════
   3. The reframe
   ══════════════════════════════════════════════════════════════════════════ */

test('the reframe is carried verbatim, the exact number of times', skipBoth, () => {
  // Against an EXPLICIT constant. A count derived from the lesson compares the
  // content to itself and passes on any rewording. Invariant §5.
  strictEqual(L!.reframe, SRC_REFRAME);
  strictEqual(SRC_REFRAME, 'Aimer takes the whole thing. Manger takes a part of it.');
  const n = strings(L!).filter((s) => s.includes(SRC_REFRAME)).length;
  strictEqual(n, SRC_REFRAME_COUNT, `the reframe appears ${n}x, the constant says ${SRC_REFRAME_COUNT}`);
  ok(n >= 3, 'the density validator wants the reframe in at least three places');
});

/* ══════════════════════════════════════════════════════════════════════════
   4. All sixty foods, asserted INDIVIDUALLY by name
   ══════════════════════════════════════════════════════════════════════════ */

test('all sixty foods are served, each asserted by name', skipBoth, () => {
  // BY NAME rather than as a count. A count passes when a category silently
  // loses a member and gains another.
  strictEqual(SRC_FOODS.length, 60);
  const served = new Set(strings(L!));
  for (const f of SRC_FOODS) {
    ok(SRC_ITEM_IDS.includes(f.id), `${f.fr} (${f.id}) is not in itemIds`);
    ok(served.has(f.fr), `${f.fr} is declared and appears on no screen`);
  }
});

test('the thin categories survive, named one at a time', skipBoth, () => {
  // The members most likely to be dropped in a late edit: the plural-only words
  // and the elided group. Named individually so a deletion is attributed.
  const shown = new Set(strings(L!));
  for (const fr of ['les pâtes', 'les frites', 'les céréales', 'les haricots verts']) {
    ok(shown.has(fr), `${fr} is a plural-only word and it is gone`);
  }
  for (const fr of ["l'eau", "l'huile", "l'orange", "l'oignon", "l'ail", "l'œuf"]) {
    ok(shown.has(fr), `${fr} is one of the six elided words and it is gone`);
  }
  strictEqual(SRC_ELIDED.length, 6);
  strictEqual(SRC_PLURAL.length, 4);
});

test('every headword is stored with a DEFINITE article, so the corpus models the rule', skipBoth, () => {
  // The lesson's own habit, enforced on its own data. `un sandwich` is the one
  // exception and it is a served row from the cafe theme, not this lesson's to
  // restate.
  const exceptions = ['un sandwich'];
  for (const f of SRC_FOODS) {
    if (exceptions.includes(f.fr)) continue;
    ok(/^(le |la |les |l')/.test(f.fr), `${f.fr} (${f.id}) is not stored with a definite article`);
  }
});

test('the seven shelves each hold what the lesson says they hold', skipBoth, () => {
  strictEqual(SRC_SHELVES.length, 7);
  const total = SRC_SHELVES.reduce((n, s) => n + onShelf(s).length, 0);
  strictEqual(total, 60, 'the shelves do not add up to the sixty');
  for (const s of SRC_SHELVES) ok(onShelf(s).length > 0, `shelf ${s} is empty`);
});

/* ══════════════════════════════════════════════════════════════════════════
   5. THE CENTRAL CONTRAST. Both sides, on ONE screen.
   ══════════════════════════════════════════════════════════════════════════ */

test('the aimer/manger contrast is taught with both sides present', skipSeed, () => {
  const shown = strings(L!).join(' ');
  ok(shown.includes("J'aime le café."), 'the like column is missing');
  ok(shown.includes('Je bois du café.'), 'the eat column is missing');
});

test('BOTH COLUMNS SIT ON ONE SCREEN, and that screen is s18-pair', skipSeed, () => {
  // THIS IS THE LESSON. Separating the two verbs across two sections is how it
  // decays into a word list, so the assertion is scoped to ONE section rather
  // than to the lesson as a whole.
  const s = sectionById('s18-pair');
  ok(s, 's18-pair is gone, and it is the section the whole lesson is built on');
  strictEqual(s!.type, 'tapTable', 's18-pair must be a two-column table, not a deck');
  const inside = strings(s).join(' ');
  ok(inside.includes("J'aime le café."), 's18-pair no longer shows the like column');
  ok(inside.includes('Je bois du café.'), 's18-pair no longer shows the eat column');
  // The same noun on both sides is the point. Two different foods would be two
  // facts rather than one contrast.
  ok(inside.includes("J'aime le pain.") && inside.includes('Je mange du pain.'),
    's18-pair no longer shows a second pair on the same noun');
  const cols = (s as unknown as { cols?: string[] }).cols ?? [];
  strictEqual(cols.length, 2, 's18-pair must have exactly two columns');
});

test('the negative is taught with both behaviours side by side', skipSeed, () => {
  const s = sectionById('s17-negation');
  ok(s, 's17-negation is gone');
  const inside = strings(s).join(' ');
  ok(inside.includes("Je n'aime pas le café."), 'the surviving le is missing');
  ok(inside.includes('Je ne mange pas de pain.'), 'the collapse to de is missing');
});

test('the l group is taught with its genders stated on the surface', skipBoth, () => {
  const s = sectionById('s04-elided');
  ok(s, 's04-elided is gone');
  const inside = strings(s).join(' ');
  // Not just in the corpus row: on the screen the learner reads.
  ok(/la kind/.test(inside) && /le kind/.test(inside),
    's04-elided no longer tells the learner which kind each elided word is');
  for (const f of SRC_ELIDED) ok(inside.includes(f.fr), `${f.fr} is missing from the elided group`);
});

/* ══════════════════════════════════════════════════════════════════════════
   6. The neighbours keep their lessons
   ══════════════════════════════════════════════════════════════════════════ */

test('the partitive RULE is not re-taught, so a1.29 keeps its lesson', skipSeed, () => {
  // Scoped to PRODUCTION SURFACES, not every string. Partitives appear all over
  // the reading passage and the scene as legitimate context, and a guard over
  // every string fires on those and gets deleted.
  //
  // What is forbidden is a section whose JOB is choosing between du and de la
  // and des, which is a1.29's whole lesson.
  const surfaces = productionSurfaces().join(SURFACE_SEP).toLowerCase();
  ok(!/which (one )?do you use.{0,40}de la/.test(surfaces),
    'a drill is asking the learner to choose between the partitive forms; that is a1.29');
  ok(!/du.{0,10}de la.{0,10}des.{0,40}(choose|which|pick)/.test(surfaces),
    'a surface is drilling the three partitive shapes; that is a1.29');
});

test('the ordering script is not taught, so a2.07 keeps its lesson', skipSeed, () => {
  const surfaces = productionSurfaces().join(SURFACE_SEP).toLowerCase();
  for (const forbidden of ["l'addition", 'le serveur', 'le plat du jour']) {
    ok(!surfaces.includes(forbidden), `${forbidden} is a2.07's and it is being taught here`);
  }
});

test('the meal set is not taught as a group, so a1.25 keeps its lesson', skipSeed, () => {
  // A meal may be NAMED to place a sentence in time. What is forbidden is
  // teaching petit déjeuner / déjeuner / dîner as a set, which is a1.25's.
  const surfaces = productionSurfaces().join(SURFACE_SEP).toLowerCase();
  const meals = ['petit déjeuner', 'déjeuner', 'dîner'].filter((m) => surfaces.includes(m));
  ok(meals.length < 3, `all three meal names are on production surfaces as a set: ${meals.join(', ')}`);
});

test('a1.29 rows are shown but never released to spaced repetition', skipBoth, () => {
  const released = SRC_TRANCHES.flat();
  for (const id of SRC_BORROWED) {
    ok(!released.includes(id), `${id} belongs to a1.29 and this lesson releases it`);
    ok(SRC_ITEM_IDS.includes(id), `${id} should still be SHOWN as evidence`);
  }
  strictEqual(SRC_BORROWED.length, 2);
});

/* ══════════════════════════════════════════════════════════════════════════
   7. Respellings, including the four the checker is WRONG about
   ══════════════════════════════════════════════════════════════════════════ */

test('every genuine nasal closes with the superscript, asserted BY NAME', skipBoth, () => {
  // BY NAME because hasPlainNasalFor cannot see a word-internal nasal: la
  // viande, la confiture, l'orange and un sandwich all pass the shared checker
  // while being wrong. Invariant §3's first blind spot.
  strictEqual(SRC_NASAL.length, 14);
  for (const fr of SRC_NASAL) {
    const f = SRC_FOODS.find((x) => x.fr === fr);
    ok(f, `NASAL_FORMS names "${fr}", which is not one of the sixty`);
    ok(f!.respell.includes('ⁿ'), `${fr} carries a nasal and its respelling is "${f!.respell}"`);
  }
});

test('THE FOUR THE CHECKER IS WRONG ABOUT keep their plain n and m', skipBoth, () => {
  // THE MOST IMPORTANT ASSERTION IN THIS FILE. Each of these has a REAL /n/ or
  // /m/ and no nasal vowel at all. hasPlainNasalFor reads a vowel plus N or M at
  // a token end as a nasal without consulting the French spelling, so it flags
  // them. "Fixing" one teaches a sound that is not in the word.
  //
  // Invariant §3's second blind spot, the jaune case.
  const expected: Record<string, string> = {
    'la crème': 'lah KREHM',
    'la banane': 'lah bah-NAN',
    'la farine': 'lah fah-REEN',
    'la pomme': 'lah POM',
  };
  strictEqual(SRC_NOT_NASAL.length, 4);
  for (const [fr, respell] of Object.entries(expected)) {
    ok(SRC_NOT_NASAL.includes(fr), `${fr} has dropped out of NOT_NASAL_FORMS`);
    const f = SRC_FOODS.find((x) => x.fr === fr);
    ok(f, `${fr} is no longer one of the sixty`);
    strictEqual(f!.respell, respell, `${fr} must stay "${respell}" and now reads "${f!.respell}"`);
    ok(!f!.respell.includes('ⁿ'), `${fr} has NO nasal vowel and somebody has added a superscript`);
  }
});

test('la crème is the ONE row the shared checker still flags, and it is wrong about it', skipBoth, () => {
  // Proof the by-name assertions above are doing work the shared checker cannot.
  // If this ever fails, hasPlainNasalFor has been improved and these comments
  // are out of date.
  const flagged = SRC_FOODS.filter((f) => hasPlainNasalFor(f.bare, f.respell)).map((f) => f.fr);
  strictEqual(flagged.join(), 'la crème',
    `the shared checker now flags ${JSON.stringify(flagged)}; update NOT_NASAL_FORMS and this test`);
});

test('the four one-syllable elided words stay ALL CAPS, which is not a shouted article', skipBoth, () => {
  // LOH, LWEEL, LUF, LAHY. The elided article has fused into the single stressed
  // syllable, so there is no article left to lowercase. A later author applying
  // the shouted-article repair to these would be wrong.
  const expected: Record<string, string> = {
    "l'eau": 'LOH', "l'huile": 'LWEEL', "l'œuf": 'LUF', "l'ail": 'LAHY',
  };
  for (const [fr, respell] of Object.entries(expected)) {
    const f = SRC_FOODS.find((x) => x.fr === fr);
    ok(f, `${fr} is no longer one of the sixty`);
    strictEqual(f!.respell, respell, `${fr} must stay "${respell}"`);
  }
});

test('a row is never both repaired and documented as already correct', skipBoth, () => {
  // The first draft listed fr.a1.cuisine.123 « le bœuf » in both: as a
  // shouted-article repair, and in NOT_REPAIRED for its one-syllable noun. The
  // batch's full-string comparison then read its own pending repair as somebody
  // else's edit and refused to run.
  const all = [...SRC_REPAIRS, ...SRC_TWINS];
  const both = SRC_NOT_REPAIRED.filter((n) => all.some((r) => r.id === n.id)).map((n) => n.id);
  strictEqual(both.length, 0, `${both.join(', ')} is in both a repair list and NOT_REPAIRED`);
});

test('every repair landed in the seed', skipBoth, () => {
  strictEqual(SRC_REPAIRS.length, 19);
  strictEqual(SRC_TWINS.length, 18);
  for (const r of [...SRC_REPAIRS, ...SRC_TWINS]) {
    const row = itemById(r.id);
    if (!row) continue; // outside the cut, legitimately absent from the seed
    strictEqual(row.respell, r.to, `${r.id} "${r.fr}" should read "${r.to}" and reads "${row.respell}"`);
  }
});

test('the rows deliberately left alone are untouched in the seed', skipBoth, () => {
  strictEqual(SRC_NOT_REPAIRED.length, 8);
  for (const n of SRC_NOT_REPAIRED) {
    const row = itemById(n.id);
    if (!row) continue;
    strictEqual(row.respell, n.respell,
      `${n.id} "${n.fr}" was correct at "${n.respell}" and the seed reads "${row.respell}"`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
   8. Items, tranches and reachability
   ══════════════════════════════════════════════════════════════════════════ */

test('every declared itemId resolves in the seed', skipSeed, () => {
  const missing = (L!.itemIds ?? []).filter((id) => !itemById(id));
  strictEqual(missing.length, 0, `dangling: ${missing.join(' ')}`);
});

test('every declared itemId is actually ON A SCREEN, not merely resolvable', skipBoth, () => {
  // a1.08 shipped 43 itemIds that resolved perfectly and were drawn by nothing.
  // The question is "did the learner see it", not "does this id resolve".
  const shown = new Set(strings(L!));
  for (const id of L!.itemIds ?? []) {
    const row = itemById(id);
    ok(row, `${id} does not resolve`);
    ok(shown.has(row!.fr) || shown.has(id),
      `${id} "${row!.fr}" is declared and appears on no screen`);
  }
});

test('tranches release every taught item exactly once and nothing untaught', skipBoth, () => {
  const released = SRC_TRANCHES.flat();
  const dupes = released.filter((id, i) => released.indexOf(id) !== i);
  strictEqual(dupes.length, 0, `released more than once: ${[...new Set(dupes)].join(' ')}`);

  const taught = new Set(SRC_ITEM_IDS);
  const never = [...taught].filter((id) => !released.includes(id) && !SRC_BORROWED.includes(id));
  strictEqual(never.length, 0, `taught and released by no tranche: ${never.join(' ')}`);

  const stray = released.filter((id) => !taught.has(id));
  strictEqual(stray.length, 0, `released but not taught: ${stray.join(' ')}`);
});

test('no tranche releases an item the acts before it have not shown', skipBoth, () => {
  // A card released before its mission is a card the learner is asked to rate
  // before they have met it. a1.17's test caught this twice.
  strictEqual(SRC_TRANCHES.length, L!.acts!.length, 'one tranche per act, index-aligned');
  for (const [i, slice] of SRC_TRANCHES.entries()) {
    const upToHere = L!.acts!.slice(0, i + 1).flatMap((a) => a.sections).map(sectionById);
    const shown = new Set(strings(upToHere));
    for (const id of slice) {
      const row = itemById(id);
      if (!row) continue;
      ok(shown.has(row.fr) || shown.has(id),
        `act ${i + 1} releases ${id} "${row.fr}" and no section up to act ${i + 1} shows it`);
    }
  }
});

test('no dead corpus entry: everything authored is used', skipBoth, () => {
  for (const it of SRC_AUTHORED) {
    ok(SRC_ITEM_IDS.includes(it.id), `authored ${it.id} "${it.fr}" is named by nothing`);
  }
  strictEqual(SRC_AUTHORED.length, 3);
  for (const it of SRC_IMPORTED) {
    ok(SRC_ITEM_IDS.includes(it.id), `imported ${it.id} "${it.fr}" is carried and named by nothing`);
  }
  strictEqual(SRC_IMPORTED.length, 8);
  strictEqual(SRC_REUSED.length, 19);
});

test('the authored ids sit inside the range this lesson owns', skipBoth, () => {
  for (const it of SRC_AUTHORED) {
    ok(it.id >= SRC_RANGE.from && it.id <= SRC_RANGE.to,
      `${it.id} is outside the owned range ${SRC_RANGE.from}..${SRC_RANGE.to}`);
  }
});

test('the eight rows outside the seed cut were actually carried', skipBoth, () => {
  strictEqual(SRC_OUTSIDE_CUT.length, 8);
  for (const id of SRC_OUTSIDE_CUT) {
    ok(itemById(id), `${id} is outside SEED_CUT.themes and was not carried; its card renders blank offline`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
   9. Drill capability, which is where two sections nearly shipped empty
   ══════════════════════════════════════════════════════════════════════════ */

test('every speak target carries voiceflash', skipBoth, () => {
  // `practice` with skill 'speak' renders through PracticeVFView, which needs
  // the drill. A first draft named the contrast sentences and only ONE sentence
  // in this whole lesson carries voiceflash.
  for (const id of SRC_SPEAK) {
    const row = itemById(id);
    ok(row, `speak target ${id} is not in the seed`);
    ok((row!.drills ?? []).includes('voiceflash'),
      `speak target ${id} "${row!.fr}" has no voiceflash, so the card renders nothing`);
  }
  strictEqual(SRC_SPEAK.length, 10);
});

test('every dictation target carries dictation, and the modes are known', skipBoth, () => {
  strictEqual(SRC_DICTATION.length, 5);
  const modes: string[] = [];
  for (const id of SRC_DICTATION) {
    const row = itemById(id);
    ok(row, `dictation target ${id} is not in the seed`);
    ok((row!.drills ?? []).includes('dictation'),
      `dictation target ${id} "${row!.fr}" has no dictation drill`);
    modes.push(dicteeMode(row!.fr));
  }
  // ONE stays in letters mode and four degrade to words. Pinned so nobody
  // "completes" the dictée by adding a target that silently degrades, and so
  // nobody deletes the four thinking they are dead weight.
  strictEqual(modes.filter((m) => m === 'letters').length, 1,
    'exactly one dictation target should be in LETTERS mode; the set has changed');
});

test('no practice section claims a skill the renderer does not draw', skipSeed, () => {
  // `practice.skill` is authored and read by no component. 'write' in
  // particular draws no writing surface at all.
  for (const s of L!.sections.filter((x) => x.type === 'practice')) {
    const skill = (s as unknown as { skill?: string }).skill;
    ok(skill !== 'write', 'skill "write" draws no writing surface');
  }
});

/* ══════════════════════════════════════════════════════════════════════════
   10. The exam
   ══════════════════════════════════════════════════════════════════════════ */

const theQuiz = () => L!.sections.find((s) => s.type === 'quiz') as Extract<Lesson['sections'][number], { type: 'quiz' }>;

test('the exam is at most half mcq and every question has a why and a ref', skipSeed, () => {
  const qs = quizQuestions(theQuiz());
  strictEqual(qs.length, 27);
  const mcq = qs.filter((q) => q.format === 'mcq').length;
  ok(mcq <= qs.length / 2, `mcq is ${mcq}/${qs.length}, over the half ceiling`);
  for (const q of qs) {
    ok(q.why, `no why: "${q.q.slice(0, 60)}"`);
    ok(q.ref, `no ref: "${q.q.slice(0, 60)}"`);
    ok(sectionById(q.ref!), `ref "${q.ref}" names no section in this lesson`);
  }
});

test('every free-text question accepts the answer it displays', skipSeed, () => {
  // Through the REAL matchesAccept, never a copy.
  for (const q of quizQuestions(theQuiz())) {
    if (!q.accept || !q.answer) continue;
    ok(matchesAccept(q.answer, q.accept),
      `"${q.q.slice(0, 50)}" displays "${q.answer}" and does not accept it`);
  }
});

test('correct answers do not cluster in one option slot', skipSeed, () => {
  // The density validator fails any slot over 40% of the closed questions. The
  // A1 band sits at 24/29/26/21 across 350 closed questions and this exam is
  // authored to land inside that.
  const slots = quizQuestions(theQuiz())
    .filter((q) => Array.isArray(q.opts) && typeof q.correct === 'number')
    .map((q) => q.correct as number);
  ok(slots.length >= 8, 'too few closed questions to say anything about spread');
  const tally = new Map<number, number>();
  for (const s of slots) tally.set(s, (tally.get(s) ?? 0) + 1);
  for (const [slot, n] of tally) {
    const pct = (n / slots.length) * 100;
    ok(pct <= 40, `${pct.toFixed(0)}% of correct answers sit in slot ${slot} (limit 40)`);
  }
  ok(tally.size >= 3, 'the correct answer only ever lands in two positions');
});

test('no two options within one question are equal', skipSeed, () => {
  for (const q of quizQuestions(theQuiz())) {
    if (!Array.isArray(q.opts)) continue;
    strictEqual(new Set(q.opts).size, q.opts.length, `duplicate option in "${q.q.slice(0, 50)}"`);
  }
});

test('IN-MISSION checks are hand-spread, because MissionRich does not shuffle', skipSeed, () => {
  // LessonRich shuffles the exam's options per attempt. MissionRich does NOT:
  // every option surface in it renders q.opts in authored order and compares the
  // tap against q.correct directly. So a run of identical slots teaches the
  // learner to tap the same position.
  for (const a of L!.acts!) {
    const slots: number[] = [];
    for (const sid of a.sections) {
      const s = sectionById(sid) as unknown as { groups?: { check?: { correct?: number } }[] } | undefined;
      for (const g of s?.groups ?? []) if (typeof g.check?.correct === 'number') slots.push(g.check.correct);
    }
    for (let i = 1; i < slots.length; i++) {
      ok(slots[i] !== slots[i - 1],
        `act ${a.id} puts the correct option in slot ${slots[i]} twice running; MissionRich renders authored order`);
    }
  }
});

test('each teaching drill is the first resolving target of exactly one round', skipSeed, () => {
  // drillForRound walks a round's targets and fires the drill of the FIRST one
  // that has any, then stops. A drill named in second place is dead content.
  // a1.05 shipped two and a1.07's first draft a third.
  const fired = new Map<string, string>();
  for (const r of theQuiz().rounds ?? []) {
    const first = (r.targets ?? [])
      .map((t) => (L!.errorTriggers ?? []).find((e) => e.id === t))
      .find((e) => e?.drill);
    ok(first?.drill, `round ${r.id} fires no drill`);
    ok(!fired.has(first!.drill!), `drill ${first!.drill} is fired by ${fired.get(first!.drill!)} and ${r.id}`);
    fired.set(first!.drill!, r.id);
  }
  const teaching = (L!.drills ?? []).map((d) => d.id).filter((d) => !d.startsWith('retest-'));
  for (const d of teaching) ok(fired.has(d), `drill ${d} is fired by no round, so it is dead content`);
  strictEqual(theQuiz().rounds!.length, 6);
});

test('every error trigger names a real drill, retest and section', skipSeed, () => {
  strictEqual((L!.errorTriggers ?? []).length, 6);
  const drillIds = new Set((L!.drills ?? []).map((d) => d.id));
  for (const e of L!.errorTriggers ?? []) {
    ok(drillIds.has(e.drill!), `${e.id} names missing drill ${e.drill}`);
    ok(drillIds.has(e.retest!), `${e.id} names missing retest ${e.retest}`);
    for (const d of e.detectOn ?? []) {
      ok(sectionById(d.split('/')[0]), `${e.id} detectOn a missing section: ${d}`);
    }
  }
});

/* ══════════════════════════════════════════════════════════════════════════
   11. Layout traps, each of which is a bug that shipped
   ══════════════════════════════════════════════════════════════════════════ */

test('the reference sheet uses only the three types the renderer draws', skipSeed, () => {
  // ReferenceSheet.tsx switches on teach, letterGrid and table. Its default
  // branch draws the section TITLE and nothing else. a1.13 and a1.17 both
  // shipped a `cheatSheet` in a sheet and both drew an empty heading.
  const DRAWN = ['teach', 'letterGrid', 'table'];
  for (const sh of L!.sheets ?? []) {
    for (const s of (sh as unknown as { sections?: { type: string }[] }).sections ?? []) {
      ok(DRAWN.includes(s.type), `sheet ${sh.id} has a ${s.type} section, which draws its title and nothing else`);
    }
  }
});

test('every sheet is reachable and every sheetId resolves', skipSeed, () => {
  const sheetIds = new Set((L!.sheets ?? []).map((s) => s.id));
  const named = new Set(
    L!.sections.map((s) => (s as { sheetId?: string }).sheetId).filter(Boolean) as string[],
  );
  for (const id of named) ok(sheetIds.has(id), `a section names missing sheet ${id}`);
  for (const id of sheetIds) ok(named.has(id), `sheet ${id} is reachable from no section`);
});

test('commonErrors carries swipe and lg, or it renders blank', skipSeed, () => {
  // Without swipe it hits a `break` that falls out of the switch and returns
  // undefined. a1.01 shipped a fully blank mission that way.
  for (const s of L!.sections.filter((x) => x.type === 'commonErrors')) {
    const sec = s as unknown as { swipe?: boolean; size?: string };
    strictEqual(sec.swipe, true, 'commonErrors without swipe renders nothing');
    strictEqual(sec.size, 'lg');
  }
});

test('a groupDrill control page carries items: [] and no size', skipSeed, () => {
  for (const s of L!.sections.filter((x) => x.type === 'groupDrill')) {
    const sec = s as unknown as { size?: string; groups?: { items?: unknown[]; check?: unknown }[] };
    for (const g of sec.groups ?? []) {
      if ((g.items?.length ?? 0) === 0) ok(g.check, 'a group with no items and no check renders nothing');
    }
  }
});

test('the reading passage is one block and its glossary can match', skipSeed, () => {
  for (const s of L!.sections.filter((x) => x.type === 'reading')) {
    const sec = s as unknown as { text?: string; glossary?: { word: string }[]; questionsInModal?: boolean; questions?: unknown[] };
    ok(!(sec.text ?? '').includes('\n'), 'PassagePage discards an authored newline silently');
    ok(sec.questionsInModal === true && (sec.questions?.length ?? 0) > 0,
      'reading + glossary needs questionsInModal AND questions, or the glossary never renders');
    for (const g of sec.glossary ?? []) {
      ok(g.word.split(/\s+/).length <= 4, `glossary key "${g.word}" is over MAX_GLOSS_WORDS and can never match`);
      ok((sec.text ?? '').toLowerCase().includes(g.word.toLowerCase()), `glossary key "${g.word}" is not in the passage`);
    }
  }
});

test('no section names more than the three term chips the renderer draws', skipSeed, () => {
  for (const s of L!.sections) {
    const t = (s as { terms?: string[] }).terms ?? [];
    ok(t.length <= 3, `${(s as { id?: string }).id} names ${t.length} terms; the renderer shows three`);
    for (const k of t) ok(L!.terms?.[k], `${(s as { id?: string }).id} names undefined term ${k}`);
  }
});

test('no autoplay anywhere, because no component implements it', skipSeed, () => {
  ok(!JSON.stringify(L!).includes('"autoplay"'), 'autoplay is declared in schema.ts and implemented nowhere');
});

test('no U+203F tie, which renders as a low underscore on a Pixel 6', skipSeed, () => {
  const bad = strings(L!).filter((s) => s.includes('‿'));
  strictEqual(bad.length, 0, `U+203F in: ${bad.slice(0, 3).join(' | ')}`);
});

/* ══════════════════════════════════════════════════════════════════════════
   12. Seed parity, every figure DERIVED from the authored source
   ══════════════════════════════════════════════════════════════════════════ */

test('the seed lesson and the authored source teach the same lesson', skipBoth, () => {
  // Canonical, not byte-for-byte: a publish rewrites the seed from Postgres and
  // reorders keys with no content change. See canonicalJson in schema.ts.
  strictEqual(canonicalJson(L), canonicalJson(SRC), 'seed.json and the source have drifted');
});

test('the unit was rebound off the dead theme', skipBoth, () => {
  const unit = seed.units.find((u) => u.id === 'a1.23');
  strictEqual((unit?.themes ?? []).join(), SRC_THEMES.join());
  ok(!(unit?.themes ?? []).includes('nourriture'), 'a1.23 still declares nourriture, which holds 0 rows');
  for (const t of unit?.themes ?? []) {
    ok(seed.items.some((i) => i.theme === t), `unit a1.23 declares "${t}" and the seed holds no row in it`);
  }
});

test('the authored rows did not move a1.03 printed figures', skipBoth, () => {
  // Through the REAL endingPopulation. a1.08 shipped a hand-rolled copy carrying
  // a filter the real one does not have and moved two of a1.03's printed cards.
  const joins = SRC_AUTHORED.filter((i) => endingPopulation([i as never]).length === 1);
  ok(joins.length <= 2, `${joins.length} authored rows join a1.03's population; re-measure genre-endings.ts`);
});

test('no duplicate headword inside either of this unit themes', skipBoth, () => {
  // The rule as flashhub-coverage.test.ts states it (line 29-30). `du` and
  // `de la` are NOT stripped, which is why fr.a1.cuisine.265 « du pain » and
  // fr.a1.cuisine.002 « le pain » both ship and are not duplicates.
  const norm = (s: string) => s.toLowerCase().replace(/^(le |la |les |l'|un |une |des )/, '').trim();
  const isVocab = (i: Item) => ((i as { cardType?: string }).cardType ?? 'vocab') === 'vocab';
  for (const theme of SRC_THEMES) {
    const seen = new Map<string, string>();
    for (const i of seed.items) {
      if (i.theme !== theme || i.kind === 'sentence' || !isVocab(i)) continue;
      const k = norm(i.fr);
      ok(!seen.has(k), `${theme} holds "${i.fr}" twice: ${seen.get(k)} and ${i.id}`);
      seen.set(k, i.id);
    }
  }
});
