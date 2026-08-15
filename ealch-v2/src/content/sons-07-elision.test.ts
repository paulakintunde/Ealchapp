// Guards sons.07.l1 "L'élision" — the second Lesson Architecture v2 lesson.
//
// The lesson body lives in the admin repo (ealch-admin/scripts/data/), because
// that is where content is authored before it is published into seed.json.
// This test runs against it directly so the lesson is checked at AUTHORING
// time, not only once it has shipped. When the batch has been applied and the
// lesson exists in seed.json, the seed copy is checked too.
//
// What belongs HERE rather than in lesson-contract.test.ts: the assertions that
// are true of THIS lesson and could not sensibly be asked of any other. The
// generic contract already checks that ids resolve, that acts claim real
// sections and that every quiz question explains itself. What it cannot check
// is that this lesson teaches ELISION correctly: that its h aspiré set is
// complete and closed, that its trigger contrast really contrasts, and that a
// lesson about producing contractions is actually weighted towards production.
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { formatIssues, quizQuestions, validateItem, validateLesson, type Lesson } from './schema.ts';
import { formatDensity, validateDensity } from './density.logic.ts';
import { hasPlainNasalFor, isDelimitedIpa } from './density.logic.ts';
import { pendingRecordings, referencedRecordingIds } from './lessonAudio.logic.ts';
import { checkpointFor, releasedThrough, stoppingPoints, tranche } from './acts.logic.ts';
import { buildQuizConfig, drillForRound } from './quizRounds.logic.ts';

const here = dirname(fileURLToPath(import.meta.url));

// The admin repo is a sibling checkout. Skip cleanly when it is absent (the
// app can be built on its own) rather than failing the suite.
let LESSON: Lesson | null = null;
let REFRAME = '';
let ITEM_IDS = new Set<string>();
let CORPUS: {
  id: string; fr: string; en: string; ipa?: string; respell?: string;
  full: string; elides: boolean; trigger: string | null; family: string; tags?: string[];
}[] = [];
let H_ASPIRE: string[] = [];
let REUSED: { id: string; fr: string; why: string }[] = [];

try {
  const corpus = await import('../../../ealch-admin/scripts/data/elision-corpus.ts');
  const lesson = await import('../../../ealch-admin/scripts/data/elision-lesson.ts');
  CORPUS = corpus.ELISION;
  ITEM_IDS = new Set(corpus.ELISION_IDS);
  H_ASPIRE = corpus.H_ASPIRE_IDS;
  REUSED = corpus.REUSED;
  LESSON = lesson.ELISION_LESSON;
  REFRAME = lesson.REFRAME;
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

/* ─── The corpus ──────────────────────────────────────────────────────────── */

test('the lexeme corpus is valid and complete', { skip }, () => {
  strictEqual(CORPUS.length, 71, 'all 71 entries present');
  const asItems = CORPUS.map((w) => {
    const { full: _f, elides: _e, trigger: _t, family: _fam, ...rest } = w as Record<string, unknown>;
    return rest;
  });
  const issues = asItems.flatMap((i) => validateItem(i, String((i as { id: string }).id)));
  strictEqual(issues.length, 0, formatIssues(issues));
});

test('every entry carries the uncontracted source it came from', { skip }, () => {
  // `full` is the lesson's central teaching device: the learner has to see what
  // was there before the vowel dropped. An entry without it renders a card that
  // shows a contraction and cannot say what it contracted FROM.
  for (const w of CORPUS) {
    ok(w.full && w.full.trim().length > 0, `${w.id} "${w.fr}" has no uncontracted source`);
    // An eliding entry must actually differ from its source, or the pairing
    // teaches nothing. A blocked one is deliberately identical.
    if (w.elides) {
      ok(w.full !== w.fr, `${w.id} "${w.fr}" claims to elide but its source is identical`);
    } else {
      strictEqual(w.full, w.fr, `${w.id} "${w.fr}" does not elide, so its source must be the same string`);
    }
  }
});

test('every contraction is respelled as one unbroken unit', { skip }, () => {
  // The lesson's whole phonetic claim is that a contraction is ONE word with
  // one stress. A respelling that puts a gap inside it teaches the exact
  // hesitation the lesson exists to remove: [zhuh-AY] rather than [ZHAY].
  //
  // Checked on single-word entries only. A phrase legitimately has spaces
  // BETWEEN its words; what must never appear is a space inside the contracted
  // unit itself, which for a one-word entry means no space at all.
  for (const w of CORPUS) {
    if (w.kind !== 'word' || !w.elides || !w.respell) continue;
    if (w.fr.includes(' ')) continue; // a multi-word phrase stored as kind 'word'
    ok(
      !w.respell.includes(' '),
      `${w.id} "${w.fr}" is respelled "${w.respell}" with a gap inside the contraction`
    );
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

test('the closed trigger set is covered', { skip }, () => {
  // Elision applies to a short, closed list. The lesson claims to teach the
  // whole of it, so every word on the list has to appear in the corpus: a
  // learner told "these fifteen and no others" must actually meet fifteen.
  const triggers = new Set(CORPUS.map((w) => w.trigger).filter(Boolean));
  for (const t of ['je', 'me', 'te', 'se', 'le', 'la', 'de', 'ne', 'que', 'ce', 'si']) {
    ok(triggers.has(t), `the corpus teaches no example of "${t}"`);
  }
  // The que compounds, which inherit que's behaviour.
  for (const t of ['jusque', 'lorsque', 'puisque']) {
    ok(triggers.has(t), `the corpus teaches no example of the que compound "${t}"`);
  }
});

test('both sides of the rule are taught, not just the eliding half', { skip }, () => {
  // A corpus of nothing but contractions teaches "always contract", which is
  // wrong and is the error the trigger drill exists to correct. The
  // non-eliding entries are what make the rule a decision rather than a habit.
  const blocked = CORPUS.filter((w) => !w.elides);
  ok(blocked.length >= 10, `only ${blocked.length} non-eliding entries — the rule needs a real negative side`);
  // And at least some of those must be blocked by a CONSONANT rather than by
  // h aspiré, or the lesson only ever shows the exotic reason for not eliding.
  const byConsonant = blocked.filter((w) => w.tags?.includes('consonant-initial'));
  ok(byConsonant.length >= 4, `${byConsonant.length} entries blocked by a plain consonant`);
});

/* ─── The h aspiré set: the lesson's one closed list ──────────────────────── */

test('the h aspiré set is complete, closed, and pinned', { skip }, () => {
  // The lesson teaches these as a list to MEMORISE. That only works if the set
  // is fixed, so it is pinned here by exact content: adding a word to the
  // corpus without deciding to teach it, or removing one the flashcards still
  // drill, both fail here rather than silently changing what "the whole list"
  // means to a learner.
  strictEqual(H_ASPIRE.length, 8, 'eight h aspiré words');
  const words = H_ASPIRE.map((id) => CORPUS.find((w) => w.id === id)!.fr).sort();
  deepStrictEqual(words, [
    'la Hollande',
    'la hauteur',
    'la honte',
    'le haricot',
    'le hasard',
    'le hibou',
    'le hockey',
    'le héros',
  ]);
  // Every one of them keeps its article whole. An h aspiré entry that carries
  // an apostrophe is the error the whole section exists to prevent.
  for (const id of H_ASPIRE) {
    const w = CORPUS.find((x) => x.id === id)!;
    strictEqual(w.elides, false, `${w.fr} is h aspiré and must not elide`);
    ok(!w.fr.includes("'"), `${w.fr} is h aspiré and must not carry an apostrophe`);
  }
});

test('the flashcards deck drills exactly the h aspiré set', { skip }, () => {
  // The deck and the corpus must agree, or the learner is told the list is
  // complete while being drilled on a subset of it.
  const deck = sectionById('s07-aspire');
  ok(deck && deck.type === 'flashcards');
  strictEqual(deck.cards.length, H_ASPIRE.length, 'one card per h aspiré word');
  const fronts = new Set(deck.cards.map((c) => c.front));
  for (const id of H_ASPIRE) {
    const w = CORPUS.find((x) => x.id === id)!;
    ok(fronts.has(w.fr), `${w.fr} is in the h aspiré set but not in the deck`);
  }
});

test('the H trap contrasts muet against aspiré on the same screen', { skip }, () => {
  // The teaching only works as a CONTRAST: a drill showing six aspiré words in
  // a row teaches "H blocks", which is false. Both behaviours must be present.
  const trap = sectionById('s06-trap');
  ok(trap && trap.type === 'trapDrill');
  const labels = trap.cards.map((c) => c.promptLabel);
  ok(labels.includes('Elides'), 'the trap shows an eliding H');
  ok(labels.includes('Blocks'), 'the trap shows a blocking H');
  const elides = labels.filter((l) => l === 'Elides').length;
  const blocks = labels.filter((l) => l === 'Blocks').length;
  ok(elides >= 2 && blocks >= 2, `${elides} eliding and ${blocks} blocking cards, both sides need real weight`);
  // The rule folds INTO the drill rather than taking its own screen, which is
  // the shape sons.06 arrived at after its -er rule sat alone on a near-empty
  // card. A trap drill without its rule is a quiz.
  ok(trap.rule?.body, 'the trap carries its own rule rather than a separate teach section');
  // And it is gated: a reflex the learner can swipe past is not a reflex.
  const gated = trap.steps?.find((s) => s.kind === 'drill')?.gate;
  ok(gated, 'the trap drill step is gated');
});

/* ─── Structure ───────────────────────────────────────────────────────────── */

test('the lesson passes the app schema and every density rule', { skip }, () => {
  const issues = validateLesson(LESSON!);
  strictEqual(issues.length, 0, formatIssues(issues));
  strictEqual(LESSON!.id, 'sons.07.l1');
  strictEqual(LESSON!.unitId, 'sons.07');
  strictEqual(LESSON!.level, 'sons');
  strictEqual(LESSON!.tag, 'SONS · LEÇON 07');
  const density = validateDensity(LESSON!, ITEM_IDS);
  strictEqual(density.length, 0, formatDensity(density));
});

test('the mission spine is present and correctly ordered', { skip }, () => {
  // The spine is a required BACKBONE, not a fixed length: this lesson runs 19
  // missions where sons.06 runs 27, because the closed word set needs less
  // mapping. What must hold is that every backbone mission is present and the
  // teaching ORDER is intact — the trap is taught after the rule that creates
  // it, production comes after input, and everything is proved last.
  const ids = LESSON!.sections.map((s) => (s as { id?: string }).id).filter(Boolean) as string[];

  const backbone = [
    's01-scene', 's02-goals', 's03-anchors', 's04-set', 's05-drill-trigger',
    's06-trap', 's07-aspire', 's08-examples', 's09-dictation', 's10-listening',
    's12-inhibition', 's13-speak', 's14-scenario', 's15-errors', 's16-reading',
    's17-review', 's18-progress', 's21-quiz', 's22-roundup',
  ];
  for (const id of backbone) ok(ids.includes(id), `backbone mission ${id} is present`);

  const positions = backbone.map((id) => ids.indexOf(id));
  for (let i = 1; i < positions.length; i++) {
    ok(positions[i] > positions[i - 1], `${backbone[i]} comes after ${backbone[i - 1]}`);
  }

  // The trap must come after the rule it breaks, or it is a trap with no rule
  // to spring on.
  ok(ids.indexOf('s06-trap') > ids.indexOf('s05-drill-trigger'), 'the H trap follows the trigger rule');
  // The quiz is second to last and the roundup closes.
  strictEqual(ids[ids.length - 1], 's22-roundup');
  strictEqual(ids[ids.length - 2], 's21-quiz');
});

test('every act claims its sections, and no section is orphaned', { skip }, () => {
  const claimed = LESSON!.acts!.flatMap((a) => a.sections);
  const ids = LESSON!.sections.map((s) => (s as { id?: string }).id).filter(Boolean) as string[];
  for (const id of ids) ok(claimed.includes(id), `section ${id} belongs to an act`);
  strictEqual(new Set(claimed).size, claimed.length, 'no section is claimed twice');
  strictEqual(LESSON!.acts!.length, 6);
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
  ok(stoppingPoints(LESSON!).filter((s) => s.kind === 'checkpoint').length === 6);
});

test('all 71 itemIds resolve, and the tranches release only taught words', { skip }, () => {
  strictEqual(LESSON!.itemIds.length, 71);
  for (const id of LESSON!.itemIds) ok(ITEM_IDS.has(id), `${id} resolves`);

  strictEqual(LESSON!.deckTranche?.length, LESSON!.acts?.length);
  const released = LESSON!.deckTranche!.flat();
  strictEqual(new Set(released).size, released.length, 'no word is released twice');
  strictEqual(released.length, 71, 'every word reaches the SRS exactly once');
  for (const id of released) ok(LESSON!.itemIds.includes(id), `${id} is taught before it is released`);
});

test('no two entries teach the same word', { skip }, () => {
  // The gap this closes. `l'homme` was authored twice: once in the core family
  // and once as an unused contrast-pair entry. Everything passed — schema,
  // density, this file's own spine and quiz checks — because none of them
  // compares entries to EACH OTHER. It was caught only by
  // flashhub-coverage.test.ts, and only once the lesson reached the seed,
  // which is one publish too late.
  //
  // A duplicate matters beyond tidiness: the flashcard hub keys decks on `fr`,
  // so two rows with the same spelling serve the learner the same card twice
  // and take two SRS ratings for one word.
  //
  // Sentences are excluded for the same reason flashhub-coverage excludes
  // them: they are not vocab cards, and two sentences may legitimately share a
  // clause.
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
  // The other half of the same gap. .057 was dead in the strongest sense:
  // defined, shipped, released into the SRS, and present on no screen at all,
  // by id or by spelling.
  //
  // The check has to allow two legitimate kinds of "not referenced by id":
  //
  //   1. Referenced by TEXT. Most sections render a word through the fr()
  //      helper, which inlines the French string and leaves no id behind. 24 of
  //      this lesson's entries reach the screen that way and are not dead.
  //   2. Deliberately deck-only. Nine entries appear on no mission and exist to
  //      be released into spaced repetition, which is what deckTranche is for.
  //      sons.06 does the same. They are vocabulary the lesson banks rather
  //      than teaches, and they must still be REACHABLE: released by a tranche
  //      and carrying a flashcard drill to be reached with.
  //
  // What is not allowed is an entry that is on no screen AND in no tranche, or
  // one that is deck-only with no flashcard drill, which is a card the deck can
  // never serve.
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

test('the SRS releases progressively, never all at the end', { skip }, () => {
  const acts = LESSON!.acts ?? [];
  const perAct = acts.map((_, i) => tranche(LESSON!, i).length);
  strictEqual(perAct.reduce((a, b) => a + b, 0), 71);
  const last = perAct[perAct.length - 1];
  ok(last < 36, `the final act releases ${last} of 71, not the bulk`);
  const midway = releasedThrough(LESSON!, 2).length;
  ok(midway > 0 && midway < 71, `${midway} cards released by act 3`);
});

/* ─── The reframe ─────────────────────────────────────────────────────────── */

test('the reframe appears verbatim, never reworded', { skip }, () => {
  strictEqual(REFRAME, 'Two vowels collide, the little word gives way.');
  const hits = strings(LESSON).filter((s) => s.includes(REFRAME));
  strictEqual(hits.length, 5, `expected 5 verbatim appearances, found ${hits.length}`);
  // Across at least three SECTIONS, which is what the density validator
  // enforces and what makes it a spine rather than a sentence that happened.
  const sections = LESSON!.sections.filter((s) => strings(s).some((x) => x.includes(REFRAME)));
  ok(sections.length >= 3, `the reframe reaches ${sections.length} sections, needs 3`);
  // At the three moments that matter: where it is introduced, and where it is
  // summarised.
  const ids = sections.map((s) => (s as { id: string }).id);
  for (const id of ['s03-anchors', 's17-review', 's22-roundup']) {
    ok(ids.includes(id), `the reframe is stated on ${id}`);
  }
});

/* ─── The quiz ────────────────────────────────────────────────────────────── */

test('the quiz is 5 rounds of 8, every question answerable and explained', { skip }, () => {
  const q = LESSON!.sections.find((s) => s.type === 'quiz');
  ok(q && q.type === 'quiz');
  strictEqual(q.rounds?.length, 5);
  for (const r of q.rounds!) strictEqual(r.questions.length, 8, `round ${r.id} has 8 questions`);

  const all = quizQuestions(q);
  strictEqual(all.length, 40);
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

test('the quiz is weighted towards PRODUCTION, because that is the skill', { skip }, () => {
  // This is the assertion that distinguishes this lesson from sons.06. Elision
  // is mechanical rather than perceptual: recognising a contraction is cheap
  // and producing one at speed is the whole difficulty. A quiz that drifted
  // back to mostly-mcq would be testing the wrong thing while still passing
  // every generic check.
  const q = LESSON!.sections.find((s) => s.type === 'quiz');
  ok(q && q.type === 'quiz');
  const all = quizQuestions(q);
  const production = all.filter((x) => ['speak', 'typeIn', 'errorSpot'].includes(x.format ?? 'mcq'));
  ok(
    production.length >= all.length / 2,
    `only ${production.length}/${all.length} questions ask the learner to PRODUCE a contraction`
  );
  // Speaking specifically, since a contraction said with a gap is the failure
  // this lesson is built to remove and only a speak question can catch it.
  const speak = all.filter((x) => x.format === 'speak');
  ok(speak.length >= 6, `${speak.length} speak questions, not enough for a production lesson`);
  for (const s of speak) ok(s.target, `a speak question with no target: "${s.q}"`);
});

test('every quiz ref names a real section', { skip }, () => {
  const ids = new Set(LESSON!.sections.map((s) => (s as { id?: string }).id).filter(Boolean));
  const q = LESSON!.sections.find((s) => s.type === 'quiz');
  ok(q && q.type === 'quiz');
  for (const item of quizQuestions(q)) {
    ok(ids.has(item.ref!), `ref "${item.ref}" for "${item.q}" names a section`);
  }
});

test('correct answers do not cluster in one position', { skip }, () => {
  const q = LESSON!.sections.find((s) => s.type === 'quiz');
  ok(q && q.type === 'quiz');
  const slots = quizQuestions(q)
    .filter((x) => typeof x.correct === 'number')
    .map((x) => x.correct as number);
  const tally = new Map<number, number>();
  for (const s of slots) tally.set(s, (tally.get(s) ?? 0) + 1);
  for (const [slot, n] of tally) {
    const pct = (n / slots.length) * 100;
    ok(pct <= 40, `${pct.toFixed(0)}% of answers sit in position ${slot}`);
  }
});

test('a failed round fires a drill that exists', { skip }, () => {
  const q = LESSON!.sections.find((s) => s.type === 'quiz');
  ok(q && q.type === 'quiz');
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

test('the error-trigger system is fully wired', { skip }, () => {
  const drillIds = new Set(LESSON!.drills!.map((d) => d.id));
  for (const t of LESSON!.errorTriggers!) {
    ok(drillIds.has(t.drill), `trigger ${t.id} names a real drill`);
    if (t.retest) ok(drillIds.has(t.retest), `trigger ${t.id} names a real retest`);
  }
  const triggerIds = new Set(LESSON!.errorTriggers!.map((t) => t.id));
  const q = LESSON!.sections.find((s) => s.type === 'quiz');
  ok(q && q.type === 'quiz');
  for (const r of q.rounds!) {
    ok(r.targets?.length, `round ${r.id} declares a target`);
    for (const target of r.targets!) ok(triggerIds.has(target), `round ${r.id} target "${target}" exists`);
  }
});

/* ─── Glossary and sheets ─────────────────────────────────────────────────── */

test('every glossary term is defined once and resolves its examples', { skip }, () => {
  const terms = LESSON!.terms ?? {};
  ok(Object.keys(terms).length >= 6, 'the lesson has a real glossary');
  for (const [key, def] of Object.entries(terms)) {
    ok(def.term && def.title && def.body, `${key} is complete`);
    for (const ex of def.examples ?? []) {
      ok(ITEM_IDS.has(ex.itemId), `${key} example ${ex.itemId} resolves against the corpus`);
    }
  }
  const known = new Set(Object.keys(terms));
  for (const s of LESSON!.sections) {
    for (const key of (s as { terms?: string[] }).terms ?? []) {
      ok(known.has(key), `section ${(s as { id?: string }).id} names defined term "${key}"`);
    }
  }
});

test('the two terms the lesson is actually about are explained repeatedly', { skip }, () => {
  // Paul's rule, as applied to CaReFuL in sons.06: a term is explained again
  // and again, from ONE definition, so nine points of use give one wording
  // rather than nine that drift.
  for (const [key, minSections] of [['elision', 5], ['hAspire', 4]] as const) {
    const def = LESSON!.terms?.[key];
    ok(def, `${key} is defined`);
    ok(def!.body.length > 200, `${key} is a real explanation, not a gloss`);
    const surfaced = LESSON!.sections.filter((s) => (s as { terms?: string[] }).terms?.includes(key));
    ok(surfaced.length >= minSections, `${key} is reachable from only ${surfaced.length} missions`);
  }
  // And elision is present where it is introduced and where it is summarised.
  const ids = LESSON!.sections
    .filter((s) => (s as { terms?: string[] }).terms?.includes('elision'))
    .map((s) => (s as { id: string }).id);
  for (const id of ['s03-anchors', 's22-roundup']) {
    ok(ids.includes(id), `elision is explained on ${id}`);
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
  // Both sheets must be reachable from the flow, or they are content nobody
  // can get to.
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
  strictEqual(recorded.length, 7);
  for (const r of recorded) ok(r.desc && r.desc.length > 20, `${r.id} carries a real brief`);

  // Every recordingId referenced by a card must exist in the registry, or the
  // card silently falls back to TTS forever and nobody notices.
  const declared = new Set(recorded.map((r) => r.id));
  for (const id of referencedRecordingIds(LESSON)) {
    ok(declared.has(id), `recordingId "${id}" is declared in audio.recorded`);
  }

  // The elision-specific instruction. The h muet / h aspiré contrast is a gap
  // of about 120ms and is the entire point of two missions; recorded as two
  // separate takes at different speeds it is not comparable and teaches
  // nothing. The brief has to SAY that, or the studio has no way to know.
  const hPairs = recorded.find((r) => r.id === 'rec-h-pairs');
  ok(hPairs, 'the h-pair recording is briefed');
  ok(/same voice/i.test(hPairs!.desc), 'the h-pair brief pins one voice');
  ok(/same speed|one take/i.test(hPairs!.desc), 'the h-pair brief pins one speed or one take');

  const trigger = recorded.find((r) => r.id === 'rec-elide-vs-not');
  ok(trigger, 'the trigger-contrast recording is briefed');
  ok(/one voice|same voice/i.test(trigger!.desc), 'the trigger brief pins one voice');
});

test('the lesson runs on TTS today and improves when the studio delivers', { skip }, () => {
  // Every declared recording is still pending, so every card falls back to
  // synthesis. That is the correct shipping state, and it must be deliberate:
  // nothing in the lesson is BLOCKED on audio that does not exist.
  const owed = pendingRecordings(LESSON!.audio);
  strictEqual(owed.length, 7, 'all seven sets are still owed');
  for (const r of owed) ok(r.desc.length > 20, `${r.id} carries a brief the studio can act on`);
});

test('the two speeds are offered', { skip }, () => {
  deepStrictEqual(LESSON!.audio?.speeds, [1.0, 0.65]);
});

test('the contrast screens play audio before the text resolves', { skip }, () => {
  // Reversing that order lets the eye answer the question the ear was asked.
  // For this lesson that is fatal rather than untidy: the h aspiré contrast is
  // INVISIBLE in text, so a learner who reads first has already been told the
  // answer by the spelling.
  const scene = LESSON!.sections.find((s) => s.type === 'scene');
  ok(scene && scene.type === 'scene');
  const brk = scene.beats.find((b) => b.kind === 'break');
  ok(brk && brk.kind === 'break');
  ok(brk.audio?.audioFirst, 'the break plays its model before the reading resolves');

  for (const id of ['s06-trap', 's10-listening', 's05-drill-trigger']) {
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

  // Every interaction drills an item that exists, or the narration asks the
  // learner to repeat something the app cannot score.
  for (const st of n!.stages) {
    for (const seg of st.segments) {
      const itemId = (seg as { itemId?: string }).itemId;
      if (itemId) ok(ITEM_IDS.has(itemId), `narration ${st.stage} drills unknown item ${itemId}`);
    }
  }
});

/* ─── Reuse ───────────────────────────────────────────────────────────────── */

test('the reused corpus items exist in the shipped seed', { skip }, () => {
  // The lesson's claim is that it teaches from words the learner has already
  // met. That claim is only true while the ids actually resolve, and they live
  // in a corpus this file does not own.
  const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
    items: { id: string; fr: string }[];
  };
  const byId = new Map(seed.items.map((i) => [i.id, i.fr]));
  ok(REUSED.length >= 10, `only ${REUSED.length} reused items`);
  for (const r of REUSED) {
    const fr = byId.get(r.id);
    ok(fr, `reused item ${r.id} (${r.fr}) is not in the seed`);
    strictEqual(fr, r.fr, `reused item ${r.id} is "${fr}" in the seed, not "${r.fr}"`);
    ok(r.why.length > 10, `reused item ${r.id} has no stated reason`);
  }
});

/* ─── House style ─────────────────────────────────────────────────────────── */

test('no em dash and no banned word anywhere in the authored content', { skip }, () => {
  const authored = JSON.stringify({ LESSON, CORPUS });
  ok(!authored.includes('—'), 'em dash found in authored copy');
  ok(!/honest/i.test(authored), 'the word "honest" is banned from authored content');
});

test('every UI label is English, and French appears only as content', { skip }, () => {
  // The French-literal guard only reads COMPONENT source, so a French label in
  // authored content passes CI and lands on the card beside an English one.
  // The section TITLE is chrome and must be English; `frSub` is the one field
  // that is deliberately French.
  //
  // Checked as a word list rather than by language detection: these are the
  // function words that would give away a French title, and none of them is an
  // English word that could appear in a legitimate title.
  const FRENCH = /\b(le|la|les|un|une|des|du|de|et|ou|vous|nous|est|sont|pour|avec|dans|qui|que)\b/i;
  for (const s of LESSON!.sections) {
    const title = (s as { title?: string }).title ?? '';
    ok(!FRENCH.test(title), `section ${(s as { id?: string }).id} has a French title: "${title}"`);
  }
  for (const a of LESSON!.acts ?? []) {
    ok(!FRENCH.test(a.title), `act ${a.id} has a French title: "${a.title}"`);
    ok(!FRENCH.test(a.milestone), `act ${a.id} has a French milestone: "${a.milestone}"`);
  }
});

test('no mission carries more than three term chips', { skip }, () => {
  // House style rather than an enforced cap: the renderer shows 3 and collapses
  // the rest behind "+N", so more is not broken. sons.06 exceeded it on seven
  // sections and that is recorded as debt. This lesson holds the line, and this
  // test is what keeps it held.
  for (const s of LESSON!.sections) {
    const terms = (s as { terms?: string[] }).terms ?? [];
    ok(terms.length <= 3, `${(s as { id?: string }).id} declares ${terms.length} term chips (max 3)`);
  }
});

/* ─── Seed parity ─────────────────────────────────────────────────────────── */

test('once published, the seed copy matches what was authored', () => {
  // Runs unconditionally. Before the batch is applied the lesson is simply
  // absent from the seed and this no-ops; after it, the two must not drift.
  // A seed copy that has fallen behind the authored source is the failure mode
  // that publishing over it makes permanent.
  //
  // Every figure here is DERIVED from the authored lesson rather than written
  // as a literal. The itemIds count was hardcoded at 72, and when .057 was
  // withdrawn as a duplicate this test failed on its own stale number instead
  // of on a real drift. A parity check that needs editing whenever the content
  // changes is a check that will eventually be edited to match a bug.
  const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as { lessons: Lesson[] };
  const shipped = seed.lessons.find((l) => l.id === 'sons.07.l1');
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

  // A withdrawn id must not survive in the published copy. This is the specific
  // shape of the .057 incident: the seed was published from an older corpus and
  // kept a row the authoring source had already dropped.
  const authoredIds = new Set(LESSON.itemIds);
  const stale = shipped.itemIds.filter((id) => !authoredIds.has(id));
  strictEqual(stale.length, 0, `the seed still carries withdrawn ids: ${stale.join(', ')}`);
  const strandedTranche = (shipped.deckTranche ?? []).flat().filter((id) => !authoredIds.has(id));
  strictEqual(strandedTranche.length, 0, `tranches still release withdrawn ids: ${strandedTranche.join(', ')}`);
});

/* ─── Layout regression ───────────────────────────────────────────────────── */

test('nothing sits beside the scene bubble French in a row', () => {
  // Runs unconditionally: this checks SOURCE, not content, so it must fail even
  // when the admin repo is absent.
  //
  // The bug, reported on sons.07 mission 1: the scene bubble showed
  // "Ah, à Lyon. Très" while the audio said "Très bien". Audio is unaffected
  // because the play call takes the string and not the layout, which is exactly
  // why this reads as a content bug and is not one.
  //
  // Mechanism, MEASURED ON A PIXEL 6 in a bench of five markups against the same
  // strings rather than reasoned from the source. The bubble hugs its content
  // and is capped at maxWidth 92%, so it has no resolved width; Yoga measures
  // the Text at its natural single-line width during the hug pass and the
  // measured text does not re-wrap.
  //
  //   icon in the row, flexShrink: 1   CLIPS
  //   icon in the row, flex: 1         CLIPS, and collapses "Pardon ?" to "Pa"
  //   icon in the row, row wraps       CLIPS
  //   icon in the row, no flex at all  CLIPS
  //   ICON OUT OF THE ROW              WHOLE, at every length
  //
  // This test previously required a `flexShrink: 1` wrapper and called it "the
  // working shape". It was not working: it was the third of four markups that
  // clip, and it shipped the defect through a2.05 while passing. The clip is
  // also not deterministic — the identical string rendered whole in one position
  // and clipped in another on the same screen — so no assertion about a
  // particular string can stand in for this one.
  //
  // Seven lessons render a scene, so this is mission 1 of sons.02, .03, .05,
  // .06, .07, .08 and .10, plus every A1 and A2 lesson that opens on one.
  const src = readFileSync(resolve(here, '../components/ScenePlayer.tsx'), 'utf8');

  // 1. Flex on a <TX> directly is still wrong, for the same reason.
  const offenders = (src.match(/<TX[^>]*>/g) ?? [])
    .filter((tag) => /style=\{\{[^}]*flex(?:Shrink)?\s*:/.test(tag))
    .map((tag) => tag.replace(/\s+/g, ' ').slice(0, 90));
  strictEqual(
    offenders.length,
    0,
    `ScenePlayer puts flex on a <TX> directly, which clips the tail of a long line: ${offenders.join(' | ')}`,
  );

  // 2. THE RULE THE DEVICE ACTUALLY ESTABLISHED: the French line has no sibling
  //    in a row. Checked by looking at the source between the start of the
  //    bubble's Press body and the French itself — a row opened in that window
  //    means something was put beside it again.
  //    ANCHORED ON THE RENDER SITE, not on the string. The first `{beat.fr}` in
  //    this file is `accessibilityLabel={beat.fr}`, hundreds of lines above the
  //    markup, and anchoring there made this check pass while the bug was put
  //    back — the same way the version of this test it replaced passed while the
  //    defect shipped through a2.05. Verified by reintroducing the row and
  //    watching it fail.
  const at = src.indexOf('>{beat.fr}<');
  ok(at > 0, 'ScenePlayer no longer renders {beat.fr} as element content, so this test is measuring nothing');
  const window = src.slice(Math.max(0, at - 400), at);
  ok(
    !/flexDirection:\s*'row'/.test(window),
    'a row was reopened around the scene bubble French. Anything beside it in a row clips its tail: '
      + 'keep the speaker icon on the gloss line.',
  );
});
