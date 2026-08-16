// a2.26.l1 « Les courses & l'argent » — the corpus, the constants and the decisions.
// Trail seq 25, the SECOND unit of the A2 situations band (seq 24 to 31).
//
// ════════════════════════════════════════════════════════════════════════════
//  WHAT THE PROMPT, THE DESIGN AND THE COLLATION GOT WRONG, MEASURED 2026-08-15
// ════════════════════════════════════════════════════════════════════════════
//
// Doctrine §F asks for this header. The prompt flagged every figure it carried
// as UNVERIFIED and asked for each to be re-measured. Most of them held. The
// failures are concentrated, again, in the documents that reasoned ABOUT a
// probe rather than running one, and in ONE DEFECT IN THE PROBE ITSELF.
//
//  1. « courses holds 164 published a2 rows, next free .168 » — TRUE, exactly.
//     Also confirmed: argent-quotidien a2 = 70 (next free .071), marche = 343
//     published / 343 in seed, nombres = 448 / 448, vetements = 181 a2
//     published / 0 in seed, quebec-et-francophonie a2 = 179 (next free .199).
//     The ledger's blocks all held. Nothing was renumbered.
//
//  2. « courses is thin, 5 rows » (collation §1.1) — FALSE, and already
//     corrected in `07-BAND-ID-LEDGER.md` §1 by a2.07. Postgres holds 316
//     across all levels, 164 at a2. The seed shows 5. This unit imports
//     heavily rather than authoring a noun inventory that exists.
//
//  3. « ça fait combien is 0 rows in 48,325 » — TRUE, and the strongest single
//     fact in the pre-flight. Confirmed against Postgres, not the seed:
//     0 published sentences contain it, and no headword or phrase carries it.
//     `ça vous fait`, `ça fera`, `et avec ceci`, `je vous rends` and
//     `vous avez la monnaie` are ALSO 0. The single most frequent utterance in
//     a French retail transaction does not exist in this corpus.
//
//  4. « THE CORPUS IS SILENT ON ASKING A PRICE » — FALSE, and this is the
//     prompt's sharpest miss. Two price questions are already published:
//
//       fr.a2.courses.007            Quel est le prix, s'il vous plaît ?
//       fr.a1.argent-quotidien.077   combien ça coûte        (kind: phrase)
//
//     Both are the LEARNER's, both are the taught-in-a-classroom register, and
//     neither is what is said at a till. That does not weaken the unit; it
//     sharpens it, and s05-yourside now teaches the contrast explicitly rather
//     than pretending the ground is empty. IMPORTED, not re-authored.
//
//  5. « nothing in the corpus covers change today » (the prompt, on s12) —
//     HALF FALSE, and the halves matter. The TOPIC is covered, three times,
//     always in the third person and never in the vendor's mouth:
//
//       fr.a1.argent-quotidien.017   Le vendeur me rend la monnaie.
//       fr.a2.courses.108            Le vendeur a compté la monnaie deux fois.
//       fr.a2.courses.137            Le vendeur m'a rendu la monnaie.
//
//     A learner who has met all three has still never heard « Je vous rends
//     deux euros soixante » said TO them. The gap is the grammatical person,
//     not the vocabulary, and that is a more precise statement of the band's
//     mandate than the prompt's.
//
//  6. THE VENDOR VOICE IS AT ZERO, WHICH IS LOWER THAN a2.07 FOUND. a2.07
//     hand-classified 7 of 346 au-restaurant rows (2.0%) as server-voice. The
//     same sweep over `courses` + `argent-quotidien` at a1 and a2 returns
//     FOUR second-person or interrogative rows and NOT ONE of them is the
//     vendor:
//
//       fr.a1.argent-quotidien.033   Tu peux me prêter dix euros ?      a friend
//       fr.a2.argent-quotidien.017   Est-ce que tu as payé le loyer ?   a friend
//       fr.a2.courses.007            Quel est le prix, s'il vous plaît ? the learner
//       fr.a2.courses.103            Où as-tu mis le reçu du magasin ?  a friend
//
//     Every one of the other 230 rows is a noun, an infinitive phrase, or a
//     declarative in the first or third person. **The cashier does not exist.**
//
//  7. « le dépanneur is ABSENT, safe to author » (this build's own pre-flight,
//     run with the prompt's own command) — FALSE, AND IT IS A DEFECT IN
//     `corpus:probe` RATHER THAN A MISREADING. `un dépanneur` is published at
//     `fr.a2.quebec-et-francophonie.031`. `probe-corpus.ts:131` read:
//
//         const forms = [w, ...ARTICLES.map((a) => (a.endsWith("'") ? a+w : a+w))];
//
//     It maps every article onto `w` AS PASSED and never strips one the caller
//     supplied, so `--words "le dépanneur"` probed `le dépanneur`,
//     `le le dépanneur`, `un le dépanneur` ... and never `un dépanneur`. The
//     ternary's two branches are identical, which is how it survived review.
//     The header's advice ("pass bare words") is sound and bare words did work
//     — but the A2 situations band's pre-flight commands, including this
//     unit's, all pass ARTICLED forms, because that is how the corpus stores
//     nouns. Six of this build's eight probed headwords were articled.
//
//     FIXED AT SOURCE in this commit, because seven more units run this script.
//     `le dépanneur` now resolves to `un dépanneur`. This is the same family as
//     the accent defect (a1.21) and the `--tokens` under-report (a2.12): a
//     false ABSENCE that reads as permission to author.
//
//     Consequence here: `un dépanneur` is IMPORTED. Only `magasiner` is
//     authored, and it is genuinely absent as a headword (the three rows the
//     --find sweep returned are two sentences and one b1 phrase,
//     `magasiner en ligne`).
//
//  8. « vetements: naming an itemId ships a blank card » (design §2.2) —
//     overruled by collation §1.2 on the mechanism, and MOOT here. 181 a2 rows
//     are published, so they are reachable and the seed cut is not the reason
//     to avoid them. This lesson names ZERO vetements ids anyway, for the
//     pedagogical reason in §C: the clothing shop is one SETTING, not a
//     teaching block. `la taille` and `la pointure` both already exist in
//     `vetements` and `rp-achats` and are NOT re-authored into `courses`.
//     `Vous avez ça en trente-huit ?` carries the size question without
//     needing either headword.
//
//  9. « argent-quotidien may be effectively empty, in which case put everything
//     in courses » (collation §5's fallback) — the fallback does NOT fire.
//     300 published rows, 70 at a2. Settled in ledger §2 before this build
//     started. The split holds and this unit takes a block in each.
//
// 10. « content_exam_tasks holds 2 rows » — irrelevant, as the prompt says.
//     Zero ExamTask rows and zero `Scenario.exam` values are authored, per
//     collation §1.12. The TEF/TCF/DELF mapping is in the build report.
//
// 11. THE HOUSE RESPELLING FOR « la monnaie » IS FIVE DIFFERENT STRINGS. The
//     word is published six times across six themes with five respellings:
//     `lah moh-NAY`, `lah moh-NEH`, `lah mo-NEH`, `mo-NAY`, `LAH moh-NEH`.
//     This build uses `mo-NEH` inside its own strings, which is `marche`'s and
//     is one of the two already in the seed. Not this unit's to reconcile;
//     named so the next author does not think they invented the problem.
//
// 12. A FIFTH `hasPlainNasalFor` FINDING, and it is about published rows rather
//     than this build's. Three rows this unit sits next to are flagged by the
//     real checker: `fr.a2.courses.015` « un reçu » `uhn ruh-SÜ`,
//     `fr.a2.quebec-et-francophonie.031` « un dépanneur » `uhn day-pah-NUHR`,
//     and both published `la pointure` rows (`pwan-TÜR`). All four are genuine
//     defects rather than blind spots: `uhn` and `pwan` really do close a nasal
//     with a plain n. They are IMPORTED, not authored, and this build does not
//     widen its scope to repair another lesson's respellings. Named for the
//     ticket.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

export const UNIT = {
  id: 'a2.26',
  seq: 25,
  level: 'a2' as const,
  track: 'a2',
  title: 'Shopping and Money',
  // Curly apostrophe (U+2019), quoted from the Postgres unit row rather than
  // retyped. The spine and the database agree byte for byte on this unit, which
  // they do NOT for the batch-1 and batch-2 A2 units. Re-probed 2026-08-15.
  sub: 'Les courses & l’argent',
  canDo: 'Can shop, ask a price, count change and complete a purchase',
  prereqUnitIds: ['a1.28'],
} as const;

export const LESSON_ID = 'a2.26.l1';

export const THEME = 'courses';
export const MONEY_THEME = 'argent-quotidien';
export const QC_THEME = 'quebec-et-francophonie';

/** Measured 2026-08-15 against Postgres, `pnpm corpus:probe --theme ...`. */
export const THEME_ROWS_BEFORE = 316;
export const MONEY_ROWS_BEFORE = 300;
export const THEME_A2_BEFORE = 164;
export const MONEY_A2_BEFORE = 70;
export const THEME_SEED_BEFORE = 5;
export const MONEY_SEED_BEFORE = 1;

/** Ledger §3. Non-overlapping, allocated from each theme's measured NEXT FREE. */
export const ID_FIRST = 168;
export const ID_LAST = 239;
export const MONEY_FIRST = 71;
export const MONEY_LAST = 100;
/** a2.07 took .197 and .198 in this theme. */
export const QC_FIRST = 199;
export const QC_LAST = 200;

export const C = (n: number) => `fr.a2.${THEME}.${String(n).padStart(3, '0')}`;
export const M = (n: number) => `fr.a2.${MONEY_THEME}.${String(n).padStart(3, '0')}`;
export const Q = (n: number) => `fr.a2.${QC_THEME}.${String(n).padStart(3, '0')}`;

// ════════════════════════════════════════════════════════════════════════════
//  §A. THE REPAIR MOVE IS NOT THIS UNIT'S. ZERO ROWS AUTHORED.
// ════════════════════════════════════════════════════════════════════════════
//
// Collation §1.6 and §C5: a2.07 owns the repair move, once, for all eight
// units. `04-REPAIR-MOVE-IDS.md` is the citation target and it exists, so
// a2.07 has landed and this unit builds against a2.07 AS SHIPPED.
//
// Verified 2026-08-15: all six read back from Postgres as `published`, in
// `au-restaurant`, contiguous, in face-cost order, each carrying
// flashcard + voiceflash + dictation + review.
//
// s11-repair names these by itemId and quotes a2.07 by unit id in prose. It
// authors nothing. `s12-sayit` from the design (a groupDrill producing the
// three rungs) is CUT: a card plus a dedicated production drill is re-teaching
// a neighbour's Owns, which doctrine §B.7 forbids. Production of the repair
// survives in the scenario's turn 8 and in quiz round 4, both of which were
// already in the design.
//
// NO DRILL KIND WAS ADDED TO ANY OF THE SIX. The set a2.07 froze already
// carries `voiceflash` (for the practice speak drill) and `dictation`, so this
// unit needed no mutation of another unit's rows. Recorded because the prompt
// asked for it either way.

export const REPAIR_IDS = [
  'fr.a2.au-restaurant.132', // rung 1  Pardon ?
  'fr.a2.au-restaurant.133', // rung 2  Vous pouvez répéter, s'il vous plaît ?
  'fr.a2.au-restaurant.134', // rung 3  Plus lentement, s'il vous plaît.
  'fr.a2.au-restaurant.135', // rung 4  Je n'ai pas bien compris.
  'fr.a2.au-restaurant.136', // rung 5  Qu'est-ce que ça veut dire ?
  'fr.a2.au-restaurant.137', // rung 6  Vous pouvez me l'écrire, s'il vous plaît ?
] as const;

export const REPAIR_UNIT = 'a2.07';

/** A repair `fr` must never appear as a `courses` or `argent-quotidien` row.
 *  The test asserts it by fold, so a later author cannot quietly duplicate the
 *  block into this theme. */
export const REPAIR_FR = [
  'Pardon ?',
  'Vous pouvez répéter, s\'il vous plaît ?',
  'Plus lentement, s\'il vous plaît.',
  'Je n\'ai pas bien compris.',
  'Qu\'est-ce que ça veut dire ?',
  'Vous pouvez me l\'écrire, s\'il vous plaît ?',
] as const;

// ════════════════════════════════════════════════════════════════════════════
//  §B. THE REFRAME
// ════════════════════════════════════════════════════════════════════════════

export const REFRAME = 'The number comes once. Asking again is part of the script.';

// Rejected, and why, per Doctrine §F:
//
//   "Currency, then the small number"   a1.28 §15's, verbatim in its card head.
//                                       Re-owning it is what §B.7 forbids.
//   "A price is one run"                a1.28 §15's TITLE. Same objection.
//   "Learn the shape, not the sum"      a1.27's reframe, verbatim.
//   "Wait for the till, not the label"  true, and it is the QUEBEC card only.
//                                       A reframe that describes one unscored
//                                       mission in three is the wrong size.
//   "Listen for ça fait, the number is  accurate and it is a cue, not a rule.
//    next"                              It also collapses to s09 alone.
//
// Doctrine §B.4 wants a rule the learner can run in the half-second before the
// number lands. This one is two clauses and the second is the one that does the
// work: it pre-authorises the repair, so the learner does not have to decide
// whether asking again is allowed while the queue waits.
//
// THE SECOND SENTENCE IS A CITATION, NOT A CLAIM. Asking again is a2.07's move.
// Every surface carrying the reframe also carries a `ref` to a2.07's material
// or names a2.07 by unit id, so the two units read as one rule.

export const PRICE_UNIT = 'a1.28';       // A Price Is One Run, and the label
export const NUMBERS_UNIT = 'a1.27';     // the seventies, eighties, nineties
export const CONTAINER_UNIT = 'a1.29';   // un kilo de, une tranche de
export const REGISTER_UNIT = 'a2.29';    // the politeness ladder, once, for all eight
export const MODAL_UNIT = 'a2.13';       // vouloir: je veux against je voudrais
export const RESTAURANT_UNIT = 'a2.07';  // the repair move, and l'addition

// ════════════════════════════════════════════════════════════════════════════
//  §C. WHAT THIS LESSON DOES NOT DO, AND WHOSE IT IS
// ════════════════════════════════════════════════════════════════════════════
//
//  the price shape      a1.28 §15 « A Price Is One Run », SHIPPED, and this
//                       unit's declared prereq. It already teaches that a price
//                       is the currency followed by a bare number, that there
//                       is no word for centimes in a shop, that no `et` joins
//                       the halves, and that the only clue the price has
//                       finished is that the speaker stops. QUOTED by unit id
//                       in s08-tail. Never re-taught.
//  the decimal comma    a1.28 §17 « What The Label Actually Says », five rows
//                       covering 1 234 vs 1.234, 1,25 vs 1.25, 124,80 € vs
//                       12 480. Taught. NO scored item in this lesson turns on
//                       it, and `fold()` could not grade one if it did.
//  the numbers          a1.27, seq 3. The seventies, eighties and nineties, and
//                       §17 already runs quatre-vingt-dix-neuf against
//                       quatre-vingt-quinze at native pace. s10-which
//                       discriminates PRICES, which is a different task on the
//                       same material, and it names a1.27.
//  quantity language    a1.29, seq 8, outright. `un kilo de`, `une tranche de`,
//                       `une bouteille d'eau` are its §11. s06-quantity APPLIES
//                       them under counter pressure, quotes a1.29 by unit id
//                       and makes no new claim about the partitive.
//  the register ladder  a2.29, seq 28, once for all eight. The design's
//                       `je veux -> je voudrais -> je prendrais -> est-ce que
//                       je pourrais avoir` mission is CUT. One card in
//                       s05-yourside contrasts `je veux` with `je voudrais` and
//                       quotes a2.13 by unit id. No third rung. No ladder is
//                       named anywhere, including in s14-refuse.
//  the repair move      a2.07, seq 24, once for all eight. §A above.
//  l'addition           a2.07. The bill is a restaurant script move. This unit
//                       owns payment and money; a2.07 hands off at the
//                       restaurant's payment moment (collation §C5).
//  returns/exchanges    UNOWNED AND AVAILABLE. Dropped here: it inverts the
//                       information gradient, needs `parce que` and a held
//                       position, and is B1. Reported rather than absorbed.
//  arithmetic           NOWHERE. No item in this lesson, scored or unscored,
//                       asks the learner to compute a total from a shelf price.
//                       Collation §C3's own constraint, and the Quebec
//                       pedagogy: the till's number is the only number.
//  y and en             a2.25, shipped. No string in this build uses either.
//                       `Combien je vous mets ?` was chosen over
//                       `Vous en voulez combien ?` for exactly this reason, and
//                       `Nous n'avons plus de baguettes` over
//                       `Il n'y en a plus`.
//  a clock              DOES NOT EXIST. `setInterval` is 0 across all four
//                       render files (collation §1.9). Doctrine §B.8's
//                       "groupDrill (production against the clock)" is drifted
//                       wording and is not an instruction. s06-quantity says so
//                       in its own `say` string.

// ════════════════════════════════════════════════════════════════════════════
//  §D. REGION: SIX RULES, AND THIS IS THE ONE UNIT EXCEPTED FROM FRANCE-ONLY
// ════════════════════════════════════════════════════════════════════════════
//
// Collation §C3 settles the band as France-primary with Quebec as a named
// non-scored aside, then excepts a2.26, because this is the only unit where the
// regional difference changes an ANSWER rather than a word: in Quebec the tax
// goes on at the till, so the number on the shelf is not the number you pay.
//
//  1. EVERY SCORED SURFACE IS FRANCE. All four quiz rounds, the dictée, the
//     trapDrill, the groupDrill, the reading questions and every graded turn of
//     the scenario are set in France, priced in euros, and the number the
//     vendor says is the number the learner pays. A learner never has to know
//     which country they are in to answer, because the answer is always France.
//  2. THE CURRENCY WORD IS THE REGION FLAG AND IT IS ALWAYS AUDIBLE. Every
//     price string names its currency out loud. Hearing `dollars` is a reliable
//     signal that this is the aside and not the test.
//  3. QUEBEC APPEARS IN EXACTLY TWO PLACES, BOTH UNSCORED: `s15-quebec` (three
//     cards) and two recognition rows inside s13-paying's card set.
//  4. NO ARITHMETIC. No percentage, no TPS, no TVQ, no "9,20 plus tax, what do
//     you pay". The Quebec teaching is an EXPECTATION, not an operation.
//  5. A QUEBEC FORM IS NEVER A CORRECT ANSWER AND NEVER A DISTRACTOR. Extending
//     C3 rule 3: an option that is correct in Montreal and marked red is a
//     defect a TEF Canada candidate will notice and be right about. Enforced by
//     `QUEBEC_FORMS` below, asserted against every quiz option and every
//     trapDrill and groupDrill option in the test. A sentence in a report
//     cannot fail; this can.
//  6. THE SCENARIO IS FRANCE AND QUEBEC IS NOWHERE IN IT. The design's
//     "alternate scenario setting" is CUT. Collation §1.4 asks this band to
//     leave a2.35 eight mutually consistent scripts, and §7.3 names register
//     drift as the likeliest way the band embarrasses itself.
//
// s15-quebec sits in ACT 4, not act 3, so no dollar figure is ever adjacent to
// the euro figures the learner is being tested on.

export const QUEBEC_FORMS = ['magasiner', 'dépanneur', 'dollars', 'piastre', 'sou noir'] as const;

// ════════════════════════════════════════════════════════════════════════════
//  §E. IMPORTED, NOT AUTHORED — every id verified `published` 2026-08-15
// ════════════════════════════════════════════════════════════════════════════
//
// Collation §1.3's interpretation rule: a published row is REACHABLE and must
// be imported by itemId, never re-authored.
//
// NOTHING IS AUTHORED INTO `nombres`, `expressions-de-quantite`, `marche` OR
// `vetements`. Those are a1.27, a1.28, a1.29 and a1.23 populations and their
// tests assert statistics over them. a1.11 broke a1.03's -e statistic this way
// and a1.23 moved a population by CARRYING rows rather than by authoring them,
// which the authored-only guard could not see. The merge here does carry
// `marche` and `argent-quotidien` rows into the seed, so those suites are
// re-run before this build is called done.

export const IMPORTED = {
  /** The till and the shop, already published in `courses`. This unit's whole
   *  noun inventory is imported: not one shop noun is authored. */
  shop: [
    'fr.a2.courses.002', // la caisse
    'fr.a2.courses.013', // le prix
    'fr.a2.courses.015', // un reçu
    'fr.a2.courses.014', // le rayon
    'fr.a2.courses.024', // la boulangerie
    'fr.a2.courses.052', // le montant
    'fr.a2.courses.053', // le prix unitaire
    'fr.a2.courses.059', // la promotion
    'fr.a2.courses.016', // une réduction
    'fr.a2.courses.072', // l'horaire d'ouverture
    'fr.a2.courses.073', // l'heure de fermeture
    'fr.a2.courses.089', // l'article
    'fr.a2.courses.077', // la vendeuse
    'fr.a2.courses.076', // le vendeur
  ],
  /** Nine of the thirteen `courses` payment phrases already exist. s13-paying
   *  mostly ARRANGES these rather than authoring. */
  paying: [
    'fr.a2.courses.017', // payer par carte
    'fr.a2.courses.048', // payer en espèces
    'fr.a2.courses.049', // payer par chèque
    'fr.a2.courses.018', // faire les courses
    'fr.a2.courses.064', // comparer les prix
  ],
  /** The two price questions the corpus ALREADY had, and the header §4 finding.
   *  Both are the learner's classroom register. s05-yourside contrasts them
   *  with `ça fait combien`, which is authored here at .177. */
  askingPrice: [
    'fr.a2.courses.007',          // Quel est le prix, s'il vous plaît ?
    'fr.a1.argent-quotidien.077', // combien ça coûte
  ],
  /** Change, in the third person, which is all the corpus has. Header §5. */
  changeThirdPerson: [
    'fr.a1.argent-quotidien.017', // Le vendeur me rend la monnaie.
    'fr.a2.courses.137',          // Le vendeur m'a rendu la monnaie.
    'fr.a2.courses.108',          // Le vendeur a compté la monnaie deux fois.
  ],
  /** Coins and notes, from `argent-quotidien` where the split puts them. */
  money: [
    'fr.a1.argent-quotidien.053', // la monnaie
    'fr.a1.argent-quotidien.054', // le billet
    'fr.a1.argent-quotidien.055', // la pièce
    'fr.a1.argent-quotidien.067', // le ticket de caisse
    'fr.a1.argent-quotidien.068', // la caisse
    'fr.a1.argent-quotidien.076', // l'euro
    'fr.a2.argent-quotidien.060', // l'argent liquide
    'fr.a2.argent-quotidien.061', // le montant
    'fr.a2.argent-quotidien.063', // le total
    'fr.a2.argent-quotidien.054', // le code secret
    'fr.a2.argent-quotidien.053', // la carte de fidélité
  ],
  /** The stall and the people behind it. `marche` is fully in the seed. */
  marche: [
    'fr.a1.marche.006', // le marché
    'fr.a1.marche.030', // l'étal
    'fr.a1.marche.021', // le boulanger
    'fr.a1.marche.016', // le primeur
    'fr.a1.marche.029', // la caissière
    'fr.a1.marche.028', // le caissier
    'fr.a1.marche.038', // la balance
  ],
  /** a1.29's containers, APPLIED and never re-taught. `fr.a2.courses.003` is
   *  the container sentence this theme already published. */
  containers: [
    'fr.a2.courses.003', // Je voudrais un kilo de tomates, s'il vous plaît.
    'fr.a2.courses.092', // Elle a acheté deux kilos de pommes.
  ],
  /** Quebec, RECOGNITION ONLY, and header §7's finding: `un dépanneur` exists
   *  and the probe said it did not. Neither of these carries `voiceflash`
   *  anywhere in this lesson and neither appears in the quiz. */
  quebec: [
    'fr.a2.quebec-et-francophonie.031', // un dépanneur
  ],
  /** a2.07's frozen block. Cited, never re-authored. §A. */
  repair: [...REPAIR_IDS],
} as const;

/** Prior exposure to a price question, NAMED and left where it is, per the
 *  pattern a2.07 set with `priorRepair`. These are not cited by this unit. */
export const PRIOR_PRICE = [
  'fr.b1.courses.103', // Quel est le prix de ce paquet de café moulu ?
  'fr.a1.argent-quotidien.034', // La baguette coûte un euro dix.
] as const;

// ════════════════════════════════════════════════════════════════════════════
//  §F. THE ROWS
// ════════════════════════════════════════════════════════════════════════════

type Bucket = 'vendor' | 'learner-move' | 'total' | 'change' | 'payment' | 'refusal' | 'quebec';

/** Whose mouth the row comes out of. Collation §1.5's 40% floor is measured on
 *  this and the test asserts it. `neutral` is a bare headword with no speaker. */
type Voice = 'vendor' | 'learner' | 'neutral';

export type Row = Item & { bucket: Bucket; voice: Voice };

const T = ['a2', 'courses', 'situation'];

/** A spoken card the learner hears and reproduces. */
const PV: Item['drills'] = ['flashcard', 'voiceflash', 'review'];
/** A phrase the dictée also takes. `dictation` on `kind: 'phrase'` is legal:
 *  60 published rows carry it (measured by a2.07). */
const PD: Item['drills'] = ['flashcard', 'voiceflash', 'dictation', 'review'];
/** A full sentence that also feeds the dictée and the sentence hub. */
const SD: Item['drills'] = ['flashcard', 'voiceflash', 'dictation', 'sentence', 'review'];
const row = (
  id: string,
  theme: string,
  fr: string,
  en: string,
  ipa: string,
  respell: string,
  bucket: Bucket,
  voice: Voice,
  kind: Item['kind'],
  drills: Item['drills'],
  notes: string,
): Row => ({
  id, kind, level: 'a2', theme, fr, en, ipa, respell,
  tags: [...T, bucket, voice], drills, audioRef: null, version: 1, notes,
  bucket, voice,
});

type Rest = [string, string, string, string, Bucket, Voice, Item['kind'], Item['drills'], string];

const R = (n: number, ...a: Rest): Row => row(C(n), THEME, ...a);
const RM = (n: number, ...a: Rest): Row => row(M(n), MONEY_THEME, ...a);
const RQ = (n: number, ...a: Rest): Row => row(Q(n), QC_THEME, ...a);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE TILL TRANSACTION — theme `courses`, .168 to .204
 *
 *  Formulaic sequences are stored WHOLE, as `phrase`, and never decomposed. At
 *  A2 the learner stores `ça fait combien` as one unanalysed unit rather than
 *  as ça + faire + combien, and a corpus that splits it teaches the wrong
 *  storage. Priced utterances are `sentence`, with the number SPELLED IN WORDS
 *  so the dictée can build a tile bank and s07's audio is unambiguous.
 * ══════════════════════════════════════════════════════════════════════════ */

export const COURSES_ROWS: readonly Row[] = [
  /* ── The vendor's opening, and the six lines the learner will HEAR ────── */
  R(168, 'Vous désirez ?', 'What would you like?', '/vu de.zi.ʁe/', 'voo day-zee-RAY',
    'vendor', 'vendor', 'phrase', PD,
    'The bakery and the market stall open with this. It is the vendor starting, which is the whole asymmetry of the encounter.'),
  R(169, 'Qu\'est-ce que je vous sers ?', 'What can I get you?', '/kɛs kə ʒə vu sɛʁ/', 'kess kuh zhuh voo SEHR',
    'vendor', 'vendor', 'phrase', PD,
    'The same move with a verb in it. Servir is published at fr.a2.courses.080 and the learner has met it as a headword only.'),
  R(170, 'Ce sera tout ?', 'Will that be all?', '/sə sə.ʁa tu/', 'suh suh-ra TOO',
    'vendor', 'vendor', 'phrase', PD,
    'The close. It is a future tense used as a present, and answering it with silence gets you asked again.'),
  R(171, 'Et avec ceci ?', 'Anything else with that?', '/e a.vɛk sə.si/', 'ay a-vek suh-SEE',
    'vendor', 'vendor', 'phrase', PD,
    'The market stall version of the close. There is no verb and no noun in it, so nothing in the words says it is about your order.'),
  R(172, 'C\'est pour offrir ?', 'Is it a gift?', '/sɛ puʁ ɔ.fʁiʁ/', 'say poor o-FREER',
    'vendor', 'vendor', 'phrase', PD,
    'Asked at any counter that sells something wrappable. Oui gets it gift-wrapped, and it is asked once, quickly.'),
  R(173, 'Il vous faut un sac ?', 'Do you need a bag?', '/il vu fo œ̃ sak/', 'eel voo foh uhⁿ SAK',
    'vendor', 'vendor', 'phrase', PD,
    'Falloir in the vendor\'s mouth. In France the bag usually costs, so this is a sale rather than an offer.'),
  R(174, 'Vous avez la carte du magasin ?', 'Do you have the store card?',
    '/vu.z‿a.ve la kaʁt dy ma.ɡa.zɛ̃/', 'voo-z a-vay lah kart dü ma-ga-ZAⁿ',
    'vendor', 'vendor', 'phrase', PD,
    'Asked while the total is already on the screen, which is why it arrives as an interruption rather than a question.'),
  R(175, 'Combien je vous mets ?', 'How much shall I give you?', '/kɔ̃.bjɛ̃ ʒə vu mɛ/', 'kohⁿ-byehⁿ zhuh voo MEH',
    'vendor', 'vendor', 'phrase', PD,
    'The market stall\'s quantity question, and the one a1.29\'s containers answer. Mettre is a2.15\'s verb, used whole here.'),
  R(176, 'Ce sera quoi pour vous ?', 'What will it be for you?', '/sə sə.ʁa kwa puʁ vu/', 'suh suh-ra kwa poor VOO',
    'vendor', 'vendor', 'phrase', PD,
    'Your turn in the queue has arrived. Said fast, and often with nothing else, so there is no greeting to catch first.'),

  /* ── The learner's four moves. Deliberately fewer than the vendor's. ──── */
  R(177, 'Ça fait combien ?', 'How much is that?', '/sa fɛ kɔ̃.bjɛ̃/', 'sa feh kohⁿ-BYEHⁿ',
    'learner-move', 'learner', 'phrase', PD,
    'The single most frequent question in a French shop and it existed nowhere in this corpus. Store it whole: it is not ça + faire + combien.'),
  R(178, 'Bonjour, je voudrais une baguette, s\'il vous plaît.', 'Hello, I would like a baguette, please.',
    '/bɔ̃.ʒuʁ ʒə vu.dʁɛ yn ba.ɡɛt sil vu plɛ/', 'bohⁿ-ZHOOR zhuh voo-DREH ün ba-GET seel voo PLEH',
    'learner-move', 'learner', 'sentence', SD,
    'Greeting and request in one breath. In a French shop the bonjour is not optional and it comes before the noun, never after.'),
  R(179, 'Par carte, s\'il vous plaît.', 'By card, please.', '/paʁ kaʁt sil vu plɛ/', 'par KART seel voo PLEH',
    'learner-move', 'learner', 'phrase', PD,
    'Three words answer the payment question completely. Building a sentence around it marks you out as translating.'),
  R(180, 'En espèces, s\'il vous plaît.', 'In cash, please.', '/ɑ̃.n‿ɛs.pɛs sil vu plɛ/', 'ahⁿ-n ess-PESS seel voo PLEH',
    'learner-move', 'learner', 'phrase', PD,
    'The other half of the payment answer. payer en espèces is already published at fr.a2.courses.048 as an infinitive; this is the answer form.'),

  /* ── THE OWNS: the total, in four costumes, spelled in words ──────────── */
  R(181, 'Ça fait quatre-vingt-dix-sept euros trente.', 'That comes to ninety-seven euros thirty.',
    '/sa fɛ ka.tʁə.vɛ̃.dis.sɛt ø.ʁo tʁɑ̃t/', 'sa feh ka-truh-vaⁿ-dee-SET eu-ro TRAHⁿT',
    'total', 'vendor', 'sentence', SD,
    'The number from the scene. Ninety-seven and thirty, said as one run, and the only clue it has finished is that she stops.'),
  R(182, 'Ça vous fait vingt-trois euros quarante.', 'That comes to twenty-three euros forty.',
    '/sa vu fɛ vɛ̃t.tʁwa ø.ʁo ka.ʁɑ̃t/', 'sa voo feh vaⁿt-TRWA eu-ro ka-RAHⁿT',
    'total', 'vendor', 'sentence', SD,
    'The same move with vous inside it. The extra syllable is the only difference and it changes nothing you have to do.'),
  R(183, 'Ça fera huit euros dix, s\'il vous plaît.', 'That will be eight euros ten, please.',
    '/sa fə.ʁa ɥi.t‿ø.ʁo dis sil vu plɛ/', 'sa fuh-RA weet eu-ro DEESS seel voo PLEH',
    'total', 'vendor', 'sentence', SD,
    'A future tense for a thing that is true now. Recognising fera as the same move as fait is the whole point of s09.'),
  R(184, 'Le total est de quarante-deux euros.', 'The total is forty-two euros.',
    '/lə tɔ.tal ɛ də ka.ʁɑ̃t.dø ø.ʁo/', 'luh to-TAL eh duh ka-rahⁿt-DEU-zeu-ro',
    'total', 'vendor', 'sentence', SD,
    'The supermarket screen version, and the most formal of the four. No cents, so nothing follows the currency word.'),
  R(185, 'Alors, deux baguettes, ça fait deux euros quarante.', 'So, two baguettes, that comes to two euros forty.',
    '/a.lɔʁ dø ba.ɡɛt sa fɛ dø.z‿ø.ʁo ka.ʁɑ̃t/', 'a-LOR deu ba-GET sa feh deu-z eu-ro ka-RAHⁿT',
    'total', 'vendor', 'sentence', SD,
    'The baker counts your order back at you before the figure. Alors is the half-second of warning that a number is coming.'),
  R(186, 'Ça fait six euros quatre-vingt-quinze.', 'That comes to six euros ninety-five.',
    '/sa fɛ si.z‿ø.ʁo ka.tʁə.vɛ̃.kɛ̃z/', 'sa feh see-z eu-ro ka-truh-vaⁿ-KAⁿZ',
    'total', 'vendor', 'sentence', SD,
    'The cents run longer than the euros. a1.27 taught quatre-vingt-quinze against quatre-vingt-dix-neuf; here it arrives after a currency word.'),
  R(187, 'Ça vous fait dix-neuf euros quatre-vingt-dix.', 'That comes to nineteen euros ninety.',
    '/sa vu fɛ diz.nœ.v‿ø.ʁo ka.tʁə.vɛ̃.dis/', 'sa voo feh deez-NUH-v eu-ro ka-truh-vaⁿ-DEESS',
    'total', 'vendor', 'sentence', SD,
    'Two nineteens and two nineties in one sentence, and the currency word is the only thing separating the euros from the cents.'),
  R(188, 'Ça fait quinze euros soixante, s\'il vous plaît.', 'That comes to fifteen euros sixty, please.',
    '/sa fɛ kɛ̃.z‿ø.ʁo swa.sɑ̃t sil vu plɛ/', 'sa feh kaⁿ-z eu-ro swa-SAHⁿT seel voo PLEH',
    'total', 'vendor', 'sentence', SD,
    'The s\'il vous plaît on the end is not politeness about the price. It is the request to hand something over, and it means she has finished.'),
  R(189, 'Ça fait cinquante euros pile.', 'That comes to exactly fifty euros.',
    '/sa fɛ sɛ̃.kɑ̃t‿ø.ʁo pil/', 'sa feh saⁿ-kahⁿt eu-ro PEEL',
    'total', 'vendor', 'sentence', SD,
    'Pile means on the nose. It is the one word that tells you there are no cents coming, so you can stop listening.'),

  /* ── Paying, and the card machine ─────────────────────────────────────── */
  R(190, 'Insérez votre carte et tapez votre code.', 'Insert your card and enter your PIN.',
    '/ɛ̃.se.ʁe vɔtʁ kaʁt e ta.pe vɔtʁ kɔd/', 'aⁿ-say-RAY votr KART ay ta-PAY votr KOD',
    'payment', 'vendor', 'sentence', SD,
    'Two imperatives and no please, which is the register of a machine instruction rather than rudeness.'),
  R(191, 'Vous pouvez retirer votre carte.', 'You can take your card out.',
    '/vu pu.ve ʁə.ti.ʁe vɔtʁ kaʁt/', 'voo poo-vay ruh-tee-RAY votr KART',
    'payment', 'vendor', 'sentence', SD,
    'The transaction is finished. Nothing else is required of you, and the receipt question comes next or not at all.'),
  R(192, 'Vous voulez le ticket ?', 'Do you want the receipt?', '/vu vu.le lə ti.kɛ/', 'voo voo-lay luh tee-KEH',
    'payment', 'vendor', 'phrase', PD,
    'Le ticket, not le ticket de caisse, at the counter. The long form is what is printed on it.'),
  R(193, 'le paiement sans contact', 'contactless payment', '/lə pɛ.mɑ̃ sɑ̃ kɔ̃.takt/', 'luh peh-MAHⁿ sahⁿ kohⁿ-TAKT',
    'payment', 'neutral', 'word', PV,
    'Under fifty euros in France it usually needs no code at all. Two published sentences use sans contact; the headword did not exist.'),
  R(194, 'le code', 'the PIN', '/lə kɔd/', 'luh KOD',
    'payment', 'neutral', 'word', PV,
    'What a card machine asks for. le code secret is the formal term and is published at fr.a2.argent-quotidien.054; at a till it is just le code.'),
  R(195, 'le sous-total', 'the subtotal', '/lə su.tɔ.tal/', 'luh soo-to-TAL',
    'payment', 'neutral', 'word', PV,
    'The line on a receipt above the discounts. Reading it is s19; nothing in this lesson asks you to compute from it.'),

  /* ── Not buying is also a move ────────────────────────────────────────── */
  R(196, 'Je regarde seulement, merci.', 'I am just looking, thanks.',
    '/ʒə ʁə.ɡaʁd sœl.mɑ̃ mɛʁ.si/', 'zhuh ruh-GARD seul-MAHⁿ mehr-SEE',
    'refusal', 'learner', 'phrase', PD,
    'The answer to Je peux vous aider ?. Without it a learner either buys something or leaves, and both happen a lot.'),
  R(197, 'C\'est un peu cher pour moi.', 'That is a bit expensive for me.',
    '/sɛ.t‿œ̃ pø ʃɛʁ puʁ mwa/', 'say-t uhⁿ peu SHEHR poor MWA',
    'refusal', 'learner', 'phrase', PD,
    'Un peu is what makes it sayable. C\'est cher on its own sounds like a complaint about the shop rather than about your wallet.'),
  R(198, 'Je vais réfléchir, merci.', 'I will think about it, thanks.',
    '/ʒə vɛ ʁe.fle.ʃiʁ mɛʁ.si/', 'zhuh veh ray-flay-SHEER mehr-SEE',
    'refusal', 'learner', 'phrase', PD,
    'The exit that closes the conversation without refusing anything. A futur proche, which is a2.19\'s and is used whole here.'),
  R(199, 'Vous avez ça en trente-huit ?', 'Do you have this in a thirty-eight?',
    '/vu.z‿a.ve sa ɑ̃ tʁɑ̃t.ɥit/', 'voo-z a-vay sa ahⁿ trahⁿt-WEET',
    'refusal', 'learner', 'phrase', PD,
    'The size question without the word for size. French sizes are numbers, so the number does all the work and ça points at the garment.'),

  /* ── The vendor comes to you ──────────────────────────────────────────── */
  R(200, 'Je peux vous aider ?', 'Can I help you?', '/ʒə pø vu.z‿ɛ.de/', 'zhuh peu voo-z eh-DAY',
    'vendor', 'vendor', 'phrase', PD,
    'In a shop this is an approach rather than an offer, and Je regarde seulement is the whole answer to it.'),
  R(201, 'Vous cherchez quelque chose ?', 'Are you looking for something?',
    '/vu ʃɛʁ.ʃe kɛl.kə ʃoz/', 'voo shehr-shay kel-kuh SHOHZ',
    'vendor', 'vendor', 'phrase', PD,
    'The same approach with a different verb. chercher un article is published at fr.a2.courses.082 as the learner\'s infinitive.'),
  R(202, 'Non, désolée, nous n\'avons plus de baguettes.', 'No, sorry, we have no baguettes left.',
    '/nɔ̃ de.zɔ.le nu na.vɔ̃ ply də ba.ɡɛt/', 'nohⁿ day-zo-LAY noo na-vohⁿ plü duh ba-GET',
    'vendor', 'vendor', 'sentence', SD,
    'Ne...plus de, not ne...plus des. The bad news arrives before you have finished asking, and it is the one deviation this script has.'),
  R(203, 'Vous faites quelle taille ?', 'What size are you?', '/vu fɛt kɛl taj/', 'voo fet kel TAHY',
    'vendor', 'vendor', 'phrase', PD,
    'The clothing shop swaps this in where the market stall asks a quantity. la taille is published in vetements and rp-achats and is not re-authored here.'),
  R(204, 'Vous réglez comment ?', 'How are you paying?', '/vu ʁe.ɡle kɔ.mɑ̃/', 'voo ray-glay ko-MAHⁿ',
    'payment', 'vendor', 'phrase', PD,
    'Comment is how, not how much. a2.07 taught this at a restaurant table; the till asks it the same way and the answer is still three words.'),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  MONEY ITSELF — theme `argent-quotidien`, .071 to .086
 *
 *  Collation §5's split, applied literally: the transaction goes in `courses`,
 *  and only rows that are about money itself — coins, notes, change, having no
 *  change — go here. Ledger §2 settled it and the fallback did not fire.
 *
 *  This is the block that answers the published canDo's "count change", which
 *  nothing anywhere in the 75-unit curriculum supported before it.
 * ══════════════════════════════════════════════════════════════════════════ */

export const MONEY_ROWS: readonly Row[] = [
  RM(71, 'Je vous rends deux euros soixante.', 'Here is two euros sixty change.',
    '/ʒə vu ʁɑ̃ dø.z‿ø.ʁo swa.sɑ̃t/', 'zhuh voo rahⁿ deu-z eu-ro swa-SAHⁿT',
    'change', 'vendor', 'sentence', SD,
    'The second number of the transaction, and it arrives once, faster than the first. Rendre is a2.11\'s verb, used whole.'),
  RM(72, 'Voilà votre monnaie.', 'Here is your change.', '/vwa.la vɔtʁ mɔ.nɛ/', 'vwa-LA votr mo-NEH',
    'change', 'vendor', 'phrase', PD,
    'No figure at all. The coins are counted into your hand and you are expected to have been listening to the first number.'),
  RM(73, 'Vous avez la monnaie ?', 'Do you have change?', '/vu.z‿a.ve la mɔ.nɛ/', 'voo-z a-vay lah mo-NEH',
    'change', 'vendor', 'phrase', PD,
    'Asked before you have paid, not after. It means she is short of coins, and it is a request rather than a question about your wallet.'),
  RM(74, 'Vous n\'avez pas plus petit ?', 'Have you got anything smaller?',
    '/vu na.ve pa ply pə.ti/', 'voo na-vay pah plü puh-TEE',
    'change', 'vendor', 'phrase', PD,
    'Plus petit is a smaller note, never a smaller object. Handing over a fifty for a baguette is what triggers it.'),
  RM(75, 'Je vous rends la monnaie sur vingt euros.', 'Here is your change from twenty euros.',
    '/ʒə vu ʁɑ̃ la mɔ.nɛ syʁ vɛ̃.t‿ø.ʁo/', 'zhuh voo rahⁿ lah mo-NEH sür vaⁿt-EU-ro',
    'change', 'vendor', 'sentence', SD,
    'Sur names what you handed over, not what you get back. The figure in the sentence is the note, which is the opposite of what an English ear expects.'),
  RM(76, 'le rendu', 'the change given back', '/lə ʁɑ̃.dy/', 'luh rahⁿ-DÜ',
    'change', 'neutral', 'word', PV,
    'The noun printed on a receipt under the amount tendered. It is not the participle rendu: a participle is never a corpus item in this band.'),
  RM(77, 'l\'appoint', 'the exact money', '/la.pwɛ̃/', 'la-PWAⁿ',
    'change', 'neutral', 'word', PV,
    'The exact coins, so no change is needed. Faire l\'appoint is what a French speaker does while the queue waits behind them.'),
  RM(78, 'Vous pouvez faire l\'appoint ?', 'Can you give me the exact money?',
    '/vu pu.ve fɛʁ la.pwɛ̃/', 'voo poo-vay fehr la-PWAⁿ',
    'change', 'vendor', 'phrase', PD,
    'The politest version of I have no change. It asks you to do arithmetic in a queue, which is why recognising it fast matters.'),
  RM(79, 'Vous avez cinquante centimes ?', 'Have you got fifty cents?',
    '/vu.z‿a.ve sɛ̃.kɑ̃t sɑ̃.tim/', 'voo-z a-vay saⁿ-KAHⁿT sahⁿ-TEEM',
    'change', 'vendor', 'phrase', PD,
    'Centimes is said here and never in a price. a1.28 taught that the cents in a price are a bare number; the coin itself keeps its name.'),
  RM(80, 'Désolé, je n\'ai pas de monnaie.', 'Sorry, I have no change.',
    '/de.zɔ.le ʒə ne pa də mɔ.nɛ/', 'day-zo-LAY zhuh nay pah duh mo-NEH',
    'change', 'vendor', 'sentence', SD,
    'The vendor saying it, which is the direction that surprises people. It means find something smaller or come back.'),
  RM(81, 'Je n\'ai que des billets.', 'I only have notes.', '/ʒə ne kə de bi.jɛ/', 'zhuh nay kuh day bee-YEH',
    'change', 'learner', 'phrase', PD,
    'Ne...que is only, not a negative. It is the straight answer to Vous avez la monnaie ? and it keeps the transaction moving.'),
  RM(82, 'sur vingt euros', 'out of twenty euros', '/syʁ vɛ̃.t‿ø.ʁo/', 'sür vaⁿt-EU-ro',
    'change', 'neutral', 'phrase', PV,
    'The frame that names the note you handed over. Stored whole: sur here has nothing to do with on top of.'),
  RM(83, 'Ça fait deux euros soixante-dix de rendu.', 'That is two euros seventy in change.',
    '/sa fɛ dø.z‿ø.ʁo swa.sɑ̃t.dis də ʁɑ̃.dy/', 'sa feh deu-z eu-ro swa-sahⁿt-DEESS duh rahⁿ-DÜ',
    'change', 'vendor', 'sentence', SD,
    'The same ça fait frame as the total, carrying the opposite number. This is why the frame alone does not tell you which figure is coming.'),
  RM(84, 'Je vous dois combien ?', 'How much do I owe you?', '/ʒə vu dwa kɔ̃.bjɛ̃/', 'zhuh voo dwa kohⁿ-BYEHⁿ',
    'change', 'learner', 'phrase', PD,
    'Ça fait combien asks the price of the goods. This asks the price of the goods you have already taken, and it is what you say at a market stall.'),
  RM(85, 'Attendez, je vous rends la monnaie.', 'Wait, let me give you your change.',
    '/a.tɑ̃.de ʒə vu ʁɑ̃ la mɔ.nɛ/', 'a-tahⁿ-DAY zhuh voo rahⁿ lah mo-NEH',
    'change', 'vendor', 'sentence', SD,
    'Said to your back as you walk away. It is the one line in the lesson where not catching it costs you money directly.'),
  RM(86, 'Vous m\'avez rendu trop de monnaie.', 'You have given me too much change.',
    '/vu ma.ve ʁɑ̃.dy tʁo də mɔ.nɛ/', 'voo ma-vay rahⁿ-DÜ troh duh mo-NEH',
    'change', 'learner', 'sentence', SD,
    'The learner counting the change and finding it wrong, which is the whole reason the canDo says count. Trop de, never trop des.'),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  QUEBEC — theme `quebec-et-francophonie`, .199 to .200
 *
 *  §D rule 3: recognition only, unscored, and never in `courses`. a2.07 took
 *  .197 and .198 in this theme and guards that Quebec rows never land in the
 *  author-into theme; this build follows the same convention and the same cap
 *  of two authored rows. `un dépanneur` is IMPORTED (header §7).
 * ══════════════════════════════════════════════════════════════════════════ */

export const QC_ROWS: readonly Row[] = [
  RQ(199, 'magasiner', 'to go shopping (Quebec)', '/ma.ɡa.zi.ne/', 'ma-ga-zee-NAY',
    'quebec', 'neutral', 'word', ['flashcard', 'review'],
    'What faire les courses and faire du shopping are called in Quebec. Recognition only: this lesson drills the France forms.'),
  RQ(200, 'Au Québec, les taxes s\'ajoutent à la caisse.', 'In Quebec, the taxes are added at the till.',
    '/o ke.bɛk le taks sa.ʒut a la kɛs/', 'oh kay-BEK lay taks sa-ZHOOT a lah KESS',
    'quebec', 'neutral', 'sentence', ['flashcard', 'review'],
    'The number on the shelf is not the number you pay. No rate is named and no sum is ever asked for.'),
];

export const ROWS: readonly Row[] = [...COURSES_ROWS, ...MONEY_ROWS];
export const ALL_ROWS: readonly Row[] = [...ROWS, ...QC_ROWS];

/** Collation §1.5. Measured on `voice`, over the two author-into themes, and
 *  asserted by the batch script and the test. The Quebec rows are excluded:
 *  they are recognition vocabulary with no speaker. */
export const VENDOR_VOICE_FLOOR = 0.4;
