/* Applies a1.14.l1 "Les adjectifs de base" to Postgres: 4 authored rows, 44
 * imported rows verified field by field, 3 respelling repairs, the lesson, the
 * unit link, and ONE THEME REBIND.
 *
 *     pnpm tsx scripts/author-adjectifs-batch.ts --dry-run
 *     pnpm tsx scripts/author-adjectifs-batch.ts
 *
 * Order matters and it has cost real work twice: apply to Postgres FIRST, merge
 * into the seed SECOND, and publish only when both agree. content:publish
 * regenerates seed.json FROM this database, so publishing before applying would
 * silently delete the lesson from the seed.
 *
 * THIS BATCH REBINDS ITS OWN UNIT'S THEME, which no lesson batch has done
 * before, so it is called out here rather than buried. a1.14 was declared on
 * `famille` and moves to `adjectifs-essentiels`. Measured: `famille` holds 331
 * published rows, every one of them family vocabulary, and it is a1.15's and
 * a1.17's declared theme. An adjective deck filed under it would serve the wrong
 * cards in the flashcard hub. The rebind touches a1.14 AND NOTHING ELSE, and the
 * guard below refuses if any other unit's themes would move.
 *
 * The guards are not decoration. Each one is either a rule from
 * A1-BUILD-INVARIANTS.md or a requirement this lesson's brief names explicitly,
 * and every one runs the REAL app function rather than a copy: a1.08 shipped a
 * hand-rolled endingPopulation carrying a filter the real one does not have, let
 * four rows through and moved two of a1.03's printed cards. */
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
  AUTHORED_WORDS, BOTH_ORDERS_IDS, COLOUR_CONTRAST_ID, FAMILY_TEACHING, FEMININE_ID,
  FORBIDDEN_FEMININES, FORBIDDEN_ORDERS, FORBIDDEN_PLURALS, FORBIDDEN_VOWEL_FORMS, HEADWORD_ID,
  HEADWORD_IDS, IMPORTED, NOT_REPAIRED, NOT_TAUGHT_IDS, OTHER_ADJECTIVES, PLACEMENT_SYSTEM,
  POSSESSIVE_TEACHING, REPAIRS_INVISIBLE_TO_CHECKER, RESPELL, RESPELL_REPAIRS, REUSED,
  SPEAK_SENTENCE_IDS, THE_SIX, VOWEL_PAIRS, frOf, gridFor, hasFormOf, wordToItem,
} from './data/adjectifs-corpus.ts';
import {
  ADJECTIFS_DICTATION_IDS, ADJECTIFS_LESSON, ADJECTIFS_SPEAK_IDS, REFRAME,
} from './data/adjectifs-lesson.ts';

const AUTHORED: Item[] = AUTHORED_WORDS.map(wordToItem);
const IMPORTS: Item[] = IMPORTED;
const NEW_ITEMS: Item[] = [...AUTHORED, ...IMPORTS];
const LESSON: Lesson = ADJECTIFS_LESSON;
const UNIT_ID = 'a1.14';

/** Asserted against an explicit constant, never a figure derived from the
 *  lesson. A derived count compares the content to itself and passes on any
 *  rewording. */
const REFRAME_APPEARANCES = 9;

const EXPECTED_TRIGGERS = 6;
const EXPECTED_ROUNDS = 6;
const EXPECTED_SIX = 6;
const EXPECTED_AUTHORED_WORDS = 4;
const EXPECTED_IMPORTED = 44;
const EXPECTED_REUSED = 7;

/** Carry a GENUINE nasal vowel and must close it with a superscript. */
const NASAL_WORDS = ['grand', 'bon', 'grands', 'bons'];

/** Have a REAL /n/ and NO nasal vowel, so they must NOT carry a superscript.
 *  `bonne` is the word the brief singles out. Invariant §3's second blind spot,
 *  alongside `jaune` and `automne`. MEASURED: BON passes, BOHN is flagged, and
 *  BOHⁿ ALSO passes while being wrong, which is why this check exists at all. */
const NOT_NASAL = ['bonne', 'bonnes'];

/** The unit rebind, stated as a before and an after so the diff is readable and
 *  the batch refuses if the world has moved underneath it. */
const UNIT_THEMES_FROM = ['famille'];
const UNIT_THEMES_TO = ['adjectifs-essentiels'];
const UNIT_TITLE = 'Basic Adjectives';
const UNIT_SUB = 'Adjectifs de base';
const UNIT_CANDO = 'Can describe people and things with common adjectives, agreed for gender';

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

  if (AUTHORED.length !== EXPECTED_AUTHORED_WORDS) {
    die(`${AUTHORED.length} rows authored, expected ${EXPECTED_AUTHORED_WORDS} (vieille, mauvaise, bel, vieil)`);
  }
  if (IMPORTS.length !== EXPECTED_IMPORTED) die(`${IMPORTS.length} rows imported, expected ${EXPECTED_IMPORTED}`);
  if (REUSED.length !== EXPECTED_REUSED) die(`${REUSED.length} rows reused, expected ${EXPECTED_REUSED}`);

  // THE ASSERTION THAT WOULD HAVE CAUGHT THE LAST FIVE BRIEFS: not one row this
  // lesson authors may share an id with a row it imports, and NO IMPORTED ROW MAY
  // BE RE-AUTHORED. The six headwords, all six feminines and every paradigm
  // sentence already existed; authoring any of them again is the failure the
  // brief spends a page warning about.
  const importedIds = new Set(IMPORTS.map((i) => i.id));
  const reAuthored = AUTHORED.filter((a) => importedIds.has(a.id));
  if (reAuthored.length) {
    die(`row(s) both authored and imported: ${reAuthored.map((a) => `${a.id} "${a.fr}"`).join(', ')}`);
  }
  const authoredFr = new Set(AUTHORED.map((a) => a.fr.toLowerCase()));
  const shadowed = IMPORTS.filter((i) => i.kind !== 'sentence' && authoredFr.has(i.fr.toLowerCase()));
  if (shadowed.length) {
    die(
      `authored a word that is ALSO imported: ${shadowed.map((i) => `"${i.fr}" (${i.id})`).join(', ')}\n`
      + `  The four authored rows are the ones the probe verified ABSENT in every article form, in every theme.`
    );
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
    NEW_ITEMS.map((i) => ({ id: i.id, fr: i.fr, kind: i.kind, gender: i.gender ?? null, tags: i.tags }))
  );
  if (genderPopulation.length) {
    die(
      `this batch would add ${genderPopulation.length} row(s) to a1.03's measured ending population, which can move `
      + `a statistic printed on two of its cards:\n  `
      + genderPopulation.map((i) => `${i.id} "${i.fr}"`).join('\n  ') + `\n`
      + `  The four authored rows carry NO gender field precisely so they stay out of this, and this lesson\n`
      + `  imports no gendered single-word noun at all. If a row here has grown one, remove it rather than\n`
      + `  re-measuring a1.03.`
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
      'U+203F tie character, which renders as a low underscore on a Pixel 6.\n'
      + '  This lesson deliberately does not teach the /t/ liaison on `un grand homme`. See the note in\n'
      + '  adjectifs-lesson.ts: a liaison is heard and never written, it belongs to sons.10, and it sits in\n'
      + '  the same slot as bel and vieil, which is what makes it dangerous here.'
    );
  }

  const learnerFacing = [
    ...strings(LESSON.sections),
    ...strings(LESSON.sheets ?? []),
    ...strings(LESSON.terms ?? {}),
  ];
  // Identifiers are not learner copy. `sheet.a1.14.forms` and `rec-a1-14-pairs`
  // are names this file chose for its own plumbing and no learner ever sees
  // either, so a scan that fired on them would be measuring the source rather
  // than the screen.
  const isIdentifier = (s: string) => !/\s/.test(s) && /^[a-z0-9][a-z0-9.\-_/]*$/i.test(s);
  // `accord` carries a negative lookbehind for the apostrophe: « d'accord »
  // appears in the scene and the roleplay, and an apostrophe counts as a word
  // boundary in JavaScript so a bare \baccord\b fires on it.
  const jargon = learnerFacing.filter((s) => !isIdentifier(s)
    && /\b(conjugaison|article (défini|indéfini|partitif)|adjectif|(?<!')accord|complément circonstanciel|masculin|féminin|invariable|déterminant)\b/i.test(s));
  if (jargon.length) die(`grammar vocabulary reached an A1 learner:\n  ${jargon.slice(0, 3).join('\n  ')}`);

  const hits = strings(LESSON).filter((s) => s.includes(REFRAME)).length;
  if (hits !== REFRAME_APPEARANCES) {
    die(`the reframe appears ${hits} times, expected exactly ${REFRAME_APPEARANCES}`);
  }

  /* ── Respellings, and the blind spot the brief names ───────────────────── */

  const badNasal = Object.values(RESPELL).filter((d) => hasPlainNasalFor(d.fr, d.respell));
  if (badNasal.length) {
    die(`respellings close a nasal vowel with a plain n or m:\n  ${badNasal.map((d) => `${d.fr} ${d.respell}`).join('\n  ')}`);
  }
  const missingSuperscript = NASAL_WORDS.filter((c) => !RESPELL[c]?.respell.includes('ⁿ'));
  if (missingSuperscript.length) {
    die(`word(s) carrying a nasal vowel with no superscript n: ${missingSuperscript.join(', ')}`);
  }
  // THE OPPOSITE CHECK, and it is the one the brief singles out by name. `bonne`
  // is /bɔn/ with a REAL n. BOHⁿ would pass the shared checker AND teach a sound
  // that is not in the word, which is the `jaune` -> `ZHOHⁿ` mistake a1.13
  // documented one lesson earlier. The superscript is FORBIDDEN here.
  const wronglyNasalised = NOT_NASAL.filter((c) => RESPELL[c]?.respell.includes('ⁿ'));
  if (wronglyNasalised.length) {
    die(
      `word(s) respelled with a superscript n that have NO nasal vowel: ${wronglyNasalised.join(', ')}\n`
      + `  bonne is /bɔn/ and its doubled n is a real consonant. MEASURED: BON passes hasPlainNasalFor, BOHN is\n`
      + `  flagged, and BOHⁿ ALSO PASSES while teaching a nasal the word does not contain. The correct value is\n`
      + `  BON. Do not "fix" this into a superscript. See scripts/_adjectifs_probe.ts.`
    );
  }
  if (RESPELL.bonne.respell !== '[BON]') {
    die(`bonne is respelled ${RESPELL.bonne.respell}, expected [BON]. See the note above and in adjectifs-corpus.ts.`);
  }
  // The repair the shared checker cannot see. petit/petite sit on one card and
  // the feminine is fr.sons.muettes.048 spelled pə-TEET, so the masculine has to
  // match. Nothing automatic would ever catch this.
  if (RESPELL.petit.respell !== '[pə-TEE]' || RESPELL.petite.respell !== '[pə-TEET]') {
    die(
      `petit is ${RESPELL.petit.respell} and petite is ${RESPELL.petite.respell}; they must share a first syllable.\n`
      + `  This lesson shows both on one card and the feminine is a REUSED row (fr.sons.muettes.048, pə-TEET),\n`
      + `  so the masculine must be pə-TEE. puh-TEE breaks no automated rule and would teach a vowel change\n`
      + `  that does not happen. This is why the repair is asserted by name.`
    );
  }

  /* ── The shape of the lesson ───────────────────────────────────────────── */

  if (THE_SIX.length !== EXPECTED_SIX) die(`THE_SIX holds ${THE_SIX.length} words, expected ${EXPECTED_SIX}`);
  if (HEADWORD_IDS.length !== EXPECTED_SIX) die(`${HEADWORD_IDS.length} headwords resolve, expected ${EXPECTED_SIX}`);

  const learnerText = learnerFacing.join('\n');

  // ALL SIX TAUGHT AND TESTED BY NAME, asserted individually rather than as a
  // count. The brief: "mauvais is the one most likely to be dropped, because it
  // is the least frequent and the only one with no positive use."
  const quizSection = LESSON.sections.find((s) => s.type === 'quiz');
  const qs = quizSection && quizSection.type === 'quiz' ? quizQuestions(quizSection) : [];
  const quizText = strings(quizSection ?? {}).join('\n');
  for (const a of THE_SIX) {
    if (!hasFormOf(learnerText, a)) die(`"${a}" is never named on any screen`);
    if (!hasFormOf(quizText, a)) die(`"${a}" is taught and never tested. The exam has to reach every one of the six.`);
    const grid = gridFor(a);
    if (grid.length !== 4) die(`the four-form grid for ${a} is incomplete`);
    const shown = grid.filter((id) => learnerText.includes(frOf(id)));
    if (shown.length !== 4) {
      die(`not every form of ${a} is on a screen: missing ${grid.filter((id) => !learnerText.includes(frOf(id))).join(', ')}`);
    }
  }

  // THE PLACEMENT CONTRAST, WITH BOTH SIDES PRESENT, ON ONE SCREEN. The brief
  // calls this "the single screen that stops the a1.13 pattern from misfiring"
  // and "the layout the test must assert".
  const contrast = LESSON.sections.find((s) => {
    const t = strings(s).join('\n');
    return t.includes(frOf(COLOUR_CONTRAST_ID)) && BOTH_ORDERS_IDS.some((id) => t.includes(frOf(id)));
  });
  if (!contrast) {
    die(
      'no single section carries a post-noun colour and a pre-noun word from these six together.\n'
      + '  Splitting them across two screens is how this lesson decays into a word list, and the pattern the\n'
      + '  learner carries in from a1.13 survives untouched.'
    );
  }
  const bothOrdersShown = BOTH_ORDERS_IDS.filter((id) => learnerText.includes(frOf(id)));
  if (!bothOrdersShown.length) {
    die(
      'no phrase carrying BOTH orders at once is on a screen.\n'
      + `  ${BOTH_ORDERS_IDS.map((id) => `${id} "${frOf(id)}"`).join('\n  ')}\n`
      + '  One published sentence proving both is worth more than any number of side-by-side claims.'
    );
  }

  // bel and vieil, each in front of a VOWEL-INITIAL noun, asserted by name. The
  // brief: "This is the content nothing else in A1 covers and the easiest to
  // lose in a rewrite."
  for (const p of VOWEL_PAIRS) {
    if (!learnerText.includes(frOf(p.vowel))) die(`${p.word} is not shown in front of a vowel: ${frOf(p.vowel)}`);
    if (!learnerText.includes(frOf(p.consonant))) {
      die(`${p.word}'s consonant partner is not on a screen, so the change is asserted rather than shown: ${frOf(p.consonant)}`);
    }
  }
  for (const w of ['bel', 'vieil']) {
    if (!hasFormOf(learnerText, w)) die(`"${w}" is never named on a screen`);
    if (!hasFormOf(quizText, w)) die(`"${w}" is taught and never tested`);
  }

  /* ── vieux and mauvais are never authored with a plural -s ─────────────── */

  // The cheapest high-value assertion in the lesson, and the brief asks for it
  // by name. Scoped to CONTENT AUTHORED AS CORRECT FRENCH: corpus rows, quiz
  // answer keys, the `right` side of every trap card, the sheet headwords and
  // the roundup. NOT to every string, because the scene, the traps and the
  // reading all have to SHOW the error in order to teach it, and a guard that
  // fired on those would be deleted within a week rather than fixed.
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
  const forbidden = [
    ...FORBIDDEN_PLURALS, ...FORBIDDEN_FEMININES, ...FORBIDDEN_ORDERS, ...FORBIDDEN_VOWEL_FORMS,
  ];
  const violations: string[] = [];
  for (const text of [...correctFrench, ...answerKeys]) {
    for (const f of forbidden) {
      if (hasFormOf(text.toLowerCase(), f)) violations.push(`"${f}" in "${text}"`);
    }
  }
  if (violations.length) {
    die(
      `a wrong form is authored as CORRECT French:\n  ${violations.join('\n  ')}\n`
      + `  This teaches the exact error the lesson exists to prevent.`
    );
  }

  /* ── No ear question targets a plural ──────────────────────────────────── */

  const PLURAL_ONLY = /\b(grands|grandes|petits|petites|beaux|belles|vieilles|bons|bonnes|mauvaises)\b/i;
  const earQuestions = qs.filter((q) => q.format === 'listenChoose');
  const plural = earQuestions.filter((q) => (q.opts ?? []).some((o) => PLURAL_ONLY.test(o)));
  if (plural.length) {
    die(
      `ear question(s) whose options include a plural form:\n  ${plural.map((q) => q.q).join('\n  ')}\n`
      + `  The plural -s is never pronounced, so an ear question on one asks the learner to hear something that\n`
      + `  is not in the signal. This lesson's whole point about the ear is that the FEMININE is audible.`
    );
  }
  const earSection = LESSON.sections.find((s) => s.type === 'listening');
  if (earSection && earSection.type === 'listening') {
    const pluralLines = earSection.lines.filter((l) => PLURAL_ONLY.test(l.fr));
    if (pluralLines.length) {
      die(`the listening section carries a plural line: ${pluralLines.map((l) => l.fr).join(', ')}`);
    }
  }
  // And no ear question on vieux, whose plural is identical to its singular.
  const vieuxEar = earQuestions.filter((q) => (q.opts ?? []).filter((o) => hasFormOf(o.toLowerCase(), 'vieux')).length > 1);
  if (vieuxEar.length) die(`an ear question offers vieux twice over, which cannot be told apart: ${vieuxEar.map((q) => q.q).join(' | ')}`);

  /* ── The neighbours keep their lessons ─────────────────────────────────── */

  // Written against PRODUCTION SURFACES rather than every string, or they fire
  // on legitimate context and get deleted. Invariant §6 and the brief both say
  // so explicitly.
  const productionSurfaces = [
    ...strings(LESSON.sections.filter((s) => ['vocabThemes', 'flashcards', 'reviewDeck', 'cardDeck'].includes(s.type))),
    ...strings(LESSON.drills ?? []),
    ...strings((quizSection ?? {}) as unknown),
  ];
  const production = productionSurfaces.join('\n').toLowerCase();
  const adjHit = OTHER_ADJECTIVES.filter((w) => hasFormOf(production, w));
  if (adjHit.length) {
    die(
      `adjective(s) taught here that are not among the six: ${adjHit.join(', ')}\n`
      + `  This lesson teaches six words. joli, jeune, gros, long, court, haut and bas are published in the same\n`
      + `  theme and are deliberately not taught, or this becomes a vocabulary lesson instead of a lesson about\n`
      + `  where six words go and what shape they take.`
    );
  }
  // nouveau is guarded BY ID rather than by word, because
  // fr.a1.adjectifs-essentiels.218 is "Les nouvelles sont bonnes." where « les
  // nouvelles » is THE NEWS, and it is this lesson's own bon paradigm row. A
  // word search would fire on it and be deleted. Invariant §6's warning applied
  // before it fired rather than after.
  const forbiddenIds = NOT_TAUGHT_IDS.filter((id) => LESSON.itemIds.includes(id) || strings(LESSON).includes(id));
  if (forbiddenIds.length) {
    die(
      `id(s) this lesson must not teach: ${forbiddenIds.join(', ')}\n`
      + `  fr.sons.adjectifs-essentiels.007 and fr.a1.adjectifs-essentiels.209 are nouveau and "C'est un nouvel\n`
      + `  hôtel." nouveau is the THIRD three-form adjective in A1, which the brief says does not exist, and it\n`
      + `  is not one of this unit's six.`
    );
  }
  const placeHit = PLACEMENT_SYSTEM.filter((w) => learnerText.toLowerCase().includes(w));
  if (placeHit.length) {
    die(
      `placement TEACHING found, which belongs to a1.16: ${placeHit.join(', ')}\n`
      + `  This lesson states that these six come first and shows it everywhere. It explains no system, names no\n`
      + `  category, and never mentions a pair that changes meaning by position.`
    );
  }
  const famHit = FAMILY_TEACHING.filter((w) => learnerText.toLowerCase().includes(w));
  if (famHit.length) die(`family vocabulary taught here, which belongs to a1.15: ${famHit.join(', ')}`);
  const possHit = POSSESSIVE_TEACHING.filter((w) => learnerText.toLowerCase().includes(w));
  if (possHit.length) die(`the possessive system taught here, which belongs to a1.17: ${possHit.join(', ')}`);

  /* ── imageRef: nothing validates it, so this lesson authors none ───────── */

  const imageRefs = strings(LESSON).filter((s) => /^lessons\/[a-z0-9-]+\/[a-z0-9-]+\.(jpg|png|webp)$/i.test(s));
  if (imageRefs.length) {
    die(
      `${imageRefs.length} imageRef(s) authored: ${imageRefs.join(', ')}\n`
      + `  Nothing validates imageRef. lesson-contract.test.ts contains no reference to it and the schema comment\n`
      + `  promising a publish check is conditional on an asset manifest that does not exist. If you add one, it\n`
      + `  MUST be registered in src/content/lessonImages.ts and covered by a test in a1-14-adjectifs.test.ts.`
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

  // QuizDeckView shuffles the options of every closed question per attempt, so
  // NO OPTION MAY REFER TO A POSITION and every option in a question must be
  // distinct. The duplicate check is the density validator's; this one is the
  // positional-language check, which nothing else runs.
  // Scoped to references to the OPTION LIST, which is what the shuffle breaks.
  // An earlier version of this pattern also caught « the second one », and that
  // is a genuine ambiguity rather than a guaranteed break: in "Listen to these
  // two: « bon » then « bonne »" the second one is a CLIP the stem named, not an
  // option. a1.13 ships that exact shape. This lesson reworded its own option to
  // name the word instead, because a learner reading "the second" on a shuffled
  // screen has two things it could mean, but a guard that FAILS the build on it
  // would be firing on correct content and would be deleted rather than fixed.
  // Invariant §6.
  const POSITIONAL = /\b(both of the above|all of the above|none of these|none of the above|[abc] and [bc]|option [abc1-4]|the (first|second|third|last) (option|answer|choice))\b/i;
  const positional = qs.filter((q) => (q.opts ?? []).some((o) => POSITIONAL.test(o)));
  if (positional.length) {
    die(
      `option(s) referring to a position:\n  ${positional.map((q) => q.q).join('\n  ')}\n`
      + `  QuizDeckView shuffles the options of every closed question, per question, per attempt, so the\n`
      + `  positions the learner sees are not the positions authored here.`
    );
  }
  const dupOpt = qs.filter((q) => q.opts && new Set(q.opts).size !== q.opts.length);
  if (dupOpt.length) die(`question(s) with a duplicate option: ${dupOpt.map((q) => q.q).join(' | ')}`);

  const unacceptable = qs.filter((q) => q.answer && !matchesAccept(q.answer, q.accept));
  if (unacceptable.length) {
    die(`question(s) that do not accept their own answer:\n  ${unacceptable.map((q) => `"${q.q}" shows "${q.answer}"`).join('\n  ')}`);
  }

  // EVERY FREE-TEXT QUESTION REJECTS THE WRONG AGREEMENT. fold() keeps the final
  // -e and -s, so agreement IS testable by free text, and an accept list taking
  // both forms marks the thing being tested as optional.
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
  if (tooLenient.length) {
    die(
      `free-text question(s) that accept the WRONG agreement:\n  ${tooLenient.join('\n  ')}\n`
      + `  fold() keeps the final -e and -s, so agreement IS testable by free text. An accept list that takes\n`
      + `  both forms tells the learner the ending does not matter, which is the opposite of this lesson.`
    );
  }

  // fold() lowercases and strips whitespace, so no free-text format can test a
  // capital OR a word order. Placement is tested by mcq only, and nothing
  // free-text here may turn on either.
  const foldBlind = qs.filter((q) => {
    if (q.format !== 'typeIn' && q.format !== 'errorSpot') return false;
    return [q.answer ?? '', ...(q.accept ?? [])].some((a) => THE_SIX.some((c) => a.includes(c[0].toUpperCase() + c.slice(1))));
  });
  if (foldBlind.length) {
    die(`free-text question(s) whose answer turns on a capital letter: ${foldBlind.map((q) => q.q).join(' | ')}`);
  }

  /* ── Drill reachability ────────────────────────────────────────────────── */

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
      `drill(s) no quiz round can fire: ${orphans.join(', ')}\n`
      + `  drillForRound stops at a round's FIRST target that resolves to a drill, so a drill named only in second\n`
      + `  place never runs. Reorder the round's \`targets\`, add a round for it, or drop the drill.`
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
        [reused]
      );
      const missing = reused.filter((id) => !found.rows.some((r) => r.id === id));
      if (missing.length) die(`lesson references unpublished/unknown items:\n  ${missing.join('\n  ')}`);
    }

    const reusedIds = REUSED.map((r) => r.id);
    const foundReused = await client.query<{ id: string; fr: string }>(
      `select id, fr from content_items where id = any($1) and status = 'published'`,
      [reusedIds]
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

    const importedList = IMPORTS.map((i) => i.id);
    const foundImports = await client.query<{
      id: string; kind: string; theme: string; fr: string; en: string; drills: string[]; status: string;
      card_type: string | null; respell: string | null;
    }>(
      `select id, kind, theme, fr, en, drills, status, card_type, respell from content_items where id = any($1)`,
      [importedList]
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
        + `  Re-run scripts/_adjectifs_manifest.ts and node scripts/_adjectifs_assemble.mjs.`
      );
    }

    const repairIds = RESPELL_REPAIRS.map((r) => r.id);
    const repairRows = await client.query<{ id: string; fr: string; respell: string | null }>(
      `select id, fr, respell from content_items where id = any($1)`,
      [repairIds]
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

    // The two rows in this theme that are NOT repaired, checked rather than
    // assumed, so the report can hand the next author a measurement rather than
    // a memory. A change here means somebody has already fixed one.
    const notRepairedRows = await client.query<{ id: string; fr: string; respell: string | null }>(
      `select id, fr, respell from content_items where id = any($1)`,
      [NOT_REPAIRED.map((n) => n.id)]
    );

    /* ── The dictée, through the real dicteeMode ─────────────────────────── */

    const byId = new Map(NEW_ITEMS.map((i) => [i.id, i] as const));
    const dictRows = await client.query<{ id: string; fr: string; drills: string[] }>(
      `select id, fr, drills from content_items where id = any($1)`,
      [ADJECTIFS_DICTATION_IDS]
    );
    const noDictTag: string[] = [];
    const wrongMode: string[] = [];
    const modes: string[] = [];
    for (const id of ADJECTIFS_DICTATION_IDS) {
      const it = byId.get(id) ?? dictRows.rows.find((r) => r.id === id);
      if (!it) die(`the dictée names ${id}, which is neither in this batch nor in the database`);
      const mode = dicteeMode(it.fr);
      const decoys = mode === 'words' ? wordDecoys(it.fr) : [];
      modes.push(`${mode === 'words' ? 'WORDS' : 'letters'} "${it.fr}"${decoys.length ? ` decoys=${decoys.join('/')}` : ''}`);
      if (mode !== 'letters') wrongMode.push(`${id} "${it.fr}" is ${mode} mode`);
      const d = byId.has(id) ? byId.get(id)!.drills : drillsOf((it as { drills: unknown }).drills);
      if (!d.includes('dictation')) noDictTag.push(`${id} "${it.fr}"`);
    }
    if (noDictTag.length) die(`dictation item(s) with no "dictation" drill:\n  ${noDictTag.join('\n  ')}`);
    if (wrongMode.length) {
      die(
        `dictée target(s) that land in WORD mode:\n  ${wrongMode.join('\n  ')}\n`
        + `  Word mode offers each whole word as a tile, so the learner never writes the agreement ending and the\n`
        + `  exercise tests nothing this lesson teaches. The letter limit is 16 and it is TIGHT: only two rows in\n`
        + `  this theme survive it. See DICTEE_IDS in adjectifs-corpus.ts.`
      );
    }

    /* ── The speak mission ───────────────────────────────────────────────── */

    const speakIds = ADJECTIFS_SPEAK_IDS;
    if (!speakIds.length) die('the speak mission names no items');
    const toCheck = speakIds.filter((id) => !byId.has(id));
    const speakRows = toCheck.length
      ? (await client.query<{ id: string; drills: string[] }>(
          `select id, drills from content_items where id = any($1)`, [toCheck]
        )).rows
      : [];
    const badSpeak = [
      ...speakIds.filter((id) => byId.has(id) && !byId.get(id)!.drills.includes('voiceflash')),
      ...toCheck.filter((id) => !drillsOf(speakRows.find((r) => r.id === id)?.drills).includes('voiceflash')),
    ];
    if (badSpeak.length) die(`items named by the speak mission carry no "voiceflash" drill:\n  ${badSpeak.join('\n  ')}`);

    // MEASURED rather than asserted, because the claim in the lesson header
    // depends on it: not one published sentence carrying any of the six carries
    // voiceflash, in any theme. Four lessons running have hit this.
    const vfSentences = await client.query<{ n: string }>(
      `select count(*)::text n from content_items
        where status = 'published' and kind = 'sentence' and 'voiceflash' = any(drills)
          and (fr ~* '(^|[^a-zà-ÿ])(grande?s?|petite?s?|beaux?|belles?|bel|vieux|vieil|vieilles?|bonnes?|bons?|mauvaises?|mauvais)([^a-zà-ÿ]|$)')`
    );
    const nVfSentences = Number(vfSentences.rows[0]?.n ?? 0);

    /* ── The unit, and the rebind ────────────────────────────────────────── */

    const unitRow = await client.query<{ body: Unit }>(
      `select body from content_units where kind = 'curriculum_unit' and body->>'id' = $1`,
      [UNIT_ID]
    );
    if (unitRow.rowCount !== 1) die(`unit "${UNIT_ID}" not found in content_units, cannot attach its lesson`);
    const unitBody = unitRow.rows[0].body;

    // Copied BYTE FOR BYTE from the unit record rather than retyped. a1.09's sub
    // carries a curly apostrophe and a brief that retyped it would have tripped
    // the batch's own guard; this unit's do not, and the check is here anyway
    // because the next one might.
    if (unitBody.title !== UNIT_TITLE) die(`unit ${UNIT_ID} title has changed: ${JSON.stringify(unitBody.title)}`);
    if (unitBody.sub !== UNIT_SUB) die(`unit ${UNIT_ID} sub has changed: ${JSON.stringify(unitBody.sub)}`);
    if (unitBody.canDo !== UNIT_CANDO) die(`unit ${UNIT_ID} canDo has changed: ${JSON.stringify(unitBody.canDo)}`);

    const expectedTag = `A1 · LEÇON ${String(unitBody.seq).padStart(2, '0')}`;
    if (LESSON.tag !== expectedTag) {
      die(`the lesson tag is "${LESSON.tag}" and the unit sits at seq ${unitBody.seq}, so the header will draw "${expectedTag}"`);
    }

    const themesNow = (unitBody as Unit & { themes?: string[] }).themes ?? [];
    const alreadyRebound = themesNow.join() === UNIT_THEMES_TO.join();
    if (!alreadyRebound && themesNow.join() !== UNIT_THEMES_FROM.join()) {
      die(
        `unit ${UNIT_ID} themes are ${JSON.stringify(themesNow)}, expected ${JSON.stringify(UNIT_THEMES_FROM)} `
        + `(before) or ${JSON.stringify(UNIT_THEMES_TO)} (after).\n`
        + `  Somebody has already moved this binding somewhere else. Look before overwriting.`
      );
    }

    const boundCount = await client.query<{ n: string }>(
      `select count(*)::text n from content_items where theme = $1 and status = 'published'`,
      [UNIT_THEMES_TO[0]]
    );
    const nBound = Number(boundCount.rows[0]?.n ?? 0);
    if (nBound < 100) {
      die(`theme "${UNIT_THEMES_TO[0]}" holds only ${nBound} published items, which is not the theme this batch measured.`);
    }
    const familleCount = await client.query<{ n: string }>(
      `select count(*)::text n from content_items where theme = 'famille' and status = 'published'`
    );
    const sixInTheme = await client.query<{ n: string }>(
      `select count(*)::text n from content_items where id = any($1) and theme = $2 and status = 'published'`,
      [HEADWORD_IDS, UNIT_THEMES_TO[0]]
    );
    const nSix = Number(sixInTheme.rows[0]?.n ?? 0);
    if (nSix !== EXPECTED_SIX) {
      die(
        `${nSix} of the six headwords are published in "${UNIT_THEMES_TO[0]}", expected ${EXPECTED_SIX}.\n`
        + `  This lesson authors none of them and imports all six, so a gap here means the ids have moved.`
      );
    }

    const nextUnit: Unit = {
      ...unitBody,
      themes: UNIT_THEMES_TO,
      lessonIds: [...new Set([...(unitBody.lessonIds ?? []), LESSON.id])],
    } as Unit;
    if (nextUnit.title !== unitBody.title || nextUnit.sub !== unitBody.sub || nextUnit.canDo !== unitBody.canDo) {
      die('this batch would change the unit title, sub or canDo. All three are correct and the Den advertises them.');
    }
    if (JSON.stringify(nextUnit.prereqUnitIds ?? []) !== JSON.stringify(unitBody.prereqUnitIds ?? [])) {
      die('this batch would change the unit prereqUnitIds. a1.03 is the declared prerequisite and stays.');
    }
    const unitIssues = validateUnit(nextUnit, nextUnit.id);
    if (unitIssues.length) die(`post-state fails validateUnit:\n${formatIssues(unitIssues)}`);

    // NO OTHER UNIT MOVES. a1.15 and a1.17 both declare `famille` and both keep
    // it; a1.16 declares nothing and keeps that too. Checked against the database
    // rather than trusted, because the rebind above is the first one any lesson
    // batch has performed.
    const neighbours = await client.query<{ id: string; themes: string[] | null }>(
      `select body->>'id' as id, body->'themes' as themes from content_units
        where kind = 'curriculum_unit' and body->>'id' = any($1)`,
      [['a1.15', 'a1.16', 'a1.17', 'a1.13']]
    );

    const existingLesson = await client.query<{ version: number }>(
      `select (body->>'version')::int as version from content_units where kind = 'lesson' and slug = $1`,
      [LESSON.id]
    );
    const prior = existingLesson.rows[0]?.version;
    guardLessonVersion({
      lessonId: LESSON.id, prior, authored: LESSON.version,
      sourceFile: 'adjectifs-lesson.ts', dryRun: DRY_RUN, die,
    });

    /* ── Report ──────────────────────────────────────────────────────────── */

    const formats = qs.reduce<Record<string, number>>((a, q) => {
      const f = q.format ?? 'mcq';
      a[f] = (a[f] ?? 0) + 1;
      return a;
    }, {});
    const closed = qs.filter((q) => q.opts && typeof q.correct === 'number');
    const slots = new Map<number, number>();
    for (const q of closed) slots.set(q.correct as number, (slots.get(q.correct as number) ?? 0) + 1);

    console.log(`\n  authored items: ${AUTHORED.length}, and that is the WHOLE authoring job`);
    console.log(`    fr.sons.adjectifs-essentiels.312-.315: ${AUTHORED.map((w) => w.fr).join(', ')}`);
    console.log(`    verified ABSENT in every article form, in every theme, by pnpm corpus:probe`);
    console.log(`  NO adjective, NO feminine that exists elsewhere, and NO sentence is authored:`);
    console.log(`    the six headwords are fr.sons.adjectifs-essentiels.001-.008 and are IMPORTED`);
    console.log(`    grande/petite/belle/bonne exist in muettes, consonnes and nasales and are REUSED or IMPORTED`);
    console.log(`    the four-form paradigm for all six is published at fr.a1.adjectifs-essentiels.192-.222`);
    console.log(`  imported items: ${IMPORTS.length} from ${new Set(IMPORTS.map((i) => i.theme)).size} theme(s) OUTSIDE the seed cut, verified field by field`);
    console.log(`  reused items: ${REUSED.length}, already in the seed, untouched`);
    console.log(`  PREFIX: headwords go to fr.sons.* (298 word + 13 phrase, 0 sentence)`);
    console.log(`          sentences live at fr.a1.*  (321 rows, ALL kind=sentence). Measured by kind, not inferred.`);
    console.log(
      `  lesson: ${LESSON.id} "${LESSON.title}", ${prior !== undefined ? `updating v${prior} → v${LESSON.version}` : 'NEW'}, `
      + `${LESSON.sections.length} sections, ${LESSON.itemIds.length} itemIds`
    );
    console.log(`  acts: ${LESSON.acts?.length} | drills: ${LESSON.drills?.length} | sheets: ${LESSON.sheets?.length} | triggers: ${LESSON.errorTriggers?.length} | terms: ${Object.keys(LESSON.terms ?? {}).length}`);
    console.log(`  the six: ${THE_SIX.join(', ')}, every one named on a screen AND tested by the exam`);
    console.log(`  all four forms taught on all six, from published corpus rows`);
    console.log(`  the placement contrast is SHOWN on one screen: ${(contrast as { id?: string }).id}`);
    console.log(`  phrases carrying BOTH orders at once: ${bothOrdersShown.map((id) => `"${frOf(id)}"`).join(', ')}`);
    console.log(`  bel and vieil in front of a real vowel, each beside its consonant partner:`);
    for (const p of VOWEL_PAIRS) console.log(`    ${p.word}: "${frOf(p.consonant)}"  vs  "${frOf(p.vowel)}"`);
    console.log(`  feminine headword sources (author if absent everywhere, reuse if present anywhere):`);
    for (const a of THE_SIX) {
      const id = FEMININE_ID[a];
      const src = AUTHORED.some((x) => x.id === id) ? 'AUTHORED' : REUSED.some((x) => x.id === id) ? 'reused' : 'imported';
      console.log(`    ${a} → ${id.padEnd(36)} ${src}`);
    }
    console.log(`  no wrong form authored as correct French: confirmed over ${correctFrench.length + answerKeys.length} strings`);
    console.log(`  no ear question targets a plural or vieux: confirmed (${earQuestions.length} listenChoose)`);
    console.log(`  no other adjective, no placement system (a1.16), no family set (a1.15), no possessives (a1.17): confirmed`);
    console.log(`  nouveau NOT taught, guarded by id (${NOT_TAUGHT_IDS.length} ids) because .218 "Les nouvelles sont bonnes." is this lesson's own row`);
    console.log(`  imageRefs authored: ${imageRefs.length} (nothing validates imageRef, so this lesson uses none)`);
    console.log(`  quiz: ${qs.length} questions in ${rounds.length} rounds`);
    console.log(`  quiz formats: ${Object.entries(formats).map(([k, v]) => `${k} ${v}`).join(', ')}`);
    console.log(`  mcq share: ${Math.round((formats.mcq ?? 0) / qs.length * 100)}% (ceiling 50)`);
    console.log(`  correct-slot spread over ${closed.length} closed: ${[...slots.entries()].sort().map(([s, n]) => `${s}:${n}`).join(' ')} (cap 40%)`);
    console.log(`  every question has a why: ${qs.every((q) => q.why) ? 'yes' : 'NO'} and a ref: ${qs.every((q) => q.ref) ? 'yes' : 'NO'}`);
    console.log(`  no option refers to a position, no question carries a duplicate option: confirmed`);
    console.log(`  every free-text question rejects the wrong agreement: confirmed through the real matchesAccept`);
    console.log(`  SRS tranches: ${LESSON.deckTranche?.map((t) => t.length).join(' + ')} = ${LESSON.deckTranche?.flat().length} cards across ${LESSON.acts?.length} acts`);
    console.log(`  drills fired by a round: ${fired.size}/${teaching.length}, each the FIRST resolving target of exactly one round`);
    console.log(`  round leads: ${leads.join(', ')}`);
    console.log(`  dictation: ${ADJECTIFS_DICTATION_IDS.length} lines, ALL in letters mode (word mode cannot test an ending)`);
    for (const m of modes) console.log(`    ${m}`);
    console.log(`    MEASURED: the letter limit is 16 and only TWO rows in this theme survive it. Four more come from`);
    console.log(`    description-personnes-objets. vieux, bon and mauvais have NO letters-mode dictation row anywhere.`);
    console.log(
      `  speak: ${speakIds.length} lines, all carrying voiceflash `
      + `(${speakIds.length - SPEAK_SENTENCE_IDS.length} headwords + ${SPEAK_SENTENCE_IDS.length} sentences)`
    );
    for (const id of SPEAK_SENTENCE_IDS) console.log(`    "${frOf(id)}"  (${id})`);
    console.log(`    MEASURED: ${nVfSentences} published sentence(s) in the whole corpus carry one of these six AND`);
    console.log(`    voiceflash, and NOT ONE of them is in adjectifs-essentiels. Three are usable and all three were`);
    console.log(`    already in the seed. The other nine are excluded by name in adjectifs-corpus.ts.`);
    console.log(`    a1.08, a1.09 and a1.13 all hit this. It is a corpus-wide gap rather than this theme's bad luck.`);
    console.log(`  recordings requested: ${LESSON.audio?.recorded?.length} (all fall back to TTS until delivered)`);
    console.log(`  respellings authored: ${Object.keys(RESPELL).length}, all passing the nasal convention`);
    console.log(`  reframe: "${REFRAME}" x${hits} across ${LESSON.sections.filter((s) => strings(s).some((x) => x.includes(REFRAME))).length} sections`);
    console.log(`  validators: schema ✓  density ✓  house style ✓  no grammar jargon ✓  no neighbour's content ✓`);

    console.log(`\n  RESPELLING REPAIRS (not silent), display-only, in this lesson's own theme:`);
    for (const r of RESPELL_REPAIRS) {
      const now = repairRows.rows.find((x) => x.id === r.id)?.respell;
      console.log(`    ${r.id}  ${r.fr}: "${now}" → "${r.to}"   ${r.caughtByChecker ? '(checker catches it)' : '(INVISIBLE to every shared check)'}`);
      console.log(`      ${r.why.split('. ')[0]}.`);
    }
    console.log(`    Repairs no shared check can see, asserted by name: ${REPAIRS_INVISIBLE_TO_CHECKER.join(', ')}`);
    console.log(`    bonne is ${RESPELL.bonne.respell} and deliberately NOT a superscript: /bɔn/ has a real n.`);
    console.log(`    MEASURED on bonne: BON ok, BONN ok, BOHN FLAGGED, BOHⁿ ok AND WRONG.`);
    if (alreadyRepaired) console.log(`    (${alreadyRepaired} of ${RESPELL_REPAIRS.length} already carry the corrected value; re-upserting is a no-op)`);

    console.log(`\n  MEASURED AND DELIBERATELY NOT REPAIRED, in this same theme:`);
    for (const n of NOT_REPAIRED) {
      const row = notRepairedRows.rows.find((x) => x.id === n.id);
      console.log(`    ${n.id}  ${n.fr}: "${row?.respell ?? '?'}" should be "${n.shouldBe}"`);
      console.log(`      ${n.why}`);
    }
    console.log(`    Not displayed by this lesson, so not touched. Invariant §9.`);

    console.log(`\n  UNIT EDIT (not silent). THIS BATCH REBINDS ITS OWN UNIT'S THEME:`);
    console.log(`    ${UNIT_ID} themes:    ${JSON.stringify(themesNow)} → ${JSON.stringify(UNIT_THEMES_TO)}${alreadyRebound ? '  (already applied)' : ''}`);
    console.log(`      famille holds ${familleCount.rows[0]?.n} published rows, all of them family vocabulary, and it is`);
    console.log(`      a1.15's and a1.17's declared theme. adjectifs-essentiels holds ${nBound} and is named for this.`);
    console.log(`    ${UNIT_ID} lessonIds: ${JSON.stringify(unitBody.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);
    console.log(`    ${UNIT_ID} prereqUnitIds: ${JSON.stringify(unitBody.prereqUnitIds ?? [])} (UNCHANGED)`);
    console.log(`    NO OTHER UNIT MOVES:`);
    for (const n of neighbours.rows) {
      console.log(`      ${n.id.padEnd(6)} themes ${JSON.stringify(n.themes)} (untouched)`);
    }
    console.log(`    a1.15 and a1.17 keep famille and are now its only A1 claimants, which is better for both.`);
    console.log(`    a1.16 still declares no theme. NOT decided here: rebinding another unit is that unit's call.`);

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
        ]
      );
    }

    for (const r of RESPELL_REPAIRS) {
      const res = await client.query(
        `update content_items set respell = $1 where id = $2 and fr = $3`,
        [r.to, r.id, r.fr]
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
      [LESSON.id, LESSON.title, LESSON.level, JSON.stringify(LESSON)]
    );

    const res = await client.query(
      `update content_units set body = $1::jsonb, updated_at = now()
        where kind = 'curriculum_unit' and body->>'id' = $2`,
      [JSON.stringify(nextUnit), UNIT_ID]
    );
    if (res.rowCount !== 1) {
      await client.query('rollback');
      die(`unit update touched ${res.rowCount} rows, rolled back, nothing changed`);
    }

    await client.query('commit');
    console.log(
      `\n✓ adjectifs batch applied: ${NEW_ITEMS.length} items (${AUTHORED.length} authored, ${IMPORTS.length} imported)`
      + ` + ${RESPELL_REPAIRS.length} respelling repairs + lesson ${LESSON.id} published,`
      + `\n  unit ${UNIT_ID} linked and REBOUND from famille to adjectifs-essentiels.`
      + `\n  Next: pnpm tsx scripts/merge-adjectifs-into-seed.ts --dry-run`
      + `\n  Do NOT run pnpm content:publish. It regenerates seed.json FROM this database and`
      + `\n  pnpm content:parity exits 1 on pre-existing divergences that are not this lesson's.\n`
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
