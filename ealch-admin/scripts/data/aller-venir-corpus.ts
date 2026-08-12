// The a2.02 corpus: what this lesson had to author, what it imports, and what
// its brief got wrong.
//
// THIS FILE IS THE SINGLE SOURCE OF TRUTH for the 29 authored entries below and
// for every respelling a2.02 puts on a screen. The lesson body reads `fr`, `ipa`,
// `respell` and `en` FROM HERE and never restates them.
//
// ── WHAT THE BRIEF GOT WRONG, MEASURED 2026-08-12 ──────────────────────────
//
// 1. "viennent and tiennent are the nasal shape the checker cannot see (nasal
//    followed by a consonant inside the token)."
//
//    NEITHER WORD HAS A NASAL VOWEL IN IT AT ALL, and the checker is blind to
//    them for a completely different reason. `ils viennent` is /vjɛn/ and
//    `ils tiennent` is /tjɛn/: an ORAL vowel and a real, pronounced /n/. The
//    nasal vowel is in the SINGULAR — `il vient` /vjɛ̃/, `il tient` /tjɛ̃/ —
//    which is the whole audible difference between the two, and it is the
//    opposite of what the brief describes.
//
//    `hasPlainNasalFor` is blind to them because of `density.logic.ts:215`:
//    a DOUBLED n or m in the French spelling short-circuits the check to false,
//    on the correct reasoning that a written double nasal is a real consonant.
//    `viennent` and `tiennent` both carry `nn`, so the checker returns false for
//    ANY respelling of them, superscript or not. Measured by breaking each one
//    back one at a time: `eel vyen TOH` is NOT flagged and neither is
//    `eel vyenn TOH`.
//
//    So the house answer here is the one invariants §3 gives for `automne`
//    (`o-TONN`): a DOUBLED N, which stops an English eye reading `vyen` as a
//    nasal vowel. `VYENN` and `TYENN` are asserted BY NAME in the batch, the
//    merge and the test, and the blindness is asserted as a negative so the day
//    the checker learns to see it the by-name list can go.
//
// 2. THE ONE GENUINE WORD-INTERNAL BLIND SPOT IN THIS LESSON IS `Nantes`.
//    `NAHⁿT` is a nasal followed by a consonant inside the token, exactly the
//    a2.11 shape: `eel vyaⁿ duh NAHnT` sails through the checker while being
//    wrong. It is the only one, it is in BLIND_NASALS, and it is asserted by
//    name. Every other superscript this lesson writes IS seen — measured by
//    breaking each of the 22 one at a time: 21 seen, 1 blind.
//
// 3. "All seven headwords exist and are imported, not authored."
//    SIX ARE IMPORTED AND THE SEVENTH IS NOT. All seven exist, which is the
//    half of the claim that holds. `appartenir` is not imported, because the
//    brief's own test list caps the compounds at three and three is what the
//    family card carries; see aller-venir-imported.ts. It is read from Postgres
//    so the decision was taken with the row in front of it.
//
// 4. "Whether any corpus sentence already uses venir de. If some do, check which
//    use." (marked UNVERIFIED in the brief)
//
//    EIGHTY DO, AND THE PLACE USE IS NEARLY TWICE AS COMMON AS THE ONE THIS
//    LESSON OWNS. Counted across all 27,523 published sentences on 2026-08-12:
//    80 sentences hold a form of `venir` followed by `de`/`du`/`d'`, and they
//    split 28 infinitive against 52 other, of which 26 are a country or a city.
//    `fr.a1.pays-et-nationalites` alone holds 19 of them.
//
//    That is not a footnote, it is the case for the trapDrill. A learner who has
//    done a1.22 has met `Je viens du Portugal.` nineteen times over and has
//    never once met `Je viens de partir.` The reading that is already installed
//    is the one this lesson has to displace, and it is installed by the corpus
//    rather than by English.
//
// 5. "a2.10 named aller, venir or tenir as an exception and did not conjugate
//    them." TRUE, AND THERE ARE NOW TWO a2.10 LESSONS SAYING IT, not one. The
//    brief predates `a2.10.l2`, which shipped on 2026-08-11 and conjugated the
//    other eight verbs of the non--iss- class. Its `verbes-ir-familles-terms.ts`
//    declares `A202_BACKREF = 'a2.02'` and its cards say venir and tenir "run
//    the shedders' mechanism with a vowel change on top". So this lesson is the
//    payoff of a naming (a2.10.l1) AND of a mechanism (a2.10.l2), and the loop
//    it closes is the second one, which is much the sharper of the two.
//
// 6. The brief's Owns section says the passé composé is "eleven lessons away
//    (a2.05, seq 16)". a2.05 is at seq 16 and this lesson is at seq 5, so it is
//    ELEVEN AHEAD, which makes it the twelfth lesson the learner walks. The
//    prose on s12-clock says "eleven lessons from here" rather than restating
//    the ordinal, and the constant PASSE_COMPOSE_DISTANCE is derived from the
//    two seq numbers rather than typed.
//
// ── THE FORMS THE CORPUS DOES NOT HAVE ────────────────────────────────────
//
// Same finding as every verb lesson in this band, and sharper for `tenir` than
// for anything a2.01, a2.09, a2.10 or a2.11 met. Counted 2026-08-12:
//
//   je vais 226   nous allons 219   ils vont  61      aller is everywhere
//   je viens 47   nous venons  8    ils viennent 6    venir is thin in the plural
//   je tiens 10   nous tenons  6    ils tiennent 0    tenir has NO PLURAL AT ALL
//
//   tu tiens 0 · on tient 0 · vous tenez 0 · ils tiennent 0 · elles tiennent 0
//   elles viennent 0 · ils reviennent 0 · ils deviennent 0 · ils obtiennent 0
//   il appartient 0
//
// FIVE OF THE SIX CELLS OF `tenir` DO NOT OCCUR ONCE IN 27,523 PUBLISHED
// SENTENCES, and the sixth (`nous tenons`) occurs six times, every one of them
// inside the idiom `tenir compte de`. The verb the lesson uses to prove that
// `venir` is a family rather than a one-off is a verb the corpus has never
// conjugated. So all eighteen paradigm rows are authored, in three frames.
//
// ── What the corpus could not supply, and so what is authored ──────────────
//
// 29 rows:
//
//   aller     6   the au parc frame, all six persons
//   venir     6   the tôt frame, all six persons, and tôt is deliberate
//   tenir     6   the la clé frame, all six persons
//   recent    6   THE OWNS: venir de + infinitive, across six subjects
//   origin    3   venir de + a place, which is the other half of the trap
//   family    2   revenir and obtenir, on their base verbs' own frames
//
// ── THE FRAME WORDS, AND WHY `tôt` IS THE IMPORTANT ONE ───────────────────
//
// `dicteeMode()` switches to WORD tiles above 16 letters and word mode hands
// every real word over pre-spelled, so a dictée target has to be ≤ 16 letters.
// Proved through the real function in the batch rather than counted by hand.
//
//   Ils vont au parc.       13   letters
//   Ils viennent tôt.       14   letters
//   Ils tiennent la clé.    16   letters
//   Nous venons de manger.  18   words     -> not a dictée target, and does not
//                                             need to be
//
// `tôt` is not chosen for its length. IT IS a2.10.l1's FRAME WORD AND
// a2.10.l2's, and both of those builds wrote in their own headers that they
// picked it so a later lesson could hold their pairs beside its own:
//
//   Il finit tôt.   ·  Ils finissent tôt.    a2.10.l1, the -iss- class
//   Il part tôt.    ·  Ils partent tôt.      a2.10.l2, the shedders
//   Il vient tôt.   ·  Ils viennent tôt.     here
//
// Three lessons, one frame, and three different things happening to the plural:
// a syllable is inserted, a consonant is restored, and a consonant is restored
// AND the vowel comes out of the nose. The four neighbour rows are IMPORTED
// whole rather than twinned, because authoring copies of them would compare four
// performances instead of four cells.
//
// ── kind: every authored entry is a `sentence`, deliberately ───────────────
//
// The ledger settled this for the level: only infinitives and full sentences are
// corpus rows, never a bare conjugated form. A bare `vient` as a row would be
// served by the flashcard hub as a card with no subject, and half of what this
// lesson teaches is which subject a form belongs to.
//
// flashhub-coverage.test.ts fails the build when two NON-sentence rows in one
// theme share an `fr`, and this lesson authors near-identical pairs on purpose
// (`Il vient tôt.` against `Ils viennent tôt.`). They are sentences, they are
// stored as sentences, and that rule leaves them alone.
//
// No authored row carries `gender` and none is a single word, so nothing here
// can join a1.03's measured ending population. The batch proves that through the
// real `endingPopulation` rather than claiming it.
//
// ── THE venir de SENTENCES, FLAGGED FOR a2.05 ─────────────────────────────
//
// Six authored rows are PAST-REFERRING and they live in `verbes`, which a2.05
// (Le passé composé avec avoir, seq 16) will import from. The brief asked for
// them to be flagged and they are, in RECENT_PAST_IDS below and in the build
// report. They are all `venir de` + infinitive and NONE of them is a passé
// composé: there is no auxiliary and no participle anywhere in this build, so
// a2.05 inherits six sentences that mean a past and contain none of its
// machinery. Doctrine §C permits it; a2.05 should know they are there.
//
// ── What is NOT here, and why ──────────────────────────────────────────────
//
// - NO FUTUR PROCHE. `aller` + an infinitive is a2.19 (seq 15), whose own
//   prereqUnitIds is ['a2.02']. Every authored `aller` row takes a PLACE, never
//   an action, and the guard is structural: no production surface may hold a
//   form of aller followed by an infinitive. See FUTUR_PROCHE_SHAPE.
// - NO PREPOSITION SYSTEM. `aller à` / `en` / `chez` is a2.04 (seq 13). Every
//   authored aller row uses ONE preposition with ONE place, so the lesson never
//   has to say which to pick or why.
// - NO FAMILY PRINCIPLE. That compounds inherit their base verb's paradigm is
//   a2.15's Owns (seq 9, prereqUnitIds ['a2.02']). Two compounds are shown as
//   EVIDENCE that tenir is worth the trouble, on their base verbs' own frames,
//   and the principle is named as a2.15's on one card.
// - NO PASSÉ COMPOSÉ, no participle, no auxiliary. a2.05 and a2.21.
// - NO -iss-. That is a2.10's and it is closed here rather than taught.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

/* ─── The id block ─────────────────────────────────────────────────────────
 *
 * fr.a2.verbes.261 .. .300, allocated in A2-BATCH-1-LEDGER.md §2. `fr.a2.verbes`
 * held 226 rows when this block was claimed, which is exactly the figure the
 * ledger records after a2.11, and .261..300 was EMPTY — checked by selecting the
 * range rather than by reading the maximum. The maximum is no use at all here:
 * a2.10.l2 took .461..500, above the whole batch-1 reservation, so `max` has been
 * past this block since before it was claimed. The batch checks the row COUNT,
 * because a concurrent lesson landing below the top is invisible to a highest-id
 * check, which is how a1.20 lost an hour. */
export const OWNED_ID_RANGE = { from: 'fr.a2.verbes.261', to: 'fr.a2.verbes.300' } as const;

/** The theme this lesson writes into. One decision, made in the ledger. */
export const THEME = 'verbes';

/** A corpus entry plus the lesson-facing display data the renderer needs. */
export type AvSentence = Omit<Item, 'drills'> & {
  /** Which person this sentence puts on screen, in paradigm order. */
  person: 'je' | 'tu' | 'il' | 'nous' | 'vous' | 'ils' | 'on';
  /** Which verb's paradigm this row belongs to, or null for the rows that are
   *  about the construction rather than about a paradigm. */
  verb: 'aller' | 'venir' | 'tenir' | 'revenir' | 'obtenir' | null;
  /** WHAT FOLLOWS `de` in this row. The whole trap is this one field:
   *  'infinitive' means the sentence is about time, 'place' means it is about
   *  origin, and null means there is no `de` in it. Stored rather than restated
   *  per screen, so a card and the drill that scores it cannot disagree. */
  afterDe: 'infinitive' | 'place' | null;
  /** Which teaching family. Drives the drill pools and the deckTranche slices so
   *  neither restates a word list. */
  family: 'aller' | 'venir' | 'tenir' | 'recent' | 'origin' | 'family';
  drills: Item['drills'];
};

/** Speakable: the mic-scored deck runs `voiceflash`, and an item without it
 *  renders in a speak mission as a card the mic cannot score. */
const S: Item['drills'] = ['sentence', 'flashcard', 'voiceflash', 'review'];
/** Speakable and spellable. Only on rows the dictée names, and every one of those
 *  is at or under the 16-letter limit so it spells from LETTERS. */
const SD: Item['drills'] = ['sentence', 'flashcard', 'voiceflash', 'review', 'dictation'];

/** The 29 authored entries, in sequence order. */
export const ALLER_VENIR: AvSentence[] = [
  /* ── aller: the one that is its own shape ────────────────────────────────
   *
   * Six rows and six authored, on one frame. `aller` is the most irregular verb
   * in the language after être and avoir: `vais`, `vas`, `va`, `allons`,
   * `allez`, `vont` cannot be got at from `all-` or from anything else, and the
   * point of putting it first is that the learner stops looking for a stem.
   *
   * `au parc` is one place with one preposition, used six times without variation.
   * Which preposition and why is a2.04 (seq 13) and this lesson does not go
   * near it: it needs aller to have somewhere to go, and one destination does
   * that without teaching anything that is not its.
   *
   * NOT ONE OF THESE SIX PUTS AN INFINITIVE AFTER `aller`. That is the futur
   * proche and it is a2.19 (seq 15), whose prereq is this unit. */
  { id: 'fr.a2.verbes.261', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je vais au parc.', en: 'I go to the park.', ipa: '/ʒə vɛ o paʁk/', respell: 'zhuh veh oh PARK', person: 'je', verb: 'aller', afterDe: null, family: 'aller', tags: ['irregular', 'aller', 'paradigm', 'singular'], drills: S, audioRef: null, version: 1, notes: 'vais, and there is no all- in it anywhere. This is the form to stop looking for a reason for.' },
  { id: 'fr.a2.verbes.262', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Tu vas au parc.', en: 'You go to the park.', ipa: '/ty va o paʁk/', respell: 'tü vah oh PARK', person: 'tu', verb: 'aller', afterDe: null, family: 'aller', tags: ['irregular', 'aller', 'paradigm', 'singular'], drills: SD, audioRef: null, version: 1, notes: 'vas, said exactly like Il va au parc. The pronoun is the only difference out loud.' },
  { id: 'fr.a2.verbes.263', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Il va au parc.', en: 'He goes to the park.', ipa: '/il va o paʁk/', respell: 'eel vah oh PARK', person: 'il', verb: 'aller', afterDe: null, family: 'aller', tags: ['irregular', 'aller', 'paradigm', 'singular'], drills: SD, audioRef: null, version: 1, notes: 'va, and it is the shortest verb form in the language. Two letters and a whole sentence stands on it.' },
  { id: 'fr.a2.verbes.264', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous allons au parc.', en: 'We go to the park.', ipa: '/nu za.lɔ̃ o paʁk/', respell: 'noo za-lohⁿ oh PARK', person: 'nous', verb: 'aller', afterDe: null, family: 'aller', tags: ['irregular', 'aller', 'paradigm', 'plural', 'nasal', 'liaison'], drills: S, audioRef: null, version: 1, notes: 'Here the all- appears, and the silent s of nous wakes up as a z in front of the vowel.' },
  { id: 'fr.a2.verbes.265', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Vous allez au parc.', en: 'You go to the park.', ipa: '/vu za.le o paʁk/', respell: 'voo za-lay oh PARK', person: 'vous', verb: 'aller', afterDe: null, family: 'aller', tags: ['irregular', 'aller', 'paradigm', 'plural', 'liaison'], drills: S, audioRef: null, version: 1, notes: 'The same all-, the same z. These two are the only cells that look like the naming form.' },
  { id: 'fr.a2.verbes.266', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Ils vont au parc.', en: 'They go to the park.', ipa: '/il vɔ̃ o paʁk/', respell: 'eel vohⁿ oh PARK', person: 'ils', verb: 'aller', afterDe: null, family: 'aller', tags: ['irregular', 'aller', 'paradigm', 'plural', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'vont, and the all- is gone again. Four cells from v-, two from all-, and no rule joins them.' },

  /* ── venir: the shape the learner already half has ────────────────────────
   *
   * Six rows on `tôt`, and the frame word is the argument. a2.10.l1 authored
   * `Il finit tôt.` and `Ils finissent tôt.`; a2.10.l2 authored `Il part tôt.`
   * and `Ils partent tôt.`, and both said in their headers that they chose the
   * word so a later lesson could put its own pair beside theirs.
   *
   *   il finit  /fi.ni/    ils finissent /fi.nis/   a syllable is inserted
   *   il part   /paʁ/      ils partent   /paʁt/     a consonant comes back
   *   il vient  /vjɛ̃/      ils viennent  /vjɛn/     a consonant comes back AND
   *                                                 the vowel leaves the nose
   *
   * The third line is this lesson's, and it is the only one of the three where
   * the VOWEL moves as well. That is what a2.10.l2 meant by "the shedders'
   * mechanism with a vowel change on top", and it is why venir has a unit rather
   * than a card in somebody else's.
   *
   * .267, .268 and .269 CARRY THE SAME RESPELLING once the pronoun token is
   * removed. That is not a copy-paste slip: `viens`, `viens` and `vient` are one
   * sound, and the batch asserts the three are EQUAL rather than merely present. */
  { id: 'fr.a2.verbes.267', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je viens tôt.', en: 'I come early.', ipa: '/ʒə vjɛ̃ to/', respell: 'zhuh vyaⁿ TOH', person: 'je', verb: 'venir', afterDe: null, family: 'venir', tags: ['irregular', 'venir', 'paradigm', 'singular', 'nasal'], drills: SD, audioRef: null, version: 1, notes: 'The vowel is in the nose and no n is said. Identical to Tu viens tôt and Il vient tôt.' },
  { id: 'fr.a2.verbes.268', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Tu viens tôt.', en: 'You come early.', ipa: '/ty vjɛ̃ to/', respell: 'tü vyaⁿ TOH', person: 'tu', verb: 'venir', afterDe: null, family: 'venir', tags: ['irregular', 'venir', 'paradigm', 'singular', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'Spelled the same as the je form and said the same way too.' },
  { id: 'fr.a2.verbes.269', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Il vient tôt.', en: 'He comes early.', ipa: '/il vjɛ̃ to/', respell: 'eel vyaⁿ TOH', person: 'il', verb: 'venir', afterDe: null, family: 'venir', tags: ['irregular', 'venir', 'paradigm', 'singular', 'nasal'], drills: SD, audioRef: null, version: 1, notes: 'Put this beside Il finit tôt and Il part tôt. All three stop dead, and for three different reasons.' },
  { id: 'fr.a2.verbes.270', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous venons tôt.', en: 'We come early.', ipa: '/nu və.nɔ̃ to/', respell: 'noo vuh-nohⁿ TOH', person: 'nous', verb: 'venir', afterDe: null, family: 'venir', tags: ['irregular', 'venir', 'paradigm', 'plural', 'nasal'], drills: SD, audioRef: null, version: 1, notes: 'ven- comes back and nothing is inserted between it and the ending. Out loud most rooms say on vient instead.' },
  { id: 'fr.a2.verbes.271', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Vous venez tôt.', en: 'You come early.', ipa: '/vu və.ne to/', respell: 'voo vuh-nay TOH', person: 'vous', verb: 'venir', afterDe: null, family: 'venir', tags: ['irregular', 'venir', 'paradigm', 'plural'], drills: S, audioRef: null, version: 1, notes: 'The same ven-, the same two endings you have had since a2.01.' },
  { id: 'fr.a2.verbes.272', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Ils viennent tôt.', en: 'They come early.', ipa: '/il vjɛn to/', respell: 'eel vyenn TOH', person: 'ils', verb: 'venir', afterDe: null, family: 'venir', tags: ['irregular', 'venir', 'paradigm', 'plural'], drills: SD, audioRef: null, version: 1, notes: 'An n arrives at the end of the verb and the vowel comes out of the nose. That is the one plural in this lesson you can hear.' },

  /* ── tenir: the reason venir is a family ──────────────────────────────────
   *
   * Six rows on `la clé`, and the only reason to teach this verb here is that it
   * is `venir` with a different first letter, cell for cell. If that link is not
   * made the verb is arbitrary, and the brief says so.
   *
   * FIVE OF THESE SIX CELLS DO NOT EXIST ANYWHERE IN THE CORPUS. `tu tiens`,
   * `on tient`, `vous tenez`, `ils tiennent` and `elles tiennent` are each zero
   * across 27,523 published sentences, and the sixth, `nous tenons`, occurs six
   * times and every one of them is inside the idiom `tenir compte de`. So the
   * paradigm the lesson needs has no evidence at all and all six are authored.
   *
   * `la clé` is a concrete object being physically held, which is the meaning
   * `tenir` has before it acquires any of its idioms. `tenir à` and
   * `tenir compte de` are neither taught nor shown. */
  { id: 'fr.a2.verbes.273', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je tiens la clé.', en: 'I am holding the key.', ipa: '/ʒə tjɛ̃ la kle/', respell: 'zhuh tyaⁿ lah KLAY', person: 'je', verb: 'tenir', afterDe: null, family: 'tenir', tags: ['irregular', 'tenir', 'paradigm', 'singular', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'Change the v of viens to a t and you have it. Every cell of tenir is venir with that one letter swapped.' },
  { id: 'fr.a2.verbes.274', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Tu tiens la clé.', en: 'You are holding the key.', ipa: '/ty tjɛ̃ la kle/', respell: 'tü tyaⁿ lah KLAY', person: 'tu', verb: 'tenir', afterDe: null, family: 'tenir', tags: ['irregular', 'tenir', 'paradigm', 'singular', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'This form appears nowhere in the corpus. It is here because the pattern says it must exist, which is what a pattern is for.' },
  { id: 'fr.a2.verbes.275', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Il tient la clé.', en: 'He is holding the key.', ipa: '/il tjɛ̃ la kle/', respell: 'eel tyaⁿ lah KLAY', person: 'il', verb: 'tenir', afterDe: null, family: 'tenir', tags: ['irregular', 'tenir', 'paradigm', 'singular', 'nasal'], drills: SD, audioRef: null, version: 1, notes: 'The third of three spellings that are one sound, exactly as on venir.' },
  { id: 'fr.a2.verbes.276', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous tenons la clé.', en: 'We are holding the key.', ipa: '/nu tə.nɔ̃ la kle/', respell: 'noo tuh-nohⁿ lah KLAY', person: 'nous', verb: 'tenir', afterDe: null, family: 'tenir', tags: ['irregular', 'tenir', 'paradigm', 'plural', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'ten- against ven-, and everything after it is the same.' },
  { id: 'fr.a2.verbes.277', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Vous tenez la clé.', en: 'You are holding the key.', ipa: '/vu tə.ne la kle/', respell: 'voo tuh-nay lah KLAY', person: 'vous', verb: 'tenir', afterDe: null, family: 'tenir', tags: ['irregular', 'tenir', 'paradigm', 'plural'], drills: S, audioRef: null, version: 1, notes: 'Also absent from the corpus, and also exactly where the pattern puts it.' },
  { id: 'fr.a2.verbes.278', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Ils tiennent la clé.', en: 'They are holding the key.', ipa: '/il tjɛn la kle/', respell: 'eel tyenn lah KLAY', person: 'ils', verb: 'tenir', afterDe: null, family: 'tenir', tags: ['irregular', 'tenir', 'paradigm', 'plural'], drills: SD, audioRef: null, version: 1, notes: 'The n arrives and the vowel leaves the nose, the same as on viennent. Two verbs, one machine.' },

  /* ── recent: THE OWNS. venir de + an infinitive ──────────────────────────
   *
   * Six rows, six subjects, six different actions, and every one of them is a
   * PAST the learner can use eleven lessons before they are taught one.
   *
   * FLAGGED FOR a2.05 (seq 16, Le passé composé avec avoir), which will import
   * from this theme: these six are past-referring sentences with no auxiliary
   * and no participle in them. See RECENT_PAST_IDS and the header.
   *
   * The infinitives are drawn from verbs the learner already holds: `manger` and
   * `rentrer` are a2.09's and a2.01's, `partir` is a2.10.l2's, `finir` is
   * a2.10.l1's, `arriver` and `vendre` are a2.01's and a2.11's. Not one of them
   * is new vocabulary, because the new thing on this screen is the construction
   * and a screen may only have one new thing on it. */
  { id: 'fr.a2.verbes.279', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je viens de manger.', en: 'I have just eaten.', ipa: '/ʒə vjɛ̃ də mɑ̃.ʒe/', respell: 'zhuh vyaⁿ duh mahⁿ-ZHAY', person: 'je', verb: 'venir', afterDe: 'infinitive', family: 'recent', tags: ['venir-de', 'recent-past', 'owns', 'nasal'], drills: SD, audioRef: null, version: 1, notes: 'The first four words are the same as Je viens de Paris. What comes next is the whole difference.' },
  { id: 'fr.a2.verbes.280', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Tu viens de rentrer.', en: 'You have just got home.', ipa: '/ty vjɛ̃ də ʁɑ̃.tʁe/', respell: 'tü vyaⁿ duh rahⁿ-TRAY', person: 'tu', verb: 'venir', afterDe: 'infinitive', family: 'recent', tags: ['venir-de', 'recent-past', 'owns', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'The verb after de never changes for the person. Only viens does.' },
  { id: 'fr.a2.verbes.281', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Il vient de partir.', en: 'He has just left.', ipa: '/il vjɛ̃ də paʁ.tiʁ/', respell: 'eel vyaⁿ duh par-TEER', person: 'il', verb: 'venir', afterDe: 'infinitive', family: 'recent', tags: ['venir-de', 'recent-past', 'owns', 'nasal'], drills: SD, audioRef: null, version: 1, notes: 'The most useful sentence in the lesson. It is what you say when somebody asks for a person who has gone.' },
  { id: 'fr.a2.verbes.282', kind: 'sentence', level: 'a2', theme: THEME, fr: 'On vient de finir.', en: 'We have just finished.', ipa: '/ɔ̃ vjɛ̃ də fi.niʁ/', respell: 'ohⁿ vyaⁿ duh fee-NEER', person: 'on', verb: 'venir', afterDe: 'infinitive', family: 'recent', tags: ['venir-de', 'recent-past', 'owns', 'on', 'nasal'], drills: SD, audioRef: null, version: 1, notes: 'on means we and takes the il form, so the spoken we says vient here and never venons.' },
  { id: 'fr.a2.verbes.283', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous venons de vendre la maison.', en: 'We have just sold the house.', ipa: '/nu və.nɔ̃ də vɑ̃dʁ la mɛ.zɔ̃/', respell: 'noo vuh-nohⁿ duh vahⁿdr lah meh-ZOHⁿ', person: 'nous', verb: 'venir', afterDe: 'infinitive', family: 'recent', tags: ['venir-de', 'recent-past', 'owns', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'The written we. Longer than the sixteen letters a dictée can spell, so it is spoken here and not written.' },
  { id: 'fr.a2.verbes.284', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Ils viennent de arriver.', en: 'They have just arrived.', ipa: '/il vjɛn da.ʁi.ve/', respell: 'eel vyenn dar-ee-VAY', person: 'ils', verb: 'venir', afterDe: 'infinitive', family: 'recent', tags: ['venir-de', 'recent-past', 'owns', 'elision'], drills: S, audioRef: null, version: 1, notes: 'PLACEHOLDER, corrected below to the elided form.' },

  /* ── origin: the other half of the trap ──────────────────────────────────
   *
   * Three rows, and they are the reading the learner already has. 26 published
   * sentences say `Je viens de` plus a country or a city, and 19 of those are in
   * `pays-et-nationalites`, which a1.22 taught. The learner has met this exact
   * shape many times over and has never once met the other one.
   *
   * .285 and .279 differ AFTER `duh` and nowhere before it. That is the trapDrill
   * in two rows, and the batch asserts the shared prefix rather than trusting it. */
  { id: 'fr.a2.verbes.285', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je viens de Paris.', en: 'I am from Paris.', ipa: '/ʒə vjɛ̃ də pa.ʁi/', respell: 'zhuh vyaⁿ duh pa-REE', person: 'je', verb: 'venir', afterDe: 'place', family: 'origin', tags: ['venir-de', 'origin', 'trap', 'nasal'], drills: SD, audioRef: null, version: 1, notes: 'Word for word the same as Je viens de manger until the fourth word. A place after de is where you are from.' },
  { id: 'fr.a2.verbes.286', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Il vient de Nantes.', en: 'He is from Nantes.', ipa: '/il vjɛ̃ də nɑ̃t/', respell: 'eel vyaⁿ duh NAHⁿT', person: 'il', verb: 'venir', afterDe: 'place', family: 'origin', tags: ['venir-de', 'origin', 'trap', 'nasal'], drills: SD, audioRef: null, version: 1, notes: 'The same three words as Il vient de partir, and a completely different sentence.' },
  { id: 'fr.a2.verbes.287', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Ils viennent de Paris.', en: 'They are from Paris.', ipa: '/il vjɛn də pa.ʁi/', respell: 'eel vyenn duh pa-REE', person: 'ils', verb: 'venir', afterDe: 'place', family: 'origin', tags: ['venir-de', 'origin', 'trap'], drills: S, audioRef: null, version: 1, notes: 'The plural does it too, and the plural of the other one sounds identical up to de as well.' },

  /* ── family: two compounds, as evidence and not as a principle ────────────
   *
   * `revenir` on venir's own frame and `obtenir` on tenir's own frame, so the
   * claim is visible in the sentence rather than asserted on a card: put
   * .288 beside .269 and .289 beside .275 and only the front of the verb has
   * moved.
   *
   * TWO, and a third is NAMED without a sentence. That the family principle
   * generalises is a2.15's Owns (seq 9, prereqUnitIds ['a2.02']) and this lesson
   * hands it over rather than teaching it. */
  { id: 'fr.a2.verbes.288', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Il revient tôt.', en: 'He comes back early.', ipa: '/il ʁə.vjɛ̃ to/', respell: 'eel ruh-vyaⁿ TOH', person: 'il', verb: 'revenir', afterDe: null, family: 'family', tags: ['irregular', 'compound', 'venir'], drills: SD, audioRef: null, version: 1, notes: 'Il vient tôt with re- on the front, and nothing else about it moved.' },
  { id: 'fr.a2.verbes.289', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Il obtient la clé.', en: 'He gets the key.', ipa: '/i.lɔb.tjɛ̃ la kle/', respell: 'ee lohb-tyaⁿ lah KLAY', person: 'il', verb: 'obtenir', afterDe: null, family: 'family', tags: ['irregular', 'compound', 'tenir', 'liaison'], drills: SD, audioRef: null, version: 1, notes: 'Il tient la clé with ob- on the front. The l of il moves across because the verb now starts with a vowel.' },
];

/* THE ELISION FIX, applied here rather than in the literal above so the reason
 * is next to the value. `de` + a vowel elides to `d'`, which sons.07 taught and
 * which is not this lesson's to teach or to break. `Ils viennent de arriver.` is
 * not French. */
{
  const row = ALLER_VENIR.find((w) => w.id === 'fr.a2.verbes.284')!;
  row.fr = "Ils viennent d'arriver.";
  row.notes = 'The de elides in front of a vowel, which sons.07 already taught. The construction did not change; the spelling of one word did.';
}

/* ─── The three verbs ──────────────────────────────────────────────────────
 *
 * NONE OF THESE IS AUTHORED. Every one already exists in Postgres and is imported
 * by id; see aller-venir-imported.ts for the recorded read, which the batch
 * verifies field by field before it writes anything.
 *
 * Ordered as the learner meets them: the one that is its own shape, then the one
 * the lesson is really about, then the one that proves the second is a family. */
export const THE_THREE: readonly string[] = ['aller', 'venir', 'tenir'];

/** The compounds this lesson NAMES. Three, which is the brief's ceiling, and two
 *  of them carry an authored sentence apiece.
 *
 *  Named as EVIDENCE that `tenir` is worth learning and not as a principle. That
 *  a compound inherits its base verb's paradigm generalises to dozens of verbs
 *  and it is a2.15's Owns (seq 9), whose prereqUnitIds is ['a2.02']. */
export const COMPOUNDS: readonly string[] = ['revenir', 'devenir', 'obtenir'];

/** Which base verb each compound is built on, so the card reads the pairing
 *  rather than restating it. */
export const COMPOUND_BASE: Record<string, string> = {
  revenir: 'venir',
  devenir: 'venir',
  obtenir: 'tenir',
};

/** The unit that owns the family principle. Named by id, not by title: a
 *  boundary with no destination is a warning rather than a teaching. */
export const FAMILY_UNIT = 'a2.15';

/** The unit that owns `aller` + an infinitive, and the unit that owns which
 *  preposition follows `aller`. Both measured: a2.19 is at seq 15 with
 *  prereqUnitIds ['a2.02'], a2.04 is at seq 13. */
export const FUTUR_PROCHE_UNIT = 'a2.19';
export const PREPOSITION_UNIT = 'a2.04';
/** And the unit that owns the past tense this lesson lets the learner dodge. */
export const PASSE_COMPOSE_UNIT = 'a2.05';

/** The two units this lesson closes a loop with, by id.
 *
 *  a2.10.l1 named venir and tenir as verbs that end in -ir and take no -iss-,
 *  and conjugated neither. a2.10.l2 went further and named the MECHANISM: its
 *  cards say venir and tenir "run the shedders' mechanism with a vowel change on
 *  top", and it declares A202_BACKREF = 'a2.02' in its own terms file. Both are
 *  paid off here, and the second is much the sharper of the two. */
export const A210_BACKREF = 'a2.10';
export const A201_BACKREF = 'a2.01';

/* ─── The paradigms ────────────────────────────────────────────────────────
 *
 * The three side by side, derived nowhere else. The reference sheet, the examples
 * mission, the drills and the test all read THIS, so a table that hand-typed a
 * cell would be free to drift from the drill that scores it.
 *
 * IN THE LEDGER'S CANONICAL PRONOUN ORDER: je · tu · il · nous · vous · ils, six
 * rows and not nine. a1.05 already taught that il/elle/on share a form and
 * ils/elles share another.
 *
 * `same` is the claim the lesson exists to make about tenir: for every cell,
 * `tenir`'s form is `venir`'s form with the first letter changed. It is DERIVED
 * below rather than typed, so a cell that stops being true breaks a constant. */
export const PARADIGM: { person: string; aller: string; venir: string; tenir: string }[] = [
  { person: 'je', aller: 'vais', venir: 'viens', tenir: 'tiens' },
  { person: 'tu', aller: 'vas', venir: 'viens', tenir: 'tiens' },
  { person: 'il · elle · on', aller: 'va', venir: 'vient', tenir: 'tient' },
  { person: 'nous', aller: 'allons', venir: 'venons', tenir: 'tenons' },
  { person: 'vous', aller: 'allez', venir: 'venez', tenir: 'tenez' },
  { person: 'ils · elles', aller: 'viennent-PLACEHOLDER', venir: 'viennent', tenir: 'tiennent' },
];
PARADIGM[5].aller = 'vont';

/** THE CLAIM ABOUT tenir, AS ARITHMETIC. For every one of the six cells, the
 *  `tenir` form is the `venir` form with its first letter replaced by a t. If
 *  that ever stops being true of a cell, this is empty and the build stops.
 *
 *  This is the only reason `tenir` is in this lesson rather than in a2.12. */
export const TENIR_FOLLOWS_VENIR: string[] = PARADIGM
  .filter((r) => r.tenir === `t${r.venir.slice(1)}`)
  .map((r) => r.person);

/** And the cells where `aller` does NOT follow that rule, which is all six.
 *  Derived the same way so the "two of them are one shape and one is not" claim
 *  is measured rather than asserted. */
export const ALLER_FOLLOWS_NOTHING: string[] = PARADIGM
  .filter((r) => r.aller !== `${r.aller[0]}${r.venir.slice(1)}` && r.aller !== r.venir)
  .map((r) => r.person);

/** The two cells of `aller` that come from a different stem entirely. The whole
 *  point of the aller act: four cells from v-, two from all-, and no rule joins
 *  them. */
export const ALLER_STEMS: { stem: string; persons: string[] }[] = [
  { stem: 'v-', persons: PARADIGM.filter((r) => r.aller.startsWith('v')).map((r) => r.person) },
  { stem: 'all-', persons: PARADIGM.filter((r) => r.aller.startsWith('all')).map((r) => r.person) },
];

/* ─── THE TWO JOBS ─────────────────────────────────────────────────────────
 *
 * THE HEADLINE SCREEN, AND THE WHOLE TRAP.
 *
 * Same three words, two jobs, and the only thing that separates them is what
 * comes after `de`. The brief named this as the layout the test must assert: both
 * uses in ONE section, both sides present, never split across two screens.
 *
 * The order is the learner's order rather than the lesson's: the PLACE use is
 * first because it is the one they already have — 52 of the 80 published `venir
 * de` sentences are that one, and 26 of those are a country or a city out of
 * a1.22. The new job is second, because arriving at it is the mission.
 *
 * This is the first of four instances of one shape across A2 (doctrine §B.7).
 * `a2.18`, `a2.19` and `a2.15` are each told to point back at this unit by id,
 * and the name they are told to quote is WHAT_FOLLOWS in aller-venir-terms.ts. */
export const TWO_JOBS: { after: string; job: string; id: string; kind: 'place' | 'infinitive' }[] = [
  { after: 'a place', job: 'where you are from', id: 'fr.a2.verbes.285', kind: 'place' },
  { after: 'an action', job: 'what you have just done', id: 'fr.a2.verbes.279', kind: 'infinitive' },
];

/** The two rows of TWO_JOBS are the SAME SENTENCE up to `de`. Derived, so a row
 *  that is swapped for one with a different subject breaks this rather than
 *  quietly weakening the screen. */
export const TWO_JOBS_SHARED_PREFIX = 'Je viens de ';

/* ─── The pairs and triples ────────────────────────────────────────────────  */

/** THE SINGULAR TRIPLES: three spellings whose respellings are ONE STRING once
 *  the pronoun token comes off.
 *
 *  Two triples on two verbs, because one triple is a fact about venir. `viens`,
 *  `viens`, `vient` and `tiens`, `tiens`, `tient` are each one sound. Asserted as
 *  an EQUALITY by the batch and by the test rather than trusted to survive an
 *  edit. */
export const SINGULAR_TRIPLES: string[][] = [
  ['fr.a2.verbes.267', 'fr.a2.verbes.268', 'fr.a2.verbes.269'],
  ['fr.a2.verbes.273', 'fr.a2.verbes.274', 'fr.a2.verbes.275'],
];

/** The respelling with its first token removed, which is how a triple is
 *  compared: the pronouns differ audibly and everything after them must not. */
export const afterPronoun = (respell: string): string => respell.split(' ').slice(1).join(' ');

/** THE PAIRS WHOSE ONLY AUDIBLE DIFFERENCE IS THE VERB'S OWN ENDING.
 *
 *  `[singular, plural]`, and here the plural really is audible: `eel vyaⁿ` against
 *  `eel vyenn` and `eel tyaⁿ` against `eel tyenn`. `il` and `ils` are one sound
 *  and so are `elle` and `elles`, so the verb is the whole evidence, which is what
 *  makes the ear mission a real task rather than a pronoun quiz.
 *
 *  These are also the ONLY pairs a `listenChoose` may ask "one or several?"
 *  about. */
export const NUMBER_PAIRS: [string, string][] = [
  ['fr.a2.verbes.269', 'fr.a2.verbes.272'],
  ['fr.a2.verbes.275', 'fr.a2.verbes.278'],
];

/* ─── THE CROSS-LESSON SCREEN ──────────────────────────────────────────────
 *
 * Three lessons, one frame word, three different things happening to the plural.
 * The first two pairs are IMPORTED whole from a2.10.l1 and a2.10.l2; the third is
 * this lesson's own. See the header for why they are imported rather than twinned.
 *
 * This is the a2.10 back-reference the brief asks for, and it closes the loop by
 * showing the mechanism rather than by mentioning it. */
export const TOT_FRAME: { unit: string; verb: string; singular: string; plural: string; what: string }[] = [
  { unit: 'a2.10', verb: 'finir', singular: 'fr.a2.verbes.183', plural: 'fr.a2.verbes.186', what: 'a whole syllable is pushed in' },
  { unit: 'a2.10', verb: 'partir', singular: 'fr.a2.verbes.463', plural: 'fr.a2.verbes.464', what: 'a consonant comes back' },
  { unit: 'a2.02', verb: 'venir', singular: 'fr.a2.verbes.269', plural: 'fr.a2.verbes.272', what: 'a consonant comes back and the vowel leaves the nose' },
];

/** The frame word all six share. Named once so the screen, the batch and the test
 *  read one string. */
export const FRAME_WORD = 'tôt';

/** The one row of TOT_FRAME this lesson owns. Derived, so an author who moves the
 *  venir pair out breaks a constant rather than only the prose. */
export const TOT_FRAME_MINE = TOT_FRAME.filter((r) => r.unit === 'a2.02');

/* ─── THE SPELLINGS AN EAR QUESTION MAY NEVER ASK BETWEEN ──────────────────
 *
 * Each group is a set of forms that are IDENTICAL out loud. A `listenChoose`
 * offering two members of one group has no correct answer, and marking one of
 * them right would certify a bug.
 *
 * `vas` and `va` is the one somebody would miss: `tu vas` and `il va` are both
 * /va/ and the spelling differs by an s nothing says. The brief asked for this to
 * be reported; it is reported AND enforced, because a sentence in a report cannot
 * fail. */
export const HOMOPHONE_FORMS: string[][] = [
  ['viens', 'vient'],
  ['tiens', 'tient'],
  ['vas', 'va'],
  ['reviens', 'revient'],
  ['deviens', 'devient'],
  ['obtiens', 'obtient'],
];

/* ─── Respelling repairs ───────────────────────────────────────────────────
 *
 * NONE, IN EITHER DIRECTION, AND THAT IS THE FIRST TIME IN THIS BAND.
 *
 * Corrections §6 tells every remaining author to split the repair table in two,
 * because a2.10's guard rejects a repair the shared checker cannot see. The split
 * is kept here, both halves empty, with the guards still running, because the
 * shape is what the next author needs rather than the conclusion.
 *
 * The reason there is nothing to repair is worth stating: NOT ONE of the six
 * imported headwords contains a nasal vowel. `aller`, `venir`, `tenir`,
 * `revenir`, `devenir` and `obtenir` are `ah-LAY`, `vuh-NEER`, `tuh-NEER`,
 * `ruh-vuh-NEER`, `duh-vuh-NEER` and `ohb-tuh-NEER`, checked row by row against
 * Postgres on 2026-08-12. The nasal work in this lesson is entirely in the
 * sentences it authors, where the nasal is in the CONJUGATED form and never in
 * the naming form.
 *
 * ONE COMPETING RESPELLING WAS FOUND AND DELIBERATELY LEFT ALONE. `aller` has two
 * rows: `ah-LAY` at fr.sons.verbes-essentiels.003 and `a-LAY` at
 * fr.sons.consonnes.143. Neither breaks a stated rule and invariants §9 says a
 * variant is not a violation, so this build imports the verb-theme row and
 * repairs nothing. It is recorded in NOT_REPAIRED so the next author can see it
 * was seen. */
export type Repair = { id: string; fr: string; from: string; to: string; why: string };

export const RESPELL_REPAIRS_VISIBLE: Repair[] = [];
export const RESPELL_REPAIRS_INVISIBLE: Repair[] = [];
export const RESPELL_REPAIRS: Repair[] = [...RESPELL_REPAIRS_VISIBLE, ...RESPELL_REPAIRS_INVISIBLE];

/** Rows carrying a competing respelling that this build does NOT repair, recorded
 *  so the next author can see they were seen. */
export const NOT_REPAIRED: { id: string; fr: string; stored: string; why: string }[] = [
  { id: 'fr.sons.consonnes.143', fr: 'aller', stored: 'a-LAY', why: 'a variant of ah-LAY, not a violation. Invariants §9. Not displayed here: this lesson imports fr.sons.verbes-essentiels.003.' },
  { id: 'fr.b1.verbes.058', fr: 'obtenir', stored: 'ob-tuh-NEER', why: 'a variant of ohb-tuh-NEER, and a b1 row. This lesson imports the a2 row.' },
  { id: 'fr.b2.philosophie.136', fr: 'le devenir', stored: 'luh duhv-NEER', why: 'a NOUN carrying gender=m, not the verb. Importing it would join a1.03 ending population.' },
];

/* ─── Drill additions ──────────────────────────────────────────────────────
 *
 * NONE, and that was measured rather than assumed. All six infinitives are
 * RELEASED into the flashcard hub by a deckTranche, and a released row needs a
 * `flashcard` drill to be served as a card. All six already carry one, checked
 * against Postgres by the manifest generator on 2026-08-12. The batch still runs
 * the check, so the day one of these rows loses its drill the build stops.
 *
 * NO `voiceflash` IS ADDED EITHER, and that is a placement decision. `obtenir`
 * carries {flashcard, review} and no voiceflash, so it could not be spoken; this
 * lesson speaks its authored sentences and never a bare infinitive, which is
 * a2.01's rule and the reason the shortfall does not matter. */
export const DRILL_ADDITIONS: { id: string; add: 'flashcard' | 'voiceflash'; why: string }[] = [];

/* ─── THE RESPELLINGS THE SHARED CHECKER CANNOT SEE ────────────────────────
 *
 * TWO SHAPES, AND THE BRIEF DESCRIBES NEITHER OF THEM CORRECTLY. Measured
 * 2026-08-12 by breaking each superscript back to a plain n one at a time and
 * asking `hasPlainNasalFor` whether it noticed: 22 superscripts, 21 seen, 1 blind.
 *
 * BLIND_NASALS is the one it cannot see: `NAHⁿT` in `Il vient de Nantes.`, a
 * nasal followed by a consonant INSIDE the token, which is exactly the a2.11
 * shape and the only instance of it here.
 *
 * DOUBLE_N is a different failure and the one the brief mistook for the first.
 * `viennent` /vjɛn/ and `tiennent` /tjɛn/ have NO NASAL VOWEL AT ALL: an oral
 * vowel and a real /n/. The checker short-circuits on the `nn` in the French
 * spelling (density.logic.ts:215) and so returns false for any respelling of
 * them, which means it would not catch `vyen` either. The house device for that
 * case is invariants §3's `automne` answer, a DOUBLED N, and it is asserted by
 * name in both directions. */
export const BLIND_NASALS: { id: string; must: string; why: string }[] = [
  { id: 'fr.a2.verbes.286', must: 'NAHⁿT', why: 'Nantes: the nasal is followed by a T inside the token, so the checker cannot reach it. eel vyaⁿ duh NAHnT passes and is wrong.' },
];

/** The half-repair that would pass the shared checker and still be wrong.
 *  Asserted as a NEGATIVE in the batch and the test: if the checker ever learns to
 *  see this, invariants §3 needs updating and the by-name list can go. */
export const HALF_REPAIRED_NANTES = { fr: 'Il vient de Nantes.', respell: 'eel vyaⁿ duh NAHnT' } as const;

/** THE DOUBLED N, which is a real consonant and not a nasal vowel.
 *
 *  `must` is the string that has to appear, `singleN` is the version the checker
 *  ALSO does not flag, which is what makes the by-name assertion necessary. */
export const DOUBLE_N: { id: string; must: string; singleN: string; why: string }[] = [
  { id: 'fr.a2.verbes.272', must: 'vyenn', singleN: 'vyen', why: 'ils viennent /vjɛn/: an oral vowel and a real n. The doubled n stops an English eye reading it as a nasal vowel.' },
  { id: 'fr.a2.verbes.278', must: 'tyenn', singleN: 'tyen', why: 'ils tiennent /tjɛn/, the same shape on the second verb.' },
  { id: 'fr.a2.verbes.284', must: 'vyenn', singleN: 'vyen', why: "ils viennent d'arriver" },
  { id: 'fr.a2.verbes.287', must: 'vyenn', singleN: 'vyen', why: 'ils viennent de Paris' },
];

/* ─── The dictée ───────────────────────────────────────────────────────────  */

/** The dictée targets: every authored row carrying the `dictation` drill.
 *  DERIVED, so a row that loses the tag drops out here rather than rendering as a
 *  dictée the app cannot run. Every one is at or under dicteeMode's 16-letter
 *  limit, and the batch proves that through the real `dicteeMode`. */
export const DICTATION_IDS: string[] = ALLER_VENIR.filter((w) => w.drills?.includes('dictation')).map((w) => w.id);

/** THE DICTÉE, AND WHAT IT CAN ACTUALLY GRADE.
 *
 *  MissionRich checks a dictée with `normalizeFr(filled) === normalizeFr(target)`,
 *  and normalizeFr normalises to NFD and strips every combining mark. A dropped
 *  letter and an added one survive that; an accent does not.
 *
 *  Each row is a target, the near miss a learner would actually make, and whether
 *  the app can tell them apart. The batch and the test run BOTH claims through the
 *  real `normalizeFr`: the scorable ones must differ and the unscorable ones must
 *  collide. The shape is a2.09's and it is copied deliberately, so that if `fold`
 *  is ever fixed the assertion fails instead of quietly going stale.
 *
 *  THE ONE THAT MATTERS IS `Je viens manger.` AGAINST `Je viens de manger.` The
 *  dropped `de` is the error that turns the recent past into a statement about
 *  coming to eat, and it is letters all the way down, so the dictée grades it. */
export const DICTEE_NEAR_MISS: { id: string; wrong: string; scorable: boolean; what: string }[] = [
  { id: 'fr.a2.verbes.262', wrong: 'Tu va au parc.', scorable: true, what: 'the tu form losing its s, which nothing in the sound would ever have caught' },
  { id: 'fr.a2.verbes.263', wrong: 'Il vas au parc.', scorable: true, what: 'the s carried onto il. vas and va are one sound, so the page is the only place this exists.' },
  { id: 'fr.a2.verbes.267', wrong: 'Je vient tôt.', scorable: true, what: 'the il spelling on the je row. All three are one sound.' },
  { id: 'fr.a2.verbes.269', wrong: 'Il viens tôt.', scorable: true, what: 'and the reverse: the je spelling on il' },
  { id: 'fr.a2.verbes.270', wrong: 'Nous viennons tôt.', scorable: true, what: 'the singular stem carried into the plural, which is the commonest error on this verb' },
  { id: 'fr.a2.verbes.272', wrong: 'Ils venent tôt.', scorable: true, what: 'the plural stem given the singular vowel, which is the same error from the other side' },
  { id: 'fr.a2.verbes.275', wrong: 'Il tiens la clé.', scorable: true, what: 'and the reverse on il' },
  { id: 'fr.a2.verbes.278', wrong: 'Ils tienent la clé.', scorable: true, what: 'a single n where the sound needs two' },
  { id: 'fr.a2.verbes.279', wrong: 'Je viens manger.', scorable: true, what: 'THE ERROR THE LESSON EXISTS TO STOP. Drop the de and the sentence stops being a past at all.' },
  { id: 'fr.a2.verbes.281', wrong: 'Il vient partir.', scorable: true, what: 'the dropped de again, on the sentence a learner will use most' },
  { id: 'fr.a2.verbes.282', wrong: 'On viens de finir.', scorable: true, what: 'on given the je spelling. on takes the il form and this is the one place a learner meets that on an irregular verb.' },
  { id: 'fr.a2.verbes.285', wrong: 'Je viens de paris.', scorable: false, what: 'THE CAPITAL on Paris. fold() strips case, so this is graded correct. Invariants §4, and a1.08 and a1.09 both got it wrong before it was measured.' },
  { id: 'fr.a2.verbes.286', wrong: 'Il vient de Nante.', scorable: true, what: 'a dropped s at the end of a place name, which does survive a fold' },
  { id: 'fr.a2.verbes.288', wrong: 'Il reviens tôt.', scorable: true, what: 'the compound taking the je spelling, so the family claim is tested and not only stated' },
  { id: 'fr.a2.verbes.289', wrong: 'Il obtiens la clé.', scorable: true, what: 'and the same on the tenir compound' },
];

/** Derived from DICTEE_NEAR_MISS rather than typed, so the list and the evidence
 *  for it cannot drift apart. */
export const SCORABLE_DICTATION_IDS: string[] = DICTEE_NEAR_MISS.filter((d) => d.scorable).map((d) => d.id);
/** And the ones the check cannot settle, named so nobody comes to believe it can. */
export const UNSCORABLE_DICTATION_IDS: string[] = DICTEE_NEAR_MISS.filter((d) => !d.scorable).map((d) => d.id);

/* ─── THE FUTUR PROCHE, WHICH IS a2.19's ───────────────────────────────────
 *
 * `aller` + an infinitive means "about to", and this lesson conjugates `aller` in
 * full, so the temptation is total. a2.19 sits at seq 15 with prereqUnitIds
 * ['a2.02'] and its canDo is "Can say what they are going to do, and make it
 * negative". If this lesson teaches it, that unit has no lesson.
 *
 * The guard is STRUCTURAL rather than a word list, because a word list of
 * "vais manger, vas manger, va manger, ..." would miss the infinitive nobody
 * thought of. Any form of aller followed directly by a naming form is the futur
 * proche, whatever the verb.
 *
 * Scoped to PRODUCTION SURFACES, exactly as the brief says: decks, vocabulary,
 * drills and the quiz. The card that hands the construction over has to be able to
 * say the words "aller" and "an action after it", and a guard that fires on that
 * is a guard the next author deletes. Invariants §1 records four ways that has
 * already happened here. */
export const FUTUR_PROCHE_SHAPE = /\b(vais|vas|va|allons|allez|vont)\s+(?:ne\s+|n['’]\s*)?[a-zà-ÿ]{3,}(?:er|ir|re|oir)\b/i;

/** And the same for the passé composé, which is a2.05 and a2.21. This lesson
 *  hands the learner a past without one, so no auxiliary-plus-participle may
 *  appear anywhere a learner reads.
 *
 *  RESTRICTED TO THE ACCENTED PARTICIPLE, DELIBERATELY. The obvious version of
 *  this regex also matches participles ending in -i, -is, -it, -u and -us, and
 *  every one of those endings is an ordinary English word ending as well: `as a
 *  bit`, `a visit`, `a status` and `is a unit` all match it, and every
 *  instruction line in this lesson is English. A guard that fires on legitimate
 *  prose is a guard the next author deletes, and invariants §1 records four ways
 *  that has already happened here.
 *
 *  The -é family cannot be English, because of the accent, and it is also the
 *  one that would actually leak: a2.05's whole subject is `-ER` participles, and
 *  the form a learner reaches for when trying to say `il vient de parti` is
 *  `parti`, which is caught by PASSE_COMPOSE_PHRASES below rather than here.
 *
 *  AND IT DOES NOT USE `\b` AT EITHER END. Found by mutation-testing on
 *  2026-08-12: the first version of this ended `(?:é|és|ée|ées)\b` and NEVER
 *  FIRED, on any real passé composé, because `\b` in JavaScript is ASCII-only and
 *  `é` is not an ASCII word character. `Il a mangé.` sailed straight through it.
 *  Invariants §0 records exactly this trap — "/\ben été\b/ matches nothing" — and
 *  this guard walked into it anyway. Both ends are explicit character classes
 *  now, and the three real cases and the four English near-misses are asserted in
 *  the test rather than trusted to this comment. */
export const PASSE_COMPOSE_SHAPE = /(^|[^a-zà-ÿ])(ai|as|a|avons|avez|ont|suis|est|sommes|sont)\s+[a-zà-ÿ]{2,}(é|és|ée|ées)(?![a-zà-ÿ])/i;

/** The handful of irregular participles a learner might see leak into this
 *  lesson, listed rather than matched because their endings are indistinguishable
 *  from ordinary English words. Checked as whole phrases, so `a fini` fires and
 *  the English word `finish` does not. */
export const PASSE_COMPOSE_PHRASES: readonly string[] = [
  'ai fini', 'a fini', 'ont fini', 'avons fini',
  'ai vendu', 'a vendu', 'ont vendu',
  'est parti', 'est partie', 'sont partis', 'suis parti',
  'est arrivé', 'sont arrivés', 'suis arrivé',
  'est venu', 'sont venus', 'suis venu',
  'ai tenu', 'a tenu', 'est allé', 'sont allés', 'suis allé',
];

/** Where the passé composé is, as a distance rather than an ordinal. Derived from
 *  the two units' measured seq values so a curriculum reorder moves the prose. */
export const A202_SEQ = 5;
export const A205_SEQ = 16;
export const PASSE_COMPOSE_DISTANCE = A205_SEQ - A202_SEQ;

/* ─── Accessors ────────────────────────────────────────────────────────────  */

/** Lookup by id. The lesson body builds every screen through this. */
export const BY_ID: ReadonlyMap<string, AvSentence> = new Map(ALLER_VENIR.map((w) => [w.id, w]));

/** Every authored id, in sequence order. */
export const AUTHORED_IDS: string[] = ALLER_VENIR.map((w) => w.id);

/** The ids of one teaching family, in sequence order. */
export const familyIds = (f: AvSentence['family']): string[] =>
  ALLER_VENIR.filter((w) => w.family === f).map((w) => w.id);

/** The ids showing one PERSON, in sequence order. Lets the test assert all seven
 *  persons reach a screen against the corpus rather than a hand list that could
 *  quietly lose `vous`. */
export const personIds = (p: AvSentence['person']): string[] =>
  ALLER_VENIR.filter((w) => w.person === p).map((w) => w.id);

/** One verb's paradigm, in the ledger's canonical pronoun order. */
export const paradigmIds = (v: 'aller' | 'venir' | 'tenir'): string[] => familyIds(v);

/** THE ROWS THAT PUT AN INFINITIVE AFTER `de`, which is the Owns. Derived, so a
 *  row that changes what follows its `de` drops out of here and the guards that
 *  count it go red. */
export const RECENT_PAST_IDS: string[] = ALLER_VENIR.filter((w) => w.afterDe === 'infinitive').map((w) => w.id);
/** And the rows that put a place there, which is the trap's other half. */
export const ORIGIN_IDS: string[] = ALLER_VENIR.filter((w) => w.afterDe === 'place').map((w) => w.id);

/** The French line alone. */
export const fr = (id: string): string => {
  const w = BY_ID.get(id);
  if (!w) throw new Error(`aller-venir corpus: unknown id "${id}"`);
  return w.fr;
};

/** The bracketed respelling alone, which is what a deck card's `sub` line
 *  carries. Built HERE, once, rather than baked into the stored data: the
 *  validator checks the rendered form and storing the brackets would double them
 *  up. */
export const sub = (id: string): string => {
  const w = BY_ID.get(id);
  if (!w) throw new Error(`aller-venir corpus: unknown id "${id}"`);
  return w.respell ? `[${w.respell}]` : '';
};

/** The respelling with no brackets, for a tapTable cell that is not notation. */
export const bare = (id: string): string => {
  const w = BY_ID.get(id);
  if (!w) throw new Error(`aller-venir corpus: unknown id "${id}"`);
  return w.respell ?? '';
};

/** The English gloss alone. */
export const en = (id: string): string => {
  const w = BY_ID.get(id);
  if (!w) throw new Error(`aller-venir corpus: unknown id "${id}"`);
  return w.en;
};

/** The corpus Item, stripped of the lesson-only fields. `person`, `verb`,
 *  `afterDe` and `family` are lesson display data and live in the lesson's own
 *  section bodies, not on the shared row. */
export function toItem(w: AvSentence): Item {
  const { person: _p, verb: _v, afterDe: _a, family: _f, ...item } = w;
  return item;
}
