// The a1.10 corpus: what this lesson imports, what it withdraws, and the nine
// shipped respellings it repairs.
//
// THIS FILE IS THE SINGLE SOURCE OF TRUTH for the 43 imported rows, the 13
// reused rows, and every respelling a1.10 puts on a screen. The lesson body
// (meteo-lesson.ts) reads `fr`, `ipa`, `respell` and `en` FROM HERE and never
// restates them, for the same reason mois-corpus.ts and jours-corpus.ts do:
// before that convention one word's transcription was typed by hand in five
// sections and the five copies were free to drift.
//
// ══════════════════════════════════════════════════════════════════════════
//  a1.10 AUTHORS NOTHING. NOT ONE ROW. THAT IS THE HEADLINE.
// ══════════════════════════════════════════════════════════════════════════
//
// A1-10-SEASONS-WEATHER-PROMPT.md already corrected an earlier draft that told
// this author to write the weather vocabulary, and it was right to: `meteo`
// holds 336 published rows in Postgres against 1 in seed.json. But the
// corrected brief then makes one absence claim of its own, and that one is
// wrong in the same direction:
//
//   "What is genuinely absent, verified both ways: `quel temps fait-il`
//    returns zero in Postgres and the seed. Asking about the weather is the
//    one thing you author from nothing, and your canDo requires it."
//
// It exists FOUR times, published, and one of them is in this unit's own
// declared theme. Measured against Postgres on 2026-08-06:
//
//   fr.a1.meteo.183             "Quel temps fait-il ?"   phrase, ipa, voiceflash
//   fr.a1.rp-meteo-nature.001   "Quel temps fait-il ?"   phrase, cardType vocab
//   fr.sons.questions.057       "quel temps fait-il ?"   phrase, with a respell
//   fr.a1.meteo.213             "Quel temps fait-il aujourd'hui ?"   sentence
//
// plus fr.a1.questions.108 with the same sentence, fr.a1.meteo.214 and
// fr.a1.questions.115 with « Fait-il beau ... ? », and fr.a2.meteo.010
// « le temps qu'il fait ». Authoring the question would have collided with
// fr.a1.meteo.183 inside `meteo` and failed flashhub-coverage.test.ts, which
// keys decks on `fr` per theme with the article stripped.
//
// The brief's own closing bullet asks for exactly this to be reported: "Three
// briefs in a row have been wrong about the corpus in the same direction, and
// the only thing that has ever caught it is somebody running the probe." Four
// now. The probe was run; see the two divergences below as well.
//
// ── Two smaller numbers in the brief that the probe disagrees with ─────────
//
//   "149 carry `il fait`"   The probe prints 148 published, 29 in the seed.
//   "`il neige` 19/2"       The probe prints 11 published, 2 in the seed.
//
// Neither changes a decision. Both are recorded because a figure quoted from a
// brief and never re-measured is how the last three briefs went wrong.
//
// ── The largest hidden cost, measured rather than feared ───────────────────
//
// The brief warns: "Check through the real `endingPopulation` and expect to
// withdraw several." It is right, and the number is 15 of the rows this lesson
// most obviously wants. Every weather noun and every articled season name is a
// gendered single-word noun, which is exactly the class `endingPopulation()` in
// gender.logic.ts admits and `a1-03-genre.test.ts` re-measures twenty printed
// figures from the seed against on every run.
//
// Measured, not assumed. Importing all fifteen moves SEVEN of a1.03's printed
// figures:
//
//        ending    seed alone      with the fifteen
//        -age      29 @ 90%        31 @ 90%
//        -té       26 @ 73%        27 @ 70%     <- a printed percentage
//        -ie       40 @ 85%        41 @ 85%
//        -e        873 @ 70%       878 @ 69%    <- a printed percentage
//        -on       142 @ 60%       143 @ 59%    <- a printed percentage
//        -ps       7 @ 86%         8 @ 88%      <- a printed percentage
//        -er       81 @ 99%        82 @ 99%
//
// So all fifteen are WITHDRAWN and carried as display strings on their cards.
// What they lose is an SRS entry. What that buys is not silently making another
// lesson's printed numbers wrong, which is the trade a1.09 made for `le mois`,
// `l'année` and `la date`, and which a1.08 got wrong and had to reverse in v3.
//
// ── Which means the seasons decided themselves ─────────────────────────────
//
// The brief offers three options for where the seasons live and asks for one,
// with reasons. The corpus splits them: the articled nouns are in `meteo`
// (.023-.026) and the prepositional forms are in `jours-et-mois` (.120-.123),
// which a1.08 and a1.09 both bound to.
//
// This lesson takes OPTION 1, teach both sets where they already are, with the
// meteo half withdrawn for the reason above. So:
//
//   the SRS cards are   fr.sons.jours-et-mois.120-123   en été · en hiver
//                                                       au printemps · en automne
//   the display strings are   le printemps · l'été · l'automne · l'hiver
//
// That is forced by the gender guard and it is also the better answer. The
// brief says so itself: "Put the preposition on the card: `au printemps` and
// `en été` are the point, and splitting them makes the deck decorative." The
// four rows that survive into spaced repetition are the four that carry the
// thing the lesson exists to teach. The four that were withdrawn are the four
// that carry only a noun.
//
// Option 3 (author season rows into `meteo`) was never live: four of the eight
// forms already exist and the other four are exactly what was just withdrawn.
//
// ── What this means for a1.12: NOTHING, and the brief is stale about it ────
//
// The brief's track table says:
//
//     seq 15  a1.12  Telling Time  empty, prereq a1.27, still declares dead "temps"
//
// Measured 2026-08-06, all three halves of that are wrong. a1.12.l1 SHIPS: 30
// sections, 7 acts, v3, in both Postgres and the seed. The unit is bound to
// `heure-et-date`, not to the dead `temps`. Its prereq is a1.27, which is the
// one part that is right.
//
// So a1.09's merge note ("a1.12 should rebind to jours-et-mois") is also spent:
// a1.12 rebound itself, somewhere else, and the clock question is closed. There
// is NO outstanding action for a1.12 and this lesson creates none. The only
// unit in the cluster still carrying a dead binding was this one, and this
// build fixes it.
//
// This is the fourth corpus-or-track claim in this brief that the probe
// contradicts. See the header above for the other three.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import { unitRef } from './_unit-ref.ts';

/* ─── What the screens display ─────────────────────────────────────────────
 *
 * Every French unit a1.10 puts on a card, with the respelling this lesson
 * stands behind. Keyed by the French form, because a large minority of these
 * are display strings rather than corpus rows: all fifteen gendered nouns are
 * WITHDRAWN from the seed (see WITHDRAWN_IDS) and exist here only as text.
 *
 * NO U+203F. Four of the imported rows carry the tie in their own `ipa`
 * (`/ɑ̃.n‿e.te/` and the like) because they were authored before it was known
 * that it renders as a low underscore on a Pixel 6. This lesson never displays
 * an imported `ipa`: it displays the IPA below, which is written without the
 * tie, and describes the link in words on the season deck instead. The batch
 * and the merge both grep the authored half for the character.               */

export type Display = { fr: string; ipa: string; respell: string; en: string };

const D = (fr: string, ipa: string, res: string, en: string): Display =>
  ({ fr, ipa: `/${ipa}/`, respell: `[${res}]`, en });

export const RESPELL: Record<string, Display> = {
  // ── The four seasons, as the frames this lesson teaches. These four ARE
  //    corpus rows (fr.sons.jours-et-mois.120-123) and all four respellings
  //    are repaired: every one closed its nasal with a plain n.
  'au printemps': D('au printemps', 'o pʁɛ̃.tɑ̃', 'oh prehⁿ-TAHⁿ', 'in spring'),
  'en été': D('en été', 'ɑ̃.ne.te', 'ahⁿ-nay-TAY', 'in summer'),
  'en automne': D('en automne', 'ɑ̃.nɔ.tɔn', 'ahⁿ-noh-TONN', 'in autumn'),
  'en hiver': D('en hiver', 'ɑ̃.ni.vɛʁ', 'ahⁿ-nee-VEHR', 'in winter'),

  // ── The four seasons as bare names. DISPLAY STRINGS ONLY: fr.a1.meteo.023
  //    through .026 are withdrawn. See WITHDRAWN_IDS.
  'le printemps': D('le printemps', 'lə pʁɛ̃.tɑ̃', 'luh prehⁿ-TAHⁿ', 'spring'),
  "l'été": D("l'été", 'le.te', 'lay-TAY', 'summer'),
  "l'automne": D("l'automne", 'lɔ.tɔn', 'loh-TONN', 'autumn'),
  "l'hiver": D("l'hiver", 'li.vɛʁ', 'lee-VEHR', 'winter'),
  // The one form the brief says is genuinely absent as a corpus row, and it is:
  // only `l'automne` and `en automne` exist. Authored here as a display string
  // for the deck card, because the silent m is the sound a learner gets wrong
  // and the deck is the only place the word is heard alone.
  automne: D('automne', 'ɔ.tɔn', 'oh-TONN', 'autumn'),

  // ── Shape 1: il fait + a weather word.
  'il fait beau': D('il fait beau', 'il fɛ bo', 'EEL FEH BOH', 'the weather is nice'),
  'il fait chaud': D('il fait chaud', 'il fɛ ʃo', 'EEL FEH SHOH', 'it is hot'),
  'il fait froid': D('il fait froid', 'il fɛ fʁwa', 'EEL FEH FRWAH', 'it is cold'),
  'il fait frais': D('il fait frais', 'il fɛ fʁɛ', 'EEL FEH FREH', 'it is cool'),
  'il fait doux': D('il fait doux', 'il fɛ du', 'EEL FEH DOO', 'it is mild'),
  'il fait mauvais': D('il fait mauvais', 'il fɛ mo.vɛ', 'EEL FEH moh-VEH', 'the weather is bad'),

  // ── Shape 2: il fait + du / de la + a weather noun.
  'il fait du vent': D('il fait du vent', 'il fɛ dy vɑ̃', 'EEL FEH DÜ VAHⁿ', 'it is windy'),
  'il fait du soleil': D('il fait du soleil', 'il fɛ dy sɔ.lɛj', 'EEL FEH DÜ soh-LAY', 'it is sunny'),
  'il fait du brouillard': D('il fait du brouillard', 'il fɛ dy bʁu.jaʁ', 'EEL FEH DÜ broo-YAHR', 'it is foggy'),

  // ── Shape 3: il + a weather word that is the whole sentence.
  'il pleut': D('il pleut', 'il plø', 'EEL PLEU', 'it is raining'),
  'il neige': D('il neige', 'il nɛʒ', 'EEL NEHZH', 'it is snowing'),

  // ── Shape 4: il y a + du / de la / des.
  'il y a du vent': D('il y a du vent', 'i.lja dy vɑ̃', 'eel yah DÜ VAHⁿ', 'it is windy'),
  'il y a du soleil': D('il y a du soleil', 'i.lja dy sɔ.lɛj', 'eel yah DÜ soh-LAY', 'it is sunny'),
  'il y a des nuages': D('il y a des nuages', 'i.lja de nɥ.aʒ', 'eel yah DAY nü-AHZH', 'it is cloudy'),
  "il y a de l'orage": D("il y a de l'orage", 'i.lja də lɔ.ʁaʒ', 'eel yah duh loh-RAHZH', 'there is a storm'),

  // ── The three frames, on ONE adjective. This is the lesson.
  "j'ai chaud": D("j'ai chaud", 'ʒe ʃo', 'zhay SHOH', 'I am hot'),
  "j'ai froid": D("j'ai froid", 'ʒe fʁwa', 'zhay FRWAH', 'I am cold'),
  'tu as froid': D('tu as froid', 'ty a fʁwa', 'tü ah FRWAH', 'you are cold'),
  'avoir chaud': D('avoir chaud', 'a.vwaʁ ʃo', 'ah-VWAHR SHOH', 'to be hot'),
  'avoir froid': D('avoir froid', 'a.vwaʁ fʁwa', 'ah-VWAHR FRWAH', 'to be cold'),
  'le café est chaud': D('le café est chaud', 'lə ka.fe ɛ ʃo', 'luh ka-FAY eh SHOH', 'the coffee is hot'),
  'le vent est froid': D('le vent est froid', 'lə vɑ̃ ɛ fʁwa', 'luh VAHⁿ eh FRWAH', 'the wind is cold'),

  // ── The il that is nobody, against the il that is a man.
  'il fait du yoga': D('il fait du yoga', 'il fɛ dy jɔ.ɡa', 'EEL FEH DÜ yoh-GAH', 'he does yoga'),
  'il a froid': D('il a froid', 'i.la fʁwa', 'ee-LAH FRWAH', 'he is cold'),

  // ── Asking. Present in the corpus four times over, and imported.
  'Quel temps fait-il ?': D('Quel temps fait-il ?', 'kɛl tɑ̃ fɛ.til', 'KEHL TAHⁿ feh-TEEL', "what is the weather like?"),

  // ── The weather words. ALL DISPLAY STRINGS: every one is withdrawn.
  'le vent': D('le vent', 'lə vɑ̃', 'luh VAHⁿ', 'the wind'),
  'la pluie': D('la pluie', 'la plɥi', 'lah PLWEE', 'the rain'),
  'la neige': D('la neige', 'la nɛʒ', 'lah NEHZH', 'the snow'),
  'le soleil': D('le soleil', 'lə sɔ.lɛj', 'luh soh-LAY', 'the sun'),
  "l'orage": D("l'orage", 'lɔ.ʁaʒ', 'loh-RAHZH', 'the storm'),
  'le brouillard': D('le brouillard', 'lə bʁu.jaʁ', 'luh broo-YAHR', 'the fog'),
  'un nuage': D('un nuage', 'œ̃ nɥ.aʒ', 'uhⁿ nü-AHZH', 'a cloud'),
  'le ciel': D('le ciel', 'lə sjɛl', 'luh SYEHL', 'the sky'),
  'la météo': D('la météo', 'la me.te.o', 'lah may-tay-OH', 'the forecast'),
  'le degré': D('le degré', 'lə də.ɡʁe', 'luh duh-GRAY', 'the degree'),
  'la saison': D('la saison', 'la sɛ.zɔ̃', 'lah seh-ZOHⁿ', 'the season'),
};

/** The bracketed respelling of a French form this lesson displays. Throws
 *  rather than returning undefined: a card silently missing its transcription
 *  is the failure this file exists to stop, and it looks identical to a card
 *  that never wanted one. */
export function sub(fr: string): string {
  const d = RESPELL[fr];
  if (!d) throw new Error(`${unitRef('a1.10')}: no respelling authored for "${fr}". Add it to RESPELL.`);
  return d.respell;
}

/** The English gloss of a French form this lesson displays. Same source as the
 *  respelling, so a card and its label cannot disagree about what a frame
 *  means. */
export function enFor(fr: string): string {
  const d = RESPELL[fr];
  if (!d) throw new Error(`${unitRef('a1.10')}: no gloss authored for "${fr}". Add it to RESPELL.`);
  return d.en;
}

/** The IPA of a French form this lesson displays, in slashes. */
export function ipaOf(fr: string): string {
  const d = RESPELL[fr];
  if (!d) throw new Error(`${unitRef('a1.10')}: no IPA authored for "${fr}". Add it to RESPELL.`);
  return d.ipa;
}

/* ─── The four ───────────────────────────────────────────────────────────── */

/** The four seasons, in calendar order starting at spring, lowercase because
 *  French requires it. Named here so the lesson, the batch, the merge and the
 *  test all count the same set rather than four hand lists free to drift. */
export const THE_FOUR = ['printemps', 'été', 'automne', 'hiver'] as const;
export type Season = (typeof THE_FOUR)[number];

export const IN_ENGLISH: Record<Season, string> = {
  printemps: 'spring', été: 'summer', automne: 'autumn', hiver: 'winter',
};

/** The frame each season takes. THREE take `en` and one takes `au`, and this
 *  is the map the deck, the table, the drill and the test all read, so the
 *  exception cannot be right on one screen and wrong on another. */
export const SEASON_FRAME: Record<Season, string> = {
  printemps: 'au printemps', été: 'en été', automne: 'en automne', hiver: 'en hiver',
};

/** The four season frames as corpus rows, index-aligned with THE_FOUR.
 *  fr.sons.jours-et-mois.122 is `au printemps`, .120 `en été`, .123
 *  `en automne`, .121 `en hiver`. Listed rather than computed by offset,
 *  because the four ids are NOT in calendar order in the corpus. */
export const SEASON_IDS: string[] = [
  'fr.sons.jours-et-mois.122', // au printemps
  'fr.sons.jours-et-mois.120', // en été
  'fr.sons.jours-et-mois.123', // en automne
  'fr.sons.jours-et-mois.121', // en hiver
];

/** The four weather shapes a learner collapses into one. Declared here so the
 *  drill, the sheet and the test read one list. */
export const SHAPES = [
  // Six, not four. The other three shapes have as many members as the corpus
  // holds, and shape 1 is the one a learner will use most, so showing four of
  // its six here and the other two only in the vocabulary deck would release
  // two cards the drill never showed.
  { key: 'adjective', label: 'il fait + a weather word', frames: ['il fait beau', 'il fait chaud', 'il fait froid', 'il fait frais', 'il fait doux', 'il fait mauvais'] },
  { key: 'partitive', label: 'il fait + du + a thing', frames: ['il fait du vent', 'il fait du soleil', 'il fait du brouillard'] },
  { key: 'verb', label: 'il + one word that is the whole thing', frames: ['il pleut', 'il neige'] },
  { key: 'ilya', label: 'il y a + du, de la or des', frames: ['il y a du vent', 'il y a du soleil', 'il y a des nuages', "il y a de l'orage"] },
] as const;

/* ─── Withdrawn on purpose ─────────────────────────────────────────────────
 *
 * The fifteen rows this lesson most obviously wants and does NOT import.
 *
 * Every one is a gendered single-word noun, so `endingPopulation()` in
 * gender.logic.ts admits it, and `a1-03-genre.test.ts` re-measures twenty
 * printed figures from the seed on every run. Measured (see the header):
 * importing all fifteen moves seven of those figures, four of which are
 * percentages printed on a card.
 *
 * a1.11 added two feminine nouns in -e, moved a1.03's count from 871 to 873 and
 * turned the suite red on a lesson nobody had touched. a1.08 shipped the same
 * bug through a hand-rolled copy of the guard and had to withdraw four rows
 * after the fact. This lesson does not reopen it: all fifteen are display
 * strings in RESPELL above, and the batch asserts through the REAL
 * `endingPopulation` that nothing it writes joins that population.
 *
 * The four season FRAMES are safe for a checkable reason rather than a hopeful
 * one: `en été`, `en hiver`, `au printemps` and `en automne` are `kind:
 * 'phrase'` and carry no gender at all, which the population excludes twice
 * over. So do `il fait beau`, `il pleut` and every other phrase this lesson
 * imports. `il fait mauvais`, `il fait doux` and `il fait frais` carry
 * `gender: 'm'` and `kind: 'word'` and are still safe, because
 * `endingPopulation` excludes anything whose bare noun contains a space. */
export const WITHDRAWN_IDS: string[] = [
  'fr.a1.meteo.001', // la pluie
  'fr.a1.meteo.002', // le soleil
  'fr.a1.meteo.003', // un nuage
  'fr.a1.meteo.012', // le vent
  'fr.a1.meteo.013', // la neige
  'fr.a1.meteo.014', // l'orage
  'fr.a1.meteo.015', // le brouillard
  'fr.a1.meteo.017', // le ciel
  'fr.a1.meteo.022', // la météo
  'fr.a1.meteo.023', // le printemps
  'fr.a1.meteo.024', // l'été
  'fr.a1.meteo.025', // l'automne
  'fr.a1.meteo.026', // l'hiver
  'fr.a1.meteo.033', // le degré
  'fr.a1.meteo.036', // la saison
];

/* ─── The respelling repairs ───────────────────────────────────────────────
 *
 * Nine, in two lists, and the split is not bureaucratic: the merge writes
 * seed.json and can only repair a row the seed will actually hold. Four of the
 * nine rows are imported and land in the seed; five are WITHDRAWN, so they
 * exist only in Postgres and only the batch can reach them. Printing them in
 * one undifferentiated list would promise a seed repair that never happened.
 *
 * ── automne, and why it is NOT a superscript ──────────────────────────────
 *
 * READ THIS BEFORE "CORRECTING" IT.
 *
 * `automne` is /ɔ.tɔn/. The m is SILENT and the n is a REAL PRONOUNCED
 * CONSONANT, so there is no nasal vowel anywhere in the word and writing
 * `oh-TOHⁿ` would teach a sound that is not there. It is the same class as
 * `jaune` /ʒon/, which §3 of A1-BUILD-INVARIANTS.md documents.
 *
 * But `hasPlainNasalFor` flags EVERY single-N respelling of it. Its rule is
 * that a vowel letter after the n or m in the FRENCH SPELLING means the
 * consonant is real, and `automne` is spelled `mne`, so the vowel it looks for
 * sits after the m rather than after the n and the check never sees it. All
 * three shipped forms fail: `loh-TOHN` (meteo, jardinage), `o-TON` (paysages)
 * and `oh-TUHN` (rp-meteo-nature).
 *
 * The fix is a DOUBLE N, which is also honest notation: `loh-TONN`,
 * `oh-TONN`, `ahⁿ-noh-TONN`. That avoids the token-final vowel+N the checker
 * looks for, teaches the real consonant, and does not invent a nasal. Verified
 * against the real `hasPlainNasalFor` in the batch, the merge and the test, and
 * the test additionally asserts BY NAME that `automne` carries no superscript.
 *
 * ── The others ────────────────────────────────────────────────────────────
 *
 * `le vent`, `la saison`, `le printemps` and `quel temps fait-il` are the
 * opposite case: genuine nasal vowels closed with a plain n, which is the
 * violation the house convention names. `printemps` carries TWO, and the
 * repaired form matches the already-correct shipped `prehⁿ-TAHⁿ` on
 * fr.sons.muettes.018 rather than inventing a fourth variant of a word that
 * already had four.
 *
 * `un nuage` was not in the brief's list and the probe found it: `UHN` closes
 * /œ̃/ with a plain n.
 *
 * Nothing is repaired for being merely different. `l'été` carries three forms
 * (`lay-TAY`, `ay-TAY`, `eh-TAY`) and all three follow the convention, so none
 * is touched; this lesson displays `lay-TAY` throughout, which is what its own
 * theme says. Same for `le soleil` with six forms and `la pluie` with four.  */

export type RespellRepair = {
  id: string;
  fr: string;
  /** What the row carries today. The batch refuses if this has changed. */
  from: string;
  /** What it will carry. Always equal to this lesson's own RESPELL, unbracketed. */
  to: string;
  why: string;
};

const unbracket = (s: string) => s.replace(/^\[|\]$/g, '');

/** Repairs on rows this lesson IMPORTS, so they land in both copies. */
export const RESPELL_REPAIRS: RespellRepair[] = [
  {
    id: 'fr.sons.jours-et-mois.122', fr: 'au printemps',
    from: 'oh prahn-TAHN', to: unbracket(RESPELL['au printemps'].respell),
    why: 'TWO plain n endings, both closing /ɑ̃/. The repaired form matches fr.sons.muettes.018, which already ships the correct prehⁿ-TAHⁿ, so no fifth variant of this word is created. Caught by hasPlainNasalFor.',
  },
  {
    id: 'fr.sons.jours-et-mois.120', fr: 'en été',
    from: 'ahn-nay-TAY', to: unbracket(RESPELL['en été'].respell),
    why: 'a plain n closes the nasal /ɑ̃/ of en. The second n is the liaison consonant and is genuinely pronounced, so it stays. Caught by hasPlainNasalFor.',
  },
  {
    id: 'fr.sons.jours-et-mois.121', fr: 'en hiver',
    from: 'ahn-nee-VEHR', to: unbracket(RESPELL['en hiver'].respell),
    why: 'a plain n closes the nasal /ɑ̃/ of en. Caught by hasPlainNasalFor.',
  },
  {
    id: 'fr.sons.jours-et-mois.123', fr: 'en automne',
    from: 'ahn-noh-TUN', to: unbracket(RESPELL['en automne'].respell),
    why: 'TWO problems in one row. The plain n on en closes a real nasal and becomes ahⁿ. The TUN ending is automne, which has NO nasal vowel at all, so it becomes TONN rather than a superscript. See the note above before changing this.',
  },
];

/** Repairs on rows this lesson DISPLAYS but does not import, because all five
 *  are withdrawn or belong to another theme. Postgres only: the merge prints
 *  them and writes none of them, because none will be in the seed. */
export const DB_ONLY_REPAIRS: RespellRepair[] = [
  {
    id: 'fr.a1.meteo.012', fr: 'le vent',
    from: 'LUH VAHN', to: 'LUH VAHⁿ',
    why: 'a plain n closes the genuine nasal /ɑ̃/. fr.sons.nasales.018 already ships EEL FEH DÜ VAHⁿ for the same word inside a sentence, so the corpus contradicts itself on one word in two themes. Only the nasal moves: the row keeps its own capitalisation of the article, which is a variant rather than a violation.',
  },
  {
    id: 'fr.a1.meteo.036', fr: 'la saison',
    from: 'LAH seh-ZOHN', to: 'LAH seh-ZOHⁿ',
    why: 'a plain n closes the genuine nasal /ɔ̃/. Named in §3 of A1-BUILD-INVARIANTS.md as the case that looks like automne and is not.',
  },
  {
    id: 'fr.a1.meteo.023', fr: 'le printemps',
    from: 'LUH pran-TAHN', to: 'LUH prehⁿ-TAHⁿ',
    why: 'TWO plain n endings and a wrong first vowel. /pʁɛ̃/ is EHⁿ in this house, which is what fr.sons.muettes.018 already ships. This word carried FOUR competing forms before this repair.',
  },
  {
    id: 'fr.a1.meteo.025', fr: "l'automne",
    from: 'loh-TOHN', to: 'loh-TONN',
    why: 'flagged by hasPlainNasalFor, and NOT a nasal. The m is silent and the n is a real consonant, so the fix is a doubled N rather than a superscript. Read the note above this list before changing it.',
  },
  {
    id: 'fr.a1.meteo.003', fr: 'un nuage',
    from: 'UHN nü-AHZH', to: 'UHⁿ nü-AHZH',
    why: 'a plain n closes the genuine nasal /œ̃/ of un. Not in the brief; found by the probe.',
  },
  {
    id: 'fr.sons.questions.057', fr: 'quel temps fait-il ?',
    from: 'KEHL TAHN feh-TEEL', to: 'KEHL TAHⁿ feh-TEEL',
    why: 'a plain n closes the genuine nasal /ɑ̃/ of temps. This is the row the brief says does not exist. It does, with a respelling, and the respelling was wrong.',
  },
];

/* ─── The imported manifest ────────────────────────────────────────────────
 *
 * A RECORDED READ of Postgres, taken 2026-08-06 by scripts/_meteo_manifest.ts
 * and pasted here rather than retyped, so a transcription error is impossible
 * by construction. The batch compares every field of every row against the live
 * database before writing and refuses on any drift, which makes this a source
 * of truth rather than a cached guess.
 *
 * 43 rows across 12 themes. `meteo` is not in SEED_CUT.themes, so every row
 * named here has to be carried into the seed by the merge or it renders as an
 * empty card. Several rows carry U+203F in their own `ipa`; that is shipped
 * content and is left alone, and this lesson displays none of it.            */

export const IMPORTED: Item[] = [
  // ── adjectifs-essentiels ──
  {
    id: "fr.a1.adjectifs-essentiels.254", kind: "sentence", level: "a1", theme: "adjectifs-essentiels", fr: "Les jours sont chauds en été.", en: "The days are hot in summer.", notes: "{\"tiles\":[{\"w\":\"Les jours\",\"t\":\"the days\"},{\"w\":\"sont chauds\",\"t\":\"are hot\"},{\"w\":\"en été.\",\"t\":\"in summer\"}]}", tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },
  // ── expressions-frequentes ──
  {
    id: "fr.a1.expressions-frequentes.087", kind: "sentence", level: "a1", theme: "expressions-frequentes", fr: "Ça dépend du temps qu'il fait.", en: "It depends on the weather.", tags: [], drills: ["sentence"], version: 1,
  },
  // ── faux-amis ──
  {
    id: "fr.a1.faux-amis.152", kind: "sentence", level: "a1", theme: "faux-amis", fr: "Le village est très joli au printemps.", en: "The village is very pretty in spring.", ipa: "lə vi.laʒ ɛ tʁɛ ʒɔ.li o pʁɛ̃.tɑ̃", notes: "Same trap: \"joli\" means pretty, not jolly.", tags: ["false-friend"], drills: ["dictation"], version: 1,
  },
  // ── meteo ──
  {
    id: "fr.a1.meteo.004", kind: "sentence", level: "a1", theme: "meteo", fr: "Il fait froid en hiver.", en: "It is cold in winter.", notes: "Weather uses « faire », not « être » : il fait froid.", tags: ["weather","il-fait"], drills: ["flashcard"], version: 1, cardType: "gapfill", prompt: "Il ___ froid en hiver.",
  },
  {
    id: "fr.a1.meteo.005", kind: "sentence", level: "a1", theme: "meteo", fr: "Il pleut beaucoup en automne.", en: "It rains a lot in autumn.", notes: "« Pleuvoir » is impersonal, it only exists with « il » : il pleut.", tags: ["weather","impersonal"], drills: ["flashcard"], version: 1, cardType: "gapfill", prompt: "Il ___ beaucoup en automne.",
  },
  {
    id: "fr.a1.meteo.006", kind: "phrase", level: "a1", theme: "meteo", fr: "il pleut", en: "it rains / it is raining", tags: ["weather","present","pleuvoir"], drills: ["flashcard"], version: 1, cardType: "conjugation", prompt: "pleuvoir · présent · il",
  },
  {
    id: "fr.a1.meteo.008", kind: "sentence", level: "a1", theme: "meteo", fr: "Il fait chaud aujourd'hui.", en: "It is hot today.", notes: "After « il fait », the weather adjective stays masculine and invariable : chaud, never chaude.", tags: ["weather","il-fait"], drills: ["flashcard"], version: 1, cardType: "error", prompt: "Il fait chaude aujourd'hui.",
  },
  {
    id: "fr.a1.meteo.027", kind: "phrase", level: "a1", theme: "meteo", fr: "il fait beau", en: "the weather is nice", ipa: "il fɛ bo", respell: "EEL FEH BOH", notes: "Weather uses il fait plus an adjective.", tags: ["weather","phrase"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.a1.meteo.028", kind: "phrase", level: "a1", theme: "meteo", fr: "il fait froid", en: "it is cold", ipa: "il fɛ fʁwa", respell: "EEL FEH FRWAH", tags: ["weather","phrase"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.a1.meteo.031", kind: "phrase", level: "a1", theme: "meteo", fr: "il y a du soleil", en: "it is sunny", ipa: "il i a dy sɔlɛj", notes: "Weather can use il y a plus a noun.", tags: ["weather","phrase"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.a1.meteo.034", kind: "phrase", level: "a1", theme: "meteo", fr: "il neige", en: "it is snowing", respell: "EEL NEHZH", tags: ["phrase"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.a1.meteo.035", kind: "phrase", level: "a1", theme: "meteo", fr: "il y a du vent", en: "it is windy", tags: ["phrase"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.a1.meteo.037", kind: "word", level: "a1", theme: "meteo", fr: "il fait mauvais", en: "the weather is bad", ipa: "/il fɛ mo.vɛ/", respell: "EEL FEH moh-VEH", gender: "m", notes: "The opposite of il fait beau. Weather phrases use il fait plus an adjective.", tags: ["weather","phrase"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.a1.meteo.038", kind: "word", level: "a1", theme: "meteo", fr: "il fait doux", en: "it is mild", ipa: "/il fɛ du/", respell: "EEL FEH DOO", gender: "m", notes: "Pleasantly warm, not hot. Doux also means soft or gentle.", tags: ["weather","phrase"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.a1.meteo.039", kind: "word", level: "a1", theme: "meteo", fr: "il fait frais", en: "it is cool, it is chilly", ipa: "/il fɛ fʁɛ/", respell: "EEL FEH FREH", gender: "m", notes: "Between mild and cold. Frais also describes fresh food.", tags: ["weather","phrase"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.a1.meteo.067", kind: "sentence", level: "a1", theme: "meteo", fr: "Il pleut depuis ce matin, et le ciel est gris.", en: "It has been raining since this morning, and the sky is grey.", ipa: "il plø də.pɥi sə ma.tɛ̃ e lə sjɛl ɛ ɡʁi", notes: "“depuis” never takes a circumflex; do not confuse it with “dès”.", tags: ["orthographe"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.meteo.070", kind: "sentence", level: "a1", theme: "meteo", fr: "Il y a du soleil aujourd'hui.", en: "It's sunny today.", notes: "{\"tiles\":[{\"w\":\"Il y a\",\"t\":\"there is\"},{\"w\":\"du soleil\",\"t\":\"sunshine\"},{\"w\":\"aujourd'hui.\",\"t\":\"today\"}]}", tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },
  {
    id: "fr.a1.meteo.183", kind: "phrase", level: "a1", theme: "meteo", fr: "Quel temps fait-il ?", en: "What's the weather like?", ipa: "kɛl tɑ̃ fɛ.til", tags: [], drills: ["voiceflash","review"], version: 1,
  },
  {
    id: "fr.a1.meteo.213", kind: "sentence", level: "a1", theme: "meteo", fr: "Quel temps fait-il aujourd'hui ?", en: "What's the weather like today?", ipa: "kɛl tɑ̃ fɛ til oʒuʁdɥi", tags: [], drills: ["sentence","review"], version: 1,
  },
  {
    id: "fr.a1.meteo.220", kind: "sentence", level: "a1", theme: "meteo", fr: "Il fait vingt degrés aujourd'hui.", en: "It's twenty degrees today.", ipa: "il fɛ vɛ̃ dəɡʁe oʒuʁdɥi", tags: [], drills: ["sentence","review"], version: 1,
  },
  {
    id: "fr.a1.meteo.227", kind: "sentence", level: "a1", theme: "meteo", fr: "Le matin, il fait frais.", en: "In the morning, it's cool.", ipa: "lə matɛ̃ il fɛ fʁɛ", tags: [], drills: ["sentence","review"], version: 1,
  },
  {
    id: "fr.a1.meteo.238", kind: "sentence", level: "a1", theme: "meteo", fr: "Il fait bon vivre ici au printemps.", en: "It's nice to live here in spring.", ipa: "il fɛ bɔ̃ vivʁ isi o pʁɛ̃tɑ̃", tags: [], drills: ["sentence","review"], version: 1,
  },
  {
    id: "fr.a1.meteo.257", kind: "sentence", level: "a1", theme: "meteo", fr: "Il fait nuit tôt en hiver.", en: "It gets dark early in winter.", ipa: "il fɛ nɥi to ɑ̃n‿ivɛʁ", tags: [], drills: ["sentence","review"], version: 1,
  },
  {
    id: "fr.a1.meteo.261", kind: "sentence", level: "a1", theme: "meteo", fr: "Il fait doux aujourd'hui.", en: "It's mild today.", ipa: "il fɛ du oʒuʁdɥi", notes: "\"doux\" ends in a silent x.", tags: [], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.meteo.262", kind: "sentence", level: "a1", theme: "meteo", fr: "Il fait frais ce soir.", en: "It's cool tonight.", ipa: "il fɛ fʁɛ sə swaʁ", notes: "\"frais\" ends in a silent s.", tags: [], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.meteo.268", kind: "sentence", level: "a1", theme: "meteo", fr: "Il y a du brouillard sur la route.", en: "There is fog on the road.", ipa: "il i a dy bʁujaʁ syʁ la ʁut", notes: "\"brouillard\" ends in a silent d.", tags: [], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.meteo.269", kind: "sentence", level: "a1", theme: "meteo", fr: "Il y a de l'orage cette nuit.", en: "There is a storm tonight.", ipa: "il i a də lɔʁaʒ sɛt nɥi", notes: "elision \"de l'orage\", never write \"de le orage\".", tags: [], drills: ["dictation"], version: 1,
  },
  // ── mots-de-liaison ──
  {
    id: "fr.a1.mots-de-liaison.007", kind: "sentence", level: "a1", theme: "mots-de-liaison", fr: "Il pleut, en plus il fait du vent.", en: "It's raining, plus it's windy.", ipa: "il plø ɑ̃ plys il fɛ dy vɑ̃", notes: "\"En plus\" s'écrit en deux mots.", tags: ["orthographe"], drills: ["dictation"], version: 1,
  },
  // ── mots-essentiels ──
  {
    id: "fr.a1.mots-essentiels.045", kind: "sentence", level: "a1", theme: "mots-essentiels", fr: "Le café est chaud et le thé est froid.", en: "The coffee is hot and the tea is cold.", ipa: "lə ka.fe ɛ ʃo e lə te ɛ fʁwa", notes: "\"Est\" appears twice, once for each subject.", tags: ["homophone"], drills: ["dictation"], version: 1,
  },
  // ── quebec-et-francophonie ──
  {
    id: "fr.a1.quebec-et-francophonie.088", kind: "sentence", level: "a1", theme: "quebec-et-francophonie", fr: "Il neige beaucoup en hiver à Québec.", en: "It snows a lot in winter in Quebec.", ipa: "il nɛʒ bo.ku ɑ̃.n‿i.vɛʁ a ke.bɛk", tags: [], drills: ["sentence","review"], version: 1,
  },
  // ── questions ──
  {
    id: "fr.a1.questions.108", kind: "sentence", level: "a1", theme: "questions", fr: "Quel temps fait-il aujourd'hui ?", en: "What is the weather like today?", ipa: "kɛl tɑ̃ fɛ.til o.ʒuʁ.dɥi", tags: ["accord-genre"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.questions.115", kind: "sentence", level: "a1", theme: "questions", fr: "Fait-il beau à Paris en ce moment ?", en: "Is the weather nice in Paris right now?", ipa: "fɛ.til bo a pa.ʁi ɑ̃ sə mɔ.mɑ̃", notes: "Leave a space before the question mark.", tags: ["ponctuation"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.questions.116", kind: "sentence", level: "a1", theme: "questions", fr: "Est-ce qu'il y a du vent aujourd'hui ?", en: "Is it windy today?", ipa: "ɛs kil ja dy vɑ̃ o.ʒuʁ.dɥi", tags: ["elision"], drills: ["dictation"], version: 1,
  },
  // ── rp-meteo-nature ──
  {
    id: "fr.a1.rp-meteo-nature.005", kind: "sentence", level: "a1", theme: "rp-meteo-nature", fr: "Il fait beau et il y a du soleil.", en: "It's nice out and it's sunny.", ipa: "il fɛ bo e i.li.a dy sɔ.lɛj", tags: ["expression"], drills: ["dictation","sentence"], version: 1,
  },
  {
    id: "fr.a1.rp-meteo-nature.006", kind: "sentence", level: "a1", theme: "rp-meteo-nature", fr: "Il fait vingt-cinq degrés.", en: "It's twenty-five degrees.", ipa: "il fɛ vɛ̃t.sɛ̃k də.gʁe", tags: ["expression"], drills: ["dictation","sentence"], version: 1,
  },
  {
    id: "fr.a1.rp-meteo-nature.078", kind: "sentence", level: "a1", theme: "rp-meteo-nature", fr: "Il fait du brouillard ce matin.", en: "It's foggy this morning.", ipa: "il fɛ dy bʁu.jaʁ sə ma.tɛ̃", tags: [], drills: ["sentence","review"], version: 1,
  },
  {
    id: "fr.a1.rp-meteo-nature.091", kind: "sentence", level: "a1", theme: "rp-meteo-nature", fr: "Le vent est froid.", en: "The wind is cold.", ipa: "lə vɑ̃ ɛ fʁwa", notes: "\"froid\" se termine par un d muet.", tags: [], drills: ["dictation"], version: 1,
  },
  // ── temps-et-frequence ──
  {
    id: "fr.a1.temps-et-frequence.032", kind: "sentence", level: "a1", theme: "temps-et-frequence", fr: "Il pleut souvent en automne.", en: "It often rains in autumn.", ipa: "il plø su.vɑ̃ ɑ̃.n‿o.tɔn", notes: "“souvent” ends in a silent “t”, not pronounced as in “vent”.", tags: ["silent-letter"], drills: ["dictation"], version: 1,
  },
  // ── presentation-personnelle ──
  {
    id: "fr.a2.presentation-personnelle.087", kind: "sentence", level: "a2", theme: "presentation-personnelle", fr: "Il fait du sport tous les jours.", en: "He exercises every day.", tags: [], drills: ["sentence"], version: 1,
  },
  // ── jours-et-mois ──
  {
    id: "fr.sons.jours-et-mois.120", kind: "phrase", level: "sons", theme: "jours-et-mois", fr: "en été", en: "in summer", ipa: "/ɑ̃.n‿e.te/", respell: "ahn-nay-TAY", notes: "Liaison links en and été, sounding like one smooth phrase.", tags: ["season"], drills: ["flashcard","voiceflash"], version: 1,
  },
  {
    id: "fr.sons.jours-et-mois.121", kind: "phrase", level: "sons", theme: "jours-et-mois", fr: "en hiver", en: "in winter", ipa: "/ɑ̃.n‿i.vɛʁ/", respell: "ahn-nee-VEHR", notes: "Because hiver starts with a mute h, en liaises into it.", tags: ["season"], drills: ["flashcard","voiceflash"], version: 1,
  },
  {
    id: "fr.sons.jours-et-mois.122", kind: "phrase", level: "sons", theme: "jours-et-mois", fr: "au printemps", en: "in spring", ipa: "/o pʁɛ̃.tɑ̃/", respell: "oh prahn-TAHN", notes: "Spring is the only season that takes au instead of en.", tags: ["season"], drills: ["flashcard","voiceflash"], version: 1,
  },
  {
    id: "fr.sons.jours-et-mois.123", kind: "phrase", level: "sons", theme: "jours-et-mois", fr: "en automne", en: "in autumn, in fall", ipa: "/ɑ̃.n‿o.tɔn/", respell: "ahn-noh-TUN", notes: "Liaison connects en to the vowel-initial automne.", tags: ["season"], drills: ["flashcard","voiceflash"], version: 1,
  },
];

/* ─── Reused: already in the seed, named by this lesson ────────────────────
 *
 * Thirteen rows the lesson shows and neither authors nor imports, because they
 * are in seed.json already on somebody else's account. Recorded with their text
 * so the batch can verify against the DATABASE and the merge against the SEED:
 * an id that resolves to a different sentence than the one this lesson names is
 * worse than one that does not resolve at all.
 *
 * The three most important rows in the lesson are all in here, which is the
 * happiest fact of this build: the three-frame contrast and the personal-il
 * pair were already shipped and already visible to a learner. */
export type ReusedRow = { id: string; fr: string; en: string; why: string };

export const REUSED: ReusedRow[] = [
  { id: 'fr.a1.meteo.029', fr: 'il fait chaud', en: 'it is hot', why: 'The weather column of the three-frame contrast. The one meteo row already in the seed cut.' },
  { id: 'fr.a1.famille.228', fr: "J'ai chaud.", en: 'I am hot.', why: 'The person column, on the same adjective. Two words, and the whole difference is the verb.' },
  { id: 'fr.sons.voyelles.414', fr: 'Le café est chaud.', en: 'The coffee is hot.', why: 'The thing column, on the same adjective. The three together are the single most valuable screen in the lesson.' },
  { id: 'fr.sons.nasales.018', fr: 'Il fait du vent dehors.', en: 'It is windy outside.', why: 'The weather half of the personal-il pair, and it already ships the correct nasal respelling EEL FEH DÜ VAHⁿ.' },
  { id: 'fr.a1.sports-et-loisirs.156', fr: 'Il fait du yoga tous les matins.', en: 'He does yoga every morning.', why: 'The person half of the same pair. Four words of identical shape and nothing else in common.' },
  { id: 'fr.a1.sports-et-loisirs.169', fr: 'Il fait de la pêche près de la rivière.', en: 'He goes fishing near the river.', why: 'The de la version of the personal reading, so the pair is not a single lucky example.' },
  { id: 'fr.a1.emotions.017', fr: 'avoir froid', en: 'to be cold', why: `The fixed expression ${unitRef('a1.07')} taught. Named here so the bridge is to a card the learner has already rated.` },
  { id: 'fr.a1.emotions.018', fr: 'avoir chaud', en: 'to be hot', why: `The other half of ${unitRef('a1.07')} fixed expressions, and the headword behind the person column.` },
  { id: 'fr.a1.famille.230', fr: 'Tu as froid ?', en: 'Are you cold?', why: 'The person frame in the second person, which is the form a learner is asked rather than says.' },
  { id: 'fr.a1.corps.107', fr: "J'ai froid aux pieds.", en: 'My feet are cold.', why: 'The person frame with a body part, showing it is about the person and not about the room.' },
  { id: 'fr.a1.emotions.091', fr: "Elle a chaud dans la salle d'attente.", en: 'She is hot in the waiting room.', why: 'A person who is hot in a room, which is the sentence most likely to be built with être by mistake.' },
  { id: 'fr.a1.emotions.096', fr: 'Il a froid dans le bureau.', en: 'He is cold in the office.', why: 'The il that IS a man, in the avoir frame. It sits against il fait froid and only the verb moves.' },
  { id: 'fr.a1.nombres.061', fr: 'Il fait moins cinq degrés ce matin.', en: 'It is minus five degrees this morning.', why: `The weather frame carrying a number, which is where ${unitRef('a1.02')} and ${unitRef('a1.27')} pay off inside this lesson.` },
];

/* ─── Lookups ──────────────────────────────────────────────────────────────*/

const BY_ID = new Map<string, { fr: string; en: string }>([
  ...IMPORTED.map((i) => [i.id, { fr: i.fr, en: i.en }] as const),
  ...REUSED.map((r) => [r.id, { fr: r.fr, en: r.en }] as const),
]);

/** The French of a row this lesson names. Throws rather than returning
 *  undefined, for the same reason `sub` does. */
export function frOf(id: string): string {
  const row = BY_ID.get(id);
  if (!row) throw new Error(`${unitRef('a1.10')}: no corpus row for "${id}". Add it to IMPORTED or REUSED.`);
  return row.fr;
}

/** The English gloss of a row this lesson names. */
export function enOf(id: string): string {
  const row = BY_ID.get(id);
  if (!row) throw new Error(`${unitRef('a1.10')}: no corpus row for "${id}". Add it to IMPORTED or REUSED.`);
  return row.en;
}

/** Every id this lesson names and did not author. All of them, because this
 *  lesson authors nothing. */
export const IMPORTED_IDS = IMPORTED.map((i) => i.id);
export const REUSED_IDS = REUSED.map((r) => r.id);
export const BORROWED_IDS = [...IMPORTED_IDS, ...REUSED_IDS];

/** Which of the four seasons a string names, accent-aware and never built into
 *  a regex from the needle. Used by the guards to assert every season is in a
 *  real sentence rather than only on a card. */
export function seasonsIn(s: string): Season[] {
  const low = s.toLowerCase();
  return THE_FOUR.filter((season) => {
    let from = 0;
    for (;;) {
      const i = low.indexOf(season, from);
      if (i < 0) return false;
      const before = i === 0 ? ' ' : low[i - 1];
      const after = low[i + season.length] ?? ' ';
      if (!/[a-zà-ÿ]/i.test(before) && !/[a-zà-ÿ]/i.test(after)) return true;
      from = i + 1;
    }
  });
}

/** The five forms of `faire` this lesson must never leak. `faire` is taught in
 *  a2.12 and the learner arriving here has être and avoir and nothing else, so
 *  impersonal `il fait` is taught as one frozen block and never conjugated.
 *  Named here so the batch, the merge and the test all check the same list. */
export const FAIRE_FORMS = ['je fais', 'tu fais', 'nous faisons', 'vous faites', 'ils font', 'elles font'];

/** Nothing that belongs to a neighbour. Months and days are a1.09 and a1.08;
 *  the clock is a1.12, and `il fait nuit` is a weather phrase rather than an
 *  hour, which is why `nuit` is not on this list. */
export const MONTH_WORDS = [
  'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
  'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre',
];
export const DAY_WORDS = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
export const CLOCK_WORDS = ['heure', 'heures', 'midi', 'minuit', 'minute', 'minutes'];
