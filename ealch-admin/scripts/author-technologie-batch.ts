// a2.32.l1 « La technologie » — apply to Postgres.
//
//   pnpm content:technologie --dry     guards only, writes nothing
//   pnpm content:technologie           applies
//
// POSTGRES FIRST, SEED SECOND. Run merge-technologie-into-seed.ts after this,
// or the lesson exists in the database and nowhere the app can read it.
//
// DO NOT run author-full-curriculum-spine.ts. A naive re-run would revert 74 of
// 75 unit titles, which is what spine-drift.test.ts exists to catch — and
// a2.32's `themes: ['internet']` is ALREADY CORRECT in that file, in the
// content_units row and in seed.json. The prompt's §1.1 says this build is the
// one that changes it. a2.07's build did it on 2026-08-15 under the collation's
// blocking step 2 and recorded it in 07-BAND-ID-LEDGER.md §2. THIS BUILD
// CHANGES NO SPINE FIELD, and the guard below fails if the array has moved.
//
// DO NOT run content:publish from here. Doctrine §C: publishing is not part of
// a lesson build, and content:parity must be read first.
import './env';
import {
  ALL_ROWS, UNIT, THEME, LESSON_ID, E, ID_FIRST, ID_LAST,
  IMPORT_IDS, IMPORTED, NOT_DECK_ABLE, REPAIR_IDS, REPAIR_FR, LADDER_IDS, RUNGS,
  DICTEE_IDS, DICTEE_MODE_EXPECTED, OTHER_VOICE_FLOOR,
  BANNED_SUBSTRINGS, FORBIDDEN_CLAIMS, FORBIDDEN_MOOD_WORDS, FORBIDDEN_FORM_RULES,
  ESCALATION_MARKERS, JARGON, NEAR_MISSES, FOLD_COLLISIONS,
  NEVER_A_SCORED_KEY, QUEBEC_ONLY_FORMS, QUEBEC_CARD_SECTION, DEFECT_ROWS, SENTENCE_ABOUT_FRENCH,
  DEAD_AUDIO_FIELDS, DEAD_LESSON_FIELDS, EXAM_POLICY,
} from './data/technologie-corpus.ts';
import { LESSON, ITEM_IDS, DECK_TRANCHE } from './data/technologie-lesson.ts';
import { validateLesson, quizQuestions } from '../../ealch-v2/src/content/schema.ts';
import { validateDensity, formatDensity, hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { fold } from '../../ealch-v2/src/content/answer.logic.ts';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';

const DRY_RUN = process.argv.includes('--dry');
const REAPPLY = process.argv.includes('--reapply');
const die: (m: string) => never = (m) => { console.error(`\n  STOP: ${m}\n`); process.exit(1); };

/** `drills` is a Postgres enum array and node-postgres can hand it back as the
 *  RAW LITERAL `{flashcard,review}`. A `.includes()` on that string is a
 *  substring test that lies. */
const toArray = (d: unknown): string[] =>
  Array.isArray(d) ? d as string[] : String(d ?? '').replace(/[{}"]/g, '').split(',').filter(Boolean);

const strs = (v: unknown, out: string[] = []): string[] => {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strs(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strs(x, out));
  return out;
};

/** Corrections §14.3: THE HOUSE WORD BOUNDARY EXCLUDES AN APOSTROPHE, so a
 *  guard built on it cannot see `l'écran`, `j'ai`, `d'erreur` or `qu'est-ce`.
 *  Drop the apostrophe from the LEFT boundary and keep it on the right. */
const hasWord = (hay: string, needle: string): boolean =>
  new RegExp(`(?<![\\p{L}\\p{N}-])${needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![\\p{L}\\p{N}'’-])`, 'iu').test(hay);

async function main() {
  /* ── OFFLINE GUARDS. These need no database and they are the cheap ones. ── */

  const schemaIssues = validateLesson(LESSON, LESSON_ID);
  if (schemaIssues.length) die(`validateLesson:\n${schemaIssues.map((i) => `    ${i.path}: ${i.message}`).join('\n')}`);

  const density = validateDensity(LESSON, new Set(ITEM_IDS));
  if (density.length) die(`validateDensity:\n${formatDensity(density)}`);

  const ids = ALL_ROWS.map((r) => r.id);
  if (new Set(ids).size !== ids.length) die('a duplicate id in the authored rows');
  const nums = ids.map((i) => Number(i.split('.').pop()));
  if (Math.min(...nums) < ID_FIRST || Math.max(...nums) > ID_LAST) {
    die(`an authored id sits outside the requested block ${E(ID_FIRST)}..${E(ID_LAST)}`);
  }

  // The 14-word sentence budget (doctrine §C).
  for (const r of ALL_ROWS) {
    if (r.kind === 'sentence' && r.fr.split(/\s+/).length > 14) die(`${r.id} runs past the 14-word sentence budget`);
  }

  // The band's other-voice mandate (collation §1.5), MEASURED not asserted.
  // For this unit the other party is THREE people: the machine, the support
  // agent and the friend.
  const other = ALL_ROWS.filter((r) => r.voice === 'other').length;
  const ratio = other / ALL_ROWS.length;
  if (ratio < OTHER_VOICE_FLOOR) {
    die(`only ${(ratio * 100).toFixed(1)}% of authored rows are in the other party's voice, floor is ${OTHER_VOICE_FLOOR * 100}%`);
  }

  // a2.07 owns the repair move. ZERO authored here, checked string by string.
  const authoredFr = new Set(ALL_ROWS.map((r) => r.fr));
  for (const fr of REPAIR_FR) if (authoredFr.has(fr)) die(`this build authored one of a2.07's frozen repair rows: "${fr}"`);

  /* ══════════════════════════════════════════════════════════════════════
   *  THE ASSERTION THAT PINS PAUL'S DECISION INTO THE BUILD
   *
   *  Item 2, answered 2026-08-15: OPTION B. Nobody owns the imperative. Act 2
   *  is a chunk inventory, not a paradigm.
   *
   *  Three separate checks, because the decision can be broken three ways:
   *  by NAMING the mood, by STATING the rule, or by making a scored surface
   *  BUILD a form. Each failure message says which.
   * ══════════════════════════════════════════════════════════════════════ */

  const LEARNER_TEXT = [
    ...strs(LESSON.sections), ...strs(LESSON.terms),
    LESSON.intro ?? '', ...strs(LESSON.overview ?? {}), ...strs(LESSON.drills ?? []),
    ...strs(LESSON.acts ?? []), ...strs(LESSON.errorTriggers ?? []),
  ].join('\n');
  const ALL_TEXT = [LEARNER_TEXT, ...ALL_ROWS.map((r) => `${r.fr} ${r.en}`)].join('\n');

  // 1. THE MOOD IS NEVER NAMED, on any learner surface or in either grammar
  //    list. a2.27's suite carries the same pair.
  for (const w of FORBIDDEN_MOOD_WORDS) {
    if (LEARNER_TEXT.toLowerCase().includes(w)) {
      die(`"${w}" appears on a learner surface. Paul answered item 2 with option B: NOBODY owns the imperative, `
        + 'this unit uses it as unanalysed lexis, and naming the mood is the first half of teaching it.');
    }
    for (const g of [...(LESSON.grammarIntroduced ?? []), ...(LESSON.grammarAssumed ?? [])]) {
      if (g.toLowerCase().includes(w)) die(`"${w}" is claimed in a grammar list. This unit teaches no mood.`);
    }
  }

  // 2. NO AUTHORED STRING STATES A RULE FOR FORMING AN ORDER. This is the
  //    paradigm with the label filed off, and it is the shape a lesson takes
  //    when it avoids the word and teaches the rule anyway.
  for (const rule of FORBIDDEN_FORM_RULES) {
    if (LEARNER_TEXT.toLowerCase().includes(rule)) {
      die(`a learner-facing string says "${rule}". Act 2 has NO PARADIGM: no card may say a form is made by `
        + 'deleting, dropping or removing anything. If you are writing a table of forms, you have taken the dead path.');
    }
  }

  // 3. NO SCORED SURFACE BUILDS A FORM FROM AN INFINITIVE. Scoped to
  //    production surfaces and asserted, per §10.
  const PRODUCTION = new Set(['quiz', 'dictation', 'practice', 'groupDrill', 'trapDrill', 'scenario']);
  const BUILD_SHAPES = [
    /from the infinitive/i, /make the .*form/i, /form the .*from/i,
    /turn .*into an order/i, /conjugate/i,
  ];
  for (const sec of LESSON.sections) {
    if (!PRODUCTION.has(sec.type)) continue;
    for (const s of strs(sec)) {
      for (const rx of BUILD_SHAPES) {
        if (rx.test(s)) die(`${(sec as { id?: string }).id}: a scored surface asks the learner to build a form: "${s.slice(0, 80)}"`);
      }
    }
  }

  /* ── a2.29's GROUND. CITE, DO NOT RE-TEACH. ────────────────────────────────
   *  Its ladder is ESCALATION (one voice, rising force). This unit's three are
   *  VOICES (no force at all, you pick one). A reader who conflates them thinks
   *  the band teaches the same thing twice.
   *
   *  And the word "rung" belongs to a2.07's numbered repair move. It appears in
   *  NO authored string here. */
  for (const m of ESCALATION_MARKERS) {
    if (ALL_TEXT.toLowerCase().includes(m.toLowerCase())) {
      die(`an authored string escalates a request: "${m}". a2.29 owns escalation; this unit's agent is asked for help, not pushed.`);
    }
  }
  if (hasWord(LEARNER_TEXT, 'rung') || hasWord(LEARNER_TEXT, 'rungs')) {
    die('"rung" appears on a learner surface. A numbered rung is a2.07\'s repair move and a named rung is a2.29\'s '
      + "ladder. This unit's three are VOICES, because nothing escalates between them.");
  }
  // If a rung NAME is quoted at all it is quoted verbatim. This unit quotes
  // none, which is legal (clause 1 governs the quoting, not whether you do).
  const quoted = RUNGS.filter((r) => LEARNER_TEXT.includes(r));
  if (quoted.length && quoted.length !== RUNGS.length) {
    die(`${quoted.length} of a2.29's three rung names are quoted. Quote all three verbatim or none: a partial ladder is a second ladder.`);
  }

  /* ── THE HOUSE RULES, OVER EVERY LEARNER-FACING STRING ──────────────────── */

  // Jargon, with the -s plural of every entry (Corrections §13: `hasPhrase` is
  // boundary-exact, so a list holding `paradigm` does not catch `paradigms`).
  // The walk covers `intro` and `overview` as well as the sections (§9), and
  // runs over the raw string walk so `sub` on a cardDeck card is seen (§13):
  // `prose()` drops `sub` because it is a NOTATION_KEY on most other cards.
  for (const j of JARGON) {
    for (const form of [j, `${j}s`]) {
      if (hasWord(LEARNER_TEXT, form)) die(`jargon on a learner surface: "${form}"`);
    }
  }

  // A PLAIN SUBSTRING TEST IN BOTH DIRECTIONS, deliberately NOT word-bounded:
  // the band's inherited `\bhonest` guard cannot see "dishonest" (a2.06).
  for (const b of BANNED_SUBSTRINGS) if (ALL_TEXT.toLowerCase().includes(b)) die(`authored copy contains "${b}"`);
  for (const c of FORBIDDEN_CLAIMS) {
    if (ALL_TEXT.toLowerCase().includes(c.toLowerCase())) {
      die(`claims something the app cannot deliver: "${c}". There is NO TIMER anywhere in the app: `
        + '`setInterval` is 0 across all four render files, so the groupDrill is gated, not timed.');
    }
  }
  if (/—/.test(ALL_TEXT)) die('an em dash in authored copy');
  if (/‿/.test(ALL_TEXT)) die('U+203F, which renders as a low underscore on a Pixel 6');

  // §7.2: A SPACED EXCLAMATION MARK IN A SCENE BUBBLE has made the French line
  // lose its last word on a Pixel 6 while the gloss still translated it. This
  // unit's lexicon is full of them (`Réessayez plus tard !`), so it is checked
  // rather than remembered.
  const scene = LESSON.sections.find((s) => s.type === 'scene');
  for (const s of strs(scene)) if (/\s!/.test(s)) die(`a spaced exclamation mark in the scene: "${s.slice(0, 60)}"`);

  /* ── THE FIELDS THAT DRAW NOTHING ──────────────────────────────────────── */

  for (const f of DEAD_LESSON_FIELDS) {
    if (f in (LESSON as unknown as Record<string, unknown>)) die(`the Lesson carries \`${f}\`, which draws nothing`);
  }
  const serialised = JSON.stringify(LESSON);
  for (const f of DEAD_AUDIO_FIELDS) {
    if (serialised.includes(`"${f}"`)) die(`\`${f}\` is authored somewhere; it validates, publishes and is read by no renderer`);
  }
  for (const sec of LESSON.sections) {
    if (sec.type !== 'groupDrill') continue;
    for (const g of (sec as { groups?: { items?: Record<string, unknown>[] }[] }).groups ?? []) {
      for (const it of g.items ?? []) if ('sub' in it) die(`${(sec as { id?: string }).id}: a groupDrill item carries \`sub\`, which draws nothing. Use \`note\`.`);
    }
  }
  for (const sec of LESSON.sections) {
    const sid = (sec as { id?: string }).id;
    if (sec.type === 'cardDeck' && 'itemIds' in sec) die(`${sid}: \`itemIds\` on a cardDeck draws nothing. Release through deckTranche.`);
    if (sec.type === 'commonErrors' && !(sec as { swipe?: boolean }).swipe) die(`${sid}: commonErrors without \`swipe\` draws a blank screen`);
    if (sec.type === 'practice' && (sec as { skill?: string }).skill !== 'speak') {
      die(`${sid}: a practice skill other than 'speak' renders a speaking drill anyway and is silently wrong`);
    }
    if (sec.type === 'listening' && (sec as { hideLines?: boolean }).hideLines !== true) {
      die(`${sid}: a listening section without hideLines prints fr AND en beside the play dot, which is a reading exercise`);
    }
    if (sec.type === 'table') die(`${sid}: \`table\` at layer core is refused by validateDensity and has never shipped. Use tapTable.`);
  }
  if (LESSON.sections.filter((s) => s.type === 'quiz').length !== 1) die('exactly one quiz section, or the second is silently never rendered');
  if (LESSON.sections.filter((s) => s.type === 'practice').length < 1) die('practice is MANDATORY (lesson-contract.test.ts:505 mirrors the publish gate)');

  // THE STEPPED trapDrill: rule > cards > audio > gated drill, with swipe, an
  // audio spec, a say, and NO size. The stacked shape hides the gate, the audio
  // and the sub-mission number.
  const trap = LESSON.sections.find((s) => s.type === 'trapDrill') as {
    id?: string; steps?: { kind: string; gate?: boolean }[]; rule?: unknown;
    swipe?: boolean; audio?: unknown; say?: unknown; size?: unknown;
  } | undefined;
  if (!trap) die('no trapDrill');
  if (!trap.rule) die('the trapDrill has no `rule`, so its opening step draws nothing');
  if (trap.swipe !== true) die('the trapDrill is not `swipe: true`');
  if (!trap.audio) die('the trapDrill has no audio spec');
  if (!trap.say) die('the trapDrill has no `say`');
  if ('size' in trap && trap.size !== undefined) die('`size` comes OFF a stepped trapDrill');
  const kinds = (trap.steps ?? []).map((s) => s.kind);
  if (kinds.join(',') !== 'rule,cards,audio,drill') die(`the trapDrill steps read ${kinds.join(',')}, expected rule,cards,audio,drill`);
  if (!(trap.steps ?? []).some((s) => s.kind === 'drill' && s.gate)) die('the trapDrill drill step is not gated');

  /* ══════════════════════════════════════════════════════════════════════
   *  THE REGIONAL POLICY (collation C3, PAUL-SETTLED)
   *
   *  1. The scored answer is ALWAYS the France-standard form.
   *  2. Quebec-naming is capped at ONE cardDeck card per unit, as colour.
   *  3. `un courriel` is NOT a Quebec aside and must not be filed as one: 82
   *     published rows carry it, ten as a headword, and the corpus has been
   *     serving it as ordinary French since A1. So courriel is the AGENT
   *     voice, drilled receptively, and `mail` is the FRIEND voice and the
   *     produced one.
   * ══════════════════════════════════════════════════════════════════════ */

  const quiz = LESSON.sections.find((s) => s.type === 'quiz') as { rounds?: { questions: Record<string, unknown>[] }[] } | undefined;
  const questions = quizQuestions(quiz as never) as unknown as Record<string, unknown>[];

  for (const q of questions) {
    // The KEY of an mcq/listenChoose is opts[correct]; for free text it is
    // `answer` plus every `accept` entry. None of them may be a Quebec-only
    // form.
    const keys: string[] = [];
    if (Array.isArray(q.opts) && typeof q.correct === 'number') keys.push(String((q.opts as string[])[q.correct]));
    if (q.answer) keys.push(String(q.answer));
    for (const a of (q.accept ?? []) as string[]) keys.push(a);
    for (const k of keys) {
      for (const qf of NEVER_A_SCORED_KEY) {
        if (fold(k) === fold(qf)) {
          die(`a scored key is a Quebec-only form: "${k}". C3 rule 1: the scored answer is always the France standard.`);
        }
      }
    }
  }
  for (const id of DICTEE_IDS) {
    const row = ALL_ROWS.find((r) => r.id === id);
    for (const qf of NEVER_A_SCORED_KEY) {
      if (row && fold(row.fr) === fold(qf)) die(`${id} is a dictée target and a Quebec-only form`);
    }
  }

  /* AT MOST ONE CARD NAMES QUEBEC DIVERGENCE (C3 rule 2), and it is the
   * regional tranche of the anglicism map.
   *
   * SCOPED TO THE FORMS, NOT TO THE WORD "QUEBEC", and the first version of
   * this guard had it the other way round and fired on four cards, three of
   * them legitimate. What C3 rule 2 caps is presenting a QUEBEC FORM as
   * colour. It does not cap saying the word Quebec, and it cannot, because:
   *
   *   - §5.2 rule 3 REQUIRES this unit to say that `un courriel` is ordinary
   *     in Quebec and is NOT a Quebec aside. That sentence is the Owns.
   *   - the unit's distinctive claim is that `un mail` in Montreal and
   *     `un courriel` to a Paris friend are marked in opposite directions,
   *     and the prompt says in terms to keep it.
   *
   * A guard that counts the place name instead of the form forbids the two
   * things this unit exists to teach. It is the fourth shape in
   * `ealch-guard-false-positives`: a check that fires on legitimate content
   * because it was scoped to a word rather than to the thing the rule is
   * about. */
  const quebecCards: string[] = [];
  for (const sec of LESSON.sections) {
    const sid = (sec as { id?: string }).id ?? sec.type;
    for (const card of ((sec as { cards?: Record<string, unknown>[] }).cards ?? [])) {
      const text = strs(card).join(' ');
      // `clavardage` / `balado` also catch the bare forms inside a pair list,
      // which is how the map's regional card carries them.
      const namesAForm = QUEBEC_ONLY_FORMS.some((f) => text.includes(f))
        || /\b(clavardage|balado|baladodiffusion|t[ée]l[ée]phone intelligent)\b/i.test(text);
      if (namesAForm) quebecCards.push(`${sid}[${strs(card)[0]?.slice(0, 20)}]`);
    }
  }
  if (quebecCards.length > 1) {
    die(`${quebecCards.length} cards name Quebec divergence and C3 rule 2 allows ONE: ${quebecCards.join(', ')}`);
  }
  if (quebecCards.length === 1 && !quebecCards[0].startsWith(QUEBEC_CARD_SECTION)) {
    die(`the one Quebec card is in ${quebecCards[0]}, and the corpus file declares it is in ${QUEBEC_CARD_SECTION}`);
  }

  /* ══════════════════════════════════════════════════════════════════════
   *  THE ANSWER FOLD, AND THE BAND RULE ADDED 2026-08-15
   * ══════════════════════════════════════════════════════════════════════ */

  for (const q of questions) {
    if (!q.why) die(`a quiz question has no \`why\`: ${String(q.q)}`);
    if (!q.ref) die(`a quiz question has no \`ref\`: ${String(q.q)}`);
    if (q.format === 'listenChoose' && !q.say) {
      die(`a listenChoose has no \`say\`, so the card speaks the answer: ${String(q.q)}`);
    }
    if (q.format === 'errorSpot' && !q.prompt) die(`an errorSpot has no \`prompt\`: ${String(q.q)}`);
    if (q.format === 'typeIn' || q.format === 'errorSpot') {
      const accept = (q.accept ?? []) as string[];
      if (!accept.some((a) => fold(a) === fold(String(q.answer)))) {
        die(`a ${String(q.format)} does not accept the answer it displays: "${String(q.answer)}"`);
      }
      if (String(q.answer).split(/\s+/).length > 9) die(`a ${String(q.format)} answer runs past one clause: "${String(q.answer)}"`);
    }
    // Every `ref` must resolve to a real section id, or the "see this again"
    // jump lands nowhere.
    const sectionIds = new Set(LESSON.sections.map((s) => (s as { id?: string }).id));
    if (q.ref && !sectionIds.has(String(q.ref))) die(`a quiz question refs "${String(q.ref)}", which is not a section id`);
  }

  // BAND RULE: fold the expected answer and the most plausible wrong answer. If
  // they collide the item tests nothing and must move to mcq or listenChoose.
  for (const [a, b] of NEAR_MISSES) {
    if (fold(a) === fold(b)) die(`a near-miss pair folds to one string and tests nothing: "${a}" / "${b}"`);
  }

  // AND THE PAIRS THAT DO COLLIDE, asserted the other way, so the day fold()
  // changes we find out rather than carrying a stale list. Each of these is
  // banned from every scored surface.
  for (const [a, b] of FOLD_COLLISIONS) {
    if (fold(a) !== fold(b)) {
      die(`"${a}" and "${b}" no longer fold to one string. fold() changed; re-check every scored item in this lesson.`);
    }
  }

  /* ── THE DICTÉE, THROUGH THE REAL dicteeMode ────────────────────────────── */

  for (const id of DICTEE_IDS) {
    const row = ALL_ROWS.find((r) => r.id === id);
    if (!row) die(`${id} is a dictée id and was not authored`);
    if (!toArray(row.drills).includes('dictation')) die(`${id} is a dictée id and does not carry the dictation drill`);
    const mode = dicteeMode(row.fr);
    if (mode !== DICTEE_MODE_EXPECTED) {
      die(`${id} "${row.fr}" resolves to ${mode} mode; this mission tests the chunk as a chunk and wants ${DICTEE_MODE_EXPECTED}`);
    }
    // §7.4 RULE 1: a dictée whose only difficulty is a hyphen cannot be got
    // right or wrong, because `Connectez-vous` and `connectez vous` are one
    // string to the check.
    if (row.fr.includes('-')) die(`${id} "${row.fr}" contains a hyphen, and no dictée may turn on one`);
  }

  /* ══════════════════════════════════════════════════════════════════════
   *  THE DRILL TRAP, ASSERTED IN BOTH DIRECTIONS
   *
   *  `fr.a2.internet.077-.111` are `voiceflash + review` with NO `flashcard`.
   *  A deckTranche release of any of them validates, publishes and serves no
   *  card. That is a1.08's failure and a2.31 met it again at eighteen rows.
   * ══════════════════════════════════════════════════════════════════════ */

  const released = new Set(DECK_TRANCHE.flat());
  for (const id of NOT_DECK_ABLE) {
    if (released.has(id)) die(`${id} carries no \`flashcard\` drill and is released by a deckTranche, so the release draws nothing`);
  }
  // And the other direction: each one must be REACHABLE, or it is an import
  // nothing can serve.
  const namedByASection = new Set(strs(LESSON.sections).filter((s) => s.startsWith('fr.')));
  for (const id of NOT_DECK_ABLE) {
    if (!namedByASection.has(id)) die(`${id} is imported, is not deck-able, and is named by no section. It is unreachable.`);
  }

  /* ── THE TWO DEFECT ROWS ARE NAMED BY NOTHING ──────────────────────────── */

  for (const id of DEFECT_ROWS) {
    if (ITEM_IDS.includes(id)) die(`${id} is metalinguistic commentary stored as a corpus row and this lesson references it`);
    if (IMPORT_IDS.includes(id)) die(`${id} is on the import list and it is a defect row, flagged not repaired`);
    if (released.has(id)) die(`${id} is released by a deckTranche`);
  }
  // SCOPED TO THIS LESSON, never to the bundle: no `internet` row this lesson
  // names may have an `fr` that is a sentence about French. Checked against the
  // authored rows offline and against the imports in the DB block below.
  for (const r of ALL_ROWS) {
    for (const rx of SENTENCE_ABOUT_FRENCH) {
      if (rx.test(r.fr)) die(`${r.id} is a sentence ABOUT French rather than a sentence OF French: "${r.fr}"`);
    }
  }

  /* ── THE LISTENING LINES STAND ALONE (§3.2, the a2.35 hand-off) ─────────── */

  const FRAMING = /\b(as you saw|earlier|the last card|mission \d|in act \d|above|previously|this lesson)\b/i;
  for (const sec of LESSON.sections) {
    if (sec.type !== 'listening') continue;
    for (const l of (sec as { lines: { fr: string; en: string }[] }).lines) {
      if (FRAMING.test(l.fr) || FRAMING.test(l.en)) {
        die(`${(sec as { id?: string }).id}: a listening line references this lesson's framing, so a2.35 cannot lift it: "${l.fr}"`);
      }
    }
    // And no question reprints its own line, or hideLines buys nothing.
    for (const q of (sec as { questions: { q: string }[] }).questions) {
      for (const l of (sec as { lines: { fr: string }[] }).lines) {
        if (fold(q.q).includes(fold(l.fr))) die(`${(sec as { id?: string }).id}: a question reprints its line, so hideLines buys nothing`);
      }
    }
  }

  /* ── THE EXAM POLICY, VERBATIM AND NOT NEGOTIABLE ──────────────────────── */

  if (EXAM_POLICY.scenarioExam || serialised.includes('"exam"')) {
    die('`Scenario.exam` is authored. It is read by no code anywhere in ealch-v2/src and the policy is zero exam rows.');
  }

  /* ── THE RESPELLINGS, THROUGH THE REAL hasPlainNasalFor ─────────────────── */

  const flagged = ALL_ROWS.filter((r) => r.respell && hasPlainNasalFor(r.fr, r.respell));
  if (flagged.length) {
    die(`${flagged.length} respelling(s) close a nasal with a plain n/m: ${flagged.map((r) => `${r.id} ${r.respell}`).join(', ')}`);
  }

  /* THE CHECKER IS BLIND TO A NASAL FOLLOWED BY A CONSONANT INSIDE A TOKEN
   * (Corrections §6 as amended by §14.1), and this unit's lexicon is full of
   * them: `un lien`, `une connexion`, `un identifiant`, `un abonnement`,
   * `un onglet`. ASSERTED BY NAME so the day the checker improves this list
   * goes stale and we find out rather than carrying it dead.
   *
   *   `plain`  every superscript broken back to n. The unrepaired row.
   *   `half`   the value you get by repairing ONLY WHAT THE CHECKER REPORTS.
   *   `to`     the authored value.
   *
   * `blind` says the checker cannot see any of the row's nasals; `mixed` says
   * it sees some and not others. On a mixed row `half !== to`, and only the
   * by-name check tells a clean report apart from a correct value.
   *
   * NOT `as const`: with literal types the admin typecheck proves
   * `half !== to` can never be false and rejects the comparison as
   * unintentional, which would leave the assertion looking like a guard and
   * being one only by accident. */
  const NASAL_TABLE = [
    // BLIND, AND FOR A REASON NOBODY HAS WRITTEN DOWN. The flagged token is
    // `option`, which has ONE n. The doubled-n branch is tested against the
    // WHOLE `fr` STRING, and `Sélectionnez` has `nn` several words away, so a
    // nasal belonging to a different word clears this one.
    { id: E(191), kind: 'blind', plain: 'say-lek-syo-NAY ü-nop-SYON', half: 'say-lek-syo-NAY ü-nop-SYON', to: 'say-lek-syo-NAY ü-nop-SYOHⁿ' },
    // MIXED, and it takes BOTH holes at once. `UHN` matches the digraph rule
    // at :210, which returns early and never consults the French. `SYON` does
    // not match it, reaches the lone-vowel branch, and is then cleared by the
    // `nn` in `connexion`. So repairing what the checker reports leaves SYON
    // plain and the report comes back clean.
    { id: E(195), kind: 'mixed', plain: 'poor uhn pro-BLEM duh ko-nek-SYON ta-PAY UHN', half: 'poor uhⁿ pro-BLEM duh ko-nek-SYON ta-PAY UHⁿ', to: 'poor uhⁿ pro-BLEM duh ko-nek-SYOHⁿ ta-PAY UHⁿ' },
    // BLIND, the documented word-internal shape: a nasal followed by a
    // CONSONANT inside the token. `KOHNT` never matches either branch, because
    // the N has a T after it and both patterns require the N to end the token.
    { id: E(210), kind: 'blind', plain: 'zhuh VEH vay-ree-FYAY votr KOHNT nuh kee-TAY PAH', half: 'zhuh VEH vay-ree-FYAY votr KOHNT nuh kee-TAY PAH', to: 'zhuh VEH vay-ree-FYAY votr KOHⁿT nuh kee-TAY PAH' },
  ] as { id: string; kind: 'blind' | 'mixed'; plain: string; half: string; to: string }[];
  for (const { id, kind, plain, half, to } of NASAL_TABLE) {
    const row = ALL_ROWS.find((r) => r.id === id);
    if (row?.respell !== to) die(`${id} respelling drifted from the by-name table: "${row?.respell}"`);
    const seesPlain = hasPlainNasalFor(row.fr, plain);
    if (kind === 'blind' && seesPlain) die(`${id} is filed blind and the checker CAN see its unrepaired value`);
    if (kind === 'mixed' && !seesPlain) die(`${id} is filed mixed and the checker cannot see its unrepaired value either`);
    if (hasPlainNasalFor(row.fr, half)) die(`${id}: the checker still flags the half-repair, so it is not the trap this entry describes`);
    if (hasPlainNasalFor(row.fr, to)) die(`${id}: the checker flags the AUTHORED value`);
    if (kind === 'mixed' && half === to) die(`${id} is filed mixed and its half-repair equals its final value`);
  }

  console.log(`\n  offline guards passed: ${ALL_ROWS.length} rows, ${LESSON.sections.length} sections, `
    + `${(ratio * 100).toFixed(1)}% in the other party's voice, ${IMPORT_IDS.length} imports`);

  /* ── DATABASE GUARDS ────────────────────────────────────────────────────── */

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  try {
    const count = async (theme: string, level?: string) => Number((await c.query<{ n: string }>(
      `select count(*)::text as n from content_items where theme=$1 and status='published'${level ? ' and level::text=$2' : ''}`,
      level ? [theme, level] : [theme])).rows[0].n);

    const beforeTheme = await count(THEME);
    const beforeA2 = await count(THEME, 'a2');
    console.log(`  ${THEME} before: ${beforeTheme} published (${beforeA2} at a2)`);

    // THE ID BLOCK. A highest-id check cannot see a concurrent lesson landing
    // BELOW the top of the range — a1.19/a1.20 and a1.14/a1.15 both collided
    // that way. Check the WHOLE BLOCK, not the maximum.
    const taken = await c.query<{ id: string }>('select id from content_items where id = any($1::text[])', [ids]);
    if (taken.rowCount && !REAPPLY) {
      die(`${taken.rowCount} of this build's ids already exist: ${taken.rows.map((r) => r.id).slice(0, 8).join(', ')}. `
        + 'Another lesson landed in the block. Re-measure and move, or pass --reapply if this is your own re-run.');
    }

    // Intra-theme duplicate `fr`. The flashcard hub keys on `fr` PER THEME and
    // serves two rows sharing one as a single card, twice. Cross-theme
    // duplication is settled legal precedent (collation §7.5); this is the rule
    // that is actually enforced.
    const clash = await c.query<{ id: string; fr: string }>(
      `select id, fr from content_items where theme=$1 and status='published' and fr = any($2::text[])`,
      [THEME, ALL_ROWS.map((r) => r.fr)]);
    if (clash.rowCount && !REAPPLY) {
      die(`${clash.rowCount} authored fr string(s) already exist in ${THEME}: ${clash.rows.map((r) => `${r.id} "${r.fr}"`).slice(0, 5).join(', ')}`);
    }

    // EVERY IMPORT MUST EXIST AND BE PUBLISHED. Collation §1.3: a published row
    // is REACHABLE and must be imported by itemId, never re-authored.
    const found = await c.query<{ id: string; status: string; fr: string; drills: unknown }>(
      'select id, status, fr, drills from content_items where id = any($1::text[])', [IMPORT_IDS]);
    const missing = IMPORT_IDS.filter((i) => !found.rows.some((r) => r.id === i));
    if (missing.length) die(`${missing.length} imported id(s) are not in Postgres: ${missing.join(', ')}`);
    const unpub = found.rows.filter((r) => r.status !== 'published');
    if (unpub.length) die(`${unpub.length} imported id(s) are not published: ${unpub.map((r) => r.id).join(', ')}`);

    // NO IMPORTED ROW IS A SENTENCE ABOUT FRENCH. Scoped to this lesson.
    for (const r of found.rows) {
      for (const rx of SENTENCE_ABOUT_FRENCH) {
        if (rx.test(r.fr)) die(`${r.id} is imported and its fr is a sentence ABOUT French: "${r.fr}"`);
      }
    }

    // DOCTRINE §E, CHECKED AGAINST POSTGRES AND NOT THE SEED: every item a
    // deckTranche releases must carry `flashcard`, or the release is a line
    // that looks like it works and does nothing.
    const byId = new Map(found.rows.map((r) => [r.id, toArray(r.drills)]));
    for (const r of ALL_ROWS) byId.set(r.id, toArray(r.drills));
    const noDeck = [...released].filter((id) => !(byId.get(id) ?? []).includes('flashcard'));
    if (noDeck.length) {
      die(`${noDeck.length} released id(s) carry no \`flashcard\` drill, so no deck can serve them: ${noDeck.slice(0, 12).join(', ')}`);
    }

    // `practice` with skill 'speak' needs `voiceflash` ON EVERY ITEM IT NAMES.
    // `technologie-quotidienne` has ZERO voiceflash rows at any level, so a
    // section naming one of its rows renders a mic that scores nothing.
    const practice = LESSON.sections.find((s) => s.type === 'practice') as { itemIds: string[] } | undefined;
    for (const id of practice?.itemIds ?? []) {
      if (!(byId.get(id) ?? []).includes('voiceflash')) die(`${id} is named by the practice section and carries no voiceflash drill`);
      if (id.includes('technologie-quotidienne')) die(`${id} is in a theme with zero voiceflash rows at any level`);
    }

    // Every groupDrill itemId resolves and is reachable.
    for (const sec of LESSON.sections) {
      if (sec.type !== 'groupDrill') continue;
      for (const g of (sec as { groups?: { items?: { itemId?: string }[] }[] }).groups ?? []) {
        for (const it of g.items ?? []) {
          if (it.itemId && !byId.has(it.itemId)) die(`${it.itemId} is named by a groupDrill item and is in neither the imports nor the authored rows`);
        }
      }
    }

    // a2.07's SIX FROZEN ROWS, verified string by string. The list is frozen at
    // publication and seven other units depend on it. IF THIS BLOCK IS NOT
    // THERE, a2.07 has not landed: cite it by unit id, author zero repair rows,
    // and say so in the report.
    const rb = await c.query<{ id: string; fr: string }>('select id, fr from content_items where id = any($1::text[])', [[...REPAIR_IDS]]);
    if (rb.rowCount !== 6) die(`a2.07's repair block reads back ${rb.rowCount} rows, expected 6. a2.07 may not be applied.`);
    REPAIR_IDS.forEach((id, i) => {
      const row = rb.rows.find((r) => r.id === id);
      if (row?.fr !== REPAIR_FR[i]) die(`a2.07's frozen row ${id} reads "${row?.fr}", expected "${REPAIR_FR[i]}". The block moved.`);
    });

    // a2.29's ladder rows.
    const lb = await c.query<{ id: string }>("select id from content_items where id = any($1::text[]) and status='published'", [[...LADDER_IDS]]);
    if (lb.rowCount !== LADDER_IDS.length) die(`a2.29's ladder reads back ${lb.rowCount} of ${LADDER_IDS.length} rows. a2.29 may not be applied.`);

    // Every dictée id carries the dictation drill IN POSTGRES, not the seed.
    for (const id of DICTEE_IDS) {
      if (!(byId.get(id) ?? []).includes('dictation')) die(`${id} is a dictée id and Postgres says it carries no dictation drill`);
    }

    // THE UNIT ROW, READ FROM POSTGRES RATHER THAN ASSUMED (Corrections §1).
    //
    // AND THE THEME RE-MAP GUARD, WHICH IS THE ONE THAT MATTERS HERE. The
    // prompt says this build changes `themes` from the phantom `technologie`
    // to `internet`. It is ALREADY `internet`, in the spine file, in this row
    // and in seed.json, because a2.07's build did it under blocking step 2. If
    // the array has moved back, something re-ran the spine script and this is
    // where it gets caught.
    const unitRow = await c.query<{ body: Record<string, unknown> }>(
      "select body from content_units where kind='curriculum_unit' and body->>'id'=$1", [UNIT.id]);
    if (unitRow.rowCount !== 1) die(`${UNIT.id} is not in content_units`);
    const unit = unitRow.rows[0].body as { id: string; canDo?: string; themes?: string[]; lessonIds?: string[] };
    if (unit.canDo !== UNIT.canDo) die(`the unit row canDo reads "${unit.canDo}" and the spine says "${UNIT.canDo}"`);
    if (!(unit.themes ?? []).includes(THEME)) {
      die(`the unit row reads themes=${JSON.stringify(unit.themes)} and this build writes into '${THEME}'. `
        + 'The re-map landed on 2026-08-15; if it has reverted, the spine script was re-run and that is a separate fix.');
    }
    if ((unit.themes ?? []).includes('technologie')) {
      die("the unit row still carries the phantom 'technologie', which holds 0 published rows and is a DOMAIN, not a theme");
    }

    console.log(`  database guards passed: ${IMPORT_IDS.length} imports published, a2.07 and a2.29 verified, `
      + `themes reads ['${THEME}'] and needed no change`);

    if (DRY_RUN) { console.log('\n  DRY RUN: every guard passed, nothing written.\n'); return; }

    /* ── THE WRITE ────────────────────────────────────────────────────────── */

    await c.query('begin');
    try {
      for (const r of ALL_ROWS) {
        await c.query(
          `insert into content_items (id, kind, level, theme, fr, en, ipa, respell, gender, notes, tags, drills, version, status)
           values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,'published')
           on conflict (id) do update set kind=excluded.kind, level=excluded.level, theme=excluded.theme,
             fr=excluded.fr, en=excluded.en, ipa=excluded.ipa, respell=excluded.respell,
             gender=excluded.gender, notes=excluded.notes, tags=excluded.tags, drills=excluded.drills,
             version=excluded.version, status='published'`,
          [r.id, r.kind, r.level, r.theme, r.fr, r.en, r.ipa ?? null, r.respell ?? null,
            (r as { gender?: string }).gender ?? null, r.notes ?? null, r.tags ?? [], r.drills ?? [], r.version ?? 1]);
      }
      await c.query(
        `insert into content_units (slug, title, kind, level, locale, status, body, version, generated_by)
         values ($1,$2,'lesson',$3,'fr','published',$4::jsonb,1,'human')
         on conflict (slug) do update set title=excluded.title, level=excluded.level,
           body=excluded.body, status='published', updated_at=now()`,
        [LESSON.id, LESSON.title, LESSON.level, JSON.stringify(LESSON)]);
      const nextUnit = { ...unit, lessonIds: [...new Set([...(unit.lessonIds ?? []), LESSON.id])] };
      const uu = await c.query(
        `update content_units set body=$1::jsonb, updated_at=now()
          where kind='curriculum_unit' and body->>'id'=$2`, [JSON.stringify(nextUnit), UNIT.id]);
      if (uu.rowCount !== 1) throw new Error(`the unit update touched ${uu.rowCount} rows, expected 1`);
      await c.query('commit');
    } catch (e) {
      await c.query('rollback');
      die(`rolled back: ${(e as Error).message}`);
    }

    // THE ROW COUNT AFTER, NOT THE MAXIMUM ID (Corrections §10).
    const afterTheme = await count(THEME);
    const afterA2 = await count(THEME, 'a2');
    console.log(`\n  ${THEME}: ${beforeTheme} -> ${afterTheme} (+${afterTheme - beforeTheme}, authored ${ALL_ROWS.length})`);
    console.log(`  ${THEME} a2 slice: ${beforeA2} -> ${afterA2} (+${afterA2 - beforeA2})`);
    if (afterTheme - beforeTheme !== ALL_ROWS.length && !REAPPLY) {
      die(`the theme moved by ${afterTheme - beforeTheme} and this build authored ${ALL_ROWS.length}. Something else landed during the apply.`);
    }
    console.log(`  ${LESSON.id} written, and ${UNIT.id} now claims it`);
    console.log('\n  NEXT: pnpm tsx scripts/merge-technologie-into-seed.ts\n');
  } finally {
    c.release();
    await pool.end();
  }
}

main();
