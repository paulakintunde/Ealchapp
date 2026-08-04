// Guards sons.09.l1 "Masterclass" — the last lesson in the sons track.
//
// The lesson body lives in the admin repo (ealch-admin/scripts/data/), because
// that is where content is authored before it is published into seed.json. This
// test runs against it directly so the lesson is checked at AUTHORING time, not
// only once it has shipped. When the batch has been applied and the lesson
// exists in seed.json, the seed copy is checked too.
//
// What belongs HERE rather than in lesson-contract.test.ts: the assertions that
// are true of THIS lesson and could not sensibly be asked of any other. The
// generic contract already checks that ids resolve, that acts claim real
// sections and that every quiz question explains itself. What it cannot check
// is that this lesson is a MASTERCLASS rather than a tenth single-rule lesson:
//
//   - that every corpus entry exercises two or more rules
//   - that all five rules the unit's canDo names are actually taught
//   - that the quiz genuinely requires combining them
//   - that the tranches do not re-release words an earlier lesson already owns
//   - that the two silent renderer contracts this lesson depends on still hold
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { formatIssues, quizQuestions, validateItem, validateLesson, type Lesson, type QuizQuestion } from './schema.ts';
import { formatDensity, validateDensity } from './density.logic.ts';
import { hasPlainNasalFor, isDelimitedIpa } from './density.logic.ts';
import { pendingRecordings, referencedRecordingIds } from './lessonAudio.logic.ts';
import { checkpointFor, releasedThrough, stoppingPoints, tranche } from './acts.logic.ts';
import { buildQuizConfig, drillForRound } from './quizRounds.logic.ts';

const here = dirname(fileURLToPath(import.meta.url));

// The admin repo is a sibling checkout. Skip cleanly when it is absent (the app
// can be built on its own) rather than failing the suite.
let LESSON: Lesson | null = null;
let REFRAME = '';
let PIPELINE = '';
let ITEM_IDS = new Set<string>();
let AUTHORED_IDS: string[] = [];
let REUSED_IDS: string[] = [];
let RULES: readonly string[] = [];
let CORPUS: {
  id: string; fr: string; en: string; kind: string; ipa?: string; respell?: string;
  rules: string[]; family: string; pair: string | null; drills: string[];
}[] = [];
let REUSED: { id: string; fr: string; why: string }[] = [];
let PAIRS: [string, string][] = [];
let AUTHORED_QUESTIONS: (QuizQuestion & { rules: string[] })[] = [];
let multiRuleCount = () => 0;
let formatMix = (): Record<string, number> => ({});

try {
  const corpus = await import('../../../ealch-admin/scripts/data/masterclass-corpus.ts');
  const quiz = await import('../../../ealch-admin/scripts/data/masterclass-quiz.ts');
  const lesson = await import('../../../ealch-admin/scripts/data/masterclass-lesson.ts');
  CORPUS = corpus.MASTERCLASS;
  ITEM_IDS = new Set(corpus.ALL_IDS);
  AUTHORED_IDS = corpus.MASTERCLASS_IDS;
  REUSED_IDS = corpus.REUSED_IDS;
  REUSED = corpus.REUSED;
  RULES = corpus.RULES;
  PAIRS = corpus.pairs();
  AUTHORED_QUESTIONS = quiz.AUTHORED_QUESTIONS;
  multiRuleCount = quiz.multiRuleCount;
  formatMix = quiz.formatMix;
  LESSON = lesson.MASTERCLASS_LESSON;
  REFRAME = lesson.REFRAME;
  PIPELINE = lesson.PIPELINE;
} catch {
  // Not available; every test below no-ops.
}

const skip = !LESSON;

/** Every authored string in the lesson. */
function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, out));
  return out;
}

const sectionById = (id: string) =>
  LESSON!.sections.find((s) => (s as { id?: string }).id === id);

const quizSection = () => {
  const q = LESSON!.sections.find((s) => s.type === 'quiz');
  ok(q && q.type === 'quiz', 'the lesson has a quiz section');
  return q as Extract<Lesson['sections'][number], { type: 'quiz' }>;
};

/* ─── The corpus is a list of COLLISIONS, not a word list ─────────────────── */

test('every corpus entry exercises two or more rules', { skip }, () => {
  // The one assertion that makes this a masterclass corpus rather than a tenth
  // themed word list. A single-rule item belongs in the lesson that taught that
  // rule: repeating it here spends a screen on material the learner finished.
  //
  // Enforced rather than sampled, because the failure is invisible: a one-rule
  // entry is schema-valid, renders correctly, drills correctly, and quietly
  // turns a collision drill back into a recognition drill.
  strictEqual(CORPUS.length, 56, 'all 56 entries present');
  const thin = CORPUS.filter((w) => w.rules.length < 2).map((w) => `${w.id} "${w.fr}"`);
  strictEqual(thin.length, 0, `entries exercising one rule: ${thin.join(' | ')}`);

  const asItems = CORPUS.map((w) => {
    const { rules: _r, family: _f, pair: _p, extra: _e, ...rest } = w as Record<string, unknown>;
    return { ...rest, tags: w.rules };
  });
  const issues = asItems.flatMap((i) => validateItem(i, String((i as { id: string }).id)));
  strictEqual(issues.length, 0, formatIssues(issues));
});

test('all five rules the unit promises are actually exercised', { skip }, () => {
  // sons.09's canDo, verbatim: "Can apply the whole sound system in connected
  // speech: nasals, silent letters, liaison, elision and rhythm together". That
  // is the unit's contract with the learner, and it names FIVE rules.
  //
  // Note what it does NOT name: accents. sons.05 has a reframe and is a
  // prerequisite, but the unit does not promise it, so it is not one of the
  // five and is not asserted here. Taking the list from the canDo rather than
  // from "which lessons have a reframe" is what keeps this test aligned with
  // what a learner was told they would get.
  //
  // Asserted by TAG so a rule quietly dropped during authoring fails the build.
  deepStrictEqual([...RULES].sort(), ['elision', 'liaison', 'muettes', 'nasales', 'rythme']);
  for (const rule of RULES) {
    const n = CORPUS.filter((w) => w.rules.includes(rule)).length;
    ok(n >= 8, `rule "${rule}" is exercised by only ${n} entries`);
  }
  // And the whole system has to appear together somewhere, or the lesson only
  // ever shows pairs of rules and never the pipeline it teaches.
  const allFive = CORPUS.filter((w) => w.rules.length === 5);
  ok(allFive.length >= 3, `only ${allFive.length} entries exercise all five rules at once`);
});

test('every minimal pair is symmetric and differs in exactly one decision', { skip }, () => {
  // A pair is a teaching claim: these two are identical up to one thing, and
  // that thing is the rule. A one-way pair renders a contrast whose other half
  // is not marked as one, which is how a pair silently becomes two unrelated
  // cards on two different screens.
  ok(PAIRS.length >= 10, `only ${PAIRS.length} minimal pairs`);
  for (const w of CORPUS) {
    if (!w.pair) continue;
    const other = CORPUS.find((x) => x.id === w.pair);
    ok(other, `${w.id} pairs with "${w.pair}", which is not in the corpus`);
    strictEqual(other!.pair, w.id, `${w.id} pairs with ${w.pair} but ${w.pair} pairs with ${other!.pair}`);
    // Both halves must exercise a rule the other does, or they are not a
    // contrast, they are two different lessons on one screen.
    const shared = w.rules.filter((r) => other!.rules.includes(r));
    ok(shared.length >= 1, `${w.id} and ${w.pair} share no rule, so they contrast nothing`);
  }
});

test('the notation conventions hold across the corpus', { skip }, () => {
  for (const w of CORPUS) {
    if (w.ipa) ok(isDelimitedIpa(w.ipa), `${w.id} IPA not slash-delimited: "${w.ipa}"`);
    if (w.respell) {
      ok(
        !hasPlainNasalFor(w.fr, `[${w.respell}]`),
        `${w.id} "${w.fr}" respelled "${w.respell}" closes a nasal with a plain n or m`
      );
    }
  }
});

test('the notation this lesson inherits is used and never reinvented', { skip }, () => {
  // Five lessons' notation meets here, and a sixth mark would be the one thing
  // a learner has never seen. So: the liaison tie comes from sons.10, the
  // phrase bar from sons.08, the superscript nasal from sons.06, and nothing
  // else is introduced.
  const TIE = '‿';
  const withTie = CORPUS.filter((w) => (w.ipa ?? '').includes(TIE));
  const withBar = CORPUS.filter((w) => (w.ipa ?? '').includes('|'));
  ok(withTie.length >= 25, `only ${withTie.length} entries carry a liaison tie`);
  ok(withBar.length >= 8, `only ${withBar.length} entries carry a phrase break`);
  // Every tie in the respelling must have one in the IPA and vice versa, or the
  // two notations disagree about where the join is.
  for (const w of CORPUS) {
    if (!w.respell) continue;
    const inIpa = [...(w.ipa ?? '')].filter((c) => c === TIE).length;
    const inRe = [...w.respell].filter((c) => c === TIE).length;
    strictEqual(inRe, inIpa, `${w.id} "${w.fr}" has ${inIpa} tie(s) in IPA and ${inRe} in the respelling`);
    const barIpa = [...(w.ipa ?? '')].filter((c) => c === '|').length;
    const barRe = [...w.respell].filter((c) => c === '|').length;
    strictEqual(barRe, barIpa, `${w.id} "${w.fr}" has ${barIpa} break(s) in IPA and ${barRe} in the respelling`);
  }
  // ˈ and ˌ are sons.08's explicitly rejected marks: the caps already carry
  // prominence, and a second notation for one idea teaches the notation twice.
  const invented = CORPUS.filter((w) => /[ˈˌ]/.test(`${w.ipa ?? ''}${w.respell ?? ''}`));
  strictEqual(invented.length, 0, `entries using a stress mark this course does not use: ${invented.map((w) => w.id).join(', ')}`);
});

test('no two entries teach the same word', { skip }, () => {
  // The flashcard hub keys decks on `fr`, so two rows with the same spelling
  // serve the learner the same card twice and take two SRS ratings for one
  // word. Sentences are excluded for the same reason flashhub-coverage excludes
  // them: they are not vocab cards, and two may legitimately share a clause.
  const seen = new Map<string, string>();
  const dupes: string[] = [];
  for (const w of CORPUS) {
    if (w.kind === 'sentence') continue;
    const key = w.fr.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    const prior = seen.get(key);
    if (prior) dupes.push(`${prior} vs ${w.id} ("${w.fr}")`);
    else seen.set(key, w.id);
  }
  strictEqual(dupes.length, 0, `the same word twice: ${dupes.join(' | ')}`);
});

test('no corpus entry is dead weight', { skip }, () => {
  // An entry can be defined, shipped, released into the SRS and present on no
  // screen at all, by id or by spelling (the .057 incident). Two kinds of
  // "not referenced by id" are legitimate: referenced by TEXT through the fr()
  // helper, and deliberately deck-only. What is not allowed is an entry on no
  // screen AND in no tranche, or a deck-only one with no flashcard drill, which
  // is a card the deck can never serve.
  const authored = JSON.stringify({
    sections: LESSON!.sections,
    drills: LESSON!.drills,
    terms: LESSON!.terms,
    narration: LESSON!.narration,
    sheets: LESSON!.sheets,
  });
  const released = new Set(LESSON!.deckTranche!.flat());

  const orphaned: string[] = [];
  const unservable: string[] = [];
  for (const w of CORPUS) {
    const onScreen = authored.includes(w.id) || authored.includes(w.fr);
    if (onScreen) continue;
    if (!released.has(w.id)) orphaned.push(`${w.id} "${w.fr}"`);
    else if (!w.drills.includes('flashcard')) unservable.push(`${w.id} "${w.fr}"`);
  }
  strictEqual(orphaned.length, 0, `on no screen and in no tranche: ${orphaned.join(' | ')}`);
  strictEqual(unservable.length, 0, `deck-only but no flashcard drill: ${unservable.join(' | ')}`);
});

/* ─── Reuse ───────────────────────────────────────────────────────────────── */

test('the reused items exist in the shipped seed and still say what this lesson claims', { skip }, () => {
  // 22 of this lesson's 78 itemIds are items it did not author and does not
  // control. The claim they support is that the system works on material this
  // lesson never wrote, and that claim is only true while the ids resolve AND
  // the sentences are unchanged: a rewrite upstream would leave a mission
  // teaching a contrast that is no longer in the sentence.
  const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
    items: { id: string; fr: string }[];
  };
  const byId = new Map(seed.items.map((i) => [i.id, i.fr]));
  ok(REUSED.length >= 20, `only ${REUSED.length} reused items`);
  for (const r of REUSED) {
    const fr = byId.get(r.id);
    ok(fr, `reused item ${r.id} ("${r.fr}") is not in the seed`);
    strictEqual(fr, r.fr, `reused item ${r.id} is "${fr}" in the seed, not "${r.fr}"`);
    ok(r.why.length > 20, `reused item ${r.id} has no stated reason`);
  }
  // And they must come from more than one theme, or "it works on other
  // people's material" means "it works on one other lesson's material".
  const themes = new Set(REUSED.map((r) => r.id.split('.')[2]));
  ok(themes.size >= 3, `reused items come from only ${themes.size} theme(s): ${[...themes].join(', ')}`);
});

/* ─── Structure ───────────────────────────────────────────────────────────── */

test('the lesson passes the app schema and every density rule', { skip }, () => {
  const issues = validateLesson(LESSON!);
  strictEqual(issues.length, 0, formatIssues(issues));
  strictEqual(LESSON!.id, 'sons.09.l1');
  strictEqual(LESSON!.unitId, 'sons.09');
  strictEqual(LESSON!.level, 'sons');
  strictEqual(LESSON!.tag, 'SONS · LEÇON 09');
  const density = validateDensity(LESSON!, ITEM_IDS);
  strictEqual(density.length, 0, formatDensity(density));
});

test('the mission spine is present and correctly ordered', { skip }, () => {
  // The spine is a required BACKBONE, not a fixed length: this lesson runs 23
  // missions where sons.06 runs 27 and sons.07 runs 19, because there is almost
  // no new material to explain. What must hold is that the teaching ORDER is
  // intact, and here that order IS the lesson's content: grouping is taught
  // before joining because a join cannot be decided until the group is known,
  // and both are taught before the collisions that need them.
  const ids = LESSON!.sections.map((s) => (s as { id?: string }).id).filter(Boolean) as string[];

  const backbone = [
    's01-scene', 's02-goals', 's03-anchors',
    's04-breaks', 's05-across', 's06-push',
    's07-collide', 's08-both', 's09-silence', 's10-dictation',
    's11-h', 's12-nasal', 's13-pairs', 's14-errors',
    's15-inhibition', 's16-speak', 's17-scenario', 's18-listen',
    's19-reading', 's20-review', 's21-progress', 's22-quiz', 's23-roundup',
  ];
  deepStrictEqual(ids, backbone, 'the spine, in order');

  // The three that carry the lesson's one new idea, in the order that idea
  // requires. Reversing any of these would teach the pipeline backwards.
  ok(ids.indexOf('s04-breaks') < ids.indexOf('s07-collide'), 'grouping is taught before joining');
  ok(ids.indexOf('s08-both') < ids.indexOf('s09-silence'), 'what joins is taught before what does not');
  ok(ids.indexOf('s09-silence') < ids.indexOf('s11-h'), 'the default is taught before the thing that blocks it');
  // Mission 1 is a scene, not a teach: the lesson opens on a real moment going
  // wrong rather than a paragraph explaining what is about to be learned.
  strictEqual(LESSON!.sections[0].type, 'scene');
  strictEqual(ids[ids.length - 1], 's23-roundup');
  strictEqual(ids[ids.length - 2], 's22-quiz');
});

test('the act structure reads as a progression through the system', { skip }, () => {
  // "One act per rule" is the obvious structure for a masterclass and the wrong
  // one: it rebuilds the five lessons the learner has already finished. These
  // six acts are the pipeline plus the places it fights itself.
  const acts = LESSON!.acts ?? [];
  deepStrictEqual(
    acts.map((a) => a.title),
    ['Five rules, one sentence', 'Group it', 'Join it', 'Where the rules fight', 'At speed', 'Prove it'],
  );
  const claimed = acts.flatMap((a) => a.sections);
  const ids = LESSON!.sections.map((s) => (s as { id?: string }).id).filter(Boolean) as string[];
  for (const id of ids) ok(claimed.includes(id), `section ${id} belongs to an act`);
  strictEqual(new Set(claimed).size, claimed.length, 'no section is claimed twice');
});

test('no act runs past the checkpoint spacing limit', { skip }, () => {
  for (const a of LESSON!.acts!) {
    const stops = 1 + (a.restPoints?.length ?? 0);
    const longest = Math.ceil(a.estScreens / stops);
    ok(longest <= 22, `act "${a.id}" leaves a ${longest}-screen stretch`);
  }
});

test('a checkpoint exists for every act, and only the last one ends the lesson', { skip }, () => {
  const acts = LESSON!.acts ?? [];
  for (const a of acts) {
    const last = a.sections[a.sections.length - 1];
    const cp = checkpointFor(LESSON!, last);
    ok(cp, `act "${a.id}" has a checkpoint after "${last}"`);
    ok(cp!.act.milestone, 'and a milestone line to show on it');
  }
  const finals = acts.filter((a) => checkpointFor(LESSON!, a.sections[a.sections.length - 1])?.isFinal);
  strictEqual(finals.length, 1);
  strictEqual(stoppingPoints(LESSON!).filter((s) => s.kind === 'checkpoint').length, 6);
});

test('every itemId resolves, authored and reused alike', { skip }, () => {
  // Derived, not hardcoded: a literal count fails on itself the first time the
  // content legitimately changes, and the fix is then to edit the test, which is
  // how a test comes to certify a bug.
  strictEqual(LESSON!.itemIds.length, AUTHORED_IDS.length + REUSED_IDS.length);
  strictEqual(new Set(LESSON!.itemIds).size, LESSON!.itemIds.length, 'no itemId is listed twice');
  for (const id of LESSON!.itemIds) ok(ITEM_IDS.has(id), `${id} resolves`);
});

test('the tranches release what this lesson taught, and nothing an earlier one owns', { skip }, () => {
  // The one place this lesson differs from every other in the track. A reused
  // item is already in the learner's deck, put there by the lesson that taught
  // it, and releasing it a second time would reset a card the SRS has been
  // scheduling for weeks. So the tranches cover the authored 56 exactly.
  strictEqual(LESSON!.deckTranche?.length, LESSON!.acts?.length);
  const released = LESSON!.deckTranche!.flat();
  strictEqual(new Set(released).size, released.length, 'no word is released twice');
  strictEqual(released.length, AUTHORED_IDS.length, 'every authored word reaches the SRS exactly once');

  const reused = new Set(REUSED_IDS);
  const rereleased = released.filter((id) => reused.has(id));
  strictEqual(rereleased.length, 0, `tranches re-release reused items: ${rereleased.join(', ')}`);
  for (const id of released) ok(LESSON!.itemIds.includes(id), `${id} is taught before it is released`);
});

test('the SRS releases progressively, never all at the end', { skip }, () => {
  const acts = LESSON!.acts ?? [];
  const perAct = acts.map((_, i) => tranche(LESSON!, i).length);
  strictEqual(perAct.reduce((a, b) => a + b, 0), AUTHORED_IDS.length);
  const last = perAct[perAct.length - 1];
  ok(last < AUTHORED_IDS.length / 2, `the final act releases ${last} of ${AUTHORED_IDS.length}`);
  const midway = releasedThrough(LESSON!, 2).length;
  ok(midway > 0 && midway < AUTHORED_IDS.length, `${midway} cards released by act 3`);
});

/* ─── The organising idea ─────────────────────────────────────────────────── */

test('the reframe appears verbatim, never reworded', { skip }, () => {
  // The reframe has to do a job the five existing ones cannot: make them
  // instances of one thing. A line that listed them would be a list.
  strictEqual(REFRAME, 'French pronounces the phrase, not the word.');
  strictEqual(PIPELINE, 'Group, join, push.');

  const hits = strings(LESSON).filter((s) => s.includes(REFRAME));
  strictEqual(hits.length, 8, `expected 8 verbatim appearances, found ${hits.length}`);

  const sections = LESSON!.sections.filter((s) => strings(s).some((x) => x.includes(REFRAME)));
  ok(sections.length >= 3, `the reframe reaches ${sections.length} sections, needs 3`);
  const ids = sections.map((s) => (s as { id: string }).id);
  // At the four moments that matter: where the failure is named, where the idea
  // is stated, where it is trained, and where it is summarised.
  for (const id of ['s01-scene', 's03-anchors', 's15-inhibition', 's23-roundup']) {
    ok(ids.includes(id), `the reframe is stated on ${id}`);
  }

  // And it must NOT simply be one of the five rules restated. If any of the
  // shipped reframes is a substring of this one, this lesson has adopted an
  // earlier lesson's idea instead of finding the one above them.
  const SHIPPED = [
    'The mark is part of the letter, not decoration on it.',
    "Silent unless there's a reason.",
    'Two vowels collide, the little word gives way.',
    'Even syllables, then one push at the end.',
    'The letter was never gone. It was waiting for a vowel.',
  ];
  for (const s of SHIPPED) ok(!REFRAME.includes(s), `the reframe is ${s} with extra words on it`);
});

test('the pipeline is stated as an ordered sequence, not a list of rules', { skip }, () => {
  // The lesson's second new idea. It has to appear as three ORDERED steps in
  // the anchors deck and again in the roundup, because an unordered list of the
  // same three words is exactly the thing the lesson exists to replace.
  const anchors = sectionById('s03-anchors');
  ok(anchors && anchors.type === 'cardDeck');
  const heads = anchors.cards.map((c) => c.head ?? '');
  ok(heads.includes(PIPELINE), 'the anchors deck states the pipeline');
  const stepCards = heads.filter((h) => /^Step (one|two|three):/.test(h));
  strictEqual(stepCards.length, 3, 'one card per step');
  deepStrictEqual(stepCards, ['Step one: group', 'Step two: join', 'Step three: push']);

  const roundup = sectionById('s23-roundup');
  ok(roundup && roundup.type === 'roundup');
  ok(roundup.points.some((p) => p.includes(PIPELINE)), 'the roundup restates the pipeline');
});

/* ─── The quiz ────────────────────────────────────────────────────────────── */

test('the quiz is 8 rounds of 6, every question answerable and explained', { skip }, () => {
  const q = quizSection();
  strictEqual(q.rounds?.length, 8);
  for (const r of q.rounds!) strictEqual(r.questions.length, 6, `round ${r.id} has 6 questions`);

  const all = quizQuestions(q);
  strictEqual(all.length, 48);
  for (const item of all) {
    ok(item.why, `"${item.q}" has a why`);
    ok(item.ref, `"${item.q}" has a ref`);
    // A `why` that only restates the answer teaches nothing at the one moment
    // the learner is most receptive.
    ok(item.why!.length > 30, `"${item.q}" has a why too short to teach a rule`);
    if (Array.isArray(item.opts)) {
      strictEqual(new Set(item.opts).size, item.opts.length, `options distinct for "${item.q}"`);
      if (typeof item.correct === 'number') {
        ok(item.correct >= 0 && item.correct < item.opts.length, `correct in range for "${item.q}"`);
      }
    }
  }
});

test('the quiz is genuinely MULTI-RULE, because that is what a masterclass is', { skip }, () => {
  // The assertion that separates this exam from eight more single-rule rounds.
  // "Which word blocks the liaison?" is a sons.10 question and would pass every
  // other check in this file. What makes a question belong here is that
  // answering it needs two rules at once.
  //
  // Checked against the authored `rules` array rather than guessed from the
  // question text, because a text heuristic would drift the moment someone
  // reworded a stem.
  const total = AUTHORED_QUESTIONS.length;
  strictEqual(total, 48);
  const multi = multiRuleCount();
  ok(multi >= 36, `only ${multi}/${total} questions need two or more rules`);
  // And every one of the five rules has to be reachable through the quiz, or a
  // learner can pass without ever being asked about one of them.
  for (const rule of RULES) {
    const n = AUTHORED_QUESTIONS.filter((q) => q.rules.includes(rule)).length;
    ok(n >= 5, `only ${n} questions exercise "${rule}"`);
  }
  // The showcase: at least two questions need all five at once.
  const allFive = AUTHORED_QUESTIONS.filter((q) => q.rules.length === 5);
  ok(allFive.length >= 2, `only ${allFive.length} questions need all five rules`);
});

test('the quiz is weighted towards PRODUCTION, because speed is the failure mode', { skip }, () => {
  // Recognition is nearly worthless in this lesson: the learner already knows
  // every rule and has already been tested on recognising each one. What has
  // never been tested is applying five of them to an unseen sentence at
  // conversation pace, and only a production format can ask that.
  const mix = formatMix();
  const total = AUTHORED_QUESTIONS.length;
  const production = (mix.speak ?? 0) + (mix.typeIn ?? 0) + (mix.errorSpot ?? 0);
  ok(production >= total * 0.6, `only ${production}/${total} questions ask the learner to PRODUCE`);
  ok((mix.speak ?? 0) >= 10, `${mix.speak ?? 0} speak questions, not enough for a speed lesson`);
  // mcq survives only for genuine judgement calls, never as bulk recall.
  ok((mix.mcq ?? 0) <= total * 0.25, `${mix.mcq} mcq questions is too much recognition`);
  // listenChoose carries the contrasts that are invisible in text, and this
  // lesson has twelve of those.
  ok((mix.listenChoose ?? 0) >= 8, `${mix.listenChoose ?? 0} listenChoose questions`);
  for (const s of AUTHORED_QUESTIONS.filter((x) => x.format === 'speak')) {
    ok(s.target, `a speak question with no target: "${s.q}"`);
    ok(s.ipa, `a speak question with no ipa to read: "${s.q}"`);
  }
});

test('every quiz question obeys the two silent card contracts', { skip }, () => {
  // Both of these are verified against the components, not assumed, and both
  // fail silently rather than erroring:
  //
  //   1. ListenChooseCard plays `question.audio.clip ?? opts[correct]`. With
  //      CLIP_MANIFEST empty a clip NAME is handed to TTS and spoken literally,
  //      so a question naming clip 'j-aime' has the device say "j-aime".
  //      sons.07 ships four of those.
  //   2. QuestionCard hands ErrorSpotCard no onPlay, so typeIn and errorSpot
  //      render no audio control at all. A "type what you hear" question in
  //      that format cannot be answered. sons.07 ships two.
  for (const q of AUTHORED_QUESTIONS) {
    if (q.format === 'listenChoose') {
      ok(!q.audio?.clip, `listenChoose names a clip, which TTS reads aloud: "${q.q}"`);
      ok(q.opts?.length, `listenChoose with no options: "${q.q}"`);
      // The options are what TTS falls back to speaking, so they must be the
      // French candidates rather than English labels.
      for (const o of q.opts!) ok(!/^(one|two|three|four|yes|no)$/i.test(o), `listenChoose option "${o}" is English, so the fallback speaks English`);
    }
    if (q.format === 'typeIn' || q.format === 'errorSpot') {
      ok(!q.audio, `a ${q.format} question carries audio and the card renders none: "${q.q}"`);
      ok(q.accept?.length, `a ${q.format} question with no accepted answers: "${q.q}"`);
      ok(q.answer, `a ${q.format} question with no canonical answer to show: "${q.q}"`);
    }
    if (q.format === 'tapSilent') {
      ok(q.word, `tapSilent with no word: "${q.q}"`);
      ok(typeof q.correct === 'string', `tapSilent needs its silent letters as a string: "${q.q}"`);
    }
  }
});

test('every quiz ref names a real section', { skip }, () => {
  const ids = new Set(LESSON!.sections.map((s) => (s as { id?: string }).id).filter(Boolean));
  for (const item of quizQuestions(quizSection())) {
    ok(ids.has(item.ref!), `ref "${item.ref}" for "${item.q}" names a section`);
  }
});

test('correct answers do not cluster in one position', { skip }, () => {
  const slots = quizQuestions(quizSection())
    .filter((x) => typeof x.correct === 'number' && Array.isArray(x.opts))
    .map((x) => x.correct as number);
  const tally = new Map<number, number>();
  for (const s of slots) tally.set(s, (tally.get(s) ?? 0) + 1);
  for (const [slot, n] of tally) {
    const pct = (n / slots.length) * 100;
    ok(pct <= 40, `${pct.toFixed(0)}% of answers sit in position ${slot}`);
  }
});

test('a failed round fires a drill that exists', { skip }, () => {
  const q = quizSection();
  const cfg = buildQuizConfig(q.rounds!, {
    errorTriggers: LESSON!.errorTriggers,
    drills: LESSON!.drills,
    roundFailThreshold: q.roundFailThreshold,
    passMark: q.passMark,
  });
  const drillIds = new Set((LESSON!.drills ?? []).map((d) => d.id));
  for (let i = 0; i < cfg.rounds.length; i++) {
    const drill = drillForRound(cfg, i);
    ok(drill, `round ${cfg.rounds[i].id} resolves a drill`);
    ok(drillIds.has(drill!), `round ${cfg.rounds[i].id} names a drill that exists`);
  }
});

test('every authored quiz question is reachable by the pager', { skip }, () => {
  // The a1.01.l1 failure, pinned so it cannot happen here. That lesson ships
  // two quiz SECTIONS and 15 questions; the pager appends exactly one quiz page
  // and resolves it with find(), so 12 of them have never been asked by anyone
  // and no test catches it.
  //
  // This lesson takes Route A: one section, eight rounds. That is what makes
  // every question reachable, and this assertion is what keeps it that way.
  const quizzes = LESSON!.sections.filter((s) => s.type === 'quiz');
  strictEqual(quizzes.length, 1, `${quizzes.length} quiz sections — the pager renders only the first`);
  const reachable = quizQuestions(quizSection()).length;
  strictEqual(reachable, AUTHORED_QUESTIONS.length, 'every authored question is in the rendered quiz');
});

test('the error-trigger system is fully wired', { skip }, () => {
  const drillIds = new Set(LESSON!.drills!.map((d) => d.id));
  for (const t of LESSON!.errorTriggers!) {
    ok(drillIds.has(t.drill), `trigger ${t.id} names a real drill`);
    if (t.retest) ok(drillIds.has(t.retest), `trigger ${t.id} names a real retest`);
    // A trigger watching a section that does not exist never fires.
    const ids = new Set(LESSON!.sections.map((s) => (s as { id?: string }).id));
    for (const on of t.detectOn) {
      ok(ids.has(on.split('/')[0]), `trigger ${t.id} watches "${on}", which is not a section`);
    }
  }
  const triggerIds = new Set(LESSON!.errorTriggers!.map((t) => t.id));
  for (const r of quizSection().rounds!) {
    ok(r.targets?.length, `round ${r.id} declares a target`);
    for (const target of r.targets!) ok(triggerIds.has(target), `round ${r.id} target "${target}" exists`);
  }
  // Every drill's items must resolve, or a remediation drill fires and shows
  // nothing at exactly the moment the learner needed help.
  for (const d of LESSON!.drills ?? []) {
    for (const id of d.items ?? []) ok(ITEM_IDS.has(id), `drill ${d.id} names unknown item ${id}`);
    for (const [a, b] of d.pairs ?? []) {
      ok(ITEM_IDS.has(a), `drill ${d.id} pair names unknown item ${a}`);
      ok(ITEM_IDS.has(b), `drill ${d.id} pair names unknown item ${b}`);
    }
  }
});

/* ─── Glossary and sheets ─────────────────────────────────────────────────── */

test('the glossary explains the system rather than re-explaining the five rules', { skip }, () => {
  const terms = LESSON!.terms ?? {};
  ok(Object.keys(terms).length >= 6, 'the lesson has a real glossary');
  for (const [key, def] of Object.entries(terms)) {
    ok(def.term && def.title && def.body, `${key} is complete`);
    for (const ex of def.examples ?? []) {
      ok(ITEM_IDS.has(ex.itemId), `${key} example ${ex.itemId} resolves against the corpus`);
    }
  }
  // The two the lesson is actually about, and the two that did not exist before
  // it: the phrase group, and the order the rules run in.
  for (const key of ['phraseGroup', 'pipeline'] as const) {
    const def = terms[key];
    ok(def, `${key} is defined`);
    ok(def!.body.length > 400, `${key} is a real explanation, not a gloss`);
    const surfaced = LESSON!.sections.filter((s) => (s as { terms?: string[] }).terms?.includes(key));
    ok(surfaced.length >= 3, `${key} is reachable from only ${surfaced.length} missions`);
  }
  const known = new Set(Object.keys(terms));
  for (const s of LESSON!.sections) {
    for (const key of (s as { terms?: string[] }).terms ?? []) {
      ok(known.has(key), `section ${(s as { id?: string }).id} names defined term "${key}"`);
    }
  }
});

test('the reference sheets exist, are deep, and are reachable', { skip }, () => {
  strictEqual(LESSON!.sheets?.length, 2);
  const sheetIds = new Set(LESSON!.sheets!.map((s) => s.id));
  for (const s of LESSON!.sections) {
    const ref = (s as { sheetId?: string }).sheetId;
    if (ref) ok(sheetIds.has(ref), `sheetId "${ref}" resolves`);
  }
  for (const sh of LESSON!.sheets!) {
    ok(sh.sections?.length, `sheet ${sh.id} has content, not just a title`);
    for (const sec of sh.sections!) {
      strictEqual((sec as { layer?: string }).layer, 'deep', `${sh.id} sections are layer deep`);
    }
  }
  const referenced = new Set(
    LESSON!.sections.map((s) => (s as { sheetId?: string }).sheetId).filter(Boolean)
  );
  for (const sh of LESSON!.sheets!) {
    ok(referenced.has(sh.id), `sheet ${sh.id} is not reachable from any mission`);
  }
});

/* ─── Audio ───────────────────────────────────────────────────────────────── */

test('the studio brief is complete, and names the pairs that must match', { skip }, () => {
  const recorded = LESSON!.audio?.recorded ?? [];
  strictEqual(recorded.length, 10);
  for (const r of recorded) ok(r.desc && r.desc.length > 20, `${r.id} carries a real brief`);

  const declared = new Set(recorded.map((r) => r.id));
  for (const id of referencedRecordingIds(LESSON)) {
    ok(declared.has(id), `recordingId "${id}" is declared in audio.recorded`);
  }

  // The masterclass-specific instruction, and the reason it matters more here
  // than in any earlier lesson: this lesson's contrasts are between two
  // versions of the SAME sentence, differing by a single consonant or a gap of
  // roughly 120ms. Recorded as two takes at different tempos they are not
  // comparable and the mission teaches nothing. The brief has to SAY that, or
  // the studio has no way to know.
  for (const id of ['rec-pairs', 'rec-h-blocks', 'rec-nasal-n', 'rec-subject-verb', 'rec-breaks', 'rec-scene-break']) {
    const r = recorded.find((x) => x.id === id);
    ok(r, `${id} is briefed`);
    ok(/same voice|one voice/i.test(r!.desc), `${id} brief pins one voice`);
    ok(/same speed|one take|one speed/i.test(r!.desc), `${id} brief pins one speed or one take`);
  }
  // The nasal brief has to pin the thing a speaker gets wrong by accident when
  // they are concentrating on the linking N.
  const nasal = recorded.find((r) => r.id === 'rec-nasal-n');
  ok(/nasal/i.test(nasal!.desc), 'the nasal brief says the vowel must stay nasal');
});

test('the lesson runs on TTS today and improves when the studio delivers', { skip }, () => {
  // Every declared recording is still pending, so every card falls back to
  // synthesis. That is the correct shipping state, and it must be deliberate:
  // nothing in the lesson is BLOCKED on audio that does not exist.
  const owed = pendingRecordings(LESSON!.audio);
  strictEqual(owed.length, 10, 'all ten sets are still owed');
  for (const r of owed) ok(r.desc.length > 20, `${r.id} carries a brief the studio can act on`);
});

test('the two speeds are offered', { skip }, () => {
  deepStrictEqual(LESSON!.audio?.speeds, [1.0, 0.65]);
});

test('the contrast screens play audio before the text resolves', { skip }, () => {
  // Reversing that order lets the eye answer the question the ear was asked.
  // For this lesson that is fatal rather than untidy: every contrast it teaches
  // is INVISIBLE in text, so a learner who reads first has already been told
  // the answer by the spelling.
  const scene = LESSON!.sections.find((s) => s.type === 'scene');
  ok(scene && scene.type === 'scene');
  const brk = scene.beats.find((b) => b.kind === 'break');
  ok(brk && brk.kind === 'break');
  ok(brk.audio?.audioFirst, 'the break plays its model before the reading resolves');

  for (const id of ['s04-breaks', 's05-across', 's06-push', 's09-silence', 's11-h', 's12-nasal']) {
    const s = sectionById(id) as { audio?: { audioFirst?: boolean } } | undefined;
    ok(s?.audio?.audioFirst, `${id} must play its audio before the text resolves`);
  }
});

/* ─── Narration ───────────────────────────────────────────────────────────── */

test('the narration walks the stages in order and drills real items', { skip }, () => {
  const n = LESSON!.narration;
  ok(n, 'the lesson carries a narration script');
  strictEqual(n!.camilleVoiceId, 'camille-fr-ca-01');
  strictEqual(n!.ratioEnFr, 0.7, 'the sons/a1 target');

  const ORDER = ['warm', 'focus', 'input', 'practice', 'produce', 'check', 'cheat'];
  const seen = n!.stages.map((s) => s.stage);
  const positions = seen.map((s) => ORDER.indexOf(s));
  for (let i = 1; i < positions.length; i++) {
    ok(positions[i] > positions[i - 1], `narration stage ${seen[i]} must not follow ${seen[i - 1]}`);
  }

  for (const st of n!.stages) {
    for (const seg of st.segments) {
      const itemId = (seg as { itemId?: string }).itemId;
      if (itemId) ok(ITEM_IDS.has(itemId), `narration ${st.stage} drills unknown item ${itemId}`);
    }
  }
  // The narration has to state the lesson's idea, not summarise the five rules.
  const cheat = n!.stages.find((s) => s.stage === 'cheat');
  ok(
    (cheat?.segments ?? []).some((s) => (s as { text?: string }).text?.includes(REFRAME)),
    'the closing recap states the reframe',
  );
});

/* ─── House style ─────────────────────────────────────────────────────────── */

test('no em dash and no banned word anywhere in the authored content', { skip }, () => {
  const authored = JSON.stringify({ LESSON, CORPUS });
  ok(!authored.includes('—'), 'em dash found in authored copy');
  ok(!/honest/i.test(authored), 'the word "honest" is banned from authored content');
});

test('every UI label is English, and French appears only as content', { skip }, () => {
  // The French-literal guard only reads COMPONENT source, so a French label in
  // authored content passes CI and lands on the card beside an English one. The
  // section TITLE is chrome and must be English; `frSub` is the one field that
  // is deliberately French.
  const FRENCH = /\b(le|la|les|un|une|des|du|de|et|ou|vous|nous|est|sont|pour|avec|dans|qui|que)\b/i;
  for (const s of LESSON!.sections) {
    const title = (s as { title?: string }).title ?? '';
    ok(!FRENCH.test(title), `section ${(s as { id?: string }).id} has a French title: "${title}"`);
  }
  for (const a of LESSON!.acts ?? []) {
    ok(!FRENCH.test(a.title), `act ${a.id} has a French title: "${a.title}"`);
    ok(!FRENCH.test(a.milestone), `act ${a.id} has a French milestone: "${a.milestone}"`);
  }
  // And the group labels inside a drill, which sons.06 filled with "Contrôle"
  // three times on one screen. They are chrome too.
  for (const s of LESSON!.sections) {
    for (const g of (s as { groups?: { label: string }[] }).groups ?? []) {
      ok(!FRENCH.test(g.label), `${(s as { id?: string }).id} has a French group label: "${g.label}"`);
    }
  }
});

test('no mission carries more than three term chips', { skip }, () => {
  // House style rather than an enforced cap: the renderer shows 3 and collapses
  // the rest behind "+N", so more is not broken. sons.06 exceeded it on seven
  // sections and that is recorded as debt. This lesson holds the line.
  for (const s of LESSON!.sections) {
    const terms = (s as { terms?: string[] }).terms ?? [];
    ok(terms.length <= 3, `${(s as { id?: string }).id} declares ${terms.length} term chips (max 3)`);
  }
});

test('no two missions of the same type do the same job', { skip }, () => {
  // sons.06 shipped missions 20 and 23 as two `practice` sections with
  // near-identical framing. Two sections of one type are fine when they do
  // different jobs, and this lesson has two `practice` and two `trapDrill`
  // sections that do: speak against listen, and the group edge against the H.
  const practice = LESSON!.sections.filter((s) => s.type === 'practice') as { skill: string }[];
  strictEqual(new Set(practice.map((p) => p.skill)).size, practice.length, 'two practice sections share a skill');
  const traps = LESSON!.sections.filter((s) => s.type === 'trapDrill') as { id?: string; rule?: { title: string } }[];
  strictEqual(new Set(traps.map((t) => t.rule?.title)).size, traps.length, 'two trap drills teach the same rule');
  for (const t of traps) ok(t.rule?.body, `trap drill ${t.id} carries its own rule rather than a separate teach section`);
});

/* ─── Seed parity ─────────────────────────────────────────────────────────── */

test('once published, the seed copy matches what was authored', () => {
  // Runs unconditionally. Before the merge is applied the lesson is simply
  // absent from the seed and this no-ops; after it, the two must not drift. A
  // seed copy that has fallen behind the authored source is the failure mode
  // that publishing over it makes permanent.
  //
  // Every figure here is DERIVED from the authored lesson rather than written
  // as a literal, so this check never has to be edited when the content
  // legitimately changes. A parity check that needs editing whenever the
  // content changes is a check that will eventually be edited to match a bug.
  const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
    lessons: Lesson[];
    items: { id: string; theme: string; fr: string }[];
    units: { id: string; lessonIds?: string[] }[];
  };
  const shipped = seed.lessons.find((l) => l.id === 'sons.09.l1');
  if (!shipped) return;
  if (!LESSON) return; // admin repo absent: nothing to compare against

  strictEqual(shipped.sections.length, LESSON.sections.length, 'section count drifted');
  strictEqual(shipped.itemIds.length, LESSON.itemIds.length, 'itemIds count drifted');
  deepStrictEqual([...shipped.itemIds].sort(), [...LESSON.itemIds].sort(), 'itemIds drifted');
  strictEqual(shipped.reframe, LESSON.reframe, 'the reframe drifted');

  const shippedQ = shipped.sections.find((s) => s.type === 'quiz');
  const authoredQ = LESSON.sections.find((s) => s.type === 'quiz');
  ok(shippedQ && shippedQ.type === 'quiz');
  ok(authoredQ && authoredQ.type === 'quiz');
  strictEqual(quizQuestions(shippedQ).length, quizQuestions(authoredQ).length, 'quiz length drifted');

  // The theme in the seed must be exactly what the corpus defines: no extra
  // rows left behind by an older publish (the .057 shape), and none missing.
  const shippedTheme = seed.items.filter((i) => i.theme === 'masterclass').map((i) => i.id).sort();
  deepStrictEqual(shippedTheme, [...AUTHORED_IDS].sort(), 'the shipped masterclass theme does not match the corpus');

  const authoredIds = new Set(LESSON.itemIds);
  const strandedTranche = (shipped.deckTranche ?? []).flat().filter((id) => !authoredIds.has(id));
  strictEqual(strandedTranche.length, 0, `tranches still release withdrawn ids: ${strandedTranche.join(', ')}`);

  // And the unit has to name the lesson, or it ships and nothing links to it.
  const unit = seed.units.find((u) => u.id === 'sons.09');
  ok(unit, 'sons.09 is in the seed');
  ok(unit!.lessonIds?.includes('sons.09.l1'), 'unit sons.09 names its lesson');
});
