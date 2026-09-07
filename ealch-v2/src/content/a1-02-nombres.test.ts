// Guards a1.02.l1 "Les nombres 1-20", the first of the three numbers lessons.
//
// Referential integrity across the whole corpus is already proven by
// seed.backcompat.test.ts, and the cross-lesson rules by lesson-contract.test.ts.
// This file pins the intent specific to THIS lesson, so a later edit that
// flattens it back into a word list, drops a number, or lets the seventies in
// goes red here rather than in front of a learner.
//
// Two sources are checked, not one. The SEED is what a learner receives. The
// AUTHORED SOURCE in ealch-admin is what the next author edits. Both are read
// here and the parity test at the bottom fails when they drift, which is the
// failure mode that has twice cost this project real work.
//
// Counts are DERIVED from the authored source wherever a count is asserted. A
// hardcoded number fails on itself the first time content legitimately changes,
// and the fix is then to edit the test, which is how a test comes to certify a
// bug. Where a floor IS stated (the minimum number of shape-shift
// demonstrations, the mcq ceiling) it is a design decision being pinned, not a
// count being restated, and it is documented where it appears.
//
// Nothing here reimplements app logic. The dictée mode, the decoy bank and the
// glossary matcher are imported from the modules the renderer uses. An earlier
// version of a1.01's test inlined its own copy of the glossary lookup, which
// made it a second implementation free to drift, and it had copied the version
// that was already broken, so it passed while the feature was dead.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { narrationOf, quizQuestions, validateLesson, type Lesson } from './schema.ts';
import { glossKeys, segmentSentence } from './gloss.logic.ts';
import { dicteeMode, dicteeWords, wordDecoys } from './dictee.logic.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  units: { id: string; title: string; canDo: string; lessonIds: string[]; themes?: string[] }[];
  lessons: Lesson[];
  items: { id: string; kind: string; level: string; theme: string; fr: string; en: string; drills: string[] }[];
};

const L = seed.lessons.find((l) => l.id === 'a1.02.l1');
const ITEMS = new Map(seed.items.map((i) => [i.id, i]));

// The admin repo is a sibling checkout. Skip cleanly when it is absent (the app
// can be built on its own) rather than failing the suite.
let SRC: Lesson | null = null;
let SRC_REFRAME = '';
let SRC_ONE_TO_TWENTY: string[] = [];
let SRC_NEW_IDS: string[] = [];
try {
  const lesson = await import('../../../ealch-admin/scripts/data/nombres-lesson.ts');
  const corpus = await import('../../../ealch-admin/scripts/data/nombres-corpus.ts');
  SRC = lesson.NOMBRES_LESSON as Lesson;
  SRC_REFRAME = lesson.REFRAME as string;
  SRC_ONE_TO_TWENTY = lesson.NOMBRES_ONE_TO_TWENTY as string[];
  SRC_NEW_IDS = corpus.NOMBRES_NEW_IDS as string[];
} catch {
  // Not available; the source-derived tests below no-op.
}
const noSrc = !SRC;

/** Every authored string in a value. */
function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, out));
  return out;
}

const sectionIds = () => L!.sections.map((s) => (s as { id?: string }).id).filter(Boolean) as string[];
const section = (id: string) => L!.sections.find((s) => (s as { id?: string }).id === id);
const theQuiz = () =>
  L!.sections.find((s): s is Extract<Lesson['sections'][number], { type: 'quiz' }> => s.type === 'quiz')!;

/** The twenty headwords this lesson exists to teach, spelled out.
 *
 *  This IS a hardcoded list, deliberately and uniquely. It is not a count that
 *  can drift with content, it is the definition of the unit: "Numbers 1 to 20".
 *  Deriving it from the lesson would be asking the lesson whether it teaches
 *  what it teaches. */
const ONE_TO_TWENTY = [
  'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix',
  'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf', 'vingt',
];

/** A number above twenty, in words.
 *
 *  The round tens and the big units, plus the twenty-somethings, which are the
 *  ones a1.27 owns. Written to match whole words only, so "centimes" and
 *  "milliers" of anything do not fire it and nobody deletes the check for
 *  crying wolf. */
const ABOVE_TWENTY =
  /\b(trente|quarante|cinquante|soixante|quatre-vingts?|cents?|mille|millions?|milliards?)\b|\bvingt[- ](?:et[- ])?(?:une?|deux|trois|quatre|cinq|six|sept|huit|neuf)\b/i;

test('a1.02.l1 exists and is well-formed', () => {
  ok(L, 'a1.02.l1 is present in the seed');
  strictEqual(validateLesson(L).length, 0);
  strictEqual(L!.unitId, 'a1.02');
  strictEqual(L!.level, 'a1');
  strictEqual(L!.tag, 'A1 · LEÇON 02');
});

test('the a1.02 unit links the lesson, and its own copy is untouched', () => {
  const unit = seed.units.find((u) => u.id === 'a1.02');
  ok(unit, 'a1.02 unit exists');
  ok(unit!.lessonIds.includes('a1.02.l1'), 'unit lists the lesson, so the Den can reach it');
  // The Den advertises these two before the learner opens anything. Authoring
  // the lesson is not a licence to rewrite the promise it was built against.
  strictEqual(unit!.title, 'Numbers 1 to 20');
  strictEqual(unit!.canDo, 'Can count to twenty, hear the difference between them, and give a small quantity');
  ok(unit!.themes?.includes('nombres'), 'the theme binding survives');
});

test('the overview block is authored', () => {
  const o = L!.overview;
  ok(o, 'overview is authored');
  ok(o!.titleEn.length > 0 && o!.introFr.length > 0);
  ok(o!.minutes >= 1 && o!.minutes <= 180);
  ok(o!.difficulty >= 1 && o!.difficulty <= 5);
  // Second lesson in the track. It may be harder than greetings; it may not
  // present as a wall.
  ok(o!.difficulty <= 3, `an early A1 lesson should stay approachable, got ${o!.difficulty}`);
});

test('the mission spine is the authored one, in order', () => {
  const types = L!.sections.map((s) => s.type);
  strictEqual(types[0], 'scene', 'the learner meets the stakes before any rule');
  strictEqual(types[types.length - 1], 'roundup', 'the badge closes the journey');
  strictEqual(types[types.length - 2], 'quiz', 'the exam sits just before the badge');
  // The spine, named rather than counted, so an insertion in the wrong place is
  // a failure that says where.
  strictEqual(
    sectionIds().join(' '),
    's01-scene s02-goals s03-shape s04-onetoten s05-unune s06-quantity s07-earcheck ' +
    's08-teens s09-seventeen s10-neighbours s11-shift s12-pairs s13-traps s14-speak ' +
    's15-words s16-flash s17-dictation s18-scenario s19-cases s20-reading ' +
    's21-review s22-progress s23-quiz s24-roundup',
  );
  // The missions list gives each row one line and truncates with an ellipsis.
  // Three titles shipped over the limit and were cut on a device.
  //
  // A COARSE guard, deliberately. The real constraint is rendered width, not
  // character count: "What You Will Be Able To Do" is 27 characters of narrow
  // letters and fits, while "The Same Number, Three Ways" is also 27 and did
  // not. So this catches the obviously-too-long and nothing subtler, and a
  // title anywhere near 27 still wants a look on a phone.
  const long = L!.sections.filter((s) => s.title.length > 27).map((s) => `${s.title} (${s.title.length})`);
  strictEqual(long.length, 0, `mission titles the list will truncate: ${long.join(', ')}`);
});

test('every act claims its sections, exactly once, with no ghosts', () => {
  const acts = L!.acts ?? [];
  ok(acts.length > 0, 'the lesson declares acts (isV2Lesson gates density validation on this)');
  const ids = sectionIds();
  strictEqual(ids.length, L!.sections.length, 'every section carries an id');
  const claimed = acts.flatMap((a) => a.sections ?? []);
  for (const c of claimed) ok(ids.includes(c), `act names section "${c}", which is not in the lesson`);
  for (const i of ids) ok(claimed.includes(i), `section "${i}" is claimed by no act`);
  const twice = claimed.filter((c, i) => claimed.indexOf(c) !== i);
  strictEqual(twice.length, 0, `claimed by two acts: ${twice.join(', ')}`);
  // One tranche per act, or an act releases nothing and a tranche never fires.
  strictEqual((L!.deckTranche ?? []).length, acts.length);
});

test('the journey is genuinely multimodal, and weighted towards the ear', () => {
  const types = L!.sections.map((s) => s.type);
  const present = new Set(types);
  for (const t of [
    'scene', 'goals', 'cardDeck', 'tapTable', 'examples', 'listening', 'practice',
    'commonErrors', 'vocabThemes', 'flashcards', 'dictation', 'scenario', 'useCases',
    'reading', 'reviewDeck', 'progressCheck', 'quiz', 'roundup',
  ] as const) {
    ok(present.has(t), `section type ${t} present`);
  }
  // The unit's canDo says "hear the difference between them", so this is an ear
  // lesson before it is a mouth lesson. Two listening missions and a listen
  // practice is the floor that claim needs.
  const listening = types.filter((t) => t === 'listening').length;
  ok(listening >= 2, `an ear lesson wants more than one listening mission, got ${listening}`);
  ok(
    L!.sections.some((s) => s.type === 'practice' && s.skill === 'listen'),
    'there is a listen-skill practice mission',
  );
  ok(
    L!.sections.some((s) => s.type === 'practice' && s.skill === 'speak'),
    'and a speak-skill one, because counting out loud is the canDo',
  );
});

test('every number from one to twenty is taught, and each resolves to the corpus', () => {
  // Asserted against the CORPUS, so a lesson that quietly drops treize fails
  // the build rather than reaching a learner with a gap between douze and
  // quatorze.
  const taught = new Map(
    L!.itemIds
      .map((id) => ITEMS.get(id))
      .filter((it): it is NonNullable<typeof it> => !!it)
      .map((it) => [it.fr.toLowerCase(), it.id]),
  );
  for (const n of ONE_TO_TWENTY) {
    ok(taught.has(n), `"${n}" is not among the items this lesson declares`);
  }
  // And every one of them is in the review deck the learner is drilled on.
  const flash = L!.sections.find(
    (s): s is Extract<Lesson['sections'][number], { type: 'flashcards' }> => s.type === 'flashcards',
  );
  ok(flash, 'the lesson has a flashcards mission');
  const backs = new Set(flash!.cards.map((c) => c.back.toLowerCase()));
  for (const n of ONE_TO_TWENTY) ok(backs.has(n), `"${n}" is taught but never appears on a flashcard`);
  // And every one of them is said out loud with the mic.
  const speak = L!.sections.find(
    (s): s is Extract<Lesson['sections'][number], { type: 'practice' }> =>
      s.type === 'practice' && s.skill === 'speak',
  )!;
  const spoken = new Set(speak.itemIds.map((id) => ITEMS.get(id)?.fr.toLowerCase()));
  for (const n of ONE_TO_TWENTY) ok(spoken.has(n), `"${n}" is never said out loud in the speak mission`);
});

test('un and une are both taught, and the lesson says which is which', () => {
  const frs = L!.itemIds.map((id) => ITEMS.get(id)?.fr.toLowerCase());
  ok(frs.includes('un'), 'un is taught');
  ok(frs.includes('une'), 'une is taught');
  // They must not be the same card wearing two ids.
  const un = L!.itemIds.map((id) => ITEMS.get(id)!).find((i) => i.fr.toLowerCase() === 'un')!;
  const une = L!.itemIds.map((id) => ITEMS.get(id)!).find((i) => i.fr.toLowerCase() === 'une')!;
  ok(un.id !== une.id, 'un and une are separate corpus entries');
  ok(/femin/i.test(une.en), `une's gloss should name the feminine, got "${une.en}"`);
  // The distinction has a mission, a glossary term and a quiz round, not just a
  // passing mention.
  ok(section('s05-unune'), 'there is a mission on the un/une split');
  ok(L!.terms?.unUne, 'and a glossary term defining it');
  ok(
    theQuiz().rounds?.some((r) => quizQuestions({ questions: r.questions }).some((q) => /\bune?\b/i.test(q.q + JSON.stringify(q.opts ?? [])))),
    'and the exam asks about it',
  );
  ok(
    L!.grammarIntroduced?.some((g) => /un\s*\/\s*une/i.test(g)),
    'and it is declared as grammar this lesson introduces',
  );
});

test('the shape-shifting is taught, not merely mentioned', () => {
  // The lesson's whole claim is that a number changes shape for the word after
  // it. A later edit that trims the reference table back to a word list would
  // leave every other test green, so the number of numbers DEMONSTRATED in more
  // than one state is pinned here with a floor.
  //
  // A demonstration is a row or card that shows the same headword both alone
  // and followed by another word, which is the only shape that can carry the
  // contrast.
  const shift = section('s11-shift');
  ok(shift && shift.type === 'tapTable', 's11-shift is the three-state reference table');
  const rows = (shift as Extract<Lesson['sections'][number], { type: 'tapTable' }>).rows;
  strictEqual(rows[0].cells.length, 3, 'three columns: alone, before a consonant, before a vowel');

  const demonstrated = rows.filter((r) => {
    const [alone, beforeC, beforeV] = r.cells;
    return (
      ONE_TO_TWENTY.includes(alone) &&
      beforeC.startsWith(`${alone} `) &&
      beforeV.startsWith(`${alone} `)
    );
  });
  // Six today: six, huit, dix, vingt, neuf, sept. The floor is five so that one
  // row can be reworked without editing the test, and a table cut to a list
  // cannot pass.
  ok(
    demonstrated.length >= 5,
    `only ${demonstrated.length} numbers are shown in all three states; the table has been flattened`,
  );
  // Each of those rows must actually SPEAK all three, because the three
  // spellings are identical and the audio is the only thing distinguishing them.
  for (const r of demonstrated) {
    ok(r.say && r.cells.every((c) => r.say!.includes(c)), `row "${r.cells[0]}" does not speak all three states`);
    ok(r.detail?.body, `row "${r.cells[0]}" has no detail explaining what changed`);
  }
  // And the opening deck has to carry the same idea on one number, up close.
  const shape = section('s03-shape');
  ok(shape && shape.type === 'cardDeck', 's03-shape is the three-card opener');
  const cards = (shape as Extract<Lesson['sections'][number], { type: 'cardDeck' }>).cards;
  ok(cards.length >= 3, 'the opener shows at least three states of one number');
  const heads = cards.map((c) => c.fr ?? '');
  ok(heads.some((f) => ONE_TO_TWENTY.includes(f)), 'one card shows the number alone');
  ok(heads.filter((f) => f.includes(' ')).length >= 2, 'and at least two show it joined to a following word');
});

test('nothing above twenty is taught, though plenty is shown', () => {
  // The split a1.02 has to hold: numbers above twenty may appear in an example,
  // a listening line, a reading passage or a scenario turn, because 238 of this
  // theme's items mention one and a hard ban would force stilted French. They
  // may not appear anywhere the learner is asked to PRODUCE them, because that
  // is a1.27's and a1.28's job.
  //
  // Written against production surfaces specifically. A blanket scan over every
  // string would fire on legitimate context and get deleted.
  const offenders: string[] = [];

  for (const id of L!.deckTranche?.flat() ?? []) {
    const it = ITEMS.get(id);
    if (it && ABOVE_TWENTY.test(it.fr)) offenders.push(`tranche releases ${id} "${it.fr}"`);
  }
  for (const sec of L!.sections) {
    if (sec.type === 'flashcards' || sec.type === 'reviewDeck') {
      for (const c of sec.cards) if (ABOVE_TWENTY.test(c.back)) offenders.push(`${sec.type} card "${c.back}"`);
    }
    if (sec.type === 'dictation') {
      for (const id of sec.itemIds) {
        const it = ITEMS.get(id);
        if (it && ABOVE_TWENTY.test(it.fr)) offenders.push(`dictation asks for ${id} "${it.fr}"`);
      }
    }
    if (sec.type === 'practice') {
      for (const id of sec.itemIds) {
        const it = ITEMS.get(id);
        if (it && ABOVE_TWENTY.test(it.fr)) offenders.push(`${sec.skill} practice drills ${id} "${it.fr}"`);
      }
    }
  }
  for (const q of quizQuestions(theQuiz())) {
    const produced = [
      ...(q.format === 'typeIn' || q.format === 'errorSpot' ? [...(q.accept ?? []), q.answer ?? ''] : []),
      ...(q.format === 'speak' ? [q.target ?? ''] : []),
    ];
    for (const p of produced) if (ABOVE_TWENTY.test(p)) offenders.push(`quiz answer "${p}"`);
  }
  strictEqual(offenders.length, 0, `these teach a number above twenty:\n  ${offenders.join('\n  ')}`);

  // The inverse, so this is a boundary and not a ban. A lesson that never shows
  // a real French number in the wild has over-corrected, and the next author
  // needs to see that showing is allowed.
  const context = [
    ...L!.sections.filter((s) => s.type === 'listening').flatMap((s) => (s as { lines: { fr: string }[] }).lines.map((l) => l.fr)),
    ...L!.sections.filter((s) => s.type === 'reading').map((s) => (s as { text: string }).text),
  ];
  ok(
    context.some((s) => ABOVE_TWENTY.test(s)),
    'no number above twenty appears anywhere as context; the passages have been sanitised into French nobody speaks',
  );
});

test('the exam asks the learner to produce, not only to recognise', () => {
  const qs = quizQuestions(theQuiz());
  ok(qs.length >= 12, `a lesson this size wants a real exam, got ${qs.length}`);
  ok((theQuiz().rounds?.length ?? 0) >= 3, 'the exam is round-based so remediation can target a round');

  const mcq = qs.filter((q) => (q.format ?? 'mcq') === 'mcq').length;
  ok(mcq <= qs.length / 2, `${mcq}/${qs.length} questions are mcq; production formats have been squeezed out`);

  // This lesson's claim is that the learner can HEAR the difference, so the
  // listening format has to carry real weight rather than appearing once.
  const listen = qs.filter((q) => q.format === 'listenChoose').length;
  ok(listen >= qs.length / 4, `only ${listen}/${qs.length} questions are listenChoose on an ear lesson`);
  for (const q of qs) {
    if (q.format !== 'listenChoose') continue;
    ok(q.audio?.clip, `"${q.q}" is a listening question with nothing to play`);
    // listenChoose falls back to SPEAKING the option text, so English options
    // would be read aloud in a French voice.
    ok(!(q.opts ?? []).some((o) => /\b(the|it|is|of|and)\b/i.test(o)), `"${q.q}" offers English options to a French voice`);
  }

  for (const q of qs) {
    ok(typeof q.why === 'string' && q.why.length > 0, `"${q.q}" explains its answer`);
    ok(q.ref, `"${q.q}" names the section that taught it`);
    if (Array.isArray(q.opts) && q.opts.length) {
      strictEqual(new Set(q.opts).size, q.opts.length, `options distinct for "${q.q}"`);
      ok(q.correct != null && q.correct >= 0 && q.correct < q.opts.length, `correct in range for "${q.q}"`);
    }
    // Free-text answers are compared through fold(), which strips accents,
    // case, punctuation and whitespace, so an accept entry differing only by
    // those is redundant rather than helpful. What matters is that the answer
    // shown is one the grader would take.
    if (q.format === 'typeIn' || q.format === 'errorSpot') {
      const accept = q.accept ?? [];
      ok(accept.length > 0, `"${q.q}" is free-text but accepts nothing`);
      ok(q.answer && accept.includes(q.answer), `"${q.q}" shows an answer it would not accept`);
    }
    if (q.format === 'speak') ok(q.target, `"${q.q}" is a speak question with no target`);
  }
});

test('every authored quiz question is reachable by a learner', () => {
  // lessonPager.logic.ts strips every quiz section and appends exactly ONE quiz
  // page, resolved with sections.find(s => s.type === 'quiz'). A second quiz
  // section is a set of questions no learner can ever reach; a1.01 shipped
  // twelve of them.
  const quizzes = L!.sections.filter(
    (s): s is Extract<Lesson['sections'][number], { type: 'quiz' }> => s.type === 'quiz',
  );
  strictEqual(quizzes.length, 1, 'exactly one quiz section');
  const authored = quizzes.flatMap((q) => quizQuestions(q)).length;
  const reachable = quizQuestions(quizzes[0]).length;
  strictEqual(reachable, authored, `${authored - reachable} authored quiz question(s) are unreachable`);
});

test('every quiz ref points at a section that exists', () => {
  const ids = sectionIds();
  for (const q of quizQuestions(theQuiz())) {
    if (q.ref) ok(ids.includes(q.ref), `question "${q.q}" refs "${q.ref}", which is not a section here`);
  }
});

test('every round targets a trigger that is authored, and its drill exists', () => {
  const triggers = new Map((L!.errorTriggers ?? []).map((t) => [t.id, t]));
  const drills = new Set((L!.drills ?? []).map((d) => d.id));
  ok(triggers.size > 0, 'the lesson authors error triggers');
  for (const r of theQuiz().rounds ?? []) {
    ok((r.targets ?? []).length > 0, `round "${r.id}" targets nothing, so a failed round fires no drill`);
    for (const t of r.targets ?? []) {
      const trig = triggers.get(t);
      ok(trig, `round "${r.id}" targets "${t}", which is not an authored trigger`);
      ok(drills.has(trig!.drill), `trigger "${t}" names drill "${trig!.drill}", which does not exist`);
      if (trig!.retest) ok(drills.has(trig!.retest), `trigger "${t}" names retest "${trig!.retest}", which does not exist`);
    }
  }
  // drillForRound fires the drill of the FIRST target only and stops, so every
  // authored drill has to be reachable from some round or it is dead weight.
  const fired = new Set(
    (theQuiz().rounds ?? [])
      .map((r) => triggers.get((r.targets ?? [])[0] ?? ''))
      .filter(Boolean)
      .flatMap((t) => [t!.drill, t!.retest].filter(Boolean) as string[]),
  );
  const orphans = [...drills].filter((d) => !fired.has(d));
  // Every trigger's drill is reachable from at least one round's FIRST target.
  strictEqual(orphans.length, 0, `drills no round can fire: ${orphans.join(', ')}`);
});

test('tranches release only items the lesson teaches, once each', () => {
  const tranches = L!.deckTranche ?? [];
  ok(tranches.length > 0, 'the SRS release schedule is authored');
  const declared = new Set(L!.itemIds);
  for (const [i, t] of tranches.entries()) {
    for (const id of t) ok(declared.has(id), `tranche ${i} releases ${id}, which the lesson never teaches`);
  }
  const all = tranches.flat();
  const dupes = all.filter((x, i) => all.indexOf(x) !== i);
  strictEqual(dupes.length, 0, `an item is released twice: ${[...new Set(dupes)].join(', ')}`);
  // And nothing the lesson declares goes unreleased, or the learner is taught a
  // word the SRS never gives back.
  const released = new Set(all);
  const stranded = L!.itemIds.filter((id) => !released.has(id));
  strictEqual(stranded.length, 0, `taught but never released to review: ${stranded.join(', ')}`);
});

test('no dead corpus entry, and no two non-sentence items share an fr in a theme', () => {
  const dead = L!.itemIds.filter((id) => !ITEMS.has(id));
  strictEqual(dead.length, 0, `lesson declares items absent from the corpus: ${dead.join(', ')}`);
  // The flashcard hub keys decks on `fr` within a theme, so a duplicate serves
  // the same card twice and takes two SRS ratings for one word. Sentences are
  // exempt: they are keyed differently and repeat legally.
  const seen = new Map<string, string>();
  for (const id of L!.itemIds) {
    const it = ITEMS.get(id)!;
    if (it.kind === 'sentence') continue;
    const key = `${it.theme}::${it.fr.trim().toLowerCase()}`;
    const prior = seen.get(key);
    ok(!prior, `${id} and ${prior} both teach "${it.fr}" in theme ${it.theme}`);
    seen.set(key, id);
  }
  // The two items this lesson authored must be in the nombres theme, or the
  // numbers deck still has no card for two.
  for (const fr of ['deux', 'une']) {
    const it = L!.itemIds.map((id) => ITEMS.get(id)!).find((i) => i.fr.toLowerCase() === fr);
    ok(it, `"${fr}" is not declared by the lesson`);
    strictEqual(it!.theme, 'nombres', `"${fr}" is filed under ${it!.theme}, so the numbers deck cannot reach it`);
  }
});

test('practice and dictation drill only resolvable, correctly tagged corpus items', () => {
  for (const s of L!.sections) {
    if (s.type !== 'practice' && s.type !== 'dictation') continue;
    ok(s.itemIds.length > 0, `${s.type} "${s.title}" names items`);
    for (const id of s.itemIds) {
      ok(ITEMS.has(id), `${s.type} item ${id} exists`);
      ok(L!.itemIds.includes(id), `${s.type} item ${id} is declared on the lesson`);
    }
    // A dictée whose items cannot be dictated is a dead mission; likewise a
    // speak mission whose items have no voice drill renders cards the mic
    // cannot score, which reads as broken rather than as untagged.
    if (s.type === 'dictation') {
      for (const id of s.itemIds) ok(ITEMS.get(id)!.drills.includes('dictation'), `${id} carries the dictation drill`);
    }
    if (s.type === 'practice' && s.skill === 'speak') {
      for (const id of s.itemIds) ok(ITEMS.get(id)!.drills.includes('voiceflash'), `${id} carries the voiceflash drill`);
    }
  }
});

test('the dictée assembles words rather than spelling letters, and offers decoys', () => {
  // Asked of the REAL module the renderer uses, not of a restated threshold.
  // These are sentences, so they must land in word mode: a 40-letter bank with
  // no word boundaries is a patience test, not a dictée.
  const d = L!.sections.find(
    (s): s is Extract<Lesson['sections'][number], { type: 'dictation' }> => s.type === 'dictation',
  )!;
  ok(d.itemIds.length >= 3, 'the dictée is worth the mission');
  for (const id of d.itemIds) {
    const fr = ITEMS.get(id)!.fr;
    strictEqual(dicteeMode(fr), 'words', `"${fr}" would spell letter by letter`);
    ok(dicteeWords(fr).length >= 4, `"${fr}" is too short to be worth assembling`);
    ok(wordDecoys(fr).length > 0, `"${fr}" gets no decoy tiles, so "use everything" solves it`);
  }
  // Each dictée sentence carries one of the lesson's claims, which is what
  // makes the mission a test of the teaching rather than of spelling in
  // general.
  const frs = d.itemIds.map((id) => ITEMS.get(id)!.fr);
  ok(frs.some((f) => /dix minutes/i.test(f)), 'one sentence has a number before a consonant');
  ok(frs.some((f) => /dix ans/i.test(f)), 'one has a number before a vowel');
  ok(frs.some((f) => /neuf heures/i.test(f)), 'one has neuf before heures');
  ok(frs.some((f) => /\bune\b/i.test(f)), 'one has the feminine of one');
});

test('every reading glossary entry underlines a word that is really there', () => {
  // Asks the REAL matcher rather than restating it. gloss.logic.test.ts runs
  // the same check over every lesson; this keeps it pinned for this one.
  for (const s of L!.sections) {
    if (s.type !== 'reading') continue;
    ok(s.glossary?.length, 'the reading mission carries a glossary');
    ok(s.questionsInModal && s.questions?.length, 'and the flag that makes anything render it');
    const keys = new Set((s.glossary ?? []).flatMap((g) => glossKeys(g.word)));
    const hit = new Set(segmentSentence(s.text, keys).filter((x) => x.key).map((x) => x.key!));
    for (const g of s.glossary ?? []) {
      ok(glossKeys(g.word).some((k) => hit.has(k)), `glossary entry "${g.word}" underlines nothing in the passage`);
    }
  }
});

test('the reading passage keeps English outside the guillemets and French inside', () => {
  // Paul's A1 rule, 2026-08-04: anything not inside « » is context, and context
  // is instruction. The learner's reading effort belongs on the exchange rather
  // than on decoding the stage directions.
  //
  // Stated over the guillemets rather than over lines, because the passage has
  // no lines: PassagePage splits on sentence punctuation and renders the pieces
  // inline, so an authored `\n` is consumed as whitespace. Asking the question
  // line by line would have described a layout the learner never sees.
  const sec = L!.sections.find(
    (s): s is Extract<Lesson['sections'][number], { type: 'reading' }> => s.type === 'reading',
  )!;
  const quoted = sec.text.match(/«[^»]*»/g) ?? [];
  ok(quoted.length >= 4, 'the passage holds a real French exchange');
  const outside = sec.text.replace(/«[^»]*»/g, ' ');
  // Proper nouns keep their accents, so this looks for French FUNCTION words,
  // which is what actually makes a stretch of text French.
  const french = outside.match(/\b(est|elle|dans|une|des|les|avec|pour|sur|chez|puis|il|la|le|du)\b/i);
  ok(!french, `French leaked outside the guillemets: "${french?.[0]}" in "${outside.trim()}"`);
});

test('the reading passage authors no line break the renderer would discard', () => {
  // PassagePage does `text.split(/(?<=[.!?»])\s+/)` and renders the pieces
  // inline in one <TX>, so every authored `\n` is swallowed. Writing one turn
  // per line therefore produces a field no component reads, which is the
  // authored-and-unrendered failure this project keeps shipping. Found on a
  // device on the first draft of this passage.
  //
  // The fix chosen was to stop authoring the breaks and let English narration
  // hand the turns over. Wiring PassagePage to honour paragraphs is the better
  // fix and would improve a1.01 too; when somebody makes that call, delete this
  // test rather than working around it.
  const sec = L!.sections.find(
    (s): s is Extract<Lesson['sections'][number], { type: 'reading' }> => s.type === 'reading',
  )!;
  ok(!sec.text.includes('\n'), 'the passage authors line breaks that PassagePage discards');
  const src = readFileSync(resolve(here, '..', 'components', 'ReadingPages.tsx'), 'utf8');
  ok(
    /text\.split\(\/\(\?<=\[\.!\?»\]\)\\s\+\//.test(src),
    'PassagePage no longer splits this way; re-check whether line breaks now render',
  );
});

test('every mission carries its French subtitle and nearly all narrate', () => {
  const missing = L!.sections.filter((s) => !s.frSub);
  strictEqual(missing.length, 0, `sections without frSub: ${missing.map((s) => s.type).join(', ')}`);
  const content = L!.sections.filter((s) => s.type !== 'quiz');
  const spoken = content.filter((s) => (narrationOf(s)?.text.length ?? 0) > 0);
  ok(spoken.length >= content.length - 2, `${spoken.length}/${content.length} missions narrated`);
});

test('every glossary term is surfaced somewhere, and no card is overloaded', () => {
  const defined = Object.keys(L!.terms ?? {});
  ok(defined.length >= 5, `a lesson this size wants a real glossary, got ${defined.length}`);
  const used = new Set(L!.sections.flatMap((s) => (s as { terms?: string[] }).terms ?? []));
  for (const t of defined) ok(used.has(t), `term "${t}" is defined but no section surfaces it`);
  for (const u of used) ok(defined.includes(u), `a section chips "${u}", which is not a defined term`);
  // The renderer shows three chips and collapses the rest, so a fourth is
  // authored and invisible.
  const over = L!.sections.filter((s) => ((s as { terms?: string[] }).terms ?? []).length > 3);
  strictEqual(over.length, 0, `sections with more than 3 term chips: ${over.map((s) => (s as { id?: string }).id).join(', ')}`);
});

test('the lesson teaches the behaviour without teaching the jargon', () => {
  // A learner reaching a1.02 may never have opened the sons track, and a1.02
  // declares no prerequisite units. So the words liaison and elision are not
  // available to lean on: the behaviour is named plainly instead. This is a
  // content decision worth pinning, because "just say liaison" is the obvious
  // shortcut for the next author.
  const jargon = strings(L).filter((s) => /\b(liaison|élision|elision)\b/i.test(s));
  strictEqual(jargon.length, 0, `sons jargon reached an A1 learner: ${jargon.slice(0, 2).join(' | ')}`);
});

test('the progress card counts the journey it sits in', () => {
  // These four figures used to be hand-typed display strings elsewhere in the
  // app, and a display string is validated against nothing. They are derived at
  // authoring time; this asserts the shipped copy agrees with the lesson around
  // it rather than asserting the numbers themselves.
  const ix = L!.sections.findIndex((s) => (s as { id?: string }).id === 's22-progress');
  ok(ix > 0, 'the progress card is in the journey');
  const card = L!.sections[ix] as Extract<Lesson['sections'][number], { type: 'progressCheck' }>;
  const stat = (k: string) => card.stats?.find((x) => x.k === k)?.v;
  strictEqual(stat('Numbers met'), String(L!.itemIds.length));
  strictEqual(stat('Missions done'), `${ix} of ${L!.sections.length}`);
  strictEqual(stat('Exam rounds ahead'), String(theQuiz().rounds?.length ?? 0));
  strictEqual(stat('Pass mark'), `${theQuiz().passMark}%`);
  // And the prose must not restate them. Saying a number twice on one card is
  // two chances to be wrong.
  ok(!/\b\d+\b/.test(card.body ?? ''), `the progress body restates a figure: ${card.body}`);
});

test('difficulty ramps: the first check comes after the teaching, not before', () => {
  const types = L!.sections.map((s) => s.type);
  const firstCheck = L!.sections.findIndex(
    (s) => s.type === 'quiz' || ((s as { questions?: unknown[] }).questions?.length ?? 0) > 0,
  );
  const firstTeaching = Math.min(
    ...['cardDeck', 'tapTable', 'vocabThemes'].map((t) => types.indexOf(t)).filter((i) => i >= 0),
  );
  ok(firstCheck > firstTeaching, 'the learner is taught before being tested');
  const speak = L!.sections.findIndex((s) => s.type === 'practice' && s.skill === 'speak');
  ok(speak > firstCheck, 'speaking is asked for only after an early written win');
});

test('the audio brief names the contrasts that must be one take', () => {
  // The contrasts in this lesson are the SAME number in two or three states.
  // Recorded across two takes they are not comparable and the mission teaches
  // the difference between the recordings. That instruction has to survive in
  // the brief, because it is invisible once the clips are delivered.
  const recorded = L!.audio?.recorded ?? [];
  ok(recorded.length > 0, 'the lesson asks the studio for recordings');
  const contrast = recorded.filter((r) => /one take/i.test(r.desc));
  ok(contrast.length >= 2, 'the one-take instruction is missing from the contrast briefs');
  // Every recordingId a section names must be one the lesson actually requests.
  const known = new Set(recorded.map((r) => r.id));
  const named = strings(L!.sections).filter((s) => s.startsWith('rec-'));
  for (const id of named) ok(known.has(id), `a section names recording "${id}", which the lesson never asks for`);
});

test('the authored copy carries no em dash and no honest/honesty (house style)', () => {
  const all = strings(L);
  const emDash = all.filter((s) => s.includes('—'));
  strictEqual(emDash.length, 0, `em dash found in: ${emDash.slice(0, 3).join(' | ')}`);
  const honest = all.filter((s) => /honest/i.test(s));
  strictEqual(honest.length, 0, `honest/honesty found in: ${honest.slice(0, 3).join(' | ')}`);
});

// ── Source-derived. These read the authored files in ealch-admin. ───────────

test('the reframe appears verbatim as often as it was authored', { skip: noSrc }, () => {
  const inSource = strings(SRC).filter((s) => s.includes(SRC_REFRAME)).length;
  const inSeed = strings(L).filter((s) => s.includes(SRC_REFRAME)).length;
  // Derived, not hardcoded: the seed must carry the same number the source
  // does. A paraphrase in either copy moves one of these and not the other.
  strictEqual(inSeed, inSource, `reframe appears ${inSeed}x in the seed but ${inSource}x in the source`);
  // The density validator's own floor, restated so the intent is visible here.
  const sections = L!.sections.filter((s) => strings(s).some((x) => x.includes(SRC_REFRAME)));
  ok(sections.length >= 3, `the reframe must carry at least 3 sections, found ${sections.length}`);
});

test('the twenty headwords the source names are the twenty the seed teaches', { skip: noSrc }, () => {
  strictEqual(SRC_ONE_TO_TWENTY.length, ONE_TO_TWENTY.length, 'the source names a different number of headwords');
  const frs = SRC_ONE_TO_TWENTY.map((id) => ITEMS.get(id)?.fr.toLowerCase());
  strictEqual(frs.join(','), ONE_TO_TWENTY.join(','), 'the source spine is not one to twenty in order');
});

test('the items this lesson authored are in the seed and nowhere twice', { skip: noSrc }, () => {
  for (const id of SRC_NEW_IDS) {
    const it = ITEMS.get(id);
    ok(it, `authored item ${id} never reached the seed`);
    ok(it!.drills.includes('flashcard') && it!.drills.includes('voiceflash'), `${id} would be stranded from a deck`);
  }
});

test('once published, the seed copy matches what was authored', { skip: noSrc }, () => {
  // Before the batch runs the seed is behind, and this is the test that says
  // so. A seed copy that has fallen behind the authored source is the failure
  // mode that shipped a1.01.l1 with twelve unreachable questions.
  strictEqual(L!.version, SRC!.version, `seed is v${L!.version}, source is v${SRC!.version}`);
  strictEqual(L!.sections.length, SRC!.sections.length, 'section count drifted');
  strictEqual(L!.itemIds.length, SRC!.itemIds.length, 'itemId count drifted');
  strictEqual((L!.acts ?? []).length, (SRC!.acts ?? []).length, 'act count drifted');
  strictEqual((L!.drills ?? []).length, (SRC!.drills ?? []).length, 'drill count drifted');
  strictEqual(
    sectionIds().join(','),
    SRC!.sections.map((s) => (s as { id?: string }).id).join(','),
    'the mission spine drifted between source and seed',
  );
  const srcQuiz = SRC!.sections.find(
    (s): s is Extract<Lesson['sections'][number], { type: 'quiz' }> => s.type === 'quiz',
  )!;
  strictEqual(quizQuestions(theQuiz()).length, quizQuestions(srcQuiz).length, 'quiz question count drifted');
  strictEqual(
    (L!.deckTranche ?? []).flat().length,
    (SRC!.deckTranche ?? []).flat().length,
    'the SRS release schedule drifted',
  );
});
