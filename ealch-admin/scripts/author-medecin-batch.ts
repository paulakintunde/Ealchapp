// a2.28.l1 « Chez le médecin » — apply the corpus, the lesson and the unit row
// to Postgres. Trail seq 27, the fourth unit of the A2 situations band.
//
//   pnpm content:medecin --dry     guards only, nothing written
//   pnpm content:medecin           the real apply, in one transaction
//   pnpm content:medecin --reapply re-run after an in-build correction
//
// This build writes into TWO themes: `symptomes` (.194-.227) and `corps`
// (.021-.024). It writes into `sante` NOT ONCE: that theme is a phantom with no
// themeMeta entry and `a1-24-corps.test.ts` pins it at zero GLOBALLY, so the
// first row authored there turns another unit's test red. Nobody edits that test.
import './env';
import {
  ALL_ROWS, ROWS, SYMPTOM_ROWS, CORPS_ROWS, UNIT, THEME, BODY_THEME,
  REPAIR_IDS, REPAIR_FR, IMPORTED, ID_FIRST, ID_LAST, BODY_FIRST, BODY_LAST,
  THEME_ROWS_BEFORE, THEME_A2_BEFORE, BODY_A2_BEFORE,
  OTHER_VOICE_FLOOR, OTHER_VOICES, QUEBEC_FORMS, PRONOUN_YEN_SHAPES, DICTEE_IDS,
  CONTRACTION_SHAPES, DEPUIS_TENSE_SHAPES, FORBIDDEN_FEMININES, FORBIDDEN_DRUGS,
  CORPS_GUARD_FLOOR, CORPS_GUARD_EXPECTED,
} from './data/medecin-corpus.ts';
import { LESSON, SECTIONS, ITEM_IDS, DECK_TRANCHE, SPEAK_ID } from './data/medecin-lesson.ts';
import { validateLesson, quizQuestions } from '../../ealch-v2/src/content/schema.ts';
import { validateDensity, hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';
import { assertReachable } from './lib/reachability.ts';

const DRY_RUN = process.argv.includes('--dry');
const REAPPLY = process.argv.includes('--reapply');
const die: (m: string) => never = (m) => { console.error(`\n  STOP: ${m}\n`); process.exit(1); };

/** THE REAL FOLD, copied from `answer.logic.ts:32` character for character. */
const fold = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
  .replace(/[/[\]()«».,!?;:]/g, '').replace(/[-·’']/g, '').replace(/\s+/g, '').trim();

/** `drills` is a Postgres enum array and arrives as the raw literal
 *  `{flashcard,review}`. A `.includes()` on the STRING lies. */
const toArray = (d: unknown): string[] =>
  Array.isArray(d) ? d as string[] : String(d ?? '').replace(/[{}"]/g, '').split(',').filter(Boolean);

/* ─── Guards that need no database ─────────────────────────────────────── */

function offlineGuards() {
  const allText = JSON.stringify(LESSON) + JSON.stringify(ALL_ROWS);

  /** THE LEARNER-FACING SURFACES, and the ownership guards below are scoped to
   *  THESE rather than to the whole lesson object.
   *
   *  The prompt words the assertion as "no mission, no drill step, no quiz why
   *  teaches au / à la / aux / à l'". `grammarAssumed` is the opposite of a
   *  teaching surface: it is the field whose entire job is to declare what this
   *  lesson leans on without teaching, and a2.28 leans on a1.24's contraction
   *  by design. A guard that walks it fires on the honest declaration and
   *  pushes the next author into deleting the declaration rather than the
   *  teaching, which is the wrong repair. Measured: this fired on
   *  `grammarAssumed` on the first run and on nothing else. */
  const learnerFacing = JSON.stringify(SECTIONS) + String(LESSON.intro ?? '') + JSON.stringify(LESSON.overview ?? {});

  // 1. NOT ONE ROW INTO `sante`. It is a phantom with no themeMeta entry, and
  //    `a1-24-corps.test.ts:80-87` pins it at zero across the WHOLE seed. The
  //    first row authored there fails another unit's test, and the supervisor
  //    has settled that nobody edits it.
  for (const r of ALL_ROWS) {
    if (r.theme === 'sante') die(`${r.id} is authored into the phantom theme 'sante'. a1-24-corps.test.ts pins it at zero globally.`);
    if (r.theme !== THEME && r.theme !== BODY_THEME) die(`${r.id} is in ${r.theme}, and this build writes only into ${THEME} and ${BODY_THEME}`);
  }

  // 2. ZERO REPAIR ROWS. Collation §1.6: a2.07 owns the move for all eight
  //    units. A fold test, so a later author cannot slip one in under different
  //    punctuation.
  const repairFolds = new Set(REPAIR_FR.map(fold));
  for (const r of ALL_ROWS) {
    if (repairFolds.has(fold(r.fr))) die(`${r.id} « ${r.fr} » is one of a2.07's six frozen repair rows. Cite it by itemId; this unit authors zero.`);
  }
  if (REPAIR_IDS.length !== 6) die(`the cited repair block holds ${REPAIR_IDS.length} ids and the contract is exactly six`);
  for (const id of REPAIR_IDS) {
    if (!id.startsWith('fr.a2.au-restaurant.')) die(`${id} is not in au-restaurant; the frozen block is a2.07's`);
  }

  // 3. a1.24 OWNS `avoir mal à` AND THE CONTRACTION, and it is THIS UNIT'S OWN
  //    PREREQ. Five of its sections are this material and two of its tests pin
  //    it. `avoir mal à` appears here as construction 1 only, cited, never
  //    explained. Nothing anywhere may teach au / à la / aux / à l'.
  for (const shape of CONTRACTION_SHAPES) {
    const hit = shape.exec(learnerFacing);
    if (hit) die(`the article contraction is being explained (« ${hit[0]} »). a1.24 owns it across five sections and two pinned tests; this unit cites it and never teaches it.`);
  }
  if (!/a1\.24/.test(allText)) die('a1.24 is never named by unit id, so construction 1 is being used without attribution');

  // 4. a2.18 OWNS `depuis` AND THE TENSE IT WANTS, with 280 occurrences and a
  //    dedicated trapDrill. The doctor asks `depuis quand ?` constantly, so the
  //    word is USED. Nothing may make its TENSE the difficulty.
  for (const shape of DEPUIS_TENSE_SHAPES) {
    const hit = shape.exec(learnerFacing);
    if (hit) die(`the tense depuis wants is being taught (« ${hit[0]} »). a2.18 owns it; use the word and cite the unit.`);
  }
  if (!/a2\.18/.test(allText)) die('a2.18 is never named by unit id, and depuis appears in this lesson');

  // 5. NO DRUG IS NAMED, AT ANY DOSE, ANYWHERE. Collation 1.13 rule 5, and it
  //    is permanent rather than interim. Generic instructions only.
  for (const drug of FORBIDDEN_DRUGS) {
    if (new RegExp(`(?<![\\p{L}])${drug}(?![\\p{L}])`, 'iu').test(allText)) {
      die(`the drug name « ${drug} » reached an authored string. No invented or real drug, at any dose, anywhere in this lesson.`);
    }
  }

  // 6. THE DISCLAIMER CARD. Paul settled it 2026-08-15, option B, and it is a
  //    build requirement rather than a question. It is now the house position
  //    for health-adjacent content, so the next such unit copies this shape.
  const ids = SECTIONS.map((s) => s.id);
  const nm = SECTIONS.find((s) => s.id === 's14-notmedical') as
    { type: string; layer?: string; cards?: unknown[]; itemIds?: string[] } | undefined;
  if (!nm) die('s14-notmedical is missing, and it is a build requirement');
  if (nm.type !== 'cardDeck') die(`s14-notmedical is a ${nm.type} and the contract is a cardDeck`);
  if (nm.layer !== 'more') die(`s14-notmedical is layer ${nm.layer}; it must be 'more' so a learner on the core path walks past it`);
  if ((nm.cards ?? []).length !== 1) die(`s14-notmedical holds ${(nm.cards ?? []).length} cards and the contract is EXACTLY ONE. A second card is scope creep and the next author copies it.`);
  if (nm.itemIds) die('s14-notmedical names itemIds, and it is scored nowhere');
  // Neighbours BY ID, not by index.
  const nmAt = ids.indexOf('s14-notmedical');
  if (ids[nmAt - 1] !== 's13-dosetrap') die(`s14-notmedical follows ${ids[nmAt - 1]}; it must follow s13-dosetrap, which is the last scored dosage surface`);
  if (ids[nmAt + 1] !== 's15-errors') die(`s14-notmedical precedes ${ids[nmAt + 1]}; it must precede s15-errors so it closes act 3 rather than opening act 4`);
  // s12-dose and s13-dosetrap are ONE teaching move in two parts. Nothing goes
  // between them.
  if (ids.indexOf('s13-dosetrap') - ids.indexOf('s12-dose') !== 1) {
    die('a section sits between s12-dose and s13-dosetrap, which are one teaching move in two parts');
  }
  // It is the ONLY disclaimer. No second one in the roundup or the intro.
  const outside = JSON.stringify(SECTIONS.filter((s) => s.id !== 's14-notmedical')) + String(LESSON.intro);
  for (const shape of [/not medical advice/i, /consult a (?:doctor|physician) before/i, /we are not (?:doctors|medical)/i]) {
    if (shape.test(outside)) die(`a second disclaimer appears outside s14-notmedical: ${shape}. One card, one place.`);
  }

  // 7. AT MOST ONE QUEBEC CARD, at layer 'more', and nothing on it scored.
  const qc = SECTIONS.find((s) => s.id === 's17-quebec') as { layer?: string; cards?: unknown[] } | undefined;
  if (!qc) die('s17-quebec is missing');
  if (qc.layer !== 'more') die("s17-quebec must be layer 'more'");
  if ((qc.cards ?? []).length !== 1) die(`s17-quebec holds ${(qc.cards ?? []).length} cards; collation C3 allows exactly one`);

  const quizSec = SECTIONS.find((s) => s.type === 'quiz')!;
  const scoredOptions: Array<{ where: string; text: string }> = [];
  for (const q of quizQuestions(quizSec)) {
    for (const o of ((q as { opts?: string[] }).opts ?? [])) scoredOptions.push({ where: `quiz « ${q.q} »`, text: o });
    for (const a of ((q as { accept?: string[] }).accept ?? [])) scoredOptions.push({ where: `quiz accept « ${q.q} »`, text: a });
    scoredOptions.push({ where: `quiz q « ${q.q} »`, text: q.q });
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
        die(`${where} carries the Quebec form « ${qf} » in a scored surface: « ${text} »`);
      }
    }
  }
  console.log(`  quebec guard: ${scoredOptions.length} scored strings checked against ${QUEBEC_FORMS.length} forms`);

  // 8. NO JOB-TITLE FEMININE IS MINTED. a2.30 owns it, band-wide.
  for (const f of FORBIDDEN_FEMININES) {
    if (new RegExp(`(?<![\\p{L}])${f}(?![\\p{L}])`, 'iu').test(allText)) {
      die(`the job-title feminine « ${f} » was minted here. a2.30 owns feminisation for all eight units.`);
    }
  }

  // 9. NOTHING USES `y` OR `en` AS A PRONOUN. Collation C8. Written against the
  //    PRONOUN's shapes: the preposition `en` is legal and appears in
  //    « en parler » on the label.
  for (const shape of PRONOUN_YEN_SHAPES) {
    const hit = shape.exec(allText);
    if (hit) die(`the pronoun y or en reached an authored string as « ${hit[0] }». C8 bans it band-wide.`);
  }

  // 10. THE BAND'S VOICE FLOOR, collation §1.5. The other party here is the
  //     doctor and the pharmacist, and this unit clears the floor by a distance
  //     because the doctor's voice is the whole of what was missing.
  const other = ROWS.filter((r) => OTHER_VOICES.includes(r.voice)).length;
  const pct = other / ROWS.length;
  if (pct < OTHER_VOICE_FLOOR) die(`only ${(pct * 100).toFixed(1)}% of authored rows are the other party's voice, and the floor is ${OTHER_VOICE_FLOOR * 100}%`);

  // 11. Ids inside their blocks, and the `corps` guard. `a1-24-corps.test.ts`
  //     counts every `corps` row with a numeric tail >= 294 and expects six.
  //     `theme` is band-agnostic, so an `fr.a2.corps.294` would count.
  for (const r of SYMPTOM_ROWS) {
    const n = Number(r.id.slice(-3));
    if (r.theme !== THEME) die(`${r.id} is in ${r.theme} and belongs in ${THEME}`);
    if (n < ID_FIRST || n > ID_LAST) die(`${r.id} is outside the ledger block .${ID_FIRST}-.${ID_LAST}`);
  }
  for (const r of CORPS_ROWS) {
    const n = Number(r.id.slice(-3));
    if (r.theme !== BODY_THEME) die(`${r.id} is in ${r.theme} and belongs in ${BODY_THEME}`);
    if (n < BODY_FIRST || n > BODY_LAST) die(`${r.id} is outside the ledger block .${BODY_FIRST}-.${BODY_LAST}`);
    if (n >= CORPS_GUARD_FLOOR) die(`${r.id} sits at or above ${CORPS_GUARD_FLOOR} and would be counted by a1-24-corps.test.ts's six-row guard`);
  }

  const seen = new Map<string, string>();
  for (const r of ALL_ROWS) {
    const k = `${r.theme}::${fold(r.fr)}`;
    if (seen.has(k)) die(`${r.id} « ${r.fr} » folds onto ${seen.get(k)} inside ${r.theme}`);
    seen.set(k, r.id);
  }

  // 12. No U+203F tie, and every respelling is CORRECT. Phrased that way
  //     deliberately: `hasPlainNasalFor` has documented blind spots, so a quiet
  //     checker is evidence and not proof. `médecin`, `comprimé` and
  //     `ordonnance` are all nasal-bearing.
  for (const r of ALL_ROWS) {
    if (/‿/.test(r.respell ?? '')) die(`${r.id} carries a U+203F tie in its respelling`);
  }
  const flagged = ALL_ROWS.filter((r) => hasPlainNasalFor(r.fr, r.respell ?? ''));
  if (flagged.length) die(`respelling(s) closing a nasal with a plain n or m: ${flagged.map((r) => `${r.id} ${r.respell}`).join(', ')}`);

  // 13. THE BAND RULE ON THE ANSWER FOLD. Every typeIn and errorSpot must
  //     DISCRIMINATE. This bites hardest in the dosage material, which is
  //     exactly where an author reaches for a comma, and a comma folds away.
  for (const q of quizQuestions(quizSec)) {
    if (q.format !== 'typeIn' && q.format !== 'errorSpot') continue;
    const answer = (q as { answer?: string }).answer ?? '';
    const prompt = (q as { prompt?: string }).prompt;
    if (!answer) die(`${q.format} « ${q.q} » has no answer`);
    if (q.format === 'errorSpot') {
      if (!prompt) die(`errorSpot « ${q.q} » has no prompt, so the learner fixes a phrase that never appears`);
      if (fold(prompt) === fold(answer)) die(`errorSpot « ${q.q} » folds its prompt onto its answer: the item tests nothing`);
    }
    if (!((q as { accept?: string[] }).accept ?? []).some((a) => fold(a) === fold(answer))) {
      die(`${q.format} « ${q.q} » has an answer no accept entry folds onto`);
    }
  }

  // 14. NO QUIZ QUESTION TESTS THE CONTRACTION, THE TENSE OF `depuis`, OR THE
  //     REFLEXIVE PAST. The prompt calls this the assertion the test most needs.
  for (const q of quizQuestions(quizSec)) {
    const blob = JSON.stringify(q);
    for (const shape of [...CONTRACTION_SHAPES, ...DEPUIS_TENSE_SHAPES]) {
      if (shape.test(blob)) die(`quiz « ${q.q} » tests a neighbour's Owns: ${shape}`);
    }
    if (/s'est cass|se sont cass|s'est foul/i.test(blob)) die(`quiz « ${q.q} » tests the reflexive past, which is a2.22 and a2.23's`);
  }

  // 15. THE DICTÉE. Word mode, checked through the REAL `dicteeMode`, and no
  //     item carrying an apostrophe or a hyphen: `normalizeFr` strips both, so
  //     an item whose only difficulty is one tests nothing.
  const dictee = SECTIONS.find((s) => s.type === 'dictation') as { id: string; itemIds?: string[] } | undefined;
  if (!dictee?.itemIds?.length) die('the dictation section names no items');
  const byId = new Map(ALL_ROWS.map((r) => [r.id, r]));
  for (const id of dictee.itemIds) {
    const r = byId.get(id);
    if (!r) die(`${dictee.id} names ${id}, which this build does not author`);
    if (/['’-]/.test(r.fr)) die(`${id} « ${r.fr} » carries an apostrophe or a hyphen; normalizeFr strips both`);
    const mode = dicteeMode(r.fr);
    if (mode !== 'words') die(`${id} runs in ${mode} mode; the section claims word mode`);
  }
  if (dictee.itemIds.length !== DICTEE_IDS.length) die('the dictation section and DICTEE_IDS disagree');
  console.log(`  dictée: all ${dictee.itemIds.length} items in word mode, none carrying an apostrophe or a hyphen`);

  // 16. THE THREE CONSTRUCTIONS ARE ON ONE SCREEN, each with its English.
  //     REQUIRED LAYOUT: it is the Owns, and splitting it makes two small
  //     lessons.
  const three = SECTIONS.find((s) => s.id === 's03-three') as { cards?: Array<{ fr?: string; sub?: string }> } | undefined;
  if (!three) die('s03-three is missing');
  const frs = (three.cards ?? []).map((c) => c.fr ?? '').join(' ');
  for (const shape of [/j'ai mal à la tête/i, /j'ai de la fièvre/i, /je tousse/i]) {
    if (!shape.test(frs)) die(`s03-three does not show all three constructions: missing ${shape}`);
  }
  for (const c of (three.cards ?? [])) {
    if (!c.sub) die('every card in s03-three needs its English beside it, which is the required layout');
  }

  // 17. GROUP ITEMS USE `note`, NEVER `sub`. `sub` on a groupDrill item draws
  //     NOTHING; a2.07 shipped 33 blank lines that way and only the admin
  //     typecheck saw it.
  for (const s of SECTIONS) {
    if (s.type !== 'groupDrill') continue;
    for (const g of ((s as { groups?: Array<{ items?: Array<Record<string, unknown>> }> }).groups ?? [])) {
      for (const it of (g.items ?? [])) {
        if ('sub' in it) die(`${s.id} has a group item carrying sub, which draws nothing. Use note.`);
      }
    }
  }

  // 18. NO `itemIds` ON A cardDeck: only `practice` reads it.
  for (const s of SECTIONS) {
    if (s.type === 'cardDeck' && (s as { itemIds?: string[] }).itemIds) {
      die(`${s.id} carries itemIds on a cardDeck, which validates, publishes and draws nothing`);
    }
  }

  // 19. NO `table`, NO sheet, NO `deep` layer, NO imageRef. All explicit
  //     decisions rather than omissions.
  if (SECTIONS.some((s) => s.type === 'table')) die('no table in this lesson: it is at zero across the shipped corpus and a2.07 was to try it first');
  if ((LESSON.sheets ?? []).length) die('no reference sheet, and therefore no cheatSheet, which draws its title and nothing else inside one');
  if (SECTIONS.some((s) => (s as { layer?: string }).layer === 'deep')) die('no deep layer in this lesson');
  if (/"imageRef"/.test(allText)) die('no imageRef: a1.24 authors zero and pins it at zero');

  // 20. The lesson itself.
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

  if (SECTIONS.filter((s) => s.type === 'quiz').length !== 1) die('exactly one quiz section, always');

  // 21. ACT 3 IS THE HEAVIEST, which doctrine §B.5 requires and the prompt asks
  //     the report to show.
  const acts = LESSON.acts ?? [];
  const sizes = acts.map((a) => a.sections.length);
  if (sizes[2] <= sizes[1]) die(`act 3 has ${sizes[2]} missions and act 2 has ${sizes[1]}; act 3 must be the heaviest`);
  if (!sizes.every((n) => n <= sizes[2])) die(`act 3 is not the largest act: ${sizes.join(', ')}`);
  console.log(`  acts: ${sizes.join(' / ')} missions, act 3 is the heaviest`);

  // 22. PRACTICE IS MANDATORY. `lesson-contract.test.ts:505` mirrors the
  //     publish gate, and nothing in this band said so until the consistency
  //     pass found it.
  const practice = SECTIONS.filter((s) => s.type === 'practice');
  if (!practice.length) die('lesson-contract.test.ts:505 fails a teaching lesson with no practice section');
  for (const p of practice) {
    if (!((p as { itemIds?: string[] }).itemIds ?? []).length) die('a practice section with an empty itemIds fails the publish gate');
    if ((p as { skill?: string }).skill === 'write') die("practice skill 'write' draws no writing surface");
  }
  if (practice[0].id !== SPEAK_ID) die(`the practice section is ${practice[0].id} and the lesson exports ${SPEAK_ID}`);
  if (!ITEM_IDS.length) die('Lesson.itemIds is empty');
  if (DECK_TRANCHE.length !== acts.length) die(`deckTranche has ${DECK_TRANCHE.length} arrays and the lesson has ${acts.length} acts`);

  // 23. `swipe` on commonErrors, or it renders blank. Pinned by a1.24's test.
  for (const s of SECTIONS) {
    if (s.type === 'commonErrors' && (s as { swipe?: boolean }).swipe !== true) die(`${s.id} is a commonErrors without swipe`);
  }

  // 24. THE STEPPED TRAP SHAPE, and `size` comes OFF a stepped trapDrill.
  for (const s of SECTIONS) {
    if (s.type !== 'trapDrill') continue;
    const kinds = ((s as { steps?: Array<{ kind: string; gate?: boolean }> }).steps ?? []).map((x) => x.kind);
    if (kinds.join(',') !== 'rule,cards,audio,drill') die(`${s.id} steps are ${kinds.join(',')}; the A2 band has one trap shape`);
    if (!((s as { steps?: Array<{ gate?: boolean }> }).steps ?? []).at(-1)?.gate) die(`${s.id}'s drill step is not gated`);
    if ((s as { swipe?: boolean }).swipe !== true) die(`${s.id} has no swipe`);
    if ((s as { size?: string }).size) die(`${s.id} carries size, which comes off a stepped trapDrill`);
  }

  // 25. BOTH BLIND LISTENING SECTIONS CARRY THE FLAG, and their questions ask
  //     HOW MANY or WHEN or WHICH, never "what did you hear". That survives the
  //     flag being absent, which is what the prompt asked for.
  for (const id of ['s07-asks', 's12-dose']) {
    const l = SECTIONS.find((s) => s.id === id) as
      { hideLines?: boolean; audio?: { audioFirst?: boolean }; lines?: Array<{ fr: string }>; questions?: Array<{ q: string }> } | undefined;
    if (!l) die(`${id} is missing`);
    if (l.hideLines !== true && l.audio?.audioFirst !== true) die(`${id} carries neither hideLines nor audio.audioFirst, so it is a reading exercise`);
    for (const q of (l.questions ?? [])) {
      if (/what did you hear/i.test(q.q)) die(`${id} « ${q.q} » asks what was heard, which a visible transcript answers`);
      for (const ln of (l.lines ?? [])) {
        if (fold(q.q).includes(fold(ln.fr))) die(`${id} « ${q.q} » reprints its line, so hideLines buys nothing`);
      }
    }
  }

  // 26. Every quiz question carries a why and a ref; every listenChoose can
  //     speak something other than its own answer.
  const sectionIds = new Set(SECTIONS.map((s) => s.id));
  let lc = 0, mcq = 0;
  for (const q of quizQuestions(quizSec)) {
    if (!q.why) die(`quiz question « ${q.q} » has no why`);
    if (!q.ref) die(`quiz question « ${q.q} » has no ref`);
    if (!sectionIds.has(q.ref as string)) die(`quiz « ${q.q} » refs ${q.ref}, which is not a section here`);
    if (q.ref === 's14-notmedical') die('a quiz question refs the disclaimer card, which is scored nowhere');
    if (q.format === 'mcq') mcq += 1;
    if (q.format !== 'listenChoose') continue;
    lc += 1;
    if (!(q as { say?: string }).say && !(q as { audio?: { clip?: string } }).audio?.clip) {
      die(`listenChoose « ${q.q} » carries neither say nor audio.clip, so the card would speak the answer aloud`);
    }
  }
  const total = quizQuestions(quizSec).length;
  if (mcq > total / 2) die(`${mcq} of ${total} questions are mcq, and at most half is house style`);
  console.log(`  quiz: ${total} questions, ${lc} listenChoose, ${mcq} mcq`);

  // 27. House copy rules.
  if (/—/.test(allText)) die('an em dash reached an authored string');
  if (/honest/i.test(allText)) die('"honest" reached an authored string');
  if (/pourriez-vous/i.test(allText)) die("pourriez-vous is a2.29's");
  if (/\bconditional\b/i.test(allText)) die('the conditional is named, and collation 1.8 keeps it unnamed at this level');

  console.log('  offline guards: all passed');
}

/* ─── The apply ────────────────────────────────────────────────────────── */

async function main() {
  console.log(`\n  a2.28.l1 « ${UNIT.sub} » -> ${THEME} + ${BODY_THEME}${DRY_RUN ? '   [DRY RUN]' : ''}\n`);
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
    const beforeBody = await count(BODY_THEME, 'a2');
    console.log(`  ${THEME}: ${beforeTheme} published before (measured ${THEME_ROWS_BEFORE}), a2 slice ${beforeA2} (measured ${THEME_A2_BEFORE})`);
    console.log(`  ${BODY_THEME} a2: ${beforeBody} published before (measured ${BODY_A2_BEFORE})`);

    // ZERO ROWS IN `sante`, IN POSTGRES, checked rather than assumed.
    const sante = await count('sante');
    if (sante !== 0) die(`${sante} row(s) exist in the phantom theme 'sante'; a1-24-corps.test.ts expects zero`);

    // THE `corps` >= 294 GUARD, checked BEFORE the apply.
    const g = await c.query<{ n: string }>(
      "select count(*)::text n from content_items where theme=$1 and (substring(id from '\\d+$'))::int >= $2", [BODY_THEME, CORPS_GUARD_FLOOR]);
    if (Number(g.rows[0].n) !== CORPS_GUARD_EXPECTED) {
      die(`${g.rows[0].n} corps rows sit at or above ${CORPS_GUARD_FLOOR} and a1-24-corps.test.ts expects exactly ${CORPS_GUARD_EXPECTED}`);
    }
    console.log(`  corps guard: exactly ${CORPS_GUARD_EXPECTED} rows at or above ${CORPS_GUARD_FLOOR}, unchanged by this build`);

    // The id blocks must still be free. Check the WHOLE block, not the maximum:
    // a concurrent build can land below your top.
    const mine = new Set(ALL_ROWS.map((r) => r.id));
    const taken = await c.query<{ id: string }>('select id from content_items where id = any($1::text[])', [[...mine]]);
    if (taken.rows.length && !REAPPLY) {
      die(`${taken.rows.length} of this build's ids are already in Postgres. Re-run with --reapply if they are yours.\n      ${taken.rows.slice(0, 6).map((t) => t.id).join(', ')}`);
    }
    if (taken.rows.length) console.log(`  --reapply: updating ${taken.rows.length} rows this build already owns`);

    // No intra-theme fold collision against what is published. THIS IS THE
    // GUARD FOR THE HEADLINE FINDING: `symptomes` holds 334 published rows and
    // the seed showed ZERO, so anybody measuring on the seed would re-author a
    // whole symptom lexicon and `flashhub-coverage.test.ts` would not see it.
    const pub = await c.query<{ id: string; fr: string; theme: string }>(
      "select id, fr, theme from content_items where status='published' and theme = any($1::text[])", [[THEME, BODY_THEME]]);
    const byFold = new Map<string, string>();
    for (const r of pub.rows) { if (!mine.has(r.id)) byFold.set(`${r.theme}::${fold(r.fr)}`, r.id); }
    for (const r of ALL_ROWS) {
      const hit = byFold.get(`${r.theme}::${fold(r.fr)}`);
      if (hit) die(`${r.id} « ${r.fr} » already exists in ${r.theme} as ${hit}. Import it, do not author it.`);
    }
    console.log(`  fold sweep: ${ALL_ROWS.length} authored rows against ${pub.rows.length} published, zero intra-theme collisions`);

    // Every imported id is published and therefore reachable.
    const wanted = [...new Set(Object.values(IMPORTED).flat())];
    const found = await c.query<{ id: string; status: string }>('select id, status from content_items where id = any($1::text[])', [wanted]);
    const okIds = new Set(found.rows.filter((r) => r.status === 'published').map((r) => r.id));
    const missing = wanted.filter((w) => !okIds.has(w));
    if (missing.length) die(`imported id(s) not published: ${missing.join(', ')}`);
    console.log(`  imports: ${wanted.length} verified published`);

    // Drill reachability, CHECKED AGAINST POSTGRES rather than the seed.
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

    const tranche = [...new Set(DECK_TRANCHE.flat())];
    const getT = await drillsFor(tranche);
    const noCard = tranche.filter((id) => !getT(id).includes('flashcard'));
    if (noCard.length) die(`${noCard.length} deckTranche id(s) carry no flashcard drill, so they release nothing: ${noCard.join(', ')}`);
    console.log(`  deckTranche: all ${tranche.length} ids carry flashcard`);

    // The unit row, re-probed rather than trusted.
    const unitRow = await c.query<{ body: Record<string, unknown> }>(
      "select body from content_units where kind='curriculum_unit' and body->>'id'=$1", [UNIT.id]);
    if (!unitRow.rows.length) die(`${UNIT.id} is not in content_units`);
    const unit = unitRow.rows[0].body as { canDo?: string; sub?: string; title?: string; themes?: string[]; lessonIds?: string[] };
    if (unit.canDo !== UNIT.canDo) die(`canDo drift.\n      db:    ${unit.canDo}\n      build: ${UNIT.canDo}`);
    if (unit.sub !== UNIT.sub) die(`sub drift.\n      db:    ${unit.sub}\n      build: ${UNIT.sub}`);
    if (unit.title !== UNIT.title) die(`title drift.\n      db:    ${unit.title}\n      build: ${UNIT.title}`);
    // BAND BLOCKING STEP 2 ALREADY LANDED FOR THIS UNIT, exactly as it had for
    // a2.27. The prompt hands the spine amendment to this build as its own work
    // and it was already done in all three places before the build started.
    if (!(unit.themes ?? []).includes(THEME)) die(`the unit row does not carry ${THEME}; band blocking step 2 has not landed`);
    if ((unit.themes ?? []).includes('sante')) die("the unit row still carries the phantom theme 'sante'");
    console.log(`  unit row: title, sub and canDo match byte for byte; themes = [${(unit.themes ?? []).join(', ')}]`);

    if (DRY_RUN) { console.log('\n  DRY RUN: every guard passed, nothing written.\n'); return; }

    await c.query('begin');
    try {
      for (const r of ALL_ROWS) {
        await c.query(
          `insert into content_items (id, kind, level, theme, fr, en, ipa, respell, notes, tags, drills, skill, register, version, status)
           values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,'published')
           on conflict (id) do update set kind=excluded.kind, level=excluded.level, theme=excluded.theme,
             fr=excluded.fr, en=excluded.en, ipa=excluded.ipa, respell=excluded.respell,
             notes=excluded.notes, tags=excluded.tags, drills=excluded.drills,
             skill=excluded.skill, register=excluded.register, version=excluded.version,
             status='published'`,
          [r.id, r.kind, r.level, r.theme, r.fr, r.en, r.ipa ?? null, r.respell ?? null,
            r.notes ?? null, r.tags ?? [], r.drills ?? [],
            (r as { skill?: string }).skill ?? null, (r as { register?: string }).register ?? null,
            r.version ?? 1]);
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

    const afterTheme = await count(THEME);
    const afterA2 = await count(THEME, 'a2');
    const afterBody = await count(BODY_THEME, 'a2');
    console.log(`\n  ${THEME}: ${beforeTheme} -> ${afterTheme} (+${afterTheme - beforeTheme}, authored ${SYMPTOM_ROWS.length})`);
    console.log(`  ${THEME} a2 slice: ${beforeA2} -> ${afterA2}`);
    console.log(`  ${BODY_THEME} a2: ${beforeBody} -> ${afterBody} (+${afterBody - beforeBody}, authored ${CORPS_ROWS.length})`);

    const gAfter = await c.query<{ n: string }>(
      "select count(*)::text n from content_items where theme=$1 and (substring(id from '\\d+$'))::int >= $2", [BODY_THEME, CORPS_GUARD_FLOOR]);
    if (Number(gAfter.rows[0].n) !== CORPS_GUARD_EXPECTED) die(`the corps >= ${CORPS_GUARD_FLOOR} count moved to ${gAfter.rows[0].n}`);

    const other = ROWS.filter((r) => OTHER_VOICES.includes(r.voice)).length;
    console.log(`  other party's voice: ${other}/${ROWS.length} = ${((other / ROWS.length) * 100).toFixed(1)}% (band floor ${OTHER_VOICE_FLOOR * 100}%)`);

    const rb = await c.query<{ id: string }>('select id from content_items where id = any($1::text[])', [[...REPAIR_IDS]]);
    if (rb.rows.length !== 6) die(`read back ${rb.rows.length} of a2.07's repair rows, expected 6`);
    console.log(`  a2.07's frozen repair block: all 6 still published and cited by ${LESSON.id}`);
    console.log('\n  Applied. Next: pnpm tsx scripts/merge-medecin-into-seed.ts\n');
  } finally {
    c.release();
    await pool.end();
  }
}

main();
