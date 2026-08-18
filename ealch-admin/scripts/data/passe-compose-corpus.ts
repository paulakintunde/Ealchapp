// The a2.05 corpus: what this lesson authors, what it imports, the one repair
// and four respellings it supplies, and the four measurements that decided its
// shape.
//
// THIS FILE IS THE SINGLE SOURCE OF TRUTH for every `fr`, `ipa`, `respell` and
// `en` a2.05 puts on a screen. The lesson body (passe-compose-lesson.ts) reads
// them FROM HERE and never restates them.
//
// ══════════════════════════════════════════════════════════════════════════
//  1. THE LEDGER DECISION THIS LESSON WAS BUILT TO MAKE: A PAST PARTICIPLE IS
//     NOT A CORPUS ITEM. NEITHER THIS LESSON NOR a2.20 AUTHORS ONE.
// ══════════════════════════════════════════════════════════════════════════
//
// Doctrine §E lists it as undecided and says forty irregular past forms are
// "either forty new rows or zero". The brief adds sixty on this side and warns
// that a hundred rows in one theme collide on `fr` in the flashcard hub.
//
// **The answer is zero on both sides, and it is not a compromise: it is the
// rule a2.01 already set, applied to the form in front of us.** Ledger §5:
//
//     Is a conjugated form ever a corpus item? NO. Only infinitives and full
//     sentences. A bare `parles` as a row would be served by the flashcard hub
//     as a card with no subject, which is the one thing this level teaches you
//     not to do.
//
// A past form is a conjugated form. `mangé` on a card is `parles` on a card:
// a shape with nobody attached to it, unsayable on its own, and colliding with
// the infinitive it is built from — `parler` and `parlé` are one sound, which
// is this lesson's whole trap.
//
// MEASURED 2026-08-14, and the corpus agrees with the rule it never wrote down:
//
//     regular past forms as bare rows (parlé, mangé, fini, vendu, ...)     0
//     bare rows that LOOK like past forms                                 24
//       and every one of them is a word in its own right: `fermé` and
//       `ouvert` are adjectives, `été` is the season, `réussi` is
//       "successful", `vu` is the preposition in `vu que`. The only ones
//       glossed AS past forms are nine rows in `fr.sons.voyelles` that exist
//       to demonstrate a vowel and carry NO RESPELLING at all.
//
// So the corpus has never treated one as a headword either. **a2.20 inherits
// this**, and the consequence is written into its reservation below: its forty
// irregular forms arrive as forty short SENTENCES in one frame, which also
// fixes the thing the nine voyelles rows demonstrate — a bare past form
// reaches a card the learner cannot say.
//
// The `fr` collision the brief feared cannot happen, because neither side
// authors a headword. What the two lessons still had to split is IDS, and that
// is done: this lesson takes `fr.a2.verbes.541..590` and a2.20 is reserved
// `.591..650`. See A2-BATCH-1-LEDGER.md, the a2.05 amendment.
//
// ══════════════════════════════════════════════════════════════════════════
//  2. THE CORPUS PUBLISHED THIS LESSON'S NEGATIVE NINETY TIMES AND RESPELLED
//     EXACTLY ONE OF THEM.
// ══════════════════════════════════════════════════════════════════════════
//
//     ne/n' + a form of avoir + pas + a past form        90 published rows
//                                    carrying a respelling       1
//
// The one is `fr.sons.masterclass.021` « Il n'a pas mangé. » [eel na pa
// mahⁿ-ZHAY], which is the exact sentence this lesson's paradigm needs in the
// `il` slot. It is IMPORTED rather than re-authored, and it is the reason this
// build's paradigm is five authored rows and one published card rather than
// six authored rows.
//
// Corrections §3 — "the corpus has forms and no minimal pairs" — holds for the
// other eighty-nine, and a2.13 §1 is the half that bites: a row without a
// respelling reaches a card the learner cannot say, so the importable pool was
// not ninety but one. Four more are imported and given the respelling they
// never had. See RESPELL_ADDITIONS.
//
// AND THE FIGURE ONLY CAME OUT AT NINETY BECAUSE OF ONE CHARACTER.
// a2.19's generator writes `(ne|n'')` in this pattern and passes it to Postgres
// as a PARAMETER rather than embedding it in a single-quoted SQL literal, so
// the doubled apostrophe survives and the alternation can only ever match the
// UN-ELIDED `ne`. Its own thirteen rows are all `ne vais pas`, so nothing there
// looked wrong. **This lesson's negative is elided in every person — n'ai, n'a,
// n'ont — and the same shape would have measured ZERO.** Found on this build's
// first manifest run, by the assertion that the `il` row of the paradigm must
// still be in the result set. See the note at the head of _a205_manifest.ts.
//
// AND THEIR ONLY DRILL IS `dictation`. All four were published as dictée
// targets with nothing to say them with. See DRILL_ADDITIONS.
//
// ══════════════════════════════════════════════════════════════════════════
//  3. a2.19 PREDICTED THIS LESSON'S DICTÉE WOULD BE LONGER. IT IS FOUR
//     LETTERS SHORTER, AND `je` COMES BACK.
// ══════════════════════════════════════════════════════════════════════════
//
// a2.19 §6 measured that `ne` and `pas` cost five letters, that its negative
// fits `dicteeMode`'s sixteen-letter LETTERS window in only three of eight
// persons, and that `je` — the person a learner most wants to produce — is one
// letter over. It closed with: *"a2.05's auxiliary plus participle will be
// longer still; budget for the frame before the content."*
//
// **Measured through the real function, that is false, and by four letters:**
//
//     Je ne vais pas partir.    17   WORD mode    a2.19, seq 15
//     Je n'ai pas mangé.        13   LETTERS      this lesson, seq 16
//
// `ne` elides to `n'` in front of every single form of avoir, and the elision
// takes a letter and a space with it. The result is that the affirmative fits
// in all eight persons and the negative in SIX — je, tu, il, on, elle and ils.
// Only `nous` and `vous` go over.
//
// **So the person a2.19 could not test is the first one this lesson tests**,
// and the dictée runs the whole `je` pair. See DICTEE_MATRIX, which is checked
// through the real `dicteeMode` in all three layers.
//
// ══════════════════════════════════════════════════════════════════════════
//  4. THE `pas` SPELLING. THIS LESSON WRITES `pa` AND a2.19 WRITES `pah`.
// ══════════════════════════════════════════════════════════════════════════
//
// Measured across every published respelling whose French holds ne ... pas:
// `pah` 30 rows, `pa` 23. Corpus-wide it is a coin toss and invariants §9
// forbids repairing either. Narrowed to the rows that hold THIS lesson's
// shape — an ELIDED negative round a form of avoir — it is unanimous:
//
//     fr.sons.masterclass.021   Il n'a pas mangé.          eel na pa mahⁿ-ZHAY
//     fr.sons.elision.065       Je n'ai pas d'argent.      zhuh nay pa dar-ZHAHⁿ
//     fr.sons.elision.030       je n'ai pas                zhuh nay PA
//     fr.a1.famille.233         Je n'ai pas de voiture.    zhuh neh pa duh vwa-TÜR
//     fr.a1.famille.234         Je n'ai pas faim.          zhuh neh pa FAⁿ
//     fr.sons.alphabet.283      ... je n'ai pas bien entendu ...      NEH PA
//
// Six rows, six `pa`, zero `pah`. a2.19's nine are all `ne` UN-elided
// (`zhuh nuh veh pah`), which is a different string. **The value is read off
// the published rows rather than inherited from the neighbour**, which is what
// RESPELL_CONVENTION records and what let this build import masterclass.021
// instead of refusing it.
//
// Measured 2026-08-14 against Postgres by `scripts/_a205_probe.ts` through
// `_a205_probe4.ts`, and against a1.07, a2.01, a2.17, a2.18 and a2.19 read as
// shipped.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THE BRIEF GOT WRONG, OR LEFT UNVERIFIED. ELEVEN CLAIMS, MEASURED.
// ══════════════════════════════════════════════════════════════════════════
//
//   1. "Four later lessons declare it as a prerequisite."
//
//      THREE DO. a2.20 (seq 17), a2.21 (seq 18) and a2.31 (seq 30, School and
//      Studies). Measured against all 76 curriculum units. a2.31 is the one no
//      document in this band mentions and it is the reason the roundup names
//      the past tense as something the learner will need for talking about
//      what they studied, rather than only for the next two lessons.
//
//   2. "The sub says sixty."
//
//      THE SUB SAYS « Le passé composé avec avoir » AND NOTHING ELSE. The
//      sixty comes from the `sub` the brief's own identity block carried, which
//      corrections §1 had already measured as a string that exists nowhere in
//      the database. **The whole sixty-participle question rests on a field
//      that does not exist**, and once that is gone the ledger decision in §1
//      above is the only thing left to settle. See PARTICIPLE_DECISION.
//
//   3. "Two words, and everything else goes between them." (the reframe candidate)
//
//      FALSE, AND THIS BUILD AUTHORS THE COUNTEREXAMPLE. « J'ai mangé une
//      pomme. » puts the object OUTSIDE the two words, and a learner running
//      that rule produces « j'ai une pomme mangé ». A rule that sounds runnable
//      and is false is worse than a longer one that works, which is a2.19's own
//      test for a reframe. See REFRAME_REJECTED.
//
//   4. "a2.01 authored its rows so that this lesson could import cleanly ...
//      check whether it complied."
//
//      IT COMPLIED, AND THE MEASUREMENT IS WIDER THAN THE CLAIM. All 25 of
//      `fr.a2.verbes.101..125` are simple present with an explicit subject, and
//      across the WHOLE published corpus there are ZERO rows putting a bare
//      -ER infinitive straight after a form of avoir. The evidence is clean and
//      this build leaves it that way: the one place « j'ai manger » appears is
//      inside the sections where the error is the content.
//
//   5. "avoir 2 rows ... vendre repaired by a2.11."
//
//      TRUE. `fr.a2.verbes.027` holds [VAHⁿDR] and is imported. The brief's
//      warning that `fr.b1.courses.042` carries `gender=m` on avoir is real and
//      that row is not the one taken.
//
//   6. "a2.02 and a2.18 were both told they may author past-referring corpus
//      sentences. Read those headers."
//
//      a2.18 AUTHORED EXACTLY ONE AND FLAGGED IT: `fr.a2.prepositions-
//      essentielles.174` « J'ai commencé il y a trois jours. », respelled, and
//      its own ledger note hands it to this lesson by name. **a2.02 authored
//      NONE.** Its 29 rows (fr.a2.verbes.261..289) are present tense
//      throughout, including all six `venir de` rows, which refer to the past
//      without using a past tense. Both are imported or read here.
//
//   7. "il y a for ago was deferred to you by a2.18. Close that loop in one
//      mission."
//
//      TAKEN, AND IT IS WORTH MORE THAN ONE MISSION'S CREDIT: a2.18's canDo was
//      REWORDED on 2026-08-14 because it promised "how long ago", which needs
//      this tense. So this lesson is not decorating a hand-off, it is
//      delivering a canDo another unit gave up. Named in the section that
//      closes it and in the roundup.
//
//   8. "Adverb placement in compound tenses was deferred to you by a2.17."
//
//      TAKEN. a2.17 §10 records the deferral on a learner surface and measured
//      82 published sentences putting a short adverb between the two words.
//      **Re-measured here at 177**, with the wider adverb list, and THREE of
//      them carry a respelling. Two of the three are imported.
//
//   9. "listenChoose for the auxiliary ... this is the one place in A2 where
//      listenChoose tests something genuinely hard."
//
//      TRUE AND IT IS THE ONLY EAR QUESTION THIS LESSON CAN ASK. `vais` against
//      `ai` is a real contrast; `manger` against `mangé` is one sound and no ear
//      question may offer both. See NO_EAR_QUESTION, which is enforced rather
//      than reported.
//
//  10. "Mission count is within 19 to 24. Assert it."
//
//      THIS LESSON SHIPS 26 SECTIONS IN 7 ACTS AND SAYS SO. Ledger §a2.13-0:
//      the 24-section shape is a convention that was never measured, there is
//      no ceiling in `schema.ts`, and a2.13 shipped 32. This lesson carries one
//      Owns and closes THREE deferrals (a2.17's adverb, a2.18's "ago", and the
//      -er/-é contrast a2.19 sits in front of). Folding those into 24 turns
//      each of them into a single card, which is the shape the doctrine calls a
//      reference document with pictures. The overrun is reported in
//      A2-05-BUILD-REPORT.md rather than hidden.
//
//  11. "Whether 19 to 24 missions can hold formation, sixty participles,
//      negation, adverb placement and two deferral loops. This brief suspects
//      not."
//
//      THE PREMISE WENT AWAY WITH THE SIXTY. Once a past form is not a corpus
//      item, the lesson is a construction with one rule and three endings, and
//      it fits in 26 with room for both loops on their own screens.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import { REFRAME as A219_REFRAME } from './futur-proche-corpus.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
const Cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/* ══════════════════════════════════════════════════════════════════════════
 *  IDENTITY, THE BLOCK, AND THE COUNTS THE BATCH REFUSES TO DISAGREE WITH
 * ═══════════════════════════════════════════════════════════════════════ */

/** The batch-1 home for a verb lesson and a2.19's, one seq back. This lesson's
 *  whole subject is a verb construction built on a1.07's avoir and a2.01's,
 *  a2.10's and a2.11's three regular classes, and every one of those lives
 *  here or in `verbes-essentiels`. */
export const THEME = 'verbes';

/** The theme this build considered and rejected, kept as a constant so the
 *  guards can assert no row of this lesson lands there. `negation-et-
 *  restriction` holds seventy-eight published passé-composé negatives, four of
 *  which this lesson imports and respells; writing INTO it would put a tense
 *  paradigm inside a deck about negation, where a1.18 owns the subject.
 *  a2.19 rejected it for the same reason one seq back. */
export const REJECTED_THEME = 'negation-et-restriction';

/** Byte for byte from `content_units`, measured 2026-08-14 by
 *  `scripts/_a205_probe.ts`. Corrections §1 says never to take it from the
 *  brief. This one the brief carries correctly, because §11 had already
 *  corrected it, and it was re-read anyway because that costs one line. */
export const UNIT = {
  id: 'a2.05',
  seq: 16,
  title: 'The Passé Composé with Avoir',
  sub: 'Le passé composé avec avoir',
  canDo: 'Can talk about the past with avoir and place the negation around the auxiliary',
  prereqUnitIds: ['a2.01', 'a1.07'],
  lessonIds: [] as string[],
} as const;

export const LESSON_ID = 'a2.05.l1';

/** Ledger §10: the maximum has been useless since a2.10.l2 took `.461..500`.
 *  The row COUNT is the only signal. `fr.a2.verbes` held exactly this many rows
 *  when a2.05 claimed `.541`, which is the ledger's own figure after a2.19. */
export const ROW_COUNT_BEFORE = 403;

/** The whole theme, all levels, all statuses, for the report. a2.19 recorded
 *  642 and it is 671 now: a2.19's own 29 landed between the two reads. */
export const THEME_COUNT_BEFORE = 671;

/** a2.19 took `.501..540` and used `.501..529`. This block opens above it and
 *  is FIFTY wide rather than forty, because this lesson authors thirty-six and
 *  a four-row tail is not enough to survive a device pass. `.530..540` is
 *  a2.19's unused tail and ids are the SRS key: it is not backfilled. */
export const ID_BLOCK = {
  from: 'fr.a2.verbes.541',
  to: 'fr.a2.verbes.590',
} as const;

/** RESERVED FOR a2.20, seq 17, which is the next lesson and the one that had to
 *  agree the split. Sixty wide because its forty irregular past forms arrive as
 *  forty SENTENCES rather than forty headwords (see §1 of this header), and a
 *  sentence set needs a frame, a negative and a handful of contrast rows on top
 *  of the forty. Recorded here so a2.20's author does not have to re-derive it,
 *  and asserted by this build's guards so nothing of this lesson lands in it. */
export const A220_BLOCK = {
  from: 'fr.a2.verbes.591',
  to: 'fr.a2.verbes.650',
} as const;

/** a2.03's batch claimed a NAMESPACE when it meant a BLOCK and re-running it
 *  failed on eighteen rows a2.16 legitimately owned. `fr.a2.verbes` holds 403
 *  rows belonging to nine other lessons, so every guard here is scoped to the
 *  BLOCK, and a row inside the block that this build does not own is fatal. */
export const isMine = (id: string): boolean => {
  const m = /^fr\.a2\.verbes\.(\d{3})$/.exec(id);
  if (!m) return false;
  const n = Number(m[1]);
  return n >= 541 && n <= 590;
};

/** And a row of THIS build inside a2.20's reservation is fatal too. */
export const isA220 = (id: string): boolean => {
  const m = /^fr\.a2\.verbes\.(\d{3})$/.exec(id);
  if (!m) return false;
  const n = Number(m[1]);
  return n >= 591 && n <= 650;
};

/* ══════════════════════════════════════════════════════════════════════════
 *  THE LEDGER DECISION, AS A CONSTANT THE GUARDS CAN CHECK
 * ═══════════════════════════════════════════════════════════════════════ */

/** Doctrine §E, settled by this build for the whole level. Written as data
 *  rather than as prose in a header, so the batch, the merge and the test all
 *  refuse a build that departs from it without amending the ledger. */
export const PARTICIPLE_DECISION = {
  isCorpusItem: false,
  authoredHere: 0,
  reservedForA220: 0,
  rule: `A past form is a conjugated form, and ${unitRef('a2.01')} settled that a conjugated form is never a corpus item. Only infinitives and full sentences.`,
  measuredBareRows: 0,
  lookalikeRows: 24,
  why: 'A bare past form on a card has nobody attached to it, cannot be said on its own, and collides with the infinitive it is built from. parler and parlé are one sound, which is this lesson\'s trap.',
} as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  THE NEIGHBOURS, BY UNIT ID, AND WHAT EACH ONE OWNS
 * ═══════════════════════════════════════════════════════════════════════ */

/** a1.07, Avoir, shipped. THE PREREQUISITE that supplies the whole front half
 *  of every sentence in this lesson: the learner already has ai, as, a, avons,
 *  avez, ont and does not learn one new form here. */
export const AVOIR_UNIT = 'a1.07';

/** a2.01, Les verbes en -ER, seq 1. THE OTHER PREREQUISITE, and the source of
 *  the first of the three endings. */
export const ER_UNIT = 'a2.01';
/** a2.10, Les verbes en -IR, seq 3. The second ending. */
export const IR_UNIT = 'a2.10';
/** a2.11, Les verbes en -RE, seq 4. The third, and the lesson that repaired
 *  `vendre` to [VAHⁿDR] in this lesson's own theme. */
export const RE_UNIT = 'a2.11';

/** a1.18, La négation, shipped. It owns `ne ... pas`. */
export const NEGATION_UNIT = 'a1.18';

/** a2.17, Les adverbes, seq 12. It taught placement for simple tenses only and
 *  deferred the compound one to this lesson ON A LEARNER SURFACE. This build
 *  closes it and names a2.17 while doing so. */
export const ADVERB_UNIT = 'a2.17';

/** a2.17's own deferral, verbatim from its shipped lesson. a2.16 §3: assert the
 *  literal, because a back-reference to another unit's line is not a variable. */
export const A217_DEFERRAL =
  `In a past tense the short ones move, and that rule arrives with the tense in ${unitRef('a2.05')}.`;

/** a2.18, Prépositions de temps, seq 14. It met `il y a` for "ago" and did not
 *  produce it, and its canDo was reworded on 2026-08-14 to stop promising a
 *  thing that needs this tense. This lesson delivers it. */
export const TIME_UNIT = 'a2.18';

/** a2.19, Le futur proche, seq 15, immediately before. THE NEGATION RULE COMES
 *  FROM HERE AND IS QUOTED VERBATIM, imported rather than retyped so the two
 *  cannot drift. The brief asks for exactly this and says a paraphrase must go
 *  red; the guards assert the string in all three layers. */
export const FUTUR_UNIT = 'a2.19';
export { A219_REFRAME };

/** a2.20, Participes passés irréguliers, seq 17, the very next lesson. It owns
 *  every past form this lesson refuses to teach, and it inherits the ledger
 *  decision in §1 and the block reserved above. */
export const IRREGULAR_UNIT = 'a2.20';

/** a2.21, Le passé composé avec être, seq 18. It says the opposite of what this
 *  lesson says about agreement, and the contrast only works if this lesson
 *  states its side plainly. */
export const ETRE_UNIT = 'a2.21';

/** a2.06, Direct Object Pronouns, seq 21, AFTER this lesson. « la pomme que
 *  j'ai mangée » needs object pronouns, so the one case where a past form does
 *  agree with avoir is not teachable here and is not taught. */
export const PRONOUN_UNIT = 'a2.06';

/** a2.31, School and Studies, seq 30. THE THIRD DEPENDENT, which no document in
 *  this band mentions and which the brief missed. Its canDo is « Can talk about
 *  what they studied, which subjects and how it went » and it is fourteen seq
 *  positions away, which is why the roundup names it. */
export const SCHOOL_UNIT = 'a2.31';

export const DEPENDENTS = [IRREGULAR_UNIT, ETRE_UNIT, SCHOOL_UNIT] as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  THE REFRAME
 * ═══════════════════════════════════════════════════════════════════════ */

/** Doctrine §B.4: a rule the learner runs while the sentence is already moving.
 *  Eleven words, and it does two jobs in one line because the canDo asks for
 *  two: it says what the shape IS, and it says where the extra words land.
 *
 *  It does not compete with a2.19's, which is about WHICH of two verbs the
 *  negative wraps. That rule is quoted verbatim in the act that needs it and
 *  this one sits on top of it: a2.19 tells you which word to aim at, and this
 *  one tells you there is now a gap to aim into.
 *
 *  It generalises forward without a word changing: a2.20's irregular past forms
 *  go in the same second slot, a2.21 swaps the first word for être and keeps
 *  the gap, and a2.23 puts a reflexive pronoun in front of the whole thing. */
export const REFRAME = 'One verb, two words, and the small ones go in between.';

export const REFRAME_REJECTED: readonly { candidate: string; why: string }[] = [
  {
    candidate: 'The passé composé is formed with avoir plus the past participle.',
    why: 'THE BRIEF NAMES THIS AS THE THING TO REJECT and it is right. It is a description of the form, and the form is not what goes wrong. A learner who has read it still does not know where the negative lands, which is the half of this lesson they will get wrong in public.',
  },
  {
    candidate: 'Two words, and everything else goes between them.',
    why: 'THE BRIEF\'S OWN CANDIDATE, AND IT IS FALSE. This build authors the counterexample: « J\'ai mangé une pomme. » puts the object OUTSIDE the two words, and a learner running the rule as written produces « j\'ai une pomme mangé ». Only the SMALL words go in the gap, which is what the chosen wording says. A rule that sounds runnable and is not is worse than a longer one that works.',
  },
  {
    candidate: A219_REFRAME,
    why: `${Cap(unitRef('a2.19'))}\'s, and taking it would spend this lesson\'s one carried line restating a neighbour\'s. It is quoted verbatim in the act about the negative, credited by unit id, and it answers a different question: it says WHICH of two verbs gets wrapped, and this lesson\'s says that there is a gap between the two words for the wrapping to happen in. Both are on the screen where the negative arrives.`,
  },
  {
    candidate: 'Add -é, -i or -u.',
    why: 'The ending table said as a sentence, and a table already says it better. It is also only a third of the lesson: it says nothing about the first word, nothing about the negative, and nothing about the adverb, so a learner running it mid-sentence has nowhere to put the ne.',
  },
  {
    candidate: 'The first word changes and the second one never does.',
    why: `True, useful, and it is ${unitRef('a2.13')}\'s reframe with two words swapped: « One verb changes for the person, and the next one never does. » ${unitRef('a2.19')} already quoted that one. Reusing a line two lessons in a row stops being a callback and starts being the same card.`,
  },
];

/** The move, in the imperative, for the roundup and the sheet. */
export const THE_MOVE =
  'Put avoir in front for whoever you are talking about, then the past form of the verb, and leave a gap between them. Everything small goes in that gap and nothing else does.';

/* ══════════════════════════════════════════════════════════════════════════
 *  THE CONSTRUCTION: THE FRAME, AND WHY IT IS manger
 * ═══════════════════════════════════════════════════════════════════════ */

/** One verb across the whole paradigm, and it is `manger`.
 *
 *  Four reasons, in the order they decided it:
 *
 *  1. THE CORPUS ALREADY HOLDS THE NEGATIVE, RESPELLED. `fr.sons.masterclass.021`
 *     « Il n'a pas mangé. » [eel na pa mahⁿ-ZHAY] is one of exactly one
 *     respelled passé-composé negative in the whole database, and it is in this
 *     frame. The `il` row of the paradigm is an import.
 *  2. a2.19 PUBLISHED THE FUTUR PROCHE OF THE SAME VERB WITH THE SAME TAIL.
 *     `fr.a2.verbes.527` « Je vais manger avec des amis. » is imported and this
 *     build authors « J'ai mangé avec des amis. » beside it. The sound contrast
 *     the brief asks for is two published cards differing by one syllable.
 *  3. `manger` / `mangé` IS THE HOMOPHONE PAIR. Both are /mɑ̃.ʒe/ and the trap
 *     of the lesson is that no ear can tell them apart.
 *  4. EVERY PERSON FITS THE DICTÉE. See DICTEE_MATRIX and §3 of this header.
 *
 *  The stem change a2.09 teaches (`nous mangeons`) does not reach the past
 *  form, so nothing in this frame collides with that lesson. */
export const FRAME_VERB = 'manger';
export const FRAME_PAST = 'mangé';
export const FRAME_VERB_ID = 'fr.sons.muettes.037';
export const FRAME_VERB_RESPELL = 'mahⁿ-ZHAY';

/** THE FRAME VERB AND ITS PAST FORM ARE THE SAME SOUND, and that is asserted
 *  through the respelling rather than claimed in prose: both are [mahⁿ-ZHAY],
 *  which is why the lesson cannot ask the ear to choose between them. */
export const FRAME_SAME_SOUND = true;

/** The six persons, in a1.05's order, which a2.01 settled for the level: six
 *  rows and not nine. The third column is the constant and it is the argument
 *  of the screen, exactly as `partir` was one seq back. */
export const PERSONS: readonly { person: string; avoir: string; not: string }[] = [
  { person: 'je', avoir: "j'ai", not: "n'ai pas" },
  { person: 'tu', avoir: 'as', not: "n'as pas" },
  { person: 'il', avoir: 'a', not: "n'a pas" },
  { person: 'nous', avoir: 'avons', not: "n'avons pas" },
  { person: 'vous', avoir: 'avez', not: "n'avez pas" },
  { person: 'ils', avoir: 'ont', not: "n'ont pas" },
];

/** The claim the grid makes, and it is about the third column. */
export const GRID_CLAIM =
  'One column changes and one column does not. Avoir moves for the person you are talking about, and the past form is the same five letters in all six rows.';

/** a2.17 measured a THREE-COLUMN tapTable cell on a Pixel 6 at ELEVEN
 *  characters. Every cell in an in-flow grid is inside it. */
export const GRID_CELL_MAX = 11;

/** a2.19 measured a three-column SHEET table cell at TWELVE (`n'allons pas`
 *  renders on one line) and recorded it as a ceiling RAISED from the tapTable's
 *  eleven, because the two are different renderers. This lesson's widest sheet
 *  cell is `n'avons pas`, which is eleven, so it sits inside both numbers and
 *  a2.19's raise is not leaned on. */
export const SHEET_CELL_MAX = 12;

/* ══════════════════════════════════════════════════════════════════════════
 *  THE THREE ENDINGS, AND THE THREE UNITS THEY COME FROM
 * ═══════════════════════════════════════════════════════════════════════ */

/** The whole of the regular system, and the reason the grid is worth a screen:
 *  a learner who sees the three groups reappear intact has just been shown that
 *  fifteen lessons of structure were load-bearing.
 *
 *  Each row names the unit that taught the group, and the verb is that unit's
 *  own frame verb rather than one picked here — `parler` is a2.01's headline,
 *  `finir` is a2.10's, `vendre` is a2.11's. Corrections §4: reusing a
 *  neighbour's frame word is a feature, and « Il a fini. » beside a2.10's
 *  « Il finit tôt. » is a cross-lesson claim in two sentences. */
export const ENDINGS: readonly {
  group: string; verb: string; past: string; ending: string; unit: string; verbId: string;
}[] = [
  { group: '-ER', verb: 'parler', past: 'parlé', ending: '-é', unit: ER_UNIT, verbId: 'fr.sons.verbes-essentiels.015' },
  { group: '-IR', verb: 'finir', past: 'fini', ending: '-i', unit: IR_UNIT, verbId: 'fr.sons.verbes-essentiels.037' },
  { group: '-RE', verb: 'vendre', past: 'vendu', ending: '-u', unit: RE_UNIT, verbId: 'fr.a2.verbes.027' },
];

export const ENDINGS_CLAIM =
  'Three groups, three endings, and they are the same three groups you already have. An -ER verb ends in -é, an -IR verb ends in -i, an -RE verb ends in -u, and there is nothing else to learn about a regular one.';

/* ══════════════════════════════════════════════════════════════════════════
 *  THE OWNS: WHAT GOES IN THE GAP
 * ═══════════════════════════════════════════════════════════════════════ */

export const OWNS_CLAIM =
  'The two words are a pair with a gap in the middle, and the gap is where the small words live. Pas goes in it, bien and déjà go in it, and the thing you ate does not.';

export const POSITION_CLAIM =
  'Ne in front of avoir, pas straight after it, and the past form outside both. The gap is one word wide and nothing longer goes in it.';

/** The a2.19 rule, in the words a2.19 shipped, with its credit attached. THE
 *  BRIEF ASKS FOR THIS VERBATIM AND SAYS A PARAPHRASE MUST GO RED. It is
 *  imported from `futur-proche-corpus.ts` rather than retyped, and the guards
 *  additionally assert the literal so a change on either side is caught. */
export const NEGATION_RULE = A219_REFRAME;
export const NEGATION_CREDIT =
  `${Cap(unitRef(FUTUR_UNIT))} said it one lesson ago: ${A219_REFRAME} Here the one that changed is avoir, so both halves go round avoir and the past form stays outside them.`;

/** Measured 2026-08-14 across every published row, and RE-MEASURED by
 *  `_a205_manifest.ts` on every regeneration. `respelled` is the figure that
 *  decided the shape of this lesson and it is ONE. */
export const NEGATIVE_EVIDENCE = {
  rows: 90,
  respelled: 1,
  respelledId: 'fr.sons.masterclass.021',
} as const;

/** And the affirmative, counted the same way, with an explicit subject pronoun
 *  in front so a bare `a` cannot match the article. a2.13 §1: evidence is not
 *  cards, and here the pool is nineteen out of two and a half thousand. */
export const AFFIRMATIVE_EVIDENCE = {
  rows: 2843,
  respelled: 19,
} as const;

/** The adverb-in-the-gap shape a2.17 deferred, re-measured with the wider
 *  adverb list its own note used. a2.17 §10 recorded 82; this build measures
 *  177, and THREE of them carry a respelling. Two of the three are imported. */
export const ADVERB_EVIDENCE = {
  rows: 177,
  respelled: 3,
  a217Figure: 82,
} as const;

/** The error, as the learner produces it. These are DISPLAY STRINGS and never
 *  corpus rows: a row holding one would be served by the flashcard hub as
 *  French, which is a2.18's rule. */
export const WRONG: readonly { wrong: string; right: string; why: string }[] = [
  {
    wrong: "Je n'ai mangé pas.",
    right: "Je n'ai pas mangé.",
    why: 'The pas has gone past the gap and landed behind the past form. English puts "not" beside the word carrying the meaning, and French puts it in the gap, and those are two different places as soon as the verb is two words.',
  },
  {
    wrong: "Je ne mangé pas.",
    right: "Je n'ai pas mangé.",
    why: 'Avoir has gone missing altogether. Both halves went round the past form, which is the word that did not change for anybody, and a past form on its own is not a sentence in any person.',
  },
  {
    wrong: "J'ai manger.",
    right: "J'ai mangé.",
    why: 'This is the one nobody hears themselves make. Manger and mangé are the same sound, so the sentence is perfect out loud and wrong the moment it is written down. Behind avoir it is always the past form.',
  },
  {
    wrong: "J'ai mangé bien.",
    right: "J'ai bien mangé.",
    why: `A short adverb goes in the gap, not on the end. This is the rule ${unitRef('a2.17')} taught for one-word tenses and then handed forward, because a two-word verb has somewhere new to put it.`,
  },
];

/** THE ERROR THE SCENE IS BUILT ON, AND IT IS NOT ANY OF THE FOUR ABOVE.
 *
 *  Doctrine §B.2: an A2 scene opens on somebody who started a sentence they
 *  could not finish. He has « Hier soir, j'ai... », the auxiliary is out of his
 *  mouth and committed, and the past form does not arrive. What he reaches for
 *  instead is the present, which is a complete sentence about tonight. */
export const SCENE_ERROR = 'Je mange avec des amis.';
export const SCENE_ERROR_EN = 'I am eating with friends. (which is tonight, not yesterday)';
export const SCENE_STALL = "Hier soir, j'ai... j'ai...";

/* ══════════════════════════════════════════════════════════════════════════
 *  THE SHAPES THE GUARDS RUN
 *
 *  GUARD THE THING, NOT THE LETTERS (a2.14 §6, a2.17 §7). Half of a learner
 *  surface is English by design and a shape built out of French endings reads
 *  the English as French, so every one of these requires a French subject
 *  pronoun or a form of avoir in front, and every one carries a MUST_NOT_FIRE
 *  list holding this lesson's own English.
 *
 *  AND THE LEFT BOUNDARY DROPS THE APOSTROPHE (a2.17 §3): the house boundary
 *  cannot see `j'ai`, which is the first two words of half this lesson.
 * ═══════════════════════════════════════════════════════════════════════ */

const AUX = "(?:j['’]ai|tu\\s+as|il\\s+a|elle\\s+a|on\\s+a|nous\\s+avons|vous\\s+avez|ils\\s+ont|elles\\s+ont)";
const NEG_AUX = "(?:je\\s+n['’]ai|tu\\s+n['’]as|il\\s+n['’]a|elle\\s+n['’]a|on\\s+n['’]a|nous\\s+n['’]avons|vous\\s+n['’]avez|ils\\s+n['’]ont|elles\\s+n['’]ont)";
const PAST = '[\\p{L}]{2,}(?:é|i|u)';
const SHORT_ADV = '(?:bien|mal|déjà|encore|toujours|jamais|beaucoup|trop|assez|vite|presque|enfin)';

/** THE ERROR THIS LESSON EXISTS TO PREVENT: `pas` behind the past form.
 *  « je n'ai mangé pas » rather than « je n'ai pas mangé ». */
export const PAS_AFTER_PAST = new RegExp(
  `(?<![\\p{L}\\p{N}-])${NEG_AUX}\\s+${PAST}\\s+pas(?![\\p{L}\\p{N}'’-])`,
  'iu',
);

export const PAS_AFTER_MUST_FIRE: readonly string[] = [
  "Je n'ai mangé pas.",
  "Il n'a fini pas.",
  "Nous n'avons parlé pas.",
  "Elle n'a répondu pas hier.",
  "Ils n'ont travaillé pas samedi.",
];

export const PAS_AFTER_MUST_NOT_FIRE: readonly string[] = [
  "Je n'ai pas mangé.",
  "Il n'a pas mangé.",
  "Nous n'avons pas fini.",
  "Elle n'a pas répondu à mon message.",
  'One verb, two words, and the small ones go in between.',
  'The pas goes in the gap and the past form stays outside it.',
  'You did not stall on a word you had not learned.',
  "J'ai mangé une pomme.",
  'Je vais manger.',
];

/** THE SECOND ERROR, AND THE ONE NOBODY HEARS THEMSELVES MAKE: a naming form
 *  behind avoir. « j'ai manger » is the same sound as « j'ai mangé » and is
 *  wrong on paper only, which is why the dictée exists.
 *
 *  MEASURED: ZERO published rows in the whole corpus do this, so a2.01's claim
 *  that it kept the evidence clean holds for the corpus as a whole and not only
 *  for its own twenty-five rows.
 *
 *  GUARD THE THING, NOT THE LETTERS. a2.17 §4: a shape built out of French
 *  morphology reads the English half of the learner surface as French, and it
 *  broke that build on « You did not stall ON A WORD YOU had not learned ».
 *  `on a` is a French subject and an auxiliary, and any English word ending in
 *  -er, -ir or -re after it would fire — « on a learner surface » is on the
 *  screens of every lesson in this band. So the second half is a LIST of the
 *  naming forms this lesson and its neighbours actually use, and the
 *  must-not-fire list below holds the English that would otherwise have matched. */
const NAMING_FORMS = '(?:manger|parler|travailler|finir|choisir|vendre|répondre|attendre|regarder|chercher|trouver|payer|visiter|danser|écouter|jouer|chanter|acheter|oublier|fermer|remplir|grandir|perdre|entendre|rendre|descendre|commencer|préparer|laisser|insister|ranger|réussir)';

export const INFINITIVE_AFTER_AVOIR = new RegExp(
  `(?<![\\p{L}\\p{N}-])(?:${AUX}|${NEG_AUX})\\s+(?:pas\\s+|${SHORT_ADV}\\s+)?${NAMING_FORMS}(?![\\p{L}\\p{N}'’-])`,
  'iu',
);

export const INFINITIVE_MUST_FIRE: readonly string[] = [
  "J'ai manger.",
  "J'ai manger une pomme.",
  "Il a parler à sa mère.",
  "Nous avons finir le rapport.",
  "Je n'ai pas manger.",
];

export const INFINITIVE_MUST_NOT_FIRE: readonly string[] = [
  "J'ai mangé.",
  "J'ai mangé une pomme.",
  "Il a fini.",
  "Il a vendu.",
  "Nous avons choisi.",
  "Je n'ai pas mangé.",
  'Je vais manger.',
  'Il va manger.',
  "Nous allons manger tôt.",
  'One verb, two words, and the small ones go in between.',
  'Behind avoir it is always the past form.',
  "J'ai mangé avec des amis.",
  // a2.17 §4's own broken sentence, and the four this band writes most often.
  // Every one of them holds `on a` followed by an English word ending in -er,
  // -ir or -re, and a letters-only shape fires on all five.
  'You did not stall on a word you had not learned.',
  'The jargon is on a learner surface.',
  'It is drawn on a lesson cover and on a learner surface.',
  `${Cap(unitRef('a2.19'))} measured it on a Pixel 6.`,
  'Everything on a card comes from the corpus.',
];

/** THE THIRD: a past form agreeing with avoir. With avoir there is no agreement
 *  in any case this lesson covers, and a2.21 is about to say the opposite for
 *  être. The contrast only works if this lesson's side is stated plainly and
 *  then held.
 *
 *  MEASURED: 81 published rows DO put an agreed past form after a form of
 *  avoir, and every one of them is the preceding-direct-object case — « la
 *  valise que j'ai achetée », « je l'ai aidée ». That is a2.06's ground, at seq
 *  21, and it needs object pronouns this learner does not have. So the guard is
 *  scoped to THIS LESSON's own surfaces and rows and makes no claim about the
 *  bundle: guard false positives, and an absence claim is scoped to the lesson. */
const AGREED_FORMS = `(?:[\\p{L}]{2,}(?:ée|és|ées)|finie|finies|finis|choisie|choisies|choisis|vendue|vendues|vendus|répondue|répondues|répondus|attendue|attendues|attendus)`;

export const AGREED_AFTER_AVOIR = new RegExp(
  `(?<![\\p{L}\\p{N}-])(?:${AUX}|${NEG_AUX})\\s+(?:pas\\s+|${SHORT_ADV}\\s+)?${AGREED_FORMS}(?![\\p{L}\\p{N}'’-])`,
  'iu',
);

export const AGREED_MUST_FIRE: readonly string[] = [
  "J'ai mangée.",
  'Elle a mangée une pomme.',
  'Nous avons visitées.',
  "Ils ont achetés.",
  "Je n'ai pas mangée.",
];

export const AGREED_MUST_NOT_FIRE: readonly string[] = [
  "J'ai mangé une pomme.",
  'Elle a mangé une pomme.',
  "Nous avons beaucoup travaillé.",
  "Elle a bien répondu.",
  'With avoir the past form does not change for anybody.',
  "J'ai des idées.",
  'Elle est allée.',
  // The English half again. `-ies` and `-ues` are ordinary English endings and
  // an earlier draft of this shape carried them, so « on a issues » fired.
  'on a issues',
  'il a values',
  'The gap takes small words and everything else stays outside.',
];

export const PDO_EVIDENCE = {
  rows: 81,
  owner: PRONOUN_UNIT,
  why: `Every one of the eighty-one is « la valise que j\'ai achetée » or « je l\'ai aidée »: the object arrives BEFORE the verb and it arrives as a pronoun. That needs ${unitRef('a2.06')} at seq 21, five lessons after this one, so the case exists, this lesson does not meet it, and the guard is scoped to this lesson\'s own surfaces rather than claiming anything about the corpus.`,
} as const;

/** THE FOURTH: être as an auxiliary, which is a2.21 and is not one verb of this
 *  lesson's business. Copied from a2.19's shape rather than imported, so a2.19
 *  changing its own guard cannot silently change this one. */
const ETRE_AUX = "(?:je\\s+suis|tu\\s+es|il\\s+est|elle\\s+est|on\\s+est|nous\\s+sommes|vous\\s+êtes|ils\\s+sont|elles\\s+sont|je\\s+ne\\s+suis|il\\s+n['’]est|elle\\s+n['’]est)";
const ETRE_PAST = '(?:allé|allée|allés|allées|parti|partie|partis|parties|sorti|sortie|sortis|sorties|venu|venue|venus|venues|arrivé|arrivée|arrivés|arrivées|resté|restée|restés|restées|entré|entrée|monté|montée|descendu|descendue|tombé|tombée|né|née|mort|morte|rentré|rentrée|retourné|retournée|devenu|devenue|revenu|revenue)';

export const ETRE_AUXILIARY = new RegExp(
  `(?<![\\p{L}\\p{N}-])${ETRE_AUX}\\s+(?:pas\\s+|${SHORT_ADV}\\s+)?${ETRE_PAST}(?![\\p{L}\\p{N}'’-])`,
  'iu',
);

export const ETRE_MUST_FIRE: readonly string[] = [
  'Je suis allé à Paris.',
  'Elle est partie hier.',
  'Nous sommes restés à la maison.',
  'Ils sont venus samedi.',
  "Il n'est pas arrivé.",
];

export const ETRE_MUST_NOT_FIRE: readonly string[] = [
  'Il est midi.',
  'Elle est ici aussi.',
  'On est prêt.',
  "J'ai mangé.",
  'Some verbs take a different first word, and that is the next lesson but one.',
  'Je vais partir.',
];

/** THE FIFTH: an irregular past form. a2.20 owns forty of them and it is the
 *  very next lesson, and the brief calls this the hardest restriction in the
 *  build because fait, pris, vu and dit are all extremely frequent.
 *
 *  Guarded BY NAME rather than by shape, because the shape would have to be a
 *  list anyway and a by-name list can be asserted absent from every string
 *  including a bare mention. This lesson names the fact that they exist and
 *  names a2.20; it never prints one. */
export const IRREGULAR_PAST: readonly string[] = [
  'fait', 'dit', 'pris', 'mis', 'vu', 'lu', 'bu', 'su', 'pu', 'eu', 'été',
  'voulu', 'dû', 'connu', 'venu', 'tenu', 'écrit', 'ouvert', 'offert',
  'appris', 'compris', 'assis', 'conduit', 'construit', 'couvert', 'souffert',
  'né', 'mort', 'remis', 'promis', 'refait', 'reçu', 'aperçu', 'cru', 'couru',
];

/** The five the brief asks to be asserted individually, so a change to the list
 *  above cannot quietly drop one of the frequent ones. */
export const IRREGULAR_BY_NAME: readonly string[] = ['fait', 'pris', 'mis', 'vu', 'dit'];

export const IRREGULAR_DEFERRAL =
  `Some verbs have a past form you could not have guessed from the naming form, and there are about forty of them. They are the next lesson, ${unitRef(IRREGULAR_UNIT)}, and not one of them is in this one.`;

export const ETRE_DEFERRAL =
  `A short list of verbs uses être instead of avoir for the first word, and their past form does change to match the person. That is ${unitRef(ETRE_UNIT)}, and it is the opposite of this rule. Learn this one cleanly first.`;

/* ══════════════════════════════════════════════════════════════════════════
 *  THE TRAP: ONE SOUND, TWO SPELLINGS, AND THE AUXILIARY IS THE ONLY SIGNAL
 * ═══════════════════════════════════════════════════════════════════════ */

export const SOUND_CLAIM =
  'Manger and mangé are one sound. There is no listening exercise anywhere that can tell you which one you heard, and anybody who says otherwise is selling you something. What you listen for is the little word in front.';

export const TENSE_CONTRAST_CLAIM =
  'Je vais manger and j\'ai mangé end on exactly the same sound. Vais against ai is the whole difference between something that has not happened and something that is over, and both of them are one short unstressed syllable.';

/** The pair the contrast rests on: a2.19's own published card and this build's
 *  version of the same evening. Both are rows, so the two are cards rather than
 *  two lines somebody typed. */
export const TENSE_PAIR = {
  future: 'Je vais manger avec des amis.',
  futureId: 'fr.a2.verbes.527',
  past: "J'ai mangé avec des amis.",
  why: `${Cap(unitRef(FUTUR_UNIT, 'a2'))}'s own card on the left, published one seq back and already respelled, and this build's on the right. Five words in common, one syllable apart, and the syllable is the entire tense.`,
} as const;

/** Every past-tense question needs a time expression that fixes the reading,
 *  which the brief asks for and which is a real constraint: « j'ai mangé » with
 *  nothing on it is unambiguous in French and ambiguous to an English ear that
 *  is still hearing "I have eaten" and wondering when. */
export const TIME_FRAMES: readonly { fr: string; respell: string; readOff: string }[] = [
  { fr: 'hier', respell: 'YEHR', readOff: 'fr.sons.jours-et-mois.025' },
  { fr: 'avant-hier', respell: 'ah-vahⁿ-TYEHR', readOff: 'fr.sons.jours-et-mois.027' },
  { fr: 'la semaine dernière', respell: 'lah suh-MEN dehr-NYEHR', readOff: 'fr.sons.jours-et-mois.036' },
  { fr: 'il y a trois jours', respell: 'EEL EE AH trwah ZHOOR', readOff: 'fr.a2.prepositions-essentielles.186' },
];

export const TIME_CLAIM =
  'French does not need the time word to tell you the thing is over. You do, for a while, because English keeps two different pasts and French is handing you one. Put a time on it until you stop needing to.';

/** a2.18's loop, closed. Its own sentence and this build's version of the same
 *  fact, on one screen. */
export const AGO_PAIR = {
  theirs: "J'ai commencé il y a trois jours.",
  theirsId: 'fr.a2.prepositions-essentielles.174',
  theirsPhraseId: 'fr.a2.prepositions-essentielles.186',
  mine: 'On a mangé il y a une heure.',
  why: `${Cap(unitRef(TIME_UNIT))} taught « il y a » as a length of time behind you and then had to hand the sentence forward, because saying how long ago something happened needs a past tense and that tense is this one. Its own card is on the left and it already holds this lesson's tense.`,
} as const;

/** a2.17's loop, closed. Its deferral is quoted verbatim, its unit named, and
 *  the two published cards that prove the shape are imported. */
export const ADVERB_PAIR = {
  a217: A217_DEFERRAL,
  mine: "J'ai bien mangé.",
  importedIds: ['fr.sons.alphabet.402', 'fr.sons.voyelles.355'],
  why: `${Cap(unitRef(ADVERB_UNIT))} put the short ones straight after the verb when there was one verb. There are two now, so "straight after the verb" has become "in the gap", and it is the same instruction.`,
} as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  TWO THINGS A PIXEL 6 FOUND AND NO HOST GATE COULD
 * ═══════════════════════════════════════════════════════════════════════ */

/** THE INTRO IS THE LESSON COVER AND IT MAY NOT NAME A UNIT ID.
 *
 *  FOUND ON A PIXEL 6, v2 to v3. `intro` is drawn on the lesson overview card
 *  AND on the lesson cover, and this build's first version read « ...avoir,
 *  which you have had since a1.07 ». On the cover that is the first sentence a
 *  learner sees, before any card has credited anything, and a bare unit id
 *  there is a string with no referent.
 *
 *  MEASURED ACROSS THE WHOLE SEED: a2.05 was the ONLY one of 58 lessons whose
 *  intro named a unit id. Doctrine §B.7 asks every lesson from seq 14 onward to
 *  credit earlier instances BY UNIT ID, and this lesson does it eleven times in
 *  the body, which is where the reference has context. The cover is not that
 *  place, and fifty-seven lessons already knew.
 *
 *  Guarded in all three layers. */
export const INTRO_NAMES_NO_UNIT = /(?:sons|a1|a2|b1|b2|c1)\.\d{2}/i;
export const INTRO_UNIT_ID_LESSONS = 0;
export const INTRO_UNIT_ID_MEASURED_ACROSS = 58;

/** A SCENE BUBBLE CLIPPED ITS OWN TAIL. THE APP IS NOW FIXED, AND EVERY
 *  CONTENT-SIDE THEORY THIS BUILD HELD ABOUT IT WAS WRONG.
 *
 *  `fr.a2.verbes.572` was authored « Ah, ce soir alors ! » and rendered
 *  « Ah, ce soir » on a Pixel 6, while the gloss still read "Ah, tonight then!".
 *  This build then produced two explanations and both were refuted on the phone:
 *
 *    v3  "the bubble hugs its widest child, so a French wider than its gloss
 *         gets squeezed"     -> widening the gloss made the bubble wider and the
 *                               French still clipped
 *    v4  "the trigger is the spaced exclamation mark"
 *                            -> an artifact of ONE sample. In the bench the very
 *                               same string rendered whole in one position and
 *                               clipped in another, and all four punctuations
 *                               clipped equally
 *
 *  Measured properly in `ealch-v2/app/bubblelab.tsx` (five markups, same
 *  strings, one screen): the clip needs a SIBLING BESIDE THE FRENCH IN A ROW.
 *  Row plus flexShrink, plus flex, plus flexWrap, and plus no flex property at
 *  all — all four clip. Icon out of the row renders whole at every length.
 *  `ScenePlayer.tsx` now ships that, so there is nothing left for a content
 *  author to avoid and NO CONTENT GUARD BELONGS HERE.
 *
 *  Kept as a record because the next build to see a clipped line will otherwise
 *  reinvent the two wrong theories, and because it is the case for measuring a
 *  layout bug on a device instead of reasoning about it from a comment. */
export const SCENE_BUBBLE_CLIP = {
  row: 'fr.a2.verbes.572',
  fr: 'Ah, ce soir alors !',
  wasWorkedAroundAs: 'Ah, ce soir alors.',
  clippedTo: 'Ah, ce soir',
  priorInstance: 'sons.07 mission 1, « Ah, à Lyon. Très bien. » rendering without "bien"',
  appCode: 'ScenePlayer.tsx, BubbleBeat',
  fixedInApp: true,
  refuted: [
    'the French being wider than its gloss (refuted on device: widening the gloss widened the bubble and the French still clipped)',
    'the spaced exclamation mark (refuted in the bench: the same string clipped in one position and not another, and all four punctuations behaved alike)',
  ],
  cause: 'Any sibling in a row beside the French. The bubble hugs and is capped at 92%, so it has no resolved width; the Text is measured at its natural single-line width and the measured text does not re-wrap. Moving the speaker icon off that row fixes it at every length.',
} as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  THE RESPELLING DECISIONS, MEASURED
 * ═══════════════════════════════════════════════════════════════════════ */

/** ONE SPELLING PER WORD ACROSS THE LESSON, and every one was READ OFF a
 *  published row rather than invented. §4 of this header holds the measurement
 *  behind the one that differs from the neighbour. */
export const RESPELL_CONVENTION =
  'Pas is pa on every screen in this lesson, read off the six published rows that hold an elided negative round a form of avoir. Manger and mangé are both mahⁿ-ZHAY, which is the fact the lesson turns on. Parler is par-LAY, finir is fee-NEE in the past form, and vendre is vahⁿ-DÜ.';

export const PAS_RESPELL = 'pa';
export const A219_PAS_RESPELL = 'pah';
export const PAS_EVIDENCE = {
  elidedAvoirRows: 6,
  elidedAvoirPa: 6,
  elidedAvoirPah: 0,
  corpusWidePah: 30,
  corpusWidePa: 23,
} as const;

/** Corrections §6, a2.17 §2 and a2.18 §1: a nasal is invisible to
 *  `hasPlainNasalFor` when a LETTER follows the n or m inside the token.
 *
 *  MEASURED OVER EVERY SUPERSCRIPT THIS BUILD WRITES: thirty-nine seen, ZERO
 *  missed. Every nasal in this lesson closes at a token boundary, because the
 *  house spellings the frame needs — mahⁿ, vohⁿ, zohⁿ, nohⁿ, ohⁿ, byehⁿ, vahⁿ,
 *  pohⁿ, ahⁿ — all end their token or are followed by a hyphen.
 *
 *  a2.18 §1 is the rule that predicts it and a2.17 §2's per-nasal split is the
 *  shape that would have been needed if one had been invisible. Neither is
 *  exercised here, and BOTH TABLES ARE ASSERTED EMPTY so the claim can fail. */
export const EXPECTED_NASALS_SEEN = 39;
export const EXPECTED_NASALS_MISSED = 0;

/** a2.14 §1 NAMED THIS LESSON'S SHAPE AS THE NEXT VICTIM AND IT IS NOT.
 *
 *  Its third blind spot is `if (/(?:nn|mm)/i.test(fr)) return false` running on
 *  the WHOLE French string, so one doubled nasal anywhere switches the check off
 *  for every other word in the line. Its own prediction: *"any lesson whose
 *  sentences hold connaître, comment, personne, femme, homme, bonne, année or
 *  pomme AND respell a nasal with a bare vowel."*
 *
 *  This lesson holds « J'ai mangé une pomme. » and « Elle a mangé une pomme. »,
 *  which are exactly that word, and it is measured CLEAR — for the reason a2.14
 *  gave itself: `hasPlainNasal`'s first branch catches the two-letter house
 *  spellings before the French is ever consulted, and `mahⁿ` is one of them.
 *  Breaking it to `mahn` is seen in both rows. Asserted by name in all three
 *  layers, in both directions. */
export const DOUBLED_NASAL_ROWS: readonly { fr: string; token: string }[] = [
  { fr: "J'ai mangé une pomme.", token: 'mahⁿ' },
  { fr: 'Elle a mangé une pomme.', token: 'mahⁿ' },
];

/** Corrections §6 asks for the false-positive path to be looked for and its
 *  absence reported. Seven candidates were tried through the real function.
 *  Six do not fire and ONE DOES, which is the first time a build in this band
 *  has been able to assert the path in the POSITIVE as well as the negative:
 *  `luh proh-BLEHM` is a2.18 §2's shape — a real /m/ after a two-letter house
 *  vowel — and it is not in this lesson, so it is carried as a control. */
export const FALSE_POSITIVE_CANDIDATES: readonly { fr: string; respell: string }[] = [
  { fr: 'une pomme', respell: 'ün POM' },
  { fr: 'la pomme', respell: 'lah POM' },
  { fr: 'la semaine dernière', respell: 'lah suh-MEN dehr-NYEHR' },
  { fr: 'samedi', respell: 'sam-DEE' },
  { fr: 'une heure', respell: 'ün UHR' },
  { fr: 'la personne', respell: 'lah pehr-SONN' },
];

/** THE CONTROL, WHICH MUST FIRE. a2.18 §2 measured that `hasPlainNasal`'s first
 *  branch has no rescue path and that the predictor is a real /m/ or /n/ after a
 *  two-letter house vowel. If this ever stops firing the checker has changed and
 *  the six negatives above stop meaning anything. */
export const FALSE_POSITIVE_CONTROL = { fr: 'le problème', respell: 'luh proh-BLEHM' } as const;

/** A PUBLISHED ROW THIS LESSON DISPLAYS AND THE CHECKER FLAGS, AND IT IS THE
 *  CHECKER THAT IS WRONG.
 *
 *  FOUND BY THIS BUILD'S DRY RUN, on a guard every lesson in this band runs:
 *  "every displayed respelling is clean under `hasPlainNasalFor`". It is the
 *  first time that guard has met a false positive on an IMPORTED row rather
 *  than on an authored one, and the blanket version of it would have cost this
 *  lesson the card that closes a2.17's loop.
 *
 *      fr.sons.alphabet.402   « J'ai mal entendu la deuxième lettre. »
 *      ZHAY MAL ahⁿ-tahⁿ-DÜ LA deu-ZYEHM LEHTR          FLAGGED
 *                                 ^^^^^^^^^
 *
 *  `deuxième` is /dø.zjɛm/. There is no nasal vowel in it at all: the M is a
 *  real /m/ and it follows `EH`, which is one of the two-letter house vowels on
 *  `hasPlainNasal`'s first branch. a2.04 §2 measured that that branch has NO
 *  RESCUE PATH, and a2.18 §2 sharpened the predictor to **a real /m/ or /n/
 *  after a two-letter house vowel — every word ending -ème, -ême, -ome, -ame,
 *  -aine** — and listed `même`, `comme`, `pomme`, `homme`, `femme` and
 *  `problème` as instances. **`deuxième` is the seventh, and the first one
 *  found on a row a lesson displays rather than on one it authored.**
 *
 *  Invariants §9: a false positive is not a violation and the row is NOT
 *  repaired. It is exempted BY NAME, its token is named, and the firing is
 *  asserted in all three layers, so the day the checker gains a rescue path
 *  this goes red rather than carrying a dead exemption. */
export const DISPLAYED_FALSE_POSITIVES: readonly {
  id: string; fr: string; respell: string; token: string; why: string;
}[] = [
  {
    id: 'fr.sons.alphabet.402',
    fr: "J'ai mal entendu la deuxième lettre.",
    respell: 'ZHAY MAL ahⁿ-tahⁿ-DÜ LA deu-ZYEHM LEHTR',
    token: 'ZYEHM',
    why: `A real /m/ after the two-letter house vowel EH, which is ${unitRef('a2.18')} §2\'s shape and ${unitRef('a2.04')} §2\'s unrescued branch. « deuxième » holds no nasal vowel, the row is correct as published, and repairing it would mean writing a nasal into a word that does not have one.`,
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE DICTÉE MATRIX, MEASURED THROUGH THE REAL FUNCTION
 * ═══════════════════════════════════════════════════════════════════════ */

/** Written out rather than derived, because a derived table agrees with itself.
 *  Every entry is checked through the REAL `dicteeMode` and `letterCount` in the
 *  batch, the merge and the test, in both directions.
 *
 *  §3 of this header is the finding: a2.19 fits three of eight negatives and
 *  this lesson fits SIX, because `ne` elides in front of every form of avoir. */
export const DICTEE_MATRIX: readonly {
  person: string; affirmative: number; negative: number; negativeFits: boolean;
}[] = [
  { person: 'je', affirmative: 8, negative: 13, negativeFits: true },
  { person: 'tu', affirmative: 9, negative: 13, negativeFits: true },
  { person: 'il', affirmative: 8, negative: 12, negativeFits: true },
  { person: 'on', affirmative: 8, negative: 12, negativeFits: true },
  { person: 'elle', affirmative: 10, negative: 14, negativeFits: true },
  { person: 'nous', affirmative: 14, negative: 18, negativeFits: false },
  { person: 'vous', affirmative: 13, negative: 17, negativeFits: false },
  { person: 'ils', affirmative: 11, negative: 15, negativeFits: true },
];

/** The forms the matrix is built from, so the batch can rebuild every sentence
 *  rather than being handed a number. */
export const DICTEE_FORMS: Readonly<Record<string, readonly [string, string, string]>> = {
  je: ['Je', "J'ai", "Je n'ai pas"],
  tu: ['Tu', 'Tu as', "Tu n'as pas"],
  il: ['Il', 'Il a', "Il n'a pas"],
  on: ['On', 'On a', "On n'a pas"],
  elle: ['Elle', 'Elle a', "Elle n'a pas"],
  nous: ['Nous', 'Nous avons', "Nous n'avons pas"],
  vous: ['Vous', 'Vous avez', "Vous n'avez pas"],
  ils: ['Ils', 'Ils ont', "Ils n'ont pas"],
};

export const DICTEE_LIMIT = 16;

/** a2.19's own sentence, kept as a literal so the comparison this build makes
 *  can fail. a2.16 §3: any constant whose job is to remember another lesson's
 *  value has to be a literal. */
export const A219_JE_NEGATIVE = 'Je ne vais pas partir.';
export const A219_JE_NEGATIVE_LETTERS = 17;

export const DICTEE_CLAIM =
  'Every one of the eight affirmatives spells letter by letter, and six of the eight negatives do. Ne shortens to n\' in front of every form of avoir, which buys back the letters the negative costs, so je is spellable here and was not one lesson ago.';

/* ══════════════════════════════════════════════════════════════════════════
 *  THE AUTHORED ROWS
 * ═══════════════════════════════════════════════════════════════════════ */

export type Role = 'shape' | 'owns' | 'endings' | 'inside' | 'when' | 'tense' | 'noagree' | 'scene' | 'talk';

export type PCRow = Omit<Item, 'drills'> & {
  drills: string[];
  role: Role;
  /** The person this row is in, where it is part of the paradigm. Named
   *  `person` and not `kind`, because `Item` already has a `kind` and an
   *  intersection of two different `kind`s reduces to `never`. a2.04 lost a
   *  build hour to exactly that. */
  person?: string;
};

const V = (n: number) => `fr.a2.verbes.${n}`;

const S = (
  n: number, fr: string, en: string, respell: string, ipa: string,
  role: Role, drills: string[], tags: string[], notes: string, person?: string,
): PCRow => ({
  id: V(n), kind: 'sentence', level: 'a2', theme: THEME, fr, en, ipa, respell,
  notes, tags, drills, version: 1, role, ...(person ? { person } : {}),
}) as PCRow;

/** Corrections §4: a row carries `dictation` only where `dicteeMode()` puts it
 *  in LETTERS mode, and the batch runs the REAL function over every row that
 *  carries the drill AND over every row that does not. */
const D = ['sentence', 'flashcard', 'voiceflash', 'review', 'dictation'];
const NO_D = ['sentence', 'flashcard', 'voiceflash', 'review'];

const T = ['verbes', 'passe-compose'];
const TN = ['verbes', 'passe-compose', 'negatif'];
const TF = ['verbes', 'futur-proche'];

/** THE AUTHORED ROWS.
 *
 *  NOT ONE HEADWORD AMONG THEM, NOT ONE BARE PAST FORM, and not one gendered
 *  single word, so nothing here can join a1.03's measured ending population by
 *  either route — neither by authoring (invariants §5) nor by the CARRY a2.04
 *  discovered (ledger, a2.04 §0). The batch proves it against Postgres and the
 *  merge against the seed. */
export const PASSE_COMPOSE: PCRow[] = [
  /* ── The construction, six persons, one frame ─────────────────────────────
   *
   * Corrections §3 holds for this half: 5,126 published sentences put a form of
   * avoir in front of a past form and thirty carry a respelling, none of them in
   * one frame. The paradigm is authored. */
  S(541, "J'ai mangé.", 'I ate. / I have eaten.', 'zhay mahⁿ-ZHAY', '/ʒe mɑ̃.ʒe/', 'shape', D, T, 'The frame, and eight letters, so the dictée can take it. One English form covers both of these and French has one form for both, which is the piece of luck in this lesson.', 'je'),
  S(542, 'Tu as mangé.', 'You ate.', 'tü ah mahⁿ-ZHAY', '/ty a mɑ̃.ʒe/', 'shape', NO_D, T, 'The person moved and the past form did not. Nine letters.', 'tu'),
  S(543, 'Il a mangé.', 'He ate.', 'eel ah mahⁿ-ZHAY', '/il a mɑ̃.ʒe/', 'shape', D, T, 'Eight letters, and its negative is the one card the corpus already had. See fr.sons.masterclass.021.', 'il'),
  S(544, 'Nous avons mangé.', 'We ate.', 'noo za-vohⁿ mahⁿ-ZHAY', '/nu.za.vɔ̃ mɑ̃.ʒe/', 'shape', NO_D, T, 'Fourteen letters. The liaison pulls a z across into avons and the nasal survives it.', 'nous'),
  S(545, 'Vous avez mangé.', 'You ate. (to more than one person, or politely)', 'voo za-vay mahⁿ-ZHAY', '/vu.za.ve mɑ̃.ʒe/', 'shape', NO_D, T, 'The same liaison. Thirteen letters.', 'vous'),
  S(546, 'Ils ont mangé.', 'They ate.', 'eel zohⁿ mahⁿ-ZHAY', '/il.zɔ̃ mɑ̃.ʒe/', 'shape', D, T, 'Eleven letters, and the liaison again. Six persons and the second word has not moved once.', 'ils'),

  /* ── The Owns: what goes in the gap ───────────────────────────────────────
   *
   * The same six sentences with the negative in them, so the pair differs by one
   * thing and the one thing is the gap. THE `il` NEGATIVE IS NOT HERE: it is
   * fr.sons.masterclass.021, published and respelled years before this build. */
  S(547, "Je n'ai pas mangé.", 'I did not eat.', 'zhuh nay pa mahⁿ-ZHAY', '/ʒə ne pa mɑ̃.ʒe/', 'owns', D, TN, `THIRTEEN LETTERS, so the dictée takes it. ${Cap(unitRef('a2.19'))} could not test je at all: « Je ne vais pas partir. » is seventeen. Ne shortens to n\' in front of avoir and that is the whole difference.`, 'je'),
  S(548, "Tu n'as pas mangé.", 'You did not eat.', 'tü na pa mahⁿ-ZHAY', '/ty na pa mɑ̃.ʒe/', 'owns', NO_D, TN, 'Thirteen letters. The ne has shortened again, and it does that in front of every single form of avoir.', 'tu'),
  S(549, "Nous n'avons pas mangé.", 'We did not eat.', 'noo na-vohⁿ pa mahⁿ-ZHAY', '/nu na.vɔ̃ pa mɑ̃.ʒe/', 'owns', NO_D, TN, 'EIGHTEEN LETTERS, so dicteeMode puts it in WORD mode and it carries no dictation drill. The liaison z is gone with the ne: noo na, not noo za.', 'nous'),
  S(550, "Vous n'avez pas mangé.", 'You did not eat. (to more than one person, or politely)', 'voo na-vay pa mahⁿ-ZHAY', '/vu na.ve pa mɑ̃.ʒe/', 'owns', NO_D, TN, 'Seventeen letters, one over. The same lost liaison.', 'vous'),
  S(551, "Ils n'ont pas mangé.", 'They did not eat.', 'eel nohⁿ pa mahⁿ-ZHAY', '/il nɔ̃ pa mɑ̃.ʒe/', 'owns', D, TN, 'Fifteen letters. Six persons, one gap, and the past form has stayed outside it every time.', 'ils'),

  /* ── The three endings, and the three units they come from ────────────────*/
  S(552, "J'ai parlé.", 'I spoke.', 'zhay par-LAY', '/ʒe paʁ.le/', 'endings', D, [...T, 'er'], `The -ER group, and ${unitRef(ER_UNIT, 'a2')}'s own headline verb. An -ER naming form ends in -er and its past form ends in -é, and those are the same sound.`, 'je'),
  S(553, 'Il a fini.', 'He finished.', 'eel ah fee-NEE', '/il a fi.ni/', 'endings', D, [...T, 'ir'], `The -IR group, and ${unitRef(IR_UNIT, 'a2')}'s own frame verb. « Il a fini. » beside that lesson's « Il finit tôt. » is one verb in two tenses with the same three letters in front.`, 'il'),
  S(554, 'Il a vendu.', 'He sold.', 'eel ah vahⁿ-DÜ', '/il a vɑ̃.dy/', 'endings', D, [...T, 're'], `The -RE group, and ${unitRef(RE_UNIT, 'a2')}'s own frame verb. The naming form loses its -re and takes -u, and this is the only one of the three where the ending is not already on the naming form somewhere.`, 'il'),
  S(555, 'Nous avons choisi.', 'We chose.', 'noo za-vohⁿ shwah-ZEE', '/nu.za.vɔ̃ ʃwa.zi/', 'endings', NO_D, [...T, 'ir'], 'A second -IR verb, in another person, so the ending is clearly the group and not the verb.', 'nous'),
  S(556, 'Ils ont répondu.', 'They answered.', 'eel zohⁿ ray-pohⁿ-DÜ', '/il.zɔ̃ ʁe.pɔ̃.dy/', 'endings', NO_D, [...T, 're'], 'A second -RE verb. Répondre goes to répondu exactly as vendre goes to vendu, and nothing about the person touches it.', 'ils'),
  S(557, 'Tu as travaillé.', 'You worked.', 'tü ah trah-vah-YAY', '/ty a tʁa.va.je/', 'endings', NO_D, [...T, 'er'], 'A four-syllable -ER verb, and the ending does not care how long the verb is.', 'tu'),

  /* ── What goes in the gap, beyond the negative. a2.17's loop. ─────────────*/
  S(558, "J'ai bien mangé.", 'I ate well.', 'zhay byehⁿ mahⁿ-ZHAY', '/ʒe bjɛ̃ mɑ̃.ʒe/', 'inside', D, [...T, 'adverbe'], `The gap again, with something other than pas in it. ${Cap(unitRef(ADVERB_UNIT))} put the short ones straight after the verb; there are two words now and the gap is where "straight after" has gone.`, 'je'),
  S(559, 'Il a déjà fini.', 'He has already finished.', 'eel ah day-ZHAH fee-NEE', '/il a de.ʒa fi.ni/', 'inside', NO_D, [...T, 'adverbe'], 'Déjà in the gap, on an -IR verb. Twelve letters, so the dictée can ask for it.', 'il'),
  S(560, 'Nous avons beaucoup travaillé.', 'We worked a lot.', 'noo za-vohⁿ boh-KOO trah-vah-YAY', '/nu.za.vɔ̃ bo.ku tʁa.va.je/', 'inside', NO_D, [...T, 'adverbe'], 'A three-syllable adverb, still in the gap. Twenty-six letters, so no dictée.', 'nous'),
  S(561, 'Elle a bien répondu.', 'She answered well.', 'ehl ah byehⁿ ray-pohⁿ-DÜ', '/ɛl a bjɛ̃ ʁe.pɔ̃.dy/', 'inside', NO_D, [...T, 'adverbe'], 'And the same word in the same place on an -RE verb. Sixteen letters, exactly at the limit.', 'elle'),

  /* ── When it happened. a2.18's loop, and the time frames. ─────────────────*/
  S(562, "J'ai travaillé hier.", 'I worked yesterday.', 'zhay trah-vah-YAY YEHR', '/ʒe tʁa.va.je jɛʁ/', 'when', NO_D, [...T, 'temps'], 'Sixteen letters, exactly at the limit, with the commonest past time word in the language on the end.', 'je'),
  S(563, 'Il a fini la semaine dernière.', 'He finished last week.', 'eel ah fee-NEE lah suh-MEN dehr-NYEHR', '/il a fi.ni la sə.mɛn dɛʁ.njɛʁ/', 'when', NO_D, [...T, 'temps'], 'The time phrase is read off fr.sons.jours-et-mois.036 exactly as that row spells it. Twenty-four letters, so no dictée.', 'il'),
  S(564, 'On a mangé il y a une heure.', 'We ate an hour ago.', 'ohⁿ na mahⁿ-ZHAY eel ee ah ün UHR', '/ɔ̃ na mɑ̃.ʒe il i a yn œʁ/', 'when', NO_D, [...T, 'temps'], `The loop ${unitRef(TIME_UNIT)} asked for. On rather than nous, which is ${unitRef('a2.01')}'s rule for the whole level.`, 'on'),
  S(565, 'Tu as parlé avant-hier ?', 'Did you speak the day before yesterday?', 'tü ah par-LAY ah-vahⁿ-TYEHR', '/ty a paʁ.le a.vɑ̃.tjɛʁ/', 'when', NO_D, [...T, 'temps'], `A question with no inversion and no est-ce que, which is ${unitRef('a1.19')}\'s register point and the way it is actually said. The time word carries the repair this build makes.`, 'tu'),

  /* ── Future against past: the sound contrast. ─────────────────────────────
   *
   * a2.19's construction, deliberately, because the contrast cannot be made
   * without it and the learner had that lesson last. Tagged futur-proche rather
   * than passe-compose so a later query can tell them apart. */
  S(566, 'Je vais manger.', 'I am going to eat.', 'zhuh veh mahⁿ-ZHAY', '/ʒə vɛ mɑ̃.ʒe/', 'tense', NO_D, TF, `${Cap(unitRef(FUTUR_UNIT, 'a2'))}'s construction, in the frame verb, so the pair with row 541 differs by one syllable and by nothing else. Twelve letters.`, 'je'),
  S(567, 'Il va manger.', 'He is going to eat.', 'eel va mahⁿ-ZHAY', '/il va mɑ̃.ʒe/', 'tense', NO_D, TF, 'And the same pair with il in front, where the two little words are va and a and neither of them is stressed. Ten letters.', 'il'),

  /* ── No agreement with avoir, and the counterexample to the brief's own
   *    reframe candidate. ────────────────────────────────────────────────── */
  S(568, "J'ai mangé une pomme.", 'I ate an apple.', 'zhay mahⁿ-ZHAY ün POM', '/ʒe mɑ̃.ʒe yn pɔm/', 'noagree', NO_D, [...T, 'accord'], 'THE OBJECT DOES NOT GO IN THE GAP. It goes after the past form, like everything that is not a small word, and this is the row that makes the rule true rather than nearly true.', 'je'),
  S(569, 'Elle a mangé une pomme.', 'She ate an apple.', 'ehl ah mahⁿ-ZHAY ün POM', '/ɛl a mɑ̃.ʒe yn pɔm/', 'noagree', NO_D, [...T, 'accord'], 'A feminine subject, a feminine object, and mangé has not moved a letter. With avoir there is no agreement here at all.', 'elle'),

  /* ── The scene ───────────────────────────────────────────────────────────
   *
   * Doctrine §B.2. He has the auxiliary out of his mouth and committed, and the
   * past form does not arrive. What comes instead is the present, which is a
   * complete sentence about tonight. */
  S(570, 'Et hier soir, alors ?', 'And last night, then?', 'ay yehr SWAR ah-LOR', '/e jɛʁ swaʁ a.lɔʁ/', 'scene', NO_D, T, 'Her question, and it has no verb in it at all, which is why he cannot copy a form out of it.'),
  S(571, "J'ai mangé avec des amis.", 'I ate with friends.', 'zhay mahⁿ-ZHAY ah-VEK day-za-MEE', '/ʒe mɑ̃.ʒe a.vɛk de.za.mi/', 'scene', NO_D, T, `What he meant, in full. ${Cap(unitRef(FUTUR_UNIT))} published « Je vais manger avec des amis. » and this is the same evening in the other direction.`, 'je'),
  S(572, 'Ah, ce soir alors !', 'Ah, tonight then!', 'ah suh SWAR ah-LOR', '/a sə swaʁ a.lɔʁ/', 'scene', NO_D, T, 'She has moved his evening to tonight, cheerfully, because the tense told her to. Nobody corrected anything and he is now expected. The exclamation mark is back: it was flattened to a full stop under a theory the device refuted, see SCENE_BUBBLE_CLIP.'),

  /* ── The conversation, for the role play ─────────────────────────────────*/
  S(573, 'Et toi, tu as travaillé samedi ?', 'And you, did you work on Saturday?', 'ay TWAH · tü ah trah-vah-YAY sam-DEE', '/e twa ty a tʁa.va.je sam.di/', 'talk', NO_D, T, 'A question in the past with no inversion, which is how it is asked.', 'tu'),
  S(574, "Non, je n'ai pas travaillé.", 'No, I did not work.', 'nohⁿ · zhuh nay pa trah-vah-YAY', '/nɔ̃ ʒə ne pa tʁa.va.je/', 'talk', NO_D, TN, 'The refusal, in full, and the gap is doing its job in the first answer of the conversation.', 'je'),
  S(575, 'Vous avez fini le rapport ?', 'Have you finished the report?', 'voo za-vay fee-NEE luh ra-POR', '/vu.za.ve fi.ni lə ʁa.pɔʁ/', 'talk', NO_D, [...T, 'ir'], `An -IR verb in the vous form, and the report is ${unitRef('a2.19')}\'s: it published « Elle ne va pas finir le rapport ce soir. » and this is the morning after.`, 'vous'),
  S(576, "Non, nous n'avons pas fini.", 'No, we have not finished.', 'nohⁿ · noo na-vohⁿ pa fee-NEE', '/nɔ̃ nu na.vɔ̃ pa fi.ni/', 'talk', NO_D, TN, 'The nous negative, where the ne shortens and takes the liaison with it. Twenty letters, so it is not a dictée target.', 'nous'),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  DERIVED SETS
 * ═══════════════════════════════════════════════════════════════════════ */

export const SHAPE_ROWS = PASSE_COMPOSE.filter((r) => r.role === 'shape');
export const OWNS_ROWS = PASSE_COMPOSE.filter((r) => r.role === 'owns');
export const ENDING_ROWS = PASSE_COMPOSE.filter((r) => r.role === 'endings');
export const INSIDE_ROWS = PASSE_COMPOSE.filter((r) => r.role === 'inside');
export const WHEN_ROWS = PASSE_COMPOSE.filter((r) => r.role === 'when');
export const TENSE_ROWS = PASSE_COMPOSE.filter((r) => r.role === 'tense');
export const NOAGREE_ROWS = PASSE_COMPOSE.filter((r) => r.role === 'noagree');
export const SCENE_ROWS = PASSE_COMPOSE.filter((r) => r.role === 'scene');
export const TALK_ROWS = PASSE_COMPOSE.filter((r) => r.role === 'talk');

export const AUTHORED_IDS: string[] = PASSE_COMPOSE.map((r) => r.id);

/** THE PAIRS THE OWNS ACT RESTS ON: the affirmative and its negative, by id, in
 *  person order. The layout claim the brief asks the test to assert is that
 *  these appear ADJACENT in one section, so the pairing is declared here and
 *  every layer walks it.
 *
 *  THE `il` NEGATIVE IS AN IMPORT, which is the one structural difference from
 *  a2.19's fully authored paradigm and the reason `negId` is not derivable from
 *  `posId` by arithmetic. */
export const IL_NEGATIVE_ID = 'fr.sons.masterclass.021';

export const PAIRS: readonly { person: string; posId: string; negId: string }[] = [
  { person: 'je', posId: V(541), negId: V(547) },
  { person: 'tu', posId: V(542), negId: V(548) },
  { person: 'il', posId: V(543), negId: IL_NEGATIVE_ID },
  { person: 'nous', posId: V(544), negId: V(549) },
  { person: 'vous', posId: V(545), negId: V(550) },
  { person: 'ils', posId: V(546), negId: V(551) },
];

/** The six the dictée can take, derived from DICTEE_MATRIX and checked against
 *  the real `dicteeMode` in all three layers. */
export const DICTEE_PERSONS = DICTEE_MATRIX.filter((d) => d.negativeFits).map((d) => d.person);

/** THE NEGATIVE IS THE AFFIRMATIVE WITH TWO WORDS IN IT, AND IN THE `je` ROW
 *  THAT IS NOT QUITE TRUE OF THE LETTERS.
 *
 *  FOUND BY THE FIRST DRY RUN. Every layer in this band checks the pair by
 *  stripping `ne`, `n'` and `pas` from the negative and comparing what is left
 *  against the affirmative, which a2.19 could do in one line because its `ne`
 *  never touched the subject. Here it does:
 *
 *      J'ai mangé.            je + ai elides to j'ai
 *      Je n'ai pas mangé.     the n' gets between them, so je stays whole
 *      strip n' and pas   ->  « Je ai mangé. »
 *
 *  **The first word changes shape as well as gaining two neighbours**, and that
 *  is a real fact about this tense rather than an artifact of the check: `j'ai`
 *  is one written word and `je n'ai` is three. It is said on the screen where
 *  the six persons line up, and the reduction below puts the elision back so
 *  all three layers can compare the pair honestly. */
export const JE_ELISION = {
  affirmative: "J'ai",
  negative: "Je n'ai",
  why: "Je and ai run together into j'ai when nothing is between them. Put the ne in and there is something between them, so je goes back to being a whole word and the n' takes the elision instead. The negative is not just the sentence with two words added: the first word changes shape too, and only in this person.",
} as const;

export const reduceNegative = (neg: string): string =>
  neg
    .replace(/\bn['’]/i, '')
    .replace(/\bne\s+/i, '')
    .replace(/\bpas\s+/i, '')
    .replace(/\bJe ai\b/, "J'ai")
    .replace(/\bje ai\b/, "j'ai")
    .replace(/\s+/g, ' ')
    .trim();

/** One authored row by its French. Throws: a card silently missing its row
 *  looks like a card that never wanted one. */
export function row(fr: string): PCRow {
  const r = PASSE_COMPOSE.find((x) => x.fr === fr);
  if (!r) throw new Error(`a2.05: no authored row for "${fr}".`);
  return r;
}

/** NOT ONE HEADWORD IS AUTHORED, AND NOT ONE BARE PAST FORM. Asserted as empty
 *  records rather than omitted, so a later author who adds one has to say so and
 *  has to face both a1.03's ending population and the ledger decision in §1. */
export const AUTHORED_HEADWORDS: Record<string, string> = {};
export const AUTHORED_PAST_FORMS: Record<string, string> = {};

/* ══════════════════════════════════════════════════════════════════════════
 *  THE IMPORTED ROWS
 * ═══════════════════════════════════════════════════════════════════════ */

export type Import = {
  id: string;
  fr: string;
  use: 'headword' | 'time' | 'adverb' | 'negative' | 'paradigm' | 'ago' | 'tense' | 'wild';
  why: string;
};

/** TWENTY-THREE ROWS OUT OF TEN THEMES, AND NOT ONE HEADWORD AUTHORED, which is
 *  corrections §2 holding for the thirteenth build in a row.
 *
 *  Four of them are published passé-composé negatives with no respelling at all,
 *  and one is the single respelled negative in the whole corpus. */
export const IMPORTED: readonly Import[] = [
  // ── The verb the whole construction is built on, and the three groups.
  { id: 'fr.sons.verbes-essentiels.002', fr: 'avoir', use: 'headword', why: `The first word of every sentence in this lesson, [ah-VWAR], clean. ${Cap(unitRef(AVOIR_UNIT))} conjugated it and the learner brings all six forms with them. fr.b1.courses.042 is a second copy carrying gender=m and is deliberately not taken: a gendered single-word row joins a1.03's ending population when the merge carries it.` },
  { id: 'fr.sons.muettes.037', fr: 'manger', use: 'headword', why: `THE FRAME VERB, [mahⁿ-ZHAY], from the theme that already went through the nasals, and the same row ${unitRef('a2.19')} imported one seq back. fr.a1.cuisine.041 and fr.a1.rp-repas.013 publish [mahn-ZHAY], which the checker flags, and neither is displayed or repaired.` },
  { id: 'fr.sons.verbes-essentiels.015', fr: 'parler', use: 'headword', why: `${Cap(unitRef(ER_UNIT, 'a2'))}'s headline verb, [par-LAY], clean, and the -ER row of the endings grid. fr.a1.rp-travail-etudes.042 publishes [pahr-LAY] and is not taken.` },
  { id: 'fr.sons.verbes-essentiels.037', fr: 'finir', use: 'headword', why: `${Cap(unitRef(IR_UNIT, 'a2'))}'s frame verb, [fee-NEER], clean, and the -IR row of the grid.` },
  { id: 'fr.a2.verbes.027', fr: 'vendre', use: 'headword', why: `${Cap(unitRef(RE_UNIT, 'a2'))}'s frame verb, [VAHⁿDR], REPAIRED BY THAT LESSON and already in this lesson's own theme. Four other rows still publish [VAHNDR], which the checker cannot see because a D follows the nasal inside the token, and none of them is displayed.` },
  { id: 'fr.a2.verbes.020', fr: 'répondre', use: 'headword', why: `A second -RE verb, [ray-POHⁿDR], repaired by ${unitRef('a2.11')} in this theme. Six other rows publish [ray-POHNDR] and are not displayed.` },
  { id: 'fr.sons.verbes-essentiels.038', fr: 'choisir', use: 'headword', why: 'A second -IR verb, [shwah-ZEER], clean. fr.a2.courses.063 publishes [shwa-ZEER] and is not taken.' },
  { id: 'fr.a2.verbes.031', fr: 'travailler', use: 'headword', why: `Clean at [trah-vah-YAY], already in this theme, imported by ${unitRef('a2.01')} and by ${unitRef('a2.19')}. Five published rows spell it this way and two spell it [tra-va-YAY].` },

  // ── The time words that fix a past reading.
  { id: 'fr.sons.jours-et-mois.025', fr: 'hier', use: 'time', why: 'The commonest past time word in the language, [YEHR], clean and ungendered.' },
  { id: 'fr.sons.jours-et-mois.027', fr: 'avant-hier', use: 'time', why: `REPAIRED BY THIS BUILD from [ah-vahn-TYEHR] to [ah-vahⁿ-TYEHR]. The checker flags the stored value, so it is a VISIBLE repair and it is guarded through the shared function exactly as ${unitRef('a2.10')} does.` },
  { id: 'fr.sons.mots-essentiels.045', fr: 'bien', use: 'adverb', why: `The commonest thing to put in the gap after pas, [BYEHⁿ], which is the house value four published rows agree on. ${Cap(unitRef('a2.17'))} §2 records [BYAN] as the minimal repair that is not the house value; this row already holds the house one.` },
  { id: 'fr.sons.mots-essentiels.053', fr: 'déjà', use: 'adverb', why: 'The second thing that goes in the gap, [day-ZHAH]. No typed surface can test its accents (fold strips them), so it is asked about by mcq only.' },

  // ── THE ONE RESPELLED NEGATIVE IN THE CORPUS, and it is in this frame.
  { id: IL_NEGATIVE_ID, fr: "Il n'a pas mangé.", use: 'paradigm', why: 'THE `il` ROW OF THE PARADIGM, AND IT IS AN IMPORT. One published row in the whole database holds a respelled passé-composé negative and it is this sentence, [eel na pa mahⁿ-ZHAY], in this lesson\'s own frame verb. Its `pa` is the value this lesson takes for the whole build; see §4 of this header. Twelve letters, and it already carries a dictation drill.' },

  // ── a2.19's card, so the tense contrast is two published cards.
  { id: 'fr.a2.verbes.527', fr: 'Je vais manger avec des amis.', use: 'tense', why: `${Cap(unitRef(FUTUR_UNIT, 'a2'))}'s own row, [zhuh veh mahⁿ-ZHAY ah-VEK day-za-MEE], in this lesson's theme. This build authors « J'ai mangé avec des amis. » and the two sit adjacent: five words in common and one syllable apart.` },

  // ── a2.18's two, which close the "ago" loop it asked for by name.
  { id: 'fr.a2.prepositions-essentielles.174', fr: "J'ai commencé il y a trois jours.", use: 'ago', why: `${Cap(unitRef(TIME_UNIT, 'a2'))}'s own sentence, [zhay ko-mahⁿ-SAY eel ee ah trwah ZHOOR], and the ONE past-referring row that lesson authored. Its ledger note flags it and hands it here by name.` },
  { id: 'fr.a2.prepositions-essentielles.186', fr: 'il y a trois jours', use: 'ago', why: `${Cap(unitRef(TIME_UNIT, 'a2'))}'s phrase card, [EEL EE AH trwah ZHOOR]. Every time phrase this lesson prints uses that lesson's spelling, unchanged.` },

  // ── a2.17's two, which close the adverb loop.
  { id: 'fr.sons.alphabet.402', fr: "J'ai mal entendu la deuxième lettre.", use: 'adverb', why: `A published sentence putting a short adverb in the gap, [ZHAY MAL ahⁿ-tahⁿ-DÜ LA deu-ZYEHM LEHTR], on an -RE verb. One of only three of the 154 that carries a respelling. It closes ${unitRef(ADVERB_UNIT, 'a2')}'s loop with a card rather than a claim.` },
  { id: 'fr.sons.voyelles.355', fr: "Son style d'écriture a beaucoup changé cette année.", use: 'adverb', why: 'The second of the three, [SOHⁿ STEEL day-kree-TÜR A boh-KOO shahⁿ-ZHAY SEHT a-NAY], with a three-syllable adverb in the gap, so the gap is clearly not one-syllable-wide.' },

  // ── A past form in the wild, respelled, from a theme nobody would look in.
  { id: 'fr.sons.voyelles.445', fr: "J'ai laissé mon téléphone sous le canapé.", use: 'wild', why: 'A j\'ai plus an -é past form, [ZHAY leh-SAY MOHⁿ tay-lay-FON SOO LUH ka-na-PAY], published in a pronunciation theme years before this lesson. Proof on a card that the construction is already everywhere the learner has been reading.' },

  // ── THE PUBLISHED NEGATIVES. Four, and every one gets a respelling it never
  //    had. Their only drill was `dictation`, which is a2.13 §1 in an unusual
  //    shape: they were published as dictée targets with nothing to say them
  //    with. See RESPELL_ADDITIONS and DRILL_ADDITIONS.
  { id: 'fr.a2.negation-et-restriction.113', fr: "Elle n'a pas répondu à mon message.", use: 'negative', why: 'NO RESPELLING, and `dictation` as its only drill. An -RE verb in a person the paradigm does not use. ABSENT FROM THE SEED.' },
  { id: 'fr.a2.negation-et-restriction.114', fr: "Nous n'avons pas visité le musée samedi.", use: 'negative', why: 'NO RESPELLING. The nous negative with the elided ne, in a theme this lesson does not write into. ABSENT FROM THE SEED.' },
  { id: 'fr.a2.negation-et-restriction.117', fr: "Ils n'ont pas payé la facture ce mois-ci.", use: 'negative', why: `NO RESPELLING. The plural, and an -ER verb whose stem ${unitRef('a2.09')} taught. ABSENT FROM THE SEED.` },
  { id: 'fr.a2.negation-et-restriction.142', fr: "Il n'a pas travaillé la semaine dernière.", use: 'negative', why: 'NO RESPELLING, and every token of the supplied value was read off a published row including the whole time phrase. ABSENT FROM THE SEED.' },
];

export const IMPORTED_IDS: readonly string[] = IMPORTED.map((i) => i.id);
export const EXPECTED_IMPORTED = 23;
export const EXPECTED_AUTHORED = 36;
export const EXPECTED_SOURCE_THEMES = 10;

/** NOT ONE IMPORTED ROW IS A GENDERED SINGLE WORD.
 *
 *  a2.04's ledger amendment §0: a1.03's ending population is measured off THE
 *  SEED, so a CARRY adds a gendered single-word noun to it even though Postgres
 *  already has the row. The manifest generator REFUSES a gendered row outright
 *  and the merge measures the population off the seed before and after anyway. */
export const ITEM_IMPORT_IDS: readonly string[] = IMPORTED_IDS;
export const EXPECTED_DISPLAY_ONLY = 0;

/** a1.03's ending population measured off the SEED, through the real function,
 *  against the committed seed at version 38. Nothing this build does may move
 *  it, by either route. */
export const A103_SEED_POPULATION = 1890;

/** SIX OF THE TWENTY-THREE ARE ABSENT FROM THE SEED, AND ONE OF THEM IS avoir.
 *
 *  Corrections §10: the seed is a CUT of Postgres and a lesson whose itemIds
 *  resolve to nothing renders empty cards. a2.11 found that neither of the two
 *  rows it leaned on hardest was in the cut, and this is the same finding in a
 *  sharper form:
 *
 *      fr.sons.verbes-essentiels.002   avoir     THE FIRST WORD OF EVERY
 *                                                SENTENCE IN THIS LESSON
 *      fr.sons.mots-essentiels.053     déjà      one of the two things the gap
 *                                                is taught with
 *      fr.a2.negation-et-restriction.113 · .114 · .117 · .142
 *
 *  Without the carry the deck that releases the headword of the construction
 *  draws a blank card. Measured against the committed seed at version 38 by
 *  `scripts/_a205_seedcut.ts`, and the merge re-measures it.
 *
 *  **AND THE ONE THIS BUILD PREDICTED WOULD BE MISSING IS NOT.**
 *  `fr.sons.masterclass.021`, the `il` row of the paradigm, is in the cut. The
 *  prediction was made from the shape of the row rather than from a read, and
 *  the merge's surprise check is what caught it. */
export const ABSENT_FROM_SEED: readonly string[] = [
  'fr.sons.verbes-essentiels.002',
  'fr.sons.mots-essentiels.053',
  'fr.a2.negation-et-restriction.113',
  'fr.a2.negation-et-restriction.114',
  'fr.a2.negation-et-restriction.117',
  'fr.a2.negation-et-restriction.142',
];

export const importOf = (id: string): Import => {
  const i = IMPORTED.find((x) => x.id === id);
  if (!i) throw new Error(`a2.05: ${id} is not in IMPORTED.`);
  return i;
};

export const importsFor = (use: Import['use']): readonly Import[] => IMPORTED.filter((i) => i.use === use);

export const PUBLISHED_NEGATIVE_IDS: readonly string[] = importsFor('negative').map((i) => i.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  ROWS READ AND NOT IMPORTED
 * ═══════════════════════════════════════════════════════════════════════ */

export const READ_NOT_IMPORTED: readonly { id: string; fr: string; why: string }[] = [
  {
    id: 'fr.sons.jours-et-mois.036',
    fr: 'la semaine dernière',
    why: `CARRIES gender=f, AND IT IS THE ONLY ROW THIS BUILD WANTED THAT DOES. ${Cap(unitRef('a2.04'))} §0: ${unitRef('a1.03')}\'s ending population is measured off the SEED and a CARRY is what puts a row there, and this one ends in -e. Its VALUE is read off for two respellings — the whole phrase is [LAH suh-MEN dehr-NYEHR] — because reading a value off a row does not carry the row.`,
  },
  {
    id: 'fr.sons.masterclass.020',
    fr: "Il n'a pas encore mangé.",
    why: `CARRIES U+203F in [eel na pa-z‿ahⁿ-kohr mahⁿ-ZHAY], which draws as a low underscore on a Pixel 6 against shipped ${unitRef('sons.10')} content. Refused outright by the manifest generator. It is the sentence next door to the one this lesson imports and it would have been the perfect « pas encore » card.`,
  },
  {
    id: 'fr.a2.verbes-essentiels.003',
    fr: 'Elle a dansé toute la soirée.',
    why: 'FLAGGED at [ell ah dahn-SAY toot lah swah-RAY]. a2.01 repaired `danser` to [dahⁿ-SAY] at fr.a1.evenements-familiaux.060, so the repair is available, and this build does not make it: it does not display the row and repairing a row nobody shows is how a build acquires a defect it cannot test.',
  },
  {
    id: 'fr.a2.verbes-essentiels.017',
    fr: 'Il a invité toute la famille pour Noël.',
    why: `FLAGGED at [eel ah an-vee-TAY ...]. The house value is [aⁿ-vee-TAY] (fr.a1.amis.019, ${unitRef('a2.01')}\'s repair) against four rows publishing [an-vee-TAY] and one publishing [ehn-vee-TAY]. Three spellings of one word is not this lesson\'s to settle and the row is not displayed.`,
  },
  {
    id: 'fr.a2.negation-et-restriction.112',
    fr: "Je n'ai pas fini mes devoirs hier soir.",
    why: 'NO RESPELLING, and the best of the seventy-eight on its own terms: it is the je negative with an -IR verb and two time words. Supplying one would need a value for `mes`, and the corpus publishes `les` as LAY and `mes` nowhere at all. Every token of a supplied respelling is read off a published row in this build, and this one could not be.',
  },
  {
    id: 'fr.a2.negation-et-restriction.127',
    fr: "Il n'a pas trouvé ses clés ce matin.",
    why: 'NO RESPELLING, and the same shape: `ses` has no published value. `le matin` is also published three ways ([luh mah-TAⁿ], [luh mah-TIHN], [mah-TAN]) and picking one is a decision this lesson has no reason to make.',
  },
  {
    id: 'fr.a1.cuisine.041',
    fr: 'manger',
    why: 'FLAGGED at [mahn-ZHAY]. A second copy of the frame verb, where `muettes` already holds the correct value. Not displayed and not repaired, which is the decision a2.19 made about the same row one seq back.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE ONE REPAIR, AND THE FOUR RESPELLINGS THIS BUILD SUPPLIES
 * ═══════════════════════════════════════════════════════════════════════ */

export type Repair = {
  id: string; fr: string; from: string; to: string;
  half: string; blind: boolean; house: boolean;
  readOff: string | null; readOffToken: string | null; why: string;
};

/** ONE REPAIR, AND IT IS VISIBLE.
 *
 *  a2.17 §2's shape: `half` is the value you get by repairing ONLY what the
 *  checker reports, `blind` says the checker cannot see the nasal, `house` says
 *  the minimal repair does not reach the house value, and the two reasons are
 *  mutually exclusive fields rather than one boolean. All three values are
 *  asserted through the real function in all three layers.
 *
 *  `avant-hier` holds ONE nasal, the checker sees it, and the minimal repair IS
 *  the house value, so `half === to`, `blind` is false and `house` is false.
 *  That is the simplest possible entry and it is asserted as such. */
export const REPAIRS: readonly Repair[] = [
  {
    id: 'fr.sons.jours-et-mois.027',
    fr: 'avant-hier',
    from: 'ah-vahn-TYEHR',
    to: 'ah-vahⁿ-TYEHR',
    half: 'ah-vahⁿ-TYEHR',
    blind: false,
    house: false,
    readOff: 'fr.a2.prepositions-essentielles.193',
    readOffToken: 'a-VAHⁿ',
    why: 'A hyphen follows the n, so a2.18 §1\'s rule says the nasal is VISIBLE and the checker flags it. `avant` is published as [a-VAHⁿ] by a2.18 in « Ah, tu es ici depuis six mois. Et avant ? », so the closed form is the house one and the minimal repair reaches it. This lesson displays the row on the time-word screen, which is why it is repaired at all.',
  },
];

export const RESPELL_REPAIRS_VISIBLE: readonly Repair[] = REPAIRS.filter((r) => !r.blind);
export const RESPELL_REPAIRS_INVISIBLE: readonly Repair[] = REPAIRS.filter((r) => r.blind);
export const ALL_REPAIRS: readonly Repair[] = REPAIRS;
export const EXPECTED_REPAIRS = 1;

/** THE FOUR SUPPLIED RESPELLINGS.
 *
 *  Every syllable in each was read off a published row and the row it was read
 *  off is named, so the claim can be checked rather than believed. The manifest
 *  generator re-checks that the source row still holds a respelling.
 *
 *  a2.03 §7 built the merge path and the rule that makes it safe is one line: an
 *  addition may only land on a row whose respelling is EMPTY. */
export const RESPELL_ADDITIONS: readonly {
  id: string; fr: string; to: string; readOff: readonly string[]; why: string;
}[] = [
  {
    id: 'fr.a2.negation-et-restriction.142',
    fr: "Il n'a pas travaillé la semaine dernière.",
    to: 'eel na pa trah-vah-YAY lah suh-MEN dehr-NYEHR',
    readOff: [IL_NEGATIVE_ID, 'fr.a2.verbes.031', 'fr.sons.jours-et-mois.036'],
    why: 'EVERY TOKEN READ OFF, INCLUDING THE WHOLE TIME PHRASE. `eel na pa` off the one respelled negative in the corpus, `trah-vah-YAY` off the travailler headword this lesson imports, and [LAH suh-MEN dehr-NYEHR] off fr.sons.jours-et-mois.036, lower-cased because it is medial here and capitals are phrase-final stress.',
  },
  {
    id: 'fr.a2.negation-et-restriction.113',
    fr: "Elle n'a pas répondu à mon message.",
    to: 'ehl na pa ray-pohⁿ-DÜ a mohⁿ meh-SAHZH',
    readOff: ['fr.a2.negation-et-restriction.164', 'fr.a2.verbes.020', 'fr.sons.noms-essentiels.048', 'fr.sons.voyelles.445'],
    why: '`ehl` off a2.19\'s own supplied value for fr.a2.negation-et-restriction.164, `ray-pohⁿ-DÜ` off the répondre headword [ray-POHⁿDR], `meh-SAHZH` off « le message », and `mohⁿ` off « J\'ai laissé mon téléphone... », which this lesson also imports.',
  },
  {
    id: 'fr.a2.negation-et-restriction.114',
    fr: "Nous n'avons pas visité le musée samedi.",
    to: 'noo na-vohⁿ pa vee-zee-TAY luh mü-ZAY sam-DEE',
    readOff: ['fr.a2.verbes.510', 'fr.sons.verbes-essentiels.129', 'fr.a2.tourisme.001', 'fr.sons.jours-et-mois.006'],
    why: '`noo na-vohⁿ` follows a2.19\'s own « Nous n\'allons pas partir. » [noo na-lohⁿ ...]: the ne elides and the liaison z goes with it. `vee-zee-TAY` off the visiter headword, `luh mü-ZAY` off « le musée », `sam-DEE` off « samedi », which a2.19 also used.',
  },
  {
    id: 'fr.a2.negation-et-restriction.117',
    fr: "Ils n'ont pas payé la facture ce mois-ci.",
    to: 'eel nohⁿ pa pay-YAY lah fak-TÜR suh mwah-SEE',
    readOff: ['fr.sons.verbes-essentiels.059', 'fr.a2.courses.054', 'fr.a2.prepositions-essentielles.175'],
    why: '`pay-YAY` off the payer headword, which is the spelling a2.13 and a2.19 both published against three rows spelling it [peh-YAY]; `fak-TÜR` off « la facture » at fr.a2.courses.054 against two rows spelling it [fahk-TÜR]; `MWAH` off a2.18\'s « ... depuis six mois. »',
  },
];

/** Rows found broken and left alone, because this build does not display them.
 *  Repairing a row nobody shows is how a build acquires a defect it cannot
 *  test (a2.18's rule, and a2.17 §1's). */
export const NOT_REPAIRED: readonly { id: string; fr: string; respell: string; why: string }[] = [
  { id: 'fr.a1.cuisine.041', fr: 'manger', respell: 'mahn-ZHAY', why: 'FLAGGED. A second copy of the frame verb, where `muettes` already holds the correct value.' },
  { id: 'fr.a1.rp-repas.013', fr: 'manger', respell: 'mahn-ZHAY', why: 'FLAGGED. A third copy, same reason.' },
  { id: 'fr.a2.verbes-essentiels.003', fr: 'Elle a dansé toute la soirée.', respell: 'ell ah dahn-SAY toot lah swah-RAY', why: 'FLAGGED. Not displayed; see READ_NOT_IMPORTED.' },
  { id: 'fr.a2.verbes-essentiels.017', fr: 'Il a invité toute la famille pour Noël.', respell: 'eel ah an-vee-TAY toot lah fah-MEE poor no-EL', why: 'FLAGGED, and the word is published three ways. Not displayed.' },
  { id: 'fr.a1.argent-quotidien.062', fr: 'vendre', respell: 'VAHNDR', why: `BLIND rather than flagged: a D follows the nasal inside the token, so the checker cannot see it. Corrections §6 and ${unitRef('a2.18')} §1. This build displays fr.a2.verbes.027, which ${unitRef('a2.11')} already repaired.` },
];

export const DRILL_ADDITIONS: readonly { id: string; fr: string; add: string[]; why: string }[] = [
  { id: 'fr.a2.negation-et-restriction.113', fr: "Elle n'a pas répondu à mon message.", add: ['flashcard', 'sentence', 'voiceflash', 'review'], why: 'Carried `dictation` and nothing else, so it could not be released into a deck or spoken, and it had no respelling to say it with either.' },
  { id: 'fr.a2.negation-et-restriction.114', fr: "Nous n'avons pas visité le musée samedi.", add: ['flashcard', 'sentence', 'voiceflash', 'review'], why: 'The same.' },
  { id: 'fr.a2.negation-et-restriction.117', fr: "Ils n'ont pas payé la facture ce mois-ci.", add: ['flashcard', 'sentence', 'voiceflash', 'review'], why: 'The same.' },
  { id: 'fr.a2.negation-et-restriction.142', fr: "Il n'a pas travaillé la semaine dernière.", add: ['flashcard', 'sentence', 'voiceflash', 'review'], why: 'The same.' },
  { id: 'fr.sons.alphabet.402', fr: "J'ai mal entendu la deuxième lettre.", add: ['flashcard', 'voiceflash'], why: 'Carried `sentence` and `review` only, so it could not be released into a deck. It is one of three published cards in the corpus that put a short adverb in the gap, and it is the one that closes a2.17\'s loop.' },
  { id: 'fr.sons.voyelles.355', fr: "Son style d'écriture a beaucoup changé cette année.", add: ['flashcard', 'voiceflash'], why: 'The same, and it is the second of the three.' },
  { id: 'fr.sons.voyelles.445', fr: "J'ai laissé mon téléphone sous le canapé.", add: ['flashcard', 'voiceflash'], why: 'The same. A past form in the wild, published in a pronunciation theme, and it could not reach a deck.' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  WHAT NO EAR QUESTION MAY ASK
 * ═══════════════════════════════════════════════════════════════════════ */

/** THE CENTRAL FACT OF THIS LESSON, ENFORCED RATHER THAN REPORTED.
 *
 *  `manger` and `mangé` are /mɑ̃.ʒe/. `parler` and `parlé` are /paʁ.le/. No ear
 *  question may offer two members of one of these pairs, because there is no
 *  correct answer and marking one right certifies a bug. The brief asks for this
 *  to be said in the report; a sentence in a report cannot fail, so it is a list
 *  the batch, the merge and the test all walk, in a2.10's and a2.11's shape:
 *
 *      if (x !== y && opts[i].replace(x, y) === opts[j]) bad.push(...)
 *
 *  which fires only when two options differ ONLY by a member of one pair, so
 *  « J'ai mangé. » against « Je vais manger. » stays legal: the front differs. */
export const NO_EAR_QUESTION: readonly (readonly [string, string])[] = [
  ['manger', 'mangé'],
  ['parler', 'parlé'],
  ['travailler', 'travaillé'],
  ['payer', 'payé'],
  ['visiter', 'visité'],
  ['danser', 'dansé'],
];

export const EAR_CLAIM =
  'The ear has one job in this lesson and it is the little word in front. Vais against ai is a real difference and you can be taught to catch it. Manger against mangé is not a difference at all, and no exercise anywhere can make it into one.';

/** The one thing the ear CAN be asked, and it is the brief's own listenChoose:
 *  the auxiliary, distinguishing future from past. */
export const EAR_QUESTION_SUBJECT = 'the little word in front';

/* ══════════════════════════════════════════════════════════════════════════
 *  THE COUNTS THE THREE LAYERS AGREE ON
 * ═══════════════════════════════════════════════════════════════════════ */

export const EXPECTED_SECTIONS = 26;
export const EXPECTED_ACTS = 7;
export const EXPECTED_QUESTIONS = 36;
export const EXPECTED_TERMS = 9;
export const EXPECTED_TRAP_DRILLS = 2;
export const SHEET_ID = 'sheet.a2.05.passe';

/** THE MISSION COUNT IS ABOVE THE CONVENTION AND THIS BUILD SAYS SO.
 *
 *  Doctrine §F gives 19 to 24 and the brief repeats it. Ledger §a2.13-0 measured
 *  that the 24-section shape came from a2.01, was copied six times, was never
 *  checked against a subject, and that there is NO ceiling in `schema.ts`;
 *  a2.13 shipped 32 sections and 45 questions for the same reason this lesson
 *  ships 26 and 36. The subject carries one Owns and THREE closures — a2.17's
 *  adverb, a2.18's "ago", and the -er/-é contrast a2.19 sits in front of — and
 *  each of those is a screen or it is nothing. */
export const SECTION_CONVENTION = 24;
export const SECTION_OVERRUN_REASON =
  `Three deferrals close here and each of them needs a screen rather than a bullet. Folding them into 24 turns the ${unitRef('a2.17')} loop, the ${unitRef('a2.18')} loop and the sound contrast into one card each, which is the shape doctrine §B.5 calls a reference document with pictures.`;

/** Doctrine §B.5: if the paradigm outweighs the Owns, the wrong lesson got
 *  built. Asserted rather than described. */
export const OWNS_MISSIONS = 6;
export const PARADIGM_MISSIONS = 3;

/** a2.19 §3: a reference sheet's own title is drawn in the sheet's HEADER BAR
 *  and ellipsises there while rendering in full on the card that opens it. */
export const SHEET_TITLE_MAX = 37;

/** The mission-row title ceiling, measured by a2.13 on a Pixel 6 and house-wide
 *  since. a2.14 §13 corrected it to a WIDTH rather than a count. */
export const TITLE_MAX = 27;
export const TITLE_TARGET = 25;

/** a2.04 measured a FOUR-column table inside a reference sheet clipping on a
 *  Pixel 6. The budget is THREE. */
export const SHEET_COLS_MAX = 3;

/** a2.19 §4: the break card is the most fragile screen in an A2 scene and the
 *  budget is LINES rather than words. Its measured figures, inherited whole,
 *  plus the guard it added last: no string on the break card may equal the
 *  scene's `closing.text`, because both render on that one screen. */
export const BREAK_BUDGET = {
  heading: 13,
  fr: 28,
  en: 24,
  bodyWords: 26,
  coachWords: 12,
} as const;

/** a2.03 §3: the term-chip row is thirty-seven characters wide on a Pixel 6. */
export const TERM_ROW_MAX = 37;

/** a2.18 §3: a stepped trapDrill's `cards` step label counts its own array and
 *  nothing in any layer checked that. Found on a Pixel 6 and by nothing else. */
export const STEP_LABEL_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'] as const;
