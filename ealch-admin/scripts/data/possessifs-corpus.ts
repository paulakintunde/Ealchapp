// The a1.17 corpus: what this lesson authors, what it imports, and the three
// shipped respellings it repairs.
//
// THIS FILE IS THE SINGLE SOURCE OF TRUTH for the 32 authored rows, the imported
// rows, the reused rows, and every respelling a1.17 puts on a screen. The lesson
// body (possessifs-lesson.ts) reads `fr`, `ipa`, `respell` and `en` FROM HERE and
// never restates them, for the same reason couleurs-corpus.ts and mois-corpus.ts
// do: before that convention one word's transcription was typed by hand in five
// sections and the five copies were free to drift.
//
// ══════════════════════════════════════════════════════════════════════════
//  A1-17-POSSESSIVES-PROMPT.md WAS WRITTEN WITHOUT A PRE-FLIGHT PROBE AND
//  SAYS SO. THE PROBE RAN. SEVEN OF ITS CLAIMS ARE WRONG, AND THE LARGEST
//  ONE WOULD HAVE COST TWELVE RE-AUTHORED ROWS.
// ══════════════════════════════════════════════════════════════════════════
//
// Measured 2026-08-06 with `pnpm corpus:probe --unit a1.17 --theme famille` and
// `pnpm tsx scripts/_possessifs_probe.ts`, both against Postgres.
//
//   1. "The sentence evidence is abundant and THE HEADWORD EVIDENCE IS NEARLY
//      NIL, which is exactly right for a function word... possessive as a
//      headword: 3 rows."
//
//      FALSE, and it is the claim that mattered most. TWELVE of the fifteen
//      forms are already published as headwords, in one consecutive block that
//      somebody authored as a paradigm and then stopped three cells short:
//
//          fr.sons.mots-essentiels.093  mon     .099  son     .103  votre
//          fr.sons.mots-essentiels.094  ma      .100  sa      .104  leur
//          fr.sons.mots-essentiels.095  mes     .101  ses
//          fr.sons.mots-essentiels.096  ton     .102  notre
//          fr.sons.mots-essentiels.097  ta
//          fr.sons.mots-essentiels.098  tes
//
//      All twelve carry `flashcard,voiceflash` and are `published`. The block
//      CLOSES at .105, which is `celui`, so it cannot be extended in place.
//      THE REAL HEADWORD GAP IS THREE WORDS: nos, vos, leurs. This lesson
//      imports the twelve and authors the three, rather than authoring fifteen.
//
//      The brief's "3 rows" figure counted `mon papa`, `ma baraque` and
//      `mon ami`, which are possessive PHRASES rather than the possessives
//      themselves, and missed the block entirely.
//
//   2. "possessive + noun, all themes: 710 occurrences, seed-only, a FLOOR."
//
//      The floor was right and low by an order of magnitude. Counted over all
//      27,198 published sentences on the possessive-plus-noun SHAPE (never the
//      bare word, because of `son`), the true figure is 7,600 occurrences across
//      2,375 distinct pairs. By form: mon 1498, son 1376, ses 820, ma 779, sa
//      600, mes 510, notre 389, nos 323, ton 307, leur 302, votre 234, leurs
//      209, ta 116, vos 71, tes 66.
//
//      Nothing in this lesson needed authoring for want of evidence. What it
//      authors, it authors for MINIMALITY. See the note below.
//
//   3. "`ton erreur`" listed among the corpus's vowel-rule evidence.
//
//      ABSENT. pg=0, seed=0. So is `leur enfant` (pg=0) and so is `mon frere`
//      without the accent. Of the eight feminine vowel-initial nouns the brief
//      offers, `ton erreur` is the one it names in its own display block, and it
//      does not exist. `son entreprise` (pg=3), `mon adresse` (pg=26) and
//      `mon école` (pg=2) do.
//
//   4. "`leur` against `leurs`... Both sides are richly attested."
//
//      TRUE of the corpus and FALSE of A1, which is the level that can be used
//      here. At level a1 there are 27 `leur` sentences and 19 `leurs`, and not
//      one pair of them shares a noun. Every `leurs enfants` row in the database
//      is a2, b1 or b2. The one-and-several contrast on a SINGLE noun is
//      authored here for that reason, not for want of evidence in general.
//
//   5. "`mon ami` is the false-positive shape [for `hasPlainNasalFor`], because
//      the `n` there is a genuine sounded liaison consonant and not a nasal at
//      all. Give the verified passing form for both."
//
//      THERE IS NO FALSE POSITIVE. Measured against the real function:
//
//          mon        MOHⁿ            ok          MOHN   FLAGGED    MON  FLAGGED
//          mon ami    mohⁿ-na-MEE     ok          mohn-na-MEE   FLAGGED
//          mon amie   mohⁿ-na-MEE     ok          MOHN-na-MEE   FLAGGED
//
//      The checker gets `mon ami` exactly right, because the superscript sits on
//      the nasal and the liaison n is respelled as the onset of the next
//      syllable, where no vowel precedes it. Both flagged forms are flagged
//      CORRECTLY. The verified passing forms are given above and are what this
//      file ships; the brief's warning would have had the next author write a
//      workaround for a bug that is not there.
//
//      The blind spot that DOES reach this lesson is the other one, §3's first:
//      `mon oncle` respelled `mohⁿ-NOHNKL` passes the checker cleanly while
//      being wrong, because the nasal is word-internal. `oncle` is therefore
//      asserted BY NAME in the batch, the merge and the test. It is the same
//      shape that let a1.09's sep-TAHNBR through and a1.13's oh-RAHNZH.
//
//   6. "famille ... ~332 rows, NEXT FREE = fr.a1.famille.235."
//
//      331 published, and .235 was correct AT 22:30 UTC AND WAS NOT CORRECT SIX
//      HOURS LATER. See the next item, which is the important one.
//
//   7. "No `famille-*.ts`, `adjectifs-*.ts` or `placement-*.ts` exists."
//
//      False when this build started and much more false by the time it
//      finished.
//
//      `adjectifs-corpus.ts`, `adjectifs-imported.ts` and `adjectifs-terms.ts`
//      already existed: a1.14 was mid-build. It does NOT touch this id range,
//      because it authors into `fr.sons.adjectifs-essentiels` and has rebound
//      its unit off `famille`, which is what a1.13's handover recommended.
//
// ══════════════════════════════════════════════════════════════════════════
//  a1.15 LANDED WHILE THIS LESSON WAS BEING WRITTEN, AND TOOK THE ID RANGE
//  THIS FILE HAD ALREADY BEEN AUTHORED INTO.
// ══════════════════════════════════════════════════════════════════════════
//
// The brief says plainly that "a1.15 may land before, during or after you" and
// asks for an agreed id range. It landed DURING, at 23:36 UTC on 2026-08-06,
// between this build's pre-flight probe and its first batch dry run. It took
// `fr.a1.famille.235` to `.252`, which is exactly where these 32 rows had been
// written, and the collision was found by the dry run reporting `famille` at 349
// published rows when the probe had measured 331.
//
// Worth recording precisely, because the next author will hit it too: THE
// SIMPLE "NEXT FREE" GUARD DOES NOT CATCH THIS. A check that compares the
// database's highest id against the highest id in the batch passes cleanly when
// somebody lands a range that sits ENTIRELY INSIDE yours, because their maximum
// is below your maximum. author-possessifs-batch.ts now checks for any foreign
// row anywhere in this batch's own range rather than only above it.
//
// EVERY ID IN THIS FILE WAS SHIFTED BY 18: .235-.266 became .253-.284. Nothing
// else about the content changed, because nothing else needed to: a1.15 authored
// `de` possession phrases and three frozen possessives, and this lesson authors
// a paradigm. There is no `fr` collision between the two sets in either
// direction, checked over the post-merge item set the way flashhub-coverage
// computes it.
//
// WHAT a1.15 ACTUALLY TOOK, read from its own handover at the foot of
// famille-lesson.ts rather than from its brief:
//
//     mon    fr.a1.famille.248   « mon père »     taught in its s17-mine
//     ma     fr.a1.famille.249   « ma mère »      taught in its s17-mine
//     mes    fr.a1.famille.250   « mes parents »  taught in its s17-mine
//
// It gave the learner ONE selection rule for those three, stated in terms of the
// ARTICLE rather than of gender: mon with the words that take le, ma with the
// words that take la, mes with anything plural. No paradigm and no grid. It also
// states in as many words that the full set arrives next lesson and that there
// is "one wrinkle in the ma column that nobody can guess", which is the vowel
// rule being handed over rather than half-taught.
//
// HOW THIS LESSON RECONCILED, rather than duplicating:
//
//   - mon, ma and mes are NOT introduced as new. Act 1 names a1.15 and says the
//     learner already has three of the fifteen, and the je row of the paradigm
//     is presented as the thing they were given being extended rather than
//     taught. `grammarAssumed` credits a1.15 by name.
//   - The article-based rule a1.15 gave is kept and CONNECTED to gender rather
//     than replaced. "mon with the words that take le" and "mon in front of the
//     un kind" are the same rule, and saying so costs one card and saves a
//     learner concluding the two lessons disagree.
//   - `de` for possession is now SHIPPED rather than reserved, so this lesson
//     may reference it. It does, twice, as the answer to "what if it matters
//     whose", which is exactly the escape hatch a1.15's handover offers.
//     FAMILY_TEACHING no longer guards against naming it and guards against
//     TEACHING it.
//   - The other twelve forms, the vowel rule, the leur/leurs split and the
//     article slot were all untouched by a1.15 and are all built here.
//
// ── a1.05 did not introduce mon, ma and mes, and a1.13 says it did ─────────
//
// The brief asks this to be checked and it is worth answering precisely, because
// a shipped lesson makes the claim. `a1.13.l1`'s `grammarAssumed` carries the
// line "mon, ma and mes, introduced in a1.05", and `merge-couleurs-into-seed.ts`
// repeats it in its NEIGHBOURS map. a1.05's own `grammarIntroduced` lists the
// nine subject pronouns, `on`, `ils`/`elles`, `vous`, impersonal `il` and the
// elision of `je`. No possessive, in any form.
//
// Every shipped lesson USES possessives, because ordinary French is full of
// them, and none TEACHES the choice. So the brief's operating assumption is
// correct and its stated reason is not: the learner arrives having read `mon`
// and `ma` on a hundred cards without ever being told what decides between them.
// This lesson is written for that learner rather than for a blank one, and act 1
// says so in as many words.
//
// a1.13's line is not corrected here. Editing another lesson's grammarAssumed
// would rewrite a shipped body to make a comment true, and a1.13's own build
// owns that field. It is in the report.
//
// ── Why 32 rows are authored when the corpus holds 7,600 ───────────────────
//
// The corpus proves every rule this lesson teaches and proves almost none of
// them MINIMALLY, which is the same wall a1.09 and a1.13 hit and answered the
// same way. Its possessive sentences differ from each other in three or four
// places at once:
//
//     Ma sœur a un chien très fidèle.  /  Il présente son nouvel ami à sa sœur.
//
// Both are correct, both carry a possessive, and between them a learner cannot
// see what carried the choice: the owner moved, the thing moved, the verb moved
// and the frame moved.
//
// So what is authored is a PARADIGM: one frame, three nouns, six owners.
// Read ACROSS a row and only the owner changes. Read DOWN a column and only the
// thing changes. Rows four to six never change between the first two columns,
// and that is the lesson's second act.
//
//     Voici mon frère.    Voici ma sœur.      Voici mes parents.
//     Voici ton frère.    Voici ta sœur.      Voici tes parents.
//     Voici son frère.    Voici sa sœur.      Voici ses parents.
//     Voici notre frère.  Voici notre sœur.   Voici nos parents.
//     Voici votre frère.  Voici votre sœur.   Voici vos parents.
//     Voici leur frère.   Voici leur sœur.    Voici leurs parents.
//
// Eighteen cells, fifteen distinct forms, one frame. `nos` and `vos` are cells
// in it rather than an afterthought, which is what the test asserts by name.
//
// The three nouns were chosen for gender the learner can CHECK rather than for
// frequency: `un frère`, `une sœur` and `les parents` are all published famille
// headwords carrying an explicit gender field, and a1.03 taught the learner to
// read exactly that.
//
// ── The three respelling repairs ───────────────────────────────────────────
//
// House convention: hyphenated syllables, stressed syllable capitalised, nasal
// vowels closed with a superscript n and NEVER a plain n or m. Brackets are
// added by `D()` below, never stored, because the density validator checks the
// rendered form.
//
// Four rows this lesson puts on a card break it. Three are imported headwords
// and the fourth is a grid noun in a1.17's own theme, found by the probe rather
// than by the brief:
//
//     fr.sons.mots-essentiels.093  mon           MOHN          ->  MOHⁿ
//     fr.sons.mots-essentiels.096  ton           TOHN          ->  TOHⁿ
//     fr.sons.mots-essentiels.099  son           SOHN          ->  SOHⁿ
//     fr.a1.famille.014            les parents   LAY pah-RAHN  ->  LAY pah-RAHⁿ
//
// All four are caught by the shared checker, unlike a1.13's `orange`, so there
// is no invisible repair in this set. Two further broken rows carry the same
// word and are NOT repaired: `fr.sons.alphabet.116` "son" (SOHN) and
// `fr.a1.cinema.043` "le son" (luh SOHN). Both are the NOISE sense of `son` in
// another lesson's theme, neither appears on any screen here, and repairing a
// row this lesson does not display is reaching into somebody else's card.
// Reported rather than done. Invariant §9.
//
// ── The tie character, and why mon ami is authored rather than imported ────
//
// `fr.sons.liaisons.169` is already published as "mon ami" and respelled
// `mohⁿ-n‿a-MEE`. It is a1.17's obvious import and it is deliberately NOT
// imported.
//
// U+203F renders as a low underscore on a Pixel 6 (invariant §2), and 328 seed
// rows already carry it. That alone would be somebody else's debt. What makes it
// this lesson's problem is that `mon ami` and `mon amie` are HOMOPHONES and this
// lesson's whole claim about them is that they are identical. Importing one with
// a tie and authoring the other without would put two respellings that differ by
// a visible glyph beside a card saying they are the same word. So both halves of
// the pair are authored here, byte-identical, and liaisons.169 keeps its tie and
// its lesson. The batch and the merge both refuse a U+203F in authored copy.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

/* ─── What the screens display ─────────────────────────────────────────────
 *
 * Every French unit a1.17 puts on a card, with the respelling this lesson stands
 * behind. Keyed by the French form, because many of these are display strings
 * rather than corpus rows: the grid cells exist here as text long before any of
 * them is a flashcard.                                                       */

export type Display = { fr: string; ipa: string; respell: string; en: string };

const D = (fr: string, ipa: string, res: string, en: string): Display =>
  ({ fr, ipa: `/${ipa}/`, respell: `[${res}]`, en });

export const RESPELL: Record<string, Display> = {
  // The fifteen forms, in grid order. Twelve are imported headwords; three
  // (nos, vos, leurs) are the authored gap. Six carry a nasal vowel and close
  // it with the superscript: mon, ton, son and the three nouns built on them.
  mon: D('mon', 'mɔ̃', 'MOHⁿ', 'my (before a masculine thing, or any vowel)'),
  ma: D('ma', 'ma', 'MA', 'my (before a feminine thing)'),
  mes: D('mes', 'me', 'MAY', 'my (before more than one thing)'),
  ton: D('ton', 'tɔ̃', 'TOHⁿ', 'your (before a masculine thing, or any vowel)'),
  ta: D('ta', 'ta', 'TA', 'your (before a feminine thing)'),
  tes: D('tes', 'te', 'TAY', 'your (before more than one thing)'),
  son: D('son', 'sɔ̃', 'SOHⁿ', 'his or her (before a masculine thing, or any vowel)'),
  sa: D('sa', 'sa', 'SA', 'his or her (before a feminine thing)'),
  ses: D('ses', 'se', 'SAY', 'his or her (before more than one thing)'),
  // noh-TRUH and voh-TRUH are the values the imported rows already carry. They
  // are kept rather than restressed: a variant is not a violation, and changing
  // a transcription this lesson agrees with would be a preference edit.
  notre: D('notre', 'nɔtʁ', 'noh-TRUH', 'our (before one thing, either kind)'),
  nos: D('nos', 'no', 'NOH', 'our (before more than one thing)'),
  votre: D('votre', 'vɔtʁ', 'voh-TRUH', 'your (before one thing, either kind)'),
  vos: D('vos', 'vo', 'VOH', 'your (before more than one thing)'),
  leur: D('leur', 'lœʁ', 'LUHR', 'their (before one thing, either kind)'),
  leurs: D('leurs', 'lœʁ', 'LUHR', 'their (before more than one thing)'),

  // The three nouns the paradigm runs on. Each is a published famille headword
  // carrying an explicit gender, which is what makes the grid checkable.
  //
  // The respellings are the values the SHIPPED ROWS already carry, capitals and
  // all, rather than the values this lesson would have chosen. fr.a1.famille.001
  // ships `LUH PEHR`, which capitalises both syllables where the house
  // convention capitalises only the stressed one. That is a variant rather than
  // a violation (invariant §9), it is consistent across the whole famille deck,
  // and a card here reading `luh FREHR` beside a flashcard hub reading
  // `LUH FREHR` would be a difference the learner sees and cannot explain.
  // `les parents` is the exception and is REPAIRED: see RESPELL_REPAIRS.
  'le frère': D('le frère', 'lə fʁɛʁ', 'LUH FREHR', 'the brother'),
  'la sœur': D('la sœur', 'la sœʁ', 'LAH SUHR', 'the sister'),
  'les parents': D('les parents', 'le pa.ʁɑ̃', 'LAY pah-RAHⁿ', 'the parents'),

  // The vowel rule, and the homophone pair at the heart of it. The two are
  // deliberately BYTE-IDENTICAL in both ipa and respell: that is the claim.
  'mon ami': D('mon ami', 'mɔ̃.na.mi', 'mohⁿ-na-MEE', 'my friend (a man)'),
  'mon amie': D('mon amie', 'mɔ̃.na.mi', 'mohⁿ-na-MEE', 'my friend (a woman)'),
  'ma sœur': D('ma sœur', 'ma sœʁ', 'ma SUHR', 'my sister'),
  'mon école': D('mon école', 'mɔ̃.ne.kɔl', 'mohⁿ-nay-KOL', 'my school'),
  'mon adresse': D('mon adresse', 'mɔ̃.na.dʁɛs', 'mohⁿ-na-DRESS', 'my address'),

  // The ear pair, which is the one genuine listening question in the lesson.
  // Identical except for an unstressed vowel, and the respellings show that.
  'mes amis': D('mes amis', 'me.za.mi', 'may-za-MEE', 'my friends'),
  'ses amis': D('ses amis', 'se.za.mi', 'say-za-MEE', 'his friends, or hers'),

  // leur against leurs. Identical sound before a consonant, which is why the
  // contrast has to be read rather than heard. Before a VOWEL the s of leurs
  // wakes up as a z, and that is the only place the pair is audible at all.
  // FEE rather than FEEY, matching fr.a1.famille.016's shipped `LAH FEE`.
  // Identical to each other, because they are identical out loud.
  'leur fille': D('leur fille', 'lœʁ fij', 'luhr FEE', 'their daughter'),
  'leurs filles': D('leurs filles', 'lœʁ fij', 'luhr FEE', 'their daughters'),
  'leur enfant': D('leur enfant', 'lœʁ ɑ̃.fɑ̃', 'luhr ahⁿ-FAHⁿ', 'their child'),
  'leurs enfants': D('leurs enfants', 'lœʁ.zɑ̃.fɑ̃', 'luhr-zahⁿ-FAHⁿ', 'their children'),

  // The article slot.
  'mon livre': D('mon livre', 'mɔ̃ livʁ', 'mohⁿ LEEVR', 'my book'),

  // §3's FIRST blind spot, reaching this lesson. `oncle` is a word-internal
  // nasal, so `mohⁿ-NOHNKL` passes hasPlainNasalFor cleanly while teaching a
  // sound that is not in the word. Asserted by name in the batch, the merge and
  // the test, because the shared checker cannot see it.
  'mon oncle': D('mon oncle', 'mɔ̃.nɔ̃kl', 'mohⁿ-NOHⁿKL', 'my uncle'),
};

/** The bracketed respelling of a French form this lesson displays. Throws rather
 *  than returning undefined: a card silently missing its transcription is the
 *  failure this file exists to stop, and it looks identical to a card that never
 *  wanted one. */
export function sub(fr: string): string {
  const d = RESPELL[fr];
  if (!d) throw new Error(`a1.17: no respelling authored for "${fr}". Add it to RESPELL.`);
  return d.respell;
}

/** The IPA of a French form this lesson displays, in slashes. */
export function ipaOf(fr: string): string {
  const d = RESPELL[fr];
  if (!d) throw new Error(`a1.17: no IPA authored for "${fr}". Add it to RESPELL.`);
  return d.ipa;
}

/** The respelling of one grid cell's possessive-plus-noun phrase, COMPOSED from
 *  the two parts rather than typed eighteen times.
 *
 *  Composed rather than listed for the same reason the paradigm sentences are
 *  generated: eighteen hand-typed transcriptions of the same three nouns are
 *  eighteen chances for one of them to drift, and the drift would be invisible
 *  because each one looks right on its own card.
 *
 *  Two details that are not cosmetic. The noun's stored respelling CARRIES ITS
 *  ARTICLE (`LUH FREHR`, `LAH SUHR`, `LAY pah-RAHⁿ`), and the possessive is
 *  standing exactly where that article stood, so the first token is dropped
 *  rather than kept: `[mohⁿ FREHR]`, never `[mohⁿ luh FREHR]`. And the
 *  possessive is LOWERCASED, because the house convention capitalises the
 *  stressed syllable and the stress in every one of these eighteen phrases falls
 *  on the noun. `MOHⁿ` is the citation form of a word said alone; `mohⁿ FREHR`
 *  is what the phrase actually sounds like. */
export function cellSub(form: string, slot: Slot): string {
  const noun = slot === 'm' ? 'le frère' : slot === 'f' ? 'la sœur' : 'les parents';
  const bare = (s: string) => s.replace(/^\[|\]$/g, '');
  const nounPart = bare(sub(noun)).split(' ').slice(1).join(' ');
  if (!nounPart) throw new Error(`a1.17: the respelling of "${noun}" carries no article to drop`);
  return `[${bare(sub(form)).toLowerCase()} ${nounPart}]`;
}

const unbracket = (s: string) => s.replace(/^\[|\]$/g, '');

/* ─── The fifteen forms, and the six owners ────────────────────────────────
 *
 * Named here so the lesson, the batch, the merge and the test all count the same
 * set rather than four hand lists free to drift. FIFTEEN distinct words in
 * eighteen cells, because the bottom three owners do not distinguish gender.  */

export type Slot = 'm' | 'f' | 'pl';

export type Owner = {
  /** The subject pronoun this row belongs to, as the learner met it in a1.05. */
  who: string;
  /** What the English says, which is where the inversion lives. */
  en: string;
  /** The three forms, index-aligned with SLOTS. */
  forms: [string, string, string];
  /** Does this owner make the learner check the noun's gender? */
  needsGender: boolean;
};

export const SLOTS: Slot[] = ['m', 'f', 'pl'];

export const OWNERS: Owner[] = [
  { who: 'je', en: 'my', forms: ['mon', 'ma', 'mes'], needsGender: true },
  { who: 'tu', en: 'your', forms: ['ton', 'ta', 'tes'], needsGender: true },
  { who: 'il / elle', en: 'his or her', forms: ['son', 'sa', 'ses'], needsGender: true },
  { who: 'nous', en: 'our', forms: ['notre', 'notre', 'nos'], needsGender: false },
  { who: 'vous', en: 'your', forms: ['votre', 'votre', 'vos'], needsGender: false },
  { who: 'ils / elles', en: 'their', forms: ['leur', 'leur', 'leurs'], needsGender: false },
];

/** The fifteen distinct words, in reading order, deduplicated from OWNERS
 *  rather than listed. `nos` and `vos` are the two a grid looks complete
 *  without, and the test names all fifteen individually for that reason. */
export const THE_FIFTEEN: string[] = [...new Set(OWNERS.flatMap((o) => o.forms))];

/** The three owners that make the learner check the noun's gender, and the three
 *  that do not. The split is the phone layout AND the teaching order: nine cells
 *  then six, gender-first then the relief. */
export const GENDERED_OWNERS = OWNERS.filter((o) => o.needsGender);
export const UNGENDERED_OWNERS = OWNERS.filter((o) => !o.needsGender);

/* ─── The three nouns the paradigm runs on ─────────────────────────────────
 *
 * Chosen for gender the learner can CHECK rather than for frequency. All three
 * are published famille headwords carrying an explicit gender field, so a
 * learner who wants to verify the grid can, using exactly what a1.03 taught.
 *
 * NONE of them is authored here. Authoring a gendered single-word noun would
 * join a1.03's measured ending population and move twenty printed figures, which
 * is how a1.11 turned a lesson nobody had touched red. Verified through the real
 * endingPopulation in scripts/_possessifs_probe.ts.                           */

export type GridNoun = {
  /** The bare noun as the grid shows it. */
  noun: string;
  /** The published headword id, which carries the gender the learner checks. */
  headwordId: string;
  /** Which column of the grid this noun selects. */
  slot: Slot;
  en: string;
  /** How the learner CHECKS it, in the terms a1.03 gave them. */
  check: string;
};

export const GRID_NOUNS: GridNoun[] = [
  {
    noun: 'frère', headwordId: 'fr.a1.famille.003', slot: 'm', en: 'brother',
    check: 'le frère, so the un kind',
  },
  {
    noun: 'sœur', headwordId: 'fr.a1.famille.004', slot: 'f', en: 'sister',
    check: 'la sœur, so the une kind',
  },
  {
    noun: 'parents', headwordId: 'fr.a1.famille.014', slot: 'pl', en: 'parents',
    check: 'more than one, so neither kind is asked about',
  },
];

/* ─── The authored headwords: the three cells the block stops short of ─────
 *
 * `nos`, `vos` and `leurs` are the entire headword gap after the twelve at
 * fr.sons.mots-essentiels.093-104 are imported.
 *
 * `nos` does exist once, at fr.sons.voyelles.466, with NO respelling at all and
 * no English. It is not imported: a flashcard with an empty transcription in a
 * lesson whose whole subject is which of two short words to say is worse than
 * a second row in a different theme. flashhub-coverage.test.ts keys on `fr` PER
 * THEME, so a `nos` in famille and a `nos` in voyelles are two cards in two
 * decks rather than one card served twice. Verified against the post-merge item
 * set in merge-possessifs-into-seed.ts.
 *
 * GENDER-SAFE BY CONSTRUCTION. None carries a `gender` field, because a
 * possessive is not a noun, so endingPopulation excludes all three. Verified
 * through the real function rather than argued.                              */

export type PossessiveWord = Item & {
  /** Which owner row this word belongs to. */
  who: string;
};

const AUTHORED_WORD: PossessiveWord[] = [
  {
    id: 'fr.a1.famille.253', kind: 'word', level: 'a1', theme: 'famille',
    fr: 'nos', en: 'our (before more than one thing)',
    ipa: RESPELL.nos.ipa, respell: unbracket(RESPELL.nos.respell),
    notes: 'The plural of notre, and it is the same word whatever the things are. Nos parents, nos '
      + 'filles. Nothing about who is doing the owning changes it and nothing about the kind of thing '
      + 'changes it either. Only how many.',
    tags: ['famille', 'possessif', 'pluriel'],
    drills: ['flashcard', 'voiceflash'], version: 1, cardType: 'vocab',
    who: 'nous',
  },
  {
    id: 'fr.a1.famille.254', kind: 'word', level: 'a1', theme: 'famille',
    fr: 'vos', en: 'your (before more than one thing)',
    ipa: RESPELL.vos.ipa, respell: unbracket(RESPELL.vos.respell),
    notes: 'The plural of votre. Vos parents, vos livres. This is the one form of the fifteen that was '
      + 'absent from the corpus in every article form before this lesson, and a grid looks complete '
      + 'without it.',
    tags: ['famille', 'possessif', 'pluriel'],
    drills: ['flashcard', 'voiceflash'], version: 1, cardType: 'vocab',
    who: 'vous',
  },
  {
    id: 'fr.a1.famille.255', kind: 'word', level: 'a1', theme: 'famille',
    fr: 'leurs', en: 'their (before more than one thing)',
    ipa: RESPELL.leurs.ipa, respell: unbracket(RESPELL.leurs.respell),
    notes: 'The plural of leur, and the s counts the THINGS rather than the owners. The owners were '
      + 'already several before the s arrived. Leur fille is one daughter belonging to several people; '
      + 'leurs filles is more than one daughter belonging to the same several people.',
    tags: ['famille', 'possessif', 'pluriel'],
    drills: ['flashcard', 'voiceflash'], version: 1, cardType: 'vocab',
    who: 'ils / elles',
  },
];

/* ─── The homophone pair, authored as a pair ───────────────────────────────
 *
 * `mon ami` and `mon amie` differ on the page and not at all in the air. Both
 * are authored here with byte-identical `ipa` and `respell`, which is the whole
 * claim, and the test asserts that identity rather than the words.
 *
 * `amie` is verifiably FEMININE, which is what makes the vowel rule teachable on
 * it: seven published headwords carry it with gender='f' (fr.a1.amis.002,
 * fr.a1.dictee.049, fr.sons.elision.011 and four more), and `une amie` appears
 * in four published sentences, so a learner can check it the way a1.03 taught
 * without being told. This is the difference the brief names between a noun the
 * rule can be TAUGHT on and one where it merely applies.
 *
 * Both are `phrase`, not `word`, so neither joins a1.03's population: the real
 * endingPopulation admits only single-word rows with a gender field.          */
const AUTHORED_PHRASE: PossessiveWord[] = [
  {
    id: 'fr.a1.famille.256', kind: 'phrase', level: 'a1', theme: 'famille',
    fr: 'mon ami', en: 'my friend (a man)',
    ipa: RESPELL['mon ami'].ipa, respell: unbracket(RESPELL['mon ami'].respell),
    notes: 'A man friend. The n of mon arrives on the front of ami and is fully pronounced, which is '
      + 'why this sounds like moh-na-mee rather than mon, ami.',
    tags: ['famille', 'possessif', 'liaison'],
    drills: ['flashcard', 'voiceflash'], version: 1, cardType: 'vocab',
    who: 'je',
  },
  {
    id: 'fr.a1.famille.257', kind: 'phrase', level: 'a1', theme: 'famille',
    fr: 'mon amie', en: 'my friend (a woman)',
    ipa: RESPELL['mon amie'].ipa, respell: unbracket(RESPELL['mon amie'].respell),
    notes: 'A woman friend, and the word for her is the une kind: une amie. It still takes mon rather '
      + 'than ma, because ma amie would put two vowel sounds against each other. Said out loud this is '
      + 'the same as mon ami, sound for sound, and only the page can tell you which one was meant.',
    tags: ['famille', 'possessif', 'liaison', 'voyelle'],
    drills: ['flashcard', 'voiceflash'], version: 1, cardType: 'vocab',
    who: 'je',
  },
];

export const AUTHORED_WORDS: PossessiveWord[] = [...AUTHORED_WORD, ...AUTHORED_PHRASE];

/* ─── The paradigm: one frame, three nouns, six owners ─────────────────────
 *
 * Eighteen sentences, generated rather than typed, so no two cells can drift
 * apart in shape and the grid the learner reads is the grid the corpus holds.
 *
 * Sequence continues fr.a1.famille, whose highest published seq is 234 with no
 * gaps. NEXT FREE = .235, confirmed by pnpm corpus:probe on 2026-08-06. The five
 * headwords take .235-.239 and the paradigm takes .240-.257.
 *
 * `Voici` is the frame because it is the shortest complete sentence in French
 * that can carry a possessive with nothing else moving. No verb to conjugate, no
 * article to choose, no adjective to agree. Between any two neighbouring cells
 * exactly one thing changes, which is the property the corpus could not supply.
 *
 * Every row is `kind: 'sentence'`, so none of them reaches a1.03's population
 * whatever noun it carries.                                                   */

export type PossessiveSentence = Omit<Item, 'drills'> & {
  who: string;
  slot: Slot;
  /** The possessive this cell is about, which is what the drills sort on. */
  form: string;
  drills: Item['drills'];
};

const SFVRD: Item['drills'] = ['sentence', 'flashcard', 'voiceflash', 'review', 'dictation'];

const cell = (
  seq: number, who: string, slot: Slot, form: string, fr: string, en: string, ipa: string, notes: string,
): PossessiveSentence => ({
  id: `fr.a1.famille.${seq}`, kind: 'sentence', level: 'a1', theme: 'famille',
  fr, en, ipa: `/${ipa}/`, notes,
  tags: ['famille', 'possessif', slot === 'pl' ? 'possessif-pluriel' : 'possessif-genre'],
  drills: SFVRD, version: 1,
  who, slot, form,
});

export const PARADIGM: PossessiveSentence[] = [
  // ── je: the row the learner will use most, and the one they get wrong ────
  cell(258, 'je', 'm', 'mon', 'Voici mon frère.', 'This is my brother.', 'vwa.si mɔ̃ fʁɛʁ',
    'A brother is the un kind, so the word for my is mon.'),
  cell(259, 'je', 'f', 'ma', 'Voici ma sœur.', 'This is my sister.', 'vwa.si ma sœʁ',
    'A sister is the une kind, so the same my becomes ma. Nothing about the speaker changed between '
    + 'this sentence and the one before it.'),
  cell(260, 'je', 'pl', 'mes', 'Voici mes parents.', 'These are my parents.', 'vwa.si me pa.ʁɑ̃',
    'More than one thing, so the question about the kind is never asked and mes covers both.'),

  // ── tu: the same three decisions, made by a different speaker ────────────
  cell(261, 'tu', 'm', 'ton', 'Voici ton frère.', 'This is your brother.', 'vwa.si tɔ̃ fʁɛʁ',
    'The owner changed and the ending on the possessive did not. Compare the row above.'),
  cell(262, 'tu', 'f', 'ta', 'Voici ta sœur.', 'This is your sister.', 'vwa.si ta sœʁ',
    'Same speaker as the sentence before, and the word changed because the thing did.'),
  cell(263, 'tu', 'pl', 'tes', 'Voici tes parents.', 'These are your parents.', 'vwa.si te pa.ʁɑ̃',
    'The plural, and it looks exactly like mes with a different first letter.'),

  // ── il / elle: the row where English marks the owner and French does not ─
  cell(264, 'il / elle', 'm', 'son', 'Voici son frère.', 'This is his brother.', 'vwa.si sɔ̃ fʁɛʁ',
    'This also means her brother. French does not say whose it is, only what it is.'),
  cell(265, 'il / elle', 'f', 'sa', 'Voici sa sœur.', 'This is his sister.', 'vwa.si sa sœʁ',
    'This also means her sister, word for word. The sentence carries no information about the owner '
    + 'at all, and the English has to pick one.'),
  cell(266, 'il / elle', 'pl', 'ses', 'Voici ses parents.', 'These are his parents.', 'vwa.si se pa.ʁɑ̃',
    'And her parents. Same sentence, and only what is around it decides.'),

  // ── nous: the relief. Two of the three cells are the same word ───────────
  cell(267, 'nous', 'm', 'notre', 'Voici notre frère.', 'This is our brother.', 'vwa.si nɔtʁ fʁɛʁ',
    'From here the kind of thing stops mattering.'),
  cell(268, 'nous', 'f', 'notre', 'Voici notre sœur.', 'This is our sister.', 'vwa.si nɔtʁ sœʁ',
    'The same word as the sentence above it, in front of a une word. This row asks nothing.'),
  cell(269, 'nous', 'pl', 'nos', 'Voici nos parents.', 'These are our parents.', 'vwa.si no pa.ʁɑ̃',
    'The only change this row ever makes, and it is about how many.'),

  // ── vous: identical in shape, and vos is the form a grid loses ───────────
  cell(270, 'vous', 'm', 'votre', 'Voici votre frère.', 'This is your brother.', 'vwa.si vɔtʁ fʁɛʁ',
    'The polite or plural your, and it behaves exactly like notre.'),
  cell(271, 'vous', 'f', 'votre', 'Voici votre sœur.', 'This is your sister.', 'vwa.si vɔtʁ sœʁ',
    'Unchanged again.'),
  cell(272, 'vous', 'pl', 'vos', 'Voici vos parents.', 'These are your parents.', 'vwa.si vo pa.ʁɑ̃',
    'vos. This is the form most courses leave out of the table without anybody noticing.'),

  // ── ils / elles: several owners, and the s that counts the things ────────
  cell(273, 'ils / elles', 'm', 'leur', 'Voici leur frère.', 'This is their brother.', 'vwa.si lœʁ fʁɛʁ',
    'Several people own him, and leur carries no s because he is one brother.'),
  cell(274, 'ils / elles', 'f', 'leur', 'Voici leur sœur.', 'This is their sister.', 'vwa.si lœʁ sœʁ',
    'Still leur. The kind of thing has not mattered for three rows now.'),
  cell(275, 'ils / elles', 'pl', 'leurs', 'Voici leurs parents.', 'These are their parents.', 'vwa.si lœʁ pa.ʁɑ̃',
    'The s arrives because there are two parents, not because there are several owners. The owners '
    + 'were already several in all three of these sentences.'),
];

/* ─── The four contrasts the paradigm cannot carry ─────────────────────────
 *
 * Nine rows, .258 to .266, each one a MINIMAL PAIR with exactly one thing
 * changed. The paradigm shows the system; these show the four decisions the
 * system does not make for you.                                              */

export type ContrastSentence = Omit<Item, 'drills'> & {
  /** Which teaching this row belongs to, for the tranche slices and the test. */
  role: 'his-her' | 'vowel' | 'ear' | 'leur-leurs' | 'slot';
  drills: Item['drills'];
};

const contrast = (
  seq: number, role: ContrastSentence['role'], fr: string, en: string, ipa: string,
  tags: string[], notes: string,
): ContrastSentence => ({
  id: `fr.a1.famille.${seq}`, kind: 'sentence', level: 'a1', theme: 'famille',
  fr, en, ipa: `/${ipa}/`, notes,
  tags: ['famille', 'possessif', ...tags],
  drills: SFVRD, version: 1,
  role,
});

export const CONTRASTS: ContrastSentence[] = [
  /* THE REFRAME, ON ONE SCREEN. Two sentences, one word apart, and the English
   * flips between his and her while the French does not move. The brief quotes
   * two published rows for this and both exist (fr.a1.dictee.001 and
   * fr.a2.cafe.042), but they differ in FOUR places at once and one of them is
   * a2. These two differ in one. */
  contrast(276, 'his-her', 'Il parle avec sa sœur.', 'He is talking with his sister.', 'il paʁl a.vɛk sa sœʁ',
    ['possessif-genre'],
    'The owner is a man and the possessive is sa, because a sister is the une kind.'),
  contrast(277, 'his-her', 'Elle parle avec sa sœur.', 'She is talking with her sister.', 'ɛl paʁl a.vɛk sa sœʁ',
    ['possessif-genre'],
    'The owner is a woman and the possessive is still sa. One word changed between these two '
    + 'sentences and it was not the possessive. The English had to change twice as much.'),

  /* THE VOWEL RULE, on a noun whose gender the learner can check. `sœur` and
   * `amie` are BOTH the une kind and only one of them takes ma, which is the
   * only way the swap is visible as a rule rather than as a mistake. */
  contrast(278, 'vowel', 'Voici mon amie.', 'This is my friend.', 'vwa.si mɔ̃.na.mi',
    ['possessif-genre', 'voyelle'],
    'A woman friend, and the word for her is the une kind. It takes mon anyway, because ma amie '
    + 'would put two vowel sounds against each other and French will not have it.'),
  contrast(279, 'vowel', 'Ma sœur et mon amie sont ici.', 'My sister and my friend are here.',
    'ma sœʁ e mɔ̃.na.mi sɔ̃.ti.si',
    ['possessif-genre', 'voyelle'],
    'Both of these are the une kind and one takes ma while the other takes mon. The only difference '
    + 'between them is the letter the second one starts with.'),

  /* THE EAR PAIR. The one genuine listening question in the lesson: identical
   * frames, identical liaison, and a single unstressed vowel between them. */
  contrast(280, 'ear', 'Ce sont mes amis.', 'These are my friends.', 'sə sɔ̃ me.za.mi',
    ['possessif-pluriel', 'liaison'],
    'The s of mes wakes up as a z in front of the vowel. Say it beside the next sentence.'),
  contrast(281, 'ear', 'Ce sont ses amis.', 'These are his friends.', 'sə sɔ̃ se.za.mi',
    ['possessif-pluriel', 'liaison'],
    'And her friends. The only thing separating this from the sentence above is the vowel in the '
    + 'first syllable, which is the one place in this lesson where listening carries real work.'),

  /* leur AGAINST leurs, ON ONE NOUN. Not available anywhere in A1: at level a1
   * the corpus holds 27 `leur` sentences and 19 `leurs`, and no pair of them
   * shares a noun. Every `leurs enfants` row in the database is a2 or higher. */
  contrast(282, 'leur-leurs', 'Voici leur fille.', 'This is their daughter.', 'vwa.si lœʁ fij',
    ['possessif-pluriel'],
    'Several people, one daughter, and no s on leur.'),
  contrast(283, 'leur-leurs', 'Voici leurs filles.', 'These are their daughters.', 'vwa.si lœʁ fij',
    ['possessif-pluriel'],
    'The same several people and more than one daughter. The s counts the daughters. Out loud these '
    + 'two sentences are identical, so this is a difference you read rather than hear.'),

  /* THE ARTICLE SLOT. A corpus of correct French can never contain the error,
   * so the right form is authored and the wrong one lives only on a trap card. */
  contrast(284, 'slot', "C'est mon livre.", 'This is my book.', 'sɛ mɔ̃ livʁ',
    ['possessif-genre'],
    'There is no le in this sentence and there cannot be one. The possessive is standing where the '
    + 'article would have stood, so the two never appear together.'),
];

export const PARADIGM_IDS: string[] = PARADIGM.map((w) => w.id);
export const CONTRAST_IDS: string[] = CONTRASTS.map((w) => w.id);
export const AUTHORED_WORD_IDS: string[] = AUTHORED_WORDS.map((w) => w.id);

/** The ids of one contrast group, in sequence order. */
export const contrastIds = (role: ContrastSentence['role']): string[] =>
  CONTRASTS.filter((w) => w.role === role).map((w) => w.id);

/** One owner's whole row, in m / f / pl order. */
export const rowFor = (who: string): PossessiveSentence[] =>
  SLOTS.map((s) => PARADIGM.find((w) => w.who === who && w.slot === s)!);

/** One noun's whole column, in owner order. */
export const columnFor = (slot: Slot): PossessiveSentence[] =>
  OWNERS.map((o) => PARADIGM.find((w) => w.who === o.who && w.slot === slot)!);

/** The corpus Item, stripped of the teaching-only fields. */
export function toItem(w: PossessiveSentence): Item {
  const { who: _w, slot: _s, form: _f, ...item } = w;
  return item;
}

export function contrastToItem(w: ContrastSentence): Item {
  const { role: _r, ...item } = w;
  return item;
}

export function wordToItem(w: PossessiveWord): Item {
  const { who: _w, ...item } = w;
  return item;
}

/* ─── The twelve imported headwords ────────────────────────────────────────
 *
 * The block somebody authored and stopped three cells short of finishing. Built
 * by offset rather than listed, so a renumbering cannot half-apply, and checked
 * field by field against the database in the batch.                          */

export const IMPORTED_HEADWORD_ORDER = [
  'mon', 'ma', 'mes', 'ton', 'ta', 'tes', 'son', 'sa', 'ses', 'notre', 'votre', 'leur',
] as const;

export const IMPORTED_HEADWORD_IDS: string[] = IMPORTED_HEADWORD_ORDER.map(
  (_, i) => `fr.sons.mots-essentiels.${String(93 + i).padStart(3, '0')}`,
);

/** Every one of the fifteen forms, mapped to the headword card that teaches it.
 *  Twelve imported, three authored. The test walks this map by name, because
 *  `nos` and `vos` are exactly the cells a coverage count cannot miss. */
export const HEADWORD_OF: Record<string, string> = {
  ...Object.fromEntries(IMPORTED_HEADWORD_ORDER.map((w, i) => [w, IMPORTED_HEADWORD_IDS[i]])),
  nos: 'fr.a1.famille.253',
  vos: 'fr.a1.famille.254',
  leurs: 'fr.a1.famille.255',
};

/* ─── The three respelling repairs ─────────────────────────────────────────
 *
 * Display-only, on imported rows this lesson puts on a card. The batch prints
 * each one and refuses to write if the stored value is no longer the broken one
 * it expects, because two people disagreeing about a transcription is a decision
 * rather than a merge.                                                        */

export type RespellRepair = {
  id: string;
  fr: string;
  /** What the row carries today. The batch refuses if this has changed. */
  from: string;
  /** What it will carry. Always equal to this lesson's own RESPELL, unbracketed. */
  to: string;
  /** Does the SHARED checker catch the broken value? Recorded for the same
   *  reason a1.13 records it: a later author who trusts the checker alone will
   *  reintroduce anything it cannot see. All three of these it CAN see. */
  caughtByChecker: boolean;
  why: string;
};

export const RESPELL_REPAIRS: RespellRepair[] = [
  {
    id: 'fr.sons.mots-essentiels.093', fr: 'mon',
    from: 'MOHN', to: unbracket(RESPELL.mon.respell), caughtByChecker: true,
    why: 'a plain n closes the nasal /ɔ̃/, which the house convention writes with a superscript. This is the '
      + 'first word of the lesson and the card a learner returns to, so a screen reading MOHⁿ while the '
      + 'flashcard hub reads MOHN is a contradiction the learner sees.',
  },
  {
    id: 'fr.sons.mots-essentiels.096', fr: 'ton',
    from: 'TOHN', to: unbracket(RESPELL.ton.respell), caughtByChecker: true,
    why: 'the same plain n on the same nasal. ton, son and mon rhyme exactly and are taught as one shape, so '
      + 'repairing one of the three and not the others would teach a difference that is not there.',
  },
  {
    id: 'fr.sons.mots-essentiels.099', fr: 'son',
    from: 'SOHN', to: unbracket(RESPELL.son.respell), caughtByChecker: true,
    why: 'the same again. NOT repaired on fr.sons.alphabet.116 or fr.a1.cinema.043, which carry the NOISE '
      + 'sense of son in other lessons\' themes and appear on no screen here. Repairing a row this lesson '
      + 'does not display is reaching into somebody else\'s card. Reported rather than done.',
  },
  {
    // The fourth, found by the probe rather than by the brief, and the only one
    // in a1.17's OWN theme. `les parents` is a grid noun and appears in six of
    // the eighteen paradigm sentences, so it is on more screens than any other
    // noun in the lesson.
    id: 'fr.a1.famille.014', fr: 'les parents',
    from: 'LAY pah-RAHN', to: unbracket(RESPELL['les parents'].respell), caughtByChecker: true,
    why: 'a plain N closes the nasal /ɑ̃/ of parents. The capitals in LAY are left exactly as they are: the '
      + 'whole famille deck capitalises the article and this repair is about the nasal only. Changing the '
      + 'stress marking as well would be a preference edit riding on a correctness one.',
  },
];

/** The repairs the shared checker cannot see. Empty for this lesson, and
 *  exported anyway so the batch prints the fact rather than leaving the next
 *  author to wonder whether it was checked. a1.13 had two. */
export const REPAIRS_INVISIBLE_TO_CHECKER = RESPELL_REPAIRS.filter((r) => !r.caughtByChecker).map((r) => r.fr);

/** Broken respellings of the SAME words that this lesson deliberately leaves
 *  alone, so the report names them and the next author does not re-discover
 *  them as new. Both are the noise sense of `son`. */
export const NOT_REPAIRED = [
  { id: 'fr.sons.alphabet.116', fr: 'son', respell: 'SOHN', why: 'the noise sense, in the alphabet lesson\'s theme' },
  { id: 'fr.a1.cinema.043', fr: 'le son', respell: 'luh SOHN', why: 'the noise sense again, in cinema' },
];

/* ─── Nasal words checked BY NAME ──────────────────────────────────────────
 *
 * Carry a GENUINE nasal vowel and must close it with a superscript. `mon oncle`
 * is in this list specifically because hasPlainNasalFor CANNOT SEE IT: the
 * second nasal is word-internal (KL follows it), so `mohⁿ-NOHNKL` passes every
 * shared check while teaching a sound that is not in the word. Invariant §3's
 * first blind spot, the same one that let a1.09's sep-TAHNBR through.        */
export const NASAL_FORMS = ['mon', 'ton', 'son', 'mon oncle', 'les parents', 'leur enfant', 'leurs enfants'];

/** Has NO nasal vowel and must NOT carry a superscript. Empty here, and
 *  exported so the guard exists before the lesson that needs it: `notre`,
 *  `votre` and `leur` have no nasal at all and nothing should give them one. */
export const NOT_NASAL_FORMS = ['notre', 'votre', 'leur', 'leurs', 'nos', 'vos', 'ma', 'ta', 'sa'];

/* ─── What must never reach a learner surface ──────────────────────────────
 *
 * Three neighbours own three things this lesson could easily spend, and each
 * list is written as MULTI-WORD PHRASES or as forms that cannot occur in
 * legitimate content. a1.13 learned this the hard way: its first draft listed
 * the placement mnemonics as single words and the guard fired immediately on one
 * of its own glosses. A guard that fires on legitimate content gets deleted
 * rather than fixed.                                                          */

/** Possessive PRONOUNS. Well beyond A1 and not this lesson's, and every one is a
 *  two-word form that cannot appear by accident. */
export const POSSESSIVE_PRONOUNS = [
  'le mien', 'la mienne', 'les miens', 'les miennes',
  'le tien', 'la tienne', 'les tiens', 'les tiennes',
  'le sien', 'la sienne', 'les siens', 'les siennes',
  'le nôtre', 'la nôtre', 'les nôtres',
  'le vôtre', 'la vôtre', 'les vôtres',
  'le leur', 'la leur', 'les leurs',
];

/** `leur` as an INDIRECT OBJECT PRONOUN, which is a2.24 and a different word.
 *  Probed as whole FRENCH phrases: a bare `leur` is this lesson's own subject,
 *  so the guard has to catch what an EXAMPLE of the pronoun looks like rather
 *  than the word itself.
 *
 *  `to them` was in an earlier version of this list and was removed after it
 *  fired on the last card of s16-leur, which names the other word's existence in
 *  one clause and teaches none of it. That card is deliberate: a learner who
 *  meets « Je leur parle » next month and thinks they have forgotten a rule is
 *  worse off than one who was told there are two words. A guard that fires on
 *  legitimate content gets deleted rather than fixed, which is the failure
 *  a1.13's placement guard nearly shipped, so the list holds only French frames
 *  and the one piece of jargon that should never appear anywhere. */
export const OBJECT_PRONOUN_FRAMES = [
  'leur dit', 'leur parle', 'leur donne', 'leur ai dit', 'leur a dit', 'leur explique',
  'je leur', 'il leur', 'elle leur', 'nous leur', 'vous leur', 'ils leur',
  'indirect object',
];

/** The article slot error, which this lesson teaches by NAME and must never
 *  author as correct French. Every one of these is ungrammatical, so a hit is
 *  always a defect rather than a false positive. */
export const FORBIDDEN_FORMS = [
  // an article in front of a possessive
  'le mon', 'la ma', 'les mes', 'le ton', 'la ta', 'les tes',
  'le son', 'la sa', 'les ses', 'le notre', 'les nos', 'le votre', 'les vos',
  'un mon', 'une ma', 'des mes',
  // the vowel collision the swap exists to avoid
  'ma amie', 'ta amie', 'sa amie', 'ma école', 'ta école', 'sa école',
  'ma adresse', 'ta adresse', 'sa adresse', 'ma erreur', 'ta erreur', 'sa erreur',
];

/* ─── Withdrawn on purpose ─────────────────────────────────────────────────
 *
 * The rows this lesson most obviously wants and does not import, each for a
 * reason worth recording so nobody adds them back.
 *
 * The first three are GENDERED SINGLE-WORD NOUNS, which endingPopulation()
 * admits and a1-03-genre.test.ts re-measures on every run. The grid needs the
 * learner to be able to CHECK that a sister is the une kind, and it gets that
 * from headwords that are ALREADY published rather than from new ones: nothing
 * here authors a noun at all. Verified through the real function.
 *
 * The fourth is the tie character. See the header.                           */
export const WITHDRAWN_IDS: string[] = [
  'fr.a1.amis.002',       // une amie      gendered single-word noun, already published, imported not authored
  'fr.sons.voyelles.466', // nos           no respelling and no gloss; authored fresh instead
  'fr.sons.liaisons.169', // mon ami       carries a U+203F tie, and its twin would not
];

import { IMPORTED as IMPORTED_ROWS, REUSED as REUSED_ROWS } from './possessifs-imported.ts';

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
  ...PARADIGM.map((w) => ({ id: w.id, fr: w.fr, en: w.en })),
  ...CONTRASTS.map((w) => ({ id: w.id, fr: w.fr, en: w.en })),
  ...AUTHORED_WORDS.map((w) => ({ id: w.id, fr: w.fr, en: w.en })),
  ...IMPORTED.map((w) => ({ id: w.id, fr: w.fr, en: w.en })),
  ...REUSED.map((w) => ({ id: w.id, fr: w.fr, en: w.en })),
];

const BY_ID = new Map(ALL_ROWS.map((r) => [r.id, r] as const));

export function frOf(id: string): string {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`a1.17: no French authored or recorded for "${id}"`);
  return r.fr;
}

export function enOf(id: string): string {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`a1.17: no gloss authored or recorded for "${id}"`);
  return r.en;
}

/* ─── The homograph guard ──────────────────────────────────────────────────
 *
 * `son` also means "sound", and this app has an entire track called Sons. A
 * naive search for `son` returns the phonetics vocabulary of eleven lessons, so
 * every count in this file was taken on the possessive-plus-noun SHAPE rather
 * than on the bare word, and anything that walks the corpus here must be too.
 *
 * Boundary-checked against an accent-aware class rather than a regex built from
 * the search term: `\b` is ASCII-only in JavaScript and would fail on every
 * accented neighbour, which is invariant §0's first trap.                    */

export function possessivePhrases(s: string): string[] {
  const out: string[] = [];
  const toks = s.toLowerCase().normalize('NFC')
    .replace(/[^a-zà-ÿœæ'’\s]/g, ' ').split(/\s+/).filter(Boolean);
  for (let i = 0; i < toks.length - 1; i += 1) {
    if (THE_FIFTEEN.includes(toks[i]) && /^[a-zà-ÿœæ]{2,}$/.test(toks[i + 1])) {
      out.push(`${toks[i]} ${toks[i + 1]}`);
    }
  }
  return out;
}

/** The possessive forms a row actually uses, for the coverage assertion. Reads
 *  the recorded text rather than a hand-kept table, so a row that stops carrying
 *  its form stops counting for it. */
export function formsIn(fr: string): string[] {
  const toks = fr.toLowerCase().normalize('NFC')
    .replace(/[^a-zà-ÿœæ'’\s]/g, ' ').split(/\s+/).filter(Boolean);
  return THE_FIFTEEN.filter((f) => toks.includes(f));
}
