// The a2.11 corpus: what this lesson had to author, what it imports, and what
// its brief got wrong.
//
// THIS FILE IS THE SINGLE SOURCE OF TRUTH for the 24 authored entries below and
// for every respelling a2.11 puts on a screen. The lesson body reads `fr`, `ipa`,
// `respell` and `en` FROM HERE and never restates them.
//
// ── WHAT THE BRIEF GOT WRONG, MEASURED 2026-08-11 ──────────────────────────
//
// 1. "A reference sheet is probably unnecessary: a2.01's sheet should cover the
//    ending set for all three groups. Check whether it does, and extend it."
//
//    IT DOES NOT, AND IT COULD NOT BE EXTENDED EVEN IF IT DID. a2.01 ships
//    `sheet.a2.01.endings`, titled "The -ER endings, in full", holding one ending
//    set; a2.10 ships `sheet.a2.10.endings`, "The -IR endings, in full". Neither
//    knows about the others, because both were written before the group they
//    would have had to cover existed.
//
//    And a sheet is not addressable across lessons. `schema.ts:3490` collects
//    sheet ids from the LESSON being validated and fails any section naming one
//    it does not declare, and `lesson-contract.test.ts:91` re-checks it against
//    `lesson.sheets`. So "extend a2.01's sheet" is not a thing this build could
//    have done at any price. See SHEET_DECISION below for what it did instead.
//
// 2. "il vend takes no written ending at all ... After two lessons of adding
//    letters to a stem, the learner has to remove one."
//
//    THE LEARNER REMOVES NOTHING, AND THE MACHINE HAS NOT CHANGED AT ALL.
//    parler minus its last two letters is parl-. finir minus its last two is
//    fin-. vendre minus its last two is vend-. All three groups cut exactly two
//    letters, and the -RE stem is then used whole. What is new is one CELL of the
//    ending set, not a new operation, and this build says so on the machine card
//    rather than teaching a deletion. The brief's own rejected reframe ("-re verbs
//    drop the ending in the third person") was rejected for inviting a deletion;
//    the framing above invites the same one a paragraph earlier.
//
// 3. "je vends, tu vends, il vend sound identical ... this is the strongest
//    dictée candidate in batch 1." TRUE, AND THE COMPLETION IS SHARPER THAN THE
//    CLAIM. Counted across all 27,499 published sentences on 2026-08-11:
//
//      je vends       0        il vend         3
//      tu vends       0        ils vendent     3
//      elle vend      0        elle attend    36
//      on vend        0        nous attendons 21
//      vous vendez    0        j'attends      16
//      elles vendent  0        ils répondent   0
//      ils entendent  0        il rend         0
//      ils rendent    0        ils descendent  0
//
//    TWO OF THE THREE MEMBERS OF THE TRIPLE THIS LESSON EXISTS TO INSTALL DO NOT
//    OCCUR ONCE IN THE CORPUS. Neither does the plural of four of the seven
//    verbs. The forms a learner can settle by ear are attested and the forms only
//    the page can settle are not, which is the whole authoring case for this
//    lesson in one table.
//
// 4. "author-verbes-batch.ts claims vendre, attendre and répondre were already
//    placed. Confirm and import rather than authoring." CONFIRMED AND
//    UNDERSTATED BY MORE THAN HALF. All SEVEN regular -RE verbs exist, plus both
//    verbs the lesson names as exceptions:
//
//      vendre 5 rows · attendre 8 · répondre 7 · entendre 1 · perdre 2
//      rendre 1 · descendre 3 · prendre 3 · mettre 1
//
//    THIS LESSON AUTHORS NOT ONE INFINITIVE. And the ledger's §0 warning stands:
//    `pnpm content:verbes` would overwrite two of a2.01's imports with nouns.
//    Nobody runs it.
//
// 5. "Second trap: prendre and mettre look like regular -re verbs and are not
//    ... They are a2.15 (seq 9)." CONFIRMED, and it is the only one of the four
//    hand-off claims that is. All 76 curriculum units were read out of
//    `content_units` on 2026-08-11 and searched. a2.15's body names prendre,
//    mettre and battre; a2.24's canDo is "Can replace an indirect object with lui
//    or leur and knows which verbs take à", which is where `répondre à` belongs.
//
//    BUT `descendre`'s AUXILIARY SPLIT IS OWNED BY NOBODY. The brief says "That
//    is a2.21 (seq 18)" and marks it UNVERIFIED. a2.21 exists, at seq 18, titled
//    "The Passé Composé with Être", and its body does not contain the string
//    `descendre`, `monter`, or any other verb of the split. NOR DOES ANY OTHER
//    UNIT AT ANY LEVEL: not one of the 76 units names descendre, vendre,
//    attendre, entendre, perdre, rendre or répondre anywhere in its body.
//
//    a2.11 is the only unit in the curriculum that owns a regular -RE verb at
//    all. That is smaller than the hole a2.10 found, because a2.21's topic will
//    plainly cover descendre when it is written, but it is reported rather than
//    assumed: nothing in the data today says so.
//
// ── THE MEASUREMENT THAT DECIDED THE SHAPE OF THE LESSON ───────────────────
//
// `il vend` is /il vɑ̃/ and `ils vendent` is /il vɑ̃d/. THE STEM-FINAL D IS
// SILENT AT THE END OF A WORD AND SAID IN THE MIDDLE OF ONE, so the -RE plural is
// audible against the singular in exactly the way the -IR plural is.
//
// That is a problem before it is a fact. a2.10, one lesson ago, owns "The plural
// puts a sound on the end", and it is TRUE HERE TOO. A lesson built on the ear
// would be a2.10 again with different letters, which is precisely the failure the
// brief warns about in its first paragraph.
//
// So the phonetics force the answer: THIS LESSON IS ABOUT THE PAGE. Its Owns is
// the one cell in the whole three-group system where the learner writes nothing,
// and the audible half is given ONE mission (s12-dsound) and one glossary term
// rather than the reframe. See verbes-re-terms.ts for the four reframes weighed
// and the reason "The plural is where the D wakes up" was rejected despite being
// true, short and teachable.
//
// ── What the corpus could not supply, and so what is authored ──────────────
//
// 24 rows:
//
//   paradigm  6   the vendre frame, all six persons, one frame word, and four of
//                 the six do not exist anywhere in the corpus
//   cross     2   `Il parle ici.` and `Il finit ici.`, so the THREE THIRD PERSONS
//                 of the three regular groups sit in one frame with nothing
//                 moving but the verb
//   hidden    3   the singular triple on a second verb
//   apply    13   the seven verbs used by a person, across all seven persons
//
// THE TWO CROSS ROWS ARE THE ONLY PLACE THIS BUILD AUTHORS A NEIGHBOUR'S VERB,
// and it is deliberate. a2.01 ships `Il parle français.` and a2.10 ships
// `Il finit tôt.`; putting those two beside `Il vend ici.` would compare three
// frames as well as three endings, and the whole claim of the headline screen is
// that ONLY the verb moves. a2.10 authored all six of its paradigm rows for the
// same reason rather than reuse three published `finir` sentences. Two extra
// sentences in a 27,000-sentence corpus is not a defect; a three-way comparison
// built out of three different objects is.
//
// ── The second triple is répondre, and attendre CANNOT carry one ───────────
//
// The brief's natural second verb is `attendre`, and it does not work. A triple
// is worth authoring only if the three respellings are ONE STRING once the
// pronoun token comes off, and `attendre` begins with a vowel:
//
//   j'attends   /ʒa.tɑ̃/     elision, so the pronoun is not a token of its own
//   tu attends  /ty a.tɑ̃/
//   il attend   /i.la.tɑ̃/    liaison, so the l moves across into the verb
//
// Three different pronoun boundaries, and nothing to compare. `répondre` begins
// with a consonant and gives `zhuh ray-pohⁿ VEET`, `tü ray-pohⁿ VEET`,
// `eel ray-pohⁿ VEET`: one tail, three spellings. `attendre` still earns two rows
// in the apply family, where the liaison is an ordinary fact rather than the
// thing being measured.
//
// ── kind: every authored entry is a `sentence`, deliberately ───────────────
//
// The ledger settled this for the level: only infinitives and full sentences are
// corpus rows, never a bare conjugated form. A bare `vend` as a row would be
// served by the flashcard hub as a card with no subject, and this lesson's whole
// subject is which subject a form belongs to.
//
// flashhub-coverage.test.ts also fails the build when two NON-sentence rows in
// one theme share an `fr`, and this lesson authors near-identical pairs on
// purpose (`Il vend ici.` against `Ils vendent ici.`). They are sentences, they
// are stored as sentences, and that rule leaves them alone.
//
// No authored row carries `gender` and none is a single word, so nothing here can
// join a1.03's measured ending population. The batch proves that through the real
// `endingPopulation` rather than claiming it.
//
// ── THE NASAL CHECKER IS BLIND TO ELEVEN OF THIS LESSON'S NASALS ───────────
//
// Measured 2026-08-11 by breaking every superscript back to a plain n, one at a
// time, and asking `hasPlainNasalFor` whether it noticed:
//
//   25 nasals it can see.  11 it cannot.
//
// The eleven have one shape between them: A NASAL FOLLOWED BY A D INSIDE THE
// TOKEN. The checker needs the n or m to END a space-delimited token, and every
// regular -RE stem ends in d, so every plural form and every infinitive of this
// lesson's seven verbs is invisible to it:
//
//   vahⁿd  tahⁿd  tahⁿd  rahⁿd  sahⁿd            the five authored plurals
//   VAHⁿDR  TAHⁿDR  POHⁿDR  TAHⁿDR  RAHⁿDR  SAHⁿDR   the six headwords
//
// `entendre` is the whole problem on one row. `ahn-TAHNDR` IS flagged, because
// its FIRST nasal ends a token; `ahⁿ-TAHNDR` is NOT, because its second does not.
// A repair that trusts the checker fixes the half it can see, produces a value it
// calls clean, and leaves the wrong half in place. Every one of the eleven is
// asserted BY NAME in the batch, the merge and the test.
//
// THE CHECKER'S OTHER BLIND SPOT DOES NOT ARISE HERE. Invariants §3 records that
// it false-positives on a real /n/ after a vowel. Four candidates were tried
// against this lesson's strings (`une`, `pommes`, `la semaine`, `la panne`) and
// not one is flagged, so this build has no row in that direction to protect. That
// is reported rather than left as a silence: the absence was looked for.
//
// ── What is NOT here, and why ──────────────────────────────────────────────
//
// - NO CONJUGATED prendre, mettre OR battre, right or wrong. They are named on
//   one card (s16-notmine) and built nowhere. See NOT_THIS_FAMILY_FORMS and
//   OVER_GENERALISED_FORMS, and the note on why the wrong form is absent too.
// - NO PASSÉ COMPOSÉ. `descendre` decides its auxiliary by whether it has an
//   object, which is a2.21. Every authored row is a simple present.
// - NO INDIRECT OBJECT. `répondre à` is a2.24 (seq 22), so `répondre` is used
//   here with no `à` in any authored row: `Je réponds vite.`, not
//   `Je réponds à la question.`
// - NO STEM-CHANGING -ER VERB. a2.09 owns those.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ─── The id block ─────────────────────────────────────────────────────────
 *
 * fr.a2.verbes.221 .. .260, allocated in A2-BATCH-1-LEDGER.md §2. `fr.a2.verbes`
 * held 202 rows with max .486 when this block was claimed, which is exactly the
 * figure the ledger records after a2.10.l2, and .221..260 was empty. The batch
 * checks the row COUNT as well as the maximum, because a concurrent lesson
 * landing below the top is invisible to a highest-id check, which is how a1.20
 * lost an hour. The maximum is no use here at all: a2.10.l2 took .461..500, above
 * the whole batch-1 reservation, so `max` has been past this block since before
 * it was claimed. */
export const OWNED_ID_RANGE = { from: 'fr.a2.verbes.221', to: 'fr.a2.verbes.260' } as const;

/** The theme this lesson writes into. One decision, made in the ledger. */
export const THEME = 'verbes';

/** A corpus entry plus the lesson-facing display data the renderer needs. */
export type ReSentence = Omit<Item, 'drills'> & {
  /** Which person this sentence puts on screen, in paradigm order. */
  person: 'je' | 'tu' | 'il' | 'nous' | 'vous' | 'ils' | 'on';
  /** What the learner WRITES after the stem in this cell. THE EMPTY STRING IS THE
   *  ENTIRE LESSON, so it is stored rather than restated per screen: a card that
   *  hand-typed it could quietly grow a letter and nothing would notice. */
  ending: string;
  /** Is the stem-final d audible in this form? The sound half of the paradigm,
   *  stored so the one mission that teaches it reads the same data as the drill
   *  that scores it. */
  dSounds: boolean;
  /** Which teaching family. Drives the drill pools and the deckTranche slices so
   *  neither restates a word list. */
  family: 'paradigm' | 'cross' | 'hidden' | 'apply';
  drills: Item['drills'];
};

/** Speakable: the mic-scored deck runs `voiceflash`, and an item without it
 *  renders in a speak mission as a card the mic cannot score. */
const S: Item['drills'] = ['sentence', 'flashcard', 'voiceflash', 'review'];
/** Speakable and spellable. Only on rows the dictée names, and every one of those
 *  is at or under the 16-letter limit so it spells from LETTERS. */
const SD: Item['drills'] = ['sentence', 'flashcard', 'voiceflash', 'review', 'dictation'];

/** The 24 authored entries, in sequence order. */
export const VERBES_RE: ReSentence[] = [
  /* ── paradigm: one verb, one frame, nothing moving but the person ─────────
   *
   * Six rows and six authored. FOUR OF THE SIX DO NOT EXIST ANYWHERE IN THE
   * CORPUS: `je vends`, `tu vends`, `vous vendez` and `elles vendent` are each
   * zero across 27,499 published sentences, and the two that do exist carry their
   * own objects. See the header.
   *
   * `ici` is the frame word and it was chosen by measurement. Every one of these
   * six is a dictée target, because the spellings the ear cannot settle are the
   * whole second half of the lesson, and `dicteeMode()` switches to WORD tiles
   * above 16 letters, where every real word arrives pre-spelled. With `ici` the
   * longest of the six is 14 letters and all six spell from letters.
   *
   * .221, .222 and .223 CARRY THE SAME RESPELLING once the pronoun token is
   * removed. That is not a copy-paste slip: it is the fact the lesson exists to
   * teach the page half of, and the batch asserts the three are EQUAL rather than
   * merely present. */
  { id: 'fr.a2.verbes.221', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je vends ici.', en: 'I sell here.', ipa: '/ʒə vɑ̃ i.si/', respell: 'zhuh vahⁿ ee-SEE', person: 'je', ending: '-s', dSounds: false, family: 'paradigm', tags: ['re-verb', 'paradigm', 'singular', 'nasal'], drills: SD, audioRef: null, version: 1, notes: 'Said exactly like Tu vends ici and Il vend ici. Three spellings, one sound, and the d is silent in all three.' },
  { id: 'fr.a2.verbes.222', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Tu vends ici.', en: 'You sell here.', ipa: '/ty vɑ̃ i.si/', respell: 'tü vahⁿ ee-SEE', person: 'tu', ending: '-s', dSounds: false, family: 'paradigm', tags: ['re-verb', 'paradigm', 'singular', 'nasal'], drills: SD, audioRef: null, version: 1, notes: 'The same -s tu took on an -er and an -ir verb, and it is silent here too.' },
  { id: 'fr.a2.verbes.223', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Il vend ici.', en: 'He sells here.', ipa: '/il vɑ̃ i.si/', respell: 'eel vahⁿ ee-SEE', person: 'il', ending: '', dSounds: false, family: 'paradigm', tags: ['re-verb', 'paradigm', 'singular', 'bare', 'nasal'], drills: SD, audioRef: null, version: 1, notes: 'THE BARE FORM. Nothing is written after the stem, and nothing is missing.' },
  { id: 'fr.a2.verbes.224', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous vendons ici.', en: 'We sell here.', ipa: '/nu vɑ̃.dɔ̃ i.si/', respell: 'noo vahⁿ-dohⁿ ee-SEE', person: 'nous', ending: '-ons', dSounds: true, family: 'paradigm', tags: ['re-verb', 'paradigm', 'plural', 'nasal'], drills: SD, audioRef: null, version: 1, notes: `The same -ons as ${unitRef('a2.01')} and ${unitRef('a2.10')}, and the d in front of it is said. Out loud most rooms say on vend instead.` },
  { id: 'fr.a2.verbes.225', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Vous vendez ici.', en: 'You sell here.', ipa: '/vu vɑ̃.de i.si/', respell: 'voo vahⁿ-day ee-SEE', person: 'vous', ending: '-ez', dSounds: true, family: 'paradigm', tags: ['re-verb', 'paradigm', 'plural', 'nasal'], drills: SD, audioRef: null, version: 1, notes: 'The same -ez, and the d is said in front of it as well.' },
  { id: 'fr.a2.verbes.226', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Ils vendent ici.', en: 'They sell here.', ipa: '/il vɑ̃d i.si/', respell: 'eel vahⁿd ee-SEE', person: 'ils', ending: '-ent', dSounds: true, family: 'paradigm', tags: ['re-verb', 'paradigm', 'plural', 'nasal'], drills: SD, audioRef: null, version: 1, notes: 'The -ent is silent and the d in front of it is not, so this is the one plural you can hear against Il vend ici.' },

  /* ── cross: the three third persons of the three regular groups ───────────
   *
   * THE OWNS, AND THE ONLY PLACE THIS LESSON AUTHORS A NEIGHBOUR'S VERB.
   *
   * One frame, three groups, and nothing moves but the verb and the letters after
   * it. Held beside `Il vend ici.` (.223), these three rows are the entire lesson
   * in three cells, which is what the brief asked the layout to be, and the
   * `ending` field on each is the column that carries it: `-e`, `-it`, and
   * nothing at all.
   *
   * Both are marked `dSounds: false` because neither verb has a stem-final d. The
   * field means what it says rather than "is the ending audible": `il parle` ends
   * on an audible L and `il finit` on an audible vowel, and neither has anything
   * to do with the d that makes the -RE plural audible. */
  { id: 'fr.a2.verbes.227', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Il parle ici.', en: 'He speaks here.', ipa: '/il paʁl i.si/', respell: 'eel parl ee-SEE', person: 'il', ending: '-e', dSounds: false, family: 'cross', tags: ['er-verb', 'cross-group', 'singular'], drills: SD, audioRef: null, version: 1, notes: `The -ER third person, from ${unitRef('a2.01')}. One letter after the stem, and it is silent.` },
  { id: 'fr.a2.verbes.228', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Il finit ici.', en: 'He finishes here.', ipa: '/il fi.ni i.si/', respell: 'eel fee-nee ee-SEE', person: 'il', ending: '-it', dSounds: false, family: 'cross', tags: ['ir-verb', 'cross-group', 'singular'], drills: SD, audioRef: null, version: 1, notes: `The -IR third person, from ${unitRef('a2.10')}. Two letters after the stem, and they are silent as well.` },

  /* ── hidden: the singular triple, on a second verb ────────────────────────
   *
   * One triple is a fact about vendre. Two make it a rule, and the second one has
   * to be a verb that begins with a CONSONANT: see the header for why `attendre`
   * cannot carry a triple.
   *
   * These three respellings are THE SAME STRING once the pronoun token is
   * removed, character for character, and SINGULAR_TRIPLES asserts it. The
   * spelling changes twice (réponds, réponds, répond) and the sound does not
   * change at all.
   *
   * `répondre` is used with no `à` anywhere in this lesson. It takes an indirect
   * object and that is a2.24, seq 22. */
  { id: 'fr.a2.verbes.229', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je réponds vite.', en: 'I answer quickly.', ipa: '/ʒə ʁe.pɔ̃ vit/', respell: 'zhuh ray-pohⁿ VEET', person: 'je', ending: '-s', dSounds: false, family: 'hidden', tags: ['re-verb', 'hidden', 'singular', 'nasal'], drills: SD, audioRef: null, version: 1, notes: 'Ends in -ds, and the d and the s are both silent.' },
  { id: 'fr.a2.verbes.230', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Tu réponds vite.', en: 'You answer quickly.', ipa: '/ty ʁe.pɔ̃ vit/', respell: 'tü ray-pohⁿ VEET', person: 'tu', ending: '-s', dSounds: false, family: 'hidden', tags: ['re-verb', 'hidden', 'singular', 'nasal'], drills: SD, audioRef: null, version: 1, notes: 'Spelled exactly like the je form and said exactly like it too.' },
  { id: 'fr.a2.verbes.231', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Il répond vite.', en: 'He answers quickly.', ipa: '/il ʁe.pɔ̃ vit/', respell: 'eel ray-pohⁿ VEET', person: 'il', ending: '', dSounds: false, family: 'hidden', tags: ['re-verb', 'hidden', 'singular', 'bare', 'nasal'], drills: SD, audioRef: null, version: 1, notes: 'One letter shorter than the other two and said the same way. The bare form on a second verb.' },

  /* ── apply: the seven verbs used by a person ──────────────────────────────
   *
   * Thirteen sentences across all seven persons and all seven verbs, so the
   * pattern is met as something people write rather than as a table that was
   * memorised. Simple present throughout.
   *
   * Five of the thirteen are the second half of a pair whose ONLY audible
   * difference is the stem-final d. Three of those five are also PRONOUN-BLIND
   * (`eel` against `eel`, `el` against `el`), which is what makes the one ear
   * mission in this lesson a real task rather than a pronoun quiz. */
  { id: 'fr.a2.verbes.232', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Elle attend le bus.', en: 'She is waiting for the bus.', ipa: '/ɛ.la.tɑ̃ lə bys/', respell: 'e la-tahⁿ luh BÜS', person: 'il', ending: '', dSounds: false, family: 'apply', tags: ['re-verb', 'apply', 'singular', 'liaison', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'The bare form again, and the l of elle moves across onto the verb because attendre begins with a vowel.' },
  { id: 'fr.a2.verbes.233', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Ils attendent le bus.', en: 'They are waiting for the bus.', ipa: '/il.za.tɑ̃d lə bys/', respell: 'eel za-tahⁿd luh BÜS', person: 'ils', ending: '-ent', dSounds: true, family: 'apply', tags: ['re-verb', 'apply', 'plural', 'liaison', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'The silent s of ils wakes up in front of the vowel, and the d wakes up in front of the -ent.' },
  { id: 'fr.a2.verbes.234', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Il entend le train.', en: 'He can hear the train.', ipa: '/i.lɑ̃.tɑ̃ lə tʁɛ̃/', respell: 'ee lahⁿ-tahⁿ luh TRAⁿ', person: 'il', ending: '', dSounds: false, family: 'apply', tags: ['re-verb', 'apply', 'singular', 'liaison', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'Three nasal vowels and not one N sound in the whole sentence.' },
  { id: 'fr.a2.verbes.235', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Ils entendent le train.', en: 'They can hear the train.', ipa: '/il.zɑ̃.tɑ̃d lə tʁɛ̃/', respell: 'eel zahⁿ-tahⁿd luh TRAⁿ', person: 'ils', ending: '-ent', dSounds: true, family: 'apply', tags: ['re-verb', 'apply', 'plural', 'liaison', 'nasal'], drills: S, audioRef: null, version: 1 },
  { id: 'fr.a2.verbes.236', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Elle rend le livre.', en: 'She is giving the book back.', ipa: '/ɛl ʁɑ̃ lə livʁ/', respell: 'el rahⁿ luh LEEVR', person: 'il', ending: '', dSounds: false, family: 'apply', tags: ['re-verb', 'apply', 'singular', 'nasal'], drills: S, audioRef: null, version: 1 },
  { id: 'fr.a2.verbes.237', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Elles rendent le livre.', en: 'They are giving the book back.', ipa: '/ɛl ʁɑ̃d lə livʁ/', respell: 'el rahⁿd luh LEEVR', person: 'ils', ending: '-ent', dSounds: true, family: 'apply', tags: ['re-verb', 'apply', 'plural', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'elle and elles are one sound, so the d at the end of the verb is the only evidence there is.' },
  { id: 'fr.a2.verbes.238', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je perds mes clés.', en: 'I lose my keys.', ipa: '/ʒə pɛʁ me kle/', respell: 'zhuh pehr may KLAY', person: 'je', ending: '-s', dSounds: false, family: 'apply', tags: ['re-verb', 'apply', 'singular'], drills: S, audioRef: null, version: 1, notes: 'perdre keeps an r in the stem and loses the d out loud, exactly like the others.' },
  { id: 'fr.a2.verbes.239', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous perdons du temps.', en: 'We are wasting time.', ipa: '/nu pɛʁ.dɔ̃ dy tɑ̃/', respell: 'noo pehr-dohⁿ dü TAHⁿ', person: 'nous', ending: '-ons', dSounds: true, family: 'apply', tags: ['re-verb', 'apply', 'plural', 'nasal'], drills: S, audioRef: null, version: 1 },
  { id: 'fr.a2.verbes.240', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Il descend ici.', en: 'He gets off here.', ipa: '/il de.sɑ̃ i.si/', respell: 'eel day-sahⁿ ee-SEE', person: 'il', ending: '', dSounds: false, family: 'apply', tags: ['re-verb', 'apply', 'singular', 'bare', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'The longest naming form in the set and the shortest third person: descendre gives descend and stops.' },
  { id: 'fr.a2.verbes.241', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Ils descendent ici.', en: 'They get off here.', ipa: '/il de.sɑ̃d i.si/', respell: 'eel day-sahⁿd ee-SEE', person: 'ils', ending: '-ent', dSounds: true, family: 'apply', tags: ['re-verb', 'apply', 'plural', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'ils is said exactly like il, so the d is carrying the whole sentence.' },
  { id: 'fr.a2.verbes.242', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Vous répondez vite.', en: 'You answer quickly.', ipa: '/vu ʁe.pɔ̃.de vit/', respell: 'voo ray-pohⁿ-day VEET', person: 'vous', ending: '-ez', dSounds: true, family: 'apply', tags: ['re-verb', 'apply', 'plural', 'nasal'], drills: S, audioRef: null, version: 1 },
  { id: 'fr.a2.verbes.243', kind: 'sentence', level: 'a2', theme: THEME, fr: 'On vend des billets ici.', en: 'We sell tickets here.', ipa: '/ɔ̃ vɑ̃ de bi.jɛ i.si/', respell: 'ohⁿ vahⁿ day bee-YEH ee-SEE', person: 'on', ending: '', dSounds: false, family: 'apply', tags: ['re-verb', 'apply', 'on', 'singular', 'bare', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'on means we and takes the il form, so the spoken we takes the bare form as well.' },
  { id: 'fr.a2.verbes.244', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous vendons des billets.', en: 'We sell tickets.', ipa: '/nu vɑ̃.dɔ̃ de bi.jɛ/', respell: 'noo vahⁿ-dohⁿ day bee-YEH', person: 'nous', ending: '-ons', dSounds: true, family: 'apply', tags: ['re-verb', 'apply', 'plural', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'The written we, saying the same thing as the row above it.' },
];

/* ─── The seven ────────────────────────────────────────────────────────────
 *
 * NONE OF THESE IS AUTHORED. Every one already exists in Postgres and is imported
 * by id; see verbes-re-imported.ts for the recorded read, which the batch
 * verifies field by field before it writes anything.
 *
 * SEVEN AND NOT TEN, and that is a decision rather than a shortfall. a2.10 taught
 * ten regular -IR verbs and could have taught more. The regular -RE family is
 * genuinely smaller: past these seven the next candidates are `tondre`, `mordre`,
 * `fondre`, `pondre` and `dépendre`, and padding the set to ten would mean
 * teaching a learner at seq 4 how to say that a sheep is being sheared. Seven
 * verbs every learner meets in a month beats ten with three passengers.
 *
 * Ordered as the learner meets them: the one the paradigm runs on, then the two
 * the hidden and cross families use, then the four that arrive in the applied
 * sentences.                                                                  */
export const THE_SEVEN: readonly string[] = [
  'vendre', 'attendre', 'répondre', 'entendre', 'perdre', 'rendre', 'descendre',
];

/** The verbs that LOOK like this family and are not.
 *
 *  Named on exactly one card and conjugated nowhere. `prendre` on the vendre
 *  model produces `ils prendent`, which is wrong, and nothing in a lesson that
 *  ignored them would have stopped it.
 *
 *  MEASURED 2026-08-11: a2.15 (seq 9) names all three in its body and its canDo
 *  is "Can conjugate prendre, mettre and battre and recognise their compounds".
 *  This is the one hand-off claim in the brief that the data confirms outright. */
export const NOT_THIS_FAMILY: readonly string[] = ['prendre', 'mettre', 'battre'];

/** And their compounds, which look the same again and are the same lesson's. */
export const NOT_THIS_FAMILY_COMPOUNDS: readonly string[] = [
  'apprendre', 'comprendre', 'permettre', 'promettre', 'combattre',
];

/** The unit that owns them. Named by id, not by title: a boundary with no
 *  destination is a warning rather than a teaching. */
export const NOT_THIS_FAMILY_UNIT = 'a2.15';

/** CORRECT conjugated forms of that class, which must reach no PRODUCTION
 *  SURFACE. Naming the class is the mission; building it is a2.15's job.
 *
 *  Scoped to production surfaces rather than to every string, because the card
 *  that hands the class over has to be able to talk about it. A guard written
 *  over every string fires on legitimate context and gets deleted by the next
 *  author; invariants §1 records four ways that has already happened here.
 *
 *  WHAT IS DELIBERATELY NOT IN THIS LIST, and why. `met`, `mets`, `bat` and
 *  `bats` are left out: `bat` and `bats` are ordinary English words and every
 *  instruction line in this lesson is English, `mets` is an ordinary French noun,
 *  and `met` is one letter away from half the words in a distractor list. `prend`
 *  and `prends` ARE here, because neither has an innocent reading in an English
 *  sentence or a French one this lesson would write. */
export const NOT_THIS_FAMILY_FORMS: readonly string[] = [
  'prends', 'prend', 'prenons', 'prenez', 'prennent',
  'mettons', 'mettez', 'mettent',
  'battons', 'battez', 'battent',
  'apprends', 'apprend', 'apprenons', 'apprenez', 'apprennent',
  'comprends', 'comprend', 'comprenons', 'comprenez', 'comprennent',
  'permettent', 'promettent', 'combattent',
];

/** THE OVER-GENERALISED FORMS, banned EVERYWHERE and not merely on a production
 *  surface. These are what the vendre model produces when it is run on the
 *  boundary class.
 *
 *  `ils prendent` is the error the brief predicts and it is the one string this
 *  lesson must never put in front of anybody, in any frame. The usual move is a
 *  commonErrors card showing it in order to reject it, which is how a2.01 handled
 *  `je parles` and how THIS lesson handles `il vende`. It does not work here, and
 *  the difference is the same one a2.10 recorded: a commonErrors card can show
 *  `il vende` because the learner already holds `il vend` to replace it with.
 *  Nobody in this lesson holds `ils prennent`, because a2.15 is five units away
 *  and no lesson has taught it. Showing the wrong form would leave it in memory
 *  with nothing to overwrite it. So the boundary is taught as a boundary.
 *
 *  `prends`, `prend`, `mettons`, `mettez`, `mettent`, `battons`, `battez` and
 *  `battent` are NOT here, because the vendre model happens to produce the right
 *  answer for those cells. They are in NOT_THIS_FAMILY_FORMS instead: correct,
 *  and still not this lesson's to teach. */
export const OVER_GENERALISED_FORMS: readonly string[] = [
  'prendons', 'prendez', 'prendent',
  'apprendons', 'apprendez', 'apprendent',
  'comprendons', 'comprendez', 'comprendent',
  'metts', 'mett', 'batts', 'batt',
];

/* ─── The endings ──────────────────────────────────────────────────────────
 *
 * The set itself, derived nowhere else. The reference sheet, the tapTable and the
 * test all read THIS, so a table that hand-typed them would be free to drift from
 * the drill that scores them.
 *
 * IN THE LEDGER'S CANONICAL PRONOUN ORDER, and that is worth saying because
 * a2.10 had to depart from it. a2.10's contrast pair was two rows of the paradigm
 * itself, so it reordered the table by sound to put them side by side. This
 * lesson's contrast is between three DIFFERENT GROUPS and lives in a table of its
 * own (THREE_CELLS), which leaves the paradigm free to run je · tu · il · nous ·
 * vous · ils exactly as the ledger settled it.
 *
 * `write` is what the learner puts on the page and `ending` is the same thing as
 * data. The third row's `ending` is THE EMPTY STRING, and every guard in this
 * build that matters is ultimately about that one value. */
export const ENDINGS: { person: string; ending: string; write: string; dSounds: boolean }[] = [
  { person: 'je', ending: '-s', write: 'an s', dSounds: false },
  { person: 'tu', ending: '-s', write: 'an s', dSounds: false },
  { person: 'il · elle · on', ending: '', write: 'nothing', dSounds: false },
  { person: 'nous', ending: '-ons', write: '-ons', dSounds: true },
  { person: 'vous', ending: '-ez', write: '-ez', dSounds: true },
  { person: 'ils · elles', ending: '-ent', write: '-ent', dSounds: true },
];

/** THE CELL THE LESSON EXISTS FOR, derived rather than typed. If somebody ever
 *  gives the il form an ending, this becomes empty and half the build fails. */
export const BARE_ENDINGS: string[] = ENDINGS.filter((e) => e.ending === '').map((e) => e.person);
/** The three where the stem-final d reaches the ear. */
export const D_SOUNDING_ENDINGS: string[] = ENDINGS.filter((e) => e.dSounds).map((e) => e.ending);
/** And the three where it does not, which are exactly the three singular cells. */
export const D_SILENT_ENDINGS: string[] = ENDINGS.filter((e) => !e.dSounds).map((e) => e.ending);

/* ─── THE THREE CELLS ──────────────────────────────────────────────────────
 *
 * THE HEADLINE SCREEN, AND THE WHOLE LESSON.
 *
 * Three groups, three third persons, one frame, and only one of them writes
 * nothing. The brief asked for `il parle` / `il finit` / `il vend` adjacent in one
 * section and named it as the layout the test must assert; this is the record of
 * that, read by the lesson, the batch, the merge and the test so none of them
 * restates it.
 *
 * The order is trail order: the group the learner met first, then the second,
 * then this one. The empty cell is last because arriving at it is the mission. */
export const THREE_CELLS: { group: string; unit: string; id: string; ending: string }[] = [
  { group: '-er', unit: 'a2.01', id: 'fr.a2.verbes.227', ending: '-e' },
  { group: '-ir', unit: 'a2.10', id: 'fr.a2.verbes.228', ending: '-it' },
  { group: '-re', unit: 'a2.11', id: 'fr.a2.verbes.223', ending: '' },
];

/** The one cell of the three that writes nothing, derived from THREE_CELLS so a
 *  future author who gives it an ending breaks the constant rather than only the
 *  prose. */
export const BARE_CELL = THREE_CELLS.filter((c) => c.ending === '');

/* ─── The pairs and triples ────────────────────────────────────────────────  */

/** THE SINGULAR TRIPLES: three spellings whose respellings are ONE STRING once
 *  the pronoun token comes off.
 *
 *  Two triples on two verbs, because one triple is a fact about vendre. Asserted
 *  as an EQUALITY by the batch and by the test rather than trusted to survive an
 *  edit. See the header for why the second verb is `répondre` and cannot be
 *  `attendre`. */
export const SINGULAR_TRIPLES: string[][] = [
  ['fr.a2.verbes.221', 'fr.a2.verbes.222', 'fr.a2.verbes.223'],
  ['fr.a2.verbes.229', 'fr.a2.verbes.230', 'fr.a2.verbes.231'],
];

/** The respelling with its first token removed, which is how a triple is
 *  compared: the pronouns differ audibly and everything after them must not. */
export const afterPronoun = (respell: string): string => respell.split(' ').slice(1).join(' ');

/** THE PAIRS WHOSE ONLY AUDIBLE DIFFERENCE IS THE STEM-FINAL D.
 *
 *  `[singular, plural]`. This is the SOUND half of the paradigm, and it is
 *  deliberately one mission rather than the lesson: see the header and
 *  verbes-re-terms.ts. The ear drill and the test read THIS one list, so a pair
 *  that loses its partner is visible rather than quiet. */
export const D_PAIRS: [string, string][] = [
  ['fr.a2.verbes.223', 'fr.a2.verbes.226'],
  ['fr.a2.verbes.232', 'fr.a2.verbes.233'],
  ['fr.a2.verbes.234', 'fr.a2.verbes.235'],
  ['fr.a2.verbes.236', 'fr.a2.verbes.237'],
  ['fr.a2.verbes.240', 'fr.a2.verbes.241'],
];

/** The subset where the PRONOUN gives the learner nothing, so the d is the whole
 *  evidence. These are the only pairs an ear question may ask "one or several?"
 *  about: `il` against `ils` and `elle` against `elles` are identical out loud,
 *  and `elle attend` against `ils attendent` is not. */
export const PRONOUN_BLIND_PAIRS: [string, string][] = [
  ['fr.a2.verbes.223', 'fr.a2.verbes.226'],
  ['fr.a2.verbes.236', 'fr.a2.verbes.237'],
  ['fr.a2.verbes.240', 'fr.a2.verbes.241'],
];

/** THE SPELLINGS AN EAR QUESTION MAY NEVER ASK BETWEEN.
 *
 *  Each group is the set of singular forms of one verb that are IDENTICAL out
 *  loud. A `listenChoose` offering two members of one group has no correct answer,
 *  and marking one of them right would certify a bug.
 *
 *  The brief asked for this to be said in the report. It is said there AND
 *  enforced here, because a sentence in a report cannot fail. */
export const HOMOPHONE_FORMS: string[][] = [
  ['vends', 'vend'],
  ['attends', 'attend'],
  ['réponds', 'répond'],
  ['entends', 'entend'],
  ['perds', 'perd'],
  ['rends', 'rend'],
  ['descends', 'descend'],
];

/* ─── Respelling repairs, in two lists, because the checker can only see one ─
 *
 * SIX of the seven imported rows close a genuine nasal vowel with a plain n. They
 * are split by whether `hasPlainNasalFor` can SEE the violation, because the two
 * halves need opposite guards and a single list would have to pick one:
 *
 *   VISIBLE   the checker flags the stored value. The batch proves that, exactly
 *             as a2.10 did, so a "repair" whose stored value was never a
 *             violation is caught as somebody else's variant being overwritten
 *             (invariants §9).
 *
 *   INVISIBLE the checker does NOT flag the stored value, because the nasal is
 *             followed by a d inside the token. a2.10's guard would REJECT every
 *             one of these as "not a violation", which is the shared checker
 *             being wrong rather than the repair being wrong. The batch asserts
 *             the OPPOSITE direction instead: the stored value must be unseen,
 *             the replacement must also be unseen, and the replacement must carry
 *             the superscript BY NAME. The justification is the IPA, and it is
 *             written on every row.
 *
 * `entendre` is in the visible list and needs both guards, which is why it is
 * worth pointing at: its FIRST nasal ends a token and its second does not, so
 * `ahⁿ-TAHNDR` passes the checker while still being wrong. Repairing what the
 * checker complains about would have produced exactly that string.
 *
 * The correct convention is not invented here. `fr.sons.consonnes.146` already
 * holds `a-TAHⁿDR` for attendre and `fr.sons.consonnes.107` already holds
 * `PRAHⁿDR` for prendre. This build brings the verb-vocabulary themes into line
 * with a theme that got there first.                                          */
export type Repair = { id: string; fr: string; from: string; to: string; why: string };

export const RESPELL_REPAIRS_VISIBLE: Repair[] = [
  { id: 'fr.sons.verbes-essentiels.029', fr: 'entendre', from: 'ahn-TAHNDR', to: 'ahⁿ-TAHⁿDR', why: '/ɑ̃.tɑ̃dʁ/, TWO nasal vowels. The checker sees the first and is blind to the second, so repairing only what it reports would leave ahⁿ-TAHNDR, which it calls clean.' },
  { id: 'fr.a1.transports-quotidiens.045', fr: 'descendre', from: 'day-SAHN-druh', to: 'day-SAHⁿDR', why: '/de.sɑ̃dʁ/. Two faults on one row: a nasal closed with a plain n, and a -druh tail. The ledger writes a silent ending as nothing, and every other headword in this set ends DR.' },
];

export const RESPELL_REPAIRS_INVISIBLE: Repair[] = [
  { id: 'fr.a2.verbes.027', fr: 'vendre', from: 'VAHNDR', to: 'VAHⁿDR', why: '/vɑ̃dʁ/. Printed beside eel vahⁿ ee-SEE on the headline screen, so the broken value teaches a vowel difference that is not there.' },
  { id: 'fr.sons.verbes-essentiels.028', fr: 'attendre', from: 'ah-TAHNDR', to: 'ah-TAHⁿDR', why: '/a.tɑ̃dʁ/. fr.sons.consonnes.146 already holds a-TAHⁿDR, so this is the corpus disagreeing with itself rather than a variant.' },
  { id: 'fr.a2.verbes.020', fr: 'répondre', from: 'ray-PONDR', to: 'ray-POHⁿDR', why: '/ʁe.pɔ̃dʁ/. Printed beside eel ray-pohⁿ VEET, and the stored value spells the same vowel two different ways on one screen.' },
  { id: 'fr.sons.verbes-essentiels.128', fr: 'rendre', from: 'RAHNDR', to: 'RAHⁿDR', why: '/ʁɑ̃dʁ/. Printed beside el rahⁿ luh LEEVR.' },
];

/** Both lists, for the consumers that do not care which half a repair is in. */
export const RESPELL_REPAIRS: Repair[] = [...RESPELL_REPAIRS_VISIBLE, ...RESPELL_REPAIRS_INVISIBLE];

/** Rows carrying the same broken respelling that this build does NOT repair,
 *  recorded so the next author can see they were seen. They are not on a screen
 *  this lesson draws, and invariants §9 says to repair only what breaks a stated
 *  rule on content you own. */
export const NOT_REPAIRED: { id: string; fr: string; stored: string; why: string }[] = [
  { id: 'fr.a1.argent-quotidien.062', fr: 'vendre', stored: 'VAHNDR', why: 'a1 theme, not displayed here' },
  { id: 'fr.a1.rp-achats.014', fr: 'vendre', stored: 'VAHNDR', why: 'not displayed here' },
  { id: 'fr.a2.courses.021', fr: 'vendre', stored: 'VAHNDR', why: 'not displayed here' },
  { id: 'fr.a2.economie.033', fr: 'vendre', stored: 'VAHNDR', why: 'not displayed here' },
  { id: 'fr.a1.douane-et-immigration.065', fr: 'attendre', stored: 'ah-TAHNDR', why: 'not displayed here' },
  { id: 'fr.a1.rp-voyage.040', fr: 'attendre', stored: 'ah-TAHN-druh', why: 'not displayed here; also carries the -druh tail' },
  { id: 'fr.a1.transports-quotidiens.046', fr: 'attendre', stored: 'ah-TAHN-druh', why: 'not displayed here' },
  { id: 'fr.a2.bureau.090', fr: 'attendre', stored: 'a-TAHNDR', why: 'not displayed here' },
  { id: 'fr.a2.examens-et-diplomes.041', fr: 'attendre', stored: 'ah-TAHNDR', why: 'not displayed here' },
  { id: 'fr.sons.faux-amis.005', fr: 'attendre', stored: 'ah-TAHNDR', why: 'not displayed here' },
  { id: 'fr.a1.dictee.108', fr: 'répondre', stored: 'ray-POHNDR', why: 'not displayed here' },
  { id: 'fr.a1.douane-et-immigration.075', fr: 'répondre', stored: 'ray-POHNDR', why: 'not displayed here' },
  { id: 'fr.a2.disciplines.055', fr: 'répondre', stored: 'ray-POHNDR', why: 'not displayed here' },
  { id: 'fr.a2.examens-et-diplomes.089', fr: 'répondre', stored: 'ray-POHNDR', why: 'not displayed here' },
  { id: 'fr.a2.internet.083', fr: 'répondre', stored: 'ray-POHNDR', why: 'not displayed here' },
  { id: 'fr.sons.verbes-essentiels.031', fr: 'répondre', stored: 'ray-POHNDR', why: 'not displayed here' },
  { id: 'fr.a1.deplacements.045', fr: 'descendre', stored: 'day-SAHN-druh', why: 'not displayed here' },
  { id: 'fr.a1.rp-voyage.039', fr: 'descendre', stored: 'day-SAHN-druh', why: 'not displayed here' },
  { id: 'fr.a1.transports-quotidiens.041', fr: 'prendre', stored: 'PRAHN-druh', why: 'a boundary verb, named as a display string and not imported' },
  { id: 'fr.sons.verbes-essentiels.012', fr: 'prendre', stored: 'PRAHNDR', why: 'a boundary verb, not imported' },
];

/* ─── Drill additions ──────────────────────────────────────────────────────
 *
 * NONE, and that was measured rather than assumed. All seven infinitives are
 * RELEASED into the flashcard hub by a deckTranche, and a released row needs a
 * `flashcard` drill to be served as a card. All seven already carry one, checked
 * against Postgres by the manifest generator on 2026-08-11. a2.10 had to add two;
 * this lesson adds none, and the batch still runs the check so the day one of
 * these rows loses its drill the build stops.                                 */
export const DRILL_ADDITIONS: { id: string; add: 'flashcard' | 'voiceflash'; why: string }[] = [];

/* ─── THE RESPELLINGS THE SHARED CHECKER CANNOT SEE ────────────────────────
 *
 * Eleven, measured 2026-08-11 by breaking each superscript back to a plain n one
 * at a time and asking `hasPlainNasalFor` whether it noticed. Every one has the
 * same shape: a nasal followed by a D INSIDE the token, which the checker's
 * token-final test cannot reach.
 *
 * These five are this lesson's own authored rows. The other six are the imported
 * headwords and live in the repair lists above. Both sets are asserted BY NAME in
 * the batch, the merge and the test, because the shared checker will pass them
 * either way. Invariants §3.                                                  */
export const BLIND_NASALS: { id: string; must: string; why: string }[] = [
  { id: 'fr.a2.verbes.226', must: 'vahⁿd', why: 'ils vendent: the d that makes the plural audible is also what hides the nasal from the checker' },
  { id: 'fr.a2.verbes.233', must: 'tahⁿd', why: 'ils attendent' },
  { id: 'fr.a2.verbes.235', must: 'tahⁿd', why: 'ils entendent, whose FIRST nasal (zahⁿ-) the checker does see' },
  { id: 'fr.a2.verbes.237', must: 'rahⁿd', why: 'elles rendent' },
  { id: 'fr.a2.verbes.241', must: 'sahⁿd', why: 'ils descendent' },
];

/** The same claim about the imported headwords, after this build's repairs. */
export const BLIND_NASALS_IMPORTED: { id: string; must: string; why: string }[] = [
  { id: 'fr.a2.verbes.027', must: 'VAHⁿDR', why: 'vendre' },
  { id: 'fr.sons.verbes-essentiels.028', must: 'ah-TAHⁿDR', why: 'attendre' },
  { id: 'fr.a2.verbes.020', must: 'ray-POHⁿDR', why: 'répondre' },
  { id: 'fr.sons.verbes-essentiels.029', must: 'ahⁿ-TAHⁿDR', why: 'entendre: BOTH nasals, and the checker can only see the first' },
  { id: 'fr.sons.verbes-essentiels.128', must: 'RAHⁿDR', why: 'rendre' },
  { id: 'fr.a1.transports-quotidiens.045', must: 'day-SAHⁿDR', why: 'descendre' },
];

/** The half-repair that would pass the shared checker and still be wrong.
 *  Asserted as a NEGATIVE in the batch and the test: if the checker ever learns to
 *  see this, invariants §3 needs updating and the by-name lists can go. */
export const HALF_REPAIRED_ENTENDRE = { fr: 'entendre', respell: 'ahⁿ-TAHNDR' } as const;

/* ─── The dictée ───────────────────────────────────────────────────────────  */

/** The dictée targets: every authored row carrying the `dictation` drill.
 *  DERIVED, so a row that loses the tag drops out here rather than rendering as a
 *  dictée the app cannot run. Every one is at or under dicteeMode's 16-letter
 *  limit, and the batch proves that through the real `dicteeMode`. */
export const DICTATION_IDS: string[] = VERBES_RE.filter((w) => w.drills?.includes('dictation')).map((w) => w.id);

/** THE DICTÉE, AND WHAT IT CAN ACTUALLY GRADE.
 *
 *  MissionRich checks a dictée with `normalizeFr(filled) === normalizeFr(target)`,
 *  and normalizeFr normalises to NFD and strips every combining mark. A dropped
 *  letter and an added one survive that; an accent does not.
 *
 *  Each row is a target, the near miss a learner would actually make, and whether
 *  the app can tell them apart. The batch and the test run BOTH claims through the
 *  real `normalizeFr`: the scorable ones must differ and the unscorable one must
 *  collide. Documenting the limit is not enough, because a note saying "the accent
 *  is not scored" goes stale the day somebody changes normalizeFr, and this fails
 *  instead. The shape is a2.09's and it is copied deliberately.
 *
 *  THIS IS THE STRONGEST DICTÉE IN BATCH 1 AND THE BRIEF SAID SO BEFORE IT WAS
 *  MEASURED. Eleven targets, and the two errors the lesson exists to stop are
 *  both gradeable: `Il vende ici.` and `Il vends ici.` both survive normalizeFr
 *  against `Il vend ici.`, so the one surface in the app that can catch a
 *  spurious letter can catch exactly this one. */
export const DICTEE_NEAR_MISS: { id: string; wrong: string; scorable: boolean; what: string }[] = [
  { id: 'fr.a2.verbes.221', wrong: 'Je vend ici.', scorable: true, what: 'the je row losing its s, which nothing in the sound would ever have caught' },
  { id: 'fr.a2.verbes.222', wrong: 'Tu vend ici.', scorable: true, what: 'the tu row losing its s' },
  { id: 'fr.a2.verbes.223', wrong: 'Il vende ici.', scorable: true, what: 'THE ERROR THE LESSON EXISTS TO STOP. The learner puts back the letter the form looks short without, and the dictée is the only surface that can score it.' },
  { id: 'fr.a2.verbes.224', wrong: 'Nous venons ici.', scorable: true, what: 'the d dropped from the stem, which is a real word and a different verb' },
  { id: 'fr.a2.verbes.225', wrong: 'Vous venez ici.', scorable: true, what: 'the same d, dropped from the vous form' },
  { id: 'fr.a2.verbes.226', wrong: 'Ils vends ici.', scorable: true, what: 'the singular spelling carried onto a plural subject' },
  { id: 'fr.a2.verbes.227', wrong: 'Il parles ici.', scorable: true, what: "a2.01's own trap, in a dictée that puts all three groups on one screen" },
  { id: 'fr.a2.verbes.228', wrong: 'Il finis ici.', scorable: true, what: "a2.10's own trap" },
  { id: 'fr.a2.verbes.229', wrong: 'Je répond vite.', scorable: true, what: 'the je row taking the il spelling on a second verb' },
  { id: 'fr.a2.verbes.230', wrong: 'Tu reponds vite.', scorable: false, what: 'THE ACCENT on répondre. normalizeFr strips combining marks, so this is graded correct. The ledger binds the whole band to that and this row is where it lands.' },
  { id: 'fr.a2.verbes.231', wrong: 'Il réponds vite.', scorable: true, what: 'THE OTHER HALF OF THE OWNS: the il row given an s it does not take.' },
];

/** Derived from DICTEE_NEAR_MISS rather than typed, so the list and the evidence
 *  for it cannot drift apart. */
export const SCORABLE_DICTATION_IDS: string[] = DICTEE_NEAR_MISS.filter((d) => d.scorable).map((d) => d.id);
/** And the one the check cannot settle, named so nobody comes to believe it can. */
export const UNSCORABLE_DICTATION_IDS: string[] = DICTEE_NEAR_MISS.filter((d) => !d.scorable).map((d) => d.id);

/* ─── The reference-sheet decision, recorded in the data ───────────────────
 *
 * ONE SHEET, and it is the cross-group one. Written here rather than only in the
 * report, so the test can assert the decision and a future author who reaches for
 * a second `-RE endings, in full` sheet breaks a constant instead of shipping
 * a fourth competing reference.
 *
 * The brief asked for a2.01's sheet to be extended rather than duplicated. That
 * is impossible: a `sheetId` resolves only inside the lesson that declares it
 * (schema.ts:3490, lesson-contract.test.ts:91), so no section of a2.11 can point
 * at a sheet of a2.01. What the brief was protecting against is real, though, and
 * this build takes it seriously: the sheet a2.11 ships is NOT a third "the -RE
 * endings, in full". It is the ONE table in the level that holds all three ending
 * sets at once, which is the thing a2.01's sheet could never have been, and it
 * names a2.01 and a2.10 so a learner knows the set is finished. */
export const SHEET_DECISION = {
  id: 'sheet.a2.11.threegroups',
  count: 1,
  /** The units whose sheets this one completes rather than competes with. Named
   *  on the sheet itself, and asserted. */
  // RAW IDS, because this list is what the GUARD compares with. The sheet text
  // carries the labels; `namesUnitLabel` resolves an id to them.
  names: ['a2.01', 'a2.10'],
} as const;

/* ─── Accessors ────────────────────────────────────────────────────────────  */

/** Lookup by id. The lesson body builds every screen through this. */
export const BY_ID: ReadonlyMap<string, ReSentence> = new Map(VERBES_RE.map((w) => [w.id, w]));

/** Every authored id, in sequence order. */
export const AUTHORED_IDS: string[] = VERBES_RE.map((w) => w.id);

/** The ids of one teaching family, in sequence order. */
export const familyIds = (f: ReSentence['family']): string[] =>
  VERBES_RE.filter((w) => w.family === f).map((w) => w.id);

/** The ids showing one PERSON, in sequence order. Lets the test assert all seven
 *  persons reach a screen against the corpus rather than a hand list that could
 *  quietly lose `vous`. */
export const personIds = (p: ReSentence['person']): string[] =>
  VERBES_RE.filter((w) => w.person === p).map((w) => w.id);

/** The paradigm, in the ledger's canonical pronoun order. */
export const PARADIGM_IDS: string[] = familyIds('paradigm');

/** THE ROWS THAT WRITE NOTHING AFTER THE STEM. Derived, so a row that is given an
 *  ending drops out of here and the guards that count it go red. */
export const BARE_FORM_IDS: string[] = VERBES_RE.filter((w) => w.ending === '').map((w) => w.id);

/** The French line alone. */
export const fr = (id: string): string => {
  const w = BY_ID.get(id);
  if (!w) throw new Error(`verbes-re corpus: unknown id "${id}"`);
  return w.fr;
};

/** The bracketed respelling alone, which is what a deck card's `sub` line
 *  carries. Built HERE, once, rather than baked into the stored data: the
 *  validator checks the rendered form and storing the brackets would double them
 *  up. */
export const sub = (id: string): string => {
  const w = BY_ID.get(id);
  if (!w) throw new Error(`verbes-re corpus: unknown id "${id}"`);
  return w.respell ? `[${w.respell}]` : '';
};

/** The respelling with no brackets, for a tapTable cell that is not notation. */
export const bare = (id: string): string => {
  const w = BY_ID.get(id);
  if (!w) throw new Error(`verbes-re corpus: unknown id "${id}"`);
  return w.respell ?? '';
};

/** The English gloss alone. */
export const en = (id: string): string => {
  const w = BY_ID.get(id);
  if (!w) throw new Error(`verbes-re corpus: unknown id "${id}"`);
  return w.en;
};

/** The corpus Item, stripped of the lesson-only fields. `person`, `ending`,
 *  `dSounds` and `family` are lesson display data and live in the lesson's own
 *  section bodies, not on the shared row. */
export function toItem(w: ReSentence): Item {
  const { person: _p, ending: _e, dSounds: _d, family: _f, ...item } = w;
  return item;
}
