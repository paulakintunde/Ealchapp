// The a1.13 corpus: what this lesson authors, what it imports, and the four
// shipped respellings it repairs.
//
// THIS FILE IS THE SINGLE SOURCE OF TRUTH for the 17 authored rows, the 30
// imported rows, the 6 reused rows, and every respelling a1.13 puts on a
// screen. The lesson body (couleurs-lesson.ts) reads `fr`, `ipa`, `respell` and
// `en` FROM HERE and never restates them, for the same reason mois-corpus.ts
// and jours-corpus.ts do: before that convention one word's transcription was
// typed by hand in five sections and the five copies were free to drift.
//
// ══════════════════════════════════════════════════════════════════════════
//  A1-13-COLORS-PROMPT.md IS RIGHT ABOUT THE BIG THING AND WRONG ABOUT FOUR
//  SMALL ONES, ALL IN THE SAME DIRECTION, AND FOR THE SAME REASON.
// ══════════════════════════════════════════════════════════════════════════
//
// The brief opens with a section headed "THE CORRECTION THAT CHANGES THIS JOB"
// which corrects an earlier draft that had measured `couleurs` against the seed
// and concluded it was empty. That correction is right: `couleurs` holds 322
// published rows and the fourteen colour headwords exist. Verified 2026-08-06.
//
// But the brief then makes the SAME mistake three more times, in the sections
// it wrote after the correction, and every one of them would have cost authored
// rows that already exist. Measured against Postgres on 2026-08-06 with
// `pnpm corpus:probe` and two independent SQL passes:
//
//   1. "`marron` is thinner than the totals suggest ... The seed's two are both
//      masculine singular, which is precisely the case where an invariable
//      colour looks identical to a variable one ... YOU MUST AUTHOR THE
//      FEMININE AND PLURAL CASES YOURSELF: `une voiture marron`, `des
//      chaussures marron`. Without those, the lesson asserts the rule and never
//      shows it."
//
//      FALSE of the database, TRUE of the seed, and the brief says "18/2" itself
//      before drawing the wrong conclusion from the 2. Postgres holds a feminine
//      AND a plural AND several more:
//
//          fr.a1.couleurs.235  La table marron vient d'Italie.        FEMININE
//          fr.a1.couleurs.234  Les chaussures marron coûtent cher.    PLURAL
//          fr.a1.couleurs.087  Ses yeux sont marron.                  PLURAL
//          fr.a1.couleurs.089  Les valises sont marron.               PLURAL
//          fr.a1.couleurs.101  Les chaussettes sont marron.           PLURAL
//          fr.a1.couleurs.104  Les gants sont marron.                 PLURAL
//          fr.a1.couleurs.111  Les sacs à main sont marron.           PLURAL
//
//      Seven of the twenty are feminine or plural. The lesson imports three of
//      them and shows the rule rather than asserting it, which is what the
//      brief asked for by a route it thought was closed.
//
//   2. "Compound colours never agree. `bleu clair`, `vert foncé`, `vert pomme`.
//      THE CORPUS CONTAINS NONE OF THESE, so every example is yours."
//
//      FALSE. Sixteen compound-colour sentences are published, plus eight
//      compound headwords at fr.sons.couleurs.019-.022 and .026-.029. All three
//      of the brief's own examples exist, one of them verbatim:
//
//          fr.a1.couleurs.123  Les murs sont vert pomme.      <- the brief's example
//          fr.a1.couleurs.125  Ses yeux sont vert foncé.
//          fr.a1.couleurs.122  Elle porte une robe bleu clair.
//
//      .123 and .125 are better than anything that could have been authored,
//      because both put a compound colour behind a PLURAL noun, so the refusal
//      to agree is visible rather than asserted.
//
//   3. "There is exactly one `marrons` in Postgres. Look at it before you build.
//      It is either the chestnuts (a legitimate noun plural) or a colour
//      agreement error in shipped content. If it is the second, report it."
//
//      It is the FIRST, and it is the best thing in this lesson:
//
//          fr.b1.les-fetes.016  Ma grand-mère prépare ses fameux marrons
//                               glacés pour les fêtes de fin d'année.
//
//      Candied chestnuts. A legitimate noun plural, not an agreement error, so
//      there is nothing to report and nothing to fix. It also proves the whole
//      teaching on its own: `marron` takes an s when it IS a chestnut and
//      refuses one when it is a colour, which is exactly the reframe. The row is
//      b1 and is NOT imported (the level would drag a b1 sentence into an a1
//      lesson's SRS); the fact it carries is put on a card in words instead.
//
//   4. The brief also says of the theme: "author the missing feminines into
//      `fr.a1.couleurs.259+`". The id is right for SENTENCES and wrong for
//      HEADWORDS. Every headword in this theme lives in `fr.sons.couleurs`
//      (.001-.065) and every `fr.a1.couleurs` row is a sentence, without
//      exception across 257 rows. This lesson follows the corpus rather than the
//      brief: four feminine HEADWORDS go to fr.sons.couleurs.066-.069 and
//      thirteen SENTENCES go to fr.a1.couleurs.259-.271.
//
// Root cause, four times in four briefs: the claim was measured against
// seed.json, which is a CUT. `couleurs` is not in SEED_CUT.themes, so the cut
// runs at 0% of it. `pnpm corpus:probe` prints both numbers and caught all
// three of these in one command.
//
// ── What is genuinely missing, and it is only four words ───────────────────
//
// The brief's own targeting section is right: "That is your authoring job: the
// feminine forms, the plurals as needed, and the invariable evidence." After the
// three corrections above, the invariable evidence and the plurals are already
// there, so the authoring job is smaller still. Verified ABSENT as headwords in
// every article form:
//
//     bleue     noire     grise     violette
//
// Verified PRESENT and therefore reused rather than written: verte
// (fr.sons.muettes.049), blanche (fr.sons.muettes.054 and consonnes.024), brune
// (fr.sons.nasales.171), brun (fr.sons.nasales.170).
//
// ── Why thirteen sentences are authored when the corpus is this rich ───────
//
// The corpus proves every RULE this lesson teaches and proves almost none of
// them MINIMALLY. Its agreement sentences differ from each other in three or
// four places at once:
//
//     Elle porte une jupe verte.  /  Les volets sont verts.
//
// Both are correct, both show agreement, and between them a learner cannot see
// what carried the change: the noun moved, the number moved, the verb moved and
// the frame moved. a1.09 hit the same wall and answered it the same way, and
// its header is worth quoting: a pair that "differs in four places at once
// teaches nothing, because the learner cannot see which difference carried the
// meaning."
//
// So what is authored is a PARADIGM: one noun pair (mon sac / ma veste), three
// colours, four forms each. Read across a row and only the ending moves. Read
// down a column and only the colour moves. The third row never moves at all,
// and that is the lesson.
//
//     mon sac est vert       ma veste est verte      mes sacs sont verts     mes vestes sont vertes
//     mon sac est bleu       ma veste est bleue      mes sacs sont bleus     mes vestes sont bleues
//     mon sac est marron     ma veste est marron     mes sacs sont marron    mes vestes sont marron
//
// vert is the audible family (VEHR -> VEHRT), bleu is the silent one
// (BLUH -> BLUH), and marron is the one that refuses. Twelve rows. The
// thirteenth, "Les chaussures sont marron.", exists to sit beside the imported
// fr.a1.couleurs.049 "Les chaussures sont rouges.": the SAME noun in the SAME
// frame, one colour agreeing and one refusing, which is the cheapest possible
// proof of the reframe and costs one row.
//
// Every authored row is built on être, which with avoir is the whole of the
// learner's verb stock. There is no regular-verb unit anywhere in A1.
//
// ── The four respelling repairs, and the one that is a trap ────────────────
//
// House convention: hyphenated syllables, stressed syllable capitalised, nasal
// vowels closed with a superscript n and NEVER a plain n or m. Brackets are
// added by `D()` below, never stored, because the density validator checks the
// rendered form.
//
// Four of the twelve headwords this lesson displays break the convention or
// contradict a better row elsewhere. Each was checked against the REAL
// `hasPlainNasalFor` before and after (scripts/_couleurs_probe.ts):
//
//     fr.sons.couleurs.006  blanc   BLAHN      -> BLAHⁿ       flagged by the checker
//     fr.sons.couleurs.011  marron  mah-ROHN   -> mah-ROHⁿ    flagged by the checker
//     fr.sons.couleurs.009  orange  oh-RAHNZH  -> oh-RAHⁿZH   NOT flagged. See below.
//     fr.sons.couleurs.004  jaune   ZHOHN      -> ZHON        flagged, and the fix is NOT a superscript
//
// TWO OF THESE FOUR ARE INVISIBLE TO THE SHARED CHECKER IN OPPOSITE DIRECTIONS,
// which is why both are asserted BY NAME in author-couleurs-batch.ts and
// a1-13-couleurs.test.ts as well as through the shared function:
//
//   `orange` is a WORD-INTERNAL nasal. hasPlainNasalFor needs the n or m to end
//   a token (`[AEIOUY][NM](?![A-Za-zÀ-ÿ])`) and `oh-RAHNZH` has ZH behind the
//   nasal, so the broken value passes the checker cleanly. This is invariant §3's
//   first blind spot, the same one that let a1.09's sep-TAHNBR, noh-VAHNBR and
//   day-SAHNBR through. Measured, not assumed: the probe prints `ok` for
//   `oh-RAHNZH`. fr.sons.consonnes.055 already carries the correct oh-RAHⁿZH, so
//   the corpus contradicts itself on the same word in two themes.
//
//   `jaune` is the OPPOSITE failure and the brief is right to flag it. /ʒon/ has
//   a REAL /n/ and no nasal vowel at all, but hasPlainNasalFor reads OH + N at a
//   token end as a nasal without consulting the French spelling, so it flags
//   `ZHOHN` as broken. THE FIX IS NOT `ZHOHⁿ`. That respelling also passes the
//   checker (verified) and would teach a sound that is not in the word. The
//   correct value is `ZHON`, which passes the checker AND is true, and it is
//   written here so nobody reverses it into a superscript to make a linter
//   quieter. This is invariant §3's second blind spot, alongside `automne`.
//
// `orange` carries five different respellings across five themes and `bleu`
// three. Only the two that break a stated rule are repaired. A variant that
// merely differs (`lo-RAHNJ` in marche, `luh BLUH` in corps) is not a violation
// and reaching into another lesson's card to settle a preference is not this
// lesson's business. Invariant §9 says so explicitly.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

/* ─── What the screens display ─────────────────────────────────────────────
 *
 * Every French unit a1.13 puts on a card, with the respelling this lesson
 * stands behind. Keyed by the French form, because several of these are display
 * strings rather than corpus rows: the plural forms are never headwords in this
 * corpus and exist here only as text in the four-form table.               */

export type Display = { fr: string; ipa: string; respell: string; en: string };

const D = (fr: string, ipa: string, res: string, en: string): Display =>
  ({ fr, ipa: `/${ipa}/`, respell: `[${res}]`, en });

export const RESPELL: Record<string, Display> = {
  // The twelve, in the order the deck shows them. Not one is authored: every
  // one is fr.sons.couleurs.001-.012. Four carry a corrected transcription,
  // which is what RESPELL_REPAIRS writes back.
  rouge: D('rouge', 'ʁuʒ', 'ROOZH', 'red'),
  bleu: D('bleu', 'blø', 'BLUH', 'blue'),
  vert: D('vert', 'vɛʁ', 'VEHR', 'green'),
  jaune: D('jaune', 'ʒon', 'ZHON', 'yellow'),
  noir: D('noir', 'nwaʁ', 'NWAR', 'black'),
  blanc: D('blanc', 'blɑ̃', 'BLAHⁿ', 'white'),
  gris: D('gris', 'ɡʁi', 'GREE', 'grey'),
  rose: D('rose', 'ʁoz', 'ROHZ', 'pink'),
  orange: D('orange', 'ɔʁɑ̃ʒ', 'oh-RAHⁿZH', 'orange'),
  violet: D('violet', 'vjɔ.lɛ', 'vyoh-LEH', 'purple'),
  marron: D('marron', 'ma.ʁɔ̃', 'mah-ROHⁿ', 'brown'),
  beige: D('beige', 'bɛʒ', 'BEHZH', 'beige'),

  // The feminines. Four are authored here (bleue, noire, grise, violette) and
  // three are reused from lessons that already teach the sound (verte and
  // blanche from sons.06, brune from sons.03).
  verte: D('verte', 'vɛʁt', 'VEHRT', 'green (f.)'),
  bleue: D('bleue', 'blø', 'BLUH', 'blue (f.)'),
  noire: D('noire', 'nwaʁ', 'NWAR', 'black (f.)'),
  blanche: D('blanche', 'blɑ̃ʃ', 'BLAHⁿSH', 'white (f.)'),
  grise: D('grise', 'ɡʁiz', 'GREEZ', 'grey (f.)'),
  violette: D('violette', 'vjɔ.lɛt', 'vyoh-LET', 'purple (f.)'),
  brun: D('brun', 'bʁœ̃', 'BRUHⁿ', 'brown (m.)'),
  brune: D('brune', 'bʁyn', 'BRÜN', 'brown (f.)'),

  // The plurals, which are display strings only. Every one is the SAME SOUND as
  // its singular, and that is the point of showing the transcription: the
  // learner reads two different spellings against one identical respelling.
  verts: D('verts', 'vɛʁ', 'VEHR', 'green (m.pl.)'),
  vertes: D('vertes', 'vɛʁt', 'VEHRT', 'green (f.pl.)'),
  bleus: D('bleus', 'blø', 'BLUH', 'blue (m.pl.)'),
  bleues: D('bleues', 'blø', 'BLUH', 'blue (f.pl.)'),
  rouges: D('rouges', 'ʁuʒ', 'ROOZH', 'red (pl.)'),
  noires: D('noires', 'nwaʁ', 'NWAR', 'black (f.pl.)'),
  blanches: D('blanches', 'blɑ̃ʃ', 'BLAHⁿSH', 'white (f.pl.)'),
  violets: D('violets', 'vjɔ.lɛ', 'vyoh-LEH', 'purple (m.pl.)'),
  violettes: D('violettes', 'vjɔ.lɛt', 'vyoh-LET', 'purple (f.pl.)'),

  // The compound colours, invariable for the same reason marron is. Two are
  // shown, both on corpus rows that put them behind a plural noun.
  'vert pomme': D('vert pomme', 'vɛʁ pɔm', 'vehr POM', 'apple green'),
  'vert foncé': D('vert foncé', 'vɛʁ fɔ̃.se', 'vehr fohⁿ-SAY', 'dark green'),
};

/** The bracketed respelling of a French form this lesson displays. Throws
 *  rather than returning undefined: a card silently missing its transcription
 *  is the failure this file exists to stop, and it looks identical to a card
 *  that never wanted one. */
export function sub(fr: string): string {
  const d = RESPELL[fr];
  if (!d) throw new Error(`a1.13: no respelling authored for "${fr}". Add it to RESPELL.`);
  return d.respell;
}

/** The IPA of a French form this lesson displays, in slashes. */
export function ipaOf(fr: string): string {
  const d = RESPELL[fr];
  if (!d) throw new Error(`a1.13: no IPA authored for "${fr}". Add it to RESPELL.`);
  return d.ipa;
}

/* ─── The four respelling repairs ──────────────────────────────────────────
 *
 * Display-only, on rows in this lesson's own theme that the sons track also
 * uses. The batch prints each one and refuses to write if the stored value is
 * no longer the broken one it expects, because two people disagreeing about a
 * transcription is a decision rather than a merge.                          */

export type RespellRepair = {
  id: string;
  fr: string;
  /** What the row carries today. The batch refuses if this has changed. */
  from: string;
  /** What it will carry. Always equal to this lesson's own RESPELL, unbracketed. */
  to: string;
  /** Does the SHARED checker catch the broken value? Recorded because two of
   *  these four are invisible to it, in opposite directions, and a later author
   *  who trusts the checker alone will reintroduce them. */
  caughtByChecker: boolean;
  why: string;
};

const unbracket = (s: string) => s.replace(/^\[|\]$/g, '');

export const RESPELL_REPAIRS: RespellRepair[] = [
  {
    id: 'fr.sons.couleurs.006', fr: 'blanc',
    from: 'BLAHN', to: unbracket(RESPELL.blanc.respell), caughtByChecker: true,
    why: 'a plain n closes the nasal /ɑ̃/, which the house convention writes with a superscript n. '
      + 'fr.sons.muettes.035 and fr.sons.consonnes.131 both already say BLAHⁿ, so the corpus contradicts '
      + 'itself on the same word in three themes and this row is the odd one out.',
  },
  {
    id: 'fr.sons.couleurs.011', fr: 'marron',
    from: 'mah-ROHN', to: unbracket(RESPELL.marron.respell), caughtByChecker: true,
    why: 'a plain n closes the genuine nasal /ɔ̃/. This is the word the lesson is built on, so a card '
      + 'reading mah-ROHⁿ while the flashcard hub reads mah-ROHN is a contradiction the learner sees.',
  },
  {
    id: 'fr.sons.couleurs.009', fr: 'orange',
    from: 'oh-RAHNZH', to: unbracket(RESPELL.orange.respell), caughtByChecker: false,
    why: 'a plain N closes the nasal /ɑ̃/. hasPlainNasalFor does NOT catch this one: its test needs the n '
      + 'to end a token and ZH follows the nasal here, so the broken value passes every shared check. '
      + 'fr.sons.consonnes.055 already carries the correct oh-RAHⁿZH. Asserted by name because the '
      + 'shared checker cannot see it.',
  },
  {
    id: 'fr.sons.couleurs.004', fr: 'jaune',
    from: 'ZHOHN', to: unbracket(RESPELL.jaune.respell), caughtByChecker: true,
    why: 'THE TRAP, AND THE FIX IS NOT A SUPERSCRIPT. jaune is /ʒon/: the n is a REAL consonant and there '
      + 'is no nasal vowel in the word at all. hasPlainNasalFor flags ZHOHN anyway, because its first '
      + 'branch reads OH + N at a token end as a nasal without consulting the French spelling. Writing '
      + 'ZHOHⁿ would silence the checker AND teach a sound that is not there. ZHON is correct, passes the '
      + 'checker, and is verified in scripts/_couleurs_probe.ts. Do not "fix" this into a superscript.',
  },
];

/** The repairs the shared checker cannot see. Exported so the batch, the merge
 *  and the test all assert these two by name rather than trusting the shared
 *  function to have covered them. */
export const REPAIRS_INVISIBLE_TO_CHECKER = RESPELL_REPAIRS.filter((r) => !r.caughtByChecker).map((r) => r.fr);

/* ─── The twelve, and their ids ────────────────────────────────────────────*/

/** The twelve colours this lesson teaches, in deck order. Named here so the
 *  lesson, the batch, the merge and the test all count the same set rather than
 *  four hand lists free to drift.
 *
 *  TWELVE, not the fourteen the brief lists. `turquoise` (fr.sons.couleurs.013)
 *  and `pourpre` (.035) exist, are correct, and are not taught: neither is A1
 *  vocabulary, and an itemId this lesson declares must be on a screen rather
 *  than merely resolvable. They are named on the reference sheet in prose and
 *  imported by nothing. Reported rather than silently dropped. */
export const THE_TWELVE = [
  'rouge', 'bleu', 'vert', 'jaune', 'noir', 'blanc',
  'gris', 'rose', 'orange', 'violet', 'marron', 'beige',
] as const;
export type Colour = (typeof THE_TWELVE)[number];

/** English, index-aligned with THE_TWELVE. */
export const IN_ENGLISH: Record<Colour, string> = {
  rouge: 'red', bleu: 'blue', vert: 'green', jaune: 'yellow',
  noir: 'black', blanc: 'white', gris: 'grey', rose: 'pink',
  orange: 'orange', violet: 'purple', marron: 'brown', beige: 'beige',
};

/** A concrete thing the learner already owns from the corpus, one per colour.
 *  The brief asks for exactly this and gives the reason: there is no colour
 *  field anywhere in schema.ts, so a colour attached to a thing is the only
 *  memorable form available. See the note on imagery in couleurs-lesson.ts. */
export const ON_A_THING: Record<Colour, { fr: string; en: string }> = {
  rouge: { fr: 'les tomates rouges', en: 'red tomatoes' },
  bleu: { fr: 'les yeux bleus', en: 'blue eyes' },
  vert: { fr: 'les haricots verts', en: 'green beans' },
  jaune: { fr: 'le citron jaune', en: 'the yellow lemon' },
  noir: { fr: 'les olives noires', en: 'black olives' },
  blanc: { fr: 'la farine blanche', en: 'white flour' },
  gris: { fr: 'la souris grise', en: 'the grey mouse' },
  rose: { fr: 'les fleurs roses', en: 'pink flowers' },
  orange: { fr: 'les rideaux orange', en: 'orange curtains' },
  violet: { fr: 'le raisin violet', en: 'the purple grape' },
  marron: { fr: 'les chaussures marron', en: 'brown shoes' },
  beige: { fr: 'le manteau beige', en: 'the beige coat' },
};

/** The twelve colour headwords, in deck order. fr.sons.couleurs.001 is rouge
 *  and they run consecutively to .012, which is beige. Built by offset rather
 *  than listed, so a renumbering cannot half-apply. */
export const COLOUR_IDS: string[] = THE_TWELVE.map(
  (_, i) => `fr.sons.couleurs.${String(1 + i).padStart(3, '0')}`,
);

/* ─── The agreement families ───────────────────────────────────────────────
 *
 * Four groups, which is what `groupDrill` is for. The split is by WHAT THE
 * FEMININE DOES, because that is the only question a learner has to answer
 * before writing one, and it is the split the corpus already encodes: sons.06
 * files `blanche` as ["e-switch","gender-audible","nasal"] and `blanc` beside it
 * as ["careful-exception","silent-c","nasal"].                              */

export type Family = 'already-e' | 'adds-e' | 'changes-more' | 'invariable';

export const FAMILY_OF: Record<Colour, Family> = {
  rouge: 'already-e', jaune: 'already-e', rose: 'already-e', beige: 'already-e',
  bleu: 'adds-e', noir: 'adds-e', vert: 'adds-e', gris: 'adds-e',
  blanc: 'changes-more', violet: 'changes-more',
  marron: 'invariable', orange: 'invariable',
};

export const FAMILY_LABEL: Record<Family, string> = {
  'already-e': 'Already ends in -e',
  'adds-e': 'Adds an -e',
  'changes-more': 'Changes more than the ending',
  invariable: 'Never changes at all',
};

export const coloursIn = (f: Family): Colour[] => THE_TWELVE.filter((c) => FAMILY_OF[c] === f);

/** The two colours that never agree, and the reason they do not. */
export const INVARIABLE = coloursIn('invariable');

/* ─── Can you HEAR the feminine? ───────────────────────────────────────────
 *
 * The half of agreement nobody can hear, which is the insight that makes this
 * lesson stick and connects it straight back to sons.06.
 *
 * The plural -s is NEVER pronounced, on any colour, without exception, so it is
 * not in this table at all: there is nothing to record and nothing to test by
 * ear. The feminine -e is heard only when it wakes a sleeping consonant.  */

export type Audible = 'audible' | 'silent' | 'no-change';

export const FEMININE_AUDIBLE: Record<Colour, Audible> = {
  vert: 'audible',    // VEHR  -> VEHRT     the t arrives
  blanc: 'audible',   // BLAHⁿ -> BLAHⁿSH   the c becomes ch
  gris: 'audible',    // GREE  -> GREEZ     the s wakes as z
  violet: 'audible',  // vyoh-LEH -> vyoh-LET
  bleu: 'silent',     // BLUH  -> BLUH      identical
  noir: 'silent',     // NWAR  -> NWAR      identical
  rouge: 'no-change', jaune: 'no-change', rose: 'no-change', beige: 'no-change',
  marron: 'no-change', orange: 'no-change',
};

/** The masculine/feminine pairs, as display strings, in the order the ear
 *  section shows them. Audible first, then the two that are identical.
 *
 *  `brun`/`brune` is here and is NOT one of the twelve: it is the most dramatic
 *  audible change in the language (the nasal collapses outright) and it is
 *  already authored in sons.03 with the note "N plus a vowel blocks
 *  nasalization", so it is reused rather than written. The brief names it as one
 *  of the five audible pairs. It is shown and never drilled for production. */
export const EAR_PAIRS: { m: string; f: string; audible: boolean; what: string }[] = [
  { m: 'vert', f: 'verte', audible: true, what: 'the t at the end wakes up' },
  { m: 'gris', f: 'grise', audible: true, what: 'the s wakes up as a z' },
  { m: 'blanc', f: 'blanche', audible: true, what: 'the c turns into a ch' },
  { m: 'violet', f: 'violette', audible: true, what: 'the t wakes up, and the spelling doubles it' },
  { m: 'brun', f: 'brune', audible: true, what: 'the nasal collapses into a plain n' },
  { m: 'bleu', f: 'bleue', audible: false, what: 'nothing. The two are the same sound' },
  { m: 'noir', f: 'noire', audible: false, what: 'nothing. The two are the same sound' },
];

/* ─── The authored feminine headwords ──────────────────────────────────────
 *
 * Four, and they are the entire headword gap. Sequence continues
 * fr.sons.couleurs, whose highest published seq is 65. Never renumbered: ids are
 * the SRS key and every attempt ever logged hangs off them.
 *
 * GENDER-SAFE BY CONSTRUCTION, and checked through the real function rather
 * than argued. `endingPopulation()` in gender.logic.ts admits a row with
 * `gender` set, `kind: 'word'` and no space in its bare noun, and
 * a1-03-genre.test.ts re-measures twenty printed figures from the seed on every
 * run. a1.11 added two feminine nouns in -e, moved a1.03's count from 871 to 873
 * and turned the suite red on a lesson nobody had touched.
 *
 * These four carry NO gender field, because they are adjectives rather than
 * nouns, so the population excludes them. Verified in scripts/_couleurs_probe.ts:
 * the four return empty from the real endingPopulation, while `une orange` and
 * `le bleu` (which this lesson therefore does NOT import as headwords) both
 * join it.                                                                  */

export type ColourWord = Item & {
  /** The masculine this row is the feminine of. */
  masculine: Colour | 'brun';
};

export const AUTHORED_WORDS: ColourWord[] = [
  {
    id: 'fr.sons.couleurs.066', kind: 'word', level: 'sons', theme: 'couleurs',
    fr: 'bleue', en: 'blue (feminine)',
    ipa: '/blø/', respell: unbracket(RESPELL.bleue.respell),
    notes: 'The feminine of bleu, and it sounds exactly the same. Ma veste est bleue. The e is written and '
      + 'never heard, which is why learners refuse to believe the spelling.',
    tags: ['couleurs', 'adjectif', 'accord-genre'],
    drills: ['flashcard', 'voiceflash'], version: 1, cardType: 'vocab',
    masculine: 'bleu',
  },
  {
    id: 'fr.sons.couleurs.067', kind: 'word', level: 'sons', theme: 'couleurs',
    fr: 'noire', en: 'black (feminine)',
    ipa: '/nwaʁ/', respell: unbracket(RESPELL.noire.respell),
    notes: 'The feminine of noir, and it sounds exactly the same. Ma veste est noire. Nothing in the sound '
      + 'tells you the e is there.',
    tags: ['couleurs', 'adjectif', 'accord-genre'],
    drills: ['flashcard', 'voiceflash'], version: 1, cardType: 'vocab',
    masculine: 'noir',
  },
  {
    id: 'fr.sons.couleurs.068', kind: 'word', level: 'sons', theme: 'couleurs',
    fr: 'grise', en: 'grey (feminine)',
    ipa: '/ɡʁiz/', respell: unbracket(RESPELL.grise.respell),
    notes: 'The feminine of gris. The silent s at the end of gris wakes up as a z: GREE becomes GREEZ. '
      + 'This one you can hear.',
    tags: ['couleurs', 'adjectif', 'accord-genre'],
    drills: ['flashcard', 'voiceflash'], version: 1, cardType: 'vocab',
    masculine: 'gris',
  },
  {
    id: 'fr.sons.couleurs.069', kind: 'word', level: 'sons', theme: 'couleurs',
    fr: 'violette', en: 'purple (feminine)',
    ipa: '/vjɔ.lɛt/', respell: unbracket(RESPELL.violette.respell),
    notes: 'The feminine of violet. The silent t wakes up and the spelling doubles it: violet becomes '
      + 'violette, not violete.',
    tags: ['couleurs', 'adjectif', 'accord-genre'],
    drills: ['flashcard', 'voiceflash'], version: 1, cardType: 'vocab',
    masculine: 'violet',
  },
];

/* ─── The authored sentences: one paradigm, three colours, four forms ──────
 *
 * Sequence continues fr.a1.couleurs, whose highest published seq is 258 with one
 * gap at 199. NEXT FREE = .259, confirmed by pnpm corpus:probe on 2026-08-06 and
 * again by SQL. The gap at .199 is left alone: filling a hole in somebody else's
 * sequence makes a later renumbering ambiguous.
 *
 * Twelve rows form a 3x4 grid on ONE noun pair, so exactly one thing moves
 * between any two neighbouring cells. The thirteenth pairs with an imported row.
 *
 * `mon sac` and `ma veste` are deliberate: they are the two nouns in
 * fr.a1.objets.124, "Mon sac est noir et ma veste est noire.", which is the only
 * sentence in 47,351 rows carrying one colour in both genders. So the authored
 * paradigm and the single best corpus sentence in the lesson are about the same
 * two objects, and the learner meets them as one continuous idea rather than two
 * unrelated example sets.                                                    */

export type ColourSentence = Omit<Item, 'drills'> & {
  /** Which colour this row is about. */
  colour: Colour;
  /** Which cell of the four-form grid. */
  form: 'm' | 'f' | 'mpl' | 'fpl';
  drills: Item['drills'];
};

const SVD: Item['drills'] = ['sentence', 'flashcard', 'voiceflash', 'review', 'dictation'];

/** Builds one row of the paradigm, so the twelve cannot drift apart in shape.
 *  The four sentences differ ONLY in the noun phrase and the colour ending,
 *  which is the entire teaching, and generating them is how that stays true. */
const cell = (
  seq: number, colour: Colour, form: ColourSentence['form'], fr: string, en: string, ipa: string,
  notes: string,
): ColourSentence => ({
  id: `fr.a1.couleurs.${seq}`, kind: 'sentence', level: 'a1', theme: 'couleurs',
  fr, en, ipa: `/${ipa}/`, notes,
  tags: ['couleurs', 'accord', form === 'm' ? 'accord-genre' : form === 'f' ? 'accord-genre' : 'accord-nombre'],
  drills: SVD, version: 1,
  colour, form,
});

export const COULEURS: ColourSentence[] = [
  // ── vert: the audible family. The feminine is the one you can hear. ──────
  cell(259, 'vert', 'm', 'Mon sac est vert.', 'My bag is green.', 'mɔ̃ sak ɛ vɛʁ',
    'The plain form, and the t at the end is silent.'),
  cell(260, 'vert', 'f', 'Ma veste est verte.', 'My jacket is green.', 'ma vɛst ɛ vɛʁt',
    'The noun is feminine, so the colour adds an e. Here you HEAR it: the sleeping t wakes up.'),
  cell(261, 'vert', 'mpl', 'Mes sacs sont verts.', 'My bags are green.', 'me sak sɔ̃ vɛʁ',
    'The s is written and never said. This is the same sound as the singular.'),
  cell(262, 'vert', 'fpl', 'Mes vestes sont vertes.', 'My jackets are green.', 'me vɛst sɔ̃ vɛʁt',
    'Feminine and plural, so both endings are there. It sounds exactly like the singular verte.'),

  // ── bleu: the silent family. Every cell is the same sound. ───────────────
  cell(263, 'bleu', 'm', 'Mon sac est bleu.', 'My bag is blue.', 'mɔ̃ sak ɛ blø',
    'The plain form.'),
  cell(264, 'bleu', 'f', 'Ma veste est bleue.', 'My jacket is blue.', 'ma vɛst ɛ blø',
    'The e is there in writing and changes nothing in the sound. This is the spelling learners refuse to believe.'),
  cell(265, 'bleu', 'mpl', 'Mes sacs sont bleus.', 'My bags are blue.', 'me sak sɔ̃ blø',
    'Still the same sound. Nothing in this sentence tells your ear it is plural except the words around it.'),
  cell(266, 'bleu', 'fpl', 'Mes vestes sont bleues.', 'My jackets are blue.', 'me vɛst sɔ̃ blø',
    'Two endings written, neither of them said. All four bleu sentences sound identical on the colour.'),

  // ── marron: the row that never moves. ────────────────────────────────────
  cell(267, 'marron', 'm', 'Mon sac est marron.', 'My bag is brown.', 'mɔ̃ sak ɛ ma.ʁɔ̃',
    'The plain form, and the only form there is.'),
  cell(268, 'marron', 'f', 'Ma veste est marron.', 'My jacket is brown.', 'ma vɛst ɛ ma.ʁɔ̃',
    'No e. Marron is a chestnut being used as a colour, and a noun borrowed this way keeps its own shape.'),
  cell(269, 'marron', 'mpl', 'Mes sacs sont marron.', 'My bags are brown.', 'me sak sɔ̃ ma.ʁɔ̃',
    'No s either. Writing marrons here would be the one error a French reader always notices.'),
  cell(270, 'marron', 'fpl', 'Mes vestes sont marron.', 'My jackets are brown.', 'me vɛst sɔ̃ ma.ʁɔ̃',
    'Feminine and plural and still unchanged. All four marron sentences are spelled the same way.'),

  // ── the cheapest proof in the lesson: same noun, same frame, one agrees ──
  cell(271, 'marron', 'fpl', 'Les chaussures sont marron.', 'The shoes are brown.', 'le ʃo.syʁ sɔ̃ ma.ʁɔ̃',
    'Set this beside "Les chaussures sont rouges." Same shoes, same sentence, and only one of the two '
    + 'colours took the s.'),
];

export const COULEURS_IDS: string[] = COULEURS.map((w) => w.id);
export const AUTHORED_WORD_IDS: string[] = AUTHORED_WORDS.map((w) => w.id);

/** The ids of one cell of the grid, in sequence order. */
export const formIds = (f: ColourSentence['form']): string[] =>
  COULEURS.filter((w) => w.form === f).map((w) => w.id);

/** The four-form grid for one colour, in m / f / mpl / fpl order. */
export const gridFor = (c: Colour): ColourSentence[] => {
  const order: ColourSentence['form'][] = ['m', 'f', 'mpl', 'fpl'];
  return order.map((f) => COULEURS.find((w) => w.colour === c && w.form === f)!);
};

/** The three colours the authored paradigm covers, in the order it teaches
 *  them: audible, silent, invariable. */
export const PARADIGM_COLOURS: Colour[] = ['vert', 'bleu', 'marron'];

/** The corpus Item, stripped of the teaching-only fields. */
export function toItem(w: ColourSentence): Item {
  const { colour: _c, form: _f, ...item } = w;
  return item;
}

export function wordToItem(w: ColourWord): Item {
  const { masculine: _m, ...item } = w;
  return item;
}

/* ─── The pairs that carry the invariable rule ─────────────────────────────
 *
 * `des oranges` against `des chaussures orange` is the best teaching object in
 * this lesson and the brief is right that separating the halves is how the rule
 * decays back into "just memorise these two". Both halves are REAL CORPUS ROWS,
 * which the brief did not expect:
 *
 *   the fruit, agreeing      fr.a1.adjectifs-essentiels.331  Cette orange est bien mûre.
 *   the fruit, pluralising   fr.a1.marche.116                Le client demande le prix des oranges.
 *   the colour, refusing     fr.a1.couleurs.239              Elle aime les fleurs orange.
 *   the colour, refusing     fr.a1.couleurs.094              Les rideaux sont orange.
 *
 * `Cette orange est bien mûre` is the one worth the most: the fruit is feminine
 * and the adjective beside it (`mûre`) DOES agree, in the same sentence, so the
 * learner sees that orange is not some word French refuses to touch. It is a
 * noun, and the thing next to it agrees normally.                            */
export const ORANGE_NOUN_IDS = ['fr.a1.adjectifs-essentiels.331', 'fr.a1.marche.116'];
export const ORANGE_COLOUR_IDS = ['fr.a1.couleurs.239', 'fr.a1.couleurs.094'];

/** marron doing the same job, and the rows the brief said did not exist. */
export const MARRON_INVARIABLE_IDS = [
  'fr.a1.couleurs.235', // La table marron vient d'Italie.       FEMININE
  'fr.a1.couleurs.234', // Les chaussures marron coûtent cher.   PLURAL
  'fr.a1.couleurs.087', // Ses yeux sont marron.                 PLURAL
];

/** Compound colours, invariable for exactly the same reason, and both on rows
 *  that put them behind a PLURAL noun so the refusal is visible. */
export const COMPOUND_IDS = ['fr.a1.couleurs.123', 'fr.a1.couleurs.125'];

/** violet in all four forms, entirely from the corpus. The second complete
 *  paradigm in the lesson and not one row of it is authored. */
export const VIOLET_GRID_IDS = [
  'fr.a1.couleurs.010', // Le ballon des enfants est violet.
  'fr.a1.couleurs.009', // Cette fleur est violette.
  'fr.a1.couleurs.065', // Les gants sont violets.
  'fr.a1.couleurs.081', // Les fleurs des champs sont violettes.
];

/** The one sentence in the language carrying a single colour in both genders. */
export const BOTH_GENDERS_ID = 'fr.a1.objets.124';

/** The chestnut row. NOT imported: it is b1, and dragging a b1 sentence into an
 *  a1 lesson's SRS to make a point is a worse trade than making the point in
 *  words. Named here so the report and the corpus header can cite it and so
 *  nobody re-runs the search believing it might be an agreement error. */
export const CHESTNUT_ROW = {
  id: 'fr.b1.les-fetes.016',
  fr: 'Ma grand-mère prépare ses fameux marrons glacés pour les fêtes de fin d\'année.',
  en: 'My grandmother prepares her famous candied chestnuts for the year-end holidays.',
  verdict: 'the chestnuts, so a legitimate noun plural and NOT an agreement error in shipped content',
};

/* ─── Withdrawn on purpose ─────────────────────────────────────────────────
 *
 * `une orange` (fr.a1.cuisine.022), `la rose` (fr.a1.jardinage.091) and
 * `le bleu` (fr.a1.corps.144) are the three rows this lesson most obviously
 * wants, because each is a colour word being used as the noun it came from, and
 * NONE is imported as a headword.
 *
 * All three are gendered single-word nouns, so `endingPopulation()` admits them
 * and a1-03-genre.test.ts re-measures twenty printed figures from the seed on
 * every run. Verified through the REAL function rather than argued: the probe
 * shows `une orange` and `le bleu` both joining the population.
 *
 * The teaching survives without them. The fruit sense is carried by SENTENCE
 * rows (`Cette orange est bien mûre`, `le prix des oranges`), which the
 * population excludes because they are `kind: 'sentence'`, so the lesson shows
 * the noun doing its noun job without importing the noun itself.            */
export const WITHDRAWN_IDS: string[] = [
  'fr.a1.cuisine.022',   // une orange
  'fr.a1.jardinage.091', // la rose
  'fr.a1.corps.144',     // le bleu
];

/* ─── The invariable colours must never be authored with an ending ─────────
 *
 * The cheapest high-value assertion in the lesson, per the brief, and it lives
 * here so the batch, the merge and the test all read one list. Authoring any of
 * these would teach the exact error the lesson exists to prevent.
 *
 * `marrons` is included even though it IS a real French word (the chestnuts),
 * because nothing this lesson authors is ever about chestnuts. The b1 row that
 * legitimately carries it is not imported. */
export const FORBIDDEN_FORMS = [
  'marrons', 'marronne', 'marronnes',
  'oranges',   // legal for the fruit, never for the colour: guarded contextually
  'orangée', 'orangé', 'orangés', 'orangées',
];

/** Compound colours must never carry an agreement ending either. */
export const FORBIDDEN_COMPOUNDS = [
  'verts pomme', 'vert pommes', 'verts pommes',
  'verts foncé', 'vert foncés', 'verts foncés',
  'bleus clair', 'bleu clairs', 'bleus clairs',
  'bleue clair', 'verte foncé',
];

import { IMPORTED as IMPORTED_ROWS, REUSED as REUSED_ROWS } from './couleurs-imported.ts';

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
  ...COULEURS.map((w) => ({ id: w.id, fr: w.fr, en: w.en })),
  ...AUTHORED_WORDS.map((w) => ({ id: w.id, fr: w.fr, en: w.en })),
  ...IMPORTED.map((w) => ({ id: w.id, fr: w.fr, en: w.en })),
  ...REUSED.map((w) => ({ id: w.id, fr: w.fr, en: w.en })),
];

const BY_ID = new Map(ALL_ROWS.map((r) => [r.id, r] as const));

export function frOf(id: string): string {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`a1.13: no French authored or recorded for "${id}"`);
  return r.fr;
}

export function enOf(id: string): string {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`a1.13: no gloss authored or recorded for "${id}"`);
  return r.en;
}

/** The colours a row is about, for the coverage assertion. Reads the recorded
 *  text rather than a hand-kept table, so a row that stops mentioning its colour
 *  stops counting for it.
 *
 *  Matches any form of the colour, because a sentence carrying `vertes` is
 *  evidence for `vert`. Boundary-checked against an accent-aware class rather
 *  than a regex built from the search term: `\b` is ASCII-only in JavaScript and
 *  would fail on every accented neighbour, which is invariant §0's first trap. */
export function coloursIn2(fr: string): Colour[] {
  return THE_TWELVE.filter((c) => {
    for (let from = 0; ; ) {
      const i = fr.toLowerCase().indexOf(c, from);
      if (i < 0) return false;
      const before = i === 0 ? ' ' : fr[i - 1];
      const after = fr[i + c.length] ?? ' ';
      // an agreement ending is part of the same word, so e/s/es after the stem
      // still counts as this colour; any other letter does not.
      const tail = /^(e|s|es|te|tes|ts|che|ches)?$/i.test(
        (fr.slice(i + c.length).match(/^[a-zà-ÿ]*/i) ?? [''])[0]
      );
      if (!/[a-zà-ÿ]/i.test(before) && (!/[a-zà-ÿ]/i.test(after) || tail)) return true;
      from = i + 1;
    }
  });
}
