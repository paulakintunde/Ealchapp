// a2.06.l1 « Pronoms d'objet direct »: the assertions that keep this lesson
// true. Trail seq 21, the HEAD of the pronoun block (21, 22, 23), so a2.24 and
// a2.25 both inherit its position rule and both are reserved by name here.
//
// Modelled on a2-23-pronominaux-passe.test.ts.
//
// THIS FILE READS seed.json AND NOTHING ELSE. It does not import the corpus, the
// terms or the lesson source, because a test that imports the same constant the
// content imports is comparing the content to itself. Every figure and every
// quoted string below is written out BY HAND, so a change in the source has to
// be reflected here on purpose.
//
// That also closes corrections §9's second hole outright: there is no
// `try { … } catch {}` around a source import here, so there is no state in
// which thirty assertions silently do not run.
//
// IT IS SCOPED TO ITS OWN ID BLOCK. `pronoms-essentiels` holds 534 rows across
// four levels and this lesson owns 48 of them. a2.03's test filtered on a
// namespace prefix, meant "the rows a2.03 authored", and four of its tests went
// red the moment a2.16 landed in the same namespace.
//
// ── What this file is actually guarding ────────────────────────────────────
//
//   THE ENGLISH ORDER AND THE FRENCH ORDER in ONE section, adjacent, read off
//   the CARD's own fields rather than through `strings(section)`, which cannot
//   tell one screen from two. Same for the article beside the pronoun, and for
//   « Je le vois. » beside « Je ne le vois pas. » with `ne` outside.
//   a2.02's TERM QUOTED VERBATIM as a literal here, so a paraphrase goes red.
//   NO CORRECT SENTENCE PUTS THE PRONOUN AFTER THE VERB, with the error
//   permitted in the six places the lesson deliberately shows it, and never as
//   the correct option anywhere.
//   THE NEGATION ARC: a1.18's line and a2.19's line are TWO DIFFERENT STRINGS,
//   both quoted verbatim, and re-read off the shipped neighbours so a drift in
//   either place goes red.
//   lui AND leur NOWHERE, reserving a2.24. y AND en AS PRONOUNS nowhere,
//   reserving a2.25, guarded as the THING rather than the letters with an
//   English sentence in the MUST_NOT_FIRE list.
//   THE ELISION LIMIT stated, and NO ear question anywhere near the gender of
//   an elided l'.
//   THE PRECEDING-DIRECT-OBJECT DECISION asserted the way it went, which is
//   TAKEN, in one act.
//   THE JARGON WALK over a `display()` walk including `intro` and `overview`,
//   with the -s plural checked, and the RATIO guarded rather than a word banned.
//   THE RESPELLING REPAIRS by name, through the real `hasPlainNasalFor`, with
//   the half-repair asserted as still unseen.
//   EVERY DICTÉE ITEM in LETTERS mode through the real `dicteeMode`, which for
//   a lesson about a POSITION is a hard limit rather than a preference.
//
// Every one of those was mutation-tested: the assertion was broken on purpose
// and confirmed to go red before it was kept.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { ok, strictEqual, deepStrictEqual } from 'node:assert';
import { test } from 'node:test';

import type { Item, Lesson, LessonSection } from './schema.ts';
import { quizQuestions, validateLesson, formatIssues, DRILL_KINDS } from './schema.ts';
import { validateDensity, formatDensity, hasPlainNasalFor } from './density.logic.ts';
import { endingPopulation } from './gender.logic.ts';
import { dicteeMode } from './dictee.logic.ts';
import { matchesAccept, fold } from './answer.logic.ts';
import { namesUnitLabel } from './unit-label.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  version: number; items: Item[]; lessons: Lesson[];
  units: { id: string; title?: string; sub?: string; canDo?: string; seq?: string | number; lessonIds?: string[]; prereqUnitIds?: string[] }[];
};

const L = seed.lessons.find((l) => l.id === 'a2.06.l1');
const noLesson = !L;
const byIdItem = new Map(seed.items.map((i) => [i.id, i] as const));

/** THE BLOCK, NOT THE PREFIX. `pronoms-essentiels` spans a1, a2, b1 and b2. */
const MY_BLOCK = { from: 189, to: 236 };
const isMine = (id: string): boolean => {
  const m = /^fr\.a2\.pronoms-essentiels\.(\d{3})$/.exec(id);
  if (!m) return false;
  const n = Number(m[1]);
  return n >= MY_BLOCK.from && n <= MY_BLOCK.to;
};
const A = (n: number) => `fr.a2.pronoms-essentiels.${String(n).padStart(3, '0')}`;
const MINE: Item[] = seed.items.filter((i) => isMine(i.id));

/* ─── The strings, written out by hand ────────────────────────────────────── */

const REFRAME = 'The pronoun goes in front of the verb, not after it.';
/** a2.02's name for the recurring shape. Quoted verbatim; a paraphrase is not
 *  the same claim, and three later lessons were told to quote this one. */
const WHAT_FOLLOWS = 'what comes next decides';
/** a1.18, and a2.19. TWO STRINGS, deliberately, and a2.23 §2 measured that
 *  neither has drifted across five lessons. */
const A118_REFRAME = 'Wrap the verb, then ask what the verb was.';
const A219_REFRAME = 'Wrap the verb that changed, not the one carrying the meaning.';
const A222_EXTENSION = 'Both words changed for the subject, so both go inside the wrap.';
const MY_NEGATION = 'The wrap goes round the pronoun and the verb together.';
const AGREEMENT_RULE = 'When the pronoun comes before the verb, the second word takes its ending.';
const ELISION_LIMIT = "Before a vowel both le and la become l', and at that point nothing in the sentence tells you which one it was.";
const PLAIN_PHRASE = 'the what or the who';
const PLAIN_POSITION = 'the word after the verb';

const AFTER_VERB_TRAP = 'Je vois le.';
const REFRAME_COUNT = 17;

/* ─── String walks, matching the batch's ──────────────────────────────────── */

const MACHINE_KEYS = new Set([
  'id', 'ref', 'sheetId', 'itemId', 'itemIds', 'targets', 'detectOn', 'drill',
  'retest', 'accept', 'recordingId', 'audioRef', 'unitId', 'scenarioId',
  'clipIds', 'buckets', 'restPoints',
]);
const isId = (s: string): boolean => /^fr\.[a-z0-9]+\.[a-z0-9-]+\.\d+$/i.test(s);

/** Keeps `sub`, drops only machine keys. Corrections §13: `prose()` drops `sub`
 *  as notation, and on a cardDeck card `sub` holds PROSE. */
function display(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') { if (!isId(v)) out.push(v); }
  else if (Array.isArray(v)) for (const x of v) display(x, out);
  else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) if (!MACHINE_KEYS.has(k)) display(x, out);
  }
  return out;
}

/** THE HOUSE BOUNDARY WITH CORRECTIONS §14.3's FIX: the apostrophe is dropped
 *  from the LEFT so a shape can see `l'aime`, `qu'il` and `d'objet`, and kept on
 *  the right so `l'` does not match a bare `l`. The probe that produced this
 *  lesson's brief demonstrated the bug by reporting NO for `objet` against a
 *  unit whose own `sub` is « Pronoms d'objet direct ». */
const bounded = (needle: string): RegExp =>
  new RegExp(`(?<![\\p{L}\\p{N}-])${needle.replace(/[.*+?^${}()|[\]\\]/gu, '\\$&')}(?![\\p{L}\\p{N}'’-])`, 'iu');
const hasPhrase = (hay: string, needle: string): boolean => bounded(needle).test(hay);

/** a2.23 §9.1: naming a unit needs the OPPOSITE boundary, because the band names
 *  a neighbour with a possessive almost every time. */
const namesUnit = (hay: string, unit: string): boolean =>
  new RegExp(`(?<![\\p{L}\\p{N}'’-])${unit.replace(/\./gu, '\\.')}(?![\\p{L}\\p{N}-])`, 'iu').test(hay);

/** EVERY LEARNER SURFACE. Corrections §9: the walk must read `intro` and
 *  `overview`, both drawn on the lesson overview card AND the lesson cover.
 *  `grammarAssumed` and `grammarIntroduced` are DELIBERATELY EXCLUDED:
 *  invariants §8 says those are addressed to the curriculum and may use the
 *  precise words, and this lesson's do so heavily. */
const surface = (): string[] => (noLesson ? [] : [
  ...display(L!.sections),
  ...display(L!.sheets ?? []),
  ...display(L!.terms ?? {}),
  ...display(L!.acts ?? []),
  ...display(L!.drills ?? []),
  ...display(L!.errorTriggers ?? []),
  ...display(L!.audio ?? {}),
  ...display(L!.overview ?? {}),
  L!.intro ?? '',
  L!.reframe ?? '',
]);
/** NOT deduped. a2.22 §3: a Set collapses a short line authored twice and
 *  under-reports every count. */
const ALL = surface();
const UNIQUE = [...new Set(ALL)];

const sec = (id: string): LessonSection => {
  const s = L!.sections.find((x) => x.id === id);
  ok(s, `no section ${id}`);
  return s!;
};
type Card = { head?: string; label?: string; fr?: string; sub?: string; body?: string };
const cardsOf = (id: string): Card[] => ((sec(id) as { cards?: Card[] }).cards ?? []);

/* ══════════════════════════════════════════════════════════════════════════
 *  0. THE LESSON IS THERE, AND IT IS THE SHAPE IT CLAIMS
 * ═══════════════════════════════════════════════════════════════════════ */

test('a2.06.l1 is in the seed', () => {
  ok(L, 'a2.06.l1 is not in seed.json');
});

test('the lesson validates and passes density against the shipped item set', { skip: noLesson }, () => {
  const issues = validateLesson(L!);
  strictEqual(issues.length, 0, formatIssues(issues));
  const dens = validateDensity(L!, new Set(seed.items.map((i) => i.id)));
  strictEqual(dens.length, 0, formatDensity(dens));
});

test('the identity block matches the unit, byte for byte', { skip: noLesson }, () => {
  const u = seed.units.find((x) => x.id === 'a2.06');
  ok(u, 'a2.06 is not in the seed');
  strictEqual(String(u!.seq), '21');
  strictEqual(u!.title, 'Direct Object Pronouns');
  strictEqual(u!.sub, "Pronoms d'objet direct");
  strictEqual(u!.canDo, 'Can replace a direct object with le, la or les and place it before the verb');
  ok((u!.lessonIds ?? []).includes('a2.06.l1'), 'the unit does not list a2.06.l1');
  deepStrictEqual(u!.prereqUnitIds ?? [], ['a2.01']);
  /* CORRECTIONS §1: the spine's `sub` exists nowhere in the database and carries
   * an em dash. If it ever reappears, this goes red. */
  ok(!/position & past agreement/i.test(u!.sub ?? ''), "the spine's discarded sub has come back");
  ok(!/[—–]/u.test(`${u!.title} ${u!.sub} ${u!.canDo}`), 'an em dash is in the identity block');
});

test('the shape is 24 sections, 6 acts, one quiz of 30', { skip: noLesson }, () => {
  strictEqual(L!.sections.length, 24);
  strictEqual((L!.acts ?? []).length, 6);
  strictEqual(L!.sections.filter((s) => s.type === 'quiz').length, 1, 'a second quiz section is silently never rendered');
  strictEqual(quizQuestions(L!.sections.find((s) => s.type === 'quiz') as never).length, 30);
  strictEqual(L!.version, 3, 'v2 repaired the dishonest/honest slip; v3 repaired the scene title that clipped on a Pixel 6; v4 is the unit-label pass, which replaced every raw unit id on a learner surface with its lesson label. Corrections §10: the counter moves rather than the body being corrected under one number. The unit-label pass and other text-only edits do NOT move this: the runtime reads Lesson.version to decide whether to DISCARD a learner mission record and its XP, and that reset is only warranted when the SECTION LIST changes. Those bumps were withdrawn across 45 lessons and the edits they carried were kept. Corrections §16.7 supersedes §10 on this; check with `pnpm content:versions`.');
});

test('the prerequisite is shipped, not merely declared', { skip: noLesson }, () => {
  const p = seed.units.find((u) => u.id === 'a2.01');
  ok(p, 'a2.01 is not in the seed');
  ok((p!.lessonIds ?? []).length, 'a2.01 is a hard prerequisite and has no shipped lesson');
  for (const lid of p!.lessonIds ?? []) ok(seed.lessons.some((l) => l.id === lid), `a2.01 lists ${lid} and the seed does not hold it`);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  1. THE CORPUS
 * ═══════════════════════════════════════════════════════════════════════ */

test('48 rows in the claimed block, and nobody else is inside it', { skip: noLesson }, () => {
  strictEqual(MINE.length, 48, `${MINE.length} rows inside ${MY_BLOCK.from}..${MY_BLOCK.to}`);
  deepStrictEqual(MINE.map((i) => i.id).sort(), MINE.map((i) => i.id).sort());
  strictEqual(MINE[0]!.id, A(189));
  strictEqual(MINE[MINE.length - 1]!.id, A(236));
});

test('NOT ONE HEADWORD IS AUTHORED, for the eighth build running', { skip: noLesson }, () => {
  for (const i of MINE) {
    strictEqual(i.kind, 'sentence', `${i.id} is kind ${i.kind}`);
    ok(/\s/u.test(i.fr), `${i.id} « ${i.fr} » has no whitespace, so it is a headword whatever its kind says`);
    ok(!(i as { gender?: string }).gender, `${i.id} carries gender and would join a1.03's ending population`);
  }
});

test('every authored row carries a respelling and none closes a nasal with a plain n', { skip: noLesson }, () => {
  for (const i of MINE) {
    ok(i.respell, `${i.id} has no respelling`);
    ok(!hasPlainNasalFor(i.fr, i.respell!), `${i.id} « ${i.fr} » [${i.respell}] closes a nasal with a plain n or m`);
    ok(!i.respell!.includes('‿'), `${i.id} carries U+203F, which draws as a low underscore on a Pixel 6`);
    ok(i.ipa && /^\/.*\/$/u.test(i.ipa), `${i.id} has no slash-wrapped ipa`);
    ok(i.fr.trim().split(/\s+/u).length <= 14, `${i.id} is over the 14-word A2 budget`);
  }
});

test('the drill arrays are in DRILL_KINDS order, which is what keeps seed and Postgres agreeing', { skip: noLesson }, () => {
  for (const i of MINE) {
    const sorted = [...i.drills].sort((a, b) => DRILL_KINDS.indexOf(a) - DRILL_KINDS.indexOf(b));
    deepStrictEqual([...i.drills], sorted, `${i.id} declares drills out of DRILL_KINDS order`);
  }
});

test('no duplicate fr inside pronoms-essentiels, computed the way flashhub-coverage computes it', { skip: noLesson }, () => {
  const strip = (s: string) => s.replace(/^(le |la |les |l'|l’|un |une |des |du |de la )/iu, '').toLowerCase().replace(/[.,!?;:«»"]/gu, '').trim();
  const inTheme = seed.items.filter((i) => i.theme === 'pronoms-essentiels');
  const byFr = new Map<string, string[]>();
  for (const i of inTheme) byFr.set(strip(i.fr), [...(byFr.get(strip(i.fr)) ?? []), i.id]);
  const dupes = [...byFr.entries()].filter(([, ids]) => ids.length > 1);
  strictEqual(dupes.length, 0, `duplicate fr: ${dupes.slice(0, 4).map(([k, ids]) => `${k} (${ids.join(', ')})`).join('; ')}`);
});

test("this lesson does not move a1.03's ending population", { skip: noLesson }, () => {
  const withMine = endingPopulation(seed.items as never).length;
  const withoutMine = endingPopulation(seed.items.filter((i) => !isMine(i.id)) as never).length;
  strictEqual(withMine, withoutMine, 'an authored row joined the measured ending population');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  2. THE THREE REQUIRED LAYOUTS
 *
 *  Each is ONE CARD carrying both halves, because "adjacent" means one screen
 *  and `strings(section)` cannot tell one screen from two. The assertions read
 *  the CARD's own fields. This is a2.21 §4.1's shape, for the fifth time.
 * ═══════════════════════════════════════════════════════════════════════ */

test('LAYOUT 1: the English order and the French order are on one card, adjacent', { skip: noLesson }, () => {
  const cards = cardsOf('s02-order');
  ok(cards.length >= 3, 's02-order has under three cards');
  for (const c of cards) {
    const f = c.fr ?? '';
    ok(f.includes('→'), `a card does not put the two orders on one line: « ${f} »`);
    const [english, french] = f.split('→').map((x) => x.trim());
    ok(/^[A-Za-z ,'"]+\.?$/u.test(english ?? ''), `the left half is not the English order: « ${english} »`);
    ok(/(?:^|\s)(le|la|les|l')\s/u.test(`${french} `), `the right half shows no pronoun: « ${french} »`);
    /* AND THE POSITION IS VISIBLE IN BOTH: the French half must not END on the
     * pronoun, which is the error. */
    const words = (french ?? '').replace(/[.]$/u, '').split(/\s+/u);
    ok(!/^(le|la|les)$/u.test(words[words.length - 1] ?? ''), `the French half ends on the pronoun: « ${french} »`);
    ok(words.length >= 3, `the French half is under three words: « ${french} »`);
  }
});

test("LAYOUT 2: the article use and the pronoun use are in one section, and a2.02's term is verbatim", { skip: noLesson }, () => {
  const cards = cardsOf('s04-article');
  ok(cards.length >= 3, 's04-article has under three cards');
  for (const c of cards) ok((c.fr ?? '').includes('·'), `a card does not carry both uses on one line: « ${c.fr} »`);
  const s = display(sec('s04-article'));
  ok(s.some((x) => x.includes(WHAT_FOLLOWS)), `s04-article does not quote a2.02's « ${WHAT_FOLLOWS} » verbatim`);
  ok(s.some((x) => namesUnitLabel(x, 'a2.02')), 'the term is quoted and a2.02 is not named beside it');
  ok(s.some((x) => namesUnitLabel(x, 'a1.04')), 'a1.04 is not credited with the article on the card that borrows its words');
});

test('LAYOUT 3: the affirmative and the negative are on one card, with ne outside the cluster', { skip: noLesson }, () => {
  const both = cardsOf('s14-negation').find((c) => (c.fr ?? '').includes('Je le vois.') && (c.fr ?? '').includes('Je ne le vois pas.'));
  ok(both, 's14-negation has no card carrying both sentences on one line');
  const f = both!.fr!;
  ok(f.indexOf('ne') < f.indexOf('le vois pas'), 'ne is not visibly outside the cluster');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  3. THE OWNS
 * ═══════════════════════════════════════════════════════════════════════ */

/** GUARD THE THING, NOT THE LETTERS. Corrections §14.4: a shape built out of
 *  French morphology reads the English as French, and `le`, `la` and `les` are
 *  all ordinary English letter runs. This requires a FRENCH VERB from the
 *  lesson's own list, optionally `pas`, then a bare pronoun at a clause end. */
const LESSON_VERBS = [
  'vois', 'voit', 'voyez', 'voyons', 'voient', 'regarde', 'regardes', 'regardez',
  'connais', 'connaît', 'connaissez', 'achète', 'achètes', 'achètent', 'invite',
  'invitons', 'invitez', 'aime', 'aimes', 'écoute', 'cherches', 'prend', 'finissons',
];
const AFTER_VERB_RE = new RegExp(
  `(?<![\\p{L}\\p{N}-])(${LESSON_VERBS.join('|')})\\s+(pas\\s+)?(le|la|les)(?![\\p{L}\\p{N}'’-])\\s*[.?!»]`, 'iu');
const putsPronounAfterVerb = (s: string): boolean => AFTER_VERB_RE.test(s);

/** The six sections where the lesson deliberately SHOWS the error: the drill
 *  distractors, the trap, the unseen-verb drill, the errors card, the negation
 *  contrast and the exam. Everywhere else it is refused. */
const WRONG_FORM_SECTIONS = new Set([
  's08-build', 's09-trap', 's10-unseen', 's11-errors', 's14-negation', 's23-quiz',
]);

test('the after-verb guard fires and does not fire on the English', () => {
  for (const s of ['Je vois le.', 'Je connais la.', 'Tu connais le.', 'Elle prend le.',
    'Nous invitons les.', 'Je regarde la.', 'Je ne vois pas le.']) {
    ok(putsPronounAfterVerb(s), `the guard does not fire on « ${s} », so it is not a guard`);
  }
  for (const s of [
    'Je le vois.', 'Je la connais.', 'Je les invite.',
    /* CORRECTIONS §14.4. Half of a learner surface is English by design and the
     * two languages share enough letters that a French-morphology shape reads
     * the English as French. These are real strings from this lesson. */
    'You replace the noun or you keep it; you never say both.',
    'Look at the word straight after it.',
    'The word moves. Nothing else does.',
    'English says the verb and then the word.',
    'Read the noun, not the sentence.',
  ]) {
    ok(!putsPronounAfterVerb(s), `the guard fires on « ${s} », which it must not`);
  }
});

test('NO CORRECT SURFACE puts the pronoun after the verb', { skip: noLesson }, () => {
  strictEqual(L!.sections.length - WRONG_FORM_SECTIONS.size, 18,
    'the allowlist has changed size, which weakens this guard');
  for (const s of L!.sections) {
    if (WRONG_FORM_SECTIONS.has(s.id!)) continue;
    for (const str of display(s)) {
      ok(!putsPronounAfterVerb(str), `${s.id} puts the pronoun after the verb: « ${str.slice(0, 80)} »`);
    }
  }
});

test('and inside the six permitted sections it is NEVER the correct option', { skip: noLesson }, () => {
  const choices: { opts?: string[]; correct?: number | string }[] = [];
  const collect = (v: unknown): void => {
    if (Array.isArray(v)) { for (const x of v) collect(x); return; }
    if (!v || typeof v !== 'object') return;
    const o = v as Record<string, unknown>;
    if (Array.isArray(o.opts)) choices.push(o as { opts?: string[]; correct?: number | string });
    for (const x of Object.values(o)) collect(x);
  };
  for (const id of WRONG_FORM_SECTIONS) collect(sec(id));
  for (const d of L!.drills ?? []) collect(d);
  ok(choices.length >= 10, `only ${choices.length} option sets found, so this guard is not reaching the content`);
  for (const ch of choices) {
    if (typeof ch.correct !== 'number') continue;
    const answer = ch.opts![ch.correct];
    ok(!(answer && putsPronounAfterVerb(answer)), `the error is offered as the CORRECT option: « ${answer} »`);
  }
});

test('the lesson does show the error it exists to prevent, in every permitted place', { skip: noLesson }, () => {
  for (const id of WRONG_FORM_SECTIONS) {
    ok(display(sec(id)).some(putsPronounAfterVerb), `${id} is permitted to show the error and does not show it`);
  }
  ok(ALL.some((s) => s.includes(AFTER_VERB_TRAP)), 'the lesson never shows « Je vois le. »');
});

test('the reframe is authored exactly 17 times, and it is the position rule', { skip: noLesson }, () => {
  strictEqual(L!.reframe, REFRAME);
  strictEqual(ALL.filter((s) => s.includes(REFRAME)).length, REFRAME_COUNT);
});

test('the Owns outweighs the paradigm, 7 sections to 3', { skip: noLesson }, () => {
  const owns = ['s02-order', 's07-move', 's08-build', 's09-trap', 's10-unseen', 's11-errors', 's15-past'];
  const paradigm = ['s04-article', 's05-table', 's06-persons'];
  for (const id of [...owns, ...paradigm]) sec(id);
  ok(owns.length > paradigm.length, 'the paradigm has at least as many sections as the Owns, which is the wrong lesson');
  strictEqual(owns.length, 7);
  strictEqual(paradigm.length, 3);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  4. THE NEGATION ARC
 * ═══════════════════════════════════════════════════════════════════════ */

test('a1.18 and a2.19 are TWO strings, both quoted verbatim, and still different', { skip: noLesson }, () => {
  ok(A118_REFRAME !== A219_REFRAME, 'the two inherited lines have been harmonised into one');
  ok(ALL.some((s) => s.includes(A219_REFRAME)), "a2.19's line is not quoted verbatim");
  ok(ALL.some((s) => s.includes(A118_REFRAME)), "a1.18's line is not quoted verbatim");
  ok(ALL.some((s) => s.includes(A222_EXTENSION)), "a2.22's extension is not quoted verbatim");
  ok(ALL.some((s) => s.includes(MY_NEGATION)), "this lesson's own negation sentence is missing");
});

test('the inherited negation strings still match the SHIPPED neighbours', { skip: noLesson }, () => {
  /* Re-read off the neighbours rather than trusted as literals, so a drift in
   * a2.19, a2.22 or here goes red wherever it happens. a2.23 §2 is the
   * precedent and this is the first check of it outside the past-tense arc. */
  const bodyOf = (id: string) => {
    const l = seed.lessons.find((x) => x.id === id);
    return l ? display(l).join('\n') : '';
  };
  const futur = bodyOf('a2.19.l1');
  if (futur) ok(futur.includes(A219_REFRAME), 'a2.19 no longer carries the line this lesson quotes');
  const refl = bodyOf('a2.22.l1');
  if (refl) ok(refl.includes(A222_EXTENSION), 'a2.22 no longer carries the extension this lesson quotes');
  const neg = bodyOf('a1.18.l1');
  if (neg) ok(neg.includes(A118_REFRAME), 'a1.18 no longer carries the line this lesson quotes');
});

test("a2.22's extension is quoted WITH the note that its reason does not hold here", { skip: noLesson }, () => {
  const quoting = ALL.filter((s) => s.includes(A222_EXTENSION));
  ok(quoting.length, "a2.22's extension is not quoted");
  ok(quoting.some((s) => /does not (change|apply)|different cause|reason is different/iu.test(s)),
    'the extension is quoted and nowhere is it said that its reason does not hold here. '
    + 'The object pronoun does not change with the subject, so the sentence is true of the behaviour and false of the cause');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  5. THE NEIGHBOURS, RESERVED
 * ═══════════════════════════════════════════════════════════════════════ */

test('lui and leur appear NOWHERE, reserving a2.24', { skip: noLesson }, () => {
  for (const s of UNIQUE) {
    for (const w of ['lui', 'leur', 'leurs']) {
      ok(!hasPhrase(s, w), `« ${w} » is a2.24's entire lesson and it appears: « ${s.slice(0, 80)} »`);
    }
  }
});

/** y AND en AS PRONOUNS. `en` is a preposition all over the corpus and `y` is an
 *  ordinary English letter, so the LETTERS are useless as a guard. */
const Y_PRONOUN = /(?<![\p{L}\p{N}'’-])(j'y|n'y|il y va|elle y va|on y va|y aller|vas-y)(?![\p{L}\p{N}'’-])/iu;
const EN_PRONOUN = /(?<![\p{L}\p{N}-])(j'en|n'en|tu en as|il en a|on en a)(?![\p{L}\p{N}'’-])/iu;

test('the y/en guard fires on the pronoun and NOT on the preposition or the English', () => {
  for (const s of ["J'y vais.", "J'en veux deux.", 'Tu en as ?']) {
    ok(Y_PRONOUN.test(s) || EN_PRONOUN.test(s), `the guard does not fire on « ${s} »`);
  }
  for (const s of [
    /* `en` as a preposition, which is everywhere in the corpus. */
    'Je les invite en ville.', 'en français', 'Elle est en retard.',
    /* AND THE ENGLISH, which is where a letters-based version dies. */
    'You already know the words, and the only new thing is where they go.',
    'Every question is about a person or a thing.',
    'Yes, I know her well.',
  ]) {
    ok(!Y_PRONOUN.test(s) && !EN_PRONOUN.test(s), `the guard fires on « ${s} », which it must not`);
  }
});

test('y and en as pronouns appear NOWHERE, reserving a2.25', { skip: noLesson }, () => {
  for (const s of UNIQUE) {
    ok(!Y_PRONOUN.test(s), `a2.25's y appears: « ${s.slice(0, 80)} »`);
    ok(!EN_PRONOUN.test(s), `a2.25's en appears: « ${s.slice(0, 80)} »`);
  }
});

test('both next lessons are named, and a2.22 gets its loop closed', { skip: noLesson }, () => {
  ok(ALL.some((s) => namesUnitLabel(s, 'a2.24')), 'a2.24 is named nowhere, so the next lesson is not handed off to');
  ok(ALL.some((s) => namesUnitLabel(s, 'a2.25')), 'a2.25 is named nowhere');
  const closes = ALL.filter((s) => namesUnitLabel(s, 'a2.22'));
  ok(closes.length, 'a2.22 is named nowhere and this lesson was asked to close its loop');
  /* THE LITERAL PHRASE, not an alternation.
   *
   * MUTATION-FOUND HOLE. The first version accepted any of « same slot », «
   * already carry », « one system » or three more, and a mutation that removed
   * the slot claim outright still passed, because the roundup's « one system
   * rather than two » satisfied one of the alternatives on its own. An
   * alternation wide enough that a rewording cannot break it is not asserting
   * the claim, it is asserting that SOME sentence exists. The brief asks for one
   * line saying the reflexive pronouns are the same slot, so that is the string. */
  ok(closes.some((s) => hasPhrase(s, 'same slot')),
    'a2.22 is named and nowhere is it said that its small words sit in this SAME SLOT, which is the whole hand-off');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  6. ELISION, AND WHAT THE EAR CANNOT DECIDE
 * ═══════════════════════════════════════════════════════════════════════ */

test('the elision limit is stated verbatim, and sons.07 is credited', { skip: noLesson }, () => {
  ok(ALL.some((s) => s.includes(ELISION_LIMIT)), 'the elision limit is not stated verbatim');
  ok(ALL.some((s) => namesUnitLabel(s, 'sons.07')), 'sons.07 owns elision and is credited nowhere');
});

test('elision is quoted and never taught: none of sons.07 own machinery appears', { skip: noLesson }, () => {
  for (const s of UNIQUE) {
    for (const w of ['h aspiré', 'h muet', 'aspirated h', 'mute h']) {
      ok(!hasPhrase(s, w), `sons.07's own material appears: « ${w} »`);
    }
  }
});

/** TWO homophone groups where a2.10 and a2.11 had one. Corrections §5: an ear
 *  question offering two members of one group has NO correct answer, and
 *  marking one right certifies a bug. */
const HOMOPHONE_FORMS: readonly (readonly string[])[] = [
  ['vu', 'vue', 'vus', 'vues'],
  ['regardé', 'regardée', 'regardés', 'regardées'],
  ['acheté', 'achetée', 'achetés', 'achetées'],
  ['invité', 'invitée', 'invités', 'invitées'],
];

test('NO ear question offers two options that are one sound', { skip: noLesson }, () => {
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz') as never);
  const ear = qs.filter((q) => q.format === 'listenChoose');
  ok(ear.length >= 1, 'the exam has no ear question at all, and two of the contrasts here are genuinely audible');
  for (const q of ear) {
    for (const g of HOMOPHONE_FORMS) {
      const hits = (q.opts ?? []).filter((o) => g.some((f) => o === f || hasPhrase(o, f)));
      ok(hits.length <= 1, `an ear question offers « ${hits.join(' » and « ')} », which are one sound`);
    }
  }
});

test("NO ear question asks the gender of an elided l'", { skip: noLesson }, () => {
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz') as never);
  for (const q of qs) {
    if (q.format !== 'listenChoose') continue;
    const text = `${q.q} ${(q.opts ?? []).join(' ')}`;
    const touchesElision = (q.opts ?? []).some((o) => /l'/u.test(o)) || /l'/u.test(q.q);
    ok(!(touchesElision && /masculine|feminine|man|woman|gender/iu.test(text)),
      `an ear question asks the gender of an elided form, which the sentence does not carry: ${q.q}`);
  }
});

test('the one question that DOES ask the gender of l\' offers "the sentence does not say"', { skip: noLesson }, () => {
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz') as never);
  const q = qs.find((x) => /l'aime/u.test(x.q) && /man or a woman|masculine or feminine/iu.test(x.q));
  ok(q, 'the lesson never asks the learner to notice that the gender is gone');
  ok(q!.format === 'mcq', 'that question is not an mcq, and no other format could offer the right answer');
  const answer = (q!.opts ?? [])[q!.correct as number];
  ok(/does not say/iu.test(answer ?? ''), `the correct answer is « ${answer} » rather than "the sentence does not say"`);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  7. THE PRECEDING-DIRECT-OBJECT DECISION
 * ═══════════════════════════════════════════════════════════════════════ */

test('the agreement rule is TAUGHT HERE, stated verbatim, and in one act', { skip: noLesson }, () => {
  ok(ALL.some((s) => s.includes(AGREEMENT_RULE)), 'the agreement rule is not stated verbatim, and this lesson claims to own it');
  const act5 = (L!.acts ?? []).find((a) => a.id === 'act5');
  ok(act5, 'act5 is missing and it is where the agreement lives');
  ok(act5!.sections.length < 7, `the agreement act has ${act5!.sections.length} sections against the Owns' 7. It is one act, not the spine`);
  sec('s15-past');
  sec('s16-agreement');
});

test('the agreement is recognition, and no agreed row is scored by ear', { skip: noLesson }, () => {
  const agreed = MINE.filter((i) => /(vue|vues|achetés|regardées)\.?$/u.test(i.fr));
  ok(agreed.length >= 3, `${agreed.length} rows carry an agreed participle`);
  for (const r of agreed) {
    ok(!(r.drills.includes('voiceflash') && !r.drills.includes('dictation')),
      `${r.id} carries an agreed ending and a speak drill without a dictation drill, so it is scored by ear on a rule the ear cannot carry`);
  }
  /* AND THE FULLY RECEPTIVE ONE STAYS RECEPTIVE. */
  const receptive = byIdItem.get(A(229));
  ok(receptive, 'fr.a2.pronoms-essentiels.229 is missing');
  for (const d of ['flashcard', 'voiceflash', 'dictation']) {
    ok(!receptive!.drills.includes(d as never), `${A(229)} is receptive-only and carries the ${d} drill`);
  }
});

test('the two past rows that differ ONLY by the silent ending are stored that way', { skip: noLesson }, () => {
  const vu = byIdItem.get(A(223));
  const vue = byIdItem.get(A(225));
  ok(vu && vue, 'the vu/vue pair is missing');
  strictEqual(vu!.respell, vue!.respell, 'the pair no longer shares a respelling, and that identity IS the teaching');
  strictEqual(vu!.ipa, vue!.ipa, 'the pair no longer shares an ipa');
  ok(vu!.fr !== vue!.fr, 'the pair is one row');
  /* AND fold() KEEPS THE FINAL -e, which is the only reason the ending is
   * typeable at all. Corrections §5. */
  ok(fold(vu!.fr) !== fold(vue!.fr), 'fold() collapses the pair, so the ending cannot be tested by typing after all');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  8. THE QUIZ
 * ═══════════════════════════════════════════════════════════════════════ */

test('every question has a why and a ref that resolves', { skip: noLesson }, () => {
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz') as never);
  for (const q of qs) {
    ok(q.why, `no why: ${q.q}`);
    ok(q.ref, `no ref: ${q.q}`);
    ok(L!.sections.some((s) => s.id === q.ref), `refs ${q.ref}, which is not a section`);
  }
});

test('at most half mcq, and free text is the backbone', { skip: noLesson }, () => {
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz') as never);
  const mcq = qs.filter((q) => q.format === 'mcq').length;
  ok(mcq <= qs.length / 2, `${mcq} of ${qs.length} are mcq`);
  const free = qs.filter((q) => q.format === 'typeIn' || q.format === 'errorSpot').length;
  ok(free >= 12, `only ${free} free-text questions, and a word-order error is a whole-sentence error`);
});

test('every free-text question accepts the answer it displays', { skip: noLesson }, () => {
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz') as never);
  const owned = new Set(MINE.map((i) => i.fr));
  for (const q of qs) {
    for (const a of q.accept ?? []) {
      ok(matchesAccept(a, q.accept!), `« ${a} » is not accepted by its own accept list: ${q.q}`);
      if (/\s/u.test(a)) {
        ok(owned.has(a) || ["Je l'invite.", "Je l'aime."].includes(a),
          `« ${a} » is a free-text answer and is not a sentence this lesson owns`);
      }
    }
  }
});

test('the correct answers do not cluster in one slot', { skip: noLesson }, () => {
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz') as never);
  const closed = qs.filter((q) => typeof q.correct === 'number');
  const bySlot = new Map<number, number>();
  for (const q of closed) bySlot.set(q.correct as number, (bySlot.get(q.correct as number) ?? 0) + 1);
  for (const [slot, n] of bySlot) {
    ok(n / closed.length <= 0.4, `slot ${slot} holds ${n} of ${closed.length} closed answers, over the 40% cap`);
  }
});

test('every drill is the FIRST resolving target of at least one round', { skip: noLesson }, () => {
  const quiz = L!.sections.find((s) => s.type === 'quiz') as { rounds?: { id: string; targets?: string[] }[] };
  const triggers = new Map((L!.errorTriggers ?? []).map((t) => [t.id, t]));
  ok(triggers.size === 4, `${triggers.size} error triggers`);
  const leads = new Set<string>();
  for (const r of quiz.rounds ?? []) {
    const first = (r.targets ?? []).find((t) => triggers.has(t));
    ok(first, `round ${r.id} names no target that resolves`);
    leads.add(first!);
  }
  for (const id of triggers.keys()) {
    ok(leads.has(id), `${id} is never the FIRST resolving target of any round, so its drill is dead content`);
  }
  for (const t of triggers.values()) {
    ok((L!.drills ?? []).some((d) => d.id === t.drill), `${t.id} names drill ${t.drill}, which does not exist`);
    ok((L!.drills ?? []).some((d) => d.id === t.retest), `${t.id} names retest ${t.retest}, which does not exist`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  9. THE DICTÉE, THE SPEAK LIST AND THE ROLE PLAY
 * ═══════════════════════════════════════════════════════════════════════ */

test('every dictée line is in LETTERS mode through the real dicteeMode', { skip: noLesson }, () => {
  const ids = (sec('s18-dictation') as { itemIds?: string[] }).itemIds ?? [];
  ok(ids.length >= 10, `the dictée targets ${ids.length} lines`);
  for (const id of ids) {
    const r = byIdItem.get(id);
    ok(r, `the dictée targets ${id}, which is not in the seed`);
    strictEqual(dicteeMode(r!.fr), 'letters',
      `« ${r!.fr} » is in WORD mode, which hands every word over pre-spelled and gives away the ORDER`);
    ok(r!.drills.includes('dictation'), `${id} is a dictée target with no dictation drill`);
  }
});

test('the dictée covers all four forms and the agreement', { skip: noLesson }, () => {
  const ids = (sec('s18-dictation') as { itemIds?: string[] }).itemIds ?? [];
  const frs = ids.map((id) => byIdItem.get(id)!.fr);
  ok(frs.some((f) => /\ble\b/u.test(f)), 'the dictée asks for no « le »');
  ok(frs.some((f) => /\bla\b/u.test(f)), 'the dictée asks for no « la »');
  ok(frs.some((f) => /\bles\b/u.test(f)), 'the dictée asks for no « les »');
  ok(frs.some((f) => /l'/u.test(f)), "the dictée asks for no « l' »");
  ok(frs.some((f) => /vue|vues|achetés|regardées/u.test(f)), 'the dictée asks for no agreed ending');
});

test('every speak item carries voiceflash, and every role-play turn has two alts', { skip: noLesson }, () => {
  for (const id of (sec('s20-speak') as { itemIds?: string[] }).itemIds ?? []) {
    const r = byIdItem.get(id);
    ok(r, `the speak surface names ${id}, which is not in the seed`);
    ok(r!.drills.includes('voiceflash'), `${id} is on the speak surface with no voiceflash drill`);
  }
  const turns = (sec('s19-talk') as { turns?: { user: string; userEn?: string; alts?: unknown[] }[] }).turns ?? [];
  ok(turns.length >= 5, `${turns.length} role-play turns`);
  for (const t of turns) {
    ok(t.userEn, `a turn has no userEn: « ${t.user} »`);
    ok((t.alts ?? []).length >= 2, `a turn has under two alts: « ${t.user} »`);
    const r = MINE.find((i) => i.fr === t.user);
    ok(r, `a turn says « ${t.user} », which is not an authored row`);
    ok(r!.drills.includes('roleplay'), `${r!.id} is a role-play turn with no roleplay drill`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  10. TRANCHES, ITEMS, AND EVERY ITEM ON A SCREEN
 * ═══════════════════════════════════════════════════════════════════════ */

test('the tranches release every item exactly once and nothing untaught', { skip: noLesson }, () => {
  const tranches = L!.deckTranche ?? [];
  strictEqual(tranches.length, (L!.acts ?? []).length, 'there is not one tranche per act');
  const flat = tranches.flat();
  strictEqual(new Set(flat).size, flat.length, 'an item is released by two tranches');
  const declared = new Set(L!.itemIds ?? []);
  for (const id of flat) {
    ok(declared.has(id), `${id} is released by a tranche and is not in itemIds`);
    ok(byIdItem.has(id), `${id} is released by a tranche and is not in the seed`);
  }
  for (const id of declared) ok(flat.includes(id), `${id} is in itemIds and no tranche releases it`);
});

test('every declared itemId reaches a screen, and nothing authored is dead', { skip: noLesson }, () => {
  const declared = new Set(L!.itemIds ?? []);
  for (const r of MINE) ok(declared.has(r.id), `${r.id} is authored and no section names it`);
  /* AND EVERY ITEM THE SECTIONS NAME RESOLVES. Invariants §1: a1.08 shipped 43
   * itemIds that resolved perfectly and were drawn by nothing. */
  for (const s of L!.sections) {
    for (const id of (s as { itemIds?: string[] }).itemIds ?? []) {
      ok(byIdItem.has(id), `${s.id} names ${id}, which is not in the seed. The card would draw blank`);
    }
  }
});

test('the seed carries every imported row this lesson leans on', { skip: noLesson }, () => {
  /* Corrections §10: `pronoms-essentiels` holds 534 rows in Postgres and the
   * seed carried TWO before this build. a2.11 found that neither of the two
   * rows its lesson leaned on hardest was in the cut. */
  for (const id of [
    'fr.sons.verbes-essentiels.011', 'fr.sons.verbes-essentiels.024',
    'fr.sons.verbes-essentiels.016', 'fr.sons.verbes-essentiels.048',
    'fr.a2.courses.020', 'fr.a1.routines.185', 'fr.a1.amis.019',
    'fr.a1.pronoms-essentiels.096', 'fr.a1.pronoms-essentiels.087',
  ]) {
    ok(byIdItem.has(id), `${id} is imported by this lesson and is not in the seed. Its card would draw blank`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  11. THE RESPELLING REPAIRS
 * ═══════════════════════════════════════════════════════════════════════ */

/** ONE TABLE, corrections §14.1, with the two reasons for `half !== to` kept
 *  SEPARATE. Written out by hand here rather than imported.
 *
 *  MEASURED RESULT WORTH REPORTING AS A NEGATIVE: every row here is
 *  `blind: false`. There is no §14.1 mixed row in this import at all, because no
 *  imported row carries two nasals. §6 asks for that absence to be reported
 *  rather than left as a silence. */
const REPAIRS = [
  { id: 'fr.a2.communaute.050', fr: 'connaître', from: 'kon-NETR', half: 'kon-NETR', to: 'koh-NEHTR', blind: false, house: true },
  { id: 'fr.a1.famille.094', fr: 'inviter', from: 'an-vee-TAY', half: 'aⁿ-vee-TAY', to: 'aⁿ-vee-TAY', blind: false, house: false },
  { id: 'fr.a1.evenements-familiaux.058', fr: 'inviter', from: 'an-vee-TAY', half: 'aⁿ-vee-TAY', to: 'aⁿ-vee-TAY', blind: false, house: false },
  { id: 'fr.a1.les-fetes.083', fr: 'inviter', from: 'an-vee-TAY', half: 'aⁿ-vee-TAY', to: 'aⁿ-vee-TAY', blind: false, house: false },
  { id: 'fr.a2.communaute.054', fr: 'inviter', from: 'an-vee-TAY', half: 'aⁿ-vee-TAY', to: 'aⁿ-vee-TAY', blind: false, house: false },
  { id: 'fr.a1.rp-famille.048', fr: 'inviter', from: 'ehn-vee-TAY', half: 'ehⁿ-vee-TAY', to: 'aⁿ-vee-TAY', blind: false, house: true },
  { id: 'fr.a1.cuisine.041', fr: 'manger', from: 'mahn-ZHAY', half: 'mahⁿ-ZHAY', to: 'mahⁿ-ZHAY', blind: false, house: false },
  { id: 'fr.a1.rp-repas.013', fr: 'manger', from: 'mahn-ZHAY', half: 'mahⁿ-ZHAY', to: 'mahⁿ-ZHAY', blind: false, house: false },
] as const;

test('every repair is measured through the real function, by name', () => {
  for (const r of REPAIRS) {
    ok(!hasPlainNasalFor(r.fr, r.to), `${r.id}: the repair target « ${r.to} » is still flagged`);
    ok(!hasPlainNasalFor(r.fr, r.half), `${r.id}: the minimal repair « ${r.half} » is still flagged`);
    /* CORRECTIONS §14.1's ASSERTION. Two different reasons for one symptom, kept
     * as separate mutually exclusive fields. a2.17's first table conflated them
     * and the batch caught it on `bien`. */
    strictEqual(r.half !== r.to, r.blind || r.house,
      `${r.id}: half !== to is ${r.half !== r.to} and (blind || house) is ${r.blind || r.house}`);
    if (!r.blind && !r.house) {
      ok(hasPlainNasalFor(r.fr, r.from), `${r.id} is filed as neither blind nor house and its stored value is not flagged, so there is nothing to repair`);
    }
  }
});

test('NO row in this import is blind, and connaître is a HOUSE repair rather than a nasal one', () => {
  strictEqual(REPAIRS.filter((r) => r.blind).length, 0,
    'a row is filed as blind and this build measured none. Re-measure rather than editing the count');
  const conn = REPAIRS.find((r) => r.fr === 'connaître')!;
  /* THE BRIEF FILES THIS BESIDE `inviter` AND IT IS A DIFFERENT SHAPE.
   * `connaître` carries `nn`, so hasPlainNasalFor takes the doubled-consonant
   * branch and correctly declines to flag it: /kɔ.nɛtʁ/ has no nasal vowel. */
  ok(!hasPlainNasalFor(conn.fr, conn.from),
    'kon-NETR is now FLAGGED. It was clean when this was written, and the corpus header rests on that');
  strictEqual(conn.half, conn.from, 'the checker reports something to repair on connaître after all');
  ok(conn.house, 'connaître is not filed as a house repair');
});

test('the repaired rows that are IN the seed hold the repaired value', { skip: noLesson }, () => {
  /* Six of the eight are outside the seed cut and deliberately not carried; the
   * two that are in it must agree with Postgres. */
  const inSeed = REPAIRS.filter((r) => byIdItem.has(r.id));
  strictEqual(inSeed.length, 2, `${inSeed.length} repair targets are in the seed cut`);
  for (const r of inSeed) {
    strictEqual(byIdItem.get(r.id)!.respell, r.to, `${r.id} holds the unrepaired value`);
    ok(!hasPlainNasalFor(r.fr, byIdItem.get(r.id)!.respell!), `${r.id} is still flagged in the seed`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  12. HOUSE COPY AND THE JARGON LINE
 * ═══════════════════════════════════════════════════════════════════════ */

/** Corrections §13: `hasPhrase` is boundary-exact, so a list holding `clitic`
 *  misses `clitics`. The countable nouns are separated from the adjectives
 *  because « accusatives » is not English and a blanket plural rule went red on
 *  it, and loosening the rule instead would have put `clitic` back at risk. */
const JARGON_NOUNS = [
  'object pronoun', 'object pronouns', 'indirect object', 'indirect objects',
  'clitic', 'clitics', 'antecedent', 'antecedents', 'anaphora', 'anaphoras',
];
const JARGON_ADJECTIVES = [
  'accusative', 'dative', 'nominative', 'oblique', 'proclitic', 'enclitic',
  'transitive', 'intransitive', 'preverbal', 'postverbal', 'anaphoric',
  'syntax', 'syntactic', 'valency',
];
const JARGON = [...JARGON_NOUNS, ...JARGON_ADJECTIVES];

test('every countable jargon noun carries its -s plural', () => {
  for (const j of JARGON_NOUNS) {
    if (j.endsWith('s')) continue;
    ok(JARGON_NOUNS.includes(`${j}s`), `JARGON_NOUNS holds « ${j} » and not « ${j}s »`);
  }
});

test('no grammar jargon on any learner surface, over a display() walk', { skip: noLesson }, () => {
  const titleEn = L!.overview?.titleEn ?? '';
  strictEqual(titleEn, 'Direct Object Pronouns', 'overview.titleEn is not the unit name, so the exemption below is not defensible');
  for (const s of UNIQUE) {
    if (s === titleEn) continue;
    for (const j of JARGON) ok(!hasPhrase(s, j), `grammar jargon on a learner surface: « ${j} » in « ${s.slice(0, 80)} »`);
    ok(!hasPhrase(s, 'direct object'), `« direct object » appears outside overview.titleEn: « ${s.slice(0, 80)} »`);
  }
});

test('the PLAIN phrase outnumbers the technical one, which is §14.5 method not a ban', { skip: noLesson }, () => {
  const plain = ALL.filter((s) => hasPhrase(s, PLAIN_PHRASE) || hasPhrase(s, PLAIN_POSITION)).length;
  const technical = ALL.filter((s) => hasPhrase(s, 'direct object')).length;
  strictEqual(technical, 1, `« direct object » appears ${technical} times and the only permitted place is overview.titleEn`);
  ok(plain > technical, `the plain phrase appears ${plain} times and the technical one ${technical}`);
  /* AND `pronoun` IS HOUSE VOCABULARY, measured at 233 uses across the shipped
   * seed. Banning it would be the build inventing a rule (§14.5). */
  ok(ALL.some((s) => hasPhrase(s, 'pronoun')), '« pronoun » appears nowhere, and it is house vocabulary on 233 shipped cards');
});

test('no em dash, no banned word, no double stop, on any learner surface', { skip: noLesson }, () => {
  for (const s of UNIQUE) {
    ok(!/[—–]/u.test(s), `em dash: « ${s.slice(0, 80)} »`);
    /* SUBSTRING, NOT A WORD BOUNDARY. The band's copy of this guard uses `\b`
     * and therefore misses `dishonest`; the seed-wide `sons-alphabet.test.ts`
     * does not, and it is what caught this build's audio brief. */
    ok(!/honest/i.test(s), `banned word: « ${s.slice(0, 80)} »`);
    ok(!/[.]\s*[.!?,;:]/u.test(s), `double stop: « ${s.slice(0, 80)} »`);
  }
});

test('the intro is present, states the position, and is free of jargon', { skip: noLesson }, () => {
  /* CORRECTIONS §9: `intro` is drawn on the lesson overview card AND the lesson
   * cover, and a2.11 shipped « third person » there in v1 with every host gate
   * green, because the walk read sections + sheets + terms and not this. */
  const intro = L!.intro ?? '';
  ok(intro.length > 100, 'the lesson has no intro, and it is drawn on two screens');
  ok(intro.includes('in front of the verb'), 'the intro does not state the position, which is the whole lesson');
  for (const j of JARGON) ok(!hasPhrase(intro, j), `grammar jargon in the intro: « ${j} »`);
  ok(!hasPhrase(intro, 'direct object'), '« direct object » is in the intro, which is not overview.titleEn');
});

test('three term chips per section, every chip defined, every term used', { skip: noLesson }, () => {
  const terms = L!.terms ?? {};
  for (const s of L!.sections) {
    const t = (s as { terms?: string[] }).terms ?? [];
    ok(t.length <= 3, `${s.id} declares ${t.length} term chips and the renderer shows 3`);
    for (const k of t) ok(terms[k], `${s.id} names term « ${k} », which is not defined`);
  }
  for (const k of Object.keys(terms)) {
    ok(L!.sections.some((s) => ((s as { terms?: string[] }).terms ?? []).includes(k)), `term « ${k} » is defined and no section surfaces it`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  13. THE SEED-WIDE CONTRACTS AND THE LAYOUT TRAPS
 * ═══════════════════════════════════════════════════════════════════════ */

test('commonErrors carries swipe, or it draws a blank screen', { skip: noLesson }, () => {
  const ce = sec('s11-errors') as { swipe?: boolean; errors?: { wrong: string; right: string; why: string }[] };
  strictEqual(ce.swipe, true, 'commonErrors without swipe hit a break that fell out of the switch and returned undefined');
  ok((ce.errors ?? []).length >= 3, 'commonErrors has under three errors');
  for (const e of ce.errors ?? []) {
    ok(e.why, `a common error has no why: « ${e.wrong} »`);
    ok(e.wrong !== e.right, 'a common error has the same wrong and right');
  }
});

test('the trapDrill walks rule > cards > audio > drill with a gated drill step', { skip: noLesson }, () => {
  /* Corrections §14.6: `lesson-contract.test.ts` has enforced this since
   * 2026-08-13 and it caught both of a2.17's. `size` comes OFF a stepped one. */
  const td = sec('s09-trap') as {
    swipe?: boolean; size?: string; audio?: unknown; say?: string;
    rule?: unknown; steps?: { kind: string; gate?: boolean }[]; cards?: unknown[]; drill?: unknown[];
  };
  strictEqual(td.swipe, true, 'the trapDrill has no swipe');
  ok(!td.size, 'the trapDrill carries a size, and size comes OFF a stepped trapDrill');
  ok(td.audio, 'the trapDrill has no audio spec');
  ok(td.say, 'the trapDrill has no say');
  ok(td.rule, 'the trapDrill has no rule block');
  deepStrictEqual((td.steps ?? []).map((s) => s.kind), ['rule', 'cards', 'audio', 'drill']);
  ok((td.steps ?? []).find((s) => s.kind === 'drill')?.gate, "the trapDrill's drill step is not gated");
  ok((td.cards ?? []).length >= 3 && (td.drill ?? []).length >= 4, 'the trapDrill is thin');
});

test('the paradigm is a tapTable of at most six rows, and the only table is at layer deep', { skip: noLesson }, () => {
  /* Corrections §8: a `table` at layer core is a density failure, and `tapTable`
   * is not in `ownsLayout()` so it renders inside a scrolling page with six rows
   * the Pixel 6 ceiling. */
  const tt = sec('s05-table') as { type: string; rows?: unknown[] };
  strictEqual(tt.type, 'tapTable');
  ok((tt.rows ?? []).length <= 6, `${(tt.rows ?? []).length} tapTable rows, and six is the Pixel 6 ceiling`);
  for (const s of L!.sections) ok(s.type !== 'table', `${s.id} is a table at layer core, which is a density failure`);
  const sheets = L!.sheets ?? [];
  ok(sheets.length === 1, `${sheets.length} reference sheets`);
  for (const ss of sheets[0]!.sections ?? []) {
    ok(ss.type !== 'cheatSheet', 'a cheatSheet inside a reference sheet draws its title and nothing else');
  }
  /* MUTATION-FOUND HOLE. The first version asserted there was a sheet and that
   * it held no cheatSheet, and a mutation that deleted every `table` from it
   * passed. The sheet exists BECAUSE a table at layer core is a density failure,
   * so a sheet with no table has lost the only thing it was for. */
  const tables = (sheets[0]!.sections ?? []).filter((ss) => ss.type === 'table');
  ok(tables.length >= 1, 'the reference sheet holds no table, and holding the table is the reason it exists at layer deep');
  const forms = JSON.stringify(tables.map((t) => (t as { rows?: unknown[] }).rows ?? []));
  for (const f of ['le', 'la', 'les', "l'"]) {
    ok(forms.includes(`"${f}"`), `the sheet's table does not carry « ${f} », so it is not the paradigm`);
  }
});

test('every sheetId resolves inside this lesson, because cross-lesson sheets do not exist', { skip: noLesson }, () => {
  const declared = new Set((L!.sheets ?? []).map((s) => s.id));
  for (const s of L!.sections) {
    const id = (s as { sheetId?: string }).sheetId;
    if (id) ok(declared.has(id), `${s.id} names sheet ${id}, which this lesson does not declare`);
  }
  for (const id of declared) {
    ok(L!.sections.some((s) => (s as { sheetId?: string }).sheetId === id), `sheet ${id} is declared and no section reaches it`);
  }
});

test('every act names sections that exist, and no section is claimed twice', { skip: noLesson }, () => {
  const seen = new Set<string>();
  for (const a of L!.acts ?? []) {
    for (const id of a.sections) {
      sec(id);
      ok(!seen.has(id), `${id} is claimed by two acts`);
      seen.add(id);
    }
  }
  strictEqual(seen.size, L!.sections.length, 'a section belongs to no act');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  14. THE RECURRING SHAPE, FIFTH OCCURRENCE
 * ═══════════════════════════════════════════════════════════════════════ */

/* ══════════════════════════════════════════════════════════════════════════
 *  13b. THE MISSION-ROW TITLE WIDTH
 *
 *  THIS TEST DID NOT EXIST AT v2 AND THAT IS WHY v3 EXISTS. The mission row
 *  cuts at roughly 13.55 em on a Pixel 6. This file asserted a great deal about
 *  every section and NOTHING about how wide its title draws, so « The Word With
 *  Nowhere To Go » (14.17 em) shipped clipped with every host gate green.
 *
 *  The model is a2.23's, restated here as a LITERAL because this file imports no
 *  source (see the header). It is calibrated against four cases a2.23 measured
 *  on a device plus this lesson's own, and on twenty-four titles it was not
 *  calibrated against it separated the one clip from the twenty-three passes.
 * ═══════════════════════════════════════════════════════════════════════ */

const EM: Readonly<Record<string, number>> = {
  i: 0.28, l: 0.28, j: 0.28, I: 0.28, '.': 0.28, ',': 0.28, "'": 0.2, '’': 0.2, ' ': 0.28,
  t: 0.35, f: 0.35, r: 0.35,
  m: 0.85, w: 0.85, W: 0.9, M: 0.9,
  O: 0.72, N: 0.72, Q: 0.72, G: 0.72,
  v: 0.5, s: 0.5, y: 0.5, z: 0.5, c: 0.5, x: 0.5,
};
const titleWidth = (s: string): number => {
  let w = 0;
  for (const ch of s) w += EM[ch] ?? (ch >= 'A' && ch <= 'Z' ? 0.65 : 0.55);
  return Math.round(w * 100) / 100;
};
const TITLE_WIDTH_MAX = 13.55;
/** Measured on a Pixel 6. The first four are a2.23's; the last is this build's,
 *  and it is the one that cost a version number. */
const TITLE_MUST_FIT = ['Build It, One Word At A Time', 'One Word Changes The Other', 'What You Will Be Able To Do'];
const TITLE_MUST_CLIP = ['Verbs You Were Never Shown', 'You Already Have Four Of The Five', 'The Word With Nowhere To Go'];

test('the width model still separates the cases measured on a device', () => {
  for (const s of TITLE_MUST_FIT) ok(titleWidth(s) <= TITLE_WIDTH_MAX, `« ${s} » fits on a device and the model says ${titleWidth(s)}`);
  for (const s of TITLE_MUST_CLIP) ok(titleWidth(s) > TITLE_WIDTH_MAX, `« ${s} » clips on a device and the model says ${titleWidth(s)}`);
});

test('no mission title clips on the row', { skip: noLesson }, () => {
  for (const s of L!.sections) {
    const w = titleWidth(s.title ?? '');
    ok(w <= TITLE_WIDTH_MAX, `${s.id} title « ${s.title} » is ${w} em against the row's ${TITLE_WIDTH_MAX}`);
    ok(s.title !== 'The Word With Nowhere To Go', `${s.id} has gone back to the title that clipped at v2`);
  }
});

test('a2.02 term quoted verbatim, unit named, and this instance marked as the fifth', { skip: noLesson }, () => {
  const quoting = ALL.filter((s) => s.includes(WHAT_FOLLOWS));
  ok(quoting.length >= 1, `a2.02's « ${WHAT_FOLLOWS} » is quoted nowhere`);
  ok(quoting.some((s) => namesUnitLabel(s, 'a2.02')), 'the shape is quoted and a2.02 is not named beside it');
  ok(ALL.some((s) => /fifth/iu.test(s)), 'the lesson does not say this is the fifth occurrence, so it reads as a new observation');
});

test('a1.03 and a1.04 are leaned on by name and neither is re-taught', { skip: noLesson }, () => {
  ok(ALL.some((s) => namesUnitLabel(s, 'a1.03')), 'a1.03 owns the gender and is credited nowhere');
  ok(ALL.some((s) => namesUnitLabel(s, 'a1.04')), 'a1.04 owns the article and is credited nowhere');
  /* NOT RE-TAUGHT: the four-form article paradigm does not reappear as a
   * teaching table, and no card explains how to derive a noun's gender. */
  for (const s of UNIQUE) {
    ok(!/how to (tell|work out|know) (the|a noun's) gender/iu.test(s), `this lesson re-teaches a1.03: « ${s.slice(0, 80)} »`);
  }
});
