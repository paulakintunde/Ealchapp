// a2.06.l1 « Pronoms d'objet direct » — the corpus, the constants and the
// decisions. Trail seq 21, the head of the pronoun block (21, 22, 23).
//
// ════════════════════════════════════════════════════════════════════════════
//  WHAT THE BRIEF GOT WRONG, MEASURED 2026-08-15
// ════════════════════════════════════════════════════════════════════════════
//
// Doctrine §F asks for this header. The brief was written against a real probe
// (`scripts/_a2_preflight_pronouns.ts`) two days ago and is much better on facts
// than the batch-1 and batch-2 briefs were, so the failures here are narrower
// and every one of them is about the RESPELLINGS.
//
//  1. « THE PROBE SURFACED COMPETING RESPELLINGS » — TRUE, AND IT NAMED TWO OF
//     THE FOUR. The brief hands over `connaître` and `inviter`. Measured across
//     every published row rather than the probe's first three per word:
//
//       inviter    THREE variants, not two:  aⁿ-vee-TAY (1) · an-vee-TAY (4)
//                  · ehn-vee-TAY (1). The brief named the first two. FIVE OF
//                  THE SIX ROWS ARE WRONG and the correct one is the minority.
//       manger     NOT NAMED AT ALL, and it is a 2-2 split:
//                  mahn-ZHAY (2) · mahⁿ-ZHAY (2). This build imports manger.
//       acheter    NOT NAMED, ahsh-TAY (4) · ash-TAY (2). Not a nasal at all,
//                  a vowel-length divergence, and DELIBERATELY LEFT ALONE. §4.
//       connaître  named correctly: koh-NEHTR (2) · kon-NETR (1).
//
//  2. « `inviter` IS THE SHAPE CORRECTIONS §6 IS ABOUT » — HALF TRUE, AND
//     `connaître` IS NOT THE SHAPE AT ALL. Run through the real
//     `hasPlainNasalFor` rather than reasoned about:
//
//       an-vee-TAY    FLAGGED     visible, repair is straightforward
//       ehn-vee-TAY   FLAGGED     visible
//       aⁿ-vee-TAY    clean       the house value
//       mahn-ZHAY     FLAGGED     visible
//       kon-NETR      CLEAN       ← not a nasal error, and the checker is right
//       koh-NETR      CLEAN
//       koh-NEHTR     clean       the house value
//
//     `connaître` carries `nn`, so `hasPlainNasalFor` short-circuits on the
//     doubled-consonant branch and CORRECTLY declines to flag it: /kɔ.nɛtʁ/ has
//     no nasal vowel. The `kon-NETR` → `koh-NEHTR` repair is a HOUSE repair and
//     nothing to do with §6. Filing it under §6 is exactly the conflation
//     corrections §14.1 warns about, one level up: not a half-repair, but a
//     repair with a DIFFERENT REASON filed under the nasal heading. §14.1's
//     third field (`house`) is what it needs and this build carries it.
//
//     SO: this lesson has NO §14.1 mixed row. Every repair here is visible, and
//     that is worth saying rather than leaving as a silence — corrections §6's
//     closing line asks for exactly that report.
//
//  3. « je le vois 2 · je la vois 1 » — TRUE AS SUBSTRINGS AND MISLEADING AS
//     EVIDENCE, and this sharpens corrections §3 rather than contradicting it.
//     The two rows are `Je le vois chaque semaine.` and `Je la vois tous les
//     jours.`; the third is a B1 sentence 13 words long. THE BARE FRAME DOES NOT
//     EXIST. Measured against all 486 rows of the theme with the flashcard-hub
//     article-stripping rule, every frame this lesson wants is FREE:
//
//       Je le vois. · Je la vois. · Je les vois. · Tu le connais. ·
//       Je ne le vois pas. · Je l'aime. · Je l'ai vu. · Je l'ai vue.  all free
//
//     So corrections §3 holds for the SEVENTH build running, and it holds more
//     strongly than the probe's counts suggest: a construction can occur twice
//     and still leave you authoring every cell.
//
//  4. « pronoms-essentiels 486 published » — TRUE, AND THE SEED CARRIES **2**.
//     Not "a fraction": two rows out of 486, the thinnest cut this band has met.
//     `verbes` shows 119 of 494 and a2.11 was bitten by that. The merge here
//     carries every imported row explicitly and asserts the count.
//
//  5. THE THEME HAS ZERO PRE-EXISTING DUPLICATE `fr` GROUPS. Measured the way
//     `flashhub-coverage.test.ts` measures it, article-stripped. That is a clean
//     sheet this build must not spoil, and it is why every authored frame was
//     checked against all 486 rows before it was written rather than after.
//
// ── AND ONE THING THE BRIEF SAYS IS UNVERIFIED THAT IS ALREADY SETTLED ──────
//
// The brief lists as UNVERIFIED « whether the five negation statements across
// a2.19, a2.05, a2.21, a2.22 and a1.18 are actually one string », and calls this
// build "the sixth to find out and the first outside the past-tense arc".
//
// **a2.23 SETTLED IT ONE LESSON AGO**, in A2-23-BUILD-REPORT.md §2, and its
// answer is measured off the shipped seed bodies. They are TWO strings, on
// purpose, and neither has drifted. This build re-measured it independently and
// agrees. §3 below.
//
// ════════════════════════════════════════════════════════════════════════════

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

/* ═══════════════════════════════════════════════════════════════════════════
 *  §1. IDENTITY, MEASURED
 * ══════════════════════════════════════════════════════════════════════════ */

/** Read out of `content_units` 2026-08-15 by `_a2_preflight_pronouns.ts`, not
 *  taken from the brief and not taken from the spine.
 *
 *  Corrections §1 holds for this unit as it held for the other sixteen: the
 *  spine's `sub` — « le, la, les — position & past agreement » — exists NOWHERE
 *  in the database and carries an em dash, which is banned in every user-facing
 *  string. The `canDo` matched the spine byte for byte, which the brief also
 *  said and which cost one line to confirm.
 *
 *  `seq` is a NUMBER. `corpus:probe` stringifies it when it prints. */
export const UNIT = {
  id: 'a2.06',
  seq: 21,
  level: 'a2' as const,
  track: 'a2',
  title: 'Direct Object Pronouns',
  sub: "Pronoms d'objet direct",
  canDo: 'Can replace a direct object with le, la or les and place it before the verb',
  prereqUnitIds: ['a2.01'],
} as const;

export const LESSON_ID = 'a2.06.l1';

/* ═══════════════════════════════════════════════════════════════════════════
 *  §2. THE THEME, AND WHY NOT `verbes`
 * ══════════════════════════════════════════════════════════════════════════ */

/** The brief lists the home as UNVERIFIED and offers `verbes` as the
 *  alternative, on the grounds that it holds 870 published rows and is not
 *  short of room. Decided here, and the reasoning is on the record because
 *  a2.24 and a2.25 inherit it:
 *
 *  `pronoms-essentiels`, for three reasons and not for the room.
 *
 *  1. IT IS THE SEMANTIC HOME. 486 published rows of pronoun material, and the
 *     three sentences the probe found for this construction are already in it
 *     (`fr.a1.pronoms-essentiels.087`, `.096`). Putting the pronoun lesson
 *     somewhere else would leave the theme without the lesson that explains it.
 *  2. a2.22 AND a2.23 WROTE INTO `verbes` AND THAT IS THE WRONG PRECEDENT TO
 *     COPY. They are VERB lessons — pronominal verbs and their compound past —
 *     and their rows conjugate. This lesson's rows are about a word that is not
 *     a verb and does not conjugate.
 *  3. THE DOCTRINE'S OWN TRAIL TABLE ALREADY SAYS SO for all three of seq
 *     21..23, so choosing `verbes` here would split the block across two themes
 *     and hand a2.24 a decision it has no reason to revisit.
 *
 *  Consequence accepted: the seed cut for this theme is TWO rows out of 486, so
 *  the merge carries every imported row by name. §4 of the header. */
export const THEME = 'pronoms-essentiels';

/** Corrections §10: the maximum has been useless since a2.10.l2 took .461..500.
 *  THE ROW COUNT IS THE ONLY SIGNAL. Measured 2026-08-15 before any apply. */
export const THEME_ROWS_BEFORE = 486;
export const A2_ROWS_BEFORE = 188;

/** The claimed block. NEXT FREE was `fr.a2.pronoms-essentiels.189` with no gaps
 *  below it in the a2 sequence. Wide enough that nobody needs a second block,
 *  and a2.24's brief is told to take its own ABOVE whatever this one applied. */
export const ID_FIRST = 189;
export const ID_LAST = 236;

export const A = (n: number) => `fr.a2.${THEME}.${String(n).padStart(3, '0')}`;

/* ═══════════════════════════════════════════════════════════════════════════
 *  §3. THE NEIGHBOURS, QUOTED RATHER THAN RESTATED
 * ══════════════════════════════════════════════════════════════════════════ */

/** a1.03, Le genre des noms. LOAD-BEARING AND NOT RE-TAUGHT: a learner who
 *  cannot gender a noun cannot pick between le and la. Named, leaned on, and
 *  every card that needs a gender shows the noun so the gender is derivable. */
export const GENDER_UNIT = 'a1.03';

/** a1.04, Les articles définis, seq 4 of A1. The same three words doing the
 *  other job. Its reframe is quoted verbatim ONCE, as a recap, and this lesson
 *  teaches none of it.
 *
 *  THE BRIEF LISTS AS UNVERIFIED whether a1.04's treatment is compatible with
 *  calling le/la/les a second job. Read as shipped: a1.04 owns the article and
 *  its four forms, and it never claims the words do only that. Its whole subject
 *  is the place where ENGLISH SAYS NOTHING and French says le. This lesson's
 *  subject is the place where English says something — him, her, it, them — and
 *  French says le somewhere else. The two are compatible and they are more than
 *  compatible: they are complementary, and the contrast is sharp enough to be a
 *  card rather than a caveat. */
export const ARTICLE_UNIT = 'a1.04';
export const A104_REFRAME = 'When English says nothing, French says le.';

/** a2.01, Les verbes en -ER, seq 1. The hard prerequisite in `content_units`. */
export const ER_UNIT = 'a2.01';

/** a2.02, Irréguliers 1, seq 5. It NAMED the recurring shape and three later
 *  lessons were told to quote it. Imported as a bare string rather than
 *  retyped, exactly as a2.18, a2.19 and a2.15 did. Doctrine §B.7. */
export const WHAT_FOLLOWS_UNIT = 'a2.02';
export const WHAT_FOLLOWS = 'what comes next decides';

/** THE FIFTH OCCURRENCE OF THE SHAPE, AND IT IS THE ONE THAT DOES NOT FIT.
 *
 *  a2.02, a2.18, a2.19 and a2.15 all had the distinguisher in WHAT FOLLOWS —
 *  venir de + infinitive against venir de + place, and so on. Here what follows
 *  decides and so does where the word sits, and the second half is the new part:
 *
 *      Je vois LE film.      le leans on a noun        article
 *      Je LE vois.           le leans on a verb        pronoun
 *
 *  The brief asks this to be said plainly rather than filed as a fifth repeat,
 *  and the lesson says it on the card. */
export const SHAPE_EXTENSION =
  'Here the word after it decides, and so does where it sits: an article leans on a noun, a pronoun leans on a verb.';

/** sons.07, L'élision. It owns the rule and this lesson teaches NONE of it. */
export const ELISION_UNIT = 'sons.07';

/** a2.22, Les verbes pronominaux, seq 19. Its brief was told to leave the
 *  object-pronoun system to this lesson, and its build report confirms it did.
 *  The loop is closed here in one line: the reflexive words the learner already
 *  carries sit in the same slot as these. */
export const REFLEXIVE_UNIT = 'a2.22';
export const A222_REFRAME = 'The pronoun changes with the subject, because it is the subject.';

/** a2.05 · a2.20 · a2.21, the passé composé arc. Act 5 leans on all three and
 *  teaches none of them. */
export const PASSE_UNIT = 'a2.05';
export const PARTICIPLE_UNIT = 'a2.20';
export const ETRE_UNIT = 'a2.21';

/** a2.23, Pronominaux au passé composé, seq 20, immediately before. It met the
 *  no-agreement case receptively and pointed at a2.24 for the reason. §6. */
export const REFLEXIVE_PAST_UNIT = 'a2.23';

/** a2.24 and a2.25, seq 22 and 23. Reserved absolutely: not one indirect object
 *  pronoun and not one pronominal `y` or `en` appears on any surface here. */
export const INDIRECT_UNIT = 'a2.24';
export const Y_EN_UNIT = 'a2.25';

/* ─── THE NEGATION ARC ──────────────────────────────────────────────────────
 *
 * The brief calls this UNVERIFIED and says this build is "the sixth to find out
 * and the first outside the past-tense arc". IT WAS SETTLED ONE LESSON AGO by
 * a2.23 (A2-23-BUILD-REPORT.md §2) and this build re-measured it independently
 * off the shipped source rather than taking the report's word for it:
 *
 *   a1.18   « Wrap the verb, then ask what the verb was. »
 *   a2.19   « Wrap the verb that changed, not the one carrying the meaning. »
 *   a2.05   quotes a2.19's, as `NEGATION_RULE = A219_REFRAME`
 *   a2.21   quotes a2.19's
 *   a2.22   quotes a2.19's, and adds its own extension
 *   a2.23   quotes both, and adds a third
 *
 * TWO STRINGS, NOT ONE, AND NEITHER HAS DRIFTED. a1.18 says which words go
 * round the verb; a2.19 says which verb. The distinction is deliberate and the
 * correct assertion is that both are quoted verbatim AND that they are still
 * different from each other — a2.23's negative, kept here.
 *
 * WHAT THIS LESSON ADDS. a2.19's line asks which of two verbs to wrap and there
 * is only one verb here, so it is true and idle. a2.22's extension — « Both
 * words changed for the subject, so both go inside the wrap. » — is the right
 * SHAPE and is FALSE of this lesson word for word, because the object pronoun
 * does not change with the subject at all. Quoting it unchanged would teach the
 * learner a reason that does not apply. So the arc takes a fourth sentence, cut
 * to the same pattern as a2.23's and asserting only what is true here.         */

export const NEGATION_UNIT = 'a1.18';
export const A118_REFRAME = 'Wrap the verb, then ask what the verb was.';

export const FUTUR_UNIT = 'a2.19';
export const NEGATION_RULE = 'Wrap the verb that changed, not the one carrying the meaning.';

export const A222_NEGATION_EXTENSION =
  'Both words changed for the subject, so both go inside the wrap.';

/** This lesson's sentence. The cluster is the pronoun and the verb, and `ne`
 *  goes outside both of them. */
export const NEGATION_EXTENSION =
  'The wrap goes round the pronoun and the verb together.';

/* ═══════════════════════════════════════════════════════════════════════════
 *  §4. THE REFRAME
 * ══════════════════════════════════════════════════════════════════════════ */

/** THE LINE, AND a2.24 AND a2.25 BOTH INHERIT IT.
 *
 *  Doctrine §B.4: could the learner apply it in the half-second between subject
 *  and verb? This one is applied exactly there and nowhere else, and it is a
 *  procedure rather than a description: it tells the learner where to put the
 *  word, which is the only thing they get wrong.
 *
 *  It was chosen to be TRUE OF THE WHOLE BLOCK rather than of this lesson, and
 *  that was a constraint rather than a bonus: `lui` and `leur` go there, `y` and
 *  `en` go there, and a2.22's reflexive words are already there. Three lessons
 *  should be one rule, so the head of the chain does not get to pick a sentence
 *  only its own forms satisfy. */
export const REFRAME = 'The pronoun goes in front of the verb, not after it.';

/** Invariants §5: assert against an EXPLICIT CONSTANT, never a figure derived
 *  from the lesson, because a derived count compares the content to itself and
 *  passes on any rewording. */
/** Counted over the NOT-deduped display walk, which is what a2.22 §3 requires:
 *  a Set collapses a short line authored twice and under-reports every reframe
 *  short enough to appear in both a `say` and a card body.
 *
 *  Seventeen, against a2.19's measured 16 and a2.22's 8. The first draft carried
 *  it 23 times and that was too many: at 23 it is on nearly every screen and
 *  reads as a slogan rather than a rule. Six were removed from places where the
 *  surrounding sentence already said it in its own words. */
export const REFRAME_COUNT = 17;

export const REFRAME_REJECTED: readonly { candidate: string; why: string }[] = [
  {
    candidate: 'le, la and les replace a direct object.',
    why: "THE BRIEF NAMES THIS AS THE THING TO REJECT and it is right. It describes what the words do and gives the learner nothing to do differently, so a learner holding it still says « je vois le ». It also spends the technical phrase this lesson has decided to keep off the learner surface entirely. §5.",
  },
  {
    candidate: 'Replace the noun with le, la or les and move it.',
    why: 'Two instructions where the second is the whole lesson and the first is a1.04 and a1.03 restated. It also says "move it", which is false: nothing moves, the word is SAID in a different place, and a learner who pictures movement builds the English sentence first and then repairs it, which is the slow path this lesson exists to remove.',
  },
  {
    candidate: 'French puts the object before the verb.',
    why: 'True, and it is a fact about French rather than an instruction to a speaker. It is also the sentence that forces the technical phrase onto every card that quotes it. The chosen line says the same thing in words the learner can run.',
  },
  {
    candidate: 'The pronoun comes first.',
    why: 'Short enough and wrong: it comes after the subject, not first, and a learner applying it literally produces « Le je vois. » A reframe that has to be corrected the first time it is used is worse than a longer one that does not.',
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
 *  §5. THE JARGON LINE, MEASURED RATHER THAN GUESSED
 * ══════════════════════════════════════════════════════════════════════════ */

/** Corrections §14.5 says `adjective` and `adverb` are house vocabulary, that
 *  banning one is the build inventing a rule, and that what the house actually
 *  does is PREFER THE PLAIN PHRASE. It gives the method — guard the ratio — and
 *  not the answer for this lesson's words. Measured the same way, across all 62
 *  shipped lesson bodies in `seed.json`, walked with the notation keys dropped:
 *
 *      pronoun          233        subject         173
 *      pronouns          95        object           49
 *      replaces          13        objects          11
 *      direct object      2        indirect object   1
 *      object pronoun     0        stands in for     0
 *
 *  So `pronoun`, `subject` and `object` are HOUSE VOCABULARY and refusing them
 *  would be the invention §14.5 warns about. `object pronoun` has never once
 *  appeared on a learner surface in this product, and `direct object` twice.
 *
 *  THE RULE THIS BUILD ADOPTS, which is narrower than a2.23's blanket refusal
 *  and wider than nothing: the technical compound appears ONLY where
 *  `content_units` forces it, which is `overview.titleEn`, and the plain phrase
 *  outnumbers it everywhere else. a2.23 refused it on every surface including
 *  its own overview; it could afford to, because the phrase is not in its unit
 *  title. It is in this one. */
export const PLAIN_PHRASE = 'the what or the who';

/** The second plain phrase, which is the Owns stated as vocabulary: in English
 *  it sits after the verb, and that is the whole of what has to change. */
export const PLAIN_POSITION = 'the word after the verb';

/** Refused on every learner surface WITHOUT EXCEPTION. `direct object` is NOT
 *  here: the unit title contains it, so it is handled by the ratio guard and by
 *  a separate assertion that its only occurrence is `overview.titleEn`.
 *
 *  ── THE -s PLURAL, AND WHY THIS IS TWO LISTS ──────────────────────────────
 *
 *  Corrections §13: `hasPhrase` is boundary-exact, so a list holding `paradigm`
 *  does not catch `paradigms`, and a2.15 shipped « Three paradigms » past all
 *  three of its layers because of it. The guard that enforces this checked EVERY
 *  entry for a plural and immediately went red on `accusative` — which is an
 *  adjective, and « accusatives » is not English.
 *
 *  So the countable nouns are separated from the adjectives, and the guard
 *  requires a plural for the first list only. Loosening the guard to "skip
 *  anything awkward" would have put `clitic` back at risk, which is the one
 *  entry here most likely to be written in the plural. */
export const JARGON_NOUNS: readonly string[] = [
  'object pronoun', 'object pronouns',
  'indirect object', 'indirect objects',
  'clitic', 'clitics',
  'antecedent', 'antecedents',
  'anaphora', 'anaphoras',
];

/** Adjectives and mass nouns, which have no plural a learner surface would use. */
export const JARGON_ADJECTIVES: readonly string[] = [
  'accusative', 'dative', 'nominative', 'oblique', 'proclitic', 'enclitic',
  'transitive', 'intransitive', 'preverbal', 'postverbal', 'anaphoric',
  'syntax', 'syntactic', 'valency',
];

export const JARGON: readonly string[] = [...JARGON_NOUNS, ...JARGON_ADJECTIVES];

/* ═══════════════════════════════════════════════════════════════════════════
 *  §6. THE DECISION THE BRIEF COULD NOT MAKE
 * ══════════════════════════════════════════════════════════════════════════ */

/** PRECEDING-DIRECT-OBJECT PARTICIPLE AGREEMENT IS TAUGHT HERE, IN ONE ACT.
 *
 *  The brief calls this "the decision this brief cannot make", recommends this
 *  lesson takes it, and says that if it is refused it must be refused plainly so
 *  it does not fall between three units. Taken, and the reasoning is on the
 *  record because two later lessons read this file.
 *
 *  ── THE THREE FACTS THE BRIEF SAYS DO NOT POINT THE SAME WAY ──────────────
 *
 *  They point the same way once the two rules are separated, and the brief
 *  treats them as one:
 *
 *    RULE A   « Elle s'est lavé les mains. » has no ending BECAUSE the thing
 *             washed is named AFTER the verb, and `se` there is not the thing
 *             washed at all. Explaining it needs the indirect reading, which is
 *             a2.24's entire subject.
 *    RULE B   When the thing acted on is said BEFORE the verb, the second word
 *             takes its ending. « Je l'ai vue. »
 *
 *  a2.23 met RULE A, named it receptively, refused the explanation on every
 *  surface, and pointed the learner at a2.24 ON A LEARNER SURFACE. That pointer
 *  is CORRECT and this build does not disturb it. a2.24's brief in turn defers
 *  RULE B here by name and tells its author to read this report.
 *
 *  RULE B IS THIS LESSON'S, and the chain works in seq order rather than in a
 *  circle: this lesson installs "said before the verb" at seq 21, which is the
 *  thing RULE A is an exception to, and a2.24 at seq 22 explains why the
 *  exception exists. Refusing RULE B here would leave a2.24 explaining an
 *  exception to a rule nobody had stated.
 *
 *  ── WHAT TAKING IT COSTS, AND THE LIMIT ───────────────────────────────────
 *
 *  ONE ACT, not the spine. The Owns is the position and the mission counts say
 *  so: act 3 carries the position and act 5 carries this. Concretely:
 *
 *    - Recognition and ONE typed production. `fold()` keeps a final -e and -s
 *      (corrections §5), so the ending is genuinely testable by typing, which
 *      is the only reason a production surface is defensible at all.
 *    - NO ear question anywhere near it. vu and vue are one sound, which is the
 *      same limit the elision trap imposes and is enforced by one list. §7.
 *    - The compound tense is quoted from a2.05, a2.20 and a2.21 and taught
 *      nowhere. The one genuinely new positional fact — the pronoun goes in
 *      front of the FIRST word, not between the two — is this lesson's own
 *      canDo extended into a tense the learner already has.
 *
 *  The DB `canDo` asks for replacement and position only and does not mention
 *  agreement. That is an argument for keeping it to one act, which is what
 *  happened, rather than an argument for refusing it: the canDo is a floor. */
export const AGREEMENT_OWNER = UNIT.id;

export const AGREEMENT_RULE =
  'When the pronoun comes before the verb, the second word takes its ending.';

/** Stated as the limit, because a learner who has just been taught an ending
 *  they cannot hear needs to be told they cannot hear it. */
export const AGREEMENT_SILENT =
  'Nothing in the sound changes. The ending is written and it is never heard.';

/* ═══════════════════════════════════════════════════════════════════════════
 *  §7. WHAT THE EAR CANNOT DECIDE
 * ══════════════════════════════════════════════════════════════════════════ */

/** Corrections §5: a `listenChoose` offering two members of one homophone group
 *  has NO CORRECT ANSWER and marking one right certifies a bug. a2.10 and a2.11
 *  enforce it with a list rather than a sentence in a report, "because a
 *  sentence in a report cannot fail". Copied, and this lesson has TWO groups
 *  where those had one:
 *
 *    ELISION     « Je l'aime. » is him or her and no sound distinguishes them.
 *                This is the brief's trap one and it is a hard limit on the
 *                quiz: no ear question may ask which gender an elided l'
 *                carries. sons.07 owns the elision itself.
 *    AGREEMENT   vu · vue · vus · vues are one sound, which is the same silent
 *                agreement a2.01 stated and a2.21 and a2.23 paid off.
 *
 *  Each inner array is one group: two options that differ ONLY by a swap within
 *  one group have no answer. Two options differing by anything else are legal,
 *  so « Je le vois. » against « Je la vois. » stays askable — those are two
 *  sounds and the whole reason one or two ear items are defensible at all. */
export const HOMOPHONE_FORMS: readonly (readonly string[])[] = [
  ["Je l'aime.", "Je l'aime."],
  ['vu', 'vue', 'vus', 'vues'],
  ['regardé', 'regardée', 'regardés', 'regardées'],
  ['acheté', 'achetée', 'achetés', 'achetées'],
  ['invité', 'invitée', 'invités', 'invitées'],
];

/** The elided form carries no gender in the sound OR on the page. Stated on a
 *  card, asserted by the test, and the reason no ear item goes near it. */
export const ELISION_LIMIT =
  "Before a vowel both le and la become l', and at that point nothing in the sentence tells you which one it was.";

/* ═══════════════════════════════════════════════════════════════════════════
 *  §8. THE RESPELLING REPAIRS
 * ══════════════════════════════════════════════════════════════════════════ */

/** Corrections §14.1: ONE table, and every entry carries the value you get by
 *  repairing ONLY what the checker reports, with two SEPARATE and mutually
 *  exclusive reasons for `half !== to`:
 *
 *    blind   a nasal the checker cannot see, so the minimal repair is not the
 *            whole repair
 *    house   a house convention the minimal repair does not reach
 *
 *  §14.1's own worked example is `bien BYAN → BYAⁿ → BYEHⁿ`, where the minimal
 *  repair is clean and still not the house value.
 *
 *  MEASURED RESULT FOR THIS LESSON, AND IT IS WORTH REPORTING AS A NEGATIVE:
 *  every row here is `blind: false`, and only ONE is `house: true`. There is no
 *  mixed row in this import at all. Corrections §6 asks for the absence to be
 *  reported rather than left as a silence, and §14.1's warning — that following
 *  §6 literally ships a wrong value the checker then calls clean — did not bite
 *  here because no imported row carries two nasals.
 *
 *  THE ONE THAT LOOKS LIKE §6 AND IS NOT: `connaître`. The brief files it beside
 *  `inviter` as a competing respelling and implies the same shape. It is a
 *  different shape entirely — `kon-NETR` is CLEAN through the real function and
 *  correctly so, because `connaître` is spelled with `nn` and has no nasal vowel
 *  (/kɔ.nɛtʁ/). Repairing it is a house decision about the vowel, not a nasal
 *  repair, and filing it under §6 would have produced a guard that asserts the
 *  stored value is flagged and goes red on a correct measurement. */
export type RespellRepair = {
  id: string;
  fr: string;
  /** What Postgres holds today. */
  from: string;
  /** What repairing ONLY what the checker reports would give. */
  half: string;
  /** The house value this build writes. */
  to: string;
  /** `from` carries a nasal the checker cannot see. */
  blind: boolean;
  /** The minimal repair is clean and still not the house value. */
  house: boolean;
  why: string;
};

export const RESPELL_REPAIRS: readonly RespellRepair[] = [
  {
    id: 'fr.a2.communaute.050',
    fr: 'connaître',
    from: 'kon-NETR',
    half: 'kon-NETR',
    to: 'koh-NEHTR',
    blind: false,
    house: true,
    why: "NOT A NASAL REPAIR, and the brief implies it is. `connaître` carries `nn`, so hasPlainNasalFor takes the doubled-consonant branch and correctly declines to flag it: there is no nasal vowel in /kɔ.nɛtʁ/. `half` is therefore identical to `from` — the checker reports nothing to repair. The divergence is the vowel: two published rows and the verbes-essentiels canonical entry all hold koh-NEHTR, and this is the odd one out of three.",
  },
  {
    id: 'fr.a1.famille.094',
    fr: 'inviter',
    from: 'an-vee-TAY',
    half: 'aⁿ-vee-TAY',
    to: 'aⁿ-vee-TAY',
    blind: false,
    house: false,
    why: 'The straightforward case, and the one the brief names. `an` ends a hyphen-delimited token with the vowel directly against the n, so the checker sees it. The minimal repair IS the house value, which is why blind and house are both false.',
  },
  {
    id: 'fr.a1.evenements-familiaux.058',
    fr: 'inviter',
    from: 'an-vee-TAY',
    half: 'aⁿ-vee-TAY',
    to: 'aⁿ-vee-TAY',
    blind: false,
    house: false,
    why: 'Same row shape in a second theme. Repaired because the flashcard hub serves the headword across themes and two spellings of one word is the defect the brief names.',
  },
  {
    id: 'fr.a1.les-fetes.083',
    fr: 'inviter',
    from: 'an-vee-TAY',
    half: 'aⁿ-vee-TAY',
    to: 'aⁿ-vee-TAY',
    blind: false,
    house: false,
    why: 'Third of the four bare-headword rows carrying an-vee-TAY.',
  },
  {
    id: 'fr.a2.communaute.054',
    fr: 'inviter',
    from: 'an-vee-TAY',
    half: 'aⁿ-vee-TAY',
    to: 'aⁿ-vee-TAY',
    blind: false,
    house: false,
    why: 'Fourth. Same theme as the connaître repair above, and a different word and a different reason.',
  },
  {
    id: 'fr.a1.rp-famille.048',
    fr: 'inviter',
    from: 'ehn-vee-TAY',
    half: 'ehⁿ-vee-TAY',
    to: 'aⁿ-vee-TAY',
    blind: false,
    house: true,
    why: 'THE THIRD VARIANT, WHICH THE BRIEF DOES NOT MENTION. Flagged, so it is visible, but the minimal repair gives ehⁿ and the other five rows say aⁿ. This is §14.1\'s `bien` shape exactly: the minimal repair is clean and is still not the house value, and a guard using one boolean for both reasons would have conflated it with the four rows above.',
  },
  {
    id: 'fr.a1.cuisine.041',
    fr: 'manger',
    from: 'mahn-ZHAY',
    half: 'mahⁿ-ZHAY',
    to: 'mahⁿ-ZHAY',
    blind: false,
    house: false,
    why: 'NOT NAMED BY THE BRIEF AT ALL, and it is a 2-2 split rather than a lone outlier: fr.a1.routines.185 and fr.sons.muettes.037 already hold mahⁿ-ZHAY. This build imports manger, so the split is inside its own import list.',
  },
  {
    id: 'fr.a1.rp-repas.013',
    fr: 'manger',
    from: 'mahn-ZHAY',
    half: 'mahⁿ-ZHAY',
    to: 'mahⁿ-ZHAY',
    blind: false,
    house: false,
    why: 'The second half of the manger split.',
  },
];

/** DELIBERATELY LEFT ALONE, with the reason, because invariants §9 says a
 *  variant is not a violation and only what breaks a STATED rule gets repaired.
 *  Reported rather than silently skipped. */
export const RESPELL_LEFT_ALONE: readonly { fr: string; variants: string; why: string }[] = [
  {
    fr: 'acheter',
    variants: 'ahsh-TAY (4 rows) · ash-TAY (2 rows)',
    why: 'Not a nasal and not a house rule. Both are clean through the real function and the difference is whether the schwa is written, which this project has never settled and which invariants §9 lists among the known competing variants. Repairing it here would be one build inventing a convention for the whole corpus.',
  },
  {
    fr: 'inviter, inside a phrase',
    variants: 'lan-vee-TAY (2) · uh-nan-vee-TAY (2) · lay zan-vee-TAY (1) · lan-vee-ta-SYOHN',
    why: "Flagged and wrong, and OUT OF SCOPE. These are phrase rows in themes this lesson does not touch, and the defect the brief names is the flashcard hub serving one HEADWORD two ways. a2.15's precedent: repair what you import, record what you did not. Recorded here so the next build in these themes has the list.",
  },
  {
    fr: 'aime, inside a phrase',
    variants: 'nehm (fr.a2.au-restaurant.062) · EHM (fr.sons.questions.054)',
    why: 'Both FLAGGED by the real function and both pre-existing in themes this lesson does not touch. Named because this build authors « Je l\'aime. » and had to pick a value: sons.07, which owns elision, ships ZHEM at fr.sons.elision.001, so the house form for /ɛm/ after an elided l is EM and this lesson follows the lesson that owns the rule rather than the two flagged phrase rows.',
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
 *  §9. THE IMPORTED HEADWORDS
 * ══════════════════════════════════════════════════════════════════════════ */

/** Corrections §2, holding for the EIGHTH build running: NOT ONE INFINITIVE IS
 *  AUTHORED. Every verb this lesson leans on already exists, several times over.
 *
 *  Chosen by the §2 rule — a row with a respelling and NO `gender`, which keeps
 *  a1.03's measured ending population still. All seven are `kind: 'word'` with
 *  `gender` NULL, so none of them can move `a1-03-genre.test.ts`. */
export const IMPORTED: readonly { id: string; fr: string; why: string }[] = [
  { id: 'fr.sons.verbes-essentiels.011', fr: 'voir', why: 'The frame verb. The only published row for it, VWAR, and clean.' },
  { id: 'fr.sons.verbes-essentiels.024', fr: 'regarder', why: 'The second frame. Three rows, all ruh-gar-DAY, no divergence.' },
  { id: 'fr.sons.verbes-essentiels.016', fr: 'aimer', why: 'Carries the elision trap. Three rows, all eh-MAY.' },
  { id: 'fr.sons.verbes-essentiels.048', fr: 'connaître', why: 'The house value koh-NEHTR, and the repair target for fr.a2.communaute.050.' },
  { id: 'fr.a2.courses.020', fr: 'acheter', why: 'The a2 row. Not in verbes-essentiels; ahsh-TAY, the majority form.' },
  { id: 'fr.a1.routines.185', fr: 'manger', why: 'Chosen over fr.a1.cuisine.041 BECAUSE it already holds the correct mahⁿ-ZHAY. The cuisine and rp-repas rows are repaired to match it rather than it being brought down to them.' },
  { id: 'fr.a1.amis.019', fr: 'inviter', why: 'The ONE inviter row that already holds aⁿ-vee-TAY. Same reasoning: import the correct one, repair the five that are wrong.' },
];

/** Published sentences imported as corroboration: written for another lesson,
 *  by somebody not teaching this, and carrying the construction anyway. The
 *  strongest evidence a rule is real rather than a courseware invention.
 *  Corrections §10: none of these is in the seed cut and the merge carries them. */
export const IMPORTED_SENTENCES: readonly { id: string; why: string }[] = [
  { id: 'fr.a1.pronoms-essentiels.096', why: '« Je le vois chaque semaine. » Published, in this lesson\'s own theme, and the pronoun is in front of the verb. Nobody wrote it to prove that.' },
  { id: 'fr.a1.pronoms-essentiels.087', why: '« Je la vois tous les jours. » The feminine, same shape, same theme.' },
];

/* ═══════════════════════════════════════════════════════════════════════════
 *  §10. THE AUTHORED ROWS
 * ══════════════════════════════════════════════════════════════════════════ */

export type Bucket =
  | 'pair' | 'paradigm' | 'elision' | 'negative' | 'unseen' | 'past' | 'talk';

export type Row = Item & {
  bucket: Bucket;
  /** The pronoun the row carries, or null where it deliberately carries none
   *  (the article halves of the contrast pairs). Read by the guards rather than
   *  re-parsed out of `fr`, which is corrections §14.3 territory: a boundary
   *  built on the house pattern cannot see `l'`. */
  pro: 'le' | 'la' | 'les' | "l'" | null;
};

/* DECLARED IN `DRILL_KINDS` ORDER, WHICH IS NOT COSMETIC. The batch writes
 * `it.drills` to Postgres verbatim and the merge writes `drillOrder(it.drills)`
 * to the seed, so the two copies agree ONLY IF the array is already sorted.
 * a2.22 declared its arrays in another order and diverged on all 31 of its rows,
 * healed only when a later publish regenerated the seed from the database. */
const S: Item['drills'] = ['flashcard', 'voiceflash', 'sentence', 'review'];
const SD: Item['drills'] = ['flashcard', 'voiceflash', 'dictation', 'sentence', 'review'];
const SR: Item['drills'] = ['sentence', 'roleplay', 'review'];
/** RECEPTIVE ONLY. The agreement rows a learner must read and never be asked to
 *  say, because the ending is inaudible and a speak drill would score noise. */
const RO: Item['drills'] = ['sentence', 'review'];

const T = ['a2', 'pronoun', 'position', 'present'];
const TP = ['a2', 'pronoun', 'position', 'passe-compose'];

const R = (
  n: number,
  fr: string,
  en: string,
  ipa: string,
  respell: string,
  bucket: Bucket,
  pro: Row['pro'],
  drills: Item['drills'],
  notes: string,
  extraTags: string[] = [],
): Row => ({
  id: A(n),
  kind: 'sentence',
  level: 'a2',
  theme: THEME,
  fr,
  en,
  ipa,
  respell,
  tags: [...(bucket === 'past' ? TP : T), ...extraTags],
  drills,
  audioRef: null,
  version: 1,
  notes,
  bucket,
  pro,
});

export const ROWS: readonly Row[] = [
  /* ── The contrast pairs. REQUIRED LAYOUT 2: the article above the pronoun,
   *    and the pair is authored as two rows so a card can show both without
   *    either of them being a string typed into the lesson file. ─────────── */
  R(189, 'Je vois le film.', 'I see the film.', '/ʒə vwa lə film/', 'zhuh vwah luh FEELM',
    'pair', null, S, 'The article half. le leans on a noun and sits after the verb, which is where English puts it too.'),
  R(190, 'Je le vois.', 'I see it.', '/ʒə lə vwa/', 'zhuh luh VWAH',
    'pair', 'le', SD, 'THE FRAME. Eight letters, so the dictée takes it in LETTERS mode, which is the only mode that can test a position.'),
  R(191, 'Je regarde la photo.', 'I look at the photo.', '/ʒə ʁə.ɡaʁd la fɔ.to/', 'zhuh ruh-GARD lah foh-TOH',
    'pair', null, S, 'The feminine article half. la photo is feminine and the card shows the noun, so the gender is derivable rather than remembered.'),
  R(192, 'Je la regarde.', 'I look at it.', '/ʒə la ʁə.ɡaʁd/', 'zhuh lah ruh-GARD',
    'pair', 'la', SD, 'The pronoun half. Same verb, same meaning, and the word has moved to the other side of it.'),
  R(193, "J'achète les livres.", 'I buy the books.', '/ʒa.ʃɛt le livʁ/', 'zhah-SHEHT lay LEEVR',
    'pair', null, S, 'The plural article half.'),
  R(194, 'Je les achète.', 'I buy them.', '/ʒə le za.ʃɛt/', 'zhuh lay zah-SHEHT',
    'pair', 'les', SD, 'The plural pronoun half, and the s of les is heard here because a vowel follows it.'),
  R(195, 'Je connais Marie.', 'I know Marie.', '/ʒə kɔ.nɛ ma.ʁi/', 'zhuh koh-NEH mah-REE',
    'pair', null, S, 'A person rather than a thing, so the learner cannot read the rule as being about objects in the everyday sense.'),
  R(196, 'Je la connais.', 'I know her.', '/ʒə la kɔ.nɛ/', 'zhuh lah koh-NEH',
    'pair', 'la', SD, 'And la covers a person as readily as a thing. English changes word here, from "Marie" to "her"; French does not.'),

  /* ── The paradigm. Three forms, and then the same three across the persons,
   *    because the pronoun is the one word in the sentence that does NOT change
   *    with the subject and a learner has just spent a2.22 believing it does.  */
  R(197, 'Tu le connais.', 'You know him.', '/ty lə kɔ.nɛ/', 'tü luh koh-NEH',
    'paradigm', 'le', SD, 'Masculine, a person. The probe found this exact frame zero times in 27,999 published sentences.'),
  R(198, 'Tu la connais.', 'You know her.', '/ty la kɔ.nɛ/', 'tü lah koh-NEH',
    'paradigm', 'la', SD, 'Feminine. One letter apart from the row above and one sound apart, which is what makes the pair askable by ear.'),
  R(199, 'Tu les connais.', 'You know them.', '/ty le kɔ.nɛ/', 'tü lay koh-NEH',
    'paradigm', 'les', SD, 'Plural, and the gender is not consulted. a1.04 taught that about the article and it is true of the pronoun for the same reason.'),
  R(200, 'Je les vois.', 'I see them.', '/ʒə le vwa/', 'zhuh lay VWAH',
    'paradigm', 'les', SD, 'Nine letters. The third cell of the frame, and the probe found it zero times.'),
  R(201, 'Je la vois.', 'I see her.', '/ʒə la vwa/', 'zhuh lah VWAH',
    'paradigm', 'la', SD, 'The second cell. fr.a1.pronoms-essentiels.087 holds « Je la vois tous les jours. », which is this frame inside a longer sentence.'),
  R(202, 'Il le regarde.', 'He looks at him.', '/il lə ʁə.ɡaʁd/', 'eel luh ruh-GARD',
    'paradigm', 'le', S, 'Third person subject, and the pronoun is unchanged. Two le-shaped words in a row and only the second one is the verb\'s.'),
  R(203, 'Elle la connaît.', 'She knows her.', '/ɛl la kɔ.nɛ/', 'ehl lah koh-NEH',
    'paradigm', 'la', S, 'Feminine subject and feminine pronoun, and they have nothing to do with each other. The pronoun takes the gender of the noun it stands for.'),
  R(204, 'Nous les invitons.', 'We invite them.', '/nu le zɛ̃.vi.tɔ̃/', 'noo lay zaⁿ-vee-TOHⁿ',
    'paradigm', 'les', SD, 'Fifteen letters, inside the dictée limit. The liaison on les is audible before the vowel of invitons.'),
  R(205, 'Vous le voyez.', 'You see it.', '/vu lə vwa.je/', 'voo luh vwah-YAY',
    'paradigm', 'le', S, 'The vous cell. Nothing about the pronoun responds to the subject changing.'),
  R(206, 'Ils les achètent.', 'They buy them.', '/il le za.ʃɛt/', 'eel lay zah-SHEHT',
    'paradigm', 'les', S, 'The ils cell, and the verb ending is silent, which a2.01 owns and this lesson does not re-teach.'),

  /* ── Elision. THE TRAP THE LESSON CANNOT TEST BY EAR. ────────────────── */
  R(207, "Je l'aime.", 'I love him. Or her.', '/ʒə lɛm/', 'zhuh LEM',
    'elision', "l'", SD, "THE TRAP. Seven letters. The gloss carries both readings because the sentence does: nothing in it says which. Respelled LEM after sons.07's own ZHEM at fr.sons.elision.001, not LEHM, which the real hasPlainNasal flags.",
    ['elision']),
  R(208, "Je l'invite.", 'I invite him.', '/ʒə lɛ̃.vit/', 'zhuh laⁿ-VEET',
    'elision', "l'", SD, 'A second elided verb, so the learner does not read the rule as a fact about aimer.', ['elision']),
  R(209, "Je l'achète.", 'I buy it.', '/ʒə la.ʃɛt/', 'zhuh lah-SHEHT',
    'elision', "l'", SD, 'And a third, on a verb whose own vowel is the one causing the elision.', ['elision']),
  R(210, "Tu l'aimes.", 'You love her. Or him.', '/ty lɛm/', 'tü LEM',
    'elision', "l'", S, 'The same ambiguity in another person, so it is visibly a property of the form rather than of one sentence.', ['elision']),
  R(211, 'Je les invite.', 'I invite them.', '/ʒə le zɛ̃.vit/', 'zhuh lay zaⁿ-VEET',
    'elision', 'les', SD, 'The one that does NOT elide. les keeps its shape in front of a vowel and adds a z sound instead, so the plural survives where the singulars lose their gender.', ['elision']),

  /* ── Negation. The cluster rule, extending a1.18 and a2.19. ──────────── */
  R(212, 'Je ne le vois pas.', 'I do not see it.', '/ʒə nə lə vwa pa/', 'zhuh nuh luh vwah PAH',
    'negative', 'le', SD, 'THIRTEEN LETTERS, so the dictée takes it. The probe found this exact sentence zero times published. ne outside, pronoun and verb inside.',
    ['negation']),
  R(213, 'Je ne la connais pas.', 'I do not know her.', '/ʒə nə la kɔ.nɛ pa/', 'zhuh nuh lah koh-neh PAH',
    'negative', 'la', SD, 'Sixteen letters, exactly at the dictée limit and still in LETTERS mode. Verified through the real dicteeMode.', ['negation']),
  R(214, 'Je ne les achète pas.', 'I do not buy them.', '/ʒə nə le za.ʃɛt pa/', 'zhuh nuh lay zah-sheht PAH',
    'negative', 'les', SD, 'Sixteen letters. The plural inside the wrap.', ['negation']),
  R(215, 'Tu ne le regardes pas.', 'You do not look at it.', '/ty nə lə ʁə.ɡaʁd pa/', 'tü nuh luh ruh-gard PAH',
    'negative', 'le', S, 'SEVENTEEN LETTERS, so dicteeMode puts it in WORD mode and it carries NO dictation drill. Word mode hands every word over pre-spelled and would give the position away, which is the one thing this lesson tests.',
    ['negation']),
  R(216, "Je ne l'aime pas.", 'I do not love him.', '/ʒə nə lɛm pa/', 'zhuh nuh lem PAH',
    'negative', "l'", SD, 'The elided form inside the wrap. Twelve letters.', ['negation', 'elision']),
  R(217, 'Nous ne les invitons pas.', 'We do not invite them.', '/nu nə le zɛ̃.vi.tɔ̃ pa/', 'noo nuh lay zaⁿ-vee-tohⁿ PAH',
    'negative', 'les', S, 'Twenty letters, word mode, no dictation drill. Kept for the reading and the speak list, where length is not a problem.',
    ['negation']),

  /* ── Verbs the lesson never conjugated. Doctrine §B.1: an A2 learner leaves
   *    able to say things the lesson never said. These four verbs belong to
   *    a2.15, a2.10 and a1.25 and the rule is applied to them cold. ─────── */
  R(218, "Je l'écoute.", 'I listen to it.', '/ʒə le.kut/', 'zhuh lay-KOOT',
    'unseen', "l'", S, 'écouter is not taught here and not imported as a headword. The learner has it from a1.25 and the position rule runs on it unchanged.',
    ['unseen']),
  R(219, 'Tu les cherches.', 'You are looking for them.', '/ty le ʃɛʁʃ/', 'tü lay SHEHRSH',
    'unseen', 'les', S, 'chercher, and the English needs a preposition where the French does not. Worth meeting once inside a sentence whose shape is already familiar.',
    ['unseen']),
  R(220, 'Elle le prend.', 'She takes it.', '/ɛl lə pʁɑ̃/', 'ehl luh PRAHⁿ',
    'unseen', 'le', S, "prendre is a2.15's, cell for cell, and nothing about carrying a pronoun is different for an irregular verb.",
    ['unseen']),
  R(221, 'Nous la finissons.', 'We finish it.', '/nu la fi.ni.sɔ̃/', 'noo lah fee-nee-SOHⁿ',
    'unseen', 'la', S, "finir is a2.10's, and its -iss- is a2.10's business and not this lesson's. The pronoun sits where it always sits.",
    ['unseen']),

  /* ── ACT 5. The past, and the ending. §6. ───────────────────────────── */
  R(222, "J'ai vu le film.", 'I saw the film.', '/ʒe vy lə film/', 'zhay vü luh FEELM',
    'past', null, S, 'The noun after the verb, so nothing happens to the second word. This is the baseline the agreement is measured against and it is a2.05\'s sentence, not a new one.'),
  R(223, "Je l'ai vu.", 'I saw it.', '/ʒə le vy/', 'zhuh lay VÜ',
    'past', "l'", SD, 'THE POSITION FACT, in the past: the pronoun goes in front of the FIRST word, not between the two. Seven letters. Masculine, so the ending is invisible and the pair below is what makes it visible.'),
  R(224, "J'ai vu la photo.", 'I saw the photo.', '/ʒe vy la fɔ.to/', 'zhay vü lah foh-TOH',
    'past', null, S, 'The feminine noun, still after the verb, still no ending.'),
  R(225, "Je l'ai vue.", 'I saw it.', '/ʒə le vy/', 'zhuh lay VÜ',
    'past', "l'", SD, 'THE AGREEMENT. Same respelling as fr.a2.pronoms-essentiels.223 and the same IPA, deliberately: the two rows are one sound and the e is the only difference. Eight letters.'),
  R(226, "J'ai acheté les livres.", 'I bought the books.', '/ʒe a.ʃə.te le livʁ/', 'zhay ahsh-TAY lay LEEVR',
    'past', null, S, 'Plural noun after the verb, no ending.'),
  R(227, 'Je les ai achetés.', 'I bought them.', '/ʒə le ze a.ʃə.te/', 'zhuh lay zay ahsh-TAY',
    'past', 'les', SD, 'Plural masculine before the verb, so the s goes on. Fourteen letters. RECEPTIVE-ONLY companions aside, this one is typed in the quiz because fold() keeps a final s.'),
  R(228, "J'ai regardé les photos.", 'I looked at the photos.', '/ʒe ʁə.ɡaʁ.de le fɔ.to/', 'zhay ruh-gar-DAY lay foh-TOH',
    'past', null, S, 'Feminine plural noun, after the verb, no ending. The fourth and last baseline.'),
  R(229, 'Je les ai regardées.', 'I looked at them.', '/ʒə le ze ʁə.ɡaʁ.de/', 'zhuh lay zay ruh-gar-DAY',
    'past', 'les', RO, 'Feminine plural before the verb: two letters go on and neither is heard. RECEPTIVE ONLY, so no flashcard, no voiceflash and no dictation. A speak drill on this row would score a sound that carries none of the information.'),

  /* ── The conversation. Every turn answers a question about a person or a
   *    thing, which is the only situation this whole lesson is for. ──────── */
  R(230, 'Oui, je la connais bien.', 'Yes, I know her well.', '/wi ʒə la kɔ.nɛ bjɛ̃/', 'wee, zhuh lah koh-neh BYEHⁿ',
    'talk', 'la', SR, 'Role play turn 1. The answer to a question about a person, which is where an English speaker reaches for "her" and puts it last.'),
  R(231, 'Non, je ne le connais pas.', 'No, I do not know him.', '/nɔ̃ ʒə nə lə kɔ.nɛ pa/', 'nohⁿ, zhuh nuh luh koh-neh PAH',
    'talk', 'le', SR, 'Turn 2, the negative, on a verb the paradigm carried.', ['negation']),
  R(232, 'Je les invite ce soir.', 'I am inviting them tonight.', '/ʒə le zɛ̃.vit sə swaʁ/', 'zhuh lay zaⁿ-VEET suh SWAR',
    'talk', 'les', SR, 'Turn 3. The plural, with something after the verb that is not the object, so the pronoun is visibly not just "the word before the full stop".'),
  R(233, "Je l'ai vu hier.", 'I saw him yesterday.', '/ʒə le vy jɛʁ/', 'zhuh lay vü YEHR',
    'talk', "l'", SR, 'Turn 4, and the past. The pronoun in front of the first word, in a sentence somebody would actually say.'),
  R(234, "Je ne les ai pas vues.", 'I did not see them.', '/ʒə nə le ze pa vy/', 'zhuh nuh lay zay pah VÜ',
    'talk', 'les', SR, 'Turn 5. The wrap and the agreement in one sentence: ne and pas go round the pronoun and the first word, and the ending goes on the second. Both rules, neither of them new by this point.',
    ['negation']),
  R(235, 'Tu la connais aussi ?', 'Do you know her too?', '/ty la kɔ.nɛ o.si/', 'tü lah koh-NEH oh-SEE',
    'talk', 'la', SR, 'Turn 6, and the learner asks rather than answers. a1.19 owns the rising question and this borrows it without teaching it.'),
  R(236, 'Je le prends.', 'I will take it.', '/ʒə lə pʁɑ̃/', 'zhuh luh PRAHⁿ',
    'talk', 'le', SR, 'Turn 7. Ten letters, and the present tense used for a decision made on the spot, which is what French does here and English does with "will".'),
];

/** Sanity, enforced in the batch rather than trusted: the ids are exactly the
 *  claimed block, in order, with no gaps and no strays. */
export const AUTHORED_IDS: readonly string[] = ROWS.map((r) => r.id);

/* ═══════════════════════════════════════════════════════════════════════════
 *  §11. THE SCENE
 * ══════════════════════════════════════════════════════════════════════════ */

/** Doctrine §B.2: an A2 scene opens on somebody who started a sentence they
 *  could not finish. Nobody is rude, nobody is corrected, nothing is
 *  mispronounced. The learner runs out of sentence in public.
 *
 *  The brief asks for someone answering a question about a person or a thing,
 *  who reaches for the pronoun, puts it where English puts it, and hears the
 *  sentence come out wrong enough that they stop.
 *
 *  The error is « Je connais la. » It is chosen over « Je connais elle. »
 *  because the brief predicts « je vois le » specifically, and because the
 *  learner arriving here has a1.04's four forms and no reason not to reach for
 *  one of them. The sentence is not merely wrong, it STOPS — la with nothing
 *  after it is a sentence that has run out, which is exactly §B.2's register. */
export const SCENE_QUESTION = 'Tu connais Camille ?';
export const SCENE_QUESTION_EN = 'Do you know Camille?';
export const SCENE_ERROR = 'Oui, je connais… la ?';
export const SCENE_ERROR_EN = 'Yes, I know… her?';
export const SCENE_RIGHT = 'Oui, je la connais.';
export const SCENE_RIGHT_EN = 'Yes, I know her.';
export const SCENE_WAIT = 'Tu la connais d\'où ?';
export const SCENE_WAIT_EN = 'Where do you know her from?';

/** Break body budget, 24 to 40 words. Counted in the batch. */
export const BREAK_BODY =
  'Every word there was one you know, and they arrived in the order English hands them to you. French had already passed the place that word goes, and by the time you reached for it the slot was gone.';

/* ═══════════════════════════════════════════════════════════════════════════
 *  §12. THE EXPECTED SHAPE
 *
 *  Invariants §5: assert against EXPLICIT constants, never figures derived from
 *  the lesson, because a derived count compares the content to itself and passes
 *  on any rewording. Every one of these is checked by the batch, the merge and
 *  the test.
 * ══════════════════════════════════════════════════════════════════════════ */

export const EXPECTED_AUTHORED = 48;
export const EXPECTED_IMPORTED = 9;
export const EXPECTED_SECTIONS = 24;
export const EXPECTED_ACTS = 6;
export const EXPECTED_QUESTIONS = 30;

/** Doctrine §B.5: if the paradigm gets more missions than the Owns, the wrong
 *  lesson was built. Counted as SECTIONS BY SUBJECT rather than by act, because
 *  the Owns starts in act 1 (the two orders) and finishes in act 5 (the same
 *  position in the past), and an act-level count would miss both ends. */
export const OWNS_SECTION_COUNT = 7;
export const PARADIGM_SECTION_COUNT = 3;

/** `dicteeMode` switches to WORD tiles above this, and word mode hands every
 *  real word over pre-spelled. A lesson about a POSITION can only be tested in
 *  LETTERS mode, so this is a hard limit rather than a preference. */
export const DICTEE_MAX_LETTERS = 16;

/** THE TITLE THAT SHIPPED CLIPPED AT v2, kept by name so the repair cannot be
 *  quietly reverted and so the width model has a case from THIS lesson.
 *  Measured on a Pixel 6: it drew as « The Word With Nowhere To … ». */
export const CLIPPED_AT_V2 = 'The Word With Nowhere To Go';

/** Is this id inside the claimed block? */
export const isMine = (id: string): boolean => {
  const m = /^fr\.a2\.pronoms-essentiels\.(\d{3})$/u.exec(id);
  if (!m) return false;
  const n = Number(m[1]);
  return n >= ID_FIRST && n <= ID_LAST;
};

/* ═══════════════════════════════════════════════════════════════════════════
 *  §13. WHAT COULD NOT BE TESTED
 * ══════════════════════════════════════════════════════════════════════════ */

/** Corrections §5 asks for this by name and a2.09's section is the model.
 *  Reported rather than discovered later. */
export const UNTESTABLE: readonly { wanted: string; why: string }[] = [
  {
    wanted: 'A typed question asking whether the elided form in « Je l\'aime. » is masculine or feminine.',
    why: 'IT HAS NO ANSWER, in any format. This is not a fold() limitation, it is the language: the sentence carries no gender. It is a card rather than a question, and HOMOPHONE_FORMS keeps any ear item away from it.',
  },
  {
    wanted: 'An ear question separating « Je l\'ai vu. » from « Je l\'ai vue. »',
    why: 'One sound, both of them. §7. The ending is testable ONLY in writing, which is why the agreement act ends at the dictée and a typeIn rather than at a listenChoose.',
  },
  {
    wanted: 'A typed question on the apostrophe in l\'.',
    why: 'fold() strips punctuation and all whitespace, so « je laime », « je l\'aime » and « jel aime » are one answer. Corrections §5. The elision is taught as recognition and sons.07 owns it anyway.',
  },
  {
    wanted: 'A typed question turning on the accent in achète or the circumflex in connaître.',
    why: 'fold() normalises to NFD and strips every combining mark. Not central here, which is unusually kind: no rule in this lesson is carried by a diacritic.',
  },
  {
    wanted: 'A typed question on the capital in « Marie » against the pronoun that replaces her.',
    why: 'fold() cannot test a capital letter. Both the a1.08 and a1.09 briefs recommended errorSpot for a capital and both were wrong. Only mcq can, and the question was not worth an mcq slot.',
  },
];
