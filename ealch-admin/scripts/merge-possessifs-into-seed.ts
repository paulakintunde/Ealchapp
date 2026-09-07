/* Writes a1.17.l1 "Les adjectifs possessifs" into ealch-v2/src/content/seed.json.
 *
 *     pnpm tsx scripts/merge-possessifs-into-seed.ts --dry-run
 *     pnpm tsx scripts/merge-possessifs-into-seed.ts
 *
 * RUN THE BATCH FIRST. Postgres is the source of truth and seed.json is a cut of
 * it; content:publish regenerates the seed FROM the database, so a lesson that
 * exists only in the seed is deleted the next time anybody publishes. sons.07.l1
 * was written to the seed, erased by somebody else's publish, and survived only
 * because its source files were intact.
 *
 * `famille` IS IN SEED_CUT.themes, which is the opposite of a1.13's situation
 * with `couleurs`. Every famille row this lesson names is already in the seed and
 * the 32 authored ones will be, so this merge adds only 12 foreign rows: the
 * possessive headwords, which live in `mots-essentiels` and are not in the cut.
 *
 * NEVER `git checkout seed.json` to undo something. It discards other authors'
 * uncommitted lessons, and this session is the proof: a1.15 landed in the same
 * theme, on the same afternoon, while this file was being written. Re-run this
 * script. */
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
  AUTHORED_WORDS, CONTRASTS, FORBIDDEN_FORMS, GRID_NOUNS, HEADWORD_OF, IMPORTED,
  IMPORTED_HEADWORD_IDS, NASAL_FORMS, NOT_NASAL_FORMS, OBJECT_PRONOUN_FRAMES, OWNERS, PARADIGM,
  POSSESSIVE_PRONOUNS, RESPELL, RESPELL_REPAIRS, REUSED, THE_FIFTEEN, WITHDRAWN_IDS,
  contrastToItem, toItem, wordToItem,
} from './data/possessifs-corpus.ts';
import {
  FAMILY_TEACHING, OWNED_ID_RANGE, POSSESSIFS_DICTATION_IDS, POSSESSIFS_LESSON, REFRAME,
} from './data/possessifs-lesson.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');

const DRY_RUN = process.argv.includes('--dry-run');

const REFRAME_APPEARANCES = 12;
const EXPECTED_TRIGGERS = 6;
const EXPECTED_ROUNDS = 6;
const EXPECTED_FORMS = 15;
const EXPECTED_OWNERS = 6;
const EXPECTED_AUTHORED_WORDS = 5;
const EXPECTED_PARADIGM = 18;
const EXPECTED_CONTRASTS = 9;

const UNIT_ID = 'a1.17';
const UNIT_THEMES = ['famille'];
const UNIT_TITLE = 'Possessive Adjectives';
const UNIT_SUB = 'Adjectifs possessifs';
const UNIT_CANDO = 'Can say whose things are whose with mon, ma, mes and their kin';

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

const OWNER_MARKERS = [
  'my', 'your', 'his', 'her', 'hers', 'our', 'their', 'whose',
  'marie', 'marc', 'somebody', 'you want to say', 'a class of', 'two parents',
  'the owner', 'who', 'speaker', 'a friend', 'politely', 'to a friend',
];
const THING_MARKERS = [
  'father', 'mother', 'brother', 'sister', 'parents', 'daughter', 'daughters',
  'friend', 'friends', 'book', 'books', 'address', 'order', 'sœur', 'soeur',
  'frère', 'frere', 'père', 'pere', 'mère', 'mere', 'amie', 'ami', 'amis',
  'livre', 'commande', 'thing', 'noun', 'adresse', 'flat', 'possessive',
];

type Seed = { version: number; units: Unit[]; lessons: Lesson[]; items: Item[]; [k: string]: unknown };

const seed = JSON.parse(readFileSync(SEED, 'utf8')) as Seed;
const AUTHORED = [
  ...AUTHORED_WORDS.map(wordToItem),
  ...PARADIGM.map(toItem),
  ...CONTRASTS.map(contrastToItem),
];
const IMPORTS = IMPORTED;
const NEW_ITEMS = [...AUTHORED, ...IMPORTS];
const LESSON = POSSESSIFS_LESSON;

console.log(`→ ${SEED}`);
console.log(`  seed version ${seed.version}: ${seed.items.length} items, ${seed.lessons.length} lessons, ${seed.units.length} units`);
if (DRY_RUN) console.log('  (dry run, nothing will be written)');

const OTHER_ITEMS = seed.items.filter((i) => !NEW_ITEMS.some((n) => n.id === i.id)).length;
const OTHER_LESSONS = seed.lessons.filter((l) => l.id !== LESSON.id).length;
const OTHER_LESSON_IDS = seed.lessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();

/** NAMED, not counted. A count alone lets a one-for-one swap through: drop a
 *  neighbour and add your own and the total is unchanged. Invariant §5.
 *
 *  a1.15.l1 is at the top of this list because it landed in THIS THEME on the
 *  same afternoon as this build and its rows sit immediately below this one's.
 *  If a merge ever drops it, this is where that shows up. */
const NEIGHBOURS: Record<string, string> = {
  'a1.15.l1': 'Family Vocabulary, which landed mid-build in this same theme at fr.a1.famille.235-252, gave the learner mon, ma and mes as three frozen words, and handed this lesson the vowel rule by name.',
  'a1.03.l1': 'the declared prerequisite and the machine this lesson runs on: you cannot choose between mon and ma without knowing the noun\'s gender.',
  'a1.04.l1': 'where le, la and les were taught, and where the possessive stands instead of them.',
  'a1.05.l1': 'the subject pronouns, which are the six rows of this lesson\'s grid.',
  'a1.06.l1': 'the verb être.',
  'a1.07.l1': 'the verb avoir.',
  'sons.07.l1': 'l\'élision, the first repair for two vowels meeting, which this lesson names as the same pressure.',
  'sons.10.l1': 'the liaison lesson, which authored mon ami and taught the n that arrives.',
  'a1.13.l1': 'the newest A1 lesson before this one and its quality bar.',
};

/* ── Everything the batch checks, checked again against the POST-MERGE seed ── */

const itemIssues = NEW_ITEMS.flatMap((it) => validateItem(it, it.id));
if (itemIssues.length) die(`items invalid:\n${formatIssues(itemIssues)}`);

const ids = NEW_ITEMS.map((i) => i.id);
const dupeIds = ids.filter((id, i) => ids.indexOf(id) !== i);
if (dupeIds.length) die(`duplicate ids in batch: ${[...new Set(dupeIds)].join(', ')}`);

/* ── THE ID COLLISION CHECK, against the seed this time ────────────────────
 *
 * a1.15 landed inside this lesson's original id range mid-build. The seed is
 * the other copy and can drift the same way, so the same check runs here: does
 * any row inside this batch's own range exist in the seed that this batch did
 * not author? */
{
  const foreign = seed.items.filter((i) => i.id >= OWNED_ID_RANGE.from && i.id <= OWNED_ID_RANGE.to
    && i.id.startsWith('fr.a1.famille.') && !ids.includes(i.id));
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
  // rows sit beside the existing ones. a1.15's `mon père`, `ma mère` and
  // `mes parents` are phrases in THIS THEME, so this is the check that would
  // catch a collision with them.
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
    + `  a1-03-genre.test.ts re-measures twenty printed figures from this file on every run. a1.15 had to\n`
    + `  withdraw \`la personne\` for moving the -e figure by one; nothing here should reach the population at\n`
    + `  all, because a possessive is not a noun and the three grid nouns are imported rather than authored.`,
  );
}
const smuggled = NEW_ITEMS.filter((i) => WITHDRAWN_IDS.includes(i.id));
if (smuggled.length) {
  die(`withdrawn row(s) are back in the merge: ${smuggled.map((i) => `${i.id} "${i.fr}"`).join(', ')}`);
}

const lessonIssues = validateLesson(LESSON, LESSON.id);
if (lessonIssues.length) die(`lesson invalid:\n${formatIssues(lessonIssues)}`);

const POST_MERGE_IDS = new Set([...seed.items.map((i) => i.id), ...ids]);
const density = validateDensity(LESSON, POST_MERGE_IDS);
if (density.length) die(`lesson fails the density validator:\n${formatDensity(density)}`);

const authoredJson = JSON.stringify({ AUTHORED, LESSON });
if (authoredJson.includes('—')) die('em dash found in authored copy, the house style bans it');
if (/honest/i.test(authoredJson)) die('the word "honest" is banned from authored content');
if (authoredJson.includes('‿')) {
  die('U+203F tie character in authored copy, which renders as a low underscore on a Pixel 6');
}

const learnerFacing = [
  ...strings(LESSON.sections),
  ...strings(LESSON.sheets ?? []),
  ...strings(LESSON.terms ?? {}),
];
const isIdentifier = (s: string) => !/\s/.test(s) && /^[a-z0-9][a-z0-9.\-_/]*$/i.test(s);
const jargon = learnerFacing.filter((s) => !isIdentifier(s)
  && /\b(conjugaison|article (défini|indéfini|partitif)|adjectif|possessif|(?<!')accord|complément circonstanciel|masculin|féminin|invariable|déterminant)\b/i.test(s));
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
    + `  hasPlainNasalFor does not catch a word-internal nasal (mon oncle is one), so this is checked by name.`,
  );
}
const wronglyNasalised = NOT_NASAL_FORMS.filter((f) => RESPELL[f]?.respell.includes('ⁿ'));
if (wronglyNasalised.length) {
  die(`form(s) respelled with a superscript n that have NO nasal vowel: ${wronglyNasalised.join(', ')}`);
}
if (RESPELL.mon.respell !== '[MOHⁿ]') die(`mon is respelled ${RESPELL.mon.respell}, expected [MOHⁿ]`);
if (RESPELL['mon ami'].respell !== '[mohⁿ-na-MEE]') {
  die(
    `mon ami is respelled ${RESPELL['mon ami'].respell}, expected [mohⁿ-na-MEE].\n`
    + `  The brief calls this the false-positive shape for hasPlainNasalFor. IT IS NOT. Do not write a workaround.`,
  );
}
if (hasPlainNasalFor('mon ami', RESPELL['mon ami'].respell)) {
  die('hasPlainNasalFor now flags mon ami. If the checker has changed, read §3 before changing the respelling.');
}
if (RESPELL['mon ami'].respell !== RESPELL['mon amie'].respell
  || RESPELL['mon ami'].ipa !== RESPELL['mon amie'].ipa) {
  die('mon ami and mon amie carry different transcriptions. They are homophones and this lesson says so.');
}

if (THE_FIFTEEN.length !== EXPECTED_FORMS) die(`THE_FIFTEEN holds ${THE_FIFTEEN.length} forms, expected ${EXPECTED_FORMS}`);
if (OWNERS.length !== EXPECTED_OWNERS) die(`${OWNERS.length} owners, expected ${EXPECTED_OWNERS}`);
if (PARADIGM.length !== EXPECTED_PARADIGM) die(`${PARADIGM.length} paradigm rows, expected ${EXPECTED_PARADIGM}`);
if (CONTRASTS.length !== EXPECTED_CONTRASTS) die(`${CONTRASTS.length} contrast rows, expected ${EXPECTED_CONTRASTS}`);
if (AUTHORED_WORDS.length !== EXPECTED_AUTHORED_WORDS) {
  die(`${AUTHORED_WORDS.length} headwords authored, expected ${EXPECTED_AUTHORED_WORDS}`);
}

const learnerText = learnerFacing.join('\n');
const untaught = THE_FIFTEEN.filter((f) => !hasWord(learnerText, f));
if (untaught.length) die(`possessive form(s) never named on any screen: ${untaught.join(', ')}`);
const noHeadword = THE_FIFTEEN.filter((f) => !HEADWORD_OF[f] || !LESSON.itemIds.includes(HEADWORD_OF[f]));
if (noHeadword.length) die(`form(s) with no headword card in the lesson: ${noHeadword.join(', ')}`);

for (const o of OWNERS) {
  const row = PARADIGM.filter((c) => c.who === o.who);
  if (row.length !== 3) die(`the row for ${o.who} has ${row.length} cells, expected 3`);
  const missing = row.filter((c) => !learnerText.includes(c.fr));
  if (missing.length) die(`cell(s) of the ${o.who} row on no screen: ${missing.map((c) => c.fr).join(' | ')}`);
}

const inversionSections = LESSON.sections.filter((s) => {
  const text = strings(s).join('\n');
  return hasWord(text.toLowerCase(), 'his sister') && hasWord(text.toLowerCase(), 'her sister')
    && text.includes('sa sœur');
}).map((s) => (s as { id?: string }).id ?? '?');
if (!inversionSections.includes('s04-hisher')) {
  die(
    `the his/her contrast is not in s04-hisher (found in: ${inversionSections.join(', ') || 'nowhere'}).\n`
    + `  s04-hisher is the two-column screen: identical French in both cells of a row, different English.`,
  );
}

const vowelRows = CONTRASTS.filter((c) => c.role === 'vowel');
const feminineVowelExample = vowelRows.find((c) => hasWord(c.fr.toLowerCase(), 'amie'));
if (!feminineVowelExample) {
  die(
    'no vowel-rule example uses a verifiably FEMININE vowel-initial noun.\n'
    + '  `mon ami` is masculine and demonstrates nothing: the learner cannot tell the rule is firing unless the\n'
    + '  noun is one they can check is the une kind.',
  );
}
const swapSection = LESSON.sections.find((s) => {
  const text = strings(s).join('\n');
  return text.includes('ma sœur') && text.includes('mon amie');
});
if (!swapSection) die('no single section puts `ma sœur` beside `mon amie`');
const saysHomophone = learnerFacing.some((s) => /same sound|one sound|identical/i.test(s) && /amie?/i.test(s));
if (!saysHomophone) die('nowhere does the lesson state that mon ami and mon amie are the same sound');

/* ── The neighbours keep their lessons ─────────────────────────────────────── */

const productionSurfaces = [
  ...strings(LESSON.sections.filter((s) => ['vocabThemes', 'flashcards', 'reviewDeck', 'cardDeck', 'tapTable'].includes(s.type))),
  ...strings(LESSON.drills ?? []),
  ...strings((LESSON.sections.find((s) => s.type === 'quiz') ?? {}) as unknown),
];
const pronounHit = POSSESSIVE_PRONOUNS.filter((w) => strings(LESSON).some((s) => hasWord(s.toLowerCase(), w)));
if (pronounHit.length) die(`possessive pronoun(s) on a surface: ${pronounHit.join(', ')}`);
const objectHit = OBJECT_PRONOUN_FRAMES.filter((w) => productionSurfaces.some((s) => s.toLowerCase().includes(w)));
if (objectHit.length) die(`the object pronoun leur reached a production surface: ${objectHit.join(', ')}`);
const familyHit = FAMILY_TEACHING.filter((w) => productionSurfaces.some((s) => s.toLowerCase().includes(w)));
if (familyHit.length) die(`family-vocabulary teaching found, which belongs to a1.15: ${familyHit.join(', ')}`);

const correctFrench: string[] = [
  ...AUTHORED.map((i) => i.fr),
  ...LESSON.sections.flatMap((s) => (s.type === 'commonErrors' ? s.errors.map((e) => e.right) : [])),
  ...(LESSON.sheets ?? []).flatMap((sh) => (sh.sections ?? []).flatMap((sec) =>
    (sec.type === 'cheatSheet' ? sec.rows.flatMap((r) => [r.k, r.say ?? '']) : []))),
];
const quizSection = LESSON.sections.find((s) => s.type === 'quiz');
const qs = quizSection && quizSection.type === 'quiz' ? quizQuestions(quizSection) : [];
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
if (imageRefs.length) {
  die(`${imageRefs.length} imageRef(s) authored: ${imageRefs.join(', ')}. Nothing validates imageRef.`);
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

const halfQuestions = qs.filter((q) => {
  const s = q.q.toLowerCase();
  return !OWNER_MARKERS.some((m) => s.includes(m)) || !THING_MARKERS.some((m) => s.includes(m));
});
if (halfQuestions.length) {
  die(
    `quiz question(s) whose stem does not name BOTH the owner and the thing:\n  `
    + halfQuestions.map((q) => q.q).join('\n  ') + `\n`
    + `  "mon or ma?" is unanswerable. A possessive question missing either half tests nothing.`,
  );
}

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
if (over.length) {
  die(`authored answer slot(s) over the 40% cap: ${over.map(([k, n]) => `slot ${k} holds ${n}/${closed.length}`).join(', ')}`);
}

const unacceptable = qs.filter((q) => q.answer && !matchesAccept(q.answer, q.accept));
if (unacceptable.length) {
  die(`question(s) that do not accept their own answer:\n  ${unacceptable.map((q) => `"${q.q}" shows "${q.answer}"`).join('\n  ')}`);
}

const earQs = qs.filter((q) => q.format === 'listenChoose');
const impossible = earQs.filter((q) => {
  const opts = (q.opts ?? []).map((o) => o.toLowerCase());
  return (opts.includes('mon ami') && opts.includes('mon amie'))
    || (opts.some((o) => hasWord(o, 'leur')) && opts.some((o) => hasWord(o, 'leurs')));
});
if (impossible.length) {
  die(`ear question(s) asking the learner to separate a homophone pair:\n  ${impossible.map((q) => q.q).join('\n  ')}`);
}
if (!earQs.length) die('no listenChoose question at all. mes amis against ses amis is worth one.');

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
  die(`unit ${UNIT_ID} themes are ${JSON.stringify(themesNow)}, expected ${JSON.stringify(UNIT_THEMES)}`);
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
  for (const id of POSSESSIFS_DICTATION_IDS) {
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
      + `  Word mode offers each whole word as a tile, so the learner taps \`mon\` rather than choosing it.`,
    );
  }

  const speakSection = LESSON.sections.find((s) => (s as { id?: string }).id === 's22-speak');
  const speakIds = (speakSection as { itemIds?: string[] } | undefined)?.itemIds ?? [];
  const badSpeak = speakIds.filter((id) => !post.get(id)?.drills.includes('voiceflash'));
  if (badSpeak.length) die(`speak items with no voiceflash after this merge:\n  ${badSpeak.join('\n  ')}`);
  const bareInSpeak = speakIds.filter((id) => THE_FIFTEEN.includes((post.get(id)?.fr ?? '').trim().toLowerCase()));
  if (bareInSpeak.length) {
    die(
      `the speak mission names bare possessive(s): ${bareInSpeak.join(', ')}\n`
      + `  A bare possessive cannot be right or wrong on its own.`,
    );
  }

  const ungendered = GRID_NOUNS.filter((n) => !post.get(n.headwordId)?.gender);
  if (ungendered.length) {
    die(
      `grid noun(s) with no stored gender after this merge: ${ungendered.map((n) => n.noun).join(', ')}\n`
      + `  The whole grid rests on a learner being able to CHECK which kind the noun is.`,
    );
  }
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
      + `a lower one reads as a rollback. Move the version counter forward in possessifs-lesson.ts.`,
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
    // not this merge's to apply: the batch has already fixed it in Postgres and
    // it will arrive with the next publish.
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
    + `  Something rewrote seed.json underneath this run. Re-run it; do not force it.`,
  );
}
const lost = OTHER_LESSON_IDS.filter((id) => !keptLessonIds.includes(id));
if (lost.length) die(`this merge would drop lesson(s) it does not own: ${lost.join(', ')}`);
for (const [id, why] of Object.entries(NEIGHBOURS)) {
  if (!keptLessonIds.includes(id)) {
    // a1.15 may not have merged into the seed yet even though it is in Postgres,
    // so its absence is a warning rather than a failure. Everything else in the
    // list has been in the seed for weeks and its absence is a real problem.
    if (id === 'a1.15.l1') {
      console.warn(`\n⚠  ${id} is not in the seed. It IS in Postgres (${why}) so it has been applied and not yet merged.\n`);
      continue;
    }
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
console.log(`    "famille" IS in SEED_CUT.themes and held ${seed.items.filter((i) => i.theme === 'famille').length} rows before this run,`);
console.log(`    so this merge changing seed contents is correct rather than a bug. The opposite of a1.13.`);
console.log(`  id range owned: ${OWNED_ID_RANGE.from} to ${OWNED_ID_RANGE.to}. a1.15 holds .235-.252 and landed mid-build.`);
console.log(`  lesson: ${LESSON.id} ${existing ? `REPLACED (v${existing.version} → v${LESSON.version})` : `ADDED (v${LESSON.version})`} (${seed.lessons.length} → ${nextLessons.length})`);
console.log(`  sections: ${LESSON.sections.length} | acts: ${LESSON.acts?.length} | itemIds: ${LESSON.itemIds.length} | quiz: ${qs.length} in ${rounds.length} rounds`);
console.log(`  quiz formats: ${Object.entries(formats).map(([k, v]) => `${k} ${v}`).join(', ')} | mcq ${Math.round((formats.mcq ?? 0) / qs.length * 100)}%`);
console.log(`  the fifteen: ${THE_FIFTEEN.join(', ')}, every one named on a screen and carrying a headword card`);
console.log(`  the eighteen-cell grid is split 9 + 6 across s07 and s09; the full grid is on sheet.a1.17.grid`);
console.log(`  the his/her contrast is on ONE screen: ${inversionSections.join(', ')}`);
console.log(`  the vowel rule is on a verifiably feminine noun: "${feminineVowelExample.fr}"`);
console.log(`  no possessive pronoun, no object-pronoun leur, no family teaching: confirmed`);
console.log(`  every stem names both the owner and the thing: confirmed over ${qs.length} questions`);
console.log(`  no positional option, none duplicated, spread ${Object.entries(slots).map(([k, n]) => `${k}:${Math.round(n / closed.length * 100)}%`).join(' ')} (cap 40)`);
console.log(`  imageRefs: ${imageRefs.length}. Nothing validates imageRef, so this lesson authors none.`);
console.log(`  dictation: ${POSSESSIFS_DICTATION_IDS.length} lines, all letters mode`);
for (const m of dictModes) console.log(`    ${m}`);
console.log(`  reframe: "${REFRAME}" x${hits}`);
console.log(`  unit ${UNIT_ID} themes:    ${JSON.stringify(themesNow ?? null)} (UNCHANGED)`);
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
  + `\n  a1.17.l1 is now in BOTH Postgres and the seed, so this lesson is safe.`
  + `\n`
  + `\n  NOTE for whoever runs the next publish: ${importedNew} rows from mots-essentiels are now in the`
  + `\n  seed and that theme is NOT in SEED_CUT.themes. They survive a publish because publish-content.ts`
  + `\n  pulls in every item a bundled lesson references, and a1.17.l1 references all twelve. If this`
  + `\n  lesson is ever unbundled, those rows leave with it.`
  + `\n`
  + `\n  NOTE for a1.15: all fifteen possessives are now taught, so it no longer needs to reserve the`
  + `\n  twelve it held back. The mon-before-a-vowel rule its s17-mine promises is built, in act 4.`
  + `\n  The id ranges are .235-.252 (a1.15) and .253-.284 (a1.17). NEXT FREE is fr.a1.famille.285.`
  + `\n`
  + `\n  STILL OPEN, and not this lesson's to fix: pnpm content:parity exits 1 on pre-existing`
  + `\n  divergences. Do not run pnpm content:publish until those are resolved.\n`,
);
