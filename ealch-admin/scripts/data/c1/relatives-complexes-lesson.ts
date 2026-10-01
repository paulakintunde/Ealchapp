// c1.04.l1 « Les relatives complexes »: the lesson.
// DRAFT, to B1-BUILD-PLAYBOOK.md (grammar mission journey, as b2.06) under
// the C1 rules of C1-BUILD-LOG.md. Structural model: b2.06
// (`../b2/subjonctif-indicatif-*`): 11 acts, a « dans un texte » beat closing
// acts 2 to 10, one quiz of 12 rounds × 8, five sheets, a written task.
//
// Not imported, not merged into seed.json, not published. `task` is in the
// schema, so the lesson validates with it in place (as b2.06 does).
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions · what the act releases)
// ══════════════════════════════════════════════════════════════════════════
//
//   Rhythm per act (C1): meet (scene, story, reading or listening), name
//   (cardDeck, tapTable, examples), build (groupDrill, gated), choose (a
//   drill where MEANING picks the form), trap (trapDrill stepped or
//   commonErrors), then from act 2 on the form INSIDE A TEXT of 55 to 90
//   words, then the gated act check. qui / que / dont / où / lequel are NOT
//   re-taught: lessons 11 to 13 in B1 own them.
//
//    1  Le bon crochet              6   the problem, ONE recap of lessons 11,
//                                        12, 13 in B1 and 6 in B2
//    2  Une partie du tout          7   partitive dont, parmi lesquels
//    3  Ce à quoi, sans quoi        8   preposition + quoi, sans / faute de
//                                        / après / moyennant quoi
//    4  Un endroit où dormir        8   relative + infinitive, de quoi + inf.
//    5  À quel nom ?                8   attachment in long noun groups
//    6  Lequel, pour lever le doute 8   lequel subject, its limit, repairs,
//                                        auquel cas
//    7  Avec ou sans virgules       7   explicative / déterminative as meaning
//    8  Où, ou dans lequel          7   abstract antecedents, là où
//    9  Des relatives emboîtées     7   nested relatives by register; de +
//                                        dont
//   10  Alléger la chaîne           8   lightening; au cours duquel and co.
//   11  Ta notice                   11  model, plan, role play, TASK, quiz
//
//   TOTAL 85 missions, 11 acts. Corpus: 162 authored rows (.2000-.2191 used, in blocks .2000-.2189) in
//   eleven blocks plus 19 reused rows (lessons 11, 12, 13 in B1, lesson 6
//   in B2, lessons 20, 21, 24 in C1, and four Postgres-only legacy c1 rows),
//   released act by act through `deckTranche`. Quiz: 12 rounds of 8 (one
//   per act 1 to 10, a recycling round, an exam-format round). Chapter
//   artwork: `relatives-complexes-image-prompts.md`, eleven prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Une relative s’accroche à un nom : sache lequel, et ce qu’elle lui
//   ajoute. »
//   EN: A relative clause hooks onto a noun: know which one, and what it
//   adds to it.
//
//   ONE METAPHOR, LE MOBILE: each piece of a hanging mobile hangs from one
//   arm by its own thread. Rejected candidates and why: corpus §E.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    partitive dont; preposition + quoi; relative + infinitive and de
//           quoi + infinitive; attachment ambiguity and its repairs; lequel
//           as subject; explicative / déterminative as meaning; où against
//           preposition + lequel with abstract antecedents; nested relatives
//           by register; « c’est de cela dont »; lightening chains.
//   QUOTES  the reframes of lessons 11, 12, 13 in B1 and 6 in B2,
//           re-exported from their corpus files, never retyped.
//   LEAVES  qui / que, dont, où, lequel and duquel AS FORMS to lessons 11 to
//           13 in B1; the subjunctive in relatives to lesson 6 in B2 (recap
//           only); celui de / celle que, ce dernier and ambiguous PRONOUNS to
//           c1.05 (not cited: not yet on the trail).
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   C1: unsimplified French, English authored on every learner string (an
//   `en` field or a final `EN: `), never on an answer. tu in every
//   instruction. Every `say` is French. No spaced « ? » or « ! » in any
//   scene or story bubble. Curly ’ in every authored string; the scenario
//   quotes no corpus row. Other lessons cited by trail position in words,
//   only positions that exist (B1, B2, C1 lessons 1, 20, 21, 24). Tag
//   « C1 · LEÇON 4 », unpadded. Mission answer slots spread by
//   `spreadMissions()`, the quiz by `spreadSlots()`; no `why` names a slot.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. NORM VERDICTS. « C’est de cela dont il s’agit » is taught as a
//      pleonasm to avoid in careful writing, attributed to « les guides de
//      bon usage, en France comme au Québec »; « que je crois qui » is
//      labelled familiar speech (recognise, never write). Keep both lines?
//      PRE-REVIEW 2026-10-01: « c’est de cela dont » is settled by the
//      Académie (DNP0650: pleonasm and grammatical fault) and the BDL
//      (« dont ne doit pas être utilisé avec un antécédent précédé de la
//      préposition de »); the lesson's « à éviter » is, if anything, mild.
//      « Que je crois qui »: no online norm source found with an exact
//      register label; « familier, à reconnaître » kept (reviewer's call).
//   2. LEQUEL SUBJECT, production or recognition: SETTLED by the norm, not
//      left open. The BDL (« Le pronom relatif lequel ») gives lequel
//      subject as standard, explicative only, always after a comma, used to
//      lift an ambiguity in formal writing. So production in WRITTEN,
//      formal French stays as drafted; the task accepts it, never requires
//      it (graderNotes), and speech keeps qui or a split sentence.
//   3. FOUR POSTGRES-ONLY LEGACY ROWS are reused (corpus §A.3); two keep a
//      straight apostrophe until the decision 13 typography edit at import.
//   4. A PUBLISHED B1 ROW reads oddly against act 8: fr.b1.pronoms-
//      essentiels.1590 « Le samedi matin est le moment auquel je peux
//      venir. » (usual: « le moment où »). Not reused here; worth a text
//      edit at the next B1 touch?
//   5. FOUR tapTables would be allowed (decision 16); this lesson uses three.
//   6. `Lesson.version` is 1 (a new lesson). 'coach-fr-FR' is inert, kept.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, PG_ROWS, dicteeFor,
  LECTURE_MALLE, LECTURE_CHRONIQUE, LECTURE_PAPIER, LECTURE_MODELE, NOTES_GARE,
  TEXTE_A2, TEXTE_A3, TEXTE_A4, TEXTE_A5, TEXTE_A6, TEXTE_A7, TEXTE_A8, TEXTE_A9, TEXTE_A10,
  B111_REFRAME, B111_REFRAME_EN, B112_REFRAME, B112_REFRAME_EN, B113_REFRAME, B113_REFRAME_EN,
  B206_REFRAME, B206_REFRAME_EN,
  QUI_QUE_UNIT, DONT_OU_UNIT, LEQUEL_UNIT, SUBJ_IND_UNIT,
  QUI_QUE_REF, DONT_OU_REF, LEQUEL_REF, SUBJ_IND_REF, B1_RANGE_REF,
} from './relatives-complexes-corpus.ts';
import { RELATIVES_COMPLEXES_TERMS } from './relatives-complexes-terms.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  HELPERS
 * ══════════════════════════════════════════════════════════════════════════ */

type Sec<T extends LessonSection['type']> = Extract<LessonSection, { type: T }>;
type GItem = NonNullable<SoundGroup['items']>[number];
type Check = NonNullable<SoundGroup['check']>;
type ActDef = { act: LessonAct; sections: LessonSection[]; imports: string[] };

const AUDIO: SectionAudio = { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] };
const REC = (recordingId: string): SectionAudio => ({ mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId });

type SrcItem = { id: string; fr: string; en: string; ipa?: string; respell?: string; drills?: string[] };
const SEED = new Map((seed as unknown as { items: SrcItem[] }).items.map((i) => [i.id, i]));
const PG = new Map<string, SrcItem>(Object.values(PG_ROWS).map((r) => [r.id, r]));
const ROW = new Map<string, SrcItem>(ALL_ROWS.map((r) => [r.id, r as SrcItem]));
const OWN = new Set(ALL_ROWS.map((r) => r.id));

/** An item's fr/en, from this corpus, the seed, or the Postgres-only rows.
 *  Throws on a typo, so no section can name an id that does not exist. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id) ?? PG.get(id);
  if (!r) throw new Error(`c1.04: no item ${id}`);
  return r;
}
const fr = (id: string) => src(id).fr;
const en = (id: string) => src(id).en;

function ipaOf(id: string): string {
  const r = ROW.get(id);
  if (!r?.ipa) throw new Error(`c1.04: no authored ipa on ${id}`);
  return r.ipa;
}
/** The authored row's respelling, BRACKETED for a section. */
function rsOf(id: string): string {
  const r = ROW.get(id);
  if (!r?.respell) throw new Error(`c1.04: no authored respell on ${id}`);
  return `[${r.respell}]`;
}

const PE1 = (n: number) => `fr.b1.pronoms-essentiels.${n}`;
const OA2 = (n: number) => `fr.b2.opinions-et-avis.${n}`;

const it = (id: string, note?: string): GItem => ({ fr: fr(id), itemId: id, en: en(id), ...(note ? { note } : {}) });
const ln = (id: string) => ({ fr: fr(id), en: en(id) });
const ex = (id: string, note: string) => ({ fr: fr(id), en: en(id), note });
const chk = (q: string, opts: string[], correct: number, why: string): Check => ({ q, opts, correct, why });
const grp = (label: string, items: GItem[], check: Check): SoundGroup => ({ label, items, check });
const ctl = (label: string, q: string, opts: string[], correct: number, why: string): SoundGroup =>
  ({ label, items: [], check: { q, opts, correct, why } });

/** The act check: control pages only, gated, before the checkpoint. */
function actCheck(id: string, title: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title, frSub: 'Le point avant la pause',
    groups, audio: AUDIO, say: `Petit bilan. ${REFRAME}`, terms,
  };
}

/** THE « IN A TEXT » BEAT that closes acts 2 to 10: one paragraph where the
 *  form has to be chosen or read, answers behind the modal. Same title each
 *  time, so a learner and a reviewer see the loop. */
function dansUnTexte(
  id: string, frSub: string, text: string, questions: { q: string; a: string }[], rec: string, terms: string[],
): Sec<'reading'> {
  return {
    type: 'reading', id, layer: 'core', questionsInModal: true,
    title: 'Dans un texte', frSub, text, questions,
    audio: REC(rec), say: REFRAME, terms,
  };
}

/* ── Quiz constructors (the quiz itself sits in act 11; each act adds its
 *  round to ROUNDS as it is written). `fold()` strips accents, commas,
 *  apostrophes, hyphens and spaces, so every typed answer turns on a word
 *  (dont / que, quoi / lequel, reçue / reçu), never on punctuation. */

type QQ = QuizQuestion;
type Round = NonNullable<Sec<'quiz'>['rounds']>[number];
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'errorSpot', q: 'Une forme ne va pas. Écris la phrase correcte. EN: One form is wrong; write the sentence correctly.', prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const ROUNDS: Round[] = [];
const DRILL_LIST: LessonDrill[] = [];
const TRIGGER_LIST: ErrorTrigger[] = [];

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1: LE BON CROCHET
 *
 *  Meet the problem: one « qui » in an invitation hangs on the wrong person.
 *  Then the ONE recap of the lessons this one builds on, rows reused by id.
 *  NO « ? » OR « ! » IN ANY BUBBLE.
 * ══════════════════════════════════════════════════════════════════════════ */

const A1_SCENE: Sec<'scene'> = {
  type: 'scene', id: 'a1-scene', render: 'screens', layer: 'core',
  title: 'Le carton d’invitation', frSub: 'Un « qui » de trop',
  setting: { place: 'Les Archives de Pont-Aurèle, le bureau des expositions', city: 'Pont-Aurèle', time: '9 h 10', ambience: 'des cartons d’archives, une malle de cuir ouverte, l’imprimeur au téléphone' },
  beats: [
    { kind: 'narration', text: 'Pont-Aurèle, aux Archives municipales. Samedi, on inaugure le fonds Ferland : quatre cents lettres qu’une vieille dame a classées pendant soixante ans. Tu relis le carton d’invitation avant de l’envoyer à l’imprimeur.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'Mathilde, l’archiviste', fr: 'L’imprimeur attend le texte avant dix heures.', en: 'The printer needs the text before ten.', respell: '[lehⁿ-pree-MUHR | a-TAHⁿ luh TEKST | a-vahⁿ dee-ZUHR]', stage: 'Elle a déjà son manteau.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'you', speaker: 'Toi', fr: 'Il ne reste qu’une phrase, celle sur le petit-fils et les lettres.', en: 'Only one sentence is left, the one about the grandson and the letters.', respell: '[eel nuh rest KÜNN FRAHZ | sel sür luh puh-tee-FEESS | ay lay LETR]', stage: 'Tu sais que Mme Ferland a tout classé elle-même.', size: 'md', audio: AUDIO },
    { kind: 'narration', text: 'Le journaliste de la Gazette recopiera la phrase telle quelle. Le petit-fils, lui, n’a jamais touché aux lettres : il vient parler au nom de sa grand-mère.', size: 'md', audio: AUDIO },
    {
      kind: 'choice', prompt: 'Quelle phrase envoies-tu à l’imprimeur ?', size: 'lg',
      options: [
        { fr: fr(E(2000)), respell: rsOf(E(2000)), en: en(E(2000)), outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(2001)), respell: rsOf(E(2001)), en: en(E(2001)), outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Lundi, la Gazette écrit que Mme Ferland a classé ses lettres elle-même. Le petit-fils t’envoie un mot de remerciement.',
        breaks: 'Lundi, la Gazette félicite le petit-fils pour soixante ans de classement. Il appelle les Archives, gêné : ce travail était celui de sa grand-mère.',
      },
    },
    {
      kind: 'break', heading: 'Deux noms, un seul qui',
      body: 'Qui ne dit ni genre ni nombre : il peut tenir au petit-fils ou à Mme Ferland. Laquelle ne reprend qu’un nom féminin. La question du C1 : à quel nom tient la relative ? EN: qui can hang on either noun; laquelle can only be Mrs Ferland.',
      wrong: { fr: fr(E(2000)), ipa: ipaOf(E(2000)), respell: rsOf(E(2000)), en: en(E(2000)) },
      right: { fr: fr(E(2001)), ipa: ipaOf(E(2001)), respell: rsOf(E(2001)), en: en(E(2001)) },
      coach: `${REFRAME} EN: ${REFRAME_EN}`, size: 'lg', audio: AUDIO,
    },
    { kind: 'resolve', text: `Au B1, ${B1_RANGE_REF} t’ont donné les pronoms : qui, que, dont, où, lequel. Ici, tu apprends à quel nom une relative s’accroche, ce qu’elle lui ajoute, et les formes que l’écrit soigné réserve au C1.`, size: 'md' },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['accroche', 'lequel'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals', id: 'a1-goals', layer: 'core', title: 'À la fin de cette leçon',
  goals: [
    { t: 'Construire les relatives du C1', s: 'Actes 2 à 4 : dont deux, ce à quoi, un endroit où dormir' },
    { t: 'Savoir à quel nom tient une relative', s: 'Actes 5 et 6 : l’indice, puis lequel pour lever le doute' },
    { t: 'Choisir le sens et le registre', s: 'Actes 7 à 9 : les virgules, où ou dans lequel, les relatives emboîtées' },
    { t: 'Écrire une notice de 250 à 350 mots', s: 'Actes 10 et 11 : alléger, puis ta mission' },
  ],
  audio: AUDIO, say: REFRAME,
};

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a1-lecture', layer: 'core', questionsInModal: true,
  title: 'La malle de Mme Ferland', frSub: 'Lis, et regarde à quoi chaque relative s’accroche',
  text: LECTURE_MALLE,
  glossary: [
    { word: 'malle', en: 'trunk', note: 'Un grand coffre de voyage, en bois ou en cuir.' },
    { word: 'confident', en: 'confidant', note: 'Celui à qui l’on confie ses secrets ; ici, la lettre elle-même.' },
    { word: 'cachet', en: 'postmark, stamp', note: 'La marque de la poste sur une enveloppe.' },
  ],
  questions: [
    { q: 'Global : que reçoivent les Archives, et à quelle condition ?', a: 'Les quatre cents lettres de la famille Ferland, pour qu’elles soient lues et non exposées : c’est pourquoi Mme Ferland a refusé un musée.' },
    { q: 'Détail : combien de lettres ont été écrites à Paris ?', a: 'Une trentaine : « dont une trentaine » prend une partie des quatre cents.' },
    { q: 'Inférence : qui a classé les lettres, d’après le troisième paragraphe ?', a: 'Mme Ferland : « laquelle » est féminin, il ne peut pas reprendre le petit-fils.' },
    { q: 'Inférence : « les lettres qui portent un cachet rouge » et « les lettres, qui ont voyagé dans une malle » : laquelle des deux relatives parle de toutes les lettres ?', a: 'La seconde, entre virgules : toutes ont voyagé dans la malle. La première trie : seulement celles qui ont un cachet rouge.' },
  ],
  audio: REC('rec-c1-04-malle'), say: REFRAME, terms: ['accroche', 'explicative'],
};

/** The ONE recap: one group per lesson this one builds on, rows reused by id. */
const A1_RAPPEL: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a1-rappel', layer: 'core', size: 'lg',
  title: 'Ce que tu sais déjà', frSub: 'Quatre leçons, un rappel',
  groups: [
    grp(Cap(QUI_QUE_REF), [
      it(PE1(1150), 'entre virgules : un ajout'),
      it(PE1(1156), 'sans virgule : la relative trie'),
      it(PE1(1155), 'la règle du B1'),
    ], chk('« Ma sœur, qui habite à Sherbrooke, arrive vendredi. » Combien de sœurs as-tu, sans doute ?',
      ['une seule', 'plusieurs'], 0,
      `Les virgules ajoutent un détail, elles ne trient pas. ${Cap(QUI_QUE_REF)} disait : « ${B111_REFRAME} » EN: the commas add, they do not sort.`)),
    grp(Cap(DONT_OU_REF), [
      it(PE1(1221), 'dont : parler de'),
      it(PE1(1265), 'dont : le fils de la femme'),
      it(PE1(1307), 'où : un moment'),
    ], chk('« La femme dont le fils est médecin » : de qui est le fils ?',
      ['de la femme', 'du médecin'], 0,
      `Dont reprend « de la femme ». ${Cap(DONT_OU_REF)} disait : « ${B112_REFRAME} » EN: ${B112_REFRAME_EN}`)),
    grp(Cap(LEQUEL_REF), [
      it(PE1(1472), 'à côté duquel'),
      it(PE1(1489), 'la raison pour laquelle'),
      it(PE1(1524), 'ce dont : pas de nom devant'),
    ], chk('« Le bâtiment à côté duquel nous garons le camion » : pourquoi pas dont ?',
      ['à côté de est une locution : duquel', 'dont ne va jamais avec un bâtiment'], 0,
      `Après une locution qui finit par de, duquel. ${Cap(LEQUEL_REF)} disait : « ${B113_REFRAME} » EN: ${B113_REFRAME_EN}`)),
    grp(Cap(SUBJ_IND_REF), [
      it(OA2(1864), 'une colocataire cherchée'),
      it(OA2(1883), 'le seul : un jugement'),
    ], chk('« Je cherche une colocataire qui sache cuisiner. » Cette colocataire existe-t-elle déjà ?',
      ['pas encore : tu la cherches', 'oui, tu la connais'], 0,
      `Le mode de la relative dit si la chose existe. « ${B206_REFRAME} » Cette leçon ne revient pas sur le mode. EN: ${B206_REFRAME_EN}`)),
  ],
  audio: AUDIO, say: REFRAME, terms: ['accroche'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a1-usages', layer: 'core', title: 'Là où la relative coûte cher',
  cases: [
    { situation: 'Tu rédiges un compte rendu de séance', fr: fr(E(2010)), en: en(E(2010)) },
    { situation: 'Tu lis une clause de bail', fr: fr(E(2011)), en: en(E(2011)) },
    { situation: 'Tu écris une consigne officielle', fr: fr(E(2012)), en: en(E(2012)) },
    { situation: 'Tu organises un déménagement au travail', fr: fr(E(2013)), en: en(E(2013)) },
  ],
  audio: AUDIO, say: REFRAME, terms: ['accroche', 'registre'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le carton', '« Le petit-fils de Mme Ferland, qui a classé les lettres… » Le lecteur sait-il qui a classé ?',
    ['non, deux lectures sont possibles', 'oui, c’est toujours le dernier nom'], 0,
    'Qui ne porte ni genre ni nombre : rien ne tranche. EN: nothing in qui decides.'),
  ctl('La réparation', 'Qu’est-ce qui lève le doute dans la version envoyée ?',
    ['les virgules', 'laquelle, féminin', 'le verbe prendra'], 1,
    'Laquelle porte le féminin : il ne reprend que Mme Ferland. EN: laquelle carries the feminine.'),
  ctl('Le C1', 'Au C1, quelle est la question principale devant une relative ?',
    ['quel pronom choisir', 'à quel nom elle tient, et ce qu’elle ajoute'], 1,
    'Les pronoms sont acquis au B1 ; reste le nom et le sens. EN: the noun and the meaning.'),
], ['accroche']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le bon crochet',
    opener: {
      line: 'Un seul « qui » envoie le mérite à la mauvaise personne : ici tu découvres la question du C1, à quel nom une relative s’accroche. EN: One « qui » gives the credit to the wrong person: here you meet the C1 question, which noun a relative clause hooks onto.',
      imageRef: 'lessons/relatives-complexes/act01.jpg',
    },
    sections: [],
    milestone: 'Tu vois qu’une relative peut tenir à deux noms, et tu sais ce que le B1 t’a déjà donné. EN: You can see a relative clause may hang on two nouns, and you know what B1 already gave you.',
    estScreens: 34, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_RAPPEL, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

ROUNDS.push({
  id: 'r1-accroche', label: 'Le bon crochet', targets: ['accroche-ignoree'],
  questions: [
    mc('« Le petit-fils de Mme Ferland, qui a classé les lettres, prendra la parole. » Qui a classé les lettres ?', ['on ne peut pas le savoir', 'forcément Mme Ferland', 'forcément personne'], 0, 'Qui ne porte ni genre ni nombre : les deux lectures restent ouvertes. EN: qui does not decide.', 'a1-scene'),
    mc('« Le petit-fils de Mme Ferland, laquelle a classé les lettres, prendra la parole. » Qui a classé les lettres ?', ['Mme Ferland', 'le petit-fils'], 0, 'Laquelle est féminin : Mme Ferland. EN: laquelle is feminine.', 'a1-scene'),
    mc('« Le fonds compte quatre cents lettres, dont une trentaine écrites à Paris. » Combien de lettres ont été écrites à Paris ?', ['une trentaine', 'quatre cents', 'aucune'], 0, 'Dont prend une partie des quatre cents. EN: part of the four hundred.', 'a1-lecture'),
    tI('Complète la phrase du texte.', 'Les chercheurs y trouveront de … nourrir plusieurs thèses.', fr(E(2005)), 'De quoi + infinitif : assez de matière pour. EN: enough to.', 'a1-lecture', ['quoi', 'de quoi']),
    mc('« Les lettres qui portent un cachet rouge viennent de l’étranger. » Toutes les lettres ont-elles un cachet rouge ?', ['non, seulement certaines', 'oui, toutes'], 0, 'Sans virgules, la relative trie. EN: no commas, the clause sorts.', 'a1-lecture'),
    eS('C’est ce que Mme Ferland tenait le plus.', fr(E(2004)), 'Tenir à : ce à quoi. EN: tenir à needs ce à quoi.', 'a1-lecture'),
    lC('Écoute. Que propose la salle de lecture ?', fr(E(2006)), ['un endroit pour travailler au calme', 'un endroit pour dormir', 'une exposition sous vitre'], 0, 'Où travailler : un lieu pour travailler. EN: a place to work.', 'a1-lecture'),
    mc('Au C1, devant une relative, que vérifies-tu d’abord ?', ['à quel nom elle s’accroche, et ce qu’elle lui ajoute', 'si elle commence par qui ou par que'], 0, `${REFRAME} EN: ${REFRAME_EN}`, 'a1-rappel'),
  ],
});
DRILL_LIST.push({ id: 'd-accroche', title: 'À quel nom ?', format: 'flashcard' as const, coach: 'Lis chaque phrase et dis à quel nom la relative s’accroche. EN: say which noun each clause hangs on.', items: [E(2000), E(2001), E(2003), E(2004), E(2007), E(2008)], audio: AUDIO });
TRIGGER_LIST.push({ id: 'accroche-ignoree', description: 'Reads or writes a relative clause without checking which noun it hangs on, so an ambiguous qui sends the meaning to the wrong person.', detectOn: ['a1-scene', 'a1-lecture', 'a1-check', 'a11-mission'], drill: 'd-accroche', retest: 'd-accroche' });

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2: UNE PARTIE DU TOUT
 *
 *  Partitive dont, past lesson 12 in B1 (dont as the de complement): a
 *  number, a fraction or a quantifier after dont, with or without a verb;
 *  parmi lesquels; the two redundancies.
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_HISTOIRE: Sec<'story'> = {
  type: 'story', id: 'a2-histoire', layer: 'core',
  title: 'L’inventaire du lundi', frSub: 'Mathilde compte, tu écris',
  setting: 'Les Archives de Pont-Aurèle, le lundi après l’inauguration. Mathilde et toi rédigez l’inventaire du fonds Ferland.',
  bubbles: [
    { from: 'narrator', fr: 'Les cartons s’empilent dans le couloir. Mathilde dicte, tu tapes.', en: 'The boxes are piling up in the corridor. Mathilde dictates, you type.' },
    { from: 'user', fr: fr(E(2003)), en: en(E(2003)) },
    { from: 'coach', fr: 'Dont prend une partie des quatre cents, et le verbe peut manquer.', en: 'Dont takes part of the four hundred, and the verb can be left out.', warn: 'Dont + nombre, sans verbe' },
    { from: 'user', fr: fr(E(2017)), en: en(E(2017)) },
    { from: 'coach', fr: 'La plupart des cartons : le verbe se met au pluriel.', en: 'Most of the boxes: the verb goes in the plural.', warn: 'La plupart : pluriel' },
    { from: 'user', fr: 'Six bénévoles sont venus, dont j’en connaissais trois.', en: 'Six volunteers came, three of whom I knew (with an extra en).' },
    { from: 'coach', fr: 'Dont dit déjà « de ces bénévoles ». Supprime en : dont je connaissais trois.', en: 'Dont already says « of these volunteers ». Drop en.', warn: 'Jamais dont et en' },
  ],
  closing: { fr: 'Dont suivi d’un nombre : une part du groupe, et rien à répéter.', en: 'Dont followed by a number: part of the group, and nothing to repeat.' },
  audio: REC('rec-c1-04-inventaire'), say: REFRAME, terms: ['partitif'],
};

const A2_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a2-cartes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-dont',
  title: 'Dont et une quantité', frSub: 'Quatre façons de prendre une partie',
  hint: 'Quatre cartes. La dernière passe par une préposition.',
  audio: REC('rec-c1-04-partitif'), say: REFRAME, terms: ['partitif'],
  cards: [
    { head: 'Sans verbe', label: 'dont + nombre', fr: fr(E(2015)), sub: rsOf(E(2015)),
      body: 'Dont prend douze bénévoles parmi les trente. Le verbe manque, et la phrase est complète. EN: dont plus a number, no verb needed.' },
    { head: 'Avec un verbe', label: 'dont + nombre + verbe', fr: fr(E(2016)), sub: rsOf(E(2016)),
      body: `${Cap(DONT_OU_REF)} t’a donné dont pour un complément en de. Ici, deux de ses enfants : la relative a son propre verbe. EN: the clause can also have its own verb.` },
    { head: 'La plupart, certains, la moitié', label: 'les quantifieurs', fr: fr(E(2017)), sub: rsOf(E(2017)),
      body: 'Après dont la plupart, le verbe se met au pluriel. Dont certaines, dont la moitié, dont un tiers suivent le même modèle. EN: la plupart takes a plural verb.' },
    { head: 'Avec une préposition', label: 'parmi lesquels', fr: fr(E(2020)), sub: rsOf(E(2020)),
      body: 'Parmi demande lequel : parmi lesquels, parmi lesquelles, pour des choses comme pour des gens. EN: parmi takes lesquels, for things and people.' },
  ],
};

const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a2-construire', layer: 'core', size: 'lg',
  title: 'Une partie du groupe', frSub: 'Trois groupes, trois contrôles',
  groups: [
    grp('Sans verbe', [
      it(E(2015), 'douze parmi trente'),
      it(E(2018), 'y compris la plus ancienne'),
      it(E(2019), 'y compris moi'),
      it(E(2029), 'une salle parmi trois'),
    ], chk('« Toute l’équipe était là, dont moi. » Que veut dire dont moi ?',
      ['moi aussi, j’étais là', 'sauf moi', 'à cause de moi'], 0,
      'Dont moi : y compris moi. EN: me included.')),
    grp('Avec un verbe', [
      it(E(2016), 'deux de ses enfants'),
      it(E(2017), 'la plupart des cartons'),
      it(E(2021), 'certaines photos'),
      it(E(2022), 'la moitié du budget'),
    ], chk('« Les cartons, dont la plupart … encore fermés, attendent dans le couloir. »',
      ['sont', 'est'], 0,
      'La plupart des cartons : pluriel. EN: plural verb.')),
    grp('Dont, et rien d’autre', [
      it(E(2027), 'sans en'),
      it(E(2028), 'la moitié des romans'),
      it('fr.c1.strategies-de-comprehension.1801', 'le dernier dixième de l’échelle'),
      it('fr.c1.nuances-et-registres.048', 'il ne reste qu’un clocher de ces villages'),
    ], chk('« Il y avait six candidats, dont je connaissais trois. » Faut-il ajouter en ?',
      ['non, dont suffit', 'oui, dont j’en connaissais trois'], 0,
      'Dont dit déjà « de ces candidats ». EN: dont already does the job of en.')),
  ],
  audio: AUDIO, say: REFRAME, terms: ['partitif'],
};

const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a2-ecoute', layer: 'core', hideLines: true,
  title: 'Combien, parmi combien', frSub: 'Dix phrases, dix parts',
  lines: [
    ln(E(2015)), ln(E(2016)), ln(E(2017)), ln(E(2018)), ln(E(2019)),
    ln(E(2020)), ln(E(2021)), ln(E(2022)), ln(E(2027)), ln(E(2029)),
  ],
  questions: [
    { q: 'Première phrase : combien d’étudiants parmi les bénévoles ?', opts: ['douze', 'trente', 'aucun'], correct: 0, why: 'Dont douze étudiants : douze parmi les trente. EN: twelve of the thirty.' },
    { q: 'Deuxième phrase : combien d’enfants vivent à Montréal ?', opts: ['deux', 'trois'], correct: 0, why: 'Dont deux : deux sur trois. EN: two of three.' },
    { q: 'Quatrième phrase : la lettre la plus ancienne a-t-elle disparu ?', opts: ['oui', 'non'], correct: 0, why: 'Dont la plus ancienne : elle fait partie des lettres disparues. EN: it is among them.' },
    { q: 'Cinquième phrase : la personne qui parle était-elle présente ?', opts: ['oui', 'non'], correct: 0, why: 'Dont moi : y compris moi. EN: me included.' },
    { q: 'Neuvième phrase : combien de candidats la personne connaissait-elle ?', opts: ['trois', 'six', 'aucun'], correct: 0, why: 'Dont je connaissais trois : trois sur six. EN: three of six.' },
  ],
  audio: REC('rec-c1-04-partitif-ecoute'), say: REFRAME, terms: ['partitif'],
};

const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a2-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre façons de trop en dire', frSub: 'Dont fait déjà le travail',
  errors: [
    { wrong: 'Il y avait six candidats, dont j’en connaissais trois.', right: fr(E(2027)),
      why: 'Normal : je connaissais trois de ces candidats se dit j’en connaissais trois. Mais dont a déjà pris la place de en. EN: dont already replaces en.' },
    { wrong: 'Elle a trois enfants, dont deux d’entre eux vivent à Montréal.', right: fr(E(2016)),
      why: 'Normal : l’anglais dit two of them. Mais dont veut déjà dire « d’entre eux » : la phrase le dit deux fois. EN: dont already means « of them ».' },
    { wrong: 'Les cartons, dont la plupart est encore fermée, attendent dans le couloir.', right: fr(E(2017)),
      why: 'Normal : la plupart est un nom singulier. Mais le verbe s’accorde avec les cartons : sont, fermés. EN: la plupart takes a plural verb.' },
    { wrong: 'Le budget, que la moitié vient de dons privés, a été voté.', right: fr(E(2022)),
      why: 'Normal : la moitié est le sujet, et que relie. Mais il s’agit de la moitié du budget : de, donc dont. EN: la moitié du budget, so dont.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['partitif'],
};

const A2_TEXTE = dansUnTexte('a2-texte', 'Compléter : le compte rendu de l’assemblée', TEXTE_A2, [
  { q: 'Complète les deux premiers trous.', a: 'Quarante-deux membres étaient présents, dont une dizaine de nouveaux venus. Trois projets ont été proposés, dont un seul a été retenu.' },
  { q: 'Complète : la numérisation des cartes postales, (…) certaines datent de 1905.', a: 'dont certaines datent de 1905 : une partie des cartes postales.' },
  { q: 'Complète : soixante bénévoles, (…) la plupart (être) des retraités.', a: 'dont la plupart sont des retraités : la plupart des bénévoles, donc le pluriel.' },
  { q: 'Complète le dernier trou. Pourrait-on y mettre parmi lesquels ?', a: 'dont un tiers servira à acheter un scanner. Parmi lesquels, non : un tiers du budget est une fraction, pas un élément parmi d’autres.' },
], 'rec-c1-04-texte-a2', ['partitif']);

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('La plupart', '« Les invités, dont la plupart … de loin, sont restés dîner. »',
    ['venaient', 'venait'], 0,
    'La plupart des invités : pluriel. EN: plural.'),
  ctl('Une fois suffit', 'Laquelle est juste ?',
    [fr(E(2016)), 'Elle a trois enfants, dont deux d’entre eux vivent à Montréal.'], 0,
    'Dont veut déjà dire « d’entre eux ». EN: dont already says it.'),
  ctl('La préposition', '« Le comité a reçu quarante dossiers, … six venaient de l’étranger. »',
    ['parmi lesquels', 'parmi qui', 'dont parmi'], 0,
    'Parmi demande toujours lequel, pour des choses comme pour des gens. EN: parmi lesquels.'),
], ['partitif']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Une partie du tout',
    opener: {
      line: 'Quatre cents lettres, dont une trentaine écrites à Paris : ici tu prends une partie d’un groupe avec un seul mot. EN: Four hundred letters, about thirty of them from Paris: here you pick out part of a group with one word.',
      imageRef: 'lessons/relatives-complexes/act02.jpg',
    },
    sections: [],
    milestone: 'Tu prends une partie d’un groupe avec dont ou parmi lesquels, sans répéter en ni d’entre eux. EN: You can pick out part of a group with dont or parmi lesquels, without a redundant en.',
    estScreens: 36, restPoints: ['a2-cartes', 'a2-ecoute'],
  },
  sections: [A2_HISTOIRE, A2_CARTES, A2_CONSTRUIRE, A2_ECOUTE, A2_ERREURS, A2_TEXTE, A2_CHECK],
  imports: IMPORTED.act2,
};

ROUNDS.push({
  id: 'r2-partitif', label: 'Une partie du tout', targets: ['partitif-mal-forme'],
  questions: [
    mc('« Trente bénévoles se sont inscrits, dont douze étudiants. » Combien de bénévoles en tout ?', ['trente', 'douze', 'quarante-deux'], 0, 'Dont douze : douze parmi les trente. EN: thirty in all.', 'a2-cartes'),
    tI('Complète avec un seul mot.', 'Nous avons reçu dix réponses, … trois positives.', fr(E(2023)), 'Une partie du tout, sans verbe : dont. EN: dont.', 'a2-construire', ['dont']),
    tI('Mets le verbe à l’imparfait.', 'Les invités, dont la plupart (venir) de loin, sont restés dîner.', fr(E(2024)), 'La plupart des invités : pluriel, venaient. EN: plural.', 'a2-cartes', ['venaient']),
    eS('Il y avait six candidats, dont j’en connaissais trois.', fr(E(2027)), 'Dont remplace déjà en : supprime-le. EN: drop en.', 'a2-erreurs', ['Il y avait six candidats ; j’en connaissais trois.']),
    eS('Elle a trois enfants, dont deux d’entre eux vivent à Montréal.', fr(E(2016)), 'Dont veut déjà dire « d’entre eux ». EN: drop d’entre eux.', 'a2-erreurs', ['Elle a trois enfants, parmi lesquels deux vivent à Montréal.', 'Elle a trois enfants ; deux d’entre eux vivent à Montréal.']),
    mc('« Toute l’équipe était là, dont moi. » Ce qui veut dire…', ['j’étais là, moi aussi', 'j’étais absent'], 0, 'Dont moi : y compris moi. EN: me included.', 'a2-construire'),
    mc('« Le comité a reçu quarante dossiers, … six venaient de l’étranger. »', ['parmi lesquels', 'parmi qui', 'dont parmi'], 0, 'Parmi demande lequel. EN: parmi lesquels.', 'a2-cartes'),
    lC('Écoute. Quelle part du budget vient de dons privés ?', fr(E(2022)), ['la moitié', 'un tiers', 'la totalité'], 0, 'Dont la moitié vient de dons privés. EN: half.', 'a2-ecoute'),
  ],
});
DRILL_LIST.push({ id: 'd-partitif', title: 'Une partie du tout', format: 'mcq' as const, coach: 'Dont prend une partie du groupe ; il ne faut rien ajouter. EN: dont takes part of the group, nothing to add.', q: 'Il y avait six candidats, dont je … trois.', opts: ['connaissais', 'en connaissais'], correct: 0, why: 'Dont remplace déjà en. EN: no en after dont.', items: [E(2015), E(2016), E(2017), E(2020), E(2027), E(2028)], audio: AUDIO });
TRIGGER_LIST.push({ id: 'partitif-mal-forme', description: 'Builds a partitive relative with a redundant en or d’entre eux, a singular verb after dont la plupart, or que where dont is needed.', detectOn: ['a2-construire', 'a2-erreurs', 'a2-check', 'a11-mission'], drill: 'd-partitif', retest: 'd-partitif' });

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3: CE À QUOI, SANS QUOI
 *
 *  Preposition + quoi when no noun is in front, past lesson 13 in B1 (ce
 *  dont, lequel after a preposition): ce à quoi, ce sur quoi, rien à quoi,
 *  and quoi picking up a whole clause.
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_HISTOIRE: Sec<'story'> = {
  type: 'story', id: 'a3-histoire', layer: 'core',
  title: 'Le règlement de la salle', frSub: 'Karim écrit, tu relis',
  setting: 'Karim rédige le règlement de la salle de lecture rénovée. Tu relis par-dessus son épaule.',
  bubbles: [
    { from: 'narrator', fr: 'Sur l’écran de Karim, trois phrases attendent ton avis.', en: 'On Karim’s screen, three sentences are waiting for your opinion.' },
    { from: 'user', fr: fr(E(2035)), en: en(E(2035)) },
    { from: 'coach', fr: 'S’attendre à, et aucun nom devant : ce à quoi.', en: 'S’attendre à, and no noun in front: ce à quoi.', warn: 'Préposition, puis quoi' },
    { from: 'user', fr: fr(E(2041)), en: en(E(2041)) },
    { from: 'coach', fr: 'Après quoi : une fois le formulaire rempli. Quoi reprend toute la phrase.', en: 'Après quoi: once the form is filled in. Quoi picks up the whole sentence.', warn: 'Quoi reprend une phrase' },
    { from: 'user', fr: fr(E(2042)), en: en(E(2042)) },
    { from: 'coach', fr: 'Faute de quoi veut dire sinon, dans une langue soignée.', en: 'Faute de quoi means otherwise, in careful French.', warn: 'Faute de quoi : sinon' },
  ],
  closing: { fr: 'Pas de nom devant : ce, rien ou quelque chose, puis la préposition et quoi.', en: 'No noun in front: ce, rien or quelque chose, then the preposition and quoi.' },
  audio: REC('rec-c1-04-reglement'), say: REFRAME, terms: ['quoi'],
};

const A3_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a3-cartes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-quoi',
  title: 'Quoi après une préposition', frSub: 'Quand aucun nom ne précède',
  hint: 'Quatre cartes. La dernière revient au nom.',
  audio: REC('rec-c1-04-quoi'), say: REFRAME, terms: ['quoi'],
  cards: [
    { head: 'Ce, la préposition, quoi', label: 's’attendre à', fr: fr(E(2035)), sub: rsOf(E(2035)),
      body: `Tu connais ce dont, de ${LEQUEL_REF}. Avec une autre préposition, ce reste et quoi la suit : ce à quoi, ce sur quoi, ce contre quoi. EN: with another preposition, ce stays and quoi follows it.` },
    { head: 'Rien, quelque chose, voilà', label: 'pas de nom précis', fr: fr(E(2046)), sub: rsOf(E(2046)),
      body: 'Rien, quelque chose et voilà ne nomment rien de précis : quoi aussi. Il n’y a rien à quoi, voilà à quoi. EN: rien, quelque chose and voilà take quoi too.' },
    { head: 'Quoi reprend une phrase', label: 'sans quoi, faute de quoi', fr: fr(E(2012)), sub: rsOf(E(2012)),
      body: 'Sans quoi : si tu ne le fais pas. Faute de quoi, après quoi, moyennant quoi reprennent aussi toute la phrase d’avant. EN: quoi picks up the whole previous clause.' },
    { head: 'Après un vrai nom', label: 'lequel ; quoi, littéraire', fr: `${fr(E(2053))} · ${fr(E(2052))}`, sub: `${rsOf(E(2053))} · ${rsOf(E(2052))}`,
      body: 'Après un nom, lequel : une question à laquelle. Quoi après un nom se lit dans la langue littéraire, surtout après chose. EN: after a noun, lequel; quoi there is literary.' },
  ],
};

const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a3-construire', layer: 'core', size: 'lg',
  title: 'La préposition, puis quoi', frSub: 'Trois groupes, trois contrôles',
  groups: [
    grp('Ce + préposition + quoi', [
      it(E(2036), 'tenir à'),
      it(E(2037), 'se mettre d’accord sur'),
      it(E(2038), 'se battre contre'),
      it(E(2045), 'commencer par'),
    ], chk('« Ce … il se bat, c’est l’oubli. »',
      ['contre quoi', 'contre lequel', 'que'], 0,
      'Se battre contre, et pas de nom devant : contre quoi. EN: contre quoi.')),
    grp('Rien, quelque chose, voilà', [
      it(E(2039), 'rien à quoi'),
      it(E(2040), 'voilà à quoi'),
      it(E(2046), 'quelque chose à quoi'),
      it('fr.c1.rhetorique.143', 'la préposition répétée après c’est'),
    ], chk('« Il y a quelque chose … personne n’a pensé. »',
      ['à quoi', 'auquel', 'que'], 0,
      'Quelque chose ne nomme rien de précis : à quoi. EN: à quoi.')),
    grp('Quoi reprend une phrase', [
      it(E(2012), 'sans quoi'),
      it(E(2041), 'après quoi'),
      it(E(2042), 'faute de quoi'),
      it(E(2043), 'moyennant quoi'),
    ], chk('« Joignez une pièce d’identité, sans quoi le dossier sera refusé. » Sans quoi veut dire…',
      ['sinon', 'grâce à cela', 'après cela'], 0,
      'Sans quoi : si tu ne joins pas la pièce. EN: otherwise.')),
  ],
  audio: AUDIO, say: REFRAME, terms: ['quoi'],
};

const A3_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a3-table', layer: 'core', sheetId: 'sheet-quoi',
  title: 'Six tours avec quoi',
  cols: ['Forme', 'Reprend', 'Sens'],
  rows: [
    { cells: ['ce à quoi', 'rien de nommé', 's’attendre à, tenir à'], say: fr(E(2035)),
      detail: { title: 'Ce à quoi', body: 'Le verbe veut à, aucun nom ne précède : ce à quoi. EN: a verb with à and no noun.', say: fr(E(2047)) } },
    { cells: ['ce sur quoi', 'rien de nommé', 'insister sur'], say: fr(E(2048)),
      detail: { title: 'Ce sur quoi', body: 'Même modèle avec sur : ce sur quoi il insiste. EN: same pattern with sur.', say: fr(E(2037)) } },
    { cells: ['ce contre quoi', 'rien de nommé', 'se battre contre'], say: fr(E(2038)),
      detail: { title: 'Ce contre quoi', body: 'Contre reste devant quoi, jamais à la fin. EN: contre stays in front of quoi.', say: 'Ce contre quoi elle proteste, c’est le bruit.' } },
    { cells: ['sans quoi', 'la phrase d’avant', 'sinon'], say: fr(E(2012)),
      detail: { title: 'Sans quoi', body: 'Sans quoi : si l’on ne fait pas ce qui précède. EN: otherwise.', say: 'Partez tôt, sans quoi vous serez en retard.' } },
    { cells: ['faute de quoi', 'la phrase d’avant', 'sinon, soigné'], say: fr(E(2042)),
      detail: { title: 'Faute de quoi', body: 'Même sens que sans quoi, plus administratif. EN: failing which.', say: fr(E(2049)) } },
    { cells: ['après quoi', 'la phrase d’avant', 'ensuite'], say: fr(E(2041)),
      detail: { title: 'Après quoi', body: 'Après quoi : une fois cela fait. Moyennant quoi : en échange de cela. EN: after which.', say: 'Lisez le dossier, après quoi nous en parlerons.' } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['quoi'],
};

const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a3-piege', layer: 'core', swipe: true,
  title: 'La préposition oubliée', frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Le verbe garde sa préposition',
    body: 'S’attendre à, se battre contre, servir à : la préposition du verbe passe devant quoi. Que efface la préposition, dont la remplace par de : ni l’un ni l’autre ne convient. EN: the verb’s preposition moves in front of quoi.',
  },
  cards: [
    { promptLabel: 's’attendre à', promptSound: 'C’est exactement ce que je m’attendais.', fr: fr(E(2035)), ipa: ipaOf(E(2035)), tip: 'S’attendre à : ce à quoi. EN: ce à quoi.' },
    { promptLabel: 'se mettre d’accord sur', promptSound: 'Ce que nous devons nous mettre d’accord, c’est le calendrier.', fr: fr(E(2037)), ipa: ipaOf(E(2037)), tip: 'Sur passe devant quoi. EN: ce sur quoi.' },
    { promptLabel: 'se battre contre', promptSound: 'Ce qu’il se bat, c’est l’oubli.', fr: fr(E(2038)), ipa: ipaOf(E(2038)), tip: 'Contre passe devant quoi. EN: ce contre quoi.' },
    { promptLabel: 'penser à', promptSound: 'Il y a quelque chose que personne n’a pensé.', fr: fr(E(2046)), ipa: ipaOf(E(2046)), tip: 'Penser à : à quoi. EN: à quoi.' },
    { promptLabel: 'servir à', promptSound: 'Voilà ce dont servent les archives.', fr: fr(E(2040)), ipa: ipaOf(E(2040)), tip: 'Servir à, pas servir de : à quoi. EN: à quoi.' },
    { promptLabel: 'faute de quoi', promptSound: 'Prévenez-nous avant midi, faute de laquelle la salle sera attribuée à quelqu’un d’autre.', fr: fr(E(2042)), ipa: ipaOf(E(2042)), tip: 'Aucun nom à reprendre : quoi. EN: quoi, not laquelle.' },
  ],
  drill: [
    { promptSay: 'C’est exactement ce … je m’attendais.', opts: ['à quoi', 'que'], correct: 0 },
    { promptSay: 'Ce … nous devons nous mettre d’accord, c’est le calendrier.', opts: ['sur quoi', 'que'], correct: 0 },
    { promptSay: 'Ce … il se bat, c’est l’oubli.', opts: ['contre quoi', 'qu’'], correct: 0 },
    { promptSay: 'Voilà … servent les archives.', opts: ['à quoi', 'ce dont'], correct: 0 },
    { promptSay: 'Prévenez-nous avant midi, faute … la salle sera attribuée.', opts: ['de quoi', 'de laquelle'], correct: 0 },
    { promptSay: 'C’est une question … je n’avais jamais songé.', opts: ['à laquelle', 'ce à quoi'], correct: 0 },
    { promptSay: 'Dis-moi ce … tu as besoin.', opts: ['dont', 'à quoi'], correct: 0 },
    { promptSay: 'Remplissez le formulaire, … vous recevrez votre carte.', opts: ['après quoi', 'après que'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Le verbe garde sa préposition' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la main écrit trop vite' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-c1-04-piege-quoi'), say: REFRAME, terms: ['quoi'],
};

const A3_DICTEE: Sec<'dictation'> = {
  type: 'dictation', id: 'a3-dictee', layer: 'core',
  title: 'Écris ce que tu entends', frSub: 'Quoi, et sa préposition',
  itemIds: dicteeFor(3),
  audio: AUDIO, say: REFRAME, terms: ['quoi'],
};

const A3_TEXTE = dansUnTexte('a3-texte', 'Compléter : le règlement de la salle', TEXTE_A3, [
  { q: 'Complète le premier trou : c’est ce (…) les Archives tiennent le plus.', a: 'c’est ce à quoi les Archives tiennent le plus : tenir à, et pas de nom devant.' },
  { q: 'Complète : présentez votre carte à l’accueil, (…) une place vous sera attribuée.', a: 'après quoi : une fois la carte présentée.' },
  { q: 'Complète les deux trous suivants : les stylos sont interdits, (…) ; prévenez l’accueil, (…).', a: 'sans quoi les lettres risqueraient d’être tachées ; faute de quoi (ou sans quoi) votre demande ne pourra pas être traitée. Les deux veulent dire sinon.' },
  { q: 'Complète le dernier : ce (…) nous comptons, c’est votre soin.', a: 'ce sur quoi nous comptons : compter sur.' },
], 'rec-c1-04-texte-a3', ['quoi']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Le verbe', '« C’est exactement ce … je m’attendais. »',
    ['à quoi', 'que', 'dont'], 0,
    'S’attendre à : ce à quoi. EN: ce à quoi.'),
  ctl('Sans quoi', 'Dans « …, sans quoi le dossier sera refusé », quoi reprend…',
    ['toute la phrase d’avant', 'le mot dossier'], 0,
    'Quoi ne reprend pas un nom : il reprend la phrase. EN: the whole clause.'),
  ctl('Un vrai nom', '« C’est une question … je n’avais jamais songé. » Le plus courant :',
    ['à laquelle', 'à quoi'], 0,
    'Après un vrai nom, lequel ; à quoi y est littéraire. EN: lequel after a noun.'),
], ['quoi']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Ce à quoi, sans quoi',
    opener: {
      line: 'Ce à quoi tu t’attends, ce sur quoi tu insistes : ici tu gardes la préposition quand aucun nom ne précède. EN: What you expect, what you insist on: here you keep the preposition when no noun comes first.',
      imageRef: 'lessons/relatives-complexes/act03.jpg',
    },
    sections: [],
    milestone: 'Tu écris ce à quoi, ce sur quoi, rien à quoi, et tu relies une phrase entière avec sans quoi ou faute de quoi. EN: You can write ce à quoi and link a whole clause with sans quoi or faute de quoi.',
    estScreens: 44, restPoints: ['a3-cartes', 'a3-table', 'a3-dictee'],
  },
  sections: [A3_HISTOIRE, A3_CARTES, A3_CONSTRUIRE, A3_TABLE, A3_PIEGE, A3_DICTEE, A3_TEXTE, A3_CHECK],
  imports: IMPORTED.act3,
};

ROUNDS.push({
  id: 'r3-quoi', label: 'Ce à quoi, sans quoi', targets: ['quoi-oublie'],
  questions: [
    tI('Complète.', 'C’est exactement ce … je m’attendais.', fr(E(2035)), 'S’attendre à : ce à quoi. EN: ce à quoi.', 'a3-cartes', ['à quoi', 'ce à quoi']),
    tI('Complète (insister sur).', 'Ce … il insiste, c’est la date.', fr(E(2048)), 'Insister sur : ce sur quoi. EN: ce sur quoi.', 'a3-table', ['sur quoi', 'ce sur quoi']),
    mc('« Prévenez-nous avant midi, faute de quoi la salle sera attribuée à quelqu’un d’autre. » Faute de quoi veut dire…', ['sinon', 'grâce à cela', 'pendant ce temps'], 0, 'Faute de quoi : sinon, en langue soignée. EN: otherwise.', 'a3-table'),
    eS('Voilà ce dont servent les archives.', fr(E(2040)), 'Servir à : à quoi. EN: à quoi.', 'a3-piege'),
    eS('Ce que nous devons nous mettre d’accord, c’est le calendrier.', fr(E(2037)), 'Se mettre d’accord sur : ce sur quoi. EN: ce sur quoi.', 'a3-piege'),
    mc('« Remplissez le formulaire, après quoi vous recevrez votre carte. » Que reprend quoi ?', ['le fait de remplir le formulaire', 'la carte'], 0, 'Quoi reprend toute la phrase d’avant. EN: the whole clause.', 'a3-construire'),
    mc('Laquelle est la plus courante ?', [fr(E(2053)), fr(E(2052))], 0, 'Après un vrai nom, laquelle ; à quoi y est littéraire. EN: laquelle after a noun.', 'a3-cartes'),
    lC('Écoute. Que donne le lecteur pour emprunter les cartes ?', fr(E(2043)), ['une caution', 'rien', 'une lettre'], 0, 'Moyennant quoi : en échange de la caution. EN: a deposit.', 'a3-construire'),
  ],
});
DRILL_LIST.push({ id: 'd-quoi', title: 'La préposition, puis quoi', format: 'mcq' as const, coach: 'Le verbe garde sa préposition ; s’il n’y a pas de nom, quoi la suit. EN: keep the preposition, then quoi.', q: 'C’est exactement ce … je m’attendais.', opts: ['à quoi', 'que'], correct: 0, why: 'S’attendre à : ce à quoi. EN: ce à quoi.', items: [E(2035), E(2036), E(2037), E(2038), E(2041), E(2042)], audio: AUDIO });
TRIGGER_LIST.push({ id: 'quoi-oublie', description: 'Drops the verb’s preposition after ce (ce que je m’attendais), writes ce dont for a verb with à, or uses lequel where no noun is there to pick up.', detectOn: ['a3-construire', 'a3-piege', 'a3-check', 'a11-mission'], drill: 'd-quoi', retest: 'd-quoi' });

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4: UN ENDROIT OÙ DORMIR
 *
 *  The relative clause that ends on an infinitive, and de quoi + infinitive.
 *  New at C1: no B1 lesson builds it.
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a4-ecoute', layer: 'core', hideLines: true,
  title: 'Ce qui manque, ce qui suffit', frSub: 'Dix phrases, dix infinitifs',
  lines: [
    ln(E(2055)), ln(E(2056)), ln(E(2057)), ln(E(2058)), ln(E(2059)),
    ln(E(2060)), ln(E(2061)), ln(E(2062)), ln(E(2063)), ln(E(2064)),
  ],
  questions: [
    { q: 'Première phrase : que cherche-t-il ?', opts: ['un lieu pour dormir', 'quelqu’un pour l’aider', 'un travail'], correct: 0, why: 'Un endroit où dormir : un lieu pour dormir. EN: a place to sleep.' },
    { q: 'Troisième phrase : qu’a-t-elle trouvé ?', opts: ['une personne de confiance', 'un logement'], correct: 0, why: 'Quelqu’un sur qui compter : une personne fiable. EN: someone reliable.' },
    { q: 'Cinquième phrase : leur salaire suffit-il largement ?', opts: ['non, il suffit à peine pour vivre', 'oui, largement'], correct: 0, why: 'À peine de quoi vivre : tout juste assez. EN: barely enough.' },
    { q: 'Sixième phrase : faut-il s’inquiéter ?', opts: ['non', 'oui'], correct: 0, why: 'Pas de quoi s’inquiéter : aucune raison. EN: no reason to worry.' },
    { q: 'Neuvième phrase : que leur manque-t-il ?', opts: ['un outil pour trier les photos', 'des photos', 'du temps'], correct: 0, why: 'Un outil avec lequel trier : un outil pour trier. EN: a tool to sort with.' },
  ],
  audio: REC('rec-c1-04-infinitif-ecoute'), say: REFRAME, terms: ['infinitif'],
};

const A4_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a4-cartes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-quoi',
  title: 'Une relative sans verbe conjugué', frSub: 'Un lieu, une personne, une ressource',
  hint: 'Quatre cartes. La dernière dit ce qu’il ne faut jamais écrire.',
  audio: REC('rec-c1-04-infinitif'), say: REFRAME, terms: ['infinitif'],
  cards: [
    { head: 'Où + infinitif', label: 'un lieu pour', fr: fr(E(2055)), sub: rsOf(E(2055)),
      body: 'Pas de sujet, pas de verbe conjugué : la relative dit à quoi sert le lieu. Qui dort ? Lui, ou n’importe qui. EN: no subject; the clause states what the place is for.' },
    { head: 'Préposition + qui ou lequel', label: 'une personne, une chose', fr: fr(E(2057)), sub: rsOf(E(2057)),
      body: 'Compter sur quelqu’un : sur qui compter. Trier avec un outil : avec lequel trier. La préposition du verbe reste devant. EN: the verb’s preposition stays in front.' },
    { head: 'De quoi + infinitif', label: 'assez pour', fr: fr(E(2059)), sub: rsOf(E(2059)),
      body: 'De quoi vivre : assez pour vivre. Il y a de quoi : il y a une raison ; il n’y a pas de quoi : aucune raison. EN: de quoi means enough to, or good reason to.' },
    { head: 'Jamais que + infinitif', label: 'à + infinitif', fr: fr(E(2070)), sub: rsOf(E(2070)),
      body: 'Something to read : quelque chose à lire, sans relative. Que relatif ne précède jamais un infinitif. EN: something to read is à lire; relative que never takes an infinitive.' },
  ],
};

const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a4-construire', layer: 'core', size: 'lg',
  title: 'Où, à qui, de quoi', frSub: 'Trois groupes, trois contrôles',
  groups: [
    grp('Un lieu, une personne', [
      it(E(2055), 'où dormir'),
      it(E(2056), 'à qui parler'),
      it(E(2057), 'sur qui compter'),
      it(E(2064), 'où recevoir son courrier'),
    ], chk('« Je n’ai personne … parler de ce projet. »',
      ['à qui', 'que', 'qui'], 0,
      'Parler à quelqu’un : à qui, puis l’infinitif. EN: à qui.')),
    grp('Une chose, avec une préposition', [
      it(E(2062), 'sur quoi s’appuyer'),
      it(E(2063), 'avec lequel trier'),
      it(E(2072), 'sur laquelle s’asseoir'),
      it(E(2073), 'à quoi se raccrocher'),
    ], chk('« Il nous manque un outil … trier les photos. »',
      ['avec lequel', 'que', 'où'], 0,
      'Trier avec un outil : avec lequel. EN: avec lequel.')),
    grp('De quoi', [
      it(E(2058), 'de quoi écrire'),
      it(E(2059), 'de quoi vivre'),
      it(E(2060), 'pas de quoi'),
      it(E(2061), 'il y a de quoi'),
    ], chk('« Il y a de quoi être fier de ce travail. » Ce qui veut dire…',
      ['il y a une bonne raison d’être fier', 'il n’y a aucune raison d’être fier'], 0,
      'Il y a de quoi : une raison suffisante. EN: good reason to.')),
  ],
  audio: AUDIO, say: REFRAME, terms: ['infinitif'],
};

const A4_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a4-exemples', layer: 'core', sheetId: 'sheet-quoi',
  title: 'Cinq phrases à garder', frSub: 'Un but, sans sujet',
  examples: [
    ex(E(2071), 'de quoi payer : assez pour payer'),
    ex(E(2065), 'confier à quelqu’un : à qui confier'),
    ex(E(2066), 'un coin où lire'),
    ex(E(2067), 'avoir de quoi tenir : assez de provisions'),
    ex(E(2013), 'une salle où ranger : le lieu et son usage'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['infinitif'],
};

const A4_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a4-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre calques de l’anglais', frSub: 'Someone to talk to, something to read',
  errors: [
    { wrong: 'Je n’ai personne à parler de ce projet.', right: fr(E(2056)),
      why: 'Normal : nobody to talk to semble donner personne à parler. Mais on parle à quelqu’un : à qui, puis l’infinitif. EN: parler à, so à qui.' },
    { wrong: 'Je cherche quelque chose que lire pour le train.', right: fr(E(2070)),
      why: 'Normal : que relie si souvent. Mais devant un infinitif, que relatif ne va jamais : quelque chose à lire. EN: à lire, never que lire.' },
    { wrong: 'Le dossier ne contient rien à s’appuyer sur.', right: fr(E(2062)),
      why: 'Normal : l’anglais finit sur la préposition. En français, elle passe devant : rien sur quoi s’appuyer. EN: the preposition moves in front.' },
    { wrong: 'Il n’y a pas de quoi de s’inquiéter.', right: fr(E(2060)),
      why: 'Normal : on entend souvent de devant un infinitif. Mais de quoi contient déjà de : l’infinitif suit tout de suite. EN: no second de.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['infinitif'],
};

const A4_FLASH: Sec<'flashcards'> = {
  type: 'flashcards', id: 'a4-flash', layer: 'core',
  title: 'Huit tournures', frSub: 'De l’anglais au français',
  cards: [
    { front: 'somewhere to sleep', back: 'un endroit où dormir', say: fr(E(2055)) },
    { front: 'someone to talk to', back: 'quelqu’un à qui parler', say: fr(E(2056)) },
    { front: 'someone to rely on', back: 'quelqu’un sur qui compter', say: fr(E(2057)) },
    { front: 'something to write with', back: 'de quoi écrire', say: fr(E(2058)) },
    { front: 'enough to live on', back: 'de quoi vivre', say: fr(E(2059)) },
    { front: 'nothing to worry about', back: 'pas de quoi s’inquiéter', say: fr(E(2060)) },
    { front: 'nothing to build on', back: 'rien sur quoi s’appuyer', say: fr(E(2062)) },
    { front: 'a chair to sit on', back: 'une chaise sur laquelle s’asseoir', say: fr(E(2072)) },
  ],
  audio: AUDIO, say: REFRAME, terms: ['infinitif'],
};

const A4_TEXTE = dansUnTexte('a4-texte', 'Compléter : le message de Sophie', TEXTE_A4, [
  { q: 'Complète les deux premiers trous : un endroit (…) dormir ; un bureau (…) travailler.', a: 'un endroit où dormir ; un bureau où travailler (sur lequel travailler se dit aussi).' },
  { q: 'Complète : prends de (…) écrire.', a: 'prends de quoi écrire : un stylo, du papier.' },
  { q: 'Complète : tu as quelqu’un (…) parler.', a: 'quelqu’un à qui parler : parler à quelqu’un.' },
  { q: 'Complète le dernier : il y a (…) vivre deux semaines.', a: 'il y a de quoi vivre deux semaines : assez pour vivre.' },
], 'rec-c1-04-texte-a4', ['infinitif']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Qui dort ?', '« Il cherche un endroit où dormir. » Qui va dormir ?',
    ['lui', 'quelqu’un d’autre'], 0,
    'Sans sujet écrit, l’infinitif renvoie au sujet de la phrase. EN: the sentence’s subject.'),
  ctl('Que', 'Something to read :',
    ['quelque chose à lire', 'quelque chose que lire'], 0,
    'Que relatif ne précède jamais un infinitif. EN: à lire.'),
  ctl('De quoi', '« Il n’y a pas de quoi s’inquiéter. » Ce qui veut dire…',
    ['aucune raison de s’inquiéter', 'beaucoup de raisons', 'rien à manger'], 0,
    'Pas de quoi : aucune raison. EN: nothing to worry about.'),
], ['infinitif']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Un endroit où dormir',
    opener: {
      line: 'Un coin où lire, quelqu’un à qui parler, de quoi vivre : ici ta relative dit à quoi sert une chose, sans verbe conjugué. EN: A corner to read in, someone to talk to, enough to live on: here your relative clause says what a thing is for, with no conjugated verb.',
      imageRef: 'lessons/relatives-complexes/act04.jpg',
    },
    sections: [],
    milestone: 'Tu termines une relative sur un infinitif, et tu dis assez pour avec de quoi, sans jamais écrire que suivi d’un infinitif. EN: You can end a relative clause on an infinitive and use de quoi, never que plus an infinitive.',
    estScreens: 42, restPoints: ['a4-cartes', 'a4-exemples', 'a4-flash'],
  },
  sections: [A4_ECOUTE, A4_CARTES, A4_CONSTRUIRE, A4_EXEMPLES, A4_ERREURS, A4_FLASH, A4_TEXTE, A4_CHECK],
  imports: IMPORTED.act4,
};

ROUNDS.push({
  id: 'r4-infinitif', label: 'Un endroit où dormir', targets: ['infinitif-mal-relie'],
  questions: [
    tI('Complète (confier à quelqu’un).', 'Je n’ai personne … confier mes clés.', fr(E(2065)), 'Confier à quelqu’un : à qui, puis l’infinitif. EN: à qui.', 'a4-construire', ['à qui']),
    tI('Complète (un lieu).', 'Il cherche un coin … lire au calme.', fr(E(2066)), 'Un lieu : où, puis l’infinitif. EN: où.', 'a4-cartes', ['où']),
    tI('Complète (assez pour).', 'On a … tenir jusqu’à lundi.', fr(E(2067)), 'Avoir de quoi : avoir assez pour. EN: de quoi.', 'a4-cartes', ['de quoi']),
    eS('Je n’ai personne à parler de ce projet.', fr(E(2056)), 'Parler à quelqu’un : à qui parler. EN: à qui parler.', 'a4-erreurs', ['Je n’ai personne avec qui parler de ce projet.']),
    eS('Je cherche quelque chose que lire pour le train.', fr(E(2070)), 'Que relatif ne précède jamais un infinitif : à lire. EN: à lire.', 'a4-erreurs'),
    mc('« Il y a de quoi être fier de ce travail. » Le sens :', ['il y a de bonnes raisons d’être fier', 'il n’y a aucune raison d’être fier', 'personne n’est fier'], 0, 'Il y a de quoi : une raison suffisante. EN: good reason to.', 'a4-construire'),
    mc('« Une chaise … s’asseoir aurait suffi. »', ['sur laquelle', 'que', 'dont'], 0, 'S’asseoir sur une chaise : sur laquelle. EN: sur laquelle.', 'a4-construire'),
    lC('Écoute. Que demande-t-on ?', fr(E(2058)), ['si tu as un stylo ou du papier', 'si tu sais écrire', 'si tu as déjà écrit'], 0, 'De quoi écrire : ce qu’il faut pour écrire. EN: something to write with.', 'a4-ecoute'),
  ],
});
DRILL_LIST.push({ id: 'd-infinitif', title: 'Un but, sans sujet', format: 'mcq' as const, coach: 'La préposition du verbe passe devant, puis l’infinitif ; jamais que. EN: preposition first, then the infinitive.', q: 'Je n’ai personne … parler.', opts: ['à qui', 'que'], correct: 0, why: 'Parler à quelqu’un : à qui. EN: à qui.', items: [E(2055), E(2056), E(2057), E(2059), E(2062), E(2063)], audio: AUDIO });
TRIGGER_LIST.push({ id: 'infinitif-mal-relie', description: 'Calques English « someone to talk to » or « something to read with »: drops the preposition, strands it at the end, or writes que before an infinitive.', detectOn: ['a4-construire', 'a4-erreurs', 'a4-check', 'a11-mission'], drill: 'd-infinitif', retest: 'd-infinitif' });

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5: À QUEL NOM ?
 *
 *  Attachment in long noun groups (le N de N + relative): the clues that
 *  resolve it (verb number, participle agreement, sense) and the cases where
 *  nothing does.
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_HISTOIRE: Sec<'story'> = {
  type: 'story', id: 'a5-histoire', layer: 'core',
  title: 'La note de Karim', frSub: 'Mathilde s’arrête à chaque relative',
  setting: 'Mathilde lit à voix haute une note que Karim a laissée sur son bureau. Elle s’arrête à chaque relative.',
  bubbles: [
    { from: 'narrator', fr: 'Mathilde pose la note devant toi et souligne trois phrases.', en: 'Mathilde puts the note in front of you and underlines three sentences.' },
    { from: 'user', fr: fr(E(2076)), en: en(E(2076)) },
    { from: 'coach', fr: 'Sont, au pluriel : ce sont les clés. Le verbe a tranché.', en: 'Sont, plural: it is the keys. The verb decided.', warn: 'Le nombre du verbe' },
    { from: 'user', fr: fr(E(2081)), en: en(E(2081)) },
    { from: 'coach', fr: 'Signée, au féminin : c’est la copie. L’accord tranche, à l’écrit seulement.', en: 'Signée, feminine: it is the copy. Agreement decides, in writing only.', warn: 'L’accord du participe' },
    { from: 'user', fr: fr(E(2075)), en: en(E(2075)) },
    { from: 'coach', fr: 'Ici, rien ne tranche : le fils, ou la voisine. Il faut réécrire.', en: 'Here nothing decides: the son or the neighbour. It needs rewriting.', warn: 'Aucun indice' },
  ],
  closing: { fr: 'Cherche l’indice : le verbe, l’accord, le sens. S’il n’y en a pas, réécris.', en: 'Look for the clue: the verb, the agreement, the meaning. If there is none, rewrite.' },
  audio: REC('rec-c1-04-note'), say: REFRAME, terms: ['ambiguite'],
};

const A5_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a5-cartes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-accroche',
  title: 'Les quatre indices', frSub: 'Ce qui dit à quel nom tient la relative',
  hint: 'Quatre cartes. Deux indices ne s’entendent pas.',
  audio: REC('rec-c1-04-indices'), say: REFRAME, terms: ['ambiguite', 'accroche'],
  cards: [
    { head: 'Le nombre du verbe', label: 'pluriel ou singulier', fr: fr(E(2076)), sub: rsOf(E(2076)),
      body: 'Sont ne peut aller qu’avec les clés : le bureau est au singulier. Cet indice s’entend. EN: the plural verb points to the keys, and you can hear it.' },
    { head: 'L’accord du participe', label: 'à l’écrit seulement', fr: `${fr(E(2081))} · ${fr(E(2082))}`, sub: `${rsOf(E(2081))} · ${rsOf(E(2082))}`,
      body: 'Signée : la copie. Signé : le contrat. Les deux phrases se prononcent de la même façon ; seul l’écrit les distingue. EN: signée points to the copy, signé to the contract; same sound.' },
    { head: 'Le genre du participe', label: 'partie ou parti', fr: `${fr(E(2077))} · ${fr(E(2078))}`, sub: `${rsOf(E(2077))} · ${rsOf(E(2078))}`,
      body: 'Partie : la fille est partie. Parti : le directeur est parti. Là encore, seul l’écrit tranche. EN: partie is the daughter, parti the director.' },
    { head: 'Le sens', label: 'le seul nom possible', fr: fr(E(2087)), sub: rsOf(E(2087)),
      body: 'Un chien aboie, une voisine n’aboie pas : le sens choisit. Quand le sens hésite, il n’y a plus d’indice. EN: meaning chooses when only one noun fits.' },
  ],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a5-construire', layer: 'core', size: 'lg',
  title: 'Un indice, ou aucun', frSub: 'Trois groupes, trois contrôles',
  groups: [
    grp('Un accord tranche', [
      it(E(2076), 'sont : les clés'),
      it(E(2081), 'signée : la copie'),
      it(E(2077), 'partie : la fille'),
      it(E(2088), 'sont : les photos'),
    ], chk('« La copie du contrat que le notaire a signée » : qu’a signé le notaire ?',
      ['la copie', 'le contrat'], 0,
      'Signée, au féminin : la copie. EN: the copy.')),
    grp('Le sens tranche', [
      it(E(2085), 'on range un livre, pas un professeur'),
      it(E(2086), 'une école fête ses cent ans'),
      it(E(2087), 'un chien aboie'),
    ], chk('« Le directeur de l’école, qui fête ses cent ans » : qui fête ses cent ans ?',
      ['l’école', 'le directeur'], 0,
      'Un directeur en poste à cent ans, c’est peu probable : l’école. EN: the school.')),
    grp('Rien ne tranche', [
      it(E(2075), 'le fils ou la voisine'),
      it(E(2079), 'les élèves aussi ?'),
      it(E(2080), 'les résultats ou l’enquête'),
    ], chk('« Les élèves et les professeurs qui le souhaitent » : les élèves doivent-ils le souhaiter ?',
      ['on ne sait pas : la relative peut tenir aux deux', 'non, seulement les professeurs', 'oui, forcément'], 0,
      'Rien ne dit si la relative couvre les deux noms. EN: it may cover both.')),
  ],
  audio: AUDIO, say: REFRAME, terms: ['ambiguite'],
};

const A5_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a5-ecoute', layer: 'core', hideLines: true,
  title: 'L’oreille et le sens', frSub: 'Huit phrases, deux noms à chaque fois',
  lines: [
    ln(E(2076)), ln(E(2087)), ln(E(2086)), ln(E(2085)),
    ln(E(2075)), ln(E(2079)), ln(E(2080)), ln(E(2088)),
  ],
  questions: [
    { q: 'Première phrase : qu’est-ce qui est sur la table ?', opts: ['les clés', 'le bureau'], correct: 0, why: 'Tu entends sont, au pluriel. EN: you hear the plural.' },
    { q: 'Deuxième phrase : qui aboie toute la nuit ?', opts: ['le chien', 'la voisine'], correct: 0, why: 'Le sens tranche. EN: meaning decides.' },
    { q: 'Troisième phrase : qui fête ses cent ans ?', opts: ['l’école', 'le directeur'], correct: 0, why: 'Le sens : une école centenaire. EN: the school.' },
    { q: 'Cinquième phrase : peut-on savoir qui chante ?', opts: ['non, sans contexte', 'oui, la voisine'], correct: 0, why: 'Ni l’oreille ni le sens ne tranchent. EN: nothing decides.' },
    { q: 'Huitième phrase : qu’est-ce qui est dans la boîte ?', opts: ['les photos', 'le mariage'], correct: 0, why: 'Sont, au pluriel : les photos. EN: the photos.' },
  ],
  audio: REC('rec-c1-04-indices-ecoute'), say: REFRAME, terms: ['ambiguite'],
};

const A5_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a5-piege', layer: 'core', swipe: true,
  title: 'L’accord qui trahit', frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Accorde avec le nom que tu veux',
    body: 'Le verbe et le participe de la relative s’accordent avec le nom auquel elle tient. Accorde avec le mauvais nom, et ta phrase dit autre chose. Si aucun accord ne peut trancher, réécris. EN: agree with the noun you mean, or rewrite.',
  },
  cards: [
    { promptLabel: 'tu parles des photos', promptSound: 'Les photos du mariage qui est dans la boîte n’ont jamais été montrées.', fr: fr(E(2088)), ipa: ipaOf(E(2088)), tip: 'Les photos sont dans la boîte : sont. EN: plural.' },
    { promptLabel: 'tu parles de la lettre', promptSound: 'La lettre du maire qu’elle a reçu est datée de 1951.', fr: fr(E(2089)), ipa: ipaOf(E(2089)), tip: 'Elle a reçu la lettre : reçue. EN: feminine.' },
    { promptLabel: 'tu parles de la copie', promptSound: 'La copie du contrat que le notaire a signé est au dossier.', fr: fr(E(2081)), ipa: ipaOf(E(2081)), tip: 'Le notaire a signé la copie : signée. EN: feminine.' },
    { promptLabel: 'tu parles de la fille', promptSound: 'La fille du directeur, qui est parti hier, reviendra lundi.', fr: fr(E(2077)), ipa: ipaOf(E(2077)), tip: 'C’est la fille qui est partie : partie. EN: feminine.' },
    { promptLabel: 'élèves et professeurs', promptSound: 'Les élèves et les professeurs qui le souhaitent pourront visiter la salle.', fr: fr(E(2090)), ipa: ipaOf(E(2090)), tip: 'Si tu parles des deux, dis-le : s’ils le souhaitent. EN: make it cover both.' },
    { promptLabel: 'tu parles du fils', promptSound: 'Le fils de la voisine qui chante dans la chorale part à Lyon.', fr: fr(E(2091)), ipa: ipaOf(E(2091)), tip: 'Aucun accord ne tranche : coupe en deux phrases. EN: split it.' },
  ],
  drill: [
    { promptSay: 'Les photos du mariage qui … dans la boîte n’ont jamais été montrées.', opts: ['sont', 'est'], correct: 0 },
    { promptSay: 'C’est la lettre : la lettre du maire qu’elle a …', opts: ['reçue', 'reçu'], correct: 0 },
    { promptSay: 'C’est la copie : la copie du contrat que le notaire a …', opts: ['signée', 'signé'], correct: 0 },
    { promptSay: 'C’est la fille : la fille du directeur, qui est … hier', opts: ['partie', 'parti'], correct: 0 },
    { promptSay: 'Les clés du bureau qui … sur la table sont à toi.', opts: ['sont', 'est'], correct: 0 },
    { promptSay: 'Ce sont les notes : les notes de la réunion que j’ai …', opts: ['prises', 'pris'], correct: 0 },
    { promptSay: 'Le chien de la voisine qui aboie : qui aboie ?', opts: ['le chien', 'la voisine'], correct: 0 },
    { promptSay: 'Le fils de la voisine qui chante : qui chante ?', opts: ['on ne sait pas', 'la voisine, toujours'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Accorde avec le nom que tu veux' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que l’accord fait dire' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-c1-04-piege-accroche'), say: REFRAME, terms: ['ambiguite'],
};

const A5_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a5-exemples', layer: 'core', sheetId: 'sheet-accroche',
  title: 'Cinq phrases, cinq lectures', frSub: 'L’indice, ou son absence',
  examples: [
    ex(E(2085), 'le sens : on range un livre, pas un professeur'),
    ex(E(2086), 'le sens : une école a cent ans'),
    ex(E(2082), 'signé, au masculin : le contrat'),
    ex(E(2078), 'parti, au masculin : le directeur'),
    ex(E(2080), 'les résultats ou l’enquête : rien ne tranche'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['ambiguite', 'accroche'],
};

const A5_TEXTE = dansUnTexte('a5-texte', 'Lire : la note de Karim', TEXTE_A5, [
  { q: 'Première phrase : qui a appelé ce matin ?', a: 'On ne peut pas le savoir : le neveu ou la donatrice. Rien ne tranche.' },
  { q: 'Deuxième phrase : qu’est-ce qui est dans la boîte bleue ?', a: 'Les photos : sont, au pluriel.' },
  { q: 'Troisième phrase : qu’a signé le notaire en 1952 ?', a: 'La copie : signée, au féminin. Avec signé, ce serait l’acte.' },
  { q: 'Dernière phrase : qui travaille de nuit ? Réécris pour lever le doute.', a: 'On ne sait pas. Lequel ne servirait à rien : fils et gardien sont masculins. Écris par exemple : « Le fils du gardien demande s’il peut venir samedi ; c’est lui qui travaille de nuit. »' },
], 'rec-c1-04-texte-a5', ['ambiguite']);

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Le verbe', '« Les clés du bureau qui sont sur la table » : qu’est-ce qui est sur la table ?',
    ['les clés', 'le bureau'], 0,
    'Sont, au pluriel : les clés. EN: the keys.'),
  ctl('L’oreille', '« La copie du contrat que le notaire a signée » : l’indice s’entend-il ?',
    ['non, il se voit seulement à l’écrit', 'oui, très nettement'], 0,
    'Signée et signé se prononcent de la même façon. EN: same sound.'),
  ctl('Aucun indice', 'Rien ne tranche entre deux noms. Que fais-tu ?',
    ['tu laisses le lecteur choisir', 'tu réécris la phrase', 'tu ajoutes une virgule'], 1,
    'Réécris : rapproche, coupe, ou lève le doute autrement. EN: rewrite.'),
], ['ambiguite']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'À quel nom ?',
    opener: {
      line: 'Le fils de la voisine qui chante : qui chante ? Ici tu cherches l’indice qui dit à quel nom tient la relative. EN: The son of the neighbour who sings: who sings? Here you look for the clue that tells you which noun the clause hangs on.',
      imageRef: 'lessons/relatives-complexes/act05.jpg',
    },
    sections: [],
    milestone: 'Tu lis à quel nom tient une relative grâce au verbe, à l’accord ou au sens, et tu repères quand rien ne tranche. EN: You can tell which noun a clause hangs on from the verb, the agreement or the meaning, and spot when nothing decides.',
    estScreens: 44, restPoints: ['a5-cartes', 'a5-ecoute', 'a5-exemples'],
  },
  sections: [A5_HISTOIRE, A5_CARTES, A5_CONSTRUIRE, A5_ECOUTE, A5_PIEGE, A5_EXEMPLES, A5_TEXTE, A5_CHECK],
  imports: IMPORTED.act5,
};

ROUNDS.push({
  id: 'r5-ambiguite', label: 'À quel nom ?', targets: ['rattachement-mal-lu'],
  questions: [
    mc('« Les clés du bureau qui sont sur la table sont à toi. » Qu’est-ce qui est sur la table ?', ['les clés', 'le bureau', 'on ne peut pas le savoir'], 0, 'Sont, au pluriel : les clés. EN: the keys.', 'a5-cartes'),
    tI('Accorde le participe : c’est la lettre qu’elle a reçue.', 'La lettre du maire qu’elle a (recevoir) est datée de 1951.', fr(E(2089)), 'Que reprend la lettre, placée avant avoir : reçue. EN: reçue.', 'a5-cartes', ['reçue']),
    tI('Mets le verbe au présent : ce sont les photos.', 'Les photos du mariage qui (être) dans la boîte n’ont jamais été montrées.', fr(E(2088)), 'Les photos : sont. EN: sont.', 'a5-construire', ['sont']),
    mc('« La fille du directeur, qui est parti hier, reviendra lundi. » Qui est parti ?', ['le directeur', 'la fille'], 0, 'Parti, au masculin : le directeur. EN: the director.', 'a5-cartes'),
    mc('« Le fils de la voisine qui chante dans la chorale part à Lyon. » Qui chante ?', ['on ne peut pas le savoir', 'le fils, forcément', 'la voisine, forcément'], 0, 'Rien ne tranche entre les deux noms. EN: nothing decides.', 'a5-construire'),
    eS('Les photos du mariage qui est dans la boîte n’ont jamais été montrées.', fr(E(2088)), 'Ce sont les photos qui sont dans la boîte : sont. EN: the photos.', 'a5-piege'),
    mc('« Le directeur de l’école, qui fête ses cent ans, prononcera un discours. » Qui fête ses cent ans ?', ['l’école', 'le directeur'], 0, 'Le sens : une école centenaire. EN: the school.', 'a5-construire'),
    lC('Écoute. Qu’est-ce qui n’a jamais été montré ?', fr(E(2088)), ['les photos', 'le mariage', 'la boîte'], 0, 'Tu entends sont, au pluriel : les photos. EN: the photos.', 'a5-ecoute'),
  ],
});
DRILL_LIST.push({ id: 'd-ambigu', title: 'L’indice', format: 'mcq' as const, coach: 'Le verbe et le participe s’accordent avec le nom auquel tient la relative. EN: agreement shows the noun.', q: 'Les photos du mariage qui … dans la boîte n’ont jamais été montrées.', opts: ['sont', 'est'], correct: 0, why: 'Les photos : pluriel. EN: plural.', items: [E(2076), E(2081), E(2077), E(2087), E(2088), E(2089)], audio: AUDIO });
TRIGGER_LIST.push({ id: 'rattachement-mal-lu', description: 'Attaches a relative clause to the nearest noun by reflex, misses the verb, participle or sense clue, or leaves an ambiguous attachment unrepaired in writing.', detectOn: ['a5-construire', 'a5-piege', 'a5-check', 'a11-mission'], drill: 'd-ambigu', retest: 'd-ambigu' });

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6: LEQUEL, POUR LEVER LE DOUTE
 *
 *  Lequel as SUBJECT of an explicative relative, a written repair; its limit
 *  (same gender and number); the other repairs; auquel cas. Lesson 13 in B1
 *  owns lequel after a preposition and is not re-taught.
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_HISTOIRE: Sec<'story'> = {
  type: 'story', id: 'a6-histoire', layer: 'core',
  title: 'Chez le notaire', frSub: 'L’acte de donation, phrase par phrase',
  setting: 'L’étude de Me Olivier Brassard, notaire. Avec Mathilde, tu relis l’acte de donation du fonds Ferland avant la signature.',
  bubbles: [
    { from: 'narrator', fr: 'Me Brassard tourne les pages. Chaque relative doit tenir à un seul nom.', en: 'Maître Brassard turns the pages. Every relative must hang on one noun only.' },
    { from: 'user', fr: fr(E(2096)), en: en(E(2096)) },
    { from: 'coach', fr: 'Lequel, masculin : le neveu, pas la donatrice. C’est un tour d’acte écrit.', en: 'Lequel, masculine: the nephew, not the donor. It is a written, formal turn.', warn: 'Lequel sujet' },
    { from: 'user', fr: fr(E(2099)), en: en(E(2099)) },
    { from: 'coach', fr: 'Ici, lequel ne sert à rien : les deux noms sont masculins singuliers.', en: 'Here lequel is no help: both nouns are masculine singular.', warn: 'La limite de lequel' },
    { from: 'user', fr: fr(E(2100)), en: en(E(2100)) },
    { from: 'coach', fr: 'La relative touche son nom : plus aucun doute, et plus besoin de lequel.', en: 'The clause sits right after its noun: no doubt left, and no need for lequel.', warn: 'Rapprocher' },
  ],
  closing: { fr: 'Lequel porte le genre et le nombre ; quand il ne suffit pas, rapproche ou coupe.', en: 'Lequel carries gender and number; when that is not enough, move the clause or split the sentence.' },
  audio: REC('rec-c1-04-notaire'), say: REFRAME, terms: ['lequel'],
};

const A6_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a6-cartes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-accroche',
  title: 'Lequel, sujet de la relative', frSub: 'Un outil écrit, et sa limite',
  hint: 'Quatre cartes. La troisième montre quand lequel ne suffit pas.',
  audio: REC('rec-c1-04-lequel'), say: REFRAME, terms: ['lequel', 'registre'],
  cards: [
    { head: 'Lequel sujet', label: 'genre et nombre', fr: fr(E(2095)), sub: rsOf(E(2095)),
      body: 'Qui ne dit ni genre ni nombre. Laquelle ne peut reprendre que la sœur : Paul est masculin. EN: laquelle can only be the sister.' },
    { head: 'Un tour écrit', label: 'après une virgule', fr: fr(E(2105)), sub: rsOf(E(2105)),
      body: 'Lequel sujet n’ouvre qu’une relative entre virgules, et il sonne écrit : acte, rapport, compte rendu. À l’oral, on dit qui, ou on coupe. EN: only between commas, and only in writing.' },
    { head: 'Sa limite', label: 'même genre, même nombre', fr: fr(E(2099)), sub: rsOf(E(2099)),
      body: 'Locataire et propriétaire sont masculins singuliers : lequel peut reprendre l’un ou l’autre. Il faut réécrire. EN: when both nouns match, lequel decides nothing.' },
    { head: 'Auquel cas', label: 'dans ce cas-là', fr: fr(E(2098)), sub: rsOf(E(2098)),
      body: 'Auquel cas reprend toute une hypothèse : si la salle est pleine. Un tour soigné et figé. EN: auquel cas picks up a whole hypothesis.' },
  ],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a6-construire', layer: 'core', size: 'lg',
  title: 'Lever le doute', frSub: 'Trois groupes, trois contrôles',
  groups: [
    grp('Lequel tranche', [
      it(E(2095), 'laquelle : la sœur'),
      it(E(2096), 'lequel : le neveu'),
      it(E(2097), 'laquelle : l’avocate'),
      it(E(2101), 'laquelle : la fille'),
    ], chk('« Un témoin a parlé à l’avocate, laquelle a aussitôt prévenu la juge. » Qui a prévenu la juge ?',
      ['l’avocate', 'le témoin'], 0,
      'Laquelle, féminin : l’avocate. EN: the lawyer.')),
    grp('Lequel ne suffit pas', [
      it(E(2099), 'deux masculins'),
      it(E(2100), 'la relative rapprochée'),
    ], chk('« Le locataire et le propriétaire, lequel prend les travaux en charge » : qui paie les travaux ?',
      ['on ne peut pas le savoir', 'le locataire, forcément', 'le propriétaire, forcément'], 0,
      'Deux masculins singuliers : lequel ne tranche pas. EN: lequel decides nothing.')),
    grp('Couper ou rapprocher', [
      it(E(2102), 'deux phrases'),
      it(E(2091), 'c’est lui qui'),
      it(E(2090), 's’ils le souhaitent'),
    ], chk('À l’oral, pour lever le même doute, le plus naturel est de…',
      ['couper en deux phrases', 'dire lequel'], 0,
      'Lequel sujet sonne écrit ; à l’oral, on coupe. EN: in speech, split.')),
  ],
  audio: AUDIO, say: REFRAME, terms: ['lequel'],
};

const A6_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a6-table', layer: 'core', sheetId: 'sheet-accroche',
  title: 'Six façons de lever le doute',
  cols: ['Moyen', 'Quand', 'Registre'],
  rows: [
    { cells: ['laquelle, lequel', 'les genres diffèrent', 'écrit'], say: fr(E(2095)),
      detail: { title: 'Lequel sujet', body: 'Le genre de lequel montre le nom. Entre virgules seulement. EN: gender shows the noun.', say: fr(E(2101)) } },
    { cells: ['lesquels, lesquelles', 'les nombres diffèrent', 'écrit'], say: 'Les voisins de la locataire, lesquels avaient tout entendu, ont témoigné.',
      detail: { title: 'Au pluriel', body: 'Avaient et avait se prononcent de la même façon ; lesquels s’entend. EN: lesquels can be heard.', say: 'Les voisins de la locataire, lesquels avaient tout entendu, ont témoigné.' } },
    { cells: ['rapprocher la relative', 'toujours', 'tous'], say: fr(E(2100)),
      detail: { title: 'Rapprocher', body: 'La relative touche son nom : le doute disparaît. EN: put the clause right after its noun.', say: fr(E(2100)) } },
    { cells: ['deux phrases', 'toujours', 'surtout l’oral'], say: fr(E(2102)),
      detail: { title: 'Couper', body: 'Deux phrases, et un pronom clair : elle, lui. EN: two sentences.', say: fr(E(2091)) } },
    { cells: ['lequel seul', 'mêmes genre et nombre', 'à éviter'], say: fr(E(2099)),
      detail: { title: 'Quand lequel échoue', body: 'Deux noms masculins singuliers : lequel ne tranche rien. EN: it decides nothing.', say: fr(E(2100)) } },
    { cells: ['auquel cas', 'une hypothèse', 'écrit soigné'], say: fr(E(2098)),
      detail: { title: 'Auquel cas', body: 'Dans ce cas-là, en un seul tour figé. EN: in which case.', say: fr(E(2107)) } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['lequel', 'registre'],
};

const A6_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a6-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre lequel mal placés', frSub: 'Un outil précis, mal employé',
  errors: [
    { wrong: 'La femme laquelle chante est ma voisine.', right: 'La femme qui chante est ma voisine.',
      why: 'Normal : laquelle semble plus précis. Mais sans virgule, lequel sujet est impossible : qui. EN: no commas, so qui.' },
    { wrong: 'Le neveu de la donatrice, laquelle n’avait jamais vu les lettres, les a lues en une nuit.', right: fr(E(2096)),
      why: 'Normal : laquelle reprend le dernier nom entendu. Mais la donatrice connaissait ses lettres ; c’est le neveu qui ne les avait jamais vues. EN: agree with the noun you mean.' },
    { wrong: 'Le président de l’association, lequel fête ses vingt ans, a ouvert la séance.', right: fr(E(2010)),
      why: 'Normal : lequel semble aller avec président. Mais c’est l’association qui a vingt ans : laquelle. EN: the association is twenty.' },
    { wrong: 'Il pleuvra peut-être, dans lequel cas la visite aura lieu à l’intérieur.', right: fr(E(2107)),
      why: 'Normal : dans ce cas devient dans lequel cas. Mais la forme figée est auquel cas. EN: the fixed form is auquel cas.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['lequel'],
};

const A6_HACKS: Sec<'hacks'> = {
  type: 'hacks', id: 'a6-hacks', layer: 'core', sheetId: 'sheet-accroche',
  title: 'Trois réflexes avant d’envoyer',
  hacks: [
    { hack: 'Avant d’écrire lequel, compare les deux noms : même genre et même nombre, il ne servira à rien.',
      why: 'Lequel ne montre le nom que par le genre ou le nombre. EN: lequel only helps when the nouns differ.' },
    { hack: 'Remplace qui par il ou elle : si tu hésites sur le pronom, ton lecteur hésitera sur le nom.',
      why: 'Le test révèle l’ambiguïté avant le lecteur. EN: the test shows the ambiguity first.' },
    { hack: 'À l’oral, coupe : « … ; c’est elle qui… ». Garde lequel pour l’écrit.',
      why: 'Lequel sujet sonne administratif dans une conversation. EN: lequel subject sounds stiff in speech.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['lequel', 'registre'],
};

const A6_TEXTE = dansUnTexte('a6-texte', 'Compléter : le compte rendu réécrit', TEXTE_A6, [
  { q: 'Complète : la directrice du musée, (…) avait organisé la visite.', a: 'laquelle : elle montre que c’est la directrice, pas le musée. Qui laisserait un doute.' },
  { q: 'Complète : le neveu de la donatrice, (…) n’avait jamais vu les lettres.', a: 'lequel : le neveu, masculin.' },
  { q: 'Complète : le notaire de la famille, (…) avait rédigé l’acte de donation.', a: 'lequel : le notaire ; famille est féminin.' },
  { q: 'Complète le dernier : (…) cas nous ouvrirons le hall.', a: 'auquel cas : dans ce cas-là.' },
], 'rec-c1-04-texte-a6', ['lequel']);

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Pourquoi lequel', '« La sœur de Paul, laquelle vit à Genève » : qui vit à Genève ?',
    ['la sœur', 'Paul'], 0,
    'Laquelle, féminin : la sœur. EN: the sister.'),
  ctl('La virgule', '« La femme … chante est ma voisine. »',
    ['qui', 'laquelle'], 0,
    'Sans virgule, lequel sujet est impossible. EN: qui.'),
  ctl('La limite', '« Le locataire et le propriétaire, lequel… » : lequel lève-t-il le doute ?',
    ['oui, toujours', 'non : deux masculins singuliers'], 1,
    'Même genre, même nombre : il faut réécrire. EN: rewrite.'),
], ['lequel']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Lequel, pour lever le doute',
    opener: {
      line: 'Un acte notarié ne tolère aucun doute : ici tu lèves l’ambiguïté avec lequel, et tu sais quand il ne suffit pas. EN: A notarial deed tolerates no doubt: here you remove the ambiguity with lequel, and you know when it is not enough.',
      imageRef: 'lessons/relatives-complexes/act06.jpg',
    },
    sections: [],
    milestone: 'Tu emploies lequel sujet à l’écrit pour montrer le nom, et tu rapproches ou coupes quand il ne tranche pas. EN: You can use lequel as subject in writing, and move or split when it does not decide.',
    estScreens: 42, restPoints: ['a6-cartes', 'a6-table', 'a6-hacks'],
  },
  sections: [A6_HISTOIRE, A6_CARTES, A6_CONSTRUIRE, A6_TABLE, A6_ERREURS, A6_HACKS, A6_TEXTE, A6_CHECK],
  imports: IMPORTED.act6,
};

ROUNDS.push({
  id: 'r6-lequel', label: 'Lequel, pour lever le doute', targets: ['lequel-mal-employe'],
  questions: [
    tI('Lève le doute : c’est le frère qui a signé.', 'Le frère de la directrice, … a signé le registre, est reparti.', fr(E(2106)), 'Lequel, masculin : le frère. EN: lequel.', 'a6-cartes', ['lequel']),
    tI('Complète (dans ce cas, en un seul mot).', 'Il pleuvra peut-être, … cas la visite aura lieu à l’intérieur.', fr(E(2107)), 'Auquel cas : la forme figée. EN: auquel cas.', 'a6-table', ['auquel', 'auquel cas']),
    mc('« Un témoin a parlé à l’avocate, laquelle a aussitôt prévenu la juge. » Qui a prévenu la juge ?', ['l’avocate', 'le témoin'], 0, 'Laquelle, féminin : l’avocate. EN: the lawyer.', 'a6-construire'),
    eS('La femme laquelle chante est ma voisine.', 'La femme qui chante est ma voisine.', 'Sans virgule, lequel sujet est impossible : qui. EN: qui.', 'a6-erreurs'),
    mc('C’est le neveu qui n’avait jamais vu les lettres. Laquelle écris-tu ?', [fr(E(2096)), 'Le neveu de la donatrice, laquelle n’avait jamais vu les lettres, les a lues en une nuit.'], 0, 'C’est le neveu qui ne les avait jamais vues : lequel, masculin. Laquelle enverrait le lecteur vers la donatrice. EN: lequel.', 'a6-erreurs'),
    mc('« Le locataire et le propriétaire, lequel prend les travaux en charge, signent le bail. » Que faut-il faire ?', ['réécrire, car lequel ne tranche pas', 'rien, car lequel tranche', 'remplacer lequel par laquelle'], 0, 'Deux masculins singuliers : rapproche ou coupe. EN: rewrite.', 'a6-cartes'),
    mc('Où lequel sujet est-il le plus à sa place ?', ['dans un compte rendu officiel', 'dans un texto à un ami', 'dans une conversation au café'], 0, 'Un tour écrit, administratif. EN: formal writing.', 'a6-hacks'),
    lC('Écoute. Qui conteste les chiffres ?', fr(E(2105)), ['l’expert', 'la commission'], 0, 'Lequel, masculin : l’expert. EN: the expert.', 'a6-construire'),
  ],
});
DRILL_LIST.push({ id: 'd-lequel', title: 'Lequel, ou pas', format: 'mcq' as const, coach: 'Lequel s’accorde avec le nom qu’il reprend, entre virgules seulement. EN: lequel agrees with its noun, between commas only.', q: 'Le frère de la directrice, … a signé le registre, est reparti.', opts: ['lequel', 'laquelle'], correct: 0, why: 'C’est le frère : lequel. EN: lequel.', items: [E(2095), E(2096), E(2097), E(2098), E(2101), E(2105)], audio: AUDIO });
TRIGGER_LIST.push({ id: 'lequel-mal-employe', description: 'Writes lequel as subject without commas, agrees it with the wrong noun, relies on it when both nouns share gender and number, or uses it in casual speech.', detectOn: ['a6-construire', 'a6-erreurs', 'a6-check', 'a11-mission'], drill: 'd-lequel', retest: 'd-lequel' });

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7: AVEC OU SANS VIRGULES
 *
 *  Past lesson 11 in B1 (two commas = an aside): what the comma changes in
 *  MEANING. How many are concerned, the hidden cause or concession, the
 *  proper noun with an article.
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_HISTOIRE: Sec<'story'> = {
  type: 'story', id: 'a7-histoire', layer: 'core',
  title: 'La décision du jury', frSub: 'Deux virgules, et tout change',
  setting: 'Au centre d’examen, Inès relit la décision du jury avant de l’afficher dans le hall.',
  bubbles: [
    { from: 'narrator', fr: 'Inès hésite entre deux versions de la même phrase.', en: 'Inès hesitates between two versions of the same sentence.' },
    { from: 'user', fr: fr(E(2115)), en: en(E(2115)) },
    { from: 'coach', fr: 'Sans virgules, la relative trie : seulement ceux qui ont échoué.', en: 'Without commas the clause sorts: only those who failed.', warn: 'Déterminative : certains' },
    { from: 'user', fr: fr(E(2116)), en: en(E(2116)) },
    { from: 'coach', fr: 'Avec virgules, tous ont échoué. Le jury annoncerait un désastre.', en: 'With commas, they all failed. The jury would be announcing a disaster.', warn: 'Explicative : tous' },
    { from: 'user', fr: fr(E(2119)), en: en(E(2119)) },
    { from: 'coach', fr: 'Ici, la relative donne une raison sans la nommer : il ne boit jamais.', en: 'Here the clause gives a reason without naming it: he never drinks.', warn: 'Une cause cachée' },
  ],
  closing: { fr: 'Sans virgules, tu tries ; avec virgules, tu commentes, et souvent tu expliques.', en: 'Without commas you sort; with commas you comment, and often explain.' },
  audio: REC('rec-c1-04-jury'), say: REFRAME, terms: ['explicative', 'determinative'],
};

const A7_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a7-cartes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-sens',
  title: 'Ce que la virgule change', frSub: 'Au-delà de la règle du B1',
  hint: 'Quatre cartes. Écoute aussi les pauses.',
  audio: REC('rec-c1-04-virgules'), say: REFRAME, terms: ['explicative', 'determinative'],
  cards: [
    { head: 'Combien sont concernés', label: 'avec un pluriel', fr: `${fr(E(2117))} · ${fr(E(2118))}`, sub: `${rsOf(E(2117))} · ${rsOf(E(2118))}`,
      body: `${Cap(QUI_QUE_REF)} t’a donné la règle des virgules. Au C1, mesure l’effet : sans virgules, certains locataires ; avec, tous. EN: no commas, some tenants; commas, all of them.` },
    { head: 'Une raison cachée', label: 'explicative', fr: fr(E(2119)), sub: rsOf(E(2119)),
      body: 'La relative entre virgules dit pourquoi lui, sans écrire parce que. EN: the clause gives the reason without saying because.' },
    { head: 'Une concession cachée', label: 'explicative', fr: fr(E(2120)), sub: rsOf(E(2120)),
      body: 'Qui semble simple veut dire ici bien qu’il semble simple. Le lecteur doit l’entendre. EN: here the clause means although.' },
    { head: 'Un nom propre', label: 'déterminative', fr: `${fr(E(2121))} · ${fr(E(2122))}`, sub: `${rsOf(E(2121))} · ${rsOf(E(2122))}`,
      body: 'Un nom propre prend une explicative. Avec un article et une déterminative, il devient une époque : le Montréal d’autrefois. EN: article plus determinative turns a city into a period.' },
  ],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a7-construire', layer: 'core', size: 'lg',
  title: 'Trier ou commenter', frSub: 'Trois groupes, trois contrôles',
  groups: [
    grp('Seulement certains', [
      it(E(2115), 'les candidats qui ont échoué'),
      it(E(2117), 'les locataires qui ont un chien'),
      it(E(2123), 'les étudiants qui habitent loin'),
      it(E(2128), 'les employés qui avaient été prévenus'),
    ], chk('« Les étudiants qui habitent loin peuvent loger à la résidence. » Tous les étudiants habitent-ils loin ?',
      ['non, seulement certains', 'oui, tous'], 0,
      'Sans virgules, la relative trie. EN: it sorts.')),
    grp('Tous, avec un commentaire', [
      it(E(2116), 'tous ont échoué'),
      it(E(2118), 'tous ont un chien'),
      it(E(2127), 'tous avaient été prévenus'),
      it(E(2129), 'tous ont été surpris'),
    ], chk('« Les employés, qui avaient été prévenus, ne sont pas venus. » Combien d’employés avaient été prévenus ?',
      ['tous', 'seulement certains'], 0,
      'Entre virgules : tout le groupe. EN: all of them.')),
    grp('Une raison ou une concession', [
      it(E(2119), 'une raison'),
      it(E(2120), 'une concession'),
      it(E(2130), 'une concession'),
      it(E(2122), 'un simple commentaire'),
    ], chk('« Ce règlement, que personne ne lit, change pourtant tout. » La relative ajoute…',
      ['une concession : bien que personne ne le lise', 'une raison : parce que personne ne le lit', 'un tri : seulement ce règlement-là'], 0,
      'Pourtant le signale : la relative concède. EN: pourtant marks a concession.')),
  ],
  audio: AUDIO, say: REFRAME, terms: ['explicative', 'determinative'],
};

const A7_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a7-ecoute', layer: 'core', hideLines: true,
  title: 'Entendre les virgules', frSub: 'Huit phrases, huit pauses ou non',
  lines: [
    ln(E(2115)), ln(E(2116)), ln(E(2117)), ln(E(2118)),
    ln(E(2127)), ln(E(2128)), ln(E(2121)), ln(E(2122)),
  ],
  questions: [
    { q: 'Première phrase : tous les candidats ont-ils échoué ?', opts: ['non, seulement certains', 'oui, tous'], correct: 0, why: 'Pas de pause : la relative trie. EN: no pause, it sorts.' },
    { q: 'Deuxième phrase : tous les candidats ont-ils échoué ?', opts: ['oui, tous', 'non, seulement certains'], correct: 0, why: 'Deux pauses : la relative commente tout le groupe. EN: pauses, all of them.' },
    { q: 'Quatrième phrase : tous les locataires ont-ils un chien ?', opts: ['oui', 'non'], correct: 0, why: 'Les pauses entourent la relative : tous. EN: all of them.' },
    { q: 'Sixième phrase : tous les employés avaient-ils été prévenus ?', opts: ['non, seulement certains', 'oui'], correct: 0, why: 'Pas de pause : seulement ceux-là. EN: only those.' },
    { q: 'Septième phrase : de quel Montréal parle-t-on ?', opts: ['de celui d’autrefois', 'de la ville d’aujourd’hui'], correct: 0, why: 'Le Montréal où j’ai grandi : une époque. EN: a past Montreal.' },
  ],
  audio: REC('rec-c1-04-virgules-ecoute'), say: REFRAME, terms: ['explicative', 'determinative'],
};

const A7_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a7-piege', layer: 'core', swipe: true,
  title: 'La virgule qui ment', frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Ponctue ce que tu veux dire',
    body: 'Tous : des virgules. Seulement certains : pas de virgules. Un frère unique, une ville unique : des virgules. Une virgule oubliée ou ajoutée, et la phrase dit autre chose. EN: punctuate for the meaning you intend.',
  },
  cards: [
    { promptLabel: 'seulement ceux qui ont échoué', promptSound: 'Les candidats, qui ont échoué, pourront repasser l’épreuve en juin.', fr: fr(E(2115)), ipa: ipaOf(E(2115)), tip: 'Certains seulement : pas de virgules. EN: no commas.' },
    { promptLabel: 'tous ont un chien', promptSound: 'Les locataires qui ont un chien paient un supplément.', fr: fr(E(2118)), ipa: ipaOf(E(2118)), tip: 'Tous : des virgules. EN: commas.' },
    { promptLabel: 'seulement certains employés', promptSound: 'Les employés, qui avaient été prévenus, ne sont pas venus.', fr: fr(E(2128)), ipa: ipaOf(E(2128)), tip: 'Certains seulement : pas de virgules. EN: no commas.' },
    { promptLabel: 'tous les touristes', promptSound: 'Les touristes que la pluie avait surpris se sont réfugiés au musée.', fr: fr(E(2129)), ipa: ipaOf(E(2129)), tip: 'Tous ont été surpris : des virgules. EN: commas.' },
    { promptLabel: 'la ville d’aujourd’hui', promptSound: 'Le Montréal, où j’ai grandi, a beaucoup changé.', fr: fr(E(2122)), ipa: ipaOf(E(2122)), tip: 'Une seule ville : pas d’article, des virgules. EN: no article.' },
    { promptLabel: 'ton seul frère', promptSound: 'Mon frère qui ne boit jamais a pris le volant au retour.', fr: fr(E(2119)), ipa: ipaOf(E(2119)), tip: 'Sans virgules, tu aurais plusieurs frères. EN: commas for an only brother.' },
  ],
  drill: [
    { promptSay: 'Les candidats qui ont échoué : combien ont échoué ?', opts: ['une partie', 'tous'], correct: 0 },
    { promptSay: 'Les candidats, qui ont échoué : combien ont échoué ?', opts: ['tous', 'une partie'], correct: 0 },
    { promptSay: 'Tu as un seul frère :', opts: ['mon frère, qui ne boit jamais,', 'mon frère qui ne boit jamais'], correct: 0 },
    { promptSay: 'Seuls les étudiants qui habitent loin :', opts: ['les étudiants qui habitent loin', 'les étudiants, qui habitent loin,'], correct: 0 },
    { promptSay: 'Ce texte, qui semble simple, cache des pièges : la relative ajoute…', opts: ['une concession', 'une raison'], correct: 0 },
    { promptSay: 'Le Montréal où j’ai grandi : de quoi parle-t-on ?', opts: ['du Montréal d’autrefois', 'de tout Montréal'], correct: 0 },
    { promptSay: 'Tous les touristes ont été surpris :', opts: ['les touristes, que la pluie avait surpris,', 'les touristes que la pluie avait surpris'], correct: 0 },
    { promptSay: 'Les locataires qui ont un chien paient un supplément : qui paie ?', opts: ['ceux qui ont un chien', 'tous les locataires'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Ponctue ce que tu veux dire' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la virgule fait dire' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-c1-04-piege-virgules'), say: REFRAME, terms: ['explicative', 'determinative'],
};

const A7_TEXTE = dansUnTexte('a7-texte', 'Lire : le règlement de la résidence', TEXTE_A7, [
  { q: 'Tous les résidents ont-ils un animal ?', a: 'Non : sans virgules, seuls ceux qui en ont un doivent le déclarer.' },
  { q: 'Tous les visiteurs signent-ils le registre ?', a: 'Oui : entre virgules, la relative parle de tous les visiteurs.' },
  { q: 'Les chambres sur la cour : lesquelles, et pour qui ?', a: 'Seulement celles qui donnent sur la cour, attribuées d’abord aux seuls résidents qui travaillent de nuit. Deux relatives sans virgules, deux tris.' },
  { q: 'Le jardin : la relative trie-t-elle ?', a: 'Non. Il n’y a qu’un jardin ; la relative entre virgules le commente.' },
], 'rec-c1-04-texte-a7', ['explicative', 'determinative']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Sans virgules', '« Les locataires qui ont un chien paient un supplément. » Qui paie ?',
    ['ceux qui ont un chien', 'tous les locataires'], 0,
    'La relative trie. EN: only those with a dog.'),
  ctl('Avec virgules', '« Mon frère, qui ne boit jamais, a pris le volant. » Pourquoi lui ?',
    ['parce qu’il ne boit jamais', 'parce qu’il est l’aîné'], 0,
    'L’explicative donne la raison. EN: the clause gives the reason.'),
  ctl('Le nom propre', '« Le Montréal où j’ai grandi n’existe plus. » La ville a-t-elle disparu ?',
    ['oui', 'non : c’est la ville d’autrefois qui n’existe plus'], 1,
    'L’article et la relative désignent une époque. EN: a past Montreal.'),
], ['explicative', 'determinative']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Avec ou sans virgules',
    opener: {
      line: 'Deux virgules, et tous les candidats ont échoué : ici tu choisis la ponctuation pour le sens que tu veux. EN: Two commas, and every candidate has failed: here you punctuate for the meaning you want.',
      imageRef: 'lessons/relatives-complexes/act07.jpg',
    },
    sections: [],
    milestone: 'Tu sais qui est concerné selon les virgules, et tu entends la raison ou la concession cachée dans une explicative. EN: You know who is concerned from the commas, and hear the hidden reason or concession.',
    estScreens: 38, restPoints: ['a7-cartes', 'a7-ecoute'],
  },
  sections: [A7_HISTOIRE, A7_CARTES, A7_CONSTRUIRE, A7_ECOUTE, A7_PIEGE, A7_TEXTE, A7_CHECK],
  imports: IMPORTED.act7,
};

ROUNDS.push({
  id: 'r7-virgules', label: 'Avec ou sans virgules', targets: ['virgule-sens'],
  questions: [
    mc('« Les candidats qui ont échoué pourront repasser l’épreuve. » Combien ont échoué ?', ['une partie des candidats', 'tous les candidats'], 0, 'Sans virgules, la relative trie. EN: some.', 'a7-cartes'),
    mc('« Les candidats, qui ont échoué, pourront repasser l’épreuve. » Combien ont échoué ?', ['tous les candidats', 'une partie des candidats'], 0, 'Entre virgules : tout le groupe. EN: all.', 'a7-cartes'),
    mc('« Ce texte, qui semble simple, cache plusieurs pièges. » La relative a la valeur de…', ['bien qu’il semble simple', 'parce qu’il semble simple', 'seulement ce texte-là'], 0, 'Une concession cachée. EN: although.', 'a7-construire'),
    mc('Tu as un seul frère. Laquelle écris-tu ?', [fr(E(2119)), 'Mon frère qui ne boit jamais a pris le volant au retour.'], 0, 'Un frère unique : la relative commente, entre virgules. EN: commas.', 'a7-piege'),
    mc('« Le Montréal où j’ai grandi n’existe plus. » Pourquoi l’article ?', ['la relative désigne le Montréal d’autrefois', 'Montréal est toujours masculin', 'c’est une faute'], 0, 'Une déterminative sur un nom propre crée une époque. EN: a period.', 'a7-cartes'),
    mc('Tous les touristes ont été surpris par la pluie. Laquelle écris-tu ?', [fr(E(2129)), 'Les touristes que la pluie avait surpris se sont réfugiés au musée.'], 0, 'Tous : des virgules. EN: commas.', 'a7-piege'),
    mc('« Les employés qui avaient été prévenus ne sont pas venus. » Que peut-on supposer des autres ?', ['qu’ils sont peut-être venus', 'que personne n’est venu'], 0, 'La relative trie : seuls ceux-là ne sont pas venus. EN: only those stayed away.', 'a7-construire'),
    lC('Écoute bien les pauses. Tous les locataires ont-ils un chien ?', fr(E(2118)), ['oui, tous', 'non, seulement certains'], 0, 'Deux pauses : une explicative, donc tous. EN: all of them.', 'a7-ecoute'),
  ],
});
DRILL_LIST.push({ id: 'd-virgule', title: 'Tous ou certains', format: 'mcq' as const, coach: 'Sans virgules, la relative trie ; avec virgules, elle commente tout le groupe. EN: no commas, some; commas, all.', q: 'Les candidats, qui ont échoué, pourront repasser l’épreuve : combien ont échoué ?', opts: ['tous', 'une partie'], correct: 0, why: 'Entre virgules : tous. EN: all.', items: [E(2115), E(2116), E(2117), E(2118), E(2119), E(2120)], audio: AUDIO });
TRIGGER_LIST.push({ id: 'virgule-sens', description: 'Adds or drops the commas around a relative without regard to meaning, so a sorting clause turns into a comment on everyone, or misses the hidden reason or concession.', detectOn: ['a7-construire', 'a7-piege', 'a7-check', 'a11-mission'], drill: 'd-virgule', retest: 'd-virgule' });

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8: OÙ, OU DANS LEQUEL
 *
 *  Past lesson 12 in B1 (où for a place and a moment): où after an abstract
 *  noun seen as a place, the fixed dans le cas où / au point où / dans la
 *  mesure où, and the verb’s preposition + lequel everywhere else; là où.
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a8-ecoute', layer: 'core', hideLines: true,
  title: 'Où, sans lieu', frSub: 'Dix phrases abstraites',
  lines: [
    ln(E(2135)), ln(E(2137)), ln(E(2138)), ln(E(2139)), ln(E(2140)),
    ln(E(2141)), ln(E(2142)), ln(E(2147)), ln('fr.c1.discours-dexamen.1424'), ln(E(2146)),
  ],
  questions: [
    { q: 'Première phrase : la situation laisse-t-elle du temps ?', opts: ['non, elle est urgente', 'oui, elle est calme'], correct: 0, why: 'Une situation où chaque jour compte : l’urgence. EN: it is urgent.' },
    { q: 'Deuxième phrase : que faire si la salle est fermée ?', opts: ['appeler l’accueil', 'attendre devant la porte'], correct: 0, why: 'Dans le cas où : si jamais. EN: in case.' },
    { q: 'Troisième phrase : de quand date la règle ?', opts: ['de 1950', 'de l’an dernier'], correct: 0, why: 'La règle sur laquelle repose le système date de 1950. EN: 1950.' },
    { q: 'Sixième phrase : l’aide promise est-elle sans limite ?', opts: ['non, elle dépend de ce qui sera possible', 'oui, sans aucune limite'], correct: 0, why: 'Dans la mesure où : autant que. EN: insofar as.' },
    { q: 'Neuvième phrase : sur quoi porte le désaccord ?', opts: ['sur qui paie', 'sur la date'], correct: 0, why: 'Là où nos chemins se séparent : le point de désaccord. EN: who pays.' },
  ],
  audio: REC('rec-c1-04-ou-ecoute'), say: REFRAME, terms: ['abstrait'],
};

const A8_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a8-table', layer: 'core', sheetId: 'sheet-sens',
  title: 'Six noms abstraits',
  cols: ['Nom', 'Forme', 'Pourquoi'],
  rows: [
    { cells: ['une situation', 'où', 'vue comme un lieu'], say: fr(E(2135)),
      detail: { title: 'La situation', body: 'Où, ou dans laquelle, plus soutenu : les deux sont justes. EN: both are correct.', say: fr(E(2136)) } },
    { cells: ['le cas, le point', 'où, figé', 'un tour fixe'], say: fr(E(2137)),
      detail: { title: 'Les tours figés', body: 'Dans le cas où et au cas où prennent le conditionnel. EN: conditional after dans le cas où.', say: fr(E(2140)) } },
    { cells: ['un principe, une règle', 'sur lequel', 'reposer sur'], say: fr(E(2138)),
      detail: { title: 'Le principe', body: 'Ni un lieu ni un moment : la préposition du verbe, puis lequel. EN: the verb’s preposition.', say: fr(E(2145)) } },
    { cells: ['une méthode', 'par laquelle', 'dater par'], say: fr(E(2142)),
      detail: { title: 'La méthode', body: 'On procède par une méthode : par laquelle. EN: par laquelle.', say: 'Le moyen par lequel on y arrive reste secret.' } },
    { cells: ['une époque', 'où, jamais quand', 'un moment'], say: fr(E(2146)),
      detail: { title: 'Le moment', body: 'Un moment prend où, au C1 comme au B1. EN: où for a time.', say: 'Il y a des jours où tout va bien.' } },
    { cells: ['là où', 'sans nom devant', 'à l’endroit où'], say: fr('fr.c1.strategies-de-comprehension.2151'),
      detail: { title: 'Là où', body: 'Là où : au point précis où, au sens propre ou figuré. EN: right where.', say: fr('fr.c1.discours-dexamen.1424') } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['abstrait'],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a8-construire', layer: 'core', size: 'lg',
  title: 'Où, ou la préposition', frSub: 'Trois groupes, trois contrôles',
  groups: [
    grp('Où suffit', [
      it(E(2135), 'une situation'),
      it(E(2139), 'un domaine'),
      it(E(2140), 'au point où'),
      it(E(2141), 'dans la mesure où'),
    ], chk('« Je vous aiderai dans la mesure où je le pourrai. » Dans la mesure où veut dire…',
      ['autant que', 'à l’endroit où', 'au moment où'], 0,
      'Dans la mesure où : autant que, ou parce que. EN: insofar as.')),
    grp('La préposition du verbe', [
      it(E(2138), 'reposer sur'),
      it(E(2142), 'dater par'),
      it(E(2147), 'dans lequel : un contexte'),
      it('fr.c1.culture-profonde.122', 'aboutir à'),
    ], chk('« La règle … repose tout le système date de 1950. »',
      ['sur laquelle', 'où', 'dont'], 0,
      'Reposer sur : sur laquelle. EN: sur laquelle.')),
    grp('Là où, la conclusion', [
      it('fr.c1.discours-dexamen.1424', 'là où : le point de désaccord'),
      it('fr.c1.strategies-de-comprehension.2151', 'là où : au même endroit'),
      it('fr.c1.discours-dexamen.039', 'conduire à : à laquelle'),
    ], chk('« L’éditorial voit une frontière là où le reportage montre une fête. » Là où veut dire…',
      ['à l’endroit même où', 'parce que', 'pendant que'], 0,
      'Là où : le même point, vu de deux façons. EN: right where.')),
  ],
  audio: AUDIO, say: REFRAME, terms: ['abstrait'],
};

const A8_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a8-piege', layer: 'core', swipe: true,
  title: 'Où partout', frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Où pour un lieu, un moment, une situation',
    body: 'Où reprend un lieu, un moment ou une situation. Un principe, une méthode, une théorie demandent la préposition du verbe : sur lequel, par laquelle. Dans le cas où prend le conditionnel. EN: où for place, time or situation; otherwise the verb’s preposition.',
  },
  cards: [
    { promptLabel: 'reposer sur', promptSound: 'La règle où repose tout le système date de 1950.', fr: fr(E(2138)), ipa: ipaOf(E(2138)), tip: 'Une règle n’est pas un lieu : sur laquelle. EN: sur laquelle.' },
    { promptLabel: 's’appuyer sur', promptSound: 'La théorie où il s’appuie est contestée.', fr: fr(E(2145)), ipa: ipaOf(E(2145)), tip: 'S’appuyer sur : sur laquelle. EN: sur laquelle.' },
    { promptLabel: 'procéder par', promptSound: 'La méthode où l’on date les papiers est récente.', fr: fr(E(2142)), ipa: ipaOf(E(2142)), tip: 'On date par une méthode : par laquelle. EN: par laquelle.' },
    { promptLabel: 'un moment', promptSound: 'C’était une époque quand tout semblait possible.', fr: fr(E(2146)), ipa: ipaOf(E(2146)), tip: 'Une époque : où, jamais quand. EN: où.' },
    { promptLabel: 'dans la mesure', promptSound: 'Je vous aiderai dans la mesure que je le pourrai.', fr: fr(E(2141)), ipa: ipaOf(E(2141)), tip: 'Le tour est figé : dans la mesure où. EN: dans la mesure où.' },
    { promptLabel: 'dans le cas où', promptSound: 'Dans le cas où la salle sera fermée, appelez l’accueil.', fr: fr(E(2137)), ipa: ipaOf(E(2137)), tip: 'Dans le cas où : conditionnel, serait. EN: conditional.' },
  ],
  drill: [
    { promptSay: 'La règle … repose tout le système date de 1950.', opts: ['sur laquelle', 'où'], correct: 0 },
    { promptSay: 'Nous sommes dans une situation … chaque jour compte.', opts: ['où', 'sur laquelle'], correct: 0 },
    { promptSay: 'La méthode … on date les papiers est récente.', opts: ['par laquelle', 'où'], correct: 0 },
    { promptSay: 'C’était une époque … tout semblait possible.', opts: ['où', 'quand'], correct: 0 },
    { promptSay: 'Je vous aiderai dans la mesure … je le pourrai.', opts: ['où', 'que'], correct: 0 },
    { promptSay: 'Dans le cas où la salle … fermée, appelez l’accueil.', opts: ['serait', 'sera'], correct: 0 },
    { promptSay: 'La théorie … il s’appuie est contestée.', opts: ['sur laquelle', 'où'], correct: 0 },
    { promptSay: 'Il en est arrivé au point … plus rien ne l’étonne.', opts: ['où', 'auquel'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Où pour un lieu, un moment, une situation' },
    { label: 'Six cartes', kind: 'cards', title: 'Où là où il ne va pas' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-c1-04-piege-ou'), say: REFRAME, terms: ['abstrait'],
};

const A8_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a8-exemples', layer: 'core', sheetId: 'sheet-sens',
  title: 'Cinq noms abstraits', frSub: 'Où, ou la préposition',
  examples: [
    ex(E(2136), 'dans laquelle : plus soutenu que où, aussi juste'),
    ex(E(2147), 'le contexte : où ou dans lequel'),
    ex('fr.c1.culture-profonde.122', 'aboutir à : à laquelle, jamais où'),
    ex('fr.c1.discours-dexamen.039', 'conduire à : à laquelle'),
    ex('fr.c1.discours-dexamen.1424', 'là où : au point précis où'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['abstrait'],
};

const A8_TEXTE = dansUnTexte('a8-texte', 'Compléter : le rapport annuel', TEXTE_A8, [
  { q: 'Complète les deux premiers trous.', a: 'une période où chaque euro compte ; le principe sur lequel repose notre politique.' },
  { q: 'Complète : dans le cas (…) une salle (être) fermée.', a: 'dans le cas où une salle serait fermée : où, puis le conditionnel.' },
  { q: 'Complète : la méthode (…) nous datons les lettres.', a: 'la méthode par laquelle nous datons les lettres.' },
  { q: 'Complète le dernier : au point (…) presque chaque lettre trouve sa décennie.', a: 'au point où : un tour figé.' },
], 'rec-c1-04-texte-a8', ['abstrait']);

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Le principe', '« Le principe … repose notre politique reste simple. »',
    ['sur lequel', 'où'], 0,
    'Reposer sur : sur lequel. EN: sur lequel.'),
  ctl('Le cas', '« Dans le cas où la salle … fermée, appelez l’accueil. »',
    ['sera', 'serait'], 1,
    'Dans le cas où : conditionnel. EN: conditional.'),
  ctl('La situation', '« Une situation où chaque jour compte » : où est-il possible ?',
    ['oui : une situation se voit comme un lieu', 'non, jamais'], 0,
    'Une situation, un domaine, une époque : où va. EN: yes.'),
], ['abstrait']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Où, ou dans lequel',
    opener: {
      line: 'Une situation où chaque jour compte, un principe sur lequel tout repose : ici tu choisis entre où et la préposition du verbe. EN: A situation where every day counts, a principle everything rests on: here you choose between où and the verb’s preposition.',
      imageRef: 'lessons/relatives-complexes/act08.jpg',
    },
    sections: [],
    milestone: 'Après un nom abstrait, tu choisis où ou la préposition du verbe et lequel, et tu emploies les tours figés avec où. EN: After an abstract noun you choose où or preposition plus lequel.',
    estScreens: 38, restPoints: ['a8-table', 'a8-piege'],
  },
  sections: [A8_ECOUTE, A8_TABLE, A8_CONSTRUIRE, A8_PIEGE, A8_EXEMPLES, A8_TEXTE, A8_CHECK],
  imports: IMPORTED.act8,
};

ROUNDS.push({
  id: 'r8-abstrait', label: 'Où, ou dans lequel', targets: ['ou-abstrait'],
  questions: [
    tI('Complète (s’appuyer sur).', 'La théorie … il s’appuie est contestée.', fr(E(2145)), 'S’appuyer sur : sur laquelle. EN: sur laquelle.', 'a8-construire', ['sur laquelle']),
    tI('Complète (un moment).', 'C’était une époque … tout semblait possible.', fr(E(2146)), `Une époque : où, comme dans ${DONT_OU_REF}. EN: où.`, 'a8-table', ['où']),
    tI('Mets le verbe au bon mode.', 'Dans le cas où la salle (être) fermée, appelez l’accueil.', fr(E(2137)), 'Dans le cas où : conditionnel, serait. EN: serait.', 'a8-table', ['serait']),
    eS('La méthode où l’on date les papiers est récente.', fr(E(2142)), 'On date par une méthode : par laquelle. EN: par laquelle.', 'a8-piege', ['La méthode par laquelle l’on date les papiers est récente.']),
    eS('Je vous aiderai dans la mesure que je le pourrai.', fr(E(2141)), 'Le tour figé est dans la mesure où. EN: dans la mesure où.', 'a8-piege', ['Je vous aiderai dans la mesure où je pourrai.']),
    mc('« La règle … repose tout le système date de 1950. »', ['sur laquelle', 'où', 'dont'], 0, 'Reposer sur : sur laquelle. EN: sur laquelle.', 'a8-construire'),
    mc('Laquelle est la plus soutenue ?', [fr(E(2136)), fr(E(2135))], 0, 'Dans laquelle : plus soutenu ; les deux sont justes. EN: both correct.', 'a8-exemples'),
    lC('Écoute. Sur quoi porte le désaccord ?', fr('fr.c1.discours-dexamen.1424'), ['sur qui paie', 'sur la date', 'sur le lieu'], 0, 'Là où nos chemins se séparent : le point de désaccord. EN: who pays.', 'a8-ecoute'),
  ],
});
DRILL_LIST.push({ id: 'd-ou', title: 'Où, ou la préposition', format: 'mcq' as const, coach: 'Où pour un lieu, un moment, une situation ; sinon la préposition du verbe et lequel. EN: où, or the verb’s preposition.', q: 'La règle … repose tout le système date de 1950.', opts: ['sur laquelle', 'où'], correct: 0, why: 'Reposer sur : sur laquelle. EN: sur laquelle.', items: [E(2135), E(2137), E(2138), E(2141), E(2142), E(2146)], audio: AUDIO });
TRIGGER_LIST.push({ id: 'ou-abstrait', description: 'Uses où after any abstract noun (le principe où, la méthode où), writes quand for a moment, or puts the future after dans le cas où.', detectOn: ['a8-construire', 'a8-piege', 'a8-check', 'a11-mission'], drill: 'd-ou', retest: 'd-ou' });

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9: DES RELATIVES EMBOÎTÉES
 *
 *  A relative that contains another clause, by register; « c’est de cela
 *  dont ». The chronicle carries the norm verdicts (corpus §A.7 a, b).
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a9-lecture', layer: 'core', questionsInModal: true,
  title: 'La chronique « Langue vivante »', frSub: 'Deux phrases qu’un lecteur a entendues',
  text: LECTURE_CHRONIQUE,
  glossary: [
    { word: 'croisement', en: 'a crossing, a blend', note: 'Deux phrases qui se mélangent en une seule.' },
    { word: 'tournure', en: 'a turn of phrase', note: 'Une façon de construire une phrase.' },
    { word: 'prise', en: 'a hold', note: 'Donner prise à la critique : offrir une raison de critiquer.' },
  ],
  questions: [
    { q: 'Global : quelles deux phrases la chroniqueuse examine-t-elle ?', a: '« C’est un film que je crois qui va te plaire » et « C’est de cela dont il s’agit ».' },
    { q: 'Détail : quelles solutions propose-t-elle pour l’écrit ?', a: 'La plus simple : « un film qui, je crois, va te plaire ». La plus soutenue : « un film dont je crois qu’il va te plaire ». Correcte mais lourde : « un film que je crois que tu aimeras ».' },
    { q: 'Inférence : pourquoi le second reproche est-il « d’une autre nature » ?', a: 'La première phrase est familière, mais naturelle à l’oral. La seconde dit deux fois la même chose : de et dont marquent le même complément.' },
    { q: 'Position : la chroniqueuse condamne-t-elle la fille du lecteur ?', a: 'Non : c’est du français parlé familier. Elle propose seulement d’autres formes pour l’écrit.' },
  ],
  audio: REC('rec-c1-04-chronique'), say: REFRAME, terms: ['emboitement', 'registre'],
};

const A9_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a9-cartes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-registre',
  title: 'Une opinion dans une relative', frSub: 'Quatre formes, quatre registres',
  hint: 'Quatre cartes. La dernière se reconnaît, elle ne s’écrit pas.',
  audio: REC('rec-c1-04-emboite'), say: REFRAME, terms: ['emboitement', 'registre'],
  cards: [
    { head: 'L’incise', label: 'tous les registres', fr: fr(E(2155)), sub: rsOf(E(2155)),
      body: 'Je crois, entre deux virgules : l’opinion glisse dans la relative sans la compliquer. EN: the opinion slips in between commas.' },
    { head: 'Dont, puis que', label: 'écrit soutenu', fr: fr(E(2150)), sub: rsOf(E(2150)),
      body: 'Dont reprend le projet, et il le reprend dans la proposition suivante. Un tour d’essai et de lettre officielle. EN: a formal, essay register.' },
    { head: 'Que je crois que', label: 'correct, lourd', fr: fr(E(2153)), sub: rsOf(E(2153)),
      body: 'Grammaticalement juste, mais deux que se suivent. Évite-le dès que la phrase s’allonge. EN: correct but heavy.' },
    { head: 'Que je crois qui', label: 'oral familier', fr: fr(E(2154)), sub: rsOf(E(2154)),
      body: 'Deux phrases soudées en route. À reconnaître à l’oral ; à l’écrit, l’incise. EN: casual speech; recognise it, do not write it.' },
  ],
};

const A9_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a9-trier', layer: 'core', size: 'lg',
  title: 'Le bon registre', frSub: 'Trois groupes, trois contrôles',
  groups: [
    grp('Pour l’écrit', [
      it(E(2155), 'l’incise'),
      it(E(2150), 'dont + que'),
      it(E(2151), 'dont je sais qu’il'),
      it(E(2162), 'dont je doute qu’elles'),
    ], chk('« Voici le témoin dont je sais qu’il a menti. » Le registre ?',
      ['écrit soutenu', 'oral familier'], 0,
      'Dont + que : l’écrit soigné. EN: formal writing.')),
    grp('Correct, mais lourd', [
      it(E(2153), 'deux que'),
      it(E(2158), 'une relative dans une relative'),
      it(E(2159), 'la même idée, allégée'),
    ], chk('Pour alléger « le texte que l’archiviste dont je t’ai parlé a retrouvé », tu…',
      ['fais de l’archiviste le sujet de la phrase', 'ajoutes une troisième relative'], 0,
      'Une seule relative par nom, et la phrase respire. EN: one relative per noun.')),
    grp('De et dont', [
      it(E(2156), 'de cela, puis que'),
      it(E(2157), 'de cela, puis que'),
      it(E(2163), 'de ce projet, puis que'),
    ], chk('« C’est de ce projet … je voulais te parler. »',
      ['que', 'dont'], 0,
      'De est déjà écrit : que. EN: que.')),
  ],
  audio: AUDIO, say: REFRAME, terms: ['emboitement', 'registre'],
};

const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a9-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre phrases qu’on entend partout', frSub: 'Et ce qu’on écrit à la place',
  errors: [
    { wrong: 'C’est de cela dont il s’agit.', right: fr(E(2156)),
      why: 'Normal : on l’entend partout, même à la radio. Mais de et dont marquent deux fois le même complément. EN: de and dont say the same thing twice.' },
    { wrong: 'Je t’envoie un article que je crois qui va t’intéresser.', right: 'Je t’envoie un article qui, je crois, va t’intéresser.',
      why: 'Normal : à l’oral, la phrase passe. À l’écrit, l’incise est plus sûre et plus légère. EN: in writing, use the aside.' },
    { wrong: 'C’est de ce projet dont je voulais te parler.', right: fr(E(2163)),
      why: 'Normal : parler de appelle dont. Mais de est déjà devant ce projet : que suffit. EN: de is already there.' },
    { wrong: 'Voici le témoin que je sais qu’il a menti.', right: fr(E(2151)),
      why: 'Normal : que relie, et il reprend le témoin. À l’écrit, dont fait les deux à la fois : dont je sais qu’il. EN: dont does both jobs.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['emboitement', 'registre'],
};

const A9_DICTEE: Sec<'dictation'> = {
  type: 'dictation', id: 'a9-dictee', layer: 'core',
  title: 'Écris ce que tu entends', frSub: 'Les formes de l’écrit',
  itemIds: dicteeFor(9),
  audio: AUDIO, say: REFRAME, terms: ['emboitement'],
};

const A9_TEXTE = dansUnTexte('a9-texte', 'Lire : quatre messages', TEXTE_A9, [
  { q: 'Bastien à Inès : quel registre ? Récris pour l’écrit.', a: 'Oral familier (que je crois qui). À l’écrit : « un livre qui, je crois, va te plaire ».' },
  { q: 'Mathilde au comité : quel registre ?', a: 'Écrit soutenu : dont, puis que. La phrase est juste.' },
  { q: 'Karim à Mathilde : qu’est-ce qui ne va pas ?', a: 'De et dont ensemble. Écris : « C’est de cela que je voulais parler jeudi. »' },
  { q: 'Inès à Bastien : la phrase convient-elle ?', a: 'Oui : l’incise je crois convient à tous les registres.' },
], 'rec-c1-04-texte-a9', ['emboitement', 'registre']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Que je crois qui', '« Un livre que je crois qui te plaira » : à l’écrit ?',
    ['non : c’est de l’oral familier', 'oui : c’est soutenu'], 0,
    'À reconnaître, pas à écrire. EN: recognise, do not write.'),
  ctl('De et dont', 'Laquelle est juste ?',
    ['C’est de cela dont il s’agit.', fr(E(2156))], 1,
    'De devant cela, puis dont : le même complément deux fois. EN: not both for the same complement.'),
  ctl('L’incise', 'La forme qui convient à tous les registres :',
    ['qui, je crois,', 'dont je crois qu’il', 'que je crois qui'], 0,
    'L’incise passe partout. EN: the aside works everywhere.'),
], ['emboitement']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Des relatives emboîtées',
    opener: {
      line: 'Un livre que je crois qui te plaira : ici tu choisis la forme qui convient à l’écrit, et tu évites de dire deux fois la même chose. EN: A book I think you will like: here you choose the right written form and avoid saying the same thing twice.',
      imageRef: 'lessons/relatives-complexes/act09.jpg',
    },
    sections: [],
    milestone: 'Tu glisses une opinion dans une relative avec le registre qui convient, et tu n’écris plus « c’est de cela dont ». EN: You can fit an opinion into a relative clause in the right register, and no longer write « c’est de cela dont ».',
    estScreens: 38, restPoints: ['a9-lecture', 'a9-erreurs'],
  },
  sections: [A9_LECTURE, A9_CARTES, A9_TRIER, A9_ERREURS, A9_DICTEE, A9_TEXTE, A9_CHECK],
  imports: IMPORTED.act9,
};

ROUNDS.push({
  id: 'r9-emboitement', label: 'Des relatives emboîtées', targets: ['emboitement-registre'],
  questions: [
    mc('« C’est un livre que je crois qui te plaira. » Le registre ?', ['oral familier', 'écrit soutenu', 'administratif'], 0, 'Que je crois qui : du français parlé familier. EN: casual speech.', 'a9-cartes'),
    tI('Complète (de est déjà écrit).', 'C’est de ce projet … je voulais te parler.', fr(E(2163)), 'De est déjà devant ce projet : que. EN: que.', 'a9-trier', ['que']),
    eS('C’est de cela dont il s’agit.', fr(E(2156)), 'De et dont disent deux fois la même chose. EN: keep one.', 'a9-erreurs', ['C’est cela dont il s’agit.', 'C’est de ça qu’il s’agit.']),
    eS('Voici le témoin que je sais qu’il a menti.', fr(E(2151)), 'Dont reprend le témoin dans la proposition suivante. EN: dont je sais qu’il.', 'a9-erreurs', ['Voici le témoin qui, je le sais, a menti.', 'Voici le témoin qui, je sais, a menti.']),
    mc('Pour une lettre officielle, laquelle choisis-tu ?', [fr(E(2150)), 'C’est un projet que je crois qui va aboutir.'], 0, 'Dont + que : l’écrit soigné. EN: formal writing.', 'a9-trier'),
    mc('« Ce sont des questions dont je doute qu’elles soient réglées un jour. » Dont reprend…', ['des questions', 'un jour', 'le doute'], 0, 'Dont reprend le nom d’avant, repris ensuite par elles. EN: the questions.', 'a9-trier'),
    mc('Que fait l’incise dans « un livre qui, je crois, te plaira » ?', ['elle glisse l’opinion sans emboîter une proposition', 'elle trie les livres'], 0, 'L’opinion reste entre virgules. EN: an aside.', 'a9-cartes'),
    lC('Écoute. Quelle forme entends-tu ?', fr(E(2155)), ['l’incise : qui, je crois,', 'que je crois qui', 'dont je crois qu’il'], 0, 'Qui, puis je crois entre deux pauses. EN: the aside.', 'a9-lecture'),
  ],
});
DRILL_LIST.push({ id: 'd-registre', title: 'Le bon registre', format: 'flashcard' as const, coach: 'Lis chaque phrase et dis son registre : tous, soutenu, lourd ou familier. EN: name each register.', items: [E(2150), E(2151), E(2153), E(2155), E(2156), E(2162)], audio: AUDIO });
TRIGGER_LIST.push({ id: 'emboitement-registre', description: 'Writes que je crois qui or a resumptive pronoun (que je sais qu’il) in formal writing, or doubles the preposition with c’est de cela dont.', detectOn: ['a9-trier', 'a9-erreurs', 'a9-check', 'a11-mission'], drill: 'd-registre', retest: 'd-registre' });

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10: ALLÉGER LA CHAÎNE
 *
 *  Chains of qui lightened (participle, adjective, complement, two
 *  sentences), and the formal locutions read in dense prose (au cours
 *  duquel, à l’issue de laquelle, en vertu duquel, à l’égard desquels).
 *  Lesson 13 in B1 owns duquel after a compound preposition: read here,
 *  never re-taught.
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a10-lecture', layer: 'core', questionsInModal: true,
  title: 'Ce que le papier raconte', frSub: 'Un texte dense, comme à l’examen',
  text: LECTURE_PAPIER,
  glossary: [
    { word: 'filigrane', en: 'watermark', note: 'Un dessin visible dans le papier, quand on le regarde à contre-jour.' },
    { word: 'égouttée', en: 'drained', note: 'La pâte a perdu son eau en coulant à travers les fils.' },
    { word: 'étiquette', en: 'a label', note: 'Ici, une date posée sans preuve.' },
  ],
  questions: [
    { q: 'Global : de quoi parle l’article ?', a: 'De la façon dont les archivistes datent les lettres sans date : le papier d’abord, puis les indices du texte.' },
    { q: 'Détail : « au dessin duquel on reconnaît un moulin » : à quoi renvoie duquel ?', a: 'Au filigrane : on reconnaît un moulin au dessin du filigrane.' },
    { q: 'Détail : « ce qui oriente déjà l’enquête » : que reprend ce qui ?', a: 'Toute l’idée d’avant : le papier fabriqué en continu porte d’autres marques.' },
    { q: 'Inférence : que se passe-t-il si une date n’est pas justifiée par écrit ?', a: 'La lettre reste classée « sans date » : faute de quoi reprend l’obligation de justifier.' },
    { q: 'Position : pourquoi les fiches sont-elles ouvertes aux lecteurs ?', a: 'Pour qu’ils vérifient et contestent le raisonnement : une date qu’on ne peut pas discuter n’est qu’une étiquette.' },
  ],
  audio: REC('rec-c1-04-papier'), say: REFRAME, terms: ['accroche', 'registre'],
};

const A10_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a10-cartes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-registre',
  title: 'Alléger, et lire l’écrit dense', frSub: 'Quatre outils',
  hint: 'Quatre cartes. La dernière sert surtout à lire.',
  audio: REC('rec-c1-04-alleger'), say: REFRAME, terms: ['registre'],
  cards: [
    { head: 'La chaîne de qui', label: 'trois relatives', fr: fr(E(2165)), sub: rsOf(E(2165)),
      body: 'Trois qui à la suite : le lecteur perd le premier nom avant la fin. Chaque relative est juste ; la phrase ne l’est plus. EN: each clause is fine; the chain is not.' },
    { head: 'Garde une relative', label: 'un complément', fr: fr(E(2166)), sub: rsOf(E(2166)),
      body: 'Garde la relative qui compte, dis le reste par un complément : tout en haut de la rue. EN: keep one clause, turn the rest into a phrase.' },
    { head: 'Le participe', label: 'rédigé, publiée', fr: fr(E(2167)), sub: rsOf(E(2167)),
      body: 'Qui a été rédigé devient rédigé. Le participe garde le sens et enlève deux mots. EN: a participle replaces qui a été.' },
    { head: 'Les locutions de l’écrit', label: 'au cours de laquelle', fr: fr(E(2169)), sub: rsOf(E(2169)),
      body: 'Au cours de laquelle, en vertu duquel, à l’issue de laquelle : tu les liras dans les textes d’examen. Reprends le nom d’avant. EN: read them as hooks to the noun before.' },
  ],
};

const A10_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a10-trier', layer: 'core', size: 'lg',
  title: 'Lourd, léger, dense', frSub: 'Trois groupes, trois contrôles',
  groups: [
    grp('Trop lourd', [
      it(E(2165), 'trois qui'),
      it(E(2168), 'deux fois qui a été'),
      it(E(2158), 'une relative dans une relative'),
    ], chk('« La dame qui habite la maison qui est au bout de la rue qui monte » : combien de relatives ?',
      ['trois', 'une', 'deux'], 0,
      'Trois qui, trois relatives. EN: three.')),
    grp('Allégé', [
      it(E(2166), 'un complément'),
      it(E(2167), 'deux participes'),
      it(E(2175), 'datées'),
      it(E(2174), 'dont un seul'),
    ], chk('« Le rapport, rédigé en mars » : rédigé remplace…',
      ['qui a été rédigé', 'qui rédige'], 0,
      'Le participe passé : qui a été rédigé. EN: which was written.')),
    grp('Lire l’écrit soigné', [
      it(E(2169), 'au cours de laquelle'),
      it(E(2170), 'en vertu duquel'),
      it(E(2171), 'à l’égard desquels'),
      it(E(2176), 'à l’issue de laquelle'),
    ], chk('« L’accord en vertu duquel la ville gère le fonds » : duquel reprend…',
      ['l’accord', 'la ville', 'le fonds'], 0,
      'Duquel, masculin singulier, reprend le nom juste avant la locution : l’accord. EN: the agreement.')),
  ],
  audio: AUDIO, say: REFRAME, terms: ['registre'],
};

const A10_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a10-exemples', layer: 'core',
  title: 'Cinq phrases bien construites', frSub: 'Une idée, un crochet',
  examples: [
    ex(E(2174), 'dont un seul : une partie, sans verbe de trop'),
    ex(E(2175), 'datées : un participe à la place de qui sont datées'),
    ex(E(2159), 'l’archiviste sujet : une seule relative'),
    ex(E(2171), 'à l’égard desquels : les habitants'),
    ex(E(2176), 'à l’issue de laquelle : la visite'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['registre'],
};

const A10_HACKS: Sec<'hacks'> = {
  type: 'hacks', id: 'a10-hacks', layer: 'core',
  title: 'Trois astuces pour alléger',
  hacks: [
    { hack: 'Compte les qui : au troisième sur le même nom, remplace l’un par un participe ou un complément.',
      why: 'Au-delà de deux, le lecteur perd le premier nom. EN: past two, the reader loses the first noun.' },
    { hack: 'Qui a été + participe : garde le participe seul. Le rapport, rédigé en mars.',
      why: 'Le sens ne change pas, la phrase raccourcit. EN: same meaning, shorter.' },
    { hack: 'Lis ta phrase à voix haute : si tu manques de souffle avant le verbe principal, coupe.',
      why: 'Le verbe principal doit arriver avant que le lecteur oublie le sujet. EN: the main verb must come in time.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['registre'],
};

const A10_FOCUS: Sec<'focus'> = {
  type: 'focus', id: 'a10-focus', layer: 'core', sheetId: 'sheet-registre',
  title: 'Ce qu’il faut retenir avant d’écrire',
  points: [
    'Chaque relative tient à un seul nom : vérifie l’accord, ou lève le doute. EN: one noun per clause.',
    'Deux relatives au plus sur un même nom ; au-delà, un participe ou un complément. EN: two clauses at most per noun.',
    'À l’écrit, l’incise ou dont suivi de que ; jamais que je crois qui. EN: the aside or dont plus que in writing.',
    'Au cours duquel, en vertu duquel : pour accrocher un événement ou un texte. EN: formal hooks for events and texts.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['accroche', 'registre'],
};

const A10_TEXTE = dansUnTexte('a10-texte', 'Réécrire : le brouillon de Noé', TEXTE_A10, [
  { q: 'Combien de relatives compte la première phrase ?', a: 'Trois : qui est au premier étage, qui a été rénovée l’hiver dernier, qui ont réservé.' },
  { q: 'Allège la première phrase.', a: 'Par exemple : « La salle du premier étage, rénovée l’hiver dernier, accueille les lecteurs qui ont réservé. »' },
  { q: 'Allège la seconde.', a: 'Par exemple : « Le registre des délibérations d’avant 1900 est conservé dans une armoire fermée à clé. »' },
  { q: 'Quelle relative garderais-tu à coup sûr, et pourquoi ?', a: '« qui ont réservé » : elle trie les lecteurs. Sans elle, tout le monde pourrait entrer.' },
], 'rec-c1-04-texte-a10', ['registre']);

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('La chaîne', 'Trois qui sur le même nom. Que fais-tu ?',
    ['tu ajoutes des virgules', 'tu en remplaces un par un participe ou un complément'], 1,
    'Allège : un participe, un complément, ou deux phrases. EN: lighten.'),
  ctl('Le participe', '« Le rapport, qui a été rédigé en mars » devient…',
    ['le rapport, rédigé en mars', 'le rapport rédigeant en mars'], 0,
    'Le participe passé garde le sens passif. EN: the past participle.'),
  ctl('Au cours de laquelle', '« La réunion, au cours de laquelle trois projets ont été présentés » : laquelle reprend…',
    ['la réunion', 'les projets'], 0,
    'Laquelle, féminin singulier : la réunion. EN: the meeting.'),
], ['registre']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Alléger la chaîne',
    opener: {
      line: 'Trois qui à la suite et le lecteur se perd : ici tu allèges tes phrases, et tu lis sans peine l’écrit le plus dense. EN: Three qui in a row and the reader is lost: here you lighten your sentences and read dense prose with ease.',
      imageRef: 'lessons/relatives-complexes/act10.jpg',
    },
    sections: [],
    milestone: 'Tu allèges une chaîne de relatives et tu lis au cours duquel ou en vertu duquel sans perdre le nom. EN: You can lighten a chain of relatives and read formal locutions without losing the noun.',
    estScreens: 42, restPoints: ['a10-lecture', 'a10-exemples', 'a10-focus'],
  },
  sections: [A10_LECTURE, A10_CARTES, A10_TRIER, A10_EXEMPLES, A10_HACKS, A10_FOCUS, A10_TEXTE, A10_CHECK],
  imports: IMPORTED.act10,
};

ROUNDS.push({
  id: 'r10-alleger', label: 'Alléger la chaîne', targets: ['chaine-lourde'],
  questions: [
    mc('« Le rapport, rédigé en mars, contredit l’étude publiée l’an dernier. » Combien de relatives ?', ['aucune : deux participes les remplacent', 'deux', 'une'], 0, 'Rédigé et publiée remplacent deux relatives. EN: none.', 'a10-cartes'),
    tI('Écris le nom que reprend laquelle.', 'La visite, à l’issue de laquelle un verre sera servi, commence à dix-huit heures.', 'la visite', 'Laquelle, féminin singulier, reprend le nom d’avant la locution : la visite. Le verre est servi après elle. EN: the tour.', 'a10-trier', ['visite']),
    mc('« L’accord en vertu duquel la ville gère le fonds expire en 2030. » Qu’est-ce qui expire ?', ['l’accord', 'le fonds', 'la ville'], 0, 'Le sujet du verbe principal : l’accord. EN: the agreement.', 'a10-trier'),
    mc('Laquelle est la plus légère ?', [fr(E(2166)), fr(E(2165))], 0, 'Une relative et un complément. EN: one clause only.', 'a10-cartes'),
    mc('« Les habitants, à l’égard desquels la mairie s’était engagée, attendent toujours. » Envers qui la mairie s’était-elle engagée ?', ['envers les habitants', 'envers elle-même'], 0, 'Desquels, masculin pluriel : les habitants. EN: the residents.', 'a10-trier'),
    eS('Le rapport, rédigé en mars, contredit l’étude publié l’an dernier.', fr(E(2167)), 'Le participe qui remplace la relative s’accorde toujours : l’étude publiée. EN: the participle still agrees.', 'a10-cartes'),
    tI('Remplace la relative par un participe.', 'Les lettres qui sont datées d’avant 1920 sont conservées à part.', fr(E(2175)), 'Qui sont datées devient datées. EN: dated.', 'a10-hacks'),
    lC('Écoute. Combien de projets seront financés cette année ?', fr(E(2174)), ['un seul', 'trois', 'aucun'], 0, 'Dont un seul : un sur trois. EN: one.', 'a10-exemples'),
  ],
});
DRILL_LIST.push({ id: 'd-alleger', title: 'Alléger', format: 'flashcard' as const, coach: 'Lis chaque paire et dis comment la seconde phrase s’allège. EN: say how each sentence was lightened.', items: [E(2165), E(2166), E(2167), E(2168), E(2169), E(2175)], audio: AUDIO });
TRIGGER_LIST.push({ id: 'chaine-lourde', description: 'Stacks three or more relatives on one noun or nests one inside another in writing, or loses the noun behind au cours duquel and similar locutions.', detectOn: ['a10-trier', 'a10-hacks', 'a10-check', 'a11-mission'], drill: 'd-alleger', retest: 'd-alleger' });

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11: TA NOTICE
 *
 *  The model notice, the plan, a spoken role play, the written TASK, the
 *  speak practice, the cheat sheet, the progress check, the quiz (12 × 8),
 *  the review deck and the roundup.
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a11-lecture', layer: 'core', questionsInModal: true,
  title: 'La notice que tu vas imiter', frSub: 'L’imprimerie Lavallière, pour les Journées du patrimoine',
  text: LECTURE_MODELE,
  glossary: [
    { word: 'se sont tues', en: 'fell silent', note: 'De se taire : les presses ont cessé de tourner.' },
    { word: 'composteur', en: 'composing stick', note: 'L’outil où le typographe aligne les lettres de plomb.' },
    { word: 'casse', en: 'type case', note: 'La boîte à compartiments qui range les caractères.' },
  ],
  questions: [
    { q: 'Global : que présente la notice, et dans quel ordre ?', a: 'L’imprimerie : son histoire, ce qu’on y trouve, le quartier, puis les informations pratiques.' },
    { q: 'Détail : « La fille du fondateur, laquelle a dirigé l’imprimerie » : pourquoi laquelle ?', a: 'Pour montrer que c’est la fille, et non le fondateur, qui a dirigé l’imprimerie : laquelle est féminin.' },
    { q: 'Détail : relève une relative qui trie et une relative qui commente.', a: 'Qui trie : « les groupes qui souhaitent une visite guidée ». Qui commente : « les ateliers, qui ont gardé leurs machines d’origine ».' },
    { q: 'Inférence : que reprend quoi dans « faute de quoi nous ne pourrons pas les accueillir » ?', a: 'Toute la phrase d’avant : si les groupes ne réservent pas une semaine à l’avance.' },
  ],
  audio: REC('rec-c1-04-modele'), say: REFRAME, terms: ['accroche', 'registre'],
};

const A11_PLAN: Sec<'steps'> = {
  type: 'steps', id: 'a11-plan', layer: 'core', sheetId: 'sheet-registre',
  title: 'Cinq étapes avant d’écrire', frSub: 'Des notes à la notice',
  steps: [
    'Classe les notes en trois paragraphes : l’histoire, ce qu’on y trouve, les informations pratiques. EN: sort the notes into three paragraphs.',
    'Repère les groupes à chiffrer : deux bâtiments, trente mille livres. Un dont partitif les dira en une phrase. EN: use partitive dont for the numbers.',
    'Repère le piège des notes : le chef de gare et sa femme. Décide qui tenait le guichet, et que ta phrase le dise sans doute. EN: remove the ambiguity.',
    'Pour chaque relative, choisis : trier ou commenter, avec ou sans virgules. EN: decide sort or comment for each clause.',
    'Relis : pas plus de deux relatives par nom, un ce à quoi ou un faute de quoi, une salle où travailler. EN: reread with the checklist.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['accroche', 'registre'],
};

const A11_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a11-usages', layer: 'core', sheetId: 'sheet-registre',
  title: 'Quatre phrases que toute notice contient',
  cases: [
    { situation: 'Tu présentes le lieu et sa date', fr: fr(E(2180)), en: en(E(2180)) },
    { situation: 'Tu chiffres ce qu’on y trouve', fr: fr(E(2181)), en: en(E(2181)) },
    { situation: 'Tu dis à quoi sert un espace', fr: fr(E(2183)), en: en(E(2183)) },
    { situation: 'Tu termines sur une consigne', fr: fr(E(2189)), en: en(E(2189)) },
  ],
  audio: AUDIO, say: REFRAME, terms: ['accroche', 'registre'],
};

const A11_SCENARIO: Sec<'scenario'> = {
  type: 'scenario', id: 'a11-scenario', layer: 'core',
  title: 'Une visiteuse à la Maison des écritures', frSub: 'Six tours, à voix haute',
  setting: 'Journées du patrimoine, à la Maison des écritures. Une visiteuse a lu ta notice et te pose ses questions à l’entrée.',
  turns: [
    {
      ai: 'C’est vous qui avez écrit la notice ? Qui a dirigé l’imprimerie, au juste ?', en: 'Did you write the notice? Who exactly ran the print works?',
      user: 'La fille du fondateur : c’est elle qui l’a dirigée de 1952 à 1987.',
      userEn: 'The founder’s daughter: she is the one who ran it from 1952 to 1987. (In speech, split the sentence rather than use laquelle.)',
      alts: [
        { fr: 'C’est la fille du fondateur qui l’a dirigée, pendant trente-cinq ans.', en: 'It was the founder’s daughter who ran it, for thirty-five years.' },
        { fr: 'Sa fille, qui a pris la suite en 1952.', en: 'His daughter, who took over in 1952. (Qui after sa fille: no ambiguity left.)' },
      ],
    },
    {
      ai: 'Il y a combien d’ateliers ?', en: 'How many workshops are there?',
      user: 'Trois, dont un consacré à la reliure.',
      userEn: 'Three, one of them devoted to bookbinding. (Partitive dont, no verb.)',
      alts: [
        { fr: 'Trois ateliers, parmi lesquels un atelier de reliure.', en: 'Three workshops, including a bookbinding one. (Parmi lesquels.)' },
        { fr: 'Il y en a trois ; l’un d’eux est consacré à la reliure.', en: 'There are three; one of them is devoted to bookbinding.' },
      ],
    },
    {
      ai: 'Je cherche un coin tranquille pour écrire mes cartes postales.', en: 'I am looking for a quiet corner to write my postcards.',
      user: 'Au premier étage, il y a une salle où écrire au calme.',
      userEn: 'On the first floor there is a room to write in peace. (A relative ending on an infinitive.)',
      alts: [
        { fr: 'Montez au premier : vous y trouverez de quoi écrire, et du calme.', en: 'Go up to the first floor: you will find what you need to write there, and some quiet. (De quoi + infinitive.)' },
        { fr: 'La salle du premier étage est un endroit où l’on peut écrire tranquillement.', en: 'The first-floor room is a place where you can write in peace.' },
      ],
    },
    {
      ai: 'Et la ville, elle avait promis quoi, exactement ?', en: 'And what exactly had the town promised?',
      user: 'Ce à quoi elle s’était engagée, c’est de garder les presses en état de marche.',
      userEn: 'What it had committed to was keeping the presses in working order. (Ce à quoi: s’engager à.)',
      alts: [
        { fr: 'Elle s’était engagée à garder les presses en marche, et c’est chose faite.', en: 'It had committed to keeping the presses running, and it has done so.' },
        { fr: 'C’est la condition à laquelle tenait la fille du fondateur : des presses qui tournent.', en: 'That was the condition the founder’s daughter insisted on: presses that run. (A noun, so à laquelle.)' },
      ],
    },
    {
      ai: 'Je peux venir avec ma classe sans prévenir ?', en: 'Can I come with my class without warning?',
      user: 'Il faut réserver une semaine à l’avance, faute de quoi on ne pourra pas vous accueillir.',
      userEn: 'You need to book a week ahead, failing which we will not be able to welcome you. (Faute de quoi: otherwise, formal.)',
      alts: [
        { fr: 'Réservez une semaine avant, sinon nous aurons du mal à vous recevoir.', en: 'Book a week before, otherwise we will struggle to fit you in.' },
        { fr: 'Les groupes qui viennent sans réserver ne peuvent pas toujours entrer.', en: 'Groups who come without booking cannot always get in. (A sorting relative, no commas.)' },
      ],
    },
    {
      ai: 'Les anciens apprentis viendront tous à l’ouverture ?', en: 'Will all the former apprentices come to the opening?',
      user: 'Pas tous : les apprentis qui ont prêté des photos raconteront leur premier jour.',
      userEn: 'Not all of them: the apprentices who lent photos will talk about their first day. (No commas: only some.)',
      alts: [
        { fr: 'Trois d’entre eux parleront pendant l’exposition, au cours de laquelle on verra leurs photos.', en: 'Three of them will speak during the exhibition, in the course of which their photos will be shown.' },
        { fr: 'Certains, oui, dont deux qui ont travaillé ici plus de trente ans.', en: 'Some, yes, including two who worked here for over thirty years. (Partitive dont.)' },
      ],
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['accroche', 'registre'],
};

const A11_MISSION: Sec<'task'> = {
  type: 'task', id: 'a11-mission',
  title: 'La notice de la gare de Pont-Aurèle', frSub: 'Mission écrite, format C1',
  brief: `Les Archives de Pont-Aurèle te confient la notice de la gare restaurée, pour le site de la ville et le programme des Journées du patrimoine. Mathilde t’a laissé ses notes, en style télégraphique. Rédige une notice suivie, précise et agréable à lire, en t’inspirant de celle de l’imprimerie Lavallière sans la recopier. Les notes de Mathilde : ${NOTES_GARE}`,
  briefEn: 'The Pont-Aurèle Archives ask you to write the notice for the restored railway station, for the town’s website and the Heritage Days programme. Mathilde has left you her notes in telegraphic style. Write a continuous, precise and readable notice, inspired by the Lavallière print works notice without copying it.',
  produce: 'Écris une notice de 250 à 350 mots, en paragraphes : l’histoire de la gare, ce qu’on y trouve, les informations pratiques. Emploie au moins un dont partitif (ou parmi lesquels), une préposition suivie de quoi (ce à quoi, faute de quoi), une relative à l’infinitif ou de quoi suivi d’un infinitif, une explicative et une déterminative choisies exprès, et où ou une préposition suivie de lequel après un nom abstrait. Lève l’ambiguïté des notes sur le chef de gare et sa femme. Jamais plus de deux relatives sur un même nom.',
  responseSpec: { kind: 'text', minWords: 250, maxWords: 385 },
  rubric: {
    criteria: [
      {
        key: 'tache', label: 'Réalisation de la tâche', maxPoints: 3,
        descriptors: [
          '3 : Toutes les informations utiles des notes passent dans la notice, en trois parties claires, avec un ton de présentation publique. Entre 250 et 350 mots.',
          '2 : La notice existe, mais une partie manque, ou des notes restent en style télégraphique, ou la longueur sort un peu des limites.',
          '1 : Une liste à peine rédigée, ou un texte beaucoup trop court.',
        ],
      },
      {
        key: 'coherence', label: 'Cohérence et cohésion', maxPoints: 3,
        descriptors: [
          '3 : Le lecteur suit sans effort : chaque relative tient à un seul nom, les paragraphes s’enchaînent, aucune phrase ne laisse deviner à qui renvoie un pronom.',
          '2 : Le texte se suit, mais une relative ou un pronom reste ambigu, ou une phrase s’essouffle sous ses relatives.',
          '1 : On ne sait pas toujours de qui ou de quoi parle la notice.',
        ],
      },
      {
        key: 'etendue', label: 'Étendue des structures', maxPoints: 2,
        descriptors: [
          '2 : Tu varies les relatives du C1 : dont partitif, préposition suivie de quoi, relative à l’infinitif, explicative et déterminative choisies, où ou lequel après un nom abstrait.',
          '1 : Les relatives se limitent à qui et que, ou toujours au même tour.',
        ],
      },
      {
        key: 'correction', label: 'Correction', maxPoints: 2,
        descriptors: [
          '2 : Les relatives sont presque toujours justes : pas de dont suivi de en, pas de que suivi d’un infinitif, la bonne préposition devant quoi et lequel, les accords qui montrent le nom.',
          '1 : Des erreurs fréquentes (ce que je m’attendais, le principe où, c’est de cela dont) gênent parfois la lecture.',
        ],
      },
      {
        key: 'registre', label: 'Registre et ton', maxPoints: 2,
        descriptors: [
          '2 : Un français écrit, soigné et accueillant, adapté à une notice publique : ni style oral, ni jargon administratif.',
          '1 : Le texte sonne comme un message rapide, ou comme un règlement.',
        ],
      },
    ],
  },
  scaffold: [
    'Construite en 1898,',
    'Elle compte deux bâtiments, dont',
    'Le chef de gare vivait à l’étage ;',
    'Leur petite-fille a donné',
    'On y trouvera de quoi',
    'une salle où',
    'C’est ce à quoi la ville',
    'faute de quoi',
  ],
  modelAnswer: 'La gare de Pont-Aurèle rouvre ses portes.\n\nConstruite en 1898, la gare de Pont-Aurèle a vu passer des générations de voyageurs jusqu’en 1974, année où le dernier train de passagers s’y est arrêté. Elle compte deux bâtiments, dont l’ancienne halle aux marchandises, devenue une salle d’exposition. Après trois ans de travaux, elle rouvre le 19 septembre sous la forme d’une médiathèque.\n\nPendant des décennies, le chef de gare a vécu à l’étage avec sa femme ; c’est elle qui tenait le guichet. Leur petite-fille a donné aux Archives les registres de la gare, parmi lesquels des horaires, des carnets de colis et des lettres de voyageurs. Ces documents, qui n’avaient jamais quitté la famille, seront présentés dans la halle. Ils racontent une époque où l’on attendait le train comme on attend aujourd’hui un message.\n\nLa médiathèque propose trente mille livres, dont quatre mille pour la jeunesse. Les lecteurs y trouveront de quoi passer un après-midi entier : une salle où travailler en groupe, des coins de lecture et une terrasse installée sur les anciens quais. L’horloge de la façade, à laquelle les habitants tiennent beaucoup, donne toujours l’heure. C’est d’ailleurs ce à quoi la ville s’était engagée dès le début du projet : garder le visage de la gare, et lui rendre une vie.\n\nInformations pratiques. La médiathèque est ouverte du mardi au dimanche. Les groupes qui souhaitent une visite doivent réserver dix jours à l’avance, faute de quoi nous ne pourrons pas garantir leur accueil.\n\nLes repères de la correctrice (hors décompte) :\n1. Tâche : toutes les notes sont rédigées, en trois parties ; le ton est celui d’une notice publique.\n2. Cohérence : le chef de gare et sa femme sont séparés par un point-virgule et « c’est elle qui » ; aucune relative ne tient à deux noms.\n3. Étendue : dont partitif (deux bâtiments, trente mille livres), parmi lesquels, de quoi passer, une salle où travailler, ce à quoi, faute de quoi, une époque où, à laquelle les habitants tiennent.\n4. Correction : pas de dont suivi de en, s’engager à donne ce à quoi, tenir à donne à laquelle.\n5. Registre : soigné et accueillant ; une explicative (ces documents, qui…) et une déterminative (les groupes qui…) choisies exprès.',
  modelAnswerEn: 'The Pont-Aurèle railway station reopens. Built in 1898, the station saw generations of travellers pass through until 1974, the year the last passenger train stopped there. It has two buildings, including the former goods hall, now an exhibition room. After three years of work it reopens on 19 September as a media library. For decades the stationmaster lived upstairs with his wife; she was the one who ran the ticket office. Their granddaughter gave the station registers to the Archives, among them timetables, parcel books and travellers’ letters. These documents, which had never left the family, will be shown in the hall. They tell of a time when people waited for the train as we wait for a message today. The library offers thirty thousand books, four thousand of them for young readers. Readers will find enough to fill a whole afternoon: a room for group work, reading corners and a terrace on the old platforms. The clock on the façade, which residents are very attached to, still tells the time. That is what the town committed to from the start: keeping the station’s face and giving it a new life. Practical information: open Tuesday to Sunday. Groups wishing to visit must book ten days ahead, failing which we cannot guarantee their welcome. The marker’s notes (not counted): every note is written up in three parts; the stationmaster ambiguity is resolved; the C1 relatives are varied and correct; the register suits a public notice.',
  watchFor: [
    { pattern: 'A relative clause that can hang on two nouns, typically « le chef de gare et sa femme, qui tenait le guichet » or « la petite-fille du chef de gare, qui… ».', criterion: 'coherence', feedback: 'À quel nom tient ta relative ? Lève le doute : un accord, deux phrases, ou lequel à l’écrit.', ref: 'a5-piege' },
    { pattern: 'Lequel as subject without commas, agreed with the wrong noun, or used where both nouns share gender and number.', criterion: 'correction', feedback: 'Lequel sujet seulement entre virgules, et seulement s’il tranche vraiment.', ref: 'a6-erreurs' },
    { pattern: 'A redundant en or d’entre eux after partitive dont (dont j’en, dont quatre mille d’entre eux), or a singular verb after dont la plupart.', criterion: 'correction', feedback: 'Dont prend déjà la partie : n’ajoute ni en ni d’entre eux.', ref: 'a2-erreurs' },
    { pattern: 'The verb’s preposition dropped after ce (ce que la ville s’était engagée), or ce dont for a verb with à.', criterion: 'correction', feedback: 'S’engager à, tenir à : ce à quoi, à laquelle.', ref: 'a3-piege' },
    { pattern: 'Que + infinitive, or a stranded preposition calqued on English (une salle pour travailler dans, rien à lire avec).', criterion: 'correction', feedback: 'Une salle où travailler, de quoi lire : la préposition passe devant.', ref: 'a4-erreurs' },
    { pattern: 'Commas that change who is concerned against the notes (les groupes, qui souhaitent une visite, doivent réserver: all groups).', criterion: 'coherence', feedback: 'Tous ou certains ? Sans virgules, la relative trie ; avec, elle parle de tous.', ref: 'a7-piege' },
    { pattern: 'Où after a noun that is neither a place nor a time (le principe où, la condition où), or the future after dans le cas où.', criterion: 'correction', feedback: 'Où pour un lieu, un moment, une situation ; sinon la préposition du verbe et lequel.', ref: 'a8-piege' },
    { pattern: 'Que je crois qui, a resumptive pronoun (que je sais qu’il), or c’est de cela dont in the notice.', criterion: 'registre', feedback: 'À l’écrit : qui, je crois, ou dont je crois qu’il ; c’est de cela qu’il s’agit, jamais c’est de cela dont.', ref: 'a9-erreurs' },
    { pattern: 'Three or more relatives hanging on one noun, or a relative nested in a relative.', criterion: 'coherence', feedback: 'Allège : un participe, un complément, ou deux phrases.', ref: 'a10-hacks' },
    { pattern: 'Notes copied in telegraphic style, or the model notice reproduced with the names changed.', criterion: 'tache', feedback: 'Rédige tes propres phrases à partir des notes ; la notice modèle donne le ton, pas le texte.', ref: 'a11-plan' },
    { pattern: 'Only qui and que relatives, with none of the C1 structures; or a body outside 250 to 350 words.', criterion: 'etendue', feedback: 'Ajoute un dont partitif, un ce à quoi ou un faute de quoi, une salle où travailler ; compte tes mots sans le titre.', ref: 'a11-usages' },
    { pattern: 'A chatty or administrative tone (n’hésitez surtout pas, il est porté à la connaissance du public que).', criterion: 'registre', feedback: 'Une notice publique : soignée, claire, accueillante.', ref: 'a11-lecture' },
  ],
  graderNotes: [
    'Count the words of the notice only; the title and the « Informations pratiques » label count, the marker’s notes in the model do not apply to the learner. 250 to 350 with 10% tolerance (225 to 385) before criterion « tache » loses a point. responseSpec allows 385.',
    'The notes say « le chef de gare et sa femme (elle tenait le guichet) ». Any clear rendering earns the coherence point (split sentence, « c’est elle qui », « sa femme, qui tenait le guichet », laquelle where it really decides). A « qui » that could refer to the stationmaster loses it.',
    'Lequel as subject is accepted, not required. Do not reward it where qui is unambiguous; do not penalise qui where nothing is ambiguous.',
    'Accept où and dans lequel both after époque, situation, contexte, période; « l’année où » and « l’année pendant laquelle » are both correct.',
    '« Ce à quoi…, c’est à… » and « ce à quoi…, c’est… »: accept both (the preposition may be repeated after c’est).',
    'Accept « parmi lesquels » and partitive « dont » with or without a verb. Accept « dont la plupart » with a plural verb only.',
    'The subjunctive in relatives (une salle qui soit…) belongs to lesson 6 in B2: accept a correct one, do not require it.',
    'Accept regional vocabulary (médiathèque, bibliothèque; gare, station in Québec only if used of a railway station) and either French or Québec typographic spacing.',
    'Feedback language: natural C1 French, addressed as « tu », with one short English gloss allowed per comment. Name the section to revisit from watchFor.ref. Cite other lessons by trail position (« la leçon 13 du B1 »), never by id.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['accroche', 'registre'],
};

/** Say the lesson out loud. Every id carries `voiceflash`. */
const A11_PARLER: Sec<'practice'> = {
  type: 'practice', id: 'a11-parler', layer: 'core',
  title: 'Dis tes phrases à voix haute', frSub: 'Dont, quoi, où, lequel',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id) && (SEED.get(id)?.drills ?? []).includes('voiceflash')),
  ],
  audio: AUDIO, say: REFRAME, terms: ['accroche'],
};

const A11_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet', id: 'a11-cheat', layer: 'core', sheetId: 'sheet-accroche',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'une partie', v: 'dont deux, dont la plupart', say: fr(E(2015)),
      detail: { title: 'Dont partitif', body: 'Dont suivi d’une quantité prend une part du groupe ; ni en, ni d’entre eux. EN: part of the group.', say: fr(E(2017)) } },
    { k: 'pas de nom', v: 'ce à quoi, faute de quoi', say: fr(E(2035)),
      detail: { title: 'Préposition + quoi', body: 'Le verbe garde sa préposition, quoi la suit. EN: keep the preposition.', say: fr(E(2042)) } },
    { k: 'un but', v: 'où dormir, de quoi vivre', say: fr(E(2055)),
      detail: { title: 'La relative à l’infinitif', body: 'Où ou une préposition, puis l’infinitif ; jamais que. EN: never que.', say: fr(E(2059)) } },
    { k: 'à quel nom', v: 'l’indice, sinon réécrire', say: fr(E(2076)),
      detail: { title: 'L’accroche', body: 'Le verbe, l’accord, le sens ; ou lequel à l’écrit, ou deux phrases. EN: find the clue or repair.', say: fr(E(2095)) } },
    { k: 'les virgules', v: 'tous, ou certains', say: fr(E(2116)),
      detail: { title: 'Explicative ou déterminative', body: 'Avec virgules : tous, et souvent une raison. Sans : un tri. EN: all, or some.', say: fr(E(2115)) } },
    { k: 'un nom abstrait', v: 'où, ou sur lequel', say: fr(E(2138)),
      detail: { title: 'Où ou lequel', body: 'Où pour une situation ; la préposition du verbe pour un principe. EN: où or the verb’s preposition.', say: fr(E(2135)) } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['accroche', 'registre'],
};

const A11_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck', id: 'a11-progress', layer: 'core',
  title: 'Où tu en es',
  body: 'Tu ne te demandes plus seulement quel pronom choisir : tu sais à quel nom tient chaque relative, et ce qu’elle lui ajoute. Tu prends une partie d’un groupe avec dont, tu gardes la préposition devant quoi, tu dis un but avec où dormir et de quoi vivre, tu lèves une ambiguïté par l’accord, par lequel ou en coupant, tu choisis tes virgules, et tu sais quand où ne suffit plus. Le piège qui reste, c’est la phrase longue : à force d’accrocher, on accroche au mauvais nom. Avant l’examen, relis une page que tu as écrite et entoure chaque qui, que, dont et lequel ; trace une flèche vers son nom. Si une flèche hésite entre deux noms, réécris la phrase. EN: Circle every relative pronoun in a page you wrote and draw an arrow to its noun; if an arrow hesitates, rewrite.',
  stats: [
    { k: 'La question', v: 'à quel nom, et pour dire quoi' },
    { k: 'Les formes', v: 'dont deux, ce à quoi, où dormir' },
    { k: 'Le piège', v: 'la relative qui tient à deux noms' },
    { k: 'Le registre', v: 'lequel sujet et dont que : l’écrit' },
  ],
  audio: AUDIO, say: REFRAME,
};

const ANNONCE = 'Annonce des Archives de Pont-Aurèle. La visite des réserves, à l’issue de laquelle un verre sera servi, aura lieu samedi à seize heures. Les places sont limitées : réservez avant jeudi, faute de quoi nous ne pourrons pas garantir votre accueil.';

ROUNDS.push({
  id: 'r11-recyclage', label: 'Le B1 et le B2 en renfort', targets: ['recyclage-b1'],
  questions: [
    mc(`${Cap(QUI_QUE_REF)} : « Les gens qui arrivent en retard attendent dehors. » Tous les gens arrivent-ils en retard ?`, ['non, seulement certains', 'oui, tous'], 0, `« ${B111_REFRAME} » Sans virgules, la relative trie. EN: ${B111_REFRAME_EN}`, 'a1-rappel'),
    tI(`${Cap(DONT_OU_REF)} : complète.`, 'Le livre … je t’ai parlé est à la bibliothèque.', fr(PE1(1221)), `« ${B112_REFRAME} » EN: ${B112_REFRAME_EN}`, 'a1-rappel', ['dont']),
    mc(`${Cap(DONT_OU_REF)} : « La femme dont le fils est médecin habite en face. » De qui est le fils ?`, ['de la femme', 'du médecin'], 0, 'Dont reprend la femme. EN: the woman’s son.', 'a1-rappel'),
    tI(`${Cap(LEQUEL_REF)} : complète (à côté de).`, 'Le bâtiment à côté … nous garons le camion est une école.', fr(PE1(1472)), `« ${B113_REFRAME} » EN: ${B113_REFRAME_EN}`, 'a1-rappel', ['duquel']),
    eS('La raison pourquoi je viens ici, c’est le silence.', fr(PE1(1489)), `${Cap(LEQUEL_REF)} : la raison pour laquelle, jamais pourquoi. EN: pour laquelle.`, 'a1-rappel', ['La raison pour laquelle je viens ici, c’est le silence.']),
    mc(`${Cap(LEQUEL_REF)} : « … tu parles est déjà réparé. »`, ['Ce dont', 'Ce que', 'Dont'], 0, 'Pas de nom devant, parler de : ce dont. EN: ce dont.', 'a1-rappel'),
    mc(`${Cap(SUBJ_IND_REF)} : tu ne l’as pas encore trouvée. « Je cherche une colocataire qui … cuisiner. »`, ['sache', 'sait'], 0, `« ${B206_REFRAME} » EN: ${B206_REFRAME_EN}`, 'a1-rappel'),
    lC(`Écoute. ${Cap(SUBJ_IND_REF)} : cet architecte est-il jugé unique ?`, fr(OA2(1883)), ['oui, c’est un jugement', 'non, c’est un simple fait'], 0, 'Le seul qui puisse : le subjonctif juge. EN: a judgement.', 'a1-rappel'),
  ],
});
ROUNDS.push({
  id: 'r12-examen', label: 'Comme à l’examen', targets: ['mode-examen'],
  questions: [
    mc('Format TCF tout public (structures de la langue). Choisissez la bonne réponse : « Le projet … nous avons discuté hier sera présenté lundi. »', ['dont', 'que', 'duquel', 'auquel'], 0, 'Discuter de : dont. EN: dont.', 'a1-rappel'),
    mc('Format TCF tout public : « C’est une question … personne n’a encore répondu. »', ['à laquelle', 'dont', 'que', 'où'], 0, 'Répondre à une question : à laquelle. EN: à laquelle.', 'a3-cartes'),
    mc('Format TCF tout public : « La salle … se tiendra la réunion n’est pas encore choisie. »', ['dans laquelle', 'dont', 'que', 'laquelle'], 0, 'Dans la salle : dans laquelle (où aussi). EN: dans laquelle.', 'a8-table'),
    mc('Compréhension écrite. « Le rapport, dont plusieurs passages ont été contestés, sera publié jeudi. » Que dit la phrase ?', ['une partie du rapport a été contestée', 'tout le rapport a été rejeté', 'le rapport ne sera pas publié'], 0, 'Dont plusieurs passages : une partie. EN: part of it.', 'a2-cartes'),
    mc('Compréhension écrite. « Le directeur de l’agence, laquelle a fermé hier, sera reçu par le maire. » Qu’est-ce qui a fermé ?', ['l’agence', 'le directeur', 'on ne peut pas le savoir'], 0, 'Laquelle, féminin : l’agence. EN: the agency.', 'a6-cartes'),
    mc('Compréhension écrite. « Les habitants, qui avaient été consultés, ont approuvé le projet. » Combien d’habitants avaient été consultés ?', ['tous', 'une partie seulement', 'aucun'], 0, 'Entre virgules : tous. EN: all.', 'a7-cartes'),
    tI('Phrase à compléter.', 'C’est exactement ce … nous nous attendions.', 'C’est exactement ce à quoi nous nous attendions.', 'S’attendre à : ce à quoi. EN: ce à quoi.', 'a3-cartes', ['à quoi', 'ce à quoi']),
    lC('Compréhension orale. Écoute cette annonce. Que se passe-t-il si l’on ne réserve pas avant jeudi ?', ANNONCE, ['l’accueil n’est pas garanti', 'la visite est gratuite', 'la visite est annulée'], 0, 'Faute de quoi : sinon, l’accueil n’est pas garanti. EN: entry not guaranteed.', 'a3-table'),
  ],
});
DRILL_LIST.push({ id: 'd-recyclage', title: 'Le B1 et le B2 en renfort', format: 'flashcard' as const, coach: 'Six phrases du B1 et du B2 : dis pour chacune à quel nom tient la relative. EN: say which noun each clause hangs on.', items: [PE1(1150), PE1(1221), PE1(1265), PE1(1472), PE1(1489), OA2(1864)], audio: AUDIO });
DRILL_LIST.push({ id: 'd-examen', title: 'La notice, phrase par phrase', format: 'flashcard' as const, coach: 'Lis les phrases de la notice modèle et dis ce que fait chaque relative. EN: read the model notice aloud.', items: [E(2180), E(2181), E(2182), E(2184), E(2185), E(2189)], audio: AUDIO });
TRIGGER_LIST.push({ id: 'recyclage-b1', description: 'Loses a B1 or B2 foundation this lesson builds on: dont for a de complement, duquel after a compound preposition, ce dont, the mood of a relative.', detectOn: ['a1-rappel', 'a2-cartes', 'a3-cartes'], drill: 'd-recyclage', retest: 'd-recyclage' });
TRIGGER_LIST.push({ id: 'mode-examen', description: 'In an exam-format item or the notice, picks the relative by ear or by the nearest noun instead of by the verb’s construction and the noun it hangs on.', detectOn: ['a11-plan', 'a11-scenario', 'a11-mission'], drill: 'd-examen', retest: 'd-examen' });

const A11_QUIZ: Sec<'quiz'> = {
  type: 'quiz', id: 'a11-quiz', layer: 'core', title: 'L’examen',
  passMark: 70, roundFailThreshold: 60,
  rounds: ROUNDS,
  audio: AUDIO, say: REFRAME,
};

/** The quiz-spread rule is checked on AUTHORED order although LessonRich
 *  reshuffles options on every attempt. So each closed question's options
 *  are ROTATED, `correct` moved in step, onto the least-used slot so far.
 *  The option set and the right answer are unchanged. As b2.06 does. */
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
spreadSlots(A11_QUIZ);

const A11_REVIEW: Sec<'reviewDeck'> = {
  type: 'reviewDeck', id: 'a11-review', layer: 'core', title: 'Une dernière fois',
  cards: [
    { front: 'la question du C1', back: 'à quel nom tient la relative, et ce qu’elle ajoute', say: fr(E(2001)) },
    { front: 'une partie du groupe', back: 'dont deux, dont la plupart, parmi lesquels', say: fr(E(2015)) },
    { front: 'une préposition, pas de nom', back: 'ce à quoi, ce sur quoi, rien à quoi', say: fr(E(2035)) },
    { front: 'quoi reprend une phrase', back: 'sans quoi, faute de quoi, après quoi', say: fr(E(2042)) },
    { front: 'un but, sans sujet', back: 'un endroit où dormir, de quoi vivre', say: fr(E(2055)) },
    { front: 'l’indice', back: 'le verbe, l’accord, le sens', say: fr(E(2081)) },
    { front: 'lever le doute à l’écrit', back: 'lequel sujet, entre virgules', say: fr(E(2095)) },
    { front: 'avec ou sans virgules', back: 'tous, ou seulement certains', say: fr(E(2116)) },
    { front: 'une opinion dans la relative', back: 'qui, je crois, ou dont je crois qu’il', say: fr(E(2155)) },
  ],
  audio: AUDIO, say: REFRAME,
};

const A11_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup', id: 'a11-roundup', layer: 'core',
  title: 'Le bon crochet',
  body: `${REFRAME} Tu as repris les pronoms de ${B1_RANGE_REF} et le mode de ${SUBJ_IND_REF}, et tu en as fait un outil d’écriture : une partie avec dont, une préposition avec quoi, un but avec où dormir, un doute levé par l’accord ou par lequel, des virgules choisies, où ou lequel selon le nom. Dans les textes d’examen des leçons 20 et 24 du C1, relis chaque longue phrase avec cette question : à quel nom tient la relative ? EN: In the exam texts of lessons 20 and 24 in C1, reread every long sentence asking which noun each relative clause hangs on.`,
  points: [
    'Une relative tient à un seul nom ; sache lequel.',
    'Dont deux, ce à quoi, un endroit où dormir : les formes du C1.',
    'Avec virgules, tous ; sans virgules, certains.',
    'Lequel sujet et dont que appartiennent à l’écrit soigné.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['accroche', 'registre'],
};

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Ta notice',
    opener: {
      line: 'Une gare restaurée et des notes en vrac : ici tu rédiges la notice publique, puis tu passes l’examen. EN: A restored station and a heap of notes: here you write the public notice, then sit the exam.',
      imageRef: 'lessons/relatives-complexes/act11.jpg',
    },
    sections: [],
    milestone: 'Tu as rédigé ta notice et passé l’examen : quatre-vingt-seize questions, douze séries. EN: You wrote your notice and sat the exam: ninety-six questions, twelve rounds.',
    estScreens: 150,
    restPoints: ['a11-plan', 'a11-scenario', 'a11-mission', 'a11-cheat', 'a11-quiz/r4-infinitif', 'a11-quiz/r8-abstrait', 'a11-review'],
  },
  sections: [
    A11_LECTURE, A11_PLAN, A11_USAGES, A11_SCENARIO, A11_MISSION, A11_PARLER,
    A11_CHEAT, A11_PROGRESS, A11_QUIZ, A11_REVIEW, A11_ROUNDUP,
  ],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS, SPREADS AND ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-dont', 'Dont : une partie du tout', ['dont + quantité', 'parmi lesquels', 'les redondances', 'le rappel du B1'], [
    teach('sheet-dont-teach', 'Un nombre après dont',
      `${Cap(DONT_OU_REF)} t’a donné dont pour un complément en de : « ${B112_REFRAME} » Au C1, dont suivi d’un nombre, d’une fraction ou d’un quantifieur prend une partie du groupe qui précède : trente bénévoles, dont douze étudiants. Le verbe peut manquer. Avec une préposition, parmi lesquels. Dont dit déjà « de ce groupe » : n’ajoute ni en, ni d’entre eux. EN: dont plus a quantity takes part of the group; never add en or d’entre eux.`),
    table('sheet-dont-table', 'Les formes', ['Forme', 'Sens', 'Exemple'], [
      ['dont + nombre', 'une partie, sans verbe', 'Trente bénévoles se sont inscrits, dont douze étudiants.'],
      ['dont + nombre + verbe', 'une partie, avec verbe', 'Elle a trois enfants, dont deux vivent à Montréal.'],
      ['dont la plupart', 'verbe au pluriel', 'Les cartons, dont la plupart sont encore fermés, attendent dans le couloir.'],
      ['dont certains, dont certaines', 'quelques-uns', 'Des centaines de photos, dont certaines n’ont jamais été montrées, seront numérisées.'],
      ['dont la moitié, dont un tiers', 'une fraction', 'Le budget, dont la moitié vient de dons privés, a été voté.'],
      ['dont moi, dont la plus ancienne', 'y compris', 'Plusieurs lettres ont disparu, dont la plus ancienne.'],
      ['parmi lesquels, parmi lesquelles', 'avec une préposition', 'Le comité a reçu quarante dossiers, parmi lesquels six venaient de l’étranger.'],
      ['dont je connaissais trois', 'sans en', 'Il y avait six candidats, dont je connaissais trois.'],
    ]),
  ]),
  sheet('sheet-quoi', 'Quoi, et la relative à l’infinitif', ['préposition + quoi', 'sans quoi, faute de quoi', 'où dormir, de quoi vivre'], [
    teach('sheet-quoi-teach', 'Pas de nom devant',
      `${Cap(LEQUEL_REF)} disait : « ${B113_REFRAME} » Quand le verbe veut une préposition et que rien ne précède, ce prend la place du nom et quoi suit la préposition : ce à quoi, ce sur quoi. Avec rien, quelque chose ou voilà, quoi aussi. Après un vrai nom, lequel ; quoi y est littéraire. Sans quoi, faute de quoi, après quoi, moyennant quoi reprennent toute la phrase d’avant. EN: no noun in front plus a preposition gives quoi; after a noun, lequel.`),
    table('sheet-quoi-table', 'Préposition + quoi', ['Forme', 'Verbe ou sens', 'Exemple'], [
      ['ce à quoi', 's’attendre à, tenir à', 'C’est exactement ce à quoi je m’attendais.'],
      ['ce sur quoi', 'se mettre d’accord sur', 'Ce sur quoi nous devons nous mettre d’accord, c’est le calendrier.'],
      ['ce contre quoi', 'se battre contre', 'Ce contre quoi il se bat, c’est l’oubli.'],
      ['rien à quoi, quelque chose à quoi', 'pas de nom précis', 'Il y a quelque chose à quoi personne n’a pensé.'],
      ['sans quoi, faute de quoi', 'sinon', 'Joignez une pièce d’identité, sans quoi le dossier sera refusé.'],
      ['après quoi', 'ensuite', 'Remplissez le formulaire, après quoi vous recevrez votre carte.'],
      ['moyennant quoi', 'en échange de quoi', 'Le lecteur verse une caution, moyennant quoi il peut emprunter les cartes.'],
      ['une chose à quoi', 'littéraire', 'C’est une chose à quoi je n’avais jamais songé.'],
    ]),
    table('sheet-quoi-infinitif', 'La relative à l’infinitif', ['Forme', 'Sens', 'Exemple'], [
      ['où + infinitif', 'un lieu pour', 'Il cherche un endroit où dormir ce soir.'],
      ['à qui, sur qui + infinitif', 'une personne pour', 'Elle a enfin trouvé quelqu’un sur qui compter.'],
      ['préposition + lequel + infinitif', 'une chose pour', 'Il nous manque un outil avec lequel trier les photos.'],
      ['de quoi + infinitif', 'assez pour', 'Avec ce salaire, ils ont à peine de quoi vivre.'],
      ['il y a de quoi, pas de quoi', 'une raison, aucune raison', 'Il n’y a pas de quoi s’inquiéter.'],
      ['à + infinitif, sans relative', 'something to', 'Je cherche quelque chose à lire pour le train.'],
    ]),
  ]),
  sheet('sheet-accroche', 'À quel nom ?', ['les indices', 'lequel sujet', 'les réparations'], [
    teach('sheet-accroche-teach', 'Deux noms, une relative',
      'Après « le nom de nom », une relative peut tenir à l’un ou à l’autre. Cherche l’indice : le nombre du verbe (sont), l’accord du participe (signée), le genre de lequel, ou le sens. S’il n’y a pas d’indice, répare : rapproche la relative de son nom, coupe en deux phrases, ou, à l’écrit soigné, emploie lequel sujet. Lequel ne tranche que si les deux noms diffèrent par le genre ou le nombre. EN: look for the clue; if there is none, repair.'),
    table('sheet-accroche-indices', 'Les indices', ['Indice', 'Ce qu’il montre', 'Exemple'], [
      ['le nombre du verbe', 'un nom pluriel', 'Les clés du bureau qui sont sur la table sont à toi.'],
      ['le participe accordé', 'un nom féminin', 'La copie du contrat que le notaire a signée est au dossier.'],
      ['le genre du participe', 'le directeur ou la fille', 'La fille du directeur, qui est partie hier, reviendra lundi.'],
      ['le sens', 'le seul nom possible', 'Le chien de la voisine qui aboie toute la nuit empêche tout le monde de dormir.'],
      ['aucun indice', 'il faut réécrire', 'Le fils de la voisine qui chante dans la chorale part à Lyon.'],
    ]),
    table('sheet-accroche-reparer', 'Réparer', ['Moyen', 'Registre', 'Exemple'], [
      ['lequel, laquelle sujet', 'écrit, administratif', 'La sœur de Paul, laquelle vit à Genève, hérite de la maison.'],
      ['rapprocher la relative', 'tous', 'Le propriétaire, qui prend les travaux en charge, signe le bail avec le locataire.'],
      ['deux phrases', 'tous, surtout l’oral', 'La fille du gardien nous ouvrira ; elle travaille aux Archives.'],
      ['lequel ne suffit pas', 'deux noms de même genre', 'Le locataire et le propriétaire, lequel prend les travaux en charge, signent le bail.'],
      ['auquel cas', 'écrit soigné', 'La salle sera peut-être pleine, auquel cas nous ouvrirons la seconde.'],
    ]),
  ]),
  sheet('sheet-sens', 'Le sens : virgules et où', ['explicative ou déterminative', 'où ou la préposition'], [
    teach('sheet-sens-teach', 'Trier ou commenter',
      `${Cap(QUI_QUE_REF)} disait déjà : deux virgules, un ajout. Au C1, regarde ce que cela change. Avec un pluriel, sans virgules, une partie seulement ; avec virgules, tous. L’explicative cache souvent une cause ou une concession. Un nom propre précédé d’un article et suivi d’une déterminative devient une époque ou une facette. EN: no commas, only some; commas, all of them, often with a hidden reason.`),
    table('sheet-sens-virgules', 'Avec ou sans virgules', ['Phrase', 'Qui est concerné', 'Valeur'], [
      ['Les candidats qui ont échoué pourront repasser l’épreuve en juin.', 'une partie des candidats', 'tri'],
      ['Les candidats, qui ont échoué, pourront repasser l’épreuve en juin.', 'tous les candidats', 'commentaire'],
      ['Mon frère, qui ne boit jamais, a pris le volant au retour.', 'le frère', 'une cause cachée'],
      ['Ce texte, qui semble simple, cache plusieurs pièges.', 'le texte', 'une concession cachée'],
      ['Le Montréal où j’ai grandi n’existe plus.', 'un Montréal d’autrefois', 'une époque'],
    ]),
    table('sheet-sens-ou', 'Où, ou la préposition et lequel', ['Nom', 'Forme', 'Exemple'], [
      ['situation, domaine, époque', 'où (dans lequel, plus soutenu)', 'Nous sommes dans une situation où chaque jour compte.'],
      ['cas, point, mesure', 'où, figé', 'Je vous aiderai dans la mesure où je le pourrai.'],
      ['dans le cas où, au cas où', 'où + conditionnel', 'Dans le cas où la salle serait fermée, appelez l’accueil.'],
      ['principe, règle, théorie', 'sur lequel, sur laquelle', 'La règle sur laquelle repose tout le système date de 1950.'],
      ['méthode, moyen', 'par lequel, par laquelle', 'La méthode par laquelle on date les papiers est récente.'],
      ['contexte', 'où ou dans lequel', 'Le contexte dans lequel ces lettres ont été écrites explique leur ton.'],
      ['là où', 'à l’endroit où, au point où', 'Là où nos chemins se séparent, c’est sur qui paie.'],
    ]),
  ]),
  sheet('sheet-registre', 'Registre et écriture', ['les relatives emboîtées', 'de et dont', 'alléger', 'la liste de contrôle'], [
    teach('sheet-registre-teach', 'Chaque forme a son registre',
      'Une relative peut contenir une autre proposition. À l’oral familier, que je crois qui ; à l’écrit, qui, je crois, ou, plus soutenu, dont je crois qu’il ; que je crois que reste correct mais lourd. De et dont disent la même chose : c’est de cela qu’il s’agit, ou c’est cela dont il s’agit. Au-delà de deux relatives sur un même nom, remplace l’une par un participe, un adjectif ou un complément. EN: each nested form has its register; never de before the noun and dont after it; lighten chains.'),
    table('sheet-registre-table', 'Une phrase, quatre registres', ['Forme', 'Registre', 'Exemple'], [
      ['qui, je crois,', 'tous', 'C’est un livre qui, je crois, te plaira.'],
      ['dont je crois qu’il', 'écrit soutenu', 'C’est un projet dont on peut espérer qu’il aboutira.'],
      ['que je crois que', 'correct, lourd', 'C’est un livre que je crois que tu aimeras.'],
      ['que je crois qui', 'oral familier', 'C’est un livre que je crois qui te plaira.'],
      ['c’est de cela que', 'tous', 'C’est de cela qu’il s’agit.'],
      ['c’est de cela dont', 'à éviter à l’écrit', 'de répété : dont contient déjà de'],
    ]),
    table('sheet-registre-controle', 'Ta notice', ['À vérifier', 'Comment'], [
      ['Chaque relative tient à un seul nom', 'un accord, un genre, ou lequel'],
      ['Une partie du tout', 'dont deux, dont la plupart'],
      ['Une préposition sans nom', 'ce à quoi, faute de quoi'],
      ['Un lieu ou une ressource', 'une salle où lire, de quoi s’initier'],
      ['Les virgules choisies', 'tous ou certains'],
      ['Pas plus de deux relatives par nom', 'un participe, un complément'],
    ]),
  ]),
];

/** Missions do not shuffle (MissionRich renders authored order), so every
 *  closed mission item and drill is ROTATED here, `correct` moved in step,
 *  so that each option-count class spreads evenly and no slot repeats more
 *  than twice in a row. Same walk order as `b1-answer-slots.test.ts`. No
 *  text changes; no `why` in this lesson names a position. As b2.06 does. */
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

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8, ACT9, ACT10, ACT11];

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

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-c1-04-[a-z0-9-]+/g) ?? [])];

const ONE_TAKE = 'REQUIRED FOR THE EAR MISSION: ONE TAKE, ONE VOICE, lines in authored order, at natural C1 speed.';
const PIEGE = "The audio step plays each card's CORRECT sentence. Six lines, one voice. The wrong versions in promptSound are NEVER spoken.";
const TEXTE = 'One voice, read as the exercise text: each « (…) » is read as a short pause, and a bracketed infinitive is spoken as written, never conjugated.';
const REC_DESC: Record<string, string> = {
  'rec-c1-04-malle': 'The Archives newsletter (act 1), one voice, one take, the even tone of an institutional newsletter. The commas around « qui ont voyagé dans une malle » and « laquelle a classé les lettres » get a clear pause; « qui portent un cachet rouge » gets none.',
  'rec-c1-04-inventaire': 'Mathilde and the coach at the Archives (act 2), two voices plus the learner lines, one take, unhurried office tone. The learner’s faulty line « dont j’en connaissais trois » is read naturally, never mocked.',
  'rec-c1-04-partitif': 'The four partitive cards (act 2). One voice. After « dont » read the number with no pause: « dont douze étudiants ».',
  'rec-c1-04-partitif-ecoute': `${ONE_TAKE} Ten lines. The quantities (douze, deux, la plupart, la moitié, trois) must be clearly audible; no line may stress them.`,
  'rec-c1-04-texte-a2': `The association’s minutes (act 2). ${TEXTE}`,
  'rec-c1-04-reglement': 'Karim and the coach in the reading room (act 3), two voices plus the learner lines, one take, quiet library register.',
  'rec-c1-04-quoi': 'The four quoi cards (act 3). One voice. Card four holds a pair: read « à laquelle » and « à quoi » at the same pace.',
  'rec-c1-04-piege-quoi': PIEGE,
  'rec-c1-04-texte-a3': `The reading-room rules (act 3). ${TEXTE}`,
  'rec-c1-04-infinitif-ecoute': `${ONE_TAKE} Ten lines. Each infinitive (dormir, parler, compter, écrire, vivre…) is clearly audible; « de quoi » never swallowed.`,
  'rec-c1-04-infinitif': 'The four infinitive cards (act 4). One voice, even pace. No pause between « où » and the infinitive.',
  'rec-c1-04-texte-a4': `Sophie’s message (act 4). ${TEXTE}`,
  'rec-c1-04-note': 'Karim’s note read by Mathilde (act 5), two voices plus the learner lines, one take. The three sentences are read flat: no stress may resolve the ambiguity.',
  'rec-c1-04-indices': 'The four clue cards (act 5). One voice. Cards two and three hold pairs that sound identical (signée / signé, partie / parti): read them identically; the learner must see the difference, not hear it.',
  'rec-c1-04-indices-ecoute': `${ONE_TAKE} Eight lines, flat reading. « sont » in lines one and eight must be clearly audible; line five must give no clue.`,
  'rec-c1-04-piege-accroche': PIEGE,
  'rec-c1-04-texte-a5': `Karim’s note (act 5). ${TEXTE}`,
  'rec-c1-04-notaire': 'At the notary’s office (act 6), two voices plus the learner lines, one take, measured legal register. « lequel » is never stressed.',
  'rec-c1-04-lequel': 'The four lequel cards (act 6). One voice. The commas around each lequel clause get a clear pause.',
  'rec-c1-04-texte-a6': `Mathilde’s rewritten minutes (act 6). ${TEXTE}`,
  'rec-c1-04-jury': 'Inès and the coach at the exam centre (act 7), two voices plus the learner lines, one take. The two candidate sentences must differ ONLY by the pauses at the commas.',
  'rec-c1-04-virgules': 'The four comma cards (act 7). One voice. In each pair, the version with commas has two clear pauses and the version without has none.',
  'rec-c1-04-virgules-ecoute': `${ONE_TAKE} Eight lines in pairs (one and two, three and four, five and six, seven and eight). THE PAUSES ARE THE ONLY CUE: commas read as clear pauses with a slight drop in pitch, no pause at all where there is no comma.`,
  'rec-c1-04-piege-virgules': `${PIEGE} The pauses at the commas must be clearly audible.`,
  'rec-c1-04-texte-a7': `The residence rules (act 7). ${TEXTE} Commas read as clear pauses.`,
  'rec-c1-04-ou-ecoute': `${ONE_TAKE} Ten lines, the neutral tone of an annual report. Line nine is a reused row from lesson 21 in C1: same voice.`,
  'rec-c1-04-piege-ou': PIEGE,
  'rec-c1-04-texte-a8': `The annual report (act 8). ${TEXTE}`,
  'rec-c1-04-chronique': 'The language column (act 9), one voice, one take, the tone of a radio language columnist: amused, precise, never mocking. The quoted sentences, faulty ones included, are read naturally.',
  'rec-c1-04-emboite': 'The four nested-relative cards (act 9). One voice. Card one: clear pauses around « je crois ». Card four is read as relaxed speech, not as a caricature.',
  'rec-c1-04-texte-a9': `The four messages (act 9). One voice per message is welcome (two male, two female); otherwise one voice. Read as written.`,
  'rec-c1-04-papier': 'The paper-dating article (act 10), one voice, one take, the measured pace of a CE exam recording. Mathilde Rozier’s quotation may take a second, female voice.',
  'rec-c1-04-alleger': 'The four lightening cards (act 10). One voice. Card one is read at the same even pace throughout, so the length itself is heard.',
  'rec-c1-04-texte-a10': `Noé’s draft (act 10). ${TEXTE}`,
  'rec-c1-04-modele': 'The model notice (act 11), one voice, one take, read as a heritage-days presenter would: clear, warm, unhurried. The commas around « laquelle a dirigé l’imprimerie » and « qui ont gardé leurs machines d’origine » get clear pauses.',
};
void ONE_TAKE; void PIEGE; void TEXTE;

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'C1 · LEÇON 4',
  intro: 'In B1 you learned the relative pronouns (lessons 11 to 13: qui and que, dont and où, lequel and ce qui), and in B2 the mood they take (lesson 6). This lesson is about what C1 writing and reading demand of them: which noun a relative clause hangs on, and what it adds. You build partitive dont (dont deux, dont la plupart), preposition + quoi (ce à quoi, faute de quoi), relatives ending on an infinitive (un endroit où dormir, de quoi vivre); you learn to spot an ambiguous attachment in a long noun group and repair it, with lequel as subject among other tools; you use the comma to change who is concerned, choose où or dans lequel after an abstract noun, read nested relatives by register, and lighten chains of qui. The task: a 250 to 350 word notice for a restored building, built from raw notes.',
  skill: 'PE',
  grammarAssumed: [QUI_QUE_UNIT, DONT_OU_UNIT, LEQUEL_UNIT, SUBJ_IND_UNIT],
  grammarIntroduced: [
    'Partitive dont with a number, a fraction or a quantifier (dont deux, dont la moitié, dont la plupart, dont certains, dont moi), with or without a verb; parmi lesquels; no en after dont; no « dont deux d’entre eux »',
    'Preposition + quoi with no noun antecedent: ce à quoi, ce sur quoi, ce contre quoi, ce par quoi, rien à quoi, quelque chose à quoi, voilà à quoi; sans quoi, faute de quoi, après quoi, moyennant quoi picking up a clause; quoi after a noun as literary',
    'Relative clauses ending on an infinitive: où + infinitive, preposition + qui or lequel + infinitive, quoi + infinitive; de quoi + infinitive (avoir de quoi, il y a de quoi, pas de quoi); never que + infinitive',
    'Attachment ambiguity in long noun groups (le N de N + relative) and the clues that resolve it: verb number, participle agreement, sense',
    'Lequel, laquelle, lesquels, lesquelles as subject of an explicative relative to remove an ambiguity, in written and administrative register; its limit when both nouns share gender and number; other repairs (moving the clause, splitting the sentence); auquel cas',
    'Explicative against déterminative as meaning: how many referents are concerned, the hidden cause or concession of an explicative, the proper noun with an article and a déterminative relative',
    'Où against preposition + lequel after abstract nouns: situation, domaine, époque, point, cas, mesure with où; principe, règle, méthode, théorie with the verb’s preposition and lequel; fixed dans le cas où, au point où, dans la mesure où; là où',
    'Nested relatives by register: dont je sais qu’il (soutenu), que je crois que (correct, heavy), que je crois qui (familiar speech, recognition only), qui, je crois, (all registers); « c’est de cela dont » as a pleonasm to avoid',
    'Lightening a chain of relatives with a participle, an adjective, a complement or two sentences; reading au cours duquel, à l’issue de laquelle, en vertu duquel, à l’égard desquels in formal prose',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Au B1, tu as appris les pronoms relatifs ; au B2, le mode de la relative. Ici, tu apprends ce que l’écrit du C1 en attend : à quel nom une relative s’accroche, et ce qu’elle lui ajoute. Dont deux, ce à quoi, un endroit où dormir, lequel pour lever un doute, les virgules qui changent le sens, où ou dans lequel, les relatives emboîtées, et l’art d’alléger. À la fin, tu rédiges en 250 à 350 mots la notice d’un bâtiment restauré.',
    minutes: 160,
    difficulty: 4,
    glyph: 'dont',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: RELATIVES_COMPLEXES_TERMS,
  sections: SECTIONS,
  itemIds: ITEM_IDS,
  version: 1,
  audio: {
    defaultLang: 'fr-FR',
    speeds: [1, 0.65],
    // Inert (build log, 2026-09-25). Kept, as every B1, B2 and C1 lesson keeps it.
    coachVoice: 'coach-fr-FR',
    recorded: REC_IDS.map((id) => ({ id, desc: REC_DESC[id] ?? `${id}: missing studio brief` })),
  },
};

LESSON.overview!.screens = ACTS.reduce((n, a) => n + a.act.estScreens, 0);

/** The lesson as the validators see it (`task` is in the schema, so this is
 *  the lesson itself; kept for the house tests and the preview). */
export function lessonWithoutTask(): Lesson {
  return LESSON;
}

/** Named so a batch, a merge and a test agree on what is named, not released. */
export const NAMED_NOT_RELEASED = [...NOT_DECK_ABLE];
export { IMPORTED, IMPORT_IDS, NOT_SPEAKABLE, LECTURE_MODELE, NOTES_GARE, dicteeFor };
