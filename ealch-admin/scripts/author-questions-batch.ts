/* Applies a1.19.l1 "Questions oui / non" to Postgres: 22 authored rows, 22
 * imported rows verified field by field, 1 respelling repair, the lesson, and
 * the unit link and theme binding. Validates EVERYTHING before it opens a
 * transaction.
 *
 *     pnpm tsx scripts/author-questions-batch.ts --dry-run
 *     pnpm tsx scripts/author-questions-batch.ts
 *
 * Order matters and it has cost real work twice: apply to Postgres FIRST, merge
 * into the seed SECOND, and publish only when both agree. content:publish
 * regenerates seed.json FROM this database, so publishing before applying would
 * silently delete the lesson from the seed.
 *
 * The guards below are not decoration. Each one is either a rule from
 * A1-BUILD-INVARIANTS.md or a requirement this lesson's brief names explicitly,
 * and every one of them runs the REAL app function rather than a copy: a1.08
 * shipped a hand-rolled endingPopulation carrying a filter the real one does not
 * have, let four rows through and moved two of a1.03's printed cards. */
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
import { endingPopulation } from '../../ealch-v2/src/content/gender.logic.ts';
import { dicteeMode, wordDecoys } from '../../ealch-v2/src/content/dictee.logic.ts';
import { matchesAccept } from '../../ealch-v2/src/content/answer.logic.ts';
import { guardLessonVersion } from './version-guard.logic.ts';
import {
  AUTHORED, AVOIR_INVERSIONS, ETRE_INVERSIONS, FORBIDDEN_FORMS, IMPORTED, METHODS,
  NASAL_FORMS, NEVER_TAUGHT_FORMS, NOT_NASAL_FORMS, NOT_REPAIRED, REPAIRS_INVISIBLE_TO_CHECKER,
  RESPELL, RESPELL_REPAIRS, REUSED, THE_TWELVE, TRIPLES, WITHDRAWN_IDS,
  hasWord, questionWordIn, toItem,
} from './data/questions-corpus.ts';
import {
  HANDOVER_NEXT_FREE_ID, HANDOVER_SONS_NEXT_FREE_ID, OWNED_ID_RANGE, QUESTION_WORD_TEACHING,
  QUESTIONS_DICTATION_IDS, QUESTIONS_LESSON, REFRAME,
} from './data/questions-lesson.ts';

const AUTHORED_ITEMS: Item[] = AUTHORED.map(toItem);
const IMPORTS: Item[] = IMPORTED;
const NEW_ITEMS: Item[] = [...AUTHORED_ITEMS, ...IMPORTS];
const LESSON: Lesson = QUESTIONS_LESSON;
const UNIT_ID = 'a1.19';

/** Asserted against an explicit constant, never a figure derived from the
 *  lesson. A derived count compares the content to itself and passes on any
 *  rewording. */
const REFRAME_APPEARANCES = 14;

const EXPECTED_TRIGGERS = 6;
const EXPECTED_ROUNDS = 6;
const EXPECTED_METHODS = 3;
const EXPECTED_TWELVE = 12;
const EXPECTED_AUTHORED = 22;
const EXPECTED_TRIPLES = 3;

/** The unit declares `themes: null` and this batch BINDS it. That is the one
 *  structural edit this lesson makes to something outside itself, and it is
 *  printed rather than done quietly. */
const UNIT_THEMES = ['questions'];
const UNIT_TITLE = 'Yes/No Questions';
// Copied BYTE FOR BYTE from the probe's unit dump. The brief warns that `sub`
// carries spaces around the slash and that a1.09's curly apostrophe once tripped
// a batch guard for exactly this kind of difference.
const UNIT_SUB = 'Questions oui / non';
const UNIT_CANDO = 'Can ask and answer yes-no questions three ways and pick the right register';

const DRY_RUN = process.argv.includes('--dry-run');

function die(msg: string): never {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

function drillsOf(v: unknown): string[] {
  if (Array.isArray(v)) return v as string[];
  if (typeof v !== 'string') return [];
  return v.replace(/^\{|\}$/g, '').split(',').map((s) => s.trim().replace(/^"|"$/g, '')).filter(Boolean);
}

function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, out));
  return out;
}

/** Every finite verb form outside être and avoir that an A1 learner could not
 *  produce. Used ONLY against production surfaces: the brief allows other verbs
 *  as reading exposure and several imported sentences carry them.
 *
 *  `peut` CARRIES A NEGATIVE LOOKAHEAD and that is not fussiness. In JavaScript
 *  a hyphen is a word boundary, so a bare /\bpeut\b/ matches inside `peut-être`,
 *  which is a frozen adverb and one of this lesson's four answers. The first
 *  version of this guard fired on the lesson's own `Peut-être.` five times.
 *  Invariant §0's warning about building a regex out of a search term, arriving
 *  from the other direction: the boundary was too GENEROUS rather than too
 *  strict. `va` has the same shape inside `ça va` and is guarded the same way.
 *
 *  The lookahead accepts BOTH `-être` and `-etre`, because scenario turns are
 *  authored without accents: scenario.logic.ts fails a conversation that mixes
 *  straight and curly apostrophes in one bubble stack, and the whole scenario is
 *  written flat for that reason. A guard that only knew the accented spelling
 *  passed the quiz and fired on the roleplay. */
const OTHER_VERBS = /\b(vais|vas|va(?!\s*\?)|allons|allez|vont|fais|fait|faites|font|pars|part|partez|partent|viens|vient|venez|viennent|peux|peut(?!-[eêé]tre)|pouvez|peuvent|veux|veut|voulez|veulent|sais|sait|savez|savent|prends|prend|prenez|prennent|dois|doit|devez|doivent|habite|habites|habitez|habitent|parle|parles|parlez|parlent|travaille|travailles|travaillez|travaillent|aime|aimes|aimez|aiment|joue|joues|jouez|jouent|mange|manges|mangez|mangent|pleut|connais|connaît|connaissez|dis|dit|dites|disent|écris|écrit|écrivez|écrivent|lis|lit|lisez|lisent|attends|attend|attendez|attendent|ouvre|ouvres|ouvrez|ouvrent|miaule|préfère|préfères|préférez|arrose|arrosé|commence|acceptez|acceptent)\b/i;

async function main() {
  console.log(`→ ${describeTarget()}`);
  if (!process.env.DATABASE_URL) {
    die('No DATABASE_URL. Content is authored against the canonical database, never PGlite.');
  }
  if (DRY_RUN) console.log('  (dry run, nothing will be written)');

  /* ── Items ─────────────────────────────────────────────────────────────── */

  const itemIssues = NEW_ITEMS.flatMap((it) => validateItem(it, it.id));
  if (itemIssues.length) die(`items invalid:\n${formatIssues(itemIssues)}`);

  const ids = NEW_ITEMS.map((i) => i.id);
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dupes.length) die(`duplicate ids in batch: ${[...new Set(dupes)].join(', ')}`);

  if (AUTHORED.length !== EXPECTED_AUTHORED) {
    die(`${AUTHORED.length} authored rows, expected ${EXPECTED_AUTHORED} (fr.a1.questions.352-.373)`);
  }

  // flashhub-coverage.test.ts keys decks on `fr` per theme with the article
  // stripped, so two rows sharing an fr in one theme are one card served twice.
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

  /* ── a1.03's measured population, through the REAL function ────────────── */

  const genderPopulation = endingPopulation(
    NEW_ITEMS.map((i) => ({ id: i.id, fr: i.fr, kind: i.kind, gender: i.gender ?? null, tags: i.tags })),
  );
  if (genderPopulation.length) {
    die(
      `this batch would add ${genderPopulation.length} row(s) to a1.03's measured ending population, which can move `
      + `a statistic printed on twenty of its cards:\n  `
      + genderPopulation.map((i) => `${i.id} "${i.fr}"`).join('\n  ') + `\n`
      + `  NOTHING in this lesson should reach that population. Every authored row is kind 'sentence' and this\n`
      + `  lesson authors no headword of any kind. a1.11 moved a1.03's -e statistic this way and turned a lesson\n`
      + `  nobody had touched red.`,
    );
  }
  const smuggled = NEW_ITEMS.filter((i) => WITHDRAWN_IDS.includes(i.id));
  if (smuggled.length) {
    die(
      `withdrawn row(s) are back in the batch: ${smuggled.map((i) => `${i.id} "${i.fr}"`).join(', ')}\n`
      + `  See WITHDRAWN_IDS in questions-corpus.ts. Each has a reason and none of them is taste:\n`
      + `  fr.a1.questions.086 carries « le tien », a possessive pronoun a1.17 bans from every surface.`,
    );
  }

  /* ── Lesson ────────────────────────────────────────────────────────────── */

  const lessonIssues = validateLesson(LESSON, LESSON.id);
  if (lessonIssues.length) die(`lesson invalid:\n${formatIssues(lessonIssues)}`);

  const density = validateDensity(LESSON, new Set([...ids, ...LESSON.itemIds]));
  if (density.length) die(`lesson fails the density validator:\n${formatDensity(density)}`);

  const authoredJson = JSON.stringify({ AUTHORED, LESSON });
  if (authoredJson.includes('—')) die('em dash found in authored copy, the house style bans it');
  if (/honest/i.test(authoredJson)) die('the word "honest" is banned from authored content');
  if (authoredJson.includes('‿')) {
    die(
      'U+203F tie character in authored copy, which renders as a low underscore on a Pixel 6.\n'
      + '  fr.a1.salutations.270 carries one and is deliberately NOT imported for that reason.',
    );
  }

  const learnerFacing = [
    ...strings(LESSON.sections),
    ...strings(LESSON.sheets ?? []),
    ...strings(LESSON.terms ?? {}),
  ];
  const isIdentifier = (s: string) => !/\s/.test(s) && /^[a-z0-9][a-z0-9.\-_/]*$/i.test(s);
  // `interrogation`, `inversion`, `intonation` and `registre` are this lesson's
  // own subject and therefore the single most likely jargon to slip onto a card.
  // `sujet` and `verbe` are added because a lesson about word order is the one
  // most tempted to name the words it is reordering.
  const jargon = learnerFacing.filter((s) => !isIdentifier(s)
    && /\b(conjugaison|interrogati(f|ve|on)|inversion|intonation|registre|proposition|sujet|verbe|adjectif|masculin|féminin|invariable|déterminant|complément circonstanciel)\b/i.test(s));
  if (jargon.length) die(`grammar vocabulary reached an A1 learner:\n  ${jargon.slice(0, 3).join('\n  ')}`);

  const hits = strings(LESSON).filter((s) => s.includes(REFRAME)).length;
  if (hits !== REFRAME_APPEARANCES) {
    die(`the reframe appears ${hits} times, expected exactly ${REFRAME_APPEARANCES}`);
  }

  /* ── Respellings ───────────────────────────────────────────────────────── */

  const badNasal = Object.values(RESPELL).filter((d) => hasPlainNasalFor(d.fr, d.respell));
  if (badNasal.length) {
    die(`respellings close a nasal vowel with a plain n or m:\n  ${badNasal.map((d) => `${d.fr} ${d.respell}`).join('\n  ')}`);
  }
  // BY NAME, because the shared checker cannot see a WORD-INTERNAL nasal.
  // Invariant §3's first blind spot, the same one that let a1.09's sep-TAHNBR
  // and a1.13's oh-RAHNZH through.
  const missingSuperscript = NASAL_FORMS.filter((f) => !RESPELL[f]?.respell.includes('ⁿ'));
  if (missingSuperscript.length) {
    die(
      `form(s) carrying a nasal vowel with no superscript n: ${missingSuperscript.join(', ')}\n`
      + `  hasPlainNasalFor does not catch a word-internal nasal, so this is checked by name.`,
    );
  }
  // THE OPPOSITE CHECK. `prêt` is /pʁɛ/ with an ORAL vowel, and a superscript on
  // it would teach a sound that is not in the word while silencing nothing. That
  // is a1.13's jaune trap exactly, and this lesson says `prêt` on almost every
  // screen.
  const wronglyNasalised = NOT_NASAL_FORMS.filter((f) => RESPELL[f]?.respell.includes('ⁿ'));
  if (wronglyNasalised.length) {
    die(
      `form(s) respelled with a superscript n that have NO nasal vowel: ${wronglyNasalised.join(', ')}\n`
      + `  These carry no nasal at all and the checker never flagged them, so a superscript here would be a\n`
      + `  "fix" for nothing that teaches a sound the word does not contain.`,
    );
  }
  // THE CLAIM OF ACT 2, MECHANICALLY. The lesson says on four surfaces that the
  // statement and the question are identical except for the contour. If the two
  // transcriptions ever differ, that claim is contradicted by the cards making
  // it. Same shape as a1.17's mon ami / mon amie assertion.
  const st = RESPELL['Tu es prêt.'];
  const qu = RESPELL['Tu es prêt ?'];
  if (st.respell !== qu.respell || st.ipa !== qu.ipa) {
    die(
      `the statement and the question carry different transcriptions:\n`
      + `  Tu es prêt.  ${st.ipa} ${st.respell}\n`
      + `  Tu es prêt ? ${qu.ipa} ${qu.respell}\n`
      + `  They differ by one punctuation mark and a contour, and this lesson says so on four surfaces.`,
    );
  }

  /* ── The shape of the lesson ───────────────────────────────────────────── */

  if (METHODS.length !== EXPECTED_METHODS) die(`${METHODS.length} methods, expected ${EXPECTED_METHODS}`);
  if (THE_TWELVE.length !== EXPECTED_TWELVE) die(`${THE_TWELVE.length} inversion forms, expected ${EXPECTED_TWELVE}`);
  if (TRIPLES.length !== EXPECTED_TRIPLES) die(`${TRIPLES.length} triples, expected ${EXPECTED_TRIPLES}`);
  if (ETRE_INVERSIONS.length !== 6 || AVOIR_INVERSIONS.length !== 6) {
    die(`the closed list is not six and six: être ${ETRE_INVERSIONS.length}, avoir ${AVOIR_INVERSIONS.length}`);
  }

  const learnerText = learnerFacing.join('\n');

  // ALL THREE METHODS TAUGHT, AND THE REGISTER ATTACHED TO EACH, ASSERTED
  // INDIVIDUALLY. The brief calls a method taught without its register "the
  // failure mode the canDo names", and it is right: the canDo says "and pick the
  // right register", so a lesson presenting three forms without saying when to
  // use each has not delivered it. Counted per method rather than as a total, so
  // dropping one register label and adding another cannot pass.
  const methodMissing = METHODS.filter((m) => !hasWord(learnerText.toLowerCase(), m.name.toLowerCase()));
  if (methodMissing.length) die(`method(s) never named on a screen: ${methodMissing.map((m) => m.name).join(', ')}`);
  const registerMissing = METHODS.filter((m) => !learnerText.includes(m.when));
  if (registerMissing.length) {
    die(
      `method(s) taught with NO register label: ${registerMissing.map((m) => m.name).join(', ')}\n`
      + `  The canDo is "three ways AND pick the right register". A method with no register is half a method,\n`
      + `  and this is the failure the canDo is written against.`,
    );
  }

  // THE HERO SCREEN: ONE SECTION SHOWS ONE QUESTION IN ALL THREE FORMS.
  // The brief calls this "the layout the test must assert" and gives the reason:
  // split across missions the learner gets three unrelated forms and no basis
  // for choosing. Checked as ONE SECTION carrying all three cells of one triple.
  const byId = new Map([...NEW_ITEMS, ...REUSED].map((r) => [r.id, r] as const));
  const frFor = (id: string) => byId.get(id)?.fr ?? '\u0000';
  const heroSections = LESSON.sections.filter((s) => {
    const text = strings(s).join('\n');
    return TRIPLES.some((t) => t.cells.every((c) => text.includes(frFor(c.id))));
  }).map((s) => (s as { id?: string }).id ?? '?');
  if (!heroSections.length) {
    die(
      'no single section shows one question in all three forms.\n'
      + '  That is the reframe and the lesson. Split across missions the learner gets three unrelated forms and\n'
      + '  no basis for choosing between them, which is exactly what the canDo is written against.',
    );
  }
  // AND IT IS THE DESIGNED SCREEN, BY NAME. The scene's break also carries two
  // of the three, and a check that "some section" carries the contrast would
  // pass with s04-triple deleted. a1.17 shipped that hole and closed it.
  if (!heroSections.includes('s04-triple')) {
    die(
      `all three forms appear together in ${heroSections.join(', ')} but NOT in s04-triple.\n`
      + `  s04-triple is the designed screen: three rows, one per method, with a register label on each.`,
    );
  }

  // THE FULL INVERSION LIST IS TAUGHT, FORM BY FORM. The brief asks for exactly
  // this, and the reason is that a coverage COUNT passes with two forms swapped.
  const untaught = THE_TWELVE.filter((f) => !hasWord(learnerText.toLowerCase(), f));
  if (untaught.length) die(`inversion form(s) never named on any screen: ${untaught.join(', ')}`);

  // a-t-il AND est-il BOTH APPEAR, so the -t- rule is shown against a case that
  // does not take one. Named by the brief, and without the pairing `a-t-il`
  // looks like an arbitrary spelling rather than a rule about sounds.
  for (const pair of ['a-t-il', 'est-il']) {
    if (!hasWord(learnerText.toLowerCase(), pair)) die(`"${pair}" appears on no screen, so the -t- rule has no contrast`);
  }
  const tContrast = LESSON.sections.filter((s) => {
    const t = strings(s).join('\n').toLowerCase();
    return hasWord(t, 'a-t-il') && hasWord(t, 'est-il');
  });
  if (!tContrast.length) {
    die('no single section shows a-t-il beside est-il. Apart, the inserted t reads as a spelling quirk rather than a rule.');
  }

  // est-ce qu' APPEARS BEFORE A VOWEL, asserted by name.
  const elisionShown = ["est-ce qu'il", "est-ce qu'elle", "est-ce qu'on"]
    .filter((f) => learnerText.toLowerCase().includes(f));
  if (elisionShown.length < 3) {
    die(`the elision is shown for only ${elisionShown.length} of il/elle/on: ${elisionShown.join(', ')}`);
  }

  /* ── THE si DECISION, PINNED ───────────────────────────────────────────
   *
   * a1.18 LANDED DURING THIS BUILD, which resolves the brief's option 3 (its own
   * recommendation) to TEACH si. So the assertion is the brief's first branch:
   * si appears, AND a negative question appears beside it. Either half alone is
   * meaningless, because si without a negative to answer is just a word.        */
  const siSections = LESSON.sections.filter((s) => {
    const t = strings(s).join('\n');
    return /\bSi,/.test(t) && /n'e?s?t? ?pas|\bne\b.*\bpas\b/i.test(t);
  }).map((s) => (s as { id?: string }).id ?? '?');
  if (!siSections.length) {
    die(
      'si is taught but no section shows it beside a negative question.\n'
      + '  a1.18 landed during this build, so the negation is available and this lesson teaches si on it. A si\n'
      + '  card with no negative question next to it teaches a word with no job.',
    );
  }
  // AND THE NEGATIVE IT ANSWERS IS a1.18's OWN GRAMMAR, not something invented
  // here. a1.18 ships « Nous ne sommes pas prêts. » with this lesson's adjective.
  if (!AUTHORED.some((r) => r.role === 'negative')) {
    die('no negative question is authored, so si has nothing in this lesson to attach to');
  }

  /* ── The neighbours keep their lessons ─────────────────────────────────── */

  // Written against PRODUCTION SURFACES rather than every string, or they fire
  // on legitimate context and get deleted. The brief says so explicitly:
  // "assert against decks, vocab, drills and quiz rather than every string, or
  // it will fire on legitimate context and get deleted."
  const productionSurfaces = [
    ...strings(LESSON.sections.filter((s) => ['vocabThemes', 'flashcards', 'reviewDeck', 'cardDeck'].includes(s.type))),
    ...strings(LESSON.drills ?? []),
    ...strings((LESSON.sections.find((s) => s.type === 'quiz') ?? {}) as unknown),
  ];
  const qwLeaks = productionSurfaces.map((s) => ({ s, w: questionWordIn(s) })).filter((x) => x.w);
  if (qwLeaks.length) {
    die(
      `a1.20's question word(s) reached a production surface:\n  `
      + qwLeaks.slice(0, 5).map((x) => `[${x.w}] ${x.s.slice(0, 100)}`).join('\n  ') + `\n`
      + `  257 of the 329 rows in fr.a1.questions are question-word questions and every one of them is a1.20's.\n`
      + `  Reading exposure is fine; a deck, a drill or a quiz answer is not.`,
    );
  }
  // qu'est-ce que SPECIFICALLY, everywhere, because the brief calls it "the most
  // tempting thing to include" and it is a question word riding on this lesson's
  // own block.
  const quEstCe = strings(LESSON).filter((s) => /qu'est-ce/i.test(s));
  if (quEstCe.length) {
    die(
      `qu'est-ce appears ${quEstCe.length} time(s):\n  ${quEstCe.slice(0, 3).map((s) => s.slice(0, 90)).join('\n  ')}\n`
      + `  It is a question word built on this lesson's est-ce que block and it is emphatically a1.20's.`,
    );
  }
  const teachLeak = QUESTION_WORD_TEACHING.filter((w) => productionSurfaces.some((s) => s.toLowerCase().includes(w)));
  if (teachLeak.length) die(`question-word teaching on a production surface: ${teachLeak.join(', ')}`);

  /* ── No production surface asks for a verb but être or avoir ───────────── */

  const quizSection = LESSON.sections.find((s) => s.type === 'quiz');
  const qs = quizSection && quizSection.type === 'quiz' ? quizQuestions(quizSection) : [];
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
    die(
      `production surface(s) ask the learner to conjugate a verb other than être or avoir:\n  `
      + otherVerb.slice(0, 5).map((s) => `"${s}"`).join('\n  ') + `\n`
      + `  There is no regular-verb unit in A1: -er verbs are a2.01 and faire is a2.12. Reading exposure is\n`
      + `  allowed and several imported sentences carry other verbs; asking for one as output is not.`,
    );
  }

  // ai-je AND suis-je ARE NEVER ASKED FOR. The brief asks for their absence "so
  // a later author does not complete the paradigm". Written as "never produced"
  // rather than "never appears", because the lesson is ALSO required to name
  // them in order to warn against them, and a guard that fires on that gets
  // deleted rather than fixed.
  const askedFor = NEVER_TAUGHT_FORMS.filter((f) => produced.some((s) => hasWord(s.toLowerCase(), f)));
  if (askedFor.length) {
    die(
      `the learner is asked to produce a form nobody says: ${askedFor.join(', ')}\n`
      + `  ai-je and suis-je are pg=0 across every published sentence. Drilling one builds an instinct that then\n`
      + `  has to be unlearned. The je question goes through est-ce que.`,
    );
  }
  const aiJeNamed = strings(LESSON).some((s) => hasWord(s.toLowerCase(), 'ai-je'));
  if (!aiJeNamed) {
    die('ai-je is never named, so nothing in the lesson stops a later author "completing" the twelve to fourteen');
  }

  // THE FORBIDDEN FORMS never appear as correct French. Every string in the list
  // is ungrammatical, so a hit is always a defect. Scoped to correct-French
  // surfaces: the traps card and the quiz options have to SHOW the error.
  const violations: string[] = [];
  for (const text of produced) {
    for (const f of FORBIDDEN_FORMS) {
      if (hasWord(text.toLowerCase(), f)) violations.push(`"${f}" in "${text}"`);
    }
  }
  if (violations.length) {
    die(
      `an ungrammatical form is authored as correct French:\n  ${violations.join('\n  ')}\n`
      + `  This teaches the exact error the lesson exists to prevent.`,
    );
  }

  /* ── imageRef: nothing validates it, so this lesson authors none ───────── */

  const imageRefs = strings(LESSON).filter((s) => /^lessons\/[a-z0-9-]+\/[a-z0-9-]+\.(jpg|png|webp)$/i.test(s));
  if (imageRefs.length) {
    die(
      `${imageRefs.length} imageRef(s) authored: ${imageRefs.join(', ')}\n`
      + `  Nothing validates imageRef. lesson-contract.test.ts contains no reference to it and the schema comment\n`
      + `  promising a publish check is conditional on an asset manifest that does not exist. The brief also warns\n`
      + `  against inventing an intonation curve: no component draws one, and audio is the right medium anyway.`,
    );
  }

  /* ── Quiz ──────────────────────────────────────────────────────────────── */

  const mcq = qs.filter((q) => (q.format ?? 'mcq') === 'mcq').length;
  if (mcq * 2 > qs.length) die(`${mcq}/${qs.length} questions are mcq, over the half ceiling`);

  const noWhy = qs.filter((q) => !q.why);
  if (noWhy.length) die(`${noWhy.length} quiz question(s) carry no why:\n  ${noWhy.map((q) => q.q).join('\n  ')}`);
  const noRef = qs.filter((q) => !q.ref);
  if (noRef.length) die(`${noRef.length} quiz question(s) carry no ref:\n  ${noRef.map((q) => q.q).join('\n  ')}`);
  const sectionIds = new Set(LESSON.sections.map((s) => (s as { id?: string }).id).filter(Boolean) as string[]);
  const badRef = qs.filter((q) => q.ref && !sectionIds.has(q.ref));
  if (badRef.length) die(`quiz ref(s) naming a section that does not exist: ${badRef.map((q) => q.ref).join(', ')}`);

  // NO OPTION REFERS TO A POSITION. QuizDeckView shuffles the options of every
  // closed question per attempt, so a positional option is broken by design.
  // The brief calls this lesson "unusually exposed", and it is right: a register
  // question naturally wants "the first is more formal", which is meaningless
  // once shuffled.
  const POSITIONAL = ['the first', 'the second', 'the third', 'the last', 'both of the above',
    'all of the above', 'none of these', 'none of the above', 'the one above', 'the one below'];
  const positional = qs.flatMap((q) => (q.opts ?? [])
    .filter((o) => POSITIONAL.some((p) => o.toLowerCase().includes(p)))
    .map((o) => `"${o}" in "${q.q}"`));
  if (positional.length) {
    die(
      `quiz option(s) referring to a position:\n  ${positional.join('\n  ')}\n`
      + `  The options are shuffled per question per attempt, so the positions the learner sees are not the ones\n`
      + `  you wrote. Name the method in the option text instead.`,
    );
  }
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
    die(
      `authored answer slot(s) over the 40% cap: ${over.map(([k, n]) => `slot ${k} holds ${n}/${closed.length}`).join(', ')}\n`
      + `  quiz-spread fails the build above 40%, whatever the runtime shuffle does.`,
    );
  }

  const unacceptable = qs.filter((q) => q.answer && !matchesAccept(q.answer, q.accept));
  if (unacceptable.length) {
    die(`question(s) that do not accept their own answer:\n  ${unacceptable.map((q) => `"${q.q}" shows "${q.answer}"`).join('\n  ')}`);
  }

  // THE REGISTER ROUND CANNOT BE PASSED BY ALWAYS ANSWERING est-ce que.
  // The brief asks for this by name. With est-ce que as the recommended default
  // it would otherwise be the right answer disproportionately often, and a
  // learner who has understood nothing could clear the round by picking it every
  // time.
  const rounds = quizSection && quizSection.type === 'quiz' ? (quizSection.rounds ?? []) : [];
  const registerRound = rounds.find((r) => r.id === 'r1-who-is-it-for');
  if (!registerRound) die('the register round r1-who-is-it-for is gone, and it is the round that tests the canDo');
  const rrClosed = (registerRound.questions ?? []).filter((q) => typeof q.correct === 'number');
  const rrEstCeQue = rrClosed.filter((q) => /est-ce que/i.test(q.opts?.[q.correct as number] ?? ''));
  if (rrEstCeQue.length) {
    die(
      `${rrEstCeQue.length} of the register round's ${rrClosed.length} closed answers is est-ce que.\n`
      + `  A register round whose answers are all the safe default can be passed by always choosing it, which\n`
      + `  tests nothing. At least one round must reward the other two methods.`,
    );
  }

  // A FULL ROUND OF listenChoose. The brief says it "earns a full round here,
  // which is rare", and the reason is exact: intonation is the only method that
  // exists purely as a sound and nothing else in A1 can test it.
  const earRound = rounds.find((r) => (r.questions ?? []).every((q) => q.format === 'listenChoose'));
  if (!earRound) {
    die(
      'no round is entirely listenChoose.\n'
      + '  Intonation exists only as a sound: rising « Tu es prêt ? » against falling « Tu es prêt. » is the one\n'
      + '  contrast in A1 that nothing but the ear can settle, and no other lesson can test it.',
    );
  }

  /* ── Drill reachability ────────────────────────────────────────────────── */

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
  if (rounds.length !== EXPECTED_ROUNDS) {
    die(`expected ${EXPECTED_ROUNDS} quiz rounds, found ${rounds.length}. One round per drill, or a drill is dead.`);
  }
  const teaching = (LESSON.drills ?? []).filter((d) => !d.id.startsWith('retest-'));
  const orphans = teaching.filter((d) => !fired.has(d.id)).map((d) => d.id);
  if (orphans.length) {
    die(
      `drill(s) no quiz round can fire: ${orphans.join(', ')}\n`
      + `  drillForRound stops at a round's FIRST target that resolves to a drill, so a drill named only in second\n`
      + `  place never runs.`,
    );
  }
  const knownDrills = new Set((LESSON.drills ?? []).map((d) => d.id));
  for (const t of LESSON.errorTriggers ?? []) {
    if (!knownDrills.has(t.drill)) die(`trigger ${t.id} names drill "${t.drill}", which is not authored`);
    if (t.retest && !knownDrills.has(t.retest)) die(`trigger ${t.id} names retest "${t.retest}", which is not authored`);
    for (const d of t.detectOn) {
      const base = d.split('/')[0];
      if (!sectionIds.has(base)) die(`trigger ${t.id} detects on "${d}", and section "${base}" does not exist`);
    }
  }

  const quizCount = LESSON.sections.filter((s) => s.type === 'quiz').length;
  if (quizCount !== 1) die(`${quizCount} quiz sections. The pager renders exactly one, so the rest are unreachable.`);

  const sheetIds = new Set((LESSON.sheets ?? []).map((s) => s.id));
  const danglingSheet = LESSON.sections
    .map((s) => (s as { sheetId?: string }).sheetId)
    .filter((id): id is string => Boolean(id) && !sheetIds.has(id!));
  if (danglingSheet.length) die(`sheetId(s) naming a sheet that does not exist: ${[...new Set(danglingSheet)].join(', ')}`);
  const unreachableSheets = [...sheetIds].filter(
    (id) => !LESSON.sections.some((s) => (s as { sheetId?: string }).sheetId === id));
  if (unreachableSheets.length) die(`sheet(s) no section links to: ${unreachableSheets.join(', ')}`);

  // ONLY teach, letterGrid AND table ARE DRAWN INSIDE A SHEET. ReferenceSheet.tsx
  // renders exactly those three and its `default` branch draws the section's
  // TITLE and nothing else. a1.17 shipped two `cheatSheet` sections here that
  // drew a heading with fourteen invisible rows under it, and a1.13 has the same
  // defect still shipped.
  const DRAWN_IN_SHEET = new Set(['teach', 'letterGrid', 'table']);
  const invisibleSheetSections = (LESSON.sheets ?? []).flatMap((sh) =>
    (sh.sections ?? []).filter((sec) => !DRAWN_IN_SHEET.has(sec.type)).map((sec) => `${sh.id}/${sec.id} (${sec.type})`));
  if (invisibleSheetSections.length) {
    die(
      `sheet section(s) of a type ReferenceSheet.tsx does not draw: ${invisibleSheetSections.join(', ')}\n`
      + `  It renders teach, letterGrid and table, and falls through to a title-only branch for everything else.\n`
      + `  a1.17 shipped that as a bug and fixed it in v3; a1.13 still has it.`,
    );
  }

  if (JSON.stringify(LESSON).includes('"autoplay"')) {
    die('autoplay is authored somewhere. It is declared in schema.ts and read by no component. Use audioFirst.');
  }

  /* ── The database ──────────────────────────────────────────────────────── */

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();

  try {
    const reused = LESSON.itemIds.filter((id) => !ids.includes(id));
    if (reused.length) {
      const found = await client.query<{ id: string }>(
        `select id from content_items where id = any($1) and status = 'published'`,
        [reused],
      );
      const missing = reused.filter((id) => !found.rows.some((r) => r.id === id));
      if (missing.length) die(`lesson references unpublished/unknown items:\n  ${missing.join('\n  ')}`);
    }

    const reusedIds = REUSED.map((r) => r.id);
    const foundReused = await client.query<{ id: string; fr: string }>(
      `select id, fr from content_items where id = any($1) and status = 'published'`,
      [reusedIds],
    );
    const missingReused = REUSED.filter((r) => !foundReused.rows.some((x) => x.id === r.id));
    if (missingReused.length) {
      die(`REUSED names items not published in THIS database:\n  ${missingReused.map((r) => `${r.id} "${r.fr}"`).join('\n  ')}`);
    }
    const drifted = REUSED
      .map((r) => ({ r, row: foundReused.rows.find((x) => x.id === r.id)! }))
      .filter(({ r, row }) => row.fr !== r.fr)
      .map(({ r, row }) => `${r.id}: this lesson says "${r.fr}", the database says "${row.fr}"`);
    if (drifted.length) die(`REUSED has drifted from the database:\n  ${drifted.join('\n  ')}`);

    const importedIds = IMPORTS.map((i) => i.id);
    const foundImports = await client.query<{
      id: string; kind: string; theme: string; fr: string; en: string; drills: string[]; status: string;
      card_type: string | null; respell: string | null;
    }>(
      `select id, kind, theme, fr, en, drills, status, card_type, respell from content_items where id = any($1)`,
      [importedIds],
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
      const repairing = RESPELL_REPAIRS.some((r) => r.id === it.id);
      if (!repairing && (row.respell ?? undefined) !== (it.respell ?? undefined)) {
        importDrift.push(`${it.id}: respell differs ("${String(it.respell)}" vs "${String(row.respell)}")`);
      }
    }
    if (importDrift.length) {
      die(
        `the IMPORTED manifest has drifted from the database:\n  ${importDrift.join('\n  ')}\n`
        + `  Re-run scripts/_questions_manifest.ts > scripts/data/questions-imported.ts.`,
      );
    }

    /* ── THE RESPELLING REPAIR, AND THE ONE THE BRIEF ASKS ABOUT ─────────── */

    const repairIds = RESPELL_REPAIRS.map((r) => r.id);
    const repairRows = await client.query<{ id: string; fr: string; respell: string | null }>(
      `select id, fr, respell from content_items where id = any($1)`,
      [repairIds],
    );
    const repairDrift: string[] = [];
    for (const r of RESPELL_REPAIRS) {
      const row = repairRows.rows.find((x) => x.id === r.id);
      if (!row) { repairDrift.push(`${r.id} is not in this database`); continue; }
      if (row.fr !== r.fr) repairDrift.push(`${r.id}: expected "${r.fr}", database says "${row.fr}"`);
      if (row.respell !== r.from && row.respell !== r.to) {
        repairDrift.push(`${r.id}: expected respell "${r.from}", database says "${row.respell}"`);
      }
    }
    if (repairDrift.length) {
      die(`the respelling repairs have drifted:\n  ${repairDrift.join('\n  ')}\n  Somebody has changed these rows. Look before overwriting.`);
    }
    const alreadyRepaired = RESPELL_REPAIRS.filter((r) =>
      repairRows.rows.find((x) => x.id === r.id)?.respell === r.to).length;

    // THE ROW BOTH BRIEFS FLAG, AND NEITHER LESSON NEEDS TO TOUCH.
    // A1-19's brief and a1.18's both say fr.sons.mots-essentiels.043 "non" still
    // reads NOHN and warn against repairing it twice. It was repaired on
    // 2026-07-29, before either brief existed. This asserts that rather than
    // trusting it, because if somebody ever reverts it the report below would
    // otherwise print a comfortable falsehood.
    const nonRow = await client.query<{ respell: string | null; updated_at: Date }>(
      `select respell, updated_at from content_items where id = 'fr.sons.mots-essentiels.043'`,
    );
    const nonRespell = nonRow.rows[0]?.respell ?? '(absent)';
    if (nonRespell !== 'NOHⁿ') {
      die(
        `fr.sons.mots-essentiels.043 "non" reads "${nonRespell}", expected "NOHⁿ".\n`
        + `  Both this lesson's brief and a1.18's call this an OUTSTANDING repair and warn against doing it twice.\n`
        + `  It was in fact repaired on 2026-07-29, before either brief. If it now reads something else, somebody\n`
        + `  has reverted it and this lesson's report would otherwise claim it was already correct.`,
      );
    }

    /* ── The dictée, through the real dicteeMode ─────────────────────────── */

    const dictRows = await client.query<{ id: string; fr: string; drills: string[] }>(
      `select id, fr, drills from content_items where id = any($1)`,
      [QUESTIONS_DICTATION_IDS],
    );
    const noDictTag: string[] = [];
    const wrongMode: string[] = [];
    const modes: string[] = [];
    for (const id of QUESTIONS_DICTATION_IDS) {
      const it = byId.get(id) ?? dictRows.rows.find((r) => r.id === id);
      if (!it) die(`the dictée names ${id}, which is neither in this batch nor in the database`);
      const mode = dicteeMode(it.fr);
      const decoys = mode === 'words' ? wordDecoys(it.fr) : [];
      modes.push(`${mode === 'words' ? 'WORDS' : 'letters'} "${it.fr}" (${it.fr.replace(/[^a-zA-Zà-ÿ]/g, '').length} letters)${decoys.length ? ` decoys=${decoys.join('/')}` : ''}`);
      // MEASURED, not assumed. Word mode hands the learner each whole word as a
      // pre-spelled tile, so it cannot test a choice about word ORDER, which is
      // two thirds of this lesson.
      if (mode !== 'letters') wrongMode.push(`${id} "${it.fr}" is ${mode} mode`);
      const d = byId.has(id) ? (byId.get(id) as Item).drills : drillsOf((it as { drills: unknown }).drills);
      if (!d.includes('dictation')) noDictTag.push(`${id} "${it.fr}"`);
    }
    if (noDictTag.length) die(`dictation item(s) with no "dictation" drill:\n  ${noDictTag.join('\n  ')}`);
    if (wrongMode.length) {
      die(
        `dictée target(s) that land in WORD mode:\n  ${wrongMode.join('\n  ')}\n`
        + `  Word mode offers each whole word as a tile, so the learner taps \`es-tu\` rather than writing it, and\n`
        + `  a lesson about word order cannot test anything that way. « Est-ce que vous êtes prêts ? » is 21\n`
        + `  letters and cannot be a target; the tu version at 16 is the one used.`,
      );
    }

    /* ── The speak mission ───────────────────────────────────────────────── */

    const speakSection = LESSON.sections.find((s) => (s as { id?: string }).id === 's22-speak');
    const speakIds = (speakSection as { itemIds?: string[] } | undefined)?.itemIds ?? [];
    if (!speakIds.length) die('the speak mission names no items');
    // THE BARE BLOCK IS NEVER SPOKEN. The audio brief says never to record
    // est-ce que in isolation: it is an unstressed block that only exists in
    // front of a sentence, and a lone clip invites the learner to stress it. A
    // speak card on it would do exactly that with a microphone listening.
    const bareBlock = speakIds.filter((id) => {
      const row = byId.get(id);
      return row && ['est-ce que', "est-ce qu'", 'oui', 'non', 'si', 'peut-être'].includes(row.fr.trim().toLowerCase());
    });
    if (bareBlock.length) {
      die(
        `the speak mission names a bare block or bare answer: ${bareBlock.join(', ')}\n`
        + `  est-ce que only exists in front of a sentence and a lone clip invites the learner to stress it. Every\n`
        + `  spoken line here is a whole question or a whole answer.`,
      );
    }
    // READ THE DRILLS FROM THE RIGHT PLACE. `byId` mixes NEW_ITEMS (which carry
    // `drills`) with REUSED (which is {id, fr, en, why} and carries none), so an
    // earlier version of this check read `undefined` for every reused row and
    // reported five false failures alongside three real ones. Anything this
    // batch does not author is asked of the database instead.
    const inBatch = new Map(NEW_ITEMS.map((i) => [i.id, i] as const));
    const toCheck = speakIds.filter((id) => !inBatch.has(id));
    const speakRows = toCheck.length
      ? (await client.query<{ id: string; drills: string[] }>(
        `select id, drills from content_items where id = any($1)`, [toCheck],
      )).rows
      : [];
    const badSpeak = [
      ...speakIds.filter((id) => inBatch.has(id) && !inBatch.get(id)!.drills.includes('voiceflash')),
      ...toCheck.filter((id) => !drillsOf(speakRows.find((r) => r.id === id)?.drills).includes('voiceflash')),
    ];
    if (badSpeak.length) {
      die(
        `items named by the speak mission carry no "voiceflash" drill:\n  ${badSpeak.join('\n  ')}\n`
        + `  The mic-scored deck runs `+ "`voiceflash`" + `, so an item without it draws a card the learner cannot be\n`
        + `  scored on, which reads as a broken mission rather than a missing tag. Five published rows this lesson\n`
        + `  displays are in that state and are deliberately excluded from the speak mission rather than having the\n`
        + `  drill added to them: they belong to three other lessons. See the note on SPEAK_IDS.`,
      );
    }

    /* ── The unit, which this lesson BINDS ───────────────────────────────── */

    const unitRow = await client.query<{ body: Unit }>(
      `select body from content_units where kind = 'curriculum_unit' and body->>'id' = $1`,
      [UNIT_ID],
    );
    if (unitRow.rowCount !== 1) die(`unit "${UNIT_ID}" not found in content_units, cannot attach its lesson`);
    const unitBody = unitRow.rows[0].body;

    if (unitBody.title !== UNIT_TITLE) die(`unit ${UNIT_ID} title has changed: "${unitBody.title}"`);
    if (unitBody.sub !== UNIT_SUB) {
      die(
        `unit ${UNIT_ID} sub is "${unitBody.sub}", expected "${UNIT_SUB}".\n`
        + `  Copied byte for byte from the probe's unit dump. Note the spaces around the slash: a1.09's curly\n`
        + `  apostrophe once tripped a batch guard for exactly this kind of difference.`,
      );
    }
    if (unitBody.canDo !== UNIT_CANDO) die(`unit ${UNIT_ID} canDo has changed: "${unitBody.canDo}"`);

    const expectedTag = `A1 · LEÇON ${String(unitBody.seq).padStart(2, '0')}`;
    if (LESSON.tag !== expectedTag) {
      die(`the lesson tag is "${LESSON.tag}" and the unit sits at seq ${unitBody.seq}, so the header will draw "${expectedTag}"`);
    }

    // THE THEME BINDING. a1.19 declares `themes: null` and this batch sets it.
    const themesNow = (unitBody as Unit & { themes?: string[] }).themes;
    if (themesNow != null && themesNow.join() !== UNIT_THEMES.join()) {
      die(
        `unit ${UNIT_ID} is already bound to ${JSON.stringify(themesNow)} and this batch would set ${JSON.stringify(UNIT_THEMES)}.\n`
        + `  Somebody has bound it since this lesson was written. Look before overwriting.`,
      );
    }
    const boundCount = await client.query<{ n: string }>(
      `select count(*)::text n from content_items where theme = $1 and status = 'published'`,
      [UNIT_THEMES[0]],
    );
    const nBound = Number(boundCount.rows[0]?.n ?? 0);
    if (nBound < 100) {
      die(`theme "${UNIT_THEMES[0]}" holds only ${nBound} published items, which is not the theme this batch measured.`);
    }

    /* ── THE ID COLLISION CHECK, AND WHY IT IS NOT A NEXT-FREE CHECK ──────
     *
     * a1.15 landed at 23:36 UTC on 2026-08-06, between a1.17's pre-flight probe
     * and its first dry run, and took exactly the range that lesson had authored
     * into. A HIGHEST-ID CHECK PASSED IT CLEANLY, because a1.15's top id sat
     * BELOW a1.17's top id, so "is anything above mine" answered no while
     * eighteen rows were about to be overwritten.
     *
     * a1.18 AND a1.22 BOTH LANDED DURING THIS BUILD. Neither touched
     * fr.a1.questions, which was verified this way rather than assumed. */
    const inRange = await client.query<{ id: string; fr: string; updated_at: Date }>(
      `select id, fr, updated_at from content_items
        where id >= $1 and id <= $2 and id like 'fr.a1.questions.%'`,
      [OWNED_ID_RANGE.from, OWNED_ID_RANGE.to],
    );
    const foreign = inRange.rows.filter((r) => !ids.includes(r.id));
    if (foreign.length) {
      die(
        `${foreign.length} row(s) inside this batch's own id range were authored by somebody else:\n  `
        + foreign.map((r) => `${r.id} "${r.fr}" (updated ${r.updated_at.toISOString()})`).join('\n  ') + `\n`
        + `  Writing this batch would OVERWRITE them. Renumber this lesson rather than forcing it: shift every id\n`
        + `  in questions-corpus.ts and questions-lesson.ts, and move OWNED_ID_RANGE.`,
      );
    }
    const maxQ = await client.query<{ max: string | null }>(
      `select max(id) as max from content_items where id like 'fr.a1.questions.%'`,
    );
    const highest = maxQ.rows[0]?.max ?? '';
    if (highest > OWNED_ID_RANGE.to) {
      console.warn(
        `\n⚠  fr.a1.questions now runs to ${highest}, above this batch's ${OWNED_ID_RANGE.to}.`
        + `\n   Somebody else has authored above this range. This batch is idempotent by id and writes only its`
        + `\n   own 22 rows, so it is safe, but the handover's NEXT FREE (${HANDOVER_NEXT_FREE_ID}) is now stale.\n`,
      );
    }
    // AND NOTHING WAS TAKEN IN THE SEQUENCE THIS LESSON PROMISED a1.20.
    const sonsMax = await client.query<{ max: string | null; n: string }>(
      `select max(id) as max, count(*)::text as n from content_items where id like 'fr.sons.questions.%'`,
    );
    if ((sonsMax.rows[0]?.max ?? '') >= HANDOVER_SONS_NEXT_FREE_ID) {
      console.warn(
        `\n⚠  fr.sons.questions now runs to ${sonsMax.rows[0]?.max}, at or above ${HANDOVER_SONS_NEXT_FREE_ID}.`
        + `\n   This lesson authors NO headwords and promised that sequence to a1.20. Somebody has started.\n`,
      );
    }

    const nextUnit: Unit = {
      ...unitBody,
      themes: UNIT_THEMES,
      lessonIds: [...new Set([...(unitBody.lessonIds ?? []), LESSON.id])],
    } as Unit;
    if (nextUnit.title !== unitBody.title || nextUnit.sub !== unitBody.sub || nextUnit.canDo !== unitBody.canDo) {
      die('this batch would change the unit title, sub or canDo. All three are correct and the Den advertises them.');
    }
    const unitIssues = validateUnit(nextUnit, nextUnit.id);
    if (unitIssues.length) die(`post-state fails validateUnit:\n${formatIssues(unitIssues)}`);

    const existingLesson = await client.query<{ version: number }>(
      `select (body->>'version')::int as version from content_units where kind = 'lesson' and slug = $1`,
      [LESSON.id],
    );
    const prior = existingLesson.rows[0]?.version;
    guardLessonVersion({
      lessonId: LESSON.id, prior, authored: LESSON.version,
      sourceFile: 'questions-lesson.ts', dryRun: DRY_RUN, die,
    });

    /* ── Report ──────────────────────────────────────────────────────────── */

    const formats = qs.reduce<Record<string, number>>((a, q) => {
      const f = q.format ?? 'mcq';
      a[f] = (a[f] ?? 0) + 1;
      return a;
    }, {});

    console.log(`\n  authored items: ${AUTHORED.length}, all kind 'sentence', all into fr.a1.questions`);
    console.log(`    .352-.357  the six être inversions        .358-.363  the six avoir inversions`);
    console.log(`    .364-.366  the three elisions             .367       the est-ce que vous cell`);
    console.log(`    .368       the STATEMENT, byte-identical to the question except for the mark`);
    console.log(`    .369-.371  the answers                    .372-.373  the negative question and si`);
    console.log(`  THIS LESSON AUTHORS NO HEADWORDS. fr.sons.questions already held all of them:`);
    console.log(`    .014 est-ce que   .077 n'est-ce pas ?   .169 non ?   and 170 more`);
    console.log(`    The brief said to author from .174. The whole sequence goes to a1.20 instead.`);
    console.log(`  imported items: ${IMPORTS.length} from ${new Set(IMPORTS.map((i) => i.theme)).size} theme(s), verified field by field`);
    console.log(`  reused items: ${REUSED.length}, already in the seed, untouched`);
    console.log(`  withdrawn on purpose: ${WITHDRAWN_IDS.length} (${WITHDRAWN_IDS.join(', ')})`);
    console.log(
      `  lesson: ${LESSON.id} "${LESSON.title}", ${prior !== undefined ? `updating v${prior} → v${LESSON.version}` : 'NEW'}, `
      + `${LESSON.sections.length} sections, ${LESSON.itemIds.length} itemIds`,
    );
    console.log(`  acts: ${LESSON.acts?.length} | drills: ${LESSON.drills?.length} | sheets: ${LESSON.sheets?.length} | triggers: ${LESSON.errorTriggers?.length} | terms: ${Object.keys(LESSON.terms ?? {}).length}`);
    console.log(`\n  THE THREE METHODS, each named AND carrying a register label:`);
    for (const m of METHODS) {
      console.log(`    ${m.name.padEnd(22)} "${m.when}"`);
      console.log(`      measured share of a1 yes/no questions: ${m.a1Share}%   formal ${m.formalShare}%   casual ${m.casualShare}%`);
    }
    console.log(`  all three forms of one question on ONE screen: ${heroSections.join(', ')}`);
    console.log(`  the twelve inversion forms, each named on a screen: ${THE_TWELVE.join(', ')}`);
    console.log(`  a-t-il shown against est-il in: ${tContrast.map((s) => (s as { id?: string }).id).join(', ')}`);
    console.log(`  the elision shown for all three: ${elisionShown.join(', ')}`);
    console.log(`  si TAUGHT, beside a negative question, in: ${siSections.join(', ')}`);
    console.log(`    (a1.18 landed during this build, which resolves the brief's option 3 to teach it)`);
    console.log(`  ai-je and suis-je: named ${aiJeNamed ? 'and rejected' : 'NOWHERE'}, never produced`);
    console.log(`  no question word on any production surface: confirmed over ${productionSurfaces.length} strings`);
    console.log(`  qu'est-ce que appears nowhere at all: confirmed`);
    console.log(`  no verb but être or avoir asked for as output: confirmed over ${produced.length} strings`);
    console.log(`  imageRefs authored: ${imageRefs.length} (nothing validates imageRef, and no component draws a contour)`);
    console.log(`\n  quiz: ${qs.length} questions in ${rounds.length} rounds`);
    console.log(`  quiz formats: ${Object.entries(formats).map(([k, v]) => `${k} ${v}`).join(', ')}`);
    console.log(`  mcq share: ${Math.round((formats.mcq ?? 0) / qs.length * 100)}% (ceiling 50)`);
    console.log(`  every question has a why: ${qs.every((q) => q.why) ? 'yes' : 'NO'} and a ref: ${qs.every((q) => q.ref) ? 'yes' : 'NO'}`);
    console.log(`  no option refers to a position, none duplicated within a question: confirmed`);
    console.log(`  authored answer spread: ${Object.entries(slots).map(([k, n]) => `slot ${k} ${Math.round(n / closed.length * 100)}%`).join(', ')} (cap 40)`);
    console.log(`  the register round has ${rrClosed.length} closed questions and NONE answers est-ce que`);
    console.log(`  a full listenChoose round: ${earRound.id}, ${earRound.questions?.length} questions`);
    console.log(`  SRS tranches: ${LESSON.deckTranche?.map((t) => t.length).join(' + ')} = ${LESSON.deckTranche?.flat().length} cards across ${LESSON.acts?.length} acts`);
    console.log(`  drills fired by a round: ${fired.size}/${teaching.length}, each the FIRST resolving target of exactly one round`);
    console.log(`  round leads: ${leads.join(', ')}`);
    console.log(`  dictation: ${QUESTIONS_DICTATION_IDS.length} lines, ALL in letters mode`);
    for (const m of modes) console.log(`    ${m}`);
    console.log(`  speak: ${speakIds.length} lines, all carrying voiceflash, NOT ONE a bare block or bare answer`);
    console.log(`  recordings requested: ${LESSON.audio?.recorded?.length} (all fall back to TTS until delivered)`);
    console.log(`  respellings authored: ${Object.keys(RESPELL).length}, all passing the nasal convention`);
    console.log(`  Tu es prêt. and Tu es prêt ? carry identical ipa AND respell: ${st.respell}`);
    console.log(`  reframe: "${REFRAME}" x${hits}`);
    console.log(`  validators: schema ✓  density ✓  house style ✓  no grammar jargon ✓  no neighbour's content ✓`);

    console.log(`\n  RESPELLING REPAIR (not silent), display-only:`);
    for (const r of RESPELL_REPAIRS) {
      const now = repairRows.rows.find((x) => x.id === r.id)?.respell;
      console.log(`    ${r.id}  ${r.fr}: "${now}" → "${r.to}"   ${r.caughtByChecker ? '(checker catches it)' : '(INVISIBLE to the shared checker)'}`);
      console.log(`      ${r.why.split('\n')[0]}`);
    }
    console.log(`    Repairs the shared checker cannot see: ${REPAIRS_INVISIBLE_TO_CHECKER.length ? REPAIRS_INVISIBLE_TO_CHECKER.join(', ') : 'none.'}`);
    if (alreadyRepaired) console.log(`    (${alreadyRepaired} of ${RESPELL_REPAIRS.length} already carry the corrected value; re-upserting is a no-op)`);

    console.log(`\n  THE REPAIR BOTH BRIEFS ASK FOR, AND NEITHER LESSON NEEDED:`);
    console.log(`    fr.sons.mots-essentiels.043 "non" reads ${nonRespell}, updated ${nonRow.rows[0]?.updated_at.toISOString()}`);
    console.log(`    Both this brief and a1.18's call it outstanding and warn against repairing it twice.`);
    console.log(`    It was repaired on 2026-07-29, before either brief was written. NEITHER got there second.`);
    console.log(`\n  NOT REPAIRED, and reported rather than done:`);
    for (const n of NOT_REPAIRED) console.log(`    ${n.id}  "${n.fr}" ${n.respell}\n      ${n.why}`);

    console.log(`\n  UNIT EDIT (not silent):`);
    console.log(`    ${UNIT_ID} themes:    ${JSON.stringify(themesNow ?? null)} → ${JSON.stringify(UNIT_THEMES)}   <- THIS LESSON BINDS IT`);
    console.log(`      questions holds ${nBound} published rows`);
    console.log(`    ${UNIT_ID} lessonIds: ${JSON.stringify(unitBody.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);
    console.log(`    ${UNIT_ID} prereqUnitIds: ${JSON.stringify(unitBody.prereqUnitIds ?? [])} (UNCHANGED, and note it names a1.06 only)`);
    console.log(`\n  HANDOVER: NEXT FREE is ${HANDOVER_NEXT_FREE_ID}. fr.sons.questions is UNTOUCHED from`);
    console.log(`    ${HANDOVER_SONS_NEXT_FREE_ID} and its first 173 rows already hold every question word a1.20 needs.`);
    console.log(`    See the foot of questions-lesson.ts.`);

    if (DRY_RUN) {
      console.log('\n✓ dry run, all valid, nothing written.\n');
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
        ],
      );
    }

    for (const r of RESPELL_REPAIRS) {
      const res = await client.query(
        `update content_items set respell = $1 where id = $2 and fr = $3`,
        [r.to, r.id, r.fr],
      );
      if (res.rowCount !== 1) {
        await client.query('rollback');
        die(`respelling repair for ${r.id} touched ${res.rowCount} rows, rolled back, nothing changed`);
      }
    }

    await client.query(
      `insert into content_units (slug, title, kind, level, locale, status, body, version, generated_by)
       values ($1,$2,'lesson',$3,'fr','published',$4::jsonb,1,'human')
       on conflict (slug) do update set
         title=excluded.title, level=excluded.level, body=excluded.body, status='published', updated_at=now()`,
      [LESSON.id, LESSON.title, LESSON.level, JSON.stringify(LESSON)],
    );

    const res = await client.query(
      `update content_units set body = $1::jsonb, updated_at = now()
        where kind = 'curriculum_unit' and body->>'id' = $2`,
      [JSON.stringify(nextUnit), UNIT_ID],
    );
    if (res.rowCount !== 1) {
      await client.query('rollback');
      die(`unit update touched ${res.rowCount} rows, rolled back, nothing changed`);
    }

    await client.query('commit');
    console.log(
      `\n✓ questions batch applied: ${NEW_ITEMS.length} items (${AUTHORED.length} authored, ${IMPORTS.length} imported)`
      + ` + ${RESPELL_REPAIRS.length} respelling repair + lesson ${LESSON.id} published,`
      + `\n  unit ${UNIT_ID} linked AND bound to theme "${UNIT_THEMES[0]}".`
      + `\n  Next: pnpm tsx scripts/merge-questions-into-seed.ts --dry-run`
      + `\n  Do NOT run pnpm content:publish. It regenerates seed.json FROM this database and`
      + `\n  pnpm content:parity exits 1 on pre-existing divergences that are not this lesson's.\n`,
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
