// The five corpus entries a1.28.l1 has to author, and the reasons it has to.
//
// ── Why five and not fifty ─────────────────────────────────────────────────
//
// The nombres theme holds 443 items and its coverage of the MULTIPLIER
// HEADWORDS is complete: cent, deux cents, trois cents, cinq cents, cent un,
// cent cinquante, cent mille, mille, deux mille, dix mille, un million, deux
// millions, un milliard and deux milliards all exist as word items with IPA, a
// respelling and the flashcard and voiceflash drills. Verified against
// Postgres on 2026-08-05, not against the seed, because the two drift and an id
// that exists only in the seed renders as an empty card.
//
// The S rule is also fully demonstrable from sentences that already exist. 29
// items carry `cents` and 40 carry bare `cent`, and the contrast lands exactly
// where the rule does:
//
//   deux cents habitants          S: multiplied, and nothing follows
//   trois cent trente mètres      no S: a number follows
//   plus de cent mille livres     no S: cent is not multiplied
//
// So this lesson SEQUENCES a corpus rather than writing one, and the default
// everywhere is reference by id. What follows is the set of places where the
// lesson makes a claim and the corpus has nothing to make it with.
//
// ── The four gaps, checked one at a time ───────────────────────────────────
//
//   the S-drop as a card    `deux cents` exists and `deux cent cinquante` does
//                           not, so the one contrast the whole S rule turns on
//                           could be stated in prose and never handed to the
//                           flashcard hub or the SRS. .238 is that card.
//
//   `de` after million      the theme holds exactly ONE sentence containing
//                           `million` ("Le musée du Louvre reçoit huit millions
//                           de visiteurs par an") and it happens to be the one
//                           that demonstrates `de`. Teaching a rule off a
//                           single example means re-using that example in three
//                           sections, which reads as a lesson that ran out of
//                           material. .239 puts the rule on a headword card and
//                           .240 gives it a second sentence, with the elided
//                           d' that one example cannot show.
//
//   milliard                ZERO sentences in the entire theme. The word exists
//                           twice as a headword (un milliard, deux milliards)
//                           and has never been used. .241.
//
//   a large price with its  Three sentences say a price with bare cents (vingt-
//   cents                   deux euros cinquante, un euro vingt, sept euros
//                           cinquante) and all three are under ten euros. Six
//                           say a price above a hundred and none of them has
//                           cents. The convention this lesson teaches is that
//                           the cents arrive as a bare number at the end of a
//                           run, and a run of two words does not show that. .242
//                           is the dictée sentence for the price surface.
//
// ── What was NOT authored, and why ─────────────────────────────────────────
//
//   zéro         ABSENT from this theme as a headword. It appears inside five
//                phone-number sentences and exists as no card. It is arguably
//                a1.02's (it is a digit, not a multiplier, and the surface it
//                lives on is the phone number a1.27 already owns), and taking
//                it here would be scope creep. Raised in the handover rather
//                than absorbed.
//
//   cents, bare  ABSENT, and correctly so. `cents` is never said or written on
//                its own; it only ever exists as the tail of `deux cents`.
//
//   mille un     ABSENT. Nothing at A1 needs 1001.
//
//   years in     ZERO items in the theme write a year in digits, and none is
//   digits       authored here either: the year-matching material is inline
//                tapTable cells and quiz options, which take no corpus entry.
//
//   `milles`     The error this lesson exists to stage. It appears NOWHERE in
//                the corpus and must not: it is staged only in the lesson, and
//                only in the fields whose job is to display a wrong form (a
//                scene break's `wrong`, a commonErrors `wrong`, an errorSpot
//                prompt, a scene choice whose outcome is `breaks`).
//                a1-28-grands-nombres.test.ts asserts exactly that split.
//
// ── Respelling convention ─────────────────────────────────────────────────
//
// Same as nombres21-corpus.ts and elision-corpus.ts: hyphenated syllables,
// stressed syllable capitalised, nasal vowels closed with a SUPERSCRIPT n and
// never a plain n or m, /ø œ/ as EU, /y/ as Ü. Sentences carry no respelling.
//
// The surrounding theme does not follow that convention. Run through the real
// validator (hasPlainNasalFor, density.logic.ts), 71 of the theme's 182
// respelled items would fail if their respelling were copied verbatim into a
// lesson card, and five of the seven multiplier headwords are among them:
//
//   cent           SAHN            fails      mille        MEEL      ok
//   deux cents     DUH SAHN        fails      deux mille   DUH MEEL  ok
//   un million     UHN mee-LYOHN   fails
//   deux millions  DUH meel-YOHN   fails
//   un milliard    UHN mee-LYAR    fails
//
// Referencing those by id is safe: the respelling resolves at render time and
// never enters a section, so the validator never sees it. Every respelling the
// lesson INLINES is rewritten to house convention, and the test asserts that
// with the real validator rather than a copy of it. Fixing the corpus itself is
// a backfill (scripts/data/sons-respell-backfill.ts is the precedent), not a
// side effect of one lesson, and the count is reported in the handover so it
// stays visible.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

/** Sequence numbers continue the existing a1 run, which a1.27 left at .237.
 *  Stable: they are the SRS key and every attempt ever logged hangs off them.
 *  Append, never renumber. */
export const NOMBRES_LARGE: Item[] = [
  {
    id: 'fr.a1.nombres.238',
    kind: 'word',
    level: 'a1',
    theme: 'nombres',
    fr: 'deux cent cinquante',
    en: 'two hundred fifty',
    ipa: '/dø sɑ̃ sɛ̃.kɑ̃t/',
    respell: 'duh sahⁿ saⁿ-KAHⁿT',
    // The S rule has two halves and the corpus only carried one of them as a
    // card. `deux cents` (fr.sons.nombres.034) is the half with the S; this is
    // the half without it, and the two sit beside each other in the deck so the
    // rule is a contrast rather than an assertion.
    notes: 'No S on cent, because a number follows it. deux cents has one, because nothing does. Nothing about the sound changes either way.',
    tags: ['number', 'multiplier', 'cent', 's-drop'],
    drills: ['flashcard', 'voiceflash'],
    audioRef: null,
    version: 1,
  },
  {
    id: 'fr.a1.nombres.239',
    kind: 'phrase',
    level: 'a1',
    theme: 'nombres',
    fr: 'un million d’habitants',
    en: 'a million inhabitants',
    ipa: '/œ̃ mi.ljɔ̃ da.bi.tɑ̃/',
    respell: 'uhⁿ mee-LYOHⁿ da-bee-TAHⁿ',
    // Chosen over "un million de personnes" because it carries BOTH halves of
    // the noun rule on one card: million needs de to reach what it counts, and
    // de elides to d' in front of a vowel. The theme's only million sentence
    // shows the first and not the second.
    notes: 'million is a noun, so it needs de to reach what it counts. Before a vowel that de becomes d’. cent and mille need nothing at all.',
    tags: ['number', 'multiplier', 'million', 'de'],
    drills: ['flashcard', 'voiceflash'],
    audioRef: null,
    version: 1,
  },
  {
    id: 'fr.a1.nombres.240',
    kind: 'sentence',
    level: 'a1',
    theme: 'nombres',
    fr: 'Cette application compte trois millions d’utilisateurs.',
    en: 'This app has three million users.',
    ipa: '/sɛt a.pli.ka.sjɔ̃ kɔ̃t tʁwa mi.ljɔ̃ dy.ti.li.za.tœʁ/',
    notes: 'Both halves of the noun rule in one line: the S on millions, and the de that reaches the thing counted, elided to d’ before a vowel.',
    tags: ['number', 'multiplier', 'million', 'de', 'quantity'],
    // `dictation` so it can be dictated later if the dictée is ever widened;
    // `sentence` is what puts it in the sentence drills. No flashcard: a
    // sentence is not a vocabulary card and the hub would serve it as one.
    drills: ['dictation', 'sentence'],
    audioRef: null,
    version: 1,
  },
  {
    id: 'fr.a1.nombres.241',
    kind: 'sentence',
    level: 'a1',
    theme: 'nombres',
    fr: 'La France produit plus de deux milliards de bouteilles chaque année.',
    en: 'France produces more than two billion bottles every year.',
    ipa: '/la fʁɑ̃s pʁɔ.dɥi ply də dø mi.ljaʁ də bu.tɛj ʃak a.ne/',
    // The first sentence in this theme to use milliard at all. `de` appears
    // twice and means two different things, which is worth meeting once: the
    // first is the de of "plus de", the second is the de the noun requires.
    notes: 'milliard behaves exactly like million: an S in the plural, and de before what it counts. A French milliard is a thousand million, which is the English billion.',
    tags: ['number', 'multiplier', 'milliard', 'de', 'quantity'],
    drills: ['dictation', 'sentence'],
    audioRef: null,
    version: 1,
  },
  {
    id: 'fr.a1.nombres.242',
    kind: 'sentence',
    level: 'a1',
    theme: 'nombres',
    fr: 'Ce billet de train coûte cent vingt-quatre euros quatre-vingts.',
    en: 'This train ticket costs one hundred twenty-four euros eighty.',
    ipa: '/sə bi.jɛ də tʁɛ̃ kut sɑ̃ vɛ̃t.katʁ ø.ʁo ka.tʁə.vɛ̃/',
    // 124,80. Written with a comma in France, said with no word between the
    // euros and the cents. Every priced sentence in the theme that carries
    // cents is under ten euros, so the run is two words long and the pattern
    // does not show; here it is six, which is what a real price sounds like.
    notes: 'A price is one run at one speed. No word for centimes and no et: the cents arrive as a bare number after the currency, and quatre-vingts keeps its S because nothing follows it.',
    tags: ['number', 'multiplier', 'cent', 'price', 'euros'],
    drills: ['dictation', 'sentence'],
    audioRef: null,
    version: 1,
  },
];

/** The ids this file authors, for the scripts and the tests, so none of them
 *  restates a list that can drift. */
export const NOMBRES_LARGE_NEW_IDS = NOMBRES_LARGE.map((i) => i.id);
