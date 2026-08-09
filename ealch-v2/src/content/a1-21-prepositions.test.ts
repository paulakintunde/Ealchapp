// Guards a1.21.l1 "Prépositions de lieu".
//
// This lesson has one failure mode that matters more than all the others, and it
// is not a crash: it is A COMPOUND PREPOSITION LOSING ITS `de` ON A SURFACE THE
// LEARNER COPIES.
//
// « à côté de la banque » teaches the rule. « à côté la banque » is the single
// most common thing an English speaker gets wrong in this part of French, and it
// survives because it WORKS: every French speaker understands it, nobody repeats
// it back, and the speaker never finds out. An edit that drops one `de` from a
// deck card leaves every other check in this file green while the lesson teaches
// the exact error it exists to prevent. It is the second test below.
//
// The assertion is SCOPED, and the scope is the whole reason it survives. Run
// over every string in the lesson it fires 28 times and 26 of those are
// legitimate: prose that NAMES the words ("Près, loin, à côté and en face all
// end in de"), gap-fill stems where the gap IS the de, the trap screen quoting
// the error in order to repair it, and the quiz distractors that exist to be
// rejected. The brief warns about exactly this: "Write it against decks, vocab,
// drills and quiz rather than every string, or it will fire on legitimate
// context and get deleted." So it runs over the surfaces that present French AS
// CORRECT, and a noisy version of this check would have been deleted by the next
// author, which is worse than no check.
//
// The other assertion that earns its place is layout rather than content: ONE
// SECTION must carry both shapes. `sur la boîte` against `à côté de la boîte`,
// same cat, same box, one taking `de` and one not. Split across two missions
// they become two unremarkable sentences and the contrast this lesson exists to
// teach is never visible on any screen. Checked by section id, because the
// two-shapes card deck ALSO carries the contrast in prose and a looser check
// passed with the designed screen deleted.
//
// And one that no shared checker can provide: `entre`. Invariant §3 records that
// `hasPlainNasalFor` cannot see a nasal that closes INSIDE a word, and `entre` is
// that case firing on a real shipped row. Measured: the checker returns FALSE for
// the broken `AHNTR` and FALSE for the repair alike, so calling it proves
// nothing. The repair is asserted BY NAME here, so a later author's
// validator-passing "fix" goes red instead of shipping.
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
// the five prepositions of the canDo, the two shapes, the four contraction rows
// and the six triggers: those are the SHAPE of the lesson rather than a
// measurement of it, and a later trim that quietly drops one is exactly what
// this file exists to stop.
//
// Nothing here reimplements app logic. `matchesAccept`, `dicteeMode`,
// `hasPlainNasalFor`, `buildQuizConfig`, `drillForRound`, `endingPopulation` and
// `validateDensity` are all imported from the modules the app itself runs. An
// earlier version of a1.01's test inlined its own glossary lookup, copied the
// version that was already broken, and passed while the feature was dead.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { ok, strictEqual, deepStrictEqual } from 'node:assert';
import { test } from 'node:test';
import { quizQuestions, validateLesson, type Lesson, type LessonSection } from './schema.ts';
import { hasPlainNasalFor, validateDensity, formatDensity } from './density.logic.ts';
import { dicteeMode, letterCount } from './dictee.logic.ts';
import { matchesAccept } from './answer.logic.ts';
import { buildQuizConfig, drillForRound } from './quizRounds.logic.ts';
import { endingPopulation } from './gender.logic.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  version: number;
  units: { id: string; seq: number; lessonIds: string[]; themes?: string[] | null; canDo?: string; sub?: string; title?: string; prereqUnitIds?: string[] | null }[];
  lessons: Lesson[];
  items: { id: string; kind: string; level: string; theme: string; fr: string; en: string; respell?: string; ipa?: string; drills: string[]; gender?: string }[];
};

const L = seed.lessons.find((l) => l.id === 'a1.21.l1');
// Before the batch and the merge have run, the seed has no a1.21.l1 and every
// seed-derived assertion below would fail for a reason that is not a content
// bug. Skip cleanly rather than reporting a build failure as a content failure.
const noSeed = !L;

const ITEMS = new Map(seed.items.map((i) => [i.id, i]));
const sec = (id: string): LessonSection | undefined => L?.sections.find((s) => s.id === id);

/* ── The shape of the lesson, stated once ─────────────────────────────────── */

/** FIVE, named individually rather than counted. These are the words the unit's
 *  canDo promises, and a count would pass if one were swapped for another. */
const THE_FIVE = ['sur', 'sous', 'dans', 'devant', 'derrière'] as const;

/** The bounded sixth. The canDo names five and the build was asked for six; `à`
 *  was taken WITH its contraction and the mismatch reported rather than the unit
 *  silently rewritten. */
const THE_SIXTH = 'à';

/** The four that end in `de`. This split IS the lesson. */
const DE_TAKING = ['à côté de', 'près de', 'loin de', 'en face de'] as const;

/** The stems that must never appear without a `de` behind them. */
const COMPOUND_STEMS = ['à côté', 'en face', 'près', 'loin'] as const;

const EXPECTED_TRIGGERS = 6;
const EXPECTED_ROUNDS = 6;
const EXPECTED_ACTS = 6;

/** The reframe, VERBATIM. Asserted against this constant rather than against a
 *  figure derived from the lesson: a derived count compares the content to
 *  itself and passes on any rewording. */
const REFRAME = 'One word goes straight onto the noun. A phrase needs de first.';

/** The `entre` repair, by name. See the header: no shared checker can defend
 *  this row, because the nasal closes inside the word. */
const ENTRE_RESPELL = 'AHⁿ-truh';

/** Accent-aware whole-word test. Never build a regex out of a search term: `\b`
 *  is ASCII-only in JavaScript and matches nothing next to a trailing é. */
const WORDCH = /[0-9A-Za-zÀ-ÖØ-öø-ÿ'’-]/;
function hasWord(hay: string, needle: string): boolean {
  const h = hay.toLowerCase();
  const n = needle.toLowerCase();
  let i = h.indexOf(n);
  while (i !== -1) {
    const before = i === 0 ? '' : h[i - 1];
    const after = h[i + n.length] ?? '';
    if (!WORDCH.test(before) && !WORDCH.test(after)) return true;
    i = h.indexOf(n, i + 1);
  }
  return false;
}

/** Every string anywhere in a value, for the checks that genuinely are global. */
function allStrings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) allStrings(x, out);
  else if (v && typeof v === 'object') for (const x of Object.values(v)) allStrings(x, out);
  return out;
}

/* ─── THE SURFACES THAT PRESENT FRENCH AS CORRECT ──────────────────────────
 *
 * The scope of the de-rule check, and of the no-non-spatial-sense check. These
 * are the strings a learner copies: deck cards, table cells, the vocabulary hub,
 * flashcard and review backs, drill items and pairs, scenario answers, and the
 * quiz's CORRECT answers. Prose, question stems, `why` lines and distractors are
 * excluded BY CONSTRUCTION rather than by a tolerance count, because a check
 * with a tolerance is a check nobody trusts.                                  */
function productionStrings(lesson: Lesson): { where: string; s: string }[] {
  const out: { where: string; s: string }[] = [];
  const add = (where: string, s?: unknown) => {
    if (typeof s === 'string' && s.trim()) out.push({ where, s });
  };
  for (const s of lesson.sections) {
    const x = s as unknown as Record<string, unknown>;
    const id = String(x.id);
    if (x.type === 'cardDeck') for (const c of x.cards as { fr?: string }[]) add(`${id}/card.fr`, c.fr);
    if (x.type === 'tapTable') {
      for (const r of x.rows as { cells: string[]; say?: string }[]) {
        for (const cell of r.cells) add(`${id}/cell`, cell);
        add(`${id}/say`, r.say);
      }
    }
    if (x.type === 'vocabThemes') {
      for (const t of x.themes as { cards: { fr: string }[] }[]) for (const c of t.cards) add(`${id}/vocab.fr`, c.fr);
    }
    if (x.type === 'flashcards' || x.type === 'reviewDeck') {
      for (const c of x.cards as { back: string }[]) add(`${id}/back`, c.back);
    }
    if (x.type === 'groupDrill') {
      for (const g of x.groups as { items: { fr: string }[] }[]) for (const it of g.items) add(`${id}/group.fr`, it.fr);
    }
    if (x.type === 'examples') for (const e of x.examples as { fr: string }[]) add(`${id}/example.fr`, e.fr);
    if (x.type === 'scenario') {
      for (const t of x.turns as { user: string; alts?: { fr: string }[] }[]) {
        add(`${id}/user`, t.user);
        for (const a of t.alts ?? []) add(`${id}/alt`, a.fr);
      }
    }
    if (x.type === 'listening') for (const l of x.lines as { fr: string }[]) add(`${id}/line.fr`, l.fr);
  }
  const quiz = lesson.sections.find((s) => s.type === 'quiz');
  if (quiz) {
    for (const q of quizQuestions(quiz as never) as { answer?: string; accept?: string[] }[]) {
      add('quiz/answer', q.answer);
      for (const a of q.accept ?? []) add('quiz/accept', a);
    }
  }
  for (const d of lesson.drills ?? []) for (const p of d.pairs ?? []) add(`${d.id}/pair`, p[1]);
  return out;
}

/* ═══ 1. The lesson is there and it validates ═══════════════════════════════ */

test('a1.21.l1 is in the seed and passes the real schema validator', { skip: noSeed }, () => {
  deepStrictEqual(validateLesson(L), [], 'validateLesson reported issues');
  strictEqual(L!.unitId, 'a1.21');
  strictEqual(L!.level, 'a1');
});

/* ═══ 2. THE ASSERTION THIS FILE EXISTS FOR ════════════════════════════════ */

test('no compound preposition ever loses its de on a surface the learner copies', { skip: noSeed }, () => {
  const bad: string[] = [];
  for (const { where, s } of productionStrings(L!)) {
    for (const stem of COMPOUND_STEMS) {
      const h = s.toLowerCase();
      let i = h.indexOf(stem.toLowerCase());
      while (i !== -1) {
        const rest = s.slice(i + stem.length);
        // Legitimate: followed by de / du / des / d', or ending the string,
        // which is the headword-card and table-cell case.
        const okAfter = /^\s*(de\b|du\b|des\b|d')/i.test(rest) || /^\s*$/.test(rest);
        if (!okAfter) bad.push(`${where}: "${s}"`);
        i = h.indexOf(stem.toLowerCase(), i + 1);
      }
    }
  }
  deepStrictEqual(bad, [], 'a compound preposition reached a production surface without its de, which is the exact error this lesson exists to prevent');
});

test('all four compound prepositions are taught, each with its de attached', { skip: noSeed }, () => {
  const strings = allStrings(L);
  for (const p of DE_TAKING) {
    ok(strings.some((s) => s.includes(p)), `${p} is never taught with its de`);
  }
});

/* ═══ 3. THE CONTRAST, ON ONE SCREEN ═══════════════════════════════════════ */

test('one section carries both shapes on the same noun, and it is s06-pair', { skip: noSeed }, () => {
  const s = sec('s06-pair');
  ok(s, 's06-pair is gone: the direct-versus-de contrast has no home');
  strictEqual(s!.type, 'tapTable', 'the contrast must be a two-column table, not prose');
  const rows = (s as unknown as { rows: { cells: string[] }[] }).rows;
  ok(rows.length >= 3, `the contrast table has only ${rows.length} rows`);
  for (const r of rows) {
    strictEqual(r.cells.length, 2, 'a contrast row must have exactly two columns');
    const [direct, compound] = r.cells;
    ok(
      THE_FIVE.some((w) => hasWord(direct, w)),
      `left cell "${direct}" carries none of the five single-word prepositions`,
    );
    ok(
      DE_TAKING.some((p) => compound.includes(p)),
      `right cell "${compound}" carries none of the four de-taking prepositions`,
    );
    // The whole point: SAME NOUN on both sides.
    const noun = direct.replace(/^\S+\s+/, '').trim();
    ok(
      compound.endsWith(noun),
      `the two cells use different nouns ("${direct}" / "${compound}"), so the only thing that changed is not the preposition`,
    );
  }
});

test('one section shows the same noun with all five prepositions', { skip: noSeed }, () => {
  // The minimal-pair principle has to be VISIBLE, not merely true. Checked on
  // the hero deck and the column table together: whichever is edited, one of
  // them must still put the five on one reference point.
  const candidates = ['s03-five', 's04-column'];
  const wins = candidates.filter((id) => {
    const s = sec(id);
    if (!s) return false;
    const strings = allStrings(s);
    return THE_FIVE.every((w) => strings.some((str) => hasWord(str, w)));
  });
  ok(wins.length >= 1, `neither ${candidates.join(' nor ')} shows all five prepositions on one screen`);

  // And the hero deck's cards must genuinely differ in one word only.
  const deck = sec('s03-five') as unknown as { cards: { fr?: string }[] } | undefined;
  if (deck) {
    const frames = deck.cards
      .map((c) => c.fr)
      .filter((f): f is string => !!f && !f.includes('·'))
      .map((f) => f.replace(new RegExp(`\\b(${THE_FIVE.join('|')})\\b`), '___'));
    const distinct = new Set(frames);
    strictEqual(
      distinct.size, 1,
      `the hero deck's sentences do not share one frame; blanking the preposition leaves ${distinct.size} different sentences: ${[...distinct].join(' | ')}`,
    );
  }
});

/* ═══ 4. The five, and the sixth ═══════════════════════════════════════════ */

for (const w of THE_FIVE) {
  test(`the canDo preposition "${w}" is taught and reaches a production surface`, { skip: noSeed }, () => {
    const produce = productionStrings(L!).map((p) => p.s);
    ok(produce.some((s) => hasWord(s, w)), `${w} never appears on a surface the learner copies`);
  });
}

test('à was taken as the sixth, with its contraction and both non-contracting cases', { skip: noSeed }, () => {
  const strings = allStrings(L);
  ok(strings.some((s) => hasWord(s, THE_SIXTH)), 'à is not taught');
  // A contraction taught without its non-contracting cases is one the learner
  // over-applies, and over-application is a worse error than never having met it.
  ok(strings.some((s) => hasWord(s, 'au')), 'au is not taught');
  ok(strings.some((s) => hasWord(s, 'aux')), 'aux is not taught');
  ok(strings.some((s) => s.includes('à la')), 'à la is not shown NOT contracting');
  ok(strings.some((s) => s.includes("à l'")), "à l' is not shown NOT contracting");
});

test('the contraction table shows all four rows, two changing and two not', { skip: noSeed }, () => {
  const s = sec('s10-contract') as unknown as { rows: { cells: string[] }[] } | undefined;
  ok(s, 's10-contract is gone');
  const pairs = s!.rows.map((r) => r.cells.join(' → '));
  strictEqual(s!.rows.length, 4, 'the contraction has exactly four cases');
  const unchanged = s!.rows.filter((r) => r.cells[0].replace(/\s*\+\s*/, ' ').trim() === r.cells[1].trim());
  strictEqual(
    unchanged.length, 2,
    `exactly two rows must NOT change and ${unchanged.length} do: ${pairs.join(' | ')}`,
  );
});

/* ═══ 5. The du collision, named ═══════════════════════════════════════════ */

test('the du collision with a1.29 partitive is named, not shipped silently', { skip: noSeed }, () => {
  const strings = allStrings(L).join('   ');
  ok(strings.includes('du'), 'du is never mentioned');
  // The lesson must SAY the two are the same letters doing different jobs.
  const namesBoth = /partitive|some\b/i.test(strings) && /of the/i.test(strings);
  ok(namesBoth, 'the lesson teaches de + le = du without naming the partitive du a learner already met in a1.29');
  // And the des collision with a1.11's indefinite plural.
  ok(strings.includes('des'), 'des is never mentioned');
});

test('a1.29 is still in the seed, because this lesson extends it rather than repeating it', { skip: noSeed }, () => {
  ok(seed.lessons.some((l) => l.id === 'a1.29.l1'), 'a1.29.l1 has gone: the du reconciliation now points at nothing');
});

/* ═══ 6. The respelling repairs ════════════════════════════════════════════ */

test('dans and devant close their nasal with the superscript, through the real checker', { skip: noSeed }, () => {
  for (const [id, fr] of [['fr.sons.mots-essentiels.013', 'dans'], ['fr.sons.mots-essentiels.021', 'devant']] as const) {
    const row = ITEMS.get(id);
    ok(row, `${id} (${fr}) is not in the seed, so the repair never reaches a device`);
    ok(row!.respell, `${id} has no respelling at all`);
    ok(
      !hasPlainNasalFor(fr, row!.respell!),
      `${id} "${row!.respell}" closes a nasal with a plain n; there is no n sound in ${fr}`,
    );
  }
});

test('entre is repaired BY NAME, because no shared checker can defend it', { skip: noSeed }, () => {
  const row = ITEMS.get('fr.sons.mots-essentiels.020');
  ok(row, 'fr.sons.mots-essentiels.020 (entre) is not in the seed');
  strictEqual(row!.fr, 'entre');

  // FIRST, the fact that makes this test necessary. Invariant §3: the checker
  // needs the n or m to END a token, and entre's nasal closes word-internally.
  // It returns the SAME answer for the broken form and for the repair, so
  // calling it proves nothing at all here.
  strictEqual(
    hasPlainNasalFor('entre', 'AHNTR'), false,
    'hasPlainNasalFor now flags AHNTR. If the checker has learned to see word-internal nasals, this test can be simplified and invariant §3 updated.',
  );

  // SO THE REPAIR IS ASSERTED BY NAME. A later author whose "fix" passes the
  // shared validator will go red here instead of shipping.
  strictEqual(
    row!.respell, ENTRE_RESPELL,
    `entre must respell as ${ENTRE_RESPELL}. /ɑ̃tʁ/ has NO n sound: the en is a single nasal vowel and TR is not a syllable an English reader can pronounce. The shared checker cannot tell a wrong answer from a right one here, so this value is pinned by hand.`,
  );
  ok(!/[^ⁿ]n/i.test(row!.respell!), `entre's respelling contains a plain n: ${row!.respell}`);
});

test('à carries one respelling, not two', { skip: noSeed }, () => {
  const rows = seed.items.filter((i) => i.fr === 'à' && i.kind !== 'sentence');
  const spellings = new Set(rows.map((r) => r.respell).filter(Boolean));
  ok(rows.length > 0, 'à is not in the seed as a headword');
  strictEqual(
    spellings.size, 1,
    `à carries ${spellings.size} competing respellings: ${[...spellings].join(' | ')}. One word, one sound, one answer.`,
  );
});

test('loin de is repaired, which the brief could not have asked for', { skip: noSeed }, () => {
  // The brief said `loin` was "genuinely absent and safe to author". It exists,
  // as `loin de`, at fr.sons.mots-essentiels.031, and its shipped respelling
  // closed the nasal with a plain n. Importing it found the repair.
  const row = ITEMS.get('fr.sons.mots-essentiels.031');
  ok(row, 'fr.sons.mots-essentiels.031 (loin de) is not in the seed');
  strictEqual(row!.fr, 'loin de');
  ok(!hasPlainNasalFor('loin de', row!.respell ?? ''), `"${row!.respell}" closes loin's nasal with a plain n`);
});

/* ═══ 7. The dictée and the quiz ═══════════════════════════════════════════ */

test('every dictée target stays in LETTERS mode', { skip: noSeed }, () => {
  const s = sec('s21-dictation') as unknown as { itemIds: string[] } | undefined;
  ok(s, 's21-dictation is gone');
  const wrong: string[] = [];
  for (const id of s!.itemIds) {
    const row = ITEMS.get(id);
    ok(row, `dictée target ${id} is not in the seed`);
    if (dicteeMode(row!.fr) !== 'letters') wrong.push(`${id} (${letterCount(row!.fr)} letters) "${row!.fr}"`);
  }
  deepStrictEqual(
    wrong, [],
    'a word-mode dictée hands the learner each whole word as a pre-spelled tile, so a sur tile and a sous tile are both on the board and choosing between them, which is the entire lesson, is given away',
  );
});

test('the exam is at most half mcq and every question carries a why', { skip: noSeed }, () => {
  const quiz = L!.sections.find((s) => s.type === 'quiz');
  ok(quiz, 'no quiz section');
  const qs = quizQuestions(quiz as never);
  const mcq = qs.filter((q) => (q.format ?? 'mcq') === 'mcq').length;
  ok(mcq * 2 <= qs.length, `mcq is ${mcq}/${qs.length}, which is more than half`);
  deepStrictEqual(qs.filter((q) => !q.why).map((q) => q.q), [], 'question(s) without a why');
  deepStrictEqual(qs.filter((q) => !q.ref).map((q) => q.q), [], 'question(s) without a ref');
  for (const q of qs) {
    if (!q.ref) continue;
    ok(sec(q.ref), `question ref "${q.ref}" names a section that does not exist`);
  }
});

test('every free-text question accepts the answer it displays', { skip: noSeed }, () => {
  const quiz = L!.sections.find((s) => s.type === 'quiz');
  const bad: string[] = [];
  for (const q of quizQuestions(quiz as never)) {
    if (!['typeIn', 'errorSpot', 'speak'].includes(q.format ?? '')) continue;
    if (!q.accept || !q.answer) { bad.push(`${q.q} has no accept/answer`); continue; }
    if (!matchesAccept(q.answer, q.accept)) bad.push(`${q.q} → "${q.answer}"`);
  }
  deepStrictEqual(bad, [], 'free-text question(s) reject the answer they show');
});

test('no quiz option refers to a position, and none is duplicated', { skip: noSeed }, () => {
  // QuizDeckView shuffles the options of every closed question per attempt and
  // re-shuffles on retry, so the positions the learner sees are never the
  // positions authored here. This lesson is a verbal minefield for it, because
  // it is ABOUT spatial position and "the first one" reads as natural English.
  const POSITIONAL = [
    'the first', 'the second', 'the third', 'the last', 'the one above',
    'the one below', 'both of the above', 'all of the above', 'none of these',
    'none of the above', 'the top one', 'the bottom one',
  ];
  const quiz = L!.sections.find((s) => s.type === 'quiz');
  const bad: string[] = [];
  for (const q of quizQuestions(quiz as never)) {
    for (const o of q.opts ?? []) {
      for (const p of POSITIONAL) if (o.toLowerCase().includes(p)) bad.push(`"${o}" in "${q.q}"`);
    }
    if (q.opts && new Set(q.opts).size !== q.opts.length) bad.push(`duplicate option in "${q.q}"`);
  }
  deepStrictEqual(bad, [], 'option(s) refer to a list position or repeat, and the list is shuffled per attempt');
});

test('no listenChoose question tries to separate à from a', { skip: noSeed }, () => {
  // They are homophones. fold() strips accents, so no free-text format can test
  // them either. An ear question here certifies nothing while looking exactly
  // like one that does.
  const quiz = L!.sections.find((s) => s.type === 'quiz');
  const bad: string[] = [];
  for (const q of quizQuestions(quiz as never)) {
    if (q.format !== 'listenChoose') continue;
    const opts = (q.opts ?? []).map((o) => o.trim().toLowerCase());
    const hasA = opts.some((o) => o === 'a' || o === 'à');
    if (hasA) bad.push(q.q);
    // Also catch an ear question whose clip differs only by the mark.
    const clip = (q.audio as { clip?: string } | undefined)?.clip ?? '';
    if (/\bsûr\b/i.test(clip) && /\bsur\b/i.test(clip)) bad.push(`${q.q} (sur/sûr in one clip)`);
  }
  deepStrictEqual(bad, [], 'ear question(s) on a pair that is acoustically identical');
});

test('every drill is the first resolving target of exactly one round', { skip: noSeed }, () => {
  // drillForRound walks a round's targets and stops at the FIRST that resolves,
  // so a drill named only in second place never runs. a1.05 shipped two such
  // drills and a1.07's first draft a third.
  const quiz = L!.sections.find((s) => s.type === 'quiz') as unknown as {
    rounds: { id: string; targets?: string[] }[]; roundFailThreshold?: number; passMark?: number;
  };
  strictEqual(quiz.rounds.length, EXPECTED_ROUNDS, 'the quiz round count has moved');
  const cfg = buildQuizConfig(quiz.rounds as never, {
    errorTriggers: L!.errorTriggers,
    drills: L!.drills,
    roundFailThreshold: quiz.roundFailThreshold,
    passMark: quiz.passMark,
  });
  const fired = new Map<string, string[]>();
  for (let i = 0; i < quiz.rounds.length; i++) {
    const d = drillForRound(cfg, i);
    ok(d, `round ${quiz.rounds[i].id} fires no drill`);
    fired.set(d!, [...(fired.get(d!) ?? []), quiz.rounds[i].id]);
  }
  const dead = (L!.drills ?? [])
    .filter((d) => !d.id.startsWith('retest-'))
    .filter((d) => !fired.has(d.id))
    .map((d) => d.id);
  deepStrictEqual(dead, [], 'drill(s) named by no round as a first resolving target, so they are dead content');
});

/* ═══ 8. What must NOT be here ═════════════════════════════════════════════ */

test('no non-spatial sur or devant reaches a production surface', { skip: noSeed }, () => {
  // `sur` also means ABOUT and `devant` also means BEFORE, and both senses are
  // in the corpus. Measured: 5.3% of sur and 1.5% of devant. Scoped to
  // production surfaces, as the brief instructs, so it does not fire on
  // legitimate prose and get deleted.
  const ABOUT = ['avis sur', 'opinion sur', 'article sur', 'livre sur', 'question sur',
    'conférence sur', 'compter sur', 'enquête sur', 'rapport sur', 'débat sur'];
  const BEFORE = ['devant une voyelle', 'devant la profession', 'devant un nom', 'devant le nom'];
  const bad: string[] = [];
  for (const { where, s } of productionStrings(L!)) {
    for (const c of [...ABOUT, ...BEFORE]) if (s.toLowerCase().includes(c)) bad.push(`${where}: "${s}"`);
  }
  deepStrictEqual(bad, [], 'a non-spatial sense of sur or devant leaked onto a surface that teaches position');
});

test('en + country is absent, because a1.22 owns it', { skip: noSeed }, () => {
  const strings = allStrings(L).join('   ');
  const COUNTRIES = ['en France', 'en Espagne', 'en Italie', 'en Allemagne', 'en Chine',
    'au Portugal', 'au Japon', 'au Canada', 'aux États-Unis', 'au Brésil'];
  const found = COUNTRIES.filter((c) => strings.includes(c));
  deepStrictEqual(found, [], 'en/au + country belongs to a1.22 and appears here');
  ok(seed.lessons.some((l) => l.id === 'a1.22.l1'), 'a1.22.l1 is not in the seed, so this absence guards nothing');
});

test('no production surface asks the learner to conjugate anything but être or avoir', { skip: noSeed }, () => {
  // There is no regular-verb unit in A1; -er verbs are a2.01. The corpus's
  // spatial sentences are full of dort, range, cache and se trouve, and all of
  // those are READING EXPOSURE here. Asserted against produce-surfaces only.
  const OTHER = ['dort', 'dorment', 'range', 'rangent', 'cache', 'monte', 'court',
    'attend', 'écrit', 'joue', 'jouent', 'habite', 'habitons', 'habitent',
    'travaille', 'reste', 'passe', 'vais', 'allons', 'met', 'pose', 'revient',
    'saute', 'marche', 'trouve', 'dansons', 'mangeons'];
  const bad: string[] = [];
  for (const id of ['s21-dictation', 's22-speak']) {
    const s = sec(id) as unknown as { itemIds?: string[] } | undefined;
    for (const itemId of s?.itemIds ?? []) {
      const row = ITEMS.get(itemId);
      if (!row) continue;
      for (const v of OTHER) if (hasWord(row.fr, v)) bad.push(`${id} → ${itemId} "${row.fr}" (${v})`);
    }
  }
  deepStrictEqual(bad, [], 'a production surface asks for a verb the learner has not been taught');
});

test('no imageRef is authored, because nothing validates one', { skip: noSeed }, () => {
  // `lessonImage(ref)` is a plain lookup in a statically enumerated REG and an
  // unregistered ref draws a BLANK BOX. `lesson-contract.test.ts` contains no
  // reference to imageRef, despite a comment in schema.ts promising a check that
  // is conditional on an asset manifest which does not exist. Spatial relations
  // are the most visual topic in A1 and this warning applies harder here than
  // anywhere.
  ok(
    !JSON.stringify(L).includes('"imageRef"'),
    'an imageRef is authored and NOTHING checks it. Register every ref in lessonImages.ts REG and extend this test before authoring one.',
  );
});

test('the deliberately non-spatial imported row stays off every spatial surface', { skip: noSeed }, () => {
  // fr.a1.prepositions-essentielles.099 "Les enfants jouent aux cartes." is kept
  // ONLY as evidence for the aux contraction. It is not about position.
  const SPATIAL = ['s03-five', 's04-column', 's06-pair', 's07-sort', 's15-etre', 's16-ear', 's17-reading'];
  const bad = SPATIAL.filter((id) => {
    const s = sec(id);
    return s && JSON.stringify(s).includes('fr.a1.prepositions-essentielles.099');
  });
  deepStrictEqual(bad, [], 'a row that is not about position appears on a screen that teaches position');
});

/* ═══ 9. The spine, the acts and the tranches ══════════════════════════════ */

test('the acts cover every section exactly once, in order', { skip: noSeed }, () => {
  const acts = L!.acts ?? [];
  strictEqual(acts.length, EXPECTED_ACTS, 'the act count has moved');
  const named = acts.flatMap((a) => a.sections);
  const ids = L!.sections.map((s) => s.id);
  deepStrictEqual(named, ids, 'the acts do not name every section exactly once in document order');
  strictEqual(new Set(named).size, named.length, 'two acts claim the same section');
});

test('the reframe is authored verbatim in at least three sections', { skip: noSeed }, () => {
  const n = L!.sections.filter((s) => allStrings(s).some((str) => str.includes(REFRAME))).length;
  ok(n >= 3, `the reframe appears in ${n} section(s); the density validator requires three`);
  strictEqual(L!.reframe, REFRAME, 'the lesson-level reframe has drifted from the line the sections carry');
});

test('tranches release every taught item exactly once and nothing untaught', { skip: noSeed }, () => {
  const tranches = L!.deckTranche ?? [];
  strictEqual(tranches.length, EXPECTED_ACTS, 'there must be one tranche per act, index-aligned');
  const released = tranches.flat();
  strictEqual(new Set(released).size, released.length, 'an item is released by two tranches, so the SRS would ask for two ratings on one card');
  const taught = new Set(L!.itemIds ?? []);
  deepStrictEqual(released.filter((id) => !taught.has(id)), [], 'tranche(s) release item(s) the lesson does not teach');
  deepStrictEqual([...taught].filter((id) => !released.includes(id)), [], 'item(s) taught but released by no tranche, so they never reach spaced repetition');
});

test('no tranche releases an item the acts before it have not shown', { skip: noSeed }, () => {
  // A card released before its mission is a card the learner is asked to rate
  // before they have met it.
  //
  // MATCHED ON THE ITEM'S TEXT AS WELL AS ITS ID, and that is not belt and
  // braces. The lesson body resolves items through `frOf(id)` at module load, so
  // a section that displays a sentence contains the SENTENCE and not the id. An
  // id-only check reports every single tranche as early and is measuring the
  // authoring style rather than what the learner saw.
  const acts = L!.acts ?? [];
  const tranches = L!.deckTranche ?? [];
  const bad: string[] = [];
  for (let i = 0; i < tranches.length; i++) {
    const seenText = acts.slice(0, i + 1)
      .flatMap((a) => a.sections)
      .map((id) => JSON.stringify(sec(id) ?? {}))
      .join('\n');
    for (const id of tranches[i]) {
      const it = ITEMS.get(id);
      if (!it) continue;
      if (!seenText.includes(id) && !seenText.includes(it.fr)) {
        bad.push(`act ${i + 1} releases ${id} "${it.fr}" before any of its sections shows it`);
      }
    }
  }
  deepStrictEqual(bad, [], 'a card is released to spaced repetition before the learner has met it');
});

test('every declared itemId resolves in the seed', { skip: noSeed }, () => {
  const missing = (L!.itemIds ?? []).filter((id) => !ITEMS.has(id));
  deepStrictEqual(
    missing, [],
    'declared itemId(s) are absent from the seed and would render as empty cards. prepositions-essentielles is OUTSIDE SEED_CUT.themes, so the merge must CARRY these rows: re-run merge-prepositions-into-seed.ts.',
  );
});

test('every section a sheetId names exists, and every sheet is reachable', { skip: noSeed }, () => {
  const sheetIds = new Set((L!.sheets ?? []).map((s) => s.id));
  const referenced = new Set<string>();
  for (const s of L!.sections) {
    const id = (s as unknown as { sheetId?: string }).sheetId;
    if (!id) continue;
    referenced.add(id);
    ok(sheetIds.has(id), `section ${s.id} names sheet "${id}", which the lesson does not declare`);
  }
  deepStrictEqual([...sheetIds].filter((id) => !referenced.has(id)), [], 'declared sheet(s) reachable from no section');
});

test('reference sheets use only the section types the sheet renderer draws', { skip: noSeed }, () => {
  // ReferenceSheet.tsx draws ONLY teach, letterGrid and table inside a sheet and
  // falls through to a title-only branch for anything else. a1.17 shipped two
  // sheets that opened with a heading and nothing under it, and it was found on
  // a device and by nothing else.
  const DRAWN = new Set(['teach', 'letterGrid', 'table']);
  const bad: string[] = [];
  for (const sheet of L!.sheets ?? []) {
    for (const s of sheet.sections ?? []) {
      if (!DRAWN.has(s.type)) bad.push(`${sheet.id} → ${s.id} is a "${s.type}", which draws its title and nothing else`);
    }
  }
  deepStrictEqual(bad, [], 'reference sheet section(s) the sheet renderer cannot draw');
});

test('exactly one quiz section, and it carries rounds', { skip: noSeed }, () => {
  // lessonPager.logic.ts appends exactly one quiz page via
  // sections.find(s => s.type === 'quiz'). a1.01 shipped twelve final-exam
  // questions in a second quiz section and the pager drew none of them.
  const quizzes = L!.sections.filter((s) => s.type === 'quiz');
  strictEqual(quizzes.length, 1, 'a second quiz section would never be rendered');
  ok((quizzes[0] as unknown as { rounds?: unknown[] }).rounds?.length, 'the quiz has no rounds');
});

test('the reading section can actually render its glossary', { skip: noSeed }, () => {
  // `reading` + `glossary` needs questionsInModal: true AND questions, or the
  // glossary never reaches its renderer. Ten glossary entries across sons.05,
  // .07 and .09 were dead for exactly this reason.
  const s = sec('s17-reading') as unknown as {
    glossary?: unknown[]; questions?: unknown[]; questionsInModal?: boolean; text: string;
  } | undefined;
  if (!s?.glossary?.length) return;
  strictEqual(s.questionsInModal, true, 'a reading glossary without questionsInModal is drawn by nothing');
  ok((s.questions ?? []).length > 0, 'questionsInModal with no questions renders nothing');
  ok(!s.text.includes('\n'), 'a reading passage is ONE BLOCK: PassagePage splits on sentence punctuation and an authored newline is silently discarded');
  // MAX_GLOSS_WORDS is four; a key of five or more can never match.
  const tooLong = (s.glossary as { word: string }[]).filter((g) => g.word.trim().split(/\s+/).length > 4);
  deepStrictEqual(tooLong.map((g) => g.word), [], 'glossary key(s) of five or more words can never match');
  // And every key must actually occur in the passage.
  const absent = (s.glossary as { word: string }[]).filter((g) => !s.text.toLowerCase().includes(g.word.toLowerCase()));
  deepStrictEqual(absent.map((g) => g.word), [], 'glossary key(s) that do not appear in the passage');
});

test('the six error triggers each name a drill and a retest that exist', { skip: noSeed }, () => {
  const triggers = L!.errorTriggers ?? [];
  strictEqual(triggers.length, EXPECTED_TRIGGERS, 'the trigger count has moved');
  const drillIds = new Set((L!.drills ?? []).map((d) => d.id));
  for (const t of triggers) {
    ok(drillIds.has(t.drill), `trigger ${t.id} names drill "${t.drill}", which does not exist`);
    if (t.retest) ok(drillIds.has(t.retest), `trigger ${t.id} names retest "${t.retest}", which does not exist`);
    for (const d of t.detectOn) {
      const sectionId = d.split('/')[0];
      ok(sec(sectionId), `trigger ${t.id} detects on "${d}", and section ${sectionId} does not exist`);
    }
  }
});

test('no groupDrill control page stacks items with its check', { skip: noSeed }, () => {
  // A control page carries items: [] EXPLICITLY. An xl groupDrill must never
  // stack words and a check in one group, and this has shipped as a crash twice.
  const bad: string[] = [];
  for (const s of L!.sections) {
    if (s.type !== 'groupDrill') continue;
    const g = s as unknown as { id: string; size?: string; groups: { label: string; items?: unknown[] }[] };
    for (const grp of g.groups) {
      if (grp.items === undefined) bad.push(`${g.id} → "${grp.label}" omits items entirely`);
    }
    if (g.size === 'xl') {
      bad.push(`${g.id} is size xl, which caps EVERY string in the section at twelve words, and every check here carries a why that teaches`);
    }
  }
  deepStrictEqual(bad, [], 'groupDrill layout problem(s)');
});

test('commonErrors carries swipe and lg, one error per screen', { skip: noSeed }, () => {
  for (const s of L!.sections) {
    if (s.type !== 'commonErrors') continue;
    const x = s as unknown as { id: string; swipe?: boolean; size?: string };
    strictEqual(x.swipe, true, `${x.id}: commonErrors without swipe hits a break that falls out of the switch and returns undefined, which is how a1.01 shipped a fully blank mission`);
    strictEqual(x.size, 'lg', `${x.id}: commonErrors wants size lg`);
  }
});

/* ═══ 10. House rules ══════════════════════════════════════════════════════ */

test('no em dash and no "honest" anywhere in the lesson', { skip: noSeed }, () => {
  const strings = allStrings(L);
  const dashes = strings.filter((s) => s.includes('—') || s.includes('–'));
  deepStrictEqual(dashes.slice(0, 5), [], 'em or en dash in authored copy');
  const honest = strings.filter((s) => /honest/i.test(s));
  deepStrictEqual(honest.slice(0, 5), [], '"honest" is banned from authored content');
});

test('no autoplay is authored', { skip: noSeed }, () => {
  ok(!JSON.stringify(L).includes('"autoplay"'), 'autoplay is declared in schema.ts and implemented in NO component. Use audioFirst.');
});

test('U+203F does not appear, because it renders as a low underscore', { skip: noSeed }, () => {
  ok(!JSON.stringify(L).includes('‿'), 'the undertie renders as an underscore on a Pixel 6');
});

test('the lesson passes the real density validator', { skip: noSeed }, () => {
  const known = new Set(seed.items.map((i) => i.id));
  const issues = validateDensity(L!, known);
  strictEqual(issues.length, 0, formatDensity(issues));
});

/* ═══ 11. The unit ═════════════════════════════════════════════════════════ */

test('the unit is bound to its theme and links this lesson', { skip: noSeed }, () => {
  const u = seed.units.find((x) => x.id === 'a1.21');
  ok(u, 'unit a1.21 is not in the seed');
  deepStrictEqual(u!.themes, ['prepositions-essentielles'], 'the unit is not bound to the theme that holds its corpus');
  ok(u!.lessonIds.includes('a1.21.l1'), 'the unit does not link its lesson');
  strictEqual(Number(u!.seq), 24, 'the unit has moved on the spine');
  // The eyebrow the renderer computes must agree with the stored tag.
  strictEqual(L!.tag, `A1 · LEÇON ${u!.seq}`, 'the stored tag disagrees with what missions.ts derives from unit.seq');
});

test('the unit canDo is unchanged, and the à mismatch is deliberate', { skip: noSeed }, () => {
  const u = seed.units.find((x) => x.id === 'a1.21')!;
  strictEqual(
    u.canDo, 'Can say where things are with sur, sous, dans, devant and derrière',
    'the canDo was rewritten. It names FIVE prepositions and the build was asked for SIX; à was taken as a bounded sixth and the mismatch REPORTED rather than the unit silently edited.',
  );
  strictEqual(u.sub, 'Prépositions de lieu');
  strictEqual(u.title, 'Prepositions of Place');
});

/* ═══ 12. Corpus integrity ═════════════════════════════════════════════════ */

test('no two non-sentence rows share an fr within a theme', { skip: noSeed }, () => {
  // Computed the way flashhub-coverage.test.ts computes it: two rows sharing an
  // fr in one theme are ONE CARD SERVED TWICE. This is the check that caught the
  // largest error of this build, before anything was written: `près de` and
  // `loin de` already existed in the theme this lesson was about to author into.
  const bare = (s: string) => s.replace(/^(le |la |les |l'|un |une |des )/i, '').trim().toLowerCase();
  const byThemeFr = new Map<string, string[]>();
  for (const i of seed.items) {
    if (i.kind === 'sentence') continue;
    const key = `${i.theme} ${bare(i.fr)}`;
    byThemeFr.set(key, [...(byThemeFr.get(key) ?? []), i.id]);
  }
  // Scoped to the themes this lesson touches, so it reports a1.21's own damage
  // rather than the whole corpus's pre-existing state.
  const OURS = new Set(['prepositions-essentielles', 'mots-essentiels']);
  const dupes: string[] = [];
  for (const [key, ids] of byThemeFr) {
    if (ids.length < 2) continue;
    const [theme, fr] = key.split(' ');
    if (!OURS.has(theme)) continue;
    dupes.push(`${theme} "${fr}": ${ids.join(', ')}`);
  }
  deepStrictEqual(dupes, [], 'duplicate headword(s) in a theme this lesson authors into');
});

test('a1.03 ending population is unmoved by this lesson', { skip: noSeed }, () => {
  // Any row with gender set, kind 'word', and no space in its bare noun joins
  // a1.03's measured ending population, and a1-03-genre.test.ts re-measures
  // twenty printed figures from the seed on every run. a1.11 moved a1.03's -e
  // statistic exactly this way.
  const ours = seed.items.filter((i) => i.id.startsWith('fr.a1.prepositions-essentielles.')
    || ['fr.sons.mots-essentiels.171', 'fr.sons.mots-essentiels.172'].includes(i.id));
  const risky = endingPopulation(ours as never);
  deepStrictEqual(
    risky.map((i) => `${i.id} "${i.fr}"`), [],
    'a row this lesson authored joins a1.03\'s measured ending population. Withdraw it rather than arguing: every headword here is deliberately multi-word and ungendered.',
  );
});

test('the authored sentences are all present and all built on être', { skip: noSeed }, () => {
  const authored = seed.items.filter((i) => /^fr\.a1\.prepositions-essentielles\.1(2\d|3\d|4[0-3])$/.test(i.id));
  ok(authored.length >= 20, `only ${authored.length} authored rows reached the seed`);
  const notEtre = authored.filter((i) => !/\b(est|sont|suis|es|sommes|êtes|c'est)\b/i.test(i.fr));
  deepStrictEqual(notEtre.map((i) => `${i.id} "${i.fr}"`), [], 'authored row(s) not built on être');
});

/* ═══ 13. Seed / source parity ═════════════════════════════════════════════ */

test('the seed lesson is byte-identical to the authored source', { skip: noSeed }, async () => {
  // The failure mode this catches has twice cost this project real work: the
  // seed and the source drift, somebody edits one, and the device shows the
  // other. Every figure below is DERIVED from the source rather than restated.
  const src = await import('../../../ealch-admin/scripts/data/prepositions-lesson.ts') as {
    PREPOSITIONS_LESSON: Lesson;
  };
  deepStrictEqual(
    JSON.parse(JSON.stringify(src.PREPOSITIONS_LESSON)), JSON.parse(JSON.stringify(L)),
    'seed.json and prepositions-lesson.ts have drifted. Re-run merge-prepositions-into-seed.ts.',
  );
});

test('every imported row is in the seed and says what the manifest says', { skip: noSeed }, async () => {
  // prepositions-essentielles is NOT in SEED_CUT.themes, so every one of these
  // had to be CARRIED by the merge. If one is missing it renders as an empty
  // card and nothing else in the suite would say so.
  //
  // The brief states the opposite: that the rows "will not appear in the seed"
  // and that "a merge that leaves the seed unchanged is behaving correctly".
  // Following that ships a lesson of blank cards. Measured: couleurs (48),
  // meteo (25), adjectifs-essentiels (92), negation-et-restriction (33) and
  // pays-et-nationalites (48) are all out-of-cut and all carried.
  const src = await import('../../../ealch-admin/scripts/data/prepositions-imported.ts') as {
    IMPORTED: { id: string; fr: string; en: string }[];
  };
  const bad: string[] = [];
  for (const r of src.IMPORTED) {
    const row = ITEMS.get(r.id);
    if (!row) { bad.push(`${r.id} "${r.fr}" is not in the seed`); continue; }
    if (row.fr !== r.fr) bad.push(`${r.id}: seed "${row.fr}" vs manifest "${r.fr}"`);
  }
  deepStrictEqual(bad, [], 'imported row(s) absent from the seed or drifted. Re-run merge-prepositions-into-seed.ts.');
});

test('the rejected rows stayed rejected', { skip: noSeed }, async () => {
  const src = await import('../../../ealch-admin/scripts/data/prepositions-imported.ts') as {
    REJECTED: { id: string; fr: string; why: string }[];
  };
  const leaked = src.REJECTED.filter((r) => (L!.itemIds ?? []).includes(r.id));
  deepStrictEqual(
    leaked.map((r) => `${r.id}: ${r.why}`), [],
    'a row rejected for carrying a non-spatial sense is back in itemIds',
  );
});

test('the two authored headwords are the only ones this lesson wrote', { skip: noSeed }, async () => {
  // TWO, not four. `près de` and `loin de` already existed at
  // fr.sons.mots-essentiels.030 and .031, inside the compound-preposition block
  // this lesson extends. The brief's "genuinely absent and safe to author" was
  // the largest thing this build measured wrong.
  const src = await import('../../../ealch-admin/scripts/data/prepositions-corpus.ts') as {
    AUTHORED_WORDS: { id: string; fr: string }[];
    IMPORTED_COMPOUND_HEADWORDS: string[];
  };
  deepStrictEqual(
    src.AUTHORED_WORDS.map((w) => w.fr).sort(), ['en face de', 'à côté de'].sort(),
    'the authored headword set has changed. Check the theme for an existing row before adding one.',
  );
  for (const id of src.IMPORTED_COMPOUND_HEADWORDS) {
    ok(ITEMS.has(id), `${id} is imported rather than authored and must reach the seed through the merge`);
  }
});

test('the respelling repairs in the source match what shipped', { skip: noSeed }, async () => {
  const src = await import('../../../ealch-admin/scripts/data/prepositions-corpus.ts') as {
    REPAIRS: { id: string; fr: string; was: string; now: string; sharedCheckerSees: boolean }[];
  };
  const bad: string[] = [];
  for (const r of src.REPAIRS) {
    const row = ITEMS.get(r.id);
    if (!row) continue; // outside the seed cut and not carried: Postgres-only
    if (row.respell !== r.now) bad.push(`${r.id}: seed "${row.respell}" vs source "${r.now}"`);
    if (hasPlainNasalFor(r.fr, r.now)) bad.push(`${r.id}: the repair "${r.now}" is itself flagged`);
  }
  deepStrictEqual(bad, [], 'respelling repair(s) did not reach the seed or are themselves wrong');
});
