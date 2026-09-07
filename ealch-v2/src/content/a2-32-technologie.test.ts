// a2.32.l1 « La technologie » — the guard.
//
// Invariants §6, plus the four holes every guard in this band still carries:
//
//   1. THE JARGON WALK MUST COVER `Lesson.intro` AND `overview`. `prose()`
//      drops `sub`, so the checks run over a raw string walk, and the `-s`
//      plural of every JARGON entry is checked too. A throwing source silently
//      disables about thirty assertions, so the walk is built once and the
//      count is asserted.
//   2. THE HOUSE WORD BOUNDARY EXCLUDES `'`, so it cannot see `l'écran`,
//      `j'ai` or `qu'est-ce`. This unit's lexicon elides constantly. The
//      apostrophe is dropped from the LEFT boundary and kept on the right.
//   3. `\bhonest` CANNOT SEE "dishonest". The banned-word guard fires on the
//      SUBSTRING, in both directions, and is deliberately not word-bounded.
//   4. THE DOUBLE-STOP GUARD IS HALF THE SHAPE. It checks for a sentence-final
//      stop followed by ANY punctuation, not for two dots.
//
// Everything is read out of `seed.json`, because the seed is what the app
// bundles and therefore what a learner can actually meet.

import { test } from 'node:test';
import { ok, strictEqual, deepStrictEqual, notStrictEqual } from 'node:assert';
import seed from './seed.json' with { type: 'json' };
import { fold } from './answer.logic.ts';
import { dicteeMode } from './dictee.logic.ts';
import { hasPlainNasalFor } from './density.logic.ts';
import { quizQuestions } from './schema.ts';
import { namesUnitLabel } from './unit-label.ts';

const LESSON_ID = 'a2.32.l1';
const UNIT_ID = 'a2.32';
const THEME = 'internet';

type Row = { id: string; fr: string; en?: string; kind?: string; theme?: string; level?: string; gender?: string; respell?: string; drills?: string[]; tags?: string[] };
type Sec = Record<string, unknown> & { type: string; id?: string };
type Lsn = Record<string, unknown> & { id: string; sections: Sec[]; itemIds: string[] };

const L = (seed.lessons as unknown as Lsn[]).find((l) => l.id === LESSON_ID);
const items = seed.items as unknown as Row[];
const byId = new Map(items.map((i) => [i.id, i]));
const sec = (id: string) => (L?.sections ?? []).find((s) => s.id === id);
const sectionsOf = (l: Lsn) => l.sections ?? [];

/** Every authored string reachable from a value. Built once, and its size is
 *  asserted, because a throwing or empty walk turns every check below into a
 *  no-op that passes. */
const strs = (v: unknown, out: string[] = []): string[] => {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strs(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strs(x, out));
  return out;
};

/** THE HOUSE BOUNDARY, REPAIRED. No apostrophe on the left. */
const hasWord = (hay: string, needle: string): boolean =>
  new RegExp(`(?<![\\p{L}\\p{N}-])${needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![\\p{L}\\p{N}'’-])`, 'iu').test(hay);

const LEARNER_TEXT = [
  ...strs(L?.sections), ...strs(L?.terms), String(L?.intro ?? ''),
  ...strs(L?.overview), ...strs(L?.drills), ...strs(L?.acts), ...strs(L?.errorTriggers),
].join('\n');

/** WHAT REACHED THE SEED. A CUT, not the authoring.
 *
 *  Keep using this for "what a learner offline can meet". Do NOT count it: the
 *  seed drops any row no lesson references when the theme is outside
 *  `SEED_CUT.themes`, and `internet` is outside it. See SRC_ROWS below. */
const AUTHORED = items.filter((i) => i.theme === THEME && /^fr\.a2\.internet\.(1[89]\d|2[01]\d)$/.test(i.id)
  && Number(i.id.split('.').pop()) >= 182 && Number(i.id.split('.').pop()) <= 218);

/** WHAT THIS BUILD AUTHORED, from the source file, which the cut cannot touch.
 *
 *  ── Why this exists, and it is this suite's own defect ──
 *
 *  Every count below used to come from `AUTHORED`, i.e. from the SEED. That
 *  passes only while every authored row happens to be referenced by a section
 *  or a deckTranche. `a2-29-hotel.test.ts` made the same assumption and went
 *  red the first time anyone published: v51 regenerated the seed from Postgres,
 *  the cut dropped `fr.a2.hebergement.086` because no lesson referenced it, and
 *  `MINE.length === 59` broke. The row had been unreachable for weeks and 33
 *  green guards never asked.
 *
 *  a2.32's block is fully referenced today — 37 of 37, re-measured with
 *  `audit-block-reachability.ts` — so this suite was correct by luck rather
 *  than by construction.
 *
 *  THE TWO INVARIANTS, split, which is the fix `SEED-IS-GENERATED-FIX-PLAN.md`
 *  Part B prescribes for nine suites:
 *
 *    the BLOCK is complete   asserted against the SOURCE (below)
 *    the SEED is sufficient  asserted as "every id the lesson REFERENCES
 *                            resolves", which is what a learner depends on
 *
 *  Loaded through a dynamic import with a fallback, matching a2.30 and a2.31:
 *  `ealch-admin` is a sibling package and a trimmed checkout may not have it.
 *  When it is absent the block tests skip rather than assert something weaker. */
let SRC_ROWS: Array<{ id: string; fr: string; en?: string; kind?: string; level?: string; theme?: string; respell?: string; tags?: string[]; voice?: string }> = [];
let noSrc = false;
try {
  const corpus = await import('../../../ealch-admin/scripts/data/technologie-corpus.ts');
  SRC_ROWS = corpus.ALL_ROWS as never;
} catch {
  noSrc = true;
}

/* ═══════════════════════════════════════════════════════════════════════════
 *  0. THE LESSON EXISTS, AND THE WALK IS NOT EMPTY
 * ═══════════════════════════════════════════════════════════════════════════ */

test('a2.32.l1 is in the seed, and the unit claims it', () => {
  ok(L, `${LESSON_ID} is not in seed.json`);
  const unit = (seed.units as Array<{ id: string; lessonIds?: string[]; themes?: string[] }>).find((u) => u.id === UNIT_ID);
  ok(unit, `${UNIT_ID} is not in seed.json`);
  ok((unit!.lessonIds ?? []).includes(LESSON_ID), `${UNIT_ID} does not claim ${LESSON_ID}`);
});

test('THE THEME RE-MAP: the unit reads internet and never the phantom', () => {
  const unit = (seed.units as Array<{ id: string; themes?: string[] }>).find((u) => u.id === UNIT_ID)!;
  deepStrictEqual(unit.themes, [THEME],
    'the spine, Postgres and the seed all read [internet] and have since 2026-08-15. '
    + '`technologie` is a DOMAIN with 0 published rows, not a theme.');
});

test('the string walk is not empty, or every check below is a no-op', () => {
  ok(LEARNER_TEXT.length > 8000, `the learner-text walk produced ${LEARNER_TEXT.length} chars, which is too few to be real`);
  ok(strs(L?.sections).length > 400, 'the section walk collapsed');
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  1. THE OWNS, AND THE TWO REQUIRED LAYOUTS
 * ═══════════════════════════════════════════════════════════════════════════ */

test('REQUIRED LAYOUT 1: the three voices sit in ONE section with the same referent visible', () => {
  const s = sec('s03-voices') as { cards?: Array<{ fr?: string; label?: string; body?: string }> } | undefined;
  ok(s, 's03-voices is missing');
  const text = strs(s).join('\n');
  for (const form of ['une adresse électronique', 'un courriel', 'un mail']) {
    ok(text.includes(form), `s03-voices does not carry "${form}". Splitting the ladder makes the Owns two small lessons.`);
  }
  for (const v of ['SYSTEM', 'AGENT', 'FRIEND']) {
    ok(text.includes(v), `s03-voices does not name the ${v} voice`);
  }
  // And the referent is the SAME one in all three, which is the whole point.
  ok(/email/i.test(text), 's03-voices never says what the three names are names OF');
});

test('REQUIRED LAYOUT 2: the support phrasing and the friend phrasing are a PAIR in one section', () => {
  const s = sec('s13-pairs') as { cards?: Array<{ head?: string; fr?: string }> } | undefined;
  ok(s, 's13-pairs is missing: nothing else in this lesson puts the two voices side by side. '
    + 'Two scenario sections are consecutive missions, not a layout.');
  const cards = s!.cards ?? [];
  ok(cards.length >= 4, `s13-pairs has ${cards.length} cards, and the layout is the pairing`);
  for (const [i, c] of cards.entries()) {
    ok(c.head?.includes('AGENT'), `s13-pairs card ${i} has no AGENT half`);
    ok(c.fr?.includes('FRIEND'), `s13-pairs card ${i} has no FRIEND half`);
  }
});

test('the three are VOICES, not rungs: "rung" appears on no learner surface', () => {
  ok(!hasWord(LEARNER_TEXT, 'rung'), 'a numbered rung is a2.07\'s repair move and a named rung is a2.29\'s ladder. '
    + 'Nothing escalates between these three, so they are voices.');
  ok(!hasWord(LEARNER_TEXT, 'rungs'), 'same, plural');
  ok(!hasWord(LEARNER_TEXT, 'ladder'), 'the band has two ladders already and a third would make a learner remember none');
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  2. THE DECISION PAUL MADE, PINNED INTO THE BUILD
 *
 *  Item 2, 2026-08-15: OPTION B. Nobody owns the imperative. Act 2 is a chunk
 *  inventory, not a paradigm. Three ways to break it, three assertions.
 * ═══════════════════════════════════════════════════════════════════════════ */

test('THE MOOD IS NEVER NAMED, on any learner surface or in either grammar list', () => {
  for (const w of ['imperative', 'impératif', 'imperatif']) {
    ok(!LEARNER_TEXT.toLowerCase().includes(w),
      `"${w}" appears on a learner surface. Paul answered item 2 with option B: NOBODY owns the imperative, `
      + 'this unit uses it as unanalysed lexis, and naming the mood is the first half of teaching it.');
    for (const g of [...((L?.grammarIntroduced as string[]) ?? []), ...((L?.grammarAssumed as string[]) ?? [])]) {
      ok(!g.toLowerCase().includes(w), `"${w}" is claimed in a grammar list. This unit teaches no mood.`);
    }
  }
});

test('NO AUTHORED STRING STATES A RULE FOR FORMING AN ORDER', () => {
  // The paradigm with the label filed off. Avoiding the word and teaching the
  // rule anyway is the failure this catches.
  for (const rule of [
    'drop the little word', 'drop the pronoun', 'remove the pronoun', 'delete the pronoun',
    'take the vous off', 'without the vous', 'from the vous form', 'is made by deleting',
    'built from the infinitive', 'from an infinitive',
  ]) {
    ok(!LEARNER_TEXT.toLowerCase().includes(rule),
      `a learner-facing string says "${rule}". Act 2 has NO PARADIGM: no card may say a form is made by `
      + 'deleting, dropping or removing anything.');
  }
});

test('NO SCORED SURFACE BUILDS A FORM FROM AN INFINITIVE', () => {
  const PRODUCTION = new Set(['quiz', 'dictation', 'practice', 'groupDrill', 'trapDrill', 'scenario']);
  const SHAPES = [/from the infinitive/i, /make the .*form/i, /form the .*from/i, /turn .*into an order/i, /conjugate/i];
  for (const s of sectionsOf(L!)) {
    if (!PRODUCTION.has(s.type)) continue;
    for (const str of strs(s)) {
      for (const rx of SHAPES) {
        ok(!rx.test(str), `${s.id}: a scored surface asks the learner to build a form: "${str.slice(0, 80)}"`);
      }
    }
  }
});

test('act 2 carries no paradigm surface: no table, and the tapTable has three columns', () => {
  strictEqual(sectionsOf(L!).filter((s) => s.type === 'table').length, 0,
    '`table` at layer core is refused by validateDensity and has never shipped in 70 lessons');
  const t = sec('s04-screen') as { cols?: string[]; rows?: Array<{ cells: string[] }> } | undefined;
  ok(t, 's04-screen is missing');
  deepStrictEqual(t!.cols, ['It says', 'It means', 'You'],
    'the tapTable is what the screen says / what it means / what you do. It is NOT infinitive-to-form.');
  strictEqual(t!.rows?.length, 6, 'six screen strings');
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  3. THE CITATIONS
 * ═══════════════════════════════════════════════════════════════════════════ */

const REPAIR_IDS = [
  'fr.a2.au-restaurant.132', 'fr.a2.au-restaurant.133', 'fr.a2.au-restaurant.134',
  'fr.a2.au-restaurant.135', 'fr.a2.au-restaurant.136', 'fr.a2.au-restaurant.137',
];
const REPAIR_FR = [
  'Pardon ?', "Vous pouvez répéter, s'il vous plaît ?", 'Plus lentement, s\'il vous plaît.',
  "Je n'ai pas bien compris.", "Qu'est-ce que ça veut dire ?", "Vous pouvez me l'écrire, s'il vous plaît ?",
];
const LADDER_IDS = ['fr.a2.hebergement.074', 'fr.a2.hebergement.087', 'fr.a2.hebergement.092'];

test("a2.07's repair rows are cited by id and NO repair row is authored here", () => {
  REPAIR_IDS.forEach((id, i) => {
    ok(byId.has(id), `${id} did not reach the seed, so the repair card renders empty on device`);
    strictEqual(byId.get(id)!.fr, REPAIR_FR[i], `${id} moved. a2.07's block is FROZEN and seven units depend on it.`);
    ok((L!.itemIds ?? []).includes(id), `${id} is not in this lesson's itemIds`);
  });
  // ASSERTED BY ID, and by string: not one authored row repeats a frozen one.
  const authoredFr = new Set(AUTHORED.map((r) => r.fr));
  for (const fr of REPAIR_FR) {
    ok(!authoredFr.has(fr), `this build authored one of a2.07's frozen repair rows: "${fr}"`);
  }
});

test("a2.29's cited ladder rows reached the seed, and its ladder is NOT re-taught", () => {
  for (const id of LADDER_IDS) {
    ok(byId.has(id), `${id} did not reach the seed`);
    ok((L!.itemIds ?? []).includes(id), `${id} is not in this lesson's itemIds`);
  }
  // NO AUTHORED STRING ESCALATES A REQUEST. a2.29 owns escalation; this unit's
  // agent is asked for help, not pushed.
  const ALL = [LEARNER_TEXT, ...AUTHORED.map((r) => `${r.fr} ${r.en}`)].join('\n').toLowerCase();
  for (const m of ['parler au responsable', 'le responsable', 'toujours pas', 'ça fait deux fois que',
    "j'ai déjà appelé", 'je veux parler à']) {
    ok(!ALL.includes(m), `an authored string escalates a request: "${m}"`);
  }
});

test('a2.01 is cited as a prereq and the band units are named by its lesson label, not re-taught', () => {
  const assumed = (L?.grammarAssumed as string[]) ?? [];
  ok(assumed.some((g: string) => g.includes('a2.01')), 'a2.01 is the declared prereq and belongs in grammarAssumed');
  // grammarAssumed holds curriculum sentences ending « introduced in a2.18 »,
  // which keep the raw id; only prose carries the label.
  ok(assumed.some((g: string) => g.includes('a2.18')), 'depuis is used in four fault descriptions and a2.18 owns it');
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  4. THE REGIONAL POLICY (collation C3)
 * ═══════════════════════════════════════════════════════════════════════════ */

const NEVER_A_SCORED_KEY = ['un mél', 'le clavardage', 'la baladodiffusion', 'un téléphone intelligent'];
const QUEBEC_ONLY_FORMS = ['le clavardage', 'la baladodiffusion', 'un téléphone intelligent'];

test('C3 rule 1: the France-standard form is the key of EVERY scored question', () => {
  const qs = quizQuestions(sec('s21-quiz') as never) as Array<Record<string, unknown>>;
  ok(qs.length >= 30, `the quiz holds ${qs.length} questions`);
  for (const q of qs) {
    const keys: string[] = [];
    if (Array.isArray(q.opts) && typeof q.correct === 'number') keys.push(String((q.opts as string[])[q.correct]));
    if (q.answer) keys.push(String(q.answer));
    for (const a of (q.accept ?? []) as string[]) keys.push(a);
    for (const k of keys) {
      for (const bad of NEVER_A_SCORED_KEY) {
        notStrictEqual(fold(k), fold(bad),
          `a scored key is "${k}". C3 rule 1: the scored answer is always the France spoken standard.`);
      }
    }
  }
});

test('C3 rule 2: AT MOST ONE card names a Quebec form, and it is the map', () => {
  // SCOPED TO THE FORMS, NOT TO THE WORD "QUEBEC". §5.2 rule 3 REQUIRES this
  // unit to say that `un courriel` is ordinary in Quebec and is not an aside,
  // and its distinctive claim is that mail in Montreal and courriel in Paris
  // are marked in opposite directions. A guard counting the place name would
  // forbid the two things the unit exists to teach.
  const hits: string[] = [];
  for (const s of sectionsOf(L!)) {
    for (const card of ((s as { cards?: Record<string, unknown>[] }).cards ?? [])) {
      const text = strs(card).join(' ');
      if (QUEBEC_ONLY_FORMS.some((f) => text.includes(f))
        || /\b(clavardage|balado|baladodiffusion|téléphone intelligent)\b/i.test(text)) hits.push(String(s.id));
    }
  }
  strictEqual(hits.length, 1, `${hits.length} cards name a Quebec form and C3 rule 2 allows one: ${hits.join(', ')}`);
  strictEqual(hits[0], 's08-map', 'the one Quebec card is the regional tranche of the anglicism map');
});

test('C3 rule 3: `un courriel` is filed as the AGENT voice, not as a Quebec aside', () => {
  const s = strs(sec('s03-voices')).join('\n');
  ok(/AGENT[\s\S]{0,400}un courriel/.test(s) || /un courriel[\s\S]{0,400}AGENT/.test(s),
    'courriel must sit on the AGENT card. 82 published rows carry it and the corpus has served it as '
    + 'ordinary French since A1, so filing it as colour would be the C3 rule 3 error.');
  // And it is never tagged as Quebec colour in the corpus rows this build wrote.
  const c = byId.get('fr.a2.internet.002');
  ok(c, 'fr.a2.internet.002 did not reach the seed');
  ok(!(c!.tags ?? []).includes('quebec'), 'courriel must not be tagged quebec: it is not an aside');
});

test('the three genuinely regional rows carry the `quebec` tag, following a2.31', () => {
  // The tag ALREADY EXISTS on eight published rows, two of them authored by
  // a2.31 in this band (fr.a2.ecole.027, .028). Using it is following a
  // precedent, not proposing a schema field.
  for (const id of ['fr.a2.internet.184', 'fr.a2.internet.185', 'fr.a2.internet.186']) {
    const r = byId.get(id);
    ok(r, `${id} did not reach the seed`);
    ok((r!.tags ?? []).includes('quebec'), `${id} is a Quebec form and carries no quebec tag`);
  }
  // And `un mél` is NOT one: it is the French administrative abbreviation.
  const mel = byId.get('fr.a2.internet.183');
  ok(mel, 'fr.a2.internet.183 did not reach the seed');
  ok(!(mel!.tags ?? []).includes('quebec'),
    '`un mél` is the abbreviation printed next to Tél. on a French form. It is not Quebec and must not be filed as such.');
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  5. THE SCORED SURFACES, THROUGH THE REAL fold()
 * ═══════════════════════════════════════════════════════════════════════════ */

test('every quiz question carries a why AND a ref, and every ref resolves', () => {
  const ids = new Set(sectionsOf(L!).map((s) => s.id));
  for (const q of quizQuestions(sec('s21-quiz') as never) as Array<Record<string, unknown>>) {
    ok(q.why, `no why: ${String(q.q)}`);
    ok(q.ref, `no ref: ${String(q.q)}`);
    ok(ids.has(String(q.ref)), `ref "${String(q.ref)}" is not a section id, so the jump lands nowhere`);
  }
});

test('every listenChoose carries an explicit say, or the card speaks the answer', () => {
  for (const q of quizQuestions(sec('s21-quiz') as never) as Array<Record<string, unknown>>) {
    if (q.format !== 'listenChoose') continue;
    ok(q.say, `a listenChoose has no say: "${String(q.q)}". Without it ListenChooseCard speaks opts[correct], `
      + 'which on an English-option question speaks English at a listening exercise.');
  }
});

test('every free-text question accepts the answer it displays, through the real fold()', () => {
  for (const q of quizQuestions(sec('s21-quiz') as never) as Array<Record<string, unknown>>) {
    if (q.format !== 'typeIn' && q.format !== 'errorSpot') continue;
    if (q.format === 'errorSpot') ok(q.prompt, `an errorSpot has no prompt: "${String(q.q)}"`);
    const accept = (q.accept ?? []) as string[];
    ok(accept.some((a) => fold(a) === fold(String(q.answer))),
      `a ${String(q.format)} does not accept the answer it displays: "${String(q.answer)}"`);
  }
});

test('BAND RULE: no near-miss pair this lesson leans on folds to one string', () => {
  const NEAR_MISSES: [string, string][] = [
    ['un mail', 'un mél'],
    ['un mail', 'un courriel'],
    ['un courriel', 'une adresse électronique'],
    ['Veuillez patienter', 'Veuillez patientez'],
    ['Saisissez votre code', 'Saisissez votre codes'],
    ['Réessayez plus tard', 'Réessayer plus tard'],
    ['Sélectionnez une option', 'Sélectionnez un option'],
    ['ça bugue', 'ça bug'],
    ['mon ordi rame', 'mon ordi ram'],
    ["Ça s'est bloqué ce matin.", 'Ça se bloqué ce matin.'],
    ['Le site refuse mon mot de passe.', 'Le site refuse mon mot de pass.'],
  ];
  for (const [a, b] of NEAR_MISSES) {
    notStrictEqual(fold(a), fold(b), `"${a}" and "${b}" fold to one string, so the item tests nothing`);
  }
});

test('and the pairs that DO collide are asserted the other way, so a fold() change is caught', () => {
  // The complete list of what no scored surface can test. If any of these stops
  // colliding, fold() changed and every scored item in this lesson needs
  // re-checking. The two that bite a technology lesson hardest are first.
  const COLLIDE: [string, string][] = [
    ['e-mail', 'email'],
    ['mot de passe', 'motdepasse'],
    ['sur Internet', 'sur internet'],
    ['sur Internet', 'surinternet'],
    ["l'écran", 'lecran'],
    ['Réessayez', 'reessayez'],
    ['télécharger', 'telecharger'],
    ['ça', 'ca'],
    ['double-cliquer', 'double cliquer'],
  ];
  for (const [a, b] of COLLIDE) {
    strictEqual(fold(a), fold(b), `"${a}" and "${b}" no longer fold to one string. fold() changed.`);
  }
});

test('no scored question turns on an accent, a cedilla, a comma, a capital or a hyphen', () => {
  for (const q of quizQuestions(sec('s21-quiz') as never) as Array<Record<string, unknown>>) {
    if (q.format !== 'typeIn' && q.format !== 'errorSpot') continue;
    const answer = String(q.answer);
    // The distractor a learner would most plausibly type is the same string
    // stripped of exactly the thing fold() removes. If that is the whole
    // difficulty, the item cannot be got wrong.
    const stripped = answer.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/-/g, ' ');
    ok(fold(stripped) === fold(answer),
      `"${answer}" is a scored answer whose difficulty survives an accent or hyphen strip, which fold() does anyway`);
  }
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  6. THE DRILL JOINS, CHECKED AGAINST WHAT THE SEED ACTUALLY CARRIES
 * ═══════════════════════════════════════════════════════════════════════════ */

test('every item the practice section names carries the voiceflash drill', () => {
  const p = sec('s19-speak') as { itemIds?: string[]; skill?: string } | undefined;
  ok(p, 's19-speak is missing, and `practice` is MANDATORY (lesson-contract.test.ts:505)');
  strictEqual(p!.skill, 'speak', "`practice` renders the SPEAKING drill whatever `skill` says, so it must say speak");
  ok((p!.itemIds ?? []).length > 0, 'an empty practice.itemIds fails the publish gate');
  for (const id of p!.itemIds ?? []) {
    const r = byId.get(id);
    ok(r, `${id} is named by the practice section and is not in the seed`);
    ok((r!.drills ?? []).includes('voiceflash'), `${id} is named by practice and carries no voiceflash, so the mic scores nothing`);
    ok(!id.includes('technologie-quotidienne'),
      `${id} is in a theme with ZERO voiceflash rows at any level (0 of 196, measured)`);
  }
});

test('every dictée item carries the dictation drill, and all five are WORD mode', () => {
  const d = sec('s16-dictee') as { itemIds?: string[] } | undefined;
  ok(d, 's16-dictee is missing');
  strictEqual((d!.itemIds ?? []).length, 5, 'five machine strings');
  for (const id of d!.itemIds ?? []) {
    const r = byId.get(id);
    ok(r, `${id} is a dictée id and is not in the seed`);
    ok((r!.drills ?? []).includes('dictation'), `${id} is a dictée id and carries no dictation drill`);
    strictEqual(dicteeMode(r!.fr), 'words',
      `${id} "${r!.fr}" is not word mode. This mission tests which words the machine used, as a chunk.`);
    // §7.4 RULE 1: a dictée whose only difficulty is a hyphen cannot be got
    // right or wrong, because Connectez-vous and connectez vous are one string.
    ok(!r!.fr.includes('-'), `${id} "${r!.fr}" contains a hyphen and no dictée may turn on one`);
  }
});

test('THE DRILL TRAP: no deckTranche releases a row with no flashcard drill', () => {
  const released = [...new Set(((L?.deckTranche as string[][]) ?? []).flat())];
  ok(released.length > 60, `only ${released.length} ids are released, which is too few to be the real tranches`);
  for (const id of released) {
    const r = byId.get(id);
    ok(r, `${id} is released by a deckTranche and is not in the seed`);
    ok((r!.drills ?? []).includes('flashcard'),
      `${id} carries no flashcard drill, so no deck can serve it and the release draws nothing. `
      + 'fr.a2.internet.077-.111 are voiceflash+review with NO flashcard: that is the population this catches.');
  }
});

test('and every voiceflash-only import is REACHABLE by being named, not released', () => {
  const NOT_DECK_ABLE = [
    'fr.a2.internet.077', 'fr.a2.internet.078', 'fr.a2.internet.086', 'fr.a2.internet.088',
    'fr.a2.internet.093', 'fr.a2.internet.102', 'fr.a2.internet.103', 'fr.a2.internet.107',
    'fr.a2.internet.108', 'fr.a2.internet.109',
  ];
  const released = new Set(((L?.deckTranche as string[][]) ?? []).flat());
  const named = new Set(strs(L?.sections).filter((s) => s.startsWith('fr.')));
  for (const id of NOT_DECK_ABLE) {
    ok(!released.has(id), `${id} is not deck-able and is released by a tranche`);
    ok(named.has(id), `${id} is imported, is not deck-able, and is named by no section. It is unreachable.`);
  }
});

test('every id the lesson names resolves against the seed', () => {
  for (const id of L!.itemIds ?? []) ok(byId.has(id), `${id} is in itemIds and not in the seed`);
  for (const s of strs(L?.sections)) {
    if (!/^fr\.[a-z0-9]+\.[a-z0-9-]+\.\d{3,}$/.test(s)) continue;
    ok(byId.has(s), `${s} is named by a section and is not in the seed`);
  }
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  7. THE TWO DEFECT ROWS
 * ═══════════════════════════════════════════════════════════════════════════ */

test('fr.a2.internet.009 and .010 are named by NEITHER the lesson nor the corpus file', () => {
  for (const id of ['fr.a2.internet.009', 'fr.a2.internet.010']) {
    ok(!(L!.itemIds ?? []).includes(id), `${id} is metalinguistic commentary stored as a corpus row and this lesson references it`);
    ok(!strs(L?.sections).includes(id), `${id} is named by a section`);
    ok(!((L?.deckTranche as string[][]) ?? []).flat().includes(id), `${id} is released by a deckTranche`);
  }
});

test('SCOPED TO THIS LESSON: no internet row it names has an fr that is a sentence ABOUT French', () => {
  // Scoped to the lesson, never to the bundle. `.009` and `.010` are published
  // and stay published; this stops the NEXT author reaching for them.
  const ABOUT = [/\bon dit\b/i, /\bse disent\b/i, /\ble terme officiel\b/i, /\bavec une majuscule\b/i, /\bsans article\b/i];
  for (const id of L!.itemIds ?? []) {
    const r = byId.get(id);
    if (!r || r.theme !== THEME) continue;
    for (const rx of ABOUT) {
      ok(!rx.test(r.fr), `${id} is a sentence ABOUT French rather than a sentence OF French: "${r.fr}"`);
    }
  }
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  8. THE HAND-OFF TO a2.35, AND THE ACT IT REFUSES
 * ═══════════════════════════════════════════════════════════════════════════ */

test('THE LISTENING LINES STAND ALONE, so a2.35 can lift them', () => {
  const FRAMING = /\b(as you saw|earlier|the last card|mission \d|in act \d|previously|this lesson)\b/i;
  const listens = sectionsOf(L!).filter((s) => s.type === 'listening');
  strictEqual(listens.length, 2, 'two listening sections: the screen prompts and the phone menu');
  for (const s of listens) {
    strictEqual((s as { hideLines?: boolean }).hideLines, true,
      `${s.id} without hideLines prints fr AND en beside the play dot, which is a reading exercise`);
    for (const l of (s as { lines: Array<{ fr: string; en: string }> }).lines) {
      ok(!FRAMING.test(l.fr) && !FRAMING.test(l.en),
        `${s.id}: "${l.fr}" references this lesson's framing, so a2.35 cannot lift it`);
    }
    // And no question reprints its own line, or hideLines buys nothing.
    for (const q of (s as { questions: Array<{ q: string }> }).questions) {
      for (const l of (s as { lines: Array<{ fr: string }> }).lines) {
        ok(!fold(q.q).includes(fold(l.fr)), `${s.id}: a question reprints its line, so hideLines buys nothing`);
      }
    }
  }
});

test('the scenario is liftable: no turn depends on anything earlier in this lesson', () => {
  const s = sec('s17-call') as { turns?: Array<Record<string, string>>; setting?: string } | undefined;
  ok(s, 's17-call is missing');
  ok(s!.setting && s!.setting.length > 20, 'the scenario needs a setting that stands on its own');
  const FRAMING = /\b(as you saw|the last card|mission \d|in act \d|earlier in this lesson)\b/i;
  for (const t of s!.turns ?? []) {
    for (const v of Object.values(t)) {
      if (typeof v === 'string') ok(!FRAMING.test(v), `a scenario turn references this lesson's framing: "${v}"`);
    }
  }
  // TEF EO Section A scores ELICITATION, so the learner must ASK, not only report.
  const asks = (s!.turns ?? []).filter((t) => typeof t.user === 'string' && t.user.includes('?'));
  ok(asks.length >= 2, `only ${asks.length} turns have the learner asking a question. Section A scores elicitation.`);
});

test('EVERY scenario turn carries userEn and alts, in BOTH scenarios', () => {
  /* FOUND BY THE MUTATION TEST, NOT BY WRITING IT. Deleting `userEn` from one
   * turn and `alts` from another both passed a suite of 56 assertions, and both
   * are contract lines §6 mission 17 states in terms:
   *
   *   userEn  without it the reveal shows a French sentence the learner is told
   *           they should have said and cannot read, which is the one moment in
   *           the turn where comprehension is the whole point.
   *   alts    a conversation is not a cloze test. `stt` scores against ALL of
   *           them, best match wins, so a learner who says a listed alternative
   *           is marked right rather than "not quite".
   *
   * Two scenarios means twelve turns and twenty-four chances to drop one. */
  const scenarios = sectionsOf(L!).filter((s) => s.type === 'scenario');
  strictEqual(scenarios.length, 2,
    'two scenarios: the support call in vous and the same fault to a friend in tu. '
    + 'The device check ran on 2026-08-16 and released this unit for both.');
  for (const s of scenarios) {
    const turns = (s as { turns?: Array<Record<string, unknown>> }).turns ?? [];
    ok(turns.length >= 5, `${s.id} has ${turns.length} turns`);
    for (const [i, t] of turns.entries()) {
      ok(t.ai && t.en && t.user, `${s.id} turn ${i} is missing ai, en or user`);
      ok(typeof t.userEn === 'string' && (t.userEn as string).length > 0,
        `${s.id} turn ${i} has no userEn, so the reveal shows French the learner cannot read`);
      const alts = (t.alts ?? []) as Array<{ fr?: string; en?: string }>;
      ok(alts.length >= 2, `${s.id} turn ${i} has ${alts.length} alts, and a conversation has more than one right answer`);
      for (const a of alts) ok(a.fr && a.en, `${s.id} turn ${i} has an alt missing fr or en`);
    }
  }
});

test('the reframe is carried verbatim across at least six sections', () => {
  // Asserted PROPERLY. The mutation test caught a stripped reframe only by
  // accident, through the walk-is-not-empty check, which is not a guard.
  // The density validator's floor is three; doctrine §B.4 and the prompt's §6
  // both want six.
  const reframe = String(L?.reframe ?? '');
  ok(reframe.length > 40, 'the lesson has no reframe');
  const hits = sectionsOf(L!).filter((s) => strs(s).some((x) => x.includes(reframe)));
  ok(hits.length >= 6, `the reframe appears verbatim in ${hits.length} sections, and doctrine §B.4 wants six`);
});

test('NO CONSOLIDATION ACT: the roundup does not review the band', () => {
  const r = sec('s23-roundup') as { body?: string; points?: string[] } | undefined;
  ok(r, 's23-roundup is missing');
  const text = strs(r).join('\n');
  // It may hand off to a2.35. It may NOT summarise the other seven units.
  //
  // BY LABEL, NOT BY ID. A learner surface names a lesson by its trail
  // position, so after the migration `text.includes('a2.07')` is a check that
  // cannot fail however many times the roundup names that unit.
  for (const other of ['a2.07', 'a2.26', 'a2.27', 'a2.28', 'a2.29', 'a2.30', 'a2.31']) {
    ok(!namesUnitLabel(text, other), `the roundup names ${other}. Being last is a position, not a job: `
      + 'a consolidation act across the other seven would be a ninth unit hiding inside the eighth.');
  }
  ok(namesUnitLabel(text, 'a2.35'), 'the roundup must hand off to a2.35, which names this unit as one of its four prereqs');
  ok((r!.points ?? []).length <= 4, 'core-list-items caps `points` at four on a core screen');
});

test('no quiz round is drawn from another unit\'s content', () => {
  const rounds = (sec('s21-quiz') as { rounds?: Array<{ id: string; label: string }> }).rounds ?? [];
  strictEqual(rounds.length, 4, 'four rounds of eight');
  for (const r of rounds) {
    for (const other of ['a2.07', 'a2.26', 'a2.27', 'a2.28', 'a2.29', 'a2.30', 'a2.31']) {
      ok(!`${r.id} ${r.label}`.includes(other), `round ${r.id} is drawn from ${other}`);
    }
  }
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  9. THE SHAPE RULES
 * ═══════════════════════════════════════════════════════════════════════════ */

test('EXACTLY ONE quiz section: a second is silently never rendered', () => {
  strictEqual(sectionsOf(L!).filter((s) => s.type === 'quiz').length, 1);
});

test('commonErrors carries swipe === true', () => {
  const e = sec('s15-errors') as { swipe?: boolean; errors?: unknown[] } | undefined;
  ok(e, 's15-errors is missing');
  strictEqual(e!.swipe, true, 'commonErrors without swipe loses the deck. Three shipped lessons omit it.');
  ok((e!.errors ?? []).length >= 5, 'marked in both directions needs the pairs on both sides');
});

test('the trapDrill is the STEPPED shape, with no size', () => {
  const t = sec('s14-trap') as Record<string, unknown> | undefined;
  ok(t, 's14-trap is missing');
  ok(t!.rule, 'no `rule`, so the opening step draws nothing');
  strictEqual(t!.swipe, true, 'a stepped trapDrill is swipe: true');
  ok(t!.audio, 'no audio spec');
  ok(t!.say, 'no say');
  ok(!('size' in t!), '`size` comes OFF a stepped trapDrill');
  const kinds = ((t!.steps as Array<{ kind: string; gate?: boolean }>) ?? []).map((s) => s.kind);
  deepStrictEqual(kinds, ['rule', 'cards', 'audio', 'drill'],
    'the stacked shape hides the gate, the audio and the sub-mission number');
  ok(((t!.steps as Array<{ kind: string; gate?: boolean }>) ?? []).some((s) => s.kind === 'drill' && s.gate),
    'the drill step is not gated');
});

test('groupDrill items use `note`, not `sub`: sub draws nothing on an item', () => {
  for (const s of sectionsOf(L!)) {
    if (s.type !== 'groupDrill') continue;
    for (const g of ((s as { groups?: Array<{ items?: Array<Record<string, unknown>> }> }).groups ?? [])) {
      for (const it of g.items ?? []) {
        ok(!('sub' in it), `${s.id}: a group item carries sub, which draws nothing. Use note.`);
      }
    }
  }
});

test('no cardDeck carries itemIds: only practice reads it', () => {
  for (const s of sectionsOf(L!)) {
    if (s.type === 'cardDeck') ok(!('itemIds' in s), `${s.id}: itemIds on a cardDeck draws nothing`);
  }
});

test('the lesson carries no field the shipped corpus does not', () => {
  const others = (seed.lessons as unknown as Lsn[]).filter((l) => l.id !== LESSON_ID);
  const known = new Set(others.flatMap((l) => Object.keys(l)));
  const invented = Object.keys(L as unknown as Record<string, unknown>).filter((k) => !known.has(k));
  deepStrictEqual(invented, [], `carries field(s) no other lesson has: ${invented.join(', ')}`);
  for (const dead of ['canDo', 'track', 'teaches']) {
    ok(!(dead in (L as unknown as Record<string, unknown>)), `the Lesson carries \`${dead}\`, which draws nothing`);
  }
});

test('no dead audio field is authored anywhere', () => {
  const s = JSON.stringify(L);
  for (const f of ['modelPlayback', 'wrongThenRight', 'perSentenceReplay', 'scoreOn', 'autoplay', 'maxPlays']) {
    ok(!s.includes(`"${f}"`), `\`${f}\` validates, publishes and is read by no renderer`);
  }
});

test('no Scenario.exam and no ExamTask anywhere in this lesson', () => {
  ok(!JSON.stringify(L).includes('"exam"'),
    '`Scenario.exam` is read by no code in ealch-v2/src. This unit teaches what the exam tests and tags nothing.');
});

test('23 missions, six acts, and every act names sections that exist', () => {
  strictEqual(sectionsOf(L!).length, 23, 'inside the measured A2 range of 23 to 32');
  const acts = (L?.acts as Array<{ id: string; sections: string[] }>) ?? [];
  strictEqual(acts.length, 6);
  const ids = new Set(sectionsOf(L!).map((s) => s.id));
  const claimed = acts.flatMap((a) => a.sections);
  for (const s of claimed) ok(ids.has(s), `act names "${s}", which is not a section`);
  strictEqual(claimed.length, 23, 'every section belongs to exactly one act');
  // THE OWNS OUTWEIGHS THE MACHINE'S VOICE. If the paradigm half gets more
  // missions than the Owns, it is the wrong lesson (doctrine §B.5).
  const act2 = acts.find((a) => a.id === 'act2')!.sections.length;
  const act3 = acts.find((a) => a.id === 'act3')!.sections.length;
  ok(act3 > act2, `act 3 (the Owns) has ${act3} missions and act 2 (the machine) has ${act2}. The Owns must be heavier.`);
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  10. THE HOUSE RULES
 * ═══════════════════════════════════════════════════════════════════════════ */

test('no em dash anywhere, and no honest/honesty as a SUBSTRING', () => {
  const ALL = [LEARNER_TEXT, ...AUTHORED.map((r) => `${r.fr} ${r.en}`)].join('\n');
  ok(!ALL.includes('—'), 'an em dash in authored copy');
  // DELIBERATELY NOT WORD-BOUNDED: the band's inherited `\bhonest` guard cannot
  // see "dishonest", which a2.06 found and every earlier A2 lesson carries.
  ok(!ALL.toLowerCase().includes('honest'), 'authored copy contains "honest" as a substring');
  ok(!ALL.toLowerCase().includes('honesty'), 'authored copy contains "honesty" as a substring');
});

test('no U+203F: it renders as a low underscore on a Pixel 6', () => {
  ok(!JSON.stringify(L).includes('‿'), 'the liaison tie is live in shipped sons.10 content and shows as an underscore');
});

test('THE DOUBLE-STOP GUARD, WHOLE SHAPE: a sentence-final stop followed by ANY punctuation', () => {
  // Not "two dots". A stop followed by a comma, a semicolon or a second stop
  // is the same defect and the half-shaped guard sees only one of them.
  for (const s of [...strs(L?.sections), ...AUTHORED.map((r) => r.fr)]) {
    ok(!/[.!?]\s*[.,;:!?]/.test(s.replace(/\.\.\./g, '')), `double stop: "${s.slice(0, 70)}"`);
  }
});

test('no jargon on a learner surface, including the -s plural of every entry', () => {
  const JARGON = [
    'paradigm', 'conjugation', 'inflection', 'morpheme', 'lexeme',
    'anglicism', 'calque', 'loanword', 'diglossia', 'sociolinguistic',
    'code-switching', 'lexical set', 'formulaic sequence', 'suppletive', 'deverbal',
    'second person plural', 'verbal mood',
  ];
  for (const j of JARGON) {
    for (const form of [j, `${j}s`]) {
      ok(!hasWord(LEARNER_TEXT, form), `jargon on a learner surface: "${form}"`);
    }
  }
});

test('no authored string claims something the app cannot do', () => {
  // Collation 1.9: `setInterval` is ZERO across all four render files, so there
  // is NO TIMER anywhere in the app. The design's "production against the
  // clock" is void and the groupDrill is gated instead.
  const ALL = [LEARNER_TEXT, ...AUTHORED.map((r) => `${r.fr} ${r.en}`)].join('\n').toLowerCase();
  for (const c of ['against the clock', 'you have 30 seconds', 'time yourself', 'countdown',
    'as fast as you can', 'beat the timer', 'before time runs out',
    'type your answer below', 'we will mark your text', 'write 60 words']) {
    ok(!ALL.includes(c), `claims something the app cannot deliver: "${c}"`);
  }
});

test('no spaced exclamation mark in the scene, which loses the line its last word', () => {
  for (const s of strs(sec('s01-scene'))) {
    ok(!/\s!/.test(s), `a spaced exclamation mark in the scene: "${s.slice(0, 60)}"`);
  }
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  11. THE CORPUS THIS BUILD AUTHORED
 * ═══════════════════════════════════════════════════════════════════════════ */

test('37 rows authored into internet, in the allocated block, none outside it', { skip: noSrc }, () => {
  // AGAINST THE SOURCE. The seed is a cut and cannot answer "how many did this
  // build author"; it can only answer "how many survived the cut".
  strictEqual(SRC_ROWS.length, 37, `${SRC_ROWS.length} rows authored, expected 37`);
  const ns = SRC_ROWS.map((r) => Number(r.id.split('.').pop())).sort((a, b) => a - b);
  strictEqual(ns[0], 182);
  strictEqual(ns[ns.length - 1], 218);
  ok(ns.every((n, i) => i === 0 || n === ns[i - 1] + 1), 'the authored id block is not contiguous');
  for (const r of SRC_ROWS) {
    strictEqual(r.theme, THEME);
    strictEqual(r.level, 'a2');
    const n = Number(r.id.split('.').pop());
    ok(n >= 182 && n <= 253, `${r.id} sits outside the allocated block fr.a2.internet.182..253`);
  }
});

test('every authored row is REACHABLE, so the cut cannot drop one', { skip: noSrc }, () => {
  /* THE ASSERTION a2.29 DID NOT HAVE, and the reason its suite broke on the
   * first publish. Doctrine §E: every item must be reachable — named by a
   * section, or released by a deckTranche.
   *
   * An unreachable row is invisible to a learner AND is dropped by the publish
   * cut, because `internet` is not in `SEED_CUT.themes`. Asserting it here
   * means a future edit that orphans a row fails now, rather than silently
   * three weeks later when somebody publishes. */
  const reachable = new Set<string>([
    ...strs(L?.sections).filter((s) => /^fr\.[a-z0-9]+\.[a-z0-9-]+\.\d{3,}$/.test(s)),
    ...((L?.deckTranche as string[][]) ?? []).flat(),
    ...((L?.itemIds as string[]) ?? []),
    ...((L?.drills as Array<{ items?: string[] }>) ?? []).flatMap((d) => d.items ?? []),
  ]);
  const orphans = SRC_ROWS.filter((r) => !reachable.has(r.id));
  deepStrictEqual(orphans.map((r) => r.id), [],
    'authored row(s) reachable from nothing. Name it in a section, release it in a deckTranche, '
    + 'or do not author it. An unreachable row is dropped by the publish cut and takes this block count with it.');
});

test('and the SEED holds every id the lesson references, which is what a learner needs', () => {
  // The other half of the split. The seed may legitimately lack an authored row
  // the lesson never names; it may NEVER lack one the lesson does name.
  for (const id of (L!.itemIds ?? [])) {
    ok(byId.has(id), `${id} is referenced by the lesson and is not in the seed, so its card renders empty`);
  }
  for (const id of ((L?.deckTranche as string[][]) ?? []).flat()) {
    ok(byId.has(id), `${id} is released by a deckTranche and is not in the seed`);
  }
});

test('at least 40 percent of the authored rows are in the other party\'s voice', { skip: noSrc }, () => {
  // The machine, the support agent and the friend. The corpus authored only the
  // learner's half of every situation; the other party's speech did not exist.
  //
  // MEASURED ON THE SOURCE: the band's 40 percent mandate is a property of what
  // this build AUTHORED, not of what survived the cut. Measuring it on the seed
  // would let a dropped row quietly change the ratio.
  const OTHER_TAGS = ['system', 'agent', 'friend'];
  const other = SRC_ROWS.filter((r) => {
    const t = r.tags ?? [];
    if (t.includes('screen') || t.includes('menu')) return true;                 // the machine
    if (t.includes('agent')) return true;                                         // the support agent
    if (t.includes('friend') && ['fr.a2.internet.216', 'fr.a2.internet.217', 'fr.a2.internet.218'].includes(r.id)) return true;
    return false;
  });
  const ratio = other.length / SRC_ROWS.length;
  ok(ratio >= 0.4, `only ${(ratio * 100).toFixed(1)}% of authored rows are in the other party's voice`);
  ok(OTHER_TAGS.length === 3, 'three other parties, which is what makes this unit different');
});

test('the six interface chunks and the five menu lines exist and are the machine', { skip: noSrc }, () => {
  const CHUNKS = ['Cliquez sur le lien', 'Saisissez votre code', 'Appuyez sur Entrée',
    'Veuillez patienter', 'Sélectionnez une option', 'Réessayez plus tard'];
  const authoredFr = new Set(SRC_ROWS.map((r) => r.fr));
  for (const c of CHUNKS) ok(authoredFr.has(c), `the interface chunk "${c}" was not authored`);
  // NOT ONE ATTACHES A PRONOUN. a2.06 taught the preverbal position only.
  for (const r of SRC_ROWS) {
    ok(!/\b(Connectez-vous|Abonnez-vous|Installez-vous|Envoyez-le|Envoyez-moi)\b/.test(r.fr),
      `${r.id} attaches a pronoun after the verb: "${r.fr}". a2.06 taught the preverbal position only.`);
  }
});

test('no authored respelling closes a nasal with a plain n or m', { skip: noSrc }, () => {
  for (const r of SRC_ROWS) {
    if (!r.respell) continue;
    ok(!hasPlainNasalFor(r.fr, r.respell), `${r.id} "${r.respell}" closes a nasal with a plain n/m`);
  }
});

test('THE NASAL CHECKER IS BLIND THREE WAYS, and these are named so a fix goes stale loudly', () => {
  // Asserted BY NAME. The day the checker improves, these go red and we find
  // out, rather than carrying a dead list.
  const BLIND = [
    // The flagged token is `option`, which has ONE n. The doubled-n branch is
    // tested against the WHOLE fr string, and `Sélectionnez` has `nn` several
    // words away, so a nasal belonging to a DIFFERENT WORD clears this one.
    { id: 'fr.a2.internet.191', plain: 'say-lek-syo-NAY ü-nop-SYON' },
    // A nasal followed by a CONSONANT inside the token. `KOHNT` matches
    // neither branch, because both require the N to end the token.
    { id: 'fr.a2.internet.210', plain: 'zhuh VEH vay-ree-FYAY votr KOHNT nuh kee-TAY PAH' },
  ];
  for (const b of BLIND) {
    const r = byId.get(b.id)!;
    ok(r, `${b.id} is not in the seed`);
    ok(!hasPlainNasalFor(r.fr, b.plain),
      `${b.id} is filed BLIND and the checker CAN now see its unrepaired value. The checker improved; drop this entry.`);
  }
  // AND THE MIXED CASE, which takes both holes at once: `UHN` trips the digraph
  // rule and returns early; `SYON` reaches the lone-vowel branch and is cleared
  // by the `nn` in `connexion`. So repairing only what the checker reports
  // leaves SYON plain and the report comes back clean.
  const mixed = byId.get('fr.a2.internet.195')!;
  const plain = 'poor uhn pro-BLEM duh ko-nek-SYON ta-PAY UHN';
  const half = 'poor uhⁿ pro-BLEM duh ko-nek-SYON ta-PAY UHⁿ';
  ok(hasPlainNasalFor(mixed.fr, plain), '.195 is filed mixed and the checker cannot see its unrepaired value');
  ok(!hasPlainNasalFor(mixed.fr, half), '.195: the checker still flags the half-repair, so it is not this trap');
  notStrictEqual(half, mixed.respell, '.195 is filed mixed and its half-repair equals its final value');
});

test('the acronym whitelist is explicit, and scoped to PROSE and to THIS lesson', () => {
  /* `wifi`, `Internet` mid-sentence, `un ordi`, `SIM`, `USB`, `GPS` and `emoji`
   * all look wrong to a checker built for ordinary French orthography.
   *
   * SCOPED TO PROSE KEYS, AND THE FIRST VERSION OF THIS TEST WAS NOT. It walked
   * every string and flagged 39 tokens, of which every single one was a false
   * positive: `KOD`, `MEL`, `RAM`, `SYOH` and the rest are the HOUSE RESPELLING
   * CAPS, which mark phrase-final stress and are notation rather than prose.
   * A guard that reads a respelling as an acronym is the same shape as one that
   * reads the word Quebec as a Quebec card, and this file now carries both
   * lessons.
   *
   * `respell`, `sub`, `ipa`, `back` and `say` are notation fields and are
   * excluded by name. What is left is what a learner reads as English. */
  const PROSE_KEYS = new Set(['body', 'title', 'hint', 'text', 'why', 'tip', 'note', 'q',
    'milestone', 'label', 'head', 'stage', 'heading', 'coach', 'en', 'a', 'setting', 'userEn']);
  const prose: string[] = [];
  const walk = (v: unknown, key?: string) => {
    if (typeof v === 'string') { if (key && PROSE_KEYS.has(key)) prose.push(v); return; }
    if (Array.isArray(v)) { v.forEach((x) => walk(x, key)); return; }
    if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) walk(x, k);
  };
  walk(L?.sections);
  walk(L?.terms);
  prose.push(String(L?.intro ?? ''));
  ok(prose.length > 150, `the prose walk produced ${prose.length} strings, which is too few to be real`);

  const WHITELIST = ['SIM', 'USB', 'GPS', 'PDF', 'SMS', 'OK', 'wifi', 'Internet', 'emoji', 'ordi', 'texto', 'web'];
  // The lesson's own display constants, which are deliberately shouty.
  const DISPLAY = ['SYSTEM', 'AGENT', 'FRIEND', 'TAKEN', 'TRANSLATED', 'BOTH', 'AVIS', 'AUX', 'USAGERS'];
  // STRIP BRACKETED RESPELLINGS FIRST, exactly as `hasUndelimitedRespell` does
  // (`s.replace(/\[[^\]]*\]/gu, '')`). A respelling inside a prose note is
  // legitimate — the reading glossary explains that `maintenance` is said
  // [mehⁿ-tuh-NAHⁿSS] — and it is legitimate BECAUSE it is delimited. Scanning
  // through the brackets reads NAH and SS as acronyms and is the third false
  // positive this file has had to fix in its own guards.
  const scanned = prose.join('\n').replace(/\[[^\]]*\]/gu, '');
  const shouty = [...scanned.matchAll(/\b[A-Z]{2,}\b/g)].map((m) => m[0]);
  const unexplained = [...new Set(shouty)].filter((w) => !WHITELIST.includes(w) && !DISPLAY.includes(w));
  deepStrictEqual(unexplained, [], `all-caps tokens in PROSE that are neither whitelisted acronyms nor display constants: ${unexplained.join(', ')}`);
});

test('the two blocking preconditions were real: hideLines shipped, and both citations landed', () => {
  // If either had been false the correct action was to stop rather than author.
  ok(sectionsOf(L!).some((s) => s.type === 'listening' && (s as { hideLines?: boolean }).hideLines === true),
    'hideLines had not shipped, and three listening sections would be reading sections');
  ok(byId.has('fr.a2.au-restaurant.132'), 'a2.07 had not landed and there would be no repair ids to cite');
  ok(byId.has('fr.a2.hebergement.074'), 'a2.29 had not landed and the ladder reference would be forward');
});
