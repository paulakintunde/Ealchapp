// The a1.09 corpus: what this lesson authors, what it imports, and the five
// shipped respellings it repairs.
//
// THIS FILE IS THE SINGLE SOURCE OF TRUTH for the 12 authored rows, the 29
// imported rows, and every respelling a1.09 puts on a screen. The lesson body
// (mois-lesson.ts) reads `fr`, `ipa`, `respell` and `en` FROM HERE and never
// restates them, for the same reason jours-corpus.ts and elision-corpus.ts do:
// before that convention one word's transcription was typed by hand in five
// sections and the five copies were free to drift.
//
// ══════════════════════════════════════════════════════════════════════════
//  A1-09-MONTHS-PROMPT.md IS STALE. IT WAS WRITTEN AGAINST A HOLE THAT WAS
//  FILLED THE SAME DAY, AND MEASURED AGAINST seed.json RATHER THAN POSTGRES.
// ══════════════════════════════════════════════════════════════════════════
//
// The brief opens by saying a1.08 "was specced in detail and never authored:
// there is no jours-corpus.ts, no jours-lesson.ts, no author-jours-batch.ts, no
// content:jours script and no a1-08-jours.test.ts."
//
// All six exist. a1.08.l1 is published in Postgres at v7 with 24 sections, it
// is in seed.json at version 19, unit a1.08 links it and carries
// themes: ["jours-et-mois"], and `content:jours` is in package.json. The files
// were written on 2026-08-06, hours before this brief was. The brief's own
// closing bullet asks for exactly this to be reported: "a1.08 was specced as
// built-and-shipped by its own successor plan and never existed, which is
// exactly the failure this bullet exists to catch." It has happened again in
// the opposite direction.
//
// So the brief's three options (build self-contained, build a1.08 first, drop
// the prereq binding) are answers to a question that is closed. The prereq
// resolves, a1.08 ships, and this lesson is free to build ON it. See the
// handover note in mois-lesson.ts.
//
// Every corpus claim below was measured against POSTGRES on 2026-08-06, each
// one twice by two methods that do not share an implementation (a tokenise-and
// -compare pass that never builds a regex from a string, and a targeted SQL
// pass), because the brief's own warning about zero-returning queries applies
// to it.
//
//   1. "Ten of the twelve months do not exist as headwords ... Absent as
//      headwords: janvier février mars mai juin juillet août septembre octobre
//      novembre."  FALSE, and it is the claim that would have cost the most.
//      ALL TWELVE exist, in this lesson's own theme, with ipa, respell,
//      cardType vocab and flashcard+voiceflash:
//
//          fr.sons.jours-et-mois.008-019   janvier through décembre
//
//      The brief tells the author to "budget for authoring ten month words plus
//      the surrounding date vocabulary". Authoring them would have FAILED THE
//      BUILD: flashhub-coverage.test.ts keys decks on `fr` with the article
//      stripped, so a second `janvier` in `jours-et-mois` is one key served
//      twice. a1.09 authors NO month word. It repairs five of their
//      respellings and imports all twelve into the seed.
//
//      Also present and also reported absent: `le mois` (.022), `l'année`
//      (.023), `la date` (.024), `hier` (.025), `demain` (.026).
//
//   2. "month-bearing sentences: 20 ... Three months have no sentence anywhere
//      in the seed: février 0, octobre 0, décembre 0."  FALSE of the database,
//      TRUE of the seed cut, and the brief says so itself before drawing the
//      wrong conclusion from it. Postgres holds 311 month-bearing sentences
//      against the seed's 20, and not one month is empty:
//
//                     brief   Postgres      of which a1/sons published
//          janvier      5        29                 15
//          février      0        20                 13
//          mars         1        35                 19
//          avril        1        23                 12
//          mai          1        21                 15
//          juin         1        48                 18
//          juillet      3        32                 19
//          août         2        21                 13
//          septembre    5        39                 16
//          octobre      0        14                  9
//          novembre     1        11                  8
//          décembre     0        27                 16
//
//      février, octobre and décembre are the three the brief calls impossible
//      to drill, and they hold 13, 9 and 16 usable published sentences. The
//      brief's own calibration paragraph predicted the seed would run at "94%
//      of the database" for this slice. It runs at 6%.
//
//   3. "12 use `en` plus a bare month and 3 use `le` plus a number plus a
//      month."  FALSE in the same direction: 143 use `en` plus a bare month,
//      58 use `le` plus a number plus a month, and 28 use `le mois de`.
//
//   4. "Neither declared theme exists ... Note also that `_jours_probe.ts`
//      queries a theme named `jours-et-mois`, which is in no seed item. Either
//      it exists in Postgres and not in the cut, or the probe was speculative.
//      Check Postgres for it before you create anything."  The first half is
//      TRUE: `temps` holds 0 items and `calendrier` holds 0 items, in both
//      copies. The check the brief asks for was run, and `jours-et-mois` holds
//      386 published rows including the seven days, the twelve months and the
//      whole frame around a date.
//
//      So the brief's three theme options (author into `routines`, create
//      `calendrier`, clear the binding) are all answers to a question a1.08
//      already closed: it rebound a1.08 to `jours-et-mois` on the same
//      reasoning, and the theme is named for the days AND the months. a1.09
//      takes the same binding. There is nothing to create. See the theme
//      decision below.
//
// One layout claim is also worth correcting because the brief repeats it from
// a1.08's and a later author will rely on it: "Test it with `errorSpot` on a
// written form, not by ear, because it is inaudible ... `fold()` cannot test
// the capital letter". Both halves cannot be true at once, and the second is
// the true one: `errorSpot` runs the SAME `matchesAccept` → `fold()` path as
// `typeIn` (answer.logic.ts), and `fold()` lowercases. NO free-text format can
// test a capital. `mcq` can, because its options are picked rather than typed.
// a1.09 tests the capital with an mcq and says so, exactly as a1.08 does.
//
// ── The theme binding: bound to `jours-et-mois`, not created ───────────────
//
// The unit's dead `["temps","calendrier"]` binding is REPLACED with
// `["jours-et-mois"]` rather than cleared. Both dead themes resolve to zero
// items in both copies; `jours-et-mois` holds 386 published rows and already
// holds all twelve months, so this is the one theme that is right for a1.08
// and a1.09 at once and needs no creation, no SEED_CUT edit and no product
// decision about a new chip.
//
// THIS IS THE DECISION FOR THE WHOLE CALENDAR CLUSTER, as both briefs ask.
// a1.08 took it first and a1.09 confirms it. a1.10 (Seasons and Weather,
// themes ["temps","meteo"]) should keep `meteo`, which holds 336 rows, and
// drop the dead `temps`. a1.12 (Telling Time, themes ["temps"]) should rebind
// to `jours-et-mois`, which already holds l'heure, la minute, et demie, et
// quart, moins le quart and the whole clock vocabulary at .047-.084.
//
// ── What this lesson actually authors, and why it is only twelve rows ──────
//
// Twelve rows, and not one of them is a month name.
//
// The corpus demonstrates both frames abundantly and demonstrates them AGAINST
// EACH OTHER exactly once, in a pair nobody wrote on purpose:
//
//     fr.a1.jours-et-mois.057   La rentrée scolaire est en septembre.
//     fr.a1.ecole.239           La rentrée scolaire est le premier septembre.
//
// Same subject, same verb, both frames, one difference. That pair is the whole
// teaching and it is the only one of its kind in 47,351 rows. Everything else
// pairs sentences that differ in four places at once, which teaches nothing,
// because the learner cannot see which difference carried the meaning.
//
// So what is authored is the MISSING HALF of eight more pairs, built on
// sentences that already exist wherever one side was already there. That is
// why the count is twelve and not twenty-four: five of the nine pairs have at
// least one half already in the corpus, and the doctrine is reuse.
//
// Every authored row is built on être or avoir, which is the whole of the
// learner's verb stock. There is no regular-verb unit anywhere in A1 (a1.08
// checked all thirty units), so a drilled sentence carrying `je pars` would ask
// for a form nothing has given them. Rows carrying a verb outside être and
// avoir are marked `chunk: true` and are read, never produced.
//
// ── Respelling convention, and the five rows this lesson repairs ───────────
//
// House convention: hyphenated syllables, stressed syllable capitalised, nasal
// vowels closed with a superscript n and NEVER a plain n or m, /ø œ/ as EU,
// /y/ as Ü. Brackets are added by `D()` below, never stored, because the
// density validator checks the rendered form.
//
// The brief warns that this "bites harder here than in any recent lesson" and
// it is right: janvier, juin, septembre, novembre and décembre all carry a
// nasal, which is five of twelve, and ALL FIVE shipped rows fail the
// convention:
//
//     fr.sons.jours-et-mois.008  janvier    zhahn-VYAY     plain n for /ɑ̃/
//     fr.sons.jours-et-mois.013  juin       ZHWAN          plain n for /ɛ̃/
//     fr.sons.jours-et-mois.016  septembre  sep-TAHNBR     plain N for /ɑ̃/
//     fr.sons.jours-et-mois.018  novembre   noh-VAHNBR     plain N for /ɑ̃/
//     fr.sons.jours-et-mois.019  décembre   day-SAHNBR     plain N for /ɑ̃/
//
// The corpus already contradicts itself on the last one: fr.sons.accents.015
// respells décembre `day-SAHⁿBR`, correctly, so the same word carries two
// different transcriptions depending on which theme a learner meets it in.
// That is the same contradiction a1.08 repaired on dimanche and vendredi.
//
// These five are REPAIRED by the batch, as an explicit printed change, because
// they are the twelve cards this lesson is built on and shipping a lesson whose
// own card reads `day-SAHⁿBR` while the flashcard hub reads `day-SAHNBR` for
// the same word is a contradiction the learner sees. `respell` is display-only,
// so the repair cannot break a drill, a score or an id.
//
// A limitation worth naming rather than working around, and it is WORSE here
// than in a1.08: `hasPlainNasalFor` catches `zhahn-VYAY` and `ZHWAN` and does
// NOT catch `sep-TAHNBR`, `noh-VAHNBR` or `day-SAHNBR`. Its test requires the
// n or m to be the last letter of a token (`[AEIOUY][NM](?![A-Za-zÀ-ÿ])`), and
// all three -embre nasals have BR behind them. So three of the five worst rows
// in this lesson pass the shared checker. a1-09-mois.test.ts imports the real
// function as the brief requires AND adds an explicit superscript assertion
// over the five nasal months, because the shared checker cannot see three of
// them. This is the same gap a1.08 found on `dee-MAHNSH`, at three times the
// size.
//
// ── The ɥ glide, which the brief asks to be settled ────────────────────────
//
// The brief says "the house respell has not settled the ɥ glide" and lists
// `WEET` (huit), `NWEE` (la nuit) and `LÜEE` (chez lui), then asks for one form
// to be picked for juin and juillet and for the choice to be stated.
//
// It is already settled for these two words, and it was settled before this
// lesson: the shipped rows are `ZHWAN` and `zhwee-YEH`, and BOTH use W. So the
// pair is already consistent with itself and with the majority form (huit,
// nuit). a1.09 keeps W, changes nothing about the glide, and repairs only
// juin's NASAL: `ZHWAN` → `ZHWEHⁿ`. /ɛ̃/ is written `EHⁿ` in this house
// (a1.08 respells demain `duh-MEHⁿ` and the shipped liaison rows carry `ehⁿ`).
//
// No fourth form is introduced, which is what the brief's debt note asks for.
//
// ── août has one pronunciation here, and it was already chosen ─────────────
//
// The brief is right that août has more than one accepted pronunciation in the
// wild (/u/, /ut/, /aut/) and asks for one to be picked, authored once, and
// noted so nobody "fixes" it later. THE APP ALREADY TEACHES /ut/, `OOT`, on
// fr.sons.jours-et-mois.015. That is the one a1.09 displays everywhere, it is
// not re-decided here, and the variation is never shown to an A1 learner.
// Anyone tempted to "correct" it to /u/ should change the corpus row and this
// file together, or the card and the hub will disagree.
//
// ── avril carries two respellings and neither is wrong ─────────────────────
//
// fr.sons.jours-et-mois.011 says `ah-VREEL` and fr.sons.muettes.028 says
// `a-VREEL`. Both follow the convention: this is a variant in how /a/ is
// written, not a violation, so it is NOT repaired. a1.09 displays this theme's
// own form, `ah-VREEL`. Repairing sons.06's exemplar would be reaching into a
// shipped lesson's own card to settle a preference, and the repairs in this
// file are deliberately limited to rows that break a stated rule.
//
// avril is worth the callback the brief asks for: it is the CaReFuL-L exemplar
// in sons.06, `gentil` is filed against it ("A CaReFuL L that stays silent.
// Compare avril"), and a learner who did the silent-letters lesson has already
// been taught to sound that L.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

/* ─── What the screens display ─────────────────────────────────────────────
 *
 * Every French unit a1.09 puts on a card, with the respelling this lesson
 * stands behind. Keyed by the French form, because several of these are
 * display strings rather than corpus rows: `le mois`, `l'année` and `la date`
 * are WITHDRAWN from the seed (see the note on WITHDRAWN_IDS below) and exist
 * here only as text on a card.                                              */

export type Display = { fr: string; ipa: string; respell: string; en: string };

const D = (fr: string, ipa: string, res: string, en: string): Display =>
  ({ fr, ipa: `/${ipa}/`, respell: `[${res}]`, en });

export const RESPELL: Record<string, Display> = {
  // The twelve, in calendar order. This is the lesson's whole vocabulary and
  // not one word of it is authored: every one is fr.sons.jours-et-mois.008-019.
  // Five carry the corrected nasal, which is what RESPELL_REPAIRS writes back.
  janvier: D('janvier', 'ʒɑ̃.vje', 'zhahⁿ-VYAY', 'January'),
  février: D('février', 'fe.vʁi.je', 'fay-vree-YAY', 'February'),
  mars: D('mars', 'maʁs', 'MARS', 'March'),
  avril: D('avril', 'a.vʁil', 'ah-VREEL', 'April'),
  mai: D('mai', 'mɛ', 'MEH', 'May'),
  juin: D('juin', 'ʒɥɛ̃', 'ZHWEHⁿ', 'June'),
  juillet: D('juillet', 'ʒɥi.jɛ', 'zhwee-YEH', 'July'),
  août: D('août', 'ut', 'OOT', 'August'),
  septembre: D('septembre', 'sɛp.tɑ̃bʁ', 'sep-TAHⁿBR', 'September'),
  octobre: D('octobre', 'ɔk.tɔbʁ', 'ok-TOBR', 'October'),
  novembre: D('novembre', 'nɔ.vɑ̃bʁ', 'noh-VAHⁿBR', 'November'),
  décembre: D('décembre', 'de.sɑ̃bʁ', 'day-SAHⁿBR', 'December'),

  // The two frames, as a pair, on the month the scene turns on. Both halves
  // are respelled so the learner can see that the date frame is two whole extra
  // syllables and not a written decoration.
  'en juin': D('en juin', 'ɑ̃ ʒɥɛ̃', 'ahⁿ ZHWEHⁿ', 'in June'),
  'le douze juin': D('le douze juin', 'lə duz ʒɥɛ̃', 'luh DOOZ ZHWEHⁿ', 'on the twelfth of June'),
  'en janvier': D('en janvier', 'ɑ̃ ʒɑ̃.vje', 'ahⁿ zhahⁿ-VYAY', 'in January'),
  'le premier janvier': D('le premier janvier', 'lə pʁə.mje ʒɑ̃.vje', 'luh pruh-MYAY zhahⁿ-VYAY', 'on the first of January'),
  'en mars': D('en mars', 'ɑ̃ maʁs', 'ahⁿ MARS', 'in March'),
  'le douze mars': D('le douze mars', 'lə duz maʁs', 'luh DOOZ MARS', 'on the twelfth of March'),

  // The one ordinal, against a plain cardinal, which is the contrast s12 draws.
  'le premier': D('le premier', 'lə pʁə.mje', 'luh pruh-MYAY', 'the first'),
  'le deux': D('le deux', 'lə dø', 'luh DEU', 'the second'),
  'le douze': D('le douze', 'lə duz', 'luh DOOZ', 'the twelfth'),
  'le trente et un': D('le trente et un', 'lə tʁɑ̃t e œ̃', 'luh trahⁿt ay UHⁿ', 'the thirty-first'),

  // le mois de, and the elision a1.07 already taught the mechanism for.
  'le mois de mai': D('le mois de mai', 'lə mwa də mɛ', 'luh mwah duh MEH', 'the month of May'),
  "le mois d'août": D("le mois d'août", 'lə mwa dut', 'luh mwah DOOT', 'the month of August'),

  // The frame around a month. The first three are display strings only: they
  // are gendered single-word nouns and importing them would move a1.03's
  // printed ending statistics. See WITHDRAWN_IDS.
  'le mois': D('le mois', 'lə mwa', 'luh MWAH', 'the month'),
  "l'année": D("l'année", 'la.ne', 'lah-NAY', 'the year'),
  'la date': D('la date', 'la dat', 'lah DAT', 'the date'),
  'le mois prochain': D('le mois prochain', 'lə mwa pʁɔ.ʃɛ̃', 'luh mwah proh-SHEHⁿ', 'next month'),
  'le mois dernier': D('le mois dernier', 'lə mwa dɛʁ.nje', 'luh mwah dehr-NYAY', 'last month'),
  'tous les mois': D('tous les mois', 'tu le mwa', 'too lay MWAH', 'every month'),
  'une fois par mois': D('une fois par mois', 'yn fwa paʁ mwa', 'ün fwah par MWAH', 'once a month'),
};

/** The bracketed respelling of a French form this lesson displays. Throws
 *  rather than returning undefined: a card silently missing its transcription
 *  is the failure this file exists to stop, and it looks identical to a card
 *  that never wanted one. */
export function sub(fr: string): string {
  const d = RESPELL[fr];
  if (!d) throw new Error(`a1.09: no respelling authored for "${fr}". Add it to RESPELL.`);
  return d.respell;
}

/** The IPA of a French form this lesson displays, in slashes. */
export function ipaOf(fr: string): string {
  const d = RESPELL[fr];
  if (!d) throw new Error(`a1.09: no IPA authored for "${fr}". Add it to RESPELL.`);
  return d.ipa;
}

/* ─── The five respelling repairs ──────────────────────────────────────────
 *
 * Display-only, on rows in this lesson's own theme that the sons track also
 * uses. The batch prints each one and refuses to write if the stored value is
 * no longer the broken one it expects, because two people disagreeing about a
 * transcription is a decision rather than a merge.                          */

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
    id: 'fr.sons.jours-et-mois.008', fr: 'janvier',
    from: 'zhahn-VYAY', to: unbracket(RESPELL.janvier.respell),
    why: 'a plain n closes the nasal /ɑ̃/, which the house convention writes with a superscript n. Caught by hasPlainNasalFor.',
  },
  {
    id: 'fr.sons.jours-et-mois.013', fr: 'juin',
    from: 'ZHWAN', to: unbracket(RESPELL.juin.respell),
    why: 'a plain n closes the nasal /ɛ̃/, which this house writes EHⁿ (a1.08 respells demain duh-MEHⁿ). The W for the ɥ glide is UNCHANGED and already matches juillet. Caught by hasPlainNasalFor.',
  },
  {
    id: 'fr.sons.jours-et-mois.016', fr: 'septembre',
    from: 'sep-TAHNBR', to: unbracket(RESPELL.septembre.respell),
    why: 'a plain N closes the nasal /ɑ̃/. hasPlainNasalFor does NOT catch this one (BR follows the nasal, so it is word-internal), so it survived every check.',
  },
  {
    id: 'fr.sons.jours-et-mois.018', fr: 'novembre',
    from: 'noh-VAHNBR', to: unbracket(RESPELL.novembre.respell),
    why: 'a plain N closes the nasal /ɑ̃/, and hasPlainNasalFor cannot see it for the same reason as septembre.',
  },
  {
    id: 'fr.sons.jours-et-mois.019', fr: 'décembre',
    from: 'day-SAHNBR', to: unbracket(RESPELL.décembre.respell),
    why: 'a plain N closes the nasal /ɑ̃/. fr.sons.accents.015 already respells this word correctly as day-SAHⁿBR, so the corpus contradicts itself on the same word in two themes.',
  },
];

/* ─── The twelve, and their ids ────────────────────────────────────────────*/

/** The twelve months, in calendar order, lowercase because French requires it.
 *  Named here so the lesson, the batch, the merge and the test all count the
 *  same set rather than four hand lists free to drift. */
export const THE_TWELVE = [
  'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
  'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre',
] as const;
export type Month = (typeof THE_TWELVE)[number];

/** English, index-aligned with THE_TWELVE. */
export const IN_ENGLISH: Record<Month, string> = {
  janvier: 'January', février: 'February', mars: 'March', avril: 'April',
  mai: 'May', juin: 'June', juillet: 'July', août: 'August',
  septembre: 'September', octobre: 'October', novembre: 'November', décembre: 'December',
};

/** The twelve month headwords, in calendar order. fr.sons.jours-et-mois.008 is
 *  janvier and they run consecutively to .019, which is décembre. Built by
 *  offset rather than listed, so a renumbering cannot half-apply. */
export const MONTH_IDS: string[] = THE_TWELVE.map(
  (_, i) => `fr.sons.jours-et-mois.${String(8 + i).padStart(3, '0')}`,
);

/** The frame around a month, as corpus rows. Four, and every one is multi-word
 *  or ungendered, which is why these four are imported and `le mois`,
 *  `l'année` and `la date` are not. See WITHDRAWN_IDS. */
export const FRAME_IDS: string[] = [
  'fr.sons.jours-et-mois.037', // le mois prochain
  'fr.sons.jours-et-mois.038', // le mois dernier
  'fr.sons.jours-et-mois.127', // tous les mois
  'fr.sons.jours-et-mois.129', // une fois par mois
];

/* ─── Withdrawn on purpose ─────────────────────────────────────────────────
 *
 * `le mois` (.022), `l'année` (.023) and `la date` (.024) are the three words
 * this lesson most obviously wants and they are NOT imported into the seed.
 *
 * All three are gendered single-word nouns, so `endingPopulation()` in
 * gender.logic.ts admits them, and a1-03-genre.test.ts re-measures twenty
 * printed figures from the seed on every run. a1.11 added two feminine nouns in
 * -e, moved a1.03's count from 871 to 873 and turned the suite red on a lesson
 * nobody had touched; a1.08 shipped the same bug through a hand-rolled copy of
 * the guard and had to withdraw four rows after the fact.
 *
 * This lesson does not reopen it. The three are display strings on their cards
 * (see RESPELL) and the batch asserts through the REAL `endingPopulation` that
 * nothing it writes joins that population. What they lose is an SRS entry,
 * which is the right trade against silently making another lesson's printed
 * numbers wrong.
 *
 * `le mois prochain`, `le mois dernier`, `tous les mois` and `une fois par
 * mois` are imported and are safe for a checkable reason rather than a hopeful
 * one: `endingPopulation` excludes anything whose bare noun contains a space,
 * and the first two are gendered multi-word phrases. The last two carry no
 * gender at all and are `kind: 'phrase'`, which the population also excludes. */
export const WITHDRAWN_IDS: string[] = [
  'fr.sons.jours-et-mois.022', // le mois
  'fr.sons.jours-et-mois.023', // l'année
  'fr.sons.jours-et-mois.024', // la date
];

/* ─── The authored rows: the missing halves of eight contrast pairs ─────────
 *
 * Sequence numbers continue `fr.a1.jours-et-mois`, whose highest published seq
 * is 247 (a1.08 authored .232-.247). Never renumbered: ids are the SRS key and
 * every attempt ever logged hangs off them.
 *
 * Nine pairs, twelve authored rows. Five pairs already had one half in the
 * corpus and one pair (septembre) already had both, which is why this is twelve
 * rows rather than eighteen.
 *
 * Read down either column and the only thing that changes is the month. Read
 * across a pair and the only thing that changes is the FRAME: `en` plus a bare
 * month becomes `le` plus a number plus the same month. Nothing else moves,
 * which is what makes the difference visible. The batch, the merge and the test
 * all assert that mechanically rather than trusting it.
 *
 * `pairWith` is reciprocal and the test asserts it, because a pair that is half
 * deleted teaches the opposite of what it was written for: one sentence with a
 * date frame and nothing to compare it against reads as the only way to say it. */

export type MoisSentence = Omit<Item, 'drills'> & {
  /** Which frame this row is. `month` is `en` plus a bare month, `date` is `le`
   *  plus a number plus a month. */
  side: 'month' | 'date';
  /** The month this row is about, lowercase, always. */
  month: Month;
  /** The other half of the pair. Reciprocal. */
  pairWith?: string;
  /** Carries a verb outside être and avoir, shown as a fixed chunk and never
   *  drilled for production. */
  chunk?: boolean;
  drills: Item['drills'];
};

const SV: Item['drills'] = ['sentence', 'flashcard', 'voiceflash', 'review'];
const SVD: Item['drills'] = ['sentence', 'flashcard', 'voiceflash', 'review', 'dictation'];

export const MOIS: MoisSentence[] = [
  // ── janvier: the date half. The month half is fr.a1.jours-et-mois.046. ────
  {
    id: 'fr.a1.jours-et-mois.248', kind: 'sentence', level: 'a1', theme: 'jours-et-mois',
    fr: 'Mon anniversaire est le premier janvier.', en: 'My birthday is on the first of January.',
    ipa: '/mɔ̃ na.ni.vɛʁ.sɛʁ ɛ lə pʁə.mje ʒɑ̃.vje/',
    notes: 'A day inside a month, so le plus a number. premier is the only ordinal a date ever takes.',
    tags: ['mois', 'date', 'premier'], drills: SVD, version: 1,
    side: 'date', month: 'janvier', pairWith: 'fr.a1.jours-et-mois.046',
  },

  // ── mars: the month half. The date half is fr.a1.nombres.052, which is the
  //    sentence the brief quotes and which was already in the seed. ─────────
  {
    id: 'fr.a1.jours-et-mois.249', kind: 'sentence', level: 'a1', theme: 'jours-et-mois',
    fr: 'Nous sommes en mars.', en: 'It is March.',
    ipa: '/nu sɔm ɑ̃ maʁs/',
    notes: 'The month on its own, so en and nothing else. The same frame that gives the date takes no number here.',
    tags: ['mois', 'en'], drills: SVD, version: 1,
    side: 'month', month: 'mars', pairWith: 'fr.a1.nombres.052',
  },

  // ── mai: the month half. The date half is fr.a1.jours-et-mois.134. ───────
  {
    id: 'fr.a1.jours-et-mois.250', kind: 'sentence', level: 'a1', theme: 'jours-et-mois',
    fr: 'La fête du Travail est en mai.', en: 'Labour Day is in May.',
    ipa: '/la fɛt dy tʁa.vaj ɛ ɑ̃ mɛ/',
    notes: 'Which May day is not said, so the month alone is enough and en carries it.',
    tags: ['mois', 'en'], drills: SV, version: 1,
    side: 'month', month: 'mai', pairWith: 'fr.a1.jours-et-mois.134',
  },

  // ── juin: both halves, and the pair the opening scene turns on ───────────
  {
    id: 'fr.a1.jours-et-mois.251', kind: 'sentence', level: 'a1', theme: 'jours-et-mois',
    fr: 'Mon vol est en juin.', en: 'My flight is in June.',
    ipa: '/mɔ̃ vɔl ɛ ɑ̃ ʒɥɛ̃/',
    notes: 'Somewhere in June. True, and not enough for anybody to meet you at an airport.',
    tags: ['mois', 'en'], drills: SVD, version: 1,
    side: 'month', month: 'juin', pairWith: 'fr.a1.jours-et-mois.252',
  },
  {
    id: 'fr.a1.jours-et-mois.252', kind: 'sentence', level: 'a1', theme: 'jours-et-mois',
    fr: 'Mon vol est le douze juin.', en: 'My flight is on the twelfth of June.',
    ipa: '/mɔ̃ vɔl ɛ lə duz ʒɥɛ̃/',
    notes: 'One day inside June. The number comes first and the le cannot be dropped.',
    tags: ['mois', 'date'], drills: SVD, version: 1,
    side: 'date', month: 'juin', pairWith: 'fr.a1.jours-et-mois.251',
  },

  // ── juillet: both halves. The month that collides with juin. ─────────────
  {
    id: 'fr.a1.jours-et-mois.253', kind: 'sentence', level: 'a1', theme: 'jours-et-mois',
    fr: 'Le concert est en juillet.', en: 'The concert is in July.',
    ipa: '/lə kɔ̃.sɛʁ ɛ ɑ̃ ʒɥi.jɛ/',
    notes: 'The month alone. Note the le in front of concert is the noun\'s own, not the date frame.',
    tags: ['mois', 'en'], drills: SV, version: 1,
    side: 'month', month: 'juillet', pairWith: 'fr.a1.jours-et-mois.254',
  },
  {
    id: 'fr.a1.jours-et-mois.254', kind: 'sentence', level: 'a1', theme: 'jours-et-mois',
    fr: 'Le concert est le quatorze juillet.', en: 'The concert is on the fourteenth of July.',
    ipa: '/lə kɔ̃.sɛʁ ɛ lə ka.tɔʁz ʒɥi.jɛ/',
    notes: 'A plain cardinal, quatorze, with no ordinal ending and no de before the month.',
    tags: ['mois', 'date'], drills: SV, version: 1,
    side: 'date', month: 'juillet', pairWith: 'fr.a1.jours-et-mois.253',
  },

  // ── août: both halves. The month with the elision and the odd vowel. ─────
  {
    id: 'fr.a1.jours-et-mois.255', kind: 'sentence', level: 'a1', theme: 'jours-et-mois',
    fr: 'Le magasin est fermé en août.', en: 'The shop is closed in August.',
    ipa: '/lə ma.ɡa.zɛ̃ ɛ fɛʁ.me ɑ̃ ut/',
    notes: 'The whole month, which is what a sign on a French shop door usually means in August.',
    tags: ['mois', 'en'], drills: SVD, version: 1,
    side: 'month', month: 'août', pairWith: 'fr.a1.jours-et-mois.256',
  },
  {
    id: 'fr.a1.jours-et-mois.256', kind: 'sentence', level: 'a1', theme: 'jours-et-mois',
    fr: 'Le magasin est fermé le premier août.', en: 'The shop is closed on the first of August.',
    ipa: '/lə ma.ɡa.zɛ̃ ɛ fɛʁ.me lə pʁə.mje ut/',
    notes: 'One day, so a date. Same sentence, same shop, and a week of your shopping between them.',
    tags: ['mois', 'date', 'premier'], drills: SVD, version: 1,
    side: 'date', month: 'août', pairWith: 'fr.a1.jours-et-mois.255',
  },

  // ── octobre: the date half. The month half is fr.a1.jours-et-mois.086. ───
  {
    id: 'fr.a1.jours-et-mois.257', kind: 'sentence', level: 'a1', theme: 'jours-et-mois',
    fr: "L'anniversaire de mon père est le trois octobre.", en: "My father's birthday is on the third of October.",
    ipa: '/la.ni.vɛʁ.sɛʁ də mɔ̃ pɛʁ ɛ lə tʁwa ɔk.tɔbʁ/',
    notes: 'trois, not troisième. Every day but the first takes a plain counting number.',
    tags: ['mois', 'date'], drills: SV, version: 1,
    side: 'date', month: 'octobre', pairWith: 'fr.a1.jours-et-mois.086',
  },

  // ── décembre: both halves, on avoir rather than être ─────────────────────
  {
    id: 'fr.a1.jours-et-mois.258', kind: 'sentence', level: 'a1', theme: 'jours-et-mois',
    fr: "J'ai un examen en décembre.", en: 'I have an exam in December.',
    ipa: '/ʒe œ̃ nɛg.za.mɛ̃ ɑ̃ de.sɑ̃bʁ/',
    notes: 'Sometime in December. Enough to plan a holiday around and not enough to revise for.',
    tags: ['mois', 'en'], drills: SVD, version: 1,
    side: 'month', month: 'décembre', pairWith: 'fr.a1.jours-et-mois.259',
  },
  {
    id: 'fr.a1.jours-et-mois.259', kind: 'sentence', level: 'a1', theme: 'jours-et-mois',
    fr: "J'ai un examen le douze décembre.", en: 'I have an exam on the twelfth of December.',
    ipa: '/ʒe œ̃ nɛg.za.mɛ̃ lə duz de.sɑ̃bʁ/',
    notes: 'One day. The number goes in front of the month, which is the opposite of the English order.',
    tags: ['mois', 'date'], drills: SVD, version: 1,
    side: 'date', month: 'décembre', pairWith: 'fr.a1.jours-et-mois.258',
  },
];

export const MOIS_IDS: string[] = MOIS.map((w) => w.id);

/** The ids of one frame, in sequence order. */
export const sideIds = (s: MoisSentence['side']): string[] =>
  MOIS.filter((w) => w.side === s).map((w) => w.id);

/** The rows carrying a verb the learner has never been given a paradigm for.
 *  Shown, never drilled for production. */
export const CHUNK_IDS: string[] = MOIS.filter((w) => w.chunk).map((w) => w.id);

/** The corpus Item, stripped of the teaching-only fields. */
export function toItem(w: MoisSentence): Item {
  const { side: _s, month: _m, pairWith: _p, chunk: _c, ...item } = w;
  return item;
}

/* ─── Reused: rows already inside the seed cut ─────────────────────────────
 *
 * Nothing about them changes and no shipped screen moves. Verified against
 * Postgres (published) AND seed.json on 2026-08-06, with the `fr` compared
 * between the two, because an id that is in the seed and not published renders
 * as an empty card rather than erroring.                                     */

export const REUSED: { id: string; fr: string; en: string; why: string }[] = [
  {
    id: 'fr.a1.nombres.052',
    fr: 'Nous sommes le douze mars.',
    en: 'Today is March twelfth.',
    why: 'the date frame in its purest form, on être, and the sentence the brief itself quotes. Already in the seed, so the mars pair costs one authored row rather than two',
  },
  {
    id: 'fr.a1.nombres.097',
    fr: 'Le magasin est fermé le premier janvier.',
    en: 'The shop is closed on January first.',
    why: 'le premier on a shop door, which is where a learner actually reads a date before anybody says one to them',
  },
  {
    id: 'fr.a1.ecole.239',
    fr: 'La rentrée scolaire est le premier septembre.',
    en: 'The start of the school year is September first.',
    why: 'the date half of the ONE pair the corpus already demonstrates against itself. Its month half is fr.a1.jours-et-mois.057, and between them they are the whole lesson in two sentences somebody wrote for other reasons',
  },
  {
    id: 'fr.sons.nasales.051',
    fr: "Pendant le mois d'août, nous campons à la campagne.",
    en: 'During the month of August, we camp in the countryside.',
    why: "the elision inside le mois de, which a1.07 taught the mechanism for. Read only: campons is an -er form no A1 unit conjugates",
  },
];

export const REUSED_IDS: string[] = REUSED.map((r) => r.id);

/* ─── Imported: published in Postgres, absent from the seed ────────────────
 *
 * A RECORDED READ of the database taken on 2026-08-06 by scripts/_mois_manifest
 * .ts, so the merge can write these rows into seed.json without a connection.
 * Nothing below was retyped. The batch compares every field against the live
 * database before writing and dies if the manifest has drifted, because a stale
 * manifest puts the seed ahead of the database on rows nobody has looked at.
 *
 * 24 of the 29 are `jours-et-mois`, which is this lesson's own theme and is not
 * in SEED_CUT.themes, which is the whole reason the brief could not find the
 * months. The twelve month headwords are here: they are what the brief said did
 * not exist, and importing them is the single largest thing this merge does.
 *
 * The ipa on the a1 sentence rows is stored WITHOUT slashes, which is the
 * shipped convention for corpus items and differs from the section-level `ipa`
 * field the density validator checks. They are imported verbatim; nothing here
 * reformats somebody else's row.                                             */

export type ImportedRow = Item;

export const IMPORTED: ImportedRow[] = [

  // ── adjectifs-essentiels: 1 row ──
  {
    id: "fr.a1.adjectifs-essentiels.094", kind: "sentence", level: "a1", theme: "adjectifs-essentiels", fr: "Les journées sont chaudes en juillet.", en: "The days are hot in July.", ipa: "le ʒuʁ.ne sɔ̃ ʃod ɑ̃ ʒɥi.jɛ", tags: ["accord-nombre"], drills: ["dictation"], version: 1,
  },

  // ── jours-et-mois: 12 sentence rows ──
  {
    id: "fr.a1.jours-et-mois.046", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Mon anniversaire est en janvier.", en: "My birthday is in January.", ipa: "mɔ̃ na.ni.vɛʁ.sɛʁ ɛ ɑ̃ ʒɑ̃.vje", tags: ["orthographe"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.051", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Le premier avril, on fait des blagues.", en: "On the first of April, people play pranks.", ipa: "lə pʁə.mje a.vʁil ɔ̃ fɛ de blag", tags: ["orthographe"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.057", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "La rentrée scolaire est en septembre.", en: "The start of the school year is in September.", ipa: "la ʁɑ̃.tʁe skɔ.lɛʁ ɛ ɑ̃ sɛp.tɑ̃bʁ", notes: "'Septembre' is lowercase here, only sentence-initial month names take a capital letter.", tags: ["orthographe"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.079", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "En décembre, les vitrines sont magnifiques.", en: "In December, the shop windows are beautiful.", ipa: "ɑ̃ de.sɑ̃bʁ le vi.tʁin sɔ̃ ma.ɲi.fik", notes: "'Décembre' needs its accent aigu on the é, and no capital letter mid-sentence.", tags: ["accent"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.086", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "L'anniversaire de mon père est en octobre.", en: "My father's birthday is in October.", ipa: "la.ni.vɛʁ.sɛʁ də mɔ̃ pɛʁ ɛ ɑ̃ nɔk.tɔbʁ", tags: ["orthographe"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.089", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Le concours a lieu tous les ans en novembre.", en: "The competition takes place every year in November.", ipa: "lə kɔ̃.kuʁ a ljø tu le zɑ̃ ɑ̃ nɔ.vɑ̃bʁ", tags: ["orthographe"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.129", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "La Saint-Valentin est célébrée le quatorze février.", en: "Valentine's Day is celebrated on February fourteenth.", ipa: "la sɛ̃.va.lɑ̃.tɛ̃ ɛ se.le.bʁe lə ka.tɔʁz fe.vʁi.e", tags: ["accent"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.134", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "La fête du Travail est le premier mai.", en: "Labor Day is on May first.", notes: "Even inside a fixed holiday name, 'mai' is never capitalized in French.", ipa: "la fɛt dy tʁa.vaj ɛ lə pʁə.mje mɛ", tags: ["orthographe"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.136", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "En France, le onze novembre commémore la fin de la Première Guerre mondiale.", en: "In France, November eleventh commemorates the end of World War One.", ipa: "ɑ̃ fʁɑ̃s lə ɔ̃z nɔ.vɑ̃bʁ kɔ.me.mɔʁ la fɛ̃ də la pʁə.mjɛʁ gɛʁ mɔ̃.djal", notes: "'Novembre' stays lowercase even though 'onze novembre' names a famous historical date.", tags: ["orthographe"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.139", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Le carnaval de Nice se déroule en février.", en: "The Nice carnival takes place in February.", ipa: "lə kaʁ.na.val də nis sə de.ʁul ɑ̃ fe.vʁi.e", notes: "'Février' needs its accent aigu even in a place name context like 'le carnaval de Nice'.", tags: ["accent"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.142", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Chaque année, le feu d'artifice a lieu le quatorze juillet.", en: "Every year, the fireworks display takes place on July fourteenth.", ipa: "ʃak a.ne lə fø daʁ.ti.fis a ljø lə ka.tɔʁz ʒɥi.jɛ", tags: ["orthographe"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.207", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Le mois de février est le plus court de l'année.", en: "The month of February is the shortest of the year.", notes: "{\"tiles\":[{\"w\":\"Le mois de février\",\"t\":\"the month of february\"},{\"w\":\"est\",\"t\":\"is\"},{\"w\":\"le plus court\",\"t\":\"the shortest\"},{\"w\":\"de l'année.\",\"t\":\"of the year\"}]}", tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },

  // ── jours-et-mois: the twelve month headwords, which the brief said did not
  //    exist. Imported verbatim; the five nasal repairs are applied separately
  //    by RESPELL_REPAIRS so the change is printed rather than smuggled in.
  {
    id: "fr.sons.jours-et-mois.008", kind: "word", level: "sons", theme: "jours-et-mois", fr: "janvier", en: "January", ipa: "/ʒɑ̃.vje/", respell: "zhahn-VYAY", notes: "Months are not capitalized. In January = en janvier. Say 'zhahn-vyay'.", tags: ["jours-et-mois","mois"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.jours-et-mois.009", kind: "word", level: "sons", theme: "jours-et-mois", fr: "février", en: "February", ipa: "/fe.vʁi.je/", respell: "fay-vree-YAY", notes: "Say 'fay-vree-yay'. In February = en février.", tags: ["jours-et-mois","mois"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.jours-et-mois.010", kind: "word", level: "sons", theme: "jours-et-mois", fr: "mars", en: "March", ipa: "/maʁs/", respell: "MARS", notes: "Unusual: the final s IS pronounced, 'marss'. Same word as the planet Mars.", tags: ["jours-et-mois","mois"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.jours-et-mois.011", kind: "word", level: "sons", theme: "jours-et-mois", fr: "avril", en: "April", ipa: "/a.vʁil/", respell: "ah-VREEL", notes: "The final l is pronounced: 'ah-vreel'. En avril = in April.", tags: ["jours-et-mois","mois"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.jours-et-mois.012", kind: "word", level: "sons", theme: "jours-et-mois", fr: "mai", en: "May", ipa: "/mɛ/", respell: "MEH", notes: "Say 'meh'. En mai = in May. Le premier mai is a national holiday in France.", tags: ["jours-et-mois","mois"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.jours-et-mois.013", kind: "word", level: "sons", theme: "jours-et-mois", fr: "juin", en: "June", ipa: "/ʒɥɛ̃/", respell: "ZHWAN", notes: "One nasal syllable: 'zhwan'. Careful not to confuse with juillet.", tags: ["jours-et-mois","mois"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.jours-et-mois.014", kind: "word", level: "sons", theme: "jours-et-mois", fr: "juillet", en: "July", ipa: "/ʒɥi.jɛ/", respell: "zhwee-YEH", notes: "Say 'zhwee-yeh', the final t is silent. Le 14 juillet is the French national day.", tags: ["jours-et-mois","mois"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.jours-et-mois.015", kind: "word", level: "sons", theme: "jours-et-mois", fr: "août", en: "August", ipa: "/ut/", respell: "OOT", notes: "Usually just 'oot', one tiny syllable. Many French people take vacation en août.", tags: ["jours-et-mois","mois"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.jours-et-mois.016", kind: "word", level: "sons", theme: "jours-et-mois", fr: "septembre", en: "September", ipa: "/sɛp.tɑ̃bʁ/", respell: "sep-TAHNBR", notes: "Say 'sep-tahnbr'. En septembre = in September, back-to-school month in France.", tags: ["jours-et-mois","mois"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.jours-et-mois.017", kind: "word", level: "sons", theme: "jours-et-mois", fr: "octobre", en: "October", ipa: "/ɔk.tɔbʁ/", respell: "ok-TOBR", notes: "Say 'ok-tobr'. The final -bre is one quick sound, no extra vowel.", tags: ["jours-et-mois","mois"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.jours-et-mois.018", kind: "word", level: "sons", theme: "jours-et-mois", fr: "novembre", en: "November", ipa: "/nɔ.vɑ̃bʁ/", respell: "noh-VAHNBR", notes: "Say 'noh-vahnbr' with a nasal middle syllable.", tags: ["jours-et-mois","mois"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.jours-et-mois.019", kind: "word", level: "sons", theme: "jours-et-mois", fr: "décembre", en: "December", ipa: "/de.sɑ̃bʁ/", respell: "day-SAHNBR", notes: "Say 'day-sahnbr'. En décembre = in December.", tags: ["jours-et-mois","mois"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },

  // ── jours-et-mois: the frame around a month. Four, all gender-safe. ──
  {
    id: "fr.sons.jours-et-mois.037", kind: "word", level: "sons", theme: "jours-et-mois", fr: "le mois prochain", en: "next month", ipa: "/mwa pʁɔ.ʃɛ̃/", respell: "LUH MWAH proh-SHAN", gender: "m", notes: "Say 'mwah proh-shan'. Prochain agrees with the masculine mois, so no final n sound.", tags: ["jours-et-mois","phrase"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.jours-et-mois.038", kind: "word", level: "sons", theme: "jours-et-mois", fr: "le mois dernier", en: "last month", ipa: "/mwa dɛʁ.nje/", respell: "LUH MWAH dehr-NYAY", gender: "m", notes: "Say 'mwah dair-nyay'. The r of dernier is silent in the masculine ending.", tags: ["jours-et-mois","phrase"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.jours-et-mois.127", kind: "phrase", level: "sons", theme: "jours-et-mois", fr: "tous les mois", en: "every month", ipa: "/tu le mwa/", respell: "too lay MWAH", notes: "The s in tous and mois both stay silent here.", tags: ["schedule"], drills: ["flashcard","voiceflash"], version: 1,
  },
  {
    id: "fr.sons.jours-et-mois.129", kind: "phrase", level: "sons", theme: "jours-et-mois", fr: "une fois par mois", en: "once a month", ipa: "/yn fwa paʁ mwa/", respell: "ewn fwah pahr MWAH", notes: "Swap mois for an or semaine to change the frequency.", tags: ["schedule"], drills: ["flashcard","voiceflash"], version: 1,
  },
];

export const IMPORTED_IDS: string[] = IMPORTED.map((r) => r.id);

/** Every id this lesson names that it did not author. */
export const BORROWED_IDS: string[] = [...new Set([...REUSED_IDS, ...IMPORTED_IDS])];

/* ─── The nine contrast pairs ──────────────────────────────────────────────
 *
 * Declared as [month, date] rather than derived from `pairWith` alone, because
 * five of the nine have a half that this lesson does not author and so carries
 * no `pairWith` of its own. The batch asserts that every authored half's
 * `pairWith` agrees with this table, that every id resolves, and that the two
 * halves differ by the FRAME and nothing else.                              */
export const CONTRAST_PAIRS: [string, string][] = [
  ['fr.a1.jours-et-mois.046', 'fr.a1.jours-et-mois.248'], // janvier
  ['fr.a1.jours-et-mois.249', 'fr.a1.nombres.052'],       // mars
  ['fr.a1.jours-et-mois.250', 'fr.a1.jours-et-mois.134'], // mai
  ['fr.a1.jours-et-mois.251', 'fr.a1.jours-et-mois.252'], // juin
  ['fr.a1.jours-et-mois.253', 'fr.a1.jours-et-mois.254'], // juillet
  ['fr.a1.jours-et-mois.255', 'fr.a1.jours-et-mois.256'], // août
  ['fr.a1.jours-et-mois.057', 'fr.a1.ecole.239'],         // septembre
  ['fr.a1.jours-et-mois.086', 'fr.a1.jours-et-mois.257'], // octobre
  ['fr.a1.jours-et-mois.258', 'fr.a1.jours-et-mois.259'], // décembre
];

/** The month each pair is about, index-aligned with CONTRAST_PAIRS. */
export const PAIR_MONTHS: Month[] = [
  'janvier', 'mars', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'décembre',
];

/** The two frames each pair puts in a table cell, lifted out of the sentences.
 *
 *  DECLARED rather than pulled out with a regex. A regex over a sentence is a
 *  second definition of "the frame" free to drift from the one the teaching
 *  uses, and it fails silently by producing a shorter match rather than none:
 *  the cell would still render, just wrong. Both lists are index-aligned with
 *  CONTRAST_PAIRS, every cell is three words or fewer because `tapTable` does
 *  not own its layout, and the batch asserts each string really is a substring
 *  of the sentence it claims to come from. */
export const PAIR_MONTH_FRAMES: string[] = PAIR_MONTHS.map((m) => `en ${m}`);

export const PAIR_DATE_FRAMES: string[] = [
  'le premier janvier',
  'le douze mars',
  'le premier mai',
  'le douze juin',
  'le quatorze juillet',
  'le premier août',
  'le premier septembre',
  'le trois octobre',
  'le douze décembre',
];

/* ─── Reading a row's text without retyping it ─────────────────────────────
 *
 * Every French sentence a section displays is read through frOf(), so no screen
 * carries its own copy of a corpus row and no two screens can drift. Throws on
 * an unknown id: a card silently missing its sentence looks exactly like a card
 * that never wanted one.                                                     */

const ALL_ROWS: { id: string; fr: string; en: string }[] = [
  ...MOIS.map((w) => ({ id: w.id, fr: w.fr, en: w.en })),
  ...IMPORTED.map((w) => ({ id: w.id, fr: w.fr, en: w.en })),
  ...REUSED.map((w) => ({ id: w.id, fr: w.fr, en: w.en })),
];

const BY_ID = new Map(ALL_ROWS.map((r) => [r.id, r] as const));

export function frOf(id: string): string {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`a1.09: no French authored or recorded for "${id}"`);
  return r.fr;
}

export function enOf(id: string): string {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`a1.09: no gloss authored or recorded for "${id}"`);
  return r.en;
}

/** The month a row is about, for the coverage assertion. Reads the recorded
 *  text rather than a hand-kept table, so a row that stops mentioning its month
 *  stops counting for it. Case-sensitive: French months are always lowercase,
 *  and lowercasing both sides would make the planet Mars and the month mars
 *  indistinguishable, which is the check a1.08 had to make case-sensitive after
 *  its own test fired on an etymology card. */
export function monthsIn(fr: string): Month[] {
  return THE_TWELVE.filter((m) => {
    const i = fr.indexOf(m);
    if (i < 0) return false;
    const before = i === 0 ? ' ' : fr[i - 1];
    const after = fr[i + m.length] ?? ' ';
    return !/[a-zà-ÿ]/i.test(before) && !/[a-zà-ÿ]/i.test(after);
  });
}
