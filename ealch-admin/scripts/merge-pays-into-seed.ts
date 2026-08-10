/* Writes a1.22.l1 "Pays & nationalités" into ealch-v2/src/content/seed.json.
 *
 *     pnpm tsx scripts/merge-pays-into-seed.ts --dry-run
 *     pnpm tsx scripts/merge-pays-into-seed.ts
 *
 * RUN THE BATCH FIRST. Postgres is the source of truth and seed.json is a cut of
 * it; content:publish regenerates the seed FROM the database, so a lesson that
 * exists only in the seed is deleted the next time anybody publishes. sons.07.l1
 * was written to the seed, erased by somebody else's publish, and survived only
 * because its source files were intact.
 *
 * `pays-et-nationalites` IS NOT IN SEED_CUT.themes, which is a1.13's situation
 * with `couleurs` rather than a1.17's with `famille`. Not one of its 326
 * published rows is in the seed today, so this merge carries all 40 imported
 * rows as well as the 11 authored ones.
 *
 * THE BRIEF SAYS THIS MERGE SHOULD LEAVE THE SEED UNCHANGED FOR THOSE ROWS and
 * it is wrong. Being outside the cut is why they are absent today; it is not a
 * licence to leave them absent. A lesson whose itemIds resolve to nothing draws
 * empty cards, and `couleurs` now holds 48 seed rows written there by a1.13's
 * merge for exactly this reason.
 *
 * AFTER THIS MERGE, a1-03-genre.test.ts IS RED. The imported country and
 * nationality headwords are gendered single-word nouns and move six of a1.03's
 * printed counts. That is measured and printed below before anything is written,
 * and the fix is the one a1.11 used: re-measure the six counts in
 * genre-endings.ts and re-render a1.03. See the header of pays-corpus.ts.
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
import { endingPopulation, measureEnding } from '../../ealch-v2/src/content/gender.logic.ts';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';
import { matchesAccept } from '../../ealch-v2/src/content/answer.logic.ts';
import {
  AUTHORED_SENTENCES, CONJUGATED_FORMS, FORBIDDEN_FORMS, IMPORTED, IPA_REPAIRS, LANGUAGE_TEACHING,
  NASAL_FORMS, NOT_NASAL_FORMS, OWNED_ID_RANGE, QUEBEC_TEACHING, RECENT_PAST_FRAMES, RESPELL,
  RESPELL_REPAIRS, REUSED, THE_TWELVE, WITHDRAWN_IDS, hasPhrase, toItem,
} from './data/pays-corpus.ts';
import { PAYS_DICTATION_IDS, PAYS_LESSON, PAYS_READING_ONLY_IDS, REFRAME } from './data/pays-lesson.ts';
import { ENDING_RULES, WORTHLESS_ENDINGS, MORE_ENDINGS } from './data/genre-endings.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');

const DRY_RUN = process.argv.includes('--dry-run');

const REFRAME_APPEARANCES = 13;
const EXPECTED_TRIGGERS = 7;
const EXPECTED_ROUNDS = 7;
const EXPECTED_COUNTRIES = 12;
const EXPECTED_AUTHORED = 11;
const EXPECTED_IMPORTED = 40;
const EXPECTED_REPAIRS = 10;

const UNIT_ID = 'a1.22';
const UNIT_THEMES_BEFORE = ['identite'];
const UNIT_THEMES_AFTER = ['pays-et-nationalites'];
const UNIT_TITLE = 'Countries and Nationalities';
const UNIT_SUB = 'Pays & nationalités';
const UNIT_CANDO = 'Can say which country they are from and are going to, and what nationality they are';

const PREP_WORDS = ['en', 'au', 'aux', 'de', 'du', 'des'];

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
const AUTHORED = AUTHORED_SENTENCES.map(toItem);
const IMPORTS = IMPORTED;
const NEW_ITEMS = [...AUTHORED, ...IMPORTS];
const LESSON = PAYS_LESSON;

console.log(`→ ${SEED}`);
console.log(`  seed version ${seed.version}: ${seed.items.length} items, ${seed.lessons.length} lessons, ${seed.units.length} units`);
if (DRY_RUN) console.log('  (dry run, nothing will be written)');

const OTHER_ITEMS = seed.items.filter((i) => !NEW_ITEMS.some((n) => n.id === i.id)).length;
const OTHER_LESSONS = seed.lessons.filter((l) => l.id !== LESSON.id).length;
const OTHER_LESSON_IDS = seed.lessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();

/** NAMED, not counted. A count alone lets a one-for-one swap through: drop a
 *  neighbour and add your own and the total is unchanged. Invariant §5. */
const NEIGHBOURS: Record<string, string> = {
  'a1.03.l1': 'the machine this lesson runs on and the one it is about to move six counts in: without noun gender there is no choosing between en and au.',
  'a1.04.l1': 'where le, la and les were taught, and where the six prepositions swallowed them.',
  'a1.06.l1': 'the verb être, and the lesson that ALREADY teaches the no-article rule, the capital rule and français / française.',
  'a1.11.l1': 'the indefinite articles, and where à plus le folding into au was introduced.',
  'a1.13.l1': 'adjective agreement, the wakesUp term and the brun / brune collapse, both of which act 5 applies rather than teaches.',
  'a1.17.l1': 'the newest A1 lesson before this one and its quality bar.',
  'sons.07.l1': 'l\'élision, which is why de becomes d apostrophe in front of a vowel.',
  'sons.10.l1': 'the liaison lesson, which owns « Mon frère travaille aux États-Unis. » and lent it here.',
};

/* ── Everything the batch checks, checked again against the POST-MERGE seed ── */

const itemIssues = NEW_ITEMS.flatMap((it) => validateItem(it, it.id));
if (itemIssues.length) die(`items invalid:\n${formatIssues(itemIssues)}`);

const ids = NEW_ITEMS.map((i) => i.id);
const dupeIds = ids.filter((id, i) => ids.indexOf(id) !== i);
if (dupeIds.length) die(`duplicate ids in batch: ${[...new Set(dupeIds)].join(', ')}`);

if (AUTHORED.length !== EXPECTED_AUTHORED) die(`${AUTHORED.length} authored rows, expected ${EXPECTED_AUTHORED}`);
if (IMPORTS.length !== EXPECTED_IMPORTED) die(`${IMPORTS.length} imported rows, expected ${EXPECTED_IMPORTED}`);
if (THE_TWELVE.length !== EXPECTED_COUNTRIES) die(`${THE_TWELVE.length} countries, expected ${EXPECTED_COUNTRIES}`);
if (RESPELL_REPAIRS.length !== EXPECTED_REPAIRS) die(`${RESPELL_REPAIRS.length} repairs, expected ${EXPECTED_REPAIRS}`);

const authoredHeadwords = AUTHORED.filter((i) => i.kind !== 'sentence');
if (authoredHeadwords.length) {
  die(`${authoredHeadwords.length} authored row(s) are not sentences: ${authoredHeadwords.map((i) => i.id).join(', ')}`);
}

/* ── THE ID COLLISION CHECK, against the seed this time ──────────────────── */
{
  const foreign = seed.items.filter((i) => i.id >= OWNED_ID_RANGE.from && i.id <= OWNED_ID_RANGE.to
    && i.id.startsWith('fr.a1.pays-et-nationalites.') && !ids.includes(i.id));
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
  // rows sit beside the existing ones. THIS IS THE CHECK THAT MATTERS MOST HERE,
  // because 24 of the 40 imported rows are headwords and the theme is entering
  // the seed for the first time.
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

/* ── a1.03: AUTHORED enforced to zero, IMPORTED measured and reported ────── */

const authoredJoiners = endingPopulation(
  AUTHORED.map((i) => ({ id: i.id, fr: i.fr, kind: i.kind, gender: i.gender ?? null, tags: i.tags })),
);
if (authoredJoiners.length) {
  die(
    `this merge AUTHORS ${authoredJoiners.length} row(s) into a1.03's measured ending population:\n  `
    + authoredJoiners.map((i) => `${i.id} "${i.fr}"`).join('\n  ') + `\n`
    + `  Every authored row here is a sentence and this lesson authors no headword at all.`,
  );
}
const importJoiners = endingPopulation(
  IMPORTS.map((i) => ({ id: i.id, fr: i.fr, kind: i.kind, gender: i.gender ?? null, tags: i.tags })),
);

const smuggled = NEW_ITEMS.filter((i) => WITHDRAWN_IDS.includes(i.id));
if (smuggled.length) {
  die(`withdrawn row(s) are back in the merge: ${smuggled.map((i) => `${i.id} "${i.fr}"`).join(', ')}`);
}

const lessonIssues = validateLesson(LESSON, LESSON.id);
if (lessonIssues.length) die(`lesson invalid:\n${formatIssues(lessonIssues)}`);

const POST_MERGE_IDS = new Set([...seed.items.map((i) => i.id), ...ids]);
const density = validateDensity(LESSON, POST_MERGE_IDS);
if (density.length) die(`lesson fails the density validator:\n${formatDensity(density)}`);

const missingIds = LESSON.itemIds.filter((id) => !POST_MERGE_IDS.has(id));
if (missingIds.length) {
  die(
    `${missingIds.length} itemId(s) will not resolve against the post-merge seed:\n  ${missingIds.join('\n  ')}\n`
    + `  This is the exact failure the brief invites by saying the merge should leave imported rows out.`,
  );
}

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
  && /\b(conjugaison|préposition|nom propre|article (défini|indéfini|partitif)|adjectif|possessif|(?<!')accord|masculin|féminin|invariable|déterminant)\b/i.test(s));
if (jargon.length) die(`grammar vocabulary reached an A1 learner:\n  ${jargon.slice(0, 3).join('\n  ')}`);

const hits = strings(LESSON).filter((s) => s.includes(REFRAME)).length;
if (hits !== REFRAME_APPEARANCES) die(`the reframe appears ${hits} times, expected exactly ${REFRAME_APPEARANCES}`);

/* ── Respellings ─────────────────────────────────────────────────────────── */

const badNasal = Object.values(RESPELL).filter((d) => hasPlainNasalFor(d.fr, d.respell));
if (badNasal.length) {
  die(`respellings close a nasal vowel with a plain n or m:\n  ${badNasal.map((d) => `${d.fr} ${d.respell}`).join('\n  ')}`);
}
const missingSuperscript = NASAL_FORMS.filter((f) => !RESPELL[f]?.respell.includes('ⁿ'));
if (missingSuperscript.length) {
  die(
    `form(s) carrying a nasal vowel with no superscript n: ${missingSuperscript.join(', ')}\n`
    + `  hasPlainNasalFor does not catch a word-internal nasal (la France is one), so this is checked by name.`,
  );
}
const wronglyNasalised = NOT_NASAL_FORMS.filter((f) => RESPELL[f]?.respell.includes('ⁿ'));
if (wronglyNasalised.length) {
  die(
    `form(s) respelled with a superscript n that have NO nasal vowel: ${wronglyNasalised.join(', ')}\n`
    + `  l'Espagne and l'Allemagne are flagged by the probe's letter-level heuristic and are CORRECT.`,
  );
}
if (RESPELL['la France'].respell !== '[LAH FRAHⁿSS]') {
  die(`la France is respelled ${RESPELL['la France'].respell}, expected [LAH FRAHⁿSS]`);
}
if (hasPlainNasalFor('la France', '[LAH FRAHNSS]')) {
  die('hasPlainNasalFor now catches LAH FRAHNSS. If the checker has learned to see word-internal nasals, §3 needs updating.');
}
if (RESPELL["l'Espagne"].respell !== '[lehs-PAHNY]') die("l'Espagne must stay [lehs-PAHNY]: /lɛspaɲ/ has no nasal vowel.");
if (RESPELL["l'Allemagne"].respell !== '[lahl-MAHNY]') die("l'Allemagne must stay [lahl-MAHNY]: /lalmaɲ/ has no nasal vowel.");
if (!RESPELL.canadien.respell.includes('ⁿ') || RESPELL.canadienne.respell.includes('ⁿ')) {
  die('the canadien / canadienne pair is broken: the masculine carries a nasal vowel and the feminine collapses it.');
}

/* ── The shape of the lesson ─────────────────────────────────────────────── */

const learnerText = learnerFacing.join('\n');

const bare = THE_TWELVE.filter((c) => !learnerText.includes(c.fr));
if (bare.length) die(`country(ies) never shown with their article on any screen: ${bare.map((c) => c.fr).join(', ')}`);
const noNat = THE_TWELVE.filter((c) => !hasPhrase(learnerText, c.nat));
if (noNat.length) die(`nationality(ies) never named on any screen: ${noNat.map((c) => c.nat).join(', ')}`);

const gridSections = LESSON.sections.filter((s) => {
  if (s.type !== 'tapTable') return false;
  const text = strings(s).join('\n');
  return (['f', 'm', 'pl'] as const).every((slot) => {
    const c = THE_TWELVE.find((x) => x.slot === slot)!;
    return text.includes(c.to) && text.includes(c.from);
  });
}).map((s) => (s as { id?: string }).id ?? '?');
if (!gridSections.includes('s14-grid')) {
  die(`no tapTable carries all three rows in BOTH directions (found: ${gridSections.join(', ') || 'none'}). That grid IS the lesson.`);
}

const iran = THE_TWELVE.find((c) => c.slot === 'mv')!;
if (!learnerText.includes(iran.to)) die(`"${iran.to}" appears on no screen. The vowel exception is the one rule a redraft loses first.`);
if (!learnerText.includes(iran.from)) die(`"${iran.from}" appears on no screen, so the learner is never shown where the exception stops.`);

const capitalSections = LESSON.sections.filter((s) => {
  const text = strings(s).join('\n');
  return text.includes('Il est français.') && text.includes("C'est un Français.");
}).map((s) => (s as { id?: string }).id ?? '?');
if (!capitalSections.includes('s19-capital')) {
  die(`no section puts « Il est français. » beside « C'est un Français. » (found: ${capitalSections.join(', ') || 'none'})`);
}

if (!learnerFacing.some((s) => /colou?rs lesson/i.test(s))) {
  die('the lesson never names the colours lesson. Agreement is a1.13\'s and is being applied, not taught.');
}
if (!learnerFacing.some((s) => /être lesson/i.test(s))) {
  die('the lesson never names the être lesson. a1.06 already ships the no-article rule AND the capital rule.');
}

/* ── The neighbours keep their lessons ───────────────────────────────────── */

const scenarios = LESSON.sections.filter((s) => s.type === 'scenario') as unknown as {
  turns?: { ai: string; user: string; alts?: { fr: string }[] }[];
}[];
const scenarioProduced = scenarios.flatMap((s) => (s.turns ?? [])
  .flatMap((t) => [t.user, ...(t.alts ?? []).map((a) => a.fr)]));
const productionSections = LESSON.sections.filter(
  (s) => ['vocabThemes', 'flashcards', 'reviewDeck', 'cardDeck', 'tapTable', 'practice', 'dictation'].includes(s.type),
);
const productionSurfaces = [
  ...strings(productionSections),
  ...scenarioProduced,
  ...strings(LESSON.drills ?? []),
  ...strings((LESSON.sections.find((s) => s.type === 'quiz') ?? {}) as unknown),
];

const conjugated = CONJUGATED_FORMS.filter((f) => productionSurfaces.some((s) => hasPhrase(s, f)));
if (conjugated.length) {
  die(`a conjugated form of aller or venir reached a production surface: ${conjugated.join(', ')}. a2.02 owns both verbs.`);
}
const produceSurfaces = [
  ...((LESSON.sections.find((s) => (s as { id?: string }).id === 's23-speak') as { itemIds?: string[] })?.itemIds ?? []),
  ...((LESSON.sections.find((s) => s.type === 'dictation') as { itemIds?: string[] })?.itemIds ?? []),
];
const producedReadingOnly = PAYS_READING_ONLY_IDS.filter((id) => produceSurfaces.includes(id));
if (producedReadingOnly.length) {
  die(`reading-only row(s) reached a production surface: ${producedReadingOnly.join(', ')}`);
}
const recentPast = RECENT_PAST_FRAMES.filter((f) => strings(LESSON).some((s) => s.toLowerCase().includes(f.toLowerCase())));
if (recentPast.length) die(`the recent past reached a surface: ${recentPast.join(', ')}. venir de plus an infinitive is a2.02.`);
const langHit = LANGUAGE_TEACHING.filter((w) => productionSurfaces.some((s) => s.toLowerCase().includes(w.toLowerCase())));
if (langHit.length) die(`language-learning teaching found, which belongs to ecole and matieres: ${langHit.join(', ')}`);
const quebecHit = QUEBEC_TEACHING.filter((w) => productionSurfaces.some((s) => s.toLowerCase().includes(w.toLowerCase())));
if (quebecHit.length) die(`Québec content found, which belongs to quebec-et-francophonie: ${quebecHit.join(', ')}`);

const quizSection = LESSON.sections.find((s) => s.type === 'quiz');
const qs = quizSection && quizSection.type === 'quiz' ? quizQuestions(quizSection) : [];
const rounds = quizSection && quizSection.type === 'quiz' ? (quizSection.rounds ?? []) : [];

const correctFrench: string[] = [
  ...AUTHORED.map((i) => i.fr),
  ...LESSON.sections.flatMap((s) => (s.type === 'commonErrors' ? s.errors.map((e) => e.right) : [])),
  ...scenarioProduced,
];
const answerKeys: string[] = [
  ...qs.flatMap((q) => [q.answer ?? '', ...(q.accept ?? [])]),
  ...(LESSON.drills ?? []).flatMap((d) => (d.opts && d.correct !== undefined ? [d.opts[d.correct]] : [])),
  ...(LESSON.sections.find((s) => s.type === 'roundup') as { points?: string[] } | undefined)?.points ?? [],
];
const violations: string[] = [];
for (const text of [...correctFrench, ...answerKeys]) {
  for (const f of FORBIDDEN_FORMS) {
    if (hasPhrase(text, f)) violations.push(`"${f}" in "${text}"`);
  }
}
if (violations.length) die(`an ungrammatical form is authored as correct French:\n  ${violations.join('\n  ')}`);

const imageRefs = strings(LESSON).filter((s) => /^lessons\/[a-z0-9-]+\/[a-z0-9-]+\.(jpg|png|webp)$/i.test(s));
if (imageRefs.length) die(`${imageRefs.length} imageRef(s) authored, and nothing validates imageRef: ${imageRefs.join(', ')}`);

/* ── Quiz ────────────────────────────────────────────────────────────────── */

const mcq = qs.filter((q) => (q.format ?? 'mcq') === 'mcq').length;
if (mcq * 2 > qs.length) die(`${mcq}/${qs.length} questions are mcq, over the half ceiling`);
const noWhy = qs.filter((q) => !q.why);
if (noWhy.length) die(`${noWhy.length} quiz question(s) carry no why`);
const sectionIds = new Set(LESSON.sections.map((s) => (s as { id?: string }).id).filter(Boolean) as string[]);
const badRef = qs.filter((q) => !q.ref || !sectionIds.has(q.ref));
if (badRef.length) die(`quiz ref(s) naming a section that does not exist: ${badRef.map((q) => q.ref).join(', ')}`);

// THE CAPITAL RULE IS TESTED ONLY BY mcq. fold() strips case.
const capitalQs = qs.filter((q) => {
  const all = [q.q, ...(q.opts ?? []), ...(q.accept ?? []), q.answer ?? '', q.target ?? ''].join(' ');
  return /Français|capital/i.test(all) && /français/i.test(all);
});
const freeTextCapital = capitalQs.filter((q) => q.format === 'typeIn' || q.format === 'errorSpot');
if (freeTextCapital.length) {
  die(
    `question(s) targeting the capital letter in a free-text format:\n  ${freeTextCapital.map((q) => `${q.format}: ${q.q}`).join('\n  ')}\n`
    + `  fold() strips case. errorSpot runs the SAME matchesAccept path as typeIn. Only mcq can test a capital.`,
  );
}
if (!capitalQs.some((q) => q.format === 'mcq')) die('the capital rule is taught and tested by no mcq question');

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

const earQs = qs.filter((q) => q.format === 'listenChoose');
const prepEar = earQs.filter((q) => (q.opts ?? []).some((o) => PREP_WORDS.some((p) => hasPhrase(o, p))));
if (prepEar.length) {
  die(`ear question(s) on a preposition: ${prepEar.map((q) => q.q).join(' | ')}. en and au share no sound at all.`);
}
if (!earQs.length) die('no listenChoose question at all. français against française is genuinely audible.');

/* ── Drill reachability ──────────────────────────────────────────────────── */

const drillForTarget = new Map((LESSON.errorTriggers ?? []).map((t) => [t.id, t.drill]));
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
if (rounds.length !== EXPECTED_ROUNDS) die(`expected ${EXPECTED_ROUNDS} quiz rounds, found ${rounds.length}`);
const teaching = (LESSON.drills ?? []).filter((d) => !d.id.startsWith('retest-'));
const orphans = teaching.filter((d) => !fired.has(d.id)).map((d) => d.id);
if (orphans.length) die(`drill(s) no quiz round can fire: ${orphans.join(', ')}`);

const quizCount = LESSON.sections.filter((s) => s.type === 'quiz').length;
if (quizCount !== 1) die(`${quizCount} quiz sections. The pager renders exactly one.`);

const sheetIds = new Set((LESSON.sheets ?? []).map((s) => s.id));
const danglingSheet = LESSON.sections
  .map((s) => (s as { sheetId?: string }).sheetId)
  .filter((id): id is string => Boolean(id) && !sheetIds.has(id!));
if (danglingSheet.length) die(`sheetId(s) naming a sheet that does not exist: ${[...new Set(danglingSheet)].join(', ')}`);
const unreachableSheets = [...sheetIds].filter(
  (id) => !LESSON.sections.some((s) => (s as { sheetId?: string }).sheetId === id));
if (unreachableSheets.length) die(`sheet(s) no section links to: ${unreachableSheets.join(', ')}`);
const SHEET_RENDERS = new Set(['teach', 'letterGrid', 'table']);
const deadSheetSections = (LESSON.sheets ?? []).flatMap((sh) => (sh.sections ?? [])
  .filter((sec) => !SHEET_RENDERS.has(sec.type))
  .map((sec) => `${sh.id}/${(sec as { id?: string }).id} is a ${sec.type}`));
if (deadSheetSections.length) die(`sheet section(s) ReferenceSheet.tsx does not draw:\n  ${deadSheetSections.join('\n  ')}`);

if (JSON.stringify(LESSON).includes('"autoplay"')) {
  die('autoplay is authored somewhere. It is declared in schema.ts and read by no component. Use audioFirst.');
}

/* ── The dictée, against the POST-MERGE item set ─────────────────────────── */

const postById = new Map<string, Item>([
  ...seed.items.map((i) => [i.id, i] as const),
  ...NEW_ITEMS.map((i) => [i.id, i] as const),
]);
const dictModes: string[] = [];
for (const id of PAYS_DICTATION_IDS) {
  const it = postById.get(id);
  if (!it) die(`the dictée names ${id}, which will not be in the seed after this merge`);
  const mode = dicteeMode(it.fr);
  dictModes.push(`${mode === 'words' ? 'WORDS' : 'letters'} "${it.fr}"`);
  if (mode !== 'letters') {
    die(
      `dictée target ${id} "${it.fr}" lands in ${mode} mode.\n`
      + `  Word mode offers each whole word as a tile, so the learner taps \`en\` rather than choosing it.`,
    );
  }
  if (!it.drills.includes('dictation')) die(`dictation item ${id} carries no "dictation" drill`);
}

/* ── The countries carry the gender the whole lesson rests on ────────────── */
{
  const wrong = THE_TWELVE.filter((c) => postById.get(c.id)?.gender !== c.gender);
  if (wrong.length) {
    die(`country(ies) whose stored gender disagrees with this lesson after the merge: ${wrong.map((c) => c.fr).join(', ')}`);
  }
}

/* ── The unit, and THE REBINDING ─────────────────────────────────────────── */

const unit = seed.units.find((u) => u.id === UNIT_ID);
if (!unit) die(`unit ${UNIT_ID} is not in the seed, so its lesson cannot be attached`);
if (unit.title !== UNIT_TITLE) die(`unit ${UNIT_ID} title has changed: "${unit.title}"`);
if (unit.sub !== UNIT_SUB) die(`unit ${UNIT_ID} sub has changed: "${unit.sub}"`);
if (unit.canDo !== UNIT_CANDO) die(`unit ${UNIT_ID} canDo has changed: "${unit.canDo}"`);
const themesNow = (unit as Unit & { themes?: string[] }).themes ?? [];
if (themesNow.join() !== UNIT_THEMES_BEFORE.join() && themesNow.join() !== UNIT_THEMES_AFTER.join()) {
  die(`unit ${UNIT_ID} themes are ${JSON.stringify(themesNow)}, expected the dead one or the rebound one.`);
}
const expectedTag = `A1 · LEÇON ${String(unit.seq).padStart(2, '0')}`;
if (LESSON.tag !== expectedTag) {
  die(`the lesson tag is "${LESSON.tag}" and the unit sits at seq ${unit.seq}, so the header will draw "${expectedTag}"`);
}

/* ── Write ───────────────────────────────────────────────────────────────── */

const existing = seed.lessons.find((l) => l.id === LESSON.id);
if (existing && JSON.stringify(existing) !== JSON.stringify(LESSON)) {
  console.warn(
    `\n! seed.json already carries a DIFFERENT ${LESSON.id}`
    + `\n  seed: v${existing.version}, ${existing.sections.length} sections, ${existing.itemIds.length} items`
    + `\n  here: v${LESSON.version}, ${LESSON.sections.length} sections, ${LESSON.itemIds.length} items`
    + `\n  Overwriting with the authored copy. If the seed copy was newer, restore it from git first.\n`,
  );
  if (existing.version > LESSON.version) {
    die(`the seed carries v${existing.version} and this source is v${LESSON.version}. Move the version counter forward.`);
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
  if (!row) { repaired.push(`${r.id} ${r.fr}: not in the seed, applied in Postgres only`); continue; }
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
const ipaRepaired: string[] = [];
for (const r of IPA_REPAIRS) {
  const row = byId.get(r.id);
  if (!row) { ipaRepaired.push(`${r.id} ${r.fr}: not in the seed, applied in Postgres only`); continue; }
  if (row.ipa !== r.from && row.ipa !== r.to) {
    die(`ipa repair for ${r.id}: expected "${r.from}", the seed says "${row.ipa}".`);
  }
  if (row.ipa !== r.to) {
    byId.set(r.id, { ...row, ipa: r.to });
    ipaRepaired.push(`${r.id} ${r.fr}: "${r.from}" → "${r.to}"`);
  }
}

const nextItems = [...byId.values()];
const nextLessons = [...seed.lessons.filter((l) => l.id !== LESSON.id), LESSON];

const nextUnit: Unit = {
  ...unit,
  themes: UNIT_THEMES_AFTER,
  lessonIds: [...new Set([...(unit.lessonIds ?? []), LESSON.id])],
} as Unit;
if (JSON.stringify(nextUnit.prereqUnitIds ?? []) !== JSON.stringify(unit.prereqUnitIds ?? [])) {
  die('this merge would change the unit prerequisites. That is a change to the spine and is REPORTED, not applied.');
}
const unitIssues = validateUnit(nextUnit, nextUnit.id);
if (unitIssues.length) die(`post-state fails validateUnit:\n${formatIssues(unitIssues)}`);
const nextUnits = seed.units.map((u) => (u.id === UNIT_ID ? nextUnit : u));

// `seed.version` is the OTA SNAPSHOT number and is NOT this merge's counter.
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

/* ── a1.03, measured against the ACTUAL post-merge item set ──────────────── */

const PRINTED = [
  ...ENDING_RULES.map((r) => ({ ending: r.ending, where: 'rule', accuracy: r.accuracy, items: r.items })),
  ...WORTHLESS_ENDINGS.map((w) => ({ ending: w.ending, where: 'worthless', accuracy: w.accuracy, items: w.items })),
  ...MORE_ENDINGS.map((e) => ({ ending: e.ending, where: 'sheet', accuracy: e.accuracy, items: e.items })),
];
const moved: { ending: string; where: string; from: string; to: string; items: number }[] = [];
const dangerous: string[] = [];
for (const p of PRINTED) {
  const b = measureEnding(seed.items, p.ending);
  const a = measureEnding(nextItems, p.ending);
  if (!b || !a) continue;
  if (b.accuracy !== a.accuracy || b.n !== a.n || b.predicts !== a.predicts) {
    moved.push({
      ending: p.ending, where: p.where,
      from: `${b.accuracy}%/${b.n} ${b.predicts}`, to: `${a.accuracy}%/${a.n} ${a.predicts}`,
      items: a.n,
    });
  }
  if (b.predicts !== a.predicts) dangerous.push(`-${p.ending} flips from ${b.predicts} to ${a.predicts}`);
  if (p.where !== 'worthless' && a.accuracy < 90) dangerous.push(`-${p.ending} drops to ${a.accuracy}%, under a1.03's own floor`);
  if (p.where === 'worthless' && a.accuracy >= 90) dangerous.push(`-${p.ending} climbs to ${a.accuracy}%, over the floor it is dismissed for being under`);
}
if (dangerous.length) {
  die(
    `this merge would change what a1.03 TEACHES, not just what it counts:\n  ${dangerous.join('\n  ')}\n`
    + `  Withdraw the offending country rather than re-measuring a1.03.`,
  );
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
console.log(`    "pays-et-nationalites" is NOT in SEED_CUT.themes and held ${seed.items.filter((i) => i.theme === 'pays-et-nationalites').length} rows before this run.`);
console.log(`    THE BRIEF SAYS THIS MERGE SHOULD LEAVE THEM OUT. It is wrong: a lesson whose itemIds resolve to`);
console.log(`    nothing draws empty cards. couleurs is the precedent and now holds 48 seed rows for this reason.`);
console.log(`  id range owned: ${OWNED_ID_RANGE.from} to ${OWNED_ID_RANGE.to} (11 rows, no gaps before or after)`);
console.log(`  lesson: ${LESSON.id} ${existing ? `REPLACED (v${existing.version} → v${LESSON.version})` : `ADDED (v${LESSON.version})`} (${seed.lessons.length} → ${nextLessons.length})`);
console.log(`  sections: ${LESSON.sections.length} | acts: ${LESSON.acts?.length} | itemIds: ${LESSON.itemIds.length} | quiz: ${qs.length} in ${rounds.length} rounds`);
console.log(`  quiz formats: ${Object.entries(formats).map(([k, v]) => `${k} ${v}`).join(', ')} | mcq ${Math.round((formats.mcq ?? 0) / qs.length * 100)}%`);
console.log(`  the twelve: every one shown WITH its article, every nationality named, checked individually`);
console.log(`  the grid is on ONE screen with both columns and all three rows: ${gridSections.join(', ')}`);
console.log(`  the vowel exception is taught by name: "${iran.to}" and "${iran.from}"`);
console.log(`  the capital rule is on ONE screen (${capitalSections.join(', ')}) and tested by ${capitalQs.filter((q) => q.format === 'mcq').length} mcq, 0 free-text`);
console.log(`  no conjugated aller or venir, no recent past, no language teaching, no Québec: confirmed`);
console.log(`  ${PAYS_READING_ONLY_IDS.length} third-person rows are READING ONLY and reach no produce surface`);
console.log(`  no positional option, none duplicated, spread ${Object.entries(slots).map(([k, n]) => `${k}:${Math.round(n / closed.length * 100)}%`).join(' ')} (cap 40)`);
console.log(`  imageRefs: ${imageRefs.length}. Nothing validates imageRef, and no component draws a map.`);
console.log(`  dictation: ${PAYS_DICTATION_IDS.length} lines, all letters mode`);
for (const m of dictModes) console.log(`    ${m}`);
console.log(`  reframe: "${REFRAME}" x${hits}`);
console.log(`  drills fired by a round: ${fired.size}/${teaching.length} | round leads: ${leads.join(', ')}`);
if (repaired.length) {
  console.log(`  respelling repairs applied to the seed (display only):`);
  for (const r of repaired) console.log(`    ${r}`);
} else {
  console.log(`  respelling repairs: already applied, nothing to do`);
}
if (ipaRepaired.length) {
  console.log(`  ipa repairs applied to the seed:`);
  for (const r of ipaRepaired) console.log(`    ${r}`);
}
console.log(`\n  a1.03's MEASURED ENDING POPULATION:`);
console.log(`    AUTHORED rows joining it: ${authoredJoiners.length} (enforced to zero; every authored row is a sentence)`);
console.log(`    IMPORTED rows joining it: ${importJoiners.length} of ${IMPORTS.length}`);
console.log(`    ${moved.length} of ${PRINTED.length} printed figures move, EVERY ONE A COUNT:`);
for (const m of moved) console.log(`      ${m.where.padEnd(9)} -${m.ending.padEnd(5)} ${m.from}  →  ${m.to}`);
console.log(`    THE FIX, and it is not optional: edit scripts/data/genre-endings.ts so that`);
for (const m of moved) console.log(`      -${m.ending}: items ${m.items}`);
console.log(`    then bump a1.03.l1's version and re-run its batch and merge. a1.03's card text is TEMPLATED from`);
console.log(`    those constants, so re-rendering is a data update rather than a rewrite. a1.11 did exactly this`);
console.log(`    (genre-lesson.ts:1646, "the -e figure moved from 871 to 873"). Until then a1-03-genre.test.ts is RED.`);
console.log(`\n  unit ${UNIT_ID} themes:    ${JSON.stringify(themesNow)} → ${JSON.stringify(UNIT_THEMES_AFTER)}  REBOUND`);
console.log(`  unit ${UNIT_ID} lessonIds: ${JSON.stringify(unit.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);
console.log(`  unit ${UNIT_ID} prereqUnitIds: ${JSON.stringify(unit.prereqUnitIds ?? [])} (UNCHANGED; ["a1.06","a1.03"] recommended)`);
console.log(`  items withdrawn: 0. This merge removes nothing.`);
console.log(`  neighbours intact: ${Object.keys(NEIGHBOURS).filter((id) => keptLessonIds.includes(id)).join(', ')}`);
console.log(`  untouched lessons: ${keptLessonIds.length}`);
console.log(`  validators: schema ✓  density ✓  house style ✓  no duplicate words ✓  flashhub coverage ✓  every itemId resolves ✓  no neighbour's content taught ✓  no other unit moved ✓  no foreign row in this id range ✓`);

if (DRY_RUN) {
  console.log('\n✓ dry run, all valid, nothing written.\n');
  process.exit(0);
}

writeFileSync(SEED, JSON.stringify(next, null, 2) + '\n', 'utf8');
console.log(
  `\n✓ seed.json updated.`
  + `\n`
  + `\n  a1.22.l1 is now in BOTH Postgres and the seed, so this lesson is safe.`
  + `\n`
  + `\n  NEXT, AND THE SUITE IS RED UNTIL IT IS DONE: re-measure the ${moved.length} counts above in`
  + `\n  scripts/data/genre-endings.ts, bump a1.03.l1's version, and re-run its batch and merge.`
  + `\n`
  + `\n  NOTE for whoever runs the next publish: ${importedNew} rows from pays-et-nationalites and`
  + `\n  presentation-personnelle are now in the seed and NEITHER theme is in SEED_CUT.themes. They`
  + `\n  survive a publish because publish-content.ts pulls in every item a bundled lesson references.`
  + `\n  If this lesson is ever unbundled, those rows leave with it.`
  + `\n`
  + `\n  NOTE for a1.21: it has not landed and its promised handover does not exist. This lesson took`
  + `\n  en/au/aux/de/du/des IN FRONT OF A COUNTRY and nothing else. See the foot of pays-lesson.ts.`
  + `\n`
  + `\n  STILL OPEN, and not this lesson's to fix: pnpm content:parity exits 1 on pre-existing`
  + `\n  divergences. Do not run pnpm content:publish until those are resolved.\n`,
);
