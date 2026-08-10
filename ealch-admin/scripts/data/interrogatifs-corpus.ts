// The a1.20 corpus: what this lesson authors, what it imports, and the six
// shipped respellings it repairs.
//
// THIS FILE IS THE SINGLE SOURCE OF TRUTH for the 30 authored rows, the imported
// rows, the reused rows, and every respelling a1.20 puts on a screen. The lesson
// body (interrogatifs-lesson.ts) reads `fr`, `ipa`, `respell` and `en` FROM HERE
// and never restates them, for the same reason possessifs-corpus.ts and
// couleurs-corpus.ts do: before that convention one word's transcription was
// typed by hand in five sections and the five copies were free to drift.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHERE A1-20-QUESTION-WORDS-PROMPT.md WAS WRONG
// ══════════════════════════════════════════════════════════════════════════
//
// The brief carried a pre-flight probe dated 2026-08-06 and asked for it to be
// re-run. It was, on 2026-08-07, with `pnpm corpus:probe --unit a1.20 --theme
// questions,questions-du-quotidien` and three scratch scripts against Postgres
// (aws-0-ca-central-1, 27,242 published sentences). Its corpus numbers held up
// almost exactly. Its statements about the TRACK did not.
//
//   1. "seq 21  a1.18  Negation  NOT BUILT" and "Negation is a1.18, unbuilt."
//
//      FALSE BY THE TIME THIS BUILD STARTED AND MORE FALSE BY THE TIME IT
//      FINISHED. a1.18.l1 landed mid-session at v2, 28 sections, reframe "Wrap
//      the verb, then ask what the verb was.", and a1.22.l1 landed after it. The
//      seed went from 31 lessons and 7,542 items to 33 lessons and 7,638 items
//      while this file was being written.
//
//      a1.18 authors into `negation-et-restriction` and touches NO id in
//      `questions`, verified against its own itemIds. There is no collision.
//      What it changes for this lesson is a teaching fact rather than an id: the
//      elision of `ne` to `n'` IS NOW SHIPPED, so the anti-hiatus chain this
//      lesson names as "the fifth time" has four real predecessors the learner
//      has actually met rather than three plus a promise. See `deAfterCombien`
//      in interrogatifs-terms.ts, which names all four.
//
//   2. "a1.19 ... is your prerequisite ... IT IS NOT BUILT ... Plan for both
//      orders."
//
//      IT LANDED MID-BUILD, at v3, 27 sections, reframe "Est-ce que always
//      works. The other two are choices.", AND IT TOOK THE ID RANGE THIS LESSON
//      HAD ALREADY BEEN AUTHORED INTO. See the block below, which is the most
//      important thing in this file.
//
//      Both branches of the brief's plan therefore ran. The lesson was written
//      for the absent-prerequisite branch and reconciled to the other one:
//
//        - `est-ce que` is no longer BORROWED, it is CREDITED. s03-frame names
//          the earlier lesson and says the learner already has the block, which
//          is what a1.19's own handover asks for in as many words. The term is
//          `frameYouAlreadyHave` and was called `borrowedFrame` until a1.19
//          landed.
//        - « Qu'est-ce que tu fais ? » is introduced as "the block you already
//          have, with a word bolted in front", again on a1.19's explicit
//          request, rather than as a new four-word idiom.
//        - `grammarAssumed` credits a1.19 for the frame and for the elision to
//          est-ce qu'.
//        - THE REGISTER SYSTEM IS STILL TAUGHT NOWHERE HERE. That was true when
//          a1.19 was absent and is more important now that it is present:
//          REGISTER_TEACHING is the guard and it runs in the batch, the merge
//          and the test.
//
// ══════════════════════════════════════════════════════════════════════════
//  a1.19 TOOK fr.a1.questions.352-.373, WHICH IS EXACTLY WHERE THESE 28 ROWS
//  HAD ALREADY BEEN AUTHORED. EVERY ID IN THIS FILE WAS SHIFTED BY 22.
// ══════════════════════════════════════════════════════════════════════════
//
// The pre-flight probe on 2026-08-07 reported `fr.a1.questions.352-400: 0 rows`
// and `NEXT FREE = fr.a1.questions.352`. a1.19 landed between that probe and
// the first batch dry run and took .352 to .373, twenty-two rows. .352-.379
// became .374-.401. Nothing else about the content changed.
//
// THE GUARD a1.17 WROTE FOR THIS DOES NOT CATCH IT, and that is worth being
// precise about, because the next author will inherit the same code. a1.17's
// check is:
//
//     foreign = rowsInMyRange.filter(r => !myIds.includes(r.id))
//
// which works only when the other lesson takes ids ADJACENT to yours, as a1.15
// did to a1.17. a1.19 took the SAME ids, so every one of its rows was "mine" by
// id and the filter emptied. The dry run passed clean while twenty-two
// published rows were about to be silently overwritten.
//
// The tell was the theme row count: the probe measured `questions` at 502 rows
// and the batch reported 524. author-interrogatifs-batch.ts now compares BY
// CONTENT rather than by id membership: a row inside this batch's range that
// exists and says something else is foreign, whoever owns the id.
//
// WHAT a1.19 ACTUALLY TOOK, read from its own handover rather than its brief:
//
//     .352-.357   the six inversion forms of être    Es-tu prêt ? etc
//     .358-.363   the six inversion forms of avoir   As-tu faim ? etc
//     .364-.367   est-ce qu' before a vowel
//     .368-.371   a statement, and the yes and no answers
//     .372-.373   a negative question and its si
//
// It authors NOTHING in fr.sons.questions and says so: "FREE, AND ENTIRELY
// a1.20's". The two rows this lesson authors at .174 and .175 are the first in
// that sequence since it was published.
//
//   3. "`--tokens` is not a naive substring match ... a probe result of 0 for a
//      partial or elided fragment is not proof of absence."
//
//      TRUE, and the apostrophe half of the warning is worth a number. Measured
//      over all published rows: 12,699 carry a STRAIGHT apostrophe and 67 carry
//      a CURLY one, so the corpus is 99.5% straight. Every authored row here is
//      straight, and the merge refuses a curly one.
//
//   4. "The prefix convention for `questions` ... UNVERIFIED ... inferred from
//      samples rather than confirmed across all 502 rows."
//
//      NOW CONFIRMED ACROSS ALL 502. Counted by prefix and kind:
//
//          fr.a1.questions      329 rows   ALL kind=sentence
//          fr.sons.questions    173 rows   147 phrase + 26 word, NO sentences
//
//      The split is BY KIND and it is total: not one exception in either
//      direction. This is the `couleurs` convention, and the brief's inference
//      was right. Sentences take fr.a1.questions.374+; words and phrases take
//      fr.sons.questions.174+.
//
//   5. "How many of the 329 `fr.a1.questions` rows are question-word questions
//      rather than yes/no. Sampled, not counted."
//
//      COUNTED: 283 of 329, or 86%. Per word, over those 329 sentences: que 51,
//      où 36, combien 34, comment 34, quand 30, pourquoi 30, qui 28, quel 22,
//      quelle 19, quels 4, quoi 1, quelles 1. The brief calls this theme's
//      contamination problem a1.19's and this theme's content a1.20's gold, and
//      that is exactly what the count shows.
//
//   6. "`quel` ... 2 row(s)" is what the probe prints, and the second one is
//      worth naming because the brief does not: `fr.sons.consonnes.152` carries
//      `quel` respelled KEL in the consonnes theme. It is NOT repaired here. See
//      NOT_REPAIRED.
//
//   7. "The corpus's question-word sentences are full of `fais`, `veux`,
//      `manges`, `part` and `dure`. Reading exposure only."
//
//      TRUE and it constrains more than the brief says. It rules out the obvious
//      hero sentence as a PRODUCTION target, not as a display: every one of the
//      seven hero rows below is built on `partir`, which no A1 unit teaches, and
//      not one of them is a dictée target, a speak target or a free-text answer.
//      What the learner produces is the WORD, and three typeIn questions that
//      asked for `part`, `fais` and `vas` were rewritten to give the clause in
//      the stem after the batch's guard caught them.
//
// ── The canDo omits `comment`, and this lesson teaches it anyway ───────────
//
// The unit string, read from the probe's dump and copied byte for byte:
//
//     canDo: "Can ask who, what, where, when, why and how much questions"
//
// That is qui, que/quoi, où, quand, pourquoi and combien. `comment` is absent
// from it, present in the build request, and present in the corpus as a headword
// in both candidate themes with 34 published sentences behind it in this theme
// alone. a1.01 has also already shipped « Comment ça va ? » and « Comment
// vous appelez-vous ? », so the learner has met the word inside a frozen
// greeting and has never been told what it is.
//
// COMMENT IS TAUGHT AND THE UNIT IS NOT REWRITTEN. Leaving out one of the seven
// most common question words because a canDo string omitted it would be a worse
// lesson; silently editing a unit to match a lesson is a decision that belongs
// to whoever owns the curriculum. The discrepancy is in the report and `comment`
// is asserted BY NAME in the batch, the merge and the test, precisely so a later
// reader who notices the mismatch cannot "correct" the lesson into the unit.
//
// ── Why 30 rows are authored when the theme holds 502 ──────────────────────
//
// The corpus proves every rule this lesson teaches and proves almost none of
// them MINIMALLY, which is the wall a1.09, a1.13 and a1.17 all hit. Its
// question-word sentences differ from each other in three or four places at
// once:
//
//     Où est la gare ?   /   Quand commence le cours ?
//
// Both are correct, both carry a question word, and between them a learner
// cannot see what the word did: the verb moved, the subject moved and the
// meaning moved. So what is authored is ONE SENTENCE ASKED SEVEN WAYS, with a
// tail that is byte-identical down all seven rows, and four minimal pairs where
// exactly one thing changes.
//
// The tail is composed rather than typed, in `heroSub()`, for the same reason
// a1.17 composed its grid cells: seven hand-typed copies of one transcription
// are seven chances for one of them to drift, and the drift would be invisible
// because each row looks right on its own.
//
// ── The six respelling repairs, and why the seventh was left alone ─────────
//
// House convention: hyphenated syllables, stressed syllable capitalised, nasal
// vowels closed with a superscript n and NEVER a plain n or m. Brackets are
// added by `D()` below, never stored, because the density validator checks the
// rendered form. Every value below was checked against the REAL
// `hasPlainNasalFor` from density.logic.ts, not against a copy of it.
//
//     fr.sons.questions.005   quand         KAHN           ->  KAHⁿ
//     fr.sons.questions.006   comment       koh-MAHN       ->  koh-MAHⁿ
//     fr.sons.questions.008   combien       kohn-BYAN      ->  kohⁿ-BYAⁿ
//     fr.sons.questions.009   combien de    kohn-BYAN DUH  ->  kohⁿ-BYAⁿ duh
//     fr.sons.questions.010   quel          KEL            ->  KEHL
//     fr.sons.questions.011   quelle        KEL            ->  KEHL
//     fr.a1.deplacements.001  le train      luh TRAN       ->  luh TRAHⁿ
//     fr.sons.questions.014   est-ce que    ES-kuh         ->  EHS-kuh
//
// FOUR OF THE EIGHT ARE CAUGHT BY THE SHARED CHECKER and four are invisible to
// it, which is a higher proportion than any lesson on this track has had. The
// invisible ones are not the documented word-internal blind spot; they are a
// different thing entirely, and worth being precise about:
//
//   `quel` KEL and `quelle` KEL contain NO NASAL AT ALL, so hasPlainNasalFor
//   correctly says nothing about them. What is wrong with them is not a broken
//   nasal, it is that TWO MEMBERS OF ONE PARADIGM ARE SPELLED ONE WAY AND TWO
//   THE OTHER while all four are /kɛl/, so the shipped cards tell a learner the
//   plural sounds different. It does not. No shared checker can see that,
//   because it is a fact about a SET rather than about a row, and the four are
//   therefore pinned individually in the batch, the merge and the test.
//
//   `est-ce que` ES-kuh is the same kind of thing one step out: the frame is on
//   a headword card AND inside all seven composed hero transcriptions, and a
//   card reading ES-kuh beside seven rows reading ehs-kuh is a contradiction the
//   learner sees. It is aligned rather than argued about.
//
// WHICH DIRECTION THE /ɛ/ REPAIR GOES WAS MEASURED, NOT PREFERRED. Over every
// published row whose stored ipa carries a plain ɛ (4,144 rows), 2,551
// respellings use EH and 1,593 do not. EH is the house form by 62% to 38%, and
// it is what `quels`, `quelles`, `qu'est-ce qui se passe ?` (KEHS), `le frère`
// (LUH FREHR) and `quelle heure` (keh-LUHR) already use. So KEL moves to KEHL
// rather than the other way, which also has the property of changing two rows
// instead of two, and of leaving the two rows that were already right untouched.
//
// `le train` is the fifth kind again: a plain n closing the genuine nasal of
// /tʁɛ̃/, caught by the checker, on a row this lesson puts on a card. It lives in
// `deplacements` rather than in this lesson's theme, and it is repaired anyway,
// because the rule is "repair what your lesson puts on a screen" rather than
// "repair what is yours". a1.17 set that precedent with fr.a1.famille.014.
//
// ── The tie character, checked for and absent ─────────────────────────────
//
// U+203F renders as a low underscore on a Pixel 6 (invariant §2) and 328 seed
// rows already carry it. Every row this lesson imports, reuses or authors was
// checked for it and none carries one. The batch and the merge both refuse a
// U+203F in authored copy.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

/* ─── What the screens display ─────────────────────────────────────────────
 *
 * Every French unit a1.20 puts on a card, with the respelling this lesson
 * stands behind. Keyed by the French form, because many of these are display
 * strings rather than corpus rows.                                          */

export type Display = { fr: string; ipa: string; respell: string; en: string };

const D = (fr: string, ipa: string, res: string, en: string): Display =>
  ({ fr, ipa: `/${ipa}/`, respell: `[${res}]`, en });

const unbracket = (s: string) => s.replace(/^\[|\]$/g, '');

export const RESPELL: Record<string, Display> = {
  // ── the seven the canDo asks for, plus comment, which it omits ──
  qui: D('qui', 'ki', 'KEE', 'who'),
  que: D('que', 'kə', 'KUH', 'what, in front of a verb'),
  quoi: D('quoi', 'kwa', 'KWAH', 'what, on its own or at the end'),
  où: D('où', 'u', 'OO', 'where'),
  quand: D('quand', 'kɑ̃', 'KAHⁿ', 'when'),
  comment: D('comment', 'kɔ.mɑ̃', 'koh-MAHⁿ', 'how'),
  pourquoi: D('pourquoi', 'puʁ.kwa', 'poor-KWAH', 'why'),
  combien: D('combien', 'kɔ̃.bjɛ̃', 'kohⁿ-BYAⁿ', 'how much, how many'),

  // ── the word that is not one of the others, in all four shapes.
  //    ONE respelling, four times, deliberately. That identity IS the claim,
  //    and the test pins all four rather than counting them. ──
  quel: D('quel', 'kɛl', 'KEHL', 'which, in front of an un word'),
  quelle: D('quelle', 'kɛl', 'KEHL', 'which, in front of a une word'),
  quels: D('quels', 'kɛl', 'KEHL', 'which, in front of several un words'),
  quelles: D('quelles', 'kɛl', 'KEHL', 'which, in front of several une words'),

  // ── the frame, borrowed, and the two forms built on it ──
  'est-ce que': D('est-ce que', 'ɛs.kə', 'EHS-kuh', 'the three words that make it a question'),
  "qu'est-ce que": D("qu'est-ce que", 'kɛs.kə', 'kehs-KUH', 'what, when something is being done to it'),
  "qu'est-ce qui": D("qu'est-ce qui", 'kɛs.ki', 'kehs-KEE', 'what, when it is the thing doing something'),
  'combien de': D('combien de', 'kɔ̃.bjɛ̃ də', 'kohⁿ-BYAⁿ duh', 'how many of a thing'),
  "combien d'": D("combien d'", 'kɔ̃.bjɛ̃ d', "kohⁿ-BYAⁿ d", 'the same, in front of a vowel'),
  'parce que': D('parce que', 'paʁs.kə', 'pars-KUH', 'because, which is what pourquoi is answered with'),

  // ── the homophone the accent separates. BYTE-IDENTICAL on purpose:
  //    both published rows already carry OO, in one theme, which is the
  //    strongest possible evidence that the ear cannot help here. ──
  ou: D('ou', 'u', 'OO', 'or'),

  // ── the two nouns the quel paradigm runs on. NEITHER IS AUTHORED. ──
  'le train': D('le train', 'lə tʁɛ̃', 'luh TRAHⁿ', 'the train'),
  'la valise': D('la valise', 'la va.liz', 'lah vah-LEEZ', 'the suitcase'),

  // ── the hero tail, which is the same in all seven rows and is stored ONCE.
  //    heroSub() reads it from here; no hero row types it. ──
  'est-ce que tu pars ?': D('est-ce que tu pars ?', 'ɛs kə ty paʁ', 'ehs-kuh tü PAR', 'are you leaving'),
};

/** The bracketed respelling of a French form this lesson displays. Throws rather
 *  than returning undefined: a card silently missing its transcription is the
 *  failure this file exists to stop, and it looks identical to a card that never
 *  wanted one. */
export function sub(fr: string): string {
  const d = RESPELL[fr];
  if (!d) throw new Error(`a1.20: no respelling authored for "${fr}". Add it to RESPELL.`);
  return d.respell;
}

/** The IPA of a French form this lesson displays, in slashes. */
export function ipaOf(fr: string): string {
  const d = RESPELL[fr];
  if (!d) throw new Error(`a1.20: no IPA authored for "${fr}". Add it to RESPELL.`);
  return d.ipa;
}

/* ─── The eight words, named once ──────────────────────────────────────────
 *
 * Named here so the lesson, the batch, the merge and the test all count the
 * same set rather than four hand lists free to drift.                       */

/** The seven the build request asks for. `comment` is in it and is NOT in the
 *  unit's canDo; see the header. The test walks this list BY NAME rather than
 *  by count, because a count cannot tell you which one went missing. */
export const THE_SEVEN = ['qui', 'que', 'où', 'quand', 'comment', 'pourquoi', 'combien'] as const;

/** `quoi` is the eighth word and is the same word as `que` in a different
 *  position, which is why it is not in THE_SEVEN and is taught in the same act. */
export const QUE_FAMILY = ['que', 'quoi', "qu'est-ce que", "qu'est-ce qui"] as const;

/** All four, and the point is that this is ONE sound. Listed rather than
 *  derived so a later author cannot quietly drop the plural. */
export const QUEL_FORMS = ['quel', 'quelle', 'quels', 'quelles'] as const;

/** The five that never change, never agree and never need a second piece.
 *  A learner absorbs these in two missions, which is why the weight of the
 *  lesson is on quel and on que. */
export const INVARIABLE = ['où', 'quand', 'comment', 'pourquoi', 'qui'] as const;

/** The one frame this lesson uses, and a1.19 owns it.
 *
 *  Named BORROWED_FRAME through most of this build, when a1.19 had not shipped
 *  and the plan was to take one frame and label it as taken. a1.19 landed, so
 *  nothing is borrowed: the frame is CREDITED, s03-frame names the earlier
 *  lesson, and the test asserts that exactly one frame appears in the lesson and
 *  that the card carrying it credits a1.19 rather than teaching it from cold.
 *
 *  The name is kept because the constant is what the batch, the merge and the
 *  test all import, and because the history is the useful part: whichever of two
 *  neighbouring lessons lands second has to do this reconciliation, and doing it
 *  is cheaper than discovering later that both taught the same block. */
export const BORROWED_FRAME = 'est-ce que';

/** The three ways to ask that a1.19 owns. NONE of these may be taught here.
 *  Written as the words a lesson ABOUT them would have to use, rather than as
 *  the French, because « est-ce que » is this lesson's own borrowed frame and a
 *  guard on the bare string would fire on every screen. */
export const REGISTER_TEACHING = [
  'three ways to ask', 'rising intonation', 'by intonation alone',
  'inversion', 'invert the verb', 'formal register', 'informal register',
  'which register', 'the register system', 'more formal than', 'less formal than',
];

/* ─── The hero: one sentence asked seven ways ──────────────────────────────
 *
 * The brief calls this "the layout the test must assert" and it is right: it is
 * the reframe made visible, and it is the screen that turns seven grammars into
 * seven words in one slot.
 *
 * ONE TAIL, SEVEN OPENERS. The tail is `est-ce que tu pars ?` in all seven rows,
 * byte for byte, in the French AND in the transcription, and both are composed
 * from a single stored copy rather than typed seven times.
 *
 * WHY `partir`. There is no regular-verb unit in A1 and `faire` is a2.12, so
 * whatever verb carries this screen is reading exposure. `partir` was chosen
 * over `faire` because the opening scene is a missed train and the whole lesson
 * runs on one situation, and because it is the only common verb that takes all
 * seven words in a natural sentence. Not one hero row is a production target.
 *
 * THREE OF THE SEVEN NEED A PIECE IN FRONT, and pretending otherwise would be
 * the kind of rule a learner disproves on their own:
 *
 *     qui       takes a preposition when it is not the subject:  avec qui
 *     combien   takes de before the thing being counted:         combien de temps
 *     quel      takes the thing itself:                          à quelle heure
 *
 * All three still go in the SAME SLOT, which is why they belong on this screen
 * rather than in a footnote. What changes is the size of what you put in the
 * slot, never the slot. `needsPiece` marks them so the table can say so on the
 * row rather than in a paragraph nobody reads.                              */

export type HeroRow = {
  id: string;
  /** The question word this row is about. */
  word: string;
  /** What goes in front of the frame, which is the word for four of the seven
   *  and the word plus one piece for the other three. */
  opener: string;
  /** The respelling of the opener alone, lowercased: the stress in every one of
   *  these seven sentences falls on the last word of the tail. */
  openerSub: string;
  en: string;
  /** Does this row need something besides the bare word in front of the frame? */
  needsPiece: false | string;
  notes: string;
};

/** The tail, stored once. Every hero row's `fr` ends with it and every hero
 *  row's respelling ends with `heroTailSub()`. */
export const HERO_TAIL = 'est-ce que tu pars ?';
export const heroTailSub = (): string => unbracket(sub(HERO_TAIL));

/** A hero row's respelling AS THE LESSON DISPLAYS IT, in brackets.
 *
 *  The stored `respell` on the Item is UNBRACKETED, because that is what the
 *  database holds and what the flashcard hub adds its own delimiters to. The
 *  density validator's `respell-notation` rule checks the RENDERED form and
 *  fails an undelimited one, so a lesson that reads `.respell` straight off the
 *  corpus row ships six violations. It did, until this helper existed. */
export const heroSub = (word: string): string => {
  const h = HERO.find((x) => x.word === word);
  if (!h) throw new Error(`a1.20: no hero row for "${word}"`);
  return `[${h.respell}]`;
};

const HERO_ROWS: HeroRow[] = [
  {
    id: 'fr.a1.questions.374', word: 'où', opener: 'Où', openerSub: 'oo',
    en: 'Where are you going?', needsPiece: false,
    notes: 'The word for where, and everything after it is a sentence you already had.',
  },
  {
    id: 'fr.a1.questions.375', word: 'quand', opener: 'Quand', openerSub: 'kahⁿ',
    en: 'When are you leaving?', needsPiece: false,
    notes: 'One word changed from the sentence above and the answer changed completely.',
  },
  {
    id: 'fr.a1.questions.376', word: 'pourquoi', opener: 'Pourquoi', openerSub: 'poor-kwah',
    en: 'Why are you leaving?', needsPiece: false,
    notes: 'The only one of the seven whose answer has a grammar of its own: parce que.',
  },
  {
    id: 'fr.a1.questions.377', word: 'comment', opener: 'Comment', openerSub: 'koh-mahⁿ',
    en: 'How are you travelling?', needsPiece: false,
    notes: 'The word the unit description leaves out, and one you have been saying since the first lesson.',
  },
  {
    id: 'fr.a1.questions.378', word: 'qui', opener: 'Avec qui', openerSub: 'a-vek kee',
    en: 'Who are you going with?', needsPiece: 'avec',
    notes: 'The word for who, with a small word in front of it.',
  },
  {
    id: 'fr.a1.questions.379', word: 'combien', opener: 'Combien de temps', openerSub: 'kohⁿ-byaⁿ duh tahⁿ',
    en: 'How long are you going for?', needsPiece: 'de temps',
    notes: 'Combien brings de with it as soon as you name the thing being counted.',
  },
  {
    id: 'fr.a1.questions.380', word: 'quel', opener: 'À quelle heure', openerSub: 'a keh-luhr',
    en: 'What time are you leaving?', needsPiece: 'a noun',
    notes: 'Quel cannot stand alone. It takes the shape of the thing behind it.',
  },
];

/** The hero rows as corpus items, with the tail composed rather than typed. */
export const HERO: (Item & { word: string; opener: string; needsPiece: false | string })[] =
  HERO_ROWS.map((r) => ({
    id: r.id,
    kind: 'sentence' as const,
    level: 'a1' as const,
    theme: 'questions',
    fr: `${r.opener} ${HERO_TAIL}`,
    en: r.en,
    ipa: `/${r.openerSub.replace(/[ⁿ]/g, '')} ${'ɛs kə ty paʁ'}/`,
    respell: `${r.openerSub} ${heroTailSub()}`,
    notes: r.notes,
    tags: ['question', 'mot-interrogatif', r.needsPiece ? 'porte-un-morceau' : 'mot-seul'],
    drills: ['sentence', 'flashcard', 'voiceflash', 'review', 'dictation'] as Item['drills'],
    version: 1,
    word: r.word,
    opener: r.opener,
    needsPiece: r.needsPiece,
  }));

/** The IPA above is composed and therefore approximate on the opener, which is
 *  why it is regenerated here from a stored table rather than left to a
 *  string replace. A transcription assembled by deleting characters is a
 *  transcription nobody checked. */
const HERO_IPA: Record<string, string> = {
  'fr.a1.questions.374': 'u ɛs kə ty paʁ',
  'fr.a1.questions.375': 'kɑ̃ ɛs kə ty paʁ',
  'fr.a1.questions.376': 'puʁ.kwa ɛs kə ty paʁ',
  'fr.a1.questions.377': 'kɔ.mɑ̃ ɛs kə ty paʁ',
  'fr.a1.questions.378': 'a.vɛk ki ɛs kə ty paʁ',
  'fr.a1.questions.379': 'kɔ̃.bjɛ̃ də tɑ̃ ɛs kə ty paʁ',
  'fr.a1.questions.380': 'a kɛ.lœʁ ɛs kə ty paʁ',
};
for (const h of HERO) h.ipa = `/${HERO_IPA[h.id]}/`;

export const HERO_IDS: string[] = HERO.map((h) => h.id);
export const heroFor = (word: string) => HERO.find((h) => h.word === word);

/* ─── The scene's two questions ────────────────────────────────────────────
 *
 * The A1 register of stakes is being MISREAD AS A PERSON rather than being
 * corrected, and question words are unusually good material for it, because
 * asking the wrong one gets a confident, useless answer. Nobody is wrong and
 * nobody is corrected.
 *
 * These two differ in ONE WORD. Everything else, including the transcription
 * from the second syllable on, is identical.                                */

const SFVRD: Item['drills'] = ['sentence', 'flashcard', 'voiceflash', 'review', 'dictation'];

export type Authored = Item & { role: string };

const row = (
  seq: number, role: string, fr: string, en: string, ipa: string, respell: string,
  tags: string[], notes: string,
): Authored => ({
  id: `fr.a1.questions.${seq}`, kind: 'sentence', level: 'a1', theme: 'questions',
  fr, en, ipa: `/${ipa}/`, respell, notes,
  tags: ['question', 'mot-interrogatif', ...tags],
  drills: SFVRD, version: 1,
  role,
});

export const AUTHORED_SENTENCES: Authored[] = [
  /* THE SCENE. The wrong question and the right one, one word apart. The wrong
   * one is perfectly good French and gets a perfectly good answer, which is why
   * it costs a train rather than a correction. */
  row(381, 'scene', 'Où est-ce que le train part ?', 'Where does the train leave from?',
    'u ɛs kə lə tʁɛ̃ paʁ', 'oo ehs-kuh luh trahⁿ PAR', ['scene'],
    'A real question with a real answer. It is answered with a platform number, which is not what was wanted.'),
  row(382, 'scene', 'Quand est-ce que le train part ?', 'When does the train leave?',
    'kɑ̃ ɛs kə lə tʁɛ̃ paʁ', 'kahⁿ ehs-kuh luh trahⁿ PAR', ['scene'],
    'One word different from the sentence above it, and it is the only word in either that was ever '
    + 'carrying the question.'),

  /* THE ANSWERS. Six short lines, one per word, and each of them implies exactly
   * one question. This is the set the meaning drill runs on, and it is the only
   * thing in the lesson that tests meaning rather than form: given an answer,
   * only one of the seven words could have produced it.
   *
   * All six are built on être or avoir. Nothing here asks the learner to
   * conjugate anything else. */
  row(383, 'answer', "C'est mon frère.", 'He is my brother.',
    'sɛ mɔ̃ fʁɛʁ', 'seh mohⁿ FREHR', ['reponse'],
    'Only one of the seven words could have asked this, and it is the word for who.'),
  row(384, 'answer', "C'est derrière la gare.", 'It is behind the station.',
    'sɛ dɛ.ʁjɛʁ la gaʁ', 'seh deh-RYEHR lah GAHR', ['reponse'],
    'A place, so the question was where. Nothing else fits.'),
  // The ipa here is written WITHOUT a U+203F tie. The liaison is real and is
  // shown by attaching the t to the following syllable instead, because the tie
  // renders as a low underscore on a Pixel 6 (invariant §2) and 328 seed rows
  // already carry one. Nothing this lesson authors adds a 329th.
  row(385, 'answer', "C'est à huit heures.", 'It is at eight o\'clock.',
    'sɛ ta ɥi.tœʁ', 'seh tah wee-TUHR', ['reponse'],
    'A time, so the question was when.'),
  row(386, 'answer', "C'est parce qu'il pleut.", 'It is because it is raining.',
    'sɛ paʁs kil plø', 'seh pars-kuh eel PLEU', ['reponse', 'parce-que'],
    'A reason, so the question was why. This is the only one of the seven whose answer has its own word.'),
  row(387, 'answer', 'Nous sommes trois.', 'There are three of us.',
    'nu sɔm tʁwa', 'noo som TRWAH', ['reponse'],
    'A number, so the question was how many.'),
  row(388, 'answer', 'Il est très gentil.', 'He is very nice.',
    'i.lɛ tʁɛ ʒɑ̃.ti', 'ee leh treh zhahⁿ-TEE', ['reponse'],
    'What somebody is like, so the question was how. Comment asks it, and the unit description omits it.'),

  /* QUE AND QUOI: THE SAME WORD IN THREE POSITIONS. The third position is the
   * imported phrase « que fais-tu ? », so these two plus that one are the same
   * question three ways with nothing else moving.
   *
   * The corpus distribution matches: qu'est-ce que pg=23, que fais-tu pg=4,
   * tu fais quoi pg=1. That is a FREQUENCY COUNT and not a register
   * measurement, which the brief says plainly and this file repeats, because
   * the register claim belongs to a1.19 and is not made here. */
  row(389, 'que-position', "Qu'est-ce que tu fais ?", 'What are you doing?',
    'kɛs kə ty fɛ', 'kehs-kuh tü FEH', ['que-quoi'],
    'Que joined the frame and the two ran together. This is the one to reach for.'),
  row(390, 'que-position', 'Tu fais quoi ?', 'What are you doing?',
    'ty fɛ kwa', 'tü feh KWAH', ['que-quoi'],
    'The same question with the word at the end, where it changes shape to quoi. Very common out loud.'),

  /* QU'EST-CE QUI AGAINST QU'EST-CE QUE. A genuine distinction at the edge of
   * A1, and the brief asks for one recognition card and no drill. These two
   * share the noun phrase and differ only in whether the thing is doing
   * something or having something done to it. Both are built on être and
   * avoir. */
  row(391, 'qui-que-subject', "Qu'est-ce qui est dans le sac ?", 'What is in the bag?',
    'kɛs ki ɛ dɑ̃ lə sak', 'kehs-kee eh dahⁿ luh SAK', ['que-quoi'],
    'The thing is doing something, so qui. Nothing is between the frame and the verb.'),
  row(392, 'qui-que-object', "Qu'est-ce que tu as dans le sac ?", 'What do you have in the bag?',
    'kɛs kə ty a dɑ̃ lə sak', 'kehs-kuh tü a dahⁿ luh SAK', ['que-quoi'],
    'Somebody is doing something to it, so que. There is a person between the frame and the verb.'),

  /* OÙ AGAINST OU. A PAIR, so it gets two columns on one screen. The two words
   * are one sound and only the accent separates them, which sons.05 already
   * owns and already teaches. Both share `le train`, so the sentence around
   * them cannot be what tells them apart either. */
  row(393, 'ou-pair', 'Où est le train ?', 'Where is the train?',
    'u ɛ lə tʁɛ̃', 'oo eh luh TRAHⁿ', ['homophone', 'accent'],
    'With the accent, it is the word for where.'),
  row(394, 'ou-pair', 'Le train ou le bus ?', 'The train or the bus?',
    'lə tʁɛ̃ u lə bys', 'luh trahⁿ oo luh BÜS', ['homophone', 'accent'],
    'Without it, the same sound is the word for or. Nothing you can hear separates these two.'),

  /* COMBIEN DE AGAINST COMBIEN D'. One frame, one verb, and the only thing that
   * moves is the first letter of the noun. The fifth time the learner meets the
   * pressure that will not let two vowels meet. */
  row(395, 'de-pair', 'Combien de valises as-tu ?', 'How many suitcases do you have?',
    'kɔ̃.bjɛ̃ də va.liz a ty', 'kohⁿ-byaⁿ duh vah-leez ah TÜ', ['de'],
    'A consonant follows, so de keeps its vowel.'),
  row(396, 'de-pair', "Combien d'amis as-tu ?", 'How many friends do you have?',
    'kɔ̃.bjɛ̃ da.mi a ty', 'kohⁿ-byaⁿ dah-mee ah TÜ', ['de', 'elision'],
    'A vowel follows, so de loses its own. The same repair as l\'ami, mon amie and n\'ai.'),

  /* THE QUEL PARADIGM. One frame, two nouns, singular and plural. Read across
   * and only the ending moves; read down and only the noun does. All four cells
   * are /kɛl/ and the sound column of the table is identical down all four rows,
   * which is the point of putting it in a table at all.
   *
   * `train` and `valise` are PUBLISHED headwords carrying an explicit gender, so
   * a learner can check the grid using exactly what a1.03 taught. Neither is
   * authored here: a gendered single-word noun joins a1.03's measured ending
   * population and a1-03-genre.test.ts re-measures twenty printed figures from
   * the seed on every run. Verified through the real endingPopulation. */
  row(397, 'quel-cell', 'Quel train est là ?', 'Which train is here?',
    'kɛl tʁɛ̃ ɛ la', 'kehl trahⁿ eh LAH', ['accord'],
    'A train is the un kind, so quel with nothing on the end.'),
  row(398, 'quel-cell', 'Quelle valise est là ?', 'Which suitcase is here?',
    'kɛl va.liz ɛ la', 'kehl vah-leez eh LAH', ['accord'],
    'A valise is the une kind, so quelle. Out loud this is the same word as the sentence above it.'),
  row(399, 'quel-cell', 'Quels trains sont là ?', 'Which trains are here?',
    'kɛl tʁɛ̃ sɔ̃ la', 'kehl trahⁿ sohⁿ LAH', ['accord', 'pluriel'],
    'More than one, so an s arrives, and it is silent. Still the same word out loud.'),
  row(400, 'quel-cell', 'Quelles valises sont là ?', 'Which suitcases are here?',
    'kɛl va.liz sɔ̃ la', 'kehl vah-leez sohⁿ LAH', ['accord', 'pluriel'],
    'The une kind and more than one, so both endings. Four spellings and one sound, all the way down.'),

  /* THE BORROWED FRAME, BARE. The one frame this lesson takes from a1.19, shown
   * once with nothing in front of it so the learner can see what a question word
   * is being added TO. Built on être, so it is also the one line in the lesson
   * a learner can produce end to end from what they already have. */
  row(401, 'frame', 'Est-ce que tu es prêt ?', 'Are you ready?',
    'ɛs kə ty ɛ pʁɛ', 'ehs-kuh tü eh PREH', ['structure'],
    'The frame with nothing in front of it. Put a question word there and it stops being a yes or no.'),
];

/* ─── The two phrases the theme does not have ──────────────────────────────
 *
 * `qu'est-ce que` and `qu'est-ce qui` are the two most useful strings in this
 * lesson and NEITHER EXISTS AS A BARE HEADWORD IN THE `questions` THEME. What
 * exists is nine longer phrases built on them (qu'est-ce que c'est ?, qu'est-ce
 * qui se passe ?, qu'est-ce qu'il y a ? and six more), so a learner meeting the
 * frame has nine examples of it and no card for it.
 *
 * Checked against every published row in the theme before authoring, the way
 * flashhub-coverage.test.ts computes it: no row in `questions` has either of
 * these as its `fr`. A bare `qu'est-ce que` does exist at
 * fr.a1.questions-du-quotidien.160, in the OTHER theme, with no respelling and
 * no ipa, which is one of the reasons that theme was not chosen.
 *
 * NEITHER CARRIES A GENDER and both are `phrase`, so endingPopulation excludes
 * both by construction. Verified through the real function rather than argued. */
export const AUTHORED_PHRASES: Item[] = [
  {
    id: 'fr.sons.questions.174', kind: 'phrase', level: 'sons', theme: 'questions',
    fr: "qu'est-ce que", en: 'what, when something is being done to it',
    ipa: ipaOf("qu'est-ce que"), respell: unbracket(sub("qu'est-ce que")),
    notes: 'Que and the frame run together into one block. There is always a person or a thing between '
      + 'this and the verb: qu\'est-ce que TU fais, qu\'est-ce que VOUS voulez.',
    tags: ['question', 'question-word', 'structure'],
    drills: ['flashcard', 'voiceflash'], version: 1, cardType: 'vocab',
  },
  {
    id: 'fr.sons.questions.175', kind: 'phrase', level: 'sons', theme: 'questions',
    fr: "qu'est-ce qui", en: 'what, when it is the thing doing something',
    ipa: ipaOf("qu'est-ce qui"), respell: unbracket(sub("qu'est-ce qui")),
    notes: 'The same block with qui on the end, used when the thing you are asking about is the one doing '
      + 'something. Nothing comes between it and the verb: qu\'est-ce qui se passe, qu\'est-ce qui est là.',
    tags: ['question', 'question-word', 'structure'],
    drills: ['flashcard', 'voiceflash'], version: 1, cardType: 'vocab',
  },
];

export const AUTHORED: Item[] = [
  ...HERO.map((h) => { const { word: _w, opener: _o, needsPiece: _n, ...item } = h; return item; }),
  ...AUTHORED_SENTENCES.map((r) => { const { role: _r, ...item } = r; return item; }),
  ...AUTHORED_PHRASES,
];

export const AUTHORED_IDS: string[] = AUTHORED.map((r) => r.id);
export const AUTHORED_SENTENCE_IDS: string[] = [...HERO_IDS, ...AUTHORED_SENTENCES.map((r) => r.id)];
export const AUTHORED_PHRASE_IDS: string[] = AUTHORED_PHRASES.map((r) => r.id);

/** The ids of one authored group, in sequence order. */
export const roleIds = (role: string): string[] =>
  AUTHORED_SENTENCES.filter((r) => r.role === role).map((r) => r.id);

/** The range this lesson owns, exported so the batch can check that nobody else
 *  has landed INSIDE it rather than only above it. a1.15 landed inside a1.17's
 *  range mid-build and a highest-id check passed it cleanly, because rows below
 *  your top do not move the maximum. Two lessons landed during THIS build. */
export const OWNED_ID_RANGES = [
  { from: 'fr.a1.questions.374', to: 'fr.a1.questions.401' },
  { from: 'fr.sons.questions.174', to: 'fr.sons.questions.175' },
];

/* ─── The respelling repairs ───────────────────────────────────────────────
 *
 * Display-only, on rows this lesson puts on a card. The batch prints each one
 * and refuses to write if the stored value is no longer the broken one it
 * expects, because two people disagreeing about a transcription is a decision
 * rather than a merge.                                                       */

export type RespellRepair = {
  id: string;
  fr: string;
  /** What the row carries today. The batch refuses if this has changed. */
  from: string;
  /** What it will carry. Always equal to this lesson's own RESPELL, unbracketed. */
  to: string;
  /** Does the SHARED checker catch the broken value? Recorded because a later
   *  author who trusts the checker alone will reintroduce anything it cannot
   *  see, and four of these eight it cannot. */
  caughtByChecker: boolean;
  why: string;
};

export const RESPELL_REPAIRS: RespellRepair[] = [
  {
    id: 'fr.sons.questions.005', fr: 'quand', from: 'KAHN', to: unbracket(RESPELL.quand.respell),
    caughtByChecker: true,
    why: 'a plain n closes the nasal /ɑ̃/. The target is not invented: fr.sons.consonnes.151 already ships '
      + 'quand as KAHⁿ, so this repair makes two shipped cards agree rather than choosing between them.',
  },
  {
    id: 'fr.sons.questions.006', fr: 'comment', from: 'koh-MAHN', to: unbracket(RESPELL.comment.respell),
    caughtByChecker: true,
    why: 'the same plain n on the same nasal, on the word the unit\'s canDo omits and this lesson teaches '
      + 'anyway. a1.01 has shipped it inside « Comment ça va ? » since the first lesson of the course.',
  },
  {
    id: 'fr.sons.questions.008', fr: 'combien', from: 'kohn-BYAN', to: unbracket(RESPELL.combien.respell),
    caughtByChecker: true,
    why: 'the worst row in the set: TWO nasal vowels, both closed with a plain n. /kɔ̃.bjɛ̃/ has no n sound '
      + 'in it anywhere, and the shipped card puts two in.',
  },
  {
    id: 'fr.sons.questions.009', fr: 'combien de', from: 'kohn-BYAN DUH', to: unbracket(RESPELL['combien de'].respell),
    caughtByChecker: true,
    why: 'the same two nasals again on the phrase card, which sits beside the word card in the same deck. '
      + 'Repairing one and not the other would leave two spellings of one word one tap apart.',
  },
  {
    id: 'fr.sons.questions.010', fr: 'quel', from: 'KEL', to: unbracket(RESPELL.quel.respell),
    caughtByChecker: false,
    why: 'INVISIBLE TO THE SHARED CHECKER, and not because of the documented word-internal blind spot: '
      + 'there is no nasal here at all. What is wrong is that this row and quelle say KEL while quels and '
      + 'quelles say KEHL, and all four are /kɛl/, so the shipped cards tell a learner the plural sounds '
      + 'different. EH is the house form for /ɛ/ by 2551 rows to 1593, measured, so KEL moves.',
  },
  {
    id: 'fr.sons.questions.011', fr: 'quelle', from: 'KEL', to: unbracket(RESPELL.quelle.respell),
    caughtByChecker: false,
    why: 'the second half of the same split. The whole teaching of act 3 is that these four are one sound, '
      + 'and it cannot be made on a screen whose four cards carry two spellings.',
  },
  {
    id: 'fr.sons.questions.014', fr: 'est-ce que', from: 'ES-kuh', to: unbracket(RESPELL['est-ce que'].respell),
    caughtByChecker: false,
    why: 'the frame is on a headword card AND inside all seven composed hero transcriptions. A card reading '
      + 'ES-kuh beside seven rows reading ehs-kuh is a contradiction the learner sees, and EH is both the '
      + 'majority house form and what KEHS, KEHL and FEH already use.',
  },
  {
    id: 'fr.a1.deplacements.001', fr: 'le train', from: 'luh TRAN', to: unbracket(RESPELL['le train'].respell),
    caughtByChecker: true,
    why: 'a plain n closes the genuine nasal of /tʁɛ̃/. It is in another lesson\'s theme and is repaired '
      + 'anyway, because the rule is repair what your lesson puts on a screen: le train is the masculine '
      + 'noun the whole quel paradigm runs on and appears on six screens here.',
  },
];

/** The repairs the shared checker cannot see, exported so the batch prints the
 *  fact rather than leaving the next author to wonder whether it was checked.
 *  a1.13 had two and a1.17 had none. This lesson has three, and all three are a
 *  DIFFERENT failure from the documented blind spot: they are facts about a set
 *  rather than about a row. */
export const REPAIRS_INVISIBLE_TO_CHECKER = RESPELL_REPAIRS.filter((r) => !r.caughtByChecker).map((r) => r.fr);

/** Broken or divergent respellings of the SAME words that this lesson
 *  deliberately leaves alone, so the report names them and the next author does
 *  not re-discover them as new. None appears on any a1.20 screen. */
export const NOT_REPAIRED = [
  { id: 'fr.sons.mots-essentiels.038', fr: 'quand', respell: 'KAHN', why: 'the same broken nasal, in the mots-essentiels deck' },
  { id: 'fr.sons.consonnes.152', fr: 'quel', respell: 'KEL', why: 'a third quel, in the consonnes deck, outside this paradigm' },
  { id: 'fr.sons.voyelles.105', fr: 'que', respell: 'kuh', why: 'a case variant of KUH; a variant is not a violation' },
  { id: 'fr.sons.questions.046', fr: "qu'est-ce qui se passe ?", respell: 'KEHS KEE SUH PAS', why: 'no stress marking, but it is a phrase card and this lesson displays the sentence at fr.a1.questions.209 instead' },
  { id: 'fr.a1.tourisme.056', fr: 'le train', respell: 'TRAN', why: 'a second broken train, in a theme this lesson never opens' },
  { id: 'fr.a1.transports-quotidiens.004', fr: 'le train', respell: 'luh TRAHN', why: 'a third, broken the same way' },
];

/** The stored `ipa` of fr.sons.questions.031 and .032 carries slashes while
 *  .010 and .011 do not. Reported and NOT changed: the density validator reads
 *  the LESSON's strings rather than the corpus rows, this lesson displays its
 *  own ipa through ipaOf(), and normalising a field nothing renders would be a
 *  tidy-up riding on a correctness repair. */
export const IPA_NOTATION_DIVERGENCE = ['fr.sons.questions.031', 'fr.sons.questions.032'];

/* ─── Nasal words checked BY NAME ──────────────────────────────────────────
 *
 * Carry a GENUINE nasal vowel and must close it with the superscript. Checked
 * by name AS WELL AS through hasPlainNasalFor, because the shared checker
 * cannot see a word-internal nasal (invariant §3) and `comment`, `combien` and
 * `train` are all word-internal shapes. Measured against the real function:
 * koh-MAHN, kohn-BYAN and luh TRAN are all FLAGGED correctly, so the blind spot
 * does not actually reach this lesson, and the list exists so that the next
 * author does not have to re-establish that.                                */
export const NASAL_FORMS = ['quand', 'comment', 'combien', 'combien de', 'le train'];

/** Has NO nasal vowel and must NEVER carry a superscript. `quel` in all four
 *  shapes is the important half of this list: /kɛl/ is an oral vowel and a
 *  well-meaning author reading the repair list could easily give it one. */
export const NOT_NASAL_FORMS = [
  'qui', 'que', 'quoi', 'où', 'ou', 'pourquoi',
  'quel', 'quelle', 'quels', 'quelles',
  'est-ce que', "qu'est-ce que", "qu'est-ce qui", 'parce que', 'la valise',
];

/* ─── What must never reach a learner surface ──────────────────────────────
 *
 * Three neighbours own three things this lesson could easily spend. Each list is
 * written as MULTI-WORD PHRASES or as forms that cannot occur in legitimate
 * content, because a1.13's first draft listed a neighbour's material as single
 * words and the guard fired immediately on one of its own glosses. A guard that
 * fires on legitimate content gets deleted rather than fixed.                */

/** `qui` and `que` as RELATIVE pronouns, which is A2. The corpus is full of the
 *  relative use and this lesson's qui and que are interrogative only.
 *
 *  Probed as FRENCH FRAMES rather than as the bare words, which are this
 *  lesson's own subject and appear on every screen. Each entry is a determiner
 *  or noun followed by the pronoun, which is what a relative clause looks like
 *  and which an interrogative use cannot produce. */
export const RELATIVE_FRAMES = [
  "l'homme qui", "la femme qui", 'le train qui', 'la personne qui', 'les gens qui',
  'le livre que', 'la chose que', "l'homme que", 'la femme que', 'les gens que',
  'celui qui', 'celle qui', 'ceux qui', 'tout ce qui', 'tout ce que',
  'relative pronoun', 'relative clause',
];

/** INDIRECT QUESTIONS (« Je ne sais pas où il est »), which are B1 and reuse
 *  every one of this lesson's words. Written as the verb frames that introduce
 *  one, because the question words themselves are the lesson. */
export const INDIRECT_QUESTION_FRAMES = [
  'je ne sais pas où', 'je ne sais pas quand', 'je ne sais pas qui',
  'je me demande', 'dis-moi où', 'dis-moi quand', 'indirect question',
];

/** Ungrammatical forms this lesson teaches BY NAME on trap cards and must never
 *  author as correct French. Every one is impossible, so a hit is always a
 *  defect rather than a false positive. */
export const FORBIDDEN_FORMS = [
  // combien with no de in front of the thing being counted
  'combien valises', 'combien enfants', 'combien amis', 'combien frères', 'combien temps',
  // quel not agreeing
  'quel heure', 'quel valise', 'quel valises', 'quelle train', 'quelle trains',
  'quels valises', 'quelles trains',
  // the accent dropped off where
  'Ou est le train', 'Ou est la gare', 'Ou est-ce que',
  // que where quoi belongs and the reverse
  'tu fais que', 'quoi est-ce que tu fais', "que'est-ce que",
];

/* ─── Production surfaces ──────────────────────────────────────────────────
 *
 * There is no regular-verb unit in A1: `-er` verbs are a2.01 and `faire` is
 * a2.12. So the lesson displays `pars`, `fais`, `habites`, `dure`, `commence`
 * and `préfères` freely as READING EXPOSURE and asks the learner to produce
 * none of them.
 *
 * Every id below is something the learner types, says or spells. All of them are
 * built on être, avoir, or the question word alone. The test asserts against
 * THIS LIST rather than against every string, because a guard that fires on
 * legitimate reading exposure gets deleted.                                  */

/** The verbs a learner may be asked to produce. Nothing else. */
export const PRODUCIBLE_VERBS = [
  'est', 'es', 'suis', 'sommes', 'êtes', 'sont', 'sont-ils',
  'as', 'a', 'ai', 'avons', 'avez', 'ont', 'as-tu', 'avez-vous', 'est-il', 'est-ce',
];

/** The dictée, chosen by MEASUREMENT rather than taste. `dicteeMode` switches to
 *  WORD mode above DICTEE_LETTER_LIMIT and word mode hands the learner each word
 *  as a pre-spelled tile, which is not spelling. Every id below was run through
 *  the REAL `dicteeMode` and returns 'letters'.
 *
 *  THE MEASURED CONSEQUENCE, worth recording because the next questions lesson
 *  will hit it: « Quelle valise est là ? » lands in WORD mode and « Quel train
 *  est là ? » does not, so the FEMININE half of the quel pair cannot be a dictée
 *  target while the masculine half can. The agreement is tested by typeIn in the
 *  quiz instead, where fold() keeps the final -e and -s. Named here so nobody
 *  "completes" the dictée by adding a target that silently degrades into tapping
 *  tiles. « Combien de valises as-tu ? » is word mode for the same reason and
 *  « Combien d'amis as-tu ? » is not. */
export const DICTATION_IDS = [
  'fr.a1.questions.374', // Où est-ce que tu pars ?      the frame with a word in front
  'fr.a1.questions.401', // Est-ce que tu es prêt ?      the frame with nothing in front
  'fr.a1.questions.389', // Qu'est-ce que tu fais ?      the two that ran together
  'fr.a1.questions.396', // Combien d'amis as-tu ?       the elision
  'fr.a1.questions.397', // Quel train est là ?          the agreement, masculine
];

/* ─── Reading a row's text without retyping it ─────────────────────────────
 *
 * Every French sentence a section displays is read through frOf(), so no screen
 * carries its own copy of a corpus row and no two screens can drift. Throws on
 * an unknown id: a card silently missing its sentence looks exactly like a card
 * that never wanted one.                                                     */

import { IMPORTED as IMPORTED_ROWS, REUSED as REUSED_ROWS } from './interrogatifs-imported.ts';

export const IMPORTED = IMPORTED_ROWS;
export const REUSED = REUSED_ROWS;
export const IMPORTED_IDS: string[] = IMPORTED.map((r) => r.id);
export const REUSED_IDS: string[] = REUSED.map((r) => r.id);

/** Every id this lesson names that it did not author. */
export const BORROWED_IDS: string[] = [...new Set([...REUSED_IDS, ...IMPORTED_IDS])];

const ALL_ROWS: { id: string; fr: string; en: string }[] = [
  ...AUTHORED.map((w) => ({ id: w.id, fr: w.fr, en: w.en })),
  ...IMPORTED.map((w) => ({ id: w.id, fr: w.fr, en: w.en })),
  ...REUSED.map((w) => ({ id: w.id, fr: w.fr, en: w.en })),
];

const BY_ID = new Map(ALL_ROWS.map((r) => [r.id, r] as const));

export function frOf(id: string): string {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`a1.20: no French authored or recorded for "${id}"`);
  return r.fr;
}

export function enOf(id: string): string {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`a1.20: no gloss authored or recorded for "${id}"`);
  return r.en;
}

/* ─── The homograph guards ─────────────────────────────────────────────────
 *
 * Three words in this lesson are among the most common strings in French and a
 * naive search for any of them returns most of the corpus.
 *
 *   `que`   appears inside est-ce que, parce que, qu'est-ce que and every
 *           comparative in the database.
 *   `qui`   is a relative pronoun far more often than an interrogative one.
 *   `ou`    is a substring of `pourquoi`, `nous`, `vous`, `beaucoup` and `où`.
 *
 * So anything that walks the corpus here is boundary-checked against an
 * accent-aware class rather than a regex built from the search term: `\b` is
 * ASCII-only in JavaScript and would fail on every accented neighbour, which is
 * invariant §0's first trap, and it would also match `ou` inside `où` because
 * the accent is not a word character.                                        */

/** Whole-word containment, accent-aware, never regex-from-string. An accented
 *  character counts as part of a word, so `ou` does NOT match inside `où`. */
export function hasWord(haystack: string, needle: string): boolean {
  const h = haystack.toLowerCase().normalize('NFC');
  const n = needle.toLowerCase().normalize('NFC');
  let from = 0;
  for (;;) {
    const i = h.indexOf(n, from);
    if (i < 0) return false;
    const before = i === 0 ? ' ' : h[i - 1];
    const after = h[i + n.length] ?? ' ';
    if (!/[a-zà-ÿœæ'’]/.test(before) && !/[a-zà-ÿœæ]/.test(after)) return true;
    from = i + 1;
  }
}

/** The question words a string actually uses. Reads the text rather than a
 *  hand-kept table, so a row that stops carrying its word stops counting. */
export function wordsIn(fr: string): string[] {
  return [...THE_SEVEN, ...QUEL_FORMS, 'quoi'].filter((w) => hasWord(fr, w));
}

/** Every `combien` in a string that is NOT followed by de or d'. The lesson's
 *  hardest assertion runs on this: a learner must never meet a bare combien in
 *  front of a noun.
 *
 *  Three things are deliberately NOT hits, and each was found by the guard
 *  firing on legitimate content before it fired on a defect:
 *
 *    `combien de` and `combien d'`     the whole point, and the headword card
 *                                      is the bare string with nothing after it
 *    `Combien coûte ce sac ?`          legal French: a VERB follows, not a noun,
 *                                      and combien takes no de in front of one
 *    `Combien est-ce que ça coûte ?`   the same, with the frame in between
 *
 *  A guard that fires on legitimate content gets deleted rather than fixed,
 *  which is the failure a1.13's placement guard nearly shipped. */
export function bareCombienBeforeNoun(fr: string): boolean {
  const t = fr.toLowerCase().normalize('NFC');
  let from = 0;
  for (;;) {
    const i = t.indexOf('combien', from);
    if (i < 0) return false;
    const rest = t.slice(i + 'combien'.length).trimStart();
    const ok = rest === ''
      || /^(de\b|d'|d’|ça\b|est-ce\b|\?)/.test(rest)
      || /^(coûte|coute|coûtent|coutent|pèse|pese|fait|font|mesure|dure)\b/.test(rest);
    if (!ok) return true;
    from = i + 1;
  }
}
