// Guards a1.13.l1 "Les couleurs".
//
// This lesson has one failure mode that matters more than all the others, and it
// is not a crash: it is THE INVARIABLE RULE DECAYING BACK INTO TWO EXCEPTIONS.
//
// The canDo names three acts and the third is the one learners remember wrongly
// forever: "leave marron and orange alone". Almost every course teaches those as
// a pair of exceptions to memorise. This lesson teaches them as ONE IDEA with a
// reason behind it, and the whole of that reason lives on a single screen where
// the fruit `des oranges` sits beside the colour `des fleurs orange`. A rewrite
// that keeps both halves but puts them on separate screens would read fine in
// review, ship, and leave a learner with two exceptions again. So the assertion
// that earns its place here is "ONE section carries a noun-orange and a
// colour-orange together", and it is the one below worth the most. The brief
// asks for exactly it: "des oranges against des chaussures orange is a PAIR, so
// give it two columns on one screen. This is the layout the test must assert."
//
// The second-most-valuable assertion is the cheapest: NOTHING THIS LESSON
// AUTHORS AS CORRECT FRENCH MAY CARRY `marrons`, `marronne`, `orangée`, or a
// compound colour with an ending. Authoring one would teach the exact error the
// lesson exists to prevent, and it is the kind of thing a well-meaning edit adds
// while "fixing the agreement".
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
// the twelve colours, the four forms, the six triggers and the four families:
// those numbers are the SHAPE of the lesson rather than a measurement of it, and
// a later trim that quietly drops one is exactly what this file exists to stop.
//
// Nothing here reimplements app logic. `fold`, `matchesAccept`, `dicteeMode`,
// `glossKeys`, `segmentSentence`, `hasPlainNasalFor` and `validateDensity` are
// all imported from the modules the app itself runs. An earlier version of
// a1.01's test inlined its own glossary lookup, copied the version that was
// already broken, and passed while the feature was dead.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { ok, strictEqual, deepStrictEqual } from 'node:assert';
import { test } from 'node:test';
import { quizQuestions, validateLesson, type Lesson, type LessonSection } from './schema.ts';
import { hasPlainNasalFor, validateDensity, formatDensity } from './density.logic.ts';
import { glossKeys, segmentSentence } from './gloss.logic.ts';
import { dicteeMode } from './dictee.logic.ts';
import { matchesAccept } from './answer.logic.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  units: { id: string; seq: number; lessonIds: string[]; themes?: string[]; canDo?: string; sub?: string; title?: string }[];
  lessons: Lesson[];
  items: { id: string; kind: string; level: string; theme: string; fr: string; en: string; respell?: string; ipa?: string; drills: string[]; cardType?: string; gender?: string }[];
};

const L = seed.lessons.find((l) => l.id === 'a1.13.l1');
// Before the batch and the merge have run, the seed has no a1.13.l1 and every
// seed-derived assertion below would fail for a reason that is not a content
// bug. Skip cleanly rather than reporting a build failure as a content failure.
const noSeed = !L;

const ITEMS = new Map(seed.items.map((i) => [i.id, i]));

/* ── The shape of the lesson, stated once ─────────────────────────────────────
 *
 * These four are the SHAPE, not a measurement, which is why they are literals.
 * A rewrite that quietly drops a colour, a form, a family or a trigger is
 * exactly what this file exists to catch, so deriving them from the content
 * would compare the lesson to itself and pass on any trim. */
const THE_TWELVE = [
  'rouge', 'bleu', 'vert', 'jaune', 'noir', 'blanc',
  'gris', 'rose', 'orange', 'violet', 'marron', 'beige',
] as const;
const FOUR_FORMS = 4;
const FOUR_FAMILIES = 4;
const SIX_TRIGGERS = 6;

/** The reframe, VERBATIM. Restated here rather than imported from the source, so
 *  the seed and the source have to agree about it rather than agreeing with
 *  themselves. The count is asserted against an explicit constant for the same
 *  reason: a derived figure passes on any rewording. */
const REFRAME = 'Colours agree. Things that became colours do not.';
const REFRAME_APPEARANCES = 12;

/** The two colours that must never take an ending, and the forms that would
 *  mean they had. `oranges` is deliberately NOT here: it is correct French for
 *  the fruit and appears in an imported corpus sentence. It is checked
 *  separately, over authored rows only. */
const FORBIDDEN = [
  'marrons', 'marronne', 'marronnes',
  'orangée', 'orangé', 'orangés', 'orangées',
  'verts pomme', 'vert pommes', 'verts pommes',
  'verts foncé', 'vert foncés', 'verts foncés',
  'bleus clair', 'bleu clairs', 'bleus clairs',
];

/** Adjectives that belong to a1.14. Colour is the only thing this lesson may
 *  teach, or a1.14 arrives with its subject already spent. */
const OTHER_ADJECTIVES = [
  'grand', 'grande', 'petit', 'petite', 'beau', 'belle', 'joli', 'jolie',
  'jeune', 'vieux', 'vieille', 'bon', 'bonne', 'mauvais', 'gros', 'nouveau',
];

/** Placement teaching, which belongs to a1.16. MULTI-WORD PHRASES ONLY: a single
 *  common word is not a safe probe for a teaching concept, and an earlier draft
 *  of this guard used the BAGS mnemonic as a bare word and fired immediately on
 *  the lesson's own gloss "My bags are green." */
const PLACEMENT_TEACHING = [
  'before the noun', 'in front of the noun', 'precedes the noun',
  'goes before', 'comes before the', 'adjectives that go first',
];

function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, out));
  return out;
}

/** Walks the string and checks neighbours against an accent-aware class. NEVER
 *  builds a regex out of the search term: `\b` is ASCII-only in JavaScript, so
 *  /\bvert\b/ matches nothing when the neighbour is accented, and a regex that
 *  returns zero looks exactly like an absence. */
function hasWord(haystack: string, needle: string): boolean {
  let from = 0;
  for (;;) {
    const i = haystack.indexOf(needle, from);
    if (i < 0) return false;
    const before = i === 0 ? ' ' : haystack[i - 1];
    const after = haystack[i + needle.length] ?? ' ';
    if (!/[a-zà-ÿ]/i.test(before) && !/[a-zà-ÿ]/i.test(after)) return true;
    from = i + 1;
  }
}

const sectionsOf = (l: Lesson): LessonSection[] => l.sections;
const sectionId = (s: LessonSection): string => (s as { id?: string }).id ?? '';
const quizOf = (l: Lesson) => l.sections.find((s) => s.type === 'quiz');

/* ═══ The unit, and the lesson reaching a learner at all ═══════════════════ */

test('unit a1.13 links this lesson and keeps its shipped strings', () => {
  const u = seed.units.find((x) => x.id === 'a1.13');
  ok(u, 'unit a1.13 is not in the seed');
  strictEqual(u!.title, 'Colors');
  strictEqual(u!.sub, 'Les couleurs');
  strictEqual(u!.canDo, 'Can name the colours, agree them with the noun, and leave marron and orange alone');
  ok(u!.lessonIds.includes('a1.13.l1'), 'unit a1.13 does not link a1.13.l1, so nothing routes to it');
  deepStrictEqual(u!.themes, ['couleurs'], 'the theme binding was already correct and must not have moved');
});

test('the lesson is in the seed and passes its own schema validator', { skip: noSeed }, () => {
  const issues = validateLesson(L!, L!.id);
  strictEqual(issues.length, 0, issues.map((i) => `${i.path}: ${i.msg}`).join('\n'));
});

test('the header eyebrow agrees with the unit seq the renderer reads', { skip: noSeed }, () => {
  const u = seed.units.find((x) => x.id === 'a1.13')!;
  // missions.ts derives the eyebrow from unit.seq at render time. A stored tag
  // that disagrees is a bug the moment anything reads the field instead, which
  // a1.03 shipped (commit 56c79a7).
  strictEqual(L!.tag, `A1 · LEÇON ${String(u.seq).padStart(2, '0')}`);
});

test('exactly one quiz section, because the pager appends exactly one', { skip: noSeed }, () => {
  strictEqual(L!.sections.filter((s) => s.type === 'quiz').length, 1);
});

test('no autoplay is authored anywhere', { skip: noSeed }, () => {
  ok(!JSON.stringify(L!).includes('"autoplay"'),
    'autoplay is declared in schema.ts and implemented in no component. Use audioFirst.');
});

test('the lesson passes the real density validator', { skip: noSeed }, () => {
  const issues = validateDensity(L!, new Set(seed.items.map((i) => i.id)));
  strictEqual(issues.length, 0, formatDensity(issues));
});

/* ═══ The spine, the acts and the tranches ════════════════════════════════ */

test('every act names sections that exist, in order, and no section is orphaned', { skip: noSeed }, () => {
  const ids = sectionsOf(L!).map(sectionId);
  const named = (L!.acts ?? []).flatMap((a) => a.sections);
  for (const s of named) ok(ids.includes(s), `act names "${s}", which is not a section`);
  const claimed = new Map<string, string>();
  for (const a of L!.acts ?? []) {
    for (const s of a.sections) {
      const prior = claimed.get(s);
      ok(!prior, `section "${s}" is claimed by both ${prior} and ${a.id}`);
      claimed.set(s, a.id);
    }
  }
  for (const id of ids) ok(claimed.has(id), `section "${id}" belongs to no act, so nothing routes a learner to it`);
  // The acts are in spine order: an act must not name a section that appears
  // before one named by the act before it.
  deepStrictEqual(named, ids, 'the acts do not walk the sections in the order they are authored');
});

test('the six acts are the ones the brief specifies', { skip: noSeed }, () => {
  const titles = (L!.acts ?? []).map((a) => a.title);
  strictEqual(titles.length, 6, `${titles.length} acts, expected 6`);
  // The FIRST act must establish agreement and the LAST must test it. The
  // middle four carry the weighting argument: three missions on the names.
  ok(/describing word/i.test(titles[0]), `act 1 is "${titles[0]}", expected it to introduce the describing word`);
  ok(/prove/i.test(titles[5]), `act 6 is "${titles[5]}"`);
  const namingAct = (L!.acts ?? []).find((a) => /colour/i.test(a.title) && !/never/i.test(a.title));
  ok(namingAct, 'no act names the colours');
  strictEqual(namingAct!.sections.length, 3,
    'naming twelve colours takes three missions. The brief: "If naming the colours is done in three missions, that is correct. Do not pad it."');
});

test('tranches release every taught item exactly once and nothing untaught', { skip: noSeed }, () => {
  const tranches = L!.deckTranche ?? [];
  const flat = tranches.flat();
  const dupes = flat.filter((id, i) => flat.indexOf(id) !== i);
  strictEqual(dupes.length, 0,
    `released twice, so the SRS takes two ratings for one card: ${[...new Set(dupes)].join(', ')}`);
  const taught = new Set(L!.itemIds);
  for (const id of flat) ok(taught.has(id), `tranche releases ${id}, which the lesson does not teach`);
  for (const id of taught) ok(flat.includes(id), `${id} is taught and released by no tranche, so it never reaches spaced repetition`);
});

test('one tranche per act, and no tranche releases an item its act has not shown', { skip: noSeed }, () => {
  const tranches = L!.deckTranche ?? [];
  const acts = L!.acts ?? [];
  strictEqual(tranches.length, acts.length, 'tranches and acts must be index-aligned');
  // An item released in act N must appear on a screen in act N or earlier. A
  // card released before its mission is a card the learner is asked to rate
  // before they have met it. a1.08 shipped exactly that and had to move five.
  for (let i = 0; i < tranches.length; i++) {
    if (!tranches[i].length) continue;
    const soFar = acts.slice(0, i + 1)
      .flatMap((a) => a.sections)
      .map((sid) => sectionsOf(L!).find((s) => sectionId(s) === sid))
      .filter(Boolean);
    for (const id of tranches[i]) {
      ok(isShownIn(soFar, id),
        `act ${i + 1} releases ${id} "${ITEMS.get(id)?.fr}", which no section up to and including act ${i + 1} shows`);
    }
  }
});

/** Did the learner actually SEE this item, anywhere in `scope`?
 *
 *  Two routes count, and both are real, which an earlier version of this helper
 *  got wrong by checking only the first:
 *
 *    BY ID    a dictation, practice or sort drill names `fr.a1.couleurs.260`
 *             and the renderer resolves it.
 *    BY TEXT  a scene beat, a card or a table cell carries the row's French
 *             VERBATIM, read out of the corpus through frOf(). The learner sees
 *             exactly the same string; the id simply is not in the JSON.
 *
 *  Only checking ids reports every scene-carried and deck-carried row as
 *  undrawn, which is the opposite of the bug this guard exists for. The question
 *  the invariants ask is "did the learner see it", not "is the id present". */
function isShownIn(scope: unknown, id: string): boolean {
  const all = strings(scope);
  if (all.some((s) => s === id)) return true;
  const row = ITEMS.get(id);
  if (!row) return false;
  const text = all.join('\n');
  // A one-word headword needs a boundary check: 'brun' must not match inside
  // 'brune'. A sentence is long enough that a substring match is unambiguous.
  return row.fr.includes(' ') ? text.includes(row.fr) : hasWord(text, row.fr);
}

test('every declared itemId resolves AND is on a screen', { skip: noSeed }, () => {
  const scope = [L!.sections, L!.drills ?? [], L!.terms ?? {}];
  for (const id of L!.itemIds) {
    ok(ITEMS.has(id), `itemId ${id} does not resolve in the seed, so it renders as an empty card`);
    ok(isShownIn(scope, id),
      `${id} "${ITEMS.get(id)?.fr}" resolves but is on no screen, by id or by text. `
      + 'a1.08 shipped 43 such ids, released to spaced repetition and drawn by nothing.');
  }
});

test('no id named anywhere in the lesson fails to resolve', { skip: noSeed }, () => {
  const all = new Set(strings(L!).filter((s) => /^fr\.[a-z0-9]+\.[a-z0-9-]+\.\d{3,}$/.test(s)));
  for (const id of all) ok(ITEMS.has(id), `${id} is named in the lesson and is not in the seed`);
});

/* ═══ The reframe ═════════════════════════════════════════════════════════ */

test('the reframe is authored verbatim, the exact number of times', { skip: noSeed }, () => {
  strictEqual(L!.reframe, REFRAME);
  const hits = strings(L!).filter((s) => s.includes(REFRAME)).length;
  strictEqual(hits, REFRAME_APPEARANCES,
    `the reframe appears ${hits} times, expected ${REFRAME_APPEARANCES}. It must be REFERENCED, never retyped.`);
});

test('the reframe reaches at least three separate sections', { skip: noSeed }, () => {
  const carrying = sectionsOf(L!).filter((s) => strings(s).some((x) => x.includes(REFRAME)));
  ok(carrying.length >= 3,
    `the reframe is in ${carrying.length} section(s); the density validator wants at least three`);
});

/* ═══ Every colour taught, by name ════════════════════════════════════════ */

test('all twelve colours are named on a screen', { skip: noSeed }, () => {
  const text = strings(L!.sections).join('\n');
  for (const c of THE_TWELVE) {
    ok(hasWord(text, c), `"${c}" is never named on any screen`);
  }
});

test('marron, orange and violet are each taught individually', { skip: noSeed }, () => {
  // The three the brief singles out: they carry the most weight and the least
  // corpus evidence, so each has to be more than a deck entry.
  const text = strings(L!.sections).join('\n');
  for (const c of ['marron', 'orange', 'violet']) {
    const carrying = sectionsOf(L!).filter((s) => hasWord(strings(s).join('\n'), c));
    ok(carrying.length >= 2,
      `"${c}" appears in ${carrying.length} section(s). It needs teaching, not a single mention.`);
    ok(hasWord(text, c));
  }
});

test('the twelve headwords resolve and carry a respelling', { skip: noSeed }, () => {
  for (let i = 0; i < THE_TWELVE.length; i++) {
    const id = `fr.sons.couleurs.${String(i + 1).padStart(3, '0')}`;
    const row = ITEMS.get(id);
    ok(row, `${id} (${THE_TWELVE[i]}) is not in the seed`);
    strictEqual(row!.fr, THE_TWELVE[i], `${id} holds "${row!.fr}", expected "${THE_TWELVE[i]}"`);
    ok(row!.respell, `${id} carries no respelling`);
  }
});

test('the four missing feminines were authored and nothing else was', { skip: noSeed }, () => {
  // bleue, noire, grise and violette were verified ABSENT in every article form.
  // verte, blanche and brune already existed and are reused, not rewritten:
  // re-authoring one would fail flashhub-coverage.test.ts.
  const authored = ['bleue', 'noire', 'grise', 'violette'];
  for (let i = 0; i < authored.length; i++) {
    const id = `fr.sons.couleurs.${String(66 + i).padStart(3, '0')}`;
    const row = ITEMS.get(id);
    ok(row, `${id} (${authored[i]}) is not in the seed`);
    strictEqual(row!.fr, authored[i]);
    strictEqual(row!.theme, 'couleurs');
    ok(row!.drills.includes('voiceflash'), `${id} carries no voiceflash, so the speak mission cannot score it`);
  }
  // The three that already existed must still be the ORIGINAL rows.
  strictEqual(ITEMS.get('fr.sons.muettes.049')?.fr, 'verte', 'verte must be reused from sons.06, not re-authored');
  strictEqual(ITEMS.get('fr.sons.muettes.054')?.fr, 'blanche', 'blanche must be reused from sons.06, not re-authored');
  strictEqual(ITEMS.get('fr.sons.nasales.171')?.fr, 'brune', 'brune must be reused from sons.03, not re-authored');
});

test('no duplicate headword within a theme, computed the flashhub way', { skip: noSeed }, () => {
  // flashhub-coverage.test.ts keys decks on `fr` with the article stripped, so
  // two rows sharing a key in one theme are one card served twice.
  const headword = (fr: string) => fr.toLowerCase().replace(/^(le |la |les |l'|un |une |des )/, '').trim();
  const seen = new Map<string, string>();
  for (const w of seed.items) {
    if (w.kind === 'sentence') continue;
    if ((w.cardType ?? 'vocab') !== 'vocab') continue;
    const key = `${w.theme}::${headword(w.fr)}`;
    const prior = seen.get(key);
    ok(!prior, `${prior} and ${w.id} are both "${w.fr}" in ${w.theme}`);
    seen.set(key, w.id);
  }
});

/* ═══ All four agreement forms, and the contrast that carries them ════════ */

test('all four agreement forms are taught on the authored paradigm', { skip: noSeed }, () => {
  const text = strings(L!.sections).join('\n');
  const grid: Record<string, string[]> = {
    vert: ['Mon sac est vert.', 'Ma veste est verte.', 'Mes sacs sont verts.', 'Mes vestes sont vertes.'],
    bleu: ['Mon sac est bleu.', 'Ma veste est bleue.', 'Mes sacs sont bleus.', 'Mes vestes sont bleues.'],
    marron: ['Mon sac est marron.', 'Ma veste est marron.', 'Mes sacs sont marron.', 'Mes vestes sont marron.'],
  };
  for (const [colour, forms] of Object.entries(grid)) {
    strictEqual(forms.length, FOUR_FORMS);
    for (const f of forms) ok(text.includes(f), `${colour}: "${f}" is on no screen`);
  }
});

test('at least one section shows the masculine AND feminine of ONE colour together', { skip: noSeed }, () => {
  // The brief requires this by name. Two forms of the same colour on separate
  // screens do not teach a contrast; they teach two words.
  const together = sectionsOf(L!).filter((s) => {
    const t = strings(s).join('\n');
    return (t.includes('Mon sac est vert.') && t.includes('Ma veste est verte.'))
      || t.includes('Mon sac est noir et ma veste est noire.')
      || (hasWord(t, 'vert') && hasWord(t, 'verte'));
  });
  ok(together.length >= 1,
    'no section carries one colour in both genders on the same screen. Separating them turns the contrast into vocabulary.');
});

test('the one sentence in the language carrying one colour in both genders is used', { skip: noSeed }, () => {
  const row = ITEMS.get('fr.a1.objets.124');
  ok(row, 'fr.a1.objets.124 is not in the seed');
  strictEqual(row!.fr, 'Mon sac est noir et ma veste est noire.');
  ok(L!.itemIds.includes('fr.a1.objets.124'), 'the best sentence in the lesson is not taught');
  ok(strings(L!.sections).join('\n').includes(row!.fr), 'it resolves but is on no screen');
});

test('the four families are taught as four, not as a list of twelve', { skip: noSeed }, () => {
  const drill = sectionsOf(L!).find((s) => s.type === 'groupDrill' && /famil/i.test(strings(s).join(' ')));
  ok(drill, 'no section groups the colours by what the feminine does');
  const groups = (drill as { groups?: unknown[] }).groups ?? [];
  strictEqual(groups.length, FOUR_FAMILIES,
    `${groups.length} families, expected ${FOUR_FAMILIES}: already ends in -e, adds -e, changes more, never changes`);
});

/* ═══ THE ASSERTION WORTH THE MOST: the invariable rule is SHOWN ══════════ */

test('ONE section carries the fruit orange and the colour orange together', { skip: noSeed }, () => {
  // The single most valuable assertion in this file. See the header.
  const fruit = ['Cette orange est bien mûre.', 'Le client demande le prix des oranges.'];
  const colour = ['Elle aime les fleurs orange.', 'Les rideaux sont orange.'];
  const carrying = sectionsOf(L!).filter((s) => {
    const t = strings(s).join('\n');
    return fruit.some((f) => t.includes(f)) && colour.some((c) => t.includes(c));
  });
  ok(carrying.length >= 1,
    'no single section shows the fruit agreeing beside the colour refusing. '
    + 'Split across two screens, the rule decays back into two exceptions to memorise, '
    + 'which is the failure this lesson exists to prevent.');
});

test('the fruit sentence where an ordinary adjective DOES agree is used', { skip: noSeed }, () => {
  // « Cette orange est bien mûre. » is the proof that orange is not a word
  // French refuses to touch: it is the thing being described, and mûre beside it
  // agrees perfectly normally.
  const row = ITEMS.get('fr.a1.adjectifs-essentiels.331');
  ok(row, 'fr.a1.adjectifs-essentiels.331 is not in the seed');
  strictEqual(row!.fr, 'Cette orange est bien mûre.');
  ok(strings(L!.sections).join('\n').includes(row!.fr), 'it is on no screen');
});

test('a FEMININE or PLURAL marron example is on a screen', { skip: noSeed }, () => {
  // A masculine singular marron is identical to a variable colour and
  // demonstrates nothing. The brief believed the corpus held only masculine
  // singulars; in fact three feminine/plural rows are published, and the
  // authored paradigm adds four more.
  const text = strings(L!.sections).join('\n');
  const evidence = [
    'La table marron vient d\'Italie.',   // feminine, imported
    'Les chaussures marron coûtent cher.', // plural, imported
    'Ses yeux sont marron.',               // plural, imported
    'Ma veste est marron.',                // feminine, authored
    'Mes sacs sont marron.',               // plural, authored
    'Mes vestes sont marron.',             // feminine plural, authored
    'Les chaussures sont marron.',         // plural, authored
  ];
  const found = evidence.filter((e) => text.includes(e));
  ok(found.length >= 2,
    `only ${found.length} feminine/plural marron example(s) on screen. The rule has to be shown, not asserted.`);
});

test('the same-noun contrast is on a screen: one colour agrees, one refuses', { skip: noSeed }, () => {
  // « Les chaussures sont rouges. » beside « Les chaussures sont marron. » is the
  // cheapest proof of the reframe in the lesson: same noun, same frame, one
  // colour takes the s and the other does not.
  const text = strings(L!).join('\n');
  ok(text.includes('Les chaussures sont rouges.'), 'the agreeing half of the same-noun contrast is missing');
  ok(text.includes('Les chaussures sont marron.'), 'the refusing half of the same-noun contrast is missing');
});

test('compound colours are shown behind a PLURAL noun, so the refusal is visible', { skip: noSeed }, () => {
  const text = strings(L!.sections).join('\n');
  ok(text.includes('Les murs sont vert pomme.') || text.includes('Ses yeux sont vert foncé.'),
    'no compound colour is shown behind a plural noun, so its invariability is asserted rather than shown');
});

/* ═══ THE CHEAPEST HIGH-VALUE ASSERTION: no invariable colour with an ending ═ */

test('nothing authored as CORRECT French carries an invariable colour with an ending', { skip: noSeed }, () => {
  // Scoped to content authored as correct French: corpus rows this lesson owns,
  // quiz answer keys, the `right` side of every trap card, and sheet headwords.
  // NOT every string: the scene, the trap cards and the marron deck all have to
  // SHOW the error in order to teach it, and a guard that fired on those would
  // be deleted within a week rather than fixed.
  const q = quizOf(L!);
  const questions = q && q.type === 'quiz' ? quizQuestions(q) : [];
  const correctFrench: string[] = [
    ...seed.items.filter((i) => i.id.startsWith('fr.a1.couleurs.2') || i.id.startsWith('fr.sons.couleurs.06'))
      .map((i) => i.fr),
    ...L!.sections.flatMap((s) => (s.type === 'commonErrors' ? s.errors.map((e) => e.right) : [])),
    ...(L!.sheets ?? []).flatMap((sh) => (sh.sections ?? []).flatMap((sec) =>
      sec.type === 'cheatSheet' ? sec.rows.flatMap((r) => [r.k, r.say ?? '']) : [])),
    ...questions.flatMap((x) => [x.answer ?? '', ...(x.accept ?? [])]),
    ...(L!.drills ?? []).flatMap((d) => (d.opts && d.correct !== undefined ? [d.opts[d.correct]] : [])),
    ...((L!.sections.find((s) => s.type === 'roundup') as { points?: string[] } | undefined)?.points ?? []),
  ];
  for (const text of correctFrench) {
    for (const f of FORBIDDEN) {
      ok(!hasWord(text.toLowerCase(), f),
        `"${f}" appears in content authored as correct French: "${text}". This teaches the error the lesson exists to prevent.`);
    }
  }
});

test('no row this lesson authored pluralises orange as a colour', { skip: noSeed }, () => {
  // `oranges` is correct French for the fruit and appears in an imported corpus
  // sentence, so this is checked over AUTHORED rows only.
  const authored = seed.items.filter(
    (i) => /^fr\.a1\.couleurs\.(25[9]|26\d|27[01])$/.test(i.id) || /^fr\.sons\.couleurs\.06[6-9]$/.test(i.id));
  ok(authored.length > 0, 'no authored rows found, so this assertion is checking nothing');
  for (const i of authored) {
    ok(!hasWord(i.fr.toLowerCase(), 'oranges'), `authored row ${i.id} pluralises orange: "${i.fr}"`);
    ok(!hasWord(i.fr.toLowerCase(), 'marrons'), `authored row ${i.id} pluralises marron: "${i.fr}"`);
  }
});

/* ═══ No ear question can target a plural ═════════════════════════════════ */

const PLURAL_FORM = /(verts|vertes|bleus|bleues|rouges|noirs|noires|grises|blancs|blanches|violets|violettes|jaunes|roses|beiges)/i;

test('no listenChoose question has an option carrying a plural colour', { skip: noSeed }, () => {
  // The plural -s is NEVER pronounced, on any colour. An ear question on one
  // asks the learner to hear something that is not in the signal, and a learner
  // who cannot hear it concludes their listening is at fault rather than that
  // the information is absent.
  const q = quizOf(L!);
  const questions = q && q.type === 'quiz' ? quizQuestions(q) : [];
  for (const x of questions.filter((y) => y.format === 'listenChoose')) {
    for (const opt of x.opts ?? []) {
      ok(!PLURAL_FORM.test(opt), `ear question "${x.q}" offers the plural "${opt}"`);
    }
  }
});

test('the listening section carries no plural line', { skip: noSeed }, () => {
  const s = sectionsOf(L!).find((x) => x.type === 'listening');
  ok(s, 'there is no listening section');
  if (s && s.type === 'listening') {
    for (const line of s.lines) {
      ok(!PLURAL_FORM.test(line.fr), `the ear section carries a plural: "${line.fr}"`);
    }
  }
});

test('the learner is told, in as many words, that the plural cannot be heard', { skip: noSeed }, () => {
  // A learner who thinks they should be able to hear `verts` will conclude their
  // listening is bad when the information is genuinely not there. The brief:
  // "Say so on a card."
  const text = strings(L!.sections).join('\n').toLowerCase();
  ok(/never pronounced|not in the sound|never said|only on the page|is not there/.test(text),
    'no screen tells the learner the plural ending is inaudible');
});

/* ═══ Respellings, and the two blind spots in the shared checker ══════════ */

test('every respelling in the seed passes the shared nasal checker', { skip: noSeed }, () => {
  for (let i = 1; i <= 12; i++) {
    const row = ITEMS.get(`fr.sons.couleurs.${String(i).padStart(3, '0')}`);
    if (!row?.respell) continue;
    ok(!hasPlainNasalFor(row.fr, row.respell),
      `${row.id} "${row.fr}" closes a nasal with a plain n: ${row.respell}`);
  }
});

test('jaune is respelled ZHON and NOT with a superscript', { skip: noSeed }, () => {
  // THE TRAP. jaune is /ʒon/: the n is a REAL consonant and there is no nasal
  // vowel in the word. hasPlainNasalFor false-positives on ZHOHN, and ZHOHⁿ
  // would silence the checker while teaching a sound that is not in the word.
  // BOTH halves are asserted, because the shared checker passes ZHOHⁿ too and
  // would never catch the "fix".
  const row = ITEMS.get('fr.sons.couleurs.004');
  ok(row, 'fr.sons.couleurs.004 (jaune) is not in the seed');
  strictEqual(row!.fr, 'jaune');
  strictEqual(row!.respell, 'ZHON', 'jaune must be ZHON');
  ok(!row!.respell!.includes('ⁿ'),
    'jaune carries a superscript n. It has NO nasal vowel: /ʒon/ has a real /n/. Do not "fix" this to silence a linter.');
  ok(!hasPlainNasalFor('jaune', 'ZHON'), 'ZHON should pass the shared checker');
});

test('blanc, marron, orange and brun carry the superscript, asserted BY NAME', { skip: noSeed }, () => {
  // BY NAME because the shared checker cannot see a word-internal nasal, and
  // `orange` is exactly that case: oh-RAHNZH has ZH behind the nasal, so the
  // broken value passes hasPlainNasalFor cleanly. This is invariant §3's first
  // blind spot, the same one that let a1.09's sep-TAHNBR through.
  const byName: Record<string, string> = {
    'fr.sons.couleurs.006': 'blanc',
    'fr.sons.couleurs.011': 'marron',
    'fr.sons.couleurs.009': 'orange',
    'fr.sons.nasales.170': 'brun',
  };
  for (const [id, fr] of Object.entries(byName)) {
    const row = ITEMS.get(id);
    ok(row, `${id} (${fr}) is not in the seed`);
    strictEqual(row!.fr, fr);
    ok(row!.respell?.includes('ⁿ'),
      `${id} "${fr}" is respelled ${row!.respell} with no superscript n, and it carries a genuine nasal vowel`);
  }
  // Proof the by-name check is doing work the shared checker cannot: the broken
  // orange value passes hasPlainNasalFor. If this ever starts failing, the
  // shared checker has been improved and this comment is out of date.
  ok(!hasPlainNasalFor('orange', 'oh-RAHNZH'),
    'hasPlainNasalFor now catches the word-internal nasal in oh-RAHNZH; the by-name assertion above is no longer the only guard');
});

test('the four repairs actually landed in the seed', { skip: noSeed }, () => {
  const repairs: [string, string, string][] = [
    ['fr.sons.couleurs.006', 'blanc', 'BLAHⁿ'],
    ['fr.sons.couleurs.011', 'marron', 'mah-ROHⁿ'],
    ['fr.sons.couleurs.009', 'orange', 'oh-RAHⁿZH'],
    ['fr.sons.couleurs.004', 'jaune', 'ZHON'],
  ];
  for (const [id, fr, respell] of repairs) {
    const row = ITEMS.get(id);
    ok(row, `${id} is not in the seed`);
    strictEqual(row!.fr, fr);
    strictEqual(row!.respell, respell, `${id} "${fr}" was not repaired`);
  }
});

test('the repaired rows agree with the same word elsewhere in the corpus', { skip: noSeed }, () => {
  // The point of a repair is to stop the learner meeting two transcriptions of
  // one word in two themes. blanc is in muettes and consonnes; orange is in
  // consonnes.
  const blancMuettes = ITEMS.get('fr.sons.muettes.035');
  if (blancMuettes) {
    strictEqual(ITEMS.get('fr.sons.couleurs.006')?.respell, blancMuettes.respell,
      'blanc still reads differently in couleurs and muettes');
  }
});

/* ═══ The neighbours keep their lessons ═══════════════════════════════════ */

test('no other adjective is taught, so a1.14 keeps its subject', { skip: noSeed }, () => {
  // Written against PRODUCTION SURFACES rather than every string, or it fires on
  // legitimate context and gets deleted. `mûre` is exempt by construction: it is
  // inside an imported corpus sentence where it is evidence rather than teaching.
  const production = [
    ...strings(L!.sections.filter((s) => ['vocabThemes', 'flashcards', 'reviewDeck', 'cardDeck'].includes(s.type))),
    ...strings(L!.drills ?? []),
    ...strings((quizOf(L!) ?? {}) as unknown),
  ].join('\n').toLowerCase();
  for (const a of OTHER_ADJECTIVES) {
    ok(!hasWord(production, a), `"${a}" is taught on a production surface; it belongs to a1.14`);
  }
});

test('no placement rule beyond "colours follow the noun", so a1.16 keeps its', { skip: noSeed }, () => {
  const text = strings(L!.sections).join('\n').toLowerCase();
  for (const p of PLACEMENT_TEACHING) {
    ok(!text.includes(p), `"${p}" is taught here; the before/after system belongs to a1.16`);
  }
  // The one statement the brief permits IS present, because a lesson that shows
  // the pattern everywhere and never names it leaves the learner to infer it.
  ok(/after the (thing|noun)|comes after/i.test(strings(L!.sections).join('\n')),
    'the lesson never states that colours follow the noun, so the learner absorbs the pattern without being told');
});

test('no season, day, month or clock vocabulary is taught', { skip: noSeed }, () => {
  const production = [
    ...strings(L!.sections.filter((s) => ['vocabThemes', 'flashcards', 'reviewDeck', 'cardDeck'].includes(s.type))),
    ...strings(L!.drills ?? []),
  ].join('\n').toLowerCase();
  for (const w of ['été', 'hiver', 'automne', 'printemps', 'lundi', 'mardi', 'janvier', 'heure', 'minuit']) {
    ok(!hasWord(production, w), `"${w}" is taught here and belongs to another unit`);
  }
});

/* ═══ imageRef: nothing else checks this ══════════════════════════════════ */

test('every authored imageRef is registered in lessonImages.ts', { skip: noSeed }, () => {
  // NOTHING ELSE CHECKS THIS. lesson-contract.test.ts contains no reference to
  // imageRef, and the schema comment promising a check is conditional on a
  // snapshot asset manifest that does not exist today: "Once the snapshot
  // carries an asset manifest, publish fails a dangling imageRef." That is a
  // future promise about publish, not a guard that runs now.
  //
  // THE REGISTRY IS READ AS TEXT RATHER THAN IMPORTED, and that is not laziness.
  // lessonImages.ts is built on bare `require()` calls, which Metro resolves
  // statically and Node cannot resolve at all: importing it under `node --test`
  // throws "require is not defined in ES module scope" before a single
  // assertion runs. So `lessonImage()` cannot be called from any test in this
  // suite, which is a second and previously unrecorded reason nothing validates
  // imageRef. Parsing the REG keys is the strongest guard available here.
  //
  // This lesson authors NONE, deliberately: there is no colour, swatch or hex
  // field anywhere in schema.ts, registering a ref would mean committing twelve
  // swatch assets this build cannot produce, and an unregistered ref draws a
  // blank box in silence. The assertion is written to keep working if a later
  // author adds one.
  const registry = readFileSync(resolve(here, 'lessonImages.ts'), 'utf8');
  const registered = new Set([...registry.matchAll(/'([^']+\.(?:jpg|png|webp))':\s*require\(/gi)].map((m) => m[1]));
  ok(registered.size > 0, 'parsed no keys out of lessonImages.ts, so this assertion is checking nothing');

  const refs = strings(L!).filter((s) => /^lessons\/[a-z0-9-]+\/[a-z0-9-]+\.(jpg|png|webp)$/i.test(s));
  for (const r of refs) {
    ok(registered.has(r),
      `imageRef "${r}" is not registered in lessonImages.ts, so RichImage draws a blank box and nothing else would say so`);
  }
  strictEqual(refs.length, 0,
    'this lesson authors no image by design. If you add one, commit the asset, register it in lessonImages.ts, and update this count.');
});

/* ═══ The exam ════════════════════════════════════════════════════════════ */

test('the exam is at most half mcq', { skip: noSeed }, () => {
  const q = quizOf(L!);
  ok(q && q.type === 'quiz');
  const questions = quizQuestions(q as never);
  const mcq = questions.filter((x) => (x.format ?? 'mcq') === 'mcq').length;
  ok(mcq * 2 <= questions.length, `${mcq}/${questions.length} are mcq, over the half ceiling`);
});

test('every question has a why and a ref naming a section that exists', { skip: noSeed }, () => {
  const q = quizOf(L!);
  const questions = quizQuestions(q as never);
  const ids = new Set(sectionsOf(L!).map(sectionId));
  for (const x of questions) {
    ok(x.why, `no why on "${x.q}"`);
    ok(x.ref, `no ref on "${x.q}"`);
    ok(ids.has(x.ref!), `"${x.q}" refs "${x.ref}", which is not a section`);
  }
});

test('every free-text question accepts the answer it displays', { skip: noSeed }, () => {
  const questions = quizQuestions(quizOf(L!) as never);
  for (const x of questions) {
    if (!x.answer) continue;
    ok(matchesAccept(x.answer, x.accept), `"${x.q}" displays "${x.answer}" and does not accept it`);
  }
});

test('every free-text question REJECTS the wrong agreement', { skip: noSeed }, () => {
  // The assertion that makes typeIn worth using in this lesson. fold() strips
  // accents, case, punctuation and whitespace but KEEPS the final -e and -s, so
  // agreement is genuinely testable by free text. An accept list that takes both
  // forms tells the learner the ending does not matter.
  const questions = quizQuestions(quizOf(L!) as never);
  const variants = (a: string): string[] => {
    const out = new Set<string>();
    if (/es$/.test(a)) { out.add(a.slice(0, -2)); out.add(a.slice(0, -1)); }
    else if (/[es]$/.test(a)) out.add(a.slice(0, -1));
    if (!/s$/.test(a)) out.add(`${a}s`);
    if (!/e$/.test(a)) out.add(`${a}e`);
    return [...out].filter((v) => v && v !== a);
  };
  let checked = 0;
  for (const x of questions) {
    if (x.format !== 'typeIn' && x.format !== 'errorSpot' && x.format !== 'speak') continue;
    if (!x.answer) continue;
    const words = x.answer.replace(/[.?!]$/, '').split(/\s+/);
    const last = words[words.length - 1];
    for (const v of variants(last)) {
      const candidate = [...words.slice(0, -1), v].join(' ');
      ok(!matchesAccept(candidate, x.accept),
        `"${x.q}" accepts the wrong agreement "${candidate}" as well as "${x.answer}"`);
      checked++;
    }
  }
  ok(checked > 0, 'no free-text question was checked, so this assertion is checking nothing');
});

test('correct answers do not cluster in one option slot', { skip: noSeed }, () => {
  const questions = quizQuestions(quizOf(L!) as never);
  const closed = questions.filter((x) => x.opts && x.correct !== undefined);
  const counts = new Map<number, number>();
  for (const x of closed) counts.set(x.correct!, (counts.get(x.correct!) ?? 0) + 1);
  for (const [slot, n] of counts) {
    ok(n / closed.length <= 0.4,
      `${Math.round(n / closed.length * 100)}% of correct answers sit in slot ${slot} (limit 40%)`);
  }
});

test('every drill is the FIRST resolving target of exactly one round', { skip: noSeed }, () => {
  // drillForRound walks a round's targets and fires the drill of the FIRST that
  // resolves, then stops. A drill named only in second place is dead content.
  // a1.05 shipped two such drills and a1.07's first draft a third.
  const q = quizOf(L!);
  const rounds = q && q.type === 'quiz' ? (q.rounds ?? []) : [];
  const drillFor = new Map((L!.errorTriggers ?? []).map((t) => [t.id, t.drill]));
  const leads: string[] = [];
  for (const r of rounds) {
    const lead = (r.targets ?? []).find((t) => drillFor.has(t));
    ok(lead, `round ${r.id} names no target that resolves to a drill`);
    ok(!leads.includes(lead!), `round ${r.id} leads on "${lead}", which another round already leads on`);
    leads.push(lead!);
  }
  const fired = new Set(leads.map((t) => drillFor.get(t)!));
  const teaching = (L!.drills ?? []).filter((d) => !d.id.startsWith('retest-'));
  for (const d of teaching) ok(fired.has(d.id), `drill "${d.id}" can be fired by no round, so it is dead content`);
  strictEqual((L!.errorTriggers ?? []).length, SIX_TRIGGERS);
  strictEqual(rounds.length, SIX_TRIGGERS, 'one round per trigger, or a drill is unreachable');
});

test('every trigger names a drill, a retest and sections that exist', { skip: noSeed }, () => {
  const known = new Set((L!.drills ?? []).map((d) => d.id));
  const ids = new Set(sectionsOf(L!).map(sectionId));
  for (const t of L!.errorTriggers ?? []) {
    ok(known.has(t.drill), `trigger ${t.id} names drill "${t.drill}", which is not authored`);
    if (t.retest) ok(known.has(t.retest), `trigger ${t.id} names retest "${t.retest}", which is not authored`);
    for (const d of t.detectOn) {
      ok(ids.has(d.split('/')[0]), `trigger ${t.id} detects on "${d}", and that section does not exist`);
    }
  }
});

test('every sort drill names item ids that resolve', { skip: noSeed }, () => {
  // A sort drill scores against the corpus. Passing display strings validates as
  // broken ids and renders a deck of blanks.
  for (const d of L!.drills ?? []) {
    if (d.format !== 'sort') continue;
    ok((d.items ?? []).length > 0, `sort drill "${d.id}" has no items`);
    for (const i of d.items ?? []) {
      ok(ITEMS.has(i), `sort drill "${d.id}" names ${i}, which is not in the seed`);
    }
  }
});

/* ═══ The dictée, through the real dicteeMode ═════════════════════════════ */

test('every dictée target is in LETTERS mode', { skip: noSeed }, () => {
  // MEASURED, not assumed. Word mode hands the learner each whole word as a
  // pre-spelled tile, so it CANNOT test an agreement ending: tapping `vertes` is
  // not producing it. Only letters mode makes the learner write the -e and the
  // -s, which is the entire point of a dictée in this lesson.
  const s = sectionsOf(L!).find((x) => x.type === 'dictation');
  ok(s, 'there is no dictation section');
  const ids = (s as { itemIds?: string[] }).itemIds ?? [];
  ok(ids.length > 0, 'the dictée names no items');
  for (const id of ids) {
    const row = ITEMS.get(id);
    ok(row, `the dictée names ${id}, which is not in the seed`);
    strictEqual(dicteeMode(row!.fr), 'letters',
      `"${row!.fr}" lands in word mode, where the learner taps a pre-spelled tile and never writes the ending`);
    ok(row!.drills.includes('dictation'), `${id} carries no dictation drill`);
  }
});

test('the dictée covers an audible ending, a silent one, and one that must not appear', { skip: noSeed }, () => {
  const s = sectionsOf(L!).find((x) => x.type === 'dictation');
  const frs = ((s as { itemIds?: string[] }).itemIds ?? []).map((id) => ITEMS.get(id)?.fr ?? '');
  ok(frs.some((f) => /verte\./.test(f)), 'no audible feminine in the dictée');
  ok(frs.some((f) => /bleue\.|verts\./.test(f)), 'no silent ending in the dictée');
  ok(frs.some((f) => /marron\./.test(f)), 'no invariable colour in the dictée, so nothing tests the ending NOT appearing');
});

/* ═══ The speak mission ═══════════════════════════════════════════════════ */

test('every speak item carries voiceflash', { skip: noSeed }, () => {
  // An item without it renders as a card the learner cannot be scored on, which
  // looks like a broken mission rather than a missing tag.
  const s = sectionsOf(L!).find((x) => sectionId(x) === 's21-speak');
  ok(s, 'the speak mission is missing');
  const ids = (s as { itemIds?: string[] }).itemIds ?? [];
  ok(ids.length > 0, 'the speak mission names no items');
  for (const id of ids) {
    const row = ITEMS.get(id);
    ok(row, `speak names ${id}, which is not in the seed`);
    ok(row!.drills.includes('voiceflash'), `${id} "${row!.fr}" carries no voiceflash`);
  }
});

/* ═══ The reading passage and its glossary ════════════════════════════════ */

test('the reading passage is one block and its glossary can actually fire', { skip: noSeed }, () => {
  const s = sectionsOf(L!).find((x) => x.type === 'reading');
  ok(s, 'there is no reading section');
  if (!s || s.type !== 'reading') return;
  // questionsInModal WITH questions is the only path that reaches PassagePage
  // and so the only path that draws the glossary underlines. a1.01 shipped five
  // entries down the other path.
  ok(s.questionsInModal, 'reading without questionsInModal never reaches the glossary renderer');
  ok((s.questions ?? []).length > 0, 'questionsInModal with no questions renders nothing');
  ok(!s.text.includes('\n'), 'PassagePage splits on sentence ends, so an authored newline is silently discarded');

  // Checked by running the REAL segmentSentence and comparing matched KEYS, not
  // matched text. a1.08 shipped two entries that could never underline anything
  // because every occurrence sat inside a longer key, and its own test passed
  // because it compared text.
  const entries = s.glossary ?? [];
  ok(entries.length > 0, 'the reading section has no glossary');
  const keys = new Set(entries.flatMap((g) => glossKeys(g.word)).filter(Boolean));
  const hit = new Set(segmentSentence(s.text, keys).filter((x) => x.key).map((x) => x.key!));
  const unmatched = entries.filter((g) => !glossKeys(g.word).some((k) => hit.has(k)));
  strictEqual(unmatched.length, 0,
    `glossary entr(ies) that underline nothing, because a longer key shadows them or they are absent from the `
    + `passage: ${unmatched.map((g) => `"${g.word}"`).join(', ')}`);
});

/* ═══ House style ═════════════════════════════════════════════════════════ */

test('no em dash, no "honest", no U+203F anywhere in the lesson', { skip: noSeed }, () => {
  const json = JSON.stringify(L!);
  ok(!json.includes('—'), 'em dash found; the house style bans it');
  ok(!/honest/i.test(json), '"honest" is banned from authored content');
  ok(!json.includes('‿'), 'U+203F renders as a low underscore on a Pixel 6');
});

test('no grammar jargon reaches a learner surface', { skip: noSeed }, () => {
  const isIdentifier = (s: string) => !/\s/.test(s) && /^[a-z0-9][a-z0-9.\-_/]*$/i.test(s);
  const surfaces = [...strings(L!.sections), ...strings(L!.sheets ?? []), ...strings(L!.terms ?? {})];
  for (const s of surfaces) {
    if (isIdentifier(s)) continue;
    ok(!/\b(conjugaison|adjectif|(?<!')accord|masculin|féminin|invariable|déterminant)\b/i.test(s),
      `grammar vocabulary on a learner surface: "${s.slice(0, 90)}"`);
  }
});

test('no section declares more than three term chips', { skip: noSeed }, () => {
  // The renderer shows three and collapses the rest. Seven sons.06 sections
  // declare more and the extras are invisible.
  for (const s of sectionsOf(L!)) {
    const terms = (s as { terms?: string[] }).terms ?? [];
    ok(terms.length <= 3, `${sectionId(s)} declares ${terms.length} term chips; the renderer shows three`);
  }
});

test('every declared term is used, and every used term is declared', { skip: noSeed }, () => {
  const declared = new Set(Object.keys(L!.terms ?? {}));
  const used = new Set(sectionsOf(L!).flatMap((s) => (s as { terms?: string[] }).terms ?? []));
  for (const t of used) ok(declared.has(t), `section chip "${t}" names no declared term`);
  for (const t of declared) ok(used.has(t), `term "${t}" is declared and surfaced by no section`);
});

test('every term example names an item that resolves', { skip: noSeed }, () => {
  for (const [name, term] of Object.entries(L!.terms ?? {})) {
    for (const ex of term.examples ?? []) {
      ok(ITEMS.has(ex.itemId), `term "${name}" cites ${ex.itemId}, which is not in the seed`);
    }
  }
});

test('commonErrors carries swipe, or it draws a blank mission', { skip: noSeed }, () => {
  const s = sectionsOf(L!).find((x) => x.type === 'commonErrors');
  ok(s, 'there is no commonErrors section');
  ok((s as { swipe?: boolean }).swipe === true,
    'commonErrors without swipe hits a fallback that returned undefined and drew a BLANK screen (sons.08 m22, a1.01 m5)');
});

test('every sheet is reachable and every sheetId resolves', { skip: noSeed }, () => {
  const sheetIds = new Set((L!.sheets ?? []).map((s) => s.id));
  const linked = new Set(sectionsOf(L!).map((s) => (s as { sheetId?: string }).sheetId).filter(Boolean) as string[]);
  for (const id of linked) ok(sheetIds.has(id), `a section links sheet "${id}", which is not declared`);
  for (const id of sheetIds) ok(linked.has(id), `sheet "${id}" is declared and no section links it`);
});

/* ═══ Seed / source parity ════════════════════════════════════════════════ */

test('the seed copy matches the authored source, field for field', { skip: noSeed }, async () => {
  // The failure mode that has twice cost this project real work: seed.json and
  // the authoring source drift, and nothing notices until a publish erases one
  // of them. Every figure below is DERIVED from the source rather than restated.
  const src = await import('../../../ealch-admin/scripts/data/couleurs-lesson.ts') as {
    COULEURS_LESSON: Lesson;
  };
  const S = src.COULEURS_LESSON;
  strictEqual(L!.id, S.id);
  strictEqual(L!.version, S.version, 'the seed and the source disagree about the version');
  strictEqual(L!.sections.length, S.sections.length, 'section count has drifted');
  strictEqual(L!.itemIds.length, S.itemIds.length, 'itemId count has drifted');
  strictEqual(L!.reframe, S.reframe);
  strictEqual((L!.acts ?? []).length, (S.acts ?? []).length);
  strictEqual((L!.drills ?? []).length, (S.drills ?? []).length);
  strictEqual((L!.sheets ?? []).length, (S.sheets ?? []).length);
  strictEqual((L!.errorTriggers ?? []).length, (S.errorTriggers ?? []).length);
  deepStrictEqual(L!.sections.map(sectionId), S.sections.map(sectionId), 'the spine has drifted');
  deepStrictEqual(L!.itemIds, S.itemIds, 'the taught item set has drifted');
});

test('every authored corpus row in the source is in the seed, unchanged', { skip: noSeed }, async () => {
  const src = await import('../../../ealch-admin/scripts/data/couleurs-corpus.ts') as {
    COULEURS: { id: string; fr: string; en: string }[];
    AUTHORED_WORDS: { id: string; fr: string; en: string }[];
  };
  for (const w of [...src.COULEURS, ...src.AUTHORED_WORDS]) {
    const row = ITEMS.get(w.id);
    ok(row, `authored row ${w.id} "${w.fr}" never reached the seed`);
    strictEqual(row!.fr, w.fr, `${w.id} has drifted between the source and the seed`);
    strictEqual(row!.en, w.en, `${w.id}'s gloss has drifted`);
  }
});

test('the audio brief pins the contrast constraints that cannot be recovered later', { skip: noSeed }, () => {
  // A rule about HOW something is recorded becomes invisible the moment the clip
  // is delivered. The single most important note in this lesson is that the
  // SILENT pairs must be one take: recorded apart, the speaker drifts and
  // invents a difference that is not in the language, and the learner spends a
  // year listening for it.
  const recorded = L!.audio?.recorded ?? [];
  ok(recorded.length > 0, 'no recordings are briefed');
  const all = recorded.map((r) => r.desc).join('\n').toLowerCase();
  ok(/one take/.test(all), 'no recording brief requires a contrast pair to be one take');
  ok(/bleu \/ bleue|bleu\/bleue/.test(all), 'the silent pair bleu / bleue is not pinned as a single take');
  ok(/never be recorded in isolation|never recorded in isolation|not be recorded in isolation/.test(all),
    'the brief does not forbid recording a plural in isolation, which teaches a difference that does not exist');
  ok(/jaune/.test(all), 'the recording brief does not warn the reader about jaune, whose n is a real consonant');
});
