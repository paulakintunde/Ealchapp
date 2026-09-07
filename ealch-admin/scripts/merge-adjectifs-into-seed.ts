/* Writes a1.14.l1 "Les adjectifs de base" into ealch-v2/src/content/seed.json.
 *
 *     pnpm tsx scripts/merge-adjectifs-into-seed.ts --dry-run
 *     pnpm tsx scripts/merge-adjectifs-into-seed.ts
 *
 * RUN THE BATCH FIRST. Postgres is the source of truth and seed.json is a cut of
 * it; content:publish regenerates the seed FROM the database, so a lesson that
 * exists only in the seed is deleted the next time anybody publishes. sons.07.l1
 * was written to the seed, erased by somebody else's publish, and survived only
 * because its source files were intact.
 *
 * NONE OF THIS LESSON'S THREE SOURCE THEMES IS IN SEED_CUT.themes.
 * `adjectifs-essentiels` holds 632 published rows in Postgres and FOUR in the
 * seed; `couleurs` and `description-personnes-objets` are outside the cut too.
 * So every row this lesson names has to be carried in here or it renders as an
 * empty card on a device. That is why this merge adds 48 items rather than the 4
 * the lesson authors.
 *
 * THIS MERGE ALSO REBINDS ITS OWN UNIT'S THEME, from `famille` to
 * `adjectifs-essentiels`, matching what the batch wrote to Postgres. It refuses
 * if any OTHER unit's themes would move: a1.15 and a1.17 both declare `famille`
 * and both keep it.
 *
 * NEVER `git checkout seed.json` to undo something. It discards other authors'
 * uncommitted lessons. Re-run this script. */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
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
import { endingPopulation } from '../../ealch-v2/src/content/gender.logic.ts';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';
import { matchesAccept } from '../../ealch-v2/src/content/answer.logic.ts';
import {
  AUTHORED_WORDS, BOTH_ORDERS_IDS, COLOUR_CONTRAST_ID, FAMILY_TEACHING, FORBIDDEN_FEMININES,
  FORBIDDEN_ORDERS, FORBIDDEN_PLURALS, FORBIDDEN_VOWEL_FORMS, HEADWORD_IDS, IMPORTED,
  NOT_TAUGHT_IDS, OTHER_ADJECTIVES, PLACEMENT_SYSTEM, POSSESSIVE_TEACHING, RESPELL,
  RESPELL_REPAIRS, REUSED, SPEAK_SENTENCE_IDS, THE_SIX, VOWEL_PAIRS, frOf, gridFor, hasFormOf,
  wordToItem,
} from './data/adjectifs-corpus.ts';
import {
  ADJECTIFS_DICTATION_IDS, ADJECTIFS_LESSON, ADJECTIFS_SPEAK_IDS, REFRAME,
} from './data/adjectifs-lesson.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');

const DRY_RUN = process.argv.includes('--dry-run');

const REFRAME_APPEARANCES = 9;
const EXPECTED_TRIGGERS = 6;
const EXPECTED_ROUNDS = 6;
const EXPECTED_SIX = 6;
const EXPECTED_AUTHORED_WORDS = 4;
const NASAL_WORDS = ['grand', 'bon', 'grands', 'bons'];
const NOT_NASAL = ['bonne', 'bonnes'];

const UNIT_ID = 'a1.14';
const UNIT_THEMES_FROM = ['famille'];
const UNIT_THEMES_TO = ['adjectifs-essentiels'];
const UNIT_TITLE = 'Basic Adjectives';
const UNIT_SUB = 'Adjectifs de base';
const UNIT_CANDO = 'Can describe people and things with common adjectives, agreed for gender';

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

type Seed = { version: number; units: Unit[]; lessons: Lesson[]; items: Item[]; [k: string]: unknown };

const seed = JSON.parse(readFileSync(SEED, 'utf8')) as Seed;
const AUTHORED = AUTHORED_WORDS.map(wordToItem);
const IMPORTS = IMPORTED;
const NEW_ITEMS = [...AUTHORED, ...IMPORTS];
const LESSON = ADJECTIFS_LESSON;

console.log(`→ ${SEED}`);
console.log(`  seed version ${seed.version}: ${seed.items.length} items, ${seed.lessons.length} lessons, ${seed.units.length} units`);
if (DRY_RUN) console.log('  (dry run, nothing will be written)');

const OTHER_ITEMS = seed.items.filter((i) => !NEW_ITEMS.some((n) => n.id === i.id)).length;
const OTHER_LESSONS = seed.lessons.filter((l) => l.id !== LESSON.id).length;
const OTHER_LESSON_IDS = seed.lessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();

/** NAMED, not counted. A count alone lets a one-for-one swap through: drop a
 *  neighbour and add your own and the total is unchanged. Invariant §5. */
const NEIGHBOURS: Record<string, string> = {
  'a1.13.l1': 'the lesson immediately before this one, and the one this lesson is a correction to: it taught that a describing word follows the noun, which is true of every colour and false of all six words taught here.',
  'a1.03.l1': 'the declared prerequisite, which taught that things have a gender at all.',
  'a1.04.l1': 'where le, la and les were taught, which every noun phrase here sits inside.',
  'a1.06.l1': 'the verb être, which carries most of the paradigm sentences.',
  'a1.07.l1': 'the verb avoir, and the elision this lesson leans on for bel and vieil.',
  'a1.05.l1': 'mon, ma and mes, which appear in almost every phrase here and are never explained.',
  'sons.06.l1': 'the silent letters lesson, which already taught why grande says its d, and which AUTHORED grande and petite themselves.',
  'sons.03.l1': 'the nasal vowels, which authored bonne and the note about a vowel blocking nasalization.',
  'sons.07.l1': 'the elision lesson, which taught the pressure that bel and vieil exist to relieve.',
  'a1.01.l1': 'the A1 reference implementation, and the lesson whose tone this one matches.',
};

/* ── Everything the batch checks, checked again against the POST-MERGE seed ── */

const itemIssues = NEW_ITEMS.flatMap((it) => validateItem(it, it.id));
if (itemIssues.length) die(`items invalid:\n${formatIssues(itemIssues)}`);

const ids = NEW_ITEMS.map((i) => i.id);
const dupeIds = ids.filter((id, i) => ids.indexOf(id) !== i);
if (dupeIds.length) die(`duplicate ids in batch: ${[...new Set(dupeIds)].join(', ')}`);
if (AUTHORED.length !== EXPECTED_AUTHORED_WORDS) {
  die(`${AUTHORED.length} rows authored, expected ${EXPECTED_AUTHORED_WORDS}`);
}

{
  // Computed the way flashhub-coverage.test.ts computes it, over the POST-MERGE
  // item set rather than the batch alone: a duplicate only appears once the new
  // rows sit beside the existing ones. This is the check that would have failed
  // if the six headwords or the four existing feminines had been re-authored.
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
  NEW_ITEMS.map((i) => ({ id: i.id, fr: i.fr, kind: i.kind, gender: i.gender ?? null, tags: i.tags }))
);
if (genderPopulation.length) {
  die(
    `this merge would add ${genderPopulation.length} row(s) to a1.03's measured ending population:\n  `
    + genderPopulation.map((i) => `${i.id} "${i.fr}"`).join('\n  ') + `\n`
    + `  a1-03-genre.test.ts re-measures twenty printed figures from this file on every run.`
  );
}

const lessonIssues = validateLesson(LESSON, LESSON.id);
if (lessonIssues.length) die(`lesson invalid:\n${formatIssues(lessonIssues)}`);

const POST_MERGE_IDS = new Set([...seed.items.map((i) => i.id), ...ids]);
const density = validateDensity(LESSON, POST_MERGE_IDS);
if (density.length) die(`lesson fails the density validator:\n${formatDensity(density)}`);

const authoredJson = JSON.stringify({ AUTHORED, LESSON });
if (authoredJson.includes('—')) die('em dash found in authored copy, the house style bans it');
if (/honest/i.test(authoredJson)) die('the word "honest" is banned from authored content');
if (authoredJson.includes('‿')) die('U+203F tie character, which renders as an underscore on a device');

const learnerFacing = [
  ...strings(LESSON.sections),
  ...strings(LESSON.sheets ?? []),
  ...strings(LESSON.terms ?? {}),
];
const isIdentifier = (s: string) => !/\s/.test(s) && /^[a-z0-9][a-z0-9.\-_/]*$/i.test(s);
const jargon = learnerFacing.filter((s) => !isIdentifier(s)
  && /\b(conjugaison|article (défini|indéfini|partitif)|adjectif|(?<!')accord|complément circonstanciel|masculin|féminin|invariable|déterminant)\b/i.test(s));
if (jargon.length) die(`grammar vocabulary reached an A1 learner:\n  ${jargon.slice(0, 3).join('\n  ')}`);

const hits = strings(LESSON).filter((s) => s.includes(REFRAME)).length;
if (hits !== REFRAME_APPEARANCES) die(`the reframe appears ${hits} times, expected exactly ${REFRAME_APPEARANCES}`);

const badNasal = Object.values(RESPELL).filter((d) => hasPlainNasalFor(d.fr, d.respell));
if (badNasal.length) {
  die(`respellings close a nasal vowel with a plain n or m:\n  ${badNasal.map((d) => `${d.fr} ${d.respell}`).join('\n  ')}`);
}
const missingSuperscript = NASAL_WORDS.filter((c) => !RESPELL[c]?.respell.includes('ⁿ'));
if (missingSuperscript.length) die(`word(s) carrying a nasal vowel with no superscript n: ${missingSuperscript.join(', ')}`);
const wronglyNasalised = NOT_NASAL.filter((c) => RESPELL[c]?.respell.includes('ⁿ'));
if (wronglyNasalised.length) {
  die(
    `word(s) respelled with a superscript n that have NO nasal vowel: ${wronglyNasalised.join(', ')}\n`
    + `  bonne is /bɔn/ and its doubled n is a real consonant. The correct value is BON, not BOHⁿ.`
  );
}
if (RESPELL.bonne.respell !== '[BON]') die(`bonne is respelled ${RESPELL.bonne.respell}, expected [BON]`);
if (RESPELL.petit.respell !== '[pə-TEE]' || RESPELL.petite.respell !== '[pə-TEET]') {
  die(`petit and petite must share a first syllable; they sit on one card and the feminine is a reused row`);
}

if (THE_SIX.length !== EXPECTED_SIX) die(`THE_SIX holds ${THE_SIX.length} words, expected ${EXPECTED_SIX}`);
if (HEADWORD_IDS.length !== EXPECTED_SIX) die(`${HEADWORD_IDS.length} headwords resolve, expected ${EXPECTED_SIX}`);

const learnerText = learnerFacing.join('\n');
const quizSection = LESSON.sections.find((s) => s.type === 'quiz');
const qs = quizSection && quizSection.type === 'quiz' ? quizQuestions(quizSection) : [];
const quizText = strings(quizSection ?? {}).join('\n');

for (const a of THE_SIX) {
  if (!hasFormOf(learnerText, a)) die(`"${a}" is never named on any screen`);
  if (!hasFormOf(quizText, a)) die(`"${a}" is taught and never tested`);
  const grid = gridFor(a);
  const missing = grid.filter((id) => !learnerText.includes(frOf(id)));
  if (missing.length) die(`not every form of ${a} is on a screen: missing ${missing.join(', ')}`);
}

const contrast = LESSON.sections.find((s) => {
  const t = strings(s).join('\n');
  return t.includes(frOf(COLOUR_CONTRAST_ID)) && BOTH_ORDERS_IDS.some((id) => t.includes(frOf(id)));
});
if (!contrast) die('no single section carries a post-noun colour and a pre-noun word from these six together');
const bothOrdersShown = BOTH_ORDERS_IDS.filter((id) => learnerText.includes(frOf(id)));
if (!bothOrdersShown.length) die('no phrase carrying BOTH orders at once is on a screen');

for (const p of VOWEL_PAIRS) {
  if (!learnerText.includes(frOf(p.vowel))) die(`${p.word} is not shown in front of a vowel: ${frOf(p.vowel)}`);
  if (!learnerText.includes(frOf(p.consonant))) die(`${p.word}'s consonant partner is not on a screen`);
}
for (const w of ['bel', 'vieil']) {
  if (!hasFormOf(learnerText, w)) die(`"${w}" is never named on a screen`);
  if (!hasFormOf(quizText, w)) die(`"${w}" is taught and never tested`);
}

/* ── No wrong form ever merged as correct French ───────────────────────────── */

const correctFrench: string[] = [
  ...AUTHORED.map((i) => i.fr),
  ...LESSON.sections.flatMap((s) => (s.type === 'commonErrors' ? s.errors.map((e) => e.right) : [])),
  ...(LESSON.sheets ?? []).flatMap((sh) => (sh.sections ?? []).flatMap((sec) =>
    sec.type === 'cheatSheet' ? sec.rows.flatMap((r) => [r.k, r.say ?? '']) : [])),
];
const answerKeys: string[] = [
  ...qs.flatMap((q) => [q.answer ?? '', ...(q.accept ?? [])]),
  ...(LESSON.drills ?? []).flatMap((d) => (d.opts && d.correct !== undefined ? [d.opts[d.correct]] : [])),
  ...(LESSON.drills ?? []).flatMap((d) => (d.pairs ?? []).map((p) => p[1])),
  ...(LESSON.sections.find((s) => s.type === 'roundup') as { points?: string[] } | undefined)?.points ?? [],
];
const forbidden = [...FORBIDDEN_PLURALS, ...FORBIDDEN_FEMININES, ...FORBIDDEN_ORDERS, ...FORBIDDEN_VOWEL_FORMS];
const violations: string[] = [];
for (const text of [...correctFrench, ...answerKeys]) {
  for (const f of forbidden) {
    if (hasFormOf(text.toLowerCase(), f)) violations.push(`"${f}" in "${text}"`);
  }
}
if (violations.length) die(`a wrong form is merged as CORRECT French:\n  ${violations.join('\n  ')}`);

const PLURAL_ONLY = /\b(grands|grandes|petits|petites|beaux|belles|vieilles|bons|bonnes|mauvaises)\b/i;
const plural = qs.filter((q) => q.format === 'listenChoose' && (q.opts ?? []).some((o) => PLURAL_ONLY.test(o)));
if (plural.length) die(`ear question(s) whose options include a plural form: ${plural.map((q) => q.q).join(' | ')}`);
const earSection = LESSON.sections.find((s) => s.type === 'listening');
if (earSection && earSection.type === 'listening' && earSection.lines.some((l) => PLURAL_ONLY.test(l.fr))) {
  die('the listening section carries a plural line');
}

const productionSurfaces = [
  ...strings(LESSON.sections.filter((s) => ['vocabThemes', 'flashcards', 'reviewDeck', 'cardDeck'].includes(s.type))),
  ...strings(LESSON.drills ?? []),
  ...strings((quizSection ?? {}) as unknown),
].join('\n').toLowerCase();
const adjHit = OTHER_ADJECTIVES.filter((w) => hasFormOf(productionSurfaces, w));
if (adjHit.length) die(`adjective(s) taught here that are not among the six: ${adjHit.join(', ')}`);
const forbiddenIds = NOT_TAUGHT_IDS.filter((id) => LESSON.itemIds.includes(id) || strings(LESSON).includes(id));
if (forbiddenIds.length) die(`id(s) this lesson must not teach: ${forbiddenIds.join(', ')}`);
const placeHit = PLACEMENT_SYSTEM.filter((w) => learnerText.toLowerCase().includes(w));
if (placeHit.length) die(`placement TEACHING found, which belongs to a1.16: ${placeHit.join(', ')}`);
const famHit = FAMILY_TEACHING.filter((w) => learnerText.toLowerCase().includes(w));
if (famHit.length) die(`family vocabulary taught here, which belongs to a1.15: ${famHit.join(', ')}`);
const possHit = POSSESSIVE_TEACHING.filter((w) => learnerText.toLowerCase().includes(w));
if (possHit.length) die(`the possessive system taught here, which belongs to a1.17: ${possHit.join(', ')}`);

const imageRefs = strings(LESSON).filter((s) => /^lessons\/[a-z0-9-]+\/[a-z0-9-]+\.(jpg|png|webp)$/i.test(s));
if (imageRefs.length) {
  die(
    `${imageRefs.length} imageRef(s) authored: ${imageRefs.join(', ')}\n`
    + `  Nothing validates imageRef. Register it in src/content/lessonImages.ts and write your own test.`
  );
}

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
const dupOpt = qs.filter((q) => q.opts && new Set(q.opts).size !== q.opts.length);
if (dupOpt.length) die(`question(s) with a duplicate option: ${dupOpt.map((q) => q.q).join(' | ')}`);
const unacceptable = qs.filter((q) => q.answer && !matchesAccept(q.answer, q.accept));
if (unacceptable.length) {
  die(`question(s) that do not accept their own answer:\n  ${unacceptable.map((q) => `"${q.q}" shows "${q.answer}"`).join('\n  ')}`);
}

const wrongAgreements = (a: string): string[] => {
  const out = new Set<string>();
  if (/es$/.test(a)) out.add(a.slice(0, -2)).add(a.slice(0, -1));
  else if (/[es]$/.test(a)) out.add(a.slice(0, -1));
  if (!/s$/.test(a)) out.add(`${a}s`);
  if (!/e$/.test(a)) out.add(`${a}e`);
  return [...out].filter((v) => v && v !== a);
};
const tooLenient: string[] = [];
for (const q of qs) {
  if (q.format !== 'typeIn' && q.format !== 'errorSpot' && q.format !== 'speak') continue;
  if (!q.answer) continue;
  const words = q.answer.replace(/[.?!]$/, '').split(/\s+/);
  for (const variant of wrongAgreements(words[words.length - 1])) {
    if (matchesAccept([...words.slice(0, -1), variant].join(' '), q.accept)) {
      tooLenient.push(`"${q.q}" accepts "${variant}" as well as "${q.answer}"`);
    }
  }
}
if (tooLenient.length) die(`free-text question(s) that accept the WRONG agreement:\n  ${tooLenient.join('\n  ')}`);

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

if (JSON.stringify(LESSON).includes('"autoplay"')) {
  die('autoplay is authored somewhere. It is declared in schema.ts and read by no component. Use audioFirst.');
}

/* ── The unit, the rebind, and every id resolving AFTER this merge ─────────── */

const unit = seed.units.find((u) => u.id === UNIT_ID);
if (!unit) die(`unit "${UNIT_ID}" is not in the seed`);
if (unit.title !== UNIT_TITLE) die(`unit ${UNIT_ID} title has changed: ${JSON.stringify(unit.title)}`);
if (unit.sub !== UNIT_SUB) die(`unit ${UNIT_ID} sub has changed: ${JSON.stringify(unit.sub)}`);
if (unit.canDo !== UNIT_CANDO) die(`unit ${UNIT_ID} canDo has changed: ${JSON.stringify(unit.canDo)}`);
const expectedTag = `A1 · LEÇON ${String(unit.seq).padStart(2, '0')}`;
if (LESSON.tag !== expectedTag) {
  die(`the lesson tag is "${LESSON.tag}" and the unit sits at seq ${unit.seq}, so the header will draw "${expectedTag}"`);
}
const themesNow = (unit as Unit & { themes?: string[] }).themes ?? [];
const alreadyRebound = themesNow.join() === UNIT_THEMES_TO.join();
if (!alreadyRebound && themesNow.join() !== UNIT_THEMES_FROM.join()) {
  die(
    `unit ${UNIT_ID} themes are ${JSON.stringify(themesNow)}, expected ${JSON.stringify(UNIT_THEMES_FROM)} (before) `
    + `or ${JSON.stringify(UNIT_THEMES_TO)} (after). Somebody has moved this binding. Look before overwriting.`
  );
}

const willExist = new Set([...seed.items.map((i) => i.id), ...ids]);
const dangling = LESSON.itemIds.filter((id) => !willExist.has(id));
if (dangling.length) die(`itemIds that will not resolve after this merge:\n  ${dangling.join('\n  ')}`);
const namedIds = new Set(strings(LESSON).filter((s) => /^fr\.[a-z0-9]+\.[a-z0-9-]+\.\d{3,}$/.test(s)));
const danglingAnywhere = [...namedIds].filter((id) => !willExist.has(id));
if (danglingAnywhere.length) {
  die(`id(s) named somewhere in the lesson that will not resolve:\n  ${danglingAnywhere.join('\n  ')}`);
}

const inSeed = new Map(seed.items.map((i) => [i.id, i]));
const reusedMissing = REUSED.filter((r) => !inSeed.has(r.id));
if (reusedMissing.length) die(`REUSED names items absent from the seed:\n  ${reusedMissing.map((r) => r.id).join('\n  ')}`);
const reusedDrift = REUSED
  .filter((r) => inSeed.get(r.id)!.fr !== r.fr)
  .map((r) => `${r.id}: this lesson says "${r.fr}", the seed says "${inSeed.get(r.id)!.fr}"`);
if (reusedDrift.length) die(`REUSED has drifted from the seed:\n  ${reusedDrift.join('\n  ')}`);

const dictModes: string[] = [];
{
  const post = new Map<string, Item>([...seed.items.map((i) => [i.id, i] as const), ...NEW_ITEMS.map((i) => [i.id, i] as const)]);
  const noDictTag: string[] = [];
  const wrongMode: string[] = [];
  for (const id of ADJECTIFS_DICTATION_IDS) {
    const it = post.get(id);
    if (!it) die(`the dictée names ${id}, which will not exist after this merge`);
    const mode = dicteeMode(it.fr);
    dictModes.push(`${mode === 'words' ? 'WORDS' : 'letters'} "${it.fr}"`);
    if (mode !== 'letters') wrongMode.push(`${id} "${it.fr}" is ${mode} mode`);
    if (!it.drills.includes('dictation')) noDictTag.push(`${id} "${it.fr}"`);
  }
  if (noDictTag.length) die(`dictation item(s) with no "dictation" drill:\n  ${noDictTag.join('\n  ')}`);
  if (wrongMode.length) {
    die(
      `dictée target(s) that land in WORD mode:\n  ${wrongMode.join('\n  ')}\n`
      + `  Word mode offers each whole word as a tile, so the learner never writes the agreement ending.`
    );
  }

  const badSpeak = ADJECTIFS_SPEAK_IDS.filter((id) => !post.get(id)?.drills.includes('voiceflash'));
  if (badSpeak.length) die(`speak items with no voiceflash after this merge:\n  ${badSpeak.join('\n  ')}`);
}

/* ── Write ─────────────────────────────────────────────────────────────────── */

const existing = seed.lessons.find((l) => l.id === LESSON.id);
if (existing && JSON.stringify(existing) !== JSON.stringify(LESSON)) {
  console.warn(
    `\n! seed.json already carries a DIFFERENT ${LESSON.id}`
    + `\n  seed: v${existing.version}, ${existing.sections.length} sections, ${existing.itemIds.length} items`
    + `\n  here: v${LESSON.version}, ${LESSON.sections.length} sections, ${LESSON.itemIds.length} items`
    + `\n  Overwriting with the authored copy. If the seed copy was newer, restore it from git first.\n`
  );
  if (existing.version > LESSON.version) {
    die(
      `the seed carries v${existing.version} and this source is v${LESSON.version}. Replacing a higher version with `
      + `a lower one reads as a rollback. Move the version counter forward in adjectifs-lesson.ts.`
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
  if (!row) die(`respelling repair names ${r.id}, which is not in the seed after this merge`);
  if (row.respell !== r.from && row.respell !== r.to) {
    die(
      `respelling repair for ${r.id}: expected "${r.from}", the seed says "${row.respell}".\n`
      + `  Somebody has changed this row. Look before overwriting.`
    );
  }
  if (row.respell !== r.to) {
    byId.set(r.id, { ...row, respell: r.to });
    repaired.push(`${r.id} ${r.fr}: "${r.from}" → "${r.to}"${r.caughtByChecker ? '' : '   (INVISIBLE to every shared check)'}`);
  }
}

const nextItems = [...byId.values()];
const nextLessons = [...seed.lessons.filter((l) => l.id !== LESSON.id), LESSON];

const nextUnit: Unit = {
  ...unit,
  themes: UNIT_THEMES_TO,
  lessonIds: [...new Set([...(unit.lessonIds ?? []), LESSON.id])],
} as Unit;
const unitIssues = validateUnit(nextUnit, nextUnit.id);
if (unitIssues.length) die(`post-state fails validateUnit:\n${formatIssues(unitIssues)}`);
const nextUnits = seed.units.map((u) => (u.id === UNIT_ID ? nextUnit : u));

// `seed.version` is the OTA SNAPSHOT number and is NOT this merge's counter.
// publish-content.ts derives it as previous + 1 and content.ts compares it
// against the downloaded manifest. Spread the seed and leave it alone.
const next: Seed = { ...seed, items: nextItems, lessons: nextLessons, units: nextUnits };

// NO OTHER UNIT MOVES. This is the check that matters most in this merge,
// because a1.14 is the first unit any lesson batch has rebound, and a1.15 and
// a1.17 both declare the theme it is giving up.
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
    + `  Something rewrote seed.json underneath this run. Re-run it; do not force it.`
  );
}
const lost = OTHER_LESSON_IDS.filter((id) => !keptLessonIds.includes(id));
if (lost.length) die(`this merge would drop lesson(s) it does not own: ${lost.join(', ')}`);
for (const [id, why] of Object.entries(NEIGHBOURS)) {
  if (!keptLessonIds.includes(id)) {
    die(`${id} is gone from the seed after this merge. It is ${why} It must survive untouched.`);
  }
}

const formats = qs.reduce<Record<string, number>>((a, q) => {
  const f = q.format ?? 'mcq';
  a[f] = (a[f] ?? 0) + 1;
  return a;
}, {});

console.log(`  items: +${added} new (${AUTHORED.length} authored, ${importedNew} imported from outside the seed cut), ${updated} updated (${seed.items.length} → ${nextItems.length})`);
for (const theme of [...new Set(IMPORTS.map((i) => i.theme))]) {
  const n = IMPORTS.filter((i) => i.theme === theme).length;
  const already = seed.items.filter((i) => i.theme === theme).length;
  console.log(`    ${theme}: ${already} in the seed before this run, +${n} from the IMPORTED manifest`);
}
console.log(`    NONE of these themes is in SEED_CUT.themes, which is why adjectifs-essentiels held only`);
console.log(`    ${seed.items.filter((i) => i.theme === 'adjectifs-essentiels').length} rows before this run against 632 in Postgres.`);
console.log(`  the six headwords: ${HEADWORD_IDS.filter((id) => !inSeed.has(id)).length} were absent from the seed before this run`);
console.log(`  lesson: ${LESSON.id} ${existing ? `REPLACED (v${existing.version} → v${LESSON.version})` : `ADDED (v${LESSON.version})`} (${seed.lessons.length} → ${nextLessons.length})`);
console.log(`  sections: ${LESSON.sections.length} | acts: ${LESSON.acts?.length} | itemIds: ${LESSON.itemIds.length} | quiz: ${qs.length} in ${rounds.length} rounds`);
console.log(`  quiz formats: ${Object.entries(formats).map(([k, v]) => `${k} ${v}`).join(', ')} | mcq ${Math.round((formats.mcq ?? 0) / qs.length * 100)}%`);
console.log(`  the six: ${THE_SIX.join(', ')}, every one named on a screen AND tested by the exam`);
console.log(`  all four forms taught on all six, entirely from published corpus rows`);
console.log(`  the placement contrast is SHOWN on one screen: ${(contrast as { id?: string }).id}`);
console.log(`  phrases carrying BOTH orders at once: ${bothOrdersShown.length}`);
console.log(`  bel and vieil each shown in front of a vowel, beside a consonant partner: confirmed`);
console.log(`  no wrong form merged as correct French: confirmed`);
console.log(`  no ear question targets a plural: confirmed`);
console.log(`  no other adjective (six only), no placement system (a1.16), no family set (a1.15), no possessives (a1.17): confirmed`);
console.log(`  imageRefs: ${imageRefs.length}. Nothing validates imageRef, so this lesson authors none.`);
console.log(`  dictation: ${ADJECTIFS_DICTATION_IDS.length} lines, all letters mode`);
for (const m of dictModes) console.log(`    ${m}`);
console.log(`  speak: ${ADJECTIFS_SPEAK_IDS.length} lines (${ADJECTIFS_SPEAK_IDS.length - SPEAK_SENTENCE_IDS.length} headwords + ${SPEAK_SENTENCE_IDS.length} sentences), all carrying voiceflash`);
console.log(`  reframe: "${REFRAME}" x${hits}`);
console.log(`  unit ${UNIT_ID} themes:    ${JSON.stringify(themesNow)} → ${JSON.stringify(UNIT_THEMES_TO)}${alreadyRebound ? '  (already applied)' : '  REBOUND'}`);
console.log(`  unit ${UNIT_ID} lessonIds: ${JSON.stringify(unit.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);
console.log(`  NO OTHER UNIT MOVES. a1.15 and a1.17 keep famille; a1.16 keeps no theme at all:`);
for (const id of ['a1.13', 'a1.15', 'a1.16', 'a1.17']) {
  const u = nextUnits.find((x) => x.id === id);
  console.log(`    ${id.padEnd(6)} themes ${JSON.stringify((u as { themes?: unknown } | undefined)?.themes ?? null)}`);
}
console.log(`  items withdrawn: 0. This merge removes nothing.`);
console.log(`    This lesson imports NO gendered single-word noun, so a1.03's measured figures cannot move and`);
console.log(`    nothing had to be withdrawn. Verified through the real endingPopulation.`);
if (repaired.length) {
  console.log(`  respelling repairs applied to the seed (display only):`);
  for (const r of repaired) console.log(`    ${r}`);
} else {
  console.log(`  respelling repairs: already applied, nothing to do`);
}
console.log(`    bonne is ${RESPELL.bonne.respell} and deliberately NOT a superscript: /bɔn/ has a real n.`);
console.log(`  neighbours intact: ${Object.keys(NEIGHBOURS).join(', ')}`);
console.log(`  untouched lessons: ${keptLessonIds.join(', ')}`);
console.log(`  validators: schema ✓  density ✓  house style ✓  no duplicate words ✓  flashhub coverage ✓  a1.03 population untouched ✓  reused items match the seed ✓  no neighbour's content taught ✓  no other unit moved ✓`);

if (DRY_RUN) {
  console.log('\n✓ dry run, all valid, nothing written.\n');
  process.exit(0);
}

writeFileSync(SEED, JSON.stringify(next, null, 2) + '\n', 'utf8');
console.log(
  `\n✓ seed.json updated.`
  + `\n`
  + `\n  a1.14.l1 is now in BOTH Postgres and the seed, so this lesson is safe.`
  + `\n`
  + `\n  NOTE for whoever runs the next publish: ${importedNew} rows from adjectifs-essentiels, couleurs and`
  + `\n  description-personnes-objets are now in the seed and NONE of those themes is in SEED_CUT.themes.`
  + `\n  They survive a publish because publish-content.ts pulls in every item a bundled lesson references,`
  + `\n  and a1.14.l1 references all of them. If this lesson is ever unbundled, those rows leave with it.`
  + `\n`
  + `\n  NOTE for a1.16: placement is still yours in full. This lesson states ONCE that these six come first,`
  + `\n  shows it on every screen, and teaches no system, no category and no meaning-by-position pair. The`
  + `\n  exact wording that landed is listed at the foot of scripts/data/adjectifs-lesson.ts.`
  + `\n`
  + `\n  NOTE for a1.15 and a1.17: famille is now yours alone. a1.14 has given it up and is bound to`
  + `\n  adjectifs-essentiels instead. famille holds 331 published rows, all of them in the seed, and all of`
  + `\n  them family vocabulary. Run the probe before believing any absence.`
  + `\n`
  + `\n  STILL OPEN, and not this lesson's to fix: pnpm content:parity exits 1 on pre-existing`
  + `\n  divergences. Do not run pnpm content:publish until those are resolved.\n`
);
