// The a1.16 corpus: what this lesson authors, what it imports, and the one
// shipped respelling it repairs on its own account.
//
// THIS FILE IS THE SINGLE SOURCE OF TRUTH for the 9 authored rows, the 64 rows
// it imports or reuses, and every respelling a1.16 puts on a screen. The
// imported/reused SPLIT is not a constant and must not be quoted as one: a1.14
// merged into seed.json in the middle of this build and moved 22 rows from one
// side of it to the other. placement-imported.ts records the split as it stood
// when the manifest was last generated, and the merge only ever writes what is
// actually absent.
// The lesson body (placement-lesson.ts) reads `fr`, `ipa`, `respell` and `en`
// FROM HERE and never restates them, for the same reason couleurs-corpus.ts and
// adjectifs-corpus.ts do: before that convention one word's transcription was
// typed by hand in five sections and the five copies were free to drift.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE PRE-FLIGHT PROBE RAN, AND IT TOOK THREE PASSES TO ASK THE RIGHT
//  QUESTION. THE THIRD PASS IS THE ONE THAT CHANGED THE PLAN.
// ══════════════════════════════════════════════════════════════════════════
//
// A1-16-ADJECTIVE-PLACEMENT-PROMPT.md opens with "PRE-FLIGHT: NOT RUN. RUN IT
// FIRST" and quarantines nine claims in a `## UNVERIFIED` block. Measured
// against Postgres on 2026-08-06 with `pnpm corpus:probe`,
// `scripts/_placement_probe.ts`, `_placement_probe2.ts` and `_placement_probe3.ts`:
//
//   1. "adjectifs-essentiels holds 632 published rows (fr.a1.*.001-331 with ten
//      gaps, plus fr.sons.*.001-311)." CONFIRMED TO THE ROW. 632 in Postgres, 4
//      in seed.json. fr.a1 count=321 max=331 gaps at 200, 207, 235, 237, 238,
//      259, 274, 286, 290, 307. fr.sons count=311 max=311, no gaps.
//      NEXT FREE, per prefix: fr.a1 .332, fr.sons .312.
//
//   2. "The pre-nominal adjectives exist as headwords." CONFIRMED, all 21
//      probed, every one of them. NOT ONE HEADWORD IS AUTHORED HERE. The brief
//      says "never act on this without the probe; it is exactly the assumption
//      that broke the last four briefs", and the probe agreed with the brief
//      rather than with the fear.
//
//   3. "Which id prefix holds headwords." Same two-prefix split as couleurs and
//      as a1.14 measured it: fr.sons.* is word and phrase, fr.a1.* is sentence,
//      with no crossover. So the authored rows below are SENTENCES and run
//      fr.a1.adjectifs-essentiels.332+.
//
//   4. "How much sentence evidence exists for pre-nominal order." The brief
//      treats this as the open question and expects scarcity. IT IS THE
//      OPPOSITE. Measured across 27,198 published sentences:
//
//          un grand    57      un petit     65      un nouveau  93
//          une grande  39      une petite   41      une nouvelle 79
//          un bon      37      une bonne    51      un vieux    12
//          un beau     17      une belle    23      un joli     14
//
//      Pre-nominal order is not rare in this corpus. It is everywhere, and
//      fr.a1.adjectifs-essentiels.001-.050 and .196-.219 read as if they were
//      built for this lesson.
//
// ── Where the brief was WRONG, and the correction that mattered most ──────
//
// THE BRIEF SAYS: "You need sentence evidence of both orders." True, and it
// hides a trap the brief does not name. A first pass at the default order found
// 716 candidate a1 sentences and ALMOST ALL OF THEM ARE USELESS HERE, because
// they are PREDICATE adjectives rather than attributive ones:
//
//     « La porte est ouverte. »      the adjective follows the VERB
//     « C'est une question facile. » the adjective follows the NOUN
//
// Only the second says anything about placement. A learner cannot put a
// predicate adjective in the wrong position, because there is no position to
// choose: there is nothing in front of it to go in front of. A lesson built on
// « La porte est ouverte. » would teach the rule on sentences where the rule
// cannot be broken.
//
// `_placement_probe3.ts` separates the two by structure rather than by eye
// (determiner + noun + adjective, with no copula between), and the real pool is:
//
//     ATTRIBUTIVE post-nominal    241 a1 sentences
//     ATTRIBUTIVE pre-nominal     580 a1 sentences
//     nouns attested with an adjective on BOTH sides   50
//
// Every imported row below comes off that measured pool. None was guessed.
//
// ── The `des beaux` finding, which the brief got backwards ────────────────
//
// The brief says: "`de beaux` against `des beaux` is worth probing directly. If
// the corpus contains `des beaux`, that is a shipped error to report, not
// evidence."
//
// The corpus contains exactly one `des beaux`:
//
//     fr.a1.jours-et-mois.084   Mars marque le retour des beaux jours.
//
// IT IS NOT AN ERROR. `des` there is `de` + `les` contracted, the return OF THE
// fine days, and a contracted definite article is untouched by this lesson's
// rule. The rule only reaches the INDEFINITE plural `des`. Reporting that row as
// a defect would have sent somebody to "fix" correct French.
//
// The genuine prescriptive violations do exist and none of them is at a1 and
// none of them is this lesson's to change:
//
//     fr.a2.conflits-reconciliation.059   des petits désaccords
//     fr.b1.couple-amour.042              des petits mots surprises
//     fr.b2.systeme-de-sante.150          des nouveaux arrivants
//
// (`des petits pois`, `des grands fonds`, `des petites créances` and the other
// hits are fixed compounds or de+les and are correct.) Recorded, not touched.
//
// ── What is NOT authored, and why the list is so short ────────────────────
//
// The correct plural form is abundantly published and did not need one row:
//
//     de beaux 3 · de belles 4 · de bons 10 · de bonnes 12 · de vieux 6
//     de nouveaux 30 · de petits 2 · de petites 4 · de jolies 2 · de grands 2
//
// So are the split sentences the brief thought would cost a card to invent:
// .006, .007, .008, .010, .027, .035, .039 and .079 all put a member of the
// closed set in front of a noun and a colour behind it, in one A1 sentence.
//
// ── What IS authored: the four meaning-changing pairs, and nothing else ───
//
// The probe confirms the brief's one correct prediction. Both orders of a
// meaning-changing pair are essentially unattested:
//
//     un ancien professeur  1 (b1)   un professeur ancien  0
//     un cher ami           0        un repas cher         0
//     ma propre chambre     0        une chambre propre    0
//     un pauvre homme       0        un homme pauvre       0
//     un grand homme        0        un homme grand        0
//
// These are a teaching construct rather than everyday phrasing, so they are
// written here. NINE ROWS, and not one of them is a headword.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import { IMPORTED, REUSED } from './placement-imported.ts';

/* ─── Display: the respelling of every form this lesson shows ───────────────
 *
 * Bracketed by `D()` and never stored bracketed, because the density validator
 * checks the rendered form. Same convention as couleurs-corpus.ts.             */

export type Display = { fr: string; ipa: string; respell: string; en: string };

const D = (fr: string, ipa: string, res: string, en: string): Display =>
  ({ fr, ipa: `/${ipa}/`, respell: `[${res}]`, en });

const unbracket = (s: string) => s.replace(/^\[|\]$/g, '');

export const RESPELL: Record<string, Display> = {
  // ── the closed set. Not one is authored: all ten are
  //    fr.sons.adjectifs-essentiels.001-.014 and were published long before this
  //    lesson. Three carry a corrected transcription, see RESPELL_REPAIRS.
  grand: D('grand', 'ɡʁɑ̃', 'GRAHⁿ', 'big, tall'),
  petit: D('petit', 'pə.ti', 'pə-TEE', 'small, little'),
  bon: D('bon', 'bɔ̃', 'BOHⁿ', 'good'),
  mauvais: D('mauvais', 'mo.vɛ', 'moh-VEH', 'bad'),
  beau: D('beau', 'bo', 'BOH', 'beautiful, handsome'),
  joli: D('joli', 'ʒɔ.li', 'zhoh-LEE', 'pretty'),
  nouveau: D('nouveau', 'nu.vo', 'noo-VOH', 'new'),
  vieux: D('vieux', 'vjø', 'VYUH', 'old'),
  jeune: D('jeune', 'ʒœn', 'ZHUHNN', 'young'),
  gros: D('gros', 'ɡʁo', 'GROH', 'big, fat'),

  // ── the three forms that exist ONLY in front of a vowel, and so only ever
  //    in front of the noun. Structurally this lesson's, see the note below.
  bel: D('bel', 'bɛl', 'BEL', 'beautiful, before a vowel'),
  vieil: D('vieil', 'vjɛj', 'VYEY', 'old, before a vowel'),
  nouvel: D('nouvel', 'nu.vɛl', 'noo-VEL', 'new, before a vowel'),

  // ── the meaning-changers.
  ancien: D('ancien', 'ɑ̃.sjɛ̃', 'ahⁿ-SYAⁿ', 'former, or old'),
  pauvre: D('pauvre', 'povʁ', 'POHVR', 'unfortunate, or with no money'),
  propre: D('propre', 'pʁɔpʁ', 'PROPR', 'own, or clean'),

  // ── the plural forms the `de` rule shows. Display strings only: none of
  //    these is a headword in this corpus and none is authored as one.
  beaux: D('beaux', 'bo', 'BOH', 'beautiful (m.pl.)'),
  belles: D('belles', 'bɛl', 'BEL', 'beautiful (f.pl.)'),
  bons: D('bons', 'bɔ̃', 'BOHⁿ', 'good (m.pl.)'),
  bonnes: D('bonnes', 'bɔn', 'BON', 'good (f.pl.)'),
  petits: D('petits', 'pə.ti', 'pə-TEE', 'small (m.pl.)'),
  petites: D('petites', 'pə.tit', 'pə-TEET', 'small (f.pl.)'),

  // ── the post-nominal adjectives the default half is taught on. All
  //    published, none authored, and every one of them open-class.
  facile: D('facile', 'fa.sil', 'fah-SEEL', 'easy'),
  difficile: D('difficile', 'di.fi.sil', 'dee-fee-SEEL', 'difficult, hard'),
  chaud: D('chaud', 'ʃo', 'SHOH', 'hot, warm'),
  froid: D('froid', 'fʁwa', 'FRWAH', 'cold'),
  ouvert: D('ouvert', 'u.vɛʁ', 'oo-VEHR', 'open'),
  court: D('court', 'kuʁ', 'KOOR', 'short'),
  courte: D('courte', 'kuʁt', 'KOORT', 'short (f.)'),
  calme: D('calme', 'kalm', 'KALM', 'quiet, calm'),
  gris: D('gris', 'ɡʁi', 'GREE', 'grey'),
  rouge: D('rouge', 'ʁuʒ', 'ROOZH', 'red'),
  bleue: D('bleue', 'blø', 'BLUH', 'blue (f.)'),
};

/** The bracketed respelling of a French form this lesson displays. Throws
 *  rather than returning undefined: a card silently missing its transcription
 *  is the failure this file exists to stop, and it looks identical to a card
 *  that never wanted one. */
export function sub(fr: string): string {
  const d = RESPELL[fr];
  if (!d) throw new Error(`a1.16: no respelling authored for "${fr}". Add it to RESPELL.`);
  return d.respell;
}

/** The IPA of a French form this lesson displays, in slashes. */
export function ipaOf(fr: string): string {
  const d = RESPELL[fr];
  if (!d) throw new Error(`a1.16: no IPA authored for "${fr}". Add it to RESPELL.`);
  return d.ipa;
}

/* ─── Respelling repairs, and the ONE that is this lesson's alone ───────────
 *
 * Display-only, on published headwords this lesson shows. `hasPlainNasalFor`
 * from density.logic.ts flagged three of the forms above. Each was checked
 * through the REAL function before and after, never a local copy.
 *
 *     fr.sons.adjectifs-essentiels.001  grand   GRAHN     -> GRAHⁿ    flagged
 *     fr.sons.adjectifs-essentiels.003  bon     BOHN      -> BOHⁿ     flagged
 *     fr.sons.adjectifs-essentiels.058  ancien  ahn-SYAN  -> ahⁿ-SYAⁿ flagged
 *
 * ── The coordination point with a1.14, which is HALF BUILT ────────────────
 *
 * a1.14 "Basic Adjectives" is not finished (see the header of
 * placement-lesson.ts), but scripts/data/adjectifs-corpus.ts exists on disk and
 * ALREADY CLAIMS the `grand` and `bon` repairs, to the same corrected values.
 * They are listed here anyway and applied idempotently, because:
 *
 *   - both builds target the identical value, so whichever lands second is a
 *     no-op rather than a conflict;
 *   - a1.14 may never land, and this lesson would then display GRAHN on a card
 *     while teaching that the word is nasal;
 *   - the batch REFUSES TO WRITE if the stored value is neither the broken one
 *     it expects nor the corrected one, because two people disagreeing about a
 *     transcription is a decision rather than a merge.
 *
 * `ancien` is claimed by nobody and is repaired here on this lesson's own
 * account. It is also the only one of the three that this lesson NEEDS: ancien
 * carries a meaning-changing pair and appears on six screens.
 *
 * ── The false positive that is NOT repaired ───────────────────────────────
 *
 * `jeune` is stored ZHUHN and `hasPlainNasalFor` flags it. IT IS CORRECT AS
 * STORED. /ʒœn/ has a REAL /n/ and no nasal vowel at all, so "fixing" it to
 * ZHUHⁿ would teach a sound that is not in the word. This is invariant §3's
 * documented blind spot, the same class as `jaune` and `automne`. Recorded in
 * NOT_REPAIRED with its correct value and left alone.                        */

export type RespellRepair = {
  id: string; fr: string; was: string; now: string;
  caughtByChecker: boolean;
  alsoClaimedByA114: boolean;
  why: string;
};

export const RESPELL_REPAIRS: RespellRepair[] = [
  {
    id: 'fr.sons.adjectifs-essentiels.058', fr: 'ancien', was: 'ahn-SYAN', now: unbracket(RESPELL.ancien.respell),
    caughtByChecker: true, alsoClaimedByA114: false,
    why: 'Two nasal vowels and the stored form closes both with a plain n. ancien is /ɑ̃.sjɛ̃/ and there is no '
      + 'n sound in either syllable. This lesson puts ancien on six screens and on both halves of a '
      + 'meaning-changing pair, so a card teaching a consonant that is not there would be read six times.',
  },
  {
    id: 'fr.sons.adjectifs-essentiels.001', fr: 'grand', was: 'GRAHN', now: unbracket(RESPELL.grand.respell),
    caughtByChecker: true, alsoClaimedByA114: true,
    why: 'GRAHⁿ is already what fr.sons.consonnes.042, fr.sons.muettes.002 and fr.sons.nasales.176 carry for '
      + 'the same word, so the theme copy is the outlier rather than the standard.',
  },
  {
    id: 'fr.sons.adjectifs-essentiels.003', fr: 'bon', was: 'BOHN', now: unbracket(RESPELL.bon.respell),
    caughtByChecker: true, alsoClaimedByA114: true,
    why: 'Same shape as grand. fr.sons.consonnes.136 and fr.sons.nasales.166 both carry BOHⁿ for bon.',
  },
  {
    // ── THE ONE THAT IS NOT A NASAL FIX, AND MUST NOT BE DESCRIBED AS ONE ──
    //
    // jeune is /ʒœn/. It has a REAL /n/ and NO nasal vowel, so the superscript
    // would teach a sound that is not in the word. This repair does NOT add one.
    //
    // The problem is mechanical rather than phonetic: `hasPlainNasalFor` reads a
    // token-final vowel+N as an unclosed nasal, so it flags ZHUHN, and the
    // DENSITY VALIDATOR enforces the same rule on every card. That makes this
    // different from a comment-level exemption: a card carrying ZHUHN cannot
    // ship at all, because validateDensity refuses the lesson.
    //
    // Invariant §3 has the precedent and the instruction. `automne` "cannot pass
    // with any single-N respelling ... Choose a form that avoids a token-final
    // vowel+N, and say in your header that you did and why", and its answer is
    // o-TONN. ZHUHNN is the same move: the doubled N reads as a real consonant
    // to a learner and stops the checker misreading it as an open nasal.
    //
    // MEASURED through the real function, scripts/_placement_jeune.ts:
    //     ZHUHN  FLAGGED     ZHUHNN clean     ZHUN  clean     ZHÜNN clean
    //     ZHEUN  FLAGGED     ZHUNN  clean     ZHÜN  clean
    // ZHUHNN is chosen over the other clean candidates for being one character
    // from the stored value, so a reader diffing the two sees a doubled letter
    // rather than a re-transcription.
    id: 'fr.sons.adjectifs-essentiels.009', fr: 'jeune', was: 'ZHUHN', now: unbracket(RESPELL.jeune.respell),
    caughtByChecker: true, alsoClaimedByA114: false,
    why: 'NOT a nasal repair. jeune has a real /n/ and no nasal vowel, and no superscript is added. The '
      + 'stored ZHUHN ends in a vowel followed by N, which the shared checker reads as an unclosed nasal '
      + 'and the density validator then refuses on every card. ZHUHNN avoids that shape without changing '
      + 'the sound it describes, which is the fix invariant §3 prescribes for automne.',
  },
];

/** Flagged by the shared checker and CORRECT as stored. Recorded so a later
 *  author does not "fix" it, which is the specific way invariant §3 says this
 *  checker causes damage. */
export const NOT_REPAIRED: { id: string; fr: string; stored: string; why: string }[] = [
  {
    id: 'fr.sons.adjectifs-essentiels.010', fr: 'long', stored: 'LOHN',
    why: 'Genuinely wrong and genuinely not this lesson\'s. `long` is never displayed here, and invariant §9 '
      + 'says repair only what breaks a stated rule on a screen you own.',
  },
];

/* ─── The authored rows ─────────────────────────────────────────────────────
 *
 * NINE SENTENCES, running fr.a1.adjectifs-essentiels.332+, which is NEXT FREE
 * from the probe. No headword is authored: all 21 the lesson could have wanted
 * already exist.
 *
 * ── The id block that is deliberately skipped ─────────────────────────────
 *
 * fr.sons.adjectifs-essentiels.312-.315 are FREE in Postgres today and are NOT
 * used here. scripts/data/adjectifs-corpus.ts, the in-flight a1.14 build, has
 * already allocated them to four authored headwords. a1.14 has not been applied,
 * so nothing in the database would stop this lesson taking them, and taking them
 * would collide silently the day a1.14 runs its batch. This lesson authors no
 * fr.sons row at all, so the question does not arise, and it is written down
 * here because the next author will see four free ids and wonder.
 *
 * ── Minimal pairs, and the discipline the brief asks for ──────────────────
 *
 * "Author minimal pairs, not scatter ... For you the minimal pair is the whole
 * lesson: the same noun, the same article, the adjective on either side.
 * Nothing else may move."
 *
 * Every pair below holds to that literally. One frame, `C'est`, across all nine
 * rows. Same determiner in both halves of every pair. Same noun in both halves
 * of every pair. The ONLY thing that moves between .332 and .333 is which side
 * of `homme` the word `grand` sits on, and the meaning that follows from it.
 *
 * THIS IS WHY `cher` IS NOT HERE and the brief lists it. `un cher ami` and
 * `un repas cher` are two different nouns, and they have to be: `un ami cher`
 * still means a dear friend, so the contrast cannot be shown on one noun at all.
 * A pair that changes the noun teaches "these two phrases mean different
 * things", which is true of any two phrases. `pauvre` does what `cher` cannot:
 * one noun, one determiner, both orders correct, and the English word `poor`
 * happens to carry BOTH French meanings, which makes the position the only thing
 * that separates them for an English speaker.
 *
 * ── Why the incorrect orders are NOT authored ─────────────────────────────
 *
 * « une maison grande » is the error this lesson exists to stop and it appears
 * on CARDS as a display string, never as a corpus row. A corpus row is a
 * flashcard, a dictée target and a voiceflash prompt; an error authored as one
 * becomes indistinguishable from a model the moment it leaves its card. The
 * brief says the same thing about recording `des beaux jardins` and it applies
 * to the written corpus with more force, not less.                            */

const SVD: Item['drills'] = ['sentence', 'flashcard', 'voiceflash', 'review'];

export type PairSide = 'before' | 'after';

export type PlacementSentence = Item & {
  /** Which meaning-changing pair this row belongs to. */
  pair: 'grand' | 'ancien' | 'pauvre' | 'propre' | 'scene';
  /** Which side of the noun the adjective sits on in this row. */
  side: PairSide;
};

const row = (
  seq: number, pair: PlacementSentence['pair'], side: PairSide,
  fr: string, en: string, ipa: string, notes: string,
): PlacementSentence => ({
  id: `fr.a1.adjectifs-essentiels.${seq}`, kind: 'sentence', level: 'a1',
  theme: 'adjectifs-essentiels',
  fr, en, ipa: `/${ipa}/`, notes,
  tags: ['adjectifs-essentiels', 'place-de-adjectif', side === 'before' ? 'avant-le-nom' : 'apres-le-nom'],
  drills: SVD, version: 1,
  pair, side,
});

export const AUTHORED: PlacementSentence[] = [
  // ── grand: the pair to lead with, because grand is also in the closed set,
  //    so the learner meets one word doing both jobs.
  row(332, 'grand', 'before', "C'est un grand homme.", 'He is a great man.', 'sɛ tœ̃ ɡʁɑ̃ tɔm',
    'In front, grand is about importance rather than height. Nothing about the man\'s size is being said.'),
  row(333, 'grand', 'after', "C'est un homme grand.", 'He is a tall man.', 'sɛ tœ̃ nɔm ɡʁɑ̃',
    'Behind, grand is a measurement. Same three words, same order of everything else, and the two sentences '
    + 'describe two different men.'),

  // ── ancien: taught on a BUILDING rather than on a person. See the note.
  row(334, 'ancien', 'before', "C'est un ancien hôtel.", 'It is a former hotel.', 'sɛ tœ̃ nɑ̃.sjɛ̃ no.tɛl',
    'In front, ancien means it used to be one and is not one now. It could be flats today.'),
  row(335, 'ancien', 'after', "C'est un hôtel ancien.", 'It is an old hotel.', 'sɛ tœ̃ no.tɛl ɑ̃.sjɛ̃',
    'Behind, ancien means old. It is still a hotel and you can still book a room in it.'),

  // ── pauvre: the pair that carries the whole idea for an English speaker,
  //    because the English word covers both French meanings.
  row(336, 'pauvre', 'before', "C'est un pauvre homme.", 'He is an unfortunate man.', 'sɛ tœ̃ povʁ ɔm',
    'In front, pauvre is sympathy. It says nothing at all about money.'),
  row(337, 'pauvre', 'after', "C'est un homme pauvre.", 'He is a man with no money.', 'sɛ tœ̃ nɔm povʁ',
    'Behind, pauvre is about money and nothing else. English uses the one word poor for both of these, '
    + 'which is why the position has to do the work.'),

  // ── propre: the one pair where both halves are things a learner says weekly.
  row(338, 'propre', 'before', "C'est ma propre chambre.", 'It is my own room.', 'sɛ ma pʁɔpʁ ʃɑ̃bʁ',
    'In front, propre means it belongs to me and I do not share it.'),
  row(339, 'propre', 'after', "C'est ma chambre propre.", 'It is my clean room.', 'sɛ ma ʃɑ̃bʁ pʁɔpʁ',
    'Behind, propre means clean. Same room either way, and only one of the two sentences is about tidying.'),

  // ── the scene's line. Correct French with a correct gloss, which is the
  //    point: the learner in the scene is not misunderstood, they are
  //    understood as saying this.
  row(340, 'scene', 'before', "C'est mon ancien professeur.", 'He is my former teacher.', 'sɛ mɔ̃ nɑ̃.sjɛ̃ pʁɔ.fɛ.sœʁ',
    'Every word correct, and it does not mean what the learner in the opening scene meant by it. In front, '
    + 'ancien is always former.'),
];

export const AUTHORED_IDS: string[] = AUTHORED.map((r) => r.id);

/* ─── The dictée set, and why it is not all four pairs ─────────────────────
 *
 * `dicteeMode` picks LETTERS or WORDS by length, and the two do different jobs:
 *
 *   LETTERS  the learner types the sentence out.        Tests SPELLING.
 *   WORDS    the learner is handed a bank of the sentence's own words plus two
 *            decoys and assembles it.                   Tests WORD ORDER.
 *
 * For this lesson that is not a detail, it is the difference between the dictée
 * testing what the lesson teaches and testing something else. Measured through
 * the real functions in scripts/_placement_dictee.ts:
 *
 *     C'est un grand homme.      LETTERS      C'est un ancien hôtel.    WORDS
 *     C'est un homme grand.      LETTERS      C'est un hôtel ancien.    WORDS
 *                                             C'est un pauvre homme.    WORDS
 *                                             C'est un homme pauvre.    WORDS
 *                                             C'est ma propre chambre.  WORDS
 *                                             C'est ma chambre propre.  WORDS
 *
 * The grand pair is two letters under the limit and falls into letters mode, so
 * putting it in the dictée would ask the learner to spell « homme » in a mission
 * whose other six lines ask them to order words. THE PAIR IS NOT DROPPED FROM
 * THE LESSON: it leads the two-column screen, the eight-card deck, the sorting
 * drill, the flashcards, the review deck and two quiz rounds. It is dropped from
 * this one mission, because this mission can only ask one kind of question and
 * the other six ask the right one.
 *
 * Lengthening the grand sentences to push them over the limit was the obvious
 * alternative and is rejected: it would break the minimal-pair discipline that
 * the rest of the file exists to hold. */
export const DICTEE_PAIRS: readonly PairName[] = ['ancien', 'pauvre', 'propre'];

/** The two rows of one meaning-changing pair, in before / after order. */
export const pairFor = (p: PlacementSentence['pair']): PlacementSentence[] => {
  const before = AUTHORED.find((r) => r.pair === p && r.side === 'before');
  const after = AUTHORED.find((r) => r.pair === p && r.side === 'after');
  if (!before || !after) throw new Error(`a1.16: the ${p} pair is missing a side`);
  return [before, after];
};

/** The four pairs, in teaching order. `grand` leads because it is the one word
 *  that is also in the closed set, so the learner meets it doing both jobs. */
export const THE_PAIRS = ['grand', 'ancien', 'pauvre', 'propre'] as const;
export type PairName = (typeof THE_PAIRS)[number];

/** What each pair is about, in English, for the two-column card and the sheet.
 *  Defined once so the card, the drill, the quiz and the test cannot drift. */
export const PAIR_GLOSS: Record<PairName, { adj: string; before: string; after: string; noun: string }> = {
  grand: { adj: 'grand', before: 'great, important', after: 'tall', noun: 'homme' },
  ancien: { adj: 'ancien', before: 'former', after: 'old', noun: 'hôtel' },
  pauvre: { adj: 'pauvre', before: 'unfortunate', after: 'with no money', noun: 'homme' },
  propre: { adj: 'propre', before: 'own', after: 'clean', noun: 'chambre' },
};

/* ─── The closed set, named once ────────────────────────────────────────────
 *
 * The ten adjectives that go in front. `OTHER_ADJECTIVES` in couleurs-lesson.ts
 * names sixteen forms, which is these ten plus six feminines, and a1.13 fenced
 * them off for exactly this lesson.
 *
 * ── BANGS: a memory aid, on one card, and not the organising principle ────
 *
 * The request named BANGS, so the reasoning is written down rather than left to
 * be inferred from its absence.
 *
 * BANGS is Beauty, Age, Number, Goodness, Size, and it is an ENGLISH acronym for
 * a French rule. Using it means the learner sorts a French word by recalling an
 * English category name in the middle of deciding what to say, which is the
 * translation step every lesson on this track works to remove. It is also
 * incomplete: `autre`, `même`, `premier` and `dernier` all go in front and sit
 * in none of the five letters, so a learner who trusts it as a TEST gets them
 * wrong and concludes the language is arbitrary. And it is silent about the
 * meaning-changing pairs, which are the reason this unit exists.
 *
 * The set is ten words. Ten words is a deck, not a mnemonic. a1.13 faced the
 * same choice with marron and orange and chose the explanation over the list.
 *
 * So: the closed set is taught AS A CLOSED SET, and BANGS appears exactly once,
 * on the last card of the closed-set deck, labelled a memory aid rather than a
 * test, with the words it misses named on the same card. `a1-16-placement.test.ts`
 * pins that it appears on that card and on no other production surface, so a
 * later author cannot quietly promote it or quietly delete it.                */

export const CLOSED_SET = [
  'petit', 'grand', 'gros', 'jeune', 'vieux', 'beau', 'joli', 'bon', 'mauvais', 'nouveau',
] as const;
export type ClosedAdj = (typeof CLOSED_SET)[number];

/* ─── What the learner already has, measured against a1.14 as it SHIPPED ────
 *
 * a1.14 landed while this lesson was being written. Its THE_SIX is
 * ['grand', 'petit', 'beau', 'vieux', 'bon', 'mauvais'], read from
 * adjectifs-corpus.ts rather than from its brief, and its handover states
 * exactly what it said about placement and exactly what it did not.
 *
 * SO SIX OF THESE TEN ARE ALREADY KNOWN TO GO IN FRONT, and four are new. That
 * is worth marking on the cards rather than teaching all ten as if they were
 * new, which would be the a1.09-on-a1.08 mistake in reverse: not assuming too
 * much, but assuming too little and re-teaching a lesson the learner has just
 * finished.
 *
 * a1.14's handover is explicit about the boundary it left: it said "these six"
 * and never "adjectives like these", and it deliberately never said that there
 * is a CLASS of adjectives that go in front, never said that most adjectives go
 * after, and never named a grouping of any kind. So the four new words are not
 * the interesting part of act 2. The interesting part is that the six are a
 * closed group with four more members and no others, which is the thing a1.14
 * left untouched on purpose.                                                  */
export const ALREADY_MET: readonly ClosedAdj[] = ['grand', 'petit', 'beau', 'vieux', 'bon', 'mauvais'];

/** The four this lesson adds to the group. `nouveau` is here rather than in
 *  a1.14 by a1.14's own explicit decision: its NOT_TAUGHT_IDS hard-blocks
 *  fr.sons.adjectifs-essentiels.007 and « C'est un nouvel hôtel. » with the
 *  note that nouveau "is the THIRD three-form adjective in A1 ... and it is not
 *  one of this unit's six". Its batch and its merge both die if it ever appears
 *  there, so nobody else can take it. */
export const NEWLY_ADDED: readonly ClosedAdj[] = CLOSED_SET.filter((a) => !ALREADY_MET.includes(a));

/** The headword id of each member. All ten are published; none is authored. */
export const CLOSED_SET_IDS: Record<ClosedAdj, string> = {
  grand: 'fr.sons.adjectifs-essentiels.001',
  petit: 'fr.sons.adjectifs-essentiels.002',
  bon: 'fr.sons.adjectifs-essentiels.003',
  mauvais: 'fr.sons.adjectifs-essentiels.004',
  beau: 'fr.sons.adjectifs-essentiels.005',
  joli: 'fr.sons.adjectifs-essentiels.006',
  nouveau: 'fr.sons.adjectifs-essentiels.007',
  vieux: 'fr.sons.adjectifs-essentiels.008',
  jeune: 'fr.sons.adjectifs-essentiels.009',
  gros: 'fr.sons.adjectifs-essentiels.014',
};

/** Which of the five BANGS letters each member would fall under, and the two
 *  that fall under none. Kept so the single BANGS card is generated from the
 *  set rather than typed beside it, and so the card cannot claim coverage it
 *  does not have. */
export const BANGS_LETTER: Record<ClosedAdj, 'Beauty' | 'Age' | 'Goodness' | 'Size'> = {
  beau: 'Beauty', joli: 'Beauty',
  jeune: 'Age', vieux: 'Age', nouveau: 'Age',
  bon: 'Goodness', mauvais: 'Goodness',
  petit: 'Size', grand: 'Size', gros: 'Size',
};

/** The words the acronym leaves out. Every one of them goes in front. Named on
 *  the BANGS card itself, because an acronym presented without its gaps is a
 *  test the learner will fail and blame themselves for. */
export const BANGS_MISSES = ['autre', 'même', 'premier', 'dernier'] as const;

/** One published sentence per member of the closed set, showing it in front.
 *  Every id was selected off the measured attributive pool in
 *  data/_placement-attr-pre.gen.txt. */
export const IN_FRONT: Record<ClosedAdj, string> = {
  petit: 'fr.a1.adjectifs-essentiels.197',   // Elle a un petit chien.
  grand: 'fr.a1.adjectifs-essentiels.005',   // C'est une grande ville.
  gros: 'fr.a1.adjectifs-essentiels.080',    // Elle a une grosse valise.
  jeune: 'fr.a1.adjectifs-essentiels.049',   // C'est un jeune homme sympathique.
  vieux: 'fr.a1.adjectifs-essentiels.043',   // C'est un vieux château.
  beau: 'fr.a1.adjectifs-essentiels.201',    // C'est une belle maison.
  joli: 'fr.a1.adjectifs-essentiels.261',    // C'est une jolie robe.
  bon: 'fr.a1.adjectifs-essentiels.013',     // C'est un bon restaurant.
  mauvais: 'fr.a1.adjectifs-essentiels.020', // C'est une mauvaise idée.
  nouveau: 'fr.a1.adjectifs-essentiels.206', // Il a un nouveau vélo.
};

/** The four meaning-changers as bare headwords. Shown in act 3 rather than act
 *  2, because a bare `ancien` is exactly the thing that has no single answer:
 *  the whole point of the act is that the word alone cannot tell you where it
 *  goes. `grand` is already released in act 2 as a member of the closed set, and
 *  `once()` keeps it there. */
export const CHANGER_HEADWORDS: Record<PairName, string> = {
  grand: 'fr.sons.adjectifs-essentiels.001',
  ancien: 'fr.sons.adjectifs-essentiels.058',
  pauvre: 'fr.sons.adjectifs-essentiels.085',
  propre: 'fr.sons.adjectifs-essentiels.028',
};

/** Six headwords that go BEHIND the noun, for the sorting drill. The drill hands
 *  the learner a bare adjective and two slots, which is what a lesson about a
 *  decision needs, and that only works if both sides of the sort are bare words:
 *  a sentence has already made the decision and is showing them the answer.
 *  All six are published and none is authored. */
export const BEHIND_HEADWORDS: Record<'chaud' | 'froid' | 'facile' | 'difficile' | 'ouvert' | 'court', string> = {
  chaud: 'fr.sons.adjectifs-essentiels.016',
  froid: 'fr.sons.adjectifs-essentiels.017',
  facile: 'fr.sons.adjectifs-essentiels.018',
  difficile: 'fr.sons.adjectifs-essentiels.019',
  ouvert: 'fr.sons.adjectifs-essentiels.026',
  court: 'fr.sons.adjectifs-essentiels.011',
};

/** The default half: an open-class adjective sitting BEHIND its noun, inside
 *  the noun phrase. Every one of these is ATTRIBUTIVE. Not one is a predicate
 *  like « La porte est ouverte. », which shows nothing about placement. */
export const BEHIND_IDS = [
  'fr.a1.adjectifs-essentiels.103',   // C'est une question facile.
  'fr.a1.adjectifs-essentiels.061',   // Elle porte une jupe courte.
  'fr.a1.adjectifs-essentiels.123',   // Elle a une voix forte.
  'fr.a1.dictee.205',                 // Je lis un livre facile.
  'fr.a1.cafe.088',                   // Je prends un café noir.
  'fr.a1.rp-societe.088',             // Nous habitons dans un quartier calme.
  'fr.a1.cuisine.193',                // Le chef prépare un plat délicieux.
  'fr.a1.deplacements.224',           // Mon frère conduit une voiture rouge.
  'fr.a1.couleurs.163',               // Le chat gris dort.
  'fr.a1.couleurs.201',               // Nous avons une maison bleue.
];

/** The same noun with an adjective on each side, both halves published. This is
 *  the contrast the lesson turns on, and it costs nothing to show: the probe
 *  found FIFTY nouns attested both ways. Four are used. */
export const BOTH_SIDES: { noun: string; front: string; behind: string }[] = [
  { noun: 'quartier', front: 'fr.a1.adjectifs-essentiels.262', behind: 'fr.a1.rp-societe.088' },
  { noun: 'voiture', front: 'fr.a1.adjectifs-essentiels.196', behind: 'fr.a1.deplacements.224' },
  { noun: 'maison', front: 'fr.a1.adjectifs-essentiels.201', behind: 'fr.a1.couleurs.201' },
  { noun: 'chat', front: 'fr.a1.adjectifs-essentiels.079', behind: 'fr.a1.couleurs.163' },
];

/** Two adjectives, one from each set, splitting around the noun. Falls out of
 *  the rule for free, and every one of these was already published. */
export const SPLIT_IDS = [
  'fr.a1.adjectifs-essentiels.007',   // J'ai un petit chien blanc.
  'fr.a1.adjectifs-essentiels.008',   // Elle porte une petite robe rouge.
  'fr.a1.adjectifs-essentiels.027',   // Elle porte une belle robe bleue.
  'fr.a1.adjectifs-essentiels.035',   // Ils habitent dans une jolie maison blanche.
  'fr.a1.adjectifs-essentiels.010',   // C'est une petite ville tranquille.
  'fr.a1.adjectifs-essentiels.039',   // Elle a une nouvelle voiture rouge.
  'fr.a1.adjectifs-essentiels.006',   // Le grand chat noir dort sur le lit.
  'fr.a1.adjectifs-essentiels.079',   // C'est un gros chat gris.
];

/** `des` becomes `de` when the adjective moves in front. Ten published rows,
 *  so the rule is taught entirely on evidence. */
export const DE_IDS = [
  'fr.a1.adjectifs-essentiels.202',   // Ce sont de beaux tableaux.
  'fr.a1.adjectifs-essentiels.203',   // Ce sont de belles fleurs.
  'fr.a1.adjectifs-essentiels.263',   // Ce sont de jolies fleurs.
  'fr.a1.adjectifs-essentiels.212',   // Ce sont de vieux amis.
  'fr.a1.adjectifs-essentiels.213',   // Ce sont de vieilles photos.
  'fr.a1.adjectifs-essentiels.198',   // Nous avons de petits problèmes.
  'fr.a1.adjectifs-essentiels.199',   // Elle porte de petites chaussures.
  'fr.a1.adjectifs-essentiels.018',   // Les enfants ont de bons résultats à l'école.
  'fr.a1.adjectifs-essentiels.015',   // Nous avons passé de bonnes vacances.
  'fr.a1.adjectifs-essentiels.040',   // Nous avons de nouveaux voisins.
];

/** The one genuine EAR question in this lesson. « un grand garçon » and « un
 *  grand homme » are the same word in the same position, and the d at the end of
 *  grand wakes up as a /t/ only in front of the vowel. Placement itself is not
 *  an ear question: both orders are pronounceable and neither sounds wrong, so
 *  an ear test of word order tests nothing. This does test something. */
export const LIAISON_PAIR = {
  silent: 'fr.a1.adjectifs-essentiels.001',   // Mon frère est un grand garçon.
  sounded: 'fr.a1.adjectifs-essentiels.332',  // C'est un grand homme.
};

/** bel, vieil and nouvel, each beside the consonant form it replaces. Without
 *  the partner these are three words to memorise; with it they are one pattern.
 *
 *  `owner` records who TEACHES the form, which changed while this lesson was
 *  being written. a1.14 shipped bel and vieil as a third SHAPE of beau and
 *  vieux, inside its four-form grid, and hard-excluded nouveau and nouvel from
 *  its own build. So this lesson REFERENCES bel and vieil rather than reteaching
 *  them, and TEACHES nouvel, which nobody else can.
 *
 *  The angle is different in any case and the two do not collide. a1.14 answers
 *  "what shape does this word take"; this lesson answers "why does the shape
 *  exist at all", and the answer is a fact about position: a form that only
 *  appears in front of a vowel can only ever appear in front of the NOUN, so
 *  meeting one tells you which side you are on. */
export const VOWEL_FORMS: {
  word: 'bel' | 'vieil' | 'nouvel'; plain: string; consonant: string; vowel: string;
  owner: 'a1.14' | 'a1.16';
}[] = [
  { word: 'bel', plain: 'beau', consonant: 'fr.a1.adjectifs-essentiels.025', vowel: 'fr.a1.adjectifs-essentiels.204', owner: 'a1.14' },
  { word: 'vieil', plain: 'vieux', consonant: 'fr.a1.adjectifs-essentiels.043', vowel: 'fr.a1.adjectifs-essentiels.214', owner: 'a1.14' },
  { word: 'nouvel', plain: 'nouveau', consonant: 'fr.a1.adjectifs-essentiels.206', vowel: 'fr.a1.adjectifs-essentiels.209', owner: 'a1.16' },
];

/* ─── Lookup across everything the lesson can display ───────────────────────  */

const ALL_ROWS: { id: string; fr: string; en: string }[] = [
  ...AUTHORED.map((r) => ({ id: r.id, fr: r.fr, en: r.en })),
  ...IMPORTED.map((r) => ({ id: r.id, fr: r.fr, en: r.en })),
  ...REUSED.map((r) => ({ id: r.id, fr: r.fr, en: r.en })),
];

const BY_ID = new Map(ALL_ROWS.map((r) => [r.id, r] as const));

export function frOf(id: string): string {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`a1.16: no French authored or recorded for "${id}"`);
  return r.fr;
}

export function enOf(id: string): string {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`a1.16: no gloss authored or recorded for "${id}"`);
  return r.en;
}

/** Every id this corpus knows about, for the batch and the merge. */
export const ALL_IDS: string[] = ALL_ROWS.map((r) => r.id);

/** Turns an authored row into a plain Item for the batch. The `pair` and `side`
 *  fields are authoring metadata and are not columns. */
export function toItem(r: PlacementSentence): Item {
  const { pair, side, ...item } = r;
  void pair; void side;
  return item;
}

/* ─── Guards that run at import time ────────────────────────────────────────
 *
 * Checked HERE as well as in the test, because a corpus that contradicts itself
 * should fail the moment anything reads it rather than at the end of a suite.  */

{
  const seen = new Set<string>();
  for (const r of AUTHORED) {
    if (seen.has(r.fr)) throw new Error(`a1.16: two authored rows share an fr: ${r.fr}`);
    seen.add(r.fr);
  }
  for (const p of THE_PAIRS) {
    const [before, after] = pairFor(p);
    const g = PAIR_GLOSS[p];
    // The minimal-pair discipline, enforced rather than asserted in a comment:
    // the two halves must contain the same noun and differ only by where the
    // adjective sits.
    if (!before.fr.includes(g.noun) || !after.fr.includes(g.noun)) {
      throw new Error(`a1.16: the ${p} pair does not hold its noun "${g.noun}" constant`);
    }
    if (!before.fr.includes(g.adj) || !after.fr.includes(g.adj)) {
      throw new Error(`a1.16: the ${p} pair does not carry its adjective "${g.adj}" on both sides`);
    }
    const bWords = before.fr.replace(/[.]/g, '').split(' ');
    const aWords = after.fr.replace(/[.]/g, '').split(' ');
    if (bWords.length !== aWords.length || [...bWords].sort().join(' ') !== [...aWords].sort().join(' ')) {
      throw new Error(
        `a1.16: the ${p} pair is not minimal. Both halves must be the same words in a different order.\n`
        + `  before: ${before.fr}\n  after:  ${after.fr}`,
      );
    }
  }
  for (const a of CLOSED_SET) {
    if (!RESPELL[a]) throw new Error(`a1.16: no respelling for closed-set member "${a}"`);
    if (!CLOSED_SET_IDS[a]) throw new Error(`a1.16: no headword id for closed-set member "${a}"`);
    if (!IN_FRONT[a]) throw new Error(`a1.16: no in-front sentence for closed-set member "${a}"`);
    if (!BANGS_LETTER[a]) throw new Error(`a1.16: no BANGS letter recorded for "${a}"`);
  }
}
