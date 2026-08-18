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
    // 56 since 2026-08-09: 'jours-et-mois' and 'heure-et-date' joined
    // SEED_CUT.themes and one -ier noun entered the seed with them. Still 100%.
    // 58 since a2.32 « La technologie » CARRIED `un fichier` and `un clavier`
    // on 2026-08-16. Both masculine, so the accuracy did not move. a2.32 is the
    // first unit to pull a whole theme across: `internet` held 336 published
    // rows and ZERO in the seed, so all 99 of its carries are new to this file.
    // 57 since 2026-08-18: four orphan rows in `sons.jours-et-mois`,
    // referenced by no lesson, were removed from the seed by the merges that
    // own them. The accuracy did not move.
    items: 57,
    article: 'un',
    example: { id: 'fr.a1.ecole.003', fr: 'le cahier', en: 'notebook' },
    sheetExamples: ['le papier', 'le quartier', 'l’escalier', 'un policier', 'un pompier'],
    // The feminine of the same job, one letter longer. This is what actually
    // goes wrong with -ier, and it goes wrong constantly.
    breaks: [{ id: 'fr.a1.marche.029', fr: 'la caissière', en: 'the cashier', kind: 'lookalike' }],
    // THE LINE WAS STALE BEFORE a2.32 TOUCHED IT: it read "Fifty-five" while
    // the pinned count had been 56 since 2026-08-09. `a1-03-genre.test.ts`
    // compares the CONSTANTS to `seed.items` and never reads the rendered body,
    // so a spelled-out figure can drift for a week with every gate green. Same
    // defect a2.31 fixed on -tion and a2.30's merge script names.
    line: 'Fifty-seven nouns, no exception here. The feminine of a job is -ière, which is a different word.',
  },
  {
    id: 'ment',
    ending: 'ment',
    predicts: 'm',
    accuracy: 100,
    // 20 until since a2.27 « Les transports » CARRIED `le stationnement` into the seed on
    // 2026-08-16. Zero of that unit's 106 AUTHORED rows join this population;
    // every one of the 25 joiners is an IMPORT, which is a1.23's finding again.
    // The accuracy did not move.
    // 21 until a2.28 « Chez le médecin » CARRIED `le médicament` into the
    // seed on 2026-08-16. Zero of that unit's 34 AUTHORED rows join this
    // population; all 18 joiners are IMPORTS. The accuracy did not move.
    items: 22,
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
    // 29 until a2.32 « La technologie » CARRIED `Internet` and `un onglet` on
    // 2026-08-16. Both masculine, so the accuracy did not move.
    items: 31,
    article: 'un',
    example: { id: 'fr.a1.deplacements.031', fr: 'le ticket', en: 'the ticket' },
    sheetExamples: ['le billet', 'le poulet', 'le guichet', 'le bracelet', 'le carnet'],
    // -et and -ette are two letters apart and go opposite ways, which is the
    // thing that actually goes wrong here. The lookalike is the other rule.
    breaks: [{ id: 'fr.a1.cafe.012', fr: 'une baguette', en: 'a baguette', kind: 'lookalike' }],
    line: 'Thirty-one nouns, no exception. Two letters more and it flips: -ette takes une.',
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
    // 90 until a2.32 on 2026-08-16. See the note on `items`: both joiners are
    // masculine, so this is the rare case where a carry makes a rule MORE true.
    accuracy: 91,
    // 29 until a2.29 « À l'hôtel » CARRIED `l'étage` into the seed on
    // 2026-08-16. ZERO of that unit's 59 AUTHORED rows join this population;
    // all 11 joiners are IMPORTS, which is a1.23's finding for the fourth time.
    // The accuracy did not move.
    // 32 since a2.32 « La technologie » CARRIED `un message` and AUTHORED
    // `le clavardage` on 2026-08-16. Both masculine, and the accuracy rose a
    // point. `le clavardage` is one of only four a2.32 rows that join this
    // population at all: 29 of its 33 joiners are carries.
    items: 32,
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
    // 36 until since a2.27 « Les transports » CARRIED `la direction` and `la station` into the seed on
    // 2026-08-16. Zero of that unit's 106 AUTHORED rows join this population;
    // every one of the 25 joiners is an IMPORT, which is a1.23's finding again.
    // The accuracy did not move.
    // 37 until a2.29 « À l'hôtel » CARRIED `la réception`, `la réservation` and `la climatisation` into the seed on
    // 2026-08-16. ZERO of that unit's 59 AUTHORED rows join this population;
    // all 11 joiners are IMPORTS, which is a1.23's finding for the fourth time.
    // The accuracy did not move.
    // 40 until a2.31 « L'école & les études » on 2026-08-16, which is the FIRST
    // unit in this band to move this population with an AUTHORED row rather
    // than only with carries: `une mention` is minted, and `une inscription`,
    // `une session` and `une attestation` are carried. Four joiners, three of
    // them imports. The accuracy did not move.
    // 45 since a2.32 « La technologie » CARRIED `l'application` and
    // `une notification` on 2026-08-16. Both feminine, so the accuracy did not
    // move. Back to a carries-only move: neither joiner is authored.
    items: 45,
    article: 'une',
    example: { id: 'fr.a1.ecole.046', fr: 'la question', en: 'the question' },
    sheetExamples: ['la direction', 'la natation', 'la récréation', 'la destination'],
    // -on predicts nothing at 60%. -tion is the reliable slice inside it, and
    // saying which slice is the whole value of the rule.
    breaks: [{ id: 'fr.a1.cuisine.016', fr: 'le poisson', en: 'the fish', kind: 'lookalike' }],
    // THE LINE WAS STALE AND NOTHING FAILED. It read "Thirty-six nouns" while
    // the pinned count had already moved to 40 across a2.27 and a2.29, because
    // `a1-03-genre.test.ts` compares the CONSTANTS to `seed.items` and never
    // reads the rendered body. a2.30's merge script names this exact defect.
    // Corrected here to the live figure, and the version moves with it.
    // 43 -> 45 with a2.32, 2026-08-16.
    line: 'Forty-five nouns, no exception. It is -tion that works and not -on: le poisson takes un.',
  },
  {
    id: 'ure',
    ending: 'ure',
    predicts: 'f',
    accuracy: 100,
    // 26 since 2026-08-09, same cause as -ier above. Still 100%.
    //
    // 28 since a2.30 CARRIED `une professeure` (fr.a2.examens-et-diplomes.058)
    // and `une ingénieure` (fr.b2.decouvertes.152) into the seed on 2026-08-16.
    // Neither was authored: a2.30 owns the band's feminisation rule and its
    // first clause is IMPORT BEFORE YOU MINT, so both are existing rows pulled
    // in by the merge because the lesson references them. Both end -eure, which
    // ends -ure. The accuracy did not move and both are feminine, so the rule
    // is unaffected in every respect except its count.
    items: 28,
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
    // 37 until a2.29 « À l'hôtel » CARRIED `la serviette` into the seed on
    // 2026-08-16. ZERO of that unit's 59 AUTHORED rows join this population;
    // all 11 joiners are IMPORTS, which is a1.23's finding for the fourth time.
    // The accuracy did not move.
    // 39 since a2.32 « La technologie » CARRIED `une tablette` on 2026-08-16.
    // Feminine, so the accuracy did not move.
    items: 39,
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
    // 97% and 29 since 2026-08-09, same cause as -ier above. The one noun the
    // two themes added is feminine, so the accuracy rose a point rather than
    // fell — the only taught ending whose percentage moved at all.
    accuracy: 97,
    // 29 until a2.28 « Chez le médecin » CARRIED `la migraine` into the
    // seed on 2026-08-16. Zero of that unit's 34 AUTHORED rows join this
    // population; all 18 joiners are IMPORTS. The accuracy did not move.
    // 30 until a2.31 « L'école & les études » CARRIED `la médecine` on 2026-08-16.
    // The accuracy did not move.
    // 30 since 2026-08-18: four orphan rows in `sons.jours-et-mois`,
    // referenced by no lesson, were removed from the seed by the merges that
    // own them. The accuracy did not move.
    items: 30,
    article: 'une',
    example: { id: 'fr.a1.cuisine.001', fr: 'la cuisine', en: 'the kitchen' },
    sheetExamples: ['la piscine', 'la cantine', 'la farine', 'la cousine'],
    breaks: [{ id: 'fr.a1.metiers.165', fr: 'un capitaine', en: 'a captain', kind: 'exception' }],
    line: 'Thirty of thirty-one. The one that breaks it is a job: un capitaine.',
  },
  {
    id: 'ise',
    ending: 'ise',
    predicts: 'f',
    // 94 until a2.31 CARRIED `une maîtrise` on 2026-08-16, which is feminine, so
    // the accuracy rose a point.
    accuracy: 95,
    items: 19,
    article: 'une',
    example: { id: 'fr.a1.maison.016', fr: 'la chaise', en: 'the chair' },
    sheetExamples: ['la valise', 'la fraise', 'la cerise', 'la framboise', 'l’ardoise'],
    breaks: [{ id: 'fr.a1.deplacements.077', fr: 'le pare-brise', en: 'windshield, windscreen', kind: 'exception' }],
    line: 'Eighteen of nineteen. The one that breaks it is a car part: le pare-brise.',
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
    // 70 until a2.30 on 2026-08-16. See the note above `items` below.
    accuracy: 71,
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
    // 904 since 2026-08-09, and this one moved for a reason none of the others
    // did: nothing was authored, imported or carried. `jours-et-mois` and
    // `heure-et-date` joined SEED_CUT.themes, so 730 rows that had always been
    // in Postgres entered the SEED for the first time, and 23 of them end in -e.
    //
    // Worth sitting with, because it is the sharpest example of the trap: this
    // population is the SEED, not the corpus. The nouns were always there and
    // the app could always drill them; all that changed is which of them ship
    // inside the binary, which is a packaging decision made in
    // seed-cut.config.ts by someone thinking about offline users. It moved a
    // number printed on a card. Any future change to the cut will move it again.
    //
    // The accuracy did not move: 70% before, 70% after.
    //
    // This figure is MEASURED (a1-03-genre.test.ts recomputes it from the seed
    // on every run), so a corpus edit anywhere in the app moves it and the card
    // has to move with it.
    //
    // 905 since 2026-08-15, and it moved by ONE ROW: a2.07 « Au restaurant »
    // published `fr.a1.au-restaurant.010` « le pourboire », a gendered
    // single-word noun in a theme inside SEED_CUT.themes. Invariants §5 calls
    // that shape radioactive and it is: one row, nine red tests across the
    // suite, and a number on this card that stopped being true.
    //
    // WHAT WAS DECIDED, AND WHY IT IS NOT A WITHDRAWAL. Invariants §5 says
    // "withdraw rather than argue", and that is the right default when a build
    // is about to add a row it does not need. `le pourboire` is not that: it is
    // ordinary restaurant vocabulary that a2.07 exists to teach, its gender is
    // real, and the population is the SEED rather than the corpus. So the row
    // stays and the card moves, which is what the paragraph above already says
    // has to happen. The accuracy did not move: 70% before, 70% after, and no
    // other ending moved at all — measured through the real measureEnding
    // across all thirteen.
    //
    // 912 since 2026-08-15, and it moved by SEVEN ROWS in one step: a2.26
    // « Les courses & l'argent » carried its imported shop and money nouns
    // into the seed (la caisse, la vendeuse, la balance, la pièce, l'article,
    // l'heure de fermeture, la monnaie and the rest). Every one is an IMPORT
    // rather than a new row, which is a1.23's finding: a CARRY moves this
    // population even when an authoring does not, and an authored-only guard
    // cannot see it.
    //
    // a2.26 pruned three carries whose only effect was here (le billet, une
    // réduction, la promotion) because it did not need them. It kept these,
    // because a shopping lesson that cannot name la caisse or la vendeuse is
    // not a shopping lesson. Same judgement a2.07 made about `le pourboire`.
    //
    // The accuracy did not move: 70% before, 70% after. Four other counts moved
    // with it and none of their accuracies did either, so every rule this
    // lesson teaches says exactly what it said before.
    // 912 until since a2.27 « Les transports » CARRIED thirteen landmark and station nouns into the seed on
    // 2026-08-16. Zero of that unit's 106 AUTHORED rows join this population;
    // every one of the 25 joiners is an IMPORT, which is a1.23's finding again.
    // The accuracy did not move.
    // 919 until a2.28 « Chez le médecin » CARRIED nine symptom and profession nouns into the
    // seed on 2026-08-16. Zero of that unit's 34 AUTHORED rows join this
    // population; all 18 joiners are IMPORTS. The accuracy did not move.
    // 928 until a2.29 « À l'hôtel » CARRIED four hotel nouns into the seed on
    // 2026-08-16. ZERO of that unit's 59 AUTHORED rows join this population;
    // all 11 joiners are IMPORTS, which is a1.23's finding for the fourth time.
    // The accuracy did not move.
    //
    // 933 since the same day: `scripts/repair-flashcard-reachability.ts` gave
    // `fr.a2.hebergement.053` « la douche » the flashcard drill it had never
    // carried, and a2.29's merge then carried it into the seed. A REPAIR to a
    // drill array moved a1.03's printed count, which is the carry finding one
    // step further out: it was not an authoring, and it was not even an import
    // the lesson chose — it was a row becoming reachable.
    // 946 since a2.30 landed on 2026-08-16: eight MINTED feminine job titles
    // (coiffeuse, traductrice, informaticienne, ouvrière, mécanicienne,
    // pâtissière, jardinière, factrice) plus five CARRIED ones (pharmacienne,
    // infirmière, employée, professeure, ingénieure). Every one ends in -e.
    // THE ACCURACY MOVED, 70 -> 71, and this is the only pinned figure in this
    // file that a2.30 changed by more than a count: thirteen new rows are all
    // feminine, which nudges a bucket the lesson calls worthless very slightly
    // more feminine. It is still 19 points under the 90% floor, so it stays
    // correctly filed as worthless and the lesson's claim about it is unchanged.
    // 946 until a2.31, which added six: one MINTED (`une mention`) and five
    // CARRIED. Still far under the 90% floor, so the bucket stays correctly
    // filed as worthless and the lesson's claim about it is unchanged.
    // 961 since a2.32 « La technologie » on 2026-08-16, which added NINE, the
    // largest single move this bucket has taken from one unit in the band. Two
    // are authored (`la baladodiffusion`, `le clavardage`) and seven carried.
    // The accuracy did not move: 71% before and after. Still 19 points under
    // the floor, so the bucket stays correctly filed as worthless and the
    // lesson's claim about it is unchanged.
    // 960 since 2026-08-18: four orphan rows in `sons.jours-et-mois`,
    // referenced by no lesson, were removed from the seed by the merges that
    // own them. The accuracy did not move.
    items: 960,
    bothWays: [
      { id: 'fr.a1.ecole.029', fr: 'le livre', en: 'the book' },
      { id: 'fr.a1.maison.015', fr: 'la table', en: 'the table' },
    ],
    // AN EIGHTH STALE COPY, found by `a1-03-derived-figures.test.ts` on its
    // first run. The sweep that preceded it fixed seven and missed this one,
    // which is the argument for the test rather than for another sweep.
    // Interpolated below, in WORTHLESS_LINE, so it cannot be the ninth.
    line: 'The rule every course gives you. Right seven times in ten, across eight hundred nouns.',
  },
  {
    ending: 'on',
    // 58 until a2.32 on 2026-08-16. See the note above `items`: four feminine
    // joiners against an ending that predicts masculine.
    accuracy: 56,
    // 142 until a1.22 imported `le Japon` on 2026-08-07. The accuracy did not
    // move and the ending is still dismissed for being under the floor.
    // 142 until a1.22 imported `le Japon`, 144 since a2.26 carried its shop
    // nouns on 2026-08-15. The accuracy did not move either time.
    // 144 until since a2.27 « Les transports » CARRIED `le stationnement` into the seed on
    // 2026-08-16. Zero of that unit's 106 AUTHORED rows join this population;
    // every one of the 25 joiners is an IMPORT, which is a1.23's finding again.
    // The accuracy did not move.
    // 145 until a2.28 « Chez le médecin » CARRIED `le frisson` into the
    // seed on 2026-08-16. Zero of that unit's 34 AUTHORED rows join this
    // population; all 18 joiners are IMPORTS. The accuracy did not move.
    // 146 until a2.29 « À l'hôtel » CARRIED `la réception`, `la réservation` and `la climatisation` into the seed on
    // 2026-08-16. ZERO of that unit's 59 AUTHORED rows join this population;
    // all 11 joiners are IMPORTS, which is a1.23's finding for the fourth time.
    // All three are feminine and the ending predicts masculine, so the accuracy
    // fell one point. Still far under the floor, so the dismissal is unchanged.
    // 149 until a2.31, which added four: `une mention` MINTED plus
    // `une inscription`, `une session` and `une attestation` CARRIED. All four
    // are feminine and the ending predicts masculine, so the accuracy fell one
    // more point. Still far under the floor, so the dismissal is unchanged.
    // 157 since a2.32 « La technologie » on 2026-08-16: `une connexion`,
    // `l'application` and `une notification` CARRIED, plus `la baladodiffusion`
    // AUTHORED. All four are feminine and the ending predicts masculine, so the
    // accuracy fell TWO points, which is the largest single move this ending has
    // taken in the band. Still far under the floor, so the dismissal is
    // unchanged, and the reason is worth keeping: the -on that a technology
    // vocabulary actually produces is -tion and -xion, which is the reliable
    // FEMININE slice, so every unit like this one drives -on further from the
    // masculine reading a learner would guess.
    items: 157,
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
    // 54 since 2026-08-09: the two themes added to SEED_CUT.themes brought two
    // more -é nouns into the seed. Accuracy held at 54%, still far under the
    // floor, so the lesson's dismissal of this ending is unchanged.
    // 54 until a2.29 « À l'hôtel » CARRIED `la clé` into the seed on
    // 2026-08-16. ZERO of that unit's 59 AUTHORED rows join this population;
    // all 11 joiners are IMPORTS, which is a1.23's finding for the fourth time.
    // It is feminine and the ending predicts masculine, so the accuracy fell one
    // point. Still far under the floor, so the lesson's dismissal is unchanged.
    accuracy: 53,
    items: 55,
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
  // -in, -ent, -ant and -ité below moved on 2026-08-09 when 'jours-et-mois' and
  // 'heure-et-date' joined SEED_CUT.themes. Counts only; -ent and -ité each
  // gained a point of accuracy, neither crossed a threshold, no prediction
  // flipped. See the note on -e in WORTHLESS_ENDINGS for why a packaging
  // decision moves figures printed on cards.
  { ending: 'in', predicts: 'm', accuracy: 98, items: 46 },   // 45 until a2.27 carried `le chemin`, 2026-08-16
  { ending: 'ent', predicts: 'm', accuracy: 97, items: 31 },  // 29 until a2.27 carried `l'abonnement`; 31 since a2.28 carried `le médicament`, 2026-08-16
  { ending: 'ard', predicts: 'm', accuracy: 100, items: 18 }, // 17 until a2.27 carried `le retard`, 2026-08-16
  { ending: 'ant', predicts: 'm', accuracy: 100, items: 22 },   // 18 until a2.26, 2026-08-15; 22 since a2.32 carried `un identifiant` from BOTH internet and rp-technologie, 2026-08-16
  { ending: 'oir', predicts: 'm', accuracy: 100, items: 16 },
  { ending: 'ot', predicts: 'm', accuracy: 100, items: 16 },
  { ending: 'ien', predicts: 'm', accuracy: 100, items: 17 },   // 15 until a2.32 carried `un lien` and `un technicien`, 2026-08-16
  { ending: 'al', predicts: 'm', accuracy: 100, items: 12 },   // 11 until a2.26 authored le sous-total
  // 7 until a2.32 AUTHORED `un mail`, 2026-08-16. An English borrowing that
  // happens to end in the letters -ail and happens to be masculine, so the rule
  // holds by luck rather than by morphology. Worth knowing if it ever moves.
  { ending: 'ail', predicts: 'm', accuracy: 100, items: 8 },
  { ending: 'ité', predicts: 'f', accuracy: 94, items: 16 },
  { ending: 'ance', predicts: 'f', accuracy: 100, items: 11 },// 10 until a2.27 carried `la correspondance`, 2026-08-16
  { ending: 'sion', predicts: 'f', accuracy: 100, items: 9 },   // 8 until a2.32 AUTHORED `la baladodiffusion`, 2026-08-16
  { ending: 'esse', predicts: 'f', accuracy: 100, items: 7 },
  { ending: 'euse', predicts: 'f', accuracy: 100, items: 8 },    // 6 until a2.26 carried la vendeuse; 8 since a2.30 MINTED une coiffeuse, 2026-08-16
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

/* ══════════════════════════════════════════════════════════════════════════
 *  THE FIGURES, SPELLED OUT, DERIVED
 *
 *  Added 2026-08-17, after a2.32's merge moved eleven endings and the sweep
 *  that followed found SEVEN hand-typed copies of figures that had drifted:
 *  the -tion count appeared four times and two of them still said
 *  "thirty-six" against a live count of 45; -ier appeared three times saying
 *  "fifty-five" against 58, stale since 2026-08-09; and the -e bucket said
 *  "eight hundred" against 961.
 *
 *  `a1-03-genre.test.ts` compares the CONSTANTS to `seed.items` and reads no
 *  rendered body, so every one of those was green while being wrong. Six
 *  re-renders shipped that way.
 *
 *  THE FIX IS TO STOP TYPING THEM. A card that wants a figure interpolates it
 *  from the rule, so the count and the prose are one value and cannot
 *  disagree. `a1-03-derived-figures.test.ts` asserts no spelled-out numeral
 *  survives in the lesson body that contradicts a live count.
 * ══════════════════════════════════════════════════════════════════════════ */

const ONES = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
  'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
  'eighteen', 'nineteen'];
const TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

/** A cardinal, in words, in the register these cards use: `fifty-eight`,
 *  `forty-five`, `nine hundred`. Above 999 it gives up and returns digits,
 *  because no figure on these cards is ever that large and a wrong word is
 *  worse than a numeral. */
export function spellNumber(n: number): string {
  if (!Number.isFinite(n) || n < 0) return String(n);
  if (n < 20) return ONES[n];
  if (n < 100) {
    const t = TENS[Math.floor(n / 10)];
    const o = n % 10;
    return o ? `${t}-${ONES[o]}` : t;
  }
  if (n < 1000) {
    // The cards round the big bucket down rather than reading it out: "nine
    // hundred nouns" is what a learner needs from a 961-noun population, and
    // the exact figure is on the card that states the rule.
    //
    // FLOOR, not round. 961 rounds to ten hundred, which is not English.
    return `${ONES[Math.floor(n / 100)]} hundred`;
  }
  return String(n);
}

/** Capitalised, for a sentence opening: `Fifty-eight`. */
export const spellCap = (n: number): string => {
  const s = spellNumber(n);
  return s.charAt(0).toUpperCase() + s.slice(1);
};

/** Look a rule up by its ending, so a card interpolates a live count instead
 *  of restating one. Throws rather than returning undefined: a card that
 *  silently loses its figure is exactly the failure this exists to stop. */
export function ruleFor(ending: string): EndingRule {
  const r = ENDING_RULES.find((x) => x.ending === ending);
  if (!r) throw new Error(`no ENDING_RULE for -${ending}; a card is asking for a figure this file does not hold`);
  return r;
}

/** The same, for the dismissed buckets. */
export function worthlessFor(ending: string): WorthlessEnding {
  const w = WORTHLESS_ENDINGS.find((x) => x.ending === ending);
  if (!w) throw new Error(`no WORTHLESS_ENDING for -${ending}`);
  return w;
}

/** How many nouns carry an ending, in words. `COUNT('ier')` -> `fifty-eight`. */
export const COUNT = (ending: string): string => spellNumber(ruleFor(ending).items);
export const COUNT_CAP = (ending: string): string => spellCap(ruleFor(ending).items);
/** The same for a dismissed bucket, rounded the way the cards read it. */
export const WORTHLESS_COUNT = (ending: string): string => spellNumber(worthlessFor(ending).items);

/* ── The one `line` that states a population, rebuilt from that population ──
 *
 * `line` is authored inside the array literals above, and those are evaluated
 * before `spellNumber` has its lookup tables, so the figure cannot be
 * interpolated where the string is written. It is rebuilt here instead, once,
 * at module load.
 *
 * Only the -e bucket needs it: it is the only dismissed ending whose card
 * states its own size, and it is the one that had been reading "eight hundred"
 * since the count passed 900. Every other figure on these cards is
 * interpolated at the point of use through COUNT() and COUNT_CAP().
 *
 * The nine ENDING_RULES lines are left as authored prose on purpose. Their
 * counts are checked against the seed by `a1-03-genre.test.ts` and their
 * spelled-out figures by `a1-03-derived-figures.test.ts`, so a drift is caught
 * rather than silently rendered — and their wording carries teaching that a
 * template would flatten ("The weakest of the ten, and still nine in ten"). */
for (const w of WORTHLESS_ENDINGS) {
  if (w.ending !== 'e') continue;
  w.line = `The rule every course gives you. Right seven times in ten, across ${spellNumber(w.items)} nouns.`;
}
