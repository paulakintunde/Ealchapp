// The two corpus entries a1.02.l1 has to author, and the reasons it has to.
//
// ── Why this file is two items and not seventy ─────────────────────────────
//
// The nombres theme already holds 439 items. Every headword this lesson teaches
// exists at sons level with IPA and a respelling (fr.sons.nombres.001 through
// .019), and 210 a1 sentences carry the numbers in real contexts with the
// transcriptions this lesson's central claim depends on. A lesson that invents
// its own words is a lesson whose words are absent from the flashcard hub, the
// SRS and every other lesson, so the default is to reference by id.
//
// Two headwords were genuinely missing, and both were verified against the seed
// on 2026-08-04 rather than assumed:
//
//   deux   absent from `nombres` entirely. It exists as fr.sons.voyelles.004
//          (an /ø/ example) and fr.sons.muettes.007 (a silent-X example). In
//          both it is a phonetic specimen, not a number, so a learner opening
//          the numbers deck found no card for two. It is the second word this
//          lesson teaches, so this was not optional.
//
//   une    absent from `nombres` entirely. It exists as fr.sons.nasales.169,
//          glossed "a, one (f.)", filed as an article. This lesson teaches un
//          against une as the first place a learner meets agreement at all, and
//          the pair has to sit in the same theme as `un` (fr.sons.nombres.001)
//          or the contrast is two decks apart.
//
// ── What was NOT authored, and why ────────────────────────────────────────
//
// The brief expected a small set of quantity-ordering phrases to be missing.
// They are not. Checked before writing any:
//
//   fr.a1.cafe.024    "Un café, s'il vous plaît"   flashcard + voiceflash
//   fr.a1.cafe.012    "une baguette"               flashcard + voiceflash
//   fr.a1.marche.097  "Deux kilos de pommes."      flashcard + voiceflash
//
// Those are referenced by id from the lesson. Authoring nombres copies of them
// would have put the same phrase in the hub twice under two themes, which is
// the .057 shape the merge guards exist to catch. Cross-theme reference is
// precedented: sons.04 draws on eight themes and a1.04 on three.
//
// ── Respelling convention ─────────────────────────────────────────────────
//
// Same as elision-corpus.ts: hyphenated syllables, stressed syllable
// capitalised, nasal vowels closed with a superscript n and never a plain n or
// m, /ø œ/ as EU, /y/ as Ü. Brackets are added by the renderer, never stored.
//
// Note that the SURROUNDING theme does not follow it. fr.sons.nombres.001 is
// respelled 'UHN', .004 'SANK', .019 'VAN' — plain n on a nasal vowel, which is
// the exact error the convention exists to stop. Those are pre-existing and are
// left alone here; 140 items is a backfill, not a side effect of one lesson.
// The lesson's own display strings use the superscript, so the two surfaces
// disagree for the nasal numbers. Named in the handover rather than papered
// over.
//
// IPA is written in slashes, as elision-corpus.ts does. The nombres theme is
// split on this already (ids .001 to .100 bare, .101 to .140 slashed), so
// either form matches something; slashes match the v2 house style.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

/** The drill set every beginner vocab word needs.
 *
 *  flashhub-coverage.test.ts fails any a1 non-sentence item missing either
 *  `flashcard` or `voiceflash`: one strands it from the themed hub, the other
 *  from Voice Flash, and both fail silently as a card that simply never
 *  appears. `review` is what puts it in the SRS. */
const W: Item['drills'] = ['flashcard', 'voiceflash', 'review'];

/** Sequence numbers continue the existing a1 run (which ends at .233) and are
 *  stable: they are the SRS key and every attempt ever logged hangs off them.
 *  Append, never renumber. */
export const NOMBRES: Item[] = [
  {
    id: 'fr.a1.nombres.234',
    kind: 'word',
    level: 'a1',
    theme: 'nombres',
    fr: 'deux',
    en: 'two',
    ipa: '/dø/',
    respell: 'DEU',
    notes: 'The X is silent on its own. Before a vowel it comes back as a Z, joined on: deux heures.',
    tags: ['number', 'core-twenty', 'shifting-ending'],
    drills: W,
    audioRef: null,
    version: 1,
  },
  {
    id: 'fr.a1.nombres.235',
    kind: 'word',
    level: 'a1',
    theme: 'nombres',
    fr: 'une',
    en: 'one, before a feminine noun',
    ipa: '/yn/',
    respell: 'ÜN',
    notes: 'The feminine of un, and the only number in French that changes for gender. The N is fully pronounced here; in un it is not.',
    tags: ['number', 'core-twenty', 'gender'],
    drills: W,
    audioRef: null,
    version: 1,
  },
];

/** The ids this file authors, for the scripts and the test, so none of them
 *  restates a list that can drift. */
export const NOMBRES_NEW_IDS = NOMBRES.map((i) => i.id);
