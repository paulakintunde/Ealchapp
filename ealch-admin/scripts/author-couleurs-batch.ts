/* Applies a1.13.l1 "Les couleurs" to Postgres: 17 authored rows, 30 imported
 * rows verified field by field, 4 respelling repairs, the lesson, and the unit
 * link. Validates EVERYTHING before it opens a transaction.
 *
 *     pnpm tsx scripts/author-couleurs-batch.ts --dry-run
 *     pnpm tsx scripts/author-couleurs-batch.ts
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
  AUTHORED_WORDS, CHESTNUT_ROW, COLOUR_IDS, COULEURS, FORBIDDEN_COMPOUNDS, FORBIDDEN_FORMS,
  IMPORTED, INVARIABLE, MARRON_INVARIABLE_IDS, ORANGE_COLOUR_IDS, ORANGE_NOUN_IDS,
  REPAIRS_INVISIBLE_TO_CHECKER, RESPELL, RESPELL_REPAIRS, REUSED, THE_TWELVE, WITHDRAWN_IDS,
  frOf, gridFor, toItem, wordToItem,
} from './data/couleurs-corpus.ts';
import {
  COULEURS_DICTATION_IDS, COULEURS_LESSON, OTHER_ADJECTIVES, PLACEMENT_WORDS, REFRAME,
} from './data/couleurs-lesson.ts';

const AUTHORED: Item[] = [...AUTHORED_WORDS.map(wordToItem), ...COULEURS.map(toItem)];
const IMPORTS: Item[] = IMPORTED;
const NEW_ITEMS: Item[] = [...AUTHORED, ...IMPORTS];
const LESSON: Lesson = COULEURS_LESSON;
const UNIT_ID = 'a1.13';

/** Asserted against an explicit constant, never a figure derived from the
 *  lesson. A derived count compares the content to itself and passes on any
 *  rewording. */
const REFRAME_APPEARANCES = 12;

const EXPECTED_TRIGGERS = 6;
const EXPECTED_ROUNDS = 6;
const EXPECTED_COLOURS = 12;
const EXPECTED_AUTHORED_WORDS = 4;

/** Carry a GENUINE nasal vowel and must close it with a superscript. `orange` is
 *  in this list specifically because hasPlainNasalFor CANNOT SEE IT: the nasal
 *  is word-internal (ZH follows it), so the broken oh-RAHNZH passes every shared
 *  check. Invariant §3's first blind spot. */
const NASAL_COLOURS = ['blanc', 'marron', 'orange', 'brun'];

/** Has a REAL /n/ and NO nasal vowel, so it must NOT carry a superscript.
 *  hasPlainNasalFor false-positives on ZHOHN and would be silenced by ZHOHⁿ,
 *  which teaches a sound that is not in the word. Invariant §3's second blind
 *  spot, alongside `automne`. */
const NOT_NASAL = ['jaune'];

const UNIT_THEMES = ['couleurs'];
const UNIT_TITLE = 'Colors';
const UNIT_SUB = 'Les couleurs';
const UNIT_CANDO = 'Can name the colours, agree them with the noun, and leave marron and orange alone';

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

/** Walks the string, checking neighbours against an accent-aware class. NEVER
 *  builds a regex out of the search term: `\b` is ASCII-only in JavaScript, so
 *  /\bvert\b/ fails on every accented neighbour and a regex that returns zero
 *  looks exactly like an absence. Invariant §0. */
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

  // flashhub-coverage.test.ts keys decks on `fr` per theme with the article
  // stripped, so two rows sharing an fr in one theme are one card served twice.
  // This is the check that would have failed if the brief's first draft had been
  // followed and the fourteen existing colour headwords re-authored.
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
      + `  The four authored feminines carry NO gender field precisely so they stay out of this. If a row here has\n`
      + `  grown one, remove it rather than re-measuring a1.03.`
    );
  }
  const smuggled = NEW_ITEMS.filter((i) => WITHDRAWN_IDS.includes(i.id));
  if (smuggled.length) {
    die(
      `withdrawn row(s) are back in the batch: ${smuggled.map((i) => `${i.id} "${i.fr}"`).join(', ')}\n`
      + `  une orange, la rose and le bleu are gendered single-word nouns and importing them moves a1.03's figures.`
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
  if (authoredJson.includes('‿')) die('U+203F tie character, which renders as an underscore on a device');

  const learnerFacing = [
    ...strings(LESSON.sections),
    ...strings(LESSON.sheets ?? []),
    ...strings(LESSON.terms ?? {}),
  ];
  // Identifiers are not learner copy. `sheet.a1.13.invariable` and
  // `rec-a1-13-invariable` are names this file chose for its own plumbing and
  // no learner ever sees either, so a scan that fired on them would be
  // measuring the source rather than the screen.
  const isIdentifier = (s: string) => !/\s/.test(s) && /^[a-z0-9][a-z0-9.\-_/]*$/i.test(s);
  // `accord` carries a negative lookbehind for the apostrophe: « d'accord » is
  // ordinary conversational French and appears in the roleplay, and an
  // apostrophe counts as a word boundary in JavaScript so a bare \baccord\b
  // fires on it. This is the same class of trap as invariant §0's \b warning.
  const jargon = learnerFacing.filter((s) => !isIdentifier(s)
    && /\b(conjugaison|article (défini|indéfini|partitif)|adjectif|(?<!')accord|complément circonstanciel|masculin|féminin|invariable|déterminant)\b/i.test(s));
  if (jargon.length) die(`grammar vocabulary reached an A1 learner:\n  ${jargon.slice(0, 3).join('\n  ')}`);

  const hits = strings(LESSON).filter((s) => s.includes(REFRAME)).length;
  if (hits !== REFRAME_APPEARANCES) {
    die(`the reframe appears ${hits} times, expected exactly ${REFRAME_APPEARANCES}`);
  }

  /* ── Respellings, and the two blind spots ──────────────────────────────── */

  const badNasal = Object.values(RESPELL).filter((d) => hasPlainNasalFor(d.fr, d.respell));
  if (badNasal.length) {
    die(`respellings close a nasal vowel with a plain n or m:\n  ${badNasal.map((d) => `${d.fr} ${d.respell}`).join('\n  ')}`);
  }
  // BY NAME, because the shared checker cannot see a word-internal nasal and
  // `orange` is exactly that case: oh-RAHNZH passes hasPlainNasalFor cleanly.
  const missingSuperscript = NASAL_COLOURS.filter((c) => !RESPELL[c]?.respell.includes('ⁿ'));
  if (missingSuperscript.length) {
    die(
      `colour(s) carrying a nasal vowel with no superscript n: ${missingSuperscript.join(', ')}\n`
      + `  hasPlainNasalFor does not catch a word-internal nasal (orange is one), so this is checked by name.`
    );
  }
  // THE OPPOSITE CHECK, and it is the one the brief singles out. jaune is /ʒon/
  // with a real n. ZHOHⁿ would silence the checker and teach a sound that is not
  // in the word, so the superscript is FORBIDDEN here rather than required.
  const wronglyNasalised = NOT_NASAL.filter((c) => RESPELL[c]?.respell.includes('ⁿ'));
  if (wronglyNasalised.length) {
    die(
      `colour(s) respelled with a superscript n that have NO nasal vowel: ${wronglyNasalised.join(', ')}\n`
      + `  jaune is /ʒon/ and its n is a real consonant. hasPlainNasalFor false-positives on ZHOHN, and "fixing"\n`
      + `  it with a superscript silences the checker while teaching a sound the word does not contain.\n`
      + `  The correct value is ZHON. See scripts/_couleurs_probe.ts.`
    );
  }
  if (RESPELL.jaune.respell !== '[ZHON]') {
    die(`jaune is respelled ${RESPELL.jaune.respell}, expected [ZHON]. See the note above and in couleurs-corpus.ts.`);
  }

  /* ── The shape of the lesson ───────────────────────────────────────────── */

  if (THE_TWELVE.length !== EXPECTED_COLOURS) die(`THE_TWELVE holds ${THE_TWELVE.length} colours, expected ${EXPECTED_COLOURS}`);
  if (COLOUR_IDS.length !== EXPECTED_COLOURS) die(`${COLOUR_IDS.length} colour headwords resolve, expected ${EXPECTED_COLOURS}`);
  if (AUTHORED_WORDS.length !== EXPECTED_AUTHORED_WORDS) {
    die(`${AUTHORED_WORDS.length} feminine headwords authored, expected ${EXPECTED_AUTHORED_WORDS} (bleue, noire, grise, violette)`);
  }

  // Every colour named on a screen, and every one present in a real sentence.
  const learnerText = learnerFacing.join('\n');
  const untaught = THE_TWELVE.filter((c) => !hasWord(learnerText, c));
  if (untaught.length) die(`colour(s) never named on any screen: ${untaught.join(', ')}`);

  // All four agreement forms taught, on the authored paradigm.
  for (const c of ['vert', 'bleu', 'marron'] as const) {
    const grid = gridFor(c);
    if (grid.length !== 4 || grid.some((g) => !g)) die(`the four-form grid for ${c} is incomplete`);
    const shown = grid.every((g) => learnerText.includes(g.fr));
    if (!shown) die(`not every form of ${c} is on a screen: ${grid.map((g) => g.fr).join(' | ')}`);
  }

  // At least one section shows masculine AND feminine of the same colour
  // TOGETHER on one screen. The brief requires this by name.
  const sectionsWithBoth = LESSON.sections.filter((s) => {
    const text = strings(s).join('\n');
    return (text.includes('Mon sac est vert.') && text.includes('Ma veste est verte.'))
      || text.includes(frOf('fr.a1.objets.124'))
      || (hasWord(text, 'vert') && hasWord(text, 'verte'));
  });
  if (!sectionsWithBoth.length) {
    die('no section shows the masculine and the feminine of one colour together on a single screen');
  }

  // THE INVARIABLE RULE IS SHOWN, NOT STATED: one section carries a noun-orange
  // and a colour-orange TOGETHER. The brief calls this the layout the test must
  // assert, and separating the halves is how the rule decays into "memorise
  // these two".
  const orangeSection = LESSON.sections.find((s) => {
    const text = strings(s).join('\n');
    return ORANGE_NOUN_IDS.some((id) => text.includes(frOf(id)))
      && ORANGE_COLOUR_IDS.some((id) => text.includes(frOf(id)));
  });
  if (!orangeSection) {
    die(
      'no single section carries the fruit orange and the colour orange together.\n'
      + '  Splitting them across two screens is how the invariable rule decays back into two exceptions.'
    );
  }

  // A FEMININE OR PLURAL marron example is on a screen. The brief says the
  // corpus holds only masculine singulars and that these must be authored; in
  // fact three exist in Postgres, so they are IMPORTED rather than written, and
  // the authored paradigm adds four more. Either route satisfies this.
  const marronNonMasc = MARRON_INVARIABLE_IDS.filter((id) => learnerText.includes(frOf(id)));
  const authoredMarronNonMasc = COULEURS.filter(
    (w) => w.colour === 'marron' && w.form !== 'm' && learnerText.includes(w.fr));
  if (!marronNonMasc.length && !authoredMarronNonMasc.length) {
    die(
      'no feminine or plural marron example is on any screen.\n'
      + '  A masculine singular marron is identical to a variable colour and demonstrates nothing.'
    );
  }

  /* ── No invariable colour ever authored with an ending ─────────────────── */

  // The cheapest high-value assertion in the lesson. Scoped to CONTENT AUTHORED
  // AS CORRECT FRENCH: corpus rows, quiz answer keys, the `right` side of every
  // trap card, and the sheet headwords. NOT scoped to every string, because
  // s15-marron, s16-traps and the scene all have to SHOW the error in order to
  // teach it, and a guard that fired on those would be deleted within a week.
  const correctFrench: string[] = [
    ...AUTHORED.map((i) => i.fr),
    ...LESSON.sections.flatMap((s) => (s.type === 'commonErrors' ? s.errors.map((e) => e.right) : [])),
    ...(LESSON.sheets ?? []).flatMap((sh) => (sh.sections ?? []).flatMap((sec) =>
      sec.type === 'cheatSheet' ? sec.rows.flatMap((r) => [r.k, r.say ?? '']) : [])),
  ];
  const quizSection = LESSON.sections.find((s) => s.type === 'quiz');
  const qs = quizSection && quizSection.type === 'quiz' ? quizQuestions(quizSection) : [];
  const answerKeys: string[] = [
    ...qs.flatMap((q) => [q.answer ?? '', ...(q.accept ?? [])]),
    ...(LESSON.drills ?? []).flatMap((d) =>
      d.opts && d.correct !== undefined ? [d.opts[d.correct]] : []),
    ...(LESSON.sections.find((s) => s.type === 'roundup') as { points?: string[] } | undefined)?.points ?? [],
  ];
  const forbidden = [...FORBIDDEN_FORMS.filter((f) => f !== 'oranges'), ...FORBIDDEN_COMPOUNDS];
  const violations: string[] = [];
  for (const text of [...correctFrench, ...answerKeys]) {
    for (const f of forbidden) {
      if (hasWord(text.toLowerCase(), f)) violations.push(`"${f}" in "${text}"`);
    }
  }
  // `oranges` is legal for the FRUIT and never for the colour, so it is checked
  // separately and only over rows this lesson AUTHORED. Every corpus row using
  // it is an imported fruit sentence.
  for (const i of AUTHORED) {
    if (hasWord(i.fr.toLowerCase(), 'oranges')) violations.push(`"oranges" in authored row ${i.id} "${i.fr}"`);
  }
  if (violations.length) {
    die(
      `an invariable colour is authored WITH an agreement ending:\n  ${violations.join('\n  ')}\n`
      + `  This teaches the exact error the lesson exists to prevent.`
    );
  }

  /* ── No ear question targets a plural ──────────────────────────────────── */

  const PLURAL_ONLY = /(verts|vertes|bleus|bleues|rouges|noirs|noires|grises|blancs|blanches|violets|violettes|jaunes|roses|beiges)/i;
  const earQuestions = qs.filter((q) => q.format === 'listenChoose');
  const plural = earQuestions.filter((q) => (q.opts ?? []).some((o) => PLURAL_ONLY.test(o)));
  if (plural.length) {
    die(
      `ear question(s) whose options include a plural form:\n  ${plural.map((q) => q.q).join('\n  ')}\n`
      + `  The plural -s is never pronounced, so an ear question on one asks the learner to hear something that\n`
      + `  is not in the signal, and a learner who cannot hear it concludes their listening is at fault.`
    );
  }
  // Also on the listening section itself.
  const earSection = LESSON.sections.find((s) => s.type === 'listening');
  if (earSection && earSection.type === 'listening') {
    const pluralLines = earSection.lines.filter((l) => PLURAL_ONLY.test(l.fr));
    if (pluralLines.length) {
      die(`the listening section carries a plural line: ${pluralLines.map((l) => l.fr).join(', ')}`);
    }
  }

  /* ── The neighbours keep their lessons ─────────────────────────────────── */

  // Written against PRODUCTION SURFACES rather than every string, or they fire
  // on legitimate context and get deleted. The brief says so explicitly.
  const productionSurfaces = [
    ...strings(LESSON.sections.filter((s) => ['vocabThemes', 'flashcards', 'reviewDeck', 'cardDeck'].includes(s.type))),
    ...strings(LESSON.drills ?? []),
    ...strings((LESSON.sections.find((s) => s.type === 'quiz') ?? {}) as unknown),
  ];
  const adjHit = OTHER_ADJECTIVES.filter((w) => productionSurfaces.some((s) => hasWord(s.toLowerCase(), w)));
  if (adjHit.length) {
    die(
      `adjective(s) taught here that belong to a1.14: ${adjHit.join(', ')}\n`
      + `  This lesson may teach colour and nothing else, or a1.14 arrives with its subject already spent.`
    );
  }
  const placeHit = PLACEMENT_WORDS.filter((w) => learnerText.toLowerCase().includes(w));
  if (placeHit.length) {
    die(
      `placement teaching found, which belongs to a1.16: ${placeHit.join(', ')}\n`
      + `  This lesson states ONCE that colours follow the noun and teaches no before/after system.`
    );
  }

  /* ── imageRef: nothing validates it, so this lesson authors none ───────── */

  const imageRefs = strings(LESSON).filter((s) => /^lessons\/[a-z0-9-]+\/[a-z0-9-]+\.(jpg|png|webp)$/i.test(s));
  if (imageRefs.length) {
    die(
      `${imageRefs.length} imageRef(s) authored: ${imageRefs.join(', ')}\n`
      + `  Nothing validates imageRef. lesson-contract.test.ts contains no reference to it and the schema comment\n`
      + `  promising a publish check is conditional on an asset manifest that does not exist. If you add one, it\n`
      + `  MUST be registered in src/content/lessonImages.ts and covered by a test in a1-13-couleurs.test.ts.`
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

  const unacceptable = qs.filter((q) => q.answer && !matchesAccept(q.answer, q.accept));
  if (unacceptable.length) {
    die(`question(s) that do not accept their own answer:\n  ${unacceptable.map((q) => `"${q.q}" shows "${q.answer}"`).join('\n  ')}`);
  }

  // EVERY FREE-TEXT QUESTION REJECTS THE WRONG AGREEMENT. The brief asks for
  // this and it is the assertion that makes typeIn worth using here: a question
  // accepting both `vert` and `verts` marks the thing being tested as optional.
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
    // Only the last word carries the agreement, so vary that.
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
      + `  fold() keeps the final -e and -s, so agreement IS testable by free text. An accept list that takes both\n`
      + `  forms tells the learner the ending does not matter, which is the opposite of this lesson.`
    );
  }

  // fold() lowercases, so no free-text format can test a capital. Nothing here
  // should turn on one.
  const foldBlind = qs.filter((q) => {
    const open = q.format === 'typeIn' || q.format === 'errorSpot';
    if (!open) return false;
    return [q.answer ?? '', ...(q.accept ?? [])].some((a) => THE_TWELVE.some((c) => a.includes(c[0].toUpperCase() + c.slice(1))));
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

    const importedIds = IMPORTS.map((i) => i.id);
    const foundImports = await client.query<{
      id: string; kind: string; theme: string; fr: string; en: string; drills: string[]; status: string;
      card_type: string | null; respell: string | null;
    }>(
      `select id, kind, theme, fr, en, drills, status, card_type, respell from content_items where id = any($1)`,
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
      const repairing = RESPELL_REPAIRS.some((r) => r.id === it.id);
      if (!repairing && (row.respell ?? undefined) !== (it.respell ?? undefined)) {
        importDrift.push(`${it.id}: respell differs ("${String(it.respell)}" vs "${String(row.respell)}")`);
      }
    }
    if (importDrift.length) {
      die(
        `the IMPORTED manifest has drifted from the database:\n  ${importDrift.join('\n  ')}\n`
        + `  Re-run scripts/_couleurs_manifest.ts and paste the result into scripts/data/couleurs-imported.ts.`
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

    /* ── The dictée, through the real dicteeMode ─────────────────────────── */

    const byId = new Map(NEW_ITEMS.map((i) => [i.id, i] as const));
    const dictRows = await client.query<{ id: string; fr: string; drills: string[] }>(
      `select id, fr, drills from content_items where id = any($1)`,
      [COULEURS_DICTATION_IDS]
    );
    const noDictTag: string[] = [];
    const wrongMode: string[] = [];
    const modes: string[] = [];
    for (const id of COULEURS_DICTATION_IDS) {
      const it = byId.get(id) ?? dictRows.rows.find((r) => r.id === id);
      if (!it) die(`the dictée names ${id}, which is neither in this batch nor in the database`);
      const mode = dicteeMode(it.fr);
      const decoys = mode === 'words' ? wordDecoys(it.fr) : [];
      modes.push(`${mode === 'words' ? 'WORDS' : 'letters'} "${it.fr}"${decoys.length ? ` decoys=${decoys.join('/')}` : ''}`);
      // MEASURED, not assumed. Word mode hands the learner each whole word as a
      // pre-spelled tile, so it CANNOT test an agreement ending: the learner
      // taps `vertes` rather than writing it. Only letters mode makes them
      // produce the ending, which is the entire point of a dictée here.
      if (mode !== 'letters') wrongMode.push(`${id} "${it.fr}" is ${mode} mode`);
      const d = byId.has(id) ? byId.get(id)!.drills : drillsOf((it as { drills: unknown }).drills);
      if (!d.includes('dictation')) noDictTag.push(`${id} "${it.fr}"`);
    }
    if (noDictTag.length) die(`dictation item(s) with no "dictation" drill:\n  ${noDictTag.join('\n  ')}`);
    if (wrongMode.length) {
      die(
        `dictée target(s) that land in WORD mode:\n  ${wrongMode.join('\n  ')}\n`
        + `  Word mode offers each whole word as a tile, so the learner never writes the agreement ending and the\n`
        + `  exercise tests nothing this lesson teaches. Choose a shorter target.`
      );
    }

    /* ── The speak mission ───────────────────────────────────────────────── */

    const speakSection = LESSON.sections.find((s) => (s as { id?: string }).id === 's21-speak');
    const speakIds = (speakSection as { itemIds?: string[] } | undefined)?.itemIds ?? [];
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

    /* ── The unit ────────────────────────────────────────────────────────── */

    const unitRow = await client.query<{ body: Unit }>(
      `select body from content_units where kind = 'curriculum_unit' and body->>'id' = $1`,
      [UNIT_ID]
    );
    if (unitRow.rowCount !== 1) die(`unit "${UNIT_ID}" not found in content_units, cannot attach its lesson`);
    const unitBody = unitRow.rows[0].body;

    if (unitBody.title !== UNIT_TITLE) die(`unit ${UNIT_ID} title has changed: "${unitBody.title}"`);
    if (unitBody.sub !== UNIT_SUB) die(`unit ${UNIT_ID} sub has changed: "${unitBody.sub}"`);
    if (unitBody.canDo !== UNIT_CANDO) die(`unit ${UNIT_ID} canDo has changed: "${unitBody.canDo}"`);

    const expectedTag = `A1 · LEÇON ${String(unitBody.seq).padStart(2, '0')}`;
    if (LESSON.tag !== expectedTag) {
      die(`the lesson tag is "${LESSON.tag}" and the unit sits at seq ${unitBody.seq}, so the header will draw "${expectedTag}"`);
    }

    const themesNow = (unitBody as Unit & { themes?: string[] }).themes;
    if (themesNow !== undefined && themesNow.join() !== UNIT_THEMES.join()) {
      die(
        `unit ${UNIT_ID} themes are ${JSON.stringify(themesNow)}, expected ${JSON.stringify(UNIT_THEMES)}.\n`
        + `  This lesson does NOT rebind the unit: couleurs is already correct and already populated.`
      );
    }
    const boundCount = await client.query<{ n: string }>(
      `select count(*)::text n from content_items where theme = $1 and status = 'published'`,
      [UNIT_THEMES[0]]
    );
    const nBound = Number(boundCount.rows[0]?.n ?? 0);
    if (nBound < 100) {
      die(`theme "${UNIT_THEMES[0]}" holds only ${nBound} published items, which is not the theme this batch measured.`);
    }
    const coloursInTheme = await client.query<{ n: string }>(
      `select count(*)::text n from content_items where id = any($1) and theme = $2 and status = 'published'`,
      [COLOUR_IDS, UNIT_THEMES[0]]
    );
    const nColours = Number(coloursInTheme.rows[0]?.n ?? 0);
    if (nColours !== EXPECTED_COLOURS) {
      die(
        `${nColours} of the twelve colour headwords are published in "${UNIT_THEMES[0]}", expected ${EXPECTED_COLOURS}.\n`
        + `  This lesson authors none of them and imports all twelve, so a gap here means the ids have moved.`
      );
    }

    // The chestnut row, checked rather than assumed. The brief asks whether the
    // single `marrons` row is a legitimate noun plural or a shipped agreement
    // error, and the answer decides whether there is anything to report.
    const chestnut = await client.query<{ fr: string; level: string }>(
      `select fr, level from content_items where id = $1`, [CHESTNUT_ROW.id]
    );
    const chestnutRow = chestnut.rows[0];
    if (chestnutRow && chestnutRow.fr !== CHESTNUT_ROW.fr) {
      console.warn(`\n⚠  ${CHESTNUT_ROW.id} has changed since it was checked. Look at it again before trusting the verdict.\n`);
    }

    const nextUnit: Unit = {
      ...unitBody,
      lessonIds: [...new Set([...(unitBody.lessonIds ?? []), LESSON.id])],
    } as Unit;
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
      sourceFile: 'couleurs-lesson.ts', dryRun: DRY_RUN, die,
    });

    /* ── Report ──────────────────────────────────────────────────────────── */

    const formats = qs.reduce<Record<string, number>>((a, q) => {
      const f = q.format ?? 'mcq';
      a[f] = (a[f] ?? 0) + 1;
      return a;
    }, {});

    console.log(`\n  authored items: ${AUTHORED.length} (${AUTHORED_WORDS.length} feminine headwords + ${COULEURS.length} sentences)`);
    console.log(`    fr.sons.couleurs.066-069: ${AUTHORED_WORDS.map((w) => w.fr).join(', ')}  <- the entire headword gap`);
    console.log(`    fr.a1.couleurs.259-271:   the four-form paradigm on one noun pair, three colours`);
    console.log(`  NO colour word is authored: all twelve already exist at fr.sons.couleurs.001-012 and are IMPORTED`);
    console.log(`  imported items: ${IMPORTS.length} from ${new Set(IMPORTS.map((i) => i.theme)).size} theme(s) OUTSIDE the seed cut, verified field by field`);
    console.log(`  reused items: ${REUSED.length}, already in the seed, untouched`);
    console.log(`  withdrawn on purpose: ${WITHDRAWN_IDS.length} gendered single-word nouns kept OUT (une orange, la rose, le bleu)`);
    console.log(
      `  lesson: ${LESSON.id} "${LESSON.title}", ${prior !== undefined ? `updating v${prior} → v${LESSON.version}` : 'NEW'}, `
      + `${LESSON.sections.length} sections, ${LESSON.itemIds.length} itemIds`
    );
    console.log(`  acts: ${LESSON.acts?.length} | drills: ${LESSON.drills?.length} | sheets: ${LESSON.sheets?.length} | triggers: ${LESSON.errorTriggers?.length} | terms: ${Object.keys(LESSON.terms ?? {}).length}`);
    console.log(`  the twelve: ${THE_TWELVE.join(', ')}`);
    console.log(`  all four forms taught on: vert (audible), bleu (silent), marron (invariable)`);
    console.log(`  the invariable rule is SHOWN: ${(orangeSection as { id?: string }).id} carries the fruit and the colour together`);
    console.log(`  feminine/plural marron on screen: ${marronNonMasc.length} imported + ${authoredMarronNonMasc.length} authored`);
    console.log(`  no invariable colour authored with an ending: confirmed over ${correctFrench.length + answerKeys.length} strings`);
    console.log(`  no ear question targets a plural: confirmed (${earQuestions.length} listenChoose, 0 plural)`);
    console.log(`  no other adjective taught (a1.14), no placement rule (a1.16): confirmed`);
    console.log(`  imageRefs authored: ${imageRefs.length} (nothing validates imageRef, so this lesson uses none)`);
    console.log(`  quiz: ${qs.length} questions in ${rounds.length} rounds`);
    console.log(`  quiz formats: ${Object.entries(formats).map(([k, v]) => `${k} ${v}`).join(', ')}`);
    console.log(`  mcq share: ${Math.round((formats.mcq ?? 0) / qs.length * 100)}% (ceiling 50)`);
    console.log(`  every question has a why: ${qs.every((q) => q.why) ? 'yes' : 'NO'} and a ref: ${qs.every((q) => q.ref) ? 'yes' : 'NO'}`);
    console.log(`  every free-text question rejects the wrong agreement: confirmed through the real matchesAccept`);
    console.log(`  SRS tranches: ${LESSON.deckTranche?.map((t) => t.length).join(' + ')} = ${LESSON.deckTranche?.flat().length} cards across ${LESSON.acts?.length} acts`);
    console.log(`  drills fired by a round: ${fired.size}/${teaching.length}, each the FIRST resolving target of exactly one round`);
    console.log(`  round leads: ${leads.join(', ')}`);
    console.log(`  dictation: ${COULEURS_DICTATION_IDS.length} lines, ALL in letters mode (word mode cannot test an ending)`);
    for (const m of modes) console.log(`    ${m}`);
    console.log(`  speak: ${speakIds.length} lines, all carrying voiceflash`);
    console.log(`    NOTE: not one published sentence in theme "couleurs" carries voiceflash, so the spoken mission is`);
    console.log(`    the headwords and this lesson's own authored rows. Measured, not chosen.`);
    console.log(`  recordings requested: ${LESSON.audio?.recorded?.length} (all fall back to TTS until delivered)`);
    console.log(`  respellings authored: ${Object.keys(RESPELL).length}, all passing the nasal convention`);
    console.log(`  reframe: "${REFRAME}" x${hits}`);
    console.log(`  validators: schema ✓  density ✓  house style ✓  no grammar jargon ✓  no neighbour's content ✓`);

    console.log(`\n  RESPELLING REPAIRS (not silent), display-only, in this lesson's own theme:`);
    for (const r of RESPELL_REPAIRS) {
      const now = repairRows.rows.find((x) => x.id === r.id)?.respell;
      console.log(`    ${r.id}  ${r.fr}: "${now}" → "${r.to}"   ${r.caughtByChecker ? '(checker catches it)' : '(INVISIBLE to the shared checker)'}`);
      console.log(`      ${r.why.split('\n')[0]}`);
    }
    console.log(`    Repairs the shared checker cannot see, asserted by name: ${REPAIRS_INVISIBLE_TO_CHECKER.join(', ')}`);
    console.log(`    jaune is ${RESPELL.jaune.respell} and NOT a superscript: /ʒon/ has a real n and no nasal vowel.`);
    if (alreadyRepaired) console.log(`    (${alreadyRepaired} of ${RESPELL_REPAIRS.length} already carry the corrected value; re-upserting is a no-op)`);

    console.log(`\n  THE marrons ROW, which the brief asks about:`);
    console.log(`    ${CHESTNUT_ROW.id} (${chestnutRow?.level ?? '?'}) "${CHESTNUT_ROW.fr}"`);
    console.log(`    VERDICT: ${CHESTNUT_ROW.verdict}.`);
    console.log(`    Nothing to report and nothing to fix. NOT imported: it is b1, and dragging a b1 sentence into`);
    console.log(`    an a1 lesson's SRS to make a point is a worse trade than making the point in words.`);

    console.log(`\n  UNIT EDIT (not silent):`);
    console.log(`    ${UNIT_ID} themes:    ${JSON.stringify(themesNow ?? null)} (UNCHANGED: couleurs holds ${nBound} published rows)`);
    console.log(`    ${UNIT_ID} lessonIds: ${JSON.stringify(unitBody.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);
    console.log(`    ${UNIT_ID} prereqUnitIds: ${JSON.stringify(unitBody.prereqUnitIds ?? [])} (UNCHANGED)`);
    console.log(`    a1.14 (themes ["famille"]) and a1.16 (no theme) NOT touched. Both bindings look wrong and`);
    console.log(`    rebinding another unit is that unit's own build's decision. Reported, not done.`);

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
      `\n✓ couleurs batch applied: ${NEW_ITEMS.length} items (${AUTHORED.length} authored, ${IMPORTS.length} imported)`
      + ` + ${RESPELL_REPAIRS.length} respelling repairs + lesson ${LESSON.id} published,`
      + `\n  unit ${UNIT_ID} linked. Its theme binding was already correct and was not touched.`
      + `\n  Next: pnpm tsx scripts/merge-couleurs-into-seed.ts --dry-run`
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
