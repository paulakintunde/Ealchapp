/* Writes a1.19.l1 "Questions oui / non" into ealch-v2/src/content/seed.json.
 *
 *     pnpm tsx scripts/merge-questions-into-seed.ts --dry-run
 *     pnpm tsx scripts/merge-questions-into-seed.ts
 *
 * RUN THE BATCH FIRST. Postgres is the source of truth and seed.json is a cut of
 * it; content:publish regenerates the seed FROM the database, so a lesson that
 * exists only in the seed is deleted the next time anybody publishes. sons.07.l1
 * was written to the seed, erased by somebody else's publish, and survived only
 * because its source files were intact.
 *
 * `questions` IS NOT IN SEED_CUT.themes. It holds 502 published rows in Postgres
 * and SEVEN in the seed, so almost every row this lesson borrows has to be
 * carried in by this merge or its cards draw blank on a device. The brief says
 * plainly that imported rows "will not appear in the seed" and that this is
 * "correct behaviour, not a failed merge": that is true of a PUBLISH, which
 * reapplies the cut, and it is why the note at the foot of this script exists.
 *
 * NEVER `git checkout seed.json` to undo something. It discards other authors'
 * uncommitted lessons, and this session is the proof: a1.18 and a1.22 both
 * landed while this file was being written. Re-run this script. */
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
  AUTHORED, AVOIR_INVERSIONS, ETRE_INVERSIONS, FORBIDDEN_FORMS, IMPORTED, METHODS,
  NASAL_FORMS, NEVER_TAUGHT_FORMS, NOT_NASAL_FORMS, RESPELL, RESPELL_REPAIRS, REUSED,
  THE_TWELVE, TRIPLES, hasWord, questionWordIn, toItem,
} from './data/questions-corpus.ts';
import {
  OWNED_ID_RANGE, QUESTION_WORD_TEACHING, QUESTIONS_DICTATION_IDS, QUESTIONS_LESSON, REFRAME,
} from './data/questions-lesson.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');

const DRY_RUN = process.argv.includes('--dry-run');

const REFRAME_APPEARANCES = 14;
const EXPECTED_TRIGGERS = 6;
const EXPECTED_ROUNDS = 6;
const EXPECTED_METHODS = 3;
const EXPECTED_TWELVE = 12;
const EXPECTED_AUTHORED = 22;
const EXPECTED_TRIPLES = 3;

const UNIT_ID = 'a1.19';
const UNIT_THEMES = ['questions'];
const UNIT_TITLE = 'Yes/No Questions';
const UNIT_SUB = 'Questions oui / non';
const UNIT_CANDO = 'Can ask and answer yes-no questions three ways and pick the right register';

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

/** See the note in author-questions-batch.ts. `peut` carries a lookahead because
 *  a hyphen is a JavaScript word boundary and a bare /\bpeut\b/ matches inside
 *  `peut-être`, which is one of this lesson's four answers. */
const OTHER_VERBS = /\b(vais|vas|va(?!\s*\?)|allons|allez|vont|fais|fait|faites|font|pars|part|partez|partent|viens|vient|venez|viennent|peux|peut(?!-[eêé]tre)|pouvez|peuvent|veux|veut|voulez|veulent|sais|sait|savez|savent|prends|prend|prenez|prennent|dois|doit|devez|doivent|habite|habites|habitez|habitent|parle|parles|parlez|parlent|travaille|travailles|travaillez|travaillent|aime|aimes|aimez|aiment|joue|joues|jouez|jouent|mange|manges|mangez|mangent|pleut|connais|connaît|connaissez|dis|dit|dites|disent|écris|écrit|écrivez|écrivent|lis|lit|lisez|lisent|attends|attend|attendez|attendent|ouvre|ouvres|ouvrez|ouvrent|miaule|préfère|préfères|préférez|arrose|arrosé|commence|acceptez|acceptent)\b/i;

type Seed = { version: number; units: Unit[]; lessons: Lesson[]; items: Item[]; [k: string]: unknown };

const seed = JSON.parse(readFileSync(SEED, 'utf8')) as Seed;
const AUTHORED_ITEMS = AUTHORED.map(toItem);
const IMPORTS = IMPORTED;
const NEW_ITEMS = [...AUTHORED_ITEMS, ...IMPORTS];
const LESSON = QUESTIONS_LESSON;

console.log(`→ ${SEED}`);
console.log(`  seed version ${seed.version}: ${seed.items.length} items, ${seed.lessons.length} lessons, ${seed.units.length} units`);
if (DRY_RUN) console.log('  (dry run, nothing will be written)');

const OTHER_ITEMS = seed.items.filter((i) => !NEW_ITEMS.some((n) => n.id === i.id)).length;
const OTHER_LESSONS = seed.lessons.filter((l) => l.id !== LESSON.id).length;
const OTHER_LESSON_IDS = seed.lessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();

/** NAMED, not counted. A count alone lets a one-for-one swap through: drop a
 *  neighbour and add your own and the total is unchanged. Invariant §5.
 *
 *  a1.18.l1 and a1.22.l1 are at the top of this list because BOTH LANDED WHILE
 *  THIS LESSON WAS BEING WRITTEN, between its pre-flight probe and its first dry
 *  run. The seed went from 31 lessons to 33 under this build. If a merge ever
 *  drops one of them, this is where that shows up. */
const NEIGHBOURS: Record<string, string> = {
  'a1.18.l1': 'La négation, which landed mid-build and supplies the ne… pas this lesson builds its one negative question on. Without it si has nothing to answer.',
  'a1.22.l1': 'Pays & nationalités, which also landed mid-build and owns fr.a1.pays-et-nationalites, from which this lesson imports « Sont-ils canadiens ? ».',
  'a1.06.l1': 'the verb être and the one declared prerequisite. Six of the twelve swapped forms are its conjugation, and it asked nine questions with the voice alone without naming the method.',
  'a1.07.l1': 'the verb avoir. The other six swapped forms are its conjugation, and avoir faim is its vocabulary.',
  'a1.05.l1': 'the subject pronouns, which are what moves in front of the verb when a question is swapped round.',
  'sons.08.l1': 'Rythme & intonation, which owns the rising contour and already told the learner that up is a question. This lesson names it as a method rather than reteaching it.',
  'sons.07.l1': "l'élision, the first repair for two vowels meeting, which this lesson names as the same pressure behind est-ce qu'il.",
  'sons.10.l1': 'the liaison lesson, and the source of the n that carries across in est-ce qu\'on.',
  'a1.17.l1': 'the newest A1 lesson before a1.18 and this build\'s quality bar.',
  'a1.04.l1': "where le and la were taught, and the first place la amie became l'amie.",
};

/* ── Everything the batch checks, checked again against the POST-MERGE seed ── */

const itemIssues = NEW_ITEMS.flatMap((it) => validateItem(it, it.id));
if (itemIssues.length) die(`items invalid:\n${formatIssues(itemIssues)}`);

const ids = NEW_ITEMS.map((i) => i.id);
const dupeIds = ids.filter((id, i) => ids.indexOf(id) !== i);
if (dupeIds.length) die(`duplicate ids in batch: ${[...new Set(dupeIds)].join(', ')}`);

if (AUTHORED.length !== EXPECTED_AUTHORED) die(`${AUTHORED.length} authored rows, expected ${EXPECTED_AUTHORED}`);
if (METHODS.length !== EXPECTED_METHODS) die(`${METHODS.length} methods, expected ${EXPECTED_METHODS}`);
if (THE_TWELVE.length !== EXPECTED_TWELVE) die(`${THE_TWELVE.length} inversion forms, expected ${EXPECTED_TWELVE}`);
if (TRIPLES.length !== EXPECTED_TRIPLES) die(`${TRIPLES.length} triples, expected ${EXPECTED_TRIPLES}`);
if (ETRE_INVERSIONS.length !== 6 || AVOIR_INVERSIONS.length !== 6) {
  die(`the closed list is not six and six: être ${ETRE_INVERSIONS.length}, avoir ${AVOIR_INVERSIONS.length}`);
}

/* ── THE ID COLLISION CHECK, against the seed this time ────────────────────
 *
 * a1.15 landed inside a1.17's id range mid-build and a highest-id check passed
 * it cleanly. The seed is the other copy and can drift the same way, so the same
 * check runs here: does any row inside this batch's own range exist in the seed
 * that this batch did not author? */
{
  const foreign = seed.items.filter((i) => i.id >= OWNED_ID_RANGE.from && i.id <= OWNED_ID_RANGE.to
    && i.id.startsWith('fr.a1.questions.') && !ids.includes(i.id));
  if (foreign.length) {
    die(
      `${foreign.length} seed row(s) inside this lesson's own id range were authored by somebody else:\n  `
      + foreign.map((r) => `${r.id} "${r.fr}"`).join('\n  ') + `\n`
      + `  This merge would overwrite them. Renumber rather than forcing it.`,
    );
  }
}

/* ── flashhub coverage, over the POST-MERGE item set ───────────────────────
 *
 * Computed the way flashhub-coverage.test.ts computes it: keyed on `fr` PER
 * THEME with the article stripped. Two rows sharing an fr in one theme are one
 * card served twice. This lesson authors no headword at all, so the risk here is
 * a SENTENCE colliding with a published one, which is why every authored string
 * was checked exactly by scripts/_questions_collision.ts before authoring. */
{
  const postMerge = [
    ...seed.items.filter((i) => !NEW_ITEMS.some((n) => n.id === i.id)),
    ...NEW_ITEMS,
  ];
  const headword = (fr: string) => fr.toLowerCase().replace(/^(le |la |les |l'|un |une |des )/, '').trim();
  const seen = new Map<string, string>();
  const collisions: string[] = [];
  for (const w of postMerge) {
    if (w.kind === 'sentence') continue;
    if ((w.cardType ?? 'vocab') !== 'vocab') continue;
    const key = `${w.theme}::${headword(w.fr)}`;
    const prior = seen.get(key);
    if (prior && (ids.includes(w.id) || ids.includes(prior))) {
      collisions.push(`${prior} vs ${w.id} ("${w.fr}") in ${w.theme}`);
    } else if (!prior) seen.set(key, w.id);
  }
  if (collisions.length) {
    die(
      `after this merge, two rows would share an \`fr\` inside one theme:\n  ${collisions.join('\n  ')}\n`
      + `  flashhub-coverage.test.ts reads that as one card served twice.`,
    );
  }
}

/* ── a1.03's measured population, through the REAL function ────────────────
 *
 * Run over the POST-MERGE set rather than over this batch alone, because that is
 * what a1-03-genre.test.ts measures. a1.11 moved a1.03's -e statistic by
 * authoring gendered single-word nouns and turned a lesson nobody had touched
 * red. This lesson authors no headword of any kind, so the expected delta is
 * exactly zero and anything else is a defect. */
{
  const before = endingPopulation(seed.items.map((i) => ({
    id: i.id, fr: i.fr, kind: i.kind, gender: i.gender ?? null, tags: i.tags,
  })));
  const after = endingPopulation([
    ...seed.items.filter((i) => !NEW_ITEMS.some((n) => n.id === i.id)),
    ...NEW_ITEMS,
  ].map((i) => ({ id: i.id, fr: i.fr, kind: i.kind, gender: i.gender ?? null, tags: i.tags })));
  if (after.length !== before.length) {
    const added = after.filter((a) => !before.some((b) => b.id === a.id));
    die(
      `this merge moves a1.03's measured ending population from ${before.length} to ${after.length}.\n  `
      + added.map((i) => `${i.id} "${i.fr}"`).join('\n  ') + `\n`
      + `  a1-03-genre.test.ts re-measures twenty printed figures from the seed on every run.`,
    );
  }
}

/* ── Lesson ────────────────────────────────────────────────────────────────*/

const lessonIssues = validateLesson(LESSON, LESSON.id);
if (lessonIssues.length) die(`lesson invalid:\n${formatIssues(lessonIssues)}`);

const seedIds = new Set([...seed.items.map((i) => i.id), ...ids]);
const density = validateDensity(LESSON, seedIds);
if (density.length) die(`lesson fails the density validator:\n${formatDensity(density)}`);

const unresolved = LESSON.itemIds.filter((id) => !seedIds.has(id));
if (unresolved.length) {
  die(
    `the lesson names ${unresolved.length} item(s) that will not be in the seed after this merge:\n  ${unresolved.join('\n  ')}\n`
    + `  Every one of these would draw a blank card on a device. \`questions\` is outside SEED_CUT.themes, so\n`
    + `  anything this lesson borrows has to be carried in by the IMPORTED manifest.`,
  );
}

const authoredJson = JSON.stringify({ AUTHORED, LESSON });
if (authoredJson.includes('—')) die('em dash found in authored copy');
if (/honest/i.test(authoredJson)) die('the word "honest" is banned from authored content');
if (authoredJson.includes('‿')) die('U+203F tie character in authored copy');

const learnerFacing = [
  ...strings(LESSON.sections),
  ...strings(LESSON.sheets ?? []),
  ...strings(LESSON.terms ?? {}),
];
const isIdentifier = (s: string) => !/\s/.test(s) && /^[a-z0-9][a-z0-9.\-_/]*$/i.test(s);
const jargon = learnerFacing.filter((s) => !isIdentifier(s)
  && /\b(conjugaison|interrogati(f|ve|on)|inversion|intonation|registre|proposition|sujet|verbe|adjectif|masculin|féminin|invariable|déterminant)\b/i.test(s));
if (jargon.length) die(`grammar vocabulary reached an A1 learner:\n  ${jargon.slice(0, 3).join('\n  ')}`);

const hits = strings(LESSON).filter((s) => s.includes(REFRAME)).length;
if (hits !== REFRAME_APPEARANCES) die(`the reframe appears ${hits} times, expected exactly ${REFRAME_APPEARANCES}`);

/* ── Respellings ───────────────────────────────────────────────────────────*/

const badNasal = Object.values(RESPELL).filter((d) => hasPlainNasalFor(d.fr, d.respell));
if (badNasal.length) die(`respellings close a nasal with a plain n:\n  ${badNasal.map((d) => `${d.fr} ${d.respell}`).join('\n  ')}`);
const missingSuperscript = NASAL_FORMS.filter((f) => !RESPELL[f]?.respell.includes('ⁿ'));
if (missingSuperscript.length) die(`nasal form(s) with no superscript: ${missingSuperscript.join(', ')}`);
const wronglyNasalised = NOT_NASAL_FORMS.filter((f) => RESPELL[f]?.respell.includes('ⁿ'));
if (wronglyNasalised.length) die(`superscript on form(s) with no nasal vowel: ${wronglyNasalised.join(', ')}`);

const st = RESPELL['Tu es prêt.'];
const qu = RESPELL['Tu es prêt ?'];
if (st.respell !== qu.respell || st.ipa !== qu.ipa) {
  die(`the statement and the question carry different transcriptions:\n  ${st.ipa} ${st.respell}\n  ${qu.ipa} ${qu.respell}`);
}

/* ── The teaching, asserted the same way the batch asserts it ──────────────*/

const learnerText = learnerFacing.join('\n');
const methodMissing = METHODS.filter((m) => !hasWord(learnerText.toLowerCase(), m.name.toLowerCase()));
if (methodMissing.length) die(`method(s) never named on a screen: ${methodMissing.map((m) => m.name).join(', ')}`);
const registerMissing = METHODS.filter((m) => !learnerText.includes(m.when));
if (registerMissing.length) {
  die(`method(s) taught with NO register label: ${registerMissing.map((m) => m.name).join(', ')}`);
}

const byId = new Map([...NEW_ITEMS, ...REUSED].map((r) => [r.id, r] as const));
const frFor = (id: string) => byId.get(id)?.fr ?? '\u0000';
const heroSections = LESSON.sections.filter((s) => {
  const text = strings(s).join('\n');
  return TRIPLES.some((t) => t.cells.every((c) => text.includes(frFor(c.id))));
}).map((s) => (s as { id?: string }).id ?? '?');
if (!heroSections.includes('s04-triple')) {
  die(`s04-triple does not carry one question in all three forms. Found in: ${heroSections.join(', ') || 'nowhere'}`);
}

const untaught = THE_TWELVE.filter((f) => !hasWord(learnerText.toLowerCase(), f));
if (untaught.length) die(`inversion form(s) never named on any screen: ${untaught.join(', ')}`);
const tContrast = LESSON.sections.filter((s) => {
  const t = strings(s).join('\n').toLowerCase();
  return hasWord(t, 'a-t-il') && hasWord(t, 'est-il');
});
if (!tContrast.length) die('no single section shows a-t-il beside est-il');
const elisionShown = ["est-ce qu'il", "est-ce qu'elle", "est-ce qu'on"].filter((f) => learnerText.toLowerCase().includes(f));
if (elisionShown.length < 3) die(`the elision is shown for only ${elisionShown.length} of il/elle/on`);

const siSections = LESSON.sections.filter((s) => {
  const t = strings(s).join('\n');
  return /\bSi,/.test(t) && /n'e?s?t? ?pas|\bne\b.*\bpas\b/i.test(t);
}).map((s) => (s as { id?: string }).id ?? '?');
if (!siSections.length) die('si is taught but no section shows it beside a negative question');
if (!AUTHORED.some((r) => r.role === 'negative')) die('no negative question is authored, so si has nothing to attach to');

/* ── The neighbours keep their lessons ─────────────────────────────────────*/

const quizSection = LESSON.sections.find((s) => s.type === 'quiz');
const qs = quizSection && quizSection.type === 'quiz' ? quizQuestions(quizSection) : [];
const productionSurfaces = [
  ...strings(LESSON.sections.filter((s) => ['vocabThemes', 'flashcards', 'reviewDeck', 'cardDeck'].includes(s.type))),
  ...strings(LESSON.drills ?? []),
  ...strings((quizSection ?? {}) as unknown),
];
const qwLeaks = productionSurfaces.map((s) => ({ s, w: questionWordIn(s) })).filter((x) => x.w);
if (qwLeaks.length) {
  die(`a1.20's question word(s) reached a production surface:\n  ${qwLeaks.slice(0, 5).map((x) => `[${x.w}] ${x.s.slice(0, 100)}`).join('\n  ')}`);
}
const quEstCe = strings(LESSON).filter((s) => /qu'est-ce/i.test(s));
if (quEstCe.length) die(`qu'est-ce appears ${quEstCe.length} time(s), and it is a1.20's`);
const teachLeak = QUESTION_WORD_TEACHING.filter((w) => productionSurfaces.some((s) => s.toLowerCase().includes(w)));
if (teachLeak.length) die(`question-word teaching on a production surface: ${teachLeak.join(', ')}`);

const produced: string[] = [
  ...AUTHORED.map((r) => r.fr),
  ...qs.flatMap((q) => [
    ...(typeof q.correct === 'number' ? [q.opts?.[q.correct] ?? ''] : []),
    q.answer ?? '', q.target ?? '', ...(q.accept ?? []),
  ]),
  ...(LESSON.drills ?? []).flatMap((d) => (d.opts && d.correct !== undefined ? [d.opts[d.correct]] : [])),
  ...LESSON.sections.flatMap((s) => (s.type === 'commonErrors' ? s.errors.map((e) => e.right) : [])),
  ...LESSON.sections.flatMap((s) => (s.type === 'scenario' ? s.turns.flatMap((t) => [t.user, ...(t.alts ?? []).map((a) => a.fr)]) : [])),
];
const otherVerb = produced.filter((s) => OTHER_VERBS.test(s));
if (otherVerb.length) {
  die(`production surface(s) ask for a verb other than être or avoir:\n  ${otherVerb.slice(0, 5).map((s) => `"${s}"`).join('\n  ')}`);
}
const askedFor = NEVER_TAUGHT_FORMS.filter((f) => produced.some((s) => hasWord(s.toLowerCase(), f)));
if (askedFor.length) die(`the learner is asked to produce a form nobody says: ${askedFor.join(', ')}`);
if (!strings(LESSON).some((s) => hasWord(s.toLowerCase(), 'ai-je'))) {
  die('ai-je is never named, so nothing stops a later author completing the twelve to fourteen');
}
const violations: string[] = [];
for (const text of produced) {
  for (const f of FORBIDDEN_FORMS) {
    if (hasWord(text.toLowerCase(), f)) violations.push(`"${f}" in "${text}"`);
  }
}
if (violations.length) die(`an ungrammatical form is authored as correct French:\n  ${violations.join('\n  ')}`);

const imageRefs = strings(LESSON).filter((s) => /^lessons\/[a-z0-9-]+\/[a-z0-9-]+\.(jpg|png|webp)$/i.test(s));
if (imageRefs.length) die(`${imageRefs.length} imageRef(s) authored and nothing validates imageRef: ${imageRefs.join(', ')}`);

/* ── Quiz ──────────────────────────────────────────────────────────────────*/

const mcq = qs.filter((q) => (q.format ?? 'mcq') === 'mcq').length;
if (mcq * 2 > qs.length) die(`${mcq}/${qs.length} questions are mcq, over the half ceiling`);
const noWhy = qs.filter((q) => !q.why);
if (noWhy.length) die(`${noWhy.length} quiz question(s) carry no why`);
const noRef = qs.filter((q) => !q.ref);
if (noRef.length) die(`${noRef.length} quiz question(s) carry no ref`);
const sectionIds = new Set(LESSON.sections.map((s) => (s as { id?: string }).id).filter(Boolean) as string[]);
const badRef = qs.filter((q) => q.ref && !sectionIds.has(q.ref));
if (badRef.length) die(`quiz ref(s) naming a section that does not exist: ${badRef.map((q) => q.ref).join(', ')}`);
const POSITIONAL = ['the first', 'the second', 'the third', 'the last', 'both of the above',
  'all of the above', 'none of these', 'none of the above'];
const positional = qs.flatMap((q) => (q.opts ?? [])
  .filter((o) => POSITIONAL.some((p) => o.toLowerCase().includes(p))).map((o) => `"${o}" in "${q.q}"`));
if (positional.length) die(`quiz option(s) referring to a position:\n  ${positional.join('\n  ')}`);
const dupeOpts = qs.flatMap((q) => {
  const seen = new Set<string>();
  return (q.opts ?? []).filter((o) => (seen.has(o) ? true : (seen.add(o), false))).map((o) => `"${o}" twice in "${q.q}"`);
});
if (dupeOpts.length) die(`quiz question(s) with a duplicate option:\n  ${dupeOpts.join('\n  ')}`);
const closed = qs.filter((q) => typeof q.correct === 'number');
const slots = closed.reduce<Record<number, number>>((a, q) => {
  a[q.correct as number] = (a[q.correct as number] ?? 0) + 1;
  return a;
}, {});
const over = Object.entries(slots).filter(([, n]) => n / closed.length > 0.4);
if (over.length) die(`authored answer slot(s) over the 40% cap: ${over.map(([k]) => k).join(', ')}`);
const unacceptable = qs.filter((q) => q.answer && !matchesAccept(q.answer, q.accept));
if (unacceptable.length) die(`question(s) that do not accept their own answer:\n  ${unacceptable.map((q) => `"${q.q}"`).join('\n  ')}`);

const rounds = quizSection && quizSection.type === 'quiz' ? (quizSection.rounds ?? []) : [];
const registerRound = rounds.find((r) => r.id === 'r1-who-is-it-for');
if (!registerRound) die('the register round r1-who-is-it-for is gone, and it is the round that tests the canDo');
const rrClosed = (registerRound.questions ?? []).filter((q) => typeof q.correct === 'number');
const rrEstCeQue = rrClosed.filter((q) => /est-ce que/i.test(q.opts?.[q.correct as number] ?? ''));
if (rrEstCeQue.length) {
  die(`${rrEstCeQue.length} of the register round's closed answers is est-ce que, so it can be passed by always choosing the default`);
}
const earRound = rounds.find((r) => (r.questions ?? []).every((q) => q.format === 'listenChoose'));
if (!earRound) die('no round is entirely listenChoose, and intonation exists only as a sound');

/* ── Drill reachability ────────────────────────────────────────────────────*/

const drillForTarget = new Map((LESSON.errorTriggers ?? []).map((t) => [t.id, t.drill]));
const leads: string[] = [];
for (const r of rounds) {
  const lead = (r.targets ?? []).find((t) => drillForTarget.has(t));
  if (!lead) die(`round ${r.id} names no target that resolves to a drill`);
  if (leads.includes(lead)) die(`round ${r.id} leads on "${lead}", which another round already leads on`);
  leads.push(lead);
}
const fired = new Set(leads.map((t) => drillForTarget.get(t)!));
if ((LESSON.errorTriggers ?? []).length !== EXPECTED_TRIGGERS) die(`expected ${EXPECTED_TRIGGERS} error triggers`);
if (rounds.length !== EXPECTED_ROUNDS) die(`expected ${EXPECTED_ROUNDS} quiz rounds`);
const teaching = (LESSON.drills ?? []).filter((d) => !d.id.startsWith('retest-'));
const orphans = teaching.filter((d) => !fired.has(d.id)).map((d) => d.id);
if (orphans.length) die(`drill(s) no quiz round can fire: ${orphans.join(', ')}`);

const quizCount = LESSON.sections.filter((s) => s.type === 'quiz').length;
if (quizCount !== 1) die(`${quizCount} quiz sections. The pager renders exactly one.`);
const sheetIds = new Set((LESSON.sheets ?? []).map((s) => s.id));
const danglingSheet = LESSON.sections.map((s) => (s as { sheetId?: string }).sheetId)
  .filter((id): id is string => Boolean(id) && !sheetIds.has(id!));
if (danglingSheet.length) die(`sheetId(s) naming a sheet that does not exist: ${[...new Set(danglingSheet)].join(', ')}`);
const DRAWN_IN_SHEET = new Set(['teach', 'letterGrid', 'table']);
const invisibleSheetSections = (LESSON.sheets ?? []).flatMap((sh) =>
  (sh.sections ?? []).filter((sec) => !DRAWN_IN_SHEET.has(sec.type)).map((sec) => `${sh.id}/${sec.id} (${sec.type})`));
if (invisibleSheetSections.length) {
  die(`sheet section(s) of a type ReferenceSheet.tsx does not draw: ${invisibleSheetSections.join(', ')}`);
}
if (JSON.stringify(LESSON).includes('"autoplay"')) die('autoplay is authored somewhere and no component reads it');

/* ── The dictée, through the real dicteeMode, against the POST-MERGE set ───*/

const dictModes: string[] = [];
for (const id of QUESTIONS_DICTATION_IDS) {
  const it = byId.get(id) ?? seed.items.find((i) => i.id === id);
  if (!it) die(`the dictée names ${id}, which is neither in this batch nor in the seed`);
  const mode = dicteeMode(it.fr);
  dictModes.push(`${mode === 'words' ? 'WORDS' : 'letters'} "${it.fr}" (${it.fr.replace(/[^a-zA-Zà-ÿ]/g, '').length} letters)`);
  if (mode !== 'letters') {
    die(
      `dictée target ${id} "${it.fr}" is ${mode} mode.\n`
      + `  Word mode hands the learner each whole word as a tile, so a lesson about word ORDER tests nothing.`,
    );
  }
}

/* ── REUSED still matches the seed ─────────────────────────────────────────*/

{
  const drifted = REUSED
    .map((r) => ({ r, row: seed.items.find((i) => i.id === r.id) }))
    .filter(({ r, row }) => !row || row.fr !== r.fr)
    .map(({ r, row }) => (row ? `${r.id}: this lesson says "${r.fr}", the seed says "${row.fr}"` : `${r.id} is not in the seed`));
  if (drifted.length) die(`REUSED has drifted from the seed:\n  ${drifted.join('\n  ')}`);
}

/* ── Build the next seed ───────────────────────────────────────────────────*/

let added = 0;
let updated = 0;
const nextItems = [...seed.items];
for (const it of NEW_ITEMS) {
  const ix = nextItems.findIndex((x) => x.id === it.id);
  if (ix >= 0) { nextItems[ix] = it; updated += 1; } else { nextItems.push(it); added += 1; }
}
const importedNew = IMPORTS.filter((i) => !seed.items.some((x) => x.id === i.id)).length;

/* THE RESPELLING REPAIR, applied to the seed as well. Display-only, and it is
 * printed rather than done quietly. */
const repaired: string[] = [];
for (const r of RESPELL_REPAIRS) {
  const ix = nextItems.findIndex((x) => x.id === r.id);
  if (ix < 0) continue;
  const row = nextItems[ix];
  if (row.fr !== r.fr) die(`respelling repair ${r.id}: the seed says "${row.fr}", expected "${r.fr}"`);
  if (row.respell === r.to) continue;
  if (row.respell !== r.from) die(`respelling repair ${r.id}: the seed says "${row.respell}", expected "${r.from}"`);
  nextItems[ix] = { ...row, respell: r.to };
  repaired.push(`${r.id} "${r.fr}": ${r.from} → ${r.to}`);
}

const existing = seed.lessons.find((l) => l.id === LESSON.id);
if (existing && existing.version >= LESSON.version) {
  die(`the seed already carries ${LESSON.id} at v${existing.version} and this merge is v${LESSON.version}`);
}
const nextLessons = existing
  ? seed.lessons.map((l) => (l.id === LESSON.id ? LESSON : l))
  : [...seed.lessons, LESSON];

const unit = seed.units.find((u) => u.id === UNIT_ID);
if (!unit) die(`unit ${UNIT_ID} is not in the seed`);
if (unit.title !== UNIT_TITLE) die(`unit ${UNIT_ID} title has changed: "${unit.title}"`);
if (unit.sub !== UNIT_SUB) die(`unit ${UNIT_ID} sub is "${unit.sub}", expected "${UNIT_SUB}"`);
if (unit.canDo !== UNIT_CANDO) die(`unit ${UNIT_ID} canDo has changed: "${unit.canDo}"`);
const themesNow = (unit as Unit & { themes?: string[] }).themes;
if (themesNow != null && themesNow.join() !== UNIT_THEMES.join()) {
  die(`unit ${UNIT_ID} is already bound to ${JSON.stringify(themesNow)}; this merge would set ${JSON.stringify(UNIT_THEMES)}`);
}
const nextUnit = {
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

console.log(`  items: +${added} new (${AUTHORED.length} authored, ${importedNew} imported from outside the seed cut), ${updated} updated (${seed.items.length} → ${nextItems.length})`);
for (const theme of [...new Set(IMPORTS.map((i) => i.theme))]) {
  const n = IMPORTS.filter((i) => i.theme === theme).length;
  const already = seed.items.filter((i) => i.theme === theme).length;
  console.log(`    ${theme}: ${already} in the seed before this run, +${n} from the IMPORTED manifest`);
}
console.log(`    "questions" is NOT in SEED_CUT.themes: 502 rows in Postgres, ${seed.items.filter((i) => i.theme === 'questions').length} in the seed before this run.`);
console.log(`    So this merge carrying them in is REQUIRED rather than optional. See the note at the end.`);
console.log(`  id range owned: ${OWNED_ID_RANGE.from} to ${OWNED_ID_RANGE.to}. No headword id taken; fr.sons.questions is untouched.`);
console.log(`  lesson: ${LESSON.id} ${existing ? `REPLACED (v${existing.version} → v${LESSON.version})` : `ADDED (v${LESSON.version})`} (${seed.lessons.length} → ${nextLessons.length})`);
console.log(`  sections: ${LESSON.sections.length} | acts: ${LESSON.acts?.length} | itemIds: ${LESSON.itemIds.length} | quiz: ${qs.length} in ${rounds.length} rounds`);
console.log(`  quiz formats: ${Object.entries(formats).map(([k, v]) => `${k} ${v}`).join(', ')} | mcq ${Math.round((formats.mcq ?? 0) / qs.length * 100)}%`);
console.log(`  the three methods, each named AND carrying a register label: ${METHODS.map((m) => m.name).join(', ')}`);
console.log(`  one question in all three forms on ONE screen: s04-triple`);
console.log(`  the twelve swapped forms, each named on a screen: ${THE_TWELVE.join(', ')}`);
console.log(`  a-t-il against est-il in: ${tContrast.map((s) => (s as { id?: string }).id).join(', ')}`);
console.log(`  si taught beside a negative question in: ${siSections.join(', ')}`);
console.log(`  ai-je and suis-je: named and rejected, never produced`);
console.log(`  no question word on any production surface, and qu'est-ce que nowhere at all: confirmed`);
console.log(`  no verb but être or avoir asked for as output: confirmed over ${produced.length} strings`);
console.log(`  the register round has ${rrClosed.length} closed questions and NONE answers est-ce que`);
console.log(`  a full listenChoose round: ${earRound.id}`);
console.log(`  no positional option, none duplicated, spread ${Object.entries(slots).map(([k, n]) => `${k}:${Math.round(n / closed.length * 100)}%`).join(' ')} (cap 40)`);
console.log(`  imageRefs: ${imageRefs.length}. Nothing validates imageRef, so this lesson authors none.`);
console.log(`  dictation: ${QUESTIONS_DICTATION_IDS.length} lines, all letters mode`);
for (const m of dictModes) console.log(`    ${m}`);
console.log(`  Tu es prêt. and Tu es prêt ? carry identical ipa AND respell: ${st.respell}`);
console.log(`  reframe: "${REFRAME}" x${hits}`);
console.log(`  unit ${UNIT_ID} themes:    ${JSON.stringify(themesNow ?? null)} → ${JSON.stringify(UNIT_THEMES)}   <- THIS MERGE BINDS IT`);
console.log(`  unit ${UNIT_ID} lessonIds: ${JSON.stringify(unit.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);
console.log(`  items withdrawn: 0. This merge removes nothing.`);
if (repaired.length) {
  console.log(`  respelling repairs applied to the seed (display only):`);
  for (const r of repaired) console.log(`    ${r}`);
} else {
  console.log(`  respelling repairs: already applied or the row is not in the seed, nothing to do`);
}
console.log(`  neighbours intact: ${Object.keys(NEIGHBOURS).filter((id) => keptLessonIds.includes(id)).join(', ')}`);
console.log(`  untouched lessons: ${keptLessonIds.join(', ')}`);
console.log(`  validators: schema ✓  density ✓  house style ✓  no grammar jargon ✓  no duplicate words ✓  flashhub coverage ✓  a1.03 population untouched ✓  reused items match the seed ✓  no neighbour's content taught ✓  no other unit moved ✓  no foreign row in this id range ✓`);

if (DRY_RUN) {
  console.log('\n✓ dry run, all valid, nothing written.\n');
  process.exit(0);
}

writeFileSync(SEED, JSON.stringify(next, null, 2) + '\n', 'utf8');
console.log(
  `\n✓ seed.json updated.`
  + `\n`
  + `\n  a1.19.l1 is now in BOTH Postgres and the seed, so this lesson is safe.`
  + `\n`
  + `\n  NOTE for whoever runs the next publish: ${importedNew} rows from themes OUTSIDE SEED_CUT are now in`
  + `\n  the seed, most of them from "questions" itself. They survive a publish because publish-content.ts`
  + `\n  pulls in every item a bundled lesson references, and a1.19.l1 references all of them. If this`
  + `\n  lesson is ever unbundled, those rows leave with it. The brief's warning that imported rows "will`
  + `\n  not appear in the seed" is about the CUT, not about this merge, and both are correct.`
  + `\n`
  + `\n  NOTE for a1.20, which is next and declares this unit as its prerequisite:`
  + `\n    fr.a1.questions.374+     FREE. This lesson took .352-.373.`
  + `\n    fr.sons.questions.174+   FREE AND ENTIRELY YOURS. This lesson authored no headword at all.`
  + `\n    Its first 173 rows ALREADY hold qui, que, quoi, où, quand, comment, pourquoi, combien, quel,`
  + `\n    quelle, lequel and laquelle with respellings and drills. Probe before authoring any of them.`
  + `\n    257 of the 329 rows in fr.a1.questions are question-word questions and all of them are yours.`
  + `\n`
  + `\n  STILL OPEN, and not this lesson's to fix: pnpm content:parity exits 1 on pre-existing`
  + `\n  divergences. Do not run pnpm content:publish until those are resolved.\n`,
);
