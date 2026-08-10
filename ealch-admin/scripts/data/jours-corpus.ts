// The a1.08 corpus: what this lesson authors, what it imports, and the three
// shipped respellings it repairs.
//
// THIS FILE IS THE SINGLE SOURCE OF TRUTH for the 16 authored entries, for the
// 69 imported rows, and for every respelling a1.08 puts on a screen. The lesson
// body (jours-lesson.ts) reads `fr`, `ipa`, `respell` and `en` FROM HERE and
// never restates them, for the same reason avoir-corpus.ts and
// elision-corpus.ts do: before that convention one word's transcription was
// typed by hand in five sections and the five copies were free to drift.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE BRIEF'S CORPUS SECTION IS MEASURED AGAINST seed.json, NOT THE CORPUS
// ══════════════════════════════════════════════════════════════════════════
//
// A1-08-DAYS-PROMPT.md makes four structural claims about the corpus. Three of
// them are false against Postgres, and every one of the three is false in the
// same direction and for the same reason: the numbers are the SEED's, and
// seed.json is a cut of the database rather than a copy of it.
//
// The tell is in the brief's own figures. It lists "the full list of 33"
// themes; seed.json holds 37 today. It counts "77 sentences use a day";
// seed.json holds exactly 77. It counts "42 sentences use `le` or `les` plus a
// day"; seed.json holds 38. Postgres holds 144 themes, 636 day-bearing
// sentences and 241 sentences using `le` plus a day.
//
// Measured against Postgres on 2026-08-06, each claim checked twice by two
// methods that do not share an implementation (a regex pass and a
// tokenise-and-compare pass with no regex built from a string), because the
// brief's own warning about zero-returning queries applies to it:
//
//   1. "Neither declared theme exists."  TRUE, and the only one of the four
//      that is. `temps` holds 0 items and `calendrier` holds 0 items.
//
//      But the brief concludes from this that the days have no home and
//      offers "create a `calendrier` theme" as the clean option. There is no
//      need to create anything: `jours-et-mois` ALREADY EXISTS and holds 370
//      published rows, which is 231 a1 sentences plus 139 sons words and
//      phrases. Those 139 are the seven days, the twelve months, `la semaine`,
//      `le jour`, `le mois`, `l'année`, `la date`, `hier`, `demain`,
//      `avant-hier`, `après-demain`, `le lendemain`, `la veille`,
//      `le calendrier`, `le jour férié` and `le week-end`. It is the theme the
//      brief went looking for and did not find, and it is invisible from the
//      seed because seed-cut.config.ts bundles by theme and this one is not on
//      the list. See the theme decision below.
//
//   2. "Not one day exists as a headword. Checked every day against every
//      non-sentence item: lundi, mardi, mercredi, jeudi, vendredi, samedi and
//      dimanche are ALL absent as words or phrases. So are la semaine,
//      aujourd'hui, demain and hier."  FALSE, and this is the claim that would
//      have cost the most work: the brief tells the author to budget for
//      writing the seven day words, and they exist THREE TIMES OVER.
//
//        fr.sons.jours-et-mois.001-007   the seven, with ipa and respell,
//                                        cardType vocab, flashcard+voiceflash
//        fr.a1.temps-et-frequence.111-117  the seven again, at a1, no ipa
//        fr.sons.consonnes.014/.096/.112   dimanche, mercredi, vendredi
//        fr.sons.alphabet.175              « le lundi »
//
//      `la semaine`, `aujourd'hui`, `demain` and `hier` each exist three or
//      four times too. So the "core authoring job" the brief names does not
//      exist, and authoring it would have produced a duplicate that
//      flashhub-coverage.test.ts fails the build on: its `norm()` strips the
//      article, so `lundi` and `le lundi` are ONE key inside a theme.
//
//   3. "77 sentences use a day, spread across 17 themes. dimanche 28,
//      samedi 23, vendredi 10, lundi 8, mardi 4, jeudi 3, mercredi 2. Expect
//      to author examples for the midweek days, or your drills will be
//      visibly thin."  FALSE, and again in the generous direction. Postgres
//      holds 636 day-bearing sentences. At a1 alone:
//
//                    brief   actual (a1)   of which habitual (le + day)
//          lundi        8        50                 18
//          mardi        4        22                  8
//          mercredi     2        18                  7
//          jeudi        3        19                  5
//          vendredi    10        41                 15
//          samedi      23        70                 33
//          dimanche    28        80                 46
//
//      mercredi and jeudi are not thin. They have eighteen and nineteen a1
//      sentences between the two of them at seven and five habitual each, and
//      `jours-et-mois` alone carries a clean run for every day of the week. No
//      example sentence needed authoring for a midweek day.
//
//   4. "42 sentences use `le` or `les` plus a day, and 5 use `tous les`."
//      FALSE. 241 use `le` plus a day, 40 use `les` plus a plural day, and 39
//      use `tous les`. The bare specific side, which the brief calls "the half
//      you will be writing", has 41 sentences carrying `prochain` or `dernier`
//      and several hundred more with a plain bare day.
//
// One claim in the brief's layout section is also worth correcting because a
// later author will rely on it: it says to test the capital letter with
// `errorSpot` rather than `typeIn` because "fold() cannot test the capital
// letter". `errorSpot` runs through the SAME `matchesAccept` → `fold()` path
// as `typeIn` (answer.logic.ts lines 97-104), and `fold()` lowercases. So no
// free-text format can test a capital. `mcq` can, because its options are
// picked rather than typed and `quiz-duplicate-option` compares them
// case-sensitively. a1.08 tests the capital with an mcq and says so.
//
// The brief is also wrong that `Lundi`, `lundi`, `le lundi` and `lelundi` "all
// fold together". Two pairs collide, not four forms: `Lundi`/`lundi` fold
// together (case), and `le lundi`/`lelundi` fold together (whitespace). But
// `lundi` folds to "lundi" and `le lundi` folds to "lelundi", which are
// different strings. So free text CAN test the missing article, the invented
// preposition and `les lundis`, and this lesson uses errorSpot for all three.
//
// ── The theme binding: bound to `jours-et-mois`, not created ───────────────
//
// The brief offers three options (author into `routines`, create `calendrier`,
// or clear the binding) and asks for one to be picked "for both" this unit and
// a1.09. All three are answers to a question that only looks open from the
// seed. `jours-et-mois` exists, holds the days AND the months, and is
// therefore the one theme that is right for a1.08 and a1.09 at once. It needs
// no creation, no SEED_CUT edit and no product decision about a new chip.
//
// `routines` was the brief's low-friction option and is the wrong home: it
// holds `le matin`, `le soir` and `le week-end`, which are times of day, and
// a1.25 owns daily routine outright. Putting the calendar there would put
// a1.09's months in a theme called routines.
//
// The unit's dead `["temps","calendrier"]` binding is REPLACED with
// `["jours-et-mois"]` rather than cleared, because unlike a1.06 and a1.07 this
// genuinely is a vocabulary lesson and the brief is right that a vocabulary
// lesson with no theme is odd. The batch prints the change on its own line and
// refuses to write if somebody has already changed it to something else.
//
// ── What this lesson actually authors, and why ─────────────────────────────
//
// Sixteen rows, and not one of them is a day name.
//
// The corpus demonstrates both sides of the rule and never once demonstrates
// them AGAINST EACH OTHER. « Il joue au foot le samedi » and « On déménage
// samedi prochain » are two sentences about two different situations with two
// different verbs, and putting them side by side teaches nothing, because
// everything else on the line moved too. The learner has to be able to see one
// difference.
//
// So what is authored is seven MINIMAL PAIRS: same subject, same verb, same
// complement, and an article. That is the shape a1.07 authored its paradigm
// for and for the same reason, and it is the only thing in this lesson that
// could not be assembled from what already exists. Every pair is built on être
// or avoir, which is the whole of the learner's verb stock (see the note on
// the verb problem in jours-lesson.ts), and two more rows carry the scene's
// own sentence, which is the one utterance the unit exists for.
//
// ── Respelling convention, and the three rows this lesson repairs ──────────
//
// House convention: hyphenated syllables, stressed syllable capitalised, nasal
// vowels closed with a superscript n and NEVER a plain n or m, /ø œ/ as EU,
// /y/ as Ü. Brackets are added by `D()` below, never stored, because the
// density validator checks the rendered form.
//
// Three shipped rows in this lesson's own theme fail it, and a fourth misses a
// different clause of the same convention:
//
//     fr.sons.jours-et-mois.001  lundi     luhn-DEE       plain n for /œ̃/
//     fr.sons.jours-et-mois.005  vendredi  vahn-druh-DEE  plain n for /ɑ̃/
//     fr.sons.jours-et-mois.007  dimanche  dee-MAHNSH     plain N for /ɑ̃/
//     fr.sons.jours-et-mois.004  jeudi     zhuh-DEE       /ø/ written uh, not EU
//
// The corpus already contradicts itself on two of them: fr.sons.consonnes.014
// respells dimanche `dee-MAHⁿSH` and fr.sons.consonnes.112 respells vendredi
// `vahⁿ-druh-DEE`, both correct. So the same word carries two different
// transcriptions depending on which theme a learner meets it in.
//
// These four are REPAIRED by the batch, as an explicit printed change, because
// they are the seven cards this lesson is built on and shipping a lesson whose
// own card reads `luhⁿ-DEE` while the flashcard hub reads `luhn-DEE` for the
// same word is a contradiction the learner sees. `respell` is display-only, so
// the repair cannot break a drill, a score or an id.
//
// A limitation worth naming rather than working around: `hasPlainNasalFor`
// catches `luhn-DEE` and `vahn-druh-DEE` and does NOT catch `dee-MAHNSH`. Its
// second test requires the n or m to be the last letter of a token
// (`[AEIOUY][NM](?![A-Za-zÀ-ÿ])`), and dimanche's nasal is word-internal with
// SH behind it. The brief says "`lundi` and `dimanche` are the words this
// catches"; it catches lundi only. a1-08-jours.test.ts imports the real
// function as the brief requires AND adds an explicit superscript assertion
// over the day respellings, because the shared checker cannot see this one.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

/* ─── What the screens display ─────────────────────────────────────────────
 *
 * Every French unit a1.08 puts on a card, with the respelling this lesson
 * stands behind. Keyed by the French form, because several of these are
 * display strings rather than corpus rows: `les lundis` exists only as the
 * wrong half of a contrast that lives on one card.                          */

export type Display = { fr: string; ipa: string; respell: string; en: string };

const D = (fr: string, ipa: string, res: string, en: string): Display =>
  ({ fr, ipa: `/${ipa}/`, respell: `[${res}]`, en });

export const RESPELL: Record<string, Display> = {
  // The seven, in week order. This is the lesson's whole vocabulary.
  lundi: D('lundi', 'lœ̃.di', 'luhⁿ-DEE', 'Monday'),
  mardi: D('mardi', 'maʁ.di', 'mar-DEE', 'Tuesday'),
  mercredi: D('mercredi', 'mɛʁ.kʁə.di', 'mehr-kruh-DEE', 'Wednesday'),
  jeudi: D('jeudi', 'ʒø.di', 'zheu-DEE', 'Thursday'),
  vendredi: D('vendredi', 'vɑ̃.dʁə.di', 'vahⁿ-druh-DEE', 'Friday'),
  samedi: D('samedi', 'sam.di', 'sam-DEE', 'Saturday'),
  dimanche: D('dimanche', 'di.mɑ̃ʃ', 'dee-MAHⁿSH', 'Sunday'),

  // The rule, as a pair. Both halves are respelled so the learner can see that
  // the article is a whole extra syllable and not a written decoration.
  'le lundi': D('le lundi', 'lə lœ̃.di', 'luh luhⁿ-DEE', 'on Mondays'),
  'le samedi': D('le samedi', 'lə sam.di', 'luh sam-DEE', 'on Saturdays'),
  // The plural an English speaker reaches for. Said out loud it is identical
  // to the singular, which is why it survives: nothing corrects it by ear.
  'les lundis': D('les lundis', 'le lœ̃.di', 'lay luhⁿ-DEE', 'Mondays, as a set'),

  // The frame the days sit in.
  'la semaine': D('la semaine', 'la sə.mɛn', 'lah suh-MEN', 'the week'),
  'le week-end': D('le week-end', 'lə wi.kɛnd', 'luh week-EHND', 'the weekend'),
  'le jour': D('le jour', 'lə ʒuʁ', 'luh ZHOOR', 'the day'),
  demain: D('demain', 'də.mɛ̃', 'duh-MEHⁿ', 'tomorrow'),
  hier: D('hier', 'jɛʁ', 'YEHR', 'yesterday'),
  'tous les jours': D('tous les jours', 'tu le ʒuʁ', 'too lay ZHOOR', 'every day'),
  'tous les samedis': D('tous les samedis', 'tu le sam.di', 'too lay sam-DEE', 'every Saturday'),
  'le calendrier': D('le calendrier', 'lə ka.lɑ̃.dʁi.je', 'luh ka-lahⁿ-dree-YAY', 'the calendar'),
};

/** The bracketed respelling of a French form this lesson displays. Throws
 *  rather than returning undefined: a card silently missing its transcription
 *  is the failure this file exists to stop, and it looks identical to a card
 *  that never wanted one. */
export function sub(fr: string): string {
  const d = RESPELL[fr];
  if (!d) throw new Error(`a1.08: no respelling authored for "${fr}". Add it to RESPELL.`);
  return d.respell;
}

/** The IPA of a French form this lesson displays, in slashes. */
export function ipaOf(fr: string): string {
  const d = RESPELL[fr];
  if (!d) throw new Error(`a1.08: no IPA authored for "${fr}". Add it to RESPELL.`);
  return d.ipa;
}

/* ─── The four shipped respellings this batch repairs ──────────────────────
 *
 * Display-only, in this lesson's own theme, and all four are the words the
 * lesson teaches. The batch prints each one and refuses to write if the stored
 * value is no longer the broken one it expects, because two people disagreeing
 * about a transcription is a decision rather than a merge.                   */

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
    id: 'fr.sons.jours-et-mois.001', fr: 'lundi',
    from: 'luhn-DEE', to: unbracket(RESPELL.lundi.respell),
    why: 'a plain n closes the nasal /œ̃/, which the house convention writes with a superscript n. Caught by hasPlainNasalFor.',
  },
  {
    id: 'fr.sons.jours-et-mois.004', fr: 'jeudi',
    from: 'zhuh-DEE', to: unbracket(RESPELL.jeudi.respell),
    why: '/ø/ is written EU in this house, not uh. uh is the convention for the schwa, and jeudi does not carry one.',
  },
  {
    id: 'fr.sons.jours-et-mois.005', fr: 'vendredi',
    from: 'vahn-druh-DEE', to: unbracket(RESPELL.vendredi.respell),
    why: 'a plain n closes the nasal /ɑ̃/. fr.sons.consonnes.112 already respells this word correctly, so the corpus contradicts itself.',
  },
  {
    id: 'fr.sons.jours-et-mois.007', fr: 'dimanche',
    from: 'dee-MAHNSH', to: unbracket(RESPELL.dimanche.respell),
    why: 'a plain N closes the nasal /ɑ̃/. hasPlainNasalFor does NOT catch this one (the nasal is word-internal), so it survived every check. fr.sons.consonnes.014 already has it right.',
  },
];

/* ─── The authored rows: seven minimal pairs and the scene's sentence ───────
 *
 * Sequence numbers continue `fr.a1.jours-et-mois`, whose highest published seq
 * is 231. Never renumbered: ids are the SRS key and every attempt ever logged
 * hangs off them.
 *
 * Every row is built on être or avoir. There is no regular-verb unit anywhere
 * in A1 (checked: all thirty units, none teaches -er conjugation), so a drilled
 * sentence carrying `je travaille` would ask the learner to produce a form no
 * lesson has given them. The two exceptions are the scene pair, which carries
 * `on se voit` as a fixed chunk the learner reads and never conjugates, and
 * they are marked `chunk: true` so no drill can select them for production.
 *
 * `pairWith` is reciprocal and the test asserts it, because a pair that is half
 * deleted teaches the opposite of what it was written for: one sentence with an
 * article and nothing to compare it against reads as the only way to say it. */

export type JoursSentence = Omit<Item, 'drills'> & {
  /** Which side of the rule this row is. `habitual` carries the article,
   *  `specific` does not, `both` shows the contrast inside one sentence. */
  side: 'habitual' | 'specific' | 'both';
  /** The day this row is about, lowercase, always. */
  day: 'lundi' | 'mardi' | 'mercredi' | 'jeudi' | 'vendredi' | 'samedi' | 'dimanche';
  /** The other half of the pair. Reciprocal. */
  pairWith?: string;
  /** Carries a verb outside être and avoir, shown as a fixed chunk and never
   *  drilled for production. */
  chunk?: boolean;
  drills: Item['drills'];
};

const SV: Item['drills'] = ['sentence', 'flashcard', 'voiceflash', 'review'];
const SVD: Item['drills'] = ['sentence', 'flashcard', 'voiceflash', 'review', 'dictation'];

export const JOURS: JoursSentence[] = [
  // ── The seven pairs. One per day, so no day is taught only on one side ────
  //
  // Read down the left column and the only thing that ever changes is the day.
  // Read across a pair and the only thing that changes is `le`.
  {
    id: 'fr.a1.jours-et-mois.232', kind: 'sentence', level: 'a1', theme: 'jours-et-mois',
    fr: "J'ai cours le lundi.", en: 'I have class on Mondays.',
    ipa: '/ʒe kuʁ lə lœ̃.di/',
    notes: 'Every Monday, as a rule. The article is the only thing making it habitual.',
    tags: ['jour', 'habituel', 'article-defini'], drills: SVD, version: 1,
    side: 'habitual', day: 'lundi', pairWith: 'fr.a1.jours-et-mois.233',
  },
  {
    id: 'fr.a1.jours-et-mois.233', kind: 'sentence', level: 'a1', theme: 'jours-et-mois',
    fr: "J'ai cours lundi.", en: 'I have class on Monday.',
    ipa: '/ʒe kuʁ lœ̃.di/',
    notes: 'This coming Monday, once. No article, and no preposition either.',
    tags: ['jour', 'ponctuel'], drills: SVD, version: 1,
    side: 'specific', day: 'lundi', pairWith: 'fr.a1.jours-et-mois.232',
  },
  {
    id: 'fr.a1.jours-et-mois.234', kind: 'sentence', level: 'a1', theme: 'jours-et-mois',
    fr: 'Le magasin est fermé le mardi.', en: 'The shop is closed on Tuesdays.',
    ipa: '/lə ma.ɡa.zɛ̃ ɛ fɛʁ.me lə maʁ.di/',
    notes: 'Every Tuesday. This is what a sign on a door means.',
    tags: ['jour', 'habituel', 'article-defini'], drills: SV, version: 1,
    side: 'habitual', day: 'mardi', pairWith: 'fr.a1.jours-et-mois.235',
  },
  {
    id: 'fr.a1.jours-et-mois.235', kind: 'sentence', level: 'a1', theme: 'jours-et-mois',
    fr: 'Le magasin est fermé mardi.', en: 'The shop is closed on Tuesday.',
    ipa: '/lə ma.ɡa.zɛ̃ ɛ fɛʁ.me maʁ.di/',
    notes: 'One Tuesday, the next one. A handwritten note taped over the sign.',
    tags: ['jour', 'ponctuel'], drills: SV, version: 1,
    side: 'specific', day: 'mardi', pairWith: 'fr.a1.jours-et-mois.234',
  },
  {
    id: 'fr.a1.jours-et-mois.236', kind: 'sentence', level: 'a1', theme: 'jours-et-mois',
    fr: 'On a piscine le mercredi.', en: 'We have swimming on Wednesdays.',
    ipa: '/ɔ̃ a pi.sin lə mɛʁ.kʁə.di/',
    notes: 'Every Wednesday. On means we, and takes the same form as il.',
    tags: ['jour', 'habituel', 'article-defini'], drills: SV, version: 1,
    side: 'habitual', day: 'mercredi', pairWith: 'fr.a1.jours-et-mois.237',
  },
  {
    id: 'fr.a1.jours-et-mois.237', kind: 'sentence', level: 'a1', theme: 'jours-et-mois',
    fr: 'On a piscine mercredi.', en: 'We have swimming on Wednesday.',
    ipa: '/ɔ̃ a pi.sin mɛʁ.kʁə.di/',
    notes: 'This Wednesday only. Nothing in front of the day, and nothing before it.',
    tags: ['jour', 'ponctuel'], drills: SV, version: 1,
    side: 'specific', day: 'mercredi', pairWith: 'fr.a1.jours-et-mois.236',
  },
  {
    id: 'fr.a1.jours-et-mois.238', kind: 'sentence', level: 'a1', theme: 'jours-et-mois',
    fr: 'Elle est à Paris le jeudi.', en: 'She is in Paris on Thursdays.',
    ipa: '/ɛ.lɛ.ta pa.ʁi lə ʒø.di/',
    notes: 'Every Thursday, as a standing arrangement.',
    tags: ['jour', 'habituel', 'article-defini'], drills: SV, version: 1,
    side: 'habitual', day: 'jeudi', pairWith: 'fr.a1.jours-et-mois.239',
  },
  {
    id: 'fr.a1.jours-et-mois.239', kind: 'sentence', level: 'a1', theme: 'jours-et-mois',
    fr: 'Elle est à Paris jeudi.', en: 'She is in Paris on Thursday.',
    ipa: '/ɛ.lɛ.ta pa.ʁi ʒø.di/',
    notes: 'One Thursday. Whether it is the next one is decided by the conversation.',
    tags: ['jour', 'ponctuel'], drills: SV, version: 1,
    side: 'specific', day: 'jeudi', pairWith: 'fr.a1.jours-et-mois.238',
  },
  {
    id: 'fr.a1.jours-et-mois.240', kind: 'sentence', level: 'a1', theme: 'jours-et-mois',
    fr: 'Nous avons une réunion le vendredi.', en: 'We have a meeting on Fridays.',
    ipa: '/nu.za.vɔ̃.zyn ʁe.y.njɔ̃ lə vɑ̃.dʁə.di/',
    notes: 'Every Friday. The one in the diary that repeats.',
    tags: ['jour', 'habituel', 'article-defini'], drills: SV, version: 1,
    side: 'habitual', day: 'vendredi', pairWith: 'fr.a1.jours-et-mois.241',
  },
  {
    id: 'fr.a1.jours-et-mois.241', kind: 'sentence', level: 'a1', theme: 'jours-et-mois',
    fr: 'Nous avons une réunion vendredi.', en: 'We have a meeting on Friday.',
    ipa: '/nu.za.vɔ̃.zyn ʁe.y.njɔ̃ vɑ̃.dʁə.di/',
    notes: 'One meeting, this Friday. Drop the article and you have changed the diary.',
    tags: ['jour', 'ponctuel'], drills: SV, version: 1,
    side: 'specific', day: 'vendredi', pairWith: 'fr.a1.jours-et-mois.240',
  },
  {
    id: 'fr.a1.jours-et-mois.242', kind: 'sentence', level: 'a1', theme: 'jours-et-mois',
    fr: 'Je suis libre le samedi.', en: 'I am free on Saturdays.',
    ipa: '/ʒə sɥi libʁ lə sam.di/',
    notes: 'Every Saturday. This is a fact about your week.',
    tags: ['jour', 'habituel', 'article-defini'], drills: SVD, version: 1,
    side: 'habitual', day: 'samedi', pairWith: 'fr.a1.jours-et-mois.243',
  },
  {
    id: 'fr.a1.jours-et-mois.243', kind: 'sentence', level: 'a1', theme: 'jours-et-mois',
    fr: 'Je suis libre samedi.', en: 'I am free on Saturday.',
    ipa: '/ʒə sɥi libʁ sam.di/',
    notes: 'This Saturday. This is an answer to an invitation.',
    tags: ['jour', 'ponctuel'], drills: SVD, version: 1,
    side: 'specific', day: 'samedi', pairWith: 'fr.a1.jours-et-mois.242',
  },
  {
    id: 'fr.a1.jours-et-mois.244', kind: 'sentence', level: 'a1', theme: 'jours-et-mois',
    fr: 'Le musée est gratuit le dimanche.', en: 'The museum is free on Sundays.',
    ipa: '/lə my.ze ɛ ɡʁa.tɥi lə di.mɑ̃ʃ/',
    notes: 'Every Sunday. Worth knowing before you buy a ticket.',
    tags: ['jour', 'habituel', 'article-defini'], drills: SV, version: 1,
    side: 'habitual', day: 'dimanche', pairWith: 'fr.a1.jours-et-mois.245',
  },
  {
    id: 'fr.a1.jours-et-mois.245', kind: 'sentence', level: 'a1', theme: 'jours-et-mois',
    fr: 'Le musée est gratuit dimanche.', en: 'The museum is free on Sunday.',
    ipa: '/lə my.ze ɛ ɡʁa.tɥi di.mɑ̃ʃ/',
    notes: 'This Sunday only, because of something happening that week.',
    tags: ['jour', 'ponctuel'], drills: SV, version: 1,
    side: 'specific', day: 'dimanche', pairWith: 'fr.a1.jours-et-mois.244',
  },

  // ── The scene's own sentence, both ways ───────────────────────────────────
  //
  // `on se voit` is the one verb in this file outside être and avoir, and it is
  // the sentence the whole unit exists for. Marked `chunk` so the batch, the
  // merge and the test can all assert that no production drill selects it: a
  // learner is asked to hear the difference between these two and never to
  // conjugate `voir`, which no A1 unit teaches.
  {
    id: 'fr.a1.jours-et-mois.246', kind: 'sentence', level: 'a1', theme: 'jours-et-mois',
    fr: 'On se voit samedi ?', en: 'Shall we meet on Saturday?',
    ipa: '/ɔ̃ sə vwa sam.di/',
    notes: 'This Saturday. An arrangement for one day, which is what makes it a plan.',
    tags: ['jour', 'ponctuel', 'chunk'], drills: ['sentence', 'review'], version: 1,
    side: 'specific', day: 'samedi', chunk: true, pairWith: 'fr.a1.jours-et-mois.247',
  },
  {
    id: 'fr.a1.jours-et-mois.247', kind: 'sentence', level: 'a1', theme: 'jours-et-mois',
    fr: 'On se voit le samedi.', en: 'We see each other on Saturdays.',
    ipa: '/ɔ̃ sə vwa lə sam.di/',
    notes: 'Every Saturday. Not a plan at all, a description of how things are.',
    tags: ['jour', 'habituel', 'article-defini', 'chunk'], drills: ['sentence', 'review'], version: 1,
    side: 'habitual', day: 'samedi', chunk: true, pairWith: 'fr.a1.jours-et-mois.246',
  },
];

export const JOURS_IDS: string[] = JOURS.map((w) => w.id);

/** The ids of one side of the rule, in sequence order. */
export const sideIds = (s: JoursSentence['side']): string[] =>
  JOURS.filter((w) => w.side === s).map((w) => w.id);

/** The seven days, in week order, starting on Monday because French calendars
 *  do. Named here so the lesson, the batch and the test all count the same set
 *  rather than three hand lists that can drift. */
export const THE_SEVEN = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'] as const;
export type Day = (typeof THE_SEVEN)[number];

/** The pairs, as [habitual, specific]. Built from `pairWith` rather than
 *  listed, so a pair cannot be half deleted. */
export const CONTRAST_PAIRS: [string, string][] = JOURS
  .filter((w) => w.side === 'habitual' && w.pairWith)
  .map((w) => [w.id, w.pairWith!] as [string, string]);

/** The rows carrying a verb the learner has never been given a paradigm for.
 *  Shown, never drilled for production. */
export const CHUNK_IDS: string[] = JOURS.filter((w) => w.chunk).map((w) => w.id);

/** The corpus Item, stripped of the teaching-only fields. */
export function toItem(w: JoursSentence): Item {
  const { side: _s, day: _d, pairWith: _p, chunk: _c, ...item } = w;
  return item;
}

/* ─── The five planets, which are a memory hook and not a mission ───────────
 *
 * Five of the seven are the same planet in French and in English, which is a
 * fact a learner can check on their own and never forgets afterwards. It is one
 * detail on one table, exactly as the brief asks: "one card, and it does more
 * for retention than a fourth drill would."
 *
 * samedi is the Sabbath and dimanche is dies dominica, the Lord's day. Both are
 * given, because "the other two are different" is a worse memory than "the
 * other two are the weekend, and they are named after the day off". */
export const ORIGINS: Record<Day, { origin: string; note: string }> = {
  lundi: { origin: 'Moon', note: 'Latin lunae dies. The same moon as English Monday and Spanish lunes.' },
  mardi: { origin: 'Mars', note: 'Latin martis dies. English swapped the Roman god for the Norse one, Tiw.' },
  mercredi: { origin: 'Mercury', note: 'Latin mercurii dies. English took Woden instead, which is why it is Wednesday.' },
  jeudi: { origin: 'Jupiter', note: 'Latin jovis dies. English took Thor, so Thursday and jeudi are the same god twice over.' },
  vendredi: { origin: 'Venus', note: 'Latin veneris dies. English took Frigg, and both are the goddess of love.' },
  samedi: { origin: 'the Sabbath', note: 'Latin sabbati dies. Not a planet: this one comes from the rest day.' },
  dimanche: { origin: "the Lord's day", note: 'Latin dies dominica. English kept the sun and French did not.' },
};

/* ─── Reused: rows already inside the seed cut ─────────────────────────────
 *
 * Nothing about them changes and no shipped screen moves. Verified against
 * Postgres (published) AND seed.json on 2026-08-06, with the `fr` compared
 * between the two, because an id that is in the seed and not published renders
 * as an empty card rather than erroring.                                     */

export const REUSED: { id: string; fr: string; en: string; why: string }[] = [
  {
    id: 'fr.a1.ecole.226',
    fr: 'Le vendredi, nous avons un cours de musique.',
    en: 'On Fridays, we have a music class.',
    why: 'the habitual side on avoir, fronted so the article is the first thing on the line, in a theme the seed already carries',
  },
  {
    id: 'fr.a1.marche.003',
    fr: "J'achète des légumes au marché tous les jeudis.",
    en: 'I buy vegetables at the market every Thursday.',
    why: 'the tous les reinforcement, on a day the brief reported as having almost nothing',
  },
];

export const REUSED_IDS: string[] = REUSED.map((r) => r.id);

/* ─── Imported: published in Postgres, absent from the seed ────────────────
 *
 * A RECORDED READ of the database taken on 2026-08-06, so the merge can write
 * these rows into seed.json without a connection. The batch compares every
 * field against the live database before writing and dies if the manifest has
 * drifted, because a stale manifest puts the seed ahead of the database on rows
 * nobody has looked at.
 *
 * 67 of the 69 are `jours-et-mois`, which is this lesson's own theme and is not
 * in SEED_CUT.themes. The other two are one sentence each from
 * `adjectifs-essentiels` and `cinema`, and both are there because the lesson
 * needs the habitual side stated about a PLACE rather than a person: a shop
 * that closes and a cinema that is shut are where a learner meets this rule in
 * the wild, on a door, before anybody says it to them.
 *
 * The ipa on these rows is stored WITHOUT slashes, which is the shipped
 * convention for corpus items and differs from the section-level `ipa` field
 * the density validator checks. They are imported verbatim; nothing here
 * reformats somebody else's row.                                             */

export type ImportedRow = Item;

export const IMPORTED: ImportedRow[] = [

  // ── jours-et-mois: 67 rows ──
  {
    id: "fr.a1.jours-et-mois.001", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Lundi, je commence un nouveau travail.", en: "On Monday, I'm starting a new job.", ipa: "lœ̃.di ʒə kɔ.mɑ̃s œ̃ nu.vo tʁa.vaj", notes: "'Lundi' is capitalized here only because it opens the sentence; day names are otherwise always lowercase.", tags: ["orthographe"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.002", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Le lundi, je vais à la bibliothèque après les cours.", en: "On Mondays, I go to the library after class.", ipa: "lə lœ̃.di ʒə vɛ a la bi.bli.jɔ.tɛk a.pʁɛ le kuʁ", notes: "'Le lundi' (with the article) means every Monday, a repeated habit, not a single Monday.", tags: ["grammaire"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.003", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Nous avons rendez-vous mardi matin.", en: "We have an appointment on Tuesday morning.", ipa: "nu za.vɔ̃ ʁɑ̃.de.vu maʁ.di ma.tɛ̃", tags: ["orthographe"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.004", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Le mardi, ma sœur fait du yoga.", en: "On Tuesdays, my sister does yoga.", ipa: "lə maʁ.di ma sœʁ fɛ dy jɔ.ga", notes: "'Le mardi' means every Tuesday; without the article, 'mardi' alone would mean just one Tuesday.", tags: ["grammaire"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.005", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Le mercredi après-midi, les enfants n'ont pas école.", en: "On Wednesday afternoons, children don't have school.", ipa: "lə mɛʁ.kʁə.di a.pʁɛ mi.di le zɑ̃.fɑ̃ nɔ̃ pa ze.kɔl", notes: "'Le mercredi' signals a repeated Wednesday habit, unlike a single 'mercredi'.", tags: ["grammaire"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.006", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Mercredi, je dois aller chez le dentiste.", en: "This Wednesday, I have to go to the dentist.", ipa: "mɛʁ.kʁə.di ʒə dwa a.le ʃe lə dɑ̃.tist", tags: ["orthographe"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.007", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Jeudi prochain, nous partons en voyage.", en: "Next Thursday, we're leaving on a trip.", ipa: "ʒø.di pʁɔ.ʃɛ̃ nu paʁ.tɔ̃ ɑ̃ vwa.jaʒ", notes: "Day names like 'jeudi' stay lowercase even when followed by 'prochain'.", tags: ["orthographe"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.008", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Le jeudi, il joue au foot avec ses amis.", en: "On Thursdays, he plays soccer with his friends.", ipa: "lə ʒø.di il ʒu o fut a.vɛk se za.mi", notes: "'Le jeudi' describes a weekly habit; drop the article and 'jeudi' means just one specific Thursday.", tags: ["grammaire"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.010", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Le vendredi, la boulangerie ferme plus tôt.", en: "On Fridays, the bakery closes earlier.", ipa: "lə vɑ̃.dʁə.di la bu.lɑ̃.ʒʁi fɛʁm ply to", notes: "'Le vendredi' here means every Friday, a recurring closing time, not one Friday.", tags: ["grammaire"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.011", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Samedi, je fais les courses au marché.", en: "This Saturday, I'm doing the shopping at the market.", ipa: "sam.di ʒə fɛ le kuʁs o maʁ.ʃe", tags: ["orthographe"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.012", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Le samedi matin, mes parents dorment tard.", en: "On Saturday mornings, my parents sleep in.", ipa: "lə sam.di ma.tɛ̃ me pa.ʁɑ̃ dɔʁm taʁ", notes: "'Le samedi matin' means every Saturday morning, a routine, not a single occasion.", tags: ["grammaire"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.013", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Dimanche, toute la famille se retrouve chez grand-mère.", en: "On Sunday, the whole family gets together at grandma's.", ipa: "di.mɑ̃ʃ tut la fa.mij sə ʁə.tʁuv ʃe gʁɑ̃.mɛʁ", notes: "'Dimanche' stays lowercase mid-sentence; only a capital D at the very start of a sentence is correct.", tags: ["orthographe"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.014", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Le dimanche, nous ne travaillons jamais.", en: "On Sundays, we never work.", ipa: "lə di.mɑ̃ʃ nu nə tʁa.va.jɔ̃ ʒa.mɛ", notes: "'Le dimanche' with the article means every Sunday, contrasted with a single 'dimanche'.", tags: ["grammaire"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.015", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Aujourd'hui, nous sommes lundi.", en: "Today is Monday.", ipa: "o.ʒuʁ.dɥi nu sɔm lœ̃.di", notes: "After 'nous sommes', the day name 'lundi' stays lowercase.", tags: ["orthographe"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.016", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Demain, c'est mardi.", en: "Tomorrow is Tuesday.", ipa: "də.mɛ̃ sɛ maʁ.di", tags: ["orthographe"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.017", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Hier, c'était mercredi.", en: "Yesterday was Wednesday.", ipa: "jɛʁ se.tɛ mɛʁ.kʁə.di", tags: ["orthographe"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.018", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "La réunion est reportée à jeudi.", en: "The meeting is postponed to Thursday.", ipa: "la ʁe.y.njɔ̃ ɛ ʁə.pɔʁ.te a ʒø.di", tags: ["orthographe"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.019", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Il est arrivé vendredi dernier.", en: "He arrived last Friday.", ipa: "il ɛ a.ʁi.ve vɑ̃.dʁə.di dɛʁ.nje", notes: "'Vendredi dernier' needs no article and no capital letter.", tags: ["orthographe"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.021", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Le professeur donne un contrôle le lundi et le jeudi.", en: "The teacher gives a quiz on Mondays and Thursdays.", ipa: "lə pʁɔ.fɛ.sœʁ dɔn œ̃ kɔ̃.tʁol lə lœ̃.di e lə ʒø.di", notes: "Using 'le' before both days shows this happens every Monday and every Thursday, not just once.", tags: ["grammaire"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.022", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Ce n'est pas lundi, c'est mardi.", en: "It's not Monday, it's Tuesday.", ipa: "sə nɛ pa lœ̃.di sɛ maʁ.di", tags: ["orthographe"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.023", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Mon cours de piano est le mercredi à seize heures.", en: "My piano lesson is on Wednesdays at four o'clock.", ipa: "mɔ̃ kuʁ də pja.no ɛ lə mɛʁ.kʁə.di a sɛ.zœʁ", notes: "'Le mercredi' here marks a fixed weekly time slot, repeated every week.", tags: ["grammaire"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.025", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Nous fermons le dimanche et le lundi.", en: "We are closed on Sundays and Mondays.", ipa: "nu fɛʁ.mɔ̃ lə di.mɑ̃ʃ e lə lœ̃.di", notes: "'Le dimanche et le lundi' means every Sunday and every Monday, a permanent weekly closure.", tags: ["grammaire"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.026", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Le facteur passe le mardi et le vendredi.", en: "The mailman comes on Tuesdays and Fridays.", ipa: "lə fak.tœʁ pas lə maʁ.di e lə vɑ̃.dʁə.di", notes: "'Le mardi et le vendredi' describes the mail carrier's regular weekly route.", tags: ["grammaire"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.028", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Tu es libre mercredi soir?", en: "Are you free on Wednesday evening?", ipa: "ty ɛ libʁ mɛʁ.kʁə.di swaʁ", tags: ["orthographe"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.029", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Le marché a lieu tous les samedis.", en: "The market takes place every Saturday.", ipa: "lə maʁ.ʃe a ljø tu le sam.di", notes: "'Tous les samedis' reinforces that the market happens every single Saturday.", tags: ["grammaire"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.030", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Vendredi, c'est mon jour préféré.", en: "Friday is my favorite day.", ipa: "vɑ̃.dʁə.di sɛ mɔ̃ ʒuʁ pʁe.fe.ʁe", tags: ["orthographe"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.032", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "J'ai piscine le mardi et le jeudi.", en: "I have swimming on Tuesdays and Thursdays.", ipa: "ʒe pi.sin lə maʁ.di e lə ʒø.di", notes: "'Le mardi et le jeudi' marks a fixed weekly schedule for swimming lessons.", tags: ["grammaire"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.034", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "On déménage samedi prochain.", en: "We're moving next Saturday.", ipa: "ɔ̃ de.me.naʒ sam.di pʁɔ.ʃɛ̃", notes: "'Samedi prochain' needs no article, unlike the habitual 'le samedi'.", tags: ["orthographe"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.035", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Le lundi est souvent difficile après le week-end.", en: "Monday is often hard after the weekend.", ipa: "lə lœ̃.di ɛ su.vɑ̃ di.fi.sil a.pʁɛ lə wik.ɛnd", tags: ["grammaire"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.036", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Mardi, il y a une grève des trains.", en: "On Tuesday, there's a train strike.", ipa: "maʁ.di il i a yn gʁɛv de tʁɛ̃", tags: ["orthographe"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.037", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Le jeudi soir, mes cousins viennent dîner.", en: "On Thursday evenings, my cousins come for dinner.", ipa: "lə ʒø.di swaʁ me ku.zɛ̃ vjɛn di.ne", notes: "'Le jeudi soir' is a recurring weekly visit, not a one-time event.", tags: ["grammaire"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.038", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Nous partons jeudi et nous revenons dimanche.", en: "We're leaving on Thursday and coming back on Sunday.", ipa: "nu paʁ.tɔ̃ ʒø.di e nu ʁə.və.nɔ̃ di.mɑ̃ʃ", notes: "Both 'jeudi' and 'dimanche' stay lowercase mid-sentence here.", tags: ["orthographe"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.039", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "La pharmacie est fermée le dimanche.", en: "The pharmacy is closed on Sundays.", ipa: "la faʁ.ma.si ɛ fɛʁ.me lə di.mɑ̃ʃ", notes: "'Le dimanche' here means every Sunday, the pharmacy's regular closing day.", tags: ["grammaire"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.041", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Le samedi, je fais du sport avec mon frère.", en: "On Saturdays, I do sports with my brother.", ipa: "lə sam.di ʒə fɛ dy spɔʁ a.vɛk mɔ̃ fʁɛʁ", notes: "'Le samedi' indicates a weekly habit of exercising with his brother.", tags: ["grammaire"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.042", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Mercredi, nous allons au cinéma en famille.", en: "On Wednesday, we're going to the movies as a family.", ipa: "mɛʁ.kʁə.di nu za.lɔ̃ o si.ne.ma ɑ̃ fa.mij", tags: ["orthographe"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.043", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Le mardi matin, j'ai un cours de français.", en: "On Tuesday mornings, I have a French class.", ipa: "lə maʁ.di ma.tɛ̃ ʒe œ̃ kuʁ də fʁɑ̃.sɛ", notes: "'Le mardi matin' marks a fixed recurring class slot every week.", tags: ["grammaire"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.044", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Dimanche prochain, c'est la fête des mères.", en: "Next Sunday is Mother's Day.", ipa: "di.mɑ̃ʃ pʁɔ.ʃɛ̃ sɛ la fɛt de mɛʁ", notes: "'Dimanche prochain' stays lowercase and needs no article.", tags: ["orthographe"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.045", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Lundi ou mardi, ça t'arrange?", en: "Monday or Tuesday, does that work for you?", ipa: "lœ̃.di u maʁ.di sa ta.ʁɑ̃ʒ", tags: ["orthographe"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.113", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Cette année, mon anniversaire tombe un mardi.", en: "This year, my birthday falls on a Tuesday.", ipa: "sɛ.ta.ne mɔ̃ na.ni.vɛʁ.sɛʁ tɔ̃b œ̃ maʁ.di", notes: "'Mardi' stays lowercase here since it is not the first word of the sentence.", tags: ["orthographe"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.120", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Elle a soufflé ses bougies un lundi soir.", en: "She blew out her candles on a Monday evening.", ipa: "ɛ.la su.fle se bu.ʒi œ̃ lœ̃.di swaʁ", tags: ["orthographe"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.121", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Je dois acheter un cadeau avant jeudi.", en: "I need to buy a gift before Thursday.", ipa: "ʒə dwa aʃ.te œ̃ ka.do a.vɑ̃ ʒø.di", tags: ["orthographe"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.156", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "J'ai cours de yoga le lundi et le mercredi soir.", en: "I have yoga class on Monday and Wednesday evenings.", ipa: "ʒe kuʁ də jɔ.ga lə lœ̃.di e lə mɛʁ.kʁə.di swaʁ", notes: "Naming both days with 'le' shows a fixed weekly schedule, every Monday and every Wednesday.", tags: ["grammaire"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.157", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Le docteur me reçoit uniquement le mardi.", en: "The doctor only sees me on Tuesdays.", ipa: "lə dɔk.tœʁ mə ʁə.swa y.nik.mɑ̃ lə maʁ.di", notes: "'Le mardi' here means every Tuesday is reserved for these appointments.", tags: ["grammaire"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.158", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Nous avons une réunion d'équipe tous les vendredis.", en: "We have a team meeting every Friday.", ipa: "nu za.vɔ̃ yn ʁe.y.njɔ̃ de.kip tu le vɑ̃.dʁə.di", notes: "'Tous les vendredis' emphasizes that the meeting repeats every single Friday.", tags: ["grammaire"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.161", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Elle prend le train le vendredi soir pour rentrer chez ses parents.", en: "She takes the train on Friday evenings to go back to her parents' house.", ipa: "ɛl pʁɑ̃ lə tʁɛ̃ lə vɑ̃.dʁə.di swaʁ puʁ ʁɑ̃.tʁe ʃe se pa.ʁɑ̃", notes: "'Le vendredi soir' describes a regular weekly routine, not a single trip.", tags: ["grammaire"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.162", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Le cours de cuisine a lieu un mercredi sur deux.", en: "The cooking class takes place every other Wednesday.", ipa: "lə kuʁ də kɥi.zin a ljø œ̃ mɛʁ.kʁə.di syʁ dø", tags: ["orthographe"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.177", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Elle arrose ses plantes le mercredi et le samedi.", en: "She waters her plants on Wednesdays and Saturdays.", ipa: "ɛ.la.ʁoz se plɑ̃t lə mɛʁ.kʁə.di e lə sam.di", notes: "'Le mercredi et le samedi' describes a fixed watering routine every week.", tags: ["grammaire"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.195", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Tous les jeudis, elle prend son cours de yoga à dix-huit heures.", en: "Every Thursday, she has her yoga class at six in the evening.", notes: "{\"tiles\":[{\"w\":\"Tous les jeudis,\",\"t\":\"every thursday,\"},{\"w\":\"elle prend\",\"t\":\"she takes\"},{\"w\":\"son cours de yoga\",\"t\":\"her yoga class\"},{\"w\":\"à dix-huit heures.\",\"t\":\"at six in the evening\"}]}", tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.223", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Tous les mardis, je vais à la bibliothèque après le travail.", en: "Every Tuesday, I go to the library after work.", notes: "{\"tiles\":[{\"w\":\"Tous les mardis,\",\"t\":\"every tuesday,\"},{\"w\":\"je vais\",\"t\":\"i go\"},{\"w\":\"à la bibliothèque\",\"t\":\"to the library\"},{\"w\":\"après le travail.\",\"t\":\"after work\"}]}", tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.224", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Le mercredi, mon fils a son cours de musique à seize heures.", en: "On Wednesday, my son has his music class at four in the afternoon.", notes: "{\"tiles\":[{\"w\":\"Le mercredi,\",\"t\":\"on wednesday,\"},{\"w\":\"mon fils\",\"t\":\"my son\"},{\"w\":\"a son cours de musique\",\"t\":\"has his music class\"},{\"w\":\"à seize heures.\",\"t\":\"at four in the afternoon\"}]}", tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },
  {
    id: "fr.a1.jours-et-mois.225", kind: "sentence", level: "a1", theme: "jours-et-mois", fr: "Tous les jeudis soir, nous regardons un film en famille.", en: "Every Thursday evening, we watch a movie as a family.", notes: "{\"tiles\":[{\"w\":\"Tous les jeudis soir,\",\"t\":\"every thursday evening,\"},{\"w\":\"nous regardons\",\"t\":\"we watch\"},{\"w\":\"un film\",\"t\":\"a movie\"},{\"w\":\"en famille.\",\"t\":\"as a family\"}]}", tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },
  {
    id: "fr.sons.jours-et-mois.001", kind: "word", level: "sons", theme: "jours-et-mois", fr: "lundi", en: "Monday", ipa: "/lœ̃.di/", respell: "luhn-DEE", notes: "Days are not capitalized in French. Le lundi means every Monday, lundi alone means this Monday.", tags: ["jours-et-mois","jour"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.jours-et-mois.002", kind: "word", level: "sons", theme: "jours-et-mois", fr: "mardi", en: "Tuesday", ipa: "/maʁ.di/", respell: "mar-DEE", notes: "Say 'mar-dee'. From Mars, like English Tuesday comes from a god of war.", tags: ["jours-et-mois","jour"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.jours-et-mois.003", kind: "word", level: "sons", theme: "jours-et-mois", fr: "mercredi", en: "Wednesday", ipa: "/mɛʁ.kʁə.di/", respell: "mehr-kruh-DEE", notes: "Three syllables: 'mair-kruh-dee'. The middle e is very light.", tags: ["jours-et-mois","jour"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.jours-et-mois.004", kind: "word", level: "sons", theme: "jours-et-mois", fr: "jeudi", en: "Thursday", ipa: "/ʒø.di/", respell: "zhuh-DEE", notes: "Say 'zhuh-dee' with a soft j, like the s in 'measure'.", tags: ["jours-et-mois","jour"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.jours-et-mois.005", kind: "word", level: "sons", theme: "jours-et-mois", fr: "vendredi", en: "Friday", ipa: "/vɑ̃.dʁə.di/", respell: "vahn-druh-DEE", notes: "Say 'vahn-druh-dee'. The first syllable is nasal.", tags: ["jours-et-mois","jour"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.jours-et-mois.006", kind: "word", level: "sons", theme: "jours-et-mois", fr: "samedi", en: "Saturday", ipa: "/sam.di/", respell: "sam-DEE", notes: "The middle e is usually dropped in speech: 'sam-dee'.", tags: ["jours-et-mois","jour"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.jours-et-mois.007", kind: "word", level: "sons", theme: "jours-et-mois", fr: "dimanche", en: "Sunday", ipa: "/di.mɑ̃ʃ/", respell: "dee-MAHNSH", notes: "Say 'dee-mahnsh'. In France the week starts on lundi, so dimanche closes the week.", tags: ["jours-et-mois","jour"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.jours-et-mois.025", kind: "word", level: "sons", theme: "jours-et-mois", fr: "hier", en: "yesterday", ipa: "/jɛʁ/", respell: "YEHR", notes: "One syllable: 'yair'. The h is silent, as always in French.", tags: ["jours-et-mois","adverbe"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.jours-et-mois.026", kind: "word", level: "sons", theme: "jours-et-mois", fr: "demain", en: "tomorrow", ipa: "/də.mɛ̃/", respell: "duh-MAN", notes: "Say 'duh-man' with a nasal ending. A demain ! means see you tomorrow.", tags: ["jours-et-mois","adverbe"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.jours-et-mois.035", kind: "word", level: "sons", theme: "jours-et-mois", fr: "la semaine prochaine", en: "next week", ipa: "/sə.mɛn pʁɔ.ʃɛn/", respell: "LAH suh-MEN proh-SHEN", gender: "f", notes: "Say 'suh-men proh-shen'. On se voit la semaine prochaine, see you next week.", tags: ["jours-et-mois","phrase"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.jours-et-mois.036", kind: "word", level: "sons", theme: "jours-et-mois", fr: "la semaine dernière", en: "last week", ipa: "/sə.mɛn dɛʁ.njɛʁ/", respell: "LAH suh-MEN dehr-NYEHR", gender: "f", notes: "Say 'suh-men dair-nyair'. Dernière is the feminine of dernier, last.", tags: ["jours-et-mois","phrase"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.jours-et-mois.040", kind: "word", level: "sons", theme: "jours-et-mois", fr: "tous les jours", en: "every day", ipa: "/tu le ʒuʁ/", respell: "TOO LAY ZHOOR", notes: "Say 'too lay zhoor'. The s of tous is silent here. Je travaille tous les jours.", tags: ["jours-et-mois","phrase"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },

  // ── adjectifs-essentiels: 1 rows ──
  {
    id: "fr.a1.adjectifs-essentiels.146", kind: "sentence", level: "a1", theme: "adjectifs-essentiels", fr: "Le musée est ouvert le samedi.", en: "The museum is open on Saturdays.", ipa: "lə my.ze ɛ u.vɛʁ lə sam.di", notes: "'Ouvert' follows 'être' describing the museum.", tags: ["grammaire"], drills: ["dictation"], version: 1,
  },

  // ── cinema: 1 rows ──
  {
    id: "fr.a1.cinema.058", kind: "sentence", level: "a1", theme: "cinema", fr: "Le cinéma est fermé le lundi.", en: "The cinema is closed on Mondays.", ipa: "lə si.ne.ma ɛ fɛʁ.me lə lœ̃.di", tags: [], drills: ["sentence","review"], version: 1,
  },
];

export const IMPORTED_IDS: string[] = IMPORTED.map((r) => r.id);

/** Every id this lesson names that it did not author: the reused half plus the
 *  imported half. Exported so the batch can check both against the database and
 *  the merge can check both against the seed without restating either list. */
export const BORROWED_IDS: string[] = [...new Set([...REUSED_IDS, ...IMPORTED_IDS])];

/** The seven day headwords, in week order, as ids. Derived from THE_SEVEN and
 *  the manifest rather than typed, so a manifest edit that dropped one fails
 *  here instead of rendering an empty card. */
export const DAY_IDS: string[] = THE_SEVEN.map((d) => {
  const row = IMPORTED.find((r) => r.theme === 'jours-et-mois' && r.kind === 'word' && r.fr === d);
  if (!row) throw new Error(`a1.08: no corpus row for the day "${d}" in the imported manifest`);
  return row.id;
});

/* ─── The four frame words this lesson SHOWS but does not import ────────────
 *
 * `la semaine`, `le week-end`, `le jour` and `le calendrier` are on this
 * lesson's cards and are NOT corpus rows in the seed, which is unusual enough
 * to need saying.
 *
 * a1.03 teaches ten noun-ending rules and prints a COUNT and an ACCURACY for
 * each one on its cards. a1-03-genre.test.ts re-measures all twenty figures
 * from seed.json on every run, through `endingPopulation` in gender.logic.ts,
 * whose population is every gendered single-word noun in the seed AT ANY LEVEL.
 * There is no level filter, which is the detail that caught this build: v2 of
 * this lesson copied these four rows in and moved two of a1.03's ten cards.
 *
 *     -ier   card says 55 nouns, corpus said 56   (le calendrier)
 *     -ine   card says 28 at 96%, corpus said 29 at 97%   (la semaine)
 *
 * `le jour` and `le week-end` moved nothing today and are withdrawn with the
 * other two anyway, because "moves no rule a1.03 currently states" is a fact
 * about a1.03's card list rather than about this lesson, and the next ending
 * rule anybody adds could be -our.
 *
 * The alternative was to re-measure a1.03 and correct its two cards. Not taken:
 * changing another unit's shipped body is that unit's build to make, which is
 * the line a1.06 drew for a1.07 and a1.07 kept. It is also the wrong fix, and
 * the reason is worth recording. a1.03's figures are measured over seed.json,
 * which is a CUT of the corpus rather than the corpus, so "-ier: 55 nouns" is
 * a fact about what happens to be bundled and not a fact about French. Every
 * lesson that imports a gendered noun will move it again. That is a real
 * problem and it belongs to a1.03.
 *
 * Nothing is lost to the learner: the four words are on the cards, in the
 * vocabulary deck and in the reference sheet as display strings. What they do
 * not get is an SRS card of their own, which is the correct trade against
 * silently making another lesson's printed numbers wrong.
 *
 * Withdrawn AFTER v2 had already written them into the seed, so the merge
 * removes them by id. See WITHDRAWN_IDS. */
export const WITHDRAWN_IDS: string[] = [
  'fr.sons.jours-et-mois.020', // le jour        , m, single word
  'fr.sons.jours-et-mois.021', // la semaine     , f, single word, moved -ine
  'fr.sons.jours-et-mois.031', // le calendrier  , m, single word, moved -ier
  'fr.sons.jours-et-mois.044', // le week-end    , m, single word (a hyphen is not whitespace)
];

/** The frame words that ARE corpus rows: yesterday, tomorrow, every day, next
 *  week, last week. None carries a gender on a single word, so none can enter
 *  a1.03's measured population. Everything a day needs around it that is not a
 *  month and not a clock. */
export const FRAME_IDS: string[] = [
  'fr.sons.jours-et-mois.025', // hier
  'fr.sons.jours-et-mois.026', // demain
  'fr.sons.jours-et-mois.040', // tous les jours
  'fr.sons.jours-et-mois.035', // la semaine prochaine
  'fr.sons.jours-et-mois.036', // la semaine dernière
];

/** The `fr` of a corpus row this lesson names, so no screen retypes a sentence
 *  the corpus already stores. Throws rather than returning undefined: a card
 *  showing "undefined" is worse than a build that stops. */
const BY_ID = new Map<string, { fr: string; en: string }>([
  ...IMPORTED.map((r) => [r.id, { fr: r.fr, en: r.en }] as const),
  ...JOURS.map((w) => [w.id, { fr: w.fr, en: w.en }] as const),
  // The reused half too, so a section can read a sentence this lesson borrows
  // without a second lookup. Their `fr` is verified against BOTH copies: the
  // batch compares it to Postgres and the merge compares it to the seed.
  ...REUSED.map((r) => [r.id, { fr: r.fr, en: r.en }] as const),
]);

export function frOf(id: string): string {
  const row = BY_ID.get(id);
  if (!row) throw new Error(`a1.08: no row for "${id}" in the corpus manifest. Add it, or name an id that exists.`);
  return row.fr;
}

/** The English gloss of a row this lesson names. */
export function enOf(id: string): string {
  const row = BY_ID.get(id);
  if (!row) throw new Error(`a1.08: no row for "${id}" in the corpus manifest`);
  return row.en;
}

/* ─── Months, which belong to a1.09 and are named here only to exclude them ──
 *
 * `jours-et-mois` holds all twelve as headwords, so the theme this lesson binds
 * to contains a1.09's whole vocabulary. That is the point of binding to it, and
 * it is also the risk: a lesson drawing from this theme could teach the months
 * by accident and leave a1.09 with nothing to introduce.
 *
 * Listed so a1-08-jours.test.ts can assert that none of them reaches a
 * production surface. A month appearing inside a reading line is allowed and
 * must not fail (« le premier dimanche de juin » is a real sentence about a
 * day), which is why the assertion is written against the surfaces the lesson
 * TEACHES from rather than against every string in the file.                  */
export const MONTHS = [
  'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
  'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre',
] as const;

/** The month headword ids, which this lesson must not name in `itemIds`. */
export const MONTH_IDS: string[] = [
  'fr.sons.jours-et-mois.008', 'fr.sons.jours-et-mois.009', 'fr.sons.jours-et-mois.010',
  'fr.sons.jours-et-mois.011', 'fr.sons.jours-et-mois.012', 'fr.sons.jours-et-mois.013',
  'fr.sons.jours-et-mois.014', 'fr.sons.jours-et-mois.015', 'fr.sons.jours-et-mois.016',
  'fr.sons.jours-et-mois.017', 'fr.sons.jours-et-mois.018', 'fr.sons.jours-et-mois.019',
];
