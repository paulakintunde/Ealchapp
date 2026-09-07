// Guards a1.04.l1 "Les articles définis", rebuilt from a six-section v1-shaped
// lesson into a 24-mission journey.
//
// Referential integrity across the whole corpus is already proven by
// seed.backcompat.test.ts, and the cross-lesson rules by lesson-contract.test.ts.
// This file pins the intent specific to THIS lesson, so a later edit that
// flattens it back into a reference card, drops the plural, or lets the sons
// jargon in goes red here rather than in front of a learner.
//
// Two sources are checked, not one. The SEED is what a learner receives. The
// AUTHORED SOURCE in ealch-admin is what the next author edits. Both are read
// here and the parity test at the bottom fails when they drift, which is the
// failure mode that has twice cost this project real work.
//
// Counts are DERIVED from the authored source wherever a count is asserted. A
// hardcoded number fails on itself the first time content legitimately changes,
// and the fix is then to edit the test, which is how a test comes to certify a
// bug. Where a floor IS stated (the minimum number of generic-use examples, the
// mcq ceiling) it is a design decision being pinned, not a count being
// restated, and it is documented where it appears.
//
// Nothing here reimplements app logic. The dictée mode, the decoy bank and the
// glossary matcher are imported from the modules the renderer uses. An earlier
// version of a1.01's test inlined its own copy of the glossary lookup, which
// made it a second implementation free to drift, and it had copied the version
// that was already broken, so it passed while the feature was dead.
//
// ── The four defects this file exists to keep out ──────────────────────────
//
// All four shipped in the v2 lesson, reached a device, and passed the entire
// suite:
//
//   Four em dashes. sons-alphabet.test.ts carries a comment claiming its
//   em-dash check covers "the ENTIRE seed" and the code four lines below it
//   walks sons.01 only, so nothing enforced the ban here. It is enforced per
//   lesson, by that lesson's own test. This is that test.
//
//   Two U+203F tie characters in « les‿amis », which render as a low
//   underscore on a Pixel 6, so the learner read les_amis.
//
//   commonErrors with no `swipe` and no `size`, which draws a scrolling list
//   rather than one trap per screen.
//
//   A `table` in the flow, which only survived because the section had no
//   `layer` and so table-in-core could not fire.
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
  items: { id: string; kind: string; level: string; theme: string; fr: string; en: string; gender?: string; drills: string[] }[];
};

const L = seed.lessons.find((l) => l.id === 'a1.04.l1');
const ITEMS = new Map(seed.items.map((i) => [i.id, i]));

// The admin repo is a sibling checkout. Skip cleanly when it is absent (the app
// can be built on its own) rather than failing the suite.
let SRC: Lesson | null = null;
let SRC_REFRAME = '';
let SRC_GENERIC_PAIRS: { id: string; fr: string; enBare: string }[] = [];
let SRC_H_MUET: string[] = [];
let SRC_H_ASPIRE: string[] = [];
let SRC_PRESERVED: string[] = [];
let SRC_SPEAK: string[] = [];
let SRC_DICTATION: string[] = [];
try {
  const lesson = await import('../../../ealch-admin/scripts/data/articles-lesson.ts');
  SRC = lesson.ARTICLES_LESSON as Lesson;
  SRC_REFRAME = lesson.REFRAME as string;
  SRC_GENERIC_PAIRS = lesson.ARTICLES_GENERIC_PAIRS as typeof SRC_GENERIC_PAIRS;
  SRC_H_MUET = lesson.ARTICLES_H_MUET_IDS as string[];
  SRC_H_ASPIRE = lesson.ARTICLES_H_ASPIRE_IDS as string[];
  SRC_PRESERVED = lesson.ARTICLES_PRESERVED_IDS as string[];
  SRC_SPEAK = lesson.ARTICLES_SPEAK_IDS as string[];
  SRC_DICTATION = lesson.ARTICLES_DICTATION_IDS as string[];
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

/** A corpus item id, which is not authored copy. Item ids legitimately contain
 *  "elision" (fr.sons.elision.NNN) because that is the theme the word is filed
 *  under, and the jargon ban is on what a learner READS. */
const isItemId = (s: string) => /^fr\.[a-z0-9]+\.[a-z0-9-]+\.\d{3,}$/.test(s);

const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const sectionIds = () => L!.sections.map((s) => (s as { id?: string }).id).filter(Boolean) as string[];
const section = (id: string) => L!.sections.find((s) => (s as { id?: string }).id === id);
const theQuiz = () =>
  L!.sections.find((s): s is Extract<Lesson['sections'][number], { type: 'quiz' }> => s.type === 'quiz')!;

/** The four articles this lesson's canDo promises.
 *
 *  This IS a hardcoded list, deliberately and uniquely. It is not a count that
 *  can drift with content, it is the definition of the unit: "Can pick le, la,
 *  l' or les for any noun they know". Deriving it from the lesson would be
 *  asking the lesson whether it teaches what it teaches. */
const FOUR_ARTICLES = ['le', 'la', "l'", 'les'] as const;

test('a1.04.l1 exists and is well-formed', () => {
  ok(L, 'a1.04.l1 is present in the seed');
  strictEqual(validateLesson(L).length, 0);
  strictEqual(L!.unitId, 'a1.04');
  strictEqual(L!.level, 'a1');
  strictEqual(L!.tag, 'A1 · LEÇON 04');
  // The id is load-bearing beyond this lesson: curriculum.ts maps it onto the
  // home screen's weak-spot taxonomy and there are exactly two entries in that
  // map. A rebuild under a new id would silently unhook the classifier.
  const curriculum = readFileSync(resolve(here, 'curriculum.ts'), 'utf8');
  ok(
    /'a1\.04\.l1':\s*'genre'/.test(curriculum),
    'a1.04.l1 is no longer mapped to the genre weak spot; a miss in this quiz now teaches the classifier nothing',
  );
});

test('the a1.04 unit links the lesson, and its own promise is untouched', () => {
  const unit = seed.units.find((u) => u.id === 'a1.04');
  ok(unit, 'a1.04 unit exists');
  ok(unit!.lessonIds.includes('a1.04.l1'), 'unit lists the lesson, so the Den can reach it');
  // The Den advertises these before the learner opens anything. Rebuilding the
  // lesson is not a licence to rewrite the promise it was built against.
  strictEqual(unit!.title, 'The Definite Articles');
  strictEqual(unit!.canDo, "Can pick le, la, l' or les for any noun they know");
});

test('this is a v2 lesson, which the shipped one was not', () => {
  // isV2Lesson gates the whole density validator on `acts`. The lesson this
  // replaced had none, so no crowding rule ever ran against it, which is how a
  // table in the flow and a four-item practice section both shipped.
  ok((L!.acts ?? []).length > 0, 'the lesson declares acts');
  ok(L!.reframe, 'the lesson declares a reframe');
  ok((L!.deckTranche ?? []).length > 0, 'the SRS release schedule is authored');
  ok((L!.sheets ?? []).length > 0, 'reference sheets are authored');
  ok((L!.errorTriggers ?? []).length > 0, 'error triggers are authored');
  ok((L!.drills ?? []).length > 0, 'remediation drills are authored');
  ok(Object.keys(L!.terms ?? {}).length > 0, 'the glossary is authored');
  ok(L!.grammarAssumed?.length, 'the lesson says what it expects the learner to have');
  ok(L!.grammarIntroduced?.length, 'and what it introduces, on a lesson that is entirely grammar');
  // A rebuild that restarts its own numbering reads as a rollback in the log.
  ok(L!.version > 2, `the shipped lesson was v2; this is v${L!.version}`);
});

test('the mission spine is the authored one, in order', () => {
  const types = L!.sections.map((s) => s.type);
  strictEqual(types[0], 'scene', 'the learner meets the failure before any rule');
  strictEqual(types[types.length - 1], 'roundup', 'the badge closes the journey');
  strictEqual(types[types.length - 2], 'quiz', 'the exam sits just before the badge');
  // The spine, named rather than counted, so an insertion in the wrong place is
  // a failure that says where.
  strictEqual(
    sectionIds().join(' '),
    's01-scene s02-goals s03-nothing s04-generic s05-four s06-order s07-grid ' +
    's08-plural s09-plural-deck s10-listen s11-vowel s12-h s13-hflash ' +
    's14-traps s15-flash s16-dictation s17-speak s18-cases s19-scenario s20-reading ' +
    's21-review s22-progress s23-quiz s24-roundup',
  );
  // The missions list gives each row one line and truncates with an ellipsis.
  //
  // A COARSE guard, deliberately. The real constraint is rendered width, not
  // character count: "What You Will Be Able To Do" is 27 characters of narrow
  // letters and fits, while "The Same Number, Three Ways" is also 27 and did
  // not. So this catches the obviously-too-long and nothing subtler, and a
  // title anywhere near 27 still wants a look on a phone.
  const long = L!.sections.filter((s) => s.title.length > 27).map((s) => `${s.title} (${s.title.length})`);
  strictEqual(long.length, 0, `mission titles the list will truncate: ${long.join(', ')}`);
  // The overview headline is drawn in the same place. The shipped one was
  // "The Definite Articles: Le, La, L' and Les" at 41 characters.
  ok(L!.overview, 'the overview block is authored');
  ok(
    L!.overview!.titleEn.length <= 27,
    `overview titleEn is ${L!.overview!.titleEn.length} characters and the list truncates it`,
  );
});

test('no table survives in the flow, and the grid lives in a sheet', () => {
  // A `table` at layer 'core' fails the density validator by design. The
  // shipped lesson OPENED on one, and it only passed because the section
  // carried no `layer` at all.
  const inFlow = L!.sections.filter((s) => s.type === 'table');
  strictEqual(inFlow.length, 0, 'a table is in the mission flow; tables belong in a reference sheet');
  const sheetTables = (L!.sheets ?? []).flatMap((sh) => (sh.sections ?? []).filter((s) => s.type === 'table'));
  ok(sheetTables.length > 0, 'the 2x2 grid was dropped rather than moved to a sheet');
  for (const sh of L!.sheets ?? []) {
    strictEqual(sh.layer, 'deep', `sheet ${sh.id} is not at layer deep, so it is not exempt from the core density caps`);
  }
  // And the sheet must be reachable from the flow, or it is a page nothing
  // links to.
  const linked = new Set(L!.sections.map((s) => (s as { sheetId?: string }).sheetId).filter(Boolean));
  for (const sh of L!.sheets ?? []) {
    ok(linked.has(sh.id), `sheet ${sh.id} is authored but no mission previews it`);
  }
});

test('commonErrors draws one trap per screen', () => {
  // MissionSection.tsx names THIS lesson in the comment about it. Without
  // `swipe` the section renders as a scrolling list, and on a1.01 the same
  // shape hit a break that fell out of the switch and drew a blank mission.
  const traps = L!.sections.find(
    (s): s is Extract<Lesson['sections'][number], { type: 'commonErrors' }> => s.type === 'commonErrors',
  );
  ok(traps, 'the lesson keeps a commonErrors mission');
  strictEqual((traps as { swipe?: boolean }).swipe, true, 'commonErrors has no `swipe`, so it renders as a scrolling list');
  strictEqual((traps as { size?: string }).size, 'lg', 'commonErrors has no `size`');
  // Both shipped errors are real and are kept, and the worst one is added.
  const wrongs = traps!.errors.map((e) => e.wrong);
  ok(wrongs.some((w) => /le\s+eau/i.test(w)), 'the le eau trap was dropped');
  ok(wrongs.some((w) => /les\s+ami\b/i.test(w)), 'the les ami trap was dropped');
  ok(
    wrongs.some((w) => /j['’]aime\s+caf[ée]/i.test(w)),
    'the bare-noun trap is missing, and it is the one the learner will make today',
  );
  for (const e of traps!.errors) ok(e.why?.trim(), `trap "${e.wrong}" explains nothing`);
});

/* ─── The lesson's actual claim ───────────────────────────────────────────── */

test('the generic use is TAUGHT, not merely mentioned', { skip: noSrc }, () => {
  // This is the assertion that stops the rebuild sliding back into a form
  // lesson. The shipped lesson mentioned the generic use once, in half a gloss,
  // on one example card, and was otherwise one hundred percent the four cells.
  //
  // The claim is made precisely rather than by scanning for the word "the": the
  // gloss of « Les chats adorent dormir au soleil » is "Cats love sleeping in
  // the sun", which HAS a `the` in it, sitting on a different noun. So each
  // pair names the one noun that carries an article in French and stands bare
  // in English, and every part of that is checked against the corpus item's own
  // fields rather than against a copy in the authoring file.
  ok(SRC_GENERIC_PAIRS.length >= 12, `only ${SRC_GENERIC_PAIRS.length} generic-use pairs authored; a dozen is the floor`);
  for (const p of SRC_GENERIC_PAIRS) {
    const it = ITEMS.get(p.id);
    ok(it, `generic-use pair names ${p.id}, which is not in the corpus`);
    ok(it!.fr.includes(p.fr), `${p.id}: "${p.fr}" is not in the item's French ("${it!.fr}")`);
    ok(it!.en.includes(p.enBare), `${p.id}: "${p.enBare}" is not in the item's English ("${it!.en}")`);
    ok(
      !new RegExp(`\\b(the|a|an)\\s+${esc(p.enBare)}`, 'i').test(it!.en),
      `${p.id}: the English gloss puts an article on "${p.enBare}", so this pair demonstrates nothing ("${it!.en}")`,
    );
    ok(/^(le|la|les|l['’])/i.test(p.fr), `${p.id}: "${p.fr}" carries no definite article`);
    ok(L!.itemIds.includes(p.id), `${p.id} demonstrates the lesson's claim and the lesson does not declare it`);
  }
  // And the examples mission must quote them verbatim rather than paraphrasing.
  // A paraphrase would quietly turn evidence into illustration.
  const ex = section('s04-generic');
  ok(ex && ex.type === 'examples', 's04-generic is the examples mission');
  const rows = (ex as Extract<Lesson['sections'][number], { type: 'examples' }>).examples;
  ok(rows.length >= 12, `the generic-use mission shows ${rows.length} lines; a dozen is the floor`);
  for (const r of rows) {
    const match = seed.items.find((i) => i.fr === r.fr);
    ok(match, `example "${r.fr}" is not a corpus sentence; the lesson invented its own evidence`);
    strictEqual(match!.en, r.en, `example "${r.fr}" paraphrases the corpus gloss`);
  }
});

test('all four articles are taught and tested', () => {
  // Given the corpus runs 794 items beginning "le " against 69 beginning
  // "les ", the plural is the one a later edit would silently lose, and the
  // canDo would then be lying.
  const taughtFr = L!.itemIds.map((id) => ITEMS.get(id)?.fr ?? '');
  const quizText = quizQuestions(theQuiz()).map((q) =>
    [q.q, q.answer ?? '', ...(q.opts ?? []), ...(q.accept ?? []), q.target ?? ''].join(' '),
  );
  for (const art of FOUR_ARTICLES) {
    const pattern = art === "l'" ? /(^|\s)l['’]/ : new RegExp(`(^|\\s)${art}\\s`, 'i');
    ok(
      taughtFr.some((fr) => pattern.test(fr)),
      `no item this lesson declares is taught with "${art}"`,
    );
    ok(
      quizText.some((t) => pattern.test(t)),
      `the exam never asks about "${art}"`,
    );
  }
  // The plural specifically gets a mission of its own rather than a row.
  ok(section('s08-plural'), 'there is a mission on the plural');
  ok(section('s09-plural-deck'), 'and a deck of plural nouns');
  const plurals = L!.itemIds.map((id) => ITEMS.get(id)!).filter((i) => /^les /i.test(i.fr));
  ok(plurals.length >= 6, `only ${plurals.length} plural items; the plural is the form the corpus under-supplies`);
  // Both genders, or the mission's whole point (that les ignores gender) is
  // demonstrated on one side only.
  ok(plurals.some((i) => i.gender === 'm'), 'no masculine plural is taught');
  ok(plurals.some((i) => i.gender === 'f'), 'no feminine plural is taught');
});

test('the h split is taught as two lists, and every noun is on the right side', { skip: noSrc }, () => {
  // The article is the only place this difference is ever visible, so a word on
  // the wrong side is an error the learner cannot detect for themselves.
  // Checked against each corpus item's OWN `fr`, never against a second copy of
  // the list.
  ok(SRC_H_MUET.length >= 5 && SRC_H_ASPIRE.length >= 5, 'both h lists are substantial enough to be lists');
  for (const id of SRC_H_MUET) {
    const it = ITEMS.get(id);
    ok(it, `h list names ${id}, which is not in the corpus`);
    ok(/^l['’]h/i.test(it!.fr), `${id} "${it!.fr}" is taught as an h that lets the article shorten, and its own entry disagrees`);
    ok(L!.itemIds.includes(id), `${id} is on an h list the lesson does not declare`);
  }
  for (const id of SRC_H_ASPIRE) {
    const it = ITEMS.get(id);
    ok(it, `h list names ${id}, which is not in the corpus`);
    ok(/^(le|la|les)\sh/i.test(it!.fr), `${id} "${it!.fr}" is taught as an h that keeps the article whole, and its own entry disagrees`);
    ok(L!.itemIds.includes(id), `${id} is on an h list the lesson does not declare`);
  }
  // No word may appear on both sides, which would be a contradiction the
  // learner has no way to resolve.
  const both = SRC_H_MUET.filter((id) => SRC_H_ASPIRE.includes(id));
  strictEqual(both.length, 0, `on both h lists: ${both.join(', ')}`);
  ok(section('s12-h'), 'the h split has a mission');
  ok(section('s13-hflash'), 'and a recall deck, because it is a closed list rather than a rule');
  ok(L!.terms?.hSplit, 'and a glossary term saying there is no rule behind it');
});

test('the three-question procedure is a steps mission, not prose', () => {
  const st = section('s06-order');
  ok(st && st.type === 'steps', 's06-order is a steps section');
  const steps = (st as Extract<Lesson['sections'][number], { type: 'steps' }>).steps;
  strictEqual(steps.length, 3, 'the procedure is exactly the three branches; the exceptions belong elsewhere');
  // Order is the whole content: plural, then vowel sound, then gender. A
  // reordering would make the lesson wrong while leaving every other test green.
  ok(/plural/i.test(steps[0]), 'the first question is not the plural one');
  ok(/vowel/i.test(steps[1]), 'the second question is not the vowel-sound one');
  ok(/gender/i.test(steps[2]), 'the third question does not reach the gender');
  ok(
    steps.slice(0, 2).every((s) => /gender/i.test(s)),
    'the first two steps do not say out loud that the gender is not needed, which is the reassurance the mission exists for',
  );
});

/* ─── House rules, enforced here because nothing else enforces them ──────── */

test('no em dash anywhere, on a lesson that shipped four', () => {
  // sons-alphabet.test.ts claims seed-wide coverage in a comment and walks
  // sons.01 only. This is the enforcement for a1.04.
  const emDash = strings(L).filter((s) => s.includes('—'));
  strictEqual(emDash.length, 0, `em dash found in: ${emDash.slice(0, 3).join(' | ')}`);
});

test('no U+203F tie character, on a lesson that shipped two', () => {
  // It renders as a low underscore on a Pixel 6, so « les‿amis » read as
  // les_amis. Known debt in sons.09 and sons.10; not carried into this rebuild.
  const ties = strings(L).filter((s) => s.includes('‿'));
  strictEqual(ties.length, 0, `U+203F found in: ${ties.slice(0, 3).join(' | ')}`);
});

test('no honest/honesty in authored copy', () => {
  const honest = strings(L).filter((s) => /honest/i.test(s));
  strictEqual(honest.length, 0, `honest/honesty found in: ${honest.slice(0, 3).join(' | ')}`);
});

test('the lesson teaches the behaviour without teaching the sons jargon', () => {
  // a1.04 declares a prerequisite on a1.03 and none on the sons track, so a
  // learner arriving from noun gender may never have opened it. sons.07 and
  // sons.10 own these two words and teach them at length; naming them here buys
  // a label the learner cannot cash. a1.02 pins the same rule for the same
  // reason. The shipped a1.04 used both.
  const jargon = strings(L).filter((s) => !isItemId(s) && /\b(liaison|élision|elision)\b/i.test(s));
  strictEqual(jargon.length, 0, `sons jargon reached an A1 learner: ${jargon.slice(0, 2).join(' | ')}`);
});

/* ─── Structure ───────────────────────────────────────────────────────────── */

test('every act claims its sections, exactly once, with no ghosts', () => {
  const acts = L!.acts ?? [];
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

test('tranches release only items the lesson teaches, once each', () => {
  const tranches = L!.deckTranche ?? [];
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
});

test('the rebuild drops nothing the shipped lesson taught', { skip: noSrc }, () => {
  // The v2 lesson declared four itemIds. They were too few, and they were not
  // wrong: a rebuild that quietly loses them takes content away from a learner
  // in the name of improving it.
  for (const id of SRC_PRESERVED) {
    ok(L!.itemIds.includes(id), `${id} was taught by the shipped lesson and this rebuild drops it`);
  }
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
  // Every term's worked examples must resolve, or the glossary card is blank
  // below the fold.
  for (const [k, t] of Object.entries(L!.terms ?? {})) {
    for (const ex of t.examples ?? []) {
      ok(ITEMS.has(ex.itemId), `term "${k}" names example ${ex.itemId}, which is not in the corpus`);
    }
  }
});

test('every mission carries its French subtitle and nearly all narrate', () => {
  const missing = L!.sections.filter((s) => !s.frSub);
  strictEqual(missing.length, 0, `sections without frSub: ${missing.map((s) => s.type).join(', ')}`);
  const content = L!.sections.filter((s) => s.type !== 'quiz');
  const spoken = content.filter((s) => (narrationOf(s)?.text.length ?? 0) > 0);
  ok(spoken.length >= content.length - 2, `${spoken.length}/${content.length} missions narrated`);
});

/* ─── The exam ────────────────────────────────────────────────────────────── */

test('the exam asks the learner to produce, not only to recognise', () => {
  const qs = quizQuestions(theQuiz());
  ok(qs.length >= 16, `a lesson this size wants a real exam, got ${qs.length}`);
  ok((theQuiz().rounds?.length ?? 0) >= 3, 'the exam is round-based so remediation can target a round');

  // A four-option question offering le, la, l' and les can be answered by
  // elimination three times out of four, and it never once asks the learner to
  // supply the word from nothing, which is the exact moment they currently
  // fail. So the ceiling here is deliberately well under the usual half.
  const mcq = qs.filter((q) => (q.format ?? 'mcq') === 'mcq').length;
  ok(mcq * 3 <= qs.length, `${mcq}/${qs.length} questions are mcq; production formats have been squeezed out`);

  // The formats that make the learner supply an article from nothing. These are
  // the only two surfaces in the app that do: `practice` renders through
  // PracticeVFView, which shows the French with its article already on it and
  // never receives the section's `skill` at all.
  const produced = qs.filter((q) => q.format === 'typeIn' || q.format === 'errorSpot').length;
  ok(produced * 2 >= qs.length, `only ${produced}/${qs.length} questions ask the learner to write the answer`);
  ok(qs.some((q) => q.format === 'errorSpot'), 'no errorSpot question; it is the one format that shows the learner their own error');

  for (const q of qs) {
    ok(typeof q.why === 'string' && q.why.length > 0, `"${q.q}" explains its answer`);
    ok(q.ref, `"${q.q}" names the section that taught it`);
    // A `why` longer than about two lines is cut on the card. QuizRoundsView
    // sets no numberOfLines, so this is card height rather than a clamp, but
    // the observable result is the same: a1.02 lost the last three words of a
    // round-1 explanation on a Pixel 6.
    ok((q.why ?? '').length <= 115, `"${q.q}" has a ${q.why!.length}-character why, which the card will cut`);
    if (Array.isArray(q.opts) && q.opts.length) {
      strictEqual(new Set(q.opts).size, q.opts.length, `options distinct for "${q.q}"`);
      ok(q.correct != null && q.correct >= 0 && q.correct < q.opts.length, `correct in range for "${q.q}"`);
    }
    // Free-text answers are compared through fold(), which strips accents,
    // case, punctuation and whitespace, so an accept entry differing only by
    // those is redundant. What matters is that the answer the card SHOWS after
    // a wrong attempt is one the grader would have taken.
    if (q.format === 'typeIn' || q.format === 'errorSpot') {
      const accept = q.accept ?? [];
      ok(accept.length > 0, `"${q.q}" is free-text but accepts nothing`);
      ok(q.answer && accept.includes(q.answer), `"${q.q}" shows an answer it would not accept`);
    }
    if (q.format === 'speak') ok(q.target, `"${q.q}" is a speak question with no target`);
    // listenChoose speaks question.audio?.clip ?? opts[correct], so a question
    // with no clip reads its OPTIONS aloud in a French voice.
    if (q.format === 'listenChoose') {
      ok(q.audio?.clip, `"${q.q}" is a listening question with nothing to play`);
      ok(
        !(q.opts ?? []).some((o) => /\b(the|it|is|of|and)\b/i.test(o)),
        `"${q.q}" offers English options to a French voice`,
      );
    }
  }
});

test('listenChoose is used where it earns its place and not decoratively', () => {
  // The one audible thing in this lesson is the plural in front of a vowel.
  // Everywhere else a listening question would be testing something the eye can
  // answer, so two or three used precisely beat eight used for variety.
  const qs = quizQuestions(theQuiz());
  const listen = qs.filter((q) => q.format === 'listenChoose');
  ok(listen.length >= 2, 'the one audible claim in this lesson is never tested by ear');
  ok(listen.length <= qs.length / 4, `${listen.length}/${qs.length} listenChoose questions is decorative`);
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
  // A drill that works over words names corpus ids, not display strings. A
  // display string here validates as a broken id and renders an empty drill.
  for (const d of L!.drills ?? []) {
    for (const id of d.items ?? []) ok(ITEMS.has(id), `drill "${d.id}" names ${id}, which is not in the corpus`);
    if (d.q) ok(d.why?.trim(), `retest "${d.id}" asks a question and explains nothing`);
  }
});

/* ─── Drills, dictée, reading ─────────────────────────────────────────────── */

test('practice and dictation drill only resolvable, correctly tagged corpus items', () => {
  for (const s of L!.sections) {
    if (s.type !== 'practice' && s.type !== 'dictation') continue;
    ok(s.itemIds.length > 0, `${s.type} "${s.title}" names items`);
    for (const id of s.itemIds) {
      ok(ITEMS.has(id), `${s.type} item ${id} exists`);
      ok(L!.itemIds.includes(id), `${s.type} item ${id} is declared on the lesson`);
    }
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
  //
  // The dictée matters more in this lesson than in most, because it is the only
  // surface besides the exam's free-text questions where the learner has to
  // PLACE the article rather than recognise it. `practice` cannot do that job:
  // PracticeVFView shows the French with the article already attached.
  const d = L!.sections.find(
    (s): s is Extract<Lesson['sections'][number], { type: 'dictation' }> => s.type === 'dictation',
  )!;
  ok(d.itemIds.length >= 4, 'the dictée is worth the mission');
  for (const id of d.itemIds) {
    const fr = ITEMS.get(id)!.fr;
    strictEqual(dicteeMode(fr), 'words', `"${fr}" would spell letter by letter`);
    ok(dicteeWords(fr).length >= 4, `"${fr}" is too short to be worth assembling`);
    ok(wordDecoys(fr).length > 0, `"${fr}" gets no decoy tiles, so "use everything" solves it`);
    ok(/(^|\s)(le|la|les|l['’])/i.test(fr), `"${fr}" carries no definite article, so it tests nothing this lesson taught`);
  }
  const frs = d.itemIds.map((id) => ITEMS.get(id)!.fr);
  ok(frs.some((f) => /^Les /.test(f)), 'no dictée sentence opens on a plural article');
  ok(frs.some((f) => /l['’]/i.test(f)), 'no dictée sentence carries a shortened article');
});

test('the reading mission renders its glossary, and every entry underlines something', () => {
  // MissionSection routes reading to ReadingMission, and so to PassagePage
  // which draws the underlines, only when questionsInModal is set WITH
  // questions. a1.01 shipped five entries down the fallback path and they
  // rendered nowhere.
  //
  // The matcher is the REAL one. gloss.logic.test.ts runs the same check over
  // every lesson; this keeps it pinned for this one.
  const s = L!.sections.find(
    (x): x is Extract<Lesson['sections'][number], { type: 'reading' }> => x.type === 'reading',
  )!;
  ok(s.glossary?.length, 'the reading mission carries a glossary');
  ok(s.questionsInModal && s.questions?.length, 'and the flag that makes anything render it');
  const keys = new Set((s.glossary ?? []).flatMap((g) => glossKeys(g.word)));
  const hit = new Set(segmentSentence(s.text, keys).filter((x) => x.key).map((x) => x.key!));
  for (const g of s.glossary ?? []) {
    ok(glossKeys(g.word).some((k) => hit.has(k)), `glossary entry "${g.word}" underlines nothing in the passage`);
  }
  // This is the one lesson where an entry naming the BARE noun against an
  // elided passage is the entire teaching: the learner taps the noun and is
  // told the article they can see is the word English would not have said.
  ok(
    (s.glossary ?? []).some((g) => !/^(le|la|les|l['’])/i.test(g.word) && new RegExp(`l['’]${esc(g.word)}`, 'i').test(s.text)),
    'no glossary entry names a bare noun the passage elides an article onto, which is this lesson\'s best available entry',
  );
});

test('the reading passage keeps English outside the guillemets and French inside', () => {
  // Paul's A1 rule, 2026-08-04: anything not inside « » is context, and context
  // is instruction. The learner's reading effort belongs on the exchange rather
  // than on decoding the stage directions.
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
  // authored-and-unrendered failure this project keeps shipping.
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

test('the progress card counts the journey it sits in', () => {
  // These figures used to be hand-typed display strings, and a display string
  // is validated against nothing. They are derived at authoring time; this
  // asserts the shipped copy agrees with the lesson around it.
  const ix = L!.sections.findIndex((s) => (s as { id?: string }).id === 's22-progress');
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
  // Every contrast in this lesson is one unstressed syllable: le against la,
  // les amis against les livres, le hibou against l'hôtel. Recorded across two
  // takes they are not comparable and the mission teaches the difference
  // between the recordings. That instruction has to survive in the brief,
  // because it is invisible once the clips are delivered.
  const recorded = L!.audio?.recorded ?? [];
  ok(recorded.length > 0, 'the lesson asks the studio for recordings');
  const contrast = recorded.filter((r) => /one take/i.test(r.desc));
  ok(contrast.length >= 3, 'the one-take instruction is missing from the contrast briefs');
  // And the request not to over-articulate. In real speech le is a schwa that
  // half disappears; a careful reading teaches a pronunciation the learner will
  // never hear again, and being small and fast is part of why it gets dropped.
  ok(
    recorded.some((r) => /over-articulat/i.test(r.desc)),
    'no brief asks the studio to leave the articles unstressed',
  );
  // Every recordingId a section names must be one the lesson actually requests.
  const known = new Set(recorded.map((r) => r.id));
  const named = strings(L!.sections).filter((s) => s.startsWith('rec-'));
  for (const id of named) ok(known.has(id), `a section names recording "${id}", which the lesson never asks for`);
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
  // It has to name the DECISION rather than the form. A reframe that says "le
  // for masculine, la for feminine" is the reference card this lesson was
  // rebuilt to stop being.
  strictEqual(L!.reframe, SRC_REFRAME, 'the seed reframe is not the authored one');
});

test('the speak and dictée sets the source names are the ones the seed drills', { skip: noSrc }, () => {
  const speak = L!.sections.find(
    (s): s is Extract<Lesson['sections'][number], { type: 'practice' }> => s.type === 'practice' && s.skill === 'speak',
  )!;
  strictEqual(speak.itemIds.join(','), SRC_SPEAK.join(','), 'the speak set drifted between source and seed');
  const dict = L!.sections.find(
    (s): s is Extract<Lesson['sections'][number], { type: 'dictation' }> => s.type === 'dictation',
  )!;
  strictEqual(dict.itemIds.join(','), SRC_DICTATION.join(','), 'the dictée set drifted between source and seed');
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
