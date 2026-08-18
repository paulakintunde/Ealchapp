// a2.07.l1 « Au restaurant » — the corpus, the constants and the decisions.
// Trail seq 24, the head of the A2 situations band (seq 24 to 31).
//
// ════════════════════════════════════════════════════════════════════════════
//  WHAT THE PROMPT AND THE COLLATION GOT WRONG, MEASURED 2026-08-15
// ════════════════════════════════════════════════════════════════════════════
//
// Doctrine §F asks for this header. This unit's prompt carried an entire column
// of figures its own supervisor flagged as unverified ("I did not query
// Postgres"), so the expectation was that most would fail. The opposite
// happened: the design agent's probe was accurate almost everywhere, and the
// failures are concentrated in the two documents that reasoned ABOUT the probe
// rather than running it.
//
//  1. « au-restaurant holds 346 published rows, NEXT FREE .132, count 130,
//     max 131, gap at 98 » — TRUE, EXACTLY, every figure. Also confirmed:
//     cafe 341, cuisine 428, rp-repas 113, nombres 448,
//     quebec-et-francophonie 593, and nourriture at 0 published / 0 in seed.
//     Nine figures, nine hits. The design agent's probe is trustworthy.
//
//  2. « 4 of 346 rows are in the waiter's voice, 1.2% » — TOO LOW, and the
//     correct number is 7 of 346 (2.0%). Hand-classified after a scan for
//     second-person address, imperatives aimed at the customer and
//     server-side interrogatives:
//
//       fr.a1.au-restaurant.111  C'est pour combien de personnes ?
//       fr.a1.au-restaurant.116  Qu'est-ce que vous prenez ?
//       fr.a1.au-restaurant.118  Vous avez une table pour deux ce soir.
//       fr.a1.au-restaurant.198  Le service est compris dans le prix.
//       fr.a2.au-restaurant.054  avec ou sans sucre ?
//       fr.a2.au-restaurant.063  Prenez votre temps pour choisir.
//       fr.a2.au-restaurant.078  Vous allez adorer ce dessert au caramel.
//
//     The band's mandate is unaffected: 2.0% is still a corpus that authored
//     one half of every encounter. But the prompt lists .063 among "the
//     interrogatives already in the server's voice" and it is not an
//     interrogative, it is an imperative. Both it and .078 are server-voice
//     rows the prompt's import list did not name.
//
//  3. « a2.25 (Y and EN) has ZERO lessons » — FALSE, and it is the collation's
//     own §C8 and §1.4 that say so. `a2.25.l1` ships with 24 sections, it is
//     in the seed, `content:y-en` is a wired script, and the device's home
//     screen offers it as the Continue card. The CONSTRAINT is unchanged and
//     if anything firmer: a2.25 has already TAUGHT y and en, so this unit must
//     not re-teach them. Only the stated reason was wrong.
//
//  4. « Ce n'est pas ce que j'ai commandé is new » — FALSE. It is published at
//     `fr.a1.au-restaurant.193`, in this very theme. Caught by a fold-based
//     duplicate sweep before a row was minted; authoring it would have given
//     the flashcard hub one card served twice. IMPORTED, not authored. This is
//     the single intra-theme collision in 54 planned strings.
//
//  5. « Three generic repair rows exist: fr.a1.expressions-frequentes.124,
//     fr.sons.questions.023, fr.a2.expressions-frequentes.073 » — UNDERCOUNTED.
//     There are SIX, across four themes:
//
//       fr.a1.expressions-frequentes.123  Vous pouvez répéter, s'il vous plaît ?
//       fr.a1.expressions-frequentes.124  Plus lentement, s'il vous plaît.
//       fr.sons.questions.022             Qu'est-ce que ça veut dire ?
//       fr.sons.questions.023             pouvez-vous répéter ?
//       fr.a2.questions-du-quotidien.008  Qu'est-ce que ça veut dire ?
//       fr.a2.expressions-frequentes.073  Parlez plus lentement, s'il vous plaît.
//
//     Two of the six frozen rungs below therefore have an EXACT twin already
//     published in another theme, and a third has a near twin. The prompt
//     overruled importing them and that decision stands (§B below), but the
//     prior exposure is wider than it was described.
//
//  6. « the corpus:probe --count flag » — correctly removed by the consistency
//     pass. `--theme` prints the count on its first line. Confirmed.
//
//  7. « courses is thin, 5 rows » (collation §1.1) — FALSE, and it belongs to
//     a2.26 rather than here, so it is filed in `07-BAND-ID-LEDGER.md` instead.
//     Postgres holds 316. Every one of the band's eight author-into themes
//     holds 300+ published rows while the seed shows 0 to 17.
//
//  8. « repeated `scene` is untested and may fail silently » — TESTED, AND IT
//     RENDERS. Device-proven on a Pixel 6 (21041FDF600BMN) before authoring,
//     per collation blocking step 4. A throwaway lesson carrying two clones of
//     a real shipped scene played the SECOND one through every beat kind:
//     narration, choice with its feedback reveal, both bubble directions, and
//     the `break` beat with its full body, IPA and respelling, then resolved
//     back to the mission list. The mechanism was already visible in code:
//     `LessonPager` keys pages by section INDEX (`${entry.kind}-${entry.sectionIx}`),
//     not by type, and `ScenePlayer` holds only component-local state.
//     **a2.07 keeps `s15-break` as a `scene`. The single-section fallback is
//     not needed, and the other three exposed units (a2.28, a2.29, a2.32) can
//     take repeated `scenario` on the same evidence, subject to their own check.**
//
//  9. « hideLines is the band's one funded engineering item » — NOT SHIPPED.
//     Zero matches for `hideLines` across `ealch-v2/src`. Blocking step 3 has
//     not landed. Consequence, taken from the prompt's own instruction:
//     `s08-fast` ships as designed because its questions ask which STAGE a line
//     belongs to and the transcript never states a stage, and `s16-offscript`
//     is HELD. The lesson ships at 23 missions and 25 sections. See §C.
//
//
// 10. « hasPlainNasalFor's aime/dame/jaune/scène/pleine exemption » — PRESENT IN
//     THE SOURCE, AND UNREACHABLE FOR FOUR OF ITS OWN FIVE EXAMPLES. This is a
//     FOURTH blind spot, distinct from the three in Corrections §14.1, and it
//     was found by running the real checker rather than reasoning about it.
//
//     `density.logic.ts` ends `hasPlainNasalFor` with a deliberate escape:
//
//         // A French nasal vowel only exists where the m/n is NOT followed by
//         // a vowel ... aime /ɛm/, dame /dam/, jaune /ʒon/, scène /sɛn/,
//         // pleine /plɛn/.  Without this, the rule fired on every one of those.
//         return !/[aeiouyàâäéèêëîïôöûüù][nm]e/i.test(fr);
//
//     But the function's FIRST line is `if (hasPlainNasal(respell)) return true`,
//     which never consults the French at all. Measured:
//
//         aime   / EHM     FLAGGED   hasPlainNasal(respell)=true
//         scène  / SEHN    FLAGGED   hasPlainNasal(respell)=true
//         jaune  / ZHOHN   FLAGGED   hasPlainNasal(respell)=true
//         pleine / PLEHN   FLAGGED   hasPlainNasal(respell)=true
//         dame   / DAM     clean     hasPlainNasal(respell)=false
//
//     Only `dame` escapes, because a bare `AM` does not trip the first check
//     while a digraph vowel (`EHM`, `OHN`) does. **Four of the five words the
//     comment names as fixed are still flagged.** The repair landed behind a
//     short-circuit that fires first.
//
//     Consequence for this build: `même` respelled `mehm` is correct French
//     (/mɛm/, an oral vowel and a pronounced consonant) and is flagged. Row
//     .164 was REWORDED rather than kept, so that a theme seven other units
//     import from carries no row a future global guard will flag. The defect
//     itself is reported rather than worked around silently: it is worth a
//     ticket, and sons.07 ships `j'aime`.
//
//     THE ASSERTION IN THIS BUILD'S TEST IS PHRASED "the respelling is
//     correct", never "the checker is quiet", exactly as Corrections §14.1
//     requires.
//
// ════════════════════════════════════════════════════════════════════════════
//  §A. IDENTITY — quoted off the spine, byte for byte, and it disagrees
// ════════════════════════════════════════════════════════════════════════════
//
// `themes` on the spine and on the published unit row is ['nourriture','cafe'].
// `nourriture` is a phantom: 0 published, 0 in seed, no `themeMeta` entry among
// the 124 keys. This build authors into `au-restaurant` per collation §5 and
// does NOT edit the spine, which is band blocking step 2 and covers all eight
// units in one reviewed diff.
//
// THE SPINE EDIT HAS NOT LANDED AS OF THIS BUILD. Recorded in the build report
// as outstanding. No id in this file lands in `nourriture`.
//
// Note the canDo carries a CURLY apostrophe (U+2019) in `waiter’s`. Quoted from
// the seed unit row, not retyped.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
const Cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export const UNIT = {
  id: 'a2.07',
  seq: 24,
  level: 'a2' as const,
  track: 'a2',
  title: 'At the Restaurant',
  sub: 'Au restaurant',
  canDo: 'Can order a full meal, ask for the bill and handle the waiter’s questions',
  prereqUnitIds: ['a1.29'],
} as const;

export const LESSON_ID = 'a2.07.l1';

export const THEME = 'au-restaurant';
export const QC_THEME = 'quebec-et-francophonie';

/** Measured 2026-08-15, `pnpm corpus:probe --theme au-restaurant`. */
export const THEME_ROWS_BEFORE = 346;
export const A2_ROWS_BEFORE = 130;
export const SEED_ROWS_BEFORE = 17;

export const ID_FIRST = 132;
export const ID_LAST = 199;

export const A = (n: number) => `fr.a2.${THEME}.${String(n).padStart(3, '0')}`;
export const Q = (n: number) => `fr.a2.${QC_THEME}.${String(n).padStart(3, '0')}`;

// ════════════════════════════════════════════════════════════════════════════
//  §B. THE REPAIR MOVE — the band's Owns, and a CONTRACT, not a suggestion
// ════════════════════════════════════════════════════════════════════════════
//
// Settled in collation §1.6 and §7.1. Authored ONCE, here, for all eight units.
// The other seven author zero repair rows and cite these by `itemId`.
//
//  1. Exactly six rows. Six rungs, no more, no fewer.
//  2. A contiguous run at the HEAD of the id block: .132 to .137.
//  3. Ordered by FACE COST and the order is part of the contract. Citing units
//     quote "rung 3", so the ordering must never be reshuffled.
//  4. Every `fr` is DOMAIN-NEUTRAL. Not one restaurant noun. A doctor's unit, a
//     hotel unit and a technology unit all have to put the same string in front
//     of a learner. `Qu'est-ce que ça veut dire, "cuisson" ?` is exactly what
//     must NOT be authored as a citable row.
//  5. Every one carries flashcard + voiceflash + dictation, so a citing unit can
//     reach for a cardDeck, a practice speak drill or a dictée and find the
//     matching drill on the item. Verified legal against Postgres: the triple
//     appears on 861 published rows, and `dictation` on `kind: 'phrase'` on 60.
//  6. Respell per RESPELL-CONVENTION.md with NO tie characters. U+203F renders
//     as a low underscore on a Pixel 6 and has already hit shipped sons.10.
//     None of the six needs a liaison mark, so the constraint costs nothing.
//  7. Corpus rows FIRST, lesson prose second. `s17-repair` quotes them by id.
//  8. FROZEN at publication. The ids, the strings, the order and the drill set
//     never change. `a2-07-restaurant.test.ts` asserts all five properties so a
//     later edit goes red rather than quietly breaking seven lessons.
//
// WHY ALL SIX ARE AUTHORED RATHER THAN IMPORTED, given §5 of the header above
// found six pre-existing generic rows. The prompt overruled importing and the
// reason survives measurement: the citable list must be ONE contiguous,
// single-theme, single-owner block. Mixing four foreign-theme imports into the
// band's most-cited id list makes seven units depend on rows a2.07 neither owns
// nor can guarantee stay published. Cross-theme duplication is settled legal
// precedent here (collation §7.5, `l'addition` in both `cafe` and
// `au-restaurant`), and the rule the flashcard hub actually enforces is
// INTRA-theme. A fold-based sweep confirms one row per string inside
// `au-restaurant`: zero intra-theme collisions among the six.

export const REPAIR_FIRST = 132;
export const REPAIR_LAST = 137;

/** The frozen block, in face-cost order. Rung n is `REPAIR_IDS[n - 1]`. */
export const REPAIR_IDS = [A(132), A(133), A(134), A(135), A(136), A(137)] as const;

/** Every repair row carries exactly this drill set. Asserted by the test. */
export const REPAIR_DRILLS: Item['drills'] = ['flashcard', 'voiceflash', 'dictation', 'review'];

/** Domain words no repair string may contain. Asserted by the test, by list,
 *  not by eye. */
export const RESTAURANT_WORDS = [
  'restaurant', 'table', 'carte', 'menu', 'plat', 'addition', 'serveur', 'serveuse',
  'boisson', 'entrée', 'dessert', 'cuisson', 'café', 'vin', 'eau', 'pain', 'repas',
  'commande', 'commander', 'manger', 'boire', 'terrasse', 'apéritif', 'note',
] as const;

// ════════════════════════════════════════════════════════════════════════════
//  §C. WHAT THIS LESSON DOES NOT DO, AND WHOSE IT IS
// ════════════════════════════════════════════════════════════════════════════
//
//  the partitive        a1.29, seq 8, SHIPPED and this unit's declared prereq.
//                       ONE groupDrill of recall at the point of ordering.
//                       Never a second teaching pass: a1-29-partitifs.test.ts
//                       asserts partitive claims across the whole seed.
//  money and price      a2.26, seq 25. Collation §C5. This unit owns the BILL as
//                       a stage of the script; a2.26 owns money as a topic. The
//                       design's `s19-money` (six spoken totals, MCQ on the
//                       figure) is CUT. The learner hears one total, once, as
//                       the closing turn of the scenario, and is not scored on it.
//  the register ladder  a2.29, seq 28, once for all eight. This unit teaches a
//                       five-rung ordering gradient inside the restaurant frame
//                       and nothing more. `pourriez-vous` appears NOWHERE: it is
//                       unsettled pending the a2.13 amendment, which is
//                       specified in 05-A2-13-AMENDMENT-SPEC.md and NOT applied.
//  y and en             a2.25, which HAS shipped (see header §3). No teaching
//                       move here is built on them. `il n'y en a plus` is
//                       authored as UNANALYSED LEXIS, a whole chunk the learner
//                       recognises, never glossed, never decomposed, never in a
//                       scored surface that turns on the pronouns.
//  comparatives         a2.08, seq 32. The menu reading wants `plus copieux que`
//                       and does not get it.
//  fault description    a2.32. Act 4 here is a SCRIPT DEVIATION, not a complaint
//                       ladder.
//  elision / liaison    sons.07 and sons.10. Quoted, never taught.
//
// ════════════════════════════════════════════════════════════════════════════
//  §D. THE REFRAME
// ════════════════════════════════════════════════════════════════════════════

export const REFRAME = 'You never start. He asks, you answer.';

// Rejected, and why, per Doctrine §F:
//
//   "Order in the order he asks"        describes the script but gives the
//                                       learner nothing to execute.
//   "Say what you would like, not what  the politeness gradient alone, which is
//    you want"                          one mission, not a lesson.
//
// Doctrine §B.4 wants a rule runnable in the half-second before the learner
// opens their mouth. This one is, and it inverts the skill order to
// comprehension-first, which is the order TEF and TCF weight it.

export const PARTITIVE_UNIT = 'a1.29';
export const A129_REFRAME = 'Un is one of them. Du is some of it.';
export const MONEY_UNIT = 'a2.26';
export const REGISTER_UNIT = 'a2.29';
export const YEN_UNIT = 'a2.25';
export const ELISION_UNIT = 'sons.07';
export const LIAISON_UNIT = 'sons.10';

/** a1.29's deckTranche already releases these nine. NAME them. DO NOT TOUCH
 *  them: editing any one moves a shipped A1 lesson. Verified present in
 *  `a1.29.l1.deckTranche` (a lesson-level field, an array per act). */
export const A129_TRANCHE = [
  'fr.a1.au-restaurant.098', 'fr.a1.au-restaurant.102', 'fr.a1.au-restaurant.112',
  'fr.a1.au-restaurant.145', 'fr.a1.au-restaurant.176', 'fr.a1.au-restaurant.182',
  'fr.a1.au-restaurant.184', 'fr.a1.au-restaurant.185', 'fr.a1.au-restaurant.189',
] as const;

// ════════════════════════════════════════════════════════════════════════════
//  §E. IMPORTED, NOT AUTHORED — every id verified `published` 2026-08-15
// ════════════════════════════════════════════════════════════════════════════
//
// Collation §1.3's interpretation rule: a published row is REACHABLE and must be
// imported by itemId, never re-authored.

export const IMPORTED = {
  /** Already in the server's voice. The whole of the corpus's waiter, all 7. */
  waiter: [
    'fr.a1.au-restaurant.111', // C'est pour combien de personnes ?
    'fr.a1.au-restaurant.116', // Qu'est-ce que vous prenez ?
    'fr.a1.au-restaurant.118', // Vous avez une table pour deux ce soir.
    'fr.a1.au-restaurant.198', // Le service est compris dans le prix.
    'fr.a2.au-restaurant.054', // avec ou sans sucre ?
    'fr.a2.au-restaurant.063', // Prenez votre temps pour choisir.
    'fr.a2.au-restaurant.078', // Vous allez adorer ce dessert au caramel.
  ],
  /** The learner's half, which the corpus finished long ago. */
  customer: [
    'fr.a1.au-restaurant.102', // Je voudrais...
    'fr.a1.au-restaurant.112', // Je prends...
    'fr.a1.au-restaurant.103', // L'addition, s'il vous plaît.
    'fr.a1.au-restaurant.039', // Une table pour deux, s'il vous plaît
    'fr.a1.au-restaurant.043', // Une table pour deux, s'il vous plaît.
    'fr.a1.au-restaurant.040', // Qu'est-ce que vous me conseillez ?
    'fr.a1.au-restaurant.193', // Ce n'est pas ce que j'ai commandé.  <- §4, the collision
    'fr.a1.au-restaurant.194', // Pouvez-vous réchauffer mon plat ?
    'fr.a1.au-restaurant.190', // Avez-vous des plats végétariens ?
    'fr.a1.au-restaurant.186', // Y a-t-il des noix dans ce plat ?
    'fr.a2.au-restaurant.058', // Pouvez-vous m'apporter du pain ?
    'fr.a2.au-restaurant.061', // C'est fait maison ?
  ],
  /** Cuissons, the tip, the carafe, the plat du jour. */
  nouns: [
    'fr.a1.au-restaurant.020', // à point
    'fr.a1.au-restaurant.021', // bien cuit
    'fr.a1.au-restaurant.022', // saignant
    'fr.a1.au-restaurant.010', // le pourboire
    'fr.a1.au-restaurant.096', // la carafe d'eau
    'fr.a1.au-restaurant.098', // le plat du jour
    'fr.a1.au-restaurant.159', // Le serveur apporte une carafe d'eau fraîche.
  ],
  /** The allergy and preference run, .051 to .063, all 13 published. */
  allergy: [
    'fr.a2.au-restaurant.051', 'fr.a2.au-restaurant.052', 'fr.a2.au-restaurant.053',
    'fr.a2.au-restaurant.057', 'fr.a2.au-restaurant.062',
  ],
  /** From cafe, and the only cross-theme import in a mission. */
  cafe: ['fr.a1.cafe.005'], // Sur place ou à emporter ?
  /** Prior exposure to the repair move. NAMED, left where they are, never cited
   *  by the band. See header §5. */
  priorRepair: [
    'fr.a1.expressions-frequentes.123', 'fr.a1.expressions-frequentes.124',
    'fr.sons.questions.022', 'fr.sons.questions.023',
    'fr.a2.questions-du-quotidien.008', 'fr.a2.expressions-frequentes.073',
  ],
} as const;

// ════════════════════════════════════════════════════════════════════════════
//  §F. THE ROWS
// ════════════════════════════════════════════════════════════════════════════

type Bucket = 'repair' | 'script' | 'failure' | 'gradient' | 'quebec';

/** Whose mouth the row comes out of. The band's 40% floor is measured on this,
 *  and the test asserts it. */
type Voice = 'server' | 'learner';

export type Row = Item & { bucket: Bucket; voice: Voice; rung?: number };

const T = ['a2', 'restaurant', 'situation'];

/** flashcard + voiceflash + dictation + review. The frozen repair set. */
const RD = REPAIR_DRILLS;
/** A spoken card the learner hears and reproduces. */
const PV: Item['drills'] = ['flashcard', 'voiceflash', 'review'];
/** A phrase the dictée also takes. `dictation` on `kind: 'phrase'` is legal:
 *  60 published rows carry it. */
const PD: Item['drills'] = ['flashcard', 'voiceflash', 'dictation', 'review'];
/** A full sentence that also feeds the dictée and the sentence hub. */
const SD: Item['drills'] = ['flashcard', 'voiceflash', 'dictation', 'sentence', 'review'];
/** A sentence card without the dictée. */
const SN: Item['drills'] = ['flashcard', 'voiceflash', 'sentence', 'review'];

const R = (
  n: number,
  fr: string,
  en: string,
  ipa: string,
  respell: string,
  bucket: Bucket,
  voice: Voice,
  kind: Item['kind'],
  drills: Item['drills'],
  notes: string,
  rung?: number,
): Row => ({
  id: A(n),
  kind,
  level: 'a2',
  theme: THEME,
  fr,
  en,
  ipa,
  respell,
  tags: [...T, bucket, voice],
  drills,
  audioRef: null,
  version: 1,
  notes,
  bucket,
  voice,
  ...(rung ? { rung } : {}),
});

export const ROWS: readonly Row[] = [
  /* ══════════════════════════════════════════════════════════════════════
   *  THE REPAIR MOVE — .132 to .137, FROZEN, the band's Owns.
   *  Six rungs in face-cost order. Rung 1 is the cheapest thing you can say;
   *  rung 6 is the most explicit. Not one restaurant noun in any of them.
   *  Do not renumber. Do not reorder. Do not re-theme. Seven lessons cite
   *  these by id and `04-REPAIR-MOVE-IDS.md` is the citation target.
   * ══════════════════════════════════════════════════════════════════════ */
  R(132, 'Pardon ?', 'Sorry?', '/paʁ.dɔ̃/', 'par-DOHⁿ',
    'repair', 'learner', 'phrase', RD,
    'RUNG 1, the cheapest rung on the ladder. One word, and it admits nothing about why you did not catch it. It is also the only rung a French speaker uses without thinking, which is why it is first.', 1),
  R(133, 'Vous pouvez répéter, s\'il vous plaît ?', 'Can you say that again, please?', '/vu pu.ve ʁe.pe.te sil vu plɛ/', 'voo poo-VAY ray-pay-TAY seel voo PLEH',
    'repair', 'learner', 'phrase', RD,
    'RUNG 2. Asks for the whole thing again and still says nothing about what went wrong. An exact twin is published at fr.a1.expressions-frequentes.123; this is the au-restaurant copy the band cites, and cross-theme duplication is settled precedent.', 2),
  R(134, 'Plus lentement, s\'il vous plaît.', 'More slowly, please.', '/ply lɑ̃t.mɑ̃ sil vu plɛ/', 'plü lahⁿt-MAHⁿ seel voo PLEH',
    'repair', 'learner', 'phrase', RD,
    `RUNG 3. The first rung that names the problem: it was the speed. Exact twin at fr.a1.expressions-frequentes.124. Note plus is /ply/ here, s silent, which is the ${unitRef('sons.10')} rule quoted rather than taught.`, 3),
  R(135, 'Je n\'ai pas bien compris.', 'I didn\'t quite catch that.', '/ʒə ne pa bjɛ̃ kɔ̃.pʁi/', 'zhuh nay pah byehⁿ kohⁿ-PREE',
    'repair', 'learner', 'phrase', RD,
    'RUNG 4. Admits the comprehension failure outright. bien is what separates it from the blunter Je n\'ai pas compris, which is published at fr.a2.verbes.633; the two do NOT fold together, so bien is testable in a typeIn.', 4),
  R(136, 'Qu\'est-ce que ça veut dire ?', 'What does that mean?', '/kɛs kə sa vø diʁ/', 'kess kuh sa veu DEER',
    'repair', 'learner', 'phrase', RD,
    'RUNG 5. Narrows the failure to one word rather than the whole turn. Twins at fr.sons.questions.022 and fr.a2.questions-du-quotidien.008. The domain-neutral form is the citable one: the restaurant-flavoured variant naming a cuisson is deliberately NOT authored.', 5),
  R(137, 'Vous pouvez me l\'écrire, s\'il vous plaît ?', 'Could you write it down for me, please?', '/vu pu.ve mə le.kʁiʁ sil vu plɛ/', 'voo poo-VAY muh lay-KREER seel voo PLEH',
    'repair', 'learner', 'phrase', RD,
    'RUNG 6, the most explicit and the most expensive. It concedes that the spoken channel has failed and asks to change medium. Genuinely new: 0 rows corpus-wide before this build.', 6),

  /* ══════════════════════════════════════════════════════════════════════
   *  THE WAITER'S SCRIPT — .138 to .167, the eight stages, in his voice.
   *  This is the unit's Own and the reason act 2 is the heaviest act.
   *  All thirty are `voice: 'server'`.
   * ══════════════════════════════════════════════════════════════════════ */

  /* ── Stages 1 to 3: arrival, seating, drinks ─────────────────────────── */
  R(138, 'Bonsoir, vous avez réservé ?', 'Good evening, do you have a reservation?', '/bɔ̃.swaʁ vu.z‿a.ve ʁe.zɛʁ.ve/', 'bohⁿ-SWAR voo-z a-vay ray-zehr-VAY',
    'script', 'server', 'sentence', SD,
    'STAGE 1. The first thing said to you, and the learner has rehearsed none of it. Liaison vous_avez written without the U+203F tie, per the band rule.'),
  R(139, 'Vous êtes combien ?', 'How many of you are there?', '/vu.z‿ɛt kɔ̃.bjɛ̃/', 'voo-z eht kohⁿ-BYEHⁿ',
    'script', 'server', 'phrase', PV,
    'STAGE 1, the spoken register. fr.a1.au-restaurant.111 C\'est pour combien de personnes ? is the fuller form and is IMPORTED beside this one, so the learner meets both. An EXACT twin is published at fr.a1.cafe.160: same utterance, adjacent situation, different theme. Legal, and collation §7.5 says do not "fix" it.'),
  R(140, 'En terrasse ou à l\'intérieur ?', 'On the terrace or inside?', '/ɑ̃ tɛ.ʁas u a lɛ̃.te.ʁjœʁ/', 'ahⁿ teh-RASS oo a lehⁿ-tay-RYEUR',
    'script', 'server', 'phrase', PV,
    'STAGE 2. A binary question, which is the easiest kind to answer and the easiest kind to miss entirely if you are not expecting to be asked anything.'),
  R(141, 'Suivez-moi, je vous prie.', 'Follow me, please.', '/sɥi.ve mwa ʒə vu pʁi/', 'sü-ee-vay MWA zhuh voo PREE',
    'script', 'server', 'sentence', SN,
    'STAGE 2. An instruction, not a question, and the learner has to recognise that no answer is wanted. je vous prie is the formal register and carries no teaching load here.'),
  R(142, 'Installez-vous, je vous apporte la carte.', 'Take a seat, I\'ll bring you the menu.', '/ɛ̃s.ta.le vu ʒə vu.z‿a.pɔʁt la kaʁt/', 'ehⁿs-ta-lay VOO zhuh voo-z a-port la KART',
    'script', 'server', 'sentence', SD,
    'STAGE 3. Two moves in one turn, which is what makes a real encounter harder than a phrase list.'),
  R(143, 'Et comme boisson ?', 'And to drink?', '/e kɔm bwa.sɔ̃/', 'ay kom bwa-SOHⁿ',
    'script', 'server', 'phrase', PV,
    'STAGE 3, and claimed at 0 rows corpus-wide before this build. Confirmed: 0. comme here means "by way of", a use the learner has not met.'),
  R(144, 'Une carafe d\'eau, ça ira ?', 'A jug of water, will that do?', '/yn ka.ʁaf do sa i.ʁa/', 'ün ka-RAF DOH sa ee-RA',
    'script', 'server', 'sentence', SN,
    'STAGE 3. ça ira is a check, not an offer, and answering it wrongly gets you a bottle you pay for. fr.a1.au-restaurant.096 la carafe d\'eau is IMPORTED beside it.'),
  R(145, 'Vous prendrez un apéritif ?', 'Will you have an aperitif?', '/vu pʁɑ̃.dʁe œ̃.n‿a.pe.ʁi.tif/', 'voo prahⁿ-DRAY uhⁿ-n a-pay-ree-TEEF',
    'script', 'server', 'phrase', PV,
    'STAGE 3. The futur simple in the waiter\'s mouth, which the learner receives without being asked to produce it. Doctrine §B.3: the corpus may carry tenses the lesson body does not teach.'),
  R(146, 'Plate ou gazeuse ?', 'Still or sparkling?', '/plat u ɡa.zøz/', 'PLAT oo ga-ZEUZ',
    'script', 'server', 'phrase', PV,
    'STAGE 3. Two words, no verb, no frame, and it is the single most common thing a learner fails to catch at a French table.'),

  /* ── Stage 4: the order ──────────────────────────────────────────────── */
  R(147, 'Vous avez choisi ?', 'Have you decided?', '/vu.z‿a.ve ʃwa.zi/', 'voo-z a-vay shwa-ZEE',
    'script', 'server', 'phrase', PD,
    'STAGE 4, and the pivot of the whole encounter. Claimed at 0 corpus-wide; confirmed 0. This is the question the learner has been waiting for and it arrives in the passé composé. Carries `dictation` because s20-write names it: a dictée item without the drill is the defect A1-BUILD-INVARIANTS §6 asks every build to assert, and this build\'s first pass had it.'),
  R(148, 'Vous avez fait votre choix ?', 'Have you made your choice?', '/vu.z‿a.ve fɛ vɔtʁ ʃwa/', 'voo-z a-vay FEH votr SHWA',
    'script', 'server', 'sentence', SN,
    'STAGE 4, the same move in different words. Two forms of one question is the point: a script is not a fixed string.'),
  R(149, 'Et ensuite ?', 'And then?', '/e ɑ̃.sɥit/', 'ay ahⁿ-SÜEET',
    'script', 'server', 'phrase', PV,
    'STAGE 4. Two words that mean "what is your main course", and nothing in them says so.'),
  R(150, 'Quelle cuisson ?', 'How would you like it cooked?', '/kɛl kɥi.sɔ̃/', 'kehl kü-ee-SOHⁿ',
    'script', 'server', 'phrase', PV,
    'STAGE 4. The cuissons themselves (à point, bien cuit, saignant) are IMPORTED from fr.a1.au-restaurant.020 to .022 rather than re-authored.'),
  R(151, 'Je vous conseille le plat du jour.', 'I recommend the dish of the day.', '/ʒə vu kɔ̃.sɛj lə pla dy ʒuʁ/', 'zhuh voo kohⁿ-SEHY luh pla dü ZHOOR',
    'script', 'server', 'sentence', SD,
    'STAGE 4. The mirror of the learner\'s imported fr.a1.au-restaurant.040 Qu\'est-ce que vous me conseillez ?, and the pair is what makes it an exchange.'),
  R(152, 'Et comme entrée ?', 'And for a starter?', '/e kɔm ɑ̃.tʁe/', 'ay kom ahⁿ-TRAY',
    'script', 'server', 'phrase', PV,
    'STAGE 4, and the same comme frame as .143. Naming the repeat is the teaching.'),

  /* ── Stages 5 and 6: the check-back and the upsell ───────────────────── */
  R(153, 'Tout se passe bien ?', 'Is everything all right?', '/tu sə pas bjɛ̃/', 'too suh pass BYEHⁿ',
    'script', 'server', 'phrase', PV,
    'STAGE 5. Asked mid-meal, mouth full, and it wants only oui or a problem.'),
  R(154, 'Ça a été ?', 'Was everything OK?', '/sa a e.te/', 'sa a ay-TAY',
    'script', 'server', 'phrase', PV,
    'STAGE 5, said while clearing. Three syllables, a passé composé of être with no subject the learner recognises, and it is the hardest short question in the encounter.'),
  R(155, 'Je vous débarrasse ?', 'Shall I clear these away?', '/ʒə vu de.ba.ʁas/', 'zhuh voo day-ba-RASS',
    'script', 'server', 'phrase', PV,
    'STAGE 5. A question shaped like a statement, marked only by intonation, which is why it lands in the listening act rather than a card.'),
  R(156, 'Ce sera tout ?', 'Will that be all?', '/sə sə.ʁa tu/', 'suh suh-ra TOO',
    'script', 'server', 'phrase', PV,
    'STAGE 6. Claimed at 0 corpus-wide. Measured: TWO rows exist, both in the CUSTOMER\'s voice and both in rp-repas, which is import-only. fr.a2.rp-repas.004 « ce sera tout » is a bare fragment and .007 is « Non merci, ce sera tout. ». The waiter\'s QUESTION is genuinely new; the fold collides with .004 only because it strips case and the question mark.'),
  R(157, 'Vous prendrez un dessert ?', 'Will you have a dessert?', '/vu pʁɑ̃.dʁe œ̃ de.sɛʁ/', 'voo prahⁿ-DRAY uhⁿ day-SEHR',
    'script', 'server', 'phrase', PV,
    'STAGE 6, the upsell, and the same futur simple frame as .145. A learner who caught .145 catches this one.'),
  R(158, 'Un café pour finir ?', 'A coffee to finish?', '/œ̃ ka.fe puʁ fi.niʁ/', 'uhⁿ ka-FAY poor fee-NEER',
    'script', 'server', 'phrase', PV,
    'STAGE 6. No verb at all, which is how most of the upsell is actually said.'),
  R(159, 'Je vous laisse la carte des desserts.', 'I\'ll leave you the dessert menu.', '/ʒə vu lɛs la kaʁt de de.sɛʁ/', 'zhuh voo LESS la kart day day-SEHR',
    'script', 'server', 'sentence', SN,
    'STAGE 6. A statement that is functionally a question, and the learner who says nothing gets the menu anyway.'),

  /* ── Stages 7 and 8: service and the close ───────────────────────────── */
  R(160, 'Je vous apporte ça tout de suite.', 'I\'ll bring you that right away.', '/ʒə vu.z‿a.pɔʁt sa tu d(ə) sɥit/', 'zhuh voo-z a-port sa too duh SÜEET',
    'script', 'server', 'sentence', SD,
    'STAGE 7. Closes the ordering stage. Nothing is asked, and the learner needs to recognise that too.'),
  R(161, 'Vous réglez comment ?', 'How are you paying?', '/vu ʁe.ɡle kɔ.mɑ̃/', 'voo ray-glay ko-MAHⁿ',
    'script', 'server', 'phrase', PV,
    `STAGE 8, and the boundary with ${unitRef('a2.26')} runs right here. This is the waiter\'s CLOSING QUESTION and belongs to ${unitRef('a2.07')}. The money it is about, the total, the change and the coins, belong to ${unitRef('a2.26')}. Claimed 0 corpus-wide; confirmed 0.`),
  R(162, 'Ensemble ou séparément ?', 'Together or separately?', '/ɑ̃.sɑ̃bl u se.pa.ʁe.mɑ̃/', 'ahⁿ-SAHⁿBL oo say-pa-ray-MAHⁿ',
    'script', 'server', 'phrase', PV,
    'STAGE 8. Claimed 0 corpus-wide; confirmed 0. Two nasals in one short question and both are marked with the superscript, checked through the real hasPlainNasalFor rather than by eye.'),
  R(163, 'Le service est compris.', 'Service is included.', '/lə sɛʁ.vis ɛ kɔ̃.pʁi/', 'luh sehr-VEESS eh kohⁿ-PREE',
    'script', 'server', 'sentence', SN,
    `STAGE 8, and a BILL FACT, which collation §C5 assigns to ${unitRef('a2.07')}. fr.a1.au-restaurant.198 is the fuller published form and is IMPORTED beside it. The tip itself, fr.a1.au-restaurant.010 le pourboire, is imported too.`),
  R(164, 'Je vous fais une seule addition ?', 'Shall I make it one bill?', '/ʒə vu fɛ yn sœl a.di.sjɔ̃/', 'zhuh voo FEH ün seul a-dee-SYOHⁿ',
    'script', 'server', 'sentence', SN,
    'STAGE 8. The follow-up to .162, and the learner who did not catch .162 gets asked again in different words. FIRST DRAFT read « sur la même note » and was reworded, not because the respelling was wrong but because `mehm` is a measured FALSE POSITIVE of hasPlainNasalFor. See header §10: the exemption that exists for exactly this shape is unreachable. Rewording keeps a known-flagged row out of a theme seven other units import from.'),
  R(165, 'Bonne soirée, merci de votre visite.', 'Have a good evening, thank you for coming.', '/bɔn swa.ʁe mɛʁ.si də vɔtʁ vi.zit/', 'bon swa-RAY mehr-SEE duh votr vee-ZEET',
    'script', 'server', 'sentence', SN,
    'STAGE 8, the close. The encounter has an end and the learner should recognise it rather than hovering.'),
  R(166, 'Voilà pour vous.', 'Here you are.', '/vwa.la puʁ vu/', 'vwa-LA poor VOO',
    'script', 'server', 'phrase', PV,
    'Said on every delivery, at any stage, and it is the single most frequent thing a waiter says. Deliberately not tied to one stage.'),
  R(167, 'Excusez-moi pour l\'attente.', 'Sorry for the wait.', '/ɛks.ky.ze mwa puʁ la.tɑ̃t/', 'ehks-kü-zay MWA poor la-TAHⁿT',
    'script', 'server', 'sentence', SN,
    'An apology from the other side, which the corpus had none of. The learner has to recognise that nothing is being asked of them.'),

  /* ══════════════════════════════════════════════════════════════════════
   *  THE FAILURE MOVE — .168 to .177. When the script breaks.
   *  Four in the server's voice, six in the learner's.
   * ══════════════════════════════════════════════════════════════════════ */
  R(168, 'Je suis désolé, il n\'y en a plus.', 'I\'m sorry, there\'s none left.', '/ʒə sɥi de.zɔ.le il njɑ̃.n‿a ply/', 'zhuh süee day-zo-LAY eel nyahⁿ-n a PLÜ',
    'failure', 'server', 'sentence', SD,
    `THE DEVIATION, and the line the whole of act 4 turns on. UNANALYSED LEXIS: il n\'y en a plus contains both y and en, which belong to ${unitRef('a2.25')} (which HAS shipped). It is never glossed, never decomposed, and never in a scored surface that turns on the pronouns. The learner recognises the chunk and reaches for a rung.`),
  R(169, 'Nous n\'avons plus de saumon ce soir.', 'We have no more salmon tonight.', '/nu na.vɔ̃ ply də so.mɔ̃ sə swaʁ/', 'noo na-VOHⁿ plü duh so-MOHⁿ suh SWAR',
    'failure', 'server', 'sentence', SD,
    `The same deviation without the pronouns, so the learner has a version they can parse. plus de is the ${unitRef('a1.29')} reduction under negation, quoted as recall, not retaught.`),
  R(170, 'Alors qu\'est-ce que vous me conseillez ?', 'So what do you recommend?', '/a.lɔʁ kɛs kə vu mə kɔ̃.sɛ.je/', 'a-LOR kess kuh voo muh kohⁿ-seh-YAY',
    'failure', 'learner', 'sentence', SD,
    'The hand-back, and the whole point of act 4: the learner who freezes loses the turn, and the learner who hands the choice back keeps it. Built on the imported fr.a1.au-restaurant.040 with alors doing the repair work.'),
  R(171, 'Il manque un plat.', 'A dish is missing.', '/il mɑ̃k œ̃ pla/', 'eel MAHⁿK uhⁿ PLA',
    'failure', 'learner', 'sentence', SN,
    'Authored in place of Ce n\'est pas ce que j\'ai commandé, which already exists at fr.a1.au-restaurant.193 and is IMPORTED instead. See header §4.'),
  R(172, 'Je crois qu\'il y a une erreur sur l\'addition.', 'I think there\'s a mistake on the bill.', '/ʒə kʁwa kil j‿a yn e.ʁœʁ syʁ la.di.sjɔ̃/', 'zhuh KRWA keel ya ün ay-REUR sür la-dee-SYOHⁿ',
    'failure', 'learner', 'sentence', SD,
    `A BILL problem, which is ${unitRef('a2.07')}\'s under §C5, and not a MONEY problem, which would be ${unitRef('a2.26')}\'s. No figure appears in it and none may be added.`),
  R(173, 'Le plat est froid.', 'The dish is cold.', '/lə pla ɛ fʁwa/', 'luh PLA eh FRWA',
    'failure', 'learner', 'sentence', SN,
    `Four words and a fact. Deliberately not a complaint LADDER, which is ${unitRef('a2.29')}\'s Owns; this is one statement, said once.`),
  R(174, 'Je vous le remplace tout de suite.', 'I\'ll replace it for you right away.', '/ʒə vu lə ʁɑ̃.plas tu d(ə) sɥit/', 'zhuh voo luh rahⁿ-PLASS too duh SÜEET',
    'failure', 'server', 'sentence', SD,
    `The repair from his side, and it carries the ${unitRef('a2.06')} direct-object pronoun le in front of the verb. Exposure, not instruction: ${unitRef('a2.06')} shipped at seq 21 and owns it.`),
  R(175, 'Je suis allergique aux arachides, c\'est important.', 'I\'m allergic to peanuts, it\'s important.', '/ʒə sɥi.z‿a.lɛʁ.ʒik o.z‿a.ʁa.ʃid sɛ.t‿ɛ̃.pɔʁ.tɑ̃/', 'zhuh süee-z a-lehr-ZHEEK oh-z a-ra-SHEED seh-t ehⁿ-por-TAHⁿ',
    'failure', 'learner', 'sentence', SD,
    'The escalation that matters. fr.a2.au-restaurant.051 être allergique à and .052 are IMPORTED; this adds the insistence, which is the part a learner drops under pressure.'),
  R(176, 'Est-ce qu\'il y a des fruits à coque dedans ?', 'Are there nuts in it?', '/ɛs kil j‿a de fʁɥi a kɔk də.dɑ̃/', 'ess keel ya day frü-ee a KOK duh-DAHⁿ',
    'failure', 'learner', 'sentence', SD,
    'The formal allergen term, beside the imported everyday fr.a1.au-restaurant.186 Y a-t-il des noix dans ce plat ?. Both are on the menu card in s19.'),
  R(177, 'Je vais demander en cuisine.', 'I\'ll go and ask in the kitchen.', '/ʒə vɛ də.mɑ̃.de ɑ̃ kɥi.zin/', 'zhuh veh duh-mahⁿ-DAY ahⁿ kü-ee-ZEEN',
    'failure', 'server', 'sentence', SD,
    'His answer to .175 and .176, and it closes the exchange without answering it, which is what actually happens.'),

  /* ══════════════════════════════════════════════════════════════════════
   *  THE ORDERING GRADIENT — .178 to .183. The learner's slot, five rungs.
   *  je veux is NOT authored as a corpus row: it is the register error the
   *  scene and s14-errors work on, and a corpus row would make it a flashcard
   *  the learner studies as correct.
   * ══════════════════════════════════════════════════════════════════════ */
  R(178, 'Je prendrais plutôt le poisson.', 'I\'d rather have the fish.', '/ʒə pʁɑ̃.dʁɛ ply.to lə pwa.sɔ̃/', 'zhuh prahⁿ-DREH plü-TOH luh pwa-SOHⁿ',
    'gradient', 'learner', 'sentence', SD,
    `The softest rung, and genuinely new lexis: the conditional of prendre in this use is at 0 restaurant rows. Carried as an unnamed fixed form. The conditional as a FAMILY is ${unitRef('a2.29')}\'s and is not named, conjugated or grouped here.`),
  R(179, 'Ce sera le menu du jour.', 'I\'ll have the set menu of the day.', '/sə sə.ʁa lə mə.ny dy ʒuʁ/', 'suh suh-RA luh muh-NÜ dü ZHOOR',
    'gradient', 'learner', 'sentence', SN,
    `The flattest and most confident rung. FIRST DRAFT read « le menu à vingt-deux euros » and the build\'s own money guard caught it: collation §C5 gives money to ${unitRef('a2.26')} and this unit authors no row carrying a figure. The frame is what this row is for, and it survives the price coming out.`),
  R(180, 'Pour moi, ce sera l\'entrecôte.', 'For me, it\'ll be the rib steak.', '/puʁ mwa sə sə.ʁa lɑ̃.tʁə.kot/', 'poor MWA suh suh-RA lahⁿ-truh-KOHT',
    'gradient', 'learner', 'sentence', SN,
    'The same frame with the person restored, which is how it is said at a table of four.'),
  R(181, 'Je vais prendre le plat du jour.', 'I\'ll have the dish of the day.', '/ʒə vɛ pʁɑ̃dʁ lə pla dy ʒuʁ/', 'zhuh veh PRAHⁿDR luh pla dü ZHOOR',
    'gradient', 'learner', 'sentence', SD,
    `The futur proche, which ${unitRef('a2.19')} shipped at seq 15, applied to ordering. fr.a1.au-restaurant.098 le plat du jour is IMPORTED and is one of ${unitRef('a1.29')}\'s nine deckTranche ids, which this build names and does not touch.`),
  R(182, 'On va prendre deux menus.', 'We\'ll have two set menus.', '/ɔ̃ va pʁɑ̃dʁ dø mə.ny/', 'ohⁿ va PRAHⁿDR deu muh-NÜ',
    'gradient', 'learner', 'sentence', SN,
    `Ordering for the table, and on rather than nous per Doctrine §B.6, which ${unitRef('a2.01')} owns and every A2 lesson inherits.`),
  R(183, 'Ce sera tout pour moi, merci.', 'That\'ll be all for me, thanks.', '/sə sə.ʁa tu puʁ mwa mɛʁ.si/', 'suh suh-ra TOO poor MWA mehr-SEE',
    'gradient', 'learner', 'sentence', SN,
    'The learner\'s answer to the waiter\'s .156 Ce sera tout ?, and the pair is authored deliberately so the adjacency shows.'),

  /* ══════════════════════════════════════════════════════════════════════
   *  OFF SCRIPT — .184 to .189. Six things he says that belong to NONE of
   *  the eight stages, authored for s16-offscript once `listening.hideLines`
   *  shipped (blocking step 3, 2026-08-15).
   *
   *  The eight stages are a script and the point of act 4 is that a real
   *  encounter leaves it. These six are the evidence: each one is ordinary,
   *  frequent, and fits nowhere on the map the learner just memorised. All
   *  six are in the SERVER's voice, which is the band's mandate.
   *
   *  Authored so each stands alone without this lesson's framing, so a2.35
   *  can lift them as a mixed-situation CO set (collation §7.2).
   * ══════════════════════════════════════════════════════════════════════ */
  R(184, 'C\'est à quel nom ?', 'What name is it under?', '/sɛ.t‿a kɛl nɔ̃/', 'seh-t a kehl NOHⁿ',
    'failure', 'server', 'phrase', PV,
    'OFF SCRIPT. Only ever asked if you said you had booked, so it belongs to no stage of a walk-in. Four words and the answer is your surname, which is the one word a learner is least ready to say aloud in French.'),
  R(185, 'Vous permettez ?', 'May I?', '/vu pɛʁ.mɛ.te/', 'voo pehr-meh-TAY',
    'failure', 'server', 'phrase', PV,
    'OFF SCRIPT. Said while already reaching past you for a plate. It is a courtesy, not a question, and the only wrong answer is a long one.'),
  R(186, 'Attention, c\'est très chaud.', 'Careful, it\'s very hot.', '/a.tɑ̃.sjɔ̃ sɛ tʁɛ ʃo/', 'a-tahⁿ-SYOHⁿ seh treh SHOH',
    'failure', 'server', 'sentence', SD,
    'OFF SCRIPT. A warning, and nothing is being asked. A learner running the script hears a question in it and answers oui, which is how you burn your hand.'),
  R(187, 'Il vous faut autre chose ?', 'Do you need anything else?', '/il vu fo otʁ ʃoz/', 'eel voo FOH otr SHOHZ',
    'failure', 'server', 'phrase', PV,
    'OFF SCRIPT, and it looks like stage 6 without being it: this is asked mid-meal about bread or water, not about a dessert you might buy.'),
  R(188, 'On ferme la cuisine dans dix minutes.', 'The kitchen closes in ten minutes.', '/ɔ̃ fɛʁm la kɥi.zin dɑ̃ di mi.nyt/', 'ohⁿ fehrm la kü-ee-ZEEN dahⁿ dee mee-NÜT',
    'failure', 'server', 'sentence', SD,
    'OFF SCRIPT. A statement that is really an instruction: order now or do not order. Nothing in it is a question and everything in it is urgent.'),
  R(189, 'Je reviens tout de suite.', 'I\'ll be right back.', '/ʒə ʁə.vjɛ̃ tu d(ə) sɥit/', 'zhuh ruh-VYEHⁿ too duh SÜEET',
    'failure', 'server', 'sentence', SD,
    'OFF SCRIPT. He is leaving mid-turn and will finish the exchange later. The learner who does not catch it thinks they have been forgotten.'),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  QUEBEC — at most two rows, in quebec-et-francophonie, NEVER in
 *  au-restaurant, and nothing on them is ever the answer to a scored question.
 *  Collation §C3, confirmed by Paul 2026-08-15. The design asked for a whole
 *  Quebec mission and eight rows; overruled. a2.26 is the band's only regional
 *  exception, because tax at the till changes an answer rather than a word.
 *  NEXT FREE measured at fr.a2.quebec-et-francophonie.197.
 * ══════════════════════════════════════════════════════════════════════════ */
const QR = (n: number, fr: string, en: string, ipa: string, respell: string, notes: string): Row => ({
  id: Q(n),
  kind: 'phrase',
  level: 'a2',
  theme: QC_THEME,
  fr,
  en,
  ipa,
  respell,
  tags: ['a2', 'quebec', 'restaurant', 'colour'],
  drills: ['flashcard', 'voiceflash', 'review'],
  audioRef: null,
  version: 1,
  notes,
  bucket: 'quebec',
  voice: 'server',
});

export const QC_ROWS: readonly Row[] = [
  QR(197, 'On soupe à quelle heure ?', 'What time are we having dinner?', '/ɔ̃ sup a kɛ.l‿œʁ/', 'ohⁿ SOOP a keh-LEUR',
    'Quebec colour only. souper is the evening meal in Quebec and the midday one in parts of France; the France-standard dîner is what every scored surface in this lesson uses. Never drilled, never quizzed.'),
  QR(198, 'Je peux avoir la facture, s\'il vous plaît ?', 'Can I have the bill, please?', '/ʒə pø a.vwaʁ la fak.tyʁ sil vu plɛ/', 'zhuh peu a-VWAR la fak-TÜR seel voo PLEH',
    'Quebec colour only. la facture against France\'s l\'addition. fr.a1.au-restaurant.103 L\'addition, s\'il vous plaît. is the form this lesson drills and quizzes; this one appears on one card and nowhere else.'),
];

export const ALL_ROWS: readonly Row[] = [...ROWS, ...QC_ROWS];

/** The band's floor is 40% of newly authored rows in the voice of the person
 *  the learner is talking to (collation §1.5). Asserted by the test. */
export const SERVER_VOICE_FLOOR = 0.4;
