// a1.24.l1 "Le corps": the lesson's own contract.
//
// Everything here is measured against the SHIPPED seed rather than against the
// authoring files, because the seed is what the app loads. The authoring files
// can be right while the merge dropped something, and that is the failure this
// file exists to catch.
//
// `corps` is inside SEED_CUT.themes (313 published, 313 in the seed before this
// lesson, 319 after), so for this one theme the seed is a COMPLETE read of
// Postgres and these figures can be trusted directly.
//
// ── The assertions that are worth the most ────────────────────────────────
//
// The last two are the ones people skip. `l'oreille` is deliberately NOT
// repaired and `la jambe` carries a nasal the shared checker cannot see: both
// look like oversights at a glance, so both are pinned, and a future author's
// "consistency fix" goes red instead of shipping.
import { test } from 'node:test';
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import seed from './seed.json' with { type: 'json' };
import { hasPlainNasalFor } from './density.logic.ts';
import { matchesAccept } from './answer.logic.ts';
import { quizQuestions } from './schema.ts';
import type { Item, Lesson, LessonSection, QuizQuestion } from './schema.ts';

const LESSON_ID = 'a1.24.l1';
const UNIT_ID = 'a1.24';

const lesson = (seed.lessons as unknown as Lesson[]).find((l) => l.id === LESSON_ID)!;
const unit = (seed.units as unknown as { id: string; themes?: string[]; lessonIds?: string[] }[])
  .find((u) => u.id === UNIT_ID)!;
const items = seed.items as unknown as Item[];
const byId = new Map(items.map((i) => [i.id, i]));
const corps = items.filter((i) => i.theme === 'corps');

const C = (n: string) => `fr.a1.corps.${n}`;

/** Every string reachable in a value, at any depth. */
function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, out));
  return out;
}

const section = (id: string): LessonSection =>
  lesson.sections.find((s) => (s as { id?: string }).id === id)!;

/** The surfaces a learner PRODUCES from. Deliberately excludes `reading` and
 *  `scene`, which legitimately carry a doctor, a waiting room and a pharmacist
 *  as context. A guard written over every string fires on those and gets
 *  deleted by the next author, which is worse than no guard at all. */
const producedText = strings([
  lesson.sections.filter((s) => s.type !== 'reading' && s.type !== 'scene'),
  lesson.drills,
]).join(' ');

const allText = strings(lesson).join(' ');
const quiz = quizQuestions(lesson.sections.find((s) => s.type === 'quiz') as never) as QuizQuestion[];

/* ─── The set ──────────────────────────────────────────────────────────────*/

// Named individually rather than counted. A count passes while a part quietly
// disappears, and the shape of the set is exactly what a rewrite erodes.
const THE_FOURTEEN: [string, string][] = [
  [C('001'), 'la tête'], [C('002'), 'le bras'], [C('003'), 'la main'],
  [C('004'), 'le dos'], [C('005'), 'le ventre'], [C('006'), 'le genou'],
  [C('014'), 'les cheveux'], [C('018'), 'le nez'], [C('019'), 'la bouche'],
  [C('021'), 'la dent'], [C('023'), "l'oreille"], [C('026'), 'le cou'],
  [C('037'), 'la jambe'], [C('040'), 'le pied'],
];

test('the lesson is in the seed and attached to its unit', () => {
  ok(lesson, `${LESSON_ID} is not in the seed`);
  deepStrictEqual(unit.lessonIds, [LESSON_ID], 'the unit does not name this lesson');
  strictEqual(lesson.unitId, UNIT_ID);
  strictEqual(lesson.tag, 'A1 · LEÇON 27', 'the tag must match the unit spine seq of 27');
});

test('the dead `sante` theme was dropped rather than populated', () => {
  // It held 0 rows in Postgres AND 0 in the seed, which is the only condition
  // under which a declared theme is dead rather than merely outside the cut.
  deepStrictEqual(unit.themes, ['corps'], 'a1.24 should declare corps only');
  strictEqual(
    items.filter((i) => i.theme === 'sante').length, 0,
    'nothing should have been authored into `sante`: it was dropped, not filled',
  );
});

test('every one of the fourteen parts is TAUGHT, in a deck, by name', () => {
  // Scoped to the three teaching decks rather than to the whole lesson.
  //
  // A first version of this test asked only whether the word appeared anywhere
  // in the lesson, and mutation testing walked straight through it: deleting
  // `le ventre` from its deck left it in the vocab hub, the flashcards and the
  // reference sheet, so the assertion stayed green while the part was no longer
  // taught. Appearing in a glossary is not being taught.
  const decks = ['s03-face', 's04-trunk', 's05-legs']
    .map((id) => strings(section(id)).join(' '))
    .join(' ');
  for (const [id, fr] of THE_FOURTEEN) {
    const row = byId.get(id);
    ok(row, `${id} (${fr}) is missing from the corpus`);
    strictEqual(row!.fr, fr, `${id} should be "${fr}"`);
    ok(lesson.itemIds.includes(id), `${id} (${fr}) is not declared by the lesson`);
    ok(decks.includes(fr), `${fr} is declared but is taught in no deck`);
  }
  // And the decks hold the whole set and nothing else, so a fifteenth part
  // cannot be quietly added without this file being updated too.
  const deckCards = ['s03-face', 's04-trunk', 's05-legs'].flatMap(
    (id) => (section(id) as unknown as { cards: { fr?: string }[] }).cards.map((c) => c.fr),
  );
  deepStrictEqual(
    deckCards.slice().sort(),
    THE_FOURTEEN.map(([, fr]) => fr).slice().sort(),
    'the teaching decks do not hold exactly the fourteen parts',
  );
});

/* ─── The frame, and the pair on one screen ────────────────────────────────*/

test('the avoir mal a frame is taught with BOTH sides on ONE screen', () => {
  // The inversion is the lesson. Splitting the English from the French across
  // two cards destroys it, because the whole point is which slot the person
  // occupies. So this asserts the section id AND that both strings live in it.
  const s = section('s08-frame');
  ok(s, 's08-frame is missing');
  const text = strings(s).join(' ');
  ok(text.includes("J'ai mal à la tête."), 's08-frame does not show the French');
  ok(text.includes('My head hurts.'), 's08-frame does not show the English beside it');
  ok(
    text.includes("j'ai") || text.includes("J'ai"),
    's08-frame does not name where the person sits',
  );
});

test('the describing frame is taught with BOTH sides on ONE screen', () => {
  const s = section('s14-look');
  ok(s, 's14-look is missing');
  const text = strings(s).join(' ');
  ok(text.includes("J'ai les yeux bleus."), 's14-look does not show the French');
  ok(text.includes('My eyes are blue.'), 's14-look does not show the English beside it');
});

test('all four shapes of the little word appear, each by name', () => {
  // à l' is the one a rewrite drops, because it looks like a special case of
  // à la. It is not: it had ZERO sentence evidence in Postgres and was authored
  // for this lesson at .299.
  for (const shape of ['à la tête', 'au dos', 'aux dents', "à l'oreille"]) {
    ok(allText.includes(shape), `the shape "${shape}" appears nowhere`);
  }
  ok(byId.get(C('299')), "the authored à l' sentence is missing from the corpus");
  strictEqual(byId.get(C('299'))!.fr, "J'ai mal à l'oreille.");
});

/* ─── Where the possessive stops ───────────────────────────────────────────*/

test('the possessive is taught as the WRONG answer, and never as correct', () => {
  // a1.17 taught that a possessive excludes the article. This is where French
  // takes the slot back, three units later, and it looks like an inconsistency
  // unless it is named out loud.
  const errors = (section('s11-notmine') as { errors?: { wrong: string; right: string }[] }).errors ?? [];
  ok(errors.length >= 3, 's11-notmine should carry at least three errors');
  ok(
    errors.some((e) => e.wrong.includes('Mon dos fait mal')),
    'the pharmacy sentence is not taught as the error it is',
  );
  ok(
    errors.some((e) => e.wrong.includes('Mes yeux sont bleus')),
    'the describing half of the possessive error is not taught',
  );
  // Every `right` is the article form, never a possessive.
  for (const e of errors) {
    ok(
      !/\b(mon|ma|mes|ses|son|sa)\b/i.test(e.right),
      `the corrected form still carries a possessive: "${e.right}"`,
    );
  }
});

test('no teaching surface presents a possessive body part as correct', () => {
  // Scoped to the DECKS and TABLES, not to every string: the quiz shows the
  // wrong form on purpose inside an errorSpot stem, and the reading passage
  // legitimately says « son fils » and « son dos ».
  const taught = strings(
    lesson.sections.filter((s) => s.type === 'cardDeck' || s.type === 'tapTable' || s.type === 'vocabThemes'),
  ).join(' ');
  for (const bad of ['mon dos fait mal', 'ses yeux sont bleus', 'ma tête fait mal']) {
    ok(!taught.toLowerCase().includes(bad), `"${bad}" appears on a teaching surface as if correct`);
  }
});

/* ─── The colours ──────────────────────────────────────────────────────────*/

/** Every string in a value, with the dotted path that reaches it. The
 *  forbidden-form rule needs the PATH, not just the text: an agreed `marron`
 *  is legal in exactly three places and illegal everywhere else, and a check
 *  that only looks at the string cannot tell those apart. */
function pathedStrings(v: unknown, path = '', out: { path: string; s: string }[] = []) {
  if (typeof v === 'string') out.push({ path, s: v });
  else if (Array.isArray(v)) v.forEach((x, i) => pathedStrings(x, `${path}[${i}]`, out));
  else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) pathedStrings(x, path ? `${path}.${k}` : k, out);
  }
  return out;
}

test('marron never carries an ending except where the lesson is teaching against it', () => {
  // The single highest-value assertion in this file. A learner who has just
  // learned agreement will write marrons, and so will a future author.
  //
  // Three places may legally show the wrong form, because showing it IS the
  // teaching: the `wrong` half of a commonErrors card, a quiz question's stem,
  // and a quiz or drill distractor. Anywhere else it is a defect.
  const LEGAL = /(\.errors\[\d+\]\.wrong$)|(questions\[\d+\]\.q$)|(\.opts\[\d+\]$)/;
  for (const bad of ['marrons', 'marronne', 'châtains', 'châtain clairs']) {
    const illegal = pathedStrings(lesson)
      .filter((x) => x.s.includes(bad))
      .filter((x) => !LEGAL.test(x.path));
    deepStrictEqual(
      illegal.map((x) => `${x.path}: ${x.s}`), [],
      `"${bad}" appears somewhere it is not being taught against`,
    );
  }
  // And the wrong form IS shown somewhere, or the lesson never confronts it.
  ok(
    pathedStrings(lesson).some((x) => /\.errors\[\d+\]\.wrong$/.test(x.path) && x.s.includes('marrons')),
    'the lesson never shows « les yeux marrons » as the error it is',
  );
});

test('the two invariable colours are taught, on a person, from the corpus', () => {
  strictEqual(byId.get(C('297'))!.fr, 'Il a les yeux marron.');
  strictEqual(byId.get(C('298'))!.fr, 'Elle a les cheveux châtain clair.');
  const s = strings(section('s16-marron')).join(' ');
  ok(s.includes('Il a les yeux marron.'), 's16-marron does not show the brown-eye sentence');
  ok(s.includes('Elle a les cheveux châtain clair.'), 's16-marron does not show the compound');
});

test('colours on les yeux and les cheveux carry the plural s, by name', () => {
  // Asserted individually, because a well-meaning future author will "fix" one
  // of these to the singular and every one of them is silent.
  for (const form of ['bleus', 'verts', 'blonds', 'longs', 'frisés']) {
    ok(allText.includes(form), `the plural form "${form}" appears nowhere`);
  }
});

/* ─── The neighbours ───────────────────────────────────────────────────────*/

test("a2.28's consultation vocabulary is not taught", () => {
  // Written against PRODUCTION SURFACES. corps.202-293 is full of doctors and
  // prescriptions and the reading passage legitimately uses some of it.
  for (const w of ['ordonnance', 'consultation', 'traitement', 'symptôme', 'stéthoscope', 'radiographie']) {
    ok(
      !new RegExp(`\\b${w}`, 'i').test(producedText),
      `"${w}" belongs to a2.28 and appears on a production surface`,
    );
  }
});

test("a1.25's reflexive body verbs are not drilled", () => {
  for (const w of ['se laver', 'se brosser', 'je me lave', 'elle se brosse']) {
    ok(
      !producedText.toLowerCase().includes(w),
      `"${w}" belongs to a1.25 and appears on a production surface`,
    );
  }
});

test("a1.14 and a1.16's adjectives are not taught here", () => {
  for (const w of ['grand', 'petit', 'jeune', 'vieux', 'mince', 'gros']) {
    ok(
      !new RegExp(`\\b${w}s?\\b`, 'i').test(producedText),
      `"${w}" belongs to the adjectives lessons and appears on a production surface`,
    );
  }
});

/* ─── The respellings ──────────────────────────────────────────────────────*/

test('every row this lesson names passes the REAL nasal checker', () => {
  // Imported, never reimplemented. A guard that reimplements the thing it
  // guards is free to drift from it.
  const named = corps.filter((r) => lesson.itemIds.includes(r.id) && r.respell);
  ok(named.length >= 15, 'expected the lesson to name at least fifteen respelled rows');
  const flagged = named.filter((r) => hasPlainNasalFor(r.fr, r.respell!));
  deepStrictEqual(
    flagged.map((r) => `${r.id} ${r.fr} [${r.respell}]`), [],
    'row(s) this lesson names still close a nasal with a plain n or m',
  );
});

test('la jambe carries the superscript the shared checker CANNOT see', () => {
  // hasPlainNasalFor needs the n or m to end a token. [LAH ZHAHNB] ends in B,
  // so the checker passes it while it is wrong, and calling the checker alone
  // would prove nothing here. This is the assertion that does the work.
  const row = byId.get(C('037'))!;
  strictEqual(row.fr, 'la jambe');
  ok(row.respell!.includes('ⁿ'), `la jambe should carry the superscript, has [${row.respell}]`);
  strictEqual(
    hasPlainNasalFor('la jambe', 'LAH ZHAHNB'), false,
    'if the checker now catches this, the by-name assertion can be relaxed',
  );
});

test('the other three nasal repairs landed', () => {
  for (const [id, fr] of [[C('003'), 'la main'], [C('005'), 'le ventre'], [C('021'), 'la dent']] as const) {
    const row = byId.get(id)!;
    strictEqual(row.fr, fr);
    ok(row.respell!.includes('ⁿ'), `${fr} should carry the superscript, has [${row.respell}]`);
  }
});

test('the article casing convention holds across every row this lesson names', () => {
  // 47 rows in this theme carry an UPPERCASE article and 82 a lowercase one.
  // The lowercase form is correct: an unstressed article is not the stressed
  // syllable. Only the rows THIS lesson names were repaired, so this assertion
  // is scoped the same way.
  const named = corps.filter((r) => lesson.itemIds.includes(r.id) && r.respell);
  const shouty = named.filter((r) => /^(LAH|LUH|LAY|LES|LE|LA) /.test(r.respell!));
  deepStrictEqual(
    shouty.map((r) => `${r.id} [${r.respell}]`), [],
    'row(s) this lesson names still carry an uppercase article in the respelling',
  );
});

test("l'oreille is deliberately NOT repaired, and stays that way", () => {
  // It was already correct: [loh-RAY] is lowercase and has no nasal. It looks
  // like the one row somebody forgot, which is exactly why it is pinned. A
  // future author's "consistency fix" to [LOH-RAY] goes red here.
  const row = byId.get(C('023'))!;
  strictEqual(row.fr, "l'oreille");
  strictEqual(row.respell, 'loh-RAY', "l'oreille was deliberately left alone and has been changed");
});

/* ─── The corpus ───────────────────────────────────────────────────────────*/

test('no two non-sentence rows in `corps` share an fr', () => {
  // Computed the way flashhub-coverage.test.ts computes it: article stripped.
  // Two rows sharing an fr in one theme is one card served twice.
  const strip = (f: string) => f.toLowerCase().replace(/^(le |la |les |l'|un |une |des |du |de l')/, '').trim();
  const by = new Map<string, string[]>();
  for (const r of corps.filter((r) => r.kind !== 'sentence')) {
    const k = strip(r.fr);
    by.set(k, [...(by.get(k) ?? []), r.id]);
  }
  const collide = [...by.entries()].filter(([, v]) => v.length > 1);
  deepStrictEqual(collide.map(([k, v]) => `${k}: ${v.join('+')}`), [], 'duplicate fr inside theme corps');
});

test('les yeux was authored and does not collide with the singular', () => {
  const plural = byId.get(C('294'))!;
  const singular = byId.get(C('017'))!;
  strictEqual(plural.fr, 'les yeux');
  strictEqual(singular.fr, "l'œil");
  ok(plural.respell!.includes('ZYUH'), 'les yeux should use the liaison respelling');
  // The decision this lesson took against fr.a1.mots-essentiels.002, which
  // stores it WITHOUT the liaison. Pinned so it is not silently normalised.
  strictEqual(plural.respell, 'lay ZYUH');
});

test('the authored rows are exactly the six that were measured absent', () => {
  const authored = [C('294'), C('295'), C('296'), C('297'), C('298'), C('299')];
  for (const id of authored) ok(byId.get(id), `${id} is missing from the seed`);
  strictEqual(
    corps.filter((r) => Number(r.id.split('.').pop()) >= 294).length, 6,
    'the owned id range should hold exactly six rows',
  );
});

test('every declared itemId is on a screen', () => {
  // a1.08 shipped 43 itemIds named by nothing at all, released to spaced
  // repetition and drawn by no component. The check has to ask "did the learner
  // see it", not "does this id resolve".
  const shown = strings([lesson.sections, lesson.drills, lesson.sheets]).join(' ');
  const orphan = lesson.itemIds.filter((id) => {
    const row = byId.get(id);
    return !shown.includes(id) && !(row && shown.includes(row.fr));
  });
  deepStrictEqual(orphan, [], 'itemId(s) declared but on no screen');
});

test('tranches release every taught item exactly once and nothing untaught', () => {
  const flat = (lesson.deckTranche ?? []).flat();
  strictEqual(flat.length, new Set(flat).size, 'a tranche releases the same item twice');
  strictEqual((lesson.deckTranche ?? []).length, (lesson.acts ?? []).length, 'tranches are not act-aligned');
  deepStrictEqual(
    flat.filter((id) => !lesson.itemIds.includes(id)), [],
    'a tranche releases something the lesson does not teach',
  );
  deepStrictEqual(
    lesson.itemIds.filter((id) => !flat.includes(id)), [],
    'a taught item is never released to spaced repetition',
  );
});

/* ─── The spine ────────────────────────────────────────────────────────────*/

test('the spine is in order and the acts claim every section once', () => {
  const ids = lesson.sections.map((s) => (s as { id?: string }).id!);
  strictEqual(ids.length, 28, 'expected 28 sections');
  strictEqual(new Set(ids).size, ids.length, 'two sections share an id');
  const claimed = (lesson.acts ?? []).flatMap((a) => a.sections);
  strictEqual(claimed.length, new Set(claimed).size, 'two acts claim the same section');
  deepStrictEqual(claimed, ids, 'the acts do not walk the sections in order');
  strictEqual((lesson.acts ?? []).length, 6, 'expected 6 acts');
});

test('the reframe is authored the exact number of times decided', () => {
  // Against an explicit constant, NOT a figure derived from the lesson. A
  // derived count compares the content to itself and passes on any rewording.
  const EXPECTED_SECTIONS = 7;
  const hits = lesson.sections.filter((s) => strings(s).some((x) => x.includes(lesson.reframe!)));
  strictEqual(
    hits.length, EXPECTED_SECTIONS,
    `the reframe should carry in exactly ${EXPECTED_SECTIONS} sections`,
  );
  strictEqual(lesson.reframe, 'The person goes in the verb. The body part takes le, la or les.');
});

/* ─── The exam ─────────────────────────────────────────────────────────────*/

test('the exam is at most half mcq and every question teaches', () => {
  strictEqual(quiz.length, 24, 'expected 24 questions');
  const mcq = quiz.filter((q) => q.format === 'mcq').length;
  ok(mcq <= quiz.length / 2, `${mcq}/${quiz.length} are mcq, which is over half`);
  const sectionIds = new Set(lesson.sections.map((s) => (s as { id?: string }).id));
  for (const q of quiz) {
    ok(q.why, `no why: "${q.q}"`);
    ok(q.ref && sectionIds.has(q.ref), `ref "${q.ref}" names no section: "${q.q}"`);
  }
});

test('every free-text question accepts the answer it displays', () => {
  // Through the REAL matcher, which folds accents, case, punctuation and all
  // whitespace. Never a reimplementation of it.
  const bad = quiz.filter((q) => q.accept?.length && q.answer && !matchesAccept(q.answer, q.accept!));
  deepStrictEqual(bad.map((q) => q.q), [], 'free-text question(s) reject their own displayed answer');
});

test('the quiz survives the runtime shuffle', () => {
  // QuizDeckView builds a fresh permutation per question, per attempt, and
  // reshuffles on retry (LessonRich.tsx:1232, :1273). The authored `correct`
  // index never moves, so what breaks is an option that names a POSITION IN THE
  // OPTION LIST, and a repeated option, which becomes genuinely ambiguous once
  // two slots hold the same text.
  const positional = quiz
    .flatMap((q) => q.opts ?? [])
    .filter((o) => /\b(the first|the second|the third|the last|both of|none of the (above|last))\b/i.test(o));
  deepStrictEqual(positional, [], 'quiz option(s) name a position, which the shuffle breaks');

  const dup = quiz.filter(
    (q) => q.opts && new Set(q.opts.map((o) => o.trim().toLowerCase())).size !== q.opts.length,
  );
  deepStrictEqual(dup.map((q) => q.q), [], 'question(s) carry a duplicate option');
});

test('correct answers are spread across the option slots', () => {
  // quiz-spread fails the build above 40% whatever the runtime shuffle does.
  // Measured across the ten most recent A1 lessons the band is 27% to 36%.
  const closed = quiz.filter((q) => Array.isArray(q.opts) && typeof q.correct === 'number');
  ok(closed.length >= 8, 'too few closed questions to measure a spread');
  const tally = new Map<number, number>();
  for (const q of closed) tally.set(q.correct as number, (tally.get(q.correct as number) ?? 0) + 1);
  const over = [...tally.entries()]
    .filter(([, n]) => (n / closed.length) * 100 > 40)
    .map(([slot, n]) => `slot ${slot}: ${((n / closed.length) * 100).toFixed(0)}%`);
  deepStrictEqual(over, [], 'quiz-spread fails the build above 40%');
  // Every slot is actually used, which the 40% cap alone does not require.
  strictEqual(tally.size, 4, 'at least one option slot never holds the correct answer');
});

test('each round fires a DISTINCT drill', () => {
  // drillForRound fires the drill of the FIRST resolving target only, then
  // stops. a1.05 shipped two drills named in second place and they were dead
  // content no learner could reach.
  const rounds = (lesson.sections.find((s) => s.type === 'quiz') as unknown as {
    rounds: { id: string; targets?: string[] }[];
  }).rounds;
  strictEqual(rounds.length, 6, 'expected 6 rounds');
  const firsts = rounds.map((r) => r.targets?.[0]);
  ok(firsts.every(Boolean), 'a round names no targets');
  strictEqual(new Set(firsts).size, firsts.length, 'two rounds share a first target, so a drill is unreachable');

  const triggers = new Map((lesson.errorTriggers ?? []).map((t) => [t.id, t]));
  const drills = new Set((lesson.drills ?? []).map((d) => d.id));
  const fired = new Set<string>();
  for (const t of firsts) {
    const trig = triggers.get(t!);
    ok(trig, `round target "${t}" resolves to no error trigger`);
    ok(drills.has(trig!.drill), `trigger ${t} names drill ${trig!.drill}, which does not exist`);
    fired.add(trig!.drill);
  }
  strictEqual(fired.size, 6, 'the six rounds do not fire six different drills');
});

/* ─── House rules and the things that render nothing ───────────────────────*/

test('no em dash and no banned word', () => {
  const all = strings(lesson);
  deepStrictEqual(all.filter((s) => s.includes('—')), [], 'em dash in authored content');
  deepStrictEqual(all.filter((s) => /honest/i.test(s)), [], '"honest" is banned in authored content');
});

test('the lesson authors no imageRef, and that is a decision', () => {
  // A body lesson wants a labelled diagram and no component draws one.
  // lesson-contract.test.ts contains no reference to imageRef, so an authored
  // one is schema-valid, passes CI and renders a blank box.
  strictEqual(
    (JSON.stringify(lesson).match(/"imageRef"/g) ?? []).length, 0,
    'an imageRef was authored and nothing resolves it for this lesson',
  );
});

test('no reference sheet uses a cheatSheet block', () => {
  // Inside a sheet a cheatSheet draws its title and nothing else. a1.13 ships
  // that defect twice, at sheet.a1.13.forms and sheet.a1.13.invariable.
  for (const sh of lesson.sheets ?? []) {
    const types = (sh.sections ?? []).map((s) => s.type);
    ok(!types.includes('cheatSheet'), `${sh.id} uses a cheatSheet block, which renders only its title`);
    ok(types.length > 0, `${sh.id} has no sections`);
  }
});

test('the sheetIds sections point at actually exist', () => {
  const sheetIds = new Set((lesson.sheets ?? []).map((s) => s.id));
  for (const s of lesson.sections) {
    const ref = (s as { sheetId?: string }).sheetId;
    if (!ref) continue;
    ok(sheetIds.has(ref), `sheetId "${ref}" matches no sheet on this lesson`);
  }
});

test('commonErrors sections carry swipe, or they render blank', () => {
  // Without `swipe`, MissionSection takes a fallback that returned undefined
  // and drew a BLANK mission (sons.08 m22, a1.01 m5).
  for (const s of lesson.sections.filter((x) => x.type === 'commonErrors')) {
    const v = s as { id?: string; swipe?: boolean; size?: string };
    ok(v.swipe === true, `${v.id} is a commonErrors section without swipe`);
    strictEqual(v.size, 'lg', `${v.id} should be lg`);
  }
});

test('the reading passage is one block and its glossary can render', () => {
  const s = section('s20-reading') as unknown as {
    text: string; glossary?: unknown[]; questionsInModal?: boolean; questions?: unknown[];
  };
  ok(!s.text.includes('\n'), 'PassagePage discards authored newlines: the passage must be one block');
  ok(s.glossary?.length, 'the passage has no glossary');
  ok(
    s.questionsInModal && s.questions?.length,
    'a glossary only renders through questionsInModal with questions',
  );
});

test('speak and dictation sections name items whose drills can serve them', () => {
  for (const s of lesson.sections) {
    if (s.type === 'practice' && (s as { skill?: string }).skill === 'speak') {
      for (const id of (s as { itemIds: string[] }).itemIds) {
        ok(byId.get(id)?.drills.includes('voiceflash'), `${id} has no voiceflash, so speak renders nothing`);
      }
    }
    if (s.type === 'dictation') {
      for (const id of (s as { itemIds: string[] }).itemIds) {
        ok(byId.get(id)?.drills.includes('dictation'), `${id} has no dictation drill`);
      }
    }
  }
});
