// The a2.17 corpus: what this lesson authored, what it imports, what it repaired,
// what it refused to touch, and the claims its brief got wrong.
//
// THIS FILE IS THE SINGLE SOURCE OF TRUTH for the 24 authored entries below and
// for every respelling a2.17 puts on a screen. The lesson body reads `fr`,
// `ipa`, `respell` and `en` FROM HERE and never restates them.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE GENERAL PRINCIPLE
//
//  THE ADVERB IS NOT BUILT FROM THE FEMININE'S SPELLING. IT IS BUILT FROM THE
//  FEMININE'S SOUND, AND THE SOUND IS A CONSONANT THE MASCULINE DOES NOT HAVE.
//
//  The brief frames the Owns as "the derivation, and it is the payoff of the
//  previous lesson but one", with the chain lent → lente → lentement. That is
//  right and it is only half of what the corpus says. Measured against
//  respellings other people published:
//
//    lent      LAHⁿ        lente     LAHⁿT       lentement     lahⁿt-MAHⁿ
//    doux      DOO         douce     DOOS        doucement     doos-MAHⁿ
//    sérieux   say-RYUH    sérieuse  say-RYUHZ   sérieusement  say-ryuhz-MAHⁿ
//
//  Read the columns rather than the rows. THE FEMININE IS THE MASCULINE PLUS ONE
//  CONSONANT, AND THE ADVERB IS THE FEMININE PLUS -MAHⁿ. Three adjectives, three
//  different consonants (T, S, Z), no exception. It is arithmetic:
//
//    femRespell    === mascRespell + consonant
//    adverbRespell === femRespell.toLowerCase() + '-MAHⁿ'
//
//  So a learner who builds the adverb off the MASCULINE does not produce a
//  spelling mistake. They produce a sound that is missing a consonant, and they
//  can hear that they did. That is doctrine §B.5's "the sound": forms spelled
//  apart and heard together, running in reverse — a letter that is silent in the
//  masculine comes back to life in the adverb.
//
//  THE sérieux ROW IS ENTIRELY SOMEBODY ELSE'S DATA. `say-RYUH` is
//  fr.sons.adjectifs-essentiels.037, `say-RYUHZ` is fr.a2.adjectifs-essentiels.019
//  — a2.03's own authored row — and `say-ryuhz-MAHN` is
//  fr.sons.adverbes-essentiels.021, three rows by three authors in two themes.
//  This build changed one character in the third of them. That is the a2.03
//  payoff in the strongest form available: the learner's card from seq 10 is a
//  cell in this lesson's hero table, unedited.
//
// ══════════════════════════════════════════════════════════════════════════
//
// ── WHAT THE BRIEF GOT WRONG, MEASURED 2026-08-13 ─────────────────────────
//
// 1. "The theme is `adverbes-essentiels`, which exists and holds rows.
//    `adverbes` (no suffix) has 0 rows and does not exist."
//
//    TRUE, AND IT CONTRADICTS THE LEDGER, WHICH IS THE DOCUMENT THAT BINDS.
//    Ledger §3 says in as many words: "`adverbes` is still empty and `a2.17`
//    should not create it either: an adverb built off a feminine adjective
//    belongs beside the adjective it is built from", and it reserves
//    `fr.a2.adjectifs-essentiels.081..120` for this build. That reservation was
//    made against a probe of `adverbes` and NOBODY PROBED `adverbes-essentiels`.
//
//      theme adverbes                0 rows        does not exist
//      theme adverbes-essentiels   325 rows        325 published
//        fr.a1.adverbes-essentiels   191 rows      max .191
//        fr.sons.adverbes-essentiels 134 rows      max .134
//        fr.a2.adverbes-essentiels     0 rows      NEXT FREE = .001
//
//    It is §3's own opening error one level down: "The question was asked the
//    wrong way round." It was asked the wrong way round twice, about the same
//    two words, eight days apart. See THEME below for the decision and the
//    ledger amendment.
//
// 2. "All eleven exist." TRUE, AND IT UNDERSTATES IT BY A FACTOR OF THIRTY.
//    `adverbes-essentiels` holds 120 adverb headwords and 358 single-word
//    `-ment` rows exist across the corpus. Every adverb this lesson teaches is
//    imported. NOT ONE ADVERB IS AUTHORED.
//
//    What IS absent is the other half of the derivation: FOUR ADJECTIVES.
//    `lente`, `douce`, `évident` and `constant` do not exist at any status in
//    any theme, and the first two are the middle step of the chain the lesson is
//    built on. Corrections §2 predicts "you will author almost no headwords" and
//    is right about the adverbs and wrong about the adjectives.
//
// 3. "EIGHT OF ELEVEN CARRY A BROKEN NASAL." TRUE, AND THE REAL NUMBER IS 499.
//
//      rows whose respell contains MAHN   499
//      rows whose respell contains MAHⁿ    79
//      of the MAHN rows, in adverbes-essentiels alone   109
//
//    This build repairs TEN, which is every row it displays, and touches none of
//    the other 489. Invariants §9: repair only what breaks a stated rule on a
//    screen you are putting it on. See THE_MENT_CONVENTION.
//
// 4. "`kohns-ta-MAHN` has a first nasal followed by s inside the token and the
//    checker cannot see it. Split your repair table."
//
//    TRUE, AND THE SPLIT DOES NOT GO WHERE CORRECTIONS §6 PUTS IT. §6 splits by
//    ROW — RESPELL_REPAIRS_VISIBLE against RESPELL_REPAIRS_INVISIBLE — and that
//    assumes one nasal per row. A `-ment` adverb built off a nasal stem carries
//    TWO NASALS IN ONE STRING, one visible and one not:
//
//      lentement    lahnt-MAHN    flagged      the final MAHN is token-final
//                   lahnt-MAHⁿ    NOT flagged  and `lahnt` is still wrong
//                   lahⁿt-MAHⁿ    NOT flagged  and correct
//
//    Repairing what the checker reports produces a value it calls clean and
//    which is still wrong, ON THE SAME ROW. That is corrections §6's `entendre`
//    finding one level in: it is not two kinds of row, it is two kinds of nasal,
//    and a per-row table cannot express it. REPAIRS below carries `half` on every
//    entry and the batch asserts all three values through the real function.
//
// 5. "This is your `listening` item and your dictée item." TRUE FOR THE DICTÉE
//    AND CONSTRAINED FOR THE LISTENING, and the constraint is corrections §5.
//    `-emment` and `-amment` are ONE SOUND, so a listenChoose offering
//    « évidemment » against « évidamment » has no correct answer. What an ear
//    question may ask is which ADJECTIVE a heard adverb came from, because the
//    stems differ audibly. SUFFIX_HOMOPHONES enforces it.
//
//    And the dictée had to be the BARE WORDS. Measured through the real
//    `dicteeMode`: « C'est évidemment vrai. » is 18 letters and « Il travaille
//    constamment. » is 22, so both spell in WORD mode, where every real word is
//    handed over pre-spelled. `évidemment` (10) and `constamment` (11) spell in
//    LETTERS. Corrections §4 chose the frame here as it did everywhere else.
//
// 6. "French puts the adverb after the conjugated verb, where English puts it
//    before. The learner's instinct is wrong and it is wrong consistently."
//
//    TRUE, AND IT IS MEASURABLE RATHER THAN ASSERTABLE. Across 27,499 published
//    sentences, matched on eleven common verbs against nine common adverbs:
//
//      verb + adverb    76 published sentences
//      adverb + verb     0
//
//    Zero. The rule is not a tendency in this corpus, it is exceptionless, and
//    PLACEMENT_EVIDENCE records the figure so a later author can re-run it.
//
// 7. "Include at least two adjectives the lesson never lists." TRUE, AND THE TWO
//    HAD TO BE CHOSEN AGAINST THE CORPUS RATHER THAN FOR CONVENIENCE. The answer
//    to a production question has to be a real French word, so the unseen
//    adjective's adverb must EXIST even though the adjective must not appear:
//
//      parfait        fr.sons.adjectifs-essentiels.047   exists, not in this lesson
//      parfaite       ABSENT
//      parfaitement   fr.sons.adverbes-essentiels.014    exists
//      certain        ABSENT
//      certaine       ABSENT
//      certainement   fr.sons.adverbes-essentiels.015    exists
//
//    Neither adverb is imported, because importing it would put the answer in
//    the lesson's own vocabulary and delete the question. UNSEEN below, and the
//    guards assert the absence in both directions.
//
// ── WHAT THIS BUILD FOUND THAT NO BRIEF MENTIONS ──────────────────────────
//
// 8. THE HOUSE HAS ALREADY MADE THE -ment DECISION AND THE ADVERB THEME IS THE
//    OUTLIER. Three of the words this lesson teaches are respelled TWICE in
//    Postgres, once as a headword and once inside a published sentence, and the
//    two disagree:
//
//      lentement   fr.sons.adverbes-essentiels.001   lahnt-MAHN
//                  fr.sons.nasales.013               ... lahⁿt-MAHⁿ
//      doucement   fr.sons.adverbes-essentiels.003   doos-MAHN
//                  fr.sons.nasales.014               ... doos-MAHⁿ
//      bien        fr.sons.mots-essentiels.045       BYAN
//                  fr.sons.nasales.078               ... BYEHⁿ
//
//    The sentence half is right in all three, and all three sentences are
//    imported by this lesson, so the two halves would sit on one screen. That is
//    a2.16 §7's rule exactly: a variant is not a violation, but two halves of one
//    pair that disagree ON THE SAME SCREEN are. EVERY REPAIRED VALUE IN THIS
//    BUILD WAS READ OFF A PUBLISHED ROW. Nothing was invented.
//
// 9. THE -emment / -amment CLASS IS NOT AN EXCEPTION TO THE SPELLING. IT IS AN
//    EXCEPTION TO THE RULE ITSELF, and the brief calls it a spelling trap.
//    `évidente` + ment is `évidentement`, which is not a word. The feminine is
//    not involved at all: the -ent/-ant ending is REPLACED. So this is the one
//    place in the lesson where the reframe must not be run, and saying "two
//    spellings, one sound" without saying "and neither is built from the
//    feminine" leaves the learner applying the rule they were just given.
//    NOT_FROM_FEMININE, and the batch asserts the two feminines appear nowhere.
//
// 10. a2.17 IS A LEAF. No unit at any level declares it as a prerequisite,
//     measured against all 76 curriculum units.
//
// 11. THE COMPOUND-TENSE DEFERRAL IS NOT HYPOTHETICAL: 82 PUBLISHED SENTENCES
//     PUT A SHORT ADVERB BETWEEN THE AUXILIARY AND THE PARTICIPLE, and one of
//     them (fr.a1.adverbes-essentiels.055, « Franchement, ce film m'a beaucoup
//     déçu. ») is in this lesson's own theme. A learner who browses the adverb
//     deck will meet the rule this lesson defers. DEFERRAL_LINE says so in one
//     sentence and a2.05 is named. Nothing here conjugates a compound tense.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
const Cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE THEME, AND IT IS A LEDGER DECISION THIS BUILD HAD TO MAKE
 *
 *  Ledger §3 reserved `fr.a2.adjectifs-essentiels.081..120` for a2.17 and gave
 *  the reason: "an adverb built off a feminine adjective belongs beside the
 *  adjective it is built from". The reasoning is good and the premise is wrong,
 *  because §3 probed `adverbes` (0 rows) and never probed `adverbes-essentiels`
 *  (325 published rows, 120 of them adverb headwords, including every single
 *  adverb this lesson teaches).
 *
 *  So the decision is the same one a2.03 made, about the other theme: WRITE INTO
 *  THE LIVE THEME UNDER A NEW LEVEL NAMESPACE. No theme is created,
 *  `fr.a2.adverbes-essentiels` opens at .001, and `fr.a2.adjectifs-essentiels
 *  .081..120` goes back to the ledger unused.
 *
 *  The flashcard-hub argument settles it rather than the tidiness one:
 *  `lentement` already has a card in `adverbes-essentiels`. Authoring anything
 *  next to it in `adjectifs-essentiels` would put a second card for the same
 *  word in a second deck, which is the shape flashhub-coverage.test.ts exists to
 *  catch inside a theme and which nothing catches across two.
 * ═══════════════════════════════════════════════════════════════════════ */

export const THEME = 'adverbes-essentiels';
/** The theme the ledger reserved a block in, released unused. Named so the
 *  amendment and the guards refer to the same string. */
export const RELEASED_BLOCK = 'fr.a2.adjectifs-essentiels.081..120';

/** The unit, byte for byte from Postgres on 2026-08-13. Corrections §1 says
 *  every brief has title and sub swapped; this one does NOT, because the brief
 *  was corrected against §11 before it was handed over. Checked anyway. */
export const UNIT = {
  id: 'a2.17',
  seq: 12,
  title: 'Adverbs',
  sub: 'Les adverbes',
  canDo: 'Can build -ment adverbs, use the irregular ones, and place them correctly',
  prereqUnitIds: ['a2.03'] as const,
} as const;

/** `fr.a2.adverbes-essentiels` held exactly this many rows when a2.17 claimed
 *  `.001`. Ledger §10: the maximum tells you nothing and the row COUNT is the
 *  only signal. A NEW namespace, so the count is 0 and any row inside the block
 *  at all is somebody else landing in it. */
export const ROW_COUNT_BEFORE = 0;
export const THEME_COUNT_BEFORE = 325;
export const ID_BLOCK = { from: 'fr.a2.adverbes-essentiels.001', to: 'fr.a2.adverbes-essentiels.040' } as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  THE -ment RESPELLING CONVENTION, SETTLED FOR THE LEVEL
 *
 *  Every derived adverb in French ends in the same nasal vowel, so this decision
 *  applies to a hundred rows the level has not authored yet. It is settled by
 *  measurement rather than by taste: 79 rows in Postgres already write it the
 *  house way and 499 do not, and the 79 include every respelled SENTENCE in the
 *  sons themes that contains one.
 * ═══════════════════════════════════════════════════════════════════════ */

/** The suffix, and it is the only form any a2.17-or-later row may use. */
export const MENT = 'MAHⁿ';
export const THE_MENT_CONVENTION =
  'The suffix -ment is respelled -MAHⁿ: stressed, capitalised, closed with the superscript nasal, and hyphenated onto whatever the stem ends in. '
  + 'It is never MAHN. Invariants §3 requires the superscript and 499 published rows break it, so a build repairs the rows IT DISPLAYS and leaves the rest. '
  + 'The value was read off fr.sons.nasales.013 (lahⁿt-MAHⁿ), fr.sons.nasales.014 (doos-MAHⁿ) and fr.sons.questions.006 (koh-MAHⁿ) rather than chosen.';
/** And for the -emment / -amment class, whose suffix carries an extra vowel and
 *  is a different SOUND as well as two spellings. */
export const MENT_AMMENT = `a-${MENT}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  THE CHAIN: THREE ADJECTIVES, THREE STEPS, AND THE ARITHMETIC UNDER IT
 * ═══════════════════════════════════════════════════════════════════════ */

export type Adj = 'lent' | 'doux' | 'serieux';
export type Step = 'masc' | 'fem' | 'adverb';

/** The order the learner meets them. `sérieux` is LAST deliberately: it is the
 *  one whose three cells are entirely somebody else's published data, so it
 *  reads as a confirmation of a pattern rather than as the pattern's first
 *  instance. It is also the a2.03 payoff, and a payoff goes at the end. */
export const ADJ_ORDER: readonly Adj[] = ['lent', 'doux', 'serieux'];
export const STEP_ORDER: readonly Step[] = ['masc', 'fem', 'adverb'];

/** THE COLUMN HEADERS, AND THEIR WIDTH IS A DEVICE MEASUREMENT.
 *
 *  Ledger §a2.16-2: a five-column tapTable header breaks mid-word past six
 *  characters, and past four if two of them are `w` or `m`. This table is THREE
 *  columns, so the budget is wider and unmeasured; the same rule is applied
 *  anyway because it is the only number anybody has read off the phone.
 *
 *  `Plain` and `For her` are a2.16's FORM_LABEL values byte for byte, which is
 *  deliberate: the learner met that grid one lesson ago and the first two
 *  columns of this one are the same two columns. */
export const STEP_LABEL: Record<Step, string> = {
  masc: 'Plain',
  fem: 'For her',
  adverb: 'How',
};
export const HEADER_WORD_MAX = 6;

/** THE CELL BUDGET, AND IT IS NOW MEASURED ON A PIXEL 6 RATHER THAN GUESSED.
 *
 *  a2.16 read a FIVE-column cell at about six characters and asked a2.17 to find
 *  the number before reaching for a wide table. Read off the phone on
 *  2026-08-13, on this lesson's own two three-column tapTables:
 *
 *    doucement    9 chars    ONE LINE   (s04-place, and so are souvent/toujours)
 *    lentement    9 chars    ONE LINE   (s07-chain)
 *    sérieusement 12 chars   BROKE      sérieusemen|t
 *
 *  So A THREE-COLUMN CELL ON A PIXEL 6 HOLDS ELEVEN CHARACTERS, and the band now
 *  has two points on the curve: six at five columns, eleven at three.
 *
 *  THE WRAP IS ACCEPTED RATHER THAN DESIGNED AROUND, which is a2.16's precedent
 *  with `nouvelles`. It falls on one row, it is consistent, the cell stays
 *  inside its box and the word stays legible. The alternative was dropping
 *  `sérieux` for a shorter third adjective, and that row is a2.03's own card in
 *  all three cells: it is the payoff, and trading the lesson's best evidence for
 *  a line break would be the wrong way round. */
export const CHAIN_CELL_MAX = 12;
/** Measured: anything at or under this sets on one line. */
export const CHAIN_CELL_MEASURED = 11;
/** And the one cell in this lesson that is over it, named so a later author
 *  knows it was a decision rather than an oversight. */
export const CHAIN_CELL_WRAPS: readonly string[] = ['sérieusement'];

/** Three adjectives across, three steps down, plus the consonant the feminine
 *  adds and the masculine does not have. `forms` is the WORD ALONE so a grid can
 *  print a cell without repeating a frame in every box; `respells` likewise.
 *  Both are compared against the authored and imported rows in all three layers:
 *  a2.13 §6.2 shipped a grid that disagreed with the cards the learner was
 *  scored on, and a2.14 §5 found the same shape one file apart. */
export const CHAIN: readonly {
  step: Step;
  forms: Record<Adj, string>;
  respells: Record<Adj, string>;
}[] = [
  {
    step: 'masc',
    forms: { lent: 'lent', doux: 'doux', serieux: 'sérieux' },
    respells: { lent: 'LAHⁿ', doux: 'DOO', serieux: 'say-RYUH' },
  },
  {
    step: 'fem',
    forms: { lent: 'lente', doux: 'douce', serieux: 'sérieuse' },
    respells: { lent: 'LAHⁿT', doux: 'DOOS', serieux: 'say-RYUHZ' },
  },
  {
    step: 'adverb',
    forms: { lent: 'lentement', doux: 'doucement', serieux: 'sérieusement' },
    respells: { lent: `lahⁿt-${MENT}`, doux: `doos-${MENT}`, serieux: `say-ryuhz-${MENT}` },
  },
];

/** The consonant the feminine adds, per adjective. NOT restated: derived off the
 *  respellings, so it cannot disagree with the cells the learner is scored on.
 *  Three adjectives and three DIFFERENT consonants, which is why three rows is
 *  enough to make it a rule rather than a coincidence. */
export function addedConsonant(a: Adj): string {
  const m = stepRespell(a, 'masc');
  const f = stepRespell(a, 'fem');
  if (!f.startsWith(m)) {
    throw new Error(`adverbes-corpus: ${a}'s feminine ${f} does not start with its masculine ${m}`);
  }
  return f.slice(m.length);
}

/** THE ARITHMETIC, AND IT IS THE WHOLE LESSON.
 *
 *    the feminine    is the masculine plus one consonant
 *    the adverb      is the feminine plus -MAHⁿ
 *
 *  Both are checked against the CHAIN constant in all three layers rather than
 *  asserted in a sentence, because a sentence in a report cannot fail. */
export const femCheck = (a: Adj): boolean =>
  stepRespell(a, 'fem') === stepRespell(a, 'masc') + addedConsonant(a);
export const adverbCheck = (a: Adj): boolean =>
  stepRespell(a, 'adverb') === `${stepRespell(a, 'fem').toLowerCase()}-${MENT}`;

export const SOUND_CLAIM =
  'The woman form is the plain one plus a consonant, and the word for how is the woman form plus a sound on the end. Nothing in the middle changes.';
export const CONSONANT_CLAIM =
  'That consonant is silent in the plain form and you say it in the long word. Build the long word off the wrong one and the mistake is a sound you can hear, not a spelling you cannot.';
/** SHORT ON PURPOSE. Quoted on three CORE screens, and density.logic.ts caps a
 *  core screen at 45 words per string. */
export const CHAIN_CLAIM =
  'Three steps and the middle one is the one people skip. Plain form, woman form, then the ending.';

/* ══════════════════════════════════════════════════════════════════════════
 *  THE CASE WHERE NOTHING VISIBLE HAPPENS
 *
 *  An adjective already ending in -e has the same woman form as its plain form,
 *  so the rule runs and changes nothing. That is not an exception and it must
 *  not be taught as one: it is the rule working on a word where the two steps
 *  happen to look alike, and a learner who thinks it is a second rule has two
 *  rules to remember instead of one.
 * ═══════════════════════════════════════════════════════════════════════ */

export const ALREADY_E: readonly { adj: string; adverb: string; adjRespell: string; adverbRespell: string }[] = [
  { adj: 'rapide', adverb: 'rapidement', adjRespell: 'rah-PEED', adverbRespell: `ra-peed-${MENT}` },
  { adj: 'facile', adverb: 'facilement', adjRespell: 'fah-SEEL', adverbRespell: `fa-seel-${MENT}` },
];
export const ALREADY_E_CLAIM =
  'Some of them already end in an e, so the woman form is the same word and there is nothing to change. The rule still ran. It just had nothing to do.';

/* ══════════════════════════════════════════════════════════════════════════
 *  TRAP ONE: THE THREE THAT ARE NOT BUILT AT ALL
 *
 *  bien, mal and vite are the three commonest adverbs in the language and not
 *  one of them is derived. A rule covering fifty words that misses the three
 *  most used has to say so out loud rather than leave the learner to find out.
 * ═══════════════════════════════════════════════════════════════════════ */

export const IRREGULARS = ['bien', 'mal', 'vite'] as const;
export type Irregular = (typeof IRREGULARS)[number];
/** adjective -> adverb, for the two that break the pairing English speakers
 *  rely on. `vite` has no adjective at all, which is the third kind of break. */
export const IRREGULAR_FROM: Record<Irregular, string | null> = {
  bien: 'bon',
  mal: 'mauvais',
  vite: null,
};
export const IRREGULAR_CLAIM =
  'Three of them are not built from anything. They are the three you will say most often, and they are the three the rule does not reach.';
/** THE bon/bien CONFUSION, and it is the classic error. `bon` describes a thing
 *  and `bien` describes what somebody DOES, and English uses "good" for both in
 *  speech. The wrong forms appear only where they are marked wrong. */
export const BON_BIEN_CLAIM =
  'Bon goes with a thing and bien goes with what somebody does. English lets you say « he sings good » and be understood; French does not let you say it at all.';
export const BON_BIEN_WRONG = ['chante bon', 'parle bon', 'travaille bon', 'joue bon', 'chante mauvais'] as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  TRAP TWO: TWO SPELLINGS, ONE SOUND, AND NEITHER IS BUILT FROM THE FEMININE
 *
 *  Header item 9. The brief calls this a spelling trap and it is bigger than
 *  that: for an adjective ending in -ent or -ant the ending is REPLACED, so the
 *  reframe must not be run at all. Saying "two spellings, one sound" without
 *  saying "and the feminine is not involved" leaves the learner producing
 *  `évidentement`.
 * ═══════════════════════════════════════════════════════════════════════ */

export const AMMENT: readonly {
  adj: string; adverb: string; adjEnding: string; adverbEnding: string;
  adjRespell: string; adverbRespell: string;
}[] = [
  { adj: 'évident', adverb: 'évidemment', adjEnding: '-ent', adverbEnding: '-emment', adjRespell: 'ay-vee-DAHⁿ', adverbRespell: `ay-vee-da-${MENT}` },
  { adj: 'constant', adverb: 'constamment', adjEnding: '-ant', adverbEnding: '-amment', adjRespell: 'kohⁿs-TAHⁿ', adverbRespell: `kohⁿs-ta-${MENT}` },
];
/** The two feminines that must appear NOWHERE, because they play no part.
 *  `évidente + ment` is the mistake this screen exists to stop. */
export const NOT_FROM_FEMININE = ['évidente', 'constante', 'évidentement', 'constantement', 'évidenteme', 'constanteme'] as const;
export const AMMENT_CLAIM =
  'Two endings on the page and one sound in the mouth. One is spelled with an e and one with an a, and both of them come out as the same two syllables.';
export const AMMENT_RULE_CLAIM =
  'And these two do not use the woman form at all. The ending on the adjective is taken off and replaced, so this is the one place in the lesson where the rule is not the answer.';
/** The shared tail of both adverbs' respellings, derived rather than restated.
 *  If the two ever stop sharing it the screen is claiming something the corpus
 *  no longer supports. */
export const ammentTail = (): string => {
  const tails = AMMENT.map((x) => x.adverbRespell.slice(-MENT_AMMENT.length));
  return tails[0];
};

/* ══════════════════════════════════════════════════════════════════════════
 *  TRAP THREE: PLACEMENT, AND IT IS MEASURED
 * ═══════════════════════════════════════════════════════════════════════ */

export const PLACEMENT_CLAIM =
  'The word for how goes after the verb. English puts it in front, and French never does.';
/** Measured 2026-08-13 over 27,499 published sentences, eleven common verbs
 *  against nine common adverbs. Recorded so a later author re-runs it rather
 *  than trusting a sentence, and the batch DOES re-run it against Postgres on
 *  every apply.
 *
 *  THE FIRST FIGURE HERE WAS 76 AND IT WAS WRONG, AND THE REASON IS INVARIANTS
 *  §0 IN A THIRD ENGINE. The pre-flight probe built its search out of a
 *  JavaScript regex using `\b`, which is ASCII-ONLY: `répond`, `écoute` and
 *  `marché` sit next to accented characters and four sentences were silently
 *  dropped. Postgres `~*` with `\y` finds eighty. The batch's re-measurement is
 *  the one that counts, because it is the one that runs on every apply, and it
 *  caught this on the first dry run.
 *
 *  THE ZERO IS THE FIGURE THAT MATTERS and both engines agree on it. */
export const PLACEMENT_EVIDENCE = { verbThenAdverb: 80, adverbThenVerb: 0, of: 27499 } as const;
/** The English order, and it appears ONLY where it is marked wrong. */
export const ENGLISH_ORDER = [
  'Je souvent mange', 'Il lentement parle', 'Elle bien chante', 'Je toujours mange',
  'Il vite court', 'Elle souvent parle', 'Je bien parle',
] as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  WHAT IS LEFT TO NEIGHBOURS
 * ═══════════════════════════════════════════════════════════════════════ */

/** a2.03, seq 10, this lesson's prerequisite and the source of the middle step.
 *  Its reframe is quoted verbatim: the learner built the woman form there and
 *  was never told what it was for. */
export const AGREEMENT_UNIT = 'a2.03';
export const A203_REFRAME = 'The plain form tells you the other three.';
export const AGREEMENT_CLAIM =
  `${Cap(unitRef(AGREEMENT_UNIT))} said the plain form tells you the other three, and you have been building the woman form ever since without being told what it was for. This is what it was for.`;

/** a1.18, seq 21 at A1, shipped. Negation is NOT re-taught. Its own wording is
 *  quoted rather than paraphrased, because a paraphrase that drifts is how two
 *  lessons come to contradict each other about the same word order. */
export const NEGATION_UNIT = 'a1.18';
export const A118_REFRAME = 'Wrap the verb, then ask what the verb was.';
export const NEGATION_LINE =
  `${Cap(unitRef(NEGATION_UNIT))} wraps the verb in two words, and the word for how waits outside it: « Je ne mange pas souvent. »`;
/** The one sentence the negation line prints, so a guard can pin it to that one
 *  location rather than banning the word `pas` from the lesson. */
export const NEGATION_EXAMPLE = 'Je ne mange pas souvent.';

/** a2.05, seq 16, four lessons after this one. THE DEFERRAL. */
export const PASSE_UNIT = 'a2.05';
export const DEFERRAL_LINE =
  `In a past tense the short ones move, and that rule arrives with the tense in ${unitRef(PASSE_UNIT)}. If you meet « j'ai bien mangé » before then, nothing here is wrong: it is a rule you have not been given yet.`;
/** Nothing in this lesson may conjugate a compound tense. The auxiliaries plus a
 *  participle, as a shape rather than a word list. */
/** THE PARTICIPLES, AS A LIST RATHER THAN AS A SUFFIX, AND THAT IS a2.14 §6:
 *  guard the THING rather than the letters. The first two versions of this shape
 *  matched an auxiliary followed by any word ending in é, i, is, it, u, us or ue,
 *  and both were caught by its own MUST_NOT_FIRE list on English prose:
 *
 *    "You did not stall ON A WORD YOU had not learned."
 *
 *  `on` is a French subject pronoun, `a` is a French auxiliary, and `you` ends
 *  in a u. A learner surface in this course is half English by design
 *  (invariants §8), so a shape built out of French morphology alone reads the
 *  English as French. */
const COMPOUND_PARTICIPLES = [
  'mangé', 'travaillé', 'chanté', 'parlé', 'joué', 'marché', 'écouté', 'regardé',
  'aimé', 'habité', 'donné', 'trouvé', 'arrivé', 'allé', 'monté', 'tombé',
  'entré', 'resté', 'passé', 'commencé', 'déjeuné', 'déménagé', 'répété',
  'dormi', 'fini', 'choisi', 'réussi', 'grandi', 'sorti', 'parti', 'senti', 'servi',
  'pris', 'mis', 'compris', 'appris', 'assis', 'dit', 'écrit', 'fait',
  'vu', 'bu', 'lu', 'reçu', 'venu', 'tenu', 'voulu', 'pu', 'dû', 'su', 'connu',
  'entendu', 'attendu', 'vendu', 'répondu', 'perdu', 'couru', 'été', 'eu',
] as const;
const escP = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
/** The bases are the masculine singular and the agreement is a suffix, so
 *  `arrivé` also catches `arrivée`, `arrivés` and `arrivées`. Writing the four
 *  out by hand is the version that ships three of them and misses the fourth,
 *  and this shape's own MUST_FIRE list caught exactly that on the third run. */
const AGREEMENT = '(?:e|s|es)?';
/** IT ALSO REQUIRES A FRENCH SUBJECT PRONOUN IN FRONT OF THE AUXILIARY, and the
 *  left boundary allows an apostrophe. Without the apostrophe the shape could
 *  not see « j'ai bien mangé », which is the exact phrase the brief names: the
 *  house lookbehind `(?<![\p{L}\p{N}'’-])` excludes an `'`. */
export const COMPOUND_SHAPE = new RegExp(
  `(?<![\\p{L}\\p{N}-])(?:j['’]|(?:je|tu|il|elle|on|nous|vous|ils|elles)\\s+)`
  + `(?:ai|as|a|avons|avez|ont|suis|es|est|sommes|êtes|sont)\\s+(?:\\p{L}+\\s+)?`
  + `(?:${COMPOUND_PARTICIPLES.map(escP).join('|')})${AGREEMENT}(?![\\p{L}\\p{N}'’-])`, 'iu');
/** Proof the shape fires on what it exists for and spares what it must. A guard
 *  that cannot fire is worse than none, and one that fires on « Il est lent. »
 *  or on this lesson's own English prose would take the build with it. */
export const COMPOUND_MUST_FIRE = [
  "j'ai bien mangé", 'il a beaucoup travaillé', 'elle a bien chanté', 'nous avons mal dormi',
  'elle est bien arrivée', 'vous avez vite compris', "j'ai mal dormi",
] as const;
export const COMPOUND_MUST_NOT_FIRE = [
  'Il est lent.', 'Elle est lente.', 'Il est doux.', 'Elle est douce.', 'Il est évident.',
  'Il est constant.', 'Elle est constante.', 'Il parle lentement.', "C'est un bon jour.",
  'Il court vite.', 'Il réussit toujours.', 'Elle est sérieuse.',
  // The two English sentences that broke the first two versions of the shape.
  'You did not stall on a word you had not learned.',
  'You stalled on where to put one, and your first language answered before you did.',
] as const;

/** a2.08, seq 32. `mieux` is the comparative of `bien` and it is tempting
 *  because `bien` is here. It appears NOWHERE, and the guards say so by name. */
export const COMPARATIVE_UNIT = 'a2.08';
export const RESERVED_FOR_A208 = ['mieux', 'plus vite', 'le mieux', 'moins vite'] as const;

/** a2.16, seq 11, the lesson immediately before this one. It is named once, in
 *  the roundup, because its `Plain` and `For her` columns are the first two
 *  columns of this lesson's hero and the continuity is worth one line. */
export const PREVIOUS_UNIT = 'a2.16';

/* ══════════════════════════════════════════════════════════════════════════
 *  THE GENERALISATION TEST
 *
 *  Doctrine §B.1: a mission that makes the learner produce a form from a word
 *  the lesson never showed them has taught the system. Header item 7: the
 *  adjective must be absent from this lesson and its adverb must be a real
 *  French word, so both were chosen against the corpus.
 * ═══════════════════════════════════════════════════════════════════════ */

export const UNSEEN: readonly { adj: string; fem: string; adverb: string; why: string }[] = [
  {
    adj: 'parfait', fem: 'parfaite', adverb: 'parfaitement',
    why: `The adjective is fr.sons.adjectifs-essentiels.047 and is NOT imported by this lesson; the adverb is fr.sons.adverbes-essentiels.014 and is not imported either. Its feminine is the regular -e, so ${unitRef('a2.03')} supplies step two and this lesson supplies step three.`,
  },
  {
    adj: 'certain', fem: 'certaine', adverb: 'certainement',
    why: 'The adjective does not exist at any status in any theme, so the learner cannot have met it as a card. The adverb is fr.sons.adverbes-essentiels.015. Chosen as the harder of the two: nothing in the corpus can have taught it.',
  },
];
export const UNSEEN_CLAIM =
  'Two of these you have never seen in this lesson. If the rule is a rule, that does not matter.';
/** Every string that must appear ONLY in the two exam questions that ask for
 *  it. Derived, so adding a third unseen word cannot quietly escape the check. */
export const UNSEEN_WORDS: readonly string[] = UNSEEN.flatMap((u) => [u.adj, u.fem, u.adverb]);

/* ══════════════════════════════════════════════════════════════════════════
 *  WHAT IS AUDIBLE, AND WHAT NO EAR QUESTION MAY ASK
 *
 *  Corrections §5. The two suffixes -emment and -amment are ONE SOUND, so a
 *  listenChoose offering two options that differ only there has no correct
 *  answer and marking one right certifies a bug.
 * ═══════════════════════════════════════════════════════════════════════ */

export const SUFFIX_HOMOPHONES: readonly (readonly [string, string])[] = [
  ['emment', 'amment'],
  ['évidemment', 'évidamment'],
  ['constamment', 'constemment'],
];
/** What an ear question MAY ask about: the stem, which is audible, and the
 *  consonant the feminine adds, which is the Owns. */
export const AUDIBLE_CLAIM =
  'Your ear gets the front of the word. It does not get the ending, because every one of these ends the same way.';

/* ══════════════════════════════════════════════════════════════════════════
 *  THE REFRAME
 * ═══════════════════════════════════════════════════════════════════════ */

/** A production rule, doctrine §B.4: six words, runnable in the half-second
 *  between the verb and the adverb.
 *
 *  `Say`, NOT `take`. The brief's candidate is "Take the feminine, add -ment"
 *  and the one word that changes is the one that matters: `take` is an operation
 *  on the page and `say` is an operation in the mouth, and the mouth is where
 *  the consonant the adverb keeps actually lives. A learner who TAKES `lente`
 *  and adds `-ment` gets the right letters; a learner who SAYS it hears the T
 *  arrive and knows, half a second later, whether they built it off the right
 *  form. */
export const REFRAME = 'Say the feminine, then add -ment.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Take the feminine, add -ment.',
    why: 'The brief\'s candidate, and it is one word away. `Take` describes a spelling operation and the whole measured finding of this build is that the operation is audible: the feminine\'s last consonant is silent in the masculine and pronounced in the adverb. `Say` is what makes the rule self-checking mid-sentence, which is the doctrine §B.4 test.',
  },
  {
    text: '-ment is the French equivalent of -ly.',
    why: 'Recorded in the brief as the thing to avoid and it is right. It is a translation rather than a procedure: it tells the learner what the ending means and nothing about what to put it on, which is the entire difficulty.',
  },
  {
    text: 'The plain form tells you the other three.',
    why: `${Cap(unitRef('a2.03'))}\'s reframe verbatim. It is still true and it is the reason this lesson can exist at all, which is exactly why it cannot be this one. AGREEMENT_CLAIM quotes it and says what the other three were for.`,
  },
  {
    text: 'Wrap the verb, then ask what the verb was.',
    why: `${Cap(unitRef('a1.18'))}\'s, verbatim. Negation is named in one line and re-taught nowhere; taking its reframe would claim its work.`,
  },
  {
    text: 'The adverb goes after the verb.',
    why: 'One of the three traps rather than the Owns, and it is a fact about position rather than a rule for building anything. It is PLACEMENT_CLAIM and it carries act 2.',
  },
  {
    text: 'Say the feminine out loud, then put -ment on the end.',
    why: 'The same rule, five words longer, and the extra words are all instruction rather than content. density.logic.ts caps an xl string at 12 words and doctrine §B.4 asks whether it survives recall mid-utterance; six words does and eleven is a sentence you have to remember.',
  },
];

/** The move the reframe cashes out to, said once in the terms and once in the
 *  sheet. */
export const THE_MOVE =
  'Find the word that describes a woman, say it, and put -ment on the end of it. If you cannot hear a consonant before the ending, you built it off the wrong form.';

/* ══════════════════════════════════════════════════════════════════════════
 *  THE ROWS
 * ═══════════════════════════════════════════════════════════════════════ */

type Role = 'adjective' | 'pair' | 'adverb' | 'irregular' | 'amment' | 'scene';

export type AdvRow = Omit<Item, 'drills'> & {
  drills: string[];
  role: Role;
  /** Set on rows that belong to one of the three chain adjectives, so a guard
   *  can find the cell it wants rather than parsing the French. */
  adj?: Adj;
  step?: Step;
};

const W = (
  id: string, fr: string, en: string, respell: string, ipa: string,
  role: Role, drills: string[], notes: string, adj?: Adj, step?: Step,
): AdvRow => ({
  id, kind: 'word', level: 'a2', theme: THEME, fr, en, ipa, respell,
  notes, tags: ['adverbes-essentiels', 'adverbes'], drills, version: 1, role, adj, step,
});

const S = (
  id: string, fr: string, en: string, respell: string, ipa: string,
  role: Role, drills: string[], tags: string[], notes: string,
  adj?: Adj, step?: Step,
): AdvRow => ({
  id, kind: 'sentence', level: 'a2', theme: THEME, fr, en, ipa, respell,
  notes, tags, drills, version: 1, role, adj, step,
});

/** A row carries `dictation` only if `dicteeMode()` puts it in LETTERS mode.
 *  Corrections §4: WORD mode hands every real word over pre-spelled, so a lesson
 *  about a spelling tested in word mode is testing nothing. The batch runs the
 *  real `dicteeMode` over every row carrying this drill AND over every row that
 *  does not, so a row that could be a target and is not gets reported. */
const D = ['sentence', 'flashcard', 'voiceflash', 'review', 'dictation'];
const NO_D = ['sentence', 'flashcard', 'voiceflash', 'review'];
const WD = ['flashcard', 'voiceflash', 'review', 'dictation'];

/** THE 24 AUTHORED ROWS.
 *
 *  NOT ONE OF THEM IS AN ADVERB. Every adverb this lesson teaches already
 *  exists, most of them in this very theme, and all 22 are imported. What is
 *  authored is the other half of the derivation — four ADJECTIVES that do not
 *  exist anywhere — and the sentences that put the rule in a frame. Corrections
 *  §2 predicted "you will author almost no headwords" and it is right about the
 *  half of the chain everybody looked at. */
export const ADVERBES: AdvRow[] = [
  /* ── The four adjectives that do not exist ────────────────────────────────
   *
   * `lente` and `douce` are the MIDDLE STEP of the chain the lesson is built
   * on, and neither has a card anywhere in this course. `évident` and
   * `constant` are the two the rule does not reach.
   *
   * Bare, no article, no gender, matching every one of the 325 rows already in
   * this theme. An adjective is not a noun: nothing here can join a1.03's
   * ending population and the batch proves it through the real function. */
  W('fr.a2.adverbes-essentiels.001', 'lente', 'slow (feminine)', 'LAHⁿT', '/lɑ̃t/', 'adjective', ['flashcard', 'voiceflash', 'review', 'dictation'], 'The plain form is lent and you cannot hear its t. Here you can, and the long word keeps it.', 'lent', 'fem'),
  W('fr.a2.adverbes-essentiels.002', 'douce', 'soft, gentle (feminine)', 'DOOS', '/dus/', 'adjective', ['flashcard', 'voiceflash', 'review', 'dictation'], 'An s arrives on the end and it is a sound rather than a letter. Doux has none of it.', 'doux', 'fem'),
  W('fr.a2.adverbes-essentiels.003', 'évident', 'obvious', 'ay-vee-DAHⁿ', '/e.vi.dɑ̃/', 'amment', ['flashcard', 'voiceflash', 'review', 'dictation'], 'Ends in -ent, and that ending is about to be taken off rather than added to.'),
  W('fr.a2.adverbes-essentiels.004', 'constant', 'constant', 'kohⁿs-TAHⁿ', '/kɔ̃s.tɑ̃/', 'amment', ['flashcard', 'voiceflash', 'review', 'dictation'], 'Ends in -ant. Same story as the one above and a different vowel on the page.'),

  /* ── The two predicate pairs, in a2.03's own frame ────────────────────────
   *
   * Four cells in the frame a2.03 shipped at seq 10, so the learner reads them
   * against the grid they already have. The THIRD pair is not here: « Il est
   * sérieux. » and « Elle est sérieuse. » are a2.03's own published rows and
   * they are IMPORTED, which is the payoff made literal. */
  S('fr.a2.adverbes-essentiels.005', 'Il est lent.', 'He is slow.', 'eel eh LAHⁿ', '/il ɛ lɑ̃/', 'pair', D, ['adverbes', 'adv-chaine'], 'The t is on the page and nowhere else. Say it and listen for what is missing.', 'lent', 'masc'),
  S('fr.a2.adverbes-essentiels.006', 'Elle est lente.', 'She is slow.', 'eel eh LAHⁿT', '/ɛl ɛ lɑ̃t/', 'pair', D, ['adverbes', 'adv-chaine'], 'And now the t arrives. One letter on the page and one sound in the mouth, and the long word keeps both.', 'lent', 'fem'),
  S('fr.a2.adverbes-essentiels.007', 'Il est doux.', 'He is gentle.', 'eel eh DOO', '/il ɛ du/', 'pair', D, ['adverbes', 'adv-chaine'], 'An x that has never been pronounced by anybody.', 'doux', 'masc'),
  S('fr.a2.adverbes-essentiels.008', 'Elle est douce.', 'She is gentle.', 'eel eh DOOS', '/ɛl ɛ dus/', 'pair', D, ['adverbes', 'adv-chaine'], 'The x has become ce and it makes an s you can hear across a room. That s is the one the long word uses.', 'doux', 'fem'),

  /* ── The three adverbs in a frame ─────────────────────────────────────────
   *
   * The adverbs themselves are imported. These are the sentences that put them
   * after a verb, which is the second thing the lesson has to prove. */
  S('fr.a2.adverbes-essentiels.009', 'Il parle lentement.', 'He speaks slowly.', `eel PARL lahⁿt-${MENT}`, '/il paʁl lɑ̃t.mɑ̃/', 'adverb', D, ['adverbes', 'adv-chaine', 'adv-place'], 'Sixteen letters, which is exactly what the dictée will take. The t you can hear is the middle of the word.', 'lent', 'adverb'),
  S('fr.a2.adverbes-essentiels.010', 'Il parle doucement.', 'He speaks gently.', `eel PARL doos-${MENT}`, '/il paʁl dus.mɑ̃/', 'adverb', D, ['adverbes', 'adv-chaine', 'adv-place'], 'Same verb, same position, different ending on the front half. The s is doing the work.', 'doux', 'adverb'),
  S('fr.a2.adverbes-essentiels.011', 'Il travaille sérieusement.', 'He works seriously.', `eel tra-VAHY say-ryuhz-${MENT}`, '/il tʁa.vaj se.ʁjøz.mɑ̃/', 'adverb', NO_D, ['adverbes', 'adv-chaine', 'adv-place'], 'Twenty-three letters, so the dictée cannot take this one. The z is the third consonant and the third one you can hear.', 'serieux', 'adverb'),

  /* ── The case where nothing visible happens ──────────────────────────────
   *
   * Same subject, same verb, and the only thing that moves is the adverb. Both
   * adjectives already end in -e, so the rule runs and changes nothing. */
  S('fr.a2.adverbes-essentiels.012', 'Il lit rapidement.', 'He reads quickly.', `eel LEE ra-peed-${MENT}`, '/il li ʁa.pid.mɑ̃/', 'adverb', D, ['adverbes', 'adv-deja-e'], 'Rapide already ends in an e, so the woman form is the same word and the ending goes straight on.'),
  S('fr.a2.adverbes-essentiels.013', 'Il lit facilement.', 'He reads easily.', `eel LEE fa-seel-${MENT}`, '/il li fa.sil.mɑ̃/', 'adverb', D, ['adverbes', 'adv-deja-e'], 'And the second one, with the same subject and the same verb, so the only thing that moved is the word on the end.'),

  /* ── The frequency adverb, and the sentence the scene lost ───────────────── */
  S('fr.a2.adverbes-essentiels.014', 'Je mange souvent.', 'I often eat.', `zhuh MAHⁿZH soo-VAHⁿ`, '/ʒə mɑ̃ʒ su.vɑ̃/', 'adverb', D, ['adverbes', 'adv-place'], 'Fourteen letters and the whole of the placement rule. English would put the middle word first.'),

  /* ── The three that are not built at all ─────────────────────────────────
   *
   * One sentence each, all in the same frame so the position is the constant
   * and the adverb is the variable. */
  S('fr.a2.adverbes-essentiels.015', 'Elle chante bien.', 'She sings well.', 'el SHAHⁿT BYEHⁿ', '/ɛl ʃɑ̃t bjɛ̃/', 'irregular', D, ['adverbes', 'adv-irregulier', 'adv-place'], 'Not built from anything, and the one you will reach for most often.'),
  S('fr.a2.adverbes-essentiels.016', 'Il chante mal.', 'He sings badly.', 'eel SHAHⁿT MAL', '/il ʃɑ̃t mal/', 'irregular', D, ['adverbes', 'adv-irregulier', 'adv-place'], 'The opposite of the one above, and it is not mauvaisement either.'),
  S('fr.a2.adverbes-essentiels.017', 'Il parle vite.', 'He speaks fast.', 'eel PARL VEET', '/il paʁl vit/', 'irregular', D, ['adverbes', 'adv-irregulier', 'adv-place'], 'No adjective behind it at all. It is a word on its own and it always has been.'),
  S('fr.a2.adverbes-essentiels.018', "C'est un bon jour.", 'It is a good day.', 'seh-tuhⁿ bohⁿ ZHOOR', '/s‿ɛ tœ̃ bɔ̃ ʒuʁ/', 'irregular', D, ['adverbes', 'adv-irregulier'], 'Bon is in front of a thing here, which is where bon goes and where bien never does.'),

  /* ── Two spellings, one sound ────────────────────────────────────────────
   *
   * The two adjectives in a frame, and two sentences for the adverbs. The
   * dictée takes the BARE WORDS rather than these: « C'est évidemment vrai. »
   * is eighteen letters and « Il travaille constamment. » is twenty-two, and
   * both spell in WORD mode. Corrections §4. */
  S('fr.a2.adverbes-essentiels.019', 'Il est évident.', 'It is obvious.', 'eel eh-tay-vee-DAHⁿ', '/il ɛ.t‿e.vi.dɑ̃/', 'amment', D, ['adverbes', 'adv-amment'], 'Ends in -ent on the page and in a nasal in the mouth.'),
  S('fr.a2.adverbes-essentiels.020', 'Il est constant.', 'He is constant.', 'eel eh kohⁿs-TAHⁿ', '/il ɛ kɔ̃s.tɑ̃/', 'amment', D, ['adverbes', 'adv-amment'], 'Ends in -ant, and it is the same nasal as the one above. The page separates them and the mouth does not.'),
  S('fr.a2.adverbes-essentiels.021', "C'est évidemment vrai.", 'It is obviously true.', `seh-tay-vee-da-${MENT} VREH`, '/s‿ɛ.t‿e.vi.da.mɑ̃ vʁɛ/', 'amment', NO_D, ['adverbes', 'adv-amment'], 'The e in the middle of the ending is said as an a. Eighteen letters, so the word itself is the dictée row instead.'),
  S('fr.a2.adverbes-essentiels.022', 'Il travaille constamment.', 'He works constantly.', `eel tra-VAHY kohⁿs-ta-${MENT}`, '/il tʁa.vaj kɔ̃s.ta.mɑ̃/', 'amment', NO_D, ['adverbes', 'adv-amment'], 'And the a stays an a. The two endings are two letters and one noise.'),

  /* ── The scene ───────────────────────────────────────────────────────────
   *
   * Doctrine §B.2: somebody who started a sentence they could not finish. The
   * question is ordinary and the answer is four words the learner owns, in an
   * order their mouth will not produce. */
  S('fr.a2.adverbes-essentiels.023', 'Vous venez souvent ici ?', 'Do you come here often?', 'voo vuh-NAY soo-VAHⁿ ee-SEE', '/vu və.ne su.vɑ̃ i.si/', 'scene', NO_D, ['adverbes', 'adv-place'], 'Her question, and every word in it is one you have had since a1.'),
  S('fr.a2.adverbes-essentiels.024', 'Oui, je mange souvent ici.', 'Yes, I often eat here.', 'wee zhuh MAHⁿZH soo-VAHⁿ ee-SEE', '/wi ʒə mɑ̃ʒ su.vɑ̃ i.si/', 'scene', NO_D, ['adverbes', 'adv-place'], 'Five words, all of them yours, and the only difficulty was which order they go in.'),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  DERIVED SETS
 * ═══════════════════════════════════════════════════════════════════════ */

export const ADJECTIVE_ROWS = ADVERBES.filter((r) => r.role === 'adjective');
export const PAIR_ROWS = ADVERBES.filter((r) => r.role === 'pair');
export const ADVERB_ROWS = ADVERBES.filter((r) => r.role === 'adverb');
export const IRREGULAR_ROWS = ADVERBES.filter((r) => r.role === 'irregular');
export const AMMENT_ROWS = ADVERBES.filter((r) => r.role === 'amment');
export const SCENE_ROWS = ADVERBES.filter((r) => r.role === 'scene');

export const AUTHORED_IDS: string[] = ADVERBES.map((r) => r.id);

/** The headwords this build authors, and the reason. FOUR ADJECTIVES AND NOT
 *  ONE ADVERB, which is the opposite of what the brief's shape suggests. */
export const AUTHORED_HEADWORDS: Record<string, string> = {
  lente: 'ABSENT at any status in any theme, and it is the MIDDLE STEP of the chain this lesson is built on. Its respelling LAHⁿT was read off fr.sons.adverbes-essentiels.001 (lahnt-MAHN, repaired) rather than invented.',
  douce: 'ABSENT at any status in any theme, and the second middle step. DOOS was read off fr.sons.adverbes-essentiels.003 (doos-MAHN, repaired).',
  'évident': 'ABSENT. The -ent half of the two-spellings-one-sound pair, and the corpus holds the adverb (fr.sons.adverbes-essentiels.018) without the adjective it comes from.',
  constant: 'ABSENT. The -ant half. kohⁿs-TAHⁿ was read off fr.sons.adverbes-essentiels.045 (kohns-ta-MAHN), whose first nasal this build repairs and which the checker cannot see.',
};

/* ══════════════════════════════════════════════════════════════════════════
 *  THE IMPORTED ROWS
 * ═══════════════════════════════════════════════════════════════════════ */

/** The chain, by id. Every cell of the hero table resolves through here, so no
 *  screen can print a form that is not the row the learner is scored on. */
export const CHAIN_ROW: Record<Adj, Record<Step, string>> = {
  lent: {
    masc: 'fr.sons.adjectifs-essentiels.021',   // lent      LAHN -> LAHⁿ
    fem: 'fr.a2.adverbes-essentiels.001',       // lente     AUTHORED
    adverb: 'fr.sons.adverbes-essentiels.001',  // lentement lahnt-MAHN -> lahⁿt-MAHⁿ
  },
  doux: {
    masc: 'fr.sons.adjectifs-essentiels.033',   // doux      DOO
    fem: 'fr.a2.adverbes-essentiels.002',       // douce     AUTHORED
    adverb: 'fr.sons.adverbes-essentiels.003',  // doucement doos-MAHN -> doos-MAHⁿ
  },
  serieux: {
    masc: 'fr.sons.adjectifs-essentiels.037',   // sérieux      say-RYUH
    fem: 'fr.a2.adjectifs-essentiels.019',      // sérieuse     say-RYUHZ   <- a2.03's own row
    adverb: 'fr.sons.adverbes-essentiels.021',  // sérieusement say-ryuhz-MAHN -> ...MAHⁿ
  },
};

/** THE a2.03 PAYOFF, BY ID. Three published rows this build does not edit at
 *  all, and the whole third row of the hero table. */
export const A203_ROWS = {
  fem: 'fr.a2.adjectifs-essentiels.019',        // sérieuse
  mascSentence: 'fr.a2.adjectifs-essentiels.005', // Il est sérieux.
  femSentence: 'fr.a2.adjectifs-essentiels.006',  // Elle est sérieuse.
} as const;

/** The already-ends-in-e case, by id. */
export const ALREADY_E_ROW: Record<string, { adj: string; adverb: string }> = {
  rapide: { adj: 'fr.sons.adjectifs-essentiels.020', adverb: 'fr.sons.adverbes-essentiels.002' },
  facile: { adj: 'fr.sons.adjectifs-essentiels.018', adverb: 'fr.sons.adverbes-essentiels.004' },
};

/** The three that are not built, and the two adjectives they replace. */
export const IRREGULAR_ROW: Record<Irregular, string> = {
  bien: 'fr.sons.mots-essentiels.045',
  mal: 'fr.sons.mots-essentiels.046',
  vite: 'fr.sons.mots-essentiels.064',
};
export const IRREGULAR_ADJ_ROW: Record<string, string> = {
  bon: 'fr.sons.adjectifs-essentiels.003',
  mauvais: 'fr.sons.adjectifs-essentiels.004',
};

/** The frequency pair, which the placement table leans on. */
export const FREQUENCY_ROW: Record<string, string> = {
  souvent: 'fr.sons.mots-essentiels.056',
  toujours: 'fr.sons.mots-essentiels.054',
};

/** Two spellings, one sound, by id. */
export const AMMENT_ROW: Record<string, string> = {
  'évidemment': 'fr.sons.adverbes-essentiels.018',
  constamment: 'fr.sons.adverbes-essentiels.045',
};

/** THE PLACEMENT EVIDENCE, AND IT IS THE STRONGEST DATA IN THE BUILD.
 *
 *  Five published sentences that put the adverb after the conjugated verb, four
 *  of them in the `nasales` theme and every one of them ALREADY RESPELLED THE
 *  HOUSE WAY. fr.sons.nasales.013 holds `lahⁿt-MAHⁿ` while
 *  fr.sons.adverbes-essentiels.001 holds `lahnt-MAHN` for the same word: two
 *  respellings of one word in one database, and the sentence half is right.
 *  Header item 8, and every repair in this build was read off one of these. */
export const PLACEMENT_ROWS: readonly { id: string; subject: string; verb: string; adverb: string }[] = [
  { id: 'fr.sons.nasales.001', subject: 'Maman', verb: 'chante', adverb: 'souvent' },
  { id: 'fr.a2.verbes.477', subject: 'Il', verb: 'court', adverb: 'vite' },
  { id: 'fr.a2.verbes.189', subject: 'Il', verb: 'réussit', adverb: 'toujours' },
  { id: 'fr.sons.nasales.014', subject: 'Le vent', verb: 'souffle', adverb: 'doucement' },
  { id: 'fr.sons.nasales.078', subject: 'Son nom', verb: 'sonne', adverb: 'bien' },
];
/** The sixth, which does not fit the three-column shape because it carries an
 *  extra word between the verb and the adverb. It is imported anyway, because
 *  it is the row that proves `lahⁿt-MAHⁿ` is somebody else's notation. */
export const EXTRA_PLACEMENT_ROW = 'fr.sons.nasales.013'; // L'enfant mange trop lentement.

/** No cell in the placement table may be longer than this. Same extrapolation
 *  as CHAIN_CELL_MAX and the same caveat: three columns, unmeasured. */
export const PLACE_CELL_MAX = 9;

/* ══════════════════════════════════════════════════════════════════════════
 *  REPAIRS
 *
 *  TEN, AND THE SPLIT IS NOT THE ONE CORRECTIONS §6 DESCRIBES.
 *
 *  §6 splits the repair table by ROW: RESPELL_REPAIRS_VISIBLE for rows the
 *  checker flags, RESPELL_REPAIRS_INVISIBLE for rows it does not. That works
 *  when a row holds one nasal. A `-ment` adverb on a nasal stem holds TWO, and
 *  the checker sees one of them:
 *
 *    lentement   lahnt-MAHN   FLAGGED       the final MAHN ends a token
 *                lahnt-MAHⁿ   not flagged   and `lahnt` is still wrong
 *                lahⁿt-MAHⁿ   not flagged   and correct
 *
 *  So every entry carries `half`, the value you get if you repair exactly what
 *  the checker reports, and `blind` is true when `half` is not `to`. All three
 *  values are asserted through the real function in all three layers. Two of the
 *  ten are blind and both are in this lesson's own subject matter.
 * ═══════════════════════════════════════════════════════════════════════ */

export type Repair = {
  id: string; fr: string; from: string; to: string;
  /** The value you get by repairing only what `hasPlainNasalFor` reports. */
  half: string;
  /** True when the row carries a SECOND nasal the checker cannot see, so `half`
   *  is not `to` and a build that trusted the checker would ship a wrong value it
   *  calls clean. */
  blind: boolean;
  /** True when the repaired value differs from the MINIMAL repair for a house
   *  convention reason rather than a blindness one.
   *
   *  This field exists because the first version of the table did not have it and
   *  the batch caught the conflation on its own data: `bien` BYAN is FLAGGED, so
   *  the checker is not blind to it at all, and yet its half-repaired value BYAⁿ
   *  is not the correct BYEHⁿ. Two different reasons for one symptom, and a
   *  single boolean called them the same thing. */
  house: boolean;
  /** The published row the repaired value was read off, or null when the change
   *  is one character on a value nobody else holds. */
  readOff: string | null;
  why: string;
};

export const REPAIRS: readonly Repair[] = [
  {
    id: 'fr.sons.adverbes-essentiels.001', fr: 'lentement',
    from: 'lahnt-MAHN', half: 'lahnt-MAHⁿ', to: 'lahⁿt-MAHⁿ', blind: true, house: false,
    readOff: 'fr.sons.nasales.013',
    why: 'TWO NASALS, ONE VISIBLE. The final MAHN is flagged and `lahnt` is not, because its n is followed by a t inside the token. fr.sons.nasales.013 already publishes `lahⁿt-MAHⁿ` inside a sentence, so the repaired value is somebody else\'s and this row is the outlier.',
  },
  {
    id: 'fr.sons.adverbes-essentiels.045', fr: 'constamment',
    from: 'kohns-ta-MAHN', half: 'kohns-ta-MAHⁿ', to: 'kohⁿs-ta-MAHⁿ', blind: true, house: false,
    readOff: null,
    why: 'The second blind row, and the brief names it. `kohns` has an n followed by an s inside the token and the checker cannot see it. Repairing what it reports leaves a value it calls clean and which still spells a nasal vowel with a plain n.',
  },
  {
    id: 'fr.sons.adverbes-essentiels.003', fr: 'doucement',
    from: 'doos-MAHN', half: `doos-${MENT}`, to: `doos-${MENT}`, blind: false, house: false,
    readOff: 'fr.sons.nasales.014',
    why: 'One nasal, visible. fr.sons.nasales.014 publishes `doos-MAHⁿ` inside a sentence and this headword disagreed with it.',
  },
  {
    id: 'fr.sons.mots-essentiels.045', fr: 'bien',
    from: 'BYAN', half: 'BYAⁿ', to: 'BYEHⁿ', blind: false, house: true,
    readOff: 'fr.sons.nasales.078',
    why: `FLAGGED, SO IT IS A VIOLATION AND NOT A VARIANT. The minimal repair is BYAⁿ and the house value is BYEHⁿ: /ɛ̃/ is written EHⁿ across the sons themes (a-LEHⁿ, PEHⁿ, LWEHⁿ, TREHⁿ) and fr.sons.nasales.078 — which this lesson IMPORTS and prints on the same screen — already holds BYEHⁿ. ${Cap(unitRef('a2.16'))} §7: bringing one row into line with several is not inventing a spelling.`,
  },
  {
    id: 'fr.sons.adverbes-essentiels.021', fr: 'sérieusement',
    from: 'say-ryuhz-MAHN', half: `say-ryuhz-${MENT}`, to: `say-ryuhz-${MENT}`, blind: false, house: false,
    readOff: null,
    why: 'One nasal, visible, and the front half is untouched. `say-ryuhz` is what makes the arithmetic work against a2.03\'s own `say-RYUHZ`, and this build changed one character of a row two other authors had already agreed about.',
  },
  {
    id: 'fr.sons.adverbes-essentiels.002', fr: 'rapidement',
    from: 'ra-peed-MAHN', half: `ra-peed-${MENT}`, to: `ra-peed-${MENT}`, blind: false, house: false,
    readOff: null, why: 'One nasal, visible.',
  },
  {
    id: 'fr.sons.adverbes-essentiels.004', fr: 'facilement',
    from: 'fa-seel-MAHN', half: `fa-seel-${MENT}`, to: `fa-seel-${MENT}`, blind: false, house: false,
    readOff: null, why: 'One nasal, visible.',
  },
  {
    id: 'fr.sons.adverbes-essentiels.018', fr: 'évidemment',
    from: 'ay-vee-da-MAHN', half: `ay-vee-da-${MENT}`, to: `ay-vee-da-${MENT}`, blind: false, house: false,
    readOff: null, why: 'One nasal, visible. The `da` before it is the syllable that makes the -emment spelling sound like -amment, and it is untouched.',
  },
  {
    id: 'fr.sons.mots-essentiels.056', fr: 'souvent',
    from: 'soo-VAHN', half: `soo-${'VAHⁿ'}`, to: 'soo-VAHⁿ', blind: false, house: false,
    readOff: 'fr.sons.nasales.001',
    why: 'One nasal, visible, and fr.sons.nasales.001 — imported by this lesson for the placement table — already publishes `soo-VAHⁿ`.',
  },
  {
    id: 'fr.sons.adjectifs-essentiels.021', fr: 'lent',
    from: 'LAHN', half: 'LAHⁿ', to: 'LAHⁿ', blind: false, house: false,
    readOff: null,
    why: 'One nasal, visible. The first cell of the hero table, and the row the authored `lente` (LAHⁿT) is built to sit beside.',
  },
];

export const RESPELL_REPAIRS_VISIBLE: readonly Repair[] = REPAIRS.filter((r) => !r.blind);
export const RESPELL_REPAIRS_INVISIBLE: readonly Repair[] = REPAIRS.filter((r) => r.blind);
export const ALL_REPAIRS: readonly Repair[] = REPAIRS;

/** NONE. Every row this lesson imports already carries a respelling, which is a
 *  first in this band: a2.16 supplied four and a2.03 supplied several. Asserted
 *  empty rather than omitted, so a later author who adds one has to say so. */
export const RESPELL_ADDITIONS: readonly { id: string; fr: string; to: string; why: string }[] = [];

/** Rows that could not be drawn, spoken or spelled with the drills they had. */
export const DRILL_ADDITIONS: readonly { id: string; fr: string; add: string[]; why: string }[] = [
  { id: 'fr.sons.nasales.001', fr: 'Maman chante souvent.', add: ['flashcard', 'voiceflash'], why: 'Carried only `sentence` and `review`, so it could not be released into a deck or spoken, and it is a row of the placement table.' },
  { id: 'fr.sons.nasales.013', fr: "L'enfant mange trop lentement.", add: ['flashcard', 'voiceflash'], why: 'The same, and it is the row that proves lahⁿt-MAHⁿ is the house notation.' },
  { id: 'fr.sons.nasales.014', fr: 'Le vent souffle doucement.', add: ['flashcard', 'voiceflash'], why: 'The same.' },
  { id: 'fr.sons.nasales.078', fr: 'Son nom sonne bien.', add: ['flashcard', 'voiceflash'], why: 'The same, and it is the row BYEHⁿ was read off.' },
  { id: 'fr.sons.adverbes-essentiels.018', fr: 'évidemment', add: ['review', 'dictation'], why: 'Ten letters, so it spells in LETTERS mode, and it is one of the two dictée rows that test a spelling the sound cannot give.' },
  { id: 'fr.sons.adverbes-essentiels.045', fr: 'constamment', add: ['review', 'dictation'], why: 'Eleven letters, and the other half of that pair.' },
];

/** Read, considered, and NOT repaired. Invariants §9: repair only what breaks a
 *  stated rule ON A SCREEN YOU ARE PUTTING IT ON. */
export const NOT_REPAIRED: readonly { id: string; respell: string; why: string }[] = [
  { id: 'fr.sons.expressions-utiles.110', respell: 'uh-ruhz-MAHN', why: '`heureusement`, and the same defect. Not displayed by this lesson, so not repaired: 499 rows in this corpus end in MAHN and a build that repaired all of them would be a migration rather than a lesson.' },
  { id: 'fr.sons.adverbes-essentiels.006', respell: 'uh-ruhz-MAHN', why: 'The same word in this lesson\'s own theme. Left for the same reason, and named so the next adverb build knows the theme is 109 rows deep in this.' },
  { id: 'fr.sons.adverbes-essentiels.027', respell: 'for-tuh-MAHN', why: '`fortement`. Considered for a fourth chain row and dropped: its T duplicates `lentement`\'s, and three consonants (T, S, Z) make the arithmetic a rule where four with a repeat would not.' },
  { id: 'fr.sons.adjectifs-essentiels.022', respell: 'FOR', why: '`fort`, the adjective behind it. Same reason.' },
  { id: 'fr.sons.expressions-utiles.112', respell: 'vreh-MAHN', why: '`vraiment`, which the brief names. It is IRREGULAR — vrai has the feminine vraie and the adverb is vraiment, not vraiement — so teaching it would need a fourth rule, and it is not displayed.' },
  { id: 'fr.sons.mots-essentiels.069', respell: 'vreh-MAHN', why: 'The second `vraiment` row. Same reason.' },
  { id: 'fr.sons.adjectifs-essentiels.050', respell: 'SANPL', why: '`simple`, whose nasal is followed by a p inside the token and is therefore INVISIBLE to the checker. Considered for the already-ends-in-e pair and dropped in favour of `rapide` and `facile`, which need no repair at all.' },
];

/** Rows read during the build and deliberately left alone, with the reason. */
export const READ_NOT_IMPORTED: readonly { id: string; fr: string; why: string }[] = [
  { id: 'fr.sons.voyelles.174', fr: 'le mieux', why: 'THE COMPARATIVE OF bien, WHICH IS a2.08\'s (seq 32). It is gendered m as well, so importing it would join a1.03\'s ending population. The guards assert `mieux` appears on no learner surface in this lesson at all.' },
  { id: 'fr.a1.adverbes-essentiels.055', fr: "Franchement, ce film m'a beaucoup déçu.", why: `A COMPOUND TENSE WITH A SHORT ADVERB BETWEEN THE AUXILIARY AND THE PARTICIPLE, in this lesson\'s own theme. It is the rule this lesson defers to ${unitRef('a2.05')} and 82 published sentences carry it. Named in the report rather than shown.` },
  { id: 'fr.sons.rythme.180', fr: 'Elle chante, très bien.', why: 'A `bien` sentence in a good frame, and its respelling is wrapped in DOUBLE brackets ([[ehl SHAHⁿT | treh BYAⁿ]]) and uses BYAⁿ rather than BYEHⁿ. Two reasons to leave it alone and one authored row to write instead.' },
  { id: 'fr.sons.rythme.181', fr: 'Elle chante très bien.', why: 'The same, and the same double brackets.' },
  { id: 'fr.sons.alphabet.385', fr: 'Notez bien chaque lettre.', why: 'Correctly respelled with BYEHⁿ and a clean verb-then-adverb shape, and it is an IMPERATIVE. The placement table holds five rows in the same declarative frame and a command in the sixth would make the frame the variable.' },
  { id: 'fr.sons.adverbes-essentiels.014', fr: 'parfaitement', why: 'THE ANSWER TO ONE OF THE TWO UNSEEN-ADJECTIVE QUESTIONS. Importing it would put the answer in the lesson\'s own vocabulary and delete the question. Header item 7.' },
  { id: 'fr.sons.adverbes-essentiels.015', fr: 'certainement', why: 'The answer to the other one. Same reason.' },
  { id: 'fr.sons.adjectifs-essentiels.047', fr: 'parfait', why: 'The unseen adjective itself, and it must stay unseen. It exists, which is worth recording: the learner may have met it in another lesson, and the question still works because THIS lesson never lists it.' },
  { id: 'fr.a1.dictee.166', fr: 'lentement', why: 'A second `lentement` row, in the `dictee` theme, carrying the same broken lahnt-MAHN. Not displayed here, so not repaired, and named so a later build knows the word is respelled in three places.' },
  { id: 'fr.a1.dictee.167', fr: 'rapidement', why: 'A second `rapidement`, with NO respelling at all. Same reason.' },
  { id: 'fr.a1.temps-et-frequence.120', fr: 'souvent', why: 'A second `souvent` with no respelling, in a theme this lesson does not touch. fr.sons.mots-essentiels.056 is the respelled one and it is the one imported.' },
  { id: 'fr.sons.voyelles.761', fr: 'bien', why: 'A `bien` row whose `en` is a lesson instruction ("the nasal glide [jɛ̃] : the next lesson") rather than a gloss, and which has no respelling. It would draw a card that explains a sons lesson.' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  SHAPES THE GUARDS SEARCH FOR
 * ═══════════════════════════════════════════════════════════════════════ */

/** Accent-aware alternation with real word boundaries on both sides. NEVER
 *  build a regex out of a search term with `\b`: it is ASCII-only in JavaScript
 *  and returns zero on a trailing accent, which looks exactly like an absence.
 *  a2.02 shipped that bug and a2.12 found it. */
const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
export const shape = (words: readonly string[]) =>
  new RegExp(`(?<![\\p{L}\\p{N}'’-])(?:${words.map(esc).join('|')})(?![\\p{L}\\p{N}'’-])`, 'iu');

export const ENGLISH_ORDER_SHAPE = shape(ENGLISH_ORDER);
export const BON_BIEN_SHAPE = shape(BON_BIEN_WRONG);
export const NOT_FROM_FEMININE_SHAPE = shape(NOT_FROM_FEMININE);
export const RESERVED_SHAPE = shape(RESERVED_FOR_A208);
export const UNSEEN_SHAPE = shape(UNSEEN_WORDS);

/** Proof each shape still fires on what it exists for and spares what it must.
 *  A guard that cannot fire is worse than none. */
export const ENGLISH_ORDER_MUST_FIRE = ['Je souvent mange ici.', 'Elle bien chante.'] as const;
export const ENGLISH_ORDER_MUST_NOT_FIRE = ['Je mange souvent ici.', 'Elle chante bien.', 'Il parle lentement.'] as const;
export const RESERVED_MUST_FIRE = ['Elle chante mieux.', 'Il court plus vite.'] as const;
export const RESERVED_MUST_NOT_FIRE = ['Elle chante bien.', 'Il parle vite.', 'Il court vite.'] as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  BUDGETS AND HOUSE CONSTANTS
 * ═══════════════════════════════════════════════════════════════════════ */

/** Ledger §a2.14-13: the ceiling is a WIDTH and not a character count, so a
 *  character guard is necessary and not sufficient. 27 is the house heading that
 *  36 lessons ship and it demonstrably fits. */
export const MISSION_TITLE_MAX = 27;
/** Ledger §a2.03-3: a term-chip ROW budget of 37, measured off three hub screens
 *  on a Pixel 6. */
export const TERM_CHIP_ROW_MAX = 37;

/** Corrections §4. Measured through the real `dicteeMode`: eighteen of the
 *  twenty-two rows this lesson would want spell in LETTERS. The four that do not
 *  are named, and two of them are replaced by their bare headwords, which do. */
export const DICTEE_LETTER_MAX = 16;
export const DICTEE_WORD_MODE_ROWS: readonly string[] = [
  'Il travaille sérieusement.', "C'est évidemment vrai.", 'Il travaille constamment.',
  'Vous venez souvent ici ?', 'Oui, je mange souvent ici.', "L'enfant mange trop lentement.",
  'Maman chante souvent.',
];
export const EXPECTED_DICTEE = 21;

export const UNIT_ID = UNIT.id;
export const UNIT_SEQ = UNIT.seq;
export const LESSON_ID = 'a2.17.l1';

/* ── The counts, as explicit constants ────────────────────────────────────
 *
 * Invariants §5: assert against an explicit constant, never against a figure
 * derived from the lesson. A derived count compares the content to itself and
 * passes on any rewording.                                                   */

export const EXPECTED_AUTHORED = 24;
export const EXPECTED_AUTHORED_HEADWORDS = 4;
export const EXPECTED_AUTHORED_ADVERBS = 0;
export const EXPECTED_ADJECTIVE_ROWS = 4;
export const EXPECTED_PAIR_ROWS = 4;
export const EXPECTED_IMPORTED = 28;
export const EXPECTED_SOURCE_THEMES = 5;
export const EXPECTED_READ_ONLY = 12;
export const EXPECTED_CHAIN_ADJECTIVES = 3;
export const EXPECTED_CHAIN_STEPS = 3;
export const EXPECTED_IRREGULARS = 3;
export const EXPECTED_AMMENT = 2;
export const EXPECTED_UNSEEN = 2;
export const EXPECTED_PLACEMENT_ROWS = 5;

export const EXPECTED_SECTIONS = 24;
export const EXPECTED_ACTS = 6;
export const EXPECTED_TRIGGERS = 5;
export const EXPECTED_DRILLS = 10;
export const EXPECTED_SHEETS = 1;
export const EXPECTED_TAPTABLES = 2;
export const EXPECTED_CARDDECKS = 2;
export const EXPECTED_QUESTIONS = 30;
export const EXPECTED_ROUNDS = 5;

export const EXPECTED_RESPELL_REPAIRS = 10;
export const EXPECTED_RESPELL_REPAIRS_VISIBLE = 8;
export const EXPECTED_RESPELL_REPAIRS_INVISIBLE = 2;
export const EXPECTED_RESPELL_ADDITIONS = 0;
export const EXPECTED_DRILL_ADDITIONS = 6;

/** Measured by breaking every superscript one at a time. Both figures asserted
 *  so the day the checker changes the build fails rather than carrying a stale
 *  claim. Filled in by the batch's own report on the first run. */
export const EXPECTED_SUPERSCRIPTS = 54;
export const EXPECTED_SEEN_NASALS = 39;
export const EXPECTED_BLIND_NASALS = 15;

/** Act 3 is the Owns and it must outweigh the paradigm act. Doctrine §B.5. */
export const OWNS_ACT_ID = 'act3';
export const PARADIGM_ACT_ID = 'act2';

/** Doctrine §B.4 requires the reframe carried verbatim across at least three
 *  sections; the good lessons use six to eight. a2.03 §14 found that a COUNT
 *  cannot catch a reframe replaced everywhere at once, so the LENGTH is asserted
 *  too: 12 words is density.logic.ts's cap on an `xl` string. */
export const EXPECTED_REFRAME_USES = 9;
export const EXPECTED_REFRAME_SECTIONS = 7;
export const REFRAME_MAX_WORDS = 12;

/** Every unit this lesson names, so a guard can check they all still exist and
 *  that none is named only in a comment. */
export const CITED_UNITS = ['a1.18', 'a2.03', 'a2.05', 'a2.08', 'a2.16'] as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  ACCESSORS
 * ═══════════════════════════════════════════════════════════════════════ */

const BY_ID: Map<string, AdvRow> = new Map(ADVERBES.map((r) => [r.id, r]));

function must(id: string): AdvRow {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`adverbes-corpus: no authored row ${id}`);
  return r;
}

export function toItem(r: AdvRow): Item {
  const { role, adj, step, ...rest } = r;
  void role; void adj; void step;
  return rest as Item;
}

export const fr = (id: string): string => must(id).fr;
export const en = (id: string): string => must(id).en ?? '';
export const bare = (id: string): string => must(id).respell ?? '';
export const sub = (id: string): string => `[${bare(id)}]`;
export const noStop = (s: string): string => s.replace(/[.?!]$/, '');
export const has = (id: string): boolean => BY_ID.has(id);

/** The word alone, off the CHAIN constant rather than off a sentence, so the two
 *  copies can be compared instead of one being derived from the other. */
export function step(adj: Adj, s: Step): string {
  const row = CHAIN.find((r) => r.step === s);
  if (!row) throw new Error(`adverbes-corpus: no chain step ${s}`);
  return row.forms[adj];
}
export function stepRespell(adj: Adj, s: Step): string {
  const row = CHAIN.find((r) => r.step === s);
  if (!row) throw new Error(`adverbes-corpus: no chain step ${s}`);
  return row.respells[adj];
}
/** The whole chain for one adjective, in order, as the learner reads it. */
export const chainOf = (adj: Adj): string[] => STEP_ORDER.map((s) => step(adj, s));

/** The authored predicate row for one cell of the two authored pairs. THROWS on
 *  `serieux`, whose pair is a2.03's own published rows and is imported. That
 *  throw is the payoff enforced rather than described: a screen cannot quietly
 *  author over the row this lesson exists to point at. */
export const pairId = (adj: Adj, s: 'masc' | 'fem'): string => {
  const r = PAIR_ROWS.find((x) => x.adj === adj && x.step === s);
  if (!r) {
    const extra = adj === 'serieux'
      ? ` The sérieux pair is ${unitRef('a2.03')}'s: ${A203_ROWS.mascSentence} and ${A203_ROWS.femSentence}. Read them from the imported set.`
      : '';
    throw new Error(`adverbes-corpus: no authored pair row for ${adj}/${s}.${extra}`);
  }
  return r.id;
};
/** The authored sentence that puts one adjective's adverb after a verb. */
export const adverbSentenceId = (adj: Adj): string => {
  const r = ADVERB_ROWS.find((x) => x.adj === adj);
  if (!r) throw new Error(`adverbes-corpus: no adverb sentence for ${adj}`);
  return r.id;
};

/** Every id this build wants in the dictée: LETTERS mode only, and the batch
 *  proves it through the real `dicteeMode` rather than by counting characters. */
export const DICTATION_IDS = ADVERBES.filter((r) => r.drills.includes('dictation')).map((r) => r.id);
