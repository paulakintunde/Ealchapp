// The two corpus entries a1.27.l1 has to author, and the reasons it has to.
//
// ── Why this file is two items and not eighty ──────────────────────────────
//
// The nombres theme holds 441 items and its coverage of 21 to 100 is complete:
// all eighty headwords exist as word items with IPA and a respelling, every one
// of them carrying the flashcard and voiceflash drills. Verified item by item
// on 2026-08-04 against the seed, not assumed. So this lesson SEQUENCES a
// corpus rather than writing one, and the default everywhere is reference by
// id.
//
// Two SENTENCES were genuinely missing, and both are missing at exactly the
// point the lesson makes its claim:
//
//   the phone number   259 sentences in this theme, five of them phone
//                      numbers, and not one uses a form above sixty-nine.
//                      fr.a1.nombres.049 reads "zéro six, douze, vingt,
//                      trente" and fr.a2.nombres.046 "douze, treize, quatorze,
//                      quinze". Both are a1.02's range, not this one. The
//                      brief said this payoff was "already sitting in your
//                      corpus"; the sentence is there and its numbers are not.
//                      A phone number is the whole reason 21 to 100 matters
//                      and the lesson could not dictate one.
//
//   the et at 71       eighteen sentences in the theme use a 70/80/90 form and
//                      none of them contains "soixante et onze". The et rule
//                      is the most common written error in the range and the
//                      dictée had nothing to test it with.
//
// ── What was NOT authored, and why ────────────────────────────────────────
//
// Nothing else. The two other dictée sentences test the S on quatre-vingts
// (fr.a1.nombres.050, "Cette robe fait quatre-vingts euros") and the absent et
// at eighty-one (fr.a1.nombres.051, "Elle a quatre-vingt-un ans aujourd'hui"),
// and both already existed with the dictation drill on them. Every listening
// line, scenario turn and reading passage in this lesson is inline text, which
// takes no corpus entry at all, so the thin hard-range sentence pool (18 items,
// against 74 for the easy range) constrained which lines could be REUSED and
// never forced an authoring decision.
//
// ── Respelling convention ─────────────────────────────────────────────────
//
// Same as elision-corpus.ts and nombres-corpus.ts: hyphenated syllables,
// stressed syllable capitalised, nasal vowels closed with a superscript n and
// never a plain n or m, /ø œ/ as EU, /y/ as Ü. Sentences carry no respelling,
// so neither entry here needs one.
//
// Note that the surrounding theme does not follow that convention: 71 of its
// 182 respelled items close a nasal vowel with a plain n or m, 36 of them
// inside this lesson's own range (quatre-vingts as kah-truh-VAN, cent as SAHN,
// cinquante as san-KAHNT). Referencing those by id is safe, because the
// respelling is resolved at render time and never enters a section. Every
// respelling this lesson INLINES is rewritten to house convention, and
// a1-27-nombres.test.ts asserts that with the real validator. Fixing the
// corpus itself is a backfill, not a side effect of one lesson, and the count
// is reported in the handover so it stays visible.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

/** Sequence numbers continue the existing a1 run, which a1.02 left at .235.
 *  Stable: they are the SRS key and every attempt ever logged hangs off them.
 *  Append, never renumber. */
export const NOMBRES21: Item[] = [
  {
    id: 'fr.a1.nombres.236',
    kind: 'sentence',
    level: 'a1',
    theme: 'nombres',
    fr: 'Mon numéro est le zéro six, quatre-vingt-douze, soixante-quinze, quatre-vingt-un, trente-trois.',
    en: 'My number is zero six, ninety-two, seventy-five, eighty-one, thirty-three.',
    ipa: '/mɔ̃ ny.me.ʁo ɛ lə ze.ʁo sis ka.tʁə.vɛ̃ duz swa.sɑ̃t kɛ̃z ka.tʁə.vɛ̃ œ̃ tʁɑ̃t tʁwa/',
    // Five two-digit chunks, which is the whole number and not a fragment of
    // one. An earlier draft stopped after three, and nobody in France gives
    // three: the reason this range matters is that you have to hold all five in
    // a row at the speed they arrive.
    notes: 'A French phone number is read as five two-digit numbers, never as ten single digits. This is the shape of every number anyone will ever give you.',
    tags: ['number', 'phone', 'chunked', 'hard-range'],
    // `dictation` is what the dictée mission needs; `sentence` is what puts it
    // in the sentence drills. No flashcard: a sentence this long is not a
    // vocabulary card and the hub would serve it as one.
    drills: ['dictation', 'sentence'],
    audioRef: null,
    version: 1,
  },
  {
    id: 'fr.a1.nombres.237',
    kind: 'sentence',
    level: 'a1',
    theme: 'nombres',
    fr: 'Ma sœur a soixante et onze ans.',
    en: 'My sister is seventy-one years old.',
    ipa: '/ma sœʁ a swa.sɑ̃.te ɔ̃z ɑ̃/',
    notes: 'Seventy-one takes et and drops its hyphens, because onze is standing where un would. Eighty-one and ninety-one do not.',
    tags: ['number', 'et-rule', 'hard-range'],
    drills: ['dictation', 'sentence'],
    audioRef: null,
    version: 1,
  },
];

/** The ids this file authors, for the scripts and the test, so none of them
 *  restates a list that can drift. */
export const NOMBRES21_NEW_IDS = NOMBRES21.map((i) => i.id);
