// Guards a1.01.l1 "Les salutations" — the FIRST lesson a new learner ever
// opens, rebuilt on Lesson Architecture v2.
//
// Referential integrity across the whole corpus is already proven by
// seed.backcompat.test.ts (validateCorpus); this file pins the intent specific
// to THIS lesson, so a later edit that drops the scene opener, thins the exam,
// strips the French mission subtitles, or slips an em dash into the copy goes
// red here rather than in front of a beginner.
//
// Two sources are checked, not one. The SEED is what a learner receives. The
// AUTHORED SOURCE in ealch-admin is what the next author edits. Both are read
// here, and the parity test at the bottom fails when they drift — which is the
// failure mode that has twice cost this project real work.
//
// Counts are DERIVED from the authored source wherever a count is asserted. A
// hardcoded number fails on itself the first time content legitimately changes,
// and the fix is then to edit the test, which is how a test comes to certify a
// bug. The one deliberate exception is documented where it appears.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { narrationOf, quizQuestions, validateLesson, type Lesson } from './schema.ts';
import { glossKeys, segmentSentence } from './gloss.logic.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  units: { id: string; lessonIds: string[] }[];
  lessons: Lesson[];
  items: { id: string; kind: string; theme: string; fr: string; drills: string[] }[];
};

const L = seed.lessons.find((l) => l.id === 'a1.01.l1');

// The admin repo is a sibling checkout. Skip cleanly when it is absent (the app
// can be built on its own) rather than failing the suite.
let SRC: Lesson | null = null;
let SRC_REFRAME = '';
try {
  const mod = await import('../../../ealch-admin/scripts/data/salutations-lesson.ts');
  SRC = mod.SALUTATIONS_LESSON as Lesson;
  SRC_REFRAME = mod.REFRAME as string;
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

test('a1.01.l1 exists and is well-formed', () => {
  ok(L, 'a1.01.l1 is present in the seed');
  strictEqual(validateLesson(L).length, 0);
  strictEqual(L!.unitId, 'a1.01');
  strictEqual(L!.level, 'a1');
  strictEqual(L!.tag, 'A1 · LEÇON 01');
});

test('the a1.01 unit links the lesson (reachable from the Den)', () => {
  const unit = seed.units.find((u) => u.id === 'a1.01');
  ok(unit, 'a1.01 unit exists');
  ok(unit!.lessonIds.includes('a1.01.l1'), 'unit lists the lesson');
});

test('the overview block is authored (the den overview page has real copy)', () => {
  const o = L!.overview;
  ok(o, 'overview is authored');
  ok(o!.titleEn.length > 0 && o!.introFr.length > 0);
  ok(o!.minutes >= 1 && o!.minutes <= 180);
  ok(o!.difficulty >= 1 && o!.difficulty <= 5);
  // This is lesson one of the whole app: it must not present as hard.
  ok(o!.difficulty <= 2, `first lesson difficulty should stay gentle, got ${o!.difficulty}`);
});

test('the journey opens on a scene and closes quiz then roundup', () => {
  const types = L!.sections.map((s) => s.type);
  // `scene` rather than `story`: the learner commits to a choice inside the
  // opening beat instead of watching one be made.
  strictEqual(types[0], 'scene', 'a learner meets the stakes before any rule');
  strictEqual(types[types.length - 1], 'roundup', 'the badge closes the journey');
  strictEqual(types[types.length - 2], 'quiz', 'the exam sits just before the badge');
});

test('the journey is genuinely multimodal', () => {
  const types = new Set(L!.sections.map((s) => s.type));
  // The mission mechanics a beginner lesson has to exercise: read it, hear it,
  // say it, spell it, play it back in a real conversation, and review it.
  for (const t of [
    'scene',
    'goals',
    'cardDeck',
    'tapTable',
    'vocabThemes',
    'flashcards',
    'listening',
    'scenario',
    'reading',
    'dictation',
    'reviewDeck',
    'progressCheck',
    'practice',
    'useCases',
    'examples',
    'commonErrors',
    'quiz',
    'roundup',
  ] as const) {
    ok(types.has(t), `section type ${t} present`);
  }
  ok(types.size >= 15, `expected a rich mission mix, got ${types.size} types`);
});

test('difficulty ramps: the first check comes after the teaching, not before', () => {
  const types = L!.sections.map((s) => s.type);
  // The first thing that GRADES the learner, whatever section type carries it.
  // Under v2 the early confidence check is a `listening` mission with questions,
  // not a second quiz section, so indexOf('quiz') is no longer the right probe.
  const firstCheck = L!.sections.findIndex(
    (s) => s.type === 'quiz' || ((s as { questions?: unknown[] }).questions?.length ?? 0) > 0
  );
  const firstTeaching = Math.min(
    ...['cardDeck', 'tapTable', 'vocabThemes'].map((t) => types.indexOf(t)).filter((i) => i >= 0)
  );
  ok(firstCheck > firstTeaching, 'the learner is taught before being tested');
  // And production (speaking, roleplay) comes after recognition.
  const speak = L!.sections.findIndex((s) => s.type === 'practice' && s.skill === 'speak');
  ok(speak > firstCheck, 'speaking is asked for only after an early written win');
});

test('the final exam is substantial and every question teaches', () => {
  const quizzes = L!.sections.filter(
    (s): s is Extract<Lesson['sections'][number], { type: 'quiz' }> => s.type === 'quiz'
  );
  strictEqual(quizzes.length, 1, 'exactly one quiz section — see the reachability test below');
  const final = quizzes[0];
  const qs = quizQuestions(final);
  ok(qs.length >= 10, `at least 10 final questions, got ${qs.length}`);
  ok((final.rounds?.length ?? 0) >= 2, 'the exam is round-based so remediation can target a round');
  for (const q of qs) {
    // Feedback must teach, not just mark: this is the design rule that keeps a
    // wrong answer from being a dead end.
    ok(typeof q.why === 'string' && q.why.length > 0, `"${q.q}" explains its answer`);
    // Only option-based formats carry opts; typeIn/speak/errorSpot do not.
    if (Array.isArray(q.opts) && q.opts.length) {
      strictEqual(new Set(q.opts).size, q.opts.length, `options distinct for "${q.q}"`);
      ok(q.correct != null && q.correct >= 0 && q.correct < q.opts.length, `correct in range for "${q.q}"`);
    }
  }
});

// The bug this rebuild exists to fix. lessonPager.logic.ts strips every quiz
// section in contentSections() and then appends exactly ONE quiz page in
// buildPages(), resolved with sections.find(s => s.type === 'quiz'). Any second
// quiz section is a set of questions no learner can ever reach. The shipped
// lesson had 12 of them, all with a `why`, all invisible.
test('every authored quiz question is reachable by a learner', () => {
  const quizzes = L!.sections.filter(
    (s): s is Extract<Lesson['sections'][number], { type: 'quiz' }> => s.type === 'quiz'
  );
  const authored = quizzes.flatMap((q) => quizQuestions(q)).length;
  // What the pager can actually reach: the FIRST quiz section, and only that.
  const reachable = quizzes.length ? quizQuestions(quizzes[0]).length : 0;
  strictEqual(
    reachable,
    authored,
    `${authored - reachable} authored quiz question(s) are unreachable: the pager renders only ` +
    `the first of ${quizzes.length} quiz sections. Fold the extras into the mission they follow.`
  );
});

test('every mission carries its French subtitle and nearly all narrate', () => {
  const missing = L!.sections.filter((s) => !s.frSub);
  strictEqual(missing.length, 0, `sections without frSub: ${missing.map((s) => s.type).join(', ')}`);
  const content = L!.sections.filter((s) => s.type !== 'quiz');
  // `say` takes two shapes under v2 (a bare string, or a narration object with
  // voice and timing). narrationOf is the one accessor that knows both, so a
  // section upgraded to the object form is not miscounted as silent.
  const spoken = content.filter((s) => (narrationOf(s)?.text.length ?? 0) > 0);
  ok(spoken.length >= content.length - 2, `${spoken.length}/${content.length} missions narrated`);
});

test('practice and dictation drill only resolvable corpus items', () => {
  const known = new Map(seed.items.map((i) => [i.id, i]));
  for (const s of L!.sections) {
    if (s.type !== 'practice' && s.type !== 'dictation') continue;
    ok(s.itemIds.length > 0, `${s.type} "${s.title}" names items`);
    for (const id of s.itemIds) {
      ok(known.has(id), `${s.type} item ${id} exists`);
      ok(L!.itemIds.includes(id), `${s.type} item ${id} is declared on the lesson`);
    }
    // A dictée whose items cannot be dictated is a dead mission.
    if (s.type === 'dictation') {
      for (const id of s.itemIds) {
        ok(known.get(id)!.drills.includes('dictation'), `${id} carries the dictation drill`);
      }
    }
    // Likewise a speak mission whose items have no voice drill.
    if (s.type === 'practice' && s.skill === 'speak') {
      for (const id of s.itemIds) {
        ok(known.get(id)!.drills.includes('voiceflash'), `${id} carries the voiceflash drill`);
      }
    }
  }
});

test('no dead corpus entry: every id the lesson declares resolves', () => {
  const known = new Set(seed.items.map((i) => i.id));
  const dead = L!.itemIds.filter((id) => !known.has(id));
  strictEqual(dead.length, 0, `lesson declares items absent from the corpus: ${dead.join(', ')}`);
});

test('no two non-sentence items the lesson teaches share an fr', () => {
  // The flashcard hub keys decks on `fr`, so a duplicate serves the same card
  // twice. Sentences are exempt: they are keyed differently and repeat legally.
  const byId = new Map(seed.items.map((i) => [i.id, i]));
  const seen = new Map<string, string>();
  for (const id of L!.itemIds) {
    const it = byId.get(id);
    if (!it || it.kind === 'sentence') continue;
    const key = `${it.theme}::${it.fr.trim()}`;
    const prior = seen.get(key);
    ok(!prior, `${id} and ${prior} both teach "${it.fr}" in theme ${it.theme}`);
    seen.set(key, id);
  }
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
});

test('every quiz ref points at a section that exists', () => {
  const ids = sectionIds();
  const quiz = L!.sections.find(
    (s): s is Extract<Lesson['sections'][number], { type: 'quiz' }> => s.type === 'quiz'
  );
  for (const q of quizQuestions(quiz!)) {
    const ref = (q as { ref?: string }).ref;
    if (ref) ok(ids.includes(ref), `question "${q.q}" refs "${ref}", which is not a section here`);
  }
});

test('tranches release only items the lesson teaches', () => {
  const tranches = L!.deckTranche ?? [];
  ok(tranches.length > 0, 'the SRS release schedule is authored');
  const declared = new Set(L!.itemIds);
  for (const [i, t] of tranches.entries()) {
    for (const id of t) ok(declared.has(id), `tranche ${i} releases ${id}, which the lesson never teaches`);
  }
  const all = tranches.flat();
  const dupes = all.filter((x, i) => all.indexOf(x) !== i);
  strictEqual(dupes.length, 0, `an item is released twice: ${[...new Set(dupes)].join(', ')}`);
});

test('every round targets an error trigger that is authored', () => {
  const quiz = L!.sections.find(
    (s): s is Extract<Lesson['sections'][number], { type: 'quiz' }> => s.type === 'quiz'
  );
  const triggers = new Set((L!.errorTriggers ?? []).map((t) => t.id));
  ok(triggers.size > 0, 'the lesson authors error triggers');
  for (const r of quiz!.rounds ?? []) {
    for (const t of r.targets ?? []) {
      ok(triggers.has(t), `round "${r.id}" targets "${t}", which is not an authored trigger`);
    }
  }
});

test('the lesson teaches the tu/vous split it promises', () => {
  const blob = JSON.stringify(L).toLowerCase();
  for (const must of ['bonjour', 'bonsoir', 'salut', 'au revoir', 'merci', 'ça va', 'vous', 'enchanté']) {
    ok(blob.includes(must), `the core expression "${must}" is taught`);
  }
  ok(L!.grammarIntroduced?.some((g) => /tu.*vous/i.test(g)), 'the register split is declared as introduced grammar');
});

test('the authored copy carries no em dash and no honest/honesty (house style)', () => {
  const all = strings(L);
  const emDash = all.filter((s) => s.includes('—'));
  strictEqual(emDash.length, 0, `em dash found in: ${emDash.slice(0, 3).join(' | ')}`);
  const honest = all.filter((s) => /honest/i.test(s));
  strictEqual(honest.length, 0, `honest/honesty found in: ${honest.slice(0, 3).join(' | ')}`);
});

test('the progress card counts the journey it sits in', () => {
  // These four figures were hand-typed display strings. A display string is
  // validated against nothing, so the first mission added would have left the
  // card confidently wrong with the whole suite still green. They are derived
  // at authoring time now, and this asserts the shipped copy agrees with the
  // lesson around it rather than asserting the numbers themselves.
  const ix = L!.sections.findIndex((s) => (s as { id?: string }).id === 's19-progress');
  ok(ix > 0, 'the progress card is in the journey');
  const card = L!.sections[ix] as Extract<Lesson['sections'][number], { type: 'progressCheck' }>;
  const quiz = L!.sections.find(
    (s): s is Extract<Lesson['sections'][number], { type: 'quiz' }> => s.type === 'quiz'
  )!;
  const stat = (k: string) => card.stats?.find((x) => x.k === k)?.v;
  strictEqual(stat('Expressions met'), String(L!.itemIds.length));
  strictEqual(stat('Missions done'), `${ix} of ${L!.sections.length}`);
  strictEqual(stat('Exam rounds ahead'), String(quiz.rounds?.length ?? 0));
  strictEqual(stat('Pass mark'), `${quiz.passMark}%`);
  // And the prose must not restate them. Saying a number twice on one card is
  // two chances to be wrong.
  ok(!/\b\d+\b/.test(card.body ?? ''), `the progress body restates a figure: ${card.body}`);
});

test('every glossary term is surfaced somewhere, and no card is overloaded', () => {
  const defined = Object.keys(L!.terms ?? {});
  ok(defined.length >= 5, `a lesson this size wants a real glossary, got ${defined.length}`);
  const used = new Set(L!.sections.flatMap((s) => (s as { terms?: string[] }).terms ?? []));
  for (const t of defined) ok(used.has(t), `term "${t}" is defined but no section surfaces it`);
  for (const u of used) ok(defined.includes(u), `a section chips "${u}", which is not a defined term`);
  // The renderer shows three chips and collapses the rest, so a fourth is
  // authored and invisible. sons.06 ships seven sections in that state.
  const over = L!.sections.filter((s) => ((s as { terms?: string[] }).terms ?? []).length > 3);
  strictEqual(over.length, 0, `sections with more than 3 term chips: ${over.map((s) => (s as { id?: string }).id).join(', ')}`);
});

test('the exam asks the learner to produce, not only to recognise', () => {
  const quiz = L!.sections.find(
    (s): s is Extract<Lesson['sections'][number], { type: 'quiz' }> => s.type === 'quiz'
  )!;
  const qs = quizQuestions(quiz);
  const mcq = qs.filter((q) => (q.format ?? 'mcq') === 'mcq').length;
  // Recognition can be passed by elimination. This lesson's whole claim is that
  // the learner can say these things, so at most half the exam may be mcq.
  ok(mcq <= qs.length / 2, `${mcq}/${qs.length} questions are mcq; production formats have been squeezed out`);
  // Every free-text answer must be reachable through the folding the app does
  // (accents, case, punctuation and spacing are all stripped before compare),
  // so an accepted form that only differs by those is redundant, not wrong.
  for (const q of qs) {
    if (q.format !== 'typeIn' && q.format !== 'errorSpot') continue;
    const accept = (q as { accept?: string[] }).accept ?? [];
    ok(accept.length > 0, `"${q.q}" is free-text but accepts nothing`);
    const answer = (q as { answer?: string }).answer;
    if (q.format === 'typeIn') ok(answer && accept.includes(answer), `"${q.q}" shows an answer it would not accept`);
  }
});

test('the reading passage keeps English outside the guillemets and French inside', () => {
  // The A1 rule for this passage: a line that does not open with « is context,
  // and context is instruction, so it is in English. The learner's reading
  // effort belongs on the exchange rather than on the stage directions.
  const sec = L!.sections.find(
    (s): s is Extract<Lesson['sections'][number], { type: 'reading' }> =>
      s.type === 'reading' && (s as { id?: string }).id === 's17-reading'
  );
  ok(sec, 's17-reading is in the lesson');
  const lines = sec!.text.split('\n').map((l) => l.trim()).filter(Boolean);
  const quoted = lines.filter((l) => l.startsWith('«'));
  ok(quoted.length >= 4, 'the passage still holds a French exchange');
  for (const line of lines) {
    if (line.startsWith('«')) continue;
    // Proper nouns keep their accents (Léa), so this looks for French
    // FUNCTION words, which is what actually makes a line French.
    ok(
      !/\b(est|elle|dans|une|des|les|avec|pour|sur|chez|puis|elle|il|la|le|du)\b/i.test(line),
      `an unquoted line is still in French: "${line}"`
    );
  }
});

test('every reading glossary entry underlines a word that is really there', () => {
  // Asks the REAL matcher rather than restating it. An earlier version of this
  // test reimplemented the lookup inline, which made it a second copy of the
  // rule that could drift from the renderer — and in fact copied the version
  // that was already wrong. gloss.logic.test.ts runs the same check over every
  // lesson; this keeps it pinned for the one the file is about.
  for (const s of L!.sections) {
    if (s.type !== 'reading') continue;
    const keys = new Set((s.glossary ?? []).flatMap((g) => glossKeys(g.word)));
    const hit = new Set(segmentSentence(s.text, keys).filter((x) => x.key).map((x) => x.key!));
    for (const g of s.glossary ?? []) {
      ok(glossKeys(g.word).some((k) => hit.has(k)), `glossary entry "${g.word}" underlines nothing in the passage`);
    }
  }
});

// ── Source-derived. These read the authored files in ealch-admin. ───────────

test('the reframe appears verbatim as often as it was authored', { skip: noSrc }, () => {
  const inSource = strings(SRC).filter((s) => s.includes(SRC_REFRAME)).length;
  const inSeed = strings(L).filter((s) => s.includes(SRC_REFRAME)).length;
  // Derived, not hardcoded: the seed must carry the same number the source
  // does. A paraphrase in either copy moves one of these and not the other.
  strictEqual(inSeed, inSource, `reframe appears ${inSeed}x in the seed but ${inSource}x in the source`);
  // The density validator's own floor, restated so the intent is visible here.
  ok(inSource >= 3, `the reframe must carry at least 3 sections, found ${inSource}`);
});

test('once published, the seed copy matches what was authored', { skip: noSrc }, () => {
  // Before the batch runs the seed is behind and this is the test that says so.
  // A seed copy that has fallen behind the authored source is the failure mode
  // that shipped a1.01.l1 with twelve unreachable questions.
  strictEqual(L!.version, SRC!.version, `seed is v${L!.version}, source is v${SRC!.version}`);
  strictEqual(L!.sections.length, SRC!.sections.length, 'section count drifted');
  strictEqual(L!.itemIds.length, SRC!.itemIds.length, 'itemId count drifted');
  strictEqual((L!.acts ?? []).length, (SRC!.acts ?? []).length, 'act count drifted');
  strictEqual((L!.drills ?? []).length, (SRC!.drills ?? []).length, 'drill count drifted');
  strictEqual(
    sectionIds().join(','),
    SRC!.sections.map((s) => (s as { id?: string }).id).join(','),
    'the mission spine drifted between source and seed'
  );
  const seedQs = quizQuestions(
    L!.sections.find((s): s is Extract<Lesson['sections'][number], { type: 'quiz' }> => s.type === 'quiz')!
  ).length;
  const srcQs = quizQuestions(
    SRC!.sections.find((s): s is Extract<Lesson['sections'][number], { type: 'quiz' }> => s.type === 'quiz')!
  ).length;
  strictEqual(seedQs, srcQs, 'quiz question count drifted');
});
