// The a2.10 corpus: what this lesson had to author, what it imports, and what
// its brief got wrong.
//
// THIS FILE IS THE SINGLE SOURCE OF TRUTH for the 25 authored entries below and
// for every respelling a2.10 puts on a screen. The lesson body reads `fr`, `ipa`,
// `respell` and `en` FROM HERE and never restates them.
//
// ── WHAT THE BRIEF GOT WRONG, MEASURED 2026-08-11 ──────────────────────────
//
// 1. THE REFRAME CANDIDATE IS PHONETICALLY FALSE FOR THE ONE FORM THE LESSON
//    MOST NEEDS IT TO BE TRUE ABOUT. The brief proposes "The plural grows a
//    syllable" and says of the headline pair: "il finit one syllable ending, ils
//    finissent an extra syllable, clearly audible."
//
//      il finit        /il fi.ni/    the verb is TWO syllables
//      ils finissent   /il fi.nis/   the verb is TWO syllables
//
//    `finissent` grows a final /s/, not a syllable. The syllable claim is true of
//    `nous finissons` /fi.ni.sɔ̃/ and `vous finissez` /fi.ni.se/ and of nothing
//    else in the paradigm. A reframe is carried verbatim through eight sections;
//    it cannot be false in the mission where the learner meets the contrast. That
//    is a2.01's own reason for rejecting "Endings are silent", and the same
//    reason applies here.
//
//    The pedagogy the brief is reaching for survives intact, and the corrected
//    reframe is in verbes-ir-terms.ts. What the plural adds is a SOUND: /s/ for
//    ils and elles, a whole syllable for nous and vous. Either way the ear
//    receives something, which is the inversion of a2.01.
//
// 2. The identity block has `title` and `sub` SWAPPED, and its `sub` is not in
//    the database at all. THIRD TIME IN THREE A2 BUILDS. The unit dump says
//    t: "Regular -IR Verbs", sub: "Les verbes en -IR". The brief's
//    "the finir model - and the -iss- in the plural" exists nowhere in Postgres,
//    and it carries an em dash, which is banned in every user-facing string.
//    The brief said to copy from the probe rather than from itself and that
//    instruction was the correct one, again.
//
// 3. "author-verbes-batch.ts claims finir and choisir were placed. Probe before
//    authoring." Both exist and NEITHER is in `verbes`. `finir` is
//    fr.sons.verbes-essentiels.037 and fr.a1.rp-travail-etudes.045; `choisir` is
//    three rows across `courses`, `marche` and `verbes-essentiels`. What `verbes`
//    holds is finir SENTENCES: fr.a2.verbes.003 "Nous finissons nos devoirs.",
//    .006 and .012. And the ledger's §0 warning stands: `pnpm content:verbes`
//    would overwrite two of a2.01's imports with nouns. Nobody runs it.
//
//    ALL TEN of this lesson's verbs already exist. THIS LESSON AUTHORS NOT ONE
//    INFINITIVE.
//
// 4. "Whether any unit in the curriculum owns partir/sortir/dormir." NONE DOES,
//    and it is worse than the brief expected. All 76 curriculum units were read
//    out of `content_units` and searched for the whole class: partir, sortir,
//    dormir, servir, sentir, ouvrir, offrir, courir. Not one unit at any level
//    names any of them. The only unit whose body contains the string "-ir" or
//    "iss" at all is a2.10 itself. `venir` and `tenir` have a home (a2.02, seq
//    5); the rest of the most frequent -IR verbs in the language are taught by
//    nobody. That is a curriculum hole and it is reported rather than filled.
//
// 5. The brief's search list "partir, sortir, dormir, servir, venir, tenir,
//    ouvrir" understates the class. `sentir`, `offrir` and `courir` are the same
//    shape and all three already exist as corpus rows, so a learner meets them.
//    The card names ten.
//
// ── What the corpus could not supply, and so what is authored ──────────────
//
// The corpus has -IR forms and no minimal pairs. Counted 2026-08-11 in Postgres:
// `nous choisissons` 9 sentences, `elle finit` 6, `nous finissons` 4,
// `je choisis` 4, `il choisit` 4, `on finit` 3, `tu choisis` 3, `il finit` 1,
// `ils finissent` 1, `je réussis` 1, and ZERO for `vous finissez`,
// `elles finissent`, `vous choisissez`, `ils choisissent`, `ils réussissent`,
// `nous réfléchissons`, `ils grandissent`, `il grandit`, `tu remplis`,
// `vous remplissez`, `il obéit`, `ils obéissent`.
//
// Every one of the existing sentences was written for its own theme and carries
// its own object, so comparing two of them compares their subject matter as well
// as their number. THE ONE THING this lesson has to show is a pair in which
// nothing moves but the person and the sound that answers to it. a2.01 could
// reuse `fr.a2.verbes.001` as the `je` row of its frame; nothing here fits, so
// this lesson authors all six.
//
// That is the whole authoring case. 25 rows:
//
//   paradigm  6   the finir frame, all six persons, one frame, one word after it
//   pair      6   three singular/plural pairs on three other verbs, so the
//                 contrast reads as a system rather than a fact about finir
//   hidden    3   the singular triple on a second verb: three spellings whose
//                 respellings are the SAME STRING once the pronoun comes off
//   apply    10   the ten verbs used by a person, across all seven persons
//
// ── kind: every authored entry is a `sentence`, deliberately ───────────────
//
// The ledger settled this for the level: only infinitives and full sentences are
// corpus rows, never a bare conjugated form. A bare `finissent` as a row would be
// served by the flashcard hub as a card with no subject, which is the one thing
// this lesson teaches you not to do.
//
// flashhub-coverage.test.ts also fails the build when two NON-sentence rows in one
// theme share an `fr`, and this lesson authors near-identical pairs on purpose
// (`Elle choisit.` against `Elles choisissent.`). They are sentences, they are
// stored as sentences, and that rule leaves them alone.
//
// No authored row carries `gender` and none is a single word, so nothing here can
// join a1.03's measured ending population. The batch proves that through the real
// `endingPopulation` rather than claiming it.
//
// ── THE CLASS THAT LOOKS THE SAME AND IS NOT ──────────────────────────────
//
// partir, sortir, dormir, servir, sentir, venir, tenir, ouvrir, offrir and courir
// end in -ir and take no -iss- anywhere. Several are more frequent than any verb
// in the regular set. They are NAMED on one card (s16-notmine) and CONJUGATED
// NOWHERE, right or wrong.
//
// "Right or wrong" is a decision. The brief's own worry is that a learner who
// generalises produces `ils partissent`, and the obvious move is to print that in
// a commonErrors card so it can be rejected. This lesson does not, because the
// wrong plural of a verb the lesson never conjugates is a form the learner has no
// correct version to replace it with: the card would leave `partissent` in memory
// with nothing to overwrite it. The boundary is taught as a boundary instead.
// NOT_THIS_FAMILY_FORMS below carries both the correct and the over-generalised
// forms, and the guard refuses all of them on a production surface.
//
// ── What is NOT here, and why ──────────────────────────────────────────────
//
// - NO -RE VERB. a2.11, seq 4, is the very next lesson.
// - NO STEM-CHANGING -ER VERB. a2.09 owns those and this lesson names none.
// - NO PAST TENSE and NO IMPERFECT. `nous finissions` and `j'ai fini` are later
//   units. Every authored row is a simple present with an explicit subject.
// - NO `choisir` IN A RESTAURANT OR SHOPPING FRAME. Those belong to a2.07 and
//   a2.26. `choisir` appears here as a verb in a paradigm and in one neutral
//   sentence about a class timetable, never as vocabulary or as a scenario.
//
// ── Respelling convention, and where the two halves of the sound sit ───────
//
// The ledger binds the level: hyphenated syllables, stressed syllable
// capitalised, nasal vowels closed with a SUPERSCRIPT n and never a plain n or m,
// /ø œ/ as EU, /y/ as Ü, and A SILENT ENDING IS WRITTEN AS NOTHING.
//
// That last rule is what makes these respellings carry the teaching:
//
//   je finis · tu finis · il finit    fee-nee     one string, three spellings
//   ils finissent                     fee-nees    the same string plus one letter
//   nous finissons                    fee-nee-sohⁿ
//   vous finissez                     fee-nee-say
//
// The singular triple's three respellings are IDENTICAL once the pronoun token is
// removed, and the test asserts that as an equality rather than trusting it to
// survive an edit. That is a2.01's `.102`/`.105` trick, applied to the half of
// this paradigm where a2.01's fact is still true.
//
// ── The nasal checker, in both directions ─────────────────────────────────
//
// `hasPlainNasalFor` has two blind spots (invariants §3) and this lesson meets
// both.
//
// IT CANNOT SEE A WORD-INTERNAL NASAL. It needs the n or m to end a token, so
// `ahⁿ-SAHNBL` for `ensemble` would sail through it while being wrong: the N is
// followed by B inside the token. fr.a2.verbes.196 is asserted BY NAME.
//
// IT FALSE-POSITIVES ON A REAL /n/ AFTER A VOWEL. `la semaine` is /sə.mɛn/, a
// genuine pronounced n, and the correct respelling `suh-MEN` matches the
// checker's token pattern. It survives only because of the `[vowel][nm]e` escape
// hatch in the French spelling. fr.a2.verbes.204 is asserted BY NAME in the other
// direction, so a later author who trusts the checker does not "repair" it into a
// nasal that is not there.
//
// The brief predicted this false positive would land on `finissent`. It does not:
// `fee-NEES` has no n or m in it at all. It lands on `la semaine`.
//
// ── The three respellings repaired ────────────────────────────────────────
//
// Not variants. Each closes a genuine nasal vowel with a plain n, each is flagged
// by `hasPlainNasalFor` rather than by a judgement here, and all three are on
// rows this lesson displays as cards. `remplir` is the one that matters most: the
// lesson prints it beside `Je remplis le formulaire.`, whose respelling is
// `rahⁿ-plee`, and a card reading `rahn-PLEER` next to it teaches a vowel
// difference that is not there.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

/* ─── The id block ─────────────────────────────────────────────────────────
 *
 * fr.a2.verbes.181 .. .220, allocated in A2-BATCH-1-LEDGER.md §2. `fr.a2.verbes`
 * held 151 rows with max .166 when this block was claimed, and the gaps
 * (.126-.140, .167-.180) are the unused tails of a2.01's and a2.09's blocks and
 * are deliberate: ids are the SRS key and nobody backfills them. The batch checks
 * the row COUNT as well as the maximum, because a concurrent lesson landing below
 * the top is invisible to a highest-id check, which is how a1.20 lost an hour. */
export const OWNED_ID_RANGE = { from: 'fr.a2.verbes.181', to: 'fr.a2.verbes.220' } as const;

/** The theme this lesson writes into. One decision, made in the ledger. */
export const THEME = 'verbes';

/** A corpus entry plus the lesson-facing display data the renderer needs. */
export type IrSentence = Omit<Item, 'drills'> & {
  /** Which person this sentence puts on screen, in paradigm order. */
  person: 'je' | 'tu' | 'il' | 'nous' | 'vous' | 'ils' | 'on';
  /** Does the verb in this cell carry the extra sound? THE WHOLE LESSON is the
   *  answer to this question per cell, so it is stored rather than restated per
   *  screen. `on finit` is the row that makes this worth storing: it means we and
   *  it is false. */
  grows: boolean;
  /** Which teaching family. Drives the drill pools and the deckTranche slices so
   *  neither restates a word list. */
  family: 'paradigm' | 'pair' | 'hidden' | 'apply';
  drills: Item['drills'];
};

/** Speakable: the mic-scored deck runs `voiceflash`, and an item without it
 *  renders in a speak mission as a card the mic cannot score. */
const S: Item['drills'] = ['sentence', 'flashcard', 'voiceflash', 'review'];
/** Speakable and spellable. Only on rows the dictée names, and every one of those
 *  is at or under the 16-letter limit so it spells from LETTERS. */
const SD: Item['drills'] = ['sentence', 'flashcard', 'voiceflash', 'review', 'dictation'];

/** The 25 authored entries, in sequence order. */
export const VERBES_IR: IrSentence[] = [
  /* ── paradigm: one verb, one frame, nothing moving but the person ─────────
   *
   * Six rows and six authored, unlike a2.01, whose `je` row was already
   * published. Nothing in the corpus fits this frame; see the header.
   *
   * `tôt` is the frame word and it was chosen by measurement rather than taste.
   * Every one of these six has to be a dictée target, because the spellings the
   * ear cannot settle are the entire second half of the lesson, and dicteeMode()
   * switches to WORD tiles above 16 letters. `Je finis le travail.` is exactly 16
   * and passes; `Ils finissent le travail.` is 21 and does not. With `tôt` the
   * longest of the six is 16 and all six spell from letters.
   *
   * .181, .182 and .183 carry THE SAME RESPELLING once the pronoun token is
   * removed. That is not a copy-paste slip, it is the half of a2.01 that is still
   * true, and the test asserts the three are equal rather than merely present. */
  { id: 'fr.a2.verbes.181', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je finis tôt.', en: 'I finish early.', ipa: '/ʒə fi.ni to/', respell: 'zhuh fee-nee TOH', person: 'je', grows: false, family: 'paradigm', tags: ['ir-verb', 'paradigm', 'singular'], drills: SD, audioRef: null, version: 1, notes: 'Said exactly like Tu finis tôt and Il finit tôt. Three spellings, one sound.' },
  { id: 'fr.a2.verbes.182', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Tu finis tôt.', en: 'You finish early.', ipa: '/ty fi.ni to/', respell: 'tü fee-nee TOH', person: 'tu', grows: false, family: 'paradigm', tags: ['ir-verb', 'paradigm', 'singular'], drills: SD, audioRef: null, version: 1, notes: 'The -s is silent, exactly as it was on an -er verb. Only tu tells you.' },
  { id: 'fr.a2.verbes.183', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Il finit tôt.', en: 'He finishes early.', ipa: '/il fi.ni to/', respell: 'eel fee-nee TOH', person: 'il', grows: false, family: 'paradigm', tags: ['ir-verb', 'paradigm', 'singular'], drills: SD, audioRef: null, version: 1, notes: 'The -t is silent. This is the half of the pair the ear can settle against the plural.' },
  { id: 'fr.a2.verbes.184', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous finissons tôt.', en: 'We finish early.', ipa: '/nu fi.ni.sɔ̃ to/', respell: 'noo fee-nee-sohⁿ TOH', person: 'nous', grows: true, family: 'paradigm', tags: ['ir-verb', 'paradigm', 'plural', 'nasal'], drills: SD, audioRef: null, version: 1, notes: 'A whole syllable more than the singular. Out loud most rooms say on finit instead.' },
  { id: 'fr.a2.verbes.185', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Vous finissez tôt.', en: 'You finish early.', ipa: '/vu fi.ni.se to/', respell: 'voo fee-nee-say TOH', person: 'vous', grows: true, family: 'paradigm', tags: ['ir-verb', 'paradigm', 'plural'], drills: SD, audioRef: null, version: 1, notes: 'A whole syllable more as well, and it does not sound like the naming form finir.' },
  { id: 'fr.a2.verbes.186', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Ils finissent tôt.', en: 'They finish early.', ipa: '/il fi.nis to/', respell: 'eel fee-nees TOH', person: 'ils', grows: true, family: 'paradigm', tags: ['ir-verb', 'paradigm', 'plural'], drills: SD, audioRef: null, version: 1, notes: 'One sound more than Il finit tôt, at the very end of the verb, and nothing else.' },

  /* ── pair: the same contrast on three other verbs ─────────────────────────
   *
   * Three pairs, three verbs, and inside each pair NOTHING moves but the person
   * and the sound that answers to it.
   *
   * The first pair is `elle` against `elles` on purpose. a2.01 authored
   * `Elle travaille ici.` against `Elles travaillent ici.` as its headline
   * homophone pair: two sentences that are identical out loud, where the written
   * s of `elles` is silent and the learner has nothing to go on. The SAME PRONOUN
   * PAIR here is not identical, and the verb is the only thing that separates
   * them. That inversion is the lesson, and it is exact rather than approximate. */
  { id: 'fr.a2.verbes.187', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Elle choisit.', en: 'She chooses.', ipa: '/ɛl ʃwa.zi/', respell: 'el shwah-ZEE', person: 'il', grows: false, family: 'pair', tags: ['ir-verb', 'pair', 'singular'], drills: SD, audioRef: null, version: 1, notes: 'One person.' },
  { id: 'fr.a2.verbes.188', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Elles choisissent.', en: 'They choose.', ipa: '/ɛl ʃwa.zis/', respell: 'el shwah-ZEES', person: 'ils', grows: true, family: 'pair', tags: ['ir-verb', 'pair', 'plural'], drills: SD, audioRef: null, version: 1, notes: 'Several. The s of elles is silent as ever, so the verb is the only evidence there is.' },
  { id: 'fr.a2.verbes.189', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Il réussit toujours.', en: 'He always succeeds.', ipa: '/il ʁe.y.si tu.ʒuʁ/', respell: 'eel ray-ü-see too-ZHOOR', person: 'il', grows: false, family: 'pair', tags: ['ir-verb', 'pair', 'singular'], drills: S, audioRef: null, version: 1 },
  { id: 'fr.a2.verbes.190', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Ils réussissent toujours.', en: 'They always succeed.', ipa: '/il ʁe.y.sis tu.ʒuʁ/', respell: 'eel ray-ü-sees too-ZHOOR', person: 'ils', grows: true, family: 'pair', tags: ['ir-verb', 'pair', 'plural'], drills: S, audioRef: null, version: 1, notes: 'The same one sound at the end of the verb, on a second verb.' },
  { id: 'fr.a2.verbes.191', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Elle grandit vite.', en: 'She is growing up fast.', ipa: '/ɛl ɡʁɑ̃.di vit/', respell: 'el grahⁿ-dee VEET', person: 'il', grows: false, family: 'pair', tags: ['ir-verb', 'pair', 'singular', 'nasal'], drills: S, audioRef: null, version: 1 },
  { id: 'fr.a2.verbes.192', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Elles grandissent vite.', en: 'They are growing up fast.', ipa: '/ɛl ɡʁɑ̃.dis vit/', respell: 'el grahⁿ-dees VEET', person: 'ils', grows: true, family: 'pair', tags: ['ir-verb', 'pair', 'plural', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'A third verb, the same one sound, and elles against elle is again the whole difference.' },

  /* ── hidden: the singular triple, on a second verb ────────────────────────
   *
   * a2.01's reframe is still live in the singular of an -IR verb, and stating it
   * on a second verb is what makes it a rule rather than a fact about finir.
   *
   * These three respellings are THE SAME STRING once the pronoun token is
   * removed, character for character, and SINGULAR_TRIPLES asserts it. The
   * spelling changes twice (remplis, remplis, remplit) and the sound does not
   * change at all. */
  { id: 'fr.a2.verbes.193', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je remplis le formulaire.', en: 'I am filling in the form.', ipa: '/ʒə ʁɑ̃.pli lə fɔʁ.my.lɛʁ/', respell: 'zhuh rahⁿ-plee luh for-mü-LEHR', person: 'je', grows: false, family: 'hidden', tags: ['ir-verb', 'hidden', 'singular', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'Ends in -is.' },
  { id: 'fr.a2.verbes.194', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Tu remplis le formulaire.', en: 'You are filling in the form.', ipa: '/ty ʁɑ̃.pli lə fɔʁ.my.lɛʁ/', respell: 'tü rahⁿ-plee luh for-mü-LEHR', person: 'tu', grows: false, family: 'hidden', tags: ['ir-verb', 'hidden', 'singular', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'Also ends in -is, and sounds the same as the je row.' },
  { id: 'fr.a2.verbes.195', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Il remplit le formulaire.', en: 'He is filling in the form.', ipa: '/il ʁɑ̃.pli lə fɔʁ.my.lɛʁ/', respell: 'eel rahⁿ-plee luh for-mü-LEHR', person: 'il', grows: false, family: 'hidden', tags: ['ir-verb', 'hidden', 'singular', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'Ends in -it, and sounds the same as both of the others.' },

  /* ── apply: the ten verbs used by a person ────────────────────────────────
   *
   * Ten sentences across all seven persons and seven different verbs from the ten
   * imported, so the pattern is met as something people write rather than as a
   * table that was memorised. Simple present throughout.
   *
   * .205 is the one that stops the reframe from being a lie. `on` means we and
   * takes the il form, so the most common spoken first-person plural takes the
   * SINGULAR shape and grows nothing. A learner listening for the plural sound
   * will hear `on finit` and conclude one person, and being told that here is
   * worth more than a fourth pair. */
  { id: 'fr.a2.verbes.196', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous réfléchissons ensemble.', en: 'We are thinking it over together.', ipa: '/nu ʁe.fle.ʃi.sɔ̃ ɑ̃.sɑ̃bl/', respell: 'noo ray-flay-shee-sohⁿ ahⁿ-SAHⁿBL', person: 'nous', grows: true, family: 'apply', tags: ['ir-verb', 'apply', 'plural', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'The nous ending is a syllable of its own, exactly as it was on an -er verb.' },
  { id: 'fr.a2.verbes.197', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Vous obéissez aux règles.', en: 'You follow the rules.', ipa: '/vu zɔ.be.i.se o ʁɛɡl/', respell: 'voo zo-bay-ee-say o REHGL', person: 'vous', grows: true, family: 'apply', tags: ['ir-verb', 'apply', 'plural', 'liaison'], drills: S, audioRef: null, version: 1, notes: 'The silent s of vous wakes up in front of the vowel, and the ending is still a syllable.' },
  { id: 'fr.a2.verbes.198', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Ils guérissent vite.', en: 'They get better quickly.', ipa: '/il ɡe.ʁis vit/', respell: 'eel gay-rees VEET', person: 'ils', grows: true, family: 'apply', tags: ['ir-verb', 'apply', 'plural'], drills: S, audioRef: null, version: 1 },
  { id: 'fr.a2.verbes.199', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Le public applaudit.', en: 'The audience applauds.', ipa: '/lə py.blik a.plo.di/', respell: 'luh pü-bleek a-ploh-DEE', person: 'il', grows: false, family: 'apply', tags: ['ir-verb', 'apply', 'singular'], drills: S, audioRef: null, version: 1, notes: 'A noun subject, and it is singular, so the verb takes the short form.' },
  { id: 'fr.a2.verbes.200', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Les enfants applaudissent.', en: 'The children applaud.', ipa: '/le zɑ̃.fɑ̃ a.plo.dis/', respell: 'lay zahⁿ-fahⁿ a-ploh-DEES', person: 'ils', grows: true, family: 'apply', tags: ['ir-verb', 'apply', 'plural', 'liaison', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'The same verb with a plural subject, and the sound at the end says so.' },
  { id: 'fr.a2.verbes.201', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Le bus ralentit ici.', en: 'The bus slows down here.', ipa: '/lə bys ʁa.lɑ̃.ti i.si/', respell: 'luh büs ra-lahⁿ-tee ee-SEE', person: 'il', grows: false, family: 'apply', tags: ['ir-verb', 'apply', 'singular', 'nasal'], drills: S, audioRef: null, version: 1 },
  { id: 'fr.a2.verbes.202', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Les voitures ralentissent ici.', en: 'The cars slow down here.', ipa: '/le vwa.tyʁ ʁa.lɑ̃.tis i.si/', respell: 'lay vwah-tür ra-lahⁿ-tees ee-SEE', person: 'ils', grows: true, family: 'apply', tags: ['ir-verb', 'apply', 'plural', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'Nothing in the sentence is plural to the ear except the verb.' },
  { id: 'fr.a2.verbes.203', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous remplissons les papiers.', en: 'We are filling in the papers.', ipa: '/nu ʁɑ̃.pli.sɔ̃ le pa.pje/', respell: 'noo rahⁿ-plee-sohⁿ lay pa-PYAY', person: 'nous', grows: true, family: 'apply', tags: ['ir-verb', 'apply', 'plural', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'The same stem as Je remplis le formulaire, with a syllable on the end of it.' },
  { id: 'fr.a2.verbes.204', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je choisis un cours dans la semaine.', en: 'I pick a class during the week.', ipa: '/ʒə ʃwa.zi œ̃ kuʁ dɑ̃ la sə.mɛn/', respell: 'zhuh shwah-zee uhⁿ koor dahⁿ la suh-MEN', person: 'je', grows: false, family: 'apply', tags: ['ir-verb', 'apply', 'singular', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'The n of semaine is a real n and is said. The two nasal vowels before it are not.' },
  { id: 'fr.a2.verbes.205', kind: 'sentence', level: 'a2', theme: THEME, fr: 'On finit à six heures.', en: 'We finish at six.', ipa: '/ɔ̃ fi.ni a si zœʁ/', respell: 'ohⁿ fee-nee a see-ZEUR', person: 'on', grows: false, family: 'apply', tags: ['ir-verb', 'apply', 'on', 'singular', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'on means we and takes the il form, so the spoken we grows nothing at all.' },
];

/* ─── The ten ──────────────────────────────────────────────────────────────
 *
 * NONE OF THESE IS AUTHORED. Every one already exists in Postgres and is imported
 * by id; see verbes-ir-imported.ts for the recorded read, which the batch
 * verifies field by field before it writes anything.
 *
 * Ordered as the learner meets them: the four the paradigm and the pairs run on,
 * then the six that arrive in the applied sentences.                          */
export const THE_TEN: readonly string[] = [
  'finir', 'choisir', 'réussir', 'réfléchir', 'remplir',
  'grandir', 'guérir', 'obéir', 'applaudir', 'ralentir',
];

/** The -IR verbs that take NO -iss- anywhere.
 *
 *  Named on exactly one card and conjugated nowhere. Several are more frequent
 *  than any verb in THE_TEN, which is the reason the card exists at all: a
 *  learner who generalises the pattern will produce a form no French speaker
 *  says, and the only defence is knowing the class has a boundary.
 *
 *  MEASURED 2026-08-11: not one of the 76 curriculum units owns any of these
 *  except `venir` and `tenir`, which are a2.02 at seq 5. See the header, §4. */
export const NOT_THIS_FAMILY: readonly string[] = [
  'partir', 'sortir', 'dormir', 'servir', 'sentir',
  'venir', 'tenir', 'ouvrir', 'offrir', 'courir',
];

/** The two of that class that DO have a home, so the card can say where. */
export const NOT_THIS_FAMILY_HOMED: readonly string[] = ['venir', 'tenir'];
/** And the eight that do not. This is the curriculum hole, named in the data so
 *  the report and the card read one list. */
export const NOT_THIS_FAMILY_HOMELESS: readonly string[] =
  NOT_THIS_FAMILY.filter((v) => !NOT_THIS_FAMILY_HOMED.includes(v));

/** The unit that owns the two that are owned. Named by id, not by title. */
export const NOT_THIS_FAMILY_UNIT = 'a2.02';

/** CORRECT conjugated forms of the class, which must reach no PRODUCTION
 *  SURFACE. Naming the class is the mission; conjugating it is a2.02's job and
 *  nobody's job, and either way it is not this lesson's.
 *
 *  Scoped to production surfaces rather than to every string, because the card
 *  that hands the class over has to be able to talk about it. A guard written
 *  over every string fires on legitimate context and gets deleted by the next
 *  author; invariants §1 records four ways that has already happened here.
 *
 *  WHAT IS DELIBERATELY NOT IN THIS LIST, and why: `part`, `sort`, `cours`,
 *  `court`, `sent`, `sers`, `sers`, `offre`, `ouvre`, `tient` and `vient` are
 *  ordinary French nouns, ordinary English words, or both. «le cours du soir» is
 *  in a2.01's shipped scene and "the first part of the word" is the kind of
 *  sentence this lesson writes. The forms below are the distinctive ones, which
 *  are also the ones a learner would actually produce. */
export const NOT_THIS_FAMILY_FORMS: readonly string[] = [
  'partent', 'partons', 'partez',
  'sortent', 'sortons', 'sortez',
  'dorment', 'dormons', 'dormez', 'dors',
  'servent', 'servons', 'servez',
  'sentent', 'sentons',
  'viennent', 'venons', 'venez',
  'tiennent', 'tenons', 'tenez',
  'ouvrent', 'ouvrons', 'ouvrez',
  'offrent', 'offrons', 'offrez',
  'courent', 'courons', 'courez',
];

/** THE OVER-GENERALISED FORMS, banned EVERYWHERE and not merely on a production
 *  surface.
 *
 *  `ils partissent` is the error the brief predicts and it is the one string this
 *  lesson must never put in front of anybody, in any frame. The usual move is a
 *  commonErrors card showing it in order to reject it, which is how a2.01 handled
 *  `je parles`. It does not work here, and the difference is worth stating: a
 *  commonErrors card can show `je parles` because the learner already holds
 *  `je parle` to replace it with. Nobody in this lesson holds `ils partent`,
 *  because this lesson does not teach it and no unit in the curriculum does
 *  either. Showing the wrong form would leave it in memory with nothing to
 *  overwrite it. So the boundary is taught as a boundary. */
export const OVER_GENERALISED_FORMS: readonly string[] = [
  'partissent', 'partissons', 'partissez',
  'sortissent', 'sortissons', 'sortissez',
  'dormissent', 'dormissons',
  'servissent', 'servissons',
  'sentissent', 'venissent', 'tenissent',
  'ouvrissent', 'offrissent', 'courissent',
];

/* ─── The endings ──────────────────────────────────────────────────────────
 *
 * The set itself, derived nowhere else. The reference sheet, the tapTable and the
 * test all read THIS, so a table that hand-typed them would be free to drift from
 * the drill that scores them.
 *
 * `heard` is what the learner's ear actually receives from the ending, and it is
 * the column that inverts a2.01. Three of the six give the ear something. */
export const ENDINGS: { person: string; ending: string; heard: string; grows: boolean }[] = [
  { person: 'je', ending: '-is', heard: 'nothing', grows: false },
  { person: 'tu', ending: '-is', heard: 'nothing', grows: false },
  { person: 'il · elle · on', ending: '-it', heard: 'nothing', grows: false },
  { person: 'ils · elles', ending: '-issent', heard: 'S', grows: true },
  { person: 'nous', ending: '-issons', heard: 'ee-SOHⁿ', grows: true },
  { person: 'vous', ending: '-issez', heard: 'ee-SAY', grows: true },
];

/** The three the ear gets nothing from, derived from ENDINGS rather than typed.
 *  If a row is ever reclassified this moves with it and the reframe's arithmetic
 *  stops being a claim nobody checks. */
export const SILENT_ENDINGS: string[] = ENDINGS.filter((e) => !e.grows).map((e) => e.ending);
/** And the three that put a sound on the end. */
export const GROWING_ENDINGS: string[] = ENDINGS.filter((e) => e.grows).map((e) => e.ending);

/* ─── Respelling repairs ───────────────────────────────────────────────────
 *
 * Three rows this lesson displays as cards that close a genuine nasal vowel with
 * a plain n. Every `from` is flagged by hasPlainNasalFor and every `to` is not,
 * and the batch checks BOTH directions through the REAL function rather than
 * trusting this table: a "repair" whose stored value was never a violation is
 * somebody else's variant being overwritten, and invariants §9 says not to do
 * that.
 *
 * `remplir` has five rows in Postgres carrying `rahn-PLEER` and `grandir` has
 * two carrying `grahn-DEER`. Only the row this lesson displays is repaired. The
 * others are somebody else's theme and are recorded here rather than touched.  */
export const RESPELL_REPAIRS: { id: string; fr: string; from: string; to: string; why: string }[] = [
  { id: 'fr.a2.verbes.021', fr: 'remplir', from: 'rahn-PLEER', to: 'rahⁿ-PLEER', why: '/ʁɑ̃.pliʁ/; printed beside zhuh rahⁿ-plee, so the broken value teaches a vowel difference that is not there' },
  { id: 'fr.a2.famille.007', fr: 'grandir', from: 'grahn-DEER', to: 'grahⁿ-DEER', why: '/ɡʁɑ̃.diʁ/; printed beside el grahⁿ-dee VEET' },
  { id: 'fr.a2.transports-quotidiens.043', fr: 'ralentir', from: 'rah-lahn-TEER', to: 'rah-lahⁿ-TEER', why: '/ʁa.lɑ̃.tiʁ/, a nasal vowel' },
];

/** Rows carrying the same broken respelling that this build does NOT repair,
 *  recorded so the next author can see they were seen. They are not on a screen
 *  this lesson draws, and invariants §9 says to repair only what breaks a stated
 *  rule on content you own. */
export const NOT_REPAIRED: { id: string; fr: string; stored: string; why: string }[] = [
  { id: 'fr.a1.douane-et-immigration.064', fr: 'remplir', stored: 'rahn-PLEER', why: 'a1 theme, not displayed here' },
  { id: 'fr.a2.examens-et-diplomes.092', fr: 'remplir', stored: 'rahn-PLEER', why: 'not displayed here' },
  { id: 'fr.a2.marche.030', fr: 'remplir', stored: 'rahn-PLEER', why: 'not displayed here' },
  { id: 'fr.sons.verbes-essentiels.072', fr: 'remplir', stored: 'rahn-PLEER', why: 'not displayed here' },
  { id: 'fr.a1.rp-famille.044', fr: 'grandir', stored: 'grahn-DEER', why: 'not displayed here' },
  { id: 'fr.a1.deplacements.115', fr: 'ralentir', stored: 'rah-lahn-TEER', why: 'not displayed here' },
];

/* ─── Drill additions ──────────────────────────────────────────────────────
 *
 * All ten infinitives are RELEASED into the flashcard hub by a deckTranche, and
 * a released row needs a `flashcard` drill to be served as a card. Two of the ten
 * carry only {voiceflash, review}. Measured against Postgres by the manifest
 * generator on 2026-08-11, not assumed.                                        */
export const DRILL_ADDITIONS: { id: string; add: 'flashcard' | 'voiceflash'; why: string }[] = [
  { id: 'fr.a2.famille.007', add: 'flashcard', why: 'grandir: released by tranche 2 and served as a hub card, and the row had voiceflash and review only' },
  { id: 'fr.a2.verbes.036', add: 'flashcard', why: 'guérir: the same' },
];

/* ─── Accessors ────────────────────────────────────────────────────────────  */

/** Lookup by id. The lesson body builds every screen through this. */
export const BY_ID: ReadonlyMap<string, IrSentence> = new Map(VERBES_IR.map((w) => [w.id, w]));

/** Every authored id, in sequence order. */
export const AUTHORED_IDS: string[] = VERBES_IR.map((w) => w.id);

/** The ids of one teaching family, in sequence order. */
export const familyIds = (f: IrSentence['family']): string[] =>
  VERBES_IR.filter((w) => w.family === f).map((w) => w.id);

/** The ids showing one PERSON, in sequence order. Lets the test assert all seven
 *  persons reach a screen against the corpus rather than a hand list that could
 *  quietly lose `vous`. */
export const personIds = (p: IrSentence['person']): string[] =>
  VERBES_IR.filter((w) => w.person === p).map((w) => w.id);

/** The paradigm, in the order the tapTable shows it: the three the ear cannot
 *  separate, then the plural that answers the third of them, then the two that
 *  carry a whole syllable. NOT the ledger's prose pronoun order, and that is the
 *  one deliberate departure in this build. See CONTRAST_PAIR. */
export const PARADIGM_IDS: string[] = familyIds('paradigm');

/** THE PAIR THE WHOLE LESSON TURNS ON, and it has to be ADJACENT ON ONE SCREEN.
 *
 *  Recorded apart, or shown a screen apart, the learner compares two performances
 *  instead of two forms. The lesson names the section that must hold them
 *  (CONTRAST_SECTION_ID in the lesson file), the batch checks the two rows are
 *  neighbours in it, and the test checks it again against the seed. */
export const CONTRAST_PAIR: { singular: string; plural: string } = {
  singular: 'fr.a2.verbes.183',
  plural: 'fr.a2.verbes.186',
};

/** THE PAIRS WHOSE ONLY AUDIBLE DIFFERENCE IS THE PLURAL SOUND.
 *
 *  `[singular, plural]`. The listening mission, the ear drill and the test all
 *  read THIS one list, so a pair that loses its partner is visible rather than
 *  quiet. Each pair is one frame with one thing moving, and in the second and
 *  third the PRONOUN is identical out loud (`el` for both elle and elles), which
 *  is what makes the verb the only evidence and the listening task real. */
export const NUMBER_PAIRS: [string, string][] = [
  ['fr.a2.verbes.183', 'fr.a2.verbes.186'],
  ['fr.a2.verbes.187', 'fr.a2.verbes.188'],
  ['fr.a2.verbes.189', 'fr.a2.verbes.190'],
  ['fr.a2.verbes.191', 'fr.a2.verbes.192'],
  ['fr.a2.verbes.199', 'fr.a2.verbes.200'],
  ['fr.a2.verbes.201', 'fr.a2.verbes.202'],
];

/** The pairs where the PRONOUN gives the learner nothing, so the verb is the
 *  whole evidence. A subset of NUMBER_PAIRS, kept separate because these are the
 *  only ones a listening question may ask "one or several?" about: `il` against
 *  `ils` and `elle` against `elles` are identical out loud, and `le public`
 *  against `les enfants` is not. */
export const PRONOUN_BLIND_PAIRS: [string, string][] = [
  ['fr.a2.verbes.183', 'fr.a2.verbes.186'],
  ['fr.a2.verbes.187', 'fr.a2.verbes.188'],
  ['fr.a2.verbes.189', 'fr.a2.verbes.190'],
  ['fr.a2.verbes.191', 'fr.a2.verbes.192'],
];

/** THE SINGULAR TRIPLES: three spellings whose respellings are ONE STRING once
 *  the pronoun token comes off.
 *
 *  This is a2.01's fact, still true, and it is half of what this lesson teaches.
 *  Two triples on two verbs, because one triple is a fact about finir. Asserted
 *  as an EQUALITY by the batch and by the test rather than trusted to survive an
 *  edit. */
export const SINGULAR_TRIPLES: string[][] = [
  ['fr.a2.verbes.181', 'fr.a2.verbes.182', 'fr.a2.verbes.183'],
  ['fr.a2.verbes.193', 'fr.a2.verbes.194', 'fr.a2.verbes.195'],
];

/** The respelling with its first token removed, which is how a triple is
 *  compared: the pronouns differ audibly and everything after them must not. */
export const afterPronoun = (respell: string): string => respell.split(' ').slice(1).join(' ');

/** THE SPELLINGS AN EAR QUESTION MAY NEVER ASK BETWEEN.
 *
 *  Each group is a set of forms of one verb that are IDENTICAL out loud. A
 *  `listenChoose` offering two members of one group has no correct answer, and
 *  marking one of them right would certify a bug. The brief asked for this to be
 *  said in the report; it is enforced instead. */
export const HOMOPHONE_FORMS: string[][] = [
  ['finis', 'finit'],
  ['choisis', 'choisit'],
  ['réussis', 'réussit'],
  ['remplis', 'remplit'],
  ['grandis', 'grandit'],
  ['guéris', 'guérit'],
  ['obéis', 'obéit'],
];

/** The dictée targets: every authored row carrying the `dictation` drill.
 *  DERIVED, so a row that loses the tag drops out here rather than rendering as a
 *  dictée the app cannot run. Every one is at or under dicteeMode's 16-letter
 *  limit, and the batch proves that through the real `dicteeMode`. */
export const DICTATION_IDS: string[] = VERBES_IR.filter((w) => w.drills?.includes('dictation')).map((w) => w.id);

/** THE DICTÉE, AND WHAT IT CAN ACTUALLY GRADE.
 *
 *  MissionRich checks a dictée with `normalizeFr(filled) === normalizeFr(target)`,
 *  and normalizeFr normalises to NFD and strips every combining mark. A doubled
 *  consonant and a changed letter survive that; an accent does not.
 *
 *  Each row is a target, the near miss a learner would actually make, and whether
 *  the app can tell them apart. The batch and the test run BOTH claims through the
 *  real `normalizeFr`: the scorable ones must differ and the unscorable one must
 *  collide. Documenting the limit is not enough — a note saying "the circumflex is
 *  not scored" would be stale the day somebody changed normalizeFr, and this fails
 *  instead.
 *
 *  Seven of the eight are graded on exactly the thing the lesson teaches, which is
 *  the opposite of a2.09's position: a2.09's subject was accents and cedillas and
 *  three of its nine were ungradeable. -IS against -IT against -ISSENT is letters
 *  all the way down. */
export const DICTEE_NEAR_MISS: { id: string; wrong: string; scorable: boolean; what: string }[] = [
  { id: 'fr.a2.verbes.181', wrong: 'Je finit tôt.', scorable: true, what: 'the je row taking the il spelling; nothing in the sound would have caught it' },
  { id: 'fr.a2.verbes.182', wrong: 'Tu finit tôt.', scorable: true, what: 'the tu row taking the il spelling' },
  { id: 'fr.a2.verbes.183', wrong: 'Il finis tôt.', scorable: true, what: 'THE SINGULAR TRIPLE. Three spellings, one sound, and the dictée is the only surface that can score it.' },
  { id: 'fr.a2.verbes.184', wrong: 'Nous finisons tôt.', scorable: true, what: 'one s instead of two' },
  { id: 'fr.a2.verbes.185', wrong: 'Vous finissez tot.', scorable: false, what: 'THE CIRCUMFLEX on tôt. normalizeFr folds ô to o, so this is graded correct.' },
  { id: 'fr.a2.verbes.186', wrong: 'Ils finisent tôt.', scorable: true, what: 'the plural with one s' },
  { id: 'fr.a2.verbes.187', wrong: 'Elle choisis.', scorable: true, what: 'the il row taking the je spelling' },
  { id: 'fr.a2.verbes.188', wrong: 'Elles choisisent.', scorable: true, what: 'the plural with one s, on a second verb' },
];

/** Derived from DICTEE_NEAR_MISS rather than typed, so the list and the evidence
 *  for it cannot drift apart. */
export const SCORABLE_DICTATION_IDS: string[] = DICTEE_NEAR_MISS.filter((d) => d.scorable).map((d) => d.id);
/** And the one the check cannot settle, named so nobody comes to believe it can. */
export const UNSCORABLE_DICTATION_IDS: string[] = DICTEE_NEAR_MISS.filter((d) => !d.scorable).map((d) => d.id);

/** The French line alone. */
export const fr = (id: string): string => {
  const w = BY_ID.get(id);
  if (!w) throw new Error(`verbes-ir corpus: unknown id "${id}"`);
  return w.fr;
};

/** The bracketed respelling alone, which is what a deck card's `sub` line
 *  carries. Built HERE, once, rather than baked into the stored data: the
 *  validator checks the rendered form and storing the brackets would double them
 *  up. */
export const sub = (id: string): string => {
  const w = BY_ID.get(id);
  if (!w) throw new Error(`verbes-ir corpus: unknown id "${id}"`);
  return w.respell ? `[${w.respell}]` : '';
};

/** The respelling with no brackets, for a tapTable cell that is not notation. */
export const bare = (id: string): string => {
  const w = BY_ID.get(id);
  if (!w) throw new Error(`verbes-ir corpus: unknown id "${id}"`);
  return w.respell ?? '';
};

/** The English gloss alone. */
export const en = (id: string): string => {
  const w = BY_ID.get(id);
  if (!w) throw new Error(`verbes-ir corpus: unknown id "${id}"`);
  return w.en;
};

/** The corpus Item, stripped of the lesson-only fields. `person`, `grows` and
 *  `family` are lesson display data and live in the lesson's own section bodies,
 *  not on the shared row. */
export function toItem(w: IrSentence): Item {
  const { person: _p, grows: _g, family: _f, ...item } = w;
  return item;
}
