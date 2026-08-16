// a2.26.l1 « Les courses & l'argent » — apply the corpus, the lesson and the
// unit row to Postgres. Trail seq 25, the second unit of the A2 situations band.
//
//   pnpm content:courses --dry     guards only, nothing written
//   pnpm content:courses           the real apply, in one transaction
//   pnpm content:courses --reapply re-run after an in-build correction
//
// This build writes into THREE themes and the split is not cosmetic:
//   `courses`                 the till transaction, per collation §5
//   `argent-quotidien`        money itself: coins, notes, change
//   `quebec-et-francophonie`  the two authored Quebec rows, per §C3 rule 3
//
// It writes into NONE of `nombres`, `expressions-de-quantite`, `marche` or
// `vetements`. Those are a1.27, a1.28, a1.29 and a1.23 populations.
//
// The guards below are the ones that would have caught this build's own
// mistakes. Four fired during authoring and are kept for the next person:
//
//   * the flashcard-in-tranche guard caught three imported rows carrying only
//     `dictation` (fr.a2.courses.092, .108 and fr.a1.argent-quotidien.017);
//   * the practice guard caught the MANDATORY practice section missing
//     entirely, because the prompt's own 24-mission table has no row for it;
//   * the dictée word-mode guard proved all six items run in word mode, which
//     is what the section's copy claims;
//   * the Quebec guard is the one collation §C3 asked for by name, and it is a
//     list rather than a sentence in a report, because a sentence cannot fail.
import './env';
import {
  ALL_ROWS, ROWS, COURSES_ROWS, MONEY_ROWS, QC_ROWS, UNIT, THEME, MONEY_THEME, QC_THEME,
  REPAIR_IDS, REPAIR_FR, IMPORTED, ID_FIRST, ID_LAST, MONEY_FIRST, MONEY_LAST,
  QC_FIRST, QC_LAST, THEME_ROWS_BEFORE, MONEY_ROWS_BEFORE, VENDOR_VOICE_FLOOR, QUEBEC_FORMS,
} from './data/courses-corpus.ts';
import { LESSON, SECTIONS, ITEM_IDS, DECK_TRANCHE, SAY_ID } from './data/courses-lesson.ts';
import { validateLesson, quizQuestions } from '../../ealch-v2/src/content/schema.ts';
import { validateDensity, hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';

const DRY_RUN = process.argv.includes('--dry');
const REAPPLY = process.argv.includes('--reapply');
// The annotation is on the VARIABLE, not the arrow. TypeScript only treats a
// call as a never-returning assertion, and therefore narrows what follows it,
// when the const carries an explicit type annotation. The other form reads
// identically and narrows nothing, which cost this build 17 typecheck errors
// inside guards that were themselves correct.
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
  // 1. ZERO REPAIR ROWS. Collation §1.6: a2.07 owns the move for all eight
  //    units. This is phrased as a FOLD test rather than a string test, so a
  //    later author cannot slip « pardon ? » in under different punctuation.
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
  //    already hit shipped sons.10 content. Band-wide rule, ledger §5.
  for (const r of ALL_ROWS) {
    if (/‿/.test(r.respell ?? '')) die(`${r.id} carries a U+203F tie in its respelling`);
  }

  // 3. The respelling is CORRECT. Phrased that way deliberately: the checker
  //    has five measured blind spots (Corrections §14.1, a2.07's §10, and this
  //    build's §12), so a quiet checker is evidence and not proof.
  const flagged = ALL_ROWS.filter((r) => hasPlainNasalFor(r.fr, r.respell ?? ''));
  if (flagged.length) die(`respelling(s) closing a nasal with a plain n or m: ${flagged.map((r) => `${r.id} ${r.respell}`).join(', ')}`);

  // 4. THE BAND'S VOICE FLOOR, collation §1.5. Measured over the two
  //    author-into themes; the Quebec rows are recognition vocabulary with no
  //    speaker and are excluded from both halves of the fraction.
  const vendor = ROWS.filter((r) => r.voice === 'vendor').length;
  const pct = vendor / ROWS.length;
  if (pct < VENDOR_VOICE_FLOOR) {
    die(`only ${(pct * 100).toFixed(1)}% of authored rows are in the vendor's voice, and the band floor is ${VENDOR_VOICE_FLOOR * 100}%`);
  }

  // 5. Ids inside the ledger blocks, each row in the theme its block belongs
  //    to, and no internal fold collisions.
  for (const r of COURSES_ROWS) {
    const n = Number(r.id.slice(-3));
    if (r.theme !== THEME) die(`${r.id} is in ${r.theme} and belongs in ${THEME}`);
    if (n < ID_FIRST || n > ID_LAST) die(`${r.id} is outside the ledger block .${ID_FIRST}-.${ID_LAST}`);
  }
  for (const r of MONEY_ROWS) {
    const n = Number(r.id.slice(-3));
    if (r.theme !== MONEY_THEME) die(`${r.id} is in ${r.theme} and belongs in ${MONEY_THEME}`);
    if (n < MONEY_FIRST || n > MONEY_LAST) die(`${r.id} is outside the ledger block .${MONEY_FIRST}-.${MONEY_LAST}`);
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

  // 6. NO QUEBEC FORM IS A CORRECT ANSWER AND NONE IS A DISTRACTOR.
  //    Collation §C3 rule 3, extended by this unit's §D rule 5. A form that is
  //    correct in Montreal and marked red is a defect a TEF Canada candidate
  //    will notice and be right about, so this walks every OPTION of every
  //    scored surface rather than only the correct ones.
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

  // 7. NO ARITHMETIC, anywhere. Collation §C3's own constraint and this unit's
  //    §D rule 4. Nothing may name a tax rate or ask for a sum.
  const allText = JSON.stringify(LESSON) + JSON.stringify(ALL_ROWS);
  for (const shape of [/\bTPS\b/, /\bTVQ\b/, /\d+\s*(?:%|pour cent)\s*de\s*taxe/i, /plus\s+(?:la\s+)?taxe/i]) {
    if (shape.test(allText)) die(`a tax rate or a plus-tax sum reached an authored string: ${shape}`);
  }

  // 8. THE BAND RULE ON THE ANSWER FOLD. Every typeIn and errorSpot must
  //    discriminate: the expected answer and the prompt it is correcting must
  //    NOT fold to the same string, or the item tests nothing.
  //    `03-ANSWER-FOLD-FACT.md`, and it applies to the dictée too.
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

  // 9. THE DICTÉE. Every item must be spelled in WORDS rather than digits, or
  //    `OneDictationWord` builds a tile bank of digits and a currency glyph.
  //    Checked through the REAL `dicteeMode` rather than by counting characters.
  const dictee = SECTIONS.find((s) => s.id === 's18-dictee') as { itemIds?: string[] } | undefined;
  if (!dictee?.itemIds?.length) die('s18-dictee names no items');
  const byId = new Map(ALL_ROWS.map((r) => [r.id, r]));
  for (const id of dictee.itemIds) {
    const r = byId.get(id);
    if (!r) die(`s18-dictee names ${id}, which this build does not author (a dictée item must be one of ours so the mode can be checked)`);
    if (/[0-9]/.test(r.fr)) die(`${id} « ${r.fr} » carries a digit; the dictée tile bank is built from fr and a digit produces a digit tile`);
    if (/[€$]/.test(r.fr)) die(`${id} « ${r.fr} » carries a currency glyph, which becomes a tile the learner cannot type`);
    const mode = dicteeMode(r.fr);
    if (mode !== 'words') die(`${id} runs in ${mode} mode; s18-dictee's copy claims word mode for all six`);
  }
  console.log(`  dictée: all ${dictee.itemIds.length} items spelled in words, all in word mode`);

  // 10. The lesson itself.
  const issues = validateLesson(LESSON as never) as unknown[];
  if (Array.isArray(issues) && issues.length) die(`validateLesson: ${issues.length} issue(s)\n${issues.slice(0, 8).map((i) => `      ${JSON.stringify(i)}`).join('\n')}`);
  const dens = validateDensity(LESSON as never) as unknown;
  const dIssues = Array.isArray(dens) ? dens : ((dens as { issues?: unknown[] }).issues ?? []);
  if (dIssues.length) die(`validateDensity: ${dIssues.length} issue(s)\n${dIssues.slice(0, 8).map((i) => `      ${JSON.stringify(i)}`).join('\n')}`);

  if (SECTIONS.filter((s) => s.type === 'quiz').length !== 1) die('exactly one quiz section, always: a second is silently never rendered');

  // 11. PRACTICE IS MANDATORY. `lesson-contract.test.ts:505` mirrors the
  //     publish gate. The prompt's own 24-mission table has NO practice row,
  //     which is why this guard exists rather than being assumed.
  const practice = SECTIONS.filter((s) => s.type === 'practice');
  if (!practice.length) die('lesson-contract.test.ts:505 fails a teaching lesson with no practice section');
  for (const p of practice) {
    if (!((p as { itemIds?: string[] }).itemIds ?? []).length) die('a practice section with an empty itemIds fails the publish gate');
    if ((p as { skill?: string }).skill === 'write') die("practice skill 'write' draws no writing surface");
  }
  if (practice[0].id !== SAY_ID) die(`the practice section is ${practice[0].id} and the lesson exports ${SAY_ID}`);
  if (!ITEM_IDS.length) die('Lesson.itemIds is empty, so the lesson releases no SRS cards');
  if (DECK_TRANCHE.length !== (LESSON.acts ?? []).length) die(`deckTranche has ${DECK_TRANCHE.length} arrays and the lesson has ${(LESSON.acts ?? []).length} acts`);

  // 12. `swipe` on commonErrors, or it draws a blank screen.
  for (const s of SECTIONS) {
    if (s.type === 'commonErrors' && (s as { swipe?: boolean }).swipe !== true) {
      die(`${s.id} is a commonErrors without swipe: it renders its own deck only when swipe is present`);
    }
  }

  // 13. THE STEPPED TRAP SHAPE. `lesson-contract.test.ts` has enforced
  //     rule > cards > audio > drill with a gate since 2026-08-13.
  for (const s of SECTIONS) {
    if (s.type !== 'trapDrill') continue;
    const kinds = ((s as { steps?: Array<{ kind: string; gate?: boolean }> }).steps ?? []).map((x) => x.kind);
    if (kinds.join(',') !== 'rule,cards,audio,drill') die(`${s.id} steps are ${kinds.join(',')}; the A2 band has one trap shape and it is rule,cards,audio,drill`);
    const last = ((s as { steps?: Array<{ gate?: boolean }> }).steps ?? []).at(-1);
    if (!last?.gate) die(`${s.id}'s drill step is not gated`);
    if ((s as { swipe?: boolean }).swipe !== true) die(`${s.id} has no swipe`);
  }

  // 14. Every quiz question carries a why; every listenChoose can speak
  //     something other than its own answer.
  for (const q of quizQuestions(quizSec)) {
    if (!q.why) die(`quiz question « ${q.q} » has no why`);
    if (q.format === 'listenChoose' && !(q as { say?: string }).say && !(q as { audio?: { clip?: string } }).audio?.clip) {
      die(`listenChoose « ${q.q} » carries neither say nor audio.clip, so the card would speak the answer aloud`);
    }
  }

  // 15. s07-heard is the funded engineering item's mission and it is worthless
  //     without the flag. It is also worthless if a question reprints its line:
  //     a2.07 found on device that the question rail renders UNDER the masked
  //     cards, so a quoted line hands the words straight back.
  const heard = SECTIONS.find((s) => s.id === 's07-heard') as
    { hideLines?: boolean; lines?: Array<{ fr: string }>; questions?: Array<{ q: string }> } | undefined;
  if (!heard) die('s07-heard is missing');
  if (heard.hideLines !== true) die('s07-heard without hideLines is a reading exercise with a play button, and its en gloss hands over the figure in English');
  for (const q of (heard.questions ?? [])) {
    for (const l of (heard.lines ?? [])) {
      if (fold(q.q).includes(fold(l.fr))) die(`s07-heard question « ${q.q} » reprints its line, so hideLines buys nothing`);
    }
  }

  // 16. House copy rules, and the boundaries this unit must not cross.
  if (/—/.test(allText)) die('an em dash reached an authored string');
  if (/honest/i.test(allText)) die('"honest" reached an authored string (the substring, so "dishonest" is caught too)');
  if (/pourriez-vous/i.test(allText)) die('pourriez-vous is reserved for a2.29 and the a2.13 amendment has not been applied');
  // The register LADDER is a2.29's, once, for all eight (collation §C5). One
  // card contrasting je veux with je voudrais is permitted and is s05's; the
  // word "ladder" describing a politeness gradient is not.
  if (/\bladder\b/i.test(JSON.stringify(LESSON).replace(/repair ladder/gi, ''))) {
    die('the word "ladder" appears outside "repair ladder": the politeness ladder is a2.29\'s, once, for all eight');
  }
  console.log('  offline guards: all passed');
}

/* ─── The apply ────────────────────────────────────────────────────────── */

async function main() {
  console.log(`\n  a2.26.l1 « ${UNIT.sub} » -> ${THEME} + ${MONEY_THEME} + ${QC_THEME}${DRY_RUN ? '   [DRY RUN]' : ''}\n`);
  offlineGuards();

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  try {
    const count = async (theme: string) => Number((await c.query<{ n: string }>(
      "select count(*)::text n from content_items where theme=$1 and status='published'", [theme])).rows[0].n);
    const beforeCourses = await count(THEME);
    const beforeMoney = await count(MONEY_THEME);
    const beforeQc = await count(QC_THEME);
    console.log(`  ${THEME}: ${beforeCourses} published before (the build measured ${THEME_ROWS_BEFORE})`);
    console.log(`  ${MONEY_THEME}: ${beforeMoney} published before (the build measured ${MONEY_ROWS_BEFORE})`);
    console.log(`  ${QC_THEME}: ${beforeQc} published before`);

    // The id blocks must still be free. A concurrent build can land BELOW your
    // top without a highest-id check seeing it, so this checks the WHOLE block
    // rather than the maximum. Three concurrent builds are live in this band
    // and the seed moved from v48 to v49 during this build's pre-flight.
    const mine = new Set(ALL_ROWS.map((r) => r.id));
    const taken = await c.query<{ id: string }>(
      'select id from content_items where id = any($1::text[])', [[...mine]]);
    if (taken.rows.length && !REAPPLY) {
      die(`${taken.rows.length} of this build's ids are already in Postgres. If they are yours and you are correcting them, re-run with --reapply. Otherwise a concurrent build has taken part of a block.\n      ${taken.rows.slice(0, 6).map((t) => t.id).join(', ')}${taken.rows.length > 6 ? ' ...' : ''}`);
    }
    if (taken.rows.length) console.log(`  --reapply: updating ${taken.rows.length} rows this build already owns`);

    // No intra-theme fold collision against what is already published, across
    // all three themes, ignoring this build's own rows so a re-apply does not
    // collide with itself.
    const pub = await c.query<{ id: string; fr: string; theme: string }>(
      "select id, fr, theme from content_items where status='published' and theme = any($1::text[])",
      [[THEME, MONEY_THEME, QC_THEME]]);
    const byFold = new Map<string, string>();
    for (const r of pub.rows) { if (!mine.has(r.id)) byFold.set(`${r.theme}::${fold(r.fr)}`, r.id); }
    for (const r of ALL_ROWS) {
      const hit = byFold.get(`${r.theme}::${fold(r.fr)}`);
      if (hit) die(`${r.id} « ${r.fr} » already exists in ${r.theme} as ${hit}. Import it, do not author it.`);
    }

    // Every imported id is published and therefore reachable.
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
    // release actually produce a card. Three imported rows were dropped from
    // these arrays for failing exactly this: fr.a2.courses.092,
    // fr.a2.courses.108 and fr.a1.argent-quotidien.017 all carry `dictation`
    // and nothing else. They are shipped A1/A2 rows and this build does not
    // widen another lesson's drill arrays to suit itself.
    const tranche = [...new Set(DECK_TRANCHE.flat())];
    const getT = await drillsFor(tranche);
    const noCard = tranche.filter((id) => !getT(id).includes('flashcard'));
    if (noCard.length) die(`${noCard.length} deckTranche id(s) carry no flashcard drill, so they release nothing: ${noCard.join(', ')}`);
    console.log(`  deckTranche: all ${tranche.length} ids carry flashcard`);

    // NO QUEBEC ROW CARRIES voiceflash IN THIS LESSON. §D rule 3, enforced by
    // the drill array rather than by intention: a row without voiceflash cannot
    // reach a speak drill even if a later edit names it in one.
    const qcIds = [...QC_ROWS.map((r) => r.id), ...IMPORTED.quebec];
    const getQ = await drillsFor(qcIds);
    const speakable = qcIds.filter((id) => getQ(id).includes('voiceflash'));
    if (speakable.length) die(`Quebec row(s) carry voiceflash and are therefore producible: ${speakable.join(', ')}. Recognition only.`);
    console.log(`  quebec: ${qcIds.length} rows, none carrying voiceflash`);

    // The unit row, re-probed rather than trusted. The spine and the database
    // disagree for the batch-1 and batch-2 A2 units and no correction exists
    // for this one.
    const unitRow = await c.query<{ body: Record<string, unknown> }>(
      "select body from content_units where kind='curriculum_unit' and body->>'id'=$1", [UNIT.id]);
    if (!unitRow.rows.length) die(`${UNIT.id} is not in content_units`);
    const unit = unitRow.rows[0].body as { canDo?: string; sub?: string; title?: string; themes?: string[]; lessonIds?: string[] };
    if (unit.canDo !== UNIT.canDo) die(`canDo drift.\n      db:    ${unit.canDo}\n      build: ${UNIT.canDo}`);
    if (unit.sub !== UNIT.sub) die(`sub drift (check the curly apostrophe).\n      db:    ${unit.sub}\n      build: ${UNIT.sub}`);
    if (unit.title !== UNIT.title) die(`title drift.\n      db:    ${unit.title}\n      build: ${UNIT.title}`);
    for (const t of [THEME, MONEY_THEME]) {
      if (!(unit.themes ?? []).includes(t)) die(`the unit row does not carry the theme ${t}; band blocking step 2 has not landed for this unit`);
    }
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
    const afterCourses = await count(THEME);
    const afterMoney = await count(MONEY_THEME);
    const afterQc = await count(QC_THEME);
    console.log(`\n  ${THEME}: ${beforeCourses} -> ${afterCourses} (+${afterCourses - beforeCourses}, authored ${COURSES_ROWS.length})`);
    console.log(`  ${MONEY_THEME}: ${beforeMoney} -> ${afterMoney} (+${afterMoney - beforeMoney}, authored ${MONEY_ROWS.length})`);
    console.log(`  ${QC_THEME}: ${beforeQc} -> ${afterQc} (+${afterQc - beforeQc}, authored ${QC_ROWS.length})`);

    const vendor = ROWS.filter((r) => r.voice === 'vendor').length;
    console.log(`  vendor voice: ${vendor}/${ROWS.length} = ${((vendor / ROWS.length) * 100).toFixed(1)}% (band floor ${VENDOR_VOICE_FLOOR * 100}%)`);

    const rb = await c.query<{ id: string; fr: string }>(
      'select id, fr from content_items where id = any($1::text[]) order by id', [[...REPAIR_IDS]]);
    if (rb.rows.length !== 6) die(`read back ${rb.rows.length} of a2.07's repair rows, expected 6`);
    console.log(`  a2.07's frozen repair block: all 6 still published and cited by ${LESSON.id}`);
    console.log('\n  Applied. Next: pnpm tsx scripts/merge-courses-into-seed.ts\n');
  } finally {
    c.release();
    await pool.end();
  }
}

main();
