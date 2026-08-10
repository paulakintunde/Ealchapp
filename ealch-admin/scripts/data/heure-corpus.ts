// The a1.12 corpus: what this lesson authors, what it imports, and the two
// shipped respellings it repairs.
//
// THIS FILE IS THE SINGLE SOURCE OF TRUTH for the 16 authored entries, for the
// 60 imported rows, and for every respelling a1.12 puts on a screen. The lesson
// body (heure-lesson.ts) reads `fr`, `ipa`, `respell` and `en` FROM HERE and
// never restates them, for the same reason jours-corpus.ts and
// elision-corpus.ts do: before that convention one word's transcription was
// typed by hand in five sections and the five copies were free to drift.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE BRIEF'S CORPUS SECTION IS MEASURED AGAINST seed.json, NOT THE CORPUS
// ══════════════════════════════════════════════════════════════════════════
//
// A1-12-TELLING-TIME-PROMPT.md is built on one measurement, stated as "the
// corpus fact that should decide your lesson plan":
//
//     à + [number] heures      74 sentences
//     il est + [number] heures  2 sentences
//
// and concludes from it that "the telling half is yours to author almost from
// nothing" and that "you are authoring the entire second half of the clock
// from scratch."
//
// Both conclusions are false, and for the reason a1.08 already documented: the
// numbers are the SEED's. seed.json holds 7,219 items; Postgres holds 47,363.
// Re-measured against the database on 2026-08-06, each count taken twice by
// two methods that share no implementation (a tokenise-and-compare pass with
// no regex ever built from a string, then a normalised-whole-string lookup):
//
//                            brief   Postgres
//     à + <number> heures       74       181
//     il est + <number> heures   2        83
//     et quart                   1        17
//     et demie                   4        27
//     moins le quart             0        15
//     quelle heure               1        48
//     neuf heures               12        54
//
// So the 37-to-1 split the brief calls "the first thing to internalise" is
// 2.2 to 1, and « moins le quart », which the brief says "does not appear
// anywhere in the corpus", has fifteen rows including a complete run of hours
// at fr.a2.heure-et-date.004 through .013.
//
// The reason the brief could not see them is the theme decision below.
//
// ── The theme: `heure-et-date`, which the brief never considers ────────────
//
// The unit declares `themes: ["temps"]`. `temps` holds 0 items, which is the
// one claim in the brief's theme section that is true. From there it offers
// three options: author into `routines` (recommended), create `heure`, or
// clear the binding.
//
// All three are answers to a question that only looks open from the seed.
// **`heure-et-date` already exists and holds 455 published rows**, 86 of them
// in the a1 band, and it is a purpose-built clock-and-calendar deck: the hours
// as full sentences, a complete `et quart` run, a complete `et demie` run, the
// `moins le quart` run, the two asking forms, `du matin` and `du soir`, and the
// twenty-four-hour times. It is the theme this lesson is about, it needed no
// creating, and it is invisible from the seed for exactly the reason
// `jours-et-mois` was invisible to a1.08: seed-cut.config.ts bundles by theme
// and this one is not on the list.
//
// `routines`, the brief's recommendation, is the wrong home and would have been
// a costly mistake. It holds `midi`, `minuit`, `le matin`, `le soir`, `tôt`,
// `tard` and `le réveil`, which are TIMES OF DAY rather than clock times, and
// a1.25 "Daily Routine" owns it outright. Putting the clock there would have
// put a1.12's hours in a theme called routines and left `heure-et-date`
// unbound while a lesson named L'heure pointed somewhere else.
//
// The brief also asks for the real `routines` id maximum "confirmed against
// Postgres" because "the seed's highest is fr.b1.routines.095". Measured: the
// a1 band runs to fr.a1.routines.184, so the seed understates it by 89. That
// figure is recorded here for whoever builds a1.25 and is not used by this
// lesson, which numbers into `heure-et-date` instead. Its a1 band ends at
// fr.a1.heure-et-date.100 with no gaps above it and no unpublished rows
// anywhere in the band, so this lesson starts at .101 and never renumbers.
//
// ── What this lesson actually authors, and why ─────────────────────────────
//
// Sixteen rows, and not one of them is a sentence telling the time. The corpus
// has those in quantity. What it does not have is either of these:
//
//   THE TWELVE HOURS AS HEADWORDS. `une heure` through `douze heures` are ALL
//   absent as words or phrases: every hour exists inside a sentence and not one
//   exists as a card. That matters more here than it would in another lesson,
//   because `heure` opens on a mute h and a vowel, so the hour name and the
//   noun fuse into one liaison and THE LIAISON IS THE PRONUNCIATION CONTENT OF
//   THIS LESSON. A learner drilling « Il est neuf heures. » is drilling a
//   sentence; a learner drilling « neuf heures » is drilling /nœ.vœʁ/, which is
//   the exceptional one. Twelve rows, each carrying `voiceflash`, are what let
//   the speak mission score the liaison rather than the sentence around it.
//
//   THE REGISTER PAIR. The corpus is rich in both clock systems and never once
//   shows the SAME MOMENT in both. « Le film commence à vingt heures trente »
//   and « Il est huit heures et demie » are two sentences about two different
//   events, and putting them side by side teaches nothing because everything
//   else on the line moved too. Four rows fix that: each is the conversational
//   half of a twenty-four-hour sentence that already ships, same subject, same
//   verb, same moment, and the only thing that changes is the clock. That is
//   the a1.08 minimal-pair method pointed at a register instead of an article,
//   and it is the one thing in this lesson that could not be assembled from
//   what already exists.
//
// ── Respelling: UHR, and why ───────────────────────────────────────────────
//
// The brief is right that `heure` ships with more than one respelling and asks
// for one to be picked and justified. Counted over the published corpus, the
// /œʁ/ of `heure` is written:
//
//     UHR family   38 rows   UHR · LUHR · TUHR · ZUHR · RUHR · SUHR · DUHR · YUHR
//     EUR family    9 rows   EUR · LEUR · TEUR
//
// UHR wins on three counts and they all point the same way. It is four times
// commoner. It is what `fr.sons.jours-et-mois.047` calls `l'heure`, which is
// the flashcard a learner meets this word on. And it is the convention used
// throughout `fr.sons.jours-et-mois.047-083`, which is the nineteen-phrase
// time block this lesson reuses wholesale: `AH LUHR`, `VEHR TRWAH ZUHR`,
// `EEL EH DUH ZUHR`. Choosing EUR would have put every card this lesson
// authors in disagreement with every card it borrows.
//
// This overrides the general house line that /ø œ/ is written EU, and it does
// so for one word. That is the trade the brief asks for: a fourth spelling was
// the thing to avoid, and consistency inside the lesson beats consistency with
// a convention that the word's own shipped cards already do not follow.
//
// ── No U+203F, and how the link is shown instead ───────────────────────────
//
// The tie character renders as a low underscore on a Pixel 6. This lesson
// authors none, and it did not have to invent a way round it: the house
// already has one. `fr.sons.jours-et-mois.062` writes « il est deux heures »
// as `EEL EH DUH ZUHR` and `.073` writes « vers trois heures » as
// `VEHR TRWAH ZUHR`. The liaison consonant simply MOVES ONTO THE FRONT of the
// following syllable. That is what a liaison is, it needs no diacritic, and it
// is what the twelve hours below do: `deu-ZUHR`, `neu-VUHR`, `üee-TUHR`.
//
// The blast radius of the defect is reported rather than fixed, and the brief's
// figure is both too small and pointed at the wrong field. Measured:
//
//     items whose RESPELL carries the tie      255 in Postgres, 328 in the seed
//     items whose IPA carries the tie        7,438 in Postgres, 949 in the seed
//     either field, and about an hour           306 in Postgres,  62 in the seed
//
// So it is 7,438 rows and not 328, it is overwhelmingly an IPA problem rather
// than a respelling one, and the share that is "exactly the number-plus-heures
// liaisons this lesson teaches" is 4%, not "a large share". Eight of the 75
// rows this lesson borrows carry it, all eight in `ipa` and none in `respell`.
// This lesson displays no borrowed row's IPA, so none of the eight reaches a
// screen through a1.12. See the report.
//
// ── The two respellings this lesson repairs ────────────────────────────────
//
// `moins le quart` and `moins dix` are the two phrase cards act 3 is built on
// and both close a nasal vowel with a plain N. `moins` is /mwɛ̃/; the shipped
// `MWUHN` is wrong twice over, once on the vowel (UH is the house form for /œ/,
// not /ɛ̃/) and once on the notation. Repaired to `MWEHⁿ`, which is the form
// `duh-MEHⁿ` (demain, /də.mɛ̃/) already uses for the same vowel.
//
// Display-only, so the repair cannot break a drill, a score or an id, and the
// batch refuses to write if the stored value is no longer the broken one it
// expects. Same contract as a1.08's four.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

/* ─── What the screens display ─────────────────────────────────────────────
 *
 * Every French unit a1.12 puts on a card, with the respelling this lesson
 * stands behind. Keyed by the French form, because several of these are
 * display strings rather than corpus rows: `il est huit` exists only as the
 * wrong half of a contrast that lives on one card.                          */

export type Display = { fr: string; ipa: string; respell: string; en: string };

const D = (fr: string, ipa: string, res: string, en: string): Display =>
  ({ fr, ipa: `/${ipa}/`, respell: `[${res}]`, en });

/** The twelve hours, in order. Read down the respell column and the whole
 *  pronunciation half of this lesson is visible at once: the hour never ends
 *  where the spelling says it does, because its last consonant has moved onto
 *  the front of UHR. */
export const RESPELL: Record<string, Display> = {
  'une heure': D('une heure', 'y.nœʁ', 'ü-NUHR', 'one o\'clock'),
  'deux heures': D('deux heures', 'dø.zœʁ', 'deu-ZUHR', 'two o\'clock'),
  'trois heures': D('trois heures', 'tʁwa.zœʁ', 'trwah-ZUHR', 'three o\'clock'),
  'quatre heures': D('quatre heures', 'ka.tʁœʁ', 'ka-TRUHR', 'four o\'clock'),
  'cinq heures': D('cinq heures', 'sɛ̃.kœʁ', 'sehⁿ-KUHR', 'five o\'clock'),
  'six heures': D('six heures', 'si.zœʁ', 'see-ZUHR', 'six o\'clock'),
  'sept heures': D('sept heures', 'sɛ.tœʁ', 'seh-TUHR', 'seven o\'clock'),
  'huit heures': D('huit heures', 'ɥi.tœʁ', 'üee-TUHR', 'eight o\'clock'),
  'neuf heures': D('neuf heures', 'nœ.vœʁ', 'neu-VUHR', 'nine o\'clock'),
  'dix heures': D('dix heures', 'di.zœʁ', 'dee-ZUHR', 'ten o\'clock'),
  'onze heures': D('onze heures', 'ɔ̃.zœʁ', 'ohⁿ-ZUHR', 'eleven o\'clock'),
  'douze heures': D('douze heures', 'du.zœʁ', 'doo-ZUHR', 'twelve hours'),

  // The two that take no `heures` and no article. They are the exception to the
  // rule the lesson has just spent an act on, so they are respelled beside it.
  midi: D('midi', 'mi.di', 'mee-DEE', 'noon'),
  minuit: D('minuit', 'mi.nɥi', 'mee-NWEE', 'midnight'),

  // The frame the hours sit in.
  "l'heure": D("l'heure", 'lœʁ', 'LUHR', 'the hour, the time'),
  'et quart': D('et quart', 'e kaʁ', 'ay KAR', 'quarter past'),
  'et demie': D('et demie', 'e də.mi', 'ay duh-MEE', 'half past'),
  'moins le quart': D('moins le quart', 'mwɛ̃ lə kaʁ', 'MWEHⁿ luh KAR', 'quarter to'),
  'moins dix': D('moins dix', 'mwɛ̃ dis', 'MWEHⁿ DEES', 'ten to'),
  'midi et demi': D('midi et demi', 'mi.di e də.mi', 'mee-DEE ay duh-MEE', 'half past noon'),
  'minuit et demi': D('minuit et demi', 'mi.nɥi e də.mi', 'mee-NWEE ay duh-MEE', 'half past midnight'),

  // The two questions, one frozen and one transparent.
  'quelle heure est-il': D('quelle heure est-il', 'kɛ.lœʁ ɛ.til', 'keh-LUHR eh-TEEL', 'what time is it'),
  "vous avez l'heure": D("vous avez l'heure", 'vu.za.ve lœʁ', 'voo-za-VAY LUHR', 'do you have the time'),

  // Booking, and the two words that judge you for arriving.
  'à trois heures': D('à trois heures', 'a tʁwa.zœʁ', 'ah trwah-ZUHR', 'at three o\'clock'),
  'vers trois heures': D('vers trois heures', 'vɛʁ tʁwa.zœʁ', 'vehr trwah-ZUHR', 'around three o\'clock'),
  "à l'heure": D("à l'heure", 'a lœʁ', 'ah LUHR', 'on time'),
  'en retard': D('en retard', 'ɑ̃ ʁə.taʁ', 'ahⁿ ruh-TAR', 'late'),
  pile: D('pile', 'pil', 'PEEL', 'on the dot'),
  'le rendez-vous': D('le rendez-vous', 'lə ʁɑ̃.de.vu', 'luh rahⁿ-day-VOO', 'the appointment'),

  // The official clock. Said as a plain number, and that is the whole of it.
  'vingt heures': D('vingt heures', 'vɛ̃.tœʁ', 'vehⁿ-TUHR', 'twenty hundred'),
  'vingt heures trente': D('vingt heures trente', 'vɛ̃.tœʁ tʁɑ̃t', 'vehⁿ-TUHR TRAHⁿT', 'twenty thirty'),
  'quatorze heures': D('quatorze heures', 'ka.tɔʁ.zœʁ', 'ka-tor-ZUHR', 'fourteen hundred'),
  'seize heures dix': D('seize heures dix', 'sɛ.zœʁ dis', 'seh-ZUHR DEES', 'sixteen ten'),

  // The scene's pair. Four words apart, one word different, and the difference
  // is the whole reframe.
  'il est midi': D('il est midi', 'i.lɛ mi.di', 'eel eh mee-DEE', 'it is noon'),
  'il est à midi': D('il est à midi', 'i.lɛ.ta mi.di', 'eel eh tah mee-DEE', 'it is at noon'),

  // The errors. Authored as display strings so a card can show the wrong shape
  // beside the right one without a corpus row existing for a non-sentence.
  'il est huit': D('il est huit', 'i.lɛ ɥit', 'eel eh ÜEET', 'it is eight, unfinished'),
  'moins quart': D('moins quart', 'mwɛ̃ kaʁ', 'MWEHⁿ KAR', 'quarter to, missing its article'),
  'vingt heures et demie': D('vingt heures et demie', 'vɛ̃.tœʁ e də.mi', 'vehⁿ-TUHR ay duh-MEE', 'the two clocks, mixed'),
  'midi et demie': D('midi et demie', 'mi.di e də.mi', 'mee-DEE ay duh-MEE', 'half past noon, wrongly feminine'),
  // No tie character, here least of all: this is the card that shows the error,
  // and a respelling that renders as an underscore on the one screen a learner
  // is asked to look at closely would be the defect landing on the teaching.
  'il est à huit heures': D('il est à huit heures', 'i.lɛ.ta ɥi.tœʁ', 'eel eh ah üee-TUHR', 'telling and booking, welded'),
};

/** The bracketed respelling of a French form this lesson displays. Throws
 *  rather than returning undefined: a card silently missing its transcription
 *  is the failure this file exists to stop, and it looks identical to a card
 *  that never wanted one. */
export function sub(fr: string): string {
  const d = RESPELL[fr];
  if (!d) throw new Error(`a1.12: no respelling authored for "${fr}". Add it to RESPELL.`);
  return d.respell;
}

/** The IPA of a French form this lesson displays, in slashes. */
export function ipaOf(fr: string): string {
  const d = RESPELL[fr];
  if (!d) throw new Error(`a1.12: no IPA authored for "${fr}". Add it to RESPELL.`);
  return d.ipa;
}

/** The English gloss of a display string this lesson shows. */
export function glossOf(fr: string): string {
  const d = RESPELL[fr];
  if (!d) throw new Error(`a1.12: no gloss authored for "${fr}". Add it to RESPELL.`);
  return d.en;
}

/** The twelve, in clock order. The lesson's act 2 is this list and nothing
 *  else, and the test asserts every one of them is taught by name. */
export const THE_TWELVE = [
  'une heure', 'deux heures', 'trois heures', 'quatre heures', 'cinq heures', 'six heures',
  'sept heures', 'huit heures', 'neuf heures', 'dix heures', 'onze heures', 'douze heures',
] as const;

/** The four quarter-hour phrases, and the one of them that carries an article.
 *  Kept as data rather than prose so the test can assert the asymmetry rather
 *  than reading it out of a sentence. */
export const QUARTER_PHRASES = ['et quart', 'et demie', 'moins le quart', 'moins dix'] as const;
export const QUARTER_WITH_ARTICLE = 'moins le quart';

/** Hours that belong to the official clock only. Nothing in this lesson may
 *  bend one of these with `et quart`, `et demie` or `moins`: that hybrid is the
 *  error act 4 exists to prevent, and authoring one would teach it. */
export const OFFICIAL_HOURS = [
  'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf',
  'vingt', 'vingt et une', 'vingt-deux', 'vingt-trois',
] as const;

/* ─── The two shipped respellings this batch repairs ───────────────────────
 *
 * Display-only, in the phrase block this lesson reuses wholesale, and both are
 * cards act 3 is built on. The batch prints each one and refuses to write if
 * the stored value is no longer the broken one it expects, because two people
 * disagreeing about a transcription is a decision rather than a merge.        */

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

export const RESPELL_REPAIRS: RespellRepair[] = [
  {
    id: 'fr.sons.jours-et-mois.065', fr: 'moins le quart',
    from: 'MWUHN LUH KAR', to: unbracket(RESPELL['moins le quart'].respell),
    why: 'a plain N closes the nasal /ɛ̃/, and UH is the house form for /œ/ rather than for /ɛ̃/. Both are fixed at once: EHⁿ is what duh-MEHⁿ (demain) already uses for this vowel.',
  },
  {
    id: 'fr.sons.jours-et-mois.066', fr: 'moins dix',
    from: 'MWUHN DEES', to: unbracket(RESPELL['moins dix'].respell),
    why: 'the same word, the same two errors, in the card immediately beside it. Repairing one and not the other would leave moins spelled two ways inside one deck.',
  },
];

/* ─── The authored rows ────────────────────────────────────────────────────
 *
 * Sequence numbers continue `fr.a1.heure-et-date`, whose highest published seq
 * is 100 and which has no unpublished rows anywhere in its a1 band. Never
 * renumbered: ids are the SRS key and every attempt ever logged hangs off them.
 *
 * The four sentence rows are built on être plus a third-person verb the corpus
 * already carries in the very sentence being paired, so no row asks the learner
 * to conjugate anything. Three of them carry a verb no A1 unit teaches
 * (`commence`, `part`, `ferme`) and are marked `chunk`: they are READ, shown
 * beside their official twin, and never selected for production. That is the
 * line a1.08 drew and this lesson keeps it. The fourth is built on être, which
 * is a1.06 and shipped, so it is producible and is the one the scenario uses. */

export type HeureItem = Omit<Item, 'drills'> & {
  /** Which clock this row is on. `both` is a row that names neither. */
  clock: 'spoken' | 'official' | 'both';
  /** The other half of the register pair. Reciprocal. */
  pairWith?: string;
  /** Carries a verb outside être and avoir, shown as a fixed chunk and never
   *  drilled for production. */
  chunk?: boolean;
  drills: Item['drills'];
};

const VF: Item['drills'] = ['flashcard', 'voiceflash'];
const SV: Item['drills'] = ['sentence', 'flashcard', 'voiceflash', 'review'];

/** The twelve hours as headwords. Every one of them is a liaison and that is
 *  why they are here: the corpus has each hour inside a sentence and not one of
 *  them as a card, so nothing in the app could drill the join.
 *
 *  `cardType: 'vocab'` and both flashcard drills, because flashhub-coverage
 *  fails the whole build on an a1 vocab row missing either.                   */
export const HOURS: HeureItem[] = THE_TWELVE.map((fr, i) => {
  const d = RESPELL[fr];
  const notes: Record<string, string> = {
    'une heure': 'The only singular hour. Une and heure run together into one sound, so nothing marks where the number ends.',
    'deux heures': 'The x of deux is silent on its own and says z here. This and douze heures are the pair the ear actually fails on.',
    'trois heures': 'The silent s of trois says z before the vowel, exactly as the x of deux does.',
    'quatre heures': 'No new consonant appears. The r of quatre simply carries straight on into the vowel.',
    'cinq heures': 'The q of cinq is sounded here. The vowel before it stays nasal and never becomes a separate n.',
    'six heures': 'The x says z, the same join as deux and trois. Six alone ends in an s sound and here it does not.',
    'sept heures': 'The p of sept is silent always. The t is silent alone and sounded here.',
    'huit heures': 'The t of huit is silent alone and sounded here. Huit opens on a sound English has no letter for.',
    'neuf heures': 'The one genuine exception. The f of neuf becomes a v, and it does that before heures and before ans and nowhere else in the language.',
    'dix heures': 'The x says z. Dix alone ends in an s sound, so the consonant both appears and changes.',
    'onze heures': 'The z is already there in the spelling and simply carries over. The o stays nasal.',
    'douze heures': 'Said for a length of time and not for a time of day: the twelfth hour on a clock is midi or minuit.',
  };
  return {
    id: `fr.a1.heure-et-date.${String(101 + i).padStart(3, '0')}`,
    kind: 'phrase', level: 'a1', theme: 'heure-et-date',
    fr, en: d.en, ipa: d.ipa, respell: unbracket(d.respell),
    notes: notes[fr],
    tags: ['heure', 'liaison', 'horloge'],
    drills: VF, version: 1, cardType: 'vocab',
    clock: fr === 'douze heures' ? 'both' : 'spoken',
  };
});

/** The four register pairs. Each is the conversational half of a
 *  twenty-four-hour sentence that already ships, and the ONLY thing that
 *  changes across a pair is the clock. `pairWith` names the shipped twin and is
 *  checked in both directions by the batch, because a pair that is half deleted
 *  teaches the opposite of what it was written for: one sentence in one
 *  register with nothing beside it reads as the only way to say it. */
export const REGISTER_PAIRS: HeureItem[] = [
  {
    id: 'fr.a1.heure-et-date.113', kind: 'sentence', level: 'a1', theme: 'heure-et-date',
    fr: 'Le film commence à huit heures et demie.',
    en: 'The film starts at half past eight.',
    ipa: '/lə film kɔ.mɑ̃s a ɥi.tœʁ e də.mi/',
    notes: 'The same showing as the listing that reads vingt heures trente. One clock is what you say and the other is what is printed.',
    tags: ['heure', 'horloge', 'registre'],
    drills: SV, version: 1,
    clock: 'spoken', pairWith: 'fr.a1.nombres.057', chunk: true,
  },
  {
    id: 'fr.a1.heure-et-date.114', kind: 'sentence', level: 'a1', theme: 'heure-et-date',
    fr: 'Le train part à quatre heures dix.',
    en: 'The train leaves at four ten.',
    ipa: '/lə tʁɛ̃ paʁ a ka.tʁœʁ dis/',
    notes: 'The same train as the board that reads seize heures dix. Past twelve the two clocks stop agreeing on the number.',
    tags: ['heure', 'horloge', 'registre'],
    drills: SV, version: 1,
    clock: 'spoken', pairWith: 'fr.a1.nombres.047', chunk: true,
  },
  {
    id: 'fr.a1.heure-et-date.115', kind: 'sentence', level: 'a1', theme: 'heure-et-date',
    fr: 'Le magasin ferme à six heures du soir.',
    en: 'The shop closes at six in the evening.',
    ipa: '/lə ma.ɡa.zɛ̃ fɛʁm a si.zœʁ dy swaʁ/',
    notes: 'The spoken clock has only twelve hours, so it says which half of the day it means. The printed one says dix-huit heures and does not need to.',
    tags: ['heure', 'horloge', 'registre'],
    drills: SV, version: 1,
    clock: 'spoken', pairWith: 'fr.a1.temps-et-frequence.064', chunk: true,
  },
  {
    id: 'fr.a1.heure-et-date.116', kind: 'sentence', level: 'a1', theme: 'heure-et-date',
    fr: "Le rendez-vous est à deux heures de l'après-midi.",
    en: 'The appointment is at two in the afternoon.',
    ipa: '/lə ʁɑ̃.de.vu ɛ.ta dø.zœʁ də la.pʁɛ.mi.di/',
    notes: 'The one of the four built on être, so it is the pair a learner can be asked to produce. The card it faces reads quatorze heures.',
    tags: ['heure', 'horloge', 'registre', 'rendez-vous'],
    drills: SV, version: 1,
    clock: 'spoken', pairWith: 'fr.a1.heure-et-date.091',
  },
];

/** Everything this lesson writes to content_items. */
export const AUTHORED: HeureItem[] = [...HOURS, ...REGISTER_PAIRS];

/** The pairs, as (spoken, official) tuples. Exported so the two-clock table
 *  and the test read the same list rather than two copies of it. */
export const CLOCK_PAIRS: [string, string][] = REGISTER_PAIRS.map((r) => [r.id, r.pairWith!]);

/** Rows that carry a verb no A1 unit conjugates. Shown and read, never asked
 *  for: no speak mission, no dictée and no production drill may name one. */
export const CHUNK_IDS: string[] = AUTHORED.filter((r) => r.chunk).map((r) => r.id);

/** The twelve hour headword ids, in clock order. */
export const HOUR_IDS: string[] = HOURS.map((h) => h.id);

/** Strip the authoring-only fields before an Item goes to the database or the
 *  seed. `clock`, `pairWith` and `chunk` are facts about how this lesson uses a
 *  row and are not part of the corpus schema. */
export function toItem(w: HeureItem): Item {
  const { clock, pairWith, chunk, ...item } = w;
  void clock; void pairWith; void chunk;
  return item as Item;
}

/* ─── The imported manifest: a RECORDED READ of Postgres ───────────────────
 *
 * `heure-et-date` and `temps-et-frequence` hold 0 rows in seed.json and 455 and
 * 310 in the database, because neither is in SEED_CUT.themes. The nineteen-row
 * time block in `jours-et-mois` is missing from the seed too: that theme is in
 * the seed at 119 rows, which is the slice a1.08 pulled in, and the clock
 * phrases were not part of it.
 *
 * So 63 rows this lesson names exist only in Postgres. publish-content.ts pulls
 * in every item a bundled lesson references and would bring them at the next
 * publish, but a publish is not available (see the hazard note in the merge
 * script) and lesson-contract.test.ts resolves `itemIds` against the SEED. With
 * out these the lesson lands with 63 dangling ids that render as empty cards.
 *
 * Recorded field by field, and the batch compares every field against the live
 * database before it writes. A stale manifest would put the seed ahead of the
 * database on rows nobody reviewed.                                           */

export const IMPORTED: Item[] = [
  {
    id: "fr.a1.heure-et-date.001",
    kind: "sentence",
    level: "a1",
    theme: "heure-et-date",
    fr: "Quelle heure est-il, s'il vous plaît ?",
    en: "What time is it, please?",
    tags: ["heure","question"],
    drills: ["flashcard","sentence","review"],
    version: 1,
  },
  {
    id: "fr.a1.heure-et-date.002",
    kind: "sentence",
    level: "a1",
    theme: "heure-et-date",
    fr: "Excusez-moi, quelle heure est-il ?",
    en: "Excuse me, what time is it?",
    tags: ["heure","question"],
    drills: ["flashcard","sentence","roleplay"],
    version: 1,
  },
  {
    id: "fr.a1.heure-et-date.003",
    kind: "sentence",
    level: "a1",
    theme: "heure-et-date",
    fr: "Vous avez l'heure, s'il vous plaît ?",
    en: "Do you have the time, please?",
    tags: ["heure","question"],
    drills: ["flashcard","sentence","roleplay"],
    version: 1,
  },
  {
    id: "fr.a1.heure-et-date.004",
    kind: "sentence",
    level: "a1",
    theme: "heure-et-date",
    fr: "Tu as l'heure ?",
    en: "Do you have the time?",
    tags: ["heure","question"],
    drills: ["flashcard","sentence"],
    version: 1,
  },
  {
    id: "fr.a1.heure-et-date.008",
    kind: "sentence",
    level: "a1",
    theme: "heure-et-date",
    fr: "Il est trois heures.",
    en: "It's three o'clock.",
    tags: ["heure","horloge"],
    drills: ["flashcard","sentence","dictation"],
    version: 1,
  },
  {
    id: "fr.a1.heure-et-date.009",
    kind: "sentence",
    level: "a1",
    theme: "heure-et-date",
    fr: "Il est quatre heures.",
    en: "It's four o'clock.",
    tags: ["heure","horloge"],
    drills: ["flashcard","sentence","dictation"],
    version: 1,
  },
  {
    id: "fr.a1.heure-et-date.010",
    kind: "sentence",
    level: "a1",
    theme: "heure-et-date",
    fr: "Il est cinq heures.",
    en: "It's five o'clock.",
    tags: ["heure","horloge"],
    drills: ["flashcard","sentence","dictation"],
    version: 1,
  },
  {
    id: "fr.a1.heure-et-date.011",
    kind: "sentence",
    level: "a1",
    theme: "heure-et-date",
    fr: "Il est six heures.",
    en: "It's six o'clock.",
    tags: ["heure","horloge"],
    drills: ["flashcard","sentence","dictation"],
    version: 1,
  },
  {
    id: "fr.a1.heure-et-date.012",
    kind: "sentence",
    level: "a1",
    theme: "heure-et-date",
    fr: "Il est sept heures.",
    en: "It's seven o'clock.",
    tags: ["heure","horloge"],
    drills: ["flashcard","sentence","dictation"],
    version: 1,
  },
  {
    id: "fr.a1.heure-et-date.013",
    kind: "sentence",
    level: "a1",
    theme: "heure-et-date",
    fr: "Il est neuf heures.",
    en: "It's nine o'clock.",
    tags: ["heure","horloge"],
    drills: ["flashcard","sentence","dictation"],
    version: 1,
  },
  {
    id: "fr.a1.heure-et-date.014",
    kind: "sentence",
    level: "a1",
    theme: "heure-et-date",
    fr: "Il est dix heures.",
    en: "It's ten o'clock.",
    tags: ["heure","horloge"],
    drills: ["flashcard","sentence","dictation"],
    version: 1,
  },
  {
    id: "fr.a1.heure-et-date.015",
    kind: "sentence",
    level: "a1",
    theme: "heure-et-date",
    fr: "Il est onze heures.",
    en: "It's eleven o'clock.",
    tags: ["heure","horloge"],
    drills: ["flashcard","sentence","dictation"],
    version: 1,
  },
  {
    id: "fr.a1.heure-et-date.024",
    kind: "sentence",
    level: "a1",
    theme: "heure-et-date",
    fr: "Il est midi et quart.",
    en: "It's a quarter past noon.",
    tags: ["heure","horloge"],
    drills: ["flashcard","sentence","dictation"],
    version: 1,
  },
  {
    id: "fr.a1.heure-et-date.025",
    kind: "sentence",
    level: "a1",
    theme: "heure-et-date",
    fr: "Il est minuit et quart.",
    en: "It's a quarter past midnight.",
    tags: ["heure","horloge"],
    drills: ["flashcard","sentence","dictation"],
    version: 1,
  },
  {
    id: "fr.a1.heure-et-date.032",
    kind: "sentence",
    level: "a1",
    theme: "heure-et-date",
    fr: "Il est huit heures et demie.",
    en: "It's half past eight.",
    tags: ["heure","horloge"],
    drills: ["flashcard","sentence","dictation"],
    version: 1,
  },
  {
    id: "fr.a1.heure-et-date.036",
    kind: "sentence",
    level: "a1",
    theme: "heure-et-date",
    fr: "Il est midi et demi.",
    en: "It's half past noon.",
    notes: "« demie » agrees with the feminine « heure », but « demi » stays masculine after « midi » and « minuit ».",
    tags: ["heure","horloge"],
    drills: ["flashcard","sentence","dictation"],
    version: 1,
  },
  {
    id: "fr.a1.heure-et-date.037",
    kind: "sentence",
    level: "a1",
    theme: "heure-et-date",
    fr: "Il est minuit et demi.",
    en: "It's half past midnight.",
    tags: ["heure","horloge"],
    drills: ["flashcard","sentence","dictation"],
    version: 1,
  },
  {
    id: "fr.a1.heure-et-date.038",
    kind: "sentence",
    level: "a1",
    theme: "heure-et-date",
    fr: "Le musée ouvre à dix heures.",
    en: "The museum opens at ten.",
    tags: ["planification"],
    drills: ["flashcard","roleplay","sentence"],
    version: 1,
  },
  {
    id: "fr.a1.heure-et-date.060",
    kind: "sentence",
    level: "a1",
    theme: "heure-et-date",
    fr: "Il est une heure.",
    en: "It's one o'clock.",
    ipa: "il ɛ ynœʁ",
    notes: "Liaison links \"une\" and \"heure\" so you hear one linked syllable; don't write an extra word between them.",
    tags: ["liaison"],
    drills: ["dictation"],
    version: 1,
  },
  {
    id: "fr.a1.heure-et-date.061",
    kind: "sentence",
    level: "a1",
    theme: "heure-et-date",
    fr: "Il est deux heures juste.",
    en: "It's exactly two o'clock.",
    ipa: "il ɛ dø.zœʁ ʒyst",
    notes: "The x in \"deux\" is silent alone but liaises as a z sound before \"heures\".",
    tags: ["liaison"],
    drills: ["dictation"],
    version: 1,
  },
  {
    id: "fr.a1.heure-et-date.064",
    kind: "sentence",
    level: "a1",
    theme: "heure-et-date",
    fr: "Il est cinq heures moins dix.",
    en: "It's ten to five.",
    ipa: "il ɛ sɛ̃.kœʁ mwɛ̃ dis",
    notes: "\"Cinq\" holds a nasal vowel sound, not a separate n consonant like in English.",
    tags: ["nasal"],
    drills: ["dictation"],
    version: 1,
  },
  {
    id: "fr.a1.heure-et-date.066",
    kind: "sentence",
    level: "a1",
    theme: "heure-et-date",
    fr: "Il est sept heures du matin.",
    en: "It's seven in the morning.",
    ipa: "il ɛ sɛ.tœʁ dy ma.tɛ̃",
    notes: "The p in \"sept\" is always silent, and the final t liaises into the next word.",
    tags: ["liaison"],
    drills: ["dictation"],
    version: 1,
  },
  {
    id: "fr.a1.heure-et-date.067",
    kind: "sentence",
    level: "a1",
    theme: "heure-et-date",
    fr: "Il est huit heures du soir.",
    en: "It's eight in the evening.",
    ipa: "il ɛ ɥi.tœʁ dy swaʁ",
    notes: "The t of \"huit\" is silent alone but is pronounced here through liaison.",
    tags: ["liaison"],
    drills: ["dictation"],
    version: 1,
  },
  {
    id: "fr.a1.heure-et-date.068",
    kind: "sentence",
    level: "a1",
    theme: "heure-et-date",
    fr: "Il est neuf heures pile.",
    en: "It's nine o'clock sharp.",
    ipa: "il ɛ nœ.vœʁ pil",
    notes: "\"Neuf\" is an exception where the final f sound changes to v before heures.",
    tags: ["liaison"],
    drills: ["dictation"],
    version: 1,
  },
  {
    id: "fr.a1.heure-et-date.077",
    kind: "sentence",
    level: "a1",
    theme: "heure-et-date",
    fr: "Nous avons rendez-vous à dix heures.",
    en: "We have an appointment at ten o'clock.",
    ipa: "nu.za.vɔ̃ ʁɑ̃.de.vu a di.zœʁ",
    notes: "The x of \"dix\" liaises to a z sound right before \"heures\".",
    tags: ["liaison"],
    drills: ["dictation"],
    version: 1,
  },
  {
    id: "fr.a1.heure-et-date.081",
    kind: "sentence",
    level: "a1",
    theme: "heure-et-date",
    fr: "La classe dure une heure.",
    en: "The class lasts one hour.",
    ipa: "la klas dyʁ y.nœʁ",
    notes: "\"Une\" and \"heure\" link into one sound, don't write \"une\" as if it stood alone.",
    tags: ["liaison"],
    drills: ["dictation"],
    version: 1,
  },
  {
    id: "fr.a1.heure-et-date.089",
    kind: "sentence",
    level: "a1",
    theme: "heure-et-date",
    fr: "Le magasin ouvre à huit heures et demie.",
    en: "The store opens at half past eight.",
    ipa: "lə ma.ga.zɛ̃ u.vʁ a ɥi.tœʁ e də.mi",
    notes: "The t of \"huit\" is silent alone but liaises before \"heures\".",
    tags: ["liaison"],
    drills: ["dictation"],
    version: 1,
  },
  {
    id: "fr.a1.heure-et-date.090",
    kind: "sentence",
    level: "a1",
    theme: "heure-et-date",
    fr: "Il est presque midi.",
    en: "It's almost noon.",
    ipa: "il ɛ pʁɛsk mi.di",
    notes: "\"Est\" (is) sounds close to \"et\" (and) but they are never interchangeable in writing.",
    tags: ["homophone"],
    drills: ["dictation"],
    version: 1,
  },
  {
    id: "fr.a1.heure-et-date.091",
    kind: "sentence",
    level: "a1",
    theme: "heure-et-date",
    fr: "Le rendez-vous est à quatorze heures.",
    en: "The appointment is at two PM.",
    ipa: "lə ʁɑ̃.de.vu ɛ.t‿a ka.tɔʁ.zœʁ",
    notes: "The final t of \"est\" is silent alone but is pronounced here before the vowel of \"à\".",
    tags: ["liaison"],
    drills: ["dictation"],
    version: 1,
  },
  {
    id: "fr.a1.heure-et-date.092",
    kind: "sentence",
    level: "a1",
    theme: "heure-et-date",
    fr: "La réunion commence à seize heures trente.",
    en: "The meeting starts at 4:30 PM.",
    ipa: "la ʁe.y.njɔ̃ kɔ.mɑ̃s a sɛ.zœʁ tʁɑ̃t",
    notes: "\"Réunion\" and \"trente\" both contain nasal vowels that are easy to under-spell.",
    tags: ["nasal"],
    drills: ["dictation"],
    version: 1,
  },
  {
    id: "fr.a1.heure-et-date.093",
    kind: "sentence",
    level: "a1",
    theme: "heure-et-date",
    fr: "Il travaille de neuf heures à dix-sept heures.",
    en: "He works from nine to five.",
    ipa: "il tʁa.vaj də nœ.vœʁ a diz.sɛ.tœʁ",
    notes: "\"Neuf\" again shifts its final sound to v before the vowel of \"heures\".",
    tags: ["liaison"],
    drills: ["dictation"],
    version: 1,
  },
  {
    id: "fr.a1.heure-et-date.094",
    kind: "sentence",
    level: "a1",
    theme: "heure-et-date",
    fr: "Le cours de français dure deux heures.",
    en: "The French class lasts two hours.",
    ipa: "lə kuʁ də fʁɑ̃.sɛ dyʁ dø.zœʁ",
    notes: "The x of \"deux\" liaises into a z sound right before \"heures\".",
    tags: ["liaison"],
    drills: ["dictation"],
    version: 1,
  },
  {
    id: "fr.a1.heure-et-date.099",
    kind: "sentence",
    level: "a1",
    theme: "heure-et-date",
    fr: "La bibliothèque ouvre à neuf heures et demie.",
    en: "The library opens at half past nine.",
    ipa: "la bi.bli.jɔ.tɛk u.vʁ a nœ.vœʁ e də.mi",
    notes: "\"Neuf\" shifts to a v sound before the vowel of \"heures\" once again.",
    tags: ["liaison"],
    drills: ["dictation"],
    version: 1,
  },
  {
    id: "fr.a1.heure-et-date.100",
    kind: "sentence",
    level: "a1",
    theme: "heure-et-date",
    fr: "Il est exactement cinq heures.",
    en: "It's exactly five o'clock.",
    ipa: "il ɛ.t‿ɛg.zak.tə.mɑ̃ sɛ̃.kœʁ",
    notes: "\"Cinq\" holds a nasal vowel that liaises smoothly into \"heures\".",
    tags: ["nasal"],
    drills: ["dictation"],
    version: 1,
  },
  {
    id: "fr.a2.heure-et-date.009",
    kind: "sentence",
    level: "a2",
    theme: "heure-et-date",
    fr: "Il est huit heures moins le quart.",
    en: "It's a quarter to eight.",
    tags: ["heure","horloge"],
    drills: ["flashcard","sentence","dictation"],
    version: 1,
  },
  {
    id: "fr.a1.temps-et-frequence.001",
    kind: "sentence",
    level: "a1",
    theme: "temps-et-frequence",
    fr: "Il est huit heures et quart.",
    en: "It's a quarter past eight.",
    ipa: "il ɛ ɥi.t‿œʁ e kaʁ",
    notes: "The liaison in “huit heures” makes the final “t” of “huit” pronounced.",
    tags: ["liaison"],
    drills: ["dictation"],
    version: 1,
  },
  {
    id: "fr.a1.temps-et-frequence.019",
    kind: "sentence",
    level: "a1",
    theme: "temps-et-frequence",
    fr: "Le bus arrive à sept heures moins le quart.",
    en: "The bus arrives at a quarter to seven.",
    ipa: "lə bys a.ʁiv a sɛ.t‿œʁ mwɛ̃ lə kaʁ",
    notes: "The final “t” of “quart” stays silent.",
    tags: ["silent-letter"],
    drills: ["dictation"],
    version: 1,
  },
  {
    id: "fr.a1.temps-et-frequence.051",
    kind: "sentence",
    level: "a1",
    theme: "temps-et-frequence",
    fr: "Il est huit heures.",
    en: "It is eight o'clock.",
    tags: [],
    drills: ["sentence"],
    version: 1,
  },
  {
    id: "fr.a1.temps-et-frequence.052",
    kind: "sentence",
    level: "a1",
    theme: "temps-et-frequence",
    fr: "Il est midi.",
    en: "It is noon.",
    tags: [],
    drills: ["sentence"],
    version: 1,
  },
  {
    id: "fr.a1.temps-et-frequence.053",
    kind: "sentence",
    level: "a1",
    theme: "temps-et-frequence",
    fr: "Il est minuit.",
    en: "It is midnight.",
    tags: [],
    drills: ["sentence"],
    version: 1,
  },
  {
    id: "fr.a1.temps-et-frequence.056",
    kind: "sentence",
    level: "a1",
    theme: "temps-et-frequence",
    fr: "Il est trois heures et quart.",
    en: "It is quarter past three.",
    notes: "{\"tiles\":[{\"w\":\"Il est\",\"t\":\"it is\"},{\"w\":\"trois heures et quart.\",\"t\":\"quarter past three\"}]}",
    tags: [],
    drills: ["sentence"],
    version: 1,
  },
  {
    id: "fr.a1.temps-et-frequence.057",
    kind: "sentence",
    level: "a1",
    theme: "temps-et-frequence",
    fr: "Il est cinq heures et demie.",
    en: "It is half past five.",
    tags: [],
    drills: ["sentence"],
    version: 1,
  },
  {
    id: "fr.a1.temps-et-frequence.058",
    kind: "sentence",
    level: "a1",
    theme: "temps-et-frequence",
    fr: "Il est sept heures moins le quart.",
    en: "It is quarter to seven.",
    notes: "{\"tiles\":[{\"w\":\"Il est\",\"t\":\"it is\"},{\"w\":\"sept heures moins le quart.\",\"t\":\"quarter to seven\"}]}",
    tags: [],
    drills: ["sentence"],
    version: 1,
  },
  {
    id: "fr.a1.temps-et-frequence.064",
    kind: "sentence",
    level: "a1",
    theme: "temps-et-frequence",
    fr: "Le magasin ferme à dix-huit heures.",
    en: "The store closes at six pm.",
    notes: "{\"tiles\":[{\"w\":\"Le magasin\",\"t\":\"the store\"},{\"w\":\"ferme\",\"t\":\"closes\"},{\"w\":\"à dix-huit heures.\",\"t\":\"at six pm\"}]}",
    tags: [],
    drills: ["sentence"],
    version: 1,
  },
  {
    id: "fr.sons.jours-et-mois.050",
    kind: "word",
    level: "sons",
    theme: "jours-et-mois",
    fr: "le quart d'heure",
    en: "the quarter of an hour",
    ipa: "kaʁ dœʁ",
    respell: "KAR DUHR",
    gender: "m",
    notes: "un quart d'heure = 15 minutes.",
    tags: ["time","clock"],
    drills: ["flashcard","voiceflash"],
    version: 1,
    cardType: "vocab",
  },
  {
    id: "fr.sons.jours-et-mois.063",
    kind: "phrase",
    level: "sons",
    theme: "jours-et-mois",
    fr: "et demie",
    en: "half past",
    ipa: "/e.də.mi/",
    respell: "AY duh-MEE",
    notes: "Added after the hour: trois heures et demie is half past three.",
    tags: ["time","clock"],
    drills: ["flashcard","voiceflash"],
    version: 1,
    cardType: "vocab",
  },
  {
    id: "fr.sons.jours-et-mois.064",
    kind: "phrase",
    level: "sons",
    theme: "jours-et-mois",
    fr: "et quart",
    en: "quarter past",
    ipa: "/e.kaʁ/",
    respell: "AY KAR",
    notes: "Added after the hour: quatre heures et quart is quarter past four.",
    tags: ["time","clock"],
    drills: ["flashcard","voiceflash"],
    version: 1,
    cardType: "vocab",
  },
  {
    id: "fr.sons.jours-et-mois.065",
    kind: "phrase",
    level: "sons",
    theme: "jours-et-mois",
    fr: "moins le quart",
    en: "quarter to",
    ipa: "/mwɛ̃.lə.kaʁ/",
    respell: "MWUHN LUH KAR",
    notes: "Cinq heures moins le quart means quarter to five, literally five minus the quarter.",
    tags: ["time","clock"],
    drills: ["flashcard","voiceflash"],
    version: 1,
    cardType: "vocab",
  },
  {
    id: "fr.sons.jours-et-mois.066",
    kind: "phrase",
    level: "sons",
    theme: "jours-et-mois",
    fr: "moins dix",
    en: "ten to",
    ipa: "/mwɛ̃.dis/",
    respell: "MWUHN DEES",
    notes: "Six heures moins dix means ten to six. Works with any minute count.",
    tags: ["time","clock"],
    drills: ["flashcard","voiceflash"],
    version: 1,
    cardType: "vocab",
  },
  {
    id: "fr.sons.jours-et-mois.067",
    kind: "phrase",
    level: "sons",
    theme: "jours-et-mois",
    fr: "midi et demi",
    en: "half past noon",
    ipa: "/mi.di.e.də.mi/",
    respell: "mee-DEE AY duh-MEE",
    notes: "With midi and minuit, demi has no final e in writing.",
    tags: ["time","clock"],
    drills: ["flashcard","voiceflash"],
    version: 1,
    cardType: "vocab",
  },
  {
    id: "fr.sons.jours-et-mois.068",
    kind: "phrase",
    level: "sons",
    theme: "jours-et-mois",
    fr: "minuit et demi",
    en: "half past midnight",
    ipa: "/mi.nɥi.e.də.mi/",
    respell: "mee-NWEE AY duh-MEE",
    notes: "Minuit is midnight. The pattern mirrors midi et demi.",
    tags: ["time","clock"],
    drills: ["flashcard","voiceflash"],
    version: 1,
    cardType: "vocab",
  },
  {
    id: "fr.sons.jours-et-mois.072",
    kind: "word",
    level: "sons",
    theme: "jours-et-mois",
    fr: "pile",
    en: "on the dot, exactly",
    ipa: "/pil/",
    respell: "PEEL",
    notes: "Trois heures pile means three o'clock sharp.",
    tags: ["time","clock"],
    drills: ["flashcard","voiceflash"],
    version: 1,
    cardType: "vocab",
  },
  {
    id: "fr.sons.jours-et-mois.073",
    kind: "phrase",
    level: "sons",
    theme: "jours-et-mois",
    fr: "vers trois heures",
    en: "around three o'clock",
    ipa: "/vɛʁ.tʁwa.zœʁ/",
    respell: "VEHR TRWAH ZUHR",
    notes: "Vers before a time means approximately, around.",
    tags: ["time","clock"],
    drills: ["flashcard","voiceflash"],
    version: 1,
    cardType: "vocab",
  },
  {
    id: "fr.sons.jours-et-mois.074",
    kind: "phrase",
    level: "sons",
    theme: "jours-et-mois",
    fr: "à trois heures",
    en: "at three o'clock",
    ipa: "/a.tʁwa.zœʁ/",
    respell: "AH TRWAH ZUHR",
    notes: "Use à before a time to say when something happens.",
    tags: ["time","clock"],
    drills: ["flashcard","voiceflash"],
    version: 1,
    cardType: "vocab",
  },
  {
    id: "fr.sons.questions.019",
    kind: "phrase",
    level: "sons",
    theme: "questions",
    fr: "quelle heure est-il ?",
    en: "what time is it?",
    ipa: "kɛ.lœʁ ɛ.til",
    notes: "[kel-uhr eh-teel] · quelle and heure glue together",
    tags: ["question","phrase","time"],
    drills: ["flashcard","voiceflash"],
    version: 1,
    cardType: "vocab",
  },
  {
    id: "fr.sons.questions.020",
    kind: "phrase",
    level: "sons",
    theme: "questions",
    fr: "à quelle heure ?",
    en: "at what time?",
    ipa: "a kɛ.lœʁ",
    notes: "[ah kel-uhr] · À quelle heure on mange ?",
    tags: ["question","phrase","time"],
    drills: ["flashcard","voiceflash"],
    version: 1,
    cardType: "vocab",
  },
  {
    id: "fr.sons.expressions-utiles.180",
    kind: "phrase",
    level: "sons",
    theme: "expressions-utiles",
    fr: "j'ai un rendez-vous",
    en: "I have an appointment",
    ipa: "/ʒe œ̃ ʁɑ̃devu/",
    respell: "ZHAY UHN rahn-day-VOO",
    notes: "Rendez-vous covers doctor visits, meetings and dates alike.",
    tags: ["expression"],
    drills: ["flashcard","voiceflash"],
    version: 1,
    cardType: "vocab",
  },
  {
    id: "fr.a1.expressions-utiles.019",
    kind: "sentence",
    level: "a1",
    theme: "expressions-utiles",
    fr: "Ça marche, on se voit à dix-huit heures.",
    en: "Sounds good, we'll see each other at six.",
    ipa: "sa maʁʃ ɔ̃ sə vwa a di.zɥi.t‿œʁ",
    tags: ["fixed-expression"],
    drills: ["dictation"],
    version: 1,
  },
  {
    id: "fr.sons.expressions-utiles.153",
    kind: "phrase",
    level: "sons",
    theme: "expressions-utiles",
    fr: "ça ouvre à quelle heure ?",
    en: "what time does it open?",
    ipa: "/sa uvʁ a kɛl œʁ/",
    respell: "SAH OOVR AH KEHL UHR",
    notes: "Ask this outside any shop, museum or bakery.",
    tags: ["expression"],
    drills: ["flashcard","voiceflash"],
    version: 1,
    cardType: "vocab",
  },
  {
    id: "fr.sons.expressions-utiles.154",
    kind: "phrase",
    level: "sons",
    theme: "expressions-utiles",
    fr: "ça ferme à quelle heure ?",
    en: "what time does it close?",
    ipa: "/sa fɛʁm a kɛl œʁ/",
    respell: "SAH FEHRM AH KEHL UHR",
    notes: "The twin of ça ouvre à quelle heure. Worth asking, French lunch closures are real.",
    tags: ["expression"],
    drills: ["flashcard","voiceflash"],
    version: 1,
    cardType: "vocab",
  },
];

export const IMPORTED_IDS: string[] = IMPORTED.map((i) => i.id);

/* ─── Rows already in the seed, named so their `fr` cannot drift ───────────
 *
 * These twelve are in both copies today. They are still listed, and the batch
 * still compares their `fr` against Postgres and the merge against the seed,
 * because an id that resolves to a different word than the one this lesson
 * names is worse than one that does not resolve at all.                       */

export const REUSED: { id: string; fr: string; en: string }[] = [

  { id: "fr.a1.nombres.047", fr: "Le train part à seize heures dix.", en: "The train leaves at four ten (16:10)." },
  { id: "fr.a1.nombres.057", fr: "Le film commence à vingt heures trente.", en: "The movie starts at eight thirty PM." },
  { id: "fr.a1.nombres.064", fr: "Le musée est ouvert de neuf heures à dix-huit heures.", en: "The museum is open from nine to six PM." },
  { id: "fr.a1.nombres.074", fr: "La réunion commence à quatorze heures précises.", en: "The meeting starts at two PM sharp." },
  { id: "fr.a1.deplacements.058", fr: "en retard", en: "late" },
  { id: "fr.a1.deplacements.059", fr: "à l'heure", en: "on time" },
  { id: "fr.a1.deplacements.125", fr: "Le train part à huit heures et quart.", en: "The train leaves at a quarter past eight." },
  { id: "fr.a1.objets.012", fr: "une montre", en: "a watch" },
  { id: "fr.a1.routines.035", fr: "midi", en: "noon" },
  { id: "fr.a1.routines.036", fr: "minuit", en: "midnight" },
  { id: "fr.a1.ecole.263", fr: "Elle a six ans et demi.", en: "She is six and a half years old." },
  { id: "fr.a1.salutations.308", fr: "Bonjour, j'ai un rendez-vous à quatorze heures.", en: "Hello, I have an appointment at two o'clock." },
];

export const REUSED_IDS: string[] = REUSED.map((r) => r.id);

/** The `fr` of a corpus row this lesson names, so no screen retypes a sentence
 *  the corpus already stores. Throws rather than returning undefined: a card
 *  showing "undefined" is worse than a build that stops. */
const BY_ID = new Map<string, { fr: string; en: string }>([
  ...IMPORTED.map((r) => [r.id, { fr: r.fr, en: r.en }] as const),
  ...AUTHORED.map((r) => [r.id, { fr: r.fr, en: r.en }] as const),
  ...REUSED.map((r) => [r.id, { fr: r.fr, en: r.en }] as const),
]);

export function frOf(id: string): string {
  const row = BY_ID.get(id);
  if (!row) throw new Error(`a1.12: no row for "${id}" in the corpus manifest. Add it, or name an id that exists.`);
  return row.fr;
}

export function enOf(id: string): string {
  const row = BY_ID.get(id);
  if (!row) throw new Error(`a1.12: no row for "${id}" in the corpus manifest`);
  return row.en;
}

/* ─── What this lesson must not teach, named so the test can assert it ─────
 *
 * `heure-et-date` is a clock AND calendar theme, so the deck this lesson binds
 * to carries a1.08's and a1.09's vocabulary one tap away. A lesson drawing from
 * it could teach a day or a month by accident and leave those lessons with
 * nothing to introduce. Listed here rather than in the test, so the batch, the
 * merge and the test all read one list.
 *
 * A day or a month appearing inside a reading line is allowed and must not
 * fail: « Jeudi, à quatorze heures » is a real sentence about a time. The
 * assertion is written against the surfaces the lesson TEACHES from rather than
 * against every string in the file.                                           */

export const DAYS = [
  'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche',
] as const;

export const MONTHS = [
  'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
  'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre',
] as const;

export const SEASONS = ['le printemps', "l'été", "l'automne", "l'hiver"] as const;

/** Reflexive verbs, which are a2.22, and which `routines` is full of. The
 *  brief's recommended theme would have put these one tap from every card. */
export const REFLEXIVE = ['se réveiller', 'se lever', 'se coucher', 'je me réveille', 'je me lève'] as const;

/** The two frozen question chunks, which are the ONLY inversion this lesson is
 *  allowed to show. a1.19 owns est-ce que and a1.20 owns inversion, and both
 *  are seven units ahead with `lessonIds: []`. */
export const FROZEN_QUESTIONS = ['quelle heure est-il', "vous avez l'heure"] as const;

/** The real `routines` a1 maximum, measured against Postgres on 2026-08-06 and
 *  recorded for whoever builds a1.25, which declares the equally dead singular
 *  `routine`. The seed's highest is fr.b1.routines.095, which understates the
 *  a1 band by 89. Not used by this lesson. */
export const ROUTINES_A1_MAX = 184;
