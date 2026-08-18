// The a2.09 corpus: what this lesson had to author, what it imports, and what
// its brief got wrong.
//
// THIS FILE IS THE SINGLE SOURCE OF TRUTH for the 26 authored entries below and
// for every respelling a2.09 puts on a screen. The lesson body reads `fr`, `ipa`,
// `respell` and `en` FROM HERE and never restates them.
//
// ── WHAT THE BRIEF GOT WRONG, MEASURED 2026-08-11 ──────────────────────────
//
// 1. THE IDENTITY BLOCK HAS `title` AND `sub` SWAPPED, exactly as a2.01's did,
//    and its `sub` is not in the database at all. The unit dump says
//    t: "-ER Verbs: The Exceptions", sub: "Les verbes en -ER : exceptions".
//    The brief's `sub` — "-ger, -cer, -eler, -eter and the é_er patterns" —
//    exists nowhere in Postgres. The brief said to copy from the probe rather
//    than from itself and that instruction was the correct one.
//
//    This is not cosmetic. The brief's whole `-yer` argument rests on "the sub is
//    fixed and lists four", so the constraint it was arguing under does not
//    exist: the real sub names no pattern at all. See THE -yer DECISION below.
//
// 2. "Whether any of these verbs already exist as corpus items. Probe."
//    TWELVE OF THE THIRTEEN EXIST, most of them several times over, and so does
//    every other verb this lesson wanted. `placer` is the only absence in the
//    brief's list and this lesson does not teach it. THIS LESSON AUTHORS NOT ONE
//    INFINITIVE. Probed with real orthography; `préférer`, `espérer` and
//    `répéter` were probed accented, as the brief warned.
//
// 3. "typeIn is the format. The entire lesson is a spelling distinction, and no
//    ear question can test it." HALF TRUE, AND THE FALSE HALF IS THE IMPORTANT
//    ONE. `fold()` in answer.logic.ts normalises to NFD and strips every
//    combining mark before comparing, so `commençons` and `commencons` are the
//    same answer, and so are `préfère`, `préfére` and `prefere`. `normalizeFr()`
//    in score.ts, which is what the DICTÉE compares with, does exactly the same.
//
//    So: no typed, spotted or assembled surface in this app can test a cedilla or
//    an accent. Two of this lesson's four patterns are therefore testable only by
//    `mcq`, where options are picked rather than typed. The quiz mix is built
//    around that measurement and the reasoning is in the lesson file.
//
// 4. "`nous mangeons` and `nous commençons` are both present." They are, in
//    Postgres: 30 sentences carry `nous mangeons` and 1 carries `nous
//    commençons`. Every one was written for its own theme, which is why none of
//    them is used here. See below.
//
// ── What the corpus could not supply, and so what is authored ──────────────
//
// The corpus has the forms and no minimal pairs. Counted 2026-08-11:
// `nous mangeons` 30 sentences, `je préfère` 40, `j'achète` 15, `nous appelons`
// 7, `nous achetons` 7, `nous préférons` 6, `nous voyageons` 5, `j'appelle` 2,
// `nous commençons` 1, `je jette` 0. Every one of them was written for its own
// theme, so comparing two of them compares their subject matter as well as their
// person, and THE ONE THING this lesson has to show is two sentences in which
// nothing moves except the person and one letter of the verb.
//
// That is the whole authoring case. 26 rows:
//
//   soft      6   -ger and -cer: the nous cell against the cells around it
//   silent    6   the stem moving exactly where the ending goes silent
//   split     5   -eler against -eter, and the l/ll pair a dictée can score
//   both      2   protéger, which runs BOTH mechanisms in one paradigm
//   apply     7   the patterns used by a person, across all six forms
//
// ── kind: every authored entry is a `sentence`, deliberately ───────────────
//
// The ledger settled this for the level: only infinitives and full sentences are
// corpus rows, never a bare conjugated form. A bare `appelles` as a row would be
// served by the flashcard hub as a card with no subject.
//
// flashhub-coverage.test.ts also fails the build when two NON-sentence rows in
// one theme share an `fr`, and this lesson authors near-identical pairs on
// purpose (`Tu appelles Marie.` against `Nous appelons Marie.`). They are
// sentences, they are stored as sentences, and that rule leaves them alone.
//
// No authored row carries `gender` and none is a single word, so nothing here can
// join a1.03's measured ending population. The batch proves that through the real
// `endingPopulation` rather than claiming it.
//
// ── THE -yer DECISION ──────────────────────────────────────────────────────
//
// `payer` / `essayer` are NAMED AS CONTEXT ON ONE CARD and taught nowhere: no
// corpus row, no itemId, no deck, no drill, no dictée, no quiz answer. This is
// a2.01's own hand-off shape, which named `manger` on exactly one card in order
// to give it away.
//
// Two reasons, and the first is not the one the brief expected.
//
// The brief's argument was that the `sub` lists four patterns and would read as
// incomplete if five were taught. That constraint is not real: the `sub` in
// Postgres is "Les verbes en -ER : exceptions" and names no pattern.
//
// The reason that survives is about the rule itself. `-yer` is the SAME mechanism
// as `-eler`/`-eter`/`é_er` — the stem responds when the ending goes silent — so
// naming it strengthens the claim this lesson is built on. But `payer` has two
// accepted outputs, `je paie` and `je paye`, and no other pattern here does. A
// lesson whose hardest screen is a trapDrill insisting that `appeler` doubles and
// `acheter` does not cannot, three missions later, hand the learner a pattern
// where both answers are right. It is named, placed in the same mechanism, and
// left for a lesson that can give it the caveat it needs.
//
// ── What is NOT here, and why ──────────────────────────────────────────────
//
// - NO `aller`. It ends in -er and is neither regular nor a stem-changer. It is
//   named once as a trap and conjugated nowhere. That is a2.02, seq 5.
// - NO -IR OR -RE VERB. a2.10 and a2.11, seq 3 and 4.
// - NO PAST TENSE and NO IMPERFECT. `nous mangions` and `je préférais` are where
//   these patterns pay off a second time, and both tenses belong to later units.
//   Every authored row here is a simple present with an explicit subject.
// - NO WRONG SENTENCES. `nous commencons` is the error this lesson exists to
//   stop and it is never a corpus row, because a row is released to spaced
//   repetition. Wrong forms live in `commonErrors`, in the scene's break card and
//   in the quiz's mcq options, which are the surfaces that show a thing to
//   reject it.
//
// ── Respelling convention, and the silent ending ───────────────────────────
//
// The ledger binds the level: hyphenated syllables, stressed syllable
// capitalised, nasal vowels closed with a SUPERSCRIPT n and never a plain n or m,
// /ø œ/ as EU, /y/ as Ü, and A SILENT ENDING IS WRITTEN AS NOTHING. `il commence`
// is `eel koh-MAHⁿS`, not `koh-MAHⁿ-Suh`.
//
// That last rule is what makes this lesson's respellings carry its teaching:
// `je préfère` is `pray-FEHR` and `nous préférons` is `pray-fay-ROHⁿ`, and the
// vowel really has moved. Where NOTHING moves — `je mange` against
// `nous mangeons` — the stem syllable is the same string in both, and that
// identity is the -ger/-cer teaching: the spelling changed so the sound would
// not have to.
//
// ── The word-internal nasal, which the shared checker cannot see ───────────
//
// `hasPlainNasalFor` needs the n or m to END a token, so `koh-MAHNS`, `lahns`
// and `mahnzh` would all sail through it while being wrong. This is invariants
// §3's blind spot and it bites three shapes here, all of them common:
//
//   commence / commences / commencent   koh-MAHⁿS
//   lancent                             lahⁿs
//   mange / manges / mangent            mahⁿzh
//
// All three are asserted BY NAME in the batch and in the test, as well as through
// the shared checker.
//
// ── The three respellings repaired, and why each one is a violation ────────
//
// Not variants. Each closes a genuine nasal vowel with a plain n, each is flagged
// by `hasPlainNasalFor` rather than by a judgement here, and all three are on
// rows this lesson displays as cards. `commencer` is the one that matters most:
// the lesson prints it beside `nous commençons`, and a card reading `koh-mahn-SAY`
// next to `koh-mahⁿ-SOHⁿ` teaches a difference in the vowel that is not there.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import { unitRef } from './_unit-ref.ts';

/* ─── The id block ─────────────────────────────────────────────────────────
 *
 * fr.a2.verbes.141 .. .180, allocated in A2-BATCH-1-LEDGER.md. `fr.a2.verbes`
 * held 125 rows with NO GAPS and max .125 when this block was claimed, so
 * .126..140 is a documented hole: a2.01 took .101..140 and used .101..125. The
 * batch checks the row COUNT as well as the maximum, because a concurrent lesson
 * landing below the top is invisible to a highest-id check, which is how a1.20
 * lost an hour.                                                               */
export const OWNED_ID_RANGE = { from: 'fr.a2.verbes.141', to: 'fr.a2.verbes.180' } as const;

/** The theme this lesson writes into. One decision, made in the ledger. */
export const THEME = 'verbes';

/** The four patterns, named once. Every screen, the sheet and the test read THIS
 *  rather than a hand list, so a pattern cannot be quietly dropped from one
 *  surface while surviving on another.
 *
 *  `mechanism` is the claim the lesson is built on: FOUR patterns and TWO
 *  mechanisms. It is stored rather than asserted in prose so the grid, the
 *  roundup and the test all count the same thing. */
export type PatternKey = 'ger' | 'cer' | 'eler-eter' | 'e-er';
export const PATTERNS: {
  key: PatternKey;
  label: string;
  /** The form the learner will actually write. */
  form: string;
  /** WHY the spelling moves. Asserted by the test on every teaching surface, or
   *  the next author strips these as filler and the lesson becomes four lists. */
  reason: string;
  /** Which cells of the paradigm move. */
  where: string;
  mechanism: 'protect the consonant' | 'the ending went silent';
}[] = [
  {
    key: 'ger',
    label: '-ger',
    form: 'nous mangeons',
    reason: 'the e keeps the g soft before o',
    where: 'the nous cell, and nowhere else',
    mechanism: 'protect the consonant',
  },
  {
    key: 'cer',
    label: '-cer',
    form: 'nous commençons',
    reason: 'the cedilla keeps the c soft before o',
    where: 'the nous cell, and nowhere else',
    mechanism: 'protect the consonant',
  },
  {
    key: 'eler-eter',
    label: '-eler and -eter',
    form: "j'appelle · j'achète",
    reason: 'the doubled l and the accent both write the same open è',
    where: 'the four cells where the ending is silent',
    mechanism: 'the ending went silent',
  },
  {
    key: 'e-er',
    label: 'é_er',
    form: 'je préfère',
    reason: 'é opens to è once it is the last sound in the word',
    where: 'the four cells where the ending is silent',
    mechanism: 'the ending went silent',
  },
];

/** The two mechanisms, derived from PATTERNS rather than typed. If a pattern is
 *  ever reclassified this moves with it and "two mechanisms, not four" stops
 *  being a claim nobody checks. */
export const MECHANISMS: string[] = [...new Set(PATTERNS.map((p) => p.mechanism))];

/** A corpus entry plus the lesson-facing display data the renderer needs. */
export type ExcSentence = Omit<Item, 'drills'> & {
  /** Which person this sentence puts on screen, in paradigm order. */
  person: 'je' | 'tu' | 'il' | 'nous' | 'vous' | 'ils' | 'on';
  /** Which pattern this row is evidence for. */
  pattern: PatternKey;
  /** Does the stem MOVE in this cell? The whole lesson is the answer to this
   *  question per cell, so it is stored rather than restated per screen. */
  moves: boolean;
  /** Which teaching family. Drives the drill pools and the deckTranche slices so
   *  neither restates a word list. */
  family: 'soft' | 'silent' | 'split' | 'both' | 'apply';
  drills: Item['drills'];
};

/** Speakable: the mic-scored deck runs `voiceflash`, and an item without it
 *  renders in a speak mission as a card the mic cannot score. */
const S: Item['drills'] = ['sentence', 'flashcard', 'voiceflash', 'review'];
/** Speakable and spellable. Only on rows the dictée names, and every one of those
 *  is under the 16-letter limit so it spells from LETTERS. */
const SD: Item['drills'] = ['sentence', 'flashcard', 'voiceflash', 'review', 'dictation'];

/** The 26 authored entries, in sequence order. */
export const VERBES_ER_EXC: ExcSentence[] = [
  /* ── soft: -ger and -cer, where the change is and where it is not ─────────
   *
   * Six rows, three pairs, and inside each pair NOTHING moves but the person.
   * The stem syllable is respelled with the SAME string on both sides
   * (`mahⁿzh` / `mahⁿ-ZHOHⁿ`, `koh-MAHⁿS` / `koh-mahⁿ-SOHⁿ`), because that is the
   * fact: the letter was added so the sound would stay put. The test asserts the
   * stem syllable survives in both halves rather than trusting it to an edit.
   *
   * The third pair is `vous` against `nous` on purpose. A learner who meets only
   * je/nous concludes the change belongs to the plural; `vous voyagez` is the row
   * that shows it belongs to ONE cell.                                        */
  { id: 'fr.a2.verbes.141', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je mange ici.', en: 'I eat here.', ipa: '/ʒə mɑ̃ʒ i.si/', respell: 'zhuh mahⁿzh ee-SEE', person: 'je', pattern: 'ger', moves: false, family: 'soft', tags: ['er-verb', 'stem-change', 'ger', 'nasal'], drills: SD, audioRef: null, version: 1, notes: 'No change. The ending is silent and there is no o for the g to go hard in front of.' },
  { id: 'fr.a2.verbes.142', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous mangeons ici.', en: 'We eat here.', ipa: '/nu mɑ̃.ʒɔ̃ i.si/', respell: 'noo mahⁿ-ZHOHⁿ ee-SEE', person: 'nous', pattern: 'ger', moves: true, family: 'soft', tags: ['er-verb', 'stem-change', 'ger', 'nasal'], drills: SD, audioRef: null, version: 1, notes: 'The e is written so the g stays soft in front of the o. Without it: mangons, with a hard g.' },
  { id: 'fr.a2.verbes.143', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Il commence ici.', en: 'He starts here.', ipa: '/il kɔ.mɑ̃s i.si/', respell: 'eel koh-MAHⁿS ee-SEE', person: 'il', pattern: 'cer', moves: false, family: 'soft', tags: ['er-verb', 'stem-change', 'cer', 'nasal'], drills: SD, audioRef: null, version: 1, notes: 'No change. The plain c is already soft in front of the silent e.' },
  { id: 'fr.a2.verbes.144', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous commençons.', en: 'We start.', ipa: '/nu kɔ.mɑ̃.sɔ̃/', respell: 'noo koh-mahⁿ-SOHⁿ', person: 'nous', pattern: 'cer', moves: true, family: 'soft', tags: ['er-verb', 'stem-change', 'cer', 'nasal'], drills: SD, audioRef: null, version: 1, notes: 'The tail under the c is what keeps it soft in front of the o. Without it: commencons, said koh-mahⁿ-KOHⁿ.' },
  { id: 'fr.a2.verbes.145', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Vous voyagez en train.', en: 'You travel by train.', ipa: '/vu vwa.ja.ʒe ɑ̃ tʁɛ̃/', respell: 'voo vwah-yah-ZHAY ahⁿ TRAⁿ', person: 'vous', pattern: 'ger', moves: false, family: 'soft', tags: ['er-verb', 'stem-change', 'ger', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'No change. The ending starts with e, not o, so the g was never in danger.' },
  { id: 'fr.a2.verbes.146', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous voyageons en train.', en: 'We travel by train.', ipa: '/nu vwa.ja.ʒɔ̃ ɑ̃ tʁɛ̃/', respell: 'noo vwah-yah-ZHOHⁿ ahⁿ TRAⁿ', person: 'nous', pattern: 'ger', moves: true, family: 'soft', tags: ['er-verb', 'stem-change', 'ger', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'The same e as mangeons, on a second verb, so the pattern reads as a system rather than a word.' },

  /* ── silent: the stem moves exactly where the ending goes silent ──────────
   *
   * Three pairs, three verbs, and the split inside each pair is the fact a2.01
   * taught: -e and -ent are silent, -ons is a syllable. The row where the ending
   * sounds is the row where the stem stays put, every time. That is the claim,
   * and stating it on three different verbs is what makes it a rule rather than
   * a fact about préférer.                                                    */
  { id: 'fr.a2.verbes.147', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je préfère le thé.', en: 'I prefer tea.', ipa: '/ʒə pʁe.fɛʁ lə te/', respell: 'zhuh pray-FEHR luh TAY', person: 'je', pattern: 'e-er', moves: true, family: 'silent', tags: ['er-verb', 'stem-change', 'e-er'], drills: S, audioRef: null, version: 1, notes: 'The ending is silent, so fère is the last sound in the word and the vowel opens.' },
  { id: 'fr.a2.verbes.148', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous préférons le thé.', en: 'We prefer tea.', ipa: '/nu pʁe.fe.ʁɔ̃ lə te/', respell: 'noo pray-fay-ROHⁿ luh TAY', person: 'nous', pattern: 'e-er', moves: false, family: 'silent', tags: ['er-verb', 'stem-change', 'e-er', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'The ending is a syllable of its own, so the é keeps its closed sound and its own accent.' },
  { id: 'fr.a2.verbes.149', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Elle achète du pain.', en: 'She buys bread.', ipa: '/ɛl a.ʃɛt dy pɛ̃/', respell: 'el ah-SHET dü PAⁿ', person: 'il', pattern: 'eler-eter', moves: true, family: 'silent', tags: ['er-verb', 'stem-change', 'eler-eter', 'nasal'], drills: SD, audioRef: null, version: 1, notes: 'The silent -e pulls the stress back, and the bare e of the stem opens to è.' },
  { id: 'fr.a2.verbes.150', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous achetons du pain.', en: 'We buy bread.', ipa: '/nu.zaʃ.tɔ̃ dy pɛ̃/', respell: 'noo zahsh-TOHⁿ dü PAⁿ', person: 'nous', pattern: 'eler-eter', moves: false, family: 'silent', tags: ['er-verb', 'stem-change', 'eler-eter', 'liaison', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'The ending sounds, so nothing moves and the e disappears from the sound altogether.' },
  { id: 'fr.a2.verbes.151', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Ils répètent la phrase.', en: 'They repeat the sentence.', ipa: '/il ʁe.pɛt la fʁaz/', respell: 'eel ray-PET la FRAZ', person: 'ils', pattern: 'e-er', moves: true, family: 'silent', tags: ['er-verb', 'stem-change', 'e-er'], drills: S, audioRef: null, version: 1, notes: 'The -ent is four letters and no sound, so the stem is the last thing heard and the vowel opens.' },
  { id: 'fr.a2.verbes.152', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous répétons la phrase.', en: 'We repeat the sentence.', ipa: '/nu ʁe.pe.tɔ̃ la fʁaz/', respell: 'noo ray-pay-TOHⁿ la FRAZ', person: 'nous', pattern: 'e-er', moves: false, family: 'silent', tags: ['er-verb', 'stem-change', 'e-er', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'Same verb, audible ending, closed vowel. The rule is about the ending, not about the verb.' },

  /* ── split: -eler against -eter, and the pair a dictée can actually score ──
   *
   * `appelles` against `achètes` is THE TRAP: two infinitives of the same shape,
   * two outputs, and nothing in the ending predicts which.
   *
   * `appelles` / `appelons` is also the only pair in this lesson whose difference
   * survives `normalizeFr`, which is what the dictée compares with and which
   * strips every combining mark. A doubled consonant is letters; an accent and a
   * cedilla are not. So this pair carries the dictée weight the accent rows
   * cannot.                                                                    */
  { id: 'fr.a2.verbes.153', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Tu appelles Marie.', en: 'You are calling Marie.', ipa: '/ty a.pɛl ma.ʁi/', respell: 'tü ah-PEL ma-REE', person: 'tu', pattern: 'eler-eter', moves: true, family: 'split', tags: ['er-verb', 'stem-change', 'eler-eter', 'doubles'], drills: SD, audioRef: null, version: 1, notes: 'Two l. The doubled consonant is how -eler writes the open è.' },
  { id: 'fr.a2.verbes.154', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous appelons Marie.', en: 'We are calling Marie.', ipa: '/nu.za.plɔ̃ ma.ʁi/', respell: 'noo zah-PLOHⁿ ma-REE', person: 'nous', pattern: 'eler-eter', moves: false, family: 'split', tags: ['er-verb', 'stem-change', 'eler-eter', 'liaison', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'One l. The ending sounds, so the stem goes back to the spelling the infinitive had.' },
  { id: 'fr.a2.verbes.155', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Tu achètes du pain.', en: 'You buy bread.', ipa: '/ty a.ʃɛt dy pɛ̃/', respell: 'tü ah-SHET dü PAⁿ', person: 'tu', pattern: 'eler-eter', moves: true, family: 'split', tags: ['er-verb', 'stem-change', 'eler-eter', 'accent', 'nasal'], drills: SD, audioRef: null, version: 1, notes: 'Same shape of infinitive as appeler, same open è, and an accent instead of a doubled letter.' },
  { id: 'fr.a2.verbes.156', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je jette le ticket.', en: 'I throw the ticket away.', ipa: '/ʒə ʒɛt lə ti.kɛ/', respell: 'zhuh ZHET luh tee-KEH', person: 'je', pattern: 'eler-eter', moves: true, family: 'split', tags: ['er-verb', 'stem-change', 'eler-eter', 'doubles'], drills: SD, audioRef: null, version: 1, notes: 'jeter doubles and acheter does not, and both end in -eter. This is the pair that has to be learnt.' },
  { id: 'fr.a2.verbes.157', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous jetons tout.', en: 'We throw everything away.', ipa: '/nu ʒə.tɔ̃ tu/', respell: 'noo zhuh-TOHⁿ TOO', person: 'nous', pattern: 'eler-eter', moves: false, family: 'split', tags: ['er-verb', 'stem-change', 'eler-eter', 'nasal'], drills: SD, audioRef: null, version: 1, notes: 'One t. Whatever a verb does in the silent cells, nous and vous get the plain stem back.' },

  /* ── both: one verb, both mechanisms ──────────────────────────────────────
   *
   * `protéger` is é_er AND -ger, so its paradigm runs both mechanisms at once:
   * je protège takes the open è because the ending went silent, and nous
   * protégeons takes the e because a g met an o. Two rows, and they are the
   * payoff for "two mechanisms, not four": a learner holding four lists has
   * nowhere to put this verb, and a learner holding two mechanisms builds both
   * forms without being shown either.                                          */
  { id: 'fr.a2.verbes.158', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Je protège mes photos.', en: 'I protect my photos.', ipa: '/ʒə pʁɔ.tɛʒ me fɔ.to/', respell: 'zhuh proh-TEZH may fo-TO', person: 'je', pattern: 'e-er', moves: true, family: 'both', tags: ['er-verb', 'stem-change', 'e-er'], drills: S, audioRef: null, version: 1, notes: 'The ending went silent, so the é opens to è. That is the second mechanism.' },
  { id: 'fr.a2.verbes.159', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous protégeons nos photos.', en: 'We protect our photos.', ipa: '/nu pʁɔ.te.ʒɔ̃ no fɔ.to/', respell: 'noo proh-tay-ZHOHⁿ no fo-TO', person: 'nous', pattern: 'ger', moves: true, family: 'both', tags: ['er-verb', 'stem-change', 'ger', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'The same verb, the other mechanism: a g in front of an o, so the e goes in and the é stays closed.' },

  /* ── apply: the patterns used by a person ─────────────────────────────────
   *
   * Seven sentences across all six forms and seven different verbs from the
   * seventeen imported, so the patterns are met as things people write rather
   * than as lists that were memorised. Simple present throughout.             */
  { id: 'fr.a2.verbes.160', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Tu commences le cours lundi.', en: 'You start the class on Monday.', ipa: '/ty kɔ.mɑ̃s lə kuʁ lœ̃.di/', respell: 'tü koh-MAHⁿS luh koor luhⁿ-DEE', person: 'tu', pattern: 'cer', moves: false, family: 'apply', tags: ['er-verb', 'stem-change', 'cer', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'tu takes a silent -es and the c is left alone. Only nous touches it.' },
  { id: 'fr.a2.verbes.161', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous partageons une pizza.', en: 'We are sharing a pizza.', ipa: '/nu paʁ.ta.ʒɔ̃ yn pid.za/', respell: 'noo par-tah-ZHOHⁿ ün peed-ZA', person: 'nous', pattern: 'ger', moves: true, family: 'apply', tags: ['er-verb', 'stem-change', 'ger', 'nasal'], drills: S, audioRef: null, version: 1 },
  { id: 'fr.a2.verbes.162', kind: 'sentence', level: 'a2', theme: THEME, fr: "J'espère arriver avant midi.", en: 'I hope to arrive before midday.', ipa: '/ʒɛs.pɛʁ a.ʁi.ve a.vɑ̃ mi.di/', respell: 'zhes-PEHR a-ree-vay a-vahⁿ mee-DEE', person: 'je', pattern: 'e-er', moves: true, family: 'apply', tags: ['er-verb', 'stem-change', 'e-er', 'nasal'], drills: S, audioRef: null, version: 1, notes: `j espère, and the verb after it stays in the naming form, which is ${unitRef('a2.01')} territory.` },
  { id: 'fr.a2.verbes.163', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Vous achetez au marché.', en: 'You shop at the market.', ipa: '/vu.zaʃ.te o maʁ.ʃe/', respell: 'voo zahsh-TAY o mar-SHAY', person: 'vous', pattern: 'eler-eter', moves: false, family: 'apply', tags: ['er-verb', 'stem-change', 'eler-eter', 'liaison'], drills: S, audioRef: null, version: 1, notes: 'vous keeps the plain stem, exactly like nous. Two of the six cells never move.' },
  { id: 'fr.a2.verbes.164', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Ils lancent le projet lundi.', en: 'They launch the project on Monday.', ipa: '/il lɑ̃s lə pʁɔ.ʒɛ lœ̃.di/', respell: 'eel lahⁿs luh pro-ZHEH luhⁿ-DEE', person: 'ils', pattern: 'cer', moves: false, family: 'apply', tags: ['er-verb', 'stem-change', 'cer', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'The -ent is silent and the c is soft in front of it, so lancer looks like any other verb here.' },
  { id: 'fr.a2.verbes.165', kind: 'sentence', level: 'a2', theme: THEME, fr: 'On commence à sept heures.', en: 'We start at seven.', ipa: '/ɔ̃ kɔ.mɑ̃s a sɛ tœʁ/', respell: 'ohⁿ koh-MAHⁿS a seh-TEUR', person: 'on', pattern: 'cer', moves: false, family: 'apply', tags: ['er-verb', 'stem-change', 'cer', 'on', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'on takes the il form, so the cedilla never arrives. Said out loud, this change is one you rarely need.' },
  { id: 'fr.a2.verbes.166', kind: 'sentence', level: 'a2', theme: THEME, fr: 'Nous rangeons la cuisine.', en: 'We are tidying the kitchen.', ipa: '/nu ʁɑ̃.ʒɔ̃ la kɥi.zin/', respell: 'noo rahⁿ-ZHOHⁿ la kwee-ZEEN', person: 'nous', pattern: 'ger', moves: true, family: 'apply', tags: ['er-verb', 'stem-change', 'ger', 'nasal'], drills: S, audioRef: null, version: 1, notes: 'A third -ger verb taking the same e. The pattern is about the letters, not about the word.' },
];

/* ─── The seventeen ────────────────────────────────────────────────────────
 *
 * NONE OF THESE IS AUTHORED. Every one already exists in Postgres and is imported
 * by id; see verbes-er-exceptions-imported.ts for the recorded read, which the
 * batch verifies field by field before it writes anything.
 *
 * Grouped by pattern, because the grouping IS the lesson: a learner who leaves
 * with one undifferentiated list of seventeen has been taught nothing a
 * dictionary does not already do.                                             */
export const VERBS_BY_PATTERN: { key: PatternKey; group: string; verbs: readonly string[] }[] = [
  { key: 'ger', group: 'The -ger verbs', verbs: ['manger', 'nager', 'voyager', 'ranger', 'partager'] },
  { key: 'cer', group: 'The -cer verbs', verbs: ['commencer', 'lancer', 'effacer'] },
  { key: 'eler-eter', group: 'These double the consonant', verbs: ['appeler', 'rappeler', 'jeter'] },
  { key: 'eler-eter', group: 'These take the accent', verbs: ['acheter', 'geler'] },
  { key: 'e-er', group: 'The é_er verbs', verbs: ['préférer', 'espérer', 'répéter', 'protéger'] },
];

/** All seventeen, in learner order, derived from the grouping. */
export const THE_SEVENTEEN: readonly string[] = VERBS_BY_PATTERN.flatMap((g) => g.verbs);

/** The verbs that DOUBLE, and the verbs that take the ACCENT.
 *
 *  This split is the one thing in the lesson that cannot be derived from the
 *  spelling of the infinitive, and saying so is the teaching. Named here so the
 *  reference sheet, the trapDrill and the test all read one list. */
export const DOUBLERS: readonly string[] = ['appeler', 'rappeler', 'jeter'];
export const ACCENT_TAKERS: readonly string[] = ['acheter', 'geler'];

/** The changed forms this lesson OWNS, so a neighbour's guard can name them and
 *  so this lesson's own test can prove each reaches a screen.
 *
 *  a2.01 records the same list from the other side, as A209_CHANGED_STEMS, and
 *  its guard proves none of them reached one of ITS production surfaces. These
 *  are the same strings arriving where they belong. */
export const CHANGED_FORMS: readonly string[] = [
  'mangeons', 'nageons', 'voyageons', 'rangeons', 'partageons', 'protégeons',
  'commençons', 'lançons', 'effaçons',
  'appelle', 'appelles', 'appellent', 'rappelle', 'jette', 'jettes',
  'achète', 'achètes', 'achètent', 'gèle',
  'préfère', 'préfères', 'préfèrent', 'espère', 'répète', 'répètent', 'protège',
];

/** The -yer forms. NAMED AS CONTEXT ON ONE CARD, taught nowhere. See the header
 *  for the decision and its two reasons. The test asserts BOTH directions: the
 *  infinitive is named, and no conjugated form reaches a production surface. */
export const YER_INFINITIVES: readonly string[] = ['payer', 'essayer'];
export const YER_FORMS: readonly string[] = [
  'paie', 'paies', 'paient', 'paye', 'payes', 'payent',
  'essaie', 'essaies', 'essaient', 'essaye', 'essayent',
];

/** The forms of `aller` that must be conjugated nowhere. `aller` itself IS
 *  allowed, once, named as a trap. a2.02, seq 5. */
export const ALLER_FORMS: readonly string[] = ['vais', 'vas', 'va', 'allons', 'allez', 'vont'];

/* ─── Respelling repairs ───────────────────────────────────────────────────
 *
 * Three rows this lesson displays as cards that close a genuine nasal vowel with
 * a plain n. Every `from` is flagged by hasPlainNasalFor and every `to` is not,
 * and the batch checks BOTH directions through the REAL function rather than
 * trusting this table: a "repair" whose stored value was never a violation is
 * somebody else's variant being overwritten, and invariants §9 says not to do
 * that.                                                                       */
export const RESPELL_REPAIRS: { id: string; fr: string; from: string; to: string; why: string }[] = [
  { id: 'fr.sons.verbes-essentiels.036', fr: 'commencer', from: 'koh-mahn-SAY', to: 'koh-mahⁿ-SAY', why: '/kɔ.mɑ̃.se/; printed beside noo koh-mahⁿ-SOHⁿ, so the broken value teaches a vowel difference that is not there' },
  { id: 'fr.sons.verbes-essentiels.132', fr: 'lancer', from: 'lahn-SAY', to: 'lahⁿ-SAY', why: '/lɑ̃.se/, a nasal vowel' },
  { id: 'fr.a1.routines.033', fr: 'ranger', from: 'rahn-ZHAY', to: 'rahⁿ-ZHAY', why: '/ʁɑ̃.ʒe/, a nasal vowel' },
];

/* ─── Drill additions ──────────────────────────────────────────────────────
 *
 * A `practice` mission at skill 'speak' runs the mic-scored deck, which only
 * reads items carrying `voiceflash`. This lesson speaks its own authored
 * sentences, all of which carry it, so nothing is needed here. Kept as an empty
 * export rather than deleted: the batch, the merge and the test all walk it, and
 * a later edit that needs one has a place to put it.                          */
export const DRILL_ADDITIONS: { id: string; add: 'voiceflash'; why: string }[] = [];

/* ─── Accessors ────────────────────────────────────────────────────────────  */

/** Lookup by id. The lesson body builds every screen through this. */
export const BY_ID: ReadonlyMap<string, ExcSentence> = new Map(VERBES_ER_EXC.map((w) => [w.id, w]));

/** Every authored id, in sequence order. */
export const AUTHORED_IDS: string[] = VERBES_ER_EXC.map((w) => w.id);

/** The ids of one teaching family, in sequence order. */
export const familyIds = (f: ExcSentence['family']): string[] =>
  VERBES_ER_EXC.filter((w) => w.family === f).map((w) => w.id);

/** The ids showing one PATTERN, in sequence order. Lets the test assert every
 *  pattern reaches a screen against the corpus rather than a hand list. */
export const patternIds = (p: PatternKey): string[] =>
  VERBES_ER_EXC.filter((w) => w.pattern === p).map((w) => w.id);

/** THE PAIRS. Two rows in one frame where the ONLY difference is the person and
 *  the spelling that answers to it. The lesson, the drills and the test all read
 *  this one list, so a pair that loses its partner is visible rather than quiet.
 *
 *  `[moving, still]`: the first row is the cell where the stem changes and the
 *  second is a cell where it does not. For -ger and -cer that is the wrong way
 *  round from the learner's instinct, which is the point. */
export const MINIMAL_PAIRS: { moving: string; still: string; what: string }[] = [
  { moving: 'fr.a2.verbes.142', still: 'fr.a2.verbes.141', what: 'the e of mangeons, against the je form that does not need it' },
  { moving: 'fr.a2.verbes.144', still: 'fr.a2.verbes.143', what: 'the cedilla of commençons, against the il form that does not need it' },
  { moving: 'fr.a2.verbes.146', still: 'fr.a2.verbes.145', what: 'nous voyageons against vous voyagez, so the change is one cell and not the plural' },
  { moving: 'fr.a2.verbes.147', still: 'fr.a2.verbes.148', what: 'je préfère against nous préférons, the vowel that opens when the ending goes quiet' },
  { moving: 'fr.a2.verbes.149', still: 'fr.a2.verbes.150', what: 'elle achète against nous achetons' },
  { moving: 'fr.a2.verbes.151', still: 'fr.a2.verbes.152', what: 'ils répètent against nous répétons' },
  { moving: 'fr.a2.verbes.153', still: 'fr.a2.verbes.154', what: 'tu appelles against nous appelons, two l against one' },
  { moving: 'fr.a2.verbes.156', still: 'fr.a2.verbes.157', what: 'je jette against nous jetons, two t against one' },
];

/** THE STEM SOUND THAT MUST NOT MOVE.
 *
 *  For -ger and -cer the whole claim is that the letter went in SO THE SOUND
 *  WOULD NOT HAVE TO. If the two halves of a pair carry respellings whose stem
 *  syllable differs, the lesson is printing a difference it spends four missions
 *  denying, and no schema check would catch it.
 *
 *  Each entry is the syllable string that must appear, case-insensitively, in
 *  BOTH respellings of that pair. Asserted by the batch and by the test. */
export const SOFT_STEM_SOUND: { still: string; moving: string; sound: string }[] = [
  { still: 'fr.a2.verbes.141', moving: 'fr.a2.verbes.142', sound: 'mahⁿ' },
  { still: 'fr.a2.verbes.143', moving: 'fr.a2.verbes.144', sound: 'koh-mahⁿ' },
  { still: 'fr.a2.verbes.145', moving: 'fr.a2.verbes.146', sound: 'vwah-yah-zh' },
];

/** THE DICTÉE, AND WHAT IT CAN ACTUALLY GRADE.
 *
 *  MissionRich checks a dictée with `normalizeFr(filled) === normalizeFr(target)`,
 *  and normalizeFr strips every combining mark. So a learner who assembles
 *  `commencons` for `commençons` is marked correct, and one who assembles
 *  `achetes` for `achètes` is too.
 *
 *  Each row here is a target, the near miss a learner would actually make, and
 *  whether the app can tell them apart. The batch and the test run BOTH claims
 *  through the real `normalizeFr`: the scorable ones must differ and the
 *  unscorable ones must collide. Documenting the limit is not enough — a note
 *  saying "the accent is not scored" would be stale the day somebody changed
 *  normalizeFr, and this fails instead. */
export const DICTEE_NEAR_MISS: { id: string; wrong: string; scorable: boolean; what: string }[] = [
  { id: 'fr.a2.verbes.141', wrong: 'Je manje ici.', scorable: true, what: 'the baseline: nothing has changed yet, and a wrong stem is still caught' },
  { id: 'fr.a2.verbes.142', wrong: 'Nous mangons ici.', scorable: true, what: 'the inserted e' },
  { id: 'fr.a2.verbes.143', wrong: 'Il commense ici.', scorable: true, what: 'the baseline for -cer' },
  { id: 'fr.a2.verbes.144', wrong: 'Nous commencons.', scorable: false, what: 'THE CEDILLA. normalizeFr folds ç to c, so this is graded correct.' },
  { id: 'fr.a2.verbes.149', wrong: 'Elle achete du pain.', scorable: false, what: 'THE ACCENT. Folded away the same way.' },
  { id: 'fr.a2.verbes.153', wrong: 'Tu appeles Marie.', scorable: true, what: 'the doubled l, which is letters and survives a fold' },
  { id: 'fr.a2.verbes.155', wrong: 'Tu achetes du pain.', scorable: false, what: 'THE ACCENT again.' },
  { id: 'fr.a2.verbes.156', wrong: 'Je jete le ticket.', scorable: true, what: 'the doubled t' },
  { id: 'fr.a2.verbes.157', wrong: 'Nous jettons tout.', scorable: true, what: 'the single t, from the other direction' },
];

/** THE SPLIT, as two corpus rows. Same-shaped infinitives, same open è, two
 *  spellings. This is the trapDrill's evidence and the pair the test asserts is
 *  in ONE section with both sides present. */
export const SPLIT_PAIR: { doubles: string; accents: string } = {
  doubles: 'fr.a2.verbes.153',
  accents: 'fr.a2.verbes.155',
};

/** The dictée targets: every authored row carrying the `dictation` drill.
 *  DERIVED, so a row that loses the tag drops out here rather than rendering as a
 *  dictée the app cannot run. Every one is under dicteeMode's 16-letter limit,
 *  and the batch proves that through the real `dicteeMode`. */
export const DICTATION_IDS: string[] = VERBES_ER_EXC.filter((w) => w.drills?.includes('dictation')).map((w) => w.id);

/** THE DICTÉE TARGETS WHOSE DISTINCTION THE DICTÉE CAN ACTUALLY SCORE.
 *
 *  DERIVED from DICTEE_NEAR_MISS rather than typed, so the list and the evidence
 *  for it cannot drift apart. Six of the nine targets are graded on the thing
 *  this lesson teaches. The other three carry a cedilla or an accent, which
 *  `normalizeFr` folds away, and they are in the dictée anyway: the tile bank is
 *  built from the target's own letters, so the learner still has a ç and an è in
 *  hand and still has to place them. */
export const SCORABLE_DICTATION_IDS: string[] = DICTEE_NEAR_MISS.filter((d) => d.scorable).map((d) => d.id);
/** And the three the check cannot settle, named so nobody comes to believe it can. */
export const UNSCORABLE_DICTATION_IDS: string[] = DICTEE_NEAR_MISS.filter((d) => !d.scorable).map((d) => d.id);

/** The French line alone. */
export const fr = (id: string): string => {
  const w = BY_ID.get(id);
  if (!w) throw new Error(`verbes-er-exceptions corpus: unknown id "${id}"`);
  return w.fr;
};

/** The bracketed respelling alone, which is what a deck card's `sub` line
 *  carries. Built HERE, once, rather than baked into the stored data: the
 *  validator checks the rendered form and storing the brackets would double them
 *  up. */
export const sub = (id: string): string => {
  const w = BY_ID.get(id);
  if (!w) throw new Error(`verbes-er-exceptions corpus: unknown id "${id}"`);
  return w.respell ? `[${w.respell}]` : '';
};

/** The English gloss alone. */
export const en = (id: string): string => {
  const w = BY_ID.get(id);
  if (!w) throw new Error(`verbes-er-exceptions corpus: unknown id "${id}"`);
  return w.en;
};

/** The corpus Item, stripped of the lesson-only fields. `person`, `pattern`,
 *  `moves` and `family` are lesson display data and live in the lesson's own
 *  section bodies, not on the shared row. */
export function toItem(w: ExcSentence): Item {
  const { person: _p, pattern: _pt, moves: _m, family: _f, ...item } = w;
  return item;
}
