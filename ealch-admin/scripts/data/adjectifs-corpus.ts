// The a1.14 corpus: what this lesson authors, what it imports, and the three
// shipped respellings it repairs.
//
// THIS FILE IS THE SINGLE SOURCE OF TRUTH for the 4 authored rows, the 44
// imported rows, the 4 reused rows, and every respelling a1.14 puts on a screen.
// The lesson body (adjectifs-lesson.ts) reads `fr`, `ipa`, `respell` and `en`
// FROM HERE and never restates them, for the same reason couleurs-corpus.ts and
// mois-corpus.ts do: before that convention one word's transcription was typed
// by hand in five sections and the five copies were free to drift.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE PRE-FLIGHT PROBE RAN. IT WAS THE FIRST THING THIS BUILD DID, AND IT
//  MOVED EVERY NUMBER IN THE BRIEF.
// ══════════════════════════════════════════════════════════════════════════
//
// A1-14-BASIC-ADJECTIVES-PROMPT.md opens with "PRE-FLIGHT: NOT RUN. RUN IT
// FIRST", quarantines nine claims in a `## UNVERIFIED` block, and warns that
// five briefs running have told their author to write vocabulary that was
// already published. It was right to warn. Measured against Postgres on
// 2026-08-06 with `pnpm corpus:probe`, `scripts/_adjectifs_probe.ts`,
// `scripts/_adjectifs_probe2.ts` and `scripts/_adjectifs_dictee.ts`:
//
//   1. "adjectifs-essentiels holds 632 published rows."  CONFIRMED. 632 in
//      Postgres, 4 in seed.json. The seed shows under one percent of it.
//
//   2. "The six adjectives already exist as headwords." CONFIRMED, all six, in
//      this theme, at fr.sons.adjectifs-essentiels.001-.008, every one with ipa,
//      respell, notes, cardType vocab and flashcard+voiceflash. Not one is
//      authored here.
//
//   3. "adjectifs-essentiels uses the same two-prefix split as couleurs."
//      CONFIRMED, and measured BY KIND rather than inferred from the id ranges:
//
//          fr.a1.adjectifs-essentiels     321 rows, ALL kind=sentence
//          fr.sons.adjectifs-essentiels   298 word + 13 phrase, NO sentence
//
//      Zero non-sentence rows under fr.a1, zero sentences under fr.sons. This is
//      the thing a1.13's brief got wrong, and it is the reason the four authored
//      headwords below run fr.sons.adjectifs-essentiels.312+ and NOT .332.
//      NEXT FREE, per prefix, from the probe: fr.sons .312, fr.a1 .332.
//
//   4. "famille is the wrong theme." CONFIRMED and acted on. `famille` holds 331
//      published rows and all 331 are in the seed, because famille IS in
//      SEED_CUT.themes. It is family vocabulary and it is a1.15's and a1.17's.
//      This unit rebinds to `adjectifs-essentiels`. See the note at the foot of
//      adjectifs-lesson.ts for what that means for a1.15, a1.16 and a1.17.
//
// ── Where the brief was WRONG, and it is wrong in the direction it warned ──
//
// The brief predicted "expect the same asymmetry as a1.13: the feminine forms
// are the real authoring job", and told this author to "author a paradigm, not a
// scatter ... hold one noun pair constant and move only the ending".
//
// THE PARADIGM IS ALREADY PUBLISHED, for all six adjectives, in four forms
// each, and for `grand` it is already MINIMAL:
//
//     fr.a1.adjectifs-essentiels.192  Ce garçon est très grand.
//     fr.a1.adjectifs-essentiels.193  Cette fille est très grande.
//     fr.a1.adjectifs-essentiels.194  Les garçons sont grands.
//     fr.a1.adjectifs-essentiels.195  Les filles sont grandes.
//
// One noun pair held constant across four cells, one thing moving between any
// two of them. That is exactly the shape a1.13 had to author twelve rows to
// build, and here it was sitting at .192. The same block runs to .222 and covers
// petit, beau, vieux, bon and mauvais the same way. SO THIS LESSON AUTHORS NO
// SENTENCES AT ALL. Twenty-four corpus rows do the job.
//
// Two more the brief did not expect:
//
//   `un bel homme`, `un bel arbre`, `un vieil ami`, `un vieil immeuble` and
//   `un vieux château` are all published. The brief calls bel/vieil "the one
//   piece of content in this lesson that is unambiguously yours and nobody
//   else's". The teaching is; the evidence was already there, including the
//   consonant partner needed to make it a contrast.
//
//   The placement contrast has a one-sentence proof already published:
//
//       fr.a1.adjectifs-essentiels.008  Elle porte une petite robe rouge.
//
//   The size in front, the colour behind, in ONE noun phrase, in a frame
//   identical to a1.13's own imported fr.a1.couleurs.001 "Elle porte une jupe
//   verte." The brief asks for a two-column screen and this is better: it is one
//   real sentence in which both orders are simultaneously true.
//
// ── The one thing the brief says that is FALSE about the language ──────────
//
// > "bel and vieil exist and nothing else in A1 has a third form."
//
// `nouveau` has one. fr.sons.adjectifs-essentiels.007 is the headword and
// fr.a1.adjectifs-essentiels.209 is "C'est un nouvel hôtel.", published, in this
// same theme. So the third form is a family of three in A1 and not a pair.
//
// This lesson teaches bel and vieil and does NOT teach nouvel, because six words
// is the unit's word list and nouveau is not one of them. But no card claims
// that nothing else has a third form, because that claim is not true, and
// NOT_TAUGHT_IDS below names .007 and .209 so the test can prove nouveau stayed
// out rather than trusting a word search that would fire on "Les nouvelles sont
// bonnes." See the note on that row further down.
//
// ── What is genuinely missing, and it is only four words ───────────────────
//
// Verified ABSENT in every article form, in every theme, by the probe:
//
//     vieille    mauvaise    bel    vieil
//
// Verified PRESENT and therefore reused rather than written: grande
// (fr.sons.muettes.047), petite (fr.sons.muettes.048), belle
// (fr.sons.consonnes.138), bonne (fr.sons.nasales.167, and again at
// fr.sons.consonnes.135).
//
// That is the same split a1.13 found and the same rule it applied: AUTHOR IF
// ABSENT EVERYWHERE, REUSE IF PRESENT ANYWHERE. Re-authoring `grande` into this
// theme would be legal (flashhub keys on `fr` PER THEME and `grande` is not in
// adjectifs-essentiels) and would still be wrong, because the SRS keys on
// (itemId, modality) and a second `grande` is one word the learner rates twice.
//
// ── The three respelling repairs, and the one the checker cannot see ───────
//
// House convention: hyphenated syllables, stressed syllable capitalised, nasal
// vowels closed with a superscript n and NEVER a plain n or m. Brackets are
// added by `D()` below, never stored, because the density validator checks the
// rendered form.
//
// Three of the fourteen forms this lesson displays break the convention or
// contradict a better row elsewhere. Each was checked against the REAL
// `hasPlainNasalFor` before and after (scripts/_adjectifs_probe.ts):
//
//     fr.sons.adjectifs-essentiels.001  grand  GRAHN     -> GRAHⁿ    flagged
//     fr.sons.adjectifs-essentiels.003  bon    BOHN      -> BOHⁿ     flagged
//     fr.sons.adjectifs-essentiels.002  petit  puh-TEE   -> pə-TEE   NOT flagged
//
// THE THIRD IS INVISIBLE TO THE SHARED CHECKER and is repaired anyway, which
// needs its reason stated. `puh-TEE` breaks no nasal rule and would pass every
// automated check in the project. It is repaired because THIS LESSON PUTS
// `petit` AND `petite` ON THE SAME CARD, and the `petite` it shows is
// fr.sons.muettes.048, whose respelling is `pə-TEET`. Shipping `puh-TEE` beside
// `pə-TEET` teaches the learner that the vowel changed between the masculine and
// the feminine, which is the one thing that did not happen. fr.sons.muettes.001
// already carries `pə-TEE` for the same word, so the corpus contradicts itself
// and this row is the odd one out.
//
// This is invariant §9's line held rather than crossed: "Repair only what breaks
// a stated rule; a variant is not a violation." A variant on a card the learner
// never sees beside its pair is left alone. See NOT_REPAIRED below for two of
// those, in this very theme, with their correct values recorded and untouched.
//
// ── bonne, and the verified passing form the brief asks for ────────────────
//
// The brief singles this out: "Read A1-BUILD-INVARIANTS.md §3 before you write
// `bonne`: hasPlainNasalFor false-positives on a real /n/ after a vowel, which
// is exactly what `bonne` is. Give the author the verified passing form."
//
// MEASURED, all four candidates, through the real function:
//
//     bonne  BON     ok        <- what ships today, and what this lesson uses
//     bonne  BONN    ok
//     bonne  BOHN    FLAGGED
//     bonne  BOHⁿ    ok        <- passes, and is WRONG
//
// `BON` is correct AND passes, so there was nothing to repair. The trap is the
// fourth line: `BOHⁿ` silences nothing (it was never flagged) and teaches a
// nasal vowel that /bɔn/ does not contain, which is the `jaune` -> `ZHOHⁿ`
// mistake a1.13 documented one lesson earlier. The superscript is FORBIDDEN on
// this word and the batch, the merge and the test all assert `bonne` by name in
// both directions.
//
// The false-positive the brief warned about did not fire, and the reason is
// recorded so nobody re-derives it: `hasPlainNasalFor` was repaired earlier to
// check the FRENCH SPELLING for a vowel after the m or n, and `bonne` is spelled
// with a doubled n, which takes the `(?:nn|mm)` branch before the vowel test is
// reached. The warning was correct about the risk and out of date about the
// checker.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

/* ─── What the screens display ─────────────────────────────────────────────
 *
 * Every French unit a1.14 puts on a card, with the respelling this lesson
 * stands behind. Keyed by the French form, because several of these are display
 * strings rather than corpus rows: the plural forms are never headwords in this
 * corpus and exist here only as text in the four-form table.               */

export type Display = { fr: string; ipa: string; respell: string; en: string };

const D = (fr: string, ipa: string, res: string, en: string): Display =>
  ({ fr, ipa: `/${ipa}/`, respell: `[${res}]`, en });

export const RESPELL: Record<string, Display> = {
  // The six, in the order the deck shows them. Not one is authored: every one is
  // fr.sons.adjectifs-essentiels.001-.008. Three carry a corrected
  // transcription, which is what RESPELL_REPAIRS writes back.
  grand: D('grand', 'ɡʁɑ̃', 'GRAHⁿ', 'big, tall'),
  petit: D('petit', 'pəti', 'pə-TEE', 'small, little'),
  beau: D('beau', 'bo', 'BOH', 'beautiful, good-looking'),
  vieux: D('vieux', 'vjø', 'VYUH', 'old'),
  bon: D('bon', 'bɔ̃', 'BOHⁿ', 'good'),
  mauvais: D('mauvais', 'mɔvɛ', 'moh-VEH', 'bad'),

  // The feminines. Two are authored here (vieille, mauvaise) and four are reused
  // from lessons that already teach the sound: grande and petite from sons.06,
  // belle from sons.04, bonne from sons.03.
  grande: D('grande', 'ɡʁɑ̃d', 'GRAHⁿD', 'big, tall (f.)'),
  petite: D('petite', 'pətit', 'pə-TEET', 'small (f.)'),
  belle: D('belle', 'bɛl', 'BEL', 'beautiful (f.)'),
  vieille: D('vieille', 'vjɛj', 'VYEY', 'old (f.)'),
  bonne: D('bonne', 'bɔn', 'BON', 'good (f.)'),
  mauvaise: D('mauvaise', 'mɔvɛz', 'moh-VEHZ', 'bad (f.)'),

  // The third form. Nothing else this lesson teaches has one, and `nouveau`
  // outside it does. Both are authored rows: see AUTHORED_WORDS.
  bel: D('bel', 'bɛl', 'BEL', 'beautiful, in front of a vowel'),
  vieil: D('vieil', 'vjɛj', 'VYEY', 'old, in front of a vowel'),

  // The plurals, which are display strings only. Every one is the SAME SOUND as
  // its singular, and that is the point of showing the transcription: the
  // learner reads two different spellings against one identical respelling.
  // This is the half of a1.13 that transfers here unchanged.
  grands: D('grands', 'ɡʁɑ̃', 'GRAHⁿ', 'big, tall (m.pl.)'),
  grandes: D('grandes', 'ɡʁɑ̃d', 'GRAHⁿD', 'big, tall (f.pl.)'),
  petits: D('petits', 'pəti', 'pə-TEE', 'small (m.pl.)'),
  petites: D('petites', 'pətit', 'pə-TEET', 'small (f.pl.)'),
  beaux: D('beaux', 'bo', 'BOH', 'beautiful (m.pl.)'),
  belles: D('belles', 'bɛl', 'BEL', 'beautiful (f.pl.)'),
  vieilles: D('vieilles', 'vjɛj', 'VYEY', 'old (f.pl.)'),
  bons: D('bons', 'bɔ̃', 'BOHⁿ', 'good (m.pl.)'),
  bonnes: D('bonnes', 'bɔn', 'BON', 'good (f.pl.)'),
  mauvaises: D('mauvaises', 'mɔvɛz', 'moh-VEHZ', 'bad (f.pl.)'),
};

/** The bracketed respelling of a French form this lesson displays. Throws
 *  rather than returning undefined: a card silently missing its transcription
 *  is the failure this file exists to stop, and it looks identical to a card
 *  that never wanted one. */
export function sub(fr: string): string {
  const d = RESPELL[fr];
  if (!d) throw new Error(`a1.14: no respelling authored for "${fr}". Add it to RESPELL.`);
  return d.respell;
}

/** The IPA of a French form this lesson displays, in slashes. */
export function ipaOf(fr: string): string {
  const d = RESPELL[fr];
  if (!d) throw new Error(`a1.14: no IPA authored for "${fr}". Add it to RESPELL.`);
  return d.ipa;
}

/* ─── The three respelling repairs ─────────────────────────────────────────
 *
 * Display-only, on rows in this lesson's own theme. The batch prints each one
 * and refuses to write if the stored value is no longer the broken one it
 * expects, because two people disagreeing about a transcription is a decision
 * rather than a merge.                                                      */

export type RespellRepair = {
  id: string;
  fr: string;
  /** What the row carries today. The batch refuses if this has changed. */
  from: string;
  /** What it will carry. Always equal to this lesson's own RESPELL, unbracketed. */
  to: string;
  /** Does the SHARED checker catch the broken value? Recorded because one of
   *  these three is invisible to it and a later author who trusts the checker
   *  alone will reintroduce it. */
  caughtByChecker: boolean;
  why: string;
};

const unbracket = (s: string) => s.replace(/^\[|\]$/g, '');

export const RESPELL_REPAIRS: RespellRepair[] = [
  {
    id: 'fr.sons.adjectifs-essentiels.001', fr: 'grand',
    from: 'GRAHN', to: unbracket(RESPELL.grand.respell), caughtByChecker: true,
    why: 'a plain n closes the nasal /ɑ̃/, which the house convention writes with a superscript n. '
      + 'fr.sons.consonnes.042, fr.sons.muettes.002 and fr.sons.nasales.176 ALL already say GRAHⁿ, so three '
      + 'themes agree and this row is the only one out. muettes.002 is in the seed, so a learner can already '
      + 'meet both spellings of one word without this repair.',
  },
  {
    id: 'fr.sons.adjectifs-essentiels.003', fr: 'bon',
    from: 'BOHN', to: unbracket(RESPELL.bon.respell), caughtByChecker: true,
    why: 'a plain n closes the genuine nasal /bɔ̃/. fr.sons.consonnes.136 and fr.sons.nasales.166 both carry '
      + 'BOHⁿ, and nasales.166 is in the seed. This lesson shows bon directly beside bonne, whose respelling '
      + 'BON is a REAL n, so leaving BOHN would put two identical strings on one card for two different '
      + 'sounds, which is the worst possible version of this error.',
  },
  {
    id: 'fr.sons.adjectifs-essentiels.002', fr: 'petit',
    from: 'puh-TEE', to: unbracket(RESPELL.petit.respell), caughtByChecker: false,
    why: 'NOT A NASAL ERROR AND NOT CAUGHT BY ANY SHARED CHECK. puh-TEE is a legal respelling that breaks no '
      + 'stated rule. It is repaired because this lesson shows petit and petite on one card, the petite it '
      + 'shows is fr.sons.muettes.048 spelled pə-TEET, and puh-TEE beside pə-TEET teaches that the first '
      + 'vowel changed between the two forms. It did not. fr.sons.muettes.001 already carries pə-TEE for the '
      + 'same word. Asserted by name in the batch, the merge and the test, because nothing automatic can see it.',
  },
];

/** The repairs the shared checker cannot see. Exported so the batch, the merge
 *  and the test all assert these by name rather than trusting the shared
 *  function to have covered them. */
export const REPAIRS_INVISIBLE_TO_CHECKER = RESPELL_REPAIRS.filter((r) => !r.caughtByChecker).map((r) => r.fr);

/* ─── Measured, in this theme, and deliberately NOT repaired ───────────────
 *
 * Two rows in `adjectifs-essentiels` close a nasal with a plain n. Neither is
 * displayed by this lesson, so neither is touched: reaching into a card no
 * lesson of mine draws means editing content I have not seen in context, which
 * is what invariant §9 warns against. The correct values are recorded here so
 * the next author has them measured rather than having to re-derive them.
 *
 *     fr.sons.adjectifs-essentiels.010  long   LOHN   -> LOHⁿ
 *         genuine nasal /lɔ̃/. FLAGGED by hasPlainNasalFor today.
 *
 *     fr.sons.adjectifs-essentiels.009  jeune  ZHUHN  -> ZHÖN or ZHUN
 *         THE `jaune` SHAPE. /ʒœn/ has a REAL /n/ and no nasal vowel at all, so
 *         the fix is NOT a superscript. ZHUHN is flagged by hasPlainNasal's
 *         first branch (UH + N at a token end) before the French spelling is
 *         ever consulted, and ZHEUN is flagged the same way. MEASURED: ZHÖN,
 *         ZHUN and ZHEUNN all pass. ZHUHⁿ would pass too and would be wrong,
 *         exactly as ZHOHⁿ would have been for jaune.                        */
export const NOT_REPAIRED: { id: string; fr: string; is: string; shouldBe: string; why: string }[] = [
  {
    id: 'fr.sons.adjectifs-essentiels.010', fr: 'long', is: 'LOHN', shouldBe: 'LOHⁿ',
    why: 'a genuine nasal closed with a plain n. Not displayed by a1.14, so not repaired here.',
  },
  {
    id: 'fr.sons.adjectifs-essentiels.009', fr: 'jeune', is: 'ZHUHN', shouldBe: 'ZHÖN',
    why: 'the jaune shape: a REAL /n/ and no nasal vowel, so the superscript would be wrong. Not displayed '
      + 'by a1.14, so not repaired here. ZHÖN and ZHUN both verified passing; ZHEUN is NOT.',
  },
];

/* ─── The six, and their ids ───────────────────────────────────────────────*/

/** The six adjectives this lesson teaches, in deck order. Named here so the
 *  lesson, the batch, the merge and the test all count the same set rather than
 *  four hand lists free to drift.
 *
 *  SIX, which is the unit's own word list. `joli`, `jeune`, `gros`, `nouveau`,
 *  `long`, `court`, `haut` and `bas` are all published in this theme at
 *  fr.sons.adjectifs-essentiels.006-.020, are correct, and are NOT taught. An
 *  itemId this lesson declares has to be on a screen rather than merely
 *  resolvable, and eight more words would make this a vocabulary lesson instead
 *  of a lesson about where six words go and what shape they take. */
export const THE_SIX = ['grand', 'petit', 'beau', 'vieux', 'bon', 'mauvais'] as const;
export type Adj = (typeof THE_SIX)[number];

/** English, index-aligned with THE_SIX. Read from RESPELL so a gloss is written
 *  once. */
export const IN_ENGLISH: Record<Adj, string> = {
  grand: 'big, tall', petit: 'small, little', beau: 'beautiful, good-looking',
  vieux: 'old', bon: 'good', mauvais: 'bad',
};

/** The six headwords, in THE_SIX order. They are NOT consecutive: .006 joli and
 *  .007 nouveau sit between beau and vieux and are not taught, so this is a
 *  lookup rather than an offset. */
export const HEADWORD_ID: Record<Adj, string> = {
  grand: 'fr.sons.adjectifs-essentiels.001',
  petit: 'fr.sons.adjectifs-essentiels.002',
  beau: 'fr.sons.adjectifs-essentiels.005',
  vieux: 'fr.sons.adjectifs-essentiels.008',
  bon: 'fr.sons.adjectifs-essentiels.003',
  mauvais: 'fr.sons.adjectifs-essentiels.004',
};

export const HEADWORD_IDS: string[] = THE_SIX.map((a) => HEADWORD_ID[a]);

/** The feminine of each, as a display string. */
export const FEMININE_OF: Record<Adj, string> = {
  grand: 'grande', petit: 'petite', beau: 'belle',
  vieux: 'vieille', bon: 'bonne', mauvais: 'mauvaise',
};

/** The id carrying each feminine headword. Four are reused from other themes
 *  and two are authored here. Named rather than derived, because the split is
 *  the finding: it is not predictable from the word. */
export const FEMININE_ID: Record<Adj, string> = {
  grand: 'fr.sons.muettes.047',                 // reused, already in the seed
  petit: 'fr.sons.muettes.048',                 // reused, already in the seed
  beau: 'fr.sons.consonnes.138',                // imported, published, not in the seed
  bon: 'fr.sons.nasales.167',                   // reused, already in the seed
  vieux: 'fr.sons.adjectifs-essentiels.312',    // AUTHORED
  mauvais: 'fr.sons.adjectifs-essentiels.313',  // AUTHORED
};

/* ─── What the feminine does ───────────────────────────────────────────────
 *
 * Three groups, which is what `groupDrill` is for at this count, and the split
 * is by WHAT THE FEMININE DOES because that is the only question a learner has
 * to answer before writing one.
 *
 * a1.13's split was four (already ends in -e, adds -e, changes more, never
 * changes) and its handover note says those four "hold every French adjective".
 * They do, and two of them are EMPTY for this set: not one of these six already
 * ends in -e, and not one of them refuses to change. So the four collapse to
 * three here rather than being replaced, and the two missing buckets are worth
 * naming out loud rather than quietly dropping, because a learner who met four
 * families last lesson will look for them.                                  */

export type Family = 'adds-e' | 'doubles' | 'new-word';

export const FAMILY_OF: Record<Adj, Family> = {
  grand: 'adds-e', petit: 'adds-e', mauvais: 'adds-e',
  bon: 'doubles',
  beau: 'new-word', vieux: 'new-word',
};

export const FAMILY_LABEL: Record<Family, string> = {
  'adds-e': 'Adds an -e, exactly like last lesson',
  doubles: 'Doubles a letter first',
  'new-word': 'Turns into a different word',
};

export const adjIn = (f: Family): Adj[] => THE_SIX.filter((a) => FAMILY_OF[a] === f);

/* ─── The third form ───────────────────────────────────────────────────────*/

/** The two that change again in front of a vowel sound. `nouveau` is the third
 *  adjective in A1 with this shape and is deliberately not taught: see the
 *  header, and NOT_TAUGHT_IDS below. */
export const VOWEL_FORM: Partial<Record<Adj, string>> = { beau: 'bel', vieux: 'vieil' };

/** Which of the six never changes for the masculine plural, because it already
 *  ends in the letter the plural would add. */
export const NO_PLURAL_CHANGE: Adj[] = ['vieux', 'mauvais'];

/** Every feminine of the six is AUDIBLE, which is the finding that inverts
 *  a1.13, where four of twelve were audible, two changed nothing at all and the
 *  rest already ended in -e. Measured against the transcriptions above rather
 *  than asserted: no two entries in this table share a respelling.
 *
 *  The plural is a different matter and is unchanged from a1.13: silent on all
 *  six, in every form, without exception. */
export const FEMININE_AUDIBLE: Record<Adj, string> = {
  grand: 'the d at the end wakes up',
  petit: 'the t at the end wakes up',
  mauvais: 'the s wakes up as a z',
  bon: 'the nasal collapses into a plain n',
  beau: 'the word is replaced outright',
  vieux: 'the word is replaced outright',
};

/** The masculine/feminine pairs, in the order the ear section shows them:
 *  smallest change first, largest last. Every one of the six is here, because
 *  every one of the six is audible. NOT ONE PLURAL appears in this table or in
 *  any ear question in the lesson: the plural -s is never pronounced, so an ear
 *  question on one would ask the learner to hear something that is not in the
 *  signal. a1.13 made the same call for the same reason. */
const EAR_ORDER: Adj[] = ['grand', 'petit', 'mauvais', 'bon', 'beau', 'vieux'];

export const EAR_PAIRS: { m: Adj; f: string; what: string }[] =
  EAR_ORDER.map((a) => ({ m: a, f: FEMININE_OF[a], what: FEMININE_AUDIBLE[a] }));

/* ─── The authored headwords ───────────────────────────────────────────────
 *
 * Four, and they are the entire authoring job. Sequence continues
 * fr.sons.adjectifs-essentiels, whose highest published seq is 311 with no gaps.
 * NEXT FREE = .312, confirmed by pnpm corpus:probe on 2026-08-06 and again by
 * scripts/_adjectifs_probe.ts. Never renumbered: ids are the SRS key and every
 * attempt ever logged hangs off them.
 *
 * THE PREFIX IS fr.sons AND NOT fr.a1, and that is the thing a1.13's brief got
 * wrong for its own theme. Measured by kind: fr.a1.adjectifs-essentiels holds
 * 321 rows and every one is a sentence; fr.sons.adjectifs-essentiels holds 311
 * and not one is. A headword at fr.a1.adjectifs-essentiels.332 would have been
 * the only non-sentence under that prefix in the theme's history.
 *
 * GENDER-SAFE BY CONSTRUCTION, and checked through the real function rather
 * than argued. `endingPopulation()` in gender.logic.ts admits a row with
 * `gender` set, `kind: 'word'` and no space in its bare noun, and
 * a1-03-genre.test.ts re-measures twenty printed figures from the seed on every
 * run. a1.11 added two feminine nouns in -e, moved a1.03's count from 871 to 873
 * and turned the suite red on a lesson nobody had touched.
 *
 * These four carry NO gender field, because they are describing words rather
 * than nouns, so the population excludes them. Verified in
 * scripts/_adjectifs_probe.ts: all four return empty from the real
 * endingPopulation, while `une maison` and `un homme` both join it. NOT ONE
 * GENDERED NOUN IS AUTHORED OR IMPORTED BY THIS LESSON, so a1.03's printed
 * figures cannot move and nothing had to be withdrawn.
 *
 * The `notes` follow the convention the theme's own .001-.008 already use
 * ("Feminine: grande. Opposite: petit. Un grand arbre, une grande maison."), so
 * a card drawn from this theme reads the same whoever wrote the row.        */

export type AdjWord = Item & {
  /** The masculine this row belongs to. */
  masculine: Adj;
  /** What job the form does. */
  role: 'feminine' | 'vowel';
};

export const AUTHORED_WORDS: AdjWord[] = [
  {
    id: 'fr.sons.adjectifs-essentiels.312', kind: 'word', level: 'sons', theme: 'adjectifs-essentiels',
    fr: 'vieille', en: 'old (feminine)',
    ipa: RESPELL.vieille.ipa, respell: unbracket(RESPELL.vieille.respell),
    notes: 'The feminine of vieux, and it is a different word rather than an added ending: vieille, never '
      + 'vieuxe. Ma grand-mère est vieille. Before a vowel the masculine is vieil.',
    tags: ['adjective', 'accord-genre'],
    drills: ['flashcard', 'voiceflash'], version: 1, cardType: 'vocab',
    masculine: 'vieux', role: 'feminine',
  },
  {
    id: 'fr.sons.adjectifs-essentiels.313', kind: 'word', level: 'sons', theme: 'adjectifs-essentiels',
    fr: 'mauvaise', en: 'bad (feminine)',
    ipa: RESPELL.mauvaise.ipa, respell: unbracket(RESPELL.mauvaise.respell),
    notes: 'The feminine of mauvais: add the e and the sleeping s wakes up as a z. Cette idée est mauvaise. '
      + 'The masculine plural is still mauvais, because the s is already there.',
    tags: ['adjective', 'accord-genre'],
    drills: ['flashcard', 'voiceflash'], version: 1, cardType: 'vocab',
    masculine: 'mauvais', role: 'feminine',
  },
  {
    id: 'fr.sons.adjectifs-essentiels.314', kind: 'word', level: 'sons', theme: 'adjectifs-essentiels',
    fr: 'bel', en: 'beautiful (before a vowel)',
    ipa: RESPELL.bel.ipa, respell: unbracket(RESPELL.bel.respell),
    notes: 'Beau becomes bel in front of a word starting with a vowel sound: un bel homme, un bel arbre. It '
      + 'sounds exactly like the feminine belle and it is used with the un kind of thing.',
    tags: ['adjective', 'elision'],
    drills: ['flashcard', 'voiceflash'], version: 1, cardType: 'vocab',
    masculine: 'beau', role: 'vowel',
  },
  {
    id: 'fr.sons.adjectifs-essentiels.315', kind: 'word', level: 'sons', theme: 'adjectifs-essentiels',
    fr: 'vieil', en: 'old (before a vowel)',
    ipa: RESPELL.vieil.ipa, respell: unbracket(RESPELL.vieil.respell),
    notes: 'Vieux becomes vieil in front of a word starting with a vowel sound: un vieil ami, un vieil '
      + 'immeuble. It sounds exactly like the feminine vieille and it is used with the un kind of thing.',
    tags: ['adjective', 'elision'],
    drills: ['flashcard', 'voiceflash'], version: 1, cardType: 'vocab',
    masculine: 'vieux', role: 'vowel',
  },
];

export const AUTHORED_WORD_IDS: string[] = AUTHORED_WORDS.map((w) => w.id);

export function wordToItem(w: AdjWord): Item {
  const { masculine: _m, role: _r, ...item } = w;
  return item;
}

/* ─── The published four-form paradigm ─────────────────────────────────────
 *
 * Twenty-four corpus rows, six adjectives, four cells each, and NOT ONE OF THEM
 * IS AUTHORED. `grand` is the minimal one and it is the one the teaching card
 * uses: one noun pair (garçon / fille) held constant across all four cells, so
 * exactly one thing moves between any two of them. The other five vary their
 * noun, which is why they live in the table and the drills rather than on the
 * card that introduces the idea.
 *
 * `bon` is worth a second look. Its feminine plural row is
 *
 *     fr.a1.adjectifs-essentiels.218  Les nouvelles sont bonnes.
 *
 * where « les nouvelles » is THE NEWS, a noun, and not the feminine plural of
 * the adjective `nouveau`. That matters because this lesson has to prove it did
 * not teach nouveau, and a word search for "nouvelle" over its production
 * surfaces would fire on this row and be deleted within a week. So the guard is
 * by ID (see NOT_TAUGHT_IDS) rather than by word, which is invariant §6's
 * warning applied before it fired rather than after.                        */

export type Form = 'm' | 'f' | 'mpl' | 'fpl';

export const PARADIGM: Record<Adj, Record<Form, string>> = {
  grand: {
    m: 'fr.a1.adjectifs-essentiels.192',   // Ce garçon est très grand.
    f: 'fr.a1.adjectifs-essentiels.193',   // Cette fille est très grande.
    mpl: 'fr.a1.adjectifs-essentiels.194', // Les garçons sont grands.
    fpl: 'fr.a1.adjectifs-essentiels.195', // Les filles sont grandes.
  },
  petit: {
    m: 'fr.a1.adjectifs-essentiels.197',   // Elle a un petit chien.
    f: 'fr.a1.adjectifs-essentiels.196',   // Il a une petite voiture.
    mpl: 'fr.a1.adjectifs-essentiels.198', // Nous avons de petits problèmes.
    fpl: 'fr.a1.adjectifs-essentiels.199', // Elle porte de petites chaussures.
  },
  beau: {
    m: 'fr.a1.adjectifs-essentiels.025',   // C'est un beau jardin.
    f: 'fr.a1.adjectifs-essentiels.201',   // C'est une belle maison.
    mpl: 'fr.a1.adjectifs-essentiels.202', // Ce sont de beaux tableaux.
    fpl: 'fr.a1.adjectifs-essentiels.203', // Ce sont de belles fleurs.
  },
  vieux: {
    m: 'fr.a1.adjectifs-essentiels.210',   // Mon grand-père est vieux.
    f: 'fr.a1.adjectifs-essentiels.211',   // Ma grand-mère est vieille.
    mpl: 'fr.a1.adjectifs-essentiels.212', // Ce sont de vieux amis.
    fpl: 'fr.a1.adjectifs-essentiels.213', // Ce sont de vieilles photos.
  },
  bon: {
    m: 'fr.a1.adjectifs-essentiels.215',   // Le repas était très bon.
    f: 'fr.a1.adjectifs-essentiels.216',   // La soupe est bonne.
    mpl: 'fr.a1.adjectifs-essentiels.217', // Les résultats sont bons.
    fpl: 'fr.a1.adjectifs-essentiels.218', // Les nouvelles sont bonnes.  <- the NOUN
  },
  mauvais: {
    m: 'fr.a1.adjectifs-essentiels.219',   // Ce film est mauvais.
    f: 'fr.a1.adjectifs-essentiels.220',   // Cette idée est mauvaise.
    mpl: 'fr.a1.adjectifs-essentiels.221', // Les temps sont mauvais.
    fpl: 'fr.a1.adjectifs-essentiels.222', // Les odeurs sont mauvaises dans la cuisine.
  },
};

export const FORM_ORDER: Form[] = ['m', 'f', 'mpl', 'fpl'];

/** The four ids of one adjective's paradigm, in m / f / mpl / fpl order. */
export const gridFor = (a: Adj): string[] => FORM_ORDER.map((f) => PARADIGM[a][f]);

export const PARADIGM_IDS: string[] = THE_SIX.flatMap((a) => gridFor(a));

/** The written form each paradigm cell is about, so a card can label a row
 *  without a second hand-kept table. */
export const FORM_WORD: Record<Adj, Record<Form, string>> = {
  grand: { m: 'grand', f: 'grande', mpl: 'grands', fpl: 'grandes' },
  petit: { m: 'petit', f: 'petite', mpl: 'petits', fpl: 'petites' },
  beau: { m: 'beau', f: 'belle', mpl: 'beaux', fpl: 'belles' },
  vieux: { m: 'vieux', f: 'vieille', mpl: 'vieux', fpl: 'vieilles' },
  bon: { m: 'bon', f: 'bonne', mpl: 'bons', fpl: 'bonnes' },
  mauvais: { m: 'mauvais', f: 'mauvaise', mpl: 'mauvais', fpl: 'mauvaises' },
};

/* ─── The third form, in front of a real vowel ─────────────────────────────
 *
 * Every one of these is published, which the brief did not expect. .043 and
 * .025 are the CONSONANT PARTNERS: without them bel and vieil are two words the
 * learner is told about, and with them they are a contrast in one frame.
 *
 *     C'est un beau jardin.      C'est un bel arbre.
 *     C'est un vieux château.    C'est un vieil immeuble.
 *
 * Same opening, same article, one word apart, and the only thing that decided
 * it is the first sound of the noun.                                        */
export const VOWEL_IDS = [
  'fr.a1.adjectifs-essentiels.026', // C'est un bel homme.
  'fr.a1.adjectifs-essentiels.204', // C'est un bel arbre.
  'fr.a1.adjectifs-essentiels.044', // Mon grand-père a un vieil ami à Lyon.
  'fr.a1.adjectifs-essentiels.214', // C'est un vieil immeuble.
  'fr.a1.adjectifs-essentiels.043', // C'est un vieux château.   <- the consonant partner
];

/** The four same-frame pairs the vowel section is built on, as ids. */
export const VOWEL_PAIRS: { consonant: string; vowel: string; word: string }[] = [
  { consonant: 'fr.a1.adjectifs-essentiels.025', vowel: 'fr.a1.adjectifs-essentiels.204', word: 'bel' },
  { consonant: 'fr.a1.adjectifs-essentiels.043', vowel: 'fr.a1.adjectifs-essentiels.214', word: 'vieil' },
];

/* ─── Placement: the six in front, and one phrase carrying both orders ─────
 *
 * fr.a1.adjectifs-essentiels.008 is the best row in the lesson and it was
 * already published:
 *
 *     Elle porte une petite robe rouge.
 *
 * The size in front of the thing, the colour behind it, in ONE noun phrase, so
 * the contrast is a fact about a sentence rather than a claim about two. Its
 * frame is identical to a1.13's own fr.a1.couleurs.001 "Elle porte une jupe
 * verte.", which is already in the seed, so the two orders can be set side by
 * side with exactly one thing different between them.                       */
export const PLACEMENT_IDS = [
  'fr.a1.adjectifs-essentiels.002', // Elle habite dans une grande maison.
  'fr.a1.adjectifs-essentiels.008', // Elle porte une petite robe rouge.   BOTH ORDERS
  'fr.a1.adjectifs-essentiels.027', // Elle porte une belle robe bleue.    BOTH ORDERS
  'fr.a1.adjectifs-essentiels.007', // J'ai un petit chien blanc.          BOTH ORDERS
];

/** The rows that carry a pre-noun adjective AND a post-noun colour in one noun
 *  phrase. The test asserts one of these is on a screen: that single string is
 *  the lesson, and separating the halves is how it decays into a word list. */
export const BOTH_ORDERS_IDS = [
  'fr.a1.adjectifs-essentiels.008',
  'fr.a1.adjectifs-essentiels.027',
  'fr.a1.adjectifs-essentiels.007',
];

/** a1.13's own row, already in the seed, and the colour half of the contrast. */
export const COLOUR_CONTRAST_ID = 'fr.a1.couleurs.001';

/* ─── The dictée, and every target chosen by MEASUREMENT ───────────────────
 *
 * Word mode hands the learner each whole word as a tile, so a word-mode dictée
 * CANNOT test an agreement ending: the learner taps a pre-spelled `grande` and
 * never decides a letter. Only LETTERS mode makes them produce it, which is the
 * entire point of a dictée in a lesson about endings. a1.13 found this and
 * recorded it; this lesson measured it again rather than trusting the note.
 *
 * `dicteeMode` switches to words above DICTEE_LETTER_LIMIT letters, and that
 * limit is TIGHT: 16. Measured through the real function
 * (scripts/_adjectifs_probe2.ts), only TWO rows in this lesson's own theme
 * survive it:
 *
 *     letters 16L  fr.a1.adjectifs-essentiels.025  C'est un beau jardin.
 *     letters 14L  fr.a1.adjectifs-essentiels.026  C'est un bel homme.
 *     WORDS   18L  fr.a1.adjectifs-essentiels.005  C'est une grande ville.
 *     WORDS   19L  fr.a1.adjectifs-essentiels.013  C'est un bon restaurant.
 *     WORDS   20L  fr.a1.adjectifs-essentiels.007  J'ai un petit chien blanc.
 *
 * A subject, a verb, an article, a noun and one of these six runs past sixteen
 * letters almost immediately, so the theme's own dictation band is nearly all
 * word mode. Rather than ship a two-line dictée, scripts/_adjectifs_dictee.ts
 * searched EVERY theme for published, dictation-tagged, letters-mode rows
 * carrying one of the six, and found eleven. Four of them are in
 * `description-personnes-objets` and they are exactly the short predicate
 * sentences this lesson needs:
 *
 *     Il est grand.  /  La table est grande.  /  Ils sont grands.  /  Elle est belle.
 *
 * MEASURED AND WORTH REPORTING: `vieux`, `bon` and `mauvais` have NO
 * letters-mode dictation row in any theme, in any form. They cannot be dictated
 * at all without authoring one, and authoring a sentence short enough would mean
 * inventing a frame no other row uses. They are tested by the quiz instead, by
 * typeIn at r3 and r5, and by the reference sheet. Named here so nobody "fixes"
 * the dictée by adding a target that silently degrades to tapping tiles.     */
export const DICTEE_IDS = [
  'fr.a1.description-personnes-objets.001', // Il est grand.          10L  the plain form
  'fr.a1.description-personnes-objets.041', // La table est grande.   16L  the -e you CAN hear
  'fr.a1.description-personnes-objets.003', // Ils sont grands.       13L  the -s nobody can hear
  'fr.a1.description-personnes-objets.038', // Elle est belle.        12L  the word that is replaced
  'fr.a1.adjectifs-essentiels.025',         // C'est un beau jardin.  16L  in front of a consonant
  'fr.a1.adjectifs-essentiels.026',         // C'est un bel homme.    14L  in front of a vowel
];

/* ─── The only voiceflash sentences the spoken mission can use ─────────────
 *
 * `practice` with `skill: 'speak'` runs the mic-scored deck, which scores ONLY
 * items carrying the `voiceflash` drill. An item without it renders as a card
 * the learner cannot be scored on, which reads as a broken mission rather than a
 * missing tag.
 *
 * MEASURED (scripts/_adjectifs_vf.ts) rather than assumed, and the measurement
 * corrected this file's own first draft. Of 321 published voiceflash sentences
 * in the whole corpus, TWELVE carry one of these six in any form, and NOT ONE of
 * them is in `adjectifs-essentiels`: the .19x/.2xx paradigm band is
 * `sentence,flashcard,review` and the .0xx band is `dictation`. So the theme
 * this lesson is bound to cannot supply a single spoken sentence.
 *
 * Three of the twelve are usable and all three are ALREADY IN THE SEED, so they
 * cost nothing to carry:
 *
 *     fr.a1.metiers.273     Elle est grande.                the audible feminine
 *     fr.a1.metiers.278     C'est une bonne idée.           the biggest change of the six
 *     fr.sons.liaisons.149  Ils achètent une belle maison.  and one IN FRONT of its noun
 *
 * The other nine are excluded on purpose and it is worth recording why, because
 * the next author will run the same query and find them:
 *
 *   fr.a1.cafe.172 "Il fait beau." is the WEATHER idiom. It is the one place in
 *   the language where beau describes nothing and sits in front of nothing, and
 *   putting it in a lesson about where these six go would be teaching against
 *   the lesson.
 *
 *   fr.a1.verbes-essentiels.007 matched on `petit-déjeuner`, which is the
 *   compound noun for breakfast rather than the adjective at all. A hyphen is
 *   not a letter, so any accent-aware boundary check finds it. Named here so
 *   nobody counts it twice.
 *
 *   Six of the remaining seven are `fr.sons.liaisons.*`, where the sentence
 *   exists to carry a LIAISON (`un petit_appartement`, `un petit_ami`). This
 *   lesson deliberately does not teach liaison: see the note on `un grand
 *   homme` in adjectifs-lesson.ts. fr.sons.liaisons.149 is the exception and is
 *   used, because its liaison is on `Ils_achètent` and has nothing to do with
 *   the describing word.
 *
 * Without these three the spoken mission would be fourteen isolated words and
 * the learner would never produce one of these six inside a sentence.        */
export const SPEAK_SENTENCE_IDS = [
  'fr.a1.metiers.273',    // Elle est grande.
  'fr.a1.metiers.278',    // C'est une bonne idée.
  'fr.sons.liaisons.149', // Ils achètent une belle maison.
];

/* ─── What this lesson must never author as correct French ─────────────────
 *
 * The cheapest high-value assertions in the lesson, and they live here so the
 * batch, the merge and the test all read one list.
 *
 * Scoped, at every call site, to CONTENT AUTHORED AS CORRECT FRENCH: corpus
 * rows, quiz answer keys, the `right` side of every trap card, and the sheet
 * headwords. NOT to every string, because the scene and the trap cards have to
 * SHOW the error in order to teach it, and a guard that fired on those would be
 * deleted within a week rather than fixed.                                   */

/** The plural over-correction the brief asks for by name. A learner who has
 *  just internalised "add -s" writes both of these, and neither has ever been a
 *  French word. Cheap, and it stops a future author "fixing" a correct form. */
export const FORBIDDEN_PLURALS = ['vieuxs', 'mauvaiss', 'beaus'];

/** Regularised feminines. Each is what the learner produces if they apply
 *  a1.13's rule to the half of this set it does not reach: an -e added to a form
 *  that replaces itself instead, or a doubled letter left undoubled. */
export const FORBIDDEN_FEMININES = ['vieuxe', 'beaue', 'bone', 'bele', 'vieile'];

/** The placement error, which is the whole lesson. Every one of these is
 *  understood perfectly by a French listener, which is exactly why it survives
 *  and why it can never appear in anything this lesson calls correct. */
export const FORBIDDEN_ORDERS = [
  'une maison grande', 'une voiture petite', 'un jardin beau',
  'un château vieux', 'un repas bon', 'un film mauvais',
  'une robe petite', 'un chien petit',
];

/** The vowel error. `beau homme` and `vieux ami` collide two vowel sounds, which
 *  is the pressure sons.07 taught, and both are what a learner says before they
 *  have met bel and vieil. */
export const FORBIDDEN_VOWEL_FORMS = [
  'un beau homme', 'un beau arbre', 'un beau appartement',
  'un vieux ami', 'un vieux immeuble', 'un vieux homme',
];

/* ─── The neighbours keep their lessons ────────────────────────────────────
 *
 * Three units come after this one and every one of them can be spent by
 * accident here. a1.16 declares this lesson as its prerequisite; a1.15 and a1.17
 * both declare the `famille` theme this unit is giving up.
 *
 * All three guards are written the way invariant §6 says to write them: against
 * PRODUCTION SURFACES rather than every string, and as MULTI-WORD PHRASES rather
 * than bare words wherever the concept is what matters. An earlier a1.13 draft
 * used the BAGS mnemonic as a single word and fired immediately on its own gloss
 * "My bags are green."                                                       */

/** Placement TEACHING, which is a1.16's whole subject. This lesson states that
 *  these six come first and shows it on every screen; it explains no system,
 *  names no category, and never mentions a pair that changes meaning by
 *  position.
 *
 *  The reframe itself is deliberately absent from this list: "Colours follow the
 *  noun. These six come first." is the one statement this lesson is FOR, and a
 *  guard that forbade it would forbid the lesson. */
export const PLACEMENT_SYSTEM = [
  'bags mnemonic', 'bangs mnemonic', 'beauty age goodness size',
  'adjectives of size', 'adjectives of age', 'adjectives of beauty',
  'which adjectives go before', 'which adjectives come before',
  'most adjectives go after', 'most adjectives come after',
  'changes meaning depending on', 'changes its meaning depending',
  'ancien professeur', 'professeur ancien',
  'two adjectives at once', 'more than one describing word',
];

/** Family vocabulary, which is a1.15's. `mon grand-père` and `ma grand-mère` are
 *  legitimate and appear inside imported corpus rows, so the guard is on
 *  TEACHING a family set rather than on the words themselves. */
export const FAMILY_TEACHING = [
  'the family words', 'family vocabulary', 'members of the family',
  'talking about your family', 'your whole family', 'the words for family',
];

/** The possessive system, which is a1.17's. `mon`, `ma` and `mes` appear in
 *  almost every noun phrase in the corpus and using them is fine; explaining
 *  which one to pick is not. */
export const POSSESSIVE_TEACHING = [
  'mon, ma and mes', 'ton, ta and tes', 'son, sa and ses',
  'agrees with the thing owned', 'not with the owner',
  'which one to use before a', 'the word for my changes',
];

/** Other adjectives published in this theme that this lesson does not teach.
 *  Checked as WORDS on production surfaces, and the list deliberately excludes
 *  `nouveau`, `nouvel` and `nouvelle`: fr.a1.adjectifs-essentiels.218 is "Les
 *  nouvelles sont bonnes.", where « les nouvelles » is the NEWS, and a word
 *  guard would fire on this lesson's own bon paradigm. Those three are guarded
 *  by id instead. */
export const OTHER_ADJECTIVES = [
  'joli', 'jolie', 'jolis', 'jolies', 'jeune', 'jeunes',
  'gros', 'grosse', 'longue', 'court', 'courte', 'haut', 'haute', 'basse',
];

/** Ids this lesson must not teach, checked by id because a word search for them
 *  would fire on legitimate content. `.007` and `.209` are `nouveau` and "C'est
 *  un nouvel hôtel.", which is the THIRD three-form adjective in A1 and the one
 *  the brief says does not exist. */
export const NOT_TAUGHT_IDS = [
  'fr.sons.adjectifs-essentiels.006', // joli
  'fr.sons.adjectifs-essentiels.007', // nouveau      <- has a third form: nouvel
  'fr.sons.adjectifs-essentiels.009', // jeune
  'fr.sons.adjectifs-essentiels.010', // long
  'fr.sons.adjectifs-essentiels.014', // gros
  'fr.a1.adjectifs-essentiels.205',   // J'ai acheté une nouvelle robe.
  'fr.a1.adjectifs-essentiels.206',   // Il a un nouveau vélo.
  'fr.a1.adjectifs-essentiels.208',   // Elle a de nouvelles idées.
  'fr.a1.adjectifs-essentiels.209',   // C'est un nouvel hôtel.
];

/* ─── The import and reuse manifests ───────────────────────────────────────*/

import { IMPORTED as IMPORTED_ROWS, REUSED as REUSED_ROWS } from './adjectifs-imported.ts';

export const IMPORTED = IMPORTED_ROWS;
export const REUSED = REUSED_ROWS;
export const IMPORTED_IDS: string[] = IMPORTED.map((r) => r.id);
export const REUSED_IDS: string[] = REUSED.map((r) => r.id);

/** Every id this lesson names that it did not author. */
export const BORROWED_IDS: string[] = [...new Set([...REUSED_IDS, ...IMPORTED_IDS])];

/* ─── Reading a row's text without retyping it ─────────────────────────────
 *
 * Every French sentence a section displays is read through frOf(), so no screen
 * carries its own copy of a corpus row and no two screens can drift. Throws on
 * an unknown id: a card silently missing its sentence looks exactly like a card
 * that never wanted one.                                                     */

const ALL_ROWS: { id: string; fr: string; en: string }[] = [
  ...AUTHORED_WORDS.map((w) => ({ id: w.id, fr: w.fr, en: w.en })),
  ...IMPORTED.map((w) => ({ id: w.id, fr: w.fr, en: w.en })),
  ...REUSED.map((w) => ({ id: w.id, fr: w.fr, en: w.en })),
];

const BY_ID = new Map(ALL_ROWS.map((r) => [r.id, r] as const));

export function frOf(id: string): string {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`a1.14: no French authored or recorded for "${id}"`);
  return r.fr;
}

export function enOf(id: string): string {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`a1.14: no gloss authored or recorded for "${id}"`);
  return r.en;
}

/** Which of the six a row is about. Reads the recorded text rather than a
 *  hand-kept table, so a row that stops carrying its adjective stops counting
 *  for it.
 *
 *  Matches any form of the word, because a sentence carrying `grandes` is
 *  evidence for `grand`. Boundary-checked against an accent-aware class rather
 *  than a regex built from the search term: `\b` is ASCII-only in JavaScript and
 *  fails on an accented neighbour, which is invariant §0's first trap.
 *
 *  `beau` and `vieux` need their irregular forms listed rather than derived,
 *  because belle, bel, vieille and vieil share no stem with them. That is the
 *  lesson. */
const ALL_FORMS: Record<Adj, string[]> = {
  grand: ['grand', 'grande', 'grands', 'grandes'],
  petit: ['petit', 'petite', 'petits', 'petites'],
  beau: ['beau', 'beaux', 'bel', 'belle', 'belles'],
  vieux: ['vieux', 'vieil', 'vieille', 'vieilles'],
  bon: ['bon', 'bons', 'bonne', 'bonnes'],
  mauvais: ['mauvais', 'mauvaise', 'mauvaises'],
};

export function hasFormOf(text: string, needle: string): boolean {
  const h = text.toLowerCase();
  const n = needle.toLowerCase();
  let from = 0;
  for (;;) {
    const i = h.indexOf(n, from);
    if (i < 0) return false;
    const before = i === 0 ? ' ' : h[i - 1];
    const after = h[i + n.length] ?? ' ';
    if (!/[a-zà-ÿ]/i.test(before) && !/[a-zà-ÿ]/i.test(after)) return true;
    from = i + 1;
  }
}

export function adjectivesIn(fr: string): Adj[] {
  return THE_SIX.filter((a) => ALL_FORMS[a].some((f) => hasFormOf(fr, f)));
}

export const formsOf = (a: Adj): string[] => ALL_FORMS[a];
