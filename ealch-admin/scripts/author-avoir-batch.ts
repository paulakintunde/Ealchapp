// Content Batch — Le verbe avoir: the a1.07.l1 full-rig lesson.
//
// a1.07 ships today with lessonIds: [] and a theme binding that points at
// nothing. This batch authors the lesson, the 15 corpus entries it could not
// build without, and the 34 rows it imports from seven themes outside the seed
// cut, as the seventh A1 lesson on Lesson Architecture v2.
//
// The content and the corpus live in scripts/data/ (avoir-lesson, -corpus and
// -terms) rather than inline here, because all three are large and all three are
// checked by the app's own test suite at authoring time:
//
//   ealch-v2/src/content/a1-07-avoir.test.ts
//
// That test is the real gate. It runs in CI on every push, imports these files
// directly, and asserts the whole self-check list: the mission spine in order,
// the act structure, the exam's questions across seven rounds with a why and a
// ref on every one, the reframe verbatim, all six forms taught AND tested, the
// have/be swap
// DEMONSTRATED on a pair rather than asserted, the age rule taught with a number
// the learner already owns, all fourteen expressions present with the three that
// take a complement kept as a distinct group, the past-tense ambush taught with
// no possession card using a passé composé example, the pas de / pas contrast on
// one surface, no verb other than avoir conjugated, no metalinguistic corpus row
// used as a learner sentence, every inlined respelling passing the nasal
// convention, every dictation item landing in LETTER mode, no `prompt` authored
// on an item this lesson displays, and seed parity derived rather than
// hardcoded. This script re-runs the shared validators before it writes so a
// broken batch dies before it touches the database, but the durable check is the
// test.
//
// ── THE UNIT EDIT, WHICH IS NOT SILENT ─────────────────────────────────────
//
// a1.07 declares `themes: ["identite"]`, and no item in the corpus has ever
// carried that theme: 0 rows in Postgres, 0 in seed.json, 75 themes exist and it
// is not one of them. The Den renders a unit's theme chips as entry points into
// a themed deck, so as it ships the chip leads nowhere.
//
// This batch CLEARS the binding and prints the change as its own line. The brief
// frames this as a precedent-setting decision for a1.06; it is not, because
// a1.06 shipped first and already cleared its own identical binding on
// 2026-08-05, said so in its own test, and deliberately left a1.07 alone on the
// grounds that changing another unit's shipped body was this unit's build to
// make. So this follows rather than sets. The full argument is in
// avoir-lesson.ts.
//
// `title`, `sub` and `canDo` are what the Den advertises before a learner opens
// anything and none of them is touched.
//
// Same contract as author-etre-batch.ts: everything validates BEFORE the
// database is touched, then the whole set upserts inside ONE transaction.
// Idempotent by id.
//
// Usage (from ealch-admin/):
//   pnpm content:avoir --dry-run   validate + report only
//   pnpm content:avoir             apply, one transaction
//   then: pnpm tsx scripts/merge-avoir-into-seed.ts
//   NOT: pnpm audio:render. It spends real ElevenLabs credits and
//        ELEVENLABS_API_KEY is not set in ealch-admin/.env in any case.
//   NOT: pnpm content:publish. It regenerates seed.json FROM the database and
//        `pnpm content:parity` currently exits 1 for reasons that predate this
//        lesson. Apply, merge, and stop.

// './env' MUST be imported first — see the incident note in migrate.ts.
import './env';
import { describeTarget } from './env';
import {
  formatIssues,
  quizQuestions,
  validateItem,
  validateLesson,
  validateUnit,
  type Item,
  type Lesson,
  type Unit,
} from '../../ealch-v2/src/content/schema.ts';
import { formatDensity, validateDensity, hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';
import { matchesAccept } from '../../ealch-v2/src/content/answer.logic.ts';
import { guardLessonVersion } from './version-guard.logic.ts';
import {
  AVOIR, FOURTEEN, IMPORTED, METALANGUAGE_IDS, RESPELL, REUSED, THE_ELEVEN, THE_SIX, THE_THREE,
  toImportedItem, toItem,
} from './data/avoir-corpus.ts';
import {
  AVOIR_DICTATION_IDS, AVOIR_LESSON, REFRAME,
} from './data/avoir-lesson.ts';

const AUTHORED: Item[] = AVOIR.map(toItem);
const IMPORTS: Item[] = IMPORTED.map(toImportedItem);
/** Everything this batch writes to content_items: what it authors, plus the
 *  imported rows re-upserted at their recorded values. Re-upserting a row that
 *  is already published is a no-op against a database that has not changed and a
 *  repair against one that has, which is what makes the manifest in
 *  avoir-corpus.ts a source of truth rather than a cached read. */
const NEW_ITEMS: Item[] = [...AUTHORED, ...IMPORTS];
const LESSON: Lesson = AVOIR_LESSON;
const UNIT_ID = 'a1.07';

/** How many verbatim appearances of the reframe this lesson is authored with.
 *
 *  An EXPLICIT constant, not a figure derived from the lesson. A derived count
 *  compares the content to itself and passes on any rewording, which is exactly
 *  the regression this guard exists to catch. NINE sections carry it (the scene
 *  closing, the goals, the a1.05 handover, the swap deck, the age table, the
 *  chaud table, the traps, the review deck and the roundup) plus the `reframe`
 *  field itself, which `strings()` also walks. a1.11 and a1.29 both carry eight;
 *  the density validator requires three. */
const REFRAME_APPEARANCES = 10;

/** Seven error triggers, seven drills, seven retests and seven quiz rounds, and
 *  EVERY teaching drill is the first resolving target of exactly one round.
 *  `drillForRound` walks a round's targets and stops at the first one that
 *  resolves, so a drill named only in second place never runs.
 *
 *  Stated here as an explicit constant so a reordering of `targets`, or a round
 *  quietly deleted in a later trim, fails the batch rather than silently
 *  orphaning a drill nobody notices is dead. This is the single most-warned-about
 *  trap in this codebase, it landed twice in a1.05, and a first draft of THIS
 *  lesson shipped it too: six rounds against seven triggers left `drill-past`
 *  unreachable. The fix was a seventh round rather than an exception here. */
const EXPECTED_TRIGGERS = 7;
const EXPECTED_ROUNDS = 7;

/** The fourteen, split eleven and three. Stated explicitly so a later edit that
 *  quietly folds one of the three into the eleven fails here rather than
 *  shipping a lesson whose own reframe contradicts its content. */
const EXPECTED_ELEVEN = 11;
const EXPECTED_THREE = 3;

/** This unit's themes binding is CLEARED, not rebound. It was ["identite"],
 *  which resolves to zero items in both copies. */
const UNIT_THEMES_BEFORE = ['identite'];

const DRY_RUN = process.argv.includes('--dry-run');

function die(msg: string): never {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

/** `drills` is a Postgres ENUM ARRAY and node-postgres has no parser registered
 *  for it, so it arrives as the raw literal `{sentence,flashcard,review}` rather
 *  than as an array. Reading it as one silently produces a string, and
 *  `"{...}".includes('voiceflash')` then answers TRUE by substring, which means
 *  a naive tag check passes on a row that does not carry the tag at all. Parsed
 *  here rather than trusted. */
function drillsOf(v: unknown): string[] {
  if (Array.isArray(v)) return v as string[];
  if (typeof v !== 'string') return [];
  return v.replace(/^\{|\}$/g, '').split(',').map((s) => s.trim().replace(/^"|"$/g, '')).filter(Boolean);
}

/** Every authored string in a value, for the house-style guards. */
function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, out));
  return out;
}

async function main() {
  console.log(`→ ${describeTarget()}`);
  if (!process.env.DATABASE_URL) {
    die('No DATABASE_URL. Content is authored against the canonical database, never PGlite.');
  }
  if (DRY_RUN) console.log('  (dry run — nothing will be written)');

  // ── Everything validates before the database is touched ──────────────────

  const itemIssues = NEW_ITEMS.flatMap((it) => validateItem(it, it.id));
  if (itemIssues.length) die(`items invalid:\n${formatIssues(itemIssues)}`);

  const ids = NEW_ITEMS.map((i) => i.id);
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dupes.length) die(`duplicate ids in batch: ${[...new Set(dupes)].join(', ')}`);

  // Two entries teaching the same WORD in one theme is the .057 incident: the
  // flashcard hub keys decks on `fr` with the article stripped, so a duplicate
  // serves the same card twice and takes two SRS ratings for one word.
  // Sentences are exempt, as in flashhub-coverage.test.ts.
  const headword = (fr: string) => fr.toLowerCase().replace(/^(le |la |les |l'|un |une |des )/, '').trim();
  const seenWord = new Map<string, string>();
  const dupeWords: string[] = [];
  for (const w of NEW_ITEMS) {
    if (w.kind === 'sentence') continue;
    if ((w.cardType ?? 'vocab') !== 'vocab') continue;
    const key = `${w.theme}::${headword(w.fr)}`;
    const prior = seenWord.get(key);
    if (prior) dupeWords.push(`${prior} vs ${w.id} ("${w.fr}")`);
    else seenWord.set(key, w.id);
  }
  if (dupeWords.length) die(`the same word twice in one theme:\n  ${dupeWords.join('\n  ')}`);

  // Every a1 word or phrase must carry BOTH flashcard and voiceflash or
  // flashhub-coverage.test.ts fails the whole build, and it runs over the seed
  // rather than over this batch, so an import that misses one takes the suite
  // red on content this lesson does not own. The separate-pools exemption is
  // reproduced here rather than approximated: `fr.a1.emotions.076` carries
  // exactly voiceflash+review, which is the signature that batch used.
  const SEPARATE_POOLS = new Set(['review+voiceflash', 'flashcard+review']);
  const strandedVocab = NEW_ITEMS.filter(
    (i) => i.kind !== 'sentence'
      && (i.cardType ?? 'vocab') === 'vocab'
      && !SEPARATE_POOLS.has([...i.drills].sort().join('+'))
      && !(i.drills.includes('flashcard') && i.drills.includes('voiceflash')),
  );
  if (strandedVocab.length) {
    die(`vocab items missing flashcard or voiceflash:\n  ${strandedVocab.map((i) => `${i.id} ${JSON.stringify(i.drills)}`).join('\n  ')}`);
  }

  // gender.logic.ts measures a1.03's ten ending rules over `kind: 'word'` items
  // carrying a gender, and a1-03-genre.test.ts re-measures every one from the
  // seed on each run. a1.11 added two feminine nouns in -e and moved a1.03's
  // count from 871 to 873, turning the suite red on a lesson nobody had touched.
  //
  // Checked over the IMPORTS as well as the authored half, because a merge that
  // writes a row is as responsible for the statistic as one that wrote it by
  // hand. Four of the imported rows carry a gender (`avoir sommeil`, `avoir
  // froid`, `avoir chaud`, `avoir raison`) and all four are two-word phrases, so
  // none of them is in the population; this proves that rather than assuming it.
  const bare = (fr: string) => fr.replace(/^(?:un|une|le|la|les|des|du|de la)\s+|^l['’]/iu, '').trim();
  const genderPopulation = NEW_ITEMS.filter(
    (i) => i.kind === 'word' && (i.gender === 'm' || i.gender === 'f') && !/\s/.test(bare(i.fr)),
  );
  if (genderPopulation.length) {
    die(
      `this batch would add ${genderPopulation.length} row(s) to a1.03's measured ending population, which can move ` +
      `a statistic printed on two of its cards:\n  ` +
      genderPopulation.map((i) => `${i.id} "${i.fr}"`).join('\n  ') + `\n` +
      `  If this is intended, re-measure a1.03, correct the number at its source and re-run its own batch and merge.`
    );
  }

  const lessonIssues = validateLesson(LESSON, LESSON.id);
  if (lessonIssues.length) die(`lesson invalid:\n${formatIssues(lessonIssues)}`);

  // The v2 density rules. This is the check that makes the architecture real
  // rather than aspirational: a crowded screen fails the build.
  //
  // The id set is this batch PLUS everything the lesson declares in `itemIds`,
  // because 41 of the 90 are reused items this batch does not write. That makes
  // `item-resolution` a check that no SECTION names an id the lesson forgot to
  // declare, which is a real error it still catches. Whether the reused ids
  // exist at all is checked properly below, against the database.
  const density = validateDensity(LESSON, new Set([...ids, ...LESSON.itemIds]));
  if (density.length) die(`lesson fails the density validator:\n${formatDensity(density)}`);

  // House-style guards, the same rules the per-lesson tests enforce.
  const authoredJson = JSON.stringify({ AUTHORED, LESSON });
  if (authoredJson.includes('—')) die('em dash found in authored copy, the house style bans it');
  if (/honest/i.test(authoredJson)) die('the word "honest" is banned from authored content');
  // U+203F renders as a low underscore on a Pixel 6 and shipped that way in
  // sons.10. This lesson teaches four liaisons, so the temptation is real.
  if (authoredJson.includes('‿')) die('U+203F tie character, which renders as an underscore on a device');

  // No grammar vocabulary in learner copy. a1.11 and a1.29 banned « article
  // défini », « partitif », « masculin » and « féminin » and asserted it; this
  // lesson inherits that and adds the verb terms a learner arriving from a1.05
  // and a1.06 has never been given. Scoped to sections, sheets and terms, which
  // is everything a learner reads: `grammarIntroduced` is addressed to the
  // curriculum and is better for using the precise words, and the IMPORTED rows'
  // own `notes` are somebody else's shipped copy.
  const learnerFacing = [
    ...strings(LESSON.sections),
    ...strings(LESSON.sheets ?? []),
    ...strings(LESSON.terms ?? {}),
  ];
  const jargon = learnerFacing.filter((s) =>
    /\b(conjugaison|auxiliaire|participe pass|présent de l'indicatif|verbe irrégulier|article (défini|indéfini|partitif)|masculin|féminin)\b/i.test(s));
  if (jargon.length) die(`grammar vocabulary reached an A1 learner:\n  ${jargon.slice(0, 3).join('\n  ')}`);

  // The reframe is the lesson's spine, and a reworded copy is exactly how the
  // verbatim check starts failing.
  const hits = strings(LESSON).filter((s) => s.includes(REFRAME)).length;
  if (hits !== REFRAME_APPEARANCES) {
    die(`the reframe appears ${hits} times, expected exactly ${REFRAME_APPEARANCES}`);
  }

  // Every respelling this lesson DISPLAYS, against the nasal convention. The
  // shipped corpus respells these expressions with a plain n (`ah-VWAHR FAN`,
  // `ah-VWAHR reh-ZOHN`, `ah-VWAR duh lah SHAHNSS`), all of which fail, and
  // those rows are shared with the flashcard hub and with a2 lessons. That is
  // why the lesson reads its screens from RESPELL rather than from the rows.
  const badNasal = Object.values(RESPELL).filter((d) => hasPlainNasalFor(d.fr, d.respell));
  if (badNasal.length) {
    die(`respellings close a nasal vowel with a plain n or m:\n  ${badNasal.map((d) => `${d.fr} ${d.respell}`).join('\n  ')}`);
  }

  // No metalinguistic corpus row may be used as a learner sentence. The first of
  // the three states, in French, the exact rule this lesson teaches, and it
  // lives in `emotions`, which is where half these headwords come from, so it
  // will turn up in any search a later author runs.
  const named = new Set(strings(LESSON).filter((s) => /^fr\./.test(s)));
  const meta = METALANGUAGE_IDS.filter((id) => named.has(id));
  if (meta.length) die(`the lesson names a grammar note as if it were learner French: ${meta.join(', ')}`);

  // No `prompt` on any item this lesson displays. `Item.prompt` is read by NO
  // component: the only `.prompt` in the tree is ScenePlayer reading a scene
  // CHOICE beat's, which is an unrelated field on an unrelated type. The
  // conjugation deck (flashhub → flashtypes → ?ctype=conjugation) renders `fr`
  // and `en` and silently drops the front that makes a conjugation card one. So
  // the paradigm is carried by the SECTION and nothing here authors a field with
  // no reader. See the header of avoir-lesson.ts for the full argument.
  const withPrompt = NEW_ITEMS.filter((i) => i.prompt !== undefined);
  if (withPrompt.length) {
    die(
      `item(s) carry a \`prompt\`, which no lesson component reads:\n  ` +
      withPrompt.map((i) => `${i.id} "${i.prompt}"`).join('\n  ') + `\n` +
      `  Either wire it into app/flashcards.tsx with its own test, or do not author it.`
    );
  }

  // The fourteen, and the split that is the shape of the lesson.
  if (FOURTEEN.length !== EXPECTED_ELEVEN + EXPECTED_THREE) {
    die(`FOURTEEN holds ${FOURTEEN.length} expressions, expected ${EXPECTED_ELEVEN + EXPECTED_THREE}`);
  }
  if (THE_ELEVEN.length !== EXPECTED_ELEVEN) die(`${THE_ELEVEN.length} expressions map onto English be, expected ${EXPECTED_ELEVEN}`);
  if (THE_THREE.length !== EXPECTED_THREE) die(`${THE_THREE.length} expressions take a complement, expected ${EXPECTED_THREE}`);
  const noComplement = THE_THREE.filter((e) => !e.complement);
  if (noComplement.length) die(`expression(s) in the second group with no complement declared: ${noComplement.map((e) => e.fr).join(', ')}`);
  const strayComplement = THE_ELEVEN.filter((e) => e.complement);
  if (strayComplement.length) die(`expression(s) in the eleven carrying a complement: ${strayComplement.map((e) => e.fr).join(', ')}`);

  // Every dictation item must land in LETTER mode, which inverts a1.11's and
  // a1.29's decision and is the whole reason the targets are short. In word mode
  // the bank offers no verb forms at all (the pool is ['et','le','la','les',
  // 'de','un','une','très','bien','merci','pour','avec','mais','oui']), so it
  // could not ask the question this lesson exists to ask. Checked through the
  // REAL module rather than a restated threshold.
  const byId = new Map(NEW_ITEMS.map((i) => [i.id, i] as const));

  // At most half the exam may be mcq. Recognition can be passed by elimination,
  // and this lesson's whole canDo is production.
  const quizSection = LESSON.sections.find((s) => s.type === 'quiz');
  const qs = quizSection && quizSection.type === 'quiz' ? quizQuestions(quizSection) : [];
  const mcq = qs.filter((q) => (q.format ?? 'mcq') === 'mcq').length;
  if (mcq * 2 > qs.length) die(`${mcq}/${qs.length} questions are mcq, over the half ceiling`);

  // Every free-text question must accept the answer it displays. A question
  // whose own canonical answer is rejected marks a correct learner wrong.
  const unacceptable = qs.filter((q) => q.answer && !matchesAccept(q.answer, q.accept));
  if (unacceptable.length) {
    die(`question(s) that do not accept their own answer:\n  ${unacceptable.map((q) => `"${q.q}" shows "${q.answer}"`).join('\n  ')}`);
  }

  // Every drill has to be reachable. drillForRound stops at a round's first
  // resolving target, so a drill named only in second place is dead content.
  // This is the single most-warned-about trap in this codebase and a1.05 shipped
  // it twice, so it is checked here as well as in the test.
  const drillForTarget = new Map((LESSON.errorTriggers ?? []).map((t) => [t.id, t.drill]));
  const rounds = quizSection && quizSection.type === 'quiz' ? (quizSection.rounds ?? []) : [];
  const leads: string[] = [];
  for (const r of rounds) {
    const lead = (r.targets ?? []).find((t) => drillForTarget.has(t));
    if (!lead) die(`round ${r.id} names no target that resolves to a drill, so it can fire nothing`);
    if (leads.includes(lead)) die(`round ${r.id} leads on "${lead}", which another round already leads on, so one drill is dead`);
    leads.push(lead);
  }
  const fired = new Set(leads.map((t) => drillForTarget.get(t)!));
  if ((LESSON.errorTriggers ?? []).length !== EXPECTED_TRIGGERS) {
    die(`expected ${EXPECTED_TRIGGERS} error triggers, found ${(LESSON.errorTriggers ?? []).length}`);
  }
  if (rounds.length !== EXPECTED_ROUNDS) {
    die(`expected ${EXPECTED_ROUNDS} quiz rounds, found ${rounds.length}. One round per drill, or a drill is dead.`);
  }
  const teaching = (LESSON.drills ?? []).filter((d) => !d.id.startsWith('retest-'));
  const orphans = teaching.filter((d) => !fired.has(d.id)).map((d) => d.id);
  if (orphans.length) {
    die(
      `drill(s) no quiz round can fire: ${orphans.join(', ')}\n` +
      `  drillForRound stops at a round's FIRST target that resolves to a drill, so a drill named only in second\n` +
      `  place never runs. Reorder the round's \`targets\` so this drill's trigger comes first, add a round for it,\n` +
      `  or drop the drill.`
    );
  }
  // Every trigger's drill and retest must exist, and every section it watches.
  const knownDrills = new Set((LESSON.drills ?? []).map((d) => d.id));
  const sectionIds = new Set(LESSON.sections.map((s) => (s as { id?: string }).id).filter(Boolean) as string[]);
  for (const t of LESSON.errorTriggers ?? []) {
    if (!knownDrills.has(t.drill)) die(`trigger ${t.id} names drill "${t.drill}", which is not authored`);
    if (t.retest && !knownDrills.has(t.retest)) die(`trigger ${t.id} names retest "${t.retest}", which is not authored`);
    for (const d of t.detectOn) {
      const base = d.split('/')[0];
      if (!sectionIds.has(base)) die(`trigger ${t.id} detects on "${d}", and section "${base}" does not exist`);
    }
  }

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();

  try {
    // Every item this lesson names must exist after this batch: either it is in
    // the batch, or it is already published.
    const reused = LESSON.itemIds.filter((id) => !ids.includes(id));
    if (reused.length) {
      const found = await client.query<{ id: string }>(
        `select id from content_items where id = any($1) and status = 'published'`,
        [reused]
      );
      const missing = reused.filter((id) => !found.rows.some((r) => r.id === id));
      if (missing.length) die(`lesson references unpublished/unknown items:\n  ${missing.join('\n  ')}`);
    }

    // The REUSED list is authored against seed.json, which can run AHEAD of the
    // database. Verified against the DATABASE here, because a reused id that is
    // in the seed but not published would render as an empty card. The `fr` is
    // compared too: an id that resolves to a different word than the one this
    // lesson names is worse than one that does not resolve at all.
    const reusedIds = REUSED.map((r) => r.id);
    const foundReused = await client.query<{ id: string; fr: string }>(
      `select id, fr from content_items where id = any($1) and status = 'published'`,
      [reusedIds]
    );
    const missingReused = REUSED.filter((r) => !foundReused.rows.some((x) => x.id === r.id));
    if (missingReused.length) {
      die(
        `REUSED names items that are not published in THIS database:\n  ${missingReused.map((r) => `${r.id} "${r.fr}"`).join('\n  ')}\n` +
        `  (seed.json can run ahead of the database — these may exist in the seed but not here.)`
      );
    }
    const drifted = REUSED
      .map((r) => ({ r, row: foundReused.rows.find((x) => x.id === r.id)! }))
      .filter(({ r, row }) => row.fr !== r.fr)
      .map(({ r, row }) => `${r.id}: this lesson says "${r.fr}", the database says "${row.fr}"`);
    if (drifted.length) die(`REUSED has drifted from the database:\n  ${drifted.join('\n  ')}`);

    // The IMPORTED manifest is a RECORDED READ of this database, taken so the
    // merge can write these rows into the seed without a connection. If the rows
    // have moved since, the manifest is stale and the seed would be written from
    // a copy nobody has looked at. Compared field by field on everything the
    // merge will write.
    const importedIds = IMPORTS.map((i) => i.id);
    const foundImports = await client.query<{
      id: string; kind: string; theme: string; fr: string; en: string; drills: string[]; status: string; card_type: string | null;
    }>(
      `select id, kind, theme, fr, en, drills, status, card_type from content_items where id = any($1)`,
      [importedIds]
    );
    const importDrift: string[] = [];
    for (const it of IMPORTS) {
      const row = foundImports.rows.find((r) => r.id === it.id);
      if (!row) { importDrift.push(`${it.id} is not in this database at all`); continue; }
      if (row.status !== 'published') importDrift.push(`${it.id} is ${row.status}, not published`);
      if (row.fr !== it.fr) importDrift.push(`${it.id}: manifest says "${it.fr}", database says "${row.fr}"`);
      if (row.en !== it.en) importDrift.push(`${it.id}: gloss differs ("${it.en}" vs "${row.en}")`);
      if (row.kind !== it.kind) importDrift.push(`${it.id}: kind differs (${it.kind} vs ${row.kind})`);
      if (row.theme !== it.theme) importDrift.push(`${it.id}: theme differs (${it.theme} vs ${row.theme})`);
      if ((row.card_type ?? undefined) !== it.cardType) {
        importDrift.push(`${it.id}: cardType differs (${String(it.cardType)} vs ${String(row.card_type)})`);
      }
      const rowDrills = drillsOf(row.drills);
      if ([...rowDrills].sort().join() !== [...it.drills].sort().join()) {
        importDrift.push(`${it.id}: drills differ (${JSON.stringify(it.drills)} vs ${JSON.stringify(rowDrills)})`);
      }
    }
    if (importDrift.length) {
      die(
        `the IMPORTED manifest has drifted from the database:\n  ${importDrift.join('\n  ')}\n` +
        `  Re-read the rows into scripts/data/avoir-corpus.ts. The manifest is what the merge writes into\n` +
        `  seed.json, and a stale manifest puts the seed ahead of the database on rows nobody reviewed.`
      );
    }

    // The dictée, checked against the POST-BATCH corpus rather than only against
    // what this file authors: two of the seven are rows the batch imports and
    // one is reused, and a shortened `fr` upstream would quietly promote them
    // into word mode.
    const dictRows = await client.query<{ id: string; fr: string; drills: string[] }>(
      `select id, fr, drills from content_items where id = any($1)`,
      [AVOIR_DICTATION_IDS]
    );
    const wordMode: string[] = [];
    const noDictTag: string[] = [];
    for (const id of AVOIR_DICTATION_IDS) {
      const it = byId.get(id) ?? dictRows.rows.find((r) => r.id === id);
      if (!it) die(`the dictée names ${id}, which is neither in this batch nor in the database`);
      if (dicteeMode(it.fr) !== 'letters') wordMode.push(`${id} "${it.fr}"`);
      const d = byId.has(id) ? byId.get(id)!.drills : drillsOf((it as { drills: unknown }).drills);
      if (!d.includes('dictation')) noDictTag.push(`${id} "${it.fr}"`);
    }
    if (wordMode.length) {
      die(
        `dictation item(s) that fall into WORD mode:\n  ${wordMode.join('\n  ')}\n` +
        `  This lesson chose letter mode deliberately: the word-mode decoy pool holds no verb forms, so it cannot\n` +
        `  ask ai against as against a. Shorten the target or drop it.`
      );
    }
    if (noDictTag.length) die(`dictation item(s) with no "dictation" drill:\n  ${noDictTag.join('\n  ')}`);

    // Spoken practice draws only from items carrying `voiceflash`. Checked
    // against POSTGRES rather than the seed: an item whose tag was stripped
    // upstream renders as a card the learner cannot be scored on, which reads as
    // a broken mission.
    const speak = LESSON.sections.find((s) => (s as { id?: string }).id === 's21-speak');
    const speakIds = (speak as { itemIds?: string[] } | undefined)?.itemIds ?? [];
    if (!speakIds.length) die('the speak mission names no items');
    const toCheck = speakIds.filter((id) => !byId.has(id));
    const speakRows = toCheck.length
      ? (await client.query<{ id: string; drills: string[] }>(
          `select id, drills from content_items where id = any($1)`, [toCheck]
        )).rows
      : [];
    const badSpeak = [
      ...speakIds.filter((id) => byId.has(id) && !byId.get(id)!.drills.includes('voiceflash')),
      // drillsOf, not the raw column. See the note on drillsOf: reading the enum
      // array as a string makes `.includes` answer by substring, and a check
      // that cannot fail is not a check.
      ...toCheck.filter((id) => !drillsOf(speakRows.find((r) => r.id === id)?.drills).includes('voiceflash')),
    ];
    if (badSpeak.length) die(`items named by the speak mission carry no "voiceflash" drill:\n  ${badSpeak.join('\n  ')}`);

    const unitRow = await client.query<{ body: Unit }>(
      `select body from content_units where kind = 'curriculum_unit' and body->>'id' = $1`,
      [UNIT_ID]
    );
    if (unitRow.rowCount !== 1) die(`unit "${UNIT_ID}" not found in content_units — cannot attach its lesson`);
    const unitBody = unitRow.rows[0].body;

    // title, sub and canDo are what the Den advertises before a learner opens
    // anything, and authoring the lesson is not a licence to rewrite the promise
    // it was built against.
    if (unitBody.title !== 'The Verb Avoir (To Have)') die(`unit ${UNIT_ID} title has changed: "${unitBody.title}"`);
    if (unitBody.sub !== 'Le verbe avoir') die(`unit ${UNIT_ID} sub has changed: "${unitBody.sub}"`);
    if (unitBody.canDo !== 'Can say their age and what they have with avoir') {
      die(`unit ${UNIT_ID} canDo has changed: "${unitBody.canDo}"`);
    }
    // The eyebrow the Den draws is computed from the unit's seq, and `tag` is
    // the one place it is authored by hand. a1.03 shipped LEÇON 03 at seq 5 and
    // the header above it drew LEÇON 05.
    const expectedTag = `A1 · LEÇON ${String(unitBody.seq).padStart(2, '0')}`;
    if (LESSON.tag !== expectedTag) {
      die(`the lesson tag is "${LESSON.tag}" and the unit sits at seq ${unitBody.seq}, so the header will draw "${expectedTag}"`);
    }

    // The binding this batch is here to fix. Refuse if somebody has already
    // changed it to something else: two people disagreeing about a theme is a
    // decision, not a merge.
    const themesNow = (unitBody as Unit & { themes?: string[] }).themes;
    if (themesNow !== undefined && themesNow.join() !== UNIT_THEMES_BEFORE.join()) {
      die(
        `unit ${UNIT_ID} themes are ${JSON.stringify(themesNow)}, which is not the broken binding this batch ` +
        `expects (${JSON.stringify(UNIT_THEMES_BEFORE)}). Somebody has changed it; look before overwriting.`
      );
    }
    // And the theme it names really does hold nothing, so this is a repair
    // rather than the deletion of something somebody was using.
    const identiteCount = await client.query<{ n: string }>(
      `select count(*)::text n from content_items where theme = 'identite'`
    );
    const nIdentite = Number(identiteCount.rows[0]?.n ?? 0);
    if (nIdentite > 0) {
      die(`an "identite" theme now holds ${nIdentite} items, so clearing this binding would remove a real chip. Revisit the decision.`);
    }

    const { themes: priorThemes, ...withoutThemes } = unitBody as Unit & { themes?: string[] };
    const nextUnit: Unit = {
      ...withoutThemes,
      lessonIds: [...new Set([...(unitBody.lessonIds ?? []), LESSON.id])],
    };
    if ((nextUnit as { themes?: unknown }).themes !== undefined) {
      die('the themes binding survived the clearing; a1.07 would still declare a theme that does not exist');
    }
    if (nextUnit.title !== unitBody.title || nextUnit.sub !== unitBody.sub || nextUnit.canDo !== unitBody.canDo) {
      die('this batch would change the unit title, sub or canDo. All three are correct and the Den advertises them.');
    }
    const unitIssues = validateUnit(nextUnit, nextUnit.id);
    if (unitIssues.length) die(`post-state fails validateUnit:\n${formatIssues(unitIssues)}`);

    const existingLesson = await client.query<{ version: number }>(
      `select (body->>'version')::int as version from content_units where kind = 'lesson' and slug = $1`,
      [LESSON.id]
    );
    const prior = existingLesson.rows[0]?.version;
    guardLessonVersion({
      lessonId: LESSON.id, prior, authored: LESSON.version,
      sourceFile: 'avoir-lesson.ts', dryRun: DRY_RUN, die,
    });

    const formats = qs.reduce<Record<string, number>>((a, q) => {
      const f = q.format ?? 'mcq';
      a[f] = (a[f] ?? 0) + 1;
      return a;
    }, {});

    console.log(`\n  authored items: ${AUTHORED.length} across ${new Set(AUTHORED.map((i) => i.theme)).size} theme(s)`);
    for (const theme of [...new Set(AUTHORED.map((i) => i.theme))]) {
      const inTheme = AUTHORED.filter((i) => i.theme === theme);
      console.log(`    ${theme}: ${inTheme.length} (.${inTheme[0].id.split('.').pop()} through .${inTheme[inTheme.length - 1].id.split('.').pop()})`);
    }
    console.log(`  imported items: ${IMPORTS.length} from ${new Set(IMPORTS.map((i) => i.theme)).size} themes OUTSIDE the seed cut, verified against this database`);
    for (const theme of [...new Set(IMPORTS.map((i) => i.theme))]) {
      console.log(`    ${theme}: ${IMPORTS.filter((i) => i.theme === theme).length}`);
    }
    console.log(`  reused items: ${reused.length} named by the lesson, ${REUSED.length} documented and verified against this database`);
    console.log(
      `  lesson: ${LESSON.id} "${LESSON.title}" — ${prior !== undefined ? `updating v${prior} → v${LESSON.version}` : 'NEW'}, ` +
      `${LESSON.sections.length} sections, ${LESSON.itemIds.length} itemIds`
    );
    console.log(`  acts: ${LESSON.acts?.length} | drills: ${LESSON.drills?.length} | sheets: ${LESSON.sheets?.length} | triggers: ${LESSON.errorTriggers?.length} | terms: ${Object.keys(LESSON.terms ?? {}).length}`);
    console.log(`  the fourteen: ${THE_ELEVEN.length} swap be for have, ${THE_THREE.length} take a complement (${THE_THREE.map((e) => `${e.fr} → ${e.complement}`).join(', ')})`);
    console.log(`  the six forms: ${THE_SIX.join(', ')}`);
    console.log(`  quiz: ${qs.length} questions in ${rounds.length} rounds`);
    console.log(`  quiz formats: ${Object.entries(formats).map(([k, v]) => `${k} ${v}`).join(', ')}`);
    console.log(`  mcq share: ${Math.round((formats.mcq ?? 0) / qs.length * 100)}% (ceiling 50) | errorSpot share: ${Math.round((formats.errorSpot ?? 0) / qs.length * 100)}%`);
    console.log(`  every question has a why: ${qs.every((q) => q.why) ? 'yes' : 'NO'} and a ref: ${qs.every((q) => q.ref) ? 'yes' : 'NO'}`);
    console.log(`  SRS tranches: ${LESSON.deckTranche?.map((t) => t.length).join(' + ')} = ${LESSON.deckTranche?.flat().length} cards across ${LESSON.acts?.length} acts`);
    console.log(`  drills fired by a round: ${fired.size}/${teaching.length}, each the FIRST resolving target of exactly one round`);
    console.log(`  round leads: ${leads.join(', ')}`);
    console.log(`  dictation: ${AVOIR_DICTATION_IDS.length} lines, all in LETTER mode (inverting a1.11 and a1.29, deliberately)`);
    console.log(`  speak: ${speakIds.length} lines, all carrying voiceflash`);
    console.log(`  recordings requested: ${LESSON.audio?.recorded?.length} (all fall back to TTS until delivered)`);
    console.log(`  respellings authored for this lesson: ${Object.keys(RESPELL).length}, all passing the nasal convention`);
    console.log(`  reframe: "${REFRAME}" x${hits}`);
    console.log(`  validators: schema ✓  density ✓  house style ✓  no grammar jargon ✓  metalanguage excluded ✓  no dangling prompt ✓`);
    console.log(`\n  UNIT EDIT (not silent):`);
    console.log(`    ${UNIT_ID} themes:    ${JSON.stringify(priorThemes ?? null)} → cleared   ("identite" holds ${nIdentite} items; a1.06 cleared the identical binding on 2026-08-05)`);
    console.log(`    ${UNIT_ID} lessonIds: ${JSON.stringify(unitBody.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);
    console.log(`    ${UNIT_ID} prereqUnitIds: ${JSON.stringify(unitBody.prereqUnitIds ?? [])} (UNCHANGED, and reported: half this canDo is about age and a1.02/a1.27/a1.28 are not named, nor is a1.06)`);

    if (DRY_RUN) {
      console.log('\n✓ dry run — all valid, nothing written.\n');
      return;
    }

    await client.query('begin');
    for (const it of NEW_ITEMS) {
      await client.query(
        `insert into content_items
           (id, kind, level, theme, fr, en, ipa, respell, gender, example, notes, tags, drills, audio_ref, version, status, generated_by, card_type, prompt)
         values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10::jsonb,$11,$12,$13,null,$14,'published','human',$15,$16)
         on conflict (id) do update set
           kind=excluded.kind, level=excluded.level, theme=excluded.theme, fr=excluded.fr, en=excluded.en,
           ipa=excluded.ipa, respell=excluded.respell, gender=excluded.gender, example=excluded.example,
           notes=excluded.notes, tags=excluded.tags, drills=excluded.drills, version=excluded.version,
           card_type=excluded.card_type, prompt=excluded.prompt`,
        [
          it.id, it.kind, it.level, it.theme, it.fr, it.en, it.ipa ?? null, it.respell ?? null,
          it.gender ?? null, it.example ? JSON.stringify(it.example) : null, it.notes ?? null,
          it.tags, it.drills, it.version, it.cardType ?? null, it.prompt ?? null,
        ]
      );
    }

    await client.query(
      `insert into content_units (slug, title, kind, level, locale, status, body, version, generated_by)
       values ($1,$2,'lesson',$3,'fr','published',$4::jsonb,1,'human')
       on conflict (slug) do update set
         title=excluded.title, level=excluded.level, body=excluded.body, status='published', updated_at=now()`,
      [LESSON.id, LESSON.title, LESSON.level, JSON.stringify(LESSON)]
    );

    const res = await client.query(
      `update content_units set body = $1::jsonb, updated_at = now()
        where kind = 'curriculum_unit' and body->>'id' = $2`,
      [JSON.stringify(nextUnit), UNIT_ID]
    );
    if (res.rowCount !== 1) {
      await client.query('rollback');
      die(`unit update touched ${res.rowCount} rows — rolled back, nothing changed`);
    }

    await client.query('commit');
    console.log(
      `\n✓ avoir batch applied: ${NEW_ITEMS.length} items (${AUTHORED.length} authored, ${IMPORTS.length} imported) + lesson ${LESSON.id} published,` +
      `\n  unit ${UNIT_ID} linked and its dead "identite" binding cleared.` +
      `\n  Next: pnpm tsx scripts/merge-avoir-into-seed.ts --dry-run` +
      `\n  Do NOT run pnpm content:publish. It regenerates seed.json FROM this database and` +
      `\n  pnpm content:parity currently exits 1 on pre-existing drift.\n`
    );
  } catch (e) {
    await client.query('rollback').catch(() => {});
    throw e;
  } finally {
    client.release();
    await pool.end();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
