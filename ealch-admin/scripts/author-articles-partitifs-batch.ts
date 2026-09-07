// Content Batch — Les articles partitifs: the a1.29.l1 full-rig lesson.
//
// a1.29 ships today with lessonIds: [] and a theme binding that points at
// nothing. This batch authors the lesson, the 13 corpus entries it could not
// build without, and the 27 rows it imports from two themes outside the seed
// cut, as the fifth A1 lesson on Lesson Architecture v2.
//
// The content and the corpus live in scripts/data/ (articles-partitifs-lesson,
// -corpus and -terms) rather than inline here, because all three are large and
// all three are checked by the app's own test suite at authoring time:
//
//   ealch-v2/src/content/a1-29-partitifs.test.ts
//
// That test is the real gate. It runs in CI on every push, imports these files
// directly, and asserts the whole self-check list: the mission spine in order,
// the act structure, 25 questions across 5 rounds with a why and a ref on every
// one, the reframe verbatim, du/de la/de l' each taught AND tested, the
// countable choice DEMONSTRATED on one noun rather than asserted, all four
// English-speaker errors taught and tested, the de+le disambiguation taught,
// no metalinguistic corpus row used as a learner sentence, every inlined
// respelling passing the nasal convention, every dictation item landing in word
// mode, and seed parity derived rather than hardcoded. This script re-runs the
// shared validators before it writes so a broken batch dies before it touches
// the database, but the durable check is the test.
//
// ── THE UNIT EDIT, WHICH IS NOT SILENT ─────────────────────────────────────
//
// a1.29 declares `themes: ["nourriture"]`, and no item in the corpus has ever
// carried that theme: 0 rows in Postgres, 0 in seed.json, measured 2026-08-05.
// The Den renders a unit's theme chips as entry points into a themed deck, so
// as it ships the chip leads nowhere.
//
// This batch REBINDS it to `cuisine` and prints the change as its own line.
// See the reasoning in articles-partitifs-lesson.ts. `title`, `sub` and `canDo`
// are what the Den advertises before a learner opens anything and none of them
// is touched.
//
// Same contract as author-articles-indefinis-batch.ts: everything validates
// BEFORE the database is touched, then the whole set upserts inside ONE
// transaction. Idempotent by id.
//
// Usage (from ealch-admin/):
//   pnpm content:partitifs --dry-run   validate + report only
//   pnpm content:partitifs             apply, one transaction
//   then: pnpm tsx scripts/merge-articles-partitifs-into-seed.ts
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
import {
  IMPORTED, METALANGUAGE_IDS, PARTITIFS, REUSED, RESPELL, toImportedItem, toItem,
} from './data/articles-partitifs-corpus.ts';
import {
  PARTITIFS_DICTATION_IDS, PARTITIFS_LESSON, PARTITIFS_UNIT_THEME, REFRAME,
} from './data/articles-partitifs-lesson.ts';

const AUTHORED: Item[] = PARTITIFS.map(toItem);
const IMPORTS: Item[] = IMPORTED.map(toImportedItem);
/** Everything this batch writes to content_items: what it authors, plus the
 *  imported rows re-upserted at their recorded values. Re-upserting a row that
 *  is already published is a no-op against a database that has not changed and
 *  a repair against one that has, which is what makes the manifest in
 *  articles-partitifs-corpus.ts a source of truth rather than a cached read. */
const NEW_ITEMS: Item[] = [...AUTHORED, ...IMPORTS];
const LESSON: Lesson = PARTITIFS_LESSON;
const UNIT_ID = 'a1.29';

/** How many verbatim appearances of the reframe this lesson is authored with.
 *
 *  An EXPLICIT constant, not a figure derived from the lesson. A derived count
 *  compares the content to itself and passes on any rewording, which is exactly
 *  the regression this guard exists to catch. Nine sections carry it plus the
 *  `reframe` field itself, which `strings()` also walks. */
const REFRAME_APPEARANCES = 10;

/** Five error triggers, each with a drill and a retest, and each drill is the
 *  FIRST target of exactly one quiz round. `drillForRound` walks a round's
 *  targets and stops at the first one that resolves, so a drill named only in
 *  second place never runs. Stated here so a reordering of `targets` fails the
 *  batch rather than silently orphaning a drill nobody notices is dead. */
const EXPECTED_DRILLS = 5;

/** The theme this unit binds to after this batch. Named as a constant so the
 *  change is a diffable line rather than a string buried in an object literal.
 *  It was ["nourriture"], which resolves to zero items in both copies. */
const UNIT_THEMES = [PARTITIFS_UNIT_THEME];
const UNIT_THEMES_BEFORE = ['nourriture'];

const DRY_RUN = process.argv.includes('--dry-run');

function die(msg: string): never {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

/** `drills` is a Postgres ENUM ARRAY and node-postgres has no parser registered
 *  for it, so it arrives as the raw literal `{sentence,flashcard,review}` rather
 *  than as an array. Reading it as one silently produces a string, and
 *  `"{...}".includes('voiceflash')` then answers TRUE by substring, which means
 *  a naive tag check passes on a row that does not carry the tag at all.
 *  Parsed here rather than trusted. */
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
  // Sentences are exempt, as in flashhub-coverage.test.ts. Note `du ` and
  // `de la ` are NOT in the strip list, which is why « du pain » and « le pain »
  // can coexist; checked anyway rather than assumed.
  const headword = (fr: string) => fr.toLowerCase().replace(/^(le |la |les |l'|un |une |des )/, '').trim();
  const seenWord = new Map<string, string>();
  const dupeWords: string[] = [];
  for (const w of NEW_ITEMS) {
    if (w.kind === 'sentence') continue;
    const key = `${w.theme}::${headword(w.fr)}`;
    const prior = seenWord.get(key);
    if (prior) dupeWords.push(`${prior} vs ${w.id} ("${w.fr}")`);
    else seenWord.set(key, w.id);
  }
  if (dupeWords.length) die(`the same word twice in one theme:\n  ${dupeWords.join('\n  ')}`);

  // Every a1 word or phrase must carry BOTH flashcard and voiceflash or
  // flashhub-coverage.test.ts fails the whole build, and it runs over the seed
  // rather than over this batch, so an import that misses one takes the suite
  // red on content this lesson does not own.
  const strandedVocab = NEW_ITEMS.filter(
    (i) => i.kind !== 'sentence'
      && (i.cardType ?? 'vocab') === 'vocab'
      && !(i.drills.includes('flashcard') && i.drills.includes('voiceflash')),
  );
  if (strandedVocab.length) {
    die(`vocab items missing flashcard or voiceflash:\n  ${strandedVocab.map((i) => `${i.id} ${JSON.stringify(i.drills)}`).join('\n  ')}`);
  }

  // gender.logic.ts measures a1.03's ten ending rules over `kind: 'word'` items
  // carrying a gender, and a1-03-genre.test.ts re-measures every one from the
  // seed on each run. a1.11 added two feminine nouns in -e and moved a1.03's
  // count from 871 to 873, turning the suite red on a lesson nobody had
  // touched. Nothing this lesson AUTHORS may enter that population.
  const genderPopulation = AUTHORED.filter((i) => i.kind === 'word' && (i.gender === 'm' || i.gender === 'f'));
  if (genderPopulation.length) {
    die(
      `this batch authors ${genderPopulation.length} gendered single-word noun(s), which enter a1.03's measured ` +
      `ending population and can move a statistic printed on two of its cards:\n  ` +
      genderPopulation.map((i) => `${i.id} "${i.fr}"`).join('\n  ')
    );
  }

  const lessonIssues = validateLesson(LESSON, LESSON.id);
  if (lessonIssues.length) die(`lesson invalid:\n${formatIssues(lessonIssues)}`);

  // The v2 density rules. This is the check that makes the architecture real
  // rather than aspirational: a crowded screen fails the build.
  //
  // The id set is this batch PLUS everything the lesson declares in `itemIds`,
  // because 41 of the 81 are reused items this batch does not write. That makes
  // `item-resolution` a check that no SECTION names an id the lesson forgot to
  // declare, which is a real error it still catches. Whether the reused ids
  // exist at all is checked properly below, against the database.
  const density = validateDensity(LESSON, new Set([...ids, ...LESSON.itemIds]));
  if (density.length) die(`lesson fails the density validator:\n${formatDensity(density)}`);

  // House-style guards, the same rules the per-lesson tests enforce.
  const authored = JSON.stringify({ AUTHORED, LESSON });
  if (authored.includes('—')) die('em dash found in authored copy, the house style bans it');
  if (/honest/i.test(authored)) die('the word "honest" is banned from authored content');

  // No grammar vocabulary in learner copy. a1.11 banned « article défini »,
  // « article indéfini », « partitif », « masculin » and « féminin » and
  // asserted it; this lesson inherits that. Scoped to sections and terms, which
  // is everything a learner reads: `grammarIntroduced` is addressed to the
  // curriculum and is better for using the precise words, and the IMPORTED
  // rows' own `notes` are somebody else's shipped copy.
  const learnerFacing = [...strings(LESSON.sections), ...strings(LESSON.terms ?? {})];
  const jargon = learnerFacing.filter((s) => /\b(article (défini|indéfini|partitif)|partitifs?|partitive|masculin|féminin)\b/i.test(s));
  if (jargon.length) die(`grammar vocabulary reached an A1 learner:\n  ${jargon.slice(0, 3).join('\n  ')}`);

  // The reframe is the lesson's spine, and a reworded copy is exactly how the
  // verbatim check starts failing.
  const hits = strings(LESSON).filter((s) => s.includes(REFRAME)).length;
  if (hits !== REFRAME_APPEARANCES) {
    die(`the reframe appears ${hits} times, expected exactly ${REFRAME_APPEARANCES}`);
  }

  // Every respelling this lesson DISPLAYS, against the nasal convention. The
  // shipped corpus respells `un` as `uhn`, which fails, and several IMPORTED
  // rows predate the convention entirely; that is why the lesson reads its
  // screens from RESPELL rather than from the rows.
  const badNasal = Object.values(RESPELL).filter((d) => hasPlainNasalFor(d.fr, d.respell));
  if (badNasal.length) {
    die(`respellings close a nasal vowel with a plain n or m:\n  ${badNasal.map((d) => `${d.fr} ${d.respell}`).join('\n  ')}`);
  }

  // No metalinguistic corpus row may be used as a learner sentence. The first
  // of the three states the exact rule this lesson teaches and lives in
  // `cuisine`, which is the theme this unit is now bound to, so it will turn up
  // in any search a later author runs.
  const named = new Set(strings(LESSON).filter((s) => /^fr\./.test(s)));
  const meta = METALANGUAGE_IDS.filter((id) => named.has(id));
  if (meta.length) die(`the lesson names a grammar note as if it were learner French: ${meta.join(', ')}`);

  // Every dictation item must land in WORD mode. In letter mode the dictée is a
  // spelling exercise, which is a different lesson; in word mode the bank
  // offers `de`, `un` and `une` as decoys next to the `du` the learner needs,
  // which is exactly the choice this lesson teaches.
  const byId = new Map([...NEW_ITEMS.map((i) => [i.id, i] as const)]);
  const letterMode = PARTITIFS_DICTATION_IDS.filter((id) => {
    const it = byId.get(id);
    return it ? dicteeMode(it.fr) !== 'words' : false;
  });
  if (letterMode.length) die(`dictation items that fall into letter mode: ${letterMode.join(', ')}`);

  // Every free-text question must accept the answer it displays. A question
  // whose own canonical answer is rejected marks a correct learner wrong.
  const quizSection = LESSON.sections.find((s) => s.type === 'quiz');
  const qs = quizSection && quizSection.type === 'quiz' ? quizQuestions(quizSection) : [];
  const unacceptable = qs.filter((q) => q.answer && !matchesAccept(q.answer, q.accept));
  if (unacceptable.length) {
    die(`question(s) that do not accept their own answer:\n  ${unacceptable.map((q) => `"${q.q}" shows "${q.answer}"`).join('\n  ')}`);
  }

  // At most half the exam may be mcq. Recognition can be passed by elimination,
  // and this lesson's whole canDo is production.
  const mcq = qs.filter((q) => (q.format ?? 'mcq') === 'mcq').length;
  if (mcq * 2 > qs.length) die(`${mcq}/${qs.length} questions are mcq, over the half ceiling`);

  // Every drill has to be reachable. drillForRound stops at a round's first
  // resolving target, so a drill named only in second place is dead content.
  const drillForTarget = new Map((LESSON.errorTriggers ?? []).map((t) => [t.id, t.drill]));
  const rounds = quizSection && quizSection.type === 'quiz' ? (quizSection.rounds ?? []) : [];
  const fired = new Set(
    rounds
      .map((r) => (r.targets ?? []).map((t) => drillForTarget.get(t)).find(Boolean) ?? null)
      .filter((x): x is string => Boolean(x))
  );
  const teaching = (LESSON.drills ?? []).filter((d) => !d.id.startsWith('retest-'));
  if (teaching.length !== EXPECTED_DRILLS) {
    die(`expected ${EXPECTED_DRILLS} teaching drills, found ${teaching.length}`);
  }
  const orphans = teaching.filter((d) => !fired.has(d.id)).map((d) => d.id);
  if (orphans.length) {
    die(`drill(s) no quiz round can fire: ${orphans.join(', ')}\n  Reorder the round's \`targets\` so this drill's trigger comes first.`);
  }

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();

  try {
    // Every item this lesson names must exist after this batch: either it is
    // in the batch, or it is already published.
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
    // merge can write these rows into the seed without a connection. If the
    // rows have moved since, the manifest is stale and the seed would be
    // written from a copy nobody has looked at. Compared field by field on
    // everything the merge will write.
    const importedIds = IMPORTS.map((i) => i.id);
    const foundImports = await client.query<{ id: string; kind: string; theme: string; fr: string; en: string; drills: string[]; status: string }>(
      `select id, kind, theme, fr, en, drills, status from content_items where id = any($1)`,
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
      const rowDrills = drillsOf(row.drills);
      if ([...rowDrills].sort().join() !== [...it.drills].sort().join()) {
        importDrift.push(`${it.id}: drills differ (${JSON.stringify(it.drills)} vs ${JSON.stringify(rowDrills)})`);
      }
    }
    if (importDrift.length) {
      die(
        `the IMPORTED manifest has drifted from the database:\n  ${importDrift.join('\n  ')}\n` +
        `  Re-read the rows into scripts/data/articles-partitifs-corpus.ts. The manifest is what the merge writes\n` +
        `  into seed.json, and a stale manifest puts the seed ahead of the database on rows nobody reviewed.`
      );
    }

    // Spoken practice draws only from items carrying `voiceflash`, and dictation
    // only from items carrying `dictation`. Checked against POSTGRES rather than
    // the seed: an item whose tag was stripped upstream renders as a card the
    // learner cannot be scored on, which reads as a broken mission.
    const speak = LESSON.sections.find((s) => (s as { id?: string }).id === 's18-speak');
    const dictation = LESSON.sections.find((s) => (s as { id?: string }).id === 's17-dictation');
    for (const [sec, drill] of [[speak, 'voiceflash'], [dictation, 'dictation']] as const) {
      const namedIds = (sec as { itemIds?: string[] } | undefined)?.itemIds ?? [];
      if (!namedIds.length) die(`the ${drill} section names no items`);
      const inBatch = new Map(NEW_ITEMS.map((i) => [i.id, i.drills]));
      const toCheck = namedIds.filter((id) => !inBatch.has(id));
      const rows = toCheck.length
        ? (await client.query<{ id: string; drills: string[] }>(
            `select id, drills from content_items where id = any($1)`, [toCheck]
          )).rows
        : [];
      const bad = [
        ...namedIds.filter((id) => inBatch.has(id) && !inBatch.get(id)!.includes(drill as never)),
        // drillsOf, not the raw column. See the note on drillsOf: reading the
        // enum array as a string makes `.includes` answer by substring, and a
        // check that cannot fail is not a check.
        ...toCheck.filter((id) => !drillsOf(rows.find((r) => r.id === id)?.drills).includes(drill)),
      ];
      if (bad.length) die(`items named by the ${drill} mission do not carry the "${drill}" drill:\n  ${bad.join('\n  ')}`);
    }

    const unitRow = await client.query<{ body: Unit }>(
      `select body from content_units where kind = 'curriculum_unit' and body->>'id' = $1`,
      [UNIT_ID]
    );
    if (unitRow.rowCount !== 1) die(`unit "${UNIT_ID}" not found in content_units — cannot attach its lesson`);
    const unitBody = unitRow.rows[0].body;

    // title, sub and canDo are what the Den advertises before a learner opens
    // anything, and authoring the lesson is not a licence to rewrite the promise
    // it was built against.
    if (unitBody.title !== 'The Partitive Articles') die(`unit ${UNIT_ID} title has changed: "${unitBody.title}"`);
    if (unitBody.sub !== 'Les articles partitifs') die(`unit ${UNIT_ID} sub has changed: "${unitBody.sub}"`);
    if (!unitBody.canDo?.startsWith('Can ask for an unspecified amount')) {
      die(`unit ${UNIT_ID} canDo has changed: "${unitBody.canDo}"`);
    }
    // The binding this batch is here to fix. Refuse if somebody has already
    // changed it to something else: two people disagreeing about a theme is a
    // decision, not a merge.
    const themesNow = unitBody.themes ?? [];
    if (themesNow.join() !== UNIT_THEMES_BEFORE.join() && themesNow.join() !== UNIT_THEMES.join()) {
      die(
        `unit ${UNIT_ID} themes are ${JSON.stringify(themesNow)}, which is neither the broken binding this batch ` +
        `expects (${JSON.stringify(UNIT_THEMES_BEFORE)}) nor the one it writes (${JSON.stringify(UNIT_THEMES)}). ` +
        `Somebody has changed it; look before overwriting.`
      );
    }

    const nextUnit: Unit = {
      ...unitBody,
      themes: UNIT_THEMES,
      lessonIds: [...new Set([...(unitBody.lessonIds ?? []), LESSON.id])],
    };
    const unitIssues = validateUnit(nextUnit, nextUnit.id);
    if (unitIssues.length) die(`post-state fails validateUnit:\n${formatIssues(unitIssues)}`);

    // The theme must exist, or this batch has swapped one dead chip for
    // another. Measured against the database rather than asserted.
    const themeCount = await client.query<{ n: string }>(
      `select count(*)::text n from content_items where theme = $1 and status = 'published'`,
      [PARTITIFS_UNIT_THEME]
    );
    const nInTheme = Number(themeCount.rows[0]?.n ?? 0);
    if (nInTheme < 100) {
      die(`theme "${PARTITIFS_UNIT_THEME}" holds ${nInTheme} published items, which is not a deck worth pointing a chip at`);
    }

    const existingLesson = await client.query(
      `select 1 from content_units where kind = 'lesson' and slug = $1`,
      [LESSON.id]
    );

    const formats = qs.reduce<Record<string, number>>((a, q) => {
      const f = q.format ?? 'mcq';
      a[f] = (a[f] ?? 0) + 1;
      return a;
    }, {});

    console.log(`\n  authored items: ${AUTHORED.length} across ${new Set(AUTHORED.map((i) => i.theme)).size} themes`);
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
      `  lesson: ${LESSON.id} "${LESSON.title}" — ${existingLesson.rowCount ? 'updating' : 'NEW'}, ` +
      `${LESSON.sections.length} sections, ${LESSON.itemIds.length} itemIds`
    );
    console.log(`  acts: ${LESSON.acts?.length} | drills: ${LESSON.drills?.length} | sheets: ${LESSON.sheets?.length} | triggers: ${LESSON.errorTriggers?.length} | terms: ${Object.keys(LESSON.terms ?? {}).length}`);
    console.log(`  quiz: ${qs.length} questions in ${rounds.length} rounds`);
    console.log(`  quiz formats: ${Object.entries(formats).map(([k, v]) => `${k} ${v}`).join(', ')}`);
    console.log(`  mcq share: ${Math.round((formats.mcq ?? 0) / qs.length * 100)}% (ceiling 50) | errorSpot share: ${Math.round((formats.errorSpot ?? 0) / qs.length * 100)}%`);
    console.log(`  every question has a why: ${qs.every((q) => q.why) ? 'yes' : 'NO'} and a ref: ${qs.every((q) => q.ref) ? 'yes' : 'NO'}`);
    console.log(`  SRS tranches: ${LESSON.deckTranche?.map((t) => t.length).join(' + ')} = ${LESSON.deckTranche?.flat().length} cards across ${LESSON.acts?.length} acts`);
    console.log(`  drills reachable from a round: ${fired.size}/${teaching.length}`);
    console.log(`  dictation: ${PARTITIFS_DICTATION_IDS.length} sentences, all in word mode`);
    console.log(`  recordings requested: ${LESSON.audio?.recorded?.length} (all fall back to TTS until delivered)`);
    console.log(`  respellings authored for this lesson: ${Object.keys(RESPELL).length}, all passing the nasal convention`);
    console.log(`  reframe: "${REFRAME}" x${hits}`);
    console.log(`  validators: schema ✓  density ✓  house style ✓  no grammar jargon ✓  metalanguage excluded ✓`);
    console.log(`\n  UNIT EDIT (not silent):`);
    console.log(`    ${UNIT_ID} themes:    ${JSON.stringify(unitBody.themes ?? null)} → ${JSON.stringify(nextUnit.themes)}   ("${PARTITIFS_UNIT_THEME}" holds ${nInTheme} published items; "nourriture" holds 0)`);
    console.log(`    ${UNIT_ID} lessonIds: ${JSON.stringify(unitBody.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);
    console.log(`    ${UNIT_ID} prereqUnitIds: ${JSON.stringify(unitBody.prereqUnitIds ?? [])} (UNCHANGED, and see the handover note: this lesson leans on a1.11 and the chain names only a1.04)`);

    if (DRY_RUN) {
      console.log('\n✓ dry run — all valid, nothing written.\n');
      return;
    }

    await client.query('begin');
    for (const it of NEW_ITEMS) {
      await client.query(
        `insert into content_items
           (id, kind, level, theme, fr, en, ipa, respell, gender, example, notes, tags, drills, audio_ref, version, status, generated_by)
         values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10::jsonb,$11,$12,$13,null,$14,'published','human')
         on conflict (id) do update set
           kind=excluded.kind, level=excluded.level, theme=excluded.theme, fr=excluded.fr, en=excluded.en,
           ipa=excluded.ipa, respell=excluded.respell, gender=excluded.gender, example=excluded.example,
           notes=excluded.notes, tags=excluded.tags, drills=excluded.drills, version=excluded.version`,
        [
          it.id, it.kind, it.level, it.theme, it.fr, it.en, it.ipa ?? null, it.respell ?? null,
          it.gender ?? null, it.example ? JSON.stringify(it.example) : null, it.notes ?? null,
          it.tags, it.drills, it.version,
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
      `\n✓ partitifs batch applied: ${NEW_ITEMS.length} items (${AUTHORED.length} authored, ${IMPORTS.length} imported) + lesson ${LESSON.id} published,` +
      `\n  unit ${UNIT_ID} linked and rebound from "nourriture" to "${PARTITIFS_UNIT_THEME}".` +
      `\n  Next: pnpm tsx scripts/merge-articles-partitifs-into-seed.ts --dry-run` +
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
