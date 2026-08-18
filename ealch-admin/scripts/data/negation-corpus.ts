// The a1.18 corpus: what this lesson authors, what it imports, and the one
// shipped respelling it repairs.
//
// THIS FILE IS THE SINGLE SOURCE OF TRUTH for the 27 authored rows, the imported
// rows, the reused rows, and every respelling a1.18 puts on a screen. The lesson
// body (negation-lesson.ts) reads `fr`, `ipa`, `respell` and `en` FROM HERE and
// never restates them, for the same reason possessifs-corpus.ts and
// couleurs-corpus.ts do.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE BRIEF IS RIGHT ABOUT THE CORPUS AND WRONG ABOUT THE CURRICULUM.
//  THREE LESSONS HAVE ALREADY TAUGHT THE ARTICLE RULE THE BRIEF CALLS
//  "WHERE THE LESSON IS WON OR LOST". WHAT NOBODY HAS TAUGHT IS ÊTRE.
// ══════════════════════════════════════════════════════════════════════════
//
// Measured 2026-08-07 with `pnpm corpus:probe --unit a1.18 --theme
// negation-et-restriction` and `pnpm tsx scripts/_negation_probe.ts`, both
// against Postgres (47,444 published rows, 27,242 of them sentences).
//
//   1. "Step three: the article changes, and this is where the lesson is won or
//      lost." And: "The weight belongs on the article rule and its exceptions,
//      not on the ne… pas wrap."
//
//      THE ARTICLE RULE IS THE MOST-TAUGHT FACT IN THE A1 BAND. Three shipped
//      lessons carry a dedicated section, an errorTrigger, a drill and a quiz
//      round on it:
//
//          a1.11.l1  s13-negation   un/une/des -> de   err-negation-de
//          a1.29.l1  s12-negation   du/de la   -> de   err-negation-de
//          a1.07.l1  s15-negation   une -> de, AND `pas faim` with no article
//                                   err-negation-shape, drill-negation,
//                                   retest-negation, round r6-saying-no
//
//      All three also teach that le/la/les survive. A learner arriving here has
//      met the collapse three times and can already answer `de`. Re-teaching it
//      as new would tell somebody who has just used it that they had not.
//
//      So the weight in THIS lesson sits where the brief did not look: on the
//      VERB. See §3.
//
//   2. "Step two: n' before a vowel, and the learner has met this pressure
//      twice already... a1.18, yours: ne ai -> n'ai, chop the particle."
//
//      NOT YOURS. sons.07 "L'élision" already owns it outright. It ships a
//      dedicated card `{ label: 'ne', head: "ne becomes n'" }`, an errorSpot on
//      « je ne aime pas », and four quiz questions whose answers are `n'ai`,
//      « Je n'ai pas d'argent. », « je n'aime pas » and « ce n'est pas ». Its
//      own why-line reads: "ne is on the list, so it elides before a vowel."
//
//      This lesson therefore REFERENCES the elision rather than deriving it,
//      in one section rather than the act the brief's shape gives it. The
//      pressure is named as the same one, which is what the brief actually
//      wanted; what it did not know is that the naming has already happened.
//
//   3. THE FINDING THAT SHAPES THE LESSON: a1.06 "Être" NEVER NEGATES.
//
//      Grepped for « ne suis pas », « n'est pas », « ne sont pas », « n'es
//      pas », « ne sommes pas » across etre-lesson.ts and etre-corpus.ts:
//      ZERO HITS. Twenty-six sections and not one negative. Every negation the
//      learner has met in this course has been on avoir or on an -er verb they
//      cannot conjugate.
//
//      That is also exactly where the article exception lives. So the two
//      genuinely new things in this lesson are the same thing:
//
//          negating être at all, and the article surviving when you do.
//
//   4. "The être exception is effectively unattested across 27,242 sentences."
//
//      TRUE, and worse than the brief's figure. Measured over all 47,444
//      published rows on every person of the exception:
//
//          "n'est pas un"    1     fr.sons.alphabet.370, a spelling contrast
//          "n'est pas une"   1     fr.c1.rhetorique.028, C1
//          "ne sont pas des" 0
//          "ne suis pas un"  0     "ne suis pas une"  0
//          "n'es pas un"     0     "n'es pas une"     0
//
//      TWO ROWS IN THE ENTIRE DATABASE, neither usable at A1. Against 31 rows
//      carrying the collapse. This lesson authors the exception from nothing:
//      six rows, three pairs, three of them carrying a surviving article.
//
//   5. "the 41-row A1 slice... Some will be out of your canDo."
//
//      TWENTY-FIVE OF THE FORTY-ONE ARE, which is not "some". Enumerated
//      rather than sampled (the brief quotes four and says so):
//
//          3 imperatives    .018 .019 .020
//          4 jamais         .012 .026 .038 .040
//          3 plus           .013 .030 .041
//          4 rien           .014 .029 .031  (+ .034 aucune, .035 aucun)
//          2 personne       .028 .037
//          3 ne...que       .032 .033 .042      <- B1, and the brief says so
//          1 ni...ni        .036
//          1 pas du tout    .015
//          1 ne pas + inf   .001 « ne pas déranger »
//          2 pas encore     .016 .017
//
//      Of the sixteen that remain, THIRTEEN use verbs the learner cannot
//      conjugate (parler, manger, travailler, regarder, habiter, fermer,
//      prendre, sortir, fumer, trouver, aimer, écouter). The a1 slice of a
//      theme named for this lesson's subject yields exactly TWO rows the
//      learner could be asked to produce: .021 « Je n'ai pas de stylo. » and
//      .023 « Nous n'avons pas faim. »
//
//      Curate, do not bulk-import, was the right instruction. The scale of the
//      curation was not what the brief expected.
//
//   6. "the prefix convention for this theme" (listed UNVERIFIED).
//
//      RESOLVED: there is no `fr.sons.negation-et-restriction` slice at all.
//      All 604 rows sit under fr.a1 / fr.a2 / fr.b1 / fr.b2, and the fifteen
//      non-sentence rows (kind='phrase') sit in the SAME prefix as the
//      sentences: .001 « ne pas déranger », .012 « jamais de la vie », .016
//      « pas encore prêt ». This is the `famille` convention, not the
//      `couleurs` one. Nothing here is authored into fr.sons.*.
//
//   7. "`pas un` returns 9 and most are contrastive."
//
//      TEN now, and it is not "most", it is all ten. Six are fr.sons.alphabet
//      spelling contrasts (« C'est un B comme Bernard, pas un P comme
//      Pierre »), the rest b2/c1. Not one is an error. FORBIDDEN_FORMS below is
//      written so it cannot fire on a contrastive `pas un`.
//
// ── The gendered-noun risk, and why it is zero here ────────────────────────
//
// Every authored row below is `kind: 'sentence'` and carries no `gender` field,
// so NOT ONE reaches a1.03's measured ending population. The lesson needs
// countable nouns (`un frère`, `une voiture`, `un livre`) and the brief calls
// that a live risk; it is only a risk if the nouns are authored as HEADWORDS,
// and none is. Every noun this lesson displays is already published. Verified
// through the real `endingPopulation` in the batch and the merge rather than
// argued. NOTHING WAS WITHDRAWN, because nothing needed to be.
//
// ── The respelling repair, and the two left alone ──────────────────────────
//
// REPAIRED, because this lesson puts the word on a screen:
//
//     fr.sons.mots-essentiels.043  non  NOHN -> NOHⁿ
//
// Measured against the real hasPlainNasalFor on 2026-08-07: NOHN is FLAGGED,
// NOHⁿ passes. It is a genuine nasal vowel with no n sound behind it, so this
// is the §3 case where the checker is right.
//
// NOT REPAIRED, and reported rather than done (invariant §9):
//
//     fr.sons.mots-essentiels.072  rien      RYAN     flagged, and wrong
//     fr.a1.rp-societe.039         une personne  ün-pehr-SON
//     fr.sons.mots-essentiels.075  personne      pehr-SON
//     fr.sons.noms-essentiels.009  la personne   lah pehr-SONN
//
// `rien` and `personne` belong to ne… rien and ne… personne, which this
// lesson's canDo excludes and which NO A1 UNIT OWNS. Repairing a row this
// lesson does not display is reaching into somebody else's card. Note that
// pehr-SON and pehr-SONN both pass the checker: /pɛʁ.sɔn/ has a real n and no
// nasal vowel, so this is the §3 blind spot in its harmless direction and a
// superscript on either would teach a sound that is not in the word.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

/* ─── What the screens display ─────────────────────────────────────────────
 *
 * Every French unit a1.18 puts on a card, with the respelling this lesson
 * stands behind. Keyed by the French form, because most are display strings
 * rather than corpus rows.                                                  */

export type Display = { fr: string; ipa: string; respell: string; en: string };

const D = (fr: string, ipa: string, res: string, en: string): Display =>
  ({ fr, ipa: `/${ipa}/`, respell: `[${res}]`, en });

const unbracket = (s: string) => s.replace(/^\[|\]$/g, '');

export const RESPELL: Record<string, Display> = {
  // ── The two particles. NEITHER IS EVER RECORDED ALONE. ──────────────────
  //
  // Both are unstressed and carry no meaning on their own, so a lone clip
  // invites the learner to say them as stressed words. The respellings are
  // lower-case throughout for the same reason: the house convention
  // capitalises the STRESSED syllable, and neither of these ever is one.
  //
  // `ne` keeps the value fr.sons.voyelles.182 already ships (`nuh`) rather
  // than being restressed. A variant is not a violation and this lesson agrees
  // with the shipped card.
  ne: D('ne', 'nə', 'nuh', 'the first half of the wrap, in front of the verb'),
  pas: D('pas', 'pɑ', 'pah', 'the second half of the wrap, behind the verb'),
  "n'": D("n'", 'n', 'n', 'what ne becomes when a vowel follows it'),

  // `non` is the repaired row. NOHN is flagged by hasPlainNasalFor and NOHⁿ is
  // not; /nɔ̃/ is a nasal vowel with no n sound behind it. This is the one
  // respelling this lesson changes in the database.
  non: D('non', 'nɔ̃', 'NOHⁿ', 'no, which answers a question and never sits inside a sentence'),

  // `de` is what un, une, des, du and de la collapse to. No nasal anywhere,
  // and a superscript here would be the a1.13 `jaune` mistake.
  de: D('de', 'də', 'duh', 'what an un, une or des turns into behind a negative'),
  "d'": D("d'", 'd', 'd', 'the same de, in front of a vowel'),

  // ── The three-way contrast the lesson is built on. One noun, one screen. ──
  //
  // Identical `en` structure on purpose: the English is the same shape three
  // times and only the French moves, which is the claim.
  'un livre': D('un livre', 'œ̃ livʁ', 'uhⁿ LEEVR', 'a book'),
  'le livre': D('le livre', 'lə livʁ', 'luh LEEVR', 'the book'),
  'de livre': D('de livre', 'də livʁ', 'duh LEEVR', 'the un collapsed, so nothing is left in front'),

  // ── The wrap, on the only two verbs the learner can conjugate ────────────
  'je suis': D('je suis', 'ʒə sɥi', 'zhuh SWEE', 'I am'),
  'je ne suis pas': D('je ne suis pas', 'ʒə nə sɥi pɑ', 'zhuh nuh swee PAH', 'I am not'),
  "j'ai": D("j'ai", 'ʒe', 'ZHAY', 'I have'),
  "je n'ai pas": D("je n'ai pas", 'ʒə ne pɑ', 'zhuh nay PAH', 'I do not have'),
  "il n'est pas": D("il n'est pas", 'il nɛ pɑ', 'eel neh PAH', 'he is not, or it is not'),
  "ce n'est pas": D("ce n'est pas", 'sə nɛ pɑ', 'suh neh PAH', 'this is not, or that is not'),
  'ce ne sont pas': D('ce ne sont pas', 'sə nə sɔ̃ pɑ', 'suh nuh sohⁿ PAH', 'these are not, or those are not'),

  // ── The nouns the pairs run on. Every one is already published; these are
  // display transcriptions, not authored headwords. ────────────────────────
  'un frère': D('un frère', 'œ̃ fʁɛʁ', 'uhⁿ FREHR', 'a brother'),
  'une voiture': D('une voiture', 'yn vwa.tyʁ', 'ün vwah-TÜR', 'a car'),
  'des enfants': D('des enfants', 'de.zɑ̃.fɑ̃', 'day zahⁿ-FAHⁿ', 'children'),
  'un chien': D('un chien', 'œ̃ ʃjɛ̃', 'uhⁿ SHYEHⁿ', 'a dog'),
  'une erreur': D('une erreur', 'yn ɛ.ʁœʁ', 'ün eh-RUHR', 'a mistake'),
  'des amis': D('des amis', 'de.za.mi', 'day za-MEE', 'friends'),

  // ── The dropped ne. RECOGNITION ONLY, on every surface. ─────────────────
  //
  // Deliberately transcribed so the learner can SEE that the written and the
  // spoken forms differ by one unstressed syllable and nothing else.
  "je n'ai pas de chien": D("je n'ai pas de chien", 'ʒə ne pɑ də ʃjɛ̃', 'zhuh nay pah duh SHYEHⁿ', 'I do not have a dog, written'),
  "j'ai pas de chien": D("j'ai pas de chien", 'ʒe pɑ də ʃjɛ̃', 'zhay pah duh SHYEHⁿ', 'the same sentence, as it is actually said'),

  // ── The companion ────────────────────────────────────────────────────────
  'moi non plus': D('moi non plus', 'mwa nɔ̃ ply', 'mwah nohⁿ PLÜ', 'me neither'),
};

/** Every form that carries a genuine nasal vowel and MUST close it with the
 *  superscript. Checked BY NAME as well as through hasPlainNasalFor, because
 *  the shared checker cannot see a word-internal nasal (invariant §3's first
 *  blind spot): `day zahⁿ-FAHⁿ` and `suh nuh sohⁿ PAH` are exactly that shape
 *  and would pass a naive check while being wrong. */
export const NASAL_FORMS = [
  'non', 'un livre', 'un frère', 'des enfants', 'un chien',
  'ce ne sont pas', "je n'ai pas de chien", "j'ai pas de chien", 'moi non plus',
];

/** THE OPPOSITE CHECK, and it is the one a1.13 shipped wrong on `jaune`.
 *  None of these has a nasal vowel anywhere in it, the checker never flagged
 *  any of them, and a superscript on any would teach a sound the word does not
 *  contain. `personne` is on this list even though this lesson does not repair
 *  it, because the next author to read the probe's warning will be tempted. */
export const NOT_NASAL_FORMS = [
  'ne', 'pas', "n'", 'de', "d'", 'le livre', 'de livre',
  'je suis', "j'ai", "il n'est pas", "ce n'est pas", 'une voiture', 'une erreur', 'des amis',
];

export function sub(fr: string): string {
  const d = RESPELL[fr];
  if (!d) throw new Error(`${unitRef('a1.18')}: no respelling for "${fr}"`);
  return `${d.ipa} ${d.respell}`;
}
export function ipaOf(fr: string): string {
  const d = RESPELL[fr];
  if (!d) throw new Error(`${unitRef('a1.18')}: no ipa for "${fr}"`);
  return d.ipa;
}

/** The BRACKETED respelling on its own, for fields the density validator reads
 *  as a respelling rather than as a subtitle.
 *
 *  `sub()` returns "/ipa/ [RESPELL]" and is right for a `sub` field. A `respell`
 *  field is checked by the `respell-notation` rule, which requires the value to
 *  BE brackets and rejects an ipa glued to the front of it. The scene's choice
 *  options and its break card both carry `respell`, and passing sub() there is
 *  how this lesson first failed the density validator. */
export function re(fr: string): string {
  const d = RESPELL[fr];
  if (!d) throw new Error(`${unitRef('a1.18')}: no respelling for "${fr}"`);
  return d.respell;
}
export function respellOf(fr: string): string {
  const d = RESPELL[fr];
  if (!d) throw new Error(`${unitRef('a1.18')}: no respelling for "${fr}"`);
  return unbracket(d.respell);
}

/* ─── The pairs ────────────────────────────────────────────────────────────
 *
 * THE AUTHORING DECISION OF THIS LESSON, and the brief names it exactly:
 * "Author minimal pairs, not scatter... positive and negative of the same
 * sentence, with exactly one thing different."
 *
 * Every row below is generated from a PAIR rather than typed as a sentence, so
 * a positive can never drift away from its own negative and the two are always
 * adjacent in the id sequence. The lesson reads pairs, not ids.
 *
 * Sequence continues fr.a1.negation-et-restriction, whose highest published id
 * is .042 with a gap at .027. NEXT FREE = .043, confirmed by pnpm corpus:probe
 * on 2026-08-07. THE GAP AT .027 IS A GAP, NOT AN INVITATION: ids are the SRS
 * key and renumbering into a hole would collide with whatever wrote around it.
 *
 * `verb` is the field the whole lesson turns on. It is what decides the
 * article, and the drills, the tables and the test all sort on it rather than
 * on the article, because sorting on the article is the thing the learner is
 * being taught not to do.                                                    */

export type Outcome =
  /** un, une, des, du, de la -> de. The rule three lessons already taught. */
  | 'collapses'
  /** After être, the article does not move. Effectively unattested; authored. */
  | 'survives-etre'
  /** le, la, les never move, whatever the verb. */
  | 'survives-definite'
  /** There was no article, so there is nothing for the negative to reduce. */
  | 'nothing-to-collapse';

export type Pair = {
  /** Which act teaches it, and therefore which tranche releases it. */
  act: 1 | 3 | 4 | 5;
  verb: 'être' | 'avoir';
  outcome: Outcome;
  /** True when the negative shows `ne` becoming `n'`. sons.07 owns the rule. */
  elides: boolean;
  posId: string;
  negId: string;
  pos: string;
  neg: string;
  posEn: string;
  negEn: string;
  posIpa: string;
  negIpa: string;
  /** One line, on the negative row, saying what moved and what did not. */
  note: string;
  tags: string[];
};

const P = (
  seq: number, act: Pair['act'], verb: Pair['verb'], outcome: Outcome, elides: boolean,
  pos: string, posEn: string, posIpa: string,
  neg: string, negEn: string, negIpa: string,
  note: string, tags: string[],
): Pair => ({
  act, verb, outcome, elides,
  // THREE DIGITS, PADDED. Every id in this corpus is fr.<level>.<theme>.NNN and
  // the seed's own id regex requires at least three, so an unpadded `.50` both
  // sorts wrong against `.043` and fails to resolve. Caught by frOf's throw on
  // the first run rather than by a blank card on a device.
  posId: `fr.a1.negation-et-restriction.${String(seq).padStart(3, '0')}`,
  negId: `fr.a1.negation-et-restriction.${String(seq + 1).padStart(3, '0')}`,
  pos, neg, posEn, negEn, posIpa, negIpa, note, tags,
});

export const PAIRS: Pair[] = [
  /* ── Act 1: the wrap, on both verbs, with no article anywhere ───────────
   *
   * Deliberately article-free. The wrap and the article rule are two steps and
   * a learner who meets them in the same breath cannot tell which one produced
   * which change. Act 1 shows the wrap with nothing else moving; the article
   * arrives in act 3 on sentences whose wrap the learner has already done.   */
  P(43, 1, 'être', 'nothing-to-collapse', false,
    'Je suis fatigué.', 'I am tired.', 'ʒə sɥi fa.ti.ɡe',
    'Je ne suis pas fatigué.', 'I am not tired.', 'ʒə nə sɥi pɑ fa.ti.ɡe',
    'Two words arrived and nothing else in the sentence moved. Ne went in front of suis and pas went behind it.',
    ['negation', 'etre', 'wrap']),
  P(45, 1, 'être', 'nothing-to-collapse', true,
    'Il est là.', 'He is there.', 'il ɛ la',
    "Il n'est pas là.", 'He is not there.', 'il nɛ pɑ la',
    `The same wrap, and ne has lost its e because est starts on a vowel. That is the elision rule from ${unitRef('sons.07')}, not a new one.`,
    ['negation', 'etre', 'wrap', 'elision']),
  P(47, 1, 'être', 'nothing-to-collapse', false,
    'Nous sommes prêts.', 'We are ready.', 'nu sɔm pʁɛ',
    'Nous ne sommes pas prêts.', 'We are not ready.', 'nu nə sɔm pɑ pʁɛ',
    'The wrap goes around the conjugated verb whatever person it is in. Sommes is one word, so ne and pas sit either side of it.',
    ['negation', 'etre', 'wrap']),
  P(49, 1, 'avoir', 'nothing-to-collapse', true,
    "J'ai soif.", 'I am thirsty.', 'ʒe swaf',
    "Je n'ai pas soif.", 'I am not thirsty.', 'ʒə ne pɑ swaf',
    'Soif never had a word in front of it, so the negative had nothing to take away. It is pas soif and never pas de soif.',
    ['negation', 'avoir', 'wrap']),

  /* ── Act 3: the article collapses. REVISION, not new teaching. ──────────
   *
   * a1.11, a1.29 and a1.07 all taught this. These three pairs exist so the
   * learner can run the procedure on it rather than read it again, and so the
   * act 4 contrast has something to be a contrast WITH.                      */
  P(51, 3, 'avoir', 'collapses', true,
    "J'ai un frère.", 'I have a brother.', 'ʒe œ̃ fʁɛʁ',
    "Je n'ai pas de frère.", 'I do not have a brother.', 'ʒə ne pɑ də fʁɛʁ',
    'Two things changed. The wrap went round ai, and then the un became de. A learner who does only the first says Je n ai pas un frère.',
    ['negation', 'avoir', 'article', 'de']),
  P(53, 3, 'avoir', 'collapses', true,
    "J'ai une voiture.", 'I have a car.', 'ʒe yn vwa.tyʁ',
    "Je n'ai pas de voiture.", 'I do not have a car.', 'ʒə ne pɑ də vwa.tyʁ',
    'De agrees with nothing. Une became de, exactly as un did, and there is no de feminine to remember.',
    ['negation', 'avoir', 'article', 'de']),
  P(55, 3, 'avoir', 'collapses', true,
    'Elle a des enfants.', 'She has children.', 'ɛl a de.zɑ̃.fɑ̃',
    "Elle n'a pas d'enfants.", 'She does not have children.', 'ɛl na pɑ dɑ̃.fɑ̃',
    'Des became de like the other two, and then de lost its e in front of the vowel. The same elision, arriving on the other side of the sentence.',
    ['negation', 'avoir', 'article', 'de', 'elision']),

  /* ── Act 4: ONE NOUN, THREE ANSWERS. THE SCREEN THIS LESSON IS JUDGED ON.
   *
   * `livre` three times, with the same article in two of the three, and the
   * answer is different every time. Nothing in the corpus does this and
   * nothing in the corpus could: the exception is attested twice in 47,444
   * rows and neither row is usable.
   *
   * The order is deliberate. The collapse first, because the learner knows it.
   * Then `le`, which they also know. Then être, which nobody has taught, and
   * which is the only one that can be got wrong by a learner who has been
   * paying attention.                                                        */
  P(57, 4, 'avoir', 'collapses', true,
    "J'ai un livre.", 'I have a book.', 'ʒe œ̃ livʁ',
    "Je n'ai pas de livre.", 'I do not have a book.', 'ʒə ne pɑ də livʁ',
    'Un became de. This is the rule you already have, on the noun the next two cards use as well.',
    ['negation', 'avoir', 'article', 'de', 'contrast-livre']),
  P(59, 4, 'avoir', 'survives-definite', true,
    "J'ai le livre.", 'I have the book.', 'ʒe lə livʁ',
    "Je n'ai pas le livre.", 'I do not have the book.', 'ʒə ne pɑ lə livʁ',
    'Same verb, same noun, and le did not move. Only un, une, des, du and de la ever collapse. Le, la and les stay exactly where they were.',
    ['negation', 'avoir', 'article', 'defini', 'contrast-livre']),
  P(61, 4, 'être', 'survives-etre', true,
    "C'est un livre.", 'This is a book.', 'sɛ tœ̃ livʁ',
    "Ce n'est pas un livre.", 'This is not a book.', 'sə nɛ pɑ œ̃ livʁ',
    'The un survived, and the only thing different from the first card is the verb. After être nothing collapses at all.',
    ['negation', 'etre', 'article', 'exception', 'contrast-livre']),

  /* ── Act 4 continued: the exception in its other two persons ────────────
   *
   * Authored from nothing. « ne suis pas un/une » and « ne sont pas des » each
   * return ZERO rows across the whole database, so a learner who met the
   * exception only on `ce n'est pas` would have no reason to think it reached
   * anywhere else.                                                           */
  P(63, 4, 'être', 'survives-etre', true,
    "C'est une erreur.", 'That is a mistake.', 'sɛ tyn ɛ.ʁœʁ',
    "Ce n'est pas une erreur.", 'That is not a mistake.', 'sə nɛ pɑ yn ɛ.ʁœʁ',
    'Une survived as well. If this had been avoir it would have been de, and the only thing telling you otherwise is the verb.',
    ['negation', 'etre', 'article', 'exception']),
  P(65, 4, 'être', 'survives-etre', false,
    'Ce sont des amis.', 'These are friends.', 'sə sɔ̃ de.za.mi',
    'Ce ne sont pas des amis.', 'These are not friends.', 'sə nə sɔ̃ pɑ de.za.mi',
    'Des survived too, and ne kept its e because sont starts on a consonant. The exception reaches every person of être, not just ce n est pas.',
    ['negation', 'etre', 'article', 'exception']),

  /* ── Act 5: what you will actually hear. RECOGNITION ONLY. ──────────────
   *
   * Three rows rather than a pair, because the third is the same sentence as
   * the second with the ne gone. `J'ai pas de chien` is authored so the learner
   * can RECOGNISE it and is asked to produce it nowhere: no speak surface, no
   * typeIn, no dictée target, and the test asserts all three.                */
  P(67, 5, 'avoir', 'collapses', true,
    "J'ai un chien.", 'I have a dog.', 'ʒe œ̃ ʃjɛ̃',
    "Je n'ai pas de chien.", 'I do not have a dog.', 'ʒə ne pɑ də ʃjɛ̃',
    'The written form, with both halves of the wrap in place. This is what you write and what you will be marked on.',
    ['negation', 'avoir', 'article', 'de', 'oral']),
];

/** The dropped `ne`, authored as ONE row and never as a pair, because it is not
 *  an alternative the learner chooses between. It is the same sentence as
 *  fr.a1.negation-et-restriction.068 arriving in ordinary speech.
 *
 *  RECOGNITION ONLY IS ENFORCED, not merely intended. This id appears in no
 *  speak mission, no dictée, no typeIn accept list and no drill answer key, and
 *  the batch, the merge and the test all check it by id. The brief is right
 *  that this is the assertion that stops a later author "modernising" the
 *  lesson, and it is written against the id rather than the string so a reword
 *  cannot slip past it. */
export const DROPPED_NE: Item = {
  id: 'fr.a1.negation-et-restriction.069',
  kind: 'sentence', level: 'a1', theme: 'negation-et-restriction',
  fr: "J'ai pas de chien.",
  en: 'I do not have a dog. (spoken French, with the ne dropped)',
  ipa: '/ʒe pɑ də ʃjɛ̃/',
  notes:
    'The same sentence as Je n ai pas de chien, said the way it is actually said. Dropping the ne is not slang and '
    + 'not careless: it is what ordinary spoken French does with a negative, and a learner who has only met the '
    + 'written form will hear this and register agreement rather than refusal. Recognise it. Do not write it, and '
    + 'do not say it while you are still learning which half you would be dropping.',
  tags: ['negation', 'oral', 'reconnaissance'],
  drills: ['flashcard', 'review'],
  version: 1,
};

/* ─── Derived views, so nothing downstream restates a list ─────────────────── */

export const PAIR_OF: Record<string, Pair> = Object.fromEntries(
  PAIRS.flatMap((p) => [[p.posId, p], [p.negId, p]] as const),
);

export const pairsIn = (act: Pair['act']): Pair[] => PAIRS.filter((p) => p.act === act);
export const pairsWith = (o: Outcome): Pair[] => PAIRS.filter((p) => p.outcome === o);
export const pairsOn = (v: Pair['verb']): Pair[] => PAIRS.filter((p) => p.verb === v);

/** The three-way contrast, in the order act 4 shows it. Exported so the lesson,
 *  the batch, the merge and the test all name the same three pairs and none of
 *  them can drift. The tag is on the corpus rows, so this cannot be reordered
 *  into agreement with a broken screen. */
export const CONTRAST_LIVRE: Pair[] = PAIRS.filter((p) => p.tags.includes('contrast-livre'));

/** Every id this lesson authors, in sequence. */
export const AUTHORED_IDS: string[] = [
  ...PAIRS.flatMap((p) => [p.posId, p.negId]),
  DROPPED_NE.id,
];

export const POSITIVE_IDS: string[] = PAIRS.map((p) => p.posId);
export const NEGATIVE_IDS: string[] = PAIRS.map((p) => p.negId);

/** The range this lesson owns, exported so the batch can check that nobody has
 *  landed INSIDE it rather than only above it. a1.15 landed inside a1.17's
 *  range mid-build on 2026-08-06 and a highest-id check passed it cleanly. */
export const OWNED_ID_RANGE = {
  from: 'fr.a1.negation-et-restriction.043',
  to: 'fr.a1.negation-et-restriction.069',
};

const SFVRD: Item['drills'] = ['sentence', 'flashcard', 'voiceflash', 'review', 'dictation'];
/** The positives carry no `dictation`. A dictée on « J'ai un livre. » tests
 *  nothing this lesson teaches, and every dictée target here is a NEGATIVE. */
const SFVR: Item['drills'] = ['sentence', 'flashcard', 'voiceflash', 'review'];

export function positiveToItem(p: Pair): Item {
  return {
    id: p.posId, kind: 'sentence', level: 'a1', theme: 'negation-et-restriction',
    fr: p.pos, en: p.posEn, ipa: `/${p.posIpa}/`,
    notes: `The sentence before the negative arrives. Its negative is ${p.negId.split('.').pop()}.`,
    tags: [...p.tags, 'affirmatif'], drills: SFVR, version: 1,
  };
}

export function negativeToItem(p: Pair): Item {
  return {
    id: p.negId, kind: 'sentence', level: 'a1', theme: 'negation-et-restriction',
    fr: p.neg, en: p.negEn, ipa: `/${p.negIpa}/`,
    notes: p.note,
    tags: [...p.tags, 'negatif'], drills: SFVRD, version: 1,
  };
}

export const AUTHORED_ITEMS: Item[] = [
  ...PAIRS.flatMap((p) => [positiveToItem(p), negativeToItem(p)]),
  DROPPED_NE,
];

/* ─── The respelling repair ────────────────────────────────────────────────── */

export type RespellRepair = {
  id: string; fr: string; from: string; to: string;
  /** Does hasPlainNasalFor catch it, or is this a §3 blind spot? */
  caughtByChecker: boolean;
  why: string;
};

export const RESPELL_REPAIRS: RespellRepair[] = [
  {
    id: 'fr.sons.mots-essentiels.043',
    fr: 'non',
    from: 'NOHN',
    to: 'NOHⁿ',
    caughtByChecker: true,
    why:
      'A plain n closing a genuine nasal vowel. /nɔ̃/ has no n sound in it at all: the n on the page is what '
      + 'nasalises the o and is not pronounced itself. NOHN tells an English reader to say the n, which produces '
      + 'a word French does not have. Measured against the real hasPlainNasalFor on 2026-08-07: NOHN is FLAGGED '
      + 'and NOHⁿ passes. This lesson displays `non` on two screens, so the repair is in scope.',
  },
];

/** Reported rather than repaired. Every one is outside this lesson's teaching
 *  scope, appears on no screen it draws, and belongs to a construction its
 *  canDo excludes. Invariant §9: repair only what breaks a stated rule on a
 *  card you are putting up. */
export const NOT_REPAIRED = [
  {
    id: 'fr.sons.mots-essentiels.072', fr: 'rien', respell: 'RYAN',
    why: 'Flagged, and genuinely wrong: /ʁjɛ̃/ is a nasal and RYAN closes it with a plain n. '
      + 'fr.sons.consonnes.092 carries RYEHⁿ for the same word, which is right. Two respellings for one word, and '
      + 'this lesson fixes neither: ne… rien is excluded by its canDo and appears on no screen here.',
  },
  {
    id: 'fr.a1.rp-societe.039', fr: 'une personne', respell: 'ün-pehr-SON',
    why: 'One of three competing respellings for personne. NOT flagged, and correctly so: /pɛʁ.sɔn/ ends in a real '
      + 'n with no nasal vowel, so a superscript here would teach a sound that is not in the word. This is the §3 '
      + 'blind spot in its harmless direction.',
  },
  {
    id: 'fr.sons.mots-essentiels.075', fr: 'personne', respell: 'pehr-SON',
    why: 'The second of the three. Also unflagged and also correct as a transcription. The problem is that three '
      + 'themes disagree about stress and hyphenation, which is a variant rather than a violation.',
  },
  {
    id: 'fr.sons.noms-essentiels.009', fr: 'la personne', respell: 'lah pehr-SONN',
    why: 'The third. The doubled N is the shape invariant §3 prescribes for a real /n/ after a vowel and is the '
      + 'best of the three. Left alone: ne… personne is not this lesson\'s construction and reconciling three '
      + 'themes is not a negation lesson\'s job.',
  },
];

/* ─── What the neighbours keep ─────────────────────────────────────────────
 *
 * ne… jamais, ne… plus, ne… rien and ne… personne are excluded by this
 * lesson's canDo ("with ne… pas") and are richly attested at a2 and b1. They
 * reach NO production surface here.
 *
 * WRITTEN AS THE SECOND HALF OF THE WRAP, not as bare words, and that is the
 * whole reason this guard survives. a1.13's first draft listed a neighbour's
 * content as single words and fired on its own copy immediately; `plus` and
 * `personne` are ordinary French words that turn up in legitimate context
 * (« moi non plus » is imported HERE), so a bare-word guard would fire on this
 * lesson's own material and get deleted.                                     */
export const OTHER_NEGATORS = [
  'ne jamais', "n'jamais", 'ne… jamais', 'ne...jamais',
  'ne plus', 'ne… plus', 'ne...plus',
  'ne rien', 'ne… rien', 'ne...rien',
  'ne personne', 'ne… personne', 'ne...personne',
  'jamais de', 'plus de lait', 'ne bois jamais', 'ne travaille jamais',
  'ne mange rien', 'ne fait rien', 'ne voyons personne', 'ne vois aucun',
  'ne parle ni', 'ne… que', 'ne...que', "n'a qu'un", 'ne mange que',
];

/** The imperative negative. fr.a1.negation-et-restriction.018, .019 and .020
 *  sit in this lesson's own theme slice and are NOT in its canDo: an imperative
 *  has no subject and the learner has never conjugated one. Named by id so the
 *  guard cannot be satisfied by a reword. */
export const IMPERATIVE_IDS = [
  'fr.a1.negation-et-restriction.018',
  'fr.a1.negation-et-restriction.019',
  'fr.a1.negation-et-restriction.020',
];

/** The ne-less negative, as SHAPES rather than as a heuristic.
 *
 *  A first version of this guard looked for "a `pas` with no `ne` anywhere in
 *  front of it" and fired on fourteen legitimate answer keys, because an accept
 *  list is written for `fold()`, which strips apostrophes: « je nai pas soif »
 *  and « pas de frère » are both correct entries and neither contains the
 *  string `ne`. A guard that fires on its own lesson's correct content gets
 *  deleted, which is how a1.13's placement guard nearly went.
 *
 *  So the check is on the SUBJECT-PLUS-VERB shapes that can only occur when the
 *  ne has been dropped. Every one of these is unambiguous: `j'ai pas` cannot
 *  appear inside `je n'ai pas`, and `c'est pas` cannot appear inside
 *  `ce n'est pas`. Both apostrophe-carrying and folded forms are listed,
 *  because an accept list holds the folded one. */
export const NE_LESS_SHAPES = [
  "j'ai pas", 'jai pas', "c'est pas", 'cest pas',
  'je suis pas', 'tu es pas', 'il est pas', 'elle est pas',
  'tu as pas', 'il a pas', 'elle a pas',
  'nous avons pas', 'nous sommes pas', 'vous avez pas', 'vous etes pas',
  'ils ont pas', 'elles ont pas', 'ce sont pas', 'on a pas', 'on est pas',
];

/** `ne pas` + INFINITIVE, which is a different construction and looks exactly
 *  like this lesson's rule. The brief flags it and is right: the two words sit
 *  together BEFORE an infinitive rather than wrapping a conjugated verb. */
export const INFINITIVE_FRAMES = [
  'ne pas déranger', 'ne pas faire', 'ne pas réveiller', 'ne pas venir', 'de ne pas',
];

/** Ungrammatical forms this lesson exists to prevent. A hit on a CORRECT-FRENCH
 *  surface is always a defect.
 *
 *  `pas un` IS DELIBERATELY ABSENT and its absence is the point. « Ce n'est pas
 *  un livre » is this lesson's own authored content and « C'est un B comme
 *  Bernard, pas un P comme Pierre » is correct contrastive French in six
 *  published rows. A guard on `pas un` would fire on the exception the lesson
 *  was built to teach. The forms below are the ones that are wrong whatever the
 *  context. */
export const FORBIDDEN_FORMS = [
  "n'ai pas un frère", 'ai pas un frère', "n'ai pas une voiture", "n'ai pas des enfants",
  "n'est pas de livre", "n'est pas d'erreur", 'ne sont pas de amis',
  "n'aime pas de café", 'ne mange pas du pain', 'ne mange pas le pain de',
  'je ne ai pas', 'il ne est pas', 'ce ne est pas', 'elle ne a pas',
  'pas de faim', 'pas de soif', "n'ai pas de le livre",
];

/* ─── Imported and reused, split the way a1.13 introduced ────────────────────
 *
 * Separating the rows that have to be CARRIED into the seed from the rows that
 * are already in it is what makes a large import auditable. a1.13 introduced the
 * split and a1.17 kept it; this lesson has the largest carry of the three,
 * because `negation-et-restriction` is outside the seed cut and eighteen of its
 * twenty-four borrowed rows are absent from seed.json today.                  */

import { IMPORTED as IMPORTED_ROWS, REUSED as REUSED_ROWS } from './negation-imported.ts';
import { unitRef } from './_unit-ref.ts';

export const IMPORTED = IMPORTED_ROWS;
export const REUSED = REUSED_ROWS;
export const IMPORTED_IDS: string[] = IMPORTED.map((r) => r.id);
export const REUSED_IDS: string[] = REUSED.map((r) => r.id);
/** Every id this lesson uses that it did NOT author. */
export const BORROWED_IDS: string[] = [...new Set([...IMPORTED_IDS, ...REUSED_IDS])];

/* ─── Display lookups ──────────────────────────────────────────────────────
 *
 * The lesson reads every French string and every gloss through these rather
 * than restating them, so a corpus edit moves the screens with it and no card
 * can drift away from the row it is displaying. Both throw rather than
 * returning a placeholder: a lesson that renders an empty string where a
 * sentence should be is invariant §1's failure exactly.                      */

const BY_ID = new Map<string, { fr: string; en: string }>([
  ...AUTHORED_ITEMS.map((i) => [i.id, { fr: i.fr, en: i.en }] as const),
  ...IMPORTED.map((i) => [i.id, { fr: i.fr, en: i.en }] as const),
  ...REUSED.map((r) => [r.id, { fr: r.fr, en: r.en }] as const),
]);

export function frOf(id: string): string {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`${unitRef('a1.18')}: no French for ${id}. It is neither authored, imported nor reused.`);
  return r.fr;
}
export function enOf(id: string): string {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`${unitRef('a1.18')}: no gloss for ${id}. It is neither authored, imported nor reused.`);
  return r.en;
}
