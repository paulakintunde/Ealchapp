

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
const Cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
import { unitRef } from './_unit-ref.ts';// The a2.21 corpus: what this lesson authors, what it imports, the two repairs
// it makes, and the eight measurements that decided its shape.
//
// THIS FILE IS THE SINGLE SOURCE OF TRUTH for every `fr`, `ipa`, `respell` and
// `en` a2.21 puts on a screen. The lesson body (passe-compose-etre-lesson.ts)
// reads them FROM HERE and never restates them.
//
// ══════════════════════════════════════════════════════════════════════════
//  1. THE CORPUS SPLIT IS SETTLED AND THIS BUILD INHERITS IT WITHOUT REOPENING
// ══════════════════════════════════════════════════════════════════════════
//
// a2.05 settled doctrine §E on 2026-08-14 and a2.20 agreed it a day later:
//
//     ZERO ROWS ON BOTH SIDES. A past form is a conjugated form, and a2.01
//     already ruled that a conjugated form is never a corpus item. Only
//     infinitives and full sentences.
//
// Two authors agreeing is a decision; three is a level-wide rule. This build
// authors FORTY-SIX SENTENCES AND NOT ONE BARE FORM, and the manifest re-runs
// the measurement over this lesson's own agreed forms rather than over either
// neighbour's list. See PARTICIPLE_DECISION.
//
// The one thing worth adding: the AGREED forms are further from being corpus
// items than the bare ones were. `allée`, `parties`, `venues` and `mortes` are
// not words in their own right in any useful sense, and the manifest asserts
// that none of the fifty-six agreed cells exists as a headword anywhere.
//
// ══════════════════════════════════════════════════════════════════════════
//  2. THE BRIEF SAYS THE MNEMONIC IS IN THE `sub`. THE `sub` HAS NO MNEMONIC.
// ══════════════════════════════════════════════════════════════════════════
//
// « DR MRS VANDERTRAMP is a crutch, and say so. The mnemonic is in the sub so
// it ships. »  Measured against `content_units` on 2026-08-14:
//
//     title  The Passé Composé with Être
//     sub    Le passé composé avec être
//     canDo  Can pick être as the auxiliary where French requires it and agree
//            the participle
//
// Nothing in the identity block names a mnemonic. **This is corrections §1 for
// the THIRD consecutive lesson**: a2.05's brief said "the sub says sixty",
// a2.20's said forty, and both figures came from a `sub` that exists nowhere in
// the database. Here it is not a number but an obligation, and the obligation is
// not real.
//
// So the mnemonic is a CHOICE rather than a promise, and it is made for one
// screen only, on the terms the brief itself sets: it is taught as a crutch, the
// real pattern is taught beside it, and the lesson names the two verbs it does
// not cover. See MNEMONIC and MNEMONIC_MISSES.
//
// ══════════════════════════════════════════════════════════════════════════
//  3. FIFTEEN VERBS, FOUR FAMILIES, AND TWELVE OF THE FIFTEEN MOVE
// ══════════════════════════════════════════════════════════════════════════
//
// The brief asks for the real pattern rather than the mnemonic's letters, and
// gives it as "coming, going, arriving, leaving, rising, falling, being born and
// dying. Movement and change of state." Checked against the fifteen and it
// holds, with one wrinkle worth a card:
//
//     going and coming   5   aller · venir · arriver · partir · passer
//     in and out         4   entrer · sortir · rentrer · retourner
//     up and down        3   monter · descendre · tomber
//     and the three
//     that do not move   3   rester · naître · mourir
//
// TWELVE MOVE AND THREE DO NOT, and `rester` is not a change of state either: it
// is the absence of both. It is the one a learner will forget, and saying so is
// worth more than pretending the pattern is clean. See FAMILIES and REST_CLAIM.
//
// ══════════════════════════════════════════════════════════════════════════
//  4. THE PARADIGM IS ALREADY PUBLISHED, AS A GRID, AND IT IS STILL AUTHORED
// ══════════════════════════════════════════════════════════════════════════
//
// Corrections §3 predicts that the corpus holds the forms and no minimal pairs.
// **Half of that is false here and it is the more surprising half.**
// `fr.a1.rp-recits-temps` is 487 published rows and 91 of them put être in front
// of one of these sixty cells, laid out as a deliberate person walk: je, tu, il,
// elle, nous and a plural subject, each with the same time adverbials, across
// nine of these fifteen verbs. Corpus-wide the figure is 466. Every one of the
// four cells of `aller` is published with être in front of it.
//
//     allé 19 · allée 11 · allés 23 · allées 1        with être, published
//     parti 17 · partie 11 · partis 24 · parties 2
//     arrivé 39 · arrivée 29 · arrivés 42 · arrivées 6
//
// AND NOT ONE OF THE 205 CARRIES A RESPELLING. a2.13 §1: evidence is not cards,
// and a bare sentence reaches a card the learner cannot say. FOUR of the 466 are
// a1/a2 rows with a respelling, and not one of the four shows an ending: two are
// the idioms « c'est mort » and « c'est parti », which contain no past tense at
// all, and two are a2.20's own venu and né rows, which are masculine singular
// deliberately so this lesson could introduce agreement against a clean
// background. The other half of corrections §3 holds exactly: the 466 are
// sentences written for their own themes, each with its own subject and
// complement, so no two of them differ by one thing. The four cells of one verb, side by side, with everything else
// held still, do not exist and had to be written.
//
// ══════════════════════════════════════════════════════════════════════════
//  5. WHAT THIS APP CAN AND CANNOT TEST, MEASURED THROUGH THE REAL FUNCTIONS
// ══════════════════════════════════════════════════════════════════════════
//
// **AGREEMENT IS TYPEABLE, AND IT IS THE ONLY THING IN THIS BAND THAT IS.**
// `fold()` strips accents, case, punctuation and whitespace and KEEPS a final
// -e and -s, so all four cells are distinct to a typed surface:
//
//     allé / allée / allés / allées      six pairs, six DIFFER under fold
//     Elle est allée.  vs  Elle est allé.            DIFFER
//     Ils sont partis. vs  Ils sont parti.           DIFFER
//
// That is why `typeIn` is the format of this lesson's Owns and why the exam is
// mostly typed. a2.09 lost its best production question to `fold`; this lesson
// gets one back.
//
// **AND NO EAR QUESTION MAY SEPARATE TWO CELLS.** For fourteen of the fifteen
// verbs all four cells are one sound. `NO_EAR_QUESTION` holds every such pair
// and all three layers walk it, because a `listenChoose` offering two members of
// one homophone group has no correct answer and marking one right certifies a
// bug (corrections §5).
//
// **THE EXCEPTION IS mourir AND IT IS THE BEST CARD IN THE LESSON.**
// mort /mɔʁ/ against morte /mɔʁt/ is the ONE feminine of the fifteen you can
// hear, and the corpus already respells both: `fr.sons.adjectifs-essentiels.161`
// holds « mort » [MOR] and `fr.b2.musees.048` holds « la nature morte »
// [lah nah-TÜR MOHRT]. NUMBER is still inaudible even there: morts is /mɔʁ/ and
// mortes is /mɔʁt/.
//
//     gender audible      1 of 15      mourir
//     number audible      0 of 15
//
// That is the exact converse of a2.03's own grammarIntroduced, which records
// that for adjectives "the feminine is phonologically realised in every regular
// class while number is not realised at all". One class of fifteen where it is
// realised once, against a system where it is realised always.
//
// ══════════════════════════════════════════════════════════════════════════
//  6. THE TRANSITIVE SPLIT IS A GROUP OF TWO, NOT A GROUP OF SIX
// ══════════════════════════════════════════════════════════════════════════
//
// The brief says « sortir, monter, descendre, passer, rentrer, retourner all do
// this » and asks for a decision. Measured across every published row on
// 2026-08-14, counting a form of avoir in front of the participle against a form
// of être:
//
//     verb        avoir   être
//     sortir          1     24
//     monter          4      9
//     descendre       0      5
//     passer         45     26
//     rentrer         0     13
//     retourner       0      8
//
// **THREE OF THE SIX HAVE ZERO PUBLISHED TRANSITIVE USES** and a fourth has one.
// The split is real in the language and in this corpus it is `passer`, which is
// forty-five of the fifty rows, and `monter`, which is four. Teaching a named
// group of six with a direct-object test would be teaching a rule against four
// verbs the corpus never uses that way.
//
// `passer` is also not an exotic case: `passer un examen` is published as a
// FAUX-AMI at A1 and again at sons level, and a learner meeting « elle a passé
// un examen » is meeting a lexical item they already have rather than an
// auxiliary decision.
//
// THE DECISION IS THE BRIEF'S SECOND OPTION, and the measurement is why:
// **name that the split exists, show it receptively on the two verbs that
// actually carry it, and leave the rule to B1.** The canDo asks the learner to
// pick être WHERE FRENCH REQUIRES IT, and the transitive uses are precisely
// where French does not. No production surface in this lesson asks for one; a
// guard enforces it. See TRANSITIVE and TRANSITIVE_DECISION.
//
// ══════════════════════════════════════════════════════════════════════════
//  7. a2.11's descendre LOOP CANNOT BE CLOSED BY BACK-REFERENCE, BECAUSE a2.11
//     NEVER OPENED ONE ON A LEARNER SURFACE
// ══════════════════════════════════════════════════════════════════════════
//
// The brief says « a2.11 (seq 4) already flagged descendre as having this split.
// Close that loop » and asks the test to assert it BY BACK-REFERENCE. Measured
// against the shipped `a2.11.l1` body:
//
//     "descendre"   11 occurrences
//     "avoir"        0
//     "être"         0
//     "auxiliary"    0
//     "a2.21"        0
//
// a2.11 teaches `descendre` in the present eleven times and names neither
// auxiliary once. Its BUILD REPORT raised the question and was scrupulous about
// it — « a2.21 has no lesson yet, so this is a note for whoever writes it, not a
// defect » — and corrections §7 had already recorded that the unit-body search
// behind it proves less than it reads. **There is no learner-facing loop to
// close from a2.11's side.**
//
// What this lesson does instead is close it FORWARD, which is assertable: it
// owns `descendre` by topic, it names `a2.11` by unit id on the screen where
// `descendre` appears, and it states the split there. See RE_UNIT and
// DESCENDRE_CREDIT.
//
// ══════════════════════════════════════════════════════════════════════════
//  8. THE RESPELLINGS: TWO REPAIRS, BOTH VISIBLE, AND THE BRIEF'S "INVISIBLE"
//     IS WRONG ABOUT ALL FOUR OF ITS EXAMPLES
// ══════════════════════════════════════════════════════════════════════════
//
// The brief says six respellings are wrong and « four of those the checker
// cannot see », naming `monter mohn-TAY` and `tomber tohn-BAY` as invisible and
// `descendre`, `entrer` and `rentrer` as visible. Corrections §11 carries the
// same list. Measured through the real `hasPlainNasalFor`:
//
//     monter     mohn-TAY          FLAGGED
//     tomber     tohn-BAY          FLAGGED
//     descendre  day-SAHN-druh     FLAGGED
//     entrer     ahn-TRAY          FLAGGED
//     rentrer    rahn-TRAY         FLAGGED
//
// **ALL FIVE ARE VISIBLE.** The blind shape a2.11 measured is a nasal followed by
// a consonant INSIDE a token, as in `PRAHNDR`; in `mohn-TAY` the n ends the
// token `mohn` because a hyphen follows it, so the checker sees it perfectly.
// Corrections §11's list is wrong on four rows and this build's INVISIBLE table
// would have been empty if it had trusted the brief, which is the failure mode
// corrections §6 warns about pointing the other way.
//
// AND THREE OF THE SIX ARE ALREADY REPAIRED, which a2.20 §4 also found:
//
//     entrer     fr.sons.verbes-essentiels.043   ahⁿ-TRAY    house value already
//     rentrer    fr.a2.verbes.016                rahⁿ-TRAY   house value already
//     descendre  fr.a1.transports-quotidiens.045 day-SAHⁿDR  repaired by a2.11
//
// So this build makes **TWO** repairs, `monter` and `tomber`, on the rows it
// displays, and records seven broken copies it does not display. See REPAIRS and
// NOT_REPAIRED.
//
// **THE BLIND SHAPE DOES OCCUR, ONCE, IN AN AUTHORED STRING.** « ensemble » is
// respelled `ahⁿ-SAHⁿBL` and the second nasal is followed by B inside the token,
// so `ahⁿ-SAHNBL` is a wrong value the checker calls clean. It is asserted BY
// NAME and in both directions, so the day the checker improves the assertion
// goes red rather than the list going quietly dead. See BLIND_NASALS.
//
// ══════════════════════════════════════════════════════════════════════════
//  9. THE NEGATIVE ELIDES IN THREE PERSONS AND a2.05's ELIDED IN SIX
// ══════════════════════════════════════════════════════════════════════════
//
// The ledger's a2.05 amendment §2 records that `ne` elides before every form of
// avoir, that this cost a2.05 its pair check, and that a2.21, a2.22 and a2.23
// « will need reduceNegative() ». They do, and the shape is different:
//
//     je ne suis pas       no elision      nous ne sommes pas   no elision
//     tu n'es pas          ELIDES          vous n'êtes pas      ELIDES
//     il n'est pas         ELIDES          ils ne sont pas      no elision
//
// **THREE OF SIX, against a2.05's six of six**, because `suis`, `sommes` and
// `sont` open on a consonant. And unlike a2.05 the elision never touches the
// SUBJECT: « je n'ai » is a2.05's problem and « je ne suis » is not one at all.
// `reduceNegative()` is still needed and it is a plainer function here.
//
// The rule itself is a2.19's, quoted verbatim through two lessons, and the three
// strings are asserted identical. See NEGATION_RULE.
//
// ══════════════════════════════════════════════════════════════════════════

/* ─── IDENTITY ──────────────────────────────────────────────────────────────
 *
 * Read out of `content_units` on 2026-08-14. Corrections §1: never from the
 * brief. This one the brief had right, byte for byte, which is the first time in
 * this band.                                                                  */

export const UNIT = {
  id: 'a2.21',
  seq: 18,
  title: 'The Passé Composé with Être',
  sub: 'Le passé composé avec être',
  canDo: 'Can pick être as the auxiliary where French requires it and agree the participle',
  prereqUnitIds: ['a2.05'],
  /** EMPTY. First build, so the lesson's own version counter starts at 1. */
  lessonIds: [] as string[],
} as const;

export const LESSON_ID = 'a2.21.l1';
export const SHEET_ID = 'sheet-a2-21-etre';

/* ─── THE ID BLOCK ──────────────────────────────────────────────────────────
 *
 * Ledger §10: the maximum id has been useless since a2.10.l2 took .461..500
 * above the whole batch-1 reservation. THE ROW COUNT IS THE ONLY SIGNAL, and it
 * must be `before + exactly what this build applies`.
 *
 * No batch-2 ledger exists; the batch-1 ledger carries the batch-2 blocks as
 * amendments and stops at a2.20's .591..650. This block is claimed here, above
 * it, and the amendment records it.                                           */

/** RE-READ 2026-08-18, as the batch's own guard asks when it fires.
 *
 *  It was 482 when this lesson was authored. `fr.a2.verbes` now holds 602 rows,
 *  of which 46 are this lesson's own block (651..720), so 556 stood in the
 *  theme before it and 74 rows have landed from other builds since. Nothing
 *  about this lesson's block moved; only the count around it did. */
export const ROW_COUNT_BEFORE = 556;
export const ID_BLOCK = { from: 'fr.a2.verbes.651', to: 'fr.a2.verbes.720' } as const;

/** a2.20's, immediately below, 591..650 with 591..633 used. A RESERVATION
 *  ASSERTION MUST NOT SAY "AND IT IS EMPTY" (ledger, a2.20 §0): a2.05's did and
 *  went red the moment a2.20 filled it. This one says no row of a2.21 is inside
 *  it, and every occupant belongs to a2.20. */
export const A220_BLOCK = { from: 'fr.a2.verbes.591', to: 'fr.a2.verbes.650' } as const;
export const A205_BLOCK = { from: 'fr.a2.verbes.541', to: 'fr.a2.verbes.590' } as const;

const idNum = (id: string): number => Number(id.split('.')[3] ?? '-1');
export const isMine = (id: string): boolean =>
  id.startsWith('fr.a2.verbes.') && idNum(id) >= idNum(ID_BLOCK.from) && idNum(id) <= idNum(ID_BLOCK.to);
export const isA220 = (id: string): boolean =>
  id.startsWith('fr.a2.verbes.') && idNum(id) >= idNum(A220_BLOCK.from) && idNum(id) <= idNum(A220_BLOCK.to);
export const isA205 = (id: string): boolean =>
  id.startsWith('fr.a2.verbes.') && idNum(id) >= idNum(A205_BLOCK.from) && idNum(id) <= idNum(A205_BLOCK.to);

export const THEME = 'verbes';

/* ─── THE NEIGHBOURS, BY UNIT ID ────────────────────────────────────────────
 *
 * Doctrine §B.7: from seq 14 onward, name the earlier instance BY UNIT ID.
 * a2.18 §6 and a2.20 §5.4: a guard comparing `namesUnit(text, UNIT_CONST)`
 * renames both sides when the constant moves, so every guard in this build uses
 * a LITERAL and these constants are for the prose only.                        */

/** a2.01, Les verbes en -ER, seq 1. THE BOOKEND. Doctrine §B.7 asks for the
 *  silent-agreement reframe to be stated there and paid off here, seventeen
 *  lessons apart, and it is the strongest structural moment available in A2. */
export const ER_UNIT = 'a2.01';

/** a2.01's reframe, VERBATIM AND IMPORTED rather than retyped, so the two cannot
 *  drift. The brief asks the test to assert the string and says a paraphrase
 *  must go red. Read off the shipped lesson (`a2.01.l1` v8) and confirmed
 *  identical to `verbes-er-terms.ts`. */
export const A201_REFRAME = 'Four of the six forms sound the same, so the pronoun carries the person.';

/** a2.03, L'accord des adjectifs, seq 10. It owns agreement and this lesson
 *  borrows the rule rather than re-teaching it. Its own reframe, read off
 *  `a2.03.l1` v4. */
export const ADJ_UNIT = 'a2.03';
export const A203_REFRAME = 'The plain form tells you the other three.';

/** a2.05, Le passé composé avec avoir, seq 16. The prerequisite, and the other
 *  side of the contrast: it taught that the participle NEVER agrees after avoir
 *  and this lesson is where it does. */
export const PASSE_UNIT = 'a2.05';
export const A205_REFRAME = 'One verb, two words, and the small ones go in between.';

/** a2.19, Le futur proche, seq 15. THE NEGATION RULE ORIGINATES HERE, a2.05
 *  quoted it one lesson later, and this lesson is the third. All three strings
 *  are asserted identical in all three layers. */
export const FUTUR_UNIT = 'a2.19';
export const NEGATION_RULE = 'Wrap the verb that changed, not the one carrying the meaning.';

/** a2.20, Participes passés irréguliers, seq 17, immediately before. It taught
 *  the FORMS of venu, né and mort and refused the auxiliary by name. */
export const IRREGULAR_UNIT = 'a2.20';
export const A220_REFRAME = 'Do not build these. Reach for the group it is in.';

/** The three forms a2.20 flagged `etre: true` and handed forward, read off
 *  `participes-corpus.ts` FORMS. Its `s14-firstword` teaches all three as forms
 *  and says in one line that the choice is this lesson's. */
export const A220_ETRE_FORMS: readonly string[] = ['venu', 'né', 'mort'];

/** a2.15, Irréguliers 5, seq 9. THE FRONT-COVERING MOVE, which this lesson
 *  extends one step further than a2.20 did: cover the front and you inherit the
 *  auxiliary as well as the form. */
export const FAMILY_UNIT = 'a2.15';
export const A215_REFRAME = 'Cover the front of the verb. Build what is left.';

/** a2.11, Les verbes en -RE, seq 4. It teaches `descendre` in the present
 *  eleven times and names neither auxiliary. §7 above. */
export const RE_UNIT = 'a2.11';

/** a2.10, Les verbes en -IR, seq 3. Its second lesson teaches partir and sortir
 *  in the present and its frame word is `tôt`, which this lesson reuses
 *  deliberately: corrections §4 calls that a feature. */
export const IR_UNIT = 'a2.10';

/** a2.02, Irréguliers 1, seq 5. aller and venir in the present. */
export const ALLER_UNIT = 'a2.02';

/** a2.22, Les verbes pronominaux, seq 19, and a2.23, Pronominaux au passé
 *  composé, seq 20. The reflexives take être too and neither is touched here.
 *  a2.23 declares a2.21 as a prerequisite and inherits this lesson's rule. */
export const REFLEXIVE_UNIT = 'a2.22';
export const REFLEXIVE_PAST_UNIT = 'a2.23';

/** a2.06, seq 21. Agreement with a PRECEDING DIRECT OBJECT under avoir needs the
 *  words that replace an object, so it is not here. */
export const PRONOUN_UNIT = 'a2.06';

/* ─── THE REFRAME ───────────────────────────────────────────────────────────
 *
 * Doctrine §B.4: an A2 reframe is a rule the learner runs while the sentence is
 * already moving. Test: could they apply it in the half-second between subject
 * and verb? This one is applied one word later than that, between the first word
 * and the second, which is exactly where the decision falls.                   */

export const REFRAME = 'After être, the second word ends like a describing word.';

export const REFRAME_REJECTED: readonly { candidate: string; why: string }[] = [
  {
    candidate: 'Some verbs take être.',
    why: 'THE BRIEF NAMES THIS AS THE THING TO REJECT and it is right: it states the fact and gives the learner nothing to do with it. A learner who runs it mid-sentence has been told that a decision exists, which they already knew from the title.',
  },
  {
    candidate: 'With être, the participle behaves like an adjective.',
    why: `The brief\'s own candidate and the chosen one is it rewritten. It opens on two grammar nouns where ${unitRef('a1.16')} runs « describing word » 74 times against « adjective » 12, and ${unitRef('a2.17')} §5 measured that the house prefers the plain phrase rather than banning the technical one. « Behaves like » is also a description rather than an instruction, and the thing the learner has to do is put letters on the end.`,
  },
  {
    candidate: 'Agree the past form with the subject.',
    why: 'True, and it is the job description rather than the rule. It also says nothing about WHEN, and when is the half of the canDo that comes first: a learner running this on « j\'ai mangé » puts an e on it.',
  },
  {
    candidate: 'Movement and change of state take être.',
    why: 'This is the real pattern and it belongs on a screen rather than in the reframe. It answers which verbs and says nothing about the ending, which is the Owns; and it is false of `rester`, which is neither, and of the transitive uses, which move and take avoir.',
  },
];

/** How many times the reframe is authored. Invariants §5: assert it against an
 *  EXPLICIT CONSTANT, never against a figure derived from the lesson, because a
 *  derived count compares the content to itself and passes on any rewording. */
export const REFRAME_COUNT = 8;

/* ─── THE BOOKEND ───────────────────────────────────────────────────────────*/

/** The claim the bookend makes, in one string, so the screen, the roundup, the
 *  report and the test all say the same thing. */
export const BOOKEND_CLAIM =
  `${Cap(unitRef(ER_UNIT))} said it in the first lesson of this level, about six forms of the present. Seventeen lessons later it is four forms of the past and the same sentence covers them.`;

/** The exact parallel, spelled out. a2.01: four of six sound the same and the
 *  PRONOUN carries the person. Here: four of four sound the same and the SUBJECT
 *  carries the gender and the number. */
export const BOOKEND_PARALLEL =
  'There the pronoun did the work the ending could not. Here the subject does, and there is nothing left for the ear at all: all four are one sound.';

/* ─── THE FIFTEEN, AND THE FOUR FAMILIES ────────────────────────────────────*/

export type Family = 'going' | 'inout' | 'updown' | 'still';

export type EtreVerb = {
  /** The naming form. */
  readonly verb: string;
  /** The masculine singular past form. */
  readonly past: string;
  /** The other three cells, in the order m.sg, f.sg, m.pl, f.pl. */
  readonly cells: readonly [string, string, string, string];
  readonly family: Family;
  readonly en: string;
  /** The imported row that names it. */
  readonly rowId: string;
  /** True where the feminine is AUDIBLE. Exactly one of the fifteen. */
  readonly audibleF?: true;
  /** True where the corpus publishes a transitive use with avoir. */
  readonly transitive?: true;
  /** True for the three a2.20 taught the form of. */
  readonly fromA220?: true;
  readonly note?: string;
};

const cellsOf = (m: string): [string, string, string, string] =>
  [m, `${m}e`, `${m}s`, `${m}es`];

export const ETRE_VERBS: readonly EtreVerb[] = [
  { verb: 'aller', past: 'allé', cells: cellsOf('allé'), family: 'going', en: 'to go', rowId: 'fr.sons.verbes-essentiels.003', note: 'The commonest of the fifteen and the one every screen in this lesson uses, so the ending is the only thing that ever changes.' },
  { verb: 'venir', past: 'venu', cells: cellsOf('venu'), family: 'going', en: 'to come', rowId: 'fr.sons.verbes-essentiels.010', fromA220: true, note: `${Cap(unitRef(IRREGULAR_UNIT))} taught the form as an ordinary member of its -u group and said the first word was this lesson's.` },
  { verb: 'arriver', past: 'arrivé', cells: cellsOf('arrivé'), family: 'going', en: 'to arrive', rowId: 'fr.a2.verbes.013' },
  { verb: 'partir', past: 'parti', cells: cellsOf('parti'), family: 'going', en: 'to leave', rowId: 'fr.sons.verbes-essentiels.040', note: `${Cap(unitRef(IR_UNIT))} taught its present and its frame word was tôt, which this lesson reuses.` },
  { verb: 'passer', past: 'passé', cells: cellsOf('passé'), family: 'going', en: 'to go past', rowId: 'fr.sons.verbes-essentiels.017', transitive: true, note: 'NOT A LETTER IN THE MNEMONIC, and the corpus publishes it with avoir forty-five times and with être twenty-six.' },

  { verb: 'entrer', past: 'entré', cells: cellsOf('entré'), family: 'inout', en: 'to go in', rowId: 'fr.sons.verbes-essentiels.043' },
  { verb: 'sortir', past: 'sorti', cells: cellsOf('sorti'), family: 'inout', en: 'to go out', rowId: 'fr.sons.verbes-essentiels.041', transitive: true },
  { verb: 'rentrer', past: 'rentré', cells: cellsOf('rentré'), family: 'inout', en: 'to go home', rowId: 'fr.a2.verbes.016' },
  { verb: 'retourner', past: 'retourné', cells: cellsOf('retourné'), family: 'inout', en: 'to go back', rowId: 'fr.sons.verbes-essentiels.085' },

  { verb: 'monter', past: 'monté', cells: cellsOf('monté'), family: 'updown', en: 'to go up', rowId: 'fr.a1.transports-quotidiens.044', transitive: true },
  { verb: 'descendre', past: 'descendu', cells: cellsOf('descendu'), family: 'updown', en: 'to go down', rowId: 'fr.a1.transports-quotidiens.045', note: `${Cap(unitRef(RE_UNIT))} teaches it in the present and names no first word for it. §7.` },
  { verb: 'tomber', past: 'tombé', cells: cellsOf('tombé'), family: 'updown', en: 'to fall', rowId: 'fr.sons.verbes-essentiels.044' },

  { verb: 'rester', past: 'resté', cells: cellsOf('resté'), family: 'still', en: 'to stay', rowId: 'fr.sons.verbes-essentiels.021', note: 'The one that neither moves nor changes anything, which is why the pattern needs the mnemonic beside it.' },
  { verb: 'naître', past: 'né', cells: cellsOf('né'), family: 'still', en: 'to be born', rowId: 'fr.sons.verbes-essentiels.081', fromA220: true },
  { verb: 'mourir', past: 'mort', cells: ['mort', 'morte', 'morts', 'mortes'], family: 'still', en: 'to die', rowId: 'fr.sons.verbes-essentiels.082', fromA220: true, audibleF: true, note: 'THE ONE FEMININE OF THE FIFTEEN YOU CAN HEAR. mort is /mɔʁ/ and morte is /mɔʁt/, and the corpus already respells both.' },
];

export const EXPECTED_VERBS = 15;

export const FAMILIES: readonly { key: Family; label: string; en: string }[] = [
  { key: 'going', label: 'going and coming', en: 'aller, venir, arriver, partir and passer' },
  { key: 'inout', label: 'in and out', en: 'entrer, sortir, rentrer and retourner' },
  { key: 'updown', label: 'up and down', en: 'monter, descendre and tomber' },
  { key: 'still', label: 'and three that do not move', en: 'rester, naître and mourir' },
];

export const FAMILY_SIZES: Record<Family, number> = {
  going: 5, inout: 4, updown: 3, still: 3,
};

export const verbsIn = (f: Family): readonly EtreVerb[] => ETRE_VERBS.filter((v) => v.family === f);
export const verbOf = (name: string): EtreVerb => {
  const v = ETRE_VERBS.find((x) => x.verb === name);
  if (!v) throw new Error(`a2.21: « ${name} » is not one of the fifteen.`);
  return v;
};

/** Twelve move and three do not. The claim, in one string. */
export const PATTERN_CLAIM =
  'Twelve of the fifteen move, and the other three change what is true rather than where you are.';

/** And the wrinkle, said out loud rather than smoothed over. */
export const REST_CLAIM =
  'rester is the one that breaks it. Nothing moves and nothing changes, and it is the one people forget, which is the reason the mnemonic exists at all.';

/* ─── THE MNEMONIC ──────────────────────────────────────────────────────────
 *
 * §2: the `sub` does not promise it. It is taught anyway, once, on the brief's
 * own terms: as a crutch, beside the real pattern, with the verbs it misses
 * named.                                                                       */

export const MNEMONIC = 'DR MRS VANDERTRAMP';

export const MNEMONIC_CLAIM =
  'Sixteen letters for sixteen verbs, and it is an accident of English spelling rather than anything about French.';

/** The two of the fifteen the mnemonic has no letter for, and the two letters it
 *  has that this lesson does not teach. Both directions are the point: a learner
 *  who only has the mnemonic cannot decide about a verb outside it. */
export const MNEMONIC_MISSES: readonly string[] = ['passer'];
export const MNEMONIC_EXTRAS: readonly string[] = ['devenir', 'revenir'];
export const MNEMONIC_GAP_CLAIM =
  'passer is not one of its letters, and it takes être twenty-six times in this app.';

/* ─── THE AGREEMENT RULE, WORDED ONCE ───────────────────────────────────────
 *
 * a2.23 is told to inherit this. It is exported so that lesson can quote it
 * rather than reword it, and the report prints it verbatim.                    */

export const AGREEMENT_RULE =
  'Add nothing for a man on his own, e for a woman, s for more than one, and es for more than one woman.';

/** Where it comes from, credited by unit id. a2.03 owns it. */
export const AGREEMENT_CREDIT =
  `${Cap(unitRef(ADJ_UNIT))} taught this on describing words and the endings are the same four. « ${A203_REFRAME} » The only new thing is that a verb is now doing it.`;

/** THE OTHER SIDE OF THE CONTRAST, which is a2.05's own rule and is not
 *  softened: after avoir nothing is added, in any person, ever. */
export const AVOIR_CLAIM =
  `After avoir the second word never changes, in any person. ${Cap(unitRef(PASSE_UNIT))} taught that and this lesson does not touch it.`;

/* ─── WHAT THE EAR CANNOT DO ────────────────────────────────────────────────*/

/** Every pair of cells that is ONE SOUND. No `listenChoose` may offer two
 *  options that differ only by a member of one of these pairs; a question that
 *  does has no correct answer and marking one right certifies a bug.
 *  Corrections §5, and a2.10 and a2.11 both enforce the same shape. */
export const NO_EAR_QUESTION: readonly (readonly [string, string])[] =
  ETRE_VERBS.flatMap((v) => {
    const [m, f, mp, fp] = v.cells;
    const pairs: [string, string][] = [[m, mp], [f, fp]];
    // The masculine against the feminine is one sound for fourteen of the
    // fifteen and AUDIBLE for mourir, which is the whole of s12.
    if (!v.audibleF) pairs.push([m, f], [m, fp], [f, mp], [mp, fp]);
    return pairs;
  });

export const EXPECTED_ONE_SOUND_VERBS = 14;
export const EXPECTED_AUDIBLE_F = 1;

/** The claim about the ear, in one string. */
export const EAR_CLAIM =
  'You cannot check this by listening. For fourteen of the fifteen, all four spellings are one sound.';

/** mourir's pair, by name, and the two published rows that already respell it. */
export const AUDIBLE = {
  verb: 'mourir',
  masculine: 'mort',
  feminine: 'morte',
  respellM: 'MOR',
  respellF: 'MORT',
  storedM: { id: 'fr.sons.adjectifs-essentiels.161', respell: 'MOR' },
  storedF: { id: 'fr.b2.musees.048', respell: 'lah nah-TÜR MOHRT' },
  claim: 'mort and morte are the one pair in this lesson you can hear apart.',
  numberClaim: 'The number is still silent: morts is the first sound and mortes the second.',
} as const;

/* ─── THE TRANSITIVE SPLIT ──────────────────────────────────────────────────*/

/** Measured 2026-08-14 across every published row, and RE-MEASURED by the
 *  manifest on every regeneration. `avoir` counts a form of avoir in front of
 *  any of the four cells; `etre` counts a form of être. */
export const TRANSITIVE: readonly { verb: string; avoir: number; etre: number }[] = [
  { verb: 'sortir', avoir: 1, etre: 24 },
  { verb: 'monter', avoir: 4, etre: 9 },
  { verb: 'descendre', avoir: 0, etre: 5 },
  { verb: 'passer', avoir: 45, etre: 26 },
  { verb: 'rentrer', avoir: 0, etre: 13 },
  { verb: 'retourner', avoir: 0, etre: 8 },
];

export const TRANSITIVE_DECISION = {
  taught: false,
  receptiveOnly: true,
  verbsShown: ['sortir', 'passer'] as const,
  zeroEvidence: ['descendre', 'rentrer', 'retourner'] as const,
  why:
    'The brief offers two defensible answers and recommends the second. The measurement makes it the only one: three of the six have ZERO published transitive uses and a fourth has one, so a named group of six with a direct-object test teaches a rule against four verbs this corpus never uses that way. It is shown receptively on the two that carry it, sortir because it is the clearest contrast and passer because it is forty-five of the fifty rows, and the rule is left to B1. The canDo asks the learner to pick être where French REQUIRES it, and these are exactly where it does not.',
} as const;

export const TRANSITIVE_CLAIM =
  'A few of them take avoir instead when something is being moved rather than moving. You will meet it; you are not being asked to produce it.';

/** a2.11's descendre, closed FORWARD rather than by back-reference. §7. */
export const DESCENDRE_CREDIT =
  `${Cap(unitRef(RE_UNIT))} taught descendre in the present and did not say which first word it takes. It takes être when you go down and avoir when you take something down, and this lesson owns that.`;

/* ─── THE BOUNDARY: WHAT THIS LESSON DOES NOT DO ────────────────────────────*/

/** The reflexives take être too and they are two lessons away. Not one of these
 *  may appear anywhere in the lesson; the batch, the merge and the test all walk
 *  the list. a2.23 declares a2.21 as a prerequisite. */
export const REFLEXIVE_VERBS: readonly string[] = [
  'se lever', 'se coucher', 'se laver', "s'habiller", 'se réveiller', 'se promener',
  "s'appeler", 'se souvenir', "s'asseoir", 'se dépêcher', 'se reposer',
];

/** And their past shapes, which are what a stray sentence would actually
 *  contain. `me suis`, `s'est`, `nous sommes ... levés`. */
export const REFLEXIVE_MARKERS: readonly string[] = [
  'je me suis', 'tu t\'es', 'il s\'est', 'elle s\'est', 'on s\'est',
  'nous nous sommes', 'vous vous êtes', 'ils se sont', 'elles se sont',
  'me suis', 't\'es ', 's\'est ', 'se sont ', 'nous nous', 'vous vous',
];

export const REFLEXIVE_DEFERRAL =
  `A whole family of verbs carries a little word in front of it and they take être as well. That is ${unitRef(REFLEXIVE_UNIT)} and then ${unitRef(REFLEXIVE_PAST_UNIT)}, and the rule on this screen is the one they will use.`;

export const OBJECT_DEFERRAL =
  `There is one case where a past form agrees after avoir, and it needs the words that stand in for an object. That is ${unitRef(PRONOUN_UNIT)} and nothing here depends on it.`;

/* ─── THE ERRORS ────────────────────────────────────────────────────────────*/

/** The five a learner actually makes, wrong beside right. Every `wrong` is a
 *  string that must not appear outside WRONG_FORM_SECTIONS. */
export const WRONG: readonly { wrong: string; right: string; why: string }[] = [
  {
    wrong: 'Elle a allé au marché.',
    right: 'Elle est allée au marché.',
    why: 'avoir on a verb that takes être, which is the error the whole lesson exists to prevent. It comes from having used avoir for one lesson and nothing else.',
  },
  {
    wrong: 'Elle est allé au marché.',
    right: 'Elle est allée au marché.',
    why: 'The right first word and no ending. Nobody hears this and everybody who reads it sees it, which is why it survives so long.',
  },
  {
    wrong: 'Elle a mangée au marché.',
    right: 'Elle a mangé au marché.',
    why: `The rule applied where it does not run. ${AVOIR_CLAIM}`,
  },
  {
    wrong: 'Ils sont allé au marché.',
    right: 'Ils sont allés au marché.',
    why: 'The plural forgotten. More than one person and the s goes on, exactly as it would on a describing word.',
  },
  {
    wrong: 'Je suis sorti la poubelle.',
    right: "J'ai sorti la poubelle.",
    why: 'être where the verb has something after it that is being moved. This is the split, and it is the one case in the lesson where avoir is right.',
  },
];

/** The forms and sentences that are NOT French. Any of these outside
 *  WRONG_FORM_SECTIONS is a defect, and all three layers check it. */
export const BUILT_FORMS: readonly string[] = [
  'a allé', 'a allée', 'as allé', 'ai allé', 'ont allé', 'avons allé',
  'a venu', 'ai venu', 'a parti', 'ai parti', 'a sorti avec', 'a resté',
  'a tombé', 'ai tombé', 'ont tombé', 'a arrivé', 'a né', 'a mort',
  'a mangée', 'ai mangée', 'a mangées', 'ont mangés',
  'suis sorti la', 'suis passé un',
];

/* ─── THE SCENE ─────────────────────────────────────────────────────────────
 *
 * Doctrine §B.2: an A2 scene opens on somebody who started a sentence they could
 * not finish. Nobody is rude and nothing is mispronounced; the learner runs out
 * of sentence in public.
 *
 * THE STALL IS ON THE FIRST WORD, NOT ON THE ENDING, and that is the honest
 * choice. In speech the ending costs nothing: « je suis sortie » and « je suis
 * sorti » are one sound. What costs is choosing between « j'ai » and « je suis »
 * with somebody waiting. The ending is the payoff mission, where it belongs,
 * because that failure is silent and this one is not.
 *
 * AND THE BREAKDOWN IS SEMANTIC RATHER THAN COSMETIC. « J'ai sorti avec des
 * amis » is a transitive sortir, so the colleague hears « I took out with
 * friends » and asks WHAT. The sentence did not sound wrong. It meant something
 * else and the conversation stopped to repair it.                              */

export const SCENE_STALL = "Hier soir, j'ai... je suis... j'ai...";
export const SCENE_STALL_EN = 'Last night, I... I... I...';
export const SCENE_ERROR = 'J’ai sorti avec des amis.';
export const SCENE_ERROR_EN = 'what the other first word gives';

/** a2.05 §11.2: a scene bubble whose `fr` ends in a SPACED EXCLAMATION MARK
 *  loses its tail on a Pixel 6. Not one bubble here contains « ! », and the
 *  guard is one line in each layer. */
export const SCENE_BANNED_SUBSTRING = ' !';

/* ─── THE FRAME, AND WHY IT IS BARE ─────────────────────────────────────────*/

/** `dicteeMode()` switches to WORD tiles above 16 letters and word mode hands
 *  every real word over pre-spelled, so a lesson about a written ending can only
 *  be tested in LETTERS mode. Measured through the real function:
 *
 *      Il est allé.            9   LETTERS
 *      Elle est allée.        12   LETTERS
 *      Ils sont allés.        12   LETTERS
 *      Elles sont allées.     15   LETTERS
 *      Elles sont allées tôt. 18   words     <- one word of complement is too many
 *      Elles ne sont pas allées. 20 words    <- and the negative plural does not fit
 *
 *  THE FOUR CELLS ARE THEREFORE BARE, and that is right rather than a compromise:
 *  the whole content of the screen is the last two letters, and a complement on
 *  the end is a second thing for the eye to do. The six-person walk, which is not
 *  dictated, carries `tôt`. */
export const DICTEE_MAX_LETTERS = 16;

/** The frames that do NOT fit, recorded so a later author does not try them. */
export const DICTEE_TOO_LONG: readonly { fr: string; letters: number }[] = [
  { fr: 'Elles sont allées tôt.', letters: 18 },
  { fr: 'Elles ne sont pas allées.', letters: 20 },
  { fr: 'Nous sommes partis tôt.', letters: 19 },
  // MEASURED AFTER THE FRAME WAS CHOSEN, and it cost the audible pair its place
  // in the dictée: « en mars » is two letters too many, and « Elle est morte. »
  // on its own is a sentence the lesson never authors.
  { fr: 'Elle est morte en mars.', letters: 18 },
];

/* ─── THE ROWS THIS LESSON AUTHORS ──────────────────────────────────────────*/

export type Role =
  | 'cell' | 'person' | 'contrast' | 'transitive' | 'audible'
  | 'still' | 'negative' | 'scene' | 'talk' | 'family' | 'unseen';

export type Row = {
  readonly id: string;
  readonly fr: string;
  readonly en: string;
  readonly respell: string;
  readonly ipa: string;
  readonly role: Role;
  readonly drills: readonly string[];
  readonly tags: readonly string[];
  readonly why: string;
  /** The verb whose cell this row shows, where it shows one. */
  readonly verb?: string;
  /** The cell index into `EtreVerb.cells`, where it shows one. */
  readonly cell?: 0 | 1 | 2 | 3;
};

const V = (n: number): string => `fr.a2.verbes.${n}`;

const FULL = ['flashcard', 'sentence', 'voiceflash', 'review'] as const;
const WITH_DICTEE = [...FULL, 'dictation'] as const;
/** No dictation. A row on a production surface must not turn on a choice this
 *  lesson shows receptively, and the transitive rows are all of that kind. */
const NO_D = [...FULL] as const;

const T = ['a2.21', 'passe-compose', 'etre'] as const;

const R = (
  n: number, fr: string, en: string, respell: string, ipa: string,
  role: Role, drills: readonly string[], tags: readonly string[], why: string,
  verb?: string, cell?: 0 | 1 | 2 | 3,
): Row => ({ id: V(n), fr, en, respell, ipa, role, drills, tags, why, verb, cell });

export const ETRE_ROWS: readonly Row[] = [
  /* ── 651-654: THE FOUR CELLS OF ONE VERB, BARE ───────────────────────────
     The required layout. Everything is held still except the subject and the
     last two letters, and every respelling ends « tah-LAY », which is the
     claim the screen makes. All four are LETTERS mode and all four are in the
     dictée. */
  R(651, 'Il est allé.', 'He went.', 'eel eh tah-LAY', '/il ɛ ta.le/', 'cell', WITH_DICTEE, [...T, 'cell', 'aller'], 'The plain form, and the one every other cell is built off.', 'aller', 0),
  R(652, 'Elle est allée.', 'She went.', 'ehl eh tah-LAY', '/ɛl ɛ ta.le/', 'cell', WITH_DICTEE, [...T, 'cell', 'aller'], 'One letter more and not one sound more. This is the whole lesson on one card.', 'aller', 1),
  R(653, 'Ils sont allés.', 'They went.', 'eel sohⁿ tah-LAY', '/il sɔ̃ ta.le/', 'cell', WITH_DICTEE, [...T, 'cell', 'aller'], 'The first word changes for the plural and so does the second, and only the first one is audible.', 'aller', 2),
  R(654, 'Elles sont allées.', 'They went, and they are all women.', 'ehl sohⁿ tah-LAY', '/ɛl sɔ̃ ta.le/', 'cell', WITH_DICTEE, [...T, 'cell', 'aller'], 'Both endings at once, and the longest of the four to write. Fifteen letters, which is inside the dictée window by one.', 'aller', 3),

  /* ── 655-660: THE SIX PERSONS, partir, with a2.10's frame word ───────────*/
  R(655, 'Je suis parti tôt.', 'I left early.', 'zhuh swee pahr-TEE TOH', '/ʒə sɥi paʁ.ti to/', 'person', FULL, [...T, 'person', 'partir'], `The first person, and ${unitRef(IR_UNIT, 'a2')}'s frame word so the two lessons sit against each other.`, 'partir', 0),
  R(656, 'Tu es partie tôt.', 'You left early.', 'tü eh pahr-TEE TOH', '/ty ɛ paʁ.ti to/', 'person', FULL, [...T, 'person', 'partir'], 'A woman being spoken to, so the e goes on. Nothing about the sound says so.', 'partir', 1),
  R(657, 'Il est parti tôt.', 'He left early.', 'eel eh pahr-TEE TOH', '/il ɛ paʁ.ti to/', 'person', FULL, [...T, 'person', 'partir'], 'The plain form again, on a different verb, so the pattern is visible twice.', 'partir', 0),
  R(658, 'Nous sommes partis tôt.', 'We left early.', 'noo somm pahr-TEE TOH', '/nu sɔm paʁ.ti to/', 'person', FULL, [...T, 'person', 'partir'], 'More than one, so the s goes on. Nineteen letters, which is why this one is not in the dictée.', 'partir', 2),
  R(659, 'Vous êtes parties tôt.', 'You left early, and you are all women.', 'voo zeht pahr-TEE TOH', '/vu zɛt paʁ.ti to/', 'person', FULL, [...T, 'person', 'partir'], 'Both endings on the person a learner uses at work, and still one sound.', 'partir', 3),
  R(660, 'Elles sont parties tôt.', 'They left early, and they are all women.', 'ehl sohⁿ pahr-TEE TOH', '/ɛl sɔ̃ paʁ.ti to/', 'person', FULL, [...T, 'person', 'partir'], 'The last cell, and the sixth person. Six rows and four different endings.', 'partir', 3),

  /* ── 661-664: THE CONTRAST WITH avoir. The second required layout. ───────
     Same subject, same place, one word different, and only one of them agrees. */
  R(661, 'Elle a mangé au restaurant.', 'She ate at the restaurant.', 'ehl ah mahⁿ-ZHAY oh res-toh-RAHⁿ', '/ɛl a mɑ̃.ʒe o ʁɛs.to.ʁɑ̃/', 'contrast', FULL, [...T, 'contrast', 'avoir'], `avoir, and nothing goes on the end. ${Cap(unitRef(PASSE_UNIT, 'a2'))}'s rule, unchanged.`),
  R(662, 'Elle est allée au restaurant.', 'She went to the restaurant.', 'ehl eh tah-LAY oh res-toh-RAHⁿ', '/ɛl ɛ ta.le o ʁɛs.to.ʁɑ̃/', 'contrast', FULL, [...T, 'contrast', 'etre'], 'être, same woman, same restaurant, and an e appears. One word different in the whole sentence.', 'aller', 1),
  R(663, 'Ils ont mangé au restaurant.', 'They ate at the restaurant.', 'eel zohⁿ mahⁿ-ZHAY oh res-toh-RAHⁿ', '/il zɔ̃ mɑ̃.ʒe o ʁɛs.to.ʁɑ̃/', 'contrast', FULL, [...T, 'contrast', 'avoir'], 'The plural with avoir, and still nothing on the end.'),
  R(664, 'Ils sont allés au restaurant.', 'They went to the restaurant.', 'eel sohⁿ tah-LAY oh res-toh-RAHⁿ', '/il sɔ̃ ta.le o ʁɛs.to.ʁɑ̃/', 'contrast', FULL, [...T, 'contrast', 'etre'], 'And the plural with être, where the s does appear. The pair a learner has to be able to hold.', 'aller', 2),

  /* ── 665-668: THE TRANSITIVE SPLIT, RECEPTIVE ONLY ──────────────────────
     No dictation drill on any of the four: these are shown, never produced. */
  R(665, 'Je suis sorti hier soir.', 'I went out last night.', 'zhuh swee sor-TEE yehr SWAHR', '/ʒə sɥi sɔʁ.ti jɛʁ swaʁ/', 'transitive', NO_D, [...T, 'transitive', 'etre'], 'Nothing after the verb, so it is the ordinary one and être is right.', 'sortir', 0),
  R(666, "J’ai sorti la poubelle.", 'I took the bin out.', 'zhay sor-TEE lah poo-BELL', '/ʒe sɔʁ.ti la pu.bɛl/', 'transitive', NO_D, [...T, 'transitive', 'avoir'], 'Something after the verb that is being moved, so avoir. Same two words, different job.'),
  R(667, 'Elle est passée devant la gare.', 'She went past the station.', 'ehl eh pah-SAY duh-VAHⁿ lah GAHR', '/ɛl ɛ pɑ.se də.vɑ̃ la ɡaʁ/', 'transitive', NO_D, [...T, 'transitive', 'etre'], 'passer with nowhere to put an object, so être, and the e goes on.', 'passer', 1),
  R(668, 'Elle a passé un examen.', 'She took an exam.', 'ehl ah pah-SAY uhⁿ neg-zah-MEHⁿ', '/ɛl a pɑ.se œ̃ nɛɡ.za.mɛ̃/', 'transitive', NO_D, [...T, 'transitive', 'avoir'], 'The commonest of all of them: forty-five published sentences put avoir in front of passé and this is the shape of nearly all of them.'),

  /* ── 669-672: mourir, THE ONE AUDIBLE FEMININE ──────────────────────────*/
  R(669, 'Il est mort en mars.', 'He died in March.', 'eel eh MOR ahⁿ MARSS', '/il ɛ mɔʁ ɑ̃ maʁs/', 'audible', FULL, [...T, 'audible', 'mourir'], 'The plain form, and it ends on the r.', 'mourir', 0),
  R(670, 'Elle est morte en mars.', 'She died in March.', 'ehl eh MORT ahⁿ MARSS', '/ɛl ɛ mɔʁt ɑ̃ maʁs/', 'audible', FULL, [...T, 'audible', 'mourir'], 'THE ONE FEMININE IN THE LESSON YOU CAN HEAR. The e wakes the t up, which is what an e does everywhere else in French and does not do to any of the other fourteen.', 'mourir', 1),
  R(671, 'Ils sont morts en mars.', 'They died in March.', 'eel sohⁿ MOR ahⁿ MARSS', '/il sɔ̃ mɔʁ ɑ̃ maʁs/', 'audible', FULL, [...T, 'audible', 'mourir'], 'And the number is inaudible even here: this is the first sound again, with an s nobody says.', 'mourir', 2),
  R(672, 'Elles sont mortes en mars.', 'They died in March, and they are all women.', 'ehl sohⁿ MORT ahⁿ MARSS', '/ɛl sɔ̃ mɔʁt ɑ̃ maʁs/', 'audible', FULL, [...T, 'audible', 'mourir'], 'The second sound again. Gender you can hear once in fifteen verbs, number never.', 'mourir', 3),

  /* ── 673-675: THE THREE THAT DO NOT MOVE, and one compound ──────────────*/
  R(673, 'Elle est née ici.', 'She was born here.', 'ehl eh NAY ee-SEE', '/ɛl ɛ ne i.si/', 'still', WITH_DICTEE, [...T, 'still', 'naitre'], `${Cap(unitRef(IRREGULAR_UNIT))} taught the form and said the first word was this lesson's. Here it is, with the e on it.`, 'naître', 1),
  R(674, 'Elle est restée à la maison.', 'She stayed at home.', 'ehl eh res-TAY ah lah meh-ZOHⁿ', '/ɛl ɛ ʁɛs.te a la mɛ.zɔ̃/', 'still', FULL, [...T, 'still', 'rester'], 'The one that neither moves nor changes anything, and it still takes être. There is no reason for it and that is why the mnemonic exists.', 'rester', 1),
  R(675, 'Elle est revenue lundi.', 'She came back on Monday.', 'ehl eh ruhv-NÜ luhⁿ-DEE', '/ɛl ɛ ʁəv.ny lœ̃.di/', 'unseen', FULL, [...T, 'unseen', 'venir'], `Cover the re and venir is underneath, so the form is venu and the first word is venir's. ${Cap(unitRef(FAMILY_UNIT, 'a2'))}'s move, deciding the first word as well as the second.`),

  /* ── 676-679: THE NEGATIVE. Three of the six persons elide, and these four
     rows show one that does and two that do not. */
  R(676, 'Je ne suis pas allé au bureau.', 'I did not go to the office.', 'zhuh nuh swee pah zah-LAY oh bü-ROH', '/ʒə nə sɥi pa za.le o by.ʁo/', 'negative', FULL, [...T, 'negative'], `No elision: suis opens on a consonant. ${Cap(unitRef(PASSE_UNIT, 'a2'))}'s « je n'ai pas » does elide, and this is the person where the two lessons look different.`, 'aller', 0),
  R(677, "Elle n’est pas allée au bureau.", 'She did not go to the office.', 'ehl neh pah zah-LAY oh bü-ROH', '/ɛl nɛ pa za.le o by.ʁo/', 'negative', FULL, [...T, 'negative'], 'Here it does elide, because est opens on a vowel. And the ending is on the second word, outside both halves of the negative.', 'aller', 1),
  R(678, 'Nous ne sommes pas allés au bureau.', 'We did not go to the office.', 'noo nuh somm pah zah-LAY oh bü-ROH', '/nu nə sɔm pa za.le o by.ʁo/', 'negative', FULL, [...T, 'negative'], 'No elision again, and the plural s still goes on. The negative changes nothing about the ending.', 'aller', 2),
  R(679, "Elles ne sont pas allées au bureau.", 'They did not go to the office, and they are all women.', 'ehl nuh sohⁿ pah zah-LAY oh bü-ROH', '/ɛl nə sɔ̃ pa za.le o by.ʁo/', 'negative', FULL, [...T, 'negative'], 'Both endings inside a negative, and twenty letters, which is why the dictée cannot ask for it.', 'aller', 3),

  /* ── 680-683: THE SCENE ─────────────────────────────────────────────────*/
  R(680, 'Tu es allée où hier soir ?', 'Where did you go last night?', 'tü eh tah-LAY oo yehr SWAHR', '/ty ɛ ta.le u jɛʁ swaʁ/', 'scene', FULL, [...T, 'scene'], 'Her question, and it already contains the answer: she has agreed it for a woman without thinking about it.', 'aller', 1),
  R(681, 'Je suis sortie avec des amis.', 'I went out with friends.', 'zhuh swee sor-TEE ah-vehk day zah-MEE', '/ʒə sɥi sɔʁ.ti a.vɛk de za.mi/', 'scene', FULL, [...T, 'scene'], 'What works. être, because nothing is being taken out, and the e because she is a woman.', 'sortir', 1),
  R(682, 'Tu as sorti quoi ?', 'You took out what?', 'tü ah sor-TEE KWAH', '/ty a sɔʁ.ti kwa/', 'scene', FULL, [...T, 'scene'], 'What the other first word produces. She did not hear a mistake, she heard a different sentence and waited for the missing thing.'),
  R(683, 'Ah, avec des amis. Je comprends.', 'Ah, with friends. I see.', 'ah ah-vehk day zah-MEE. zhuh kohⁿ-PRAHⁿ', '/a a.vɛk de za.mi ʒə kɔ̃.pʁɑ̃/', 'scene', FULL, [...T, 'scene'], 'The repair, which costs the story its opening. Nobody was rude and the sentence was told twice.'),

  /* ── 684-689: THE CONVERSATION ──────────────────────────────────────────*/
  R(684, 'Tu es rentrée à quelle heure ?', 'What time did you get home?', 'tü eh rahⁿ-TRAY ah keh-LUHR', '/ty ɛ ʁɑ̃.tʁe a kɛ.lœʁ/', 'talk', FULL, [...T, 'talk'], 'Her question, agreed for a woman, and the ending is inaudible in it.', 'rentrer', 1),
  R(685, 'Je suis rentrée vers minuit.', 'I got home around midnight.', 'zhuh swee rahⁿ-TRAY vehr mee-NWEE', '/ʒə sɥi ʁɑ̃.tʁe vɛʁ mi.nɥi/', 'talk', FULL, [...T, 'talk'], 'The answer, agreed the same way, and the learner writes it rather than says it.', 'rentrer', 1),
  R(686, 'Vous êtes arrivés ensemble ?', 'Did you arrive together?', 'voo zeht zah-ree-VAY ahⁿ-SAHⁿBL', '/vu zɛt za.ʁi.ve ɑ̃.sɑ̃bl/', 'talk', FULL, [...T, 'talk'], 'The vous plural, and the respelling here holds the one nasal in this lesson the checker cannot see.', 'arriver', 2),
  R(687, 'Nous sommes arrivés à huit heures.', 'We arrived at eight.', 'noo somm zah-ree-VAY ah wee TUHR', '/nu sɔm za.ʁi.ve a ɥi tœʁ/', 'talk', FULL, [...T, 'talk'], 'The nous form, with the s that nobody says.', 'arriver', 2),
  R(688, 'Et Marie, elle est venue ?', 'And Marie, did she come?', 'ay mah-REE, ehl eh vuh-NÜ', '/e ma.ʁi ɛl ɛ və.ny/', 'talk', FULL, [...T, 'talk'], `venu with an e on it, which is ${unitRef(IRREGULAR_UNIT, 'a2')}'s form and this lesson's ending.`, 'venir', 1),
  R(689, "Non, elle n’est pas venue.", 'No, she did not come.', 'nohⁿ, ehl neh pah vuh-NÜ', '/nɔ̃ ɛl nɛ pa və.ny/', 'talk', FULL, [...T, 'talk'], 'The negative and the ending at once, and the ending sits outside both halves.', 'venir', 1),

  /* ── 690-694: ONE SENTENCE PER FAMILY ───────────────────────────────────*/
  R(690, 'Il est entré sans frapper.', 'He came in without knocking.', 'eel eh tahⁿ-TRAY sahⁿ frah-PAY', '/il ɛ tɑ̃.tʁe sɑ̃ fʁa.pe/', 'family', FULL, [...T, 'family', 'inout'], 'In and out, and the plain form.', 'entrer', 0),
  R(691, 'Ils sont retournés en France.', 'They went back to France.', 'eel sohⁿ ruh-toor-NAY ahⁿ FRAHⁿSS', '/il sɔ̃ ʁə.tuʁ.ne ɑ̃ fʁɑ̃s/', 'family', FULL, [...T, 'family', 'inout'], 'The same family, plural, and the s on the end.', 'retourner', 2),
  R(692, 'Elle est descendue à midi.', 'She came down at midday.', 'ehl eh day-sahⁿ-DÜ ah mee-DEE', '/ɛl ɛ de.sɑ̃.dy a mi.di/', 'family', FULL, [...T, 'family', 'updown'], `Up and down, and the verb ${unitRef(RE_UNIT)} taught in the present without naming a first word for it.`, 'descendre', 1),
  R(693, 'Le verre est tombé.', 'The glass fell.', 'luh VEHR eh tohⁿ-BAY', '/lə vɛʁ ɛ tɔ̃.be/', 'family', WITH_DICTEE, [...T, 'family', 'updown'], 'The subject is a thing rather than a person, and the rule is the same: le verre is masculine and singular so nothing goes on.', 'tomber', 0),
  R(694, 'Nous sommes passés devant chez toi.', 'We went past your place.', 'noo somm pah-SAY duh-VAHⁿ shay TWAH', '/nu sɔm pɑ.se də.vɑ̃ ʃe twa/', 'family', FULL, [...T, 'family', 'going'], 'Going and coming, on the verb the mnemonic has no letter for.', 'passer', 2),

  /* ── 695-696: THE GENERALISATION ────────────────────────────────────────*/
  R(695, 'Il est devenu professeur.', 'He became a teacher.', 'eel eh duhv-NÜ proh-feh-SUHR', '/il ɛ dəv.ny pʁɔ.fɛ.sœʁ/', 'unseen', FULL, [...T, 'unseen', 'venir'], 'A verb this lesson never lists. Cover the de and venir is underneath, so the form is venu and the first word comes with it.'),
  R(696, 'Elles sont reparties lundi.', 'They left again on Monday.', 'ehl sohⁿ ruh-pahr-TEE luhⁿ-DEE', '/ɛl sɔ̃ ʁə.paʁ.ti lœ̃.di/', 'unseen', FULL, [...T, 'unseen', 'partir'], 'And one the mnemonic has no letter for either. Cover the re and partir is underneath, which takes être and agrees.'),
];

export const AUTHORED_IDS: readonly string[] = ETRE_ROWS.map((r) => r.id);
export const EXPECTED_AUTHORED = 46;

export const rowsWithRole = (role: Role): readonly Row[] => ETRE_ROWS.filter((r) => r.role === role);

export const rowById = (id: string): Row => {
  const r = ETRE_ROWS.find((x) => x.id === id);
  if (!r) throw new Error(`a2.21: ${id} is not an authored row.`);
  return r;
};

/** The four cells of aller, in cell order, as row ids. THE REQUIRED LAYOUT. */
export const CELL_IDS: readonly string[] = [V(651), V(652), V(653), V(654)];

/** The avoir/être pairs, as [avoir, être]. THE SECOND REQUIRED LAYOUT. */
export const CONTRAST_PAIRS: readonly (readonly [string, string])[] = [
  [V(661), V(662)],
  [V(663), V(664)],
];

/** The transitive pairs, as [être, avoir]. Receptive only. */
export const TRANSITIVE_PAIRS: readonly (readonly [string, string])[] = [
  [V(665), V(666)],
  [V(667), V(668)],
];

/** The audible-feminine set, in cell order. */
export const AUDIBLE_IDS: readonly string[] = [V(669), V(670), V(671), V(672)];

/* ─── THE NEGATIVE, AND THE PAIR CHECK ──────────────────────────────────────*/

/** Strips `ne`/`n'` and `pas` from a negative and puts back what the elision
 *  took, so a negative row can be compared against its affirmative. a2.05's
 *  version had to restore `j'ai` from `je n'ai`; here the elision never touches
 *  the subject, so this one only has to put the vowel back on the auxiliary. */
export function reduceNegative(fr: string): string {
  return fr
    .replace(/\bne\s+/gi, '')
    .replace(/\bn['’]/gi, '')
    .replace(/\s+pas\b/gi, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

/** The three persons whose `ne` elides, and the three whose does not. Asserted
 *  by name in all three layers, because it is the measurable difference from
 *  a2.05 and a later author will assume it matches. */
export const ELIDES: readonly string[] = ['tu es', 'il est', 'elle est', 'on est', 'vous êtes'];
export const DOES_NOT_ELIDE: readonly string[] = ['je suis', 'nous sommes', 'ils sont', 'elles sont'];
export const ELISION_CLAIM =
  `${Cap(unitRef(PASSE_UNIT, 'a2'))}'s ne shortened in front of every person and this one shortens in front of three. suis, sommes and sont start on a consonant, so the ne stays whole.`;

/* ─── THE IMPORTS ───────────────────────────────────────────────────────────
 *
 * Corrections §2: five builds in five authored not one infinitive. Six in six.
 * All fifteen naming forms exist, and so do the three compounds this lesson
 * generalises to.
 *
 * Corrections §10: the seed is a CUT. Nine of these twenty are absent from it
 * and the merge carries all twenty, because a lesson whose itemIds resolve to
 * nothing renders empty cards.                                                */

export type Import = { readonly id: string; readonly fr: string; readonly why: string };

export const IMPORTED: readonly Import[] = [
  // The fifteen naming forms.
  { id: 'fr.sons.verbes-essentiels.003', fr: 'aller', why: 'The verb every screen in this lesson uses. In the seed.' },
  { id: 'fr.sons.verbes-essentiels.010', fr: 'venir', why: `The naming form behind ${unitRef(IRREGULAR_UNIT, 'a2')}'s venu. In the seed.` },
  { id: 'fr.sons.verbes-essentiels.040', fr: 'partir', why: 'The six-person walk runs on it. In the seed.' },
  { id: 'fr.sons.verbes-essentiels.041', fr: 'sortir', why: 'The scene and the transitive pair. In the seed.' },
  { id: 'fr.a1.transports-quotidiens.044', fr: 'monter', why: 'REPAIRED: [mohn-TAY] to [mohⁿ-TAY]. ABSENT FROM THE SEED.' },
  { id: 'fr.a1.transports-quotidiens.045', fr: 'descendre', why: `Already [day-SAHⁿDR]: ${unitRef(RE_UNIT)} repaired it. In the seed.` },
  { id: 'fr.sons.verbes-essentiels.021', fr: 'rester', why: 'The one that neither moves nor changes. ABSENT FROM THE SEED.' },
  { id: 'fr.sons.verbes-essentiels.044', fr: 'tomber', why: 'REPAIRED: [tohn-BAY] to [tohⁿ-BAY]. ABSENT FROM THE SEED.' },
  { id: 'fr.sons.verbes-essentiels.081', fr: 'naître', why: 'In the seed, and [NEHTR] is already the house shape.' },
  { id: 'fr.sons.verbes-essentiels.082', fr: 'mourir', why: 'The one with an audible feminine. In the seed.' },
  { id: 'fr.sons.verbes-essentiels.043', fr: 'entrer', why: 'ALREADY [ahⁿ-TRAY]. The brief says this one needs repairing and it does not.' },
  { id: 'fr.a2.verbes.016', fr: 'rentrer', why: 'ALREADY [rahⁿ-TRAY]. The brief says this one needs repairing and it does not.' },
  { id: 'fr.sons.verbes-essentiels.085', fr: 'retourner', why: 'ABSENT FROM THE SEED.' },
  { id: 'fr.a2.verbes.013', fr: 'arriver', why: 'In the seed, in this lesson\'s own theme.' },
  { id: 'fr.sons.verbes-essentiels.017', fr: 'passer', why: 'The verb the mnemonic misses. ABSENT FROM THE SEED.' },

  // The two auxiliaries, because the whole lesson is a choice between them.
  { id: 'fr.sons.verbes-essentiels.001', fr: 'être', why: 'The first word this lesson is about. In the seed.' },
  { id: 'fr.sons.verbes-essentiels.002', fr: 'avoir', why: `The other one, so the contrast has a card. ${Cap(unitRef(PASSE_UNIT, 'a2'))}'s. In the seed.` },

  // The three compounds the generalisation mission uses.
  { id: 'fr.sons.verbes-essentiels.083', fr: 'devenir', why: 'A letter of the mnemonic and a verb this lesson never lists. In the seed, against a prediction that it would not be.' },
  { id: 'fr.sons.verbes-essentiels.084', fr: 'revenir', why: 'The same, and the one the conversation uses. The deplacements copy carries an ipa with no slashes round it and validateDensity refuses that; this one is slashed. In the seed, against a prediction that it would not be.' },
  { id: 'fr.sons.verbes-essentiels.086', fr: 'repartir', why: 'NOT a letter of the mnemonic, which is the point of the mission. ABSENT FROM THE SEED.' },

  // The published word behind the one audible feminine, and the transitive noun.
  { id: 'fr.sons.adjectifs-essentiels.161', fr: 'mort', why: `The past form of mourir, published as an ordinary describing word. In the seed, and it is the ${unitRef('a2.03')} link made literal.` },
  { id: 'fr.a2.maison.022', fr: 'sortir la poubelle', why: 'The transitive sortir, published with a respelling. The brief\'s own example, imported rather than invented. In the seed, against a prediction that it would not be.' },
];

export const IMPORTED_IDS: readonly string[] = IMPORTED.map((i) => i.id);
export const EXPECTED_IMPORTED = 22;

/** Rows read and REFUSED, with the reason, so a later author does not re-open
 *  the same question. */
export const READ_NOT_IMPORTED: readonly { id: string; fr: string; why: string }[] = [
  { id: 'fr.b2.musees.048', fr: 'la nature morte', why: 'Carries gender=f. It is a multi-word phrase so it would pass endingPopulation, and it is B2 and about painting, so the card would teach a still life rather than a verb ending. Its respelling [lah nah-TÜR MOHRT] is READ OFF for the audible-feminine claim and the row is not carried.' },
  { id: 'fr.b2.argot-des-jeunes.029', fr: 'tomber', why: `Carries gender=m on a single-word row, which is exactly what ${unitRef('a1.03')} measures. Its respelling is [tohn-BAY] and it is broken, and it is left alone.` },
  { id: 'fr.b1.verbes-du-quotidien.010', fr: 'Elle a sorti la poubelle avant que les voisins arrivent.', why: 'THE BRIEF\'S OWN EXAMPLE SENTENCE, and it exists. B1, no respelling, and a subjunctive in the subordinate clause, so a receptive A2 card built on it teaches two things it is not allowed to. The A2 naming phrase fr.a2.maison.022 is imported instead.' },
  { id: 'fr.sons.faux-amis.014', fr: 'passer un examen', why: 'The faux-ami, respelled [pah-SAY UHN ehg-zah-MAN], and both nasals are plain n. Repairing a row this lesson does not otherwise need is scope it did not have; the transitive card authors its own sentence.' },
  { id: 'fr.a1.rp-recits-temps.038', fr: 'Ce matin, je suis allé chez le médecin.', why: `One of 205 published sentences with être in front of an agreed form, and not one of the 205 carries a respelling. ${Cap(unitRef('a2.13'))} §1: evidence is not cards. The whole paradigm is authored for that reason and this row is the evidence, not the card.` },
  { id: 'fr.a1.deplacements.045', fr: 'descendre', why: `A second copy at [day-SAHN-druh], broken. The imported copy is the one ${unitRef('a2.11')} repaired.` },
  { id: 'fr.a1.douane-et-immigration.066', fr: 'entrer', why: 'A second copy at [ahn-TRAY], broken. The imported copy already holds the house value.' },
];

/* ─── THE RESPELLING REPAIRS ────────────────────────────────────────────────
 *
 * §8: ALL FIVE candidates are VISIBLE to `hasPlainNasalFor`, against a brief and
 * a corrections file that both call four of them invisible. Three already hold
 * the house value, so there are TWO repairs and the INVISIBLE table is empty.
 *
 * a2.17 §14.1 asks for one table where every entry carries the value you get by
 * repairing only what the checker reports, with three assertions through the
 * real function: stored is flagged, half is not, final is not. Here `half` and
 * `to` are the same string on both rows, because neither is mixed and neither
 * needs a house convention the minimal repair does not reach. `blind` and
 * `house` are both false and `(half !== to) === (blind || house)` holds.        */

export type Repair = {
  readonly id: string;
  readonly fr: string;
  readonly from: string;
  /** The value you get by repairing ONLY what the checker reports. */
  readonly half: string;
  readonly to: string;
  /** The checker cannot see one of its nasals. */
  readonly blind: boolean;
  /** The minimal repair does not reach the house convention. */
  readonly house: boolean;
  readonly readOff?: string;
  readonly readOffToken?: string;
  readonly why: string;
};

export const REPAIRS: readonly Repair[] = [
  {
    id: 'fr.a1.transports-quotidiens.044',
    fr: 'monter',
    from: 'mohn-TAY',
    half: 'mohⁿ-TAY',
    to: 'mohⁿ-TAY',
    blind: false,
    house: false,
    readOff: 'fr.a1.routines.018',
    readOffToken: 'rahⁿ',
    why: 'THE BRIEF AND CORRECTIONS §11 BOTH CALL THIS INVISIBLE AND IT IS FLAGGED. The n ends the token `mohn` because a hyphen follows it, which is the opposite of the PRAHNDR shape. The superscript form is read off fr.a1.routines.018, which holds rahⁿ-TRAY in the same position.',
  },
  {
    id: 'fr.sons.verbes-essentiels.044',
    fr: 'tomber',
    from: 'tohn-BAY',
    half: 'tohⁿ-BAY',
    to: 'tohⁿ-BAY',
    blind: false,
    house: false,
    readOff: 'fr.sons.verbes-essentiels.043',
    readOffToken: 'ahⁿ',
    why: 'The same shape and the same correction. Read off entrer, which is in the same theme and already holds the house value.',
  },
];

export const ALL_REPAIRS = REPAIRS;
export const RESPELL_ADDITIONS: readonly { id: string; to: string; why: string }[] = [];

/** Rows found broken and LEFT ALONE, because this lesson does not display them.
 *  a2.20 §4 did the same with seven. Invariants §9: repair only what breaks a
 *  stated rule on a screen this lesson draws. */
export const NOT_REPAIRED: readonly { id: string; fr: string; respell: string }[] = [
  { id: 'fr.a1.deplacements.044', fr: 'monter', respell: 'mohn-TAY' },
  { id: 'fr.a1.rp-voyage.038', fr: 'monter', respell: 'mohn-TAY' },
  { id: 'fr.a1.deplacements.045', fr: 'descendre', respell: 'day-SAHN-druh' },
  { id: 'fr.a1.rp-voyage.039', fr: 'descendre', respell: 'day-SAHN-druh' },
  { id: 'fr.a1.douane-et-immigration.066', fr: 'entrer', respell: 'ahn-TRAY' },
  { id: 'fr.a1.deplacements.152', fr: 'rentrer', respell: 'rahn-TRAY' },
  { id: 'fr.b2.argot-des-jeunes.029', fr: 'tomber', respell: 'tohn-BAY' },
];

/** THE ONE BLIND NASAL IN AN AUTHORED STRING, asserted BY NAME and in BOTH
 *  DIRECTIONS: the stored value is clean, and breaking the superscript produces
 *  a value the checker STILL calls clean. The day it improves, the second
 *  assertion goes red instead of the list going quietly dead.
 *
 *  `ensemble` is /ɑ̃.sɑ̃bl/ and the second nasal is followed by B inside its
 *  token, which is exactly a2.11's PRAHNDR shape. */
export const BLIND_NASALS: readonly { id: string; fr: string; good: string; broken: string }[] = [
  {
    id: 'fr.a2.verbes.686',
    fr: 'Vous êtes arrivés ensemble ?',
    good: 'voo zeht zah-ree-VAY ahⁿ-SAHⁿBL',
    broken: 'voo zeht zah-ree-VAY ahⁿ-SAHNBL',
  },
];

export const EXPECTED_NASALS_SEEN = 21;
export const EXPECTED_NASALS_MISSED = 1;

/** THE FALSE-POSITIVE DIRECTION, AND THIS BUILD MET IT. Invariants §3 records
 *  `jaune`, `automne` and `la saison`; corrections §6 says the shape is real but
 *  rarer and asks builds to look for it and report the absence. There is no
 *  absence to report here.
 *
 *  **`nous sommes` IS A REAL /m/ AND THE CHECKER READS IT AS A NASAL.**
 *  `sommes` is /sɔm/ and has no nasal vowel in it at all, so a superscript there
 *  would teach a sound that is not in the word. Measured through the real
 *  function on all four rows that carry it:
 *
 *      noo sohm pahr-TEE TOH      FLAGGED
 *      noo som  pahr-TEE TOH      clean
 *      noo somm pahr-TEE TOH      clean, and the house shape
 *
 *  The repair is the one invariants §3 prescribes for `automne`: DOUBLE THE
 *  CONSONANT so the respelling has no token-final vowel-plus-M. `o-TONN` is the
 *  precedent and `somm` is the same move.
 *
 *  AND THE SINGLE-M FORM IS CLEAN TOO, which is worth recording: the trigger is
 *  not simply "a vowel then an m at the end of a token", because `som` passes
 *  and `sohm` does not. This build did not chase the mechanism; it recorded the
 *  measurement and took the shape invariants §3 already blesses. */
export const FALSE_POSITIVES: readonly { fr: string; word: string; flagged: string; fixed: string; why: string }[] = [
  {
    fr: 'Nous sommes partis tôt.',
    word: 'sommes',
    flagged: 'noo sohm pahr-TEE TOH',
    fixed: 'noo somm pahr-TEE TOH',
    why: '`sommes` is /sɔm/ with a real m and no nasal vowel. A superscript would teach a sound the word does not have, so the fix is the doubled consonant invariants §3 uses for `automne`.',
  },
];

/** Candidates tried and NOT met, so the absence is reported rather than left as
 *  a silence. */
export const FALSE_POSITIVE_CANDIDATES: readonly string[] = [
  'la maison', 'minuit', 'la semaine', 'professeur',
];
export const EXPECTED_FALSE_POSITIVES = 0;
export const EXPECTED_FALSE_POSITIVES_FOUND = 1;

/* ─── THE MEASUREMENTS THE MANIFEST RE-RUNS ─────────────────────────────────*/

export const PARTICIPLE_DECISION = {
  isCorpusItem: false,
  settledBy: PASSE_UNIT,
  agreedBy: `${Cap(unitRef(IRREGULAR_UNIT))} and ${UNIT.id}`,
  authoredHere: 0,
  /** Sixty cells, fifteen verbs, four each. */
  cellsChecked: 60,
  /** Agreed cells existing as bare headwords anywhere. Must be zero. « mort »
   *  is excluded and imported deliberately: it is published as an ordinary
   *  describing word rather than as a past form on a card. */
  agreedCellsAsHeadwords: 0,
  why: `Doctrine §E, settled by ${unitRef('a2.05')}, agreed by ${unitRef('a2.20')}, and inherited here without reopening. An agreed cell is further from a corpus item than a bare form: allée and parties and venues are not words in their own right in any useful sense.`,
} as const;

/** Measured 2026-08-14 and RE-MEASURED by the manifest on every regeneration.
 *
 *  `corpusWide` counts every published sentence putting a form of être in front
 *  of any of the sixty cells. `cards` counts the subset that is a1 or a2 AND
 *  carries a respelling, which is the pool this lesson could have imported from;
 *  `cardsShowingAnEnding` is the figure that decided the build, and it is ZERO.
 *
 *  The four cards are `fr.a2.expressions-argot.003` « c'est mort » and `.021`
 *  « c'est parti », which are idioms with no past tense in them at all, and
 *  a2.20's own `fr.a2.verbes.620` and `.621`, which are masculine singular
 *  DELIBERATELY so that this lesson could introduce agreement against a clean
 *  background. Not one published card in the app shows a second word with an
 *  ending on it. */
export const PARADIGM_EVIDENCE = {
  theme: 'rp-recits-temps',
  themeRows: 487,
  themeWithEtre: 91,
  themeRespelled: 0,
  corpusWide: 466,
  cards: 4,
  cardsShowingAnEnding: 0,
  claim: 'Four hundred and sixty-six published sentences already put être in front of one of these second words, laid out in one theme as a person walk, and not one of them is a card a learner could say.',
} as const;

export const EVIDENCE_LINE =
  'These are not rare. Four hundred and sixty-six sentences in this app already put être in front of one of these second words, and all four spellings of allé are among them.';

/** THE SEED CUT, PREDICTED HERE AND MEASURED BY THE MERGE. a2.05 §6 says
 *  predict nothing about the cut and measure it, and a2.20 mispredicted its own
 *  by four in the other direction. Both directions are reported. */
export const ABSENT_FROM_SEED: readonly string[] = [
  'fr.a1.transports-quotidiens.044',
  'fr.sons.verbes-essentiels.021',
  'fr.sons.verbes-essentiels.044',
  'fr.sons.verbes-essentiels.085',
  'fr.sons.verbes-essentiels.017',
  'fr.sons.verbes-essentiels.086',
];

/** MISPREDICTED, AND THE SURPRISE CHECK IS WHAT CAUGHT IT. This build's first
 *  list held nine and the merge measured six: `devenir`, `revenir` and
 *  « sortir la poubelle » are all IN the cut. a2.20 mispredicted its own by four
 *  in the other direction, and a2.05 §6 says predict nothing about the cut and
 *  measure it. Three consecutive builds have now been wrong about it, which is
 *  the argument for the surprise check rather than for a better prediction. */
export const MISPREDICTED_AS_ABSENT: readonly string[] = [
  'fr.sons.verbes-essentiels.083',
  'fr.sons.verbes-essentiels.084',
  'fr.a2.maison.022',
];

/** a1.03's measured ending population, off the SEED. A CARRY is what moves it,
 *  which is the half the batch cannot see (a2.04's ledger amendment §0), so the
 *  merge measures it before and after and refuses any movement at all. */
export const A103_SEED_POPULATION = 1890;

export const EXPECTED_REPAIRS = 2;
export const EXPECTED_TERMS = 8;
export const EXPECTED_TRAP_DRILLS = 2;
export const EXPECTED_DRILLS = 12;
export const EXPECTED_TRIGGERS = 6;

/** a2.19 §3 measured the sheet's own title cut at 37 in the header bar, a2.19
 *  measured a sheet table cell at twelve, and a2.04 measured a four-column sheet
 *  table clipping. */
export const SHEET_TITLE_MAX = 37;
export const SHEET_CELL_MAX = 12;
export const SHEET_COLS_MAX = 3;

/** a2.13, corrected to a WIDTH by a2.14 §13: a mission-row title is cut at 27. */
export const TITLE_MAX = 27;

/* ─── SHAPE CONSTANTS THE GUARDS READ ───────────────────────────────────────*/

export const EXPECTED_SECTIONS = 25;
export const EXPECTED_ACTS = 6;
export const EXPECTED_QUESTIONS = 36;

/** Doctrine §B.5: if the act structure gives the paradigm more missions than the
 *  Owns, the wrong lesson got built. EIGHT against THREE. */
export const OWNS_SECTIONS = 8;
export const WHICH_VERBS_SECTIONS = 3;

/** Doctrine §F gives 19 to 24 and this lesson ships 25. Declared rather than
 *  hidden, as a2.05's 26 and a2.20's 27 were. */
export const SECTION_OVERRUN_REASON =
  'The canDo has two halves and the Owns is the second one. Three sections say which verbs and eight teach the ending, and the eight are the lesson: the four cells, the bookend, the borrowed rule, the six persons, the contrast with avoir, the one audible feminine, the generalisation and the boundary. Folding those into a range set by a lesson with one half turns each of them into a card.';

/** FOUND ON A PIXEL 6 BY a2.20 AND INHERITED: a `cardDeck` hint is ONE LINE and
 *  ellipsises. Measured at 64 characters shown of 71; the budget is set below
 *  the measurement rather than at it. */
export const HINT_MAX = 60;

/** a2.03 §3: three term chips fit if the three labels plus separators come to 37
 *  or fewer. */
export const TERM_ROW_MAX = 37;

/** a2.20 §3, found on a Pixel 6: a question quoting a corpus row keeps the row's
 *  own full stop, so a screen reads « ... peur.. ». The guard refuses EXACTLY
 *  two consecutive dots, never three, so an ellipsis is left alone. */
export const DOUBLE_STOP = '..';
