// a2.34.l1 « Pronoms possessifs » — the authored corpus and the citation
// constants.
//
//   pnpm content:pronoms-possessifs        (author-pronoms-possessifs-batch.ts)
//   pnpm tsx scripts/merge-pronoms-possessifs-into-seed.ts
//
// THE FILENAMES ARE `pronoms-possessifs-*` AND NOT `possessifs-*`, BECAUSE THE
// PROMPT'S FOUR ARE ALL TAKEN. `scripts/author-possessifs-batch.ts`,
// `merge-possessifs-into-seed.ts` and `scripts/data/possessifs-{corpus,lesson,
// terms}.ts` are a1.17's, shipped, and `content:possessifs` is a1.17's
// package.json script. The prompt asks for the collision to be checked and it
// is real on all five names.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   THE THING OWNED PICKS BOTH WORDS, AND ONE OF THE TWO IS AN ARTICLE.
//
//     mon sac      one word, no article, a noun behind it        a1.17
//     le mien      two words, an article, nothing behind it      this unit
//
//   a1.17 already taught that a possessive agrees with the thing rather than
//   the owner, and it taught that a possessive REPLACES `le`. Both halves come
//   back here and the second one reverses: the article the adjective threw out
//   is exactly what the pronoun puts back. That reversal is the Owns, and
//   `s05-a117` is the mission that makes it.
//
// QUOTED, NEVER TAUGHT:
//
//   a1.17  the possessive ADJECTIVE, seq 17 of A1 and the declared prereq. Its
//          reframe and its test are IMPORTED rather than retyped, so
//          "verbatim" is mechanical. §C.
//   a2.24  the indirect object pronoun, seq 22. BOTH of its strings the prompt
//          asks for are imported: `GENDER_LOST` for trap 1 and `LEUR_RULE` for
//          trap 2. §C.
//   a2.33  the demonstratives, seq 33, one lesson ago. Its reframe is quoted
//          verbatim as the third turn of doctrine §B.7's recurring shape. §C.
//   a2.08  comparatives, seq 32. This unit imports SEVEN of its sentences and
//          teaches no comparison. §F.
//   a2.03  adjective agreement, seq 10. Leaned on: `noire`, `noirs` and
//          `noires` never appear, so nothing here needs it, but the idea that
//          a French word takes its shape from a noun is a2.03's.
//   a1.03  gender. LOAD-BEARING and re-taught nowhere.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. WHAT THE PROMPT GOT WRONG, MEASURED 2026-08-18 AGAINST POSTGRES
//      by `scripts/_a234_probe.ts`, `_a234_probe2.ts`, `_a234_preflight.ts`,
//      `_a234_pre2.ts` and `_a234_resp.ts`.
// ══════════════════════════════════════════════════════════════════════════
//
//  1. « `possessifs` HOLDS 0 ROWS AND MUST NOT BE CREATED. FIVE OF THE SIX
//     HEADWORDS EXIST. IMPORT ALL FIVE AND AUTHOR ONLY `le leur`. »
//     THE FIRST SENTENCE IS EXACT AND THE REST IS THE LOAD-BEARING CLAIM AND
//     IT IS WRONG BY A FACTOR OF THREE. **EIGHTEEN possessive-pronoun
//     headwords are published, all of them in this lesson's own home theme**,
//     every one `flashcard + voiceflash + review` and therefore deck-able:
//
//       fr.b1.pronoms-essentiels.026  le mien       .027  la mienne
//                                .028  les miens    .029  les miennes
//                                .031  le tien      .032  la tienne
//                                .033  les tiennes  .034  le sien
//                                .035  la sienne
//       fr.b2.pronoms-essentiels.001  les siens     .002  les siennes
//                                .004  le nôtre     .005  les nôtres
//                                .007  le vôtre     .008  les vôtres
//                                .010  c'est le leur .011 c'est la leur
//                                .012  les leurs
//
//     The prompt probed the six MASCULINE SINGULARS and reported the shape of
//     that probe rather than the shape of the corpus. This is a2.33's §A.1 one
//     lesson later and in the same theme: the paradigm was published for a
//     level the learner has not reached and never taught at the level that
//     needs it.
//
//     THE PROMPT ALSO ASKS THIS TO BE MEASURED — « Whether `les miens` /
//     `les miennes` and the other plurals exist as headwords; only the six
//     singulars were probed. » Measured: eleven of the twelve plurals and
//     feminines exist. §A.2 is the twelfth.
//
//  2. « `le leur` NO HEADWORD (but fr.a2.pronoms-essentiels.182 uses it in a
//     sentence). AUTHOR ONLY `le leur`. » TRUE OF `le leur` AND FALSE AS AN
//     INSTRUCTION, TWICE OVER.
//
//     `le leur` and `la leur` ARE published, as `c'est le leur`
//     (fr.b2.pronoms-essentiels.010) and `c'est la leur` (.011), and a2.15 §13
//     is the rule: « absent is not the same as nowhere ». So the house
//     respelling for a possessive `leur` is READ OFF `seh luh LUHR` rather
//     than invented.
//
//     AND THE BARE PAIR CANNOT BE AUTHORED AT ALL. §A.3.
//
//     The ONE genuinely absent cell in the whole eighteen is **`les tiens`**,
//     which is the single headword this build authors. `mien` ships 4 forms,
//     `sien` ships 4, `tien` ships 3.
//
//  3. THE FLASHCARD HUB CANNOT TELL `le leur` FROM `la leur`, AND THAT IS WHY
//     THE CORPUS PUBLISHED THEM WITH `c'est` IN FRONT.
//
//     `flashhub-coverage.test.ts` normalises a row by STRIPPING A LEADING
//     ARTICLE, and the article is the only thing that separates those two:
//
//       hubNorm('le leur')  -> 'leur'      hubNorm('la leur')  -> 'leur'
//       hubNorm('le nôtre') -> 'nôtre'     hubNorm('la nôtre') -> 'nôtre'
//       hubNorm('le vôtre') -> 'vôtre'     hubNorm('la vôtre') -> 'vôtre'
//
//     Measured through the real norm. So authoring `la nôtre` or `la vôtre`
//     as a headword would collide with the PUBLISHED masculine, and authoring
//     `le leur` and `la leur` in one batch would collide with each other,
//     which is a2.08's `mieux` / `le mieux` failure exactly (Corrections §15.2,
//     hole 6).
//
//     THREE FORMS ARE THEREFORE ABSENT FOR A REASON AND STAY ABSENT: `la
//     nôtre`, `la vôtre` and a bare `le leur` / `la leur`. Every one of them
//     is taught here as a SENTENCE, which the hub check exempts, and §G says
//     which row carries each.
//
//     `mien`, `tien` and `sien` are untouched by this: their feminine changes
//     the word as well as the article, so all twelve normalise apart.
//
//  4. TRAP 2 IS WRONG ABOUT FRENCH, AND a2.08 §15.1 IS THE PRECEDENT.
//
//     The prompt says:
//
//       « `leur` never takes an `-s`; the article does. `leur` is invariable
//         inside the pronoun. The plural is carried by `les`, and the `-s` on
//         `leurs` is the article's agreement, not `leur`'s. »
//
//     There is no reading of French on which that is true. `les leurs` is the
//     plural and the `-s` is on BOTH words; there is no `les leur`. The
//     corpus's own gloss says so: `fr.b2.pronoms-essentiels.012` is « les
//     leurs » = « theirs (pl.) ».
//
//     a2.24 shipped the true version and it is about a DIFFERENT `leur`: the
//     one in front of a verb. So this build quotes a2.24's sentence unchanged
//     (§C) and the trap becomes the thing that is actually true and actually
//     hard — **there are three `leur`s and exactly one of them never takes an
//     `-s`** — with all three on one screen and every one of them a published
//     row.
//
//     `MUST_FIRE.leurClaim` holds the prompt's four wordings so a later author
//     cannot reintroduce them.
//
//  5. « `les miens` and `les miennes` are one sound. Put them in a
//     `HOMOPHONE_FORMS` list and never offer both. » FALSE, AND THE CORPUS IS
//     WHY THE PROMPT BELIEVED IT.
//
//     `miens` is /mjɛ̃/ and `miennes` is /mjɛn/: a nasal vowel against an oral
//     vowel plus a real /n/. They are the same contrast as `le mien` against
//     `la mienne`, which the prompt itself calls audible and asks for two
//     `listenChoose` items on.
//
//     The corpus respells both as `lay myehn`, IDENTICALLY, because all twelve
//     `mien`/`tien`/`sien` rows close their nasal with a plain n (§E). So the
//     prompt read a defect in the respelling as a fact about the language.
//     Following it would have deleted four legitimate ear questions and
//     shipped the defect.
//
//     WHAT IS ACTUALLY ONE SOUND, measured across all eighteen: the plural
//     `-s` is silent on every form the paradigm has, so the possessive word
//     never marks number to the ear and only the article does. That is
//     `HOMOPHONE_FORMS` below, and it is a2.33's `ce`/`ces` finding one
//     paradigm along.
//
//  6. « `à moi` occurs 5 times in the corpus. » EXACT, and the conclusion
//     drawn from it is not. Measured with an accent-aware whole-word walk:
//     five rows, and FOUR of them are `penser à moi` or `quant à moi`, which
//     is not possession. The possession sense has ONE published row at any
//     level (`fr.b1.immigration-et-citoyennete.238`) and it needs `appartenir`
//     to parse. `à toi` is better served: `fr.a1.questions.082` « Est-ce que
//     ce stylo est à toi ? » is the possession sense at A1 and is imported.
//
//  7. « The circumflex on `le nôtre` and `le vôtre` is doing work. `fold()`
//     strips it, so no typed surface can test it — use mcq. » EXACT, measured
//     through the real `fold()`, and it is worse than the prompt says: THE EAR
//     CANNOT TEST IT EITHER. The corpus respells the adjective `votre` as
//     `voh-TRUH` (fr.sons.mots-essentiels.103) and the pronoun `le vôtre` as
//     `luh VOH-truh`, so the possessive word is the same noise in both and
//     only the article separates them. mcq is not the best surface, it is the
//     only one.
//
//  8. « **NEXT FREE `fr.a2.pronoms-essentiels.337`**, above whatever `a2.33`
//     applied. Check the row count. » CHECKED, AND IT HAD MOVED. a2.33 applied
//     27 rows on 2026-08-17. Measured 2026-08-18: 661 published in the theme,
//     363 at `fr.a2.*`, no gaps, **NEXT FREE `.364`**.
//
//  9. « Whether importing a `b1`-level row into an `a2` lesson trips any level
//     guard. Check before you plan the corpus. » CHECKED FIRST, AS ASKED, AND
//     THE ANSWER IS NO. There is no level guard anywhere. Four shipped lessons
//     name a foreign-level id and **a2.33 names four `fr.b1.pronoms-essentiels.*`
//     rows in this very theme**, one seq position back, green across 4,768
//     tests. This is an ordinary import with a precedent one lesson old.
//
// 10. THE IDENTITY BLOCK IS EXACT, byte for byte, against `content_units`.
//     Third time in this band (a2.33 and a2.08 were the others), so Corrections
//     §1's warning has stopped being true for the tail.
//
// 11. « `possessifs` holds 0 rows and must not be created. » CONFIRMED, 0 rows.
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. IDENTITY, THE THEME AND THE ID BLOCK
 *
 *  Read from Postgres 2026-08-18 by `corpus:probe --unit a2.34`. It agreed
 *  with the prompt's measured block byte for byte.
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'a2.34',
  seq: 34,
  title: 'Possessive Pronouns',
  sub: 'Pronoms possessifs',
  canDo: 'Can say mine, yours and theirs with the right gender and number',
  prereqUnitIds: ['a1.17'],
} as const;

export const LESSON_ID = 'a2.34.l1';
export const THEME = 'pronoms-essentiels';

/* ── MEASURED AGAINST POSTGRES 2026-08-18 ─────────────────────────────────── */

export const THEME_ROWS_BEFORE = 661;   // published, all levels
export const THEME_A2_BEFORE = 363;     // fr.a2.pronoms-essentiels.*, max .363
export const THEME_B1_BEFORE = 138;
export const THEME_B2_BEFORE = 25;

/** NEXT FREE on the morning of the build was `fr.a2.pronoms-essentiels.364`,
 *  with NO gaps in the a2 sequence. The prompt said `.337`; a2.33 took
 *  `.337`–`.363` the day before and the prompt's own instruction was to check.
 *
 *  `.364`–`.410` allocated, `.364`–`.395` used.
 *
 *  CHECK THE ROW COUNT AFTER THE APPLY, NOT THE MAXIMUM ID (Corrections §10). */
export const ID_FIRST = 364;
export const ID_LAST = 410;      // allocated
export const ID_USED_LAST = 395;

export const E = (n: number) => `fr.a2.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. THE FOUR QUOTATIONS, ALL IMPORTED RATHER THAN RETYPED
 *
 *  A retyped quotation is a copy that is free to drift; an imported one fails
 *  the build the day its owner rewords. `participes-corpus.ts:161`,
 *  `passe-compose-corpus.ts:235` and `demonstratifs-corpus.ts:C` all do this.
 * ══════════════════════════════════════════════════════════════════════════ */

/** a1.17, Les adjectifs possessifs, seq 17 of A1. THE DECLARED PREREQUISITE.
 *
 *  Its reframe is the rule this lesson is told to « present as a rule the
 *  learner already has, not a new one », so it is quoted rather than reworded
 *  and this lesson's own reframe is about the part a1.17 does not cover (§D).
 *
 *  Its TEST — « a possessive has a thing behind it » — is the one a2.24 also
 *  quotes, and this is the lesson where it stops being sufficient: `les leurs`
 *  is a possessive with nothing behind it. That extension is §H's trap 2 and
 *  it is the third turn of doctrine §B.7's recurring shape. */
export { REFRAME as A117_REFRAME } from './possessifs-terms.ts';
export const POSSESSIVE_ADJ_UNIT = 'a1.17';
export { A117_TEST } from './pronoms-indirect-corpus.ts';

/** a1.17's OWN LISTS, imported so the boundary is mechanical rather than a
 *  promise. `POSSESSIVE_PRONOUNS` is a1.17's list of the twenty-one forms it
 *  refuses to teach; every one of them is this lesson's. `FORBIDDEN_FORMS` is
 *  its article-slot error list and not one of them may be authored as correct
 *  French here either, because `le mon sac` is ungrammatical in both lessons. */
export { POSSESSIVE_PRONOUNS as A117_RESERVED, FORBIDDEN_FORMS as A117_FORBIDDEN } from './possessifs-corpus.ts';

/** a2.24, Pronoms d'objet indirect, seq 22. BOTH STRINGS THE PROMPT ASKS FOR.
 *
 *  `GENDER_LOST` is trap 1: the prompt says « `a2.24` shipped the same
 *  surprise for `lui` at seq 22 — quote its framing and name the unit. Two
 *  lessons, one fact about French: the third person collapses. »
 *
 *  `LEUR_RULE` is trap 2: the prompt says « `a2.24` shipped this exact trap
 *  for the object pronoun against the possessive adjective — quote it, do not
 *  write a third version. » It is quoted unchanged. What the prompt says
 *  ABOUT it is wrong (§A.4) and the sentence itself is right, so the sentence
 *  ships and the gloss around it is this build's. */
export { GENDER_LOST, LEUR_RULE, POSSESSIVE_UNIT as A224_NAMES_A117 } from './pronoms-indirect-corpus.ts';
export const INDIRECT_UNIT = 'a2.24';

/** a2.33, Démonstratifs, seq 33, IMMEDIATELY BEFORE. Its reframe is the same
 *  test this lesson runs — read what comes after the word — and the prompt
 *  asks for « whichever string `a2.33` shipped ». Its reframe is the one that
 *  transfers, because `mon sac` has a noun behind it and `le mien` does not.
 *
 *  THIS LESSON'S OWN SENTENCE FOLLOWS IT, cut to the same pattern, exactly as
 *  a2.33 did with a2.06's (`demonstratifs-corpus.ts:§C`): a2.33's line is
 *  about pointing and this one is about owning, so quoting it and stopping
 *  would hand the learner a rule that does not hold here.
 *
 *  SHORT ON PURPOSE. The card that carries the pair is at `layer: 'core'` and
 *  `validateDensity` caps a core string at 45 words; a2.33's sentence is 13 of
 *  them before this one starts. */
export { REFRAME as A233_REFRAME, POSSESSIVE_FORMS as A233_RESERVED } from './demonstratifs-corpus.ts';
export const DEMONSTRATIVE_UNIT = 'a2.33';
export const A234_SHAPE =
  'Here a noun after it means the one word, and no noun means the two.';

/** a2.02's recurring shape, doctrine §B.7, carried by a2.06, a2.24 and a2.33
 *  before this. THE FOURTH TURN. */
export { WHAT_FOLLOWS, WHAT_FOLLOWS_UNIT } from './pronoms-indirect-corpus.ts';

/** a2.08, Comparatifs & superlatifs, seq 32. Seven of its sentences are
 *  imported and no comparison is taught. §F. */
export const COMPARATIVE_UNIT = 'a2.08';

/** a1.03, Le genre des noms. Load-bearing and re-taught nowhere: a learner who
 *  cannot gender a noun cannot pick a form. */
export const GENDER_UNIT = 'a1.03';

/** a2.03, L'accord des adjectifs, seq 10. Named once, on the sheet. */
export const AGREEMENT_UNIT = 'a2.03';

/** a2.01 set the level's register axis and a2.07 the situations band's ladder.
 *  Trap 3 sits on that axis and adds nothing to it. */
export const REGISTER_UNIT = 'a2.01';

/* ══════════════════════════════════════════════════════════════════════════
 *  §C-bis. HOW THIS LESSON NAMES ITS NEIGHBOURS ON A LEARNER SURFACE
 *
 *  A card used to read « a2.24's line ». A learner has never seen `a2.24`,
 *  cannot look it up, and the string is meaningless to them. It now reads
 *  « lesson 22's line ».
 *
 *  **THE ID NUMBER IS NOT THE LESSON NUMBER.** Ids were assigned before the
 *  trails were sequenced. Measured across the shipped units: 31 of 35 A2
 *  disagree with their own seq, 27 of 30 A1, and 4 of 10 sons.
 *
 *      a2.24 is lesson 22      a2.33 is lesson 33      a2.08 is lesson 32
 *      a2.03 is lesson 10      a2.01 is lesson 1       a2.02 is lesson 5
 *      a1.17 is lesson 20      a1.03 is lesson 5
 *
 *  a2.24 itself shipped « since seq 17 of A1 » about a1.17, and a1.17 is seq
 *  20. Somebody read the id as the position. That is the whole reason these
 *  are constants with a guard behind them rather than numbers typed into prose.
 *
 *  TWO FORMS, AND THE POSSESSIVE IS THE REASON.
 *
 *    `_REF`   « lesson 22 in A2 »  ordinary prose, and every cross-track use
 *    `_POSS`  « lesson 22 »        before an apostrophe-s, SAME TRACK ONLY
 *
 *  « lesson 22 in A2's line » puts a possessive on a prepositional phrase and
 *  repeats the track at a reader who is already in A2. Across tracks the track
 *  is kept in both forms, because there it is the whole point.
 *
 *  THE IDS BELOW STAY IDS. `grammarAssumed`, `grammarIntroduced` and
 *  `prereqUnitIds` are addressed to the curriculum and are resolved against
 *  `content_units`, so they use `*_UNIT` and never `*_REF`. That separation is
 *  what makes this change mechanical: prose interpolates a `_REF`, metadata
 *  holds a `_UNIT`.
 *
 *  Every pair is asserted against the shipped `unit.seq` in the batch and in
 *  the guard, so a resequenced trail fails the build instead of printing a
 *  lesson number that moved.
 * ══════════════════════════════════════════════════════════════════════════ */

/** id -> the label a learner sees. Asserted against seed units, both ends. */
export const UNIT_REFS: readonly { unit: string; ref: string; poss: string }[] = [
  { unit: 'a1.17', ref: 'lesson 20 in A1', poss: 'lesson 20 in A1' },
  { unit: 'a1.03', ref: 'lesson 5 in A1', poss: 'lesson 5 in A1' },
  { unit: 'a2.24', ref: 'lesson 22 in A2', poss: 'lesson 22' },
  { unit: 'a2.33', ref: 'lesson 33 in A2', poss: 'lesson 33' },
  { unit: 'a2.08', ref: 'lesson 32 in A2', poss: 'lesson 32' },
  { unit: 'a2.03', ref: 'lesson 10 in A2', poss: 'lesson 10' },
  { unit: 'a2.01', ref: 'lesson 1 in A2', poss: 'lesson 1' },
  { unit: 'a2.02', ref: 'lesson 5 in A2', poss: 'lesson 5' },
  { unit: 'a2.25', ref: 'lesson 23 in A2', poss: 'lesson 23' },
];

/** RESOLVED, NOT TYPED. `UNIT_REFS` above is the table this lesson was built
 *  against and it stays as the record of what was cited; the labels themselves
 *  come from `unitRef`, which reads the shipped `unit.seq`. Two hand-maintained
 *  copies of the same fact is one copy too many: a resequenced trail would move
 *  the content and leave the table behind. */
const refOf = (id: string) => unitRef(id);
const possOf = (id: string) => unitRef(id, 'a2');

export const POSSESSIVE_ADJ_REF = refOf('a1.17');
export const GENDER_REF = refOf('a1.03');
export const INDIRECT_REF = refOf('a2.24');
export const INDIRECT_POSS = possOf('a2.24');
export const DEMONSTRATIVE_REF = refOf('a2.33');
export const DEMONSTRATIVE_POSS = possOf('a2.33');
export const COMPARATIVE_REF = refOf('a2.08');
export const AGREEMENT_REF = refOf('a2.03');
export const REGISTER_REF = refOf('a2.01');
export const WHAT_FOLLOWS_REF = refOf('a2.02');
export const Y_EN_REF = refOf('a2.25');

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE REFRAME
 *
 *  Doctrine §B.4: a production rule short enough to run in the half-second
 *  between deciding what you own and opening your mouth.
 *
 *  THE PROMPT'S REFRAME IS a1.17's REFRAME REWORDED, AND THE PROMPT SAYS SO.
 *  It proposes « It agrees with what is owned, never with who owns it », and
 *  a1.17 shipped « Ask what is owned, not who owns it. » in 2026-07. The
 *  prompt's own instruction three lines earlier is to « present this as a rule
 *  the learner already has, not a new one ».
 *
 *  A reframe that restates the prerequisite makes the lesson a revision of
 *  a1.17. So a1.17's line is QUOTED, verbatim and imported, in the mission
 *  that hands it back (`s05-a117`), and this lesson's reframe is the part
 *  a1.17 cannot cover: there are now TWO words, and the first of them is the
 *  article a1.17 taught the learner to throw away.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Two words, and the thing owned picks them both.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'It agrees with what is owned, never with who owns it.',
    why: `the prompt's, and it is ${unitRef('a1.17')}'s reframe reworded. ${Cap(unitRef('a1.17'))} shipped « Ask what is owned, not who owns it. » and this unit declares it as its prerequisite. A reframe that restates the prerequisite spends the lesson on revision. That line is quoted instead, in s05-a117, and this one covers what it does not.`,
  },
  {
    text: 'Say the article, then the owner, and agree both with the thing.',
    why: 'Eleven words and it is an instruction in three steps, which is a procedure rather than a rule. Doctrine §B.4: it has to survive recall mid-utterance, and this one has to be read.',
  },
  {
    text: 'No noun behind it, so the article comes back.',
    why: 'True, and it states the trigger without stating what to do. A learner who has spotted that there is no noun still has four forms to choose between and this says nothing about which.',
  },
  {
    text: 'The article agrees, and so does the word after it.',
    why: 'Names the two words and not the thing that decides them, which is the whole Owns. It also reads as though the two agree with each other.',
  },
];

/** Invariants §5: assert against an EXPLICIT CONSTANT, never a figure derived
 *  from the lesson, because a derived count compares the content to itself.
 *
 *  TWENTY-FIVE: the `say` of all twenty-four sections, plus `Lesson.reframe`.
 *  Counted over the NOT-deduped raw walk (a2.22 §3). It appears in no card
 *  body anywhere. */
export const REFRAME_COUNT = 25;

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE RESPELLINGS
 *
 *  ELEVEN REPAIRS, AND THEY ARE THE LARGEST SINGLE FINDING IN THIS BUILD.
 *
 *  EVERY ONE of the twelve published `mien`/`tien`/`sien` rows closes its
 *  ending with a plain `n`, and `hasPlainNasalFor` flags all twelve. That much
 *  is the ordinary case. What is not ordinary is that the twelve split into
 *  TWO KINDS and the checker's report is right about one kind and actively
 *  harmful about the other.
 *
 *    le mien      luh myehn   /mjɛ̃/   a genuine nasal vowel   -> luh MYEHⁿ
 *    la mienne    lah myehn   /mjɛn/   a REAL /n/, no nasal    -> lah MYENN
 *
 *  Both are flagged. Repairing the second the way the report implies gives
 *  `lah myehⁿ`, WHICH THE CHECKER THEN CALLS CLEAN and which respells
 *  « la mienne » as « la mien ». That is invariants §3's `jaune` / `automne`
 *  false positive — « the first two have no nasal vowel at all, so fixing them
 *  with `ⁿ` teaches a sound that is not there » — and here it would erase the
 *  ONE contrast in the whole paradigm the ear can settle.
 *
 *  MEASURED THROUGH THE REAL CHECKER, all three states of all eleven, in
 *  `_a234_resp.ts`:
 *
 *    la mienne   lah myehn  FLAG   lah MYEHⁿ  clean and WRONG   lah MYENN  clean
 *    le mien     luh myehn  FLAG   luh MYEHⁿ  clean and right   luh MYEHⁿ  clean
 *
 *  So `half !== to` on the six feminine rows and `half === to` on the five
 *  masculine ones, and Corrections §14.1's two reasons are BOTH in play and
 *  are kept as separate fields, exactly as a2.17 asks:
 *
 *    blind   the checker cannot see the defect              FALSE on all eleven
 *    house   the minimal repair is clean and not the house  TRUE on the six
 *
 *  THE HOUSE VALUES ARE READ OFF PUBLISHED ROWS, NOT INVENTED (a2.15 §13):
 *
 *    -YENN / -YEN   la chienne `lah shyEN` · la gardienne `gar-DYEN`
 *                   une pharmacienne `far-ma-SYENN`
 *                   une mécanicienne `ün may-ka-nee-SYENN`
 *                   une informaticienne `ü-naⁿ-for-ma-tee-SYENN`
 *                   Measured: 27 published `-ienne` rows use `-YEN`/`-YENN`
 *                   and 7 use the flagged `-YEHN`.
 *    -YEHⁿ          Corrections §14.1 settles `bien` -> `BYEHⁿ` as the house
 *                   value, on four published rows. `mien` is the same rhyme.
 *
 *  NOT REPAIRED, AND SAID RATHER THAN LEFT SILENT:
 *
 *    fr.a1.jardinage.079  les gants  `leh GAHN`  closes a nasal with a plain n
 *      AND writes `les` as `leh`. It is in `jardinage`, which this unit does
 *      not touch, and this build does not import it: the `gants` this lesson
 *      needs are authored inside its own sentences as `GAHⁿ`, which is a2.33's
 *      value for the identical word one lesson ago.
 *
 *    fr.sons.mots-essentiels.103  votre  `voh-TRUH`  against `le vôtre`
 *      `luh VOH-truh`. IDENTICAL apart from stress, and that is CORRECT: the
 *      circumflex is not a sound this scheme records and barely one this
 *      language records. It is the evidence for §A.7 and it is not a defect.
 * ══════════════════════════════════════════════════════════════════════════ */

export type Repair = {
  id: string;
  fr: string;
  from: string;
  /** The value the checker's own report produces: close the flagged n with a
   *  superscript and change nothing else. */
  half: string;
  to: string;
  /** The checker cannot see the defect. FALSE on all eleven: it flags every
   *  stored value, which is why none of them is invisible. */
  blind: boolean;
  /** The minimal repair is clean and is still not the house value. TRUE on the
   *  six feminine rows, where the minimal repair invents a nasal vowel French
   *  does not have. */
  house: boolean;
  why: string;
};

/** NOT `as const`: with literal types the admin typecheck proves `half !== to`
 *  can never be false and rejects the comparison as unintentional. */
export const RESPELL_REPAIRS: Repair[] = [
  // ── The five masculine rows. A genuine nasal, and the minimal repair IS the
  //    house value, so `half === to` and `house` is false.
  {
    id: 'fr.b1.pronoms-essentiels.026', fr: 'le mien', from: 'luh myehn', half: 'luh MYEHⁿ', to: 'luh MYEHⁿ',
    blind: false, house: false,
    why: 'mien is /mjɛ̃/, a nasal vowel, and the stored value closes it with a plain n. Corrections §14.1 settles bien -> BYEHⁿ on four published rows and this is the same rhyme.',
  },
  {
    id: 'fr.b1.pronoms-essentiels.028', fr: 'les miens', from: 'lay myehn', half: 'lay MYEHⁿ', to: 'lay MYEHⁿ',
    blind: false, house: false,
    why: 'The same nasal one number along. The plural -s is silent, so the possessive word is identical to the singular and only lay against luh separates them.',
  },
  {
    id: 'fr.b1.pronoms-essentiels.031', fr: 'le tien', from: 'luh tyehn', half: 'luh TYEHⁿ', to: 'luh TYEHⁿ',
    blind: false, house: false,
    why: 'tien is /tjɛ̃/. Same repair, same reason.',
  },
  {
    id: 'fr.b1.pronoms-essentiels.034', fr: 'le sien', from: 'luh syehn', half: 'luh SYEHⁿ', to: 'luh SYEHⁿ',
    blind: false, house: false,
    why: 'sien is /sjɛ̃/. Same repair, and this row is trap 1, so it is printed more often than any other in the lesson.',
  },
  {
    id: 'fr.b2.pronoms-essentiels.001', fr: 'les siens', from: 'lay syehn', half: 'lay SYEHⁿ', to: 'lay SYEHⁿ',
    blind: false, house: false,
    why: 'The masculine plural of trap 1, and the last of the five genuine nasals in the paradigm.',
  },
  // ── The six feminine rows. A REAL /n/, and the minimal repair is clean and
  //    wrong, so `half !== to` and `house` is true.
  {
    id: 'fr.b1.pronoms-essentiels.027', fr: 'la mienne', from: 'lah myehn', half: 'lah MYEHⁿ', to: 'lah MYENN',
    blind: false, house: true,
    why: 'mienne is /mjɛn/: an ORAL vowel plus a real /n/, and no nasal at all. The checker flags it anyway (invariants §3, the jaune/automne false positive) and the repair it implies would respell la mienne as la mien and erase the one contrast the ear can settle. -YENN is read off far-ma-SYENN and may-ka-nee-SYENN.',
  },
  {
    id: 'fr.b1.pronoms-essentiels.029', fr: 'les miennes', from: 'lay myehn', half: 'lay MYEHⁿ', to: 'lay MYENN',
    blind: false, house: true,
    why: 'The feminine plural, and the row that makes the prompt believe les miens and les miennes are one sound: both stored values are lay myehn. They are not; the corpus was wrong about both.',
  },
  {
    id: 'fr.b1.pronoms-essentiels.032', fr: 'la tienne', from: 'lah tyehn', half: 'lah TYEHⁿ', to: 'lah TYENN',
    blind: false, house: true,
    why: 'tienne is /tjɛn/. Same false positive, same house value.',
  },
  {
    id: 'fr.b1.pronoms-essentiels.033', fr: 'les tiennes', from: 'lay tyehn', half: 'lay TYEHⁿ', to: 'lay TYENN',
    blind: false, house: true,
    why: 'And its plural, which the corpus published while leaving les tiens absent. §G authors the missing one to match this.',
  },
  {
    id: 'fr.b1.pronoms-essentiels.035', fr: 'la sienne', from: 'lah syehn', half: 'lah SYEHⁿ', to: 'lah SYENN',
    blind: false, house: true,
    why: 'sienne is /sjɛn/. Trap 1 needs le sien and la sienne to sound different, because the thing that does NOT change is the owner, and if the respelling merges them the card contradicts itself.',
  },
  {
    id: 'fr.b2.pronoms-essentiels.002', fr: 'les siennes', from: 'lay syehn', half: 'lay SYEHⁿ', to: 'lay SYENN',
    blind: false, house: true,
    why: 'The last of the six, and the only one at b2. Same shape as the other five.',
  },
];

export const REPAIR_IDS = RESPELL_REPAIRS.map((r) => r.id);

/** THE HOUSE ENDING FOR `-ienne`, READ OFF PUBLISHED ROWS RATHER THAN INVENTED
 *  (a2.15 §13). Measured across every published `-enne`/`-ienne` headword:
 *  27 write it `-YEN` or `-YENN` and 7 write the flagged `-YEHN`.
 *
 *  `YENN` is the doubled form, which is what the repairs use, and `YEN` is the
 *  single one, which is equally house and which some sources carry. Both are
 *  asserted against the sources; only `YENN` is asserted against the repairs. */
export const HOUSE_ENDINGS = ['YENN', 'YEN'] as const;
export const HOUSE_ENDING = 'YENN';

/** The published rows the house values were READ OFF, named so the next author
 *  does not have to re-derive them (a2.15 §13). */
export const REPAIR_SOURCES = [
  'fr.a1.rp-sante.010',        // une pharmacienne   far-ma-SYENN
  'fr.a2.metiers.078',         // une mécanicienne   ün may-ka-nee-SYENN
  'fr.a1.animaux-domestiques.072', // la chienne     lah shyEN
] as const;

/** The two rows named in §E as NOT repaired, with the reason, so a later author
 *  does not read the silence as an oversight. */
export const NOT_REPAIRED: readonly { id: string; fr: string; respell: string; why: string }[] = [
  {
    id: 'fr.a1.jardinage.079', fr: 'les gants', respell: 'leh GAHN',
    why: `a plain n closing a nasal AND leh for les, but it is in jardinage, which this unit does not touch, and this build does not import it. The gants here are inside authored sentences and use ${unitRef('a2.33')} GAHⁿ.`,
  },
  {
    id: 'fr.sons.mots-essentiels.103', fr: 'votre', respell: 'voh-TRUH',
    why: 'identical to le vôtre luh VOH-truh apart from stress, and that is CORRECT rather than a collision. It is the measured evidence for §A.7: the circumflex is not a sound, so only an mcq can test it.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS
 *
 *  Doctrine §D and Corrections §2: import rather than author. This build
 *  imports SEVENTEEN of the eighteen published headwords and authors ONE.
 *
 *  THE CROSS-LEVEL IMPORT IS PERMITTED AND HAS A PRECEDENT ONE LESSON OLD
 *  (§A.9): a2.33 names four `fr.b1.pronoms-essentiels.*` rows in this same
 *  theme. There is no level guard anywhere in the product.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED: Record<string, string[]> = {
  /** THE SEVENTEEN PUBLISHED HEADWORDS. Every one is in this lesson's own home
   *  theme, ungendered, respelled, `flashcard + voiceflash + review`, and NOT
   *  ONE is re-authored. Eleven of them are repaired by §E.
   *
   *  `c'est le leur` and `c'est la leur` are here in the `le leur` / `la leur`
   *  shape's place: §A.3 is why the bare pair cannot exist as a headword, and
   *  the corpus solved the same problem the same way. */
  headwords: [
    'fr.b1.pronoms-essentiels.026',  // le mien       <- repaired
    'fr.b1.pronoms-essentiels.027',  // la mienne     <- repaired
    'fr.b1.pronoms-essentiels.028',  // les miens     <- repaired
    'fr.b1.pronoms-essentiels.029',  // les miennes   <- repaired
    'fr.b1.pronoms-essentiels.031',  // le tien       <- repaired
    'fr.b1.pronoms-essentiels.032',  // la tienne     <- repaired
    'fr.b1.pronoms-essentiels.033',  // les tiennes   <- repaired
    'fr.b1.pronoms-essentiels.034',  // le sien       <- repaired
    'fr.b1.pronoms-essentiels.035',  // la sienne     <- repaired
    'fr.b2.pronoms-essentiels.001',  // les siens     <- repaired
    'fr.b2.pronoms-essentiels.002',  // les siennes   <- repaired
    'fr.b2.pronoms-essentiels.004',  // le nôtre
    'fr.b2.pronoms-essentiels.005',  // les nôtres
    'fr.b2.pronoms-essentiels.007',  // le vôtre
    'fr.b2.pronoms-essentiels.008',  // les vôtres
    'fr.b2.pronoms-essentiels.010',  // c'est le leur
    'fr.b2.pronoms-essentiels.011',  // c'est la leur
    'fr.b2.pronoms-essentiels.012',  // les leurs
  ],

  /** THE THREE `leur` ROWS a2.24 SHIPPED, and they are trap 2 in full. Every
   *  one carries `flashcard + voiceflash + dictation + sentence + review`, so
   *  unlike the comparaisons block these CAN be released as well as named.
   *
   *  Quoting a neighbour's own cards rather than authoring look-alikes is what
   *  makes « three leurs » a claim about the product rather than about this
   *  lesson: the learner has met two of these three before. */
  leurRows: [
    'fr.a2.pronoms-essentiels.240',  // Je leur parle.        the object pronoun, never -s
    'fr.a2.pronoms-essentiels.258',  // Voici leur maison.    the adjective, one thing
    'fr.a2.pronoms-essentiels.259',  // Voici leurs clés.     the adjective, several things
  ],

  /** THE PUBLISHED SENTENCE EVIDENCE, which the prompt says lives in a2.08's
   *  theme and which measures exactly as it says.
   *
   *  NONE of these is deck-able: every one is `dictation`-only or
   *  `sentence`-only, which is a2.08 §15.4 exactly. They are reachable by being
   *  NAMED and the batch asserts both directions.
   *
   *  `.017` IS THE BEST ROW IN THE CORPUS FOR THIS LESSON and it is not the
   *  one the prompt points at: « Notre équipe joue mieux que la vôtre. »
   *  carries the ADJECTIVE and the PRONOUN of the same family in one published
   *  sentence, with and without the circumflex. Corrections §3 says the corpus
   *  holds no minimal pairs; a2.33 found two and this is a third. */
  sentences: [
    'fr.a2.comparaisons.017',        // Notre équipe joue mieux que la vôtre.   <- the circumflex pair
    'fr.a2.comparaisons.084',        // Ma valise pèse plus que la tienne.      <- adjective vs pronoun
    'fr.a2.comparaisons.064',        // Son appartement est moins grand que le mien.
    'fr.a2.comparaisons.075',        // Ton café est plus chaud que le mien.
    'fr.a2.comparaisons.077',        // Mon vélo est moins neuf que le tien.
    'fr.a2.comparaisons.011',        // Ses résultats sont pires que les nôtres.
    'fr.a2.comparaisons.018',        // Ton idée est plus originale que la sienne.
    'fr.a2.bureau.130',              // Le bureau voisin est plus grand que le mien.
    'fr.a1.questions.082',           // Est-ce que ce stylo est à toi ?         <- trap 3, published
  ],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** Themes this unit reads from and never writes to. Both are cut-affected and
 *  the merge prints their seed population before it runs. */
export const IMPORT_ONLY_THEMES = ['comparaisons', 'bureau', 'questions'] as const;

/** The imports NO deck can serve: `dictation`-only or `sentence`-only, so a
 *  `deckTranche` release of any of them would validate, publish and draw
 *  nothing. Restated as a list the batch asserts against `deckTranche` rather
 *  than as a comment nobody runs. */
export const NOT_DECK_ABLE = [...IMPORTED.sentences];

/* ── THE ROWS DELIBERATELY LEFT BEHIND ────────────────────────────────────── */

/** Named so the next author does not re-run the search, and asserted absent in
 *  both the batch and the test. */
export const NOT_IMPORTED: readonly { id: string; fr: string; why: string }[] = [
  {
    id: 'fr.a2.conflits-reconciliation.002',
    fr: "Mon frère a dit que c'était sa faute, pas la mienne.",
    why: `carries c'était, the imparfait, which the A2 trail never teaches at any of its 35 positions. This is the second from last, so nothing downstream rescues it (${unitRef('a2.33', 'a2')}'s self-audit found the same class on its own scenario)`,
  },
  {
    id: 'fr.a2.comparaisons.003',
    fr: 'Cette voiture est moins rapide que la mienne.',
    why: `the same shape as .064 and .075 and it opens on a demonstrative adjective, which ${unitRef('a2.33')} owns and this lesson has no reason to print`,
  },
  {
    id: 'fr.b1.immigration-et-citoyennete.238',
    fr: 'Ces papiers-là appartiennent à mon frère, pas à moi.',
    why: 'the ONE published possession sense of à moi at any level (§A.6), and it needs appartenir, which is b1 and which the sentence will not parse without',
  },
  {
    id: 'fr.b1.sports-et-loisirs.062',
    fr: 'Ces raquettes sont à elle, ses balles sont dans le sac.',
    why: 'the possession sense of à elle, and the second clause carries ses, so the card would teach a possessive adjective in the mission that contrasts it with the pronoun',
  },
  {
    id: 'fr.a2.pronoms-essentiels.182',
    fr: 'Nous allons le leur expliquer calmement.',
    why: "the row the prompt names as the only place le leur appears. It is TWO object pronouns in a row, which a2.25 explicitly reserved as an open curriculum question, and its leur is a2.24's word rather than this lesson's",
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS
 *
 *  Sentence budget 14 words. Nothing here reaches nine.
 *
 *  NOT ONE ROW IS GENDERED. `gender` is set on no row this build authors, so
 *  none can join a1.03's measured ending population, and the one `phrase` row
 *  is a two-word possessive rather than a noun. The imports are checked the
 *  same way in the merge.
 *
 *  WHY THESE AND NOT MORE. The theme already publishes 661 rows and this build
 *  authors 32. Every one is a gap the probe found:
 *
 *    the adjective pairs   `C'est mon sac.` beside `C'est le mien.`, the same
 *                          referent with one word and with two. The corpus has
 *                          both halves and no sentence where only that moves
 *                          (Corrections §3). The nearest published row,
 *                          `fr.a2.comparaisons.084`, changes the OWNER as well
 *    the four-cell frame   one sentence shape, four cells, the noun visible in
 *                          every one so the agreement's source is on the card
 *    trap 1                one French phrase, two owners, in one sentence
 *    the three-form set    `la nôtre`, `la vôtre` and `le leur` exist nowhere
 *                          and cannot be authored as headwords (§A.3), so each
 *                          is taught inside a sentence, which the hub exempts
 *    the circumflex pair   `Notre valise` against `la nôtre`, authored because
 *                          the one published pair is about a team rather than
 *                          a thing and cannot carry the four cells
 *    trap 3                `C'est à moi` has one published possession row at
 *                          any level and it is b1 vocabulary
 *    `les tiens`           the single absent cell of the eighteen
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const sent = (n: number, fr: string, en: string, respell: string, tags: string[], drills: Item['drills']): Row => ({
  id: E(n), kind: 'sentence', level: 'a2', theme: THEME, fr, en, respell, tags, drills, version: 1,
});
const phrase = (n: number, fr: string, en: string, respell: string, tags: string[], drills: Item['drills']): Row => ({
  id: E(n), kind: 'phrase', level: 'a2', theme: THEME, fr, en, respell, tags, drills, version: 1,
});

/** Every authored row carries BOTH `flashcard` and `voiceflash`.
 *  `flashhub-coverage.test.ts` strands any a1/a2 word or phrase missing either,
 *  and this theme's own b1/b2 possessives are `flashcard+voiceflash+review`.
 *  Sentences are exempt from that check and carry both anyway, because
 *  `practice` needs voiceflash and every deckTranche release needs flashcard. */
const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];

/* ── THE ADJECTIVE AGAINST THE PRONOUN. .364-.371 ──────────────────────────
 *  REQUIRED LAYOUT 2, and the entry point of the lesson, because a1.17 is the
 *  declared prerequisite and this is the sentence the learner already owns
 *  turning into the one they do not.
 *
 *  FOUR PAIRS, and inside each pair the ONLY thing that moves is whether the
 *  noun is said. Corrections §3 in its ordinary form: the corpus holds both
 *  halves in quantity and no sentence where only that one thing moves.
 *
 *  `Ce sont` on the plurals: it is the plural of `c'est`, a2.33 named it in
 *  its roundup and handed it on, and 42 published rows carry it. « They're my
 *  gloves » has no other shape in French.                                   */

export const PAIR_ROWS: Row[] = [
  sent(364, "C'est mon sac.", "It's my bag.", 'seh mohⁿ SAK', ['pair', 'adj', 'ms'], FCVR),
  sent(365, "C'est le mien.", "It's mine.", 'seh luh MYEHⁿ', ['pair', 'pron', 'ms'], FCVDR),
  sent(366, "C'est ma valise.", "It's my suitcase.", 'seh mah vah-LEEZ', ['pair', 'adj', 'fs'], FCVR),
  sent(367, "C'est la mienne.", "It's mine.", 'seh lah MYENN', ['pair', 'pron', 'fs'], FCVDR),
  sent(368, 'Ce sont mes gants.', "They're my gloves.", 'suh sohⁿ may GAHⁿ', ['pair', 'adj', 'mp'], FCVR),
  sent(369, 'Ce sont les miens.', "They're mine.", 'suh sohⁿ lay MYEHⁿ', ['pair', 'pron', 'mp'], FCVDR),
  sent(370, 'Ce sont mes clés.', "They're my keys.", 'suh sohⁿ may KLAY', ['pair', 'adj', 'fp'], FCVR),
  sent(371, 'Ce sont les miennes.', "They're mine.", 'suh sohⁿ lay MYENN', ['pair', 'pron', 'fp'], FCVDR),
];

/** REQUIRED LAYOUT 2, as the test reads it. Each pair is the adjective row and
 *  the pronoun row for ONE referent, and the noun must be in the first and
 *  absent from the second. Asserted pair by pair so a dropped cell fails with
 *  the cell it dropped. */
export const PAIR_CELLS = [
  { adj: E(364), pron: E(365), noun: 'sac', adjForm: 'mon', pronForm: 'le mien', gender: 'm', number: 'singular' },
  { adj: E(366), pron: E(367), noun: 'valise', adjForm: 'ma', pronForm: 'la mienne', gender: 'f', number: 'singular' },
  { adj: E(368), pron: E(369), noun: 'gants', adjForm: 'mes', pronForm: 'les miens', gender: 'm', number: 'plural' },
  { adj: E(370), pron: E(371), noun: 'clés', adjForm: 'mes', pronForm: 'les miennes', gender: 'f', number: 'plural' },
] as const;

/* ── THE FOUR-CELL FRAME, NOUN VISIBLE. .372-.375 ──────────────────────────
 *  REQUIRED LAYOUT 1: all four forms of ONE possessive with the owned noun
 *  visible in each, so the agreement's source is on the card rather than in
 *  the gloss.
 *
 *  ONE FRAME, FOUR CELLS, AND THE ONLY VARIABLE IS THE THING. The subject
 *  names it and the complement agrees with it, so a learner reading down the
 *  column can see that both ends of the sentence took their shape from the
 *  same noun and neither took it from the speaker.
 *
 *  NO ADJECTIVE. The first draft ran `Le sac noir est le mien.` so that
 *  `noir/noire/noirs/noires` would agree in parallel. It was cut: a2.03 owns
 *  that agreement, it is a second moving part in the one layout that exists to
 *  isolate the first, and the four rows go from 5 words to 4.                */

export const GRID_ROWS: Row[] = [
  sent(372, 'Le sac est le mien.', 'The bag is mine.', 'luh SAK eh luh MYEHⁿ', ['grid', 'ms'], FCVDR),
  sent(373, 'La valise est la mienne.', 'The suitcase is mine.', 'lah vah-LEEZ eh lah MYENN', ['grid', 'fs'], FCVR),
  sent(374, 'Les gants sont les miens.', 'The gloves are mine.', 'lay GAHⁿ sohⁿ lay MYEHⁿ', ['grid', 'mp'], FCVR),
  sent(375, 'Les clés sont les miennes.', 'The keys are mine.', 'lay KLAY sohⁿ lay MYENN', ['grid', 'fp'], FCVR),
];

/** The four cells as the test reads them, ASSERTED CELL BY CELL, which is what
 *  the prompt asks for. `noun` must appear exactly once and `form` exactly
 *  once, so a row that names the thing twice or drops the form fails with the
 *  cell rather than with a count. */
export const GRID_CELLS = [
  { id: E(372), form: 'le mien', noun: 'sac', article: 'Le', gender: 'm', number: 'singular' },
  { id: E(373), form: 'la mienne', noun: 'valise', article: 'La', gender: 'f', number: 'singular' },
  { id: E(374), form: 'les miens', noun: 'gants', article: 'Les', gender: 'm', number: 'plural' },
  { id: E(375), form: 'les miennes', noun: 'clés', article: 'Les', gender: 'f', number: 'plural' },
] as const;

/* ── TRAP 1: THE THIRD PERSON COLLAPSES. .376-.379 ─────────────────────────
 *  `le sien` is his OR hers, and the gender is lost exactly where the learner
 *  expects it to be marked. a2.24 shipped the same surprise for `lui` at seq
 *  22 and its framing is quoted verbatim (§C).
 *
 *  `.378` IS THE WHOLE TRAP IN ONE SENTENCE: the same three words twice, two
 *  different owners, and the English has to change while the French does not.
 *  Its `en` is the card, not a gloss.
 *
 *  THE GLOSSES CARRY BOTH READINGS. A row glossed only « It's his. » would
 *  teach half the trap and the corpus's own headword does better:
 *  `fr.b1.pronoms-essentiels.034` reads « his / hers / its (masc. sing.) ».  */

export const THIRD_ROWS: Row[] = [
  sent(376, 'Le sac est le sien.', 'The bag is his, or hers.', 'luh SAK eh luh SYEHⁿ', ['third', 'ms'], FCVDR),
  sent(377, "C'est le sien.", "It's his, or it's hers.", 'seh luh SYEHⁿ', ['third', 'ms'], FCVDR),
  sent(378, 'Paul a le sien et Marie a le sien.', 'Paul has his and Marie has hers.', 'POL ah luh SYEHⁿ ay ma-REE ah luh SYEHⁿ', ['third', 'collapse'], FCVR),
  sent(379, 'La valise est la sienne.', 'The suitcase is his, or hers.', 'lah vah-LEEZ eh lah SYENN', ['third', 'fs'], FCVR),
];

/** Trap 1, as the test reads it. The claim is that ONE French form carries TWO
 *  English owners, so the gloss must contain both words and the French must
 *  contain the form once (or, on `.378`, twice with two owners named). */
export const THIRD_CELLS = [
  { id: E(376), form: 'le sien', both: ['his', 'hers'] },
  { id: E(377), form: 'le sien', both: ['his', 'hers'] },
  { id: E(379), form: 'la sienne', both: ['his', 'hers'] },
] as const;
export const COLLAPSE_ROW = E(378);

/* ── THE THREE THAT HAVE THREE FORMS. .380-.385 ────────────────────────────
 *  `mien`, `tien` and `sien` have FOUR cells. `nôtre`, `vôtre` and `leur` have
 *  THREE: their plural does not distinguish gender.
 *
 *  MEASURED IN THE CORPUS RATHER THAN ASSERTED. `les miens` and `les miennes`
 *  are two published rows; `les nôtres`, `les vôtres` and `les leurs` are ONE
 *  each, glossed « ours (pl.) », « yours (pl., formal) » and « theirs (pl.) »
 *  with no gender in any of the three.
 *
 *  `.384` AND `.385` ARE THE PROOF, and they are a pair: a masculine plural
 *  noun and a feminine plural noun taking the identical form. That is the
 *  second half of trap 1 — the third person collapses in gender for `sien` and
 *  again in the plural for `leur`.
 *
 *  `la nôtre`, `la vôtre` and `le leur` LIVE HERE AND NOWHERE ELSE, because
 *  §A.3 makes a headword impossible for all three.                          */

export const THREE_ROWS: Row[] = [
  sent(380, 'La valise est la nôtre.', 'The suitcase is ours.', 'lah vah-LEEZ eh lah NOH-truh', ['three', 'notre', 'fs'], FCVR),
  sent(381, 'Les valises sont les nôtres.', 'The suitcases are ours.', 'lay vah-LEEZ sohⁿ lay NOH-truh', ['three', 'notre', 'fp'], FCVR),
  sent(382, 'La valise est la vôtre.', 'The suitcase is yours.', 'lah vah-LEEZ eh lah VOH-truh', ['three', 'votre', 'fs'], FCVR),
  sent(383, 'Le sac est le leur.', 'The bag is theirs.', 'luh SAK eh luh LUHR', ['three', 'leur', 'ms'], FCVDR),
  sent(384, 'Les sacs sont les leurs.', 'The bags are theirs.', 'lay SAK sohⁿ lay LUHR', ['three', 'leur', 'mp'], FCVR),
  sent(385, 'Les clés sont les leurs.', 'The keys are theirs.', 'lay KLAY sohⁿ lay LUHR', ['three', 'leur', 'fp'], FCVR),
  // ADDED AFTER THE GUARD FIRED. The test asks that each of the three forms
  // §A.3 forbids as a headword appear inside an authored SENTENCE, and the
  // first draft satisfied that for `la nôtre`, `la vôtre` and `le leur` and not
  // for `la leur`: the tapTable detail printed it and no row carried it. The
  // batch's version of the same check looked for the bare stem and passed,
  // which is the looser shape and the one that let it through.
  sent(395, 'La valise est la leur.', 'The suitcase is theirs.', 'lah vah-LEEZ eh lah LUHR', ['three', 'leur', 'fs'], FCVR),
];

/** The three-form families, as the test reads them. `plural` is ONE id for
 *  both genders, which is the entire claim, and `masculinePlural` /
 *  `femininePlural` name the two rows that prove it for `leur`. */
export const THREE_FORM_FAMILIES = [
  { stem: 'nôtre', singularF: E(380), plural: E(381), headwordM: 'fr.b2.pronoms-essentiels.004', headwordPl: 'fr.b2.pronoms-essentiels.005' },
  { stem: 'vôtre', singularF: E(382), plural: null, headwordM: 'fr.b2.pronoms-essentiels.007', headwordPl: 'fr.b2.pronoms-essentiels.008' },
  { stem: 'leur', singularF: E(395), plural: E(384), headwordM: 'fr.b2.pronoms-essentiels.010', headwordPl: 'fr.b2.pronoms-essentiels.012' },
] as const;

/** The pair that proves the plural of `leur` does not split by gender: a
 *  masculine plural noun and a feminine plural noun, one form. */
export const LEUR_PLURAL_PAIR = { masculine: E(384), feminine: E(385), form: 'les leurs' } as const;

/* ── TRAP 4: THE CIRCUMFLEX. .386-.387 ─────────────────────────────────────
 *  `notre` and `votre` are the adjectives; `le nôtre` and `le vôtre` are the
 *  pronouns, and the accent is the only written difference.
 *
 *  IT CAN BE TESTED BY NEITHER TYPING NOR LISTENING, and §A.7 has the second
 *  half measured: `fold()` strips the accent, AND the corpus respells the
 *  adjective `votre` as `voh-TRUH` against the pronoun's `VOH-truh`. So this
 *  is the only thing in the lesson that is mcq-or-nothing, and the batch
 *  refuses a typed question keyed on either form.
 *
 *  These two are the adjective halves of the pair; `.380` and `.382` are the
 *  pronoun halves, on the same noun.                                        */

export const CIRCUMFLEX_ROWS: Row[] = [
  sent(386, 'Notre valise est ici.', 'Our suitcase is here.', 'noh-truh vah-LEEZ eh tee-SEE', ['circ', 'adj'], FCVR),
  sent(387, 'Votre valise est ici.', 'Your suitcase is here.', 'voh-truh vah-LEEZ eh tee-SEE', ['circ', 'adj'], FCVR),
];

/** The circumflex pairs: the adjective without it and the pronoun with it, on
 *  the SAME noun, so the accent is the only difference on the page. */
export const CIRCUMFLEX_PAIRS = [
  { adjective: E(386), pronoun: E(380), bare: 'Notre', accented: 'la nôtre' },
  { adjective: E(387), pronoun: E(382), bare: 'Votre', accented: 'la vôtre' },
] as const;
export const CIRCUMFLEX_FORMS = ['nôtre', 'nôtres', 'vôtre', 'vôtres'] as const;

/* ── TRAP 3: WHAT PEOPLE ACTUALLY SAY. .388-.391 ───────────────────────────
 *  REQUIRED LAYOUT 3: `C'est le mien` beside `C'est à moi`, register marked on
 *  each.
 *
 *  THE LIAISON IS REAL AND NOTHING IN THIS PROJECT CHECKS ONE (invariants §3,
 *  Corrections §15.3). `c'est à` is `est` + vowel, so the t moves, and the
 *  house writes the moving consonant ONTO THE FOLLOWING SYLLABLE rather than
 *  tying it: `seh tah MWAH`, never `seh‿ah MWAH`. U+203F draws as a low
 *  underscore on a Pixel 6 and there is not one anywhere in this build.
 *
 *  `fr.a1.questions.082` « Est-ce que ce stylo est à toi ? » is imported
 *  beside these: it is the possession sense, published, at A1, and it is the
 *  proof that this is what people say rather than a claim on a card.        */

export const REGISTER_ROWS: Row[] = [
  sent(388, "C'est à moi.", "It's mine.", 'seh tah MWAH', ['register', 'spoken'], FCVDR),
  sent(389, "C'est à toi.", "It's yours.", 'seh tah TWAH', ['register', 'spoken'], FCVDR),
  sent(390, 'Le sac est à moi.', 'The bag is mine.', 'luh SAK eh tah MWAH', ['register', 'spoken'], FCVR),
  sent(391, "C'est le tien.", "It's yours.", 'seh luh TYEHⁿ', ['register', 'written'], FCVDR),
];

/** REQUIRED LAYOUT 3, named so the section and the audio spec cannot drift.
 *  Each pair is one meaning in two registers, and the section must mark which
 *  is which on BOTH halves rather than on one. */
export const REGISTER_PAIRS = [
  { written: E(365), spoken: E(388), meaning: "It's mine." },
  { written: E(391), spoken: E(389), meaning: "It's yours." },
] as const;
export const SPOKEN_MARK = 'said far more often';
export const WRITTEN_MARK = 'written far more often';

/** The liaison contexts this lesson creates, as a by-name table, because no
 *  layer in this project checks one (invariants §3). `est` + vowel is the only
 *  one here and it fires on four authored rows. */
export const LIAISON_ROWS: readonly { id: string; frame: string; respell: string }[] = [
  { id: E(388), frame: "C'est à", respell: 'seh tah' },
  { id: E(389), frame: "C'est à", respell: 'seh tah' },
  { id: E(390), frame: 'est à', respell: 'eh tah' },
  { id: E(386), frame: 'est ici', respell: 'eh tee-SEE' },
  { id: E(387), frame: 'est ici', respell: 'eh tee-SEE' },
];
export const TIE_GLYPH = '‿';

/* ── THE ONE AUTHORED HEADWORD. .392 ───────────────────────────────────────
 *  `les tiens` is the single absent cell of the eighteen. `le tien`, `la
 *  tienne` and `les tiennes` are published; the masculine plural is not, at
 *  any level, in any theme.
 *
 *  `lay TYEHⁿ` matches the repaired `le tien` and `les miens`, so the deck is
 *  internally consistent the day it ships rather than after somebody notices.
 *
 *  hubNorm('les tiens') is `tiens`, which collides with nothing: `le tien`
 *  normalises to `tien`. Checked against the theme AND against this batch's
 *  own rows (Corrections §15.2, hole 6).                                    */

export const CARD_ROWS: Row[] = [
  phrase(392, 'les tiens', 'yours (masc. pl., informal)', 'lay TYEHⁿ', ['card', 'tien', 'mp'], FCVR),
];

/* ── THE GENERALISATION TARGET. .393-.394 ──────────────────────────────────
 *  Doctrine §B.1: an A2 learner leaves able to say things the lesson never
 *  said. These two are the frame the generalisation mission opens on, so the
 *  learner meets the shape with a noun they know before being handed one they
 *  do not.                                                                   */

export const UNSEEN_FRAME_ROWS: Row[] = [
  sent(393, 'Le parapluie est le tien.', 'The umbrella is yours.', 'luh pah-rah-PLWEE eh luh TYEHⁿ', ['frame', 'ms'], FCVR),
  sent(394, 'La trousse est la tienne.', 'The pencil case is yours.', 'lah TROOS eh lah TYENN', ['frame', 'fs'], FCVR),
];

export const ALL_ROWS: Row[] = [
  ...PAIR_ROWS, ...GRID_ROWS, ...THIRD_ROWS, ...THREE_ROWS,
  ...CIRCUMFLEX_ROWS, ...REGISTER_ROWS, ...CARD_ROWS, ...UNSEEN_FRAME_ROWS,
].sort((a, b) => a.id.localeCompare(b.id));

/* ── THE DICTÉE ────────────────────────────────────────────────────────────
 *  Corrections §4: `dicteeMode` switches to WORD tiles above 16 letters, and
 *  word mode hands every real word over pre-spelled, so a lesson about a
 *  written agreement can only be tested in LETTERS.
 *
 *  `fold()` KEEPS A FINAL `-e` AND `-s`, measured, so this lesson's whole Owns
 *  is typeable: `lemien`, `lamienne`, `lesmiens` and `lesmiennes` are four
 *  different strings. That is rare in this band and the quiz is shaped round it.
 *
 *  MEASURED, not counted by eye, and the batch proves every one through the
 *  real function:
 *
 *    C'est le mien.        10       Le sac est le mien.    14
 *    C'est la mienne.      12       Le sac est le leur.    14
 *    C'est le sien.        10       Ce sont les miens.     14
 *    C'est le tien.        10       Ce sont les miennes.   16
 *    C'est à moi.           8       C'est à toi.           10
 *
 *  `La valise est la mienne.` is 19 and `Les clés sont les miennes.` is 21, so
 *  the four-cell frame CANNOT be the dictée and the `C'est` frame is.        */

export const DICTEE_IDS = ALL_ROWS.filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);
export const DICTEE_MODE_EXPECTED = 'letters' as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. WHAT THE APP CANNOT TEST, AND WHAT IT CAN
 *
 *  Corrections §5 and A2-TAIL-AUDIT §4, measured through the real functions.
 *  This lesson is unusually well served by `fold()` and unusually badly served
 *  by the ear, and the quiz follows the measurement.
 * ══════════════════════════════════════════════════════════════════════════ */

/** THE HOMOPHONE GROUPS, AND THE PROMPT'S VERSION IS FALSE (§A.5).
 *
 *  The prompt asks for `miens`/`miennes` « and the equivalents », which are a
 *  nasal vowel against an oral vowel plus a real /n/ and are the SAME contrast
 *  it calls audible one paragraph earlier. What is genuinely one sound is the
 *  PLURAL: the `-s` is silent on all eighteen forms, so the possessive word
 *  never marks number to the ear and only the article does.
 *
 *  Every group below is the singular and plural of one stem. `le mien` against
 *  `les miens` is still a legal ear question, because `luh` and `lay` are a
 *  genuine vowel contrast the corpus has been encoding all along — a2.33
 *  measured the identical pair as `ce` SUH against `ces` SAY and called it
 *  « the one pair here your ear can settle ». The guard therefore fires only
 *  when two options differ ONLY by a member of a group. */
export const HOMOPHONE_FORMS: readonly string[][] = [
  ['mien', 'miens'],
  ['mienne', 'miennes'],
  ['tien', 'tiens'],
  ['tienne', 'tiennes'],
  ['sien', 'siens'],
  ['sienne', 'siennes'],
  ['nôtre', 'nôtres'],
  ['vôtre', 'vôtres'],
  ['leur', 'leurs'],
];

/** AND THE CIRCUMFLEX PAIR, WHICH IS THE OTHER DIRECTION. `notre` and `nôtre`
 *  are one sound in this scheme AND one string under `fold()`, so they are the
 *  only thing in the lesson that no surface but mcq can test. Kept separate
 *  from `HOMOPHONE_FORMS` because it is a spelling group rather than a number
 *  group and the guards differ. */
export const ACCENT_PAIRS: readonly [string, string][] = [
  ['notre', 'nôtre'],
  ['votre', 'vôtre'],
];

/** WHAT THE EAR CAN ACTUALLY DO HERE, and it is two things. The masculine and
 *  feminine stems differ — `MYEHⁿ` against `MYENN`, a nasal vowel against an
 *  oral one — and the article differs, `luh` against `lah` against `lay`. The
 *  prompt asks for two `listenChoose` items on `le mien` against `la mienne`
 *  and there are two. */
export const AUDIBLE_PAIR = ['le mien', 'la mienne'] as const;
export const AUDIBLE_CLAIM =
  'le mien and la mienne are a real difference your ear can hear. The s that makes them plural is not, and neither is the accent on nôtre.';

/** NEAR MISSES THAT DO NOT COLLIDE, so they are legal on a scored surface.
 *  Asserted the other way round too, so the day `fold()` changes this list goes
 *  stale loudly rather than silently. */
export const NEAR_MISSES: [string, string][] = [
  ['le mien', 'la mienne'],
  ['le mien', 'les miens'],
  ['les miens', 'les miennes'],
  ['la mienne', 'les miennes'],
  ['le leur', 'les leurs'],
  ['le leur', 'la leur'],
  ["C'est le mien.", "C'est à moi."],
  ['mon sac', 'le mien'],
];

/** THE PAIRS THAT DO COLLIDE under `fold()`. Each folds to ONE string, so each
 *  is banned from every scored free-text surface. THE FIRST TWO ARE THE
 *  FINDING and they are trap 4: the circumflex vanishes, so `le nôtre` can
 *  only ever be an mcq. */
export const FOLD_COLLISIONS: [string, string][] = [
  ['le nôtre', 'le notre'],
  ['notre', 'nôtre'],
  ['la vôtre', 'la votre'],
  ["c'est à moi", 'cest a moi'],
  ['le mien', 'LE MIEN'],
  ['les miens', 'lesmiens'],
];

/** The questions this build wanted and could not write (a2.09's model). */
export const WANTED_AND_IMPOSSIBLE: readonly { want: string; why: string }[] = [
  { want: 'a typeIn keyed on the circumflex in le nôtre', why: 'fold() strips every combining mark, so « le notre » is accepted as « le nôtre » and the learner is told they spelled it right. Written as an mcq instead, and the batch refuses any typed question whose answer ends on a circumflex form' },
  { want: 'a listenChoose between notre and nôtre', why: 'the corpus respells the adjective voh-TRUH and the pronoun VOH-truh, so the possessive word is the same noise and only the article differs. The prompt says mcq is preferable; it is the only option' },
  { want: 'a listenChoose between le mien and les miens', why: `legal but weak: the two differ only in the article, luh against lay, which is ${unitRef('a2.33')} ce/ces one paradigm along rather than anything this lesson teaches. The two ear items ask about the STEM instead` },
  { want: 'a typeIn on the capital in Ce sont', why: 'fold() lowercases, and only mcq can test a capital. Nothing in this lesson turns on one, so no question asks' },
  { want: 'an errorSpot on a bare mien with no article', why: '« C\'est mien. » is the error English speakers actually produce and errorSpot is the right surface, so it IS written. Recorded here because the first draft assumed fold() would merge it with « C\'est le mien. » and it does not: cestmien and cestlemien are different strings' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE GENERALISATION TEST
 *
 *  Doctrine §B.1. The prompt asks for « a noun the lesson never uses » with
 *  « the full possessive pronoun » required, in one mission near the end.
 *
 *  `la casquette` WAS CHOSEN AGAINST THE CORPUS, not by taste. Measured across
 *  every published row:
 *
 *    - 5 rows carry it, so the word is not exotic
 *    - it is a headword at `fr.a2.vetements.060`, FEMININE, respelled
 *    - ZERO of the 5 carries any possessive pronoun, so nothing this lesson
 *      imports can leak the answer
 *    - it is feminine and singular, which forces `la mienne` — the cell whose
 *      form changes rather than just its article, and therefore the one that
 *      actually tests the rule
 *
 *  `le parapluie`, `la trousse`, `la ceinture`, `la cravate`, `la montre`,
 *  `le portefeuille` and `l'écharpe` were all measured clean as well; the two
 *  the lesson uses in `UNSEEN_FRAME_ROWS` are `parapluie` and `trousse`, and
 *  they are named there precisely so they cannot also be the unseen one.
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNSEEN = {
  noun: 'casquette',
  article: 'la casquette',
  en: 'the cap',
  gender: 'f',
  id: 'fr.a2.vetements.060',
  answer: 'la mienne',
  sentence: 'La casquette est la mienne.',
} as const;

export const UNSEEN_REJECTED = [
  { noun: 'parapluie', why: 'masculine, so the answer is le mien and the form never changes. It is used in fr.a2.pronoms-essentiels.393 as the frame instead' },
  { noun: 'trousse', why: 'feminine and clean, and it is used in fr.a2.pronoms-essentiels.394 as the feminine half of the frame, which puts the answer in the lesson' },
  { noun: 'sac', why: "this lesson's own scene noun, on nine authored rows" },
  { noun: 'valise', why: 'on seven authored rows and in the imported fr.a2.comparaisons.084' },
  { noun: 'clés', why: 'on four authored rows and in the imported fr.a2.pronoms-essentiels.259' },
  { noun: 'gants', why: 'on two authored rows, and its one published headword fr.a1.jardinage.079 carries a respelling this build declines to repair (§E)' },
] as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  §J. DISPLAY PARITY
 *
 *  Invariants §5: the corpus file is the single source of truth for every
 *  string the lesson displays. EVERY SHIPPED LESSON IN THIS BAND BREAKS THAT
 *  and so does this one, because a `cardDeck` card and a `tapTable` cell carry
 *  inline strings rather than itemIds.
 *
 *  a2.08's mutation harness proved the consequence and it is now covered
 *  seed-wide for `groupDrill` by `production-surface.test.ts`. Everything else
 *  is pinned here: where the copy IS the teaching, the section must carry the
 *  row's `fr` VERBATIM, checked against the row rather than a retyped constant.
 * ══════════════════════════════════════════════════════════════════════════ */

export const DISPLAY_PARITY: readonly { section: string; itemId: string; why: string }[] = [
  { section: 's03-adj', itemId: E(364), why: 'required layout 2, the noun named' },
  { section: 's03-adj', itemId: E(365), why: 'required layout 2, the same noun replaced' },
  { section: 's03-adj', itemId: E(366), why: 'the feminine half of the same pair' },
  { section: 's03-adj', itemId: E(367), why: 'the same' },
  { section: 's03-adj', itemId: E(368), why: 'the masculine plural half' },
  { section: 's03-adj', itemId: E(369), why: 'the same' },
  { section: 's03-adj', itemId: E(370), why: 'the feminine plural half' },
  { section: 's03-adj', itemId: E(371), why: 'the same' },
  { section: 's04-four', itemId: E(372), why: 'required layout 1, masculine singular, noun visible' },
  { section: 's04-four', itemId: E(373), why: 'required layout 1, feminine singular, noun visible' },
  { section: 's04-four', itemId: E(374), why: 'required layout 1, masculine plural, noun visible' },
  { section: 's04-four', itemId: E(375), why: 'required layout 1, feminine plural, noun visible' },
  { section: 's10-third', itemId: E(378), why: 'trap 1 in one sentence: one form, two owners' },
  { section: 's11-three', itemId: E(384), why: 'the leur plural on a masculine noun' },
  { section: 's11-three', itemId: E(385), why: 'and on a feminine one, which is the whole claim' },
  { section: 's12-circ', itemId: E(386), why: 'trap 4, the adjective without the accent' },
  { section: 's12-circ', itemId: E(380), why: 'trap 4, the pronoun with it, on the same noun' },
  { section: 's17-amoi', itemId: E(388), why: 'required layout 3, the spoken half' },
  { section: 's17-amoi', itemId: E(365), why: 'required layout 3, the written half' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §K. THE GUARD TABLES
 *
 *  A2-TAIL-AUDIT §4: guard the THING, not the letters, and put the sentence
 *  that broke an earlier version in the MUST_NOT_FIRE list, because the next
 *  author will write the same shape.
 * ══════════════════════════════════════════════════════════════════════════ */

/** THE BARE POSSESSIVE, WHICH IS THE ERROR ENGLISH SPEAKERS ACTUALLY PRODUCE.
 *
 *  « C'est mien. » and « C'est mon. » are both ungrammatical and both are what
 *  an English speaker reaches for, because « mine » is one word and takes no
 *  article. They appear as the error in exactly four marked places and nowhere
 *  else, and the batch asserts BOTH directions.
 *
 *  THE SHAPE HAS TO SEE A POSSESSIVE WITH NO ARTICLE IN FRONT, which means it
 *  has to know what an article looks like. The house boundary is used with the
 *  apostrophe dropped from the left (Corrections §14.3) so it can see `c'est`,
 *  and the hyphen is NOT in either class, because nothing here is hyphenated
 *  and keeping it would be cargo from a2.33. */
export const BARE_STEMS = ['mien', 'mienne', 'miens', 'miennes', 'tien', 'tienne', 'tiens', 'tiennes', 'sien', 'sienne', 'siens', 'siennes'] as const;

/** What may sit in front of a possessive pronoun. A stem with none of these
 *  before it is the trap. */
export const LEGAL_ARTICLES = ['le', 'la', 'les', 'du', 'des', 'au', 'aux'] as const;

/** THE FOUR SECTIONS THE BARE FORM IS ALLOWED IN, BY ID, every one of them a
 *  place where the form is MARKED as wrong: a scene bubble the clerk does not
 *  answer, a groupDrill check distractor, a `commonErrors` `wrong` block and an
 *  `errorSpot` `prompt`.
 *
 *  `s15-trap` IS NOT ON THIS LIST AND THE GUARD IS WHY. It was, on the first
 *  draft, by analogy with a2.33 — and the list is asserted in BOTH directions,
 *  so a section allowed to show the form and not showing it is a dead
 *  allowance. s15-trap is the `leur` trap and every wrong form on it is a
 *  `leur`, which is not a bare possessive: `leur` is also the adjective and the
 *  object pronoun and is correct with nothing in front of it. `NO_SUCH_FORM`
 *  covers that section instead.
 *
 *  `s08-unseen` WAS ADDED AFTER THE GUARD FIRED ON IT. Its control check offers
 *  « C'est mienne. » as the third option, which is the error an English speaker
 *  actually produces and the best distractor the generalisation question has.
 *  An mcq option the learner is asked to reject is exactly the marked slot this
 *  allowance exists for. */
export const BARE_ALLOWED_IN = ['s01-scene', 's08-unseen', 's16-errors', 's22-quiz'] as const;

/** THE THREE `leur`s, WHICH IS TRAP 2 AND WHICH REPLACES THE PROMPT'S VERSION
 *  (§A.4). All three are published rows and two of them are a2.24's own cards,
 *  so the claim is about the product rather than about this lesson. */
export const THREE_LEURS = [
  { id: 'fr.a2.pronoms-essentiels.240', fr: 'Je leur parle.', job: 'object pronoun', takesS: false, owner: 'a2.24' },
  { id: 'fr.a2.pronoms-essentiels.258', fr: 'Voici leur maison.', job: 'possessive adjective, one thing', takesS: false, owner: 'a1.17' },
  { id: 'fr.a2.pronoms-essentiels.259', fr: 'Voici leurs clés.', job: 'possessive adjective, several things', takesS: true, owner: 'a1.17' },
  { id: E(383), fr: 'Le sac est le leur.', job: 'possessive pronoun, one thing', takesS: false, owner: 'a2.34' },
  { id: E(384), fr: 'Les sacs sont les leurs.', job: 'possessive pronoun, several things', takesS: true, owner: 'a2.34' },
] as const;

/** THE FORM THAT DOES NOT EXIST, ANYWHERE, AT ANY LEVEL: there is no
 *  `les leur`. The plural of the possessive pronoun puts an `-s` on BOTH
 *  words, which is what makes the prompt's trap 2 false. Asserted absent from
 *  every authored row and from every learner surface except the THREE places
 *  that mark it as the error: a trapDrill `promptSound`, a `commonErrors`
 *  `wrong` block and an `errorSpot` `prompt`.
 *
 *  `s16-errors` WAS ADDED AFTER THE GUARD FIRED ON IT, which is the guard
 *  working rather than the guard being wrong: a lesson that teaches the plural
 *  has to be able to print the wrong plural somewhere. */
export const NO_SUCH_FORM = 'les leur';
export const NO_SUCH_FORM_ALLOWED_IN = ['s15-trap', 's16-errors', 's22-quiz'] as const;

/** THE PROMPT'S FOUR WORDINGS OF TRAP 2, held so a later author reading the
 *  brief cannot reintroduce a claim this build measured false. Every one is
 *  refused on every learner surface. */
export const FALSE_LEUR_CLAIMS = [
  'leur never takes an -s',
  'leur never takes an s',
  'leur is invariable inside the pronoun',
  "the -s on leurs is the article's agreement",
  'the plural is carried by les',
] as const;

/** a2.24's sentence is TRUE and is quoted verbatim, and it is about the OTHER
 *  leur. This is the clause that keeps the two apart, so the quotation cannot
 *  be read as covering the possessive. */
/** THE CLAUSE THAT KEEPS a2.24's SENTENCE OFF THE POSSESSIVE.
 *
 *  It used to read « in front of a verb », which is a phrase already inside the
 *  quotation, so the guard requiring it was satisfied by the quote itself and
 *  could never fail. It now says the thing the quote does NOT say, which is
 *  that the verb is the entire condition, and the guard is no longer a
 *  tautology.
 *
 *  It is also four words shorter, and after the unit-id migration the labels
 *  are longer than the ids they replaced: this card hit the 45-word core cap
 *  the moment « a2.24 » became « lesson 22 ». */
export const LEUR_RULE_SCOPE = 'the verb is the whole of it';

export const OUT_OF_BAND_TENSES: readonly { name: string; stems: readonly string[]; endings: readonly string[] }[] = [
  {
    name: 'imparfait',
    stems: ['voul', 'pouv', 'dev', 'sav', 'fais', 'dis', 'ét', 'av', 'all', 'prena', 'vena', 'croy', 'voy', 'regard', 'parl', 'habit', 'cherch', 'coût', 'pes'],
    endings: ['ais', 'ait', 'aient', 'iez', 'ions'],
  },
  {
    name: 'futur simple / conditionnel',
    stems: ['ser', 'aur', 'ir', 'viendr', 'prendr', 'voudr', 'pourr', 'devr', 'saur', 'fer', 'mettr'],
    endings: ['ai', 'as', 'a', 'ons', 'ez', 'ont', 'ais', 'ait', 'aient', 'ions', 'iez'],
  },
];

/** The pronominal `en` and `y`, which belong to a2.25. Shaped as `en` plus a
 *  verb rather than as a bare `en`, because `en cuir` and `en France` are the
 *  preposition. */
export const PRONOMINAL_EN_Y: readonly string[] = [
  "j'en", 'en ai', 'en as', 'en avons', 'en avez', 'en ont', 'en veux', 'en veut',
  'en prends', 'en prend', 'en voit', 'en reste', 'en parle',
  'y vais', 'y va', 'y suis', 'y est', 'y ai', 'y pense',
];

/** The demonstrative PRONOUNS, which are a2.33's and which this lesson does not
 *  teach. `production-surface.test.ts` enforces this seed-wide for every A2
 *  lesson BEFORE seq 33 and stops at seq 33, so seq 34 is outside its scope and
 *  this list is the local half of the same rule.
 *
 *  The demonstrative ADJECTIVES are NOT here. a2.33 taught them one lesson ago,
 *  `Ce sont` is their impersonal cousin and this lesson authors eight rows
 *  using it, and the seed-wide guard spares them for the same reason. */
export const DEMONSTRATIVE_PRONOUNS = ['celui', 'celle', 'ceux', 'celles'] as const;

/** The comparative machinery, which is a2.08's. This lesson imports seven of
 *  its sentences and teaches none of it, so the guard is scoped to the
 *  surfaces where a word would be TAUGHT rather than shown: a card body, a
 *  term, a sheet, a roundup point. */
export const COMPARATIVE_FORMS = ['plus grand', 'moins grand', 'aussi grand', 'meilleur', 'le plus', 'le moins', 'mieux que', 'pire'] as const;

export const MUST_FIRE: Record<string, readonly string[]> = {
  bare: [
    "C'est mien.",
    "C'est mienne.",
    'Le sac est mien.',
    "C'est tien.",
    'Ce sont miens.',
    // THE CLAUSE-LEVEL CASE. A card body is English prose with French quoted
    // inside it, so a whole-string test skips exactly the place the error would
    // appear. a2.33's mutation harness found this and the shape is copied.
    "C'est mien. That is what English does, and French will not have it.",
  ],
  tense: [
    "Mon frère a dit que c'était sa faute, pas la mienne.",
    'Je prendrais le mien.',
    'Elle voulait la sienne.',
    'Ma valise pesait plus que la tienne.',
  ],
  enY: [
    "J'en ai deux comme ça.",
    'Il en veut un autre.',
  ],
  demonstrative: [
    'Je prends celui-ci.',
    'Non, celle du premier est plus petite.',
  ],
  leurClaim: [
    'leur never takes an -s, and the article does.',
    'Remember: leur is invariable inside the pronoun.',
    "The -s on leurs is the article's agreement, not leur's.",
  ],
  noSuchForm: [
    'Ce sont les leur.',
    'Les sacs sont les leur.',
  ],
};

export const MUST_NOT_FIRE: Record<string, readonly string[]> = {
  /** The bare-possessive guard must NOT fire on a possessive that HAS its
   *  article, which is every correct sentence in the lesson, nor on the
   *  possessive ADJECTIVE, which a1.17 owns and which has no article by
   *  design, nor on English prose mentioning a French word. */
  bare: [
    "C'est le mien.",
    'La valise est la mienne.',
    'Ce sont les miennes.',
    // THE ADJECTIVE, WHICH HAS NO ARTICLE AND IS CORRECT. This broke the second
    // version of the guard: `mon sac` looks exactly like a possessive with
    // nothing in front of it, because that is what it is.
    "C'est mon sac.",
    'Ce sont mes gants.',
    'Notre valise est ici.',
    // THE ENUMERATION. A lesson cannot teach four forms it is forbidden to
    // list, and this is a real string off this lesson's own surfaces.
    'le mien · la mienne · les miens · les miennes',
    'mien, mienne, miens and miennes, and the thing owned picks between them',
    // THE ENGLISH HALF OF A LEARNER SURFACE. A2-TAIL-AUDIT §4: a shape built
    // from French morphology reads English as French.
    'The word mien never appears on its own, and neither does mienne.',
    'Read the thing, then say the article, then say the rest.',
  ],
  /** The tense guard must not read a noun or an adjective as a verb. Every one
   *  of these is a real string off this lesson's surfaces. */
  tense: [
    'Ma valise pèse plus que la tienne.',
    'Le sac est le mien.',
    "C'est à moi.",
    'Paul a le sien et Marie a le sien.',
    'Notre équipe joue mieux que la vôtre.',
    'Parfait. Alors le sac et les gants.',
    'Vous avez trouvé le vôtre ?',
  ],
  /** The en/y guard must not read the PREPOSITION `en`. */
  enY: [
    'Le sac en cuir est le mien.',
    'Nous partons en France demain.',
  ],
  /** The demonstrative guard must not fire on the demonstrative ADJECTIVE,
   *  which a2.33 taught one lesson ago and which eight authored rows use, nor
   *  on the English word « ones ». */
  demonstrative: [
    'Ce sont les miens.',
    'Ce sont mes gants.',
    "C'est la mienne.",
    'These ones are mine, and those ones are theirs.',
  ],
  /** The false-claim guard must not fire on a2.24's TRUE sentence, which is
   *  quoted verbatim and which is about a different word. This is the whole
   *  point of §A.4 and the guard would be useless if it caught the quotation. */
  leurClaim: [
    'The leur in front of a verb never takes an s. Ever.',
    'a possessive has a thing behind it',
    'Voici leurs clés, and the s is there because there are several keys.',
    'Les leurs, with an s on both words, because there are several of them.',
  ],
  /** The no-such-form guard must not fire on the real plural, nor on the
   *  singular, nor on the object pronoun. */
  noSuchForm: [
    'Les sacs sont les leurs.',
    'Le sac est le leur.',
    'Je leur parle.',
    'Voici leur maison.',
  ],
};

/* ── HOUSE COPY ───────────────────────────────────────────────────────────── */

/** No grammar jargon on a learner surface (invariants §8). `grammarIntroduced`
 *  is addressed to the curriculum and is exempt.
 *
 *  Corrections §14.5: `adjective` and `pronoun` are NOT jargon — `adjective` is
 *  on 147 shipped cards — so the RATIO is guarded instead and the plain phrase
 *  must outnumber the technical one.
 *
 *  Corrections §13: `hasPhrase` is boundary-exact, so a list holding `pronoun`
 *  does not catch `pronouns`. The `-s` plural of every entry is checked. */
export const JARGON = [
  'possessive determiner', 'determiner', 'proform', 'anaphoric', 'antecedent',
  'clitic', 'nominal', 'substantive', 'referent', 'disjunctive', 'tonic',
  'stressed pronoun', 'paradigm', 'inflection', 'morphology', 'allomorph',
  'noun phrase', 'head noun', 'genitive', 'possessum', 'possessor',
] as const;

/** The house prefers the plain phrase. This lesson's plain phrase is
 *  `the thing owned`, against the technical `possessive`. */
export const TECHNICAL_WORD = 'possessive';
export const PLAIN_PHRASE = 'the thing owned';

export const BANNED_SUBSTRINGS = ['honest', '—'] as const;

/** AI-tell phrasing, doctrine §F. */
export const FORBIDDEN_CLAIMS = [
  'falls fast', 'trip up', 'half of everything', 'this is the big one',
  'listen to the trap', 'get those two right', 'this is the part that pays',
  'here is the catch',
] as const;

/** Fields that validate, publish and are read by NO renderer. */
export const DEAD_AUDIO_FIELDS = ['modelPlayback', 'wrongThenRight', 'perSentenceReplay', 'scoreOn', 'autoplay', 'maxPlays'] as const;
export const DEAD_LESSON_FIELDS = ['teaches', 'canDo', 'track'] as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  §L. THE GAP THIS BUILD IS ASKED TO NAME
 *
 *  The prompt: « **Stressed pronouns** (`moi`, `toi`, `lui` after a
 *  preposition) are needed for `à moi` and are owned by no unit. Use the two or
 *  three you need, name the gap in your report, and do not build a paradigm. »
 *
 *  MEASURED, and the gap is real. Corrections §7 says the ownership question
 *  can only be answered by reading the briefs and the shipped
 *  `grammarIntroduced` rather than by searching unit bodies, and both were read:
 *
 *    - no A1 or A2 brief names `moi`, `toi`, `lui`, `elle`, `nous`, `vous`,
 *      `eux` or `elles` as a stressed set
 *    - a2.24 shipped `STRESSED_RULE` — « After a little word like avec, sans or
 *      pour, lui stands on its own and stays where English puts it. » — as its
 *      own TRAP TWO, which teaches the shape for `lui` and only for `lui`
 *    - `à toi` is published 10 times, `à moi` 5, `à eux` 3, `à elles` 0
 *
 *  So the set is half-owned by a2.24 for one person and unowned for the other
 *  seven. This build uses THREE of them — `moi`, `toi` and, inside one imported
 *  a2.24 row, `lui` — and builds no paradigm. The gap is named in the report
 *  and here, so a later author does not have to re-derive it.
 * ══════════════════════════════════════════════════════════════════════════ */

export const STRESSED_USED = ['moi', 'toi'] as const;
export const STRESSED_GAP =
  `moi, toi, lui, elle, nous, vous, eux and elles as a stressed set are owned by no unit at A1 or A2. ${Cap(unitRef('a2.24'))} teaches the shape for lui alone, as its trap 2. This lesson uses moi and toi and builds no paradigm.`;
