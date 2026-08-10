// The a1.19 corpus: what this lesson authors, what it imports, and the one
// respelling it repairs.
//
// THIS FILE IS THE SINGLE SOURCE OF TRUTH for the 22 authored rows, the imported
// rows, the reused rows, and every respelling a1.19 puts on a screen. The lesson
// body (questions-lesson.ts) reads `fr`, `ipa`, `respell` and `en` FROM HERE and
// never restates them, for the same reason possessifs-corpus.ts does: before
// that convention one word's transcription was typed by hand in five sections
// and the five copies were free to drift.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE PROBE RAN. A1-19-YESNO-QUESTIONS-PROMPT.md LISTS SIX UNVERIFIED ITEMS
//  AND ALL SIX ARE ANSWERED BELOW. FIVE OF ITS STATED CLAIMS ARE WRONG, AND
//  TWO OF THEM WOULD HAVE CHANGED WHAT THIS LESSON TEACHES.
// ══════════════════════════════════════════════════════════════════════════
//
// Measured 2026-08-07 with `pnpm corpus:probe --unit a1.19 --theme questions`,
// `scripts/_questions_probe.ts`, `scripts/_questions_probe2.ts` and
// `scripts/_questions_collision.ts`, all against Postgres.
//
//   1. "`oui` was not separately confirmed. Probe it before authoring."
//
//      IT EXISTS. fr.sons.mots-essentiels.042, respell WEE, carrying
//      flashcard/voiceflash, published. It sits one id below `non` at .043, so
//      the two were authored as a pair by somebody and the brief found one of
//      them. Imported rather than authored.
//
//   2. "`si` in this sense is essentially unattested. The probe finds three `si`
//      headwords and ALL ARE THE OTHER SENSES."
//
//      FALSE, and it is the claim that decided the most. Read the three rows
//      rather than counting them:
//
//        fr.sons.argot-de-base.037    "si"  en = "yes (contradicting a negative)"
//            notes: "Also the standard word for 'if'. This 'si' answers yes to a
//            negative question or statement; used at every register but
//            essential in casual argument."
//
//        fr.sons.mots-essentiels.037  "si"  en = "if"
//            notes: "...Also means 'yes' when contradicting a negative question."
//
//      One of the three IS the yes-to-a-negative sense, glossed as such, and a
//      second names it in its own notes. The brief's own recommendation was to
//      defer `si` for want of evidence. The evidence is there.
//
//   3. "`a1.18` Negation is unbuilt... If it has not landed, your learner has no
//      negative questions to answer."
//
//      IT LANDED DURING THIS BUILD. See the block below. That resolves the
//      brief's own option 3, which is its recommendation, to TEACH `si`.
//
//   4. "fr.sons.mots-essentiels.043 non NOHN -> NOHⁿ ... This is the same row
//      a1.18's brief flags. Whoever gets there second must not repair it twice."
//
//      NEITHER OF THEM NEEDED TO. The row was repaired on 2026-07-29, eight days
//      before this build and before either brief was written, and both briefs
//      are stale on it. Postgres and the seed both read NOHⁿ today and
//      `updated_at` is 2026-07-29T06:21:57Z, which is older than a1.18's own
//      lesson row. This lesson repairs a DIFFERENT row instead: see
//      RESPELL_REPAIRS.
//
//   5. "ids continuing the chosen theme's real sequence: fr.a1.questions.352 for
//      sentences and fr.sons.questions.174 for headwords."
//
//      The sentence half is right. The headword half assumes a gap that is not
//      there: fr.sons.questions ALREADY HOLDS 173 ROWS, 26 words and 147
//      phrases, and three of them are this lesson's own subject:
//
//          fr.sons.questions.014   "est-ce que"      ES-kuh
//          fr.sons.questions.077   "n'est-ce pas ?"  NEHS PAH
//          fr.sons.questions.169   "non ?"           NOHN     <- the repair
//
//      The same shape a1.17 found in mots-essentiels. THIS LESSON AUTHORS NO
//      HEADWORDS AT ALL and takes nothing in fr.sons.questions, which leaves the
//      whole sequence to a1.20. See the handover at the foot of the lesson.
//
//   6. "The register claims themselves ... were NOT measured against this
//      corpus."
//
//      THEY ARE NOW, and they hold. Measured over the 588 genuine yes/no
//      questions in the database, classified by shape rather than by a closed
//      list of verbs:
//
//          level   n     est-ce que   inversion   intonation
//          a1      251      25%          20%         55%
//          a2      114      18%          21%         59%
//          b1       66      20%          35%         45%
//          c1       29       7%          69%         24%
//
//          casual themes   n= 61   est-ce que  7%   inversion 13%   intonation 79%
//          formal themes   n= 28   est-ce que  4%   inversion 71%   intonation 25%
//
//      Inversion triples from a1 to c1 and is five times commoner in formal
//      themes than casual ones. Intonation does the reverse. The brief's
//      description is correct and this lesson can now say so on evidence.
//
//      ONE PART OF THE STANDARD STORY DOES NOT SURVIVE. `est-ce que` is not the
//      formal middle: it is the LEARNER-LEVEL middle, commonest at a1 (25%) and
//      rarest at c1 (7%), and it is scarcer in formal writing (4%) than in
//      casual speech (7%). It is unmarked rather than neutral-formal, which is
//      exactly what makes it a safe default and is why the reframe says "always
//      works" rather than "is polite".
//
// ══════════════════════════════════════════════════════════════════════════
//  a1.18 AND a1.22 BOTH LANDED WHILE THIS LESSON WAS BEING WRITTEN.
// ══════════════════════════════════════════════════════════════════════════
//
// The seed was v19 with 7,542 items and 31 lessons at this build's pre-flight
// probe. It is 7,638 items and 33 lessons now. a1.18.l1 "La négation" is in
// Postgres at v3 and a1.22.l1 "Pays & nationalités" at v1.
//
// NEITHER TOOK ANY ID THIS LESSON WANTED. fr.a1.questions is still 329 rows with
// a maximum of .351, checked after both landed, so NEXT FREE is still .352. a1.18
// authored into fr.a1.negation-et-restriction (68 rows, max .69) and a1.22 into
// fr.a1.pays-et-nationalites (max .320). Re-read rather than assumed, because
// a1.15 landed INSIDE a1.17's range between its probe and its first dry run and
// a highest-id check passed it cleanly.
//
// WHAT a1.18 CHANGES FOR THIS LESSON, read from its shipped body rather than
// from its brief:
//
//   - Its reframe is "Wrap the verb, then ask what the verb was." It teaches
//     ne… pas around a finite verb, the elision of ne, and the determiner
//     collapse to de. It negates être and avoir in 22 published rows, including
//     fr.a1.negation-et-restriction.048 « Nous ne sommes pas prêts. », which
//     carries this lesson's own hero adjective.
//   - It teaches `non` as a pro-sentence against `ne` as a preverbal clitic,
//     which is the distinction this lesson's answering act rests on. Credited in
//     grammarAssumed by name.
//   - IT AUTHORED NO NEGATIVE QUESTIONS AT ALL and mentions `si` nowhere. So the
//     negative question is unclaimed, and it is the one shape that only exists
//     where a1.18's negation meets this lesson's question forms. Neither lesson
//     could build it alone and this is the one that can.
//
// So `si` IS TAUGHT HERE, on a negative question authored in a1.18's own frame
// with a1.18's own adjective, and nothing about it contradicts what a1.18
// shipped. That is the brief's option 3 firing the way it was meant to.
//
// ── Why 22 rows are authored when `est-ce que` alone is 161 ────────────────
//
// The corpus proves all three methods abundantly and proves none of them
// MINIMALLY, which is the wall a1.09, a1.13 and a1.17 all hit. Its yes/no
// questions differ from each other in four places at once:
//
//     Est-ce que tu es français ?   /   Avez-vous la taille en dessous ?
//
// Both are correct, both are yes/no questions, and between them a learner cannot
// see what carried the choice: the method moved, the verb moved, the person
// moved and the situation moved.
//
// So what is authored is a TRIPLE: one question, three methods, nothing else
// moving. Read across a row and only the method changes.
//
//     Tu es prêt ?        Est-ce que tu es prêt ?        Es-tu prêt ?
//     Tu as faim ?        Est-ce que tu as faim ?        As-tu faim ?
//     Vous êtes prêts ?   Est-ce que vous êtes prêts ?   Êtes-vous prêts ?
//
// ── THE FINDING THAT IS ALSO THE ARGUMENT ─────────────────────────────────
//
// Two thirds of every triple ALREADY EXISTS in the corpus and the missing third
// is ALWAYS THE INVERSION. Checked exactly, string by string:
//
//     Tu es prêt ?               fr.a1.cafe.176                    published, in the seed
//     Est-ce que tu es prêt ?    fr.a1.questions-du-quotidien.075  published
//     Es-tu prêt ?               NOWHERE                           authored here
//
//     Tu as faim ?               fr.a1.questions.338               published, in the seed
//     Est-ce que tu as faim ?    fr.a1.questions-du-quotidien.072  published
//     As-tu faim ?               NOWHERE                           authored here
//
//     Vous êtes prêts ?          fr.a1.cafe.178                    published, in the seed
//     Est-ce que vous êtes prêts ?  NOWHERE                        authored here
//     Êtes-vous prêts ?          NOWHERE                           authored here
//
// ALL TWELVE INVERSION CELLS CAME BACK FREE. A corpus of 27,280 published
// sentences of ordinary French contains no inversion of any of these everyday
// questions, and that absence is itself the register evidence the brief said had
// never been measured. It is stated to the learner in act 4 and asserted in the
// test, because it is the most persuasive thing this lesson knows.
//
// ── The statement and the question are ONE STRING APART ────────────────────
//
// `Tu es prêt.` and `Tu es prêt ?` differ by one punctuation mark on the page
// and a rising contour in the mouth. Both are authored/imported with
// BYTE-IDENTICAL ipa and respell, which is the claim, exactly as a1.17 did with
// mon ami and mon amie. fr.a1.cafe.176 already ships `/ty ɛ pʁɛ/` and
// `tü eh PREH`; the statement is authored to match it byte for byte and the
// batch, the merge and the test all assert the identity.
//
// ── What no format can test, said here so no question ships certifying it ──
//
// `fold()` strips punctuation and whitespace, so NO FREE-TEXT FORMAT CAN TEST
// THE QUESTION MARK: `Tu es prêt` and `Tu es prêt ?` fold identically. By the
// same mechanism no free-text format can test THE HYPHEN in `es-tu`. Both are
// mcq-only, and the quiz says so in its own comment. This is the same limitation
// the a1.08 and a1.09 briefs both got wrong about capital letters, invariant §4.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

/* ─── What the screens display ─────────────────────────────────────────────
 *
 * Every French unit a1.19 puts on a card, with the respelling this lesson stands
 * behind. Keyed by the French form, because many of these are display strings
 * rather than corpus rows.                                                    */

export type Display = { fr: string; ipa: string; respell: string; en: string };

const D = (fr: string, ipa: string, res: string, en: string): Display =>
  ({ fr, ipa: `/${ipa}/`, respell: `[${res}]`, en });

export const RESPELL: Record<string, Display> = {
  /* THE STATEMENT AND THE QUESTION. Byte-identical on purpose: that identity IS
   * act 2. The values are the ones fr.a1.cafe.176 already ships, so the card
   * here and the flashcard hub cannot disagree. */
  'Tu es prêt ?': D('Tu es prêt ?', 'ty ɛ pʁɛ', 'tü eh PREH', 'Are you ready?'),
  'Tu es prêt.': D('Tu es prêt.', 'ty ɛ pʁɛ', 'tü eh PREH', 'You are ready.'),

  /* The three methods on the hero question. */
  'Est-ce que tu es prêt ?': D('Est-ce que tu es prêt ?', 'ɛs kə ty ɛ pʁɛ', 'ess-kuh tü eh PREH', 'Are you ready?'),
  'Es-tu prêt ?': D('Es-tu prêt ?', 'ɛ ty pʁɛ', 'ay-TÜ PREH', 'Are you ready?'),

  /* The same three on avoir. */
  'Tu as faim ?': D('Tu as faim ?', 'ty a fɛ̃', 'tü ah FAHⁿ', 'Are you hungry?'),
  'Est-ce que tu as faim ?': D('Est-ce que tu as faim ?', 'ɛs kə ty a fɛ̃', 'ess-kuh tü ah FAHⁿ', 'Are you hungry?'),
  'As-tu faim ?': D('As-tu faim ?', 'a ty fɛ̃', 'ah-TÜ FAHⁿ', 'Are you hungry?'),

  /* And on vous, which is where the register question gets real. */
  'Vous êtes prêts ?': D('Vous êtes prêts ?', 'vu zɛt pʁɛ', 'voo zet PREH', 'Are you ready?'),
  'Est-ce que vous êtes prêts ?': D('Est-ce que vous êtes prêts ?', 'ɛs kə vu zɛt pʁɛ', 'ess-kuh voo zet PREH', 'Are you ready?'),
  'Êtes-vous prêts ?': D('Êtes-vous prêts ?', 'ɛt vu pʁɛ', 'eht-VOO PREH', 'Are you ready?'),

  /* The twelve inversion cells. Six carry a nasal and close it with the
   * superscript: faim in all six avoir cells, plus sont-ils, ont-ils and
   * avons-nous. Verified against the real hasPlainNasalFor, not by eye. */
  'Est-il prêt ?': D('Est-il prêt ?', 'ɛ til pʁɛ', 'eh-TEEL PREH', 'Is he ready?'),
  'Est-elle prête ?': D('Est-elle prête ?', 'ɛ tɛl pʁɛt', 'eh-TEL PREHT', 'Is she ready?'),
  'Sommes-nous prêts ?': D('Sommes-nous prêts ?', 'sɔm nu pʁɛ', 'som-NOO PREH', 'Are we ready?'),
  'Sont-ils prêts ?': D('Sont-ils prêts ?', 'sɔ̃ til pʁɛ', 'sohⁿ-TEEL PREH', 'Are they ready?'),
  'A-t-il faim ?': D('A-t-il faim ?', 'a til fɛ̃', 'ah-TEEL FAHⁿ', 'Is he hungry?'),
  'A-t-elle faim ?': D('A-t-elle faim ?', 'a tɛl fɛ̃', 'ah-TEL FAHⁿ', 'Is she hungry?'),
  'Avons-nous faim ?': D('Avons-nous faim ?', 'a vɔ̃ nu fɛ̃', 'ah-vohⁿ-NOO FAHⁿ', 'Are we hungry?'),
  'Avez-vous faim ?': D('Avez-vous faim ?', 'a ve vu fɛ̃', 'ah-vay-VOO FAHⁿ', 'Are you hungry?'),
  'Ont-ils faim ?': D('Ont-ils faim ?', 'ɔ̃ til fɛ̃', 'ohⁿ-TEEL FAHⁿ', 'Are they hungry?'),

  /* The elision, and the one place `on` earns a card. */
  "Est-ce qu'il est prêt ?": D("Est-ce qu'il est prêt ?", 'ɛs kil ɛ pʁɛ', 'ess-KEEL eh PREH', 'Is he ready?'),
  "Est-ce qu'elle est prête ?": D("Est-ce qu'elle est prête ?", 'ɛs kɛl ɛ pʁɛt', 'ess-KEL eh PREHT', 'Is she ready?'),
  "Est-ce qu'on est prêt ?": D("Est-ce qu'on est prêt ?", 'ɛs kɔ̃ nɛ pʁɛ', 'ess-kohⁿ-NEH PREH', 'Are we ready?'),

  /* The negative question and the answer only `si` can give. Built on a1.18's
   * own frame: it ships « Nous ne sommes pas prêts. » with the same adjective. */
  "Tu n'es pas prêt ?": D("Tu n'es pas prêt ?", 'ty nɛ pɑ pʁɛ', 'tü neh pah PREH', 'You are not ready?'),
  'Si, je suis prêt.': D('Si, je suis prêt.', 'si ʒə sɥi pʁɛ', 'see zhuh swee PREH', 'Yes I am, actually.'),

  /* The ordinary answers. */
  'Oui, je suis prêt.': D('Oui, je suis prêt.', 'wi ʒə sɥi pʁɛ', 'wee zhuh swee PREH', 'Yes, I am ready.'),
  'Non, je suis fatigué.': D('Non, je suis fatigué.', 'nɔ̃ ʒə sɥi fa ti ɡe', 'nohⁿ zhuh swee fah-tee-GAY', 'No, I am tired.'),
  "Oui, j'ai faim.": D("Oui, j'ai faim.", 'wi ʒe fɛ̃', 'wee zhay FAHⁿ', 'Yes, I am hungry.'),

  /* The imported headwords, carried here so the lesson reads every transcription
   * from one place. Values are the ones the published rows already hold, kept
   * rather than restyled: a variant is not a violation (invariant §9) and a card
   * here disagreeing with the flashcard hub is a difference the learner sees.
   * `non ?` is the exception and is REPAIRED. See RESPELL_REPAIRS. */
  oui: D('oui', 'wi', 'WEE', 'yes'),
  non: D('non', 'nɔ̃', 'NOHⁿ', 'no'),
  si: D('si', 'si', 'SEE', 'yes, when you are contradicting a no'),
  'peut-être': D('peut-être', 'pø.tɛtʁ', 'puh-TEHTR', 'maybe'),
  'est-ce que': D('est-ce que', 'ɛs.kə', 'ES-kuh', 'turns a statement into a yes-no question'),
  "n'est-ce pas ?": D("n'est-ce pas ?", 'nɛs pɑ', 'NEHS PAH', 'isn\'t it? right?'),
  'non ?': D('non ?', 'nɔ̃', 'NOHⁿ', 'no? right?'),
};

/** The bracketed respelling of a French form this lesson displays. Throws rather
 *  than returning undefined: a card silently missing its transcription is the
 *  failure this file exists to stop, and it looks identical to a card that never
 *  wanted one. */
export function sub(fr: string): string {
  const d = RESPELL[fr];
  if (!d) throw new Error(`a1.19: no respelling authored for "${fr}". Add it to RESPELL.`);
  return d.respell;
}

/** The IPA of a French form this lesson displays, in slashes. */
export function ipaOf(fr: string): string {
  const d = RESPELL[fr];
  if (!d) throw new Error(`a1.19: no IPA authored for "${fr}". Add it to RESPELL.`);
  return d.ipa;
}

const unbracket = (s: string) => s.replace(/^\[|\]$/g, '');

/* ─── The three methods, and the register that separates them ──────────────
 *
 * Named here so the lesson, the batch, the merge and the test all count the same
 * set rather than four hand lists free to drift.
 *
 * `when` is the learner-facing register label and it is the whole canDo. A
 * method taught without its register is the failure the canDo is written
 * against, and the test asserts each one INDIVIDUALLY for that reason.
 *
 * `share` is measured rather than asserted: the percentage of genuine yes/no
 * questions at level a1 in the database that use this method, from
 * scripts/_questions_probe2.ts on 2026-08-07 over 251 rows.                   */

export type Method = {
  key: 'intonation' | 'estCeQue' | 'inversion';
  /** What a learner would call it, with no grammar jargon anywhere. */
  name: string;
  /** The register label, which is the teaching. */
  when: string;
  /** One line on what physically happens to the sentence. */
  how: string;
  /** Share of a1 yes/no questions in the corpus, measured 2026-08-07. */
  a1Share: number;
  /** Share of yes/no questions in formal themes, measured the same day. */
  formalShare: number;
  /** Share in casual themes. */
  casualShare: number;
};

export const METHODS: Method[] = [
  {
    key: 'intonation',
    name: 'just your voice',
    when: 'talking to anybody, out loud',
    how: 'Nothing moves. You let your voice go up at the end.',
    a1Share: 55, formalShare: 25, casualShare: 79,
  },
  {
    key: 'estCeQue',
    name: 'est-ce que in front',
    when: 'anywhere, spoken or written, and never wrong',
    how: 'You bolt three little words onto the front. Nothing inside the sentence moves.',
    a1Share: 25, formalShare: 4, casualShare: 7,
  },
  {
    key: 'inversion',
    name: 'swap them round',
    when: 'writing something careful, or being formal out loud',
    how: 'The verb and the person change places and a hyphen joins them.',
    a1Share: 20, formalShare: 71, casualShare: 13,
  },
];

/* ─── The three triples: one question, three methods, nothing else moving ───
 *
 * The cell ids are a MIX of imported and authored, because two thirds of each
 * triple already exists. That is recorded per cell rather than smoothed over:
 * the fact that the corpus supplies the first two columns and never the third is
 * the lesson's own evidence for register.                                     */

export type TripleCell = {
  method: Method['key'];
  /** The corpus id, whether this lesson authored it or found it. */
  id: string;
  /** Did this lesson write it, or was it already published? */
  origin: 'authored' | 'imported' | 'reused';
};

export type Triple = {
  key: string;
  /** What the question means, once, so no cell restates it. */
  en: string;
  /** Who the learner is imagining talking to. Drives the register teaching. */
  situation: string;
  cells: [TripleCell, TripleCell, TripleCell];
};

export const TRIPLES: Triple[] = [
  {
    key: 'pret',
    en: 'Are you ready?',
    situation: 'one person you would say tu to',
    cells: [
      { method: 'intonation', id: 'fr.a1.cafe.176', origin: 'reused' },
      { method: 'estCeQue', id: 'fr.a1.questions-du-quotidien.075', origin: 'imported' },
      { method: 'inversion', id: 'fr.a1.questions.352', origin: 'authored' },
    ],
  },
  {
    key: 'faim',
    en: 'Are you hungry?',
    situation: 'a friend, across a table',
    cells: [
      { method: 'intonation', id: 'fr.a1.questions.338', origin: 'reused' },
      { method: 'estCeQue', id: 'fr.a1.questions-du-quotidien.072', origin: 'imported' },
      { method: 'inversion', id: 'fr.a1.questions.358', origin: 'authored' },
    ],
  },
  {
    key: 'prets',
    en: 'Are you ready?',
    situation: 'a group, or one person you are being careful with',
    cells: [
      { method: 'intonation', id: 'fr.a1.cafe.178', origin: 'reused' },
      { method: 'estCeQue', id: 'fr.a1.questions.367', origin: 'authored' },
      { method: 'inversion', id: 'fr.a1.questions.356', origin: 'authored' },
    ],
  },
];

/* ─── The twelve inversion forms, as a closed list ──────────────────────────
 *
 * With être and avoir only the whole set is short, so it is taught as a list the
 * learner can finish rather than a pattern they extend. Two frames, one per
 * verb, so only the person moves down a column.
 *
 * `ai-je` AND `suis-je` ARE DELIBERATELY ABSENT. Both are pg=0 across 27,280
 * published sentences, and the brief is right that drilling a form nobody says
 * teaches a wrong instinct. The test asserts their absence BY NAME so a later
 * author does not "complete the paradigm".                                    */

export type InversionForm = {
  /** The inverted verb-and-person, which is what the deck shows. */
  form: string;
  /** Which verb's half of the list. */
  verb: 'être' | 'avoir';
  /** The subject pronoun, as a1.05 gave it. */
  who: string;
  /** The corpus id of the full question built on it. */
  id: string;
  /** Does this form insert a -t- ? */
  insertsT: boolean;
};

export const INVERSIONS: InversionForm[] = [
  { form: 'es-tu', verb: 'être', who: 'tu', id: 'fr.a1.questions.352', insertsT: false },
  { form: 'est-il', verb: 'être', who: 'il', id: 'fr.a1.questions.353', insertsT: false },
  { form: 'est-elle', verb: 'être', who: 'elle', id: 'fr.a1.questions.354', insertsT: false },
  { form: 'sommes-nous', verb: 'être', who: 'nous', id: 'fr.a1.questions.355', insertsT: false },
  { form: 'êtes-vous', verb: 'être', who: 'vous', id: 'fr.a1.questions.356', insertsT: false },
  { form: 'sont-ils', verb: 'être', who: 'ils', id: 'fr.a1.questions.357', insertsT: false },
  { form: 'as-tu', verb: 'avoir', who: 'tu', id: 'fr.a1.questions.358', insertsT: false },
  { form: 'a-t-il', verb: 'avoir', who: 'il', id: 'fr.a1.questions.359', insertsT: true },
  { form: 'a-t-elle', verb: 'avoir', who: 'elle', id: 'fr.a1.questions.360', insertsT: true },
  { form: 'avons-nous', verb: 'avoir', who: 'nous', id: 'fr.a1.questions.361', insertsT: false },
  { form: 'avez-vous', verb: 'avoir', who: 'vous', id: 'fr.a1.questions.362', insertsT: false },
  { form: 'ont-ils', verb: 'avoir', who: 'ils', id: 'fr.a1.questions.363', insertsT: false },
];

/** The twelve forms as bare strings, deduplicated from INVERSIONS rather than
 *  listed, so the lesson, the batch and the test count one set. The test names
 *  all twelve individually: a coverage total would pass with two swapped. */
export const THE_TWELVE: string[] = INVERSIONS.map((i) => i.form);

export const ETRE_INVERSIONS = INVERSIONS.filter((i) => i.verb === 'être');
export const AVOIR_INVERSIONS = INVERSIONS.filter((i) => i.verb === 'avoir');

/** The forms nobody says, asserted absent rather than merely not written. */
export const NEVER_TAUGHT_FORMS = ['ai-je', 'suis-je'];

/* ─── The rows this lesson authors ─────────────────────────────────────────
 *
 * fr.a1.questions.352 to .373. Twenty-two rows, confirmed free by
 * scripts/_questions_collision.ts on 2026-08-07 AFTER a1.18 and a1.22 landed.
 *
 * Every row is `kind: 'sentence'`, so none of them reaches a1.03's measured
 * ending population whatever noun it carries. Verified through the real
 * endingPopulation rather than argued: a1.11 moved a1.03's -e statistic by
 * authoring gendered single-word nouns and turned a lesson nobody had touched
 * red. THIS LESSON AUTHORS NO HEADWORD OF ANY KIND.                          */

const SFVRD: Item['drills'] = ['sentence', 'flashcard', 'voiceflash', 'review', 'dictation'];

export type QuestionRow = Omit<Item, 'drills'> & {
  /** Which teaching this row belongs to, for the tranche slices and the test. */
  role: 'inversion' | 'elision' | 'estCeQue' | 'statement' | 'answer' | 'negative';
  drills: Item['drills'];
};

const row = (
  seq: number, role: QuestionRow['role'], fr: string, tags: string[], notes: string,
): QuestionRow => {
  const d = RESPELL[fr];
  if (!d) throw new Error(`a1.19: authoring "${fr}" with no entry in RESPELL`);
  return {
    id: `fr.a1.questions.${seq}`, kind: 'sentence', level: 'a1', theme: 'questions',
    fr, en: d.en, ipa: d.ipa, respell: unbracket(d.respell), notes,
    tags: ['questions', ...tags],
    drills: SFVRD, version: 1,
    role,
  };
};

export const AUTHORED: QuestionRow[] = [
  /* ── The six être inversions, .352-.357 ───────────────────────────────── */
  row(352, 'inversion', 'Es-tu prêt ?', ['inversion', 'etre'],
    'The same question as Tu es prêt ?, with the two words swapped and a hyphen holding them together. '
    + 'The hyphen is not decoration: Es tu prêt ? without it is a typo rather than a question.'),
  row(353, 'inversion', 'Est-il prêt ?', ['inversion', 'etre'],
    'No t is added here, because est already ends in one. Compare A-t-il faim ?, where a has no consonant '
    + 'to lend and one is put in.'),
  row(354, 'inversion', 'Est-elle prête ?', ['inversion', 'etre'],
    'prête rather than prêt, because the word is describing a woman. The question form did not cause that: '
    + 'it would be prête in the statement too.'),
  row(355, 'inversion', 'Sommes-nous prêts ?', ['inversion', 'etre'],
    'The nous form, and it is the longest of the twelve. Nothing special happens to it.'),
  row(356, 'inversion', 'Êtes-vous prêts ?', ['inversion', 'etre'],
    'The one of the twelve you will hear most often, because vous is already the careful pronoun and '
    + 'inversion is the careful form. The two travel together.'),
  row(357, 'inversion', 'Sont-ils prêts ?', ['inversion', 'etre'],
    'The t on the end of sont is silent in the statement Ils sont prêts, and inversion wakes it up: this '
    + 'comes out as sohⁿ-TEEL.'),

  /* ── The six avoir inversions, .358-.363 ──────────────────────────────── */
  row(358, 'inversion', 'As-tu faim ?', ['inversion', 'avoir'],
    'The same question as Tu as faim ?, swapped. Said to a friend across a table it sounds oddly stiff, '
    + 'which is the whole subject of this lesson rather than a fault in the sentence.'),
  row(359, 'inversion', 'A-t-il faim ?', ['inversion', 'avoir', 'insertion-t'],
    'A ends in a vowel and il starts with one, so a t is put between them. There is no such word as a-il. '
    + 'The t means nothing at all and is there only to keep the two vowels apart.'),
  row(360, 'inversion', 'A-t-elle faim ?', ['inversion', 'avoir', 'insertion-t'],
    'The same insertion with elle. If you can say A-t-il you can say A-t-elle, and those are the only two '
    + 'places in this lesson it happens.'),
  row(361, 'inversion', 'Avons-nous faim ?', ['inversion', 'avoir'],
    'No t is inserted, because avons already ends in a consonant. The rule only fires when a vowel would '
    + 'meet a vowel.'),
  row(362, 'inversion', 'Avez-vous faim ?', ['inversion', 'avoir'],
    'The avoir form you will meet most, and the corpus agrees: avez-vous turns up in shops, restaurants '
    + 'and waiting rooms far more than any other inversion on this list.'),
  row(363, 'inversion', 'Ont-ils faim ?', ['inversion', 'avoir'],
    'Like sont-ils, the silent t wakes up. Ils ont is said eel-ZOHⁿ and Ont-ils is said ohⁿ-TEEL, so the '
    + 'same two words rearrange their sounds completely.'),

  /* ── The elision, .364-.366 ───────────────────────────────────────────── */
  row(364, 'elision', "Est-ce qu'il est prêt ?", ['est-ce-que', 'elision'],
    'Est-ce que loses its e in front of il. This is the fourth time you have watched French refuse to let '
    + 'two vowel sounds meet, and the third different way it has got out of it.'),
  row(365, 'elision', "Est-ce qu'elle est prête ?", ['est-ce-que', 'elision'],
    'The same cut in front of elle. In fast speech ess-KEEL and ess-KEL are close enough to be worth '
    + 'listening for, and they are the only pair in this lesson your ear has real work to do on.'),
  row(366, 'elision', "Est-ce qu'on est prêt ?", ['est-ce-que', 'elision', 'liaison'],
    'And in front of on. Two things happen at once here: que loses its e, and the n of on carries over '
    + 'onto est, so the middle of this comes out as kohⁿ-NEH.'),

  /* ── The cell that completes the vous triple, .367 ────────────────────── */
  row(367, 'estCeQue', 'Est-ce que vous êtes prêts ?', ['est-ce-que', 'etre'],
    'The safe form of the vous question. Notice that est-ce que did not care that the pronoun changed: '
    + 'you bolt the same three words onto the front of anything.'),

  /* ── The statement, .368. THE SINGLE MOST IMPORTANT ROW IN THE LESSON ─── */
  row(368, 'statement', 'Tu es prêt.', ['intonation'],
    'A statement, and it is the same four words as the question. On the page one full stop separates them. '
    + 'Out loud one is a voice going down and the other is a voice going up, and nothing else differs at all.'),

  /* ── The answers, .369-.371 ───────────────────────────────────────────── */
  row(369, 'answer', 'Oui, je suis prêt.', ['reponse'],
    'Oui on its own is a complete answer. The rest is only there if you want to say more.'),
  row(370, 'answer', 'Non, je suis fatigué.', ['reponse'],
    'Non, then a reason. Nothing here needs a negative: saying why is friendlier than saying not.'),
  row(371, 'answer', "Oui, j'ai faim.", ['reponse', 'avoir'],
    'The answer to the avoir question, and j\'ai rather than je ai for the same reason est-ce qu\'il is not '
    + 'est-ce que il.'),

  /* ── The negative question and its answer, .372-.373 ──────────────────── */
  row(372, 'negative', "Tu n'es pas prêt ?", ['intonation', 'negation'],
    'A negative statement with a rising voice on the end, which makes it a question. The negation is the '
    + 'one the previous lesson taught, doing exactly what it did there; only the contour is new.'),
  row(373, 'answer', 'Si, je suis prêt.', ['reponse', 'negation'],
    'Not oui. When somebody asks you a question with a not in it and you want to disagree with the not, '
    + 'French has a separate word for that, and this is the only job it does.'),
];

export const AUTHORED_IDS: string[] = AUTHORED.map((r) => r.id);

/** The ids of one teaching group, in sequence order. */
export const roleIds = (role: QuestionRow['role']): string[] =>
  AUTHORED.filter((r) => r.role === role).map((r) => r.id);

/** The corpus Item, stripped of the teaching-only field. */
export function toItem(r: QuestionRow): Item {
  const { role: _r, ...item } = r;
  return item;
}

/* ─── The one respelling repair ────────────────────────────────────────────
 *
 * Display-only, on an imported row this lesson puts on a card. The batch prints
 * it and refuses to write if the stored value is no longer the broken one it
 * expects, because two people disagreeing about a transcription is a decision
 * rather than a merge.
 *
 * THE BRIEF ASKS ABOUT A DIFFERENT ROW AND THAT ROW NEEDS NOTHING.
 * fr.sons.mots-essentiels.043 "non" was repaired to NOHⁿ on 2026-07-29, before
 * this brief and before a1.18's, and both say it is outstanding. Postgres and
 * the seed agree on NOHⁿ today. Neither lesson got there second, because neither
 * of them had to get there at all.
 *
 * What IS still broken is the OTHER `non`, in this lesson's own theme, on the
 * card that teaches the casual tag question. Nobody has touched it.            */

export type RespellRepair = {
  id: string;
  fr: string;
  /** What the row carries today. The batch refuses if this has changed. */
  from: string;
  /** What it will carry. Always equal to this lesson's own RESPELL, unbracketed. */
  to: string;
  /** Does the SHARED checker catch the broken value? Recorded because a later
   *  author who trusts the checker alone will reintroduce anything it cannot
   *  see. This one it CAN. */
  caughtByChecker: boolean;
  why: string;
};

export const RESPELL_REPAIRS: RespellRepair[] = [
  {
    id: 'fr.sons.questions.169', fr: 'non ?',
    from: 'NOHN', to: unbracket(RESPELL['non ?'].respell), caughtByChecker: true,
    why: 'a plain n closes the nasal /ɔ̃/, which the house convention writes with a superscript. This row is in '
      + 'THIS lesson\'s theme and on the card that teaches the casual tag, so a screen reading NOHⁿ beside a '
      + 'flashcard hub reading NOHN is a contradiction the learner sees. Its twin fr.sons.mots-essentiels.043 '
      + 'carries the same word and was repaired on 2026-07-29 by somebody else; this one was missed because it '
      + 'is stored as "non ?" rather than "non" and a search for the bare word does not return it.',
  },
];

/** The repairs the shared checker cannot see. Empty for this lesson, and
 *  exported anyway so the batch prints the fact rather than leaving the next
 *  author to wonder whether it was checked. a1.13 had two, a1.17 none. */
export const REPAIRS_INVISIBLE_TO_CHECKER = RESPELL_REPAIRS.filter((r) => !r.caughtByChecker).map((r) => r.fr);

/** Rows carrying the same word that this lesson deliberately leaves alone, so
 *  the report names them and the next author does not re-discover them as new. */
export const NOT_REPAIRED = [
  {
    id: 'fr.sons.mots-essentiels.043', fr: 'non', respell: 'NOHⁿ',
    why: 'ALREADY CORRECT. Repaired 2026-07-29, before this brief and before a1.18\'s, and both call it outstanding.',
  },
  {
    id: 'fr.sons.mots-essentiels.065', fr: 'peut-être', respell: 'puh-TETR',
    why: 'a VARIANT rather than a violation. The house convention states a rule for nasals and none for /ɛ/, so '
      + 'TETR against TEHTR is a preference. Invariant §9 says repair only what breaks a stated rule. This lesson '
      + 'imports fr.sons.expressions-utiles.051 instead, which already reads puh-TEHTR and agrees with every '
      + 'other transcription here.',
  },
];

/* ─── Nasal forms checked BY NAME ──────────────────────────────────────────
 *
 * Carry a GENUINE nasal vowel and must close it with a superscript.
 * hasPlainNasalFor cannot see a word-internal nasal (invariant §3's first blind
 * spot, the one that let a1.09's sep-TAHNBR and a1.13's oh-RAHNZH through), so
 * these are asserted individually as well as through the shared checker.       */
export const NASAL_FORMS = [
  'Tu as faim ?', 'Est-ce que tu as faim ?', 'As-tu faim ?',
  'A-t-il faim ?', 'A-t-elle faim ?', 'Avons-nous faim ?', 'Avez-vous faim ?', 'Ont-ils faim ?',
  'Sont-ils prêts ?', "Est-ce qu'on est prêt ?", 'non', 'non ?',
  'Non, je suis fatigué.', "Oui, j'ai faim.",
];

/** Has NO nasal vowel and must NOT carry a superscript. `prêt` is the shape that
 *  matters: /pʁɛ/ is an oral vowel and a superscript on it would teach a sound
 *  that is not in the word while silencing nothing, which is a1.13's jaune trap
 *  exactly. `si`, `oui` and `es-tu` are here for the same reason. */
export const NOT_NASAL_FORMS = [
  'Tu es prêt ?', 'Tu es prêt.', 'Es-tu prêt ?', 'Est-il prêt ?', 'Est-elle prête ?',
  'Sommes-nous prêts ?', 'Êtes-vous prêts ?', 'Vous êtes prêts ?',
  "Est-ce qu'il est prêt ?", "Est-ce qu'elle est prête ?",
  'oui', 'si', 'Oui, je suis prêt.', 'Si, je suis prêt.', "Tu n'es pas prêt ?",
];

/* ─── What must never reach a learner surface ──────────────────────────────
 *
 * Written as MULTI-WORD PHRASES or as forms that cannot occur in legitimate
 * content, because a1.13's first draft listed its neighbour's material as single
 * words and the guard fired immediately on one of its own glosses. A guard that
 * fires on legitimate content gets deleted rather than fixed.                 */

/** a1.20's QUESTION WORDS, which sit at seq 23 and declare this unit as their
 *  prerequisite. The corpus hands these over constantly: 257 of the 329 rows in
 *  fr.a1.questions are question-word questions, which is 78% of the theme.
 *
 *  `que` is NOT in this list as a bare word and that is deliberate: `est-ce que`
 *  contains it, so a bare-word guard would fire on this lesson's own subject on
 *  every screen. `qu'est-ce que` is caught by its own entry, which is the form
 *  that actually matters, and the brief calls it "the most tempting thing to
 *  include".                                                                  */
export const QUESTION_WORDS = [
  'qui', 'quoi', 'où', 'quand', 'pourquoi', 'comment', 'combien',
  'quel', 'quelle', 'quels', 'quelles',
];

/** The glued forms, checked as substrings because they carry no space boundary
 *  in front of the question word. */
export const QUESTION_WORD_PHRASES = [
  "qu'est-ce que", "qu'est-ce qu'", "qu'est-ce qui", 'qui est-ce',
  'combien de', 'quel âge', 'quelle heure', 'à quelle heure',
];

/** Ungrammatical forms this lesson teaches BY NAME on its traps card and must
 *  never author as correct French. Every one is impossible IN FRENCH, so a hit
 *  on a correct-French surface is always a defect.
 *
 *  ONE OF THEM COLLIDES WITH ENGLISH AND IT COST A DRY RUN. `est-ce que on` is
 *  the un-elided error this lesson exists to prevent, and it is also the first
 *  four words of the perfectly good English phrase "Est-ce que on the front",
 *  which was a quiz option and a table heading here. The guard fired on both,
 *  correctly by its own lights and uselessly.
 *
 *  This is a1.13's lesson arriving in a new costume: a guard that fires on
 *  legitimate content gets deleted rather than fixed. The fix was to change the
 *  English rather than to weaken the guard, because "The est-ce que block" is
 *  better copy anyway. If a later author wants that phrasing back, the guard is
 *  right and the phrasing is wrong. */
export const FORBIDDEN_FORMS = [
  // inversion with the hyphen dropped
  'es tu', 'est il', 'est elle', 'sommes nous', 'etes vous', 'sont ils',
  'as tu', 'a t il', 'avons nous', 'avez vous', 'ont ils',
  // the -t- missing where it is compulsory, and present where it is not
  'a-il', 'a-elle', 'est-t-il', 'est-t-elle', 'sont-t-ils', 'ont-t-ils',
  // the elision not made
  'est-ce que il', 'est-ce que elle', 'est-ce que on',
  // the form nobody says
  'ai-je', 'suis-je',
  // est-ce que with the inside also inverted, which is the commonest overcorrection
  'est-ce que es-tu', 'est-ce qu\'es-tu', 'est-ce que as-tu',
];

/* ─── Withdrawn on purpose ─────────────────────────────────────────────────
 *
 * The rows this lesson most obviously wants and does not import, each for a
 * reason worth recording so nobody adds them back.                           */
export const WITHDRAWN_IDS: string[] = [
  // Carries « le tien », a POSSESSIVE PRONOUN. a1.17 bans all twenty-one of
  // those from every surface by name, and they are well beyond A1. The brief
  // names this row twice as the lesson's noun-subject inversion evidence.
  'fr.a1.questions.086',
  // Carries a U+203F tie, which renders as a low underscore on a Pixel 6. It is
  // already in the seed so importing would not have WRITTEN a new one, but this
  // lesson would have drawn it. Three other avez-vous rows do the same job.
  'fr.a1.salutations.270',
  // Both store no space before the question mark, against the convention every
  // other row here follows. In a lesson whose second act is about the question
  // mark being the only visible difference, that inconsistency is not free.
  'fr.a1.marche.165',
  'fr.a1.objets.181',
  // The verb is `aller`, which is a2.01. A clean -t- example that would sit in
  // the same deck as twelve forms the learner CAN produce.
  'fr.a1.questions.113',
  // THE ONLY ATTESTED yes-to-a-negative `si` SENTENCE, and it is a2, in a1.18's
  // own theme. The `si` teaching here uses the HEADWORD at
  // fr.sons.argot-de-base.037 instead, which is level sons and glossed exactly
  // right, so nothing is borrowed from the negation lesson's sentence range.
  'fr.a2.negation-et-restriction.090',
];

import { IMPORTED as IMPORTED_ROWS, REUSED as REUSED_ROWS } from './questions-imported.ts';

export const IMPORTED = IMPORTED_ROWS;
export const REUSED = REUSED_ROWS;
export const IMPORTED_IDS: string[] = IMPORTED.map((r) => r.id);
export const REUSED_IDS: string[] = REUSED.map((r) => r.id);

/** Every id this lesson names that it did not author. */
export const BORROWED_IDS: string[] = [...new Set([...REUSED_IDS, ...IMPORTED_IDS])];

/* ─── Reading a row's text without retyping it ─────────────────────────────
 *
 * Every French sentence a section displays is read through frOf(), so no screen
 * carries its own copy of a corpus row and no two screens can drift. Throws on
 * an unknown id: a card silently missing its sentence looks exactly like a card
 * that never wanted one.                                                     */

const ALL_ROWS: { id: string; fr: string; en: string }[] = [
  ...AUTHORED.map((r) => ({ id: r.id, fr: r.fr, en: r.en })),
  ...IMPORTED.map((r) => ({ id: r.id, fr: r.fr, en: r.en })),
  ...REUSED.map((r) => ({ id: r.id, fr: r.fr, en: r.en })),
];

const BY_ID = new Map(ALL_ROWS.map((r) => [r.id, r] as const));

export function frOf(id: string): string {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`a1.19: no French authored or recorded for "${id}"`);
  return r.fr;
}

export function enOf(id: string): string {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`a1.19: no gloss authored or recorded for "${id}"`);
  return r.en;
}

/** The respelling of a corpus row, looked up by id rather than by text, so a
 *  section naming an id gets the transcription this lesson stands behind
 *  wherever the row came from. Falls back to the imported row's own stored
 *  value, which is the right answer for rows this lesson displays and did not
 *  re-transcribe. Returns null when neither exists, because several imported
 *  sentences carry no respelling at all and a card may legitimately show none. */
export function subOf(id: string): string | null {
  const fr = frOf(id);
  if (RESPELL[fr]) return RESPELL[fr].respell;
  const imported = IMPORTED.find((r) => r.id === id);
  return imported?.respell ? `[${imported.respell}]` : null;
}

/* ─── The search guard ─────────────────────────────────────────────────────
 *
 * `si` is a triple homograph (yes-to-a-negative, "if", and "so" as in si grand)
 * and it is a substring of `aussi`, `ainsi`, `si tôt` and `réussis`. `non` sits
 * inside `nonante`. `que` sits inside `est-ce que`, which is this lesson's own
 * subject on every screen.
 *
 * So anything walking these strings checks the neighbouring character against an
 * accent-aware class rather than building a regex out of the search term: `\b`
 * is ASCII-only in JavaScript and would fail on every accented neighbour, which
 * is invariant §0's first trap.                                              */

export function hasWord(haystack: string, needle: string): boolean {
  const h = haystack.toLowerCase().normalize('NFC');
  const n = needle.toLowerCase().normalize('NFC');
  let from = 0;
  for (;;) {
    const i = h.indexOf(n, from);
    if (i < 0) return false;
    const before = i === 0 ? ' ' : h[i - 1];
    const after = h[i + n.length] ?? ' ';
    if (!/[a-zà-ÿœæ]/.test(before) && !/[a-zà-ÿœæ]/.test(after)) return true;
    from = i + 1;
  }
}

/** Which of the three methods does this sentence use? Classified by SHAPE
 *  rather than against a closed list of verbs, because a closed list read
 *  « Travaillez-vous le samedi ? » as intonation and made the first register
 *  measurement wrong in the direction that mattered. */
const INVERSION_SHAPE = /[a-zà-ÿ]-(t-)?(je|tu|il|elle|on|nous|vous|ils|elles)\b/i;

export function methodOf(fr: string): Method['key'] | 'tag' | 'not a question' {
  const s = fr.toLowerCase().normalize('NFC');
  if (s.includes('est-ce que') || s.includes("est-ce qu'")) return 'estCeQue';
  if (s.includes("n'est-ce pas")) return 'tag';
  if (INVERSION_SHAPE.test(s)) return 'inversion';
  if (s.trim().endsWith('?')) return 'intonation';
  return 'not a question';
}

/** Does this string carry one of a1.20's question words? Returns the word, so a
 *  guard can name what it found rather than only that it found something. */
export function questionWordIn(fr: string): string | null {
  const s = fr.toLowerCase().normalize('NFC');
  for (const p of QUESTION_WORD_PHRASES) if (s.includes(p)) return p;
  for (const w of QUESTION_WORDS) if (hasWord(s, w)) return w;
  return null;
}
