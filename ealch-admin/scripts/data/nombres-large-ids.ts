// a1.28.l1 "Les grands nombres" — the corpus join, and nothing else.
//
// Split out for the same reason nombres21-ids.ts is: a lesson file should read
// as a lesson, and a wall of ids in the middle of it hides the shape.
//
// ── Every one of these was verified against POSTGRES, not the seed ─────────
//
// Checked on 2026-08-05. The two copies drift, `pnpm content:parity` currently
// exits 1, and an id that exists only in the seed renders as an empty card on a
// device while every test stays green. So the batch re-checks this list against
// `content_items` with `status = 'published'` before it writes anything.
//
// The arrays are ORDER-BEARING and ordered by SCALE, not by id: CENT climbs
// 101 to 500, MILLE climbs 1 000 to 100 000, MILLION climbs a million to two
// billion. The speak mission, the flashcard deck and the SRS tranches all walk
// them in that order, because the one thing a learner has to build here is a
// sense of size.

const S = (n: string) => `fr.sons.nombres.${n}`;
const A = (n: string) => `fr.a1.nombres.${n}`;
const A2 = (n: string) => `fr.a2.nombres.${n}`;

/** `cent` standing alone. a1.27's ceiling and this lesson's floor.
 *
 *  Shown as the anchor the learner arrives with and never re-taught, exactly
 *  as a1.27 treated `vingt`. It is deliberately absent from every deckTranche
 *  here: a1.27 already released it, and releasing it again would hand the
 *  learner a card they have been reviewing for a week as if it were new. */
export const CENT_ANCHOR_ID = S('033');

/** The cent family as a MULTIPLIER, in scale order: 101, 150, 200, 250, 300,
 *  500. This is the half of `cent` that a1.27 explicitly left alone.
 *
 *  .238 (deux cent cinquante) is authored by nombres-large-corpus.ts. It is
 *  the S-DROP case, and without it the rule's two halves could not sit beside
 *  each other in a deck: `deux cents` existed as a card and the form that
 *  loses the S did not. */
export const CENT_IDS: string[] = [
  /* 101 */ S('078'),
  /* 150 */ S('079'),
  /* 200 */ S('034'),
  /* 250 */ A('238'),
  /* 300 */ S('080'),
  /* 500 */ S('081'),
];

/** The two cards the S rule turns on, index-aligned: [with the S, without it].
 *  `deux cents` against `deux cent cinquante`, same multiplier, same sound, one
 *  letter apart on the page. */
export const S_PAIR_IDS: [string, string] = [S('034'), A('238')];

/** mille, in scale order: 1 000, 2 000, 10 000, 100 000.
 *
 *  Four cards, and not one of them carries an S anywhere, which is the whole
 *  point of the group. `cent mille` is the one that also shows cent UNMULTIPLIED
 *  and therefore also without an S. */
export const MILLE_IDS: string[] = [
  /* 1 000   */ S('035'),
  /* 2 000   */ S('036'),
  /* 10 000  */ S('082'),
  /* 100 000 */ S('083'),
];

/** million and milliard, in scale order, with the two forms that carry `de`.
 *
 *  a2-level ids in an a1 lesson: `deux millions`, `trois millions` and `deux
 *  milliards` were banded a2 when the theme was written, and the canDo of this
 *  unit names million, so the lesson takes them. Band is a property of the ITEM
 *  and lessons are free to draw across bands; a1.02 already reaches into the
 *  cafe and marche themes for the same reason. */
export const MILLION_IDS: string[] = [
  /* 1 000 000     */ S('037'),
  /* the de rule   */ A('239'),
  /* 2 000 000     */ A2('006'),
  /* 3 000 000     */ A2('007'),
  /* 1 000 000 000 */ S('038'),
  /* 2 000 000 000 */ A2('008'),
];

/** Every multiplier headword this lesson teaches, in one ladder from a hundred
 *  and one to two billion. The speak mission and the flashcard deck walk it. */
export const LADDER_IDS: string[] = [...CENT_IDS, ...MILLE_IDS, ...MILLION_IDS];

/** Said out loud and scored by the mic. The anchor first, so the run starts on
 *  the one number the learner already owns, then the ladder.
 *
 *  Every id here carries `voiceflash`, which is the drill the mic-scored deck
 *  runs: an item without it renders as a card that cannot be scored, and that
 *  looks like a broken mission rather than a missing tag. Asserted in
 *  a1-28-grands-nombres.test.ts against the seed and in the batch against
 *  Postgres. */
export const SPEAK_IDS: string[] = [CENT_ANCHOR_ID, ...LADDER_IDS];

/** The quantities surface, in scale order: eighty thousand, two hundred
 *  thousand, three million, eight million, two billion.
 *
 *  This is the surface the corpus does NOT support. Before this lesson the
 *  theme held eighteen sentences using mille, exactly ONE using million, and
 *  none at all using milliard. Reading five sentences that climb by a factor of
 *  ten each time is what makes the scale mean something, and two of the five
 *  had to be authored to get there.
 *
 *  .103 is a bonus the corpus already had and nobody had used: `quatre-vingt
 *  mille` drops the S from quatre-vingts because mille follows it, which is
 *  a1.27's rule and this lesson's rule meeting on one line. */
export const QUANTITY_IDS: string[] = [
  /* 80 000        */ A('103'),
  /* 200 000       */ A('187'),
  /* 3 000 000     */ A('240'),
  /* 8 000 000     */ A('114'),
  /* 2 000 000 000 */ A('241'),
];

/** The five dictée sentences, one per claim the lesson makes.
 *
 *    .105  deux cents habitants          the S, because nothing follows
 *    .059  trois cent trente mètres      no S, because a number follows
 *    .195  mille huit cent quarante      mille, which never takes one
 *    .114  huit millions de visiteurs    million, which takes both an S and de
 *    .242  cent vingt-quatre euros       a price as one run, cents bare
 *          quatre-vingts
 *
 *  Only .242 is authored; the other four already carried the `dictation` drill.
 *  No word or phrase item in this theme carries `dictation` (all 204 of them
 *  are sentences), so a dictée on bare multiplier words would fail
 *  lesson-contract.test.ts. It is also the better exercise: spelling `mille
 *  huit cent quarante` inside a sentence is exactly the skill, and at this
 *  length the dictée assembles WORD tiles rather than letters, with decoys
 *  mixed in. Asserted against the real dictee.logic.ts rather than assumed. */
export const DICTATION_IDS: string[] = [A('105'), A('059'), A('195'), A('114'), A('242')];

/** Everything this lesson touches. */
export const ITEM_IDS: string[] = [
  ...new Set([CENT_ANCHOR_ID, ...LADDER_IDS, ...QUANTITY_IDS, ...DICTATION_IDS]),
];
