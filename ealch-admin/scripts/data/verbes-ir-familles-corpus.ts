// The a2.10.l2 corpus: the -IR verbs that are not regular.
//
// THIS FILE IS THE SINGLE SOURCE OF TRUTH for the 26 authored entries below and
// for every respelling a2.10.l2 puts on a screen.
//
// ── WHY THIS LESSON EXISTS ─────────────────────────────────────────────────
//
// a2.10.l1 names ten verbs that end in -ir and take no -iss-, conjugates none of
// them, and hands them on. Nobody was there to catch them: all 76 curriculum
// units were read on 2026-08-11 and NOT ONE owns partir, sortir, dormir, servir,
// sentir, ouvrir, offrir or courir. Meanwhile 36 of their 63 present-tense forms
// are already published as sentences and `nous partons` alone has 43, so the
// paradigm is in front of learners with nothing explaining it.
//
// See A2-10-L2-VERBES-IR-IRREGULIERS-SCOPE.md for why this is a second lesson in
// a2.10 rather than a new unit.
//
// ── THE CLAIM, AND IT IS NOT "HERE ARE TWO MORE PARADIGMS" ─────────────────
//
// Split by SOUND rather than by spelling, these twelve are two families, and
// each one runs a rule the learner ALREADY HOLDS:
//
//   THE SHEDDERS   partir sortir dormir servir sentir mentir
//     The stem loses its last consonant in the singular and gets it back in the
//     plural.  il part /paʁ/  ·  ils partent /paʁt/
//     Three singular spellings, one sound; a plural that puts a sound on the end.
//     THAT IS a2.10.l1's PARADIGM EXACTLY, by a different spelling. `finir`
//     inserts -iss-; `partir` restores a consonant it already had. Same ear.
//
//   THE -ER ENDINGS   ouvrir offrir couvrir découvrir souffrir
//     They take -e, -es, -e, -ons, -ez, -ent.
//     il couvre /kuvʁ/  ·  ils couvrent /kuvʁ/  ·  je couvre  ·  tu couvres
//     FOUR spellings, one sound. THAT IS a2.01's PARADIGM EXACTLY, and a2.01's
//     reframe is quoted verbatim on the card that teaches it.
//
//   courir is neither and both: group A's endings on a stem that never sheds, so
//     il court /kuʁ/ and ils courent /kuʁ/ are identical. a2.01's ear, group A's
//     page. It gets one card and no paradigm.
//
// So nothing new has to be learned about the ear at all. What has to be learned
// is WHICH LIST a verb is on, and that is the Owns.
//
// ── AND THE SPELLING ONLY HALF-PREDICTS IT. Measured. ─────────────────────
//
//   -vrir / -frir   RELIABLE. ouvrir, couvrir, découvrir, offrir, souffrir are
//                   all -ER-ending, and no regular -iss- verb ends this way.
//   -tir/-mir/-vir  NOT RELIABLE. `ralentir` takes the -iss- and `sentir` does
//                   not, and both end -tir. So do bâtir, avertir, investir.
//   -rir            NOT RELIABLE. `guérir` takes it; `courir` does not.
//
// Both counterexamples are inside a2.10.l1's own ten, which is why the pair that
// proves it reuses l1's `Le bus ralentit ici.` rather than authoring a twin.
//
// One reliable spelling rule, and one memorised list of six. Six is the price.
//
// ── THE LIAISON FINDING, WHICH CHANGED THE PARADIGM VERB ──────────────────
//
// The obvious verb for the -ER-ending family is `ouvrir`: it is far the most
// common of the five. It cannot be the paradigm verb, and working out why is the
// sharpest thing in this lesson.
//
//   il ouvre      /i.luvʁ/     the l of `il` links onto the vowel
//   ils ouvrent   /il.zuvʁ/    the SILENT s of `ils` wakes up as a /z/
//
// They are NOT identical. For a vowel-initial verb the plural is audible after
// all — not from the verb, but from liaison. a2.01 could state its four-spellings
// -one-sound claim with `travailler` because a consonant blocks liaison; state it
// with `ouvrir` and it is false.
//
// So the paradigm runs on `couvrir`, where the claim is exactly true, and the
// ouvrir/offrir case gets two rows of its own (.473/.474) and a card. That is not
// a caveat bolted on: two of the five -ER-ending verbs are vowel-initial and they
// are the two a learner meets most, so it is the case they will actually hit.
// It also connects straight back to sons.10.
//
// ── What the corpus could not supply, and so what is authored ─────────────
//
// Plenty of forms and no minimal pairs, the same as every verb lesson in this
// band. Measured 2026-08-11 in Postgres: `nous partons` 43 sentences, `tu pars`
// 12, `on part` 12, `je pars` 9, `il sort` 8, `j'ouvre` 8, and ZERO for every
// form of `servir`, for `elles partent`, `elles sortent`, `elles dorment`,
// `vous dormez` and `on court`. Every existing one was written for its own theme
// and carries its own object, so comparing two of them compares their subject
// matter as well as their number.
//
// 26 rows:
//
//   shed      6   the partir frame, all six persons
//   ercase    6   the couvrir frame, all six persons
//   liaison   2   ouvrir, where the s of ils wakes up
//   sort      4   the two pairs that prove the ending predicts nothing
//   apply     8   the twelve verbs used by a person, across all seven persons
//
// ── The frame words are chosen by dicteeMode, not by taste ────────────────
//
// `tôt` for the shedders and `tout` for the -ER-ending family, because every
// paradigm row has to be able to be a dictée target and dicteeMode() switches to
// WORD tiles above 16 letters. `Ils partent tôt.` is 13 letters and spells from
// LETTERS; `Ils ouvrent à huit heures.` is 21 and does not.
//
// `tôt` is ALSO a2.10.l1's frame word, deliberately. `Il finit tôt.` against
// `Il part tôt.` is the whole cross-lesson claim in two sentences a learner can
// put side by side.
//
// ── kind: every authored entry is a `sentence` ────────────────────────────
//
// The ledger settled it for the level. This lesson authors pairs that are meant
// to be identical out loud (`Il couvre tout.` / `Ils couvrent tout.`), and
// flashhub-coverage fails the build when two NON-sentence rows in one theme share
// an `fr`. They are sentences and the rule leaves them alone. No authored row
// carries `gender` and none is a single word, so nothing here can join a1.03's
// measured ending population.
//
// ── What is NOT here ──────────────────────────────────────────────────────
//
// - NO `venir` OR `tenir`. Their mechanism IS the shedders' (il vient /vjɛ̃/,
//   ils viennent /vjɛn/, the consonant restored and the vowel denasalised), and
//   this lesson says so by unit id, but they are a2.02 and are conjugated
//   nowhere here.
// - NO `mourir`. It changes its stem vowel (je meurs /mœʁ/, nous mourons
//   /mu.ʁɔ̃/), which is a third mechanism and a low-value A2 verb. It remains
//   owned by no unit and that is recorded in the build report, not hidden.
// - NO -RE VERB. a2.11 is seq 4 and teaches `vendre`, whose il-vend/ils-vendent
//   is the shedders' mechanism on a regular verb. This lesson names the unit and
//   conjugates nothing.
// - NO PAST TENSE.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import { unitRef } from './_unit-ref.ts';

/* ─── The id block ─────────────────────────────────────────────────────────
 *
 * fr.a2.verbes.461 .. .500. Allocated ABOVE the whole of batch 1's reservation
 * (a2.15 holds .421..460) rather than into a2.10.l1's unused .206..220 tail, so
 * it cannot collide with a block somebody is still holding. Amended into
 * A2-BATCH-1-LEDGER.md §2 before authoring.                                   */
export const OWNED_ID_RANGE = { from: 'fr.a2.verbes.461', to: 'fr.a2.verbes.500' } as const;

/** The theme this lesson writes into. One decision, made in the ledger. */
export const THEME = 'verbes';

/** Which family a row is evidence for. Stored rather than restated per screen,
 *  because the whole lesson is the act of sorting a verb into one of them. */
export type Family = 'shed' | 'ercase' | 'liaison' | 'sort' | 'apply';

export type IrFamSentence = Omit<Item, 'drills'> & {
  person: 'je' | 'tu' | 'il' | 'nous' | 'vous' | 'ils' | 'on';
  /** Does anything reach the ear at the end of this verb that the singular does
   *  not have? The answer differs BY FAMILY, which is the point. */
  audible: boolean;
  family: Family;
  drills: Item['drills'];
};

const S: Item['drills'] = ['sentence', 'flashcard', 'voiceflash', 'review'];
const SD: Item['drills'] = ['sentence', 'flashcard', 'voiceflash', 'review', 'dictation'];

/** The 26 authored entries, in sequence order. */
export const VERBES_IR_FAM: IrFamSentence[] = [
  /* ── shed: partir, and the consonant that comes back ──────────────────────
   *
   * Six rows on one frame. .461/.462/.463 carry the SAME respelling once the
   * pronoun comes off (`par TOH`), which is a2.01's fact still holding in the
   * singular; .464 adds one consonant and nothing else, which is a2.10.l1's.
   * The frame word is l1's, so the two paradigms can be read side by side.    */
  { id: 'fr.a2.verbes.461', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je pars tôt.', en: 'I leave early.', ipa: '/ʒə paʁ to/', respell: 'zhuh par TOH', person: 'je', audible: false, family: 'shed', tags: ['ir-verb', 'shed', 'singular'], drills: SD, audioRef: null, version: 1, notes: 'The t of the stem is gone. Said exactly like Tu pars tôt and Il part tôt.' },
  { id: 'fr.a2.verbes.462', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Tu pars tôt.', en: 'You leave early.', ipa: '/ty paʁ to/', respell: 'tü par TOH', person: 'tu', audible: false, family: 'shed', tags: ['ir-verb', 'shed', 'singular'], drills: S, audioRef: null, version: 1, notes: 'Same sound again. Only the pronoun separates the three.' },
  { id: 'fr.a2.verbes.463', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Il part tôt.', en: 'He leaves early.', ipa: '/il paʁ to/', respell: 'eel par TOH', person: 'il', audible: false, family: 'shed', tags: ['ir-verb', 'shed', 'singular'], drills: SD, audioRef: null, version: 1, notes: 'Put this beside Il finit tôt from the last lesson. Both stop dead.' },
  { id: 'fr.a2.verbes.464', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Ils partent tôt.', en: 'They leave early.', ipa: '/il paʁt to/', respell: 'eel part TOH', person: 'ils', audible: true, family: 'shed', tags: ['ir-verb', 'shed', 'plural'], drills: SD, audioRef: null, version: 1, notes: 'One consonant more than Il part tôt, at the very end. That T is the whole difference.' },
  { id: 'fr.a2.verbes.465', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous partons tôt.', en: 'We leave early.', ipa: '/nu paʁ.tɔ̃ to/', respell: 'noo par-tohⁿ TOH', person: 'nous', audible: true, family: 'shed', tags: ['ir-verb', 'shed', 'plural', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'The t is back and it brings a whole syllable with it.' },
  { id: 'fr.a2.verbes.466', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Vous partez tôt.', en: 'You leave early.', ipa: '/vu paʁ.te to/', respell: 'voo par-tay TOH', person: 'vous', audible: true, family: 'shed', tags: ['ir-verb', 'shed', 'plural'], drills: S, audioRef: null, version: 1, notes: 'The same t, the same extra syllable. Only the singular ever drops it.' },

  /* ── ercase: couvrir, which is an -ER verb wearing an -ir infinitive ───────
   *
   * FOUR of these six are one sound: .467, .468, .469 and .470 all arrive as
   * `koovr`. .469 and .470 are the SAME STRING character for character, which is
   * a2.01's `.102`/`.105` identity and is asserted as an equality.
   *
   * `couvrir` and not `ouvrir` because ouvrir begins with a vowel and liaison
   * makes its plural audible. See the header, and .473/.474.                  */
  { id: 'fr.a2.verbes.467', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je couvre tout.', en: 'I cover everything.', ipa: '/ʒə kuvʁ tu/', respell: 'zhuh koovr TOO', person: 'je', audible: false, family: 'ercase', tags: ['ir-verb', 'er-endings', 'silent-ending'], drills: SD, audioRef: null, version: 1, notes: 'An -e ending, silent, exactly as on an -er verb.' },
  { id: 'fr.a2.verbes.468', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Tu couvres tout.', en: 'You cover everything.', ipa: '/ty kuvʁ tu/', respell: 'tü koovr TOO', person: 'tu', audible: false, family: 'ercase', tags: ['ir-verb', 'er-endings', 'silent-ending'], drills: SD, audioRef: null, version: 1, notes: 'An -es ending. Silent, and only tu takes it.' },
  { id: 'fr.a2.verbes.469', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Il couvre tout.', en: 'He covers everything.', ipa: '/il kuvʁ tu/', respell: 'eel koovr TOO', person: 'il', audible: false, family: 'ercase', tags: ['ir-verb', 'er-endings', 'silent-ending'], drills: SD, audioRef: null, version: 1, notes: 'Said exactly like Ils couvrent tout. Nothing in the sound separates them.' },
  { id: 'fr.a2.verbes.470', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Ils couvrent tout.', en: 'They cover everything.', ipa: '/il kuvʁ tu/', respell: 'eel koovr TOO', person: 'ils', audible: false, family: 'ercase', tags: ['ir-verb', 'er-endings', 'silent-ending'], drills: SD, audioRef: null, version: 1, notes: 'Seven letters at the end and not one of them sounds. Identical to Il couvre tout.' },
  { id: 'fr.a2.verbes.471', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous couvrons tout.', en: 'We cover everything.', ipa: '/nu ku.vʁɔ̃ tu/', respell: 'noo koo-vrohⁿ TOO', person: 'nous', audible: true, family: 'ercase', tags: ['ir-verb', 'er-endings', 'nasal'], drills: SD, audioRef: null, version: 1, notes: 'One of the two the ear gets, and it is the -ons of an -er verb.' },
  { id: 'fr.a2.verbes.472', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Vous couvrez tout.', en: 'You cover everything.', ipa: '/vu ku.vʁe tu/', respell: 'voo koo-vray TOO', person: 'vous', audible: true, family: 'ercase', tags: ['ir-verb', 'er-endings'], drills: S, audioRef: null, version: 1, notes: `The other one, and it is -ez. Two audible out of six, exactly as in ${unitRef('a2.01')}.` },

  /* ── liaison: the two most common of the family, where the rule bends ──────
   *
   * `ouvrir` and `offrir` begin with a vowel, so the silent s of `ils` wakes up
   * and the plural IS audible — not from the verb, from the link in front of it.
   * These two rows exist so the lesson can say that out loud instead of teaching
   * a claim the learner's own experience will contradict within a week.       */
  { id: 'fr.a2.verbes.473', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Il ouvre à huit heures.', en: 'He opens at eight.', ipa: '/i.luvʁ a ɥi tœʁ/', respell: 'ee-loovr a wee-TEUR', person: 'il', audible: false, family: 'liaison', tags: ['ir-verb', 'er-endings', 'liaison'], drills: S, audioRef: null, version: 1, notes: 'The l of il links onto the vowel: ee-loovr, one word.' },
  { id: 'fr.a2.verbes.474', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Ils ouvrent à huit heures.', en: 'They open at eight.', ipa: '/il.zuvʁ a ɥi tœʁ/', respell: 'eel-zoovr a wee-TEUR', person: 'ils', audible: true, family: 'liaison', tags: ['ir-verb', 'er-endings', 'liaison'], drills: S, audioRef: null, version: 1, notes: 'The silent s of ils wakes up as a z. The verb did not change; the link did.' },

  /* ── sort: the two pairs that prove the ending predicts nothing ────────────
   *
   * `sentir` against `ralentir`, both -tir, one in this lesson and one in the
   * last. `courir` against `guérir`, both -rir, same split. The ralentir half is
   * NOT authored here: it is a2.10.l1's own fr.a2.verbes.201, reused, because
   * the learner met that exact sentence one lesson ago.                       */
  { id: 'fr.a2.verbes.475', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Elle sent le café.', en: 'She can smell the coffee.', ipa: '/ɛl sɑ̃ lə ka.fe/', respell: 'el sahⁿ luh ka-FAY', person: 'il', audible: false, family: 'sort', tags: ['ir-verb', 'shed', 'singular', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'sentir ends in -tir and takes no -iss-. ralentir ends in -tir and takes one.' },
  { id: 'fr.a2.verbes.476', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Elles sentent le café.', en: 'They can smell the coffee.', ipa: '/ɛl sɑ̃t lə ka.fe/', respell: 'el sahⁿt luh ka-FAY', person: 'ils', audible: true, family: 'sort', tags: ['ir-verb', 'shed', 'plural', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'The t comes back. Compare Les voitures ralentissent, where an -iss- comes instead.' },
  { id: 'fr.a2.verbes.477', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Il court vite.', en: 'He runs fast.', ipa: '/il kuʁ vit/', respell: 'eel koor VEET', person: 'il', audible: false, family: 'sort', tags: ['ir-verb', 'courir', 'singular'], drills: S, audioRef: null, version: 1, notes: 'courir ends in -rir and takes no -iss-. guérir ends in -rir and takes one.' },
  { id: 'fr.a2.verbes.478', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Ils courent vite.', en: 'They run fast.', ipa: '/il kuʁ vit/', respell: 'eel koor VEET', person: 'ils', audible: false, family: 'sort', tags: ['ir-verb', 'courir', 'plural'], drills: S, audioRef: null, version: 1, notes: 'The same sound as Il court vite. courir sheds nothing, so it has nothing to give back.' },

  /* ── apply: the twelve used by a person, across all seven persons ──────────  */
  { id: 'fr.a2.verbes.479', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je dors bien ici.', en: 'I sleep well here.', ipa: '/ʒə dɔʁ bjɛ̃ i.si/', respell: 'zhuh dor byaⁿ ee-SEE', person: 'je', audible: false, family: 'apply', tags: ['ir-verb', 'shed', 'singular', 'nasal'], drills: S, audioRef: null, version: 1 },
  { id: 'fr.a2.verbes.480', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Ils dorment encore.', en: 'They are still asleep.', ipa: '/il dɔʁm ɑ̃.kɔʁ/', respell: 'eel dorm ahⁿ-KOR', person: 'ils', audible: true, family: 'apply', tags: ['ir-verb', 'shed', 'plural', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'The m of the stem comes back, and it is the only thing saying more than one.' },
  { id: 'fr.a2.verbes.481', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous sortons ce soir.', en: 'We are going out tonight.', ipa: '/nu sɔʁ.tɔ̃ sə swaʁ/', respell: 'noo sor-tohⁿ suh SWAR', person: 'nous', audible: true, family: 'apply', tags: ['ir-verb', 'shed', 'plural', 'nasal'], drills: S, audioRef: null, version: 1 },
  { id: 'fr.a2.verbes.482', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Vous servez le dîner ?', en: 'Are you serving dinner?', ipa: '/vu sɛʁ.ve lə di.ne/', respell: 'voo sehr-vay luh dee-NAY', person: 'vous', audible: true, family: 'apply', tags: ['ir-verb', 'shed', 'plural', 'question'], drills: S, audioRef: null, version: 1 },
  { id: 'fr.a2.verbes.483', kind: 'sentence', level: 'a2', theme: THEME, fr: 'On ment rarement ici.', en: 'People rarely lie here.', ipa: '/ɔ̃ mɑ̃ ʁaʁ.mɑ̃ i.si/', respell: 'ohⁿ mahⁿ rar-mahⁿ ee-SEE', person: 'on', audible: false, family: 'apply', tags: ['ir-verb', 'shed', 'on', 'singular', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'on takes the il form, so the t stays away even though on means we.' },
  { id: 'fr.a2.verbes.484', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Ils offrent un cadeau.', en: 'They are giving a present.', ipa: '/il.zɔfʁ œ̃ ka.do/', respell: 'eel-zofr uhⁿ ka-DOH', person: 'ils', audible: true, family: 'apply', tags: ['ir-verb', 'er-endings', 'liaison', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'The verb sounds the same as il offre. The z in front of it is what says several.' },
  { id: 'fr.a2.verbes.485', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Tu découvres la ville.', en: 'You are discovering the city.', ipa: '/ty de.kuvʁ la vil/', respell: 'tü day-koovr la VEEL', person: 'tu', audible: false, family: 'apply', tags: ['ir-verb', 'er-endings', 'silent-ending'], drills: S, audioRef: null, version: 1 },
  { id: 'fr.a2.verbes.486', kind: 'sentence', level: 'a2', theme: THEME, fr: 'On souffre en silence.', en: 'People suffer in silence.', ipa: '/ɔ̃ sufʁ ɑ̃ si.lɑ̃s/', respell: 'ohⁿ soofr ahⁿ see-LAHⁿS', person: 'on', audible: false, family: 'apply', tags: ['ir-verb', 'er-endings', 'on', 'nasal'], drills: S, audioRef: null, version: 1 },
];

/* ─── The two families ─────────────────────────────────────────────────────
 *
 * NONE of these is authored. All twelve exist in Postgres and are imported by id.
 * The grouping IS the lesson: a learner who leaves with one undifferentiated list
 * of twelve has been taught nothing a dictionary does not already do.         */

/** The six whose stem sheds a consonant in the singular and restores it in the
 *  plural. This is the list that cannot be worked out from the spelling, and
 *  saying so is the teaching. */
export const SHEDDERS: readonly string[] = ['partir', 'sortir', 'dormir', 'servir', 'sentir', 'mentir'];

/** The five that take -ER endings. Predictable from the infinitive: -vrir and
 *  -frir, with no regular -iss- verb sharing either ending. */
export const ER_ENDING: readonly string[] = ['ouvrir', 'offrir', 'couvrir', 'découvrir', 'souffrir'];

/** The two of those five that begin with a VOWEL, so liaison makes their plural
 *  audible after all. They are also the two most common, which is why the case
 *  gets a card rather than a footnote. */
export const VOWEL_INITIAL: readonly string[] = ['ouvrir', 'offrir'];

/** Neither family: group A's endings on a stem that never sheds. */
export const NEITHER: readonly string[] = ['courir'];

/** All twelve, in learner order, derived from the three lists. */
export const THE_TWELVE: readonly string[] = [...SHEDDERS, ...ER_ENDING, ...NEITHER];

/** The paradigm verb of each family, named once so the tapTables, the sheet and
 *  the test read one string each. `couvrir` and NOT `ouvrir`: see the header. */
export const SHED_VERB = 'partir';
export const ER_VERB = 'couvrir';

/* ─── What the ending does and does not predict ─────────────────────────────
 *
 * The pairs that make the Owns testable. Each is one verb from this lesson and
 * one from a2.10.l1 sharing an infinitive ending and taking opposite paradigms.
 * `l1Id` is the row a2.10.l1 already published, reused rather than twinned.   */
export const ENDING_PROVES_NOTHING: { ending: string; here: string; there: string; hereId: string; l1Id: string }[] = [
  { ending: '-tir', here: 'sentir', there: 'ralentir', hereId: 'fr.a2.verbes.476', l1Id: 'fr.a2.verbes.202' },
  { ending: '-rir', here: 'courir', there: 'guérir', hereId: 'fr.a2.verbes.478', l1Id: 'fr.a2.verbes.198' },
];

/** The one ending that DOES predict, so the lesson is not only bad news. */
export const ENDING_PREDICTS = { endings: ['-vrir', '-frir'], family: 'the -ER endings' } as const;

/* ─── Respelling repairs ───────────────────────────────────────────────────
 *
 * Two rows this lesson displays that close a genuine nasal vowel with a plain n.
 * Both `from` values are flagged by the real `hasPlainNasalFor` and both `to`
 * values are not, checked in both directions by the batch.                    */
export const RESPELL_REPAIRS: { id: string; fr: string; from: string; to: string; why: string }[] = [
  { id: 'fr.sons.verbes-essentiels.074', fr: 'sentir', from: 'sahn-TEER', to: 'sahⁿ-TEER', why: '/sɑ̃.tiʁ/; printed beside el sahⁿ luh ka-FAY, so the broken value teaches a vowel difference that is not there' },
  { id: 'fr.sons.verbes-essentiels.204', fr: 'mentir', from: 'mahn-TEER', to: 'mahⁿ-TEER', why: '/mɑ̃.tiʁ/; printed beside ohⁿ mahⁿ rar-mahⁿ ee-SEE' },
];

/** Rows carrying the same broken value that this build does NOT repair, recorded
 *  so the next author can see they were seen. Not displayed here; invariants §9
 *  says repair only what breaks a stated rule on content you own. */
export const NOT_REPAIRED: { id: string; fr: string; stored: string; why: string }[] = [
  { id: 'fr.b1.valeurs.083', fr: 'mentir', stored: 'mahn-TEER', why: 'b1 theme, not displayed here' },
  { id: 'fr.b2.ethique.080', fr: 'mentir', stored: 'mahn-TEER', why: 'b2 theme, not displayed here' },
];

/** All twelve arrive with a `flashcard` drill already, measured by the manifest
 *  generator, so nothing needs adding. Kept as an empty export because the batch,
 *  the merge and the test all walk it. */
export const DRILL_ADDITIONS: { id: string; add: 'flashcard' | 'voiceflash'; why: string }[] = [];

/* ─── Accessors ────────────────────────────────────────────────────────────  */

export const BY_ID: ReadonlyMap<string, IrFamSentence> = new Map(VERBES_IR_FAM.map((w) => [w.id, w]));
export const AUTHORED_IDS: string[] = VERBES_IR_FAM.map((w) => w.id);
export const familyIds = (f: Family): string[] => VERBES_IR_FAM.filter((w) => w.family === f).map((w) => w.id);
export const personIds = (p: IrFamSentence['person']): string[] => VERBES_IR_FAM.filter((w) => w.person === p).map((w) => w.id);

/** The respelling with its first token removed. A triple or a quartet is
 *  compared this way: the pronouns differ audibly and everything after them must
 *  not. */
export const afterPronoun = (respell: string): string => respell.split(' ').slice(1).join(' ');

/** THE SHEDDERS' SINGULAR TRIPLE. je pars / tu pars / il part are one sound and
 *  three spellings, which is a2.01's fact still holding — and it is why the
 *  shedders are a2.10.l1's paradigm and not a new one. */
export const SHED_TRIPLE: string[] = ['fr.a2.verbes.461', 'fr.a2.verbes.462', 'fr.a2.verbes.463'];

/** THE -ER FAMILY'S SILENT QUARTET. je / tu / il / ils couvre(s|nt) are FOUR
 *  spellings and one sound, which is a2.01's claim exactly. .469 and .470 are
 *  the same string in full, not merely after the pronoun, and the batch and the
 *  test both assert that as an equality. */
export const ER_QUARTET: string[] = ['fr.a2.verbes.467', 'fr.a2.verbes.468', 'fr.a2.verbes.469', 'fr.a2.verbes.470'];

/** THE PAIR THE SHEDDER TABLE TURNS ON: one consonant apart, and audible. */
export const SHED_PAIR = { singular: 'fr.a2.verbes.463', plural: 'fr.a2.verbes.464' } as const;
/** THE PAIR THE -ER TABLE TURNS ON: identical, and the learner must hear that. */
export const ER_PAIR = { singular: 'fr.a2.verbes.469', plural: 'fr.a2.verbes.470' } as const;
/** And the pair where liaison overrides the -ER family's silence. */
export const LIAISON_PAIR = { singular: 'fr.a2.verbes.473', plural: 'fr.a2.verbes.474' } as const;

/** Every singular/plural pair, with whether the ear can settle it. The listening
 *  missions, the drills and the test all read THIS one list, so a pair that
 *  loses its partner is visible rather than quiet. */
export const NUMBER_PAIRS: { singular: string; plural: string; audible: boolean; why: string }[] = [
  { singular: 'fr.a2.verbes.463', plural: 'fr.a2.verbes.464', audible: true, why: 'the shedders: a consonant comes back' },
  { singular: 'fr.a2.verbes.475', plural: 'fr.a2.verbes.476', audible: true, why: 'the same, on sentir' },
  { singular: 'fr.a2.verbes.469', plural: 'fr.a2.verbes.470', audible: false, why: 'the -ER endings: nothing changes at all' },
  { singular: 'fr.a2.verbes.477', plural: 'fr.a2.verbes.478', audible: false, why: 'courir sheds nothing, so it restores nothing' },
  { singular: 'fr.a2.verbes.473', plural: 'fr.a2.verbes.474', audible: true, why: 'a vowel-initial verb: the s of ils wakes up as a z' },
];

/** The dictée targets: every authored row carrying the `dictation` drill.
 *  DERIVED, so a row that loses the tag drops out here rather than rendering as a
 *  dictée the app cannot run. */
export const DICTATION_IDS: string[] = VERBES_IR_FAM.filter((w) => w.drills?.includes('dictation')).map((w) => w.id);

/** THE DICTÉE, AND WHAT IT CAN ACTUALLY GRADE.
 *
 *  The weight is on the -ER family this time, and that is the mirror of l1. In
 *  l1 the ear could settle the plural and only the singular triple needed
 *  typing; here the -ER family's four forms are ALL one sound, so the page is the
 *  only place any of them exists. Both claims are run through the real
 *  `normalizeFr` rather than written in a comment. */
export const DICTEE_NEAR_MISS: { id: string; wrong: string; scorable: boolean; what: string }[] = [
  { id: 'fr.a2.verbes.461', wrong: 'Je pars tot.', scorable: false, what: 'THE CIRCUMFLEX on tôt. normalizeFr folds ô to o, so this is graded correct.' },
  { id: 'fr.a2.verbes.463', wrong: 'Il pars tôt.', scorable: true, what: 'the singular triple: three spellings, one sound, and only the page decides' },
  { id: 'fr.a2.verbes.464', wrong: 'Ils part tôt.', scorable: true, what: 'the plural without its consonant, which is the error the ear WOULD catch' },
  { id: 'fr.a2.verbes.467', wrong: 'Je couvres tout.', scorable: true, what: 'the -ER family, where nothing but the page can catch it' },
  { id: 'fr.a2.verbes.468', wrong: 'Tu couvre tout.', scorable: true, what: 'the -es that only tu takes' },
  { id: 'fr.a2.verbes.469', wrong: 'Il couvrent tout.', scorable: true, what: 'THE QUARTET. Four spellings, one sound.' },
  { id: 'fr.a2.verbes.470', wrong: 'Ils couvre tout.', scorable: true, what: 'the same, from the other side' },
  { id: 'fr.a2.verbes.471', wrong: 'Nous couvron tout.', scorable: true, what: 'the -ons, which the ear does get' },
];

export const SCORABLE_DICTATION_IDS: string[] = DICTEE_NEAR_MISS.filter((d) => d.scorable).map((d) => d.id);
export const UNSCORABLE_DICTATION_IDS: string[] = DICTEE_NEAR_MISS.filter((d) => !d.scorable).map((d) => d.id);

/** Forms of `venir`, `tenir` and `mourir` that must reach no learner surface.
 *  The infinitives themselves ARE named, because the lesson has to say where
 *  they go. */
export const NOT_MINE_FORMS: readonly string[] = [
  'viens', 'vient', 'viennent', 'venons', 'venez',
  'tiens', 'tient', 'tiennent', 'tenons', 'tenez',
  'meurs', 'meurt', 'meurent', 'mourons', 'mourez',
];

/** And the over-generalised forms, banned everywhere: this lesson is where a
 *  learner stops producing them, so it may not print them either. Same decision
 *  as a2.10.l1, same reason. */
export const OVER_GENERALISED_FORMS: readonly string[] = [
  'partissent', 'partissons', 'sortissent', 'sortissons',
  'dormissent', 'dormissons', 'servissent', 'sentissent', 'mentissent',
  'ouvrissent', 'offrissent', 'couvrissent', 'courissent', 'souffrissent',
];

export const fr = (id: string): string => {
  const w = BY_ID.get(id);
  if (!w) throw new Error(`verbes-ir-familles corpus: unknown id "${id}"`);
  return w.fr;
};
export const sub = (id: string): string => {
  const w = BY_ID.get(id);
  if (!w) throw new Error(`verbes-ir-familles corpus: unknown id "${id}"`);
  return w.respell ? `[${w.respell}]` : '';
};
export const en = (id: string): string => {
  const w = BY_ID.get(id);
  if (!w) throw new Error(`verbes-ir-familles corpus: unknown id "${id}"`);
  return w.en;
};

/** The corpus Item, stripped of the lesson-only fields. */
export function toItem(w: IrFamSentence): Item {
  const { person: _p, audible: _a, family: _f, ...item } = w;
  return item;
}
