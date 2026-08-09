// a1.03.l1 "Le genre des noms" — the ten endings the lesson teaches, measured.
//
// ── Why ten, and why not the one every course gives you ────────────────────
//
// Every beginner course teaches the same rule here: nouns ending in -e are
// feminine. Measured over this repo's own corpus it is right 70% of the time,
// across 873 nouns. A learner who applies it confidently is wrong about one
// noun in three, which is often enough to sound wrong in every second sentence
// and rarely enough that they never stop trusting it.
//
// The endings below are the ones nobody bothers to teach. Ten of them, 313
// nouns in this corpus, right 97 times in 100. That is about a sixth of the
// gendered single-word nouns the corpus holds, which is the size of the claim:
// the ending tells you, and it tells you about one noun in six. Everything else
// is storage, and the lesson says so rather than pretending otherwise.
//
// Five predict masculine and five predict feminine, deliberately. The corpus is
// 60/40 masculine to begin with, so a set chosen on frequency alone drifts
// masculine and teaches a bias on top of a rule.
//
// ── Every figure here is measured, none is typed twice ─────────────────────
//
// `accuracy` and `items` are the numbers the CARDS state, and they are checked
// against seed.json by measureEnding() in three places before they can ship:
// the authoring batch, the merge script, and a1-03-genre.test.ts. Reproduce
// them yourself before building on them; the module is
// ealch-v2/src/content/gender.logic.ts and it explains the population it counts
// over, which is narrower than "every row with a gender field" for three
// reasons worth reading.
//
// ── Two corpora, and why the numbers describe the smaller one ──────────────
//
// seed.json is a CUT of the database, and it is a big cut: Postgres holds about
// four times as many gendered nouns. The two disagree, sometimes sharply, and
// the disagreement is not noise.
//
// The figures printed on the cards describe the SEED, because the seed is what
// the app bundles and therefore the set of nouns a learner can actually meet
// here, and because it is the only population CI can measure on every run.
//
// But a rule that is only true of the cut is an artifact, not a rule. So the
// authoring batch applies a second, stronger test against the full database:
// every taught ending must predict the SAME gender there and still clear the
// 90% floor. Two candidates failed exactly that check and were cut from an
// earlier draft of this file, which is the whole reason the check exists:
//
//   -eur   93% in the seed, 86% in the database over 303 nouns. It reads as a
//          reliable rule in the cut and is not one. Dropped.
//   -oire  90% in the seed, 61% in the database over 54 nouns. The seed happens
//          to hold l'armoire, la baignoire and la poire and almost none of the
//          masculine ones (le laboratoire, le territoire, le répertoire).
//          Dropped, and the lesson is better for it: `armoire` is the word the
//          opening scene catches the learner on, and it now has no rule behind
//          it at all, which is exactly the point the lesson is making.
//
// The three dismissed endings are held to the mirror of that: under the floor
// in BOTH populations. -on is the sharpest case, at 60% masculine in the seed
// and 74% FEMININE in the database. An ending that changes its mind between two
// samples of the same language is the definition of no information.
//
// Every noun below carries a `fr` and an `en` beside its id. Those are DISPLAY
// copy, so the lesson can render without reading the corpus, and every one of
// them is asserted character for character against the corpus row it names. A
// display string that drifts from the item it claims to show is the same class
// of failure as a dangling id, and it is harder to see.
//
// ── `breaks` is not an appendix ────────────────────────────────────────────
//
// -eau is 92% masculine and the 8% is l'eau and la peau, two of the first
// nouns a beginner meets. A rule taught without its counterexample is a rule
// the learner will trust in exactly the wrong place, so every rule here ships
// one and the test refuses a rule that does not.
//
// Two kinds, and the distinction is real rather than cosmetic:
//
//   'exception'  a noun that HAS this ending and takes the other gender.
//                la page against -age, le squelette against -ette. These are
//                the 4% to 10% the accuracy figure is measuring.
//
//   'lookalike'  a noun a learner would file under this rule and should not,
//                because the ending is not actually there. le mur is not -ure,
//                la dent is not -ment, le poisson is not -tion.
//
// Five of the ten have no exception in this corpus at all. Inventing one for
// them would be folklore, and shipping them bare would be the failure above, so
// they carry the lookalike instead: what really goes wrong with a rule that has
// no exceptions is a learner applying it to a word it never covered. The test
// enforces the split in both directions, so a rule measured below 100% cannot
// quietly downgrade its counterexample to a lookalike.
//
// ── One hero noun per rule, and the rest as display copy ───────────────────
//
// `example` is a single corpus noun. It is the word the group drill puts on a
// 56pt card, the word the preview table shows, and the word the SRS releases,
// and it is one rather than three because this lesson already releases more
// than forty cards, and a second and third worked example per rule would have
// pushed that past sixty without teaching anything the first does not.
//
// `sheetExamples` are display strings on the reference sheet, which is layer
// 'deep' and is where a learner arrives with a specific question. They carry
// their articles like everything else here, and the test checks that they do.

/** A corpus noun, with the copy the lesson draws and the id it draws it from.
 *
 *  Both halves are needed. The id is what the SRS, the drills and the density
 *  validator resolve; the copy is what the card shows. Keeping them together is
 *  what lets one test assert they still agree. */
export type Noun = { id: string; fr: string; en: string };

/** One taught ending. */
export type EndingRule = {
  /** Stable handle, used by the sheet, the drills and the test. */
  id: string;
  /** The ending, bare: 'eau'. Matched against the noun with its article
   *  stripped, so `l'eau` counts and `une part de gâteau` does not. */
  ending: string;
  predicts: 'm' | 'f';
  /** Percent of this corpus the rule gets right, rounded as the card states it. */
  accuracy: number;
  /** How many nouns in the corpus carry this ending. */
  items: number;
  /** The article the rule resolves to, which is what the learner actually
   *  needs. Naming the gender alone would teach the label rather than the
   *  choice. */
  article: 'un' | 'une';
  /** The one corpus noun this rule is taught on. */
  example: Noun;
  /** More of the same, for the reference sheet only. Display strings, each
   *  written with its article. */
  sheetExamples: string[];
  /** What breaks it, or what is mistaken for it. See the header. */
  breaks: (Noun & { kind: 'exception' | 'lookalike' })[];
  /** The one line the card says. Kept under about 110 characters: a longer
   *  string is cut on a phone, which was found on a1.02 on a device. */
  line: string;
};

/* ─── The five that predict masculine ──────────────────────────────────────*/

const MASCULINE: EndingRule[] = [
  {
    id: 'ier',
    ending: 'ier',
    predicts: 'm',
    accuracy: 100,
    items: 55,
    article: 'un',
    example: { id: 'fr.a1.ecole.003', fr: 'le cahier', en: 'notebook' },
    sheetExamples: ['le papier', 'le quartier', 'l’escalier', 'un policier', 'un pompier'],
    // The feminine of the same job, one letter longer. This is what actually
    // goes wrong with -ier, and it goes wrong constantly.
    breaks: [{ id: 'fr.a1.marche.029', fr: 'la caissière', en: 'the cashier', kind: 'lookalike' }],
    line: 'Fifty-five nouns, no exception here. The feminine of a job is -ière, which is a different word.',
  },
  {
    id: 'ment',
    ending: 'ment',
    predicts: 'm',
    accuracy: 100,
    items: 20,
    article: 'un',
    // Elided on the card, deliberately: the ending is the only thing that gives
    // the article back, which is the act after next, previewed here on a word
    // the learner will actually use.
    example: { id: 'fr.a1.maison.077', fr: "l'appartement", en: 'the apartment' },
    sheetExamples: ['l’argent', 'le compartiment', 'l’entraînement', 'le piment'],
    // -ent on its own is not the rule, and la dent is the proof.
    breaks: [{ id: 'fr.a1.corps.021', fr: 'la dent', en: 'the tooth', kind: 'lookalike' }],
    line: 'No exception either. It is -ment and not -ent: la dent ends in -ent and takes une.',
  },
  {
    id: 'et',
    ending: 'et',
    predicts: 'm',
    accuracy: 100,
    items: 29,
    article: 'un',
    example: { id: 'fr.a1.deplacements.031', fr: 'le ticket', en: 'the ticket' },
    sheetExamples: ['le billet', 'le poulet', 'le guichet', 'le bracelet', 'le carnet'],
    // -et and -ette are two letters apart and go opposite ways, which is the
    // thing that actually goes wrong here. The lookalike is the other rule.
    breaks: [{ id: 'fr.a1.cafe.012', fr: 'une baguette', en: 'a baguette', kind: 'lookalike' }],
    line: 'Twenty-nine nouns, no exception. Two letters more and it flips: -ette takes une.',
  },
  {
    id: 'eau',
    ending: 'eau',
    predicts: 'm',
    accuracy: 92,
    items: 37,
    article: 'un',
    example: { id: 'fr.a1.ecole.032', fr: 'le tableau', en: 'the board' },
    sheetExamples: ['le bureau', 'le gâteau', 'le bateau', 'le couteau', 'le cadeau'],
    // The two most useful counterexamples in the whole lesson, and both are
    // words a beginner meets in week one.
    breaks: [
      { id: 'fr.a1.cuisine.010', fr: "l'eau", en: 'the water', kind: 'exception' },
      { id: 'fr.a1.corps.043', fr: 'la peau', en: 'the skin', kind: 'exception' },
    ],
    line: 'Right thirty-four times in thirty-seven. The ones it misses are l’eau and la peau.',
  },
  {
    id: 'age',
    ending: 'age',
    predicts: 'm',
    accuracy: 90,
    items: 29,
    article: 'un',
    example: { id: 'fr.a1.cuisine.011', fr: 'le fromage', en: 'the cheese' },
    sheetExamples: ['le voyage', 'le garage', 'le visage', 'le mariage', 'le bagage'],
    breaks: [
      { id: 'fr.a1.ecole.087', fr: 'la page', en: 'the page', kind: 'exception' },
      { id: 'fr.a1.animaux.194', fr: 'la cage', en: 'the cage', kind: 'exception' },
    ],
    line: 'The weakest of the ten, and still nine in ten. La page and la cage are the ones to store.',
  },
];

/* ─── The five that predict feminine ───────────────────────────────────────*/

const FEMININE: EndingRule[] = [
  {
    id: 'tion',
    ending: 'tion',
    predicts: 'f',
    accuracy: 100,
    items: 36,
    article: 'une',
    example: { id: 'fr.a1.ecole.046', fr: 'la question', en: 'the question' },
    sheetExamples: ['la direction', 'la natation', 'la récréation', 'la destination'],
    // -on predicts nothing at 60%. -tion is the reliable slice inside it, and
    // saying which slice is the whole value of the rule.
    breaks: [{ id: 'fr.a1.cuisine.016', fr: 'le poisson', en: 'the fish', kind: 'lookalike' }],
    line: 'Thirty-six nouns, no exception. It is -tion that works and not -on: le poisson takes un.',
  },
  {
    id: 'ure',
    ending: 'ure',
    predicts: 'f',
    accuracy: 100,
    items: 24,
    article: 'une',
    example: { id: 'fr.a1.deplacements.018', fr: 'la voiture', en: 'the car' },
    sheetExamples: ['la confiture', 'la peinture', 'la ceinture', 'la couverture'],
    // One silent letter is the entire difference, which is exactly the kind of
    // thing a reading eye skips.
    breaks: [{ id: 'fr.a1.maison.020', fr: 'le mur', en: 'the wall', kind: 'lookalike' }],
    line: 'No exception. The final e does the work: le mur ends in -ur and takes un.',
  },
  {
    id: 'ette',
    ending: 'ette',
    predicts: 'f',
    accuracy: 97,
    items: 37,
    article: 'une',
    example: { id: 'fr.a1.cafe.012', fr: 'une baguette', en: 'a baguette' },
    sheetExamples: ['une assiette', 'la fourchette', 'la serviette', 'la courgette'],
    breaks: [{ id: 'fr.a1.corps.073', fr: 'le squelette', en: 'skeleton', kind: 'exception' }],
    line: 'Wrong once in thirty-seven, on le squelette. Its partner -et goes the other way: le ticket.',
  },
  {
    id: 'ine',
    ending: 'ine',
    predicts: 'f',
    accuracy: 96,
    items: 28,
    article: 'une',
    example: { id: 'fr.a1.cuisine.001', fr: 'la cuisine', en: 'the kitchen' },
    sheetExamples: ['la piscine', 'la cantine', 'la farine', 'la cousine'],
    breaks: [{ id: 'fr.a1.metiers.165', fr: 'un capitaine', en: 'a captain', kind: 'exception' }],
    line: 'Twenty-seven of twenty-eight. The one that breaks it is a job: un capitaine.',
  },
  {
    id: 'ise',
    ending: 'ise',
    predicts: 'f',
    accuracy: 94,
    items: 18,
    article: 'une',
    example: { id: 'fr.a1.maison.016', fr: 'la chaise', en: 'the chair' },
    sheetExamples: ['la valise', 'la fraise', 'la cerise', 'la framboise', 'l’ardoise'],
    breaks: [{ id: 'fr.a1.deplacements.077', fr: 'le pare-brise', en: 'windshield, windscreen', kind: 'exception' }],
    line: 'Seventeen of eighteen. The one that breaks it is a car part: le pare-brise.',
  },
];

/** The ten, in the order the lesson teaches them: masculine set, then feminine.
 *
 *  The order matters to the sheet and to the two group drills, which take five
 *  each. Reordering this array reorders both, which is the point of it being
 *  one array. */
export const ENDING_RULES: EndingRule[] = [...MASCULINE, ...FEMININE];

export const MASCULINE_RULES = MASCULINE;
export const FEMININE_RULES = FEMININE;

/* ─── The endings the lesson tells the learner to ignore ───────────────────
 *
 * Stated as data for the same reason the ten are: these are claims about the
 * corpus and the test measures them. An ending that quietly climbed to 90%
 * should stop being taught as worthless.
 *
 * -e is the one every course gives. -on and -é look like rules and are not:
 * both are close enough to a coin toss that applying them costs more than
 * having no rule at all, because a rule you half trust stops you looking the
 * word up.                                                                  */

export type WorthlessEnding = {
  ending: string;
  accuracy: number;
  items: number;
  /** Two nouns with this ending, one of each gender. Both are week-one words,
   *  so the coin toss is shown on vocabulary the learner already owns. */
  bothWays: [Noun, Noun];
  line: string;
};

export const WORTHLESS_ENDINGS: WorthlessEnding[] = [
  {
    ending: 'e',
    accuracy: 70,
    // 871 until a1.11 authored `une chambre` and `une avocate` into the shared
    // corpus on 2026-08-05, and 873 until a1.22 IMPORTED twenty-four country and
    // nationality headwords on 2026-08-07. Seven of those twenty-four end in -e:
    // France, Belgique, Espagne, Allemagne and Italie, which the rule gets
    // right, plus `le Mexique` and `belge`, which are new counterexamples.
    //
    // 881 since a1.23 CARRIED `la bière` into the seed on 2026-08-07. That
    // lesson's two themes are inside SEED_CUT.themes, but eight rows it serves
    // are not and had to be carried; nine of its eleven new rows join this
    // population. The accuracy did not move. See ealch-admin/scripts/
    // _nourriture_endings_moved.ts.
    //
    // The accuracy did not move: 70% before and 70% after. Nor did any of the
    // ten endings this lesson teaches in its FLOW. Six of the twenty-seven
    // printed figures moved and all six were counts, modelled through the real
    // measureEnding before a1.22 wrote anything (ealch-admin/scripts/
    // _pays_genre_impact.ts). This is unavoidable rather than careless: every
    // feminine country ends in -e, which is the rule a1.22 is built on.
    //
    // This figure is MEASURED (a1-03-genre.test.ts recomputes it from the seed
    // on every run), so a corpus edit anywhere in the app moves it and the card
    // has to move with it.
    items: 881,
    bothWays: [
      { id: 'fr.a1.ecole.029', fr: 'le livre', en: 'the book' },
      { id: 'fr.a1.maison.015', fr: 'la table', en: 'the table' },
    ],
    line: 'The rule every course gives you. Right seven times in ten, across eight hundred nouns.',
  },
  {
    ending: 'on',
    accuracy: 60,
    // 142 until a1.22 imported `le Japon` on 2026-08-07. The accuracy did not
    // move and the ending is still dismissed for being under the floor.
    items: 143,
    bothWays: [
      { id: 'fr.a1.cuisine.016', fr: 'le poisson', en: 'the fish' },
      { id: 'fr.a1.maison.001', fr: 'la maison', en: 'the house' },
    ],
    line: 'Le poisson against la maison. Barely better than guessing, and it looks like a rule.',
  },
  {
    ending: 'é',
    // 52% and 50 until a1.23 carried `le café` (fr.a1.au-restaurant.081) and
    // `le thé` (.082) into the seed on 2026-08-07. Both are masculine and the
    // ending predicts masculine, so the accuracy rose two points. Still far
    // under the 90% floor, so the lesson still dismisses it, which is the only
    // thing this figure is used to claim.
    accuracy: 54,
    items: 52,
    bothWays: [
      { id: 'fr.a1.routines.103', fr: 'le café', en: 'the coffee' },
      { id: 'fr.a1.maison.022', fr: 'la clé', en: 'the key' },
    ],
    line: 'Le café against la clé. A coin toss, so treat it as no information at all.',
  },
];

/* ─── The rest of the endings, for the reference sheet only ────────────────
 *
 * These are real and they are measured, and they are NOT in the flow. A learner
 * meeting thirty endings in one sitting learns none of them, and most of these
 * cover so few nouns that the ten in the flow will carry a beginner further.
 * They live at layer 'deep', which is where somebody arrives with a specific
 * word in hand and a specific question about it.
 *
 * The floor for inclusion is 90%: anything below that is not a rule worth
 * writing down, and the two that sit just under it (-elle at 87% and -ie at
 * 85%) are deliberately absent rather than shown with a warning. The test
 * measures each of these too, so an ending that drifts under the floor fails
 * the build rather than staying on a sheet nobody re-checks.                */

export type SheetEnding = { ending: string; predicts: 'm' | 'f'; accuracy: number; items: number };

// FOUR OF THESE COUNTS MOVED ON 2026-08-07 when a1.22 imported twenty-four
// country and nationality headwords. Every move is a count: not one accuracy and
// not one predicted gender changed, and none of the four came near the 90%
// floor. -in gained américain and mexicain, -ien gained canadien and italien,
// -al gained Sénégal and Portugal, -ance gained France. Modelled through the
// real measureEnding before anything was written, in
// ealch-admin/scripts/_pays_genre_impact.ts.
export const MORE_ENDINGS: SheetEnding[] = [
  // 43 until a1.23 carried `le vin` (fr.a1.au-restaurant.007) on 2026-08-07.
  // Masculine, and the ending predicts masculine, so the accuracy held at 98%.
  { ending: 'in', predicts: 'm', accuracy: 98, items: 44 },
  { ending: 'ent', predicts: 'm', accuracy: 96, items: 28 },
  { ending: 'ard', predicts: 'm', accuracy: 100, items: 17 },
  { ending: 'ant', predicts: 'm', accuracy: 100, items: 17 },
  { ending: 'oir', predicts: 'm', accuracy: 100, items: 16 },
  { ending: 'ot', predicts: 'm', accuracy: 100, items: 16 },
  { ending: 'ien', predicts: 'm', accuracy: 100, items: 15 },
  { ending: 'al', predicts: 'm', accuracy: 100, items: 11 },
  { ending: 'ail', predicts: 'm', accuracy: 100, items: 7 },
  { ending: 'ité', predicts: 'f', accuracy: 93, items: 15 },
  { ending: 'ance', predicts: 'f', accuracy: 100, items: 10 },
  { ending: 'sion', predicts: 'f', accuracy: 100, items: 7 },
  { ending: 'esse', predicts: 'f', accuracy: 100, items: 7 },
  { ending: 'euse', predicts: 'f', accuracy: 100, items: 6 },
];

/** The floor an ending has to clear to be written down at all, in the flow or
 *  on the sheet. Below this a rule costs more than it pays, because a rule you
 *  half trust stops you looking the word up. */
export const RULE_FLOOR = 90;

/* ─── Derived totals, so no card states a figure this file does not hold ───*/

/** How many nouns the ten endings cover between them. */
export const ENDINGS_COVERED = ENDING_RULES.reduce((n, r) => n + r.items, 0);

/** How often the ten are right, taken together, as a whole percent. */
export const ENDINGS_ACCURACY = Math.round(
  (ENDING_RULES.reduce((n, r) => n + Math.round((r.accuracy / 100) * r.items), 0) / ENDINGS_COVERED) * 100,
);

/** The hero noun of each rule, in teaching order. Released to the SRS. */
export const ENDING_EXAMPLES: Noun[] = ENDING_RULES.map((r) => r.example);

/** Every noun the ten rules are broken or shadowed by. Also released: an
 *  exception a learner is shown and never drilled on is an exception they will
 *  meet again cold. */
export const ENDING_BREAKS: (Noun & { kind: 'exception' | 'lookalike' })[] = ENDING_RULES.flatMap((r) => r.breaks);

/** The six nouns the worthless endings are demonstrated on. */
export const WORTHLESS_NOUNS: Noun[] = WORTHLESS_ENDINGS.flatMap((w) => w.bothWays);

/** Every corpus id this file names, deduplicated. `le poisson` is named twice,
 *  once as what -tion is not and once as half of the -on coin toss, and it is
 *  one card either way. */
export const ENDING_ITEM_IDS = [
  ...new Set([...ENDING_EXAMPLES, ...ENDING_BREAKS, ...WORTHLESS_NOUNS].map((n) => n.id)),
];
