// The a1.21 corpus: what this lesson authors, what it imports, and the four
// shipped respellings it repairs.
//
// THIS FILE IS THE SINGLE SOURCE OF TRUTH for every `fr`, `ipa`, `respell` and
// `en` a1.21 puts on a screen. The lesson body (prepositions-lesson.ts) reads
// them FROM HERE and never restates them, for the same reason couleurs-corpus.ts
// and possessifs-corpus.ts do: before that convention one word's transcription
// was typed by hand in five sections and the five copies were free to drift.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE PROBE RAN. THE BRIEF WAS RIGHT ABOUT THE IDS AND THE HEADWORDS AND
//  WRONG ABOUT THE TWO THINGS THAT DECIDED THE BUILD: THE SIZE OF THE
//  SEMANTIC FALSE POSITIVES, AND WHETHER THE CONTRACTION WAS ALREADY TAUGHT.
// ══════════════════════════════════════════════════════════════════════════
//
// Measured 2026-08-07 with `pnpm corpus:probe --unit a1.21 --theme
// prepositions-essentielles`, `scripts/_prepositions_probe.ts` and
// `scripts/_prepositions_probe2.ts`, all against Postgres (27,242 published
// sentences) and against seed.json.
//
//   1. "`sur` also means ABOUT and `devant` also means BEFORE in the
//      non-spatial sense, and BOTH SENSES ARE WELL REPRESENTED. A raw import
//      would teach the wrong meaning."
//
//      TRUE AS A HAZARD, WRONG BY AN ORDER OF MAGNITUDE AS A QUANTITY, and the
//      difference decided how much of this lesson could be imported.
//
//          sur      757 published sentences,   40 carry an ABOUT cue    5.3%
//                   at level a1: 180 sentences,  7 carry one            3.9%
//          devant   197 published sentences,    3 are the grammatical
//                   BEFORE sense                                        1.5%
//
//      All three `devant` = BEFORE rows are metalinguistic sentences ABOUT
//      French, and every one of them lives outside this theme:
//
//          fr.a1.maison.008    Le pour le masculin, la pour le féminin, l'
//                              devant une voyelle.
//          fr.a1.amis.009      Devant une voyelle, « ma » devient « mon » [...]
//          fr.a1.metiers.016   Après être, pas d'article devant la profession.
//
//      NOT ONE non-spatial `sur` or `devant` sits inside
//      fr.a1.prepositions-essentielles. The brief's warning is still worth
//      obeying and the filtering it implies is nearly free. Reported because a
//      later author reading "well represented" would budget for a curation pass
//      that is not needed, and might import less than they safely could.
//
//   2. "The theme has 118 fr.a1 rows [...] How many are SPATIAL rather than
//      temporal or abstract. Sampled, not enumerated."
//
//      ENUMERATED. All 118 read. **70 carry a place preposition, 48 carry
//      none.** The 48 are this theme's OTHER job: it is a general prepositions
//      theme, not a place one, and it holds `avec`, `pour`, `sans`, `avant`,
//      `après`, `vers`, `par`, `pendant`, `jusqu'à` and bare `de` as well.
//
//      That is the real curation cost of this lesson and it is 41% of the
//      theme. Two further rows are place-preposition SHAPES with a non-spatial
//      reading and both are dropped by hand rather than by the token filter:
//
//          .061  Le café est ouvert entre huit heures et minuit.   entre = TEMPORAL
//          .099  Les enfants jouent aux cartes.                    aux = not a place
//
//      `.099` is kept, but ONLY as labelled reading exposure for the `aux`
//      contraction, never on a spatial surface. See IMPORTED_CONTRACTION.
//
//   3. "Whether `a1.04` or `a1.29` already taught `au` / `aux` / `du` as
//      contractions. Both are built. Check both before teaching it as new."
//
//      CHECKED, AND THE ANSWER SPLITS.
//
//          a1.04  Les articles définis    NO contraction language at all.
//                                         Measured over the whole lesson body.
//          a1.29  Les articles partitifs  OWNS `de + le` ALREADY.
//
//      a1.29 ships a whole cardDeck section `s14-other-du` titled "The Other
//      Du", an `otherDu` term, and an `err-other-du` error trigger. Its FIRST
//      CARD is « près du lit », which is a spatial compound preposition with
//      the contraction in it. Its term reads:
//
//          "Près du lit, le plat du jour, l apostrophe odeur du pain. None of
//           these is about an amount of anything: they are de and le squeezed
//           together [...] Four out of five of the du in this corpus are this
//           one."
//
//      So `du` is NOT this lesson's to introduce. `au` and `aux` ARE: neither
//      a1.04 nor a1.29 nor any other shipped lesson teaches them. a1.21 opens
//      its contraction act by NAMING a1.29 and extending it, the way a1.09
//      opens by naming a1.08, rather than teaching a learner something they
//      have already been taught and telling them it is new.
//
//   4. "`en face du` returns 0, which is worth checking rather than believing."
//
//      CHECKED WITH A FULL PHRASE, as the brief asks. `en face du` returns 0 and
//      so does `en face du parc`. It is genuinely absent, and so is
//      `aux toilettes` (pg=0). The brief's suspicion was reasonable and the
//      answer is that the absence is real.
//
//   5. "`entre` [...] AHNTR passes validation and is wrong."
//
//      CONFIRMED AGAINST THE REAL FUNCTION, and it is worse than the brief
//      says. `hasPlainNasalFor('entre', 'AHNTR')` returns FALSE — not flagged.
//      So does `hasPlainNasalFor('entre', 'AHⁿTR')`. The checker cannot
//      separate the broken form from the repair, which means NO shared checker
//      can defend this row and the test must name it by hand. See REPAIRS.
//
//   6. "The current test baseline was 2017 pass, 0 fail on 2026-08-06, and no
//      lesson has landed since (still 31 lessons)."
//
//      STALE BOTH WAYS, and it moved again DURING this build.
//
//          at the brief's measurement   31 lessons   7,542 items
//          at this build's first probe  32 lessons   7,587 items   a1.18 landed
//          ninety minutes later         33 lessons   7,638 items   a1.22 landed
//
//      a1.18 "La négation" and a1.22 "Pays & nationalités" both shipped while
//      this lesson was being written. Neither collides: a1.18 authored no
//      preposition rows and a1.22 took `pays-et-nationalites`. Verified rather
//      than assumed, because a1.17's build was hit by exactly this and the
//      simple next-free guard does not catch a range landing INSIDE yours.
//
//      The consequence for a1.22's handover is recorded at the foot of
//      prepositions-lesson.ts: it is written, and it is a note to a lesson that
//      already exists rather than a note to one that does not.
//
// ── Where the two new headwords go, and why it is four rather than two ──────
//
// The brief asks for a decision and says plainly it is a decision. Measured:
//
//     prepositions-essentielles   fr.a1.* ONLY. fr.sons.* slice: 0 rows.
//     à, sur                      fr.sons.accents.034 / .035
//     dans, sous, devant, derrière, entre, chez   fr.sons.mots-essentiels.*
//     chez                        also fr.sons.muettes.009
//     près, loin, à côté de, en face de           ABSENT in every form
//
// Every place-preposition headword in the course already lives in
// `mots-essentiels`, eight of them, and `flashhub-coverage.test.ts` keys decks
// on `fr` PER THEME. Opening a `fr.sons.prepositions-essentielles.*` slice would
// invent a fifth id convention for this theme AND create a second, separate
// flashcard deck holding only this lesson's few cards, while the eight
// prepositions the learner already owns sat in another one. So:
//
//     THE NEW HEADWORDS GO IN fr.sons.mots-essentiels, FROM .171.
//
// Verified free: mots-essentiels runs .001 to .170 with NO gaps and closes at
// `sauf`, so .171 is past the end rather than inside somebody's block.
//
// ══════════════════════════════════════════════════════════════════════════
//  AND THE HEADWORD GAP IS TWO, NOT FOUR. THE BRIEF'S "GENUINELY ABSENT AND
//  SAFE TO AUTHOR: près AND loin" IS THE LARGEST THING THIS BUILD MEASURED
//  WRONG, AND IT WAS CAUGHT BY THE BATCH'S DUPLICATE GUARD RATHER THAN BY
//  READING ANYTHING.
// ══════════════════════════════════════════════════════════════════════════
//
// The reasoning that got there was sound and the conclusion was still wrong.
// Authoring `près` as a BARE headword would contradict this lesson's own rule
// and its own test, because a flashcard reading `près` teaches `à côté la
// banque`. So the decision was to author the PHRASE forms with the `de` inside
// where it cannot be dropped. Correct, and it turns out somebody already did:
//
//     fr.sons.mots-essentiels.030   près de    PREH DUH
//     fr.sons.mots-essentiels.031   loin de    LWAN DUH
//
// The probe reported `près` and `loin` ABSENT IN EVERY ARTICLE FORM and that
// was TRUE and MISLEADING: it searched the bare word and the article forms
// (`le près`, `la près`, …), which is the right search for a NOUN and the wrong
// one for a preposition, whose stored form is the phrase. The same shape that
// broke the weather brief, arriving from the other direction: there the corpus
// stored `le vent` and the brief searched `vent`; here the corpus stores
// `près de` and the probe searched `près`.
//
// And there is a whole paradigm behind them. `fr.sons.mots-essentiels` already
// holds ELEVEN compound prepositions ending in `de`, authored as a block:
//
//     .030 près de        .146 hors de         .149 au bord de    .154 à gauche de
//     .031 loin de        .147 au-dessus de    .150 au fond de    .158 le long de
//                         .148 au-dessous de   .153 à droite de   .159 autour de
//
// This is a1.17's finding repeating exactly: somebody authored a paradigm and
// stopped short, and the brief that followed reported the gap as the whole set.
//
// SO THE REAL GAP IS TWO WORDS, verified by an accent-folded exact-match search
// over every non-sentence row in the database:
//
//     à côté de     0 rows anywhere      AUTHORED at .171
//     en face de    0 rows anywhere      AUTHORED at .172
//     près de       3 rows               IMPORTED from .030
//     loin de       2 rows               IMPORTED from .031
//
// (`à côté` WITHOUT its de exists at fr.sons.adverbes-essentiels.126, which is
// the adverb "nearby, next door" rather than the preposition, and is a
// different word doing a different job. It is not imported.)
//
// The two authored rows follow the block's existing respelling convention,
// ALL CAPS with ` DUH` for the de, so the four read as one paradigm rather than
// as two authors' habits.
//
// IMPORTING .031 ALSO FOUND A FIFTH REPAIR the brief could not have listed,
// because it did not know the row existed: `LWAN DUH` closes the nasal of
// `loin` with a plain n and the shared checker flags it. See REPAIRS.
//
// A SIDE EFFECT WORTH NAMING: all four are multi-word and carry no `gender`, so
// none of them joins a1.03's `endingPopulation`. Measured through the REAL
// function before and after: 1,846 rows either way. a1.11 moved a1.03's printed
// `-e` figure by authoring gendered single-word nouns and this lesson authors
// none at all. Every noun it needs (`la boîte`, `le chat`, `la table`, `le lit`,
// `la porte`, `le canapé`, `le journal`, `le bureau`) is already published with
// a gender, so there was nothing to withdraw.
//
// ── The dictée, and the measurement that decided it ────────────────────────
//
// `DICTEE_LETTER_LIMIT` is 16 and `dicteeMode` switches to WORD mode above it.
// Word mode hands the learner each whole word as a pre-spelled tile, so a
// `sur` tile and a `sous` tile are both on the board and the learner orders
// them rather than choosing one. That is the entire thing this lesson teaches,
// handed over for free.
//
// EVERY SINGLE IMPORTABLE ROW IS IN WORD MODE. Measured across twelve
// candidates, the shortest published spatial sentence in the theme is 18
// letters and the longest 27. Not one can be a dictée target without degrading
// into tile-tapping.
//
// So the six dictée targets are AUTHORED SHORT, every one checked through the
// real `dicteeMode` in the batch, the merge and the test:
//
//     Il est sur le lit.       13     Je suis au bureau.     14
//     Il est sous le lit.      14     Je suis à la maison.   15
//     Je suis au parc.         12     C'est à côté du parc.  15
//
// Between them: the sur/sous pair the ear fails on, `au` twice, `à la` NOT
// contracting, and one line carrying the `de` rule and the contraction at once.
//
// ── The other measurement that changed the build: voiceflash ───────────────
//
// Spoken practice draws ONLY from items carrying `voiceflash`. NOT ONE
// published row in this theme carries it. Fourteen candidates checked against
// Postgres: eight are `dictation` only, six are `sentence,flashcard,review`.
// A speak mission built on imported rows would render cards the learner cannot
// be scored on, which looks like a broken mission rather than a missing tag.
//
// So SPEAK_IDS is authored rows only, all of them `être`-based, which also
// satisfies the lesson's rule that no production surface asks the learner to
// conjugate anything but être and avoir. The corpus's spatial sentences are
// full of `dort`, `range`, `cache`, `monte` and `se trouve`, and every one of
// those is READING EXPOSURE here and never a production target.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

/* ─── What the screens display ─────────────────────────────────────────────
 *
 * Keyed by the French form, because many of these are display strings rather
 * than corpus rows: a table cell exists here as text long before it is a card.
 */

export type Display = { fr: string; ipa: string; respell: string; en: string };

const D = (fr: string, ipa: string, res: string, en: string): Display =>
  ({ fr, ipa: `/${ipa}/`, respell: `[${res}]`, en });

export const RESPELL: Record<string, Display> = {
  /* The five the canDo names, plus à. Three carry a nasal vowel and close it
   * with the superscript. `dans` and `devant` ship today with a plain n and are
   * repaired by this lesson; see REPAIRS. */
  sur: D('sur', 'syʁ', 'SÜR', 'on, on top of'),
  sous: D('sous', 'su', 'SOO', 'under, underneath'),
  dans: D('dans', 'dɑ̃', 'DAHⁿ', 'in, inside'),
  devant: D('devant', 'də.vɑ̃', 'duh-VAHⁿ', 'in front of'),
  derrière: D('derrière', 'dɛ.ʁjɛʁ', 'deh-RYEHR', 'behind'),
  à: D('à', 'a', 'AH', 'to, at, in'),

  /* The two the lesson shows and does not drill. `entre` is the hand-verified
   * repair; see REPAIRS for why no shared checker can defend it. */
  entre: D('entre', 'ɑ̃tʁ', 'AHⁿ-truh', 'between'),
  chez: D('chez', 'ʃe', 'SHAY', "at someone's place"),

  /* The four compound prepositions, every one carrying its `de` INSIDE the
   * headword because dropping it is the error this lesson exists to prevent.
   *
   * TWO OF THESE ARE IMPORTED AND TWO ARE AUTHORED, which is the opposite of
   * what the brief predicted. See the header. The respellings follow the
   * convention the existing block already uses (ALL CAPS, ` DUH` for the de),
   * so the four read as one paradigm rather than as two authors' habits. */
  'près de': D('près de', 'pʁɛ də', 'PREH DUH', 'near, close to'),
  'loin de': D('loin de', 'lwɛ̃ də', 'LWAHⁿ DUH', 'far from'),
  'à côté de': D('à côté de', 'a ko.te də', 'AH koh-TAY DUH', 'next to, beside'),
  'en face de': D('en face de', 'ɑ̃ fas də', 'AHⁿ FAHSS DUH', 'opposite, across from'),

  /* The contraction. Two of the four do not change, and the two that do not are
   * as important as the two that do. */
  au: D('au', 'o', 'OH', 'to the, at the (before a le word)'),
  aux: D('aux', 'o', 'OH', 'to the, at the (before a plural word)'),
  'à la': D('à la', 'a la', 'ah LA', 'to the, at the (before a la word)'),
  "à l'": D("à l'", 'a l', 'ah L', 'to the, at the (before a vowel)'),
  du: D('du', 'dy', 'DÜ', 'of the (before a le word)'),
  des: D('des', 'de', 'DAY', 'of the (before a plural word)'),
  'de la': D('de la', 'də la', 'duh LA', 'of the (before a la word)'),
  "de l'": D("de l'", 'də l', 'duh L', 'of the (before a vowel)'),

  /* The nouns the minimal set runs on. Both are published headwords carrying an
   * explicit gender; neither is authored here. The respellings are the values
   * the shipped rows already carry. */
  'la boîte': D('la boîte', 'la bwat', 'lah BWAHT', 'the box'),
  'le chat': D('le chat', 'lə ʃa', 'luh SHAH', 'the cat'),
  'le lit': D('le lit', 'lə li', 'luh LEE', 'the bed'),
  'le journal': D('le journal', 'lə ʒuʁ.nal', 'luh zhoor-NAHL', 'the newspaper'),
};

/** The bracketed respelling for a display string, as the cards print it. */
export function sub(fr: string): string {
  const d = RESPELL[fr];
  if (!d) throw new Error(`prepositions-corpus: no respelling for "${fr}"`);
  return d.respell;
}

/** The IPA for a display string. */
export function ipaOf(fr: string): string {
  const d = RESPELL[fr];
  if (!d) throw new Error(`prepositions-corpus: no ipa for "${fr}"`);
  return d.ipa;
}

/** The gloss for a display string. */
export function glossOf(fr: string): string {
  const d = RESPELL[fr];
  if (!d) throw new Error(`prepositions-corpus: no gloss for "${fr}"`);
  return d.en;
}

/* ─── The two shapes, which are the lesson ─────────────────────────────────
 *
 * The whole teaching reduces to one distinction the learner has to make in the
 * moment of speaking, and every preposition in the course falls on one side of
 * it. This table is the source both the sorting drill and the contrast table
 * read from, so neither can drift from the other.                            */

export type Shape = 'direct' | 'de';

export type Preposition = {
  fr: string;
  shape: Shape;
  en: string;
  /** The headword row this preposition is served by, whether imported or
   *  authored here. Every one is verified to exist. */
  headwordId: string;
  /** Authored by THIS lesson, or already published and imported. */
  origin: 'authored' | 'imported';
};

export const PREPOSITIONS: Preposition[] = [
  // The five the canDo names. All five are published headwords already and NONE
  // is re-authored: flashhub-coverage.test.ts treats two rows sharing an `fr` in
  // one theme as one card served twice.
  { fr: 'sur', shape: 'direct', en: 'on', headwordId: 'fr.sons.mots-essentiels.014', origin: 'imported' },
  { fr: 'sous', shape: 'direct', en: 'under', headwordId: 'fr.sons.mots-essentiels.015', origin: 'imported' },
  { fr: 'dans', shape: 'direct', en: 'in', headwordId: 'fr.sons.mots-essentiels.013', origin: 'imported' },
  { fr: 'devant', shape: 'direct', en: 'in front of', headwordId: 'fr.sons.mots-essentiels.021', origin: 'imported' },
  { fr: 'derrière', shape: 'direct', en: 'behind', headwordId: 'fr.sons.mots-essentiels.022', origin: 'imported' },
  // The bounded sixth. See the note on the canDo mismatch in prepositions-terms.ts.
  { fr: 'à', shape: 'direct', en: 'to, at', headwordId: 'fr.sons.accents.034', origin: 'imported' },
  // Shown, not drilled. `entre` needs a pair and `chez` needs a person, and both
  // are named in the roundup as the two the learner will meet next.
  { fr: 'entre', shape: 'direct', en: 'between', headwordId: 'fr.sons.mots-essentiels.020', origin: 'imported' },
  { fr: 'chez', shape: 'direct', en: "at someone's place", headwordId: 'fr.sons.muettes.009', origin: 'imported' },
  // The four that end in `de`. TWO ALREADY EXIST in the very block this lesson
  // was about to extend, and finding that is the largest correction of this
  // build. See the header. Only the two that are genuinely absent are authored.
  { fr: 'près de', shape: 'de', en: 'near', headwordId: 'fr.sons.mots-essentiels.030', origin: 'imported' },
  { fr: 'loin de', shape: 'de', en: 'far from', headwordId: 'fr.sons.mots-essentiels.031', origin: 'imported' },
  { fr: 'à côté de', shape: 'de', en: 'next to', headwordId: 'fr.sons.mots-essentiels.171', origin: 'authored' },
  { fr: 'en face de', shape: 'de', en: 'opposite', headwordId: 'fr.sons.mots-essentiels.172', origin: 'authored' },
];

export const DIRECT = PREPOSITIONS.filter((p) => p.shape === 'direct');
export const DE_TAKING = PREPOSITIONS.filter((p) => p.shape === 'de');

/** The five the canDo names, by name, so the test can assert each individually
 *  rather than counting. */
export const THE_FIVE = ['sur', 'sous', 'dans', 'devant', 'derrière'] as const;

/** The sixth, taken deliberately and reported. */
export const THE_SIXTH = 'à';

/* ─── The authored rows ────────────────────────────────────────────────────
 *
 * ids continue fr.a1.prepositions-essentielles.121, confirmed by the probe. The
 * gaps at .102 and .119 are GAPS, not free slots: ids are the SRS key and a
 * renumber silently reassigns somebody's review history.
 *
 * Every row is built on ÊTRE, which is one of the learner's only two verbs, and
 * every row carries `voiceflash`, because not one published row in this theme
 * does and the speak mission has to come from somewhere.                      */

const SFVRD: Item['drills'] = ['sentence', 'flashcard', 'voiceflash', 'review', 'dictation'];
const SFVR: Item['drills'] = ['sentence', 'flashcard', 'voiceflash', 'review'];

export type PrepSentence = Omit<Item, 'drills'> & {
  drills: Item['drills'];
  /** Which job this row does, so a section names a ROLE and the tranches slice
   *  the same roles rather than restating a list of ids. */
  role: 'minimal' | 'compound' | 'contraction' | 'de-article' | 'short' | 'scene';
};

const S = (
  n: number,
  fr: string,
  en: string,
  ipa: string,
  role: PrepSentence['role'],
  drills: Item['drills'] = SFVR,
  notes?: string,
): PrepSentence => ({
  id: `fr.a1.prepositions-essentielles.${String(n).padStart(3, '0')}`,
  kind: 'sentence',
  level: 'a1',
  theme: 'prepositions-essentielles',
  fr,
  en,
  ipa: `/${ipa}/`,
  drills,
  // `tags` and `version` are REQUIRED by validateItem, not optional niceties:
  // it rejects a row carrying neither. Every shipped batch sets them.
  tags: [],
  version: 1,
  role,
  ...(notes ? { notes } : {}),
});

/* THE HERO SET. One cat, one box, five positions, and ONLY THE PREPOSITION
 * MOVES. The brief asks for `Le chat est sur la chaise / sous la chaise / ...`
 * and a chair cannot hold the fifth: nothing is IN a chair. A box takes all
 * five, so the column is genuinely minimal rather than minimal-except-one, and
 * a learner reading down it sees one word change five times and nothing else.
 *
 * `la boîte` and `le chat` are both published headwords with an explicit
 * gender. Neither is authored. */
const MINIMAL: PrepSentence[] = [
  S(121, 'Le chat est sur la boîte.', 'The cat is on the box.', 'lə ʃa ɛ syʁ la bwat', 'minimal'),
  S(122, 'Le chat est sous la boîte.', 'The cat is under the box.', 'lə ʃa ɛ su la bwat', 'minimal'),
  S(123, 'Le chat est dans la boîte.', 'The cat is in the box.', 'lə ʃa ɛ dɑ̃ la bwat', 'minimal'),
  S(124, 'Le chat est devant la boîte.', 'The cat is in front of the box.', 'lə ʃa ɛ də.vɑ̃ la bwat', 'minimal'),
  S(125, 'Le chat est derrière la boîte.', 'The cat is behind the box.', 'lə ʃa ɛ dɛ.ʁjɛʁ la bwat', 'minimal'),
];

/* THE SAME FRAME, TAKING A PHRASE. Identical subject, identical reference
 * point, and the only difference from the five above is that the preposition
 * is now several words and the last one is `de`. That identity is the contrast
 * the lesson is built on, and it only works because the frame does not move. */
const COMPOUND: PrepSentence[] = [
  S(126, 'Le chat est à côté de la boîte.', 'The cat is next to the box.', 'lə ʃa ɛ a ko.te də la bwat', 'compound'),
  S(127, 'Le chat est près de la boîte.', 'The cat is near the box.', 'lə ʃa ɛ pʁɛ də la bwat', 'compound'),
  S(128, 'Le chat est loin de la boîte.', 'The cat is far from the box.', 'lə ʃa ɛ lwɛ̃ də la bwat', 'compound'),
  S(129, 'Le chat est en face de la boîte.', 'The cat is opposite the box.', 'lə ʃa ɛ ɑ̃ fas də la bwat', 'compound'),
];

/* À AND ITS CONTRACTION. Four rows, and TWO OF THEM DO NOT CHANGE. A
 * contraction taught without its non-contracting cases is one the learner
 * over-applies, and « à le bureau » and « à les enfants » are not the error:
 * the error is believing every article contracts and writing « à l'la ». */
const CONTRACTION: PrepSentence[] = [
  S(130, 'Je suis au bureau.', 'I am at the office.', 'ʒə sɥi o by.ʁo', 'contraction', SFVRD,
    'à + le = au. The two words are gone and one has replaced them.'),
  S(131, 'Je suis aux toilettes.', 'I am in the bathroom.', 'ʒə sɥi o twa.lɛt', 'contraction', SFVR,
    'à + les = aux. Said out loud it is the same sound as au; the difference is written.'),
  S(132, 'Je suis à la maison.', 'I am at home.', 'ʒə sɥi a la mɛ.zɔ̃', 'contraction', SFVRD,
    'à + la does NOT contract. Both words stay, exactly as written.'),
  S(133, "Je suis à l'école.", 'I am at school.', 'ʒə sɥi a le.kɔl', 'contraction', SFVR,
    "à + l' does NOT contract either. The l' is the noun's own article, already shortened."),
];

/* THE SAME FOUR FOR `de`, WHICH THE COMPOUND PREPOSITIONS NEED. The frame is
 * the cat and the same four articles, so the two tables can be read against
 * each other rather than learned twice. */
const DE_ARTICLE: PrepSentence[] = [
  S(134, 'Le chat est à côté du lit.', 'The cat is next to the bed.', 'lə ʃa ɛ a ko.te dy li', 'de-article', SFVR,
    `de + le = du. This is the du ${unitRef('a1.29')} already named, arriving with a place behind it.`),
  S(135, 'Le chat est près des arbres.', 'The cat is near the trees.', 'lə ʃa ɛ pʁɛ de.zaʁbʁ', 'de-article', SFVR,
    `de + les = des. The same two letters as the ${unitRef('a1.11')} des, doing a different job.`),
  S(136, 'Le chat est à côté de la porte.', 'The cat is next to the door.', 'lə ʃa ɛ a ko.te də la pɔʁt', 'de-article', SFVR,
    'de + la does NOT contract.'),
  S(137, "Le chat est à côté de l'arbre.", 'The cat is next to the tree.', 'lə ʃa ɛ a ko.te də laʁbʁ', 'de-article', SFVR,
    "de + l' does NOT contract."),
];

/* THE DICTÉE, AND EVERY TARGET WAS CHOSEN BY MEASUREMENT RATHER THAN TASTE.
 *
 * All six are at or under DICTEE_LETTER_LIMIT (16), so all six stay in LETTERS
 * mode and the learner writes the preposition rather than tapping a tile that
 * already says it. Verified through the real `dicteeMode` in the batch, the
 * merge and the test. Not one importable row could do this job: the shortest
 * published spatial sentence in the theme is 18 letters. */
const SHORT: PrepSentence[] = [
  S(138, 'Il est sur le lit.', 'It is on the bed.', 'il ɛ syʁ lə li', 'short', SFVRD),
  S(139, 'Il est sous le lit.', 'It is under the bed.', 'il ɛ su lə li', 'short', SFVRD),
  S(140, 'Je suis au parc.', 'I am at the park.', 'ʒə sɥi o paʁk', 'short', SFVRD),
  S(141, "C'est à côté du parc.", 'It is next to the park.', 'sɛ.ta ko.te dy paʁk', 'short', SFVRD,
    'The de rule and the contraction in one line of fifteen letters.'),
];

/* THE SCENE'S OWN PAIR. The keys are on the newspaper or under it, and the two
 * sentences differ by one syllable. Authored rather than imported because the
 * scene needs BOTH halves and the corpus has neither. */
const SCENE: PrepSentence[] = [
  S(142, 'Les clés sont sur le journal.', 'The keys are on the newspaper.', 'le kle sɔ̃ syʁ lə ʒuʁ.nal', 'scene'),
  S(143, 'Les clés sont sous le journal.', 'The keys are under the newspaper.', 'le kle sɔ̃ su lə ʒuʁ.nal', 'scene'),
];

export const AUTHORED_SENTENCES: PrepSentence[] = [
  ...MINIMAL, ...COMPOUND, ...CONTRACTION, ...DE_ARTICLE, ...SHORT, ...SCENE,
];

/** Rows by the job they do, so a section names a ROLE. */
export const roleIds = (role: PrepSentence['role']): string[] =>
  AUTHORED_SENTENCES.filter((s) => s.role === role).map((s) => s.id);

export const frOf = (id: string): string => {
  const row = AUTHORED_SENTENCES.find((s) => s.id === id);
  if (row) return row.fr;
  const imp = IMPORTED.find((s) => s.id === id);
  if (imp) return imp.fr;
  throw new Error(`prepositions-corpus: no fr for ${id}`);
};

export const enOf = (id: string): string => {
  const row = AUTHORED_SENTENCES.find((s) => s.id === id);
  if (row) return row.en;
  const imp = IMPORTED.find((s) => s.id === id);
  if (imp) return imp.en;
  throw new Error(`prepositions-corpus: no en for ${id}`);
};

/* ─── The authored headwords ───────────────────────────────────────────────
 *
 * Four compound prepositions, as PHRASES, at fr.sons.mots-essentiels.171-.174.
 * See the header for why they are phrases and why they go here.
 *
 * None carries `gender` and every one contains a space, so none joins a1.03's
 * endingPopulation. Verified through the real function: 1,846 rows before and
 * 1,846 after. */

export type PrepWord = Omit<Item, 'drills'> & { drills: Item['drills'] };

const W = (n: number, fr: string, en: string, notes: string): PrepWord => {
  const d = RESPELL[fr];
  if (!d) throw new Error(`prepositions-corpus: authoring "${fr}" with no respelling`);
  return {
    id: `fr.sons.mots-essentiels.${String(n).padStart(3, '0')}`,
    kind: 'word',
    // `level: 'sons'`, NOT 'a1', and this is enforced rather than stylistic:
    // validateItem reads the level segment out of the id and rejects a row whose
    // `level` field disagrees with it. An `fr.sons.*` id is a `sons` row. The
    // eight preposition headwords already sitting in this theme are the same,
    // which is the other half of why these four belong here.
    level: 'sons',
    theme: 'mots-essentiels',
    fr,
    en,
    ipa: d.ipa,
    // The stored respelling is unbracketed; the brackets are a display device.
    respell: d.respell.replace(/^\[|\]$/g, ''),
    notes,
    drills: ['flashcard', 'voiceflash', 'review'],
    tags: [],
    version: 1,
  };
};

/** TWO, not four. `près de` and `loin de` already exist at
 *  fr.sons.mots-essentiels.030 and .031, inside the compound-preposition block
 *  this lesson was about to extend. See the header: the brief's "genuinely
 *  absent and safe to author" is the largest thing this build measured wrong,
 *  and it was caught by the batch's flashhub duplicate guard rather than by any
 *  reading of the brief. */
export const AUTHORED_WORDS: PrepWord[] = [
  W(171, 'à côté de', 'next to, beside',
    'Three words, and the third is the one that gets dropped. À côté la banque is the most common thing an A1 learner says wrong here.'),
  W(172, 'en face de', 'opposite, across from',
    'The same shape again. Absent in every form: en face, en face de and en face du all return nothing as a headword.'),
];

/** The two this lesson SHOWS from the existing block rather than authoring.
 *  Named so the test can assert they are imported and not re-authored: a second
 *  row sharing an `fr` in one theme is one card served twice, which is exactly
 *  what `flashhub-coverage.test.ts` fails on. */
export const IMPORTED_COMPOUND_HEADWORDS = [
  'fr.sons.mots-essentiels.030', // près de
  'fr.sons.mots-essentiels.031', // loin de
];

export const AUTHORED_WORD_IDS: string[] = AUTHORED_WORDS.map((w) => w.id);
export const AUTHORED_SENTENCE_IDS: string[] = AUTHORED_SENTENCES.map((s) => s.id);

export function toItem(s: PrepSentence): Item {
  const { role, ...item } = s;
  return item as Item;
}

/* ─── What this lesson imports ─────────────────────────────────────────────
 *
 * Published rows shown but NOT authored, kept in prepositions-imported.ts with
 * the reading that qualified each one. Re-exported here so the lesson has a
 * single import site.                                                        */

export { IMPORTED, IMPORTED_SPATIAL, IMPORTED_COMPOUND, IMPORTED_CONTRACTION, IMPORTED_BOUNDED } from './prepositions-imported.ts';
import { IMPORTED } from './prepositions-imported.ts';
import { unitRef } from './_unit-ref.ts';

/* ─── The respelling repairs ───────────────────────────────────────────────
 *
 * Four rows, and the fourth is the one that matters.
 *
 * `dans` and `devant` close a nasal with a plain n. Both are caught by the
 * shared `hasPlainNasalFor`, both repairs pass it, and the test calls the real
 * function rather than restating the rule.
 *
 * `à` ships with TWO respellings in two themes, `A` and `AH`, which is a
 * conflict rather than a variant: one word, one sound, two answers. `AH` wins.
 * `A` alone reads as the English letter name, and every other single-vowel
 * respelling in the house style spells the sound out. `fr.sons.accents.034` is
 * `inSeed=Y` and belongs to sons.05 "Les accents", so this repair touches a
 * shipped lesson's row; sons-05-accents.test.ts was read first and asserts
 * nothing about this value.
 *
 * `entre` IS THE ONE NO CHECKER CAN DEFEND. It is invariant §3's documented
 * word-internal blind spot firing on a real shipped row, and it is worse than
 * the brief states. Measured against the real function:
 *
 *     hasPlainNasalFor('entre', 'AHNTR')      -> false   NOT flagged, and WRONG
 *     hasPlainNasalFor('entre', 'AHⁿTR')      -> false   NOT flagged, and right
 *     hasPlainNasalFor('entre', 'AHⁿ-truh')   -> false   NOT flagged, and right
 *
 * The checker returns the same answer for the broken form and both repairs,
 * because its test needs the n or m to END A TOKEN and `entre`'s nasal closes
 * inside the word. So the shared checker CANNOT distinguish them and no amount
 * of calling it will defend this row.
 *
 * Hand verification: `entre` is /ɑ̃tʁ/. The `en` spelling is a single nasal
 * vowel with NO n sound behind it, exactly as in `dans` and `devant`, and the
 * t and r that follow are a consonant cluster. `AHNTR` tells an English reader
 * to sound the n, which produces /ɑn.tʁ/ and is a different word shape. The
 * shipped form is wrong.
 *
 * The repair is `AHⁿ-truh` rather than `AHⁿTR`: the house style hyphenates
 * syllables and capitalises the stressed one, and `TR` with no vowel is not a
 * syllable an English reader can pronounce. `truh` gives the schwa that a
 * French speaker actually produces at the end of `entre`.
 *
 * a1-21-prepositions.test.ts asserts this value BY NAME, in addition to calling
 * the shared checker, so a later author's validator-passing "fix" goes red. */

export type RespellRepair = {
  id: string;
  fr: string;
  /** What ships today. */
  was: string;
  /** What this lesson writes. */
  now: string;
  why: string;
  /** True when the shared checker can see the fault. False for `entre` and for
   *  the `à` conflict, both of which the test must assert by hand. */
  sharedCheckerSees: boolean;
};

export const REPAIRS: RespellRepair[] = [
  {
    id: 'fr.sons.mots-essentiels.013',
    fr: 'dans',
    was: 'DAHN',
    now: 'DAHⁿ',
    why: 'A plain n closing a nasal vowel. There is no n sound in dans at all.',
    sharedCheckerSees: true,
  },
  {
    id: 'fr.sons.mots-essentiels.021',
    fr: 'devant',
    was: 'duh-VAHN',
    now: 'duh-VAHⁿ',
    why: 'The same fault. The final syllable is a nasal vowel and nothing follows it.',
    sharedCheckerSees: true,
  },
  {
    id: 'fr.sons.accents.034',
    fr: 'à',
    was: 'A',
    now: 'AH',
    why: 'One word carrying two respellings in two themes, A here and AH in mots-essentiels. A conflict, not a variant. AH wins because A alone reads as the English letter name.',
    sharedCheckerSees: false,
  },
  {
    id: 'fr.sons.mots-essentiels.020',
    fr: 'entre',
    was: 'AHNTR',
    now: 'AHⁿ-truh',
    why: 'A WORD-INTERNAL nasal the shared checker cannot see: it returns false for the broken form and for both repairs alike. Hand-verified. /ɑ̃tʁ/ has no n sound, and TR is not a syllable an English reader can say.',
    sharedCheckerSees: false,
  },
  {
    // FOUND BY IMPORTING RATHER THAN BY THE BRIEF. `loin de` was not on the
    // repair list because the brief believed the word did not exist. It does,
    // at fr.sons.mots-essentiels.031, and its respelling closes a nasal with a
    // plain n. This lesson displays the row, so it repairs it.
    id: 'fr.sons.mots-essentiels.031',
    fr: 'loin de',
    was: 'LWAN DUH',
    now: 'LWAHⁿ DUH',
    why: 'A plain n closing the nasal of loin, /lwɛ̃/. Caught by the shared checker once the row was found. The DUH is kept: it is the convention the whole compound-preposition block already uses.',
    sharedCheckerSees: true,
  },
];

/** Rows in the same block that are ALSO flagged and are deliberately NOT
 *  repaired here, because this lesson does not display them and a lesson that
 *  repairs rows it never shows is repairing them untested.
 *
 *  Reported for the next author rather than fixed:
 *
 *      fr.sons.mots-essentiels.150   au fond de    OH FOHN DUH   -> OH FOHⁿ DUH
 *      fr.sons.mots-essentiels.158   le long de    LUH LOHN DUH  -> LUH LOHⁿ DUH
 *
 *  Both measured FLAGGED by the real `hasPlainNasalFor` on 2026-08-07. */
export const FLAGGED_NOT_OURS: { id: string; fr: string; was: string; suggested: string }[] = [
  { id: 'fr.sons.mots-essentiels.150', fr: 'au fond de', was: 'OH FOHN DUH', suggested: 'OH FOHⁿ DUH' },
  { id: 'fr.sons.mots-essentiels.158', fr: 'le long de', was: 'LUH LOHN DUH', suggested: 'LUH LOHⁿ DUH' },
];

/** The repair that no shared checker can defend, named so the test can assert
 *  it by hand and so a later author cannot quietly revert it. */
export const ENTRE_REPAIR = REPAIRS.find((r) => r.fr === 'entre')!;
