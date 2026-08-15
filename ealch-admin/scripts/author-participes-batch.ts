/* a2.20 « Participes passés irréguliers », seq 17. Corpus + lesson + terms, to
 * Postgres.
 *
 *     pnpm content:participes -- --dry-run
 *     pnpm content:participes
 *
 * ── WHAT THIS BATCH REFUSES ──────────────────────────────────────────────
 *
 * A BARE PAST FORM AS A CORPUS ROW. a2.05 settled the split and this build
 *   agrees it: zero on both sides. A row whose `fr` has no whitespace is a bare
 *   word whatever its `kind` says (a2.05 §4), and that is the assertion the
 *   whole decision rests on.
 * A ROW INSIDE a2.05's BLOCK, and a row inside this build's block that this
 *   build does not own.
 * A FORM THE REGULAR RULE INVENTS — « prendu », « ouvri » — anywhere except the
 *   eleven sections where the error is the content, and never on a corpus row.
 * A NAMING FORM BEHIND avoir. « j'ai prendre » is a2.05's error arriving here
 *   by a new route.
 * A PAST FORM AGREEING WITH ANYTHING. a2.05 stated its side and a2.21 says the
 *   opposite; this lesson holds the line and its three être rows are masculine
 *   singular deliberately.
 * être IN FRONT OF A PAST FORM outside the three sections that teach the three
 *   forms, and ON ANY PRODUCTION SURFACE AT ALL.
 * TEACHING WHICH AUXILIARY A VERB TAKES, in English or in French. That is
 *   a2.21's whole canDo.
 * A GROUP WHOSE MEMBERS ARE NOT ALL IN ITS OWN SECTION. The brief asks the test
 *   to assert this family by family and the batch asserts it first.
 * A LOOK-DERIVABLE TRAP SHOWN WITHOUT ITS WRONG FORM BESIDE IT.
 * `dû` WITHOUT ITS CIRCUMFLEX, asserted by name, and a typed or spoken question
 *   that turns on it, which no surface in this app can score.
 * A DICTÉE TARGET that `dicteeMode` puts in WORD mode.
 * AN EAR QUESTION offering two options that are one sound apart.
 * GRAMMAR JARGON on a learner surface, walked over `sections + sheets + terms +
 *   intro + overview + acts + drills + AUDIO`, in both `prose()` and
 *   `display()`, with every entry checked in its -s plural.
 * A STACKED trapDrill, a trapDrill carrying a `size`, a cards-step label that
 *   miscounts its own array, or an audio step whose recording does not contain
 *   the cards' own lines.
 */
import './env';
import { Pool } from 'pg';
import {
  canonicalJson, formatIssues, quizQuestions, validateItem, validateLesson,
  type Item, type Lesson,
} from '../../ealch-v2/src/content/schema.ts';
import { formatDensity, validateDensity, hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { endingPopulation } from '../../ealch-v2/src/content/gender.logic.ts';
import { dicteeMode, letterCount } from '../../ealch-v2/src/content/dictee.logic.ts';
import { matchesAccept, fold } from '../../ealch-v2/src/content/answer.logic.ts';
import { normalizeFr } from '../../ealch-v2/src/utils/score.ts';
import {
  A103_SEED_POPULATION, A205_BLOCK, A205_IRREGULAR_PAST, A205_REFRAME,
  A215_REFRAME, AGREED_MUST_FIRE, AGREED_MUST_NOT_FIRE, AGREED_PAST_FORM,
  ALL_REPAIRS, ALSO_A_WORD, AUTHORED_HEADWORDS, AUTHORED_IDS,
  AUTHORED_PAST_FORMS, AUXILIARY_CHOICE, BLIND_NASALS, BREAK_BUDGET,
  BUILT_FORMS, CHOICE_MUST_FIRE, CHOICE_MUST_NOT_FIRE, CIRCUMFLEX, DERIVABLE,
  DERIVED_ONLY, DICTEE_LIMIT, DICTEE_MATRIX, DICTEE_NEAR_MISS,
  DU_WITHOUT_CIRCUMFLEX, DU_WITH_CIRCUMFLEX, ETRE_AUXILIARY, ETRE_FORMS,
  ETRE_MUST_FIRE, ETRE_MUST_NOT_FIRE, ETRE_UNIT, EU, EXPECTED_ACTS,
  EXPECTED_AUTHORED, EXPECTED_FORMS, EXPECTED_IMPORTED, EXPECTED_IN_GROUPS,
  EXPECTED_NASALS_MISSED, EXPECTED_NASALS_SEEN, EXPECTED_ODD, EXPECTED_QUESTIONS,
  EXPECTED_REPAIRS, EXPECTED_SECTIONS, EXPECTED_TERMS, EXPECTED_TRAP_DRILLS,
  FALSE_POSITIVE_CANDIDATES, FALSE_POSITIVE_CONTROL, FAMILY_UNIT, FORMS,
  GRID_CELL_MAX, GROUPS, GROUP_SIZES, HINT_MAX, ID_BLOCK, IMPORTED, IMPORTED_IDS,
  INFINITIVE_AFTER_AVOIR, INFINITIVE_MUST_FIRE, INFINITIVE_MUST_NOT_FIRE,
  LESSON_ID, MACHINE_MUST_FIRE, MACHINE_MUST_NOT_FIRE, NOT_REPAIRED,
  NO_EAR_QUESTION, OWNS_MISSIONS, PARADIGM_MISSIONS, PARTICIPES,
  PARTICIPLE_DECISION, PASSE_UNIT, PREREQ_DECLARERS, READ_NOT_IMPORTED,
  REFRAME, REGULAR_MACHINE, REJECTED_THEME, RESPELL_ADDITIONS,
  RESPELL_REPAIRS_INVISIBLE, RESPELL_REPAIRS_VISIBLE, ROW_COUNT_BEFORE,
  SCENE_ERROR, SCENE_STALL, SECTION_CONVENTION, SHEET_CELL_MAX, SHEET_COLS_MAX, SHEET_ID,
  SHEET_TITLE_MAX, STEP_LABEL_WORDS, THEME, THEME_COUNT_BEFORE, TITLE_MAX,
  UNIT, WRONG, formsOf, isA205, isMine,
} from './data/participes-corpus.ts';
import { PARTICIPES_TERMS, TERM_ROWS, TERM_ROW_MAX, rowWidth } from './data/participes-terms.ts';
import {
  ETRE_SECTIONS, GROUP_SECTIONS, PARTICIPES_ACTS, PARTICIPES_DICTEE_IDS,
  PARTICIPES_DRILLS, PARTICIPES_ERROR_TRIGGERS, PARTICIPES_ITEM_IDS,
  PARTICIPES_LESSON, PARTICIPES_SCENE_BEATS, PARTICIPES_SHEETS,
  PARTICIPES_SPEAK_IDS, PARTICIPES_TRANCHES, PRODUCTION_SECTIONS,
  QUIZ_SECTION_ID, WRONG_FORM_SECTIONS,
} from './data/participes-lesson.ts';
import { MEASURED } from './data/participes-rows.gen.ts';
import { displayRespell } from './data/participes-imported.ts';

const DRY_RUN = process.argv.includes('--dry-run');
const LESSON: Lesson = PARTICIPES_LESSON;
const UNIT_ID = UNIT.id;

function die(msg: string): never {
  console.error(`\n  ${msg}\n`);
  process.exit(1);
}

/** Every string anywhere inside a value. */
function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) strings(x, out);
  else if (v && typeof v === 'object') for (const x of Object.values(v)) strings(x, out);
  return out;
}

/** Prose only. A word-level guard must not read notation. */
const NOTATION_KEYS = new Set(['ipa', 'respell', 'promptSound', 'scoreSegment', 'sub']);

/** Machine keys. Section ids, refs and accept-lists are not learner surfaces. */
const MACHINE_KEYS = new Set([
  'id', 'ref', 'sheetId', 'itemId', 'itemIds', 'targets', 'detectOn', 'drill',
  'retest', 'accept', 'recordingId', 'audioRef', 'unitId', 'scenarioId',
  'clipIds', 'buckets',
]);

/** AN ID IS NOT PROSE, WHATEVER KEY IT ARRIVES UNDER. a2.04 §3. */
const isId = (s: string): boolean => /^fr\.[a-z0-9]+\.[a-z0-9-]+\.\d+$/i.test(s);

/** Keeps `sub` and drops only machine keys. a2.15 §3: on a cardDeck card `sub`
 *  holds PROSE, and `prose()` drops it as notation. */
function display(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') { if (!isId(v)) out.push(v); }
  else if (Array.isArray(v)) for (const x of v) display(x, out);
  else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) if (!MACHINE_KEYS.has(k)) display(x, out);
  }
  return out;
}
function prose(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') { if (!isId(v)) out.push(v); }
  else if (Array.isArray(v)) for (const x of v) prose(x, out);
  else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) if (!NOTATION_KEYS.has(k) && !MACHINE_KEYS.has(k)) prose(x, out);
  }
  return out;
}

/** Accent-aware word-boundary search. NEVER build a regex out of a search term:
 *  `\b` is ASCII-only in JavaScript. Invariants §0.
 *
 *  THE LEFT BOUNDARY DROPS THE APOSTROPHE. a2.17 §3: the house boundary cannot
 *  see `j'ai`, which is the first two words of thirty rows here. */
function hasPhrase(hay: string, needle: string): boolean {
  const isWordL = (c: string) => /[\p{L}\p{N}-]/u.test(c);
  const isWordR = (c: string) => /[\p{L}\p{N}'’-]/u.test(c);
  const h = hay.toLowerCase();
  const n = needle.toLowerCase();
  let i = 0;
  while ((i = h.indexOf(n, i)) !== -1) {
    if (!isWordL(i === 0 ? '' : h[i - 1]!) && !isWordR(h[i + n.length] ?? '')) return true;
    i += 1;
  }
  return false;
}

/** A UNIT ID IS ALMOST ALWAYS WRITTEN POSSESSIVELY, AND `hasPhrase` CANNOT SEE
 *  ONE THAT IS. a2.19 §1. */
const namesUnit = (hay: string, id: string): boolean => {
  const word = (c: string) => /[\p{L}\p{N}-]/u.test(c);
  const h = hay.toLowerCase();
  const n = id.toLowerCase();
  let i = 0;
  while ((i = h.indexOf(n, i)) !== -1) {
    if (!word(i === 0 ? '' : h[i - 1]!) && !word(h[i + n.length] ?? '')) return true;
    i += 1;
  }
  return false;
};

const countPhrase = (hay: string, needle: string): number => {
  let n = 0; let i = 0;
  const h = hay.toLowerCase(); const q = needle.toLowerCase();
  while ((i = h.indexOf(q, i)) !== -1) { n += 1; i += q.length; }
  return n;
};

const fires = (re: RegExp, s: string): boolean => new RegExp(re.source, re.flags.replace('g', '')).test(s);

/** No grammar jargon on a learner surface. Invariants §8.
 *
 *  THE LINE IS MEASURED the way a2.17 §8 asks rather than guessed. `verb`,
 *  `past`, `form` and `group` are HOUSE VOCABULARY and this lesson could not say
 *  what it is about without them. `participle` and `auxiliary` are not, and the
 *  plain phrases used instead are « the past form », « the first word » and
 *  « the group ». Every entry is checked in its -s plural because `hasPhrase` is
 *  boundary-exact and a2.15 shipped "Three paradigms, eighteen cells" past all
 *  three of its layers. */
const JARGON = [
  'participle', 'auxiliary', 'periphrastic', 'suppletive', 'suppletion',
  'compound tense', 'present perfect', 'preterite', 'infinitive', 'infinitival',
  'inflection', 'inflected', 'paradigm', 'morpheme', 'morphology', 'lexeme',
  'lexicalised', 'phoneme', 'phonological', 'orthography', 'orthographic',
  'nasal vowel', 'complement', 'constituent', 'predicate', 'invariable',
  'clitic', 'direct object', 'transitive', 'exponent', 'termination',
  'conjugation class', 'first person', 'second person', 'third person',
];

const AUTHORED_ITEMS: Item[] = PARTICIPES.map((r) => {
  const { role, form, ...rest } = r as Record<string, unknown> & { role: string; form?: string };
  void role; void form;
  return rest as unknown as Item;
});

const byId = (id: string) => LESSON.sections.find((s) => (s as { id?: string }).id === id);
const quizSection = LESSON.sections.find((s) => s.type === 'quiz');
if (!quizSection) die('the lesson has no quiz section');
const qs = quizQuestions(quizSection);

console.log(`\n  a2.20 "${UNIT.sub}"${DRY_RUN ? '  (dry run)' : ''}\n`);

/* ══════════════════════════════════════════════════════════════════════════
 *  1. THE SPLIT WITH a2.05, AND THE ONE-LINE GUARD IT RESTS ON
 * ═══════════════════════════════════════════════════════════════════════ */

if (PARTICIPLE_DECISION.isCorpusItem) die('PARTICIPLE_DECISION says a past form IS a corpus item and a2.05 settled that it is not.');
if (PARTICIPLE_DECISION.authoredHere !== 0) die('PARTICIPLE_DECISION.authoredHere is not zero.');
if (Object.keys(AUTHORED_HEADWORDS).length) die('this build authors a headword and corrections §2 says fifteen builds running have not.');
if (Object.keys(AUTHORED_PAST_FORMS).length) die('this build authors a bare past form and the split rests on there being none.');

/* A ROW WITH NO WHITESPACE IN ITS `fr` IS A BARE WORD WHATEVER ITS `kind` SAYS.
   a2.05 §4, found by its mutation 8: the corpus helper writes kind:'sentence'
   unconditionally, so `kind` cannot see it. This is the assertion the whole
   ledger decision rests on and it is one line. */
for (const r of PARTICIPES) {
  if (!/\s/.test(r.fr)) die(`${r.id} authors « ${r.fr} », which has no whitespace in it. That is a BARE WORD whatever its kind says, and a2.05 settled that a past form is never a corpus item.`);
  if (r.kind !== 'sentence') die(`${r.id} is kind=${r.kind} and every row this build authors is a sentence.`);
  if ((r as { gender?: string }).gender) die(`${r.id} carries a gender.`);
  if (r.theme !== THEME) die(`${r.id} is in theme ${r.theme} and this build writes into ${THEME}.`);
  if (r.level !== 'a2') die(`${r.id} is level ${r.level} and every row this build authors is a2.`);
  if (!isMine(r.id)) die(`${r.id} is outside this build's block ${ID_BLOCK.from}..${ID_BLOCK.to}.`);
  if (isA205(r.id)) die(`${r.id} is inside a2.05's block.`);
}
if (PARTICIPES.length !== EXPECTED_AUTHORED) die(`${PARTICIPES.length} rows authored and EXPECTED_AUTHORED is ${EXPECTED_AUTHORED}.`);
if (new Set(AUTHORED_IDS).size !== AUTHORED_IDS.length) die('two authored rows share an id.');
if (IMPORTED_IDS.length !== EXPECTED_IMPORTED) die(`${IMPORTED_IDS.length} rows imported and EXPECTED_IMPORTED is ${EXPECTED_IMPORTED}.`);
if (MEASURED.glossedAndRespelled !== 0) die(`the manifest measured ${MEASURED.glossedAndRespelled} bare past forms glossed as such AND respelled. The split rests on zero.`);
if (MEASURED.a205BlockRows !== 36) die(`a2.05's block holds ${MEASURED.a205BlockRows} rows and that lesson applied 36. Neither side may re-author the other's.`);
console.log(`  the split     0 bare past forms authored; a2.05's block holds ${MEASURED.a205BlockRows}, this build's ${AUTHORED_IDS.length}. Settled by ${PASSE_UNIT}, agreed here.`);

/* ══════════════════════════════════════════════════════════════════════════
 *  2. THE LIST, THE GROUPING, AND a2.05's THIRTY-FIVE
 * ═══════════════════════════════════════════════════════════════════════ */

if (FORMS.length !== EXPECTED_FORMS) die(`FORMS holds ${FORMS.length} and EXPECTED_FORMS is ${EXPECTED_FORMS}.`);
if (new Set(FORMS.map((f) => f.past)).size !== FORMS.length) die('two entries in FORMS share a past form.');
for (const g of GROUPS) {
  const n = formsOf(g).length;
  if (n !== GROUP_SIZES[g]) die(`the ${g} group holds ${n} forms and GROUP_SIZES says ${GROUP_SIZES[g]}.`);
}
const inGroups = FORMS.filter((f) => f.group !== 'odd').length;
const odd = FORMS.filter((f) => f.group === 'odd').length;
if (inGroups !== EXPECTED_IN_GROUPS) die(`${inGroups} forms are in a group and EXPECTED_IN_GROUPS is ${EXPECTED_IN_GROUPS}.`);
if (odd !== EXPECTED_ODD) die(`${odd} forms are in no group and EXPECTED_ODD is ${EXPECTED_ODD}.`);

/* EVERY ONE OF a2.05's THIRTY-FIVE IS ACCOUNTED FOR. That lesson refuses them
   all by name and hands them here; the two this lesson does not teach actively
   are named on the sheet and one is in the exam. Nothing is orphaned. */
const taught = new Set(FORMS.map((f) => f.past));
const derivedNames = new Set(DERIVED_ONLY.map((d) => d.past));
const orphans = A205_IRREGULAR_PAST.filter((p) => !taught.has(p) && !derivedNames.has(p));
if (orphans.length) die(`${orphans.length} of the thirty-five ${PASSE_UNIT} refuses are taught by nobody: ${orphans.join(', ')}.`);
const surplus = [...taught].filter((p) => !A205_IRREGULAR_PAST.includes(p));
if (surplus.length) console.log(`  !! this lesson teaches ${surplus.length} forms ${PASSE_UNIT} does not refuse: ${surplus.join(', ')}. Reported, not fatal.`);
console.log(`  the list      ${FORMS.length} forms, ${inGroups} in four groups and ${odd} in none. All ${A205_IRREGULAR_PAST.length} of ${PASSE_UNIT}'s names are covered (${DERIVED_ONLY.length} derived on the sheet).`);

/* ══════════════════════════════════════════════════════════════════════════
 *  3. EVERY GROUP IN ITS OWN SECTION, WITH ITS MEMBERS TOGETHER
 *
 *  THE BRIEF ASKS FOR THIS FAMILY BY FAMILY AND IT IS THE ENTIRE DIFFERENCE
 *  BETWEEN THIS LESSON AND A LIST. Every member of a group must appear, by its
 *  past form, inside the section that owns the group; and no group may be split
 *  across two sections or merged into another group's.
 * ═══════════════════════════════════════════════════════════════════════ */

if (GROUP_SECTIONS.length !== GROUPS.length) die(`there are ${GROUPS.length} groups and ${GROUP_SECTIONS.length} group sections.`);
for (const { group, sectionId } of GROUP_SECTIONS) {
  const sec = byId(sectionId);
  if (!sec) die(`the ${group} group names section ${sectionId} and the lesson has no such section.`);
  const text = strings(sec).join('\n');
  const missing = formsOf(group as never).map((f) => f.past).filter((p) => !hasPhrase(text, p));
  if (missing.length) {
    die(`the ${group} group's section ${sectionId} does not name ${missing.length} of its own members: ${missing.join(', ')}.\n`
      + '  A group whose members are not visible together is a list with a heading on it, which is the failure this lesson exists to avoid.');
  }
}
/* AND NO SECTION HOLDS TWO WHOLE GROUPS. Merging two families into one section
   is mutation 2 and it is what the assertion above cannot see on its own. */
for (const { group, sectionId } of GROUP_SECTIONS) {
  const text = strings(byId(sectionId)).join('\n');
  for (const other of GROUPS) {
    if (other === group) continue;
    const members = formsOf(other).map((f) => f.past);
    const present = members.filter((p) => hasPhrase(text, p));
    if (present.length === members.length) {
      die(`section ${sectionId} owns the ${group} group and also holds EVERY member of the ${other} group. Two families in one section is the list wearing a section type.`);
    }
  }
}
console.log(`  the grouping  ${GROUPS.length} groups, ${GROUPS.length} sections, every member named in its own and no section holding two whole groups`);

/* EVERY FORM IS SOMEWHERE. Asserted individually by name rather than by count,
   which is what the brief asks for. */
const learnerAll = [
  ...strings(LESSON.sections), ...strings(LESSON.sheets ?? []), ...strings(LESSON.terms ?? {}),
  LESSON.intro ?? '', ...strings(LESSON.overview ?? {}), ...strings(LESSON.acts ?? []),
  ...strings(LESSON.drills ?? []),
].join('\n');
const absent = FORMS.map((f) => f.past).filter((p) => !hasPhrase(learnerAll, p));
if (absent.length) die(`${absent.length} of the thirty-three appear nowhere in the lesson: ${absent.join(', ')}.`);

/* ══════════════════════════════════════════════════════════════════════════
 *  4. THE CIRCUMFLEX, ASSERTED BY NAME
 *
 *  THE BRIEF ASKS FOR `dû` TO BE ASSERTED BY NAME WITH A COMMENT SAYING IT IS
 *  DELIBERATE, so a future author stripping it goes red. Three ways: the form in
 *  FORMS, the row that teaches it, and the fact that no scored surface in this
 *  app can tell it from `du`.
 * ═══════════════════════════════════════════════════════════════════════ */

if (DU_WITH_CIRCUMFLEX !== 'dû') die('DU_WITH_CIRCUMFLEX is not « dû ». THE CIRCUMFLEX IS DELIBERATE: without it the word means "some".');
if (CIRCUMFLEX.past !== DU_WITH_CIRCUMFLEX) die('CIRCUMFLEX.past has lost its circumflex.');
const duForm = FORMS.find((f) => f.verb === 'devoir');
if (!duForm) die('devoir is not in FORMS.');
if (duForm.past !== DU_WITH_CIRCUMFLEX) die(`devoir's past form is recorded as « ${duForm.past} » and it is « ${DU_WITH_CIRCUMFLEX} ». THE CIRCUMFLEX IS DELIBERATE.`);
const duRow = PARTICIPES.find((r) => r.id === duForm.rowId);
if (!duRow || !hasPhrase(duRow.fr, DU_WITH_CIRCUMFLEX)) die(`the row that teaches devoir's past form does not contain « ${DU_WITH_CIRCUMFLEX} ».`);

/* AND NOTHING IN THIS APP CAN TEST IT, MEASURED THROUGH THE REAL FUNCTIONS
   RATHER THAN CLAIMED IN A COMMENT. If either of these ever stops being true the
   assertion goes red and the mcq-only decision can be revisited. */
if (fold(DU_WITH_CIRCUMFLEX) !== fold(DU_WITHOUT_CIRCUMFLEX)) {
  die('fold() can now tell dû from du. The circumflex mission is an mcq because it could not; revisit that.');
}
if (normalizeFr(DU_WITH_CIRCUMFLEX) !== normalizeFr(DU_WITHOUT_CIRCUMFLEX)) {
  die('normalizeFr() can now tell dû from du. The dictée was excused from testing it because it could not; revisit that.');
}
console.log(`  the roof      « ${DU_WITH_CIRCUMFLEX} » asserted by name in three places; fold and normalizeFr both collapse it to « ${DU_WITHOUT_CIRCUMFLEX} », so only an mcq can test it`);

/* NO TYPED, SPOTTED OR SPOKEN QUESTION MAY TURN ON THE CIRCUMFLEX. */
for (const q of qs) {
  const open = q.format === 'typeIn' || q.format === 'errorSpot' || q.format === 'speak';
  if (!open) continue;
  const answers = [q.answer ?? '', ...(q.accept ?? [])];
  if (answers.some((a) => hasPhrase(a, DU_WITH_CIRCUMFLEX))) {
    die(`a ${q.format} question asks for « ${DU_WITH_CIRCUMFLEX} » and fold() strips the circumflex, so it would accept « ${DU_WITHOUT_CIRCUMFLEX} » and tell the learner they spelled it right. ${JSON.stringify(q.q)}`);
  }
}

/* ══════════════════════════════════════════════════════════════════════════
 *  5. eu HAS ITS OWN TEACHING MOMENT
 * ═══════════════════════════════════════════════════════════════════════ */

const euSection = LESSON.sections.find((s) => (s as { id?: string }).id === 's17-eu');
if (!euSection) die('eu has no section of its own and the brief asks for one by name.');
if (!hasPhrase(strings(euSection).join('\n'), EU.past)) die('the eu section does not name eu.');
const euAct = PARTICIPES_ACTS.find((a) => a.sections.includes('s17-eu'));
if (!euAct) die('the eu section is in no act.');

/* ══════════════════════════════════════════════════════════════════════════
 *  6. THE LOOK-DERIVABLE TRAPS, SHOWN AS PAIRS
 *
 *  THE BRIEF ASKS THE TEST TO ASSERT THEM AS PAIRS RATHER THAN AS PRESENCE:
 *  « pris » next to a struck-through « prendu » is more memorable than « pris »
 *  alone, so the wrong form and the right one must be on ONE CARD.
 * ═══════════════════════════════════════════════════════════════════════ */

const pairSections = ['s05-machine', 's15-derivable'];
for (const d of DERIVABLE) {
  /* FOUND BY MUTATION 13. The pair check below asks whether one card holds both
     `wrong` and `right`, and setting `wrong` EQUAL to `right` satisfies it
     trivially: the card holds « pris » twice and the guard says the pair is
     there. A pair of one thing is not a pair, and this is the line that says so. */
  if (d.wrong === d.right) die(`the ${d.verb} trap records « ${d.wrong} » as both the invented form and the real one. A pair of one thing is not a pair.`);
  if (!BUILT_FORMS.includes(d.wrong)) die(`the ${d.verb} trap's invented form « ${d.wrong} » is not in BUILT_FORMS, so no guard anywhere refuses it outside the trap sections.`);
  const paired = pairSections.some((sid) => {
    const sec = byId(sid);
    if (!sec) return false;
    // The pair must sit in ONE object, not merely in the same section.
    const objs: unknown[] = [];
    const walk = (v: unknown) => {
      if (Array.isArray(v)) for (const x of v) walk(x);
      else if (v && typeof v === 'object') { objs.push(v); for (const x of Object.values(v)) walk(x); }
    };
    walk(sec);
    return objs.some((o) => {
      const t = strings(o).join('\n');
      return hasPhrase(t, d.wrong) && hasPhrase(t, d.right);
    });
  });
  if (!paired) die(`« ${d.wrong} » and « ${d.right} » never appear on ONE card. The brief asks for the wrong form beside the right one and asserts them as PAIRS.`);
}
console.log(`  the pairs     ${DERIVABLE.length} look-derivable traps, each shown on one card with the form the rule invents`);

/* ══════════════════════════════════════════════════════════════════════════
 *  7. NO AUXILIARY CHOICE IS TAUGHT, AND être IS CONFINED
 * ═══════════════════════════════════════════════════════════════════════ */

for (const s of CHOICE_MUST_FIRE) if (!fires(AUXILIARY_CHOICE, s)) die(`AUXILIARY_CHOICE does not fire on ${JSON.stringify(s)}`);
for (const s of CHOICE_MUST_NOT_FIRE) if (fires(AUXILIARY_CHOICE, s)) die(`AUXILIARY_CHOICE fires on ${JSON.stringify(s)}, which is legitimate content.`);
for (const s of ETRE_MUST_FIRE) if (!fires(ETRE_AUXILIARY, s)) die(`ETRE_AUXILIARY does not fire on ${JSON.stringify(s)}`);
for (const s of ETRE_MUST_NOT_FIRE) if (fires(ETRE_AUXILIARY, s)) die(`ETRE_AUXILIARY fires on ${JSON.stringify(s)}, which is legitimate content.`);

for (const s of display(LESSON.sections).concat(display(LESSON.sheets ?? []), display(LESSON.terms ?? {}), [LESSON.intro ?? ''], display(LESSON.overview ?? {}), display(LESSON.acts ?? []), display(LESSON.drills ?? []))) {
  if (fires(AUXILIARY_CHOICE, s)) die(`a learner surface teaches which first word a verb takes, which is ${ETRE_UNIT}'s whole canDo: ${JSON.stringify(s)}`);
}

/* être IN FRONT OF A PAST FORM: only in the three sections that teach the three
   forms, and NEVER on a production surface. */
for (const sec of LESSON.sections) {
  const sid = (sec as { id?: string }).id ?? '';
  const hit = strings(sec).find((s) => fires(ETRE_AUXILIARY, s));
  if (!hit) continue;
  if (!(ETRE_SECTIONS as readonly string[]).includes(sid)) {
    die(`section ${sid} puts être in front of a past form and it is not one of the three that teach venu, né and mort: ${JSON.stringify(hit)}`);
  }
  if ((PRODUCTION_SECTIONS as readonly string[]).includes(sid)) {
    die(`section ${sid} is a PRODUCTION SURFACE and it puts être in front of a past form. This lesson teaches the form and ${ETRE_UNIT} owns the choice.`);
  }
}
for (const id of PARTICIPES_DICTEE_IDS.concat(PARTICIPES_SPEAK_IDS)) {
  const r = PARTICIPES.find((x) => x.id === id)!;
  if (r.role === 'etre') die(`${id} is an être row and it is on a production surface. The three être forms are taught and never produced here.`);
}
for (const q of qs) {
  for (const s of strings(q)) if (fires(ETRE_AUXILIARY, s)) die(`a quiz question puts être in front of a past form: ${JSON.stringify(s)}`);
}
const etreRows = PARTICIPES.filter((r) => r.role === 'etre');
if (etreRows.length !== 2) die(`${etreRows.length} rows are flagged as être rows and this build authors two (venu and né; mort is taught from a published card).`);
if (ETRE_FORMS.length !== 3) die(`${ETRE_FORMS.length} forms are flagged être and there are three: venu, né and mort.`);
console.log(`  the boundary  ${ETRE_FORMS.length} forms flagged for ${ETRE_UNIT} (${ETRE_FORMS.join(', ')}); être confined to ${ETRE_SECTIONS.length} sections and absent from every production surface`);

/* ══════════════════════════════════════════════════════════════════════════
 *  8. NO PARTICIPLE AGREEMENT, ANYWHERE
 * ═══════════════════════════════════════════════════════════════════════ */

for (const s of AGREED_MUST_FIRE) if (!fires(AGREED_PAST_FORM, s)) die(`AGREED_PAST_FORM does not fire on ${JSON.stringify(s)}`);
for (const s of AGREED_MUST_NOT_FIRE) if (fires(AGREED_PAST_FORM, s)) die(`AGREED_PAST_FORM fires on ${JSON.stringify(s)}, which is legitimate content.`);
for (const r of PARTICIPES) if (fires(AGREED_PAST_FORM, r.fr)) die(`${r.id} agrees a past form: « ${r.fr} ». ${ETRE_UNIT} owns agreement and this lesson's three être rows are masculine singular deliberately.`);
for (const s of display(LESSON.sections).concat(display(LESSON.sheets ?? []), display(LESSON.terms ?? {}))) {
  if (fires(AGREED_PAST_FORM, s)) die(`a learner surface agrees a past form: ${JSON.stringify(s)}`);
}

/* ══════════════════════════════════════════════════════════════════════════
 *  9. THE MACHINE, AND THE NAMING FORM
 * ═══════════════════════════════════════════════════════════════════════ */

for (const s of MACHINE_MUST_FIRE) if (!fires(REGULAR_MACHINE, s)) die(`REGULAR_MACHINE does not fire on ${JSON.stringify(s)}`);
for (const s of MACHINE_MUST_NOT_FIRE) if (fires(REGULAR_MACHINE, s)) die(`REGULAR_MACHINE fires on ${JSON.stringify(s)}, which is legitimate content.`);
for (const s of INFINITIVE_MUST_FIRE) if (!fires(INFINITIVE_AFTER_AVOIR, s)) die(`INFINITIVE_AFTER_AVOIR does not fire on ${JSON.stringify(s)}`);
for (const s of INFINITIVE_MUST_NOT_FIRE) if (fires(INFINITIVE_AFTER_AVOIR, s)) die(`INFINITIVE_AFTER_AVOIR fires on ${JSON.stringify(s)}, which is legitimate content.`);

/* NOT ONE INVENTED FORM ON A CORPUS ROW. A row holding one would be served by
   the flashcard hub as French. */
for (const r of PARTICIPES) {
  for (const w of BUILT_FORMS) if (hasPhrase(r.fr, w)) die(`${r.id} contains the invented form « ${w} »: « ${r.fr} ». A corpus row is a card.`);
  if (fires(REGULAR_MACHINE, r.fr)) die(`${r.id} runs the regular rule on an irregular verb: « ${r.fr} »`);
  if (fires(INFINITIVE_AFTER_AVOIR, r.fr)) die(`${r.id} leaves a naming form behind avoir: « ${r.fr} »`);
}

/* AND OUTSIDE THE SECTIONS WHERE THE ERROR IS THE CONTENT. */
for (const sec of LESSON.sections) {
  const sid = (sec as { id?: string }).id ?? '';
  if ((WRONG_FORM_SECTIONS as readonly string[]).includes(sid)) continue;
  for (const s of display(sec)) {
    for (const w of BUILT_FORMS) {
      if (hasPhrase(s, w)) die(`section ${sid} shows the invented form « ${w} » and it is not one of the ${WRONG_FORM_SECTIONS.length} where the error is the content: ${JSON.stringify(s)}`);
    }
  }
}
for (const s of display(LESSON.sheets ?? []).concat([LESSON.intro ?? ''], display(LESSON.overview ?? {}))) {
  for (const w of BUILT_FORMS) if (hasPhrase(s, w)) die(`an invented form « ${w} » reaches the sheet, the intro or the overview: ${JSON.stringify(s)}`);
}
/* A TERM IS SURFACED AT EVERY POINT OF USE, so a non-word inside one reaches
   nine screens rather than the one where the error is the content. One term —
   `theMachine` — exists to name the thing, and there the non-word is the
   definition. THE RULE IS THE MARKER RATHER THAN THE BAN: an invented form may
   appear in a term only in a string that says, in so many words, that it is not
   a word. Anything else is a learner reading a non-word off a chip. */
const NOT_A_WORD = /(?:is not a word|is not one either|does not exist|no such word)/i;
for (const [key, t] of Object.entries(LESSON.terms ?? {})) {
  for (const s of display(t)) {
    for (const w of BUILT_FORMS) {
      if (hasPhrase(s, w) && !NOT_A_WORD.test(s)) {
        die(`term "${key}" prints the invented form « ${w} » without saying it is not a word, and a chip is surfaced on every section that names it: ${JSON.stringify(s)}`);
      }
    }
  }
}
console.log(`  the machine   ${BUILT_FORMS.length} invented forms confined to ${WRONG_FORM_SECTIONS.length} sections and absent from every corpus row`);

/* ══════════════════════════════════════════════════════════════════════════
 *  10. THE a2.15 BACK-REFERENCE, AND a2.05's
 *
 *  THE BRIEF ASKS FOR a2.15 BY UNIT ID and for its framing to be used
 *  deliberately. a2.16 §3: a back-reference to another unit's line is a LITERAL,
 *  not a variable, so the string is asserted as well as imported.
 * ═══════════════════════════════════════════════════════════════════════ */

if (A215_REFRAME !== 'Cover the front of the verb. Build what is left.') {
  die(`${FAMILY_UNIT}'s reframe has changed and this lesson quotes it verbatim: ${JSON.stringify(A215_REFRAME)}`);
}
if (A205_REFRAME !== 'One verb, two words, and the small ones go in between.') {
  die(`${PASSE_UNIT}'s reframe has changed and this lesson quotes it verbatim: ${JSON.stringify(A205_REFRAME)}`);
}
if (!learnerAll.includes(A215_REFRAME)) die(`${FAMILY_UNIT}'s reframe is not quoted verbatim on any learner surface.`);
if (!learnerAll.includes(A205_REFRAME)) die(`${PASSE_UNIT}'s reframe is not quoted verbatim on any learner surface.`);
if (!namesUnit(learnerAll, FAMILY_UNIT)) die(`${FAMILY_UNIT} is never named by unit id and the brief asks for it by name.`);
if (!namesUnit(learnerAll, PASSE_UNIT)) die(`${PASSE_UNIT} is never named by unit id.`);
if (!namesUnit(learnerAll, ETRE_UNIT)) die(`${ETRE_UNIT} is never named by unit id and it owns the boundary this lesson defers.`);

/* AND THE INTRO NAMES NO UNIT ID. a2.05 measured that it was the only one of 58
   lessons whose intro did, and that the cover is the first screen. */
if (/(?:sons|a1|a2|b1|b2|c1)\.\d{2}/i.test(LESSON.intro ?? '')) {
  die(`the intro names a unit id, and it is drawn on the lesson COVER before any card has credited anything: ${JSON.stringify(LESSON.intro)}`);
}
console.log(`  the credits   ${FAMILY_UNIT} and ${PASSE_UNIT} both quoted verbatim and named by id; the intro names none`);

/* ══════════════════════════════════════════════════════════════════════════
 *  11. THE REFRAME, COUNTED AGAINST AN EXPLICIT CONSTANT
 * ═══════════════════════════════════════════════════════════════════════ */

const reframeUses = countPhrase(learnerAll, REFRAME);
if (reframeUses < 3) die(`the reframe is carried ${reframeUses} times and the density validator requires three.`);
if (LESSON.reframe !== REFRAME) die('Lesson.reframe is not the corpus REFRAME.');
console.log(`  the reframe   « ${REFRAME} » carried ${reframeUses} times`);

/* ══════════════════════════════════════════════════════════════════════════
 *  12. THE ACT WEIGHTS. THE OWNS OUTWEIGHS THE RECAP.
 * ═══════════════════════════════════════════════════════════════════════ */

const ownsAct = PARTICIPES_ACTS.find((a) => a.id === 'act3');
const recapAct = PARTICIPES_ACTS.find((a) => a.id === 'act2');
if (!ownsAct || !recapAct) die('act2 or act3 is missing.');
if (ownsAct.sections.length !== OWNS_MISSIONS) die(`the Owns act holds ${ownsAct.sections.length} sections and OWNS_MISSIONS is ${OWNS_MISSIONS}.`);
if (recapAct.sections.length !== PARADIGM_MISSIONS) die(`the recap act holds ${recapAct.sections.length} sections and PARADIGM_MISSIONS is ${PARADIGM_MISSIONS}.`);
if (ownsAct.sections.length <= recapAct.sections.length) {
  die('the recap act is not smaller than the Owns act. Doctrine §B.5: if the paradigm outweighs the Owns, the wrong lesson got built.');
}
const biggest = Math.max(...PARTICIPES_ACTS.map((a) => a.sections.length));
if (ownsAct.sections.length !== biggest || PARTICIPES_ACTS.filter((a) => a.sections.length === biggest).length !== 1) {
  die('the Owns act is not the largest act on its own.');
}
console.log(`  act weights   Owns ${ownsAct.sections.length} missions, recap ${recapAct.sections.length}. The Owns is the largest act alone.`);

/* ══════════════════════════════════════════════════════════════════════════
 *  13. SECTIONS, ACTS, TRANCHES
 * ═══════════════════════════════════════════════════════════════════════ */

if (LESSON.sections.length !== EXPECTED_SECTIONS) die(`${LESSON.sections.length} sections and EXPECTED_SECTIONS is ${EXPECTED_SECTIONS}.`);
if (PARTICIPES_ACTS.length !== EXPECTED_ACTS) die(`${PARTICIPES_ACTS.length} acts and EXPECTED_ACTS is ${EXPECTED_ACTS}.`);
if (qs.length !== EXPECTED_QUESTIONS) die(`${qs.length} questions and EXPECTED_QUESTIONS is ${EXPECTED_QUESTIONS}.`);
if (Object.keys(PARTICIPES_TERMS).length !== EXPECTED_TERMS) die(`${Object.keys(PARTICIPES_TERMS).length} terms and EXPECTED_TERMS is ${EXPECTED_TERMS}.`);
if (PARTICIPES_TRANCHES.length !== EXPECTED_ACTS) die(`${PARTICIPES_TRANCHES.length} tranches and there are ${EXPECTED_ACTS} acts. validateLesson requires one slice per act.`);
if (LESSON.sections.length > SECTION_CONVENTION) {
  console.log(`  section count ${LESSON.sections.length}, above the ${SECTION_CONVENTION} convention. DECLARED, not hidden. See SECTION_OVERRUN_REASON.`);
}
const traps = LESSON.sections.filter((s) => s.type === 'trapDrill');
if (traps.length !== EXPECTED_TRAP_DRILLS) die(`${traps.length} trapDrills and EXPECTED_TRAP_DRILLS is ${EXPECTED_TRAP_DRILLS}.`);
if (LESSON.sections.filter((s) => s.type === 'quiz').length !== 1) die('a second quiz section is silently never rendered.');

/* THE STEPPED trapDrill SHAPE. lesson-contract.test.ts requires it and the
   ledger's sweep records the two lessons that shipped without it. */
for (const t of traps as unknown as Record<string, unknown>[]) {
  const id = String(t.id);
  const steps = (t.steps ?? []) as { kind: string; label?: string; gate?: boolean }[];
  if (steps.map((s) => s.kind).join('>') !== 'rule>cards>audio>drill') die(`${id} does not walk rule > cards > audio > drill.`);
  if (t.swipe !== true) die(`${id} has no swipe.`);
  if (!t.audio) die(`${id} has no audio spec and its audio step plays nothing.`);
  if (!t.say) die(`${id} has no say.`);
  if (!steps.find((s) => s.kind === 'drill')?.gate) die(`${id}'s drill step is not gated.`);
  if (t.size) die(`${id} carries a size and size comes OFF a stepped trapDrill.`);
  /* a2.18 §3: THE CARDS STEP'S LABEL COUNTS ITS OWN ARRAY and the pager draws
     one dot per card directly under it. */
  const cards = (t.cards ?? []) as unknown[];
  const label = String(steps.find((s) => s.kind === 'cards')?.label ?? '').toLowerCase();
  const word = STEP_LABEL_WORDS[cards.length];
  if (word && !label.includes(word)) die(`${id}'s cards step is labelled ${JSON.stringify(label)} and it holds ${cards.length} cards, so the label must say "${word}".`);
  /* a2.18 §4: A TRAP CARD'S `fr` IS SPOKEN by the audio step at the section's
     speeds through a French voice, so it may not hold an English gloss. */
  for (const cd of cards as Record<string, string>[]) {
    if (!cd.fr) die(`${id} has a card with no fr and the audio step plays each card's fr.`);
  }
  /* AND THE RECORDING MUST CONTAIN THE CARDS' OWN LINES. */
  const rec = (LESSON.audio?.recorded ?? []).find((r) => r.id === (t.audio as { recordingId?: string }).recordingId);
  if (!rec) die(`${id} names a recording that is not briefed.`);
  for (const cd of cards as Record<string, string>[]) {
    if (!(rec.clipIds ?? []).includes(cd.fr)) die(`${id}'s audio step plays « ${cd.fr} » and ${rec.id} does not contain it.`);
  }
  /* wrongThenRight only where the take really is one. */
  const wtr = (t.audio as { wrongThenRight?: boolean }).wrongThenRight === true;
  const hasWrong = (cards as Record<string, string>[]).some((cd) => BUILT_FORMS.some((w) => hasPhrase(cd.fr, w)));
  if (wtr !== hasWrong) die(`${id} sets wrongThenRight=${wtr} and ${hasWrong ? 'its cards DO' : 'its cards do NOT'} contain an invented form. The ledger's sweep asks for a truthful title.`);
}
console.log(`  the traps     ${traps.length} stepped trapDrills, both walking rule > cards > audio > drill with a gated drill and a truthful audio title`);

/* commonErrors WANTS swipe OR IT DRAWS A BLANK SCREEN. */
for (const s of LESSON.sections as unknown as Record<string, unknown>[]) {
  if (s.type === 'commonErrors' && s.swipe !== true) die(`${String(s.id)} is a commonErrors without swipe and it draws a blank screen.`);
}

/* THE HINT LINE, AND THE DOUBLED FULL STOP. Both found on a Pixel 6 by this
   build and by no host gate.

   A `cardDeck`'s `hint` is ONE LINE and ellipsises; a `listening` question that
   quotes two French sentences gets two full stops in a row, because both lines
   already end in one. Neither field is checked by anything anywhere. */
for (const s of LESSON.sections as unknown as Record<string, unknown>[]) {
  const hint = String(s.hint ?? '');
  if (hint.length > HINT_MAX) die(`${String(s.id)}'s hint is ${hint.length} characters and the Pixel 6 cuts it at ${HINT_MAX}: ${JSON.stringify(hint)}`);
}
for (const s of display(LESSON.sections).concat(display(LESSON.sheets ?? []), display(LESSON.terms ?? {}))) {
  // EXACTLY TWO, so a three-dot ellipsis is left alone: the scene's own
  // « Samedi, j'ai... j'ai prendu... » is a stall and not a punctuation defect.
  if (/(?<!\.)\.\.(?!\.)/.test(s)) die(`a doubled full stop reaches a learner surface, which is a quoted sentence keeping its own: ${JSON.stringify(s)}`);
}

/* THREE TERM CHIPS PER SECTION, MAXIMUM, AND THE ROW IS 37 WIDE. */
for (const s of LESSON.sections as unknown as Record<string, unknown>[]) {
  const t = (s.terms ?? []) as string[];
  if (t.length > 3) die(`${String(s.id)} declares ${t.length} term chips and the renderer shows three.`);
  for (const k of t) if (!PARTICIPES_TERMS[k]) die(`${String(s.id)} names term ${k} and the glossary has no such entry.`);
  if (rowWidth(t) > TERM_ROW_MAX) die(`${String(s.id)}'s chip row is ${rowWidth(t)} characters and the budget is ${TERM_ROW_MAX}.`);
}
for (const r of TERM_ROWS) if (rowWidth(r) > TERM_ROW_MAX) die(`the declared chip row ${r.join('+')} is ${rowWidth(r)} characters.`);

/* MISSION TITLE WIDTH. a2.13 measured it on a Pixel 6; a2.14 §13 corrected it
   to a WIDTH rather than a count. */
for (const s of LESSON.sections as unknown as Record<string, unknown>[]) {
  const title = String(s.title ?? '');
  if (title.length > TITLE_MAX) die(`${String(s.id)}'s title is ${title.length} characters and the ceiling is ${TITLE_MAX}: ${JSON.stringify(title)}`);
}

/* ══════════════════════════════════════════════════════════════════════════
 *  14. THE SHEET
 * ═══════════════════════════════════════════════════════════════════════ */

const sheet = PARTICIPES_SHEETS[0]!;
if (sheet.id !== SHEET_ID) die('the sheet id is not SHEET_ID.');
if (sheet.title.length > SHEET_TITLE_MAX) die(`the sheet title is ${sheet.title.length} characters and a2.19 §3 measured the header bar cut at ${SHEET_TITLE_MAX}.`);
if (PARTICIPES_SHEETS.length !== 1) die('this lesson declares more than one reference sheet.');
for (const s of (sheet.sections ?? []) as unknown as Record<string, unknown>[]) {
  if (s.type === 'cheatSheet') die('a cheatSheet inside a reference sheet draws its title and nothing else. a1.13 ships exactly that today.');
  if (s.type === 'table') {
    const cols = (s.cols ?? []) as string[];
    if (cols.length > SHEET_COLS_MAX) die(`sheet table ${String(s.id)} has ${cols.length} columns and a2.04 measured a four-column table clipping on a Pixel 6.`);
    for (const row of (s.rows ?? []) as string[][]) {
      for (const cell of row) {
        if (cell.length > SHEET_CELL_MAX) die(`sheet table ${String(s.id)} has a cell of ${cell.length} characters and the budget is ${SHEET_CELL_MAX}: ${JSON.stringify(cell)}`);
      }
    }
  }
}
/* THE SHEET HOLDS ALL THIRTY-THREE, GROUPED. The brief calls it the
   highest-value sheet in A2 and says a learner returns to it for months. */
const sheetText = strings(sheet).join('\n');
const notOnSheet = FORMS.map((f) => f.past).filter((p) => !hasPhrase(sheetText, p));
if (notOnSheet.length) die(`${notOnSheet.length} of the thirty-three are not on the reference sheet: ${notOnSheet.join(', ')}.`);
for (const d of DERIVED_ONLY) if (!hasPhrase(sheetText, d.past)) die(`« ${d.past} » is derived rather than taught and it is not on the sheet either, so nothing owns it.`);
console.log(`  the sheet     ${(sheet.sections ?? []).length} sections, all ${FORMS.length} forms grouped, plus the ${DERIVED_ONLY.length} derived, widest cell inside ${SHEET_CELL_MAX}`);

/* ══════════════════════════════════════════════════════════════════════════
 *  15. THE QUIZ
 * ═══════════════════════════════════════════════════════════════════════ */

const fmt = (f?: string) => f ?? 'mcq';
const counts: Record<string, number> = {};
for (const q of qs) counts[fmt(q.format)] = (counts[fmt(q.format)] ?? 0) + 1;
const mcqN = counts.mcq ?? 0;
if (mcqN > qs.length / 2) die(`${mcqN} of ${qs.length} questions are mcq and at most half may be.`);
const typed = (counts.typeIn ?? 0) + (counts.errorSpot ?? 0);
const picked = qs.length - typed;
if (typed <= picked) {
  die(`${typed} questions are typed and ${picked} are picked. The canDo says PRODUCE, and seeing the right answer among four is not what it asks for.`);
}
for (const q of qs) {
  if (!q.why) die(`a question has no why: ${JSON.stringify(q.q)}`);
  if (!q.ref) die(`a question has no ref: ${JSON.stringify(q.q)}`);
  if (!byId(q.ref)) die(`a question refs ${q.ref} and the lesson has no such section.`);
  if ((q.format === 'typeIn' || q.format === 'errorSpot') && !matchesAccept(q.answer ?? '', q.accept ?? [])) {
    die(`the answer shown for ${JSON.stringify(q.q)} is not accepted by its own accept list.`);
  }
  if (q.format === 'errorSpot' && !q.prompt) die(`an errorSpot has no prompt and ErrorSpotCard renders q alone: ${JSON.stringify(q.q)}`);
  if (q.format === 'listenChoose' && !q.say) die(`a listenChoose has no say and the card falls back to speaking the answer: ${JSON.stringify(q.q)}`);
}
/* CORRECT ANSWERS MUST NOT CLUSTER: the density validator fails any option slot
   holding more than 40% of the closed-format questions. */
const closed = qs.filter((q) => fmt(q.format) === 'mcq' || fmt(q.format) === 'listenChoose');
const slots: Record<number, number> = {};
for (const q of closed) slots[Number(q.correct)] = (slots[Number(q.correct)] ?? 0) + 1;
for (const [slot, n] of Object.entries(slots)) {
  if (n / closed.length > 0.4) die(`option slot ${slot} holds ${n} of ${closed.length} closed-format answers, which is over 40%.`);
}
/* EVERY ROUND LEADS A DIFFERENT TRIGGER, so all six drills are reachable.
   drillForRound fires the FIRST resolving target and then stops. */
const rounds = (quizSection as unknown as { rounds: { id: string; targets: string[] }[] }).rounds;
const leads = rounds.map((r) => r.targets[0]);
if (new Set(leads).size !== leads.length) die(`two rounds lead the same trigger (${leads.join(', ')}), so at least one drill is unreachable.`);
for (const t of PARTICIPES_ERROR_TRIGGERS) {
  if (!leads.includes(t.id)) die(`trigger ${t.id} leads no round, so its drill is dead content.`);
  if (!PARTICIPES_DRILLS.find((d) => d.id === t.drill)) die(`trigger ${t.id} names drill ${t.drill} and it does not exist.`);
  if (!PARTICIPES_DRILLS.find((d) => d.id === t.retest)) die(`trigger ${t.id} names retest ${t.retest} and it does not exist.`);
}
/* NO EAR QUESTION MAY OFFER TWO OPTIONS THAT ARE ONE SOUND APART. a2.10's and
   a2.11's shape: it fires only when two options differ ONLY by a member of one
   pair, so « J'ai dû partir. » against « J'ai bu du thé. » stays legal. */
for (const q of qs) {
  if (fmt(q.format) !== 'listenChoose') continue;
  const opts = q.opts ?? [];
  for (let i = 0; i < opts.length; i += 1) {
    for (let j = 0; j < opts.length; j += 1) {
      if (i === j) continue;
      for (const [x, y] of NO_EAR_QUESTION) {
        if (x !== y && opts[i]!.replace(x, y) === opts[j]) {
          die(`an ear question offers « ${opts[i]} » against « ${opts[j]} », which differ only by ${x}/${y}. They are one sound and there is no correct answer.`);
        }
      }
    }
  }
}
console.log(`  the exam      ${qs.length} questions in ${rounds.length} rounds — typeIn ${counts.typeIn ?? 0}, errorSpot ${counts.errorSpot ?? 0}, mcq ${mcqN}, listenChoose ${counts.listenChoose ?? 0}. Typed ${typed} against picked ${picked}.`);

/* THE GENERALISATION TEST THE BRIEF ASKS FOR: at least one question asks for a
   form the lesson never printed. */
const printedForms = new Set(FORMS.map((f) => f.past));
const coldAnswers = qs
  .filter((q) => q.format === 'typeIn')
  .map((q) => String(q.answer ?? ''))
  .filter((a) => a && !printedForms.has(a));
if (coldAnswers.length < 3) die(`only ${coldAnswers.length} typed questions ask for a form this lesson never printed, and the whole claim of the lesson is that sorting generalises.`);
console.log(`  cold          ${coldAnswers.length} typed questions ask for a form the lesson never printed: ${coldAnswers.join(', ')}`);

/* ══════════════════════════════════════════════════════════════════════════
 *  16. THE DICTÉE, THROUGH THE REAL FUNCTION
 * ═══════════════════════════════════════════════════════════════════════ */

for (const d of DICTEE_MATRIX) {
  const n = letterCount(d.fr);
  if (n !== d.letters) die(`DICTEE_MATRIX says « ${d.fr} » is ${d.letters} letters and letterCount says ${n}.`);
  if (dicteeMode(d.fr) !== 'letters') die(`« ${d.fr} » is in WORD mode and word mode hands every real word over pre-spelled.`);
  if (n > DICTEE_LIMIT) die(`« ${d.fr} » is ${n} letters and the limit is ${DICTEE_LIMIT}.`);
}
if (DICTEE_MATRIX.length !== PARTICIPES_DICTEE_IDS.length) {
  die(`DICTEE_MATRIX holds ${DICTEE_MATRIX.length} rows and the dictée names ${PARTICIPES_DICTEE_IDS.length}.`);
}
for (const id of PARTICIPES_DICTEE_IDS) {
  const r = PARTICIPES.find((x) => x.id === id)!;
  if (dicteeMode(r.fr) !== 'letters') die(`${id} carries a dictation drill and dicteeMode puts « ${r.fr} » in WORD mode.`);
  if (!DICTEE_MATRIX.some((d) => d.fr === r.fr)) die(`${id} is a dictée target and is not in DICTEE_MATRIX.`);
}
/* AND THE OTHER DIRECTION: a row NOT carrying the drill must be one that could
   not have carried it, or the omission is an accident. */
for (const r of PARTICIPES) {
  if (r.drills.includes('dictation')) continue;
  if (r.role === 'group' && dicteeMode(r.fr) === 'letters' && !DICTEE_MATRIX.some((d) => d.fr === r.fr)) {
    // Legal: a group may have more LETTERS-mode rows than it needs targets. The
    // guard that matters is that no WORD-mode row carries the drill, above.
  }
}
/* THE NEAR MISS, IN BOTH DIRECTIONS, THROUGH THE REAL normalizeFr. a2.09's
   shape: if `fold` is ever fixed the assertion fails instead of going stale. */
for (const nm of DICTEE_NEAR_MISS) {
  if (!DICTEE_MATRIX.some((d) => d.fr === nm.target)) die(`DICTEE_NEAR_MISS names « ${nm.target} », which is not a dictée target.`);
  const same = normalizeFr(nm.target) === normalizeFr(nm.miss);
  if (same === nm.canTell) {
    die(`DICTEE_NEAR_MISS says the dictée ${nm.canTell ? 'CAN' : 'CANNOT'} tell « ${nm.target} » from « ${nm.miss} » and normalizeFr says the opposite.`);
  }
}
const untestable = DICTEE_NEAR_MISS.filter((n) => !n.canTell).length;
console.log(`  the dictée    ${PARTICIPES_DICTEE_IDS.length} rows, every one in LETTERS mode through the real dicteeMode; ${untestable} near miss the dictée cannot see and it says so on the card`);

/* ══════════════════════════════════════════════════════════════════════════
 *  17. THE NASALS, THROUGH THE REAL CHECKER, IN BOTH DIRECTIONS
 * ═══════════════════════════════════════════════════════════════════════ */

let seen = 0; let missed = 0;
const missedRows: string[] = [];
for (const r of PARTICIPES) {
  if (hasPlainNasalFor(r.fr, r.respell!)) die(`${r.id} is flagged by hasPlainNasalFor: « ${r.fr} » [${r.respell}]`);
  const re = r.respell!;
  for (let i = 0; i < re.length; i += 1) {
    if (re[i] !== 'ⁿ') continue;
    const broken = `${re.slice(0, i)}n${re.slice(i + 1)}`;
    if (hasPlainNasalFor(r.fr, broken)) seen += 1;
    else { missed += 1; missedRows.push(`${r.fr}  ${broken}`); }
  }
  if (re.includes('‿')) die(`${r.id} carries U+203F and it draws as a low underscore on a Pixel 6.`);
}
if (seen !== EXPECTED_NASALS_SEEN) die(`${seen} nasals are visible to the checker and EXPECTED_NASALS_SEEN is ${EXPECTED_NASALS_SEEN}.`);
if (missed !== EXPECTED_NASALS_MISSED) die(`${missed} nasals are invisible to the checker and EXPECTED_NASALS_MISSED is ${EXPECTED_NASALS_MISSED}.`);
/* THE TWO BLIND ONES, ASSERTED BY NAME AND IN BOTH DIRECTIONS, so the day the
   checker gains the ability to see them this goes red rather than the list going
   quietly dead. Corrections §6 and a2.17 §14.1. */
if (BLIND_NASALS.length !== EXPECTED_NASALS_MISSED) die(`BLIND_NASALS holds ${BLIND_NASALS.length} entries and ${missed} nasals are invisible.`);
for (const b of BLIND_NASALS) {
  const r = PARTICIPES.find((x) => x.fr === b.fr);
  if (!r) die(`BLIND_NASALS names « ${b.fr} » and no row has it.`);
  if (r.respell !== b.respell) die(`BLIND_NASALS records ${JSON.stringify(b.respell)} for « ${b.fr} » and the row holds ${JSON.stringify(r.respell)}.`);
  if (!b.respell.includes(b.token)) die(`BLIND_NASALS says the blind token in « ${b.fr} » is ${JSON.stringify(b.token)} and the respelling does not contain it.`);
  const broken = b.respell.replace('ⁿ', 'n');
  if (hasPlainNasalFor(b.fr, broken)) die(`« ${b.fr} » is recorded as BLIND and the checker CAN see ${JSON.stringify(broken)}. The blindness has been fixed and the list is now wrong.`);
}
/* THE REPAIR TABLE, IN a2.17 §2's THREE-FIELD SHAPE. */
if (ALL_REPAIRS.length !== EXPECTED_REPAIRS) die(`${ALL_REPAIRS.length} repairs and EXPECTED_REPAIRS is ${EXPECTED_REPAIRS}.`);
for (const rp of ALL_REPAIRS) {
  const flaggedFrom = hasPlainNasalFor(rp.fr, rp.from);
  if (flaggedFrom === rp.blind) die(`${rp.id} is recorded blind=${rp.blind} and the checker ${flaggedFrom ? 'DOES' : 'does NOT'} flag the stored value.`);
  if (hasPlainNasalFor(rp.fr, rp.to)) die(`${rp.id}'s repaired value is still flagged: ${JSON.stringify(rp.to)}`);
  if (hasPlainNasalFor(rp.fr, rp.half)) die(`${rp.id}'s minimal repair is still flagged: ${JSON.stringify(rp.half)}`);
  if ((rp.half !== rp.to) !== (rp.blind || rp.house)) {
    die(`${rp.id}: half !== to is ${rp.half !== rp.to} and (blind || house) is ${rp.blind || rp.house}. a2.17 §2: two different reasons for one symptom, kept as separate fields.`);
  }
}
if (RESPELL_REPAIRS_VISIBLE.length + RESPELL_REPAIRS_INVISIBLE.length !== ALL_REPAIRS.length) die('the repair split does not cover every repair.');
if (RESPELL_ADDITIONS.length !== 0) die('this build supplies a respelling and RESPELL_ADDITIONS was asserted empty.');
/* THE FALSE-POSITIVE PATH, IN BOTH DIRECTIONS. Six negatives prove nothing on
   their own the day the checker changes, so a control that MUST fire is carried. */
for (const c of FALSE_POSITIVE_CANDIDATES) {
  if (hasPlainNasalFor(c.fr, c.respell)) die(`the false-positive path fires on « ${c.fr} » [${c.respell}], which this build recorded as clean.`);
}
if (!hasPlainNasalFor(FALSE_POSITIVE_CONTROL.fr, FALSE_POSITIVE_CONTROL.respell)) {
  die(`the false-positive CONTROL « ${FALSE_POSITIVE_CONTROL.fr} » no longer fires, so the six negatives above have stopped meaning anything.`);
}
/* EVERY DISPLAYED IMPORTED RESPELLING IS CLEAN, after the repair is applied. */
for (const i of IMPORTED) {
  const v = displayRespell(i.id);
  if (!v) die(`${i.id} has no respelling to display and a card without one cannot be said.`);
  if (v.includes('‿')) die(`${i.id} carries U+203F.`);
  if (hasPlainNasalFor(i.fr, v)) die(`${i.id} displays a flagged respelling: « ${i.fr} » [${v}]`);
}
console.log(`  the nasals    ${seen} seen, ${missed} missed and both missed asserted by name; ${ALL_REPAIRS.length} repair, 0 supplied, ${NOT_REPAIRED.length} left alone; the false-positive control fires`);

/* ══════════════════════════════════════════════════════════════════════════
 *  18. HOUSE COPY, WALKED OVER `audio` TOO
 *
 *  a2.05 §3: `Lesson.audio.recorded[].desc` is authored prose that ships in the
 *  lesson body, and every house-copy walk in this band built its string out of
 *  sections + sheets + terms + intro + overview + acts + drills and stopped.
 *  Found by the seed-wide sons-alphabet.test.ts AFTER all three of that build's
 *  layers were green.
 * ═══════════════════════════════════════════════════════════════════════ */

const houseSurfaces = [
  ...display(LESSON.sections), ...display(LESSON.sheets ?? []), ...display(LESSON.terms ?? {}),
  LESSON.intro ?? '', ...display(LESSON.overview ?? {}), ...display(LESSON.acts ?? []),
  ...display(LESSON.drills ?? []),
  ...strings(LESSON.audio ?? {}),
  ...PARTICIPES.map((r) => `${r.en} ${r.notes ?? ''}`),
];
const AI_TELL = [
  'falls fast', 'trip up', 'half of everything', 'this is the big one',
  'listen to the trap', 'get those two right', 'this is the part that pays',
  'here is the catch',
];
for (const s of houseSurfaces) {
  if (s.includes('—')) die(`an em dash reaches a learner surface: ${JSON.stringify(s)}`);
  if (/\bhonest(ly|y)?\b/i.test(s)) die(`the banned word "honest" reaches a learner surface: ${JSON.stringify(s)}`);
  if (s.includes('‿')) die(`U+203F reaches a learner surface: ${JSON.stringify(s)}`);
  for (const t of AI_TELL) if (s.toLowerCase().includes(t)) die(`AI-tell phrasing: ${JSON.stringify(s)}`);
}

/* JARGON, walked over BOTH `prose()` and `display()` and with every entry
   checked in its -s plural. `grammarAssumed` and `grammarIntroduced` are NOT
   walked: invariants §8 says those are addressed to the curriculum. */
/* `overview.titleEn` IS THE UNIT'S OWN ENGLISH NAME AND `content_units` REQUIRES
   IT TO MATCH, so it cannot be reworded and it is exempt by name rather than by
   accident. a2.17 §5 is the reason this lesson guards a RATIO instead of banning
   the word: the unit is called « Irregular Past Participles » and no build gets
   to rename it. */
if ((LESSON.overview as { titleEn?: string })?.titleEn !== UNIT.title) {
  die(`overview.titleEn is ${JSON.stringify((LESSON.overview as { titleEn?: string })?.titleEn)} and content_units says the unit is ${JSON.stringify(UNIT.title)}.`);
}
const { titleEn: _titleEn, ...overviewRest } = (LESSON.overview ?? {}) as Record<string, unknown>;
void _titleEn;
const jargonSurfaces = [
  ...prose(LESSON.sections), ...prose(LESSON.sheets ?? []), ...prose(LESSON.terms ?? {}),
  LESSON.intro ?? '', ...prose(overviewRest), ...prose(LESSON.acts ?? []),
  ...prose(LESSON.drills ?? []),
  ...display(LESSON.sections), ...display(LESSON.sheets ?? []), ...display(LESSON.terms ?? {}),
];
for (const s of jargonSurfaces) {
  for (const j of JARGON) {
    if (hasPhrase(s, j)) die(`grammar jargon "${j}" on a learner surface: ${JSON.stringify(s)}`);
    if (hasPhrase(s, `${j}s`)) die(`grammar jargon "${j}s" on a learner surface: ${JSON.stringify(s)}`);
  }
}
/* AND THE RATIO, NOT THE WORD. a2.17 §8: `adjective` is on 147 shipped cards, so
   the part-of-speech names are house vocabulary and banning one is the build
   inventing a rule. What the house does is prefer the plain phrase, so the plain
   phrase must outnumber the technical one. Here « past form » against « form ». */
const plain = countPhrase(learnerAll, 'past form');
if (plain < 20) die(`the plain phrase "past form" appears ${plain} times and this lesson is about nothing else.`);
console.log(`  house copy    ${houseSurfaces.length} surfaces walked including audio; "past form" ${plain} times, 0 jargon hits`);

/* ══════════════════════════════════════════════════════════════════════════
 *  19. THE SCENE, AND THE BREAK CARD
 * ═══════════════════════════════════════════════════════════════════════ */

const brk = PARTICIPES_SCENE_BEATS.find((b) => b.kind === 'break') as Record<string, unknown> | undefined;
if (!brk) die('the scene has no break card.');
if (String(brk.heading).length > BREAK_BUDGET.heading) die(`the break heading is ${String(brk.heading).length} characters and the budget is ${BREAK_BUDGET.heading}.`);
if (String(brk.body).split(/\s+/).length > BREAK_BUDGET.bodyWords) die(`the break body is ${String(brk.body).split(/\s+/).length} words and the budget is ${BREAK_BUDGET.bodyWords}.`);
for (const side of ['wrong', 'right'] as const) {
  const v = brk[side] as Record<string, string>;
  if (v.fr.length > BREAK_BUDGET.fr) die(`the break card's ${side} French is ${v.fr.length} characters and the budget is ${BREAK_BUDGET.fr}.`);
  if (v.en.length > BREAK_BUDGET.en) die(`the break card's ${side} gloss is ${v.en.length} characters and the budget is ${BREAK_BUDGET.en}.`);
}
if (brk.coach) die('the break card carries a coach line and the scene closing renders on the same screen.');

/* THE SCENE'S FAILURE IS A NON-WORD, which is what makes it this lesson's scene
   rather than a2.05's.
   FOUND BY MUTATION 16: walking every string in the scene passes on a scene that
   has been repaired, because the English gloss « I took the bus, except that
   prendu is not a word » still holds the token. THE CHECK IS ON THE FRENCH THE
   SCENE SPEAKS, which is what the learner hears go wrong. */
const sceneFrench = [
  ...PARTICIPES_SCENE_BEATS.flatMap((b) => {
    const o = b as Record<string, unknown>;
    return [
      typeof o.fr === 'string' ? o.fr : '',
      ...((o.options ?? []) as Record<string, string>[]).map((x) => x.fr ?? ''),
      ((o.wrong ?? {}) as Record<string, string>).fr ?? '',
      ((o.right ?? {}) as Record<string, string>).fr ?? '',
    ];
  }),
  SCENE_STALL, SCENE_ERROR,
].filter(Boolean);
if (!BUILT_FORMS.some((w) => sceneFrench.some((s) => hasPhrase(s, w)))) {
  die('no FRENCH line in the scene holds an invented form. This lesson\'s failure IS a non-word: the learner applies last lesson\'s rule out loud and produces something nobody says, and a gloss mentioning it is not the same thing.');
}

/* ══════════════════════════════════════════════════════════════════════════
 *  20. REACHABILITY, TRANCHES, AND THE ITEM LISTS
 * ═══════════════════════════════════════════════════════════════════════ */

const declared = new Set(PARTICIPES_ITEM_IDS);
if (declared.size !== PARTICIPES_ITEM_IDS.length) die('itemIds holds a duplicate.');
const released = PARTICIPES_TRANCHES.flat();
if (new Set(released).size !== released.length) die('a tranche releases the same item twice.');
for (const id of released) if (!declared.has(id)) die(`${id} is released by a tranche and is not in itemIds.`);
const unreleased = [...declared].filter((id) => !released.includes(id));
if (unreleased.length) die(`${unreleased.length} declared items are released by no tranche: ${unreleased.slice(0, 8).join(', ')}`);
/* NOTHING IS RELEASED BEFORE THE ACTS HAVE SHOWN IT. */
for (let i = 0; i < PARTICIPES_TRANCHES.length; i += 1) {
  const shownBy = PARTICIPES_ACTS.slice(0, i + 1).flatMap((a) => a.sections).map((sid) => strings(byId(sid)).join('\n')).join('\n');
  for (const id of PARTICIPES_TRANCHES[i]!) {
    const r = PARTICIPES.find((x) => x.id === id);
    const text = r ? r.fr : '';
    if (text && !shownBy.includes(text)) {
      die(`tranche ${i + 1} releases ${id} « ${text} » and acts 1..${i + 1} never show it.`);
    }
  }
}
console.log(`  reachability  ${declared.size} items, every one released exactly once and none before its act`);

/* ══════════════════════════════════════════════════════════════════════════
 *  21. SCHEMA AND DENSITY
 * ═══════════════════════════════════════════════════════════════════════ */

for (const it of AUTHORED_ITEMS) {
  const issues = validateItem(it);
  if (issues.length) die(`${it.id} fails validateItem:\n${formatIssues(issues)}`);
}
const lessonIssues = validateLesson(LESSON);
if (lessonIssues.length) die(`the lesson fails validateLesson:\n${formatIssues(lessonIssues)}`);
const density = validateDensity(LESSON);
if (density.length) die(`the lesson fails the density validator:\n${formatDensity(density)}`);
console.log('  schema        validateItem, validateLesson and validateDensity all clean');

/* ══════════════════════════════════════════════════════════════════════════
 *  POSTGRES
 * ═══════════════════════════════════════════════════════════════════════ */

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 2 });
  const c = await pool.connect();

  /* THE ROW COUNT IS THE ONLY SIGNAL, and a row INSIDE the block that this build
     does not own is fatal whatever the total does. Ledger §10. */
  const nsNow = await c.query<{ id: string }>("select id from content_items where id like 'fr.a2.verbes.%' order by id");
  const ids = nsNow.rows.map((r) => r.id);
  const foreign = ids.filter((id) => isMine(id) && !AUTHORED_IDS.includes(id));
  if (foreign.length) {
    c.release(); await pool.end();
    die(`${foreign.length} rows exist inside this build's block ${ID_BLOCK.from}..${ID_BLOCK.to} and it does not own them:\n  ${foreign.join('\n  ')}`);
  }
  const inA205 = ids.filter(isA205);
  if (inA205.length !== 36) {
    c.release(); await pool.end();
    die(`a2.05's block ${A205_BLOCK.from}..${A205_BLOCK.to} holds ${inA205.length} rows and that lesson applied 36. Neither side may re-author the other's rows.`);
  }
  const before = nsNow.rowCount ?? 0;
  if (before < ROW_COUNT_BEFORE) {
    c.release(); await pool.end();
    die(`fr.a2.verbes held ${ROW_COUNT_BEFORE} rows and now holds ${before}. A SHRINKING total is somebody deleting rows.`);
  }
  if (before !== ROW_COUNT_BEFORE && before !== ROW_COUNT_BEFORE + AUTHORED_IDS.length) {
    console.log(`  !! fr.a2.verbes holds ${before} rows and this build expected ${ROW_COUNT_BEFORE}. Nothing is inside the block, so this is somebody else's allocation. Reported, not fatal.`);
  }

  const themeNow = await c.query<{ n: string }>(
    'select count(*) n from content_items where theme = $1 and id <> all($2)', [THEME, AUTHORED_IDS]);
  const themeCount = Number(themeNow.rows[0]!.n);
  if (themeCount < THEME_COUNT_BEFORE) {
    c.release(); await pool.end();
    die(`${THEME} held ${THEME_COUNT_BEFORE} rows and now holds ${themeCount}. A SHRINKING total is somebody deleting rows.`);
  }
  if (themeCount > THEME_COUNT_BEFORE) console.log(`  !! ${THEME} has grown from ${THEME_COUNT_BEFORE} to ${themeCount}. Reported, not fatal.`);

  /* NO ROW OF THIS BUILD LANDS IN THE REJECTED THEME. */
  if (PARTICIPES.some((r) => r.theme === REJECTED_THEME)) {
    c.release(); await pool.end();
    die(`a row lands in ${REJECTED_THEME}, which this build considered and rejected.`);
  }

  /* NO DUPLICATE fr INSIDE THE THEME. flashhub-coverage.test.ts treats two rows
     sharing an fr in one theme as one card served twice, article stripped. */
  const strip = (s: string) => s.replace(/^(le |la |les |l'|l’|un |une |des |du |de la )/i, '').toLowerCase().trim();
  const themeRows = await c.query<{ id: string; fr: string; gender: string | null; kind: string }>(
    'select id, fr, gender, kind from content_items where theme = $1', [THEME]);
  const seenFr = new Map<string, string>();
  for (const r of themeRows.rows) if (!AUTHORED_IDS.includes(r.id)) seenFr.set(strip(r.fr), r.id);
  for (const r of PARTICIPES) {
    const clash = seenFr.get(strip(r.fr));
    if (clash) {
      c.release(); await pool.end();
      die(`${r.id} ${JSON.stringify(r.fr)} collides with ${clash} inside ${THEME}. The flashcard hub would serve one card twice.`);
    }
  }

  /* a1.03's ENDING POPULATION, THROUGH THE REAL FUNCTION RATHER THAN A COPY.
     NECESSARY AND NOT SUFFICIENT: this measures POSTGRES, where an imported row
     already exists and adds nothing, and a1.03 measures it off THE SEED, where a
     CARRY is what puts it there. The merge does the other half. */
  const baseRows = themeRows.rows.filter((r) => !AUTHORED_IDS.includes(r.id));
  const popBefore = endingPopulation(baseRows as never);
  const popAfter = endingPopulation([...baseRows, ...AUTHORED_ITEMS] as never);
  if (popBefore.length !== popAfter.length) {
    c.release(); await pool.end();
    die(`this build changes a1.03's ending population from ${popBefore.length} rows to ${popAfter.length}. Invariants §5: withdraw rather than argue.`);
  }
  const impGender = await c.query<{ id: string; gender: string }>(
    'select id, gender from content_items where id = any($1) and gender is not null', [IMPORTED_IDS]);
  if (impGender.rowCount) {
    c.release(); await pool.end();
    die(`${impGender.rowCount} imported rows carry a gender and the merge would carry them into the seed: ${impGender.rows.map((r) => `${r.id}(${r.gender})`).join(', ')}`);
  }
  console.log(`  a1.03         ending population unchanged at ${popBefore.length} rows from this theme, 0 gendered rows authored AND 0 imported`);

  /* THE SPLIT, RE-MEASURED AGAINST POSTGRES AT APPLY TIME. */
  const bare = await c.query<{ id: string; fr: string }>(
    `select id, fr from content_items where kind='word' and fr = any($1) order by fr`,
    [['parlé', 'mangé', 'fini', 'choisi', 'vendu', 'répondu', 'travaillé', 'attendu', 'perdu', 'entendu']]);
  if (bare.rowCount) {
    c.release(); await pool.end();
    die(`${bare.rowCount} regular past forms now exist as headwords: ${bare.rows.map((r) => `${r.fr} (${r.id})`).join(', ')}. The split ${PASSE_UNIT} settled rests on there being none.`);
  }

  /* THE UNIT. Corrections §1: from the database, never from the brief. */
  const unitRow = await c.query<{ body: Record<string, unknown> }>(
    "select body from content_units where kind = 'curriculum_unit' and body->>'id' = $1", [UNIT_ID]);
  if (!unitRow.rowCount) { c.release(); await pool.end(); die(`${UNIT_ID} is not in content_units`); }
  const unit = unitRow.rows[0]!.body as { id: string; seq: number; title: string; sub: string; canDo: string; lessonIds?: string[]; prereqUnitIds?: string[] };
  if (Number(unit.seq) !== UNIT.seq) { c.release(); await pool.end(); die(`the database says ${UNIT_ID} is seq ${unit.seq} and the corpus says ${UNIT.seq}`); }
  if (unit.title !== UNIT.title) { c.release(); await pool.end(); die(`the database title is ${JSON.stringify(unit.title)} and the corpus says ${JSON.stringify(UNIT.title)}`); }
  if (unit.sub !== UNIT.sub) { c.release(); await pool.end(); die(`the database sub is ${JSON.stringify(unit.sub)} and the corpus says ${JSON.stringify(UNIT.sub)}`); }
  if (unit.canDo !== UNIT.canDo) { c.release(); await pool.end(); die(`the database canDo is ${JSON.stringify(unit.canDo)} and the corpus says ${JSON.stringify(UNIT.canDo)}`); }
  if (JSON.stringify(unit.prereqUnitIds ?? []) !== JSON.stringify(UNIT.prereqUnitIds)) {
    console.log(`  !! the database prereqUnitIds are ${JSON.stringify(unit.prereqUnitIds)} and the corpus says ${JSON.stringify(UNIT.prereqUnitIds)}. Reported, not fatal.`);
  }
  const expectedTag = `A2 · LEÇON ${String(unit.seq).padStart(2, '0')}`;
  if (LESSON.tag !== expectedTag) { c.release(); await pool.end(); die(`the lesson tag is ${JSON.stringify(LESSON.tag)} and missions.ts computes ${JSON.stringify(expectedTag)}`); }

  /* DEPENDENTS. Corrections §7: an ownership claim taken off the unit bodies is
     usually an artifact of the query, so this is probed and REPORTED as what it
     is — a fact about `prereqUnitIds` — rather than turned into a claim. */
  const dependents = await c.query<{ id: string; seq: number }>(
    "select body->>'id' id, (body->>'seq')::int seq from content_units where kind = 'curriculum_unit' and body->'prereqUnitIds' ? $1 order by 2", [UNIT_ID]);
  if ((dependents.rowCount ?? 0) !== PREREQ_DECLARERS) {
    console.log(`  !! ${dependents.rowCount} units now declare ${UNIT_ID} as a prerequisite and the corpus records ${PREREQ_DECLARERS}: ${dependents.rows.map((r) => r.id).join(', ')}. Reported, not fatal.`);
  }
  console.log(`  trail         ${dependents.rowCount} unit(s) declare ${UNIT_ID} as a prerequisite. ${ETRE_UNIT} declares ${PASSE_UNIT}, not this, and the hand-off is a teaching one.`);

  const already = (unit.lessonIds ?? []).includes(LESSON.id);
  console.log(`  unit          ${UNIT_ID} seq ${unit.seq}, tag ${expectedTag}, lessonIds ${JSON.stringify(unit.lessonIds ?? [])}${already ? '  (re-run)' : '  (first lesson)'}`);
  const nextUnit = { ...unit, lessonIds: [...new Set([...(unit.lessonIds ?? []), LESSON.id])] };

  /* THE VERSION MOVES FORWARD WHEN THE CONTENT MOVES. */
  const prev = await c.query<{ body: unknown }>(
    "select body from content_units where kind = 'lesson' and slug = $1", [LESSON.id]);
  const prevBody = prev.rows[0]?.body as { version?: number } | undefined;
  const prevVersion = prevBody?.version ?? 0;
  if (LESSON.version < prevVersion) {
    c.release(); await pool.end();
    die(`the stored lesson is v${prevVersion} and this one is v${LESSON.version}. The counter moves forward, never back.`);
  }
  if (LESSON.version === prevVersion) {
    if (canonicalJson(prevBody) !== canonicalJson(LESSON)) {
      c.release(); await pool.end();
      die(`the stored lesson is v${prevVersion} and this one is v${LESSON.version} with DIFFERENT content.\n`
        + '  Move the lesson\'s own version counter forward. Two different bodies under one number is the drift\n'
        + '  that makes Postgres and seed.json disagree while both report the same version.');
    }
    console.log(`  lesson        ${LESSON.id} v${LESSON.version} unchanged, idempotent re-run`);
  } else if (prevVersion === 0) {
    console.log(`  lesson        ${LESSON.id} new, v${LESSON.version}`);
  } else {
    console.log(`  lesson        ${LESSON.id} replacing v${prevVersion} with v${LESSON.version}`);
  }

  if (DRY_RUN) {
    console.log('\n  DRY RUN: every guard passed, nothing written.\n');
    c.release(); await pool.end();
    return;
  }

  await c.query('begin');
  try {
    for (const it of AUTHORED_ITEMS) {
      await c.query(
        `insert into content_items (id, kind, level, theme, fr, en, ipa, respell, gender, notes, tags, drills, version, status)
         values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,'published')
         on conflict (id) do update set kind=excluded.kind, level=excluded.level, theme=excluded.theme,
           fr=excluded.fr, en=excluded.en, ipa=excluded.ipa, respell=excluded.respell, gender=excluded.gender,
           notes=excluded.notes, tags=excluded.tags, drills=excluded.drills, version=excluded.version,
           status='published'`,
        [it.id, it.kind, it.level, it.theme, it.fr, it.en, it.ipa ?? null, it.respell ?? null,
          (it as { gender?: string }).gender ?? null, it.notes ?? null, it.tags ?? [], it.drills ?? [],
          it.version ?? 1],
      );
    }
    // THE ONE REPAIR, guarded by the stored value still being the one this build
    // read. Invariants §9.
    for (const rp of ALL_REPAIRS) {
      await c.query('update content_items set respell = $2 where id = $1 and respell in ($3, $2)', [rp.id, rp.to, rp.from]);
    }
    await c.query(
      `insert into content_units (slug, title, kind, level, locale, status, body, version, generated_by)
       values ($1,$2,'lesson',$3,'fr','published',$4::jsonb,1,'human')
       on conflict (slug) do update set
         title=excluded.title, level=excluded.level, body=excluded.body, status='published', updated_at=now()`,
      [LESSON.id, LESSON.title, LESSON.level, JSON.stringify(LESSON)]);
    const uu = await c.query(
      `update content_units set body = $1::jsonb, updated_at = now()
        where kind = 'curriculum_unit' and body->>'id' = $2`,
      [JSON.stringify(nextUnit), UNIT_ID]);
    if (uu.rowCount !== 1) throw new Error(`the unit update touched ${uu.rowCount} rows, expected exactly 1`);
    await c.query('commit');
  } catch (e) {
    await c.query('rollback');
    c.release(); await pool.end();
    die(`transaction rolled back: ${(e as Error).message}`);
  }

  /* IT LANDED. Read back rather than assumed. */
  const afterRows = await c.query<{ n: string; mx: string }>(
    "select count(*) n, coalesce(max(id),'') mx from content_items where id like 'fr.a2.verbes.%'");
  const check = await c.query<{ id: string; respell: string | null }>(
    'select id, respell from content_items where id = any($1)', [ALL_REPAIRS.map((r) => r.id)]);
  const post = new Map(check.rows.map((r) => [r.id, r] as const));
  const failed: string[] = [];
  for (const rp of ALL_REPAIRS) {
    const now = String(post.get(rp.id)?.respell ?? '');
    if (now !== rp.to) failed.push(`${rp.id} respell is ${JSON.stringify(now)} and the repaired value is ${JSON.stringify(rp.to)}`);
    if (hasPlainNasalFor(rp.fr, now)) failed.push(`${rp.id} is still flagged after the repair: ${JSON.stringify(now)}`);
  }
  const nsAfter = Number(afterRows.rows[0]!.n);
  if (nsAfter !== before + AUTHORED_ITEMS.length && nsAfter !== before) {
    failed.push(`fr.a2.verbes holds ${nsAfter} rows and it held ${before} before this build's ${AUTHORED_ITEMS.length}`);
  }
  if (failed.length) { c.release(); await pool.end(); die(`the transaction committed and these did not land:\n  ${failed.join('\n  ')}`); }

  console.log(
    '\n  applied to Postgres:\n'
    + `    ${AUTHORED_ITEMS.length} rows authored into ${THEME}, ${AUTHORED_ITEMS[0]!.id}..${AUTHORED_ITEMS[AUTHORED_ITEMS.length - 1]!.id}\n`
    + '      ZERO headwords, ZERO gendered rows and ZERO bare past forms, authored OR imported.\n'
    + `    ${ALL_REPAIRS.length} respelling repaired, 0 supplied, ${NOT_REPAIRED.length} found broken and left alone\n`
    + `    ${IMPORTED_IDS.length} rows imported by id, ${READ_NOT_IMPORTED.length} read and refused\n`
    + `    lesson ${LESSON.id} v${LESSON.version}, ${LESSON.sections.length} sections, ${EXPECTED_ACTS} acts, ${qs.length} questions, ${PARTICIPES_ITEM_IDS.length} items\n`
    + `    ${FORMS.length} forms: ${GROUPS.map((g) => `${g} ${GROUP_SIZES[g]}`).join(', ')}\n`
    + `    fr.a2.verbes row count: ${before} before, ${nsAfter} after (max ${afterRows.rows[0]!.mx})\n`
    + `    a2.05's block ${A205_BLOCK.from}..${A205_BLOCK.to} still holds ${inA205.length} rows\n\n`
    + '  NEXT: pnpm tsx scripts/merge-participes-into-seed.ts\n');

  c.release();
  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
