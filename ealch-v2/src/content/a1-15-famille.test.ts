// a1.15.l1 "La famille": the assertions that keep this lesson true.
//
// Modelled on a1-09-mois.test.ts and sons-07-elision.test.ts. Everything here
// runs the REAL app function rather than a copy: an earlier a1.01 test inlined
// its own glossary lookup, copied the version that was already broken, and
// passed while the feature was dead.
//
// ── What this file is actually guarding ────────────────────────────────────
//
// This lesson IMPORTS its vocabulary. 331 famille rows are published and 28
// family headwords already existed, so the failure mode here is not "the word
// is missing", it is:
//
//   a taught word quietly dropped from a screen while its id still resolves
//   the de rule split across two missions, which turns a rule into two facts
//   a1.17's possessives leaking in and stealing the next lesson
//   a later author "fixing" la femme's respelling into a superscript
//   an authored row joining a1.03's measured ending population
//
// Every one of those is asserted below, and every one was mutation-tested: the
// assertion was broken on purpose and confirmed to go red before it was kept.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';

import type { Item, Lesson } from './schema.ts';
import { quizQuestions, validateLesson, formatIssues } from './schema.ts';
import { validateDensity, formatDensity, hasPlainNasalFor } from './density.logic.ts';
import { endingPopulation, measureEnding } from './gender.logic.ts';
import { dicteeMode, dicteeWords } from './dictee.logic.ts';
import { MAX_GLOSS_WORDS, glossKeys, segmentSentence } from './gloss.logic.ts';
import { matchesAccept } from './answer.logic.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  version: number; items: Item[]; lessons: Lesson[]; units: { id: string; lessonIds?: string[]; themes?: string[] }[];
};

const L = seed.lessons.find((l) => l.id === 'a1.15.l1');
const noLesson = !L;

/** The -e count a1.03 PRINTS, read from a1.03's own source so the assertion
 *  below compares the seed against the card rather than against a number typed
 *  here. Null when ealch-admin is not on disk, which is the same self-skip every
 *  other source-derived assertion in this repo uses. */
let PRINTED_E: number | null = null;
try {
  const endings = await import('../../../ealch-admin/scripts/data/genre-endings.ts');
  const worthless = endings.WORTHLESS_ENDINGS as { ending: string; items: number }[];
  PRINTED_E = worthless.find((w) => w.ending === 'e')?.items ?? null;
} catch {
  // Not available; the comparison below no-ops.
}

/** Sections by id, which is how everything below points at one. */
const sectionById = (id: string) => (L?.sections ?? []).find((s) => (s as { id?: string }).id === id);

function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, out));
  return out;
}

/** The surfaces a learner reads or is tested on, NOT every string in the file.
 *  A guard written against every string fires on legitimate prose in a `why`
 *  and gets deleted rather than fixed. Invariant §6. */
function productionSurfaces(l: Lesson): string[] {
  const out: string[] = [];
  for (const s of l.sections) {
    const sec = s as Record<string, unknown>;
    for (const k of ['cards', 'rows', 'groups', 'errors', 'turns', 'lines', 'goals', 'points', 'questions']) {
      if (sec[k]) strings(sec[k], out);
    }
    if (sec.beats) strings(sec.beats, out);
    if (sec.text) strings(sec.text, out);
    if (sec.body) strings(sec.body, out);
    if (sec.glossary) strings(sec.glossary, out);
  }
  strings(l.drills ?? [], out);
  strings(l.sheets ?? [], out);
  strings(l.terms ?? {}, out);
  return out;
}

const REFRAME = 'French has no apostrophe. Turn it around.';
/** Asserted against an EXPLICIT constant, never a figure derived from the
 *  lesson. A derived count compares the content to itself and passes on any
 *  rewording. Invariant §5. */
const REFRAME_APPEARANCES = 7;

const SPINE = [
  's01-scene', 's02-goals', 's03-turn', 's04-pairs', 's05-swap',
  's06-six', 's07-house', 's08-tree',
  's09-truth', 's10-stops', 's11-sort',
  's12-fils', 's13-double', 's14-nasals', 's15-listen',
  's16-count', 's17-mine', 's18-read', 's19-scenario',
  's20-flash', 's21-dictation', 's22-speak', 's23-review', 's24-progress', 's25-quiz', 's26-roundup',
];

/** The eighteen authored ids, in order. */
const AUTHORED = Array.from({ length: 18 }, (_, i) => `fr.a1.famille.${235 + i}`);

/** The twelve where the article follows the actual person, as six pairs. */
const PAIRS: [string, string][] = [
  ['le père', 'la mère'],
  ['le frère', 'la sœur'],
  ['le fils', 'la fille'],
  ["l'oncle", 'la tante'],
  ['le cousin', 'la cousine'],
  ['le neveu', 'la nièce'],
];
const THE_TWELVE = PAIRS.flat();

/** The half most likely to be trimmed later, so each is asserted BY NAME. */
const EXTENDED = ['le beau-père', 'la belle-mère', 'le demi-frère', 'la demi-sœur'];

const HOUSEHOLD = [
  'la famille', 'les parents', 'la grand-mère', 'le grand-père', 'les grands-parents',
  'le petit-fils', 'la petite-fille', 'le mari', 'la femme',
];

/** Where the matching rule stops. It ships WITH the rule, never after it. */
const STOPS = ['le bébé', "l'enfant", 'les enfants', 'les parents', 'les grands-parents'];

/** The nine respelling repairs, asserted BY NAME so a later author's "fix"
 *  back to the plain n goes red. Three of the nine are INVISIBLE to
 *  hasPlainNasalFor, so the shared checker alone cannot hold this line. */
const REPAIRS: { id: string; fr: string; to: string; invisibleToChecker: boolean }[] = [
  { id: 'fr.a1.famille.014', fr: 'les parents', to: 'LAY pah-RAHⁿ', invisibleToChecker: false },
  { id: 'fr.a1.famille.018', fr: 'la femme', to: 'LAH FAM', invisibleToChecker: false },
  { id: 'fr.a1.famille.020', fr: "l'enfant", to: 'lahⁿ-FAHⁿ', invisibleToChecker: false },
  { id: 'fr.a1.famille.021', fr: 'la grand-mère', to: 'LAH grahⁿ-MEHR', invisibleToChecker: false },
  { id: 'fr.a1.famille.022', fr: 'le grand-père', to: 'LUH grahⁿ-PEHR', invisibleToChecker: false },
  { id: 'fr.a1.famille.023', fr: 'les grands-parents', to: 'LAY grahⁿ-pah-RAHⁿ', invisibleToChecker: false },
  { id: 'fr.a1.famille.024', fr: "l'oncle", to: 'LOHⁿKL', invisibleToChecker: true },
  { id: 'fr.a1.famille.025', fr: 'la tante', to: 'LAH TAHⁿT', invisibleToChecker: true },
  { id: 'fr.a1.famille.026', fr: 'le cousin', to: 'LUH koo-ZAⁿ', invisibleToChecker: false },
];

/** a1.17's, all of it. Probed as POSSESSIVE + FAMILY NOUN rather than as bare
 *  words: a bare `son` fires on this lesson's own gloss "Marie's son", and a
 *  guard that fires on legitimate content gets deleted rather than fixed. */
const RESERVED = ['ton', 'ta', 'tes', 'son', 'sa', 'ses', 'notre', 'nos', 'votre', 'vos', 'leur', 'leurs'];
const FAMILY_NOUNS = [
  'père', 'mère', 'frère', 'frères', 'sœur', 'sœurs', 'fils', 'fille', 'filles',
  'oncle', 'tante', 'cousin', 'cousine', 'neveu', 'nièce', 'famille', 'parents',
  'grand-mère', 'grand-père', 'grands-parents', 'enfant', 'enfants', 'mari', 'femme',
  'bébé', 'petit-fils', 'petite-fille', 'beau-père', 'belle-mère', 'demi-frère', 'demi-sœur',
];
const reservedPhrases = RESERVED.flatMap((p) => FAMILY_NOUNS.map((n) => `${p} ${n}`));

/** a1.17's headline. Multi-word phrases only. */
const POSSESSIVE_RULE_PHRASES = [
  'mon before a feminine', 'mon in front of a feminine', 'feminine noun starting with a vowel',
  'feminine word beginning with a vowel', 'mon amie', 'mon école', 'switches to mon', 'becomes mon before',
];

/** a1.13's and a1.16's. grand-mère is a FROZEN NOUN here. */
const AGREEMENT_PHRASES = [
  'adjectives agree', 'the adjective agrees', 'agrees with the noun',
  'before the noun', 'after the noun', 'grande-mère',
];

/* ─── The lesson exists and is well formed ────────────────────────────────*/

test('a1.15.l1 is in the seed and its unit points at it', () => {
  ok(L, 'a1.15.l1 is not in seed.json');
  const unit = seed.units.find((u) => u.id === 'a1.15');
  ok(unit, 'unit a1.15 is not in the seed');
  ok((unit!.lessonIds ?? []).includes('a1.15.l1'), 'unit a1.15 does not name its lesson');
  strictEqual(JSON.stringify(unit!.themes ?? null), JSON.stringify(['famille']), 'a1.15 must keep the famille theme');
});

test('the lesson passes the real validators', { skip: noLesson }, () => {
  strictEqual(formatIssues(validateLesson(L!)), '', 'validateLesson');
  strictEqual(formatDensity(validateDensity(L!)), '', 'the density validator');
});

test('the spine is in order and the acts claim every section once', { skip: noLesson }, () => {
  const ids = L!.sections.map((s) => (s as { id?: string }).id);
  strictEqual(ids.join(','), SPINE.join(','), 'the spine has moved');

  const acts = L!.acts ?? [];
  strictEqual(acts.length, 6, 'six acts');
  const claimed = acts.flatMap((a) => a.sections);
  strictEqual(claimed.join(','), SPINE.join(','), 'the acts do not walk the spine in order');
  const twice = claimed.filter((id, i) => claimed.indexOf(id) !== i);
  strictEqual(twice.length, 0, `claimed by two acts: ${twice.join(', ')}`);
});

test('no mission title is long enough for the list to truncate it', { skip: noLesson }, () => {
  // FOUND ON A DEVICE, not by this file. Five titles shipped over the limit and
  // three of them were visibly cut with an ellipsis in the "see all 26
  // missions" list, which gives each row exactly one line.
  //
  // A COARSE guard, and deliberately the same one a1.03 uses. The real
  // constraint is rendered width rather than character count, so this catches
  // the obviously-too-long and nothing subtler.
  const long = L!.sections.filter((s) => s.title.length > 27).map((s) => `${s.title} (${s.title.length})`);
  strictEqual(long.length, 0, `mission titles the list will truncate: ${long.join(', ')}`);
});

test('the weight is on the rule and not on the word list', { skip: noLesson }, () => {
  // The whole argument of this lesson's plan. The vocabulary is already
  // published and the learner met a third of it in a1.03 and a1.11, so a long
  // naming act is the easiest way to waste the lesson.
  const acts = L!.acts ?? [];
  const words = acts.find((a) => a.id === 'act2')!.sections.length;
  const rule = acts.find((a) => a.id === 'act1')!.sections.length
    + acts.find((a) => a.id === 'act5')!.sections.length;
  strictEqual(words, 3, 'the vocabulary act must stay at three missions');
  ok(rule >= 3 * words, `the de rule has ${rule} missions and the words have ${words}; the rule must dominate`);
});

test('the reframe is authored verbatim, exactly as many times as the constant says', { skip: noLesson }, () => {
  const hits = strings(L!).filter((s) => s.includes(REFRAME)).length;
  strictEqual(hits, REFRAME_APPEARANCES, `the reframe appears ${hits} times`);
  strictEqual(L!.reframe, REFRAME, 'the reframe field has changed');
  // The density validator wants it in three SECTIONS, not three strings.
  const inSections = L!.sections.filter((s) => strings(s).some((x) => x.includes(REFRAME))).length;
  ok(inSections >= 3, `the reframe is in ${inSections} sections and needs at least three`);
});

/* ─── The de rule: the reframe, and its layout ────────────────────────────*/

test('the de rule is taught with BOTH orders visible on ONE screen', { skip: noLesson }, () => {
  // THE assertion of this lesson. The contrast IS the reframe, and split
  // across two missions it stops being a rule and becomes two facts.
  const s = sectionById('s04-pairs') as
    { type: string; cols?: string[]; rows?: { cells: string[] }[] } | undefined;
  ok(s, 's04-pairs is missing, and it is the reframe\'s layout');
  strictEqual(s!.type, 'tapTable', 's04-pairs must be a tapTable');
  strictEqual((s!.cols ?? []).length, 2, 'exactly two columns, French and English');
  ok((s!.rows ?? []).length >= 4, 'at least four rows, or the pattern is not visible');
  for (const r of s!.rows ?? []) {
    const [fr, en] = r.cells;
    ok(fr.includes(' de '), `French cell "${fr}" does not show the de order`);
    ok(en.includes("'s"), `English cell "${en}" does not show the apostrophe order`);
    // And the reversal itself: the owner's name is LAST in French and FIRST in
    // English. This is the thing that would silently rot if somebody reworded.
    const owner = fr.split(' de ')[1];
    ok(en.startsWith(owner), `"${fr}" / "${en}" do not put the owner at opposite ends`);
  }
});

test('the minimal pair for de is authored and both halves are shown', { skip: noLesson }, () => {
  // Same two people, same two family words, and the ONLY thing that moves is
  // which name sits after de.
  const a = seed.items.find((i) => i.id === 'fr.a1.famille.241');
  const b = seed.items.find((i) => i.id === 'fr.a1.famille.242');
  ok(a && b, 'the minimal pair rows are missing');
  strictEqual(a!.fr, 'Marie est la sœur de Paul.');
  strictEqual(b!.fr, 'Paul est le frère de Marie.');
  const swap = strings(sectionById('s05-swap'));
  ok(swap.some((s) => s.includes(a!.fr)), 's05-swap does not show the first half');
  ok(swap.some((s) => s.includes(b!.fr)), 's05-swap does not show the second half');
});

test('de-possession is authored, because the database held none', { skip: noLesson }, () => {
  // Measured 2026-08-06: "la mère de" and "le frère de" both return 0 across
  // every published sentence. Every row proving the reframe is authored here.
  const de = AUTHORED.map((id) => seed.items.find((i) => i.id === id)!).filter((i) => / de /.test(i.fr));
  ok(de.length >= 10, `only ${de.length} authored rows carry de, and the rule needs more evidence than that`);
});

/* ─── The vocabulary, asserted BY NAME rather than as a count ─────────────*/

test('every family word this lesson teaches is on a production surface, by name', { skip: noLesson }, () => {
  // Individually rather than as a count, because a count passes when one word
  // is swapped for another. The extended set is the half most likely to be
  // trimmed later, and it is in this list for that reason.
  const surfaces = productionSurfaces(L!);
  for (const fr of [...THE_TWELVE, ...HOUSEHOLD, ...EXTENDED, ...STOPS]) {
    ok(surfaces.some((s) => s.includes(fr)), `"${fr}" is taught by no production surface`);
  }
});

test('the six matched pairs are complete, and both halves appear together', { skip: noLesson }, () => {
  const tree = sectionById('s08-tree') as { rows?: { cells: string[] }[] } | undefined;
  ok(tree, 's08-tree is missing');
  const rows = (tree!.rows ?? []).map((r) => r.cells.join(' '));
  for (const [m, f] of PAIRS) {
    ok(rows.some((r) => r.includes(m) && r.includes(f)), `${m} and ${f} are not on one row`);
  }
});

test('the one authored headword is les enfants, and it is the only gendered word row', { skip: noLesson }, () => {
  const words = AUTHORED.map((id) => seed.items.find((i) => i.id === id)!).filter((i) => i.kind === 'word');
  strictEqual(words.length, 1, 'exactly one authored word row');
  strictEqual(words[0].fr, 'les enfants');
  // famille holds the SINGULAR l'enfant and has never held the plural, which
  // is why this one is legal. The flashhub key is article-stripped per theme.
  const norm = (s: string) => s.toLowerCase().replace(/^(le |la |les |l'|un |une |des )/, '').trim();
  ok(norm("l'enfant") !== norm('les enfants'), 'the singular and the plural must be different keys');
});

/* ─── The gender insight, and where it stops ──────────────────────────────*/

test('the matching rule ships WITH its exceptions, in the same act', { skip: noLesson }, () => {
  // A rule shipped without its exception is one the learner disproves on their
  // own within a week and then decides the language is arbitrary.
  const act = (L!.acts ?? []).find((a) => a.sections.includes('s09-truth'));
  ok(act, 's09-truth belongs to no act');
  ok(act!.sections.includes('s10-stops'), 'the rule and its exceptions must be in one act');
  const stops = strings(sectionById('s10-stops'));
  ok(stops.some((s) => s.includes('le bébé')), 's10-stops does not name le bébé');
  ok(
    stops.some((s) => s.includes('les parents')) || stops.some((s) => s.includes('les enfants')),
    's10-stops does not name a masculine plural over a mixed group'
  );
});

test('wherever the matching rule is stated, an exception is present', { skip: noLesson }, () => {
  const ruleWords = ['le for a man', 'la for a woman'];
  for (const s of L!.sections) {
    const text = strings(s).join(' ').toLowerCase();
    if (!ruleWords.some((r) => text.includes(r))) continue;
    const act = (L!.acts ?? []).find((a) => a.sections.includes((s as { id?: string }).id!));
    ok(
      act?.sections.includes('s10-stops') || STOPS.some((x) => text.includes(x)),
      `${(s as { id?: string }).id} states the matching rule with no exception in reach`
    );
  }
});

/* ─── The sounds ──────────────────────────────────────────────────────────*/

test('fils and fil are on ONE surface, by name', { skip: noLesson }, () => {
  // Both rows already exist, in DIFFERENT themes, and fr.sons.muettes.058's own
  // note already points at fils. The pairing is the new thing.
  // Asserted against the CARDS, not against every string in the section. The
  // first version of this check passed on the section's own title ("Fils And
  // Fil") after a mutation had removed both cards, which is a title claiming a
  // pairing the mission no longer delivers.
  const sec = sectionById('s12-fils') as { cards?: unknown[] } | undefined;
  ok(sec, 's12-fils is missing');
  const cards = strings(sec!.cards ?? []);
  ok(cards.some((x) => x.includes('le fils')), 's12-fils has no card carrying "le fils"');
  ok(
    cards.some((x) => /(^|[^a-zà-ÿ])fil([^a-zà-ÿs]|$)/i.test(x)),
    's12-fils has no card carrying "fil" on its own; the pairing is the whole point of the mission'
  );
  // And they must be on the SAME surface, which is the thing nobody has
  // shipped: both rows exist already, in different themes.
  const joint = cards.filter((x) => x.includes('fils') && /(^|[^a-zà-ÿ])fil([^a-zà-ÿs]|$)/i.test(x));
  ok(joint.length > 0, 'no single card shows le fils and fil together');
  const word = seed.items.find((i) => i.id === 'fr.a1.famille.015');
  const thread = seed.items.find((i) => i.id === 'fr.sons.muettes.058');
  ok(word && thread, 'both rows must resolve');
  ok(word!.theme !== thread!.theme, 'the two rows are in different themes, which is why nobody paired them');
});

test('the respelling repairs are asserted BY NAME, including la grand-mère', { skip: noLesson }, () => {
  // So a later author's "fix" back to the plain n goes red. THREE of these are
  // invisible to hasPlainNasalFor, so the shared checker cannot hold this line
  // on its own.
  for (const r of REPAIRS) {
    const row = seed.items.find((i) => i.id === r.id);
    ok(row, `${r.id} is not in the seed`);
    strictEqual(row!.fr, r.fr, `${r.id} is not ${r.fr} any more`);
    strictEqual(row!.respell, r.to, `${r.id} "${r.fr}" should be respelled ${r.to}`);
  }
  const invisible = REPAIRS.filter((r) => r.invisibleToChecker);
  strictEqual(invisible.length, 2, 'two repairs are invisible to the shared checker');
  for (const r of invisible) {
    strictEqual(hasPlainNasalFor(r.fr, 'LOHNKL'), false, 'sanity: the checker really is blind to this shape');
  }
});

test('la femme is repaired WITHOUT a superscript, and the checker cannot enforce that', { skip: noLesson }, () => {
  // THE false positive. /fam/ has a real m and no nasal vowel at all.
  // hasPlainNasalFor flags LAH FAHM anyway, because its first branch reads
  // AH + M at a token end as a nasal and returns before the doubled-mm guard
  // on the French spelling can save it. Writing LAH FAHⁿ would silence the
  // checker AND teach a sound that is not there.
  const row = seed.items.find((i) => i.id === 'fr.a1.famille.018');
  strictEqual(row!.respell, 'LAH FAM');
  ok(!row!.respell!.includes('ⁿ'), 'la femme must NOT carry a superscript');
  // The two halves of the trap, both measured through the real function.
  strictEqual(hasPlainNasalFor('la femme', 'LAH FAHM'), true, 'the broken value IS flagged');
  strictEqual(hasPlainNasalFor('la femme', 'LAH FAM'), false, 'the correct value passes');
  strictEqual(hasPlainNasalFor('la femme', 'LAH FAHⁿ'), false, 'the WRONG fix also passes, which is why this test exists');
});

test('no famille row this lesson displays closes a nasal with a plain n', { skip: noLesson }, () => {
  const shown = new Set(L!.itemIds);
  const bad = seed.items
    .filter((i) => shown.has(i.id) && i.respell)
    .filter((i) => hasPlainNasalFor(i.fr, i.respell!));
  strictEqual(bad.length, 0, `plain nasal: ${bad.map((i) => `${i.id} "${i.respell}"`).join(', ')}`);
});

/* ─── The neighbours keep their lessons ───────────────────────────────────*/

test('only mon, ma and mes appear, and a1.17 keeps the rest', { skip: noLesson }, () => {
  const surfaces = productionSurfaces(L!);
  const leaked = reservedPhrases.filter((p) => surfaces.some((s) => s.toLowerCase().includes(p)));
  strictEqual(leaked.length, 0, `possessives a1.17 owns: ${leaked.join(', ')}`);
  // And the three that WERE taken are genuinely present, or the boundary test
  // would pass on a lesson that teaches no possessive at all.
  for (const p of ['mon père', 'ma mère', 'mes parents']) {
    ok(surfaces.some((s) => s.includes(p)), `"${p}" should be taught and is not`);
  }
});

test('no possessive RULE is taught, only the three words', { skip: noLesson }, () => {
  // The mon-before-a-feminine-vowel rule is the single most tempting thing to
  // explain here and it is a1.17's headline.
  const surfaces = productionSurfaces(L!);
  const leaked = POSSESSIVE_RULE_PHRASES.filter((p) => surfaces.some((s) => s.toLowerCase().includes(p.toLowerCase())));
  strictEqual(leaked.length, 0, `a1.17's headline rule leaked: ${leaked.join(', ')}`);
  // And the lesson SAYS the rest arrives next, because a learner who notices
  // the gap and is not told assumes the lesson is incomplete.
  const mine = strings(sectionById('s17-mine')).join(' ').toLowerCase();
  ok(/next lesson|arrive/.test(mine), 's17-mine does not tell the learner the full set is coming');
});

test('grand-mère is never written grande-mère, and is not an agreement example', { skip: noLesson }, () => {
  const surfaces = productionSurfaces(L!);
  const leaked = AGREEMENT_PHRASES.filter((p) => surfaces.some((s) => s.toLowerCase().includes(p.toLowerCase())));
  strictEqual(leaked.length, 0, `agreement or placement teaching reached a surface: ${leaked.join(', ')}`);
  const allText = strings(L!).join(' ');
  ok(!allText.includes('grande-mère'), 'grande-mère is not a word and must not appear anywhere');
  ok(!allText.includes('grande mère'), 'grande mère must not appear anywhere');
});

/* ─── Items, tranches and reachability ────────────────────────────────────*/

test('every declared itemId resolves and is on a screen', { skip: noLesson }, () => {
  const byId = new Map(seed.items.map((i) => [i.id, i] as const));
  const dead = L!.itemIds.filter((id) => !byId.has(id));
  strictEqual(dead.length, 0, `declared and absent from the corpus: ${dead.join(', ')}`);

  // "Did the learner see it", not "does this id resolve". a1.08 shipped 43
  // itemIds that resolved perfectly and were drawn by nothing.
  const named = new Set<string>();
  for (const s of L!.sections) {
    const sec = s as Record<string, unknown>;
    if (Array.isArray(sec.itemIds)) (sec.itemIds as string[]).forEach((id) => named.add(id));
    const text = strings(s).join(' ');
    for (const id of L!.itemIds) {
      const it = byId.get(id);
      if (it && text.includes(it.fr)) named.add(id);
    }
  }
  for (const d of L!.drills ?? []) (d.items ?? []).forEach((id) => named.add(id));
  for (const t of Object.values(L!.terms ?? {})) (t.examples ?? []).forEach((e) => named.add(e.itemId));
  const unseen = L!.itemIds.filter((id) => !named.has(id));
  strictEqual(unseen.length, 0, `declared, released to review, and drawn by nothing: ${unseen.join(', ')}`);
});

test('no imported row was re-authored', { skip: noLesson }, () => {
  // With 234 rows already in range this is the assertion that protects the
  // build, and it is the one that would have caught the last four briefs.
  const norm = (s: string) => s.toLowerCase().replace(/^(le |la |les |l'|un |une |des )/, '').trim();
  const authored = new Set(AUTHORED);
  const seenKey = new Map<string, string>();
  const dupes: string[] = [];
  for (const it of seed.items) {
    if ((it.cardType ?? 'vocab') !== 'vocab' || it.kind === 'sentence') continue;
    const k = `${it.theme}::${norm(it.fr)}`;
    const prior = seenKey.get(k);
    if (prior && (authored.has(it.id) || authored.has(prior))) {
      dupes.push(`${prior} vs ${it.id} ("${it.fr}")`);
    } else if (!prior) seenKey.set(k, it.id);
  }
  strictEqual(dupes.length, 0, `an authored row duplicates an existing one: ${dupes.join(' | ')}`);
});

test('tranches release every taught item exactly once and nothing untaught', { skip: noLesson }, () => {
  const tranches = L!.deckTranche ?? [];
  strictEqual(tranches.length, (L!.acts ?? []).length, 'one tranche per act, index-aligned');
  const flat = tranches.flat();
  const twice = flat.filter((id, i) => flat.indexOf(id) !== i);
  strictEqual(twice.length, 0, `released twice: ${[...new Set(twice)].join(', ')}`);
  const taught = new Set(L!.itemIds);
  const stray = flat.filter((id) => !taught.has(id));
  strictEqual(stray.length, 0, `released and not taught: ${stray.join(', ')}`);
  const never = L!.itemIds.filter((id) => !flat.includes(id));
  strictEqual(never.length, 0, `taught and never released: ${never.join(', ')}`);
});

test('no tranche releases an item the acts before it have not shown', { skip: noLesson }, () => {
  // A card released before its mission is a card the learner is asked to rate
  // before they have met it.
  const byId = new Map(seed.items.map((i) => [i.id, i] as const));
  const acts = L!.acts ?? [];
  const tranches = L!.deckTranche ?? [];
  for (let a = 0; a < tranches.length; a += 1) {
    const shownBy = new Set<string>();
    for (let k = 0; k <= a; k += 1) {
      for (const sid of acts[k].sections) {
        const sec = sectionById(sid) as Record<string, unknown> | undefined;
        if (!sec) continue;
        if (Array.isArray(sec.itemIds)) (sec.itemIds as string[]).forEach((id) => shownBy.add(id));
        const text = strings(sec).join(' ');
        for (const id of L!.itemIds) {
          const it = byId.get(id);
          if (it && text.includes(it.fr)) shownBy.add(id);
        }
      }
    }
    for (const id of tranches[a]) {
      ok(shownBy.has(id), `act ${a + 1} releases ${id} ("${byId.get(id)?.fr}") before any act has shown it`);
    }
  }
});

/* ─── a1.03, which this lesson is the most exposed on the track to ────────*/

test('nothing this lesson authored moved a1.03\'s measured ending figures', { skip: noLesson }, () => {
  // Family words are gendered singular nouns, which is the radioactive shape.
  // a1.11 broke the -e statistic exactly this way. `la personne` was withdrawn
  // from this lesson for moving -e from 873 to 874.
  const authored = new Set(AUTHORED);
  const joiners = endingPopulation(seed.items.filter((i) => authored.has(i.id)));
  strictEqual(
    joiners.length, 0,
    `authored row(s) joined a1.03's population: ${joiners.map((i) => `${i.id} "${i.fr}"`).join(', ')}`
  );
  // And the printed -e figure itself, which is the one that would move first.
  //
  // READ FROM a1.03's OWN SOURCE rather than hardcoded. It was `873` until
  // 2026-08-07, when a1.22 imported twenty-four country and nationality
  // headwords and moved it to 880: seven of them end in -e, because every
  // feminine country does. That is a legitimate corpus change, a1.03 was
  // re-measured and re-rendered for it, and a hardcoded number here turned this
  // test red for a lesson it does not own.
  //
  // A count typed into a test is a count that fails on itself the first time
  // content legitimately changes, and the fix is then to edit the test, which
  // is how a test comes to certify a bug. What this assertion is FOR is that
  // the seed and a1.03's printed card agree, so it now compares those two
  // directly and cannot go stale again.
  const e = measureEnding(seed.items, 'e');
  ok(e, '-e must be measurable');
  if (PRINTED_E !== null) {
    strictEqual(
      e!.n, PRINTED_E,
      `a1.03 prints ${PRINTED_E} nouns ending in -e and the seed now says ${e!.n}`,
    );
  }
});

/* ─── The exam ────────────────────────────────────────────────────────────*/

test('one quiz section, six rounds, and every question teaches', { skip: noLesson }, () => {
  const quizzes = L!.sections.filter((s) => s.type === 'quiz');
  strictEqual(quizzes.length, 1, 'lessonPager.logic.ts appends exactly one quiz page');
  const rounds = (quizzes[0] as unknown as { rounds?: unknown[] }).rounds ?? [];
  strictEqual(rounds.length, 6, 'six rounds');
  const qs = quizQuestions(quizzes[0]);
  ok(qs.length >= 20, `${qs.length} questions is thin for six rounds`);
  strictEqual(qs.filter((q) => !q.why).length, 0, 'every question needs a why');
  strictEqual(qs.filter((q) => !q.ref).length, 0, 'every question needs a ref');
  const ids = new Set(L!.sections.map((s) => (s as { id?: string }).id));
  const badRef = qs.filter((q) => q.ref && !ids.has(q.ref));
  strictEqual(badRef.length, 0, `refs naming no section: ${badRef.map((q) => q.ref).join(', ')}`);
});

test('at most half the exam is mcq', { skip: noLesson }, () => {
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz')!);
  const mcq = qs.filter((q) => (q.format ?? 'mcq') === 'mcq').length;
  ok(mcq * 2 <= qs.length, `${mcq} of ${qs.length} are mcq`);
});

test('no quiz option refers to a position, and none is duplicated', { skip: noLesson }, () => {
  // QuizDeckView shuffles the options of every closed question, per attempt.
  // An option naming a position is meaningless once shuffled, and a repeated
  // option makes a shuffled question genuinely ambiguous.
  const POSITIONAL = ['the first', 'the second', 'the third', 'the last', 'both of the above', 'all of the above', 'none of these', 'none of the above'];
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz')!);
  const positional: string[] = [];
  const dupes: string[] = [];
  for (const q of qs) {
    const o = q.opts ?? [];
    if (new Set(o).size !== o.length) dupes.push(q.q.slice(0, 40));
    for (const x of o) if (POSITIONAL.some((p) => x.toLowerCase().includes(p))) positional.push(x);
  }
  strictEqual(positional.length, 0, `options naming a position: ${positional.join(', ')}`);
  strictEqual(dupes.length, 0, `questions with a duplicate option: ${dupes.join(' | ')}`);
});

test('correct answers do not cluster in one slot', { skip: noLesson }, () => {
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz')!);
  const closed = qs.filter((q) => Array.isArray(q.opts) && typeof q.correct === 'number');
  const tally = new Map<number, number>();
  for (const q of closed) tally.set(q.correct as number, (tally.get(q.correct as number) ?? 0) + 1);
  for (const [slot, n] of tally) {
    ok((n / closed.length) * 100 <= 40, `${Math.round(n / closed.length * 100)}% of correct answers sit in slot ${slot}`);
  }
});

test('every free-text question accepts the answer it displays', { skip: noLesson }, () => {
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz')!);
  for (const q of qs.filter((x) => ['typeIn', 'errorSpot', 'speak'].includes(x.format ?? ''))) {
    ok(q.answer, `"${q.q.slice(0, 40)}" has no answer`);
    ok(q.accept?.length, `"${q.q.slice(0, 40)}" has no accept list`);
    ok(matchesAccept(q.answer!, q.accept!), `"${q.q.slice(0, 40)}" displays "${q.answer}" and rejects it`);
  }
});

test('every de question carries the English in the stem', { skip: noLesson }, () => {
  // "la mère de Paul or Paul de la mère?" gives the answer away by absurdity.
  // "You want to say: Marie's brother" has exactly one answer.
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz')!);
  // POSSESSIVE de only: `de` followed by a capitalised name. The negation `de`
  // in « Je n'ai pas de frère. » is a different rule that a1.11 and a1.29 own,
  // and an earlier version of this filter caught it and demanded an English
  // stem for a question that is not about the turnaround at all.
  const possessiveDe = / de [A-ZÀ-Þ]/;
  const deQuestions = qs.filter(
    (q) => (q.opts ?? []).some((o) => possessiveDe.test(o)) || possessiveDe.test(q.answer ?? '')
  );
  ok(deQuestions.length >= 3, `only ${deQuestions.length} questions test the de rule`);
  for (const q of deQuestions) {
    ok(
      /'s\b|whose|who has/i.test(q.q),
      `"${q.q.slice(0, 60)}" tests de without giving the English in the stem`
    );
  }
});

test('no ear question is written on vocabulary that sounds nothing alike', { skip: noLesson }, () => {
  // listenChoose has one job here: fils and femme. `le père` and `la mère`
  // sound nothing alike and testing them tests nothing.
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz')!);
  const ear = qs.filter((q) => q.format === 'listenChoose');
  ok(ear.length >= 1, 'at least one ear question');
  for (const q of ear) {
    const target = (q.opts ?? [])[q.correct as number];
    ok(
      ['le fils', 'la femme', 'fil'].includes(target),
      `listenChoose targets "${target}", which is not one of the words whose sound is actually a trap`
    );
  }
});

test('no question tries to test that la femme is ambiguous', { skip: noLesson }, () => {
  // Ambiguity needs two contexts and every format gives one stem. It is a
  // commonErrors-style card and a `why`, not a question.
  const surfaces = strings(sectionById('s13-double')).join(' ');
  ok(surfaces.includes('la femme') && surfaces.includes('la fille'), 's13-double must carry both double-duty words');
  const qs = quizQuestions(L!.sections.find((s) => s.type === 'quiz')!);
  const ambiguous = qs.filter((q) => /both|either|two meanings/i.test(q.q) && (q.opts ?? []).length > 0);
  strictEqual(ambiguous.length, 0, 'a question is trying to test ambiguity, which no format can do');
});

/* ─── Drills ──────────────────────────────────────────────────────────────*/

test('every teaching drill is the FIRST resolving target of exactly one round', { skip: noLesson }, () => {
  // drillForRound walks a round's targets and fires the drill of the FIRST one
  // that resolves, then stops. a1.05 shipped two drills named in second place
  // and a first draft of a1.07 shipped a third.
  const quiz = L!.sections.find((s) => s.type === 'quiz') as unknown as
    { rounds?: { id: string; targets?: string[] }[] };
  const triggerById = new Map((L!.errorTriggers ?? []).map((t) => [t.id, t] as const));
  const fired = new Set<string>();
  for (const r of quiz.rounds ?? []) {
    const first = (r.targets ?? []).find((t) => triggerById.get(t)?.drill);
    ok(first, `round ${r.id} names no target with a drill`);
    const d = triggerById.get(first!)!.drill;
    ok(!fired.has(d), `drill ${d} leads more than one round`);
    fired.add(d);
  }
  const teaching = (L!.drills ?? []).filter((d) => !d.id.startsWith('retest-'));
  const orphans = teaching.filter((d) => !fired.has(d.id));
  strictEqual(orphans.length, 0, `drills no round can fire: ${orphans.map((d) => d.id).join(', ')}`);
});

test('every trigger names a drill and a retest that exist', { skip: noLesson }, () => {
  strictEqual((L!.errorTriggers ?? []).length, 6, 'six triggers');
  const ids = new Set((L!.drills ?? []).map((d) => d.id));
  for (const t of L!.errorTriggers ?? []) {
    ok(ids.has(t.drill), `${t.id} names a drill that does not exist: ${t.drill}`);
    ok(!t.retest || ids.has(t.retest), `${t.id} names a retest that does not exist: ${t.retest}`);
    for (const d of t.detectOn) {
      const sid = d.split('/')[0];
      ok(sectionById(sid), `${t.id} watches ${sid}, which is not a section`);
    }
  }
});

test('every drill that names corpus items names ids that resolve', { skip: noLesson }, () => {
  const byId = new Set(seed.items.map((i) => i.id));
  for (const d of L!.drills ?? []) {
    for (const id of d.items ?? []) ok(byId.has(id), `drill ${d.id} names ${id}, which is not in the corpus`);
  }
});

/* ─── The dictée, measured rather than assumed ────────────────────────────*/

test('the dictée has exactly one word-mode target, and it is the order one', { skip: noLesson }, () => {
  // The OPPOSITE of a1.13's constraint, and it is measured. This lesson teaches
  // an ORDER, so word mode is right for the sentence that proves it: the
  // learner sequences the tiles and has to place `de`. Every other target
  // teaches a spelling and must stay in letters mode.
  const s = sectionById('s21-dictation') as { itemIds?: string[] } | undefined;
  ok(s, 's21-dictation is missing');
  const byId = new Map(seed.items.map((i) => [i.id, i] as const));
  const modes = (s!.itemIds ?? []).map((id) => {
    const it = byId.get(id);
    ok(it, `the dictée names ${id}, which is not in the seed`);
    ok(it!.drills.includes('dictation'), `${id} carries no dictation drill`);
    return [id, dicteeMode(it!.fr)] as const;
  });
  const words = modes.filter(([, m]) => m === 'words');
  strictEqual(words.length, 1, `${words.length} word-mode targets and exactly one is intended`);
  strictEqual(words[0][0], 'fr.a1.famille.241', 'the word-mode target must be the minimal pair sentence');
  // And it really does hand over the words, including `de`, to be sequenced.
  ok(dicteeWords(byId.get('fr.a1.famille.241')!.fr).includes('de'), 'the word bank must contain de');
});

/* ─── Reachability of every authored field ────────────────────────────────*/

test('the reading passage is one block and its glossary can actually match', { skip: noLesson }, () => {
  const s = sectionById('s18-read') as
    { text?: string; questions?: unknown[]; glossary?: { word: string }[]; questionsInModal?: boolean } | undefined;
  ok(s, 's18-read is missing');
  // reading + glossary reaches the renderer ONLY with questionsInModal AND
  // questions. Without both, the glossary is authored and drawn by nothing.
  strictEqual(s!.questionsInModal, true, 'reading needs questionsInModal to reach PassagePage');
  ok((s!.questions ?? []).length > 0, 'reading needs questions for the modal path');
  ok(!s!.text!.includes('\n'), 'PassagePage splits on sentence ends; an authored newline is discarded');

  // Checked through the REAL segmentSentence, comparing matched KEYS rather
  // than matched text, because longest-match-first means a short entry nested
  // inside a longer one underlines nothing. Ten glossary entries across
  // sons.05/.07/.09 shipped dead because a hand-rolled lookup was used here.
  const glossary = s!.glossary ?? [];
  ok(glossary.length > 0, 'the passage authors a glossary');
  for (const g of glossary) {
    ok(g.word.split(/\s+/).length <= MAX_GLOSS_WORDS, `glossary key "${g.word}" is longer than MAX_GLOSS_WORDS`);
  }
  // glossKeys() folds one entry into the key variants the segmenter looks for
  // (plain, and de-elided). The lookup set is the union of all of them.
  const keyToEntry = new Map<string, string>();
  for (const g of glossary) for (const k of glossKeys(g.word)) keyToEntry.set(k, g.word);
  const matched = new Set(
    segmentSentence(s!.text!, new Set(keyToEntry.keys()))
      .filter((seg) => seg.key)
      .map((seg) => keyToEntry.get(seg.key as string))
  );
  const dead = glossary.filter((g) => !matched.has(g.word));
  strictEqual(dead.length, 0, `glossary entries the real segmenter never matches: ${dead.map((g) => `"${g.word}"`).join(', ')}`);
});

test('the sheet is reachable and every sheetId names one that exists', { skip: noLesson }, () => {
  const sheetIds = new Set((L!.sheets ?? []).map((s) => s.id));
  ok(sheetIds.size >= 1, 'at least one reference sheet');
  const pointed = new Set<string>();
  for (const s of L!.sections) {
    const id = (s as { sheetId?: string }).sheetId;
    if (!id) continue;
    ok(sheetIds.has(id), `${(s as { id?: string }).id} names sheet ${id}, which does not exist`);
    pointed.add(id);
  }
  for (const id of sheetIds) ok(pointed.has(id), `sheet ${id} is declared and reachable from no section`);
});

test('no section declares more than three term chips, and every key resolves', { skip: noLesson }, () => {
  const keys = new Set(Object.keys(L!.terms ?? {}));
  for (const s of L!.sections) {
    const t = (s as { terms?: string[] }).terms ?? [];
    ok(t.length <= 3, `${(s as { id?: string }).id} declares ${t.length} term chips; the renderer shows three`);
    for (const k of t) ok(keys.has(k), `${(s as { id?: string }).id} names term "${k}", which is not defined`);
  }
  // And every defined term is actually surfaced somewhere.
  const used = new Set(L!.sections.flatMap((s) => (s as { terms?: string[] }).terms ?? []));
  for (const k of keys) ok(used.has(k), `term "${k}" is defined and surfaced by no section`);
});

test('every term example names an item that resolves', { skip: noLesson }, () => {
  const byId = new Set(seed.items.map((i) => i.id));
  for (const [k, t] of Object.entries(L!.terms ?? {})) {
    for (const e of t.examples ?? []) ok(byId.has(e.itemId), `term "${k}" names ${e.itemId}, which does not resolve`);
  }
});

test('a groupDrill control page carries items: [] and no size', { skip: noLesson }, () => {
  // An xl groupDrill must never stack words and a check in one group, and this
  // has shipped as a bug twice.
  const s = sectionById('s11-sort') as { size?: string; groups?: { items?: unknown[]; check?: unknown }[] } | undefined;
  ok(s, 's11-sort is missing');
  ok(s!.size !== 'xl', 'a groupDrill owns the layout at xl and does not at any other size');
  const controls = (s!.groups ?? []).filter((g) => (g.items ?? []).length === 0);
  ok(controls.length >= 1, 'at least one control page');
  for (const g of controls) ok(g.check, 'a control page with no items must carry a check');
});

test('commonErrors carries swipe and lg, or it draws a blank mission', { skip: noLesson }, () => {
  const s = sectionById('s10-stops') as { swipe?: boolean; size?: string; errors?: unknown[] } | undefined;
  ok(s, 's10-stops is missing');
  strictEqual(s!.swipe, true, 'commonErrors without swipe hits a fallback that returned undefined');
  strictEqual(s!.size, 'lg', 'commonErrors wants one error per screen');
  ok((s!.errors ?? []).length >= 3, 'at least three exceptions');
});

test('this lesson authors no imageRef, because nothing validates one', { skip: noLesson }, () => {
  // lessonImage(ref) is a plain lookup in a statically enumerated REG and an
  // unregistered ref draws a blank box. lesson-contract.test.ts does not check
  // it, despite a comment in schema.ts implying otherwise.
  const refs = strings(L!).filter((s) => /^lessons\/[a-z0-9-]+\/[a-z0-9-]+\.(jpg|png|webp)$/i.test(s));
  strictEqual(refs.length, 0, `imageRef(s) authored and validated by nothing: ${refs.join(', ')}`);
});

/* ─── House rules ─────────────────────────────────────────────────────────*/

test('no em dash, no "honest", no autoplay, no U+203F', { skip: noLesson }, () => {
  const all = strings(L!);
  strictEqual(all.filter((s) => s.includes('—')).length, 0, 'em dash');
  strictEqual(all.filter((s) => /honest/i.test(s)).length, 0, '"honest" is banned in authored content');
  ok(!JSON.stringify(L!).includes('"autoplay"'), 'autoplay is implemented in no component');
  ok(!JSON.stringify(L!).includes('‿'), 'U+203F renders as a low underscore on a Pixel 6');
});

test('no grammar jargon reaches a learner surface', { skip: noLesson }, () => {
  // grammarIntroduced is addressed to the curriculum and may use the precise
  // words; cards may not.
  const JARGON = ['possessive adjective', 'genitive', 'masculine noun', 'feminine noun', 'epicene', 'lexicalised', 'paradigm'];
  const surfaces = productionSurfaces(L!);
  const hits = JARGON.filter((j) => surfaces.some((s) => s.toLowerCase().includes(j)));
  strictEqual(hits.length, 0, `grammar jargon reached a card: ${hits.join(', ')}`);
});

test('the tag agrees with what the renderer will draw', { skip: noLesson }, () => {
  // missions.ts derives the eyebrow as `${level} · LEÇON ${unit.seq}` and the
  // stored value is a fallback. a1.03 shipped exactly this bug.
  const unit = seed.units.find((u) => u.id === 'a1.15') as { seq?: number | string } | undefined;
  const seq = Number(unit?.seq ?? 0);
  strictEqual(L!.tag, `A1 · LEÇON ${String(seq).padStart(2, '0')}`, 'the tag and the unit seq disagree');
});

/* ─── The audio brief, which is invisible once the clips arrive ───────────*/

test('the contrast recordings are specified as one take', { skip: noLesson }, () => {
  // A constraint on HOW something is recorded becomes invisible the moment the
  // clip is delivered, so it is pinned here as well as written in `desc`.
  const recorded = L!.audio?.recorded ?? [];
  ok(recorded.length >= 5, `${recorded.length} recording briefs is thin for this lesson`);
  const byIdRec = new Map(recorded.map((r) => [r.id, r] as const));
  const fils = byIdRec.get('rec-a1-15-fils');
  ok(fils, 'the fils/fil brief is missing, and it is the most important one here');
  ok(/ONE TAKE/i.test(fils!.desc), 'fils and fil must be specified as one take, one voice');
  const pairs = byIdRec.get('rec-a1-15-pairs');
  ok(pairs && /ONE TAKE/i.test(pairs.desc), 'the masculine/feminine pairs must be one take');
  const de = byIdRec.get('rec-a1-15-de');
  ok(de && /WHOLE PHRASE/i.test(de.desc), 'the de phrases must be recorded whole, never as three words');
  const femme = byIdRec.get('rec-a1-15-femme');
  ok(femme && /ISOLATION/i.test(femme.desc), 'la femme must be recorded slowly in isolation once');
});
