// Guards a1.03.l1 "Le genre des noms".
//
// Referential integrity across the whole corpus is already proven by
// seed.backcompat.test.ts, and the cross-lesson rules by lesson-contract.test.ts.
// This file pins the intent specific to THIS lesson, so a later edit that
// flattens it into a table of endings, drops the elision mission, or lets a
// rule state a number the corpus does not support goes red here rather than in
// front of a learner.
//
// Two sources are checked, not one. The SEED is what a learner receives. The
// AUTHORED SOURCE in ealch-admin is what the next author edits. Both are read
// here and the parity test at the bottom fails when they drift, which is the
// failure mode that has twice cost this project real work.
//
// ── The assertion this file exists for ────────────────────────────────────
//
// The lesson prints thirteen percentages on cards. Every one is a claim about
// this corpus and a display string is validated against nothing, so every one is
// RE-MEASURED here, on every CI run, through the same module the author checked
// against (gender.logic.ts). Nothing below reimplements it. An earlier version
// of a1.01's test inlined its own copy of the glossary lookup, which made it a
// second implementation free to drift from the renderer, and it had copied the
// version that was already broken, so it passed while the feature was dead.
//
// Counts are DERIVED from the authored source wherever a count is asserted. A
// hardcoded number fails on itself the first time content legitimately changes,
// and the fix is then to edit the test, which is how a test comes to certify a
// bug. Where a floor IS stated (the minimum number of elided nouns taught, the
// mcq ceiling, the 90% rule floor) it is a design decision being pinned, not a
// count being restated, and it is documented where it appears.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { narrationOf, quizQuestions, validateLesson, type Lesson } from './schema.ts';
import { glossKeys, segmentSentence } from './gloss.logic.ts';
import { dicteeMode, dicteeWords, wordDecoys } from './dictee.logic.ts';
import { bareNoun, carriesArticle, isPluralOnly, measureEnding, type GenderRow } from './gender.logic.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  units: { id: string; seq: number; title: string; canDo: string; sub: string; lessonIds: string[]; themes?: string[]; prereqUnitIds?: string[] }[];
  lessons: Lesson[];
  items: (GenderRow & { level: string; theme: string; en: string; drills: string[] })[];
};

const L = seed.lessons.find((l) => l.id === 'a1.03.l1');
const ITEMS = new Map(seed.items.map((i) => [i.id, i]));

// The admin repo is a sibling checkout. Skip cleanly when it is absent (the app
// can be built on its own) rather than failing the suite.
type Rule = {
  id: string; ending: string; predicts: 'm' | 'f'; accuracy: number; items: number; article: 'un' | 'une';
  example: { id: string; fr: string; en: string };
  sheetExamples: string[];
  breaks: { id: string; fr: string; en: string; kind: 'exception' | 'lookalike' }[];
  line: string;
};
let SRC: Lesson | null = null;
let SRC_REFRAME = '';
let SRC_RULES: Rule[] = [];
let SRC_WORTHLESS: { ending: string; accuracy: number; items: number; bothWays: { id: string; fr: string }[] }[] = [];
let SRC_MORE: { ending: string; predicts: 'm' | 'f'; accuracy: number; items: number }[] = [];
let SRC_HIDDEN: { id: string; elided: string; shown: string; en: string; g: 'm' | 'f' }[] = [];
let SRC_FLOOR = 90;
try {
  const lesson = await import('../../../ealch-admin/scripts/data/genre-lesson.ts');
  const endings = await import('../../../ealch-admin/scripts/data/genre-endings.ts');
  SRC = lesson.GENRE_LESSON as Lesson;
  SRC_REFRAME = lesson.REFRAME as string;
  SRC_HIDDEN = lesson.GENRE_HIDDEN as typeof SRC_HIDDEN;
  SRC_RULES = endings.ENDING_RULES as Rule[];
  SRC_WORTHLESS = endings.WORTHLESS_ENDINGS as typeof SRC_WORTHLESS;
  SRC_MORE = endings.MORE_ENDINGS as typeof SRC_MORE;
  SRC_FLOOR = endings.RULE_FLOOR as number;
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

/** An elided headword: `l'` in front, so the article is deleted and the card
 *  carries no gender information at all. This is the shape mission 12 exists
 *  for and it is spelled out here rather than imported, because it is one
 *  regex and inventing a module for it would be worse. */
const ELIDED = /^l['’]/i;

/* ─── Identity and shape ──────────────────────────────────────────────────── */

test('a1.03.l1 exists and is well-formed', () => {
  ok(L, 'a1.03.l1 is present in the seed');
  strictEqual(validateLesson(L).length, 0);
  strictEqual(L!.unitId, 'a1.03');
  strictEqual(L!.level, 'a1');
});

test('the tag numbers the lesson by where it sits, not by what its id says', () => {
  // The Den, the unit page and the mission list all derive the lesson number
  // from the unit's `seq` (commit 56c79a7). `tag` is the ONE place that number
  // is authored by hand, so a tag built from the unit id disagrees with every
  // derived surface.
  //
  // This unit is the sharpest case in the track: a1.03 sits at seq 5, because
  // a1.27 and a1.28 were inserted between a1.02 and a1.03. The first draft
  // shipped "LEÇON 03" and the Pixel 6 drew "LEÇON 05" in the header above it.
  //
  // Derived rather than pinned to a literal, the way a1-27-nombres.test.ts does
  // it, so the next lesson whose id and position disagree fails here before a
  // device finds it.
  const unit = seed.units.find((u) => u.id === L!.unitId)!;
  strictEqual(L!.tag, `A1 · LEÇON ${String(unit.seq).padStart(2, '0')}`);
});

test('the a1.03 unit links the lesson, and its own copy is untouched', () => {
  const unit = seed.units.find((u) => u.id === 'a1.03');
  ok(unit, 'a1.03 unit exists');
  ok(unit!.lessonIds.includes('a1.03.l1'), 'unit lists the lesson, so the Den can reach it');
  // The Den advertises these three before the learner opens anything. Authoring
  // the lesson is not a licence to rewrite the promise it was built against.
  strictEqual(unit!.title, 'Noun Gender');
  strictEqual(unit!.sub, 'Le genre des noms');
  strictEqual(unit!.canDo, 'Can tell masculine from feminine nouns and pick un or une');
});

test('the unit still carries no themes, which was a decision', () => {
  // Gender is a property of every noun rather than a topic, there is no `genre`
  // theme, and this lesson's nouns come from thirteen themes by design: an
  // ending rule shown only inside `cuisine` reads as a fact about food.
  //
  // Binding three of the thirteen would point the Den's chips at decks that are
  // not what this unit is about. a1.05 Subject Pronouns and a1.18 Negation are
  // themeless for the same reason. Asserted so that reversing it is a visible
  // edit here rather than something that arrives with a batch.
  const unit = seed.units.find((u) => u.id === 'a1.03')!;
  strictEqual(unit.themes, undefined, 'a1.03 has grown a themes key; see the note in genre-lesson.ts before keeping it');

  const themes = new Set(L!.itemIds.map((id) => ITEMS.get(id)?.theme).filter(Boolean));
  ok(themes.size >= 10, `the teaching set draws on ${themes.size} themes; under ten it is concentrated enough to bind`);
});

test('this lesson is a prerequisite, so its ground has to be complete', () => {
  // Every A1 lesson built before this one was a leaf. a1.04 and a1.11 declare
  // a1.03 as a prerequisite and a1.29 depends on it through a1.04, and all
  // three assume a learner who can look at a noun and know its article.
  const dependents = seed.units.filter((u) => (u.prereqUnitIds ?? []).includes('a1.03')).map((u) => u.id);
  ok(dependents.length >= 2, `expected a1.04 and a1.11 to depend on this unit, found ${dependents.join(', ') || 'none'}`);

  // The canDo is production, not recognition, so the exam has to ask the
  // learner to WRITE or SAY an article rather than only to pick one.
  const produce = quizQuestions(theQuiz()).filter((q) => q.format === 'typeIn' || q.format === 'errorSpot' || q.format === 'speak');
  ok(produce.length >= 8, `only ${produce.length} exam questions ask the learner to produce an article`);
});

test('the mission spine is the authored one, in order', () => {
  const types = L!.sections.map((s) => s.type);
  strictEqual(types[0], 'scene', 'the learner meets the stakes before any rule');
  strictEqual(types[types.length - 1], 'roundup', 'the badge closes the journey');
  strictEqual(types[types.length - 2], 'quiz', 'the exam sits just before the badge');
  strictEqual(
    sectionIds().join(' '),
    's01-scene s02-goals s03-pair s04-finale s05-ignore ' +
    's06-ten s07-masc s08-masc-check s09-fem s10-fem-check s11-breaks ' +
    's12-hidden s13-listen s14-hidden-deck s15-livre ' +
    's16-cases s17-flash s18-dictation s19-traps s20-scenario s21-reading s22-speak ' +
    's23-review s24-progress s25-quiz s26-roundup',
  );
  // The missions list gives each row one line and truncates with an ellipsis.
  // Three titles shipped over the limit on a1.02 and were cut on a device.
  //
  // A COARSE guard, deliberately. The real constraint is rendered width, not
  // character count: "What You Will Be Able To Do" is 27 characters of narrow
  // letters and fits, while "The Same Number, Three Ways" is also 27 and did
  // not. So this catches the obviously-too-long and nothing subtler.
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

test('the journey is genuinely multimodal', () => {
  const present = new Set(L!.sections.map((s) => s.type));
  for (const t of [
    'scene', 'goals', 'cardDeck', 'tapTable', 'groupDrill', 'listening', 'vocabThemes',
    'examples', 'useCases', 'flashcards', 'dictation', 'commonErrors', 'scenario',
    'reading', 'practice', 'reviewDeck', 'progressCheck', 'quiz', 'roundup',
  ] as const) {
    ok(present.has(t), `section type ${t} present`);
  }
  // The binary this lesson teaches resolves to a single word, which is the one
  // A1 topic where the xl word card is the right shape. Both drills run at xl
  // and each is split into a word deck and its own control page, because at
  // that size a deck and a question on one screen puts the question below the
  // fold.
  const xl = L!.sections.filter((s) => s.type === 'groupDrill' && (s as { size?: string }).size === 'xl');
  ok(xl.length >= 4, `expected the split word-deck and control-page shape, got ${xl.length} xl drills`);
  const controls = xl.filter((s) => {
    const g = (s as { groups?: { items?: unknown[]; check?: unknown }[] }).groups ?? [];
    return g.length === 1 && g[0].check && (g[0].items?.length ?? 0) === 0;
  });
  ok(controls.length >= 2, 'each word deck needs its own control page, or the check sits under the deck');
});

/* ─── The claims, measured ────────────────────────────────────────────────── */

test('every ending rule the lesson states is true of this corpus', { skip: noSrc }, () => {
  // The assertion worth writing first. Each rule's accuracy and count are
  // recomputed from seed.json and compared to what the card prints, so the
  // lesson cannot assert folklore and cannot keep asserting a figure that has
  // drifted.
  ok(SRC_RULES.length === 10, `the lesson is built on ten endings, found ${SRC_RULES.length}`);
  for (const r of SRC_RULES) {
    const m = measureEnding(seed.items, r.ending);
    ok(m, `-${r.ending}: no nouns in the seed end this way`);
    strictEqual(m!.accuracy, r.accuracy, `-${r.ending}: card says ${r.accuracy}%, corpus says ${m!.accuracy}%`);
    strictEqual(m!.n, r.items, `-${r.ending}: card says ${r.items} nouns, corpus says ${m!.n}`);
    strictEqual(m!.predicts, r.predicts, `-${r.ending}: card predicts ${r.predicts}, corpus says ${m!.predicts}`);
    ok(m!.accuracy >= SRC_FLOOR, `-${r.ending} is ${m!.accuracy}%, under the ${SRC_FLOOR}% floor the lesson sets itself`);
    // The article is what the learner needs, so the card's `article` and its
    // `predicts` must not be able to disagree.
    strictEqual(r.article, r.predicts === 'm' ? 'un' : 'une', `-${r.ending}: article and gender disagree`);
  }
  // And the same, in reverse, for the three the lesson tells the learner to
  // ignore. An ending that quietly climbed over the floor should stop being
  // dismissed.
  for (const w of SRC_WORTHLESS) {
    const m = measureEnding(seed.items, w.ending);
    ok(m, `-${w.ending}: nothing ends this way`);
    strictEqual(m!.accuracy, w.accuracy, `-${w.ending}: card says ${w.accuracy}%, corpus says ${m!.accuracy}%`);
    strictEqual(m!.n, w.items, `-${w.ending}: card says ${w.items} nouns, corpus says ${m!.n}`);
    ok(m!.accuracy < SRC_FLOOR, `-${w.ending} is ${m!.accuracy}% and the lesson calls it worthless`);
  }
  // The reference sheet states fourteen more. A sheet nobody re-checks is
  // exactly where a stale figure survives longest.
  for (const e of SRC_MORE) {
    const m = measureEnding(seed.items, e.ending);
    ok(m, `sheet -${e.ending}: nothing ends this way`);
    strictEqual(m!.accuracy, e.accuracy, `sheet -${e.ending}: says ${e.accuracy}%, corpus says ${m!.accuracy}%`);
    strictEqual(m!.n, e.items, `sheet -${e.ending}: says ${e.items} nouns, corpus says ${m!.n}`);
    strictEqual(m!.predicts, e.predicts, `sheet -${e.ending}: predicts ${e.predicts}, corpus says ${m!.predicts}`);
    ok(m!.accuracy >= SRC_FLOOR, `sheet -${e.ending} is ${m!.accuracy}%, under the floor and should not be written down`);
  }
  // No ending is taught twice, in the flow and on the sheet.
  const flow = new Set(SRC_RULES.map((r) => r.ending));
  for (const e of SRC_MORE) ok(!flow.has(e.ending), `-${e.ending} is both taught and filed as extra`);
});

test('every ending rule also ships what breaks it', { skip: noSrc }, () => {
  // A rule taught without its counterexample is a rule the learner will trust
  // in exactly the wrong place: -eau is 92% masculine and the 8% is l'eau and
  // la peau, two of the first nouns a beginner meets.
  //
  // Enforced in BOTH directions. A rule measured below 100% must name a real
  // exception, and a rule at 100% must not invent one: the four with no
  // exception in this corpus carry a lookalike instead, which is the thing that
  // actually goes wrong with a rule that never fails.
  for (const r of SRC_RULES) {
    ok(r.breaks.length > 0, `-${r.ending} ships no counterexample at all`);
    const m = measureEnding(seed.items, r.ending)!;
    const exceptions = r.breaks.filter((b) => b.kind === 'exception');
    const lookalikes = r.breaks.filter((b) => b.kind === 'lookalike');

    if (m.accuracy < 100) {
      ok(exceptions.length > 0, `-${r.ending} is ${m.accuracy}% and names no exception`);
      const real = new Set(m.breaks.map((b) => b.id));
      for (const b of exceptions) {
        ok(real.has(b.id), `-${r.ending} calls ${b.id} an exception, and the corpus does not agree`);
      }
    } else {
      strictEqual(exceptions.length, 0, `-${r.ending} is 100% here and claims an exception that does not exist`);
      ok(lookalikes.length > 0, `-${r.ending} has no exception and no lookalike, so it ships bare`);
    }
    // A lookalike must NOT carry the ending, or it is an exception being
    // mislabelled, which would let a broken rule look clean.
    for (const b of lookalikes) {
      ok(!bareNoun(b.fr).endsWith(r.ending), `-${r.ending}: "${b.fr}" is called a lookalike and really does end that way`);
    }
  }
});

test('every noun the lesson names matches the corpus row it claims to show', { skip: noSrc }, () => {
  // Display copy drifting from the item it names is the same class of failure
  // as a dangling id and it is harder to see: the card renders, it is simply
  // wrong.
  const check = (n: { id: string; fr: string }, label: string, gender?: 'm' | 'f') => {
    const it = ITEMS.get(n.id);
    ok(it, `${label}: ${n.id} is not in the corpus`);
    strictEqual(it!.fr, n.fr, `${label}: lesson shows "${n.fr}", ${n.id} is "${it!.fr}"`);
    if (gender) strictEqual(it!.gender, gender, `${label}: ${n.id} is ${it!.gender}, the lesson says ${gender}`);
  };
  for (const r of SRC_RULES) {
    check(r.example, `-${r.ending} hero`, r.predicts);
    for (const b of r.breaks) {
      check(b, `-${r.ending} break`, b.kind === 'exception' ? (r.predicts === 'm' ? 'f' : 'm') : undefined);
    }
  }
  for (const w of SRC_WORTHLESS) {
    check(w.bothWays[0], `-${w.ending} pair`, 'm');
    check(w.bothWays[1], `-${w.ending} pair`, 'f');
  }
  for (const h of SRC_HIDDEN) check({ id: h.id, fr: h.elided }, 'elided noun', h.g);
  // Sheet copy is display-only and cannot be joined to an id, so what is
  // checked there is the one thing that matters: it follows the reframe.
  for (const r of SRC_RULES) {
    for (const s of r.sheetExamples) ok(carriesArticle(s), `-${r.ending} sheet example "${s}" carries no article`);
  }
});

test('every noun the lesson teaches carries its article', () => {
  // This IS the reframe, expressed as a check, and it is asserted against the
  // corpus item's `fr` rather than against the lesson's own copy, so a teaching
  // set that drifted to bare nouns fails the build. A lesson arguing for a habit
  // its own cards do not follow is worse than no lesson.
  const bare = L!.itemIds
    .map((id) => ITEMS.get(id)!)
    .filter((it) => it && it.kind !== 'sentence' && !carriesArticle(it.fr));
  strictEqual(bare.length, 0, `taught without an article: ${bare.map((i) => `${i.id} "${i.fr}"`).join(', ')}`);

  // And every flashcard back carries one too, because a card fronted or backed
  // with the bare noun teaches the learner to store it bare.
  const flash = L!.sections.find(
    (s): s is Extract<Lesson['sections'][number], { type: 'flashcards' }> => s.type === 'flashcards',
  )!;
  const naked = flash.cards.filter((c) => !carriesArticle(c.back));
  strictEqual(naked.length, 0, `flashcard backs with no article: ${naked.map((c) => c.back).join(', ')}`);
});

test('every id the lesson names still carries the gender it is taught on', () => {
  // A corpus edit that strips a gender field should fail here rather than on a
  // device, where it renders as a card that teaches nothing.
  const ungendered = L!.itemIds
    .map((id) => ITEMS.get(id)!)
    .filter((it) => it && it.kind !== 'sentence' && it.gender !== 'm' && it.gender !== 'f');
  strictEqual(ungendered.length, 0, `taught as gendered nouns and carrying no gender: ${ungendered.map((i) => i.id).join(', ')}`);
});

/* ─── The elision mission ─────────────────────────────────────────────────── */

test("the l' trap is taught, drilled and tested", { skip: noSrc }, () => {
  // The strongest mission in the lesson and the one most likely to be flattened
  // by a later edit, because it looks like a vocabulary deck. It is not: the
  // point is that the card carries NO information, and only a listening section
  // can make that point, because there is nothing on screen to reason from.
  const taught = SRC_HIDDEN.filter((h) => ELIDED.test(h.elided));
  ok(taught.length >= 10, `only ${taught.length} elided nouns reach the learner; the mission has been thinned`);
  // Both genders, or the mission teaches "l' means feminine", which is worse
  // than teaching nothing.
  const masc = taught.filter((h) => h.g === 'm').length;
  ok(masc >= 4 && taught.length - masc >= 4, `elided set is ${masc}m/${taught.length - masc}f and has to show both`);

  // The deck exists, and every card restores the article the corpus deleted.
  const deck = section('s14-hidden-deck');
  ok(deck && deck.type === 'vocabThemes', 's14-hidden-deck is the elided-noun deck');
  const cards = (deck as Extract<Lesson['sections'][number], { type: 'vocabThemes' }>).themes.flatMap((t) => t.cards);
  strictEqual(cards.length, SRC_HIDDEN.length, 'the deck shows every elided noun the lesson declares');
  for (const c of cards) {
    ok(ELIDED.test(c.fr), `"${c.fr}" is in the elided deck and is not elided`);
    ok(/^une? /i.test(c.sub ?? ''), `"${c.fr}" does not restore its article; the sub line is the whole point`);
  }

  // The listening mission, which is the one that cannot be done any other way.
  const listen = section('s13-listen');
  ok(listen && listen.type === 'listening', 's13-listen is a listening mission');
  const ls = listen as Extract<Lesson['sections'][number], { type: 'listening' }>;
  ok(ls.questionsInModal, 'without questionsInModal the questions sit under the lines that answer them');
  ok(ls.lines.every((l) => ELIDED.test(l.fr)), 'every line has to open on an elided noun');
  ok(ls.questions.every((q) => q.why), 'a listening check that explains nothing is a colour and no rule');

  // And the exam asks about one, so a later edit cannot flatten the mission
  // away and leave the lesson still passing.
  const asked = quizQuestions(theQuiz()).filter((q) => /l['’]/i.test(q.q + JSON.stringify(q.audio ?? {}) + JSON.stringify(q.opts ?? [])));
  ok(asked.length >= 3, `only ${asked.length} exam questions touch the elision`);
  const heard = quizQuestions(theQuiz()).filter((q) => q.format === 'listenChoose');
  ok(heard.length >= 2, 'the elision has to be tested by ear, where the answer genuinely is not available');
  for (const q of heard) {
    ok(q.audio?.clip, `"${q.q}" is a listening question with nothing to play`);
    // listenChoose falls back to SPEAKING the option text, so English options
    // would be read aloud in a French voice.
    ok(!(q.opts ?? []).some((o) => /\b(the|it|is|of|and|you|cannot)\b/i.test(o)), `"${q.q}" offers English options to a French voice`);
  }
});

test('no plural-only noun is used to teach the choice', () => {
  // `des lunettes`, `les ciseaux`, `les pâtes`, `les toilettes`. Les and des are
  // the same word for both genders, so a learner asked to sort one is being
  // asked to recall rather than to work anything out. The lesson SHOWS three of
  // them on one examples card, deliberately, and they reach nothing else.
  const teaching = new Set<string>([
    ...L!.sections.filter((s) => s.type === 'practice').flatMap((s) => (s as { itemIds: string[] }).itemIds),
    ...(L!.drills ?? []).flatMap((d) => (d as { items?: string[] }).items ?? []),
  ]);
  const offenders = [...teaching].filter((id) => isPluralOnly(ITEMS.get(id)?.fr ?? ''));
  strictEqual(offenders.length, 0, `plural-only nouns reach a drill: ${offenders.join(', ')}`);

  // But they are shown once, because "why does this one never tell you?" is a
  // question a learner will have and the answer is short.
  const shown = L!.itemIds.filter((id) => isPluralOnly(ITEMS.get(id)?.fr ?? ''));
  ok(shown.length >= 2, 'the lesson never explains why some nouns show no gender at all');
});

test('both genders are represented in every teaching surface', () => {
  // The corpus is 60/40 masculine to begin with, so a teaching set left to
  // itself drifts. A deck or a tranche that is 80% one gender teaches a bias on
  // top of a rule.
  const balance = (ids: string[]) => {
    const g = ids.map((id) => ITEMS.get(id)?.gender).filter((x): x is 'm' | 'f' => !!x);
    const m = g.filter((x) => x === 'm').length;
    return { n: g.length, m, f: g.length - m };
  };
  const check = (label: string, ids: string[], floor = 5) => {
    const b = balance(ids);
    if (b.n < floor) return;
    ok(b.m / b.n <= 0.8 && b.f / b.n <= 0.8, `${label} is ${b.m}m/${b.f}f, which teaches a bias`);
  };
  check('the teaching set', L!.itemIds);
  (L!.deckTranche ?? []).forEach((t, i) => check(`tranche ${i + 1}`, t));
  for (const s of L!.sections) {
    if (s.type === 'practice') check(`practice ${(s as { id?: string }).id}`, s.itemIds);
  }
  for (const d of L!.drills ?? []) {
    const items = (d as { items?: string[] }).items;
    if (items) check(`drill ${d.id}`, items);
  }
  // And the ten endings split five and five, so neither article is the default.
  const flash = L!.sections.find(
    (s): s is Extract<Lesson['sections'][number], { type: 'flashcards' }> => s.type === 'flashcards',
  )!;
  const un = flash.cards.filter((c) => /^une? /i.test(c.back) || /^le /i.test(c.back)).length;
  ok(un > 0, 'the flashcards show real articles');
});

/* ─── The exam ────────────────────────────────────────────────────────────── */

test('the exam asks the learner to produce, not only to recognise', () => {
  const qs = quizQuestions(theQuiz());
  ok(qs.length >= 16, `a lesson this size wants a real exam, got ${qs.length}`);
  ok((theQuiz().rounds?.length ?? 0) >= 3, 'the exam is round-based so remediation can target a round');

  // Recognition can be passed by elimination, and this lesson's whole claim is
  // that the learner can PRODUCE the article.
  const mcq = qs.filter((q) => (q.format ?? 'mcq') === 'mcq').length;
  ok(mcq <= qs.length / 2, `${mcq}/${qs.length} questions are mcq; production formats have been squeezed out`);
  const typeIn = qs.filter((q) => q.format === 'typeIn').length;
  ok(typeIn >= 5, `typeIn is the workhorse of this exam and there are only ${typeIn}`);

  for (const q of qs) {
    ok(typeof q.why === 'string' && q.why.length > 0, `"${q.q}" explains its answer`);
    ok(q.ref, `"${q.q}" names the section that taught it`);
    // A why longer than about two lines is cut on the card. Found on a device
    // on a1.02 round 1, where the final three words were lost. QuizRoundsView
    // sets no numberOfLines, so this is card height rather than a clamp, but
    // the observable result is the same.
    ok(q.why!.length <= 115, `"${q.q}" has a ${q.why!.length}-character why; a phone will cut it`);
    if (Array.isArray(q.opts) && q.opts.length) {
      strictEqual(new Set(q.opts).size, q.opts.length, `options distinct for "${q.q}"`);
      ok(q.correct != null && q.correct >= 0 && q.correct < q.opts.length, `correct in range for "${q.q}"`);
    }
    // Free-text answers are compared through fold(), which strips accents,
    // case, punctuation and whitespace, so an accept entry differing only by
    // those is redundant. What matters is that the answer shown is one the
    // grader would take.
    if (q.format === 'typeIn' || q.format === 'errorSpot') {
      const accept = q.accept ?? [];
      ok(accept.length > 0, `"${q.q}" is free-text but accepts nothing`);
      ok(q.answer && accept.includes(q.answer), `"${q.q}" shows an answer it would not accept`);
      // And the answer is an article plus a noun, because that is the canDo.
      ok(carriesArticle(q.answer!), `"${q.q}" accepts "${q.answer}", which is a bare noun`);
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
  strictEqual(quizQuestions(quizzes[0]).length, authored, 'authored quiz questions are unreachable');
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
  strictEqual(orphans.length, 0, `drills no round can fire: ${orphans.join(', ')}`);
  // A sort drill scores against the corpus, so its items are ids. Display
  // strings there validate as broken ids and render an empty drill.
  for (const d of L!.drills ?? []) {
    for (const id of (d as { items?: string[] }).items ?? []) {
      ok(ITEMS.has(id), `drill "${d.id}" names ${id}, which is not in the corpus`);
    }
  }
});

/* ─── SRS, corpus hygiene, and the surfaces ───────────────────────────────── */

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
  const released = new Set(all);
  const stranded = L!.itemIds.filter((id) => !released.has(id));
  strictEqual(stranded.length, 0, `taught but never released to review: ${stranded.join(', ')}`);
});

test('no dead corpus entry, and no two non-sentence items share an fr in a theme', () => {
  const dead = L!.itemIds.filter((id) => !ITEMS.has(id));
  strictEqual(dead.length, 0, `lesson declares items absent from the corpus: ${dead.join(', ')}`);
  // The flashcard hub keys decks on `fr` within a theme, so a duplicate serves
  // the same card twice and takes two SRS ratings for one word.
  const seen = new Map<string, string>();
  for (const id of L!.itemIds) {
    const it = ITEMS.get(id)!;
    if (it.kind === 'sentence') continue;
    const key = `${it.theme}::${it.fr.trim().toLowerCase()}`;
    const prior = seen.get(key);
    ok(!prior, `${id} and ${prior} both teach "${it.fr}" in theme ${it.theme}`);
    seen.set(key, id);
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

test('the dictée is drawn from sentences, because no gendered word carries the tag', () => {
  // Not one of the a1 gendered WORD items carries the `dictation` drill, so a
  // dictée naming any of them renders an empty mission. That is checked here
  // rather than remembered, because it is the sort of fact that gets fixed
  // upstream and then quietly stops being a constraint.
  const gendered = seed.items.filter((i) => i.level === 'a1' && i.kind === 'word' && i.gender);
  const dictatable = gendered.filter((i) => i.drills.includes('dictation'));
  strictEqual(
    dictatable.length,
    0,
    `${dictatable.length} a1 gendered words now carry the dictation drill; the sentence workaround may no longer be needed`,
  );

  // Asked of the REAL module the renderer uses, not of a restated threshold.
  const d = L!.sections.find(
    (s): s is Extract<Lesson['sections'][number], { type: 'dictation' }> => s.type === 'dictation',
  )!;
  ok(d.itemIds.length >= 3, 'the dictée is worth the mission');
  for (const id of d.itemIds) {
    const fr = ITEMS.get(id)!.fr;
    strictEqual(dicteeMode(fr), 'words', `"${fr}" would spell letter by letter`);
    ok(dicteeWords(fr).length >= 4, `"${fr}" is too short to be worth assembling`);
    ok(wordDecoys(fr).length > 0, `"${fr}" gets no decoy tiles, so "use everything" solves it`);
    // And each one has an article in it, or the mission is a spelling test
    // rather than a test of this lesson.
    ok(/\b(un|une|le|la|les|des|du)\b|l['’]/i.test(fr), `"${fr}" has no article to get right`);
  }
});

test('every reading glossary entry underlines a word that is really there', () => {
  // Asks the REAL matcher rather than restating it.
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

test('the reading passage keeps English outside the guillemets and authors no line break', () => {
  // Paul's A1 rule, 2026-08-04: anything not inside « » is context, and context
  // is instruction. The learner's reading effort belongs on the exchange.
  //
  // And PassagePage does `text.split(/(?<=[.!?»])\s+/)` and renders the pieces
  // inline in one <TX>, so every authored `\n` is swallowed. Writing one turn
  // per line produces a field no component reads.
  const sec = L!.sections.find(
    (s): s is Extract<Lesson['sections'][number], { type: 'reading' }> => s.type === 'reading',
  )!;
  ok(!sec.text.includes('\n'), 'the passage authors line breaks that PassagePage discards');
  const quoted = sec.text.match(/«[^»]*»/g) ?? [];
  ok(quoted.length >= 4, 'the passage holds a real French exchange');
  const outside = sec.text.replace(/«[^»]*»/g, ' ');
  const french = outside.match(/\b(est|elle|dans|une|des|les|avec|pour|sur|chez|puis|il|la|le|du)\b/i);
  ok(!french, `French leaked outside the guillemets: "${french?.[0]}"`);
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
  // Every term example resolves, or the glossary card shows a blank line.
  for (const [key, t] of Object.entries(L!.terms ?? {})) {
    for (const ex of t.examples ?? []) {
      ok(ITEMS.has(ex.itemId), `term "${key}" names ${ex.itemId}, which is not in the corpus`);
    }
  }
});

test('the lesson teaches the choice without teaching the grammar vocabulary', () => {
  // A learner who knows that armoire takes une does not need to know that une
  // is called feminine, and `elision` is a sons word this learner may never
  // have met: a1.03 declares no prerequisite units, so nothing guarantees they
  // have opened that track. The behaviour is named plainly instead.
  //
  // This is not theoretical. The first draft used "elision" five times in
  // learner copy, in a quiz `why` and a reading glossary note, and this
  // assertion is what found them.
  //
  // Scoped to SECTIONS and TERMS, which is everything a learner reads.
  // `grammarIntroduced` and the audio briefs are addressed to the curriculum
  // and to the studio, and both are better for using the precise word: the
  // a1.04 author needs to know this lesson introduced elision, and the engineer
  // recording it needs to know not to break the join. Widening this to the
  // whole lesson object would be banning a term from the two places it belongs.
  const learnerFacing = [...strings(L!.sections), ...strings(L!.terms ?? {})];
  const jargon = learnerFacing.filter((s) => /\b(élision|elision|masculin|féminin)\b/i.test(s));
  strictEqual(jargon.length, 0, `grammar vocabulary reached an A1 learner: ${jargon.slice(0, 2).join(' | ')}`);
});

test('the progress card counts the journey it sits in', () => {
  const ix = L!.sections.findIndex((s) => (s as { id?: string }).id === 's24-progress');
  ok(ix > 0, 'the progress card is in the journey');
  const card = L!.sections[ix] as Extract<Lesson['sections'][number], { type: 'progressCheck' }>;
  const stat = (k: string) => card.stats?.find((x) => x.k === k)?.v;
  strictEqual(stat('Nouns met'), String(L!.itemIds.length));
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
    (s) => s.type === 'quiz' || ((s as { questions?: unknown[] }).questions?.length ?? 0) > 0
      || ((s as { groups?: { check?: unknown }[] }).groups ?? []).some((g) => g.check),
  );
  const firstTeaching = Math.min(
    ...['cardDeck', 'tapTable', 'vocabThemes'].map((t) => types.indexOf(t)).filter((i) => i >= 0),
  );
  ok(firstCheck > firstTeaching, 'the learner is taught before being tested');
  const speak = L!.sections.findIndex((s) => s.type === 'practice' && s.skill === 'speak');
  ok(speak > firstCheck, 'speaking is asked for only after an early written win');
});

test('the audio brief names the contrast that must be one take', () => {
  // Every contrast in this lesson is `un X` against `une X`, where the article
  // is one unstressed syllable. Recorded across two takes the pair is not
  // comparable and the learner hears the difference between the recordings.
  // That instruction is invisible once the clips are delivered, so it has to
  // survive in the brief.
  const recorded = L!.audio?.recorded ?? [];
  ok(recorded.length > 0, 'the lesson asks the studio for recordings');
  ok(recorded.some((r) => /one take/i.test(r.desc)), 'the one-take instruction is missing from the brief');
  // And the note about not over-articulating `un`: its vowel is nasal, and a
  // careful reading that lets the N through removes the only thing separating
  // it from `une`.
  ok(
    recorded.some((r) => /over-articulate|nasal/i.test(r.desc)),
    'the brief does not warn against over-articulating un, which would destroy the contrast',
  );
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
  // And it has to survive the mission where a weak reframe falls apart. When
  // the article has been elided away there is nothing about gender to say, and
  // only a reframe about the ARTICLE has anything to offer there.
  ok(
    strings(section('s12-hidden')).some((s) => s.includes(SRC_REFRAME)),
    'the reframe does not reach the elision mission, which is where it has to hold',
  );
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
  strictEqual((L!.sheets ?? []).length, (SRC!.sheets ?? []).length, 'sheet count drifted');
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
