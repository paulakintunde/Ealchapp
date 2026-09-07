// a1.27.l1 "Les nombres 21-100" — the corpus join, and nothing else.
//
// Eighty headwords is too many to read inside a lesson file without the shape
// of the lesson disappearing under a wall of ids, so the join lives here on its
// own and nombres21-lesson.ts imports the four groups it actually reasons
// about.
//
// ── Every one of these was verified, not assumed ───────────────────────────
//
// The brief said coverage of 21 to 100 was complete. It is: all eighty
// headwords resolve, every one carries IPA, a respelling and the flashcard and
// voiceflash drills. Checked item by item against seed.json on 2026-08-04 by
// matching the accent-folded `fr` of each number word against the nombres
// theme, which is why the ids below are scattered across four separate runs
// (.020-.033, .061-.077, .101-.126 at sons level, .001-.023 at a1) rather than
// sitting in one contiguous block. Nothing here was authored.
//
// The arrays are ORDER-BEARING and index-aligned to the numbers they name:
// EASY[0] is 21 and EASY[48] is 69; HARD[0] is 70 and HARD[29] is 99. The test
// asserts that alignment against a literal list of the eighty French words, so
// a transposed pair fails the build rather than teaching a learner that
// soixante-treize is 74.

const S = (n: string) => `fr.sons.nombres.${n}`;
const A = (n: string) => `fr.a1.nombres.${n}`;

/** 21 to 69, in order. The regular block: a ten, then a unit, hyphenated,
 *  except the six that end in one and take `et`. This is the half the learner
 *  half-knows already from `vingt et un`, and the half the lesson moves
 *  through fastest. */
export const EASY_IDS: string[] = [
  /* 21 */ S('020'), /* 22 */ S('021'), /* 23 */ S('061'), /* 24 */ S('062'), /* 25 */ S('063'),
  /* 26 */ S('064'), /* 27 */ S('065'), /* 28 */ S('066'), /* 29 */ S('067'),
  /* 30 */ S('022'), /* 31 */ S('023'), /* 32 */ S('101'), /* 33 */ S('068'), /* 34 */ S('102'),
  /* 35 */ S('069'), /* 36 */ S('103'), /* 37 */ A('001'), /* 38 */ S('104'), /* 39 */ A('002'),
  /* 40 */ S('024'), /* 41 */ S('105'), /* 42 */ S('070'), /* 43 */ S('106'), /* 44 */ S('071'),
  /* 45 */ S('107'), /* 46 */ A('003'), /* 47 */ S('108'), /* 48 */ A('004'), /* 49 */ A('005'),
  /* 50 */ S('025'), /* 51 */ S('109'), /* 52 */ S('110'), /* 53 */ A('006'), /* 54 */ A('007'),
  /* 55 */ S('111'), /* 56 */ S('072'), /* 57 */ A('008'), /* 58 */ S('112'), /* 59 */ A('009'),
  /* 60 */ S('026'), /* 61 */ S('113'), /* 62 */ A('010'), /* 63 */ A('011'), /* 64 */ S('114'),
  /* 65 */ A('012'), /* 66 */ S('073'), /* 67 */ A('013'), /* 68 */ A('014'), /* 69 */ A('015'),
];

/** 70 to 99, in order. Where French stops naming numbers and starts adding
 *  them. Thirty items carrying most of the lesson's weight. */
export const HARD_IDS: string[] = [
  /* 70 */ S('027'), /* 71 */ S('028'), /* 72 */ S('115'), /* 73 */ S('116'), /* 74 */ S('117'),
  /* 75 */ S('074'), /* 76 */ S('118'), /* 77 */ S('075'), /* 78 */ S('119'), /* 79 */ S('120'),
  /* 80 */ S('029'), /* 81 */ S('030'), /* 82 */ S('121'), /* 83 */ A('016'), /* 84 */ A('017'),
  /* 85 */ S('122'), /* 86 */ A('018'), /* 87 */ S('076'), /* 88 */ A('019'), /* 89 */ A('020'),
  /* 90 */ S('031'), /* 91 */ S('032'), /* 92 */ S('123'), /* 93 */ S('124'), /* 94 */ A('021'),
  /* 95 */ S('077'), /* 96 */ S('125'), /* 97 */ A('022'), /* 98 */ A('023'), /* 99 */ S('126'),
];

/** The ceiling the canDo names. `cent` standing alone is this lesson's; `cent`
 *  as a multiplier (deux cents, trois cent trente) is a1.28's and appears
 *  nowhere on a production surface here. */
export const CENT_ID = S('033');

/** The four round tens that have their own word and are not already a1.02's.
 *  `vingt` belongs to the previous lesson and is shown as the anchor the
 *  learner arrives with, never taught, so it is deliberately absent. */
export const TENS_IDS = [EASY_IDS[9], EASY_IDS[19], EASY_IDS[29], EASY_IDS[39]];

/** The six numbers that take `et`: 21, 31, 41, 51, 61 and 71. Seventy-one is
 *  the last one in the language to get it, and 81 and 91 refuse it. */
export const ET_IDS = [
  EASY_IDS[0], EASY_IDS[10], EASY_IDS[20], EASY_IDS[30], EASY_IDS[40], HARD_IDS[1],
];

/** Said out loud and scored by the mic: the four tens, all thirty above
 *  sixty-nine, and the ceiling.
 *
 *  Not all eighty. 21 to 69 is one regular pattern the learner assembles from
 *  a ten plus a unit they already own, and thirty-five mic cards is already a
 *  long mission; eighty would be a punishment. The mouth work in this lesson
 *  belongs to the range that has arithmetic in it. */
export const SPEAK_IDS = [...TENS_IDS, ...HARD_IDS, CENT_ID];

/** The pairs a learner actually confuses, ordered so each sits beside its
 *  neighbour in the deck: 72/76, 82/92, 73/93, 75/95, 80/81, 60/70. Every one
 *  differs by a single syllable in the middle or at the end. */
export const LISTEN_IDS = [
  HARD_IDS[2], HARD_IDS[6],
  HARD_IDS[12], HARD_IDS[22],
  HARD_IDS[3], HARD_IDS[23],
  HARD_IDS[5], HARD_IDS[25],
  HARD_IDS[10], HARD_IDS[11],
  EASY_IDS[39], HARD_IDS[0],
];

/** The four dictation sentences, one per claim the lesson makes.
 *
 *  .050 is the S on quatre-vingts standing alone, .051 is eighty-one with no
 *  `et` and no S, .236 is a phone number read in two-digit chunks and .237 is
 *  the `et` at seventy-one. The last two are authored by nombres21-corpus.ts
 *  because no sentence in the theme carried either claim; the first two
 *  already existed with the `dictation` drill on them.
 *
 *  All four are word-mode dictées (over sixteen letters, more than one word),
 *  so the learner assembles word tiles with decoys mixed in rather than
 *  spelling letter by letter. Asserted against the real module in the test and
 *  against Postgres in the batch, because the seed and the database drift. */
export const DICTATION_IDS = ['fr.a1.nombres.050', 'fr.a1.nombres.051', 'fr.a1.nombres.236', 'fr.a1.nombres.237'];

/** Everything this lesson touches: eighty headwords and four sentences. */
export const ITEM_IDS = [...new Set([...EASY_IDS, ...HARD_IDS, CENT_ID, ...DICTATION_IDS])];

/** 21 to 100 in one ordered list, so the test can walk it against a literal
 *  spelling of the eighty numbers the canDo promises. */
export const RANGE_IDS = [...EASY_IDS, ...HARD_IDS, CENT_ID];
