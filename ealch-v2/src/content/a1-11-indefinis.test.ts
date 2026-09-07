// Guards a1.11.l1 "Les articles indéfinis".
//
// Referential integrity across the whole corpus is already proven by
// seed.backcompat.test.ts, and the cross-lesson rules by lesson-contract.test.ts.
// This file pins the intent specific to THIS lesson, so a later edit that
// flattens it into a two-column table of masculine and feminine, drops `des`,
// or lets the partitive creep in from a1.29 goes red here rather than in front
// of a learner.
//
// Two sources are checked, not one. The SEED is what a learner receives. The
// AUTHORED SOURCE in ealch-admin is what the next author edits. Both are read
// here and the parity test at the bottom fails when they drift, which is the
// failure mode that has twice cost this project real work.
//
// ── The assertion this file exists for ────────────────────────────────────
//
// "Pick un or une" is gender wearing a different article, and a1.03 already
// teaches gender across 26 missions. If this lesson could be replaced by a
// two-column table it would be a1.04 rebuilt. What makes it worth shipping is
// that the first-mention rule is DEMONSTRATED in a narrative rather than
// asserted on a card, and that is what `the first-mention rule is shown, not
// stated` below checks: it reads the passage text and looks for the same noun
// arriving on un/une/des and coming back on le/la/les. It is written against
// the text rather than against a count, because a count would still pass on a
// passage that had been rewritten into a word list.
//
// Nothing here reimplements app logic. gloss.logic, answer.logic, dictee.logic
// and density.logic are imported and used. An earlier version of a1.01's test
// inlined its own copy of the glossary lookup, copied the version that was
// already broken, and passed while the feature was dead.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { narrationOf, quizQuestions, validateLesson, type Lesson, type LessonSection } from './schema.ts';
import { glossKeys, segmentSentence } from './gloss.logic.ts';
import { matchesAccept } from './answer.logic.ts';
import { dicteeMode } from './dictee.logic.ts';
import { hasPlainNasalFor, isDelimitedRespell } from './density.logic.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  units: { id: string; seq: number; title: string; sub: string; canDo: string; lessonIds: string[]; themes?: string[]; prereqUnitIds?: string[] }[];
  lessons: Lesson[];
  items: { id: string; theme: string; kind: string; fr: string; en: string; drills: string[]; cardType?: string; level: string }[];
};

const L = seed.lessons.find((l) => l.id === 'a1.11.l1');
const ITEMS = new Map(seed.items.map((i) => [i.id, i]));

// The admin repo is a sibling checkout. Skip cleanly when it is absent (the app
// can be built on its own) rather than failing the suite.
type ArticleWord = {
  id: string; fr: string; en: string; kind: string; theme: string;
  respell?: string; article: string; family: string; pairWith?: string; drills: string[];
};
type Display = { fr: string; ipa: string; respell: string; en: string };
let SRC: Lesson | null = null;
let SRC_REFRAME = '';
let SRC_ARTICLES: ArticleWord[] = [];
let SRC_RESPELL: Record<string, Display> = {};
let SRC_META: string[] = [];
let SRC_PAIRS: [string, string][] = [];
let SRC_SPEAK: string[] = [];
let SRC_DICTATION: string[] = [];
try {
  const lesson = await import('../../../ealch-admin/scripts/data/articles-indefinis-lesson.ts');
  const corpus = await import('../../../ealch-admin/scripts/data/articles-indefinis-corpus.ts');
  SRC = lesson.INDEFINIS_LESSON as Lesson;
  SRC_REFRAME = lesson.REFRAME as string;
  SRC_SPEAK = lesson.INDEFINIS_SPEAK_IDS as string[];
  SRC_DICTATION = lesson.INDEFINIS_DICTATION_IDS as string[];
  SRC_ARTICLES = corpus.ARTICLES as unknown as ArticleWord[];
  SRC_RESPELL = corpus.RESPELL as Record<string, Display>;
  SRC_META = corpus.METALANGUAGE_IDS as string[];
  SRC_PAIRS = corpus.MENTION_PAIRS as [string, string][];
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
  L!.sections.find((s): s is Extract<LessonSection, { type: 'quiz' }> => s.type === 'quiz')!;

/** The surfaces a learner PRODUCES from or CHOOSES between: quiz options and
 *  accepted answers, flip-card backs, drill answers, and the French of every
 *  corpus item the lesson releases.
 *
 *  Scoped deliberately, and this is the scoping the partitive test below turns
 *  on. A check over every string in the lesson fires on ordinary French prose
 *  ("révision du genre", where `du` is a preposition), and a check that cries
 *  wolf on legitimate copy gets deleted rather than fixed. */
function productionSurfaces(): string[] {
  const q = theQuiz();
  const out: string[] = [];
  for (const qq of quizQuestions(q)) {
    out.push(...(qq.opts ?? []), ...(qq.accept ?? []));
    if (qq.answer) out.push(qq.answer);
    if (qq.target) out.push(qq.target);
  }
  for (const d of L!.drills ?? []) {
    out.push(...(d.pairs ?? []).map((p) => p[1]), ...(d.opts ?? []));
  }
  for (const s of L!.sections) {
    const sec = s as LessonSection & {
      cards?: { back?: string; fr?: string }[];
      themes?: { cards?: { fr: string }[] }[];
      rows?: { cells?: string[] }[];
    };
    for (const c of sec.cards ?? []) {
      if (c.back) out.push(c.back);
      if (c.fr) out.push(c.fr);
    }
    for (const t of sec.themes ?? []) for (const c of t.cards ?? []) out.push(c.fr);
    for (const r of sec.rows ?? []) out.push(...(r.cells ?? []));
  }
  for (const id of (L!.deckTranche ?? []).flat()) {
    const it = ITEMS.get(id);
    if (it) out.push(it.fr);
  }
  return out;
}

/** The bare noun after an article, so "un hôtel" and "l'hôtel" can be compared.
 *  Not a reimplementation of anything: gloss.logic strips articles for a
 *  different job (matching a glossary key to a passage token) and does not
 *  expose the noun on its own. */
const stripPunct = (w: string) => w.replace(/[.,!?;:«»"'’…]/gu, '').toLowerCase();

/* ─── Identity and shape ──────────────────────────────────────────────────── */

test('a1.11.l1 exists and is well-formed', () => {
  ok(L, 'a1.11.l1 is present in the seed');
  strictEqual(validateLesson(L!).length, 0);
  strictEqual(L!.unitId, 'a1.11');
  strictEqual(L!.level, 'a1');
});

test('the tag numbers the lesson by where it sits, not by what its id says', () => {
  // The Den, the unit page and the mission list all derive the lesson number
  // from the unit's `seq`. `tag` is the ONE place that number is authored by
  // hand, so a tag built from the unit id disagrees with every derived surface.
  // a1.11 sits at seq 7 because a1.27 and a1.28 were inserted earlier, so the
  // naive tag would say 11 and the header above it would say 07. a1.03 shipped
  // exactly that bug (commit 56c79a7).
  const unit = seed.units.find((u) => u.id === L!.unitId)!;
  strictEqual(L!.tag, `A1 · LEÇON ${String(unit.seq).padStart(2, '0')}`);
});

test('the a1.11 unit links the lesson, and its own copy is untouched', () => {
  const unit = seed.units.find((u) => u.id === 'a1.11');
  ok(unit, 'a1.11 unit exists');
  ok(unit!.lessonIds.includes('a1.11.l1'), 'unit lists the lesson, so the Den can reach it');
  // The Den advertises these three before the learner opens anything. Authoring
  // the lesson is not a licence to rewrite the promise it was built against.
  strictEqual(unit!.title, 'The Indefinite Articles');
  strictEqual(unit!.sub, 'Les articles indéfinis');
  strictEqual(unit!.canDo, 'Can pick un, une or des, and say when French wants the indefinite rather than the definite');
});

test('the unit still carries no themes, which was a decision', () => {
  // A grammar unit that claims one theme points the Den's chips at decks it is
  // not about. This lesson's nouns come from six themes and none of them is
  // what it teaches. a1.03 and a1.05 are themeless for the same reason.
  const unit = seed.units.find((u) => u.id === 'a1.11')!;
  strictEqual(unit.themes, undefined, 'a1.11 has grown a themes key; see the note in articles-indefinis-lesson.ts');
  const themes = new Set(L!.itemIds.map((id) => ITEMS.get(id)?.theme).filter(Boolean));
  ok(themes.size >= 5, `the teaching set draws on ${themes.size} themes; under five it is concentrated enough to bind one`);
});

test('the prerequisite is a1.03, and the lesson is built on what a1.03 taught', () => {
  // REPORTED, NOT FIXED. The canDo asks for a contrast with the definite
  // article, which is a1.04's material, but prereqUnitIds names only a1.03. A
  // learner can legitimately arrive here without opening a1.04.
  //
  // The saving grace is that a1.03 taught le, la and l' as part of gender, so
  // the definite article is not new even to that learner. This test pins the
  // inconsistency rather than papering over it: if somebody adds a1.04 to the
  // prereqs it fails here and the decision becomes visible.
  const unit = seed.units.find((u) => u.id === 'a1.11')!;
  strictEqual(
    (unit.prereqUnitIds ?? []).join(','),
    'a1.03',
    'a1.11 prereqUnitIds changed. Its canDo needs the definite article and only a1.03 is declared; ' +
    'see the note in articles-indefinis-lesson.ts before changing this.',
  );
  const assumed = (L!.grammarAssumed ?? []).join(' ');
  ok(/gender/i.test(assumed), 'the lesson does not declare that it assumes gender, which is the whole of its first clause');
});

test('the mission spine is the authored one, in order', () => {
  const types = L!.sections.map((s) => s.type);
  strictEqual(types[0], 'scene', 'the learner meets the stakes before any rule');
  strictEqual(types[types.length - 1], 'roundup', 'the badge closes the journey');
  strictEqual(types[types.length - 2], 'quiz', 'the exam sits just before the badge');
  strictEqual(
    sectionIds().join(' '),
    's01-scene s02-goals s03-forms s04-sort s05-des ' +
    's06-pairs s07-reading s08-ear s09-cases s10-check ' +
    's11-general s12-jobs s13-negation s14-traps ' +
    's15-words s16-flash s17-dictation s18-speak s19-scenario ' +
    's20-review s21-progress s22-quiz s23-roundup',
  );
  // The missions list gives each row one line and truncates with an ellipsis.
  // A coarse guard: the real constraint is rendered width, so this catches the
  // obviously-too-long and nothing subtler.
  const long = L!.sections.filter((s) => s.title.length > 27).map((s) => `${s.title} (${s.title.length})`);
  strictEqual(long.length, 0, `mission titles the list will truncate: ${long.join(', ')}`);
});

test('the acts weight the lesson toward discourse, not toward gender', () => {
  // The argument of the whole lesson, as a machine check. a1.03 teaches gender
  // over 26 missions and this one gets ONE mission for it. An edit that grew
  // the gender act would be rebuilding a1.03 badly, and would fail here.
  const acts = L!.acts ?? [];
  strictEqual(acts.length, 5);
  const ids = sectionIds();
  const claimed = acts.flatMap((a) => a.sections ?? []);
  for (const c of claimed) ok(ids.includes(c), `act names section "${c}", which is not in the lesson`);
  for (const i of ids) ok(claimed.includes(i), `section "${i}" is claimed by no act`);
  const twice = claimed.filter((c, i) => claimed.indexOf(c) !== i);
  strictEqual(twice.length, 0, `claimed by two acts: ${twice.join(', ')}`);
  // One tranche per act, or an act releases nothing and a tranche never fires.
  strictEqual((L!.deckTranche ?? []).length, acts.length);

  // Exactly one mission works the un/une choice as a sorting exercise.
  const genderDrills = L!.sections.filter((s) => s.type === 'groupDrill' && /un or une/i.test(s.title));
  strictEqual(genderDrills.length, 1, 'gender gets one revision mission; more than one is a1.03 rebuilt');

  // And the discourse act is the larger of the two.
  const act1 = acts.find((a) => a.id === 'act1')!;
  const act2 = acts.find((a) => a.id === 'act2')!;
  ok(act2.sections.length >= act1.sections.length - 1, 'the first-mention act must not be the small one');
});

test('the journey is genuinely multimodal', () => {
  const present = new Set(L!.sections.map((s) => s.type));
  for (const t of [
    'scene', 'goals', 'cardDeck', 'groupDrill', 'tapTable', 'reading', 'listening',
    'useCases', 'examples', 'commonErrors', 'vocabThemes', 'flashcards', 'dictation',
    'practice', 'scenario', 'reviewDeck', 'progressCheck', 'quiz', 'roundup',
  ] as const) {
    ok(present.has(t), `section type ${t} present`);
  }
  // One `practice` mission, deliberately. `practice.skill` is authored and read
  // by no component: PracticeVFView takes itemIds and nothing else, so two
  // practice sections render identically and read as a repeat (sons.06 m20/m23).
  strictEqual(L!.sections.filter((s) => s.type === 'practice').length, 1);
});

/* ─── The teaching claims ─────────────────────────────────────────────────── */

test('un, une and des are each taught and each tested', () => {
  // `des` is the one most likely to be dropped in a later edit: it is the form
  // with no English twin, so an author trimming for length reaches for it
  // first, and nothing else in the lesson would notice.
  const taught = strings(L!.sections);
  const tested = quizQuestions(theQuiz()).flatMap((q) => [q.q, ...(q.opts ?? []), ...(q.accept ?? []), q.answer ?? '', q.target ?? '']);
  for (const form of ['un', 'une', 'des'] as const) {
    const re = new RegExp(`(^|[\\s«"'’(])${form}\\s`, 'i');
    ok(taught.some((s) => re.test(s)), `"${form}" is never taught in any section`);
    ok(tested.some((s) => re.test(s)), `"${form}" is never tested in the exam`);
  }
  // And des has a mission of its own, not a bullet inside somebody else's.
  const desMission = L!.sections.find((s) => (s as { id?: string }).id === 's05-des');
  ok(desMission, 'the des mission is gone');
  ok(
    strings(desMission).filter((s) => /\bdes\s/i.test(s)).length >= 4,
    'the des mission no longer works des on more than a card or two',
  );
});

test('the first-mention rule is shown in a narrative, not stated on a card', () => {
  // THE assertion this file exists for.
  //
  // A single sentence cannot demonstrate first mention: the rule is about the
  // relationship between two mentions. So the lesson has to carry a passage in
  // which the SAME noun arrives on un/une/des and comes back on le/la/les.
  // Nothing in the corpus does this, so it was authored, and an edit that
  // trimmed the passage into a word list would silently remove the only place
  // the rule is actually visible.
  //
  // Written against the TEXT rather than against a count, deliberately: a count
  // of reading sections would still pass on a passage that had been gutted.
  const narrativeTypes = new Set(['scene', 'reading']);
  const candidates = L!.sections.filter((s) => narrativeTypes.has(s.type));
  ok(candidates.length >= 2, 'the lesson carries both a scene and a passage');

  const indef = /\b(?:un|une|des)\s+([\p{L}’'-]+)/giu;
  const defArt = /\b(?:le|la|les)\s+([\p{L}’'-]+)|\bl[’']([\p{L}-]+)/giu;

  let best = { id: '', nouns: [] as string[] };
  for (const s of candidates) {
    const text = strings(s).join(' ');
    const introduced = new Set<string>();
    for (const m of text.matchAll(indef)) introduced.add(stripPunct(m[1]));
    const referred = new Set<string>();
    for (const m of text.matchAll(defArt)) referred.add(stripPunct(m[1] ?? m[2]));
    const both = [...introduced].filter((n) => referred.has(n));
    if (both.length > best.nouns.length) best = { id: (s as { id?: string }).id ?? s.type, nouns: both };
  }
  ok(
    best.nouns.length >= 3,
    `no narrative section introduces a noun with un/une/des and refers back to it with le/la/les. ` +
    `Best was ${best.id || 'none'} with ${best.nouns.length} (${best.nouns.join(', ')}). ` +
    `Without this the lesson is a gender quiz.`,
  );

  // And the passage is the one carrying it, not only the scene: the scene shows
  // the rule FAILING and the passage shows it working, and the learner needs
  // both.
  const passage = section('s07-reading') as Extract<LessonSection, { type: 'reading' }>;
  const ptext = passage.text;
  const pIntro = new Set([...ptext.matchAll(indef)].map((m) => stripPunct(m[1])));
  const pRef = new Set([...ptext.matchAll(defArt)].map((m) => stripPunct(m[1] ?? m[2])));
  const paired = [...pIntro].filter((n) => pRef.has(n));
  ok(paired.length >= 3, `the passage pairs only ${paired.length} nouns (${paired.join(', ')}); it needs at least three`);
});

test('all four English-speaker errors are taught and tested', () => {
  // Each is a wrong sentence a learner will produce tomorrow, so each has to be
  // BOTH in a taught section and in the exam. A rule taught and never tested is
  // a card the learner swipes past; a rule tested and never taught is a trick.
  const ERRORS = [
    { key: 'generalisation takes the definite', teach: 's11-general', taught: /in general|whole of it|whole category/i, test: /aime le caf|aime café|d[ée]teste/i },
    { key: 'a profession after être takes nothing', teach: 's12-jobs', taught: /suis professeur|est avocate|est boulanger/i, test: /suis (un )?professeur|est (une )?avocate/i },
    { key: 'negation gives de', teach: 's13-negation', taught: /pas de (voiture|stylo|pommes)/i, test: /pas (de|une) voiture|pas de pommes/i },
    { key: 'des has no English equivalent', teach: 's05-des', taught: /des pommes|des livres|des amis/i, test: /des pommes|des livres|des croissants/i },
  ];
  const quizStrings = quizQuestions(theQuiz()).flatMap((q) => [q.q, ...(q.opts ?? []), ...(q.accept ?? []), q.answer ?? '']);
  for (const e of ERRORS) {
    const sec = section(e.teach);
    ok(sec, `the mission teaching "${e.key}" (${e.teach}) is gone`);
    ok(strings(sec).some((s) => e.taught.test(s)), `"${e.key}" is no longer taught in ${e.teach}`);
    ok(quizStrings.some((s) => e.test.test(s)), `"${e.key}" is no longer tested in the exam`);
  }
  // And each one has its own trap card, one per screen.
  const traps = section('s14-traps') as Extract<LessonSection, { type: 'commonErrors' }> & { swipe?: boolean; size?: string };
  strictEqual(traps.errors.length, 4, 'the four traps are the four errors; a fifth or a third means one moved');
  ok(traps.swipe === true, 'commonErrors without `swipe` falls through to a path that drew a BLANK mission on a1.01 m5');
  strictEqual(traps.size, 'lg');
});

test('nothing partitive is taught, and des in a buying frame is allowed', () => {
  // a1.29 owns du, de la and de l'. `des` is both the indefinite plural and the
  // partitive plural, so the temptation to complete the set here is real.
  //
  // Scoped to PRODUCTION SURFACES rather than to every string: ordinary French
  // prose uses `du` as a preposition ("révision du genre"), and an assertion
  // that fires on legitimate copy gets deleted rather than fixed.
  const partitive = productionSurfaces().filter((s) => /(^|\s)(du|de la|de l['’])\s/i.test(s));
  strictEqual(partitive.length, 0, `partitive forms on a production surface: ${partitive.slice(0, 3).join(' | ')}`);

  // And the word itself never appears as a taught category.
  const learner = [...strings(L!.sections), ...strings(L!.terms ?? {})];
  strictEqual(learner.filter((s) => /partitif|partitive/i.test(s)).length, 0, 'the partitive is named to an A1 learner');

  // The permitted case, asserted so a future tightening of the rule above does
  // not quietly delete legitimate content: showing des in a buying frame is
  // fine, because that is exactly the sentence an English speaker drops the
  // article from.
  ok(
    productionSurfaces().some((s) => /ach[eè]te des pommes/i.test(s)),
    "the buying-frame example is gone; « J'achète des pommes » is the sentence the des rule is taught on",
  );
});

test('no metalinguistic corpus row is used as a learner sentence', { skip: noSrc }, () => {
  // Three corpus rows are grammar notes wearing kind 'sentence'. They resolve
  // happily if a section names their id, and they are not French a learner
  // would ever say, so a listening or dictation mission built on one is
  // nonsense to hear and impossible to spell. The third states the exact rule
  // this lesson teaches, which is what makes it tempting.
  const named = new Set(strings(L).filter((s) => /^fr\./.test(s)));
  for (const id of SRC_META) {
    ok(!named.has(id), `${id} is a grammar note, not learner French, and this lesson names it: "${ITEMS.get(id)?.fr}"`);
  }
  // And the rows are still what the source says they are, so the exclusion is
  // pinned to the content rather than to three ids that may have been reused.
  for (const id of SRC_META) {
    const it = ITEMS.get(id);
    ok(it, `${id} is no longer in the seed; update METALANGUAGE_IDS`);
    ok(
      /article|masculin|féminin|quantité/i.test(it!.fr),
      `${id} no longer looks like a grammar note ("${it!.fr}") — recheck METALANGUAGE_IDS`,
    );
  }
});

test('the lesson teaches the choice without teaching the grammar vocabulary', () => {
  // a1.11 declares a prerequisite on a1.03, which teaches le and la as part of
  // gender and never names them as a category. So a learner arriving here has
  // no label to cash and naming one buys nothing. Scoped to sections and terms,
  // which is everything a learner reads: `grammarIntroduced` is addressed to
  // the curriculum and is better for using the precise words.
  const learnerFacing = [...strings(L!.sections), ...strings(L!.terms ?? {})];
  const jargon = learnerFacing.filter((s) => /\b(article (défini|indéfini)|élision|elision|masculin|féminin)\b/i.test(s));
  strictEqual(jargon.length, 0, `grammar vocabulary reached an A1 learner: ${jargon.slice(0, 2).join(' | ')}`);
});

/* ─── The corpus join ─────────────────────────────────────────────────────── */

test('every id the lesson names resolves, and every authored item is used', { skip: noSrc }, () => {
  for (const id of L!.itemIds) ok(ITEMS.has(id), `${id} is named by the lesson and is not in the seed`);
  // A dead corpus entry is 27 items of authoring that no learner reaches.
  const named = new Set(L!.itemIds);
  const dead = SRC_ARTICLES.filter((w) => !named.has(w.id)).map((w) => `${w.id} "${w.fr}"`);
  strictEqual(dead.length, 0, `authored but never named by the lesson: ${dead.join(', ')}`);
});

test('tranches release only items the lesson teaches, once each', () => {
  const tranches = L!.deckTranche ?? [];
  const flat = tranches.flat();
  const dupes = flat.filter((id, i) => flat.indexOf(id) !== i);
  strictEqual(dupes.length, 0, `released twice: ${[...new Set(dupes)].join(', ')}`);
  for (const id of flat) ok(L!.itemIds.includes(id), `tranche releases ${id}, which the lesson does not teach`);
  const unreleased = L!.itemIds.filter((id) => !flat.includes(id));
  strictEqual(unreleased.length, 0, `taught but never released to the SRS: ${unreleased.join(', ')}`);
  // The last act teaches nothing new, so it releases nothing.
  strictEqual(tranches[tranches.length - 1].length, 0, 'the closing act releases cards, which means it is teaching');
});

test('no two non-sentence items share a headword inside one theme', () => {
  // The flashcard hub keys decks on `fr` with the article stripped, so a
  // duplicate serves the same card twice and takes two SRS ratings for one
  // word. Computed the way flashhub-coverage.test.ts computes it, and scoped to
  // the collisions THIS lesson could have caused: the seed has pre-existing
  // ones in themes a1.11 does not touch.
  const mine = new Set(L!.itemIds);
  const themes = new Set([...mine].map((id) => ITEMS.get(id)!.theme));
  const norm = (s: string) => s.toLowerCase().replace(/^(le |la |les |l'|un |une |des )/, '').trim();
  const seen = new Map<string, string>();
  const dupes: string[] = [];
  for (const it of seed.items) {
    if (it.kind === 'sentence' || (it.cardType ?? 'vocab') !== 'vocab') continue;
    if (!themes.has(it.theme)) continue;
    const k = `${it.theme}::${norm(it.fr)}`;
    const prior = seen.get(k);
    if (prior && (mine.has(prior) || mine.has(it.id))) dupes.push(`${prior} vs ${it.id} ("${it.fr}")`);
    else if (!prior) seen.set(k, it.id);
  }
  strictEqual(dupes.length, 0, `this lesson duplicates a word already in its theme: ${dupes.slice(0, 3).join(' | ')}`);
});

test('practice and dictation drill only resolvable, correctly tagged corpus items', () => {
  // An item without the tag renders as a card the learner cannot be scored on,
  // which looks like a broken mission rather than a missing tag.
  const speak = section('s18-speak') as Extract<LessonSection, { type: 'practice' }>;
  strictEqual(speak.skill, 'speak');
  for (const id of speak.itemIds) {
    const it = ITEMS.get(id);
    ok(it, `${id} is drilled and is not in the corpus`);
    ok(it!.drills.includes('voiceflash'), `${id} "${it!.fr}" is spoken-drilled without the voiceflash tag`);
  }
  const dict = section('s17-dictation') as Extract<LessonSection, { type: 'dictation' }>;
  for (const id of dict.itemIds) {
    const it = ITEMS.get(id);
    ok(it, `${id} is dictated and is not in the corpus`);
    ok(it!.drills.includes('dictation'), `${id} "${it!.fr}" is dictated without the dictation tag`);
    // And every one of them assembles from WORD tiles, which is what makes this
    // an article exercise rather than a spelling one. dicteeMode is the real
    // function the renderer uses; nothing is reimplemented here.
    strictEqual(
      dicteeMode(it!.fr),
      'words',
      `"${it!.fr}" falls under the letter threshold, so the dictée spells it letter by letter ` +
      `instead of asking the learner to place the article`,
    );
  }
});

/* ─── Notation ────────────────────────────────────────────────────────────── */

test('every respelling this lesson displays follows the nasal convention', { skip: noSrc }, () => {
  // `un` is the most repeated word in the lesson and its shipped respelling
  // across the corpus is `uhn`, which teaches a consonant that is not
  // pronounced. 21 of the 37 reused rows respell it that way, which is why the
  // lesson reads its screens from RESPELL rather than from the corpus rows.
  //
  // hasPlainNasalFor is imported rather than re-derived: it already knows that
  // a written double nasal (pomme, banane) is a real pronounced consonant and
  // a single one (un, gant) is not.
  const bad = Object.values(SRC_RESPELL)
    .filter((dd) => hasPlainNasalFor(dd.fr, dd.respell))
    .map((dd) => `${dd.fr} ${dd.respell}`);
  strictEqual(bad.length, 0, `nasal closed with a plain n or m: ${bad.join(' | ')}`);
  // Brackets, because the density validator checks the rendered form.
  const unbracketed = Object.values(SRC_RESPELL).filter((dd) => !isDelimitedRespell(dd.respell));
  strictEqual(unbracketed.length, 0, `respelling outside brackets: ${unbracketed.map((x) => x.respell).join(' | ')}`);
  // And the one this all exists for.
  ok(SRC_RESPELL['un hôtel'], 'the un hôtel respelling is gone');
  ok(/uhⁿ/.test(SRC_RESPELL['un hôtel'].respell), `un is respelled "${SRC_RESPELL['un hôtel'].respell}", which does not use the superscript n`);

  // Any respelling inlined directly in a section, too, in case a later edit
  // stops going through the map.
  const inline: { fr: string; respell: string }[] = [];
  const walk = (node: unknown) => {
    if (Array.isArray(node)) return node.forEach(walk);
    if (!node || typeof node !== 'object') return;
    const o = node as Record<string, unknown>;
    const fr = o.fr ?? o.front ?? o.target ?? o.word;
    if (typeof o.respell === 'string' && typeof fr === 'string') inline.push({ fr, respell: o.respell });
    Object.values(o).forEach(walk);
  };
  walk(L!.sections);
  const badInline = inline.filter((x) => hasPlainNasalFor(x.fr, x.respell)).map((x) => `${x.fr} ${x.respell}`);
  strictEqual(badInline.length, 0, `inlined respelling breaks the nasal rule: ${badInline.join(' | ')}`);
});

/* ─── The passage ─────────────────────────────────────────────────────────── */

test('every reading glossary entry underlines a word that is really there', () => {
  // A gloss that matches nothing is invisible, which is the same
  // authored-and-rendered-by-nothing failure the lesson contract exists to
  // catch. Ten entries across four shipped lessons were dead this way.
  // segmentSentence is the real matcher, imported rather than copied.
  const r = section('s07-reading') as Extract<LessonSection, { type: 'reading' }>;
  ok(r.questionsInModal && r.questions?.length, 'reading without questionsInModal never reaches the glossary renderer');
  const keys = new Set((r.glossary ?? []).flatMap((g) => glossKeys(g.word)));
  const matched = new Set<string>();
  for (const sentence of r.text.split(/(?<=[.!?»])\s+/)) {
    for (const seg of segmentSentence(sentence, keys)) if (seg.key) matched.add(seg.key);
  }
  for (const g of r.glossary ?? []) {
    ok(glossKeys(g.word).some((k) => matched.has(k)), `glossary entry "${g.word}" underlines nothing in the passage`);
  }
  // Both halves of at least three pairs are glossed, because the pairing is
  // what the passage is for and a glossary that explains only the new form
  // leaves the interesting half unexplained.
  const glossed = new Set((r.glossary ?? []).map((g) => g.word.toLowerCase()));
  for (const [a, b] of [['un hôtel', "l'hôtel"], ['une chambre', 'la chambre'], ['des croissants', 'les croissants']]) {
    ok(glossed.has(a) && glossed.has(b), `the passage glosses only one half of "${a}" / "${b}"`);
  }
});

test('the reading passage keeps English outside the guillemets and authors no line break', () => {
  // Paul's A1 rule, set on a1.01's passage: anything not inside « » is English.
  // It matters more here than anywhere, because this passage's whole job is to
  // make two mentions of one noun visible and a learner decoding the stage
  // directions will miss the pair.
  //
  // And PassagePage splits on `text.split(/(?<=[.!?»])\s+/)` and renders the
  // pieces inline, so an authored `\n` is consumed as whitespace and silently
  // discarded. a1.01 authors them and loses them.
  const r = section('s07-reading') as Extract<LessonSection, { type: 'reading' }>;
  ok(!/\n/.test(r.text), 'the passage authors a line break, which PassagePage discards');
  const outside = r.text.replace(/«[^»]*»/gu, ' ');
  // The French function words that would give away a French sentence outside
  // the quotes. Names and place names are fine.
  const french = outside.match(/\b(le|la|les|un|une|des|elle|il|dans|avec|pour|est|sont|qui|que)\b/giu) ?? [];
  strictEqual(french.length, 0, `French outside the guillemets: ${french.slice(0, 5).join(', ')}`);
  // And every French line really is inside them.
  const quoted = r.text.match(/«[^»]*»/gu) ?? [];
  ok(quoted.length >= 8, `the passage carries only ${quoted.length} spoken French lines`);
});

/* ─── The exam ────────────────────────────────────────────────────────────── */

test('the exam is round-based, reachable, and every question teaches', () => {
  const quiz = theQuiz();
  const qs = quizQuestions(quiz);
  ok((quiz.rounds ?? []).length >= 4, 'the exam is not round-based, so a failed round fires no drill');
  strictEqual(L!.sections.filter((s) => s.type === 'quiz').length, 1, 'a second quiz section is unreachable questions');
  // a1.04 shipped 3 questions with 0 whys and sits on a waiver list in
  // lesson-contract.test.ts. That list can only shrink.
  const noWhy = qs.filter((q) => !q.why?.trim());
  strictEqual(noWhy.length, 0, `${noWhy.length}/${qs.length} questions have no why (first: "${noWhy[0]?.q ?? ''}")`);
  const noRef = qs.filter((q) => !q.ref);
  strictEqual(noRef.length, 0, `${noRef.length}/${qs.length} questions have no ref`);
  const present = new Set(sectionIds());
  for (const q of qs) ok(present.has(q.ref!), `a question refs "${q.ref}", which is not a section of this lesson`);
  // And a `why` that only restates the answer teaches nothing.
  const lazy = qs.filter((q) => (q.why ?? '').trim().split(/\s+/).length < 8);
  strictEqual(lazy.length, 0, `a why too short to teach: ${lazy.map((q) => q.why).join(' | ')}`);
});

test('at most half the exam is mcq, and errorSpot carries the production load', () => {
  const qs = quizQuestions(theQuiz());
  const mcq = qs.filter((q) => (q.format ?? 'mcq') === 'mcq').length;
  ok(mcq * 2 <= qs.length, `${mcq}/${qs.length} questions are mcq; recognition can be passed by elimination`);
  // Every one of the four English-speaker errors is a wrong sentence a learner
  // would produce, so errorSpot is the format that tests the thing itself.
  const errorSpot = qs.filter((q) => q.format === 'errorSpot').length;
  ok(errorSpot >= 6, `only ${errorSpot} errorSpot questions; this lesson's errors are all producible wrong sentences`);
  // The canDo is production, not recognition.
  const produce = qs.filter((q) => q.format === 'typeIn' || q.format === 'errorSpot' || q.format === 'speak').length;
  ok(produce >= 10, `only ${produce} questions ask the learner to produce rather than pick`);
});

test('every free-text question accepts the answer it displays', () => {
  // matchesAccept is the real comparator (fold strips accents, case,
  // punctuation and all whitespace), imported rather than reimplemented. A
  // question whose own canonical answer is rejected marks a correct learner
  // wrong, and nothing else in the suite would notice.
  for (const q of quizQuestions(theQuiz())) {
    if (!q.answer) continue;
    ok(matchesAccept(q.answer, q.accept), `"${q.q}" displays "${q.answer}" and does not accept it`);
  }
});

test('every round fires a drill, and every drill is reachable', () => {
  // drillForRound walks a round's `targets` and stops at the FIRST one that
  // resolves to a drill. A drill named only in second place is dead content, so
  // each teaching drill has to be the first resolving target of some round.
  const drillForTarget = new Map((L!.errorTriggers ?? []).map((t) => [t.id, t.drill]));
  const drillIds = new Set((L!.drills ?? []).map((d) => d.id));
  for (const t of L!.errorTriggers ?? []) {
    ok(drillIds.has(t.drill), `trigger ${t.id} names drill "${t.drill}", which does not exist`);
    if (t.retest) ok(drillIds.has(t.retest), `trigger ${t.id} names retest "${t.retest}", which does not exist`);
    for (const on of t.detectOn) {
      const head = on.split('/')[0];
      ok(sectionIds().includes(head), `trigger ${t.id} watches "${on}", which starts from no section of this lesson`);
    }
  }
  const fired = new Set(
    (theQuiz().rounds ?? [])
      .map((r) => (r.targets ?? []).map((t) => drillForTarget.get(t)).find(Boolean))
      .filter(Boolean) as string[],
  );
  const teaching = (L!.drills ?? []).filter((d) => !d.id.startsWith('retest-'));
  const orphans = teaching.filter((d) => !fired.has(d.id)).map((d) => d.id);
  strictEqual(orphans.length, 0, `drill(s) no round can fire: ${orphans.join(', ')} — reorder that round's targets`);
  ok(fired.size === teaching.length, `${fired.size} of ${teaching.length} drills are reachable`);
  // A drill that names corpus items must name real ones.
  for (const d of L!.drills ?? []) {
    for (const id of d.items ?? []) ok(ITEMS.has(id), `drill ${d.id} names ${id}, which is not in the corpus`);
  }
});

/* ─── Presentation ────────────────────────────────────────────────────────── */

test('every mission carries its French subtitle and nearly all narrate', () => {
  const noSub = L!.sections.filter((s) => !(s as { frSub?: string }).frSub).map((s) => (s as { id?: string }).id);
  strictEqual(noSub.length, 0, `missions with no French subtitle: ${noSub.join(', ')}`);
  const narrated = L!.sections.filter((s) => narrationOf(s)).length;
  ok(narrated >= L!.sections.length - 4, `only ${narrated} of ${L!.sections.length} missions narrate`);
});

test('every glossary term is surfaced somewhere, and no card is overloaded', () => {
  // The renderer shows three chips and collapses the rest; seven sons.06
  // sections are in that state. And a term defined and never surfaced is an
  // explanation the learner never reaches.
  const defined = Object.keys(L!.terms ?? {});
  const used = new Set(L!.sections.flatMap((s) => (s as { terms?: string[] }).terms ?? []));
  for (const k of defined) ok(used.has(k), `term "${k}" is defined and surfaced on no mission`);
  for (const k of used) ok(defined.includes(k), `term chip "${k}" is not in the glossary`);
  const overloaded = L!.sections
    .filter((s) => ((s as { terms?: string[] }).terms ?? []).length > 3)
    .map((s) => `${(s as { id?: string }).id} (${((s as { terms?: string[] }).terms ?? []).length})`);
  strictEqual(overloaded.length, 0, `more than three term chips: ${overloaded.join(', ')}`);
  // A term's worked examples must resolve, or the chip opens on a blank line.
  for (const [k, t] of Object.entries(L!.terms ?? {})) {
    for (const ex of t.examples ?? []) ok(ITEMS.has(ex.itemId), `term "${k}" cites ${ex.itemId}, which is not in the corpus`);
  }
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
  // And the sentence-level drill comes AFTER the narrative. A card that shows
  // « un hôtel » and asks for the article has tested gender, not discourse, so
  // the drill only means anything once the passage has established the choice.
  const passage = sectionIds().indexOf('s07-reading');
  const drill = sectionIds().indexOf('s10-check');
  ok(drill > passage, 'the first-mention drill runs before the passage that gives it meaning');
});

test('the progress card counts the journey it sits in', () => {
  const ix = L!.sections.findIndex((s) => (s as { id?: string }).id === 's21-progress');
  ok(ix > 0, 'the progress card is in the journey');
  const card = L!.sections[ix] as Extract<LessonSection, { type: 'progressCheck' }>;
  const stat = (k: string) => card.stats?.find((x) => x.k === k)?.v;
  strictEqual(stat('Nouns and lines met'), String(L!.itemIds.length));
  strictEqual(stat('Missions done'), `${ix} of ${L!.sections.length}`);
  strictEqual(stat('Exam rounds ahead'), String(theQuiz().rounds?.length ?? 0));
  strictEqual(stat('Pass mark'), `${theQuiz().passMark}%`);
  // And the prose must not restate them. Saying a number twice on one card is
  // two chances to be wrong.
  ok(!/\b\d+\b/.test(card.body ?? ''), `the progress body restates a figure: ${card.body}`);
});

test('the audio brief names the contrast that must be one take', () => {
  // un against une, and des against les, are the two minimal pairs in this
  // lesson and both are one vowel apart. Recorded across two takes a pair is
  // not comparable and the learner hears the difference between the
  // performances. That instruction is invisible once the clips are delivered,
  // so it has to survive in the brief.
  const recorded = L!.audio?.recorded ?? [];
  ok(recorded.length > 0, 'the lesson asks the studio for recordings');
  ok(recorded.some((r) => /one take/i.test(r.desc)), 'the one-take instruction is missing from the brief');
  ok(
    recorded.some((r) => /over-articulate|nasal/i.test(r.desc)),
    'the brief does not warn against over-articulating un, which would destroy the contrast',
  );
  // Every recordingId a section names must be one the lesson actually requests.
  const known = new Set(recorded.map((r) => r.id));
  const named = strings(L!.sections).filter((s) => s.startsWith('rec-'));
  for (const id of named) ok(known.has(id), `a section names recording "${id}", which the lesson never asks for`);
  // And no section declares `autoplay`, which is in schema.ts and implemented
  // in no component.
  const autoplay = JSON.stringify(L!.sections).includes('"autoplay"');
  ok(!autoplay, 'a section declares autoplay, which nothing reads');
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
  // And it has to reach the mission where a weak reframe falls apart. A
  // generalisation is the ultimate "you already know what I mean", so a reframe
  // about newness rather than about the listener has nothing to say there.
  ok(
    strings(section('s11-general')).some((s) => s.includes(SRC_REFRAME)),
    'the reframe does not reach the generalisation mission, which is where it has to hold',
  );
});

test('every authored mention pair is reciprocal and really is a pair', { skip: noSrc }, () => {
  // The pairs are what the whole lesson turns on, and a half-deleted pair would
  // leave a first mention with nothing to come back to. Built from `pairWith`
  // in the corpus rather than listed, so this checks the structure rather than
  // a copy of it.
  ok(SRC_PAIRS.length >= 3, `only ${SRC_PAIRS.length} mention pairs authored`);
  const byId = new Map(SRC_ARTICLES.map((w) => [w.id, w]));
  for (const [a, b] of SRC_PAIRS) {
    const first = byId.get(a);
    const second = byId.get(b);
    ok(first && second, `pair ${a} / ${b} names an entry that does not exist`);
    strictEqual(second!.pairWith, a, `${b} does not point back at ${a}`);
    ok(['un', 'une', 'des'].includes(first!.article), `${a} "${first!.fr}" is the first half and is not indefinite`);
    ok(['le', 'la', 'les'].includes(second!.article), `${b} "${second!.fr}" is the second half and is not definite`);
    // Both halves are taught, or the pair is decoration.
    ok(L!.itemIds.includes(a) && L!.itemIds.includes(b), `pair ${a} / ${b} is authored and not taught`);
  }
});

test('the speak and dictation sets are the ones the source names', { skip: noSrc }, () => {
  const speak = section('s18-speak') as Extract<LessonSection, { type: 'practice' }>;
  strictEqual(speak.itemIds.join(','), SRC_SPEAK.join(','), 'the spoken set drifted between source and seed');
  const dict = section('s17-dictation') as Extract<LessonSection, { type: 'dictation' }>;
  strictEqual(dict.itemIds.join(','), SRC_DICTATION.join(','), 'the dictée set drifted between source and seed');
});

test('once published, the seed copy matches what was authored', { skip: noSrc }, () => {
  // Before the batch runs the seed is behind, and this is the test that says
  // so. A seed copy that has fallen behind the authored source is the failure
  // mode that shipped a1.01.l1 with twelve unreachable questions.
  //
  // Every figure is DERIVED from the source. A hardcoded count fails on itself
  // the first time content legitimately changes, and the fix is then to edit
  // the test, which is how a test comes to certify a bug.
  strictEqual(L!.version, SRC!.version, `seed is v${L!.version}, source is v${SRC!.version}`);
  strictEqual(L!.sections.length, SRC!.sections.length, 'section count drifted');
  strictEqual(L!.itemIds.length, SRC!.itemIds.length, 'itemId count drifted');
  strictEqual((L!.acts ?? []).length, (SRC!.acts ?? []).length, 'act count drifted');
  strictEqual((L!.drills ?? []).length, (SRC!.drills ?? []).length, 'drill count drifted');
  strictEqual((L!.sheets ?? []).length, (SRC!.sheets ?? []).length, 'sheet count drifted');
  strictEqual((L!.errorTriggers ?? []).length, (SRC!.errorTriggers ?? []).length, 'trigger count drifted');
  strictEqual(Object.keys(L!.terms ?? {}).length, Object.keys(SRC!.terms ?? {}).length, 'glossary size drifted');
  strictEqual(
    sectionIds().join(','),
    SRC!.sections.map((s) => (s as { id?: string }).id).join(','),
    'the mission spine drifted between source and seed',
  );
  const srcQuiz = SRC!.sections.find(
    (s): s is Extract<LessonSection, { type: 'quiz' }> => s.type === 'quiz',
  )!;
  strictEqual(quizQuestions(theQuiz()).length, quizQuestions(srcQuiz).length, 'quiz question count drifted');
  strictEqual(
    (L!.deckTranche ?? []).flat().length,
    (SRC!.deckTranche ?? []).flat().length,
    'the SRS release schedule drifted',
  );
  // The corpus half: every authored entry reached the seed, with the same word.
  for (const w of SRC_ARTICLES) {
    const it = ITEMS.get(w.id);
    ok(it, `${w.id} "${w.fr}" was authored and is not in the seed — run the merge`);
    strictEqual(it!.fr, w.fr, `${w.id}: source says "${w.fr}", seed says "${it!.fr}"`);
  }
});
