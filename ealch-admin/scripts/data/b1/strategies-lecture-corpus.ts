// b1.37.l1 « Lire sans tout comprendre » — the authored corpus, the imports,
// the anchor texts and the citation constants. DRAFT, to
// B1-WORKSHOP-AND-VOCAB-SHAPES.md §1 (the workshop shape, strategy variant) on
// top of B1-BUILD-PLAYBOOK.md.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (b1.38, the listening-strategy lesson, is expected to import
// REFRAME from this file and quote it; do not rename): REFRAME, REFRAME_EN,
// UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   READING STRATEGY: GETTING THE MEANING OF A TEXT A LITTLE ABOVE YOUR LEVEL
//   WITHOUT READING IT WORD BY WORD.
//
//     le genre       what kind of text it is, from its source and layout,
//                    before the first line (avis, brève, forum, courriel,
//                    publicité, article)
//     le chapeau     the title, the standfirst and the subheadings as a
//                    prediction of the whole text
//     survoler       skimming for the gist
//     le repérage    scanning for one detail, then reading the sentence
//                    around it
//     les chiffres   numbers, dates and percentages as a reader meets them
//                    (en hausse de, un sur trois, d'ici 2030, milliard)
//     le contexte    guessing an unknown word from the sentence around it,
//                    from its family (-ment, -tion, re-, dé-, in-...-able) and
//                    from its English cousin, and spotting the false friend
//     les panneaux   connectors read as SIGNPOSTS of an argument
//     la reprise     who « il », « celui-ci », « ce dernier » point back to
//     la source      fact, reported claim, rumour and opinion
//     l'examen       TCF / TEF compréhension écrite: the question first
//     le résumé      the graded task: 50 to 80 words for a friend
//
//   Act by act: the wall of words (1), the genre (2), the title and the
//   standfirst (3), skim then scan (4), numbers (5), the unknown word (6),
//   the signposts (7), who « ce dernier » is (8), fact or opinion (9), the
//   exam (10), summarising for a friend (11).
//
//   NOT OWNED, CITED ONLY:
//     - connectors as GRAMMAR (coordination, subordination, concession) are
//       b1.30 to b1.32's, being written in parallel. This lesson reads them
//       as signposts and never teaches how to build the clause.
//     - « selon » and « d'après » with the journalistic conditional are
//       b1.08's (act 10, « Selon la police »). Quoted, not re-taught.
//     - « il paraît que » keeping the indicative is b1.15's (sheet
//       « Ce qui n'ouvre pas la porte »). Quoted.
//     - reported speech is b1.19's. VERIFIED 2026-09-26: b1.19 does NOT
//       teach « il paraît que » or « selon »; it teaches dire que, demander
//       si and the tense shift. So this lesson cites b1.19 only for « a
//       déclaré que », never for the two source markers.
//     - the passive of notices is b1.18's. Quoted in act 2.
//     - septante / nonante recognition is a1.27's; milliard and the decimal
//       comma are a1.28's; -ment adverbs are a2.17's; celui-ci as a
//       pointing pronoun is a2.33's. Each is quoted where act 5, 6 or 8
//       builds on it.
//     - the subjunctive (b1.14 to b1.16) appears in NO authored French string.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked only, DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `strategies-de-comprehension` (« Les stratégies de
//     compréhension », domain education, levelRange b1-b2) WAS CREATED IN
//     POSTGRES ON 2026-09-26 for this lesson and for b1.38. Its sub-themes
//     are: lire un texte, écouter, deviner le sens.
//
//     IT EXISTS IN POSTGRES ONLY. It is NOT in `seed.json`'s theme list
//     (verified 2026-09-26) and arrives there at the next publish. So a
//     readiness run WILL warn that the theme is not in the seed's theme
//     list. THAT WARNING IS EXPECTED AND IS NOT A DEFECT. A read-only probe
//     on 2026-09-26 found ZERO rows in the theme at any level.
//
//  2. ID BLOCK: this lesson owns `.1000`-`.1199` AND NOTHING ELSE. b1.38
//     (listening strategy) takes `.1200`-`.1399`. `.001`-`.999` stays free
//     for a future published import, by house rule. Used here: `.1000`-
//     `.1199`, in eleven act blocks. See §H for the count.
//
//  3. THE PUBLISHED `faux-amis` THEME CANNOT BE REUSED, and this is measured,
//     not assumed. Postgres holds 433 rows in it (probed 2026-09-26:
//     librairie, actuellement, éventuellement, assister, monnaie, déception,
//     lecture, conférence, collège...), but EVERY ONE of them carries only
//     the `dictation` drill, and seed.json carries exactly ONE row of the
//     theme (`fr.a1.faux-amis.152`, « Le village est très joli au
//     printemps », which is not a false friend). `src()` resolves against
//     the seed, so none of the 432 DB-only rows can be named. Act 6 authors
//     its own false-friend rows (1116-1127). They are DB-ONLY TWINS in the
//     build log's sense: at import, decide whether to dedupe against
//     `fr.a1.faux-amis.008`-`.014` (actuellement), `.036`-`.041`
//     (éventuellement), `.001`-`.007` (librairie), `.042`-`.047` (assister)
//     and `.060`-`.065` (monnaie).
//
//  4. Every reused id in §F was read out of seed.json on 2026-09-26 and its
//     `fr` is copied verbatim wherever a section prints it, through `src()`.
//     The seed carries NO row with « pourtant », « en revanche », « d'abord »,
//     « il paraît » or « ce dernier », so acts 7 to 9 author theirs.
//
//  5. TWO RESPELLINGS ARE SPELLED FOR THE NASAL CHECKER RATHER THAN THE EAR.
//     `hasPlainNasal` refuses a respelling ending in UH + N, and
//     `hasPlainNasalFor` refuses a lone vowel closed by M when the French has
//     no « vowel + m + e » anywhere in the line:
//       - « jeunes » (1030) is `ZHUHNN`, not `ZHUHN`;
//       - « forum » (1034, 1039) is `fo-ROMM`, not `fo-ROM`.
//     Both consonants are really pronounced; the doubling is a2.34's trick.
//     No U+203F tie anywhere, in a respelling OR an IPA field: a liaison
//     consonant simply moves onto the next syllable.
//
//  6. The anchor texts in §I are AUTHORED, not quoted. They are written to
//     feel like a Québec municipal notice, a news brief, a Swiss daily, a
//     Liège student forum, a Dakar press dispatch and a Brussels local page,
//     and every event, figure and organisation in them is invented. No real
//     organisation is quoted; the one real calendar fact (23 April, World
//     Book Day) is true.
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item } from '../../../../ealch-v2/src/content/schema.ts';
import { unitRef } from '../_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'b1.37',
  seq: 37,
  title: 'Reading Strategies',
  sub: 'Lire sans tout comprendre',
  canDo: 'Can get the main idea, the supporting points and the stance of a text slightly above their level by using its genre, title, structure, signposts, references and sources, and can summarise it for someone who has not read it',
  prereqUnitIds: ['b1.08', 'b1.18', 'b1.19'],
} as const;

export const LESSON_ID = 'b1.37.l1';
export const THEME = 'strategies-de-comprehension';
export const LEVEL = 'b1' as const;

/** ONE block, by the house rule for a theme with no published import yet. */
export const ID_RANGES = [[1000, 1199]] as const;

export const E = (n: number) => `fr.b1.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  A1 and A2 citations use the house English trail label (« lesson 4 in
 *  A1 »), resolved through `unitRef` from the shipped `unit.seq`. b1.* units
 *  are not in the seed yet, so they are labelled in French from the plan.
 * ══════════════════════════════════════════════════════════════════════════ */

export const NOMBRES21_UNIT = 'a1.27';
export const GRANDS_NOMBRES_UNIT = 'a1.28';
export const ADVERBES_UNIT = 'a2.17';
export const DEMONSTRATIFS_UNIT = 'a2.33';
export const CONDITIONNEL_UNIT = 'b1.08';
export const SUBJ_DECLENCHEURS_UNIT = 'b1.15';
export const PASSIF_UNIT = 'b1.18';
export const DISCOURS_UNIT = 'b1.19';
export const COORDINATION_UNIT = 'b1.30';
export const CONCESSION_UNIT = 'b1.32';

/** TODO(import): drop once the b1 units are rows in `content_units`. */
const B1_SEQ_FROM_PLAN: Record<string, number> = {
  'b1.08': 8, 'b1.15': 15, 'b1.18': 18, 'b1.19': 19, 'b1.25': 25,
  'b1.30': 30, 'b1.31': 31, 'b1.32': 32, 'b1.37': 37, 'b1.38': 38, 'b1.39': 39,
};
export function refFr(unitId: string): string {
  const planned = B1_SEQ_FROM_PLAN[unitId];
  return planned ? `la leçon ${planned} du B1` : unitRef(unitId);
}

export const NOMBRES21_REF = unitRef(NOMBRES21_UNIT);
export const GRANDS_NOMBRES_REF = unitRef(GRANDS_NOMBRES_UNIT);
export const ADVERBES_REF = unitRef(ADVERBES_UNIT);
export const DEMONSTRATIFS_REF = unitRef(DEMONSTRATIFS_UNIT);
export const CONDITIONNEL_REF = refFr(CONDITIONNEL_UNIT);
export const SUBJ_DECLENCHEURS_REF = refFr(SUBJ_DECLENCHEURS_UNIT);
export const PASSIF_REF = refFr(PASSIF_UNIT);
export const DISCOURS_REF = refFr(DISCOURS_UNIT);
/** b1.30 to b1.32, cited as one span: they own the connectors as grammar. */
export const CONNECTEURS_REF = 'les leçons 30 à 32 du B1';
export const LISTENING_NEXT_REF = refFr('b1.38');

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, IMPORTED
 *
 *  The A1/A2 lines are English (A1 and A2 are taught in English) and every
 *  screen that shows one follows it with the French rendering below. The
 *  b1.08, b1.18 and b1.19 lines are already French and are quoted as they
 *  stand. b1.30 to b1.32 do not exist yet, so nothing of theirs is quoted:
 *  they are cited by number only.
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as A217_REFRAME } from '../adverbes-corpus.ts';
export { REFRAME as A233_REFRAME } from '../demonstratifs-corpus.ts';
export { REFRAME as B108_REFRAME } from './conditionnel-present-corpus.ts';
export { REFRAME as B118_REFRAME } from './voix-passive-corpus.ts';
export { REFRAME as B119_REFRAME } from './discours-indirect-corpus.ts';

export const A217_REFRAME_FR = 'Dis le féminin, puis ajoute -ment.';
export const A233_REFRAME_FR = 'Un nom derrière, il montre. Pas de nom, il remplace.';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  THE LAMP. A good reader does not light the whole page at once. The lamp
 *  goes first to what carries the meaning (the source, the title, the
 *  standfirst, the numbers, the signposts, the names), and only then, if
 *  it is still needed, to the hard word. A learner who reads word by word
 *  lights one word at a time and never sees the room.
 *
 *  It is NOT « skip the hard words ». Acts 6 and 8 exist because one word
 *  (« actuellement », « ce dernier ») can turn the whole meaning, and the
 *  lesson teaches the learner to find the meaning of THAT word from the
 *  sense around it. Meaning first is the ORDER, not permission to stop.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = "Le sens d'abord, les mots ensuite.";
export const REFRAME_EN = 'Meaning first, words after.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: "Tu n'as pas besoin de tout comprendre.",
    why: "True, and it licenses giving up. It is false where acts 6 and 8 have to hold: « actuellement » read as « actually », or « ce dernier » pinned on the wrong man, changes what the text says. The lesson is about the ORDER of attention, not about how much can be skipped.",
  },
  {
    text: "Lis le titre, puis le reste.",
    why: "One technique out of ten (act 3). It says nothing about the unknown word, the signposts, the sources or the exam, and a forum post or an advert has no title to read first.",
  },
  {
    text: 'Devine, puis vérifie.',
    why: "The best line for act 6, and wrong for acts 4, 5 and 10, where the learner must NOT guess: an opening time, a percentage or the answer to an exam question is found, not guessed. A reframe that tells a candidate to guess the salary is worse than none.",
  },
  {
    text: "Un texte n'est pas une liste de mots.",
    why: "True everywhere and gives no instruction. It names the error of act 1 without saying what to do instead, and it is too abstract to say to yourself in front of an exam paper.",
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *
 *  Every id was read from seed.json on 2026-09-26 and its French is in the
 *  trailing comment. `named only` rows carry no `flashcard` drill, so no
 *  deckTranche can release them. `NOT_SPEAKABLE` additionally lists the rows
 *  with no `voiceflash`, which a `practice` speak section may never name.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [] as string[],
  act2: [] as string[],
  act3: [] as string[],
  act4: [] as string[],
  act5: [
    'fr.b1.gouvernement.004',        // Le maire a été élu avec 54 % des voix.
    'fr.b1.economie.004',            // Le taux de chômage a baissé de 2 % cette année.
    'fr.a2.nombres.022',             // Les trois quarts des élèves ont réussi l'examen.
  ],
  act6: [
    'fr.a2.argent-quotidien.080',    // Désolé, je n'ai pas de monnaie.
  ],
  act7: [
    'fr.a2.cafe.060',                // Il a plu, donc nous sommes restés à l'intérieur.
    'fr.b1.connecteurs-logiques.008', // Le pont était fermé, donc nous avons dû faire un détour.  (named only)
  ],
  act8: [
    'fr.a2.pronoms-essentiels.338',  // Je prends celui-ci.
  ],
  act9: [
    'fr.b1.cafe.084',                // Je trouve que les prix ont beaucoup augmenté depuis l'année dernière.
    'fr.b1.sports-et-loisirs.091',   // À mon avis, il vaut mieux pratiquer un sport en plein air.
    'fr.b1.journalisme.005',         // Avant de partager un article, il faut vérifier ses sources.
    'fr.b1.heure-et-date.065',       // Ses horaires de travail changent chaque semaine selon le planning.  (named only)
  ],
  act10: [] as string[],
  act11: [
    'fr.b1.cafe.005',                // Elle prend toujours son café en lisant le journal.
  ],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. */
export const NOT_DECK_ABLE = [
  'fr.b1.connecteurs-logiques.008', // dictation
  'fr.b1.heure-et-date.065',        // dictation
];

/** No `voiceflash` either: never in a `practice` speak section. */
export const NOT_SPEAKABLE = [
  ...NOT_DECK_ABLE,
  'fr.b1.gouvernement.004',        // flashcard
  'fr.b1.economie.004',            // flashcard
  'fr.a2.nombres.022',             // flashcard, sentence
  'fr.a2.cafe.060',                // sentence, flashcard, review
  'fr.b1.cafe.084',                // sentence, flashcard, review
  'fr.b1.sports-et-loisirs.091',   // sentence, flashcard, review
  'fr.b1.journalisme.005',         // flashcard
  'fr.b1.cafe.005',                // sentence, flashcard, review
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  Respell house style: hyphenated syllables, the last stressed syllable of
 *  each group in caps, ü for French u, nasals closed with the superscript ⁿ,
 *  and NO U+203F tie. See §A.5 for the two respellings spelled for the
 *  checker rather than for the ear.
 *
 *  A WORKSHOP CORPUS HOLDS PHRASES THAT DO A JOB, NOT FORMS. Most rows are
 *  either a line the learner meets in a text (a headline, a signpost, a
 *  source marker, a number said aloud), a question a reader asks the text,
 *  or a summary line the learner can reuse in the task.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, grammarPoints: ['strategies-lecture'], ...extra,
});

const phrase = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, ...extra,
});

/** A rule card: `prompt` is the question, `fr` the rule. */
const rule = (prompt: string, notes: string): Partial<Item> => ({ cardType: 'grammar', prompt, notes });

/* ── ACT 1 · LE MUR DE MOTS ─────────────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1000, 'La Ville ramène ses employés au bureau.', 'The City is bringing its employees back to the office.', '/la vil ʁa.mɛn se.zɑ̃.plwa.je o by.ʁo/', 'la VEEL ra-MEN say-zahⁿ-plwa-YAY oh bü-ROH', ['titre', 'article'], FCVDR),
  sent(1001, 'Dès janvier, les employés travailleront sur place trois jours par semaine.', 'From January, employees will work on site three days a week.', '/dɛ ʒɑ̃.vje le.zɑ̃.plwa.je tʁa.vaj.ʁɔ̃ syʁ plas tʁwa ʒuʁ paʁ sə.mɛn/', 'deh zhahⁿ-VYAY lay-zahⁿ-plwa-YAY tra-vahy-ROHⁿ sür PLASS trwa zhoor par suh-MEN', ['chapeau', 'article']),
  sent(1002, 'Selon la direction, le retour au bureau favorisera la collaboration.', 'According to management, the return to the office will encourage collaboration.', '/sə.lɔ̃ la di.ʁɛk.sjɔ̃ lə ʁə.tuʁ o by.ʁo fa.vɔ.ʁiz.ʁa la kɔ.la.bɔ.ʁa.sjɔ̃/', 'suh-lohⁿ la dee-rehk-SYOHⁿ luh ruh-toor oh bü-ROH fa-vo-reez-RA la ko-la-bo-ra-SYOHⁿ', ['source', 'article']),
  sent(1003, 'Le syndicat, en revanche, dénonce une décision prise sans consultation.', 'The union, on the other hand, condemns a decision taken without consultation.', '/lə sɛ̃.di.ka ɑ̃ ʁə.vɑ̃ʃ de.nɔ̃s yn de.si.zjɔ̃ pʁiz sɑ̃ kɔ̃.syl.ta.sjɔ̃/', 'luh sehⁿ-dee-KA ahⁿ ruh-VAHⁿSH day-NOHⁿS ün day-see-ZYOHⁿ preez sahⁿ kohⁿ-sül-ta-SYOHⁿ', ['connecteur', 'article'], FCVDR),
  sent(1004, 'Dorénavant, chaque service affichera son horaire de présence.', 'From now on, each department will post its attendance schedule.', '/dɔ.ʁe.na.vɑ̃ ʃak sɛʁ.vis a.fiʃ.ʁa sɔ̃.nɔ.ʁɛʁ də pʁe.zɑ̃s/', 'do-ray-na-VAHⁿ shak sehr-VEESS a-feesh-RA sohⁿ-no-REHR duh pray-ZAHⁿS', ['mot-inconnu', 'article']),
  sent(1005, REFRAME, REFRAME_EN, '/lə sɑ̃s da.bɔʁ le mo ɑ̃.sɥit/', 'luh SAHⁿS da-BOR lay MOH ahⁿ-SWEET', ['rule', 'reframe'], ['flashcard'],
    rule('Tu tombes sur un texte plein de mots inconnus. Par quoi commences-tu ?', 'Par le sens : le titre, le chapeau, les chiffres. Les mots difficiles attendent.')),
  sent(1006, "Je lis d'abord le titre et le chapeau.", 'I read the headline and the standfirst first.', '/ʒə li da.bɔʁ lə titʁ e lə ʃa.po/', 'zhuh lee da-bor luh TEETR ay luh sha-POH', ['strategie'], FCVDR),
  sent(1007, 'Je cherche chaque mot inconnu.', 'I look up every unknown word.', '/ʒə ʃɛʁʃ ʃak mo.ɛ̃.kɔ.ny/', 'zhuh shehrsh shak moh-ehⁿ-ko-NÜ', ['strategie', 'piege']),
  sent(1008, "Je n'ai pas besoin de tous les mots.", 'I do not need every word.', '/ʒə ne pa bə.zwɛ̃ də tu le mo/', 'zhuh nay pa buh-zwehⁿ duh too lay MOH', ['strategie'], FCVDR),
  sent(1009, "Le titre dit déjà l'essentiel.", 'The headline already says the main thing.', '/lə titʁ di de.ʒa le.sɑ̃.sjɛl/', 'luh TEETR dee day-zha lay-sahⁿ-SYEHL', ['strategie', 'titre']),
  sent(1010, 'Un mot inconnu peut attendre.', 'An unknown word can wait.', '/œ̃ mo.ɛ̃.kɔ.ny pø.ta.tɑ̃dʁ/', 'uhⁿ moh-ehⁿ-ko-NÜ peu-ta-TAHⁿDR', ['strategie'], FCVDR),
  sent(1011, 'De quoi parle ce texte ?', 'What is this text about?', '/də kwa paʁl sə tɛkst/', 'duh kwa PARL suh TEKST', ['question']),
  sent(1012, 'Qui écrit, et pour qui ?', 'Who is writing, and for whom?', '/ki e.kʁi e puʁ ki/', 'kee ay-KREE ay poor KEE', ['question', 'genre']),
  sent(1013, "Qu'est-ce qui change pour moi ?", 'What changes for me?', '/kɛs ki ʃɑ̃ʒ puʁ mwa/', 'kehss kee SHAHⁿZH poor MWA', ['question']),
  phrase(1014, 'dorénavant', 'from now on', '/dɔ.ʁe.na.vɑ̃/', 'do-ray-na-VAHⁿ', ['mot-inconnu']),
];

/* ── ACT 2 · QUEL TEXTE AS-TU SOUS LES YEUX ─────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  phrase(1020, 'Objet : votre demande de remboursement', 'Subject: your refund request', '/ɔb.ʒɛ vɔtʁ də.mɑ̃d də ʁɑ̃.buʁs.mɑ̃/', 'ob-ZHEH votr duh-mahⁿd duh rahⁿ-boors-MAHⁿ', ['genre', 'courriel']),
  sent(1021, 'Bonjour Madame, je vous écris au sujet de la facture de mars.', 'Hello Madam, I am writing about the March invoice.', '/bɔ̃.ʒuʁ ma.dam ʒə vu.ze.kʁi o sy.ʒɛ də la fak.tyʁ də maʁs/', 'bohⁿ-zhoor ma-DAM zhuh voo-zay-KREE oh sü-zheh duh la fak-tür duh MARS', ['genre', 'courriel'], FCVDR),
  phrase(1022, "Re : du bruit dans l'immeuble la nuit", 'Re: noise in the building at night', '/ʁə dy bʁɥi dɑ̃ li.mœbl la nɥi/', 'ruh dü BRWEE dahⁿ lee-muhbl la NWEE', ['genre', 'forum']),
  sent(1023, 'Perso, je trouve que le nouveau parc est super.', 'Personally, I think the new park is great.', '/pɛʁ.so ʒə tʁuv kə lə nu.vo paʁk ɛ sy.pɛʁ/', 'pehr-SOH zhuh troov kuh luh noo-voh PARK eh sü-PEHR', ['genre', 'forum', 'opinion']),
  sent(1024, 'Le stationnement sera interdit des deux côtés de la rue jeudi.', 'Parking will be banned on both sides of the street on Thursday.', '/lə sta.sjɔn.mɑ̃ sə.ʁa ɛ̃.tɛʁ.di de dø ko.te də la ʁy ʒø.di/', 'luh sta-syon-MAHⁿ suh-ra ehⁿ-tehr-DEE day deu ko-TAY duh la RÜ zheu-DEE', ['genre', 'avis'], FCVDR),
  sent(1025, 'Les résidents sont priés de sortir leurs bacs la veille.', 'Residents are asked to put their bins out the night before.', '/le ʁe.zi.dɑ̃ sɔ̃ pʁi.je də sɔʁ.tiʁ lœʁ bak la vɛj/', 'lay ray-zee-DAHⁿ sohⁿ pree-YAY duh sor-teer luhr BAK la VEHY', ['genre', 'avis']),
  sent(1026, "Un incendie s'est déclaré hier soir dans un entrepôt de Laval.", 'A fire broke out last night in a warehouse in Laval.', '/œ̃.nɛ̃.sɑ̃.di sɛ de.kla.ʁe jɛʁ swaʁ dɑ̃.zœ̃.nɑ̃.tʁə.po də la.val/', 'uhⁿ-nehⁿ-sahⁿ-DEE seh day-kla-RAY yehr SWAR dahⁿ-zuhⁿ-nahⁿ-truh-POH duh la-VAL', ['genre', 'breve'], FCVDR),
  sent(1027, "Aucun blessé n'est à déplorer, selon les pompiers.", 'Nobody was hurt, according to the fire service.', '/o.kœ̃ blɛ.se nɛ.ta de.plɔ.ʁe sə.lɔ̃ le pɔ̃.pje/', 'oh-kuhⁿ bleh-SAY neh-ta day-plo-RAY suh-lohⁿ lay pohⁿ-PYAY', ['genre', 'breve', 'source']),
  sent(1028, 'Profitez de notre offre avant dimanche.', 'Take advantage of our offer before Sunday.', '/pʁɔ.fi.te də nɔ.tʁɔfʁ a.vɑ̃ di.mɑ̃ʃ/', 'pro-fee-TAY duh no-TROFR a-vahⁿ dee-MAHⁿSH', ['genre', 'pub']),
  sent(1029, 'Deux cafés achetés, le troisième offert.', 'Buy two coffees, get the third free.', '/dø ka.fe aʃ.te lə tʁwa.zjɛm ɔ.fɛʁ/', 'deu ka-FAY ash-TAY luh trwa-ZYEM o-FEHR', ['genre', 'pub']),
  phrase(1030, 'Pourquoi les jeunes quittent-ils les régions ?', 'Why are young people leaving the regions?', '/puʁ.kwa le ʒœn kit.til le ʁe.ʒjɔ̃/', 'poor-kwa lay ZHUHNN keet-TEEL lay ray-ZHYOHⁿ', ['genre', 'article', 'titre']),
  sent(1031, 'Avant de lire, demande-toi qui écrit, et pour qui.', 'Before reading, ask yourself who is writing, and for whom.', '/a.vɑ̃ də liʁ də.mɑ̃d.twa ki e.kʁi e puʁ ki/', 'a-vahⁿ duh LEER duh-mahⁿd-TWA kee ay-KREE ay poor KEE', ['rule', 'genre'], ['flashcard'],
    rule('Quelle question poses-tu avant la première ligne ?', 'Qui écrit, et pour qui : la réponse te dit quel genre de texte tu lis.')),
  phrase(1032, 'un avis', 'a notice', '/œ̃.na.vi/', 'uhⁿ-na-VEE', ['genre']),
  phrase(1033, 'une brève', 'a news brief', '/yn bʁɛv/', 'ün BREHV', ['genre']),
  phrase(1034, 'un message de forum', 'a forum post', '/œ̃ me.saʒ də fɔ.ʁɔm/', 'uhⁿ may-sazh duh fo-ROMM', ['genre']),
  phrase(1035, 'un courriel', 'an email', '/œ̃ ku.ʁjɛl/', 'uhⁿ koo-RYEHL', ['genre', 'quebec']),
  phrase(1036, 'une publicité', 'an advert', '/yn py.bli.si.te/', 'ün pü-blee-see-TAY', ['genre']),
  phrase(1037, 'un article de presse', 'a newspaper article', '/œ̃.naʁ.tikl də pʁɛs/', 'uhⁿ-nar-teekl duh PRESS', ['genre']),
  sent(1038, "C'est un avis de la Ville : l'eau sera coupée mardi.", 'It is a notice from the City: the water will be cut off on Tuesday.', '/sɛ.tœ̃.na.vi də la vil lo sə.ʁa ku.pe maʁ.di/', 'seh-tuhⁿ-na-VEE duh la VEEL loh suh-ra koo-pay mar-DEE', ['resume', 'genre'], FCVDR),
  sent(1039, "C'est un message de forum : un parent trouve la cantine trop chère.", 'It is a forum post: a parent finds the school canteen too expensive.', '/sɛ.tœ̃ me.saʒ də fɔ.ʁɔm œ̃ pa.ʁɑ̃ tʁuv la kɑ̃.tin tʁo ʃɛʁ/', 'seh-tuhⁿ may-sazh duh fo-ROMM uhⁿ pa-RAHⁿ troov la kahⁿ-TEEN troh SHEHR', ['resume', 'genre']),
  sent(1040, "C'est une brève : la ligne verte a été interrompue ce matin.", 'It is a news brief: the green line was interrupted this morning.', '/sɛ.tyn bʁɛv la liɲ vɛʁt a e.te ɛ̃.te.ʁɔ̃.py sə ma.tɛ̃/', 'seh-tün BREHV la leeñ VEHRT a ay-tay ehⁿ-tay-rohⁿ-PÜ suh ma-TEHⁿ', ['resume', 'genre'], FCVDR),
];

/* ── ACT 3 · LE TITRE ANNONCE LA SUITE ──────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  phrase(1045, 'Vélo en ville : Lausanne mise sur les pistes protégées', 'Cycling in town: Lausanne bets on protected lanes', '/ve.lo ɑ̃ vil lo.zan miz syʁ le pist pʁɔ.te.ʒe/', 'vay-LOH ahⁿ VEEL loh-ZAN meez sür lay peest pro-tay-ZHAY', ['titre', 'suisse']),
  sent(1046, "D'ici 2030, la ville veut doubler le nombre de trajets à vélo.", 'By 2030 the city wants to double the number of bike trips.', '/di.si dø mil tʁɑ̃t la vil vø du.ble lə nɔ̃bʁ də tʁa.ʒɛ a ve.lo/', 'dee-SEE deu meel TRAHⁿT la VEEL veu doo-BLAY luh nohⁿbr duh tra-zheh a vay-LOH', ['chapeau', 'chiffre']),
  sent(1047, 'Les commerçants restent sceptiques.', 'Shopkeepers remain sceptical.', '/le kɔ.mɛʁ.sɑ̃ ʁɛst sɛp.tik/', 'lay ko-mehr-SAHⁿ REST sehp-TEEK', ['chapeau'], FCVDR),
  phrase(1048, 'le titre', 'the headline', '/lə titʁ/', 'luh TEETR', ['avant']),
  phrase(1049, 'le chapeau', 'the standfirst (the short lead under a headline)', '/lə ʃa.po/', 'luh sha-POH', ['avant']),
  phrase(1050, 'un intertitre', 'a subheading', '/œ̃.nɛ̃.tɛʁ.titʁ/', 'uhⁿ-nehⁿ-tehr-TEETR', ['avant']),
  sent(1051, "Le chapeau résume l'article en deux phrases.", 'The standfirst sums up the article in two sentences.', '/lə ʃa.po ʁe.zym laʁ.tikl ɑ̃ dø fʁaz/', 'luh sha-POH ray-züm lar-TEEKL ahⁿ deu FRAZ', ['rule', 'avant'], ['flashcard'],
    rule("Où trouves-tu l'essentiel d'un article en dix secondes ?", 'Dans le chapeau, juste sous le titre : deux ou trois phrases qui résument tout.')),
  phrase(1052, 'Logement : les loyers grimpent encore à Montréal', 'Housing: rents climb again in Montreal', '/lɔʒ.mɑ̃ le lwa.je ɡʁɛ̃p ɑ̃.kɔʁ a mɔ̃.ʁe.al/', 'lozh-MAHⁿ lay lwa-YAY grehⁿp ahⁿ-kor a mohⁿ-ray-AL', ['titre', 'predire']),
  phrase(1053, "Faut-il interdire le téléphone à l'école ?", 'Should phones be banned at school?', '/fo.til ɛ̃.tɛʁ.diʁ lə te.le.fɔn a le.kɔl/', 'foh-teel ehⁿ-tehr-DEER luh tay-lay-FON a lay-KOL', ['titre', 'predire']),
  phrase(1054, 'Dakar : le marché Sandaga rouvre ses portes', 'Dakar: Sandaga market reopens its doors', '/da.kaʁ lə maʁ.ʃe sɑ̃.da.ɡa ʁuvʁ se pɔʁt/', 'da-KAR luh mar-shay sahⁿ-da-GA roovr say PORT', ['titre', 'predire']),
  phrase(1055, "Canicule : les piscines resteront ouvertes jusqu'à 22 h", 'Heatwave: pools will stay open until 10 p.m.', '/ka.ni.kyl le pi.sin ʁɛs.tə.ʁɔ̃ u.vɛʁt ʒys.ka vɛ̃t.dø.zœʁ/', 'ka-nee-KÜL lay pee-SEEN res-tuh-rohⁿ oo-VEHRT zhüs-ka vehⁿt-deu-ZUHR', ['titre', 'predire']),
  phrase(1056, '« Nous ne sommes pas contre le vélo », disent les commerçants', '"We are not against cycling," say the shopkeepers', '/nu nə sɔm pa kɔ̃tʁ lə ve.lo diz le kɔ.mɛʁ.sɑ̃/', 'noo nuh som pa KOHⁿTR luh vay-LOH deez lay ko-mehr-SAHⁿ', ['titre', 'citation']),
  phrase(1057, 'Lausanne passe à la vitesse supérieure', 'Lausanne moves up a gear', '/lo.zan pa.sa la vi.tɛs sy.pe.ʁjœʁ/', 'loh-zan pa-sa la vee-TESS sü-pay-RYUHR', ['titre', 'image']),
  phrase(1058, "Un Québécois sur trois lit moins qu'avant", 'One Quebecer in three reads less than before', '/œ̃ ke.be.kwa syʁ tʁwa li mwɛ̃ ka.vɑ̃/', 'uhⁿ kay-bay-KWA sür TRWA lee mwehⁿ ka-VAHⁿ', ['titre', 'chiffre']),
  sent(1059, "Selon un article suisse, Lausanne veut doubler les trajets à vélo d'ici 2030.", 'According to a Swiss article, Lausanne wants to double bike trips by 2030.', '/sə.lɔ̃ œ̃.naʁ.tikl sɥis lo.zan vø du.ble le tʁa.ʒɛ a ve.lo di.si dø mil tʁɑ̃t/', 'suh-lohⁿ uhⁿ-nar-teekl SWEESS loh-zan veu doo-BLAY lay tra-zheh a vay-LOH dee-see deu meel TRAHⁿT', ['resume', 'chapeau']),
];

/* ── ACT 4 · SURVOLER, PUIS CHERCHER ────────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(1060, 'Est-ce que cet article parle de mon quartier ?', 'Is this article about my neighbourhood?', '/ɛs.kə sɛ.taʁ.tikl paʁl də mɔ̃ kaʁ.tje/', 'ess-kuh seh-tar-teekl PARL duh mohⁿ kar-TYAY', ['survoler', 'question']),
  sent(1061, 'À quelle heure ferme la bibliothèque le jeudi ?', 'What time does the library close on Thursdays?', '/a kɛ.lœʁ fɛʁm la bi.bli.jɔ.tɛk lə ʒø.di/', 'a keh-LUHR fehrm la bee-blee-yo-TEK luh zheu-DEE', ['reperer', 'question']),
  sent(1062, "Qu'est-ce qui change cet été ?", 'What changes this summer?', '/kɛs ki ʃɑ̃ʒ sɛ.te.te/', 'kehss kee SHAHⁿZH seh-tay-TAY', ['survoler', 'question']),
  sent(1063, "Combien coûte l'abonnement pour un non-résident ?", 'How much does membership cost for a non-resident?', '/kɔ̃.bjɛ̃ kut la.bɔn.mɑ̃ puʁ œ̃ nɔ̃.ʁe.zi.dɑ̃/', 'kohⁿ-byehⁿ koot la-bon-MAHⁿ poor uhⁿ nohⁿ-ray-zee-DAHⁿ', ['reperer', 'question']),
  sent(1064, 'Le jeudi, les bibliothèques ferment à 20 h.', 'On Thursdays the libraries close at 8 p.m.', '/lə ʒø.di le bi.bli.jɔ.tɛk fɛʁm a vɛ̃.tœʁ/', 'luh zheu-DEE lay bee-blee-yo-TEK fehrm a vehⁿ-TUHR', ['reperer', 'detail']),
  sent(1065, 'Les frais de retard sont abolis.', 'Late fees have been abolished.', '/le fʁɛ də ʁə.taʁ sɔ̃.ta.bɔ.li/', 'lay FREH duh ruh-TAR sohⁿ-ta-bo-LEE', ['survoler', 'essentiel'], FCVDR),
  sent(1066, "L'abonnement est gratuit pour les résidents.", 'Membership is free for residents.', '/la.bɔn.mɑ̃ ɛ ɡʁa.tɥi puʁ le ʁe.zi.dɑ̃/', 'la-bon-MAHⁿ eh gra-TWEE poor lay ray-zee-DAHⁿ', ['reperer', 'detail'], FCVDR),
  sent(1067, 'Je survole le texte pour savoir de quoi il parle.', 'I skim the text to find out what it is about.', '/ʒə syʁ.vɔl lə tɛkst puʁ sa.vwaʁ də kwa il paʁl/', 'zhuh sür-VOL luh TEKST poor sa-vwar duh kwa eel PARL', ['survoler', 'strategie'], FCVDR),
  sent(1068, 'Je cherche un seul mot, puis je lis la phrase autour.', 'I look for one word, then I read the sentence around it.', '/ʒə ʃɛʁʃ œ̃ sœl mo pɥi ʒə li la fʁaz o.tuʁ/', 'zhuh shehrsh uhⁿ suhl MOH pwee zhuh lee la fraz oh-TOOR', ['reperer', 'strategie'], FCVDR),
  sent(1069, 'Survoler pour le sens, repérer pour un détail.', 'Skim for the meaning, scan for a detail.', '/syʁ.vɔ.le puʁ lə sɑ̃s ʁə.pe.ʁe puʁ œ̃ de.taj/', 'sür-vo-LAY poor luh SAHⁿS ruh-pay-RAY poor uhⁿ day-TAHY', ['rule'], ['flashcard'],
    rule('Tu cherches une heure dans un long texte. Tu survoles ou tu repères ?', 'Tu repères : tu cherches le chiffre ou le jour, puis tu lis la phrase autour.')),
  phrase(1070, 'survoler un texte', 'to skim a text', '/syʁ.vɔ.le œ̃ tɛkst/', 'sür-vo-LAY uhⁿ TEKST', ['survoler']),
  phrase(1071, 'repérer un détail', 'to scan for a detail', '/ʁə.pe.ʁe œ̃ de.taj/', 'ruh-pay-RAY uhⁿ day-TAHY', ['reperer']),
  sent(1072, 'Le train de 17 h 12 à destination de Québec partira de la voie 4.', 'The 5:12 p.m. train to Québec will leave from track 4.', '/lə tʁɛ̃ də di.sɛ.tœʁ duz a dɛs.ti.na.sjɔ̃ də ke.bɛk paʁ.ti.ʁa də la vwa katʁ/', 'luh trehⁿ duh dee-seh-TUHR DOOZ a dehs-tee-na-SYOHⁿ duh kay-BEHK par-tee-RA duh la vwa KATR', ['ecoute', 'reperer']),
  sent(1073, 'Le train pour Ottawa a un retard de vingt minutes.', 'The train to Ottawa is twenty minutes late.', '/lə tʁɛ̃ puʁ ɔ.ta.wa a œ̃ ʁə.taʁ də vɛ̃ mi.nyt/', 'luh trehⁿ poor o-ta-WA a uhⁿ ruh-TAR duh vehⁿ mee-NÜT', ['ecoute', 'reperer']),
  sent(1074, 'Le wagon-restaurant se trouve en voiture 6.', 'The dining car is in coach 6.', '/lə va.ɡɔ̃.ʁɛs.tɔ.ʁɑ̃ sə tʁuv ɑ̃ vwa.tyʁ sis/', 'luh va-gohⁿ-res-to-RAHⁿ suh troov ahⁿ vwa-tür SEESS', ['ecoute', 'reperer']),
  sent(1075, 'Les passagers pour Toronto sont priés de se présenter à la porte 9.', 'Passengers for Toronto are asked to go to gate 9.', '/le pa.sa.ʒe puʁ tɔ.ʁɔ̃.to sɔ̃ pʁi.je də sə pʁe.zɑ̃.te a la pɔʁt nœf/', 'lay pa-sa-ZHAY poor to-rohⁿ-TOH sohⁿ pree-YAY duh suh pray-zahⁿ-TAY a la port NUHF', ['ecoute', 'reperer']),
  sent(1076, 'Le guichet 2 est fermé ce soir.', 'Ticket window 2 is closed tonight.', '/lə ɡi.ʃɛ dø ɛ fɛʁ.me sə swaʁ/', 'luh gee-SHEH DEU eh fehr-MAY suh SWAR', ['ecoute', 'reperer']),
  sent(1077, 'Le dernier train pour Halifax part à 18 h 30.', 'The last train to Halifax leaves at 6:30 p.m.', '/lə dɛʁ.nje tʁɛ̃ puʁ a.li.faks paʁ a di.zɥi.tœʁ tʁɑ̃t/', 'luh dehr-nyay trehⁿ poor a-lee-FAKS par a dee-zwee-TUHR TRAHⁿT', ['ecoute', 'reperer']),
  sent(1078, 'Les billets achetés en ligne sont valables toute la journée.', 'Tickets bought online are valid all day.', '/le bi.jɛ aʃ.te ɑ̃ liɲ sɔ̃ va.labl tut la ʒuʁ.ne/', 'lay bee-YEH ash-TAY ahⁿ LEEÑ sohⁿ va-LABL toot la zhoor-NAY', ['ecoute', 'reperer']),
  sent(1079, 'Attention : le quai 3 est glissant.', 'Caution: platform 3 is slippery.', '/a.tɑ̃.sjɔ̃ lə kɛ tʁwa ɛ ɡli.sɑ̃/', 'a-tahⁿ-SYOHⁿ luh KEH TRWA eh glee-SAHⁿ', ['ecoute', 'reperer']),
];

/* ── ACT 5 · LES CHIFFRES QUI COMPTENT ──────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(1080, 'La lecture de livres est en baisse de onze points en dix ans.', 'Book reading is down eleven points in ten years.', '/la lɛk.tyʁ də livʁ ɛ.tɑ̃ bɛs də ɔ̃z pwɛ̃ ɑ̃ di.zɑ̃/', 'la lek-TÜR duh LEEVR eh-tahⁿ BESS duh ohⁿz pwehⁿ ahⁿ dee-ZAHⁿ', ['chiffre', 'baisse'], FCVDR),
  sent(1081, 'La lecture sur écran est en hausse.', 'Reading on screens is going up.', '/la lɛk.tyʁ sy.ʁe.kʁɑ̃ ɛ.tɑ̃ os/', 'la lek-tür sü-ray-KRAHⁿ eh-tahⁿ OSS', ['chiffre', 'hausse'], FCVDR),
  sent(1082, "Près d'un lecteur sur trois lit surtout sur un téléphone.", 'Nearly one reader in three reads mostly on a phone.', '/pʁɛ dœ̃ lɛk.tœʁ syʁ tʁwa li syʁ.tu sy.ʁœ̃ te.le.fɔn/', 'preh duhⁿ lek-TUHR sür TRWA lee sür-too sü-ruhⁿ tay-lay-FON', ['chiffre']),
  sent(1083, "L'enquête a été menée auprès de 2 500 personnes.", 'The survey was carried out among 2,500 people.', '/lɑ̃.kɛt a e.te mə.ne o.pʁɛ də dø mil sɛ̃ sɑ̃ pɛʁ.sɔn/', 'lahⁿ-KET a ay-tay muh-NAY oh-preh duh deu meel sehⁿ sahⁿ pehr-SON', ['chiffre']),
  sent(1084, "D'ici 2030, le gouvernement vise un taux de 50 %.", 'By 2030 the government is aiming for a rate of 50%.', '/di.si dø mil tʁɑ̃t lə ɡu.vɛʁ.nə.mɑ̃ viz œ̃ to də sɛ̃.kɑ̃t puʁ sɑ̃/', 'dee-see deu meel TRAHⁿT luh goo-vehr-nuh-MAHⁿ veez uhⁿ TOH duh sehⁿ-kahⁿt poor SAHⁿ', ['chiffre', 'date']),
  sent(1085, 'Le taux de chômage est passé de 7,2 % à 6,8 %.', 'The unemployment rate went from 7.2% to 6.8%.', '/lə to də ʃo.maʒ ɛ pa.se də sɛt viʁ.ɡyl dø puʁ sɑ̃ a sis viʁ.ɡyl ɥit puʁ sɑ̃/', 'luh TOH duh sho-MAZH eh pa-SAY duh set veer-gül DEU poor SAHⁿ a seess veer-gül WEET poor SAHⁿ', ['chiffre', 'ecoute', 'virgule']),
  sent(1086, 'Septante pour cent des habitants lisent un journal en ligne.', 'Seventy per cent of residents read a newspaper online.', '/sɛp.tɑ̃t puʁ sɑ̃ de.za.bi.tɑ̃ liz œ̃ ʒuʁ.nal ɑ̃ liɲ/', 'sep-TAHⁿT poor SAHⁿ day-za-bee-TAHⁿ leez uhⁿ zhoor-NAL ahⁿ LEEÑ', ['chiffre', 'ecoute', 'belgique']),
  sent(1087, 'Le billet coûtera nonante euros.', 'The ticket will cost ninety euros.', '/lə bi.jɛ ku.tə.ʁa nɔ.nɑ̃.tø.ʁo/', 'luh bee-YEH koo-tuh-RA no-nahⁿ-teu-ROH', ['chiffre', 'ecoute', 'suisse']),
  sent(1088, 'La moitié des habitants a moins de trente ans.', 'Half of the residents are under thirty.', '/la mwa.tje de.za.bi.tɑ̃ a mwɛ̃ də tʁɑ̃.tɑ̃/', 'la mwa-TYAY day-za-bee-TAHⁿ a mwehⁿ duh trahⁿ-TAHⁿ', ['chiffre', 'ecoute']),
  sent(1089, 'Le prix a doublé en cinq ans.', 'The price doubled in five years.', '/lə pʁi a du.ble ɑ̃ sɛ̃.kɑ̃/', 'luh PREE a doo-BLAY ahⁿ sehⁿ-KAHⁿ', ['chiffre', 'ecoute'], FCVDR),
  sent(1090, 'Les inscriptions ferment le 1er mars.', 'Registration closes on 1 March.', '/le.zɛ̃s.kʁip.sjɔ̃ fɛʁm lə pʁə.mje maʁs/', 'lay-zehⁿs-kreep-SYOHⁿ fehrm luh pruh-myay MARS', ['chiffre', 'date', 'ecoute']),
  sent(1091, 'Un Québécois sur quatre travaille de la maison.', 'One Quebecer in four works from home.', '/œ̃ ke.be.kwa syʁ katʁ tʁa.vaj də la mɛ.zɔ̃/', 'uhⁿ kay-bay-KWA sür KATR tra-VAHY duh la meh-ZOHⁿ', ['chiffre', 'ecoute'], FCVDR),
  sent(1092, 'Le budget atteint deux milliards de dollars.', 'The budget reaches two billion dollars.', '/lə byd.ʒɛ a.tɛ̃ dø mi.ljaʁ də dɔ.laʁ/', 'luh büd-ZHEH a-TEHⁿ deu mee-LYAR duh do-LAR', ['chiffre', 'ecoute', 'milliard'], FCVDR),
  sent(1093, "Un milliard, c'est mille millions.", 'A milliard is a thousand million: a billion in English.', '/œ̃ mi.ljaʁ sɛ mil mi.ljɔ̃/', 'uhⁿ mee-LYAR seh meel mee-LYOHⁿ', ['rule', 'milliard'], ['flashcard'],
    rule('« Un billion » en français : combien de zéros ?', "Douze : un billion, c'est mille milliards. Le billion anglais se dit un milliard.")),
  phrase(1094, 'en hausse', 'going up', '/ɑ̃ os/', 'ahⁿ OSS', ['chiffre']),
  phrase(1095, 'en baisse', 'going down', '/ɑ̃ bɛs/', 'ahⁿ BESS', ['chiffre']),
  phrase(1096, 'un sur trois', 'one in three', '/œ̃ syʁ tʁwa/', 'uhⁿ sür TRWA', ['chiffre']),
  phrase(1097, "d'ici 2030", 'by 2030', '/di.si dø mil tʁɑ̃t/', 'dee-see deu meel TRAHⁿT', ['chiffre', 'date']),
  sent(1098, 'Selon une enquête, les Québécois lisent moins de livres, mais plus sur écran.', 'According to a survey, Quebecers read fewer books but more on screens.', '/sə.lɔ̃ yn ɑ̃.kɛt le ke.be.kwa liz mwɛ̃ də livʁ mɛ plys syʁ e.kʁɑ̃/', 'suh-lohⁿ ün ahⁿ-KET lay kay-bay-KWA leez mwehⁿ duh LEEVR meh plüss sür ay-KRAHⁿ', ['resume', 'chiffre']),
  sent(1099, 'Quarante et un pour cent des adultes lisent un livre par mois.', 'Forty-one per cent of adults read a book a month.', '/ka.ʁɑ̃.te.œ̃ puʁ sɑ̃ de.za.dylt liz œ̃ livʁ paʁ mwa/', 'ka-rahⁿ-tay-UHⁿ poor SAHⁿ day-za-DÜLT leez uhⁿ LEEVR par MWA', ['chiffre'], FCVDR),
];

/* ── ACT 6 · UN MOT INCONNU ─────────────────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(1100, "Je cherche un kot près de l'université.", 'I am looking for a student room near the university.', '/ʒə ʃɛʁʃ œ̃ kɔt pʁɛ də ly.ni.vɛʁ.si.te/', 'zhuh shehrsh uhⁿ KOT preh duh lü-nee-vehr-see-TAY', ['contexte', 'belgique'], FCVDR),
  sent(1101, "Le trajet me prend deux heures par jour : c'est épuisant.", 'The journey takes me two hours a day: it is exhausting.', '/lə tʁa.ʒɛ mə pʁɑ̃ dø.zœʁ paʁ ʒuʁ sɛ.te.pɥi.zɑ̃/', 'luh tra-ZHEH muh prahⁿ deu-ZUHR par ZHOOR seh-tay-pwee-ZAHⁿ', ['contexte'], FCVDR),
  sent(1102, 'Les kots du centre sont devenus inabordables.', 'Student rooms in the centre have become unaffordable.', '/le kɔt dy sɑ̃tʁ sɔ̃ də.və.ny i.na.bɔʁ.dabl/', 'lay KOT dü SAHⁿTR sohⁿ duh-vuh-nü ee-na-bor-DABL', ['famille', 'belgique'], FCVDR),
  sent(1103, "La salle était bondée : il n'y avait plus une seule place.", 'The room was packed: there was not a single seat left.', '/la sal e.tɛ bɔ̃.de il nja.vɛ ply yn sœl plas/', 'la SAL ay-teh bohⁿ-DAY eel nya-veh plü ün suhl PLASS', ['contexte'], FCVDR),
  sent(1104, 'Il pleuvait fort et nous sommes rentrés trempés.', 'It was raining hard and we came home soaked.', '/il plø.vɛ fɔʁ e nu sɔm ʁɑ̃.tʁe tʁɑ̃.pe/', 'eel pluh-veh FOR ay noo som rahⁿ-tray trahⁿ-PAY', ['contexte']),
  sent(1105, 'Elle a déniché un petit appartement pas cher près du marché.', 'She tracked down a cheap little flat near the market.', '/ɛl a de.ni.ʃe œ̃ pə.ti.ta.paʁ.tə.mɑ̃ pa ʃɛʁ pʁɛ dy maʁ.ʃe/', 'ehl a day-nee-SHAY uhⁿ puh-tee-ta-par-tuh-MAHⁿ pa SHEHR preh dü mar-SHAY', ['contexte']),
  sent(1106, 'Le réaménagement du quartier fait monter les prix.', 'The redevelopment of the neighbourhood is pushing prices up.', '/lə ʁe.a.me.naʒ.mɑ̃ dy kaʁ.tje fɛ mɔ̃.te le pʁi/', 'luh ray-a-may-nazh-MAHⁿ dü kar-TYAY feh mohⁿ-tay lay PREE', ['famille'], FCVDR),
  sent(1107, 'La ville va réaménager la place du marché.', 'The city is going to redevelop the market square.', '/la vil va ʁe.a.me.na.ʒe la plas dy maʁ.ʃe/', 'la VEEL va ray-a-may-na-ZHAY la PLASS dü mar-SHAY', ['famille']),
  sent(1108, "Plusieurs familles ont été relogées après l'incendie.", 'Several families were rehoused after the fire.', '/ply.zjœʁ fa.mij ɔ̃.te.te ʁə.lɔ.ʒe a.pʁɛ lɛ̃.sɑ̃.di/', 'plü-zyuhr fa-MEEY ohⁿ-tay-tay ruh-lo-ZHAY a-preh lehⁿ-sahⁿ-DEE', ['famille'], FCVDR),
  sent(1109, "Le chauffage est désactivé pendant l'été.", 'The heating is switched off during the summer.', '/lə ʃo.faʒ ɛ de.zak.ti.ve pɑ̃.dɑ̃ le.te/', 'luh sho-FAZH eh day-zak-tee-VAY pahⁿ-dahⁿ lay-TAY', ['famille']),
  sent(1110, 'Les loyers impayés ont doublé cette année.', 'Unpaid rents doubled this year.', '/le lwa.je.zɛ̃.pɛ.je ɔ̃ du.ble sɛ.ta.ne/', 'lay lwa-yay-zehⁿ-peh-YAY ohⁿ doo-BLAY seh-ta-NAY', ['famille']),
  sent(1111, 'Le propriétaire exige trois mois de garantie.', "The landlord requires three months' deposit.", '/lə pʁɔ.pʁi.je.tɛʁ ɛɡ.ziʒ tʁwa mwa də ɡa.ʁɑ̃.ti/', 'luh pro-pree-yay-TEHR eg-ZEEZH trwa MWA duh ga-rahⁿ-TEE', ['cognat'], FCVDR),
  sent(1112, "La colocation coûte moins cher qu'un studio.", 'A flatshare costs less than a studio.', '/la kɔ.lɔ.ka.sjɔ̃ kut mwɛ̃ ʃɛʁ kœ̃ sty.djo/', 'la ko-lo-ka-SYOHⁿ koot mwehⁿ SHEHR kuhⁿ stü-DYOH', ['cognat']),
  sent(1113, 'Un mot inconnu a des voisins : lis-les.', 'An unknown word has neighbours: read them.', '/œ̃ mo.ɛ̃.kɔ.ny a de vwa.zɛ̃ li.le/', 'uhⁿ moh-ehⁿ-ko-NÜ a day vwa-ZEHⁿ lee-LAY', ['rule', 'contexte'], ['flashcard'],
    rule('Tu ne connais pas « bondée ». Où cherches-tu le sens ?', "Dans la phrase autour : « il n'y avait plus une seule place ». La salle était pleine.")),
  phrase(1114, 'deviner par le contexte', 'to guess from context', '/də.vi.ne paʁ lə kɔ̃.tɛkst/', 'duh-vee-NAY par luh kohⁿ-TEKST', ['contexte']),
  phrase(1115, 'un faux ami', 'a false friend', '/œ̃ fo.za.mi/', 'uhⁿ foh-za-MEE', ['fauxami']),
  sent(1116, 'Actuellement, je loge chez mes parents.', 'At the moment I live with my parents.', '/ak.tɥɛl.mɑ̃ ʒə lɔʒ ʃe me pa.ʁɑ̃/', 'ak-twel-MAHⁿ zhuh LOZH shay may pa-RAHⁿ', ['fauxami'], FCVDR),
  sent(1117, "En fait, je ne suis pas d'accord avec toi.", 'Actually, I do not agree with you.', '/ɑ̃ fɛt ʒə nə sɥi pa da.kɔʁ a.vɛk twa/', 'ahⁿ FET zhuh nuh swee pa da-KOR a-vek TWA', ['fauxami'], FCVDR),
  sent(1118, 'Éventuellement, je pourrais partager un appartement.', 'I could possibly share a flat.', '/e.vɑ̃.tɥɛl.mɑ̃ ʒə pu.ʁɛ paʁ.ta.ʒe œ̃.na.paʁ.tə.mɑ̃/', 'ay-vahⁿ-twel-MAHⁿ zhuh poo-REH par-ta-ZHAY uhⁿ-na-par-tuh-MAHⁿ', ['fauxami'], FCVDR),
  sent(1119, "J'ai finalement trouvé un kot.", 'I eventually found a student room.', '/ʒe fi.nal.mɑ̃ tʁu.ve œ̃ kɔt/', 'zhay fee-nal-MAHⁿ troo-VAY uhⁿ KOT', ['fauxami']),
  sent(1120, "J'ai emprunté ce livre à la bibliothèque.", 'I borrowed this book from the library.', '/ʒe.ɑ̃.pʁœ̃.te sə livʁ a la bi.bli.jɔ.tɛk/', 'zhay-ahⁿ-pruhⁿ-TAY suh LEEVR a la bee-blee-yo-TEK', ['fauxami'], FCVDR),
  sent(1121, 'La librairie du coin vend aussi des journaux.', 'The bookshop on the corner also sells newspapers.', '/la li.bʁɛ.ʁi dy kwɛ̃ vɑ̃ o.si de ʒuʁ.no/', 'la lee-breh-REE dü KWEHⁿ vahⁿ oh-see day zhoor-NOH', ['fauxami']),
  sent(1122, "J'ai assisté à la réunion de ce matin.", "I attended this morning's meeting.", '/ʒe.a.sis.te a la ʁe.y.njɔ̃ də sə ma.tɛ̃/', 'zhay-a-sees-TAY a la ray-ü-NYOHⁿ duh suh ma-TEHⁿ', ['fauxami'], FCVDR),
  sent(1123, "Je peux t'aider avec tes valises.", 'I can help you with your suitcases.', '/ʒə pø te.de a.vɛk te va.liz/', 'zhuh peu tay-DAY a-vek tay va-LEEZ', ['fauxami']),
  sent(1124, 'Il est très sensible au bruit.', 'He is very sensitive to noise.', '/i.lɛ tʁɛ sɑ̃.sibl o bʁɥi/', 'ee-leh treh sahⁿ-SEEBL oh BRWEE', ['fauxami'], FCVDR),
  sent(1125, "C'est une décision raisonnable.", 'It is a sensible decision.', '/sɛ.tyn de.si.zjɔ̃ ʁɛ.zɔ.nabl/', 'seh-tün day-see-ZYOHⁿ reh-zo-NABL', ['fauxami']),
  sent(1126, "Je n'ai plus de monnaie pour le parcomètre.", 'I have no more change for the parking meter.', '/ʒə ne ply də mɔ.nɛ puʁ lə paʁ.kɔ.mɛtʁ/', 'zhuh nay plü duh mo-NEH poor luh par-ko-METR', ['fauxami', 'quebec']),
  sent(1127, "Je n'ai plus d'argent sur mon compte.", 'I have no more money in my account.', '/ʒə ne ply daʁ.ʒɑ̃ syʁ mɔ̃ kɔ̃t/', 'zhuh nay plü dar-ZHAHⁿ sür mohⁿ KOHⁿT', ['fauxami']),
  sent(1128, "Julie cherche une chambre d'étudiant, un kot, près de l'université.", 'Julie is looking for a student room, a kot, near the university.', '/ʒy.li ʃɛʁʃ yn ʃɑ̃bʁ de.ty.djɑ̃ œ̃ kɔt pʁɛ də ly.ni.vɛʁ.si.te/', 'zhü-LEE shehrsh ün shahⁿbr day-tü-DYAHⁿ uhⁿ KOT preh duh lü-nee-vehr-see-TAY', ['resume', 'belgique']),
  sent(1129, 'Les loyers sont trop chers pour les étudiants.', 'Rents are too expensive for students.', '/le lwa.je sɔ̃ tʁo ʃɛʁ puʁ le.ze.ty.djɑ̃/', 'lay lwa-YAY sohⁿ troh SHEHR poor lay-zay-tü-DYAHⁿ', ['resume', 'contexte'], FCVDR),
];

/* ── ACT 7 · LES PANNEAUX DU TEXTE ──────────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1130, "D'abord, les employés se disent moins fatigués.", 'First, employees say they are less tired.', '/da.bɔʁ le.zɑ̃.plwa.je sə diz mwɛ̃ fa.ti.ɡe/', 'da-BOR lay-zahⁿ-plwa-YAY suh deez mwehⁿ fa-tee-GAY', ['connecteur', 'ajouter'], FCVDR),
  sent(1131, 'De plus, les absences ont diminué.', 'What is more, absences have gone down.', '/də plys le.zap.sɑ̃s ɔ̃ di.mi.nɥe/', 'duh PLÜSS lay-zap-SAHⁿS ohⁿ dee-mee-NWAY', ['connecteur', 'ajouter'], FCVDR),
  sent(1132, 'Pourtant, il faut rester prudent.', 'And yet we have to stay cautious.', '/puʁ.tɑ̃ il fo ʁɛs.te pʁy.dɑ̃/', 'poor-TAHⁿ eel foh res-tay prü-DAHⁿ', ['connecteur', 'tourner'], FCVDR),
  sent(1133, "En revanche, dans les hôpitaux, c'est plus difficile.", 'On the other hand, in hospitals it is harder.', '/ɑ̃ ʁə.vɑ̃ʃ dɑ̃ le.zo.pi.to sɛ ply di.fi.sil/', 'ahⁿ ruh-VAHⁿSH dahⁿ lay-zo-pee-TOH seh plü dee-fee-SEEL', ['connecteur', 'tourner'], FCVDR),
  sent(1134, "Par ailleurs, les parents ont d'autres contraintes.", 'Besides, parents have other constraints.', '/paʁ a.jœʁ le pa.ʁɑ̃ ɔ̃ dotʁ kɔ̃.tʁɛ̃t/', 'par a-YUHR lay pa-RAHⁿ ohⁿ dohtr kohⁿ-TREHⁿT', ['connecteur', 'ajouter']),
  sent(1135, 'Bref, la semaine de quatre jours peut marcher.', 'In short, the four-day week can work.', '/bʁɛf la sə.mɛn də ka.tʁə ʒuʁ pø maʁ.ʃe/', 'BREF la suh-MEN duh ka-truh ZHOOR peu mar-SHAY', ['connecteur', 'conclure'], FCVDR),
  sent(1136, "C'est donc aux employeurs d'en discuter.", 'So it is up to the employers to discuss it.', '/sɛ dɔ̃k o.zɑ̃.plwa.jœʁ dɑ̃ dis.ky.te/', 'seh dohⁿk oh-zahⁿ-plwa-YUHR dahⁿ dees-kü-TAY', ['connecteur', 'conclure']),
  sent(1137, 'Le loyer est cher. Pourtant, personne ne veut partir.', 'The rent is high. And yet nobody wants to leave.', '/lə lwa.je ɛ ʃɛʁ puʁ.tɑ̃ pɛʁ.sɔn nə vø paʁ.tiʁ/', 'luh lwa-yay eh SHEHR poor-TAHⁿ pehr-son nuh veu par-TEER', ['connecteur', 'tourner'], FCVDR),
  sent(1138, 'Le quartier est bruyant. En revanche, il est très bien situé.', 'The neighbourhood is noisy. On the other hand, it is very well located.', '/lə kaʁ.tje ɛ bʁɥi.jɑ̃ ɑ̃ ʁə.vɑ̃ʃ i.lɛ tʁɛ bjɛ̃ si.tɥe/', 'luh kar-tyay eh brwee-YAHⁿ ahⁿ ruh-VAHⁿSH ee-leh treh byehⁿ see-TWAY', ['connecteur', 'tourner']),
  sent(1139, 'Le bus est gratuit le dimanche. De plus, il passe toutes les dix minutes.', 'The bus is free on Sundays. What is more, it comes every ten minutes.', '/lə bys ɛ ɡʁa.tɥi lə di.mɑ̃ʃ də plys il pas tut le di mi.nyt/', 'luh BÜSS eh gra-twee luh dee-MAHⁿSH duh PLÜSS eel pass toot lay dee mee-NÜT', ['connecteur', 'ajouter']),
  sent(1140, 'Les essais sont encourageants. Il faut donc continuer.', 'The trials are encouraging. So we should carry on.', '/le.ze.sɛ sɔ̃.tɑ̃.ku.ʁa.ʒɑ̃ il fo dɔ̃k kɔ̃.ti.nɥe/', 'lay-zay-SEH sohⁿ-tahⁿ-koo-ra-ZHAHⁿ eel foh dohⁿk kohⁿ-tee-NWAY', ['connecteur', 'conclure'], FCVDR),
  sent(1141, 'Après « pourtant », le texte change de direction.', 'After pourtant, the text changes direction.', '/a.pʁɛ puʁ.tɑ̃ lə tɛkst ʃɑ̃ʒ də di.ʁɛk.sjɔ̃/', 'a-preh poor-TAHⁿ luh TEKST shahⁿzh duh dee-rehk-SYOHⁿ', ['rule', 'tourner'], ['flashcard'],
    rule("Tu vois « pourtant » au milieu d'un paragraphe. Qu'est-ce qui arrive ?", "Le texte tourne : la phrase qui suit dit le contraire de ce qu'on attendait.")),
  phrase(1142, 'en revanche', 'on the other hand', '/ɑ̃ ʁə.vɑ̃ʃ/', 'ahⁿ ruh-VAHⁿSH', ['connecteur']),
  phrase(1143, 'par ailleurs', 'besides, what is more', '/paʁ a.jœʁ/', 'par a-YUHR', ['connecteur']),
  sent(1144, "L'auteur est pour, mais seulement si on l'adapte à chaque métier.", 'The author is in favour, but only if it is adapted to each job.', '/lo.tœʁ ɛ puʁ mɛ sœl.mɑ̃ si ɔ̃ la.dapt a ʃak me.tje/', 'loh-TUHR eh POOR meh suhl-mahⁿ see ohⁿ la-DAPT a shak may-TYAY', ['resume', 'connecteur'], FCVDR),
];

/* ── ACT 8 · QUI EST « CE DERNIER » ─────────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1145, 'Le ministre a inauguré le marché en présence du maire.', 'The minister opened the market in the presence of the mayor.', '/lə mi.nistʁ a i.no.ɡy.ʁe lə maʁ.ʃe ɑ̃ pʁe.zɑ̃s dy mɛʁ/', 'luh mee-NEESTR a ee-noh-gü-RAY luh mar-SHAY ahⁿ pray-zahⁿs dü MEHR', ['reprise'], FCVDR),
  sent(1146, 'Ce dernier a salué un outil moderne pour le quartier.', 'The latter praised a modern tool for the neighbourhood.', '/sə dɛʁ.nje a sa.lɥe œ̃.nu.ti mɔ.dɛʁn puʁ lə kaʁ.tje/', 'suh dehr-NYAY a sa-LWAY uhⁿ-noo-tee mo-DEHRN poor luh kar-TYAY', ['reprise', 'ce-dernier'], FCVDR),
  sent(1147, 'La présidente regrette le prix des étals. Celle-ci le juge trop élevé.', 'The president regrets the price of the stalls. She finds it too high.', '/la pʁe.zi.dɑ̃t ʁə.ɡʁɛt lə pʁi de.ze.tal sɛl.si lə ʒyʒ tʁo.pel.ve/', 'la pray-zee-DAHⁿT ruh-GRET luh PREE day-zay-TAL sehl-SEE luh zhüzh troh-pel-VAY', ['reprise', 'celle-ci']),
  sent(1148, 'Paul et Marc sont arrivés. Le premier était fatigué, le second avait faim.', 'Paul and Marc arrived. The former was tired, the latter was hungry.', '/pɔl e maʁk sɔ̃.ta.ʁi.ve lə pʁə.mje e.tɛ fa.ti.ɡe lə sə.ɡɔ̃ a.vɛ fɛ̃/', 'pol ay MARK sohⁿ-ta-ree-VAY luh pruh-myay ay-teh fa-tee-GAY luh suh-gohⁿ a-veh FEHⁿ', ['reprise']),
  sent(1149, 'Aïssatou Ndiaye vend du poisson depuis vingt ans. La commerçante connaît tout le monde.', 'Aïssatou Ndiaye has sold fish for twenty years. The trader knows everyone.', '/a.i.sa.tu ndjaj vɑ̃ dy pwa.sɔ̃ də.pɥi vɛ̃.tɑ̃ la kɔ.mɛʁ.sɑ̃t kɔ.nɛ tu lə mɔ̃d/', 'a-ee-sa-TOO ndyahy vahⁿ dü pwa-SOHⁿ duh-pwee vehⁿ-TAHⁿ la ko-mehr-SAHⁿT ko-neh too luh MOHⁿD', ['reprise', 'senegal']),
  sent(1150, 'Le projet a coûté deux milliards. Cette somme a surpris les habitants.', 'The project cost two billion. That sum surprised the residents.', '/lə pʁɔ.ʒɛ a ku.te dø mi.ljaʁ sɛt sɔm a syʁ.pʁi le.za.bi.tɑ̃/', 'luh pro-ZHEH a koo-TAY deu mee-LYAR set SOM a sür-pree lay-za-bee-TAHⁿ', ['reprise']),
  sent(1151, 'Le maire et la ministre sont arrivés ensemble. Elle a parlé la première.', 'The mayor and the minister arrived together. She spoke first.', '/lə mɛʁ e la mi.nistʁ sɔ̃.ta.ʁi.ve ɑ̃.sɑ̃bl ɛl a paʁ.le la pʁə.mjɛʁ/', 'luh MEHR ay la mee-NEESTR sohⁿ-ta-ree-VAY ahⁿ-SAHⁿBL ehl a par-LAY la pruh-MYEHR', ['reprise']),
  sent(1152, "Ce dernier, c'est le dernier nommé.", 'Ce dernier means the last one named.', '/sə dɛʁ.nje sɛ lə dɛʁ.nje nɔ.me/', 'suh dehr-NYAY seh luh dehr-nyay no-MAY', ['rule', 'ce-dernier'], ['flashcard'],
    rule('« Le ministre est arrivé avec le maire. Ce dernier a parlé. » Qui a parlé ?', 'Le maire : ce dernier renvoie au dernier nom cité, pas au plus important.')),
  phrase(1153, 'ce dernier, cette dernière', 'the latter', '/sə dɛʁ.nje sɛt dɛʁ.njɛʁ/', 'suh dehr-NYAY set dehr-NYEHR', ['reprise']),
  phrase(1154, 'celui-ci, celle-ci', 'this one; in a text, the latter', '/sə.lɥi.si sɛl.si/', 'suh-lwee-SEE sehl-SEE', ['reprise']),
  phrase(1155, 'le premier, le second', 'the former, the latter', '/lə pʁə.mje lə sə.ɡɔ̃/', 'luh pruh-MYAY luh suh-GOHⁿ', ['reprise']),
  sent(1156, 'Le maire a salué le nouveau marché.', 'The mayor praised the new market.', '/lə mɛʁ a sa.lɥe lə nu.vo maʁ.ʃe/', 'luh MEHR a sa-LWAY luh noo-voh mar-SHAY', ['reprise', 'resume'], FCVDR),
  sent(1157, "C'est la présidente qui trouve les étals trop chers.", 'It is the president who finds the stalls too expensive.', '/sɛ la pʁe.zi.dɑ̃t ki tʁuv le.ze.tal tʁo ʃɛʁ/', 'seh la pray-zee-DAHⁿT kee troov lay-zay-TAL troh SHEHR', ['reprise']),
  sent(1158, 'Selon le maire de Dakar, le nouveau marché est un outil moderne pour le quartier.', 'According to the mayor of Dakar, the new market is a modern tool for the neighbourhood.', '/sə.lɔ̃ lə mɛʁ də da.kaʁ lə nu.vo maʁ.ʃe ɛ.tœ̃.nu.ti mɔ.dɛʁn puʁ lə kaʁ.tje/', 'suh-lohⁿ luh MEHR duh da-KAR luh noo-voh mar-SHAY eh-tuhⁿ-noo-tee mo-DEHRN poor luh kar-TYAY', ['resume', 'reprise']),
  sent(1159, 'Le ministre promet une aide aux petites vendeuses.', 'The minister promises help for the small traders.', '/lə mi.nistʁ pʁɔ.mɛ.tyn ɛd o pə.tit vɑ̃.døz/', 'luh mee-NEESTR pro-meh-TÜN ehd oh puh-teet vahⁿ-DEUZ', ['resume', 'reprise'], FCVDR),
];

/* ── ACT 9 · UN FAIT OU UNE OPINION ─────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1160, 'Depuis le 1er mars, la vitesse est limitée à 20 km/h.', 'Since 1 March the speed has been limited to 20 km/h.', '/də.pɥi lə pʁə.mje maʁs la vi.tɛs ɛ li.mi.te a vɛ̃ ki.lɔ.mɛtʁ a.lœʁ/', 'duh-pwee luh pruh-myay MARS la vee-TESS eh lee-mee-TAY a vehⁿ kee-lo-metr a-LUHR', ['fait']),
  sent(1161, 'Selon la Région, les accidents ont baissé de 15 %.', 'According to the Region, accidents fell by 15%.', '/sə.lɔ̃ la ʁe.ʒjɔ̃ le.zak.si.dɑ̃ ɔ̃ bɛ.se də kɛ̃z puʁ sɑ̃/', 'suh-lohⁿ la ray-ZHYOHⁿ lay-zak-see-DAHⁿ ohⁿ beh-SAY duh kehⁿz poor SAHⁿ', ['source'], FCVDR),
  sent(1162, "D'après une association, ce chiffre serait plus faible.", 'According to an association, this figure may be lower.', '/da.pʁɛ.zy.na.sɔ.sja.sjɔ̃ sə ʃifʁ sə.ʁɛ ply fɛbl/', 'da-preh-zü-na-so-sya-SYOHⁿ suh SHEEFR suh-reh plü FEHBL', ['source', 'conditionnel'], FCVDR),
  sent(1163, "Je trouve que c'est une bonne chose.", 'I think it is a good thing.', '/ʒə tʁuv kə sɛ.tyn bɔn ʃoz/', 'zhuh troov kuh seh-tün bon SHOHZ', ['opinion'], FCVDR),
  sent(1164, "Il paraît qu'on va bientôt les interdire.", 'Apparently they are soon going to ban them.', '/il pa.ʁɛ kɔ̃ va bjɛ̃.to le.zɛ̃.tɛʁ.diʁ/', 'eel pa-REH kohⁿ va byehⁿ-toh lay-zehⁿ-tehr-DEER', ['rumeur'], FCVDR),
  sent(1165, "La Région n'a annoncé aucune interdiction.", 'The Region has announced no ban.', '/la ʁe.ʒjɔ̃ na a.nɔ̃.se o.ky.nɛ̃.tɛʁ.dik.sjɔ̃/', 'la ray-ZHYOHⁿ na a-nohⁿ-SAY oh-kü-nehⁿ-tehr-deek-SYOHⁿ', ['fait']),
  sent(1166, 'À mon avis, ce serait une erreur.', 'In my opinion, it would be a mistake.', '/a mɔ̃.na.vi sə sə.ʁɛ.ty.nɛ.ʁœʁ/', 'a mohⁿ-na-VEE suh suh-reh-tü-neh-RUHR', ['opinion'], FCVDR),
  sent(1167, 'Le maire a déclaré que le projet serait prêt en juin.', 'The mayor said the project would be ready in June.', '/lə mɛʁ a de.kla.ʁe kə lə pʁɔ.ʒɛ sə.ʁɛ pʁɛ ɑ̃ ʒɥɛ̃/', 'luh MEHR a day-kla-RAY kuh luh pro-ZHEH suh-reh PREH ahⁿ ZHWEHⁿ', ['source', 'discours']),
  sent(1168, 'Les experts estiment que les prix vont encore monter.', 'Experts reckon prices will rise further.', '/le.zɛks.pɛʁ ɛs.tim kə le pʁi vɔ̃.tɑ̃.kɔʁ mɔ̃.te/', 'lay-zeks-PEHR es-TEEM kuh lay PREE vohⁿ-tahⁿ-kor mohⁿ-TAY', ['source', 'opinion']),
  sent(1169, 'Il paraît que la piscine va fermer.', 'Apparently the pool is going to close.', '/il pa.ʁɛ kə la pi.sin va fɛʁ.me/', 'eel pa-REH kuh la pee-SEEN va fehr-MAY', ['rumeur'], FCVDR),
  sent(1170, 'Selon la police, le conducteur roulait trop vite.', 'According to the police, the driver was going too fast.', '/sə.lɔ̃ la pɔ.lis lə kɔ̃.dyk.tœʁ ʁu.lɛ tʁo vit/', 'suh-lohⁿ la po-LEESS luh kohⁿ-dük-TUHR roo-leh troh VEET', ['source']),
  sent(1171, 'Un fait se vérifie. Une opinion se discute.', 'A fact can be checked. An opinion can be argued.', '/œ̃ fɛ sə ve.ʁi.fi yn ɔ.pi.njɔ̃ sə dis.kyt/', 'uhⁿ FEH suh vay-ree-FEE ün o-pee-NYOHⁿ suh dees-KÜT', ['rule', 'fait'], ['flashcard'],
    rule("« Je trouve que c'est une bonne chose. » Fait ou opinion ?", 'Une opinion : je trouve que annonce ce que pense une personne. Personne ne peut la vérifier.')),
  phrase(1172, "selon, d'après", 'according to', '/sə.lɔ̃ da.pʁɛ/', 'suh-LOHⁿ da-PREH', ['source']),
  phrase(1173, 'il paraît que', 'apparently, people say that', '/il pa.ʁɛ kə/', 'eel pa-REH KUH', ['rumeur']),
  sent(1174, 'Selon une étudiante, interdire les trottinettes serait une erreur.', 'According to a student, banning the scooters would be a mistake.', '/sə.lɔ̃ y.ne.ty.djɑ̃t ɛ̃.tɛʁ.diʁ le tʁɔ.ti.nɛt sə.ʁɛ.ty.nɛ.ʁœʁ/', 'suh-lohⁿ ü-nay-tü-DYAHⁿT ehⁿ-tehr-deer lay tro-tee-NET suh-reh-tü-neh-RUHR', ['resume', 'opinion']),
];

/* ── ACT 10 · À L'EXAMEN, LA QUESTION D'ABORD ───────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1175, 'Je lis la question avant le texte.', 'I read the question before the text.', '/ʒə li la kɛs.tjɔ̃ a.vɑ̃ lə tɛkst/', 'zhuh lee la kes-TYOHⁿ a-vahⁿ luh TEKST', ['examen', 'strategie'], FCVDR),
  sent(1176, 'Je souligne le mot important de la question.', 'I underline the key word in the question.', '/ʒə su.liɲ lə mo ɛ̃.pɔʁ.tɑ̃ də la kɛs.tjɔ̃/', 'zhuh soo-LEEÑ luh moh ehⁿ-por-TAHⁿ duh la kes-TYOHⁿ', ['examen', 'strategie'], FCVDR),
  sent(1177, 'Le texte ne répète pas le mot : il dit la même chose autrement.', 'The text does not repeat the word: it says the same thing differently.', '/lə tɛkst nə ʁe.pɛt pa lə mo il di la mɛm ʃoz o.tʁə.mɑ̃/', 'luh TEKST nuh ray-PET pa luh MOH eel dee la mem SHOHZ oh-truh-MAHⁿ', ['examen']),
  sent(1178, 'Une expérience en librairie est un atout.', 'Bookshop experience is an asset.', '/y.nɛks.pe.ʁjɑ̃s ɑ̃ li.bʁɛ.ʁi ɛ.tœ̃.na.tu/', 'ü-neks-pay-RYAHⁿS ahⁿ lee-breh-REE eh-tuhⁿ-na-TOO', ['examen', 'nuance'], FCVDR),
  sent(1179, "Elle n'est pas obligatoire.", 'It is not compulsory.', '/ɛl nɛ pa.zɔ.bli.ɡa.twaʁ/', 'ehl neh pa-zo-blee-ga-TWAR', ['examen', 'nuance']),
  sent(1180, 'Seules les personnes retenues seront contactées.', 'Only shortlisted applicants will be contacted.', '/sœl le pɛʁ.sɔn ʁə.tə.ny sə.ʁɔ̃ kɔ̃.tak.te/', 'suhl lay pehr-SON ruh-tuh-NÜ suh-rohⁿ kohⁿ-tak-TAY', ['examen', 'avis'], FCVDR),
  sent(1181, "À l'examen, la question te dit quoi chercher.", 'In the exam, the question tells you what to look for.', '/a lɛɡ.za.mɛ̃ la kɛs.tjɔ̃ tə di kwa ʃɛʁ.ʃe/', 'a leg-za-MEHⁿ la kes-TYOHⁿ tuh dee kwa shehr-SHAY', ['rule', 'examen'], ['flashcard'],
    rule('Épreuve de compréhension écrite : tu lis quoi en premier ?', 'La question. Elle te dit quel mot ou quel chiffre chercher dans le document.')),
  phrase(1182, 'un atout', 'an asset, a plus', '/œ̃.na.tu/', 'uhⁿ-na-TOO', ['examen', 'nuance']),
  phrase(1183, 'à temps partiel', 'part-time', '/a tɑ̃ paʁ.sjɛl/', 'a tahⁿ par-SYEHL', ['examen']),
  sent(1184, 'Le poste est à temps partiel : vingt-quatre heures par semaine.', 'The job is part-time: twenty-four hours a week.', '/lə pɔst ɛ.ta tɑ̃ paʁ.sjɛl vɛ̃t.ka.tʁœʁ paʁ sə.mɛn/', 'luh POST eh-ta tahⁿ par-SYEHL vehⁿt-ka-TRUHR par suh-MEN', ['examen'], FCVDR),
];

/* ── ACT 11 · RÉSUMER POUR UN AMI ───────────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1185, 'Les frigos communautaires se multiplient à Montréal.', 'Community fridges are multiplying in Montreal.', '/le fʁi.ɡo kɔ.my.no.tɛʁ sə myl.ti.pli a mɔ̃.ʁe.al/', 'lay free-GOH ko-mü-noh-TEHR suh mül-tee-PLEE a mohⁿ-ray-AL', ['resume', 'essentiel'], FCVDR),
  sent(1186, 'Chacun peut y déposer des aliments ou en prendre, gratuitement.', 'Anyone can leave food there or take some, free of charge.', '/ʃa.kœ̃ pø i de.po.ze de.za.li.mɑ̃ u ɑ̃ pʁɑ̃dʁ ɡʁa.tɥit.mɑ̃/', 'sha-KUHⁿ peu ee day-po-ZAY day-za-lee-MAHⁿ oo ahⁿ PRAHⁿDR gra-tweet-MAHⁿ', ['resume']),
  sent(1187, 'Des épiceries y déposent leurs invendus chaque soir.', 'Grocery shops leave their unsold food there every evening.', '/de.ze.pis.ʁi i de.poz lœʁ.zɛ̃.vɑ̃.dy ʃak swaʁ/', 'day-zay-pees-REE ee day-POZ luhr-zehⁿ-vahⁿ-DÜ shak SWAR', ['resume', 'famille'], FCVDR),
  sent(1188, 'Les frigos créent des liens entre voisins.', 'The fridges create ties between neighbours.', '/le fʁi.ɡo kʁe de ljɛ̃ ɑ̃tʁ vwa.zɛ̃/', 'lay free-GOH KRAY day LYEHⁿ ahⁿtr vwa-ZEHⁿ', ['resume'], FCVDR),
  sent(1189, 'Mais ils dépendent entièrement des bénévoles.', 'But they depend entirely on volunteers.', '/mɛ il de.pɑ̃d ɑ̃.tjɛʁ.mɑ̃ de be.ne.vɔl/', 'meh eel day-PAHⁿD ahⁿ-tyehr-MAHⁿ day bay-nay-VOL', ['resume', 'connecteur'], FCVDR),
  sent(1190, "Selon le directeur d'une banque alimentaire, ce n'est pas aux bénévoles de régler la faim.", 'According to the director of a food bank, it is not up to volunteers to solve hunger.', '/sə.lɔ̃ lə di.ʁɛk.tœʁ dyn bɑ̃k a.li.mɑ̃.tɛʁ sə nɛ pa.zo be.ne.vɔl də ʁe.ɡle la fɛ̃/', 'suh-lohⁿ luh dee-rehk-TUHR dün bahⁿk a-lee-mahⁿ-TEHR suh neh pa-zoh bay-nay-VOL duh ray-GLAY la FEHⁿ', ['resume', 'source', 'opinion']),
  sent(1191, "J'ai lu un article sur les frigos communautaires.", 'I read an article about community fridges.', '/ʒe ly œ̃.naʁ.tikl syʁ le fʁi.ɡo kɔ.my.no.tɛʁ/', 'zhay lü uhⁿ-nar-TEEKL sür lay free-goh ko-mü-noh-TEHR', ['resume', 'ouverture'], FCVDR),
  sent(1192, "En gros, l'article dit que ces frigos marchent bien.", 'Basically, the article says these fridges work well.', '/ɑ̃ ɡʁo laʁ.tikl di kə se fʁi.ɡo maʁʃ bjɛ̃/', 'ahⁿ GROH lar-teekl dee kuh say free-GOH marsh BYEHⁿ', ['resume', 'ouverture'], FCVDR),
  phrase(1193, 'en gros', 'basically, roughly', '/ɑ̃ ɡʁo/', 'ahⁿ GROH', ['resume']),
  phrase(1194, "l'idée principale", 'the main idea', '/li.de pʁɛ̃.si.pal/', 'lee-DAY prehⁿ-see-PAL', ['resume']),
  sent(1195, "Moi, je trouve que c'est une bonne idée.", 'Personally, I think it is a good idea.', '/mwa ʒə tʁuv kə sɛ.tyn bɔ.ni.de/', 'MWA zhuh troov kuh seh-tün bo-nee-DAY', ['resume', 'opinion'], FCVDR),
  sent(1196, "Un résumé garde l'idée, pas les phrases.", 'A summary keeps the idea, not the sentences.', '/œ̃ ʁe.zy.me ɡaʁd li.de pa le fʁaz/', 'uhⁿ ray-zü-MAY gard lee-DAY pa lay FRAZ', ['rule', 'resume'], ['flashcard'],
    rule('Tu résumes un article pour un ami. Tu recopies les meilleures phrases ?', "Non : tu gardes l'idée principale et deux points, avec tes mots. L'opinion reste signalée.")),
  sent(1197, 'Il y en a maintenant plus de quarante.', 'There are now more than forty of them.', '/i.li.jɑ̃.na mɛ̃t.nɑ̃ plys də ka.ʁɑ̃t/', 'ee-lee-yahⁿ-na mehⁿt-NAHⁿ plüss duh ka-RAHⁿT', ['resume', 'chiffre']),
  sent(1198, 'Il y a cinq ans, on en comptait trois.', 'Five years ago there were three.', '/i.lja sɛ̃.kɑ̃ ɔ̃.nɑ̃ kɔ̃.tɛ tʁwa/', 'ee-lya sehⁿ-KAHⁿ ohⁿ-nahⁿ kohⁿ-teh TRWA', ['chiffre']),
  sent(1199, "Ce n'est pas un fait, c'est son avis.", 'It is not a fact, it is his opinion.', '/sə nɛ pa.zœ̃ fɛ sɛ sɔ̃.na.vi/', 'suh neh pa-zuhⁿ FEH seh sohⁿ-na-VEE', ['resume', 'opinion'], FCVDR),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE ROW INDEX
 * ══════════════════════════════════════════════════════════════════════════ */

export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS,
  ACT7_ROWS, ACT8_ROWS, ACT9_ROWS, ACT10_ROWS, ACT11_ROWS,
];

export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

/** Rows a dictation mission can use, by act. */
export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE ANCHOR TEXTS AND THEIR KEYS
 *
 *  Every act from 1 to 11 opens on one of these. They live here so the
 *  reading, the quiz and the task cannot drift apart. Each is written a
 *  little ABOVE B1 on purpose: the strategy of the act gets the meaning
 *  anyway, and the reading's questions prove it before any glossary.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: the article Karine sends. 110 words. The title and the first
 *  sentence carry the whole meaning; eight words are above B1. */
export const TELETRAVAIL_TEXT =
  "TÉLÉTRAVAIL : LA VILLE RAMÈNE SES EMPLOYÉS AU BUREAU. Dès janvier, les employés travailleront sur place trois jours par semaine. La mesure touche près de 6 000 personnes. Depuis la pandémie, la plupart des fonctionnaires municipaux travaillaient de la maison quatre jours sur cinq. Selon la direction, le retour au bureau favorisera la collaboration. Le syndicat, en revanche, dénonce une décision prise sans consultation. Plusieurs employés affirment avoir aménagé un bureau chez eux à leurs frais. D'autres se réjouissent de retrouver leurs collègues. Dorénavant, chaque service affichera son horaire de présence. La Ville précise que des exceptions seront accordées pour raisons médicales.";

/** The words of TELETRAVAIL_TEXT above B1. None of them is needed for the
 *  gist, which is the whole point of act 1. */
export const TELETRAVAIL_HARD = [
  'fonctionnaires', 'favorisera', 'dénonce', 'aménagé', 'à leurs frais',
  'se réjouissent', 'Dorénavant', 'accordées',
] as const;

/** Act 2: four fragments on a phone screen. Each announces its genre before
 *  its first real sentence. */
export const ECRAN_TEXT =
  "1. AVIS AUX RÉSIDENTS, Ville de Québec. En raison de travaux d'aqueduc, l'eau sera coupée le mardi 14 mai, de 9 h à 16 h, rue Saint-Jean, entre les numéros 200 et 350. Merci de votre compréhension. 2. Publié aujourd'hui à 8 h 10. Montréal : une panne a interrompu la ligne verte du métro pendant quarante minutes ce matin. Le service a repris vers 7 h 30. 3. Forum Parents de Lausanne. Re : la cantine scolaire. Franchement, je trouve que les repas sont trop chers pour ce qu'on reçoit. Quelqu'un a le même avis ? 4. OFFRE EXCLUSIVE ! -30 % sur tous les forfaits mobiles. Profitez-en avant dimanche. Conditions en magasin.";

/** Act 3, first reading: the skeleton only. Title, standfirst, subheadings. */
export const SQUELETTE_TEXT =
  "TITRE : Vélo en ville : Lausanne mise sur les pistes protégées. CHAPEAU : D'ici 2030, la ville veut doubler le nombre de trajets à vélo. Un plan de 40 millions de francs prévoit vingt kilomètres de pistes séparées des voitures. Les commerçants restent sceptiques. INTERTITRES : Un réseau continu. Moins de places de stationnement. La crainte des commerçants.";

/** Act 3, second reading: the whole article, to check the prediction. */
export const VELO_TEXT =
  "VÉLO EN VILLE : LAUSANNE MISE SUR LES PISTES PROTÉGÉES. D'ici 2030, la ville veut doubler le nombre de trajets à vélo. Un plan de 40 millions de francs prévoit vingt kilomètres de pistes séparées des voitures. Les commerçants restent sceptiques. Un réseau continu. Aujourd'hui, les cyclistes doivent souvent rouler au milieu des voitures. Le plan relie les quartiers entre eux par des pistes sans interruption, du lac jusqu'à la gare. Moins de places de stationnement. Pour faire de la place, la ville supprimera environ 600 places de parking dans le centre. Certaines rues deviendront piétonnes le samedi. La crainte des commerçants. Plusieurs commerçants craignent de perdre des clients venus en voiture. « Nous ne sommes pas contre le vélo, mais nos clients âgés ne viendront plus », explique la présidente de l'association des commerçants. La municipalité promet une étude avant chaque fermeture de rue.";

/** Act 4: a municipal summer page, dense with hours, dates and prices. */
export const BIBLIO_TEXT =
  "BIBLIOTHÈQUES DE GATINEAU : L'ÉTÉ EN BREF. Du 24 juin au 1er septembre, les bibliothèques passent à l'horaire d'été. Elles ouvrent à 10 h du mardi au samedi et ferment à 18 h, sauf le jeudi : ce jour-là, elles ferment à 20 h. Elles sont fermées le dimanche et le lundi. Nouveauté cette année : les frais de retard sont abolis. Les usagers peuvent donc rapporter un livre en retard sans payer d'amende. L'abonnement reste gratuit pour les résidents ; il coûte 45 $ par année pour les non-résidents. Le club de lecture des 8 à 12 ans commence le 2 juillet, tous les mercredis à 14 h, à la bibliothèque des Érables. Les inscriptions se font en ligne ou au comptoir. Attention : la bibliothèque du Plateau sera fermée du 15 au 28 juillet pour des travaux de peinture.";

/** Act 5: a survey brief, every sentence carrying a number. */
export const LECTURE_TEXT =
  "LECTURE : LES QUÉBÉCOIS LISENT MOINS, MAIS AUTREMENT. Selon une enquête publiée le 23 avril, Journée mondiale du livre, 41 % des adultes disent lire au moins un livre par mois, contre 52 % il y a dix ans. La lecture de livres est donc en baisse de onze points en dix ans. En revanche, la lecture sur écran est en hausse : près d'un lecteur sur trois lit surtout sur un téléphone ou une tablette. Les 18 à 34 ans sont les plus nombreux à écouter des livres audio : 27 %, soit deux fois plus qu'en 2019. L'enquête a été menée auprès de 2 500 personnes. D'ici 2030, le gouvernement vise un taux de 50 %.";

/** Act 6: a Liège student forum. Seven words to meet without a dictionary:
 *  kot, épuisant, inabordables, colocation, garantie, réaménagement, and the
 *  two false friends actuellement and éventuellement. */
export const FORUM_TEXT =
  "Forum Étudiants de Liège. Re : trouver un kot pour la rentrée. Salut à tous. Je cherche un kot près de l'université pour septembre. Actuellement, je loge chez mes parents à Verviers, mais le trajet me prend deux heures par jour : c'est épuisant. Les kots du centre sont devenus inabordables : 450 euros par mois pour neuf mètres carrés, sans cuisine. J'ai visité une colocation à Outremeuse, mais le propriétaire exige trois mois de garantie. Éventuellement, je pourrais partager un appartement avec deux amis, mais le réaménagement du quartier fait monter les prix. Quelqu'un connaît une solution abordable ? Merci d'avance. Julie";

/** Act 7: an opinion column whose argument can be read off its signposts. */
export const CHRONIQUE_TEXT =
  "LA SEMAINE DE QUATRE JOURS : OUI, MAIS PAS PARTOUT. D'abord, les résultats des premiers essais sont encourageants. Dans plusieurs entreprises, les employés se disent moins fatigués et plus efficaces. De plus, les absences ont diminué. Pourtant, il faut rester prudent. Ces essais ont surtout eu lieu dans des bureaux. En revanche, dans les hôpitaux, c'est plus difficile : on ne ferme pas une urgence le vendredi. Par ailleurs, les parents ont d'autres contraintes : une journée de dix heures ne convient pas à tout le monde. Bref, la semaine de quatre jours peut marcher, à condition de l'adapter à chaque métier. C'est donc aux employeurs d'en discuter avec leurs équipes, secteur par secteur.";

/** The signposts of CHRONIQUE_TEXT in order, and what each does. The act 7
 *  quiz round and the cardDeck are checked against this. */
export const CHRONIQUE_SIGNPOSTS = [
  ["D'abord", 'ajoute'], ['De plus', 'ajoute'], ['Pourtant', 'tourne'],
  ['En revanche', 'tourne'], ['Par ailleurs', 'ajoute'], ['Bref', 'conclut'], ['donc', 'conclut'],
] as const;

/** Act 8: a Dakar press dispatch where four people are picked up by
 *  pronouns and nouns. */
export const DEPECHE_TEXT =
  "DAKAR : UN NOUVEAU MARCHÉ POUR LES PÊCHEURS DE SOUMBÉDIOUNE. Le ministre de la Pêche a inauguré samedi le nouveau marché aux poissons de Soumbédioune, en présence du maire de Dakar. Ce dernier a salué « un outil moderne pour le quartier ». Le ministre, lui, a rappelé que le projet avait coûté deux milliards de francs CFA. Cette somme a surpris beaucoup d'habitants. Le marché compte cent vingt étals et une chambre froide. Selon Aïssatou Ndiaye, présidente de l'association des mareyeuses, les pertes de poisson pourraient baisser de moitié. Celle-ci regrette toutefois le prix des étals, qu'elle juge trop élevé. Le ministre a répondu qu'une aide serait proposée aux plus petites vendeuses. Il n'a pas donné de date.";

/** Who every reprise in DEPECHE_TEXT points back to. */
export const DEPECHE_REPRISES = [
  ['Ce dernier', 'le maire de Dakar'], ['lui', 'le ministre'], ['Cette somme', 'deux milliards de francs CFA'],
  ['Celle-ci', 'Aïssatou Ndiaye'], ['elle', 'Aïssatou Ndiaye'], ['Il', 'le ministre'],
] as const;

/** Act 9: a Brussels local page mixing facts, sourced claims, a doubted
 *  figure, two opinions and one rumour that the last sentence refutes. */
export const TROTTINETTES_TEXT =
  "TROTTINETTES À BRUXELLES : LA VITESSE LIMITÉE DANS LE CENTRE. Depuis le 1er mars, la vitesse des trottinettes électriques est limitée à 20 km/h dans le centre. La mesure concerne environ 4 000 appareils en location. Selon la Région, les accidents ont baissé de 15 % en six mois. D'après une association de piétons, ce chiffre serait plus faible, car beaucoup d'accidents ne sont pas déclarés. Place Flagey, les avis sont partagés. « Je trouve que c'est une bonne chose, les trottoirs étaient dangereux », explique Marc, retraité. Pour Inès, étudiante, « il paraît qu'on va bientôt les interdire, et ce serait une erreur ». La Région n'a annoncé aucune interdiction.";

/** Act 10: a job advert as a TCF / TEF compréhension écrite document. */
export const EMPLOI_TEXT =
  "OFFRE D'EMPLOI. Café-librairie à Sherbrooke. Nous cherchons un ou une libraire à temps partiel, vingt-quatre heures par semaine, à partir du 1er octobre. Tâches : conseiller les clients, gérer les commandes, animer le club de lecture du jeudi soir. Profil : tu aimes lire, tu parles français et anglais, tu as déjà travaillé avec le public. Une expérience en librairie est un atout, mais elle n'est pas obligatoire. Salaire : 19 $ de l'heure, plus les pourboires du café. Envoie ton CV et quelques lignes sur ton dernier coup de cœur avant le 15 septembre. Seules les personnes retenues seront contactées.";

/** Act 11: THE TASK TEXT. About 210 words, a little above B1, with one main
 *  idea, two supporting points, one limit, and one opinion that must be
 *  flagged as an opinion in the summary. It is printed twice: as the act's
 *  reading, and inside the task brief so the learner can write with the
 *  text on the same screen. */
export const FRIGOS_TEXT =
  "GASPILLAGE : LES FRIGOS COMMUNAUTAIRES SE MULTIPLIENT À MONTRÉAL. Il y a cinq ans, on en comptait trois. Aujourd'hui, plus de quarante frigos communautaires sont installés dans les quartiers de Montréal, devant des églises, des écoles ou des centres sportifs. Le principe est simple : chacun peut y déposer des aliments encore bons ou en prendre, gratuitement et sans justification. D'abord, ces frigos réduisent le gaspillage. Selon une étude récente, un ménage québécois jette en moyenne plus de 140 kilos de nourriture par année. Plusieurs épiceries et boulangeries du Plateau déposent maintenant leurs invendus chaque soir, plutôt que de les mettre à la poubelle. Ensuite, ils créent des liens. « Les gens se parlent devant le frigo. Des voisins qui ne se connaissaient pas s'échangent des recettes », raconte Mélanie Tremblay, bénévole à Rosemont. Celle-ci passe deux fois par jour pour vérifier les dates et nettoyer les étagères. Pourtant, le modèle a ses limites. Les frigos dépendent entièrement des bénévoles, et certains ont dû fermer faute de personnel. Par ailleurs, la Ville n'offre aucun financement régulier. « À mon avis, c'est une belle idée, mais ce n'est pas à des bénévoles de régler la faim à Montréal », estime Jean-François Côté, directeur d'une banque alimentaire.";

/** What a summary of FRIGOS_TEXT must keep. The rubric and the model answer
 *  are written against this. */
export const FRIGOS_KEY = {
  idee: 'Les frigos communautaires se multiplient à Montréal : plus de quarante, contre trois il y a cinq ans.',
  points: [
    'Ils réduisent le gaspillage : des épiceries y déposent leurs invendus.',
    'Ils créent des liens entre voisins.',
  ],
  limite: 'Ils dépendent des bénévoles et la Ville ne les finance pas.',
  opinion: "Selon Jean-François Côté, directeur d'une banque alimentaire, ce n'est pas à des bénévoles de régler la faim.",
} as const;
