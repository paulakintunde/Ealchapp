// a2.20.l1 « Participes passés irréguliers »: the assertions that keep this
// lesson true.
//
// Modelled on a2-05-passe-compose.test.ts. Everything here runs the REAL app
// function rather than a copy: an earlier a1.01 test inlined its own glossary
// lookup, copied the version that was already broken, and passed while the
// feature was dead.
//
// THIS FILE READS seed.json AND NOTHING ELSE. It does not import the corpus,
// the terms or the lesson source, because a test that imports the same constant
// the content imports is comparing the content to itself. Every figure below is
// written out by hand, so a change in the source has to be reflected here on
// purpose. That also closes corrections §9's second hole outright: there is no
// `try { … } catch {}` around a source import here, so there is no state in
// which thirty assertions silently do not run.
//
// IT IS SCOPED TO ITS OWN ID BLOCK. Ledger §a2.16-1: a2.03's test filtered on a
// namespace prefix and meant "the rows a2.03 authored", and four of its tests
// went red the moment a2.16 landed in the same namespace. `fr.a2.verbes` holds
// 482 rows belonging to eleven lessons. The duplicate-`fr` check is deliberately
// NOT scoped: flashhub-coverage counts two rows sharing an `fr` in one theme as
// one card served twice, whoever authored them.
//
// ── What this file is actually guarding ────────────────────────────────────
//
//   THE ORGANISATION, WHICH IS THE WHOLE LESSON. Four groups plus a residue of
//   five, each group in its own section with every member of it visible
//   together. A group whose members are scattered is a list with a heading on
//   it, and a list is the thing this lesson exists not to be. Asserted GROUP BY
//   GROUP, and separately asserted that no section holds two whole groups.
//   ALL THIRTY-THREE FORMS, BY NAME. Not as a count. A count passes when a form
//   is dropped and another is added.
//   THE SPLIT WITH a2.05. A past form is not a corpus item: every row this
//   build authors is a sentence, and a row with no whitespace is a bare word
//   whatever its `kind` says (a2.05 §4).
//   EVERY ONE OF a2.05's THIRTY-FIVE NAMES IS OWNED. That lesson refuses them
//   all by name and hands them here; the two this lesson does not teach
//   actively are on the reference sheet and one is in the exam.
//   `dû` KEEPING ITS CIRCUMFLEX. Asserted by name, deliberately, so a future
//   author stripping it goes red. Plus the two real functions that cannot see
//   it, which is why the circumflex mission is an mcq.
//   `eu` HAVING ITS OWN TEACHING MOMENT, asserted by section.
//   NO AUXILIARY CHOICE TAUGHT, and être absent from every production surface.
//   a2.21 owns the choice; this lesson owns the form.
//   NO PARTICIPLE AGREEMENT IN ANY AUTHORED SENTENCE. The three être rows are
//   masculine singular deliberately.
//   THE LOOK-DERIVABLE TRAPS SHOWN AS PAIRS. « pris » beside a « prendu » is
//   what stops a learner producing prendu; « pris » alone is not.
//   THE a2.15 BACK-REFERENCE, quoted as a LITERAL so a paraphrase fails.
//   A DICTÉE TARGET IN WORD MODE, through the real `dicteeMode`.
//   A STACKED trapDrill, and a cards-step label that miscounts its own array.
//   A ROLE-PLAY TURN WITH ONE ANSWER. scenario.logic.test.ts enforces two
//   across the whole seed and no document in this band mentions it.
//
// Every one of those is asserted below, and every one was mutation-tested: the
// assertion was broken on purpose and confirmed to go red before it was kept.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { ok, strictEqual, deepStrictEqual } from 'node:assert';
import { test } from 'node:test';

import type { Item, Lesson } from './schema.ts';
import { quizQuestions, validateLesson, formatIssues } from './schema.ts';
import { validateDensity, formatDensity, hasPlainNasalFor } from './density.logic.ts';
import { endingPopulation } from './gender.logic.ts';
import { dicteeMode, letterCount } from './dictee.logic.ts';
import { matchesAccept, fold } from './answer.logic.ts';
import { normalizeFr } from '../utils/score.ts';
import { namesUnitLabel } from './unit-label.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  version: number; items: Item[]; lessons: Lesson[];
  units: { id: string; title?: string; sub?: string; canDo?: string; seq?: string | number; lessonIds?: string[]; prereqUnitIds?: string[] }[];
};

const L = seed.lessons.find((l) => l.id === 'a2.20.l1');
const noLesson = !L;
const byIdItem = new Map(seed.items.map((i) => [i.id, i] as const));

/** THE BLOCK, NOT THE PREFIX. Ten other lessons own `fr.a2.verbes.001..590`. */
const MY_BLOCK = { from: 591, to: 650 };
const isMine = (id: string) => {
  const m = /^fr\.a2\.verbes\.(\d{3})$/.exec(id);
  if (!m) return false;
  const n = Number(m[1]);
  return n >= MY_BLOCK.from && n <= MY_BLOCK.to;
};
const myRows = () => seed.items.filter((i) => isMine(i.id));

/** a2.05's block, so this lesson's rows can be proved to be outside it. */
const A205_BLOCK = { from: 541, to: 590 };
const isA205 = (id: string) => {
  const m = /^fr\.a2\.verbes\.(\d{3})$/.exec(id);
  if (!m) return false;
  const n = Number(m[1]);
  return n >= A205_BLOCK.from && n <= A205_BLOCK.to;
};

const THEME = 'verbes';
const PASSE_UNIT = 'a2.05';
const FAMILY_UNIT = 'a2.15';
const ALLER_UNIT = 'a2.02';
const FAIRE_UNIT = 'a2.12';
const MODAUX_UNIT = 'a2.13';
const SAVOIR_UNIT = 'a2.14';
const ETRE_UNIT = 'a2.21';
const REFLEXIVE_UNIT = 'a2.22';
const SCHOOL_UNIT = 'a2.31';

/** a2.05's reframe and a2.15's, quoted VERBATIM. Doctrine §B.7 and a2.16 §3: a
 *  back-reference to another unit is not a variable, so these are literals and a
 *  paraphrase fails. THE BRIEF ASKS FOR a2.15 BY NAME. */
const A205_REFRAME = 'One verb, two words, and the small ones go in between.';
const A215_REFRAME = 'Cover the front of the verb. Build what is left.';

const REFRAME = 'Do not build these. Reach for the group it is in.';

/** THE THIRTY-THREE, WRITTEN OUT BY HAND AND BY GROUP.
 *
 *  THE BRIEF ASKS FOR EVERY FORM TO BE ASSERTED INDIVIDUALLY BY NAME RATHER
 *  THAN AS A COUNT, and this is the list that does it. It is typed here rather
 *  than imported, so dropping one from the source has to be repeated here on
 *  purpose.
 *
 *  IT IS THIRTY-THREE AND NOT FORTY. The brief says forty nine times; the
 *  database `sub` is « Participes passés irréguliers » and carries no number at
 *  all, which is corrections §1 in its second incarnation (a2.05 found the same
 *  thing with "sixty"). The real list is a2.05's own thirty-five minus `refait`
 *  and `aperçu`, whose verbs exist as headwords at no level. */
const GROUPS: readonly { group: string; sectionId: string; members: readonly string[] }[] = [
  { group: '-is', sectionId: 's07-is', members: ['pris', 'mis', 'appris', 'compris', 'remis', 'promis', 'assis'] },
  { group: '-it', sectionId: 's09-it', members: ['dit', 'écrit', 'conduit', 'construit'] },
  { group: '-u', sectionId: 's10-u', members: ['vu', 'lu', 'bu', 'su', 'pu', 'voulu', 'dû', 'connu', 'venu', 'tenu', 'reçu', 'couru', 'cru'] },
  { group: '-ert', sectionId: 's12-ert', members: ['ouvert', 'offert', 'couvert', 'souffert'] },
  { group: 'odd', sectionId: 's13-odd', members: ['fait', 'été', 'eu', 'né', 'mort'] },
];
const ALL_FORMS = GROUPS.flatMap((g) => g.members);

/** a2.05's `IRREGULAR_PAST`, the thirty-five names that lesson refuses by name
 *  and hands forward. Typed out rather than imported for the same reason. */
const A205_IRREGULAR_PAST: readonly string[] = [
  'fait', 'dit', 'pris', 'mis', 'vu', 'lu', 'bu', 'su', 'pu', 'eu', 'été',
  'voulu', 'dû', 'connu', 'venu', 'tenu', 'écrit', 'ouvert', 'offert',
  'appris', 'compris', 'assis', 'conduit', 'construit', 'couvert', 'souffert',
  'né', 'mort', 'remis', 'promis', 'refait', 'reçu', 'aperçu', 'cru', 'couru',
];
/** The two this lesson derives on the sheet rather than teaching. */
const DERIVED_ONLY: readonly string[] = ['refait', 'aperçu'];

/** THE CIRCUMFLEX, AS A LITERAL. The brief asks for `dû` to be asserted by name
 *  with a comment saying it is deliberate, so a future author stripping it goes
 *  red rather than shipping the word for "some". */
const DU_WITH_CIRCUMFLEX = 'dû';
const DU_WITHOUT_CIRCUMFLEX = 'du';

/** The look-derivable traps, and the non-word the regular rule produces for
 *  each. THE BRIEF ASKS FOR THESE TO BE ASSERTED AS PAIRS. */
const DERIVABLE: readonly [string, string][] = [
  ['prendu', 'pris'],
  ['mettu', 'mis'],
  ['faisu', 'fait'],
  ['ouvri', 'ouvert'],
  ['couri', 'couru'],
  ['voiri', 'vu'],
];

/** The forms whose first word is not avoir. a2.21 owns the choice; this lesson
 *  shows the form. */
const ETRE_FORMS: readonly string[] = ['venu', 'né', 'mort'];

/** Five of the thirty-three are already published as ordinary words, and the
 *  ids they are imported from. */
const ALSO_A_WORD: readonly [string, string][] = [
  ['écrit', 'fr.a2.examens-et-diplomes.045'],
  ['ouvert', 'fr.a2.courses.070'],
  ['couvert', 'fr.a1.meteo.062'],
  ['cru', 'fr.sons.adjectifs-essentiels.082'],
  ['mort', 'fr.sons.adjectifs-essentiels.161'],
];

const SECTION_IDS = [
  's01-scene', 's02-goals', 's03-notmany',
  's04-recap', 's05-machine',
  's06-map', 's07-is', 's08-front', 's09-it', 's10-u', 's11-batch1', 's12-ert', 's13-odd', 's14-firstword',
  's15-derivable', 's16-which', 's17-eu', 's18-roof', 's19-errors',
  's20-unseen', 's21-scenario', 's22-dictation', 's23-speak',
  's24-review', 's25-progress', 's26-quiz', 's27-roundup',
];

const ACTS: readonly { id: string; sections: readonly string[] }[] = [
  { id: 'act1', sections: ['s01-scene', 's02-goals', 's03-notmany'] },
  { id: 'act2', sections: ['s04-recap', 's05-machine'] },
  { id: 'act3', sections: ['s06-map', 's07-is', 's08-front', 's09-it', 's10-u', 's11-batch1', 's12-ert', 's13-odd', 's14-firstword'] },
  { id: 'act4', sections: ['s15-derivable', 's16-which', 's17-eu', 's18-roof', 's19-errors'] },
  { id: 'act5', sections: ['s20-unseen', 's21-scenario', 's22-dictation', 's23-speak'] },
  { id: 'act6', sections: ['s24-review', 's25-progress', 's26-quiz', 's27-roundup'] },
];

/** The sections a form the rule invents may legally appear in. */
const WRONG_FORM_SECTIONS = new Set([
  's01-scene', 's05-machine', 's15-derivable', 's16-which', 's19-errors',
  's20-unseen', 's07-is', 's09-it', 's10-u', 's12-ert', 's26-quiz', 's24-review',
]);
/** And the sections être may appear in. */
const ETRE_SECTIONS = new Set(['s14-firstword', 's13-odd', 's10-u', 's11-batch1', 's24-review']);
/** And the production surfaces, on which it may not. */
const PRODUCTION_SECTIONS = new Set(['s20-unseen', 's22-dictation', 's23-speak', 's26-quiz', 's16-which', 's18-roof']);

/* ─── Helpers, all boundary-aware ──────────────────────────────────────────*/

function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) strings(x, out);
  else if (v && typeof v === 'object') for (const x of Object.values(v)) strings(x, out);
  return out;
}
const MACHINE_KEYS = new Set([
  'id', 'ref', 'sheetId', 'itemId', 'itemIds', 'targets', 'detectOn', 'drill',
  'retest', 'accept', 'recordingId', 'audioRef', 'unitId', 'scenarioId',
  'clipIds', 'buckets',
]);
const isId = (s: string): boolean => /^fr\.[a-z0-9]+\.[a-z0-9-]+\.\d+$/i.test(s);
/** Keeps `sub`, which on a cardDeck card holds PROSE. a2.15 §13. */
function display(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') { if (!isId(v)) out.push(v); }
  else if (Array.isArray(v)) for (const x of v) display(x, out);
  else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) if (!MACHINE_KEYS.has(k)) display(x, out);
  }
  return out;
}
/** THE LEFT BOUNDARY DROPS THE APOSTROPHE. a2.17 §3: the house boundary cannot
 *  see `j'ai`, which is the first two words of thirty rows here. */
function hasPhrase(hay: string, needle: string): boolean {
  const isWordL = (c: string) => /[\p{L}\p{N}-]/u.test(c);
  const isWordR = (c: string) => /[\p{L}\p{N}'’-]/u.test(c);
  const h = hay.toLowerCase();
  const n = needle.toLowerCase();
  let i = 0;
  while ((i = h.indexOf(n, i)) !== -1) {
    if (!isWordL(i === 0 ? '' : h[i - 1]!) && !isWordR(h[i + n.length] ?? '')) return true;
    i += 1;
  }
  return false;
}
/** A LEARNER SURFACE NAMES A LESSON BY ITS LABEL, NOT BY ITS ID. Resolved
 *  through the shipped `unit.seq`, never by slicing the id: 31 of 35 A2 units
 *  disagree with their own id number. It does not also accept the raw id, or it
 *  would pass on exactly the thing this change removed. */
const namesUnit = (hay: string, id: string): boolean => namesUnitLabel(hay, id);
const countPhrase = (hay: string, needle: string): number => {
  let n = 0; let i = 0;
  const h = hay.toLowerCase(); const q = needle.toLowerCase();
  while ((i = h.indexOf(q, i)) !== -1) { n += 1; i += q.length; }
  return n;
};
const section = (id: string) => (L?.sections ?? []).find((s) => (s as { id?: string }).id === id);
const learnerText = () => [
  ...strings(L!.sections), ...strings(L!.sheets ?? []), ...strings(L!.terms ?? {}),
  L!.intro ?? '', ...strings(L!.overview ?? {}), ...strings(L!.acts ?? []),
  ...strings(L!.drills ?? []),
].join('\n');

/* ══════════════════════════════════════════════════════════════════════════
 *  IDENTITY
 * ═══════════════════════════════════════════════════════════════════════ */

test('the lesson is in the seed at all', () => {
  ok(L, 'a2.20.l1 is not in seed.json');
});

test('the unit block is the database\'s, not the brief\'s', { skip: noLesson }, () => {
  // Corrections §1: the brief's title and sub are swapped in every A2 brief and
  // the brief's `sub` exists nowhere in the database. These four are the read.
  const u = seed.units.find((x) => x.id === 'a2.20');
  ok(u, 'a2.20 is not in the seed');
  strictEqual(String(u!.seq), '17');
  strictEqual(u!.title, 'Irregular Past Participles');
  strictEqual(u!.sub, 'Participes passés irréguliers');
  strictEqual(u!.canDo, 'Can produce the irregular past participles rather than guessing from the infinitive');
  deepStrictEqual(u!.prereqUnitIds, [PASSE_UNIT]);
  ok((u!.lessonIds ?? []).includes('a2.20.l1'));
  strictEqual(L!.tag, 'A2 · LEÇON 17');
  strictEqual(L!.title, u!.sub);
  strictEqual((L!.overview as { titleEn?: string })?.titleEn, u!.title);
  strictEqual(L!.version, 5, 'the unit-label pass, which replaced every raw unit id on a learner surface with its lesson label');
});

test('the spine is in order and the acts claim every section exactly once', { skip: noLesson }, () => {
  deepStrictEqual(L!.sections.map((s) => (s as { id?: string }).id), SECTION_IDS);
  strictEqual(L!.sections.length, 27);
  deepStrictEqual((L!.acts ?? []).map((a) => a.id), ACTS.map((a) => a.id));
  for (const a of ACTS) {
    const got = (L!.acts ?? []).find((x) => x.id === a.id);
    deepStrictEqual(got?.sections, [...a.sections], `act ${a.id}`);
  }
  const claimed = (L!.acts ?? []).flatMap((a) => a.sections);
  strictEqual(new Set(claimed).size, claimed.length, 'a section is claimed by two acts');
  deepStrictEqual([...claimed].sort(), [...SECTION_IDS].sort());
});

test('the Owns act outweighs the recap, and it is the largest act alone', { skip: noLesson }, () => {
  // Doctrine §B.5: if the act structure gives the paradigm more missions than
  // the Owns, the wrong lesson got built. NINE against TWO.
  const owns = (L!.acts ?? []).find((a) => a.id === 'act3')!;
  const recap = (L!.acts ?? []).find((a) => a.id === 'act2')!;
  strictEqual(owns.sections.length, 9);
  strictEqual(recap.sections.length, 2);
  const sizes = (L!.acts ?? []).map((a) => a.sections.length);
  strictEqual(Math.max(...sizes), owns.sections.length);
  strictEqual(sizes.filter((n) => n === owns.sections.length).length, 1);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE SPLIT WITH a2.05
 * ═══════════════════════════════════════════════════════════════════════ */

test('this lesson authors sentences only, and no bare past form is a headword', { skip: noLesson }, () => {
  const rows = myRows();
  strictEqual(rows.length, 43);
  for (const r of rows) {
    strictEqual(r.kind, 'sentence', `${r.id}`);
    // a2.05 §4: `kind` alone cannot see a bare past form, because the corpus
    // helper writes `kind: 'sentence'` on every row it makes. A row with no
    // whitespace is a bare word whatever it calls itself, and this one line is
    // the assertion the whole ledger decision rests on.
    ok(/\s/.test(r.fr), `${r.id} holds the single word ${JSON.stringify(r.fr)}`);
    strictEqual(r.level, 'a2', `${r.id}`);
    strictEqual(r.theme, THEME, `${r.id}`);
    ok(!(r as { gender?: string }).gender, `${r.id} carries a gender`);
    ok(!isA205(r.id), `${r.id} is inside a2.05's block`);
  }
  const ids = rows.map((r) => r.id).sort();
  strictEqual(ids[0], 'fr.a2.verbes.591');
  strictEqual(ids[ids.length - 1], 'fr.a2.verbes.633');
  // NOT ONE OF THE THIRTY-THREE IS A HEADWORD THIS BUILD AUTHORED. The ones that
  // DO exist bare are words in their own right and every one of them predates
  // this lesson; the five it imports are asserted below.
  const mineBare = rows.filter((r) => ALL_FORMS.includes(r.fr));
  deepStrictEqual(mineBare.map((r) => r.id), []);
});

test('a2.05\'s block still holds exactly its own thirty-six rows', { skip: noLesson }, () => {
  // Neither side may re-author the other's rows and the COUNT is how we know.
  // Ledger §10: the maximum has been useless since a2.10.l2 took .461..500.
  const theirs = seed.items.filter((i) => isA205(i.id));
  strictEqual(theirs.length, 36);
  const a205 = seed.lessons.find((l) => l.id === 'a2.05.l1');
  if (a205) {
    const owned = new Set(a205.itemIds ?? []);
    deepStrictEqual(theirs.map((i) => i.id).filter((id) => !owned.has(id)), []);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE ORGANISATION: FOUR GROUPS AND A RESIDUE OF FIVE
 *
 *  THE BRIEF ASKS THE TEST TO ASSERT THIS FAMILY BY FAMILY, and it is the
 *  entire difference between this lesson and a list.
 * ═══════════════════════════════════════════════════════════════════════ */

for (const g of GROUPS) {
  test(`the ${g.group} group lives in ${g.sectionId} with all ${g.members.length} of its members`, { skip: noLesson }, () => {
    const sec = section(g.sectionId);
    ok(sec, `${g.sectionId} does not exist`);
    const text = strings(sec).join('\n');
    for (const m of g.members) {
      ok(hasPhrase(text, m), `${g.sectionId} does not name « ${m} », which is in its own group`);
    }
  });
}

test('no section holds two whole groups', { skip: noLesson }, () => {
  // The assertion above cannot see a merge on its own: a section holding the -is
  // group AND the -it group satisfies both of their "members are here" checks.
  for (const g of GROUPS) {
    const text = strings(section(g.sectionId)).join('\n');
    for (const other of GROUPS) {
      if (other.group === g.group) continue;
      const all = other.members.every((m) => hasPhrase(text, m));
      ok(!all, `${g.sectionId} owns the ${g.group} group and holds every member of the ${other.group} group too`);
    }
  }
});

test('all thirty-three forms appear, asserted individually by name', { skip: noLesson }, () => {
  // BY NAME AND NOT AS A COUNT. A count passes when one form is dropped and
  // another added, which is exactly the drift a list-shaped lesson invites.
  strictEqual(ALL_FORMS.length, 33);
  strictEqual(new Set(ALL_FORMS).size, 33, 'a form is listed in two groups');
  const text = learnerText();
  for (const f of ALL_FORMS) ok(hasPhrase(text, f), `« ${f} » appears nowhere in the lesson`);
  strictEqual(GROUPS.filter((g) => g.group !== 'odd').flatMap((g) => g.members).length, 28);
  strictEqual(GROUPS.find((g) => g.group === 'odd')!.members.length, 5);
});

test('every one of a2.05\'s thirty-five names is owned by somebody', { skip: noLesson }, () => {
  // a2.05 refuses all thirty-five by name and hands them here. Two of them are
  // not taught actively — their verbs exist as headwords at no level — and both
  // are named on the reference sheet, so nothing is orphaned.
  strictEqual(A205_IRREGULAR_PAST.length, 35);
  const taught = new Set(ALL_FORMS);
  const derived = new Set(DERIVED_ONLY);
  const orphans = A205_IRREGULAR_PAST.filter((p) => !taught.has(p) && !derived.has(p));
  deepStrictEqual(orphans, []);
  const sheetText = strings(L!.sheets ?? []).join('\n');
  for (const d of DERIVED_ONLY) ok(hasPhrase(sheetText, d), `« ${d} » is derived rather than taught and is not on the sheet either`);
});

test('the reference sheet holds all thirty-three, grouped', { skip: noLesson }, () => {
  // The brief calls this the highest-value sheet in A2 and says the learner
  // returns to it for months. Three columns, because a2.04 measured a
  // four-column sheet table clipping on a Pixel 6.
  const sheets = L!.sheets ?? [];
  strictEqual(sheets.length, 1);
  const sheet = sheets[0]!;
  strictEqual(sheet.id, 'sheet.a2.20.participes');
  ok(sheet.title.length <= 37, `the sheet title is ${sheet.title.length} characters and the header bar cuts at 37`);
  const sheetText = strings(sheet).join('\n');
  for (const f of ALL_FORMS) ok(hasPhrase(sheetText, f), `« ${f} » is not on the reference sheet`);
  for (const s of sheet.sections ?? []) {
    ok(s.type !== 'cheatSheet', 'a cheatSheet inside a reference sheet draws its title and nothing else');
    const cols = (s as { cols?: string[] }).cols;
    if (cols) ok(cols.length <= 3, `sheet table ${(s as { id?: string }).id} has ${cols.length} columns`);
    for (const row of ((s as { rows?: string[][] }).rows ?? [])) {
      for (const cell of row) ok(cell.length <= 12, `sheet cell ${JSON.stringify(cell)} is ${cell.length} characters`);
    }
  }
  // ONE TABLE PER GROUP, so the sheet is grouped rather than alphabetical.
  const tableIds = (sheet.sections ?? []).filter((s) => s.type === 'table').map((s) => (s as { id?: string }).id);
  deepStrictEqual(tableIds, ['sheet-is', 'sheet-it', 'sheet-u', 'sheet-ert', 'sheet-odd']);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE CIRCUMFLEX
 * ═══════════════════════════════════════════════════════════════════════ */

test('dû keeps its circumflex, and the circumflex is DELIBERATE', { skip: noLesson }, () => {
  // THIS ASSERTION EXISTS SO THAT A FUTURE AUTHOR WHO STRIPS THE ACCENT GOES
  // RED. « du » without the roof is the word for "some": a different word that
  // happens to be spelled the same way, and the only accent in the whole set
  // that changes what a word means. The brief asks for it by name.
  strictEqual(DU_WITH_CIRCUMFLEX, 'dû');
  ok(GROUPS.find((g) => g.group === '-u')!.members.includes(DU_WITH_CIRCUMFLEX), 'dû is not in the -u group');
  const text = learnerText();
  ok(hasPhrase(text, DU_WITH_CIRCUMFLEX), 'the lesson never prints dû with its circumflex');
  const rows = myRows().filter((r) => hasPhrase(r.fr, DU_WITH_CIRCUMFLEX));
  ok(rows.length >= 1, 'no corpus row holds dû with its circumflex');
  // And the other half of the pair, so the contrast is on a card rather than in
  // a comment.
  ok(myRows().some((r) => hasPhrase(r.fr, DU_WITHOUT_CIRCUMFLEX)), 'no corpus row holds du without the circumflex');
});

test('no scored surface in this app can test the circumflex, and none tries', { skip: noLesson }, () => {
  // MEASURED THROUGH THE REAL FUNCTIONS rather than asserted in a comment. If
  // either of these is ever fixed the assertion fails and the mcq-only decision
  // can be revisited, which is a2.09's shape and the reason it is written this
  // way round.
  strictEqual(fold(DU_WITH_CIRCUMFLEX), fold(DU_WITHOUT_CIRCUMFLEX));
  strictEqual(normalizeFr(DU_WITH_CIRCUMFLEX), normalizeFr(DU_WITHOUT_CIRCUMFLEX));
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz')!);
  for (const q of qs) {
    if (q.format !== 'typeIn' && q.format !== 'errorSpot' && q.format !== 'speak') continue;
    for (const a of [q.answer ?? '', ...(q.accept ?? [])]) {
      ok(!hasPhrase(a, DU_WITH_CIRCUMFLEX), `a ${q.format} question asks for dû and fold() would accept du: ${q.q}`);
    }
  }
  // AND THE DICTÉE CANNOT EITHER, on the row that carries it.
  const du = myRows().find((r) => hasPhrase(r.fr, DU_WITH_CIRCUMFLEX) && (r.drills ?? []).includes('dictation'));
  ok(du, 'the dû row is not a dictée target');
  strictEqual(normalizeFr(du!.fr), normalizeFr(du!.fr.replace(DU_WITH_CIRCUMFLEX, DU_WITHOUT_CIRCUMFLEX)));
  // The mission exists and it is an mcq-only one.
  const roof = section('s18-roof');
  ok(roof, 'the circumflex has no mission');
  ok(hasPhrase(strings(roof).join('\n'), DU_WITH_CIRCUMFLEX));
});

/* ══════════════════════════════════════════════════════════════════════════
 *  eu
 * ═══════════════════════════════════════════════════════════════════════ */

test('eu has its own teaching moment, asserted by section', { skip: noLesson }, () => {
  const eu = section('s17-eu');
  ok(eu, 'eu has no section of its own and the brief asks for one by name');
  strictEqual((eu as { type?: string }).type, 'listening');
  const text = strings(eu).join('\n');
  ok(hasPhrase(text, 'eu'));
  // It is in an act, so it is a mission rather than an orphan.
  ok((L!.acts ?? []).some((a) => a.sections.includes('s17-eu')));
  // AND IT IS THE ONE PLACE THE EAR IS ASKED ANYTHING. The single ear question
  // in the exam refs it.
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz')!);
  const ear = qs.filter((q) => q.format === 'listenChoose');
  strictEqual(ear.length, 1);
  strictEqual(ear[0]!.ref, 's17-eu');
  ok(ear[0]!.say, 'the ear question has no say and the card would speak its own answer');
});

test('no ear question offers two options that are one sound apart', { skip: noLesson }, () => {
  // dû against du, and every masculine/feminine pair in the set. a2.10's and
  // a2.11's shape: it fires only when two options differ ONLY by a member of one
  // pair, so « J'ai dû partir. » against « J'ai bu du thé. » stays legal.
  const ONE_SOUND: readonly [string, string][] = [
    ['dû', 'du'], ['pris', 'prise'], ['mis', 'mise'], ['vu', 'vue'],
    ['dit', 'dite'], ['su', 'sue'], ['eu', 'eue'], ['né', 'née'],
    ['venu', 'venue'], ['mort', 'morte'],
  ];
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz')!);
  for (const q of qs) {
    if ((q.format ?? 'mcq') !== 'listenChoose') continue;
    const opts = q.opts ?? [];
    for (let i = 0; i < opts.length; i += 1) {
      for (let j = 0; j < opts.length; j += 1) {
        if (i === j) continue;
        for (const [x, y] of ONE_SOUND) {
          ok(opts[i]!.replace(x, y) !== opts[j], `an ear question offers « ${opts[i]} » against « ${opts[j]} », which differ only by ${x}/${y}`);
        }
      }
    }
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE BOUNDARY WITH a2.21
 * ═══════════════════════════════════════════════════════════════════════ */

const ETRE_AUX = '(?:je\\s+suis|tu\\s+es|il\\s+est|elle\\s+est|on\\s+est|nous\\s+sommes|vous\\s+êtes|ils\\s+sont|elles\\s+sont)';
const ANY_PAST = [...ALL_FORMS, 'allé', 'parti', 'sorti', 'resté', 'arrivé', 'tombé', 'monté', 'entré', 'rentré', 'devenu', 'revenu', 'descendu']
  .flatMap((p) => [`${p}es`, `${p}s`, `${p}e`, p]).join('|');
const ETRE_AUXILIARY = new RegExp(
  `(?<![\\p{L}\\p{N}-])${ETRE_AUX}\\s+(?:pas\\s+|bien\\s+|déjà\\s+)?(?:${ANY_PAST})(?![\\p{L}\\p{N}'’-])`,
  'iu',
);
/** An INSTRUCTION TO CHOOSE, which is a2.21's whole canDo. Not a statement that
 *  a different word exists, which this lesson has to be able to make. */
const AUXILIARY_CHOICE =
  /\b(?:which|choose|choosing|pick|picking|decide|deciding|select)\b[^.?!]{0,80}\b(?:avoir|être|auxiliary|first word|helper verb)\b|\b(?:verbs?\s+of\s+motion|house\s+of\s+être|DR\s*MRS\s*VANDERTRAMP)\b/i;
const fires = (re: RegExp, s: string) => new RegExp(re.source, re.flags.replace('g', '')).test(s);

test('the shapes fire on the errors and not on this lesson\'s own English', { skip: noLesson }, () => {
  // GUARD THE THING, NOT THE LETTERS. a2.17 §4: a shape built out of French
  // morphology reads the English half of a learner surface as French.
  for (const s of ['Il est venu hier.', 'Elle est partie hier.', 'Je suis allé à Paris.']) {
    ok(fires(ETRE_AUXILIARY, s), `ETRE_AUXILIARY does not fire on ${JSON.stringify(s)}`);
  }
  for (const s of ['Il est midi.', 'Elle est ici aussi.', "J'ai pris le bus."]) {
    ok(!fires(ETRE_AUXILIARY, s), `ETRE_AUXILIARY fires on ${JSON.stringify(s)}`);
  }
  for (const s of ['Choose avoir or être depending on the verb.', 'Verbs of motion take être.']) {
    ok(fires(AUXILIARY_CHOICE, s), `AUXILIARY_CHOICE does not fire on ${JSON.stringify(s)}`);
  }
  for (const s of ['Three of them do not use avoir.', 'Which group is it in?', REFRAME]) {
    ok(!fires(AUXILIARY_CHOICE, s), `AUXILIARY_CHOICE fires on ${JSON.stringify(s)}`);
  }
});

test('no auxiliary choice is taught, and être is confined to the sections that teach the three forms', { skip: noLesson }, () => {
  // THE BRIEF CALLS THIS BOUNDARY GENUINELY AWKWARD and asks for it to be named
  // in one line rather than pretended away. This lesson teaches the FORM of
  // venu, né and mort; a2.21 owns which verbs take être and what happens to the
  // form afterwards.
  for (const s of display(L!.sections).concat(display(L!.sheets ?? []), display(L!.terms ?? {}), [L!.intro ?? ''])) {
    ok(!fires(AUXILIARY_CHOICE, s), `a learner surface teaches which first word a verb takes: ${JSON.stringify(s)}`);
  }
  for (const sec of L!.sections) {
    const sid = (sec as { id?: string }).id ?? '';
    const hit = strings(sec).find((s) => fires(ETRE_AUXILIARY, s));
    if (!hit) continue;
    ok(ETRE_SECTIONS.has(sid), `section ${sid} puts être in front of a past form: ${JSON.stringify(hit)}`);
    ok(!PRODUCTION_SECTIONS.has(sid), `section ${sid} is a production surface and it puts être in front of a past form`);
  }
  // AND THE THREE ARE FLAGGED, on a screen that names a2.21.
  const firstWord = section('s14-firstword');
  ok(firstWord, 's14-firstword does not exist');
  const text = strings(firstWord).join('\n');
  for (const f of ETRE_FORMS) ok(hasPhrase(text, f), `${f} is not on the screen that hands the choice to ${ETRE_UNIT}`);
  ok(namesUnitLabel(text, ETRE_UNIT), `the screen that defers the choice does not name ${ETRE_UNIT}`);
});

test('no production surface names an être row', { skip: noLesson }, () => {
  // The dictée, the speak list and the exam are where a learner produces, and
  // none of them may ask for a form whose first word this lesson does not teach.
  const dictation = section('s22-dictation') as { itemIds?: string[] } | undefined;
  const speak = section('s23-speak') as { itemIds?: string[] } | undefined;
  const etreRows = myRows().filter((r) => fires(ETRE_AUXILIARY, r.fr)).map((r) => r.id);
  strictEqual(etreRows.length, 2, 'this build authors two être rows: venu and né');
  for (const id of etreRows) {
    ok(!(dictation?.itemIds ?? []).includes(id), `${id} is an être row and it is a dictée target`);
    ok(!(speak?.itemIds ?? []).includes(id), `${id} is an être row and it is a speak target`);
  }
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz')!);
  for (const q of qs) {
    for (const s of strings(q)) ok(!fires(ETRE_AUXILIARY, s), `a quiz question puts être in front of a past form: ${JSON.stringify(s)}`);
  }
});

test('no participle agreement appears in any authored sentence', { skip: noLesson }, () => {
  // a2.05 stated its side plainly and this lesson holds it; a2.21 says the
  // opposite for a short list and the contrast only works against a clean
  // background. The three être rows are masculine singular deliberately.
  const AGREED = new RegExp(
    `(?<![\\p{L}\\p{N}-])(?:j['’]ai|tu\\s+as|il\\s+a|elle\\s+a|on\\s+a|nous\\s+avons|vous\\s+avez|ils\\s+ont|elles\\s+ont|il\\s+est|elle\\s+est|ils\\s+sont|elles\\s+sont|je\\s+suis)\\s+(?:${ALL_FORMS.flatMap((p) => [`${p}es`, `${p}s`, `${p}e`]).join('|')})(?![\\p{L}\\p{N}'’-])`,
    'iu',
  );
  ok(fires(AGREED, "J'ai prise le bus."), 'the agreement shape does not fire on its own must-fire');
  ok(fires(AGREED, 'Elle est venue hier.'), 'the agreement shape does not fire on an être agreement');
  ok(!fires(AGREED, "J'ai pris le bus."), 'the agreement shape fires on a correct sentence');
  ok(!fires(AGREED, 'Il est venu hier.'), 'the agreement shape fires on the masculine singular');
  for (const r of myRows()) ok(!fires(AGREED, r.fr), `${r.id} agrees a past form: « ${r.fr} »`);
  for (const s of display(L!.sections).concat(display(L!.sheets ?? []), display(L!.terms ?? {}))) {
    ok(!fires(AGREED, s), `a learner surface agrees a past form: ${JSON.stringify(s)}`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE TRAPS
 * ═══════════════════════════════════════════════════════════════════════ */

test('every look-derivable trap is shown AS A PAIR, on one card', { skip: noLesson }, () => {
  // THE BRIEF ASKS FOR THE PAIRING RATHER THAN FOR PRESENCE: « pris » next to a
  // struck-through « prendu » is more memorable than « pris » alone, and the two
  // being merely in the same section is not the same claim.
  for (const [wrong, right] of DERIVABLE) {
    const objs: unknown[] = [];
    const walk = (v: unknown) => {
      if (Array.isArray(v)) for (const x of v) walk(x);
      else if (v && typeof v === 'object') { objs.push(v); for (const x of Object.values(v)) walk(x); }
    };
    for (const sid of ['s05-machine', 's15-derivable']) walk(section(sid));
    const paired = objs.some((o) => {
      const t = strings(o).join('\n');
      return hasPhrase(t, wrong) && hasPhrase(t, right);
    });
    ok(paired, `« ${wrong} » and « ${right} » never appear on ONE card`);
  }
});

test('the forms the rule invents appear only where the error is the content', { skip: noLesson }, () => {
  const INVENTED = DERIVABLE.map(([w]) => w).concat(['offri', 'couvri', 'souffri', 'savu', 'pouvu', 'devu', 'liru', 'boiru']);
  // AND THEY APPEAR AT ALL. A trap nobody sees is not a trap.
  const text = learnerText();
  for (const [w] of DERIVABLE) ok(hasPhrase(text, w), `« ${w} » is a trap this lesson claims to show and it appears nowhere`);
  for (const sec of L!.sections) {
    const sid = (sec as { id?: string }).id ?? '';
    if (WRONG_FORM_SECTIONS.has(sid)) continue;
    for (const s of display(sec)) {
      for (const w of INVENTED) ok(!hasPhrase(s, w), `section ${sid} shows the invented form « ${w} »: ${JSON.stringify(s)}`);
    }
  }
  // NOT ONE OF THEM IS A CORPUS ROW. A row holding one would be served by the
  // flashcard hub as French.
  for (const r of myRows()) {
    for (const w of INVENTED) ok(!hasPhrase(r.fr, w), `${r.id} contains the invented form « ${w} »`);
  }
  // AND A TERM MAY ONLY HOLD ONE IF IT SAYS SO IN THE SAME STRING. A chip is
  // surfaced on every section that declares it.
  const NOT_A_WORD = /(?:is not a word|is not one either|does not exist|no such word)/i;
  for (const [key, t] of Object.entries(L!.terms ?? {})) {
    for (const s of display(t)) {
      for (const w of INVENTED) {
        if (hasPhrase(s, w)) ok(NOT_A_WORD.test(s), `term "${key}" prints « ${w} » without saying it is not a word`);
      }
    }
  }
});

test('the scene fails on a non-word, which is what makes it this lesson\'s scene', { skip: noLesson }, () => {
  // Doctrine §B.2, and the difference from a2.05: there the learner produced a
  // correct sentence in the wrong tense and nothing sounded wrong. Here the rule
  // hands him a word that does not exist and the sentence stops.
  const scene = section('s01-scene');
  ok(scene, 'there is no scene');
  // FOUND BY MUTATION 16: walking every string in the scene passes on a scene
  // that has been repaired, because the English gloss « I took the bus, except
  // that prendu is not a word » still holds the token. THE CHECK IS ON THE
  // FRENCH THE SCENE SPEAKS, which is what the learner hears go wrong.
  const french = ((scene as { beats?: Record<string, unknown>[] }).beats ?? []).flatMap((b) => [
    typeof b.fr === 'string' ? b.fr : '',
    ...((b.options ?? []) as Record<string, string>[]).map((x) => x.fr ?? ''),
    ((b.wrong ?? {}) as Record<string, string>).fr ?? '',
    ((b.right ?? {}) as Record<string, string>).fr ?? '',
  ]).filter(Boolean);
  ok(DERIVABLE.some(([w]) => french.some((s) => hasPhrase(s, w))), 'no FRENCH line in the scene holds an invented form, and a gloss mentioning one is not the same thing');
  const beats = (scene as { beats?: { kind: string; coach?: string }[] }).beats ?? [];
  const brk = beats.find((b) => b.kind === 'break');
  ok(brk, 'the scene has no break card');
  ok(!brk!.coach, 'the break card carries a coach line and the scene closing renders on the same screen');
});

test('the two trapDrills are stepped, gated and audible', { skip: noLesson }, () => {
  // lesson-contract.test.ts enforces the walk seed-wide; this adds the two
  // things it does not check. a2.18 §3: the cards step's LABEL counts its own
  // array. And the audio step plays each card's own `fr`, so the recording has
  // to contain those lines.
  const WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];
  const traps = L!.sections.filter((s) => s.type === 'trapDrill') as unknown as Record<string, unknown>[];
  strictEqual(traps.length, 2);
  deepStrictEqual(traps.map((t) => String(t.id)), ['s16-which', 's18-roof']);
  for (const t of traps) {
    const steps = (t.steps ?? []) as { kind: string; label?: string; gate?: boolean }[];
    deepStrictEqual(steps.map((s) => s.kind), ['rule', 'cards', 'audio', 'drill']);
    strictEqual(t.swipe, true, `${String(t.id)} has no swipe`);
    ok(!t.size, `${String(t.id)} carries a size and size comes OFF a stepped trapDrill`);
    ok(steps.find((s) => s.kind === 'drill')?.gate, `${String(t.id)}'s drill step is not gated`);
    const cards = (t.cards ?? []) as Record<string, string>[];
    const label = String(steps.find((s) => s.kind === 'cards')?.label ?? '').toLowerCase();
    ok(label.includes(WORDS[cards.length]!), `${String(t.id)}'s cards step says ${JSON.stringify(label)} over ${cards.length} cards`);
    const recId = (t.audio as { recordingId?: string }).recordingId;
    const rec = (L!.audio?.recorded ?? []).find((r) => r.id === recId);
    ok(rec, `${String(t.id)} names a recording that is not briefed`);
    for (const c of cards) {
      ok(c.fr, `${String(t.id)} has a card with no fr`);
      ok((rec!.clipIds ?? []).includes(c.fr), `${String(t.id)}'s audio step plays « ${c.fr} » and ${recId} does not contain it`);
    }
    // wrongThenRight ONLY where the take really is one. The ledger's sweep found
    // ten traps titling it truthfully and two that could not.
    const wtr = (t.audio as { wrongThenRight?: boolean }).wrongThenRight === true;
    const hasWrong = cards.some((c) => DERIVABLE.some(([w]) => hasPhrase(c.fr, w)));
    strictEqual(wtr, hasWrong, `${String(t.id)} sets wrongThenRight=${wtr} and its cards ${hasWrong ? 'do' : 'do not'} hold an invented form`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE BACK-REFERENCES
 * ═══════════════════════════════════════════════════════════════════════ */

test('a2.15\'s reframe is quoted verbatim and its unit is named', { skip: noLesson }, () => {
  // THE BRIEF ASKS FOR a2.15 BY ITS LESSON LABEL and for its framing to be borrowed
  // deliberately, so the learner recognises the strategy rather than meeting it
  // fresh. a2.16 §3: a back-reference is a LITERAL and a paraphrase fails.
  const text = learnerText();
  ok(text.includes(A215_REFRAME), `${FAMILY_UNIT}'s reframe is not quoted verbatim`);
  ok(namesUnitLabel(text, FAMILY_UNIT), `${FAMILY_UNIT} is never named by its lesson label`);
  // And the section where the compounds arrive is the one that carries it.
  const front = section('s08-front');
  ok(front, 's08-front does not exist');
  const frontText = strings(front).join('\n');
  ok(frontText.includes(A215_REFRAME));
  for (const m of ['appris', 'compris', 'remis', 'promis']) ok(hasPhrase(frontText, m));
});

test('a2.05 is credited, recapped once, and never re-taught', { skip: noLesson }, () => {
  const text = learnerText();
  ok(text.includes(A205_REFRAME), `${PASSE_UNIT}'s reframe is not quoted verbatim`);
  ok(namesUnitLabel(text, PASSE_UNIT), `${PASSE_UNIT} is never named by its lesson label`);
  const recap = (L!.acts ?? []).find((a) => a.id === 'act2');
  strictEqual(recap?.sections.length, 2, 'the recap of a2.05 is not two sections');
});

test('the batch-1 units are named where their verbs come back', { skip: noLesson }, () => {
  // The connection the brief calls the one that makes this lesson worth
  // building: the -u group holds the participle of every irregular verb the
  // learner already owns.
  const batch1 = section('s11-batch1');
  ok(batch1, 's11-batch1 does not exist');
  const text = strings(batch1).join('\n');
  for (const u of [ALLER_UNIT, FAIRE_UNIT, MODAUX_UNIT, SAVOIR_UNIT, FAMILY_UNIT]) {
    ok(namesUnitLabel(text, u), `${u} is not named on the screen that hands its verbs back`);
  }
});

test('the intro names no unit id, and the reframe is carried', { skip: noLesson }, () => {
  // a2.05 measured that it was the only one of 58 lessons whose intro named a
  // unit id, and that `intro` is drawn on the lesson COVER, before any card has
  // credited anything.
  ok(!/(?:sons|a1|a2|b1|b2|c1)\.\d{2}/i.test(L!.intro ?? ''), `the intro names a unit id: ${JSON.stringify(L!.intro)}`);
  strictEqual(L!.reframe, REFRAME);
  const n = countPhrase(learnerText(), REFRAME);
  ok(n >= 3, `the reframe is carried ${n} times and the density validator requires three`);
});

test('the roundup and the sheet hand forward to a2.21, a2.22 and a2.31', { skip: noLesson }, () => {
  const text = learnerText();
  for (const u of [ETRE_UNIT, REFLEXIVE_UNIT, SCHOOL_UNIT]) ok(namesUnitLabel(text, u), `${u} is never named`);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE RESPELLINGS
 * ═══════════════════════════════════════════════════════════════════════ */

test('every respelling is clean under the shared checker', { skip: noLesson }, () => {
  // Imported from density.logic.ts rather than reimplemented. Invariants §3.
  for (const r of myRows()) {
    ok(r.respell, `${r.id} has no respelling and a card without one cannot be said`);
    ok(!hasPlainNasalFor(r.fr, r.respell!), `${r.id} is flagged: « ${r.fr} » [${r.respell}]`);
    ok(!r.respell!.includes('‿'), `${r.id} carries U+203F, which draws as a low underscore on a Pixel 6`);
  }
});

test('the two nasals the checker cannot see are asserted BY NAME', { skip: noLesson }, () => {
  // Corrections §6 and a2.17 §14.1: a nasal is invisible to hasPlainNasalFor
  // when a LETTER follows the n or m inside the token. a2.05 measured 39 seen
  // and 0 missed; this lesson's frame needs two that the checker cannot see, so
  // the blind spot is exercised here for the first time since a2.11.
  //
  // BOTH DIRECTIONS: the stored value is clean, and breaking the superscript
  // produces a value the checker STILL calls clean. The day it gains the ability
  // to see them this goes red rather than the list going quietly dead.
  const BLIND: readonly [string, string, string][] = [
    ["J'ai construit un mur.", 'ZHAY kohⁿs-TRWEE uhⁿ MÜR', 'kohⁿs'],
    ["J'ai su la réponse.", 'ZHAY SÜ la ray-POHⁿSS', 'POHⁿSS'],
  ];
  for (const [frStr, respell, token] of BLIND) {
    const row = myRows().find((r) => r.fr === frStr);
    ok(row, `no row holds « ${frStr} »`);
    strictEqual(row!.respell, respell);
    ok(respell.includes(token));
    const broken = respell.replace('ⁿ', 'n');
    ok(!hasPlainNasalFor(frStr, broken), `« ${frStr} » is recorded BLIND and the checker CAN now see ${JSON.stringify(broken)}`);
  }
  // And the count, in both directions, over every superscript this build writes.
  let seen = 0; let missed = 0;
  for (const r of myRows()) {
    const v = r.respell ?? '';
    for (let i = 0; i < v.length; i += 1) {
      if (v[i] !== 'ⁿ') continue;
      if (hasPlainNasalFor(r.fr, `${v.slice(0, i)}n${v.slice(i + 1)}`)) seen += 1; else missed += 1;
    }
  }
  strictEqual(seen, 12);
  strictEqual(missed, 2);
});

test('the false-positive path is not met by this lesson, and the control still fires', { skip: noLesson }, () => {
  // Corrections §6 asks for the path to be looked for and its absence reported.
  // Six candidates from this lesson's own strings do not fire, and a control
  // that MUST fire is carried so the six negatives keep meaning something.
  const CANDIDATES: readonly [string, string][] = [
    ["J'ai connu son frère.", 'ZHAY koh-NÜ sohⁿ FREHR'],
    ['le ménage', 'luh may-NAZH'],
    ['la porte', 'la PORT'],
    ['une lettre', 'ün LEHTR'],
    ['le journal', 'luh zhoor-NAL'],
    ['la table', 'la TABL'],
  ];
  for (const [f, r] of CANDIDATES) ok(!hasPlainNasalFor(f, r), `the false-positive path fires on « ${f} » [${r}]`);
  ok(hasPlainNasalFor('le problème', 'luh proh-BLEHM'), 'the false-positive CONTROL no longer fires, so the six negatives prove nothing');
});

test('the construire repair landed and the five already-a-word rows resolve', { skip: noLesson }, () => {
  const construire = byIdItem.get('fr.sons.verbes-essentiels.118');
  ok(construire, 'construire is not in the seed and this lesson displays it');
  strictEqual(construire!.respell, 'kohⁿ-STRWEER');
  ok(!hasPlainNasalFor(construire!.fr, construire!.respell!));
  ok(hasPlainNasalFor(construire!.fr, 'kohn-STRWEER'), 'the value this build repaired is no longer flagged, so the repair had no cause');
  for (const [form, id] of ALSO_A_WORD) {
    const row = byIdItem.get(id);
    ok(row, `${id} is not in the seed and the already-a-word card names it`);
    strictEqual(row!.fr, form);
    ok(row!.respell, `${id} has no respelling`);
    ok(!(row as { gender?: string }).gender, `${id} carries a gender and a CARRY joins a1.03's ending population`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  THE EXAM AND THE DICTÉE
 * ═══════════════════════════════════════════════════════════════════════ */

test('the exam is production-first, every question has a why and a ref, and free text accepts itself', { skip: noLesson }, () => {
  const quiz = L!.sections.find((s) => s.type === 'quiz');
  ok(quiz, 'there is no quiz');
  strictEqual(L!.sections.filter((s) => s.type === 'quiz').length, 1, 'a second quiz section is silently never rendered');
  const qs = quizQuestions(quiz!);
  strictEqual(qs.length, 36);
  const fmt = (f?: string) => f ?? 'mcq';
  const counts: Record<string, number> = {};
  for (const q of qs) counts[fmt(q.format)] = (counts[fmt(q.format)] ?? 0) + 1;
  ok((counts.mcq ?? 0) <= qs.length / 2, `${counts.mcq} of ${qs.length} are mcq`);
  const typed = (counts.typeIn ?? 0) + (counts.errorSpot ?? 0);
  ok(typed > qs.length - typed, `${typed} typed against ${qs.length - typed} picked, and the canDo says PRODUCE`);
  const sectionIds = new Set(L!.sections.map((s) => (s as { id?: string }).id));
  for (const q of qs) {
    ok(q.why, `no why: ${q.q}`);
    ok(q.ref && sectionIds.has(q.ref), `ref ${q.ref} names no section: ${q.q}`);
    if (q.format === 'typeIn' || q.format === 'errorSpot') {
      ok(matchesAccept(q.answer ?? '', q.accept ?? []), `the answer shown is not accepted by its own accept list: ${q.q}`);
    }
    if (q.format === 'errorSpot') ok(q.prompt, `an errorSpot has no prompt: ${q.q}`);
  }
  // Correct answers must not cluster.
  const closed = qs.filter((q) => fmt(q.format) === 'mcq' || fmt(q.format) === 'listenChoose');
  const slots: Record<number, number> = {};
  for (const q of closed) slots[Number(q.correct)] = (slots[Number(q.correct)] ?? 0) + 1;
  for (const [slot, n] of Object.entries(slots)) {
    ok(n / closed.length <= 0.4, `option slot ${slot} holds ${n} of ${closed.length} closed answers`);
  }
});

test('every round leads a different trigger, so all six drills are reachable', { skip: noLesson }, () => {
  // drillForRound fires the FIRST resolving target and then stops. a1.05 shipped
  // two dead drills and a1.07's first draft a third.
  const quiz = L!.sections.find((s) => s.type === 'quiz') as unknown as { rounds: { id: string; targets: string[] }[] };
  const leads = quiz.rounds.map((r) => r.targets[0]);
  strictEqual(new Set(leads).size, leads.length);
  const triggers = (L!.errorTriggers ?? []).map((t) => t.id);
  strictEqual(triggers.length, 6);
  for (const t of triggers) ok(leads.includes(t), `trigger ${t} leads no round`);
  const drillIds = new Set((L!.drills ?? []).map((d) => d.id));
  for (const t of L!.errorTriggers ?? []) {
    ok(drillIds.has(t.drill), `${t.id} names a drill that does not exist`);
    ok(drillIds.has(t.retest), `${t.id} names a retest that does not exist`);
  }
});

test('the exam asks for forms this lesson never printed', { skip: noLesson }, () => {
  // Doctrine §B.1: a mission that makes the learner answer for a situation the
  // lesson never showed them has taught the system rather than the list. This is
  // the assertion that the sorting generalises, and it is the whole claim.
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz')!);
  const printed = new Set(ALL_FORMS);
  const cold = qs.filter((q) => q.format === 'typeIn').map((q) => String(q.answer ?? '')).filter((a) => a && !printed.has(a));
  ok(cold.length >= 3, `only ${cold.length} typed questions ask for a form the lesson never printed`);
  ok(cold.includes('refait'), 'refait is one of the two a2.05 hands over that this lesson does not teach, and the exam should ask for it cold');
});

test('every dictée target is in LETTERS mode through the real function', { skip: noLesson }, () => {
  // Corrections §4: above sixteen letters dicteeMode switches to WORD tiles and
  // hands every real word over pre-spelled, which for a lesson about the
  // SPELLING of a form would hand over the answer.
  const dictation = section('s22-dictation') as { itemIds?: string[] } | undefined;
  ok(dictation, 'there is no dictée');
  const ids = dictation!.itemIds ?? [];
  strictEqual(ids.length, 11);
  for (const id of ids) {
    const row = byIdItem.get(id);
    ok(row, `${id} is a dictée target and is not in the seed`);
    strictEqual(dicteeMode(row!.fr), 'letters', `« ${row!.fr} » is in WORD mode`);
    ok(letterCount(row!.fr) <= 16, `« ${row!.fr} » is ${letterCount(row!.fr)} letters`);
    ok((row!.drills ?? []).includes('dictation'), `${id} is a dictée target with no dictation drill`);
  }
  // AND IT COVERS EVERY GROUP, so the dictée is the lesson rather than a sample
  // of one family.
  const covered = new Set<string>();
  for (const id of ids) {
    const row = byIdItem.get(id)!;
    for (const g of GROUPS) if (g.members.some((m) => hasPhrase(row.fr, m))) covered.add(g.group);
  }
  strictEqual(covered.size, 5, `the dictée covers ${covered.size} groups of 5`);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  REACHABILITY, LAYOUT AND SEED PARITY
 * ═══════════════════════════════════════════════════════════════════════ */

test('every declared item resolves, is released exactly once, and nothing is released early', { skip: noLesson }, () => {
  const declared = L!.itemIds ?? [];
  strictEqual(new Set(declared).size, declared.length, 'itemIds holds a duplicate');
  for (const id of declared) ok(byIdItem.has(id), `${id} is declared and resolves to nothing`);
  const tranches = L!.deckTranche ?? [];
  strictEqual(tranches.length, 6, 'one deck tranche per act');
  const released = tranches.flat();
  strictEqual(new Set(released).size, released.length, 'a tranche releases the same item twice');
  for (const id of released) ok(declared.includes(id), `${id} is released and is not declared`);
  deepStrictEqual(declared.filter((id) => !released.includes(id)), []);
  for (const id of released) {
    ok((byIdItem.get(id)!.drills ?? []).includes('flashcard'), `${id} is released to the hub with no flashcard drill`);
  }
  const speak = (section('s23-speak') as { itemIds?: string[] })?.itemIds ?? [];
  for (const id of speak) ok((byIdItem.get(id)!.drills ?? []).includes('voiceflash'), `${id} is a speak target the mic cannot score`);
});

test('the layout rules that have each cost a build', { skip: noLesson }, () => {
  for (const s of L!.sections as unknown as Record<string, unknown>[]) {
    const chips = (s.terms ?? []) as string[];
    ok(chips.length <= 3, `${String(s.id)} declares ${chips.length} term chips and the renderer shows three`);
    for (const k of chips) ok((L!.terms ?? {})[k], `${String(s.id)} names an unknown term ${k}`);
    const width = chips.reduce((n, k) => n + ((L!.terms ?? {})[k]?.term.length ?? 0), 0) + Math.max(0, chips.length - 1) * 2;
    ok(width <= 37, `${String(s.id)}'s chip row is ${width} characters and a2.03 measured 37`);
    ok(String(s.title ?? '').length <= 27, `${String(s.id)}'s title is ${String(s.title).length} characters`);
    if (s.type === 'commonErrors') strictEqual(s.swipe, true, `${String(s.id)} is a commonErrors without swipe and it draws a blank screen`);
  }
  strictEqual(Object.keys(L!.terms ?? {}).length, 9);
});

test('every role-play turn has a userEn and two alternatives', { skip: noLesson }, () => {
  // scenario.logic.test.ts is a SEED-WIDE test requiring both, and a2.03 shipped
  // three turns with one alt each with every gate green.
  const scenario = section('s21-scenario') as { turns?: { userEn?: string; alts?: unknown[] }[] } | undefined;
  ok(scenario, 'there is no role play');
  ok((scenario!.turns ?? []).length >= 5);
  for (const [i, t] of (scenario!.turns ?? []).entries()) {
    ok(t.userEn, `turn ${i} has no userEn`);
    ok((t.alts ?? []).length >= 2, `turn ${i} has fewer than two alts`);
  }
});

test('the audio briefs name the two takes that must be single, and hold no banned copy', { skip: noLesson }, () => {
  // Invariants §10: anything the learner must hear as a CONTRAST is one take
  // with one voice. a2.05 §3: `audio.recorded[].desc` is authored prose that
  // ships in the lesson body and every house-copy walk in this band missed it.
  const recorded = L!.audio?.recorded ?? [];
  const ids = recorded.map((r) => r.id);
  for (const want of ['rec-a2-20-eu', 'rec-a2-20-roof']) {
    ok(ids.includes(want), `${want} is not briefed and the brief names it as a single take`);
    const desc = recorded.find((r) => r.id === want)!.desc ?? '';
    ok(/ONE TAKE/.test(desc), `${want} does not say ONE TAKE and a contrast recorded apart teaches the performance`);
  }
  for (const r of recorded) {
    const desc = r.desc ?? '';
    ok(!desc.includes('—'), `${r.id} holds an em dash`);
    ok(!/\bhonest(ly|y)?\b/i.test(desc), `${r.id} holds the banned word "honest"`);
    ok(!desc.includes('‿'), `${r.id} holds U+203F`);
  }
});

test('no duplicate fr inside the theme, computed the way flashhub-coverage does', { skip: noLesson }, () => {
  // NOT scoped to this build's rows: two rows sharing an fr in one theme is one
  // card served twice whoever authored them.
  const strip = (s: string) => s.replace(/^(le |la |les |l'|l’|un |une |des |du |de la )/i, '').toLowerCase().trim();
  const byFr = new Map<string, string[]>();
  for (const i of seed.items.filter((x) => x.theme === THEME)) {
    byFr.set(strip(i.fr), [...(byFr.get(strip(i.fr)) ?? []), i.id]);
  }
  deepStrictEqual([...byFr.entries()].filter(([, ids]) => ids.length > 1).map(([k]) => k), []);
});

test('a1.03\'s ending population is untouched, and no row this build owns is in it', { skip: noLesson }, () => {
  // a2.04 §0: the population is measured off THE SEED, so a CARRY puts a row
  // there even when Postgres already had it. Run through the REAL function.
  const pop = endingPopulation(seed.items as never);
  // MEASURED AS A DIFFERENTIAL RATHER THAN AS A CONSTANT, 2026-08-15. This read
  // 1890 until a2.07 « Au restaurant » published one gendered single-word noun
  // (fr.a1.au-restaurant.010 « le pourboire »), which joined the population on
  // the next publish and turned this assertion red in a lesson that had changed
  // nothing — along with five others exactly like it. Invariants §6: a hardcoded
  // count fails on itself the first time content legitimately changes, and
  // editing the number is how a test comes to certify a bug. The claim here is
  // "THIS LESSON did not move it", so it is asked that way and is now immune to
  // anybody else's rows.
  strictEqual(
    endingPopulation(seed.items as never).length,
    endingPopulation(seed.items.filter((i) => !isMine(i.id)) as never).length,
    'a row this lesson owns is in a1.03\'s ending population',
  );
  const mine = new Set(myRows().map((r) => r.id));
  deepStrictEqual(pop.filter((p) => mine.has((p as { id: string }).id)).map((p) => (p as { id: string }).id), []);
});

test('the lesson validates and the density validator is clean', { skip: noLesson }, () => {
  const issues = validateLesson(L!);
  strictEqual(issues.length, 0, formatIssues(issues));
  const d = validateDensity(L!);
  strictEqual(d.length, 0, formatDensity(d));
});

test('house copy: no em dash, no banned word, no U+203F on any learner surface', { skip: noLesson }, () => {
  const surfaces = [
    ...display(L!.sections), ...display(L!.sheets ?? []), ...display(L!.terms ?? {}),
    L!.intro ?? '', ...display(L!.overview ?? {}), ...display(L!.acts ?? []),
    ...display(L!.drills ?? []), ...strings(L!.audio ?? {}),
    ...myRows().map((r) => `${r.en} ${r.notes ?? ''}`),
  ];
  for (const s of surfaces) {
    ok(!s.includes('—'), `em dash: ${JSON.stringify(s)}`);
    ok(!/\bhonest(ly|y)?\b/i.test(s), `the banned word "honest": ${JSON.stringify(s)}`);
    ok(!s.includes('‿'), `U+203F: ${JSON.stringify(s)}`);
  }
});

test('no grammar jargon on a learner surface, and the plain phrase outnumbers it', { skip: noLesson }, () => {
  // a2.17 §8: the house prefers the plain phrase rather than banning the
  // technical one, so the RATIO is what is guarded. That is also what lets
  // `overview.titleEn` stay the unit's own English name, which content_units
  // requires it to match.
  const JARGON = ['participle', 'auxiliary', 'infinitive', 'paradigm', 'inflection', 'morphology', 'clitic', 'predicate', 'orthography', 'third person'];
  const { titleEn: _t, ...overviewRest } = (L!.overview ?? {}) as Record<string, unknown>;
  void _t;
  const surfaces = [
    ...display(L!.sections), ...display(L!.sheets ?? []), ...display(L!.terms ?? {}),
    L!.intro ?? '', ...display(overviewRest), ...display(L!.acts ?? []), ...display(L!.drills ?? []),
  ];
  for (const s of surfaces) {
    for (const j of JARGON) {
      ok(!hasPhrase(s, j), `grammar jargon "${j}": ${JSON.stringify(s)}`);
      ok(!hasPhrase(s, `${j}s`), `grammar jargon "${j}s": ${JSON.stringify(s)}`);
    }
  }
  ok(countPhrase(learnerText(), 'past form') >= 20, 'the plain phrase "past form" has been squeezed out');
});
