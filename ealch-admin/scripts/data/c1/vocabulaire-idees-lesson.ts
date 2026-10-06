// c1.12.l1 « Le vocabulaire des idées » — the lesson.
// DRAFT, to B1-WORKSHOP-AND-VOCAB-SHAPES.md §2 (THE VOCAB SHAPE) on top of
// B1-BUILD-PLAYBOOK.md, with the C1 rules of C1-BUILD-LOG.md (wave 4).
// Structural model: b2.27 « Le langage juridique et administratif »
// (`../b2/langage-juridique-*`), the B2 vocabulary lesson; C1 voice, helpers
// and Postgres-only rows as c1.08 (`./persuader-*`).
//
// Not imported, not merged into seed.json, not published. `task` is a real
// section type, so `sections` is `LessonSection[]` and the validators run on
// `LESSON` itself (`lessonWithoutTask()` returns it unchanged).
//
// ══════════════════════════════════════════════════════════════════════════
//  THE VOCAB SHAPE, AS BUILT HERE (model: b2.27's counts)
// ══════════════════════════════════════════════════════════════════════════
//
//   Every act from 2 to 11 is built around ONE PAIR OF NEIGHBOURING IDEAS,
//   in the same beats:
//     1. MEET THEM IN USE   a `story`, a one-take `listening` or a `reading`
//                           where the act's words appear naturally.
//     2. LEARN THEM         a `cardDeck` (4 cards) or a `tapTable` (6 rows),
//                           linked to a sheet: each word with what it does
//                           and what it is NOT.
//     3. TELL THEM APART    a gated `groupDrill` of collocations and bank
//                           rows (the b2 philosophie nouns reused as known).
//     4. TRAP               a stepped `trapDrill` or a `commonErrors`: the
//                           English calque, the wrong preposition, the
//                           neighbour taken for the word.
//     5. ONE MORE ANGLE     a listening, examples, flashcards, hacks, focus or
//                           dictation.
//     6. DANS UN TEXTE      the same title every act: a short authentic-
//                           looking text (100 to 140 words) read for the act's
//                           distinction, questions behind the modal.
//     7. CHECK              the gated act check.
//
//    1  Le mot juste                 6   café-philo scene (expliquer heard as
//                                         justifier), goals, the evening's
//                                         write-up, recap of b2.22, b2.23,
//                                         b2.10 and c1.08, useCases
//    2  Expliquer n’est pas justifier 7   rendre compte de, se justifier,
//                                         justifier une absence
//    3  La cause et la raison        7   motif, prétexte, la raison pour
//                                         laquelle, une cause défendue
//    4  Croire, savoir, connaître    7   croyance, conviction, certitude, en
//                                         connaissance de cause, faire la
//                                         connaissance de
//    5  Le nécessaire et le contingent 7  fortuit, inévitable, the everyday
//                                         « nécessaire », contingent on
//    6  Nécessaire ou suffisant      7   a grant's rules read in full; si et
//                                         seulement si, sine qua non, encore
//                                         faut-il
//    7  Prémisses et conclusion      7   valide / vrai, conclure que / à,
//                                         il s’ensuit que, découler de
//    8  Le sophisme et ses cousins   7   paralogisme, pétition de principe,
//                                         cercle vicieux, la faille
//    9  A priori, a posteriori       7   philosophical and everyday senses
//   10  Définir et distinguer        7   a municipal article read in full;
//                                         distinguer de, confondre et / avec,
//                                         au sens strict, relever de
//   11  Prouver, confirmer, réfuter  7   infirmer, corroborer, nier, démentir,
//                                         une évidence / evidence
//   12  Ta réponse                  11   model reply, plan, role play, TASK,
//                                         practice, quiz, review
//
//   TOTAL 87 missions, 12 acts. Corpus: 146 authored rows (.1000-.1145) in
//   twelve blocks plus 50 reused rows (41 Postgres-only in PG_ROWS, 9 in
//   seedPlusPacks), released act by act through `deckTranche`. Texts: 4
//   readings of 190 to 280 words (the evening's write-up, a grant's rules,
//   a municipal article, the model reply), 10 « Dans un texte » paragraphs,
//   5 hideLines listenings, 6 stories, one scene, one role play. Quiz: 12
//   rounds of 8 (one per act 2 to 11, a recycling round citing b2.10,
//   b2.22, b2.23, b2.24, c1.06 and c1.08, a « comme à l’examen » round).
//   Chapter artwork: `vocabulaire-idees-image-prompts.md`, twelve prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME (c1.15 and c1.16 may import it)
// ══════════════════════════════════════════════════════════════════════════
//
//   « Deux mots voisins, deux idées : nomme ce qui les sépare. »
//   EN: Two neighbouring words, two ideas: name what separates them.
//
//   ONE METAPHOR, LA PAIRE: two near-identical objects that differ by one
//   decisive feature. Each act holds one pair and names its notch; the task
//   asks the learner to name it for someone else. Rejected candidates and
//   why: corpus §E.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    the epistemic and logical pairs of abstract discussion at C1
//           (wave 4 ownership): expliquer / justifier, cause / raison /
//           motif / prétexte, croire / savoir and croyance / connaissance,
//           nécessaire / contingent, condition nécessaire / suffisante,
//           prémisse / conclusion and valide / vrai, sophisme / paralogisme
//           / pétition de principe / cercle vicieux, a priori / a posteriori,
//           the verbs of distinction, the verbs of proof; and the reply that
//           names someone's confusion.
//   QUOTES  the reframes of b2.10, b2.22, b2.23, b2.24 and c1.08, re-exported
//           from their corpus files; rows of those lessons, of c1.06 (« à ma
//           connaissance ») and 40 b2 philosophie bank rows reused BY ID.
//   LEAVES  political and social headwords to c1.15, moral, aesthetic and
//           memorial ones to c1.16; essay method (defining a sujet, the
//           problématique, plans) to c1.10; false friends as a system to
//           c1.18; déduction / induction to c1.08 (cited, never re-taught);
//           the six fallacies to b2.23 (cited, never re-listed); présupposé
//           to c1.20 (never used).
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   C1: unsimplified French; English authored on every learner string (an
//   `en` field or a final « EN: »), never on an answer. tu in every
//   instruction; characters use what the situation needs. Every `say` is
//   French. No spaced « ? » or « ! » in any scene or story bubble (the
//   bubbles carry no question mark at all). Other lessons cited by trail
//   position in words, read from the seed units, never by raw id; c1.13 is
//   typed from the plan for the roundup (NEXT_REF_PLANNED). Mission answer
//   slots are spread by `spreadMissions()`, the quiz by `spreadSlots()` (no
//   text changes; no `why` names a position), as b2.27 does. No thinker is
//   named anywhere a learner reads (brief); no quotation. Up to 4 tapTables
//   (decision 16): acts 3, 6, 9 and 11. Unpadded tag (« C1 · LEÇON 12 »).
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. FACT CHECK before publish: the twelve claims in corpus §A.7
//      (sophisme / paralogisme, pétition de principe, sine qua non, the two
//      senses of a priori and its spelling, cats in total darkness, the
//      tomato, « réplique », valid / true, « confondre entre », infirmer,
//      évidence / evidence, the boiling point known a posteriori).
//   2. The task is a WRITTEN reply (250 to 350 words, responseSpec 250-380)
//      to a reader's message printed in the brief, but `Lesson.skill` is
//      'CE' as the brief says (the lesson remediates reading precision; b1
//      shapes §1.4: skill follows what the lesson remediates). Keep 'CE', or
//      'PE' like b2.27?
//   3. « Une évidence / evidence » (act 11) is a faux ami c1.18 may also
//      want. Keep it here as the one trap the field cannot do without, and
//      let c1.18 cite « la leçon 12 du C1 »?
//   4. 41 reused rows are Postgres-only (PG_ROWS): the merge must carry them
//      and the gate preview needs them; 20 need the decision 13 typography
//      pass (corpus §A.5). fr.b2.decouvertes.181 « tirer une conclusion » is
//      reused instead of authoring a twin; so is c1.06's « à ma
//      connaissance ».
//   5. Act 9 teaches « a priori » as invariable in the traditional spelling
//      and mentions the 1990 « à priori » in sheet-savoir only; no quiz item
//      turns on the accent or a plural. Agree?
//   6. `Lesson.version` is 1 (a new lesson). 'coach-fr-FR' is inert; kept.
//      The twelve openers need art (ART_PENDING until Paul's images land).

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
import {
  UNIT, LESSON_ID, LEVEL, E, PH, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, PG_ROWS, dicteeFor,
  LECTURE_SOIREE, LECTURE_BOURSE, LECTURE_SOLITUDE, LECTURE_MODELE, MESSAGE_BASTIEN,
  TEXTE_A2, TEXTE_A3, TEXTE_A4, TEXTE_A5, TEXTE_A6, TEXTE_A7, TEXTE_A8, TEXTE_A9, TEXTE_A10, TEXTE_A11,
  B210_REFRAME, B210_REFRAME_EN, B222_REFRAME, B222_REFRAME_EN, B223_REFRAME, B223_REFRAME_EN,
  B224_REFRAME, B224_REFRAME_EN, C108_REFRAME, C108_REFRAME_EN,
  NOMINAL_UNIT, ACADEMIQUE_UNIT, ARGU_UNIT, CRITIQUE_UNIT, PERSUADER_UNIT,
  NOMINAL_REF, ACADEMIQUE_REF, ARGU_REF, CRITIQUE_REF, PERSUADER_REF, NUANCER_REF, NEXT_REF_PLANNED,
} from './vocabulaire-idees-corpus.ts';
import { VOCABULAIRE_IDEES_TERMS } from './vocabulaire-idees-terms.ts';

const seed = seedPlusPacks();

/* ══════════════════════════════════════════════════════════════════════════
 *  HELPERS
 * ══════════════════════════════════════════════════════════════════════════ */

type Sec<T extends LessonSection['type']> = Extract<LessonSection, { type: T }>;
type GItem = NonNullable<SoundGroup['items']>[number];
type Check = NonNullable<SoundGroup['check']>;
type ActDef = { act: LessonAct; sections: LessonSection[]; imports: string[] };
type TrapCard = NonNullable<Sec<'trapDrill'>['cards']>[number];
type TrapStep = NonNullable<Sec<'trapDrill'>['steps']>[number];

const AUDIO: SectionAudio = { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] };
const REC = (recordingId: string): SectionAudio => ({ mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId });

type SrcItem = { id: string; fr: string; en: string; ipa?: string; respell?: string; drills?: string[] };
const SEED = new Map((seed as unknown as { items: SrcItem[] }).items.map((i) => [i.id, i]));
const PG = new Map<string, SrcItem>(PG_ROWS.map((r) => [r.id, r]));
const ROW = new Map<string, SrcItem>(ALL_ROWS.map((r) => [r.id, r as SrcItem]));
const OWN = new Set(ALL_ROWS.map((r) => r.id));

/** An item's fr/en, from this corpus, the seed, or the Postgres-only rows.
 *  Throws on a typo, so no section can name an id that does not exist. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id) ?? PG.get(id);
  if (!r) throw new Error(`c1.12: no item ${id}`);
  return r;
}
const fr = (id: string) => src(id).fr;
const en = (id: string) => src(id).en;

/** Every import must exist in the seed or in PG_ROWS. */
for (const id of IMPORT_IDS) {
  if (!SEED.has(id) && !PG.has(id)) throw new Error(`c1.12: import ${id} is in neither the seed nor PG_ROWS`);
}

function ipaOf(id: string): string {
  const r = ROW.get(id);
  if (!r?.ipa) throw new Error(`c1.12: no authored ipa on ${id}`);
  return r.ipa;
}
/** The AUTHORED row's respelling, BRACKETED for a section. */
function rsOf(id: string): string {
  const r = ROW.get(id);
  if (!r?.respell) throw new Error(`c1.12: no authored respell on ${id}`);
  return `[${r.respell}]`;
}

const it = (id: string, note?: string): GItem => ({ fr: fr(id), itemId: id, en: en(id), ...(note ? { note } : {}) });
const ln = (id: string) => ({ fr: fr(id), en: en(id) });
const ex = (id: string, note: string) => ({ fr: fr(id), en: en(id), note });
const uc = (situation: string, id: string) => ({ situation, fr: fr(id), en: en(id) });
const chk = (q: string, opts: string[], correct: number, why: string): Check => ({ q, opts, correct, why });
const grp = (label: string, items: GItem[], check: Check): SoundGroup => ({ label, items, check });
const ctl = (label: string, q: string, opts: string[], correct: number, why: string): SoundGroup =>
  ({ label, items: [], check: { q, opts, correct, why } });

/** A trap card: the WRONG version in promptSound (never spoken), the row's
 *  correct French in fr. */
const trap = (id: string, promptLabel: string, promptSound: string, tip: string): TrapCard =>
  ({ promptLabel, promptSound, fr: fr(id), ipa: ipaOf(id), tip });

const STEPS = (ruleTitle: string, cardsTitle: string): TrapStep[] => [
  { label: 'La règle', kind: 'rule', title: ruleTitle },
  { label: 'Six cartes', kind: 'cards', title: cardsTitle },
  { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
  { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
];

/** The act check: control pages only, gated, before the checkpoint. */
function actCheck(id: string, title: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title, frSub: 'Le point avant la pause',
    groups, audio: AUDIO, say: `Petit bilan. ${REFRAME}`, terms,
  };
}

/** THE « DANS UN TEXTE » BEAT that closes acts 2 to 11: one short text, the
 *  answers behind the modal. Always the same title, so the loop is visible. */
function dansUnTexte(
  id: string, frSub: string, text: string, questions: { q: string; a: string }[], rec: string, terms: string[],
): Sec<'reading'> {
  return {
    type: 'reading', id, layer: 'core', questionsInModal: true,
    title: 'Dans un texte', frSub, text, questions,
    audio: REC(rec), say: REFRAME, terms,
  };
}

const NUANCER_ROW = 'fr.c1.nuances-et-registres.1015';
const B222_ROW = 'fr.b2.universite.1076';
const B223_OPINION = 'fr.b2.opinions-et-avis.1611';
const B223_SOPHISME = 'fr.b2.opinions-et-avis.1770';
const B223_CAUSE = 'fr.b2.opinions-et-avis.1775';
const B210_ROW = 'fr.b2.langue-soignee.1471';
const B224_ROW = 'fr.b2.strategies-de-comprehension.1438';
const C108_ROW = 'fr.c1.rhetorique.1035';
const TAUTOLOGIE = 'fr.c1.philosophie.006';
const TIRER = 'fr.b2.decouvertes.181';

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — LE MOT JUSTE
 *
 *  The problem: at a café-philo evening, the learner sums up Arnaud's point
 *  and must not turn « il explique » into « il justifie ». Then the
 *  evening's write-up, and the recap of b2.22, b2.23, b2.10 and c1.08 by
 *  trail position, their rows reused by id. NO « ? » OR « ! » IN ANY BUBBLE.
 * ══════════════════════════════════════════════════════════════════════════ */

const JUSTIFIE = {
  fr: 'Arnaud justifie ce mensonge par la peur de perdre son poste.',
  ipa: '/aʁ.no ʒys.ti.fi sə mɑ̃.sɔ̃ʒ paʁ la pœʁ də pɛʁdʁ sɔ̃ pɔst/',
  respell: '[ar-NOH zhüs-tee-FEE suh mahⁿ-SOHⁿZH | par la PUHR | duh pehrdr sohⁿ POST]',
  en: 'Arnaud is justifying this lie by the fear of losing her job. (Justifier says the lie was legitimate.)',
};

const A1_SCENE: Sec<'scene'> = {
  type: 'scene', id: 'a1-scene', render: 'screens', layer: 'core',
  title: 'Une phrase pour la salle', frSub: 'La soirée Oblique',
  setting: { place: 'La Tasse Oblique, un café du Plateau', city: 'Montréal', time: 'mardi, 19 h 40', ambience: 'une trentaine de chaises, des tasses, un tableau blanc, une discussion qui s’échauffe' },
  beats: [
    { kind: 'narration', text: 'Montréal, un mardi soir, à La Tasse Oblique. La soirée Oblique pose une question : peut-on tout expliquer ? Arnaud vient de raconter l’histoire d’une collègue qui a menti à sa directrice, par peur de perdre son poste. Une partie de la salle s’agace.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'Une participante', fr: 'Donc tu trouves normal de mentir à sa directrice.', en: 'So you think it is fine to lie to your boss.', respell: '[dohⁿk tü troov nor-MAL | duh mahⁿ-TEER | a sa dee-rek-TREESS]', stage: 'Elle croise les bras.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'Mireille, l’animatrice', fr: 'Tu peux résumer ce qu’a dit Arnaud, en une phrase.', en: 'Can you sum up what Arnaud said, in one sentence.', respell: '[tü peu ray-zü-MAY | suh ka dee ar-NOH | ahⁿ-nün FRAHZ]', stage: 'Elle te tend le feutre du tableau.', size: 'md', audio: AUDIO },
    { kind: 'narration', text: 'Tu veux être exact. Arnaud a donné les causes du mensonge ; il n’a jamais dit qu’il était légitime.', size: 'md', audio: AUDIO },
    {
      kind: 'choice', prompt: 'Quelle phrase écris-tu au tableau ?', size: 'lg',
      options: [
        { fr: JUSTIFIE.fr, respell: JUSTIFIE.respell, en: JUSTIFIE.en, outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(1000)), respell: rsOf(E(1000)), en: en(E(1000)), outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'La salle se calme. Personne ne pense plus qu’Arnaud défend le mensonge : il en donne les causes, et c’est tout.',
        breaks: 'Le ton monte encore. Pour la salle, justifier, c’est dire que le mensonge était légitime : tu viens de faire dire à Arnaud ce qu’il n’a pas dit.',
      },
    },
    {
      kind: 'break', heading: 'Expliquer n’est pas justifier',
      body: 'Arnaud a expliqué : il a dit pourquoi la collègue a menti. Il n’a pas justifié : il n’a pas dit qu’elle avait eu raison. Deux mots voisins, deux idées. EN: Arnaud explained the lie; he did not justify it.',
      wrong: { fr: JUSTIFIE.fr, ipa: JUSTIFIE.ipa, respell: JUSTIFIE.respell, en: JUSTIFIE.en },
      right: { fr: fr(E(1000)), ipa: ipaOf(E(1000)), respell: rsOf(E(1000)), en: en(E(1000)) },
      coach: `${REFRAME} EN: ${REFRAME_EN}`, size: 'lg', audio: AUDIO,
    },
    { kind: 'resolve', text: 'Mireille recopie ta phrase. Cette leçon t’apprend à nommer ce qui sépare les mots voisins des idées : expliquer et justifier, croire et savoir, nécessaire et suffisant, et d’autres. À la fin, tu répondras par écrit à quelqu’un qui les confond.', size: 'md' },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['expliquer', 'distinguer'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals', id: 'a1-goals', layer: 'core', title: 'À la fin de cette leçon',
  goals: [
    { t: 'Dire pourquoi, sans te tromper de mot', s: 'Actes 2 et 3 : expliquer ou justifier, la cause ou la raison' },
    { t: 'Séparer ce que tu sais de ce que tu crois', s: 'Actes 4, 5 et 9 : croyance, nécessité, a priori' },
    { t: 'Juger un raisonnement avec les mots justes', s: 'Actes 6 à 8 : conditions, prémisses, sophismes' },
    { t: 'Répondre à quelqu’un qui confond deux idées', s: 'Actes 10 à 12 : définir, prouver, reformuler' },
  ],
  audio: AUDIO, say: REFRAME,
};

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a1-lecture', layer: 'core', questionsInModal: true,
  title: 'Le compte rendu de la soirée', frSub: 'Lis, et repère les mots qui glissent',
  text: LECTURE_SOIREE,
  glossary: [
    { word: 'glissants', en: 'slippery', note: 'Des mots qui changent de sens sans qu’on s’en aperçoive.' },
    { word: 'tranchée', en: 'settled', note: 'Trancher une question : la régler, décider.' },
    { word: 'vestiaire', en: 'cloakroom', note: 'L’endroit où l’on laisse son manteau en entrant.' },
  ],
  questions: [
    { q: 'Global : à quoi sert ce texte ?', a: 'À rendre compte de la soirée du 3 mars : il résume le débat, retient une règle de conduite et annonce la soirée suivante.' },
    { q: 'Détail : pourquoi le ton est-il monté ?', a: 'Plusieurs participants ont cru qu’Arnaud excusait le mensonge de sa collègue, alors qu’il l’expliquait seulement.' },
    { q: 'Détail : quelle distinction Soraya a-t-elle proposée ?', a: 'Expliquer, c’est dire pourquoi une chose est arrivée ; justifier, c’est dire qu’elle était légitime.' },
    { q: 'Inférence : Édouard savait-il vraiment que le télétravail rend moins efficace ?', a: 'Non : il le croyait, sur la foi de deux ou trois collègues. Il n’avait pas de quoi le montrer.' },
    { q: 'Inférence : que reproche Fatou à la thèse d’Inès ?', a: 'De prendre une condition nécessaire, la volonté, pour une condition suffisante : la volonté aide, elle ne garantit rien.' },
    { q: 'Position : quel ton Mireille prend-elle dans la dernière phrase ?', a: 'Un ton léger et un peu ironique : elle invite à venir avec des questions plutôt qu’avec des certitudes.' },
  ],
  audio: REC('rec-c1-12-soiree'), say: REFRAME, terms: ['distinguer', 'expliquer'],
};

const A1_RAPPEL: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a1-rappel', layer: 'core', size: 'lg',
  title: 'Ce que tu sais déjà', frSub: 'Le B2 et le C1, en renfort',
  groups: [
    grp('Le B2 t’a appris à argumenter', [
      it(B222_ROW, `${Cap(ACADEMIQUE_REF)} : jamais plus sûr que tes preuves`),
      it(B223_OPINION, `${Cap(ARGU_REF)} : opinion et argument`),
      it(B223_SOPHISME, `${Cap(ARGU_REF)} : le mot, et six sophismes`),
    ], chk('« Une opinion dit ce que tu penses ; un argument dit pourquoi. » Ces deux mots sont…',
      ['voisins, mais distincts', 'deux synonymes', 'sans rapport'], 0,
      'Voisins, et séparés par une question : quoi, ou pourquoi. C’est la méthode de toute cette leçon. EN: neighbours, separated by a question.')),
    grp('Des mots pour les idées', [
      it(B210_ROW, `${Cap(NOMINAL_REF)} : l’adjectif devient un nom en -ité`),
      it(C108_ROW, `${Cap(PERSUADER_REF)} : déduction et induction`),
      it(PH(37), 'savoir et croyance : déjà une paire'),
    ], chk('De rapide, on tire la rapidité. De nécessaire, on tire…',
      ['la nécessité', 'la nécessaireté'], 0,
      'Le suffixe -ité, vu à la leçon 10 du B2 : beaucoup de noms d’idées se forment ainsi. EN: la nécessité.')),
    ctl('Ce qui change ici', 'Au B2, tu as appris à argumenter. Ici, tu apprends surtout…',
      ['à choisir entre deux mots voisins', 'à construire un plan', 'à repérer six sophismes'], 0,
      'Le plan et les six sophismes sont déjà acquis. Ici, chaque acte sépare deux idées voisines. EN: choosing between neighbouring words.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['distinguer'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a1-usages', layer: 'core', title: 'Là où un mot change le débat',
  cases: [
    uc('Tu résumes une position sans la défendre', E(1000)),
    uc('Tu demandes à quelqu’un de préciser deux mots', E(1007)),
    uc('Tu remets un débat sur les rails', E(1009)),
    uc('Tu montres que tout tient à un mot', E(1010)),
  ],
  audio: AUDIO, say: REFRAME, terms: ['distinguer'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le mot juste', 'Arnaud donne les causes d’un mensonge, sans l’approuver. Il…',
    ['l’explique', 'le justifie', 'l’excuse'], 0,
    'Donner les causes, c’est expliquer. EN: he explains it.'),
  ctl('La méthode', 'Deux mots se ressemblent. Avant de choisir, tu…',
    ['nommes ce qui les sépare', 'prends le plus savant'], 0,
    `${REFRAME} EN: ${REFRAME_EN}`),
  ctl('Le renfort', 'Dans cette leçon, les sophismes de la leçon 23 du B2 sont…',
    ['supposés connus', 'enseignés de nouveau'], 0,
    'Ils sont cités, jamais réenseignés : la leçon va plus loin. EN: assumed known.'),
], ['distinguer']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le mot juste',
    opener: {
      line: 'Une salle qui s’échauffe pour un seul mot : ici tu découvres pourquoi les mots voisins des idées doivent être séparés. EN: A room that flares up over one word: here you see why neighbouring words for ideas must be kept apart.',
      imageRef: 'lessons/vocabulaire-idees/act01.jpg',
    },
    sections: [],
    milestone: 'Tu résumes une position sans la déformer, et tu sais que deux mots voisins disent deux idées. EN: You can sum up a position without distorting it, and you know two neighbouring words say two ideas.',
    estScreens: 30, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_RAPPEL, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — EXPLIQUER N’EST PAS JUSTIFIER
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_HISTOIRE: Sec<'story'> = {
  type: 'story', id: 'a2-histoire', layer: 'core',
  title: 'Le contrôle séché', frSub: 'Comprendre, est-ce approuver',
  setting: 'Le lendemain, à la pause, au bureau. Hugo raconte à Soraya que son fils de seize ans a séché un contrôle de maths.',
  bubbles: [
    { from: 'narrator', fr: 'Hugo tourne son café sans le boire. Soraya l’écoute.', en: 'Hugo stirs his coffee without drinking it. Soraya listens.' },
    { from: 'user', fr: 'Il avait peur d’avoir une mauvaise note, alors il est resté à la maison. Je le comprends.', en: 'He was afraid of getting a bad mark, so he stayed home. I understand him.' },
    { from: 'coach', fr: fr(E(1004)), en: en(E(1004)), warn: 'Comprendre' },
    { from: 'user', fr: 'Mais quand je cherche les causes, j’ai l’impression de l’excuser.', en: 'But when I look for the causes, I feel I am excusing him.' },
    { from: 'coach', fr: fr(E(1020)), en: en(E(1020)), warn: 'Expliquer' },
    { from: 'user', fr: 'Le lycée demande quand même un certificat.', en: 'The school is asking for a certificate all the same.' },
    { from: 'coach', fr: 'Là, justifier prend un troisième sens : apporter une pièce. Et sans certificat, son absence ne sera pas justifiée.', en: 'There, justifier takes a third sense: providing a document. And without a certificate, his absence will not be justified.', warn: 'Une pièce' },
    { from: 'coach', fr: fr(E(1019)), en: en(E(1019)), warn: 'Explicable' },
  ],
  closing: { fr: 'Expliquer cherche les causes ; justifier cherche ce qui rend légitime.', en: 'Explaining looks for causes; justifying looks for what makes it legitimate.' },
  audio: REC('rec-c1-12-hugo'), say: REFRAME, terms: ['expliquer'],
};

const A2_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a2-cartes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-pourquoi',
  title: 'Quatre verbes, quatre questions', frSub: 'Pourquoi, et est-ce légitime',
  hint: 'Quatre cartes. Demande-toi chaque fois : quelle question ce verbe pose-t-il ?',
  audio: REC('rec-c1-12-expliquer-cartes'), say: REFRAME, terms: ['expliquer'],
  cards: [
    { head: 'Les causes', label: 'expliquer', fr: fr(E(1012)), sub: rsOf(E(1012)),
      body: 'Expliquer, c’est dire pourquoi une chose est arrivée. On explique un phénomène, un résultat, une décision : on n’approuve rien. EN: to explain is to give the causes.' },
    { head: 'La légitimité', label: 'justifier', fr: fr(E(1013)), sub: rsOf(E(1013)),
      body: 'Justifier, c’est montrer qu’une chose était légitime, qu’on peut la défendre. Qui justifie prend parti. EN: to justify is to defend.' },
    { head: 'Le registre soutenu', label: 'rendre compte de', fr: fr(E(1014)), sub: rsOf(E(1014)),
      body: 'Une théorie rend compte des faits quand elle les explique. Rendre compte à quelqu’un, c’est lui faire un rapport. EN: to account for.' },
    { head: 'Le troisième sens', label: 'justifier une absence', fr: fr(E(1024)), sub: rsOf(E(1024)),
      body: 'Dans l’administration, justifier, c’est prouver par un document : un certificat, un justificatif. Ni cause, ni défense : une pièce. EN: to support with a document.' },
  ],
};

const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a2-construire', layer: 'core', size: 'lg',
  title: 'Dire les causes, ou défendre', frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Dire les causes', [
      it(E(1017), 'une cause, sans jugement'),
      it(E(1022), 'une théorie qui explique'),
      it(E(1015), 'la famille du verbe'),
      it(E(1001), 's’expliquer par'),
    ], chk('« La hausse des prix explique la baisse des ventes. » Cette phrase…',
      ['donne une cause', 'défend une décision'], 0,
      'Expliquer : dire pourquoi c’est arrivé. Personne n’est défendu. EN: it gives a cause.')),
    grp('Défendre, ou refuser', [
      it(E(1013), 'justifier : défendre'),
      it(E(1018), 'rien ne rend cela légitime'),
      it(E(1016), 'la famille du verbe'),
      it(PH(211), 'demander ses fondements à une opinion'),
    ], chk('« Encore faudrait-il se demander sur quels fondements elle repose. » Ici, on demande à une opinion…',
      ['de se justifier', 'de s’expliquer par ses causes'], 0,
      'Des fondements : ce qui rend une opinion légitime. On lui demande de se justifier. EN: to justify itself.')),
    ctl('Les deux à la fois', '« Son absence est explicable ; elle n’est pas pour autant justifiée. » Cela veut dire…',
      ['on voit pourquoi, mais ce n’était pas légitime', 'on ne sait pas pourquoi il était absent'], 0,
      'Explicable : on voit les causes. Pas justifiée : pas légitime, ou sans pièce. EN: understandable, not justified.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['expliquer'],
};

const A2_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a2-piege', layer: 'core', swipe: true,
  title: 'Six phrases à redresser', frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Expliquer n’est pas excuser',
    body: 'Quand tu donnes les causes d’un geste, dis expliquer. Justifier dit que le geste était légitime, ou qu’une pièce le prouve. Et se justifier, c’est se défendre soi-même. EN: explaining gives causes; justifying defends or documents.',
  },
  cards: [
    trap(E(1000), 'justifier pour expliquer', 'Arnaud justifie ce mensonge ; il ne l’approuve pas.', 'Il donne les causes : il explique. Justifier, ce serait l’approuver. EN: explique.'),
    trap(E(1017), 'justifier pour une cause', 'La hausse des prix justifie la baisse des ventes.', 'Une cause n’est pas une défense : la hausse explique la baisse. EN: explique.'),
    trap(E(1020), 'expliquer et excuser', 'Expliquer un geste, c’est déjà l’excuser.', 'Expliquer n’excuse rien : c’est tout le point. EN: not excusing.'),
    trap(E(1022), 'rendre compte de', 'Cette théorie rend compte pour la plupart des cas observés.', 'Rendre compte DE quelque chose. EN: rendre compte de.'),
    trap(E(1021), 'se justifier', 'Elle a dû justifier devant toute l’équipe.', 'Se défendre soi-même : se justifier, avec le pronom. EN: se justifier.'),
    trap(E(1024), 'justifier une absence', 'Tu dois expliquer ton absence par un certificat.', 'Un certificat prouve : on justifie une absence. EN: justifier.'),
  ],
  drill: [
    { promptSay: 'Arnaud … ce mensonge : il en donne les causes.', opts: ['explique', 'justifie'], correct: 0 },
    { promptSay: 'Rien ne … qu’on parle ainsi à un collègue.', opts: ['justifie', 'explique'], correct: 0 },
    { promptSay: 'Cette théorie rend compte … la plupart des cas.', opts: ['de', 'pour'], correct: 0 },
    { promptSay: 'Elle a dû se … devant l’équipe.', opts: ['justifier', 'expliquer'], correct: 0 },
    { promptSay: 'Un retard … : rien ne le rend légitime.', opts: ['injustifiable', 'inexplicable'], correct: 0 },
    { promptSay: 'Un geste … : on n’en voit pas la cause.', opts: ['inexplicable', 'injustifiable'], correct: 0 },
    { promptSay: 'Tu dois … ton absence par un certificat.', opts: ['justifier', 'expliquer'], correct: 0 },
    { promptSay: 'Expliquer un geste, ce n’est pas l’… .', opts: ['excuser', 'expliquer'], correct: 0 },
  ],
  steps: STEPS('Expliquer n’est pas excuser', 'Six phrases à redresser'),
  audio: REC('rec-c1-12-piege-expliquer'), say: REFRAME, terms: ['expliquer'],
};

const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a2-ecoute', layer: 'core', hideLines: true,
  title: 'Huit phrases entendues', frSub: 'Écoute, puis réponds',
  lines: [
    ln(E(1017)), ln(E(1018)), ln(E(1019)), ln(E(1020)),
    ln(E(1021)), ln(E(1022)), ln(E(1024)), ln(E(1025)),
  ],
  questions: [
    { q: 'Première phrase : que fait la hausse des prix ?', opts: ['elle explique une baisse', 'elle justifie une décision'], correct: 0, why: 'Elle est la cause d’une baisse : expliquer. EN: it explains a fall.' },
    { q: 'Deuxième phrase : la personne trouve-t-elle acceptable de parler ainsi à un collègue ?', opts: ['non, rien ne le rend légitime', 'oui, si l’on a des raisons'], correct: 0, why: 'Rien ne justifie : rien ne rend cela légitime. EN: no.' },
    { q: 'Troisième phrase : l’absence était-elle légitime ?', opts: ['non, seulement explicable', 'oui, parfaitement'], correct: 0, why: 'Explicable, pas justifiée. EN: only understandable.' },
    { q: 'Septième phrase : que faut-il apporter ?', opts: ['un certificat', 'une explication orale', 'une lettre d’excuse'], correct: 0, why: 'Justifier une absence : par un certificat. EN: a certificate.' },
    { q: 'Dernière phrase : la personne demande-t-elle qu’on approuve son choix ?', opts: ['non', 'oui'], correct: 0, why: 'Elle l’explique, sans demander qu’on l’approuve. EN: no.' },
  ],
  audio: REC('rec-c1-12-expliquer-ecoute'), say: REFRAME, terms: ['expliquer'],
};

const A2_TEXTE = dansUnTexte('a2-texte', 'Lire : une lettre de lecteur', TEXTE_A2, [
  { q: 'Quelle phrase de l’article explique la décision de la mairie ?', a: 'Celle qui dit que la mairie a fermé la piscine parce que les réparations coûtaient trop cher : elle donne une cause.' },
  { q: 'Quelle phrase la justifie ?', a: '« C’était la seule décision raisonnable » : elle dit que la décision était légitime.' },
  { q: 'Que reproche le lecteur à la journaliste ?', a: 'D’avoir pris parti : de défendre la décision au lieu de seulement en rendre compte.' },
  { q: 'Que veut dire « rendre compte des causes » dans sa lettre ?', a: 'Exposer les causes, les expliquer, sans juger la décision.' },
], 'rec-c1-12-texte-a2', ['expliquer']);

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Les causes', 'Tu dis pourquoi une décision a été prise, sans la défendre. Tu…',
    ['l’expliques', 'la justifies'], 0,
    'Les causes : expliquer. EN: explain.'),
  ctl('La pièce', 'Le lycée demande un certificat pour…',
    ['justifier une absence', 'expliquer une absence'], 0,
    'Une pièce justifie, au sens administratif. EN: to document it.'),
  ctl('Le soutenu', 'Une théorie qui explique tous les faits en…',
    ['rend compte', 'rend justice', 'tient compte'], 0,
    'Rendre compte de : expliquer, soutenu. EN: accounts for them.'),
], ['expliquer']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Expliquer n’est pas justifier',
    opener: {
      line: 'Un contrôle séché, un père qui comprend : ici tu sépares dire pourquoi et dire que c’était légitime. EN: A skipped test, a father who understands: here you separate saying why from saying it was legitimate.',
      imageRef: 'lessons/vocabulaire-idees/act02.jpg',
    },
    sections: [],
    milestone: 'Tu expliques sans justifier, tu justifies une absence par une pièce, et tu rends compte d’un fait sans prendre parti. EN: You explain without justifying, document an absence, and account for a fact without taking sides.',
    estScreens: 38, restPoints: ['a2-construire', 'a2-ecoute'],
  },
  sections: [A2_HISTOIRE, A2_CARTES, A2_CONSTRUIRE, A2_PIEGE, A2_ECOUTE, A2_TEXTE, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — LA CAUSE ET LA RAISON
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_HISTOIRE: Sec<'story'> = {
  type: 'story', id: 'a3-histoire', layer: 'core',
  title: 'Une panne qui tombe bien', frSub: 'La cause, la raison, le prétexte',
  setting: 'Samedi, Inès appelle Arnaud depuis un garage de Laval. Sa voiture est en panne, et le dîner chez sa belle-sœur commence dans une heure.',
  bubbles: [
    { from: 'narrator', fr: 'Le garagiste a ouvert le capot. Inès s’est assise dans la salle d’attente.', en: 'The mechanic has opened the bonnet. Inès has sat down in the waiting room.' },
    { from: 'user', fr: 'Le garagiste cherche encore la cause de la panne.', en: 'The mechanic is still looking for the cause of the breakdown.' },
    { from: 'coach', fr: 'Il la trouvera. Le dîner, en revanche, tu peux encore y aller en taxi.', en: 'He will find it. The dinner, on the other hand, you can still get to by taxi.' },
    { from: 'user', fr: 'Je sais. Mais je n’avais pas très envie d’y aller, alors la panne tombe bien.', en: 'I know. But I did not much want to go, so the breakdown is well timed.' },
    { from: 'coach', fr: 'Donc la panne est la cause de ton retard, et un prétexte pour ton absence.', en: 'So the breakdown is the cause of your lateness, and a pretext for your absence.', warn: 'Un prétexte' },
    { from: 'user', fr: 'J’ai mes raisons, même si je ne les dirai pas à ma belle-sœur.', en: 'I have my reasons, even if I will not tell my sister-in-law.', },
    { from: 'coach', fr: fr(E(1035)), en: en(E(1035)), warn: 'Cause ou raison' },
    { from: 'coach', fr: 'Et si elle te demande le motif de ton absence, dis la panne. C’est vrai, à moitié.', en: 'And if she asks the reason for your absence, say the breakdown. It is half true.', warn: 'Le motif' },
  ],
  closing: { fr: 'Une panne a une cause ; une absence a des raisons, et parfois un prétexte.', en: 'A breakdown has a cause; an absence has reasons, and sometimes a pretext.' },
  audio: REC('rec-c1-12-ines'), say: REFRAME, terms: ['cause'],
};

const A3_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a3-table', layer: 'core', sheetId: 'sheet-pourquoi',
  title: 'Six mots pour dire pourquoi',
  cols: ['Mot', 'Il désigne', 'Il va avec'],
  rows: [
    { cells: ['la cause', 'ce qui produit un fait', 'un phénomène'], say: fr(E(1030)),
      detail: { title: 'La cause', body: 'Ce qui produit un effet. Un incendie, une panne, une maladie ont des causes ; on les cherche, on les trouve. EN: what produces a fact.', say: fr(E(1036)) } },
    { cells: ['la raison', 'ce qui justifie un choix', 'une personne'], say: fr(E(1031)),
      detail: { title: 'La raison', body: 'Ce qu’une personne donne, ou pourrait donner, pour son choix. On a ses raisons ; la raison pour laquelle. EN: what justifies a choice.', say: fr(E(1034)) } },
    { cells: ['le motif', 'la raison d’agir déclarée', 'un dossier'], say: fr(E(1032)),
      detail: { title: 'Le motif', body: 'La raison qu’on déclare, souvent par écrit : le motif d’une visite, d’un refus, d’une démission. EN: the stated reason.', say: fr(E(1028)) } },
    { cells: ['le prétexte', 'une raison à la place de la vraie', 'un soupçon'], say: fr(E(1033)),
      detail: { title: 'Le prétexte', body: 'Une raison donnée pour cacher la vraie. Dire « c’est un prétexte », c’est soupçonner. EN: a cover reason.', say: fr(E(1029)) } },
    { cells: ['l’effet', 'ce que produit une cause', 'une cause'], say: fr(PH(140)),
      detail: { title: 'L’effet', body: 'Le résultat d’une cause. Cause et effet vont par deux ; raison et choix aussi. EN: the result of a cause.', say: fr(E(1035)) } },
    { cells: ['une cause', 'un idéal qu’on défend', 'un combat'], say: fr(E(1037)),
      detail: { title: 'La cause qu’on défend', body: 'Un autre sens : l’idéal pour lequel on se bat. Pour la bonne cause. EN: a cause one fights for.', say: fr(E(1037)) } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['cause'],
};

const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a3-construire', layer: 'core', size: 'lg',
  title: 'Des causes, des raisons', frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Les phénomènes ont des causes', [
      it(PH(139), 'le mot du B2, réutilisé'),
      it(PH(140), 'ce que la cause produit'),
      it(E(1030), 'un incendie'),
      it(E(1036), 'le verbe causer'),
    ], chk('« Le verglas a causé l’accident. » Le verglas est…',
      ['la cause de l’accident', 'la raison de l’accident'], 0,
      'Un phénomène n’a pas de raisons : il a des causes. EN: the cause.')),
    grp('Les personnes ont des raisons', [
      it(E(1027), 'avoir ses raisons'),
      it(E(1034), 'la raison pour laquelle'),
      it(E(1028), 'le motif, souvent écrit'),
      it(E(1029), 'à la place de la vraie'),
    ], chk('Sur un formulaire : « … de votre demande ». Quel mot ?',
      ['Motif', 'Cause', 'Prétexte'], 0,
      'Le motif : la raison déclarée, dans un dossier. EN: reason for your request.')),
    ctl('La corrélation', `${Cap(CRITIQUE_REF)} : « une corrélation, pas une causalité ». Deux faits qui vont ensemble…`,
      ['n’ont pas forcément un lien de cause', 'ont toujours une cause commune'], 0,
      `« ${B224_REFRAME} » Aller ensemble n’est pas causer. EN: ${B224_REFRAME_EN}`),
  ],
  audio: AUDIO, say: REFRAME, terms: ['cause'],
};

const A3_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a3-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre façons de dire pourquoi de travers',
  errors: [
    { wrong: 'La raison de l’incendie reste inconnue.', right: fr(E(1030)),
      why: 'Normal : en anglais, the reason for the fire passe. En français, un incendie n’a pas de raisons, il a une cause. EN: la cause.' },
    { wrong: 'La raison pourquoi il est parti nous échappe encore.', right: fr(E(1034)),
      why: 'Normal : the reason why se calque mot à mot. En français : la raison pour laquelle. EN: pour laquelle.' },
    { wrong: 'Quelle est la cause de votre visite ?', right: fr(E(1032)),
      why: 'Normal : cause et motif disent tous deux pourquoi. Pour une démarche humaine, déclarée : le motif. EN: le motif.' },
    { wrong: 'La pluie n’a été qu’un motif pour annuler la sortie.', right: fr(E(1033)),
      why: 'Normal : motif dit déjà une raison. Mais une raison donnée à la place de la vraie, c’est un prétexte. EN: un prétexte.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['cause'],
};

const A3_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a3-exemples', layer: 'core',
  title: 'Cinq liens qui ne sont pas des causes', frSub: 'Du B2 et de cette leçon',
  examples: [
    ex(E(1038), 'aller ensemble n’est pas causer'),
    ex(B224_ROW, `${Cap(CRITIQUE_REF)} : la règle, déjà vue`),
    ex(B223_CAUSE, `${Cap(ARGU_REF)} : se suivre n’est pas causer`),
    ex(PH(141), 'la finalité : le but, pas la cause'),
    ex(E(1037), 'une cause qu’on défend, un autre sens'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['cause'],
};

const A3_TEXTE = dansUnTexte('a3-texte', 'Lire : une brève de radio', TEXTE_A3, [
  { q: 'Quelle est la cause de la panne ?', a: 'Un transformateur frappé par la foudre, selon le distributeur.' },
  { q: 'Quelle raison le maire donne-t-il pour reporter la séance ?', a: 'La panne elle-même.' },
  { q: 'Pourquoi l’opposition parle-t-elle de prétexte ?', a: 'Elle pense que la vraie raison du report est d’éviter le vote très contesté du budget.' },
  { q: 'Pourquoi la brève dit-elle « la cause » pour la panne et « les raisons » pour le report ?', a: 'La panne est un phénomène, produit par la foudre ; le report est une décision humaine, qui a des raisons.' },
], 'rec-c1-12-texte-a3', ['cause']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Le phénomène', 'Une panne, un incendie, une maladie ont…',
    ['des causes', 'des raisons', 'des motifs'], 0,
    'Un phénomène a des causes ; une personne a des raisons. EN: causes.'),
  ctl('Le calque', '« The reason why he left »',
    ['la raison pour laquelle il est parti', 'la raison pourquoi il est parti'], 0,
    'Pour laquelle, jamais pourquoi. EN: pour laquelle.'),
  ctl('Le soupçon', 'Une raison donnée à la place de la vraie, c’est…',
    ['un prétexte', 'un motif', 'un effet'], 0,
    'Le prétexte cache la vraie raison. EN: a pretext.'),
], ['cause']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'La cause et la raison',
    opener: {
      line: 'Une panne qui tombe bien et un dîner manqué : ici tu sépares ce qui produit un fait et ce qui justifie un choix. EN: A well-timed breakdown and a missed dinner: here you separate what produces a fact from what justifies a choice.',
      imageRef: 'lessons/vocabulaire-idees/act03.jpg',
    },
    sections: [],
    milestone: 'Tu donnes une cause à un phénomène et des raisons à une personne, et tu reconnais un motif et un prétexte. EN: You give causes to phenomena and reasons to people, and recognise a motive and a pretext.',
    estScreens: 38, restPoints: ['a3-table', 'a3-erreurs'],
  },
  sections: [A3_HISTOIRE, A3_TABLE, A3_CONSTRUIRE, A3_ERREURS, A3_EXEMPLES, A3_TEXTE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — CROIRE, SAVOIR, CONNAÎTRE
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a4-ecoute', layer: 'core', hideLines: true,
  title: 'Les Idées en marche', frSub: 'Huit auditeurs, au téléphone',
  lines: [
    ln(E(1043)), ln(E(1045)), ln(E(1046)), ln(PH(316)),
    ln(E(1048)), ln(E(1049)), ln(E(1050)), ln(E(1051)),
  ],
  questions: [
    { q: 'Premier auditeur : sait-il que son ami viendra ?', opts: ['non, il le croit', 'oui'], correct: 0, why: 'Je crois, mais je n’en sais rien. EN: he only believes it.' },
    { q: 'Deuxième auditrice : la femme dont elle parle avait-elle raison ?', opts: ['non, elle se trompait', 'oui'], correct: 0, why: 'Persuadée, et pourtant dans l’erreur. EN: she was wrong.' },
    { q: 'Troisième auditeur : une croyance vraie suffit-elle pour parler de connaissance ?', opts: ['non, pas encore', 'oui'], correct: 0, why: 'Il lui manque des raisons. EN: not yet.' },
    { q: 'Quatrième auditrice : que mérite parfois ce qu’on croit savoir ?', opts: ['d’être réexaminé', 'd’être défendu'], correct: 0, why: 'Ce qu’on croit savoir peut se révéler une croyance. EN: to be re-examined.' },
    { q: 'Cinquième auditeur : que veut dire « faire sa connaissance » ?', opts: ['la rencontrer', 'apprendre ce qu’elle sait'], correct: 0, why: 'Faire la connaissance de quelqu’un : le rencontrer. EN: to meet her.' },
    { q: 'Dernier auditeur : pourquoi dit-il « je le sais » ?', opts: ['il a vu les chiffres', 'il en est persuadé'], correct: 0, why: 'Il a de quoi le montrer. EN: he has seen the figures.' },
  ],
  audio: REC('rec-c1-12-radio-savoir'), say: REFRAME, terms: ['croyance'],
};

const A4_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a4-cartes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-savoir',
  title: 'Croire, savoir, connaître', frSub: 'Le vrai, et de quoi le montrer',
  hint: 'Quatre cartes. La deuxième vient de la leçon 6 du C1.',
  audio: REC('rec-c1-12-savoir-cartes'), say: REFRAME, terms: ['croyance'],
  cards: [
    { head: 'Le faux et le vrai', label: 'croire, savoir', fr: fr(E(1044)), sub: rsOf(E(1044)),
      body: 'Croire, c’est tenir pour vrai, et l’on peut se tromper. Savoir, c’est tenir pour vrai ce qui l’est, avec de quoi le montrer. EN: belief can be false; knowledge cannot.' },
    { head: 'La limite de ton savoir', label: Cap(NUANCER_REF), fr: fr(NUANCER_ROW), sub: '[a ma ko-neh-SAHⁿSS]',
      body: 'Tu l’as vu pour nuancer à l’oral. Ici, il marque la frontière entre ce que tu sais et ce que tu crois. EN: you met it for hedging; here it marks the line between knowing and believing.' },
    { head: 'En sachant', label: 'en connaissance de cause', fr: fr(E(1047)), sub: rsOf(E(1047)),
      body: 'En sachant ce qu’on fait et ce que cela implique. Une signature en connaissance de cause engage pleinement. EN: with full knowledge.' },
    { head: 'Trois connaissances', label: 'la connaissance', fr: fr(E(1049)), sub: rsOf(E(1049)),
      body: 'Ses connaissances : ce qu’on sait. Faire la connaissance de quelqu’un : le rencontrer. Une connaissance : une personne qu’on connaît un peu. EN: knowledge, meeting someone, an acquaintance.' },
  ],
};

const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a4-construire', layer: 'core', size: 'lg',
  title: 'Ce qu’on croit, ce qu’on sait', frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Ce qu’on croit', [
      it(PH(120), 'le mot du B2'),
      it(E(1039), 'sans fondement'),
      it(E(1042), 'une certitude personnelle'),
      it(PH(123), 'l’intuition : on le sent, sans preuve'),
    ], chk('Une conviction profonde est…',
      ['une certitude personnelle', 'une preuve'], 0,
      'Elle dit ta certitude, pas la vérité. EN: a personal certainty.')),
    grp('Ce qu’on sait', [
      it(PH(57), 'le mot du B2'),
      it(PH(56), 'la certitude : un état de l’esprit'),
      it(E(1041), 'être sûr'),
      it(E(1051), 'le savoir vient des chiffres'),
    ], chk('« Je ne le crois pas, je le sais. » Que faut-il pour dire « je sais » ?',
      ['que ce soit vrai, et de quoi le montrer', 'en être très convaincu'], 0,
      'Être convaincu ne suffit pas : il faut que ce soit vrai, et pouvoir le montrer. EN: truth and grounds.')),
    ctl('La croyance vraie', '« Une croyance vraie n’est pas encore une connaissance. » Pourquoi ?',
      ['il lui manque des raisons de la tenir pour vraie', 'elle est fausse'], 0,
      'Deviner juste n’est pas savoir. EN: a lucky guess is not knowledge.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['croyance'],
};

const A4_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a4-piege', layer: 'core', swipe: true,
  title: 'Six phrases à redresser', frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Je sais, ou je crois',
    body: 'Dis je sais seulement si c’est vrai et si tu peux le montrer. Sinon : je crois, je pense, à ma connaissance. Et une connaissance peut être un savoir, ou une personne. EN: say je sais only for what is true and shown.',
  },
  cards: [
    trap(E(1043), 'je sais pour je crois', 'Je sais qu’il viendra, mais je n’en suis pas sûr.', 'On ne peut pas savoir sans être sûr : je crois qu’il viendra. EN: je crois.'),
    trap(E(1048), 'rencontrer quelqu’un', 'J’ai connu sa connaissance à Dakar l’an dernier.', 'Rencontrer quelqu’un : faire sa connaissance. EN: faire sa connaissance.'),
    trap(E(1050), 'conviction et preuve', 'Une conviction sincère, c’est déjà une preuve.', 'Une conviction dit ta certitude ; une preuve montre que c’est vrai. EN: not proof.'),
    trap(E(1045), 'persuadé de', 'Elle était persuadée qu’avoir raison, et elle se trompait.', 'Persuadée d’avoir raison, ou persuadée qu’elle avait raison. EN: persuadée d’avoir.'),
    trap(E(1047), 'en connaissance de cause', 'Il a signé en connaissance des causes.', 'L’expression est figée : en connaissance de cause, au singulier. EN: fixed phrase.'),
    trap(E(1046), 'croyance vraie', 'Une croyance vraie, c’est déjà une connaissance.', 'Il lui manque des raisons : deviner juste n’est pas savoir. EN: not yet knowledge.'),
  ],
  drill: [
    { promptSay: 'Je … qu’il viendra, mais je n’en suis pas sûr.', opts: ['crois', 'sais'], correct: 0 },
    { promptSay: 'J’ai fait sa … à Dakar.', opts: ['connaissance', 'conscience'], correct: 0 },
    { promptSay: 'Il a signé en connaissance de … .', opts: ['cause', 'causes'], correct: 0 },
    { promptSay: 'Une croyance … : sans fondement.', opts: ['infondée', 'inconnue'], correct: 0 },
    { promptSay: 'Elle était … d’avoir raison.', opts: ['persuadée', 'connue'], correct: 0 },
    { promptSay: 'Une conviction n’est pas une … .', opts: ['preuve', 'croyance'], correct: 0 },
    { promptSay: '… ma connaissance, personne n’a encore répondu.', opts: ['À', 'Selon'], correct: 0 },
    { promptSay: 'Je ne le crois pas, je le … : j’ai vu les chiffres.', opts: ['sais', 'crois'], correct: 0 },
  ],
  steps: STEPS('Je sais, ou je crois', 'Six phrases à redresser'),
  audio: REC('rec-c1-12-piege-savoir'), say: REFRAME, terms: ['croyance'],
};

const A4_FLASH: Sec<'flashcards'> = {
  type: 'flashcards', id: 'a4-flash', layer: 'core',
  title: 'Huit mots du savoir', frSub: 'De l’anglais au français',
  cards: [
    { front: 'a belief', back: 'une croyance', say: fr(E(1039)) },
    { front: 'knowledge (what someone knows)', back: 'les connaissances', say: fr(E(1049)) },
    { front: 'as far as I know', back: 'à ma connaissance', say: 'À ma connaissance, personne n’a répondu.' },
    { front: 'knowingly, with full knowledge', back: 'en connaissance de cause', say: fr(E(1047)) },
    { front: 'to meet someone', back: 'faire la connaissance de quelqu’un', say: fr(E(1048)) },
    { front: 'a conviction', back: 'une conviction', say: fr(E(1050)) },
    { front: 'to be certain that', back: 'avoir la certitude que', say: 'J’ai la certitude qu’il dit vrai.' },
    { front: 'an acquaintance', back: 'une connaissance', say: 'C’est une connaissance, pas une amie.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['croyance'],
};

const A4_TEXTE = dansUnTexte('a4-texte', 'Lire : un échange sur un forum', TEXTE_A4, [
  { q: 'Lou savait-elle que les chats voient dans le noir complet ?', a: 'Non : elle le croyait, et c’était faux. Dans le noir absolu, aucun œil ne voit.' },
  { q: 'Sur quelle observation reposait sa croyance ?', a: 'Son chat trouve sa gamelle en pleine nuit.' },
  { q: 'Quelles autres causes Karim propose-t-il ?', a: 'Une bonne vue quand il y a peu de lumière, l’odorat et la mémoire des lieux.' },
  { q: 'Pourquoi Karim dit-il que cette croyance était raisonnable ?', a: 'Elle reposait sur une observation réelle ; seule l’explication manquait.' },
], 'rec-c1-12-texte-a4', ['croyance']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Le faux', 'Peut-on savoir une chose fausse ?',
    ['non : on la croyait seulement', 'oui, si l’on en est sûr'], 0,
    'Savoir suppose que c’est vrai. EN: no.'),
  ctl('La personne', '« C’est une connaissance » veut dire…',
    ['une personne qu’on connaît un peu', 'un savoir'], 0,
    'Une connaissance, au singulier, avec un article : souvent une personne. EN: an acquaintance.'),
  ctl('La limite', 'Tu n’as pas tout vérifié. Tu dis…',
    ['à ma connaissance', 'je sais que'], 0,
    'À ma connaissance : la limite de ce que tu sais. EN: as far as I know.'),
], ['croyance']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Croire, savoir, connaître',
    opener: {
      line: 'Huit auditeurs sûrs d’eux au téléphone : ici tu sépares ce qu’on croit de ce qu’on sait, et de quoi le montrer. EN: Eight confident callers: here you separate what you believe from what you know, and what shows it.',
      imageRef: 'lessons/vocabulaire-idees/act04.jpg',
    },
    sections: [],
    milestone: 'Tu dis je sais seulement quand tu peux le montrer, et tu emploies croyance, conviction et connaissance dans tous leurs sens. EN: You say je sais only when you can show it, and use croyance, conviction and connaissance in all their senses.',
    estScreens: 40, restPoints: ['a4-construire', 'a4-flash'],
  },
  sections: [A4_ECOUTE, A4_CARTES, A4_CONSTRUIRE, A4_PIEGE, A4_FLASH, A4_TEXTE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — LE NÉCESSAIRE ET LE CONTINGENT
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_HISTOIRE: Sec<'story'> = {
  type: 'story', id: 'a5-histoire', layer: 'core',
  title: 'Une valise échangée', frSub: 'Écrit d’avance, ou fortuit',
  setting: 'Dans le train de Montréal à Québec, Fatou raconte à Édouard comment elle a rencontré sa meilleure amie : une valise échangée par erreur à l’aéroport de Dakar.',
  bubbles: [
    { from: 'narrator', fr: 'Le fleuve défile derrière la vitre. Édouard sourit.', en: 'The river slides past the window. Édouard smiles.' },
    { from: 'user', fr: 'Une valise échangée, et vingt ans d’amitié. C’était écrit, voilà tout.', en: 'A swapped suitcase, and twenty years of friendship. It was written, that is all.' },
    { from: 'coach', fr: 'Pas du tout. C’était fortuit : nous aurions pu ne jamais nous croiser.', en: 'Not at all. It was by chance: we might never have crossed paths.', warn: 'Fortuit' },
    { from: 'user', fr: 'Tu crois au hasard, alors. Moi, je pense que rien n’arrive sans raison.', en: 'So you believe in chance. I think nothing happens without a reason.' },
    { from: 'coach', fr: 'Sans cause, peut-être. Mais une cause n’est pas un destin.', en: 'Without a cause, maybe. But a cause is not a destiny.', warn: 'Le destin' },
    { from: 'coach', fr: fr(E(1058)), en: en(E(1058)), warn: 'Contingent' },
    { from: 'user', fr: 'Pourtant, notre amitié me semble inévitable.', en: 'And yet our friendship seems inevitable to me.' },
    { from: 'coach', fr: 'Rien n’était inévitable. C’est justement ce qui la rend précieuse.', en: 'Nothing was inevitable. That is exactly what makes it precious.', warn: 'Inévitable' },
  ],
  closing: { fr: 'Le contingent aurait pu ne pas être ; c’est souvent ce qui lui donne du prix.', en: 'What is contingent might not have been; that is often what gives it value.' },
  audio: REC('rec-c1-12-train'), say: REFRAME, terms: ['contingent'],
};

const A5_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a5-cartes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-savoir',
  title: 'Ce qui devait être, ce qui aurait pu ne pas être', frSub: 'Le nécessaire et le contingent',
  hint: 'Quatre cartes. La dernière rappelle le sens courant de nécessaire.',
  audio: REC('rec-c1-12-necessaire-cartes'), say: REFRAME, terms: ['contingent'],
  cards: [
    { head: 'Ce qui ne peut pas être autrement', label: 'nécessaire', fr: fr(E(1056)), sub: rsOf(E(1056)),
      body: 'En philosophie, le nécessaire ne peut pas ne pas être : un triangle a trois côtés, par définition. EN: what cannot be otherwise.' },
    { head: 'Ce qui aurait pu ne pas être', label: 'contingent', fr: fr(E(1057)), sub: rsOf(E(1057)),
      body: 'Le contingent est réel, mais il aurait pu ne pas être : ta ville de naissance, une rencontre, un résultat. EN: what is, but might not have been.' },
    { head: 'Par hasard', label: 'fortuit', fr: fr(E(1059)), sub: rsOf(E(1059)),
      body: 'Fortuit : arrivé par hasard, sans intention ni plan. Une découverte fortuite. EN: by chance.' },
    { head: 'Le sens de tous les jours', label: 'nécessaire', fr: fr(E(1062)), sub: rsOf(E(1062)),
      body: 'Dans la vie courante, nécessaire veut dire : dont on a besoin, indispensable. Le contexte tranche. EN: in everyday use, needed.' },
  ],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a5-construire', layer: 'core', size: 'lg',
  title: 'Devait-il en être ainsi', frSub: 'Trois groupes',
  groups: [
    grp('Ce qui ne pouvait pas ne pas être', [
      it(PH(63), 'le mot du B2'),
      it(E(1054), 'la famille'),
      it(E(1052), 'vu les causes'),
      it(PH(72), 'tout aurait une cause nécessaire'),
    ], chk('Le déterminisme soutient que tout ce qui arrive…',
      ['découle nécessairement de causes', 'arrive par hasard'], 0,
      'Pour le déterminisme, rien n’est contingent : tout suit de ses causes. EN: everything follows from causes.')),
    grp('Ce qui aurait pu ne pas être', [
      it(PH(64), 'le mot du B2'),
      it(E(1055), 'la famille'),
      it(E(1053), 'par hasard'),
      it(PH(62), 'le hasard'),
    ], chk('Une rencontre fortuite est…',
      ['due au hasard', 'prévue de longue date'], 0,
      'Fortuit : par hasard. EN: by chance.')),
    grp('Écrit d’avance', [
      it(PH(61), 'le destin : tout serait écrit'),
      it(E(1058), 'réel, et pourtant contingent'),
      it(E(1063), 'rien d’inévitable'),
    ], chk('« C’était écrit. » Celui qui parle ainsi voit sa rencontre comme…',
      ['nécessaire, voulue par le destin', 'contingente'], 0,
      'Écrit d’avance : le destin, une nécessité. EN: as necessary.')),
  ],
  audio: AUDIO, say: REFRAME, terms: ['contingent'],
};

const A5_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a5-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre glissements entre nécessaire et contingent',
  errors: [
    { wrong: 'La suite du projet est contingente du vote du conseil.', right: fr(E(1060)),
      why: 'Normal : contingent on se calque facilement. En français, contingent veut dire « qui aurait pu ne pas être » ; pour une condition, on dit dépendre de. EN: dépend de.' },
    { wrong: 'Leur rencontre était fortunée : ils ont pris le même train par hasard.', right: fr(E(1059)),
      why: 'Normal : les deux mots se ressemblent. Fortuné veut dire riche, ou chanceux ; dû au hasard, c’est fortuit. EN: fortuite.' },
    { wrong: 'Qu’un triangle ait trois côtés, c’est contingent : cela ne peut pas être autrement.', right: fr(E(1056)),
      why: 'Normal : on pense « c’est un simple fait ». Mais ce qui ne peut pas être autrement est nécessaire. EN: nécessaire.' },
    { wrong: 'C’est arrivé, donc cela ne pouvait pas ne pas arriver.', right: fr(E(1058)),
      why: 'Normal : après coup, ce qui est arrivé paraît inévitable. Mais réel ne veut pas dire nécessaire. EN: real is not necessary.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['contingent'],
};

const A5_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a5-ecoute', layer: 'core', hideLines: true,
  title: 'Huit phrases sur ce qui devait être', frSub: 'Écoute, puis réponds',
  lines: [
    ln(E(1056)), ln(E(1057)), ln(E(1058)), ln(E(1059)),
    ln(E(1060)), ln(E(1061)), ln(E(1062)), ln(E(1063)),
  ],
  questions: [
    { q: 'Première phrase : le fait décrit pourrait-il être autrement ?', opts: ['non', 'oui'], correct: 0, why: 'Un triangle a trois côtés, nécessairement. EN: no.' },
    { q: 'Deuxième phrase : la personne aurait-elle pu naître ailleurs ?', opts: ['oui', 'non'], correct: 0, why: 'Sa ville de naissance est contingente. EN: yes.' },
    { q: 'Cinquième phrase : de quoi dépend la suite du projet ?', opts: ['du vote du conseil', 'du hasard', 'du budget de l’an prochain'], correct: 0, why: 'Dépendre de : la condition. EN: the council vote.' },
    { q: 'Septième phrase : nécessaire veut dire ici…', opts: ['dont on a besoin', 'qui ne peut pas être autrement'], correct: 0, why: 'Le sens courant : il faut réserver. EN: needed.' },
    { q: 'Dernière phrase : le résultat était-il inévitable ?', opts: ['non', 'oui'], correct: 0, why: 'Rien d’inévitable : il aurait pu ne pas arriver. EN: no.' },
  ],
  audio: REC('rec-c1-12-necessaire-ecoute'), say: REFRAME, terms: ['contingent'],
};

const A5_TEXTE = dansUnTexte('a5-texte', 'Lire : un billet de blog', TEXTE_A5, [
  { q: 'Pourquoi la rencontre de Noémie et Paul est-elle contingente ?', a: 'Elle a eu lieu parce qu’un train avait été annulé : elle aurait pu ne jamais avoir lieu.' },
  { q: 'Quel mot du texte veut dire « dû au hasard » ?', a: 'Fortuit : « rien de plus fortuit ».' },
  { q: 'Selon Noémie, qu’est-ce qui n’était pas contingent ?', a: 'La suite : deux personnes qui se parlent, se rappellent et se revoient finissent par se connaître.' },
  { q: 'Au sens strict, cette suite était-elle nécessaire ?', a: 'Non : très probable, mais elle aurait pu ne pas arriver. Noémie emploie « forcément » au sens large, pour dire « presque à coup sûr ».' },
], 'rec-c1-12-texte-a5', ['contingent']);

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Le contingent', 'Est contingent ce qui…',
    ['aurait pu ne pas être', 'ne peut pas être autrement'], 0,
    'Réel, mais pas nécessaire. EN: might not have been.'),
  ctl('Le calque', '« It is contingent on the vote. »',
    ['Cela dépend du vote.', 'C’est contingent du vote.'], 0,
    'Pour une condition : dépendre de. EN: dépend de.'),
  ctl('Le sens courant', 'Sur une porte : « Tenue correcte nécessaire ». Ici, nécessaire veut dire…',
    ['exigée, indispensable', 'qui ne peut pas être autrement'], 0,
    'Le sens de tous les jours : il faut. EN: required.'),
], ['contingent']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Le nécessaire et le contingent',
    opener: {
      line: 'Une valise échangée à Dakar et vingt ans d’amitié : ici tu sépares ce qui devait être et ce qui aurait pu ne pas être. EN: A suitcase swapped in Dakar and twenty years of friendship: here you separate what had to be from what might not have been.',
      imageRef: 'lessons/vocabulaire-idees/act05.jpg',
    },
    sections: [],
    milestone: 'Tu distingues le nécessaire, le contingent et le fortuit, et tu ne dis plus contingent de pour dépendre de. EN: You tell the necessary, the contingent and the fortuitous apart, and no longer calque « contingent on ».',
    estScreens: 38, restPoints: ['a5-construire', 'a5-ecoute'],
  },
  sections: [A5_HISTOIRE, A5_CARTES, A5_CONSTRUIRE, A5_ERREURS, A5_ECOUTE, A5_TEXTE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — NÉCESSAIRE OU SUFFISANT
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a6-lecture', layer: 'core', questionsInModal: true,
  title: 'Le règlement d’une bourse', frSub: 'Lis, et trie les conditions',
  text: LECTURE_BOURSE,
  glossary: [
    { word: 'recevable', en: 'admissible', note: 'Un dossier recevable peut être examiné ; il n’est pas encore accepté.' },
    { word: 'relevé de notes', en: 'transcript', note: 'La liste officielle de tes notes.' },
    { word: 'premier cycle', en: 'undergraduate', note: 'Les premières années d’université.' },
  ],
  questions: [
    { q: 'Global : à qui s’adresse ce règlement, et à quoi sert-il ?', a: 'À des étudiants de premier cycle qui veulent étudier un semestre dans un pays francophone : il fixe les conditions pour obtenir la bourse.' },
    { q: 'Détail : quelles pièces sont des conditions nécessaires ?', a: 'La lettre de motivation, le relevé de notes et la lettre d’acceptation : sans l’une d’elles, le dossier est rejeté.' },
    { q: 'Inférence : un dossier complet suffit-il pour obtenir la bourse ?', a: 'Non : il est nécessaire, mais pas suffisant. Les dossiers recevables sont encore classés par un jury (article 3).' },
    { q: 'Inférence : une moyenne de dix-huit sur vingt suffit-elle ?', a: 'Non, pas seule : il faut aussi un projet jugé excellent. Ensemble, les deux conditions suffisent (article 4).' },
    { q: 'Position : ce règlement promet-il quelque chose aux candidats non retenus ?', a: 'Seulement le droit de présenter un nouveau dossier l’année suivante : aucune garantie.' },
  ],
  audio: REC('rec-c1-12-bourse'), say: REFRAME, terms: ['condition'],
};

const A6_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a6-table', layer: 'core', sheetId: 'sheet-raisonner',
  title: 'Six façons de dire une condition',
  cols: ['Tournure', 'Elle dit', 'Registre'],
  rows: [
    { cells: ['une condition nécessaire', 'sans elle, rien', 'courant'], say: fr(E(1067)),
      detail: { title: 'La condition nécessaire', body: 'Sans elle, la chose n’arrive pas ; avec elle, rien n’est encore sûr. EN: without it, nothing.', say: fr(E(1070)) } },
    { cells: ['il suffit de', 'avec elle, c’est sûr', 'courant'], say: fr(E(1068)),
      detail: { title: 'La condition suffisante', body: 'Une seule chose à faire, et la chose arrive. Il suffit de + infinitif ; il suffit que + subjonctif. EN: with it, it happens.', say: fr(E(1068)) } },
    { cells: ['ne pas suffire à', 'nécessaire, peut-être ; pas assez', 'courant'], say: fr(E(1069)),
      detail: { title: 'Ne pas suffire', body: 'Suffire à, ou suffire pour, + infinitif. La phrase dit qu’il faut encore autre chose. EN: not enough.', say: fr(E(1074)) } },
    { cells: ['si et seulement si', 'nécessaire et suffisante', 'soutenu'], say: fr(E(1071)),
      detail: { title: 'Si et seulement si', body: 'La condition est à la fois nécessaire et suffisante : avec elle, toujours ; sans elle, jamais. EN: if and only if.', say: fr(E(1071)) } },
    { cells: ['sine qua non', 'indispensable', 'soutenu'], say: fr(E(1073)),
      detail: { title: 'La condition sine qua non', body: 'Latin : « sans laquelle non ». C’est une condition nécessaire, dite avec force. EN: indispensable.', say: fr(E(1073)) } },
    { cells: ['encore faut-il', 'une condition de plus', 'soutenu'], say: fr(E(1075)),
      detail: { title: 'Encore faut-il', body: 'Après « il ne suffit pas de », la deuxième condition, avec l’inversion : encore faut-il. EN: one more condition.', say: fr(PH(225)) } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['condition'],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a6-construire', layer: 'core', size: 'lg',
  title: 'Sans elle, ou avec elle', frSub: 'Trois groupes',
  groups: [
    grp('Sans elle, rien', [
      it(E(1064), 'la collocation'),
      it(E(1066), 'en latin, soutenu'),
      it(E(1070), 'nécessaire, pas suffisante'),
      it(E(1073), 'la confiance, indispensable'),
    ], chk('L’eau est nécessaire à la vie. Peut-on en conclure que là où il y a de l’eau, il y a de la vie ?',
      ['non : nécessaire n’est pas suffisant', 'oui'], 0,
      'Une condition nécessaire ne garantit rien. EN: necessary is not sufficient.')),
    grp('Avec elle, c’est sûr', [
      it(E(1065), 'la collocation'),
      it(E(1068), 'il suffit de'),
      it(E(1071), 'les deux à la fois'),
      it(E(1072), 'la règle'),
    ], chk('« Il suffit d’appuyer sur ce bouton. » Appuyer est une condition…',
      ['suffisante', 'nécessaire seulement'], 0,
      'Il suffit : avec elle, c’est fait. EN: sufficient.')),
    grp('Il faut, mais encore', [
      it(PH(225), 'avoir raison ne suffit pas'),
      it(PH(202), 'des lois égales ne suffisent pas'),
      it(E(1075), 'encore faut-il'),
      it(E(1074), 'loin d’être suffisant'),
    ], chk('« Il ne suffit pas d’avoir raison, il faut encore savoir convaincre. » Avoir raison est…',
      ['nécessaire, pas suffisant', 'suffisant', 'inutile'], 0,
      'Il ne suffit pas… il faut encore : une condition nécessaire, et une autre. EN: necessary, not sufficient.')),
  ],
  audio: AUDIO, say: REFRAME, terms: ['condition'],
};

const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a6-piege', layer: 'core', swipe: true,
  title: 'Six phrases à redresser', frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Nécessaire n’est pas suffisant',
    body: 'Une condition nécessaire ne garantit rien ; une condition suffisante n’est pas forcément la seule. Le piège : conclure d’une condition nécessaire que la chose arrivera. EN: necessary guarantees nothing; sufficient is not always the only way.',
  },
  cards: [
    trap(E(1067), 'nécessaire pris pour suffisant', 'Le billet est nécessaire pour entrer, donc il suffit.', 'Nécessaire ne veut pas dire suffisant : il faut peut-être autre chose. EN: not sufficient.'),
    trap(E(1069), 'suffire à', 'Un diplôme ne suffit pas de trouver un emploi.', 'Suffire à, ou pour, + infinitif. EN: suffire à.'),
    trap(E(1068), 'il suffit de', 'Il suffit que d’appuyer sur ce bouton pour éteindre l’appareil.', 'Il suffit de + infinitif, ou il suffit que + subjonctif : pas les deux. EN: il suffit de.'),
    trap(E(1071), 'si et seulement si', 'Le dossier est accepté si seulement si toutes les pièces sont jointes.', 'La formule a trois mots : si et seulement si. EN: if and only if.'),
    trap(E(1073), 'sine qua non', 'La confiance est la condition sine qua none de tout travail d’équipe.', 'Latin : non, sans e. EN: sine qua non.'),
    trap(E(1075), 'encore faut-il', 'Il ne suffit pas d’être inscrit : encore il faut avoir rendu ses livres.', 'Encore en tête de proposition : on inverse, encore faut-il. EN: inversion.'),
  ],
  drill: [
    { promptSay: 'Le billet est nécessaire, mais il n’est pas … .', opts: ['suffisant', 'nécessaire'], correct: 0 },
    { promptSay: 'Un diplôme ne suffit pas … trouver un emploi.', opts: ['à', 'de'], correct: 0 },
    { promptSay: 'Il suffit … appuyer sur ce bouton.', opts: ['d’', 'que d’'], correct: 0 },
    { promptSay: 'Accepté si et … si toutes les pièces sont jointes.', opts: ['seulement', 'sauf'], correct: 0 },
    { promptSay: 'La confiance est la condition … de tout travail d’équipe.', opts: ['sine qua non', 'suffisante'], correct: 0 },
    { promptSay: 'Il ne suffit pas d’être inscrit : encore … avoir rendu ses livres.', opts: ['faut-il', 'il faut'], correct: 0 },
    { promptSay: 'L’eau est une condition … de la vie, pas suffisante.', opts: ['nécessaire', 'fortuite'], correct: 0 },
    { promptSay: 'C’est nécessaire, mais loin d’être … .', opts: ['suffisant', 'inévitable'], correct: 0 },
  ],
  steps: STEPS('Nécessaire n’est pas suffisant', 'Six phrases à redresser'),
  audio: REC('rec-c1-12-piege-conditions'), say: REFRAME, terms: ['condition'],
};

const A6_HACKS: Sec<'hacks'> = {
  type: 'hacks', id: 'a6-hacks', layer: 'core', title: 'Trois tests quand tu hésites',
  hacks: [
    { hack: 'Le test du « sans » : sans elle, la chose peut-elle arriver ? Si non, la condition est nécessaire.',
      why: 'Sans billet, pas d’entrée : le billet est nécessaire. EN: the « without » test finds necessary conditions.' },
    { hack: 'Le test du « avec » : avec elle seule, la chose arrive-t-elle à coup sûr ? Si oui, elle est suffisante.',
      why: 'Un billet seul ne fait pas entrer si l’on demande aussi une pièce d’identité. EN: the « with » test finds sufficient ones.' },
    { hack: 'Devant « il suffit de » dans une publicité ou un discours, demande ce qu’il faut encore.',
      why: 'Celui qui vend présente souvent une condition nécessaire comme suffisante. EN: ask what else is needed.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['condition'],
};

const A6_TEXTE = dansUnTexte('a6-texte', 'Lire : une offre d’emploi', TEXTE_A6, [
  { q: 'Quelles exigences sont des conditions nécessaires ?', a: 'Le permis de conduire et la lettre de motivation : sans eux, la candidature n’est pas retenue.' },
  { q: 'L’expérience en librairie est-elle nécessaire ?', a: 'Non : c’est un atout, sans être exigée.' },
  { q: 'Que dit la dernière phrase ?', a: 'Que même toutes les conditions réunies ne garantissent pas un entretien.' },
  { q: 'Si tu as le permis et une lettre de motivation, es-tu sûr d’avoir un entretien ?', a: 'Non : ce sont des conditions nécessaires, pas suffisantes.' },
], 'rec-c1-12-texte-a6', ['condition']);

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Nécessaire', 'Une condition nécessaire…',
    ['ne garantit rien à elle seule', 'suffit toujours'], 0,
    'Sans elle, rien ; avec elle, pas encore tout. EN: guarantees nothing alone.'),
  ctl('Suffisante', 'Une condition suffisante est-elle forcément la seule ?',
    ['non, d’autres chemins peuvent mener au même résultat', 'oui'], 0,
    'Il suffit d’appuyer sur le bouton ; on peut aussi débrancher l’appareil. EN: not the only way.'),
  ctl('Les deux', '« Si et seulement si » annonce une condition…',
    ['nécessaire et suffisante', 'suffisante seulement'], 0,
    'Avec elle, toujours ; sans elle, jamais. EN: both.'),
], ['condition']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Nécessaire ou suffisant',
    opener: {
      line: 'Un dossier complet et une bourse refusée : ici tu sépares ce sans quoi rien n’arrive et ce qui suffit pour que tout arrive. EN: A complete file and a refused grant: here you separate what nothing happens without from what is enough for it to happen.',
      imageRef: 'lessons/vocabulaire-idees/act06.jpg',
    },
    sections: [],
    milestone: 'Tu tries les conditions d’un règlement en nécessaires et suffisantes, et tu ne prends plus l’une pour l’autre. EN: You sort a rule’s conditions into necessary and sufficient, and no longer mistake one for the other.',
    estScreens: 40, restPoints: ['a6-table', 'a6-piege'],
  },
  sections: [A6_LECTURE, A6_TABLE, A6_CONSTRUIRE, A6_PIEGE, A6_HACKS, A6_TEXTE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — PRÉMISSES ET CONCLUSION
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_HISTOIRE: Sec<'story'> = {
  type: 'story', id: 'a7-histoire', layer: 'core',
  title: 'Un local à vélos', frSub: 'Des prémisses dites',
  setting: 'Au bureau, Inès prépare une proposition pour la direction : un local à vélos au sous-sol. Guillaume relit son argumentaire.',
  bubbles: [
    { from: 'narrator', fr: 'Guillaume a souligné deux phrases au crayon. Inès attend.', en: 'Guillaume has underlined two sentences in pencil. Inès waits.' },
    { from: 'user', fr: 'Tout le monde viendrait à vélo s’il y avait un local. Donc il faut un local.', en: 'Everyone would cycle in if there were a bike room. So we need a bike room.' },
    { from: 'coach', fr: 'Tu pars du principe que tout le monde habite près du bureau.', en: 'You are assuming everyone lives near the office.', warn: 'Partir du principe' },
    { from: 'user', fr: 'C’est vrai pour la plupart d’entre nous.', en: 'It is true for most of us.' },
    { from: 'coach', fr: 'Alors dis-le : c’est une prémisse, et on peut la vérifier.', en: 'Then say so: it is a premise, and it can be checked.', warn: 'La prémisse' },
    { from: 'coach', fr: 'Et de tes chiffres, tu ne peux pas conclure que tout le monde viendra : seulement que beaucoup viendraient.', en: 'And from your figures you cannot conclude that everyone will come: only that many would.', warn: 'Conclure que' },
    { from: 'user', fr: 'Donc ma conclusion va plus loin que mes prémisses.', en: 'So my conclusion goes further than my premises.' },
    { from: 'coach', fr: fr(E(1087)), en: en(E(1087)), warn: 'Valide ou vrai' },
  ],
  closing: { fr: 'Des prémisses dites, une conclusion qui en découle : un raisonnement qu’on peut discuter.', en: 'Stated premises and a conclusion that follows from them: reasoning people can discuss.' },
  audio: REC('rec-c1-12-velos'), say: REFRAME, terms: ['premisse'],
};

const A7_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a7-cartes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-raisonner',
  title: 'Le départ, l’arrivée, la forme', frSub: 'Prémisses, conclusion, validité',
  hint: 'Quatre cartes. Les deux dernières séparent la forme et le contenu.',
  audio: REC('rec-c1-12-premisses-cartes'), say: REFRAME, terms: ['premisse'],
  cards: [
    { head: 'Le point de départ', label: 'la prémisse', fr: fr(E(1080)), sub: rsOf(E(1080)),
      body: 'Les prémisses sont les propositions dont part un raisonnement. Une prémisse non vérifiée fragilise tout ce qui suit. EN: the starting points.' },
    { head: 'Ce qui en découle', label: 'conclure que, conclure à', fr: fr(E(1086)), sub: rsOf(E(1086)),
      body: 'Conclure que + indicatif ; conclure à + nom : le jury a conclu à l’absence de faute. Il s’ensuit que : soutenu. EN: conclure que, conclure à.' },
    { head: 'La forme', label: 'valide', fr: fr(E(1081)), sub: rsOf(E(1081)),
      body: 'Un raisonnement valide : si les prémisses sont vraies, la conclusion l’est forcément. La validité dit la forme. EN: validity is about form.' },
    { head: 'Le contenu', label: 'vrai', fr: fr(E(1082)), sub: rsOf(E(1082)),
      body: 'Valide, et pourtant faux : une seule prémisse fausse suffit. Vérifie donc les prémisses avant d’admirer la forme. EN: valid yet false.' },
  ],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a7-construire', layer: 'core', size: 'lg',
  title: 'Partir de, arriver à', frSub: 'Trois groupes',
  groups: [
    grp('Partir de', [
      it(PH(102), 'le mot du B2'),
      it(E(1076), 'la collocation'),
      it(E(1084), 'une prémisse qu’on ne dit pas'),
      it(PH(285), 'une prémisse contestable'),
    ], chk('« Tu pars du principe que tout le monde a une voiture. » Tu reproches à quelqu’un…',
      ['une prémisse qu’il n’a pas dite ni vérifiée', 'une conclusion trop prudente'], 0,
      'Partir du principe que : poser une prémisse, souvent sans la dire. EN: an unstated premise.')),
    grp('Arriver à', [
      it(PH(103), 'le mot du B2'),
      it(TIRER, 'la collocation du B2'),
      it(E(1077), 'en conclure que'),
      it(E(1083), 'il s’ensuit que, soutenu'),
    ], chk('« Le jury a conclu à l’absence de faute. » Après conclure à, on trouve…',
      ['un nom', 'une proposition avec que'], 0,
      'Conclure à + nom ; conclure que + proposition. EN: a noun.')),
    grp('Les mots du B2, rangés', [
      it(PH(101), 'ce qui appuie une thèse'),
      it(PH(107), 'le passage d’une idée à une autre'),
      it(PH(114), 'admis sans preuve'),
      it(PH(115), 'admis comme évident'),
    ], chk('Un postulat est…',
      ['admis sans démonstration', 'démontré à la fin'], 0,
      'On part d’un postulat ; on ne le démontre pas. EN: assumed, not proved.')),
  ],
  audio: AUDIO, say: REFRAME, terms: ['premisse'],
};

const A7_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a7-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre façons de mal conclure',
  errors: [
    { wrong: 'Le jury a conclu que l’absence de faute.', right: fr(E(1085)),
      why: 'Normal : conclure que est le plus fréquent. Mais devant un nom seul : conclure à. EN: conclure à + nom.' },
    { wrong: 'Il s’en suit que le projet coûtera plus cher que prévu.', right: fr(E(1083)),
      why: 'Normal : on entend « s’en suivre ». Le verbe s’écrit en un mot : s’ensuivre, il s’ensuit que. EN: s’ensuit.' },
    { wrong: 'Ton raisonnement est valide, donc ta conclusion est vraie.', right: 'Ton raisonnement est valide ; reste à savoir si tes prémisses sont vraies.',
      why: 'Normal : valide sonne comme « juste ». Mais la validité ne garantit pas la vérité des prémisses. EN: valid is not true.' },
    { wrong: 'Cette conclusion ne découle pas avec tes prémisses.', right: fr(E(1088)),
      why: 'Normal : on hésite sur la préposition. Découler de, comme venir de. EN: découler de.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['premisse'],
};

const A7_DICTEE: Sec<'dictation'> = {
  type: 'dictation', id: 'a7-dictee', layer: 'core',
  title: 'Écris le raisonnement que tu entends',
  itemIds: [...dicteeFor(7), PH(285)],
  audio: AUDIO, say: REFRAME, terms: ['premisse'],
};

const A7_TEXTE = dansUnTexte('a7-texte', 'Lire : une lettre de lecteur', TEXTE_A7, [
  { q: 'Quelles sont les prémisses de M. Mauduit ?', a: 'Le marché attire des centaines de visiteurs chaque semaine ; ces visiteurs viennent presque tous en voiture.' },
  { q: 'Quelle est sa conclusion ?', a: 'Il faut agrandir le parking de la place du marché.' },
  { q: 'Quelle prémisse ne dit-il pas ?', a: 'Que le parking actuel est trop petit, et que les visiteurs ne viendront pas autrement qu’en voiture.' },
  { q: 'Sa conclusion découle-t-elle de ses prémisses ?', a: 'Pas nécessairement : « nous dit-on » affaiblit la deuxième prémisse, et il faut supposer que le parking est déjà plein.' },
], 'rec-c1-12-texte-a7', ['premisse']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('La forme', 'Un raisonnement valide garantit…',
    ['que la conclusion suit des prémisses', 'que la conclusion est vraie'], 0,
    'Valide, c’est la forme ; vrai, c’est le contenu. EN: that it follows.'),
  ctl('La préposition', '« Le jury a conclu … un accident. »',
    ['à', 'que', 'de'], 0,
    'Conclure à + nom. EN: à.'),
  ctl('Le chemin', `${Cap(PERSUADER_REF)} : aller de la règle au cas, c’est…`,
    ['une déduction', 'une induction'], 0,
    `Vu à ${PERSUADER_REF}. Ici, tu juges en plus si la conclusion découle des prémisses. EN: deduction.`),
], ['premisse']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Prémisses et conclusion',
    opener: {
      line: 'Un local à vélos et une conclusion trop pressée : ici tu sépares le départ d’un raisonnement, son arrivée, sa forme et son contenu. EN: A bike room and a hasty conclusion: here you separate where reasoning starts, where it ends, its form and its content.',
      imageRef: 'lessons/vocabulaire-idees/act07.jpg',
    },
    sections: [],
    milestone: 'Tu trouves les prémisses d’un texte, même cachées, tu dis si la conclusion en découle, et tu sais qu’un raisonnement valide peut être faux. EN: You find a text’s premises, even hidden ones, say whether the conclusion follows, and know valid reasoning can be false.',
    estScreens: 38, restPoints: ['a7-construire', 'a7-dictee'],
  },
  sections: [A7_HISTOIRE, A7_CARTES, A7_CONSTRUIRE, A7_ERREURS, A7_DICTEE, A7_TEXTE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — LE SOPHISME ET SES COUSINS
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a8-ecoute', layer: 'core', hideLines: true,
  title: 'Un débat à la radio', frSub: 'Huit répliques, huit défauts',
  lines: [
    ln(E(1094)), ln(E(1095)), ln(E(1096)), ln(E(1097)),
    ln(E(1098)), ln(E(1099)), ln(E(1100)), ln(PH(294)),
  ],
  questions: [
    { q: 'Première réplique : pourquoi le remède serait-il efficace, selon la personne ?', opts: ['parce qu’il marche : elle tourne en rond', 'parce qu’une étude l’a montré'], correct: 0, why: 'Efficace et « il marche » disent la même chose : pétition de principe. EN: circular.' },
    { q: 'Deuxième réplique : pourquoi parle-t-on de cercle vicieux ?', opts: ['chaque manque entraîne l’autre', 'la personne ment', 'la phrase se contredit'], correct: 0, why: 'Pas d’emploi sans expérience, pas d’expérience sans emploi. EN: each lack feeds the other.' },
    { q: 'Cinquième réplique : combien de fois l’homme s’est-il contredit ?', opts: ['deux fois', 'une fois', 'trois fois'], correct: 0, why: 'Deux fois dans le même paragraphe. EN: twice.' },
    { q: 'Septième réplique : la femme voulait-elle tromper ?', opts: ['non, elle était de bonne foi', 'oui'], correct: 0, why: 'De bonne foi : une erreur, pas une manipulation. EN: no.' },
    { q: 'Dernière réplique : le raisonnement est-il sans défaut ?', opts: ['non, il a une faille', 'oui, il est élégant et juste'], correct: 0, why: 'Élégant, mais avec une faille logique importante. EN: it has a flaw.' },
  ],
  audio: REC('rec-c1-12-radio-sophismes'), say: REFRAME, terms: ['sophisme'],
};

const A8_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a8-cartes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-raisonner',
  title: 'Après les six sophismes', frSub: 'Plus loin que la leçon 23 du B2',
  hint: 'Quatre cartes. La première part du mot que tu connais déjà.',
  audio: REC('rec-c1-12-sophismes-cartes'), say: REFRAME, terms: ['sophisme'],
  cards: [
    { head: 'L’intention', label: 'sophisme, paralogisme', fr: fr(E(1093)), sub: rsOf(E(1093)),
      body: `Tu connais le sophisme depuis ${ARGU_REF}. Le paralogisme raisonne aussi mal, mais de bonne foi. Sans preuve de l’intention, dis une erreur de raisonnement. EN: intent separates them.` },
    { head: 'Supposer ce qu’on prouve', label: 'la pétition de principe', fr: fr(E(1094)), sub: rsOf(E(1094)),
      body: 'La conclusion est déjà cachée dans la prémisse : « efficace » et « il marche » disent la même chose. EN: begging the question.' },
    { head: 'A par B, B par A', label: 'le cercle vicieux', fr: fr(E(1095)), sub: rsOf(E(1095)),
      body: 'En logique, deux propositions qui se prouvent l’une l’autre. Dans la vie, une situation qui s’entretient elle-même. EN: a vicious circle.' },
    { head: 'L’endroit qui cède', label: 'la faille', fr: fr(E(1099)), sub: rsOf(E(1099)),
      body: 'Nommer la faille, c’est dire où le raisonnement cède : une prémisse fausse, ou une conclusion qui ne suit pas. EN: name the flaw.' },
  ],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a8-construire', layer: 'core', size: 'lg',
  title: 'Nommer le défaut', frSub: 'Trois groupes',
  groups: [
    grp('Tourner en rond', [
      it(E(1090), 'supposer ce qu’on prouve'),
      it(E(1096), 'la loi par la loi'),
      it(E(1097), 'l’argument circulaire'),
      it(TAUTOLOGIE, 'répéter sous une autre forme'),
    ], chk('« Cette loi est juste parce que c’est la loi. » Le défaut :',
      ['la conclusion est déjà dans la prémisse', 'une généralisation abusive'], 0,
      'Juste parce que c’est la loi : on suppose ce qu’on devait prouver. EN: circular.')),
    grp('Se contredire, ou non', [
      it(PH(105), 'le mot du B2'),
      it(PH(106), 'le contraire'),
      it(E(1098), 'deux fois de suite'),
      it(PH(26), 'l’âge ne fait pas le faux'),
    ], chk('« Ce n’est pas parce qu’une idée est ancienne qu’elle est fausse. » Cette phrase écarte…',
      ['un faux lien entre l’âge et la vérité', 'toutes les idées anciennes'], 0,
      'Elle refuse de conclure du vieux au faux. EN: a false link between age and truth.')),
    grp('Tromper ou se tromper', [
      it(E(1089), 'de bonne foi'),
      it(E(1092), 'l’endroit qui cède'),
      it(E(1100), 'une erreur, pas une manipulation'),
      it(PH(294), 'élégant, mais faux'),
    ], chk('Un collègue se trompe de bonne foi dans un calcul. C’est…',
      ['un paralogisme, une erreur de raisonnement', 'un sophisme'], 0,
      'De bonne foi : un paralogisme. EN: a paralogism.')),
  ],
  audio: AUDIO, say: REFRAME, terms: ['sophisme'],
};

const A8_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a8-piege', layer: 'core', swipe: true,
  title: 'Six phrases à redresser', frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Nomme le défaut, pas l’intention',
    body: 'Pétition de principe : la conclusion est dans la prémisse. Cercle vicieux : chacun prouve l’autre. Sophisme : une erreur voulue. Sans preuve de l’intention, dis plutôt une erreur de raisonnement. EN: name the flaw; claim intent only with proof.',
  },
  cards: [
    trap(E(1094), 'pétition de principe', 'Ce remède est efficace puisqu’il marche : c’est une pétition.', 'Une pétition se signe ; le défaut logique s’appelle une pétition de principe. EN: begging the question.'),
    trap(E(1100), 'accuser trop vite', 'Elle était de bonne foi : c’était un sophisme.', 'De bonne foi, c’est une erreur, un paralogisme : le sophisme veut tromper. EN: not a sophism.'),
    trap(E(1095), 'vicieux ou vertueux', 'Pas d’emploi sans expérience, pas d’expérience sans emploi : c’est un cercle vertueux.', 'Un cercle vertueux améliore ; celui-ci enferme : il est vicieux. EN: vicious.'),
    trap(E(1098), 'contredire', 'Il s’est contredi deux fois dans le même paragraphe.', 'Le participe de contredire est contredit, comme dit. EN: contredit.'),
    trap(E(1099), 'suivre de', 'La faille, c’est que la conclusion ne suit pas aux prémisses.', 'Une conclusion suit des prémisses, ou découle des prémisses. EN: suit des.'),
    trap(E(1097), 'supposer, prouver', 'Ton argument prouve déjà ce qu’il suppose.', 'C’est l’inverse : il suppose ce qu’il devrait prouver. EN: assumes what it should prove.'),
  ],
  drill: [
    { promptSay: 'Supposer ce qu’on veut prouver : une … de principe.', opts: ['pétition', 'faille'], correct: 0 },
    { promptSay: 'Un raisonnement faux fait de bonne foi : un … .', opts: ['paralogisme', 'sophisme'], correct: 0 },
    { promptSay: 'Un raisonnement faux fait pour tromper : un … .', opts: ['sophisme', 'paralogisme'], correct: 0 },
    { promptSay: 'Pas d’emploi, pas d’expérience : un cercle … .', opts: ['vicieux', 'vertueux'], correct: 0 },
    { promptSay: 'Il s’est … deux fois.', opts: ['contredit', 'contredi'], correct: 0 },
    { promptSay: 'La conclusion ne suit pas … prémisses.', opts: ['des', 'aux'], correct: 0 },
    { promptSay: 'Répéter la même chose sous une autre forme : une … .', opts: ['tautologie', 'contradiction'], correct: 0 },
    { promptSay: 'L’endroit où le raisonnement cède : la … .', opts: ['faille', 'cohérence'], correct: 0 },
  ],
  steps: STEPS('Nomme le défaut, pas l’intention', 'Six phrases à redresser'),
  audio: REC('rec-c1-12-piege-sophismes'), say: REFRAME, terms: ['sophisme'],
};

const A8_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a8-exemples', layer: 'core',
  title: 'Quatre défauts, quatre phrases', frSub: 'Du B2 et de cette leçon',
  examples: [
    ex(E(1091), 'deux sens : logique, et vie courante'),
    ex(E(1096), 'tourner en rond'),
    ex(B223_SOPHISME, `${Cap(ARGU_REF)} : le mot, déjà connu`),
    ex(E(1092), 'nommer l’endroit précis'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['sophisme'],
};

const A8_TEXTE = dansUnTexte('a8-texte', 'Lire : un prospectus', TEXTE_A8, [
  { q: 'Quelle phrase est une pétition de principe ?', a: '« La meilleure méthode… parce qu’aucune autre méthode n’est aussi bonne » : la raison répète la thèse.' },
  { q: 'Où est le cercle vicieux ?', a: 'Les élèves réussissent parce qu’ils sont motivés, et sont motivés parce qu’ils réussissent : chaque idée prouve l’autre.' },
  { q: 'Que cache le chiffre de 94 % ?', a: 'On n’a interrogé que les élèves réinscrits, donc déjà satisfaits : l’échantillon est choisi d’avance.' },
  { q: 'Sophisme ou paralogisme ?', a: 'Plutôt un sophisme, puisque le prospectus veut convaincre ; mais l’intention ne se prouve pas : « des erreurs de raisonnement » reste le plus sûr.' },
], 'rec-c1-12-texte-a8', ['sophisme']);

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('L’intention', 'Un paralogisme est…',
    ['une erreur de raisonnement faite de bonne foi', 'une erreur voulue pour tromper'], 0,
    'De bonne foi : un paralogisme. EN: in good faith.'),
  ctl('Le cercle', 'Prouver A par B, puis B par A, c’est…',
    ['un cercle vicieux', 'une tautologie', 'une contradiction'], 0,
    'Chacun prouve l’autre : on tourne en rond. EN: a vicious circle.'),
  ctl('La prudence', 'Tu ne connais pas l’intention de l’auteur. Tu dis…',
    ['une erreur de raisonnement', 'un sophisme'], 0,
    'Sans preuve de l’intention, nomme le défaut. EN: a reasoning error.'),
], ['sophisme']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Le sophisme et ses cousins',
    opener: {
      line: 'Un débat à la radio qui tourne en rond : ici tu nommes précisément le défaut d’un raisonnement, sans accuser qui que ce soit de tromper. EN: A radio debate going round in circles: here you name a reasoning flaw precisely, without accusing anyone of deceit.',
      imageRef: 'lessons/vocabulaire-idees/act08.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais une pétition de principe, un cercle vicieux, une contradiction et une faille, et tu ne parles de sophisme que si l’intention est claire. EN: You recognise begging the question, a vicious circle, a contradiction and a flaw, and call it a sophism only when intent is clear.',
    estScreens: 40, restPoints: ['a8-construire', 'a8-piege'],
  },
  sections: [A8_ECOUTE, A8_CARTES, A8_CONSTRUIRE, A8_PIEGE, A8_EXEMPLES, A8_TEXTE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — A PRIORI, A POSTERIORI
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_HISTOIRE: Sec<'story'> = {
  type: 'story', id: 'a9-histoire', layer: 'core',
  title: 'L’annonce de la prochaine soirée', frSub: 'Deux sens savants, deux sens courants',
  setting: 'Hugo et Mireille préparent l’annonce de la prochaine soirée Oblique, à une table du café.',
  bubbles: [
    { from: 'narrator', fr: 'Mireille relit le brouillon sur son téléphone. Hugo prend des notes.', en: 'Mireille rereads the draft on her phone. Hugo takes notes.' },
    { from: 'user', fr: fr(E(1104)), en: en(E(1104)), warn: 'A priori : en principe' },
    { from: 'coach', fr: 'Pour le thème, attention : certains ont des a priori sur la philosophie. Trop abstraite, disent-ils.', en: 'For the theme, be careful: some people have preconceptions about philosophy. Too abstract, they say.', warn: 'Des a priori' },
    { from: 'user', fr: 'Alors prenons un thème concret : le hasard, par exemple.', en: 'Then let us take a concrete theme: chance, for example.' },
    { from: 'coach', fr: 'Bonne idée. On pourra partir d’un exemple simple, comme deux et deux font quatre.', en: 'Good idea. We could start from a simple example, like two and two make four.' },
    { from: 'user', fr: fr(E(1106)), en: en(E(1106)), warn: 'A priori : sans l’expérience' },
    { from: 'coach', fr: fr(E(1107)), en: en(E(1107)), warn: 'A posteriori' },
  ],
  closing: { fr: 'A priori, a posteriori : deux sens savants, deux sens courants. Lis le contexte.', en: 'A priori, a posteriori: two learned senses, two everyday ones. Read the context.' },
  audio: REC('rec-c1-12-annonce'), say: REFRAME, terms: ['apriori'],
};

const A9_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a9-table', layer: 'core', sheetId: 'sheet-savoir',
  title: 'Six emplois de deux locutions latines',
  cols: ['Emploi', 'Sens', 'Registre'],
  rows: [
    { cells: ['a priori (adverbe)', 'à première vue, en principe', 'courant'], say: fr(E(1104)),
      detail: { title: 'A priori, en principe', body: 'Dans un courriel ou une réunion : sauf changement, à première vue. EN: in principle.', say: fr(E(1111)) } },
    { cells: ['un a priori (nom)', 'un préjugé', 'courant'], say: fr(E(1105)),
      detail: { title: 'Un a priori', body: 'Une idée toute faite, avant de connaître. Dans l’orthographe traditionnelle, le nom reste invariable : des a priori. EN: a preconception.', say: fr(E(1101)) } },
    { cells: ['aucun a priori', 'aucun préjugé', 'courant'], say: fr(E(1110)),
      detail: { title: 'Sans a priori', body: 'Tu n’as pas d’opinion faite d’avance : tu jugeras sur pièces. EN: no preconception.', say: fr(E(1110)) } },
    { cells: ['a priori (philosophie)', 'sans l’expérience', 'soutenu'], say: fr(E(1106)),
      detail: { title: 'Une connaissance a priori', body: 'Elle ne dépend pas de l’expérience : on la tire du raisonnement seul. EN: independent of experience.', say: fr(E(1103)) } },
    { cells: ['a posteriori (philosophie)', 'à partir de l’expérience', 'soutenu'], say: fr(E(1107)),
      detail: { title: 'Une connaissance a posteriori', body: 'Elle vient de l’expérience : il faut observer, mesurer, essayer. EN: drawn from experience.', say: fr(E(1107)) } },
    { cells: ['a posteriori (adverbe)', 'après coup', 'courant'], say: fr(E(1108)),
      detail: { title: 'A posteriori, après coup', body: 'Une fois la chose faite : on se justifie a posteriori. EN: after the fact.', say: fr(E(1102)) } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['apriori'],
};

const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a9-construire', layer: 'core', size: 'lg',
  title: 'Avant, après, à première vue', frSub: 'Trois groupes',
  groups: [
    grp('Avant l’expérience', [
      it(E(1103), 'le sens savant'),
      it(E(1106), 'sans rien mesurer'),
      it(PH(131), 'la raison avant l’expérience'),
      it(E(1109), 'la règle'),
    ], chk('« On sait a priori que deux et deux font quatre. » Pourquoi a priori ?',
      ['on le sait sans rien mesurer', 'on l’a vérifié souvent'], 0,
      'Aucune expérience n’est nécessaire : a priori. EN: without measuring.')),
    grp('À partir de l’expérience, ou après coup', [
      it(E(1102), 'après coup'),
      it(E(1107), 'par l’expérience'),
      it(PH(130), 'tout vient de l’expérience'),
      it(E(1108), 'une fois la décision prise'),
    ], chk('« Il a trouvé ses raisons a posteriori. » Il les a trouvées…',
      ['après avoir décidé', 'avant de décider'], 0,
      'A posteriori, au sens courant : après coup. EN: after deciding.')),
    grp('Le sens de tous les jours', [
      it(E(1101), 'des préjugés'),
      it(E(1104), 'en principe'),
      it(E(1111), 'à première vue'),
      it(PH(128), 'ce qu’on voit d’abord'),
    ], chk('« A priori, la réunion est maintenue. » Ici, a priori veut dire…',
      ['en principe, sauf changement', 'sans expérience'], 0,
      'Le sens courant : à première vue, en principe. EN: in principle.')),
  ],
  audio: AUDIO, say: REFRAME, terms: ['apriori'],
};

const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a9-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre confusions entre avant et après',
  errors: [
    { wrong: 'On sait a posteriori que deux et deux font quatre, sans rien mesurer.', right: fr(E(1106)),
      why: 'Normal : les deux locutions sonnent aussi savantes. Mais sans rien mesurer, sans expérience : a priori. EN: a priori.' },
    { wrong: 'Le point d’ébullition de l’eau, on le connaît a priori : par l’expérience.', right: fr(E(1107)),
      why: 'Normal : a priori est la plus connue des deux. Par l’expérience : a posteriori. EN: a posteriori.' },
    { wrong: 'Il a trouvé ses raisons a priori, une fois la décision prise.', right: fr(E(1108)),
      why: 'Normal : on retient a priori comme « au début ». Mais une fois la décision prise, c’est après coup : a posteriori. EN: after the fact.' },
    { wrong: 'A priori veut toujours dire « avant l’expérience ».', right: 'A priori veut souvent dire « à première vue ».',
      why: 'Normal : c’est le sens des cours de philosophie. Dans un courriel ou une réunion, a priori veut presque toujours dire « en principe ». EN: the everyday sense.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['apriori'],
};

const A9_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a9-ecoute', layer: 'core', hideLines: true,
  title: 'Huit a priori à trier', frSub: 'Écoute, puis réponds',
  lines: [
    ln(E(1104)), ln(E(1105)), ln(E(1106)), ln(E(1107)),
    ln(E(1108)), ln(E(1110)), ln(E(1111)), ln(E(1109)),
  ],
  questions: [
    { q: 'Première phrase : la réunion aura-t-elle lieu à coup sûr ?', opts: ['probablement, c’est à confirmer', 'oui, c’est certain'], correct: 0, why: 'A priori : en principe, à confirmer. EN: probably.' },
    { q: 'Deuxième phrase : que reproche-t-on à cet homme ?', opts: ['des préjugés', 'un manque d’expérience'], correct: 0, why: 'Des a priori : des idées toutes faites. EN: preconceptions.' },
    { q: 'Quatrième phrase : comment connaît-on le point d’ébullition de l’eau ?', opts: ['par l’expérience', 'par le raisonnement seul'], correct: 0, why: 'A posteriori : par l’expérience. EN: from experience.' },
    { q: 'Cinquième phrase : quand a-t-il trouvé ses raisons ?', opts: ['après la décision', 'avant la décision'], correct: 0, why: 'A posteriori, après coup. EN: after.' },
    { q: 'Septième phrase : le chiffre est-il vraiment énorme ?', opts: ['on ne sait pas encore : c’est une première impression', 'oui, c’est vérifié'], correct: 0, why: 'À première vue : une impression, rien de plus. EN: a first impression.' },
  ],
  audio: REC('rec-c1-12-apriori-ecoute'), say: REFRAME, terms: ['apriori'],
};

const A9_TEXTE = dansUnTexte('a9-texte', 'Lire : un courriel d’équipe', TEXTE_A9, [
  { q: 'Que veut dire le premier « a priori » ?', a: 'En principe, à première vue : l’atelier est maintenu, sauf changement.' },
  { q: 'Et « des a priori contre lui » ?', a: 'Des préjugés : des idées toutes faites sur le logiciel, sans l’avoir ouvert.' },
  { q: 'Pourquoi Hugo écrit-il « a posteriori » ?', a: 'On ne saura qu’après l’essai, par l’expérience, si le logiciel fait gagner du temps.' },
  { q: 'Hugo demande-t-il qu’on juge a priori ?', a: 'Non : il demande d’essayer avant de juger, donc de juger a posteriori.' },
], 'rec-c1-12-texte-a9', ['apriori']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Le courriel', '« A priori, je serai là jeudi. » A priori veut dire…',
    ['en principe', 'sans expérience', 'après coup'], 0,
    'Le sens courant : en principe. EN: in principle.'),
  ctl('Le nom', '« Il a des a priori » veut dire…',
    ['il a des préjugés', 'il a de l’expérience'], 0,
    'Un a priori : une idée toute faite. EN: preconceptions.'),
  ctl('Le sens savant', 'Une connaissance a posteriori vient…',
    ['de l’expérience', 'du seul raisonnement'], 0,
    'A posteriori : à partir de l’expérience. EN: from experience.'),
], ['apriori']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'A priori, a posteriori',
    opener: {
      line: 'Une annonce, un courriel, un cours de philosophie : ici tu lis a priori et a posteriori dans leurs quatre sens. EN: A notice, an email, a philosophy class: here you read a priori and a posteriori in their four senses.',
      imageRef: 'lessons/vocabulaire-idees/act09.jpg',
    },
    sections: [],
    milestone: 'Tu distingues a priori et a posteriori au sens savant, et tu reconnais « en principe », « un préjugé » et « après coup » dans la vie courante. EN: You tell the learned senses apart and recognise the everyday ones.',
    estScreens: 38, restPoints: ['a9-table', 'a9-erreurs'],
  },
  sections: [A9_HISTOIRE, A9_TABLE, A9_CONSTRUIRE, A9_ERREURS, A9_ECOUTE, A9_TEXTE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — DÉFINIR ET DISTINGUER
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a10-lecture', layer: 'core', questionsInModal: true,
  title: 'Solitude et isolement', frSub: 'Lis, et regarde ce que la distinction change',
  text: LECTURE_SOLITUDE,
  glossary: [
    { word: 'aînés', en: 'seniors, the elderly', note: 'Les personnes âgées ; le mot est courant au Québec.' },
    { word: 'jeu de mots', en: 'play on words', note: 'Ici : une simple question de vocabulaire, sans conséquence.' },
  ],
  questions: [
    { q: 'Global : de quoi parle cet article ?', a: 'De la différence entre la solitude et l’isolement, et de ce qu’elle change pour un service municipal.' },
    { q: 'Détail : comment l’article définit-il chacun des deux mots ?', a: 'La solitude est un état, parfois choisi ; l’isolement est une situation, le plus souvent subie : on est coupé des autres.' },
    { q: 'Détail : quel exemple montre que les deux ne vont pas toujours ensemble ?', a: 'On peut vivre seul sans être isolé, et se sentir isolé au milieu d’une famille.' },
    { q: 'Inférence : pourquoi le service des aînés a-t-il changé ce qu’il compte ?', a: 'Compter les personnes qui vivent seules mesurait la solitude ; compter celles qui n’ont parlé à personne depuis une semaine mesure l’isolement, le vrai problème.' },
    { q: 'Position : l’auteur pense-t-il que la distinction est un détail ?', a: 'Non : « la distinction n’est pas un jeu de mots » ; elle change ce qu’on fait et pour qui.' },
  ],
  audio: REC('rec-c1-12-solitude'), say: REFRAME, terms: ['definir'],
};

const A10_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a10-cartes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-definir',
  title: 'Les verbes de la distinction', frSub: 'Séparer, mêler, situer',
  hint: 'Quatre cartes. Regarde les prépositions.',
  audio: REC('rec-c1-12-definir-cartes'), say: REFRAME, terms: ['definir'],
  cards: [
    { head: 'Séparer deux notions', label: 'distinguer de', fr: fr(E(1123)), sub: rsOf(E(1123)),
      body: 'On établit, on fait ou on marque une distinction entre deux notions ; on distingue A de B. EN: to draw a distinction.' },
    { head: 'Les mêler', label: 'confondre', fr: fr(E(1116)), sub: rsOf(E(1116)),
      body: 'On confond A et B, ou A avec B. Jamais « confondre entre ». EN: to confuse A and B, or A with B.' },
    { head: 'Strict ou large', label: 'au sens strict', fr: fr(E(1117)), sub: rsOf(E(1117)),
      body: 'Au sens strict : la définition exacte. Au sens large : le mot étendu aux cas voisins. Annonce lequel tu prends. EN: strict or broad.' },
    { head: 'Le domaine', label: 'relever de', fr: fr(E(1118)), sub: rsOf(E(1118)),
      body: 'Relever de : appartenir à un domaine. Une question relève de la morale, du droit, de la science. EN: to be a matter of.' },
  ],
};

const A10_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a10-construire', layer: 'core', size: 'lg',
  title: 'Définir, distinguer, opposer', frSub: 'Trois groupes',
  groups: [
    grp('Définir', [
      it(E(1121), 'ce que nous entendons par'),
      it(E(1119), 'par définition'),
      it(E(1114), 'la définition exacte'),
      it(E(1115), 'le sens étendu'),
    ], chk('« Par définition, un célibataire n’est pas marié. » Pour le savoir, il faut…',
      ['comprendre le mot', 'mener une enquête'], 0,
      'Par définition : le sens du mot suffit. EN: understanding the word.')),
    grp('Distinguer, opposer', [
      it(E(1112), 'établir une distinction'),
      it(E(1123), 'le fait et son interprétation'),
      it(E(1120), 'opposer A à B'),
      it(E(1113), 'confondre deux notions'),
    ], chk('On oppose la nature … la culture.',
      ['à', 'de', 'avec'], 0,
      'Opposer A à B. EN: à.')),
    grp('Des mots du B2 pour en parler', [
      it(PH(133), 'l’abstraction'),
      it(PH(124), 'le point de vue du sujet'),
      it(PH(125), 'le contraire'),
      it(PH(307), 'clarifier un concept'),
    ], chk('Clarifier un concept flou, c’est surtout…',
      ['le définir avec précision', 'l’illustrer d’une image'], 0,
      'Clarifier : rendre clair, donc définir et distinguer. EN: to define it precisely.')),
  ],
  audio: AUDIO, say: REFRAME, terms: ['definir'],
};

const A10_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a10-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre prépositions qui trahissent',
  errors: [
    { wrong: 'Il ne faut pas confondre entre la solitude et l’isolement.', right: fr(E(1116)),
      why: 'Normal : on dit bien distinguer entre deux choses. Mais confondre entre, non : confondre A et B, ou A avec B. EN: no entre.' },
    { wrong: 'Il faut distinguer le fait avec son interprétation.', right: fr(E(1123)),
      why: 'Normal : on confond A avec B, alors avec semble aller. Mais on distingue A DE B. EN: distinguer de.' },
    { wrong: 'Cette question relève à la morale, pas au droit.', right: fr(E(1118)),
      why: 'Normal : on pense à appartenir à. Mais relever de, comme dépendre de. EN: relever de.' },
    { wrong: 'On oppose souvent la nature avec la culture.', right: fr(E(1120)),
      why: 'Normal : versus se traduit mal. Opposer A à B, ou opposer A et B. EN: opposer à.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['definir'],
};

const A10_FOCUS: Sec<'focus'> = {
  type: 'focus', id: 'a10-focus', layer: 'core', sheetId: 'sheet-definir',
  title: 'Quatre gestes pour séparer deux idées',
  points: [
    'Annonce le sens que tu prends : au sens strict, au sens large. EN: say which sense you take.',
    'Dis ce que le mot n’est pas : la solitude n’est pas l’isolement. EN: say what the word is not.',
    'Donne un cas qui sépare les deux : vivre seul sans être isolé. EN: give a case that separates them.',
    'Montre ce que la distinction change : on ne compte plus les mêmes personnes. EN: show what it changes.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['definir', 'distinguer'],
};

const A10_TEXTE = dansUnTexte('a10-texte', 'Lire : le glossaire d’un musée', TEXTE_A10, [
  { q: 'Au sens large, qu’est-ce qu’une copie ?', a: 'Toute œuvre qui en reproduit une autre.' },
  { q: 'Au sens strict, qu’est-ce qui distingue la réplique de la copie ?', a: 'La réplique est faite par l’artiste ou sous sa direction ; la copie, par quelqu’un d’autre.' },
  { q: 'Qu’est-ce qui définit un faux ?', a: 'L’intention de tromper, et non la ressemblance. Le faux relève du droit.' },
  { q: 'Pourquoi une copie d’étude signée n’est-elle pas un faux ?', a: 'Elle ne cherche pas à tromper : elle est signée par l’élève.' },
], 'rec-c1-12-texte-a10', ['definir']);

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('Confondre', 'Quelle phrase est correcte ?',
    ['Il ne faut pas confondre la solitude et l’isolement.', 'Il ne faut pas confondre entre la solitude et l’isolement.'], 0,
    'Confondre A et B, sans entre. EN: no entre.'),
  ctl('Distinguer', 'On distingue le fait … son interprétation.',
    ['de', 'avec', 'à'], 0,
    'Distinguer A de B. EN: de.'),
  ctl('Au sens strict', 'Au sens strict, la tomate est…',
    ['un fruit', 'un légume'], 0,
    'Au sens strict, botanique ; en cuisine, au sens large, un légume. EN: a fruit.'),
], ['definir']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Définir et distinguer',
    opener: {
      line: 'Vivre seul, ou être isolé : ici tu apprends les verbes qui définissent, séparent et opposent deux notions. EN: Living alone, or being isolated: here you learn the verbs that define, separate and contrast two notions.',
      imageRef: 'lessons/vocabulaire-idees/act10.jpg',
    },
    sections: [],
    milestone: 'Tu distingues A de B, tu confonds A et B sans entre, tu annonces au sens strict ou au sens large, et tu montres ce qu’une distinction change. EN: You use the verbs of distinction with the right prepositions and show what a distinction changes.',
    estScreens: 38, restPoints: ['a10-construire', 'a10-focus'],
  },
  sections: [A10_LECTURE, A10_CARTES, A10_CONSTRUIRE, A10_ERREURS, A10_FOCUS, A10_TEXTE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 — PROUVER, CONFIRMER, RÉFUTER
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_HISTOIRE: Sec<'story'> = {
  type: 'story', id: 'a11-histoire', layer: 'core',
  title: 'Une rumeur à la cafétéria', frSub: 'Ce que la preuve permet',
  setting: 'Lundi matin, une rumeur court à la cafétéria : l’entreprise va déménager à Laval. Édouard en est sûr ; Soraya demande des preuves.',
  bubbles: [
    { from: 'narrator', fr: 'Édouard pose son plateau à côté de Soraya. Il baisse la voix.', en: 'Édouard puts his tray down next to Soraya. He lowers his voice.' },
    { from: 'user', fr: 'C’est une évidence : on a vu des déménageurs hier.', en: 'It is obvious: people saw movers yesterday.' },
    { from: 'coach', fr: 'Une évidence, non. Un indice, peut-être. Il faudrait d’autres éléments.', en: 'Obvious, no. A clue, maybe. We would need other evidence.', warn: 'Une évidence' },
    { from: 'user', fr: 'La direction a démenti, mais elle cache sûrement quelque chose.', en: 'Management has denied it, but they are surely hiding something.' },
    { from: 'coach', fr: 'Un démenti ne prouve rien à lui seul. Ton soupçon non plus.', en: 'A denial proves nothing on its own. Nor does your suspicion.', warn: 'Le démenti' },
    { from: 'user', fr: 'Marc, du service informatique, a vu les mêmes déménageurs.', en: 'Marc, from IT, saw the same movers.' },
    { from: 'coach', fr: 'Cela corrobore ce que tu as vu. Cela ne confirme pas pour autant le déménagement.', en: 'That corroborates what you saw. It does not confirm the move for all that.', warn: 'Corroborer' },
    { from: 'coach', fr: 'Ils refont peut-être simplement les bureaux du troisième. Une visite du troisième suffirait à infirmer ta rumeur.', en: 'Maybe they are just redoing the third-floor offices. One visit to the third floor would be enough to disprove your rumour.', warn: 'Infirmer' },
  ],
  closing: { fr: 'Corroborer, confirmer, infirmer, réfuter : chaque verbe dit ce que la preuve permet.', en: 'Corroborate, confirm, disprove, refute: each verb says what the evidence allows.' },
  audio: REC('rec-c1-12-rumeur'), say: REFRAME, terms: ['preuve'],
};

const A11_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a11-table', layer: 'core', sheetId: 'sheet-definir',
  title: 'Six verbes de la preuve',
  cols: ['Verbe', 'Ce qu’il fait', 'Il faut'],
  rows: [
    { cells: ['prouver, démontrer', 'établir que c’est vrai', 'des preuves, un raisonnement'], say: fr(E(1136)),
      detail: { title: 'Prouver, démontrer', body: 'Prouver : établir que c’est vrai. Démontrer : le prouver par un raisonnement rigoureux. EN: to prove, to demonstrate.', say: fr(E(1124)) } },
    { cells: ['confirmer', 'renforcer une hypothèse', 'un fait qui va dans son sens'], say: fr(E(1128)),
      detail: { title: 'Confirmer', body: 'Un résultat confirme une hypothèse quand il va dans son sens. Il ne la prouve pas toujours. EN: to confirm.', say: fr(E(1128)) } },
    { cells: ['infirmer', 'montrer qu’elle est fausse', 'un fait contraire'], say: fr(E(1129)),
      detail: { title: 'Infirmer', body: 'Le contraire de confirmer. Une seule observation contraire peut suffire. Rien à voir avec infirme. EN: to disprove.', say: fr(E(1125)) } },
    { cells: ['corroborer', 'appuyer par un autre élément', 'deux sources indépendantes'], say: fr(E(1130)),
      detail: { title: 'Corroborer', body: 'Un second témoignage, un document, venus d’ailleurs, appuient le premier. EN: to corroborate.', say: fr(E(1126)) } },
    { cells: ['réfuter', 'montrer qu’un argument est faux', 'des preuves à l’appui'], say: fr(E(1131)),
      detail: { title: 'Réfuter', body: 'Réfuter demande de montrer : point par point, preuves à l’appui. EN: to refute.', say: fr(E(1127)) } },
    { cells: ['nier, démentir', 'dire que c’est faux', 'rien d’autre que sa parole'], say: fr(E(1132)),
      detail: { title: 'Nier, démentir', body: 'Nier : dire non. Démentir : déclarer fausse une information, souvent officiellement. Ni l’un ni l’autre ne prouve. EN: to deny.', say: fr(E(1137)) } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['preuve'],
};

const A11_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a11-construire', layer: 'core', size: 'lg',
  title: 'Établir, défaire, attendre', frSub: 'Trois groupes',
  groups: [
    grp('Établir', [
      it(E(1124), 'apporter la preuve'),
      it(PH(108), 'la démonstration'),
      it(E(1128), 'confirmer'),
      it(E(1126), 'corroborer'),
    ], chk('Deux témoins indépendants disent la même chose. Leurs témoignages…',
      ['se corroborent', 'se réfutent'], 0,
      'Ils s’appuient l’un l’autre : ils se corroborent. EN: corroborate each other.')),
    grp('Défaire', [
      it(E(1125), 'infirmer'),
      it(E(1127), 'réfuter'),
      it(PH(109), 'la réfutation'),
      it(E(1132), 'nier n’est pas réfuter'),
    ], chk('« Il a nié les faits, mais il ne les a pas réfutés. » Il a…',
      ['dit non, sans montrer que c’était faux', 'montré que c’était faux'], 0,
      'Nier : dire non ; réfuter : montrer. EN: denied, did not refute.')),
    grp('Ce qui reste à prouver', [
      it(PH(116), 'l’hypothèse'),
      it(E(1134), 'les preuves manquent'),
      it(PH(286), 'rien ne prouve que'),
      it(PH(319), 'il n’est pas certain que'),
    ], chk('« Les preuves manquent encore pour conclure. » En anglais :',
      ['there is not enough evidence yet', 'it is not obvious yet'], 0,
      'Evidence : des preuves. EN: evidence.')),
  ],
  audio: AUDIO, say: REFRAME, terms: ['preuve'],
};

const A11_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a11-piege', layer: 'core', swipe: true,
  title: 'Six phrases à redresser', frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Une évidence n’est pas evidence',
    body: 'Une évidence, c’est ce qui saute aux yeux ; evidence, ce sont des preuves. Nier n’est pas réfuter, et infirmer n’a rien à voir avec infirme. EN: une évidence is what is obvious; evidence is des preuves.',
  },
  cards: [
    trap(E(1134), 'evidence', 'Les évidences manquent encore pour conclure.', 'Evidence se dit des preuves, ou des éléments de preuve. EN: des preuves.'),
    trap(E(1132), 'nier ou réfuter', 'Il a réfuté les faits en disant simplement non.', 'Dire non, c’est nier ; réfuter demande de montrer. EN: nier.'),
    trap(E(1129), 'infirmer', 'Une seule observation contraire suffit à confirmer cette règle.', 'Une observation contraire ne confirme pas : elle infirme. EN: infirmer.'),
    trap(E(1130), 'corroborer', 'Deux témoins indépendants collaborent sa version.', 'Collaborer, c’est travailler ensemble ; appuyer une version, c’est la corroborer. EN: corroborer.'),
    trap(E(1137), 'le démenti', 'La démentie de la mairie n’a convaincu personne.', 'Le nom est masculin, sans e final : un démenti. EN: le démenti.'),
    trap(E(1133), 'une évidence', 'Il est évidence qu’il faut agir vite.', 'Il est évident que, ou c’est une évidence. EN: il est évident.'),
  ],
  drill: [
    { promptSay: 'Les … manquent encore pour conclure.', opts: ['preuves', 'évidences'], correct: 0 },
    { promptSay: 'Il a … les faits, sans rien montrer.', opts: ['nié', 'réfuté'], correct: 0 },
    { promptSay: 'Une observation contraire suffit à … la règle.', opts: ['infirmer', 'confirmer'], correct: 0 },
    { promptSay: 'Deux témoins … sa version.', opts: ['corroborent', 'collaborent'], correct: 0 },
    { promptSay: 'Le … de la mairie n’a convaincu personne.', opts: ['démenti', 'démentie'], correct: 0 },
    { promptSay: 'Elle a … l’objection point par point.', opts: ['réfuté', 'nié'], correct: 0 },
    { promptSay: 'Les nouvelles mesures … l’hypothèse : elles vont dans son sens.', opts: ['confirment', 'infirment'], correct: 0 },
    { promptSay: 'Qu’il faille agir vite, c’est une … pour tout le monde.', opts: ['évidence', 'preuve'], correct: 0 },
  ],
  steps: STEPS('Une évidence n’est pas evidence', 'Six phrases à redresser'),
  audio: REC('rec-c1-12-piege-preuve'), say: REFRAME, terms: ['preuve'],
};

const A11_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a11-exemples', layer: 'core',
  title: 'Quatre phrases de preuve', frSub: 'Ce que chaque verbe permet',
  examples: [
    ex(E(1131), 'réfuter : montrer, point par point'),
    ex(E(1135), 'une évidence : sans preuve'),
    ex(E(1136), 'démontrer : par le raisonnement'),
    ex(E(1137), 'un démenti : une parole, pas une preuve'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['preuve'],
};

const A11_TEXTE = dansUnTexte('a11-texte', 'Lire : une dépêche', TEXTE_A11, [
  { q: 'Que disait la rumeur ?', a: 'Que la statue en bronze du héron, sur la passerelle des Moulins, avait disparu dans la nuit, c’est-à-dire qu’on l’avait volée.' },
  { q: 'Qu’est-ce que le démenti de la mairie ?', a: 'Une déclaration officielle disant que c’est faux : la statue a été déposée pour restauration.' },
  { q: 'Quels éléments corroborent la version de la mairie ?', a: 'Deux employés interrogés séparément, et le bon de commande de l’atelier, consulté par le journal.' },
  { q: 'La piste du vol est-elle seulement niée ?', a: 'Non : elle est infirmée par des preuves indépendantes, pas seulement par le démenti.' },
], 'rec-c1-12-texte-a11', ['preuve']);

const A11_CHECK = actCheck('a11-check', 'Le point : acte 11', [
  ctl('Le faux ami', '« There is no evidence. »',
    ['Il n’y a aucune preuve.', 'Il n’y a aucune évidence.'], 0,
    'Evidence : des preuves. EN: no proof.'),
  ctl('Défaire', 'Montrer qu’une hypothèse est fausse, c’est…',
    ['l’infirmer', 'la confirmer', 'la corroborer'], 0,
    'Infirmer : le contraire de confirmer. EN: to disprove.'),
  ctl('Dire non', 'Il a dit « c’est faux », sans rien montrer. Il a…',
    ['nié', 'réfuté'], 0,
    'Nier : dire non ; réfuter : montrer. EN: denied.'),
], ['preuve']);

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Prouver, confirmer, réfuter',
    opener: {
      line: 'Une rumeur, un démenti, deux témoins : ici tu dis exactement ce que chaque élément prouve, et ce qu’il ne prouve pas. EN: A rumour, a denial, two witnesses: here you say exactly what each piece of evidence proves, and what it does not.',
      imageRef: 'lessons/vocabulaire-idees/act11.jpg',
    },
    sections: [],
    milestone: 'Tu sépares prouver, confirmer, corroborer, infirmer, réfuter et nier, et tu ne traduis plus evidence par évidence. EN: You keep the verbs of proof apart and no longer translate evidence as évidence.',
    estScreens: 40, restPoints: ['a11-table', 'a11-piege'],
  },
  sections: [A11_HISTOIRE, A11_TABLE, A11_CONSTRUIRE, A11_PIEGE, A11_EXEMPLES, A11_TEXTE, A11_CHECK],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 12 — TA RÉPONSE
 * ══════════════════════════════════════════════════════════════════════════ */

const A12_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a12-lecture', layer: 'core', questionsInModal: true,
  title: 'La réponse que tu vas imiter', frSub: 'Fatou répond à Lucien',
  text: LECTURE_MODELE,
  glossary: [
    { word: 'Admettons', en: 'Let us grant', note: 'On accepte une idée pour la suite du raisonnement, sans la tenir pour prouvée.' },
    { word: 'au mieux', en: 'at best', note: 'Dans le cas le plus favorable.' },
  ],
  questions: [
    { q: 'Global : que fait Fatou dans sa réponse ?', a: 'Elle nomme trois confusions du message de Lucien, montre chaque distinction, puis lui propose une thèse reformulée.' },
    { q: 'Détail : quelles sont les trois distinctions ?', a: 'Corrélation et cause ; croire et savoir ; nécessaire et suffisant.' },
    { q: 'Détail : quelle autre explication propose-t-elle pour les meilleures notes ?', a: 'Les familles où l’on prend un petit-déjeuner sont peut-être aussi celles où l’on se couche tôt.' },
    { q: 'Inférence : pourquoi écrit-elle « peut-être nécessaire pour certains enfants » ?', a: 'Elle nuance : un bon repas peut compter pour certains, mais il ne suffit pour personne. Elle ne dit pas plus que ce qu’elle sait.' },
    { q: 'Position : quel ton choisit-elle, et à quoi le vois-tu ?', a: 'Bienveillant et précis : elle remercie Lucien, ne se moque pas, dit « ce n’est pas faux » et finit sur une question qu’on peut étudier.' },
  ],
  audio: REC('rec-c1-12-modele'), say: REFRAME, terms: ['distinguer'],
};

const A12_PLAN: Sec<'steps'> = {
  type: 'steps', id: 'a12-plan', layer: 'core', sheetId: 'sheet-reponse',
  title: 'Cinq étapes avant d’écrire', frSub: 'Nommer, montrer, reformuler',
  steps: [
    'Remercie, et dis en une phrase que le message pose une vraie question. EN: thank the writer and grant the question.',
    'Repère les mots qui glissent : chaque fois, quelles deux idées voisines sont mêlées ? EN: find the neighbouring ideas that are mixed up.',
    'Pour chaque confusion : nomme-la, donne la distinction, et un cas qui la montre. EN: name it, give the distinction and a case.',
    'Dis ce que chaque distinction change à la conclusion : fausse, ou seulement insuffisante. EN: say what it changes in the conclusion.',
    'Termine par la thèse reformulée, avec le mot juste, puis une formule amicale. EN: end with the restated thesis.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['distinguer'],
};

const A12_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a12-usages', layer: 'core', sheetId: 'sheet-reponse',
  title: 'Quatre phrases que toute bonne réponse contient',
  cases: [
    uc('Tu ouvres avec bienveillance', E(1145)),
    uc('Tu nommes la confusion', E(1138)),
    uc('Tu dis ce que la distinction change', E(1142)),
    uc('Tu annonces la thèse reformulée', E(1141)),
  ],
  audio: AUDIO, say: REFRAME, terms: ['distinguer'],
};

const A12_SCENARIO: Sec<'scenario'> = {
  type: 'scenario', id: 'a12-scenario', layer: 'core',
  title: 'À la radio, Les Idées en marche', frSub: 'Six tours, à voix haute',
  setting: 'Tu appelles l’émission de Radio Rivière-Haute, qui débat ce soir de la réussite. Un auditeur vient de dire que le travail ne sert à rien. Nomme ce qu’il confond, et propose une thèse plus juste.',
  turns: [
    {
      ai: 'Bonsoir, vous êtes en direct. Vous vouliez réagir à notre débat sur la réussite ?', en: 'Good evening, you are on air. You wanted to respond to our debate on success?',
      user: 'Oui. J’ai l’impression qu’on confond deux idées : expliquer une réussite et la justifier.',
      userEn: 'Yes. I think two ideas are being mixed up: explaining a success and justifying it. (Naming the confusion.)',
      alts: [
        { fr: 'Oui, merci. Il me semble que deux mots voisins se mélangent dans ce débat.', en: 'Yes, thank you. It seems to me two neighbouring words are getting mixed up in this debate. (Announcing the distinction.)' },
        { fr: 'Oui. Je crois qu’on parle de deux choses différentes sans le dire.', en: 'Yes. I think we are talking about two different things without saying so. (Plainer, also right.)' },
      ],
    },
    {
      ai: 'Qu’entendez-vous par là ?', en: 'What do you mean by that?',
      user: 'Expliquer une réussite, c’est en donner les causes ; la justifier, c’est dire qu’elle est méritée.',
      userEn: 'Explaining a success is giving its causes; justifying it is saying it is deserved. (The distinction itself.)',
      alts: [
        { fr: 'Les causes d’une réussite ne disent pas si elle est légitime.', en: 'The causes of a success do not say whether it is legitimate. (The same line, shorter.)' },
        { fr: 'On peut expliquer une réussite par la chance sans dire qu’elle est injuste.', en: 'You can explain a success by luck without saying it is unfair. (A case that shows it.)' },
      ],
    },
    {
      ai: 'Un auditeur disait tout à l’heure que le travail ne sert à rien, puisque son voisin a travaillé sans réussir.', en: 'A listener said earlier that work is useless, since his neighbour worked hard without succeeding.',
      user: 'Son exemple montre que le travail ne suffit pas. Il ne montre pas qu’il est inutile.',
      userEn: 'His example shows that work is not enough. It does not show that it is useless. (Necessary, not sufficient.)',
      alts: [
        { fr: 'Le travail est peut-être nécessaire, mais pas suffisant : ce n’est pas la même chose.', en: 'Work may be necessary, but not sufficient: that is not the same thing. (Naming both conditions.)' },
        { fr: 'Un cas où le travail ne suffit pas ne prouve pas qu’il ne sert à rien.', en: 'One case where work is not enough does not prove it is useless. (The conclusion does not follow.)' },
      ],
    },
    {
      ai: 'Il disait aussi qu’il le savait, parce que tous ses amis qui ont réussi ont eu de la chance.', en: 'He also said he knew it, because all his friends who succeeded were lucky.',
      user: 'Il le croit, mais il ne le sait pas : quelques amis ne font pas une preuve.',
      userEn: 'He believes it, but he does not know it: a few friends are not proof. (Croire, not savoir.)',
      alts: [
        { fr: 'C’est une conviction, pas une connaissance : son échantillon est trop petit.', en: 'It is a conviction, not knowledge: his sample is too small. (Conviction and connaissance.)' },
        { fr: 'Il généralise à partir de quelques cas ; il faudrait d’autres preuves.', en: 'He is generalising from a few cases; other evidence would be needed. (The generalisation named.)' },
      ],
    },
    {
      ai: 'Donc, selon vous, il a tort ?', en: 'So, in your view, he is wrong?',
      user: 'Pas sur tout : sa thèse est simplement trop forte pour ce qu’il avance.',
      userEn: 'Not about everything: his thesis is simply too strong for what he puts forward. (His conclusion goes beyond his premises.)',
      alts: [
        { fr: 'Il n’a pas tort de parler de chance ; il a tort d’en faire la seule cause.', en: 'He is not wrong to mention luck; he is wrong to make it the only cause. (Granting the true part.)' },
        { fr: 'Sa conclusion va plus loin que ses exemples.', en: 'His conclusion goes further than his examples. (Premises and conclusion.)' },
      ],
    },
    {
      ai: 'Que lui proposeriez-vous de dire, alors ?', en: 'What would you suggest he say, then?',
      user: '« Le travail ne suffit pas à réussir ; la chance compte aussi. » C’est moins frappant, mais plus juste.',
      userEn: '« Work is not enough to succeed; luck counts too. » It is less striking, but more accurate. (The restated thesis.)',
      alts: [
        { fr: 'Que le travail est une condition de la réussite parmi d’autres.', en: 'That work is one condition of success among others. (Restated with condition.)' },
        { fr: 'Qu’on peut expliquer une réussite par la chance sans la juger injuste pour autant.', en: 'That a success can be explained by luck without being judged unfair. (Restated with expliquer and justifier.)' },
      ],
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['distinguer', 'condition'],
};

const A12_MISSION: Sec<'task'> = {
  type: 'task', id: 'a12-mission',
  title: 'Ta réponse à Bastien', frSub: 'Mission écrite',
  brief: `Sur le blog des soirées Oblique, un lecteur, Bastien, a laissé ce message sous l’article consacré à la réussite. Mireille te demande d’y répondre au nom de l’équipe, avec bienveillance et précision. Voici son message : ${MESSAGE_BASTIEN}`,
  briefEn: 'On the soirées Oblique blog, a reader, Bastien, has left a message under the article on success. Mireille asks you to reply on behalf of the team, kindly and precisely. His message says that work is useless because his hard-working neighbour never succeeded, that he « knows » success is mostly luck because everyone around him who succeeded was lucky, that cheating is justified once you explain why someone did it, and that those who disagree must prove the opposite.',
  produce: 'Écris une réponse de 250 à 350 mots, en tutoyant Bastien. Nomme au moins trois confusions de son message ; pour chacune, montre la distinction et ce qu’elle change à sa conclusion ; termine par sa thèse reformulée. Emploie au moins cinq paires de la leçon (par exemple : nécessaire et suffisant, croire et savoir, expliquer et justifier, prémisse et conclusion, prouver et nier).',
  responseSpec: { kind: 'text', minWords: 250, maxWords: 380 },
  rubric: {
    criteria: [
      {
        key: 'tache', label: 'Réalisation de la tâche', maxPoints: 3,
        descriptors: [
          '3 : Au moins trois confusions sont nommées ; pour chacune, la distinction est donnée et son effet sur la conclusion est montré ; la thèse est reformulée à la fin. Entre 250 et 350 mots.',
          '2 : Deux confusions seulement sont vraiment traitées, ou la thèse reformulée manque, ou la longueur sort un peu des limites.',
          '1 : La réponse dit que Bastien a tort sans montrer ce qu’il confond, ou le texte est beaucoup trop court.',
        ],
      },
      {
        key: 'precision', label: 'Précision du vocabulaire des idées', maxPoints: 3,
        descriptors: [
          '3 : Au moins cinq paires de la leçon sont employées avec justesse (nécessaire et suffisant, croire et savoir, expliquer et justifier, cause et raison, prémisse et conclusion, prouver, réfuter et nier), chacune au bon endroit.',
          '2 : Les paires sont là, mais l’une est employée de travers, ou la réponse reprend une confusion qu’elle dénonce.',
          '1 : Le vocabulaire reste vague (« c’est faux », « ce n’est pas logique ») ou plusieurs paires sont confondues.',
        ],
      },
      {
        key: 'structure', label: 'Structure de la réponse', maxPoints: 2,
        descriptors: [
          '2 : La réponse avance dans l’ordre : une ouverture bienveillante, une confusion par paragraphe (nommer, montrer, dire ce que cela change), puis la thèse reformulée, avec des liens clairs.',
          '1 : Les confusions se mêlent, ou les définitions s’alignent sans dire ce qu’elles changent à la conclusion.',
        ],
      },
      {
        key: 'correction', label: 'Correction', maxPoints: 2,
        descriptors: [
          '2 : Les constructions sont justes : distinguer A de B, confondre A et B, conclure à + nom, suffire à, il suffit de, rendre compte de, il s’ensuit que.',
          '1 : Des erreurs de construction (confondre entre, distinguer avec, conclure que + nom, suffire de) gênent parfois la lecture.',
        ],
      },
      {
        key: 'registre', label: 'Registre et ton', maxPoints: 2,
        descriptors: [
          '2 : Un registre soutenu sans pédanterie, le tutoiement de Bastien, un ton bienveillant : la réponse corrige les idées, jamais la personne.',
          '1 : La réponse se moque, donne des leçons, ou passe au vous et au style administratif.',
        ],
      },
    ],
  },
  scaffold: [
    'Merci pour ton message :',
    'Tu confonds ici',
    'Or',
    'Autrement dit,',
    'Cela ne veut pas dire que',
    'Avec cette distinction,',
    'Ta thèse deviendrait alors :',
    'Au plaisir de te lire,',
  ],
  modelAnswer: 'Cher Bastien,\n\nmerci pour ton message : il pose une vraie question, mais il mélange plusieurs idées voisines, et c’est ce mélange qui te mène à ta conclusion.\n\nD’abord, tu passes du nécessaire au suffisant. Que ton voisin ait travaillé dur sans réussir montre seulement que le travail ne suffit pas ; cela ne prouve pas qu’il ne sert à rien. Il peut être une condition nécessaire sans être une condition suffisante : sans billet, on n’entre pas, mais le billet seul ne fait pas toujours entrer.\n\nEnsuite, tu écris « je sais » là où tu pourrais seulement dire « je crois ». Les gens qui ont réussi autour de toi ne forment pas un échantillon : quelques cas ne font pas une connaissance, et ta conviction, même sincère, n’est pas une preuve.\n\nTroisième confusion : tu prends l’explication pour une justification. Qu’on puisse expliquer une tricherie, en donner les causes, ne la rend pas légitime. Comprendre un geste, ce n’est pas l’approuver.\n\nEnfin, tu demandes à ceux qui ne pensent pas comme toi de prouver le contraire. Or c’est à celui qui affirme d’apporter la preuve de ce qu’il avance, et ta conclusion va bien plus loin que tes prémisses : de quelques exemples, tu tires une règle sur tout le monde.\n\nAvec ces distinctions, ta thèse devient plus juste, et plus intéressante : « Le travail ne suffit pas à réussir ; la chance compte aussi, et une réussite peut s’expliquer sans se justifier. » Ce n’est pas faux ; c’est seulement moins frappant. Mais c’est une thèse qu’on peut discuter, chiffres à l’appui.\n\nAu plaisir de te lire,\nCamille, pour l’équipe des soirées Oblique\n\nLes repères de la correctrice (hors décompte) :\n1. Tâche : quatre confusions nommées (nécessaire et suffisant, croire et savoir, expliquer et justifier, la charge de la preuve et une conclusion trop large), chacune avec ce qu’elle change, puis la thèse reformulée.\n2. Précision : condition nécessaire, suffisante, connaissance, conviction, preuve, expliquer, justifier, légitime, prémisses, conclusion.\n3. Structure : une ouverture, une confusion par paragraphe, une thèse reformulée.\n4. Correction : ne suffit pas, montre que, apporter la preuve de, tirer une règle de.\n5. Registre : tu, bienveillant, aucune moquerie.',
  modelAnswerEn: 'Dear Bastien, thank you for your message: it raises a real question, but it mixes several neighbouring ideas, and that mixture is what leads you to your conclusion. First, you slide from necessary to sufficient. That your neighbour worked hard without succeeding only shows that work is not enough; it does not prove it is useless. It can be a necessary condition without being a sufficient one: without a ticket you do not get in, but a ticket alone does not always get you in. Next, you write « I know » where you could only say « I believe ». The people around you who succeeded are not a sample: a few cases do not make knowledge, and your conviction, however sincere, is not proof. Third confusion: you take an explanation for a justification. Being able to explain cheating, to give its causes, does not make it legitimate. Understanding an act is not approving of it. Finally, you ask those who disagree to prove the opposite. Yet it is up to the person making a claim to prove it, and your conclusion goes much further than your premises: from a few examples you draw a rule about everyone. With these distinctions, your thesis becomes more accurate and more interesting: « Work is not enough to succeed; luck counts too, and a success can be explained without being justified. » It is not false; it is just less striking. But it is a thesis that can be discussed, with figures to back it. Looking forward to reading you, Camille, for the soirées Oblique team. The marker’s notes (not counted): four confusions named, each with what it changes, then the restated thesis.',
  watchFor: [
    { pattern: 'Says Bastien is wrong without naming which two neighbouring ideas he mixes up.', criterion: 'tache', feedback: 'Nomme la confusion : « Tu confonds ici… et… ». Puis montre la différence.', ref: 'a12-plan' },
    { pattern: 'Calls the work argument false instead of showing that work is necessary but not sufficient.', criterion: 'precision', feedback: 'Son exemple montre que le travail ne suffit pas, pas qu’il est inutile : condition nécessaire, pas suffisante.', ref: 'a6-table' },
    { pattern: 'Uses savoir for a belief, or never separates croire and savoir, conviction and connaissance.', criterion: 'precision', feedback: 'Il le croit, il ne le sait pas : quelques cas ne font pas une connaissance.', ref: 'a4-cartes' },
    { pattern: 'Uses justifier where expliquer is meant (or excuser), or keeps Bastien’s confusion about cheating.', criterion: 'precision', feedback: 'Expliquer une tricherie, c’est en donner les causes ; la justifier, c’est dire qu’elle était légitime.', ref: 'a2-cartes' },
    { pattern: 'Calls luck « la raison » of a success where a cause is meant, or « la cause » of a choice.', criterion: 'precision', feedback: 'Un phénomène a des causes ; une personne a des raisons.', ref: 'a3-table' },
    { pattern: 'Evidence translated as évidence, or nier used where réfuter is meant.', criterion: 'precision', feedback: 'Evidence : des preuves. Réfuter, c’est montrer ; nier, c’est dire non.', ref: 'a11-piege' },
    { pattern: 'Distinguer avec, confondre entre, opposer avec, relever à, or conclure que + noun.', criterion: 'correction', feedback: 'Distinguer A de B, confondre A et B, conclure à + nom.', ref: 'a10-erreurs' },
    { pattern: 'Suffire de + infinitive, il suffit que de, or s’en suit for s’ensuit.', criterion: 'correction', feedback: 'Suffire à, il suffit de, il s’ensuit que.', ref: 'a6-piege' },
    { pattern: 'Lists definitions without saying what each distinction changes in Bastien’s conclusion.', criterion: 'structure', feedback: 'Pour chaque distinction, dis ce qu’elle change : la conclusion devient fausse, ou seulement trop forte.', ref: 'a10-focus' },
    { pattern: 'No restated thesis at the end, or a restated thesis that keeps one of the confusions.', criterion: 'tache', feedback: 'Termine par sa thèse reformulée, avec le mot juste : « Le travail ne suffit pas… ».', ref: 'a12-usages' },
    { pattern: 'Mocking or lecturing tone, or vous and administrative style to a reader who wrote in tu.', criterion: 'registre', feedback: 'Corrige les idées, jamais la personne : remercie, tutoie, et reste précis.', ref: 'a12-lecture' },
  ],
  graderNotes: [
    'Count the words of the body only: the greeting, the closing formula and the signature do not count. 250 to 350 with 10% tolerance (225 to 385) before criterion « tache » loses a point. responseSpec allows 380.',
    'Bastien’s message carries five confusions: necessary and sufficient (work), believing and knowing (« je sais »), a hasty generalisation from a few friends (the word of lesson 23 in B2: accept it as one of the three), explaining and justifying (cheating), and the burden of proof with a conclusion broader than its premises. Any three, well treated, satisfy « tache ».',
    'Do not judge whether hard work or luck REALLY causes success. Judge the distinctions and the writing only. Never add a personal opinion on success to the feedback.',
    'Accept « condition nécessaire / suffisante », « il faut… mais il ne suffit pas », « encore faut-il » as equally good ways to make the necessary / sufficient point.',
    'Accept « paralogisme », « erreur de raisonnement », « généralisation abusive », « conclusion hâtive »; do NOT require « sophisme », and lightly flag « sophisme » if the learner accuses Bastien of deceiving (the lesson teaches not to claim intent without proof).',
    'Accept « a priori » and « à priori » alike, with or without a plural s on the noun.',
    'The learner need not quote any philosopher; a quotation or a name is neither required nor rewarded, and a misattributed one costs a point in « precision ».',
    'Feedback language: natural C1 French, addressed as « tu », with one short English gloss allowed per comment. Name the section to revisit from watchFor.ref. Cite other lessons by trail position (« la leçon 23 du B2 »), never by id.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['distinguer', 'condition'],
};

/** Say the lesson out loud. Every id carries `voiceflash`. */
const A12_PARLER: Sec<'practice'> = {
  type: 'practice', id: 'a12-parler', layer: 'core',
  title: 'Dis les paires à voix haute', frSub: 'Les mots voisins, séparés',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id)),
  ],
  audio: AUDIO, say: REFRAME, terms: ['distinguer'],
};

const A12_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet', id: 'a12-cheat', layer: 'core', sheetId: 'sheet-reponse',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'expliquer, justifier', v: 'les causes, ou la légitimité', say: fr(E(1023)),
      detail: { title: 'Expliquer ou justifier', body: 'Expliquer dit pourquoi c’est arrivé ; justifier dit pourquoi c’était légitime. Justifier une absence : par une pièce. EN: causes or legitimacy.', say: fr(E(1020)) } },
    { k: 'la cause, la raison', v: 'un phénomène, une personne', say: fr(E(1035)),
      detail: { title: 'Cause, raison, motif, prétexte', body: 'Une cause produit ; une raison justifie ; un motif se déclare ; un prétexte cache la vraie raison. EN: produce, justify, declare, hide.', say: fr(E(1034)) } },
    { k: 'croire, savoir', v: 'le faux possible, le vrai montré', say: fr(E(1044)),
      detail: { title: 'Croire ou savoir', body: 'On peut croire le faux ; on ne sait que le vrai, avec de quoi le montrer. À ma connaissance : la limite de ton savoir. EN: belief and knowledge.', say: fr(E(1043)) } },
    { k: 'nécessaire, suffisant', v: 'sans elle rien, avec elle sûr', say: fr(E(1072)),
      detail: { title: 'Les conditions, le contingent', body: 'Nécessaire : sans elle, rien. Suffisante : avec elle, c’est sûr. Contingent : aurait pu ne pas être. EN: necessary, sufficient, contingent.', say: fr(E(1067)) } },
    { k: 'valide, vrai', v: 'la forme, le contenu', say: fr(E(1087)),
      detail: { title: 'Raisonner', body: 'Des prémisses à la conclusion. Valide : la forme. Vrai : le contenu. Pétition de principe, cercle vicieux, paralogisme : nomme le défaut, pas l’intention. EN: form, content, flaws.', say: fr(E(1099)) } },
    { k: 'prouver, nier', v: 'montrer, ou dire non', say: fr(E(1132)),
      detail: { title: 'La preuve', body: 'Prouver, confirmer, corroborer, infirmer, réfuter : il faut montrer. Nier, démentir : dire non. Une évidence n’est pas evidence. EN: show, or just say no.', say: fr(E(1129)) } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['distinguer'],
};

const A12_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck', id: 'a12-progress', layer: 'core', title: 'Où tu en es',
  body: 'Tu sais nommer ce qui sépare les mots voisins des idées : expliquer et justifier, la cause et la raison, croire et savoir, le nécessaire et le contingent, une condition nécessaire et une condition suffisante, des prémisses valides et une conclusion vraie. Tu reconnais une pétition de principe, un cercle vicieux, une erreur de bonne foi, tu lis a priori dans ses quatre sens, et tu choisis le verbe de preuve qui dit exactement ce qu’un élément permet. Le piège qui reste, c’est le mot savant employé pour impressionner : « sophisme » quand tu ne connais pas l’intention, « je sais » quand tu crois. Avant d’envoyer une réponse, relis-la en soulignant chaque paire : pour chacune, as-tu dit ce qu’elle change ? EN: Before sending a reply, underline each pair and check you said what it changes.',
  stats: [
    { k: 'Les causes', v: 'expliquer, la cause, la raison' },
    { k: 'Le savoir', v: 'croire, savoir, a priori' },
    { k: 'Le raisonnement', v: 'nécessaire, suffisant, valide' },
    { k: 'La preuve', v: 'confirmer, infirmer, réfuter' },
  ],
  audio: AUDIO, say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, TWELVE rounds of eight: one per act from 2 to 11, a round that
 *  recycles b2.10, b2.22, b2.23, b2.24, c1.06 and c1.08 (named in each
 *  question), and a « comme à l’examen » round. `fold()` strips accents,
 *  commas, apostrophes, hyphens and SPACES, so every typed answer turns on a
 *  word or a preposition, and every equally correct answer is listed in
 *  `accept`. No item turns on the a priori accent or plural. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const ES_Q = 'Une forme ne va pas. Écris la phrase correcte. EN: One form is wrong; write the sentence correctly.';
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'errorSpot', q: ES_Q, prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const MOT = 'Écris le mot qui manque.';

const A12_QUIZ: Sec<'quiz'> = {
  type: 'quiz', id: 'a12-quiz', layer: 'core', title: 'L’examen',
  passMark: 70, roundFailThreshold: 60,
  rounds: [
    {
      id: 'r2-expliquer', label: 'Expliquer ou justifier', targets: ['expliquer-justifier'],
      questions: [
        mc('« Il explique ce mensonge » veut dire…', ['il en donne les causes', 'il dit que le mensonge était légitime', 'il ment à son tour'], 0, 'Expliquer : donner les causes. EN: he gives the causes.', 'a2-cartes'),
        mc('« Rien ne justifie qu’on parle ainsi à un collègue. » Cette phrase…', ['refuse que ce soit légitime', 'cherche les causes', 'excuse la personne'], 0, 'Rien ne justifie : rien ne rend cela légitime. EN: nothing makes it acceptable.', 'a2-construire'),
        mc('Dans l’administration, « justifier une absence », c’est…', ['apporter une pièce qui la prouve', 'dire qu’elle était légitime'], 0, 'Le troisième sens : par un document. EN: with a document.', 'a2-cartes'),
        mc('Une théorie qui explique tous les faits observés en…', ['rend compte', 'rend justice', 'tient compte'], 0, 'Rendre compte de : expliquer, soutenu. EN: accounts for them.', 'a2-cartes'),
        tI(MOT, 'Expliquer un geste, ce n’est pas l’___ . (to excuse)', 'excuser', 'Expliquer n’excuse rien. EN: excuser.', 'a2-piege'),
        tI(MOT, 'Un retard ___ : rien ne le rend légitime. (adjectif de justifier)', 'injustifiable', 'Injustifiable : rien ne le défend. EN: unjustifiable.', 'a2-construire'),
        eS('Elle a dû justifier devant toute l’équipe.', fr(E(1021)), 'Se défendre soi-même : se justifier. EN: se justifier.', 'a2-piege', ['Elle a dû se défendre devant toute l’équipe.']),
        lC('Écoute. Cette absence était-elle légitime ?', fr(E(1019)), ['non, seulement explicable', 'oui, elle était justifiée'], 0, 'Explicable, pas justifiée. EN: only understandable.', 'a2-ecoute'),
      ],
    },
    {
      id: 'r3-cause', label: 'La cause et la raison', targets: ['cause-raison'],
      questions: [
        mc('« La … de l’incendie reste inconnue. »', ['cause', 'raison', 'motif'], 0, 'Un incendie a une cause. EN: cause.', 'a3-table'),
        mc('Un prétexte est…', ['une raison donnée à la place de la vraie', 'la cause d’un phénomène', 'la raison déclarée dans un dossier'], 0, 'Le prétexte cache la vraie raison. EN: a cover reason.', 'a3-table'),
        mc('Sur un formulaire : « … de votre visite ».', ['Motif', 'Cause', 'Prétexte'], 0, 'Le motif : la raison déclarée. EN: reason for your visit.', 'a3-construire'),
        mc('Deux phénomènes vont toujours ensemble. Tu peux en conclure…', ['rien encore : aller ensemble n’est pas causer', 'que l’un cause l’autre'], 0, 'Une corrélation n’est pas une cause. EN: nothing yet.', 'a3-exemples'),
        tI('Écris les deux mots qui manquent.', 'La raison ___ ___ il est parti nous échappe encore.', 'pour laquelle', 'La raison pour laquelle, jamais pourquoi. EN: pour laquelle.', 'a3-erreurs'),
        tI(MOT, 'Le verglas a ___ l’accident. (verbe de la famille de cause)', 'causé', 'Causer : produire. EN: caused.', 'a3-construire', ['provoqué', 'entraîné']),
        eS('La raison de l’incendie reste inconnue.', fr(E(1030)), 'Un phénomène a une cause, pas une raison. EN: la cause.', 'a3-erreurs'),
        lC('Écoute. La pluie était-elle la vraie raison ?', fr(E(1033)), ['non, un prétexte', 'oui'], 0, 'Elle n’a été qu’un prétexte. EN: a pretext.', 'a3-histoire'),
      ],
    },
    {
      id: 'r4-savoir', label: 'Croire, savoir, connaître', targets: ['croire-savoir'],
      questions: [
        mc('Peut-on savoir une chose fausse ?', ['non : on la croyait seulement', 'oui, si l’on en est sûr'], 0, 'Savoir suppose le vrai. EN: no.', 'a4-cartes'),
        mc('« J’ai fait sa connaissance à Dakar » veut dire…', ['je l’ai rencontrée à Dakar', 'j’ai appris ce qu’elle sait'], 0, 'Faire la connaissance de : rencontrer. EN: I met her.', 'a4-cartes'),
        mc('« Il a signé en connaissance de cause » :', ['il savait ce qu’il faisait', 'il connaissait la cause du problème'], 0, 'En sachant ce qu’on fait. EN: knowingly.', 'a4-cartes'),
        mc('Une conviction profonde…', ['dit ta certitude, pas la vérité', 'prouve que tu as raison'], 0, 'Une conviction n’est pas une preuve. EN: certainty, not truth.', 'a4-construire'),
        tI(MOT, 'Je ___ qu’il viendra, mais je n’en sais rien.', 'crois', 'Croire : tenir pour vrai, sans savoir. EN: crois.', 'a4-piege', ['pense', 'suppose', 'présume', 'imagine', 'espère']),
        tI(MOT, 'Une croyance ___ : sans fondement. (in-…)', 'infondée', 'Infondée : sans fondement. EN: unfounded.', 'a4-construire'),
        eS('Il a signé en connaissance des causes.', fr(E(1047)), 'L’expression est figée : en connaissance de cause. EN: fixed phrase.', 'a4-piege'),
        lC('Écoute. Pourquoi la personne dit-elle « je le sais » ?', fr(E(1051)), ['elle a vu les chiffres', 'elle en est convaincue', 'quelqu’un le lui a dit'], 0, 'Elle a de quoi le montrer. EN: she saw the figures.', 'a4-ecoute'),
      ],
    },
    {
      id: 'r5-contingent', label: 'Le nécessaire et le contingent', targets: ['contingent-confondu'],
      questions: [
        mc('Est contingent ce qui…', ['aurait pu ne pas être', 'ne peut pas être autrement', 'arrive toujours'], 0, 'Réel, mais pas nécessaire. EN: might not have been.', 'a5-cartes'),
        mc('« Qu’un triangle ait trois côtés » est…', ['nécessaire', 'contingent'], 0, 'Cela ne peut pas être autrement. EN: necessary.', 'a5-cartes'),
        mc('« The project is contingent on the vote. »', ['Le projet dépend du vote.', 'Le projet est contingent du vote.'], 0, 'Pour une condition : dépendre de. EN: dépend de.', 'a5-erreurs'),
        mc('Sur une porte : « Réservation nécessaire ». Ici, nécessaire veut dire…', ['indispensable : il faut réserver', 'qui ne peut pas être autrement'], 0, 'Le sens courant. EN: required.', 'a5-cartes'),
        tI(MOT, 'Leur rencontre était ___ : ils ont pris le même train par hasard.', 'fortuite', 'Fortuit : dû au hasard. EN: fortuitous.', 'a5-erreurs', ['accidentelle', 'imprévue']),
        tI(MOT, 'Ce résultat n’avait rien d’___ : il aurait pu ne pas arriver.', 'inévitable', 'Inévitable : qui ne pouvait pas ne pas arriver. EN: inevitable.', 'a5-construire', ['inéluctable', 'obligatoire', 'automatique']),
        eS('Leur rencontre était fortunée : ils ont pris le même train par hasard.', fr(E(1059)), 'Fortuné : riche ou chanceux ; par hasard : fortuit. EN: fortuite.', 'a5-erreurs'),
        lC('Écoute. La personne aurait-elle pu naître ailleurs ?', fr(E(1057)), ['oui', 'non'], 0, 'Sa ville de naissance est contingente. EN: yes.', 'a5-ecoute'),
      ],
    },
    {
      id: 'r6-conditions', label: 'Nécessaire ou suffisant', targets: ['condition-confondue'],
      questions: [
        mc('Une condition nécessaire…', ['ne garantit rien à elle seule', 'suffit toujours'], 0, 'Sans elle rien ; avec elle, pas encore tout. EN: guarantees nothing alone.', 'a6-table'),
        mc('« Il suffit d’appuyer sur ce bouton. » Appuyer est une condition…', ['suffisante', 'nécessaire seulement'], 0, 'Il suffit : avec elle, c’est fait. EN: sufficient.', 'a6-construire'),
        mc('Dans le règlement de la bourse, un dossier complet…', ['est nécessaire, pas suffisant', 'suffit pour obtenir la bourse'], 0, 'Les dossiers recevables sont encore classés. EN: necessary, not sufficient.', 'a6-lecture'),
        mc('« Si et seulement si » annonce une condition…', ['nécessaire et suffisante', 'suffisante seulement'], 0, 'Avec elle toujours, sans elle jamais. EN: both.', 'a6-table'),
        tI(MOT, 'Un diplôme ne suffit pas ___ trouver un emploi.', 'à', 'Suffire à, ou pour, + infinitif. EN: à.', 'a6-piege', ['pour']),
        tI(MOT, 'Il ne suffit pas d’être inscrit : encore ___ avoir rendu ses livres. (falloir, inversé)', 'faut-il', 'Encore en tête : on inverse. EN: faut-il.', 'a6-piege'),
        eS('Un diplôme ne suffit pas de trouver un emploi.', fr(E(1069)), 'Suffire à, ou pour. EN: suffire à.', 'a6-piege', ['Un diplôme ne suffit pas pour trouver un emploi.']),
        lC('Écoute. Le billet suffit-il pour entrer ?', fr(E(1067)), ['non', 'oui'], 0, 'Nécessaire, pas suffisant. EN: no.', 'a6-table'),
      ],
    },
    {
      id: 'r7-premisses', label: 'Prémisses et conclusion', targets: ['conclusion-mal-tiree'],
      questions: [
        mc('Un raisonnement valide…', ['garantit que la conclusion suit des prémisses', 'garantit que la conclusion est vraie'], 0, 'Valide : la forme. EN: it follows.', 'a7-cartes'),
        mc('« Le jury a conclu … l’absence de faute. »', ['à', 'que', 'de'], 0, 'Conclure à + nom. EN: à.', 'a7-erreurs'),
        mc('« Tu pars du principe que tout le monde a une voiture » : tu reproches…', ['une prémisse non dite et non vérifiée', 'une conclusion trop prudente'], 0, 'Partir du principe que : poser une prémisse. EN: an unstated premise.', 'a7-construire'),
        mc('Un postulat est…', ['admis sans démonstration', 'démontré à la fin'], 0, 'On en part sans le prouver. EN: assumed.', 'a7-construire'),
        tI(MOT, 'Cette conclusion ne ___ pas de tes prémisses. (découler)', 'découle', 'Découler de. EN: follow.', 'a7-erreurs', ['suit', 'résulte']),
        tI(MOT, 'Il s’___ que le projet coûtera plus cher que prévu.', 'ensuit', 'S’ensuivre, en un mot. EN: it follows.', 'a7-erreurs'),
        eS('Le jury a conclu que l’absence de faute.', fr(E(1085)), 'Devant un nom seul : conclure à. EN: conclure à.', 'a7-erreurs'),
        lC('Écoute. Pourquoi la conclusion peut-elle être fausse ?', fr(E(1082)), ['parce qu’une prémisse est fausse', 'parce que le raisonnement n’est pas valide'], 0, 'Valide, mais une prémisse fausse. EN: a false premise.', 'a7-cartes'),
      ],
    },
    {
      id: 'r8-sophismes', label: 'Le sophisme et ses cousins', targets: ['sophisme-mal-nomme'],
      questions: [
        mc('Un paralogisme est…', ['une erreur de raisonnement faite de bonne foi', 'une erreur voulue pour tromper'], 0, 'De bonne foi. EN: in good faith.', 'a8-cartes'),
        mc('« Ce remède est efficace puisqu’il marche. » C’est…', ['une pétition de principe', 'une généralisation abusive', 'une contradiction'], 0, 'La raison répète la conclusion. EN: begging the question.', 'a8-cartes'),
        mc('Prouver A par B, puis B par A, c’est…', ['un cercle vicieux', 'une tautologie', 'un paralogisme'], 0, 'Chacun prouve l’autre. EN: a vicious circle.', 'a8-construire'),
        mc('Tu ne connais pas l’intention de l’auteur. Tu dis plutôt…', ['une erreur de raisonnement', 'un sophisme'], 0, 'Nomme le défaut, pas l’intention. EN: a reasoning error.', 'a8-piege'),
        tI(MOT, 'Supposer ce qu’on veut prouver, c’est une pétition de ___ .', 'principe', 'Une pétition de principe. EN: principe.', 'a8-cartes'),
        tI(MOT, 'Il s’est ___ deux fois dans le même paragraphe. (contredire)', 'contredit', 'Le participe : contredit. EN: contradicted.', 'a8-piege'),
        eS('La faille, c’est que la conclusion ne suit pas aux prémisses.', fr(E(1099)), 'Suivre des prémisses. EN: suit des.', 'a8-piege', ['La faille, c’est que la conclusion ne découle pas des prémisses.']),
        lC('Écoute. Pourquoi parle-t-on de cercle vicieux ?', fr(E(1095)), ['chaque manque entraîne l’autre', 'la personne ment', 'la phrase se contredit'], 0, 'Pas d’emploi, pas d’expérience. EN: each lack feeds the other.', 'a8-ecoute'),
      ],
    },
    {
      id: 'r9-apriori', label: 'A priori, a posteriori', targets: ['apriori-confondu'],
      questions: [
        mc('Dans un courriel : « A priori, la réunion est maintenue ». A priori veut dire…', ['en principe', 'sans expérience', 'après coup'], 0, 'Le sens courant. EN: in principle.', 'a9-table'),
        mc('« Il a des a priori sur les gens de la ville » :', ['il a des préjugés', 'il les connaît bien'], 0, 'Un a priori : un préjugé. EN: preconceptions.', 'a9-table'),
        mc('Une connaissance a posteriori vient…', ['de l’expérience', 'du seul raisonnement'], 0, 'A posteriori : de l’expérience. EN: from experience.', 'a9-construire'),
        mc('« Deux et deux font quatre » se sait…', ['a priori', 'a posteriori'], 0, 'Sans rien mesurer. EN: a priori.', 'a9-construire'),
        tI(MOT, 'Il a trouvé ses raisons a ___ , une fois la décision prise.', 'posteriori', 'Après coup : a posteriori. EN: posteriori.', 'a9-erreurs'),
        tI('Écris les trois mots qui manquent.', '___ ___ ___ , ce chiffre paraît énorme. (at first sight)', 'À première vue', 'À première vue : une impression. EN: at first sight.', 'a9-table', ['Au premier abord', 'De prime abord']),
        eS('On sait a posteriori que deux et deux font quatre, sans rien mesurer.', fr(E(1106)), 'Sans expérience : a priori. EN: a priori.', 'a9-erreurs'),
        lC('Écoute. Comment connaît-on cela ?', fr(E(1107)), ['par l’expérience', 'par le raisonnement seul'], 0, 'A posteriori : par l’expérience. EN: from experience.', 'a9-ecoute'),
      ],
    },
    {
      id: 'r10-definir', label: 'Définir et distinguer', targets: ['distinction-mal-construite'],
      questions: [
        mc('« Au sens strict » veut dire…', ['dans la définition exacte du mot', 'dans un sens étendu'], 0, 'La définition exacte. EN: strictly speaking.', 'a10-cartes'),
        mc('« Cette question relève de la morale » :', ['elle appartient au domaine de la morale', 'elle compte plus que la morale'], 0, 'Relever de : appartenir à un domaine. EN: it is a matter of morality.', 'a10-cartes'),
        mc('Dans l’article, le service des aînés compte désormais…', ['les personnes isolées', 'les personnes qui vivent seules'], 0, 'Celles qui n’ont parlé à personne depuis une semaine. EN: isolated people.', 'a10-lecture'),
        mc('Clarifier un concept flou, c’est surtout…', ['le définir avec précision', 'l’illustrer d’une image'], 0, 'Définir et distinguer. EN: define it.', 'a10-construire'),
        tI(MOT, 'Il faut distinguer le fait ___ son interprétation.', 'de', 'Distinguer A de B. EN: de.', 'a10-erreurs'),
        tI(MOT, 'On oppose souvent la nature ___ la culture.', 'à', 'Opposer A à B. EN: à.', 'a10-erreurs', ['et']),
        eS('Il ne faut pas confondre entre la solitude et l’isolement.', fr(E(1116)), 'Confondre A et B, sans entre. EN: no entre.', 'a10-erreurs', ['Il ne faut pas confondre la solitude avec l’isolement.']),
        lC('Écoute. En cuisine, la tomate est traitée comme…', fr(E(1117)), ['un légume', 'un fruit'], 0, 'Au sens strict un fruit, en cuisine un légume. EN: a vegetable.', 'a10-cartes'),
      ],
    },
    {
      id: 'r11-preuve', label: 'Prouver, confirmer, réfuter', targets: ['preuve-confondue'],
      questions: [
        mc('« There is no evidence » :', ['Il n’y a aucune preuve.', 'Il n’y a aucune évidence.'], 0, 'Evidence : des preuves. EN: no proof.', 'a11-piege'),
        mc('Infirmer une hypothèse, c’est…', ['montrer qu’elle est fausse', 'la confirmer', 'la formuler'], 0, 'Le contraire de confirmer. EN: disprove.', 'a11-table'),
        mc('Il a dit « c’est faux », sans rien montrer. Il a…', ['nié', 'réfuté'], 0, 'Nier : dire non. EN: denied.', 'a11-table'),
        mc('Dans la dépêche, ce qui corrobore la version de la mairie :', ['deux employés interrogés séparément', 'la rumeur elle-même'], 0, 'Deux sources indépendantes. EN: two employees.', 'a11-texte'),
        tI(MOT, 'Deux témoins indépendants ___ sa version. (appuient)', 'corroborent', 'Corroborer : appuyer par un autre élément. EN: corroborate.', 'a11-piege', ['confirment', 'appuient', 'étayent']),
        tI(MOT, 'Le ___ de la mairie n’a convaincu personne. (nom de démentir)', 'démenti', 'Un démenti, masculin. EN: denial.', 'a11-piege'),
        eS('Les évidences manquent encore pour conclure.', fr(E(1134)), 'Evidence : des preuves. EN: preuves.', 'a11-piege', ['Les éléments de preuve manquent encore pour conclure.']),
        lC('Écoute. A-t-il montré que les faits étaient faux ?', fr(E(1132)), ['non, il les a seulement niés', 'oui'], 0, 'Nier n’est pas réfuter. EN: no.', 'a11-table'),
      ],
    },
    {
      id: 'r12-recyclage', label: 'Le B2 et le C1 en renfort', targets: ['recyclage'],
      questions: [
        mc(`${Cap(ACADEMIQUE_REF)} : « jamais plus sûr que tes preuves ». Tu n’as pas tout vérifié. Tu écris…`, ['à ma connaissance', 'je sais que'], 0, `« ${B222_REFRAME} » EN: ${B222_REFRAME_EN}`, 'a4-cartes'),
        mc(`${Cap(ARGU_REF)} : un raisonnement qui paraît juste et ne l’est pas, c’est…`, ['un sophisme', 'une prémisse'], 0, `« ${B223_REFRAME} » EN: ${B223_REFRAME_EN}`, 'a8-cartes'),
        mc(`${Cap(NOMINAL_REF)} : de contingent, on tire le nom…`, ['la contingence', 'la contingeance'], 0, `« ${B210_REFRAME} » EN: ${B210_REFRAME_EN}`, 'a5-construire'),
        mc(`${Cap(CRITIQUE_REF)} : deux faits liés…`, ['ne sont pas forcément cause et effet', 'sont toujours cause et effet'], 0, `« ${B224_REFRAME} » EN: ${B224_REFRAME_EN}`, 'a3-exemples'),
        mc(`${Cap(PERSUADER_REF)} : des cas observés à une règle générale, c’est…`, ['une induction', 'une déduction'], 0, `« ${C108_REFRAME} » EN: ${C108_REFRAME_EN}`, 'a7-check'),
        mc(`${Cap(NUANCER_REF)} : « à ma connaissance » sert à…`, ['limiter ce que tu affirmes à ce que tu sais', 'dire que tu en es certain'], 0, 'La limite de ton savoir, vue pour nuancer à l’oral. EN: as far as I know.', 'a4-cartes'),
        mc(`${Cap(ARGU_REF)} : « Deux faits qui se suivent ne sont pas forcément une cause et son effet. » Cette règle évite…`, ['de prendre une succession pour une cause', 'de confondre deux mots savants'], 0, 'Se suivre n’est pas causer. EN: succession is not causation.', 'a3-exemples'),
        lC(`Écoute. ${Cap(ACADEMIQUE_REF)} : que dit cette phrase ?`, fr(B222_ROW), ['nuancer, c’est dire jusqu’où va ta preuve', 'il ne faut jamais douter'], 0, 'Nuancer n’est pas douter. EN: say how far your evidence goes.', 'a1-rappel'),
      ],
    },
    {
      id: 'r13-examen', label: 'Comme à l’examen', targets: ['reponse-confuse'],
      questions: [
        mc('Compréhension écrite. D’après sa réponse, que reproche d’abord Fatou à Lucien ?', ['de confondre une corrélation et une cause', 'de ne pas aimer le petit-déjeuner', 'de mentir sur les chiffres', 'de parler de ses enfants'], 0, 'Sa première distinction. EN: correlation and cause.', 'a12-lecture'),
        mc('Compréhension écrite. Pourquoi Fatou écrit-elle « peut-être nécessaire pour certains enfants » ?', ['elle nuance : utile à certains, suffisant pour personne', 'elle pense que manger suffit', 'elle se contredit', 'elle cite une étude'], 0, 'Elle ne dit pas plus que ce qu’elle sait. EN: she hedges.', 'a12-lecture'),
        mc('Compréhension écrite. Le ton de Fatou est…', ['bienveillant et précis', 'moqueur', 'agressif', 'indifférent'], 0, 'Elle remercie et ne se moque pas. EN: kind and precise.', 'a12-lecture'),
        mc('Choisis le mot juste : « Le jury a conclu … un accident. »', ['à', 'que', 'sur', 'de'], 0, 'Conclure à + nom. EN: à.', 'a7-erreurs'),
        mc('Choisis le mot juste : « De nouvelles mesures ont … l’hypothèse : elle était fausse. »', ['infirmé', 'confirmé', 'corroboré', 'démontré'], 0, 'Montrer qu’elle est fausse : infirmer. EN: disproved.', 'a11-table'),
        tI('Écris le mot qui manque.', 'Ce n’est pas faux ; c’est seulement ___ . (pas assez)', 'insuffisant', 'Pas faux, mais pas suffisant. EN: insufficient.', 'a12-usages', ['incomplet']),
        eS('Tu confonds entre croire et savoir.', 'Tu confonds croire et savoir.', 'Confondre A et B, sans entre. EN: no entre.', 'a10-erreurs', ['Tu confonds croire avec savoir.']),
        lC('Compréhension orale. Écoute. Que propose la personne ?', fr(E(1141)), ['une thèse reformulée, plus juste', 'd’abandonner la thèse', 'de changer de sujet'], 0, 'La distinction rend la thèse plus juste. EN: a better thesis.', 'a12-plan'),
      ],
    },
  ],
  audio: AUDIO, say: REFRAME,
};

/** The quiz-spread rule is checked on AUTHORED order although LessonRich
 *  reshuffles options on every attempt. So each closed question's options
 *  are ROTATED, `correct` moved in step, onto the least-used slot so far.
 *  The option set and the right answer are unchanged. As b2.27 does. */
function spreadSlots(quiz: Sec<'quiz'>): void {
  const used = [0, 0, 0, 0];
  for (const r of quiz.rounds ?? []) {
    for (const q of r.questions as (QQ & { opts?: string[]; correct?: number })[]) {
      if (!Array.isArray(q.opts) || typeof q.correct !== 'number') continue;
      const n = q.opts.length;
      let target = 0;
      for (let k = 1; k < n; k++) if (used[k] < used[target]) target = k;
      const shift = (target - q.correct + n) % n;
      q.opts = q.opts.map((_, i) => q.opts![(i - shift + n) % n]);
      q.correct = target;
      used[target]++;
    }
  }
}
spreadSlots(A12_QUIZ);

const A12_REVIEW: Sec<'reviewDeck'> = {
  type: 'reviewDeck', id: 'a12-review', layer: 'core', title: 'Une dernière fois',
  cards: [
    { front: 'to account for (formal)', back: 'rendre compte de', say: fr(E(1022)) },
    { front: 'the reason why', back: 'la raison pour laquelle', say: fr(E(1034)) },
    { front: 'knowingly', back: 'en connaissance de cause', say: fr(E(1047)) },
    { front: 'contingent on', back: 'dépendre de', say: fr(E(1060)) },
    { front: 'necessary, not sufficient', back: 'nécessaire, mais pas suffisant', say: fr(E(1067)) },
    { front: 'it follows that', back: 'il s’ensuit que', say: fr(E(1083)) },
    { front: 'begging the question', back: 'une pétition de principe', say: fr(E(1094)) },
    { front: 'in principle (everyday a priori)', back: 'a priori, à première vue', say: fr(E(1104)) },
    { front: 'evidence', back: 'des preuves, jamais des évidences', say: fr(E(1134)) },
  ],
  audio: AUDIO, say: REFRAME,
};

const A12_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup', id: 'a12-roundup', layer: 'core', title: 'Deux mots voisins, deux idées',
  body: `${REFRAME} Tu es parti de ce que ${ARGU_REF} t’avait appris sur les sophismes, de la prudence de ${ACADEMIQUE_REF}, des noms en -ité de ${NOMINAL_REF} et de la déduction de ${PERSUADER_REF}, pour séparer les mots voisins des idées : expliquer et justifier, la cause et la raison, croire et savoir, le nécessaire et le suffisant, le valide et le vrai, prouver et nier. La suite, c’est ${NEXT_REF_PLANNED} : les références historiques que la presse et les discours tiennent pour connues. EN: Next comes lesson 13 in C1, the historical references the press and speeches take for granted.`,
  points: [
    'Expliquer donne les causes ; justifier dit que c’était légitime.',
    'On peut croire le faux ; on ne sait que le vrai, avec de quoi le montrer.',
    'Nécessaire : sans elle, rien. Suffisante : avec elle, c’est sûr.',
    'Nomme le défaut d’un raisonnement, pas l’intention de son auteur.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['distinguer', 'sophisme'],
};

const ACT12: ActDef = {
  act: {
    id: 'act12', title: 'Ta réponse',
    opener: {
      line: 'Un message de blog qui mélange tout : ici tu réponds à Bastien en nommant ce qu’il confond, puis tu passes l’examen. EN: A blog message that mixes everything up: here you reply to Bastien by naming what he confuses, then sit the exam.',
      imageRef: 'lessons/vocabulaire-idees/act12.jpg',
    },
    sections: [],
    milestone: 'Tu as écrit ta réponse et passé l’examen : quatre-vingt-seize questions, douze manches. EN: You wrote your reply and sat the exam: ninety-six questions, twelve rounds.',
    estScreens: 150,
    restPoints: ['a12-plan', 'a12-scenario', 'a12-mission', 'a12-cheat', 'a12-quiz/r5-contingent', 'a12-quiz/r9-apriori', 'a12-review'],
  },
  sections: [
    A12_LECTURE, A12_PLAN, A12_USAGES, A12_SCENARIO, A12_MISSION, A12_PARLER,
    A12_CHEAT, A12_PROGRESS, A12_QUIZ, A12_REVIEW, A12_ROUNDUP,
  ],
  imports: IMPORTED.act12,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger, each the resolving target of
 *  exactly one quiz round. Deliberately NOT in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-expliquer', title: 'Les causes, ou la légitimité', format: 'sort' as const, coach: 'Deux piles : la phrase donne des causes, ou elle dit ce qui est légitime. EN: causes or legitimacy?', buckets: ['expliquer', 'justifier'], items: [E(1017), E(1022), E(1012), E(1013), E(1018), E(1021)], audio: AUDIO },
  { id: 'd-cause', title: 'Un phénomène ou une personne', format: 'mcq' as const, coach: 'Un phénomène a des causes ; une personne a des raisons. EN: causes for things, reasons for people.', q: '« La … de l’incendie reste inconnue. »', opts: ['cause', 'raison'], correct: 0, why: 'Un incendie a une cause. EN: cause.', items: [E(1026), E(1027), E(1030), E(1031), E(1034), E(1036)], audio: AUDIO },
  { id: 'd-savoir', title: 'Croire ou savoir', format: 'sort' as const, coach: 'Deux piles : la phrase dit une croyance, ou un savoir qu’on peut montrer. EN: belief or knowledge?', buckets: ['croire', 'savoir'], items: [E(1043), E(1045), E(1039), E(1051), E(1041), E(1040)], audio: AUDIO },
  { id: 'd-contingent', title: 'Devait-il en être ainsi', format: 'sort' as const, coach: 'Deux piles : ce qui ne pouvait pas être autrement, ou ce qui aurait pu ne pas être. EN: necessary or contingent?', buckets: ['nécessaire', 'contingent'], items: [E(1056), E(1052), E(1054), E(1057), E(1059), E(1063)], audio: AUDIO },
  { id: 'd-conditions', title: 'Sans elle, ou avec elle', format: 'mcq' as const, coach: 'Le test du sans, puis le test du avec. EN: the without test, then the with test.', q: 'Le billet est nécessaire pour entrer. Suffit-il ?', opts: ['pas forcément', 'toujours'], correct: 0, why: 'Nécessaire n’est pas suffisant. EN: not necessarily.', items: [E(1064), E(1065), E(1067), E(1069), E(1071), E(1075)], audio: AUDIO },
  { id: 'd-premisses', title: 'Du départ à l’arrivée', format: 'flashcard' as const, coach: 'Lis chaque phrase et dis si elle parle du départ, de l’arrivée ou de la forme du raisonnement. EN: start, end or form?', items: [E(1076), E(1077), E(1079), E(1081), E(1086), E(1088)], audio: AUDIO },
  { id: 'd-sophismes', title: 'Nommer le défaut', format: 'flashcard' as const, coach: 'Lis chaque phrase et nomme le défaut qu’elle décrit, sans parler d’intention. EN: name the flaw.', items: [E(1089), E(1090), E(1091), E(1093), E(1094), E(1095)], audio: AUDIO },
  { id: 'd-apriori', title: 'Avant, après, à première vue', format: 'sort' as const, coach: 'Deux piles : le sens courant, ou le sens savant. EN: everyday or learned sense?', buckets: ['sens courant', 'sens savant'], items: [E(1104), E(1105), E(1110), E(1106), E(1107), E(1103)], audio: AUDIO },
  { id: 'd-definir', title: 'La bonne préposition', format: 'mcq' as const, coach: 'Distinguer A de B ; confondre A et B ; opposer A à B. EN: the prepositions of distinction.', q: 'Il faut distinguer le fait … son interprétation.', opts: ['de', 'avec'], correct: 0, why: 'Distinguer A de B. EN: de.', items: [E(1112), E(1113), E(1116), E(1118), E(1120), E(1123)], audio: AUDIO },
  { id: 'd-preuve', title: 'Établir ou défaire', format: 'sort' as const, coach: 'Deux piles : la phrase établit quelque chose, ou elle le défait. EN: establish or undo?', buckets: ['établir', 'défaire'], items: [E(1124), E(1128), E(1130), E(1125), E(1127), E(1131)], audio: AUDIO },
  { id: 'd-recyclage', title: 'Le B2 et le C1 en renfort', format: 'flashcard' as const, coach: 'Six phrases des leçons précédentes : dis ce que chacune t’apprend pour choisir le mot juste. EN: what each earlier sentence teaches here.', items: [B222_ROW, B223_OPINION, B223_SOPHISME, B210_ROW, C108_ROW, B224_ROW], audio: AUDIO },
  { id: 'd-reponse', title: 'Nommer, montrer, reformuler', format: 'flashcard' as const, coach: 'Lis chaque phrase, puis écris la tienne sur le même modèle pour ta réponse à Bastien. EN: read each one, then write your own.', items: [E(1138), E(1139), E(1140), E(1141), E(1143), E(1144)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'expliquer-justifier', description: 'Says justifier where expliquer is meant (or the reverse), misses the documentary sense of justifier, or drops the pronoun of se justifier.', detectOn: ['a2-construire', 'a2-piege', 'a2-check', 'a12-mission'], drill: 'd-expliquer', retest: 'd-expliquer' },
  { id: 'cause-raison', description: 'Gives a phenomenon a raison, writes la raison pourquoi, or confuses motif and prétexte.', detectOn: ['a3-construire', 'a3-erreurs', 'a3-check', 'a12-mission'], drill: 'd-cause', retest: 'd-cause' },
  { id: 'croire-savoir', description: 'Says je sais for a belief, takes a conviction for proof, or misreads the senses of connaissance.', detectOn: ['a4-construire', 'a4-piege', 'a4-check', 'a12-mission'], drill: 'd-savoir', retest: 'd-savoir' },
  { id: 'contingent-confondu', description: 'Calls something real necessary, calques contingent on, or confuses fortuit with fortuné.', detectOn: ['a5-construire', 'a5-erreurs', 'a5-check'], drill: 'd-contingent', retest: 'd-contingent' },
  { id: 'condition-confondue', description: 'Takes a necessary condition for a sufficient one, or misbuilds suffire à, il suffit de, si et seulement si or encore faut-il.', detectOn: ['a6-construire', 'a6-piege', 'a6-check', 'a12-mission'], drill: 'd-conditions', retest: 'd-conditions' },
  { id: 'conclusion-mal-tiree', description: 'Treats a valid argument as proof of a true conclusion, misses an unstated premise, or writes conclure que + noun or s’en suit.', detectOn: ['a7-construire', 'a7-erreurs', 'a7-check', 'a12-mission'], drill: 'd-premisses', retest: 'd-premisses' },
  { id: 'sophisme-mal-nomme', description: 'Calls every flawed argument a sophism, misses begging the question or a vicious circle, or claims intent without proof.', detectOn: ['a8-construire', 'a8-piege', 'a8-check', 'a12-mission'], drill: 'd-sophismes', retest: 'd-sophismes' },
  { id: 'apriori-confondu', description: 'Reads a priori only in its philosophical sense, or swaps a priori and a posteriori.', detectOn: ['a9-construire', 'a9-erreurs', 'a9-check'], drill: 'd-apriori', retest: 'd-apriori' },
  { id: 'distinction-mal-construite', description: 'Writes confondre entre, distinguer avec, relever à or opposer avec, or never says which sense of a word is meant.', detectOn: ['a10-construire', 'a10-erreurs', 'a10-check', 'a12-mission'], drill: 'd-definir', retest: 'd-definir' },
  { id: 'preuve-confondue', description: 'Translates evidence as évidence, uses réfuter for nier, or confuses confirmer, infirmer and corroborer.', detectOn: ['a11-construire', 'a11-piege', 'a11-check', 'a12-mission'], drill: 'd-preuve', retest: 'd-preuve' },
  { id: 'recyclage', description: 'Loses a tool this lesson sits on: claims no surer than the evidence, opinion against argument, the -ité nouns, correlation against cause, deduction against induction.', detectOn: ['a1-rappel', 'a3-exemples', 'a4-cartes'], drill: 'd-recyclage', retest: 'd-recyclage' },
  { id: 'reponse-confuse', description: 'In a reply, says the other person is wrong without naming the confusion, showing the distinction or restating the thesis.', detectOn: ['a12-plan', 'a12-scenario', 'a12-mission'], drill: 'd-reponse', retest: 'd-reponse' },
];

/** Missions do not shuffle (MissionRich renders authored order), so every
 *  closed mission item and drill is ROTATED here, `correct` moved in step,
 *  so that each option-count class spreads evenly and no slot repeats more
 *  than twice in a row. Same walk order as `b1-answer-slots.test.ts`. No
 *  text changes; no `why` in this lesson names a position. As b2.27 does. */
function spreadMissions(sections: LessonSection[], drills: LessonDrill[]): void {
  const OPT_KEYS = ['opts', 'options', 'choices', 'answers'];
  const used: Record<number, number[]> = {};
  let last = -1, run = 0;
  const walk = (n: any): void => {
    if (!n || typeof n !== 'object') return;
    if (Array.isArray(n)) { n.forEach(walk); return; }
    if (typeof n.correct === 'number') {
      const key = OPT_KEYS.find((k) => Array.isArray(n[k]));
      if (key) {
        const opts: unknown[] = n[key];
        const k = opts.length;
        const u = (used[k] ??= new Array(k).fill(0));
        const order = [...Array(k).keys()].sort((a, b) => u[a] - u[b] || a - b);
        const target = order.find((t) => !(t === last && run >= 2)) ?? order[0];
        const shift = (target - n.correct + k) % k;
        n[key] = opts.map((_, i) => opts[(i - shift + k) % k]);
        n.correct = target;
        u[target]++;
        run = target === last ? run + 1 : 1;
        last = target;
      }
    }
    Object.values(n).forEach(walk);
  };
  for (const s of sections) if (s.type !== 'quiz') walk(s);
  for (const d of drills) walk(d);
}

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS (layer deep: teach and table only). Every sheet is
 *  reached from at least one mission through `sheetId`.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-pourquoi', 'Expliquer, justifier, la cause', ['expliquer ou justifier', 'cause, raison, motif, prétexte', 'les pièges'], [
    teach('sheet-pourquoi-teach', 'Deux questions derrière « pourquoi »',
      `${REFRAME} Pourquoi est-ce arrivé ? On explique, par des causes. Était-ce légitime ? On justifie, par des raisons. Un phénomène a des causes ; une personne a des raisons, qu’elle déclare (le motif) ou qu’elle cache (le prétexte). EN: ${REFRAME_EN}`),
    table('sheet-pourquoi-verbes', 'Expliquer, justifier', ['Verbe', 'Il dit', 'Exemple'], [
      ['expliquer', 'pourquoi c’est arrivé', 'La hausse des prix explique la baisse des ventes.'],
      ['justifier', 'que c’était légitime', 'Rien ne justifie qu’on parle ainsi à un collègue.'],
      ['se justifier', 'se défendre soi-même', 'Elle a dû se justifier devant toute l’équipe.'],
      ['justifier (administration)', 'prouver par une pièce', 'Tu dois justifier ton absence par un certificat.'],
      ['rendre compte de', 'expliquer (soutenu)', 'Cette théorie rend compte de la plupart des cas observés.'],
      ['excuser', 'pardonner, ou atténuer la faute', 'Expliquer un geste, ce n’est pas l’excuser.'],
    ]),
    table('sheet-pourquoi-mots', 'Cause, raison, motif, prétexte', ['Mot', 'Il désigne', 'Il va avec'], [
      ['la cause', 'ce qui produit un fait', 'un phénomène : la cause de l’incendie'],
      ['l’effet', 'ce que produit une cause', 'cause et effet'],
      ['la raison', 'ce qui justifie un choix', 'une personne : avoir ses raisons'],
      ['la raison pour laquelle', 'the reason why', 'jamais « la raison pourquoi »'],
      ['le motif', 'la raison d’agir déclarée', 'un dossier : le motif de votre visite'],
      ['le prétexte', 'une raison à la place de la vraie', 'un soupçon : un simple prétexte'],
      ['une cause (qu’on défend)', 'un idéal', 'se battre pour une cause'],
    ]),
  ]),
  sheet('sheet-savoir', 'Croire, savoir, le possible', ['croire ou savoir', 'le nécessaire et le contingent', 'a priori, a posteriori'], [
    teach('sheet-savoir-teach', 'Ce qu’on sait, ce qui devait être',
      'On peut croire le faux ; on ne sait que le vrai, et l’on doit pouvoir le montrer. Le nécessaire ne peut pas ne pas être ; le contingent aurait pu ne pas être. A priori : avant l’expérience ; a posteriori : à partir d’elle. Dans la vie courante, a priori veut souvent dire « à première vue ». Orthographe : on écrit traditionnellement a priori et a posteriori sans accent, et le nom un a priori reste invariable ; l’orthographe rectifiée de 1990 admet à priori. EN: belief and knowledge, necessary and contingent, a priori and a posteriori.'),
    table('sheet-savoir-croire', 'Croire et savoir', ['Expression', 'Sens', 'Exemple'], [
      ['croire que', 'tenir pour vrai, sans certitude', 'Je crois qu’il viendra, mais je n’en sais rien.'],
      ['savoir que', 'tenir pour vrai ce qui l’est, avec de quoi le montrer', 'Je le sais : j’ai vu les chiffres.'],
      ['une croyance infondée', 'sans fondement', 'Une croyance peut être sincère et fausse.'],
      ['une conviction', 'ce dont on est persuadé', 'Une conviction n’est pas une preuve.'],
      ['à ma connaissance', 'd’après ce que je sais', 'À ma connaissance, personne n’a répondu.'],
      ['en connaissance de cause', 'en sachant ce qu’on fait', 'Il a signé en connaissance de cause.'],
      ['faire la connaissance de', 'rencontrer quelqu’un', 'J’ai fait sa connaissance à Dakar.'],
      ['les connaissances', 'ce qu’on sait', 'Ses connaissances en chimie m’impressionnent.'],
    ]),
    table('sheet-savoir-necessaire', 'Le nécessaire et le contingent', ['Mot', 'Sens', 'Attention'], [
      ['nécessaire (philosophie)', 'qui ne peut pas être autrement', 'un triangle a trois côtés'],
      ['nécessaire (courant)', 'dont on a besoin', 'réservation nécessaire'],
      ['contingent', 'qui aurait pu ne pas être', '« contingent on » : dépendre de'],
      ['fortuit', 'dû au hasard', 'fortuné : riche, chanceux'],
      ['inévitable', 'qui ne pouvait pas ne pas arriver', 'réel ne veut pas dire inévitable'],
      ['le destin', 'tout serait écrit d’avance', 'une cause n’est pas un destin'],
    ]),
    table('sheet-savoir-apriori', 'A priori, a posteriori', ['Emploi', 'Sens', 'Registre'], [
      ['a priori (adverbe)', 'à première vue, en principe', 'courant'],
      ['un a priori, des a priori', 'un préjugé', 'courant'],
      ['a priori (philosophie)', 'avant l’expérience, sans elle', 'soutenu'],
      ['a posteriori (philosophie)', 'à partir de l’expérience', 'soutenu'],
      ['a posteriori (adverbe)', 'après coup', 'courant'],
    ]),
  ]),
  sheet('sheet-raisonner', 'Conditions, prémisses, sophismes', ['nécessaire ou suffisant', 'prémisses et conclusion', 'les défauts d’un raisonnement'], [
    teach('sheet-raisonner-teach', 'Juger un raisonnement avec les mots justes',
      `Une condition nécessaire : sans elle, rien. Une condition suffisante : avec elle, c’est sûr. Un raisonnement part de prémisses et arrive à une conclusion ; il est valide si la conclusion suit, et sa conclusion n’est vraie que si les prémisses le sont. « ${B223_REFRAME} » : ${ARGU_REF} t’a donné le sophisme et six pièges ; ici, tu nommes le défaut précis sans accuser personne. EN: ${B223_REFRAME_EN}`),
    table('sheet-raisonner-conditions', 'Les conditions', ['Tournure', 'Elle dit', 'Exemple'], [
      ['une condition nécessaire', 'sans elle, rien', 'L’eau est une condition nécessaire de la vie.'],
      ['une condition suffisante', 'avec elle, c’est sûr', 'Il suffit d’appuyer sur ce bouton.'],
      ['ne pas suffire à, pour', 'il faut encore autre chose', 'Un diplôme ne suffit pas à trouver un emploi.'],
      ['si et seulement si', 'nécessaire et suffisante', 'Accepté si et seulement si toutes les pièces sont jointes.'],
      ['la condition sine qua non', 'indispensable (soutenu)', 'La confiance est la condition sine qua non du travail d’équipe.'],
      ['il ne suffit pas de… encore faut-il', 'deux conditions', 'Il ne suffit pas d’être inscrit : encore faut-il avoir rendu ses livres.'],
    ]),
    table('sheet-raisonner-premisses', 'Prémisses et conclusion', ['Expression', 'Construction', 'Exemple'], [
      ['partir d’une prémisse', 'partir de', 'Tout repose sur une prémisse que personne n’a vérifiée.'],
      ['partir du principe que', '+ indicatif', 'Tu pars du principe que tout le monde a une voiture.'],
      ['conclure que', '+ indicatif', 'Elle conclut que la méthode doit changer.'],
      ['conclure à', '+ nom', 'Le jury a conclu à l’absence de faute.'],
      ['il s’ensuit que', 'un seul mot : s’ensuivre', 'Il s’ensuit que le projet coûtera plus cher.'],
      ['découler de', 'de', 'Cette conclusion ne découle pas de tes prémisses.'],
      ['valide / vrai', 'la forme / le contenu', 'Valide et pourtant faux, si une prémisse est fausse.'],
    ]),
    table('sheet-raisonner-defauts', 'Les défauts d’un raisonnement', ['Nom', 'Ce qui cloche', 'Exemple'], [
      ['un sophisme', 'un raisonnement faux pour tromper', 'déjà vu à la leçon 23 du B2'],
      ['un paralogisme', 'un raisonnement faux de bonne foi', 'une erreur de calcul sincère'],
      ['une pétition de principe', 'la conclusion est dans la prémisse', 'efficace puisqu’il marche'],
      ['un cercle vicieux', 'A par B, B par A', 'pas d’emploi sans expérience, et l’inverse'],
      ['une tautologie', 'répéter sous une autre forme', 'une loi est une loi'],
      ['une contradiction', 'dire une chose et son contraire', 'il s’est contredit deux fois'],
      ['la faille', 'l’endroit où le raisonnement cède', 'la conclusion ne suit pas'],
    ]),
  ]),
  sheet('sheet-definir', 'Définir, distinguer, prouver', ['les verbes de la distinction', 'les verbes de la preuve', 'évidence et evidence'], [
    teach('sheet-definir-teach', 'Séparer deux notions, peser une preuve',
      'Annonce le sens que tu prends, dis ce que le mot n’est pas, donne un cas qui sépare les deux, montre ce que la distinction change. Pour la preuve, choisis le verbe qui dit exactement ce qu’un élément permet : prouver, confirmer, corroborer, infirmer, réfuter demandent de montrer ; nier et démentir, seulement de dire non. EN: say which sense, what it is not, a case, what it changes; choose the verb of proof the evidence allows.'),
    table('sheet-definir-verbes', 'Les verbes de la distinction', ['Expression', 'Construction', 'Exemple'], [
      ['distinguer', 'A de B, ou entre A et B', 'Il faut distinguer le fait de son interprétation.'],
      ['confondre', 'A et B, ou A avec B (jamais entre)', 'Il ne faut pas confondre la solitude et l’isolement.'],
      ['établir une distinction', 'entre A et B', 'On établit une distinction entre deux notions.'],
      ['opposer', 'A à B, ou A et B', 'On oppose souvent la nature à la culture.'],
      ['au sens strict, au sens large', 'en tête ou en incise', 'Au sens strict, la tomate est un fruit.'],
      ['par définition', 'par le sens du mot', 'Par définition, un célibataire n’est pas marié.'],
      ['relever de', 'de + domaine', 'Cette question relève de la morale.'],
    ]),
    table('sheet-definir-preuve', 'Les verbes de la preuve', ['Verbe', 'Ce qu’il fait', 'Exemple'], [
      ['prouver, démontrer', 'établir que c’est vrai', 'Démontrer, c’est prouver par un raisonnement rigoureux.'],
      ['apporter la preuve de', 'fournir de quoi établir', 'C’est à celui qui affirme d’apporter la preuve.'],
      ['confirmer', 'aller dans le sens d’une hypothèse', 'Les nouvelles mesures confirment l’hypothèse.'],
      ['corroborer', 'appuyer par un élément indépendant', 'Deux témoins indépendants corroborent sa version.'],
      ['infirmer', 'montrer qu’une chose est fausse', 'Une seule observation contraire suffit à infirmer cette règle.'],
      ['réfuter', 'montrer qu’un argument est faux', 'Elle a réfuté l’objection point par point.'],
      ['nier, démentir', 'dire que c’est faux, sans montrer', 'Il a nié les faits, mais il ne les a pas réfutés.'],
      ['une évidence', 'ce qui saute aux yeux (≠ evidence : des preuves)', 'Une évidence n’a pas besoin de preuve.'],
    ]),
  ]),
  sheet('sheet-reponse', 'Répondre à une confusion', ['le plan', 'la liste de contrôle', 'toutes les paires'], [
    teach('sheet-reponse-teach', 'Nommer, montrer, reformuler',
      `${REFRAME} Une bonne réponse remercie, nomme chaque confusion, montre la distinction par un cas, dit ce qu’elle change à la conclusion, puis reformule la thèse avec le mot juste. Elle corrige les idées, jamais la personne. EN: ${REFRAME_EN}`),
    table('sheet-reponse-plan', 'Le plan', ['Partie', 'Tournure', 'Exemple'], [
      ['l’ouverture', 'merci, une vraie question', 'Merci pour ton message : il pose une vraie question.'],
      ['la confusion', 'tu confonds ici… et…', 'Tu confonds ici deux choses : croire et savoir.'],
      ['la distinction', 'une phrase, un cas', 'Ce que tu décris explique son geste ; cela ne le justifie pas.'],
      ['ce que cela change', 'faux, ou seulement insuffisant', 'Ce n’est pas faux ; c’est seulement insuffisant.'],
      ['la thèse reformulée', 'avec le mot juste', 'Avec cette distinction, ta thèse devient plus juste.'],
    ]),
    table('sheet-reponse-controle', 'La liste de contrôle', ['À vérifier', 'Comment'], [
      ['Trois confusions au moins', 'une par paragraphe'],
      ['Chaque distinction est montrée', 'un cas, un exemple'],
      ['Chaque distinction change quelque chose', 'faux, ou trop fort'],
      ['La thèse est reformulée', 'à la fin, avec le mot juste'],
      ['Les prépositions', 'distinguer de, confondre et, conclure à, suffire à'],
      ['Le ton', 'tu, bienveillant, sans moquerie'],
    ]),
    table('sheet-reponse-paires', 'Toutes les paires de la leçon', ['Paire', 'Ce qui les sépare'], [
      ['expliquer / justifier', 'les causes / la légitimité'],
      ['la cause / la raison', 'un phénomène / une personne'],
      ['croire / savoir', 'le faux possible / le vrai montré'],
      ['nécessaire / contingent', 'ne peut pas ne pas être / aurait pu ne pas être'],
      ['nécessaire / suffisant', 'sans elle, rien / avec elle, c’est sûr'],
      ['valide / vrai', 'la forme / le contenu'],
      ['sophisme / paralogisme', 'pour tromper / de bonne foi'],
      ['a priori / a posteriori', 'avant l’expérience / à partir d’elle'],
      ['distinguer / confondre', 'séparer / mêler'],
      ['réfuter / nier', 'montrer / dire non'],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8, ACT9, ACT10, ACT11, ACT12];

export const SECTIONS: LessonSection[] = ACTS.flatMap((a) => a.sections);

spreadMissions(SECTIONS, DRILL_LIST);

/** Every id the lesson can put in front of a learner. */
export const ITEM_IDS = [...new Set([...ALL_ROWS.map((r) => r.id), ...ACTS.flatMap((a) => a.imports)])];

const FLASHABLE = new Set([
  ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('flashcard')).map((r) => r.id),
  ...ITEM_IDS.filter((id) => !OWN.has(id) && !NOT_DECK_ABLE.includes(id)),
]);

/** One slice per act: that act's authored rows plus its imports, each id
 *  released ONCE, and only ids a flashcard drill can reach. */
export const DECK_TRANCHE: string[][] = (() => {
  const seen = new Set<string>();
  return ACTS.map((a, i) => [...(ROWS_BY_ACT[i] ?? []).map((r) => r.id), ...a.imports]
    .filter((id) => FLASHABLE.has(id) && !seen.has(id) && (seen.add(id), true)));
})();

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-c1-12-[a-z0-9-]+/g) ?? [])];

const ONE_TAKE = 'REQUIRED FOR THE EAR MISSION: ONE TAKE, lines in authored order, at natural C1 speed; the lines are hidden, so the take must be continuous.';
const TRAP = 'The audio step plays each card’s CORRECT sentence. Six lines, one voice, plainly and at the same pace. The wrong versions in promptSound are NEVER spoken.';
const TEXTE = 'One voice, read as written, at a natural reading pace: the instruction sentence first, then the text itself after a short pause.';
const CARDS = 'Four cards, one coach voice, neutral and clear; each card’s French line read once, unhurried.';
const REC_DESC: Record<string, string> = {
  'rec-c1-12-soiree': 'Mireille’s write-up of the evening (act 1), ONE female Québécoise voice, one take, warm and lightly amused, like a newsletter read aloud. The quoted line of Arnaud a little slower; the last sentence with a smile.',
  'rec-c1-12-hugo': 'Hugo and Soraya at the office coffee break (act 2), two voices, one take: Hugo tired and worried, Soraya calm and precise. Québec accents welcome.',
  'rec-c1-12-expliquer-cartes': `The four expliquer / justifier cards (act 2). ${CARDS}`,
  'rec-c1-12-piege-expliquer': TRAP,
  'rec-c1-12-expliquer-ecoute': `${ONE_TAKE} Eight lines, ONE VOICE, as someone thinking aloud about a colleague’s behaviour: even, reflective.`,
  'rec-c1-12-texte-a2': `The reader’s letter to a magazine (act 2). ${TEXTE} A male voice, courteous and a little stiff.`,
  'rec-c1-12-ines': 'Inès and Arnaud on the phone (act 3), two voices, one take: Inès in a garage waiting room, a little sheepish; Arnaud amused. Light garage ambience on her side.',
  'rec-c1-12-texte-a3': `The radio news brief (act 3). ${TEXTE} Read like a local radio newsreader: brisk and neutral.`,
  'rec-c1-12-radio-savoir': `${ONE_TAKE} EIGHT VOICES, one per line, as eight listeners phoning a radio show: varied ages and accents (Québec, France, Belgium, Senegal), each line slightly telephone-filtered. Lines 3 and 4 thoughtful; line 8 confident.`,
  'rec-c1-12-savoir-cartes': `The four croire / savoir cards (act 4). ${CARDS} Card two quotes a phrase of lesson 6 in C1: read it at the same pace.`,
  'rec-c1-12-piege-savoir': TRAP,
  'rec-c1-12-texte-a4': `The forum exchange (act 4). ${TEXTE} Two voices for Lou and Karim; the instruction by a neutral third voice.`,
  'rec-c1-12-train': 'Fatou and Édouard on the train (act 5), two voices, one take: Fatou with a Senegalese accent, warm and amused; Édouard Québécois, romantic. A soft train rumble under the voices.',
  'rec-c1-12-necessaire-cartes': `The four nécessaire / contingent cards (act 5). ${CARDS}`,
  'rec-c1-12-necessaire-ecoute': `${ONE_TAKE} Eight lines, ONE VOICE, a philosophy teacher giving examples in class: clear, unhurried, with a short pause between lines. A Belgian accent welcome for line 2.`,
  'rec-c1-12-texte-a5': `Noémie’s blog post (act 5). ${TEXTE} A female voice with a Swiss accent, intimate and light.`,
  'rec-c1-12-bourse': 'The grant rules (act 6), ONE voice, one take, read like an official text: neutral, each article announced by its number.',
  'rec-c1-12-piege-conditions': TRAP,
  'rec-c1-12-texte-a6': `The job advertisement (act 6). ${TEXTE} A Belgian voice, businesslike.`,
  'rec-c1-12-velos': 'Inès and Guillaume in an office (act 7), two voices, one take: Inès enthusiastic, Guillaume kind but exacting. Paper sounds welcome.',
  'rec-c1-12-premisses-cartes': `The four premise / conclusion cards (act 7). ${CARDS}`,
  'rec-c1-12-texte-a7': `The reader’s letter on the parking (act 7). ${TEXTE} An older male voice from Lyon, sure of himself.`,
  'rec-c1-12-radio-sophismes': `${ONE_TAKE} FOUR VOICES as a lively radio debate: lines 1 and 3 a confident guest, line 2 a young caller, lines 4, 5 and 6 the host, lines 7 and 8 a calm second guest. Natural overlap is NOT allowed (one voice at a time), but the pace is quick.`,
  'rec-c1-12-sophismes-cartes': `The four flaw cards (act 8). ${CARDS} Card one names lesson 23 in B2: read it as a reference, not stressed.`,
  'rec-c1-12-piege-sophismes': TRAP,
  'rec-c1-12-texte-a8': `The advertising leaflet (act 8). ${TEXTE} Read with a light advertising enthusiasm, never mocking: the learner must find the flaws in the words.`,
  'rec-c1-12-annonce': 'Hugo and Mireille at a café table (act 9), two voices, one take: relaxed planning, Québec accents. Café ambience, low.',
  'rec-c1-12-apriori-ecoute': `${ONE_TAKE} Eight lines, TWO VOICES alternating (odd lines a woman, even lines a man), as overheard at work and in a seminar: lines 1, 2, 6 and 7 everyday, lines 3, 4, 5 and 8 a little more formal.`,
  'rec-c1-12-texte-a9': `Hugo’s team email (act 9). ${TEXTE} A friendly male voice.`,
  'rec-c1-12-solitude': 'The municipal magazine article (act 10), ONE voice, one take, a measured female journalist; the last sentence slightly slower.',
  'rec-c1-12-definir-cartes': `The four distinction cards (act 10). ${CARDS}`,
  'rec-c1-12-texte-a10': `The museum glossary (act 10). ${TEXTE} A museum-guide voice, precise, Brussels accent welcome.`,
  'rec-c1-12-rumeur': 'Édouard and Soraya in a cafeteria (act 11), two voices, one take: Édouard conspiratorial and lowering his voice, Soraya patient and dry. Cafeteria ambience, low.',
  'rec-c1-12-piege-preuve': TRAP,
  'rec-c1-12-texte-a11': `The news dispatch (act 11). ${TEXTE} A newsreader voice, neutral.`,
  'rec-c1-12-modele': 'Fatou’s reply to Lucien on the blog (act 12), ONE female voice with a Senegalese accent, one take, kind and precise; Lucien’s quoted message in a slightly flatter tone.',
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'C1 · LEÇON 12',
  intro: 'At B2 you learned to argue and to spot six fallacies. At C1 you need the words with which educated speakers talk about ideas, and each comes with a neighbour it is easily confused with. This lesson separates explaining from justifying, a cause from a reason, believing from knowing, the necessary from the contingent, a necessary condition from a sufficient one, a valid argument from a true conclusion, a sophism from an error made in good faith, a priori from a posteriori, and the verbs that prove, confirm, disprove and refute from those that merely deny. It ends with a 250 to 350 word reply to a reader who confuses several of these pairs.',
  skill: 'CE',
  grammarAssumed: [NOMINAL_UNIT, ACADEMIQUE_UNIT, ARGU_UNIT, CRITIQUE_UNIT, PERSUADER_UNIT],
  grammarIntroduced: [
    'Expliquer against justifier (and excuser, rendre compte de, se justifier, the documentary justifier une absence), with their word families',
    'Cause against raison, motif and prétexte; la raison pour laquelle; la cause one fights for',
    'Croire against savoir; croyance, conviction, certitude and connaissance in all its senses (à ma connaissance, en connaissance de cause, faire la connaissance de, les connaissances)',
    'The necessary against the contingent, the fortuitous and the inevitable; the everyday nécessaire; « contingent on » rendered as dépendre de',
    'Necessary and sufficient conditions: il suffit de, ne pas suffire à, si et seulement si, la condition sine qua non, il ne suffit pas de… encore faut-il',
    'Premises and conclusion: partir du principe que, conclure que / conclure à, il s’ensuit que, découler de; validity against truth',
    'Reasoning flaws beyond the six of B2: sophisme against paralogisme, pétition de principe, cercle vicieux, tautologie, contradiction, la faille',
    'A priori and a posteriori in their philosophical and everyday senses (en principe, un a priori, après coup)',
    'The verbs of distinction with their prepositions: distinguer A de B, confondre A et B or avec B, établir une distinction, opposer A à B, au sens strict / large, par définition, relever de',
    'The verbs of proof: prouver, démontrer, apporter la preuve de, confirmer, infirmer, corroborer, réfuter, nier, démentir; une évidence against « evidence »',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Au B2, tu as appris à argumenter et à repérer six sophismes. Au C1, il te faut les mots avec lesquels on parle des idées, et chacun a un voisin avec lequel on le confond. Cette leçon sépare expliquer et justifier, la cause et la raison, croire et savoir, le nécessaire et le contingent, une condition nécessaire et une condition suffisante, un raisonnement valide et une conclusion vraie, un sophisme et une erreur de bonne foi, a priori et a posteriori, et les verbes qui prouvent de ceux qui nient. À la fin, tu réponds en 250 à 350 mots à un lecteur qui confond plusieurs de ces paires.',
    minutes: 170,
    difficulty: 4,
    glyph: 'A≠B',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: VOCABULAIRE_IDEES_TERMS,
  sections: SECTIONS,
  itemIds: ITEM_IDS,
  version: 1,
  audio: {
    defaultLang: 'fr-FR',
    speeds: [1, 0.65],
    // Inert (B1 build log, 2026-09-25). Kept, as every lesson keeps it.
    coachVoice: 'coach-fr-FR',
    recorded: REC_IDS.map((id) => ({ id, desc: REC_DESC[id] ?? `${id}: missing studio brief` })),
  },
};

LESSON.overview!.screens = ACTS.reduce((n, a) => n + a.act.estScreens, 0);

/** Named so a batch, a merge and a test agree on what is named, not released. */
export const NAMED_NOT_RELEASED = [...NOT_DECK_ABLE];
export { IMPORTED, NOT_SPEAKABLE, LECTURE_MODELE, MESSAGE_BASTIEN, dicteeFor };
export const lessonWithoutTask = (): Lesson => LESSON;
