// a2.24.l1 « Pronoms d'objet indirect »: the assertions that keep this lesson
// true. Trail seq 22, the SECOND lesson of the pronoun block (21, 22, 23), so it
// inherits a2.06's position rule verbatim and a2.25 inherits its à framing.
//
// Modelled on a2-06-pronoms-direct.test.ts.
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
// IT IS SCOPED TO ITS OWN ID BLOCK. `pronoms-essentiels` holds 584 rows across
// four levels and this lesson owns 50 of them, immediately above a2.06's 48.
// a2.03's test filtered on a namespace prefix, meant "the rows a2.03 authored",
// and four of its tests went red the moment a2.16 landed in the same namespace.
//
// ── What this file is actually guarding ────────────────────────────────────
//
//   THE DIRECT SET AND THE INDIRECT SET in ONE section, SIX WORDS IN TWO ROWS,
//   read off the CARD's own `fr` and `sub` rather than through a string walk
//   that cannot tell one screen from two. a2.06's POSITION RULE QUOTED VERBATIM
//   as a literal here, so a paraphrase goes red.
//   EVERY à-TAKING VERB ASSERTED INDIVIDUALLY BY NAME, not as a count, and the
//   six-and-four split asserted as the design decision it is.
//   leur THE PRONOUN NEVER CARRIES AN -s in any authored correct sentence, with
//   `leurs` permitted only on a possessive row and as a distractor.
//   « Je leur parle. » AND THE POSSESSIVE in one section.
//   y AND en AS PRONOUNS NOWHERE, reserving a2.25, guarded as the THING rather
//   than the letters with an English sentence in the MUST_NOT_FIRE list.
//   NO MULTIPLE-PRONOUN SENTENCE, reserving a2.25, and `nous`/`vous` kept out of
//   that shape because they are subject and object with the same spelling.
//   THE NEGATION STRING MATCHES a2.06's, which matches a2.22's, re-read off the
//   shipped neighbour so a drift in either place goes red.
//   a2.23's SHIPPED POINTER HONOURED: it promised the reason was waiting here.
//   THE JARGON WALK over a `display()` walk including `intro` and `overview`,
//   with the -s plural checked, and the RATIO guarded rather than a word banned.
//   THE RESPELLING REPAIRS by name, through the real `hasPlainNasalFor`, with
//   the SIX BLIND ROWS asserted as blind and the two false positives asserted
//   as false positives.
//   EVERY DICTÉE ITEM in LETTERS mode through the real `dicteeMode`, which for a
//   lesson whose trap is a silent -s is a hard limit rather than a preference.
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

const L = seed.lessons.find((l) => l.id === 'a2.24.l1');
const noLesson = !L;
const byIdItem = new Map(seed.items.map((i) => [i.id, i] as const));

/** THE BLOCK, NOT THE PREFIX. `pronoms-essentiels` spans a1, a2, b1 and b2, and
 *  a2.06 sits immediately below at .189..236. */
const MY_BLOCK = { from: 237, to: 286 };
const isMine = (id: string): boolean => {
  const m = /^fr\.a2\.pronoms-essentiels\.(\d{3})$/.exec(id);
  if (!m) return false;
  const n = Number(m[1]);
  return n >= MY_BLOCK.from && n <= MY_BLOCK.to;
};
const A = (n: number) => `fr.a2.pronoms-essentiels.${String(n).padStart(3, '0')}`;
/** SORTED BY ID, and the sort is the point.
 *
 *  `seed.items` is not in id order and nothing promises it is. A lesson MERGE
 *  appends, preserving whatever order it found; `content:publish` rebuilds the
 *  whole cut from the database in ITS order. Both are legitimate writers, so
 *  `MINE[0]` meant "the first row in the array that happens to be mine", which
 *  is not what the assertions below are about — they are about the block
 *  running from .237 to .286.
 *
 *  Found when publishing v54 reordered the cut and this file failed with
 *  `.239 !== .237` while both rows were present and the block still held 53. */
const MINE: Item[] = seed.items
  .filter((i) => isMine(i.id))
  .slice()
  .sort((a, b) => a.id.localeCompare(b.id));

/* ─── The strings, written out by hand ────────────────────────────────────── */

const REFRAME = 'If the person sits behind à, the pronoun is lui or leur.';
/** a2.06's, QUOTED AND TAUGHT NOWHERE HERE. Three lessons, one rule. */
const POSITION_RULE = 'The pronoun goes in front of the verb, not after it.';
/** a2.25 inherits this one verbatim, about a thing instead of a person. */
const A_FRAMING = 'À plus a person becomes lui or leur, and the à disappears with it.';
/** a1.17's own test, shipped on the last card of its s16-leur. */
const A117_TEST = 'a possessive has a thing behind it';
const LEUR_RULE = 'The leur in front of a verb never takes an s. Ever.';
const ENDING_RULE = 'The second word never answers to lui or leur. Nothing is added.';
const STRESSED_RULE = 'After a little word like avec, sans or pour, lui stands on its own and stays where English puts it.';
const GENDER_LOST = 'The word lui is him or her. Going from one set to the other you lose the gender, which is one less thing to get right.';
/** a2.02's name for the recurring shape. Quoted verbatim; a paraphrase is not
 *  the same claim, and a2.06 was the fifth instance one lesson ago. */
const WHAT_FOLLOWS = 'what comes next decides';
/** a1.18, a2.19 and a2.06. THREE strings, and this lesson quotes all three and
 *  adds none. */
const A118_REFRAME = 'Wrap the verb, then ask what the verb was.';
const A219_REFRAME = 'Wrap the verb that changed, not the one carrying the meaning.';
const A206_NEGATION = 'The wrap goes round the pronoun and the verb together.';
/** a2.23's shipped promise, which this lesson exists partly to keep. */
const A223_POINTER_TAIL = 'the reason the ending disappears on this screen is waiting there too';

const DIRECT_SET = 'le · la · les';
const INDIRECT_SET = 'lui · lui · leur';
const PLAIN_PHRASE = 'the person behind à';
const PLAIN_TARGET = 'the person you are talking to';

const WRONG_SET_TRAP = "Je l'ai téléphoné.";
const LEURS_TRAP = 'Je leurs parle.';
const REFRAME_COUNT = 13;
const POSITION_RULE_COUNT = 8;

/** THE TEN VERBS, WRITTEN OUT BY HAND AND ASSERTED ONE AT A TIME. The brief asks
 *  for this specifically, because a count passes on the wrong ten. */
const A_VERBS_SILENT = [
  { frame: "téléphoner à quelqu'un", en: 'phone someone' },
  { frame: "répondre à quelqu'un", en: 'answer someone' },
  { frame: "demander à quelqu'un", en: 'ask someone' },
  { frame: "dire à quelqu'un", en: 'tell someone' },
  { frame: "montrer à quelqu'un", en: 'show someone' },
  { frame: "offrir à quelqu'un", en: 'give someone' },
] as const;
const A_VERBS_MARKED = [
  { frame: "parler à quelqu'un", en: 'talk to someone' },
  { frame: "écrire à quelqu'un", en: 'write to someone' },
  { frame: "envoyer à quelqu'un", en: 'send to someone' },
  { frame: "donner à quelqu'un", en: 'give to someone' },
] as const;

/* ─── String walks, matching the batch's ──────────────────────────────────── */

/** WIDER THAN THE ONE EVERY OTHER LESSON IN THIS BAND USES, AND THAT IS THE
 *  POINT. a2.06's list holds `drill`, `retest` and `buckets` as machine keys.
 *  On an ErrorTrigger `drill` IS an id; on a stepped `trapDrill` it is the
 *  ARRAY OF OPTIONS the learner is gated on, and `buckets` holds the labels a
 *  sort drill draws. So the entire gated final step of every A2 trapDrill in
 *  this band is invisible to every jargon, em-dash and banned-word check that
 *  has ever run over it. Here `drill` and `retest` are skipped only when they
 *  hold a STRING. */
const MACHINE_KEYS = new Set([
  'id', 'ref', 'sheetId', 'itemId', 'itemIds', 'targets', 'detectOn',
  'accept', 'recordingId', 'audioRef', 'unitId', 'scenarioId',
  'clipIds', 'restPoints',
]);
const ID_WHEN_STRING = new Set(['drill', 'retest']);
const isId = (s: string): boolean => /^fr\.[a-z0-9]+\.[a-z0-9-]+\.\d+$/i.test(s);

/** Keeps `sub`, drops only machine keys. Corrections §13: `prose()` drops `sub`
 *  as notation, and THIS LESSON'S REQUIRED LAYOUT 1 LIVES HALF IN `sub`. */
function display(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') { if (!isId(v)) out.push(v); }
  else if (Array.isArray(v)) for (const x of v) display(x, out);
  else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) {
      if (MACHINE_KEYS.has(k)) continue;
      if (ID_WHEN_STRING.has(k) && typeof x === 'string') continue;
      display(x, out);
    }
  }
  return out;
}

/** THE HOUSE BOUNDARY WITH CORRECTIONS §14.3's FIX: the apostrophe is dropped
 *  from the LEFT so a shape can see `l'ai`, `qu'il` and `d'objet`, and kept on
 *  the right so `l'` does not match a bare `l`. §14.3 names this lesson: the
 *  probe that produced its brief demonstrated the bug by reporting NO for
 *  `objet` against a unit whose own `sub` is « Pronoms d'objet indirect ». */
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

test('a2.24.l1 is in the seed', () => {
  ok(L, 'a2.24.l1 is not in seed.json');
});

test('the lesson validates and passes density against the shipped item set', { skip: noLesson }, () => {
  const issues = validateLesson(L!);
  strictEqual(issues.length, 0, formatIssues(issues));
  const dens = validateDensity(L!, new Set(seed.items.map((i) => i.id)));
  strictEqual(dens.length, 0, formatDensity(dens));
});

test('the identity block matches the unit, byte for byte', { skip: noLesson }, () => {
  const u = seed.units.find((x) => x.id === 'a2.24');
  ok(u, 'a2.24 is not in the seed');
  strictEqual(String(u!.seq), '22');
  strictEqual(u!.title, 'Indirect Object Pronouns');
  strictEqual(u!.sub, "Pronoms d'objet indirect");
  strictEqual(u!.canDo, 'Can replace an indirect object with lui or leur and knows which verbs take à');
  ok((u!.lessonIds ?? []).includes('a2.24.l1'), 'the unit does not list a2.24.l1');
  deepStrictEqual(u!.prereqUnitIds ?? [], ['a2.06']);
  /* CORRECTIONS §1: the spine's `sub` — « lui, leur — the verbs that take à » —
   * exists nowhere in the database and carries an em dash. If it ever reappears,
   * this goes red. */
  ok(!/the verbs that take/i.test(u!.sub ?? ''), "the spine's discarded sub has come back");
  ok(!/[—–]/u.test(`${u!.title} ${u!.sub} ${u!.canDo}`), 'an em dash is in the identity block');
});

test('the shape is 24 sections, 6 acts, one quiz of 30', { skip: noLesson }, () => {
  strictEqual(L!.sections.length, 24);
  strictEqual((L!.acts ?? []).length, 6);
  strictEqual(L!.sections.filter((s) => s.type === 'quiz').length, 1, 'a second quiz section is silently never rendered');
  strictEqual(quizQuestions(L!.sections.find((s) => s.type === 'quiz') as never).length, 30);
  strictEqual(L!.version, 3,
    'v1 was the first build; v2 repaired twelve cards whose two-sentence `fr` line clipped on a Pixel 6; '
    + 'v3 repaired five sentences that opened on a lowercase fragment. '
    + 'v4 THROUGH v7 WERE WITHDRAWN AND THE EDITS THEY CARRIED WERE KEPT: a jargon repair ("with the same '
    + 'auxiliary" -> "with the same first word") and the unit-label pass that replaced raw unit ids with '
    + 'lesson labels. Every one was text-only. The runtime reads Lesson.version to decide whether to DISCARD '
    + 'a learner mission record and its XP, and that reset is only warranted when the SECTION LIST changes, '
    + 'so those four bumps were pure loss. Corrections §16.7 supersedes §10 on this: §10 is right about '
    + 'provenance and wrong if read as "bump on every edit". Check with `pnpm content:versions`.');
});

test('NO CARD REBUILDS THE ONE-LINE PAIR THAT CLIPPED', { skip: noLesson }, () => {
  /* The guard that keeps v2's repair from being undone. A `fr` holding two full
   * sentences joined by the separator is the shape that lost its last word on a
   * Pixel 6, and it is the shape every other lesson in this band still uses. */
  for (const s of L!.sections) {
    for (const c of ((s as { cards?: Card[] }).cards ?? [])) {
      const f = c.fr ?? '';
      ok(!(f.includes(' · ') && /[.?!]\s*·/u.test(f)),
        `${s.id} joins two sentences on one \`fr\` line: « ${f} ». That is the shape that clipped at 36 characters`);
    }
  }
  /* AND THE TWO-ROW SHAPE IS ACTUALLY IN USE, so this is not vacuous. */
  const tworow = L!.sections.flatMap((s) => ((s as { cards?: Card[] }).cards ?? []))
    .filter((c) => /[.?!]$/u.test(c.fr ?? '') && /[.?!]$/u.test(c.sub ?? ''));
  ok(tworow.length >= 10, `${tworow.length} cards use the two-row shape, and twelve were converted`);
});

test('THE PREREQUISITE IS SHIPPED, which the brief says to stop over', { skip: noLesson }, () => {
  /* « Whether a2.06 is shipped. It is a hard prerequisite; if it is not, stop
   * and say so. » It is: a2.06.l1 v3, applied and merged, seq 21. */
  const p = seed.units.find((u) => u.id === 'a2.06');
  ok(p, 'a2.06 is not in the seed');
  ok((p!.lessonIds ?? []).includes('a2.06.l1'), 'a2.06 is a hard prerequisite and has no shipped lesson');
  const prereq = seed.lessons.find((l) => l.id === 'a2.06.l1');
  ok(prereq, 'a2.06 lists a2.06.l1 and the seed does not hold it');
  ok((prereq!.version ?? 0) >= 3, `a2.06.l1 is v${prereq!.version} and it shipped at v3`);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  1. THE CORPUS
 * ═══════════════════════════════════════════════════════════════════════ */

test('50 rows in the claimed block, and nobody else is inside it', { skip: noLesson }, () => {
  strictEqual(MINE.length, 50, `${MINE.length} rows inside ${MY_BLOCK.from}..${MY_BLOCK.to}`);
  strictEqual(MINE[0]!.id, A(237));
  strictEqual(MINE[MINE.length - 1]!.id, A(286));
  /* AND a2.06's BLOCK IS UNTOUCHED, which is the failure a2.03's test shipped:
   * a namespace filter that meant "my rows" and caught a neighbour's. */
  const a206 = seed.items.filter((i) => /^fr\.a2\.pronoms-essentiels\.(1[89]\d|2[0-3]\d)$/.test(i.id));
  ok(a206.length >= 48, `a2.06's block holds ${a206.length} rows and it applied 48`);
});

test('every row in the block is in this theme and at this level', { skip: noLesson }, () => {
  /* MUTATION-FOUND HOLE. `MINE` is selected by ID and nothing asserted the
   * theme, so a row that quietly left `pronoms-essentiels` while keeping its id
   * passed every check in this file: the duplicate-fr check FILTERS BY THEME, so
   * the row simply dropped out of it, and the flashcard hub would then serve it
   * from wherever it had gone. The level matters for the same reason. */
  for (const i of MINE) {
    strictEqual(i.theme, 'pronoms-essentiels', `${i.id} is in theme « ${i.theme} » and this build writes into pronoms-essentiels`);
    strictEqual(i.level, 'a2', `${i.id} is level « ${i.level} »`);
  }
});

test('NOT ONE HEADWORD IS AUTHORED, for the ninth build running', { skip: noLesson }, () => {
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
 * ═══════════════════════════════════════════════════════════════════════ */

test('LAYOUT 1: six words in TWO ROWS on one card, with a2.06 quoted verbatim', { skip: noLesson }, () => {
  const cards = cardsOf('s02-sets');
  ok(cards.length >= 3, 's02-sets has under three cards');
  /* THE ROWS ARE `fr` AND `sub`. A guard reading `strings(section)` cannot tell
   * one screen from two, and `prose()` would not see the second row at all. */
  const both = cards.find((c) => c.fr === DIRECT_SET && c.sub === INDIRECT_SET);
  ok(both, `no card carries « ${DIRECT_SET} » in fr and « ${INDIRECT_SET} » in sub`);
  for (const w of ['le', 'la', 'les']) ok(hasPhrase(both!.fr!, w), `the direct row does not carry « ${w} »`);
  for (const w of ['lui', 'leur']) ok(hasPhrase(both!.sub!, w), `the indirect row does not carry « ${w} »`);
  strictEqual((both!.sub!.match(/lui/gu) ?? []).length, 2,
    'the indirect row does not show lui TWICE, which is where the lost gender is visible');
  const s = display(sec('s02-sets'));
  ok(s.some((x) => x.includes(POSITION_RULE)), `s02-sets does not quote a2.06's « ${POSITION_RULE} » verbatim`);
  ok(s.some((x) => namesUnitLabel(x, 'a2.06')), 'the position rule is quoted and a2.06 is not named beside it');
  ok(s.some((x) => x.includes(GENDER_LOST)), 's02-sets does not state what the learner loses crossing between the rows');
});

test('LAYOUT 2: the pronoun and the possessive are TWO ROWS on one card, and a1.17 is credited', { skip: noLesson }, () => {
  /* ── THE v2 REPAIR, AND IT WAS FOUND ON A PIXEL 6 ──────────────────────
   *
   * v1 joined the two sentences on one `fr` line with « · », which is how
   * every lesson in this band does it. At 36 characters that line CLIPS: it
   * drew as « Je leur parle. · Voici leurs » with the last word gone, while
   * the respelling underneath still read `KLAY`. Invariants §2's
   * flex-on-a-Text failure, and nine of this lesson's twelve pair cards were
   * over the length that survived.
   *
   * EVERY HOST GATE WAS GREEN, because all three layers asserted that both
   * sentences were on one card and none asserted how wide the card draws. */
  const both = cardsOf('s11-leurs').find((c) => c.fr === 'Je leur parle.' && c.sub === 'Voici leurs clés.');
  ok(both, 's11-leurs has no card carrying « Je leur parle. » in fr and « Voici leurs clés. » in sub');
  const s = display(sec('s11-leurs'));
  ok(s.some((x) => x.includes(A117_TEST)), `s11-leurs does not quote a1.17's test « ${A117_TEST} » verbatim`);
  ok(s.some((x) => namesUnitLabel(x, 'a1.17')), 'a1.17 owns the possessive and is not credited on the card that borrows it');
});

test('LAYOUT 3: the verbs are a tapTable of exactly six, and the only table is at layer deep', { skip: noLesson }, () => {
  /* Corrections §8: a `table` at layer core is a density failure, and `tapTable`
   * is not in `ownsLayout()` so it renders inside a scrolling page with six rows
   * the Pixel 6 ceiling. Six is not a coincidence here: it is the number of
   * verbs English gives the learner no signal for. */
  const tt = sec('s07-verbs') as { type: string; rows?: { cells?: string[] }[] };
  strictEqual(tt.type, 'tapTable');
  strictEqual((tt.rows ?? []).length, 6, 'the tapTable is not exactly the six verbs English does not mark');
  for (const s of L!.sections) ok(s.type !== 'table', `${s.id} is a table at layer core, which is a density failure`);
  const sheets = L!.sheets ?? [];
  strictEqual(sheets.length, 1, `${sheets.length} reference sheets`);
  for (const ss of sheets[0]!.sections ?? []) {
    ok(ss.type !== 'cheatSheet', 'a cheatSheet inside a reference sheet draws its title and nothing else');
  }
  const tables = (sheets[0]!.sections ?? []).filter((ss) => ss.type === 'table');
  ok(tables.length >= 1, 'the reference sheet holds no table, and holding the ten-verb list is the reason it exists at layer deep');
  /* AND THE SHEET'S TABLE HOLDS ALL TEN, which is the only thing it has that
   * a2.06's sheet could not: a2.06's answer to "which verbs" was "all of them". */
  const sheetText = JSON.stringify(tables);
  for (const v of [...A_VERBS_SILENT, ...A_VERBS_MARKED]) {
    ok(sheetText.includes(v.frame), `the sheet's table does not carry « ${v.frame} », so it is not the ten-verb list`);
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  3. THE OWNS: EVERY VERB BY NAME
 * ═══════════════════════════════════════════════════════════════════════ */

test('every à-taking verb is on a learner surface, asserted one at a time', { skip: noLesson }, () => {
  /* THE BRIEF ASKS FOR THIS SPECIFICALLY: « Every à-taking verb is asserted
   * individually by name, not as a count. » A count passes on the wrong ten. */
  for (const v of [...A_VERBS_SILENT, ...A_VERBS_MARKED]) {
    ok(ALL.some((s) => s.includes(v.frame)), `« ${v.frame} » is never shown, so the learner never sees where the à goes`);
    ok(ALL.some((s) => s.includes(v.en)), `the English gloss « ${v.en} » never appears, and it is the column that shows the gap`);
  }
});

test('the six English does not mark are the tapTable, and the four it does have their own section', { skip: noLesson }, () => {
  const tt = sec('s07-verbs') as { rows?: { cells?: string[] }[] };
  for (const v of A_VERBS_SILENT) {
    ok((tt.rows ?? []).some((r) => (r.cells ?? []).includes(v.frame)), `the tapTable has no row for « ${v.frame} »`);
    ok((tt.rows ?? []).some((r) => (r.cells ?? []).includes(v.en)), `the tapTable shows « ${v.frame} » without its English gloss`);
  }
  /* AND THE FOUR ARE NOT ON IT, because mixing them would lose the split that
   * makes the six read as a gap in English rather than a rule in French. */
  for (const v of A_VERBS_MARKED) {
    ok(!(tt.rows ?? []).some((r) => (r.cells ?? []).includes(v.frame)), `« ${v.frame} » is on the tapTable and English marks it with "to"`);
  }
  const sig = display(sec('s08-signal'));
  for (const v of A_VERBS_MARKED) ok(sig.some((s) => s.includes(v.frame)), `s08-signal does not show « ${v.frame} »`);
});

test("the à framing is stated verbatim, because a2.25 inherits it", { skip: noLesson }, () => {
  ok(ALL.some((s) => s.includes(A_FRAMING)), `the à framing « ${A_FRAMING} » is not stated verbatim anywhere`);
  ok(ALL.some((s) => namesUnitLabel(s, 'a2.04')), 'a2.04 owns à in front of a place and is named nowhere');
  /* AND a2.04's OWN MACHINERY IS NOWHERE: named, not taught. */
  for (const s of UNIQUE) {
    for (const w of ['au cinéma', 'à la gare', 'contraction', 'contracts with']) {
      ok(!hasPhrase(s, w), `a2.04's own material appears: « ${w} »`);
    }
  }
});

test('the reframe is authored exactly 13 times, and a2.06\'s rule 8', { skip: noLesson }, () => {
  strictEqual(L!.reframe, REFRAME);
  strictEqual(ALL.filter((s) => s.includes(REFRAME)).length, REFRAME_COUNT);
  /* THE BORROWED RULE IS DELIBERATELY THE QUIETER OF THE TWO. Two rules on one
   * surface at a2.06's seventeen each would put one or the other on every
   * screen, which a2.06's own report records as reading like a slogan. */
  strictEqual(ALL.filter((s) => s.includes(POSITION_RULE)).length, POSITION_RULE_COUNT);
  ok(POSITION_RULE_COUNT < REFRAME_COUNT, 'the borrowed rule is louder than this lesson\'s own');
});

test('the Owns outweighs the paradigm, 6 sections to 3', { skip: noLesson }, () => {
  const owns = ['s06-behind', 's07-verbs', 's08-signal', 's09-pick', 's10-unseen', 's14-errors'];
  const paradigm = ['s02-sets', 's04-two', 's05-listening'];
  for (const id of [...owns, ...paradigm]) sec(id);
  ok(owns.length > paradigm.length, 'the paradigm has at least as many sections as the Owns, which is the wrong lesson');
  strictEqual(owns.length, 6);
  strictEqual(paradigm.length, 3);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  4. THE TWO ERRORS, GUARDED AS THE THING AND NOT THE LETTERS
 * ═══════════════════════════════════════════════════════════════════════ */

const WRONG_SET_VERBS = [
  'téléphone', 'téléphones', 'téléphonent', 'téléphoné', 'téléphoner',
  'réponds', 'répond', 'répondez', 'répondons', 'répondent', 'répondu', 'répondre',
  'parle', 'parles', 'parlez', 'parlons', 'parlent', 'parlé', 'parler',
  'obéis', 'obéit', 'obéissons', 'obéissez', 'obéissent', 'obéi', 'obéir',
];
const LEURS_VERBS = [
  ...WRONG_SET_VERBS,
  'écris', 'écrit', 'écrivez', 'écrivons', 'écrivent', 'écrire',
  'montre', 'montres', 'montrent', 'montré', 'montrer',
  'donne', 'donnes', 'donnent', 'donné', 'donner',
  'demande', 'demandes', 'demandent', 'demandé', 'demander',
  'dis', 'dit', 'dites', 'disent', 'dire',
  'offre', 'offres', 'offrent', 'offert', 'offrir',
  'envoie', 'envoies', 'envoient', 'envoyé', 'envoyer',
  'explique', 'expliques', 'expliquent', 'expliqué', 'expliquer',
  'ai', 'as', 'a', 'avons', 'avez', 'ont',
];
const WRONG_SET_RE = new RegExp(
  `(?<![\\p{L}\\p{N}-])(l'|l’|le|la|les)\\s*(?:(?:ai|as|a|avons|avez|ont)\\s+)?(${WRONG_SET_VERBS.join('|')})(?![\\p{L}\\p{N}'’-])`, 'iu');
const LEURS_PRONOUN_RE = new RegExp(
  `(?<![\\p{L}\\p{N}-])leurs\\s+(${LEURS_VERBS.join('|')})(?![\\p{L}\\p{N}'’-])`, 'iu');
const usesWrongSet = (s: string): boolean => WRONG_SET_RE.test(s);
const usesLeursAsPronoun = (s: string): boolean => LEURS_PRONOUN_RE.test(s);

/** The six sections where the lesson deliberately SHOWS an error: the scene, the
 *  build drill, the unseen-verb drill, the trap, the errors card and the exam. */
const WRONG_FORM_SECTIONS = new Set(['s01-scene', 's09-pick', 's10-unseen', 's12-trap', 's14-errors', 's23-quiz']);

test('both error guards fire, and neither fires on the English or on correct French', () => {
  for (const s of [WRONG_SET_TRAP, 'Je le téléphone.', 'Je la réponds.', "Nous l'obéissons.",
    "Je l'ai parlé.", 'Je les ai parlé.', 'Tu le téléphones.']) {
    ok(usesWrongSet(s), `the wrong-set guard does not fire on « ${s} », so it is not a guard`);
  }
  for (const s of [LEURS_TRAP, 'Je leurs écris.', 'Nous leurs parlons.', 'Je ne leurs parle pas.']) {
    ok(usesLeursAsPronoun(s), `the leurs guard does not fire on « ${s} », so it is not a guard`);
  }
  for (const s of [
    /* Correct French from this lesson. */
    'Je lui parle.', 'Je leur parle.', 'Je leur montre la photo.', 'Je lui dis bonjour.',
    'Je leur donne les clés.', 'Voici leurs clés.', 'Voici leur maison.',
    'Je leur montre leur maison.', 'Elle leur explique.', 'Elle les explique.',
    'Je la connais.', 'Je le vois.', 'Ils ont oublié leurs clés au bureau.',
    /* CORRECTIONS §14.4. Half of a learner surface is English by design and the
     * two languages share enough letters that a French-morphology shape reads
     * the English as French. These are real strings from this lesson. */
    'The pronoun goes in front of the verb, not after it.',
    'a possessive has a thing behind it',
    'Look at the word straight after it.',
    'You already get them right.',
    'The place is the same. Only the words differ.',
  ]) {
    ok(!usesWrongSet(s), `the wrong-set guard fires on « ${s} », which it must not`);
    ok(!usesLeursAsPronoun(s), `the leurs guard fires on « ${s} », which it must not`);
  }
});

test('NO CORRECT SURFACE uses the wrong set of words or puts an s on the pronoun', { skip: noLesson }, () => {
  strictEqual(L!.sections.length - WRONG_FORM_SECTIONS.size, 18,
    'the allowlist has changed size, which weakens this guard');
  for (const s of L!.sections) {
    if (WRONG_FORM_SECTIONS.has(s.id!)) continue;
    for (const str of display(s)) {
      ok(!usesWrongSet(str), `${s.id} uses a2.06's words for a person behind à: « ${str.slice(0, 80)} »`);
      ok(!usesLeursAsPronoun(str), `${s.id} puts an s on the pronoun leur: « ${str.slice(0, 80)} »`);
    }
  }
  /* ── AND EVERY OTHER SURFACE, NOT JUST THE SECTIONS ──────────────────
   *
   * MUTATION-FOUND HOLE, AND IT IS REAL. The first version walked
   * `L.sections` and then, separately, the sheet, the terms and the intro.
   * That leaves `audio.recorded[].desc`, `acts[].milestone` and
   * `overview` unwalked by the error shapes, so a wrong sentence in an
   * audio brief — a string the studio reads and records — passed. a2.06's
   * guard has the same gap today.
   *
   * The permitted set is the six sections PLUS the error triggers and the
   * drills, and those two are permitted for a stated reason rather than by
   * oversight: an ErrorTrigger's `description` exists to DESCRIBE the
   * error, so it necessarily contains it, and a drill's distractors are
   * covered by the never-the-correct-option check below. */
  const permitted = new Set<string>([
    ...[...WRONG_FORM_SECTIONS].flatMap((id) => display(sec(id))),
    ...display(L!.errorTriggers ?? []),
    ...display(L!.drills ?? []),
  ]);
  /* AND THE AUDIO BRIEFS QUOTE THE CARDS THEY RECORD, WHICH IS A GUARD OF THIS
   * BUILD'S OWN.
   *
   * Widening this walk to `audio` collided head-on with the trapDrill check
   * below, which REQUIRES the brief to name every card the audio step plays so
   * the studio knows the take has to contain them. One of those cards is the
   * error. So a brief may quote the trap's own cards and nothing else: the card
   * lines are removed from the string and the shapes run on what is left, which
   * is stricter than exempting the brief outright. */
  const trapCards = ((sec('s12-trap') as { cards?: { fr?: string }[] }).cards ?? []).map((c) => c.fr ?? '');
  const withoutTrapCards = (str: string): string => trapCards.reduce((acc, fr) => (fr ? acc.split(fr).join(' ') : acc), str);
  for (const str of ALL) {
    if (permitted.has(str)) continue;
    const rest = withoutTrapCards(str);
    ok(!usesWrongSet(rest), `a surface outside the six permitted sections uses the wrong set: « ${str.slice(0, 80)} »`);
    ok(!usesLeursAsPronoun(rest), `a surface outside the six permitted sections puts an s on the pronoun: « ${str.slice(0, 80)} »`);
  }
  /* AND THE EXEMPTION IS NARROW: stripping the trap's cards must not disarm the
   * shapes on anything else. */
  ok(usesLeursAsPronoun(withoutTrapCards('Some brief. Je leurs écris. More brief.')),
    'stripping the trap cards disarms the guard on a different error, so the exemption is wider than it looks');
});

test('no tranche releases an item the acts before it have not shown', { skip: noLesson }, () => {
  /* MUTATION-FOUND HOLE. The BATCH enforces this and the first version of this
   * file did not, so a seed edited by hand — or by a later merge that reorders
   * a tranche — would ship an item into review before the learner had met it,
   * with the whole suite green. Invariants §1: the question is "did the learner
   * see it", not "does this id resolve".
   *
   * This is a faithful port of the batch's walk rather than a looser version of
   * it, because a looser one would pass on exactly the case it is for. */
  const tranches = L!.deckTranche ?? [];
  const acts = L!.acts ?? [];
  const known = new Set(seed.items.map((i) => i.id));
  const shown = new Set<string>();
  for (let i = 0; i < acts.length; i += 1) {
    for (const sid of acts[i]!.sections) {
      const s = sec(sid);
      const strings = display(s);
      for (const str of strings) {
        for (const id of known) if (str.includes(id)) shown.add(id);
      }
      for (const id of (s as { itemIds?: string[] }).itemIds ?? []) shown.add(id);
      /* An item is SHOWN when its `fr` reaches a screen in that act. */
      for (const str of strings) {
        for (const id of L!.itemIds ?? []) {
          const r = byIdItem.get(id);
          if (r && str.includes(r.fr)) shown.add(id);
        }
      }
    }
    for (const id of tranches[i]!) {
      ok(shown.has(id), `tranche ${i + 1} releases ${id} « ${byIdItem.get(id)?.fr} » and no act up to and including act ${i + 1} put it on a screen`);
    }
  }
});

test('and inside the six permitted sections an error is NEVER the correct option', { skip: noLesson }, () => {
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
    ok(!(answer && (usesWrongSet(answer) || usesLeursAsPronoun(answer))),
      `an error is offered as the CORRECT option: « ${answer} »`);
  }
});

test('the lesson does show the errors it exists to prevent, in every permitted place', { skip: noLesson }, () => {
  for (const id of WRONG_FORM_SECTIONS) {
    ok(display(sec(id)).some((s) => usesWrongSet(s) || usesLeursAsPronoun(s)),
      `${id} is permitted to show an error and does not show one`);
  }
  ok(ALL.some((s) => s.includes(WRONG_SET_TRAP)), `the lesson never shows « ${WRONG_SET_TRAP} »`);
  ok(ALL.some((s) => s.includes(LEURS_TRAP)), `the lesson never shows « ${LEURS_TRAP} »`);
  /* AND THE TRAP'S OWN CARDS CARRY IT.
   *
   * MUTATION-FOUND WEAKNESS. The first version was satisfied by the trapDrill's
   * gated drill options, so removing the error from the four teaching CARDS
   * passed. The cards are the teaching and the drill is the check, and it is the
   * cards the audio step reads aloud, so the error has to be on one of them. */
  const cards = (sec('s12-trap') as { cards?: { fr?: string }[] }).cards ?? [];
  ok(cards.some((c) => usesLeursAsPronoun(c.fr ?? '')),
    'no trapDrill CARD shows the error, so the audio step never reads it and the learner only meets it as a wrong option');
  ok(cards[0]!.fr === LEURS_TRAP, `the trap's first card is « ${cards[0]!.fr} » and it should open on the error`);
});

test('THE SCENE shows the error and never marks it right', { skip: noLesson }, () => {
  /* a2.06's scene is NOT on the allowlist and this one is, because a2.06's dies
   * on a sentence that STOPS and this one dies on a sentence that FINISHES. A
   * complete wrong sentence is exactly what the guard is built to find. */
  const beats = (sec('s01-scene') as {
    beats?: { kind?: string; from?: string; fr?: string; wrong?: { fr?: string }; right?: { fr?: string }; options?: { fr?: string; outcome?: string }[] }[];
  }).beats ?? [];
  const said = beats.find((b) => b.kind === 'bubble' && b.from === 'you');
  ok(said && usesWrongSet(said.fr ?? ''), 'the scene\'s learner line is not the error this lesson exists to prevent');
  const brk = beats.find((b) => b.kind === 'break');
  ok(brk, 'the scene has no break beat');
  ok(usesWrongSet(brk!.wrong?.fr ?? ''), "the break's wrong half is not the error");
  ok(!usesWrongSet(brk!.right?.fr ?? ''), `the break's RIGHT half « ${brk!.right?.fr} » is the error`);
  const choice = beats.find((b) => b.kind === 'choice');
  ok(choice, 'the scene has no choice beat');
  for (const o of choice!.options ?? []) {
    ok(!(o.outcome === 'works' && usesWrongSet(o.fr ?? '')), `the scene marks « ${o.fr} » as the sentence that works and it is the error`);
  }
  ok((choice!.options ?? []).some((o) => o.outcome === 'breaks' && usesWrongSet(o.fr ?? '')),
    'the scene never offers the error as the option that breaks');
});

test('no authored row carries leurs unless it is the possessive', { skip: noLesson }, () => {
  /* The row-level version of the same claim. `leurs` is legal on exactly three
   * rows, all of them a1.17's word doing a1.17's job. */
  const withLeurs = MINE.filter((i) => hasPhrase(i.fr, 'leurs'));
  ok(withLeurs.length >= 1, 'no authored row carries « leurs », so the s that DOES belong is never shown');
  for (const i of withLeurs) {
    ok(!usesLeursAsPronoun(i.fr), `${i.id} « ${i.fr} » puts an s on the pronoun`);
    ok(/leurs\s+(clés|maisons|enfants|amis|affaires)/iu.test(i.fr), `${i.id} « ${i.fr} » carries leurs and no plural thing behind it`);
  }
  for (const i of MINE) ok(!usesWrongSet(i.fr), `${i.id} « ${i.fr} » uses a2.06's words for a person behind à`);
});

/* ══════════════════════════════════════════════════════════════════════════
 *  5. THE NEIGHBOURS, RESERVED
 * ═══════════════════════════════════════════════════════════════════════ */

const Y_PRONOUN = /(?<![\p{L}\p{N}'’-])(j'y|n'y|il y va|elle y va|on y va|y aller|vas-y|y penser)(?![\p{L}\p{N}'’-])/iu;
const EN_PRONOUN = /(?<![\p{L}\p{N}-])(j'en|n'en|tu en as|il en a|elle en a|on en a|en veux|en prends)(?![\p{L}\p{N}'’-])/iu;
/** `nous` AND `vous` ARE NOT IN THE FIRST SET. They are the two forms that are
 *  subject and object with the same spelling, so a version holding them fires on
 *  « Nous leur parlons. » — an authored row with exactly one pronoun in it. That
 *  is corrections §14.4 inside French rather than across the two languages, and
 *  the first draft of this guard shipped with the defect. */
const TWO_PRONOUNS =
  /(?<![\p{L}\p{N}'’-])((le|la|les)\s+(lui|leur)|(me|te|se)\s+(le|la|les)|(le|la|les|lui|leur)\s+(y|en))(?![\p{L}\p{N}'’-])\s+\p{L}/iu;

test('the y/en guard fires on the pronoun and NOT on the preposition or the English', () => {
  for (const s of ["J'y vais.", "J'en veux deux.", 'Tu en as ?']) {
    ok(Y_PRONOUN.test(s) || EN_PRONOUN.test(s), `the guard does not fire on « ${s} »`);
  }
  for (const s of [
    /* `en` as a preposition, which is everywhere in the corpus. */
    'Je leur parle en français.', 'en français', 'Elle est en retard.', 'Il arrive toujours en avance.',
    /* AND THE ENGLISH, which is where a letters-based version dies. */
    'You already know the words, and the only new thing is which ones.',
    'Every question is about somebody who is not in the room.',
    'Yes, I talked to him yesterday.',
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

test('the two-pronoun guard fires on the real thing and not on a subject nous', () => {
  for (const s of ['Tu le lui donnes tout de suite.', 'Je ne le lui ai pas encore donné.',
    'Nous allons le leur expliquer calmement.', 'Il me le donne demain.']) {
    ok(TWO_PRONOUNS.test(s), `the two-pronoun guard does not fire on « ${s} »`);
  }
  for (const s of ['Nous leur parlons.', 'Vous leur écrivez.', 'Nous lui obéissons.',
    'Je leur montre la photo.', 'Je leur montre leur maison.', 'Je leur donne les clés.']) {
    ok(!TWO_PRONOUNS.test(s), `the two-pronoun guard fires on « ${s} », which carries exactly one pronoun`);
  }
});

test('no multiple-pronoun sentence appears, reserving a2.25', { skip: noLesson }, () => {
  for (const s of UNIQUE) ok(!TWO_PRONOUNS.test(s), `two object pronouns in one clause: « ${s.slice(0, 80)} »`);
  for (const i of MINE) ok(!TWO_PRONOUNS.test(i.fr), `${i.id} « ${i.fr} » carries two object pronouns`);
  /* THE TEMPTATION IS MEASURED AND IT IS NOT MEASURED HERE. Postgres publishes
   * THREE two-pronoun sentences inside this very theme — « Tu le lui donnes
   * tout de suite. » (fr.a1.pronoms-essentiels.131), « Je ne le lui ai pas
   * encore donné. » (.180) and « Nous allons le leur expliquer calmement. »
   * (.182) — so the corpus would have handed one over on request. NONE OF THE
   * THREE IS IN THE SEED CUT, so a check written against `seed.items` measures
   * nothing and passes for the wrong reason. The three are literals in the
   * MUST_FIRE list of the test above instead, which is where the evidence
   * belongs. */
});

test('a2.25 and a2.06 are both named, and a1.17 is credited', { skip: noLesson }, () => {
  ok(ALL.some((s) => namesUnitLabel(s, 'a2.25')), 'a2.25 is named nowhere, so the next lesson is not handed off to');
  ok(ALL.some((s) => namesUnitLabel(s, 'a2.06')), 'a2.06 is the prerequisite and is named nowhere');
  ok(ALL.some((s) => namesUnitLabel(s, 'a1.17')), 'a1.17 owns the possessive and is named nowhere');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  6. THE NEGATION ARC
 * ═══════════════════════════════════════════════════════════════════════ */

test('the negation string matches a2.06\'s, and the three inherited lines are still three', { skip: noLesson }, () => {
  ok(A118_REFRAME !== A219_REFRAME, 'a1.18 and a2.19 have been harmonised into one line');
  ok(A219_REFRAME !== A206_NEGATION, "a2.19's line and a2.06's extension have been harmonised");
  ok(ALL.some((s) => s.includes(A219_REFRAME)), "a2.19's line is not quoted verbatim");
  ok(ALL.some((s) => s.includes(A118_REFRAME)), "a1.18's line is not quoted verbatim");
  ok(ALL.some((s) => s.includes(A206_NEGATION)), "a2.06's extension is not quoted verbatim");
  /* AND a2.06 IS NAMED BESIDE IT, IN THE SECTION THAT TEACHES IT.
   *
   * MUTATION-FOUND WEAKNESS. The first version asked only whether SOME string
   * anywhere in the lesson quoted the extension and named a2.06, so stripping
   * the credit out of the negation deck passed on the strength of the glossary
   * entry. That is a2.06's own HOLE 1 in a new place: an assertion satisfied by
   * a different sentence is asserting that something exists rather than that
   * this claim is made. The credit has to be where the learner meets the rule. */
  const negation = display(sec('s15-negation'));
  ok(negation.some((s) => s.includes(A206_NEGATION)), 's15-negation does not carry the sentence it borrows');
  ok(negation.filter((s) => s.includes(A206_NEGATION)).some((s) => namesUnitLabel(s, 'a2.06')),
    "the negation deck quotes a2.06's sentence and does not name a2.06 beside it");
});

test('the inherited negation strings still match the SHIPPED neighbours', { skip: noLesson }, () => {
  const bodyOf = (id: string) => {
    const l = seed.lessons.find((x) => x.id === id);
    return l ? display(l).join('\n') : '';
  };
  const direct = bodyOf('a2.06.l1');
  if (direct) ok(direct.includes(A206_NEGATION), 'a2.06 no longer carries the extension this lesson quotes');
  const futur = bodyOf('a2.19.l1');
  if (futur) ok(futur.includes(A219_REFRAME), 'a2.19 no longer carries the line this lesson quotes');
  const neg = bodyOf('a1.18.l1');
  if (neg) ok(neg.includes(A118_REFRAME), 'a1.18 no longer carries the line this lesson quotes');
  /* AND a2.06's POSITION RULE, re-read off a2.06 rather than trusted as a
   * literal. Three lessons should be one rule and this is where a drift shows. */
  if (direct) ok(direct.includes(POSITION_RULE), 'a2.06 no longer carries the position rule this lesson quotes eight times');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  7. WHAT a2.23 PROMISED, DELIVERED
 * ═══════════════════════════════════════════════════════════════════════ */

test("a2.23's shipped pointer is honoured, in one section and by name", { skip: noLesson }, () => {
  /* a2.23's roundup reads « … and the reason the ending disappears on this
   * screen is waiting there too. » A learner who arrives and finds nothing has
   * been sent somewhere that does not exist. */
  const s16 = display(sec('s16-ending'));
  ok(ALL.some((s) => s.includes(ENDING_RULE)), 'the ending rule is not stated verbatim anywhere');
  ok(s16.some((s) => s.includes(ENDING_RULE)), 's16-ending does not state the rule it exists for');
  ok(s16.some((s) => namesUnitLabel(s, 'a2.23')), 's16-ending does not name a2.23, which pointed the learner here');
  ok(s16.some((s) => s.includes(A223_POINTER_TAIL)),
    `s16-ending does not quote a2.23's promise « ${A223_POINTER_TAIL} » verbatim`);
  ok(s16.some((s) => s.includes("Elle s'est lavé les mains.")), "s16-ending does not show a2.23's own sentence");
  /* AND THE POINTER IS STILL THERE ON a2.23's SIDE. If somebody deletes it, this
   * section is answering a question nobody asked any more. */
  const a223 = seed.lessons.find((l) => l.id === 'a2.23.l1');
  if (a223) ok(display(a223).join('\n').includes(A223_POINTER_TAIL), 'a2.23 no longer points at this lesson');
});

test('the ending is ONE ACT and recognition only', { skip: noLesson }, () => {
  const act5 = (L!.acts ?? []).find((a) => a.id === 'act5');
  ok(act5, 'act5 is missing and it is where the ending lives');
  ok(act5!.sections.length < 6, `the ending act has ${act5!.sections.length} sections against the Owns' 6`);
  /* NO AUTHORED ROW PUTS AN ENDING ON THE SECOND WORD AFTER lui OR leur, which
   * is the thing the rule says never happens. */
  for (const i of MINE) {
    ok(!/(lui|leur)\s+(?:ne\s+)?(?:ai|as|a|avons|avez|ont)\s+\S*(ée|és|ées)(?![\p{L}])/iu.test(i.fr),
      `${i.id} « ${i.fr} » puts an ending on the second word after lui or leur`);
  }
  /* AND NO TYPED QUESTION ASKS FOR ONE. fold() keeps a final -e so the app could
   * mark it, and asking would install the doubt the section exists to remove. */
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz') as never);
  for (const q of qs) {
    if (q.format !== 'typeIn' && q.format !== 'errorSpot') continue;
    for (const a of q.accept ?? []) {
      ok(!/(lui|leur)\s+(?:ai|as|a|avons|avez|ont)\s+\S*(ée|és|ées)(?![\p{L}])/iu.test(a),
        `a typed question accepts an agreed participle after lui or leur: « ${a} »`);
    }
  }
});

/* ══════════════════════════════════════════════════════════════════════════
 *  8. THE SIXTH OCCURRENCE, AND THE STRESSED PRONOUN
 * ═══════════════════════════════════════════════════════════════════════ */

test("a2.02's term is verbatim, this instance is marked as the sixth, and a2.06 is credited", { skip: noLesson }, () => {
  const quoting = ALL.filter((s) => s.includes(WHAT_FOLLOWS));
  ok(quoting.length >= 1, `a2.02's « ${WHAT_FOLLOWS} » is quoted nowhere`);
  ok(quoting.some((s) => namesUnitLabel(s, 'a2.02')), 'the shape is quoted and a2.02 is not named beside it');
  ok(ALL.some((s) => /sixth/iu.test(s)), 'the lesson does not say this is the sixth occurrence, so it reads as a new observation');
  ok(ALL.some((s) => /sixth|fifth/iu.test(s) && namesUnitLabel(s, 'a2.06')),
    "the sixth occurrence is named and a2.06's fifth is not credited beside it");
  ok(ALL.some((s) => s.includes(STRESSED_RULE)), 'the stressed-pronoun rule is not stated verbatim');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  9. THE QUIZ
 * ═══════════════════════════════════════════════════════════════════════ */

test('every question has a why and a ref that resolves', { skip: noLesson }, () => {
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz') as never);
  for (const q of qs) {
    ok(q.why, `no why: ${q.q}`);
    ok(q.ref, `no ref: ${q.q}`);
    ok(L!.sections.some((s) => s.id === q.ref), `refs ${q.ref}, which is not a section`);
  }
});

test('at most half mcq, and free text is the backbone because fold() keeps the -s', { skip: noLesson }, () => {
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz') as never);
  const mcq = qs.filter((q) => q.format === 'mcq').length;
  ok(mcq <= qs.length / 2, `${mcq} of ${qs.length} are mcq`);
  const free = qs.filter((q) => q.format === 'typeIn' || q.format === 'errorSpot').length;
  ok(free >= 12, `only ${free} free-text questions, and the central trap of this lesson is a written -s`);
  /* THE CLAIM THAT SHAPE RESTS ON, MEASURED THROUGH THE REAL FUNCTION. */
  ok(fold('Je leur parle.') !== fold('Je leurs parle.'),
    'fold() collapses leur and leurs, so the central trap is NOT testable in writing and the whole quiz shape is wrong');
});

test('every free-text question accepts the answer it displays', { skip: noLesson }, () => {
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz') as never);
  const owned = new Set(MINE.map((i) => i.fr));
  for (const q of qs) {
    for (const a of q.accept ?? []) {
      ok(matchesAccept(a, q.accept!), `« ${a} » is not accepted by its own accept list: ${q.q}`);
      if (/\s/u.test(a)) ok(owned.has(a), `« ${a} » is a free-text answer and is not a sentence this lesson owns`);
    }
  }
});

test('the accent on à is asked as an mcq, because no typed surface can test it', { skip: noLesson }, () => {
  /* Corrections §5, and the brief calls this « the single most tempting question
   * in this lesson and you cannot write it ». Measured rather than believed. */
  ok(fold('Je parle à Marie.') === fold('Je parle a Marie.'),
    'fold() no longer collapses the accent, so the untestability claim is wrong and the question could have been typed');
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz') as never);
  const accent = qs.find((q) => /the little word here is à/iu.test(q.q));
  ok(accent, 'the accent limit is never put to the learner');
  strictEqual(accent!.format, 'mcq', 'only an mcq can test a diacritic');
  const opts = accent!.opts ?? [];
  ok(opts.some((o) => o.includes('à')) && opts.some((o) => /\ba\s/u.test(o)),
    'the accent question does not offer both the accented and the unaccented form');
  /* AND NO TYPED QUESTION TURNS ON IT ANYWHERE. */
  for (const q of qs) {
    if (q.format !== 'typeIn' && q.format !== 'errorSpot') continue;
    ok(!/accent|grave/iu.test(q.q), `a typed question turns on the accent: ${q.q}`);
  }
});

/** THE GROUP THAT MATTERS IS THIS LESSON'S OWN TRAP. Corrections §5: an ear
 *  question offering two members of one group has NO correct answer. */
const HOMOPHONE_FORMS: readonly (readonly string[])[] = [
  ['leur', 'leurs'],
  ['parlé', 'parlée', 'parlés', 'parlées'],
  ['écrit', 'écrite', 'écrits', 'écrites'],
  ['répondu', 'répondue', 'répondus', 'répondues'],
];

test('NO ear question offers two options that are one sound', { skip: noLesson }, () => {
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz') as never);
  const ear = qs.filter((q) => q.format === 'listenChoose');
  ok(ear.length >= 1, 'the exam has no ear question, and lui against leur is genuinely audible');
  ok(ear.length <= 2, `${ear.length} ear questions, and the brief allows two at most because only one contrast is audible`);
  for (const q of ear) {
    for (const g of HOMOPHONE_FORMS) {
      const hits = (q.opts ?? []).filter((o) => g.some((f) => o === f || hasPhrase(o, f)));
      ok(hits.length <= 1, `an ear question offers « ${hits.join(' » and « ')} », which are one sound`);
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
  strictEqual(triggers.size, 4, `${triggers.size} error triggers`);
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
 *  10. THE DICTÉE, THE SPEAK LIST AND THE ROLE PLAY
 * ═══════════════════════════════════════════════════════════════════════ */

test('every dictée line is in LETTERS mode through the real dicteeMode', { skip: noLesson }, () => {
  const ids = (sec('s18-dictation') as { itemIds?: string[] }).itemIds ?? [];
  ok(ids.length >= 10, `the dictée targets ${ids.length} lines`);
  for (const id of ids) {
    const r = byIdItem.get(id);
    ok(r, `the dictée targets ${id}, which is not in the seed`);
    strictEqual(dicteeMode(r!.fr), 'letters',
      `« ${r!.fr} » is in WORD mode, which hands every word over pre-spelled and gives away the SPELLING`);
    ok(r!.drills.includes('dictation'), `${id} is a dictée target with no dictation drill`);
  }
});

test('the dictée covers both pronouns and BOTH possessive forms', { skip: noLesson }, () => {
  /* It is the only surface that makes a learner build the -s decision from
   * nothing, so it has to ask for the s that belongs and the one that never
   * can, in the same exercise.
   *
   * ── MUTATION-FOUND HOLE, AND THIS ONE WAS REAL ────────────────────────
   *
   * The first version asserted a row carrying `leur` and not `leurs`, and
   * called that "the singular possessive". IT IS NOT: « Je leur parle. » —
   * a PRONOUN row, and the first line of the dictée — satisfies it exactly.
   * So a mutation that removed « Voici leur maison. » from the dictée
   * altogether passed, and the test was claiming coverage it did not have.
   *
   * The possessive is the form with a THING behind it, so that is what the
   * assertion looks for. Same shape as the row-level guard above. */
  const frs = ((sec('s18-dictation') as { itemIds?: string[] }).itemIds ?? []).map((id) => byIdItem.get(id)!.fr);
  ok(frs.some((f) => /\blui\b/u.test(f)), 'the dictée asks for no « lui »');
  ok(frs.some((f) => /\bleur\s+(parle|écris|téléphone|réponds|montre|donne|dis|parlons|écrivez)/u.test(f)),
    'the dictée asks for no « leur » as a PRONOUN');
  ok(frs.some((f) => /\bleur\s+(maison|clés|photos|enfants|amis|affaires)\b/u.test(f)),
    'the dictée asks for no SINGULAR possessive, and a bare leur is satisfied by the pronoun rows');
  ok(frs.some((f) => /\bleurs\s+(maisons|clés|photos|enfants|amis|affaires)\b/u.test(f)),
    'the dictée asks for no « leurs », so the -s that DOES belong is never written');
  ok(frs.some((f) => /^Je ne /u.test(f)), 'the dictée asks for no negative');
  ok(frs.some((f) => /\bai\b/u.test(f)), 'the dictée asks for no past');
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
 *  11. TRANCHES, ITEMS, AND EVERY ITEM ON A SCREEN
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
  for (const s of L!.sections) {
    for (const id of (s as { itemIds?: string[] }).itemIds ?? []) {
      ok(byIdItem.has(id), `${s.id} names ${id}, which is not in the seed. The card would draw blank`);
    }
  }
});

test('the seed carries every imported row this lesson leans on', { skip: noLesson }, () => {
  /* Corrections §10: `pronoms-essentiels` holds 584 rows in Postgres and the
   * seed carried 52 before this build. Seven of the eighteen imports were
   * outside the cut. */
  for (const id of [
    'fr.sons.verbes-essentiels.015', 'fr.a2.verbes.020', 'fr.a2.verbes.019',
    'fr.a1.verbes-essentiels.003', 'fr.sons.verbes-essentiels.005',
    'fr.sons.verbes-essentiels.054', 'fr.sons.verbes-essentiels.053',
    'fr.a1.dictee.090', 'fr.sons.verbes-essentiels.046', 'fr.sons.verbes-essentiels.013',
    'fr.a2.pronoms-essentiels.017', 'fr.a2.pronoms-essentiels.025',
    'fr.a2.pronoms-essentiels.190', 'fr.a2.pronoms-essentiels.196',
    'fr.a1.pronoms-essentiels.126', 'fr.a2.pronoms-essentiels.020',
    'fr.a2.pronoms-essentiels.026', 'fr.a2.verbes.807',
  ]) {
    ok(byIdItem.has(id), `${id} is imported by this lesson and is not in the seed. Its card would draw blank`);
  }
  /* AND a2.06's TWO FRAMES ARE a2.06's ROWS, not copies. « Je le vois. » beside
   * « Je lui parle. » is a cross-lesson claim only if it is literally the same
   * row the other lesson authored. */
  strictEqual(byIdItem.get('fr.a2.pronoms-essentiels.190')!.fr, 'Je le vois.');
  strictEqual(byIdItem.get('fr.a2.pronoms-essentiels.196')!.fr, 'Je la connais.');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  12. THE RESPELLING REPAIRS
 * ═══════════════════════════════════════════════════════════════════════ */

/** ONE TABLE, corrections §14.1, with the two reasons for `half !== to` kept
 *  SEPARATE. Written out by hand here rather than imported.
 *
 *  SIX BLIND ROWS, WHERE a2.06 HAD ZERO. `ray-POHNDR` is CLEAN through the real
 *  function, so an author who repairs what the checker reports repairs nothing
 *  and gets a green report. The brief predicted the defect and predicted the
 *  wrong shape for it: it calls répondre a MIXED row with one visible nasal and
 *  one invisible one, and it has exactly one nasal and no visible one. */
const REPAIRS = [
  { id: 'fr.sons.verbes-essentiels.031', fr: 'répondre', from: 'ray-POHNDR', half: 'ray-POHNDR', to: 'ray-POHⁿDR', blind: true, house: false },
  { id: 'fr.a1.dictee.108', fr: 'répondre', from: 'ray-POHNDR', half: 'ray-POHNDR', to: 'ray-POHⁿDR', blind: true, house: false },
  { id: 'fr.a1.douane-et-immigration.075', fr: 'répondre', from: 'ray-POHNDR', half: 'ray-POHNDR', to: 'ray-POHⁿDR', blind: true, house: false },
  { id: 'fr.a2.disciplines.055', fr: 'répondre', from: 'ray-POHNDR', half: 'ray-POHNDR', to: 'ray-POHⁿDR', blind: true, house: false },
  { id: 'fr.a2.examens-et-diplomes.089', fr: 'répondre', from: 'ray-POHNDR', half: 'ray-POHNDR', to: 'ray-POHⁿDR', blind: true, house: false },
  { id: 'fr.a2.internet.083', fr: 'répondre', from: 'ray-POHNDR', half: 'ray-POHNDR', to: 'ray-POHⁿDR', blind: true, house: false },
  { id: 'fr.sons.verbes-essentiels.018', fr: 'demander', from: 'duh-mahn-DAY', half: 'duh-mahⁿ-DAY', to: 'duh-mahⁿ-DAY', blind: false, house: false },
  { id: 'fr.a1.douane-et-immigration.076', fr: 'demander', from: 'duh-mahn-DAY', half: 'duh-mahⁿ-DAY', to: 'duh-mahⁿ-DAY', blind: false, house: false },
  { id: 'fr.a2.bureau.088', fr: 'demander', from: 'duh-mahn-DAY', half: 'duh-mahⁿ-DAY', to: 'duh-mahⁿ-DAY', blind: false, house: false },
  { id: 'fr.sons.faux-amis.022', fr: 'demander', from: 'duh-mahn-DAY', half: 'duh-mahⁿ-DAY', to: 'duh-mahⁿ-DAY', blind: false, house: false },
  { id: 'fr.a1.douane-et-immigration.059', fr: 'montrer', from: 'mohn-TRAY', half: 'mohⁿ-TRAY', to: 'mohⁿ-TRAY', blind: false, house: false },
  { id: 'fr.sons.verbes-essentiels.046', fr: 'envoyer', from: 'ahn-vwah-YAY', half: 'ahⁿ-vwah-YAY', to: 'ahⁿ-vwah-YAY', blind: false, house: false },
  { id: 'fr.a2.verbes.023', fr: 'envoyer', from: 'ahn-vwah-YAY', half: 'ahⁿ-vwah-YAY', to: 'ahⁿ-vwah-YAY', blind: false, house: false },
  { id: 'fr.a1.rp-technologie.043', fr: 'envoyer', from: 'ahn-vwa-YAY', half: 'ahⁿ-vwa-YAY', to: 'ahⁿ-vwah-YAY', blind: false, house: true },
  { id: 'fr.a2.internet.081', fr: 'envoyer', from: 'ahn-vwa-YAY', half: 'ahⁿ-vwa-YAY', to: 'ahⁿ-vwah-YAY', blind: false, house: true },
] as const;

test('every repair is measured through the real function, by name', () => {
  strictEqual(REPAIRS.length, 15, 'the repair table is not fifteen rows');
  for (const r of REPAIRS) {
    ok(!hasPlainNasalFor(r.fr, r.to), `${r.id}: the repair target « ${r.to} » is still flagged`);
    ok(!hasPlainNasalFor(r.fr, r.half), `${r.id}: the minimal repair « ${r.half} » is still flagged`);
    /* CORRECTIONS §14.1's ASSERTION. Two different reasons for one symptom, kept
     * as separate mutually exclusive fields. */
    strictEqual(r.half !== r.to, r.blind || r.house,
      `${r.id}: half !== to is ${r.half !== r.to} and (blind || house) is ${r.blind || r.house}`);
    if (r.blind) {
      ok(!hasPlainNasalFor(r.fr, r.from), `${r.id} is filed as blind and the checker flags its stored value`);
      strictEqual(r.half, r.from, `${r.id} is blind, so repairing what the checker reports changes nothing`);
    }
    if (!r.blind && !r.house) {
      ok(hasPlainNasalFor(r.fr, r.from), `${r.id} is filed as neither blind nor house and its stored value is not flagged`);
    }
  }
});

test('SIX rows are blind, where a2.06 had zero, and every one of them is répondre', () => {
  const blind = REPAIRS.filter((r) => r.blind);
  strictEqual(blind.length, 6, 'the blind count has moved. Re-measure rather than editing it');
  for (const b of blind) strictEqual(b.fr, 'répondre', `${b.id} is blind and is not répondre`);
  /* THE MEASUREMENT THE WHOLE FINDING RESTS ON. If the checker ever learns to
   * see a nasal followed by a consonant inside a token, this goes red and the
   * corpus header needs rewriting rather than this test relaxing. */
  ok(!hasPlainNasalFor('répondre', 'ray-POHNDR'),
    '« ray-POHNDR » is now FLAGGED, so it is not blind and corrections §6 has been fixed');
});

test('the two FALSE POSITIVES are still false positives', () => {
  /* Corrections §6 asks every build to look for the real-/n/ false positive and
   * to report the absence if it finds none. a2.06 looked and found none. This
   * build found two, and one is on its headline verb, so nine cards print
   * `tay-lay-FON` rather than `tay-lay-FOHN` because of this measurement. */
  ok(hasPlainNasalFor('téléphone', 'tay-lay-FOHN'), '« tay-lay-FOHN » is no longer flagged, so it is no longer a false positive');
  ok(!hasPlainNasalFor('téléphone', 'tay-lay-FON'), '« tay-lay-FON » is flagged, and nine cards print it');
  ok(hasPlainNasalFor('donne', 'DOHN'), '« DOHN » is no longer flagged');
  ok(!hasPlainNasalFor('donne', 'DON'), '« DON » is flagged');
});

test('the authored rows actually use the false-positive workarounds', { skip: noLesson }, () => {
  const fon = MINE.filter((i) => i.respell!.includes('tay-lay-FON'));
  ok(fon.length >= 3, `${fon.length} rows print tay-lay-FON, so the finding is documentation rather than a repair`);
  const don = MINE.filter((i) => i.respell!.includes('DON') && !i.respell!.includes('DOHN'));
  ok(don.length >= 1, 'no row prints DON');
});

test('the repaired rows that are IN the seed hold the repaired value', { skip: noLesson }, () => {
  /* Fourteen of the fifteen are outside the cut. ONE is repaired in place and
   * ONE MORE arrives repaired by the CARRY path, which no earlier build in this
   * band has had: all four published `envoyer` rows are flagged, so the row this
   * lesson imports is itself a repair target. */
  const inSeed = REPAIRS.filter((r) => byIdItem.has(r.id));
  strictEqual(inSeed.length, 2, `${inSeed.length} repair targets are in the seed cut`);
  for (const r of inSeed) {
    strictEqual(byIdItem.get(r.id)!.respell, r.to, `${r.id} holds the unrepaired value`);
    ok(!hasPlainNasalFor(r.fr, byIdItem.get(r.id)!.respell!), `${r.id} is still flagged in the seed`);
  }
  const envoyer = byIdItem.get('fr.sons.verbes-essentiels.046');
  ok(envoyer, 'the envoyer row was not carried');
  strictEqual(envoyer!.respell, 'ahⁿ-vwah-YAY', 'the carried envoyer row holds the unrepaired value');
});

/* ══════════════════════════════════════════════════════════════════════════
 *  13. HOUSE COPY AND THE JARGON LINE
 * ═══════════════════════════════════════════════════════════════════════ */

const JARGON_NOUNS = [
  'indirect object', 'indirect objects', 'object pronoun', 'object pronouns',
  'clitic', 'clitics', 'antecedent', 'antecedents', 'anaphora', 'anaphoras',
  'possessive adjective', 'possessive adjectives',
  'possessive determiner', 'possessive determiners',
];
const JARGON_ADJECTIVES = [
  'dative', 'accusative', 'nominative', 'oblique', 'proclitic', 'enclitic',
  'ditransitive', 'transitive', 'intransitive', 'preverbal', 'postverbal',
  'disjunctive', 'tonic', 'syntax', 'syntactic', 'valency',
];
const JARGON = [...JARGON_NOUNS, ...JARGON_ADJECTIVES];

test('every countable jargon noun carries its -s plural', () => {
  /* Corrections §13, and a2.06 §7.2 measured that the rule cannot be applied to
   * every entry — « accusatives » is not English — so there are two lists. */
  for (const j of JARGON_NOUNS) {
    if (j.endsWith('s')) continue;
    ok(JARGON_NOUNS.includes(`${j}s`), `JARGON_NOUNS holds « ${j} » and not « ${j}s »`);
  }
  for (const j of JARGON_ADJECTIVES) ok(!JARGON_NOUNS.includes(j), `« ${j} » is on both lists`);
});

test('no grammar jargon on any learner surface, over a display() walk', { skip: noLesson }, () => {
  const titleEn = L!.overview?.titleEn ?? '';
  strictEqual(titleEn, 'Indirect Object Pronouns', 'overview.titleEn is not the unit name, so the exemption below is not defensible');
  /* THIS UNIT'S NAME CONTAINS BOTH PHRASES a2.06 REFUSED OUTRIGHT, which is why
   * the exemption is one exact string rather than a phrase allowance. */
  ok(/indirect object/i.test(titleEn) && /object pronoun/i.test(titleEn),
    'the exempt title no longer contains both compounds, so the exemption is wider than it needs to be');
  for (const s of UNIQUE) {
    if (s === titleEn) continue;
    for (const j of JARGON) ok(!hasPhrase(s, j), `grammar jargon on a learner surface: « ${j} » in « ${s.slice(0, 80)} »`);
  }
});

test('the PLAIN phrase outnumbers the technical one, which is §14.5 method not a ban', { skip: noLesson }, () => {
  const plain = ALL.filter((s) => hasPhrase(s, PLAIN_PHRASE) || hasPhrase(s, PLAIN_TARGET)).length;
  const technical = ALL.filter((s) => hasPhrase(s, 'indirect object') || hasPhrase(s, 'object pronoun')).length;
  strictEqual(technical, 1, `the technical compounds appear on ${technical} strings and the only permitted one is overview.titleEn`);
  ok(plain > technical, `the plain phrase appears ${plain} times and the technical ones ${technical}`);
  /* AND `pronoun` IS HOUSE VOCABULARY, measured by a2.06 at 233 uses across the
   * shipped seed. Banning it would be the build inventing a rule (§14.5). */
  ok(ALL.some((s) => hasPhrase(s, 'pronoun')), '« pronoun » appears nowhere, and it is house vocabulary on 233 shipped cards');
});

test('no em dash, no banned word, no double stop, on any learner surface', { skip: noLesson }, () => {
  for (const s of UNIQUE) {
    ok(!/[—–]/u.test(s), `em dash: « ${s.slice(0, 80)} »`);
    /* SUBSTRING, NOT A WORD BOUNDARY. a2.06 §7.1: the band's copy uses `\b` and
     * therefore misses `dishonest`, and only the seed-wide test caught it. */
    ok(!/honest/i.test(s), `banned word: « ${s.slice(0, 80)} »`);
    ok(!/[.]\s*[.!?,;:]/u.test(s), `double stop: « ${s.slice(0, 80)} »`);
  }
});

test('the intro is present, states the Owns, and is free of jargon', { skip: noLesson }, () => {
  /* CORRECTIONS §9: `intro` is drawn on the lesson overview card AND the lesson
   * cover, and a2.11 shipped « third person » there in v1 with every host gate
   * green, because the walk read sections + sheets + terms and not this. */
  const intro = L!.intro ?? '';
  ok(intro.length > 100, 'the lesson has no intro, and it is drawn on two screens');
  ok(intro.includes('behind à'), 'the intro does not state where the person sits');
  ok(/ten verbs/i.test(intro), 'the intro does not say the list is ten verbs long, and the list is the Owns');
  for (const j of JARGON) ok(!hasPhrase(intro, j), `grammar jargon in the intro: « ${j} »`);
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
 *  14. THE SEED-WIDE CONTRACTS AND THE LAYOUT TRAPS
 * ═══════════════════════════════════════════════════════════════════════ */

test('commonErrors carries swipe, or it draws a blank screen', { skip: noLesson }, () => {
  const ce = sec('s14-errors') as { swipe?: boolean; errors?: { wrong: string; right: string; why: string }[] };
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
  const td = sec('s12-trap') as {
    swipe?: boolean; size?: string; audio?: { recordingId?: string }; say?: string;
    rule?: unknown; steps?: { kind: string; gate?: boolean }[]; cards?: { fr?: string }[]; drill?: unknown[];
  };
  strictEqual(td.swipe, true, 'the trapDrill has no swipe');
  ok(!td.size, 'the trapDrill carries a size, and size comes OFF a stepped trapDrill');
  ok(td.audio, 'the trapDrill has no audio spec');
  ok(td.say, 'the trapDrill has no say');
  ok(td.rule, 'the trapDrill has no rule block');
  deepStrictEqual((td.steps ?? []).map((s) => s.kind), ['rule', 'cards', 'audio', 'drill']);
  ok((td.steps ?? []).find((s) => s.kind === 'drill')?.gate, "the trapDrill's drill step is not gated");
  ok((td.cards ?? []).length >= 3 && (td.drill ?? []).length >= 4, 'the trapDrill is thin');
  /* THE AUDIO STEP PLAYS EACH CARD's `fr`, so the take must contain those lines.
   * The ledger sweep flags this and the contract test does not check it. */
  const brief = (L!.audio?.recorded ?? []).find((r) => r.id === td.audio?.recordingId);
  ok(brief, `the trapDrill points at ${td.audio?.recordingId} and no audio brief declares it`);
  for (const c of td.cards ?? []) {
    ok(brief!.desc.includes(c.fr ?? ''), `the audio step plays « ${c.fr} » and the brief does not name that line`);
  }
});

test("the widened walk reaches the trapDrill's gated drill, which the band's does not", { skip: noLesson }, () => {
  /* THE HOLE THIS BUILD FOUND. `drill` is a blanket machine key in every other
   * lesson in this band, so the entire final gated step of every A2 trapDrill is
   * invisible to their jargon, em-dash and banned-word checks. */
  const td = sec('s12-trap') as { drill?: { opts?: string[] }[] };
  const first = td.drill?.[0]?.opts?.[0];
  ok(first, 'the trapDrill has no drill options');
  ok(display(td).includes(first!), `the walk still cannot see the gated drill: « ${first} » is on a screen and not in display()`);
  /* AND AN ErrorTrigger's drill ID IS STILL SKIPPED, so widening did not turn
   * machine keys into content. */
  const trigger = (L!.errorTriggers ?? [])[0];
  ok(trigger, 'there are no error triggers');
  ok(!display(trigger).includes(trigger!.drill), `« ${trigger!.drill} » is an id and it reached the learner-surface walk`);
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
 *  15. THE MISSION-ROW TITLE WIDTH
 *
 *  a2.06 shipped a clipped title at v2 with every host gate green, because it
 *  asserted a great deal about every section and NOTHING about how wide its
 *  title draws. The model is a2.23's, restated here as a LITERAL because this
 *  file imports no source (see the header).
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
  }
});
