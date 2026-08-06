// Guards a1.05.l1 "Les pronoms sujets".
//
// This lesson has one failure mode that matters more than all the others, and
// it is not a crash: it is DECAY INTO A WORD LIST. Nine pronouns is a list, and
// a list is a flashcard deck with a lesson wrapped around it. The reason the
// lesson exists is that the nine are not nine, because il/elle/on share one
// verb form and ils/elles share another.
//
// So the assertion that earns its place here is not "the lesson mentions nine
// words". It is "the collapse is TAUGHT on a production surface", and it is the
// one below that is worth the most. Everything else guards the ways this
// project has already shipped content that was authored, schema-valid, and
// drawn by nothing.
//
// Two sources are checked, not one. The SEED is what a learner receives. The
// AUTHORED SOURCE in ealch-admin is what the next author edits. Both are read
// here, and the parity tests at the bottom fail when they drift, which is the
// failure mode that has twice cost this project real work.
//
// Counts are DERIVED wherever a count is asserted. A hardcoded number fails on
// itself the first time content legitimately changes, and the fix is then to
// edit the test, which is how a test comes to certify a bug.
//
// Nothing here reimplements app logic. `fold`, `dicteeMode`, `glossKeys`,
// `segmentSentence` and `hasPlainNasalFor` are all imported from the modules
// the app itself runs. An earlier version of a1.01's test inlined its own
// glossary lookup, copied the version that was already broken, and passed while
// the feature was dead.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { narrationOf, quizQuestions, validateLesson, type Lesson, type LessonSection } from './schema.ts';
import { hasPlainNasalFor, validateDensity, formatDensity } from './density.logic.ts';
import { glossKeys, segmentSentence } from './gloss.logic.ts';
import { dicteeMode, dicteeWords, wordDecoys } from './dictee.logic.ts';
import { fold } from './answer.logic.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  units: { id: string; seq: number; lessonIds: string[]; themes?: unknown; canDo?: string; sub?: string; title?: string }[];
  lessons: Lesson[];
  items: { id: string; kind: string; level: string; theme: string; fr: string; respell?: string; drills: string[] }[];
};

const L = seed.lessons.find((l) => l.id === 'a1.05.l1');
// Before the batch and the merge have run, the seed has no a1.05.l1 and every
// seed-derived assertion below would fail for a reason that is not a content
// bug. Skip cleanly and let the source-derived half still run.
const noSeed = !L;

const ITEMS = new Map(seed.items.map((i) => [i.id, i]));

// The admin repo is a sibling checkout. Skip cleanly when it is absent (the app
// can be built on its own) rather than failing the suite.
let SRC: Lesson | null = null;
let SRC_REFRAME = '';
let SRC_SPEAK: string[] = [];
let SRC_DICTATION: string[] = [];
let SRC_LISTEN: string[] = [];
let SRC_NINE: readonly string[] = [];
let SRC_SIX: string[] = [];
let SRC_TRAPS: string[] = [];
let SRC_CORPUS: { id: string; fr: string; respell?: string; pronoun: string | null; form: string | null }[] = [];
try {
  const lesson = await import('../../../ealch-admin/scripts/data/pronoms-sujets-lesson.ts');
  const corpus = await import('../../../ealch-admin/scripts/data/pronoms-sujets-corpus.ts');
  SRC = lesson.PRONOMS_LESSON as Lesson;
  SRC_REFRAME = lesson.REFRAME as string;
  SRC_SPEAK = lesson.PRONOMS_SPEAK_IDS as string[];
  SRC_DICTATION = lesson.PRONOMS_DICTATION_IDS as string[];
  SRC_LISTEN = lesson.PRONOMS_LISTEN_IDS as string[];
  SRC_NINE = corpus.THE_NINE as readonly string[];
  SRC_SIX = corpus.THE_SIX as string[];
  SRC_TRAPS = corpus.METALINGUISTIC_TRAP_IDS as string[];
  SRC_CORPUS = corpus.PRONOUNS as typeof SRC_CORPUS;
} catch {
  // Not available; the source-derived tests below no-op.
}
const noSrc = !SRC;
const noBoth = noSeed || noSrc;

/** Every authored string in a value. */
function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, out));
  return out;
}

const sectionIds = () => L!.sections.map((s) => (s as { id?: string }).id).filter(Boolean) as string[];
const sec = (id: string) => L!.sections.find((s) => (s as { id?: string }).id === id);
const theQuiz = () =>
  L!.sections.find((s): s is Extract<LessonSection, { type: 'quiz' }> => s.type === 'quiz')!;

/** The strings a LEARNER reads: section bodies and sheet bodies, with the
 *  authoring apparatus (ids, types, item ids, recording ids) left out.
 *
 *  Used by the "no verb conjugation" test. Running that check over every string
 *  in the document would fire on legitimate context, because this lesson has to
 *  SAY that être is the next unit, and a test that fires on correct content is
 *  a test the next author deletes. */
function productionStrings(): string[] {
  const skip = new Set(['id', 'type', 'render', 'layer', 'size', 'itemId', 'itemIds', 'items', 'ref', 'recordingId', 'sheetId', 'terms', 'accept', 'clipIds', 'detectOn', 'drill', 'retest']);
  const out: string[] = [];
  const walk = (v: unknown) => {
    if (typeof v === 'string') out.push(v);
    else if (Array.isArray(v)) v.forEach(walk);
    else if (v && typeof v === 'object') {
      for (const [k, val] of Object.entries(v)) {
        if (skip.has(k)) continue;
        walk(val);
      }
    }
  };
  walk(L!.sections);
  walk(L!.sheets ?? []);
  return out;
}

/* ─── 1. It exists, it is v2, and it is reachable ─────────────────────────── */

test('a1.05.l1 exists and is well-formed', { skip: noSeed }, () => {
  strictEqual(validateLesson(L!).length, 0);
  strictEqual(L!.unitId, 'a1.05');
  strictEqual(L!.level, 'a1');
  // seq is the lesson's index WITHIN its unit, not its place in the track.
  strictEqual(L!.seq, 1);
});

test('the a1.05 unit links the lesson, and its own promise is untouched', { skip: noSeed }, () => {
  const unit = seed.units.find((u) => u.id === 'a1.05');
  ok(unit, 'a1.05 unit exists');
  ok(unit!.lessonIds.includes('a1.05.l1'), 'the unit lists the lesson, so the Den can reach it');
  // The build brief is explicit that these three are correct and advertised.
  strictEqual(unit!.title, 'Subject Pronouns');
  strictEqual(unit!.sub, 'Les pronoms sujets');
  strictEqual(unit!.canDo, 'Can pick the right subject pronoun, including tu versus vous, and everyday on for nous');
  // A grammar unit has no theme binding. Claiming one would misrepresent it in
  // the Den, and this lesson draws from six themes.
  strictEqual(unit!.themes, undefined, 'a1.05 must stay theme-unbound');
});

test('the eyebrow numbers the lesson by where it sits, not by what its id says', { skip: noSeed }, () => {
  // missions.ts derives the tag from unit.seq at render time. The stored value
  // is a fallback and has to agree with what the renderer computes, or the two
  // disagree the moment something reads the field instead. a1.04.l1 ships that
  // disagreement today (stored 04, renders 06).
  const unit = seed.units.find((u) => u.id === 'a1.05')!;
  strictEqual(L!.tag, `A1 · LEÇON ${String(unit.seq).padStart(2, '0')}`);
});

test('this is a v2 lesson and it passes the density validator', { skip: noSeed }, () => {
  ok(Array.isArray(L!.acts) && L!.acts!.length > 0, 'acts are what isV2Lesson gates density validation on');
  ok(L!.reframe, 'the lesson declares a reframe');
  ok((L!.drills ?? []).length > 0, 'remediation drills are authored');
  ok((L!.sheets ?? []).length > 0, 'a reference sheet is authored');
  ok((L!.deckTranche ?? []).length > 0, 'the SRS release schedule is authored');
  const issues = validateDensity(L!, new Set(seed.items.map((i) => i.id)));
  strictEqual(issues.length, 0, `density:\n${formatDensity(issues)}`);
});

/* ─── 2. The spine ────────────────────────────────────────────────────────── */

test('the mission spine is the authored one, in order', { skip: noSeed }, () => {
  strictEqual(
    sectionIds().join(' > '),
    [
      's01-scene', 's02-goals', 's03-collapse',
      's04-grid', 's05-singular', 's06-plural', 's07-earcheck',
      's08-on', 's09-onerrors', 's10-noone',
      's11-vous', 's12-ils', 's13-flash',
      's14-listen', 's15-speak', 's16-dictation', 's17-scenario', 's18-reading',
      's19-review', 's20-progress', 's21-quiz', 's22-roundup',
    ].join(' > '),
  );
  const types = L!.sections.map((s) => s.type);
  strictEqual(types[0], 'scene', 'a learner meets the stakes before any rule');
  strictEqual(types[types.length - 1], 'roundup', 'the badge closes the journey');
  strictEqual(types[types.length - 2], 'quiz', 'the exam sits just before the badge');
});

test('the journey is genuinely multimodal', { skip: noSeed }, () => {
  const types = new Set(L!.sections.map((s) => s.type));
  for (const t of [
    'scene', 'goals', 'cardDeck', 'tapTable', 'listening', 'commonErrors', 'examples',
    'flashcards', 'practice', 'dictation', 'scenario', 'reading', 'reviewDeck',
    'progressCheck', 'quiz', 'roundup',
  ] as const) {
    ok(types.has(t), `section type ${t} present`);
  }
  const skills = L!.sections.filter((s) => s.type === 'practice').map((s) => s.skill);
  ok(skills.includes('listen') && skills.includes('speak'), 'the learner both hears it and says it');
});

test('every act claims its sections, exactly once, with no ghosts', { skip: noSeed }, () => {
  const acts = L!.acts ?? [];
  const ids = sectionIds();
  strictEqual(ids.length, L!.sections.length, 'every section carries an id');
  const claimed = acts.flatMap((a) => a.sections ?? []);
  for (const cl of claimed) ok(ids.includes(cl), `act names section "${cl}", which is not in the lesson`);
  for (const i of ids) ok(claimed.includes(i), `section "${i}" is claimed by no act`);
  const twice = claimed.filter((cl, i) => claimed.indexOf(cl) !== i);
  strictEqual(twice.length, 0, `claimed by two acts: ${twice.join(', ')}`);
  strictEqual(claimed.length, ids.length, 'act membership and the spine are the same length');
});

test('difficulty ramps: the first check comes after the teaching, not before', { skip: noSeed }, () => {
  const types = L!.sections.map((s) => s.type);
  const firstCheck = L!.sections.findIndex(
    (s) => s.type === 'quiz' || ((s as { questions?: unknown[] }).questions?.length ?? 0) > 0,
  );
  const firstTeaching = Math.min(
    ...['cardDeck', 'tapTable'].map((t) => types.indexOf(t)).filter((i) => i >= 0),
  );
  ok(firstCheck > firstTeaching, 'the learner is taught before being tested');
  const speak = L!.sections.findIndex((s) => s.type === 'practice' && s.skill === 'speak');
  ok(speak > firstCheck, 'speaking is asked for only after an early written win');
});

/* ─── 3. THE assertion: the nine-to-six collapse is taught ────────────────── */

test('the nine-to-six collapse is TAUGHT, not merely stated', { skip: noSeed }, () => {
  // This is the assertion that stops the lesson decaying into a nine-word list,
  // and it is worth more than any other in the file.
  //
  // "Taught" means a production surface presents il/elle/on together as sharing
  // one verb form, and ils/elles together as sharing another. A reframe string
  // that says "six forms" without any screen showing WHICH six is a claim the
  // learner has to take on trust, which is exactly the failure mode this
  // lesson was commissioned to avoid.
  const prod = productionStrings();

  const groupsThree = prod.filter((s) => /\bil\b/.test(s) && /\belle\b/.test(s) && /\bon\b/.test(s));
  ok(groupsThree.length > 0, 'no surface presents il, elle and on together');

  const groupsTwo = prod.filter((s) => /\bils\b/.test(s) && /\belles\b/.test(s));
  ok(groupsTwo.length > 0, 'no surface presents ils and elles together');

  // And the grouping has to be about SHARING A FORM, not about being listed in
  // the same sentence. Somewhere on a production surface, the three-set and the
  // two-set each have to sit next to the claim that they take one form.
  const sharesOne = (s: string) => /\b(share|shared|same form|one form|same ending)\b/i.test(s);
  ok(
    groupsThree.some(sharesOne),
    'il, elle and on appear together but nothing says they share a verb form',
  );
  ok(
    groupsTwo.some(sharesOne),
    'ils and elles appear together but nothing says they share a verb form',
  );

  // The grid is the surface that has to do it in one glance. Its middle column
  // must repeat `est` across the three-row and `sont` across the two-row, which
  // is what makes the collapse VISIBLE rather than merely asserted.
  const grid = sec('s04-grid');
  ok(grid && grid.type === 'tapTable', 's04-grid is the tapTable that carries the paradigm');
  const rows = (grid as Extract<LessonSection, { type: 'tapTable' }>).rows;
  const shared = rows.filter((r) => /·/.test(r.cells[0]));
  strictEqual(shared.length, 2, 'exactly two rows of the grid hold more than one pronoun');
  const three = shared.find((r) => r.cells[0].split('·').length === 3);
  const two = shared.find((r) => r.cells[0].split('·').length === 2);
  ok(three, 'no row of the grid holds three pronouns');
  ok(two, 'no row of the grid holds two pronouns');
  ok(/\bil\b/.test(three!.cells[0]) && /\belle\b/.test(three!.cells[0]) && /\bon\b/.test(three!.cells[0]));
  ok(/\bils\b/.test(two!.cells[0]) && /\belles\b/.test(two!.cells[0]));
  // Nine pronouns across six rows is the reframe made literal, and it is
  // countable rather than claimed.
  strictEqual(rows.length, 6, 'the grid is six rows');
  const pronounsInGrid = rows.flatMap((r) => r.cells[0].split('·').map((p) => p.trim()));
  strictEqual(pronounsInGrid.length, 9, 'the six rows hold nine pronouns between them');
});

test('all nine pronouns are taught, and elles is not the one that got dropped', { skip: noSeed }, () => {
  // elles is the pronoun most likely to be quietly lost: it is the scarcest in
  // the corpus (eighteen sentences against ninety-five for ils) and the least
  // used in French. Asserted by name rather than by count.
  const prod = productionStrings().join('\n');
  for (const p of ['je', 'tu', 'il', 'elle', 'on', 'nous', 'vous', 'ils', 'elles']) {
    ok(new RegExp(`\\b${p}\\b`).test(prod), `the pronoun "${p}" is never taught`);
  }
  ok(/\belles\b/.test(prod), 'elles is taught');
  // And it is DRILLED, not only mentioned: some corpus item the lesson names
  // has to actually open on Elles.
  const drilled = L!.itemIds.map((id) => ITEMS.get(id)?.fr ?? '').filter((f) => /^Elles\b/.test(f));
  ok(drilled.length >= 2, `elles appears in ${drilled.length} of the lesson's items, which is too few to drill`);
});

test('every one of the nine is tested in the exam', { skip: noSeed }, () => {
  // Taught and tested are different claims. This one is about the exam.
  const qs = quizQuestions(theQuiz());
  const blob = qs.map((q) => [q.q, ...(q.opts ?? []), q.why ?? '', q.answer ?? '', q.target ?? '', q.word ?? ''].join(' ')).join('\n');
  for (const p of ['je', 'tu', 'il', 'elle', 'on', 'nous', 'vous', 'ils', 'elles']) {
    ok(new RegExp(`\\b${p}\\b`, 'i').test(blob), `the exam never touches "${p}"`);
  }
});

/* ─── 4. The five ideas each worth a mission ──────────────────────────────── */

test('on is taught as everyday nous AND as taking the third-person-singular form', { skip: noSeed }, () => {
  // Both halves, because teaching only the meaning produces « On sommes ». This
  // is the canDo's named item and the highest-value fact in the lesson.
  const onDeck = sec('s08-on');
  ok(onDeck && onDeck.type === 'cardDeck', 's08-on is the mission that carries it');
  const body = strings(onDeck).join('\n');

  // The MEANING half.
  ok(/\bon\b[^.]*\bwe\b|\bwe\b[^.]*\bon\b/i.test(body), 'the on mission never says that on means we');
  ok(/spoken|out loud|said|table|kitchen/i.test(body), 'the on mission never says WHERE on belongs');
  ok(/\bnous\b/.test(body), 'the on mission never names the nous it stands in for');

  // The FORM half. This is the one a lesson forgets.
  ok(
    /\bil\b[^.]*\bform\b|\bform\b[^.]*\bil\b|third-person/i.test(body),
    'the on mission never says that on takes the il form',
  );
  ok(/\best\b/.test(body), 'the on mission never shows the est that on actually takes');

  // And the corpus backs it: every `on` sentence the lesson teaches carries a
  // third-person-singular form, never a nous form.
  const onItems = SRC_CORPUS.filter((w) => w.pronoun === 'on' && w.form);
  ok(onItems.length > 0 || noSrc, 'the corpus authors on sentences with a verb form');
  for (const w of onItems) {
    strictEqual(w.form, 'est', `"${w.fr}" gives on the form "${w.form}", which is not the il form`);
  }
});

test('the on sommes error is shown as an error, and tested as one', { skip: noSeed }, () => {
  // « On sommes » is the error a learner will actually produce once they know
  // on means we. Showing the wrong sentence and asking for the fix tests
  // exactly the mismatch the lesson is about.
  const errs = sec('s09-onerrors');
  ok(errs && errs.type === 'commonErrors', 's09-onerrors is a commonErrors mission');
  const e = errs as Extract<LessonSection, { type: 'commonErrors' }>;
  // commonErrors renders as its own swipe deck ONLY when `swipe` is set.
  // Without it a1.01 mission 5 drew a fully blank screen on a device.
  ok((e as { swipe?: boolean }).swipe, 'commonErrors without swipe hits a break that returns undefined');
  strictEqual((e as { size?: string }).size, 'lg', 'one error per screen');
  ok(
    e.errors.some((x) => /on sommes/i.test(x.wrong)),
    'the « On sommes » error is not among the traps',
  );

  // And the exam asks the learner to FIX it rather than to recognise it.
  const qs = quizQuestions(theQuiz());
  const spot = qs.filter((q) => q.format === 'errorSpot');
  ok(spot.length > 0, 'the exam authors no errorSpot question');
  ok(
    spot.some((q) => /on sommes/i.test(q.q)),
    'no errorSpot question shows « On sommes » and asks for the fix',
  );
});

test('the ils rule for mixed groups is present and unhedged', { skip: noSeed }, () => {
  const ilsDeck = sec('s12-ils');
  ok(ilsDeck && ilsDeck.type === 'cardDeck', 's12-ils carries the rule');
  const body = strings(ilsDeck).join('\n');
  ok(/\bils\b/.test(body) && /\belles\b/.test(body), 'both pronouns are named');
  ok(/\bman\b/i.test(body), 'the rule is never stated in terms of a man joining the group');
  ok(/\ball women\b|\bevery (single )?one of them\b|\bno man\b/i.test(body), 'elles is never pinned to an all-women group');
  // Stated plainly, without apologising for it or editorialising about it.
  ok(!/unfair|sexist|outdated|unfortunately|sadly|regrettabl/i.test(body), 'the rule is editorialised rather than stated');
});

test('impersonal il is named, given that a quarter of il sentences use it', { skip: noSeed }, () => {
  const noone = sec('s10-noone');
  ok(noone, 's10-noone is in the journey');
  const body = strings(noone).join('\n');
  ok(/il y a/i.test(body), 'il y a is not named');
  ok(/il faut/i.test(body), 'il faut is not named');
  ok(/nobody|no one|refers to no/i.test(body), 'nothing says the il refers to nobody');
  // It is also in the glossary, so it is explained wherever it is chipped.
  ok(L!.terms?.impersonalIl, 'impersonal il has no glossary term');
  // And the exam asks about it, because a fact taught once and never tested is
  // a fact the learner reads past.
  const qs = quizQuestions(theQuiz());
  ok(qs.some((q) => /il y a|impersonal|nobody/i.test(`${q.q} ${(q.opts ?? []).join(' ')} ${q.why}`)), 'the exam never returns to it');
});

test("j' before a vowel is a card and not a mission", { skip: noSeed }, () => {
  // The learner already met elision on le/la in a1.03, so this is a transfer.
  // A whole mission on it would be re-teaching something already taught.
  const prod = productionStrings().join('\n');
  ok(/j'/.test(prod), "j' is never shown");
  ok(/\ble\b[^.]*\bla\b/.test(prod), 'nothing connects it to the le/la drop the learner already makes');
  const ownMission = L!.sections.filter((s) => /elision|apostrophe/i.test((s as { title?: string }).title ?? ''));
  strictEqual(ownMission.length, 0, "j' has been given its own mission, which is a1.03's ground");
});

test('vous is taught as two jobs, which is what a1.01 did not teach', { skip: noSeed }, () => {
  // a1.01 already declares "The tu / vous distinction and when each is
  // required". Repeating it in the same words makes a learner stop believing
  // the second telling. What is genuinely new is that vous is ONE WORD doing
  // TWO JOBS, polite singular and plain plural, which a1.01 says nowhere.
  const vous = sec('s11-vous');
  ok(vous && vous.type === 'tapTable', 's11-vous is the consolidation mission');
  const body = strings(vous).join('\n');
  ok(/polite/i.test(body) && /plural/i.test(body), 'both jobs are not named');
  ok(/no plural of tu|has no plural/i.test(body), 'nothing explains WHY a group of friends takes vous');
  // The pair that sounds identical is the teaching, so it has to be on screen.
  const t = vous as Extract<LessonSection, { type: 'tapTable' }>;
  const cells = t.rows.flatMap((r) => r.cells);
  ok(cells.some((x) => /Vous êtes prêt \?/.test(x)), 'the polite singular is not shown');
  ok(cells.some((x) => /Vous êtes prêts \?/.test(x)), 'the plain plural is not shown');
  ok(/silent/i.test(body), 'nothing says the S that separates them cannot be heard');

  // And the a1.01 declaration is respected rather than re-made: this lesson
  // ASSUMES the register split rather than introducing it.
  ok(
    (L!.grammarAssumed ?? []).some((g) => /tu.*vous/i.test(g)),
    'the tu/vous split is not declared as assumed, so this lesson claims to teach it fresh',
  );
  ok(
    !(L!.grammarIntroduced ?? []).some((g) => /^the tu \/ vous distinction/i.test(g)),
    'this lesson re-declares a1.01\'s tu/vous introduction as its own',
  );
});

/* ─── 5. It does not become a verb lesson ─────────────────────────────────── */

test('no verb conjugation is taught, so this does not become a1.06', { skip: noSeed }, () => {
  // être and avoir are seq 10 and 11 and both are declared units waiting on
  // this material. Showing the CARRIER verb's forms beside the pronouns is
  // allowed and must not fail here; teaching a paradigm is not.
  //
  // Written against production surfaces rather than every string, because the
  // lesson legitimately says "être itself is the next lesson" and a test that
  // fires on correct content is a test the next author deletes.
  const prod = productionStrings();

  // 1. No -er ending set. Three or more of the six present-tense endings on one
  //    screen is a verb-endings table however it is dressed.
  const ENDINGS = ['-ons', '-ez', '-ent', '-es', '-e ', '-s '];
  for (const s of prod) {
    const n = ENDINGS.filter((e) => s.includes(e)).length;
    ok(n < 3, `a production string lists ${n} verb endings, which is a conjugation table: "${s.slice(0, 80)}"`);
  }

  // 2. No -er verb is conjugated across persons. parler is the canonical one.
  const REGULAR = /\b(parl|donn|aim|regard|habit|travaill)(e|es|ons|ez|ent)\b/;
  const conj = prod.filter((s) => REGULAR.test(s));
  strictEqual(conj.length, 0, `an -er verb is conjugated on a production surface: ${conj[0]?.slice(0, 80)}`);

  // 3. Exactly ONE verb-form column exists in the whole lesson, and it is être's.
  const verbCols: string[] = [];
  for (const s of [...L!.sections, ...(L!.sheets ?? []).flatMap((sh) => sh.sections ?? [])]) {
    const cols = (s as { cols?: string[] }).cols;
    if (!cols) continue;
    for (const col of cols) if (/être|verb form|conjugat/i.test(col)) verbCols.push(col);
  }
  strictEqual(verbCols.length, 2, `expected the in-flow grid and the sheet table to be the only verb columns, got ${verbCols.length}: ${verbCols.join(' | ')}`);
  for (const col of verbCols) ok(/être/i.test(col), `a verb column names something other than être: "${col}"`);

  // 4. grammarIntroduced claims no conjugation.
  for (const g of L!.grammarIntroduced ?? []) {
    ok(!/conjugat|present tense of|verb endings/i.test(g), `grammarIntroduced claims a conjugation: "${g}"`);
  }

  // 5. And it hands off by name, the way sons.07 closes on liaison being next.
  const roundup = sec('s22-roundup');
  const closing = strings(roundup).join('\n');
  ok(/être/i.test(closing) && /avoir/i.test(closing), 'the roundup never points at être and avoir');
});

test('the carrier verb is named as a carrier', { skip: noSeed }, () => {
  ok(L!.terms?.etre, 'être has no glossary term explaining why it is here');
  const body = L!.terms!.etre.body;
  ok(/carrier|comes with|vocabulary/i.test(`${L!.terms!.etre.title} ${body}`), 'the term does not frame être as a carrier');
  ok(/next lesson|next unit|a1\.06|is next/i.test(body), 'the term does not point forward to the verb lesson');
  // The reason a pronoun cannot be taught alone, which is what justifies the
  // carrier at all.
  ok(/same sound|alone|on its own/i.test(body), 'nothing explains why a pronoun cannot be shown by itself');
});

/* ─── 6. Corpus integrity ─────────────────────────────────────────────────── */

test('no dead corpus entry: every id the lesson declares resolves', { skip: noSeed }, () => {
  const dead = L!.itemIds.filter((id) => !ITEMS.has(id));
  strictEqual(dead.length, 0, `lesson declares items absent from the corpus: ${dead.join(', ')}`);
  // Every id a SECTION names is declared on the lesson, or the flashcard hub and
  // the SRS never see it.
  for (const s of L!.sections) {
    if (s.type !== 'practice' && s.type !== 'dictation') continue;
    for (const id of s.itemIds) ok(L!.itemIds.includes(id), `${s.type} names ${id}, which the lesson does not declare`);
  }
  // And every id a DRILL names, which nothing else checks: drills are not
  // sections, so the density validator's item-resolution rule never sees them.
  for (const d of L!.drills ?? []) {
    for (const id of d.items ?? []) {
      ok(ITEMS.has(id), `drill ${d.id} names ${id}, which is not in the corpus`);
      ok(L!.itemIds.includes(id), `drill ${d.id} names ${id}, which the lesson does not declare`);
    }
  }
  // And every id a glossary TERM names.
  for (const [key, t] of Object.entries(L!.terms ?? {})) {
    for (const ex of t.examples ?? []) {
      ok(ITEMS.has(ex.itemId), `term "${key}" names ${ex.itemId}, which is not in the corpus`);
      ok(L!.itemIds.includes(ex.itemId), `term "${key}" names ${ex.itemId}, which the lesson does not declare`);
    }
  }
});

test('no two non-sentence items the lesson teaches share an fr in a theme', { skip: noSeed }, () => {
  // The flashcard hub keys decks on `fr`, so a duplicate serves the same card
  // twice. Sentences are exempt: they are keyed differently and repeat legally.
  const seen = new Map<string, string>();
  for (const id of L!.itemIds) {
    const it = ITEMS.get(id);
    if (!it || it.kind === 'sentence') continue;
    const key = `${it.theme}::${it.fr.trim()}`;
    const prior = seen.get(key);
    ok(!prior, `${id} and ${prior} both teach "${it.fr}" in theme ${it.theme}`);
    seen.set(key, id);
  }
});

test('no metalinguistic corpus item is used as a learner sentence', { skip: noBoth }, () => {
  // Three corpus items are kind 'sentence' and are grammar notes written in
  // French, and all three open on `on`. Their generic `on` is a real use of the
  // pronoun, which is exactly what makes them look ideal here. They are
  // nonsense to hear in a listening mission and impossible to spell in a dictée.
  ok(SRC_TRAPS.length >= 2, 'the corpus module still names the trap ids');
  for (const id of SRC_TRAPS) {
    // The trap ids have to be real, or the guard is guarding nothing.
    ok(ITEMS.has(id), `trap id ${id} is not in the corpus, so this guard has gone stale`);
    ok(!L!.itemIds.includes(id), `the lesson uses metalinguistic item ${id} as a learner sentence`);
  }
});

test('every authored respelling follows the nasal convention', { skip: noSrc }, () => {
  // `on` is a nasal vowel and it is this lesson's signature word, so [ON] would
  // be wrong on the one card the unit is named for.
  //
  // Asked of the REAL function rather than a local copy. The corpus at large is
  // not a safe source of truth for this rule: 71 of the 180 respellings in the
  // `nombres` theme break it today, so a lesson that copied a respelling from a
  // neighbour would inherit the error.
  for (const w of SRC_CORPUS) {
    if (!w.respell) continue;
    ok(
      !hasPlainNasalFor(w.fr, w.respell),
      `${w.id} "${w.fr}" respelled "${w.respell}" closes a nasal with a plain n or m`,
    );
  }
});

test('the lesson inlines no respelling the corpus does not define', { skip: noBoth }, () => {
  // Every bracketed token on a card has to trace back to one corpus entry, or a
  // screen is carrying a transcription nothing validates. This is what keeps
  // the nasal check above meaningful: a respelling typed straight onto a card
  // would never be seen by it.
  const known = new Set(SRC_CORPUS.filter((w) => w.respell).map((w) => `[${w.respell}]`));
  const bracketed = strings(L!.sections).flatMap((s) => s.match(/\[[^\]]+\]/g) ?? []);
  ok(bracketed.length > 0, 'no respelling reaches a card at all');
  for (const b of bracketed) ok(known.has(b), `the lesson inlines a respelling the corpus does not define: ${b}`);
});

test('tranches release only items the lesson teaches, once each, and none late', { skip: noSeed }, () => {
  const tranches = L!.deckTranche ?? [];
  strictEqual(tranches.length, (L!.acts ?? []).length, 'one tranche per act, index-aligned');
  const declared = new Set(L!.itemIds);
  for (const [i, t] of tranches.entries()) {
    for (const id of t) ok(declared.has(id), `tranche ${i} releases ${id}, which the lesson never teaches`);
  }
  const all = tranches.flat();
  const dupes = all.filter((x, i) => all.indexOf(x) !== i);
  strictEqual(dupes.length, 0, `an item is released twice: ${[...new Set(dupes)].join(', ')}`);
  // Every declared item is released by some act, or it is taught and never
  // reaches the flashcard hub.
  const released = new Set(all);
  const orphans = L!.itemIds.filter((id) => !released.has(id));
  strictEqual(orphans.length, 0, `taught but never released to review: ${orphans.join(', ')}`);
});

/* ─── 7. Practice, dictée and reading actually render ─────────────────────── */

test('practice and dictation drill only resolvable, correctly tagged corpus items', { skip: noSeed }, () => {
  for (const s of L!.sections) {
    if (s.type !== 'practice' && s.type !== 'dictation') continue;
    ok(s.itemIds.length > 0, `${s.type} "${s.title}" names items`);
    for (const id of s.itemIds) {
      const it = ITEMS.get(id);
      ok(it, `${s.type} item ${id} exists`);
      if (s.type === 'dictation') {
        ok(it!.drills.includes('dictation'), `${id} carries the dictation drill`);
      }
      if (s.type === 'practice' && s.skill === 'speak') {
        ok(it!.drills.includes('voiceflash'), `${id} carries the voiceflash drill, or the mic cannot score it`);
      }
    }
  }
});

test('the dictée assembles words rather than spelling letters, and offers decoys', { skip: noSeed }, () => {
  // Asked of the REAL module the renderer uses, not of a restated threshold. A
  // forty-letter bank with no word boundaries is a patience test, not a dictée.
  const d = L!.sections.find(
    (s): s is Extract<LessonSection, { type: 'dictation' }> => s.type === 'dictation',
  )!;
  ok(d.itemIds.length >= 4, 'the dictée is worth the mission');
  for (const id of d.itemIds) {
    const f = ITEMS.get(id)!.fr;
    strictEqual(dicteeMode(f), 'words', `"${f}" would spell letter by letter`);
    ok(dicteeWords(f).length >= 4, `"${f}" is too short to be worth assembling`);
    ok(wordDecoys(f).length > 0, `"${f}" gets no decoy tiles, so "use everything" solves it`);
  }
  // The dictée is the one surface where the learner PRODUCES the pronoun and
  // the verb together from nothing but sound, so it has to carry the pairs the
  // lesson is about. Three of them: il/ils, elle/elles, on/nous.
  const frs = d.itemIds.map((id) => ITEMS.get(id)!.fr);
  ok(frs.some((f) => /^Il /.test(f)) && frs.some((f) => /^Ils /.test(f)), 'the dictée has no il/ils pair');
  ok(frs.some((f) => /^Elle /.test(f)) && frs.some((f) => /^Elles /.test(f)), 'the dictée has no elle/elles pair');
  ok(frs.some((f) => /^On /.test(f)) && frs.some((f) => /^Nous /.test(f)), 'the dictée has no on/nous pair');
});

test('a flashcard never speaks text its answer face does not show', { skip: noSeed }, () => {
  // FlashcardsView (LessonRich.tsx) renders `back` and then a play button for
  // `say`, and nothing else: a flashcard has no `sub` slot the way a DeckCard
  // does. So a card whose `say` is not on its `back` asks the learner to listen
  // to French they cannot read.
  //
  // Found on a device: the answer face showed "je" and the speaker played
  // "Je suis à la terrasse.". Every other audio surface in this lesson puts the
  // French line beside the control that speaks it.
  //
  // The repair is NOT to shorten `say` to the pronoun. This lesson's claim is
  // that a pronoun said alone proves nothing, because il and ils are one sound,
  // so the audio has to carry the verb. The card carries it too.
  const f = L!.sections.find(
    (s): s is Extract<LessonSection, { type: 'flashcards' }> => s.type === 'flashcards',
  )!;
  for (const c of f.cards) {
    if (!c.say) continue;
    ok(
      c.back.includes(c.say),
      `flashcard answer "${c.back.replace(/\n/g, ' / ')}" speaks "${c.say}", which it never shows`,
    );
  }
  // And the answer still leads with the bare pronoun, which is what was asked
  // for. A card that shows only the sentence has stopped testing recall.
  const NINE = ['je', "j'", 'tu', 'il', 'elle', 'on', 'nous', 'vous', 'ils', 'elles'];
  for (const c of f.cards) {
    const lead = c.back.split('\n')[0].trim();
    ok(NINE.includes(lead), `flashcard answer opens on "${lead}", which is not one of the nine`);
  }
  // Every pronoun the lesson teaches gets a card.
  const leads = new Set(f.cards.map((c) => c.back.split('\n')[0].trim()));
  for (const p of NINE) ok(leads.has(p), `the recall deck never asks for "${p}"`);
});

test('no flashcard front names a referent for the impersonal il', { skip: noSeed }, () => {
  // s10-noone spends a mission establishing that the il in « Il pleut » refers
  // to NOBODY. A front that names a thing ("The rain") invites exactly the
  // inference the mission exists to prevent, and it breaks the pattern every
  // other front in the deck follows, which is to describe who is in the room.
  const f = L!.sections.find(
    (s): s is Extract<LessonSection, { type: 'flashcards' }> => s.type === 'flashcards',
  )!;
  const impersonal = f.cards.filter((c) => c.say && /^Il (pleut|fait|faut|y a|est \w+ heures)/.test(c.say));
  ok(impersonal.length > 0, 'the recall deck never covers the impersonal il');
  for (const c of impersonal) {
    ok(
      /nobody|no one|nothing/i.test(c.front),
      `"${c.front}" prompts an impersonal il without saying the answer is nobody`,
    );
  }
});

test('the reading mission renders its glossary, and every entry underlines something', { skip: noSeed }, () => {
  // MissionSection routes reading to ReadingMission, and so to PassagePage which
  // draws the underlines, only when questionsInModal is set WITH questions.
  // a1.01 shipped five entries down the fallback path and they rendered nowhere.
  const s = L!.sections.find(
    (x): x is Extract<LessonSection, { type: 'reading' }> => x.type === 'reading',
  )!;
  ok(s.glossary?.length, 'the reading mission carries a glossary');
  ok(s.questionsInModal && s.questions?.length, 'and the flag that makes anything render it');
  // The REAL matcher. gloss.logic.test.ts runs the same check over every lesson;
  // this keeps it pinned for the one this file is about.
  const keys = new Set((s.glossary ?? []).flatMap((g) => glossKeys(g.word)));
  const hit = new Set(segmentSentence(s.text, keys).filter((x) => x.key).map((x) => x.key!));
  for (const g of s.glossary ?? []) {
    ok(glossKeys(g.word).some((k) => hit.has(k)), `glossary entry "${g.word}" underlines nothing in the passage`);
  }
});

test('the reading passage authors no line break the renderer would discard', { skip: noSeed }, () => {
  // PassagePage does text.split(/(?<=[.!?»])\s+/) and renders the pieces inline
  // in one TX, so every authored \n is swallowed. Writing one turn per line
  // produces a field no component reads, which is the authored-and-unrendered
  // failure this project keeps shipping. a1.01's passage authors eight.
  const s = L!.sections.find(
    (x): x is Extract<LessonSection, { type: 'reading' }> => x.type === 'reading',
  )!;
  ok(!s.text.includes('\n'), 'the passage authors line breaks that PassagePage discards');
  const src = readFileSync(resolve(here, '..', 'components', 'ReadingPages.tsx'), 'utf8');
  ok(
    /text\.split\(\/\(\?<=\[\.!\?»\]\)\\s\+\//.test(src),
    'PassagePage no longer splits this way; re-check whether line breaks now render',
  );
});

test('the reading passage keeps English outside the guillemets and French inside', { skip: noSeed }, () => {
  // Paul's A1 rule, 2026-08-04: anything not inside « » is context, and context
  // is instruction. An A1 learner's reading effort belongs on the exchange.
  const s = L!.sections.find(
    (x): x is Extract<LessonSection, { type: 'reading' }> => x.type === 'reading',
  )!;
  const quoted = s.text.match(/«[^»]*»/g) ?? [];
  ok(quoted.length >= 4, 'the passage holds a real French exchange');
  const outside = s.text.replace(/«[^»]*»/g, ' ');
  const french = outside.match(/\b(est|elle|dans|une|des|les|avec|pour|sur|chez|puis|il|la|le|du)\b/i);
  ok(!french, `French leaked outside the guillemets: "${french?.[0]}" in "${outside.trim()}"`);
});

/* ─── 8. The exam ─────────────────────────────────────────────────────────── */

test('every authored quiz question is reachable by a learner', { skip: noSeed }, () => {
  // lessonPager.logic.ts strips EVERY quiz section and then appends exactly ONE
  // quiz page, resolved with sections.find(s => s.type === 'quiz'). a1.01
  // shipped 12 authored questions no learner could ever reach.
  const quizzes = L!.sections.filter((s): s is Extract<LessonSection, { type: 'quiz' }> => s.type === 'quiz');
  strictEqual(quizzes.length, 1, 'exactly one quiz section');
  const authored = quizzes.flatMap((q) => quizQuestions(q)).length;
  strictEqual(quizQuestions(quizzes[0]).length, authored, 'some authored question is unreachable');
});

test('the exam asks the learner to produce, and every question teaches', { skip: noSeed }, () => {
  const qs = quizQuestions(theQuiz());
  ok(qs.length >= L!.sections.length - 4, `${qs.length} questions for ${L!.sections.length} missions is thin`);
  ok((theQuiz().rounds?.length ?? 0) >= 2, 'the exam is round-based so remediation can target a round');

  const mcq = qs.filter((q) => (q.format ?? 'mcq') === 'mcq').length;
  ok(mcq <= qs.length / 2, `${mcq}/${qs.length} questions are mcq; recognition can be passed by elimination`);

  for (const q of qs) {
    // Feedback must teach, not just mark. Every built A1 lesson is at 100% why
    // coverage and a1.04 came off the waiver list on 2026-08-05 by earning it.
    ok(typeof q.why === 'string' && q.why.length > 0, `"${q.q}" explains its answer`);
    ok(typeof q.ref === 'string' && q.ref.length > 0, `"${q.q}" names the section that taught it`);
    // And the why has to teach the RULE, not restate the answer.
    ok(q.why!.length > 30, `"${q.q}" has a why too short to teach anything: "${q.why}"`);
    if (Array.isArray(q.opts) && q.opts.length) {
      strictEqual(new Set(q.opts).size, q.opts.length, `options distinct for "${q.q}"`);
      ok(q.correct != null && (q.correct as number) >= 0 && (q.correct as number) < q.opts.length, `correct in range for "${q.q}"`);
    }
  }
});

test('every free-text question accepts the answer it displays', { skip: noSeed }, () => {
  // Free text is compared through fold(), which strips accents, case,
  // punctuation and ALL whitespace. Imported rather than restated, so a change
  // to the folding rules surfaces here.
  const qs = quizQuestions(theQuiz());
  const free = qs.filter((q) => q.format === 'typeIn' || q.format === 'errorSpot');
  ok(free.length > 0, 'the exam asks nothing in free text');
  for (const q of free) {
    const accept = q.accept ?? [];
    ok(accept.length > 0, `"${q.q}" is free-text but accepts nothing`);
    ok(q.answer, `"${q.q}" shows no canonical answer`);
    const folded = accept.map(fold);
    ok(folded.includes(fold(q.answer!)), `"${q.q}" shows an answer it would not accept: "${q.answer}"`);
    // An accepted form that folds to another is redundant, not wrong, and it
    // reads as two rules where there is one.
    strictEqual(new Set(folded).size, folded.length, `"${q.q}" accepts the same folded string twice`);
  }
});

test('listenChoose earns its place on the pairs the ear cannot separate', { skip: noSeed }, () => {
  // il/ils and elle/elles are identical in isolation, so a listening question is
  // real teaching rather than a gotcha: the learner genuinely cannot hear the
  // difference and needs to know that the verb carries it.
  const lc = quizQuestions(theQuiz()).filter((q) => q.format === 'listenChoose');
  ok(lc.length >= 2, `${lc.length} listenChoose questions; the two pairs both want one`);
  const known = new Set(seed.items.map((i) => i.fr));
  for (const q of lc) {
    const clip = q.audio?.clip;
    ok(clip, `a listenChoose question has no clip to play: "${q.q}"`);
    ok(known.has(clip!), `listenChoose plays "${clip}", which is not a corpus sentence`);
  }
  // At least one has to put a singular and a plural of the SAME frame against
  // each other, which is the only version of this question that tests the ear
  // rather than the vocabulary.
  ok(
    lc.some((q) => (q.opts ?? []).some((o) => /\best\b/.test(o)) && (q.opts ?? []).some((o) => /\bsont\b/.test(o))),
    'no listenChoose question puts an est option against a sont option',
  );
});

test('correct answers do not cluster in one option slot', { skip: noSeed }, () => {
  // The density validator fails any slot over 40%, and with nine pronouns in
  // the pool it is easy to let il or je land in the same position repeatedly.
  // Restated here so the intent is visible next to the exam it is about.
  const slots = quizQuestions(theQuiz())
    .filter((q) => Array.isArray(q.opts) && typeof q.correct === 'number')
    .map((q) => q.correct as number);
  ok(slots.length >= 8, 'too few closed questions to say anything about spread');
  const tally = new Map<number, number>();
  for (const s of slots) tally.set(s, (tally.get(s) ?? 0) + 1);
  for (const [slot, n] of tally) {
    const pct = (n / slots.length) * 100;
    ok(pct <= 40, `${pct.toFixed(0)}% of correct answers sit in position ${slot}`);
  }
});

test('every quiz ref points at a section that exists', { skip: noSeed }, () => {
  const ids = sectionIds();
  for (const q of quizQuestions(theQuiz())) {
    if (q.ref) ok(ids.includes(q.ref), `question "${q.q}" refs "${q.ref}", which is not a section here`);
  }
});

test('every round targets a trigger that is authored, and its drill exists', { skip: noSeed }, () => {
  const triggers = new Map((L!.errorTriggers ?? []).map((t) => [t.id, t]));
  const drills = new Set((L!.drills ?? []).map((d) => d.id));
  ok(triggers.size > 0, 'the lesson authors error triggers');
  for (const r of theQuiz().rounds ?? []) {
    ok((r.targets ?? []).length > 0, `round "${r.id}" targets no trigger, so a failure fires nothing`);
    for (const t of r.targets ?? []) {
      const trig = triggers.get(t);
      ok(trig, `round "${r.id}" targets "${t}", which is not an authored trigger`);
      ok(drills.has(trig!.drill), `trigger "${t}" fires drill "${trig!.drill}", which is not authored`);
      if (trig!.retest) ok(drills.has(trig!.retest), `trigger "${t}" retests with "${trig!.retest}", which is not authored`);
    }
  }
  // drillForRound (quizRounds.logic.ts) walks a round's targets and returns the
  // FIRST one that resolves to a drill, then stops. So a round's second target
  // can only ever fire when the first has no drill, and any drill not reachable
  // that way is authored, schema-valid and dead.
  //
  // Note the precise rule: it is "the first target that HAS a drill", not
  // literally the first target. The other lesson tests state it as the latter,
  // which happens to give the same answer whenever every trigger has a drill.
  // Mirrored here rather than restated, so a change to the resolution order
  // surfaces as a failure instead of as silently dead content.
  const resolve = (targets: string[] | undefined): string | null => {
    for (const t of targets ?? []) {
      const drill = triggers.get(t)?.drill;
      if (drill) return drill;
    }
    return null;
  };
  const firing = new Set((theQuiz().rounds ?? []).map((r) => resolve(r.targets)).filter(Boolean) as string[]);
  const unreachable = (L!.drills ?? [])
    .filter((d) => !d.id.startsWith('retest-'))
    .filter((d) => !firing.has(d.id));
  strictEqual(
    unreachable.length,
    0,
    `drill(s) no round can fire, because drillForRound stops at the first target that has one: ${unreachable.map((d) => d.id).join(', ')}`,
  );
  // The retests too: each fires from the drill that precedes it.
  const withRetest = new Set(
    [...firing].map((d) => (L!.errorTriggers ?? []).find((t) => t.drill === d)?.retest).filter(Boolean) as string[],
  );
  const deadRetests = (L!.drills ?? []).filter((d) => d.id.startsWith('retest-')).filter((d) => !withRetest.has(d.id));
  strictEqual(deadRetests.length, 0, `retest(s) nothing can reach: ${deadRetests.map((d) => d.id).join(', ')}`);
});

/* ─── 9. Chrome, glossary and the progress card ───────────────────────────── */

test('every mission carries its French subtitle and nearly all narrate', { skip: noSeed }, () => {
  const missing = L!.sections.filter((s) => !s.frSub);
  strictEqual(missing.length, 0, `sections without frSub: ${missing.map((s) => s.type).join(', ')}`);
  const content = L!.sections.filter((s) => s.type !== 'quiz');
  const spoken = content.filter((s) => (narrationOf(s)?.text.length ?? 0) > 0);
  ok(spoken.length >= content.length - 1, `${spoken.length}/${content.length} missions narrated`);
});

test('every glossary term is surfaced somewhere, and no card is overloaded', { skip: noSeed }, () => {
  const defined = Object.keys(L!.terms ?? {});
  ok(defined.length >= 5, `a lesson this size wants a real glossary, got ${defined.length}`);
  const used = new Set(L!.sections.flatMap((s) => (s as { terms?: string[] }).terms ?? []));
  for (const t of defined) ok(used.has(t), `term "${t}" is defined but no section surfaces it`);
  for (const u of used) ok(defined.includes(u), `a section chips "${u}", which is not a defined term`);
  // The renderer shows three chips and collapses the rest, so a fourth is
  // authored and invisible. Seven sons.06 sections ship in that state.
  const over = L!.sections.filter((s) => ((s as { terms?: string[] }).terms ?? []).length > 3);
  strictEqual(over.length, 0, `sections with more than 3 term chips: ${over.map((s) => (s as { id?: string }).id).join(', ')}`);
});

test('a section that declares a reference sheet points at one that exists', { skip: noSeed }, () => {
  const sheets = new Set((L!.sheets ?? []).map((s) => s.id));
  for (const s of L!.sections) {
    const id = (s as { sheetId?: string }).sheetId;
    if (id) ok(sheets.has(id), `${(s as { id?: string }).id} names sheet "${id}", which the lesson does not declare`);
  }
  // The sheet is the one place the FULL paradigm lives, because tapTable is not
  // in ownsLayout() and a nine-row table in the flow runs past the fold.
  const sheet = (L!.sheets ?? []).find((s) => s.id === 'sheet.a1.05.paradigm');
  ok(sheet, 'the paradigm sheet is authored');
  const table = (sheet!.sections ?? []).find((s) => s.type === 'table');
  ok(table && table.type === 'table', 'the sheet carries the full table');
  strictEqual((table as Extract<LessonSection, { type: 'table' }>).rows.length, 9, 'the sheet lists all nine, unlike the six-row grid in the flow');
  // Every table in the lesson is layer deep. A table in the flow is a density
  // failure, and this is the rule a1.04 was rebuilt to satisfy.
  for (const s of L!.sections) {
    ok(s.type !== 'table', `${(s as { id?: string }).id} is a table in the flow; tables belong in a sheet`);
  }
  // The stressed pronouns get their paragraph here and nowhere else.
  const blob = strings(sheet).join('\n');
  ok(/\bmoi\b/.test(blob) && /\btoi\b/.test(blob), 'the sheet never names the stressed set the learner met in a1.01');
  const flow = strings(L!.sections).join('\n');
  ok(!/\bmoi\b/.test(flow), 'the stressed pronouns have crept into the flow, which is scope creep');
});

test('the progress card counts the journey it sits in', { skip: noSeed }, () => {
  const ix = L!.sections.findIndex((s) => (s as { id?: string }).id === 's20-progress');
  ok(ix > 0, 'the progress card is in the journey');
  const card = L!.sections[ix] as Extract<LessonSection, { type: 'progressCheck' }>;
  const stat = (k: string) => card.stats?.find((x) => x.k === k)?.v;
  strictEqual(stat('Pronouns met'), '9');
  strictEqual(stat('Verb forms behind them'), '6');
  strictEqual(stat('Missions done'), `${ix} of ${L!.sections.length}`);
  strictEqual(stat('Exam rounds ahead'), String(theQuiz().rounds?.length ?? 0));
  // And the prose must not restate them. Saying a number twice on one card is
  // two chances to be wrong.
  ok(!/\b\d+\b/.test(card.body ?? ''), `the progress body restates a figure: ${card.body}`);
});

/* ─── 10. The audio brief ─────────────────────────────────────────────────── */

test('the audio brief names the contrast that must be one take', { skip: noSeed }, () => {
  // This is the single most important audio decision in the lesson. il against
  // ils, and elle against elles, are IDENTICAL in isolation: the plural is
  // audible only through the verb. A brief that records the pronouns alone
  // teaches nothing, and a pair recorded across two takes teaches the
  // difference between the recordings rather than the difference in French.
  //
  // That instruction is invisible once the clips are delivered, so it is pinned
  // here as well as stated in the brief.
  const recorded = L!.audio?.recorded ?? [];
  ok(recorded.length > 0, 'the lesson asks the studio for recordings');
  const oneTake = recorded.filter((r) => /one take/i.test(r.desc));
  ok(oneTake.length >= 3, `only ${oneTake.length} briefs carry the one-take instruction`);
  ok(
    recorded.some((r) => /never record the pronouns? (on their own|alone)|do not record the pronouns/i.test(r.desc)),
    'no brief forbids recording a pronoun on its own, which is the mistake that would waste the session',
  );
  ok(
    recorded.some((r) => /over-articulat/i.test(r.desc)),
    'no brief asks the studio to leave the silent S alone',
  );
  // Every recordingId a section names must be one the lesson actually asks for,
  // or the card points at a clip nobody will ever deliver.
  const known = new Set(recorded.map((r) => r.id));
  const named = strings(L!.sections).filter((s) => s.startsWith('rec-'));
  ok(named.length > 0, 'no section names a recording at all');
  for (const id of named) ok(known.has(id), `a section names recording "${id}", which the lesson never asks for`);
  // And every clip a brief promises is a French line the lesson actually shows.
  const shown = new Set(seed.items.map((i) => i.fr));
  for (const r of recorded) {
    for (const clip of r.clipIds ?? []) {
      const inScene = strings(L!.sections).includes(clip);
      ok(shown.has(clip) || inScene, `brief "${r.id}" asks for a clip of "${clip}", which appears nowhere in the lesson`);
    }
  }
  // autoplay is declared in schema.ts and implemented in no component. Setting
  // it looks like it does something. Six seed sections already do.
  ok(!JSON.stringify(L).includes('"autoplay"'), 'autoplay is authored and no component reads it');
});

/* ─── 11. House style ─────────────────────────────────────────────────────── */

test('the authored copy carries no em dash, no honest, and no U+203F tie', { skip: noSeed }, () => {
  const all = strings(L);
  const emDash = all.filter((s) => s.includes('—'));
  strictEqual(emDash.length, 0, `em dash found in: ${emDash.slice(0, 3).join(' | ')}`);
  const honest = all.filter((s) => /honest/i.test(s));
  strictEqual(honest.length, 0, `honest/honesty found in: ${honest.slice(0, 3).join(' | ')}`);
  // U+203F renders as a low underscore on a Pixel 6 and shipped that way in
  // sons.10 and a1.04 before anyone looked at a device.
  const tie = all.filter((s) => s.includes('‿'));
  strictEqual(tie.length, 0, `U+203F tie found in: ${tie.slice(0, 3).join(' | ')}`);
});

test('the interface speaks English and only the content is French', { skip: noSeed }, () => {
  // A French UI label is untranslatable and lands beside English on the same
  // card. The existing guard only reads component source, so an authored French
  // label passes CI and reaches the screen. frSub is the deliberate exception.
  const FRENCH_UI = /\b(cliquez|appuyez|suivant|continuer|recommencer|choisissez|écoutez|répétez)\b/i;
  for (const s of L!.sections) {
    const title = (s as { title?: string }).title ?? '';
    ok(!FRENCH_UI.test(title), `a section title is French UI copy: "${title}"`);
    ok(/[A-Za-z]/.test(title), `a section has no title`);
  }
  for (const a of L!.acts ?? []) {
    ok(!FRENCH_UI.test(a.title), `act title is French UI copy: "${a.title}"`);
  }
  // Every frSub IS French, which is the one field where that is correct.
  for (const s of L!.sections) {
    ok((s.frSub ?? '').length > 0, `${(s as { id?: string }).id} has no French subtitle`);
  }
});

/* ─── 12. Source-derived. These read the authored files in ealch-admin. ───── */

test('the reframe appears verbatim as often as it was authored', { skip: noBoth }, () => {
  const inSource = strings(SRC).filter((s) => s.includes(SRC_REFRAME)).length;
  const inSeed = strings(L).filter((s) => s.includes(SRC_REFRAME)).length;
  strictEqual(inSeed, inSource, `reframe appears ${inSeed}x in the seed but ${inSource}x in the source`);
  // The density validator counts SECTIONS and wants at least three. Restated so
  // the intent is visible next to the content it is about.
  const sections = L!.sections.filter((s) => strings(s).some((x) => x.includes(SRC_REFRAME)));
  ok(sections.length >= 3, `the reframe must carry at least 3 sections, found ${sections.length}`);
  strictEqual(L!.reframe, SRC_REFRAME, 'the seed reframe is not the authored one');
  // And it has to be the ARITHMETIC, which is the thing that makes conjugation
  // survivable, rather than a piece of advice about register.
  ok(/nine/i.test(SRC_REFRAME) && /six/i.test(SRC_REFRAME), 'the reframe is no longer the nine-to-six claim');
});

test('the reframe is arithmetic the corpus can check', { skip: noSrc }, () => {
  // "Nine pronouns. Six verb forms." is true, checkable, and derived rather than
  // asserted. THE_SIX is computed from the paradigm sentences, so a sentence
  // reworded onto a different form of être moves this and the reframe stops
  // being a claim nobody verifies.
  strictEqual(SRC_NINE.length, 9, 'the corpus no longer names nine pronouns');
  strictEqual(SRC_SIX.length, 6, `the paradigm carries ${SRC_SIX.length} distinct forms of être: ${SRC_SIX.join(', ')}`);
  strictEqual(SRC_SIX.join(','), 'suis,es,est,sommes,êtes,sont', 'the six forms are not être in paradigm order');
  // Every one of the nine has a paradigm sentence, and none is missing.
  const covered = new Set(SRC_CORPUS.filter((w) => w.form).map((w) => w.pronoun));
  for (const p of SRC_NINE) ok(covered.has(p), `no paradigm sentence carries "${p}"`);
});

test('the speak, listen and dictée sets the source names are the ones the seed drills', { skip: noBoth }, () => {
  const bySkill = (skill: string) =>
    L!.sections.find((s): s is Extract<LessonSection, { type: 'practice' }> => s.type === 'practice' && s.skill === skill)!;
  strictEqual(bySkill('speak').itemIds.join(','), SRC_SPEAK.join(','), 'the speak set drifted between source and seed');
  strictEqual(bySkill('listen').itemIds.join(','), SRC_LISTEN.join(','), 'the listen set drifted between source and seed');
  const dict = L!.sections.find((s): s is Extract<LessonSection, { type: 'dictation' }> => s.type === 'dictation')!;
  strictEqual(dict.itemIds.join(','), SRC_DICTATION.join(','), 'the dictée set drifted between source and seed');
});

test('once published, the seed copy matches what was authored', { skip: noBoth }, () => {
  // Before the batch runs the seed is behind, and this is the test that says so.
  // A seed copy that has fallen behind the authored source is the failure mode
  // that shipped a1.01.l1 with twelve unreachable questions.
  strictEqual(L!.version, SRC!.version, `seed is v${L!.version}, source is v${SRC!.version}`);
  strictEqual(L!.sections.length, SRC!.sections.length, 'section count drifted');
  strictEqual(L!.itemIds.length, SRC!.itemIds.length, 'itemId count drifted');
  strictEqual((L!.acts ?? []).length, (SRC!.acts ?? []).length, 'act count drifted');
  strictEqual((L!.drills ?? []).length, (SRC!.drills ?? []).length, 'drill count drifted');
  strictEqual((L!.sheets ?? []).length, (SRC!.sheets ?? []).length, 'sheet count drifted');
  strictEqual((L!.errorTriggers ?? []).length, (SRC!.errorTriggers ?? []).length, 'trigger count drifted');
  strictEqual(Object.keys(L!.terms ?? {}).length, Object.keys(SRC!.terms ?? {}).length, 'term count drifted');
  strictEqual(
    sectionIds().join(','),
    SRC!.sections.map((s) => (s as { id?: string }).id).join(','),
    'the mission spine drifted between source and seed',
  );
  strictEqual(
    quizQuestions(theQuiz()).length,
    quizQuestions(SRC!.sections.find((s): s is Extract<LessonSection, { type: 'quiz' }> => s.type === 'quiz')!).length,
    'quiz question count drifted',
  );
});

test('every authored corpus entry reached the seed unchanged', { skip: noBoth }, () => {
  // The corpus is the single source of truth for these sentences and for every
  // respelling the lesson puts on a screen. If the seed copy has drifted, the
  // card the learner reads is not the card the source file describes.
  for (const w of SRC_CORPUS) {
    const it = ITEMS.get(w.id);
    ok(it, `${w.id} was authored but is not in the seed`);
    strictEqual(it!.fr, w.fr, `${w.id} fr drifted`);
    strictEqual(it!.respell, w.respell, `${w.id} respell drifted`);
  }
  // Nothing in the theme claims an id this corpus no longer defines. That is
  // the sons.07 .057 shape: a withdrawn entry surviving in a published seed.
  const authored = new Set(SRC_CORPUS.map((w) => w.id));
  const strays = seed.items
    .filter((i) => i.theme === 'cafe' && authored.has(i.id) === false)
    .filter((i) => Number(i.id.split('.').pop()) >= 154)
    .map((i) => `${i.id} "${i.fr}"`);
  strictEqual(strays.length, 0, `the seed carries cafe items past .153 that this corpus does not define: ${strays.join(', ')}`);
});
