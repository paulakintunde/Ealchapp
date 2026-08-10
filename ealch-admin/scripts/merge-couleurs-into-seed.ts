/* Writes a1.13.l1 "Les couleurs" into ealch-v2/src/content/seed.json.
 *
 *     pnpm tsx scripts/merge-couleurs-into-seed.ts --dry-run
 *     pnpm tsx scripts/merge-couleurs-into-seed.ts
 *
 * RUN THE BATCH FIRST. Postgres is the source of truth and seed.json is a cut of
 * it; content:publish regenerates the seed FROM the database, so a lesson that
 * exists only in the seed is deleted the next time anybody publishes. sons.07.l1
 * was written to the seed, erased by somebody else's publish, and survived only
 * because its source files were intact.
 *
 * `couleurs` IS NOT IN SEED_CUT.themes. It holds 322 published rows in Postgres
 * and zero in the seed, so every row this lesson names has to be carried in
 * here or it renders as an empty card on a device. That is why this merge adds
 * 47 items rather than the 17 the lesson authors.
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
  AUTHORED_WORDS, COLOUR_IDS, COULEURS, FORBIDDEN_COMPOUNDS, FORBIDDEN_FORMS, IMPORTED,
  MARRON_INVARIABLE_IDS, ORANGE_COLOUR_IDS, ORANGE_NOUN_IDS, RESPELL, RESPELL_REPAIRS, REUSED,
  THE_TWELVE, WITHDRAWN_IDS, frOf, gridFor, toItem, wordToItem,
} from './data/couleurs-corpus.ts';
import {
  COULEURS_DICTATION_IDS, COULEURS_LESSON, OTHER_ADJECTIVES, PLACEMENT_WORDS, REFRAME,
} from './data/couleurs-lesson.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');

const DRY_RUN = process.argv.includes('--dry-run');

const REFRAME_APPEARANCES = 12;
const EXPECTED_TRIGGERS = 6;
const EXPECTED_ROUNDS = 6;
const EXPECTED_COLOURS = 12;
const EXPECTED_AUTHORED_WORDS = 4;
const NASAL_COLOURS = ['blanc', 'marron', 'orange', 'brun'];
const NOT_NASAL = ['jaune'];

const UNIT_ID = 'a1.13';
const UNIT_THEMES = ['couleurs'];
const UNIT_TITLE = 'Colors';
const UNIT_SUB = 'Les couleurs';
const UNIT_CANDO = 'Can name the colours, agree them with the noun, and leave marron and orange alone';

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
    if (!/[a-zà-ÿ]/i.test(before) && !/[a-zà-ÿ]/i.test(after)) return true;
    from = i + 1;
  }
}

type Seed = { version: number; units: Unit[]; lessons: Lesson[]; items: Item[]; [k: string]: unknown };

const seed = JSON.parse(readFileSync(SEED, 'utf8')) as Seed;
const AUTHORED = [...AUTHORED_WORDS.map(wordToItem), ...COULEURS.map(toItem)];
const IMPORTS = IMPORTED;
const NEW_ITEMS = [...AUTHORED, ...IMPORTS];
const LESSON = COULEURS_LESSON;

console.log(`→ ${SEED}`);
console.log(`  seed version ${seed.version}: ${seed.items.length} items, ${seed.lessons.length} lessons, ${seed.units.length} units`);
if (DRY_RUN) console.log('  (dry run, nothing will be written)');

const OTHER_ITEMS = seed.items.filter((i) => !NEW_ITEMS.some((n) => n.id === i.id)).length;
const OTHER_LESSONS = seed.lessons.filter((l) => l.id !== LESSON.id).length;
const OTHER_LESSON_IDS = seed.lessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();

/** NAMED, not counted. A count alone lets a one-for-one swap through: drop a
 *  neighbour and add your own and the total is unchanged. Invariant §5. */
const NEIGHBOURS: Record<string, string> = {
  'a1.03.l1': 'the declared prerequisite, and the lesson this one is built on: it taught that things have a gender, and this lesson is that gender reaching the describing word.',
  'a1.04.l1': 'where le, la and les were taught, which every colour sentence here sits inside.',
  'a1.06.l1': 'the verb être, which carries every sentence this lesson asks a learner to produce.',
  'a1.07.l1': 'the verb avoir, and the elision this lesson leans on.',
  'a1.05.l1': 'mon, ma and mes, which are the whole of the authored paradigm\'s noun phrases.',
  'sons.06.l1': 'the silent letters lesson, which already taught the mechanism behind verte, grise and blanche, and which authored verte and blanche themselves.',
  'sons.03.l1': 'the nasal vowels, which authored brun and brune and the note about a vowel blocking nasalization.',
  'a1.01.l1': 'the A1 reference implementation, and the lesson whose tone this one matches.',
};

/* ── Everything the batch checks, checked again against the POST-MERGE seed ── */

const itemIssues = NEW_ITEMS.flatMap((it) => validateItem(it, it.id));
if (itemIssues.length) die(`items invalid:\n${formatIssues(itemIssues)}`);

const ids = NEW_ITEMS.map((i) => i.id);
const dupeIds = ids.filter((id, i) => ids.indexOf(id) !== i);
if (dupeIds.length) die(`duplicate ids in batch: ${[...new Set(dupeIds)].join(', ')}`);

{
  // Computed the way flashhub-coverage.test.ts computes it, over the POST-MERGE
  // item set rather than the batch alone: a duplicate only appears once the new
  // rows sit beside the existing ones.
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
const smuggled = NEW_ITEMS.filter((i) => WITHDRAWN_IDS.includes(i.id));
if (smuggled.length) {
  die(`withdrawn row(s) are back in the merge: ${smuggled.map((i) => `${i.id} "${i.fr}"`).join(', ')}`);
}
const withdrawnAlreadyPresent = WITHDRAWN_IDS.filter((id) => seed.items.some((i) => i.id === id));

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
const missingSuperscript = NASAL_COLOURS.filter((c) => !RESPELL[c]?.respell.includes('ⁿ'));
if (missingSuperscript.length) {
  die(
    `colour(s) carrying a nasal vowel with no superscript n: ${missingSuperscript.join(', ')}\n`
    + `  hasPlainNasalFor does not catch a word-internal nasal (orange is one), so this is checked by name.`
  );
}
const wronglyNasalised = NOT_NASAL.filter((c) => RESPELL[c]?.respell.includes('ⁿ'));
if (wronglyNasalised.length) {
  die(
    `colour(s) respelled with a superscript n that have NO nasal vowel: ${wronglyNasalised.join(', ')}\n`
    + `  jaune is /ʒon/ and its n is a real consonant. The correct value is ZHON, not ZHOHⁿ.`
  );
}
if (RESPELL.jaune.respell !== '[ZHON]') die(`jaune is respelled ${RESPELL.jaune.respell}, expected [ZHON]`);

if (THE_TWELVE.length !== EXPECTED_COLOURS) die(`THE_TWELVE holds ${THE_TWELVE.length} colours, expected ${EXPECTED_COLOURS}`);
if (COLOUR_IDS.length !== EXPECTED_COLOURS) die(`${COLOUR_IDS.length} colour headwords resolve, expected ${EXPECTED_COLOURS}`);
if (AUTHORED_WORDS.length !== EXPECTED_AUTHORED_WORDS) {
  die(`${AUTHORED_WORDS.length} feminine headwords authored, expected ${EXPECTED_AUTHORED_WORDS}`);
}

const learnerText = learnerFacing.join('\n');
const untaught = THE_TWELVE.filter((c) => !hasWord(learnerText, c));
if (untaught.length) die(`colour(s) never named on any screen: ${untaught.join(', ')}`);

for (const c of ['vert', 'bleu', 'marron'] as const) {
  const grid = gridFor(c);
  if (grid.length !== 4 || grid.some((g) => !g)) die(`the four-form grid for ${c} is incomplete`);
  if (!grid.every((g) => learnerText.includes(g.fr))) {
    die(`not every form of ${c} is on a screen: ${grid.map((g) => g.fr).join(' | ')}`);
  }
}

const orangeSection = LESSON.sections.find((s) => {
  const text = strings(s).join('\n');
  return ORANGE_NOUN_IDS.some((id) => text.includes(frOf(id)))
    && ORANGE_COLOUR_IDS.some((id) => text.includes(frOf(id)));
});
if (!orangeSection) {
  die('no single section carries the fruit orange and the colour orange together');
}

const marronNonMasc = MARRON_INVARIABLE_IDS.filter((id) => learnerText.includes(frOf(id)));
const authoredMarronNonMasc = COULEURS.filter(
  (w) => w.colour === 'marron' && w.form !== 'm' && learnerText.includes(w.fr));
if (!marronNonMasc.length && !authoredMarronNonMasc.length) {
  die('no feminine or plural marron example is on any screen');
}

/* ── No invariable colour ever merged with an agreement ending ─────────────── */

const quizSection = LESSON.sections.find((s) => s.type === 'quiz');
const qs = quizSection && quizSection.type === 'quiz' ? quizQuestions(quizSection) : [];
const correctFrench: string[] = [
  ...AUTHORED.map((i) => i.fr),
  ...LESSON.sections.flatMap((s) => (s.type === 'commonErrors' ? s.errors.map((e) => e.right) : [])),
  ...(LESSON.sheets ?? []).flatMap((sh) => (sh.sections ?? []).flatMap((sec) =>
    sec.type === 'cheatSheet' ? sec.rows.flatMap((r) => [r.k, r.say ?? '']) : [])),
];
const answerKeys: string[] = [
  ...qs.flatMap((q) => [q.answer ?? '', ...(q.accept ?? [])]),
  ...(LESSON.drills ?? []).flatMap((d) => (d.opts && d.correct !== undefined ? [d.opts[d.correct]] : [])),
  ...(LESSON.sections.find((s) => s.type === 'roundup') as { points?: string[] } | undefined)?.points ?? [],
];
const forbidden = [...FORBIDDEN_FORMS.filter((f) => f !== 'oranges'), ...FORBIDDEN_COMPOUNDS];
const violations: string[] = [];
for (const text of [...correctFrench, ...answerKeys]) {
  for (const f of forbidden) {
    if (hasWord(text.toLowerCase(), f)) violations.push(`"${f}" in "${text}"`);
  }
}
for (const i of AUTHORED) {
  if (hasWord(i.fr.toLowerCase(), 'oranges')) violations.push(`"oranges" in authored row ${i.id} "${i.fr}"`);
}
if (violations.length) {
  die(`an invariable colour is authored WITH an agreement ending:\n  ${violations.join('\n  ')}`);
}

const PLURAL_ONLY = /(verts|vertes|bleus|bleues|rouges|noirs|noires|grises|blancs|blanches|violets|violettes|jaunes|roses|beiges)/i;
const plural = qs.filter((q) => q.format === 'listenChoose' && (q.opts ?? []).some((o) => PLURAL_ONLY.test(o)));
if (plural.length) die(`ear question(s) whose options include a plural form: ${plural.map((q) => q.q).join(' | ')}`);
const earSection = LESSON.sections.find((s) => s.type === 'listening');
if (earSection && earSection.type === 'listening' && earSection.lines.some((l) => PLURAL_ONLY.test(l.fr))) {
  die('the listening section carries a plural line');
}

const productionSurfaces = [
  ...strings(LESSON.sections.filter((s) => ['vocabThemes', 'flashcards', 'reviewDeck', 'cardDeck'].includes(s.type))),
  ...strings(LESSON.drills ?? []),
  ...strings((LESSON.sections.find((s) => s.type === 'quiz') ?? {}) as unknown),
];
const adjHit = OTHER_ADJECTIVES.filter((w) => productionSurfaces.some((s) => hasWord(s.toLowerCase(), w)));
if (adjHit.length) die(`adjective(s) taught here that belong to a1.14: ${adjHit.join(', ')}`);
const placeHit = PLACEMENT_WORDS.filter((w) => learnerText.toLowerCase().includes(w));
if (placeHit.length) die(`placement teaching found, which belongs to a1.16: ${placeHit.join(', ')}`);

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
  const last = words[words.length - 1];
  for (const variant of wrongAgreements(last)) {
    const candidate = [...words.slice(0, -1), variant].join(' ');
    if (matchesAccept(candidate, q.accept)) {
      tooLenient.push(`"${q.q}" accepts "${candidate}" as well as "${q.answer}"`);
    }
  }
}
if (tooLenient.length) die(`free-text question(s) that accept the WRONG agreement:\n  ${tooLenient.join('\n  ')}`);

const foldBlind = qs.filter((q) => {
  const open = q.format === 'typeIn' || q.format === 'errorSpot';
  if (!open) return false;
  return [q.answer ?? '', ...(q.accept ?? [])].some((a) => THE_TWELVE.some((c) => a.includes(c[0].toUpperCase() + c.slice(1))));
});
if (foldBlind.length) die(`free-text question(s) whose answer turns on a capital letter: ${foldBlind.map((q) => q.q).join(' | ')}`);

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

/* ── The unit, and every id resolving AFTER this merge ─────────────────────── */

const unit = seed.units.find((u) => u.id === UNIT_ID);
if (!unit) die(`unit "${UNIT_ID}" is not in the seed`);
if (unit.title !== UNIT_TITLE) die(`unit ${UNIT_ID} title has changed: "${unit.title}"`);
if (unit.sub !== UNIT_SUB) die(`unit ${UNIT_ID} sub has changed: "${unit.sub}"`);
if (unit.canDo !== UNIT_CANDO) die(`unit ${UNIT_ID} canDo has changed: "${unit.canDo}"`);
const expectedTag = `A1 · LEÇON ${String(unit.seq).padStart(2, '0')}`;
if (LESSON.tag !== expectedTag) {
  die(`the lesson tag is "${LESSON.tag}" and the unit sits at seq ${unit.seq}, so the header will draw "${expectedTag}"`);
}
const themesNow = (unit as Unit & { themes?: string[] }).themes;
if (themesNow !== undefined && themesNow.join() !== UNIT_THEMES.join()) {
  die(`unit ${UNIT_ID} themes are ${JSON.stringify(themesNow)}, expected ${JSON.stringify(UNIT_THEMES)}. This merge does not rebind the unit.`);
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
  for (const id of COULEURS_DICTATION_IDS) {
    const it = post.get(id);
    if (!it) die(`the dictée names ${id}, which will not exist after this merge`);
    const mode = dicteeMode(it.fr);
    dictModes.push(`${mode === 'words' ? 'WORDS' : 'letters'} "${it.fr}"`);
    // Word mode hands the learner each whole word as a pre-spelled tile, so it
    // cannot test an agreement ending. See the note in couleurs-lesson.ts.
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

  const speakSection = LESSON.sections.find((s) => (s as { id?: string }).id === 's21-speak');
  const speakIds = (speakSection as { itemIds?: string[] } | undefined)?.itemIds ?? [];
  const badSpeak = speakIds.filter((id) => !post.get(id)?.drills.includes('voiceflash'));
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
      + `a lower one reads as a rollback. Move the version counter forward in couleurs-lesson.ts.`
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
    repaired.push(`${r.id} ${r.fr}: "${r.from}" → "${r.to}"${r.caughtByChecker ? '' : '   (INVISIBLE to the shared checker)'}`);
  }
}

const nextItems = [...byId.values()];
const nextLessons = [...seed.lessons.filter((l) => l.id !== LESSON.id), LESSON];

const nextUnit: Unit = {
  ...unit,
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
console.log(`    "couleurs" is NOT in SEED_CUT.themes, which is why it held ${seed.items.filter((i) => i.theme === 'couleurs').length} rows before this run`);
console.log(`  the twelve colour headwords: ${COLOUR_IDS.filter((id) => !inSeed.has(id)).length} were absent from the seed before this run`);
console.log(`  lesson: ${LESSON.id} ${existing ? `REPLACED (v${existing.version} → v${LESSON.version})` : `ADDED (v${LESSON.version})`} (${seed.lessons.length} → ${nextLessons.length})`);
console.log(`  sections: ${LESSON.sections.length} | acts: ${LESSON.acts?.length} | itemIds: ${LESSON.itemIds.length} | quiz: ${qs.length} in ${rounds.length} rounds`);
console.log(`  quiz formats: ${Object.entries(formats).map(([k, v]) => `${k} ${v}`).join(', ')} | mcq ${Math.round((formats.mcq ?? 0) / qs.length * 100)}%`);
console.log(`  the twelve: ${THE_TWELVE.join(', ')}, every one named on a screen`);
console.log(`  all four forms taught on vert (audible), bleu (silent) and marron (invariable)`);
console.log(`  the invariable rule is SHOWN, not stated: ${(orangeSection as { id?: string }).id} carries the fruit and the colour together`);
console.log(`  feminine/plural marron on screen: ${marronNonMasc.length} imported + ${authoredMarronNonMasc.length} authored`);
console.log(`  no invariable colour merged with an agreement ending: confirmed`);
console.log(`  no ear question targets a plural: confirmed`);
console.log(`  no other adjective taught (a1.14), no placement rule (a1.16): confirmed`);
console.log(`  imageRefs: ${imageRefs.length}. Nothing validates imageRef, so this lesson authors none.`);
console.log(`  dictation: ${COULEURS_DICTATION_IDS.length} lines, all letters mode`);
for (const m of dictModes) console.log(`    ${m}`);
console.log(`  reframe: "${REFRAME}" x${hits}`);
console.log(`  unit ${UNIT_ID} themes:    ${JSON.stringify(themesNow ?? null)} (UNCHANGED)`);
console.log(`  unit ${UNIT_ID} lessonIds: ${JSON.stringify(unit.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);
console.log(`  items withdrawn: 0. This merge removes nothing.`);
console.log(`    ${WITHDRAWN_IDS.length} gendered single-word nouns are deliberately NOT imported (une orange, la rose, le bleu);`);
console.log(`    ${withdrawnAlreadyPresent.length} of them are already in the seed on somebody else's account and are left alone.`);
if (repaired.length) {
  console.log(`  respelling repairs applied to the seed (display only):`);
  for (const r of repaired) console.log(`    ${r}`);
} else {
  console.log(`  respelling repairs: already applied, nothing to do`);
}
console.log(`    jaune is ${RESPELL.jaune.respell} and deliberately NOT a superscript: /ʒon/ has a real n.`);
console.log(`  a1.14 and a1.16 NOT touched. a1.14 declares "famille" and a1.16 declares nothing; both look wrong`);
console.log(`    and rebinding another unit is that unit's own build's decision. Reported, not done.`);
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
  + `\n  a1.13.l1 is now in BOTH Postgres and the seed, so this lesson is safe.`
  + `\n`
  + `\n  NOTE for whoever runs the next publish: ${importedNew} rows from couleurs and`
  + `\n  adjectifs-essentiels are now in the seed and NEITHER theme is in SEED_CUT.themes. They`
  + `\n  survive a publish because publish-content.ts pulls in every item a bundled lesson`
  + `\n  references, and a1.13.l1 references all of them. If this lesson is ever unbundled, those`
  + `\n  rows leave with it. That includes the twelve colour headwords.`
  + `\n`
  + `\n  NOTE for a1.14 and a1.16: agreement is now INTRODUCED. a1.14 must not teach it as new.`
  + `\n  The four-form grid, the family split and the audible/silent distinction are all built to`
  + `\n  transfer and are documented at the foot of couleurs-lesson.ts. a1.16 still owns placement`
  + `\n  in full: this lesson states once that colours follow the noun and teaches no system.`
  + `\n`
  + `\n  STILL OPEN, and not this lesson's to fix: pnpm content:parity exits 1 on pre-existing`
  + `\n  divergences. Do not run pnpm content:publish until those are resolved.\n`
);
