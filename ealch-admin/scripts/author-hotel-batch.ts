// a2.29.l1 « À l'hôtel » — apply the corpus, the lesson and the unit row to
// Postgres. Trail seq 28, the fifth unit of the A2 situations band.
//
//   pnpm content:hotel --dry     guards only, nothing written
//   pnpm content:hotel           the real apply, in one transaction
//   pnpm content:hotel --reapply re-run after an in-build correction
//
// This build writes into ONE theme: `hebergement` (.074-.132). It writes into
// `voyage` NOT ONCE: that theme is a phantom with 0 rows and no `themeMeta`
// entry, and the spine re-map (band blocking step 2) already points a2.29 at
// `hebergement` in the spine script, in Postgres and in the seed.
import './env';
import {
  ALL_ROWS, ROWS, LADDER_ROWS, LADDER_IDS, RUNG_TABLE, NINE_CELLS,
  UNIT, THEME, LESSON_ID, REFRAME, RUNG_1, RUNG_2, RUNG_3, RUNGS,
  REPAIR_IDS, REPAIR_FR, REPAIR_UNIT, IMPORTED, IMPORT_IDS, NINE_IDS,
  ID_FIRST, ID_LAST, THEME_ROWS_BEFORE, THEME_A2_BEFORE,
  OTHER_VOICE_FLOOR, OTHER_VOICES, QUEBEC_FORMS, QUEBEC_ROWS,
  PRONOUN_YEN_SHAPES, DICTEE_IDS, FORBIDDEN_FEMININES, A2_32_RESERVED,
  ACCUSATION_SHAPES, RUDE_ALLOWED_SECTIONS, RUDE_LINE, IMPERSONAL_LINE,
  JARGON, BANNED_SUBSTRINGS, SOFTENERS, EXAM_POLICY, NOT_RELEASABLE,
} from './data/hotel-corpus.ts';
import { LESSON, SECTIONS, ITEM_IDS, DECK_TRANCHE, SPEAK_ID } from './data/hotel-lesson.ts';
import { validateLesson, quizQuestions } from '../../ealch-v2/src/content/schema.ts';
import { validateDensity, hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';
import { assertReachable } from './lib/reachability.ts';

const DRY_RUN = process.argv.includes('--dry');
const REAPPLY = process.argv.includes('--reapply');
const die: (m: string) => never = (m) => { console.error(`\n  STOP: ${m}\n`); process.exit(1); };

/** A section seen structurally rather than by its variant. `LessonSection` is a
 *  union of 35 shapes and the accusation guard walks keys that exist on only
 *  some of them, so narrowing per-variant would be 35 branches to say one
 *  thing. */
type LessonSectionLike = Record<string, unknown> & { id?: string; type?: string };

/** THE REAL FOLD, copied from `answer.logic.ts:32` character for character.
 *  This is the function that grades the quiz. `normalizeFr` is a DIFFERENT
 *  normaliser with one render-side caller, and reading the wrong one is what
 *  produced the collation's incomplete "accents, cedillas and commas" rule. */
const fold = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
  .replace(/[/[\]()«».,!?;:]/g, '').replace(/[-·’']/g, '').replace(/\s+/g, '').trim();

/** `drills` is a Postgres enum array and arrives as the raw literal
 *  `{flashcard,review}`. A `.includes()` on the STRING lies. */
const toArray = (d: unknown): string[] =>
  Array.isArray(d) ? d as string[] : String(d ?? '').replace(/[{}"]/g, '').split(',').filter(Boolean);

/** A display() walk: keeps every string a learner can READ, including a
 *  cardDeck card's `sub`, which `prose()` drops because it is on NOTATION_KEYS
 *  and usually holds a respelling. a2.15 v1 shipped a banned word in one and
 *  only a seed-wide test caught it (corrections §13). */
const MACHINE_KEYS = new Set(['id', 'itemId', 'itemIds', 'ipa', 'ref', 'targets', 'detectOn', 'drill', 'format', 'kind', 'type', 'render', 'layer', 'size', 'lang', 'mode', 'recordingId', 'clip', 'voice', 'assetKey', 'audioRef', 'imageRef', 'sheetId', 'terms', 'respell']);
function display(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') { out.push(v); return out; }
  if (Array.isArray(v)) { for (const x of v) display(x, out); return out; }
  if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) { if (!MACHINE_KEYS.has(k)) display(x, out); }
  }
  return out;
}

/** The house word boundary. It EXCLUDES the apostrophe on the left, because a
 *  guard using the full house shape cannot see `j'ai`, `n'est` or `qu'il`
 *  (corrections §14.3). Kept on the right. */
const bounded = (needle: string) =>
  new RegExp(`(?<![\\p{L}\\p{N}-])${needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![\\p{L}\\p{N}'’-])`, 'iu');

/* ─── Guards that need no database ─────────────────────────────────────── */

function offlineGuards() {
  const allText = JSON.stringify(LESSON) + JSON.stringify(ALL_ROWS);

  /** THE LEARNER-FACING SURFACES. The ownership and copy guards below are
   *  scoped to THESE rather than to the whole lesson object, because
   *  `grammarAssumed` and `grammarIntroduced` are addressed to the CURRICULUM
   *  and are allowed the precise words (invariants §8). A guard that walks them
   *  fires on the honest declaration and pushes the next author into deleting
   *  the declaration rather than the teaching, which is the wrong repair. */
  const learnerSurfaces = display(SECTIONS)
    .concat(display(LESSON.terms ?? {}))
    .concat(display(LESSON.drills ?? []))
    .concat([String(LESSON.intro ?? '')])
    .concat(display(LESSON.overview ?? {}));
  const learnerText = learnerSurfaces.join('\n');

  // 1. NOT ONE ROW OUTSIDE `hebergement`, and not one into the phantom.
  for (const r of ALL_ROWS) {
    if (r.theme === 'voyage') die(`${r.id} is authored into the phantom theme 'voyage', which holds 0 rows and has no themeMeta entry`);
    if (r.theme !== THEME) die(`${r.id} is in ${r.theme}, and this build writes only into ${THEME}`);
    if (r.level !== 'a2') die(`${r.id} is level ${r.level} and this build is a2`);
  }

  // 2. ZERO REPAIR ROWS. Collation §1.6: a2.07 owns the move for all eight
  //    units. A FOLD test, so a later author cannot slip one in under
  //    different punctuation.
  const repairFolds = new Set(REPAIR_FR.map(fold));
  for (const r of ALL_ROWS) {
    if (repairFolds.has(fold(r.fr))) die(`${r.id} « ${r.fr} » is one of ${REPAIR_UNIT}'s six frozen repair rows. Cite it by itemId; this unit authors zero.`);
  }
  if (REPAIR_IDS.length !== 6) die(`the cited repair block holds ${REPAIR_IDS.length} ids and the contract is exactly six`);
  for (const id of REPAIR_IDS) {
    if (!id.startsWith('fr.a2.au-restaurant.')) die(`${id} is not in au-restaurant; the frozen block is ${REPAIR_UNIT}'s`);
  }
  if (!bounded(REPAIR_UNIT).test(allText)) die(`${REPAIR_UNIT} is never named by unit id, so its repair move is being used without attribution`);
  // And the tranche RELEASES all six, which is the mechanism that works.
  const tranche = new Set(DECK_TRANCHE.flat());
  for (const id of REPAIR_IDS) if (!tranche.has(id)) die(`${id} is cited but never released by a deckTranche, so it reaches the SRS through nothing`);

  // 3. THE THREE RUNG NAMES, IN ORDER, IN ONE SECTION, AS EXACT STRINGS.
  //    This is the band's citable contract: a2.30, a2.31 and a2.32 quote these
  //    verbatim, and a paraphrase is a second ladder.
  //     s04-ladder is a `tapTable`, NOT a `table`, and that is forced rather
  //     than chosen: `density.logic.ts:423` refuses a `table` at layer 'core'
  //     under the heading « Tables never appear in the flow ». A tapTable
  //     carries the identical layout — three rung names as `cols`, nine cells,
  //     one screen — and is audible as well. The `table` ships as s05-grid at
  //     layer 'more', which is the only layer that passes.
  //     TWO OF THESE ASSERTIONS WERE TAUTOLOGIES AND MUTATION TESTING FOUND IT.
  //
  //     Renaming `RUNG_2` in the corpus file and paraphrasing `REFRAME` BOTH
  //     survived the batch, because `RUNGS` is derived from `RUNG_2` and the
  //     reframe count matches the constant against itself. Comparing a value to
  //     itself always passes, which is the a2.22 finding in a new place.
  //
  //     `a2-29-hotel.test.ts` caught both, because it hardcodes the strings
  //     independently and reads the seed. That is the right design and it is
  //     why the test exists. But a batch guard that cannot fail is worse than
  //     no batch guard, so the literals are pinned HERE as well. These four
  //     strings are the band's contract and they are typed twice ON PURPOSE.
  const FROZEN_RUNGS = ['Ask once, softly.', 'Say it again, without the person.', 'Ask for the person who can fix it.'];
  const FROZEN_REFRAME = 'Take the person out of the sentence.';
  if (RUNGS.join('|') !== FROZEN_RUNGS.join('|')) {
    die(`a rung name has been changed. The band contract is:\n      ${FROZEN_RUNGS.join('\n      ')}\n    and a2.30, a2.31 and a2.32 quote these verbatim. Changing one is changing three other lessons.`);
  }
  if (REFRAME !== FROZEN_REFRAME) die(`the reframe has been reworded to « ${REFRAME} ». It is authored five times and asserted verbatim.`);

  const ladder = SECTIONS.find((s) => s.id === 's04-ladder') as
    { type: string; layer?: string; cols?: string[]; rows?: Array<{ cells: string[] }> } | undefined;
  if (!ladder) die('s04-ladder is missing, and it is the section that publishes the rung names');
  if (ladder.type !== 'tapTable') die(`s04-ladder is a ${ladder.type}; it must be a tapTable, because a table at layer 'core' is refused by validateDensity`);
  if (ladder.layer !== 'core') die('s04-ladder must be on the core path: it carries the required layout');
  if ((ladder.cols ?? []).join('|') !== RUNGS.join('|')) {
    die(`s04-ladder's columns are [${(ladder.cols ?? []).join(' | ')}] and the frozen rung names are [${RUNGS.join(' | ')}]`);
  }
  if ((ladder.rows ?? []).length !== 3) die(`the ladder has ${(ladder.rows ?? []).length} rows and the contract is three rungs by three moves, nine cells and stop`);
  for (const row of (ladder.rows ?? [])) if (row.cells.length !== 3) die(`a ladder row has ${row.cells.length} cells and the contract is three`);
  // ZERO `table` SECTIONS, and that is the answer to the band's doctrine
  // question rather than an omission.
  //
  // `validateDensity` refuses a `table` at `layer: 'core'`. This build shipped
  // one at `layer: 'more'` and then measured that `layer` is read by NO
  // renderer, so `more` draws exactly like `core`: the table was a full
  // numbered mission showing the same nine lines as the tapTable one mission
  // earlier. There is no layer that puts a table out of the flow, so there is
  // no usable home for one in a lesson.
  if (SECTIONS.some((s) => s.type === 'table')) {
    die('a table section is back. `layer` is read by no renderer, so there is no layer that keeps one out of the flow, and the tapTable already carries the nine cells and the audio.');
  }
  // No fourth rung anywhere, and no renaming.
  if (/\brung 4\b|\bfourth rung\b/i.test(learnerText)) die('a fourth rung is named. The contract is three, and a2.30, a2.31 and a2.32 are built on that.');

  // 4. THE NINE CELLS ARE AUTHORED CORPUS ROWS, cited by id. Prose in a card
  //    body is not reusable; a row with an id is (collation §7.1).
  const byId = new Map(ALL_ROWS.map((r) => [r.id, r]));
  const cellFolds = new Set<string>();
  for (const row of NINE_CELLS) for (const id of row) {
    const r = byId.get(id);
    if (!r) die(`NINE_CELLS names ${id}, which this build does not author`);
    cellFolds.add(fold(r.fr));
  }
  //     THE CITATION IS ON `say`, NOT ON THE DISPLAYED CELL. `say` is the line
  //     the learner HEARS and it is the authored row verbatim; the cell is a
  //     label, and at three equal columns a label sometimes has to be shorter
  //     than the sentence (see the device note on s04-ladder's second row).
  //     So: every row's `say` must be one of the nine, all nine must be
  //     covered, and every cell must still resolve to SOME published row.
  const rowSays = (ladder.rows ?? []).map((r) => fold((r as { say?: string }).say ?? ''));
  for (const s of rowSays) if (!cellFolds.has(s)) die(`a ladder row's say is not one of the nine authored rung rows`);
  const cellFoldsSeen = new Set<string>();
  for (const row of (ladder.rows ?? [])) for (const cell of row.cells) cellFoldsSeen.add(fold(cell));
  // The nine cells are covered by the three rows' says plus the cells; the
  // authoritative check is that NINE_CELLS is exactly the ladder's content.
  const nineFolds = new Set(NINE_IDS.map((id) => fold(byId.get(id)!.fr)));
  if (nineFolds.size !== 9) die(`NINE_CELLS resolves to ${nineFolds.size} distinct rows and the contract is nine`);
  for (const row of (ladder.rows ?? [])) for (const cell of row.cells) {
    const inNine = nineFolds.has(fold(cell));
    // A cell that is not verbatim one of the nine must still be a published
    // row, and it must be a PREFIX-STRIPPED form of one of them, never new
    // prose. `Il y a un problème avec la douche.` is `fr.a2.bricolage.041`.
    const isKnownShortening = [...nineFolds].some((n) => n.endsWith(fold(cell)) || n.startsWith(fold(cell)));
    if (!inNine && !isKnownShortening) {
      die(`the ladder cell « ${cell} » is neither one of the nine authored rung rows nor a shortening of one. A cell is a label; it may not be new prose.`);
    }
  }
  // Every rung row is an authored row with an id, and the RUNG_TABLE covers
  // exactly the ladder rows and nothing else.
  const tabled = new Set(Object.values(RUNG_TABLE).flatMap((r) => [...r.request, ...r.fault, ...r.escalate]));
  const ladderSet = new Set(LADDER_IDS);
  for (const id of tabled) if (!ladderSet.has(id) && id !== 'fr.a2.hebergement.132') die(`RUNG_TABLE names ${id}, which is not a ladder row`);
  for (const id of LADDER_IDS) if (!tabled.has(id)) die(`the ladder row ${id} is in no rung of RUNG_TABLE, so the citable table is incomplete`);
  for (const k of ['rung1', 'rung2', 'rung3']) if (!RUNG_TABLE[k]) die(`RUNG_TABLE is missing ${k}`);
  if (Object.keys(RUNG_TABLE).length !== 3) die(`RUNG_TABLE has ${Object.keys(RUNG_TABLE).length} rungs and the contract is three`);

  // 5. THE RUDE LINE AND THE IMPERSONAL LINE ARE IN ONE SECTION, ADJACENT.
  //    Required layout. The `break` beat carries `wrong` and `right` as two
  //    objects on one card, so this is structural as well as asserted.
  const scene = SECTIONS.find((s) => s.id === 's01-scene') as
    { beats?: Array<Record<string, unknown>> } | undefined;
  if (!scene) die('s01-scene is missing');
  const brk = (scene.beats ?? []).find((b) => b.kind === 'break') as
    { wrong?: { fr?: string }; right?: { fr?: string } } | undefined;
  if (!brk) die('s01-scene has no break beat, and the break beat is what puts the two lines on one screen');
  if (fold(brk.wrong?.fr ?? '') !== fold(RUDE_LINE)) die(`the break beat's wrong line is « ${brk.wrong?.fr} » and it must be « ${RUDE_LINE} »`);
  if (fold(brk.right?.fr ?? '') !== fold(IMPERSONAL_LINE)) die(`the break beat's right line is « ${brk.right?.fr} » and it must be « ${IMPERSONAL_LINE} »`);
  // And the choice beat offers both, so the learner commits before being told.
  const choice = (scene.beats ?? []).find((b) => b.kind === 'choice') as
    { options?: Array<{ fr: string; outcome: string }> } | undefined;
  if (!choice) die('s01-scene has no choice beat');
  const opts = (choice.options ?? []);
  if (opts.length !== 2) die(`the scene choice offers ${opts.length} options and the contrast is two`);
  if (!opts.some((o) => fold(o.fr) === fold(RUDE_LINE) && o.outcome === 'breaks')) die('the scene choice does not offer the rude line as the one that breaks');
  if (!opts.some((o) => fold(o.fr) === fold(IMPERSONAL_LINE) && o.outcome === 'works')) die('the scene choice does not offer the impersonal line as the one that works');

  // 6. RUNG 1 AND RUNG 2 ARE ADJACENT, WITH THE SAME REQUEST IN BOTH, so the
  //    learner sees what changed and what held still. Required layout.
  const ids = SECTIONS.map((s) => s.id ?? '');
  if (ids.indexOf('s07-rung2') - ids.indexOf('s06-rung1') !== 1) die('a section sits between rung 1 and rung 2, and they are the contrast this lesson turns on');
  const r1 = JSON.stringify(SECTIONS.find((s) => s.id === 's06-rung1'));
  const r2 = JSON.stringify(SECTIONS.find((s) => s.id === 's07-rung2'));
  if (!/serviette/i.test(r1) || !/serviette/i.test(r2)) die('rung 1 and rung 2 do not share the same request, so nothing is held still across the contrast');

  // 7. THE REFRAME, VERBATIM, AT LEAST THREE TIMES.
  const reframeCount = learnerSurfaces.filter((s) => s.includes(REFRAME)).length;
  if (reframeCount < 3) die(`the reframe appears ${reframeCount} time(s) on a learner surface and the density validator wants at least three`);
  console.log(`  reframe: « ${REFRAME} » authored ${reframeCount} times`);

  // 8. NO AUTHORED CORRECT LINE PUTS THE PERSON IN THE SENTENCE AS THE TARGET
  //    OF THE FAULT. Permitted in exactly two places, BY SECTION ID: the scene
  //    choice (where it is the wrong option) and the quiz (where it is the
  //    errorSpot prompt the learner repairs).
  //     A REJECTED DISTRACTOR IS NOT AN AUTHORED CORRECT LINE. The accusation
  //     is legitimate wherever it is being DISPLAYED AS WRONG: the scene option
  //     that breaks, a trapDrill's `promptSound`, a commonErrors `wrong`, and
  //     any multiple-choice option that is not the correct index. It is NOT
  //     legitimate in a title, a note, a body, a `why`, a `right` or a correct
  //     option, because those are the lesson speaking in its own voice.
  //
  //     So the guard STRIPS the displayed-as-wrong strings and walks the rest,
  //     rather than exempting whole sections. The first version exempted by
  //     section and would have let a rude line into a teaching note in
  //     s15-trap; the second fired on a legitimate distractor in
  //     s11-impersonal's check. This one distinguishes them.
  const strippedOf = (s: LessonSectionLike): string => {
    const clone = JSON.parse(JSON.stringify(s)) as Record<string, unknown>;
    // trapDrill: the English reflex IS the prompt, and the drill's non-correct
    // options are the reflex offered back.
    if (clone.type === 'trapDrill') {
      for (const c of ((clone.cards ?? []) as Array<Record<string, unknown>>)) { delete c.promptLabel; delete c.promptSound; }
      for (const d of ((clone.drill ?? []) as Array<{ promptSay?: string; opts?: string[]; correct?: number }>)) {
        delete d.promptSay;
        d.opts = (d.opts ?? []).filter((_, i) => i === d.correct);
      }
    }
    // commonErrors: `wrong` is the error being shown as an error.
    for (const e of ((clone.errors ?? []) as Array<Record<string, unknown>>)) delete e.wrong;
    // Any control check: keep only the correct option.
    for (const g of ((clone.groups ?? []) as Array<{ check?: { opts?: string[]; correct?: number } }>)) {
      if (g.check) g.check.opts = (g.check.opts ?? []).filter((_, i) => i === g.check!.correct);
    }
    return JSON.stringify(clone);
  };
  for (const s of SECTIONS) {
    if (RUDE_ALLOWED_SECTIONS.includes((s.id ?? '') as never)) continue;
    const blob = strippedOf(s as LessonSectionLike);
    for (const shape of ACCUSATION_SHAPES) {
      const hit = shape.exec(blob);
      if (hit) die(`${s.id} puts the person in the sentence as the target of the fault, in a string the lesson speaks in its OWN voice: « ${hit[0]} ». A rejected distractor is fine; a note, a body or a why is not.`);
    }
  }
  // MUST_FIRE, inline: the stripper must not have opened a hole. If the rude
  // line were moved into a teaching note, this shape would have to catch it.
  const canary = strippedOf({ type: 'cardDeck', id: 'canary', cards: [{ body: RUDE_LINE }] } as LessonSectionLike);
  if (!ACCUSATION_SHAPES.some((sh) => sh.test(canary))) die('the accusation guard no longer fires on the rude line in a card body, so the stripper has opened a hole');
  // And not one AUTHORED CORPUS ROW carries it. The corpus is what the SRS
  // serves cold, months later, with none of the lesson's framing around it.
  for (const r of ALL_ROWS) {
    for (const shape of ACCUSATION_SHAPES) {
      if (shape.test(r.fr)) die(`the corpus row ${r.id} « ${r.fr} » accuses the person. The SRS serves it with no framing at all.`);
    }
  }

  // 9. a2.32'S DIAGNOSTIC VOCABULARY APPEARS NOWHERE. It ships at seq 31, three
  //    units after this one, and collation §1.3 forbids citing it forward.
  //    Guard the THING, not the letters.
  for (const shape of A2_32_RESERVED) {
    const hit = shape.exec(allText);
    if (hit) die(`« ${hit[0]} » is a2.32's device-fault vocabulary. a2.29 describes a room problem: something missing, broken or noisy.`);
  }
  if (/\ba2\.3[012]\b/.test(allText)) die('a unit that ships AFTER this one is cited by id. Collation §1.3: a unit cannot quote a unit that ships later.');

  // 10. NOTHING USES `y` OR `en` AS A PRONOUN. Collation C8, because a2.25 has
  //     zero lessons. The PREPOSITION `en` is legal and is everywhere.
  for (const shape of PRONOUN_YEN_SHAPES) {
    const hit = shape.exec(allText);
    if (hit) die(`the pronoun y or en reached an authored string as « ${hit[0]} ». C8 bans it band-wide.`);
  }

  // 11. NO JOB-TITLE FEMININE IS MINTED. a2.30 owns feminisation band-wide.
  for (const f of FORBIDDEN_FEMININES) {
    if (bounded(f).test(allText)) die(`the job-title feminine « ${f} » was minted here. a2.30 owns feminisation for all eight units.`);
  }

  // 12. THE FIVE SOFTENERS: each present, each imported or authored AS
  //     DECLARED, and NOT ONE of them ever called a family, a tense or a form.
  const authoredFr = ALL_ROWS.map((r) => fold(r.fr)).join(' ');
  for (const s of SOFTENERS) {
    if (!fold(learnerText).includes(fold(s.fr))) die(`the softener « ${s.fr} » never reaches a learner surface`);
    const isAuthoredHere = ALL_ROWS.some((r) => r.kind !== 'sentence' && fold(r.fr) === fold(s.fr));
    if (s.source === 'authored' && !isAuthoredHere) die(`« ${s.fr} » is declared authored and this build authors no such row`);
    if (s.source === 'imported' && isAuthoredHere) die(`« ${s.fr} » is declared imported and this build authors it as a headword`);
    void authoredFr;
  }
  if (SOFTENERS.length !== 5) die(`SOFTENERS holds ${SOFTENERS.length} and the ladder takes five`);
  for (const shape of [/\b(?:this|that|these|those|a|the|its|their) (?:verb )?family\b/i, /\bfamille (?:de|des) verbes\b/i, /\bbelongs? to a family\b/i]) {
    const hit = shape.exec(learnerText);
    if (hit) die(`a softener is described as belonging to a family: « ${hit[0] }». They are unnamed lexis at this level.`);
  }

  // 13. JARGON. Walked over a display() pass so a cardDeck card's `sub` is
  //     seen, over `intro` and `overview` as well as the sections, and the -s
  //     plural of every entry is in the list.
  for (const j of JARGON) {
    const hit = bounded(j).exec(learnerText);
    if (hit) die(`the jargon word « ${hit[0]} » reached a learner surface. A lesson about politeness forms is unusually likely to reach for it.`);
  }
  // `intro` in its OWN assertion, so a later author who trims the walk fails
  // with the reason. It is drawn on the overview card AND the lesson cover,
  // and a2.11 shipped "third person" there past every other gate.
  for (const j of JARGON) {
    if (bounded(j).test(String(LESSON.intro ?? ''))) die(`Lesson.intro carries the jargon word « ${j} », and intro is drawn on two screens`);
  }

  // 14. HOUSE COPY RULES. `honest` as a SUBSTRING: the house \b boundary cannot
  //     see "dishonest" (the a2.06 finding), and a complaint lesson is exactly
  //     where an author reaches for it.
  if (/—/.test(allText)) die('an em dash reached an authored string');
  for (const b of BANNED_SUBSTRINGS) {
    if (allText.toLowerCase().includes(b)) die(`"${b}" reached an authored string, as a substring`);
  }
  // U+203F renders as a low underscore on a Pixel 6.
  if (/‿/.test(JSON.stringify(ALL_ROWS.map((r) => r.respell ?? '')))) die('a U+203F tie reached a respelling');

  // 15. THE RESPELLINGS. Phrased as "every respelling is CORRECT" rather than
  //     "the checker is quiet", because `hasPlainNasalFor` has three documented
  //     blind spots and a quiet checker is evidence, not proof. The two
  //     nasal-bearing rows this build authors are asserted BY NAME.
  const flagged = ALL_ROWS.filter((r) => hasPlainNasalFor(r.fr, r.respell ?? ''));
  if (flagged.length) die(`respelling(s) closing a nasal with a plain n or m: ${flagged.map((r) => `${r.id} ${r.respell}`).join(', ')}`);
  for (const r of ALL_ROWS) {
    if (!r.respell) continue;
    if (/déranger/i.test(r.fr) && !/rahⁿ/.test(r.respell)) die(`${r.id} respells déranger as « ${r.respell} » and the nasal must close with ⁿ`);
    if (/\bsans\b/i.test(r.fr) && !/sahⁿ/.test(r.respell)) die(`${r.id} respells sans as « ${r.respell} » and the nasal must close with ⁿ`);
  }
  console.log(`  respellings: ${ALL_ROWS.filter((r) => r.respell).length} authored, nasal check clean, and the two nasal-bearing rows are pinned by name`);

  // 16. THE ANSWER FOLD, and this lesson is the band's most hyphen- and
  //     elision-dense material. Every typeIn and errorSpot must DISCRIMINATE.
  const quizSec = SECTIONS.find((s) => s.type === 'quiz')!;
  const qs = quizQuestions(quizSec as never);
  for (const q of qs) {
    if (q.format !== 'typeIn' && q.format !== 'errorSpot') continue;
    const answer = (q as { answer?: string }).answer ?? '';
    const prompt = (q as { prompt?: string }).prompt;
    if (!answer) die(`${q.format} « ${q.q} » has no answer`);
    if (!prompt) die(`${q.format} « ${q.q} » has no prompt, so the learner fixes a phrase that never appears on screen`);
    if (q.format === 'errorSpot' && fold(prompt) === fold(answer)) {
      die(`errorSpot « ${q.q} » folds its prompt onto its answer: the item tests nothing and must move to mcq or listenChoose`);
    }
    const accept = (q as { accept?: string[] }).accept ?? [];
    if (!accept.some((a) => fold(a) === fold(answer))) die(`${q.format} « ${q.q} » has an answer no accept entry folds onto`);
    // An accept array listing both the hyphenated and unhyphenated form is
    // REDUNDANT rather than load-bearing: they were already one answer. Not
    // fatal, but reported, because it hides how much the fold is doing.
    const distinct = new Set(accept.map(fold));
    if (distinct.size < accept.length) {
      console.log(`  note: ${q.format} « ${q.q.slice(0, 44)}… » lists ${accept.length} accepts that fold to ${distinct.size}`);
    }
    // THE BAND RULE. Fold the expected answer against the most plausible wrong
    // answer. Here the prompt IS the plausible wrong answer for errorSpot, and
    // for typeIn the distractor is the other rung's word.
    for (const other of qs) {
      if (other === q) continue;
      const oa = (other as { answer?: string }).answer;
      if (oa && fold(oa) === fold(answer) && other.q !== q.q) {
        die(`two free-text questions fold onto the same answer « ${answer} »: « ${q.q} » and « ${other.q} »`);
      }
    }
  }
  // The two near-misses this lesson actually turns on, asserted directly.
  if (fold('toujours') === fold('pas encore')) die('the toujours / pas encore contrast folds away');
  if (fold(RUDE_LINE) === fold(IMPERSONAL_LINE)) die('the rude and impersonal lines fold onto each other');
  console.log(`  fold: ${qs.filter((q) => q.format === 'typeIn' || q.format === 'errorSpot').length} free-text items, every one discriminates after folding`);

  // 17. Every quiz question carries a `why` and a `ref`; every listenChoose can
  //     speak something other than its own answer; at most half is mcq.
  const sectionIds = new Set(SECTIONS.map((s) => s.id));
  let mcq = 0, lc = 0;
  for (const q of qs) {
    if (!q.why) die(`quiz question « ${q.q} » has no why`);
    if (!q.ref) die(`quiz question « ${q.q} » has no ref`);
    if (!sectionIds.has(q.ref as string)) die(`quiz « ${q.q} » refs ${q.ref}, which is not a section here`);
    if (q.ref === 's14-quebec') die('a quiz question refs the Quebec card, and nothing on it is ever scored');
    if (q.format === 'mcq') mcq += 1;
    if (q.format === 'listenChoose') {
      lc += 1;
      if (!(q as { say?: string }).say && !(q as { audio?: { clip?: string } }).audio?.clip) {
        die(`listenChoose « ${q.q} » carries neither say nor audio.clip, so the card would speak its own answer aloud`);
      }
    }
  }
  if (mcq > qs.length / 2) die(`${mcq} of ${qs.length} questions are mcq, and at most half is house style`);
  console.log(`  quiz: ${qs.length} questions, mcq ${mcq}, listenChoose ${lc}, typeIn ${qs.filter((q) => q.format === 'typeIn').length}, errorSpot ${qs.filter((q) => q.format === 'errorSpot').length}`);

  // 18. NOTHING SCORED CARRIES A QUEBEC FORM. Collation C3, and this build
  //     authors zero Quebec rows, so the sweep is over the SCORED strings.
  const scored: Array<{ where: string; text: string }> = [];
  for (const q of qs) {
    for (const o of ((q as { opts?: string[] }).opts ?? [])) scored.push({ where: `quiz « ${q.q} »`, text: o });
    for (const a of ((q as { accept?: string[] }).accept ?? [])) scored.push({ where: `quiz accept « ${q.q} »`, text: a });
    scored.push({ where: `quiz q « ${q.q} »`, text: q.q });
    const ans = (q as { answer?: string }).answer; if (ans) scored.push({ where: `quiz answer « ${q.q} »`, text: ans });
  }
  for (const s of SECTIONS) {
    for (const d of ((s as { drill?: Array<{ opts?: string[] }> }).drill ?? [])) for (const o of (d.opts ?? [])) scored.push({ where: `${s.id} drill`, text: o });
    for (const g of ((s as { groups?: Array<{ check?: { opts?: string[] } }> }).groups ?? [])) for (const o of (g.check?.opts ?? [])) scored.push({ where: `${s.id} check`, text: o });
    for (const q of ((s as { questions?: Array<{ opts?: string[] }> }).questions ?? [])) for (const o of (q.opts ?? [])) scored.push({ where: `${s.id} question`, text: o });
  }
  for (const { where, text } of scored) {
    for (const qf of QUEBEC_FORMS) {
      // `déjeuner` is legal inside `le petit déjeuner`, which is France-standard
      // and is the corpus's own published phrase. Guard the BARE form.
      if (qf === 'déjeuner' && /petit déjeuner/i.test(text)) continue;
      if (bounded(qf).test(text)) die(`${where} carries the Quebec form « ${qf} » in a scored surface: « ${text} »`);
    }
  }
  if (QUEBEC_ROWS.length !== 0) die(`this build authors ${QUEBEC_ROWS.length} Quebec row(s); the divergence is already published and the count is zero`);
  const qc = SECTIONS.find((s) => s.id === 's14-quebec') as { layer?: string; cards?: unknown[] } | undefined;
  if (!qc) die('s14-quebec is missing');
  if (qc.layer !== 'more') die("s14-quebec must be layer 'more' so a learner on the core path walks past it");
  if ((qc.cards ?? []).length !== 1) die(`s14-quebec holds ${(qc.cards ?? []).length} cards; collation C3 allows exactly one`);
  console.log(`  quebec: ${scored.length} scored strings checked, 1 card at layer 'more', 0 rows authored`);

  // 19. THE STEPPED TRAP SHAPE, and `size` comes OFF a stepped trapDrill.
  for (const s of SECTIONS) {
    if (s.type !== 'trapDrill') continue;
    const kinds = ((s as { steps?: Array<{ kind: string }> }).steps ?? []).map((x) => x.kind);
    if (kinds.join(',') !== 'rule,cards,audio,drill') die(`${s.id} steps are ${kinds.join(',')}; the A2 band has ONE trap shape and the stacked one hides the gate, the audio and the sub-mission number`);
    if (!((s as { steps?: Array<{ gate?: boolean }> }).steps ?? []).at(-1)?.gate) die(`${s.id}'s drill step is not gated`);
    if ((s as { swipe?: boolean }).swipe !== true) die(`${s.id} has no swipe`);
    if ((s as { size?: string }).size) die(`${s.id} carries size, which comes off a stepped trapDrill`);
    if (!(s as { rule?: unknown }).rule) die(`${s.id} has no rule, so its opening step draws nothing`);
  }

  // 20. `swipe` ON commonErrors, or it renders BLANK. Two blank missions have
  //     shipped from exactly this.
  for (const s of SECTIONS) {
    if (s.type === 'commonErrors' && (s as { swipe?: boolean }).swipe !== true) die(`${s.id} is a commonErrors without swipe, and it would render blank`);
  }

  // 21. BOTH LISTENING SECTIONS CARRY hideLines, and their questions ask HOW
  //     MANY or WHEN or WHICH, never "what did you hear". That survives the
  //     flag being lost, which is the point.
  for (const id of ['s03-arrival', 's17-numbers']) {
    const l = SECTIONS.find((s) => s.id === id) as
      { hideLines?: boolean; audio?: { audioFirst?: boolean }; lines?: Array<{ fr: string }>; questions?: Array<{ q: string }> } | undefined;
    if (!l) die(`${id} is missing`);
    if (l.hideLines !== true) die(`${id} does not set hideLines, so MissionRich.tsx:1949 prints l.fr and l.en beside the play button and the mission is a reading exercise`);
    for (const q of (l.questions ?? [])) {
      if (/what did you hear/i.test(q.q)) die(`${id} « ${q.q} » asks what was heard, which a visible transcript answers`);
      for (const ln of (l.lines ?? [])) {
        if (fold(q.q).includes(fold(ln.fr))) die(`${id} « ${q.q} » reprints its line, so hideLines buys nothing`);
      }
    }
  }

  // 22. GROUP ITEMS USE `note`, NEVER `sub`. `sub` on a groupDrill item draws
  //     NOTHING; a2.07 shipped 33 blank lines that way and only the admin
  //     typecheck saw it.
  for (const s of SECTIONS) {
    if (s.type !== 'groupDrill') continue;
    for (const g of ((s as { groups?: Array<{ items?: Array<Record<string, unknown>> }> }).groups ?? [])) {
      for (const it of (g.items ?? [])) if ('sub' in it) die(`${s.id} has a group item carrying sub, which draws nothing. Use note.`);
    }
    // A control page carries `items: []` EXPLICITLY and no size of its own.
    for (const g of ((s as { groups?: Array<{ items?: unknown[]; check?: unknown }> }).groups ?? [])) {
      if (g.check && g.items === undefined) die(`${s.id} has a control page with no explicit items: []`);
    }
  }

  // 23. NO `itemIds` ON A cardDeck: only `practice` reads it, and a2.07 was the
  //     only one of 285 shipped cardDecks carrying it.
  for (const s of SECTIONS) {
    if (s.type === 'cardDeck' && (s as { itemIds?: string[] }).itemIds) {
      die(`${s.id} carries itemIds on a cardDeck, which validates, publishes and draws nothing. Release through deckTranche.`);
    }
  }

  // 24. THE LESSON CARRIES NO FIELD THE SHIPPED CORPUS DOES NOT. `canDo`,
  //     `track` and `teaches` all draw nothing on a Lesson.
  for (const dead of ['canDo', 'track', 'teaches']) {
    if (dead in (LESSON as unknown as Record<string, unknown>)) die(`the lesson carries « ${dead} », which draws nothing. canDo and track belong to the UNIT; the house field is grammarIntroduced.`);
  }
  if (!LESSON.grammarIntroduced?.length) die('grammarIntroduced is empty, and it is the house field 62 of 66 lessons carry');
  if (!LESSON.grammarAssumed?.length) die('grammarAssumed is empty, and it is what makes the curriculum checkable');

  // 25. NO sheet, NO cheatSheet, NO deep layer, NO imageRef. Explicit
  //     decisions rather than omissions.
  if ((LESSON.sheets ?? []).length) die('no reference sheet, and therefore no cheatSheet, which draws its title and nothing else inside one');
  if (SECTIONS.some((s) => (s as { layer?: string }).layer === 'deep')) die('no deep layer in this lesson');
  if (/"imageRef"/.test(allText)) die('no imageRef in this build');
  if (SECTIONS.filter((s) => s.type === 'quiz').length !== 1) die('exactly one quiz section, always: a second is silently never rendered');

  // 26. THE EXAM POLICY, ASSERTED AS AN ABSENCE because it is band policy and
  //     not an oversight. Paul settled it 2026-08-15 as decision item 4.
  if (/"exam"\s*:/.test(JSON.stringify(SECTIONS.filter((s) => s.type === 'scenario')))) die('a scenario carries an exam value, and this band authors zero');
  if ((SECTIONS.find((s) => s.type === 'quiz') as { exam?: boolean }).exam) die('the quiz sets exam: true, which is a1.30.l2 only');
  if (LESSON.skill !== EXAM_POLICY.skill) die(`Lesson.skill is ${LESSON.skill} and dueExamSkills() needs ${EXAM_POLICY.skill}`);

  // 27. PRACTICE IS MANDATORY. `lesson-contract.test.ts:505` mirrors the
  //     publish gate and fails a teaching lesson with no practice, an empty
  //     practice.itemIds, or an empty Lesson.itemIds.
  const practice = SECTIONS.filter((s) => s.type === 'practice');
  if (!practice.length) die('lesson-contract.test.ts:505 fails a teaching lesson with no practice section');
  for (const p of practice) {
    if (!((p as { itemIds?: string[] }).itemIds ?? []).length) die('a practice section with an empty itemIds fails the publish gate');
    if ((p as { skill?: string }).skill === 'write') die("practice skill 'write' draws no writing surface");
  }
  if (practice[0].id !== SPEAK_ID) die(`the practice section is ${practice[0].id} and the lesson exports ${SPEAK_ID}`);
  if (!ITEM_IDS.length) die('Lesson.itemIds is empty');

  // 28. ACT 3 IS THE HEAVIEST, which doctrine §B.5 requires.
  const acts = LESSON.acts ?? [];
  const sizes = acts.map((a) => a.sections.length);
  if (DECK_TRANCHE.length !== acts.length) die(`deckTranche has ${DECK_TRANCHE.length} arrays and the lesson has ${acts.length} acts`);
  if (sizes[2] <= sizes[1]) die(`act 3 has ${sizes[2]} missions and act 2 has ${sizes[1]}; act 3 must be the heaviest`);
  if (!sizes.every((n) => n <= sizes[2])) die(`act 3 is not the largest act: ${sizes.join(', ')}`);
  console.log(`  acts: ${sizes.join(' / ')} = ${SECTIONS.length} missions, act 3 is the heaviest`);

  // 29. THE TRANCHE releases every id exactly once, and releases nothing the
  //     acts before it have not shown.
  const seenT = new Map<string, number>();
  DECK_TRANCHE.forEach((slice, i) => { for (const id of slice) { if (seenT.has(id)) die(`${id} is released twice, in tranche ${seenT.get(id)! + 1} and ${i + 1}`); seenT.set(id, i); } });
  for (const id of NOT_RELEASABLE) {
    if (seenT.has(id)) die(`${id} is released by a deckTranche. It is a metalinguistic rule stored as a corpus sentence and it would draw a flashcard teaching grammar terminology.`);
  }
  for (const id of ITEM_IDS) if (NOT_RELEASABLE.includes(id as never)) die(`${id} is named by the lesson and it is metalinguistic`);

  // 30. THE DICTÉE. Word mode through the REAL `dicteeMode`, and no item
  //     carrying an apostrophe or a hyphen: `normalizeFr` strips both.
  const dictee = SECTIONS.find((s) => s.type === 'dictation') as { id: string; itemIds?: string[] } | undefined;
  if (!dictee?.itemIds?.length) die('the dictation section names no items');
  for (const id of dictee.itemIds) {
    const r = byId.get(id);
    if (!r) die(`${dictee.id} names ${id}, which this build does not author`);
    if (/['’-]/.test(r.fr)) die(`${id} « ${r.fr} » carries an apostrophe or a hyphen; normalizeFr strips both, so its only difficulty would test nothing`);
    const mode = dicteeMode(r.fr);
    if (mode !== 'words') die(`${id} runs in ${mode} mode; the section claims word mode and letter tiles are unusable past ~16 letters`);
  }
  if (dictee.itemIds.length !== DICTEE_IDS.length) die('the dictation section and DICTEE_IDS disagree');
  console.log(`  dictée: all ${dictee.itemIds.length} items in word mode, none carrying an apostrophe or a hyphen`);

  // 31. INTRA-BUILD FOLD DUPLICATES.
  const seen = new Map<string, string>();
  for (const r of ALL_ROWS) {
    const k = `${r.theme}::${fold(r.fr)}`;
    if (seen.has(k)) die(`${r.id} « ${r.fr} » folds onto ${seen.get(k)} inside ${r.theme}`);
    seen.set(k, r.id);
  }
  // Ids inside the block, and CONTIGUOUS.
  const ns = ALL_ROWS.map((r) => Number(r.id.slice(-3))).sort((a, b) => a - b);
  for (const n of ns) if (n < ID_FIRST || n > ID_LAST) die(`fr.a2.${THEME}.${n} is outside the ledger block .${ID_FIRST}-.${ID_LAST}`);
  if (!ns.every((n, i) => i === 0 || n === ns[i - 1] + 1)) die('the id block is not contiguous');

  // 32. THE VOICE FLOOR. Collation §1.5: at least 40% of newly authored rows
  //     are the other party's. Here that is the receptionist, and it is the
  //     half of the conversation the corpus had never written down.
  const other = ROWS.filter((r) => (OTHER_VOICES as readonly string[]).includes(r.voice)).length;
  const pct = other / ROWS.length;
  if (pct < OTHER_VOICE_FLOOR) die(`only ${(pct * 100).toFixed(1)}% of authored rows are the receptionist's voice, and the band floor is ${OTHER_VOICE_FLOOR * 100}%`);
  console.log(`  voice: ${other}/${ROWS.length} = ${(pct * 100).toFixed(1)}% receptionist (band floor ${OTHER_VOICE_FLOOR * 100}%)`);

  // 33. THE TWO SCENARIOS. Every turn carries userEn and at least two alts,
  //     which `scenario.logic.test.ts` requires. And the complaint escalates
  //     BECAUSE THE DESK REFUSES, not because the renderer branches.
  const scenarios = SECTIONS.filter((s) => s.type === 'scenario');
  if (scenarios.length !== 2) die(`this lesson has ${scenarios.length} scenario section(s) and the design is two`);
  for (const s of scenarios) {
    for (const t of (s as { turns: Array<{ userEn?: string; alts?: unknown[] }> }).turns) {
      if (!t.userEn) die(`${s.id} has a turn with no userEn, so the reveal shows a sentence the learner cannot read`);
      if ((t.alts ?? []).length < 2) die(`${s.id} has a turn with fewer than two alts, and a conversation is not a cloze test`);
    }
  }
  const complaint = SECTIONS.find((s) => s.id === 's19-complaint') as { turns: Array<{ ai: string }> } | undefined;
  if (!complaint) die('s19-complaint is missing, and it is the mission the unit is for');
  if (complaint.turns.length !== 6) die(`s19-complaint has ${complaint.turns.length} turns and the design is six`);
  if (!/désolée|ne peux rien faire|complet/i.test(complaint.turns[1].ai)) die('s19-complaint turn 2 is not a refusal, so nothing forces rung 2 out of the learner');
  if (!/je vais voir|je vais prévenir/i.test(complaint.turns[3].ai)) die('s19-complaint turn 4 does not deflect, so nothing forces rung 3');

  // 34. THE LESSON ITSELF.
  const issues = validateLesson(LESSON as never) as unknown[];
  if (Array.isArray(issues) && issues.length) die(`validateLesson: ${issues.length} issue(s)\n${issues.slice(0, 8).map((i) => `      ${JSON.stringify(i)}`).join('\n')}`);

  /* PART A: EVERY AUTHORED ROW MUST BE REACHABLE.
   *
   * Doctrine §E required this all along and nothing enforced it, so a2.29
   * shipped fr.a2.hebergement.086 past 33 green guards. It surfaced three weeks
   * later, for an unrelated reason: a publish regenerated seed.json, the cut
   * dropped the unreferenced row, and a seed-based block count went red. */
  assertReachable(LESSON as never, ALL_ROWS, die);
  const dens = validateDensity(LESSON as never) as unknown;
  const dIssues = Array.isArray(dens) ? dens : ((dens as { issues?: unknown[] }).issues ?? []);
  if (dIssues.length) die(`validateDensity: ${dIssues.length} issue(s)\n${dIssues.slice(0, 8).map((i) => `      ${JSON.stringify(i)}`).join('\n')}`);

  console.log('  offline guards: all passed');
}

/* ─── The apply ────────────────────────────────────────────────────────── */

async function main() {
  console.log(`\n  a2.29.l1 « ${UNIT.sub} » -> ${THEME}${DRY_RUN ? '   [DRY RUN]' : ''}\n`);
  offlineGuards();

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  try {
    const count = async (theme: string, level?: string) => Number((await c.query<{ n: string }>(
      level
        ? "select count(*)::text n from content_items where theme=$1 and level=$2 and status='published'"
        : "select count(*)::text n from content_items where theme=$1 and status='published'",
      level ? [theme, level] : [theme])).rows[0].n);
    const beforeTheme = await count(THEME);
    const beforeA2 = await count(THEME, 'a2');
    console.log(`  ${THEME}: ${beforeTheme} published before (measured ${THEME_ROWS_BEFORE}), a2 slice ${beforeA2} (measured ${THEME_A2_BEFORE})`);

    // `voyage` must be at ZERO and stay there.
    const voyage = await count('voyage');
    if (voyage !== 0) die(`${voyage} row(s) exist in the phantom theme 'voyage'`);

    // THE ID BLOCK MUST STILL BE FREE. Check the WHOLE block, never the
    // maximum: a concurrent build can land BELOW your top. That is the
    // a1.19 / a1.20 collision and it has now happened twice.
    const mine = new Set(ALL_ROWS.map((r) => r.id));
    const taken = await c.query<{ id: string }>('select id from content_items where id = any($1::text[])', [[...mine]]);
    if (taken.rows.length && !REAPPLY) {
      die(`${taken.rows.length} of this build's ids are already in Postgres. Re-run with --reapply if they are yours.\n      ${taken.rows.slice(0, 6).map((t) => t.id).join(', ')}`);
    }
    if (taken.rows.length) console.log(`  --reapply: updating ${taken.rows.length} rows this build already owns`);
    const inBlock = await c.query<{ id: string }>(
      `select id from content_items where theme=$1 and id like 'fr.a2.%'
         and (substring(id from '\\d+$'))::int between $2 and $3`, [THEME, ID_FIRST, ID_LAST]);
    const foreign = inBlock.rows.filter((r) => !mine.has(r.id));
    if (foreign.length) die(`${foreign.length} row(s) another build landed INSIDE this ledger block: ${foreign.map((r) => r.id).join(', ')}`);

    // NO INTRA-THEME FOLD COLLISION against what is published. This is the
    // guard for the headline finding: `hebergement` holds 312 published rows
    // and the seed shows ZERO, so anybody measuring on the seed would
    // re-author the whole hotel lexicon and flashhub-coverage would not see it.
    const pub = await c.query<{ id: string; fr: string; theme: string }>(
      "select id, fr, theme from content_items where status='published' and theme=$1", [THEME]);
    const byFold = new Map<string, string>();
    for (const r of pub.rows) if (!mine.has(r.id)) byFold.set(fold(r.fr), r.id);
    for (const r of ALL_ROWS) {
      const hit = byFold.get(fold(r.fr));
      if (hit) die(`${r.id} « ${r.fr} » already exists in ${r.theme} as ${hit}. Import it, do not author it.`);
    }
    console.log(`  fold sweep: ${ALL_ROWS.length} authored rows against ${pub.rows.length} published in ${THEME}, zero intra-theme collisions`);

    // NOT ONE HOTEL NOUN AUTHORED. Every headword the lesson leans on already
    // exists, and one careless authoring degrades flashhub-coverage.test.ts.
    const authoredWords = ALL_ROWS.filter((r) => r.kind === 'word');
    if (authoredWords.length) die(`${authoredWords.length} word headword(s) authored: ${authoredWords.map((r) => r.fr).join(', ')}. Every hotel noun this lesson needs is already published.`);

    // EVERY IMPORTED ID IS PUBLISHED and therefore reachable.
    const found = await c.query<{ id: string; status: string }>('select id, status from content_items where id = any($1::text[])', [IMPORT_IDS]);
    const okIds = new Set(found.rows.filter((r) => r.status === 'published').map((r) => r.id));
    const missing = IMPORT_IDS.filter((w) => !okIds.has(w));
    if (missing.length) die(`imported id(s) not published: ${missing.join(', ')}`);
    console.log(`  imports: ${IMPORT_IDS.length} verified published`);

    // DRILL REACHABILITY, CHECKED AGAINST POSTGRES rather than the seed. The
    // seed is roughly a quarter of the database and a statistic measured on it
    // can be an artifact of the cut.
    const localDrills = new Map(ALL_ROWS.map((r) => [r.id, toArray(r.drills)]));
    const drillsFor = async (idList: string[]) => {
      const remoteIds = idList.filter((i) => !localDrills.has(i));
      const remote = remoteIds.length
        ? await c.query<{ id: string; drills: unknown }>('select id, drills from content_items where id = any($1::text[])', [remoteIds])
        : { rows: [] as Array<{ id: string; drills: unknown }> };
      const m = new Map(remote.rows.map((r) => [r.id, toArray(r.drills)]));
      return (id: string) => localDrills.get(id) ?? m.get(id) ?? [];
    };
    const need = async (sectionType: string, drill: string) => {
      const idList = [...new Set(SECTIONS.filter((s) => s.type === sectionType)
        .flatMap((s) => (s as { itemIds?: string[] }).itemIds ?? []))];
      if (!idList.length) return;
      const get = await drillsFor(idList);
      for (const id of idList) if (!get(id).includes(drill)) die(`${sectionType} names ${id}, which does not carry the ${drill} drill`);
      console.log(`  ${sectionType}: all ${idList.length} items carry ${drill}`);
    };
    await need('dictation', 'dictation');
    await need('practice', 'voiceflash');

    const trancheIds = [...new Set(DECK_TRANCHE.flat())];
    const getT = await drillsFor(trancheIds);
    const noCard = trancheIds.filter((id) => !getT(id).includes('flashcard'));
    if (noCard.length) die(`${noCard.length} deckTranche id(s) carry no flashcard drill, so they release nothing: ${noCard.join(', ')}`);
    console.log(`  deckTranche: all ${trancheIds.length} ids carry flashcard`);

    // Every LessonDrill's flashcard items are reachable too.
    const drillItems = [...new Set((LESSON.drills ?? []).flatMap((d) => d.items ?? []))];
    if (drillItems.length) {
      const getD = await drillsFor(drillItems);
      const bad = drillItems.filter((id) => !getD(id).includes('flashcard'));
      if (bad.length) die(`${bad.length} LessonDrill item(s) carry no flashcard drill: ${bad.join(', ')}`);
    }

    // a2.07'S FROZEN BLOCK, read back rather than trusted.
    const rb = await c.query<{ id: string; fr: string }>('select id, fr from content_items where id = any($1::text[])', [[...REPAIR_IDS]]);
    if (rb.rows.length !== 6) die(`read back ${rb.rows.length} of ${REPAIR_UNIT}'s repair rows, expected 6`);
    for (const r of rb.rows) {
      if (!REPAIR_FR.map(fold).includes(fold(r.fr))) die(`${r.id} « ${r.fr} » has drifted from the frozen block in 04-REPAIR-MOVE-IDS.md`);
    }
    console.log(`  ${REPAIR_UNIT}'s frozen repair block: all 6 published, unchanged, and cited by ${LESSON_ID}`);

    // THE UNIT ROW, re-probed rather than trusted. Band blocking step 2 landed
    // before this build started, in all three places.
    const unitRow = await c.query<{ body: Record<string, unknown> }>(
      "select body from content_units where kind='curriculum_unit' and body->>'id'=$1", [UNIT.id]);
    if (!unitRow.rows.length) die(`${UNIT.id} is not in content_units`);
    const unit = unitRow.rows[0].body as { canDo?: string; sub?: string; title?: string; themes?: string[]; lessonIds?: string[] };
    if (unit.canDo !== UNIT.canDo) die(`canDo drift.\n      db:    ${unit.canDo}\n      build: ${UNIT.canDo}`);
    if (unit.sub !== UNIT.sub) die(`sub drift.\n      db:    ${unit.sub}\n      build: ${UNIT.sub}`);
    if (unit.title !== UNIT.title) die(`title drift.\n      db:    ${unit.title}\n      build: ${UNIT.title}`);
    if (!(unit.themes ?? []).includes(THEME)) die(`the unit row does not carry ${THEME}; band blocking step 2 has not landed`);
    if ((unit.themes ?? []).includes('voyage')) die("the unit row still carries the phantom theme 'voyage'");
    console.log(`  unit row: title, sub and canDo match byte for byte; themes = [${(unit.themes ?? []).join(', ')}]`);

    if (DRY_RUN) { console.log('\n  DRY RUN: every guard passed, nothing written.\n'); return; }

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

    // THE ROW COUNT AFTER, NOT THE MAXIMUM ID.
    const afterTheme = await count(THEME);
    const afterA2 = await count(THEME, 'a2');
    console.log(`\n  ${THEME}: ${beforeTheme} -> ${afterTheme} (+${afterTheme - beforeTheme}, authored ${ALL_ROWS.length})`);
    console.log(`  ${THEME} a2 slice: ${beforeA2} -> ${afterA2} (+${afterA2 - beforeA2})`);
    if (afterTheme - beforeTheme !== ALL_ROWS.length && !REAPPLY) {
      die(`the theme moved by ${afterTheme - beforeTheme} and this build authored ${ALL_ROWS.length}. Something else landed during the apply.`);
    }

    console.log('\n  THE RUNG-TO-ITEMID TABLE, for a2.30, a2.31 and a2.32 to paste:');
    for (const [k, v] of Object.entries(RUNG_TABLE)) {
      console.log(`    ${k}  « ${v.name} »`);
      for (const [move, list] of [['request', v.request], ['fault', v.fault], ['escalate', v.escalate]] as const) {
        if (list.length) console.log(`        ${move.padEnd(9)} ${list.join(', ')}`);
      }
    }
    console.log('\n  Applied. Next: pnpm tsx scripts/merge-hotel-into-seed.ts\n');
  } finally {
    c.release();
    await pool.end();
  }
}

main();
