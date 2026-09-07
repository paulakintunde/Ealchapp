// Guards a1.16.l1 "La place de l'adjectif".
//
// This lesson has one failure mode that matters more than all the others, and it
// is not a crash: it is THE MEANING-CHANGING PAIR BEING SPLIT UP.
//
// Four French words mean two different things depending on which side of the
// noun they sit, and that fact only teaches anything when both halves are on one
// screen at the same time. « C'est un grand homme. » on its own is a sentence
// about a great man; it becomes a lesson only when « C'est un homme grand. » is
// beside it. A later edit that tidied the two-column table into two tidy decks,
// one per order, would read fine in review, ship, and silently destroy the
// entire act. So the assertions that earn their place here are the ones that pin
// the PAIR SCREEN: two columns, all four pairs, both orders, both English
// meanings. The brief asks for exactly that: "This is the layout the test must
// assert ... splitting the two halves across missions destroys the entire
// teaching."
//
// The second-most-valuable assertion is that the pairs stay MINIMAL. A pair
// whose two halves differ in more than word order teaches "these two phrases
// mean different things", which is true of any two phrases. `cher` was cut from
// this lesson for failing exactly that, and a later author adding it back would
// be undoing a decision rather than making one, so the minimality is checked
// mechanically rather than trusted.
//
// Everything else guards the ways this project has already shipped content that
// was authored, schema-valid, and drawn by nothing.
//
// Two sources are checked, not one. The SEED is what a learner receives. The
// AUTHORED SOURCE in ealch-admin is what the next author edits. Both are read
// here, and the parity tests at the bottom fail when they drift, which is the
// failure mode that has twice cost this project real work.
//
// Counts are DERIVED wherever a count is asserted. A hardcoded number fails on
// itself the first time content legitimately changes, and the fix is then to
// edit the test, which is how a test comes to certify a bug. The exceptions are
// the ten, the four pairs and the six triggers: those numbers are the SHAPE of
// the lesson rather than a measurement of it, and a later trim that quietly
// drops one is exactly what this file exists to stop.
//
// Nothing here reimplements app logic. `matchesAccept`, `dicteeMode`,
// `dicteeWords`, `glossKeys`, `segmentSentence`, `hasPlainNasalFor`,
// `endingPopulation` and `validateDensity` are all imported from the modules the
// app itself runs. An earlier version of a1.01's test inlined its own glossary
// lookup, copied the version that was already broken, and passed while the
// feature was dead.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { ok, strictEqual, deepStrictEqual } from 'node:assert';
import { test } from 'node:test';
import { quizQuestions, validateLesson, type Lesson, type LessonSection } from './schema.ts';
import { hasPlainNasalFor, validateDensity, formatDensity } from './density.logic.ts';
import { glossKeys, segmentSentence } from './gloss.logic.ts';
import { dicteeMode, dicteeWords } from './dictee.logic.ts';
import { matchesAccept } from './answer.logic.ts';
import { endingPopulation } from './gender.logic.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  units: { id: string; seq: number; lessonIds: string[]; themes?: unknown; canDo?: string; sub?: string; title?: string }[];
  lessons: Lesson[];
  items: { id: string; kind: string; level: string; theme: string; fr: string; en: string; respell?: string; ipa?: string; drills: string[]; cardType?: string; gender?: string }[];
};

const L = seed.lessons.find((l) => l.id === 'a1.16.l1');
// Before the batch and the merge have run, the seed has no a1.16.l1 and every
// seed-derived assertion below would fail for a reason that is not a content
// bug. Skip cleanly and let the source-derived half still run.
const noSeed = !L;
const ITEMS = new Map(seed.items.map((i) => [i.id, i]));

// The admin repo is a sibling checkout. Skip cleanly when it is absent (the app
// can be built on its own) rather than failing the suite.
let SRC: Lesson | null = null;
let SRC_REFRAME = '';
let SRC_REFRAME_SECTIONS = 0;
let SRC_CLOSED: readonly string[] = [];
let SRC_ALREADY_MET: readonly string[] = [];
let SRC_NEWLY_ADDED: readonly string[] = [];
let SRC_PAIRS: readonly string[] = [];
let SRC_DICTEE_PAIRS: readonly string[] = [];
let SRC_PAIR_GLOSS: Record<string, { adj: string; before: string; after: string; noun: string }> = {};
let SRC_PAIR_FOR: (p: string) => { id: string; fr: string; en: string; side: string }[] = () => [];
let SRC_AUTHORED: { id: string; fr: string; en: string; ipa?: string; theme: string; kind: string; drills: string[] }[] = [];
let SRC_RESPELL: Record<string, { fr: string; respell: string; ipa: string; en: string }> = {};
let SRC_REPAIRS: { id: string; fr: string; was: string; now: string; alsoClaimedByA114: boolean }[] = [];
let SRC_NOT_REPAIRED: { id: string; fr: string; stored: string }[] = [];
let SRC_BEHIND_IDS: string[] = [];
let SRC_DE_IDS: string[] = [];
let SRC_SPLIT_IDS: string[] = [];
let SRC_VOWEL_FORMS: { word: string; plain: string; consonant: string; vowel: string; owner: string }[] = [];
let SRC_BOTH_SIDES: { noun: string; front: string; behind: string }[] = [];
let SRC_IN_FRONT: Record<string, string> = {};
let SRC_BANGS_MISSES: readonly string[] = [];
let SRC_AGREEMENT_TEACHING: string[] = [];
let SRC_VOCAB_TEACHING: string[] = [];
let SRC_IMPORTED: { id: string; fr: string; en: string; theme: string }[] = [];
try {
  const lesson = await import('../../../ealch-admin/scripts/data/placement-lesson.ts');
  const corpus = await import('../../../ealch-admin/scripts/data/placement-corpus.ts');
  const terms = await import('../../../ealch-admin/scripts/data/placement-terms.ts');
  const imported = await import('../../../ealch-admin/scripts/data/placement-imported.ts');
  SRC = lesson.PLACEMENT_LESSON as Lesson;
  SRC_REFRAME = terms.REFRAME as string;
  SRC_REFRAME_SECTIONS = terms.REFRAME_SECTIONS as number;
  SRC_AGREEMENT_TEACHING = terms.AGREEMENT_TEACHING as string[];
  SRC_VOCAB_TEACHING = terms.VOCAB_TEACHING as string[];
  SRC_CLOSED = corpus.CLOSED_SET as readonly string[];
  SRC_ALREADY_MET = corpus.ALREADY_MET as readonly string[];
  SRC_NEWLY_ADDED = corpus.NEWLY_ADDED as readonly string[];
  SRC_PAIRS = corpus.THE_PAIRS as readonly string[];
  SRC_DICTEE_PAIRS = corpus.DICTEE_PAIRS as readonly string[];
  SRC_PAIR_GLOSS = corpus.PAIR_GLOSS as typeof SRC_PAIR_GLOSS;
  SRC_PAIR_FOR = corpus.pairFor as typeof SRC_PAIR_FOR;
  SRC_AUTHORED = corpus.AUTHORED as typeof SRC_AUTHORED;
  SRC_RESPELL = corpus.RESPELL as typeof SRC_RESPELL;
  SRC_REPAIRS = corpus.RESPELL_REPAIRS as typeof SRC_REPAIRS;
  SRC_NOT_REPAIRED = corpus.NOT_REPAIRED as typeof SRC_NOT_REPAIRED;
  SRC_BEHIND_IDS = corpus.BEHIND_IDS as string[];
  SRC_DE_IDS = corpus.DE_IDS as string[];
  SRC_SPLIT_IDS = corpus.SPLIT_IDS as string[];
  SRC_VOWEL_FORMS = corpus.VOWEL_FORMS as typeof SRC_VOWEL_FORMS;
  SRC_BOTH_SIDES = corpus.BOTH_SIDES as typeof SRC_BOTH_SIDES;
  SRC_IN_FRONT = corpus.IN_FRONT as Record<string, string>;
  SRC_BANGS_MISSES = corpus.BANGS_MISSES as readonly string[];
  SRC_IMPORTED = [...(imported.IMPORTED as typeof SRC_IMPORTED), ...(imported.REUSED as typeof SRC_IMPORTED)];
} catch {
  SRC = null;
}
const noSrc = !SRC;

/* ─── Helpers. None of them reimplements anything the app does. ───────────── */

const strings = (v: unknown, out: string[] = []): string[] => {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, out));
  return out;
};

/** Accent-aware word boundary. `\b` is ASCII-only in JavaScript, so a regex
 *  built from a French search term silently matches nothing. Invariant §0. */
const WORDCH = /[a-zà-öø-ÿœæ'’-]/i;
const hasPhrase = (hay: string, needle: string): boolean => {
  const h = hay.toLowerCase();
  const n = needle.toLowerCase();
  let i = h.indexOf(n);
  while (i !== -1) {
    const before = i === 0 ? '' : h[i - 1];
    const after = i + n.length >= h.length ? '' : h[i + n.length];
    if (!WORDCH.test(before) && !WORDCH.test(after)) return true;
    i = h.indexOf(n, i + 1);
  }
  return false;
};

const section = (l: Lesson, id: string): LessonSection | undefined =>
  l.sections.find((s) => (s as { id?: string }).id === id);

/** Sections a learner reads. NOT the whole lesson object: `grammarIntroduced`,
 *  `errorTriggers` and the audio briefs are addressed to the curriculum, the SRS
 *  and the studio, and invariant §8 says in terms that they may use the precise
 *  grammatical words. */
const learnerStrings = (l: Lesson): string[] => [
  ...strings(l.sections),
  ...strings(l.drills ?? []),
  ...strings(l.sheets ?? []),
  ...strings(l.terms ?? {}),
];

/* ═══ THE PAIR SCREEN. The assertions worth the most in this file. ═════════ */

test('a1.16: the meaning-changing pairs are on ONE screen, in TWO columns', () => {
  if (noSeed) return;
  const s = section(L!, 's09-pairs');
  ok(s, 's09-pairs is missing. It is the only screen in A1 where word order carries meaning.');
  strictEqual(s!.type, 'tapTable', 's09-pairs must be a tapTable: it needs two columns on one screen');
  const cols = (s as { cols?: string[] }).cols ?? [];
  strictEqual(cols.length, 2, 'the pair screen must have exactly two columns, one per side of the noun');
  const rows = (s as { rows?: unknown[] }).rows ?? [];
  strictEqual(rows.length, 4, 'the pair screen must carry all four pairs. A trimmed row is a pair the learner never meets.');
});

test('a1.16: all four pairs are taught BY NAME, both orders, both English meanings', () => {
  if (noSeed || noSrc) return;
  const s = section(L!, 's09-pairs');
  const text = strings(s).join('\n');
  // Asserted by name rather than by count. This is the content most likely to be
  // trimmed in a later edit and the least likely to be noticed.
  for (const p of ['grand', 'ancien', 'pauvre', 'propre']) {
    ok(SRC_PAIRS.includes(p), `the ${p} pair has been dropped from THE_PAIRS`);
    const [before, after] = SRC_PAIR_FOR(p);
    ok(text.includes(before.fr), `s09-pairs does not show the front order of ${p}: ${before.fr}`);
    ok(text.includes(after.fr), `s09-pairs does not show the behind order of ${p}: ${after.fr}`);
    ok(text.includes(before.en), `s09-pairs does not show the English for the front order of ${p}`);
    ok(text.includes(after.en), `s09-pairs does not show the English for the behind order of ${p}`);
  }
});

test('a1.16: the English is in the CELLS, not only behind a tap', () => {
  if (noSeed || noSrc) return;
  // The brief: "un ancien professeur on the left, un professeur ancien on the
  // right, WITH THE ENGLISH UNDER EACH." A first draft satisfied the assertion
  // above by putting the meanings in the detail modal only, which passed while
  // the visible screen showed four pairs of French phrases and no contrast.
  // Checked on a device, then pinned here.
  const s = section(L!, 's09-pairs');
  const rows = (s as { rows?: { cells?: string[] }[] }).rows ?? [];
  strictEqual(rows.length, 4);
  for (const p of SRC_PAIRS) {
    const [before, after] = SRC_PAIR_FOR(p);
    const front = rows.map((r) => (r.cells ?? [])[0]).find((c) => c?.includes(before.fr));
    const behind = rows.map((r) => (r.cells ?? [])[1]).find((c) => c?.includes(after.fr));
    ok(front?.includes(before.en), `the ${p} front CELL does not carry its English: ${front}`);
    ok(behind?.includes(after.en), `the ${p} behind CELL does not carry its English: ${behind}`);
    // TapTableView draws a cell as one <TX>, so the newline is what puts the
    // English on its own line under the French rather than running on after it.
    ok(front!.includes('\n') && behind!.includes('\n'), `the ${p} cells run the English on after the French instead of under it`);
  }
});

test('a1.16: every pair is MINIMAL, the same words in a different order', () => {
  if (noSrc) return;
  for (const p of SRC_PAIRS) {
    const [before, after] = SRC_PAIR_FOR(p);
    const b = before.fr.replace(/[.]/g, '').split(' ').sort().join(' ');
    const a = after.fr.replace(/[.]/g, '').split(' ').sort().join(' ');
    strictEqual(
      b, a,
      `the ${p} pair is not minimal:\n  ${before.fr}\n  ${after.fr}\n`
      + `  A pair that changes the noun teaches "these two phrases differ", which is true of any two phrases.\n`
      + `  cher was cut from this lesson for exactly this. See placement-corpus.ts.`,
    );
    ok(before.en !== after.en, `the ${p} pair carries the same English gloss on both sides, so nothing is being contrasted`);
    const g = SRC_PAIR_GLOSS[p];
    ok(before.fr.includes(g.noun) && after.fr.includes(g.noun), `the ${p} pair does not hold its noun "${g.noun}" constant`);
  }
});

test('a1.16: both halves of every pair reach a screen and a tranche', () => {
  if (noSeed || noSrc) return;
  const shown = strings(L!).join('\n');
  const released = new Set((L!.deckTranche ?? []).flat());
  for (const p of SRC_PAIRS) {
    for (const side of SRC_PAIR_FOR(p)) {
      ok(shown.includes(side.fr), `${side.id} ("${side.fr}") is on no screen`);
      ok(released.has(side.id), `${side.id} is released by no tranche, so it never reaches spaced repetition`);
    }
  }
});

/* ═══ The default and the exception, together ══════════════════════════════ */

test('a1.16: at least one section shows both orders on the SAME noun, on one screen', () => {
  if (noSeed) return;
  const s = section(L!, 's06-bothsides');
  ok(s, 's06-bothsides is missing. The contrast between the two orders is the lesson.');
  strictEqual(s!.type, 'tapTable');
  const cols = (s as { cols?: string[] }).cols ?? [];
  strictEqual(cols.length, 2, 'the both-sides screen must show the two orders side by side');
  const rows = (s as { rows?: { cells?: string[] }[] }).rows ?? [];
  ok(rows.length >= 3, 'at least three nouns must be shown with an adjective on each side');
  for (const r of rows) {
    strictEqual((r.cells ?? []).length, 2, 'every row must carry one phrase per side');
    ok((r.cells ?? []).every((c) => c.trim().length > 0), 'a row has an empty cell');
  }
});

test('a1.16: the default order and the pre-nominal exception are both taught', () => {
  if (noSeed || noSrc) return;
  const text = learnerStrings(L!).join('\n');
  // The default, on words that are NOT in the closed set.
  for (const id of SRC_BEHIND_IDS.slice(0, 5)) {
    const it = ITEMS.get(id);
    ok(it, `${id} is not in the seed, so the default-order card draws nothing`);
    ok(text.includes(it!.fr), `${id} ("${it!.fr}") is on no screen`);
  }
  // The exception, on the closed set.
  for (const a of SRC_CLOSED) {
    const id = SRC_IN_FRONT[a];
    const it = ITEMS.get(id);
    ok(it, `${id} (the in-front sentence for "${a}") is not in the seed`);
    ok(text.includes(it!.fr), `the in-front sentence for "${a}" is on no screen`);
  }
});

/* ═══ The closed set ═══════════════════════════════════════════════════════ */

test('a1.16: every member of the closed set is named individually', () => {
  if (noSeed || noSrc) return;
  const text = learnerStrings(L!).join('\n');
  // BY NAME, not as a count. A count passes on a set that has quietly lost one
  // member and gained another.
  for (const a of ['petit', 'grand', 'gros', 'jeune', 'vieux', 'beau', 'joli', 'bon', 'mauvais', 'nouveau']) {
    ok(SRC_CLOSED.includes(a), `"${a}" has been dropped from the closed set`);
    ok(hasPhrase(text, a), `closed-set member "${a}" is never named on any learner surface`);
  }
  strictEqual(SRC_CLOSED.length, 10, 'the closed set is ten words. That number is the shape of the lesson, not a measurement of it.');
});

test('a1.16: the split between what a1.14 taught and what this lesson adds is exact', () => {
  if (noSrc) return;
  // Measured against a1.14 as it SHIPPED, not as its brief described it.
  deepStrictEqual(
    [...SRC_ALREADY_MET].sort(),
    ['beau', 'bon', 'grand', 'mauvais', 'petit', 'vieux'],
    'ALREADY_MET must match a1.14\'s THE_SIX. If a1.14 changes its six, this lesson\'s cards lie about what the learner has.',
  );
  deepStrictEqual([...SRC_NEWLY_ADDED].sort(), ['gros', 'joli', 'jeune', 'nouveau'].sort());
  strictEqual(SRC_ALREADY_MET.length + SRC_NEWLY_ADDED.length, SRC_CLOSED.length,
    'ALREADY_MET and NEWLY_ADDED must partition the closed set');
});

/* ═══ BANGS: the decision is pinned so a later author cannot reverse it ════ */

test('a1.16: BANGS appears on exactly one card, labelled a memory aid', () => {
  if (noSeed) return;
  const all = strings(L!).filter((s) => /\bbangs\b/i.test(s));
  const deck = section(L!, 's05-list');
  ok(deck, 's05-list is missing');
  const inDeck = strings(deck).filter((s) => /\bbangs\b/i.test(s));
  strictEqual(
    inDeck.length, all.length,
    'BANGS appears outside s05-list. The decision this lesson made was ONE card, labelled a memory aid and '
    + 'not a test, with the words it misses named beside it. Promoting it to the reframe or a sheet reverses '
    + 'that decision silently.',
  );
  ok(all.length > 0, 'BANGS is absent. The request named it explicitly, so its absence would also be a silent reversal.');
  ok(inDeck.some((s) => /memory aid/i.test(s)), 'the BANGS card does not label itself a memory aid');
});

test('a1.16: the BANGS card names the words the acronym misses', () => {
  if (noSeed || noSrc) return;
  const deck = strings(section(L!, 's05-list')).join('\n');
  for (const w of SRC_BANGS_MISSES) {
    ok(deck.includes(w), `the BANGS card does not name "${w}", which goes in front and is in none of the five letters`);
  }
});

/* ═══ des beaux: the error the de rule exists to prevent ═══════════════════ */

test('a1.16: « des beaux » never appears where it is not marked wrong', () => {
  if (noSeed) return;
  const DES_ERRORS = ['des beaux', 'des belles', 'des bons', 'des bonnes', 'des petits', 'des jolies', 'des vieux'];
  const wrongHalves = L!.sections
    .filter((s) => s.type === 'commonErrors')
    .flatMap((s) => ((s as { errors?: { wrong?: string }[] }).errors ?? []).map((e) => e.wrong ?? ''));
  const rejectable: string[] = [];
  const quiz = L!.sections.find((s) => s.type === 'quiz');
  for (const r of (quiz && quiz.type === 'quiz' ? quiz.rounds ?? [] : [])) {
    for (const q of r.questions ?? []) {
      const opts = (q as { opts?: string[] }).opts;
      const correct = (q as { correct?: number }).correct;
      if (Array.isArray(opts)) opts.forEach((o, i) => { if (i !== correct) rejectable.push(o); });
    }
  }
  for (const d of L!.drills ?? []) {
    const opts = (d as { opts?: string[] }).opts;
    const correct = (d as { correct?: number }).correct;
    if (Array.isArray(opts)) opts.forEach((o, i) => { if (i !== correct) rejectable.push(o); });
  }
  // errorTriggers and the audio briefs are not learner-facing and must be able to
  // name the error: one describes it for the SRS, the other instructs the studio
  // NOT to record it.
  const notLearnerFacing = [
    ...(L!.errorTriggers ?? []).map((t) => t.description ?? ''),
    ...(L!.audio?.recorded ?? []).map((r) => r.desc ?? ''),
  ];
  const sanctioned = new Set([...wrongHalves, ...rejectable, ...notLearnerFacing]);
  for (const bad of DES_ERRORS) {
    const loose = strings(L!).filter((t) => hasPhrase(t, bad) && !sanctioned.has(t));
    deepStrictEqual(loose, [], `« ${bad} » appears where it is not marked wrong. Authoring it once teaches it.`);
  }
  ok(
    DES_ERRORS.some((bad) => wrongHalves.some((w) => hasPhrase(w, bad))),
    'no commonErrors card shows the des form. The lesson must show the learner the thing it warns them about.',
  );
});

test('a1.16: the de rule is taught on published evidence, and the corpus carries no des error', () => {
  if (noSeed || noSrc) return;
  const text = strings(L!).join('\n');
  let shown = 0;
  for (const id of SRC_DE_IDS) {
    const it = ITEMS.get(id);
    ok(it, `${id} is not in the seed, so the de card draws nothing`);
    if (text.includes(it!.fr)) shown += 1;
    ok(/(^|\s)de\s/i.test(it!.fr) || it!.fr.startsWith('De '), `${id} was imported as de-rule evidence and does not contain de: ${it!.fr}`);
  }
  ok(shown >= 8, `only ${shown} of the de sentences reach a screen`);
  for (const r of SRC_AUTHORED) {
    ok(!hasPhrase(r.fr, 'des beaux'), `${r.id} authors the des error into the corpus, where it becomes a flashcard`);
  }
});

/* ═══ Agreement is correct everywhere and taught nowhere ═══════════════════ */

test('a1.16: every authored noun phrase is correctly agreed', () => {
  if (noSrc) return;
  // This lesson does not teach agreement, so a slip here is invisible to its own
  // acts and would contradict a1.13 on a screen the learner sees. Checked by
  // pairing each authored sentence against the gender its determiner declares.
  const FEM_DET = /\b(une|ma|la|cette)\b/i;
  const MASC_DET = /\b(un|mon|le|ce|cet)\b/i;
  for (const r of SRC_AUTHORED) {
    const fem = FEM_DET.test(r.fr);
    const masc = MASC_DET.test(r.fr);
    ok(fem || masc, `${r.id} has no determiner to agree with: ${r.fr}`);
    if (fem) {
      // A feminine noun phrase must not carry a bare masculine adjective form
      // from this lesson's own set.
      for (const bad of ['un grand ', 'un petit ', 'un beau ', 'un bon ', 'un vieux ']) {
        ok(!r.fr.toLowerCase().includes(bad), `${r.id} mixes a feminine determiner with "${bad.trim()}": ${r.fr}`);
      }
    }
  }
});

test('a1.16: no agreement rule is taught as new, and no vocabulary act is built on the six', () => {
  if (noSeed || noSrc) return;
  // Written against LEARNER SURFACES rather than every string, and as PHRASES
  // rather than words. a1.13's guard fired on « My bags are green. » when it was
  // written as single words and had to be rewritten. This lesson is far more
  // exposed: its screens legitimately contain "before the noun", "goes in front"
  // and the word "bangs".
  const text = learnerStrings(L!).join('\n').toLowerCase();
  for (const phrase of SRC_AGREEMENT_TEACHING) {
    ok(!text.includes(phrase), `agreement teaching found, which belongs to a1.13: "${phrase}"`);
  }
  for (const phrase of SRC_VOCAB_TEACHING) {
    ok(!text.includes(phrase), `vocabulary teaching found, which belongs to a1.14: "${phrase}"`);
  }
});

test('a1.16: every guard phrase is multi-word', () => {
  if (noSrc) return;
  // a1.13's comment records a guard that fired on « My bags are green. » because
  // it was written as single words. This lesson's content legitimately contains
  // "bags" and "bangs", so a single-word guard here would fire on the lesson's
  // own BANGS card and be deleted rather than fixed.
  for (const phrase of [...SRC_AGREEMENT_TEACHING, ...SRC_VOCAB_TEACHING]) {
    ok(phrase.trim().includes(' '), `guard phrase "${phrase}" is a single word. A single common word is not a safe probe for a teaching concept.`);
  }
});

/* ═══ bel, vieil, nouvel, and the a1.14 boundary ═══════════════════════════ */

test('a1.16: the vowel forms are taught, and ownership is recorded', () => {
  if (noSeed || noSrc) return;
  const text = strings(L!).join('\n');
  strictEqual(SRC_VOWEL_FORMS.length, 3, 'three words take a pre-vowel form and all three must be here');
  for (const v of SRC_VOWEL_FORMS) {
    ok(text.includes(v.word), `${v.word} is on no screen`);
    const cons = ITEMS.get(v.consonant);
    const vow = ITEMS.get(v.vowel);
    ok(cons && vow, `${v.word}'s consonant/vowel partner rows are not both in the seed`);
    ok(text.includes(cons!.fr), `${v.word} has no consonant partner on screen. Without it, it is a word to memorise rather than a pattern.`);
    ok(text.includes(vow!.fr), `${v.word} is not shown in front of a vowel`);
  }
  // nouvel is this lesson's because a1.14 hard-blocks it, and bel/vieil are
  // a1.14's and are referenced rather than retaught. If a later edit flips an
  // owner, the card copy and the handover note go out of agreement.
  strictEqual(SRC_VOWEL_FORMS.find((v) => v.word === 'nouvel')?.owner, 'a1.16');
  strictEqual(SRC_VOWEL_FORMS.find((v) => v.word === 'bel')?.owner, 'a1.14');
  strictEqual(SRC_VOWEL_FORMS.find((v) => v.word === 'vieil')?.owner, 'a1.14');
});

test('a1.16: two adjectives splitting around the noun is shown, not asserted', () => {
  if (noSeed || noSrc) return;
  const text = strings(L!).join('\n');
  let shown = 0;
  for (const id of SRC_SPLIT_IDS) {
    const it = ITEMS.get(id);
    ok(it, `${id} is not in the seed`);
    if (text.includes(it!.fr)) shown += 1;
  }
  ok(shown >= 6, `only ${shown} split sentences reach a screen, and every one of them was already published`);
});

/* ═══ The dictée is a word-ORDER test ══════════════════════════════════════ */

test('a1.16: every dictée target is in WORDS mode, which is the mode that tests an order', () => {
  if (noSeed || noSrc) return;
  const d = section(L!, 's19-dictation');
  ok(d, 's19-dictation is missing. It is the only mission where the learner produces a word order.');
  const authored = new Map(SRC_AUTHORED.map((r) => [r.id, r] as const));
  const ids = (d as { itemIds?: string[] }).itemIds ?? [];
  ok(ids.length >= 6, 'the dictée is too short to be a mission');
  for (const id of ids) {
    const r = authored.get(id);
    ok(r, `the dictée names ${id}, which this lesson does not author`);
    strictEqual(
      dicteeMode(r!.fr), 'words',
      `${id} ("${r!.fr}") is in letters mode, which tests SPELLING. Word mode hands the learner a bank of the `
      + `sentence's own words and asks them to assemble it, which is the only thing this lesson teaches.`,
    );
    ok(dicteeWords(r!.fr).length >= 4, `${id} offers only ${dicteeWords(r!.fr).length} tiles, which is not an exercise`);
  }
  // The grand pair is deliberately excluded: it falls into letters mode. If a
  // later edit lengthens those sentences to include them, the minimal-pair
  // discipline breaks instead, and this pins which trade was chosen.
  for (const p of SRC_DICTEE_PAIRS) ok(SRC_PAIRS.includes(p), `DICTEE_PAIRS names "${p}", which is not a pair`);
  ok(!SRC_DICTEE_PAIRS.includes('grand'), 'the grand pair is in letters mode and must stay out of the dictée');
});

/* ═══ The quiz ═════════════════════════════════════════════════════════════ */

test('a1.16: the exam is at most half mcq and every question has a why and a ref', () => {
  if (noSeed) return;
  const quiz = L!.sections.find((s) => s.type === 'quiz');
  ok(quiz && quiz.type === 'quiz', 'no quiz section');
  // quizQuestions takes a SECTION. Passing the lesson returns [] and every
  // assertion below then passes on an empty array.
  const qs = quizQuestions(quiz as { rounds?: unknown[] } as Parameters<typeof quizQuestions>[0]);
  ok(qs.length >= 20, `the exam has ${qs.length} questions, which is not an exam`);
  const mcq = qs.filter((q) => q.format === 'mcq').length;
  ok(mcq * 2 <= qs.length, `mcq is ${mcq} of ${qs.length}, over the half ceiling`);
  const ids = new Set(L!.sections.map((s) => (s as { id?: string }).id));
  for (const q of qs) {
    ok(q.why && q.why.length > 20, `question with no real why: ${q.q}`);
    ok(q.ref && ids.has(q.ref), `quiz ref does not name a section in this lesson: ${q.q}`);
  }
});

test('a1.16: no quiz option refers to a position, and none is duplicated', () => {
  if (noSeed) return;
  // QuizDeckView already shuffles the options of every closed question, per
  // question, per attempt. So "the first one" is broken by the runtime, and a
  // duplicate makes a shuffled question genuinely ambiguous rather than merely
  // redundant. This lesson is unusually exposed: a placement question's options
  // are two orderings of the same words.
  const quiz = L!.sections.find((s) => s.type === 'quiz');
  const qs = quizQuestions(quiz as Parameters<typeof quizQuestions>[0]);
  const POSITIONAL = ['the first', 'the second', 'the third', 'the last one', 'both of the above',
    'none of these', 'none of the above', 'all of the above', 'a and c', 'the one above', 'the top one'];
  for (const q of qs) {
    const opts = (q as { opts?: string[] }).opts;
    if (!Array.isArray(opts)) continue;
    strictEqual(new Set(opts).size, opts.length, `duplicate option in: ${q.q}`);
    for (const o of opts) {
      for (const p of POSITIONAL) {
        ok(!o.toLowerCase().includes(p), `an option refers to a position, which the runtime shuffle breaks: "${o}"`);
      }
    }
  }
});

test('a1.16: correct answers do not cluster in one authored slot', () => {
  if (noSeed) return;
  const quiz = L!.sections.find((s) => s.type === 'quiz');
  const qs = quizQuestions(quiz as Parameters<typeof quizQuestions>[0]);
  const closed = qs.filter((q) => Array.isArray((q as { opts?: string[] }).opts));
  const slots = new Map<number, number>();
  for (const q of closed) {
    const c = (q as { correct?: number }).correct ?? -1;
    slots.set(c, (slots.get(c) ?? 0) + 1);
  }
  for (const [slot, n] of slots) {
    ok(n / closed.length <= 0.4, `authored slot ${slot} holds ${n}/${closed.length} closed questions, over the 40% cap`);
  }
});

test('a1.16: every free-text question accepts the answer it displays', () => {
  if (noSeed) return;
  const quiz = L!.sections.find((s) => s.type === 'quiz');
  const qs = quizQuestions(quiz as Parameters<typeof quizQuestions>[0]);
  for (const q of qs) {
    const answer = (q as { answer?: string }).answer;
    const accept = (q as { accept?: string[] }).accept;
    if (!answer || !accept) continue;
    // Through the REAL matchesAccept and its fold(), not a local copy.
    ok(matchesAccept(answer, accept), `the displayed answer "${answer}" is not accepted by ${JSON.stringify(accept)}`);
  }
});

test('a1.16: at least one round selects the answer by MEANING rather than by word', () => {
  if (noSeed) return;
  // No format can test that the learner chose the right side for the right
  // reason: a learner can pass every mcq by memorising ten words. The meaning
  // round is the one place the stem, not the word, carries the answer, and both
  // options in each question are correct French.
  const quiz = L!.sections.find((s) => s.type === 'quiz');
  ok(quiz && quiz.type === 'quiz');
  const round = (quiz as { rounds?: { id: string; questions?: { q: string }[] }[] }).rounds?.find((r) => r.id === 'r3-meaning');
  ok(round, 'the meaning round is gone. Without it the exam can be passed by memorising a word list.');
  ok((round!.questions ?? []).length >= 4, 'the meaning round is too short');
  for (const q of round!.questions ?? []) {
    // Every placement question needs a full noun phrase and a MEANING in the
    // stem. "grand: before or after?" has no answer, because grand is both.
    ok(q.q.length > 40, `a meaning question has no situation in its stem: ${q.q}`);
  }
});

/* ═══ Drills, tranches, structure ══════════════════════════════════════════ */

test('a1.16: each drill is the FIRST resolving target of exactly one round', () => {
  if (noSeed) return;
  // drillForRound walks a round's targets and fires the drill of the FIRST one
  // that resolves, then stops. A drill named in second place is dead content.
  // a1.05 shipped two such drills and a1.07's first draft a third.
  const quiz = L!.sections.find((s) => s.type === 'quiz');
  ok(quiz && quiz.type === 'quiz');
  const triggers = L!.errorTriggers ?? [];
  const drillIds = new Set((L!.drills ?? []).map((d) => d.id));
  const fired = new Map<string, string[]>();
  for (const r of (quiz as { rounds?: { id: string; targets?: string[] }[] }).rounds ?? []) {
    const first = (r.targets ?? []).map((t) => triggers.find((x) => x.id === t)).find((t) => t?.drill);
    ok(first?.drill, `round ${r.id} fires no drill`);
    fired.set(first!.drill!, [...(fired.get(first!.drill!) ?? []), r.id]);
  }
  strictEqual(triggers.length, 6, 'six triggers is the shape of this lesson');
  for (const t of triggers) {
    ok(t.drill && drillIds.has(t.drill), `trigger ${t.id} names a drill that does not exist`);
    ok(t.retest && drillIds.has(t.retest), `trigger ${t.id} names a retest that does not exist`);
    strictEqual((fired.get(t.drill!) ?? []).length, 1, `drill ${t.drill} is the first resolving target of ${(fired.get(t.drill!) ?? []).length} rounds, not 1`);
  }
});

test('a1.16: the spine is in order and every act names sections that exist', () => {
  if (noSeed) return;
  const ids = L!.sections.map((s) => (s as { id?: string }).id!);
  deepStrictEqual([...ids].sort(), [...ids].sort(), 'section ids are not unique');
  strictEqual(new Set(ids).size, ids.length, 'two sections share an id');
  const acts = L!.acts ?? [];
  strictEqual(acts.length, 6, 'six acts is the shape of this lesson');
  const claimed = new Map<string, string>();
  for (const a of acts) {
    for (const sid of a.sections) {
      ok(ids.includes(sid), `act ${a.id} names a section that does not exist: ${sid}`);
      ok(!claimed.has(sid), `${sid} is claimed by both ${claimed.get(sid)} and ${a.id}`);
      claimed.set(sid, a.id);
    }
  }
  for (const sid of ids) ok(claimed.has(sid), `${sid} is in no act, so nothing reaches it`);
});

test('a1.16: tranches release every taught item exactly once and nothing untaught', () => {
  if (noSeed) return;
  const tranches = L!.deckTranche ?? [];
  strictEqual(tranches.length, (L!.acts ?? []).length, 'there must be one tranche per act, index-aligned');
  const all = tranches.flat();
  strictEqual(new Set(all).size, all.length, 'an item is released by two tranches, so the SRS takes two ratings for one card');
  const taught = new Set(L!.itemIds ?? []);
  for (const id of all) ok(taught.has(id), `a tranche releases ${id}, which the lesson does not declare`);
  for (const id of taught) ok(all.includes(id), `${id} is declared and released by no tranche, so it never reaches spaced repetition`);
});

test('a1.16: every declared itemId resolves in the seed', () => {
  if (noSeed) return;
  for (const id of L!.itemIds ?? []) ok(ITEMS.has(id), `${id} is declared and is not in the seed, so its card draws nothing`);
});

test('a1.16: exactly one quiz section, because the pager renders only the first', () => {
  if (noSeed) return;
  // lessonPager.logic.ts appends exactly one quiz page via
  // sections.find(s => s.type === 'quiz'). a1.01 shipped twelve final-exam
  // questions in a second quiz section and nothing ever drew them.
  strictEqual(L!.sections.filter((s) => s.type === 'quiz').length, 1);
});

test('a1.16: the reading glossary can actually underline, through the real matcher', () => {
  if (noSeed) return;
  const r = section(L!, 's16-reading');
  ok(r, 's16-reading is missing');
  ok((r as { questionsInModal?: boolean }).questionsInModal === true,
    'a reading section without questionsInModal never reaches the glossary renderer. 10 entries across sons.05/.07/.09 died this way.');
  ok(((r as { questions?: unknown[] }).questions ?? []).length > 0, 'questionsInModal without questions renders nothing');
  const glossary = (r as { glossary?: { word: string }[] }).glossary ?? [];
  const text = (r as { text?: string }).text ?? '';
  ok(!text.includes('\n'), 'a reading passage is ONE BLOCK: PassagePage splits on sentence ends and discards authored newlines');
  // Run the REAL segmentSentence and compare matched KEYS, not matched text.
  // `glossKeys` takes ONE entry's word and returns its lookup forms; matching on
  // text instead reports a dead entry as found, which is the bug a1.08's first
  // test shipped. An entry can also be shadowed out of existence by a longer key.
  const keys = new Set(glossary.flatMap((g) => glossKeys(g.word)).filter(Boolean));
  const hit = new Set(
    segmentSentence(text, keys).filter((s) => (s as { key?: string }).key).map((s) => (s as { key: string }).key),
  );
  for (const g of glossary) {
    ok(g.word.split(/\s+/).length <= 4, `glossary key "${g.word}" is 5+ words and MAX_GLOSS_WORDS is 4, so it can never match`);
    ok(glossKeys(g.word).some((k) => hit.has(k)),
      `glossary entry "${g.word}" underlines nothing. Longest-match-first means a short entry inside a longer one is shadowed out of existence.`);
  }
});

/* ═══ Layout traps ═════════════════════════════════════════════════════════ */

test('a1.16: commonErrors carries swipe, or it draws a blank screen', () => {
  if (noSeed) return;
  for (const s of L!.sections.filter((x) => x.type === 'commonErrors')) {
    strictEqual((s as { swipe?: boolean }).swipe, true,
      'MissionSection renders commonErrors as its own swipe deck ONLY when swipe is set. Without it the section falls through to a path that drew a BLANK screen on sons.08 m22 and a1.01 m5.');
    strictEqual((s as { size?: string }).size, 'lg', 'commonErrors wants one error per screen at lg');
  }
});

test('a1.16: no groupDrill is xl, and no section is xl while carrying a sentence', () => {
  if (noSeed) return;
  // `size` looks decorative and is not. density.logic.ts reads xl as a 12-word
  // cap on EVERY string in the section, which is correct on a one-word card and
  // fatal anywhere a sentence appears. An xl groupDrill also owns the layout and
  // must never stack words and a check in one group; that has shipped twice.
  for (const s of L!.sections.filter((x) => x.type === 'groupDrill')) {
    ok((s as { size?: string }).size !== 'xl', `${(s as { id?: string }).id} is an xl groupDrill`);
  }
  for (const s of L!.sections) {
    if ((s as { size?: string }).size !== 'xl') continue;
    for (const str of strings(s)) {
      ok(str.split(/\s+/).length <= 12, `an xl section carries a ${str.split(/\s+/).length}-word string: "${str.slice(0, 50)}"`);
    }
  }
});

test('a1.16: no section declares more than three term chips', () => {
  if (noSeed) return;
  // The renderer shows three and collapses the rest. Seven sons.06 sections
  // declare more and the extras are invisible.
  for (const s of L!.sections) {
    const t = (s as { terms?: string[] }).terms ?? [];
    ok(t.length <= 3, `${(s as { id?: string }).id} declares ${t.length} term chips and the renderer shows 3`);
    for (const id of t) ok((L!.terms ?? {})[id], `${(s as { id?: string }).id} names term "${id}", which the lesson does not define`);
  }
});

test('a1.16: every sheetId names a declared sheet, and every sheet is reachable', () => {
  if (noSeed) return;
  const sheets = new Set((L!.sheets ?? []).map((s) => s.id));
  const used = new Set<string>();
  for (const s of L!.sections) {
    const id = (s as { sheetId?: string }).sheetId;
    if (!id) continue;
    ok(sheets.has(id), `${(s as { id?: string }).id} names sheet "${id}", which the lesson does not declare`);
    used.add(id);
  }
  for (const id of sheets) ok(used.has(id), `sheet "${id}" is reachable from no section`);
});

test('a1.16: no autoplay, and no imageRef, because nothing implements or validates them', () => {
  if (noSeed) return;
  // `autoplay` is declared in schema.ts and implemented in NO component, to this
  // day. `imageRef` is validated by nothing: lessonImage() is a plain lookup in a
  // statically enumerated REG and an unregistered ref draws a blank box.
  ok(!JSON.stringify(L!).includes('"autoplay"'), 'autoplay is authored and read by no component. Use audioFirst.');
  const refs = strings(L!).filter((s) => /^lessons\/[a-z0-9-]+\/[a-z0-9-]+\.(jpg|png|webp)$/i.test(s));
  deepStrictEqual(refs, [], 'this lesson authors an imageRef and nothing validates it. Register it and write the assertion, or remove it.');
});

/* ═══ House style, respellings, density ════════════════════════════════════ */

test('a1.16: the lesson passes validateLesson and validateDensity', () => {
  if (noSeed) return;
  deepStrictEqual(validateLesson(L!), []);
  const d = validateDensity(L!);
  strictEqual(d.length, 0, formatDensity(d));
});

test('a1.16: no em dash, no banned word, no U+203F tie', () => {
  if (noSeed) return;
  const all = strings(L!);
  for (const s of all) {
    ok(!s.includes('—'), `em dash: ${s.slice(0, 60)}`);
    // Built rather than written literally, so a search-and-replace over this
    // directory cannot silently turn the guard into a guard for something else.
    ok(!new RegExp(`\\b${['hon', 'est'].join('')}`, 'i').test(s), `banned word: ${s.slice(0, 60)}`);
    // U+203F draws as a low underscore on a Pixel 6 and is already in shipped
    // sons.10 respellings. Invariant §2: do not introduce a new one.
    ok(!s.includes('‿'), `U+203F tie: ${s.slice(0, 60)}`);
  }
});

test('a1.16: no grammar jargon on a learner surface', () => {
  if (noSeed) return;
  // grammarIntroduced is addressed to the curriculum and MAY use the precise
  // words, which is why it is excluded here rather than the check being loosened.
  const text = learnerStrings(L!).join('\n').toLowerCase();
  for (const j of ['épithète', 'attribut', 'antéposé', 'attributive', 'post-nominal', 'pre-nominal', 'prenominal']) {
    ok(!text.includes(j), `grammar jargon on a learner surface: "${j}"`);
  }
  // And grammarIntroduced must actually carry the precise description, or the
  // curriculum has no record of what this unit introduced.
  const gi = (L!.grammarIntroduced ?? []).join(' ').toLowerCase();
  ok(gi.includes('position') || gi.includes('placement'), 'grammarIntroduced does not describe what this lesson introduces');
});

test('a1.16: every respelling this lesson displays passes the shared nasal checker', () => {
  if (noSrc) return;
  const exempt = new Set(SRC_NOT_REPAIRED.map((n) => n.fr));
  for (const [fr, d] of Object.entries(SRC_RESPELL)) {
    const res = d.respell.replace(/^\[|\]$/g, '');
    if (exempt.has(fr)) continue;
    ok(!hasPlainNasalFor(fr, res), `the lesson would display a flagged respelling: ${fr} ${res}`);
  }
});

test('a1.16: the nasal-carrying words are asserted BY NAME as well', () => {
  if (noSrc) return;
  // hasPlainNasalFor CANNOT see a word-internal nasal: its test needs the n or m
  // to end a token, so sep-TAHNBR and day-SAHNBR both pass while being wrong.
  // a1.09 had three such rows out of five. These four are named individually.
  const superscript = 'ⁿ';
  for (const w of ['grand', 'bon', 'ancien']) {
    const r = SRC_RESPELL[w];
    ok(r, `${w} has no respelling`);
    ok(r.respell.includes(superscript), `${w} carries a genuine nasal vowel and its respelling does not close it with the superscript: ${r.respell}`);
  }
  // And the one that must NOT have it. jeune is /ʒœn/: a real /n/ and no nasal
  // vowel, so a superscript would teach a sound that is not in the word.
  ok(!SRC_RESPELL.jeune.respell.includes(superscript),
    'jeune has a real /n/ and no nasal vowel. A superscript here teaches a sound that is not there.');
  strictEqual(SRC_RESPELL.jeune.respell, '[ZHUHNN]',
    'jeune must be ZHUHNN: the doubled N avoids the token-final vowel+N that the shared checker misreads, '
    + 'without inventing a nasal. Same fix as automne -> o-TONN in invariant §3.');
});

test('a1.16: every repair is genuinely broken before and genuinely clean after', () => {
  if (noSrc) return;
  for (const r of SRC_REPAIRS) {
    ok(hasPlainNasalFor(r.fr, r.was), `${r.fr}: the value being repaired is not flagged, so the repair is unjustified`);
    ok(!hasPlainNasalFor(r.fr, r.now), `${r.fr}: the repaired value is still flagged`);
  }
  // Two of the four are also claimed by a1.14, to the identical target value, so
  // whichever batch runs second is a no-op. If a later edit changes one target
  // without the other, the two builds start fighting over a transcription.
  const shared = SRC_REPAIRS.filter((r) => r.alsoClaimedByA114).map((r) => r.fr).sort();
  deepStrictEqual(shared, ['bon', 'grand'], 'the set of repairs shared with a1.14 has changed');
});

test('a1.16: the authored rows do not join a1.03\'s measured ending population', () => {
  if (noSrc) return;
  // a1-03-genre.test.ts re-measures twenty printed figures from the seed on every
  // run, and a1.11 broke its -e statistic exactly this way. Checked through the
  // REAL endingPopulation, not a copy: a1.08 shipped a hand-rolled version
  // carrying a filter the real one does not have and let four rows through.
  const before = endingPopulation([]);
  const after = endingPopulation(SRC_AUTHORED as unknown as Parameters<typeof endingPopulation>[0]);
  strictEqual(after.length, before.length,
    'an authored row joined a1.03\'s measured ending population. Gendered single-word nouns are radioactive.');
});

/* ═══ The reframe ══════════════════════════════════════════════════════════ */

test('a1.16: the reframe is carried verbatim, the exact number of times authored', () => {
  if (noSeed || noSrc) return;
  strictEqual(L!.reframe, SRC_REFRAME, 'the seed and the source disagree about the reframe');
  strictEqual(L!.reframe, 'When in doubt, put it after.');
  // Against an EXPLICIT CONSTANT, not a figure derived from the lesson. A derived
  // count compares the content to itself and passes on any rewording.
  const n = L!.sections.filter((s) => strings(s).some((t) => t.includes(SRC_REFRAME))).length;
  strictEqual(n, SRC_REFRAME_SECTIONS, `the reframe appears in ${n} sections, expected ${SRC_REFRAME_SECTIONS}`);
});

/* ═══ Audio: the constraints that cannot be recovered later ════════════════ */

test('a1.16: no clip of an error is ever requested, and no bare adjective', () => {
  if (noSeed) return;
  const clips = (L!.audio?.recorded ?? []).flatMap((r) => r.clipIds ?? []);
  for (const bad of ['des beaux', 'des belles', 'une maison grande', 'un vieux ami', 'une rouge voiture']) {
    ok(!clips.some((c) => hasPhrase(c, bad)), `a recording was requested for « ${bad} », which is an error. A clip of an error is indistinguishable from a model once it leaves its card.`);
  }
  // Never record a pre-nominal adjective in isolation: a bare `grand` carries no
  // placement information, and the lesson is entirely about position.
  for (const a of ['grand', 'petit', 'beau', 'joli', 'bon', 'mauvais', 'vieux', 'jeune', 'gros', 'nouveau']) {
    ok(!clips.includes(a), `a bare "${a}" was requested as a clip and carries no placement information`);
  }
});

test('a1.16: the pair recording brief demands one take, and says so', () => {
  if (noSeed) return;
  // A constraint on how something is recorded becomes invisible the moment the
  // clip is delivered, so it lives in `desc` AND is pinned here.
  const pairs = (L!.audio?.recorded ?? []).find((r) => r.id === 'rec-a1-16-pairs');
  ok(pairs, 'the pair recording brief is gone');
  ok(/one take/i.test(pairs!.desc ?? ''), 'the pair brief does not require one take. Recorded apart, the learner compares two performances instead of two meanings.');
  const de = (L!.audio?.recorded ?? []).find((r) => r.id === 'rec-a1-16-de');
  ok(de && /must not be recorded/i.test(de.desc ?? ''), 'the de brief does not forbid recording the des form');
  const liaison = (L!.audio?.recorded ?? []).find((r) => r.id === 'rec-a1-16-liaison');
  ok(liaison && /adjacent/i.test(liaison.desc ?? ''), 'the liaison brief does not require the two sentences to be adjacent in one take');
});

/* ═══ Seed / source parity ═════════════════════════════════════════════════ */

test('a1.16: the seed lesson and the authored source are BYTE-FOR-BYTE the same lesson', () => {
  if (noSeed || noSrc) return;
  // ── This assertion is why the rest of the file is worth anything ─────────
  //
  // Almost every content check below reads the SEED, because the seed is what a
  // learner receives. The next author edits the SOURCE. So a check that reads
  // only the seed cannot see a source edit at all until somebody re-merges, and
  // an earlier version of this file compared only the mission count, the spine,
  // the version and the tranches. Mutation-testing it found the hole: reversing
  // a meaning pair, dropping `de beaux`, leaking an agreement explanation into a
  // drill, collapsing the pair screen to one column and quietly removing
  // `nouveau` from the closed set ALL left this suite green, because every one
  // of them changed the source and none of them changed the seed.
  //
  // Deep equality closes it. Any source edit that has not been merged now fails
  // HERE, immediately and by name, and any edit that HAS been merged is in the
  // seed where the content assertions can see it. There is no third state.
  deepStrictEqual(
    JSON.parse(JSON.stringify(SRC)), JSON.parse(JSON.stringify(L)),
    'the seed and the authored source have diverged. Re-run:\n'
    + '  pnpm tsx scripts/author-placement-batch.ts && pnpm tsx scripts/merge-placement-into-seed.ts\n'
    + 'Do not "fix" this by editing the seed.',
  );
});

test('a1.16: every authored row reached the seed unchanged', () => {
  if (noSeed || noSrc) return;
  for (const r of SRC_AUTHORED) {
    const it = ITEMS.get(r.id);
    ok(it, `${r.id} is authored and is not in the seed`);
    strictEqual(it!.fr, r.fr, `${r.id}: the seed and the source disagree about the French`);
    strictEqual(it!.en, r.en, `${r.id}: the seed and the source disagree about the gloss`);
    strictEqual(it!.theme, 'adjectifs-essentiels');
  }
  strictEqual(SRC_AUTHORED.length, 9, 'nine authored rows is the shape of this lesson: four pairs and the scene line');
});

test('a1.16: every imported row the lesson names is in the seed', () => {
  if (noSeed || noSrc) return;
  // adjectifs-essentiels is NOT in SEED_CUT.themes, so the merge has to carry
  // every one of these BY ID or the card renders empty on a device.
  for (const r of SRC_IMPORTED) {
    const it = ITEMS.get(r.id);
    ok(it, `${r.id} is imported and did not reach the seed, so its card draws nothing`);
    strictEqual(it!.fr, r.fr, `${r.id}: the seed and the manifest disagree about the French`);
  }
});

test('a1.16: the unit is bound, and its neighbours are untouched', () => {
  if (noSeed) return;
  const u = seed.units.find((x) => x.id === 'a1.16');
  ok(u, 'unit a1.16 is missing');
  deepStrictEqual(u!.lessonIds, ['a1.16.l1']);
  deepStrictEqual(u!.themes, ['adjectifs-essentiels'], 'a1.16 binds to adjectifs-essentiels, where a1.14 also lives');
  strictEqual(u!.seq, 18);
  // The stored tag has to agree with what missions.ts computes at render time,
  // or the two disagree the moment something reads the field instead. a1.03
  // shipped exactly that bug.
  strictEqual(L!.tag, `A1 · LEÇON ${u!.seq}`);
  // The neighbours this lesson shares a theme with must still be in the seed.
  for (const id of ['a1.14.l1', 'a1.13.l1', 'a1.11.l1']) {
    ok(seed.lessons.some((l) => l.id === id), `${id} is gone from the seed. a1.16's merge must not disturb it.`);
  }
});
