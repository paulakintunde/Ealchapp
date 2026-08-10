/* Applies a1.17.l1 "Les adjectifs possessifs" to Postgres: 32 authored rows, 12
 * imported rows verified field by field, 4 respelling repairs, the lesson, and
 * the unit link. Validates EVERYTHING before it opens a transaction.
 *
 *     pnpm tsx scripts/author-possessifs-batch.ts --dry-run
 *     pnpm tsx scripts/author-possessifs-batch.ts
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
  AUTHORED_WORDS, CONTRASTS, FORBIDDEN_FORMS, GRID_NOUNS, HEADWORD_OF, IMPORTED,
  IMPORTED_HEADWORD_IDS, NASAL_FORMS, NOT_NASAL_FORMS, NOT_REPAIRED, OBJECT_PRONOUN_FRAMES,
  OWNERS, PARADIGM, POSSESSIVE_PRONOUNS, REPAIRS_INVISIBLE_TO_CHECKER, RESPELL, RESPELL_REPAIRS,
  REUSED, THE_FIFTEEN, WITHDRAWN_IDS, contrastToItem, formsIn, frOf, toItem, wordToItem,
} from './data/possessifs-corpus.ts';
import {
  FAMILY_TEACHING, HANDOVER_NEXT_FREE_ID, OWNED_ID_RANGE, POSSESSIFS_DICTATION_IDS,
  POSSESSIFS_LESSON, REFRAME,
} from './data/possessifs-lesson.ts';

const AUTHORED: Item[] = [
  ...AUTHORED_WORDS.map(wordToItem),
  ...PARADIGM.map(toItem),
  ...CONTRASTS.map(contrastToItem),
];
const IMPORTS: Item[] = IMPORTED;
const NEW_ITEMS: Item[] = [...AUTHORED, ...IMPORTS];
const LESSON: Lesson = POSSESSIFS_LESSON;
const UNIT_ID = 'a1.17';

/** Asserted against an explicit constant, never a figure derived from the
 *  lesson. A derived count compares the content to itself and passes on any
 *  rewording. */
const REFRAME_APPEARANCES = 12;

const EXPECTED_TRIGGERS = 6;
const EXPECTED_ROUNDS = 6;
const EXPECTED_FORMS = 15;
const EXPECTED_OWNERS = 6;
const EXPECTED_AUTHORED_WORDS = 5;
const EXPECTED_PARADIGM = 18;
const EXPECTED_CONTRASTS = 9;

const UNIT_THEMES = ['famille'];
const UNIT_TITLE = 'Possessive Adjectives';
const UNIT_SUB = 'Adjectifs possessifs';
const UNIT_CANDO = 'Can say whose things are whose with mon, ma, mes and their kin';

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
 *  /\bmon\b/ fails on every accented neighbour and a regex that returns zero
 *  looks exactly like an absence. Invariant §0. */
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

/** Does this quiz stem name BOTH the owner and the thing?
 *
 *  THE MOST IMPORTANT CHECK IN THIS FILE, and the brief says so: "a possessive
 *  question without both halves in the stem tests nothing." « mon or ma? » is
 *  unanswerable and looks exactly like a question that works.
 *
 *  An owner is an English possessive determiner, a named person, or a subject
 *  the stem establishes ("two parents", "a class of students"). A thing is a
 *  noun the possessive would sit in front of. Deliberately generous on both
 *  sides: a guard that fires on a legitimate question gets deleted rather than
 *  fixed, which is how a1.13's placement guard nearly went. */
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
function namesOwnerAndThing(stem: string): { owner: boolean; thing: boolean } {
  const s = stem.toLowerCase();
  return {
    owner: OWNER_MARKERS.some((m) => s.includes(m)),
    thing: THING_MARKERS.some((m) => s.includes(m)),
  };
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
  // `mon papa` is already published in famille, which is why nothing here
  // authors a possessive PHRASE that could collide with it.
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
      + `a statistic printed on two of its cards:\n  `
      + genderPopulation.map((i) => `${i.id} "${i.fr}"`).join('\n  ') + `\n`
      + `  NOTHING in this lesson should reach that population. A possessive is not a noun and carries no gender\n`
      + `  field; the three grid nouns are IMPORTED rather than authored for exactly this reason. If a row here\n`
      + `  has grown a gender, remove it rather than re-measuring a1.03. a1.11 moved a1.03's -e statistic this way\n`
      + `  and turned a lesson nobody had touched red.`,
    );
  }
  const smuggled = NEW_ITEMS.filter((i) => WITHDRAWN_IDS.includes(i.id));
  if (smuggled.length) {
    die(
      `withdrawn row(s) are back in the batch: ${smuggled.map((i) => `${i.id} "${i.fr}"`).join(', ')}\n`
      + `  See WITHDRAWN_IDS in possessifs-corpus.ts. Each has a reason and none of them is taste.`,
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
      + '  fr.sons.liaisons.169 "mon ami" carries one and is deliberately NOT imported: this lesson authors both\n'
      + '  halves of the homophone pair so their respellings are byte-identical. See the corpus header.',
    );
  }

  const learnerFacing = [
    ...strings(LESSON.sections),
    ...strings(LESSON.sheets ?? []),
    ...strings(LESSON.terms ?? {}),
  ];
  // Identifiers are not learner copy. `sheet.a1.17.grid` and `rec-a1-17-vowel`
  // are names this file chose for its own plumbing and no learner ever sees
  // either, so a scan that fired on them would be measuring the source rather
  // than the screen.
  const isIdentifier = (s: string) => !/\s/.test(s) && /^[a-z0-9][a-z0-9.\-_/]*$/i.test(s);
  // `accord` carries a negative lookbehind for the apostrophe: « d'accord » is
  // ordinary conversational French and an apostrophe counts as a word boundary
  // in JavaScript, so a bare \baccord\b fires on it. Same class of trap as §0's
  // \b warning. `possessif` is added to a1.13's list because it is this lesson's
  // own subject and therefore the single most likely piece of jargon to slip
  // onto a card.
  const jargon = learnerFacing.filter((s) => !isIdentifier(s)
    && /\b(conjugaison|article (défini|indéfini|partitif)|adjectif|possessif|(?<!')accord|complément circonstanciel|masculin|féminin|invariable|déterminant)\b/i.test(s));
  if (jargon.length) die(`grammar vocabulary reached an A1 learner:\n  ${jargon.slice(0, 3).join('\n  ')}`);

  const hits = strings(LESSON).filter((s) => s.includes(REFRAME)).length;
  if (hits !== REFRAME_APPEARANCES) {
    die(`the reframe appears ${hits} times, expected exactly ${REFRAME_APPEARANCES}`);
  }

  /* ── Respellings, and the blind spot that reaches this lesson ──────────── */

  const badNasal = Object.values(RESPELL).filter((d) => hasPlainNasalFor(d.fr, d.respell));
  if (badNasal.length) {
    die(`respellings close a nasal vowel with a plain n or m:\n  ${badNasal.map((d) => `${d.fr} ${d.respell}`).join('\n  ')}`);
  }
  // BY NAME, because the shared checker cannot see a WORD-INTERNAL nasal.
  // `mon oncle` is exactly that case: mohⁿ-NOHNKL passes hasPlainNasalFor
  // cleanly because KL follows the second nasal. Invariant §3's first blind
  // spot, the same one that let a1.09's sep-TAHNBR and a1.13's oh-RAHNZH
  // through.
  const missingSuperscript = NASAL_FORMS.filter((f) => !RESPELL[f]?.respell.includes('ⁿ'));
  if (missingSuperscript.length) {
    die(
      `form(s) carrying a nasal vowel with no superscript n: ${missingSuperscript.join(', ')}\n`
      + `  hasPlainNasalFor does not catch a word-internal nasal (mon oncle is one), so this is checked by name.`,
    );
  }
  // THE OPPOSITE CHECK. notre, votre, leur, nos, vos, ma, ta and sa have no
  // nasal vowel at all, and a superscript on any of them would teach a sound
  // that is not in the word while silencing nothing (the checker never flagged
  // them). This is the shape that produced a1.13's jaune trap.
  const wronglyNasalised = NOT_NASAL_FORMS.filter((f) => RESPELL[f]?.respell.includes('ⁿ'));
  if (wronglyNasalised.length) {
    die(
      `form(s) respelled with a superscript n that have NO nasal vowel: ${wronglyNasalised.join(', ')}\n`
      + `  These carry no nasal at all and the checker never flagged them, so a superscript here would be a\n`
      + `  "fix" for nothing that teaches a sound the word does not contain.`,
    );
  }
  // THE TWO THE BRIEF ASKS FOR BY NAME. `mon` must carry the superscript;
  // `mon ami` must NOT be flagged. The brief predicts a false positive on the
  // second and there is none: both verified forms are asserted here so a later
  // author's "fix" for the imaginary bug goes red.
  if (RESPELL.mon.respell !== '[MOHⁿ]') {
    die(`mon is respelled ${RESPELL.mon.respell}, expected [MOHⁿ]. It is a plain nasal and must carry the superscript.`);
  }
  if (RESPELL['mon ami'].respell !== '[mohⁿ-na-MEE]') {
    die(
      `mon ami is respelled ${RESPELL['mon ami'].respell}, expected [mohⁿ-na-MEE].\n`
      + `  The brief calls this the false-positive shape for hasPlainNasalFor. IT IS NOT: measured 2026-08-06,\n`
      + `  mohⁿ-na-MEE passes cleanly and mohn-na-MEE is flagged CORRECTLY. Do not write a workaround.`,
    );
  }
  if (hasPlainNasalFor('mon ami', RESPELL['mon ami'].respell)) {
    die('hasPlainNasalFor now flags mon ami. If the checker has changed, read §3 before changing the respelling.');
  }
  // THE HOMOPHONE CLAIM, MECHANICALLY. The lesson says on three surfaces that
  // mon ami and mon amie are one sound. If the two transcriptions ever differ,
  // that claim is contradicted by the cards making it.
  if (RESPELL['mon ami'].respell !== RESPELL['mon amie'].respell
    || RESPELL['mon ami'].ipa !== RESPELL['mon amie'].ipa) {
    die(
      `mon ami and mon amie carry different transcriptions:\n`
      + `  mon ami  ${RESPELL['mon ami'].ipa} ${RESPELL['mon ami'].respell}\n`
      + `  mon amie ${RESPELL['mon amie'].ipa} ${RESPELL['mon amie'].respell}\n`
      + `  They are homophones and this lesson says so on three surfaces. The transcriptions must be identical.`,
    );
  }

  /* ── The shape of the lesson ───────────────────────────────────────────── */

  if (THE_FIFTEEN.length !== EXPECTED_FORMS) die(`THE_FIFTEEN holds ${THE_FIFTEEN.length} forms, expected ${EXPECTED_FORMS}`);
  if (OWNERS.length !== EXPECTED_OWNERS) die(`${OWNERS.length} owners, expected ${EXPECTED_OWNERS}`);
  if (PARADIGM.length !== EXPECTED_PARADIGM) die(`${PARADIGM.length} paradigm rows, expected ${EXPECTED_PARADIGM} (six owners by three shapes)`);
  if (CONTRASTS.length !== EXPECTED_CONTRASTS) die(`${CONTRASTS.length} contrast rows, expected ${EXPECTED_CONTRASTS}`);
  if (AUTHORED_WORDS.length !== EXPECTED_AUTHORED_WORDS) {
    die(`${AUTHORED_WORDS.length} headwords authored, expected ${EXPECTED_AUTHORED_WORDS} (nos, vos, leurs, mon ami, mon amie)`);
  }

  // ALL FIFTEEN TAUGHT AND NAMED INDIVIDUALLY. The brief asks for this by name
  // and gives the reason: nos and vos are the two most likely to be quietly
  // dropped, because they are the least frequent and the grid looks complete
  // without them. Counted per form rather than as a total, so dropping one and
  // adding another cannot pass.
  const learnerText = learnerFacing.join('\n');
  const untaught = THE_FIFTEEN.filter((f) => !hasWord(learnerText, f));
  if (untaught.length) die(`possessive form(s) never named on any screen: ${untaught.join(', ')}`);
  const noHeadword = THE_FIFTEEN.filter((f) => !HEADWORD_OF[f] || !LESSON.itemIds.includes(HEADWORD_OF[f]));
  if (noHeadword.length) die(`form(s) with no headword card in the lesson: ${noHeadword.join(', ')}`);

  // Every cell of the grid is on a screen, and the grid is complete.
  for (const o of OWNERS) {
    const row = PARADIGM.filter((c) => c.who === o.who);
    if (row.length !== 3) die(`the row for ${o.who} has ${row.length} cells, expected 3`);
    const missing = row.filter((c) => !learnerText.includes(c.fr));
    if (missing.length) die(`cell(s) of the ${o.who} row on no screen: ${missing.map((c) => c.fr).join(' | ')}`);
  }

  // THE HIS/HER INVERSION, ON ONE SCREEN. The brief calls this the layout the
  // test must assert, and it is right: split across two missions it becomes two
  // unremarkable sentences and the inversion is never visible. Checked as ONE
  // SECTION carrying the same French phrase against two English readings.
  const inversionSections = LESSON.sections.filter((s) => {
    const text = strings(s).join('\n');
    return hasWord(text.toLowerCase(), 'his sister') && hasWord(text.toLowerCase(), 'her sister')
      && text.includes('sa sœur');
  }).map((s) => (s as { id?: string }).id ?? '?');
  if (!inversionSections.length) {
    die(
      'no single section shows one French phrase carrying both the his and the her reading.\n'
      + '  That contrast IS the reframe. Splitting it across two missions leaves two ordinary sentences and the\n'
      + '  inversion is never visible on any screen.',
    );
  }
  // AND IT IS THE TWO-COLUMN SCREEN, by name. The scene's break also carries
  // both readings, which is why a `find()` here reported s01-scene and looked
  // satisfied: a check that any section carries the contrast would pass with
  // s04-hisher deleted. The brief asks for two columns on one screen and that is
  // the section that has them.
  if (!inversionSections.includes('s04-hisher')) {
    die(
      `the his/her contrast appears in ${inversionSections.join(', ')} but NOT in s04-hisher.\n`
      + `  s04-hisher is the two-column screen: identical French in both cells of a row, different English.\n`
      + `  The scene carries the contrast too, in prose, which is not the same thing and would let this pass\n`
      + `  with the designed screen gone.`,
    );
  }

  // THE VOWEL RULE, ON A VERIFIABLY FEMININE NOUN. The brief calls this the
  // highest-value assertion in the file, and the reason is precise: a later edit
  // replacing `mon amie` with `mon ami` leaves every other check green while
  // destroying the teaching, because `mon ami` is an ordinary masculine noun
  // where nothing special is happening.
  const vowelRows = CONTRASTS.filter((c) => c.role === 'vowel');
  const feminineVowelExample = vowelRows.find((c) => hasWord(c.fr.toLowerCase(), 'amie'));
  if (!feminineVowelExample) {
    die(
      'no vowel-rule example uses a verifiably FEMININE vowel-initial noun.\n'
      + '  `mon ami` is masculine and demonstrates nothing: the learner cannot tell the rule is firing unless the\n'
      + '  noun is one they can check is the une kind. `amie` carries gender=f on seven published headwords and\n'
      + '  appears as `une amie` in four published sentences, which is what makes it checkable.',
    );
  }
  const swapSection = LESSON.sections.find((s) => {
    const text = strings(s).join('\n');
    return text.includes('ma sœur') && text.includes('mon amie');
  });
  if (!swapSection) {
    die('no single section puts `ma sœur` beside `mon amie`. Without the pairing, mon amie just looks like a mistake.');
  }

  // THE HOMOPHONES ARE STATED TO BE HOMOPHONES, and no ear question tries to
  // separate them. Both halves asserted, as the brief asks.
  const saysHomophone = learnerFacing.some((s) => /same sound|one sound|identical/i.test(s) && /amie?/i.test(s));
  if (!saysHomophone) {
    die('nowhere does the lesson state that mon ami and mon amie are the same sound. It is untestable by ear and worth saying.');
  }

  /* ── The neighbours keep their lessons ─────────────────────────────────── */

  // Written against PRODUCTION SURFACES rather than every string, or they fire
  // on legitimate context and get deleted. a1.13's brief says so explicitly and
  // its first draft proved it.
  const productionSurfaces = [
    ...strings(LESSON.sections.filter((s) => ['vocabThemes', 'flashcards', 'reviewDeck', 'cardDeck', 'tapTable'].includes(s.type))),
    ...strings(LESSON.drills ?? []),
    ...strings((LESSON.sections.find((s) => s.type === 'quiz') ?? {}) as unknown),
  ];
  const pronounHit = POSSESSIVE_PRONOUNS.filter((w) => strings(LESSON).some((s) => hasWord(s.toLowerCase(), w)));
  if (pronounHit.length) {
    die(
      `possessive pronoun(s) on a surface: ${pronounHit.join(', ')}\n`
      + `  le mien and la tienne are well beyond A1. This lesson teaches the adjective and nothing else.`,
    );
  }
  const objectHit = OBJECT_PRONOUN_FRAMES.filter((w) => productionSurfaces.some((s) => s.toLowerCase().includes(w)));
  if (objectHit.length) {
    die(
      `the object pronoun leur reached a production surface: ${objectHit.join(', ')}\n`
      + `  That is a2.24 and a different word. This lesson names its existence on ONE card and teaches none of it.`,
    );
  }
  const familyHit = FAMILY_TEACHING.filter((w) => productionSurfaces.some((s) => s.toLowerCase().includes(w)));
  if (familyHit.length) {
    die(
      `family-vocabulary teaching found, which belongs to a1.15: ${familyHit.join(', ')}\n`
      + `  This lesson borrows three family nouns as a frame and teaches nothing about them beyond which kind\n`
      + `  they are. `+ "`de` for possession is a1.15's own reframe and is untouched here.",
    );
  }

  // THE ARTICLE SLOT: no production surface contains an article followed by a
  // possessive. Every string in FORBIDDEN_FORMS is ungrammatical, so a hit is
  // always a defect. Scoped to CORRECT FRENCH: the traps card and the quiz
  // options have to SHOW the error in order to teach it.
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
      + `  against inventing a possession diagram: no component draws one. Register any ref in\n`
      + `  src/content/lessonImages.ts AND write the assertion yourself.`,
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

  // EVERY STEM NAMES BOTH THE OWNER AND THE THING. The brief calls this the most
  // important sentence in its quiz section and it is invisible to every other
  // check: a question missing either half has no single right answer and looks
  // exactly like one that does.
  const halfQuestions = qs
    .map((q) => ({ q: q.q, ...namesOwnerAndThing(q.q) }))
    .filter((x) => !x.owner || !x.thing);
  if (halfQuestions.length) {
    die(
      `quiz question(s) whose stem does not name BOTH the owner and the thing:\n  `
      + halfQuestions.map((x) => `${!x.owner ? 'NO OWNER' : 'NO THING '}  "${x.q}"`).join('\n  ') + `\n`
      + `  "mon or ma?" is unanswerable. "You want to say: my sister" has exactly one answer. A possessive\n`
      + `  question missing either half tests nothing while looking exactly like one that works.`,
    );
  }

  // NO OPTION REFERS TO A POSITION, and no option is duplicated within a
  // question. QuizDeckView shuffles the options of every closed question per
  // attempt, so a positional option is broken by design and a duplicate makes a
  // shuffled question genuinely ambiguous rather than merely redundant. This
  // lesson is the most exposed on the track: its whole answer space is fifteen
  // short words.
  const POSITIONAL = ['the first', 'the second', 'the third', 'the last', 'both of the above',
    'all of the above', 'none of these', 'none of the above', 'the one above', 'the one below'];
  const positional = qs.flatMap((q) => (q.opts ?? [])
    .filter((o) => POSITIONAL.some((p) => o.toLowerCase().includes(p)))
    .map((o) => `"${o}" in "${q.q}"`));
  if (positional.length) {
    die(
      `quiz option(s) referring to a position:\n  ${positional.join('\n  ')}\n`
      + `  The options are shuffled per question per attempt, so the positions the learner sees are not the ones\n`
      + `  you wrote.`,
    );
  }
  const dupeOpts = qs.flatMap((q) => {
    const seen = new Set<string>();
    return (q.opts ?? []).filter((o) => (seen.has(o) ? true : (seen.add(o), false)))
      .map((o) => `"${o}" twice in "${q.q}"`);
  });
  if (dupeOpts.length) die(`quiz question(s) with a duplicate option:\n  ${dupeOpts.join('\n  ')}`);

  // THE ANSWER SPREAD. quiz-spread caps any authored slot at 40% of closed
  // questions regardless of the runtime shuffle, and with mon/ma as a recurring
  // two-way answer this is very easy to breach.
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

  // NO listenChoose QUESTION TRIES TO SEPARATE A HOMOPHONE PAIR. mon ami against
  // mon amie is untestable by ear, and so is leur against leurs in front of a
  // consonant. An ear question on either asks the learner to hear something that
  // is not in the signal, and a learner who cannot hear it concludes their
  // listening is at fault.
  const earQs = qs.filter((q) => q.format === 'listenChoose');
  const impossible = earQs.filter((q) => {
    const opts = (q.opts ?? []).map((o) => o.toLowerCase());
    return (opts.includes('mon ami') && opts.includes('mon amie'))
      || (opts.some((o) => hasWord(o, 'leur')) && opts.some((o) => hasWord(o, 'leurs')));
  });
  if (impossible.length) {
    die(
      `ear question(s) asking the learner to separate a homophone pair:\n  ${impossible.map((q) => q.q).join('\n  ')}\n`
      + `  mon ami / mon amie are one sound, and leur / leurs are one sound in front of a consonant. The only\n`
      + `  genuine ear question in this lesson is mes amis against ses amis.`,
    );
  }
  if (!earQs.length) die('no listenChoose question at all. mes amis against ses amis is a real confusion and is worth one.');

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
      + `  place never runs. Reorder the round's \`targets\`, add a round for it, or drop the drill.`,
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
        + `  Re-run scripts/_possessifs_manifest.ts and paste the result into scripts/data/possessifs-imported.ts.`,
      );
    }

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

    /* ── The dictée, through the real dicteeMode ─────────────────────────── */

    const byId = new Map(NEW_ITEMS.map((i) => [i.id, i] as const));
    const dictRows = await client.query<{ id: string; fr: string; drills: string[] }>(
      `select id, fr, drills from content_items where id = any($1)`,
      [POSSESSIFS_DICTATION_IDS],
    );
    const noDictTag: string[] = [];
    const wrongMode: string[] = [];
    const modes: string[] = [];
    for (const id of POSSESSIFS_DICTATION_IDS) {
      const it = byId.get(id) ?? dictRows.rows.find((r) => r.id === id);
      if (!it) die(`the dictée names ${id}, which is neither in this batch nor in the database`);
      const mode = dicteeMode(it.fr);
      const decoys = mode === 'words' ? wordDecoys(it.fr) : [];
      modes.push(`${mode === 'words' ? 'WORDS' : 'letters'} "${it.fr}"${decoys.length ? ` decoys=${decoys.join('/')}` : ''}`);
      // MEASURED, not assumed. Word mode hands the learner each whole word as a
      // pre-spelled tile, so it cannot test a CHOICE between two short words,
      // which is the entire subject of this lesson.
      if (mode !== 'letters') wrongMode.push(`${id} "${it.fr}" is ${mode} mode`);
      const d = byId.has(id) ? byId.get(id)!.drills : drillsOf((it as { drills: unknown }).drills);
      if (!d.includes('dictation')) noDictTag.push(`${id} "${it.fr}"`);
    }
    if (noDictTag.length) die(`dictation item(s) with no "dictation" drill:\n  ${noDictTag.join('\n  ')}`);
    if (wrongMode.length) {
      die(
        `dictée target(s) that land in WORD mode:\n  ${wrongMode.join('\n  ')}\n`
        + `  Word mode offers each whole word as a tile, so the learner taps \`mon\` rather than choosing it.\n`
        + `  Choose a shorter target. "Voici leurs filles." is 17 letters and cannot be one at any length.`,
      );
    }

    /* ── The speak mission ───────────────────────────────────────────────── */

    const speakSection = LESSON.sections.find((s) => (s as { id?: string }).id === 's22-speak');
    const speakIds = (speakSection as { itemIds?: string[] } | undefined)?.itemIds ?? [];
    if (!speakIds.length) die('the speak mission names no items');
    // NOT ONE BARE POSSESSIVE. The audio brief is explicit and it decides the
    // content of this mission rather than merely the recordings: `mon` alone
    // carries no information about the thing, and the whole lesson is about
    // what follows it.
    const bareInSpeak = speakIds.filter((id) => {
      const row = byId.get(id);
      return row && THE_FIFTEEN.includes(row.fr.trim().toLowerCase());
    });
    if (bareInSpeak.length) {
      die(
        `the speak mission names bare possessive(s): ${bareInSpeak.join(', ')}\n`
        + `  A bare possessive cannot be right or wrong on its own. Every line the learner says must have a thing\n`
        + `  in it, which is the only thing that makes a possessive a choice.`,
      );
    }
    const toCheck = speakIds.filter((id) => !byId.has(id));
    const speakRows = toCheck.length
      ? (await client.query<{ id: string; drills: string[] }>(
        `select id, drills from content_items where id = any($1)`, [toCheck],
      )).rows
      : [];
    const badSpeak = [
      ...speakIds.filter((id) => byId.has(id) && !byId.get(id)!.drills.includes('voiceflash')),
      ...toCheck.filter((id) => !drillsOf(speakRows.find((r) => r.id === id)?.drills).includes('voiceflash')),
    ];
    if (badSpeak.length) die(`items named by the speak mission carry no "voiceflash" drill:\n  ${badSpeak.join('\n  ')}`);

    /* ── The grid nouns carry the gender the learner is told to check ────── */

    const nounRows = await client.query<{ id: string; fr: string; gender: string | null }>(
      `select id, fr, gender from content_items where id = any($1) and status='published'`,
      [GRID_NOUNS.map((n) => n.headwordId)],
    );
    const ungendered = GRID_NOUNS.filter((n) => !nounRows.rows.find((r) => r.id === n.headwordId)?.gender);
    if (ungendered.length) {
      die(
        `grid noun(s) with no stored gender: ${ungendered.map((n) => `${n.noun} (${n.headwordId})`).join(', ')}\n`
        + `  The whole grid rests on a learner being able to CHECK which kind the noun is, using what a1.03 gave\n`
        + `  them. A noun with no gender on its card cannot be checked and the grid becomes something to take on\n`
        + `  trust.`,
      );
    }
    // And `amie`, which the vowel rule is built on, is feminine in the corpus.
    const amie = await client.query<{ n: string }>(
      `select count(*)::text n from content_items
        where status='published' and kind <> 'sentence' and gender = 'f'
          and (fr = 'amie' or fr = 'une amie' or fr = 'l''amie')`,
    );
    if (Number(amie.rows[0]?.n ?? 0) === 0) {
      die(
        'no published headword records `amie` as feminine.\n'
        + '  The vowel act is built on it being verifiably the une kind. If the corpus no longer says so, the\n'
        + '  teaching in s13-swap is asserting something the learner cannot check.',
      );
    }

    /* ── The unit ────────────────────────────────────────────────────────── */

    const unitRow = await client.query<{ body: Unit }>(
      `select body from content_units where kind = 'curriculum_unit' and body->>'id' = $1`,
      [UNIT_ID],
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
        + `  This lesson does NOT rebind the unit: famille is already correct and already populated.`,
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

    // The twelve headwords are published where this lesson thinks they are.
    const headwordRows = await client.query<{ id: string; fr: string }>(
      `select id, fr from content_items where id = any($1) and status='published'`,
      [IMPORTED_HEADWORD_IDS],
    );
    if (headwordRows.rows.length !== IMPORTED_HEADWORD_IDS.length) {
      die(
        `${headwordRows.rows.length} of the twelve possessive headwords are published, expected 12.\n`
        + `  This lesson imports all twelve rather than authoring them, so a gap here means the ids have moved.`,
      );
    }

    /* ── THE ID COLLISION CHECK, AND WHY IT IS NOT A NEXT-FREE CHECK ──────
     *
     * a1.15 landed at 23:36 UTC on 2026-08-06, between this build's pre-flight
     * probe and its first dry run, and took fr.a1.famille.235-.252: exactly the
     * range these 32 rows had already been authored into.
     *
     * A HIGHEST-ID CHECK PASSED IT CLEANLY. a1.15's top id was .252 and this
     * batch's was .266, so "is anything above mine" answered no while eighteen
     * of this batch's ids were about to overwrite somebody else's published
     * content. The tell was a row COUNT that had moved, which nothing was
     * looking at.
     *
     * So the check is: does any row inside THIS BATCH'S OWN RANGE exist that
     * this batch did not author? An upsert would silently replace it, and the
     * loss would be invisible until a learner opened the other lesson. */
    const inRange = await client.query<{ id: string; fr: string; updated_at: Date }>(
      `select id, fr, updated_at from content_items
        where id >= $1 and id <= $2 and id like 'fr.a1.famille.%'`,
      [OWNED_ID_RANGE.from, OWNED_ID_RANGE.to],
    );
    const foreign = inRange.rows.filter((r) => !ids.includes(r.id));
    if (foreign.length) {
      die(
        `${foreign.length} row(s) inside this batch's own id range were authored by somebody else:\n  `
        + foreign.map((r) => `${r.id} "${r.fr}" (updated ${r.updated_at.toISOString()})`).join('\n  ') + `\n`
        + `  Writing this batch would OVERWRITE them. Renumber this lesson rather than forcing it: shift every\n`
        + `  id in possessifs-corpus.ts, possessifs-terms.ts and possessifs-lesson.ts, and move OWNED_ID_RANGE.\n`
        + `  This is exactly what happened to a1.15 and a1.17 on 2026-08-06, and a highest-id check missed it\n`
        + `  because their range sat ENTIRELY BELOW this one's top.`,
      );
    }
    const maxFamille = await client.query<{ max: string | null }>(
      `select max(id) as max from content_items where id like 'fr.a1.famille.%'`,
    );
    const highest = maxFamille.rows[0]?.max ?? '';
    if (highest > OWNED_ID_RANGE.to) {
      console.warn(
        `\n⚠  fr.a1.famille now runs to ${highest}, above this batch's ${OWNED_ID_RANGE.to}.`
        + `\n   Somebody else has authored above this range. This batch is idempotent by id and writes only its`
        + `\n   own 32 rows, so it is safe, but the handover's NEXT FREE (${HANDOVER_NEXT_FREE_ID}) is now stale.\n`,
      );
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
      [LESSON.id],
    );
    const prior = existingLesson.rows[0]?.version;
    guardLessonVersion({
      lessonId: LESSON.id, prior, authored: LESSON.version,
      sourceFile: 'possessifs-lesson.ts', dryRun: DRY_RUN, die,
    });

    /* ── Report ──────────────────────────────────────────────────────────── */

    const formats = qs.reduce<Record<string, number>>((a, q) => {
      const f = q.format ?? 'mcq';
      a[f] = (a[f] ?? 0) + 1;
      return a;
    }, {});

    console.log(`\n  authored items: ${AUTHORED.length} (${AUTHORED_WORDS.length} headwords + ${PARADIGM.length} paradigm + ${CONTRASTS.length} contrasts)`);
    console.log(`    fr.a1.famille.253-257: nos, vos, leurs, mon ami, mon amie   <- the entire headword gap`);
    console.log(`    fr.a1.famille.258-275: the eighteen-cell paradigm, one frame, three nouns, six owners`);
    console.log(`    fr.a1.famille.276-284: the four contrasts the paradigm cannot carry`);
    console.log(`    (.235-.252 belong to a1.15, which landed mid-build. Every id here was shifted by 18.)`);
    console.log(`  TWELVE of the fifteen forms already existed as headwords at fr.sons.mots-essentiels.093-104`);
    console.log(`    and are IMPORTED. The brief said the headword evidence was "nearly nil". It was not.`);
    console.log(`  imported items: ${IMPORTS.length} from ${new Set(IMPORTS.map((i) => i.theme)).size} theme(s) OUTSIDE the seed cut, verified field by field`);
    console.log(`  reused items: ${REUSED.length}, already in the seed, untouched`);
    console.log(`  withdrawn on purpose: ${WITHDRAWN_IDS.length} (${WITHDRAWN_IDS.join(', ')})`);
    console.log(
      `  lesson: ${LESSON.id} "${LESSON.title}", ${prior !== undefined ? `updating v${prior} → v${LESSON.version}` : 'NEW'}, `
      + `${LESSON.sections.length} sections, ${LESSON.itemIds.length} itemIds`,
    );
    console.log(`  acts: ${LESSON.acts?.length} | drills: ${LESSON.drills?.length} | sheets: ${LESSON.sheets?.length} | triggers: ${LESSON.errorTriggers?.length} | terms: ${Object.keys(LESSON.terms ?? {}).length}`);
    console.log(`  the fifteen: ${THE_FIFTEEN.join(', ')}`);
    console.log(`    every one named on a screen AND carrying a headword card, checked individually`);
    console.log(`  the eighteen-cell grid is SPLIT: s07 carries 9 (owners that ask), s09 carries 6 (owners that do not)`);
    console.log(`    the full eighteen live on sheet.a1.17.grid, where layer 'deep' lifts the density caps`);
    console.log(`  the his/her inversion is on ONE screen: ${inversionSections.join(", ")}, including the two-column s04-hisher`);
    console.log(`  ma sœur beside mon amie on ONE screen: ${(swapSection as { id?: string }).id}`);
    console.log(`  the vowel rule is taught on a verifiably FEMININE noun: "${feminineVowelExample.fr}"`);
    console.log(`    amie carries gender='f' on ${amie.rows[0]?.n} published headword(s)`);
    console.log(`  mon ami and mon amie carry identical ipa AND respell: ${RESPELL['mon ami'].respell}`);
    console.log(`  no possessive pronoun, no object-pronoun leur, no family teaching: confirmed`);
    console.log(`  no article followed by a possessive on any correct-French surface: confirmed over ${correctFrench.length + answerKeys.length} strings`);
    console.log(`  imageRefs authored: ${imageRefs.length} (nothing validates imageRef, so this lesson uses none)`);
    console.log(`  quiz: ${qs.length} questions in ${rounds.length} rounds`);
    console.log(`  quiz formats: ${Object.entries(formats).map(([k, v]) => `${k} ${v}`).join(', ')}`);
    console.log(`  mcq share: ${Math.round((formats.mcq ?? 0) / qs.length * 100)}% (ceiling 50)`);
    console.log(`  every question has a why: ${qs.every((q) => q.why) ? 'yes' : 'NO'} and a ref: ${qs.every((q) => q.ref) ? 'yes' : 'NO'}`);
    console.log(`  every stem names BOTH the owner and the thing: confirmed over ${qs.length} questions`);
    console.log(`  no option refers to a position, none duplicated within a question: confirmed`);
    console.log(`  authored answer spread: ${Object.entries(slots).map(([k, n]) => `slot ${k} ${Math.round(n / closed.length * 100)}%`).join(', ')} (cap 40)`);
    console.log(`  no ear question separates a homophone pair: confirmed (${earQs.length} listenChoose)`);
    console.log(`  SRS tranches: ${LESSON.deckTranche?.map((t) => t.length).join(' + ')} = ${LESSON.deckTranche?.flat().length} cards across ${LESSON.acts?.length} acts`);
    console.log(`  drills fired by a round: ${fired.size}/${teaching.length}, each the FIRST resolving target of exactly one round`);
    console.log(`  round leads: ${leads.join(', ')}`);
    console.log(`  dictation: ${POSSESSIFS_DICTATION_IDS.length} lines, ALL in letters mode (word mode cannot test a choice)`);
    for (const m of modes) console.log(`    ${m}`);
    console.log(`  speak: ${speakIds.length} lines, all carrying voiceflash, NOT ONE a bare possessive`);
    console.log(`  recordings requested: ${LESSON.audio?.recorded?.length} (all fall back to TTS until delivered)`);
    console.log(`  respellings authored: ${Object.keys(RESPELL).length}, all passing the nasal convention`);
    console.log(`  reframe: "${REFRAME}" x${hits}`);
    console.log(`  validators: schema ✓  density ✓  house style ✓  no grammar jargon ✓  no neighbour's content ✓`);

    console.log(`\n  RESPELLING REPAIRS (not silent), display-only:`);
    for (const r of RESPELL_REPAIRS) {
      const now = repairRows.rows.find((x) => x.id === r.id)?.respell;
      console.log(`    ${r.id}  ${r.fr}: "${now}" → "${r.to}"   ${r.caughtByChecker ? '(checker catches it)' : '(INVISIBLE to the shared checker)'}`);
      console.log(`      ${r.why.split('\n')[0]}`);
    }
    console.log(`    Repairs the shared checker cannot see: ${REPAIRS_INVISIBLE_TO_CHECKER.length ? REPAIRS_INVISIBLE_TO_CHECKER.join(', ') : 'none. All four are caught, unlike a1.13\'s orange.'}`);
    if (alreadyRepaired) console.log(`    (${alreadyRepaired} of ${RESPELL_REPAIRS.length} already carry the corrected value; re-upserting is a no-op)`);
    console.log(`\n  NOT REPAIRED, and reported rather than done:`);
    for (const n of NOT_REPAIRED) console.log(`    ${n.id}  "${n.fr}" ${n.respell}   ${n.why}`);
    console.log(`    Both are the NOISE sense of son and appear on no screen here. Repairing a row this lesson does`);
    console.log(`    not display is reaching into somebody else's card. Invariant §9.`);

    console.log(`\n  THE BRIEF'S PREDICTED FALSE POSITIVE, which does not exist:`);
    console.log(`    mon      ${RESPELL.mon.respell}   flagged: ${hasPlainNasalFor('mon', RESPELL.mon.respell)}   (MOHN and MON are both flagged, correctly)`);
    console.log(`    mon ami  ${RESPELL['mon ami'].respell}   flagged: ${hasPlainNasalFor('mon ami', RESPELL['mon ami'].respell)}   (mohn-na-MEE IS flagged, also correctly)`);
    console.log(`    The checker gets mon ami right. The blind spot that DOES reach this lesson is the word-internal`);
    console.log(`    one: mon oncle respelled mohⁿ-NOHNKL passes cleanly while being wrong, so it is checked by name.`);

    console.log(`\n  UNIT EDIT (not silent):`);
    console.log(`    ${UNIT_ID} themes:    ${JSON.stringify(themesNow ?? null)} (UNCHANGED: famille holds ${nBound} published rows)`);
    console.log(`    ${UNIT_ID} lessonIds: ${JSON.stringify(unitBody.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);
    console.log(`    ${UNIT_ID} prereqUnitIds: ${JSON.stringify(unitBody.prereqUnitIds ?? [])} (UNCHANGED)`);
    console.log(`\n  HANDOVER: a1.15 LANDED MID-BUILD at fr.a1.famille.235-252, so every id here shifted by 18. NEXT FREE is ${HANDOVER_NEXT_FREE_ID}.`);
    console.log(`    a1.14 also landed and does not share this counter: it authors into fr.sons.adjectifs-essentiels`);
    console.log(`    and has rebound its unit off famille. See the foot of possessifs-lesson.ts.`);

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
      `\n✓ possessifs batch applied: ${NEW_ITEMS.length} items (${AUTHORED.length} authored, ${IMPORTS.length} imported)`
      + ` + ${RESPELL_REPAIRS.length} respelling repairs + lesson ${LESSON.id} published,`
      + `\n  unit ${UNIT_ID} linked. Its theme binding was already correct and was not touched.`
      + `\n  Next: pnpm tsx scripts/merge-possessifs-into-seed.ts --dry-run`
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
