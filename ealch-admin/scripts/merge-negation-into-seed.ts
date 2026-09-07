/* Writes a1.18.l1 "La négation" into ealch-v2/src/content/seed.json.
 *
 *     pnpm tsx scripts/merge-negation-into-seed.ts --dry-run
 *     pnpm tsx scripts/merge-negation-into-seed.ts
 *
 * RUN THE BATCH FIRST. Postgres is the source of truth and seed.json is a cut of
 * it; content:publish regenerates the seed FROM the database, so a lesson that
 * exists only in the seed is deleted the next time anybody publishes. sons.07.l1
 * was written to the seed, erased by somebody else's publish, and survived only
 * because its source files were intact.
 *
 * ══════════════════════════════════════════════════════════════════════════
 *  `negation-et-restriction` IS NOT IN SEED_CUT.themes.
 * ══════════════════════════════════════════════════════════════════════════
 *
 * It holds 604 published rows in Postgres and held ZERO in the seed before this
 * merge. That is a VISIBILITY fact and not an emptiness one, exactly as
 * `couleurs` was for a1.13 (322 published, 0 in the seed) and `meteo` for a1.10.
 *
 * So this merge CARRIES 45 rows: the 27 it authors and the 18 it imports. If it
 * left the seed unchanged for them, THAT would be the bug: every one of them
 * would render as an empty card. The six REUSED rows are already in the seed
 * and are verified rather than written.
 *
 * NEVER `git checkout seed.json` to undo something. It discards other authors'
 * uncommitted lessons. Re-run this script. */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import {
  formatIssues, quizQuestions, validateItem, validateLesson, validateUnit,
  type Item, type Lesson, type Unit,
} from '../../ealch-v2/src/content/schema.ts';
import { formatDensity, validateDensity, hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { endingPopulation } from '../../ealch-v2/src/content/gender.logic.ts';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';
import { matchesAccept } from '../../ealch-v2/src/content/answer.logic.ts';
import {
  AUTHORED_ITEMS, CONTRAST_LIVRE, DROPPED_NE, FORBIDDEN_FORMS, IMPERATIVE_IDS, IMPORTED,
  INFINITIVE_FRAMES, NASAL_FORMS, NEGATIVE_IDS, NE_LESS_SHAPES, NOT_NASAL_FORMS, OTHER_NEGATORS,
  OWNED_ID_RANGE, PAIRS, POSITIVE_IDS, RESPELL, RESPELL_REPAIRS, REUSED,
} from './data/negation-corpus.ts';
import {
  BOTH_CHANGES_SECTION_ID, CONTRAST_SECTION_ID, NEGATION_DICTATION_IDS, NEGATION_LESSON,
  NEGATION_SPEAK_IDS, QUESTION_TEACHING, REFRAME,
} from './data/negation-lesson.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');

const DRY_RUN = process.argv.includes('--dry-run');

const REFRAME_APPEARANCES = 13;
const EXPECTED_TRIGGERS = 6;
const EXPECTED_ROUNDS = 6;
const EXPECTED_PAIRS = 13;
const EXPECTED_AUTHORED = 27;
const EXPECTED_ETRE_EXCEPTION_ROWS = 6;
const EXPECTED_SECTIONS = 28;

const UNIT_ID = 'a1.18';
const UNIT_THEMES = ['negation-et-restriction'];
const UNIT_TITLE = 'Negation';
const UNIT_SUB = 'La négation';
/** U+2026 HORIZONTAL ELLIPSIS in « ne… pas », not three periods. */
const UNIT_CANDO = 'Can turn any sentence they know negative with ne… pas';

function die(msg: string): never {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, out));
  return out;
}

function hasWord(haystack: string, needle: string): boolean {
  let from = 0;
  for (;;) {
    const i = haystack.indexOf(needle, from);
    if (i < 0) return false;
    const before = i === 0 ? ' ' : haystack[i - 1];
    const after = haystack[i + needle.length] ?? ' ';
    if (!/[a-zà-ÿœæ]/i.test(before) && !/[a-zà-ÿœæ]/i.test(after)) return true;
    from = i + 1;
  }
}

type Seed = { version: number; units: Unit[]; lessons: Lesson[]; items: Item[]; [k: string]: unknown };

const seed = JSON.parse(readFileSync(SEED, 'utf8')) as Seed;
const AUTHORED = AUTHORED_ITEMS;
const IMPORTS = IMPORTED;
const NEW_ITEMS = [...AUTHORED, ...IMPORTS];
const LESSON = NEGATION_LESSON;

console.log(`→ ${SEED}`);
console.log(`  seed version ${seed.version}: ${seed.items.length} items, ${seed.lessons.length} lessons, ${seed.units.length} units`);
if (DRY_RUN) console.log('  (dry run, nothing will be written)');

const OTHER_ITEMS = seed.items.filter((i) => !NEW_ITEMS.some((n) => n.id === i.id)).length;
const OTHER_LESSONS = seed.lessons.filter((l) => l.id !== LESSON.id).length;
const OTHER_LESSON_IDS = seed.lessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();

/** NAMED, not counted. A count alone lets a one-for-one swap through: drop a
 *  neighbour and add your own and the total is unchanged. Invariant §5.
 *
 *  The first three are the lessons that already taught this lesson's article
 *  rule. If a merge ever drops one, this lesson's whole act 3 is talking about
 *  content the learner has not seen. */
const NEIGHBOURS: Record<string, string> = {
  'a1.11.l1': 'the indefinite articles, whose s13-negation taught un/une/des -> de under a negative FIRST. This lesson credits it by name and does not reteach it.',
  'a1.29.l1': 'the partitive articles, whose s12-negation taught the same collapse on du and de la.',
  'a1.07.l1': 'a declared prerequisite, and its s15-negation taught the collapse AND the pas-faim case with no article. This lesson extends both.',
  'a1.06.l1': 'the other declared prerequisite, the verb être, which this lesson negates for the first time in the course.',
  'sons.07.l1': "l'élision, which owns ne becoming n' outright. This lesson references it rather than re-deriving it.",
  'a1.04.l1': 'where le, la and les were taught, and this lesson shows them surviving a negative.',
  'a1.05.l1': 'the subject pronouns.',
  'a1.03.l1': 'noun gender, whose measured ending population this lesson must not move.',
  'a1.17.l1': 'the newest A1 lesson before this one and its quality bar.',
};

/* ── Everything the batch checks, checked again against the POST-MERGE seed ── */

const itemIssues = NEW_ITEMS.flatMap((it) => validateItem(it, it.id));
if (itemIssues.length) die(`items invalid:\n${formatIssues(itemIssues)}`);

const ids = NEW_ITEMS.map((i) => i.id);
const dupeIds = ids.filter((id, i) => ids.indexOf(id) !== i);
if (dupeIds.length) die(`duplicate ids in batch: ${[...new Set(dupeIds)].join(', ')}`);

if (AUTHORED.length !== EXPECTED_AUTHORED) die(`${AUTHORED.length} authored rows, expected ${EXPECTED_AUTHORED}`);
if (PAIRS.length !== EXPECTED_PAIRS) die(`${PAIRS.length} pairs, expected ${EXPECTED_PAIRS}`);

for (const p of PAIRS) {
  const seq = (id: string) => Number(id.split('.').pop());
  if (seq(p.negId) !== seq(p.posId) + 1) die(`pair "${p.pos}" is not adjacent: ${p.posId} then ${p.negId}`);
  if (p.pos === p.neg) die(`pair ${p.posId} has an identical positive and negative`);
  if (!/\b(ne|n')\b/.test(p.neg.toLowerCase()) || !hasWord(p.neg.toLowerCase(), 'pas')) {
    die(`the negative of ${p.posId} does not carry both halves of the wrap: "${p.neg}"`);
  }
  if (hasWord(p.pos.toLowerCase(), 'pas')) die(`the POSITIVE of ${p.posId} contains pas: "${p.pos}"`);
}

/* ── THE ID COLLISION CHECK, against the seed this time ────────────────────
 *
 * a1.15 landed inside a1.17's id range mid-build on 2026-08-06 and a highest-id
 * check passed it cleanly. The seed is the other copy and can drift the same
 * way, so the same check runs here. */
{
  const foreign = seed.items.filter((i) => i.id >= OWNED_ID_RANGE.from && i.id <= OWNED_ID_RANGE.to
    && i.id.startsWith('fr.a1.negation-et-restriction.') && !ids.includes(i.id));
  if (foreign.length) {
    die(
      `${foreign.length} seed row(s) inside this lesson's own id range were authored by somebody else:\n  `
      + foreign.map((r) => `${r.id} "${r.fr}"`).join('\n  ') + `\n`
      + `  This merge would overwrite them. Renumber rather than forcing it.`,
    );
  }
}

{
  // Computed the way flashhub-coverage.test.ts computes it, over the POST-MERGE
  // item set rather than the batch alone: a duplicate only appears once the new
  // rows sit beside the existing ones. SENTENCES ARE EXEMPT, which is what lets
  // this lesson author « Je n'ai pas de voiture. » in its own theme while
  // fr.a1.famille.233 keeps the same string. A pair has to live in one theme.
  const headword = (fr: string) => fr.toLowerCase().replace(/^(le |la |les |l'|un |une |des )/, '').trim();
  const authoredIds = new Set(ids);
  const post = [...seed.items.filter((i) => !authoredIds.has(i.id)), ...NEW_ITEMS];
  const seenWord = new Map<string, string>();
  const dupeWords: string[] = [];
  for (const w of post) {
    if (w.kind === 'sentence') continue;
    if ((w.cardType ?? 'vocab') !== 'vocab') continue;
    const key = `${w.theme}::${headword(w.fr)}`;
    const prior = seenWord.get(key);
    if (prior) dupeWords.push(`${prior} vs ${w.id} ("${w.fr}") in ${w.theme}`);
    else seenWord.set(key, w.id);
  }
  if (dupeWords.length) die(`the same word twice in one theme after this merge:\n  ${dupeWords.join('\n  ')}`);
}

const SEPARATE_POOLS = new Set(['review+voiceflash', 'flashcard+review']);
const strandedVocab = NEW_ITEMS.filter(
  (i) => (i.level === 'a1' || i.level === 'a2')
    && i.kind !== 'sentence'
    && (i.cardType ?? 'vocab') === 'vocab'
    && !SEPARATE_POOLS.has([...i.drills].sort().join('+'))
    && !(i.drills.includes('flashcard') && i.drills.includes('voiceflash')),
);
if (strandedVocab.length) {
  die(`a1/a2 vocab items missing flashcard or voiceflash:\n  ${strandedVocab.map((i) => `${i.id} ${JSON.stringify(i.drills)}`).join('\n  ')}`);
}

const genderPopulation = endingPopulation(
  NEW_ITEMS.map((i) => ({ id: i.id, fr: i.fr, kind: i.kind, gender: i.gender ?? null, tags: i.tags })),
);
if (genderPopulation.length) {
  die(
    `this merge would add ${genderPopulation.length} row(s) to a1.03's measured ending population:\n  `
    + genderPopulation.map((i) => `${i.id} "${i.fr}"`).join('\n  ') + `\n`
    + `  a1-03-genre.test.ts re-measures twenty printed figures from this file on every run. a1.11 moved its -e\n`
    + `  statistic exactly this way. Nothing here should reach the population: every authored row is a sentence.`,
  );
}

const lessonIssues = validateLesson(LESSON, LESSON.id);
if (lessonIssues.length) die(`lesson invalid:\n${formatIssues(lessonIssues)}`);
if (LESSON.sections.length !== EXPECTED_SECTIONS) die(`${LESSON.sections.length} sections, expected ${EXPECTED_SECTIONS}`);

const POST_MERGE_IDS = new Set([...seed.items.map((i) => i.id), ...ids]);
const density = validateDensity(LESSON, POST_MERGE_IDS);
if (density.length) die(`lesson fails the density validator:\n${formatDensity(density)}`);

const authoredJson = JSON.stringify({ AUTHORED, LESSON });
if (authoredJson.includes('—')) die('em dash found in authored copy, the house style bans it');
if (/honest/i.test(authoredJson)) die('the word "honest" is banned from authored content');
if (authoredJson.includes('‿')) die('U+203F tie character in authored copy, which renders as a low underscore on a Pixel 6');

const learnerFacing = [
  ...strings(LESSON.sections),
  ...strings(LESSON.sheets ?? []),
  ...strings(LESSON.terms ?? {}),
];
const isIdentifier = (s: string) => !/\s/.test(s) && /^[a-z0-9][a-z0-9.\-_/]*$/i.test(s);
const jargon = learnerFacing.filter((s) => !isIdentifier(s)
  && /\b(conjugaison|article (défini|indéfini|partitif)|adjectif|possessif|(?<!')accord|complément circonstanciel|masculin|féminin|invariable|déterminant|négation|proposition subordonnée)\b/i.test(s));
if (jargon.length) die(`grammar vocabulary reached an A1 learner:\n  ${jargon.slice(0, 3).join('\n  ')}`);

const hits = strings(LESSON).filter((s) => s.includes(REFRAME)).length;
if (hits !== REFRAME_APPEARANCES) die(`the reframe appears ${hits} times, expected exactly ${REFRAME_APPEARANCES}`);

const badNasal = Object.values(RESPELL).filter((d) => hasPlainNasalFor(d.fr, d.respell));
if (badNasal.length) {
  die(`respellings close a nasal vowel with a plain n or m:\n  ${badNasal.map((d) => `${d.fr} ${d.respell}`).join('\n  ')}`);
}
const missingSuperscript = NASAL_FORMS.filter((f) => !RESPELL[f]?.respell.includes('ⁿ'));
if (missingSuperscript.length) {
  die(
    `form(s) carrying a nasal vowel with no superscript n: ${missingSuperscript.join(', ')}\n`
    + `  hasPlainNasalFor does not catch a word-internal nasal, so this is checked by name.`,
  );
}
const wronglyNasalised = NOT_NASAL_FORMS.filter((f) => RESPELL[f]?.respell.includes('ⁿ'));
if (wronglyNasalised.length) die(`form(s) respelled with a superscript n that have NO nasal vowel: ${wronglyNasalised.join(', ')}`);
if (RESPELL.non.respell !== '[NOHⁿ]') die(`non is respelled ${RESPELL.non.respell}, expected [NOHⁿ]`);
if (!hasPlainNasalFor('non', 'NOHN')) die('hasPlainNasalFor no longer flags NOHN. Read invariant §3 before trusting this repair.');

/* ── The teaching this lesson exists for ───────────────────────────────────── */

const sectionById = new Map(LESSON.sections.map((s) => [(s as { id?: string }).id ?? '', s]));
const textOf = (id: string) => strings(sectionById.get(id) ?? {}).join('\n');

{
  const t = textOf(BOTH_CHANGES_SECTION_ID);
  if (!t) die(`${BOTH_CHANGES_SECTION_ID} does not exist, and it is the both-changes screen`);
  const shown = PAIRS.filter((p) => p.outcome === 'collapses' && t.includes(p.pos) && t.includes(p.neg));
  if (shown.length < 3) {
    die(
      `${BOTH_CHANGES_SECTION_ID} shows ${shown.length} complete positive/negative pair(s), expected at least 3.\n`
      + `  A learner who sees only the wrap and meets the article change three missions later will have already\n`
      + `  fossilised pas un. Both changes have to be on ONE screen.`,
    );
  }
}

const contrastText = textOf(CONTRAST_SECTION_ID);
{
  if (!contrastText) die(`${CONTRAST_SECTION_ID} does not exist, and it is the screen this lesson is judged on`);
  const byOutcome = (o: string) => CONTRAST_LIVRE.find((p) => p.outcome === o);
  const collapsed = byOutcome('collapses');
  const survivesEtre = byOutcome('survives-etre');
  const survivesDef = byOutcome('survives-definite');
  if (!collapsed || !survivesEtre || !survivesDef) die('CONTRAST_LIVRE does not carry all three outcomes.');
  for (const p of [collapsed, survivesEtre, survivesDef]) {
    if (!contrastText.includes(p.neg)) {
      die(
        `${CONTRAST_SECTION_ID} does not show "${p.neg}".\n`
        + `  All three outcomes have to be on ONE screen, or the fact that only the VERB separates them is never\n`
        + `  visible on any screen the learner reaches.`,
      );
    }
  }
  const nouns = new Set(CONTRAST_LIVRE.map((p) => p.pos.replace(/.*\b(un|une|des|le|la|les)\s+/, '').replace(/[.!?]$/, '')));
  if (nouns.size !== 1) {
    die(`the three-way contrast uses ${nouns.size} different nouns (${[...nouns].join(', ')}), expected 1.`);
  }
  if (!hasWord(contrastText.toLowerCase(), 'pas de') || !hasWord(contrastText.toLowerCase(), 'pas un')) {
    die(`${CONTRAST_SECTION_ID} must carry both a "pas de" and a "pas un" example.`);
  }
}

const etreExceptionRows = AUTHORED.filter((i) => i.tags.includes('exception'));
if (etreExceptionRows.length !== EXPECTED_ETRE_EXCEPTION_ROWS) {
  die(`${etreExceptionRows.length} être-exception rows authored, expected ${EXPECTED_ETRE_EXCEPTION_ROWS}`);
}

{
  const def = PAIRS.find((p) => p.outcome === 'survives-definite');
  if (!def) die('no pair shows le, la or les surviving a negative. The rule ships over-generalised without one.');
  if (!learnerFacing.join('\n').includes(def.neg)) die(`the le-survival example "${def.neg}" is on no screen`);
}

/* ── The neighbours keep their lessons ─────────────────────────────────────── */

const quizSection = LESSON.sections.find((s) => s.type === 'quiz');
const qs = quizSection && quizSection.type === 'quiz' ? quizQuestions(quizSection) : [];
const productionSurfaces = [
  ...strings(LESSON.sections.filter((s) => ['vocabThemes', 'flashcards', 'reviewDeck', 'cardDeck', 'tapTable', 'practice', 'dictation'].includes(s.type))),
  ...strings(LESSON.drills ?? []),
  ...strings((quizSection ?? {}) as unknown),
];

const negatorHit = OTHER_NEGATORS.filter((w) => productionSurfaces.some((s) => hasWord(s.toLowerCase(), w)));
if (negatorHit.length) {
  die(
    `another negator reached a production surface: ${negatorHit.join(', ')}\n`
    + `  ne… jamais, ne… plus, ne… rien and ne… personne are excluded by this canDo and no A1 unit owns them.`,
  );
}
const imperativeImported = IMPERATIVE_IDS.filter((id) => ids.includes(id) || LESSON.itemIds.includes(id));
if (imperativeImported.length) die(`negative imperative(s) imported: ${imperativeImported.join(', ')}`);
const infinitiveHit = INFINITIVE_FRAMES.filter((f) => productionSurfaces.some((s) => s.toLowerCase().includes(f)));
if (infinitiveHit.length) die(`ne pas + infinitive reached a production surface: ${infinitiveHit.join(', ')}`);
const questionHit = QUESTION_TEACHING.filter((w) => productionSurfaces.some((s) => s.toLowerCase().includes(w)));
if (questionHit.length) die(`question teaching found, which belongs to a1.19 and a1.20: ${questionHit.join(', ')}`);

{
  const ORAL_ID = DROPPED_NE.id;
  if (NEGATION_SPEAK_IDS.includes(ORAL_ID)) die(`the speak mission names ${ORAL_ID}, which is the ne-less form.`);
  if (NEGATION_DICTATION_IDS.includes(ORAL_ID)) die(`the dictée names ${ORAL_ID}, which is the ne-less form.`);
  const produceKeys = [
    ...qs.filter((q) => ['typeIn', 'errorSpot', 'speak'].includes(q.format ?? 'mcq'))
      .flatMap((q) => [q.answer ?? '', ...(q.accept ?? []), (q as { target?: string }).target ?? '']),
    ...(LESSON.drills ?? []).flatMap((d) => (d.opts && d.correct !== undefined ? [d.opts[d.correct]] : [])),
  ].filter(Boolean);
  const neless = produceKeys.flatMap((s) =>
    NE_LESS_SHAPES.filter((shape) => hasWord(s.toLowerCase(), shape)).map(() => s));
  if (neless.length) {
    die(
      `a ne-less negative is a PRODUCE answer key:\n  ${[...new Set(neless)].join('\n  ')}\n`
      + `  Dropping the ne is taught here for RECOGNITION ONLY.`,
    );
  }
  if (!LESSON.itemIds.includes(ORAL_ID)) die(`${ORAL_ID} is in no itemIds, so the dropped ne is taught nowhere`);
}

const correctFrench: string[] = [
  ...AUTHORED.map((i) => i.fr),
  ...LESSON.sections.flatMap((s) => (s.type === 'commonErrors' ? s.errors.map((e) => e.right) : [])),
  ...(LESSON.sheets ?? []).flatMap((sh) => (sh.sections ?? []).flatMap((sec) =>
    (sec.type === 'table' ? sec.rows.flat() : []))),
];
const answerKeys: string[] = [
  ...qs.flatMap((q) => [q.answer ?? '', ...(q.accept ?? [])]),
  ...(LESSON.drills ?? []).flatMap((d) => (d.opts && d.correct !== undefined ? [d.opts[d.correct]] : [])),
  ...(LESSON.sections.find((s) => s.type === 'roundup') as { points?: string[] } | undefined)?.points ?? [],
];
const violations: string[] = [];
for (const text of [...correctFrench, ...answerKeys]) {
  for (const f of FORBIDDEN_FORMS) {
    if (hasWord(text.toLowerCase(), f)) violations.push(`"${f}" in "${text}"`);
  }
}
if (violations.length) die(`an ungrammatical form is authored as correct French:\n  ${violations.join('\n  ')}`);

const imageRefs = strings(LESSON).filter((s) => /^lessons\/[a-z0-9-]+\/[a-z0-9-]+\.(jpg|png|webp)$/i.test(s));
if (imageRefs.length) die(`${imageRefs.length} imageRef(s) authored: ${imageRefs.join(', ')}. Nothing validates imageRef.`);

/* ── Quiz ──────────────────────────────────────────────────────────────────── */

const rounds = quizSection && quizSection.type === 'quiz' ? (quizSection.rounds ?? []) : [];
const quizCount = LESSON.sections.filter((s) => s.type === 'quiz').length;
if (quizCount !== 1) die(`${quizCount} quiz sections. The pager renders exactly one, so the rest are unreachable.`);
const mcqCount = qs.filter((q) => (q.format ?? 'mcq') === 'mcq').length;
if (mcqCount * 2 > qs.length) die(`${mcqCount}/${qs.length} questions are mcq, over the half ceiling`);
const noWhy = qs.filter((q) => !q.why);
if (noWhy.length) die(`${noWhy.length} quiz question(s) carry no why`);
const sectionIds = new Set(LESSON.sections.map((s) => (s as { id?: string }).id).filter(Boolean) as string[]);
const badRef = qs.filter((q) => q.ref && !sectionIds.has(q.ref));
if (badRef.length) die(`quiz ref(s) naming a section that does not exist: ${badRef.map((q) => q.ref).join(', ')}`);

const POSITIONAL = ['the first', 'the second', 'the third', 'the last', 'both of the above',
  'all of the above', 'none of these', 'none of the above', 'the one above', 'the one below'];
const positional = qs.flatMap((q) => (q.opts ?? [])
  .filter((o) => POSITIONAL.some((p) => o.toLowerCase().includes(p)))
  .map((o) => `"${o}" in "${q.q}"`));
if (positional.length) die(`quiz option(s) referring to a position:\n  ${positional.join('\n  ')}`);
const dupeOpts = qs.flatMap((q) => {
  const seen = new Set<string>();
  return (q.opts ?? []).filter((o) => (seen.has(o) ? true : (seen.add(o), false)))
    .map((o) => `"${o}" twice in "${q.q}"`);
});
if (dupeOpts.length) die(`quiz question(s) with a duplicate option:\n  ${dupeOpts.join('\n  ')}`);

const closed = qs.filter((q) => typeof q.correct === 'number');
const slots = closed.reduce<Record<number, number>>((a, q) => {
  a[q.correct as number] = (a[q.correct as number] ?? 0) + 1;
  return a;
}, {});
const over = Object.entries(slots).filter(([, n]) => n / closed.length > 0.4);
if (over.length) die(`authored answer slot(s) over the 40% cap: ${over.map(([k, n]) => `slot ${k} holds ${n}/${closed.length}`).join(', ')}`);

const unacceptable = qs.filter((q) => q.answer && !matchesAccept(q.answer, q.accept));
if (unacceptable.length) {
  die(`question(s) that do not accept their own answer:\n  ${unacceptable.map((q) => `"${q.q}" shows "${q.answer}"`).join('\n  ')}`);
}

/* THE ROUND THAT WOULD OTHERWISE CERTIFY A BUG. Walks r4's own answer keys and
 * requires at least one SURVIVING article and one `de`. A round of four `de`
 * answers can be passed by a learner who has understood exactly half the rule. */
let r4Survives = 0;
let r4Collapses = 0;
{
  const r4 = rounds.find((r) => r.id === 'r4-the-verb-decides');
  if (!r4) die('the article round r4-the-verb-decides is gone, and it is the only round that mixes the two outcomes');
  const keys = (r4.questions ?? []).map((q) => `${q.answer ?? ''} ${(q.opts ?? [])[q.correct as number] ?? ''}`.toLowerCase());
  r4Survives = keys.filter((k) => /pas (un|une|des)\b/.test(k)).length;
  r4Collapses = keys.filter((k) => /pas d[e']/.test(k)).length;
  if (r4Survives < 1 || r4Collapses < 1) {
    die(
      `round r4-the-verb-decides has ${r4Survives} surviving-article answer(s) and ${r4Collapses} de answer(s).\n`
      + `  It needs BOTH, or a learner who always answers de passes the round about the exception.`,
    );
  }
}

const earQs = qs.filter((q) => q.format === 'listenChoose');
if (!earQs.length) die('no listenChoose question at all. The dropped ne is a real ear question and is worth one.');

const drillForTarget = new Map((LESSON.errorTriggers ?? []).map((t) => [t.id, t.drill]));
const leads: string[] = [];
for (const r of rounds) {
  const lead = (r.targets ?? []).find((t) => drillForTarget.has(t));
  if (!lead) die(`round ${r.id} names no target that resolves to a drill`);
  if (leads.includes(lead)) die(`round ${r.id} leads on "${lead}", which another round already leads on, so one drill is dead`);
  leads.push(lead);
}
const fired = new Set(leads.map((t) => drillForTarget.get(t)!));
if ((LESSON.errorTriggers ?? []).length !== EXPECTED_TRIGGERS) die(`expected ${EXPECTED_TRIGGERS} error triggers`);
if (rounds.length !== EXPECTED_ROUNDS) die(`expected ${EXPECTED_ROUNDS} quiz rounds`);
const orphans = (LESSON.drills ?? []).filter((d) => !d.id.startsWith('retest-') && !fired.has(d.id)).map((d) => d.id);
if (orphans.length) die(`drill(s) no quiz round can fire: ${orphans.join(', ')}`);

const sheetIds = new Set((LESSON.sheets ?? []).map((s) => s.id));
const danglingSheet = LESSON.sections
  .map((s) => (s as { sheetId?: string }).sheetId)
  .filter((id): id is string => Boolean(id) && !sheetIds.has(id!));
if (danglingSheet.length) die(`sheetId(s) naming a sheet that does not exist: ${[...new Set(danglingSheet)].join(', ')}`);

const badSheetSections = (LESSON.sheets ?? []).flatMap((sh) =>
  (sh.sections ?? []).filter((sec) => !['teach', 'letterGrid', 'table'].includes(sec.type))
    .map((sec) => `${sh.id}/${(sec as { id?: string }).id} is a ${sec.type}`));
if (badSheetSections.length) {
  die(
    `reference sheet section(s) of a type the component does not draw:\n  ${badSheetSections.join('\n  ')}\n`
    + `  ReferenceSheet.tsx draws teach, letterGrid and table and falls through to a title-only branch otherwise.`,
  );
}

if (JSON.stringify(LESSON).includes('"autoplay"')) {
  die('autoplay is authored somewhere. It is declared in schema.ts and read by no component. Use audioFirst.');
}

/* ── The unit, and every id resolving AFTER this merge ─────────────────────── */

const unit = seed.units.find((u) => u.id === UNIT_ID);
if (!unit) die(`unit "${UNIT_ID}" is not in the seed`);
if (unit.title !== UNIT_TITLE) die(`unit ${UNIT_ID} title has changed: "${unit.title}"`);
if (unit.sub !== UNIT_SUB) die(`unit ${UNIT_ID} sub has changed: "${unit.sub}"`);
if (unit.canDo !== UNIT_CANDO) {
  die(
    `unit ${UNIT_ID} canDo has changed:\n    seed:     ${JSON.stringify(unit.canDo)}\n`
    + `    expected: ${JSON.stringify(UNIT_CANDO)}\n`
    + `  The canDo contains U+2026 HORIZONTAL ELLIPSIS in « ne… pas », not three periods.`,
  );
}
const expectedTag = `A1 · LEÇON ${String(unit.seq).padStart(2, '0')}`;
if (LESSON.tag !== expectedTag) {
  die(`the lesson tag is "${LESSON.tag}" and the unit sits at seq ${unit.seq}, so the header will draw "${expectedTag}"`);
}
const themesNow = (unit as Unit & { themes?: string[] | null }).themes;
if (themesNow != null && themesNow.join() !== UNIT_THEMES.join()) {
  die(`unit ${UNIT_ID} already declares themes ${JSON.stringify(themesNow)}, expected null or ${JSON.stringify(UNIT_THEMES)}`);
}

const willExist = new Set([...seed.items.map((i) => i.id), ...ids]);
const dangling = LESSON.itemIds.filter((id) => !willExist.has(id));
if (dangling.length) die(`itemIds that will not resolve after this merge:\n  ${dangling.join('\n  ')}`);
const namedIds = new Set(strings(LESSON).filter((s) => /^fr\.[a-z0-9]+\.[a-z0-9-]+\.\d{3,}$/.test(s)));
const danglingAnywhere = [...namedIds].filter((id) => !willExist.has(id));
if (danglingAnywhere.length) die(`id(s) named somewhere in the lesson that will not resolve:\n  ${danglingAnywhere.join('\n  ')}`);

const inSeed = new Map(seed.items.map((i) => [i.id, i]));
const reusedMissing = REUSED.filter((r) => !inSeed.has(r.id));
if (reusedMissing.length) {
  die(
    `REUSED names items absent from the seed:\n  ${reusedMissing.map((r) => `${r.id} "${r.fr}"`).join('\n  ')}\n`
    + `  REUSED means "already in the seed and untouched". If one is missing, it belongs in IMPORTED instead.\n`
    + `  Re-run scripts/_negation_manifest.ts, which decides the split by asking the seed.`,
  );
}
const reusedDrift = REUSED
  .filter((r) => inSeed.get(r.id)!.fr !== r.fr)
  .map((r) => `${r.id}: this lesson says "${r.fr}", the seed says "${inSeed.get(r.id)!.fr}"`);
if (reusedDrift.length) die(`REUSED has drifted from the seed:\n  ${reusedDrift.join('\n  ')}`);

const dictModes: string[] = [];
{
  const post = new Map<string, Item>([...seed.items.map((i) => [i.id, i] as const), ...NEW_ITEMS.map((i) => [i.id, i] as const)]);
  const noDictTag: string[] = [];
  const wrongMode: string[] = [];
  for (const id of NEGATION_DICTATION_IDS) {
    const it = post.get(id);
    if (!it) die(`the dictée names ${id}, which will not exist after this merge`);
    const mode = dicteeMode(it.fr);
    dictModes.push(`${mode === 'words' ? 'WORDS' : 'letters'} "${it.fr}"`);
    if (mode !== 'words') wrongMode.push(`${id} "${it.fr}" is ${mode} mode`);
    if (!it.drills.includes('dictation')) noDictTag.push(`${id} "${it.fr}"`);
  }
  if (noDictTag.length) die(`dictation item(s) with no "dictation" drill:\n  ${noDictTag.join('\n  ')}`);
  if (wrongMode.length) {
    die(
      `dictée target(s) that land in LETTERS mode:\n  ${wrongMode.join('\n  ')}\n`
      + `  Word mode is the ORDER test, which is exactly step one of a negative. Choose a longer target.`,
    );
  }

  const badSpeak = NEGATION_SPEAK_IDS.filter((id) => !post.get(id)?.drills.includes('voiceflash'));
  if (badSpeak.length) die(`speak items with no voiceflash after this merge:\n  ${badSpeak.join('\n  ')}`);
  const positivesInSpeak = NEGATION_SPEAK_IDS.filter((id) => POSITIVE_IDS.includes(id));
  if (positivesInSpeak.length) die(`the speak mission names positive sentence(s): ${positivesInSpeak.join(', ')}`);
}

/* ── Write ─────────────────────────────────────────────────────────────────── */

const existing = seed.lessons.find((l) => l.id === LESSON.id);
if (existing && JSON.stringify(existing) !== JSON.stringify(LESSON)) {
  console.warn(
    `\n! seed.json already carries a DIFFERENT ${LESSON.id}`
    + `\n  seed: v${existing.version}, ${existing.sections.length} sections, ${existing.itemIds.length} items`
    + `\n  here: v${LESSON.version}, ${LESSON.sections.length} sections, ${LESSON.itemIds.length} items`
    + `\n  Overwriting with the authored copy. If the seed copy was newer, restore it from git first.\n`,
  );
  if (existing.version > LESSON.version) {
    die(
      `the seed carries v${existing.version} and this source is v${LESSON.version}. Replacing a higher version with `
      + `a lower one reads as a rollback. Move the version counter forward in negation-lesson.ts.`,
    );
  }
}

const byId = new Map(seed.items.map((i) => [i.id, i]));
let added = 0;
let updated = 0;
let importedNew = 0;
const importedIdSet = new Set(IMPORTS.map((i) => i.id));
for (const it of NEW_ITEMS) {
  if (byId.has(it.id)) updated++;
  else {
    added++;
    if (importedIdSet.has(it.id)) importedNew++;
  }
  byId.set(it.id, it);
}

const repaired: string[] = [];
for (const r of RESPELL_REPAIRS) {
  const row = byId.get(r.id);
  if (!row) {
    // A repair on a row this merge does not carry and the seed does not hold is
    // not this merge's to apply: the batch has already fixed it in Postgres.
    repaired.push(`${r.id} ${r.fr}: not in the seed, applied in Postgres only`);
    continue;
  }
  if (row.respell !== r.from && row.respell !== r.to) {
    die(
      `respelling repair for ${r.id}: expected "${r.from}", the seed says "${row.respell}".\n`
      + `  Somebody has changed this row. Look before overwriting.`,
    );
  }
  if (row.respell !== r.to) {
    byId.set(r.id, { ...row, respell: r.to });
    repaired.push(`${r.id} ${r.fr}: "${r.from}" → "${r.to}"`);
  }
}

const nextItems = [...byId.values()];
const nextLessons = [...seed.lessons.filter((l) => l.id !== LESSON.id), LESSON];

/** THE UNIT BINDING THIS MERGE CREATES. a1.18 ships with `themes: null` and a
 *  theme named for its own subject holds 604 published rows. */
const nextUnit: Unit = {
  ...unit,
  themes: UNIT_THEMES,
  lessonIds: [...new Set([...(unit.lessonIds ?? []), LESSON.id])],
} as Unit;
const unitIssues = validateUnit(nextUnit, nextUnit.id);
if (unitIssues.length) die(`post-state fails validateUnit:\n${formatIssues(unitIssues)}`);
const nextUnits = seed.units.map((u) => (u.id === UNIT_ID ? nextUnit : u));

// `seed.version` is the OTA SNAPSHOT number and is NOT this merge's counter.
// publish-content.ts derives it as previous + 1 and content.ts compares it
// against the downloaded manifest. Spread the seed and leave it alone.
const next: Seed = { ...seed, items: nextItems, lessons: nextLessons, units: nextUnits };

for (const before of seed.units) {
  if (before.id === UNIT_ID) continue;
  const after = nextUnits.find((u) => u.id === before.id);
  const ta = JSON.stringify((before as { themes?: unknown }).themes ?? null);
  const tb = JSON.stringify((after as { themes?: unknown } | undefined)?.themes ?? null);
  if (ta !== tb) die(`this merge would change unit ${before.id}'s themes: ${ta} -> ${tb}`);
  if (JSON.stringify(before.lessonIds ?? []) !== JSON.stringify(after?.lessonIds ?? [])) {
    die(`this merge would change unit ${before.id}'s lessonIds`);
  }
}

const keptItems = nextItems.filter((i) => !NEW_ITEMS.some((n) => n.id === i.id)).length;
const keptLessons = nextLessons.filter((l) => l.id !== LESSON.id).length;
const keptLessonIds = nextLessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();
if (keptItems < OTHER_ITEMS || keptLessons < OTHER_LESSONS) {
  die(
    `this merge would DROP content that is not its own:\n`
    + `  other items:   ${OTHER_ITEMS} -> ${keptItems}\n`
    + `  other lessons: ${OTHER_LESSONS} -> ${keptLessons}\n`
    + `  Something rewrote seed.json underneath this run. Re-run it; do not force it.`,
  );
}
const lost = OTHER_LESSON_IDS.filter((id) => !keptLessonIds.includes(id));
if (lost.length) die(`this merge would drop lesson(s) it does not own: ${lost.join(', ')}`);
for (const [id, why] of Object.entries(NEIGHBOURS)) {
  if (!keptLessonIds.includes(id)) die(`${id} is gone from the seed after this merge. It is ${why} It must survive untouched.`);
}

const formats = qs.reduce<Record<string, number>>((a, q) => {
  const f = q.format ?? 'mcq';
  a[f] = (a[f] ?? 0) + 1;
  return a;
}, {});

const themeBefore = seed.items.filter((i) => i.theme === 'negation-et-restriction').length;
const themeAfter = nextItems.filter((i) => i.theme === 'negation-et-restriction').length;

console.log(`  items: +${added} new (${AUTHORED.length} authored, ${importedNew} imported from outside the seed cut), ${updated} updated (${seed.items.length} → ${nextItems.length})`);
console.log(`    "negation-et-restriction" is NOT in SEED_CUT.themes: ${themeBefore} rows in the seed before this run → ${themeAfter} after.`);
console.log(`    It holds 604 published rows in Postgres. A merge that left the seed unchanged for these WOULD BE THE BUG.`);
for (const theme of [...new Set(IMPORTS.map((i) => i.theme))].sort()) {
  const n = IMPORTS.filter((i) => i.theme === theme).length;
  const already = seed.items.filter((i) => i.theme === theme).length;
  console.log(`    ${theme}: ${already} in the seed before this run, +${n} carried`);
}
console.log(`  id range owned: ${OWNED_ID_RANGE.from} to ${OWNED_ID_RANGE.to} (27 rows, .027 left as a gap)`);
console.log(`  lesson: ${LESSON.id} ${existing ? `REPLACED (v${existing.version} → v${LESSON.version})` : `ADDED (v${LESSON.version})`} (${seed.lessons.length} → ${nextLessons.length})`);
console.log(`  sections: ${LESSON.sections.length} | acts: ${LESSON.acts?.length} | itemIds: ${LESSON.itemIds.length} | quiz: ${qs.length} in ${rounds.length} rounds`);
console.log(`  quiz formats: ${Object.entries(formats).map(([k, v]) => `${k} ${v}`).join(', ')} | mcq ${Math.round((formats.mcq ?? 0) / qs.length * 100)}%`);
console.log(`  BOTH CHANGES ON ONE SCREEN: ${BOTH_CHANGES_SECTION_ID}`);
console.log(`  THE THREE-WAY CONTRAST: ${CONTRAST_SECTION_ID}`);
console.log(`    ${CONTRAST_LIVRE.map((p) => `${p.neg} (${p.outcome})`).join('  |  ')}`);
console.log(`  être-exception rows authored: ${etreExceptionRows.length}. The corpus carries TWO in 47,444 and neither is usable.`);
console.log(`  r4-the-verb-decides: ${r4Survives} surviving-article answer(s), ${r4Collapses} de answer(s). Cannot be passed by always answering de.`);
console.log(`  the dropped ne is RECOGNITION ONLY: not in speak, not in the dictée, no produce answer key`);
console.log(`  no other negator, no negative imperative, no ne pas + infinitive, no question teaching`);
console.log(`  a1.03's ending population: ${genderPopulation.length} rows added`);
console.log(`  no positional option, none duplicated, spread ${Object.entries(slots).map(([k, n]) => `${k}:${Math.round(n / closed.length * 100)}%`).join(' ')} (cap 40)`);
console.log(`  imageRefs: ${imageRefs.length}. Nothing validates imageRef, so this lesson authors none.`);
console.log(`  dictation: ${NEGATION_DICTATION_IDS.length} lines, all WORD mode (the order test)`);
for (const m of dictModes) console.log(`    ${m}`);
console.log(`  speak: ${NEGATION_SPEAK_IDS.length} lines, all negatives, all carrying voiceflash`);
console.log(`  reframe: "${REFRAME}" x${hits}`);
console.log(`  unit ${UNIT_ID} themes:    ${JSON.stringify(themesNow ?? null)} → ${JSON.stringify(UNIT_THEMES)}   <- THE BINDING THIS MERGE CREATES`);
console.log(`  unit ${UNIT_ID} lessonIds: ${JSON.stringify(unit.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);
console.log(`  items withdrawn: 0. This merge removes nothing.`);
if (repaired.length) {
  console.log(`  respelling repairs applied to the seed (display only):`);
  for (const r of repaired) console.log(`    ${r}`);
} else {
  console.log(`  respelling repairs: already applied, nothing to do`);
}
console.log(`  neighbours intact: ${Object.keys(NEIGHBOURS).filter((id) => keptLessonIds.includes(id)).join(', ')}`);
console.log(`  untouched lessons: ${keptLessonIds.join(', ')}`);
console.log(`  validators: schema ✓  density ✓  house style ✓  no duplicate words ✓  flashhub coverage ✓  a1.03 population untouched ✓  reused items match the seed ✓  no neighbour's content taught ✓  no other unit moved ✓  no foreign row in this id range ✓`);

if (DRY_RUN) {
  console.log('\n✓ dry run, all valid, nothing written.\n');
  process.exit(0);
}

writeFileSync(SEED, JSON.stringify(next, null, 2) + '\n', 'utf8');
console.log(
  `\n✓ seed.json updated.`
  + `\n`
  + `\n  a1.18.l1 is now in BOTH Postgres and the seed, so this lesson is safe.`
  + `\n`
  + `\n  NOTE for whoever runs the next publish: ${importedNew} rows from themes OUTSIDE SEED_CUT.themes are`
  + `\n  now in the seed. They survive a publish because publish-content.ts pulls in every item a bundled`
  + `\n  lesson references, and a1.18.l1 references all of them. If this lesson is ever unbundled, they go`
  + `\n  with it.`
  + `\n`
  + `\n  NOTE for a1.19 and a1.20: si is untouched and is yours. Negative questions are yours. Both`
  + `\n  reference sheets (sheet.a1.18.procedure, sheet.a1.18.outcomes) are built and linkable by sheetId.`
  + `\n  NEXT FREE is fr.a1.negation-et-restriction.070.`
  + `\n`
  + `\n  STILL OPEN, and not this lesson's to fix: pnpm content:parity exits 1 on pre-existing`
  + `\n  divergences. Do not run pnpm content:publish until those are resolved.\n`,
);
