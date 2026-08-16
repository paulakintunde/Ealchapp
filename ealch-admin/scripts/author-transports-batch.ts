// a2.27.l1 « Les transports » — apply the corpus, the lesson and the unit row
// to Postgres. Trail seq 26, the third unit of the A2 situations band.
//
//   pnpm content:transports --dry     guards only, nothing written
//   pnpm content:transports           the real apply, in one transaction
//   pnpm content:transports --reapply re-run after an in-build correction
//
// This build writes into TWO themes:
//   `transports-quotidiens`   every direction, announcement and counter row
//   `quebec-et-francophonie`  the two authored Quebec rows, per collation C3
//
// It writes into NONE of `deplacements`, `la-ville` or `rp-voyage`. Those are
// a1 populations and a role-play namespace, and this unit imports from the
// first two and touches the third not at all.
//
// The guards below are the ones that would have caught this build's own
// mistakes, plus the ones the band asked every unit to carry.
import './env';
import {
  ALL_ROWS, ROWS, TRANSPORT_ROWS, QC_ROWS, UNIT, THEME, QC_THEME,
  REPAIR_IDS, REPAIR_FR, IMPORTED, ID_FIRST, ID_LAST, QC_FIRST, QC_LAST,
  THEME_ROWS_BEFORE, THEME_A2_BEFORE, QC_A2_BEFORE,
  OTHER_VOICE_FLOOR, OTHER_VOICES, QUEBEC_FORMS, PRONOUN_YEN_SHAPES, DICTEE_IDS,
} from './data/transports-corpus.ts';
import { LESSON, SECTIONS, ITEM_IDS, DECK_TRANCHE, SAY_ID } from './data/transports-lesson.ts';
import { validateLesson, quizQuestions } from '../../ealch-v2/src/content/schema.ts';
import { validateDensity, hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';

const DRY_RUN = process.argv.includes('--dry');
const REAPPLY = process.argv.includes('--reapply');
// The annotation is on the VARIABLE, not the arrow. TypeScript only treats a
// call as a never-returning assertion, and therefore narrows what follows it,
// when the const carries an explicit type annotation.
const die: (m: string) => never = (m) => { console.error(`\n  STOP: ${m}\n`); process.exit(1); };

/** THE REAL FOLD, copied from `answer.logic.ts:32` character for character.
 *  It strips accents, case, punctuation, hyphens, the middle dot, BOTH
 *  apostrophes and ALL whitespace. See `03-ANSWER-FOLD-FACT.md`. */
const fold = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
  .replace(/[/[\]()«».,!?;:]/g, '').replace(/[-·’']/g, '').replace(/\s+/g, '').trim();

/** `drills` is a Postgres enum array and arrives as the raw literal
 *  `{flashcard,review}`. A `.includes()` on the STRING is a substring test that
 *  lies: it answers true for 'card' as readily as for 'flashcard'. */
const toArray = (d: unknown): string[] =>
  Array.isArray(d) ? d as string[] : String(d ?? '').replace(/[{}"]/g, '').split(',').filter(Boolean);

/* ─── Guards that need no database ─────────────────────────────────────── */

function offlineGuards() {
  const allText = JSON.stringify(LESSON) + JSON.stringify(ALL_ROWS);

  // 1. ZERO REPAIR ROWS. Collation §1.6: a2.07 owns the move for all eight
  //    units. Phrased as a FOLD test rather than a string test, so a later
  //    author cannot slip « pardon ? » in under different punctuation.
  const repairFolds = new Set(REPAIR_FR.map(fold));
  for (const r of ALL_ROWS) {
    if (repairFolds.has(fold(r.fr))) {
      die(`${r.id} « ${r.fr} » is one of a2.07's six frozen repair rows. Cite it by itemId; this unit authors zero.`);
    }
  }
  if (REPAIR_IDS.length !== 6) die(`the cited repair block holds ${REPAIR_IDS.length} ids and the contract is exactly six`);
  const nums = REPAIR_IDS.map((i) => Number(i.slice(-3)));
  if (!nums.every((n, i) => i === 0 || n === nums[i - 1] + 1)) die('the cited repair ids are not a contiguous run');
  for (const id of REPAIR_IDS) {
    if (!id.startsWith('fr.a2.au-restaurant.')) die(`${id} is not in au-restaurant; the frozen block is a2.07's and lives there`);
  }

  // 2. No U+203F anywhere. It draws as a low underscore on a Pixel 6 and has
  //    already hit shipped sons.10 content. Band-wide rule.
  for (const r of ALL_ROWS) {
    if (/‿/.test(r.respell ?? '')) die(`${r.id} carries a U+203F tie in its respelling`);
  }

  // 3. The respelling is CORRECT. Phrased that way deliberately: the checker
  //    has measured blind spots, so a quiet checker is evidence and not proof.
  const flagged = ALL_ROWS.filter((r) => hasPlainNasalFor(r.fr, r.respell ?? ''));
  if (flagged.length) die(`respelling(s) closing a nasal with a plain n or m: ${flagged.map((r) => `${r.id} ${r.respell}`).join(', ')}`);

  // 4. THE BAND'S VOICE FLOOR, collation §1.5. At least 40 percent of newly
  //    authored rows must be in the voice of the person the learner is talking
  //    to. Here that is the passer-by, the announcer and the counter agent.
  //    The Quebec rows are recognition vocabulary with no speaker and are
  //    excluded from both halves of the fraction.
  const other = ROWS.filter((r) => OTHER_VOICES.includes(r.voice)).length;
  const pct = other / ROWS.length;
  if (pct < OTHER_VOICE_FLOOR) {
    die(`only ${(pct * 100).toFixed(1)}% of authored rows are in the other party's voice, and the band floor is ${OTHER_VOICE_FLOOR * 100}%`);
  }

  // 5. Ids inside the ledger blocks, each row in the theme its block belongs
  //    to, and no internal fold collisions. Scoped to the BLOCK, never to the
  //    theme prefix: a prefix filter picks up 281 a1 and b1 rows nobody here
  //    authored.
  for (const r of TRANSPORT_ROWS) {
    const n = Number(r.id.slice(-3));
    if (r.theme !== THEME) die(`${r.id} is in ${r.theme} and belongs in ${THEME}`);
    if (n < ID_FIRST || n > ID_LAST) die(`${r.id} is outside the ledger block .${ID_FIRST}-.${ID_LAST}`);
  }
  for (const r of QC_ROWS) {
    const n = Number(r.id.slice(-3));
    if (r.theme !== QC_THEME) die(`${r.id} is a Quebec row and must live in ${QC_THEME}, never in ${THEME}`);
    if (n < QC_FIRST || n > QC_LAST) die(`${r.id} is outside the Quebec block .${QC_FIRST}-.${QC_LAST}`);
  }
  if (QC_ROWS.length > 2) die(`${QC_ROWS.length} authored Quebec rows; the band convention a2.07 set is at most two`);

  const seen = new Map<string, string>();
  for (const r of ALL_ROWS) {
    const k = `${r.theme}::${fold(r.fr)}`;
    if (seen.has(k)) die(`${r.id} « ${r.fr} » folds onto ${seen.get(k)} inside ${r.theme}: the flashcard hub would serve one card twice`);
    seen.set(k, r.id);
  }

  // 6. NOTHING IN THIS LESSON USES `y` OR `en` AS A PRONOUN, in any surface,
  //    including corpus rows, alts, listening lines and distractors.
  //    Collation C8: a2.24 has one lesson and a2.25 has ZERO, so no unit in
  //    this band may build a teaching move on either.
  //
  //    Written against the PRONOUN'S SHAPES rather than the bare letters,
  //    because the PREPOSITION `en` is legal here and is a whole card: en bus,
  //    en face, en provenance de, en gare, en raison de. A guard on `\ben\b`
  //    would fire forty times on legitimate content.
  for (const shape of PRONOUN_YEN_SHAPES) {
    const hit = shape.exec(allText);
    if (hit) die(`the pronoun y or en reached an authored string as « ${hit[0]} ». C8 bans it band-wide; the preposition en is fine and is s07's card.`);
  }

  // 7. THE FORM IS USED AND NEVER NAMED. Paul settled this 2026-08-15,
  //    option B: nobody in this band owns the mood these direction verbs are
  //    in. Banned in every surface including card bodies, `why` strings and the
  //    roundup, along with the shape that teaches the paradigm with the label
  //    filed off.
  for (const shape of [/imperative/i, /impératif/i, /drop the pronoun from the vous form/i, /\btu form\b/i]) {
    if (shape.test(allText)) die(`a naming of the mood reached an authored string: ${shape}. Paul settled it option B on 2026-08-15: nobody owns it and nobody names it.`);
  }

  // 8. NO QUEBEC FORM IS A CORRECT ANSWER AND NONE IS A DISTRACTOR.
  //    Collation C3 rule 2. A form that is correct in Montreal and marked red
  //    is a defect a TEF Canada candidate will notice and be right about, so
  //    this walks every OPTION of every scored surface, not only the correct
  //    ones.
  const quizSec = SECTIONS.find((s) => s.type === 'quiz')!;
  const scoredOptions: Array<{ where: string; text: string }> = [];
  for (const q of quizQuestions(quizSec)) {
    for (const o of ((q as { opts?: string[] }).opts ?? [])) scoredOptions.push({ where: `quiz « ${q.q} »`, text: o });
    for (const a of ((q as { accept?: string[] }).accept ?? [])) scoredOptions.push({ where: `quiz accept « ${q.q} »`, text: a });
    const t = (q as { target?: string }).target;
    if (t) scoredOptions.push({ where: `quiz speak « ${q.q} »`, text: t });
  }
  for (const s of SECTIONS) {
    for (const d of ((s as { drill?: Array<{ opts?: string[] }> }).drill ?? [])) {
      for (const o of (d.opts ?? [])) scoredOptions.push({ where: `${s.id} drill`, text: o });
    }
    for (const g of ((s as { groups?: Array<{ check?: { opts?: string[] } }> }).groups ?? [])) {
      for (const o of (g.check?.opts ?? [])) scoredOptions.push({ where: `${s.id} check`, text: o });
    }
    for (const q of ((s as { questions?: Array<{ opts?: string[] }> }).questions ?? [])) {
      for (const o of (q.opts ?? [])) scoredOptions.push({ where: `${s.id} question`, text: o });
    }
  }
  for (const { where, text } of scoredOptions) {
    for (const qf of QUEBEC_FORMS) {
      if (new RegExp(`(?<![\\p{L}\\p{N}-])${qf}(?![\\p{L}\\p{N}-])`, 'iu').test(text)) {
        die(`${where} carries the Quebec form « ${qf} » in a scored option: « ${text} ». A Quebec form is never right and never wrong here, it is elsewhere.`);
      }
    }
  }
  console.log(`  quebec guard: ${scoredOptions.length} scored options checked against ${QUEBEC_FORMS.length} forms`);

  // 9. THE BAND RULE ON THE ANSWER FOLD, and this unit is the one that found
  //    the correction. Collation §0.3 scoped the hyphen exposure to normalizeFr
  //    and the dictée and concluded no band-wide rule was needed. That is right
  //    about normalizeFr and WRONG about the quiz: `matchesAccept` grades
  //    typeIn and errorSpot through `fold()`, which strips hyphens, both
  //    apostrophes and ALL whitespace as well. In a transport lesson that hits
  //    aller-retour, rond-point, jusqu'au, l'arrêt, l'abonnement and d'environ.
  //
  //    So every typeIn and errorSpot must DISCRIMINATE: the expected answer and
  //    the phrase it is correcting must not fold to the same string.
  for (const q of quizQuestions(quizSec)) {
    if (q.format !== 'typeIn' && q.format !== 'errorSpot') continue;
    const answer = (q as { answer?: string }).answer ?? '';
    const prompt = (q as { prompt?: string }).prompt;
    if (!answer) die(`${q.format} « ${q.q} » has no answer`);
    if (q.format === 'errorSpot') {
      if (!prompt) die(`errorSpot « ${q.q} » has no prompt, so the learner is asked to fix a phrase that never appears`);
      if (fold(prompt) === fold(answer)) {
        die(`errorSpot « ${q.q} » folds its prompt onto its answer (« ${fold(prompt)} »): the item tests nothing and must become an mcq`);
      }
    }
    for (const a of ((q as { accept?: string[] }).accept ?? [])) {
      if (!a.trim()) die(`${q.format} « ${q.q} » has an empty accept entry`);
    }
    if (!((q as { accept?: string[] }).accept ?? []).some((a) => fold(a) === fold(answer))) {
      die(`${q.format} « ${q.q} » has an answer no accept entry folds onto, so the stated answer would be marked wrong`);
    }
  }

  // 10. THE DICTÉE. Every item runs in WORD mode, checked through the REAL
  //     `dicteeMode` rather than by counting characters, and none carries an
  //     apostrophe or a hyphen: `normalizeFr` strips both, so an item whose
  //     only difficulty is one tests nothing.
  const dictee = SECTIONS.find((s) => s.type === 'dictation') as { id: string; itemIds?: string[] } | undefined;
  if (!dictee?.itemIds?.length) die('the dictation section names no items');
  const byId = new Map(ALL_ROWS.map((r) => [r.id, r]));
  for (const id of dictee.itemIds) {
    const r = byId.get(id);
    if (!r) die(`${dictee.id} names ${id}, which this build does not author (a dictée item must be one of ours so the mode can be checked)`);
    if (/['’-]/.test(r.fr)) die(`${id} « ${r.fr} » carries an apostrophe or a hyphen; normalizeFr strips both, so that difficulty is not being tested`);
    const mode = dicteeMode(r.fr);
    if (mode !== 'words') die(`${id} runs in ${mode} mode; the section's copy claims word mode for all six`);
  }
  if (dictee.itemIds.length !== DICTEE_IDS.length) die('the dictation section and DICTEE_IDS disagree');
  console.log(`  dictée: all ${dictee.itemIds.length} items in word mode, none carrying an apostrophe or a hyphen`);

  // 11. THE OWNS IS ON SCREEN BEFORE ANY AUDIO PLAYS. The four move types and
  //     the five joints are act 2, and every chain drill is act 3. That
  //     sequencing is the design's argument and it is what stops act 3 being a
  //     memory test, so it is asserted rather than trusted to the section order.
  const acts = LESSON.acts ?? [];
  const actOf = (sid: string) => acts.findIndex((a) => a.sections.includes(sid));
  const movesAct = actOf('s04-moves');
  const jointsAct = actOf('s05-joints');
  for (const [sid, label] of [['s08-one', 'rung 1'], ['s09-two', 'rung 2'], ['s10-three', 'rung 3'], ['s11-four', 'rung 4']] as const) {
    const a = actOf(sid);
    if (a <= movesAct || a <= jointsAct) die(`${sid} (${label}) is not after the frame: the move types and the joints must be on screen before any chain is heard`);
  }
  if (movesAct !== jointsAct) die('the four move types and the five joints must sit in the same act');
  console.log(`  frame: the move types and the joints are act ${movesAct + 1}, every chain rung is later`);

  // 12. The chain ladder climbs. Four rungs, one per section, in order.
  const rungSizes = [
    ['s08-one', 1], ['s09-two', 2], ['s10-three', 3], ['s11-four', 4],
  ] as const;
  const sectionIds = SECTIONS.map((s) => s.id);
  let last = -1;
  for (const [sid, n] of rungSizes) {
    const i = sectionIds.indexOf(sid);
    if (i < 0) die(`${sid} is missing: the chain ladder needs all four rungs`);
    if (i <= last) die(`${sid} (${n} moves) is out of order in the ladder`);
    last = i;
  }

  // 13. The lesson itself.
  const issues = validateLesson(LESSON as never) as unknown[];
  if (Array.isArray(issues) && issues.length) die(`validateLesson: ${issues.length} issue(s)\n${issues.slice(0, 8).map((i) => `      ${JSON.stringify(i)}`).join('\n')}`);
  const dens = validateDensity(LESSON as never) as unknown;
  const dIssues = Array.isArray(dens) ? dens : ((dens as { issues?: unknown[] }).issues ?? []);
  if (dIssues.length) die(`validateDensity: ${dIssues.length} issue(s)\n${dIssues.slice(0, 8).map((i) => `      ${JSON.stringify(i)}`).join('\n')}`);

  if (SECTIONS.filter((s) => s.type === 'quiz').length !== 1) die('exactly one quiz section, always: a second is silently never rendered');

  // 14. PRACTICE IS MANDATORY. `lesson-contract.test.ts:505` mirrors the
  //     publish gate and no prompt in this band said so until the consistency
  //     pass found it.
  const practice = SECTIONS.filter((s) => s.type === 'practice');
  if (!practice.length) die('lesson-contract.test.ts:505 fails a teaching lesson with no practice section');
  for (const p of practice) {
    if (!((p as { itemIds?: string[] }).itemIds ?? []).length) die('a practice section with an empty itemIds fails the publish gate');
    if ((p as { skill?: string }).skill === 'write') die("practice skill 'write' draws no writing surface");
  }
  if (practice[0].id !== SAY_ID) die(`the practice section is ${practice[0].id} and the lesson exports ${SAY_ID}`);
  if (!ITEM_IDS.length) die('Lesson.itemIds is empty, so the lesson releases no SRS cards');
  if (DECK_TRANCHE.length !== acts.length) die(`deckTranche has ${DECK_TRANCHE.length} arrays and the lesson has ${acts.length} acts`);

  // 15. `swipe` on commonErrors, or it draws a blank screen.
  for (const s of SECTIONS) {
    if (s.type === 'commonErrors' && (s as { swipe?: boolean }).swipe !== true) {
      die(`${s.id} is a commonErrors without swipe: it renders its own deck only when swipe is present`);
    }
  }

  // 16. THE STEPPED TRAP SHAPE. `lesson-contract.test.ts` has enforced
  //     rule > cards > audio > drill with a gate since 2026-08-13. The stacked
  //     render hides the gate, the audio and the sub-mission number, which is
  //     exactly the three things the rung-4 drill is for.
  for (const s of SECTIONS) {
    if (s.type !== 'trapDrill') continue;
    const kinds = ((s as { steps?: Array<{ kind: string; gate?: boolean }> }).steps ?? []).map((x) => x.kind);
    if (kinds.join(',') !== 'rule,cards,audio,drill') die(`${s.id} steps are ${kinds.join(',')}; the A2 band has one trap shape and it is rule,cards,audio,drill`);
    const lastStep = ((s as { steps?: Array<{ gate?: boolean }> }).steps ?? []).at(-1);
    if (!lastStep?.gate) die(`${s.id}'s drill step is not gated`);
    if ((s as { swipe?: boolean }).swipe !== true) die(`${s.id} has no swipe`);
  }

  // 17. Every quiz question carries a why; every listenChoose can speak
  //     something other than its own answer. Without `say`, ListenChooseCard
  //     falls back to speaking `opts[correct]`, and where the options are
  //     English it speaks English at a listening exercise (a1.25 shipped that).
  let lcCount = 0;
  for (const q of quizQuestions(quizSec)) {
    if (!q.why) die(`quiz question « ${q.q} » has no why`);
    if (q.format !== 'listenChoose') continue;
    lcCount += 1;
    if (!(q as { say?: string }).say && !(q as { audio?: { clip?: string } }).audio?.clip) {
      die(`listenChoose « ${q.q} » carries neither say nor audio.clip, so the card would speak the answer aloud`);
    }
    // OPTION WIDTH. ListenChooseCard is the tallest card in the quiz and its
    // own source says so. Ten of them has never been rendered on a Pixel 6.
    for (const o of ((q as { opts?: string[] }).opts ?? [])) {
      if (o.split(/\s+/).length > 5) die(`listenChoose « ${q.q} » has a ${o.split(/\s+/).length}-word option « ${o} »; keep them short or the last row clips`);
    }
  }
  if (lcCount !== 10) die(`${lcCount} listenChoose questions; this unit inverts the band's mix deliberately and the number is 10`);
  console.log(`  quiz: ${lcCount} listenChoose, all carrying say, all options five words or fewer`);

  // 18. s10-three is the funded engineering item's mission and it is worthless
  //     without the flag. It is also worthless if a question reprints its line:
  //     a2.07 found on device that the question rail renders UNDER the masked
  //     cards, so a quoted line hands the words straight back.
  const heard = SECTIONS.find((s) => s.id === 's10-three') as
    { hideLines?: boolean; lines?: Array<{ fr: string }>; questions?: Array<{ q: string }> } | undefined;
  if (!heard) die('s10-three is missing');
  if (heard.hideLines !== true) die('s10-three without hideLines is a reading exercise with a play button, and its en gloss hands over the whole route in English');
  for (const q of (heard.questions ?? [])) {
    for (const l of (heard.lines ?? [])) {
      if (fold(q.q).includes(fold(l.fr))) die(`s10-three question « ${q.q} » reprints its line, so hideLines buys nothing`);
    }
  }

  // 19. House copy rules, and the boundaries this unit must not cross.
  if (/—/.test(allText)) die('an em dash reached an authored string');
  if (/honest/i.test(allText)) die('"honest" reached an authored string (the substring, so "dishonest" is caught too)');
  if (/pourriez-vous/i.test(allText)) die('pourriez-vous is a2.29\'s, settled by Paul on 2026-08-15, option A');
  // The register LADDER is a2.29's, once, for all eight (collation §C5). Two
  // openings as two SHAPES is this unit's; a politeness gradient is not. The
  // repair ladder is a2.07's and the word is allowed there.
  if (/\bladder\b/i.test(JSON.stringify(LESSON).replace(/repair ladder/gi, ''))) {
    die('the word "ladder" appears outside "repair ladder": the politeness ladder is a2.29\'s, once, for all eight');
  }
  // The money is a2.26's. This unit may state a price; it teaches nothing
  // about paying and adds nothing up.
  for (const shape of [/\bcombien ça coûte\b/i, /\bça fait combien\b/i, /\bla monnaie\b/i, /\bje vous rends\b/i]) {
    if (shape.test(allText)) die(`a money move reached an authored string: ${shape}. a2.26 owns the transaction; this unit owns the ticket as an object of a journey.`);
  }

  console.log('  offline guards: all passed');
}

/* ─── The apply ────────────────────────────────────────────────────────── */

async function main() {
  console.log(`\n  a2.27.l1 « ${UNIT.sub} » -> ${THEME} + ${QC_THEME}${DRY_RUN ? '   [DRY RUN]' : ''}\n`);
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
    const beforeQc = await count(QC_THEME, 'a2');
    console.log(`  ${THEME}: ${beforeTheme} published before (the build measured ${THEME_ROWS_BEFORE}), a2 slice ${beforeA2} (measured ${THEME_A2_BEFORE})`);
    console.log(`  ${QC_THEME} a2: ${beforeQc} published before (measured ${QC_A2_BEFORE})`);

    // The id blocks must still be free. A concurrent build can land BELOW your
    // top without a highest-id check seeing it, so this checks the WHOLE block
    // rather than the maximum. Several builds in this band run in parallel.
    const mine = new Set(ALL_ROWS.map((r) => r.id));
    const taken = await c.query<{ id: string }>(
      'select id from content_items where id = any($1::text[])', [[...mine]]);
    if (taken.rows.length && !REAPPLY) {
      die(`${taken.rows.length} of this build's ids are already in Postgres. If they are yours and you are correcting them, re-run with --reapply. Otherwise a concurrent build has taken part of a block.\n      ${taken.rows.slice(0, 6).map((t) => t.id).join(', ')}${taken.rows.length > 6 ? ' ...' : ''}`);
    }
    if (taken.rows.length) console.log(`  --reapply: updating ${taken.rows.length} rows this build already owns`);

    // No intra-theme fold collision against what is already published, across
    // both themes, ignoring this build's own rows so a re-apply does not
    // collide with itself. THIS IS THE GUARD THAT STOPS THE HIGHEST-COST
    // FAILURE IN THIS BUILD: `transports-quotidiens` holds 415 published rows
    // and the seed shows 5, so anybody measuring on the seed would re-author
    // four hundred duplicates and flashhub-coverage.test.ts would not see them.
    const pub = await c.query<{ id: string; fr: string; theme: string }>(
      "select id, fr, theme from content_items where status='published' and theme = any($1::text[])",
      [[THEME, QC_THEME]]);
    const byFold = new Map<string, string>();
    for (const r of pub.rows) { if (!mine.has(r.id)) byFold.set(`${r.theme}::${fold(r.fr)}`, r.id); }
    for (const r of ALL_ROWS) {
      const hit = byFold.get(`${r.theme}::${fold(r.fr)}`);
      if (hit) die(`${r.id} « ${r.fr} » already exists in ${r.theme} as ${hit}. Import it, do not author it.`);
    }
    console.log(`  fold sweep: ${ALL_ROWS.length} authored rows against ${pub.rows.length} published, zero intra-theme collisions`);

    // NOT ONE ROW LANDS IN deplacements, la-ville OR rp-voyage. Nine A1 grammar
    // lessons draw example nouns from deplacements, and a1.03's gender
    // statistic and a1.11's indefinite-article statistic are both measured over
    // its noun population.
    for (const r of ALL_ROWS) {
      if (['deplacements', 'la-ville', 'rp-voyage'].includes(r.theme ?? '')) {
        die(`${r.id} is authored into ${r.theme}, which is import-only for this unit`);
      }
    }

    // Every imported id is published and therefore reachable. Collation §1.3:
    // a published row is REACHABLE and must be imported, never re-authored.
    const wanted = [...new Set(Object.values(IMPORTED).flat())];
    const found = await c.query<{ id: string; status: string }>(
      'select id, status from content_items where id = any($1::text[])', [wanted]);
    const okIds = new Set(found.rows.filter((r) => r.status === 'published').map((r) => r.id));
    const missing = wanted.filter((w) => !okIds.has(w));
    if (missing.length) die(`imported id(s) not published: ${missing.join(', ')}`);
    console.log(`  imports: ${wanted.length} verified published`);

    // Drill reachability, CHECKED AGAINST POSTGRES rather than the seed.
    const localDrills = new Map(ALL_ROWS.map((r) => [r.id, toArray(r.drills)]));
    const drillsFor = async (ids: string[]) => {
      const remoteIds = ids.filter((i) => !localDrills.has(i));
      const remote = remoteIds.length
        ? await c.query<{ id: string; drills: unknown }>('select id, drills from content_items where id = any($1::text[])', [remoteIds])
        : { rows: [] as Array<{ id: string; drills: unknown }> };
      const m = new Map(remote.rows.map((r) => [r.id, toArray(r.drills)]));
      return (id: string) => localDrills.get(id) ?? m.get(id) ?? [];
    };

    const need = async (sectionType: string, drill: string) => {
      const ids = [...new Set(SECTIONS.filter((s) => s.type === sectionType)
        .flatMap((s) => (s as { itemIds?: string[] }).itemIds ?? []))];
      if (!ids.length) return;
      const get = await drillsFor(ids);
      for (const id of ids) {
        if (!get(id).includes(drill)) die(`${sectionType} names ${id}, which does not carry the ${drill} drill`);
      }
      console.log(`  ${sectionType}: all ${ids.length} items carry ${drill}`);
    };
    await need('dictation', 'dictation');
    await need('practice', 'voiceflash');

    // EVERY deckTranche ID CARRIES `flashcard`, which is what makes a tranche
    // release actually produce a card. `fr.a1.deplacements.014` carries
    // {flashcard} and nothing else, which is why it is tranche-released and is
    // named by no practice or dictation section.
    const tranche = [...new Set(DECK_TRANCHE.flat())];
    const getT = await drillsFor(tranche);
    const noCard = tranche.filter((id) => !getT(id).includes('flashcard'));
    if (noCard.length) die(`${noCard.length} deckTranche id(s) carry no flashcard drill, so they release nothing: ${noCard.join(', ')}`);
    console.log(`  deckTranche: all ${tranche.length} ids carry flashcard`);

    // NO QUEBEC ROW CARRIES voiceflash IN THIS LESSON. Collation C3 rule 2,
    // enforced by the drill array rather than by intention: a row without
    // voiceflash cannot reach a speak drill even if a later edit names it in one.
    const qcIds = [...QC_ROWS.map((r) => r.id), ...IMPORTED.quebec];
    const getQ = await drillsFor(qcIds);
    const speakable = qcIds.filter((id) => getQ(id).includes('voiceflash'));
    if (speakable.length) {
      const authored = QC_ROWS.map((r) => r.id).filter((i) => speakable.includes(i));
      if (authored.length) die(`authored Quebec row(s) carry voiceflash and are therefore producible: ${authored.join(', ')}. Recognition only.`);
      console.log(`  quebec: ${speakable.join(', ')} is a SHIPPED row this build did not author and does not widen; noted, not changed`);
    }
    console.log(`  quebec: ${QC_ROWS.length} authored rows, none carrying voiceflash`);

    // The unit row, re-probed rather than trusted.
    const unitRow = await c.query<{ body: Record<string, unknown> }>(
      "select body from content_units where kind='curriculum_unit' and body->>'id'=$1", [UNIT.id]);
    if (!unitRow.rows.length) die(`${UNIT.id} is not in content_units`);
    const unit = unitRow.rows[0].body as { canDo?: string; sub?: string; title?: string; themes?: string[]; lessonIds?: string[] };
    if (unit.canDo !== UNIT.canDo) die(`canDo drift.\n      db:    ${unit.canDo}\n      build: ${UNIT.canDo}`);
    if (unit.sub !== UNIT.sub) die(`sub drift.\n      db:    ${unit.sub}\n      build: ${UNIT.sub}`);
    if (unit.title !== UNIT.title) die(`title drift.\n      db:    ${unit.title}\n      build: ${UNIT.title}`);
    // BAND BLOCKING STEP 2 ALREADY LANDED FOR THIS UNIT. The prompt hands the
    // spine amendment to this build as its own work; it was already done, in
    // the spine file, in Postgres and in the seed, before this build started.
    if (!(unit.themes ?? []).includes(THEME)) die(`the unit row does not carry the theme ${THEME}; band blocking step 2 has not landed for this unit`);
    if ((unit.themes ?? []).includes('transport')) die("the unit row still carries the phantom theme 'transport'");
    console.log(`  unit row: title, sub and canDo match the build byte for byte; themes = [${(unit.themes ?? []).join(', ')}]`);

    if (DRY_RUN) { console.log('\n  DRY RUN: every guard passed, nothing written.\n'); return; }

    await c.query('begin');
    try {
      for (const r of ALL_ROWS) {
        await c.query(
          `insert into content_items (id, kind, level, theme, fr, en, ipa, respell, notes, tags, drills, version, status)
           values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,'published')
           on conflict (id) do update set kind=excluded.kind, level=excluded.level, theme=excluded.theme,
             fr=excluded.fr, en=excluded.en, ipa=excluded.ipa, respell=excluded.respell,
             notes=excluded.notes, tags=excluded.tags, drills=excluded.drills, version=excluded.version,
             status='published'`,
          [r.id, r.kind, r.level, r.theme, r.fr, r.en, r.ipa ?? null, r.respell ?? null,
            r.notes ?? null, r.tags ?? [], r.drills ?? [], r.version ?? 1]);
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

    // Read back. The COUNT, not the maximum: the maximum has been useless since
    // a2.10.l2 took .461..500, and a concurrent build can land inside a block.
    const afterTheme = await count(THEME);
    const afterA2 = await count(THEME, 'a2');
    const afterQc = await count(QC_THEME, 'a2');
    console.log(`\n  ${THEME}: ${beforeTheme} -> ${afterTheme} (+${afterTheme - beforeTheme}, authored ${TRANSPORT_ROWS.length})`);
    console.log(`  ${THEME} a2 slice: ${beforeA2} -> ${afterA2}`);
    console.log(`  ${QC_THEME} a2: ${beforeQc} -> ${afterQc} (+${afterQc - beforeQc}, authored ${QC_ROWS.length})`);

    const other = ROWS.filter((r) => OTHER_VOICES.includes(r.voice)).length;
    console.log(`  other party's voice: ${other}/${ROWS.length} = ${((other / ROWS.length) * 100).toFixed(1)}% (band floor ${OTHER_VOICE_FLOOR * 100}%)`);

    const rb = await c.query<{ id: string; fr: string }>(
      'select id, fr from content_items where id = any($1::text[]) order by id', [[...REPAIR_IDS]]);
    if (rb.rows.length !== 6) die(`read back ${rb.rows.length} of a2.07's repair rows, expected 6`);
    console.log(`  a2.07's frozen repair block: all 6 still published and cited by ${LESSON.id}`);
    console.log('\n  Applied. Next: pnpm tsx scripts/merge-transports-into-seed.ts\n');
  } finally {
    c.release();
    await pool.end();
  }
}

main();
